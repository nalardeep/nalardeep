import { getAllPosts } from '@/lib/api';
import { NextResponse } from 'next/server';

const BASE_URL = 'https://nalardeep.com';
const INDEXNOW_KEY = 'de2739767a7d45b3bd6e600aeedad430';

export async function POST(request: Request) {
    // Proteksi endpoint dengan secret key di header
    const authHeader = request.headers.get('x-indexnow-secret');
    const secret = process.env.INDEXNOW_SECRET;

    if (secret && authHeader !== secret) {
        return NextResponse.json(
            { error: 'Unauthorized' },
            { status: 401 }
        );
    }

    try {
        const posts = getAllPosts();

        // Kumpulkan semua URL yang ingin disubmit
        const urlList = [
            BASE_URL,
            `${BASE_URL}/articles`,
            `${BASE_URL}/about`,
            `${BASE_URL}/contact`,
            `${BASE_URL}/services`,
            ...posts.map((p) => `${BASE_URL}/posts/${p.slug}`),
        ];

        const body = {
            host: 'nalardeep.com',
            key: INDEXNOW_KEY,
            keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
            urlList,
        };

        // Submit ke IndexNow (akan di-relay ke Bing, Yandex, dll)
        const res = await fetch('https://api.indexnow.org/indexnow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(body),
        });

        if (!res.ok) {
            const errorText = await res.text();
            return NextResponse.json(
                { error: 'IndexNow API error', detail: errorText, status: res.status },
                { status: 502 }
            );
        }

        return NextResponse.json({
            success: true,
            submitted: urlList.length,
            urls: urlList,
            indexnowStatus: res.status,
        });

    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error', detail: String(error) },
            { status: 500 }
        );
    }
}

// GET endpoint untuk cek status / daftar URL yang akan disubmit
export async function GET() {
    const posts = getAllPosts();

    const urlList = [
        BASE_URL,
        `${BASE_URL}/articles`,
        `${BASE_URL}/about`,
        `${BASE_URL}/contact`,
        `${BASE_URL}/services`,
        ...posts.map((p) => `${BASE_URL}/posts/${p.slug}`),
    ];

    return NextResponse.json({
        key: INDEXNOW_KEY,
        keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
        totalUrls: urlList.length,
        urls: urlList,
        info: 'Send POST request to this endpoint to submit URLs to IndexNow.',
    });
}
