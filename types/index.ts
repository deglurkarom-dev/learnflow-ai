export type UserRole = 'learner' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  enrolledCourseIds: string[];
  completedLessonIds: string[];
  streakDays: number;
}

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  prompt: string;
  options: QuizOption[];
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
  passingScore: number;
}

export interface Lesson {
  id: string;
  title: string;
  slug: string;
  durationMinutes: number;
  contentMarkdown: string;
  videoUrl?: string;
  quiz?: Quiz;
  isCompleted?: boolean;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  category: 'AI & Data' | 'Frontend Engineering' | 'Cybersecurity' | 'Product & Marketing' | 'Cloud & DevOps';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  durationHours: number;
  rating: number;
  reviewCount: number;
  instructorName: string;
  instructorTitle: string;
  instructorAvatar: string;
  publishedAt: string;
  modules: Module[];
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  isFeatured?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  contentMarkdown: string;
  coverImage: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  category: string;
  publishedAt: string;
  readTimeMinutes: number;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  prismicId?: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  jsonLdSchema?: Record<string, any>;
}

export interface AICourseGenRequest {
  topic: string;
  audience: string;
  duration: string;
  difficulty?: string;
}

export interface AICourseGenResponse {
  title: string;
  subtitle: string;
  description: string;
  category: Course['category'];
  difficulty: Course['difficulty'];
  modules: {
    title: string;
    description: string;
    lessons: {
      title: string;
      durationMinutes: number;
      contentMarkdown: string;
      quizPrompt?: string;
      quizOptions?: { text: string; isCorrect: boolean }[];
    }[];
  }[];
}

export interface AIMarketingGenRequest {
  product: string;
  tone: 'Professional' | 'High Energy' | 'Persuasive' | 'Casual';
  audience: string;
}

export interface AIMarketingGenResponse {
  headline: string;
  subheadline: string;
  ctaText: string;
  featureBullets: string[];
  emailSubject: string;
  emailBody: string;
  socialPosts: string[];
}

export interface AISEOGenRequest {
  topicOrTitle: string;
  contentType: 'Course' | 'Blog' | 'Landing Page';
  description?: string;
}

export interface AISEOGenResponse {
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  suggestedSlug: string;
  faqSchema: { question: string; answer: string }[];
}

export interface AnalyticsMetrics {
  totalVisitors: number;
  courseViews: number;
  enrollments: number;
  conversionRate: number;
  topCourseTitle: string;
  activeLearners: number;
}
