export type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    coverImage?: string;
    content: string;
};

export type Frontmatter = {
    title: string;
    date: string;
    excerpt: string;
    coverImage?: string;
};
