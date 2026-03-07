// Database Types untuk CMS Admin

export interface AdminUser {
    id: number;
    username: string;
    password_hash: string;
    photo_url: string;
    created_at: string;
    updated_at: string;
}

export interface HomeContent {
    id: number;
    greeting: string;
    name: string;
    description: string;
    cv_url: string;
    created_at: string;
    updated_at: string;
}

export interface HomeStat {
    id: number;
    stat_key: string;
    stat_value: string;
    stat_label: string;
    icon: string;
    gradient_from: string;
    gradient_to: string;
    display_order: number;
    created_at: string;
    updated_at: string;
}

export interface ProfileCard {
    id: number;
    handle: string;
    status: string;
    avatar_url: string;
    mini_avatar_url: string;
    created_at: string;
    updated_at: string;
}

export interface AboutContent {
    id: number;
    who_am_i_title: string;
    who_am_i_content: string;
    my_approach_title: string;
    my_approach_content: string;
    lanyard_card_file: string;
    lanyard_texture_file: string;
    created_at: string;
    updated_at: string;
}

export interface PersonalInfo {
    id: number;
    info_key: string;
    info_label: string;
    info_value: string;
    info_icon: string;
    display_order: number;
    created_at: string;
    updated_at: string;
}

export interface Skill {
    id: number;
    skill_name: string;
    skill_category: string;
    skill_icon: string;
    gradient_from: string;
    gradient_to: string;
    border_color: string;
    display_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface Project {
    id: number;
    project_title: string;
    project_subtitle: string;
    project_handle: string | null;
    project_location: string | null;
    project_image_url: string;
    project_url: string | null;
    demo_url: string | null;
    project_description: string | null;
    gallery_images: { url: string; caption: string }[] | null;
    category: string | null;
    tech_stack: string[] | null;
    features: { title: string; description: string }[] | null;
    about_title: string | null;
    gallery_title: string | null;
    features_title: string | null;
    details_title: string | null;
    border_color: string;
    gradient: string;
    demo_type: string | null;
    display_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string | null;
  image_url: string;
  credential_url: string | null;
}