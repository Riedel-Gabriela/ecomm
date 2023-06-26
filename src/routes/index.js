import express from "express";
import categorias from "./categoriaRoutes.js";
import produtos from "./produtoRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Ecomm"})
    })

    app.use(
        express.json(),
        categorias,
        produtos
    )
}

export default routes;