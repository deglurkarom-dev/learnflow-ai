<template>
  <div class="ui-card p-4 rounded-xl border border-zinc-800 space-y-3.5">
    <!-- Top Search Input -->
    <div class="relative">
      <input
        v-model="internalQuery"
        type="text"
        placeholder="Search courses, skills, topics (e.g. Vue 3, AI, Cybersecurity)..."
        class="ui-input w-full pl-10 pr-4 py-2.5 text-xs placeholder-zinc-500"
        @input="onInput"
      />
      <svg class="w-4 h-4 absolute left-3.5 top-3 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <button 
        v-if="internalQuery" 
        class="absolute right-3.5 top-3 text-zinc-500 hover:text-white transition-colors"
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
            'px-2.5 py-1 rounded-md border text-[11px] font-medium transition-colors cursor-pointer interactive-press focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
            modelCategory === cat
              ? 'bg-brand-600 border-brand-500 text-white'
              : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
          ]"
          @click="$emit('update:category', cat)"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Difficulty & Sort Controls -->
      <div class="flex items-center gap-2.5">
        <select
          :value="modelDifficulty"
          class="ui-input px-2.5 py-1 text-[11px] text-zinc-300"
          @change="$emit('update:difficulty', ($event.target as HTMLSelectElement).value)"
        >
          <option value="All">All Difficulties</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <select
          :value="modelSort"
          class="ui-input px-2.5 py-1 text-[11px] text-zinc-300"
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
