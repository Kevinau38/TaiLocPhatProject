import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 md:py-32 lg:py-48 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-foreground">
              <span className="text-gradient">Tài Lộc Phát Showroom</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-medium text-muted-foreground">
              Tin cậy — Chất lượng — Giao nhanh
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-xl mx-auto"
          >
            <p className="text-lg text-foreground">
              Chúng tôi chuyên cung cấp sỉ và lẻ thiết bị vệ sinh, gạch ốp lát, bồn chứa nước và máy năng lượng mặt trời.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="btn-gradient text-lg px-8 py-6">
              <Link to="/contact">
                Ghé Thăm Showroom
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
              <Link to="/products">Xem Sản Phẩm</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}