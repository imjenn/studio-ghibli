/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const bcrypt = require('bcrypt');
// const User = require('../models/User');

module.exports = {
  
    register: async function (req, res) {
        // Hash password before creating user
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        try {
            const newUser = {
                "firstName": req.body.firstName,
                "lastName": req.body.lastName,
                "email": req.body.email,
                "password": hashedPassword
            }
            const results = await User.create(newUser);
            return res.ok(results);
        }
        catch (err) {
            if (err) return err;
        }
        return res.serverError(err);
    },

    login: async function (req, res) {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) return res.notFound({ err: 'User does not exist' })
            const matchedPassword = await bcrypt.compare(req.body.password, user.password);
            if (!matchedPassword) return res.badRequest({ err: 'Unauthorized user' });
            return res.ok(user);
        }
        catch (err) {
            if (err) return err;
        }
        return res.serverError(err);
    },

    logout: async function (req, res) {
        // to do
    }
};

