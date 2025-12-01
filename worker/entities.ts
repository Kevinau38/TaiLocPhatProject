import { IndexedEntity } from "./core-utils";
import type { ProductState, InquiryState } from "@shared/types";
import { MOCK_PRODUCTS } from "@shared/mock-data";
// PRODUCT ENTITY: one DO instance per product, seeded from mock data
export class ProductEntity extends IndexedEntity<ProductState> {
  static readonly entityName = "product";
  static readonly indexName = "products";
  static readonly initialState: ProductState = {
    id: "",
    name: "",
    description: "",
    category: "Thiết bị vệ sinh",
    imageUrl: "",
    createdAt: 0,
  };
  static seedData = MOCK_PRODUCTS;
}
// INQUIRY ENTITY: one DO instance per contact form submission
export class InquiryEntity extends IndexedEntity<InquiryState> {
  static readonly entityName = "inquiry";
  static readonly indexName = "inquiries";
  static readonly initialState: InquiryState = {
    id: "",
    name: "",
    phone: "",
    message: "",
    timestamp: 0,
    page: "",
    processed: false,
  };
}