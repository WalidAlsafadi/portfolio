# SEO post-launch notes

Updated: Sep 15, 2026

## Implemented

- Replaced the homepage description with a concise summary of Walid's AI engineering, data science, and research work. The shared metadata helper propagates it to the standard, Open Graph, and Twitter descriptions.
- Preserved the homepage name as the single primary heading and retained the existing page-specific titles, descriptions, canonical URLs, and structured data.
- Added explicit favicon, SVG, PNG, and Apple touch icon declarations using the existing `WA.` identity.
- Matched the portrait asset to its rendered 4:5 ratio and refined responsive image `sizes` values for the portrait, project cards, project case studies, and organization logos.
- Continued using self-hosted fonts through `next/font` with `display: swap`. No external font, stylesheet, or script was added.
- Added one-year HSTS for Cloudflare Pages responses, including subdomains and without preload.
- Retained Cloudflare's existing default `Referrer-Policy` and `X-Content-Type-Options` response headers rather than duplicating them in the repository.
- Refreshed sitemap modification dates for the audited public pages.

## Deliberately not added

- Keyword stuffing or generic SEO filler
- Social share buttons
- Google Analytics solely for search ranking
- Speculative SPF, DKIM, DMARC, or other email DNS records
- `ads.txt` without an advertising platform relationship
- Fake reviews, awards, or trust signals
- Artificial backlink schemes
- Risky render-path changes without field performance data

## External follow-up

- Keep the XML sitemap submitted in Google Search Console and monitor indexing, canonical selection, Core Web Vitals, and enhancement reports.
- Request indexing only for materially changed or newly published priority pages. Sitemap discovery is sufficient for the rest.
- Prioritize legitimate profile and citation links from Google Scholar, ORCID, GitHub, LinkedIn, universities, employers, collaborators, and published research records.
- Add analytics later only if traffic and conversion measurement becomes useful.
- Configure email authentication only when a real mail provider is selected, using that provider's exact DNS records.

## Route decision

`/cv` is intentionally unpublished. It remains a 404 route and is excluded from the sitemap until a public CV page is deliberately added.
