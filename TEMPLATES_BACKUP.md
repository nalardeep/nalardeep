# Templates Backup

This file contains the source code for the template features removed from the main project. You can copy these files into your new template-focused project.

## `lib/templates.ts`
```typescript
export type Template = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  thumbnail: string;
  demoUrl: string;
  githubUrl?: string; // Optional if you want to share the source code
  tags: string[];
  category: "Business" | "Portfolio" | "SaaS" | "Personal";
};

export const templates: Template[] = [
  {
    slug: "basreng-pedas-landing",
    title: "Basreng Pedas Landing Page",
    description: "A high-converting, professional landing page for snack products.",
    longDescription: "This premium template is designed for snack products with a focus on vibrant aesthetics, WhatsApp integration for direct sales, and SEO optimization. Built with Astro 5.x and Tailwind CSS.",
    features: ["Astro 5.x", "Tailwind CSS", "WhatsApp Integration", "Mobile First", "SEO Optimized"],
    thumbnail: "/assets/templates/basreng-pedas-landing.webp",
    demoUrl: "https://basreng-landing.vercel.app",
    githubUrl: "https://github.com/minggo-commits/basreng-landing",
    tags: ["Astro", "Tailwind", "eCommerce", "Food"],
    category: "Business",
  },
  {
    slug: "cafe-website-starter",
    title: "Cafe Website Starter Kit",
    description: "A modern, aesthetic coffee shop website template.",
    longDescription: "Perfect for cafes and boutiques, featuring a premium design system, responsive layout, and zero-JS-by-default architecture using Astro 5.",
    features: ["Astro 5", "Tailwind CSS", "Responsive Design", "Premium Aesthetics", "Zero JS"],
    thumbnail: "/assets/templates/cafe-website-starter.webp",
    demoUrl: "https://cafe-website-starter-kit.vercel.app/",
    githubUrl: "https://github.com/minggo-commits/cafe-website-starter-kit",
    tags: ["Astro", "Tailwind", "Cafe", "Business"],
    category: "Business",
  },
];

export function getAllTemplates() {
  return templates;
}

export function getTemplateBySlug(slug: string) {
  return templates.find((t) => t.slug === slug);
}
```

## `components/templates/TemplateCard.tsx`
```tsx
import Link from 'next/link';
import Image from 'next/image';
import { Template } from '@/lib/templates';

export default function TemplateCard({ template }: { template: Template }) {
    return (
        <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden bg-gray-100">
                <Image
                    src={template.thumbnail}
                    alt={template.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                    {template.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-primary-600 rounded-full shadow-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
                    {template.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-6 flex-grow">
                    {template.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                    <Link
                        href={`/templates/${template.slug}`}
                        className="text-sm font-semibold text-gray-900 hover:text-primary-500 transition-colors"
                    >
                        Learn More →
                    </Link>
                    <a
                        href={template.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-bold rounded-lg transition-colors shadow-lg shadow-primary-500/20"
                    >
                        Live Preview
                    </a>
                </div>
            </div>
        </div>
    );
}
```

## `components/templates/TemplateGrid.tsx`
```tsx
import { Template } from '@/lib/templates';
import TemplateCard from './TemplateCard';

export default function TemplateGrid({ templates }: { templates: Template[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
                <TemplateCard key={template.slug} template={template} />
            ))}
        </div>
    );
}
```

