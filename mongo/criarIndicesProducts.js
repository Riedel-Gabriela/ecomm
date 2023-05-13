use('ecomm');

const index1result = db.categories.createIndex({ nome: 1 });
const index2result = db.categories.createIndex({ categoria: 1 });

console.log('index1result', index1result);
console.log('index2result', index2result);
