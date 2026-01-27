import Link from 'next/link';
import Image from 'next/image';
import { getPopularTags } from '@/lib/api';
import Container from './container';
import { Twitter, Github } from 'lucide-react';

const Footer = () => {
    const popularTags = getPopularTags(3);

    return (
        <footer className="py-20 border-t border-gray-100 bg-white">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:pr-8">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/logo.png"
                                alt="NalarDeep Logo"
                                width={240}
                                height={64}
                                className="h-16 w-auto object-contain"
                                unoptimized
                            />
                        </Link>
                        <p className="text-gray-500 leading-relaxed">
                            NalarDeep adalah jembatan antara baris kode dan kecerdasan buatan. Kami menyajikan wawasan teknologi masa depan, tutorial praktis, dan eksperimen AI untuk developer modern Indonesia.
                        </p>
                    </div>

                    {/* Content Column */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Konten</h4>
                        <ul className="space-y-4 text-gray-500">
                            <li><Link href="/articles" className="hover:text-primary-500 transition-colors">Artikel Terbaru</Link></li>
                            {popularTags.map((tag) => (
                                <li key={tag}>
                                    <Link href={`/tags/${tag}`} className="hover:text-primary-500 transition-colors capitalize">
                                        {tag.replace(/-/g, ' ')}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Perusahaan</h4>
                        <ul className="space-y-4 text-gray-500">
                            <li><Link href="/about" className="hover:text-primary-500 transition-colors">Tentang Kami</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary-500 transition-colors">Kebijakan Privasi</Link></li>
                            <li><Link href="/terms" className="hover:text-primary-500 transition-colors">Syarat & Ketentuan</Link></li>
                            <li><Link href="/cookies" className="hover:text-primary-500 transition-colors">Kebijakan Cookie</Link></li>
                            <li><Link href="/contact" className="hover:text-primary-500 transition-colors">Kontak</Link></li>
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Ikuti Kami</h4>
                        <div className="flex items-center gap-4">
                            <Link href="https://github.com/minggo-commits" aria-label="Visit our Github profile" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-primary-500 transition-all">
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
