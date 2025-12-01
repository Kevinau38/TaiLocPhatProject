import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Product } from '@shared/types';
interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
}
export function ProductCard({ product, className, ...props }: ProductCardProps) {
  return (
    <Card className={cn("overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2", className)} {...props}>
      <CardHeader className="p-0">
        <div className="aspect-video overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <p className="text-sm text-primary font-medium">{product.category}</p>
        <CardTitle className="mt-2 text-xl font-semibold leading-tight">{product.name}</CardTitle>
        <p className="mt-2 text-muted-foreground text-sm line-clamp-3">{product.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full" variant="outline">
          <Link to="/contact">Liên hệ tư vấn</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}