import { getAllPosts, getPostBySlug } from "@/lib/api";
import Container from "@/components/container";
import PostBody from "@/components/post-body";
import PostHeader from "@/components/post-header";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return notFound();
    }

    return (
        <Container>
            <article className="mb-32">
                <PostHeader title={post.title} date={post.date} coverImage={post.coverImage} />
                <PostBody content={post.content} />
            </article>
        </Container>
    );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return notFound();
    }

    return {
        title: `${post.title} | minggo-commits`,
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}
