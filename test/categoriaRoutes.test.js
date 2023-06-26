import request from "supertest";
import app from "../src/main.js";

let server;
beforeEach(() => {
    const port = 3001;
    server = app.listen(port);
});

afterEach(() => {
    server.close();
});

describe('GET em /categorias', () => {
    it('Deve retornar uma lista de categorias', async () => {
        const resposta = await request(app)
            .get('/categorias')
            .set('Accept', 'aplication/json')
            .expect('content-type', /json/)
            .expect(200);
        expect(resposta.body[0]).toHaveProperty('nome');
    });
});

let idResposta;

describe('POST em /categorias', () => {
    it('Deve adicionar uma nova categoria', async () => {
        const resposta = await request(app)
            .post('/categorias')
            .send({
                nome: "ESPORTES",
                status: "ATIVA"
            })
            .expect(201)
        idResposta = resposta.body.content
    })
});

describe('GET em /categorias/id', () => {
    it('Deve retornar o recurso adicionado', async () => {
        await request(app)
            .get(`/categorias/${idResposta}`)
    });
});

describe('DELETE em /categorias/id', () => {
    it('Deve deletar o recurso adicionado', async () => {
        await request(app)
            .delete(`/categorias/${idResposta}`)
    });
});

