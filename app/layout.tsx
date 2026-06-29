import type { Metadata } from "next";
import { Space_Grotesk, Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nalardeep.com"),
  title: "NalarDeep",
  description: "Berita terbaru tentang ekosistem AI. Mulai dari implementasi MCP, otomatisasi n8n, hingga pengembangan chatbot cerdas untuk mengakselerasi proyek Anda.",
  openGraph: {
    siteName: "NalarDeep",
    type: "website",
    locale: "id_ID",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NalarDeep",
    "url": "https://nalardeep.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://nalardeep.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NalarDeep",
    "url": "https://nalardeep.com",
    "logo": "https://nalardeep.com/logo.png",
    "sameAs": [
      "https://github.com/minggo-commits"
    ]
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased flex flex-col min-h-screen`}
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
