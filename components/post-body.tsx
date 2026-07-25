import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import Image from 'next/image';
import { CopyButton } from './copy-button';
import BacaJuga from './baca-juga';

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

const languageMap: Record<string, string> = {
    js: 'JavaScript',
    javascript: 'JavaScript',
    ts: 'TypeScript',
    typescript: 'TypeScript',
    py: 'Python',
    python: 'Python',
    rb: 'Ruby',
    ruby: 'Ruby',
    rs: 'Rust',
    rust: 'Rust',
    go: 'Go',
    sh: 'Bash',
    bash: 'Bash',
    zsh: 'Zsh',
    powershell: 'PowerShell',
    ps: 'PowerShell',
    json: 'JSON',
    yaml: 'YAML',
    yml: 'YAML',
    xml: 'XML',
    html: 'HTML',
    css: 'CSS',
    scss: 'SCSS',
    sass: 'Sass',
    md: 'Markdown',
    markdown: 'Markdown',
    sql: 'SQL',
    docker: 'Docker',
    dockerfile: 'Docker',
    env: 'ENV',
    txt: 'Text',
    text: 'Text',
    diff: 'Diff',
    php: 'PHP',
    java: 'Java',
    kt: 'Kotlin',
    kotlin: 'Kotlin',
    swift: 'Swift',
    c: 'C',
    cpp: 'C++',
    cs: 'C#',
    csharp: 'C#',
    dart: 'Dart',
    lua: 'Lua',
    graphql: 'GraphQL',
    nginx: 'Nginx',
    ini: 'INI',
    toml: 'TOML',
    makefile: 'Makefile',
    make: 'Make',
};

const getLanguageName = (className?: string): string => {
    if (!className) return '';
    const match = className.match(/language-(\w+)/);
    if (!match) return '';
    const lang = match[1].toLowerCase();
    return languageMap[lang] || lang.charAt(0).toUpperCase() + lang.slice(1);
};

const components = {
    h1: ({ children, id }: any) => {
        if (isToc(id)) return <h1 id={id} className="scroll-mt-24 text-3xl font-extrabold mt-12 mb-6 text-emerald-800 tracking-tight">{children}</h1>;
        return (
            <h1 id={id} className="scroll-mt-24 text-3xl font-extrabold mt-12 mb-6 text-emerald-800 tracking-tight">
                {children}
            </h1>
        );
    },
    h2: ({ children, id }: any) => {
        if (isToc(id)) return <h2 id={id} className="scroll-mt-24 text-2xl font-bold mt-10 mb-4 text-emerald-800 tracking-tight">{children}</h2>;
        return (
            <h2 id={id} className="scroll-mt-24 text-2xl font-bold mt-10 mb-4 text-emerald-800 tracking-tight">
                {children}
            </h2>
        );
    },
    h3: ({ children, id }: any) => {
        if (isToc(id)) return <h3 id={id} className="scroll-mt-24 text-xl font-bold mt-8 mb-3 text-emerald-800 tracking-tight">{children}</h3>;
        return (
            <h3 id={id} className="scroll-mt-24 text-xl font-bold mt-8 mb-3 text-emerald-800 tracking-tight">
                {children}
            </h3>
        );
    },
    h4: ({ children, id }: any) => {
        if (isToc(id)) return <h4 id={id} className="scroll-mt-24 text-lg font-bold mt-6 mb-2 text-emerald-800 tracking-tight">{children}</h4>;
        return (
            <h4 id={id} className="scroll-mt-24 text-lg font-bold mt-6 mb-2 text-emerald-800 tracking-tight">
                {children}
            </h4>
        );
    },
    pre: ({ children }: any) => {
        const text = extractText(children);
        const childArray = React.Children.toArray(children);
        const codeChild = childArray.find((child): child is React.ReactElement<{ className?: string }> =>
            React.isValidElement(child)
        );
        const language = getLanguageName(codeChild?.props?.className);

        const childrenWithProps = React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child as any, { isCodeBlock: true });
            }
            return child;
        });

        return (
            <div className="not-prose relative group my-6 border border-slate-100 rounded-xl overflow-hidden hover:border-emerald-500/40 transition-colors duration-300">
                <div className="flex items-center justify-between px-4 py-1.5 bg-[#0B0F19] border-b border-white/[0.06]">
                    {language ? (
                        <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider select-none">
                            {language}
                        </span>
                    ) : (
                        <span />
                    )}
                    <CopyButton text={text} />
                </div>
                <pre className="max-h-[450px] overflow-auto p-4 bg-[#0B0F19] text-[#e2e8f0] font-mono text-sm leading-relaxed m-0">
                    {childrenWithProps}
                </pre>
            </div>
        );
    },
    strong: ({ children }: any) => (
        <strong className="font-bold text-slate-900">
            {children}
        </strong>
    ),
    b: ({ children }: any) => (
        <b className="font-bold text-slate-900">
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
            <code className="px-1.5 py-0.5 bg-emerald-50/50 text-emerald-700 border border-emerald-100/50 rounded font-mono text-[0.85em] mx-0.5" {...props}>
                {children}
            </code>
        );
    },
    BacaJuga,
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
            <span className="relative block w-full h-auto my-8 border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                <Image
                    src={getCleanSrc(props.src)}
                    alt={props.alt || 'Article image'}
                    width={800}
                    height={500}
                    className="object-cover w-full h-auto"
                />
                {props.title && (
                    <span className="block text-center text-slate-500 text-sm mt-2">{props.title}</span>
                )}
            </span>
        );
    },
};

const PostBody = ({ content }: Props) => {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="prose prose-slate prose-emerald max-w-none prose-a:no-underline prose-a:text-emerald-600 hover:prose-a:text-emerald-500 transition-colors">
                <MDXRemote
                    source={content}
                    components={components}
                    options={{
                        mdxOptions: {
                            remarkPlugins: [remarkGfm],
                            rehypePlugins: [
                                rehypeSlug,
                                [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                                [rehypePrism, { ignoreMissing: true, defaultLanguage: 'text' }],
                            ],
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default PostBody;
