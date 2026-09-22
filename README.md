# PCB Consulting & Solar Solutions — Website

A static, no-build website (plain HTML/CSS/JS — no framework, no server required).

## Pages
- `index.html` — Home: hero, services overview, why-choose-us, process, solar packages/pricing, CTA
- `services.html` — Detailed breakdown of all four services
- `about.html` — Mission, values
- `contact.html` — Quote form, contact info, FAQ
- `404.html` — Not-found page

## Where the content came from
Built from the reference file you provided (`PCB Consulting and Solar Professional Website Home.pdf`). That gave us real, business-specific facts, which are used throughout:

- **Logo colors**: blue `#1a56db` + orange `#f5821f`, matching your PCB icon
- **Phone**: +27 82 855 4356 (used for `tel:` links and WhatsApp `wa.me` links)
- **Email**: info@pcbconsulting.co.za
- **Service area**: Covering Gauteng, South Africa (no fixed office address, so no map is embedded)
- **Business hours**: Mon–Fri 7:00–18:00, Sat 8:00–16:00, 24/7 for emergencies
- **Services**: Solar Installation, Residential Electrical, Commercial Electrical, 24/7 Electrician — copy and bullet points taken directly from your PDF
- **Pricing**: the home component packages (4-panel, 6-panel, battery, etc.) and the three-tier packages (Basic R45,000 / Professional R85,000 / Commercial from R150,000) are your real published prices, including the equipment brands (Canadian Solar, Deye, Hubble)

No stock photos are used — since there were no real project photos to draw from, all visuals are simple SVG illustrations in your brand colors instead of generic/fake stock imagery.

## What still needs your input
- **Real project photos** — swap the SVG illustrations in the hero and service sections for actual photos of your installs once you have them (search for `hero-art`, `service-art`, `why-art` in the HTML).
- **Company history / credentials** — the About page has a highlighted note (search `placeholder-note` in `about.html`) asking for your founding story, qualifications (e.g. Wireman's Licence, PV GreenCard), and team info. Nothing was invented here on purpose.
- **Pricing currency** — prices will drift over time (equipment costs, exchange rates); the pricing section already includes a disclaimer, but update the numbers periodically.
- **Contact form** — it currently opens a pre-filled email via `mailto:` (no backend needed, works immediately). For a proper inbox/lead tracking experience, connect it to a form service like **Formspree** or **Netlify Forms** — that just means changing the `<form>`'s handling in `contact.html` / `js/main.js`.
- **Logo file** — the header/footer use a hand-built SVG approximation of your PCB icon (sun + panel motif in your colors). If you have the original logo file (PNG/SVG), swap it in for pixel-perfect accuracy.
- **Social links** — none are included since none were provided. Add them to the footer if you have active business social accounts.

## Running locally
No build step — just open `index.html` in a browser, or serve the folder with any static server, e.g.:

```
npx serve .
```

## Deploying
Any static host works: Netlify, Vercel, GitHub Pages, or your existing hosting via FTP — just upload the whole folder.
