use('ecomm');

const result = db.products.updateOne(
  { nome: 'Galaxy Tab S8', estoque: { $gte: 2 } },
  { $inc: { estoque: -2 } },
);

console.log(result);
