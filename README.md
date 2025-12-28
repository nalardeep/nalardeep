# KodeMinggo

A modern tech blog built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. Designed for showcasing AI and software engineering knowledge with a focus on performance and SEO.

## Quick Start

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run locally**:
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000).

## Key Features

-   ⚡ **Fast**: Server-side rendering and optimized assets.
-   🔎 **SEO Ready**: Sitemap, JSON-LD, and Open Graph tags.
-   📝 **MDX Blog**: Write content in Markdown with React components.
-   📱 **Responsive**: Mobile-first design.

## Tech Stack

-   **Frontend**: Next.js 16, React 19, TypeScript
-   **Styling**: Tailwind CSS 4, Lucide React
-   **Content**: MDX, Gray Matter

## ✍️ Content Guide

### Creating a New Article

1.  Create a new `.mdx` file in the `_posts` directory.
2.  Use the filename as the URL slug (e.g., `my-new-post.mdx` becomes `/posts/my-new-post`).
3.  Add the required frontmatter at the top of the file:

    ```yaml
    ---
    title: "Your Article Title"
    excerpt: "A brief summary for the preview card."
    coverImage: "/assets/blog/your-image-folder/cover.jpg"
    date: "2024-03-20T05:35:07.322Z"
    author:
      name: "Author Name"
      picture: "/assets/blog/authors/profile.png"
    ogImage:
      url: "/assets/blog/your-image-folder/cover.jpg"
    tags: ["Tag1", "Tag2"]
    ---
    ```

### Adding Images

We support optimized, responsive images inside articles.

1.  **Store your image**: Save your image file in `public/assets/blog/`. It's best to create a folder for each post to keep things organized (e.g., `public/assets/blog/my-new-post/image.png`).
2.  **Insert in Markdown**: Use standard markdown syntax where you want the image to appear.

    ```markdown
    ![Image Description](/assets/blog/my-new-post/image.png "Optional Caption")
    ```

    > **Tip**: The system automatically detects internal paths. You can start the path with `/assets/...` or `public/assets/...` — both work!

    **What happens automatically:**
    -   Images are lazy-loaded for performance.
    -   They are responsive and scale on mobile.
    -   They get rounded corners and proper styling.
    -   Captions appear centered below the image if you provide a title.
