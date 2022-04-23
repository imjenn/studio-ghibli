/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    // USER ROUTES //
    // Login
    'POST /login': 'UserController.login',
    // Reigster
    'POST /register': 'UserController.register',

    // PRODUCT ROUTES //
    'POST /newproduct' : 'ProductController.create',
    'GET /products': 'ProductController.findAll',
    'GET /product/:productId': 'ProductController.findOne',
    'PATCH /update/:productId': 'ProductController.update',
    'DELETE /delete/:productId': 'ProductController.delete'

};
