import Container from "@/components/container";
import PostPreview from "@/components/post-preview";
import { getAllPosts } from "@/lib/api";

export default function Home() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <Container>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 text-primary-900">
          Stories.
        </h1>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          A clean, white & green blog example using Next.js and MDX.
        </h4>
      </section>

      {allPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-16 md:gap-x-32 mb-32">
          {allPosts.map((post) => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </div>
      )}
    </Container>
  );
}
