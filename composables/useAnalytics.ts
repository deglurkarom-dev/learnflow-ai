import { ref } from 'vue';
import type { AnalyticsMetrics } from '~/types';

const metrics = ref<AnalyticsMetrics>({
  totalVisitors: 12430,
  courseViews: 4821,
  enrollments: 932,
  conversionRate: 7.5,
  topCourseTitle: 'Modern Vue 3 & Nuxt 3 Mastery',
  activeLearners: 512
});

const recentEvents = ref<{ id: string; type: string; details: string; timestamp: string }[]>([
  { id: 'ev-1', type: 'course_enroll', details: 'User enrolled in Modern Vue 3 & Nuxt 3 Mastery', timestamp: '2 mins ago' },
  { id: 'ev-2', type: 'quiz_complete', details: 'User scored 100% on Reactivity Engine Quiz', timestamp: '5 mins ago' },
  { id: 'ev-3', type: 'ai_gen', details: 'Admin generated SEO metadata for Cybersecurity course', timestamp: '12 mins ago' },
  { id: 'ev-4', type: 'page_view', details: 'Visitor opened /courses/ai-powered-marketing-seo-engineering', timestamp: '18 mins ago' }
]);

export function useAnalytics() {
  function trackEvent(eventType: string, details: string) {
    const newEvent = {
      id: `ev-${Date.now()}`,
      type: eventType,
      details,
      timestamp: 'Just now'
    };
    recentEvents.value.unshift(newEvent);

    if (eventType === 'course_enroll') {
      metrics.value.enrollments++;
      metrics.value.conversionRate = Number(((metrics.value.enrollments / metrics.value.courseViews) * 100).toFixed(1));
    } else if (eventType === 'course_view') {
      metrics.value.courseViews++;
    } else if (eventType === 'page_view') {
      metrics.value.totalVisitors++;
    }
  }

  return {
    metrics,
    recentEvents,
    trackEvent
  };
}
