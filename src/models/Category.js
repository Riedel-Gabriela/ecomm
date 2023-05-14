import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    nome: { type: String, require: true, match: /^(?![0-9])[a-zA-Z0-9]{3,}$/ },
    status: { type: String, require: true },
  },
);

const Category = mongoose.model('categories', categorySchema);

export default Category;
