/* =========================================================
   Gordon Camenzuli – az oldal működése
   Az elérhetőségek itt (SITE) és az index.html-ben is szerepelnek.
   ========================================================= */
"use strict";

const SITE = {
  phone: "+36703646998",
  phoneShown: "+36 70 364 6998",
  email: "gordon.masszazs@gmail.com",
  address: "1052 Budapest, Sütő utca 2., 1. emelet 1.",
  mapQuery: "Budapest, Sütő utca 2",
};

const TREATS = {
  suggest: { hu: "Gordon javasoljon", en: "Gordon's recommendation" },
  holistic: { hu: "Holisztikus masszázs", en: "Holistic massage" },
  remedial: { hu: "Gyógyító (remedial) masszázs", en: "Remedial massage" },
  deep: { hu: "Mélyszöveti masszázs", en: "Deep tissue massage" },
  swedish: { hu: "Svédmasszázs", en: "Swedish massage" },
  lomi: { hu: "Lomi-Lomi masszázs", en: "Lomi-Lomi massage" },
  somatic: { hu: "Szomatikus testmunka", en: "Somatic bodywork" },
  thai: { hu: "Thai masszázs", en: "Thai massage" },
  sport: { hu: "Sport- és táncmasszázs", en: "Sport & dance massage" },
};

const WHEN = {
  "wd-am": { hu: "hétköznap délelőtt", en: "on weekday mornings" },
  "wd-pm": { hu: "hétköznap délután", en: "on weekday afternoons" },
  "wd-ev": { hu: "hétköznap este", en: "on weekday evenings" },
  we: { hu: "hétvégén", en: "at the weekend" },
};

const NEEDS = {
  stress: { hu: ", ha nem tud kikapcsolni", en: "When you can't switch off" },
  pain: { hu: " hát- és nyakfájásra", en: "For back and neck pain" },
  sport: { hu: " sportolóknak, táncosoknak, zenészeknek", en: "For athletes, dancers and musicians" },
  relax: { hu: " tiszta pihenésre", en: "For pure rest" },
  emotion: { hu: " érzelmi feszültségre", en: "For emotional tension" },
  mobility: { hu: " merevségre, mozgékonyságért", en: "For stiffness and mobility" },
};

