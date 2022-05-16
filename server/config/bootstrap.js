/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

  // await ImageGallery.createEach([
  //   { link: "https://www.ghibli.jp/gallery/chihiro001.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro002.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro003.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro004.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro005.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro006.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro007.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro008.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro009.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro010.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro011.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro012.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro013.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro014.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro015.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro016.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro017.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro018.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro019.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro020.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro021.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro022.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro023.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro024.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro025.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro026.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro027.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro028.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro029.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro030.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro031.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro032.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro033.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro034.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro035.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro036.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro037.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro038.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro039.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro040.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro041.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro042.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro043.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro044.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro045.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro046.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro047.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro048.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro049.jpg", film: "Spirited Away" },
  //   { link: "https://www.ghibli.jp/gallery/chihiro050.jpg", film: "Spirited Away" }
  // ])

};
