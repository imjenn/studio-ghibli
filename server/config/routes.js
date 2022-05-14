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
    'POST /login': 'UserController.login',
    'POST /register': 'UserController.register',

    // PRODUCT ROUTES //
    'POST /newproduct' : 'ProductController.create',
    'GET /products': 'ProductController.findAll',
    'GET /product/:productId': 'ProductController.findOne',
    'PATCH /product/update/:productId': 'ProductController.update',
    'DELETE /product/delete/:productId': 'ProductController.delete',

    // IMAGE GALLERY ROUTES //
    'POST /image/new' : 'ImageGalleryController.create',
    'GET /images': 'ImageGalleryController.findAll',
    'GET /image/:imageid': 'ImageGalleryController.findOne',
    'PATCH /image/update/:imageid': 'ImageGalleryController.update',
    'DELETE /image/delete/:imageid': 'ImageGalleryController.delete',
};
