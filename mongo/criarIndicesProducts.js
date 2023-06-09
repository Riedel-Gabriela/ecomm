use("ecomm");

const indicesUm = db.categories.createIndex({ nome: 1 })
const indicesDois = db.categories.createIndex({ categoria: 1 })

console.log("índice 1:", indicesUm)
console.log("índice 2:", indicesDois)

//Professor, não entendi muito bem o pq da criação desses índices. Seria legal uma explicação sobre isso.
