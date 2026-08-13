import { ref, computed } from 'vue';
import type { User, UserRole } from '~/types';

const currentUser = ref<User>({
  id: 'usr_1',
  name: 'Alex Morgan',
  email: 'alex.morgan@example.com',
  role: 'admin',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
  enrolledCourseIds: ['course-1', 'course-2'],
  completedLessonIds: ['les-101', 'les-102', 'les-201'],
  streakDays: 5
});

const isAuthModalOpen = ref(false);

export function useAuth() {
  const user = computed(() => currentUser.value);
  const role = computed(() => currentUser.value.role);
  const isAdmin = computed(() => currentUser.value.role === 'admin');

  function toggleRole() {
    currentUser.value.role = currentUser.value.role === 'admin' ? 'learner' : 'admin';
  }

  function setRole(newRole: UserRole) {
    currentUser.value.role = newRole;
  }

  function completeLesson(lessonId: string) {
    if (!currentUser.value.completedLessonIds.includes(lessonId)) {
      currentUser.value.completedLessonIds.push(lessonId);
    }
  }

  function enrollCourse(courseId: string) {
    if (!currentUser.value.enrolledCourseIds.includes(courseId)) {
      currentUser.value.enrolledCourseIds.push(courseId);
    }
  }

  return {
    user,
    role,
    isAdmin,
    isAuthModalOpen,
    toggleRole,
    setRole,
    completeLesson,
    enrollCourse
  };
}
