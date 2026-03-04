'use client';

import React, { useState, useEffect, CSSProperties } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ProfileCard from '@/components/ProfileCard';
import TextType from '@/components/TextType';
import TrueFocus from '@/components/TrueFocus';
import CVDownloadModal from '@/components/CVDownloadModal';
import dynamic from 'next/dynamic';
import FadeIn from '@/components/FadeIn';

// --- TAMENG ANTI-CRASH (ERROR BOUNDARY) ---
class Safe3D extends React.Component<{ children: React.ReactNode, fallback?: React.ReactNode }, { hasError: boolean }> {
    constructor(props: { children: React.ReactNode, fallback?: React.ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(_: Error) {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className="w-full h-full min-h-[250px] flex items-center justify-center border border-white/10 bg-white/5 rounded-2xl p-6 text-center backdrop-blur-sm">
                    <p className="text-white/40 text-sm font-serif italic">
                        Animasi 3D dinonaktifkan untuk menyesuaikan performa perangkat Anda.
                    </p>
                </div>
            );
        }
        return this.props.children;
    }
}

// Lazy load heavy components
const Lanyard = dynamic(() => import('@/components/Lanyard'), {
    ssr: false,
    loading: () => <div className="w-full h-full flex items-center justify-center text-white/20 text-sm font-serif italic">Loading 3D...</div>
});

const ChromaGrid = dynamic(() => import('@/components/ChromaGrid'), {
    ssr: false,
    loading: () => <div className="w-full h-[600px] flex items-center justify-center text-white/20 text-sm font-serif italic">Loading Projects...</div>
});

const GradientText = dynamic(() => import('@/components/GradientText'), { ssr: true });

// Types for Portfolio Data
interface PortfolioData {
    homeContent: {
        greeting: string;
        name: string;
        description: string;
        cv_url: string;
    };
    homeStats: {
        id: number;
        stat_label: string;
        stat_value: string;
        gradient_from: string;
        gradient_to: string;
    }[];
    aboutContent: {
        who_am_i_content: string;
        my_approach_content: string;
        lanyard_card_file: string;
        lanyard_texture_file: string;
    };
    skills: {
        id: number;
        skill_name: string;
        skill_category: string;
        skill_icon: string;
        border_color: string;
        gradient_from: string;
        gradient_to: string;
    }[];
    projects: {
        id: number;
        project_title: string;
        project_subtitle: string;
        project_description: string;
        project_image_url: string;
        project_tech_stack: string[];
        project_url?: string;
        project_repo_url?: string;
        project_handle?: string;
        category?: string;
        border_color?: string;
        gradient?: string;
    }[];
    profileCard: {
        handle: string;
        status: string;
        avatar_url: string;
        mini_avatar_url: string;
    };
    socials: {
        platform: string;
        url: string;
        icon: string;
    }[];
}

