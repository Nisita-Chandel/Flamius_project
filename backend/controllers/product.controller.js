import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
};

export const getProducts = async (req, res) => {
  res.json(await Product.find());
};
