const personas = {
  hr: {
    id: "hr",
    label: "HR agent",
    title: "Agents for HR",
    body: "Empower HR to make better people decisions, accelerate hiring, and free up teams from routine work.",
    cta: "Explore HR Agents",
    starter: "Do we have any candidates that could fill the skills gap in human resources?",
    explore: "Which of these candidates could start within 30 days?",
    suggestions: ["Compare their skills", "Draft outreach notes", "Who can start in 30 days?"],
  },
  finance: {
    id: "finance",
    label: "Finance agent",
    title: "Agents for Finance",
    body: "Give finance teams the insights and agility to manage spend, control costs, and streamline processes with ease.",
    cta: "Explore Finance Agents",
    starter: "Run my Q3 tax analysis.",
    explore: "What should I fix before we close the quarter?",
    suggestions: ["Break down Product A", "Where is spend over budget?", "Draft the close note"],
  },
  it: {
    id: "it",
    label: "IT agent",
    title: "Agents for IT & Developers",
    body: "Help IT support employees faster, while giving developers a secure foundation for building and innovating on Workday.",
    cta: "Explore IT & Developer Agents",
    starter: "Which open requests are blocking the payroll release?",
    explore: "What is the risk if we ship without the payroll fix?",
    suggestions: ["Show the payroll blockers", "Who owns the failing feed?", "Draft a status update"],
  },
  everyone: {
    id: "everyone",
    label: "Employee agent",
    title: "Agents for Everyone",
    body: "Provide every employee personalized ways to ask for help, complete everyday tasks, and see what needs their attention.",
    cta: "Explore Agents",
    starter: "What needs my attention today?",
    explore: "Which of these can wait until tomorrow?",
    suggestions: ["Show my time off", "What's blocking my expenses?", "Remind me what can't wait"],
  },
};

const candidates = [
  { name: "Maya Chen", detail: "Engineering Manager · Driftline Systems" },
  { name: "Jordan Patel", detail: "Product Manager · Northstar Logic" },
  { name: "Kiara Holt", detail: "Senior Software Engineer · ByteHarbor Labs" },
  { name: "Marcus Williams", detail: "Senior Software Engineer · Quantum Forge" },
  { name: "Priya Nair", detail: "Site Reliability Manager · SignalNest" },
];

const log = document.getElementById("log");
const chips = document.getElementById("chips");
const promptInput = document.getElementById("prompt");
const sendButton = document.getElementById("send");
const announce = document.getElementById("announce");

let active = "hr";
let greeted = false;
let busy = false;
let generation = 0;
let queue = [];
let transcript = [];
let lastTopic = "greeting";

const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, motionOk ? ms : 0));

function norm(value) {
  return value.toLowerCase().replace(/[^a-z0-9\s$]/g, "").replace(/\s+/g, " ").trim();
}

function text(body, topic) {
  return { type: "text", kicker: "Sana", body, topic };
}

function leads(meta, intro, items, topic) {
  return { type: "leads", kicker: "Sana", meta, intro, items, topic };
}

function bullets(meta, intro, items, topic) {
  return { type: "bullets", kicker: "Sana", meta, intro, items, topic };
}

function note(meta, body, topic) {
  return { type: "note", kicker: "Sana", meta, body, topic };
}

function hrCandidates() {
  return leads(
    "5 leads · Senior people-systems roles",
    "These candidates match the human-resources systems gap on your open reqs.",
    candidates,
    "hr-candidates"
  );
}

function hrCompare() {
  return bullets(
    "Skills match · top three",
    "Here’s how the strongest three line up with the HR systems gap.",
    [
      "Maya Chen — Workday HCM, people systems, and a team of 12. Closest match.",
      "Priya Nair — platform reliability and security reviews. Strong operator, lighter on HR process.",
      "Jordan Patel — workforce planning and product discovery. Better if the role leans strategy.",
    ],
    "hr-compare"
  );
}

function hrStart() {
  return leads(
    "Start dates · next 60 days",
    "Two people can join inside a month. The others need a longer runway.",
    [
      { name: "Maya Chen", detail: "Available in 3 weeks · notice already given" },
      { name: "Priya Nair", detail: "Available in 30 days · open to a hybrid start" },
      { name: "Jordan Patel", detail: "45 days · wrapping a planning cycle" },
      { name: "Kiara Holt", detail: "60 days · relocation from Austin" },
      { name: "Marcus Williams", detail: "60 days · contract end date is firm" },
    ],
    "hr-start"
  );
}

