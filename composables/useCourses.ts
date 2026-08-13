import { ref, computed } from 'vue';
import type { Course } from '~/types';

const defaultCourses: Course[] = [
  {
    id: 'course-1',
    slug: 'modern-vue3-nuxt3-mastery',
    title: 'Modern Vue 3, Nuxt 3 & TypeScript Architecture',
    subtitle: 'Build high-performance, SEO-optimized Web Applications with Vue 3 Composition API & Nuxt 3 SSR',
    description: 'Master enterprise frontend architecture using Vue 3, Nuxt 3, TypeScript, and Prismic CMS integration. Designed specifically for full-stack engineers targeting modern SaaS squads.',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    category: 'Frontend Engineering',
    difficulty: 'Intermediate',
    durationHours: 12,
    rating: 4.9,
    reviewCount: 342,
    instructorName: 'Sarah Lin',
    instructorTitle: 'Staff Frontend Engineer @ TechScale',
    instructorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
    publishedAt: '2026-01-15',
    isFeatured: true,
    seoTitle: 'Vue 3 & Nuxt 3 TypeScript Masterclass | LearnFlow AI',
    seoDescription: 'Comprehensive guide to building production Vue 3 & Nuxt 3 SaaS applications with Prismic CMS & AI backend integrations.',
    keywords: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Composition API', 'SSR'],
    modules: [
      {
        id: 'mod-1',
        title: 'Module 1: Vue 3 Composition API Fundamentals',
        description: 'Deep dive into ref(), reactive(), computed(), watch(), and dynamic component composition.',
        lessons: [
          {
            id: 'les-101',
            title: '1. Reactivity Engine: Ref vs Reactive',
            slug: 'ref-vs-reactive',
            durationMinutes: 18,
            contentMarkdown: `### Reactivity in Vue 3\n\nVue 3 uses JavaScript **Proxies** to provide deeply reactive state management.\n\n\`\`\`ts\nimport { ref, computed } from 'vue';\n\nconst count = ref(0);\nconst doubleCount = computed(() => count.value * 2);\n\`\`\`\n\n#### Key Takeaways:\n- Use **ref()** for primitive types and reassignable objects.\n- Use **reactive()** for fixed structural state objects.\n- Compute derived state cleanly with **computed()**.`,
            quiz: {
              id: 'q-101',
              title: 'Reactivity Engine Quiz',
              passingScore: 80,
              questions: [
                {
                  id: 'ques-1',
                  prompt: 'Which JavaScript feature powers Vue 3 reactivity under the hood?',
                  options: [
                    { id: 'opt-1', text: 'Object.defineProperty', isCorrect: false },
                    { id: 'opt-2', text: 'Proxy objects', isCorrect: true },
                    { id: 'opt-3', text: 'MutationObserver', isCorrect: false },
                    { id: 'opt-4', text: 'Web Workers', isCorrect: false }
                  ],
                  explanation: 'Vue 3 completely replaced Object.defineProperty with native ES6 Proxy objects for transparent reactive tracking.'
                },
                {
                  id: 'ques-2',
                  prompt: 'How do you access the unwrapped underlying primitive inside a ref() script?',
                  options: [
                    { id: 'opt-21', text: 'count.get()', isCorrect: false },
                    { id: 'opt-22', text: 'count.value', isCorrect: true },
                    { id: 'opt-23', text: 'count.data', isCorrect: false },
                    { id: 'opt-24', text: 'count()', isCorrect: false }
                  ],
                  explanation: 'Refs wrap reactive values inside an object container with a `.value` getter/setter property.'
                }
              ]
            }
          },
          {
            id: 'les-102',
            title: '2. Composables Pattern & Reusability',
            slug: 'composables-pattern',
            durationMinutes: 22,
            contentMarkdown: `### Custom Composables\n\nComposables leverage Vue's Composition API to encapsulate and reuse stateful logic across components.\n\n\`\`\`ts\nexport function useCounter(initialValue = 0) {\n  const count = ref(initialValue);\n  const increment = () => count.value++;\n  return { count, increment };\n}\n\`\`\``
          }
        ]
      },
      {
        id: 'mod-2',
        title: 'Module 2: Nuxt 3 Full-Stack Architecture',
        description: 'Routing, Server Routes, Dynamic SSR Data Fetching, and Middleware.',
        lessons: [
          {
            id: 'les-201',
            title: '1. Nuxt 3 Server Routes & Nitro Engine',
            slug: 'nuxt3-server-routes',
            durationMinutes: 25,
            contentMarkdown: `### Server API Directory\n\nNuxt 3 automatically scans \`/server/api\` to generate lightweight Nitro server routes.\n\n\`\`\`ts\nexport default defineEventHandler(async (event) => {\n  return { message: 'Hello from Nuxt Nitro Server!' };\n});\n\`\`\``
          }
        ]
      }
    ]
  },
  {
    id: 'course-2',
    slug: 'ai-powered-marketing-seo-engineering',
    title: 'AI Content Systems & Technical SEO Engineering',
    subtitle: 'Automate marketing copy, metadata schemas, and generative AI integrations in modern CMS workflows',
    description: 'Learn to engineer robust AI content pipelines using LLMs, schema.org JSON-LD generation, Prismic headless CMS, and web performance optimization.',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    category: 'AI & Data',
    difficulty: 'Advanced',
    durationHours: 15,
    rating: 4.95,
    reviewCount: 188,
    instructorName: 'Marcus Vance',
    instructorTitle: 'Head of Growth Engineering',
    instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
    publishedAt: '2026-02-01',
    isFeatured: true,
    seoTitle: 'AI Marketing & Technical SEO Engineering Course',
    seoDescription: 'Master LLM prompt automation, programmatically generated SEO metadata, and headless CMS integrations.',
    keywords: ['AI Content', 'SEO Engineering', 'OpenAI', 'Prismic', 'Headless CMS'],
    modules: [
      {
        id: 'mod-201',
        title: 'Module 1: Programmatic SEO & Structured Data',
        description: 'Generate dynamic JSON-LD Schema.org markups for Course, Article, and FAQ tags.',
        lessons: [
          {
            id: 'les-301',
            title: '1. Schema.org Course & FAQ Injection',
            slug: 'schema-org-course-faq',
            durationMinutes: 20,
            contentMarkdown: `### Technical SEO for SaaS\n\nInjecting valid JSON-LD schemas enhances rich search snippets and GEO indexability.\n\n\`\`\`json\n{\n  "@context": "https://schema.org",\n  "@type": "Course",\n  "name": "AI Content Systems"\n}\n\`\`\``
          }
        ]
      }
    ]
  },
  {
    id: 'course-3',
    slug: 'cybersecurity-fundamentals-developers',
    title: 'Cybersecurity Fundamentals for Web Developers',
    subtitle: 'Secure your web apps against OWASP Top 10 vulnerabilities, XSS, CSRF, and Auth Flaws',
    description: 'Comprehensive cybersecurity training for developers covering threat modeling, token security, RBAC authorization, and API hardening.',
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    category: 'Cybersecurity',
    difficulty: 'Beginner',
    durationHours: 8,
    rating: 4.85,
    reviewCount: 210,
    instructorName: 'Elena Rostova',
    instructorTitle: 'Principal Security Architect',
    instructorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80',
    publishedAt: '2026-01-20',
    isFeatured: false,
    seoTitle: 'Cybersecurity Fundamentals for Developers | LearnFlow AI',
    seoDescription: 'Learn OWASP vulnerability prevention, XSS protection, and secure JWT authentication implementation.',
    keywords: ['Cybersecurity', 'OWASP Top 10', 'Auth', 'API Security'],
    modules: [
      {
        id: 'mod-301',
        title: 'Module 1: OWASP Security Essentials',
        description: 'Understanding XSS, SQLi, and CSRF mitigation.',
        lessons: [
          {
            id: 'les-401',
            title: '1. Preventing Cross-Site Scripting (XSS)',
            slug: 'preventing-xss',
            durationMinutes: 15,
            contentMarkdown: `### XSS Prevention in Vue 3\n\nVue 3 automatically escapes text inserted via \`{{ text }}\`. Be cautious when using \`v-html\`!`
          }
        ]
      }
    ]
  }
];

const coursesState = ref<Course[]>(defaultCourses);
const searchQuery = ref('');
const selectedCategory = ref<string>('All');
const selectedDifficulty = ref<string>('All');
const sortBy = ref<'newest' | 'rating' | 'popular'>('popular');

export function useCourses() {
  const filteredCourses = computed(() => {
    let list = [...coursesState.value];

    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase().trim();
      list = list.filter(c => 
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.keywords?.some(k => k.toLowerCase().includes(q))
      );
    }

    if (selectedCategory.value !== 'All') {
      list = list.filter(c => c.category === selectedCategory.value);
    }

    if (selectedDifficulty.value !== 'All') {
      list = list.filter(c => c.difficulty === selectedDifficulty.value);
    }

    if (sortBy.value === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy.value === 'newest') {
      list.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    } else {
      list.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    return list;
  });

  function getCourseBySlug(slug: string): Course | undefined {
    return coursesState.value.find(c => c.slug === slug);
  }

  function addCourse(course: Course) {
    coursesState.value.unshift(course);
  }

  return {
    courses: coursesState,
    filteredCourses,
    searchQuery,
    selectedCategory,
    selectedDifficulty,
    sortBy,
    getCourseBySlug,
    addCourse
  };
}
