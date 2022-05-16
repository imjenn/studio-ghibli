/**
 * FilmController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async function(req, res) {
        try {
            const newFilm = {
                "en_title": req.body.en_title,
                "jp_title": req.body.jp_title,
                "director": req.body.director,
                "producer": req.body.producer,
                "description": req.body.description,
                "time": req.body.time,
                "banner": req.body.banner,
                "cover": req.body.cover,
            }
            // ImageGallery.create(newImage)
            // console.log(req.body)
            const result = await Film.create(newFilm)
            return res.ok(result);
        } catch (err) {
            sails.log.info(err)
            res.serverError(err);
        }
    },

    findAll: async function(req, res) {
        try {
            const films = await Film
                .find({})
                .populate('images')
            res.send(films);
        } catch (err) {
            sails.log.info(err)
            res.serverError(err.toString())
        }
    },

    findOne: async function(req, res) {
        try {
            sails.log.info(`[FilmController.findOne] id: ${req.params.filmid}`)
            const filmId = await Film
                .findOne({ where: { id: req.params.filmid }})
                .populate('images');
            res.ok(filmId);
        } catch (err) {
            res.serverError(err)
        }
    },

    update: async function(req, res) {
        try {
            Film.update({ id: req.params.id}, req.body).fetch().exec(function (err, image) {
                if (err) return (err);
                return res.json(image)
            })
        } catch (err) {
            res.serverError(err.toString())
        }
    },

    delete: async function(req, res) {
        try {
            const filmId = req.param('filmId')
            await Film.destroy({ id: filmId })
            res.send(filmId);
        } catch (err) {
            res.serverError(err.toString())
        }
    }
};