function hrDraft() {
  return note(
    "Outreach draft · Maya Chen",
    "Hi Maya,\n\nYour work scaling people systems at Driftline lines up with the gap on our HR technology team. The role owns Workday HCM and the hiring workflow around it.\n\nWould you be open to a 25-minute conversation next week?\n\n— Talent team",
    "hr-draft"
  );
}

function financeTax() {
  return bullets(
    "Q3 tax analysis · ready before close",
    "Your Q3 tax package is ready. Two items should be cleared before you file.",
    [
      "Exempt goods of $332,000 were coded as taxable. No accrual is needed.",
      "Product A revenue is down $40,000, and the discount is already in the return.",
      "Product A revenue is still accrued. Remove that accrual, then file.",
    ],
    "finance-tax"
  );
}

function financeProduct() {
  return bullets(
    "Product A · Q3 variance",
    "The $40,000 gap is a coding issue, not a demand drop.",
    [
      "A volume discount was applied twice on invoice set A-441.",
      "The original accrual is still open, so the return and the ledger disagree.",
      "Reverse the accrual, keep the discount once, and the variance clears.",
    ],
    "finance-product"
  );
}

function financeSpend() {
  return bullets(
    "Spend vs plan · Q3",
    "Most of the plan is inside tolerance. One line is not.",
    [
      "Contractors are $128,000 over plan, mostly the HR systems program.",
      "Travel is $22,000 under plan.",
      "Software renewals land next month and are not in this close.",
    ],
    "finance-spend"
  );
}

function financeDraft() {
  return note(
    "Close note · Q3",
    "Q3 close note\n\nExempt goods of $332,000 were coded taxable. No accrual is needed.\nProduct A is down $40,000 after a discount that posted twice, and the accrual is still open.\n\nNext step: reverse the Product A accrual, then file.",
    "finance-draft"
  );
}

function itBlockers() {
  return leads(
    "3 blockers · Payroll release",
    "These open requests are still in the way of Friday’s payroll release.",
    [
      { name: "ACC-1842", detail: "Role grant · payroll admin, waiting on security" },
      { name: "ACC-1904", detail: "Integration · time-tracking feed failing since Monday" },
      { name: "ACC-1766", detail: "Change window · production deploy needs Friday approval" },
    ],
    "it-blockers"
  );
}

function itRisk() {
  return bullets(
    "Ship risk · payroll",
    "Shipping without the fix puts Friday’s run on a manual path.",
    [
      "Payroll for 1,840 employees can miss the Friday file.",
      "Tax withholdings would need a same-day manual submission.",
      "The time-tracking feed, ACC-1904, is the item that actually blocks the run.",
    ],
    "it-risk"
  );
}

function itOwner() {
  return text(
    "ACC-1904 is owned by Platform Integrations. The time-tracking feed last succeeded Monday at 6:12 a.m. Priya Shah is the on-call, and security still owes the grant on ACC-1842.",
    "it-owner"
  );
}

function itDraft() {
  return note(
    "Status update · payroll release",
    "Payroll release is blocked by three items.\n\nACC-1904, the time-tracking feed, has been failing since Monday.\nACC-1842 still needs a security grant.\nACC-1766 needs a Friday change window.\n\nWe should not ship until the feed is healthy.",
    "it-draft"
  );
}

function everyoneToday() {
  return bullets(
    "Today · 4 things for you",
    "Here’s what actually needs you before you sign off.",
    [
      "Approve Maya Chen’s offer before 4:00 p.m. Comp is already inside policy.",
      "Your PTO for next Friday is still pending with Lila Ortiz.",
      "Expense report EX-2201 is missing a receipt over $75.",
      "Benefits enrollment closes in 6 days. Medical is the only plan unfinished.",
    ],
    "everyone-today"
  );
}

function everyonePto() {
  return text(
    "You have 11.5 days left this year. Next Friday is requested and still sitting with Lila Ortiz. Monday is clear, and no one else on your team is out that Friday.",
    "everyone-pto"
  );
}

