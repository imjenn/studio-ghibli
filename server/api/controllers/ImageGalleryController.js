/**
 * ImageGalleryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
    create: async function(req, res) {
        try {
            let { link, filmId } = req.allParams();
            if (!link) return res.badRequest({ err: "Link is required" })
            const image = await ImageGallery.create({
                link,
                film: filmId
            }).fetch();
            // const newImage = {
            //     "link": req.body.link,
            //     "film": req.body.film
            // }
            // ImageGallery.create(newImage)
            // console.log(req.body)
            // const result = await ImageGallery.create(newImage)
            return res.ok(image);
        } catch (err) {
            sails.log.info(err)
            res.serverError(err);
        }
    },

    findAll: async function(req, res) {
        try {
            const images = await ImageGallery.find({})
                .populate('film')
            res.send(images);
        } catch (err) {
            sails.log.info(err)
            res.serverError(err.toString())
        }
    },

    findOne: async function(req, res) {
        try {
            const imageId = await ImageGallery.findOne({ id: req.params.imageid });
            res.ok(imageId);
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

