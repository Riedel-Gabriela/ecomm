use("ecomm");
//declaração do ítem comprado
const itemComprado = {
    productId: new ObjectId("6479e24b7f1141fc6e49524e"),
    quantidade: 2,
    precoUnitario: NumberDecimal("5939.10")
};
//declaração do pedido e dados do comprador
const pedidoInserido = {
    dataPedido: new Date(),
            account: {
                accountId: new ObjectId("648344c4fda0d27bbb56e7e7"),
                nome: "Maria Oliveira"
            },
            enderecoEntrega: {
                bairro: "Trindade",
                rua: "Rua Capitão Romualdo de Barros",
                numero: "713",
                cep: "88036000",
                cidade: "Florianópolis",
                uf: "SC"
            },
    itens: [itemComprado]
};

//diminuição dos produtos em estoque pelo número de produtos comprados
const filter = { _id: new ObjectId("6479e24b7f1141fc6e49524e"), estoque: { $gte: itemComprado.quantidade } };

//atualização da quantidade de produtos em estoque
const updateStock = { $inc: { estoque: -(itemComprado.quantidade) } };

//inserção do pedido no banco de dados
const resultInsert = db.orders.insertOne(pedidoInserido);
//atualização do estoque no banco de dados
const resultUpdate = db.products.updateOne(filter, updateStock);


console.log("Insertion result: ", resultInsert);
console.log("Update result: ", resultUpdate);