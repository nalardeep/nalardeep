import puppeteer from 'puppeteer';
import { templates } from '../lib/templates';
import path from 'path';
import fs from 'fs';

async function generateThumbnails() {
    console.log('📷 Starting thumbnail generation...');

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const outputDir = path.join(process.cwd(), 'public', 'assets', 'templates');

    // Ensure directory exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    try {
        for (const template of templates) {
            if (!template.demoUrl) {
                console.warn(`⚠️ Skipping ${template.title}: No demo URL`);
                continue;
            }

            console.log(`Generating thumbnail for: ${template.title}...`);

            const page = await browser.newPage();

            // Set viewport to 16:9 aspect ratio
            await page.setViewport({
                width: 1280,
                height: 720,
                deviceScaleFactor: 1,
            });

            try {
                await page.goto(template.demoUrl, {
                    waitUntil: 'networkidle0', // Wait until network is idle
                    timeout: 60000 // 60s timeout
                });

                // Add a small delay to ensure animations/fonts settle
                await new Promise(r => setTimeout(r, 2000));

                const fileName = `${template.slug}.png`;
                const outputPath = path.join(outputDir, fileName);

                await page.screenshot({
                    path: outputPath,
                    type: 'png',
                    fullPage: false // Capture viewport only for thumbnail
                });

                console.log(`✅ Saved: ${fileName}`);

                // Update the template object with the new path (though this script doesn't modify the source file PERSISTENTLY, 
                // it verifies the logic. The user has already set the paths in templates.ts to match this convention)

            } catch (error) {
                console.error(`❌ Failed to capture ${template.title}:`, error);
            } finally {
                await page.close();
            }
        }
    } finally {
        await browser.close();
        console.log('✨ Thumbnail generation complete!');
    }
}

generateThumbnails().catch(console.error);
