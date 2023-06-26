class CategoryService {
    static findCategories() {
        return fetch('http://localhost:3000/categories')
            .then((response) => {
                return response.json()
                    .then((data) => {
                        return {
                            statusCode: response.status,
                            data: data
                        };
                    });
            })
            .catch((error) => {
                throw error;
            });
    }
    static findCategoryById(id) {
        return fetch(`http://localhost:3000/categories/${id}`)
            .then((response) => {
                return response.json()
                    .then((data) => {
                        return {
                            statusCode: response.status,
                            data: data
                        };
                    });
            })
            .catch((error) => {
                throw error;
            });
    }
    static createCategory(categoria) {
        const url = 'http://localhost:3000/api/admin/categories';
        const body = JSON.stringify(categoria);

        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro ao criar categoria');
                }
                return response.json();
            })
            .then((categoria) => {
                return {
                    id: categoria.id,
                    nome: categoria.nome,
                    status: categoria.status
                };
            })
            .catch((error) => {
                throw error;
            });
    }
    static updateCategory(id, categoria) {
        const url = `http://localhost:3000/categories/${id}`;
        const body = JSON.stringify(categoria);
        return fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro ao atualizar categoria');
                }
                return response.json();
            })
            .then((categoria) => {
                return {
                    id: categoria.id,
                    nome: categoria.nome,
                    status: categoria.status
                };
            })
            .catch((error) => {
                throw error;
            });
    }
    static deleteCategory(id) {
        const url = `http://localhost:3000/categories/${id}`;
        return fetch(url, {
            method: 'DELETE'
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro ao deletar categoria');
                }
                return response.json();
            })
            .catch((error) => {
                throw error;
            });
    }
}

export default CategoryService
