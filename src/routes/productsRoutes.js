import express from 'express';
import middlewaresAutenticacao from '../middlewares/autenticacao.js';

import ProductController from '../controllers/ProductController.js';

const router = express.Router();

router
  .get('/api/products', ProductController.find)
  .get('/api/products/:id', ProductController.findById)
  .post('/api/admin/products', middlewaresAutenticacao.bearer, ProductController.save)
  .put('/api/admin/products/:id', middlewaresAutenticacao.bearer, ProductController.update)
  .delete('/api/admin/products/:id', middlewaresAutenticacao.bearer, ProductController.delete);

export default router;
