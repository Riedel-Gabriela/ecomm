import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    nome: { type: String, require: true, match: /^(?![0-9]).{3,}$/ },
    slug: { type: String, require: true, match: /^[a-zA-Z\d-]+$/ },
    precoUnitario: { type: Number, require: true, min: 0.01 },
    estoque: {
      type: Number,
      require: true,
      min: 1,
      max: 9999,
    },
    idCategoria: { type: mongoose.Schema.Types.ObjectId, ref: 'categories', required: true },
  },
);
const products = mongoose.model('products', productSchema);

export default products;
