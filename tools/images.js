// Elkészíti a megosztási képet (public/assets/og.jpg) és az iPhone-ikont (public/assets/apple-touch-icon.png).
// Futtatás:  node tools/images.js      (kell hozzá a Playwright: npm i -g playwright, vagy NODE_PATH-on elérhetően)
const path = require("path");
const fs = require("fs");
let chromium;
try { ({ chromium } = require("playwright")); } catch { ({ chromium } = require("/opt/node22/lib/node_modules/playwright")); }

const ROOT = path.join(__dirname, "..", "public");
// A betűket beágyazva adjuk át (az üres lapról a böngésző nem tölthet be helyi fájlt)
const font = (f) => `data:font/woff2;base64,${fs.readFileSync(path.join(ROOT, "assets", "fonts", f)).toString("base64")}`;

const base = `
  @font-face { font-family: Corm; font-style: normal; font-weight: 300 700; src: url(${font("cormorant-latin-wght-normal.woff2")}); }
  @font-face { font-family: Corm; font-style: normal; font-weight: 300 700; src: url(${font("cormorant-latin-ext-wght-normal.woff2")}); unicode-range: U+0100-02BA; }
  @font-face { font-family: Corm; font-style: italic; font-weight: 300 700; src: url(${font("cormorant-latin-wght-italic.woff2")}); }
  @font-face { font-family: Corm; font-style: italic; font-weight: 300 700; src: url(${font("cormorant-latin-ext-wght-italic.woff2")}); unicode-range: U+0100-02BA; }
  @font-face { font-family: Hanken; font-weight: 100 900; src: url(${font("hanken-grotesk-latin-wght-normal.woff2")}); }
  @font-face { font-family: Hanken; font-weight: 100 900; src: url(${font("hanken-grotesk-latin-ext-wght-normal.woff2")}); unicode-range: U+0100-02BA; }
  * { margin: 0; box-sizing: border-box; }
  html, body { width: 100%; height: 100%; }
  body { background: #f4efe7; color: #221d18; font-family: Corm; overflow: hidden; position: relative; }
`;

const enso = (stroke = 3.2) => `<svg viewBox="0 0 40 40"><defs><linearGradient id="c" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c38e6c"/><stop offset="1" stop-color="#8d5a3e"/></linearGradient></defs><path d="M29.8 8.4A15 15 0 1 0 35 20.6" fill="none" stroke="url(#c)" stroke-width="${stroke}" stroke-linecap="round"/><circle cx="20" cy="20" r="3" fill="url(#c)"/></svg>`;

const og = `<style>${base}
  .orb { position: absolute; right: 90px; top: 50%; width: 380px; height: 380px; margin-top: -190px; border-radius: 50%;
    background: radial-gradient(circle at 36% 30%, rgba(255,250,242,.95), rgba(255,250,242,0) 42%),
                radial-gradient(circle at 60% 66%, rgba(154,97,66,.55), rgba(154,97,66,0) 60%),
                radial-gradient(circle at 50% 50%, #e9cdb4 0%, #d9ac8b 52%, #c38e6c 100%);
    box-shadow: 0 40px 90px -30px rgba(122,76,48,.45); }
  .ring { position: absolute; right: 30px; top: 50%; width: 500px; height: 500px; margin-top: -250px; border-radius: 50%; border: 1.5px solid rgba(154,97,66,.22); }
  .ring.b { right: -30px; width: 620px; height: 620px; margin-top: -310px; opacity: .5; }
  .wrap { position: absolute; inset: 64px 72px; display: flex; flex-direction: column; }
  .top { display: flex; align-items: center; gap: 16px; font: 500 30px/1 Corm; }
  .top svg { width: 40px; height: 40px; }
  .top small { font: 600 14px/1 Hanken; letter-spacing: .22em; color: #857a6e; }
  h1 { margin-top: auto; font-weight: 300; font-size: 138px; line-height: .9; letter-spacing: -.03em; }
  h1 em { display: block; font-size: 84px; padding-left: .5em; margin-top: 10px; color: #9a6142; font-weight: 400; }
  .bottom { margin-top: 40px; padding-top: 22px; border-top: 1px solid rgba(34,29,24,.16); display: flex; gap: 40px; font: 500 20px/1 Hanken; letter-spacing: .04em; color: #5e554b; width: 640px; }
  .bottom b { color: #221d18; font-weight: 600; }
</style>
<div class="ring b"></div><div class="ring"></div><div class="orb"></div>
<div class="wrap">
  <div class="top">${enso()}Gordon Camenzuli <small>CMT</small></div>
  <h1>Lélegezzen.<em>A többit bízza rám.</em></h1>
  <div class="bottom"><span>Holisztikus masszázs · Budapest</span><span><b>+36 70 364 6998</b></span></div>
</div>`;

const icon = `<style>${base}
  body { display: grid; place-items: center; }
  svg { width: 64%; height: 64%; }
</style>${enso(2.6)}`;

(async () => {
  const browser = await chromium.launch();
  const shot = async (html, w, h, file, type) => {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.setContent(html, { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: path.join(ROOT, "assets", file), type, ...(type === "jpeg" ? { quality: 88 } : {}) });
    await page.close();
  };
  await shot(og, 1200, 630, "og.jpg", "jpeg");
  await shot(icon, 180, 180, "apple-touch-icon.png", "png");
  await browser.close();
  console.log("Kész: public/assets/og.jpg, public/assets/apple-touch-icon.png");
})();
