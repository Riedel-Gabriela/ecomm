use("ecomm")

config.set('inspectDepth', 100)
//inserção de documentos/usuários na coleção contas
try {
    const documentos = db.accounts.insertMany([
    {
      "username": "usuario1",
      "email": "usuario1@example.com",
      "senha": "senha123",
      "dataCriacao": new Date(),
      "cpf": "12345678901",
      "telefone": "1234567890",
      "endereco": {
        "bairro": "Centro",
        "rua": "Rua A",
        "numero": "123",
        "complemento": "Apto 1",
        "cep": "12345678",
        "cidade": "São Paulo",
        "uf": "SP"
      }
    },
    {
      "username": "usuario2",
      "email": "usuario2@example.com",
      "senha": "senha456",
      "dataCriacao": new Date(),
      "cpf": "98765432109",
      "telefone": "9876543210",
      "endereco": {
        "bairro": "Bairro 2",
        "rua": "Rua B",
        "numero": "456",
        "cep": "87654321",
        "cidade": "Rio de Janeiro",
        "uf": "RJ"
      }
    },
    {
      "username": "usuario3",
      "email": "usuario3@example.com",
      "senha": "senha789",
      "dataCriacao": new Date(),
      "cpf": "45612378901",
      "telefone": "4561237890",
      "endereco": {
        "bairro": "Bairro 3",
        "rua": "Rua C",
        "numero": "789",
        "cep": "76543210",
        "cidade": "Belo Horizonte",
        "uf": "MG"
      }
    }
  ])
} catch (error){
    console.log(error)
}
  
 