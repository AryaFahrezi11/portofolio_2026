'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ImageLightbox from './ImageLightbox';
import { getOptimizedImageUrl } from '@/lib/cloudinary-client';

interface GalleryCarouselProps {
    images: { url: string; caption: string }[];
    title: string;
    onIndexChange?: (index: number) => void;
}

export default function GalleryCarousel({ images, title, onIndexChange }: GalleryCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 2000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = useCallback((newDirection: number) => {
        if (images.length <= 1) return;
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = images.length - 1;
            if (nextIndex >= images.length) nextIndex = 0;
            return nextIndex;
        });
    }, [images.length]);

    // Handle index change callback
    useEffect(() => {
        if (onIndexChange) {
            onIndexChange(currentIndex);
        }
    }, [currentIndex, onIndexChange]);

    // Keyboard & Wheel navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') paginate(-1);
            if (e.key === 'ArrowRight') paginate(1);
        };

        const handleWheel = (e: WheelEvent) => {
            if (Math.abs(e.deltaX) > 20) {
                paginate(e.deltaX > 0 ? 1 : -1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('wheel', handleWheel);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('wheel', handleWheel);
        };
    }, [paginate]);

    if (!images || images.length === 0) return null;

    return (
        <div className="relative w-full group">
            {/* Main Image Container */}
            <div
                className="relative aspect-video w-full rounded-[32px] overflow-hidden border border-white/10 bg-white/5 shadow-2xl touch-none flex"
            >
                {/* 
                  Pre-render all images in the DOM to ensure the browser downloads them all at once.
                  This eliminates the delay when swiping between images.
                */}
                <motion.div
                    className="flex h-full w-full"
                    animate={{ x: `-${currentIndex * 100}%` }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                    }}
                    drag={isLightboxOpen ? false : "x"}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.5}
                    onDragEnd={(e, { offset, velocity }) => {
                        if (isLightboxOpen) return;
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        } else if (Math.abs(offset.x) > 100) {
                            paginate(offset.x > 0 ? -1 : 1);
                        }
                    }}
                >
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className="relative min-w-full h-full flex items-center justify-center cursor-zoom-in active:cursor-grabbing"
                            onClick={() => setIsLightboxOpen(true)}
                        >
                            <Image
                                src={getOptimizedImageUrl(img.url, 1200)}
                                alt={`${title} gallery image ${idx + 1}`}
                                fill
                                className="object-cover select-none pointer-events-none"
                                // Priority for the first image, eager for others to start download immediately
                                priority={idx === 0}
                                loading={idx === 0 ? undefined : "eager"}
                                quality={90}
                                draggable={false}
                            />
                        </div>
                    ))}
                </motion.div>

                {/* Counter overlay inside image container - Hide when lightbox open */}
                {!isLightboxOpen && (
                    <div className="absolute bottom-6 right-8 px-4 py-2 rounded-xl bg-black/50 border border-white/10 backdrop-blur-md text-xs font-bold text-white/70 z-10 select-none">
                        {currentIndex + 1} <span className="text-white/20 mx-1">/</span> {images.length}
                    </div>
                )}
                {/* Pagination Dots (Inside) - Hide when lightbox open */}
                {images.length > 1 && !isLightboxOpen && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 px-3 py-2 rounded-full bg-black/30 border border-white/10 backdrop-blur-md z-10">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setDirection(i > currentIndex ? 1 : -1);
                                    setCurrentIndex(i);
                                }}
                                className={`h-1.5 transition-all duration-300 rounded-full ${i === currentIndex ? 'w-8 bg-cyan-500' : 'w-2 bg-white/20 hover:bg-white/40'
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Lightbox Integration */}
            <ImageLightbox
                isOpen={isLightboxOpen}
                onClose={() => setIsLightboxOpen(false)}
                images={images}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
        </div>
    );
}
