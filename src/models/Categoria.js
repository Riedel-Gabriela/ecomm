import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: { type: String, required: true, match: /^(?![0-9])[a-zA-Z0-9]{3,}$/ },
        status: {type: String, required: true}
    },
    {
        versionKey: false
    }
)

const categorias = mongoose.model("categories", categoriaSchema)

export default categorias;