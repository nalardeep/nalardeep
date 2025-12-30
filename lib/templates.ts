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
];

export function getAllTemplates() {
  return templates;
}

export function getTemplateBySlug(slug: string) {
  return templates.find((t) => t.slug === slug);
}
