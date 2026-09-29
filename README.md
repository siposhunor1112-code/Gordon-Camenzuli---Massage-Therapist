# Gordon Camenzuli – Massage Therapist – weboldal

Statikus, egyoldalas, kétnyelvű (magyar / angol) weboldal Gordon Camenzuli holisztikus masszázsterapeutának
(1052 Budapest, Sütő utca 2., 1. emelet 1.). Nincs szükség build lépésre: a `public/` mappa bármilyen statikus
tárhelyen kiszolgálható (Cloudflare Workers, Netlify, GitHub Pages).

## Fájlok

- `public/` – maga a weboldal (ez kerül ki a netre):
  - `index.html` – az oldal szerkezete és minden magyar szövege
  - `styles.css` – megjelenés (színek, betűk, méretek a `:root` változókban)
  - `script.js` – elérhetőségek (`SITE`), angol szövegek (`EN`), lélegző gömb, kezelés-ajánló, vélemény-lapozó,
    időpontkérő, térkép, menü
  - `404.html` – „Ez az oldal elengedte magát.” – a nem létező címekhez
  - `_headers` – biztonsági és gyorsítótár-beállítások a Cloudflare-nek (nem jelenik meg az oldalon)
  - `assets/` – ikonok, megosztási kép (`og.jpg`) és betűtípusok
  - `robots.txt` – a keresőknek
- `wrangler.jsonc` – Cloudflare-beállítás (a `public/` mappát teszi ki, a 404-oldallal együtt)
- `tools/images.js` – újragyártja a megosztási képet és az iPhone-ikont (`node tools/images.js`, Playwright kell hozzá)

## Megjelenés

- Letisztult, „high-end” spa-hangulat: len- és homokszínű háttér, eszpresszóbarna szöveg, egyetlen kiemelőszín
  (meleg agyag), hajszálvékony vonalak, sok levegő; a vélemények egy esti, sötét szekcióban
- Két betűtípus saját tárhelyről (SIL Open Font License, `public/assets/fonts/`): **Cormorant** (címek, dőlt
  kiemelések) és **Hanken Grotesk** (szöveg) – csak a latin és latin-ext (ő, ű) készlet, változó vastagsággal
- Logó: **ensō** – egy lélegzettel húzott, nyitott kör, közepén egy ponttal (`#enso` az `index.html` alján és
  `assets/favicon.svg`)
- Megszólítás: végig magázó, nyugodt hangnem; Gordonról harmadik személyben szól (kivéve a nyitókép mondatát)

## Szekciók

- **Nyitókép**: „Lélegezzen. *A többit bízza rám.*” – mellette egy **lélegző gömb**, ami 4 mp-ig tágul (Belégzés)
  és 6 mp-ig szűkül (Kilégzés); a látogató együtt lélegezhet vele. Alatta a tények: Belváros · Deák tér,
  8 masszázsfajta, 100 % ajánlás (Facebook), English · Magyar
- **Szalag**: a nyolc technika lassan úszó felsorolása
- **01 Szemlélet**: „A test rétegekben emlékszik.” – a holisztikus megközelítés, három pillér (Érintés, Légzés,
  Jelenlét), és egy rövid bemutatkozás: Gordon Camenzuli, CMT
- **02 Kezelések**: „Nyolc technika, egy kéz.” – Holistic, Remedial, Deep Tissue, Swedish, Lomi-Lomi, Somatic, Thai,
  Sport & Dance; mindegyiknél leírás, nyomás-skála (5 fokozat) és „kinek ideális”.
  **„Mit kér ma a teste?”** ajánló: hat helyzet közül választva kiemeli a hozzá illő kezeléseket
- **03 Egy kezelés menete**: négy lépés (Beszélgetés, Megérkezés, Rétegről rétegre, Visszatérés), „A tér” rajzolt
  illusztrációval, és „Kinek ajánljuk” (zenészek, táncosok, sportolók, irodában ülők, utazók…)
