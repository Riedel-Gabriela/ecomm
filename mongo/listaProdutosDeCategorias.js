use("ecomm")

const categorias = db.products.find({ $or: [{ categoria: "LIVROS" }, { categoria: "CELULARES" }] })

console.log(categorias)

