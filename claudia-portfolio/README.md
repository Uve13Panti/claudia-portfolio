# Claudia Jiménez — Portfolio site

Static site: `index.html`, `about.html`, `services.html`, `work.html`, `contact.html`,
styled from `css/style.css`. The Services and Work pages pull their content from
`data/services.json` and `data/work.json` so they can be edited without touching code.

Placeholder images (from picsum.photos) are used throughout — swap them for real
photos any time by editing the `image` field in the JSON files, or later through
the admin panel below.

## 1. Put it on GitHub

1. Create a new **public** repo on GitHub, e.g. `claudia-portfolio`.
2. Upload this whole folder to it (drag-and-drop on github.com works fine, or `git push`).

## 2. Deploy for free with Netlify

1. Go to [netlify.com](https://netlify.com) → sign up free with your GitHub account.
2. "Add new site" → "Import an existing project" → pick the `claudia-portfolio` repo.
3. Leave build settings empty (it's plain HTML, no build step) → Deploy.
4. You'll get a free URL like `claudia-portfolio.netlify.app` immediately. Working site, zero cost.
5. (Later, if you buy a real domain) Site settings → Domain management → add it there — Netlify's free SSL covers it too.

## 3. Turn on the editing panel for Claudia (Decap CMS)

The `/admin` folder is already built. To activate it:

1. In Netlify: **Site settings → Identity → Enable Identity**.
2. Under Identity → Registration, set to **Invite only** (so only Claudia can sign up).
3. Under Identity → Services, enable **Git Gateway**.
4. Invite Claudia: Identity tab → "Invite users" → her email. She'll get an email to set a password.
5. Done. She logs in at `yoursite.netlify.app/admin` and gets simple forms to:
   - Add / edit / delete portfolio pieces (photo, title, category: Styling or Design, description)
   - Add / edit / delete services
   
   Every change she makes is saved automatically (as a commit behind the scenes) and the live site rebuilds itself within a minute or two — she never sees GitHub or code.

## Extending later

- `about.html` and `contact.html` are currently static (edited by you, in code) — if you
  want Claudia to edit her bio or contact details too, we can move that text into a
  JSON file and add a matching section to `admin/config.yml`, same pattern as Work/Services.
- The contact form currently just shows a confirmation alert — it isn't wired to actually
  send email yet. Easiest free fix once deployed on Netlify: add `data-netlify="true"` to
  the `<form>` tag and Netlify will handle form submissions for free (up to a monthly limit).
