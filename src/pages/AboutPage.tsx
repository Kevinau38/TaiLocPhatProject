import { useEffect } from 'react';
import { Building, ShieldCheck, Star, Truck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import { trackPageView } from '@/lib/analytics';
export function AboutPage() {
  useSEO(
    'Về Chúng Tôi - Tài Lộc Phát Showroom',
    'Tìm hiểu về sứ mệnh, giá trị cốt lõi và địa chỉ showroom của Tài Lộc Phát tại TP. Hồ Ch�� Minh.',
    '/about'
  );
  useEffect(() => {
    trackPageView('/about');
  }, []);
  const coreValues = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: 'Uy Tín',
      description: 'Chúng tôi cam kết cung cấp sản phẩm và dịch vụ đáng tin cậy, xây dựng niềm tin vững chắc với khách hàng.',
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: 'Chất Lượng',
      description: 'Sản phẩm của chúng tôi luôn đạt tiêu chuẩn cao nhất, đảm bảo độ bền và hiệu quả sử dụng lâu dài.',
    },
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: 'Giao Nhanh',
      description: 'Hệ thống giao hàng nhanh chóng, hiệu quả, đảm bảo sản phẩm đến tay khách hàng trong thời gian sớm nhất.',
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-16 md:py-24 lg:py-32">
        <div className="space-y-16">
          {/* Introduction Section */}
          <section className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground">
              Về Chúng Tôi
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Tài Lộc Phát Showroom chuyên cung cấp sỉ và lẻ các thiết bị vệ sinh, gạch ốp lát, bồn chứa nước, và máy năng lượng mặt trời. Sứ mệnh của chúng tôi là mang đến những sản phẩm chất lượng cao với dịch vụ tận tâm, góp phần xây dựng nên những công trình bền vững và hiện đại.
            </p>
          </section>
          {/* Core Values Section */}
          <section className="animate-slide-up animation-delay-200">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-center tracking-tight">
              Giá Trị Cốt Lõi
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreValues.map((value) => (
                <Card key={value.title} className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                      {value.icon}
                    </div>
                    <CardTitle className="mt-4 text-2xl font-semibold">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          {/* Location Section */}
          <section className="animate-slide-up animation-delay-400">
            <Card className="overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
              <div className="p-10">
                <h2 className="text-3xl font-bold font-display tracking-tight">Ghé Thăm Showroom Của Chúng Tôi</h2>
                <p className="mt-4 text-muted-foreground">
                  Trải nghiệm trực tiếp sản phẩm và nhận tư vấn chuyên nghiệp từ đội ngũ của chúng tôi.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <Building className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Địa chỉ</h3>
                      <p className="text-muted-foreground">624 Đường Hà Huy Giáp, Phường An Phú Đông, TP. Hồ Chí Minh</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Building className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Giờ mở cửa</h3>
                      <p className="text-muted-foreground">Thứ 2 - Chủ Nhật: 8:00 - 18:00</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild size="lg" className="btn-gradient">
                    <Link to="/contact">Liên Hệ Ngay</Link>
                  </Button>
                </div>
              </div>
              <div className="h-64 lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1974&auto=format&fit=crop"
                  alt="Showroom interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}