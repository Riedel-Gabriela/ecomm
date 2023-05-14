import express from 'express';

import CategoryController from '../controllers/CategoryController.js';

const router = express.Router();

router
  .get('/api/categories', CategoryController.find)
  .get('/api/categories/:id', CategoryController.findById)
  .post('/api/admin/categories', CategoryController.save)
  .put('/api/categories/:id/activate', CategoryController.activate)
  .put('/api/admin/categories/:id', CategoryController.update)
  .delete('/api/admin/categories/:id', CategoryController.delete);

export default router;
