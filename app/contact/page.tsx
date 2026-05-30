import Container from "@/components/container";
import BreadcrumbSchema from "@/components/breadcrumb-schema";
import { Metadata } from 'next';
import { Mail, MapPin, Phone } from "lucide-react";

const BASE_URL = "https://nalardeep.com";

export const metadata: Metadata = {
    title: 'Contact Us | NalarDeep',
    description: 'Get in touch with the team.',
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
                {/* Header */}
                <div className="py-16 md:py-24 max-w-4xl">
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
                                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 bg-white border-2 border-gray-900 focus:outline-none focus:ring-0 focus:memphis-shadow transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 bg-white border-2 border-gray-900 focus:outline-none focus:ring-0 focus:memphis-shadow transition-all"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-3 bg-white border-2 border-gray-900 focus:outline-none focus:ring-0 focus:memphis-shadow transition-all resize-none"
                                    placeholder="Tell us what's on your mind..."
                                ></textarea>
                            </div>
                            <a
                                href="mailto:arsan05062003@gmail.com"
                                className="inline-block text-center bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 memphis-border memphis-shadow hover:memphis-shadow-hover hover:-translate-y-1 transition-all"
                            >
                                Kirim Pesan
                            </a>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-500 shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Email</div>
                                        <a href="mailto:hello@nalardeep.com" className="text-gray-500 hover:text-primary-500 transition-colors">arsan05062003@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-500 shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Office</div>
                                        <p className="text-gray-500">Makassar, Indonesia</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-500 shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Phone</div>
                                        <p className="text-gray-500">+62 853 4224 8110</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-emerald-400 text-gray-900 p-8 memphis-border memphis-shadow">
                            <h3 className="font-bold text-xl mb-4">Bergabung dengan kami?</h3>
                            <p className="text-gray-900 font-medium mb-6">Segera hadir.</p>
                            <a href="#" className="text-gray-900 font-bold border-b-2 border-gray-900 pb-1 hover:text-white transition-colors">Lihat Pekerjaan &rarr;</a>
                        </div>
                    </div>
                </div>
            </Container>
            </div>
        </div>
    );
}
