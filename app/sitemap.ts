import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://aere.health', priority: 1.0, changeFrequency: 'weekly' },
    { url: 'https://aere.health/science', priority: 0.8, changeFrequency: 'monthly' },
    { url: 'https://aere.health/waitlist', priority: 0.6, changeFrequency: 'monthly' },
    { url: 'https://aere.health/contact', priority: 0.5, changeFrequency: 'monthly' },
    { url: 'https://aere.health/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { url: 'https://aere.health/terms', priority: 0.3, changeFrequency: 'yearly' },
    { url: 'https://aere.health/hipaa', priority: 0.3, changeFrequency: 'yearly' },
  ]
}
