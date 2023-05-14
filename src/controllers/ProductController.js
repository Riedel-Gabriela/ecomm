import Product from '../models/Product.js';

class ProductController {
  static find = (_req, res) => {
    // eslint-disable-next-line array-callback-return
    Product.find((err, products) => {
      if (err) {
        res.status(400).send({ message: err.message });
      } else {
        res.status(200).json(products);
      }
    });
  };

  static findById = (req, res) => {
    const { id } = req.params;

    Product.findById(id, (err, product) => {
      if (err) {
        res.status(400).send({ message: err.message });
      } else {
        res.status(200).json(product);
      }
    });
  };

  static save = (req, res) => {
    const newProduct = new Product(req.body);

    newProduct.save((err, product) => {
      if (err) {
        console.log(err);
        res.status(400).send({ message: err.message });
      } else {
        res.status(201).json(product);
      }
    });
  };

  static update = (req, res) => {
    const { id } = req.params;

    Product.findByIdAndUpdate(id, { $set: req.body }, (err, product) => {
      if (err) {
        res.status(400).send({ message: err.message });
      } else {
        res.status(200).json(product);
      }
    });
  };

  static delete = (req, res) => {
    const { id } = req.params;

    Product.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(400).send({ message: err.message });
      } else {
        res.status(204).send();
      }
    });
  };
}

export default ProductController;
