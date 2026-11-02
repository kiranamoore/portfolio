const MENUS = {
  about: {
    label: "About",
    items: [
      { label: "Mission & History", href: "https://sj-mqt.org/mission" },
      { label: "Staff & Board", href: "https://sj-mqt.org/staff-board" },
      { label: "Visit Us", href: "https://sj-mqt.org/visit-us" },
      { label: "News", href: "https://sj-mqt.org/news" },
      { label: "Job Opportunities", href: "https://sj-mqt.org/employment" },
      { label: "Contact Us", href: "https://sj-mqt.org/contact" }
    ]
  },
  collection: {
    label: "The Collection",
    items: [
      { label: "About the Collection", href: "https://sj-mqt.org/about-the-collection" },
      { label: "Search the Collection", href: "https://sj-mqt.org/search-the-collection" }
    ]
  },
  exhibitions: {
    label: "Exhibitions & Events",
    items: [
      { label: "On View", href: "https://sj-mqt.org/on-view" },
      { label: "Events and Workshops", href: "https://sj-mqt.org/upcoming-events" },
      { label: "Upcoming Exhibitions", href: "https://sj-mqt.org/upcoming-exhibitions" },
      { label: "50th Anniversary", href: "https://sj-mqt.org/50th-anniversary" },
      { label: "SoFA Pocket Park Murals", href: "https://sj-mqt.org/murals" }
    ]
  },
  support: {
    label: "Support Us",
    items: [
      { label: "Donate to SJMQT", href: "https://sj-mqt.org/donate-to-sjmqt" },
      { label: "June Hamilton Legacy Circle", href: "https://sj-mqt.org/leave-your-legacy" },
      { label: "Give a Membership", href: "https://sj-mqt.org/gift-memberships" },
      { label: "Become a Member", href: "https://sj-mqt.org/membership" },
      { label: "Volunteer", href: "https://sj-mqt.org/volunteer" },
      { label: "Rent our Space", href: "https://sj-mqt.org/facility-rental" }
    ]
  },
  resources: {
    label: "Resources",
    items: [
      { label: "Quilt Care", href: "https://sj-mqt.org/quiltcare" },
      { label: "Make a Quilt Label", href: "https://sj-mqt.org/make-a-quilt-label" },
      { label: "Quilt Sleeves", href: "https://sj-mqt.org/quilt-sleeves" }
    ]
  },
  online: {
    label: "24/7 Museum",
    items: [
      { label: "24/7 Exhibitions", href: "https://sj-mqt.org/online-exhibitions" },
      { label: "24/7 Exhibition Archives", href: "https://sj-mqt.org/exhibition-archives" },
      { label: "Fiber Art Inspiration", href: "https://sj-mqt.org/fiber-art-inspiration" },
      { label: "Fiber Artist Spotlights", href: "https://sj-mqt.org/artist-spotlight" },
      { label: "Fiber Arts for Beginners", href: "https://sj-mqt.org/for-beginners" }
    ]
  }
};

const MOBILE_ITEMS = [
  { label: "Home", href: "#top" },
  { label: "About", menu: "about" },
  { label: "The Collection", menu: "collection" },
  { label: "Exhibitions & Events", menu: "exhibitions" },
  { label: "Support Us", menu: "support" },
  { label: "Resources", menu: "resources" },
  { label: "24/7 Museum", menu: "online" },
  {
    label: "Donate",
    href: "https://sjquiltmuseum.app.neoncrm.com/forms/give-to-the-san-jose-museum-of-quilts--textiles-in-2024-2025"
  }
];

const stage = document.getElementById("weave-stage");
const weave = document.getElementById("weave");
const toolbar = document.querySelector(".weave-toolbar");
const scrim = document.getElementById("scrim");
const statusEl = document.getElementById("menu-status");
const backBtn = document.getElementById("weave-back");
const menuToggle = document.getElementById("menu-toggle");
const navButtons = [...document.querySelectorAll("[data-menu]")];

let openKey = null;
let mobileFolder = null;
let lastTrigger = null;
let weaveToken = 0;
let closeTimer = 0;

function uniqueSorted(values) {
  return [...new Set(values.map((n) => Math.round(n)))].sort((a, b) => a - b);
}

