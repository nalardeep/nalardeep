import Container from "@/components/container";
import BreadcrumbSchema from "@/components/breadcrumb-schema";
import Breadcrumb from "@/components/breadcrumb";
import { Metadata } from 'next';
import { Mail, MapPin, Phone } from "lucide-react";

const BASE_URL = "https://nalardeep.com";

export const metadata: Metadata = {
    title: 'Hubungi Kami',
    description: 'Hubungi tim NalarDeep untuk pertanyaan, saran, atau konsultasi jasa otomatisasi n8n, integrasi AI, chatbot, dan pengembangan web.',
    alternates: {
        canonical: '/contact',
    },
};

export default function Contact() {
    return (
        <div className="bg-white min-h-screen pb-24 relative">
            <div className="absolute inset-0 z-0 bg-dots opacity-[0.05] pointer-events-none"></div>
            <div className="relative z-10">
            {/* Breadcrumb Structured Data: Home > Contact */}
            <BreadcrumbSchema
                items={[
                    { name: 'Beranda', url: BASE_URL },
                    { name: 'Contact', url: `${BASE_URL}/contact` },
                ]}
            />
            <Container>
                <div className="pt-4">
                    <Breadcrumb
                        items={[
                            { name: 'Beranda', url: BASE_URL },
                            { name: 'Contact', url: `${BASE_URL}/contact` },
                        ]}
                    />
                </div>
                {/* Header */}
                <div className="pt-6 md:pt-8 pb-16 md:pb-24 max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                        Hubungi Kami
                    </h1>
                    <p className="text-xl text-black leading-relaxed max-w-2xl">
                        Jika Anda memiliki pertanyaan atau saran, maka jangan ragu untuk menghubungi kami. 
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-emerald-500 focus:shadow-[0_0_12px_rgba(16,185,129,0.15)] focus:outline-none transition-all text-slate-800"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-emerald-500 focus:shadow-[0_0_12px_rgba(16,185,129,0.15)] focus:outline-none transition-all text-slate-800"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-emerald-500 focus:shadow-[0_0_12px_rgba(16,185,129,0.15)] focus:outline-none transition-all resize-none text-slate-800"
                                    placeholder="Tell us what's on your mind..."
                                ></textarea>
                            </div>
                            <a
                                href="mailto:arsan05062003@gmail.com"
                                className="inline-block text-center bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-3 px-8 rounded-xl shadow-glow-sm hover:shadow-glow-md hover:scale-[1.01] active:scale-[0.99] transition-all"
                            >
                                Kirim Pesan
                            </a>
                        </form>
                    </div>
 
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Informasi Kontak</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-emerald-50 border border-emerald-100/50 rounded-full flex items-center justify-center text-emerald-500 shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">Email</div>
                                        <a href="mailto:hello@nalardeep.com" className="text-slate-500 hover:text-emerald-500 transition-colors">arsan05062003@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-emerald-50 border border-emerald-100/50 rounded-full flex items-center justify-center text-emerald-500 shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">Office</div>
                                        <p className="text-slate-500">Makassar, Indonesia</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-emerald-50 border border-emerald-100/50 rounded-full flex items-center justify-center text-emerald-500 shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">Phone</div>
                                        <p className="text-slate-500">+62 853 4224 8110</p>
                                    </div>
                                </div>
                            </div>
                        </div>
 
                        <div className="bg-gradient-to-r from-emerald-50 to-teal-50/50 border border-emerald-100 rounded-2xl p-8 shadow-glow-sm">
                            <h3 className="font-bold text-slate-900 text-lg mb-3 tracking-tight">Bergabung dengan kami?</h3>
                            <p className="text-slate-600 text-sm font-medium mb-6">Segera hadir.</p>
                            <a href="#" className="inline-flex items-center gap-1 text-emerald-600 font-bold border-b border-emerald-600 pb-0.5 hover:text-emerald-500 hover:border-emerald-500 transition-colors text-sm">Lihat Pekerjaan &rarr;</a>
                        </div>
                    </div>
                </div>
            </Container>
            </div>
        </div>
    );
}
