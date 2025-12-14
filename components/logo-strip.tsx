import { Share2, Box, Cpu, FileCode } from 'lucide-react';

const LogoStrip = () => {
    return (
        <section className="py-10 border-b border-gray-100">
            <div className="container mx-auto px-5">
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-2 font-bold text-xl text-gray-800">
                        <Share2 className="w-6 h-6" /> AI Daily
                    </div>
                    <div className="flex items-center gap-2 font-bold text-xl text-gray-800">
                        <Box className="w-6 h-6" /> TechMind
                    </div>
                    <div className="flex items-center gap-2 font-bold text-xl text-gray-800">
                        <Cpu className="w-6 h-6" /> NeuralNet
                    </div>
                    <div className="flex items-center gap-2 font-bold text-xl text-gray-800">
                        <FileCode className="w-6 h-6" /> CodeFlow
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoStrip;
