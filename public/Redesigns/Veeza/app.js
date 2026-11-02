// Scroll position maps onto a passport spread. Each homepage section is a
// leaf hinged at the center spine. One viewport of scroll turns one page.
const leaves = [...document.querySelectorAll(".leaf")];
const run = document.getElementById("run");
const pager = document.getElementById("pager");
const hint = document.getElementById("hint");
const status = document.getElementById("page-status");
const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

let reduceMotion = reduceQuery.matches;
let lastH = window.innerHeight;
let lastFocus = -1;
let settling = false;
let settleTimer = 0;
let travelers = 1;

const HASH = {};
leaves.forEach((leaf, index) => {
  HASH[leaf.dataset.hash] = index;
  const dot = document.createElement("button");
  dot.type = "button";
  dot.setAttribute("aria-label", `Page ${index + 1}: ${leaf.dataset.title}`);
  dot.addEventListener("click", () => goTo(index));
  pager.appendChild(dot);
});
const dots = [...pager.children];

function pageHeight() {
  return window.innerHeight;
}

function measure(preserve) {
  const h = pageHeight();
  const page = preserve ? Math.round(window.scrollY / (lastH || h)) : Math.round(window.scrollY / h);
  run.style.height = `${h * leaves.length}px`;
  lastH = h;
  if (preserve) {
    settling = true;
    window.scrollTo(0, clampPage(page) * h);
    window.setTimeout(() => {
      settling = false;
    }, 60);
  }
}

function clampPage(index) {
  return Math.max(0, Math.min(leaves.length - 1, index));
}

function goTo(index) {
  const dest = clampPage(index) * pageHeight();
  settling = true;
  window.clearTimeout(settleTimer);
  window.scrollTo({
    top: dest,
    behavior: reduceMotion ? "auto" : "smooth",
  });
  settleTimer = window.setTimeout(() => {
    settling = false;
  }, reduceMotion ? 40 : 900);
}

function progress() {
  const max = leaves.length - 1;
  return Math.max(0, Math.min(max, window.scrollY / pageHeight()));
}

function render() {
  const max = leaves.length - 1;
  const raw = progress();
  const page = reduceMotion ? Math.round(raw) : raw;
  const index = Math.min(max, Math.floor(page + 1e-6));
  const frac = reduceMotion || index >= max ? 0 : page - index;

  leaves.forEach((leaf, idx) => {
    let angle = 0;
    if (idx < index) angle = -180;
    else if (idx === index) angle = -180 * frac;

    const turned = angle < -89.5;
    let z = 80 - idx;
    if (idx === index && !turned) z = 500;
    else if (turned) z = 20 + idx;

    leaf.style.zIndex = String(z);
    leaf.style.transform = Math.abs(angle) < 0.08 ? "none" : `rotateY(${angle}deg)`;
    const shade = Math.sin((Math.abs(angle) * Math.PI) / 180);
    leaf.style.setProperty("--shade", shade.toFixed(3));
    const cast = idx === index + 1 ? Math.sin(frac * Math.PI) * 0.62 : 0;
    leaf.style.setProperty("--cast", cast.toFixed(3));
  });

  const focus = Math.min(max, frac >= 0.5 ? index + 1 : index);
  leaves.forEach((leaf, idx) => {
    const resting = idx === focus && (frac < 0.04 || frac >= 0.5);
    leaf.classList.toggle("is-current", idx === focus);
    leaf.classList.toggle("is-resting", resting && !reduceMotion);
  });

  dots.forEach((dot, idx) => {
    const on = idx === focus;
    dot.classList.toggle("is-active", on);
    if (on) dot.setAttribute("aria-current", "true");
    else dot.removeAttribute("aria-current");
  });

  document.querySelectorAll(".nav-links a[data-goto]").forEach((link) => {
    link.classList.toggle("is-active", Number(link.dataset.goto) === focus);
  });

  hint.classList.toggle("is-hidden", window.scrollY > 24);

  if (focus !== lastFocus) {
    lastFocus = focus;
    const leaf = leaves[focus];
    status.textContent = `Page ${focus + 1} of ${leaves.length}, ${leaf.dataset.title}`;
    const hash = leaf.dataset.hash;
    if (location.hash !== hash) history.replaceState(null, "", hash);
  }
}

