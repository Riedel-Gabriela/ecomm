use("ecomm");

const result = db.accounts.insertMany([
  {
    nome: "Ada Lovelace",
    email: "adalovelace@email.com",
    senha: "123456",
    dataCriacao: new Date(),
    cpf: "74170544048",
    telefone: "5537485954837",
    endereco: {
      bairro: "Norte",
      rua: "Rua Afonso Cavalcante de Oliveira",
      numero: "582",
      complemento: "Apartamento 10",
      cep: "60866202",
      cidade: "Fortaleza",
      uf: "CE",
    }
  },
  {
    nome: "Marie Curie",
    email: "mariecurie@email.com",
    senha: "123456",
    dataCriacao: new Date(),
    cpf: "13245299036",
    telefone: "5558955576176",
    endereco: {
      bairro: "Sul",
      rua: "Avenida Ceará",
      numero: "2478",
      cep: "69905062",
      cidade: "Rio Branco",
      uf: "AC",
    }
  },
  {
    nome: "Rosalind Franklin",
    email: "mariecurie@email.com",
    senha: "123456",
    dataCriacao: new Date(),
    cpf: "53797887000",
    telefone: "5516551237967",
    endereco: {
      bairro: "Centro",
      rua: "Quadra 303 Norte Alameda 18",
      numero: "1575",
      cep: "77001274",
      cidade: "Palmas",
      uf: "TO",
    }
  },
]);

console.log(result);
