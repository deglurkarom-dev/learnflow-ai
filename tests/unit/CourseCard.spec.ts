import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CourseCard from '~/components/CourseCard.vue';
import type { Course } from '~/types';

const mockCourse: Course = {
  id: 'c-test-1',
  slug: 'vue-3-test-course',
  title: 'Vue 3 Unit Testing Masterclass',
  subtitle: 'Learn to write clean unit tests with Vitest',
  description: 'Full guide to testing Vue components',
  thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80',
  category: 'Frontend Engineering',
  difficulty: 'Intermediate',
  durationHours: 5,
  rating: 4.9,
  reviewCount: 42,
  instructorName: 'Sarah Lin',
  instructorTitle: 'Staff Engineer',
  instructorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80',
  publishedAt: '2026-02-01',
  modules: []
};

describe('CourseCard.vue', () => {
  it('renders course title and instructor name correctly', () => {
    const wrapper = mount(CourseCard, {
      props: { course: mockCourse },
      global: {
        stubs: {
          NuxtLink: {
            template: '<a><slot /></a>'
          }
        }
      }
    });

    expect(wrapper.text()).toContain('Vue 3 Unit Testing Masterclass');
    expect(wrapper.text()).toContain('Sarah Lin');
    expect(wrapper.text()).toContain('Frontend Engineering');
    expect(wrapper.text()).toContain('4.9');
  });
});
