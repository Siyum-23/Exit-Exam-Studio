# Ethiopian Exit Exam Studio

A public, local-first practice platform for Ethiopian university exit exams. No authentication required. Built with Next.js App Router, TypeScript, and Tailwind.

You can access the deployed version [here](https://exitexamstudio.app)

## Setup

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` – start local dev server
- `npm run build` – build for production (includes normalization step)
- `npm run start` – run production server

## Data Pipeline

Raw question files live in `Questions/<Department>/<Year>.js`.
The raw question sources are included in the repository. The development server can still start without them, but the department catalog will be empty; production builds require the source data.

Before build/dev the normalization scripts run:

1. `scripts/normalize-questions.ts` reads every question file and outputs structured JSON in `generated/`.
2. `scripts/validate-generated-data.ts` ensures datasets exist for every manifest entry.

Generated files:
- `generated/manifest.json`
- `generated/exams/<examId>.json`
- `generated/reports/data-quality.json`

### Normalization Rules
- Images are resolved from `images/questions` into `public/images/questions`.
- Invalid questions (missing answer, insufficient options) are skipped from exam sessions.
- Model files (`*-model.js`) are exposed as separate "Model" variants.

## Local Storage

Progress is automatically stored in this browser on this device under `practice-exit-exam:storage`. Browser storage can be cleared by browser settings, so use **History → Export backup** to save a portable JSON copy. **Import backup** restores that copy and replaces the current browser's saved progress. Backups are not synced between devices automatically.

The footer includes an optional Telebirr tip of less than 20 Birr at `+251914831504`.

## Routes

- `/` — Landing
- `/departments` — Department list
- `/departments/[departmentSlug]` — Year + variant list
- `/exam/[examId]` — Exam engine
- `/history` — Attempt history

## Deployment

GitHub Pages builds use a static export configured for the repository path `/Exit-Exam-Studio/`.

1. Push changes to the `main` branch on `Siyum-23/Exit-Exam-Studio`.
2. In GitHub, open **Settings → Pages** and set the build source to **GitHub Actions**.
3. The workflow at `.github/workflows/deploy-pages.yml` builds and deploys the site to `https://siyum-23.github.io/Exit-Exam-Studio/`.

The build requires the `Questions/` source files. GitHub Pages is static hosting; API GET routes are emitted as static files, and browser-local progress remains on each user's device. This deployment does not change the existing `exitexamstudio.app` domain.
