import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { AdjacentPosts as AdjacentPostsType } from "@/types";

interface AdjacentPostsProps {
    posts: AdjacentPostsType;
}

export default function AdjacentPosts({ posts }: AdjacentPostsProps) {
    if (!posts.prev && !posts.next) return null;

    return (
        <section className="max-w-2xl mx-auto mt-16 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Previous Article */}
                <div className="flex flex-col">
                    {posts.prev ? (
                        <Link
                            href={`/posts/${posts.prev.slug}`}
                            className="group flex flex-col h-full bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-emerald-200 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-semibold mb-2">
                                <ChevronLeft className="w-3.5 h-3.5" />
                                <span>Artikel Sebelumnya</span>
                            </div>
                            <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-500 transition-colors line-clamp-2 leading-snug">
                                {posts.prev.title}
                            </h4>
                            <div className="mt-auto pt-3 text-[11px] text-slate-400 font-medium">
                                {posts.prev.readingTime}
                            </div>
                        </Link>
                    ) : (
                        <div className="flex flex-col h-full bg-slate-50 border border-slate-50 rounded-xl p-5 opacity-50">
                            <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold mb-2">
                                <ChevronLeft className="w-3.5 h-3.5" />
                                <span>Artikel Sebelumnya</span>
                            </div>
                            <p className="text-sm text-slate-400 italic">Tidak ada artikel sebelumnya</p>
                        </div>
                    )}
                </div>

                {/* Next Article */}
                <div className="flex flex-col">
                    {posts.next ? (
                        <Link
                            href={`/posts/${posts.next.slug}`}
                            className="group flex flex-col h-full bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-emerald-200 hover:-translate-y-0.5 transition-all duration-300 text-right"
                        >
                            <div className="flex items-center justify-end gap-1.5 text-emerald-600 text-xs font-semibold mb-2">
                                <span>Artikel Selanjutnya</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                            </div>
                            <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-500 transition-colors line-clamp-2 leading-snug">
                                {posts.next.title}
                            </h4>
                            <div className="mt-auto pt-3 text-[11px] text-slate-400 font-medium">
                                {posts.next.readingTime}
                            </div>
                        </Link>
                    ) : (
                        <div className="flex flex-col h-full bg-slate-50 border border-slate-50 rounded-xl p-5 opacity-50 text-right">
                            <div className="flex items-center justify-end gap-1.5 text-slate-400 text-xs font-semibold mb-2">
                                <span>Artikel Selanjutnya</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                            </div>
                            <p className="text-sm text-slate-400 italic">Tidak ada artikel selanjutnya</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