## `app/templates/page.tsx`
```tsx
import Container from '@/components/container';
import TemplateGrid from '@/components/templates/TemplateGrid';
import { getAllTemplates } from '@/lib/templates';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Free Landing Page Templates | KodeMinggo',
    description: 'Download high-quality, professional landing page templates built with Next.js and Tailwind CSS for free.',
    openGraph: {
        title: 'Free Landing Page Templates | KodeMinggo',
        description: 'Download high-quality, professional landing page templates built with Next.js and Tailwind CSS for free.',
        type: 'website',
    },
};

export default function TemplatesPage() {
    const templates = getAllTemplates();

    return (
        <Container>
            <div className="py-16 md:py-24">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                        Free <span className="text-primary-500">Landing Page</span> Templates
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Boost your project with our curated collection of professional, responsive, and SEO-optimized website templates. All templates are open-source and ready to use.
                    </p>
                </div>

                {/* Categories/Filters (Optional future feature) */}
                <div className="flex flex-wrap gap-4 mb-12">
                    {['All', 'SaaS', 'Portfolio', 'Business', 'Personal'].map((cat) => (
                        <button key={cat} className={`px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-sm ${cat === 'All' ? 'bg-primary-500 text-white shadow-primary-500/20' : 'bg-white text-gray-600 border border-gray-100 hover:border-primary-200'}`}>
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <TemplateGrid templates={templates} />

                {/* Call to Action */}
                <div className="mt-24 p-12 bg-gray-900 rounded-3xl text-center text-white overflow-hidden relative">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Want a custom template?</h2>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                            Need something specific for your brand? We offer custom landing page development services in Indonesia.
                        </p>
                        <a href="/contact" className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl transition-all shadow-xl shadow-primary-500/20">
                            Let's Talk
                        </a>
                    </div>
                    {/* Abstract background blobs */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary-500/20 blur-[100px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-primary-500/10 blur-[100px] rounded-full"></div>
                </div>
            </div>
        </Container>
    );
}
```

## `app/templates/[slug]/page.tsx`
```tsx
import Container from '@/components/container';
import { getTemplateBySlug, getAllTemplates } from '@/lib/templates';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ChevronLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const template = getTemplateBySlug(slug);

    if (!template) return {};

    return {
        title: `${template.title} - Free Landing Page Template | KodeMinggo`,
        description: template.description,
        openGraph: {
            title: template.title,
            description: template.description,
            images: [template.thumbnail],
        },
    };
}

export async function generateStaticParams() {
    const templates = getAllTemplates();
    return templates.map((t) => ({ slug: t.slug }));
}

export default async function TemplateDetail({ params }: Props) {
    const { slug } = await params;
    const template = getTemplateBySlug(slug);

    if (!template) {
        return notFound();
    }

    return (
        <Container>
            <div className="py-12 md:py-16">
                {/* Back Button */}
                <Link
                    href="/templates"
                    className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-primary-500 mb-8 transition-colors group"
                >
                    <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                    Back to templates
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Image/Showcase */}
                    <div className="space-y-6">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 shadow-2xl">
                            <Image
                                src={template.thumbnail}
                                alt={template.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-primary-50 text-primary-600 text-xs font-bold rounded-full uppercase tracking-wider font-mono">
                                    {template.category}
                                </span>
                                <span className="text-gray-400 text-sm italic">Free Download</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                                {template.title}
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {template.longDescription}
                            </p>
                        </div>

                        {/* Features List */}
                        <div>
                            <h2 className="text-lg font-bold text-gray-900 mb-4">Core Features</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {template.features.map((feature) => (
                                    <div key={feature} className="flex items-center gap-2 text-gray-600">
                                        <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href={template.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl transition-all shadow-xl shadow-primary-500/20"
                            >
                                Live Preview
                                <ExternalLink className="w-5 h-5" />
                            </a>
                            {template.githubUrl && (
                                <a
                                    href={template.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold rounded-xl transition-all"
                                >
                                    Source Code
                                    <Github className="w-5 h-5" />
                                </a>
                            )}
                        </div>

                        {/* SEO/Details Info Box */}
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 italic text-sm text-gray-500 leading-relaxed">
                            Note: This template is licensed under MIT. Feel free to use it for personal or commercial projects. Attribution is appreciated but not required.
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
```

## `scripts/generate-thumbnails.ts`
```typescript
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

                const fileName = `${template.slug}.webp`;
                const outputPath = path.join(outputDir, fileName);

                await page.screenshot({
                    path: outputPath,
                    type: 'webp',
                    quality: 80,
                    fullPage: false // Capture viewport only for thumbnail
                });

                console.log(`✅ Saved: ${fileName}`);

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
```
