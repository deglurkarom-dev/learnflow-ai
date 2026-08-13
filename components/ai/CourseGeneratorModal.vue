<template>
  <BaseModal :is-open="isOpen" title="AI Course & Module Generator" @close="$emit('close')">
    <div class="space-y-4">
      <p class="text-xs text-zinc-400">
        Enter target topic, audience, and duration. The AI engine will generate a multi-module course curriculum complete with lessons and interactive quizzes.
      </p>

      <div class="space-y-3.5">
        <div>
          <label class="block text-xs font-medium text-zinc-300 mb-1">Course Topic</label>
          <input
            v-model="form.topic"
            type="text"
            placeholder="e.g. Introduction to Cybersecurity, Advanced Nuxt 3 Patterns..."
            class="ui-input w-full px-3.5 py-2 text-xs"
          />
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-medium text-zinc-300 mb-1">Target Audience</label>
            <input
              v-model="form.audience"
              type="text"
              placeholder="e.g. Beginner Developers"
              class="ui-input w-full px-3.5 py-2 text-xs"
            />
          </div>

          <div>
            <label class="block text-xs font-medium text-zinc-300 mb-1">Course Duration</label>
            <input
              v-model="form.duration"
              type="text"
              placeholder="e.g. 4 weeks, 10 hours"
              class="ui-input w-full px-3.5 py-2 text-xs"
            />
          </div>
        </div>
      </div>

      <!-- Generated Result Preview -->
      <div v-if="result" class="mt-5 pt-4 border-t border-zinc-800 space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold text-emerald-400">✓ AI Outline Generated</span>
          <span class="text-xs text-zinc-400">{{ result.modules.length }} Modules</span>
        </div>

        <div class="p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl space-y-2.5">
          <h4 class="text-sm font-bold text-white">{{ result.title }}</h4>
          <p class="text-xs text-zinc-400 leading-relaxed">{{ result.subtitle }}</p>

          <div class="space-y-2 pt-2">
            <div 
              v-for="(mod, i) in result.modules" 
              :key="i"
              class="p-2.5 bg-zinc-950/80 rounded-lg border border-zinc-800"
            >
              <p class="text-xs font-bold text-brand-300">{{ mod.title }}</p>
              <ul class="mt-1 space-y-1 pl-4 list-disc text-xs text-zinc-400">
                <li v-for="(les, j) in mod.lessons" :key="j">
                  {{ les.title }} ({{ les.durationMinutes }} mins)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <template #footer>
      <BaseButton variant="ghost" size="sm" @click="$emit('close')">Cancel</BaseButton>
      <BaseButton 
        v-if="!result" 
        variant="primary" 
        size="sm" 
        :loading="isGenerating" 
        :disabled="!form.topic" 
        @click="handleGenerate"
      >
        Generate Course
      </BaseButton>
      <BaseButton 
        v-else 
        variant="emerald" 
        size="sm" 
        @click="publishCourse"
      >
        Publish to CMS
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { AICourseGenResponse } from '~/types';
import { useAI } from '~/composables/useAI';
import { useCourses } from '~/composables/useCourses';
import BaseModal from '~/components/ui/BaseModal.vue';
import BaseButton from '~/components/ui/BaseButton.vue';

const props = defineProps<{ isOpen: boolean }>();
const emit = defineEmits<{ (e: 'close'): void }>();

const { generateCourse, isGenerating } = useAI();
const { addCourse } = useCourses();

const form = ref({
  topic: 'Introduction to Cybersecurity',
  audience: 'Beginner software developers',
  duration: '4 weeks'
});

const result = ref<AICourseGenResponse | null>(null);

async function handleGenerate() {
  const data = await generateCourse(form.value);
  if (data) {
    result.value = data;
  }
}

function publishCourse() {
  if (!result.value) return;
  const newCourseSlug = form.value.topic.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  addCourse({
    id: `course-${Date.now()}`,
    slug: newCourseSlug,
    title: result.value.title,
    subtitle: result.value.subtitle,
    description: result.value.description,
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    category: result.value.category,
    difficulty: result.value.difficulty,
    durationHours: 6,
    rating: 5.0,
    reviewCount: 1,
    instructorName: 'AI Curriculum Generator',
    instructorTitle: 'LearnFlow Content AI',
    instructorAvatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=250&q=80',
    publishedAt: new Date().toISOString().split('T')[0],
    modules: result.value.modules.map((m, idx) => ({
      id: `mod-gen-${idx}`,
      title: m.title,
      description: m.description,
      lessons: m.lessons.map((l, lIdx) => ({
        id: `les-gen-${lIdx}`,
        title: l.title,
        slug: `lesson-${lIdx}`,
        durationMinutes: l.durationMinutes,
        contentMarkdown: l.contentMarkdown
      }))
    }))
  });

  result.value = null;
  emit('close');
}
</script>
