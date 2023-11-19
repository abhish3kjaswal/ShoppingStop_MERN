import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

// @desc get all products
// @route GET/api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  //
  const products = await Product.find({})

  console.log("Products---------------->",products)

  res.json(products)
})

// @desc get single product
// @route GET/api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found!!')
  }
})

// @desc delete single product
// @route DELETE/api/products/:id
// @access Public
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    await product.remove()
    res.json({ message: 'Product removed successfully' })
  } else {
    res.status(404)
    throw new Error('Product not found!!')
  }
})

// @desc Create  single product
// @route POST/api/products
// @access Public
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample Category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  })

  const createdProduct = await product.save()

  res.status(201).json(createdProduct)
})

// @desc Update  a product
// @route PUT/api/products/:id
// @access Public
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
  } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.brand = brand
    product.category = name
    product.countInStock = countInStock

    const updatedProduct = await product.save()
    res.status(201).json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product does not found')
  }
})

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
}
