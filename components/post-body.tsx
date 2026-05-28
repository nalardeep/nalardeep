import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import { CopyButton } from './copy-button';

type Props = {
    content: string;
};

const extractText = (node: any): string => {
    if (typeof node === 'string') return node;
    if (Array.isArray(node)) return node.map(extractText).join('');
    if (node.props && node.props.children) return extractText(node.props.children);
    return '';
};

const isToc = (id: string) => {
    if (!id) return false;
    const lowerId = id.toLowerCase();
    return lowerId.includes('table-of-content') || lowerId.includes('daftar-isi') || lowerId === 'toc';
};

const components = {
    h1: ({ children, id }: any) => {
        if (isToc(id)) return <h1 id={id} className="scroll-mt-24 text-3xl font-bold mt-10 mb-6 text-black [&>a]:text-black">{children}</h1>;
        return (
            <h1 id={id} className="scroll-mt-24 text-3xl font-bold mt-10 mb-6 bg-emerald-400 text-black [&>a]:text-black px-4 py-2 border-2 border-gray-900 shadow-[4px_4px_0px_0px_#171717] w-fit">
                {children}
            </h1>
        );
    },
    h2: ({ children, id }: any) => {
        if (isToc(id)) return <h2 id={id} className="scroll-mt-24 text-2xl font-bold mt-8 mb-4 text-black [&>a]:text-black">{children}</h2>;
        return (
            <h2 id={id} className="scroll-mt-24 text-2xl font-bold mt-8 mb-4 bg-emerald-400 text-black [&>a]:text-black px-3 py-1.5 border-2 border-gray-900 shadow-[4px_4px_0px_0px_#171717] w-fit">
                {children}
            </h2>
        );
    },
    h3: ({ children, id }: any) => {
        if (isToc(id)) return <h3 id={id} className="scroll-mt-24 text-xl font-bold mt-6 mb-3 text-black [&>a]:text-black">{children}</h3>;
        return (
            <h3 id={id} className="scroll-mt-24 text-xl font-bold mt-6 mb-3 bg-emerald-400 text-black [&>a]:text-black px-2.5 py-1 border-2 border-gray-900 shadow-[3px_3px_0px_0px_#171717] w-fit">
                {children}
            </h3>
        );
    },
    h4: ({ children, id }: any) => {
        if (isToc(id)) return <h4 id={id} className="scroll-mt-24 text-lg font-bold mt-4 mb-2 text-black [&>a]:text-black">{children}</h4>;
        return (
            <h4 id={id} className="scroll-mt-24 text-lg font-bold mt-4 mb-2 bg-emerald-400 text-black [&>a]:text-black px-2 py-0.5 border-2 border-gray-900 shadow-[2px_2px_0px_0px_#171717] w-fit">
                {children}
            </h4>
        );
    },
    pre: ({ children }: any) => {
        const text = extractText(children);
        // Pass a prop to the child (usually the <code> tag) to indicate it's inside a <pre>
        const childrenWithProps = React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child as any, { isCodeBlock: true });
            }
            return child;
        });

        return (
            <div className="relative group">
                <CopyButton text={text} />
                <pre className="max-h-[450px] overflow-auto">
                    {childrenWithProps}
                </pre>
            </div>
        );
    },
    strong: ({ children }: any) => (
        <strong className="px-1.5 py-0.5 bg-yellow-300 text-gray-900 border-2 border-gray-900 shadow-[2px_2px_0px_0px_#171717] font-bold mx-0.5">
            {children}
        </strong>
    ),
    b: ({ children }: any) => (
        <b className="px-1.5 py-0.5 bg-yellow-300 text-gray-900 border-2 border-gray-900 shadow-[2px_2px_0px_0px_#171717] font-bold mx-0.5">
            {children}
        </b>
    ),
    code: ({ children, className, isCodeBlock, ...props }: any) => {
        // If it's inside a <pre> tag or has a language class, it's a code block
        if (isCodeBlock || className) {
            return <code className={className} {...props}>{children}</code>;
        }
        // Inline code styling
        return (
            <code className="px-1.5 py-0.5 bg-white text-gray-900 border-2 border-gray-900 shadow-[2px_2px_0px_0px_#171717] font-mono text-[0.85em] mx-0.5" {...props}>
                {children}
            </code>
        );
    },
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
                            remarkPlugins: [remarkGfm],
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
