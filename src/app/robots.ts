import { MetadataRoute } from 'next';

// 네이버, 구글 검색 엔진 최적화를 위한 robots.txt 생성
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://bioaddlab.com';
  
  // 공통으로 차단할 경로
  const disallowPaths = [
    '/api/',
    '/_next/',
    '/private/'
  ];

  return {
    rules: [
      // 구글 봇
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: disallowPaths,
        // crawlDelay는 robots.txt 표준이 아니므로 주석 처리
        // 실제 적용을 원하시면 서버 설정에서 처리해야 합니다
      },
      // 네이버 봇
      {
        userAgent: 'Yeti',
        allow: '/',
        disallow: disallowPaths,
      },
      // 네이버 추가 봇 (이미지, 비디오 등)
      {
        userAgent: ['Yeti-Image', 'Yeti-Video', 'Yeti-Blog', 'Yeti-Cafe', 'Yeti-News', 'Yeti-Ads'],
        allow: '/',
        disallow: disallowPaths,
      },
      // 그 외 모든 봇
      {
        userAgent: '*',
        allow: '/',
        disallow: disallowPaths,
      },
    ],
    // 사이트맵 URL (네이버, 구글 모두 지원)
    sitemap: `${baseUrl}/sitemap.xml`,
    // 호스트 설정 (네이버에서 권장하지만, 표준은 아님)
    // host: baseUrl, // 주석 해제 시 타입 에러 발생 가능
  };
}

// 참고: 네이버 서치어드바이저, 구글 서치콘솔 연동은
// HTML <head>에 메타 태그를 추가하거나
// 검색 콘솔에서 제공하는 HTML 파일을 public 폴더에 업로드해야 합니다
