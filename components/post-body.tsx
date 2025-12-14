import { MDXRemote } from 'next-mdx-remote/rsc';

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
                <MDXRemote source={content} components={components} />
            </div>
        </div>
    );
};

export default PostBody;