function everyoneExpense() {
  return text(
    "EX-2201 is the only open report. A dinner for $86 is missing its receipt, so the report can’t be paid. Everything else this month is already approved.",
    "everyone-expense"
  );
}

function everyoneWait() {
  return bullets(
    "What can wait",
    "Two of today’s items are fine until tomorrow. Two are not.",
    [
      "Can wait: the expense receipt, and reading the benefits plan details.",
      "Cannot wait: Maya Chen’s offer expires at 4:00 p.m.",
      "Cannot wait: benefits enrollment closes in 6 days, and medical is unfinished.",
    ],
    "everyone-wait"
  );
}

const byTopic = {
  "hr-candidates": hrCompare,
  "hr-compare": hrStart,
  "hr-start": hrDraft,
  "hr-draft": hrCandidates,
  "finance-tax": financeProduct,
  "finance-product": financeSpend,
  "finance-spend": financeDraft,
  "finance-draft": financeTax,
  "it-blockers": itRisk,
  "it-risk": itOwner,
  "it-owner": itDraft,
  "it-draft": itBlockers,
  "everyone-today": everyoneWait,
  "everyone-pto": everyoneToday,
  "everyone-expense": everyoneToday,
  "everyone-wait": everyoneToday,
};

const exact = new Map();

function bind(prompt, builder) {
  exact.set(norm(prompt), builder);
}

Object.values(personas).forEach((persona) => {
  const bank = {
    hr: { starter: hrCandidates, explore: hrStart },
    finance: { starter: financeTax, explore: financeSpend },
    it: { starter: itBlockers, explore: itRisk },
    everyone: { starter: everyoneToday, explore: everyoneWait },
  }[persona.id];
  bind(persona.starter, bank.starter);
  bind(persona.explore, bank.explore);
});

bind("Compare their skills", hrCompare);
bind("Draft outreach notes", hrDraft);
bind("Who can start in 30 days?", hrStart);
bind("Break down Product A", financeProduct);
bind("Where is spend over budget?", financeSpend);
bind("Draft the close note", financeDraft);
bind("Show the payroll blockers", itBlockers);
bind("Who owns the failing feed?", itOwner);
bind("Draft a status update", itDraft);
bind("Show my time off", everyonePto);
bind("What's blocking my expenses?", everyoneExpense);
bind("Remind me what can't wait", everyoneToday);

function fallback(personaId) {
  const lines = {
    hr: "I can pull candidates, compare skills, draft outreach, or check who can start soon. Ask in plain language, or use a suggestion below.",
    finance: "I can rerun the quarter, explain a variance, flag spend, or draft a close note. Ask in plain language, or use a suggestion below.",
    it: "I can list release blockers, name an owner, spell out the risk, or draft a status update. Ask in plain language, or use a suggestion below.",
    everyone: "I can show what is due today, check time off, look at an expense, or tell you what can wait. Ask in plain language, or use a suggestion below.",
  };
  return text(lines[personaId] || lines.hr, "fallback");
}

function draftFor(personaId) {
  if (personaId === "finance") return financeDraft();
  if (personaId === "it") return itDraft();
  if (personaId === "everyone") {
    return note(
      "Reminder · before you sign off",
      "Before you sign off:\n\nApprove Maya Chen’s offer by 4:00 p.m.\nYour Friday PTO is still with Lila Ortiz.\nExpense EX-2201 needs a receipt.\nBenefits enrollment closes in 6 days.",
      "everyone-today"
    );
  }
  return hrDraft();
}

