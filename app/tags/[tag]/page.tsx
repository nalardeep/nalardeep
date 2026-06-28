import Container from "@/components/container";
import PostPreview from "@/components/post-preview";
import { getAllPosts, getPostsByTag, getAllTagsWithCounts } from "@/lib/api";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BreadcrumbSchema from "@/components/breadcrumb-schema";
import CategoryFilter from "@/components/category-filter";
import type { Metadata } from "next";

const BASE_URL = "https://nalardeep.com";

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
    const { tag } = await params;
    const label = tag.charAt(0).toUpperCase() + tag.slice(1).replace(/-/g, ' ');
    return {
        title: `${label} - Artikel | NalarDeep`,
        description: `Kumpulan artikel dan tutorial terbaru tentang ${label} di NalarDeep.`,
    };
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
    const { tag } = await params;
    const posts = getPostsByTag(tag);
    const tags = getAllTagsWithCounts();

    if (posts.length === 0) {
        return notFound();
    }

    const label = tag.charAt(0).toUpperCase() + tag.slice(1).replace(/-/g, ' ');

    return (
        <div className="bg-white min-h-screen pb-24 relative">
            <div className="absolute inset-0 z-0 bg-dots opacity-[0.05] pointer-events-none"></div>
            <div className="relative z-10">
                <BreadcrumbSchema
                    items={[
                        { name: 'Beranda', url: BASE_URL },
                        { name: 'Artikel', url: `${BASE_URL}/articles` },
                        { name: label, url: `${BASE_URL}/tags/${tag}` },
                    ]}
                />
                <Container>
                    <div className="py-16 md:py-24 max-w-4xl">
                        <div className="mb-8">
                            <Link href="/articles" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors group">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Kembali ke Artikel
                            </Link>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-6">
                            Kategori: <span className="text-primary-500">{label}</span>
                        </h1>
                        <p className="text-xl text-black leading-relaxed max-w-2xl">
                            Menampilkan {posts.length} artikel dengan kategori "{label}".
                        </p>
                    </div>

                    <CategoryFilter tags={tags} currentTag={tag} />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {posts.map((post) => (
                            <PostPreview key={post.slug} post={post} />
                        ))}
                    </div>
                </Container>
            </div>
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
