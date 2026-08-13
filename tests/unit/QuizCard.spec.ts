import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import QuizCard from '~/components/QuizCard.vue';
import type { Quiz } from '~/types';

const mockQuiz: Quiz = {
  id: 'q-test-1',
  title: 'Sample Reactivity Quiz',
  passingScore: 80,
  questions: [
    {
      id: 'q1',
      prompt: 'Which method creates a primitive ref in Vue 3?',
      options: [
        { id: 'opt1', text: 'reactive()', isCorrect: false },
        { id: 'opt2', text: 'ref()', isCorrect: true }
      ],
      explanation: 'ref() wraps primitive values in Vue 3 reactivity.'
    }
  ]
};

describe('QuizCard.vue', () => {
  it('renders question prompt and evaluates score upon submission', async () => {
    const wrapper = mount(QuizCard, {
      props: { quiz: mockQuiz }
    });

    expect(wrapper.text()).toContain('Sample Reactivity Quiz');
    expect(wrapper.text()).toContain('Which method creates a primitive ref in Vue 3?');

    const correctOptionBtn = wrapper.findAll('button').find(b => b.text().includes('ref()'));
    expect(correctOptionBtn).toBeDefined();
    await correctOptionBtn?.trigger('click');

    const submitBtn = wrapper.findAll('button').find(b => b.text().includes('Submit Quiz'));
    expect(submitBtn).toBeDefined();
    await submitBtn?.trigger('click');

    expect(wrapper.text()).toContain('Quiz Passed!');
    expect(wrapper.text()).toContain('100%');
  });
});
