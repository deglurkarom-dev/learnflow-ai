<template>
  <div class="glass-panel p-4 rounded-2xl border border-slate-800 space-y-4">
    <!-- Top Search Input -->
    <div class="relative">
      <input
        v-model="internalQuery"
        type="text"
        placeholder="Search courses, skills, topics (e.g. Vue 3, AI, Cybersecurity)..."
        class="w-full pl-11 pr-4 py-3 bg-slate-900/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-sm transition"
        @input="onInput"
      />
      <svg class="w-5 h-5 absolute left-3.5 top-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <button 
        v-if="internalQuery" 
        class="absolute right-3.5 top-3.5 text-slate-500 hover:text-white"
        @click="clearQuery"
      >
        ✕
      </button>
    </div>

    <!-- Filters Row -->
    <div class="flex flex-wrap items-center justify-between gap-3 text-xs">
      <!-- Category Chips -->
      <div class="flex flex-wrap items-center gap-1.5">
        <button
          v-for="cat in categories"
          :key="cat"
          :class="[
            'px-3 py-1.5 rounded-lg border transition font-medium',
            modelCategory === cat
              ? 'bg-brand-600 border-brand-500 text-white shadow-sm'
              : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
          ]"
          @click="$emit('update:category', cat)"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Difficulty & Sort Controls -->
      <div class="flex items-center gap-3">
        <select
          :value="modelDifficulty"
          class="bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-slate-300 text-xs focus:outline-none focus:border-brand-500"
          @change="$emit('update:difficulty', ($event.target as HTMLSelectElement).value)"
        >
          <option value="All">All Difficulties</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <select
          :value="modelSort"
          class="bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-slate-300 text-xs focus:outline-none focus:border-brand-500"
          @change="$emit('update:sort', ($event.target as HTMLSelectElement).value)"
        >
          <option value="popular">Most Popular</option>
          <option value="rating">Highest Rated</option>
          <option value="newest">Newest Releases</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  query: string;
  category: string;
  difficulty: string;
  sort: string;
}>();

const emit = defineEmits<{
  (e: 'update:query', val: string): void;
  (e: 'update:category', val: string): void;
  (e: 'update:difficulty', val: string): void;
  (e: 'update:sort', val: string): void;
}>();

const categories = ['All', 'Frontend Engineering', 'AI & Data', 'Cybersecurity'];
const internalQuery = ref(props.query);
const modelCategory = ref(props.category);
const modelDifficulty = ref(props.difficulty);
const modelSort = ref(props.sort);

let debounceTimer: any = null;

function onInput() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    emit('update:query', internalQuery.value);
  }, 250);
}

function clearQuery() {
  internalQuery.value = '';
  emit('update:query', '');
}

watch(() => props.category, val => modelCategory.value = val);
watch(() => props.difficulty, val => modelDifficulty.value = val);
watch(() => props.sort, val => modelSort.value = val);
</script>
