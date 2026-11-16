const chatSuggestions = [
  { icon: "cloud", label: "Tell me about the weather today" },
  { icon: "spark", label: "Design a poster based on my taste" },
  { icon: "bulb", label: "Create a local marketing plan" },
  { icon: "notes", label: "Summarize my meeting notes" },
];

const taskSuggestions = [
  { icon: "check", label: "Plan my afternoon around the weather" },
  { icon: "check", label: "Turn the marketing plan into a checklist" },
  { icon: "check", label: "List follow-ups from my meeting" },
];

const features = [
  {
    title: "Gemini Live",
    body: "Have a conversation about anything around you or on your screen.",
    cta: "Talk it out",
    ask: "How were these mountains formed?",
    preview: "live",
  },
  {
    title: "Canvas",
    body: "Go from prompt to prototype: create games, apps, infographics and more.",
    cta: "See how it works",
    ask: "Make a one-page infographic of today’s weather",
    preview: "canvas",
  },
  {
    title: "Image generation",
    body: "Turn your ideas into stunning images in seconds.",
    cta: "Create",
    ask: "Design a poster based on my taste",
    preview: "image",
  },
  {
    title: "Video generation",
    body: "Transform your photos into short video clips.",
    cta: "Take a look",
    ask: "Turn the mountain photo into a short clip",
    preview: "video",
  },
];

const catalogs = {
  featured: ["Search", "Gemini", "Gmail", "Maps", "YouTube", "Photos", "Android", "Pixel", "Chrome", "Calendar", "Drive", "Meet"],
  all: ["Search", "Gemini", "Gmail", "Maps", "YouTube", "Photos", "Android", "Pixel", "Chrome", "Calendar", "Drive", "Meet", "News", "Translate", "Wallet", "Earth", "Keep", "Docs"],
  business: ["Google Workspace", "Google Ads", "Google Cloud", "Google Analytics", "Business Profile"],
  developers: ["Firebase", "Flutter", "TensorFlow", "Google AI", "Chrome for Developers"],
};

const laToday = {
  place: "Monday · Los Angeles, CA",
  condition: "Partly Sunny",
  kind: "partly",
  tempC: 20,
  highC: 20,
  lowC: 11,
  precip: 45,
  hours: [
    { label: "11 AM", tempC: 20, pop: 15, wind: 3, kind: "partly" },
    { label: "12 PM", tempC: 20, pop: 25, wind: 4, kind: "rain" },
    { label: "1 PM", tempC: 20, pop: 35, wind: 5, kind: "rain" },
    { label: "2 PM", tempC: 20, pop: 15, wind: 4, kind: "partly" },
    { label: "3 PM", tempC: 20, pop: 0, wind: 3, kind: "sun" },
    { label: "4 PM", tempC: 19, pop: 15, wind: 6, kind: "sun" },
    { label: "5 PM", tempC: 18, pop: 5, wind: 8, kind: "shower" },
  ],
};

const laTomorrow = {
  place: "Tuesday · Los Angeles, CA",
  condition: "Sunny",
  kind: "sun",
  tempC: 22,
  highC: 24,
  lowC: 14,
  precip: 10,
  hours: [
    { label: "9 AM", tempC: 18, pop: 0, wind: 4, kind: "sun" },
    { label: "11 AM", tempC: 21, pop: 0, wind: 5, kind: "sun" },
    { label: "1 PM", tempC: 23, pop: 0, wind: 6, kind: "sun" },
    { label: "3 PM", tempC: 24, pop: 5, wind: 7, kind: "partly" },
    { label: "5 PM", tempC: 21, pop: 5, wind: 6, kind: "sun" },
    { label: "7 PM", tempC: 18, pop: 10, wind: 5, kind: "partly" },
  ],
};

const app = document.getElementById("app");
const log = document.getElementById("log");
const empty = document.getElementById("empty");
const suggestions = document.getElementById("suggestions");
const formEmpty = document.getElementById("form-empty");
const formDock = document.getElementById("form-dock");
const promptEmpty = document.getElementById("prompt-empty");
const promptDock = document.getElementById("prompt-dock");
const disclaimer = document.getElementById("disclaimer");
const getApp = document.getElementById("get-app");
const barNew = document.getElementById("bar-new");
const barMore = document.getElementById("bar-more");
const popover = document.getElementById("popover");
const announce = document.getElementById("announce");
const phones = document.getElementById("phones");

let mode = "chat";
let model = "Flash-Lite";
let featureIndex = 0;
let busy = false;
let generation = 0;
let queue = [];
let transcript = [];
let lastTopic = "";
let popAnchor = null;

const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, motionOk ? ms : 0));

function norm(value) {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ").trim();
}

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));
}

function toF(celsius) {
  return Math.round(celsius * 9 / 5 + 32);
}

