import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/api";
import Container from "@/components/container";
import PostBody from "@/components/post-body";
import PostHeader from "@/components/post-header";
import TableOfContents from "@/components/table-of-contents";
import RelatedPosts from "@/components/related-posts";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    const relatedPosts = getRelatedPosts(slug);

    if (!post) {
        return notFound();
    }

    return (
        <Container>
            <article className="mb-32">
                <PostHeader
                    title={post.title}
                    date={post.date}
                    coverImage={post.coverImage}
                    readingTime={post.readingTime}
                    slug={post.slug}
                />

                <div className="flex flex-col xl:flex-row gap-12">
                    <div className="flex-1 min-w-0">
                        <PostBody content={post.content} />
                        <RelatedPosts posts={relatedPosts} />
                    </div>

                    {/* Sidebar with Table of Contents */}
                    <aside className="hidden xl:block w-[250px] shrink-0">
                        <div className="sticky top-32">
                            <TableOfContents />
                        </div>
                    </aside>
                </div>

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

    const title = `${post.title} | KodeMinggo`;
    const description = post.excerpt;
    const ogImage = post.coverImage;
    const images = ogImage ? [ogImage] : [];

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime: post.date,
            url: `https://kodeminggo.com/posts/${slug}`,
            images: images,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: images,
        },
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}