/* ---------- angol szövegek (a magyar az index.html-ben van) ---------- */
const EN = {
  skip: "Skip to content",
  "nav.approach": "Approach", "nav.treatments": "Treatments", "nav.session": "A session", "nav.reviews": "Reviews", "nav.faq": "FAQ", "nav.book": "Book a session",
  menu: "Menu",
  "hero.eyebrow": "Holistic massage therapist · Budapest",
  "hero.title": "Breathe.<em>Leave the rest to me.</em>",
  "hero.lead": "Holistic massage in the heart of Budapest, right by Deák tér. Eight techniques, one philosophy: releasing the body layer by layer, in time with the breath – until not only the pain lets go, but the tension behind it too.",
  "hero.book": "Book a session",
  "breath.in": "Breathe in", "breath.out": "Breathe out",
  "breath.hint": "Breathe with the circle: four counts in, six out.",
  "facts.where.t": "Location", "facts.where.d": "City centre · Deák tér",
  "facts.tech.t": "Techniques", "facts.tech.d": "8 massage styles",
  "facts.rec.t": "Recommended", "facts.rec.d": "100% · Facebook",
  "facts.lang.t": "Language",
  "approach.eyebrow": "Approach",
  "approach.title": "The body remembers <em>in layers.</em>",
  "approach.lead": "Behind a stiff shoulder there is often a hard week; behind an aching lower back, an old injury – or a breath held too long. That is why Gordon doesn't treat a single muscle but the whole person: he works from the surface towards the deeper layers, follows your breathing, and adapts his techniques to how you are on the day.",
  "p1.t": "Touch", "p1.d": "Precise, confident hands that find even the deepest tension – and know when to ease off.",
  "p2.t": "Breath", "p2.d": "Gordon guides your breathing throughout, so your muscles stop resisting and start cooperating.",
  "p3.t": "Presence", "p3.d": "A calm, discreet, non-judgemental space where you can safely let go of whatever you carry.",
  "gordon.eyebrow": "The therapist",
  "gordon.d": "A Certified Massage Therapist who blends many traditions – from classic Swedish and deep tissue work through Hawaiian Lomi-Lomi and Thai massage to somatic bodywork. His clients include musicians, dancers, athletes and travellers from all over the world – and many people who simply carry too much.",
  "tr.eyebrow": "Treatments",
  "tr.title": "Eight techniques, <em>one pair of hands.</em>",
  "tr.intro": "Several techniques can be combined in one session. Not sure which suits you? Tell us what your body is asking for today – or leave the choice to Gordon.",
  "finder.q": "What is your body asking for today?",
  "need.stress": "I can't switch off", "need.pain": "My back or neck hurts", "need.sport": "I train, dance or play music",
  "need.relax": "I just want to rest", "need.emotion": "Emotional tension", "need.mobility": "I feel stiff",
  "t1.sub": "Whole-person massage", "t1.d": "Body, breath and emotions as one. The backbone of every session: Gordon works layer by layer and adapts his techniques to what your body shows him along the way.", "t1.for": "Stress · full reset",
  "t2.sub": "Therapeutic massage", "t2.d": "Focused work on a specific complaint: a stiff neck, sore shoulder, lower back, poor posture. It looks for the source of the pain – which isn't always where it hurts.", "t2.for": "Pain · posture",
  "t3.sub": "Deep tissue massage", "t3.d": "Slow, deep pressure on the lower layers of muscle and fascia. For chronic, deeply ingrained tension – patiently, in the rhythm of your breath.", "t3.for": "Chronic tension",
  "t4.sub": "Classic massage", "t4.d": "The classic: long gliding and kneading strokes that boost circulation and calm the nervous system. A perfect first session.", "t4.for": "Rest · circulation",
  "t5.sub": "Hawaiian massage", "t5.d": "Long, wave-like forearm strokes flowing across the whole body without a break. Rhythmic, almost meditative – time slows down.", "t5.for": "Letting go · flow",
  "t6.sub": "Somatic bodywork", "t6.d": "Slow, attentive touch, holds and conscious breathing. It helps stress and emotional tension stored in the body to surface and leave – safely.", "t6.for": "Emotional release",
  "t7.sub": "Thai massage", "t7.d": "Passive stretches and rhythmic pressure along the energy lines. Like yoga – except you don't have to do anything. For mobility and freshness.", "t7.for": "Mobility · energy",
  "t8.sub": "Sport & dance massage", "t8.d": "For athletes, dancers and musicians: preparation, recovery and targeted work on overloaded muscles – shoulders, forearms, hips, calves.", "t8.for": "Recovery · performance",
  "press.adaptive": "Pressure: adaptive", "press.1": "Pressure: gentle", "press.2": "Pressure: medium", "press.4": "Pressure: firm", "press.5": "Pressure: deep",
  "tr.note": "The pressure scale is a guide only: every treatment can be adjusted to your preference. For prices and session lengths, please call or email.",
  "se.eyebrow": "A session",
  "se.title": "Time that is <em>yours alone.</em>",
  "s1.t": "Conversation", "s1.d": "A short talk: where it hurts, what's been weighing on you, any injuries, and what you'd like from the session.",
  "s2.t": "Arriving", "s2.d": "A few conscious breaths to move your attention from your head into your body – from here on, there's nothing you need to do.",
  "s3.t": "Layer by layer", "s3.d": "From the surface to the depths. Gordon blends techniques and keeps adapting to how your body responds.",
  "s4.t": "Returning", "s4.d": "No rush at the end. You get time to come back to yourself and, if you like, a few tips for the days ahead.",
  "space.eyebrow": "The space", "space.t": "Bright, spacious, quiet.",
  "space.d": "A clean, light-filled private apartment in the heart of the city, a few steps from Deák tér. Soft meditation music, quality massage and essential oils. Not a salon, not a conveyor belt: always just one guest at a time.",
  "who.eyebrow": "Especially for",
  "who.1": "Musicians", "who.2": "Dancers", "who.3": "Athletes", "who.4": "Desk workers", "who.5": "Travellers", "who.6": "Anyone carrying too much",
  "rv.eyebrow": "Reviews",
  "rv.title": "What guests <em>say.</em>",
  q1: "More than a simple massage therapist – more like a healer who knows exactly what your body and soul need.",
  q2: "An unusual sense for locating and loosening even the deepest tensions. Confident, calm and discreet.",
  q3: "I've travelled the world and received countless massages – nothing comes close to this calibre.",
  q4: "A holistic approach to the body, working in many layers. For musicians, dancers – anyone who lives through their body – he is the right therapist.",
  q5: "I felt safe and truly seen. The pain disappeared; I left lighter and deeply relaxed.",
  "rv.prev": "Previous review", "rv.next": "Next review",
  "rv.stat": "recommend on Facebook<br>(based on 11 reviews)",
  "rv.note": "Reviews are taken from Tripadvisor, Google and Facebook, shortened.",
  "rv.ta": "Tripadvisor reviews ↗", "rv.fb": "Facebook recommendations ↗",
  "faq.eyebrow": "Frequently asked",
  "faq.title": "Before <em>you come.</em>",
  "f1.q": "Which massage should I choose?",
  "f1.a": "You don't have to decide in advance. Just tell Gordon what's bothering you – he'll assess it at the start of the session and adapt the techniques. Many sessions combine several.",
  "f2.q": "How long does it take, and what does it cost?",
  "f2.a": "Length and price depend on the technique and your needs. For current prices and free slots, please call, text or email.",
  "f3.q": "Which language is the session in?",
  "f3.a": "English and Hungarian – many guests are visitors or part of Budapest's international community.",
  "f4.q": "How should I prepare?",
  "f4.a": "Avoid a heavy meal right before, and arrive a few minutes early so you don't start in a rush. If you have an injury, recent surgery, a chronic condition, or are pregnant, please mention it in advance.",
  "f5.q": "When is massage not recommended?",
  "f5.a": "With a fever, contagious illness, fresh injury, inflammation, thrombosis or pain of unknown origin, please consult your doctor first. Massage does not replace medical treatment.",
  "f6.q": "Where exactly is it, and how do I get there?",
  "f6.a": "Sütő utca 2, 1st floor, flat 1, 1052 Budapest – right by Deák Ferenc tér. One or two minutes on foot from the Deák Ferenc tér metro stop (M1, M2, M3).",
  "bk.eyebrow": "Booking & contact",
  "bk.title": "Book a <em>session.</em>",
  "bk.intro": "Sessions by appointment. Call, text or email – or put your request together below and the button will write the message for you.",
  "c.addr": "Address", "c.near": "Deák Ferenc tér · M1 · M2 · M3", "c.hours": "Hours", "c.hours.d": "By appointment", "c.lang": "Language",
  "c.map": "Show map", "c.map.note": "Loads from Google when clicked",
  "cp.title": "Put your request together",
  "cp.what": "Which treatment would you like?", "cp.suggest": "Gordon's recommendation",
  "cp.when": "When would suit you? <small>(choose any)</small>",
  "cp.wdam": "Weekday mornings", "cp.wdpm": "Weekday afternoons", "cp.wdev": "Weekday evenings", "cp.we": "Weekends",
  "cp.name": "Your name", "cp.note": "Note <small>(e.g. where it hurts, any injuries)</small>",
  "cp.preview": "Your message", "cp.mail": "Write email", "cp.sms": "Send text",
  "cp.privacy": "This site collects and sends no data: the button opens a pre-written message in your own email or messaging app, which you send yourself.",
  "foot.role": "· Holistic massage therapist", "foot.up": "Back to top ↑",
  "dock.call": "Call", "dock.book": "Book a session",
};

