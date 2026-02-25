/**
 * Optimizes a Cloudinary image URL by adding transformation parameters.
 * Does not depend on the Cloudinary Node.js SDK, so it's safe for client components.
 * 
 * @param url The original Cloudinary image URL.
 * @param width Optional width for scaling (e.g., 800, 1200).
 * @returns The optimized URL with f_auto, q_auto, and scaling if provided.
 */
export function getOptimizedImageUrl(url: string, width?: number): string {
    if (!url || !url.includes('cloudinary.com')) return url;

    // Find the 'upload/' part of the URL to inject transformations after it
    const uploadIndex = url.indexOf('/upload/');
    if (uploadIndex === -1) return url;

    const baseUrl = url.substring(0, uploadIndex + 8);
    const remainingUrl = url.substring(uploadIndex + 8);

    // Common transformations: f_auto (format), q_auto (quality)
    let transformations = 'f_auto,q_auto';
    if (width) {
        // c_fill: focus on important parts, g_auto: automatic gravity
        transformations += `,w_${width},c_fill,g_auto`;
    }

    return `${baseUrl}${transformations}/${remainingUrl}`;
}
