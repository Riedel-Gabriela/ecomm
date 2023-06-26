import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true, match: /^(?![0-9])\s*\S.{2,}$/ },
    descricao: { type: String },
    slug: { type: String, match: /^[a-zA-Z0-9-]+$/ },
    preco: { type: Number, validate: (value) => value > 0 },
    estoque: { type: Number, validate: (value) => (value > 0) && (value < 10000) },
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'categories', required: true, validate: (value) => mongoose.Types.ObjectId.isValid(value) }
  },
    {
    versionKey: false,
  }
);

const produtos = mongoose.model("products", produtoSchema);

export default produtos;
