import express from "express";
import ProdutoController from "../controllers/produtoController.js"

const router = express.Router();

router
    .get("/produtos", ProdutoController.listarProdutos)
    .post("/produtos", ProdutoController.ativacaoProduto)
    .put("/produtos/:id", ProdutoController.alteracaoProduto)
    .get("/produtos/:id", ProdutoController.detalhamentoProdutoPorId)
    .delete("/produtos/:id", ProdutoController.remocaoProduto)

export default router;