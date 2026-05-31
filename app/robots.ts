export default function robots() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://strix.website"

    return {
        rules: [{ userAgent: "*", allow: "/" }],
        sitemap: `${siteUrl}/sitemap.xml`,
        host: siteUrl,
    }
}
