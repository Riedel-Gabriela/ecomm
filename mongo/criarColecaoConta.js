use("ecomm");

const result = db.createCollection("accounts", {
   validator: {
      $jsonSchema: {
         title: "Registro de Conta",
         description: "Este documento detalha os campos de uma conta",
         type: "object",
         properties: {
            _id: {
               bsonType: "objectId"
            },
            nome: {
               bsonType: "string",
               description: "O nome do usuário",
               minLength: 5
            },
            email: {
               bsonType: "string",
               description: "O email do usuário",
               minLength: 5
            },
            senha: {
               bsonType: "string",
               description: "A senha do usuário",
               minLength: 5
            },
            dataCriacao: {
               bsonType: "date",
               description: "A data de criação do usuário",
            },
            cpf: {
               bsonType: "string",
               description: "O CPF do usuário",
               minLength: 11,
               maxLength: 11,
            },
            telefone: {
               bsonType: "string",
               description: "O telefone do usuário",
               minLength: 10
            },
            endereco: {
               bsonType: "object",
               description: "O endereço do usuário",
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
                  "bairro",
                  "rua",
                  "numero",
                  "cep",
                  "cidade",
                  "uf"
               ],
               additionalProperties: false
            },
         },
         required: [
            "_id",
            "nome",
            "email",
            "dataCriacao",
            "cpf",
            "telefone",
            "endereco"
         ],
         additionalProperties: false
      }
   }
});

console.log(result);