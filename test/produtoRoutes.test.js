import request from "supertest";
import app from "../src/main.js";

let server;
beforeEach(() => {
    const port = 3002;
    server = app.listen(port);
});

afterEach(() => {
    server.close();
});

describe('GET em /produtos', () => {
    it('Deve retornar uma lista de produtos', async () => {
        const resposta = await request(app)
            .get('/produtos')
            .set('Accept', 'aplication/json')
            .expect('content-type', /json/)
            .expect(200);
        expect(resposta.body[0]).toHaveProperty('nome');
    });
});

let idResposta;

describe('POST em /produtos', () => {
    it('Deve adicionar uma nova produto', async () => {
        const resposta = await request(app)
            .post('/produtos')
            .send({
                nome: "Orgulho e Preconceito",
                descricao: "Livro da escritora inglesa Jane Austen.",
                slug: "livro-orgulho-preconceito",
                preco: 57,
                estoque: 2,
                categoria: "6478fb0f114fc78ffdbae236"
              })
            .expect(201)
        idResposta = resposta.body.content
    })
});

describe('GET em /produtos/id', () => {
    it('Deve retornar o recurso adicionado', async () => {
        await request(app)
            .get(`/categorias/${idResposta}`)
    });
});

describe('DELETE em /produtos/id', () => {
    it('Deve deletar o recurso adicionado', async () => {
        await request(app)
            .delete(`/produtos/${idResposta}`)
    });
});

