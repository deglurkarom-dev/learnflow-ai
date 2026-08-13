import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  const siteUrl = 'https://learnflow-ai.vercel.app';
  const urls = [
    '',
    '/courses',
    '/courses/modern-vue3-nuxt3-mastery',
    '/courses/ai-powered-marketing-seo-engineering',
    '/courses/cybersecurity-fundamentals-developers',
    '/blog',
    '/blog/power-of-prismic-nuxt3',
    '/blog/technical-seo-geo-strategies',
    '/about',
    '/pricing',
    '/contact'
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${siteUrl}${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${url === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  event.node.res.setHeader('Content-Type', 'text/xml');
  return xml;
});