- **04 Vélemények**: öt vendégvélemény lapozva (magától vált, egérrel megáll, telefonon húzható), 100 % Facebook-ajánlás,
  linkek a Tripadvisor- és Facebook-értékelésekhez
- **05 Gyakori kérdések**: melyik masszázs, idő és ár, nyelv, felkészülés, ellenjavallatok, megközelítés
- **06 Időpont és kapcsolat**: nagy telefonszám, e-mail, cím, „Előzetes időpont-egyeztetéssel”, Google/Apple Térkép
  gomb, térkép kattintásra (addig semmit nem tölt be a Google-tól), közösségi linkek.
  **Időpontkérő**: kezelés + mikor lenne jó + név + megjegyzés → élő előnézet → „E-mail megírása” vagy „SMS küldése”
  gomb, ami a látogató saját levelezőjében / üzenetküldőjében nyit meg egy előre megírt üzenetet (a látogató
  nyelvén). Nincs űrlap-beküldés, az oldal semmilyen adatot nem gyűjt és nem küld
- **Lábléc**: óriási, dőlt „Gordon” felirat agyagszínű átmenettel
- Telefonon alul (a nyitókép után) mindig ott a **Hívás** és az **Időpontot kérek** gomb; a menü teljes képernyős

## Nyelv

- Jobb felül **HU / EN** kapcsoló. Első látogatáskor a böngésző nyelve dönt (magyar böngésző → magyar, minden más →
  angol), utána a választást megjegyzi
- A magyar szöveg az `index.html`-ben van, az angol a `script.js` `EN` táblájában, azonos kulccsal
  (`data-i18n="…"`). Ha egy magyar szöveget átír, az angolt is érdemes hozzáigazítani

## Telefon, hozzáférhetőség, sebesség

- 320 px-től működik, vízszintes görgetés nélkül; minden gomb legalább 44 px-es (375, 320 px és fekvő nézetben tesztelve)
- Telefonos elrendezés (`styles.css` végén, „Telefonos finomhangolás”):
  - a nyitókép sorrendje: cím → lélegző gömb → szöveg → gombok, így a gömb és a foglalás gomb is az első képernyőn van
  - a fejlécben csak a másik nyelv gombja látszik (HU-n „EN”, EN-en „HU”), így a név sosem törik két sorba
  - a teljes képernyős menü alján ott a telefonszám, az e-mail és a cím
  - a „Mit kér ma a teste?” ajánló gombjai egy vízszintesen húzható sorban vannak
  - tömörebb szemlélet-pillérek, bemutatkozás, kezelés-sorok és idővonal-szerű „kezelés menete” – az oldal kb. 20 %-kal rövidebb
  - az alsó Hívás / Időpontot kérek sáv a nyitókép után jelenik meg, és eltűnik az időpontkérés résznél (ott nem takar
    ki semmit, és a billentyűzettel sem ütközik)
  - érintésre finom „lenyomódás” visszajelzés, nincs kék villanás koppintáskor
- Telefonon a szövegek nem úsznak be (azonnal látszanak), a fejléc egy helyben áll, nincs elmosott háttér és
  filmszemcse – görgetéskor nem akad
- A lélegző gömb csak akkor számol, amikor látszik; aki kikapcsolta az animációkat (`prefers-reduced-motion`),
  annak minden mozdulatlan, és a vélemények sem lapoznak maguktól
- Nincs külső betöltés (betűk, képek, kód mind saját), a Google Térkép csak kattintásra
- Keresőknek: leírás, megosztási kép, strukturált adat (`HealthAndBeautyBusiness`)
- A `styles.css` és a `script.js` hivatkozásában verziószám van (`?v=2`): módosítás után érdemes növelni, hogy a
  telefonok biztosan az új változatot töltsék le

## Tartalom szerkesztése

