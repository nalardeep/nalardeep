import Link from 'next/link';
import Image from 'next/image';
import { getPopularTags } from '@/lib/api';
import Container from './container';
import { Twitter, Github } from 'lucide-react';

const Footer = () => {
    const popularTags = getPopularTags(3);

    return (
        <footer className="py-20 border-t border-slate-100 bg-white relative z-10">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:pr-8">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/logo.png"
                                alt="NalarDeep Logo"
                                width={200}
                                height={54}
                                className="h-12 w-auto object-contain"
                                unoptimized
                            />
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            NalarDeep adalah platform hasil dokumentasi eksperimen AI dan belajar AI (MCP, otomatisasi n8n, pengembangan chatbot, RAG, LLM dan banyak lagi). Kami menyajikan tutorial berdasarkan eksperimen dan evaluasi yang telah dilakukan. 
                        </p>
                    </div>

                    {/* Content Column */}
                    <div>
                        <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-6">Konten</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><Link href="/articles" className="hover:text-emerald-500 transition-colors">Artikel Terbaru</Link></li>
                            {popularTags.map((tag) => (
                                <li key={tag}>
                                    <Link href={`/tags/${tag}`} className="hover:text-emerald-500 transition-colors capitalize">
                                        {tag.replace(/-/g, ' ')}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-6">Perusahaan</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><Link href="/about" className="hover:text-emerald-500 transition-colors">Tentang Kami</Link></li>
                            <li><Link href="/privacy" className="hover:text-emerald-500 transition-colors">Kebijakan Privasi</Link></li>
                            <li><Link href="/terms" className="hover:text-emerald-500 transition-colors">Syarat & Ketentuan</Link></li>
                            <li><Link href="/cookies" className="hover:text-emerald-500 transition-colors">Kebijakan Cookie</Link></li>
                            <li><Link href="/contact" className="hover:text-emerald-500 transition-colors">Kontak</Link></li>
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div>
                        <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-6">Ikuti Kami</h4>
                        <div className="flex items-center gap-4">
                            <Link href="https://github.com/minggo-commits/nalardeep" aria-label="Visit our Github profile" className="w-10 h-10 bg-white border border-slate-100 rounded-lg flex items-center justify-center text-slate-700 hover:text-emerald-500 hover:border-emerald-200 shadow-sm hover:shadow-md transition-all duration-300">
                                <Github className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} NalarDeep. Hak Cipta Dilindungi.</p>
                    <div className="flex items-center gap-8">
                        <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms</Link>
                        <Link href="/cookies" className="hover:text-gray-600 transition-colors">Cookies</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
