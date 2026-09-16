# Roi Borromeo — Portfolio

A responsive, static portfolio built with semantic HTML, CSS, and a small progressively enhanced JavaScript file. No build step or external runtime dependencies.

## Local preview

Run `python3 -m http.server 8000` from this directory and open `http://localhost:8000`.

## Editing

- `index.html`: content, project descriptions, and links.
- `styles.css`: colors, layout, responsive rules, and CSS project illustrations.
- `script.js`: current year and optional clipboard support.
- `static/favicon.svg`: site icon.

Moments is the first featured project and links to `moments.html`. Its cover uses two photo cards and a pink-red heart. The detail page includes a presentation mockup with sample content and an accessible native-dialog lightbox. DTRCam uses an optimized WebP mockup with sample personal details and a click-to-enlarge dialog. ServerInfra retains its labeled feature illustration. Older screenshots remain in `static/` but are not loaded by the page.

Keep project claims grounded in the linked repositories. Momi is presented as a personal project; it is not advertised as a publicly available service. The portfolio has no resume download until a verified resume URL is supplied.

## Deployment

GitHub Actions deploys this directory to GitHub Pages on pushes to `modernize`. Review changes on a separate branch and merge only when ready to update the live site. Relative asset paths support deployment under `/Portfolio/`.

## Accessibility

The page includes a skip link, semantic landmarks, visible keyboard focus, descriptive project illustrations, reduced-motion support, and functional navigation without JavaScript. The copy button is shown only where the Clipboard API is available; email links work independently.
