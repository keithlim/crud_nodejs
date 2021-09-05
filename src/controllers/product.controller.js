const db = require("../config/database");

exports.createProduct = async (req, res) => {
    const { product_name, quantity, price } = req.body;

    db.query("INSERT INTO products (productname, quantity, price) VALUES ($1, $2, $3)",
        [product_name, quantity, price], (err, result) => {
            if (err) {
                return next(err)
            }
            res.send(result)
            res.end()
        })
}

exports.listAllProducts = async (req, res, next) => {
    db.query('SELECT * FROM products ORDER BY productname ASC', undefined, (err, result) => {
        if (err) {
            return next(err)
        }
        res.send(result.rows)
        res.end()
    })
};

exports.findProductById = async (req, res) => {
    const productId = parseInt(req.params.id);
    db.query('SELECT * FROM products WHERE productid = $1', [productId], (err, result) => {
        if (err) {
            return next(err)
        }
        res.send(result.rows[0])
        res.end()
    })
}

exports.updateProductById = async (req, res) => {
    const productId = parseInt(req.params.id);
    const { product_name, quantity, price } = req.body;

    db.query("UPDATE products SET productname = $1, quantity = $2, price = $3 WHERE productId = $4", [product_name, quantity, price, productId], (err, result) => {
        if (err) {
            return next(err)
        }
        res.json(result.rowCount)
        res.end()
    })
};

exports.deleteProductById = async (req, res) => {
    const productId = parseInt(req.params.id);
    db.query('DELETE FROM products WHERE productId = $1', [
        productId
    ],
        (err, result) => {
            if (err) {
                return next(err)
            }
            res.json(result.rowCount)
            res.end()
        });
};