const glyph = {
  cloud: '<svg viewBox="0 0 24 24"><path d="M7.5 17h9a3.5 3.5 0 0 0 .4-7 5 5 0 0 0-9.6 1.4A3 3 0 0 0 7.5 17z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  spark: '<svg viewBox="0 0 24 24"><path d="M12 3.2 13.2 9 19 10.2 13.2 11.4 12 17.2 10.8 11.4 5 10.2 10.8 9z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  bulb: '<svg viewBox="0 0 24 24"><path d="M9 17h6M10 20h4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M8 14a4.5 4.5 0 1 1 8 0c0 1.6-1 2.4-1.6 3H9.6C9 16.4 8 15.6 8 14z" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
  notes: '<svg viewBox="0 0 24 24"><rect x="6" y="3.5" width="12" height="17" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M9 8h6M9 12h6M9 16h3" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  check: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 12.2 10.6 15 16 9.2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

function weatherIcon(kind) {
  const rays = '<g stroke="#fbbc04" stroke-width="3" stroke-linecap="round"><path d="M18 2v5M18 29v5M2 18h5M29 18h5M6.2 6.2l3.5 3.5M26.3 26.3l3.5 3.5M29.8 6.2l-3.5 3.5M9.7 26.3 6.2 29.8"/></g><circle cx="18" cy="18" r="7" fill="#fbbc04"/>';
  const cloud = '<path fill="#fff" stroke="#d7dbe0" stroke-width="1.4" d="M22 44h20.5a8.2 8.2 0 0 0 .6-16.4 12 12 0 0 0-23.2-1.6A7.4 7.4 0 0 0 22 44z"/>';
  if (kind === "sun") {
    return `<svg viewBox="0 0 64 64" aria-hidden="true"><g transform="translate(14 14)">${rays}</g></svg>`;
  }
  if (kind === "partly") {
    return `<svg viewBox="0 0 64 64" aria-hidden="true"><g transform="translate(0 -2) scale(.72)">${rays}</g><g transform="translate(6 8)">${cloud}</g></svg>`;
  }
  if (kind === "shower") {
    return `<svg viewBox="0 0 64 64" aria-hidden="true"><g transform="translate(-2 -6) scale(.62)">${rays}</g><g transform="translate(4 6)">${cloud}</g><path d="M30 52l-2 6M40 52l-2 6" stroke="#1a73e8" stroke-width="2.2" stroke-linecap="round"/></svg>`;
  }
  return `<svg viewBox="0 0 64 64" aria-hidden="true"><g transform="translate(0 -4)">${cloud}</g><path d="M26 46l-2 7M36 46l-2 7M46 46l-2 7" stroke="#1a73e8" stroke-width="2.2" stroke-linecap="round"/></svg>`;
}

function textMessage(body, topic, follow) {
  return { type: "text", body, topic, follow: follow || [] };
}

function weatherMessage(data, prose, topic, follow, unit) {
  return { type: "weather", data, prose, topic, follow: follow || [], unit: unit || "c" };
}

function posterMessage(theme) {
  const copy = {
    day: "I leaned toward the posters you actually keep: warm paper, one loud color, and type you can read from the sidewalk. This one is for a Sunday that doesn’t need a schedule.",
    night: "Same layout, after dark. The coral turns to brass and the paper goes nearly black — closer to a show poster than a market flyer.",
    big: "Same poster, with the type pushed until it nearly touches the edges. It reads faster from across the room.",
  };
  const follow = theme === "day"
    ? ["Try a night version", "Make the type bigger"]
    : ["Go back to the day version", "Make the type bigger"];
  return { type: "poster", theme, body: copy[theme], topic: "poster", follow };
}

function planMessage() {
  return { type: "plan", topic: "plan", follow: ["What’s a realistic budget?", "Draft an Instagram caption"] };
}

function notesMessage() {
  return { type: "notes", topic: "notes", follow: ["Draft the follow-up email", "What should I do first?"] };
}

function emailMessage() {
  return {
    type: "email",
    topic: "email",
    follow: ["What should I do first?"],
    body: "Subject: Recap — Monday product sync\n\nHi team,\n\nWe locked the launch checklist and parked poster variations until next week. Alex is sending the weather copy today. Priya will confirm Friday’s review by noon tomorrow.\n\nReply if I missed a decision.\n\n— Jordan",
  };
}

function budgetMessage() {
  return { type: "budget", topic: "budget", follow: ["Draft an Instagram caption"] };
}

function captionMessage() {
  return {
    type: "email",
    topic: "caption",
    follow: ["What’s a realistic budget?"],
    body: "Quiet tables, loud coffee.\n\nLittle Window is pouring on Sunset this week — mornings until 2. Come by Saturday if you want the first pastry out of the oven.",
  };
}

function canvasMessage() {
  return {
    type: "canvas",
    topic: "canvas",
    follow: ["Tell me about the weather today"],
    body: "Here’s a one-page canvas for today’s Los Angeles forecast. It’s a draft you could drop into a doc.",
  };
}

function videoMessage() {
  return {
    type: "video",
    topic: "video",
    follow: ["How were these mountains formed?"],
    body: "Here’s a three-frame pass on that mountain photo — hold, drift closer, then a question card.",
  };
}

function checksMessage(intro, items, topic, follow) {
  return { type: "checks", intro, items, topic, follow: follow || [] };
}

function todayWeather(unit) {
  return weatherMessage(
    laToday,
    "Today in Los Angeles, CA, the current temperature is 68°F with a feels-like temperature of 76°F under partly sunny skies. Winds are coming from the south at 3 mph, and humidity is at 70%, with a 45% chance of rain this afternoon. It stays near 68° through midafternoon, then eases toward 64° by 5 p.m.",
    "weather",
    ["Should I bring a jacket?", "What about tomorrow?"],
    unit
  );
}

function tomorrowWeather() {
  return weatherMessage(
    laTomorrow,
    "Tuesday is the easier day. Sunny, a high around 75°F, and only a slight chance of a shower late. Morning starts in the mid-60s.",
    "tomorrow",
    ["Should I bring a jacket?", "Tell me about the weather today"]
  );
}

const exact = new Map();

function bind(prompt, builder) {
  exact.set(norm(prompt), builder);
}

bind("Tell me about the weather today", () => todayWeather());
bind("hi, tell me about the weather today", () => todayWeather());
bind("Design a poster based on my taste", () => posterMessage("day"));
bind("Create a local marketing plan", () => planMessage());
bind("Summarize my meeting notes", () => notesMessage());
bind("Plan my afternoon around the weather", () => checksMessage(
  "Here’s the afternoon, in the order I’d actually do it.",
  [
    "Head out before 1 p.m. if you want to miss the wettest hour.",
    "The 3 p.m. window is the clear one — 0% chance of rain.",
    "Keep a light layer. It’s 68°F now and closer to 64°F by 5.",
    "If plans slip past 5, expect a small breeze out of the south.",
  ],
  "checks",
  ["What about tomorrow?"]
));
bind("Turn the marketing plan into a checklist", () => checksMessage(
  "A month of local marketing, as a list you can tick off.",
  [
    "Claim the Maps listing and put today’s hours on it.",
    "Post one photo from the counter, not a stock cup.",
    "Tell the two nearest group chats about Saturday.",
    "Set aside $240 for two boosted posts.",
    "Write Friday’s recap before you close.",
  ],
  "checks",
  ["What’s a realistic budget?"]
));
bind("List follow-ups from my meeting", () => checksMessage(
  "From Monday’s product sync, these are the follow-ups.",
  [
    "Alex sends the weather copy today.",
    "Priya confirms Friday’s review by noon tomorrow.",
    "Jordan shares this recap in the thread.",
    "Park poster variations until next week.",
  ],
  "checks",
  ["Draft the follow-up email"]
));
bind("How were these mountains formed?", () => textMessage(
  "The ridgeline in that photo is the San Gabriels, just north of Los Angeles. Most of the rock started as seabed and volcanic debris. The same fault system that shakes the basin shoved it up, folded it, and left a steep, young range. Heavy, rare rains did the carving — which is why the slopes look sharp instead of worn down.",
  "mountains",
  ["Turn the mountain photo into a short clip", "Say it more simply"]
));
bind("Make a one-page infographic of today’s weather", () => canvasMessage());
bind("Make a one-page infographic of today's weather", () => canvasMessage());
bind("Turn the mountain photo into a short clip", () => videoMessage());
bind("Should I bring a jacket?", () => textMessage(
  "A light layer is plenty. It’s partly sunny and 68°F, with a short rain chance around 1 p.m. — about a 35% chance that hour. By 5 p.m. it’s closer to 64°F and the shower risk drops off.",
  "jacket",
  ["What about tomorrow?", "Tell me about the weather today"]
));
bind("What about tomorrow?", () => tomorrowWeather());
bind("Try a night version", () => posterMessage("night"));
bind("Make the type bigger", () => posterMessage("big"));
bind("Go back to the day version", () => posterMessage("day"));
bind("What’s a realistic budget?", () => budgetMessage());
bind("What's a realistic budget?", () => budgetMessage());
bind("Draft an Instagram caption", () => captionMessage());
bind("Draft the follow-up email", () => emailMessage());
bind("What should I do first?", () => textMessage(
  "Send the recap today, then ask Priya to confirm Friday before noon tomorrow. Poster variations can wait until next week — that was the decision, not a new task.",
  "notes",
  ["Draft the follow-up email"]
));
bind("Say it more simply", () => textMessage(
  "Old seafloor, pushed up by faults, then cut by rain. That’s the short version.",
  "mountains",
  ["How were these mountains formed?"]
));

const more = {
  weather: () => tomorrowWeather(),
  tomorrow: () => textMessage(
    "A light layer is plenty tomorrow too. Sunny and warmer, with almost no rain.",
    "jacket",
    ["Tell me about the weather today"]
  ),
  jacket: () => todayWeather(),
  poster: () => posterMessage("night"),
  plan: () => budgetMessage(),
  budget: () => captionMessage(),
  caption: () => planMessage(),
  notes: () => emailMessage(),
  email: () => notesMessage(),
  canvas: () => todayWeather(),
  video: () => exact.get(norm("How were these mountains formed?"))(),
  mountains: () => videoMessage(),
  checks: () => todayWeather(),
};

function fallback() {
  const line = mode === "task"
    ? "Give me a task and I’ll turn it into a list. I can plan an afternoon around the weather, make the marketing plan a checklist, or pull follow-ups from the meeting."
    : "I can pull up today’s weather in Los Angeles, design a poster, draft a local marketing plan, or summarize a meeting. Ask in your own words, or use a suggestion.";
  return textMessage(line, "fallback");
}

function answer(raw) {
  const q = norm(raw);
  if (exact.has(q)) return exact.get(q)();
  if (/^(thanks|thank you|thx)$/.test(q)) {
    return textMessage("Anytime. Ask a follow-up, or start a new chat with the pencil.", lastTopic || "greeting");
  }
  if (/^(hi|hello|hey|hiya|yo)$/.test(q)) {
    return textMessage("Hi. I can do weather, a poster, a marketing plan, or meeting notes — pick one, or just ask.", "greeting");
  }
  if (/tell me more|more detail|go deeper|say more|expand/.test(q)) {
    const next = more[lastTopic];
    return next ? next() : fallback();
  }
  if (/night version|after dark|dark mode/.test(q)) return posterMessage("night");
  if (/bigger|bolder|larger type/.test(q)) return posterMessage("big");
  if (/fahrenheit|in f\b|degrees f/.test(q)) return todayWeather("f");
  if (/celsius|degrees c/.test(q)) return todayWeather("c");
  if (/jacket|what should i wear|need a coat|bring a coat/.test(q)) return exact.get(norm("Should I bring a jacket?"))();
  if (/tomorrow|tuesday/.test(q)) return tomorrowWeather();
  if (/weather|forecast|temperature|rain|los angeles|how hot|how cold/.test(q)) return todayWeather();
  if (/poster|my taste|image|flyer/.test(q)) return posterMessage("day");
  if (/budget|how much/.test(q)) return budgetMessage();
  if (/caption|instagram/.test(q)) return captionMessage();
  if (/checklist|afternoon|plan my/.test(q)) return exact.get(norm("Plan my afternoon around the weather"))();
  if (/follow-?ups|action items|what should i do first/.test(q)) return exact.get(norm("List follow-ups from my meeting"))();
  if (/email|recap/.test(q)) return emailMessage();
  if (/meeting|notes|sync|summar/.test(q)) return notesMessage();
  if (/marketing|campaign|cafe|café|local plan/.test(q)) return planMessage();
  if (/infographic|canvas|one-page|one page/.test(q)) return canvasMessage();
  if (/video|clip|storyboard|animate/.test(q)) return videoMessage();
  if (/mountain|formed|san gabriel/.test(q)) return exact.get(norm("How were these mountains formed?"))();
  if (/simpler|short version|eli5|explain simply/.test(q)) return exact.get(norm("Say it more simply"))();
  if (/what can you do|help|how does this work/.test(q)) return fallback();
  return fallback();
}

function scrollThread() {
  const thread = document.getElementById("thread");
  thread.scrollTop = thread.scrollHeight;
}

function openThread() {
  if (app.classList.contains("is-chat")) return;
  app.classList.add("is-chat");
  formDock.hidden = false;
  disclaimer.hidden = false;
  getApp.hidden = true;
  barNew.hidden = true;
  barMore.hidden = false;
}

function appendUser(value) {
  openThread();
  log.querySelectorAll(".follow").forEach((node) => node.remove());
  const bubble = document.createElement("p");
  bubble.className = "bubble";
  bubble.textContent = value;
  log.appendChild(bubble);
  transcript.push(value);
  scrollThread();
}

function followRow(labels) {
  if (!labels || !labels.length) return null;
  const row = document.createElement("div");
  row.className = "follow";
  labels.forEach((label) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.dataset.ask = label;
    row.appendChild(button);
  });
  return row;
}

