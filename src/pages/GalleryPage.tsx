import { useState, useEffect, useCallback } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { GalleryGrid } from '@/components/GalleryGrid';
import { MOCK_GALLERY } from '@shared/mock-data';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const openLightbox = (imageUrl: string, index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };
  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % MOCK_GALLERY.length);
  }, []);
  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + MOCK_GALLERY.length) % MOCK_GALLERY.length);
  }, []);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, nextImage, prevImage]);
  const selectedImage = MOCK_GALLERY[currentIndex];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-16 md:py-24">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground">
            Thư Viện Hình Ảnh
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Hình ảnh thực tế từ showroom và các dự án đã hoàn thành của chúng tôi.
          </p>
        </div>
        <div className="mt-16">
          <GalleryGrid images={MOCK_GALLERY} onImageClick={openLightbox} />
        </div>
        <Sheet open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <SheetContent className="w-full sm:max-w-4xl lg:max-w-6xl p-0" side="bottom">
            <SheetHeader className="p-4 border-b flex flex-row items-center justify-between">
              <SheetTitle>Xem hình ảnh ({currentIndex + 1} / {MOCK_GALLERY.length})</SheetTitle>
              <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </SheetClose>
            </SheetHeader>
            <div className="relative h-[80vh] flex items-center justify-center p-4 bg-muted/20">
              <Button variant="ghost" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 z-10" onClick={prevImage}>
                <ArrowLeft className="h-6 w-6" />
              </Button>
              {selectedImage && (
                <img src={selectedImage.imageUrl} alt={selectedImage.alt} className="max-w-full max-h-full object-contain" />
              )}
              <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 z-10" onClick={nextImage}>
                <ArrowRight className="h-6 w-6" />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}