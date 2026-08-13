<template>
  <div class="glass-card rounded-2xl overflow-hidden flex flex-col group h-full">
    <!-- Thumbnail Image Container -->
    <div class="relative aspect-video overflow-hidden bg-slate-900">
      <img 
        :src="course.thumbnail" 
        :alt="course.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60"></div>
      
      <!-- Category Badge -->
      <div class="absolute top-3 left-3">
        <BaseBadge :variant="getCategoryVariant(course.category)" size="sm">
          {{ course.category }}
        </BaseBadge>
      </div>

      <!-- Difficulty Tag -->
      <div class="absolute top-3 right-3">
        <span class="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-slate-900/80 backdrop-blur-md text-slate-300 border border-slate-700">
          {{ course.difficulty }}
        </span>
      </div>
    </div>

    <!-- Card Body -->
    <div class="p-5 flex-1 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 text-xs text-amber-400 font-medium mb-2">
          <span>★ {{ course.rating }}</span>
          <span class="text-slate-500">({{ course.reviewCount }} reviews)</span>
          <span class="text-slate-600">•</span>
          <span class="text-slate-400">{{ course.durationHours }} hrs</span>
        </div>

        <NuxtLink :to="`/courses/${course.slug}`" class="block group-hover:text-brand-400 transition-colors">
          <h3 class="text-lg font-bold text-white line-clamp-2 leading-snug mb-2">
            {{ course.title }}
          </h3>
        </NuxtLink>

        <p class="text-slate-400 text-xs line-clamp-2 mb-4 leading-relaxed">
          {{ course.subtitle }}
        </p>
      </div>

      <!-- Footer Instructor Info & CTA -->
      <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-auto">
        <div class="flex items-center gap-2.5">
          <img 
            :src="course.instructorAvatar" 
            :alt="course.instructorName"
            class="w-7 h-7 rounded-full object-cover border border-slate-700" 
          />
          <div class="text-xs">
            <p class="text-slate-200 font-medium leading-none">{{ course.instructorName }}</p>
          </div>
        </div>

        <NuxtLink 
          :to="`/courses/${course.slug}`"
          class="text-xs font-semibold text-brand-400 hover:text-brand-300 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
        >
          Explore
          <span>→</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Course } from '~/types';
import BaseBadge from '~/components/ui/BaseBadge.vue';

defineProps<{
  course: Course;
}>();

function getCategoryVariant(category: Course['category']) {
  switch (category) {
    case 'AI & Data': return 'brand';
    case 'Frontend Engineering': return 'emerald';
    case 'Cybersecurity': return 'rose';
    default: return 'amber';
  }
}
</script>
