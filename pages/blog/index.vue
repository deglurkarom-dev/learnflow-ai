<template>
  <div class="py-12 bg-[#09090B]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-10 space-y-1.5 text-center max-w-2xl mx-auto">
        <span class="text-xs font-semibold uppercase tracking-wider text-emerald-400">Prismic Headless CMS Integration</span>
        <h1 class="font-display text-2xl sm:text-3xl font-extrabold text-white">LearnFlow Engineering Blog</h1>
        <p class="text-zinc-400 text-xs">
          Technical insights on Vue 3 Composition API, Nuxt 3 Nitro routes, technical SEO, and AI content systems.
        </p>
      </div>

      <!-- Blog Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article 
          v-for="post in posts" 
          :key="post.id" 
          class="ui-card p-0 rounded-xl overflow-hidden flex flex-col group"
        >
          <div class="aspect-video overflow-hidden bg-zinc-900">
            <img 
              :src="post.coverImage" 
              :alt="post.title" 
              class="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 ease-out"
            />
          </div>

          <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
            <div>
              <div class="flex items-center gap-2.5 text-xs text-zinc-400 mb-2">
                <span class="px-2 py-0.5 rounded-md bg-brand-950/80 text-brand-300 font-semibold border border-brand-800/60 text-[11px]">
                  {{ post.category }}
                </span>
                <span>•</span>
                <span>{{ post.readTimeMinutes }} min read</span>
                <span>•</span>
                <span>{{ post.publishedAt }}</span>
              </div>

              <NuxtLink :to="`/blog/${post.slug}`" class="block group-hover:text-brand-300 transition-colors">
                <h2 class="text-base font-bold text-white mb-1.5 leading-snug">{{ post.title }}</h2>
              </NuxtLink>

              <p class="text-zinc-400 text-xs line-clamp-3 leading-relaxed">
                {{ post.excerpt }}
              </p>
            </div>

            <div class="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <img :src="post.authorAvatar" class="w-6 h-6 rounded-full object-cover border border-zinc-700" />
                <span class="text-xs text-zinc-300 font-medium">{{ post.authorName }}</span>
              </div>

              <NuxtLink :to="`/blog/${post.slug}`" class="text-xs font-semibold text-brand-400 hover:text-brand-300">
                Read Article →
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { BlogPost } from '~/types';
import { useSEO } from '~/composables/useSEO';

const posts = ref<BlogPost[]>([
  {
    id: 'post-1',
    slug: 'power-of-prismic-nuxt3',
    title: 'Architecting Marketing Websites with Nuxt 3 & Prismic Slice Zone',
    excerpt: 'Discover how marketing teams can create custom dynamic page slices without touching code, while engineers keep clean Vue 3 TypeScript structures.',
    contentMarkdown: `### Why Prismic + Nuxt 3?\n\nPrismic's Slice Machine gives engineering teams total control over atomic Vue components while allowing marketing leaders to construct pages dynamically.\n\n#### key Benefits:\n1. Zero developer bottleneck for landing page edits.\n2. Fully typed Slice models with TypeScript.\n3. Automatic SEO metadata generation with Nuxt server routes.`,
    coverImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    authorName: 'Sarah Lin',
    authorRole: 'Staff Engineer',
    authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    category: 'Prismic CMS',
    publishedAt: '2026-02-10',
    readTimeMinutes: 6
  },
  {
    id: 'post-2',
    slug: 'technical-seo-geo-strategies',
    title: 'Technical SEO & Generative Engine Optimization (GEO) in Vue 3',
    excerpt: 'How to structure Schema.org JSON-LD scripts, dynamic OpenGraph meta tags, and SSR Nitro rendering to maximize search engine & AI crawler indexability.',
    contentMarkdown: `### The Next Frontier: GEO + SEO\n\nModern search engines and AI engines prioritize structured data over raw text.\n\nBy serving Schema.org JSON-LD scripts inside Nuxt server routes, your web pages gain prime visibility.`,
    coverImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
    authorName: 'Marcus Vance',
    authorRole: 'Head of SEO',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    category: 'SEO Engineering',
    publishedAt: '2026-02-05',
    readTimeMinutes: 8
  }
]);

useSEO({
  title: 'Prismic CMS Blog & Technical Articles',
  description: 'Technical insights on Vue 3 Composition API, Nuxt 3 Nitro, Prismic Slice Machine, and AI SEO engineering.'
});
</script>
