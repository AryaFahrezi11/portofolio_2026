import { NextResponse } from 'next/server';
import { fetchAllPortfolioData } from '@/lib/fetchPortfolioData';

export async function GET() {
    try {
        const data = await fetchAllPortfolioData();

        // Add cache control headers to prevent aggressive caching in dev
        // but allow 60s revalidation in production
        return NextResponse.json(data, {
            headers: {
                // Strict no-cache for fresh data
                'Cache-Control': 'no-store, max-age=0, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            },
        });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch portfolio data' },
            { status: 500 }
        );
    }
}
