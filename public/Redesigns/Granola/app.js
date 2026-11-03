const POSTS = [
  {
    category: "blog",
    title: "How sales teams use Granola",
    authors: ["Bardia Shahali", "Camilla Bier"],
    date: "August 17",
    image: "sales-note.jpg",
    imageAlt: "A notebook, pen, laptop, and coffee on a meeting table",
    caption: "the desk, before the call",
    tilt: -2.1,
    body: "The best sales notes are not a transcript. Reps jot the objection, the next step, and the name that actually decides. Granola keeps that scratch pad in the meeting, then turns it into a follow-up you would send yourself.",
  },
  {
    category: "announcements",
    title: "Granola for Apple Watch",
    authors: ["Jack"],
    date: "July 28",
    image: "watch-note.jpg",
    imageAlt: "A round smartwatch on a wrist in a navy sleeve",
    caption: "on the wrist",
    tilt: 1.7,
    body: "A meeting on your wrist. Peek the brief before you walk in, catch the last decision on the way out, and leave the laptop in the bag. Same notes, smaller glass, still yours.",
  },
  {
    category: "announcements",
    title: "Granola for Android is here!",
    authors: ["Jack"],
    date: "July 1",
    image: "phone-note.jpg",
    imageAlt: "A phone and a blue pen on lined notebook paper",
    caption: "the android one",
    tilt: 2.2,
    body: "Phone calls, hallway chats, the meeting that started in a car. Android gets the notepad too, so the note follows you off the desktop and onto the device already in your hand.",
  },
  {
    category: "blog",
    title: "Why Granola doesn't use a bot",
    authors: ["Chris Pedregal", "Sam Stephenson"],
    date: "June 1",
    body: "A bot in the room changes the room. People perform. Granola stays on your machine, like a paper pad, and writes with you instead of joining the call as a stranger.",
  },
  {
    category: "announcements",
    title: "New: Briefs prepare you for your next meeting as you join",
    authors: ["Jack"],
    date: "May 20",
    body: "You click join and the last thread is already on the page. Who you owe, what you promised, the open question from Tuesday. The brief shows up as you arrive, not after you scramble.",
  },
  {
    category: "blog",
    title: "--dangerously-skip-permissions is the only safe mode",
    authors: ["Jim Fisher"],
    date: "May 11",
    body: "A love letter to the scary flag. The safe path is the one you can read. Jim argues that hiding permission prompts trains people to click through, and the honest default is the one with the sharp name.",
  },
  {
    category: "blog",
    title: "How Granola thinks about designing agents",
    authors: ["Toby", "Robert", "Xiuting"],
    date: "May 6",
    body: "An agent should feel like a sharp colleague who has read the notes, not a wizard that runs off. Give it the margin of the page. Let a person cross things out. Design the handoff, not the magic trick.",
  },
  {
    category: "blog",
    title: "How I shipped Granola's San Francisco office in one 14-day trip",
    authors: ["Ursula Wild"],
    date: "April 27",
    image: "office-note.jpg",
    imageAlt: "A sunny office with a wood table, chairs, and moving boxes",
    caption: "day three, still boxes",
    tilt: -1.4,
    body: "Fourteen days, one lease, a pile of chairs, and a city that does not wait. Ursula's note from the road: pick the room for the conversations you want, then make it feel lived-in before the first all-hands.",
  },
  {
    category: "announcements",
    title: "Granola Chat just got smarter",
    authors: ["Jack"],
    date: "April 21",
    body: "Ask across the meetings, not just inside one. Chat now pulls the decision from March and the aside from yesterday, and answers in the margin like it was sitting there the whole time.",
  },
  {
    category: "announcements",
    title: "Granola raises $125M to put your company's context to work",
    authors: ["Chris Pedregal"],
    date: "March 25",
    body: "The raise is for the boring, precious thing: a company's memory. Notes that stay attached to the work, shared with the people who were actually there, and useful the morning after.",
  },
  {
    category: "press",
    title: "How to Take Good Meeting Notes: 7 Strategies That Work",
    authors: ["BestReviews"],
    date: "February 26",
    body: "Write decisions, not dialogue. Leave blanks you can fill. Mark owners next to verbs. BestReviews walks through seven habits that make a page useful on Friday, when the meeting is already a blur.",
  },
  {
    category: "blog",
    title: "So, you think it's easy to change an app icon?",
    authors: ["Dante"],
    date: "February 9",
    body: "A tiny square, a dozen platforms, and a week of almosts. Dante's postmortem on swapping the icon: the pixels are the easy part. The hard part is every place the old mark still hides.",
  },
  {
    category: "announcements",
    title: "Granola MCP: Connect your meeting notes to Claude, ChatGPT, and Cursor",
    authors: ["Jack"],
    date: "February 4",
    body: "The notes leave the notepad and sit next to the tools you already ask questions. MCP lets Claude, ChatGPT, and Cursor read the meeting without a copy-paste detour.",
  },
  {
    category: "blog",
    title: "Meet the new look Granola",
    authors: ["Sam Stephenson"],
    date: "February 2",
    body: "Same product, a face that finally matches it. A hand-drawn mark, a serif with a little nerve, and a green that feels like a highlighter instead of a startup costume.",
  },
  {
    category: "press",
    title: "I Spent 10 Years Taking Bad Notes. This AI Changed Everything",
    authors: ["Feisworld"],
    date: "January 13",
    body: "A decade of notebooks that went stale by Thursday. Feisworld on the switch: the useful change was not more text. It was a page that still knew what the meeting had been for.",
  },
  {
    category: "blog",
    title: "How we wrote the prompts behind Granola's Crunched 2025",
    authors: ["Jo Barrow"],
    date: "December 17, 2025",
    body: "Crunched had to sound like a person who was in the room, not a recap bot. Jo's notes on the prompts: shorter instructions, meaner examples, and a rule that the note may leave things out.",
  },
  {
    category: "announcements",
    title: "Introducing Recipes, in the all-new Granola Chat",
    authors: ["Chris Pedregal"],
    date: "September 30, 2025",
    body: "Recipes are saved ways of asking. A sales debrief, a user-research sweep, a Monday digest. Write the habit once, then run it on whatever the week just handed you.",
  },
  {
    category: "blog",
    title: "When back becomes broken: how we found a tiny navigation bug",
    authors: ["nick"],
    date: "July 7, 2025",
    body: "Back should mean back. For a while it meant sideways, and only on one path through the app. Nick traces the tiny state bug, the wrong assumption, and the test that finally caught it.",
  },
  {
    category: "announcements",
    title: "Granola 2.0: A second brain for your team",
    authors: ["Chris Pedregal"],
    date: "May 14, 2025",
    body: "2.0 is the notepad growing a shared memory. Your margin notes stay personal. The decisions, the owners, the open loops — those can belong to the team without turning the page into a wiki.",
  },
  {
    category: "blog",
    title: "Start with a dot-plot",
    authors: ["Jim Fisher"],
    date: "May 10, 2025",
    body: "Before the dashboard, draw the dots. Jim's argument for looking at the raw shape of a behavior first, so the average does not talk you out of what the meetings are actually doing.",
  },
  {
    category: "press",
    title: "Can Granola's AI meeting notes eat bigger apps for breakfast?",
    authors: ["Upstarts Media"],
    date: "April 2, 2025",
    body: "Upstarts asks whether a notepad can unsettle the big meeting suites. The bet in the piece: people do not want another destination. They want the notes they were already going to take.",
  },
  {
    category: "press",
    title: "Sam Stephenson – the journey of designing an AI startup",
    authors: ["Dive Club"],
    date: "March 28, 2025",
    body: "Dive Club sits down with Sam on designing an AI product that still looks like stationery. The through-line: taste is a product decision, and the page should feel calm even when the model is not.",
  },
  {
    category: "press",
    title: "Chris Pedregal — building Granola",
    authors: ["Invest Like the Best"],
    date: "February 25, 2025",
    body: "Chris on building Granola the long way. Start from the meeting you wish you had handled better. Stay allergic to bots. Let the company remember without making everyone perform for a recorder.",
  },
  {
    category: "blog",
    title: "Don't animate height!",
    authors: ["Jim Fisher"],
    date: "January 29, 2025",
    body: "Height animations lie to the layout engine and jank the rest of the page. Jim's plea: if it has to move, move transform and opacity. Leave height alone unless you enjoy chasing one-frame bugs.",
  },
  {
    category: "press",
    title: "How to build a truly useful AI product",
    authors: ["Every"],
    date: "December 9, 2024",
    body: "Every on usefulness versus demo magic. A useful AI product finishes a job a person already has, in the place they already work, and can be corrected with a pen.",
  },
  {
    category: "press",
    title: "Our biggest stories and favorite things of 2024",
    authors: ["The Verge"],
    date: "December 5, 2024",
    body: "The Verge's year-end pile, and Granola among the tools people actually kept open. Less a launch story than a habit story: the tab that survived December.",
  },
  {
    category: "press",
    title: "A recipe for everyday AI",
    authors: ["Digital Frontier"],
    date: "December 3, 2024",
    body: "Digital Frontier looks for AI that fits a Tuesday. Their recipe: one job, a surface you trust, and an output you can edit before anyone else sees it.",
  },
  {
    category: "blog",
    title: "Using AI to be more present and effective in your meetings",
    authors: ["Alex Rainert"],
    date: "November 22, 2024",
    body: "Alex on looking up. When the page catches the thread, you can stay in the conversation. The note is there so your attention does not have to be split between listening and transcribing.",
  },
  {
    category: "announcements",
    title: "Granola raises $20M to build the AI notepad that makes you smarter",
    authors: ["Chris Pedregal"],
    date: "October 23, 2024",
    body: "Twenty million to build the notepad, not a meeting robot. Chris's note from the round: the product is a better margin, and the company is the memory that margin can become.",
  },
  {
    category: "press",
    title: "VCs love using the AI meeting notepad Granola, so they gave it $20M",
    authors: ["TechCrunch"],
    date: "October 23, 2024",
    body: "TechCrunch on a round led by people who were already in the product. The detail that stuck: investors met Granola as users first, and the check followed the notepad.",
  },
  {
    category: "press",
    title: "Chris Pedregal: Revolutionizing meetings with AI",
    authors: ["Lightspeed Venture Partners"],
    date: "October 23, 2024",
    body: "Lightspeed's portrait of Chris and the meeting problem. Fewer status theaters. More of the sentence you meant to write down. AI as the quiet second pen, not the person running the room.",
  },
  {
    category: "blog",
    title: "How to evolve a product",
    authors: ["Jim Fisher"],
    date: "June 25, 2024",
    body: "Evolution is a sequence of small kept promises. Jim's field note: change the page only when the last change has been lived in. A product grows by subtraction as often as by shipping.",
  },
  {
    category: "press",
    title: "The best AI note-taking tools for meetings",
    authors: ["Time"],
    date: "June 12, 2024",
    body: "Time's tour of the note-taking shelf. The useful split in the piece: tools that record the room, and tools that help you write. Granola sits on the writing side.",
  },
  {
    category: "blog",
    title: "How to Get the Best Out of Granola: Your Ultimate Guide",
    authors: ["Jo Barrow"],
    date: "May 24, 2024",
    body: "Jo's field guide. Title the note before you join. Scribble the question you came in with. Let the model fill the rest, then delete anything you would not say out loud.",
  },
  {
    category: "blog",
    title: "Introducing Granola: the AI-powered notepad for meetings",
    authors: ["Chris Pedregal"],
    date: "May 22, 2024",
    body: "The first page. Granola is a notepad that listens with you and helps you leave with the decision, the owner, and the sentence you would have forgotten in the hallway.",
  },
];

