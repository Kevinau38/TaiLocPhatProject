# Tài Lộc Phát Showroom
[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Kevinau38/TaiLocPhatProject)
A modern, responsive website for the construction materials business "Tài Lộc Phát Showroom" in Ho Chi Minh City. The site is built in Vietnamese, showcasing product categories, gallery, contact information, and a polished user experience with warm orange branding, mobile-first design, and fast interactions.
## Overview
Tài Lộc Phát Showroom specializes in wholesale and retail of sanitary equipment, ceramic tiles, water tanks, and solar energy machines. The website features:
- **Home**: Attractive hero banner with tagline ("Tin c��y — Chất lượng — Giao nhanh") and product highlights.
- **About Us**: Company introduction, mission, core values (Reliability, Quality, Fast Delivery), and location details.
- **Products**: Category-based grid (Sanitary Equipment, Ceramic Tiles, Water Tanks, Solar Energy Machines) with product cards and contact CTAs.
- **Gallery**: Responsive image showcase of products and showroom, with lazy loading and lightbox previews.
- **Contact**: Address (624 Đường Hà Huy Giáp, Phường An Phú Đông, TP. Hồ Chí Minh), hotline (+84 963 939 286), and a contact form that works offline via localStorage fallback.
The design emphasizes professional, clean aesthetics with construction-themed visuals, warm tones (orange #F38020, gray #6B7280, white #FFFFFF), and smooth micro-interactions. It's SEO-optimized for single-page application (SPA) rendering and fully responsive across devices.
## Key Features
- **Visual Excellence**: Modern UI with shadcn/ui components, Tailwind CSS utilities, and Framer Motion for animations.
- **Responsive Design**: Mobile-first layout that adapts seamlessly to tablets and desktops.
- **SEO Implementation**: Dynamic page titles, meta descriptions, and JSON-LD structured data for enhanced search engine visibility.
- **Privacy-First Analytics**: Simple event logging (page views, form submissions) to localStorage for internal analysis without external trackers.
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
- **State/Forms**: React Hook Form, Zod (validation)
- **Notifications**: Sonner (toasts)
- **Backend/Storage**: Cloudflare Workers with Hono (routing), Durable Objects (persistence via entities pattern)
- **Build Tools**: Vite (dev/build), Bun (package manager/scripts)
- **Other**: clsx/tailwind-merge (class utilities), react-use (hooks)
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
## Production Checklist
- **Cross-Browser Testing**: Verify layout and functionality on Chrome, Firefox, and Safari.
- **Performance Audit**: Use Lighthouse to check for performance bottlenecks, accessibility issues, and SEO best practices.
- **Domain Configuration**: Update the hardcoded domain in `src/hooks/useSEO.ts` to the production domain.
- **Analytics Review**: Check localStorage (`tlp_analytics` key) to ensure events are being logged correctly.
- **Contact Form Endpoint**: Ensure the `/api/inquiries` endpoint is live and correctly configured in a production environment.
## Deployment
Deploy to Cloudflare Workers for global edge hosting with automatic HTTPS, CDN, and Durable Objects for persistence.
1. Ensure Wrangler is installed: `bun add -g wrangler` (or use npm).
2. Login: `wrangler login`.
3. Build the frontend: `bun run build` (outputs to `dist/`).
4. Deploy: `bun run deploy` (or `wrangler deploy`).
The Worker handles both static assets (SPA) and API routes. Assets are served from `dist/` with SPA fallback for routing.
## License
This project is licensed under the MIT License. See the LICENSE file for details.
## Support
- **Hotline**: +84 963 939 286 (Hoài Xuân)
- **Address**: 624 Đường Hà Huy Giáp, Phường An Phú Đông, TP. Hồ Chí Minh
- **Issues**: Report bugs or request features on the repository.
Built with ❤️ at Cloudflare