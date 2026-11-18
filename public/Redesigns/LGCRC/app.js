(function () {
  const SCENES = 8;
  const SPAN = SCENES - 1 + 1.15;

  const BGS = ["#F4E6D4", "#E5D39A", "#E07A3D", "#3C241C", "#F6EBDD", "#2A1812", "#FBF3EA", "#D23B2E"];

  const MOTIF = [
    { x: 140, y: 148, w: 520, h: 76, rx: 2 },
    { x: 196, y: 158, w: 408, h: 46, rx: 4 },
    { x: 398, y: 270, w: 140, h: 156, rx: 70 },
    { x: 376, y: 374, w: 48, h: 56, rx: 6 },
    { x: 504, y: 274, w: 210, h: 36, rx: 18 },
    { x: 504, y: 274, w: 210, h: 36, rx: 18 },
    { x: 504, y: 274, w: 210, h: 36, rx: 18 },
    { x: -60, y: -60, w: 920, h: 860, rx: 0 },
  ];

  const track = document.getElementById("track");
  const stage = document.getElementById("stage");
  const visual = document.getElementById("visual");
  const svg = visual.querySelector("svg");
  const meter = document.getElementById("meter");
  const slides = [...document.querySelectorAll(".slide")];
  const tabs = [...document.querySelectorAll(".ticks button")];

  const storefront = document.getElementById("storefront");
  const hopper = document.getElementById("hopper");
  const beans = document.getElementById("beans");
  const beanEls = [...beans.querySelectorAll("ellipse")];
  const drum = document.getElementById("drum");
  const drumFace = document.getElementById("drumFace");
  const drumBeans = [...document.querySelectorAll("#drumBeans ellipse")];
  const grinder = document.getElementById("grinder");
  const burrL = document.getElementById("burrL");
  const burrR = document.getElementById("burrR");
  const dose = document.getElementById("dose");
  const mound = document.getElementById("mound");
  const puck = document.getElementById("puck");
  const basket = document.getElementById("basket");
  const lip = document.getElementById("lip");
  const spoutL = document.getElementById("spoutL");
  const spoutR = document.getElementById("spoutR");
  const cup = document.getElementById("cup");
  const liquid = document.getElementById("liquid");
  const crema = document.getElementById("crema");
  const streams = document.getElementById("streams");
  const tamper = document.getElementById("tamper");
  const motif = document.getElementById("motif");
  const extras = document.getElementById("extras");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let current = 0;
  let frame = 0;

  function clamp(v, a, b) {
    return Math.max(a, Math.min(b, v));
  }

  function smooth(t) {
    t = clamp(t, 0, 1);
    return t * t * (3 - 2 * t);
  }

  function hexToRgb(hex) {
    const n = parseInt(hex.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }

  function mixHex(a, b, t) {
    const pa = hexToRgb(a);
    const pb = hexToRgb(b);
    const c = pa.map((v, i) => Math.round(v + (pb[i] - v) * t));
    return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
  }

  function luminance(color) {
    const m = color.match(/\d+/g);
    if (!m) return 1;
    const [r, g, b] = m.map(Number);
    return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  }

  function presence(pos, i) {
    if (pos <= i - 0.32 || pos >= i + 1) return 0;
    if (pos < i) return smooth((pos - (i - 0.32)) / 0.32);
    if (pos < i + 0.68) return 1;
    return 1 - smooth((pos - (i + 0.68)) / 0.32);
  }

  function presenceRange(pos, a, b) {
    if (pos <= a - 0.32 || pos >= b + 0.32) return 0;
    if (pos < a) return smooth((pos - (a - 0.32)) / 0.32);
    if (pos > b) return 1 - smooth((pos - b) / 0.32);
    return 1;
  }

  function action(pos, i) {
    return smooth(clamp((pos - i) / 0.68, 0, 1));
  }

  function blend(pos) {
    const last = BGS.length - 1;
    if (pos >= last) return { bg: BGS[last], motif: MOTIF[last], tEnd: 1 };
    const i = Math.floor(pos);
    const f = pos - i;
    const t = f < 0.68 ? 0 : smooth((f - 0.68) / 0.32);
    return {
      bg: mixHex(BGS[i], BGS[i + 1], t),
      motif: lerpMotif(MOTIF[i], MOTIF[i + 1], t),
    };
  }

  function lerpMotif(a, b, t) {
    return {
      x: a.x + (b.x - a.x) * t,
      y: a.y + (b.y - a.y) * t,
      w: a.w + (b.w - a.w) * t,
      h: a.h + (b.h - a.h) * t,
      rx: a.rx + (b.rx - a.rx) * t,
    };
  }

  function rawPos() {
    const view = stage.offsetHeight || window.innerHeight;
    const max = Math.max(1, track.offsetHeight - view);
    const scrolled = clamp(-track.getBoundingClientRect().top, 0, max);
    return Math.min(SCENES - 1, (scrolled / max) * SPAN);
  }

  function shapeColor(pos) {
    if (pos < 4.68) return "#2A1812";
    if (pos < 5) return mixHex("#2A1812", "#F3E6D4", smooth((pos - 4.68) / 0.32));
    if (pos < 5.68) return "#F3E6D4";
    if (pos < 6) return mixHex("#F3E6D4", "#2A1812", smooth((pos - 5.68) / 0.32));
    return "#2A1812";
  }

  function liquidPath(fill) {
    const top = 634 - fill * (634 - 512);
    const left = 278 + (250 - 278) * fill;
    const right = 446 + (474 - 446) * fill;
    return {
      d: `M${left.toFixed(1)},${top.toFixed(1)} H${right.toFixed(1)} L446,634 H278 Z`,
      top,
      left,
      right,
    };
  }

  function showSlide(index, opacity) {
    slides.forEach((slide, i) => {
      const on = i === index;
      slide.style.opacity = on ? String(opacity) : "0";
      slide.style.visibility = on && opacity > 0.04 ? "visible" : "hidden";
      slide.setAttribute("aria-hidden", on ? "false" : "true");
    });
    tabs.forEach((tab, i) => {
      const on = i === index;
      if (on) tab.setAttribute("aria-current", "step");
      else tab.removeAttribute("aria-current");
      tab.setAttribute("aria-selected", on ? "true" : "false");
    });
    current = index;
  }

  function textState(pos, reduced) {
    if (reduced) return { index: Math.min(SCENES - 1, Math.round(pos)), opacity: 1 };
    if (pos >= SCENES - 1) return { index: SCENES - 1, opacity: 1 };
    const index = Math.floor(pos);
    const frac = pos - index;
    if (frac <= 0.72) return { index, opacity: 1 };
    const u = clamp((frac - 0.72) / 0.2, 0, 1);
    if (u < 0.5) return { index, opacity: 1 - u * 2 };
    return { index: Math.min(SCENES - 1, index + 1), opacity: (u - 0.5) * 2 };
  }

  function render() {
    const raw = rawPos();
    const reduced = reduceMotion.matches;
    let pos = raw;
    if (reduced) {
      const i = Math.min(SCENES - 1, Math.round(raw));
      pos = i === SCENES - 1 ? i : i + 0.68;
    }

    const blended = blend(pos);
    document.body.style.background = blended.bg;
    svg.style.setProperty("--bg", blended.bg);
    visual.dataset.theme = luminance(blended.bg) < 0.45 ? "dark" : "light";

    const text = textState(raw, reduced);
    showSlide(text.index, text.opacity);
    meter.style.transform = `scaleX(${clamp(raw / (SCENES - 1), 0, 1)})`;

    const m = blended.motif;
    motif.setAttribute("x", m.x.toFixed(1));
    motif.setAttribute("y", m.y.toFixed(1));
    motif.setAttribute("width", Math.max(0, m.w).toFixed(1));
    motif.setAttribute("height", Math.max(0, m.h).toFixed(1));
    motif.setAttribute("rx", Math.max(0, m.rx).toFixed(1));
    motif.style.opacity = String(1 - smooth(clamp((pos - 6.68) / 0.32, 0, 1)));

    storefront.style.opacity = String(presence(pos, 0));
    hopper.style.opacity = String(presence(pos, 1));
    beans.style.opacity = String(presence(pos, 1));
    drum.style.opacity = String(presence(pos, 2));
    drumFace.style.opacity = String(presence(pos, 2));
    grinder.style.opacity = String(presence(pos, 3));
    dose.style.opacity = String(presenceRange(pos, 4, 6.68));
    tamper.style.opacity = String(presence(pos, 5));

    const fall = action(pos, 1);
    beanEls.forEach((el, i) => {
      const t = smooth(clamp((fall - (i % 8) * 0.055) / 0.62, 0, 1));
      const dir = i % 2 ? 1 : -1;
      el.style.transform = `translateY(${(1 - t) * -340}px) rotate(${dir * ((1 - t) * 26 + t * 8)}deg)`;
    });

    burrL.setAttribute("transform", `rotate(${pos * 90} 352 314)`);
    burrR.setAttribute("transform", `rotate(${-pos * 90} 438 314)`);
    const pack = action(pos, 3);
    const bagBeans = document.getElementById("bagBeans");
    if (bagBeans) bagBeans.setAttribute("transform", `translate(0 ${(1 - pack) * 48})`);

    const roast = action(pos, 2);
    const roasted = mixHex("#C4894A", "#2A140E", roast);
    drumBeans.forEach((el) => el.setAttribute("fill", roasted));
    const beanGroup = document.getElementById("drumBeans");
    if (beanGroup) beanGroup.setAttribute("transform", `rotate(${pos * 48} 468 348)`);

    const doseT = action(pos, 4);
    mound.setAttribute("transform", `translate(0 ${doseT * 86})`);
    mound.style.opacity = String(presence(pos, 4) * (1 - smooth(clamp((doseT - 0.45) / 0.4, 0, 1))));

    const tamp = action(pos, 5);
    const compact = smooth(clamp((tamp - 0.32) / 0.68, 0, 1));
    const looseTop = 286;
    const tightTop = 308;
    const puckTop = looseTop + compact * (tightTop - looseTop);
    const puckH = 48 - compact * 20;
    puck.setAttribute("y", puckTop.toFixed(1));
    puck.setAttribute("height", puckH.toFixed(1));
    const landed = smooth(clamp((doseT - 0.4) / 0.45, 0, 1));
    puck.style.opacity = String(landed);

    const approach = smooth(clamp(tamp / 0.38, 0, 1));
    const away = smooth(clamp((pos - 5.68) / 0.32, 0, 1));
    const baseBottom = 12;
    const restY = looseTop - 200 - baseBottom;
    const seated = puckTop - baseBottom + 8;
    const tamperY = restY + approach * (seated - restY) - away * 210;
    const settle = 1 - smooth(clamp((pos - 5.72) / 0.36, 0, 1));
    const shift = settle * 24;
    const grow = 1 + settle * 0.2;
    const around = `translate(0 ${shift.toFixed(1)}) translate(360 310) scale(${grow.toFixed(3)}) translate(-360 -310)`;
    dose.setAttribute("transform", around);
    tamper.setAttribute("transform", `${around} translate(0 ${tamperY.toFixed(1)})`);

    const pour = action(pos, 6);
    const streamFade = 1 - smooth(clamp((pos - 6.68) / 0.28, 0, 1));
    streams.style.opacity = String(pour * streamFade * presenceRange(pos, 6, 6.68));
    streams.setAttribute("transform", `translate(0 368) scale(1 ${Math.max(pour, 0.001)}) translate(0 -368)`);

    const fill = smooth(clamp((pour - 0.08) / 0.92, 0, 1));
    if (fill < 0.02) {
      liquid.setAttribute("d", "");
      crema.style.opacity = "0";
    } else {
      const cupFill = liquidPath(fill);
      liquid.setAttribute("d", cupFill.d);
      const cremaAmt = smooth(clamp((fill - 0.58) / 0.42, 0, 1));
      crema.style.opacity = String(cremaAmt);
      crema.setAttribute("cy", cupFill.top.toFixed(1));
      crema.setAttribute("cx", ((cupFill.left + cupFill.right) / 2).toFixed(1));
      crema.setAttribute("rx", ((cupFill.right - cupFill.left) / 2).toFixed(1));
    }

    const narrow = window.innerWidth < 900;
    const cupIn = smooth(clamp((pos - 5.72) / 0.28, 0, 1));
    const serve = smooth(clamp((pos - 6.68) / 0.32, 0, 1));
    const scale = 1 + serve * (narrow ? 0.08 : 0.34);
    const lift = serve * (narrow ? -16 : -78);
    cup.style.opacity = String(cupIn);
    cup.setAttribute(
      "transform",
      `translate(0 ${lift.toFixed(1)}) translate(360 580) scale(${scale.toFixed(3)}) translate(-360 -580)`
    );

    extras.style.opacity = String(serve);

    const ink = shapeColor(pos);
    [basket, lip, spoutL, spoutR].forEach((el) => el.setAttribute("fill", ink));
  }

  function go(index) {
    const i = clamp(index, 0, SCENES - 1);
    const view = stage.offsetHeight || window.innerHeight;
    const max = Math.max(1, track.offsetHeight - view);
    const top = track.getBoundingClientRect().top + window.scrollY + (i / SPAN) * max;
    window.scrollTo({ top, behavior: reduceMotion.matches ? "auto" : "smooth" });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => go(Number(tab.dataset.scene)));
  });

  document.querySelector(".brand").addEventListener("click", (event) => {
    event.preventDefault();
    go(0);
  });

  window.addEventListener(
    "keydown",
    (event) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      if (event.key === "Home") go(0);
      else if (event.key === "End") go(SCENES - 1);
      else if (event.key === "ArrowRight") go(current + 1);
      else go(current - 1);
    },
    { passive: false }
  );

  function queue() {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      render();
    });
  }

  window.addEventListener("scroll", queue, { passive: true });
  window.addEventListener("resize", queue);
  reduceMotion.addEventListener("change", queue);
  render();
})();
