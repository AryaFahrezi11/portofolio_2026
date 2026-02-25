import { fetchProjectByHandle, fetchProjects } from '@/lib/fetchPortfolioData';
import { notFound } from 'next/navigation';
import ProjectNavbar from '@/components/ProjectNavbar';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import ProjectDetailContent from '@/components/ProjectDetailContent';
import { getOptimizedImageUrl } from '@/lib/cloudinary-client';

interface ProjectPageProps {
    params: Promise<{
        handle: string;
    }>;
}

// Revalidate every hour
export const revalidate = 3600;

// Pre-render all active projects for instant loading
export async function generateStaticParams() {
    const projects = await fetchProjects();
    return projects.map((project) => ({
        handle: encodeURIComponent(project.project_handle || ''),
    }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
    const { handle } = await params;
    const decodedHandle = decodeURIComponent(handle);
    const projectData = await fetchProjectByHandle(decodedHandle);
    if (!projectData) {
        notFound();
    }

    // Normalize data for transition (handle old string arrays or malformed JSON)
    const project = {
        ...projectData,
        gallery_images: Array.isArray(projectData.gallery_images)
            ? projectData.gallery_images.map((img: any) => {
                if (typeof img === 'string') return { url: img, caption: '' };
                if (img && typeof img === 'object' && img.url) return { url: img.url, caption: img.caption || '' };
                return null;
            }).filter(Boolean) as { url: string; caption: string }[]
            : [],
        features: Array.isArray(projectData.features)
            ? (projectData.features as any[]).map((f: any) => {
                if (typeof f === 'string') return { title: f, description: '' };
                if (f && typeof f === 'object' && f.title) return { title: f.title, description: f.description || '' };
                return null;
            }).filter(Boolean) as { title: string; description: string }[]
            : []
    };

    return (
        <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
            <ProjectNavbar />

            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={getOptimizedImageUrl(project.project_image_url, 1920)}
                        alt={project.project_title}
                        fill
                        className="object-cover opacity-40 scale-105"
                        priority
                        loading="eager"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>

                <div className="container relative z-10 mx-auto max-w-7xl h-full flex flex-col justify-end pb-12 px-6">
                    <FadeIn direction="up">
                        <span className="px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-[10px] md:text-xs font-serif italic font-bold tracking-wider uppercase mb-4 inline-block backdrop-blur-md">
                            {project.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent italic tracking-tight">
                            {project.project_title}
                        </h1>
                        <p className="text-lg md:text-2xl text-white/50 max-w-2xl font-serif italic leading-relaxed">
                            {project.project_subtitle}
                        </p>
                    </FadeIn>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto max-w-7xl px-6 pt-0 md:pt-12 pb-10 md:pb-20">
                <ProjectDetailContent project={project} />
            </div>

        </main>
    );
}
