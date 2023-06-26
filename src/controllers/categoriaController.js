import categorias from "../models/Categoria.js"

class CategoriaController {
    static listarCategorias = (req, res) => {
        categorias.find((err, categorias) => {
            res.status(200).json(categorias)
        })
    }
    static ativacaoCategoria= (req, res) => {
        let categoria = new categorias(req.body);
        categoria.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar a categoria`})
            } else {
                res.status(201).send(categoria.toJSON())
            }
        })
    }
    static alteracaoCategoria = (req, res) => {
        const id = req.params.id;
        categorias.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'categoria atualizada com sucesso.'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
    static detalhamentoCategoriaPorId = (req, res) => {
        const id = req.params.id;
        categorias.findById(id, (err, categoria) => {
            if(err) {
                res.status(400).send({message: "id não existente"})
            } else {
                res.status(200).send(categoria)
            }
        })
    }
    static remocaoCategoria = (req, res) => {
        const id = req.params.id;
        categorias.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "categoria removida com sucesso."})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default CategoriaController