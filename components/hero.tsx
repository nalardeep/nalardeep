import Link from 'next/link';

const Hero = () => {
    return (
        <section className="bg-gray-50/50 pt-20 pb-32 border-b border-gray-200">
            <div className="container mx-auto px-5">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-bold uppercase tracking-wide mb-8">
                            <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                            The Future is Now
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Decoding the <br />
                            <span className="text-primary-500">Future of Intelligence</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Deep dives into machine learning, ethics, and the generative AI revolution. Stay ahead of the curve with our weekly insights.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <Link href="/" className="w-full sm:w-auto px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-lg transition-all shadow-lg shadow-primary-500/20 active:scale-95 text-center">
                                Explore the Library
                            </Link>
                            <Link href="/" className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-bold rounded-lg transition-all hover:bg-gray-50 active:scale-95 text-center">
                                Read Manifesto
                            </Link>
                        </div>
                    </div>

                    {/* Right Card (Featured) */}
                    <div className="flex-1 w-full max-w-xl">
                        <div className="relative group cursor-pointer bg-black rounded-3xl p-8 aspect-square flex flex-col justify-end overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                            {/* Abstract Background pattern simulation */}
                            <div className="absolute inset-0 opacity-60">
                                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/30 rounded-full blur-3xl animate-pulse"></div>
                                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                                {/* Simple Grid Overlay */}
                                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <path d="M0,0 L100,100 M100,0 L0,100 M50,0 L50,100 M0,50 L100,50" stroke="white" strokeWidth="0.5" fill="none" />
                                </svg>
                                {/* Glowing Nodes Simulation */}
                                <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary-400 rounded-full shadow-[0_0_10px_#34d399]"></div>
                                <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-primary-400 rounded-full shadow-[0_0_10px_#34d399]"></div>
                                <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-primary-400 rounded-full shadow-[0_0_10px_#34d399]"></div>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                            <div className="relative z-10">
                                <span className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded mb-4">
                                    Featured
                                </span>
                                <h3 className="text-3xl font-bold text-white mb-2">
                                    The Rise of Autonomous Agents
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
