import Category from '../models/Category.js';

class CategoryController {
  static find = (_req, res) => {
    // eslint-disable-next-line array-callback-return
    Category.find((err, categories) => {
      if (err) {
        res.status(400).send({ message: err.message });
      } else {
        res.status(200).json(categories);
      }
    });
  };

  static findById = (req, res) => {
    const { id } = req.params;

    Category.findById(id, (err, category) => {
      if (err) {
        res.status(400).send({ message: err.message });
      } else {
        res.status(200).json(category);
      }
    });
  };

  static save = (req, res) => {
    const newCategory = new Category(req.body);

    newCategory.save((err, category) => {
      if (err) {
        console.log(err);
        res.status(400).send({ message: err.message });
      } else {
        res.status(201).json(category);
      }
    });
  };

  static update = (req, res) => {
    const { id } = req.params;

    Category.findByIdAndUpdate(id, { $set: req.body }, (err, category) => {
      if (err) {
        res.status(400).send({ message: err.message });
      } else {
        res.status(200).json(category);
      }
    });
  };

  static activate = (req, res) => {
    const { id } = req.params;

    Category.findByIdAndUpdate(id, { $set: { status: 'ATIVA' } }, { new: true }, (err, category) => {
      if (err) {
        res.status(400).send({ message: err.message });
      } else {
        res.status(200).json(category);
      }
    });
  };

  static delete = (req, res) => {
    const { id } = req.params;

    Category.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(400).send({ message: err.message });
      } else {
        res.status(204).send();
      }
    });
  };
}

export default CategoryController;
