import Container from "@/components/container";
import PostPreview from "@/components/post-preview";
import { getAllPosts, getAllTagsWithCounts } from "@/lib/api";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BreadcrumbSchema from "@/components/breadcrumb-schema";
import Breadcrumb from "@/components/breadcrumb";
import CategoryFilter from "@/components/category-filter";
import { Metadata } from "next";

const BASE_URL = "https://nalardeep.com";

export const metadata: Metadata = {
    title: "Daftar Artikel",
    description: "Kumpulan artikel terbaru seputar AI, otomatisasi n8n, MCP, LLM, dan ekosistem kecerdasan buatan lainnya.",
    alternates: {
        canonical: "/articles",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default async function Articles({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
    const { page } = await searchParams;
    const allPosts = getAllPosts();
    const tags = getAllTagsWithCounts();
    const postsPerPage = 9;
    const totalPages = Math.ceil(allPosts.length / postsPerPage);
    const currentPage = parseInt(page || "1", 10);
    const clampedPage = Math.max(1, Math.min(currentPage, totalPages));

    const startIndex = (clampedPage - 1) * postsPerPage;
    const visiblePosts = allPosts.slice(startIndex, startIndex + postsPerPage);

    return (
        <div className="bg-white min-h-screen pb-24 relative">
            <div className="absolute inset-0 z-0 bg-dots opacity-[0.05] pointer-events-none"></div>
            <div className="relative z-10">
            {/* Breadcrumb Structured Data: Home > Artikel */}
            <BreadcrumbSchema
                items={[
                    { name: 'Beranda', url: BASE_URL },
                    { name: 'Artikel', url: `${BASE_URL}/articles` },
                ]}
            />
            <Container>
                <div className="pt-4">
                    <Breadcrumb
                        items={[
                        { name: 'Beranda', url: BASE_URL },
                        { name: 'Artikel', url: `${BASE_URL}/articles` },
                        ]}
                    />
                </div>
                {/* Header Section */}
                <div className="pt-6 md:pt-8 pb-16 md:pb-24 flex flex-col md:flex-row md:items-center md:justify-between gap-12">
                    {/* Left: Text */}
                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-600 border border-emerald-100/50 rounded-full font-semibold text-xs uppercase tracking-wider mb-6 shadow-glow-sm">
                            <span>📚</span> Semua Artikel
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
                            Daftar Artikel
                        </h1>
                        <p className="text-lg text-slate-500 leading-relaxed">
                            Artikel yang dibuat selalu di update untuk mempertahankan kualitas artikel. Kami berkomitmen untuk memberikan informasi yang akurat, relevan, dan bermanfaat bagi pembaca kami.
                        </p>
                    </div>

                    {/* Right: Decorative Shapes */}
                    <div className="relative hidden md:block w-64 h-64 flex-shrink-0">
                        {/* Big yellow square */}
                        <div className="absolute top-0 right-8 w-28 h-28 bg-yellow-300 border-3 border-gray-900 shadow-[6px_6px_0px_0px_#171717] rotate-6"></div>
                        {/* Emerald circle */}
                        <div className="absolute top-6 right-44 w-16 h-16 bg-emerald-400 border-3 border-gray-900 shadow-[4px_4px_0px_0px_#171717] rounded-full"></div>
                        {/* Sky blue rectangle */}
                        <div className="absolute bottom-8 right-12 w-36 h-16 bg-sky-300 border-3 border-gray-900 shadow-[5px_5px_0px_0px_#171717] -rotate-3"></div>
                        {/* Orange small square */}
                        <div className="absolute bottom-20 right-48 w-12 h-12 bg-orange-300 border-3 border-gray-900 shadow-[3px_3px_0px_0px_#171717] rotate-12"></div>
                        {/* Violet triangle via clip-path */}
                        <div className="absolute top-28 right-24 w-14 h-14 bg-violet-300 border-3 border-gray-900 shadow-[3px_3px_0px_0px_#171717] rotate-45"></div>
                        {/* Dots accent */}
                        <div className="absolute top-2 left-0 w-20 h-20 bg-dots opacity-20"></div>
                        {/* Zigzag SVG */}
                        <svg className="absolute bottom-0 left-2 w-24 h-10" viewBox="0 0 96 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <polyline points="0,20 12,4 24,20 36,4 48,20 60,4 72,20 84,4 96,20" stroke="#171717" strokeWidth="3" strokeLinejoin="round" fill="none"/>
                        </svg>
                        {/* Cross / plus sign */}
                        <svg className="absolute top-2 right-0 w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="20" y1="4" x2="20" y2="36" stroke="#171717" strokeWidth="4" strokeLinecap="round"/>
                            <line x1="4" y1="20" x2="36" y2="20" stroke="#171717" strokeWidth="4" strokeLinecap="round"/>
                        </svg>
                    </div>
                </div>

                {/* Filters */}
                <CategoryFilter tags={tags} />

                {/* Grid */}
                {visiblePosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-20">
                        {visiblePosts.map((post, index) => (
                            <PostPreview key={`${post.slug}-${index}`} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center text-gray-500">No articles found.</div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2">
                        {clampedPage > 1 ? (
                            <Link
                                href={`/articles?page=${clampedPage - 1}`}
                                className="w-10 h-10 flex items-center justify-center bg-white text-slate-500 border border-slate-200 rounded-xl hover:border-emerald-300 hover:text-emerald-500 hover:shadow-glow-sm transition-all"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </Link>
                        ) : (
                            <button disabled className="w-10 h-10 flex items-center justify-center bg-slate-50 text-slate-300 border border-slate-100 rounded-xl cursor-not-allowed">
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                        )}

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                            <Link
                                key={pageNum}
                                href={`/articles?page=${pageNum}`}
                                className={`w-10 h-10 flex items-center justify-center text-sm font-semibold rounded-xl transition-all ${
                                    pageNum === clampedPage
                                        ? "bg-emerald-500 text-white shadow-glow-sm border border-emerald-400"
                                        : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-300 hover:text-emerald-500 hover:shadow-glow-sm"
                                }`}
                            >
                                {pageNum}
                            </Link>
                        ))}

                        {clampedPage < totalPages ? (
                            <Link
                                href={`/articles?page=${clampedPage + 1}`}
                                className="w-10 h-10 flex items-center justify-center bg-white text-slate-500 border border-slate-200 rounded-xl hover:border-emerald-300 hover:text-emerald-500 hover:shadow-glow-sm transition-all"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        ) : (
                            <button disabled className="w-10 h-10 flex items-center justify-center bg-slate-50 text-slate-300 border border-slate-100 rounded-xl cursor-not-allowed">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                )}
            </Container>
            </div>
        </div>
    );
}

