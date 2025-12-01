import { useEffect } from 'react';
import { HeroBanner } from '@/components/HeroBanner';
import { ProductCard } from '@/components/ProductCard';
import { MOCK_PRODUCTS } from '@shared/mock-data';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShieldCheck, Star, Truck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '@shared/types';
import { useSEO } from '@/hooks/useSEO';
import { trackPageView } from '@/lib/analytics';
export function HomePage() {
  useSEO(
    'Tài Lộc Phát Showroom - Tin cậy, Chất lượng, Giao nhanh',
    'Chuyên cung cấp thiết bị vệ sinh, gạch ốp lát, bồn chứa nước, và máy năng lượng mặt trời cao cấp tại TP. HCM.',
    '/'
  );
  useEffect(() => {
    trackPageView('/');
  }, []);
  // Get one product from each category for highlighting
  const highlightedProducts = MOCK_PRODUCTS.reduce((acc, product) => {
    if (!acc.some(p => p.category === product.category)) {
      acc.push(product);
    }
    return acc;
  }, [] as Product[]).slice(0, 4);
  const coreValues = [
    { icon: <ShieldCheck className="h-8 w-8 text-primary" />, title: 'Uy Tín' },
    { icon: <Star className="h-8 w-8 text-primary" />, title: 'Chất Lượng' },
    { icon: <Truck className="h-8 w-8 text-primary" />, title: 'Giao Nhanh' },
  ];
  return (
    <div>
      <HeroBanner />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24 lg:py-32 space-y-24">
          {/* Featured Products Section */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">Sản Phẩm Nổi Bật</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Những sản phẩm được khách hàng tin dùng và lựa chọn nhiều nhất tại Tài Lộc Phát.
              </p>
            </motion.div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlightedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg" variant="outline">
                <Link to="/products">
                  Xem Tất Cả Sản Phẩm <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>
          {/* Core Values Section */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                      {value.icon}
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold">{value.title}</h3>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
          {/* CTA Section */}
          <section className="bg-muted rounded-lg">
            <div className="py-16 px-6 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
                  Sẵn Sàng Nâng T��m Không Gian Sống Của Bạn?
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                  Chúng tôi trân trọng mời Quý khách đến thăm showroom để trải nghiệm sản phẩm và nhận tư vấn tốt nhất.
                </p>
                <div className="mt-8">
                  <Button asChild size="lg" className="btn-gradient text-lg px-8 py-6">
                    <Link to="/contact">Liên Hệ Ngay</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}