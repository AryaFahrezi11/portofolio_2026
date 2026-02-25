'use client';

import { useEffect, useState } from 'react';
import { getProjects, addProject, updateProject, deleteProject, toggleProjectActive } from '@/app/actions/portfolio';
import { Project } from '@/types/database';
import Image from 'next/image';
import Toast from '@/components/Toast';
import ImageInputWithUpload from '@/components/admin/ImageInputWithUpload';
import GalleryBuilder from '@/components/admin/GalleryBuilder';
import FeaturesBuilder from '@/components/admin/FeaturesBuilder';
import TechStackBuilder from '@/components/admin/TechStackBuilder';

export default function AdminProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const [newProject, setNewProject] = useState<Partial<Project>>({
    project_title: '',
    project_subtitle: '',
    project_handle: '',
    project_location: '',
    project_image_url: '',
    project_url: '',
    demo_url: '',
    project_description: '',
    gallery_images: [],
    category: '',
    tech_stack: [],
    demo_type: 'URL',
    features: [],
    about_title: '',
    gallery_title: '',
    features_title: '',
    details_title: '',
    border_color: '#3B82F6',
    gradient: 'linear-gradient(145deg, #3B82F6, #000)',
    display_order: 0,
    is_active: true,
  });

  // Gradient helper states
  const [editGradientStart, setEditGradientStart] = useState('#3B82F6');
  const [editGradientEnd, setEditGradientEnd] = useState('#000');
  const [newGradientStart, setNewGradientStart] = useState('#3B82F6');
  const [newGradientEnd, setNewGradientEnd] = useState('#000');

  // Raw text helpers for JSON fields
  const [featuresRaw, setFeaturesRaw] = useState('');
  const [galleryRaw, setGalleryRaw] = useState('');

  useEffect(() => {
    fetchProjectsData();
  }, []);

  const fetchProjectsData = async () => {
    try {
      const data = await getProjects();
      if (data) setProjects(data as unknown as Project[]);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Add Project
  const handleAddProject = async () => {
    setIsSaving(true);
    try {
      // Auto-generate subtitle
      const finalProject = {
        ...newProject,
        project_subtitle: newProject.tech_stack?.join(', ') || ''
      };

      const result = await addProject(finalProject);

      if (!result.success) throw new Error('Gagal menambah project');

      await fetchProjectsData();
      setShowAddModal(false);
      // Reset form
      setNewProject({
        project_title: '',
        project_subtitle: '',
        project_handle: '',
        project_location: '',
        project_image_url: '',
        project_url: '',
        demo_url: '',
        project_description: '',
        gallery_images: [],
        category: '',
        tech_stack: [],
        features: [],
        about_title: '',
        gallery_title: '',
        features_title: '',
        details_title: '',
        border_color: '#3B82F6',
        gradient: 'linear-gradient(145deg, #10b981, #047857)',
        display_order: 10,
        is_active: true,
        demo_type: 'URL'
      });
      showSuccess('Project berhasil ditambahkan!');
    } catch (error: any) {
      console.error('Error adding project:', error);
      alert(error.message || 'Gagal menambahkan project');
    } finally {
      setIsSaving(false);
    }
  };

  // Handle Update Project
  const handleUpdateProject = async (project: Project) => {
    setIsSaving(true);
    try {
      // Auto-generate subtitle from tech stack if empty or if needed
      if ((!project.project_subtitle || project.project_subtitle.trim() === '') && project.tech_stack && project.tech_stack.length > 0) {
        project.project_subtitle = project.tech_stack.join(', ');
      }
      // Always sync subtitle with tech stack (optional preference: keep them in sync)
      // For now, let's enforce Subtitle = Tech Stack joined
      project.project_subtitle = project.tech_stack?.join(', ') || project.project_subtitle;

      const result = await updateProject(project.id, project);

      if (!result.success) throw new Error('Gagal update project');

      await fetchProjectsData();
      setEditingProject(null);
      showSuccess('Project berhasil diperbarui!');
    } catch (error: any) {
      console.error('Error updating project:', error);
      alert('Gagal memperbarui project');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteProject = async (id: number) => {
    if (!confirm('Apakah Anda yakin ingin menghapus project ini?')) return;

    setIsSaving(true);
    try {
      const result = await deleteProject(id);

      if (!result.success) throw new Error('Gagal menghapus project');

      showSuccess('Project berhasil dihapus!');
      fetchProjectsData();
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Gagal menghapus project');
    } finally {
      setIsSaving(false);
    }
  };

  const toggleActive = async (project: Project) => {
    try {
      const result = await toggleProjectActive(project.id, !project.is_active);

      if (!result.success) throw new Error('Gagal toggle active');
      fetchProjectsData();
    } catch (error) {
      console.error('Error toggling active:', error);
    }
  };

  const showSuccess = (message: string) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, isEditing: boolean) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true); // Start uploading state

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload/project', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        if (isEditing && editingProject) {
          setEditingProject({ ...editingProject, demo_url: data.url });
        } else {
          setNewProject({ ...newProject, demo_url: data.url });
        }
        showSuccess('File berhasil diunggah! Jangan lupa simpan perubahan.');
      } else {
        alert('Upload failed: ' + data.error);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file');
    } finally {
      setIsUploading(false); // End uploading state
    }
  };

  if (isLoading) {
    return <div className="text-white text-center py-20">Loading...</div>;
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

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Projects Management</h2>
          <p className="text-gray-400 mt-1">Total: {projects.length} projects</p>
        </div>
        <button
          onClick={() => {
            setShowAddModal(true);
            setFeaturesRaw('');
            setGalleryRaw('');
          }}
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all flex items-center gap-2"
        >
          <span>➕</span>
          <span>Tambah Project</span>
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`bg-gray-800 rounded-xl overflow-hidden border ${project.is_active ? 'border-gray-700' : 'border-gray-700/50 opacity-60'
              }`}
          >
            {/* Project Image */}
            <div className="relative h-48 bg-gray-900">
              <Image
                src={project.project_image_url}
                alt={project.project_title}
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="absolute top-3 right-3">
                <button
                  onClick={() => toggleActive(project)}
                  className={`px-3 py-1 rounded text-xs font-medium backdrop-blur-sm ${project.is_active
                    ? 'bg-green-500/80 text-white'
                    : 'bg-gray-700/80 text-gray-300'
                    }`}
                >
                  {project.is_active ? 'Active' : 'Hidden'}
                </button>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-5">
              <h3 className="text-white font-bold text-lg mb-1">{project.project_title}</h3>
              <p className="text-gray-400 text-sm mb-2">{project.project_subtitle}</p>

              {project.project_handle && (
                <p className="text-cyan-400 text-xs mb-3">📁 {project.project_handle}</p>
              )}

              <div className="flex gap-2 mb-4">
                <span
                  className="px-2 py-1 rounded text-xs text-white"
                  style={{ background: project.gradient }}
                >
                  Gradient
                </span>
                <span
                  className="px-2 py-1 rounded border text-xs"
                  style={{ borderColor: project.border_color, color: project.border_color }}
                >
                  Border
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    // Smart Type Inference
                    let initialDemoType = project.demo_type || 'URL';
                    if (project.demo_url && project.demo_url.includes('/uploads/projects/')) {
                      initialDemoType = 'FILE';
                    }

                    setFeaturesRaw(project.features?.map((f: any) => `${f.title}|${f.description}`).join('\n') || '');
                    setGalleryRaw(project.gallery_images?.map((img: any) => `${img.url}|${img.caption}`).join('\n') || '');

                    setEditingProject({
                      ...project,
                      demo_type: initialDemoType
                    });

                    setEditGradientStart(project.gradient.match(/#[0-9a-fA-F]{6}/g)?.[0] || '#3B82F6');
                    setEditGradientEnd(project.gradient.match(/#[0-9a-fA-F]{6}/g)?.[1] || '#000000');
                  }}
                  className="flex-1 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium rounded transition-all"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDeleteProject(project.id)}
                  className="flex-1 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded transition-all"
                >
                  🗑️ Hapus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editingProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-gray-800 rounded-2xl p-6 max-w-3xl w-full border border-gray-700 my-8">
            <h3 className="text-2xl font-bold text-white mb-6">Edit Project</h3>

            <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-300 mb-2">Project Title *</label>
                  <input
                    type="text"
                    value={editingProject.project_title}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, project_title: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Category *</label>
                  <select
                    value={editingProject.category || ''}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, category: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                  >
                    <option value="">Pilih Kategori</option>
                    <option value="Web">Web</option>
                    <option value="Mobile">Mobile</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Category *</label>
                  <select
                    value={editingProject.category || ''}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, category: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                  >
                    <option value="">Pilih Kategori</option>
                    <option value="Web">Web</option>
                    <option value="Mobile">Mobile</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Project Handle (Slug URL) *</label>
                  <input
                    type="text"
                    value={editingProject.project_handle || ''}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, project_handle: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                    placeholder="portfolio-website"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-300 mb-2 font-bold text-cyan-400">Section Titles Customization (Optional)</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700 mb-2">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">About Title</label>
                      <input
                        type="text"
                        value={editingProject.about_title || ''}
                        onChange={(e) => setEditingProject({ ...editingProject, about_title: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm"
                        placeholder="Default: About the Project"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Gallery Title</label>
                      <input
                        type="text"
                        value={editingProject.gallery_title || ''}
                        onChange={(e) => setEditingProject({ ...editingProject, gallery_title: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm"
                        placeholder="Default: Visual Identity / Gallery"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Features Title</label>
                      <input
                        type="text"
                        value={editingProject.features_title || ''}
                        onChange={(e) => setEditingProject({ ...editingProject, features_title: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm"
                        placeholder="Default: Advanced Features"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Details Title</label>
                      <input
                        type="text"
                        value={editingProject.details_title || ''}
                        onChange={(e) => setEditingProject({ ...editingProject, details_title: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm"
                        placeholder="Default: Scene Details"
                      />
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-500 italic">* Leave blank to hide title on page.</p>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-300 mb-2">Project Description</label>
                  <textarea
                    value={editingProject.project_description || ''}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, project_description: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white h-32"
                    placeholder="Deskripsi detail project..."
                  />
                </div>

                <div className="md:col-span-2">
                  <TechStackBuilder
                    label="Tech Stack"
                    value={editingProject.tech_stack || []}
                    onChange={(items) => setEditingProject({ ...editingProject, tech_stack: items })}
                  />
                </div>

                <div className="md:col-span-2">
                  <FeaturesBuilder
                    label="Key Features"
                    value={editingProject.features || []}
                    onChange={(items) => setEditingProject({ ...editingProject, features: items })}
                  />
                </div>

                <div className="md:col-span-2">
                  <GalleryBuilder
                    label="Gallery Images"
                    value={editingProject.gallery_images || []}
                    onChange={(items) => setEditingProject({ ...editingProject, gallery_images: items })}
                    folder="gallery"
                  />
                </div>

                <div className="md:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Demo URL</label>
                      <input
                        type="text"
                        value={editingProject.demo_url || ''}
                        onChange={(e) =>
                          setEditingProject({ ...editingProject, demo_url: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                        placeholder="https://demo.vercel.app atau link GitHub Releases"
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        💡 Untuk APK besar, upload ke GitHub Releases dan paste link-nya di sini.
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Project URL (Repo)</label>
                      <input
                        type="text"
                        value={editingProject.project_url || ''}
                        onChange={(e) =>
                          setEditingProject({ ...editingProject, project_url: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                        placeholder="https://github.com/..."
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Display Order</label>
                  <input
                    type="number"
                    value={editingProject.display_order}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, display_order: parseInt(e.target.value) })
                    }
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                  />
                </div>

                <div className="md:col-span-2">
                  <ImageInputWithUpload
                    label="Project Image *"
                    value={editingProject.project_image_url}
                    onChange={(url) => setEditingProject({ ...editingProject, project_image_url: url })}
                    folder="projects"
                    previewSize="lg"
                    placeholder="/images/project.png"
                  />
                </div>



                <div>
                  <label className="block text-sm text-gray-300 mb-2">Border Color</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={editingProject.border_color}
                      onChange={(e) =>
                        setEditingProject({ ...editingProject, border_color: e.target.value })
                      }
                      className="w-14 h-12 rounded cursor-pointer border border-gray-600"
                      title="Pick color"
                    />
                    <input
                      type="text"
                      value={editingProject.border_color}
                      onChange={(e) =>
                        setEditingProject({ ...editingProject, border_color: e.target.value })
                      }
                      className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                      placeholder="#3B82F6"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Gradient CSS</label>
                  <input
                    type="text"
                    value={editingProject.gradient}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, gradient: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                    placeholder="linear-gradient(145deg, #3B82F6, #000)"
                  />
                  <div className="mt-3 p-2 sm:p-3 bg-gray-700/50 border border-gray-600 rounded-lg">
                    <p className="text-xs text-gray-400 mb-2">💡 Gradient Helper (opsional):</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Start Color</label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            value={editGradientStart}
                            onChange={(e) => {
                              setEditGradientStart(e.target.value);
                              setEditingProject({
                                ...editingProject,
                                gradient: `linear-gradient(145deg, ${e.target.value}, ${editGradientEnd})`
                              });
                            }}
                            className="w-8 h-8 sm:w-10 sm:h-8 rounded cursor-pointer border border-gray-500 flex-shrink-0"
                          />
                          <input
                            type="text"
                            value={editGradientStart}
                            onChange={(e) => {
                              setEditGradientStart(e.target.value);
                              setEditingProject({
                                ...editingProject,
                                gradient: `linear-gradient(145deg, ${e.target.value}, ${editGradientEnd})`
                              });
                            }}
                            className="flex-1 px-2 py-1 bg-gray-600 border border-gray-500 rounded text-white text-xs min-w-0"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">End Color</label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            value={editGradientEnd}
                            onChange={(e) => {
                              setEditGradientEnd(e.target.value);
                              setEditingProject({
                                ...editingProject,
                                gradient: `linear-gradient(145deg, ${editGradientStart}, ${e.target.value})`
                              });
                            }}
                            className="w-8 h-8 sm:w-10 sm:h-8 rounded cursor-pointer border border-gray-500 flex-shrink-0"
                          />
                          <input
                            type="text"
                            value={editGradientEnd}
                            onChange={(e) => {
                              setEditGradientEnd(e.target.value);
                              setEditingProject({
                                ...editingProject,
                                gradient: `linear-gradient(145deg, ${editGradientStart}, ${e.target.value})`
                              });
                            }}
                            className="flex-1 px-2 py-1 bg-gray-600 border border-gray-500 rounded text-white text-xs min-w-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => handleUpdateProject(editingProject)}
                  disabled={isSaving}
                  className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all disabled:opacity-50"
                >
                  {isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}
                </button>
                <button
                  onClick={() => setEditingProject(null)}
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all"
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-gray-800 rounded-2xl p-6 max-w-3xl w-full border border-gray-700 my-8">
            <h3 className="text-2xl font-bold text-white mb-6">Tambah Project Baru</h3>

            <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-300 mb-2">Project Title *</label>
                  <input
                    type="text"
                    value={newProject.project_title}
                    onChange={(e) => setNewProject({ ...newProject, project_title: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                    placeholder="Portfolio Website"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Category *</label>
                  <select
                    value={newProject.category || ''}
                    onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                  >
                    <option value="">Pilih Kategori</option>
                    <option value="Web">Web</option>
                    <option value="Mobile">Mobile</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Project Handle (Slug URL) *</label>
                  <input
                    type="text"
                    value={newProject.project_handle || ''}
                    onChange={(e) => setNewProject({ ...newProject, project_handle: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                    placeholder="portfolio-website"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-300 mb-2 font-bold text-cyan-400">Section Titles Customization (Optional)</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700 mb-2">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">About Title</label>
                      <input
                        type="text"
                        value={newProject.about_title || ''}
                        onChange={(e) => setNewProject({ ...newProject, about_title: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm"
                        placeholder="Default: About the Project"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Gallery Title</label>
                      <input
                        type="text"
                        value={newProject.gallery_title || ''}
                        onChange={(e) => setNewProject({ ...newProject, gallery_title: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm"
                        placeholder="Default: Visual Identity / Gallery"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Features Title</label>
                      <input
                        type="text"
                        value={newProject.features_title || ''}
                        onChange={(e) => setNewProject({ ...newProject, features_title: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm"
                        placeholder="Default: Advanced Features"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Details Title</label>
                      <input
                        type="text"
                        value={newProject.details_title || ''}
                        onChange={(e) => setNewProject({ ...newProject, details_title: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm"
                        placeholder="Default: Scene Details"
                      />
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-500 italic">* Leave blank to hide title on page.</p>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-300 mb-2">Project Description</label>
                  <textarea
                    value={newProject.project_description || ''}
                    onChange={(e) => setNewProject({ ...newProject, project_description: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white h-32"
                    placeholder="Deskripsi detail project..."
                  />
                </div>

                <div className="md:col-span-2">
                  <TechStackBuilder
                    label="Tech Stack"
                    value={newProject.tech_stack || []}
                    onChange={(items) => setNewProject({ ...newProject, tech_stack: items })}
                  />
                </div>

                <div className="md:col-span-2">
                  <FeaturesBuilder
                    label="Key Features"
                    value={newProject.features || []}
                    onChange={(items) => setNewProject({ ...newProject, features: items })}
                  />
                </div>

                <div className="md:col-span-2">
                  <GalleryBuilder
                    label="Gallery Images"
                    value={newProject.gallery_images || []}
                    onChange={(items) => setNewProject({ ...newProject, gallery_images: items })}
                    folder="gallery"
                  />
                </div>

                <div className="md:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Demo Source</label>
                      <div className="flex gap-2 mb-3">
                        <button
                          onClick={() => setNewProject({ ...newProject, demo_type: 'URL' })}
                          className={`flex-1 py-2 text-sm font-medium rounded transition-colors ${newProject.demo_type === 'URL' || !newProject.demo_type
                            ? 'bg-cyan-600 text-white'
                            : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                            }`}
                        >
                          🔗 Website URL
                        </button>
                        <button
                          onClick={() => setNewProject({ ...newProject, demo_type: 'FILE' })}
                          className={`flex-1 py-2 text-sm font-medium rounded transition-colors ${newProject.demo_type === 'FILE'
                            ? 'bg-cyan-600 text-white'
                            : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                            }`}
                        >
                          📂 App File (APK)
                        </button>
                      </div>

                      {newProject.demo_type === 'FILE' ? (
                        <div>
                          <input
                            type="file"
                            onChange={(e) => handleFileUpload(e, false)}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-600 file:text-white hover:file:bg-cyan-700"
                            accept=".apk,.zip,.rar,.exe,.dmg"
                          />
                          {newProject.demo_url && (
                            <p className="mt-2 text-xs text-green-400">✅ File uploaded: {newProject.demo_url}</p>
                          )}
                        </div>
                      ) : (
                        <input
                          type="text"
                          value={newProject.demo_url || ''}
                          onChange={(e) => setNewProject({ ...newProject, demo_url: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                          placeholder="https://demo.vercel.app"
                        />
                      )}
                    </div>
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Project URL (Repo)</label>
                      <input
                        type="text"
                        value={newProject.project_url || ''}
                        onChange={(e) => setNewProject({ ...newProject, project_url: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                        placeholder="https://github.com/..."
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Display Order</label>
                  <input
                    type="number"
                    value={newProject.display_order || 0}
                    onChange={(e) =>
                      setNewProject({ ...newProject, display_order: parseInt(e.target.value) })
                    }
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                  />
                </div>

                <div className="md:col-span-2">
                  <ImageInputWithUpload
                    label="Project Image *"
                    value={newProject.project_image_url}
                    onChange={(url) => setNewProject({ ...newProject, project_image_url: url })}
                    folder="projects"
                    previewSize="lg"
                    placeholder="/images/project.png"
                  />
                </div>



                <div>
                  <label className="block text-sm text-gray-300 mb-2">Border Color</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={newProject.border_color}
                      onChange={(e) => setNewProject({ ...newProject, border_color: e.target.value })}
                      className="w-12 h-12 sm:w-14 sm:h-12 rounded cursor-pointer border border-gray-600 flex-shrink-0"
                      title="Pick color"
                    />
                    <input
                      type="text"
                      value={newProject.border_color}
                      onChange={(e) => setNewProject({ ...newProject, border_color: e.target.value })}
                      className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm sm:text-base min-w-0"
                      placeholder="#3B82F6"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Gradient CSS</label>
                  <input
                    type="text"
                    value={newProject.gradient}
                    onChange={(e) => setNewProject({ ...newProject, gradient: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                    placeholder="linear-gradient(145deg, #3B82F6, #000)"
                  />
                  <div className="mt-3 p-2 sm:p-3 bg-gray-700/50 border border-gray-600 rounded-lg">
                    <p className="text-xs text-gray-400 mb-2">💡 Gradient Helper (opsional):</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Start Color</label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            value={newGradientStart}
                            onChange={(e) => {
                              setNewGradientStart(e.target.value);
                              setNewProject({
                                ...newProject,
                                gradient: `linear-gradient(145deg, ${e.target.value}, ${newGradientEnd})`
                              });
                            }}
                            className="w-8 h-8 sm:w-10 sm:h-8 rounded cursor-pointer border border-gray-500 flex-shrink-0"
                          />
                          <input
                            type="text"
                            value={newGradientStart}
                            onChange={(e) => {
                              setNewGradientStart(e.target.value);
                              setNewProject({
                                ...newProject,
                                gradient: `linear-gradient(145deg, ${e.target.value}, ${newGradientEnd})`
                              });
                            }}
                            className="flex-1 px-2 py-1 bg-gray-600 border border-gray-500 rounded text-white text-xs min-w-0"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">End Color</label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            value={newGradientEnd}
                            onChange={(e) => {
                              setNewGradientEnd(e.target.value);
                              setNewProject({
                                ...newProject,
                                gradient: `linear-gradient(145deg, ${newGradientStart}, ${e.target.value})`
                              });
                            }}
                            className="w-8 h-8 sm:w-10 sm:h-8 rounded cursor-pointer border border-gray-500 flex-shrink-0"
                          />
                          <input
                            type="text"
                            value={newGradientEnd}
                            onChange={(e) => {
                              setNewGradientEnd(e.target.value);
                              setNewProject({
                                ...newProject,
                                gradient: `linear-gradient(145deg, ${newGradientStart}, ${e.target.value})`
                              });
                            }}
                            className="flex-1 px-2 py-1 bg-gray-600 border border-gray-500 rounded text-white text-xs min-w-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleAddProject}
                  disabled={isSaving || !newProject.project_title || !newProject.project_subtitle}
                  className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSaving ? 'Menambahkan...' : 'Tambah Project'}
                </button>
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setNewProject({
                      project_title: '',
                      project_subtitle: '',
                      project_handle: '',
                      project_location: '',
                      project_image_url: '/images/preview-home.png',
                      project_url: '',
                      demo_url: '',
                      project_description: '',
                      gallery_images: [],
                      category: '',
                      tech_stack: [],
                      demo_type: 'URL',
                      features: [],
                      border_color: '#3B82F6',
                      gradient: 'linear-gradient(145deg, #3B82F6, #000)',
                      display_order: 0,
                      is_active: true,
                    });
                  }}
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all"
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

