import { featuredProjects } from "@/lib/site"

export default function sitemap() {
    const routes = [
        "",
        "/work",
        "/services",
        "/blog",
        "/about",
        "/contact",
        "/uses",
    ]

    const pages = routes.map((route) => ({ url: `https://prathameshmore.com${route}`, lastModified: new Date() }))
    const studies = featuredProjects.map((project) => ({ url: `https://prathameshmore.com/case-studies/${project.slug}`, lastModified: new Date() }))

    return [...pages, ...studies]
}
