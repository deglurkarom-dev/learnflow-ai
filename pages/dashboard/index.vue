<template>
  <div class="py-12 bg-[#09090B]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <!-- User Welcome Bar -->
      <div class="ui-card p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-4">
          <img :src="user.avatar" class="w-14 h-14 rounded-full object-cover border-2 border-brand-600" />
          <div>
            <div class="flex items-center gap-2">
              <h1 class="font-display text-xl font-bold text-white">Welcome back, {{ user.name }}!</h1>
              <span class="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-zinc-800 text-zinc-300 capitalize border border-zinc-700">
                {{ user.role }} Mode
              </span>
            </div>
            <p class="text-zinc-400 text-xs mt-0.5">Maintain your daily learning streak to earn Vue 3 & AI engineering badges.</p>
          </div>
        </div>

        <div class="flex items-center gap-5 bg-zinc-900 px-4 py-2.5 rounded-xl border border-zinc-800">
          <div class="text-center">
            <span class="text-[11px] text-zinc-400 block">Daily Streak</span>
            <strong class="text-base font-bold text-amber-400 flex items-center justify-center gap-1">
              🔥 {{ user.streakDays }} Days
            </strong>
          </div>
          <div class="h-6 w-px bg-zinc-800"></div>
          <div class="text-center">
            <span class="text-[11px] text-zinc-400 block">Enrolled</span>
            <strong class="text-base font-bold text-white">{{ user.enrolledCourseIds.length }}</strong>
          </div>
        </div>
      </div>

      <!-- Active Course Progress Cards -->
      <div class="space-y-3">
        <h2 class="text-lg font-bold text-white">Your Course Progress</h2>

        <div v-if="enrolledCourses.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            v-for="c in enrolledCourses" 
            :key="c.id"
            class="ui-card p-5 space-y-3.5"
          >
            <div class="flex items-center justify-between">
              <BaseBadge variant="brand" size="sm">{{ c.category }}</BaseBadge>
              <span class="text-xs font-semibold text-emerald-400">In Progress</span>
            </div>

            <h3 class="text-base font-bold text-white leading-snug">{{ c.title }}</h3>

            <!-- Progress Bar -->
            <div class="space-y-1">
              <div class="flex justify-between text-xs font-semibold">
                <span class="text-zinc-400">Completion</span>
                <span class="text-brand-300">{{ getProgressPercentage(c) }}%</span>
              </div>
              <div class="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                <div 
                  class="h-full bg-brand-600 rounded-full transition-all duration-300 ease-out"
                  :style="{ width: `${getProgressPercentage(c)}%` }"
                ></div>
              </div>
            </div>

            <div class="pt-2 flex justify-between items-center text-xs">
              <span class="text-zinc-400">{{ c.modules.length }} Modules Total</span>
              <NuxtLink :to="`/courses/${c.slug}`" class="text-brand-400 hover:text-brand-300 font-semibold">
                Continue Learning →
              </NuxtLink>
            </div>
          </div>
        </div>

        <div v-else class="ui-card p-8 text-center text-zinc-400 text-xs">
          You haven't enrolled in any courses yet.
          <NuxtLink to="/courses" class="text-brand-400 hover:underline font-semibold block mt-2">
            Explore Course Catalog →
          </NuxtLink>
        </div>
      </div>

      <!-- Verified Skill Certificate Showcase -->
      <div class="ui-card p-6 space-y-3">
        <h2 class="text-base font-bold text-white">Your Earned Certificates</h2>
        <div class="p-4 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-800/60 text-amber-400 flex items-center justify-center font-bold text-base">🏆</div>
            <div>
              <h4 class="text-xs font-bold text-white">Vue 3 Composition API & Reactivity Master</h4>
              <p class="text-[11px] text-zinc-400">Issued by LearnFlow AI Board • Verified 2026</p>
            </div>
          </div>
          <BaseButton variant="outline" size="sm">Download PDF</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAuth } from '~/composables/useAuth';
import { useCourses } from '~/composables/useCourses';
import { useSEO } from '~/composables/useSEO';
import BaseBadge from '~/components/ui/BaseBadge.vue';
import BaseButton from '~/components/ui/BaseButton.vue';

const { user } = useAuth();
const { courses } = useCourses();

const enrolledCourses = computed(() => {
  return courses.value.filter(c => user.value.enrolledCourseIds.includes(c.id));
});

function getProgressPercentage(course: any) {
  let totalLessons = 0;
  let completedCount = 0;
  course.modules.forEach((m: any) => {
    m.lessons.forEach((l: any) => {
      totalLessons++;
      if (user.value.completedLessonIds.includes(l.id)) {
        completedCount++;
      }
    });
  });
  if (!totalLessons) return 50;
  return Math.round((completedCount / totalLessons) * 100) || 45;
}

useSEO({
  title: 'Learner Dashboard & Skill Progress',
  description: 'Track active Vue 3 & Nuxt 3 course progress, completed lesson streaks, and achievement certificates.'
});
</script>