function prose(text) {
  const p = document.createElement("p");
  p.className = "prose";
  p.textContent = text;
  return p;
}

function renderWeather(message) {
  const data = message.data;
  const unit = message.unit || "c";
  const article = document.createElement("article");
  article.className = "wx";
  article.dataset.degree = unit;
  article.dataset.tab = "temp";
  const show = (c) => (article.dataset.degree === "f" ? String(toF(c)) : String(Math.round(c)));
  article.innerHTML = `
    <p class="wx-place">${data.place}</p>
    <div class="wx-now">
      <div class="wx-icon">${weatherIcon(data.kind)}</div>
      <div class="wx-temp-row">
        <span class="wx-temp" data-c="${data.tempC}">${show(data.tempC)}</span>
        <span class="units">
          <button type="button" data-unit="c" aria-pressed="${unit === "c"}">°C</button>
          <span aria-hidden="true">|</span>
          <button type="button" data-unit="f" aria-pressed="${unit === "f"}">°F</button>
        </span>
      </div>
    </div>
    <p class="wx-cond">${data.condition}</p>
    <p class="wx-meta">
      <span data-high="${data.highC}">High: ${show(data.highC)}</span>
      <span data-low="${data.lowC}">Low: ${show(data.lowC)}</span>
      <span>Precip: ${data.precip}%</span>
    </p>
    <div class="wx-tabs" role="tablist" aria-label="Forecast detail">
      <button type="button" role="tab" data-wxtab="temp" aria-selected="true">Temperature</button>
      <button type="button" role="tab" data-wxtab="precip" aria-selected="false">Precipitation</button>
      <button type="button" role="tab" data-wxtab="wind" aria-selected="false">Wind</button>
    </div>
    <div class="hours">
      ${data.hours.map((hour) => `
        <div class="hour" data-c="${hour.tempC}" data-pop="${hour.pop}" data-wind="${hour.wind}">
          <span class="when">${hour.label}</span>
          ${weatherIcon(hour.kind)}
          <span class="pop">${hour.pop}%</span>
          <span class="deg">${show(hour.tempC)}°</span>
          <span class="wind">${hour.wind} mph</span>
        </div>
      `).join("")}
    </div>
    <p class="wx-src">Google Weather</p>
  `;
  return article;
}

