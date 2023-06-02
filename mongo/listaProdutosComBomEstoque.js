use("ecomm");

const resultado = db.products.find({estoque: {$gte: 3}}, {nome: 1, estoque: 1});

console.log(resultado);
