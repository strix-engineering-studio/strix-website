import { featuredProjects } from "@/lib/site"
import { getBlogPosts } from "@/lib/content"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://strix.website"

export default async function sitemap() {
    const routes = [
        "",
        "/capabilities",
        "/systems",
        "/products",
        "/case-studies",
        "/open-source",
        "/partners",
        "/process",
        "/insights",
        "/contact",
        "/about",
        "/privacy",
        "/terms",
    ]

    const pages = routes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date() }))
    const products = featuredProjects.map((project) => ({ url: `${siteUrl}/products/${project.slug}`, lastModified: new Date() }))
    const studies = featuredProjects.map((project) => ({ url: `${siteUrl}/case-studies/${project.slug}`, lastModified: new Date() }))
    const openSource = [
        "system-patterns",
        "admin-workflows",
        "ai-guardrails",
    ].map((slug) => ({ url: `${siteUrl}/open-source/${slug}`, lastModified: new Date() }))
    const posts = await getBlogPosts()
    const insights = posts.map((post) => ({ url: `${siteUrl}/insights/${post.slug}`, lastModified: new Date(post.publishedAt) }))

    return [...pages, ...products, ...studies, ...openSource, ...insights]
}
