import { MetadataRoute } from 'next'
import { keywords, vadodaraAreas } from '@/lib/keywords-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cctvinstallvadodara.in'
  const currentDate = new Date().toISOString()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/leads`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]

  // Keyword pages - high priority for SEO
  const keywordPages: MetadataRoute.Sitemap = keywords.map((kw) => ({
    url: `${baseUrl}/${kw.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Area pages - location-based SEO
  const areaPages: MetadataRoute.Sitemap = vadodaraAreas.map((area) => ({
    url: `${baseUrl}/${area.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...keywordPages, ...areaPages]
}
