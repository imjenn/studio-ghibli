/**
 * ImageGalleryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const ImageGallery = require("../models/ImageGallery");

module.exports = {
    create: async function(req, res) {
        try {
            const newImage = {
                "link": req.body.link,
                "film": req.body.film
            }
            // ImageGallery.create(newImage)
            // console.log(req.body)
            const result = await ImageGallery.create(newImage)
            return res.ok(result);
        } catch (err) {
            sails.log.info(err)
            res.serverError(err);
        }
    },

    findAll: async function(req, res) {
        try {
            const images = await ImageGallery.find()
            res.send(images);
        } catch (err) {
            sails.log.info(err)
            res.serverError(err.toString())
        }
    },

    findOne: async function(req, res) {
        try {
            const imageId = await ImageGallery.findOne({ id: req.params.id });
            res.send(imageId);
        } catch (err) {
            res.serverError(err.toString())
        }
    },

    update: async function(req, res) {
        try {
            ImageGallery.update({ id: req.params.id}, req.body).fetch().exec(function (err, image) {
                if (err) return (err);
                return res.json(image)
            })
        } catch (err) {
            res.serverError(err.toString())
        }
    },

    delete: async function(req, res) {
        try {
            const imageId = req.param('imageId')
            await ImageGallery.destroy({ id: imageId })
            res.send(imageId);
        } catch (err) {
            res.serverError(err.toString())
        }
    }

};

