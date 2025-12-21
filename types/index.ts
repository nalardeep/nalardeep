export type Author = {
    name: string;
    picture: string;
};

export type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    coverImage?: string;
    author: Author;
    content: string;
    readingTime: string;
};

export type Frontmatter = {
    title: string;
    date: string;
    excerpt: string;
    coverImage?: string;
    author: Author;
};