function mergeRuns(segments, axis) {
  const sorted = [...segments].sort((a, b) => (axis === "h" ? a.x - b.x || a.y - b.y : a.y - b.y || a.x - b.x));
  const runs = [];
  sorted.forEach((seg) => {
    const prev = runs[runs.length - 1];
    const touchesX = prev && Math.abs(prev.x + prev.w - seg.x) <= 1 && Math.abs(prev.y - seg.y) <= 1 && Math.abs(prev.h - seg.h) <= 1;
    const touchesY = prev && Math.abs(prev.y + prev.h - seg.y) <= 1 && Math.abs(prev.x - seg.x) <= 1 && Math.abs(prev.w - seg.w) <= 1;
    if (axis === "h" && touchesX) prev.w = seg.x + seg.w - prev.x;
    else if (axis === "v" && touchesY) prev.h = seg.y + seg.h - prev.y;
    else runs.push({ ...seg });
  });
  return runs;
}

function labelWindow(run) {
  return { x: run.x, y: run.y, w: run.w, h: run.h };
}

function splitSpan(count, total, gap) {
  if (count <= 0) return [];
  const gaps = gap * Math.max(0, count - 1);
  const usable = Math.max(count, total - gaps);
  const bands = [];
  for (let i = 0; i < count; i += 1) {
    const start = Math.round((usable * i) / count) + gap * i;
    const end = Math.round((usable * (i + 1)) / count) + gap * i;
    bands.push({ start, size: Math.max(1, end - start) });
  }
  const last = bands[count - 1];
  last.size = Math.max(1, total - last.start);
  return bands;
}

function placeStage() {
  const header = document.querySelector(".site-header");
  const bottom = Math.max(0, Math.round(header.getBoundingClientRect().bottom));
  stage.style.top = `${bottom}px`;
}

function buildWeave(items, { animate }) {
  placeStage();
  const width = Math.max(320, stage.clientWidth || window.innerWidth);
  const toolbarH = toolbar ? toolbar.offsetHeight : 0;
  const availH = Math.max(280, (stage.clientHeight || window.innerHeight) - toolbarH);
  const hItems = [];
  const vItems = [];
  const stride = width < 700 ? 3 : 2;
  items.forEach((item, index) => {
    const vertical = stride === 2 ? index % 2 === 1 : index % 3 === 2;
    (vertical ? vItems : hItems).push({ ...item, index });
  });

  const hN = hItems.length;
  const vN = vItems.length;
  const compact = width < 720;
  const singleCross = hN === 1 && vN === 1;
  const gap = compact ? 8 : 14;
  const innerGap = gap;
  const minBand = compact ? 76 : 92;
  const gapTotal = hN > 1 ? gap * (hN - 1) : 0;
  const height = hN ? Math.max(availH, hN * minBand + gapTotal) : availH;
  const hBands = splitSpan(hN, height, hN > 1 ? gap : 0).map((band) => ({ y: band.start, h: band.size }));

  let vOrigin = 0;
  let vSpan = width;
  if (vN > 0 && singleCross) {
    vSpan = Math.max(160, Math.round(width * 0.46));
    vOrigin = width - vSpan;
  } else if (vN === 1 && hN > 1) {
    const wing = Math.round(Math.min(Math.max(200, width * 0.34), width * 0.46));
    vSpan = Math.max(140, width - wing - innerGap);
    vOrigin = 0;
  }
  const vBands = splitSpan(vN, vSpan, vN > 1 ? innerGap : 0).map((band) => ({
    x: band.start + vOrigin,
    w: band.size
  }));

  const horizontalIsOver = (i, j) => {
    if (hN === 1) return false;
    return (i + j) % 2 === 0;
  };

  weave.style.height = `${height + 28}px`;
  weave.replaceChildren();
  weave.classList.remove("is-in");
  weave.setAttribute("aria-label", statusEl.textContent || "Menu");

  const ribbons = [];

  hItems.forEach((item, i) => {
    const band = hBands[i];
    const cuts = uniqueSorted([0, width, ...vBands.flatMap((bandX) => [bandX.x, bandX.x + bandX.w])]);
    const segments = [];
    for (let k = 0; k < cuts.length - 1; k += 1) {
      const x = cuts[k];
      const w = cuts[k + 1] - x;
      if (w < 2) continue;
      const mid = x + w / 2;
      const j = vBands.findIndex((col) => mid >= col.x && mid < col.x + col.w);
      if (singleCross && j === -1 && x >= vBands[0].x) continue;
      const over = j === -1 || horizontalIsOver(i, j);
      segments.push({ x, y: band.y, w, h: band.h, kind: j === -1 ? "gap" : over ? "over" : "under" });
    }
    ribbons.push({
      item,
      axis: "h",
      dir: i % 2 === 0 ? "from-left" : "from-right",
      segments,
      slide: width,
      delay: 220 + i * 50,
      label: labelWindow(pickRun(segments, "h", width / 2, height / 2))
    });
  });

  vItems.forEach((item, j) => {
    const band = vBands[j];
    const cuts = uniqueSorted([0, height, ...hBands.flatMap((row) => [row.y, row.y + row.h])]);
    const segments = [];
    for (let k = 0; k < cuts.length - 1; k += 1) {
      const y = cuts[k];
      const h = cuts[k + 1] - y;
      if (h < 2) continue;
      const mid = y + h / 2;
      const i = hBands.findIndex((row) => mid >= row.y && mid < row.y + row.h);
      const over = i === -1 || !horizontalIsOver(i, j);
      segments.push({ x: band.x, y, w: band.w, h, kind: i === -1 ? "gap" : over ? "over" : "under" });
    }
    ribbons.push({
      item,
      axis: "v",
      dir: j % 2 === 0 ? "from-top" : "from-bottom",
      segments,
      slide: height,
      delay: j * 50,
      label: labelWindow(pickRun(segments, "v", width / 2, height / 2))
    });
  });

  ribbons
    .sort((a, b) => a.item.index - b.item.index)
    .forEach((ribbon) => weave.appendChild(renderRibbon(ribbon)));

  const token = ++weaveToken;
  if (!animate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    weave.classList.add("is-in");
    return;
  }
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (token === weaveToken) weave.classList.add("is-in");
    });
  });
}

