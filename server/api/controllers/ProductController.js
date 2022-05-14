/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    create: async function(req, res) {
        try {
            const newProduct = {
                "name": req.body.name,
                "price": req.body.price,
                "description": req.body.description,
                "label": req.body.label,
                "category": req.body.category,
                "image": req.body.image
            }

            const results = await Product.create(newProduct).exec(function(err) {
                return res.send(results);
            })
        } catch (err) {
            res.serverError(err);
        }
    },

    findAll: async function(req, res) {
        try {
            const products = await Product.find()
            res.send(products)
        } catch (err) {
            res.serverError(err.toString())
        }
    },

    findOne: async function(req, res) {
        try {
            const productId = await Product.findOne({ id: req.params.id });
            res.send(productId);
        } catch (err) {
            res.serverError(err.toString())
        }
    },

    update: (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body)
            .then(updatedProduct => res.json(updatedProduct))
            .catch(err => res.status(400).json(err))
    },

    delete: async function(req, res) {
        try {
            const productId = req.param('productId')
            await Product.destroy({ id: productId })
            res.send(productId)
        } catch(err) {
            res.serverError(err.toString())
        }
    }
};

