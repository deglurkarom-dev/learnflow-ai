<template>
  <footer class="bg-[#04060C] border-t border-slate-800/80 pt-16 pb-12 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
        <!-- Col 1: Brand Info -->
        <div class="md:col-span-2 space-y-4">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-black text-sm">
              LF
            </div>
            <span class="font-display font-black text-xl text-white">LearnFlow<span class="text-brand-400">.AI</span></span>
          </div>
          <p class="text-slate-400 text-sm max-w-sm leading-relaxed">
            The next-generation AI-powered learning and marketing platform. CMS-driven course creation, SEO metadata assistant, and custom learner analytics.
          </p>
          <div class="flex items-center gap-3 text-slate-500 text-xs pt-2">
            <span>Powered by Vue 3 + Nuxt 3 + Prismic</span>
          </div>
        </div>

        <!-- Col 2: Platform -->
        <div>
          <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">Platform</h4>
          <ul class="space-y-2.5 text-sm text-slate-400">
            <li><NuxtLink to="/courses" class="hover:text-white transition">Course Catalog</NuxtLink></li>
            <li><NuxtLink to="/dashboard" class="hover:text-white transition">Learner Dashboard</NuxtLink></li>
            <li><NuxtLink to="/pricing" class="hover:text-white transition">Pricing Plans</NuxtLink></li>
            <li><NuxtLink to="/blog" class="hover:text-white transition">Prismic Blog</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 3: AI Tools (Admin) -->
        <div>
          <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">AI Features</h4>
          <ul class="space-y-2.5 text-sm text-slate-400">
            <li><NuxtLink to="/admin/courses" class="hover:text-white transition">AI Course Generator</NuxtLink></li>
            <li><NuxtLink to="/admin/content" class="hover:text-white transition">AI Marketing Copywriter</NuxtLink></li>
            <li><NuxtLink to="/admin/seo" class="hover:text-white transition">AI SEO Assistant</NuxtLink></li>
            <li><NuxtLink to="/admin" class="hover:text-white transition">CMS Dashboard</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 4: Technical Specs -->
        <div>
          <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">Architecture</h4>
          <ul class="space-y-2.5 text-sm text-slate-400">
            <li><span class="text-brand-400 font-mono text-xs">Vue 3 Composition API</span></li>
            <li><span class="text-indigo-400 font-mono text-xs">Nuxt 3 Nitro Engine</span></li>
            <li><span class="text-emerald-400 font-mono text-xs">Technical SEO & Schema</span></li>
            <li><span class="text-amber-400 font-mono text-xs">Vitest + Playwright</span></li>
          </ul>
        </div>
      </div>

      <div class="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© 2026 LearnFlow AI. Built as a production proof-of-work for Vue 3 + Nuxt 3 + Prismic SaaS application.</p>
        <div class="flex gap-6">
          <NuxtLink to="/contact" class="hover:text-slate-400">Contact</NuxtLink>
          <a href="/sitemap.xml" target="_blank" class="hover:text-slate-400">Sitemap (XML)</a>
          <a href="/robots.txt" target="_blank" class="hover:text-slate-400">Robots.txt</a>
        </div>
      </div>
    </div>
  </footer>
</template>
