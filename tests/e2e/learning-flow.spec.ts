import { test, expect } from '@playwright/test';

test.describe('LearnFlow AI Platform User Flows', () => {
  test('User navigates home, searches courses, opens course detail, and enrolls', async ({ page }) => {
    // 1. Visit Homepage
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('AI-Powered Learning');

    // 2. Click Catalog link
    await page.click('text=Explore Courses Catalog');
    await expect(page).toHaveURL(/\/courses/);

    // 3. Perform live search
    const searchInput = page.locator('input[placeholder*="Search courses"]');
    await searchInput.fill('Vue 3');

    // 4. Click first course card
    await page.click('text=Modern Vue 3, Nuxt 3 & TypeScript Architecture');
    await expect(page).toHaveURL(/\/courses\/modern-vue3-nuxt3-mastery/);

    // 5. Enroll in course
    await page.click('text=Enroll in Course Now');
    await expect(page.locator('text=Enrolled & Active')).toBeVisible();
  });

  test('Admin mode switch and AI Course Generator launcher', async ({ page }) => {
    await page.goto('/');
    
    // Click Role toggle button
    await page.click('text=Mode: Learner');
    await expect(page.locator('text=Mode: Admin CMS')).toBeVisible();

    // Launch AI Course Generator modal
    await page.click('text=Try AI Course Generator');
    await expect(page.locator('h3:has-text("AI Course & Module Generator")')).toBeVisible();
  });
});
