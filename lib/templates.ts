export type Template = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  thumbnail: string;
  demoUrl: string;
  githubUrl?: string; // Optional if you want to share the source code
  tags: string[];
  category: "Business" | "Portfolio" | "SaaS" | "Personal";
};

export const templates: Template[] = [
  {
    slug: "modern-saas-landing-page",
    title: "Modern SaaS Landing Page",
    description: "A clean, high-converting landing page for modern software products.",
    longDescription: "This template is built with Tailwind CSS 4 and focuses on speed and conversion. It includes sections for features, pricing, and testimonials.",
    features: ["Responsive Design", "Tailwind CSS 4", "Dark Mode Support", "Optimized SEO"],
    thumbnail: "/assets/templates/modern-saas.png",
    demoUrl: "https://demo.kodeminggo.com/modern-saas",
    tags: ["SaaS", "Tailwind", "Next.js"],
    category: "SaaS",
  },
  // Add more templates here
  {
    slug: "basreng-pedas-landing",
    title: "Basreng Pedas Landing Page",
    description: "A high-converting, professional landing page for snack products.",
    longDescription: "This premium template is designed for snack products with a focus on vibrant aesthetics, WhatsApp integration for direct sales, and SEO optimization. Built with Astro 5.x and Tailwind CSS.",
    features: ["Astro 5.x", "Tailwind CSS", "WhatsApp Integration", "Mobile First", "SEO Optimized"],
    thumbnail: "/assets/templates/basreng.png",
    demoUrl: "https://basreng-landing-demo.vercel.app",
    githubUrl: "https://github.com/minggo-commits/basreng-landing",
    tags: ["Astro", "Tailwind", "eCommerce", "Food"],
    category: "Business",
  },
  {
    slug: "cafe-website-starter",
    title: "Cafe Website Starter Kit",
    description: "A modern, aesthetic coffee shop website template.",
    longDescription: "Perfect for cafes and boutiques, featuring a premium design system, responsive layout, and zero-JS-by-default architecture using Astro 5.",
    features: ["Astro 5", "Tailwind CSS", "Responsive Design", "Premium Aesthetics", "Zero JS"],
    thumbnail: "/assets/templates/cafe.png",
    demoUrl: "https://cafe-website-demo.vercel.app",
    githubUrl: "https://github.com/minggo-commits/cafe-website-starter-kit",
    tags: ["Astro", "Tailwind", "Cafe", "Business"],
    category: "Business",
  },
];

export function getAllTemplates() {
  return templates;
}

export function getTemplateBySlug(slug: string) {
  return templates.find((t) => t.slug === slug);
}
