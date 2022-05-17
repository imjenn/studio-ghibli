/**
 * Film.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    en_title: {
      type: 'String',
      required: true
    },

    jp_title: {
      type: 'String'
    },

    director: {
      type: 'String'
    },

    producer: {
      type: 'String'
    },

    description: {
      type: 'String',
      columnType: 'longtext'
    },

    // vehicles: {
    //   type: 'String'
    // },

    time: {
      type: 'String'
    },

    // gallery: {
    //   type: 'String'
    // },

    banner: {
      type: 'String'
    },

    cover: {
      type: 'String'
    },


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    characters: {
      collection: 'character',
      via: 'film'
    },
    images: {
      collection: 'imagegallery',
      via: 'film'
    },

  },

};

