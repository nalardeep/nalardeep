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

-   **Fast**: Server-side rendering and optimized assets.
-   **SEO Ready**: Sitemap, JSON-LD, and Open Graph tags.
-   **MDX Blog**: Write content in Markdown with React components.
-   **Responsive**: Mobile-first design.

## Tech Stack

-   **Frontend**: Next.js 16, React 19, TypeScript
-   **Styling**: Tailwind CSS 4, Lucide React
-   **Content**: MDX, Gray Matter

## Template Management

This project includes a feature to showcase landing page templates.

### Adding a New Template
1.  Open `lib/templates.ts`.
2.  Add a new object to the `templates` array with the template details (slug, title, demoUrl, etc.).
3.  For the `thumbnail`, use the path `/assets/templates/your-slug.webp`.

### Generating Thumbnails
We have an automated script to generate thumbnails from the `demoUrl` of each template.

1.  Ensure your internet connection is active.
2.  Run the generation script:
    ```bash
    npm run generate-thumbnails
    ```
3.  This will using Puppeteer to visit each demo URL, take a screenshot, and save it as a WebP image in `public/assets/templates/`.

## Content Guide

### Creating a New Article

1.  Create a new `.mdx` file in the `_posts` directory.
2.  Use the filename as the URL slug (e.g., `my-new-post.mdx` becomes `/posts/my-new-post`).
3.  Add the required frontmatter at the top of the file:

    ```yaml
    ---
    title: "Your Article Title"
    excerpt: "A brief summary for the preview card."
    coverImage: "/assets/blog/your-image-folder/cover.webp"
    date: "2024-03-20T05:35:07.322Z"
    author:
      name: "Author Name"
      picture: "/assets/blog/authors/profile.png"
    ogImage:
      url: "/assets/blog/your-image-folder/cover.webp"
    tags: ["Tag1", "Tag2"]
    ---
    ```

### Adding Images

We support optimized, responsive images inside articles.

1.  **Store your image**: Save your image file in `public/assets/blog/`. It is best to create a folder for each post to keep things organized (e.g., `public/assets/blog/my-new-post/image.webp`).
2.  **Insert in Markdown**: Use standard markdown syntax where you want the image to appear.

    ```markdown
    ![Image Description](/assets/blog/my-new-post/image.webp "Optional Caption")
    ```

    **Important Notes:**
    -   Always use the absolute path starting with `/assets/...`.
    -   Do not include `public` in the path string in your markdown or frontmatter.
    -   We recommend using **WebP** format for better performance.
