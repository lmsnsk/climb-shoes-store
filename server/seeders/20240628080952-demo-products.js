"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          title: "Scarpa Instinct VS",
          description:
            "By combining the best features of the Instinct Slipper and Lace shoes with some refinements, tweaks and improvements, the Scarpa Instinct VS is a serious contender as one of the best high-end performance climbing shoes available. As with the slipper version, the Instinct VS is entirely constructed from synthetic fabric. However, the more substantial (strapped) upper, stiff midsole and high coverage of rubber means the Scarpa Instinct VS does hold its size and shape considerably better than either of its namesakes",
          price: 165,
          vendor: "Scarpa",
          vendorInfo: "https://www.scarpa.com",
          photo:
            "https://rockrun.com/cdn/shop/products/instinct-velcro-vs__41801_zoom_5000x.jpg?v=1534166085",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Scarpa Drago",
          description:
            "Building on the success of the Furia, the Drago is another super sensitive specialist climbing shoe, but with a number of distinct variances over its sibling. Whereas the Furia was designed as a soft performance climbing shoe for most angles and terrains, the Drago has been designed principally with steep terrain in mind and targeted at high-end bouldering and sport climbing, where maximum control and sensitivity are required",
          price: 155,
          vendor: "Scarpa",
          vendorInfo: "https://www.scarpa.com",
          photo:
            "https://rockrun.com/cdn/shop/products/Untitleddesign_17_5000x.png?v=1671188881",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "La Sportiva Genius",
          description:
            "Providing a precise and close, yet surprisingly comfortable fit when fitted correctly, the La Sportiva Genius lace-ups might provide a great 'no edge' alternative for those with lower volume feet to the Futura. The suede leather/microfibre combination upper is well bolstered with rubber just where you'd want it, meaning the shoe will hold its shape even after extensive use, as well as giving enhanced performance on heel and toe-hooks",
          price: 160,
          vendor: "La Sportiva",
          vendorInfo: "https://www.lasportiva.com",
          photo:
            "https://rockrun.com/cdn/shop/products/genius1_2048x.jpg?v=1533727512",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "La Sportiva Skwama",
          description:
            "The La Sportiva Skwama is a technical, high end performance shoe that is flexible enough to perform on both steep overhangs and slabs. Featuring an unlined upper that's built using a combination of micro-fibre and split leather, the shoe is both comfortable and able to hold its shape over the lifespan. The heel is similar to that used on the Solution allowing you to hook pretty much anything, whilst the forefoot incorporates a softer midsole and more asymmetric fit, capped off with the now familiar rubber toe patch",
          price: 160,
          vendor: "La Sportiva",
          vendorInfo: "https://www.lasportiva.com",
          photo:
            "https://rockrun.com/cdn/shop/products/sportiva_skwama_5000x.jpg?v=1533734171",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tenaya Masai",
          description:
            "The Tenaya Masai is an exquisitely precise and supportive rock climbing shoe, making it an ideal weapon of choice for both edgy face climbs and precarious pebble dances alike. A relatively narrow toe box is partnered by a low volume fit from heel to toe. The heel itself is well fitting and gives competent performance, however this shoe stands apart thanks to the precision toe box",
          price: 130,
          vendor: "Tenaya",
          vendorInfo: "https://www.tenaya.net/",
          photo:
            "https://rockrun.com/cdn/shop/products/masai_5000x.jpg?v=1568836319",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tenaya Mastia",
          description:
            "Tenaya shoes are known for their comfort even when sizing down and the Mastia is certainly no exception! It has a shallow low profile toe box which means you can keep your feet flatter in the shoe without having to scrunch up your toes, making the Mastia very comfortable for a high-performance climbing shoe. The shallow low profile toe box also gives you excellent precision and works really well with pockets, thin cracks and footholds that barely qualify as footholds at all",
          price: 169,
          vendor: "Tenaya",
          vendorInfo: "https://www.tenaya.net/",
          photo:
            "https://rockrun.com/cdn/shop/products/tenaya-escalada-galeria-mastia-vista-lateral_5000x.jpg?v=1628850676",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Evolv Kronos",
          description:
            "Building on the success its predecessor, the latest version of the super popular Evolv Kronos is still very comfortable whilst retaining a technical edge. As with the original Kronos, this shoe fits a wide range of foot shapes, and is ideal for those looking for a shoe to climb indoors or out",
          price: 120,
          vendor: "Evolv",
          vendorInfo: "https://www.evolvsports.com",
          photo:
            "https://rockrun.com/cdn/shop/products/kronos2-p1_5000x.jpg?v=1569232888",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Boreal Ninja",
          description:
            "With a highly downturned and asymmetric last shape, the Boreal Ninja cradles the foot and maximises power at the toe. The shoe features an elasticated integrated tongue with a central pull strap that makes for easy fitting, and an innovative Wrap Rand™ that surrounds and supports the foot. The unlined synthetic upper ensures a comfortable feel whilst the rubber toe band provides outstanding friction and ensures minimal stretch",
          price: 110,
          vendor: "Boreal",
          vendorInfo: "https://www.borealoutdoor.com",
          photo:
            "https://rockrun.com/cdn/shop/products/boreal-ninja_5000x.jpg?v=1574074845",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "La Sportiva Katana",
          description:
            "What makes the Katana a true all-rounder is the moderately technical shape. Whilst the shape may still be off-putting for new climbers, there is a good chance that intermediate climbers who are used to rock boots, will be able to wear the Katanas for extended lengths of time. The slight downturn, reasonable stiffness and great edging capability mean the Katana are great for everything except the steepest of terrain",
          price: 140,
          vendor: "La Sportiva",
          vendorInfo: "https://www.lasportiva.com",
          photo:
            "https://rockrun.com/cdn/shop/products/la-sportiva-katana-climbing-shoe-main-image_2048x.jpg?v=1627549007",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "La Sportiva Solution",
          description:
            "Synonymous with technical and performance bouldering, the heavily downturned La Sportiva Solution features a wrap-around fit and holds your foot in a talon-like position, making it ideal for steep climbing. Also surprisingly adept across a range of angles, the Solution sports a moulded 3D heel cup and the patented P3 Power Platform, which retains the downturned shape and creates a shoe that hooks, grabs, edges and smears on any feature you can find",
          price: 165,
          vendor: "La Sportiva",
          vendorInfo: "https://www.lasportiva.com",
          photo:
            "https://rockrun.com/cdn/shop/products/solution-new2_5000x.jpg?v=1533735455",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "La Sportiva Otaki",
          description:
            "Combining precision with support and stability, the La Sportiva Otaki is a great fitting shoe that's been smartly constructed for medium-wide feet. Supporting elements like the S-Heel cup and the P3 System, accentuate heel hook performance and transfer toe power perfectly. The new construction method combines the advantages of the all round snug fit of a slipper to the precision and volume regulation of a Velcro closure shoe andguarantees maximum sensitivity and precision, even in torsion, as the shoe perfectly follows the movements of the climber eliminating empty volumes and rigid zones",
          price: 165,
          vendor: "La Sportiva",
          vendorInfo: "https://www.lasportiva.com",
          photo:
            "https://rockrun.com/cdn/shop/products/la-sportiva-otaki-climbing-shoes_5000x.jpg?v=1533733114",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "La Sportiva Solution Comp",
          description:
            "The La Sportiva Solution Comp is a modified version of the classic Solution. Taking the universally revered base design of the original model, La Sportiva have softened up the midsole and reduced both the width and volume of the heel. A super adaptable shoe for all modern bouldering styles",
          price: 170,
          vendor: "La Sportiva",
          vendorInfo: "https://www.lasportiva.com",
          photo:
            "https://rockrun.com/cdn/shop/products/solution-comp_5000x.jpg?v=1582205357",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
