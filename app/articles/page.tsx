import Container from "@/components/container";
import PostPreview from "@/components/post-preview";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Articles() {
    const allPosts = getAllPosts();

    // Mock categories for the filter tabs
    const categories = ["Latest"];

    return (
        <div className="bg-white min-h-screen pb-24">
            <Container>
                {/* Header Section */}
                <div className="py-16 md:py-24 max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                        Explore AI Insights
                    </h1>
                    <p className="text-xl text-primary-600 leading-relaxed max-w-2xl">
                        Deep dives into machine learning, generative AI, and the future of tech. Stay updated with the latest breakthroughs and tutorials.
                    </p>
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
                {allPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-20">
                        {/* 
               In a real app, we'd filter these. 
               For now, we'll map the existing posts. 
               Since we only have a few, I'll duplicate them to fill the grid for the visual 
            */}
                        {[...allPosts].slice(0, 9).map((post, index) => (
                            <PostPreview key={`${post.slug}-${index}`} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center text-gray-500">No articles found.</div>
                )}

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2">
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-colors">
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-500 text-white font-bold shadow-lg shadow-primary-500/20">
                        1
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-500 font-medium hover:bg-gray-50 hover:text-gray-700 transition-colors">
                        2
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-500 font-medium hover:bg-gray-50 hover:text-gray-700 transition-colors">
                        3
                    </button>
                    <span className="text-gray-300 px-2">...</span>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-500 font-medium hover:bg-gray-50 hover:text-gray-700 transition-colors">
                        12
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-colors">
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

            </Container>
        </div>
    );
}
