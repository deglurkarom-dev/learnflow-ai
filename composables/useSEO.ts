import { useHead, useSeoMeta } from '#imports';
import type { SEOData } from '~/types';

export function useSEO(seo: SEOData) {
  const siteUrl = 'https://learnflow-ai.vercel.app';
  const fullTitle = `${seo.title} | LearnFlow AI`;
  const canonical = seo.canonicalUrl || siteUrl;

  useSeoMeta({
    title: fullTitle,
    ogTitle: seo.ogTitle || fullTitle,
    description: seo.description,
    ogDescription: seo.ogDescription || seo.description,
    ogImage: seo.ogImage || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    twitterCard: 'summary_large_image',
    twitterTitle: fullTitle,
    twitterDescription: seo.description,
  });

  const scriptList: any[] = [];
  if (seo.jsonLdSchema) {
    scriptList.push({
      type: 'application/ld+json',
      children: JSON.stringify(seo.jsonLdSchema)
    });
  }

  useHead({
    link: [
      { rel: 'canonical', href: canonical }
    ],
    script: scriptList
  });
}

export function buildCourseJsonLd(course: { title: string; description: string; provider?: string; url?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': course.title,
    'description': course.description,
    'provider': {
      '@type': 'Organization',
      'name': course.provider || 'LearnFlow AI',
      'sameAs': 'https://learnflow-ai.vercel.app'
    }
  };
}

export function buildFAQJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}
