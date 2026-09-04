# Roofiif Alria Dzakwan — Developer Portfolio

Dark-themed developer portfolio built with Next.js 14 (App Router), React, TypeScript, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Images to Add

Replace the placeholder files in `public/images/` with your real images:

| File | Description |
|---|---|
| `profile.jpg` | Your profile photo (square, at least 400×400) |
| `project-1.jpg` | GAN Continual Learning project screenshot |
| `project-2.jpg` | Financial AI Assistant screenshot |
| `project-3.jpg` | Early-Warning System screenshot |
| `internship-1.jpg` | ADS Digital Partner presentation |
| `internship-2.jpg` | Petrokimia field survey |
| `internship-3.jpg` | HMTC ITS team collaboration |

Also add `resume.pdf` to `public/`.

## Customization

All content lives in `src/lib/data.ts`. Edit that file to update projects, experience, skills, and contact info.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with nav + footer
│   ├── page.tsx            # Home page (all sections)
│   ├── globals.css         # Tailwind + custom styles
│   └── projects/[slug]/    # Dynamic case study pages
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── SkillsGrid.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectGrid.tsx
│   ├── InternshipGallery.tsx
│   ├── Achievements.tsx
│   ├── ExperienceTimeline.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
└── lib/
    └── data.ts             # All portfolio content
```

## Deploy

Works with Vercel, Netlify, or any static host via `npm run build && npm run start`.
