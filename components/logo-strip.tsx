const LogoStrip = () => {
    return (
        <section className="py-10 border-b border-gray-100 bg-white">
            <div className="container mx-auto px-5">
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-10 md:gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* n8n */}
                    <div className="flex items-center gap-2.5 font-bold text-lg text-gray-800 group">
                        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current transition-colors text-gray-800 group-hover:text-[#FF6C37]" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm8 14.1L12 20.1l-8-4V7.9l8-4 8 4v8.2zM12 7.5c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zm0 7.5c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                        </svg>
                        n8n
                    </div>

                    {/* Chatbot */}
                    <div className="flex items-center gap-2.5 font-bold text-lg text-gray-800 group">
                        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-2 transition-colors text-gray-800 group-hover:text-primary-500" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 8V4m0 0H8m4 0h4m-4 16h.01M5 11v6a2 2 0 002 2h10a2 2 0 002-2v-6m-2-3H7a3 3 0 00-3 3v2a3 3 0 003 3h10a3 3 0 003-3v-2a3 3 0 00-3-3z" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="9" cy="13" r="1" fill="currentColor" />
                            <circle cx="15" cy="13" r="1" fill="currentColor" />
                        </svg>
                        Chatbot
                    </div>

                    {/* LLM */}
                    <div className="flex items-center gap-2.5 font-bold text-lg text-gray-800 group">
                        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-2 transition-colors text-gray-800 group-hover:text-sky-500" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 14.5L12 17l2.5-2.5M12 17V7m-4 5h8m-1 7a3 3 0 01-3 3H8a3 3 0 01-3-3V8a3 3 0 013-3h8a3 3 0 013 3v4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15 5V3m-6 2V3M5 9H3m2 6H3m16-6h2m-2 6h2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        LLM
                    </div>

                    {/* MCP */}
                    <div className="flex items-center gap-2.5 font-bold text-lg text-gray-800 group">
                        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-2 transition-colors text-gray-800 group-hover:text-indigo-500" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="7" width="18" height="10" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 12h.01M12 12h.01M16 12h.01" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7 7V5a2 2 0 012-2h6a2 2 0 012 2v2M7 17v2a2 2 0 002 2h6a2 2 0 002-2v-2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        MCP
                    </div>

                    {/* RAG */}
                    <div className="flex items-center gap-2.5 font-bold text-lg text-gray-800 group">
                        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-2 transition-colors text-gray-800 group-hover:text-emerald-500" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 11V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 19l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7 8h10M7 12h4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        RAG
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoStrip;