const TITLE = {
  hu: "Gordon Camenzuli – Holisztikus masszázsterapeuta, Budapest",
  en: "Gordon Camenzuli – Holistic Massage Therapist, Budapest",
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

function store(key, val) {
  try { if (val === undefined) return localStorage.getItem(key); localStorage.setItem(key, val); } catch { return null; }
}

/* =========================================================
   Nyelv (HU / EN)
   ========================================================= */
const HU = {};
$$("[data-i18n]").forEach((el) => { HU[el.dataset.i18n] = el.innerHTML; });
$$("[data-i18n-attr]").forEach((el) => {
  el.dataset.i18nAttr.split(",").forEach((pair) => {
    const [attr, key] = pair.split(":");
    HU[key] = el.getAttribute(attr);
  });
});
HU["breath.out"] = "Kilégzés";

let lang = "hu";
const t = (key) => (lang === "en" && EN[key] !== undefined ? EN[key] : HU[key]);

function setLang(next) {
  lang = next === "en" ? "en" : "hu";
  document.documentElement.lang = lang;
  document.title = TITLE[lang];
  $$("[data-i18n]").forEach((el) => { const v = t(el.dataset.i18n); if (v !== undefined) el.innerHTML = v; });
  $$("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(",").forEach((pair) => { const [attr, key] = pair.split(":"); el.setAttribute(attr, t(key)); });
  });
  $$(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  breathWord(breathPhase, true);
  renderFinder();
  renderComposer();
}

$$(".lang button").forEach((b) => b.addEventListener("click", () => { store("lang", b.dataset.lang); setLang(b.dataset.lang); }));

/* =========================================================
   Elérhetőségek egy helyről
   ========================================================= */
$$(".js-tel").forEach((a) => (a.href = `tel:${SITE.phone}`));
$$(".js-phone").forEach((s) => (s.textContent = SITE.phoneShown));
$$(".js-mail").forEach((a) => { a.href = `mailto:${SITE.email}`; a.textContent = SITE.email; });
$$(".js-addr").forEach((s) => (s.textContent = SITE.address));
$$(".js-year").forEach((s) => (s.textContent = new Date().getFullYear()));

/* =========================================================
   Fejléc, menü, aktív menüpont, telefonos gyorssáv
   ========================================================= */
const header = $(".top");
const burger = $(".burger");
const nav = $("#nav");
const dock = $(".dock");
const hero = $(".hero");

function closeMenu() {
  burger.setAttribute("aria-expanded", "false");
  nav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}
burger.addEventListener("click", () => {
  const open = burger.getAttribute("aria-expanded") !== "true";
  burger.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
});
$$("a", nav).forEach((a) => a.addEventListener("click", closeMenu));
addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });
matchMedia("(min-width: 961px)").addEventListener("change", (e) => { if (e.matches) closeMenu(); });

