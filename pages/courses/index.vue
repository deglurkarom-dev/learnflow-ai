<template>
  <div class="py-12 bg-[#09090B]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="mb-8 space-y-1.5">
        <span class="text-xs font-semibold uppercase tracking-wider text-indigo-400">Curriculum Catalog</span>
        <h1 class="font-display text-2xl sm:text-3xl font-extrabold text-white">Explore Courses & Skill Pathways</h1>
        <p class="text-zinc-400 text-xs max-w-2xl">
          Browse interactive masterclasses powered by Vue 3, Nuxt 3, TypeScript, Cybersecurity, and AI content strategy.
        </p>
      </div>

      <!-- Search & Multi-Filter Control -->
      <SearchBar 
        v-model:query="searchQuery" 
        v-model:category="selectedCategory"
        v-model:difficulty="selectedDifficulty"
        v-model:sort="sortBy"
        class="mb-8"
      />

      <!-- Course Count & Reset Option -->
      <div class="flex items-center justify-between mb-5 text-xs text-zinc-400">
        <span>Showing <strong class="text-white">{{ filteredCourses.length }}</strong> course(s)</span>
        <button 
          v-if="searchQuery || selectedCategory !== 'All' || selectedDifficulty !== 'All'"
          class="text-indigo-400 hover:underline"
          @click="resetFilters"
        >
          Reset Filters
        </button>
      </div>

      <!-- Course Grid -->
      <div v-if="filteredCourses.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CourseCard 
          v-for="course in filteredCourses" 
          :key="course.id" 
          :course="course" 
        />
      </div>

      <!-- Empty State -->
      <div v-else class="py-14 text-center surface-card my-8">
        <div class="w-12 h-12 rounded-full bg-zinc-900 mx-auto flex items-center justify-center text-zinc-500 text-xl mb-3 border border-zinc-800">🔍</div>
        <h3 class="text-base font-bold text-white mb-1">No courses found</h3>
        <p class="text-zinc-400 text-xs max-w-xs mx-auto mb-5">Try adjusting your search query or reset your filters.</p>
        <BaseButton variant="primary" size="sm" @click="resetFilters">Clear All Filters</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCourses } from '~/composables/useCourses';
import { useSEO } from '~/composables/useSEO';
import SearchBar from '~/components/SearchBar.vue';
import CourseCard from '~/components/CourseCard.vue';
import BaseButton from '~/components/ui/BaseButton.vue';

const { filteredCourses, searchQuery, selectedCategory, selectedDifficulty, sortBy } = useCourses();

function resetFilters() {
  searchQuery.value = '';
  selectedCategory.value = 'All';
  selectedDifficulty.value = 'All';
  sortBy.value = 'popular';
}

useSEO({
  title: 'Course Catalog & Learning Pathways',
  description: 'Explore interactive Vue 3, Nuxt 3, TypeScript, AI, and Cybersecurity courses with interactive quizzes and certificates.'
});
</script>
