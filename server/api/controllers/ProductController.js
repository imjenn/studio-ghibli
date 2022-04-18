/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Product = require("../models/Product");

module.exports = {

    create: (req, res) => {
        Product.create(req.body)
            .then(product => res.json(product))
            .catch(err => res.status(400).json(err))
    },

    findAll: (req, res) => {
        Product.find()
            .then(products => res.json(products))
            .catch(err => res.json(err))
    },

    findOne: (req, res) => {
        Product.findById(req.params.id) 
            .then(product => res.json(product))
            .catch(err => res.json(err))
    },

    update: (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body)
            .then(updatedProduct => res.json(updatedProduct))
            .catch(err => res.status(400).json(err))
    },

    delete: (req, res) => {
        Product.findByIdAndDelete(req.params.id) 
            .then(result => res.json({ result: result }))
            .catch(err => res.json(err))
    }
};

