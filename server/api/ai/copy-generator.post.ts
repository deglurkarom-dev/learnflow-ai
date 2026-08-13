import { defineEventHandler, readBody } from 'h3';
import type { AIMarketingGenRequest, AIMarketingGenResponse } from '~/types';

export default defineEventHandler(async (event) => {
  const body = await readBody<AIMarketingGenRequest>(event);
  const product = body?.product || 'LearnFlow AI Platform';
  const tone = body?.tone || 'Professional';
  const audience = body?.audience || 'Software Engineers & Content Marketers';

  const copy: AIMarketingGenResponse = {
    headline: `Empower Your Squad with AI-Driven Learning for ${product}`,
    subheadline: `Accelerate course creation, generate targeted copy, and automate SEO in minutes with our ${tone.toLowerCase()} AI content engine built for ${audience}.`,
    ctaText: `Launch Your AI Course Free`,
    featureBullets: [
      `⚡ Instant AI Course & Module Curriculum Generator`,
      `🎯 High-Converting Marketing Copy tailored for ${audience}`,
      `🔍 Automated Technical SEO & Schema.org JSON-LD Generation`,
      `📊 Integrated Learner Analytics & Real-Time Skill Dashboards`
    ],
    emailSubject: `[Exclusive Access] Transform how you deliver ${product}`,
    emailBody: `Hi team,\n\nBuilding high-impact learning experiences used to take weeks. With LearnFlow AI, you can generate complete course outlines, quizzes, and marketing campaigns in under 60 seconds.\n\nSee how ${product} can level up your team's workflow today.\n\nBest regards,\nThe LearnFlow AI Team`,
    socialPosts: [
      `🚀 Excited to unveil our new AI Content Engine for ${product}! Generate full course modules, quizzes, and SEO meta tags effortlessly. #EdTech #AI #VueJS #Nuxt3`,
      `Stop spending hours writing marketing copy manually. Let LearnFlow AI create persona-targeted headlines and emails in seconds! 💡 #SaaS #GrowthEngineering`
    ]
  };

  return copy;
});
