'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import GalleryCarousel from '@/components/GalleryCarousel';
import ProjectFeaturesAccordion from '@/components/ProjectFeaturesAccordion';

interface ProjectDetailContentProps {
    project: any;
}

export default function ProjectDetailContent({ project }: ProjectDetailContentProps) {
    const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Features & Tech Stack (Sticky) */}
            <div className="lg:col-span-4 order-2 lg:order-1">
                <div className="lg:sticky lg:top-32 space-y-12">
                    {/* About the Project (Desktop Sidebar Version) */}
                    <div className="hidden lg:block">
                        <FadeIn direction="up">
                            <div className="space-y-6">
                                {project.about_title && (
                                    <h2 className="text-3xl font-bold font-serif italic text-cyan-400 relative inline-block">
                                        {project.about_title}
                                        <span className="absolute -bottom-2 left-0 w-12 h-1 bg-cyan-500 rounded-full" />
                                    </h2>
                                )}
                                <div className="text-lg text-white/60 leading-relaxed text-justify whitespace-pre-wrap font-serif italic">
                                    {project.project_description || 'No description provided.'}
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Advanced Features (Relocated from Main) */}
                    {project.features && project.features.length > 0 && (
                        <FadeIn direction="up">
                            <div className="space-y-6">
                                {project.features_title && (
                                    <h2 className="text-3xl font-bold font-serif italic text-cyan-400 relative inline-block">
                                        {project.features_title}
                                        <span className="absolute -bottom-2 left-0 w-12 h-1 bg-cyan-500 rounded-full" />
                                    </h2>
                                )}
                                <ProjectFeaturesAccordion features={project.features} />
                            </div>
                        </FadeIn>
                    )}

                    {/* Tech Stack & Buttons */}
                    <div className="space-y-6 p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                        <div>
                            <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-3 font-serif italic">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tech_stack && project.tech_stack.length > 0 ? project.tech_stack.map((tech: string, i: number) => (
                                    <span key={i} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] sm:text-xs text-white/70 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors font-serif italic">
                                        {tech}
                                    </span>
                                )) : (
                                    <span className="text-white/30 text-xs italic">No tech stack listed</span>
                                )}
                            </div>
                        </div>

                        {project.project_location && (
                            <div>
                                <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2 font-serif italic">Location</h4>
                                <p className="text-xs sm:text-sm text-white/70 font-serif italic">{project.project_location}</p>
                            </div>
                        )}

                        <div className="pt-2 flex flex-col gap-3">
                            {project.demo_url && (
                                <a
                                    href={project.demo_url}
                                    target="_blank"
                                    download={project.demo_type === 'FILE'}
                                    className="group w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-bold font-serif italic rounded-xl transition-all text-center flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-cyan-500/20"
                                >
                                    {project.demo_type === 'FILE' ? (
                                        <>
                                            {project.category === 'Mobile' ? 'Download APK' : 'Download Files'}
                                            <span className="group-hover:translate-y-0.5 transition-transform text-xs">⬇</span>
                                        </>
                                    ) : (
                                        <>
                                            {project.category === 'Mobile' ? 'Download Mobile App' : 'Visit Live Website'}
                                            <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-xs">↗</span>
                                        </>
                                    )}
                                </a>
                            )}
                            {project.project_url && (
                                <a href={project.project_url} target="_blank" className="w-full py-3 bg-white/5 hover:bg-white/10 text-white text-sm font-bold font-serif italic rounded-xl border border-white/10 transition-all text-center flex items-center justify-center gap-2 active:scale-95">
                                    View Source Code
                                    <span className="opacity-50 text-xs">⎙</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: About, Gallery & Scene Details */}
            <div className="lg:col-span-8 order-1 lg:order-2">
                {/* About the Project (Mobile Main Version) */}
                <div className="lg:hidden mb-12">
                    <FadeIn direction="up">
                        <div className="space-y-6">
                            {project.about_title && (
                                <h2 className="text-3xl font-bold font-serif italic text-cyan-400 relative inline-block">
                                    {project.about_title}
                                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-cyan-500 rounded-full" />
                                </h2>
                            )}
                            <div className="text-lg text-white/60 leading-relaxed text-justify whitespace-pre-wrap font-serif italic">
                                {project.project_description || 'No description provided.'}
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Visual Section: Gallery & Scene Details */}
                <div className="space-y-12">
                    {/* Gallery */}
                    {project.gallery_images && project.gallery_images.length > 0 && (
                        <div className="space-y-6">
                            {project.gallery_title && (
                                <h2 className="text-3xl font-bold font-serif italic text-cyan-400 relative inline-block">
                                    {project.gallery_title}
                                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-cyan-500 rounded-full" />
                                </h2>
                            )}
                            <FadeIn direction="up">
                                <GalleryCarousel
                                    images={project.gallery_images}
                                    title={project.project_title}
                                    onIndexChange={setActiveGalleryIndex}
                                />
                            </FadeIn>
                        </div>
                    )}

                    {/* Scene Details */}
                    {project.gallery_images && project.gallery_images.length > 0 && (
                        <FadeIn direction="up">
                            <div className="space-y-6">
                                {project.details_title && (
                                    <h2 className="text-3xl font-bold font-serif italic text-cyan-400 relative inline-block">
                                        {project.details_title}
                                        <span className="absolute -bottom-2 left-0 w-12 h-1 bg-cyan-500 rounded-full" />
                                    </h2>
                                )}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeGalleryIndex}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="text-lg text-white/60 leading-relaxed text-justify whitespace-pre-wrap font-serif italic">
                                            {project.gallery_images[activeGalleryIndex]?.caption || 'No specific details for this scene.'}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </FadeIn>
                    )}
                </div>
            </div>
        </div>
    );
}
