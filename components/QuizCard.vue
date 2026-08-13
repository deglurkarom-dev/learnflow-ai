<template>
  <div class="ui-card p-6 border-zinc-800">
    <div class="flex items-center justify-between pb-4 border-b border-zinc-800">
      <div>
        <span class="text-[11px] font-bold uppercase tracking-wider text-brand-400">Interactive Quiz</span>
        <h4 class="text-base font-bold text-white mt-0.5">{{ quiz.title }}</h4>
      </div>
      <span class="px-2.5 py-0.5 text-xs font-semibold rounded-md bg-brand-950/80 text-brand-300 border border-brand-800/60">
        Passing: {{ quiz.passingScore }}%
      </span>
    </div>

    <!-- Quiz Completed State -->
    <div v-if="submitted" class="py-6 text-center space-y-4">
      <div 
        :class="[
          'w-12 h-12 rounded-full mx-auto flex items-center justify-center text-lg font-bold',
          scorePercentage >= quiz.passingScore 
            ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/80' 
            : 'bg-rose-950/80 text-rose-400 border border-rose-800/80'
        ]"
      >
        {{ scorePercentage >= quiz.passingScore ? '✓' : '✕' }}
      </div>

      <div>
        <h5 class="text-base font-bold text-white">
          {{ scorePercentage >= quiz.passingScore ? 'Quiz Passed!' : 'Try Again' }}
        </h5>
        <p class="text-zinc-400 text-xs mt-1">
          Score: <strong class="text-white">{{ scorePercentage }}%</strong> ({{ correctCount }}/{{ quiz.questions.length }} correct)
        </p>
      </div>

      <BaseButton variant="secondary" size="sm" @click="resetQuiz">
        Retake Quiz
      </BaseButton>
    </div>

    <!-- Active Question -->
    <div v-else-if="currentQuestion" class="py-5 space-y-4">
      <div class="flex items-center justify-between text-xs text-zinc-400">
        <span>Question {{ currentIndex + 1 }} of {{ quiz.questions.length }}</span>
        <span>Weight: {{ Math.round(100 / quiz.questions.length) }}%</span>
      </div>

      <h5 class="text-sm font-semibold text-white leading-relaxed">
        {{ currentQuestion.prompt }}
      </h5>

      <!-- Options -->
      <div class="space-y-2.5">
        <button
          v-for="opt in currentQuestion.options"
          :key="opt.id"
          :class="[
            'w-full text-left p-3.5 rounded-lg text-xs font-medium border transition-colors flex items-center justify-between cursor-pointer interactive-press select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
            selectedOptionId === opt.id
              ? 'bg-brand-950/60 border-brand-500 text-white'
              : 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white'
          ]"
          @click="selectOption(opt.id)"
        >
          <span>{{ opt.text }}</span>
          <span 
            :class="[
              'w-4 h-4 rounded-full border flex items-center justify-center text-[10px]',
              selectedOptionId === opt.id ? 'border-brand-400 bg-brand-500 text-white' : 'border-zinc-700'
            ]"
          >
            <span v-if="selectedOptionId === opt.id">✓</span>
          </span>
        </button>
      </div>

      <!-- Action Footer -->
      <div class="flex justify-between items-center pt-3 border-t border-zinc-800">
        <button
          v-if="currentIndex > 0"
          class="text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          @click="currentIndex--"
        >
          ← Previous
        </button>

        <BaseButton
          variant="primary"
          size="sm"
          :disabled="!selectedOptionId"
          class="ml-auto"
          @click="nextQuestion"
        >
          {{ currentIndex === quiz.questions.length - 1 ? 'Submit Quiz' : 'Next Question →' }}
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Quiz } from '~/types';
import BaseButton from '~/components/ui/BaseButton.vue';

const props = defineProps<{
  quiz: Quiz;
}>();

const emit = defineEmits<{
  (e: 'completed', score: number): void;
}>();

const currentIndex = ref(0);
const userAnswers = ref<Record<string, string>>({});
const submitted = ref(false);

const currentQuestion = computed(() => props.quiz.questions[currentIndex.value]);
const selectedOptionId = computed(() => currentQuestion.value ? userAnswers.value[currentQuestion.value.id] : undefined);

function selectOption(optId: string) {
  if (currentQuestion.value) {
    userAnswers.value[currentQuestion.value.id] = optId;
  }
}

const correctCount = computed(() => {
  let count = 0;
  props.quiz.questions.forEach(q => {
    const chosenOptId = userAnswers.value[q.id];
    const correctOpt = q.options.find(o => o.isCorrect);
    if (correctOpt && chosenOptId === correctOpt.id) {
      count++;
    }
  });
  return count;
});

const scorePercentage = computed(() => {
  if (!props.quiz.questions.length) return 0;
  return Math.round((correctCount.value / props.quiz.questions.length) * 100);
});

function nextQuestion() {
  if (currentIndex.value < props.quiz.questions.length - 1) {
    currentIndex.value++;
  } else {
    submitted.value = true;
    emit('completed', scorePercentage.value);
  }
}

function resetQuiz() {
  currentIndex.value = 0;
  userAnswers.value = {};
  submitted.value = false;
}
</script>
