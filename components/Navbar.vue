<template>
  <header class="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 bg-[#070A13]/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Brand Logo -->
      <NuxtLink to="/" class="flex items-center gap-2.5 group">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-500 to-emerald-400 p-0.5 shadow-glow group-hover:scale-105 transition-transform">
          <div class="w-full h-full bg-[#070A13] rounded-[10px] flex items-center justify-center font-black text-brand-400 text-lg">
            LF
          </div>
        </div>
        <div class="flex flex-col">
          <span class="font-display font-black text-lg tracking-tight text-white group-hover:text-brand-300 transition-colors">
            LearnFlow<span class="text-brand-400 font-extrabold">.AI</span>
          </span>
        </div>
      </NuxtLink>

      <!-- Center Navigation Links -->
      <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
        <NuxtLink 
          to="/courses" 
          class="text-slate-300 hover:text-white transition-colors"
          active-class="text-brand-400 font-semibold"
        >
          Courses
        </NuxtLink>
        <NuxtLink 
          to="/blog" 
          class="text-slate-300 hover:text-white transition-colors"
          active-class="text-brand-400 font-semibold"
        >
          Blog (Prismic)
        </NuxtLink>
        <NuxtLink 
          to="/dashboard" 
          class="text-slate-300 hover:text-white transition-colors"
          active-class="text-brand-400 font-semibold"
        >
          Dashboard
        </NuxtLink>
        <NuxtLink 
          to="/pricing" 
          class="text-slate-300 hover:text-white transition-colors"
          active-class="text-brand-400 font-semibold"
        >
          Pricing
        </NuxtLink>
        <NuxtLink 
          to="/about" 
          class="text-slate-300 hover:text-white transition-colors"
          active-class="text-brand-400 font-semibold"
        >
          About
        </NuxtLink>
      </nav>

      <!-- Right Actions (Role Toggle & Admin Switcher) -->
      <div class="flex items-center gap-3">
        <!-- Role Toggle Pill -->
        <button
          class="px-3 py-1.5 rounded-full text-xs font-semibold border flex items-center gap-2 transition-all cursor-pointer"
          :class="isAdmin ? 'bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500/20' : 'bg-brand-500/10 text-brand-300 border-brand-500/30 hover:bg-brand-500/20'"
          @click="toggleRole"
        >
          <span class="w-2 h-2 rounded-full" :class="isAdmin ? 'bg-amber-400 animate-pulse' : 'bg-brand-400'"></span>
          <span>Mode: {{ isAdmin ? 'Admin CMS' : 'Learner' }}</span>
        </button>

        <NuxtLink v-if="isAdmin" to="/admin" class="hidden sm:inline-block">
          <BaseButton variant="outline" size="sm">
            Admin CMS Portal
          </BaseButton>
        </NuxtLink>

        <NuxtLink to="/courses">
          <BaseButton variant="primary" size="sm">
            Explore Platform
          </BaseButton>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/useAuth';
import BaseButton from '~/components/ui/BaseButton.vue';

const { isAdmin, toggleRole } = useAuth();
</script>
