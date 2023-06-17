use("ecomm")
//criação da coleção de contas já com esquema de validação
db.createCollection("accounts", {
   validator: {
      $jsonSchema: {
         title: "Registro de contas",
         description: "Este documento registra os detalhes de uma conta",
         bsonType: "object",
         required: ["_id", "username", "email", "senha", "dataCriacao", "cpf", "telefone", "endereco"],
         properties: {
            _id: {
               bsonType: "objectId",
               description: "Id da conta"
            },
            username: {
               bsonType: "string",
               description: "Username da conta",
               minLength: 5
            },
            email: {
               bsonType: "string",
               description: "Email da conta",
               minLength: 5
            },
            senha: {
               bsonType: "string",
               description: "Senha da conta",
               minLength: 5
            },
            dataCriacao: {
               bsonType: "date",
               description: "Data de criação da conta"
            },
            cpf: {
               bsonType: "string",
               description: "CPF da conta",
               pattern: "^[0-9]{11}$"
            },
            telefone: {
               bsonType: "string",
               description: "Telefone da conta",
               minLength: 10
            },
            endereco: {
               bsonType: "object",
               description: "Endereço da conta",
               required: ["bairro", "rua", "numero", "cep", "cidade", "uf"],
               properties: {
                  bairro: {
                     bsonType: "string",
                     description: "Bairro do endereço da conta",
                     minLength: 1
                  },
                  rua: {
                     bsonType: "string",
                     description: "Rua do endereço da conta",
                     minLength: 1
                  },
                  numero: {
                     bsonType: "string",
                     description: "Número do endereço da conta",
                     minLength: 1
                  },
                  complemento: {
                     bsonType: "string",
                     description: "Complemento do endereço da conta"
                  },
                  cep: {
                     bsonType: "string",
                     description: "CEP do endereço da conta",
                     pattern: "^[0-9]{8}$"
                  },
                  cidade: {
                     bsonType: "string",
                     description: "Cidade do endereço da conta",
                     minLength: 5
                  },
                  uf: {
                     bsonType: "string",
                     description: "UF do endereço da conta",
                     pattern: "^[A-Z]{2}$"
                  }
               },
               additionalProperties: false
            }
         },
         additionalProperties: false
      }
   }
})