import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  const robots = `User-agent: *
Allow: /
Disallow: /admin/
Sitemap: https://learnflow-ai.vercel.app/sitemap.xml
`;
  event.node.res.setHeader('Content-Type', 'text/plain');
  return robots;
});
