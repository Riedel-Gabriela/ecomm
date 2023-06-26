import express from "express";
import CategoriaController from "../controllers/categoriaController.js";

const router = express.Router();

router
    .get("/categorias", CategoriaController.listarCategorias)
    .post("/categorias", CategoriaController.ativacaoCategoria)
    .put("/categorias/:id", CategoriaController.alteracaoCategoria)
    .get("/categorias/:id", CategoriaController.detalhamentoCategoriaPorId)
    .delete("/categorias/:id", CategoriaController.remocaoCategoria)

export default router;