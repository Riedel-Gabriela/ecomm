import produtos from "../models/Produto.js"

class ProdutoController {
    static listarProdutos = (req, res) => {
        produtos.find((err, produtos) => {
            res.status(200).json(produtos)
        })
    }
    static ativacaoProduto = (req, res) => {
        let produto = new produtos(req.body);
        produto.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar o produto`})
            } else {
                res.status(201).send(produto.toJSON())
            }
        })
    }
    static alteracaoProduto = (req, res) => {
        const id = req.params.id;
        produtos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'produto atualizado com sucesso.'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
    static detalhamentoProdutoPorId = (req, res) => {
        const id = req.params.id;
        produtos.findById(id, (err, produto) => {
            if(err) {
                res.status(400).send({message: "id não existente"})
            } else {
                res.status(200).send(produto)
            }
        })
    }
    static remocaoProduto = (req, res) => {
        const id = req.params.id;
        produtos.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "produto removido com sucesso."})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default ProdutoController;