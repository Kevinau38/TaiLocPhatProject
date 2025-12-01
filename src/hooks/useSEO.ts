import { useEffect } from 'react';
const BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "Tài Lộc Phát Showroom",
  "description": "Chuyên cung cấp sỉ và lẻ thiết bị vệ sinh, gạch ốp lát, bồn ch��a nước, và máy năng lượng mặt trời.",
  "telephone": "+84963939286",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "624 Đường Hà Huy Giáp",
    "addressLocality": "Phường An Phú Đông",
    "addressRegion": "TP. Hồ Chí Minh",
    "postalCode": "700000",
    "addressCountry": "VN"
  },
  "url": "https://tailocphat.com", // Replace with actual domain
  "openingHours": "Mo-Su 08:00-18:00"
};
export function useSEO(title: string, description: string, path: string) {
  useEffect(() => {
    document.title = title;
    const setMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    const setOgTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    setMetaTag('description', description);
    setOgTag('og:title', title);
    setOgTag('og:description', description);
    setOgTag('og:url', `${window.location.origin}${path}`);
    setOgTag('og:type', 'website');
    // Add JSON-LD script
    let script = document.getElementById('json-ld-business') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script') as HTMLScriptElement;
      script.id = 'json-ld-business';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.innerHTML = JSON.stringify(BUSINESS_JSON_LD);
    return () => {
      // Cleanup on unmount to prevent tags from persisting across pages
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) metaDescription.setAttribute('content', '');
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', '');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) ogDescription.setAttribute('content', '');
      const jsonLdScript = document.getElementById('json-ld-business');
      if (jsonLdScript) jsonLdScript.remove();
    };
  }, [title, description, path]);
}