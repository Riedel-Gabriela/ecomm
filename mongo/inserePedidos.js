use("ecomm")

config.set('inspectDepth', 100)
//elaboração do json para inserção de pedidos
try {
    const pedidosInseridos = db.orders.insertMany([
        {
            "dataPedido": new Date(),
            "account": {
                "accountId": new ObjectId("648344c4fda0d27bbb56e7e8"),
                "nome": "Joana Fernandes"
            },
            "enderecoEntrega": {
                "bairro": "Itacorubi",
                "rua": "Rodovia Admar Gonzaga",
                "numero": "785",
                "cep": "88034389",
                "cidade": "Florianópolis",
                "uf": "SC"
            },
            "itens": [
                {
                    productId: new ObjectId("6479e24b7f1141fc6e49523f"),
                    quantidade: 1,
                    desconto: NumberDecimal("0.05"),
                    precoUnitario: NumberDecimal("3523.00")
                },
                {
                    productId: new ObjectId("6479e24b7f1141fc6e495241"),
                    quantidade: 2,
                    precoUnitario: NumberDecimal("102.9")
                }
            ]
        },
        {
            "dataPedido": new Date(),
            "account": {
                "accountId": new ObjectId("648344c4fda0d27bbb56e7e7"),
                "nome": "Maria Oliveira"
            },
            "enderecoEntrega": {
                "bairro": "Trindade",
                "rua": "Rua Capitão Romualdo de Barros",
                "numero": "713",
                "cep": "88036000",
                "cidade": "Florianópolis",
                "uf": "SC"
            },
            "itens": [
                {
                    productId: new ObjectId("6479e24b7f1141fc6e495243"),
                    quantidade: 1,
                    precoUnitario: NumberDecimal("9176.00")
                },
                {
                    productId: new ObjectId("6479e24b7f1141fc6e495246"),
                    quantidade: 1,
                    precoUnitario: NumberDecimal("1276.79")
                }
            ]
        }
    ])
} catch (error) {
    console.log(error)
}

