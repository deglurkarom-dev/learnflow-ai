<template>
  <footer class="bg-[#070709] border-t border-zinc-800/80 pt-14 pb-10 mt-auto text-zinc-400">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
        <!-- Col 1: Brand Info -->
        <div class="md:col-span-2 space-y-3">
          <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
              LF
            </div>
            <span class="font-display font-bold text-lg text-white">LearnFlow<span class="text-indigo-400">.AI</span></span>
          </div>
          <p class="text-zinc-400 text-xs max-w-sm leading-relaxed">
            Next-generation AI learning & marketing platform built with Vue 3, Nuxt 3, Prismic CMS, and automated technical SEO workflows.
          </p>
        </div>

        <!-- Col 2: Platform -->
        <div>
          <h4 class="text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-3">Platform</h4>
          <ul class="space-y-2 text-xs">
            <li><NuxtLink to="/courses" class="hover:text-white transition-colors">Course Catalog</NuxtLink></li>
            <li><NuxtLink to="/dashboard" class="hover:text-white transition-colors">Learner Dashboard</NuxtLink></li>
            <li><NuxtLink to="/pricing" class="hover:text-white transition-colors">Pricing Plans</NuxtLink></li>
            <li><NuxtLink to="/blog" class="hover:text-white transition-colors">Prismic Blog</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 3: AI Tools (Admin) -->
        <div>
          <h4 class="text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-3">AI Features</h4>
          <ul class="space-y-2 text-xs">
            <li><NuxtLink to="/admin/courses" class="hover:text-white transition-colors">AI Course Generator</NuxtLink></li>
            <li><NuxtLink to="/admin/content" class="hover:text-white transition-colors">AI Marketing Copywriter</NuxtLink></li>
            <li><NuxtLink to="/admin/seo" class="hover:text-white transition-colors">AI SEO Assistant</NuxtLink></li>
            <li><NuxtLink to="/admin" class="hover:text-white transition-colors">CMS Overview</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 4: Technical Specs -->
        <div>
          <h4 class="text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-3">Architecture</h4>
          <ul class="space-y-2 text-xs">
            <li><span class="text-zinc-300 font-mono text-[11px]">Vue 3 Composition API</span></li>
            <li><span class="text-zinc-300 font-mono text-[11px]">Nuxt 3 Nitro Engine</span></li>
            <li><span class="text-zinc-300 font-mono text-[11px]">Technical SEO & Schema</span></li>
            <li><span class="text-zinc-300 font-mono text-[11px]">Vitest + Playwright</span></li>
          </ul>
        </div>
      </div>

      <div class="pt-6 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
        <p>© 2026 LearnFlow AI. Built as a production application for Vue 3 + Nuxt 3 + Prismic stack.</p>
        <div class="flex gap-5">
          <NuxtLink to="/contact" class="hover:text-zinc-300 transition-colors">Contact</NuxtLink>
          <a href="/sitemap.xml" target="_blank" class="hover:text-zinc-300 transition-colors">Sitemap</a>
          <a href="/robots.txt" target="_blank" class="hover:text-zinc-300 transition-colors">Robots.txt</a>
        </div>
      </div>
    </div>
  </footer>
</template>