function answer(raw) {
  const q = norm(raw);
  if (exact.has(q)) return exact.get(q)();

  if (/^(thanks|thank you|thx)\b/.test(q)) {
    return text("Anytime. Ask a follow-up, or switch teams with the tabs above.", lastTopic);
  }
  if (/^(hi|hello|hey|hiya)\b/.test(q)) {
    return text("Hi. Tap HR, Finance, IT & Developers, or Everyone and I’ll run a prompt. Or just ask in your own words.", "greeting");
  }
  if (/tell me more|more detail|go deeper|expand on|say more/.test(q)) {
    const next = byTopic[lastTopic];
    return next ? next() : fallback(active);
  }
  if (/draft|write (an |a )?(email|note|message)|outreach|status update|close note/.test(q)) {
    return draftFor(active);
  }
  if (/compare|skills/.test(q)) return hrCompare();
  if (/30 days|start date|who can start|available/.test(q)) return hrStart();
  if (/maya/.test(q)) {
    return text(
      "Maya Chen is the closest match. She manages people systems at Driftline, has Workday HCM in production, and can start in three weeks. Comp for the offer already sits inside policy.",
      "hr-candidates"
    );
  }
  if (/candidate|skills gap|hiring|recruit|requisition|open role/.test(q)) return hrCandidates();
  if (/product a|discount|40000|40,000/.test(q)) return financeProduct();
  if (/spend|budget|contractor|over plan/.test(q)) return financeSpend();
  if (/tax|q3|quarter|accrual|close the|close note/.test(q)) return financeTax();
  if (/risk|if we ship|without the fix/.test(q)) return itRisk();
  if (/who owns|failing feed|on-call|priya shah/.test(q)) return itOwner();
  if (/payroll|blocker|ticket|access request|release/.test(q)) return itBlockers();
  if (/time off|pto|vacation|out on friday/.test(q)) return everyonePto();
  if (/expense|receipt|ex-2201|reimburse/.test(q)) return everyoneExpense();
  if (/can wait|until tomorrow|priorit/.test(q)) return everyoneWait();
  if (/benefit|enrollment|sign off|attention|my day|today|can't wait|cannot wait/.test(q)) {
    return everyoneToday();
  }
  if (/what can you do|help|how does this work/.test(q)) return fallback(active);
  return fallback(active);
}

function greetingMessage() {
  return text(
    "I’m Sana. Choose HR, Finance, IT & Developers, or Everyone and I’ll send a prompt, so you can see how an agent gets to work. After that, ask me anything.",
    "greeting"
  );
}

function scrollLog() {
  const last = log.lastElementChild;
  if (!last) return;
  const anchor = last.previousElementSibling || last;
  const top = anchor.getBoundingClientRect().top - log.getBoundingClientRect().top + log.scrollTop;
  log.scrollTop = Math.max(0, top - 8);
}

function clearHint() {
  const hint = document.getElementById("hint");
  if (hint) hint.remove();
}

function appendUser(value) {
  clearHint();
  const bubble = document.createElement("p");
  bubble.className = "bubble";
  bubble.textContent = value;
  log.appendChild(bubble);
  transcript.push({ role: "user", text: value });
  scrollLog();
}

function spark() {
  const wrap = document.createElement("span");
  wrap.className = "spark";
  wrap.innerHTML = '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 .4l1.1 4.7 4.7 1.1-4.7 1.2L8 12.1 6.9 7.4 2.2 6.2l4.7-1.1z"/></svg>';
  return wrap;
}

function kickerRow(meta) {
  const row = document.createElement("div");
  row.className = "kicker";
  row.appendChild(spark());
  const name = document.createElement("span");
  name.textContent = "Sana";
  row.appendChild(name);
  if (meta) {
    const em = document.createElement("em");
    em.textContent = meta;
    row.appendChild(em);
  }
  return row;
}

function fillCard(container, message) {
  container.replaceChildren();
  container.appendChild(kickerRow(message.meta || ""));
  if (message.type === "text") {
    const p = document.createElement("p");
    p.className = "intro";
    p.textContent = message.body;
    container.appendChild(p);
    return;
  }
  if (message.intro) {
    const p = document.createElement("p");
    p.className = "intro";
    p.textContent = message.intro;
    container.appendChild(p);
  }
  if (message.type === "leads") {
    const list = document.createElement("ul");
    list.className = "leads";
    message.items.forEach((item) => {
      const li = document.createElement("li");
      const strong = document.createElement("strong");
      strong.textContent = item.name;
      const span = document.createElement("span");
      span.textContent = item.detail;
      li.append(strong, span);
      list.appendChild(li);
    });
    container.appendChild(list);
    return;
  }
  if (message.type === "bullets") {
    const list = document.createElement("ul");
    list.className = "bullets";
    message.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
    container.appendChild(list);
    return;
  }
  if (message.type === "note") {
    const p = document.createElement("p");
    p.className = "note";
    p.textContent = message.body;
    container.appendChild(p);
  }
}

