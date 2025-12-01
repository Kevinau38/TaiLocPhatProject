import { Hono } from "hono";
import { v4 as uuidv4 } from 'uuid';
import type { Env } from './core-utils';
import { ProductEntity, InquiryEntity } from "./entities";
import { ok, bad, isStr } from './core-utils';
export function userRoutes(app: Hono<{ Bindings: Env }>) {
  // PRODUCTS
  app.get('/api/products', async (c) => {
    try {
      await ProductEntity.ensureSeed(c.env);
      const cursor = c.req.query('cursor');
      const limitParam = c.req.query('limit');
      const limit = limitParam ? Math.max(1, Number(limitParam)) : undefined;
      const page = await ProductEntity.list(c.env, cursor ?? null, limit);
      return ok(c, page);
    } catch (e) {
      console.error('Failed to fetch products:', e);
      return bad(c, 'Failed to fetch products');
    }
  });
  // INQUIRIES
  app.post('/api/inquiries', async (c) => {
    let body;
    try {
      body = await c.req.json<{ name: string; phone?: string; message: string; page?: string; timestamp?: number }>();
    } catch (e) {
      console.error('Failed to parse inquiry JSON body:', e);
      return bad(c, 'Invalid JSON in request body');
    }
    try {
      if (!isStr(body.name) || !isStr(body.message)) {
        return bad(c, 'Name and message are required');
      }
      const inquiryData = {
        id: uuidv4(),
        name: body.name,
        phone: body.phone,
        message: body.message,
        page: body.page,
        timestamp: body.timestamp || Date.now(),
        processed: false,
      };
      const inquiry = await InquiryEntity.create(c.env, inquiryData);
      return ok(c, inquiry);
    } catch (e) {
      console.error('Failed to process inquiry:', e);
      return bad(c, 'Failed to create inquiry');
    }
  });
}