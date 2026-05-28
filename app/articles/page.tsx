import Container from "@/components/container";
import PostPreview from "@/components/post-preview";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BreadcrumbSchema from "@/components/breadcrumb-schema";
import { Metadata } from "next";

const BASE_URL = "https://nalardeep.com";

export const metadata: Metadata = {
    title: "Daftar Artikel | NalarDeep",
    description: "Kumpulan artikel terbaru seputar AI, otomatisasi n8n, MCP, LLM, dan ekosistem kecerdasan buatan lainnya.",
    alternates: {
        canonical: "/articles",
    },
};

export default async function Articles({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
    const { page } = await searchParams;
    const allPosts = getAllPosts();
    const postsPerPage = 9;
    const totalPages = Math.ceil(allPosts.length / postsPerPage);
    const currentPage = parseInt(page || "1", 10);
    const clampedPage = Math.max(1, Math.min(currentPage, totalPages));

    const startIndex = (clampedPage - 1) * postsPerPage;
    const visiblePosts = allPosts.slice(startIndex, startIndex + postsPerPage);

    // Mock categories for the filter tabs
    const categories = ["Latest"];

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
                {/* Header Section */}
                <div className="py-16 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-12">
                    {/* Left: Text */}
                    <div className="max-w-xl">
                        <h1 className="text-5xl md:text-6xl font-bold text-black tracking-tight mb-6">
                            Daftar Artikel
                        </h1>
                        <p className="text-xl text-black leading-relaxed">
                            Artikel yang dibuat selalu di update untuk mempertahankan kualitas artikel. Kami berkomitmen untuk memberikan informasi yang akurat, relevan, dan bermanfaat bagi pembaca kami.
                        </p>
                    </div>

                    {/* Right: Memphis Decoration */}
                    <div className="hidden md:block relative w-80 h-64 shrink-0 select-none pointer-events-none">
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
                <div className="border-b border-gray-100 mb-12 overflow-x-auto">
                    <div className="flex items-center gap-8 min-w-max">
                        {categories.map((category, index) => (
                            <button
                                key={category}
                                className={`pb-4 text-sm font-bold tracking-wide transition-colors relative ${index === 0
                                    ? "text-gray-900"
                                    : "text-gray-400 hover:text-gray-600"
                                    }`}
                            >
                                {category}
                                {index === 0 && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500"></span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

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
                                className="w-10 h-10 flex items-center justify-center bg-white text-gray-900 memphis-border hover:memphis-shadow hover:-translate-y-1 transition-all"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </Link>
                        ) : (
                            <button disabled className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-400 memphis-border cursor-not-allowed">
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                        )}

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                            <Link
                                key={pageNum}
                                href={`/articles?page=${pageNum}`}
                                className={`w-10 h-10 flex items-center justify-center font-medium transition-all ${pageNum === clampedPage
                                    ? "bg-yellow-300 text-gray-900 font-bold memphis-border memphis-shadow"
                                    : "bg-white text-gray-900 memphis-border hover:memphis-shadow hover:-translate-y-1"
                                    }`}
                            >
                                {pageNum}
                            </Link>
                        ))}

                        {clampedPage < totalPages ? (
                            <Link
                                href={`/articles?page=${clampedPage + 1}`}
                                className="w-10 h-10 flex items-center justify-center bg-white text-gray-900 memphis-border hover:memphis-shadow hover:-translate-y-1 transition-all"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        ) : (
                            <button disabled className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-400 memphis-border cursor-not-allowed">
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

