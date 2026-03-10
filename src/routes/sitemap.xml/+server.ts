export function GET() {
    const body = `<?xml version="1.0" encoding="UTF-8" ?>
        <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>https://plebis.online/</loc>
            </url>
            <url>
                <loc>https://plebis.online/about</loc>
            </url>
            <url>
                <loc>https://plebis.online/updates</loc>
            </url>
        </urlset>`;

    return new Response(body, {
        headers: {
            "Content-Type": "application/xml"
        }
    });
}