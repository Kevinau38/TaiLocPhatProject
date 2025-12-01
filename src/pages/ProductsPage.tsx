import React, { useState, useMemo, useEffect } from 'react';
import { Bath, BrickWall, Droplets, Sun, LayoutGrid } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { MOCK_PRODUCTS } from '@shared/mock-data';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { api } from '@/lib/api-client';
import { Product } from '@shared/types';
import { toast } from 'sonner';
const categories = [
  { name: 'Tất cả', value: 'all', icon: <LayoutGrid className="h-5 w-5" /> },
  { name: 'Thiết bị vệ sinh', value: 'Thiết bị vệ sinh', icon: <Bath className="h-5 w-5" /> },
  { name: 'Gạch ốp lát', value: 'Gạch ốp lát', icon: <BrickWall className="h-5 w-5" /> },
  { name: 'Bồn chứa nước', value: 'Bồn chứa nước', icon: <Droplets className="h-5 w-5" /> },
  { name: 'Máy năng lượng mặt trời', value: 'Máy năng lượng mặt trời', icon: <Sun className="h-5 w-5" /> },
];
export function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { items } = await api<{ items: Product[] }>('/api/products');
        setProducts(items);
      } catch (error) {
        console.warn('API call for products failed, falling back to mock data.', error);
        setProducts(MOCK_PRODUCTS as Product[]);
        toast.error('Không thể tải sản phẩm. Hiển thị dữ liệu mẫu.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') {
      return products;
    }
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory, products]);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-16 md:py-24">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground">
            Sản Phẩm Của Chúng Tôi
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Khám phá bộ sưu tập sản phẩm chất lượng cao, đa dạng về mẫu mã và chủng loại.
          </p>
        </div>
        <div className="mt-12 animate-slide-up">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map(category => (
              <Button
                key={category.value}
                variant={activeCategory === category.value ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.value)}
                className={cn(
                  "flex items-center gap-2 transition-all duration-200",
                  activeCategory === category.value && "bg-primary text-primary-foreground"
                )}
              >
                {category.icon}
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="space-y-4">
                  <Skeleton className="h-64 w-full" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))
            : filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
        </div>
        {filteredProducts.length === 0 && !loading && (
          <div className="text-center col-span-full mt-16 text-muted-foreground">
            <p>Không tìm thấy sản phẩm nào trong danh mục này.</p>
          </div>
        )}
      </div>
    </div>
  );
}