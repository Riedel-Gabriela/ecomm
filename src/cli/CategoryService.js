const API = 'http://127.0.0.1:3000';

class CategoryService {
  static findCategories = async () => {
    const response = await fetch(`${API}/categories`);
    console.log('response status:', response.status);
    const data = await response.json();
    return data;
  };

  static findCategoryById = async (id) => {
    const response = await fetch(`${API}/categories/${id}`);
    console.log('response status:', response.status);
    const data = await response.json();
    return data;
  };

  static createCategory = async (category) => {
    const response = await fetch(`${API}/categories`, {
      method: 'POST',
      body: category,
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    console.log('response status:', response.status);
    const data = await response.json();
    return data;
  };

  static updateCategory = async (id, category) => {
    const response = await fetch(`${API}/categories/${id}`, {
      method: 'PUT',
      body: category,
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    console.log('response status:', response.status);
    const cagtegorie = await response.json();
    console.log('response data:', cagtegorie);
    return cagtegorie;
  };

  static deleteCategory = async (id) => {
    const response = await fetch(`${API}/categories/${id}`, {
      method: 'DELETE',
    });
    console.log('response status:', response.status);
    const data = response.json();
    return data;
  };
}

export default CategoryService;
