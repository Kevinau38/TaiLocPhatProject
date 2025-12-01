export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
export type ProductCategory = 'Thi��t bị vệ sinh' | 'Gạch ốp lát' | 'Bồn chứa nước' | 'Máy năng lư��ng mặt trời';
export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
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
// Types for Durable Object entities
export interface ProductState {
  id: string;
  name:string;
  description: string;
  category: ProductCategory;
  imageUrl: string;
  createdAt: number;
}
export interface InquiryState {
  id: string;
  name: string;
  phone?: string;
  message: string;
  timestamp: number;
  page?: string;
  processed?: boolean;
}