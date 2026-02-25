'use client';

import { useState } from 'react';

interface DocumentInputWithUploadProps {
    label: string;
    value: string | undefined;
    onChange: (url: string) => void;
    folder?: string;
    accept?: string;
    placeholder?: string;
}

export default function DocumentInputWithUpload({
    label,
    value,
    onChange,
    folder = 'documents',
    accept = '.pdf,.doc,.docx',
    placeholder = 'https://example.com/cv.pdf'
}: DocumentInputWithUploadProps) {
    const [mode, setMode] = useState<'URL' | 'UPLOAD'>('URL');
    const [isUploading, setIsUploading] = useState(false);

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('folder', folder);

        try {
            const res = await fetch('/api/upload/document', {
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

            {/* Status / Link Preview */}
            {value && (
                <div className="mt-2 p-3 bg-gray-700/50 border border-gray-600 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-2 overflow-hidden">
                        <span className="text-xl">📄</span>
                        <a
                            href={value}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-cyan-400 hover:text-cyan-300 underline truncate"
                        >
                            {value.split('/').pop()}
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}
