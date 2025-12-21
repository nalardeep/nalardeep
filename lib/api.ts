import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Post } from '@/types';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): Post {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = join(postsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Calculate reading time
    const words = content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / 200) + ' min read';

    return {
        slug: realSlug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        coverImage: data.coverImage,
        author: {
            name: data.author?.name || 'KodeMinggo Team',
            picture: data.author?.picture || '/assets/blog/authors/team.png',
        },
        content: content,
        readingTime: readingTime,
    } as Post;
}

export function getAllPosts(): Post[] {
    const slugs = getPostSlugs();
    const posts = slugs
        .filter((slug) => slug.endsWith('.mdx'))
        .map((slug) => getPostBySlug(slug))
        // Sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}

export function getRelatedPosts(currentSlug: string, count: number = 3): Post[] {
    const allPosts = getAllPosts();
    const related = allPosts
        .filter((post) => post.slug !== currentSlug)
        // Simple randomization for variety
        .sort(() => 0.5 - Math.random())
        .slice(0, count);
    return related;
}