- `public/script.js` eleje (`SITE`): telefonszám, e-mail, cím és a térkép keresőszövege
- Ha a telefonszám vagy a cím változik, a `public/index.html`-ben is írja át (kapcsolat, GYIK, lábléc,
  `application/ld+json`, térkép-linkek) – ez a JavaScript nélküli változat és a keresők miatt kell
- Kezelések: `public/index.html`, `<ol class="tlist">` – egy sor egy `<li class="tr">`. A `data-needs` mondja meg,
  melyik ajánló-helyzetnél emelődik ki, a `data-p` (1–5) a nyomás-skála. Az időpontkérő listája: `TREATS` a
  `script.js`-ben
- Új adatok után a megosztási kép frissítése: `node tools/images.js`

## Honnan jöttek az adatok (élesítés előtt egyeztesse Gordonnal!)

Nyilvános forrásokból (Facebook-oldal: `facebook.com/Gordon.Masszazs`, Tripadvisor, Wanderlog / Google-adatlap,
Turul Szépség és Arany Vállalkozás adatlap, Linktree `massagefusion`, Instagram `@gordon.holistic.therapist`):

- Telefon: +36 70 364 6998 · E-mail: gordon.masszazs@gmail.com
- **Cím: két változat szerepel a forrásokban.** A Facebook, a Tripadvisor és több katalógus szerint
  **1052 Budapest, Sütő utca 2., 1. emelet 1.** – az oldal ezt használja. A Wanderlog (Google-adatok) szerint
  **1051 Budapest, Apáczai Csere János u. 1.** Kérem, erősítse meg, melyik az érvényes!
- Technikák: Holistic, Remedial, Somatic, Swedish, Lomi-Lomi (Google-név), Deep Tissue, Thai (Arany Vállalkozás név),
  Sport, Dance (Facebook)
- „CMT” (Certified Massage Therapist): a Linktree-profil nevéből („Gordon Camenzuli CMT Official”)
- „100 % ajánlja, 11 értékelés” – a Facebook-oldal adata egy keresőtalálat szerint; a szám azóta változhatott
- A tér leírása (világos, tágas, tiszta magánlakás a belvárosban, meditációs zene, minőségi olajok) és a vendégkör
  (zenészek, táncosok, sportolók, utazók) a vendégvéleményekből származik
- **Vélemények**: Tripadvisor- és Google-értékelések gondolatai **rövidítve, átfogalmazva és fordítva**, név nélkül –
  az oldal ezt ki is írja. Ha a pontos, eredeti idézeteket szeretné (névvel), küldje el őket, és kicserélem
- **Feltételezések, amiket érdemes jóváhagyatni**:
  - a kezelés **angolul és magyarul** is elérhető (a magyar nyelvtudást nem sikerült ellenőrizni)
  - a technikák leírásai, a nyomás-skála értékei és a „kinek ideális” címkék általános szakmai leírások
  - a kezelés menetének négy lépése és a GYIK válaszai (felkészülés, ellenjavallatok)
  - „egyszerre mindig csak egy vendég”
  - **nyitvatartás és árak nem találhatók nyilvánosan** – az oldal ezért „előzetes időpont-egyeztetéssel” szerepel,
    az árakról érdeklődni kell. Ha megadja, beépítem (árlista, kezelési idők, nyitvatartás)
  - WhatsApp-gombot nem tettem ki, mert nem derült ki, hogy használja-e

## Saját fotók

Nem találtam szabadon felhasználható fotót, ezért az oldal rajzolt / generált elemekkel dolgozik (lélegző gömb,
ensō, a tér illusztrációja). Ha vannak fotók (Gordon portréja, a kezelőszoba, kezek munka közben), tegye őket a
`public/assets/` mappába – a „terapeuta” blokk ívelt kerete (`.therapist__art`) és „A tér” rajza
(`.space__art`) egy-egy fotóra cserélhető.

## Helyi megtekintés

```sh
python3 -m http.server 8000 -d public
# majd: http://localhost:8000
```
