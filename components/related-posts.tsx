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
        <section className="border-t border-gray-100 py-16 mt-16 bg-gray-50/50 -mx-5 sm:-mx-8 px-5 sm:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Read Next</h2>
                    <Link
                        href="/articles"
                        className="text-primary-600 font-bold hover:text-primary-700 transition-colors flex items-center gap-2 text-sm"
                    >
                        View all articles <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/posts/${post.slug}`} className="group block h-full">
                            <div className="flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-5 border border-gray-100 hover:border-primary-100">
                                <div className="mb-4">
                                    <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 px-2 py-1 rounded">
                                        Article
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2 line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
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
