
import { NextResponse } from 'next/server';
import { uploadToCloudinary } from '@/lib/cloudinary';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json(
                { error: 'No file uploaded' },
                { status: 400 }
            );
        }

        // Upload to Cloudinary Storage
        // Use 'projects' folder in Cloudinary
        const publicUrl = await uploadToCloudinary(file, 'projects');

        return NextResponse.json({
            success: true,
            url: publicUrl,
            filename: file.name
        });

    } catch (error: any) {
        console.error('Upload error:', error);
        return NextResponse.json(
            { error: error.message || 'Error uploading file' },
            { status: 500 }
        );
    }
}
