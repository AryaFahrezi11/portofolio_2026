'use client';

import { useState, useRef } from 'react';

interface GalleryItem {
    url: string;
    caption: string;
}

interface GalleryBuilderProps {
    label: string;
    value: GalleryItem[];
    onChange: (items: GalleryItem[]) => void;
    folder?: string;
}

export default function GalleryBuilder({
    label,
    value = [],
    onChange,
    folder = 'gallery'
}: GalleryBuilderProps) {
    const [showModal, setShowModal] = useState(false);
    const [mode, setMode] = useState<'URL' | 'UPLOAD'>('UPLOAD');
    const [tempUrl, setTempUrl] = useState('');
    const [tempCaption, setTempCaption] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Handle file upload to Supabase
    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('folder', folder);

        try {
            const res = await fetch('/api/upload/image', {
                method: 'POST',
                body: formData,
            });

            const data = await res.json();
            if (data.success) {
                setTempUrl(data.url);
            } else {
                alert('Upload failed: ' + data.error);
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Error uploading file');
        } finally {
            setIsUploading(false);
        }
    };

    // Add or update image in gallery
    const handleAddOrUpdateImage = () => {
        if (!tempUrl.trim()) {
            alert('URL gambar harus diisi!');
            return;
        }

        const newItem: GalleryItem = {
            url: tempUrl.trim(),
            caption: tempCaption.trim()
        };

        if (editingIndex !== null) {
            // Update existing
            const updated = [...value];
            updated[editingIndex] = newItem;
            onChange(updated);
        } else {
            // Add new
            onChange([...value, newItem]);
        }

        resetModal();
    };

    // Delete image from gallery
    const handleDelete = (index: number) => {
        if (confirm('Hapus gambar ini dari gallery?')) {
            const updated = value.filter((_, i) => i !== index);
            onChange(updated);
        }
    };

    // Open edit modal
    const handleEdit = (index: number) => {
        const item = value[index];
        setTempUrl(item.url);
        setTempCaption(item.caption);
        setEditingIndex(index);
        setShowModal(true);
    };

    // Reset modal state
    const resetModal = () => {
        setShowModal(false);
        setTempUrl('');
        setTempCaption('');
        setEditingIndex(null);
        setMode('UPLOAD');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    // Move image up/down for reordering
    const moveImage = (index: number, direction: 'up' | 'down') => {
        const newIndex = direction === 'up' ? index - 1 : index + 1;
        if (newIndex < 0 || newIndex >= value.length) return;

        const updated = [...value];
        [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
        onChange(updated);
    };

    return (
        <div className="space-y-3">
            {/* Label */}
            <label className="block text-sm font-medium text-gray-300">{label}</label>

            {/* Horizontal Scroll Container */}
            <div className="flex overflow-x-auto gap-3 pb-2 snap-x scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                {value.map((item, index) => (
                    <div
                        key={index}
                        className="group flex-shrink-0 w-[140px] sm:w-[160px] bg-gray-700 rounded-lg overflow-hidden border border-gray-600 hover:border-cyan-500 transition-all snap-start"
                    >
                        {/* Image Preview */}
                        <div className="aspect-video relative">
                            <img
                                src={item.url}
                                alt={item.caption || `Gallery ${index + 1}`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = '/images/placeholder.jpg';
                                }}
                            />

                            {/* Overlay Actions */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1">
                                <button
                                    type="button"
                                    onClick={() => handleEdit(index)}
                                    className="p-1.5 bg-cyan-600 hover:bg-cyan-700 rounded-full text-white text-xs transition-colors"
                                    title="Edit"
                                >
                                    ✏️
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleDelete(index)}
                                    className="p-1.5 bg-red-600 hover:bg-red-700 rounded-full text-white text-xs transition-colors"
                                    title="Hapus"
                                >
                                    🗑️
                                </button>
                            </div>

                            {/* Reorder Buttons */}
                            <div className="absolute top-1 right-1 flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                {index > 0 && (
                                    <button
                                        type="button"
                                        onClick={() => moveImage(index, 'up')}
                                        className="w-5 h-5 bg-gray-800/80 hover:bg-gray-700 rounded text-white text-[10px] flex items-center justify-center"
                                        title="Pindah ke kiri"
                                    >
                                        ←
                                    </button>
                                )}
                                {index < value.length - 1 && (
                                    <button
                                        type="button"
                                        onClick={() => moveImage(index, 'down')}
                                        className="w-5 h-5 bg-gray-800/80 hover:bg-gray-700 rounded text-white text-[10px] flex items-center justify-center"
                                        title="Pindah ke kanan"
                                    >
                                        →
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Caption */}
                        <div className="p-2">
                            <p className="text-[10px] sm:text-xs text-gray-300 truncate" title={item.caption}>
                                {item.caption || <span className="text-gray-500 italic">Tanpa caption</span>}
                            </p>
                        </div>
                    </div>
                ))}

                {/* Add Button */}
                <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    className="flex-shrink-0 w-[100px] sm:w-[120px] min-h-[100px] bg-gray-700/50 border-2 border-dashed border-gray-600 hover:border-cyan-500 hover:bg-gray-700 rounded-lg flex flex-col items-center justify-center gap-1 transition-all text-gray-400 hover:text-cyan-400 snap-start"
                >
                    <span className="text-2xl">➕</span>
                    <span className="text-xs font-medium">Tambah</span>
                </button>
            </div>

            {/* Info Text */}
            {value.length > 0 && (
                <p className="text-xs text-gray-500">
                    💡 Geser horizontal untuk melihat semua gambar.
                </p>
            )}


            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-2 sm:p-4 z-[60] overflow-y-auto">
                    <div className="bg-gray-800 rounded-2xl p-4 sm:p-6 max-w-lg w-full border border-gray-700 shadow-2xl my-4 max-h-[90vh] overflow-y-auto">
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-4">
                            {editingIndex !== null ? '✏️ Edit Gambar' : '➕ Tambah Gambar ke Gallery'}
                        </h4>

                        {/* Mode Toggle */}
                        <div className="flex gap-2 mb-4">
                            <button
                                type="button"
                                onClick={() => setMode('URL')}
                                className={`flex-1 py-2 text-xs sm:text-sm font-medium rounded transition-colors ${mode === 'URL'
                                    ? 'bg-cyan-600 text-white'
                                    : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                                    }`}
                            >
                                🔗 URL
                            </button>
                            <button
                                type="button"
                                onClick={() => setMode('UPLOAD')}
                                className={`flex-1 py-2 text-xs sm:text-sm font-medium rounded transition-colors ${mode === 'UPLOAD'
                                    ? 'bg-cyan-600 text-white'
                                    : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                                    }`}
                            >
                                📤 Upload
                            </button>
                        </div>

                        {/* Input */}
                        {mode === 'URL' ? (
                            <input
                                type="text"
                                value={tempUrl}
                                onChange={(e) => setTempUrl(e.target.value)}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all mb-4"
                                placeholder="https://example.com/image.jpg"
                            />
                        ) : (
                            <div className="relative mb-4">
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    onChange={handleFileUpload}
                                    disabled={isUploading}
                                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-xs sm:text-sm file:mr-2 sm:file:mr-4 file:py-1 sm:file:py-2 file:px-2 sm:file:px-4 file:rounded-full file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-cyan-600 file:text-white hover:file:bg-cyan-700 cursor-pointer ${isUploading ? 'opacity-50 cursor-not-allowed' : ''
                                        }`}
                                    accept="image/*"
                                />
                                {isUploading && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80 rounded-lg">
                                        <span className="text-cyan-400 font-bold animate-pulse text-sm">⏳ Mengunggah...</span>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Preview */}
                        {tempUrl && (
                            <div className="mb-4 p-2 sm:p-3 bg-gray-700/50 border border-gray-600 rounded-lg">
                                <p className="text-xs text-gray-400 mb-2">Preview:</p>
                                <div className="flex justify-center">
                                    <div className="w-full max-w-[150px] sm:max-w-[180px] rounded-lg overflow-hidden border-2 border-cyan-500/50 shadow-lg">
                                        <img
                                            src={tempUrl}
                                            alt="Preview"
                                            className="w-full h-auto max-h-[200px] object-contain bg-gray-900"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = '/images/placeholder.jpg';
                                            }}
                                        />
                                    </div>
                                </div>
                                <p className="mt-2 text-[10px] text-green-400 text-center break-all px-1">✅ {tempUrl}</p>
                            </div>
                        )}

                        {/* Caption Input */}
                        <div className="mb-4">
                            <label className="block text-xs sm:text-sm text-gray-300 mb-2">Caption (Opsional)</label>
                            <input
                                type="text"
                                value={tempCaption}
                                onChange={(e) => setTempCaption(e.target.value)}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all"
                                placeholder="Deskripsi singkat gambar..."
                            />
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                            <button
                                type="button"
                                onClick={handleAddOrUpdateImage}
                                disabled={!tempUrl.trim() || isUploading}
                                className="flex-1 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {editingIndex !== null ? 'Simpan Perubahan' : 'Tambahkan ke Gallery'}
                            </button>
                            <button
                                type="button"
                                onClick={resetModal}
                                className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-700 hover:bg-gray-600 text-white text-sm font-semibold rounded-lg transition-all"
                            >
                                Batal
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
