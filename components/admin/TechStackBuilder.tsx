'use client';

import { useState } from 'react';

interface TechStackBuilderProps {
    label: string;
    value: string[];
    onChange: (items: string[]) => void;
}

export default function TechStackBuilder({
    label,
    value = [],
    onChange,
}: TechStackBuilderProps) {
    const [showModal, setShowModal] = useState(false);
    const [tempTech, setTempTech] = useState('');
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    // Add or update tech stack item
    const handleAddOrUpdate = () => {
        if (!tempTech.trim()) {
            alert('Nama tech stack harus diisi!');
            return;
        }

        if (editingIndex !== null) {
            const updated = [...value];
            updated[editingIndex] = tempTech.trim();
            onChange(updated);
        } else {
            onChange([...value, tempTech.trim()]);
        }

        resetModal();
    };

    // Delete item
    const handleDelete = (index: number) => {
        if (confirm('Hapus tech stack ini?')) {
            const updated = value.filter((_, i) => i !== index);
            onChange(updated);
        }
    };

    // Open edit modal
    const handleEdit = (index: number) => {
        setTempTech(value[index]);
        setEditingIndex(index);
        setShowModal(true);
    };

    // Reset modal state
    const resetModal = () => {
        setShowModal(false);
        setTempTech('');
        setEditingIndex(null);
    };

    // Move item left/right
    const moveItem = (index: number, direction: 'left' | 'right') => {
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
                        className="group flex-shrink-0 bg-gray-700 rounded-lg border border-gray-600 hover:border-cyan-500 transition-all snap-start"
                    >
                        {/* Content */}
                        <div className="px-4 py-3 min-w-[120px] text-center">
                            <span className="text-sm font-semibold text-white">{item}</span>
                        </div>

                        {/* Actions Overlay (only visible on hover/focus) */}
                        <div className="flex border-t border-gray-600">
                            {index > 0 && (
                                <button
                                    type="button"
                                    onClick={() => moveItem(index, 'left')}
                                    className="flex-1 py-1.5 text-[10px] text-gray-400 hover:text-white hover:bg-gray-600 transition-colors"
                                    title="Pindah ke kiri"
                                >
                                    ←
                                </button>
                            )}
                            <button
                                type="button"
                                onClick={() => handleEdit(index)}
                                className="flex-1 py-1.5 text-[10px] text-cyan-400 hover:text-white hover:bg-cyan-600 transition-colors"
                                title="Edit"
                            >
                                ✏️
                            </button>
                            <button
                                type="button"
                                onClick={() => handleDelete(index)}
                                className="flex-1 py-1.5 text-[10px] text-red-400 hover:text-white hover:bg-red-600 transition-colors"
                                title="Hapus"
                            >
                                🗑️
                            </button>
                            {index < value.length - 1 && (
                                <button
                                    type="button"
                                    onClick={() => moveItem(index, 'right')}
                                    className="flex-1 py-1.5 text-[10px] text-gray-400 hover:text-white hover:bg-gray-600 transition-colors"
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
                    className="flex-shrink-0 w-[100px] bg-gray-700/50 border-2 border-dashed border-gray-600 hover:border-cyan-500 hover:bg-gray-700 rounded-lg flex flex-col items-center justify-center gap-1 transition-all text-gray-400 hover:text-cyan-400 snap-start min-h-[82px]"
                >
                    <span className="text-xl">➕</span>
                    <span className="text-xs font-medium">Tambah</span>
                </button>
            </div>

            {/* Info Text */}
            {value.length > 0 && (
                <p className="text-xs text-gray-500">
                    💡 Geser horizontal untuk melihat semua tech stack.
                </p>
            )}

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-[60] overflow-y-auto">
                    <div className="bg-gray-800 rounded-2xl p-6 max-w-sm w-full border border-gray-700 shadow-2xl my-4">
                        <h4 className="text-lg font-bold text-white mb-4">
                            {editingIndex !== null ? '✏️ Edit Tech Stack' : '➕ Tambah Tech Stack'}
                        </h4>

                        {/* Input */}
                        <div className="mb-4">
                            <label className="block text-sm text-gray-300 mb-2">Nama Framework/Tech *</label>
                            <input
                                type="text"
                                value={tempTech}
                                onChange={(e) => setTempTech(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all placeholder-gray-500"
                                placeholder="Contoh: Next.js"
                                autoFocus
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') handleAddOrUpdate();
                                }}
                            />
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={handleAddOrUpdate}
                                disabled={!tempTech.trim()}
                                className="flex-1 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {editingIndex !== null ? 'Simpan' : 'Tambahkan'}
                            </button>
                            <button
                                type="button"
                                onClick={resetModal}
                                className="px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-white text-sm font-semibold rounded-lg transition-all"
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