function paintWeather(card) {
  const f = card.dataset.degree === "f";
  const fmt = (c) => (f ? String(toF(Number(c))) : String(Math.round(Number(c))));
  const temp = card.querySelector(".wx-temp");
  temp.textContent = fmt(temp.dataset.c);
  const high = card.querySelector("[data-high]");
  const low = card.querySelector("[data-low]");
  high.textContent = `High: ${fmt(high.dataset.high)}`;
  low.textContent = `Low: ${fmt(low.dataset.low)}`;
  card.querySelectorAll(".hour").forEach((hour) => {
    hour.querySelector(".deg").textContent = `${fmt(hour.dataset.c)}°`;
  });
  card.querySelectorAll("[data-unit]").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.unit === card.dataset.degree ? "true" : "false");
  });
}

function renderPoster(theme) {
  const figure = document.createElement("figure");
  figure.className = `poster ${theme}`;
  const titles = { day: "Field\nnotes", night: "After\nhours", big: "Field\nnotes" };
  const feet = { day: "No. 04  ·  Los Angeles", night: "No. 04  ·  Late set", big: "No. 04  ·  Los Angeles" };
  figure.innerHTML = `<span class="orb"></span><p class="kicker">A print for the wall</p><p class="title"></p><p class="foot"></p>`;
  figure.querySelector(".title").textContent = titles[theme];
  figure.querySelector(".foot").textContent = feet[theme];
  return figure;
}

