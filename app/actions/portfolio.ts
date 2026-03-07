'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import md5 from 'md5';

// --- AUTH ACTIONS ---

export async function loginAdmin(username: string, passwordPlain: string) {
    try {
        const passwordHash = md5(passwordPlain);
        const admin = await prisma.adminUser.findFirst({
            where: {
                username,
                passwordHash,
            },
        });

        if (admin) {
            return {
                success: true,
                user: {
                    username: admin.username,
                    photoUrl: admin.photoUrl
                }
            };
        }
        return { success: false, message: 'Invalid username or password' };
    } catch (error: any) {
        console.error('Login error:', error);
        // Kita tampilkan pesan error aslinya langsung ke layar!
        return { 
            success: false, 
            message: `CRASH: ${error?.message || String(error)}` 
        };
    }
}

export async function updateAdminProfile(data: {
    oldUsername: string; // Used to identify user
    oldPasswordPlain: string; // Only required if changing credentials
    newUsername?: string;
    newPasswordPlain?: string;
    photoUrl?: string;
}) {
    try {
        const isChangingCredentials = data.newUsername || data.newPasswordPlain;
        let admin;

        if (isChangingCredentials) {
            // Strict check: Must match username AND passwordHash
            const oldPasswordHash = md5(data.oldPasswordPlain);
            admin = await prisma.adminUser.findFirst({
                where: {
                    username: data.oldUsername,
                    passwordHash: oldPasswordHash,
                },
            });

            if (!admin) {
                return { success: false, message: 'Username atau password lama salah!' };
            }
        } else {
            // Soft check: Just match username (for photo updates)
            // Note: In a real app with sessions, we'd check the session ID. 
            // Here we trust the client-side username for photo updates as per user request.
            admin = await prisma.adminUser.findFirst({
                where: {
                    username: data.oldUsername,
                },
            });

            if (!admin) {
                return { success: false, message: 'User tidak ditemukan!' };
            }
        }

        const updateData: any = {};
        if (data.newUsername) updateData.username = data.newUsername;
        if (data.newPasswordPlain) updateData.passwordHash = md5(data.newPasswordPlain);
        if (data.photoUrl) updateData.photoUrl = data.photoUrl;

        await prisma.adminUser.update({
            where: { id: admin.id },
            data: updateData,
        });

        // Revalidate all pages to show new photo immediately
        revalidatePath('/', 'layout');

        return { success: true };
    } catch (error) {
        console.error('Update profile error:', error);
        return { success: false, message: 'Gagal update profile!' };
    }
}

// --- DASHBOARD ACTIONS ---

export async function getDashboardStats() {
    try {
        const [projectsCount, skillsCount] = await Promise.all([
            prisma.project.count(),
            prisma.skill.count(),
        ]);
        return {
            projectsCount,
            skillsCount,
            lastUpdate: new Date().toLocaleString('id-ID')
        };
    } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        return { projectsCount: 0, skillsCount: 0, lastUpdate: '-' };
    }
}

// --- HOME ACTIONS ---

export async function getHomeContent() {
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
}

export async function getProfileCard() {
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
}

export async function updateHomeContent(id: number, data: any) {
    try {
        await prisma.homeContent.update({
            where: { id },
            data: {
                greeting: data.greeting,
                name: data.name,
                description: data.description,
                cvUrl: data.cv_url,
            },
        });
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Error updating home content:', error);
        return { success: false };
    }
}

export async function updateHomeStats(stats: any[]) {
    try {
        for (const stat of stats) {
            await prisma.homeStat.update({
                where: { id: stat.id },
                data: {
                    statKey: stat.stat_key,
                    statValue: stat.stat_value,
                    statLabel: stat.stat_label,
                    icon: stat.icon,
                    gradientFrom: stat.gradient_from,
                    gradientTo: stat.gradient_to,
                    displayOrder: stat.display_order,
                },
            });
        }
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Error updating home stats:', error);
        return { success: false };
    }
}

export async function updateProfileCard(id: number, data: any) {
    try {
        await prisma.profileCard.update({
            where: { id },
            data: {
                handle: data.handle,
                status: data.status,
                avatarUrl: data.avatar_url,
                miniAvatarUrl: data.mini_avatar_url,
            },
        });
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Error updating profile card:', error);
        return { success: false };
    }
}

// --- ABOUT ACTIONS ---

export async function getAboutContent() {
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
}

export async function getHomeStats() {
    const data = await prisma.homeStat.findMany({ orderBy: { displayOrder: 'asc' } });
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
}

