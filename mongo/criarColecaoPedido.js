use("ecomm");

const result = db.createCollection("orders", {
   validator: {
      $jsonSchema: {
         title: "Registro de Pedido",
         description: "Este documento detalha os campos de um pedido",
         type: "object",
         properties: {
            _id: {
               bsonType: "objectId"
            },
            dataPedido: {
               bsonType: "date",
               description: "A data do pedido",
            },
            account: {
               bsonType: "object",
               description: "O cliente que realizou o pedido",
               properties: {
                  accountId: {
                     bsonType: "objectId"
                  },
                  nome: {
                     bsonType: "string",
                     description: "O nome do cliente que realizou o pedido",
                     minLength: 5
                  }
               },
               required: [
                  "accountId",
                  "nome"
               ],
               additionalProperties: false
            },
            enderecoEntrega: {
               bsonType: "object",
               description: "O endereço de entrega do pedido",
               properties: {
                  bairro: {
                     bsonType: "string",
                     description: "O bairro do endereço",
                     minLength: 1
                  },
                  rua: {
                     bsonType: "string",
                     description: "A rua do endereço",
                     minLength: 1
                  },
                  numero: {
                     bsonType: "string",
                     description: "O número do endereço",
                     minLength: 1
                  },
                  complemento: {
                     bsonType: "string",
                     description: "O complemento do endereço",
                  },
                  cep: {
                     bsonType: "string",
                     description: "O CEP do endereço",
                     minLength: 8,
                     maxLength: 8
                  },
                  cidade: {
                     bsonType: "string",
                     description: "A cidade do endereço",
                     minLength: 1
                  },
                  uf: {
                     bsonType: "string",
                     description: "O estado do endereço",
                     minLength: 2,
                     maxLength: 2
                  },
               },
               required: [
                  "rua",
                  "numero",
                  "bairro",
                  "cep",
                  "cidade",
                  "uf"
               ],
               additionalProperties: false
            },
            itens: {
               bsonType: ["array"],
               minItems: 1,
               uniqueItems: true,
               additionalProperties: false,
               items: {
                  bsonType: ["object"],
                  description: "Items do pedido.",
                  properties: {
                     productId: {
                        bsonType: "objectId"
                     },
                     nomeProduto: {
                        bsonType: "string",
                        description: "O nome do produto vendido",
                        minLength: 5
                     },
                     quantidade: {
                        bsonType: "int",
                        description: "A quantidade de produtos",
                        minimum: 1
                     },
                     desconto: {
                        bsonType: "decimal",
                        description: "O desconto aplicaco",
                        minimum: 0.00,
                        exclusiveMinimum: true
                     },
                     precoUnitario: {
                        bsonType: "decimal",
                        description: "O preco unitário do produto",
                        minimum: 0.00,
                        exclusiveMinimum: true
                     },
                  },
                  required: ["productId", "quantidade", "precoUnitario"],
                  additionalProperties: false,
               }
            }
         },
         required: [
            "_id",
            "dataPedido",
            "account",
            "enderecoEntrega",
            "itens"
         ],
         additionalProperties: false
      }
   }
});

console.log(result);