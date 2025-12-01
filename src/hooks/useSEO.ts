import { useEffect } from 'react';
const BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "Tài Lộc Phát Showroom",
  "description": "Chuyên cung cấp sỉ và lẻ thiết bị vệ sinh, gạch ốp lát, bồn chứa nước, và máy năng lượng mặt trời.",
  "telephone": "+84963939286",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "624 Đường Hà Huy Giáp",
    "addressLocality": "Phường An Phú Đông",
    "addressRegion": "Ho Chi Minh City",
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
      return element;
    };
    const setOgTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
      return element;
    };
    const metaDescription = setMetaTag('description', description);
    const ogTitle = setOgTag('og:title', title);
    const ogDescription = setOgTag('og:description', description);
    const ogUrl = setOgTag('og:url', `${window.location.origin}${path}`);
    const ogType = setOgTag('og:type', 'website');
    // Add JSON-LD script
    let script = document.getElementById('json-ld-business');
    if (!script) {
      script = document.createElement('script');
      script.id = 'json-ld-business';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.innerHTML = JSON.stringify(BUSINESS_JSON_LD);
    return () => {
      // Cleanup on unmount to prevent tags from persisting across pages
      if (metaDescription) metaDescription.remove();
      if (ogTitle) ogTitle.remove();
      if (ogDescription) ogDescription.remove();
      if (ogUrl) ogUrl.remove();
      if (ogType) ogType.remove();
      const jsonLdScript = document.getElementById('json-ld-business');
      if (jsonLdScript) jsonLdScript.remove();
    };
  }, [title, description, path]);
}