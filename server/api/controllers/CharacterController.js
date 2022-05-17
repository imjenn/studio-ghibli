/**
 * CharacterController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async function(req, res) {
        try {
            const newFilm = {
                "en_name": req.body.en_name,
                "jp_name": req.body.jp_name,
                "image": req.body.image,
                "age": req.body.age,
                "eye_color": req.body.eye_color,
                "hair_color": req.body.hair_color,
                "gender": req.body.gender,
            }
            const result = await Character.create(newFilm)
            return res.ok(result);
        } catch (err) {
            sails.log.info(err)
            res.serverError(err);
        }
    },

    findAll: async function(req, res) {
        try {
            const chars = await Character
                .find({})
                .populate('images')
            res.send(chars);
        } catch (err) {
            sails.log.info(err)
            res.serverError(err.toString())
        }
    },

    findOne: async function(req, res) {
        try {
            sails.log.info(`[CharacterController.findOne] id: ${req.params.charid}`)
            const charId = await Character
                .findOne({ where: { id: req.params.charid }})
                .populate('images');
            res.ok(charId);
        } catch (err) {
            res.serverError(err)
        }
    },

    update: async function(req, res) {
        try {
            Character.update({ id: req.params.id}, req.body).fetch().exec(function (err, image) {
                if (err) return (err);
                return res.json(image)
            })
        } catch (err) {
            res.serverError(err.toString())
        }
    },

    delete: async function(req, res) {
        try {
            const charId = req.param('filmId')
            await Character.destroy({ id: charId })
            res.send(charId);
        } catch (err) {
            res.serverError(err.toString())
        }
    }
};