function pickRun(segments, axis, cx, cy) {
  const visible = segments.filter((seg) => seg.kind !== "under");
  const runs = mergeRuns(visible, axis).filter((run) => (axis === "h" ? run.w >= 88 && run.h >= 48 : run.h >= 64 && run.w >= 72));
  const pool = runs.length ? runs : mergeRuns(visible, axis);
  let best = pool[0];
  let bestScore = Infinity;
  pool.forEach((run) => {
    const rcx = run.x + run.w / 2;
    const rcy = run.y + run.h / 2;
    const score = Math.hypot(rcx - cx, rcy - cy) - Math.min(run.w, run.h) * 0.2;
    if (score < bestScore) {
      best = run;
      bestScore = score;
    }
  });
  return best;
}

const CLOTH = [
  { cloth: "#e86b2c", ink: "#fff7f2", edge: "#9a3e14" },
  { cloth: "#f0c431", ink: "#2a2208", edge: "#8d6a0d" },
  { cloth: "#6d3f96", ink: "#f8f4fc", edge: "#3e2260" },
  { cloth: "#1a9aaa", ink: "#f2fcfd", edge: "#0c5c66" },
  { cloth: "#3a78c2", ink: "#f3f8fd", edge: "#1c4c86" },
  { cloth: "#c4253c", ink: "#fff5f6", edge: "#7c1426" },
  { cloth: "#c4c4c8", ink: "#1e1e20", edge: "#5a5a60" },
  { cloth: "#2b2b2f", ink: "#f5f5f6", edge: "#111114" }
];

function renderRibbon({ item, axis, dir, segments, label, slide, delay }) {
  const hasChildren = Boolean(item.menu);
  const swatch = CLOTH[item.index % CLOTH.length];
  const el = hasChildren ? document.createElement("button") : document.createElement("a");
  el.className = `ribbon ${axis} ${dir}`;
  el.style.setProperty("--cloth", swatch.cloth);
  el.style.setProperty("--ink", swatch.ink);
  el.style.setProperty("--edge", swatch.edge);
  el.style.setProperty("--i", String(item.index));
  el.style.setProperty("--slide", `${slide}px`);
  el.style.setProperty("--delay", `${delay}ms`);
  el.style.setProperty("--travel", axis === "h" ? "1.2s" : "0.9s");
  if (hasChildren) {
    el.type = "button";
    el.addEventListener("click", () => openMobileFolder(item.menu));
  } else {
    el.href = item.href;
    if (item.href.startsWith("#")) {
      el.addEventListener("click", () => closeMenu());
    }
  }

  segments.forEach((seg) => {
    const span = document.createElement("span");
    span.className = `seg ${seg.kind}`;
    span.style.left = `${seg.x}px`;
    span.style.top = `${seg.y}px`;
    span.style.width = `${seg.w}px`;
    span.style.height = `${seg.h}px`;
    el.appendChild(span);
  });

  const text = document.createElement("span");
  text.className = "label";
  text.textContent = item.label;
  text.style.left = `${label.x}px`;
  text.style.top = `${label.y}px`;
  text.style.width = `${label.w}px`;
  text.style.height = `${label.h}px`;
  el.appendChild(text);
  return el;
}

