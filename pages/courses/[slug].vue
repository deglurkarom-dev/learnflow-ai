<template>
  <div v-if="course" class="py-10 bg-[#070A13]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-xs text-slate-400 mb-6">
        <NuxtLink to="/" class="hover:text-white">Home</NuxtLink>
        <span>/</span>
        <NuxtLink to="/courses" class="hover:text-white">Courses</NuxtLink>
        <span>/</span>
        <span class="text-slate-200 font-medium truncate max-w-xs">{{ course.title }}</span>
      </nav>

      <!-- Course Header Hero -->
      <div class="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 mb-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-4">
          <div class="flex flex-wrap items-center gap-2">
            <BaseBadge variant="brand">{{ course.category }}</BaseBadge>
            <span class="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              {{ course.difficulty }}
            </span>
            <span class="text-xs text-amber-400 font-semibold">★ {{ course.rating }} ({{ course.reviewCount }} reviews)</span>
          </div>

          <h1 class="font-display text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            {{ course.title }}
          </h1>

          <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
            {{ course.subtitle }}
          </p>

          <!-- Instructor Info -->
          <div class="flex items-center gap-4 pt-4 border-t border-slate-800/80">
            <img :src="course.instructorAvatar" class="w-10 h-10 rounded-full object-cover border border-brand-500/30" />
            <div>
              <p class="text-xs font-bold text-white">{{ course.instructorName }}</p>
              <p class="text-[11px] text-slate-400">{{ course.instructorTitle }}</p>
            </div>
          </div>
        </div>

        <!-- Right Side Enrollment Card -->
        <div class="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-6">
          <div class="space-y-3 text-xs text-slate-300">
            <div class="flex justify-between pb-2 border-b border-slate-800">
              <span>Total Modules:</span>
              <strong class="text-white">{{ course.modules.length }}</strong>
            </div>
            <div class="flex justify-between pb-2 border-b border-slate-800">
              <span>Estimated Duration:</span>
              <strong class="text-white">{{ course.durationHours }} Hours</strong>
            </div>
            <div class="flex justify-between pb-2 border-b border-slate-800">
              <span>Access Level:</span>
              <strong class="text-emerald-400">Full Lifetime Access</strong>
            </div>
          </div>

          <div>
            <BaseButton 
              v-if="!isEnrolled" 
              variant="primary" 
              size="lg" 
              full-width 
              @click="handleEnroll"
            >
              Enroll in Course Now
            </BaseButton>
            <div v-else class="space-y-2 text-center">
              <span class="inline-block w-full px-3 py-2 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-xl border border-emerald-500/30">
                ✓ Enrolled & Active
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Course Viewer & Tabs -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left 2 Cols: Lesson Viewer / Active Content -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Active Lesson Container -->
          <div v-if="activeLesson" class="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
            <div class="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span class="text-[11px] font-bold text-brand-400 uppercase tracking-wider">Active Lesson</span>
                <h3 class="text-xl font-bold text-white mt-0.5">{{ activeLesson.title }}</h3>
              </div>
              <BaseButton 
                v-if="!isCompleted(activeLesson.id)" 
                variant="emerald" 
                size="sm" 
                @click="markComplete(activeLesson.id)"
              >
                Mark Lesson Complete
              </BaseButton>
              <span v-else class="text-xs font-bold text-emerald-400 flex items-center gap-1">
                ✓ Completed
              </span>
            </div>

            <!-- Content Area (Markdown formatted) -->
            <div class="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed whitespace-pre-line">
              {{ activeLesson.contentMarkdown }}
            </div>

            <!-- Quiz Embed (if available) -->
            <div v-if="activeLesson.quiz" class="mt-8 pt-6 border-t border-slate-800">
              <QuizCard :quiz="activeLesson.quiz" @completed="onQuizCompleted" />
            </div>
          </div>

          <div v-else class="glass-panel p-8 rounded-3xl text-center text-slate-400 text-sm">
            Select a lesson from the module list on the right to start learning.
          </div>
        </div>

        <!-- Right 1 Col: Module & Lesson Curriculum Accordion -->
        <div class="space-y-4">
          <h3 class="text-base font-bold text-white flex items-center justify-between">
            <span>Course Curriculum</span>
            <span class="text-xs font-normal text-slate-400">{{ course.modules.length }} Modules</span>
          </h3>

          <div 
            v-for="mod in course.modules" 
            :key="mod.id" 
            class="glass-panel p-4 rounded-2xl border border-slate-800 space-y-3"
          >
            <div>
              <h4 class="text-sm font-bold text-white">{{ mod.title }}</h4>
              <p class="text-xs text-slate-400 mt-0.5">{{ mod.description }}</p>
            </div>

            <div class="space-y-1.5 pt-2 border-t border-slate-800/60">
              <button
                v-for="les in mod.lessons"
                :key="les.id"
                :class="[
                  'w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition',
                  activeLesson?.id === les.id 
                    ? 'bg-brand-600/30 text-white font-semibold border border-brand-500/40' 
                    : 'bg-slate-900/40 text-slate-300 hover:bg-slate-800 hover:text-white'
                ]"
                @click="activeLesson = les"
              >
                <div class="flex items-center gap-2 truncate">
                  <span class="text-slate-500 font-mono">▶</span>
                  <span class="truncate">{{ les.title }}</span>
                </div>
                <span class="text-[10px] text-slate-500 font-mono">{{ les.durationMinutes }}m</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="py-20 text-center text-slate-400">
    <h2 class="text-2xl font-bold text-white">Course Not Found</h2>
    <NuxtLink to="/courses" class="text-brand-400 hover:underline text-sm mt-2 inline-block">Return to Catalog</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from '#imports';
import { useCourses } from '~/composables/useCourses';
import { useAuth } from '~/composables/useAuth';
import { useAnalytics } from '~/composables/useAnalytics';
import { useSEO, buildCourseJsonLd } from '~/composables/useSEO';
import BaseBadge from '~/components/ui/BaseBadge.vue';
import BaseButton from '~/components/ui/BaseButton.vue';
import QuizCard from '~/components/QuizCard.vue';

const route = useRoute();
const slug = route.params.slug as string;

const { getCourseBySlug } = useCourses();
const { user, enrollCourse, completeLesson } = useAuth();
const { trackEvent } = useAnalytics();

const course = computed(() => getCourseBySlug(slug));
const activeLesson = ref(course.value?.modules[0]?.lessons[0] || null);

const isEnrolled = computed(() => course.value ? user.value.enrolledCourseIds.includes(course.value.id) : false);

function handleEnroll() {
  if (course.value) {
    enrollCourse(course.value.id);
    trackEvent('course_enroll', `User enrolled in ${course.value.title}`);
  }
}

function isCompleted(lessonId: string) {
  return user.value.completedLessonIds.includes(lessonId);
}

function markComplete(lessonId: string) {
  completeLesson(lessonId);
  trackEvent('lesson_complete', `User completed lesson ${lessonId}`);
}

function onQuizCompleted(score: number) {
  trackEvent('quiz_complete', `User scored ${score}% on quiz in ${course.value?.title}`);
}

if (course.value) {
  useSEO({
    title: course.value.seoTitle || course.value.title,
    description: course.value.seoDescription || course.value.subtitle,
    keywords: course.value.keywords,
    jsonLdSchema: buildCourseJsonLd({
      title: course.value.title,
      description: course.value.description
    })
  });

  trackEvent('course_view', `User viewed course ${course.value.title}`);
}
</script>
