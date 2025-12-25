import Container from "@/components/container";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | KodeMinggo',
    description: 'Learn about our mission to democratize tech education.',
};

export default function About() {
    return (
        <div className="bg-white min-h-screen pb-24">
            <Container>
                {/* Header */}
                <div className="py-16 md:py-24 max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                        About KodeMinggo
                    </h1>
                    <p className="text-xl text-primary-600 leading-relaxed max-w-2xl">
                        KodeMinggo adalah platform yang menyediakan informasi tentang AI dan teknologi terkini. Kami berkomitmen untuk membuat AI terbuka dan transparan untuk semua orang.
                    </p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-8 space-y-8 text-lg text-gray-600 leading-relaxed">
                        <p>
                            Kami percaya bahwa teknologi seharusnya mempermudah, bukan mempersulit. Itulah mengapa KodeMinggo hadir dengan dua misi utama yaitu, Mengedukasi dan Memberdayakan.
                        </p>
                        <p>
                            Sebagai blog teknologi, kami menyajikan analisis mendalam tentang Artificial Intelligence. Namun, kami tidak berhenti pada teori.
                        </p>
                        <p>
                            KodeMinggo juga merupakan platform utilitas gratis. Kami menyediakan berbagai tools berbasis AI dan developer utilities yang dirancang untuk mempercepat workflow Anda tanpa biaya berlangganan, tanpa batasan tersembunyi.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Misi Kami</h2>
                        <ul className="space-y-4 list-disc pl-5 marker:text-primary-500">
                            <li><strong>Demokratisasi Pengetahuan:</strong> Edukasi teknologi gratis dan berkualitas tinggi untuk semua orang.</li>
                            <li><strong>Fokus Praktis:</strong> Mengutamakan penerapan dunia nyata di atas teori abstrak.</li>
                            <li><strong>Utamakan Komunitas:</strong> Belajar menjadi lebih baik saat kita melakukannya bersama-sama.</li>
                        </ul>
                    </div>

                    {/* Sidebar / Stats */}
                    <div className="md:col-span-4">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-6">Quick Stats</h3>
                            <div className="space-y-6">
                                <div>
                                    <div className="text-3xl font-bold text-primary-500">50+</div>
                                    <div className="text-sm text-gray-500 font-medium">Detailed Tutorials</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-primary-500">10k+</div>
                                    <div className="text-sm text-gray-500 font-medium">Monthly Readers</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-primary-500">100%</div>
                                    <div className="text-sm text-gray-500 font-medium">Open Source</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
