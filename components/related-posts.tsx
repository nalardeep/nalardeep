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
        <section className="border-t-3 border-gray-900 py-16 mt-16 bg-white -mx-5 sm:-mx-8 px-5 sm:px-8 relative">
            <div className="absolute inset-0 bg-dots opacity-[0.03] pointer-events-none"></div>
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-black bg-emerald-400 px-4 py-1.5 border-2 border-gray-900 shadow-[4px_4px_0px_0px_#171717]">Read Next</h2>
                    <Link
                        href="/articles"
                        className="text-gray-900 font-bold hover:-translate-y-1 transition-all flex items-center gap-2 text-sm bg-yellow-300 px-4 py-2 memphis-border memphis-shadow hover:memphis-shadow-hover"
                    >
                        View all articles <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/posts/${post.slug}`} className="group block h-full">
                            <div className="flex flex-col h-full bg-white memphis-border memphis-shadow group-hover:memphis-shadow-hover group-hover:-translate-y-1 transition-all p-5">
                                <div className="mb-4">
                                    <span className="text-xs font-bold uppercase tracking-wider text-gray-900 bg-yellow-300 px-2 py-1 border-2 border-gray-900">
                                        Article
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-black group-hover:text-emerald-600 transition-colors mb-2 line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-2 text-xs text-gray-900 font-bold">
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
