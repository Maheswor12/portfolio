# Go-live checklist (manual GitHub Pages)

Upload **all** files in this folder to your Pages branch (often `main` root or `/docs`).

## Required assets (not in git — add before publish)

- `maheshwar.jpg` — **replace the included placeholder** with your real portrait (recommended: ≤200 KB, 960×1200 or 480×600, 4:5 aspect)
- `Maheshwar_Raj_Shrestha_Resume.pdf` — linked from hero

Optional for smaller LCP: `maheshwar.webp` (same dimensions; `index.html` prefers it when present).

## Contact form

1. Create a form at [Formspree](https://formspree.io/).
2. In `index.html`, replace `YOUR_FORM_ID` in the form `action` URL with your form id.

## Custom domain

- Keep `CNAME` file containing `maheswor.com.np`.
- At your registrar, point DNS to [GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
- In repo **Settings → Pages**, set custom domain and enable **Enforce HTTPS** when available.

## After DNS works

1. [Google Search Console](https://search.google.com/search-console) → add property → submit `sitemap.xml`.
2. Test share previews: LinkedIn Post Inspector, Meta Sharing Debugger.
