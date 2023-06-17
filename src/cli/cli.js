import CategoryService from "./CategoryService.js";
import fs from 'fs';

function processarComando() {
    const argsLinhaDeComando = process.argv
    const comando = argsLinhaDeComando[2]
    switch (comando) {
        case '--listarCategorias':
            CategoryService.findCategories()
                .then((categorias) => {
                    console.log('Status Code:', categorias.statusCode);
                    console.log('Categorias:', categorias.data);
                })
                .catch((error) => {
                    console.error('Erro ao listar categorias:', error);
                });
            break;
        case '--recuperarCategoriaPorId':
            const id = argsLinhaDeComando[3]
            CategoryService.findCategoryById(id)
                .then((categorias) => {
                    console.log('Status Code:', categorias.statusCode);
                    console.log('Categorias:', categorias.data);
                })
                .catch((error) => {
                    console.error('Erro ao listar categoria:', error);
                });
            break;
        case '--inserirCategoria':
            const arquivoCategoria = argsLinhaDeComando[3];
            const categoriaData = fs.readFileSync(arquivoCategoria);
            const novaCategoria = JSON.parse(categoriaData);
            CategoryService.createCategory(novaCategoria)
                .then((categoria) => {
                    console.log('Categoria inserida com sucesso:', categoria);
                })
                .catch((error) => {
                    console.error('Erro ao inserir categoria:', error);
                });
            break;
        case '--atualizarCategoria':
            const idCategoria = argsLinhaDeComando[3];
            const arquivoCategoriaAtualizada = argsLinhaDeComando[4];
            const categoriaAtualizadaData = fs.readFileSync(arquivoCategoriaAtualizada);
            const categoriaAtualizada = JSON.parse(categoriaAtualizadaData);
            CategoryService.updateCategory(idCategoria, categoriaAtualizada)
                .then((categoria) => {
                    console.log('Categoria atualizada com sucesso:', categoria);
                })
                .catch((error) => {
                    console.error('Erro ao atualizar categoria:', error);
                });
            break;
        case '--excluirCategoria':
            const idCategoriaExcluir = argsLinhaDeComando[3];
            CategoryService.deleteCategory(idCategoriaExcluir)
                .then(() => {
                    console.log('Categoria excluída com sucesso');
                })
                .catch((error) => {
                    console.error('Erro ao excluir categoria:', error);
                });
            break;

        default:
            console.log('Comando inválido.');
    }
}

processarComando()