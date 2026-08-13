<template>
  <div class="py-12 bg-[#09090B]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <NuxtLink to="/blog" class="text-xs font-semibold text-brand-400 hover:underline inline-flex items-center gap-1 mb-6">
        ← Back to Blog Articles
      </NuxtLink>

      <article class="space-y-6">
        <!-- Article Header -->
        <div class="space-y-3">
          <div class="flex items-center gap-2.5 text-xs text-zinc-400">
            <span class="px-2 py-0.5 rounded-md bg-brand-950/80 text-brand-300 font-semibold border border-brand-800/60 text-[11px]">
              {{ article.category }}
            </span>
            <span>•</span>
            <span>{{ article.publishedAt }}</span>
            <span>•</span>
            <span>{{ article.readTimeMinutes }} min read</span>
          </div>

          <h1 class="font-display text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            {{ article.title }}
          </h1>

          <div class="flex items-center gap-3 pt-3 border-t border-zinc-800">
            <img :src="article.authorAvatar" class="w-9 h-9 rounded-full object-cover border border-zinc-700" />
            <div>
              <p class="text-xs font-bold text-white">{{ article.authorName }}</p>
              <p class="text-[11px] text-zinc-400">{{ article.authorRole }}</p>
            </div>
          </div>
        </div>

        <!-- Featured Cover Image -->
        <div class="aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
          <img :src="article.coverImage" :alt="article.title" class="w-full h-full object-cover" />
        </div>

        <!-- Markdown Content -->
        <div class="prose prose-invert max-w-none text-zinc-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
          {{ article.contentMarkdown }}
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from '#imports';
import { useSEO } from '~/composables/useSEO';

const route = useRoute();
const slug = route.params.slug as string;

const article = {
  slug,
  title: 'Architecting Marketing Websites with Nuxt 3 & Prismic Slice Zone',
  excerpt: 'Discover how marketing teams can create custom dynamic page slices without touching code.',
  contentMarkdown: `### Why Prismic + Nuxt 3?\n\nPrismic's Slice Machine gives engineering teams total control over atomic Vue components while allowing marketing leaders to construct pages dynamically.\n\n#### Key Benefits:\n1. Zero developer bottleneck for landing page edits.\n2. Fully typed Slice models with TypeScript.\n3. Automatic SEO metadata generation with Nuxt server routes.\n\n### Implementation Patterns\n\n\`\`\`ts\nimport { createClient } from '@prismicio/client';\nconst client = createClient('learnflow-ai');\n\`\`\`\n\nWith Nuxt 3 SSR, pages fetch content at build/runtime seamlessly with zero client-side layout shifts.`,
  coverImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
  authorName: 'Sarah Lin',
  authorRole: 'Staff Engineer',
  authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
  category: 'Prismic CMS',
  publishedAt: '2026-02-10',
  readTimeMinutes: 6
};

useSEO({
  title: article.title,
  description: article.excerpt,
  jsonLdSchema: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': article.title,
    'author': {
      '@type': 'Person',
      'name': article.authorName
    }
  }
});
</script>
