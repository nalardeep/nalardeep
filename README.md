# KodeMinggo

![Project Banner](https://img.shields.io/badge/Status-Active-success?style=flat-square) ![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

**KodeMinggo** is a modern, high-performance tech blog platform built to democratize artificial intelligence and software engineering knowledge. It serves as a digital garden for in-depth tutorials, technical analysis, and industry insights, all delivered through a lightning-fast, SEO-optimized web experience.

## 🚀 Tech Stack

This project leverages the latest advancements in the React ecosystem, utilizing a "bleeding-edge" stack for maximum performance and developer experience.

### Core Framework
- **[Next.js 16](https://nextjs.org/)**: Utilizing the App Router for robust routing, server components, and optimized rendering.
- **[React 19](https://react.dev/)**: Building on the latest React concurrent features and server actions.
- **[TypeScript](https://www.typescriptlang.org/)**: extensive static typing for type safety and improved developer tooling.

### Styling & UI
- **[Tailwind CSS 4](https://tailwindcss.com/)**: The latest generation of the utility-first CSS framework (Oxide engine).
- **[Lucide React](https://lucide.dev/)**: Beautiful, consistent, and lightweight icon library.
- **[Geist Font](https://vercel.com/font)**: Vercel's precision-engineered font family for optimal readability.
- **clsx & tailwind-merge**: Robust utility class management and conflict resolution.

### Content & Data
- **[MDX](https://mdxjs.com/)**: Writing content in Markdown with the power of dynamic React components.
- **Gray Matter**: Efficient frontmatter parsing for article metadata.
- **date-fns**: Modern date utility library.

---

## ✨ Key Features

- **Dynamic MDX Blog**: Seamlessly renders Markdown files as rich React pages.
- **SEO Optimized**: Built-in `sitemap.xml`, `robots.txt`, JSON-LD structured data, and dynamic Open Graph tags for social sharing.
- **Performance First**: Zero-layout shift, optimized font web loading, and server-side rendering.
- **Responsive Design**: Mobile-first approach ensuring a premium experience across all devices.
- **E-E-A-T Pages**: Dedicated About and Contact pages to establish domain authority.

---

## 🛠 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have **Node.js 18+** installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/kodeminggo.git
    cd kodeminggo
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    pnpm install
    # or
    yarn install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

A quick look at the top-level files and directories you'll see in this project.

```
.
├── _posts/             # MDX blog content files
├── app/                # Next.js App Router source
│   ├── about/          # About page
│   ├── articles/       # Articles listing page
│   ├── contact/        # Contact page
│   ├── posts/          # Dynamic individual post routes
│   ├── layout.tsx      # Root layout and metadata
│   └── page.tsx        # Home page
├── components/         # Reusable UI components
├── lib/                # Utility functions (API, types)
├── public/             # Static assets
└── package.json        # Project manifest and scripts
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

&copy; 2024-2025 KodeMinggo. All rights reserved.
