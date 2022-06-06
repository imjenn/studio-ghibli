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
  await Film.createEach([
    {
      "en_title": "Castle in the Sky",
      "jp_title": "天空の城ラピュタ",
      "director": "Hayao Miyazaki",
      "producer": "Isao Takahata",
      "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      "time": "124",
      "banner": "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
      "cover": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg"
    },
    {
      "en_title": "Grave of the Fireflies",
      "jp_title": "火垂るの墓",
      "director": "Isao Takahata",
      "producer": "Toru Hara",
      "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
      "time": "89",
      "banner": "https://image.tmdb.org/t/p/original/vkZSd0Lp8iCVBGpFH9L7LzLusjS.jpg",
      "cover": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qG3RYlIVpTYclR9TYIsy8p7m7AT.jpg"
    },
    {
      "en_title": "My Neighbor Totoro",
      "jp_title": "となりのトトロ",
      "director": "Hayao Miyazaki",
      "producer": "Hayao Miyazaki",
      "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
      "time": "86",
      "banner": "https://image.tmdb.org/t/p/original/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg",
      "cover": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
    },
  ]);

  await Product.createEach([
    {
      "id": "1",
      "name": "Soot Spirited Away Tee - White",
      "price": 19.50,
      "description": "Heavyweight classic unisex tee",
      "label": "Spirited Away",
      "category": "T-Shirt",
      "imageOne": "https://soranews24.com/wp-content/uploads/sites/3/2020/06/gt-20.png?resize=640,534",
      "imageTwo": "",
    },
    {
      "id": "2",
      "name": "No Place for Humans Tee - White",
      "price": 23.50,
      "description": "No place for humans unisex tee",
      "label": "Spirited Away",
      "category": "T-Shirt",
      "imageOne": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F06%2Fstudio-ghibli-t-shirts-my-neighbor-totoro-spirited-away-10.jpg?q=75&w=800&cbr=1&fit=max",
      "imageTwo": "https://soranews24.com/wp-content/uploads/sites/3/2020/06/gt-10-1.png?resize=640,534"
    },
    {
      "id": "3",
      "name": "Looking for Mei",
      "price": 21.50,
      "description": "Looking for Mei unisex tee",
      "label": "My Neighbor Totoro",
      "category": "T-Shirt",
      "imageOne": "https://soranews24.com/wp-content/uploads/sites/3/2020/06/gt-3-1.png?resize=640,534",
      "imageTwo": "https://soranews24.com/wp-content/uploads/sites/3/2020/06/gt-4-1.png?resize=640,262"
    },
    {
      "id": "4",
      "name": "No Face Red Roses Tee",
      "price": 21.50,
      "description": "No-Face red roses unisex tee",
      "label": "Spirited Away",
      "category": "T-Shirt",
      "imageOne": "https://soranews24.com/wp-content/uploads/sites/3/2020/06/gt-11.png?resize=640,534",
      "imageTwo": "https://soranews24.com/wp-content/uploads/sites/3/2020/06/gt-12.png?resize=640,534",
    },
    {
      "id": "5",
      "name": "Mononoke Tee",
      "price": 21.50,
      "description": "Mononoke unisex tee",
      "label": "Mononoke",
      "category": "T-Shirt",
      "imageOne": "https://soranews24.com/wp-content/uploads/sites/3/2020/06/gt-7-1.png?resize=640,534",
      "imageTwo": "https://soranews24.com/wp-content/uploads/sites/3/2020/06/gt-8-1.png?resize=640,534",
    },
    {
      "id": "6",
      "name": "No More Staying Up All Night - White",
      "price": 21.50,
      "description": "Porco Rosso unisex tee",
      "label": "Porco Rosso",
      "category": "T-Shirt",
      "imageOne": "https://soranews24.com/wp-content/uploads/sites/3/2020/06/gt-26.png?resize=640,534",
      "imageTwo": ""
    },
  ])

};
