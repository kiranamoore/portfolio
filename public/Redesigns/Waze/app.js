(function () {
  const slides = document.querySelectorAll(".screen");
  const copies = document.querySelectorAll(".slide-copy");
  const dots = document.querySelectorAll(".dot");
  let index = 0;
  let timer = 0;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function show(next) {
    index = (next + slides.length) % slides.length;
    slides.forEach(function (el, i) {
      el.classList.toggle("is-active", i === index);
    });
    copies.forEach(function (el, i) {
      const on = i === index;
      el.classList.toggle("is-active", on);
      el.toggleAttribute("hidden", !on);
    });
    dots.forEach(function (el, i) {
      if (i === index) el.setAttribute("aria-current", "true");
      else el.removeAttribute("aria-current");
    });
  }

  function start() {
    if (reduce) return;
    window.clearInterval(timer);
    timer = window.setInterval(function () { show(index + 1); }, 4500);
  }

  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      show(Number(dot.dataset.index));
      start();
    });
  });

  const zones = document.querySelectorAll(".phone-lot, .step-lot");
  zones.forEach(function (el) {
    el.addEventListener("mouseenter", function () { window.clearInterval(timer); });
    el.addEventListener("mouseleave", start);
  });
  show(0);
  start();

  const play = document.querySelector(".play");
  if (play) {
    play.addEventListener("click", function () {
      const playing = play.getAttribute("aria-pressed") === "true";
      play.setAttribute("aria-pressed", playing ? "false" : "true");
      play.textContent = playing ? "❚❚" : "▶";
      play.setAttribute("aria-label", playing ? "Pause" : "Play");
    });
  }

  const startInput = document.getElementById("start");
  const endInput = document.getElementById("end");
  const note = document.querySelector(".route-note");
  const route = document.getElementById("route");
  const plan = document.getElementById("plan");
  const swap = document.querySelector(".swap");

  function planTrip() {
    const from = startInput.value.trim();
    const to = endInput.value.trim();
    if (!to) {
      endInput.focus();
      return;
    }
    route.classList.add("show");
    note.textContent = "Saved" + (from ? " from " + from : "") + " to " + to + ". We’ll ping you when it’s time to leave.";
    note.classList.add("show");
  }

  if (plan) plan.addEventListener("click", planTrip);
  if (swap) {
    swap.addEventListener("click", function () {
      const temp = startInput.value;
      startInput.value = endInput.value;
      endInput.value = temp;
    });
  }

  const mapGroup = document.getElementById("planner-map");
  let zoom = 1;
  document.querySelectorAll(".zoom button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      zoom = btn.dataset.zoom === "in" ? Math.min(1.6, zoom + 0.15) : Math.max(0.85, zoom - 0.15);
      mapGroup.setAttribute("transform", "translate(" + ((760 - 760 * zoom) / 2) + " " + ((520 - 520 * zoom) / 2) + ") scale(" + zoom + ")");
    });
  });
})();
