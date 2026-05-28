import Container from "@/components/container";
import BreadcrumbSchema from "@/components/breadcrumb-schema";
import { getAllPosts, getPostsByTag } from "@/lib/api";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

const BASE_URL = "https://nalardeep.com";

// Course category metadata (same as courses page)
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

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
    const { tag } = await params;
    const meta = courseCategories[tag];
    const label = meta?.label || tag.charAt(0).toUpperCase() + tag.slice(1).replace(/-/g, ' ');
    return {
        title: `${label} - Courses | NalarDeep`,
        description: meta?.description || `Kumpulan artikel tentang ${label}.`,
    };
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
    const { tag } = await params;
    const posts = getPostsByTag(tag);

    if (posts.length === 0) {
        return notFound();
    }

    const meta = courseCategories[tag];
    const label = meta?.label || tag.charAt(0).toUpperCase() + tag.slice(1).replace(/-/g, ' ');
    const description = meta?.description || `Kumpulan artikel tentang ${label}.`;
    const icon = meta?.icon || '📖';
    const bgColor = meta?.color || 'bg-gray-200';

    const totalMinutes = posts.reduce((acc, post) => {
        const mins = parseInt(post.readingTime) || 3;
        return acc + mins;
    }, 0);

    return (
        <div className="bg-white min-h-screen pb-24 relative">
            <div className="absolute inset-0 z-0 bg-dots opacity-[0.05] pointer-events-none"></div>
            <div className="relative z-10">
                {/* Breadcrumb Structured Data: Home > Courses > [Course] */}
                <BreadcrumbSchema
                    items={[
                        { name: 'Beranda', url: BASE_URL },
                        { name: 'Courses', url: `${BASE_URL}/courses` },
                        { name: label, url: `${BASE_URL}/tags/${tag}` },
                    ]}
                />
                <Container>
                    <div className="py-16 md:py-24 max-w-3xl">

                        {/* Back to Courses */}
                        <div className="mb-10">
                            <Link
                                href="/courses"
                                className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Kembali ke Courses
                            </Link>
                        </div>

                        {/* Course Header */}
                        <div className={`${bgColor} p-6 memphis-border memphis-shadow mb-10`}>
                            <div className="flex items-center gap-4">
                                <span className="text-4xl">{icon}</span>
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold text-black">{label}</h1>
                                    <p className="text-sm text-gray-800 mt-1">{description}</p>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="flex gap-4 mt-5">
                                <div className="bg-white border-2 border-gray-900 px-4 py-2 flex items-center gap-2">
                                    <BookOpen className="w-4 h-4 text-gray-700" />
                                    <span className="text-sm font-bold text-gray-900">{posts.length} Artikel</span>
                                </div>
                                <div className="bg-white border-2 border-gray-900 px-4 py-2 flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-gray-700" />
                                    <span className="text-sm font-bold text-gray-900">~{totalMinutes} menit</span>
                                </div>
                            </div>
                        </div>

                        {/* Article List */}
                        <div className="divide-y-2 divide-gray-900 border-2 border-gray-900 bg-white">
                            {posts.map((post, index) => {
                                const mins = parseInt(post.readingTime) || 3;
                                return (
                                    <Link
                                        key={post.slug}
                                        href={`/posts/${post.slug}`}
                                        className="group flex items-center justify-between gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex items-center gap-4 min-w-0">
                                            {/* Nomor urut */}
                                            <span className="shrink-0 w-7 h-7 flex items-center justify-center bg-gray-900 text-white text-xs font-bold">
                                                {index + 1}
                                            </span>
                                            {/* Judul artikel */}
                                            <span className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-2">
                                                {post.title}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3 shrink-0">
                                            <span className="hidden sm:flex items-center gap-1 text-xs text-gray-400 font-medium">
                                                <Clock className="w-3.5 h-3.5" />
                                                {mins} min
                                            </span>
                                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                    </div>
                </Container>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    const tags = new Set<string>();

    posts.forEach(post => {
        post.tags?.forEach(tag => {
            tags.add(tag.toLowerCase().replace(/\s+/g, '-'));
        });
    });

    return Array.from(tags).map((tag) => ({
        tag: tag,
    }));
}
