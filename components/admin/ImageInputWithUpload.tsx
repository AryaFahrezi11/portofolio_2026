'use client';

import { useState } from 'react';

interface ImageInputWithUploadProps {
    label: string;
    value: string | undefined;
    onChange: (url: string) => void;
    folder?: string; // Supabase folder name, default: 'images'
    accept?: string; // File types, default: 'image/*'
    previewSize?: 'sm' | 'md' | 'lg'; // Preview size
    placeholder?: string;
}

export default function ImageInputWithUpload({
    label,
    value,
    onChange,
    folder = 'images',
    accept = 'image/*',
    previewSize = 'md',
    placeholder = '/images/placeholder.jpg'
}: ImageInputWithUploadProps) {
    const [mode, setMode] = useState<'URL' | 'UPLOAD'>(value?.startsWith('http') ? 'URL' : 'URL');
    const [isUploading, setIsUploading] = useState(false);

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
                onChange(data.url);
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

    const previewSizeClasses = {
        sm: 'w-16 h-16',
        md: 'w-24 h-24',
        lg: 'w-32 h-32'
    };

    return (
        <div className="space-y-3">
            {/* Label */}
            <label className="block text-sm font-medium text-gray-300">{label}</label>

            {/* Toggle Buttons */}
            <div className="flex gap-2 mb-2">
                <button
                    type="button"
                    onClick={() => setMode('URL')}
                    className={`flex-1 py-2 text-sm font-medium rounded transition-colors ${mode === 'URL'
                        ? 'bg-cyan-600 text-white'
                        : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                        }`}
                >
                    🔗 URL
                </button>
                <button
                    type="button"
                    onClick={() => setMode('UPLOAD')}
                    className={`flex-1 py-2 text-sm font-medium rounded transition-colors ${mode === 'UPLOAD'
                        ? 'bg-cyan-600 text-white'
                        : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                        }`}
                >
                    📤 Upload
                </button>
            </div>

            {/* Input Based on Mode */}
            {mode === 'URL' ? (
                <input
                    type="text"
                    value={value || ''}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all"
                    placeholder={placeholder}
                />
            ) : (
                <div className="relative">
                    <input
                        type="file"
                        onChange={handleFileUpload}
                        disabled={isUploading}
                        className={`w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-600 file:text-white hover:file:bg-cyan-700 cursor-pointer ${isUploading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        accept={accept}
                    />
                    {isUploading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80 rounded-lg">
                            <span className="text-cyan-400 font-bold animate-pulse">⏳ Mengunggah...</span>
                        </div>
                    )}
                </div>
            )}

            {/* Preview */}
            {value && (
                <div className="mt-3 p-3 bg-gray-700/50 border border-gray-600 rounded-lg">
                    <p className="text-xs text-gray-400 mb-2">Preview:</p>
                    <div className="flex justify-center">
                        <div className={`${previewSizeClasses[previewSize]} rounded-lg overflow-hidden border-2 border-cyan-500/50 shadow-lg`}>
                            <img
                                src={value}
                                alt="Preview"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = placeholder;
                                }}
                            />
                        </div>
                    </div>
                    {value.startsWith('http') && (
                        <p className="mt-2 text-[10px] text-green-400 text-center truncate">✅ {value}</p>
                    )}
                </div>
            )}
        </div>
    );
}
