import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';
import { format, parseISO } from 'date-fns';

type Props = {
    post: Post;
};

const PostPreview = ({ post }: Props) => {
    return (
        <div className='group flex flex-col h-full bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300'>
            {/* Image Placeholder */}
            <div className="relative overflow-hidden mb-5 aspect-[16/9] bg-slate-50 rounded-xl">
                <Image
                    src={post.coverImage || "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 z-10">
                    <span className="bg-emerald-500 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        Article
                    </span>
                </div>
            </div>

            <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold leading-tight mb-2 text-slate-900 group-hover:text-emerald-500 transition-colors tracking-tight">
                    <Link href={`/posts/${post.slug}`}>
                        {post.title}
                    </Link>
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                
                {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                        {post.tags.slice(0, 3).map((tag) => (
                            <Link
                                key={tag}
                                href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                                className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 hover:text-emerald-800 text-[10px] font-semibold px-2.5 py-1 rounded-md transition-colors"
                            >
                                #{tag}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-50 text-xs font-medium text-slate-500">
                <img
                    src={post.author.picture}
                    alt={post.author.name}
                    className="w-6 h-6 rounded-full object-cover border border-slate-100"
                />
                <span className="text-slate-800">{post.author.name}</span>
                <span className="text-slate-300">•</span>
                <time dateTime={post.date}>{format(parseISO(post.date), 'MMM d, yyyy')}</time>
                <span className="text-slate-300">•</span>
                <span>{post.readingTime}</span>
            </div>
        </div>
    );
};

export default PostPreview;
