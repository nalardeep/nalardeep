export type Author = {
    name: string;
    picture: string;
    github?: string;
    googleScholar?: string;
};

export type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    coverImage?: string;
    author: Author;
    tags?: string[];
    content: string;
    readingTime: string;
};

export type Frontmatter = {
    title: string;
    date: string;
    excerpt: string;
    coverImage?: string;
    author: Author;
    tags?: string[];
};

export type AdjacentPost = {
    slug: string;
    title: string;
    date: string;
    readingTime: string;
    coverImage?: string;
};

export type AdjacentPosts = {
    prev: AdjacentPost | null;
    next: AdjacentPost | null;
};