function isMobileNav() {
  return window.matchMedia("(max-width: 1180px)").matches;
}

function setExpanded(key) {
  navButtons.forEach((btn) => {
    btn.setAttribute("aria-expanded", btn.dataset.menu === key ? "true" : "false");
  });
  menuToggle.setAttribute("aria-expanded", key === "mobile" ? "true" : "false");
  menuToggle.classList.toggle("is-open", key === "mobile");
}

function openMenu(key, items, label, { animate = true, back = false, trigger = null } = {}) {
  window.clearTimeout(closeTimer);
  closeTimer = 0;
  weave.classList.remove("is-closing");
  openKey = key;
  if (trigger) lastTrigger = trigger;
  statusEl.textContent = label;
  backBtn.hidden = !back;
  stage.classList.remove("is-shown");
  stage.hidden = false;
  scrim.hidden = false;
  document.body.style.overflow = "hidden";
  requestAnimationFrame(() => {
    scrim.classList.add("show");
    requestAnimationFrame(() => {
      if (!stage.hidden) stage.classList.add("is-shown");
    });
  });
  setExpanded(key);
  buildWeave(items, { animate });
}

function finishClose() {
  closeTimer = 0;
  weave.classList.remove("is-in", "is-closing");
  stage.classList.remove("is-shown");
  stage.hidden = true;
  scrim.hidden = true;
  document.body.style.overflow = "";
  backBtn.hidden = true;
  statusEl.textContent = "";
}

function closeMenu() {
  if (stage.hidden || weave.classList.contains("is-closing")) return;
  const ribbons = [...weave.querySelectorAll(".ribbon")];
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  openKey = null;
  mobileFolder = null;
  weaveToken += 1;
  setExpanded(null);
  scrim.classList.remove("show");
  stage.classList.remove("is-shown");

  if (reduce || !weave.classList.contains("is-in") || ribbons.length === 0) {
    finishClose();
    return;
  }

  const delays = ribbons.map((ribbon) => parseFloat(ribbon.style.getPropertyValue("--delay")) || 0);
  const maxDelay = Math.max(0, ...delays);
  ribbons.forEach((ribbon) => {
    const delay = parseFloat(ribbon.style.getPropertyValue("--delay")) || 0;
    ribbon.style.setProperty("--close-delay", `${maxDelay - delay}ms`);
  });
  weave.classList.add("is-closing");
  const token = weaveToken;
  window.requestAnimationFrame(() => {
    if (token !== weaveToken) return;
    weave.classList.remove("is-in");
  });
  closeTimer = window.setTimeout(finishClose, Math.max(1100, 1000 + maxDelay));
}

function openDesktop(key, trigger) {
  if (openKey === key) {
    closeMenu();
    return;
  }
  const menu = MENUS[key];
  mobileFolder = null;
  openMenu(key, menu.items, menu.label, { trigger });
}

function openMobileRoot(trigger) {
  if (openKey === "mobile" && !mobileFolder) {
    closeMenu();
    return;
  }
  mobileFolder = null;
  openMenu("mobile", MOBILE_ITEMS, "Menu", { trigger, animate: openKey !== "mobile" });
}

function openMobileFolder(key) {
  const menu = MENUS[key];
  mobileFolder = key;
  openMenu("mobile", menu.items, menu.label, { back: true });
}

navButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    openDesktop(btn.dataset.menu, btn);
    if (event.detail === 0) {
      window.setTimeout(() => weave.querySelector("a, button")?.focus(), 60);
    }
  });
});

menuToggle.addEventListener("click", (event) => {
  openMobileRoot(menuToggle);
  if (event.detail === 0 && openKey) {
    window.setTimeout(() => weave.querySelector("a, button")?.focus(), 60);
  }
});

backBtn.addEventListener("click", () => {
  openMobileRoot(menuToggle);
  backBtn.focus();
});

scrim.addEventListener("click", () => {
  const trigger = lastTrigger;
  closeMenu();
  trigger?.focus();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && openKey) {
    const trigger = lastTrigger;
    closeMenu();
    trigger?.focus();
  }
});