const ICONS = {
  blog: `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.2h5.2L12.8 6v7.6a1.2 1.2 0 0 1-1.2 1.2H4.4A1.2 1.2 0 0 1 3.2 13.6V3.4A1.2 1.2 0 0 1 4.4 2.2z" fill="#d7e36a" stroke="#6d7a16" stroke-width="1"/><path d="M9 2.4V6h3.6" fill="none" stroke="#6d7a16" stroke-width="1"/></svg>`,
  announcements: `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 6.2h2.2l5.2-2.6v8.8L5.2 9.8H3a1 1 0 0 1-1-1V7.2a1 1 0 0 1 1-1z" fill="#d7ccfb" stroke="#6d5cae" stroke-width="1"/><path d="M5.2 10.1v2.4a1 1 0 0 0 1.6.8l1.2-1" fill="none" stroke="#6d5cae" stroke-width="1" stroke-linecap="round"/></svg>`,
  press: `<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="5.2" fill="#d5e7fb" stroke="#4d74a8" stroke-width="1"/><ellipse cx="8" cy="8" rx="2.3" ry="5.2" fill="none" stroke="#4d74a8" stroke-width="1"/><path d="M3 8h10" fill="none" stroke="#4d74a8" stroke-width="0.8"/></svg>`,
};

const LABELS = {
  blog: "Blog",
  announcements: "Announcement",
  press: "Press",
};

