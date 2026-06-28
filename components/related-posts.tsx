import Link from "next/link";
import { Post } from "@/types";
import { format, parseISO } from "date-fns";
import { ArrowRight } from "lucide-react";

interface RelatedPostsProps {
    posts: Post[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
    if (posts.length === 0) return null;

    return (
        <section className="border-t border-slate-100 py-16 mt-16 bg-slate-50/30 -mx-5 sm:-mx-8 px-5 sm:px-8 relative">
            <div className="absolute inset-0 bg-dots opacity-[0.015] pointer-events-none"></div>
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Baca Artikel Lainnya</h2>
                    <Link
                        href="/articles"
                        className="flex items-center gap-2 bg-white border border-slate-100 text-slate-800 px-4 py-2 rounded-lg shadow-glow-sm hover:shadow-glow-md hover:border-emerald-200 hover:-translate-y-0.5 transition-all text-xs font-semibold"
                    >
                        Semua Artikel <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/posts/${post.slug}`} className="group block h-full">
                            <div className="flex flex-col h-full bg-white border border-slate-100 rounded-xl p-5 shadow-glow-sm group-hover:shadow-glow-md group-hover:border-emerald-200 group-hover:-translate-y-0.5 transition-all duration-300">
                                <div className="mb-3">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                                        Article
                                    </span>
                                </div>
                                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-500 transition-colors mb-2 line-clamp-2 tracking-tight">
                                    {post.title}
                                </h3>
                                <p className="text-xs text-slate-500 line-clamp-2 mb-4 flex-1 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium">
                                    <time dateTime={post.date}>{format(parseISO(post.date), 'MMM d, yyyy')}</time>
                                    <span>•</span>
                                    <span>{post.readingTime}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