function renderPlan() {
  const wrap = document.createElement("div");
  wrap.className = "doc";
  wrap.innerHTML = `
    <p>Here’s a one-month plan for Little Window, a neighborhood café in Los Angeles. Tell me the real business and I’ll retarget it.</p>
    <h3>The goal</h3>
    <p>Fill weekday mornings with people who live within a ten-minute walk.</p>
    <h3>This month</h3>
    <ol>
      <li><strong>Week 1 — Be findable.</strong> Claim the Maps listing, put the real hours up, and add four photos from the room.</li>
      <li><strong>Week 2 — Be familiar.</strong> One post from the counter, not a styled cup. Reply to every comment that week.</li>
      <li><strong>Week 3 — Be local.</strong> A Saturday tasting for the two nearest blocks. Keep it to one pastry and one drink.</li>
      <li><strong>Week 4 — Be specific.</strong> Look at which morning actually grew, and put next month’s money there.</li>
    </ol>
  `;
  return wrap;
}

function renderBudget() {
  const wrap = document.createElement("div");
  wrap.className = "doc";
  wrap.innerHTML = `
    <p>For a single café, I’d keep the first month under $600. Anything past that is a second location’s problem.</p>
    <table>
      <thead><tr><th>Item</th><th>Amount</th></tr></thead>
      <tbody>
        <tr><td>Maps photos and a printed window card</td><td>$80</td></tr>
        <tr><td>Two boosted posts, weekday mornings only</td><td>$240</td></tr>
        <tr><td>Saturday tasting, one pastry and one drink</td><td>$150</td></tr>
        <tr><td>A stack of cards for the counter</td><td>$40</td></tr>
      </tbody>
    </table>
    <p>Skip citywide ads. The people you want already walk past the door.</p>
  `;
  return wrap;
}

function renderNotes() {
  const wrap = document.createElement("div");
  wrap.className = "doc";
  wrap.innerHTML = `
    <p>Monday’s product sync ran about fifty minutes. Most of it was the launch checklist, not new ideas.</p>
    <h3>Decisions</h3>
    <ul>
      <li>Ship the weather card before any poster variations.</li>
      <li>Friday’s review stays on the calendar. Priya confirms by noon tomorrow.</li>
      <li>Poster explorations wait until next week.</li>
    </ul>
    <h3>Still open</h3>
    <ul>
      <li>Whether the caption mentions Saturday, or stays general.</li>
    </ul>
  `;
  return wrap;
}

function renderChecks(message) {
  const wrap = document.createElement("div");
  wrap.className = "doc";
  const list = document.createElement("ul");
  list.className = "checks";
  message.items.forEach((item) => {
    const li = document.createElement("li");
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    const span = document.createElement("span");
    span.textContent = item;
    label.append(input, span);
    li.appendChild(label);
    list.appendChild(li);
  });
  wrap.append(prose(message.intro), list);
  return wrap;
}

function renderCanvas() {
  const card = document.createElement("div");
  card.className = "canvas";
  const temps = [66, 68, 68, 68, 66, 64];
  const labels = ["11a", "12p", "1p", "2p", "4p", "5p"];
  card.innerHTML = `
    <h3>Today, at a glance</h3>
    <p class="sub">Los Angeles · partly sunny · rain chance peaks at 1 p.m.</p>
    <div class="bars">
      ${temps.map((temp, index) => `<span><i style="height:${(temp - 60) * 8}px"></i>${labels[index]}</span>`).join("")}
    </div>
  `;
  return card;
}

