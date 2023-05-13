use('ecomm');

const result = db.runCommand({
  collMod: 'accounts',
  validator: {
    $jsonSchema: {
      title: 'Registro de Conta',
      description: 'Este documento detalha os campos de uma conta',
      type: 'object',
      properties: {
        _id: {
          bsonType: 'objectId',
        },
        nome: {
          bsonType: 'string',
          description: 'O nome do usuário',
          minLength: 5,
        },
        email: {
          bsonType: 'string',
          description: 'O email do usuário',
          pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
        },
        senha: {
          bsonType: 'string',
          description: 'A senha do usuário',
          minLength: 5,
        },
        dataCriacao: {
          bsonType: 'date',
          description: 'A data de criação do usuário',
        },
        cpf: {
          bsonType: 'string',
          description: 'O CPF do usuário',
          pattern: '^\\d{11}$',
        },
        telefone: {
          bsonType: 'string',
          description: 'O telefone do usuário',
          minLength: 10,
          pattern: '^[0-9]+$',
        },
        endereco: {
          bsonType: 'object',
          description: 'O endereço do usuário',
          properties: {
            bairro: {
              bsonType: 'string',
              description: 'O bairro do endereço',
              minLength: 1,
            },
            rua: {
              bsonType: 'string',
              description: 'A rua do endereço',
              minLength: 1,
            },
            numero: {
              bsonType: 'string',
              description: 'O número do endereço',
              minLength: 1,
              pattern: '^(?:[0-9]+|S\/N)$',
            },
            complemento: {
              bsonType: 'string',
              description: 'O complemento do endereço',
            },
            cep: {
              bsonType: 'string',
              description: 'O CEP do endereço',
              pattern: '^\\d{8}$',
            },
            cidade: {
              bsonType: 'string',
              description: 'A cidade do endereço',
              minLength: 1,
            },
            uf: {
              bsonType: 'string',
              description: 'O estado do endereço',
              pattern: '^(?i)(\s*(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)?)$',
            },
          },
          required: [
            'bairro',
            'rua',
            'numero',
            'cep',
            'cidade',
            'uf',
          ],
          additionalProperties: false,
        },
      },
      required: [
        '_id',
        'nome',
        'email',
        'dataCriacao',
        'cpf',
        'telefone',
        'endereco',
      ],
      additionalProperties: false,
    },
  },
});

console.log(result);
