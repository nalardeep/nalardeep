import Container from "@/components/container";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | NalarDeep',
    description: 'Learn about our mission to democratize tech education.',
};

export default function About() {
    return (
        <div className="bg-white min-h-screen pb-24">
            <Container>
                {/* Header */}
                <div className="py-16 md:py-24 max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                        About NalarDeep
                    </h1>
                    <p className="text-xl text-primary-600 leading-relaxed max-w-2xl">
                        NalarDeep adalah platform dokumentasi tutorial-tutorial AI dan teknologi terkini. Artikel yang dipaparkan telah melalui proses eksperimen, pengujian dan evaluasi untuk memastikan artikel yang berkualitas dan tetap relevan.
                    </p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-8 space-y-8 text-lg text-gray-600 leading-relaxed">
                        <p>
                            NalarDeep merupakan website dokumentasi tutorial yang dibangun pada tahun 2025. 
                        </p>
                        <p>
                            Kami berkomitmen untuk menyediakan konten berkualitas tinggi yang didasarkan pada eksperimen dan evaluasi yang mendalam. Setiap artikel yang kami publikasikan telah melalui proses yang ketat untuk memastikan bahwa informasi yang kami sampaikan akurat, relevan, dan bermanfaat bagi pembaca.
                        </p>
                        <p>
                            Dengan pendekatan yang berfokus pada eksplorasi, eksperimen, dan evaluasi, kami bertujuan untuk memberikan panduan yang tidak hanya informatif tetapi juga praktis. Kami percaya bahwa dengan terus mengevaluasi dan memperbarui konten kami, kami dapat memastikan bahwa pembaca selalu mendapatkan informasi terbaru dan terbaik untuk membantu mereka dalam perjalanan belajar mereka.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Misi Kami</h2>
                        <ul className="space-y-4 list-disc pl-5 marker:text-primary-500">
                            <li><strong>Eksplorasi:</strong> Melakukan eksplorasi mendalam untuk menemukan pengetahuan baru.</li>
                            <li><strong>Eksperimen:</strong> Bereksperimen untuk menemukan solusi terbaik.</li>
                            <li><strong>Evaluasi:</strong> Mengevaluasi kembali solusi agar tetap relevan dan menjawab permasalahan yang ada.</li>
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
