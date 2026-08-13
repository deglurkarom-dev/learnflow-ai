<template>
  <div class="glass-card rounded-2xl p-6 border border-brand-500/20 shadow-glow">
    <div class="flex items-center justify-between pb-4 border-b border-slate-800">
      <div>
        <span class="text-xs font-semibold uppercase tracking-wider text-brand-400">Interactive Quiz</span>
        <h4 class="text-lg font-bold text-white mt-1">{{ quiz.title }}</h4>
      </div>
      <span class="px-3 py-1 text-xs font-semibold rounded-full bg-brand-500/10 text-brand-300 border border-brand-500/20">
        Passing Score: {{ quiz.passingScore }}%
      </span>
    </div>

    <!-- Quiz Completed State -->
    <div v-if="submitted" class="py-8 text-center">
      <div 
        :class="[
          'w-16 h-16 rounded-full mx-auto flex items-center justify-center text-2xl font-bold mb-4',
          scorePercentage >= quiz.passingScore 
            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
            : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
        ]"
      >
        {{ scorePercentage >= quiz.passingScore ? '✓' : '✕' }}
      </div>

      <h5 class="text-xl font-bold text-white mb-1">
        {{ scorePercentage >= quiz.passingScore ? 'Quiz Passed!' : 'Try Again' }}
      </h5>
      <p class="text-slate-400 text-sm mb-6">
        You scored <span class="font-bold text-white">{{ scorePercentage }}%</span> ({{ correctCount }}/{{ quiz.questions.length }} correct)
      </p>

      <BaseButton variant="secondary" size="md" @click="resetQuiz">
        Retake Quiz
      </BaseButton>
    </div>

    <!-- Active Question -->
    <div v-else-if="currentQuestion" class="py-6">
      <div class="flex items-center justify-between text-xs text-slate-400 mb-3">
        <span>Question {{ currentIndex + 1 }} of {{ quiz.questions.length }}</span>
        <span>Score Weight: {{ Math.round(100 / quiz.questions.length) }}%</span>
      </div>

      <h5 class="text-base font-semibold text-white mb-5 leading-relaxed">
        {{ currentQuestion.prompt }}
      </h5>

      <!-- Options -->
      <div class="space-y-3 mb-6">
        <button
          v-for="opt in currentQuestion.options"
          :key="opt.id"
          :class="[
            'w-full text-left p-4 rounded-xl text-sm font-medium border transition-all duration-200 flex items-center justify-between',
            selectedOptionId === opt.id
              ? 'bg-brand-600/20 border-brand-500 text-white shadow-sm'
              : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
          ]"
          @click="selectOption(opt.id)"
        >
          <span>{{ opt.text }}</span>
          <span 
            :class="[
              'w-5 h-5 rounded-full border flex items-center justify-center text-xs',
              selectedOptionId === opt.id ? 'border-brand-400 bg-brand-500 text-white' : 'border-slate-700'
            ]"
          >
            <span v-if="selectedOptionId === opt.id">✓</span>
          </span>
        </button>
      </div>

      <!-- Action Footer -->
      <div class="flex justify-between items-center pt-4 border-t border-slate-800">
        <button
          v-if="currentIndex > 0"
          class="text-xs font-semibold text-slate-400 hover:text-white"
          @click="currentIndex--"
        >
          ← Previous Question
        </button>

        <BaseButton
          variant="primary"
          size="md"
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
