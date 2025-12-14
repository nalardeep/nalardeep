import Link from 'next/link';
import { Post } from '@/types';
import { format, parseISO } from 'date-fns';

type Props = {
    post: Post;
};

const PostPreview = ({ post }: Props) => {
    return (
        <div className='group flex flex-col h-full'>
            {/* Image Placeholder */}
            <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[16/9] bg-gray-100">
                <img
                    src={post.coverImage || "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-gray-800 shadow-sm">
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
            </div>

            <div className="flex items-center gap-3 mt-4 text-sm font-medium text-gray-500">
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">A</div>
                <span>Author Name</span>
                <span>•</span>
                <time dateTime={post.date}>{format(parseISO(post.date), 'MMM d, yyyy')}</time>
            </div>
        </div>
    );
};

export default PostPreview;
