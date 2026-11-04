# getestdoorsenioren.nl

Statische site (Astro) op GitHub Pages. Uitgave van CREW.

- Content: `src/content/artikelen/*.md` (frontmatter-schema in `src/content.config.ts`)
- Productdata met bronnen: `src/data/products.json`
- Affiliatelinks op één plek: `src/data/partners.json` (`link_template` met `{url}`)
- Elke push naar `main` bouwt en publiceert via `.github/workflows/deploy.yml`

Wekelijkse agents (meten, optimaliseren, schrijven) draaien buiten deze repo en leveren wijzigingen als pull request.
