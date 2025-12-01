import { useInView } from 'react-intersection-observer';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { GalleryImage } from '@shared/types';
interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (imageUrl: string) => void;
}
function GalleryItem({ image, onImageClick }: { image: GalleryImage; onImageClick: (url: string) => void }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div
      ref={ref}
      className={cn(
        "relative aspect-square overflow-hidden rounded-lg transition-all duration-500",
        inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )}
      onClick={() => onImageClick(image.imageUrl)}
    >
      {!inView && <Skeleton className="absolute inset-0" />}
      {inView && (
        <>
          <img
            src={image.imageUrl}
            alt={image.alt}
            className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-white font-semibold">{image.alt}</p>
          </div>
        </>
      )}
    </div>
  );
}
export function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <GalleryItem key={image.id} image={image} onImageClick={onImageClick} />
      ))}
    </div>
  );
}