import { MetadataRoute } from 'next';

const routes = [
  {
    path: '/',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  },
  {
    path: '/content',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bioaddlab.com';
  
  return routes.map(route => ({
    url: `${baseUrl}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
