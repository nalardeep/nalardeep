import Link from 'next/link';
import { Post } from '@/types';
import { format, parseISO } from 'date-fns';

type Props = {
    post: Post;
};

const PostPreview = ({ post }: Props) => {
    return (
        <div className='group'>
            <div className="mb-5 text-sm text-gray-500">
                <time dateTime={post.date}>{format(parseISO(post.date), 'LLLL d, yyyy')}</time>
            </div>
            <h3 className="text-3xl font-bold leading-tight mb-3 group-hover:text-primary-600 transition-colors">
                <Link href={`/posts/${post.slug}`} className="hover:underline">
                    {post.title}
                </Link>
            </h3>
            <p className="text-lg leading-relaxed mb-4 text-gray-600">{post.excerpt}</p>
        </div>
    );
};

export default PostPreview;
