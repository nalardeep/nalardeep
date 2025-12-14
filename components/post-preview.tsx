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
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
                {/* If we had an image, we'd put it here. For now, a simulated visual. */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
                </div>
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
