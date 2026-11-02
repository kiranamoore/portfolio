const POSTS = [
  {
    category: "blog",
    title: "How sales teams use Granola",
    authors: ["Bardia Shahali", "Camilla Bier"],
    date: "August 17",
    body: "The best sales notes are not a transcript. Reps jot the objection, the next step, and the name that actually decides. Granola keeps that scratch pad in the meeting, then turns it into a follow-up you would send yourself.",
  },
  {
    category: "announcements",
    title: "Granola for Apple Watch",
    authors: ["Jack"],
    date: "July 28",
    body: "A meeting on your wrist. Peek the brief before you walk in, catch the last decision on the way out, and leave the laptop in the bag. Same notes, smaller glass, still yours.",
  },
  {
    category: "announcements",
    title: "Granola for Android is here!",
    authors: ["Jack"],
    date: "July 1",
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

function topTilt() {
  const tilts = [-0.6, 0.45, -0.25, 0.7, -0.9];
  return tilts[Math.abs(index) % tilts.length];
}

function noteMarkup(post, depth) {
  const hidden = depth === 0 ? "false" : "true";
  return `
    <article class="note" data-depth="${depth}" aria-hidden="${hidden}" style="z-index:${10 - depth}; transform:${rest(depth, depth === 0 ? topTilt() : 0)}">
      <div class="paper">
        <span class="hole hole-a"></span>
        <span class="hole hole-b"></span>
        <span class="hole hole-c"></span>
        <span class="margin"></span>
        <div class="writing">
          <p class="kicker">${ICONS[post.category]} ${LABELS[post.category]}  ·  ${post.date}</p>
          <h2 class="title">${post.title}</h2>
          <p class="gap" aria-hidden="true">&nbsp;</p>
          <p class="body">${post.body}</p>
          <p class="gap" aria-hidden="true">&nbsp;</p>
          <p class="byline">${authorsOf(post)}</p>
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
    if (depth === 0) return;
    const from = depth;
    const to = depth - 1;
    const tilt = to === 0 ? topTilt() : 0;
    const a = rest(from).match(/-?\d+\.?\d*/g).map(Number);
    const b = rest(to, tilt).match(/-?\d+\.?\d*/g).map(Number);
    const mix = a.map((value, i) => value + (b[i] - value) * progress);
    card.style.transform = `translate(${mix[0]}px, ${mix[1]}px) rotate(${mix[2]}deg) scale(${mix[3]})`;
  });
}

function applyDrag(x, y) {
  const top = topCard();
  if (!top) return;
  const rot = topTilt() + x / 18;
  top.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg)`;
  settleBacks(Math.min(1, Math.abs(x) / 180));
}

function finish(dir) {
  const items = visible();
  if (!items.length) return;
  index = (index + dir + items.length) % items.length;
  animating = false;
  render();
  const top = topCard();
  if (!top) return;
  const sign = dir > 0 ? -1 : 1;
  top.style.transition = "none";
  top.style.transform = `translate(${sign * -40}px, 10px) rotate(${sign * -4}deg)`;
  requestAnimationFrame(() => {
    top.style.transition = "transform .45s cubic-bezier(.18,.84,.24,1)";
    top.style.transform = rest(0, topTilt());
  });
}

function fly(sign) {
  if (animating) return;
  const top = topCard();
  if (!top) return;
  animating = true;
  const gen = ++generation;
  const dir = sign < 0 ? 1 : -1;
  top.style.transition = "transform .42s cubic-bezier(.2,.75,.2,1)";
  top.style.transform = `translate(${sign * 880}px, 48px) rotate(${sign * 18}deg)`;
  stackEl.querySelectorAll(".note").forEach((card) => {
    const depth = Number(card.dataset.depth);
    if (depth === 0) return;
    card.style.transition = "transform .42s cubic-bezier(.18,.84,.24,1)";
    card.style.transform = rest(depth - 1, depth - 1 === 0 ? topTilt() : 0);
  });
  window.setTimeout(() => {
    if (gen !== generation) return;
    finish(dir);
  }, 400);
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
  const { x, vx } = drag;
  drag = null;
  window.removeEventListener("pointermove", track);
  window.removeEventListener("pointerup", release);
  window.removeEventListener("pointercancel", release);
  const throwLeft = x < -110 || vx < -0.55;
  const throwRight = x > 110 || vx > 0.55;
  if (throwLeft) fly(-1);
  else if (throwRight) fly(1);
  else {
    const top = topCard();
    if (!top) return;
    top.style.transition = "transform .45s cubic-bezier(.18,.84,.24,1)";
    top.style.transform = rest(0, topTilt());
    stackEl.querySelectorAll(".note").forEach((card) => {
      const depth = Number(card.dataset.depth);
      card.style.transition = "transform .45s cubic-bezier(.18,.84,.24,1)";
      if (depth === 0) return;
      card.style.transform = rest(depth);
    });
  }
}

stackEl.addEventListener("pointerdown", (event) => {
  if (animating || event.button !== 0) return;
  const top = topCard();
  if (!top || !top.contains(event.target)) return;
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

prevBtn.addEventListener("click", () => fly(1));
nextBtn.addEventListener("click", () => fly(-1));

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    if (chip.dataset.filter === filter) return;
    filter = chip.dataset.filter;
    index = 0;
    animating = false;
    generation += 1;
    drag = null;
    document.querySelectorAll(".chip").forEach((other) => {
      other.setAttribute("aria-selected", other === chip ? "true" : "false");
    });
    render();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") fly(-1);
  if (event.key === "ArrowLeft") fly(1);
});

render();
