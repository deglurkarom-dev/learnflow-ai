import { ref } from 'vue';
import type { 
  AICourseGenRequest, AICourseGenResponse,
  AIMarketingGenRequest, AIMarketingGenResponse,
  AISEOGenRequest, AISEOGenResponse 
} from '~/types';

export function useAI() {
  const isGenerating = ref(false);
  const errorMessage = ref('');

  async function generateCourse(payload: AICourseGenRequest): Promise<AICourseGenResponse | null> {
    isGenerating.value = true;
    errorMessage.value = '';
    try {
      const response = await $fetch<AICourseGenResponse>('/api/ai/course-generator', {
        method: 'POST',
        body: payload
      });
      return response;
    } catch (err: any) {
      errorMessage.value = err?.message || 'Failed to generate course with AI.';
      return null;
    } finally {
      isGenerating.value = false;
    }
  }

  async function generateMarketingCopy(payload: AIMarketingGenRequest): Promise<AIMarketingGenResponse | null> {
    isGenerating.value = true;
    errorMessage.value = '';
    try {
      const response = await $fetch<AIMarketingGenResponse>('/api/ai/copy-generator', {
        method: 'POST',
        body: payload
      });
      return response;
    } catch (err: any) {
      errorMessage.value = err?.message || 'Failed to generate marketing copy.';
      return null;
    } finally {
      isGenerating.value = false;
    }
  }

  async function generateSEO(payload: AISEOGenRequest): Promise<AISEOGenResponse | null> {
    isGenerating.value = true;
    errorMessage.value = '';
    try {
      const response = await $fetch<AISEOGenResponse>('/api/ai/seo-assistant', {
        method: 'POST',
        body: payload
      });
      return response;
    } catch (err: any) {
      errorMessage.value = err?.message || 'Failed to generate SEO metadata.';
      return null;
    } finally {
      isGenerating.value = false;
    }
  }

  return {
    isGenerating,
    errorMessage,
    generateCourse,
    generateMarketingCopy,
    generateSEO
  };
}
