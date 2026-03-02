import prisma from './prisma';
import type {
  HomeContent,
  HomeStat,
  ProfileCard,
  AboutContent,
  Skill,
  Project,
} from '@/types/database';

// Helper to convert Prisma items to local types if necessary
// But since the names match or the structure is similar, we can casting for now
// In a real app, we'd define zod schemas or maps

// Fetch Home Content
export async function fetchHomeContent(): Promise<HomeContent | null> {
  try {
    const data = await prisma.homeContent.findFirst();
    if (!data) return null;

    return {
      id: data.id,
      greeting: data.greeting,
      name: data.name,
      description: data.description,
      cv_url: data.cvUrl,
      created_at: data.createdAt.toISOString(),
      updated_at: data.updatedAt.toISOString(),
    };
  } catch (error) {
    console.error('Error fetching home content:', error);
    return null;
  }
}

// Fetch Home Stats
export async function fetchHomeStats(): Promise<HomeStat[]> {
  try {
    const data = await prisma.homeStat.findMany({
      orderBy: {
        displayOrder: 'asc',
      },
    });

    return data.map(item => ({
      id: item.id,
      stat_key: item.statKey,
      stat_value: item.statValue,
      stat_label: item.statLabel,
      icon: item.icon || '',
      gradient_from: item.gradientFrom,
      gradient_to: item.gradientTo,
      display_order: item.displayOrder || 0,
      created_at: item.createdAt.toISOString(),
      updated_at: item.updatedAt.toISOString(),
    }));
  } catch (error) {
    console.error('Error fetching home stats:', error);
    return [];
  }
}

// Fetch Profile Card
export async function fetchProfileCard(): Promise<ProfileCard | null> {
  try {
    const data = await prisma.profileCard.findFirst();
    if (!data) return null;

    return {
      id: data.id,
      handle: data.handle,
      status: data.status,
      avatar_url: data.avatarUrl,
      mini_avatar_url: data.miniAvatarUrl,
      created_at: data.createdAt.toISOString(),
      updated_at: data.updatedAt.toISOString(),
    };
  } catch (error) {
    console.error('Error fetching profile card:', error);
    return null;
  }
}

// Fetch About Content
export async function fetchAboutContent(): Promise<AboutContent | null> {
  try {
    const data = await prisma.aboutContent.findFirst();
    if (!data) return null;

    return {
      id: data.id,
      who_am_i_title: data.whoAmITitle,
      who_am_i_content: data.whoAmIContent,
      my_approach_title: data.myApproachTitle,
      my_approach_content: data.myApproachContent,
      lanyard_card_file: data.lanyardCardFile,
      lanyard_texture_file: data.lanyardTextureFile,
      created_at: data.createdAt.toISOString(),
      updated_at: data.updatedAt.toISOString(),
    };
  } catch (error) {
    console.error('Error fetching about content:', error);
    return null;
  }
}

// Fetch Active Skills
export async function fetchSkills(): Promise<Skill[]> {
  try {
    const data = await prisma.skill.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        displayOrder: 'asc',
      },
    });

    return data.map(item => ({
      id: item.id,
      skill_name: item.skillName,
      skill_category: item.skillCategory,
      skill_icon: item.skillIcon,
      gradient_from: item.gradientFrom,
      gradient_to: item.gradientTo,
      border_color: item.borderColor,
      display_order: item.displayOrder || 0,
      is_active: item.isActive || false,
      created_at: item.createdAt.toISOString(),
      updated_at: item.updatedAt.toISOString(),
    }));
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
}

// Fetch Active Projects
export async function fetchProjects(): Promise<Project[]> {
  try {
    const data = await prisma.project.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        displayOrder: 'asc',
      },
    });

    return data.map(item => ({
      id: item.id,
      project_title: item.projectTitle,
      project_subtitle: item.projectSubtitle,
      project_handle: item.projectHandle,
      project_location: item.projectLocation,
      project_image_url: item.projectImageUrl,
      project_url: item.projectUrl,
      demo_url: item.demoUrl,
      project_description: item.projectDescription,
      gallery_images: item.galleryImages as any,
      category: item.category,
      tech_stack: item.techStack,
      features: item.features as any,
      about_title: item.aboutTitle,
      gallery_title: item.galleryTitle,
      features_title: item.featuresTitle,
      details_title: item.detailsTitle,
      border_color: item.borderColor,
      gradient: item.gradient,
      demo_type: item.demoType,
      display_order: item.displayOrder || 0,
      is_active: item.isActive || false,
      created_at: item.createdAt.toISOString(),
      updated_at: item.updatedAt.toISOString(),
    }));
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

// Fetch Single Project by Handle
export async function fetchProjectByHandle(handle: string): Promise<Project | null> {
  try {
    const data = await prisma.project.findFirst({
      where: {
        projectHandle: handle,
        isActive: true,
      },
    });

    if (!data) return null;

    return {
      id: data.id,
      project_title: data.projectTitle,
      project_subtitle: data.projectSubtitle,
      project_handle: data.projectHandle,
      project_location: data.projectLocation,
      project_image_url: data.projectImageUrl,
      project_url: data.projectUrl,
      demo_url: data.demoUrl,
      project_description: data.projectDescription,
      gallery_images: data.galleryImages as any,
      category: data.category,
      tech_stack: data.techStack,
      features: data.features as any,
      about_title: data.aboutTitle,
      gallery_title: data.galleryTitle,
      features_title: data.featuresTitle,
      details_title: data.detailsTitle,
      border_color: data.borderColor,
      gradient: data.gradient,
      demo_type: data.demoType,
      display_order: data.displayOrder || 0,
      is_active: data.isActive || false,
      created_at: data.createdAt.toISOString(),
      updated_at: data.updatedAt.toISOString(),
    };
  } catch (error) {
    console.error('Error fetching project by handle:', error);
    return null;
  }
}

// Fetch All Portfolio Data (untuk SSR/Initial Load)
export async function fetchAllPortfolioData() {
  // MENGUBAH PROMISE.ALL MENJADI SEQUENTIAL (BERURUTAN)
  // Ini mencegah Vercel Serverless "tersedak" karena terlalu banyak koneksi database bersamaan

  const homeContent = await fetchHomeContent();
  const homeStats = await fetchHomeStats();
  const profileCard = await fetchProfileCard();
  const aboutContent = await fetchAboutContent();
  const skills = await fetchSkills();
  const projects = await fetchProjects();

  // Log untuk mengecek di Vercel apakah ada data yang bocor/gagal
  if (!homeContent || !aboutContent) {
    console.warn("⚠️ Peringatan: Ada data utama yang gagal ditarik dari database!");
  }

  return {
    homeContent,
    homeStats,
    profileCard,
    aboutContent,
    skills,
    projects,
  };
}
