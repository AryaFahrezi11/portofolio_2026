'use client';

import { useState } from 'react';

interface FeatureItem {
    title: string;
    description: string;
}

interface FeaturesBuilderProps {
    label: string;
    value: FeatureItem[];
    onChange: (items: FeatureItem[]) => void;
}

export default function FeaturesBuilder({
    label,
    value = [],
    onChange,
}: FeaturesBuilderProps) {
    const [showModal, setShowModal] = useState(false);
    const [tempTitle, setTempTitle] = useState('');
    const [tempDescription, setTempDescription] = useState('');
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    // Add or update feature
    const handleAddOrUpdate = () => {
        if (!tempTitle.trim()) {
            alert('Judul feature harus diisi!');
            return;
        }

        const newItem: FeatureItem = {
            title: tempTitle.trim(),
            description: tempDescription.trim()
        };

        if (editingIndex !== null) {
            const updated = [...value];
            updated[editingIndex] = newItem;
            onChange(updated);
        } else {
            onChange([...value, newItem]);
        }

        resetModal();
    };

    // Delete feature
    const handleDelete = (index: number) => {
        if (confirm('Hapus feature ini?')) {
            const updated = value.filter((_, i) => i !== index);
            onChange(updated);
        }
    };

    // Open edit modal
    const handleEdit = (index: number) => {
        const item = value[index];
        setTempTitle(item.title);
        setTempDescription(item.description);
        setEditingIndex(index);
        setShowModal(true);
    };

    // Reset modal state
    const resetModal = () => {
        setShowModal(false);
        setTempTitle('');
        setTempDescription('');
        setEditingIndex(null);
    };

    // Move feature left/right
    const moveFeature = (index: number, direction: 'left' | 'right') => {
        const newIndex = direction === 'left' ? index - 1 : index + 1;
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
                        className="group flex-shrink-0 w-[200px] sm:w-[220px] bg-gray-700 rounded-lg border border-gray-600 hover:border-cyan-500 transition-all snap-start"
                    >
                        {/* Feature Content */}
                        <div className="p-3">
                            <h5 className="text-sm font-semibold text-white truncate" title={item.title}>
                                {item.title}
                            </h5>
                            <p className="text-xs text-gray-400 mt-1 line-clamp-2" title={item.description}>
                                {item.description || <span className="italic text-gray-500">Tanpa deskripsi</span>}
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex border-t border-gray-600">
                            {index > 0 && (
                                <button
                                    type="button"
                                    onClick={() => moveFeature(index, 'left')}
                                    className="flex-1 py-2 text-xs text-gray-400 hover:text-white hover:bg-gray-600 transition-colors"
                                    title="Pindah ke kiri"
                                >
                                    ←
                                </button>
                            )}
                            <button
                                type="button"
                                onClick={() => handleEdit(index)}
                                className="flex-1 py-2 text-xs text-cyan-400 hover:text-white hover:bg-cyan-600 transition-colors"
                                title="Edit"
                            >
                                ✏️
                            </button>
                            <button
                                type="button"
                                onClick={() => handleDelete(index)}
                                className="flex-1 py-2 text-xs text-red-400 hover:text-white hover:bg-red-600 transition-colors"
                                title="Hapus"
                            >
                                🗑️
                            </button>
                            {index < value.length - 1 && (
                                <button
                                    type="button"
                                    onClick={() => moveFeature(index, 'right')}
                                    className="flex-1 py-2 text-xs text-gray-400 hover:text-white hover:bg-gray-600 transition-colors"
                                    title="Pindah ke kanan"
                                >
                                    →
                                </button>
                            )}
                        </div>
                    </div>
                ))}

                {/* Add Button */}
                <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    className="flex-shrink-0 w-[120px] sm:w-[140px] min-h-[100px] bg-gray-700/50 border-2 border-dashed border-gray-600 hover:border-cyan-500 hover:bg-gray-700 rounded-lg flex flex-col items-center justify-center gap-1 transition-all text-gray-400 hover:text-cyan-400 snap-start"
                >
                    <span className="text-2xl">➕</span>
                    <span className="text-xs font-medium">Tambah</span>
                </button>
            </div>

            {/* Info Text */}
            {value.length > 0 && (
                <p className="text-xs text-gray-500">
                    💡 Geser horizontal untuk melihat semua features.
                </p>
            )}

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-2 sm:p-4 z-[60] overflow-y-auto">
                    <div className="bg-gray-800 rounded-2xl p-4 sm:p-6 max-w-md w-full border border-gray-700 shadow-2xl my-4">
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-4">
                            {editingIndex !== null ? '✏️ Edit Feature' : '➕ Tambah Feature'}
                        </h4>

                        {/* Title Input */}
                        <div className="mb-4">
                            <label className="block text-xs sm:text-sm text-gray-300 mb-2">Judul Feature *</label>
                            <input
                                type="text"
                                value={tempTitle}
                                onChange={(e) => setTempTitle(e.target.value)}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all"
                                placeholder="Responsive Design"
                            />
                        </div>

                        {/* Description Input */}
                        <div className="mb-4">
                            <label className="block text-xs sm:text-sm text-gray-300 mb-2">Deskripsi (Opsional)</label>
                            <textarea
                                value={tempDescription}
                                onChange={(e) => setTempDescription(e.target.value)}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all h-20 resize-none"
                                placeholder="Bisa dibuka di semua perangkat..."
                            />
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                            <button
                                type="button"
                                onClick={handleAddOrUpdate}
                                disabled={!tempTitle.trim()}
                                className="flex-1 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {editingIndex !== null ? 'Simpan Perubahan' : 'Tambahkan'}
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
