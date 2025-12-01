import { useEffect } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from '@/components/ContactForm';
import { useSEO } from '@/hooks/useSEO';
import { trackPageView } from '@/lib/analytics';
export function ContactPage() {
  useSEO(
    'Liên Hệ - Tài Lộc Phát Showroom',
    'Liên hệ với chúng tôi qua hotline, email hoặc ghé thăm showroom tại 624 Hà Huy Giáp, TP. HCM để được tư vấn.',
    '/contact'
  );
  useEffect(() => {
    trackPageView('/contact');
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-16 md:py-24">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground">
            Liên Hệ Với Chúng Tôi
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Chúng tôi luôn sẵn sàng lắng nghe và tư vấn. Hãy kết n���i với chúng tôi!
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-up">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Địa chỉ Showroom</h3>
                  <p className="text-muted-foreground">624 Đường Hà Huy Giáp, Phường An Phú Đông, TP. H�� Chí Minh</p>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Hotline</h3>
                  <a href="tel:+84963939286" className="text-muted-foreground hover:text-primary transition-colors">
                    +84 963 939 286 (Hoài Xuân)
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <a href="mailto:info@tailocphat.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@tailocphat.com
                  </a>
                </div>
              </CardContent>
            </Card>
            <div className="aspect-video rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1575449340399-0814a6db3952?q=80&w=2070&auto=format&fit=crop" alt="Map placeholder" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="animate-slide-up animation-delay-200">
            <Card className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold font-display">Gửi Y��u Cầu Tư Vấn</h2>
              <p className="mt-2 text-muted-foreground">Điền thông tin vào form dưới đây, chúng tôi sẽ liên hệ lại với bạn sớm nhất.</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}