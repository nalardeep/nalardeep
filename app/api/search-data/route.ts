import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/api';

export async function GET() {
    const posts = getAllPosts();
    const searchData = posts.map((post) => ({
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        tags: post.tags || [],
        readingTime: post.readingTime,
        date: post.date,
    }));
    return NextResponse.json(searchData);
}
