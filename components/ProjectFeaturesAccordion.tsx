'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Feature {
    title: string;
    description: string;
}

interface ProjectFeaturesAccordionProps {
    features: Feature[];
}

interface AccordionItemProps {
    feature: Feature;
    index: number;
}

function AccordionItem({ feature, index }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="group rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/20 transition-all duration-500 overflow-hidden h-fit flex flex-col">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-3 flex items-center justify-between gap-3 text-left min-h-[60px]"
            >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                        <span className="text-cyan-400 text-xs font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold font-serif italic text-white/90 group-hover:text-cyan-400 transition-colors leading-tight line-clamp-2">
                        {feature.title}
                    </h3>
                </div>
                <div className={`w-5 h-5 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 flex-shrink-0 ${isOpen ? 'rotate-90 bg-cyan-500 border-cyan-400' : ''}`}>
                    <span className={`text-white text-[9px] transform transition-colors ${isOpen ? 'text-black font-bold' : ''}`}>
                        {'>'}
                    </span>
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="px-3 pb-3 pl-[50px] pr-3">
                            <p className="text-white/50 text-xs sm:text-sm leading-relaxed text-justify font-serif italic">
                                {feature.description}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function ProjectFeaturesAccordion({ features }: ProjectFeaturesAccordionProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 items-start">
            {features.map((feature, i) => (
                <AccordionItem key={i} feature={feature} index={i} />
            ))}
        </div>
    );
}
