import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

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
};

const PostBody = ({ content }: Props) => {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="prose prose-lg prose-green max-w-none">
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
