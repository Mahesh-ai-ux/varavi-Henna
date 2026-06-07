# Varavi MakeUp Henna Artist — Website

## Project Structure
```
varavi-website/
├── index.html        → Home page
├── about.html        → About Varalakshmi
├── services.html     → All 5 services
├── gallery.html      → Photo gallery with filter
├── contact.html      → Contact & booking form
│
├── css/
│   ├── style.css     → Global styles (loaded on every page)
│   ├── home.css      → Home page styles
│   ├── about.css     → About page styles
│   ├── services.css  → Services page styles
│   ├── gallery.css   → Gallery page styles
│   └── contact.css   → Contact page styles
│
├── js/
│   ├── config.js     ← ✏️ EDIT THIS FILE for all content updates
│   ├── main.js       → Shared: nav, footer, WhatsApp, animations
│   ├── home.js       → Home page logic
│   ├── about.js      → About page logic
│   ├── services.js   → Services page logic
│   ├── gallery.js    → Gallery filter + lightbox
│   └── contact.js    → Contact form validation
│
└── assets/
    └── images/       → Drop your photos here
```

## How to Update Content
**Only edit `js/config.js`** — all text, images, contact details, gallery photos, and reviews live there.

## How to Add Your Instagram Photos
1. Open instagram.com on desktop
2. Click any photo → right-click the image → "Copy image address"
3. Paste the URL into the `gallery:` array in `config.js`

## How to Run
Open `index.html` in any browser — no server needed.
Or deploy the entire folder to any web host (Netlify, cPanel, Hostinger, etc.)
