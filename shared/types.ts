export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
export type ProductCategory = 'Thiết bị vệ sinh' | 'Gạch ốp lát' | 'Bồn chứa nước' | 'Máy năng lượng mặt trời';
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

export interface User {
  id: string;
  name: string;
}

export interface Chat {
  id: string;
  title: string;
}

export interface ChatMessage {
  id: string;
  chatId: string;
  userId: string;
  text: string;
  ts: number;
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