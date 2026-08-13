<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <span class="text-xs font-semibold uppercase tracking-wider text-amber-400">CMS Studio Overview</span>
        <h1 class="text-xl sm:text-2xl font-bold text-white mt-0.5">Platform Analytics & AI Activity</h1>
      </div>
      <NuxtLink to="/admin/courses">
        <BaseButton variant="primary" size="sm">Manage Courses</BaseButton>
      </NuxtLink>
    </div>

    <!-- Analytics Stat Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <div class="ui-card p-4 border-zinc-800">
        <span class="text-xs text-zinc-400 font-medium">Total Site Visitors</span>
        <h3 class="text-xl font-bold text-white mt-1">{{ metrics.totalVisitors.toLocaleString() }}</h3>
        <span class="text-[11px] text-emerald-400 font-semibold mt-0.5 inline-block">↑ +14.2% this week</span>
      </div>

      <div class="ui-card p-4 border-zinc-800">
        <span class="text-xs text-zinc-400 font-medium">Course Detail Views</span>
        <h3 class="text-xl font-bold text-white mt-1">{{ metrics.courseViews.toLocaleString() }}</h3>
        <span class="text-[11px] text-emerald-400 font-semibold mt-0.5 inline-block">↑ +8.7% conversion</span>
      </div>

      <div class="ui-card p-4 border-zinc-800">
        <span class="text-xs text-zinc-400 font-medium">Total Enrollments</span>
        <h3 class="text-xl font-bold text-brand-300 mt-1">{{ metrics.enrollments.toLocaleString() }}</h3>
        <span class="text-[11px] text-brand-400 font-semibold mt-0.5 inline-block">{{ metrics.conversionRate }}% Conversion Rate</span>
      </div>

      <div class="ui-card p-4 border-zinc-800">
        <span class="text-xs text-zinc-400 font-medium">Active Learners Today</span>
        <h3 class="text-xl font-bold text-amber-400 mt-1">{{ metrics.activeLearners.toLocaleString() }}</h3>
        <span class="text-[11px] text-amber-400 font-semibold mt-0.5 inline-block">● Real-time active</span>
      </div>
    </div>

    <!-- Activity Log & AI Tools Sidebar -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 ui-card p-6 border-zinc-800 space-y-4">
        <h3 class="text-sm font-bold text-white">Live Platform Activity Stream</h3>

        <div class="space-y-2.5">
          <div 
            v-for="ev in recentEvents" 
            :key="ev.id" 
            class="p-3 bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-between text-xs"
          >
            <div class="flex items-center gap-2.5">
              <span class="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
              <span class="text-zinc-200 font-medium">{{ ev.details }}</span>
            </div>
            <span class="text-zinc-500 font-mono text-[11px]">{{ ev.timestamp }}</span>
          </div>
        </div>
      </div>

      <!-- Quick AI Tool Launchers -->
      <div class="ui-card p-6 border-zinc-800 space-y-4">
        <h3 class="text-sm font-bold text-white">AI Content Tools</h3>
        <p class="text-xs text-zinc-400">Launch AI automation workflows for your marketing and course team.</p>

        <div class="space-y-2.5 pt-1">
          <BaseButton variant="primary" size="md" full-width @click="openCourseModal = true">
            ✨ AI Course Generator
          </BaseButton>
          <BaseButton variant="emerald" size="md" full-width @click="openCopyModal = true">
            ✍️ AI Marketing Copywriter
          </BaseButton>
          <BaseButton variant="outline" size="md" full-width @click="openSeoModal = true">
            🔍 AI SEO Assistant
          </BaseButton>
        </div>
      </div>
    </div>

    <!-- Modals -->
    <CourseGeneratorModal :is-open="openCourseModal" @close="openCourseModal = false" />
    <MarketingCopyModal :is-open="openCopyModal" @close="openCopyModal = false" />
    <SEOAssistantModal :is-open="openSeoModal" @close="openSeoModal = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAnalytics } from '~/composables/useAnalytics';
import BaseButton from '~/components/ui/BaseButton.vue';
import CourseGeneratorModal from '~/components/ai/CourseGeneratorModal.vue';
import MarketingCopyModal from '~/components/ai/MarketingCopyModal.vue';
import SEOAssistantModal from '~/components/ai/SEOAssistantModal.vue';

definePageMeta({ layout: 'admin' });

const { metrics, recentEvents } = useAnalytics();

const openCourseModal = ref(false);
const openCopyModal = ref(false);
const openSeoModal = ref(false);
</script>
