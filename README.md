# Tài Lộc Phát Showroom

[cloudflarebutton]

A modern, responsive website for the construction materials business "Tài Lộc Phát Showroom" in Ho Chi Minh City. The site is built in Vietnamese, showcasing product categories, gallery, contact information, and a polished user experience with warm orange branding, mobile-first design, and fast interactions.

## Overview

Tài Lộc Phát Showroom specializes in wholesale and retail of sanitary equipment, ceramic tiles, water tanks, and solar energy machines. The website features:

- **Home**: Attractive hero banner with tagline ("Tin cậy — Chất lượng — Giao nhanh") and product highlights.
- **About Us**: Company introduction, mission, core values (Reliability, Quality, Fast Delivery), and location details.
- **Products**: Category-based grid (Sanitary Equipment, Ceramic Tiles, Water Tanks, Solar Energy Machines) with product cards and contact CTAs.
- **Gallery**: Responsive image showcase of products and showroom, with lazy loading and lightbox previews.
- **Contact**: Address (624 Đường Hà Huy Giáp, Phường An Phú Đông, TP. Hồ Chí Minh), hotline (+84 963 939 286), and a contact form that works offline via localStorage fallback.

The design emphasizes professional, clean aesthetics with construction-themed visuals, warm tones (orange #F38020, gray #6B7280, white #FFFFFF), and smooth micro-interactions. It's SEO-optimized for single-page application (SPA) rendering and fully responsive across devices.

## Key Features

- **Visual Excellence**: Modern UI with shadcn/ui components, Tailwind CSS utilities, and Framer Motion for animations.
- **Responsive Design**: Mobile-first layout that adapts seamlessly to tablets and desktops.
- **Contact Form**: Optimistic submission with localStorage fallback; extensible to Cloudflare Workers API.
- **Gallery UX**: Masonry grid with lazy-loaded images from Unsplash/Placehold.co and Sheet-based lightbox.
- **Navigation**: Intuitive header with mobile sidebar; semantic HTML for accessibility and SEO.
- **Performance**: Fast loading with skeletons, optimized images, and lightweight bundle.
- **Vietnamese Content**: All text in Vietnamese, with core values and CTAs integrated naturally.
- **Demoable**: Fully functional without backend; products use mock data for immediate previews.

## Technology Stack

- **Frontend**: React 18+, React Router 6 (SPA routing), TypeScript
- **UI Library**: shadcn/ui (primitives: Button, Card, Input, Sheet, Skeleton, etc.)
- **Styling**: Tailwind CSS v3 (utility-first, custom theme with orange palette)
- **Icons**: Lucide React
- **Animations**: Framer Motion (micro-interactions, entrances)
- **State/Forms**: React Hook Form, Zod (validation), Zustand (if needed for complex state)
- **Notifications**: Sonner (toasts)
- **Backend/Storage**: Cloudflare Workers with Hono (routing), Durable Objects (persistence via entities pattern)
- **Build Tools**: Vite (dev/build), Bun (package manager/scripts)
- **Other**: clsx/tailwind-merge (class utilities), react-use (hooks), recharts (optional charts)

## Quick Start

### Prerequisites

- Bun 1.0+ installed (https://bun.sh/)
- Cloudflare account and Wrangler CLI (optional for deployment)
- Node.js (for some dev tools, but Bun handles most)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd tai-loc-phat-showroom
   ```

2. Install dependencies using Bun:
   ```
   bun install
   ```

3. (Optional) Generate TypeScript types from Worker bindings:
   ```
   bun run cf-typegen
   ```

### Local Development

1. Start the development server:
   ```
   bun run dev
   ```
   The app will be available at `http://localhost:3000` (or the port specified in `PORT` env var).

2. Open `http://localhost:3000` in your browser. The site includes live reload and hot module replacement.

3. For Worker backend testing (if extending APIs):
   - Run `bun run dev` (frontend) and deploy the Worker separately if needed.
   - Test API endpoints like `/api/inquiries` via browser dev tools or Postman.

### Usage Examples

- **Navigation**: Click header links to switch between Home, About, Products, Gallery, and Contact pages.
- **Product Interaction**: On Products page, filter categories and hover cards for details; CTA opens Contact form.
- **Gallery**: Scroll to load images; click for Sheet lightbox preview.
- **Contact Form**: Fill Name, Phone, Message; submit shows success toast (saves to localStorage offline).
- **Theme Toggle**: Click the sun/moon icon in top-right to switch light/dark mode.

Example contact form submission (client-side):
```tsx
// In ContactForm component (simplified)
const handleSubmit = async (data: { name: string; phone: string; message: string }) => {
  try {
    // Attempt API POST (fails gracefully to localStorage)
    await fetch('/api/inquiries', { method: 'POST', body: JSON.stringify(data) });
    toast.success('Liên hệ đã được gửi!');
  } catch {
    localStorage.setItem('tlp_inquiries_demo', JSON.stringify([...existing, data]));
    toast.success('Liên hệ đã lưu cục bộ!');
  }
};
```

## Development Instructions

- **File Structure**:
  - `src/pages/`: Page components (e.g., `HomePage.tsx`, `AboutPage.tsx`).
  - `src/components/ui/`: shadcn/ui primitives (do not modify).
  - `src/components/`: Custom components (e.g., `ProductCard.tsx`, `HeroBanner.tsx`).
  - `worker/user-routes.ts`: Add API routes (e.g., `/api/products`, `/api/inquiries`).
  - `shared/types.ts`: Shared TypeScript types for frontend/backend.

- **Adding Pages**: Import new pages in `src/main.tsx` router config. Use `AppLayout` for consistent structure.
- **Custom Components**: Compose with shadcn/ui (e.g., `<Card className="p-6 shadow-md hover:shadow-lg">`).
- **API Integration**: Use `src/lib/api-client.ts` for fetches. Extend `worker/entities.ts` for Durable Object models (e.g., ProductEntity, InquiryEntity).
- **Styling**: Follow Tailwind guidelines; use root wrapper for gutters: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- **Mock Data**: Edit `shared/mock-data.ts` for products/gallery; real data via Worker APIs in later phases.
- **Linting**: Run `bun run lint` to check code quality.
- **Testing**: Manually test responsiveness (Chrome DevTools) and form submissions.

Avoid modifying `wrangler.jsonc`, `worker/index.ts`, or shadcn/ui components to prevent deployment issues.

## Deployment

Deploy to Cloudflare Workers for global edge hosting with automatic HTTPS, CDN, and Durable Objects for persistence.

1. Ensure Wrangler is installed: `bun add -g wrangler` (or use npm).
2. Login: `wrangler login`.
3. Build the frontend: `bun run build` (outputs to `dist/`).
4. Deploy: `bun run deploy` (or `wrangler deploy`).

The Worker handles both static assets (SPA) and API routes. Assets are served from `dist/` with SPA fallback for routing.

For custom domains:
- Run `wrangler pages publish dist --project-name <project>` (if using Pages).
- Configure DNS in Cloudflare dashboard.

[cloudflarebutton]

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/new-page`.
3. Commit changes: `git commit -m 'Add new feature'`.
4. Push: `git push origin feature/new-page`.
5. Open a Pull Request.

Follow TypeScript, ESLint, and Tailwind best practices. Focus on visual polish and mobile responsiveness.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Support

- **Hotline**: +84 963 939 286 (Hoài Xuân)
- **Address**: 624 Đường Hà Huy Giáp, Phường An Phú Đông, TP. Hồ Chí Minh
- **Issues**: Report bugs or request features on the repository.

Built with ❤️ for rapid, production-ready web apps.