const stackEl = document.getElementById("stack");
const countEl = document.getElementById("count");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let filter = "all";
let index = 0;
let animating = false;
let generation = 0;
let drag = null;
let prevPreview = null;

function visible() {
  return POSTS.filter((post) => filter === "all" || post.category === filter);
}

function authorsOf(post) {
  return post.authors.join("  ·  ");
}

function rest(depth, tilt = 0) {
  const poses = [
    { x: 0, y: 0, r: tilt, s: 1 },
    { x: 16, y: 20, r: 2.4, s: 0.984 },
    { x: 8, y: 38, r: -1.8, s: 0.966 },
  ];
  const pose = poses[depth] || poses[poses.length - 1];
  return `translate(${pose.x}px, ${pose.y}px) rotate(${pose.r}deg) scale(${pose.s})`;
}

function tiltAt(i) {
  const tilts = [-0.6, 0.45, -0.25, 0.7, -0.9];
  const n = Math.max(1, visible().length);
  const idx = ((i % n) + n) % n;
  return tilts[idx % tilts.length];
}

function topTilt() {
  return tiltAt(index);
}

function clearPrevPreview() {
  if (!prevPreview) return;
  prevPreview.remove();
  prevPreview = null;
}

function ensurePrevPreview() {
  if (prevPreview && prevPreview.isConnected) return prevPreview;
  const items = visible();
  if (items.length < 2) return null;
  const post = items[(index - 1 + items.length) % items.length];
  const wrap = document.createElement("div");
  wrap.innerHTML = noteMarkup(post, 0).trim();
  prevPreview = wrap.firstElementChild;
  prevPreview.dataset.depth = "-1";
  prevPreview.classList.add("note-preview");
  prevPreview.setAttribute("aria-hidden", "true");
  prevPreview.style.zIndex = "20";
  prevPreview.style.pointerEvents = "none";
  prevPreview.style.transition = "none";
  stackEl.appendChild(prevPreview);
  return prevPreview;
}

function placePrevPreview(progress) {
  const card = ensurePrevPreview();
  if (!card) return;
  const tilt = tiltAt(index - 1);
  const x = -720 + 720 * progress;
  const y = 36 * (1 - progress);
  const r = -16 + (tilt + 16) * progress;
  card.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
}

function tapedMarkup(post, size) {
  if (!post.image) return "";
  const tilt = post.tilt ?? -1.6;
  return `
    <figure class="taped taped-${size}" style="--tilt:${tilt}deg">
      <span class="tape" aria-hidden="true"></span>
      <div class="print">
        <img src="/Redesigns/Granola/images/${post.image}" alt="${post.imageAlt || ""}" draggable="false" />
      </div>
      <figcaption>${post.caption || ""}</figcaption>
    </figure>
  `;
}

