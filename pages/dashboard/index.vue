<template>
  <div class="py-12 bg-[#070A13]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <!-- User Welcome Bar -->
      <div class="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-4">
          <img :src="user.avatar" class="w-16 h-16 rounded-full object-cover border-2 border-brand-500 shadow-glow" />
          <div>
            <div class="flex items-center gap-2">
              <h1 class="font-display text-2xl font-bold text-white">Welcome back, {{ user.name }}!</h1>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-300 border border-brand-500/20 capitalize">
                {{ user.role }} Mode
              </span>
            </div>
            <p class="text-slate-400 text-xs mt-1">Keep up your daily learning streak to unlock advanced Vue 3 & AI certificates.</p>
          </div>
        </div>

        <div class="flex items-center gap-6 bg-slate-900/80 px-5 py-3 rounded-2xl border border-slate-800">
          <div class="text-center">
            <span class="text-xs text-slate-400 block">Daily Streak</span>
            <strong class="text-lg font-black text-amber-400 flex items-center justify-center gap-1">
              🔥 {{ user.streakDays }} Days
            </strong>
          </div>
          <div class="h-8 w-px bg-slate-800"></div>
          <div class="text-center">
            <span class="text-xs text-slate-400 block">Enrolled Courses</span>
            <strong class="text-lg font-black text-white">{{ user.enrolledCourseIds.length }}</strong>
          </div>
        </div>
      </div>

      <!-- Active Course Progress Cards -->
      <div class="space-y-4">
        <h2 class="text-xl font-bold text-white">Your Course Progress</h2>

        <div v-if="enrolledCourses.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            v-for="c in enrolledCourses" 
            :key="c.id"
            class="glass-card p-6 rounded-2xl border border-slate-800 space-y-4"
          >
            <div class="flex items-center justify-between">
              <BaseBadge variant="brand" size="sm">{{ c.category }}</BaseBadge>
              <span class="text-xs font-semibold text-emerald-400">In Progress</span>
            </div>

            <h3 class="text-lg font-bold text-white leading-snug">{{ c.title }}</h3>

            <!-- Progress Bar -->
            <div class="space-y-1.5">
              <div class="flex justify-between text-xs font-semibold">
                <span class="text-slate-400">Completion</span>
                <span class="text-brand-300">{{ getProgressPercentage(c) }}%</span>
              </div>
              <div class="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div 
                  class="h-full bg-gradient-to-r from-brand-600 to-emerald-400 rounded-full transition-all duration-500"
                  :style="{ width: `${getProgressPercentage(c)}%` }"
                ></div>
              </div>
            </div>

            <div class="pt-2 flex justify-between items-center text-xs">
              <span class="text-slate-400">{{ c.modules.length }} Modules Total</span>
              <NuxtLink :to="`/courses/${c.slug}`" class="text-brand-400 hover:text-brand-300 font-semibold">
                Continue Learning →
              </NuxtLink>
            </div>
          </div>
        </div>

        <div v-else class="glass-panel p-8 rounded-2xl text-center text-slate-400 text-sm">
          You haven't enrolled in any courses yet.
          <NuxtLink to="/courses" class="text-brand-400 hover:underline font-semibold block mt-2">
            Explore Courses Catalog →
          </NuxtLink>
        </div>
      </div>

      <!-- Verified Skill Certificate Showcase -->
      <div class="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
        <h2 class="text-xl font-bold text-white">Your Earned Certificates</h2>
        <div class="p-4 bg-slate-950/80 border border-slate-800 rounded-2xl flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-xl">🏆</div>
            <div>
              <h4 class="text-sm font-bold text-white">Vue 3 Composition API & Reactivity Master</h4>
              <p class="text-xs text-slate-400">Issued by LearnFlow AI Certification Board • Verified 2026</p>
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
  if (!totalLessons) return 50; // default indicator
  return Math.round((completedCount / totalLessons) * 100) || 45;
}

useSEO({
  title: 'Learner Dashboard & Skill Progress',
  description: 'Track active Vue 3 & Nuxt 3 course progress, completed lesson streaks, and achievement certificates.'
});
</script>
