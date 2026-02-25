'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

interface ImageLightboxProps {
    isOpen: boolean;
    onClose: () => void;
    images: { url: string; caption: string }[];
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
}

export default function ImageLightbox({
    isOpen,
    onClose,
    images,
    currentIndex,
    setCurrentIndex
}: ImageLightboxProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    // Handle keyboard navigation - ONLY ESCAPE for closing
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!isOpen) return;
        if (e.key === 'Escape') onClose();
    }, [isOpen, onClose]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, handleKeyDown]);

    if (!images || images.length === 0 || !mounted) return null;

    const lightboxContent = (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/98 backdrop-blur-3xl overflow-hidden"
                    onClick={onClose}
                >
                    {/* Close Button - Responsive Position */}
                    <button
                        onClick={onClose}
                        className="fixed top-4 right-4 md:top-8 md:right-8 z-[10001] p-3 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                        aria-label="Close Lightbox"
                    >
                        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Image Container - Responsive Width & Height */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="relative w-full h-full max-w-[95vw] max-h-[85vh] md:max-w-[85vw] md:max-h-[85vh] flex items-center justify-center pointer-events-none p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-full pointer-events-auto flex items-center justify-center">
                            <Image
                                src={images[currentIndex].url}
                                alt="Expanded Detail"
                                width={1920}
                                height={1080}
                                className="w-auto h-auto max-w-full max-h-full object-contain shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                                priority
                                quality={100}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return createPortal(lightboxContent, document.body);
}
