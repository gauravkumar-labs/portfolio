# Gaurav Kumar — Engineering Portfolio

Executive personal portfolio for **Gaurav Kumar**, Senior Software Engineer specializing in **.NET**, **AWS Cloud**, **Distributed Systems**, and **Enterprise GenAI workflows** with 15+ years of experience.

- **GitHub:** [github.com/gauravkumar-labs](https://github.com/gauravkumar-labs)
- **LinkedIn:** [linkedin.com/in/gaurav-kumar-a154121b](https://www.linkedin.com/in/gaurav-kumar-a154121b/)
- **Labs Sandbox:** [gauravkumar-labs.vercel.app](https://gauravkumar-labs.vercel.app)

---

## Overview

Built with a dark-mode developer aesthetic (zinc/slate palette with cyan and AWS-inspired amber accents), the portfolio highlights system design depth, cloud modernization trade-offs, and interactive engineering utilities.

### Sections
1. **Hero Section**: Executive summary, engineering focus, and direct links to GitHub and LinkedIn.
2. **Impact Metrics Bar**: 4-column summary covering 15+ years experience, cloud-native .NET & AWS systems, high-throughput distributed APIs, and GenAI modernization.
3. **Interactive Tech Stack & Capability Radar**: Custom SVG hexagonal radar chart paired with a filterable skills matrix across `.NET Ecosystem`, `AWS Cloud & DevOps`, `Architecture & Data`, and `AI & Modern Workflows`.
4. **Engineering Case Studies (Expandable)**:
   - *01. Legacy .NET Framework to Cloud-Native .NET on AWS EKS* — Kubernetes portability across AWS, multi-cloud, and on-premises environments.
   - *02. Event-Driven Lead Processing Pipeline with SQS & Lambda* — Async decoupling, partial-batch failure handling, and DynamoDB idempotency.
   - *03. Enterprise AI Knowledge Assistant using .NET Semantic Kernel & RAG* — VPC-private retrieval with ACL enforcement and citation grounding.
5. **Live Labs & Demos**: Showcase cards and architecture specification modals for upcoming interactive tools hosted at `gauravkumar-labs.vercel.app` (including the **AWS Cost & Architecture Estimator** and **.NET Code Review AI Helper**).

---

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons:** Lucide React
- **Typography:** Outfit, Plus Jakarta Sans, JetBrains Mono

---

## Project Structure

```text
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── src
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    ├── assets/images/
    ├── data/
    │   └── portfolioData.ts
    └── components/
        ├── Navbar.tsx
        ├── HeroSection.tsx
        ├── ImpactMetricsBar.tsx
        ├── TechStackRadar.tsx
        ├── CaseStudiesSection.tsx
        ├── LiveLabsSection.tsx
        └── Footer.tsx
```

---

## Local Development

### Prerequisites
- Node.js 20+
- npm 10+

### Setup & Scripts

```bash
# Install dependencies
npm install

# Start the development server on http://localhost:3000
npm run dev

# Type-check TypeScript
npm run lint

# Build production bundle to dist/
npm run build

# Preview production build locally
npm run preview
```

---

## Deploying to Vercel

This project is configured for zero-config deployment on Vercel:

1. Push this repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Keep the default **Vite** preset settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Deploy.

---

## License

MIT
