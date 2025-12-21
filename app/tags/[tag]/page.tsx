import Container from "@/components/container";
import PostPreview from "@/components/post-preview";
import { getAllPosts, getPostsByTag } from "@/lib/api";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
    const { tag } = await params;
    const posts = getPostsByTag(tag);
    const displayedTag = tag.replace(/-/g, ' ');

    if (posts.length === 0) {
        return notFound();
    }

    return (
        <div className="bg-white min-h-screen pb-24">
            <Container>
                <div className="py-16 md:py-24 max-w-4xl">
                    <div className="mb-8">
                        <Link href="/articles" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary-500 transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Articles
                        </Link>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6 capitalize">
                        Topic: <span className="text-primary-500">{displayedTag}</span>
                    </h1>
                    <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
                        Found {posts.length} article{posts.length === 1 ? '' : 's'} tagged with "{displayedTag}".
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {posts.map((post) => (
                        <PostPreview key={post.slug} post={post} />
                    ))}
                </div>
            </Container>
        </div>
    );
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    const tags = new Set<string>();

    posts.forEach(post => {
        post.tags?.forEach(tag => {
            tags.add(tag.toLowerCase().replace(/\s+/g, '-'));
        });
    });

    return Array.from(tags).map((tag) => ({
        tag: tag,
    }));
}
