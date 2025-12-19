import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

type Props = {
    content: string;
};

const components = {
    // Add custom components here if needed
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
