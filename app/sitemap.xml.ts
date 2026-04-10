import { NextResponse } from "next/server";

export async function GET() {
  // List of static routes
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/faqs",
    "/disclaimer",
    "/nollywood",
    "/bollywood",
    "/hollywood",
    "/search",
    "/offline"
  ];

  // You can add dynamic movie pages here if you fetch slugs/ids from your DB or API
  // For now, only static pages are included

  const baseUrl = "https://www.afrocinema.vercel.app";
  const urls = staticPages.map(
    (path) =>
      `<url><loc>${baseUrl}${path}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
