import { MetadataRoute } from 'next';

// 정적 사이트의 모든 라우트를 정의합니다.
const routes = [
  {
    path: '/',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const, // 정적 사이트이므로 weekly로 설정
    priority: 1.0,
  },
  {
    path: '/content',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
  // 여기에 더 많은 정적 라우트를 추가하세요
  // 예시:
  // {
  //   path: '/about',
  //   lastModified: new Date(),
  //   changeFrequency: 'monthly',
  //   priority: 0.8,
  // },
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

// 참고: 정적 사이트의 경우, 빌드 시점에 사이트맵이 생성됩니다.
// 새 페이지가 추가되면 routes 배열에 해당 경로를 추가해주세요.
