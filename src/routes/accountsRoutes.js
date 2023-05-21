import express from 'express';
import AccountController from '../controllers/AccountsController.js';
import middlewaresAutenticacao from '../middlewares/autenticacao.js';

const router = express.Router();

router
  .get('/api/admin/accounts', middlewaresAutenticacao.bearer, AccountController.findAccounts)
  .get('/api/accounts/logout', middlewaresAutenticacao.bearer, AccountController.logout)
  .get('/api/accounts/:id', AccountController.findAccountById)
  .post('/api/accounts/login', middlewaresAutenticacao.local, AccountController.login)
  .post('/api/admin/accounts', middlewaresAutenticacao.bearer, AccountController.createAccount)
  .put('/api/admin/accounts/:id', middlewaresAutenticacao.bearer, AccountController.updateAccount)
  .delete('/api/admin/accounts/:id', middlewaresAutenticacao.bearer, AccountController.deleteAccount);

export default router;