function noteMarkup(post, depth) {
  const hidden = depth === 0 ? "false" : "true";
  return `
    <article class="note${post.image ? " has-photo" : ""}" data-depth="${depth}" aria-hidden="${hidden}" style="z-index:${10 - depth}; transform:${rest(depth, depth === 0 ? topTilt() : 0)}">
      <div class="paper">
        <span class="hole hole-a"></span>
        <span class="hole hole-b"></span>
        <span class="hole hole-c"></span>
        <span class="margin"></span>
        <div class="writing">
          <p class="kicker">${ICONS[post.category]} ${LABELS[post.category]}  ·  ${post.date}</p>
          <h2 class="title">${post.title}</h2>
          ${tapedMarkup(post, "card")}
          ${post.image ? "" : `<p class="gap" aria-hidden="true">&nbsp;</p>`}
          <p class="body">${post.body}</p>
          <p class="gap" aria-hidden="true">&nbsp;</p>
          <p class="byline">${authorsOf(post)}</p>
          <p><button class="read-more" type="button">read more →</button></p>
        </div>
      </div>
    </article>
  `;
}

function render() {
  const items = visible();
  if (!items.length) {
    stackEl.innerHTML = "";
    countEl.textContent = "No notes";
    return;
  }
  index = ((index % items.length) + items.length) % items.length;
  const count = Math.min(3, items.length);
  const cards = [];
  for (let depth = count - 1; depth >= 0; depth -= 1) {
    const post = items[(index + depth) % items.length];
    cards.push(noteMarkup(post, depth));
  }
  stackEl.innerHTML = cards.join("");
  countEl.textContent = `${index + 1}  /  ${items.length}`;
}

function topCard() {
  return stackEl.querySelector('.note[data-depth="0"]');
}

function settleBacks(progress) {
  stackEl.querySelectorAll(".note").forEach((card) => {
    const depth = Number(card.dataset.depth);
    if (depth <= 0) return;
    const from = depth;
    const to = depth - 1;
    const tilt = to === 0 ? tiltAt(index + 1) : 0;
    const a = rest(from).match(/-?\d+\.?\d*/g).map(Number);
    const b = rest(to, tilt).match(/-?\d+\.?\d*/g).map(Number);
    const mix = a.map((value, i) => value + (b[i] - value) * progress);
    card.style.transform = `translate(${mix[0]}px, ${mix[1]}px) rotate(${mix[2]}deg) scale(${mix[3]})`;
  });
}

