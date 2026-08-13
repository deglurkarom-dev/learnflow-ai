<template>
  <div>
    <!-- SECTION 1: HERO -->
    <section class="relative pt-20 pb-28 overflow-hidden bg-gradient-to-b from-[#070A13] via-[#0B0F1E] to-[#070A13]">
      <!-- Background Ambient Glow -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-3xl mx-auto space-y-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-semibold shadow-sm">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Next-Gen Enterprise EdTech CMS</span>
          </div>

          <h1 class="font-display text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.15]">
            AI-Powered Learning & <span class="bg-gradient-to-r from-brand-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">Marketing Platform</span>
          </h1>

          <p class="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Empower your squads to build courses, write high-converting copy, and optimize technical SEO metadata automatically using our Prismic-driven AI engine.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
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
        <div class="mt-16 max-w-4xl mx-auto glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl">
          <div class="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span class="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span class="ml-2 text-xs font-mono text-slate-400">learnflow-ai-sandbox.vue</span>
            </div>
            <span class="text-xs font-semibold text-brand-400 bg-brand-500/10 px-2.5 py-0.5 rounded-md">Live Interactive Preview</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div 
              class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-brand-500/50 transition cursor-pointer"
              @click="openCourseModal = true"
            >
              <div class="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center font-bold text-sm mb-3">01</div>
              <h3 class="text-sm font-bold text-white mb-1">AI Course Creator</h3>
              <p class="text-xs text-slate-400">Generate full multi-module curriculum, lessons & quizzes instantly.</p>
            </div>

            <div 
              class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition cursor-pointer"
              @click="openCopyModal = true"
            >
              <div class="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm mb-3">02</div>
              <h3 class="text-sm font-bold text-white mb-1">Marketing Copywriter</h3>
              <p class="text-xs text-slate-400">Generate high-converting headlines, social copy & email teasers.</p>
            </div>

            <div 
              class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition cursor-pointer"
              @click="openSeoModal = true"
            >
              <div class="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm mb-3">03</div>
              <h3 class="text-sm font-bold text-white mb-1">SEO & Schema Assistant</h3>
              <p class="text-xs text-slate-400">Auto-generate title tags, meta tags & JSON-LD structured data.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: PRODUCT EXPLANATION & FEATURES -->
    <section class="py-20 bg-[#070A13]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span class="text-xs font-semibold uppercase tracking-wider text-brand-400">Built for Modern SaaS Squads</span>
          <h2 class="font-display text-3xl font-bold text-white">Why LearnFlow AI?</h2>
          <p class="text-slate-400 text-sm">Combining Vue 3 reactivity, Nuxt 3 server performance, and AI content creation into one seamless platform.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="glass-card p-6 rounded-2xl">
            <div class="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center text-xl mb-4 font-bold">⚡</div>
            <h3 class="text-lg font-bold text-white mb-2">Prismic CMS Integration</h3>
            <p class="text-slate-400 text-sm leading-relaxed">Marketing teams manage custom slices, blog posts, and landing page copy effortlessly while developers retain full Vue 3 component control.</p>
          </div>

          <div class="glass-card p-6 rounded-2xl">
            <div class="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xl mb-4 font-bold">🔍</div>
            <h3 class="text-lg font-bold text-white mb-2">Technical SEO & GEO Engine</h3>
            <p class="text-slate-400 text-sm leading-relaxed">Dynamic meta tags, OpenGraph cards, XML sitemaps, and Schema.org JSON-LD tags automatically structured for search engine crawlers.</p>
          </div>

          <div class="glass-card p-6 rounded-2xl">
            <div class="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-xl mb-4 font-bold">🤖</div>
            <h3 class="text-lg font-bold text-white mb-2">Triple AI Assistant Suite</h3>
            <p class="text-slate-400 text-sm leading-relaxed">Integrated course generators, copywriters, and SEO tag assistants built into your Nuxt server routes for maximum team velocity.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: COURSE SHOWCASE -->
    <section class="py-20 bg-[#0B0F1E] border-y border-slate-800/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-12">
          <div>
            <span class="text-xs font-semibold uppercase tracking-wider text-emerald-400">Featured Curriculum</span>
            <h2 class="font-display text-2xl sm:text-3xl font-bold text-white mt-1">Featured Courses</h2>
          </div>
          <NuxtLink to="/courses" class="text-xs font-semibold text-brand-400 hover:text-brand-300 flex items-center gap-1">
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
    <section class="py-20 bg-[#070A13]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-xs font-semibold uppercase tracking-wider text-brand-400">Engineering Feedback</span>
          <h2 class="font-display text-3xl font-bold text-white mt-1">Loved by Web & Content Engineers</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div class="glass-card p-6 rounded-2xl">
            <p class="text-slate-300 text-sm italic mb-4 leading-relaxed">
              "LearnFlow AI mirrors the exact marketing-engineering workflow we use at scale. The Vue 3 Composition API setup and AI SEO assistant saved our content team dozens of manual hours."
            </p>
            <div class="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" class="w-10 h-10 rounded-full object-cover" />
              <div>
                <h4 class="text-sm font-bold text-white">Claire Dupont</h4>
                <p class="text-xs text-slate-500">Lead Website Engineer @ EdTech Scaleup</p>
              </div>
            </div>
          </div>

          <div class="glass-card p-6 rounded-2xl">
            <p class="text-slate-300 text-sm italic mb-4 leading-relaxed">
              "Having Vitest unit tests, Playwright E2E automation, and Nuxt Nitro server routes out of the box makes this architecture completely enterprise-ready."
            </p>
            <div class="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" class="w-10 h-10 rounded-full object-cover" />
              <div>
                <h4 class="text-sm font-bold text-white">David Miller</h4>
                <p class="text-xs text-slate-500">Principal Staff Architect</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5: CTA -->
    <section class="py-20 bg-gradient-to-r from-brand-900/60 via-indigo-900/50 to-brand-950/80 border-t border-slate-800">
      <div class="max-w-5xl mx-auto px-4 text-center space-y-6">
        <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-white">Ready to Transform Your EdTech Platform?</h2>
        <p class="text-slate-300 text-base max-w-2xl mx-auto">Explore our courses or switch to Admin CMS mode to test the AI Content Engine live.</p>
        <div class="flex justify-center gap-4 pt-2">
          <NuxtLink to="/courses">
            <BaseButton variant="emerald" size="lg">Get Started Now</BaseButton>
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
