<template>
  <div class="min-h-screen flex flex-col bg-[#09090B] text-zinc-100 font-sans">
    <!-- Admin Header -->
    <header class="h-15 border-b border-zinc-800 bg-[#0C0C0E] px-6 flex items-center justify-between sticky top-0 z-30">
      <div class="flex items-center gap-3">
        <NuxtLink to="/" class="flex items-center gap-2 font-display font-bold text-white text-sm">
          <span class="w-6 h-6 rounded bg-brand-600 flex items-center justify-center text-xs font-black">LF</span>
          <span>LearnFlow <span class="text-amber-400 text-[11px] uppercase font-mono px-1.5 py-0.5 rounded bg-amber-950/60 border border-amber-800/60">CMS Admin</span></span>
        </NuxtLink>
      </div>

      <div class="flex items-center gap-4 text-xs font-medium">
        <NuxtLink to="/admin" class="text-zinc-400 hover:text-white transition-colors" active-class="text-amber-400 font-semibold">
          Overview
        </NuxtLink>
        <NuxtLink to="/admin/courses" class="text-zinc-400 hover:text-white transition-colors" active-class="text-amber-400 font-semibold">
          Course Manager
        </NuxtLink>
        <NuxtLink to="/admin/content" class="text-zinc-400 hover:text-white transition-colors" active-class="text-amber-400 font-semibold">
          Prismic Pages
        </NuxtLink>
        <NuxtLink to="/admin/seo" class="text-zinc-400 hover:text-white transition-colors" active-class="text-amber-400 font-semibold">
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

    <footer class="py-5 border-t border-zinc-800/60 text-center text-xs text-zinc-500">
      LearnFlow AI Admin Portal • Vue 3 + Nuxt 3 + Prismic Studio Integration Simulator
    </footer>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue';
</script>