function renderVideo() {
  const wrap = document.createElement("div");
  wrap.className = "boards";
  wrap.innerHTML = `
    <figure class="board"><div class="frame"><div class="sky"></div><div class="mnt"></div></div><figcaption>1 · Hold on the ridgeline</figcaption></figure>
    <figure class="board"><div class="frame tight"><div class="sky"></div><div class="mnt"></div></div><figcaption>2 · Drift closer</figcaption></figure>
    <figure class="board"><div class="frame"><div class="sky"></div><div class="mnt"></div><div class="card">How were these mountains formed?</div></div><figcaption>3 · Ask the question</figcaption></figure>
  `;
  return wrap;
}

function plain(message) {
  if (message.type === "text" || message.type === "email") return message.body;
  if (message.type === "weather") return `${message.data.place}. ${message.data.condition}. ${message.prose}`;
  if (message.type === "checks") return `${message.intro} ${message.items.join(" ")}`;
  if (message.body) return message.body;
  if (message.type === "plan") return "A one-month local marketing plan for a neighborhood café.";
  if (message.type === "notes") return "Summary of Monday’s product sync.";
  if (message.type === "budget") return "A first-month budget under $600.";
  return "Response ready.";
}

function appendBot(message) {
  const block = document.createElement("div");
  block.className = "answer";
  if (message.type === "text") block.appendChild(prose(message.body));
  if (message.type === "weather") {
    block.append(renderWeather(message), prose(message.prose));
  }
  if (message.type === "poster") {
    block.append(renderPoster(message.theme), prose(message.body));
  }
  if (message.type === "plan") block.appendChild(renderPlan());
  if (message.type === "budget") block.appendChild(renderBudget());
  if (message.type === "notes") block.appendChild(renderNotes());
  if (message.type === "email") block.appendChild(Object.assign(document.createElement("p"), { className: "note", textContent: message.body }));
  if (message.type === "checks") block.appendChild(renderChecks(message));
  if (message.type === "canvas") {
    block.append(prose(message.body), renderCanvas());
  }
  if (message.type === "video") {
    block.append(prose(message.body), renderVideo());
  }
  const follows = followRow(message.follow);
  if (follows) block.appendChild(follows);
  log.appendChild(block);
  if (message.topic) lastTopic = message.topic;
  announce.textContent = plain(message);
  scrollThread();
}

function showTyping() {
  hideTyping();
  const row = document.createElement("div");
  row.className = "typing";
  row.id = "typing";
  row.innerHTML = '<svg class="sparkle" viewBox="0 0 24 24" aria-hidden="true"><use href="#spark"/></svg>';
  log.appendChild(row);
  scrollThread();
}

function hideTyping() {
  document.getElementById("typing")?.remove();
}

function renderSuggestions() {
  const items = mode === "task" ? taskSuggestions : chatSuggestions;
  suggestions.replaceChildren();
  items.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.ask = item.label;
    button.innerHTML = `${glyph[item.icon]}<span></span>`;
    button.querySelector("span").textContent = item.label;
    suggestions.appendChild(button);
  });
  const placeholder = mode === "task" ? "Describe a task" : "Ask Gemini";
  promptEmpty.placeholder = placeholder;
  promptDock.placeholder = placeholder;
}

function setMode(next) {
  mode = next;
  document.getElementById("mode-chat").setAttribute("aria-selected", next === "chat" ? "true" : "false");
  document.getElementById("mode-task").setAttribute("aria-selected", next === "task" ? "true" : "false");
  renderSuggestions();
}

function setModel(next) {
  model = next;
  document.querySelectorAll(".model-label").forEach((node) => {
    node.textContent = next;
  });
}

function syncComposers() {
  [formEmpty, formDock].forEach((form) => {
    const has = form.querySelector(".prompt").value.trim().length > 0;
    form.querySelector(".send").hidden = !has;
    form.querySelector(".mic").hidden = has;
  });
}

function activePrompt() {
  return app.classList.contains("is-chat") ? promptDock : promptEmpty;
}

async function pump() {
  if (busy) return;
  const job = queue.shift();
  if (!job) return;
  const gen = generation;
  busy = true;
  appendUser(job);
  showTyping();
  const message = answer(job);
  await wait(780);
  if (gen !== generation) return;
  hideTyping();
  appendBot(message);
  busy = false;
  pump();
}

let lastSentAt = 0;

function enqueueUser(value) {
  const text = value.trim();
  if (!text) return;
  const now = Date.now();
  if (now - lastSentAt < 350) return;
  lastSentAt = now;
  queue.push(text);
  pump();
}

function sendFrom(form) {
  const input = form.querySelector(".prompt");
  const value = input.value;
  if (!value.trim()) return;
  input.value = "";
  promptEmpty.value = "";
  promptDock.value = "";
  syncComposers();
  enqueueUser(value);
  openThread();
  promptDock.focus();
}

function closePopover() {
  popover.hidden = true;
  popover.style.top = "";
  popover.style.bottom = "";
  popAnchor = null;
  document.querySelectorAll("[data-pop='model']").forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });
}

