import { Link } from 'react-router-dom';
import { Sparkles, Phone, MapPin } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl font-display text-gradient">Tài Lộc Phát</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Tin cậy — Chất lượng — Giao nhanh
            </p>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-semibold text-foreground">Liên kết nhanh</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">Về chúng tôi</Link></li>
              <li><Link to="/products" className="text-muted-foreground hover:text-primary">Sản phẩm</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary">Thư viện</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Liên hệ</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-semibold text-foreground">Thông tin liên hệ</h3>
            <div className="mt-4 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">624 Đường Hà Huy Gi��p, Phường An Phú Đông, TP. Hồ Chí Minh</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+84963939286" className="text-muted-foreground hover:text-primary">+84 963 939 286 (Hoài Xuân)</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Tài Lộc Phát Showroom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}