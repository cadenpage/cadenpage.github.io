# Caden Page Portfolio

Personal robotics and engineering portfolio built with [Astro](https://astro.build/).

## Preview The Website

From this project folder, run:

```sh
npm run dev
```

Then open `http://localhost:4321` in a browser. When you edit and save a file, Astro updates the preview automatically.

To check that the static site builds correctly:

```sh
npm run build
```

## What The Main Website Terms Mean

- A **page** is a URL. `src/pages/index.astro` becomes the home page at `/`.
- A **component** is a reusable section of HTML and CSS, such as a project card or navigation bar.
- A **layout** wraps pages with repeated structure such as metadata, global colors, and navigation.
- The **sidebar** contains plain links to sections on the homepage. It stays on the left on desktop and mobile.
- **Markdown** files are simple text documents. The project pages use Markdown so technical write-ups are easy to edit.

## Where To Make Common Changes

| Change | File |
| --- | --- |
| Links, research interests, education, honors, undergraduate projects | `src/data/site.ts` |
| Introduction and homepage section text | `src/pages/index.astro` |
| Global colors and background | `src/layouts/Layout.astro` |
| Navigation links | `src/components/NavBar.astro` |

## Graduate and Undergraduate Work

The homepage separates graduate research from undergraduate projects. Graduate work currently links to Building a Way Up and includes a future course-project entry. Publication entries can be added when ready.

The two undergraduate write-ups in `src/pages/projects/` are based on final presentations and checked against their repositories. Repository links are intentionally omitted while the code is being prepared for public presentation. Team credit and experimental limitations belong in each write-up.

Previous experience is separate from the introduction. Organization links, education, and honors are editable in `src/data/site.ts` and `src/pages/index.astro`.

## CV Link

Set `links.cv` in `src/data/site.ts` to the view-only Google Docs URL for the current CV. Keep the same document URL when updating the CV; the website will then always link to that document. The older resume is a reference, not a published download.

## Typography and Color

The site uses locally hosted Roboto at weight 300 (Light). Font files and the OFL license live in `public/fonts/`; no Google Fonts request is needed at runtime.

Site-wide colors are CSS variables in `src/layouts/Layout.astro`: white backgrounds, brown text and borders, and blue links and buttons. Component styles refer to these shared variables.

## Why This Site Does Not Use Tailwind Yet

Tailwind is a useful CSS toolkit, especially for larger sites and teams that already know its utility class system. It is not automatically better for a small first portfolio website. This site currently uses ordinary CSS because:

- Astro already supports component-scoped CSS without additional setup.
- The design rules are visible in each component and easy to trace while learning.
- The site is small enough that CSS duplication is minimal.

Tailwind can be added later if the site grows or if you want to learn it. It would change how styling is written, not what the website can do.

## Current Placeholder Items

- Add the current view-only Google Docs CV URL to `links.cv`.