function applyDrag(x, y) {
  const top = topCard();
  if (!top) return;
  const rot = topTilt() + x / 22;
  top.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg)`;
  if (x >= 0) {
    clearPrevPreview();
    settleBacks(Math.min(1, x / 180));
  } else {
    settleBacks(0);
    placePrevPreview(Math.min(1, -x / 180));
  }
}

function finish(dir) {
  const items = visible();
  animating = false;
  clearPrevPreview();
  if (!items.length) return;
  index = (index + dir + items.length) % items.length;
  render();
}

function fly(dir) {
  if (!dir || animating || readerOpen) return;
  const top = topCard();
  if (!top) return;
  animating = true;
  const gen = ++generation;
  const ease = "transform .42s cubic-bezier(.2,.75,.2,1)";
  top.style.transition = ease;
  if (dir > 0) {
    clearPrevPreview();
    top.style.transform = "translate(880px, 48px) rotate(18deg)";
    stackEl.querySelectorAll(".note").forEach((card) => {
      const depth = Number(card.dataset.depth);
      if (depth <= 0) return;
      card.style.transition = "transform .42s cubic-bezier(.18,.84,.24,1)";
      card.style.transform = rest(depth - 1, depth - 1 === 0 ? tiltAt(index + 1) : 0);
    });
  } else {
    top.style.transform = "translate(-880px, 36px) rotate(-16deg)";
    settleBacks(0);
    const preview = ensurePrevPreview();
    if (preview) {
      preview.style.transition = "transform .42s cubic-bezier(.18,.84,.24,1)";
      preview.style.transform = rest(0, tiltAt(index - 1));
    }
  }
  window.setTimeout(() => {
    if (gen !== generation) return;
    finish(dir);
  }, 420);
}

function track(event) {
  if (!drag || drag.id !== event.pointerId) return;
  const x = event.clientX - drag.x0;
  const y = (event.clientY - drag.y0) * 0.28;
  const now = performance.now();
  const dt = Math.max(16, now - drag.lt);
  drag.vx = (event.clientX - drag.lx) / dt;
  drag.lx = event.clientX;
  drag.lt = now;
  drag.x = x;
  drag.y = y;
  applyDrag(x, y);
}

function release(event) {
  if (!drag || (event && drag.id !== event.pointerId)) return;
  if (event) track(event);
  const { x, y, vx } = drag;
  drag = null;
  window.removeEventListener("pointermove", track);
  window.removeEventListener("pointerup", release);
  window.removeEventListener("pointercancel", release);
  const past = Math.abs(x) >= 110;
  const flicked = Math.abs(vx) >= 0.55;
  const tapped = Math.abs(x) < 8 && Math.abs(y) < 8;
  if (past || flicked) {
    const nextward = past ? x > 0 : vx > 0;
    fly(nextward ? 1 : -1);
    return;
  }
  if (tapped) {
    clearPrevPreview();
    openReader();
    return;
  }
  const top = topCard();
  if (top) {
    top.style.transition = "transform .45s cubic-bezier(.18,.84,.24,1)";
    top.style.transform = rest(0, topTilt());
  }
  stackEl.querySelectorAll(".note").forEach((card) => {
    const depth = Number(card.dataset.depth);
    if (depth <= 0) return;
    card.style.transition = "transform .45s cubic-bezier(.18,.84,.24,1)";
    card.style.transform = rest(depth);
  });
  if (prevPreview) {
    const node = prevPreview;
    prevPreview = null;
    node.style.transition = "transform .35s ease";
    node.style.transform = "translate(-760px, 36px) rotate(-16deg)";
    window.setTimeout(() => node.remove(), 360);
  }
}

stackEl.addEventListener("pointerdown", (event) => {
  if (animating || readerOpen || event.button !== 0) return;
  const top = topCard();
  if (!top || !top.contains(event.target)) return;
  if (event.target.closest(".read-more")) return;
  drag = {
    id: event.pointerId,
    x0: event.clientX,
    y0: event.clientY,
    x: 0,
    y: 0,
    lx: event.clientX,
    lt: performance.now(),
    vx: 0,
  };
  top.style.transition = "none";
  window.addEventListener("pointermove", track);
  window.addEventListener("pointerup", release);
  window.addEventListener("pointercancel", release);
});

prevBtn.addEventListener("click", () => fly(-1));
nextBtn.addEventListener("click", () => fly(1));

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    if (readerOpen) closeReader();
    if (chip.dataset.filter === filter) return;
    filter = chip.dataset.filter;
    index = 0;
    animating = false;
    generation += 1;
    drag = null;
    clearPrevPreview();
    document.querySelectorAll(".chip").forEach((other) => {
      other.setAttribute("aria-selected", other === chip ? "true" : "false");
    });
    render();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && readerOpen) {
    closeReader();
    return;
  }
  if (readerOpen) return;
  if (event.key === "ArrowRight") fly(1);
  if (event.key === "ArrowLeft") fly(-1);
});

stackEl.addEventListener("click", (event) => {
  if (!event.target.closest(".read-more")) return;
  event.preventDefault();
  openReader();
});

let readerOpen = false;
let readerEl = null;
let scrimEl = null;

const EXTRAS = {
  "How sales teams use Granola": [
    "The best sales calls are conversations. The moment a rep starts typing, the call changes: eye contact breaks, follow-ups get shallower, and the prospect can feel the attention split. The notepad is there so the person can stay in the room.",
    "What changes afterward is the follow-up. The quote, the number, and the hesitation are already on the page, so the work becomes judgment instead of archaeology. Which thread to pull. Which champion to arm. Which risk to name early.",
    "Managers notice a second effect. Reviews stop being about reconstructing what was said and start being about what to do next, because the record is shared instead of trapped in one person's notebook.",
  ],
  "Granola for Apple Watch": [
    "Not every important meeting happens on a call. They happen in hallways, over coffee, and in the five minutes after standup when someone says the thing that actually matters.",
    "The watch has a narrow job: start reliably, stay out of the way, and hand the conversation back to the same workspace as your calls. The thinking happens later, on the bigger screen, with the full context.",
    "Tap, talk, and the note is waiting when you sit down. Same pile. Smaller glass.",
  ],
  "Granola for Android is here!": [
    "Phone calls, hallway chats, the meeting that started in a car. The desktop was never where all of the work happened, and the notes should not pretend otherwise.",
    "Android gets the same notepad: a page you can open with one hand, a capture that does not ask you to join a bot, and a handoff back to the meetings you already have.",
    "The point of a second device is not a second product. It is the same memory, closer to where the conversation actually was.",
  ],
  "Why Granola doesn't use a bot": [
    "Every meeting note-taker has to answer one question: how does the audio get captured? The industry default is a bot that joins, announces itself, and records. We chose the other path, and it shapes the whole product.",
    "A bot changes the room. People perform for it, legal teams ask about it, and guests wonder who invited it. A meeting is a social situation before it is a data source.",
    "Bot-free capture is harder to build and gives us fewer shortcuts. We take that cost because the alternative makes every meeting slightly worse in a way people can feel but rarely name.",
  ],
  "New: Briefs prepare you for your next meeting as you join": [
    "You should not have to hunt for the last thread while the waiting room spins. The brief is the page you would have scribbled if you had five quiet minutes: who you owe, what you promised, the question still open.",
    "It shows up as you arrive, not as a recap after you have already improvised. The meeting can start on the second sentence instead of the first apology.",
    "A brief is only useful if it is short enough to read while the other person says hello. Everything else can wait on the full note.",
  ],
  "--dangerously-skip-permissions is the only safe mode": [
    "A scary flag is a kindness. It tells you the power you are about to grant, in the same breath as the command. Soft prompts train the opposite habit: click through, then wonder later what was allowed.",
    "The post is a plea for names that match the risk. If the safe path is the one a person can read, then the dangerous path should look dangerous on purpose.",
    "Permissions you hide do not become safer. They become folklore. The sharp name is the documentation.",
  ],
  "How Granola thinks about designing agents": [
    "There is a version of the future where software books, writes, and decides while you watch a dashboard. We are designing for a different one, where the agent's job is to make your judgment faster.",
    "A generic agent with a clever prompt knows nothing about your quarter, your customer, or the thing your manager said on Tuesday. An agent grounded in your meetings starts already oriented.",
    "Trust is the real interface. Every suggestion shows its source, every draft sits one glance from the underlying words, and every action is easy to undo. We would rather ship three things you can inspect than thirty you cannot.",
  ],
  "How I shipped Granola's San Francisco office in one 14-day trip": [
    "Fourteen days is not a construction schedule. It is a constraint that forces every choice into the open: the lease, the chairs, the first wall someone will stand in front of.",
    "The useful question was not how an office should look. It was which conversations it should make easier. Desks follow from that, not the other way around.",
    "By the time the first all-hands happened, the room had to feel lived in. A new office that still smells like a rendering is a room people perform in. This one needed to be a room people could interrupt.",
  ],
  "Granola Chat just got smarter": [
    "Asking inside one meeting is useful. Asking across the month is the thing people actually mean when they say they cannot remember where a decision was made.",
    "Chat can now pull the decision from March and the aside from yesterday, and answer in the margin as if it had been on the page the whole time. The source stays attached, so you can check the line instead of trusting the summary.",
    "Smarter, here, does not mean longer. It means the answer knows which meeting you meant.",
  ],
  "Granola raises $125M to put your company's context to work": [
    "A company's real knowledge does not live in its documents. It lives in the customer call where the roadmap changed, the standup where the risk was named, the interview where the pattern showed up first.",
    "The raise is for making that context usable. Deeper history, stronger search, and agents that start from what the company already knows instead of a blank page.",
    "The notes were always the beginning. The product is what a team can do the morning after, without asking the one person who was in the room.",
  ],
  "How to Take Good Meeting Notes: 7 Strategies That Work": [
    "Good notes are not a transcript. A transcript tells you everything that was said. Notes tell you what it meant. The skill is deciding which few things deserve to survive.",
    "Write the decision before the discussion. Capture the exact phrase when someone names a risk, a number, or a promise, because paraphrase quietly edits the truth. Leave blanks you can fill once the room is quiet.",
    "Separate capture from cleanup. During the meeting, mark what matters. Within the hour, organize it for a reader who was not there. That single standard fixes most note-taking problems.",
    "Whether a person or a tool does the capturing, the test is the same: could someone act on this tomorrow without asking you what you meant?",
  ],
  "So, you think it's easy to change an app icon?": [
    "A tiny square, a dozen platforms, and a week of almosts. The pixels are the part you can see. The hard part is every place the old mark still hides: a notification, a document, a dock that cached the previous glyph.",
    "Changing an icon is a migration, not a drawing. You have to decide what the mark is allowed to mean, then go find the copies that did not get the memo.",
    "The postmortem is affectionate. The icon did change. It just refused to change all at once.",
  ],
  "Granola MCP: Connect your meeting notes to Claude, ChatGPT, and Cursor": [
    "The notes are only stuck if the only way out of them is a copy and a paste. MCP lets the tools you already ask questions read the meeting without that detour.",
    "Claude, ChatGPT, and Cursor can sit next to the same context: the decision, the owner, the open loop. The notepad stays the source. The other tools borrow it.",
    "A connection is useful when you can still see where an answer came from. The meeting does not disappear into the chat. It stays a note you can open.",
  ],
  "Meet the new look Granola": [
    "Same product, a face that finally matches it. The old look was fine. It just looked like software. The new one looks a little more like the page you are already writing on.",
    "A hand-drawn mark, a serif with some nerve, and a green that feels like a highlighter. Calm, with energy underneath. Not a costume for a serious tool. The tool, dressed like itself.",
    "Visual systems are product decisions. If the page feels hurried, the notes will too. This one is trying to feel like you have a minute.",
  ],
  "I Spent 10 Years Taking Bad Notes. This AI Changed Everything": [
    "A decade of notebooks that went stale by Thursday. The problem was not effort. It was that the page stopped knowing what the meeting had been for.",
    "The useful change was not more text. It was a note that still held the decision after the conversation had left the room, and that you could find without rereading the whole hour.",
    "Ten years of bad notes is a high bar. The test is smaller: did Friday's you thank Thursday's you.",
  ],
  "How we wrote the prompts behind Granola's Crunched 2025": [
    "Crunched had to sound like a person who was in the room, not a recap bot clearing its throat. That constraint threw out a lot of clever instructions.",
    "Shorter prompts. Meaner examples. A rule that the note may leave things out. A summary that includes everything is not a summary. It is a transcript wearing a hat.",
    "The prompts got better when we started grading them the way we grade our own notes: would you send this to someone who missed the meeting.",
  ],
  "Introducing Recipes, in the all-new Granola Chat": [
    "A recipe is a habit you only have to write once. A sales debrief. A research sweep. A Monday digest. The question stays. The week changes.",
    "Instead of re-explaining what you want from the notes, you run the recipe on whatever the meetings just handed you. The shape of the answer is familiar. The facts are new.",
    "Recipes are how a team keeps a point of view. The model brings the context. The recipe brings the standard.",
  ],
  "When back becomes broken: how we found a tiny navigation bug": [
    "Back should mean back. For a while, on one path through the app, it meant sideways. Small enough that people blamed themselves and hit the button again.",
    "The bug lived in a piece of state that looked correct if you only checked the happy path. The wrong assumption was old. The screen that exposed it was new.",
    "The fix was small. The lesson was not: if a control has a meaning in the platform, do not borrow the word for a different trip.",
  ],
  "Granola 2.0: A second brain for your team": [
    "Your margin notes can stay personal. The decisions, the owners, the open loops can belong to the team without turning the page into a wiki nobody updates.",
    "2.0 is the notepad growing a shared memory. Not a second app. The same notes, readable by the people who need the outcome and not the whole hour.",
    "A second brain is a risky phrase. The modest version is enough: the team can find the sentence without asking the person who wrote it down.",
  ],
  "Start with a dot-plot": [
    "Before the dashboard, draw the dots. An average is a story someone already decided to tell. The plot is the pile of meetings before that story.",
    "Jim's argument is to look at the shape first, so a tidy number does not talk you out of what the week was actually doing. Clusters, gaps, the one point sitting alone.",
    "Once you can see the dots, the chart you build afterward has to answer to them. That is the whole method.",
  ],
  "Can Granola's AI meeting notes eat bigger apps for breakfast?": [
    "The piece asks whether a notepad can unsettle the big meeting suites. The bet is that people do not want another destination. They want the notes they were already going to take.",
    "Big apps win by being the place you have to go. A notepad wins by being the place you already are. Those are different kinds of appetite.",
    "Breakfast, if it happens, will not look like a feature checklist. It will look like a habit that stopped opening the other tab.",
  ],
  "Sam Stephenson – the journey of designing an AI startup": [
    "Designing an AI product that still looks like stationery is a product decision, not a coat of paint. The page should feel calm even when the model is not.",
    "Sam's through-line is taste as a constraint. What the product refuses to show matters as much as what it can generate. A note with too much on it is a note you will not read.",
    "The journey in the interview is less about a rebrand and more about keeping the tool on the side of the person in the meeting.",
  ],
  "Chris Pedregal — building Granola": [
    "Start from the meeting you wish you had handled better. Stay allergic to bots. Let the company remember without making everyone perform for a recorder.",
    "Building Granola the long way means the notepad comes first and the intelligence has to earn its place on the page. If it cannot help you leave with the decision, it does not ship.",
    "The conversation is about patience. A useful product is allowed to be quiet. The meetings are loud enough.",
  ],
  "Don't animate height!": [
    "Height animations lie to the layout engine and jank everything that has to reflow around them. The page stutters, and the thing you meant to reveal arrives late.",
    "If it has to move, move transform and opacity. Leave height alone unless you enjoy chasing bugs that only show up for one frame, on one machine, when the font is slightly different.",
    "The plea is practical. Users do not applaud a smooth height. They notice the hitch. Take the hitch away.",
  ],
  "How to build a truly useful AI product": [
    "Usefulness is a smaller claim than a demo. A demo can do a surprising thing once. A useful product finishes a job a person already has, in the place they already work.",
    "The correction loop matters more than the first draft. If you cannot fix the output with something as simple as a pen, the product is asking you to trust it more than you should.",
    "Start from the job. Then ask what the model is allowed to touch. The products that last are the ones a person can still steer.",
  ],
  "Our biggest stories and favorite things of 2024": [
    "Year-end lists are usually about launches. The more interesting entries are the tools people actually kept open in December, when the novelty had worn off.",
    "Granola shows up here as a habit story. Not the loudest announcement of the year. The tab that was still there when the year ended.",
    "Favorite things, at their best, are evidence. Someone used it on a Tuesday. That is the whole review.",
  ],
  "A recipe for everyday AI": [
    "Everyday is the hard adjective. A recipe that only works for a demo day is a poster. A recipe for Tuesday has one job, a surface you trust, and an output you can edit before anyone else sees it.",
    "The piece looks for AI that fits the hour you already have, not an hour you are supposed to invent. Open, do the thing, close.",
    "If it needs a tour, it is not everyday yet.",
  ],
  "Using AI to be more present and effective in your meetings": [
    "Looking up is the feature. When the page catches the thread, you can stay in the conversation instead of splitting yourself between listening and transcribing.",
    "Presence is not the opposite of a good note. It is what a good note is for. The record exists so your attention does not have to be the record.",
    "Effective, afterward, is the follow-up you send because you heard the sentence, not because you were busy writing it down.",
  ],
  "Granola raises $20M to build the AI notepad that makes you smarter": [
    "Twenty million to build the notepad, not a meeting robot. The distinction is the company. A robot attends. A notepad helps the person who was already going to be there.",
    "Smarter, in this sentence, means you leave with the decision and the owner, and you can find them on Friday. It does not mean the software had the idea.",
    "The round is a vote for that modesty. The margin of the page, taken seriously, is a product.",
  ],
  "VCs love using the AI meeting notepad Granola, so they gave it $20M": [
    "The unusual order is the story. Investors met the product as users, in their own meetings, and the check followed the notepad rather than the other way around.",
    "That is a specific kind of conviction. It is harder to be theoretical about a tool you used this morning. The note is either there or it is not.",
    "The piece is a funding story that keeps circling back to the habit. People kept it open. Then they funded it.",
  ],
  "Chris Pedregal: Revolutionizing meetings with AI": [
    "Fewer status theaters. More of the sentence you meant to write down. The portrait is less about disruption and more about giving the meeting back to the people in it.",
    "AI, in this telling, is a quiet second pen. It does not run the room. It keeps the thread so the humans can stay in the conversation.",
    "Revolution is a large word for a notepad. The smaller claim is the one that holds: the meeting gets calmer, and the note gets better.",
  ],
  "How to evolve a product": [
    "Evolution is a sequence of small kept promises. Change the page only when the last change has been lived in. A product grows by subtraction as often as by shipping.",
    "The field note is against the roadmap as a pile of intentions. Ship the thing, watch people use it, then earn the next change. Unlived features are just weight.",
    "If you cannot say what the last release taught you, you are not evolving. You are accumulating.",
  ],
  "The best AI note-taking tools for meetings": [
    "The useful split in a roundup like this is simple. Some tools record the room. Some tools help you write. They look similar in a list and feel different in a meeting.",
    "Granola sits on the writing side. The page is still yours. The model helps you leave with the decision instead of replacing the act of noting it.",
    "Best, in a list, usually means most features. In a meeting it means the one you forget is there until you need the note.",
  ],
  "How to Get the Best Out of Granola: Your Ultimate Guide": [
    "Title the note before you join. Scribble the question you came in with. Those two lines do more than any setting, because they tell the rest of the page what the meeting was for.",
    "Let the model fill in the middle, then delete anything you would not say out loud. A guide that skips the deleting step is only half a guide.",
    "The best outcome is a note you would have been proud to take by hand, written in less time than the hand would have needed.",
  ],
  "Introducing Granola: the AI-powered notepad for meetings": [
    "The first page. A notepad that listens with you and helps you leave with the decision, the owner, and the sentence you would have forgotten in the hallway.",
    "It is not a bot in the call and it is not a transcript you will never read. It is the margin you meant to keep, with a little help holding the thread.",
    "Everything later, the watch, the chat, the shared memory, starts from this idea: the meeting stays a meeting, and the note is waiting when it ends.",
  ],
};

function articleOf(post) {
  const more = EXTRAS[post.title] || [
    "The short note on the card is the part you would jot before the meeting ends. The rest is what you would write once you had a minute to yourself.",
    "Kept here, on the same paper, so the longer version still feels like something you took down rather than something a page designed for you.",
  ];
  return [post.body, ...more];
}

function openReader() {
  if (readerOpen || animating) return;
  const post = visible()[index];
  const card = topCard();
  const paper = card && card.querySelector(".paper");
  if (!post || !paper) return;
  readerOpen = true;
  const rect = paper.getBoundingClientRect();
  scrimEl = document.createElement("div");
  scrimEl.className = "scrim";
  document.body.appendChild(scrimEl);

  readerEl = document.createElement("div");
  readerEl.className = "reader";
  readerEl.style.left = `${rect.left}px`;
  readerEl.style.top = `${rect.top}px`;
  readerEl.style.width = `${rect.width}px`;
  readerEl.style.height = `${rect.height}px`;
  const parts = articleOf(post);
  const photo = tapedMarkup(post, "full");
  const paragraphs = photo
    ? `<p class="body">${parts[0]}</p><p class="gap" aria-hidden="true">&nbsp;</p>${photo}${parts.slice(1).map((paragraph) => `<p class="body">${paragraph}</p><p class="gap" aria-hidden="true">&nbsp;</p>`).join("")}`
    : parts.map((paragraph) => `<p class="body">${paragraph}</p><p class="gap" aria-hidden="true">&nbsp;</p>`).join("");
  readerEl.innerHTML = `
    <div class="paper">
      <button class="closex" type="button" aria-label="Close note">×</button>
      <span class="hole hole-a"></span>
      <span class="hole hole-b"></span>
      <span class="hole hole-c"></span>
      <span class="margin"></span>
      <div class="writing reader-scroll">
        <p class="kicker">${ICONS[post.category]} ${LABELS[post.category]}  ·  ${post.date}</p>
        <h2 class="title">${post.title}</h2>
        <p class="gap" aria-hidden="true">&nbsp;</p>
        ${paragraphs}
        <p class="gap" aria-hidden="true">&nbsp;</p>
        <p class="byline">${authorsOf(post)}</p>
      </div>
    </div>
  `;
  document.body.appendChild(readerEl);
  document.body.style.overflow = "hidden";
  document.querySelector(".stack-scene").classList.add("dimmed");
  readerEl.querySelector(".closex").addEventListener("click", closeReader);
  scrimEl.addEventListener("click", closeReader);

  const width = Math.min(720, window.innerWidth * 0.94);
  const height = Math.min(window.innerHeight * 0.9, 860);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (!readerEl) return;
      readerEl.style.left = `${(window.innerWidth - width) / 2}px`;
      readerEl.style.top = `${Math.max(18, (window.innerHeight - height) / 2)}px`;
      readerEl.style.width = `${width}px`;
      readerEl.style.height = `${height}px`;
      readerEl.classList.add("open");
      scrimEl.classList.add("on");
    });
  });
}

function closeReader() {
  if (!readerEl) return;
  const paper = topCard() && topCard().querySelector(".paper");
  const rect = paper
    ? paper.getBoundingClientRect()
    : { left: window.innerWidth / 2 - 40, top: window.innerHeight / 2 - 40, width: 80, height: 80 };
  readerEl.classList.remove("open");
  readerEl.style.left = `${rect.left}px`;
  readerEl.style.top = `${rect.top}px`;
  readerEl.style.width = `${rect.width}px`;
  readerEl.style.height = `${rect.height}px`;
  if (scrimEl) scrimEl.classList.remove("on");
  document.querySelector(".stack-scene").classList.remove("dimmed");
  document.body.style.overflow = "";
  const sheet = readerEl;
  const scrim = scrimEl;
  readerEl = null;
  scrimEl = null;
  window.setTimeout(() => {
    sheet.remove();
    if (scrim) scrim.remove();
    readerOpen = false;
  }, 620);
}

render();
