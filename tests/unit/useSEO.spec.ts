import { describe, it, expect } from 'vitest';
import { buildCourseJsonLd, buildFAQJsonLd } from '~/composables/useSEO';

describe('useSEO composable utilities', () => {
  it('generates valid Schema.org Course JSON-LD schema', () => {
    const jsonLd = buildCourseJsonLd({
      title: 'Modern Vue 3 Architecture',
      description: 'Mastering Vue 3 Composition API'
    });

    expect(jsonLd['@type']).toBe('Course');
    expect(jsonLd['name']).toBe('Modern Vue 3 Architecture');
    expect(jsonLd['provider']['name']).toBe('LearnFlow AI');
  });

  it('generates valid Schema.org FAQPage JSON-LD schema', () => {
    const jsonLd = buildFAQJsonLd([
      { question: 'Is Vue 3 supported?', answer: 'Yes, fully supported.' }
    ]);

    expect(jsonLd['@type']).toBe('FAQPage');
    expect(jsonLd['mainEntity'].length).toBe(1);
    expect(jsonLd['mainEntity'][0]['name']).toBe('Is Vue 3 supported?');
  });
});
