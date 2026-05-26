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
- A **hero** is the large opening section of a home page. On this site, it is the area with your name, introduction, and primary links.
- **Markdown** files are simple text documents. The project pages use Markdown so technical write-ups are easy to edit.

## Where To Make Common Changes

| Change | File |
| --- | --- |
| Email, GitHub, LinkedIn, projects, interests, highlights | `src/data/site.ts` |
| Hero wording and homepage section text | `src/pages/index.astro` |
| Global colors and background | `src/layouts/Layout.astro` |
| Appearance of project cards | `src/components/ProjectCard.astro` |
| Navigation links | `src/components/NavBar.astro` |
| Individual project write-ups | `src/pages/projects/*.md` |

## How To Add A Project

1. Add one project object to the `projects` array in `src/data/site.ts`.
2. Copy an existing Markdown file in `src/pages/projects/` and rename it for the new URL.
3. Match the object's `href` to the Markdown file name. For example, `my-robot.md` uses `href: '/projects/my-robot/'`.
4. Replace the Markdown placeholder sections with your project description, methods, results, media, and links.
5. If a project has a public repository, add `githubHref: 'https://github.com/...'` to that project's object.

## How Color Works

Site-wide colors are CSS variables at the top of `src/layouts/Layout.astro`:

```css
--color-bg: #e8f0f5;
--color-accent: #29617f;
--color-ut: #bf5700;
```

Changing one variable updates many areas of the site. `--color-ut` uses UT Austin's official burnt orange and is intentionally reserved for small accents.

## Why This Site Does Not Use Tailwind Yet

Tailwind is a useful CSS toolkit, especially for larger sites and teams that already know its utility class system. It is not automatically better for a small first portfolio website. This site currently uses ordinary CSS because:

- Astro already supports component-scoped CSS without additional setup.
- The design rules are visible in each component and easy to trace while learning.
- The site is small enough that CSS duplication is minimal.

Tailwind can be added later if the site grows or if you want to learn it. It would change how styling is written, not what the website can do.

## Current Placeholder Items

- Add your CV PDF to `public/Caden_Page_CV.pdf`, or change its link in `src/data/site.ts`.
- Replace the placeholder text in the project Markdown pages as technical write-ups become ready.
- Add project-specific repository links only where a public repository exists.