let scrolled = false;
addEventListener("scroll", () => {
  const s = scrollY > 8;
  if (s !== scrolled) { scrolled = s; header.classList.toggle("is-scrolled", s); }
}, { passive: true });

if ("IntersectionObserver" in window) {
  new IntersectionObserver(([e]) => dock.classList.toggle("show", !e.isIntersecting), { rootMargin: "-40% 0px 0px 0px" }).observe(hero);

  const links = new Map($$('.nav a[href^="#"]:not(.nav__cta)').map((a) => [a.getAttribute("href").slice(1), a]));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const a = links.get(e.target.id);
      if (a && e.isIntersecting) { links.forEach((l) => l.classList.remove("is-active")); a.classList.add("is-active"); }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  links.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });

  const rev = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); rev.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -8% 0px" });
  $$(".reveal").forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 70}ms`; rev.observe(el); });
} else {
  $$(".reveal").forEach((el) => el.classList.add("in"));
  dock.classList.add("show");
}

/* =========================================================
   Lélegző gömb: 4 mp belégzés, 6 mp kilégzés
   ========================================================= */
const breath = $(".breath");
const word = $(".js-breath-word");
const IN = 4000, OUT = 6000, MIN = .74, MAX = 1;
let breathPhase = "in";
let breathRun = false;
let t0 = 0;

function breathWord(phase, now) {
  if (!word) return;
  const key = phase === "in" ? "breath.in" : "breath.out";
  word.dataset.i18n = key;
  if (now || reduced) { word.innerHTML = t(key); return; }
  word.classList.add("fade");
  setTimeout(() => { word.innerHTML = t(key); word.classList.remove("fade"); }, 380);
}

const ease = (x) => .5 - Math.cos(Math.PI * x) / 2;
function tick(now) {
  if (!breathRun) return;
  const c = (now - t0) % (IN + OUT);
  const phase = c < IN ? "in" : "out";
  const k = phase === "in" ? ease(c / IN) : 1 - ease((c - IN) / OUT);
  breath.style.setProperty("--s", (MIN + (MAX - MIN) * k).toFixed(4));
  if (phase !== breathPhase) { breathPhase = phase; breathWord(phase); }
  requestAnimationFrame(tick);
}
function startBreath() {
  if (breathRun || reduced) return;
  breathRun = true;
  t0 = performance.now();
  breathPhase = "in";
  breathWord("in", true);
  requestAnimationFrame(tick);
}
function stopBreath() { breathRun = false; }

if (reduced) {
  breath.style.setProperty("--s", ".9");
} else if ("IntersectionObserver" in window) {
  new IntersectionObserver(([e]) => (e.isIntersecting ? startBreath() : stopBreath())).observe(breath);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopBreath();
    else if (breath.getBoundingClientRect().bottom > 0) startBreath();
  });
} else startBreath();

/* =========================================================
   „Mit kér ma a teste?” – ajánló
   ========================================================= */
const tlist = $(".tlist");
const finderOut = $(".finder__out");
let need = null;

function renderFinder() {
  const rows = $$(".tr", tlist);
  tlist.classList.toggle("is-filtering", !!need);
  if (!need) {
    rows.forEach((r) => r.classList.remove("is-match"));
    finderOut.textContent = "";
    return;
  }
  const hits = rows.filter((r) => r.dataset.needs.split(" ").includes(need));
  rows.forEach((r) => r.classList.toggle("is-match", hits.includes(r)));
  const names = hits.map((r) => `<b>${$("h3", r).firstChild.textContent.trim()}</b>`);
  const list = names.length > 1 ? `${names.slice(0, -1).join(", ")} ${lang === "en" ? "and" : "és"} ${names.at(-1)}` : names[0];
  finderOut.innerHTML = lang === "en"
    ? `${NEEDS[need].en}: we suggest ${list}. Gordon will fine-tune it on the day.`
    : `Javaslatunk${NEEDS[need].hu}: ${list}. A részleteket Gordon a helyszínen hangolja Önre.`;
}
$$(".finder .chip").forEach((c) => c.addEventListener("click", () => {
  need = need === c.dataset.need ? null : c.dataset.need;
  $$(".finder .chip").forEach((x) => x.setAttribute("aria-pressed", String(x.dataset.need === need)));
  renderFinder();
}));

/* =========================================================
   Vélemények – lapozó
   ========================================================= */
const quotes = $$(".q");
const dots = $(".qdots");
let qi = 0, qTimer = null, qPaused = false;

quotes.forEach((q, i) => {
  q.id = `q${i + 1}`;
  const b = document.createElement("button");
  b.type = "button";
  b.setAttribute("role", "tab");
  b.setAttribute("aria-controls", q.id);
  b.setAttribute("aria-label", `${i + 1} / ${quotes.length}`);
  b.addEventListener("click", () => showQuote(i, true));
  dots.append(b);
});
function showQuote(i, user) {
  qi = (i + quotes.length) % quotes.length;
  quotes.forEach((q, k) => { q.classList.toggle("is-on", k === qi); q.setAttribute("aria-hidden", String(k !== qi)); });
  $$("button", dots).forEach((b, k) => b.setAttribute("aria-selected", String(k === qi)));
  if (user) restartQuotes();
}
function restartQuotes() {
  clearInterval(qTimer);
  if (reduced || qPaused) return;
  qTimer = setInterval(() => showQuote(qi + 1), 7500);
}
$(".js-prev").addEventListener("click", () => showQuote(qi - 1, true));
$(".js-next").addEventListener("click", () => showQuote(qi + 1, true));
const qBox = $(".quotes");
qBox.addEventListener("mouseenter", () => { qPaused = true; clearInterval(qTimer); });
qBox.addEventListener("mouseleave", () => { qPaused = false; restartQuotes(); });
qBox.addEventListener("focusin", () => { qPaused = true; clearInterval(qTimer); });
qBox.addEventListener("focusout", () => { qPaused = false; restartQuotes(); });
let sx = null;
qBox.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
qBox.addEventListener("touchend", (e) => {
  if (sx === null) return;
  const dx = e.changedTouches[0].clientX - sx;
  if (Math.abs(dx) > 40) showQuote(qi + (dx < 0 ? 1 : -1), true);
  sx = null;
});
showQuote(0);
restartQuotes();

/* =========================================================
   Időpontkérés összeállítása → e-mail / SMS
   ========================================================= */
const form = $("#composer");
const pick = { treat: "suggest", when: new Set() };

$$('[data-field="treat"] .chip').forEach((c) => c.addEventListener("click", () => {
  pick.treat = c.dataset.v;
  $$('[data-field="treat"] .chip').forEach((x) => x.setAttribute("aria-pressed", String(x === c)));
  renderComposer();
}));
$$('[data-field="when"] .chip').forEach((c) => c.addEventListener("click", () => {
  pick.when.has(c.dataset.v) ? pick.when.delete(c.dataset.v) : pick.when.add(c.dataset.v);
  c.setAttribute("aria-pressed", String(pick.when.has(c.dataset.v)));
  renderComposer();
}));
form.addEventListener("input", renderComposer);
form.addEventListener("submit", (e) => e.preventDefault());

function message() {
  const name = $("#cp-name").value.trim();
  const note = $("#cp-note").value.trim();
  const when = [...pick.when].map((k) => WHEN[k][lang]);
  const tr = TREATS[pick.treat][lang];
  const join = (a) => (a.length > 1 ? `${a.slice(0, -1).join(", ")} ${lang === "en" ? "or" : "vagy"} ${a.at(-1)}` : a[0]);
  let m;
  if (lang === "en") {
    m = "Hi Gordon,\n\n";
    m += pick.treat === "suggest"
      ? "I'd like to book a massage – I'd be happy for you to suggest the technique."
      : `I'd like to book a session: ${tr}.`;
    if (when.length) m += `\nIdeally ${join(when)}.`;
    if (note) m += `\n\n${note}`;
    m += "\n\nCould you let me know your free slots and the price?\n\nThank you,";
    if (name) m += `\n${name}`;
  } else {
    m = "Kedves Gordon!\n\n";
    m += pick.treat === "suggest"
      ? "Szeretnék időpontot kérni egy masszázsra – a technikát Önre bízom."
      : `Szeretnék időpontot kérni a következő kezelésre: ${tr}.`;
    if (when.length) m += `\nNekem ${join(when)} lenne a legjobb.`;
    if (note) m += `\n\n${note}`;
    m += "\n\nKérem, írja meg a szabad időpontokat és az árat.\n\nKöszönöm,";
    if (name) m += `\n${name}`;
  }
  return m;
}

function renderComposer() {
  if (!form) return;
  const m = message();
  $(".js-preview").textContent = m;
  const subject = lang === "en" ? "Booking request – massage" : "Időpontkérés – masszázs";
  $(".js-send-mail").href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(m)}`;
  $(".js-send-sms").href = `sms:${SITE.phone}?body=${encodeURIComponent(m)}`;
}

/* =========================================================
   Térkép – csak kattintásra tölt a Google-tól
   ========================================================= */
$(".js-map").addEventListener("click", () => {
  const f = document.createElement("iframe");
  f.src = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&z=17&output=embed`;
  f.title = lang === "en" ? "Map: " + SITE.address : "Térkép: " + SITE.address;
  f.loading = "lazy";
  f.referrerPolicy = "no-referrer-when-downgrade";
  $("#map").replaceChildren(f);
});

/* =========================================================
   Indulás: mentett nyelv, különben a böngésző nyelve
   ========================================================= */
const saved = store("lang");
const prefersHu = (navigator.languages || [navigator.language || "hu"]).some((l) => /^hu\b/i.test(l));
setLang(saved || (prefersHu ? "hu" : "en"));
