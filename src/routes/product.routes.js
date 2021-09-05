// create a new express-promise-router, can use async function as route handlers
const router = require('express-promise-router')()

const productController = require('../controllers/product.controller');

// (POST): localhost:3000/api/products
router.post('/products', productController.createProduct);

// (GET): localhost:3000/api/products
router.get('/products', productController.listAllProducts);
// (GET): localhost:3000/api/products/:id
router.get('/products/:id', productController.findProductById);

// (PUT): localhost: 3000/api/products/:id
router.put('/products/:id', productController.updateProductById);

// (DELETE): localhost:3000/api/products/:id
router.delete('/products/:id', productController.deleteProductById);

module.exports = router;