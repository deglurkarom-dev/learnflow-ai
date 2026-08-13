<template>
  <div class="py-14 bg-[#09090B]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
      <div class="text-center space-y-2">
        <span class="text-xs font-semibold uppercase tracking-wider text-brand-400">About LearnFlow AI</span>
        <h1 class="font-display text-3xl font-extrabold text-white">Empowering Squads with AI & Modern Vue 3</h1>
        <p class="text-zinc-400 text-xs max-w-xl mx-auto">
          LearnFlow AI was designed to demonstrate modern website engineering, technical SEO, Prismic CMS workflows, and AI content generation.
        </p>
      </div>

      <div class="ui-card p-8 space-y-6 text-zinc-300 text-xs sm:text-sm leading-relaxed">
        <h2 class="text-lg font-bold text-white">The Mission</h2>
        <p>
          Legacy learning management platforms are notoriously slow to update, difficult for marketing squads to customize, and lack modern search engine indexability. LearnFlow AI solves this by coupling Vue 3 reactivity with Nuxt 3 Nitro server routes and Prismic headless CMS capabilities.
        </p>

        <h2 class="text-lg font-bold text-white">Technical Highlights</h2>
        <ul class="list-disc pl-5 space-y-2 text-xs">
          <li><strong>Vue 3 Composition API:</strong> Strongly typed with TypeScript, ref(), reactive(), and reusable composables.</li>
          <li><strong>Nuxt 3 Nitro Server Engine:</strong> Server-side rendered pages and RESTful AI API endpoints.</li>
          <li><strong>Technical SEO:</strong> Dynamic meta tags, OpenGraph images, and Schema.org JSON-LD scripts.</li>
          <li><strong>Automated Testing:</strong> Vitest for unit testing and Playwright for end-to-end user flows.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSEO } from '~/composables/useSEO';

useSEO({
  title: 'About Us & Engineering Architecture',
  description: 'LearnFlow AI mission, technical stack, and architecture overview.'
});
</script>