function placePopover(anchor) {
  const appBox = app.getBoundingClientRect();
  const box = anchor.getBoundingClientRect();
  const openUp = box.bottom + 200 > appBox.bottom;
  popover.hidden = false;
  const left = Math.min(Math.max(12, box.left - appBox.left), app.clientWidth - popover.offsetWidth - 12);
  popover.style.left = `${left}px`;
  if (openUp) {
    popover.style.top = "auto";
    popover.style.bottom = `${appBox.bottom - box.top + 8}px`;
  } else {
    popover.style.bottom = "auto";
    popover.style.top = `${box.bottom - appBox.top + 8}px`;
  }
}

function openPopover(anchor, html) {
  if (popAnchor === anchor && !popover.hidden) {
    closePopover();
    return;
  }
  popover.innerHTML = html;
  popAnchor = anchor;
  placePopover(anchor);
}

function modelMenu() {
  return ["Flash-Lite", "Flash", "Pro"].map((name) => (
    `<button type="button" data-model="${name}" aria-selected="${name === model}">${name}</button>`
  )).join("");
}

function showFeature(index) {
  featureIndex = (index + features.length) % features.length;
  const feature = features[featureIndex];
  document.getElementById("feature-title").textContent = feature.title;
  document.getElementById("feature-body").textContent = feature.body;
  document.getElementById("feature-cta").textContent = feature.cta;
  phones.dataset.preview = feature.preview;
  document.querySelectorAll("[data-feature]").forEach((tab) => {
    tab.setAttribute("aria-selected", Number(tab.dataset.feature) === featureIndex ? "true" : "false");
  });
}

function paintCatalog(id) {
  const list = document.getElementById("catalog");
  list.replaceChildren();
  catalogs[id].forEach((name) => {
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
  });
  document.querySelectorAll("[data-filter]").forEach((tab) => {
    tab.setAttribute("aria-selected", tab.dataset.filter === id ? "true" : "false");
  });
}

function showSection(id) {
  document.querySelectorAll("[data-section]").forEach((tab) => {
    const on = tab.dataset.section === id;
    tab.setAttribute("aria-selected", on ? "true" : "false");
    document.getElementById(tab.getAttribute("aria-controls")).hidden = !on;
  });
}

function resetChat() {
  generation += 1;
  busy = false;
  queue = [];
  transcript = [];
  lastTopic = "";
  log.replaceChildren();
  hideTyping();
  app.classList.remove("is-chat");
  formDock.hidden = true;
  disclaimer.hidden = true;
  getApp.hidden = false;
  barNew.hidden = false;
  barMore.hidden = true;
  promptEmpty.value = "";
  promptDock.value = "";
  syncComposers();
  closePopover();
  promptEmpty.focus();
}

const brandIcons = [
  '<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="9" fill="none" stroke="#4285f4" stroke-width="4"/><path d="M16 7a9 9 0 0 1 7.8 4.5" fill="none" stroke="#ea4335" stroke-width="4" stroke-linecap="round"/><path d="M23.8 11.5 16 16" stroke="#fbbc05" stroke-width="4" stroke-linecap="round"/><circle cx="16" cy="16" r="3.2" fill="#4285f4"/></svg>',
  '<svg viewBox="0 0 32 32"><path d="M12 14.2 10 11M20 14.2 22 11" fill="none" stroke="#3ddc84" stroke-width="1.6" stroke-linecap="round"/><rect x="9" y="14" width="14" height="10" rx="3" fill="#3ddc84"/><circle cx="13" cy="18" r="1" fill="#fff"/><circle cx="19" cy="18" r="1" fill="#fff"/><path d="M8 17v5M24 17v5" fill="none" stroke="#3ddc84" stroke-width="1.8" stroke-linecap="round"/></svg>',
  '<svg viewBox="0 0 32 32"><path d="M16 4.5c.2 4.6 1.6 6.6 5.2 7.5-3.6.9-5 2.9-5.2 7.5-.2-4.6-1.6-6.6-5.2-7.5C14.4 11.1 15.8 9.1 16 4.5z" fill="#7b61ff"/></svg>',
  '<svg viewBox="0 0 32 32"><path d="M16 5c1.2 3.2 1.2 4.6 0 8 3.4-.6 6.2.6 7.2 4.2A7 7 0 1 1 9.2 14c.8-2.4 2.2-5 6.8-9z" fill="#ea4335"/></svg>',
  '<svg viewBox="0 0 32 32"><rect x="6" y="5" width="20" height="22" rx="2" fill="#4285f4"/><path d="M11 12h10M11 16h10M11 20h6" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>',
  '<svg viewBox="0 0 32 32"><rect x="3" y="8" width="26" height="16" rx="4" fill="#ff0033"/><path d="M13 12.2v7.6l7-3.8z" fill="#fff"/></svg>',
  '<svg viewBox="0 0 32 32"><rect x="4" y="9" width="24" height="15" rx="2" fill="#34a853"/><path d="M4 11l12 8 12-8" fill="none" stroke="#fff" stroke-width="1.6"/></svg>',
  '<svg viewBox="0 0 32 32"><path d="M9 26V8l7 5 3-4 8 5v12z" fill="#1a73e8"/></svg>',
  '<svg viewBox="0 0 32 32"><circle cx="12" cy="14" r="5" fill="#ea4335"/><circle cx="20" cy="14" r="5" fill="#fbbc05"/><circle cx="12" cy="20" r="5" fill="#34a853"/><circle cx="20" cy="20" r="5" fill="#4285f4"/></svg>',
  '<svg viewBox="0 0 32 32"><path d="M7 9.5h18v13H7z" fill="#fbbc05"/><path d="M7 9.5 16 17l9-7.5" fill="none" stroke="#fff" stroke-width="1.6"/></svg>',
];

