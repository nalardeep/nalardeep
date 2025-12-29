import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Image from 'next/image';

type Props = {
    content: string;
};

const components = {
    h2: ({ children, id }: any) => (
        <h2 id={id} className="scroll-mt-24 text-2xl font-bold mt-8 mb-4">
            {children}
        </h2>
    ),
    h3: ({ children, id }: any) => (
        <h3 id={id} className="scroll-mt-24 text-xl font-bold mt-6 mb-3">
            {children}
        </h3>
    ),
    img: (props: any) => {
        // Helper to clean the source path
        const getCleanSrc = (src: string) => {
            if (!src) return '';
            // If it starts with 'public/', remove it
            let cleanSrc = src.replace(/^public\//, '');
            // Ensure it starts with '/' if it's not a remote URL
            if (!cleanSrc.startsWith('/') && !cleanSrc.startsWith('http')) {
                cleanSrc = '/' + cleanSrc;
            }
            return cleanSrc;
        };

        return (
            <span className="relative block w-full h-auto my-8">
                <Image
                    src={getCleanSrc(props.src)}
                    alt={props.alt || 'Article image'}
                    width={800}
                    height={500}
                    className="rounded-lg object-cover w-full h-auto"
                />
                {props.title && (
                    <span className="block text-center text-gray-500 text-sm mt-2">{props.title}</span>
                )}
            </span>
        );
    },
};

const PostBody = ({ content }: Props) => {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="prose prose-lg prose-green max-w-none prose-a:no-underline">
                <MDXRemote
                    source={content}
                    components={components}
                    options={{
                        mdxOptions: {
                            rehypePlugins: [
                                rehypeSlug,
                                [rehypeAutolinkHeadings, { behavior: 'wrap' }]
                            ],
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default PostBody;
