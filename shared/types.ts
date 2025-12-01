export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'Thiết bị vệ sinh' | 'G���ch ốp lát' | 'Bồn chứa nước' | 'Máy năng lượng mặt tr��i';
  imageUrl: string;
}
export interface GalleryImage {
  id: string;
  imageUrl: string;
  alt: string;
}
export interface Inquiry {
  name: string;
  phone?: string;
  message: string;
  timestamp: number;
  page?: string;
}