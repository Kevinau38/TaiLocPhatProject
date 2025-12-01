import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { GalleryGrid } from '@/components/GalleryGrid';
import { MOCK_GALLERY } from '@shared/mock-data';
import { X } from 'lucide-react';
export function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setLightboxOpen(true);
  };
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
          <SheetContent className="w-full sm:max-w-3xl lg:max-w-5xl p-0" side="bottom">
            <SheetHeader className="p-4 border-b">
              <SheetTitle>Xem hình ảnh</SheetTitle>
              <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </SheetClose>
            </SheetHeader>
            <div className="p-4 h-[80vh]">
              <img src={selectedImage} alt="Selected gallery" className="w-full h-full object-contain" />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}