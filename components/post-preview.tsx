import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';
import { format, parseISO } from 'date-fns';

type Props = {
    post: Post;
};

const PostPreview = ({ post }: Props) => {
    return (
        <div className='group flex flex-col h-full'>
            {/* Image Placeholder */}
            <div className="relative overflow-hidden mb-6 aspect-[16/9] bg-gray-100 memphis-border memphis-shadow-hover transition-all">
                <Image
                    src={post.coverImage || "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 z-10">
                    <span className="bg-yellow-300 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-900 memphis-border">
                        Article
                    </span>
                </div>
            </div>

            <div className="flex-1">
                <h3 className="text-2xl font-bold leading-tight mb-3 group-hover:text-primary-600 transition-colors">
                    <Link href={`/posts/${post.slug}`}>
                        {post.title}
                    </Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                
                {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                            <Link
                                key={tag}
                                href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                                className="bg-yellow-200 hover:bg-yellow-300 text-gray-800 text-[10px] font-extrabold px-2 py-0.5 border border-gray-900 shadow-[2px_2px_0px_0px_#171717] transition-all"
                            >
                                #{tag}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex items-center gap-3 mt-4 text-sm font-medium text-gray-500">
                <img
                    src={post.author.picture}
                    alt={post.author.name}
                    className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-gray-900">{post.author.name}</span>
                <span>•</span>
                <time dateTime={post.date}>{format(parseISO(post.date), 'MMM d, yyyy')}</time>
                <span>•</span>
                <span>{post.readingTime}</span>
            </div>
        </div>
    );
};

export default PostPreview;
