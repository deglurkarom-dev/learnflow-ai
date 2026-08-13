<template>
  <header class="sticky top-0 z-40 w-full bg-[#09090B]/90 backdrop-blur-md border-b border-zinc-800/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Brand Logo -->
      <NuxtLink to="/" class="flex items-center gap-2.5 group">
        <div class="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center font-black text-indigo-400 text-sm group-hover:border-indigo-500 transition-colors">
          LF
        </div>
        <div class="flex flex-col">
          <span class="font-display font-bold text-base tracking-tight text-white group-hover:text-zinc-200 transition-colors">
            LearnFlow<span class="text-indigo-400 font-extrabold">.AI</span>
          </span>
        </div>
      </NuxtLink>

      <!-- Center Navigation Links -->
      <nav class="hidden md:flex items-center gap-6 text-xs font-medium">
        <NuxtLink 
          to="/courses" 
          class="text-zinc-400 hover:text-white transition-colors"
          active-class="text-white font-semibold"
        >
          Courses
        </NuxtLink>
        <NuxtLink 
          to="/blog" 
          class="text-zinc-400 hover:text-white transition-colors"
          active-class="text-white font-semibold"
        >
          Blog (Prismic)
        </NuxtLink>
        <NuxtLink 
          to="/dashboard" 
          class="text-zinc-400 hover:text-white transition-colors"
          active-class="text-white font-semibold"
        >
          Dashboard
        </NuxtLink>
        <NuxtLink 
          to="/pricing" 
          class="text-zinc-400 hover:text-white transition-colors"
          active-class="text-white font-semibold"
        >
          Pricing
        </NuxtLink>
        <NuxtLink 
          to="/about" 
          class="text-zinc-400 hover:text-white transition-colors"
          active-class="text-white font-semibold"
        >
          About
        </NuxtLink>
      </nav>

      <!-- Right Actions (Role Toggle & Admin Switcher) -->
      <div class="flex items-center gap-3">
        <!-- Role Toggle Button -->
        <button
          class="px-3 py-1.5 rounded-md text-xs font-medium border flex items-center gap-2 transition-all cursor-pointer interactive-press select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          :class="isAdmin ? 'bg-amber-950/40 text-amber-300 border-amber-800/60 hover:bg-amber-900/40' : 'bg-zinc-850 text-zinc-300 border-zinc-700/80 hover:bg-zinc-800'"
          @click="toggleRole"
        >
          <span class="w-1.5 h-1.5 rounded-full" :class="isAdmin ? 'bg-amber-400' : 'bg-indigo-400'"></span>
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
