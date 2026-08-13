<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <span class="text-xs font-semibold uppercase tracking-wider text-brand-400">Course Management</span>
        <h1 class="text-xl font-bold text-white mt-0.5">CMS Courses Catalog</h1>
      </div>
      <BaseButton variant="primary" size="sm" @click="openCourseModal = true">
        ✨ Generate Course with AI
      </BaseButton>
    </div>

    <!-- Course List Table -->
    <div class="ui-card p-0 rounded-xl border border-zinc-800 overflow-hidden">
      <table class="w-full text-left text-xs text-zinc-300">
        <thead class="bg-zinc-900 text-zinc-400 uppercase font-semibold text-[11px] border-b border-zinc-800">
          <tr>
            <th class="px-5 py-3">Title</th>
            <th class="px-5 py-3">Category</th>
            <th class="px-5 py-3">Modules</th>
            <th class="px-5 py-3">Status</th>
            <th class="px-5 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-zinc-800/80">
          <tr v-for="c in courses" :key="c.id" class="hover:bg-zinc-900/40 transition-colors">
            <td class="px-5 py-3.5 font-bold text-white max-w-xs truncate">{{ c.title }}</td>
            <td class="px-5 py-3.5"><BaseBadge variant="brand" size="sm">{{ c.category }}</BaseBadge></td>
            <td class="px-5 py-3.5">{{ c.modules.length }} Modules</td>
            <td class="px-5 py-3.5"><span class="text-emerald-400 font-semibold">● Published</span></td>
            <td class="px-5 py-3.5 text-right">
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
