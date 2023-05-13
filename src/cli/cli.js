import fs from 'fs';
import CategoryService from './CategoryService.js';

async function lerArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
  return texto;
}

async function processarComando(argumentos) {
  const comando = argumentos[2];

  // console.log('Argumentos recebidos: ', argumentos);

  let response;
  let id;
  let arquivoCategoria;
  let jsonCategoria;

  switch (comando) {
    case '--listarCategorias':
      response = await CategoryService.findCategories();
      console.log(response);
      break;
    case '--recuperarCategoriaPorId':
      id = argumentos[3];
      response = await CategoryService.findCategoryById(id);
      console.log(response);
      break;
    case '--inserirCategoria':
      arquivoCategoria = argumentos[3];
      jsonCategoria = await lerArquivo(arquivoCategoria);
      response = await CategoryService.createCategory(jsonCategoria);
      console.log(response);
      break;
    case '--atualizarCategoria':
      id = argumentos[3];
      arquivoCategoria = argumentos[4];
      jsonCategoria = await lerArquivo(arquivoCategoria);
      response = await CategoryService.updateCategory(id, jsonCategoria);
      console.log(response);
      break;
    case '--excluirCategoria':
      id = argumentos[3];
      response = await CategoryService.deleteCategory(id);
      console.log(response);
      break;
    default:
      throw new Error(`Comando não definido: ${comando}`);
  }
}

processarComando(process.argv);
