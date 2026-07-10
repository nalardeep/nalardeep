import Container from "@/components/container";
import BreadcrumbSchema from "@/components/breadcrumb-schema";
import Breadcrumb from "@/components/breadcrumb";
import Link from "next/link";
import { Workflow, Cpu, MessageSquare, ShieldAlert, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import type { Metadata } from "next";

const BASE_URL = "https://nalardeep.com";

export const metadata: Metadata = {
    title: "Layanan Jasa Otomatisasi n8n & Integrasi AI | NalarDeep",
    description: "Layanan profesional otomatisasi alur kerja (workflow) dengan n8n, custom landing page, chatbot dan private RAG",
    alternates: {
        canonical: "/services",
    },
};

const services = [
    {
        title: "Otomatisasi Workflow (n8n)",
        description: "Hubungkan ratusan aplikasi operasional harian Anda ke dalam alur kerja (workflow) otomatis. Hemat waktu dan biaya operasional tim hingga 80%.",
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
        title: "Chatbot Cerdas (WhatsApp & Telegram)",
        description: "Bangun bot otomatisasi customer service yang didukung kecerdasan buatan (Gemini/ChatGPT/LLM Lokal) untuk melayani customer 24 jam.",
        icon: MessageSquare,
        iconBg: "bg-sky-300",
        features: [
            "Integrasi WhatsApp Business Cloud API Resmi",
            "Koneksi AI Agen dengan n8n",
            "Sistem auto-routing ke customer service"
        ],
        color: "bg-sky-50"
    },
    {
        title: "Custom Landing Page & Web App",
        description: "Buat landing page dan web app dengan desain modern, responsif, dan terintegrasi dengan sistem otomatisasi n8n.",
        icon: MessageSquare,
        iconBg: "bg-sky-300",
        features: [
            "Desain modern dan responsif",
            "Integrasi dengan sistem otomatisasi n8n",
            "Optimisasi SEO & performa web"
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
            <div className="absolute inset-0 z-0 bg-dots opacity-[0.03] pointer-events-none"></div>

            <div className="relative z-10">
                {/* Breadcrumbs Schema */}
                <BreadcrumbSchema
                    items={[
                        { name: "Beranda", url: BASE_URL },
                        { name: "Layanan Jasa", url: `${BASE_URL}/services` }
                    ]}
                />

                <Container>
                    <div className="pt-4">
                        <Breadcrumb
                            items={[
                                { name: 'Beranda', url: BASE_URL },
                                { name: 'Layanan Jasa', url: `${BASE_URL}/services` },
                            ]}
                        />
                    </div>
                    {/* Hero Section */}
                    <div className="pt-6 md:pt-8 pb-16 md:pb-24 max-w-4xl relative">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-600 border border-emerald-100/50 rounded-full font-semibold text-xs uppercase tracking-wider mb-6 shadow-glow-sm">
                            <Sparkles className="w-3.5 h-3.5" />
                            Solusi AI & Otomatisasi
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                            Layanan Jasa <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 text-glow">Profesional AI</span> & Automation
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                            Kami membantu perusahaan dan startup mengintegrasikan agen cerdas AI, LLM lokal, serta mengotomatisasi alur kerja operasional menggunakan n8n secara terukur dan hemat biaya.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div
                                    key={index}
                                    className="p-8 bg-white border border-slate-100 rounded-2xl shadow-glow-sm hover:shadow-glow-md hover:border-emerald-200 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div>
                                        {/* Icon Container */}
                                        <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100/50 shadow-glow-sm flex items-center justify-center mb-6 text-emerald-500">
                                            <IconComponent className="w-6 h-6" />
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        {/* Features List */}
                                        <ul className="space-y-3 mb-8">
                                            {service.features.map((feat, fIdx) => (
                                                <li key={fIdx} className="flex items-start gap-2.5 text-sm font-medium text-slate-700">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                                                    <span>{feat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Action link */}
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 font-semibold text-xs uppercase tracking-wider text-slate-800 hover:text-emerald-600 transition-colors group pt-4 border-t border-slate-100 mt-auto"
                                    >
                                        Mulai Konsultasi Jasa
                                        <ArrowRight className="w-3.5 h-3.5 text-emerald-500 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA Banner */}
                    {/* <div className="relative bg-gradient-to-r from-emerald-500 to-teal-600 p-8 md:p-12 border border-emerald-400 rounded-2xl shadow-glow-md overflow-hidden">
                        <div className="absolute top-4 left-1/2 w-20 h-20 bg-dots opacity-[0.03] pointer-events-none"></div>

                        <div className="relative z-10 max-w-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                                    Siap Mengakselerasi Bisnis Anda dengan AI?
                                </h2>
                                <p className="text-sm md:text-base font-medium text-emerald-50 leading-relaxed max-w-xl">
                                    Diskusikan kebutuhan otomatisasi alur kerja n8n, chatbot bisnis, dan kecerdasan buatan tim Anda bersama kami secara gratis.
                                </p>
                            </div>

                            <Link
                                href="/contact"
                                className="shrink-0 bg-white hover:bg-emerald-50 text-emerald-800 font-semibold uppercase tracking-wider text-xs px-6 py-3.5 rounded-lg shadow-glow-sm hover:shadow-glow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group cursor-pointer"
                            >
                                Konsultasikan Sekarang
                                <ArrowRight className="w-4 h-4 text-emerald-500 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </div>
                    </div> */}
                </Container>
            </div>
        </div>
    );
}
