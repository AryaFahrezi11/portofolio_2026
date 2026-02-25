'use client';

import { useEffect, useState } from 'react';
import { getHomeContent, getProfileCard, updateHomeContent, updateProfileCard } from '@/app/actions/portfolio';
import { HomeContent, ProfileCard } from '@/types/database';
import Toast from '@/components/Toast';
import ImageInputWithUpload from '@/components/admin/ImageInputWithUpload';
import DocumentInputWithUpload from '@/components/admin/DocumentInputWithUpload';

export default function AdminHome() {
  const [homeContent, setHomeContent] = useState<HomeContent | null>(null);
  const [profileCard, setProfileCard] = useState<ProfileCard | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const [contentData, profileData] = await Promise.all([
        getHomeContent(),
        getProfileCard(),
      ]);

      if (contentData) setHomeContent(contentData as unknown as HomeContent);
      if (profileData) setProfileCard(profileData as unknown as ProfileCard);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveHomeContent = async () => {
    if (!homeContent) return;
    setIsSaving(true);

    try {
      const result = await updateHomeContent(homeContent.id, {
        greeting: homeContent.greeting,
        name: homeContent.name,
        description: homeContent.description,
        cv_url: homeContent.cv_url,
      });

      if (!result.success) throw new Error('Gagal menyimpan home content');
      showSuccess('Home content berhasil disimpan!');
    } catch (error) {
      console.error('Error saving home content:', error);
      alert('Gagal menyimpan home content');
    } finally {
      setIsSaving(false);
    }
  };

  const saveProfileCard = async () => {
    if (!profileCard) return;
    setIsSaving(true);

    try {
      const result = await updateProfileCard(profileCard.id, {
        handle: profileCard.handle,
        status: profileCard.status,
        avatar_url: profileCard.avatar_url,
        mini_avatar_url: profileCard.mini_avatar_url,
      });

      if (!result.success) throw new Error('Gagal menyimpan profile card');
      showSuccess('Profile card berhasil disimpan!');
    } catch (error) {
      console.error('Error saving profile card:', error);
      alert('Gagal menyimpan profile card');
    } finally {
      setIsSaving(false);
    }
  };

  const showSuccess = (message: string) => {
    setSuccessMessage(message);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {successMessage && (
        <Toast
          message={successMessage}
          onClose={() => setSuccessMessage('')}
        />
      )}

      {/* Home Content Section */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <span>📝</span>
          <span>Main Content</span>
        </h2>

        <div className="space-y-4">
          {/* Greeting */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Greeting (e.g., &quot;Halo, saya&quot;)
            </label>
            <input
              type="text"
              value={homeContent?.greeting || ''}
              onChange={(e) =>
                setHomeContent(homeContent ? { ...homeContent, greeting: e.target.value } : null)
              }
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              value={homeContent?.name || ''}
              onChange={(e) =>
                setHomeContent(homeContent ? { ...homeContent, name: e.target.value } : null)
              }
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Deskripsi
            </label>
            <textarea
              value={homeContent?.description || ''}
              onChange={(e) =>
                setHomeContent(homeContent ? { ...homeContent, description: e.target.value } : null)
              }
              rows={5}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all"
            />
          </div>

          {/* CV URL */}
          <div className="pt-2">
            <DocumentInputWithUpload
              label="Curriculum Vitae (CV)"
              value={homeContent?.cv_url || ''}
              onChange={(url) =>
                setHomeContent(homeContent ? { ...homeContent, cv_url: url } : null)
              }
              folder="cv"
              placeholder="Masukkan URL CV atau upload file PDF"
            />
          </div>

          <button
            onClick={saveHomeContent}
            disabled={isSaving}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all disabled:opacity-50"
          >
            {isSaving ? 'Menyimpan...' : 'Simpan Main Content'}
          </button>
        </div>
      </div>

      {/* Profile Card Section */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <span>👤</span>
          <span>Profile Card</span>
        </h2>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Handle (Username)</label>
              <input
                type="text"
                value={profileCard?.handle || ''}
                onChange={(e) =>
                  setProfileCard(profileCard ? { ...profileCard, handle: e.target.value } : null)
                }
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
              <input
                type="text"
                value={profileCard?.status || ''}
                onChange={(e) =>
                  setProfileCard(profileCard ? { ...profileCard, status: e.target.value } : null)
                }
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
              />
            </div>
          </div>

          {/* Avatar URLs Section - 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <ImageInputWithUpload
              label="Avatar URL"
              value={profileCard?.avatar_url || ''}
              onChange={(url) => setProfileCard(profileCard ? { ...profileCard, avatar_url: url } : null)}
              folder="avatars"
              previewSize="lg"
              placeholder="/images/profile.jpg"
            />

            <ImageInputWithUpload
              label="Mini Avatar URL"
              value={profileCard?.mini_avatar_url || ''}
              onChange={(url) => setProfileCard(profileCard ? { ...profileCard, mini_avatar_url: url } : null)}
              folder="avatars"
              previewSize="lg"
              placeholder="/images/profile.jpg"
            />
          </div>

          <button
            onClick={saveProfileCard}
            disabled={isSaving}
            className="mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all disabled:opacity-50"
          >
            {isSaving ? 'Menyimpan...' : 'Simpan Profile Card'}
          </button>
        </div>
      </div>
    </div>
  );
}
