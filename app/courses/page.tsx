import { getAllPosts } from '@/lib/api';
import { Post } from '@/types';
import Container from '@/components/container';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Courses - NalarDeep',
    description: 'Pelajari berbagai topik AI, mulai dari n8n, LLM, MCP, hingga Fine-tuning. Pilih course yang sesuai dengan kebutuhanmu.',
};

// Define course categories with metadata
const courseCategories: Record<string, { label: string; description: string; color: string; icon: string }> = {
    'n8n': {
        label: 'n8n',
        description: 'Pelajari otomatisasi workflow menggunakan n8n, dari dasar hingga integrasi dengan AI.',
        color: 'bg-orange-300',
        icon: '⚙️',
    },
    'llm': {
        label: 'LLM',
        description: 'Mengenal dan menjalankan Large Language Models, baik secara lokal maupun melalui API.',
        color: 'bg-sky-300',
        icon: '🧠',
    },
    'mcp': {
        label: 'MCP',
        description: 'Memahami Model Context Protocol untuk meningkatkan kemampuan AI agent.',
        color: 'bg-violet-300',
        icon: '🔌',
    },
    'fine-tuning': {
        label: 'Fine-tuning',
        description: 'Tools dan teknik untuk melatih ulang model AI sesuai kebutuhan spesifik.',
        color: 'bg-emerald-400',
        icon: '🎯',
    },
    'lm-studio': {
        label: 'LM Studio',
        description: 'Panduan lengkap menggunakan LM Studio untuk menjalankan LLM di komputer lokal.',
        color: 'bg-yellow-300',
        icon: '💻',
    },
    'ollama': {
        label: 'Ollama',
        description: 'Jalankan model AI secara offline dengan Ollama. Mudah, cepat, dan gratis.',
        color: 'bg-rose-300',
        icon: '🦙',
    },
    'openclaw': {
        label: 'OpenClaw',
        description: 'Panduan lengkap OpenClaw AI untuk pengembangan dan manajemen model.',
        color: 'bg-teal-300',
        icon: '🦀',
    },
};

function groupPostsByTag(posts: Post[]): Record<string, Post[]> {
    const grouped: Record<string, Post[]> = {};

    posts.forEach((post) => {
        post.tags?.forEach((tag) => {
            const normalizedTag = tag.toLowerCase().replace(/\s+/g, '-');
            if (!grouped[normalizedTag]) {
                grouped[normalizedTag] = [];
            }
            // Avoid duplicates
            if (!grouped[normalizedTag].find((p) => p.slug === post.slug)) {
                grouped[normalizedTag].push(post);
            }
        });
    });

    return grouped;
}

