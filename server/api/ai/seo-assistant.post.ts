import { defineEventHandler, readBody } from 'h3';
import type { AISEOGenRequest, AISEOGenResponse } from '~/types';

export default defineEventHandler(async (event) => {
  const body = await readBody<AISEOGenRequest>(event);
  const topic = body?.topicOrTitle || 'Modern Web Development';
  const contentType = body?.contentType || 'Course';

  const slug = topic
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

  const response: AISEOGenResponse = {
    seoTitle: `${topic} - Ultimate Guide & ${contentType} | LearnFlow AI`,
    metaDescription: `Master ${topic} with our comprehensive ${contentType.toLowerCase()}. Includes interactive quizzes, hands-on modules, and industry certification.`,
    keywords: [
      topic,
      `${topic} course`,
      `learn ${topic}`,
      `best ${topic} guide`,
      'LearnFlow AI'
    ],
    ogTitle: `${topic} | LearnFlow AI Platform`,
    ogDescription: `Accelerate your skills with ${topic}. Explore curriculum modules, hands-on labs, and AI-powered practice.`,
    suggestedSlug: slug,
    faqSchema: [
      {
        question: `What will I learn in the ${topic} ${contentType.toLowerCase()}?`,
        answer: `You will master foundational concepts, real-world application architectures, and advanced optimization techniques.`
      },
      {
        question: `Is this suitable for beginners?`,
        answer: `Yes! The curriculum offers structured learning pathways with step-by-step guidance.`
      }
    ]
  };

  return response;
});
