<template>
  <div class="space-y-8">
    <div class="flex items-center justify-between">
      <div>
        <span class="text-xs font-semibold uppercase tracking-wider text-brand-400">Course Management</span>
        <h1 class="text-2xl font-bold text-white mt-1">CMS Courses Catalog</h1>
      </div>
      <BaseButton variant="primary" size="sm" @click="openCourseModal = true">
        ✨ Generate Course with AI
      </BaseButton>
    </div>

    <!-- Course List Table -->
    <div class="glass-panel rounded-2xl border border-slate-800 overflow-hidden">
      <table class="w-full text-left text-xs text-slate-300">
        <thead class="bg-slate-900/80 text-slate-400 uppercase font-semibold text-[11px] border-b border-slate-800">
          <tr>
            <th class="px-6 py-4">Title</th>
            <th class="px-6 py-4">Category</th>
            <th class="px-6 py-4">Modules</th>
            <th class="px-6 py-4">Status</th>
            <th class="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-800/80">
          <tr v-for="c in courses" :key="c.id" class="hover:bg-slate-900/40 transition">
            <td class="px-6 py-4 font-bold text-white max-w-xs truncate">{{ c.title }}</td>
            <td class="px-6 py-4"><BaseBadge variant="brand" size="sm">{{ c.category }}</BaseBadge></td>
            <td class="px-6 py-4">{{ c.modules.length }} Modules</td>
            <td class="px-6 py-4"><span class="text-emerald-400 font-semibold">● Published</span></td>
            <td class="px-6 py-4 text-right">
              <NuxtLink :to="`/courses/${c.slug}`" class="text-brand-400 hover:underline">
                View →
              </NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <CourseGeneratorModal :is-open="openCourseModal" @close="openCourseModal = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCourses } from '~/composables/useCourses';
import BaseButton from '~/components/ui/BaseButton.vue';
import BaseBadge from '~/components/ui/BaseBadge.vue';
import CourseGeneratorModal from '~/components/ai/CourseGeneratorModal.vue';

definePageMeta({ layout: 'admin' });

const { courses } = useCourses();
const openCourseModal = ref(false);
</script>