function plain(message) {
  if (message.type === "text" || message.type === "note") return message.body;
  const lines = message.type === "leads"
    ? message.items.map((item) => item.name)
    : message.items;
  return [message.intro, ...lines].filter(Boolean).join(" ");
}

function appendBot(message) {
  clearHint();
  const card = document.createElement("div");
  card.className = "card";
  fillCard(card, message);
  log.appendChild(card);
  transcript.push({ role: "assistant", message });
  if (message.topic) lastTopic = message.topic;
  announce.textContent = plain(message);
  scrollLog();
}

function showTyping() {
  hideTyping();
  const row = document.createElement("div");
  row.className = "typing";
  row.id = "typing";
  row.setAttribute("aria-hidden", "true");
  row.innerHTML = "<span></span><span></span><span></span>";
  log.appendChild(row);
  scrollLog();
}

function hideTyping() {
  document.getElementById("typing")?.remove();
}

function renderChips(persona) {
  chips.replaceChildren();
  persona.suggestions.forEach((label) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", () => enqueueUser(label));
    chips.appendChild(button);
  });
}

function paintPersona(id) {
  const persona = personas[id];
  active = id;
  document.querySelectorAll("[data-persona]").forEach((tab) => {
    const on = tab.dataset.persona === id;
    tab.setAttribute("aria-selected", on ? "true" : "false");
  });
  document.getElementById("agent-label").textContent = persona.label;
  document.getElementById("agent-blurb").textContent = persona.body;
  renderChips(persona);
}

function selectPersona(id, sendPrompt) {
  active = id;
  paintPersona(id);
  if (sendPrompt) {
    greeted = true;
    document.getElementById("chat").scrollIntoView({
      behavior: motionOk ? "smooth" : "auto",
      block: "nearest",
    });
    enqueueUser(personas[id].starter);
  }
}

async function pump() {
  if (busy) return;
  const job = queue.shift();
  if (!job) return;
  const gen = generation;
  busy = true;
  if (job.kind === "user") appendUser(job.text);
  showTyping();
  const message = job.kind === "user" ? answer(job.text) : job.message;
  const pause = job.kind === "user" ? 850 : 650;
  await wait(pause);
  if (gen !== generation) return;
  hideTyping();
  appendBot(message);
  busy = false;
  pump();
}

function enqueueUser(value) {
  const textValue = value.trim();
  if (!textValue) return;
  queue.push({ kind: "user", text: textValue });
  pump();
}

function enqueueBot(message) {
  queue.push({ kind: "bot", message });
  pump();
}

let lastSentAt = 0;

function sendCurrent() {
  const value = promptInput.value;
  if (!value.trim()) return;
  const now = Date.now();
  if (now - lastSentAt < 400) return;
  lastSentAt = now;
  greeted = true;
  promptInput.value = "";
  syncSend();
  enqueueUser(value);
}

function syncSend() {
  sendButton.classList.toggle("is-empty", promptInput.value.trim().length === 0);
}

document.querySelectorAll("[data-persona]").forEach((tab, index, tabs) => {
  tab.addEventListener("click", () => selectPersona(tab.dataset.persona, true));
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next = event.key === "ArrowRight"
      ? (index + 1) % tabs.length
      : (index - 1 + tabs.length) % tabs.length;
    tabs[next].focus();
  });
});

document.getElementById("composer").addEventListener("submit", (event) => {
  event.preventDefault();
  sendCurrent();
});

promptInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || event.isComposing) return;
  event.preventDefault();
  sendCurrent();
});

sendButton.addEventListener("click", (event) => {
  event.preventDefault();
  sendCurrent();
});

promptInput.addEventListener("input", syncSend);

document.getElementById("reset").addEventListener("click", () => {
  generation += 1;
  busy = false;
  queue = [];
  transcript = [];
  lastTopic = "greeting";
  log.replaceChildren();
  hideTyping();
  greeted = true;
  enqueueBot(greetingMessage());
  promptInput.focus();
});

const section = document.getElementById("agents");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting || entry.intersectionRatio < 0.22) return;
    section.classList.add("is-live");
    if (greeted) return;
    greeted = true;
    enqueueBot(greetingMessage());
  });
}, { threshold: [0.22, 0.5] });

observer.observe(section);

paintPersona("hr");
syncSend();
