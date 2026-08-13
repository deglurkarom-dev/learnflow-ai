<template>
  <div>
    <!-- SECTION 1: HERO -->
    <section class="relative pt-16 pb-24 border-b border-zinc-800/80 bg-[#09090B]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-3xl mx-auto space-y-5">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Enterprise EdTech CMS & AI Engine</span>
          </div>

          <h1 class="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            AI-Powered Learning & <span class="text-indigo-400">Marketing Platform</span>
          </h1>

          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Empower your engineering and marketing squads to build courses, write targeted copy, and automate technical SEO metadata with our Prismic-driven engine.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
            <NuxtLink to="/courses">
              <BaseButton variant="primary" size="lg">
                Explore Courses Catalog
                <span>→</span>
              </BaseButton>
            </NuxtLink>
            <BaseButton variant="outline" size="lg" @click="openCourseModal = true">
              ✨ Try AI Course Generator
            </BaseButton>
          </div>
        </div>

        <!-- Interactive AI Sandbox Hero Card -->
        <div class="mt-14 max-w-4xl mx-auto surface-card p-6 sm:p-8 rounded-2xl border border-zinc-800 shadow-card">
          <div class="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-5">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
              <span class="ml-2 text-xs font-mono text-zinc-500">learnflow-ai-sandbox</span>
            </div>
            <span class="text-[11px] font-semibold text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800/60">Live Preview</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div 
              class="p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 transition-colors cursor-pointer interactive-press"
              @click="openCourseModal = true"
            >
              <div class="w-7 h-7 rounded-md bg-indigo-950 text-indigo-400 border border-indigo-800/60 flex items-center justify-center font-bold text-xs mb-3">01</div>
              <h3 class="text-xs font-bold text-white mb-1">AI Course Creator</h3>
              <p class="text-xs text-zinc-400">Generate full multi-module curriculum, lessons & quizzes instantly.</p>
            </div>

            <div 
              class="p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 transition-colors cursor-pointer interactive-press"
              @click="openCopyModal = true"
            >
              <div class="w-7 h-7 rounded-md bg-emerald-950 text-emerald-400 border border-emerald-800/60 flex items-center justify-center font-bold text-xs mb-3">02</div>
              <h3 class="text-xs font-bold text-white mb-1">Marketing Copywriter</h3>
              <p class="text-xs text-zinc-400">Generate persona-targeted headlines, social copy & email teasers.</p>
            </div>

            <div 
              class="p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 transition-colors cursor-pointer interactive-press"
              @click="openSeoModal = true"
            >
              <div class="w-7 h-7 rounded-md bg-amber-950 text-amber-400 border border-amber-800/60 flex items-center justify-center font-bold text-xs mb-3">03</div>
              <h3 class="text-xs font-bold text-white mb-1">SEO & Schema Assistant</h3>
              <p class="text-xs text-zinc-400">Auto-generate title tags, meta tags & JSON-LD structured data.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: PRODUCT EXPLANATION & FEATURES -->
    <section class="py-16 bg-[#09090B] border-b border-zinc-800/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span class="text-xs font-semibold uppercase tracking-wider text-indigo-400">Built for Modern SaaS Squads</span>
          <h2 class="font-display text-2xl font-bold text-white">Why LearnFlow AI?</h2>
          <p class="text-zinc-400 text-xs">Vue 3 Composition API, Nuxt 3 Nitro performance, and AI content automation seamlessly integrated.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="surface-card p-6">
            <div class="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 text-indigo-400 flex items-center justify-center text-lg mb-4 font-bold">⚡</div>
            <h3 class="text-base font-bold text-white mb-1.5">Prismic CMS Integration</h3>
            <p class="text-zinc-400 text-xs leading-relaxed">Marketing teams manage custom page slices and blog posts while engineers retain full Vue 3 TypeScript control.</p>
          </div>

          <div class="surface-card p-6">
            <div class="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400 flex items-center justify-center text-lg mb-4 font-bold">🔍</div>
            <h3 class="text-base font-bold text-white mb-1.5">Technical SEO Engine</h3>
            <p class="text-zinc-400 text-xs leading-relaxed">Dynamic meta tags, OpenGraph cards, XML sitemaps, and Schema.org JSON-LD structured data generated automatically.</p>
          </div>

          <div class="surface-card p-6">
            <div class="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 text-amber-400 flex items-center justify-center text-lg mb-4 font-bold">🤖</div>
            <h3 class="text-base font-bold text-white mb-1.5">Triple AI Tool Suite</h3>
            <p class="text-zinc-400 text-xs leading-relaxed">Course generators, copywriters, and SEO tag assistants integrated into Nuxt server routes for maximum velocity.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: COURSE SHOWCASE -->
    <section class="py-16 bg-[#0B0B0E] border-b border-zinc-800/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-10">
          <div>
            <span class="text-xs font-semibold uppercase tracking-wider text-emerald-400">Curriculum Showcase</span>
            <h2 class="font-display text-2xl font-bold text-white mt-0.5">Featured Courses</h2>
          </div>
          <NuxtLink to="/courses" class="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
            View All Courses →
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CourseCard 
            v-for="c in featuredCourses" 
            :key="c.id" 
            :course="c" 
          />
        </div>
      </div>
    </section>

    <!-- SECTION 4: TESTIMONIALS -->
    <section class="py-16 bg-[#09090B]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="text-xs font-semibold uppercase tracking-wider text-indigo-400">Engineering Feedback</span>
          <h2 class="font-display text-2xl font-bold text-white mt-0.5">Trusted by Web & Content Engineers</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div class="surface-card p-6">
            <p class="text-zinc-300 text-xs italic mb-4 leading-relaxed">
              "LearnFlow AI mirrors the exact marketing-engineering workflow we use at scale. The Vue 3 Composition API setup and AI SEO assistant saved our content team dozens of manual hours."
            </p>
            <div class="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" class="w-8 h-8 rounded-full object-cover border border-zinc-700" />
              <div>
                <h4 class="text-xs font-bold text-white">Claire Dupont</h4>
                <p class="text-[11px] text-zinc-500">Lead Website Engineer</p>
              </div>
            </div>
          </div>

          <div class="surface-card p-6">
            <p class="text-zinc-300 text-xs italic mb-4 leading-relaxed">
              "Having Vitest unit tests, Playwright E2E automation, and Nuxt Nitro server routes out of the box makes this architecture completely enterprise-ready."
            </p>
            <div class="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" class="w-8 h-8 rounded-full object-cover border border-zinc-700" />
              <div>
                <h4 class="text-xs font-bold text-white">David Miller</h4>
                <p class="text-[11px] text-zinc-500">Principal Staff Architect</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5: CTA -->
    <section class="py-16 bg-zinc-900/60 border-t border-zinc-800">
      <div class="max-w-4xl mx-auto px-4 text-center space-y-4">
        <h2 class="font-display text-2xl sm:text-3xl font-extrabold text-white">Ready to Explore the Platform?</h2>
        <p class="text-zinc-400 text-xs max-w-xl mx-auto">Explore our courses or switch to Admin CMS mode to test the AI Content Engine live.</p>
        <div class="flex justify-center gap-3 pt-2">
          <NuxtLink to="/courses">
            <BaseButton variant="emerald" size="lg">Explore Platform</BaseButton>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Modals -->
    <CourseGeneratorModal :is-open="openCourseModal" @close="openCourseModal = false" />
    <MarketingCopyModal :is-open="openCopyModal" @close="openCopyModal = false" />
    <SEOAssistantModal :is-open="openSeoModal" @close="openSeoModal = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useCourses } from '~/composables/useCourses';
import { useSEO, buildCourseJsonLd } from '~/composables/useSEO';
import CourseCard from '~/components/CourseCard.vue';
import BaseButton from '~/components/ui/BaseButton.vue';
import CourseGeneratorModal from '~/components/ai/CourseGeneratorModal.vue';
import MarketingCopyModal from '~/components/ai/MarketingCopyModal.vue';
import SEOAssistantModal from '~/components/ai/SEOAssistantModal.vue';

const { courses } = useCourses();
const featuredCourses = computed(() => courses.value.slice(0, 3));

const openCourseModal = ref(false);
const openCopyModal = ref(false);
const openSeoModal = ref(false);

useSEO({
  title: 'AI-Powered Learning & Marketing Platform',
  description: 'A CMS-driven learning platform built with Nuxt 3, Vue 3, TypeScript, Prismic CMS, and AI tools for course generation and technical SEO.',
  jsonLdSchema: buildCourseJsonLd({
    title: 'LearnFlow AI Platform',
    description: 'Enterprise AI EdTech Learning and Marketing CMS'
  })
});
</script>
