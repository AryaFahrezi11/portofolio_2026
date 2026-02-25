import { NextResponse } from 'next/server';
import { uploadToCloudinary } from '@/lib/cloudinary';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;
        const folder = (formData.get('folder') as string) || 'images';

        if (!file) {
            return NextResponse.json(
                { error: 'No file uploaded' },
                { status: 400 }
            );
        }

        // Validate file type (images only)
        const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
        if (!validTypes.includes(file.type)) {
            return NextResponse.json(
                { error: 'Invalid file type. Only images are allowed.' },
                { status: 400 }
            );
        }

        // Upload to Cloudinary Storage
        const publicUrl = await uploadToCloudinary(file, folder);

        return NextResponse.json({
            success: true,
            url: publicUrl,
            filename: file.name
        });

    } catch (error: any) {
        console.error('Image upload error:', error);
        return NextResponse.json(
            { error: error.message || 'Error uploading image' },
            { status: 500 }
        );
    }
}