export default function Home() {
    const router = useRouter();
    const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isCVModalOpen, setIsCVModalOpen] = useState(false);

    // SENSOR HP: Mencegah Lanyard load di HP
    const [isMobileDevice, setIsMobileDevice] = useState(false);

    // Contact Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'website',
        message: '',
        sendVia: 'whatsapp'
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.message) {
            alert('Please fill in at least Name and Message');
            return;
        }

        if (formData.sendVia === 'whatsapp') {
            const phoneNumber = '6285226498182';
            const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0A%0A${formData.message}`;
            window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
        } else {
            const subject = `${formData.subject} - ${formData.name}`;
            const body = `Name: ${formData.name}%0AEmail: ${formData.email}%0A%0A${formData.message}`;
            window.open(`mailto:aryamaroely86@gmail.com?subject=${subject}&body=${body}`);
        }

        setFormData({
            name: '',
            email: '',
            subject: 'website',
            message: '',
            sendVia: 'whatsapp'
        });
    };

    useEffect(() => {
        // Cek apakah diakses lewat HP (lebar layar < 1024px)
        const checkMobile = () => setIsMobileDevice(window.innerWidth < 1024);
        checkMobile(); // Set awal
        window.addEventListener('resize', checkMobile);

        async function fetchData() {
            try {
                const cacheBusterUrl = `/api/portfolio-data?t=${new Date().getTime()}`;
                const res = await fetch(cacheBusterUrl, {
                    cache: 'no-store',
                    headers: {
                        'Cache-Control': 'no-cache, no-store, must-revalidate',
                        'Pragma': 'no-cache',
                        'Expires': '0'
                    }
                });

                if (!res.ok) throw new Error('Failed to fetch data');
                const data = await res.json();
                setPortfolioData(data);
            } catch (error) {
                console.error('Error fetching portfolio data:', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (isLoading) {
        return (
            <div className="fixed inset-0 bg-black flex items-center justify-center z-40">
                <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 mx-auto">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 animate-spin" style={{ animationDuration: '3s' }}></div>
                        <div className="absolute inset-1 rounded-full bg-black flex items-center justify-center">
                            <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                AF
                            </span>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-center gap-2">
                        <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2.5 h-2.5 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                </div>
            </div>
        );
    }

    if (!portfolioData) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="text-center max-w-md">
                    <p className="text-red-400 text-xl mb-4">⚠️ Failed to load portfolio data</p>
                    <p className="text-white/60 mb-6">Please check your internet connection or Supabase config.</p>
                    <button onClick={() => window.location.reload()} className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors">
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={`${isLoading ? 'opacity-0' : 'opacity-100 animate-fade-in'} transition-opacity duration-200 relative`}>
            <Navbar />
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-cyan-900/10 via-purple-900/5 to-transparent -z-10 pointer-events-none" />

            {/* Home Section */}
            <div id="home" className="w-full pt-32 sm:pt-36 md:pt-40 lg:pt-48 px-4 sm:px-6 md:px-8 lg:px-12 pb-12">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="text-white order-2 lg:order-1 flex flex-col gap-4 sm:gap-6 md:gap-8">
                            <div className="flex flex-col gap-4 sm:gap-5">
                                <FadeIn delay={0.6} direction="down">
                                    <div className="text-base sm:text-lg md:text-xl text-white/70 leading-tight">
                                        <TrueFocus
                                            sentence={portfolioData?.homeContent?.greeting || 'Halo, saya'}
                                            manualMode={false}
                                            blurAmount={5}
                                            borderColor="#06b6d4"
                                            glowColor="rgba(6, 182, 212, 0.6)"
                                            animationDuration={0.5}
                                            pauseBetweenAnimations={0.5}
                                            className="font-serif italic"
                                        />
                                    </div>
                                </FadeIn>
                                <FadeIn delay={0.7} direction="right">
                                    <div className="w-full">
                                        <TextType
                                            as="h1"
                                            text={portfolioData?.homeContent?.name || 'Your Name'}
                                            typingSpeed={75}
                                            pauseDuration={1500}
                                            showCursor={true}
                                            cursorCharacter="|"
                                            loop={true}
                                            className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold italic tracking-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent leading-tight break-words"
                                            cursorClassName="bg-white/70"
                                        />
                                    </div>
                                </FadeIn>
                            </div>
                            <FadeIn delay={0.8} direction="up">
                                <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed text-justify font-serif italic">
                                    {portfolioData?.homeContent?.description || 'Deskripsi belum tersedia.'}
                                </p>
                            </FadeIn>
                            <FadeIn delay={0.9} direction="up">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 animate-fade-in-up">
                                    <span className="text-xs sm:text-sm md:text-base text-white/70 font-serif italic">Ikuti saya:</span>
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <a href="https://github.com/AryaFahrezi11" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110">
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        </a>
                                        <a href="https://www.linkedin.com/in/arya-fahrezi-7a1268291" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-110">
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </FadeIn>
                            <FadeIn delay={1.0} direction="up">
                                <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
                                    <button onClick={() => scrollToSection('#project')} className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">
                                        <span className="flex items-center justify-center gap-2 font-serif italic"><span>🚀</span>Jelajahi Proyek Saya</span>
                                    </button>
                                    <button onClick={() => setIsCVModalOpen(true)} className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-semibold rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                                        <span className="flex items-center justify-center gap-2 font-serif italic">Unduh CV Saya<span>📥</span></span>
                                    </button>
                                </div>
                            </FadeIn>
                        </div>
                        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                            <FadeIn delay={1.2} direction="up" className="w-full lg:max-w-[340px] xl:max-w-[360px]">
                                {portfolioData?.profileCard && (
                                    <ProfileCard
                                        handle={portfolioData.profileCard.handle}
                                        status={portfolioData.profileCard.status}
                                        contactText="Contact Me"
                                        avatarUrl={portfolioData.profileCard.avatar_url}
                                        miniAvatarUrl={portfolioData.profileCard.mini_avatar_url}
                                        showUserInfo={true}
                                        enableTilt={!isMobileDevice} // Matikan tilt di HP biar ringan
                                        enableMobileTilt={false}
                                        onContactClick={() => scrollToSection('#contact')}
                                    />
                                )}
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div id="about" className="w-full pt-11 sm:pt-12 md:pt-11 lg:pt-13 px-4 sm:px-6 md:px-8 lg:px-12 pb-8 lg:pb-12">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold italic tracking-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">About Me</h2>
                    </div>
                    <div className="relative space-y-6 lg:space-y-8">
                        <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600">
                            <div className="relative bg-black rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
                                    <div className="lg:col-span-8 space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
                                        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-8 backdrop-blur-sm">
                                            <div className="space-y-3">
                                                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif italic font-bold text-white/90">Who am I</h2>
                                                <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed text-justify font-serif italic">{portfolioData?.aboutContent?.who_am_i_content || 'Konten belum tersedia.'}</p>
                                            </div>
                                            <div className="space-y-3">
                                                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif italic font-bold text-white/90">My Approach</h2>
                                                <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed text-justify font-serif italic">{portfolioData?.aboutContent?.my_approach_content || 'Konten belum tersedia.'}</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                                            {(portfolioData?.homeStats || []).map((stat) => (
                                                <div key={stat.id} className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-2 sm:p-3 text-center hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
                                                    <div className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent leading-tight" style={{ backgroundImage: `linear-gradient(to right, ${stat.gradient_from}, ${stat.gradient_to})` }}>{stat.stat_value}</div>
                                                    <div className="text-[10px] sm:text-xs text-white/60 mt-1 leading-tight">{stat.stat_label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right Column - 3D Lanyard or Fallback Image */}
                                    <div className="lg:col-span-4 flex items-center justify-center order-1 lg:order-2 h-[350px] sm:h-[500px] lg:h-[550px] xl:h-[600px] relative overflow-visible">
                                        {isMobileDevice ? (
                                            // FALLBACK HP: Render Gambar 2D Statis (Sangat Ringan)
                                            <div className="relative w-[200px] sm:w-[250px] aspect-[2.5/4] rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-white/10 group animate-fade-in">
                                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                                                <img
                                                    src={
                                                        portfolioData?.aboutContent?.lanyard_card_file?.startsWith('http')
                                                            ? portfolioData.aboutContent.lanyard_card_file
                                                            : (portfolioData?.aboutContent?.lanyard_card_file ? `/assets/lanyard/${portfolioData.aboutContent.lanyard_card_file}` : '/assets/lanyard/id-card.png')
                                                    }
                                                    alt="ID Card"
                                                    className="w-full h-full object-cover"
                                                    loading="eager"
                                                />
                                            </div>
                                        ) : (
                                            // LAPTOP/PC: Render 3D Lanyard
                                            <Safe3D>
                                                <Lanyard
                                                    position={[0, 0, 20]}
                                                    gravity={[0, -40, 0]}
                                                    cardTextureFile={portfolioData?.aboutContent?.lanyard_card_file}
                                                    textureFile={portfolioData?.aboutContent?.lanyard_texture_file}
                                                />
                                            </Safe3D>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div id="skills" className="w-full pt-11 sm:pt-12 md:pt-11 lg:pt-13 px-4 sm:px-6 md:px-8 lg:px-12 pb-8 lg:pb-12" >
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12 sm:mb-16">
                        <FadeIn delay={0.1} direction="down">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold italic tracking-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">My Skills</h2>
                        </FadeIn>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
                        {(portfolioData?.skills || []).map((skill, index) => (
                            <FadeIn key={skill.id} delay={0.1 + (index * 0.05)} direction="up" className="h-full">
                                <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-lg p-2 sm:p-3 transition-all duration-300 hover:scale-105 hover:border-opacity-100 h-full" style={{ '--skill-border-color': skill.border_color || 'rgba(255,255,255,0.3)' } as CSSProperties}>
                                    <div className="absolute -inset-[1px] rounded-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10" style={{ background: `linear-gradient(135deg, ${skill.gradient_from}, ${skill.gradient_to})`, filter: 'blur(4px)' }}></div>
                                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: `linear-gradient(135deg, ${skill.gradient_from}10, ${skill.gradient_to}10)` }}></div>
                                    <div className="relative flex items-center gap-2 w-full">
                                        <div className="text-2xl sm:text-3xl transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                                            {skill.skill_icon?.startsWith('http') ? <img src={skill.skill_icon} alt={skill.skill_name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" /> : skill.skill_icon}
                                        </div>
                                        <div className="flex-1 min-w-0 font-serif italic">
                                            <h3 className="text-xs sm:text-sm font-bold text-white truncate">{skill.skill_name}</h3>
                                            <p className="text-[9px] sm:text-[10px] text-white/60 truncate">{skill.skill_category}</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div >

            {/* Project Section */}
            < div id="project" className="w-full pt-11 sm:pt-12 md:pt-11 lg:pt-13 px-4 sm:px-6 md:px-8 lg:px-12 pb-8 lg:pb-12" >
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12 sm:mb-16">
                        <FadeIn delay={0.1} direction="down">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold italic tracking-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">My Projects</h2>
                        </FadeIn>
                    </div>
                    <div className="flex justify-center mb-10">
                        <motion.nav className="relative p-[1px] rounded-full shadow-lg shadow-cyan-500/5 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 overflow-hidden">
                            <div className="flex items-center gap-1 p-1.5 bg-[#0a0a0a]/90 backdrop-blur-xl rounded-full">
                                {['All', 'Web', 'Mobile'].map((category) => {
                                    const isActive = selectedCategory === category;
                                    return (
                                        <button key={category} onClick={() => setSelectedCategory(category)} className="relative px-5 py-2 md:px-7 md:py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wider transition-colors duration-200 min-w-[80px] md:min-w-[100px] font-serif italic">
                                            {isActive && <motion.div layoutId="activeFilter" className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-full" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                                            <span className={`relative z-10 transition-colors duration-200 ${isActive ? 'text-cyan-400' : 'text-white/40 hover:text-white/70'}`}>{category === 'All' ? 'Semua' : category}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.nav>
                    </div>
                    <div className="w-full" style={{ height: 'auto', position: 'relative' }}>
                        <Safe3D>
                            <ChromaGrid
                                items={(portfolioData?.projects || []).filter(project => selectedCategory === 'All' || project.category === selectedCategory).map(project => ({
                                    id: project.id,
                                    image: project.project_image_url,
                                    title: project.project_title,
                                    subtitle: project.project_subtitle,
                                    handle: project.project_handle || '',
                                    borderColor: project.border_color,
                                    gradient: project.gradient || 'linear-gradient(135deg, #0f0f0f, #1a1a1a)',
                                    url: project.project_url || '#'
                                }))}
                                onProjectClick={(item) => { if (item.handle) { router.push(`/project/${item.handle}`); } }}
                                radius={isMobileDevice ? 150 : 250} // Radius lebih kecil di HP
                                damping={0.45}
                                fadeOut={0.6}
                            />
                        </Safe3D>
                    </div>
                </div>
            </div >

            {/* Contact Section */}
            < div id="contact" className="w-full min-h-screen pt-11 sm:pt-12 md:pt-11 lg:pt-13 px-4 sm:px-6 md:px-8 lg:px-12 pb-8 lg:pb-12" >
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12 sm:mb-16">
                        <FadeIn delay={0.1} direction="down">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold italic tracking-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">Contact Me</h2>
                        </FadeIn>
                    </div>
                    <FadeIn delay={0.2} direction="up" fullWidth>
                        <div className="max-w-5xl mx-auto mb-16">
                            <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600">
                                <div className="relative bg-black rounded-2xl p-6 sm:p-8 md:p-10">
                                    <div className="flex flex-col gap-8 md:gap-10">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                                            <div className="space-y-6">
                                                <div className="space-y-2">
                                                    <label htmlFor="name" className="text-sm font-serif italic text-white/80 ml-1">Name</label>
                                                    <div className="relative group">
                                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg opacity-20 group-hover:opacity-60 transition duration-300 blur-[2px]"></div>
                                                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} className="relative w-full bg-black/50 border border-white/10 text-white rounded-lg px-4 py-3 outline-none focus:border-cyan-500 transition-colors placeholder:text-white/20 font-serif italic" placeholder="John Doe" />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="email" className="text-sm font-serif italic text-white/80 ml-1">Email</label>
                                                    <div className="relative group">
                                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg opacity-20 group-hover:opacity-60 transition duration-300 blur-[2px]"></div>
                                                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className="relative w-full bg-black/50 border border-white/10 text-white rounded-lg px-4 py-3 outline-none focus:border-cyan-500 transition-colors placeholder:text-white/20 font-serif italic" placeholder="john@example.com" />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="subject" className="text-sm font-serif italic text-white/80 ml-1">Subject</label>
                                                    <div className="relative group">
                                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg opacity-20 group-hover:opacity-60 transition duration-300 blur-[2px]"></div>
                                                        <select id="subject" name="subject" value={formData.subject} onChange={handleInputChange} className="relative w-full bg-black/50 border border-white/10 text-white rounded-lg px-4 py-3 outline-none focus:border-cyan-500 transition-colors appearance-none cursor-pointer font-serif italic">
                                                            <option value="website" className="bg-black font-serif italic">Pembuatan Website</option>
                                                            <option value="aplikasi" className="bg-black font-serif italic">Pembuatan Aplikasi Website</option>
                                                            <option value="proposal" className="bg-black font-serif italic">Proposal/Skripsi</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="message" className="text-sm font-serif italic text-white/80 ml-1">Message</label>
                                                <div className="relative group h-full min-h-[160px] lg:min-h-full">
                                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg opacity-20 group-hover:opacity-60 transition duration-300 blur-[2px]"></div>
                                                    <textarea id="message" name="message" required rows={8} value={formData.message} onChange={handleInputChange} className="relative w-full h-full bg-black/50 border border-white/10 text-white rounded-lg px-4 py-3 outline-none focus:border-cyan-500 transition-colors placeholder:text-white/20 resize-none font-serif italic min-h-[160px]" placeholder="Your message here..."></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center gap-6 pt-2 border-t border-white/5">
                                            <div className="flex flex-wrap justify-center gap-8">
                                                <label className="flex items-center gap-3 cursor-pointer group">
                                                    <input type="radio" name="sendVia" value="whatsapp" checked={formData.sendVia === 'whatsapp'} onChange={handleInputChange} className="accent-cyan-500 w-4 h-4 cursor-pointer" />
                                                    <span className="text-sm text-white/80 group-hover:text-cyan-400 transition-colors font-serif italic whitespace-nowrap">Via WhatsApp</span>
                                                </label>
                                                <label className="flex items-center gap-3 cursor-pointer group">
                                                    <input type="radio" name="sendVia" value="email" checked={formData.sendVia === 'email'} onChange={handleInputChange} className="accent-cyan-500 w-4 h-4 cursor-pointer" />
                                                    <span className="text-sm text-white/80 group-hover:text-cyan-400 transition-colors font-serif italic whitespace-nowrap">Via Email</span>
                                                </label>
                                            </div>
                                            <button onClick={handleSubmit} className="relative group overflow-hidden rounded-lg p-[2px] focus:outline-none w-full sm:w-fit max-w-[280px] sm:max-w-none">
                                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 transition-all duration-300 group-hover:scale-105"></div>
                                                <div className="relative bg-black hover:bg-black/90 text-white rounded-md px-8 sm:px-20 py-3.5 transition-colors flex items-center justify-center gap-3 font-serif italic min-w-0 sm:min-w-[320px]">
                                                    <span className="text-base font-bold">Send Message</span>
                                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Footer Content */}
                    <div className="relative border-t border-white/10 pt-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
                            <div className="space-y-4 sm:space-y-5">
                                <div className="group">
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold italic tracking-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">Arya Fahrezi Amarully</h3>
                                            <p className="text-[10px] sm:text-xs text-white/40 mt-0.5">Web & IoT Developer</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-serif italic">Mengembangkan solusi web dan IoT yang inovatif dan responsif untuk masa depan digital.</p>
                            </div>
                            <div className="space-y-4 sm:space-y-5">
                                <h4 className="text-sm sm:text-base font-bold italic tracking-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">Quick Links</h4>
                                <ul className="space-y-2 sm:space-y-2.5">
                                    {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link, index) => (
                                        <li key={index}><a href={`#${link.toLowerCase()}`} className="group flex items-center gap-2 text-xs sm:text-sm text-white/60 hover:text-white/90 transition-all duration-300 font-serif italic"><span className="w-0 h-[2px] bg-white/20 group-hover:w-4 transition-all duration-300 rounded-full"></span><span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span></a></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-4 sm:space-y-5">
                                <h4 className="text-sm sm:text-base font-bold italic tracking-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">Services</h4>
                                <ul className="space-y-2 sm:space-y-2.5 text-white/60 font-serif italic">
                                    {[{ icon: '💻', name: 'Web Development' }, { icon: '🔌', name: 'IoT Solutions' }, { icon: '🎨', name: 'UI/UX Design' }, { icon: '⚡', name: 'API Integration' }, { icon: '💡', name: 'Consultation' }].map((service, index) => (
                                        <li key={index} className="flex items-center gap-2 text-xs sm:text-sm group hover:text-white/80 transition-colors duration-300"><span className="text-sm group-hover:scale-110 transition-transform duration-300">{service.icon}</span><span>{service.name}</span></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-4 sm:space-y-5">
                                <h4 className="text-sm sm:text-base font-bold italic tracking-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">Contact Info</h4>
                                <ul className="space-y-3 sm:space-y-3.5 font-serif italic text-white/60">
                                    <li><a href="mailto:aryamaroely86@gmail.com" className="group flex items-start gap-2 text-xs sm:text-sm hover:text-white/90 transition-colors duration-300"><span className="mt-0.5 text-cyan-500 group-hover:scale-110 transition-transform duration-300">📧</span><span className="break-all">aryamaroely86@gmail.com</span></a></li>
                                    <li><div className="group flex items-start gap-2 text-xs sm:text-sm"><span className="mt-0.5 text-cyan-500 group-hover:scale-110 transition-transform duration-300">📍</span><span>Tegal, Jawa Tengah, Indonesia</span></div></li>
                                    <li><div className="group flex items-center gap-2 text-xs sm:text-sm"><span className="text-cyan-500 group-hover:scale-110 transition-transform duration-300">🟢</span><span>Open for Freelance/Collaborations</span></div></li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center border-t border-white/5 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-0">
                            <p className="text-[10px] sm:text-xs text-white/40">&copy; {new Date().getFullYear()} <span className="font-bold italic bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">Arya Fahrezi Amarully</span>. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
            <CVDownloadModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} cvUrl={portfolioData?.homeContent?.cv_url} />
        </div>
    );
}