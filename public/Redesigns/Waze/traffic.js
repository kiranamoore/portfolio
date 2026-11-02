(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const layer = document.createElement("div");
  layer.className = "traffic";
  layer.setAttribute("aria-hidden", "true");
  document.body.appendChild(layer);

  const LANE = 9;
  const HARD = 14;
  const FOLLOW = 44;
  const TARGET = { red: 16, orange: 8, other: 4 };
  const SHADES = [0.4, 0.52, 0.64, 0.76, 0.88, 1, 1.12, 1.24, 1.36, 1.48];
  const cars = [];
  let nodes = [];
  let streets = [];
  let nextId = 1;
  let shadeCursor = Math.floor(Math.random() * SHADES.length);
  let spawnTimer = 0;

  function roadColor(el) {
    if (el.classList.contains("red")) return "red";
    if (el.classList.contains("orange")) return "orange";
    if (el.classList.contains("green")) return "green";
    return "local";
  }

  function buildGraph() {
    const roads = Array.prototype.filter.call(document.querySelectorAll(".road.h, .road.v"), function (el) {
      const r = el.getBoundingClientRect();
      return r.width > 8 && r.height > 8;
    });
    const horiz = [];
    const verts = [];
    streets = [];
    roads.forEach(function (el) {
      const r = el.getBoundingClientRect();
      const box = {
        x: r.left + window.scrollX,
        y: r.top + window.scrollY,
        w: r.width,
        h: r.height,
        color: roadColor(el)
      };
      const horizontal = el.classList.contains("h") || box.w > box.h * 1.5;
      if (horizontal) {
        horiz.push({ y: box.y + box.h / 2, x1: box.x, x2: box.x + box.w, band: box.h / 2, color: box.color });
      } else {
        verts.push({ x: box.x + box.w / 2, y1: box.y, y2: box.y + box.h, band: box.w / 2, color: box.color });
      }
    });

    const avenues = [];
    verts.sort(function (a, b) { return a.x - b.x; });
    verts.forEach(function (v) {
      let avenue = null;
      for (let i = 0; i < avenues.length; i++) {
        if (Math.abs(avenues[i].x - v.x) < 18) {
          avenue = avenues[i];
          break;
        }
      }
      if (!avenue) {
        avenue = { x: v.x, color: v.color, segs: [] };
        avenues.push(avenue);
      }
      avenue.segs.push(v);
      let sum = 0;
      avenue.segs.forEach(function (s) { sum += s.x; });
      avenue.x = sum / avenue.segs.length;
    });

    const list = [];
    function nodeAt(x, y) {
      for (let i = 0; i < list.length; i++) {
        const n = list[i];
        if (Math.abs(n.x - x) < 16 && Math.abs(n.y - y) < 16) return n;
      }
      const created = { id: list.length, x: x, y: y, edges: [] };
      list.push(created);
      return created;
    }
    function link(a, b, color) {
      if (!a || !b || a === b) return;
      const len = Math.hypot(a.x - b.x, a.y - b.y);
      if (len < 8) return;
      if (a.edges.some(function (e) { return e.to === b; })) return;
      a.edges.push({ to: b, len: len, color: color });
      b.edges.push({ to: a, len: len, color: color });
    }

    horiz.forEach(function (h) {
      const xs = [h.x1, h.x2];
      avenues.forEach(function (av) {
        const touches = av.segs.some(function (s) {
          return s.y2 >= h.y - h.band - 10 && s.y1 <= h.y + h.band + 10;
        });
        if (touches && av.x > h.x1 + 4 && av.x < h.x2 - 4) xs.push(av.x);
      });
      xs.sort(function (a, b) { return a - b; });
      let prev = nodeAt(xs[0], h.y);
      for (let i = 1; i < xs.length; i++) {
        const n = nodeAt(xs[i], h.y);
        link(prev, n, h.color);
        prev = n;
      }
      streets.push({ color: h.color, axis: "h", y: h.y, x1: h.x1, x2: h.x2, length: Math.max(1, h.x2 - h.x1) });
    });

    avenues.forEach(function (av) {
      const ys = [];
      av.segs.forEach(function (s) {
        ys.push(s.y1, s.y2);
      });
      horiz.forEach(function (h) {
        const touches = av.segs.some(function (s) {
          return s.y2 >= h.y - h.band - 10 && s.y1 <= h.y + h.band + 10;
        });
        if (touches) ys.push(h.y);
      });
      ys.sort(function (a, b) { return a - b; });
      const uniq = [];
      ys.forEach(function (y) {
        if (!uniq.length || Math.abs(uniq[uniq.length - 1] - y) > 10) uniq.push(y);
      });
      if (uniq.length < 2) return;
      streets.push({
        color: av.color,
        axis: "v",
        x: av.x,
        y1: uniq[0],
        y2: uniq[uniq.length - 1],
        length: Math.max(1, uniq[uniq.length - 1] - uniq[0])
      });
      let prev = nodeAt(av.x, uniq[0]);
      for (let i = 1; i < uniq.length; i++) {
        const n = nodeAt(av.x, uniq[i]);
        const yA = Math.min(prev.y, n.y);
        const yB = Math.max(prev.y, n.y);
        const covered = av.segs.some(function (s) {
          return s.y1 - 8 <= yA && s.y2 + 8 >= yB;
        });
        const junction = horiz.some(function (h) {
          return h.y >= yA - 6 && h.y <= yB + 6;
        });
        if (covered || (junction && yB - yA < 90)) link(prev, n, av.color);
        prev = n;
      }
    });

    nodes = list.filter(function (n) { return n.edges.length > 0; });
  }

  function polylineLength(points) {
    let len = 0;
    for (let i = 0; i < points.length - 1; i++) {
      len += Math.hypot(points[i + 1].x - points[i].x, points[i + 1].y - points[i].y);
    }
    return len;
  }

  function extendOut(from, toward) {
    const dx = from.x - toward.x;
    const dy = from.y - toward.y;
    const len = Math.hypot(dx, dy) || 1;
    return { x: from.x + (dx / len) * 90, y: from.y + (dy / len) * 90 };
  }

  function onStreet(street, node) {
    if (street.axis === "h") {
      return Math.abs(node.y - street.y) < 20 && node.x >= street.x1 - 8 && node.x <= street.x2 + 8;
    }
    return Math.abs(node.x - street.x) < 20 && node.y >= street.y1 - 8 && node.y <= street.y2 + 8;
  }

  function streetVisible(street) {
    if (street.axis === "h") {
      return street.y >= window.scrollY + 24 && street.y <= window.scrollY + window.innerHeight - 24;
    }
    return street.y2 >= window.scrollY + 24 && street.y1 <= window.scrollY + window.innerHeight - 24;
  }

  function carsNear(street) {
    let count = 0;
    cars.forEach(function (car) {
      if (street.axis === "h") {
        if (Math.abs(car.y - street.y) < 34 && car.x >= street.x1 - 120 && car.x <= street.x2 + 120) count += 1;
      } else if (Math.abs(car.x - street.x) < 34 && car.y >= street.y1 - 120 && car.y <= street.y2 + 120) {
        count += 1;
      }
    });
    return count;
  }

  function pickStreet(color, preferVisible) {
    let options = streets.filter(function (street) { return street.color === color; });
    if (!options.length) return null;
    if (preferVisible) {
      const visible = options.filter(streetVisible);
      if (visible.length) options = visible;
    }
    options.sort(function (a, b) { return carsNear(a) / a.length - carsNear(b) / b.length; });
    const best = carsNear(options[0]) / options[0].length;
    const tied = options.filter(function (street) {
      return Math.abs(carsNear(street) / street.length - best) < 0.0005;
    });
    return tied[Math.floor(Math.random() * tied.length)];
  }

  function routeForStreet(street) {
    const pool = nodes.filter(function (node) { return onStreet(street, node); });
    if (pool.length < 2) return null;
    const belongs = {};
    pool.forEach(function (node) { belongs[node.id] = true; });
    const start = pool.filter(function (node) {
      return node.edges.filter(function (edge) {
        return edge.color === street.color && belongs[edge.to.id];
      }).length <= 1;
    })[0] || pool[0];
    const path = [start];
    let prev = null;
    let cur = start;
    for (let step = 0; step < 40; step++) {
      let edge = null;
      for (let i = 0; i < cur.edges.length; i++) {
        const candidate = cur.edges[i];
        if (candidate.color !== street.color || candidate.to === prev || !belongs[candidate.to.id]) continue;
        edge = candidate;
        break;
      }
      if (!edge) break;
      prev = cur;
      cur = edge.to;
      path.push(cur);
    }
    if (path.length < 2) return null;
    const points = path.map(function (node) { return { x: node.x, y: node.y }; });
    return [extendOut(points[0], points[1])].concat(points, [extendOut(points[points.length - 1], points[points.length - 2])]);
  }

  function sample(points, dist) {
    let remain = dist;
    for (let i = 0; i < points.length - 1; i++) {
      const a = points[i];
      const b = points[i + 1];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const len = Math.hypot(dx, dy) || 1;
      if (remain <= len || i === points.length - 2) {
        const t = Math.max(0, Math.min(1, remain / len));
        const ux = dx / len;
        const uy = dy / len;
        let ox = -uy * LANE;
        let oy = ux * LANE;
        if (t > 0.72 && i < points.length - 2) {
          const c = points[i + 2];
          const dx2 = c.x - b.x;
          const dy2 = c.y - b.y;
          const l2 = Math.hypot(dx2, dy2) || 1;
          const blend = (t - 0.72) / 0.28;
          ox = ox * (1 - blend) + (-dy2 / l2 * LANE) * blend;
          oy = oy * (1 - blend) + (dx2 / l2 * LANE) * blend;
        }
        return {
          x: a.x + dx * t + ox,
          y: a.y + dy * t + oy,
          dx: ux,
          dy: uy,
          angle: Math.atan2(ux, -uy) * 180 / Math.PI
        };
      }
      remain -= len;
    }
    const last = points[points.length - 1];
    return { x: last.x, y: last.y, dx: 1, dy: 0, angle: 90 };
  }

  function nextShade() {
    for (let i = 0; i < SHADES.length; i++) {
      const shade = SHADES[(shadeCursor + i) % SHADES.length];
      const taken = cars.some(function (car) { return Math.abs(car.shade - shade) < 0.12; });
      if (!taken) {
        shadeCursor = (shadeCursor + i + 1) % SHADES.length;
        return shade;
      }
    }
    shadeCursor = (shadeCursor + 1) % SHADES.length;
    return SHADES[shadeCursor];
  }

  function onScreen(p) {
    const pad = 40;
    return p.x >= window.scrollX + pad &&
      p.x <= window.scrollX + window.innerWidth - pad &&
      p.y >= window.scrollY + pad &&
      p.y <= window.scrollY + window.innerHeight - pad;
  }

  function counts() {
    const tally = { red: 0, orange: 0, green: 0, local: 0, other: 0 };
    cars.forEach(function (car) { tally[car.color] += 1; });
    tally.other = tally.green + tally.local;
    return tally;
  }

  function pickDistance(route, preferVisible) {
    const length = polylineLength(route);
    const visible = [];
    for (let dist = 40; dist < length - 40; dist += 50) {
      if (onScreen(sample(route, dist))) visible.push(dist);
    }
    if (preferVisible && visible.length) return visible[Math.floor(Math.random() * visible.length)];
    if (Math.random() < 0.35) return 0;
    if (visible.length && Math.random() < 0.4) return visible[Math.floor(Math.random() * visible.length)];
    return 40 + Math.random() * Math.max(1, length - 120);
  }

  function nextColor() {
    const tally = counts();
    const choices = [
      { color: "red", deficit: TARGET.red - tally.red },
      { color: "orange", deficit: TARGET.orange - tally.orange },
      { color: tally.green <= tally.local ? "green" : "local", deficit: TARGET.other - tally.other }
    ];
    choices.sort(function (a, b) { return b.deficit - a.deficit; });
    if (choices[0].deficit <= 0) return null;
    return choices[0].color;
  }

  function blocked(car, next) {
    for (let i = 0; i < cars.length; i++) {
      const other = cars[i];
      if (other === car) continue;
      const dx = other.x - next.x;
      const dy = other.y - next.y;
      const dist = Math.hypot(dx, dy);
      if (dist < HARD) {
        if (other.waiting && car.id < other.id) continue;
        return true;
      }
      const sameWay = car.dx * other.dx + car.dy * other.dy > 0.65;
      if (!sameWay || dist > FOLLOW) continue;
      const ahead = (other.x - car.x) * car.dx + (other.y - car.y) * car.dy > 0;
      if (ahead) return true;
    }
    return false;
  }

  function addCar(route, dist, color) {
    const start = sample(route, dist);
    const el = document.createElement("img");
    el.className = "car";
    el.src = "car.png";
    el.alt = "";
    el.draggable = false;
    const shade = nextShade();
    el.style.setProperty("--bright", String(shade));
    layer.appendChild(el);
    const car = {
      id: nextId++,
      el: el,
      route: route,
      dist: dist,
      length: polylineLength(route),
      speed: 78 + Math.random() * 48,
      shade: shade,
      color: color,
      x: start.x,
      y: start.y,
      dx: start.dx,
      dy: start.dy,
      waiting: false,
      wait: 0
    };
    place(car, start);
    cars.push(car);
  }

  function spawnColor(color, preferVisible) {
    const tally = counts();
    const used = color === "green" || color === "local" ? tally.other : tally[color];
    const cap = color === "green" || color === "local" ? TARGET.other : TARGET[color];
    if (used >= cap || !nodes.length) return false;
    function attempt(mustBeVisible) {
      for (let i = 0; i < 12; i++) {
        const street = pickStreet(color, mustBeVisible);
        if (!street) return false;
        const route = routeForStreet(street);
        if (!route) continue;
        for (let j = 0; j < 8; j++) {
          const dist = pickDistance(route, mustBeVisible);
          const start = sample(route, dist);
          if (mustBeVisible && !onScreen(start)) continue;
          if (blocked({ id: -1, x: start.x, y: start.y, dx: start.dx, dy: start.dy, waiting: false }, start)) continue;
          addCar(route, dist, color);
          return true;
        }
      }
      return false;
    }
    if (preferVisible && attempt(true)) return true;
    return attempt(false);
  }

  function fillRoads() {
    [
      ["red", true], ["red", true], ["red", true], ["red", true],
      ["red", true], ["red", true], ["red", true], ["red", true],
      ["orange", true], ["orange", true], ["orange", true], ["orange", true],
      ["green", true], ["green", true],
      ["red", false], ["red", false], ["red", false], ["red", false],
      ["red", false], ["red", false], ["red", false], ["red", false],
      ["orange", false], ["orange", false], ["orange", false], ["orange", false],
      ["local", false], ["local", false]
    ].forEach(function (item) {
      spawnColor(item[0], item[1]);
    });
  }

  function place(car, p) {
    car.x = p.x;
    car.y = p.y;
    car.dx = p.dx;
    car.dy = p.dy;
    car.el.style.transform = "translate(" + p.x + "px," + p.y + "px) rotate(" + p.angle + "deg)";
  }

  function clearCars() {
    cars.splice(0, cars.length).forEach(function (car) {
      car.el.remove();
    });
  }

  let last = 0;
  function frame(now) {
    if (!last) last = now;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    for (let i = cars.length - 1; i >= 0; i--) {
      const car = cars[i];
      const nextDist = car.dist + car.speed * dt;
      const next = sample(car.route, nextDist);
      if (blocked(car, next)) {
        car.waiting = true;
        car.wait += dt;
        if (car.wait > 4) {
          car.el.remove();
          cars.splice(i, 1);
        }
        continue;
      }
      car.waiting = false;
      car.wait = 0;
      car.dist = nextDist;
      if (car.dist >= car.length - 1) {
        car.el.remove();
        cars.splice(i, 1);
        continue;
      }
      place(car, next);
    }
    spawnTimer -= dt;
    if (spawnTimer <= 0) {
      const color = nextColor();
      if (color) spawnColor(color, false);
      const extra = nextColor();
      if (extra) spawnColor(extra, false);
      spawnTimer = 0.3 + Math.random() * 0.45;
    }
    window.requestAnimationFrame(frame);
  }

  function boot() {
    buildGraph();
    fillRoads();
    spawnTimer = 0.3 + Math.random() * 0.45;
    window.requestAnimationFrame(frame);
  }

  let resizeTimer = 0;
  window.addEventListener("resize", function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(function () {
      clearCars();
      buildGraph();
      fillRoads();
    }, 180);
  });

  if (document.readyState === "loading") window.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