function settle() {
  if (settling) return;
  const h = pageHeight();
  const dest = Math.round(window.scrollY / h) * h;
  const maxDest = (leaves.length - 1) * h;
  const top = Math.max(0, Math.min(maxDest, dest));
  if (Math.abs(window.scrollY - top) < 2) return;
  settling = true;
  window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
  settleTimer = window.setTimeout(() => {
    settling = false;
  }, 700);
}

function priceFor(base, count) {
  const off = Math.min(0.25, 0.0625 * (count - 1));
  return Math.round(base * (1 - off));
}

function renderTravelers() {
  document.querySelectorAll("[data-traveler-count]").forEach((node) => {
    node.textContent = String(travelers);
  });
  document.querySelectorAll("[data-step]").forEach((button) => {
    const dir = Number(button.dataset.step);
    button.disabled = (dir < 0 && travelers <= 1) || (dir > 0 && travelers >= 5);
  });
  document.querySelectorAll(".country").forEach((card) => {
    const base = Number(card.dataset.base);
    const now = priceFor(base, travelers);
    card.querySelector(".now").textContent = `$${now}`;
    const was = card.querySelector(".was");
    const save = card.querySelector(".save");
    if (travelers > 1) {
      was.hidden = false;
      was.textContent = `$${base}`;
      save.textContent = `Save $${base - now}`;
    } else {
      was.hidden = true;
      was.textContent = "";
      save.textContent = "Save when you apply together.";
    }
  });
  document.querySelectorAll(".tier").forEach((tier) => {
    tier.classList.toggle("is-hot", Number(tier.dataset.tier) === travelers);
  });
  const note = document.getElementById("group-note");
  note.textContent = travelers === 1
    ? "Traveling together? Add up to 5 people to compare prices with your group discount."
    : `Group price for ${travelers} travelers. Each extra person takes 6.25% off everyone.`;
  document.getElementById("price-status").textContent = travelers === 1
    ? "Prices shown for 1 traveler."
    : `Prices shown for ${travelers} travelers with the group discount.`;
}

document.addEventListener("click", (event) => {
  const step = event.target.closest("[data-step]");
  if (step && !step.disabled) {
    travelers = Math.min(5, Math.max(1, travelers + Number(step.dataset.step)));
    renderTravelers();
    return;
  }

  const faq = event.target.closest(".faq-item button");
  if (faq) {
    const open = faq.getAttribute("aria-expanded") === "true";
    faq.setAttribute("aria-expanded", open ? "false" : "true");
    const answer = faq.nextElementSibling;
    answer.hidden = open;
    return;
  }

  const jump = event.target.closest("[data-goto]");
  if (jump) {
    event.preventDefault();
    goTo(Number(jump.dataset.goto));
  }
});

const search = document.getElementById("country-search");
const empty = document.getElementById("search-empty");
search.addEventListener("input", () => {
  const query = search.value.trim().toLowerCase();
  let matches = 0;
  document.querySelectorAll(".country").forEach((card) => {
    const show = !query || card.dataset.country.includes(query);
    card.hidden = !show;
    if (show) matches += 1;
  });
  empty.hidden = matches !== 0;
});

window.addEventListener("scroll", () => {
  requestAnimationFrame(render);
  if (settling) return;
  window.clearTimeout(settleTimer);
  settleTimer = window.setTimeout(settle, 140);
}, { passive: true });

window.addEventListener("wheel", () => {
  settling = false;
}, { passive: true });
window.addEventListener("touchstart", () => {
  settling = false;
}, { passive: true });

window.addEventListener("keydown", (event) => {
  if (event.target.closest("input, textarea, button, a, select")) return;
  const current = Math.round(window.scrollY / pageHeight());
  if (event.key === "ArrowDown" || event.key === "PageDown" || event.key === " ") {
    event.preventDefault();
    goTo(current + 1);
  } else if (event.key === "ArrowUp" || event.key === "PageUp") {
    event.preventDefault();
    goTo(current - 1);
  } else if (event.key === "Home") {
    event.preventDefault();
    goTo(0);
  } else if (event.key === "End") {
    event.preventDefault();
    goTo(leaves.length - 1);
  }
});

window.addEventListener("resize", () => measure(true));
reduceQuery.addEventListener("change", () => {
  reduceMotion = reduceQuery.matches;
  render();
});

if ("scrollRestoration" in history) history.scrollRestoration = "manual";
measure(false);
const initial = HASH[location.hash];
if (initial) window.scrollTo(0, initial * pageHeight());
renderTravelers();
render();
