import { NextResponse } from 'next/server';
import { uploadToCloudinary } from '@/lib/cloudinary';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;
        const folder = (formData.get('folder') as string) || 'documents';

        if (!file) {
            return NextResponse.json(
                { error: 'No file uploaded' },
                { status: 400 }
            );
        }

        // Validate file type (PDF and Documents)
        const validTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];

        if (!validTypes.includes(file.type)) {
            return NextResponse.json(
                { error: 'Invalid file type. Only PDF and Word documents are allowed.' },
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
        console.error('Document upload error:', error);
        return NextResponse.json(
            { error: error.message || 'Error uploading document' },
            { status: 500 }
        );
    }
}
