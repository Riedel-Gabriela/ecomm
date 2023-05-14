import express from 'express';

import ProductController from '../controllers/ProductController.js';

const router = express.Router();

router
  .get('/api/products', ProductController.find)
  .get('/api/products/:id', ProductController.findById)
  .post('/api/admin/products', ProductController.save)
  .put('/api/admin/products/:id', ProductController.update)
  .delete('/api/admin/products/:id', ProductController.delete);

export default router;
