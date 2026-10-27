# Rabeya Hossain — academic website

A responsive, accessible academic profile for GitHub Pages. Uses plain HTML, CSS, and a small optional JavaScript enhancement; no build or package installation is needed.

- `index.html`: biography, publications, education, teaching, projects, and recognition.
- `assets/css/style.css`: layout, colors, responsive breakpoints, and print styles.
- `assets/js/script.js`: current navigation section and copyright year.
- `assets/images/pagePhoto.jpg`: existing profile photograph.

Open `index.html` directly, or preview over HTTP from the repository root:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000.

To publish, commit and push to the branch configured in the repository's **Settings → Pages**. GitHub Pages serves the root `index.html`; no Sites hosting or build configuration is required.

## Content maintenance

Edit the articles inside `#publications` to add publications. LabelScope's title and author order were checked against the [VLDB 2026 demonstration program](https://vldb.org/2026/demonstrations.html). Its publication record links to DBLP. PrepTune's full title and revision status were supplied by Rabeya; add its confirmed author list, venue, and public paper URL when available. The lecturer appointment retains its confirmed July 2024 start; confirm the end date before adding a date range.

The visual direction follows the readable academic profiles shared as references: [Mahmood Jasim](https://csc.lsu.edu/~mjasim/), [Anna Fariha](https://afariha.github.io/), and [Whanhee Cho](https://whnhch.github.io/).
