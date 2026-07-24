import type { Metadata } from "next";
import { Space_Grotesk, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nalardeep.com"),
  title: {
    default: "NalarDeep - Portal Ekosistem AI",
    template: "%s | NalarDeep",
  },
  description: "Berita terbaru tentang ekosistem AI. Mulai dari implementasi MCP, otomatisasi n8n, hingga pengembangan chatbot cerdas untuk mengakselerasi proyek Anda.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    siteName: "NalarDeep",
    type: "website",
    locale: "id_ID",
    title: "NalarDeep - Portal Ekosistem AI",
    description: "Berita terbaru tentang ekosistem AI. Mulai dari implementasi MCP, otomatisasi n8n, hingga pengembangan chatbot cerdas untuk mengakselerasi proyek Anda.",
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 216,
        alt: 'NalarDeep Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "NalarDeep - Portal Ekosistem AI",
    description: "Berita terbaru tentang ekosistem AI. Mulai dari implementasi MCP, otomatisasi n8n, hingga pengembangan chatbot cerdas untuk mengakselerasi proyek Anda.",
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  other: {
    'theme-color': '#10b981',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": "NalarDeep",
      "alternateName": ["Nalar Deep", "NalarDeep AI"],
      "url": "https://nalardeep.com",
      "description": "Portal dokumentasi tutorial AI dan programming, MCP, otomatisasi n8n, pengembangan chatbot, RAG, dan LLM.",
      "inLanguage": "id-ID",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://nalardeep.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "name": "NalarDeep",
      "url": "https://nalardeep.com",
      "logo": "https://nalardeep.com/logo.png",
      "description": "Platform dokumentasi tutorial AI dan programming. Menyajikan artikel berdasarkan eksperimen dan evaluasi yang telah dilakukan.",
      "foundingDate": "2025",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Makassar",
        "addressCountry": "ID"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "hello@nalardeep.com",
        "contactType": "customer service",
        "availableLanguage": ["Indonesian", "English"]
      },
      "sameAs": [
        "https://github.com/minggo-commits"
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
