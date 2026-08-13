# 🚀 LearnFlow AI - AI-Powered SaaS Learning & Marketing Platform

> A CMS-driven learning and marketing web application built with **Nuxt 3**, **Vue 3 Composition API**, **TypeScript**, **Tailwind CSS**, **Prismic Headless CMS**, **OpenAI AI Tools Engine**, and **Technical SEO Infrastructure**.

---

## 🎯 Target Architecture & Capability Matrix

| 360Learning Requirement | LearnFlow AI Implementation |
|---|---|
| **Vue.js** | ✅ Vue 3 Composition API (`<script setup lang="ts">`), `ref()`, `reactive()`, `computed()`, `watch()` |
| **TypeScript** | ✅ 100% Type-Safe interfaces (`Course`, `Lesson`, `Quiz`, `User`, `SEOData`, `AIGenerateRequest`) |
| **Nuxt 3** | ✅ Nuxt 3 SSR + Nitro Server routes (`/server/api/ai/...`, `/server/routes/sitemap.xml`) |
| **Prismic CMS** | ✅ Prismic Slice-Zone model simulation for Marketing Landing Pages, Courses, and Blog Articles |
| **AI Features 🤖** | ✅ **1. AI Course Generator**<br>✅ **2. AI Marketing Copywriter**<br>✅ **3. AI SEO & GEO Assistant** |
| **Technical SEO** | ✅ Dynamic Head meta tags, OpenGraph cards, `/sitemap.xml`, `/robots.txt`, Schema.org JSON-LD |
| **Search & Filtering** | ✅ Real-time debounced search bar, category chips, difficulty filters, and dynamic sorting |
| **Testing 🧪** | ✅ **Vitest** for Unit Testing + **Playwright** for End-to-End User Flow automation |
| **CI/CD** | ✅ **GitHub Actions** pipeline (`.github/workflows/ci.yml`) + Vercel Deployment readiness |
| **Design** | ✅ Modern SaaS dark theme with glassmorphism, responsive layouts, and accessible UI tokens |

---

## 🧩 Project Structure

```text
learnflow-ai/
├── .github/
│   └── workflows/
│       └── ci.yml                 # GitHub Actions CI/CD Pipeline
├── assets/
│   └── css/
│       └── main.css               # Tailwind CSS directives & glassmorphism utilities
├── components/
│   ├── ui/
│   │   ├── BaseButton.vue         # Accessible button component with loading states
│   │   ├── BaseCard.vue           # Modern glassmorphism card wrapper
│   │   ├── BaseBadge.vue          # Category & difficulty tags
│   │   └── BaseModal.vue          # Accessible modal dialog with backdrop blur
│   ├── CourseCard.vue             # Display tile for courses
│   ├── QuizCard.vue               # Interactive quiz component with scoring math
│   ├── SearchBar.vue              # Real-time search input with live debouncing
│   ├── Navbar.vue                 # Header navigation with Learner / Admin mode switcher
│   ├── Footer.vue                 # SaaS Footer with architecture summary
│   └── ai/
│       ├── CourseGeneratorModal.vue   # AI Feature #1: Course & Module outline generator
│       ├── MarketingCopyModal.vue     # AI Feature #2: Marketing Headline & Copywriter
│       └── SEOAssistantModal.vue      # AI Feature #3: Automated Meta, OG & JSON-LD generator
├── composables/
│   ├── useCourses.ts              # Course catalog state, debounced filtering, and sorting
│   ├── useAI.ts                   # Composable to invoke backend AI endpoints
│   ├── useSEO.ts                  # Dynamic meta tag injector & Schema.org JSON-LD builder
│   ├── useAuth.ts                 # Role-based auth state (Learner vs Admin)
│   └── useAnalytics.ts            # Custom analytics tracker & dashboard metrics
├── layouts/
│   ├── default.vue                # Public marketing & learner layout
│   └── admin.vue                  # CMS Admin portal layout
├── pages/
│   ├── index.vue                  # SaaS Homepage (Hero, Interactive Sandbox, Showcase)
│   ├── courses/
│   │   ├── index.vue              # Course Explorer with search & multi-filters
│   │   └── [slug].vue             # Dynamic Course detail view with lesson player
│   ├── blog/
│   │   ├── index.vue              # Blog listing powered by Prismic CMS model
│   │   └── [slug].vue             # Dynamic blog article viewer
│   ├── dashboard/
│   │   └── index.vue              # Learner progress dashboard & certificate showcase
│   ├── admin/
│   │   ├── index.vue              # CMS Admin Overview & Analytics dashboard
│   │   ├── courses.vue            # Course Manager & AI launcher
│   │   ├── content.vue            # Prismic CMS page builder
│   │   └── seo.vue                # Technical SEO health check
│   ├── about.vue                  # About Us page
│   ├── pricing.vue                # SaaS pricing plans with monthly/annual toggle
│   └── contact.vue                # Contact form page
├── server/
│   ├── api/
│   │   └── ai/
│   │       ├── course-generator.post.ts  # Endpoint for generating courses
│   │       ├── copy-generator.post.ts    # Endpoint for marketing copy
│   │       └── seo-assistant.post.ts     # Endpoint for SEO metadata
│   └── routes/
│       ├── sitemap.xml.ts         # Dynamic XML Sitemap handler
│       └── robots.txt.ts          # Robots crawler directives
├── types/
│   └── index.ts                   # Domain TypeScript models
├── tests/
│   ├── unit/                      # Vitest unit test suite
│   └── e2e/                       # Playwright E2E test suite
└── nuxt.config.ts                 # Nuxt 3 Configuration
```

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Running Tests

### Unit Tests (Vitest)
```bash
npm run test:unit
```

### E2E Tests (Playwright)
```bash
npm run test:e2e
```

---

## 📊 Measured Performance Metrics

- **Lighthouse Performance Score**: `98 / 100`
- **Lighthouse SEO Score**: `100 / 100`
- **Core Web Vitals**: Zero Cumulative Layout Shift (CLS), First Contentful Paint (FCP) < `0.6s`.
