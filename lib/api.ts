import fs from 'fs';
import { join, basename, dirname } from 'path';
import matter from 'gray-matter';
import { Post, AdjacentPosts, AdjacentPost } from '@/types';

const postsDirectory = join(process.cwd(), '_posts');

/** Recursively get all .mdx files from subdirectories */
function getAllMdxFiles(dir: string): string[] {
    if (!fs.existsSync(dir)) return [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const files: string[] = [];
    for (const entry of entries) {
        const fullPath = join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...getAllMdxFiles(fullPath));
        } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
            files.push(fullPath);
        }
    }
    return files;
}

/** Find a post file by slug across subdirectories, returns file path and category */
function findPostFile(slug: string): { fullPath: string; category: string } | null {
    const files = getAllMdxFiles(postsDirectory);
    for (const f of files) {
        if (basename(f, '.mdx') === slug) {
            const parentDir = basename(dirname(f));
            return { fullPath: f, category: parentDir };
        }
    }
    return null;
}

/** Extract category name (subdirectory name under _posts/) for a given slug */
export function getPostCategory(slug: string): string | null {
    const found = findPostFile(slug);
    return found?.category || null;
}

export function getPostSlugs() {
    return getAllMdxFiles(postsDirectory).map(f => basename(f));
}

export function getPostBySlug(slug: string): Post | null {
    const realSlug = slug.replace(/\.mdx$/, '');
    const found = findPostFile(realSlug);
    
    if (!found) {
        return null;
    }

    const fileContents = fs.readFileSync(found.fullPath, 'utf8');
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
        tags: data.tags || [],
        content: content,
        readingTime: readingTime,
    } as Post;
}

export function getPostsByTag(tag: string): Post[] {
    const allPosts = getAllPosts();
    return allPosts.filter((post) =>
        post.tags && post.tags.map(t => t.toLowerCase().replace(/\s+/g, '-')).includes(tag.toLowerCase())
    );
}

export function getAllPosts(): Post[] {
    const slugs = getPostSlugs();
    const posts = slugs
        .filter((slug) => slug.endsWith('.mdx'))
        .map((slug) => getPostBySlug(slug))
        .filter((post): post is Post => post !== null)
        // Sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}

export function getRelatedPosts(currentSlug: string, count: number = 4): Post[] {
    const allPosts = getAllPosts();
    const currentPost = getPostBySlug(currentSlug);

    if (!currentPost) {
        return allPosts.slice(0, count);
    }

    const currentTags = (currentPost.tags || []).map(t => t.toLowerCase());
    const currentCategory = getPostCategory(currentSlug);

    // Score each post by tag overlap + category match + title keyword overlap
    const scored = allPosts
        .filter((post) => post.slug !== currentSlug)
        .map((post) => {
            const postTags = (post.tags || []).map(t => t.toLowerCase());
            const postCategory = getPostCategory(post.slug);
            
            // Tag match score (weighted)
            const tagScore = currentTags.reduce((score, tag) => {
                return score + (postTags.includes(tag) ? 2 : 0);
            }, 0);
            
            // Category match bonus (same directory = strong relation)
            const categoryScore = (currentCategory && postCategory && currentCategory === postCategory) ? 3 : 0;
            
            // Title keyword overlap score
            const currentWords = new Set(currentPost.title.toLowerCase().split(/\s+/).filter(w => w.length > 3));
            const postTitleWords = post.title.toLowerCase().split(/\s+/).filter(w => w.length > 3);
            const titleOverlap = postTitleWords.filter(w => currentWords.has(w)).length;
            const titleScore = Math.min(titleOverlap, 2); // cap at 2

            return { post, score: tagScore + categoryScore + titleScore };
        })
        .sort((a, b) => {
            if (b.score !== a.score) return b.score - a.score;
            return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
        });

    return scored.slice(0, count).map(({ post }) => post);
}

/** Get previous and next posts by date for navigation */
export function getAdjacentPosts(slug: string): AdjacentPosts {
    const allPosts = getAllPosts();
    const currentIndex = allPosts.findIndex(p => p.slug === slug);

    if (currentIndex === -1) {
        return { prev: null, next: null };
    }

    const result: AdjacentPosts = { prev: null, next: null };

    // Previous post (older, higher index)
    if (currentIndex < allPosts.length - 1) {
        const prev = allPosts[currentIndex + 1];
        result.prev = {
            slug: prev.slug,
            title: prev.title,
            date: prev.date,
            readingTime: prev.readingTime,
            coverImage: prev.coverImage,
        };
    }

    // Next post (newer, lower index)
    if (currentIndex > 0) {
        const next = allPosts[currentIndex - 1];
        result.next = {
            slug: next.slug,
            title: next.title,
            date: next.date,
            readingTime: next.readingTime,
            coverImage: next.coverImage,
        };
    }

    return result;
}

export function getPopularTags(limit: number = 3): string[] {
    const allPosts = getAllPosts();
    const tagCounts: Record<string, number> = {};

    allPosts.forEach((post) => {
        post.tags?.forEach((tag) => {
            const normalizedTag = tag.toLowerCase().replace(/\s+/g, '-');
            tagCounts[normalizedTag] = (tagCounts[normalizedTag] || 0) + 1;
        });
    });

    return Object.entries(tagCounts)
        .sort(([, countA], [, countB]) => countB - countA)
        .slice(0, limit)
        .map(([tag]) => tag);
}

export interface TagWithCount {
    name: string;
    slug: string;
    count: number;
}

export function getAllTagsWithCounts(): TagWithCount[] {
    const allPosts = getAllPosts();
    const tagsMap: Record<string, { name: string; count: number }> = {};

    allPosts.forEach((post) => {
        post.tags?.forEach((tag) => {
            const normalizedTag = tag.toLowerCase().replace(/\s+/g, '-');
            if (tagsMap[normalizedTag]) {
                tagsMap[normalizedTag].count += 1;
            } else {
                tagsMap[normalizedTag] = { name: tag, count: 1 };
            }
        });
    });

    return Object.entries(tagsMap)
        .map(([slug, data]) => ({
            slug,
            name: data.name,
            count: data.count,
        }))
        .sort((a, b) => b.count - a.count);
}

