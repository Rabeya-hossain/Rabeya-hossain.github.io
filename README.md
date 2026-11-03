# Rabeya Hossain — academic website

A responsive, accessible academic profile for GitHub Pages. Uses plain HTML, CSS, and a small optional JavaScript enhancement; no build or package installation is needed.

- `index.html`: short biography, contact links, news, and publications.
- `assets/css/style.css`: layout, colors, responsive breakpoints, and print styles.
- `assets/js/script.js`: mobile navigation and copyright year.
- `assets/images/pagePhoto.jpg`: existing profile photograph.
- `assets/pdf/Rabeya_Hossain_CV.pdf`: CV opened by the navigation link; replace this file to update it.

LinkedIn, GitHub, and email appear as labeled icon links below the portrait.

Open `index.html` directly, or preview over HTTP from the repository root:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000.

To publish, commit and push to the branch configured in the repository's **Settings → Pages**. GitHub Pages serves the root `index.html`; no Sites hosting or build configuration is required.

## Content maintenance

Edit the list items inside `#publications` to add publications. LabelScope's title and author order were checked against the [VLDB 2026 demonstration program](https://vldb.org/2026/demonstrations.html). PrepTune's full title and revision status were supplied by Rabeya; add its confirmed author list, venue, and public paper URL when available.

Publication entries use italic authors (Rabeya's name in bold), compact venue/status badges, and resource icons with accessible names and hover labels. LabelScope currently links to its DBLP record (document icon) and conference listing (globe icon). Add PDF, code, poster, slides, video, or demo icons when the corresponding public links are available; omit unavailable resources.

The layout follows the measured desktop and mobile styles of [Whanhee Cho’s academic page](https://whnhch.github.io/): Roboto at 16px/24px, 40px and 32px headings, a centered 1100px container with 15px inner gutters, a floated 20% portrait, fixed navigation, and a fixed dark footer. Publication entries use the reference’s title sizing, inline italic authors, venue badges, and small resource icons. The page contains only Rabeya’s biography, news, and publications.

The stylesheet and script URLs include a version query so browsers fetch the matching assets after publication. Increase this version when making later style or script changes. Local edits do not change the public website until committed and pushed to the GitHub Pages branch.
