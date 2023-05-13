use('ecomm');

const result = db.orders.insertMany([
  {
    dataPedido: new ISODate(),
    account: {
      accountId: ObjectId('63c55f04d1c852ebb46cd351'),
      nome: 'Ada Lovelace',
    },
    enderecoEntrega: {
      bairro: 'Centro',
      rua: 'Rua Afonso Cavalcante de Oliveira',
      numero: '582',
      complemento: 'Apartamento 10',
      bairro: 'Jangurussu',
      cep: '60866202',
      cidade: 'Fortaleza',
      uf: 'CE',
    },
    itens: [
      {
        productId: ObjectId('63c55f04d1c852ebb46cd351'),
        nomeProduto: 'Galaxy Tab S8',
        quantidade: 1,
        precoUnitario: NumberDecimal('59.10'),
        desconto: NumberDecimal('7.00'),
      },
      {
        productId: ObjectId('63c55f04d1c852ebb46cd34e'),
        nomeProduto: 'Cama queen size',
        quantidade: 3,
        precoUnitario: NumberDecimal('31.00'),
        desconto: NumberDecimal('10.00'),
      },
    ],
  },
  {
    dataPedido: new ISODate(),
    account: {
      accountId: ObjectId('54785f04d1c852ebb46cd558'),
      nome: 'Marie Curie',
    },
    enderecoEntrega: {
      bairro: 'Sul',
      rua: 'Avenida Ceará',
      numero: '2478',
      complemento: 'S/N',
      bairro: 'Cerâmica',
      cep: '69905062',
      cidade: 'Rio Branco',
      uf: 'AC',
    },
    itens: [
      {
        productId: ObjectId('63c55f04d1c852ebb46cd350'),
        nomeProduto: 'Building Microservices',
        quantidade: 1,
        precoUnitario: NumberDecimal('80.28'),
        desconto: NumberDecimal('33.00'),
      },
    ],
  },
]);

console.log(result);
