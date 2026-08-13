<template>
  <div class="min-h-screen flex flex-col bg-[#070A13] text-slate-100 font-sans">
    <!-- Admin Top Bar -->
    <header class="h-16 border-b border-slate-800 bg-[#0B0F19] px-6 flex items-center justify-between sticky top-0 z-30">
      <div class="flex items-center gap-4">
        <NuxtLink to="/" class="flex items-center gap-2 font-display font-bold text-white text-base">
          <span class="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center text-xs font-black">LF</span>
          <span>LearnFlow <span class="text-amber-400 text-xs uppercase font-mono px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">CMS Admin</span></span>
        </NuxtLink>
      </div>

      <div class="flex items-center gap-4 text-xs">
        <NuxtLink to="/admin" class="text-slate-300 hover:text-white" active-class="text-amber-400 font-semibold">
          Overview & Analytics
        </NuxtLink>
        <NuxtLink to="/admin/courses" class="text-slate-300 hover:text-white" active-class="text-amber-400 font-semibold">
          Course Manager
        </NuxtLink>
        <NuxtLink to="/admin/content" class="text-slate-300 hover:text-white" active-class="text-amber-400 font-semibold">
          Prismic CMS Pages
        </NuxtLink>
        <NuxtLink to="/admin/seo" class="text-slate-300 hover:text-white" active-class="text-amber-400 font-semibold">
          SEO Audit
        </NuxtLink>

        <NuxtLink to="/">
          <BaseButton variant="outline" size="sm">
            ← Exit Admin
          </BaseButton>
        </NuxtLink>
      </div>
    </header>

    <div class="flex-1 max-w-7xl w-full mx-auto p-6 sm:p-8">
      <slot />
    </div>

    <footer class="py-6 border-t border-slate-800/60 text-center text-xs text-slate-500">
      LearnFlow AI Admin Portal • Vue 3 + Nuxt 3 + Prismic Studio Integration Simulator
    </footer>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue';
</script>
