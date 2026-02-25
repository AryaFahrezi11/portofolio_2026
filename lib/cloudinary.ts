import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

export async function uploadToCloudinary(file: File, folder: string): Promise<string> {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Deteksi tipe file untuk menentukan akses (optional tapi membantu)
    const isPDF = file.type === 'application/pdf';

    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder: folder,
                resource_type: 'auto', // Cloudinary akan menentukan ini image atau raw
                // Tambahkan flags agar PDF diperlakukan dengan benar
                flags: isPDF ? "attachment" : undefined, 
                access_mode: 'public'
            },
            (error, result) => {
                if (error || !result) {
                    console.error('Cloudinary Upload Error:', error);
                    return reject(error);
                }
                // Paksa secure_url (HTTPS) agar tidak diblokir browser
                resolve(result.secure_url);
            }
        );

        uploadStream.end(buffer);
    });
}
