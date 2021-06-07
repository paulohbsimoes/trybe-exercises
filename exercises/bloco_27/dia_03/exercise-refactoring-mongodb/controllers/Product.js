const ProductModel = require('../models/Product');

const getAll = async (_req, res) => {
  const products = await ProductModel.getAll();

  res.json(products);
};

const getById = async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (!product) return res.status(404).json({ message: 'Not found' });

  res.json(product);
};

const add = async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  if (!newProduct) return res.status(500).json({ message: 'Something went wrong' });

  res.status(201).json(newProduct);
};

const exclude = async (req, res) => {
  const wasDeleted = await ProductModel.exclude(req.params.id);

  if (!wasDeleted) return res.status(500).json({ message: 'Something went wrong' });

  res.json(wasDeleted);
};

const update = async (req, res) => {
  const { name, brand } = req.body;

  const wasUpdated = await ProductModel.update(req.params.id, name, brand);

  if (!wasUpdated) return res.status(500).json({ message: 'Something went wrong' });

  res.json(wasUpdated);
};

module.exports = {
  getAll,
  getById,
  add,
  exclude,
  update
};
