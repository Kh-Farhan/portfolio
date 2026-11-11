# Khawaja Farhan Ahmed — Portfolio

Next.js (App Router) · TypeScript · Tailwind CSS v4, exported as a static site.

## Editing content

**All text lives in [`src/content.ts`](src/content.ts).** Sections are listed in page order:
meta, contact, header, hero, profile card, highlights, client work, bug hunts, path, stack, cart (contact) and footer.
Components only read from that file, so you never need to touch them to change copy, projects or skills.

- Add a project: append to `work.projects`. Give it a `theme` (`white`, `ink`, `mint`, `butter`) and an optional `href` (adds a ↗ link).
- Add a filter chip: add the tag to `work.filters`; projects show when one of their `tags` matches.
- Replace the résumé: overwrite `public/resume.pdf`.

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static output in /out
```

Netlify builds with `npm run build` and publishes `out/` (see `netlify.toml`).
