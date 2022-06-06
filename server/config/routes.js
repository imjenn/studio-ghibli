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

    /**********************************************************
    *                    User Routes                          *
    **********************************************************/
    'POST /login': 'UserController.login',
    'POST /register': 'UserController.register',

    /**********************************************************
    *                    Product Routes                       *
    **********************************************************/
    'POST /newproduct' : 'ProductController.create',
    'GET /products': 'ProductController.findAll',
    'GET /product/:productId': 'ProductController.findOne',
    'PATCH /product/update/:productId': 'ProductController.update',
    'DELETE /product/delete/:productId': 'ProductController.delete',

    /**********************************************************
    *                    Film Routes                          *
    **********************************************************/
    'POST /film/new' : 'Film.create',
    'GET /films': 'Film.findAll',
    'GET /film/:filmid': 'Film.findOne',
    'PATCH /film/update/:filmid': 'Film.update',
    'DELETE /film/delete/:filmid': 'Film.delete',

    /**********************************************************
    *                Image Gallery Routes                     *
    **********************************************************/
    'POST /image/new' : 'ImageGalleryController.create',
    'GET /images': 'ImageGalleryController.findAll',
    'GET /image/:imageid': 'ImageGalleryController.findOne',
    'PATCH /image/update/:imageid': 'ImageGalleryController.update',
    'DELETE /image/delete/:imageid': 'ImageGalleryController.delete',
};