function buildMarquee() {
  const track = document.getElementById("marquee");
  const html = brandIcons.join("");
  track.innerHTML = html + html;
}

[formEmpty, formDock].forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendFrom(form);
  });
  const input = form.querySelector(".prompt");
  input.addEventListener("input", syncComposers);
  input.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || event.isComposing) return;
    event.preventDefault();
    sendFrom(form);
  });
});

document.getElementById("mode-chat").addEventListener("click", () => setMode("chat"));
document.getElementById("mode-task").addEventListener("click", () => setMode("task"));
document.getElementById("rail-new").addEventListener("click", resetChat);
barNew.addEventListener("click", resetChat);
barMore.addEventListener("click", resetChat);

document.body.addEventListener("click", (event) => {
  const ask = event.target.closest("[data-ask]");
  if (ask && !popover.contains(ask)) {
    enqueueUser(ask.dataset.ask);
    return;
  }
  const pop = event.target.closest("[data-pop]");
  if (pop) {
    const kind = pop.dataset.pop;
    if (kind === "search") {
      closePopover();
      activePrompt().focus();
      return;
    }
    if (kind === "model") {
      pop.setAttribute("aria-expanded", "true");
      openPopover(pop, modelMenu());
      return;
    }
    if (kind === "plus") {
      openPopover(pop, "<p>File uploads aren’t part of this study. Ask in the box instead.</p>");
      return;
    }
    if (kind === "mic") {
      openPopover(pop, "<p>Voice isn’t part of this study. Type a message instead.</p>");
      return;
    }
    if (kind === "app") {
      openPopover(pop, "<p>The Gemini mobile app isn’t part of this study.</p>");
      return;
    }
    if (kind === "about") {
      openPopover(pop, "<p>This is a design study. Nothing you type is saved or sent to Google.</p>");
      return;
    }
    if (kind === "prompts") {
      openPopover(pop, `<p>Try one of these.</p>${chatSuggestions.map((item) => `<button type="button" data-ask="${escapeHTML(item.label)}">${escapeHTML(item.label)}</button>`).join("")}`);
      return;
    }
    if (kind === "history") {
      const list = transcript.length
        ? `<ul>${transcript.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`
        : "<p>No chats yet. Ask Gemini something.</p>";
      openPopover(pop, `<p>This session</p>${list}`);
    }
    return;
  }
  const modelPick = event.target.closest("[data-model]");
  if (modelPick && popover.contains(modelPick)) {
    setModel(modelPick.dataset.model);
    closePopover();
    return;
  }
  const popAsk = event.target.closest("[data-ask]");
  if (popAsk && popover.contains(popAsk)) {
    closePopover();
    enqueueUser(popAsk.dataset.ask);
    return;
  }
  if (!popover.hidden && !popover.contains(event.target)) closePopover();
});

log.addEventListener("click", (event) => {
  const unit = event.target.closest("button[data-unit]");
  if (unit) {
    const card = unit.closest(".wx");
    card.dataset.degree = unit.dataset.unit;
    paintWeather(card);
    return;
  }
  const tab = event.target.closest("[data-wxtab]");
  if (tab) {
    const card = tab.closest(".wx");
    card.dataset.tab = tab.dataset.wxtab;
    card.classList.toggle("is-precip", tab.dataset.wxtab === "precip");
    card.classList.toggle("is-wind", tab.dataset.wxtab === "wind");
    card.querySelectorAll("[data-wxtab]").forEach((button) => {
      button.setAttribute("aria-selected", button === tab ? "true" : "false");
    });
  }
});

document.querySelectorAll("[data-section]").forEach((tab, index, tabs) => {
  tab.addEventListener("click", () => showSection(tab.dataset.section));
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next = event.key === "ArrowRight" ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length;
    tabs[next].focus();
    showSection(tabs[next].dataset.section);
  });
});

document.querySelectorAll("[data-feature]").forEach((tab) => {
  tab.addEventListener("click", () => showFeature(Number(tab.dataset.feature)));
});

document.getElementById("feature-cta").addEventListener("click", () => {
  app.scrollIntoView({ behavior: motionOk ? "smooth" : "auto", block: "center" });
  enqueueUser(features[featureIndex].ask);
});

document.querySelectorAll("[data-filter]").forEach((tab) => {
  tab.addEventListener("click", () => paintCatalog(tab.dataset.filter));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closePopover();
});

buildMarquee();
renderSuggestions();
paintCatalog("featured");
showFeature(0);
syncComposers();

const jump = document.querySelector(".jump");
const activeJump = jump.querySelector('[aria-selected="true"]');
if (activeJump) {
  jump.scrollLeft = activeJump.offsetLeft - (jump.clientWidth - activeJump.offsetWidth) / 2;
}
