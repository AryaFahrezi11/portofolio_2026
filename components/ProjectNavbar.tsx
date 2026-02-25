'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProjectNavbar() {
    return (
        <div className="fixed top-6 inset-x-0 z-[9999] flex justify-center pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    delay: 0.1
                }}
                className="pointer-events-auto relative p-[1px] rounded-full shadow-2xl shadow-cyan-500/10 w-[calc(100%-2rem)] md:w-auto overflow-hidden bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-purple-500/50"
            >
                {/* Match inner container style and padding of Navbar.tsx */}
                <div className="flex items-center justify-between gap-8 p-2.5 md:p-2 lg:p-2.5 bg-[#0a0a0a]/90 backdrop-blur-xl rounded-full w-full h-full px-5 md:px-6 lg:px-8 whitespace-nowrap overflow-hidden">

                    {/* Left: Back Arrow */}
                    <Link
                        href="/#project"
                        className="group flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/10 bg-white/5 hover:bg-cyan-500 hover:border-cyan-400 transition-all active:scale-95 shrink-0"
                    >
                        <span className="text-white group-hover:text-black text-lg md:text-xl transition-colors">←</span>
                    </Link>

                    {/* Center: Title */}
                    <div className="flex-1 text-center">
                        <h2 className="text-[10px] md:text-xs font-bold bg-gradient-to-r from-white via-cyan-100 to-white/70 bg-clip-text text-transparent uppercase tracking-[0.3em] italic leading-none">
                            Project Detail
                        </h2>
                    </div>

                    {/* Right: Empty Spacer for Balance */}
                    <div className="w-10 h-10 md:w-11 md:h-11 opacity-0 pointer-events-none shrink-0" />

                </div>
            </motion.nav>
        </div>
    );
}
