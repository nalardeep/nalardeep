import Link from "next/link";
import { getPostBySlug } from "@/lib/api";
import { ArrowRight, Bookmark } from "lucide-react";

interface BacaJugaProps {
    slug: string;
    label?: string;
}

export default async function BacaJuga({ slug, label }: BacaJugaProps) {
    const post = getPostBySlug(slug);

    if (!post) return null;

    return (
        <div className="not-prose my-8">
            <div className="bg-emerald-50/60 border border-emerald-100/60 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300">
                <Link
                    href={`/posts/${post.slug}`}
                    className="group block"
                >
                    <div className="flex items-start gap-3">
                        <div className="hidden sm:flex w-10 h-10 bg-emerald-100 rounded-lg items-center justify-center text-emerald-600 shrink-0 mt-0.5 group-hover:bg-emerald-200 transition-colors">
                            <Bookmark className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-600 mb-1.5">
                                {label || "Baca Juga"}
                            </span>
                            <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-500 transition-colors mb-1.5 leading-snug">
                                {post.title}
                            </h4>
                            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-2">
                                {post.excerpt}
                            </p>
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 group-hover:gap-1.5 transition-all">
                                Baca artikel <ArrowRight className="w-3 h-3" />
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
