<template>
  <div class="ui-card p-0 rounded-xl overflow-hidden flex flex-col group h-full">
    <!-- Image Header -->
    <div class="relative aspect-video overflow-hidden bg-zinc-900">
      <img 
        :src="course.thumbnail" 
        :alt="course.title"
        class="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 ease-out"
        loading="lazy"
      />
      
      <!-- Category Badge -->
      <div class="absolute top-3 left-3">
        <BaseBadge :variant="getCategoryVariant(course.category)" size="sm">
          {{ course.category }}
        </BaseBadge>
      </div>

      <!-- Difficulty Tag -->
      <div class="absolute top-3 right-3">
        <span class="px-2 py-0.5 text-[11px] font-semibold rounded-md bg-zinc-950/80 backdrop-blur-xs text-zinc-300 border border-zinc-800">
          {{ course.difficulty }}
        </span>
      </div>
    </div>

    <!-- Content Body -->
    <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
      <div>
        <div class="flex items-center gap-2 text-xs text-amber-400 font-medium mb-2">
          <span>★ {{ course.rating }}</span>
          <span class="text-zinc-500">({{ course.reviewCount }} reviews)</span>
          <span class="text-zinc-600">•</span>
          <span class="text-zinc-400">{{ course.durationHours }} hrs</span>
        </div>

        <NuxtLink :to="`/courses/${course.slug}`" class="block group-hover:text-brand-300 transition-colors">
          <h3 class="text-base font-bold text-white line-clamp-2 leading-snug mb-1.5">
            {{ course.title }}
          </h3>
        </NuxtLink>

        <p class="text-zinc-400 text-xs line-clamp-2 leading-relaxed">
          {{ course.subtitle }}
        </p>
      </div>

      <!-- Footer Instructor Info & Action -->
      <div class="pt-3.5 border-t border-zinc-800/80 flex items-center justify-between mt-auto">
        <div class="flex items-center gap-2.5">
          <img 
            :src="course.instructorAvatar" 
            :alt="course.instructorName"
            class="w-6 h-6 rounded-full object-cover border border-zinc-700" 
          />
          <span class="text-xs text-zinc-300 font-medium">{{ course.instructorName }}</span>
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
