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
          sizes: "36,36.5,38,39.5,40,41,42.5",
          vendorInfo: "https://www.scarpa.com",
          photo:
            "https://rockrun.com/cdn/shop/products/instinct-velcro-vs__41801_zoom_5000x.jpg?v=1534166085,https://rockrun.com/cdn/shop/products/70013-000-1_01_INS-VS_Blk_InstinctVS_Black_5000x.jpg?v=1628070893,https://rockrun.com/cdn/shop/products/70013-000-1_02_INS-VS_Blk_InstinctVS_Black_5000x.jpg?v=1628070892,https://rockrun.com/cdn/shop/products/70013-000-1_03_INS-VS_Blk_InstinctVS_Black_5000x.jpg?v=1628070893,https://rockrun.com/cdn/shop/products/70013-000-1_04_INS-VS_Blk_InstinctVS_Black_5000x.jpg?v=1628070893",
          category: "climbing shoes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Scarpa Drago",
          description:
            "Building on the success of the Furia, the Drago is another super sensitive specialist climbing shoe, but with a number of distinct variances over its sibling. Whereas the Furia was designed as a soft performance climbing shoe for most angles and terrains, the Drago has been designed principally with steep terrain in mind and targeted at high-end bouldering and sport climbing, where maximum control and sensitivity are required",
          price: 155,
          vendor: "Scarpa",
          sizes: "36,36.5,38,39.5,40,41,42.5",
          vendorInfo: "https://www.scarpa.com",
          photo:
            "https://rockrun.com/cdn/shop/products/Untitleddesign_17_5000x.png?v=1671188881,https://rockrun.com/cdn/shop/products/70017-000-1_01_DRA_Yel_Drago_Yellow_600x.jpg?v=1671188881,https://rockrun.com/cdn/shop/products/70017-000-1_02_DRA_Yel_Drago_Yellow_5000x.jpg?v=1671188881,https://rockrun.com/cdn/shop/products/70017-000-1_03_DRA_Yel_Drago_Yellow_600x.jpg?v=1671188881,https://rockrun.com/cdn/shop/products/70017-000-1_04_DRA_Yel_Drago_Yellow_600x.jpg?v=1671188881",
          category: "climbing shoes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "La Sportiva Genius",
          description:
            "Providing a precise and close, yet surprisingly comfortable fit when fitted correctly, the La Sportiva Genius lace-ups might provide a great 'no edge' alternative for those with lower volume feet to the Futura. The suede leather/microfibre combination upper is well bolstered with rubber just where you'd want it, meaning the shoe will hold its shape even after extensive use, as well as giving enhanced performance on heel and toe-hooks",
          price: 160,
          vendor: "La Sportiva",
          sizes: "36,36.5,38,39.5,40,41,42.5",
          vendorInfo: "https://www.lasportiva.com",
          photo:
            "https://rockrun.com/cdn/shop/products/genius1_2048x.jpg?v=1533727512,https://rockrun.com/cdn/shop/products/genius3_5000x.jpg?v=1533727513,https://rockrun.com/cdn/shop/products/genius4_5000x.jpg?v=1533727513,https://rockrun.com/cdn/shop/products/genius2_5000x.jpg?v=1506882987",
          category: "climbing shoes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "La Sportiva Skwama",
          description:
            "The La Sportiva Skwama is a technical, high end performance shoe that is flexible enough to perform on both steep overhangs and slabs. Featuring an unlined upper that's built using a combination of micro-fibre and split leather, the shoe is both comfortable and able to hold its shape over the lifespan. The heel is similar to that used on the Solution allowing you to hook pretty much anything, whilst the forefoot incorporates a softer midsole and more asymmetric fit, capped off with the now familiar rubber toe patch",
          price: 160,
          vendor: "La Sportiva",
          sizes: "36,36.5,38,39.5,40,41,42.5",
          vendorInfo: "https://www.lasportiva.com",
          photo:
            "https://rockrun.com/cdn/shop/products/sportiva_skwama_5000x.jpg?v=1533734171,https://rockrun.com/cdn/shop/products/swama2_5000x.jpg?v=1533734172,https://rockrun.com/cdn/shop/products/swama_5000x.jpg?v=1533734172,https://rockrun.com/cdn/shop/products/swama3_5000x.jpg?v=1533734173",
          category: "climbing shoes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tenaya Masai",
          description:
            "The Tenaya Masai is an exquisitely precise and supportive rock climbing shoe, making it an ideal weapon of choice for both edgy face climbs and precarious pebble dances alike. A relatively narrow toe box is partnered by a low volume fit from heel to toe. The heel itself is well fitting and gives competent performance, however this shoe stands apart thanks to the precision toe box",
          price: 130,
          vendor: "Tenaya",
          sizes: "36,36.5,38,39.5,40,41,42.5",
          vendorInfo: "https://www.tenaya.net/",
          photo:
            "https://rockrun.com/cdn/shop/products/masai_5000x.jpg?v=1568836319,https://rockrun.com/cdn/shop/products/masi_2_5000x.jpg?v=1568836319,https://rockrun.com/cdn/shop/products/masi_3_5000x.jpg?v=1568836319,https://rockrun.com/cdn/shop/products/teneya_masai2_5000x.jpg?v=1568836319",
          category: "climbing shoes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tenaya Mastia",
          description:
            "Tenaya shoes are known for their comfort even when sizing down and the Mastia is certainly no exception! It has a shallow low profile toe box which means you can keep your feet flatter in the shoe without having to scrunch up your toes, making the Mastia very comfortable for a high-performance climbing shoe. The shallow low profile toe box also gives you excellent precision and works really well with pockets, thin cracks and footholds that barely qualify as footholds at all",
          price: 169,
          vendor: "Tenaya",
          sizes: "36,36.5,38,39.5,40,41,42.5",
          vendorInfo: "https://www.tenaya.net/",
          photo:
            "https://rockrun.com/cdn/shop/products/tenaya-escalada-galeria-mastia-vista-lateral_5000x.jpg?v=1628850676,https://rockrun.com/cdn/shop/products/tenaya-escalada-galeria-mastia-vista-escorzo_600x.jpg?v=1628850676,https://rockrun.com/cdn/shop/products/tenaya-escalada-galeria-mastia-vista-superior2_5000x.jpg?v=1628850676,https://rockrun.com/cdn/shop/products/tenaya-escalada-galeria-mastia-vista-trasera_600x.jpg?v=1628850676,https://rockrun.com/cdn/shop/products/tenayamastaisole_5000x.jpg?v=1628850676",
          category: "climbing shoes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Evolv Kronos",
          description:
            "Building on the success its predecessor, the latest version of the super popular Evolv Kronos is still very comfortable whilst retaining a technical edge. As with the original Kronos, this shoe fits a wide range of foot shapes, and is ideal for those looking for a shoe to climb indoors or out",
          price: 120,
          vendor: "Evolv",
          sizes: "36,36.5,38,39.5,40,41,42.5",
          vendorInfo: "https://www.evolvsports.com",
          photo:
            "https://rockrun.com/cdn/shop/products/kronos2-p1_5000x.jpg?v=1569232888,https://rockrun.com/cdn/shop/products/kronos2-p2_5000x.jpg?v=1569232888,https://rockrun.com/cdn/shop/products/kronos2-p3_600x.jpg?v=1569232888,https://rockrun.com/cdn/shop/products/kronos2-p4_5000x.jpg?v=1569232888",
          category: "climbing shoes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Boreal Ninja",
          description:
            "With a highly downturned and asymmetric last shape, the Boreal Ninja cradles the foot and maximises power at the toe. The shoe features an elasticated integrated tongue with a central pull strap that makes for easy fitting, and an innovative Wrap Rand™ that surrounds and supports the foot. The unlined synthetic upper ensures a comfortable feel whilst the rubber toe band provides outstanding friction and ensures minimal stretch",
          price: 110,
          vendor: "Boreal",
          sizes: "36,36.5,38,39.5,40,41,42.5",
          vendorInfo: "https://www.borealoutdoor.com",
          photo:
            "https://rockrun.com/cdn/shop/products/boreal-ninja_5000x.jpg?v=1574074845,https://rockrun.com/cdn/shop/products/boreal-ninja-climbing-shoes-detail-2_600x.jpg?v=1574074846,https://rockrun.com/cdn/shop/products/boreal-ninja-climbing-shoes-detail-3_5000x.jpg?v=1574074846",
          category: "climbing shoes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "La Sportiva Katana",
          description:
            "What makes the Katana a true all-rounder is the moderately technical shape. Whilst the shape may still be off-putting for new climbers, there is a good chance that intermediate climbers who are used to rock boots, will be able to wear the Katanas for extended lengths of time. The slight downturn, reasonable stiffness and great edging capability mean the Katana are great for everything except the steepest of terrain",
          price: 140,
          vendor: "La Sportiva",
          sizes: "36,36.5,38,39.5,40,41,42.5",
          vendorInfo: "https://www.lasportiva.com",
          photo:
            "https://rockrun.com/cdn/shop/products/la-sportiva-katana-climbing-shoe-main-image_2048x.jpg?v=1627549007,https://rockrun.com/cdn/shop/files/40J_100999_05_600x.jpg?v=1702030090,https://rockrun.com/cdn/shop/files/40J_100999_03_5000x.jpg?v=1702030090,https://rockrun.com/cdn/shop/files/40J_100999_04_5000x.jpg?v=1701967684,https://rockrun.com/cdn/shop/files/40J_100999_02_5000x.jpg?v=1701967684",
          category: "climbing shoes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "La Sportiva Solution",
          description:
            "Synonymous with technical and performance bouldering, the heavily downturned La Sportiva Solution features a wrap-around fit and holds your foot in a talon-like position, making it ideal for steep climbing. Also surprisingly adept across a range of angles, the Solution sports a moulded 3D heel cup and the patented P3 Power Platform, which retains the downturned shape and creates a shoe that hooks, grabs, edges and smears on any feature you can find",
          price: 165,
          vendor: "La Sportiva",
          sizes: "36,36.5,38,39.5,40,41,42.5",
          vendorInfo: "https://www.lasportiva.com",
          photo:
            "https://rockrun.com/cdn/shop/products/solution-new2_5000x.jpg?v=1533735455,https://rockrun.com/cdn/shop/products/solution-new_5000x.jpg?v=1533735456,https://rockrun.com/cdn/shop/products/SOLUTION_5_600x.JPG?v=1533735456,https://rockrun.com/cdn/shop/products/SOLUTION4_5000x.JPG?v=1533735457",
          category: "climbing shoes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "La Sportiva Otaki",
          description:
            "Combining precision with support and stability, the La Sportiva Otaki is a great fitting shoe that's been smartly constructed for medium-wide feet. Supporting elements like the S-Heel cup and the P3 System, accentuate heel hook performance and transfer toe power perfectly. The new construction method combines the advantages of the all round snug fit of a slipper to the precision and volume regulation of a Velcro closure shoe andguarantees maximum sensitivity and precision, even in torsion, as the shoe perfectly follows the movements of the climber eliminating empty volumes and rigid zones",
          price: 165,
          vendor: "La Sportiva",
          sizes: "36,36.5,38,39.5,40,41,42.5",
          vendorInfo: "https://www.lasportiva.com",
          photo:
            "https://rockrun.com/cdn/shop/products/la-sportiva-otaki-climbing-shoes_5000x.jpg?v=1533733114,https://rockrun.com/cdn/shop/products/la-sportiva-otaki-climbing-shoes-detail-3_5000x.jpg?v=1533733114,https://rockrun.com/cdn/shop/products/la-sportiva-otaki-climbing-shoes-detail-4_600x.jpg?v=1533733115,https://rockrun.com/cdn/shop/products/la-sportiva-otaki-climbing-shoes-detail-2_600x.jpg?v=1533733115",
          category: "climbing shoes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "La Sportiva Solution Comp",
          description:
            "The La Sportiva Solution Comp is a modified version of the classic Solution. Taking the universally revered base design of the original model, La Sportiva have softened up the midsole and reduced both the width and volume of the heel. A super adaptable shoe for all modern bouldering styles",
          price: 170,
          vendor: "La Sportiva",
          sizes: "36,36.5,38,39.5,40,41,42.5",
          vendorInfo: "https://www.lasportiva.com",
          photo:
            "https://rockrun.com/cdn/shop/products/solution-comp_5000x.jpg?v=1582205357,https://rockrun.com/cdn/shop/products/solution-comp-2_5000x.jpg?v=1582205357,https://rockrun.com/cdn/shop/products/la-sportiva-solution-comp_5000x.jpg?v=1582206423,https://rockrun.com/cdn/shop/products/20z_999100_solutioncomp_blackyellow_6_5000x.jpg?v=1582206441,https://rockrun.com/cdn/shop/products/solution-comp-1_600x.jpg?v=1582205357",
          category: "climbing shoes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Keen Men's Targhee III Mid Waterproof Boots",
          description:
            "Embark on daring expeditions and conquer rugged terrains with the Keen Targhee III Mid WP Boots. These boots are the ultimate adventure companion, designed to withstand the toughest conditions while providing unmatched comfort and protection. With their mid-cut design, they offer excellent ankle support, allowing you to tackle steep slopes and challenging trails with confidence.",
          price: 145,
          vendor: "Keen",
          sizes: "36,38,40,41,42,43",
          vendorInfo: "https://www.keenfootwear.com/",
          photo:
            "https://cdn11.bigcommerce.com/s-ogga2as7h/images/stencil/1280x1280/products/205/839/111950-01_XL1__71720.1692194655.jpg?c=1,https://cdn11.bigcommerce.com/s-ogga2as7h/images/stencil/1280x1280/products/205/847/111950-02_XL1__08767.1692194656.jpg?c=1,https://cdn11.bigcommerce.com/s-ogga2as7h/images/stencil/1280x1280/products/205/859/111950-04_XL1__93841.1692194658.JPG?c=1,https://cdn11.bigcommerce.com/s-ogga2as7h/images/stencil/1280x1280/products/205/839/111950-01_XL1__71720.1692194655.jpg?c=1",
          category: "boots",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Keen NXIS Explorer Mid Waterproof Boots",
          description:
            "Featuring a smart nubuck leather upper, carefully selected from the best tanneries in the world, the NXIS Explorer Mid is a dependable boot for daily use. Partne this with the Keen.Dry waterproof membrane and a PFAS-Free water repellent and you have a boot that's ready for anything.",
          price: 160,
          vendor: "Keen",
          sizes: "36,38,40,41,42,43",
          vendorInfo: "https://www.keenfootwear.com/",
          photo:
            "https://cdn11.bigcommerce.com/s-ogga2as7h/images/stencil/1280x1280/products/7437/19668/111964-01_XL1__43801.1725353353.jpg?c=1,https://cdn11.bigcommerce.com/s-ogga2as7h/images/stencil/1280x1280/products/7437/22987/Keen_Nxis_Explorer_Mid_WP_Boot_Dark_Olive_Black__65993.1725353354.jpg?c=1,https://cdn11.bigcommerce.com/s-ogga2as7h/images/stencil/1280x1280/products/7437/19672/111964-01_XL2__93226.1725353353.jpg?c=1",
          category: "boots",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Hanwag Men's Tatra II GTX Boot",
          description:
            "Based on Hanwags most popular Tatra boot, the updated Hanwag Tatra II GTX offers all the protection, support and comfort in a rugged and well made boot perfect for long hikes and backpacking trekking on varied and challenging terrains.",
          price: 275,
          vendor: "Hanwag",
          sizes: "36,38,40,41,42,43",
          vendorInfo: "https://www.hanwag.com/us/en-us",
          photo:
            "https://cdn11.bigcommerce.com/s-ogga2as7h/images/stencil/1280x1280/attribute_rule_images/8965_source_1695132540.jpg,https://cdn11.bigcommerce.com/s-ogga2as7h/images/stencil/1280x1280/products/160/588/111805-02_XL1__93146.1696521087.JPG?c=1,https://cdn11.bigcommerce.com/s-ogga2as7h/images/stencil/1280x1280/products/160/585/111805-01_XL2__88213.1696521087.jpg?c=1",
          category: "boots",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Hanwag Men's Banks GTX Hiking Boots",
          description:
            "With the Banks GTX boots, you can confidently tackle any trail or terrain. The boots feature a rugged and abrasion-resistant upper, made from premium materials to withstand the challenges of the outdoors. The Gore-Tex lining ensures excellent waterproof protection, keeping your feet dry even in wet conditions. Say goodbye to uncomfortable, soggy feet and focus on enjoying your hiking adventures to the fullest.",
          price: 235,
          vendor: "Hanwag",
          sizes: "36,38,40,41,42,43",
          vendorInfo: "https://www.hanwag.com/us/en-us",
          photo:
            "https://cdn11.bigcommerce.com/s-ogga2as7h/images/stencil/1280x1280/products/155/560/111800-02_XL1__38599.1692194563.jpg?c=1,https://cdn11.bigcommerce.com/s-ogga2as7h/images/stencil/1280x1280/products/155/564/111800-03_XL1__36922.1696522209.jpg?c=1,https://cdn11.bigcommerce.com/s-ogga2as7h/images/stencil/1280x1280/products/155/561/111800-02_XL2__77693.1696522209.JPG?c=1",
          category: "boots",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Hunter Urban Explorer Boots",
          description:
            "The Hunter Urban Explorer Boot is the perfect wet-weather companion. This boot features an upper mix of water-resistant leather, suede and recycled polyester. Beneath the foot is a shock-absorbent recycled EVA midsole and a FSC-certified natural rubber outsole with an extended foxing line to further prevent splashes. The design is finished with a cushioned Neoprene collar for all-day comfort.",
          price: 180,
          vendor: "Hunter",
          sizes: "36,38,40,41,42,43",
          vendorInfo: "https://hunterboots.co.uk/",
          photo:
            "https://cdn11.bigcommerce.com/s-ogga2as7h/images/stencil/1280x1280/products/7518/20000/111977-01_XL2__53328.1699604117.jpg?c=1,https://cdn11.bigcommerce.com/s-ogga2as7h/images/stencil/640w/products/7518/19999/111977-01_XL1__02936.1699604107.jpg?c=1,https://cdn11.bigcommerce.com/s-ogga2as7h/images/stencil/1280x1280/products/7518/20001/111977-01_XL3__05106.1699604119.jpg?c=1,https://cdn11.bigcommerce.com/s-ogga2as7h/images/stencil/640w/products/7518/20002/111977-01_XL4__94969.1699604120.jpg?c=1",
          category: "boots",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Hanwag Bluecliff ES Walking Boot",
          description:
            "What sets this model apart? Its high-quality upper is made of a combination of nubuck leather and suede leather. To help keep feet dry, the proprietary PFC-free EcoShell membrane is used. This membrane fully waterproof, breathable and sustainable. Another nice feature is the Hike Pro outsole. This has a four-millimetre deep tread and extra-large lugs with a wider contact area and a particularly grippy rubber compound",
          price: 210,
          vendor: "Hanwag",
          sizes: "36,38,40,41,42,43",
          vendorInfo: "https://hunterboots.co.uk/",
          photo:
            "https://cdn11.bigcommerce.com/s-ogga2as7h/images/stencil/1280x1280/products/7086/18743/111854-01_XL1__47034.1698186728.jpg?c=1",
          category: "boots",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "MSR PocketRocket 2 Stove",
          description:
            "The MSR PocketRocket stove has long been a favourite by backpackers, ultralight hiking enthusiasts and alpinists alike and is even smaller and lighter than its predecessor. With a stable burner head, it accommodates a wider range of pot sizes while maintaining its same ease of use (even with gloves on) and fast boiling performance.",
          price: 55,
          vendor: "MSR",
          sizes: "",
          vendorInfo: "https://www.msrgear.com/",
          photo:
            "https://cdn11.bigcommerce.com/s-ogga2as7h/images/stencil/1280x1280/attribute_rule_images/17839_source_1710323317.jpg,https://cdn11.bigcommerce.com/s-ogga2as7h/images/stencil/1280x1280/products/3571/21092/MSR_Pocketrocket_2_Ultralight_Stove_Being_Used__47952.1710323318.jpg?c=1,https://cdn11.bigcommerce.com/s-ogga2as7h/images/stencil/1280x1280/products/3571/21091/MSR_Pocketrocket_2_Ultralight_Stove_In_Hands__72333.1710323318.jpg?c=1",
          category: "cooking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Primus Essential Trail Kit",
          description:
            "The Primus Essential Trail Kit is a perfect trekking kitchen created for solo camping novices or experienced outdoor chefs. Invented in Sweden, and hand crafted in Europe, this kit easily transports everything you need to cook your next backcountry meal.",
          price: 65,
          vendor: "Primus",
          sizes: "",
          vendorInfo: "https://primusequipment.com/",
          photo:
            "https://cdn11.bigcommerce.com/s-ogga2as7h/images/stencil/1280x1280/products/7340/21355/Primus_Essential_Trail_Kit__97399.1711110294.jpg?c=1,https://cdn11.bigcommerce.com/s-ogga2as7h/images/stencil/1280x1280/products/7340/21357/Primus_Essential_Trail_Kit_Stove__19040.1711110295.jpg?c=1,https://cdn11.bigcommerce.com/s-ogga2as7h/images/stencil/1280x1280/products/7340/21358/Primus_Essential_Trail_Kit_Stove_Top_View__31191.1711110295.jpg?c=1",
          category: "cooking",
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
