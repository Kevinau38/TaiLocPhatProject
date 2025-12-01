import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { GalleryImage } from '@shared/types';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (imageUrl: string, index: number) => void;
}
const aspectRatios = ['aspect-[4/3]', 'aspect-[3/4]', 'aspect-square', 'aspect-[16/9]'];
function GalleryItem({ image, onImageClick, index }: { image: GalleryImage; onImageClick: (url: string, index: number) => void; index: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const aspectRatio = aspectRatios[index % aspectRatios.length];
  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-lg transition-all duration-500 group",
        inView ? "opacity-100 scale-100" : "opacity-0 scale-95",
        aspectRatio
      )}
      onClick={() => onImageClick(image.imageUrl, index)}
    >
      {!inView && <Skeleton className="absolute inset-0" />}
      {inView && (
        <>
          <img
            src={image.imageUrl}
            alt={image.alt}
            className="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
            <p className="text-white font-semibold text-sm">{image.alt}</p>
          </div>
        </>
      )}
    </div>
  );
}
export function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <GalleryItem key={image.id} image={image} onImageClick={onImageClick} index={index} />
      ))}
    </div>
  );
}