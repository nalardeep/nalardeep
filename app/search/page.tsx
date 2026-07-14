import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/api';
import { Search, ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import Fuse from 'fuse.js';
import Container from '@/components/container';
import Breadcrumb from '@/components/breadcrumb';

const BASE_URL = 'https://nalardeep.com';

export const metadata: Metadata = {
    title: 'Cari Artikel',
    description: 'Temukan artikel tutorial AI, LLM, n8n, chatbot, dan RAG di NalarDeep',
    robots: {
        index: false,
        follow: true,
    },
};

export default async function SearchPage(props: { searchParams: Promise<{ q?: string }> }) {
    const { q } = await props.searchParams;

    if (!q || !q.trim()) {
        return (
            <Container>
                <div className="pt-4">
                    <Breadcrumb
                        items={[
                            { name: 'Beranda', url: BASE_URL },
                            { name: 'Cari Artikel', url: `${BASE_URL}/search` },
                        ]}
                    />
                </div>
                <div className="max-w-2xl mx-auto pt-8 pb-16 text-center">
                    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Search className="w-7 h-7 text-emerald-500" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 mb-3">Cari Artikel</h1>
                    <p className="text-slate-500">Masukkan kata kunci untuk mencari artikel tutorial AI, LLM, n8n, chatbot, dan RAG.</p>
                </div>
            </Container>
        );
    }

    const query = q.trim();
    const posts = getAllPosts();

    const fuse = new Fuse(posts, {
        keys: [
            { name: 'title', weight: 2 },
            { name: 'excerpt', weight: 1 },
            { name: 'tags', weight: 1.5 },
        ],
        threshold: 0.4,
        includeScore: true,
        minMatchCharLength: 2,
    });

    const results = fuse.search(query);
    const searchResults = results.map((r) => r.item);

    return (
        <Container>
            <div className="pt-4">
                <Breadcrumb
                    items={[
                        { name: 'Beranda', url: BASE_URL },
                        { name: 'Cari Artikel', url: `${BASE_URL}/search` },
                    ]}
                />
            </div>
            <div className="max-w-2xl mx-auto pt-2 pb-12">
                <div className="mb-8">
                    <Link
                        href="/articles"
                        className="text-sm text-emerald-600 hover:text-emerald-500 font-medium transition-colors"
                    >
                        &larr; Kembali ke Artikel
                    </Link>
                </div>

                <div className="flex items-center gap-3 mb-2">
                    <Search className="w-5 h-5 text-emerald-500" />
                    <h1 className="text-2xl font-bold text-slate-900">
                        Hasil Pencarian
                    </h1>
                </div>
                <p className="text-slate-500 mb-8">
                    Menampilkan {searchResults.length} hasil untuk "<span className="font-medium text-slate-700">{query}</span>"
                </p>

                {searchResults.length === 0 ? (
                    <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Search className="w-7 h-7 text-slate-400" />
                        </div>
                        <h2 className="text-lg font-semibold text-slate-700 mb-2">Tidak Ditemukan</h2>
                        <p className="text-slate-500 text-sm max-w-sm mx-auto">
                            Tidak ada artikel yang cocok dengan "<span className="font-medium">{query}</span>".
                            Coba gunakan kata kunci lain yang lebih spesifik.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {searchResults.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/posts/${post.slug}`}
                                className="group block bg-white border border-slate-100 rounded-xl p-5 hover:border-emerald-500/30 hover:shadow-sm transition-all duration-300"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1 min-w-0">
                                        <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>
                                        <p className="text-sm text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-slate-400">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {new Date(post.date).toLocaleDateString('id-ID', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                })}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3.5 h-3.5" />
                                                {post.readingTime}
                                            </span>
                                            {post.tags && post.tags.length > 0 && (
                                                <span className="flex items-center gap-1">
                                                    <Tag className="w-3.5 h-3.5" />
                                                    {post.tags.slice(0, 3).join(', ')}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </Container>
    );
}
