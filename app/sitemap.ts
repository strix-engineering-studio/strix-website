import { featuredProjects } from "@/lib/site"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://auren.com"

export default function sitemap() {
    const routes = [
        "",
        "/work",
        "/capabilities",
        "/blog",
        "/contact",
        "/uses",
    ]

    const pages = routes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date() }))
    const studies = featuredProjects.map((project) => ({ url: `${siteUrl}/case-studies/${project.slug}`, lastModified: new Date() }))

    return [...pages, ...studies]
}