document.querySelectorAll("[data-close]").forEach((link) => {
  link.addEventListener("click", () => closeMenu());
});

window.addEventListener("resize", () => {
  if (!openKey) return;
  if (isMobileNav() && openKey !== "mobile") {
    closeMenu();
    return;
  }
  const items = openKey === "mobile"
    ? (mobileFolder ? MENUS[mobileFolder].items : MOBILE_ITEMS)
    : MENUS[openKey].items;
  buildWeave(items, { animate: false });
});

const SLIDES = [
  ["history+.jpeg", "ce0eb8c0-517c-4d94-b6ca-5f7f11659f5b", "Museum history"],
  ["rent+space.jpeg", "1705388535090-L73J9TUP07MQ6PSYDN4G", "Museum space available to rent"],
  ["IMG_2228.jpeg", "1767389319824-7F02EGVFMZJ5GUHVMWXO", "Textile on display"],
  ["SJMQT+Feb+1+Workshop+Group+Photo.jpg", "1770493256921-ZF4NZV8MG8JSBVBN6BAO", "Workshop group at the museum"],
  ["IMG_5784.jpg", "1770493381694-R3XMVZBOBIBX2MPXRWKJ", "Visitors in the galleries"],
  ["IMG_2131.jpeg", "1766087467726-K5UL628DFXGDHAVQ4WUW", "Quilt exhibition"],
  ["vols.jpg", "60533e66-0e9e-4b3f-a220-a5c95c6a1782", "Museum volunteers"],
  ["IMG_1885.jpeg", "1764871343213-X8OX4TW930Z6P909KCXV", "Gallery installation"],
  ["support+us.jpeg", "1705388536046-NNGW7SYK5RNOCFWQ6PH4", "Community supporting the museum"],
  ["IMG_8932+2.jpg", "1781900789830-IG6YEDF0LJ9599E7T8AV", "Colorful quilt circles in a gallery"],
  ["IMG_8931+2.jpg", "1781900789951-YL10OAT8NC2NCS1KQDK9", "Detail of a textile"],
  ["IMG_8945.jpg", "1781900858691-L59YECRO32Z9AGDBZVPU", "Exhibition view"],
  ["IMG_8926.jpg", "1781900793452-73AZUNWY06OV45RKMJ0K", "Artwork in the museum"],
  ["IMG_8954.jpg", "1781900859725-ME32RGA55IPN1TMEQX3Z", "Textile detail"],
  ["IMG_8963.jpg", "1781900795244-3AEX0499EBDAHSO58XYN", "Close view of a quilt"]
].map(([file, id, alt]) => ({
  alt,
  src: `https://images.squarespace-cdn.com/content/v1/561ee3d0e4b0f64d49ce3405/${id}/${file}?format=1500w`,
  thumb: `https://images.squarespace-cdn.com/content/v1/561ee3d0e4b0f64d49ce3405/${id}/${file}?format=300w`
}));

const mainImg = document.getElementById("gallery-main");
const thumbs = document.getElementById("thumbs");
let slideIndex = 0;

function showSlide(index) {
  slideIndex = (index + SLIDES.length) % SLIDES.length;
  const slide = SLIDES[slideIndex];
  mainImg.src = slide.src;
  mainImg.alt = slide.alt;
  [...thumbs.children].forEach((btn, i) => {
    const on = i === slideIndex;
    btn.setAttribute("aria-selected", on ? "true" : "false");
    if (on) btn.setAttribute("aria-current", "true");
    else btn.removeAttribute("aria-current");
  });
}

SLIDES.forEach((slide, i) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.setAttribute("role", "tab");
  btn.setAttribute("aria-label", slide.alt);
  const img = document.createElement("img");
  img.src = slide.thumb;
  img.alt = "";
  btn.appendChild(img);
  btn.addEventListener("click", () => showSlide(i));
  thumbs.appendChild(btn);
});

document.querySelector(".gallery-arrow.prev").addEventListener("click", () => showSlide(slideIndex - 1));
document.querySelector(".gallery-arrow.next").addEventListener("click", () => showSlide(slideIndex + 1));
showSlide(0);

const form = document.getElementById("subscribe-form");
const note = document.getElementById("form-note");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(form).get("email").toString().trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    note.textContent = "Please enter a valid email address.";
    document.getElementById("email").focus();
    return;
  }
  note.textContent = "Thanks for subscribing. This preview keeps your address on this page only.";
  form.reset();
});
