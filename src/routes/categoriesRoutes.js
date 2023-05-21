import express from 'express';

import CategoryController from '../controllers/CategoryController.js';
import middlewaresAutenticacao from '../middlewares/autenticacao.js';

const router = express.Router();

router
  .get('/api/categories', CategoryController.find)
  .get('/api/categories/:id', CategoryController.findById)
  .post('/api/admin/categories', middlewaresAutenticacao.bearer, CategoryController.save)
  .put('/api/categories/:id/activate', middlewaresAutenticacao.bearer, CategoryController.activate)
  .put('/api/admin/categories/:id', middlewaresAutenticacao.bearer, CategoryController.update)
  .delete('/api/admin/categories/:id', middlewaresAutenticacao.bearer, CategoryController.delete);

export default router;