export async function updateAboutContent(id: number, data: any) {
    try {
        await prisma.aboutContent.update({
            where: { id },
            data: {
                whoAmITitle: data.who_am_i_title,
                whoAmIContent: data.who_am_i_content,
                myApproachTitle: data.my_approach_title,
                myApproachContent: data.my_approach_content,
                lanyardCardFile: data.lanyard_card_file,
                lanyardTextureFile: data.lanyard_texture_file,
            },
        });
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Error updating about content:', error);
        return { success: false };
    }
}

// --- SKILLS ACTIONS ---

export async function getSkills() {
    const data = await prisma.skill.findMany({ orderBy: { displayOrder: 'asc' } });
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
}

export async function addSkill(data: any) {
    try {
        await prisma.skill.create({
            data: {
                skillName: data.skill_name,
                skillCategory: data.skill_category,
                skillIcon: data.skill_icon,
                gradientFrom: data.gradient_from,
                gradientTo: data.gradient_to,
                borderColor: data.border_color,
                displayOrder: data.display_order,
                isActive: data.is_active,
            },
        });
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Error adding skill:', error);
        return { success: false };
    }
}

export async function updateSkill(id: number, data: any) {
    try {
        await prisma.skill.update({
            where: { id },
            data: {
                skillName: data.skill_name,
                skillCategory: data.skill_category,
                skillIcon: data.skill_icon,
                gradientFrom: data.gradient_from,
                gradientTo: data.gradient_to,
                borderColor: data.border_color,
                displayOrder: data.display_order,
                isActive: data.is_active,
            },
        });
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Error updating skill:', error);
        return { success: false };
    }
}

export async function deleteSkill(id: number) {
    try {
        await prisma.skill.delete({ where: { id } });
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Error deleting skill:', error);
        return { success: false };
    }
}

export async function toggleSkillActive(id: number, isActive: boolean) {
    try {
        await prisma.skill.update({
            where: { id },
            data: { isActive },
        });
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Error toggling skill active:', error);
        return { success: false };
    }
}

// --- PROJECTS ACTIONS ---

export async function getProjects() {
    const data = await prisma.project.findMany({ orderBy: { displayOrder: 'asc' } });
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
}

export async function addProject(data: any) {
    try {
        await prisma.project.create({
            data: {
                projectTitle: data.project_title,
                projectSubtitle: data.project_subtitle,
                projectHandle: data.project_handle,
                projectLocation: data.project_location,
                projectImageUrl: data.project_image_url,
                projectUrl: data.project_url,
                demoUrl: data.demo_url,
                projectDescription: data.project_description,
                galleryImages: data.gallery_images || [],
                category: data.category || '',
                techStack: data.tech_stack || [],
                features: data.features || [],
                aboutTitle: data.about_title || null,
                galleryTitle: data.gallery_title || null,
                featuresTitle: data.features_title || null,
                detailsTitle: data.details_title || null,
                borderColor: data.border_color || '#3B82F6',
                gradient: data.gradient || 'linear-gradient(145deg, #3B82F6, #000)',
                demoType: data.demo_type || 'URL',
                displayOrder: Number(data.display_order) || 0,
                isActive: data.is_active ?? true,
            },
        });
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Error adding project:', error);
        return { success: false, message: (error as any).message };
    }
}

export async function updateProject(id: number, data: any) {
    try {
        await prisma.project.update({
            where: { id: Number(id) },
            data: {
                projectTitle: data.project_title,
                projectSubtitle: data.project_subtitle,
                projectHandle: data.project_handle,
                projectLocation: data.project_location,
                projectImageUrl: data.project_image_url,
                projectUrl: data.project_url,
                demoUrl: data.demo_url,
                projectDescription: data.project_description,
                galleryImages: data.gallery_images || [],
                category: data.category || '',
                techStack: data.tech_stack || [],
                features: data.features || [],
                aboutTitle: data.about_title || null,
                galleryTitle: data.gallery_title || null,
                featuresTitle: data.features_title || null,
                detailsTitle: data.details_title || null,
                borderColor: data.border_color || '#3B82F6',
                gradient: data.gradient || 'linear-gradient(145deg, #3B82F6, #000)',
                displayOrder: Number(data.display_order) || 0,
                isActive: data.is_active ?? true,
            },
        });
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Error updating project:', error);
        return { success: false, message: (error as any).message };
    }
}

export async function deleteProject(id: number) {
    try {
        await prisma.project.delete({ where: { id } });
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Error deleting project:', error);
        return { success: false };
    }
}

export async function toggleProjectActive(id: number, isActive: boolean) {
    try {
        await prisma.project.update({
            where: { id },
            data: { isActive },
        });
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Error toggling project active:', error);
        return { success: false };
    }
}
