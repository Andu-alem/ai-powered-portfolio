import type { MetadataRoute } from "next"
import { baseUrl } from "./metadata"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/thank-you"]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }))
}

