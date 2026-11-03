import { MetadataRoute } from 'next';

import { FAQ_MODIFIED, faqPath, getFaqs } from '@/lib/faq';

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
  {
    path: '/service',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  },
  {
    path: '/contact',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    path: '/faq',
    lastModified: new Date(FAQ_MODIFIED),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  ...getFaqs().map(item => ({
    path: faqPath(item),
    lastModified: new Date(FAQ_MODIFIED),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.bioaddlab.com';
  
  return routes.map(route => ({
    url: `${baseUrl}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