export default function CoursesPage() {
    const allPosts = getAllPosts();
    const grouped = groupPostsByTag(allPosts);

    // Only show tags that are explicitly defined in courseCategories, in their defined order
    const sortedTags = Object.keys(courseCategories).filter((tag) => grouped[tag] && grouped[tag].length > 0);

    const totalCourses = Object.keys(grouped).length;
    const totalArticles = allPosts.length;

    return (
        <div className="bg-white min-h-screen pb-24 relative">
            <div className="absolute inset-0 z-0 bg-dots opacity-[0.05] pointer-events-none"></div>
            <div className="relative z-10">
                <Container>
                    {/* Header */}
                    <div className="py-16 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-12">
                        {/* Left: Text */}
                        <div className="max-w-xl">
                            <div className="inline-block bg-yellow-300 px-4 py-1.5 memphis-border memphis-shadow text-sm font-bold text-gray-900 mb-6">
                                📚 LEARNING PATH
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                                Courses
                            </h1>
                            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                                Pilih topik yang ingin kamu pelajari. Setiap course berisi kumpulan artikel dan tutorial
                                yang dikelompokkan berdasarkan kategori untuk memudahkan proses belajarmu.
                            </p>

                            {/* Stats */}
                            <div className="flex gap-4 mt-8">
                                <div className="bg-emerald-400 px-5 py-3 memphis-border memphis-shadow">
                                    <span className="text-2xl font-bold text-black">{totalCourses}</span>
                                    <span className="text-sm font-bold text-gray-900 ml-2">Topik</span>
                                </div>
                                <div className="bg-sky-300 px-5 py-3 memphis-border memphis-shadow">
                                    <span className="text-2xl font-bold text-black">{totalArticles}</span>
                                    <span className="text-sm font-bold text-gray-900 ml-2">Artikel</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Memphis Decoration */}
                        <div className="hidden md:block relative w-80 h-64 shrink-0 select-none pointer-events-none">
                            {/* Big emerald square */}
                            <div className="absolute top-0 right-8 w-28 h-28 bg-emerald-400 border-3 border-gray-900 shadow-[6px_6px_0px_0px_#171717] -rotate-6"></div>
                            {/* Yellow circle */}
                            <div className="absolute top-4 right-44 w-16 h-16 bg-yellow-300 border-3 border-gray-900 shadow-[4px_4px_0px_0px_#171717] rounded-full"></div>
                            {/* Orange rectangle */}
                            <div className="absolute bottom-8 right-12 w-36 h-16 bg-orange-300 border-3 border-gray-900 shadow-[5px_5px_0px_0px_#171717] rotate-3"></div>
                            {/* Violet small square */}
                            <div className="absolute bottom-24 right-48 w-12 h-12 bg-violet-300 border-3 border-gray-900 shadow-[3px_3px_0px_0px_#171717] rotate-12"></div>
                            {/* Sky diamond */}
                            <div className="absolute top-28 right-24 w-14 h-14 bg-sky-300 border-3 border-gray-900 shadow-[3px_3px_0px_0px_#171717] rotate-45"></div>
                            {/* Dots accent */}
                            <div className="absolute top-2 left-0 w-20 h-20 bg-dots opacity-20"></div>
                            {/* Zigzag SVG */}
                            <svg className="absolute bottom-0 left-2 w-24 h-10" viewBox="0 0 96 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <polyline points="0,20 12,4 24,20 36,4 48,20 60,4 72,20 84,4 96,20" stroke="#171717" strokeWidth="3" strokeLinejoin="round" fill="none"/>
                            </svg>
                            {/* Star / asterisk */}
                            <svg className="absolute top-2 right-0 w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="20" y1="4" x2="20" y2="36" stroke="#171717" strokeWidth="4" strokeLinecap="round"/>
                                <line x1="4" y1="20" x2="36" y2="20" stroke="#171717" strokeWidth="4" strokeLinecap="round"/>
                                <line x1="8" y1="8" x2="32" y2="32" stroke="#171717" strokeWidth="3" strokeLinecap="round"/>
                                <line x1="32" y1="8" x2="8" y2="32" stroke="#171717" strokeWidth="3" strokeLinecap="round"/>
                            </svg>
                        </div>
                    </div>

                    {/* Course Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
                        {sortedTags.map((tag) => {
                            const meta = courseCategories[tag];
                            const posts = grouped[tag];
                            const bgColor = meta?.color || 'bg-gray-200';
                            const icon = meta?.icon || '📖';
                            const label = meta?.label || tag.charAt(0).toUpperCase() + tag.slice(1).replace(/-/g, ' ');
                            const description = meta?.description || `Kumpulan artikel tentang ${label}.`;

                            // Estimate total reading time
                            const totalMinutes = posts.reduce((acc, post) => {
                                const mins = parseInt(post.readingTime) || 3;
                                return acc + mins;
                            }, 0);

                            return (
                                <Link
                                    key={tag}
                                    href={`/tags/${tag}`}
                                    className="group block"
                                >
                                    <div className="h-full bg-white memphis-border memphis-shadow group-hover:memphis-shadow-hover group-hover:-translate-y-2 transition-all flex flex-col">
                                        {/* Color Header */}
                                        <div className={`${bgColor} px-6 py-5 border-b-3 border-gray-900`}>
                                            <div className="flex items-center justify-between">
                                                <span className="text-3xl">{icon}</span>
                                                <span className="bg-white text-gray-900 text-xs font-bold px-2.5 py-1 border-2 border-gray-900">
                                                    {posts.length} {posts.length === 1 ? 'Artikel' : 'Artikel'}
                                                </span>
                                            </div>
                                            <h2 className="text-2xl font-bold text-black mt-3">
                                                {label}
                                            </h2>
                                        </div>

                                        {/* Body */}
                                        <div className="px-6 py-5 flex flex-col flex-1">
                                            <p className="text-sm text-gray-600 mb-4 flex-1 leading-relaxed">
                                                {description}
                                            </p>

                                            {/* Article List Preview */}
                                            <div className="space-y-2 mb-4">
                                                {posts.slice(0, 3).map((post) => (
                                                    <div key={post.slug} className="flex items-start gap-2 text-sm">
                                                        <BookOpen className="w-3.5 h-3.5 mt-1 text-gray-400 shrink-0" />
                                                        <span className="text-gray-700 line-clamp-1">{post.title}</span>
                                                    </div>
                                                ))}
                                                {posts.length > 3 && (
                                                    <span className="text-xs text-gray-400 font-bold pl-5">
                                                        +{posts.length - 3} artikel lainnya
                                                    </span>
                                                )}
                                            </div>

                                            {/* Footer */}
                                            <div className="flex items-center justify-between pt-4 border-t-2 border-gray-900">
                                                <div className="flex items-center gap-1.5 text-xs text-gray-500 font-bold">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    <span>~{totalMinutes} min</span>
                                                </div>
                                                <span className="text-sm font-bold text-gray-900 group-hover:text-emerald-600 flex items-center gap-1 transition-colors">
                                                    Mulai Belajar <ArrowRight className="w-4 h-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </Container>
            </div>
        </div>
    );
}
