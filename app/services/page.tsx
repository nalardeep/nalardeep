import Container from "@/components/container";
import BreadcrumbSchema from "@/components/breadcrumb-schema";
import Link from "next/link";
import { Workflow, Cpu, MessageSquare, ShieldAlert, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import type { Metadata } from "next";

const BASE_URL = "https://nalardeep.com";

export const metadata: Metadata = {
    title: "Layanan Jasa Otomatisasi n8n & Integrasi AI | NalarDeep",
    description: "Layanan profesional otomatisasi alur kerja (workflow) dengan n8n & Make, custom server MCP, chatbot cerdas, dan sistem RAG lokal kustom untuk akselerasi operasional bisnis Anda.",
    alternates: {
        canonical: "/services",
    },
};

const services = [
    {
        title: "Otomatisasi Workflow (n8n & Make)",
        description: "Hubungkan ratusan aplikasi operasional harian Anda ke dalam alur kerja (workflow) otomatis tanpa batas eksekusi. Hemat waktu dan biaya operasional tim hingga 80%.",
        icon: Workflow,
        iconBg: "bg-emerald-300",
        features: [
            "Setup & Instalasi n8n Self-Hosted di VPS/Docker",
            "Integrasi Google Sheets, Gmail, CRM, & WhatsApp",
            "Penanganan error otomatis & notifikasi sistem"
        ],
        color: "bg-emerald-50"
    },
    {
        title: "Kustom Server Model Context Protocol (MCP)",
        description: "Perluas kemampuan asisten AI (seperti Claude Desktop) untuk berinteraksi langsung dengan database internal, sistem file lokal, hingga API custom perusahaan Anda secara aman.",
        icon: Cpu,
        iconBg: "bg-yellow-300",
        features: [
            "Custom MCP Server berbasis Python & Node.js",
            "Akses aman ke SQLite/PostgreSQL lokal",
            "Otorisasi file sistem kustom untuk agen AI"
        ],
        color: "bg-yellow-50"
    },
    {
        title: "Chatbot Cerdas (WhatsApp & Telegram)",
        description: "Bangun bot otomatisasi customer service yang didukung kecerdasan buatan (Gemini/ChatGPT/LLM Lokal) untuk melayani customer 24 jam dengan nada bicara yang profesional.",
        icon: MessageSquare,
        iconBg: "bg-sky-300",
        features: [
            "Integrasi WhatsApp Business Cloud API Resmi",
            "Koneksi AI Agen dengan n8n sebagai otak bot",
            "Sistem auto-routing ke customer service manusia"
        ],
        color: "bg-sky-50"
    },
    {
        title: "Private RAG & AI Lokal (100% Offline)",
        description: "Gunakan model LLM tercanggih langsung di infrastruktur lokal Anda. Lakukan tanya jawab dengan berkas PDF, dokumen rahasia, & database tanpa takut kebocoran data.",
        icon: ShieldAlert,
        iconBg: "bg-orange-300",
        features: [
            "Instalasi Ollama / Open WebUI di server lokal",
            "Retrieval-Augmented Generation (RAG) dokumen privat",
            "100% data tersimpan lokal, tanpa internet"
        ],
        color: "bg-orange-50"
    }
];

export default function Services() {
    return (
        <div className="bg-white min-h-screen pb-24 relative">
            {/* Memphis Background Dots */}
            <div className="absolute inset-0 z-0 bg-dots opacity-[0.05] pointer-events-none"></div>

            <div className="relative z-10">
                {/* Breadcrumbs Schema */}
                <BreadcrumbSchema
                    items={[
                        { name: "Beranda", url: BASE_URL },
                        { name: "Layanan Jasa", url: `${BASE_URL}/services` }
                    ]}
                />

                <Container>
                    {/* Hero Section */}
                    <div className="py-16 md:py-24 max-w-4xl relative">
                        {/* Abstract Memphis Shapes */}
                        <div className="absolute -top-6 -right-12 hidden lg:block w-32 h-32 bg-yellow-300 rounded-full border-4 border-gray-900 shadow-[6px_6px_0px_0px_#171717] opacity-20 pointer-events-none"></div>
                        <div className="absolute top-20 right-24 hidden lg:block w-16 h-16 bg-dots opacity-30 pointer-events-none"></div>

                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 border-2 border-gray-900 font-bold text-xs uppercase tracking-wider mb-6">
                            <Sparkles className="w-3.5 h-3.5" />
                            Solusi AI & Otomatisasi
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-6 leading-tight">
                            Layanan Jasa <span className="text-primary-600 underline decoration-yellow-300 decoration-8 underline-offset-4">Profesional AI</span> & Automation
                        </h1>
                        <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                            Kami membantu perusahaan dan startup mengintegrasikan agen cerdas AI, melatih LLM lokal, serta mengotomatisasi alur kerja operasional menggunakan n8n secara terukur dan hemat biaya.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div
                                    key={index}
                                    className={`p-8 bg-white border-4 border-gray-900 shadow-[6px_6px_0px_0px_#171717] hover:shadow-[12px_12px_0px_0px_#171717] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between`}
                                >
                                    <div>
                                        {/* Icon Container */}
                                        <div className={`w-14 h-14 ${service.iconBg} border-3 border-gray-900 shadow-[3px_3px_0px_0px_#171717] flex items-center justify-center mb-6`}>
                                            <IconComponent className="w-7 h-7 text-gray-900" />
                                        </div>

                                        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        {/* Features List */}
                                        <ul className="space-y-3 mb-8">
                                            {service.features.map((feat, fIdx) => (
                                                <li key={fIdx} className="flex items-start gap-2.5 text-sm font-semibold text-gray-800">
                                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                                    <span>{feat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Action link */}
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 font-black text-sm uppercase tracking-wider text-gray-900 hover:text-emerald-600 transition-colors group pt-4 border-t-2 border-dashed border-gray-200 mt-auto"
                                    >
                                        Mulai Konsultasi Jasa
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA Banner */}
                    <div className="relative bg-emerald-400 p-8 md:p-12 border-4 border-gray-900 shadow-[8px_8px_0px_0px_#171717] overflow-hidden">
                        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-yellow-300 rounded-full border-4 border-gray-900 shadow-[4px_4px_0px_0px_#171717] opacity-40 pointer-events-none"></div>
                        <div className="absolute top-4 left-1/2 w-20 h-20 bg-dots opacity-20 pointer-events-none"></div>

                        <div className="relative z-10 max-w-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
                                    Siap Mengakselerasi Bisnis Anda dengan AI?
                                </h2>
                                <p className="text-lg font-medium text-gray-900 leading-relaxed max-w-xl">
                                    Diskusikan kebutuhan otomatisasi alur kerja n8n, chatbot bisnis, dan kecerdasan buatan tim Anda bersama kami secara gratis.
                                </p>
                            </div>

                            <Link
                                href="/contact"
                                className="shrink-0 bg-white text-gray-900 font-extrabold uppercase tracking-wider px-6 py-4 border-3 border-gray-900 shadow-[4px_4px_0px_0px_#171717] hover:shadow-[6px_6px_0px_0px_#171717] hover:-translate-y-0.5 active:translate-y-0.5 transition-all flex items-center gap-2 group cursor-pointer"
                            >
                                Konsultasikan Sekarang
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
