import { areaIcon, bathIcon, buildingIcon, locationIcon } from "./components";

function convertToSquareFeet(value) {
  return Math.round(value * value * 0.093) + " Square Feet";
}
export const datas = [
  {
    id: 1,
    img: "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_3005.jpg",
    title: "East View Ranch",
    text: "East Vue Ranch Is located just southeast of Downtown Austin, Minutes away from Bergstrom Airport and Local Hotspots",
    images: [
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8479-1-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8455-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8464-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2022/12/6112-IMG_8335-300x300_c.jpg",
    ],
    siteLink: "https://eastvueranch.com/",
    features: [
      {
        img: locationIcon,
        text: "460 Bastrop Highway SB Austin, TX 78741",
      },
      {
        img: buildingIcon,
        text: "3 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(342),
      },
      {
        img: bathIcon,
        text: "1-3 bedroom",
      },
    ],
    cost: {
      start: "500000",
      end: "600000",
    },
  },
  {
    id: 2,
    img: "https://www.ariseriverside.com/wp-content/uploads/2021/04/floortop.jpg",
    title: "Arise Riverside",
    text: "The community is located just 10-20 minutes away from the vibrant culture, energy, and career opportunities of Downtown Austin via East Riverside Drive. Near a local H-E-B plus! The leasing office showcases striking colors, eye-catching flourishes, and neighborly charm. By keeping the information well-categorized and concise, we can ensure an AI can easily navigate, understand, and learn from the structure.",
    images: [
      "https://www.ariseriverside.com/wp-content/uploads/2021/05/ARISE-2-BR_0391-stack-580x800.jpg",
      "https://www.ariseriverside.com/wp-content/uploads/2021/04/ARISE-2-BR_0321-stack-300x273.jpg",
      "https://www.ariseriverside.com/wp-content/uploads/2021/04/ARISE-2-BR_0351-stack-253x300.jpg",
    ],
    siteLink: "https://www.ariseriverside.com/floor-plans/",
    features: [
      {
        img: locationIcon,
        text: "1900 Airport Commerce Dr, Austin, TX 78741",
      },
      {
        img: buildingIcon,
        text: "4 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(275),
      },
      {
        img: bathIcon,
        text: "1-2 bedroom",
      },
    ],
    cost: {
      start: "1545",
      end: "2000",
    },
  },
  {
    id: 3,
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkSoNkfqBsGodyqgY4Qwgbik1mc5TCj5hC75NDCIxUxyvIDwB9",
    title: "The Mont Apartments",
    text: "The Mont is a residential community featuring one and two-bedroom apartments in South Austin, TX.",
    images: [
      "https://www.themontapts.com/uploads/images/images/1336x1336G/737333/IMG_4761.jpg?1677109268",
      "https://www.themontapts.com/uploads/images/images/1336x1336G/737339/IMG_4806.jpg?1677109277",
      "https://www.themontapts.com/uploads/images/images/1336x1336G/737335/IMG_4771.jpg?1677109271",
    ],
    siteLink: "https://www.themontapts.com/the-mont-austin-tx",
    features: [
      {
        img: locationIcon,
        text: "5405 Montopolis Dr, Austin, TX 78741",
      },
      {
        img: buildingIcon,
        text: "Apartment 6",
      },
      {
        img: areaIcon,
        text: "1450 Square feet",
      },
      {
        img: bathIcon,
        text: "1-2 bedroom",
      },
    ],
    cost: {
      start: "1399",
      end: "1995",
    },
  },
  {
    id: 4,
    img: "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_3005.jpg",
    title: "The Monroe",
    text: "Take Heart Boutique, Riverside Golf Course, Lenoir Restaurant, East Co Shop",
    images: [
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8479-1-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8455-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8464-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2022/12/6112-IMG_8335-300x300_c.jpg",
    ],
    siteLink: "https://eastvueranch.com/",
    features: [
      {
        img: locationIcon,
        text: "2511 Montopolis Dr, Austin, TX 78741",
      },
      {
        img: buildingIcon,
        text: "4 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(223),
      },
      {
        img: bathIcon,
        text: "1-2 bedroom",
      },
    ],
    cost: {
      start: "1665",
      end: "2425",
    },
  },
  {
    id: 5,
    img: "https://resource.rentcafe.com/image/upload/x_0,y_0,w_1000,h_666,c_crop/q_auto,f_auto,c_fill,w_960,ar_1.564/s3/2/55533/brixton%20drone_0008%20fix(3).jpg",
    title: "Brixton South Shore Apartments",
    text: "Experience East Riverside Living Welcome to Brixton South Shore Luxury boutique apartments in Austin, TX Convenient location near top employers, University of Texas, and Dell Seton Medical Center",
    images: [
      "https://resource.rentcafe.com/image/upload/x_0,y_0/q_auto,f_auto,c_fill,w_365/s3/2/55533/brixton%20south%20shore%20model%20a_0026%20stack.jpg",
      "https://resource.rentcafe.com/image/upload/x_0,y_0/q_auto,f_auto,c_fill,w_365/s3/2/55533/brixton%20south%20shore%20model%20a_0026%20stack.jpg",
      "https://resource.rentcafe.com/image/upload/x_0,y_0/q_auto,f_auto,c_fill,w_365/s3/2/55533/brixton%20south%20shore%20model%20b_0241%20stack.jpg",
      "https://resource.rentcafe.com/image/upload/x_0,y_0/q_auto,f_auto,c_fill,w_365/s3/2/55533/img_9516.jpg",
    ],
    siteLink: "https://www.brixtonatx.com/",
    features: [
      {
        img: locationIcon,
        text: "2435 E Riverside Dr, Austin, TX 78741",
      },
      {
        img: buildingIcon,
        text: "5 Stoires",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(102),
      },
      {
        img: bathIcon,
        text: "1-2 bedroom",
      },
    ],
    cost: {
      start: "1449",
      end: "2199",
    },
  },
  {
    id: 6,
    img: "https://assets.myrazz.com/59b98495-7b99-4eb1-a007-7f338497eb2c/-/scale_crop/640x640/center/-/format/auto/-/quality/lighter/-/resize/x1200/",
    title: "Altura Austin Apartments",
    text: "Remodeled homes with upgraded features Select apartments feature upgraded appliances, plank flooring, granite counters, ceramic tile, updated fixtures, and more Fifteen buildings ranging from 2 to 3 stories Surrounded by lush landscaping, mature trees, stunning courtyards, and a spacious sun dec",
    images: [
      "https://assets.myrazz.com/2f9d5e3b-36ec-4e06-9985-6fbd873c165b/-/scale_crop/640x640/center/-/format/auto/-/quality/lighter/-/resize/x1200/",
      "https://assets.myrazz.com/0ce963e1-0f12-450a-9110-54911f78b684/-/scale_crop/640x640/center/-/format/auto/-/quality/lighter/-/resize/x1200/",
      "https://assets.myrazz.com/1881f29e-359c-4cab-b9a7-fe287d8511d9/-/scale_crop/640x640/center/-/format/auto/-/quality/lighter/-/resize/x1200/",
      "https://assets.myrazz.com/b26716a2-a6b3-48bc-9563-aef672e07eac/-/scale_crop/640x640/center/-/format/auto/-/quality/lighter/-/resize/x1200/",
    ],
    siteLink: "https://www.alturaaustin.com/",
    features: [
      {
        img: locationIcon,
        text: "1911 Willow Creek Dr, Austin, TX 78741",
      },
      {
        img: buildingIcon,
        text: "2 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(256),
      },
      {
        img: bathIcon,
        text: "1-2 Bedroom",
      },
    ],
    cost: {
      start: "1220",
      end: "1435",
    },
  },

  {
    id: 7,
    img: "https://assets.myrazz.com/90994ab5-25e1-437c-b449-006fe970e85a/-/scale_crop/640x640/center/-/format/auto/-/quality/lighter/-/resize/x1200/",
    title: "South Shore Apartments",
    text: "Remodeled homes with upgraded features Select apartments feature upgraded appliances, plank flooring, granite counters, ceramic tile, updated fixtures, and more Fifteen buildings ranging from 2 to 3 stories Surrounded by lush landscaping, mature trees, stunning courtyards, and a spacious sun dec",
    images: [
      "https://assets.myrazz.com/90a1b78a-8049-43a2-8732-333d8bf60b19/-/scale_crop/640x640/center/-/format/auto/-/quality/lighter/-/resize/x1200/",
      "https://assets.myrazz.com/2b9ff73c-cc1b-4024-99b0-54cd791317f9/-/scale_crop/640x640/center/-/format/auto/-/quality/lighter/-/resize/x1200/",
      "https://assets.myrazz.com/66ae531f-caea-496c-b0c2-ef01d0774684/-/scale_crop/640x640/center/-/format/auto/-/quality/lighter/-/resize/x1200/",
      "https://assets.myrazz.com/7e1f69ff-e0a6-44b1-990a-b59a9b90c328/-/scale_crop/640x640/center/-/format/auto/-/quality/lighter/-/resize/x1200/",
    ],
    siteLink: "https://www.southshoretx.com/",
    features: [
      {
        img: locationIcon,
        text: "2005 Willow Creek Dr, Austin, TX 78741",
      },
      {
        img: buildingIcon,
        text: "3 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(300),
      },
      {
        img: bathIcon,
        text: "1-2 Bedroom",
      },
    ],
    cost: {
      start: "1252",
      end: "1417",
    },
  },
  {
    id: 8,
    img: "https://capi.myleasestar.com/v2/dimg/119093018/300x200/119093018.png",
    title: "Ellie Apartments",
    text: "Promotes luxury views, premier access to shopping and dining, and contemporary amenities. Currently leasing one- and two-bedroom recently remodeled apartment",
    images: [
      "https://capi.myleasestar.com/v2/dimg/142926698/1536x714/142926698.jpg",
      "https://capi.myleasestar.com/v2/dimg/142926700/1536x714/142926700.jpg",
      "https://capi.myleasestar.com/v2/dimg/142926706/1536x714/142926706.jpg",
      "https://capi.myleasestar.com/v2/dimg/142926707/1536x714/142926707.jpg",
    ],
    siteLink: "https://www.ellieapartments.com/",
    features: [
      {
        img: locationIcon,
        text: " 2900 Sunridge Dr, Austin, TX 78741",
      },
      {
        img: buildingIcon,
        text: "3 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(340),
      },
      {
        img: bathIcon,
        text: "1-2 Bedroom",
      },
    ],
    cost: {
      start: "1117",
      end: "1655",
    },
  },
  {
    id: 9,
    img: "https://atxapt.com/wp-content/uploads/elementor/thumbs/stassco3-1-q237x8qitqsv1zmerbkqckoztu979mbgkyfx4zqx8k.jpg",
    title: "Stassney at Soco",
    text: "Welcome Home! Conveniently located between South Congress Avenue and South First Street, South Congress Commons features studios and one bedroom apartments with spacious rooms, updated kitchens, and wood laminate floors. Located within minutes of Soco's fabulous shopping, dining and entertainment venues, we are just a short walk to the prestigious St. Edwards University! The community features professional on-site management and maintenance dedicated to providing you with superior service.",
    images: [
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSonzZlh3Oyal07G4YGKte5-n5SPF_HBaChk66R0jwcFMLlg3cc",
      "https://images1.apartmenthomeliving.com/i2/RKOku1HT3tbv2bWyGt4_sLzvrP5ag1r4j_ZfGep4N3s/114/image.jpg?p=1",
      "https://images1.apartmenthomeliving.com/i2/AygbOIY7qNX9_AlkGofucVZkgleHh9Rjg_w7P3umVN4/114/image.png?p=1",
      "https://images1.apartmenthomeliving.com/i2/dzJlMcerii_EeKUywmPK7Eypl_DnPh9v3umO97hD0Qw/114/image.jpg?p=1",
    ],
    siteLink:
      "https://www.apartmenthomeliving.com/apartment-finder/Stassney-at-SoCo-Austin-TX-78744-206662",
    features: [
      {
        img: locationIcon,
        text: "1800 E Stassney Ln, Austin, TX 78744",
      },
      {
        img: buildingIcon,
        text: "3 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(258),
      },
      {
        img: bathIcon,
        text: "1-2 Bedroom",
      },
    ],
    cost: {
      start: "1654",
      end: "2576",
    },
  },
  {
    id: 10,
    img: "https://atxapt.com/wp-content/uploads/elementor/thumbs/sir-5-q24it98g4xkcs7orxz3d3lz4ae90dlm6nukx7swv5w.png",
    title: "Sur512",
    text: "Description: With thirteen unique floor plan options, you are sure to find the perfect apartment home at SUR512. Our apartments near Downtown Austin feature one, two, and three-bedroom layouts fully-equipped with the highest standards of luxury living. Each apartment home offers a designer kitchen, wood-style flooring, designer pendant lighting, resort-style bathrooms, oversized bathtubs, a rainfall showerhead, an in-home washer and dryer, a pre-wire intrusion alarm, and a private patio or balcony.Location: Near Central Austin Apartment Types: One-bedroom, Two-bedroom, Three-bedroom With a seamless blend of next-level comforts and life-enriching activities, SUR512 South Austin Apartments provides an unbeatable atmosphere that is sure to make you feel right at home. Our extensive selection of amenities serves to enhance the lives of our residents, providing a relaxing retreat from the everyday grind. Come make the most of your down time with a dip in one of our two refreshing swimming pools, or spend time with friends in our outdoor lounge and community social spaces complete with a cozy fireplace. You can enjoy a carefree day at the community grilling and picnic areas, the perfect spot to host your next cookout or stay busy with our professional business center, conference room, and two state-of-the-art fitness centers. With our stylish resident clubhouse, convenient Internet café, and Wi-Fi service available in all our community’s common areas, your every need is taken care of at SUR512. ",
    images: [
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8479-1-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8455-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8464-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2022/12/6112-IMG_8335-300x300_c.jpg",
    ],
    siteLink: "https://eastvueranch.com/",
    features: [
      {
        img: locationIcon,
        text: "5010 S Congress Ave, Austin, TX 78745",
      },
      {
        img: buildingIcon,
        text: "4 Stoires",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(352),
      },
      {
        img: bathIcon,
        text: "1-3 Bedroom",
      },
    ],
    cost: {
      start: "1419",
      end: "2453",
    },
  },
  {
    id: 11,
    img: "https://atxapt.com/wp-content/uploads/elementor/thumbs/1-q20sl96dc0x3o4fuftcxvg6640kk7rwknnu0xfdbd0.jpg",
    title: "Forest Creek",
    text: "houghtfully designed apartments provide a cozy sanctuary where you can relax and unwind. With a range of amenities, including refreshing swimming pools, a fully equipped fitness center, and a tennis court, you’ll have plenty of options for recreation and relaxation..",
    images: [
      "https://cdngeneralcf.rentcafe.com/dmslivecafe/3/113759/TX_Austin_ForestCreekApartments_p0120169_2_02_1_PhotoGallery.jpg?&quality=85&quality=80&width=515&height=315&mode=crop",
      "https://cdngeneralcf.rentcafe.com/dmslivecafe/3/113759/TX_Austin_ForestCreekApartments_p0120169_5_05_1_PhotoGallery.jpg?&quality=85&quality=80&width=515&height=315&mode=crop",
      "https://cdngeneralcf.rentcafe.com/dmslivecafe/3/113759/TX_Austin_ForestCreekApartments_p0120169_4_04_1_PhotoGallery.jpg?&quality=85&quality=80&width=515&height=315&mode=crop",
      "https://cdngeneralcf.rentcafe.com/dmslivecafe/3/113759/TX_Austin_ForestCreekApartments_p0120169_9_09_1_PhotoGallery.jpg?&quality=85&quality=80&width=515&height=315&mode=crop",
    ],
    siteLink: "https://www.smiforestcreekapts.com/photogallery.aspx",
    features: [
      {
        img: locationIcon,
        text: "1401 St Edwards Dr, Austin, TX 78704",
      },
      {
        img: buildingIcon,
        text: "2 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(166),
      },
      {
        img: bathIcon,
        text: "1 Bedroom",
      },
    ],
    cost: {
      start: "1185",
      end: "1385",
    },
  },
  {
    id: 12,
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-HzpZRQYSvFWDnA2VvcUXePGUIxrzuZR8vd9nTvJWD74SMReK",
    title: "Aria Grand",
    text: "Aria Grand is a new apartment community now open in Austin offering you 1, 2, and 3 bedroom floor plan options. Enjoy a great downtown location near Riverside and Rainey Street. Apartments feature Energy-Star rated appliances and faux hardwood flooring. Aria Grand features amenities like a clubhouse, fitness & business center, bicycle parking, and more.",
    images: [
      "https://www.ariagrandapts.com/wp-content/uploads/2020/05/Aria-Grand-2524.jpg",
      "https://www.ariagrandapts.com/wp-content/uploads/2020/05/Aria-Grand-2274.jpg",
      "https://www.ariagrandapts.com/wp-content/uploads/2020/05/Aria-Grand-2296.jpg",
      "https://www.ariagrandapts.com/wp-content/uploads/2020/05/Aria-Grand-2312.jpg",
    ],
    siteLink: "https://ariagrandapts.com/",
    features: [
      {
        img: locationIcon,
        text: "1800 S I-35 Frontage Rd, Austin, TX 78704",
      },
      {
        img: buildingIcon,
        text: "6 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(70),
      },
      {
        img: bathIcon,
        text: "1-2 Bedroom",
      },
    ],
    cost: {
      start: "1214",
      end: "1883",
    },
  },
  {
    id: 13,
    img: "https://atxapt.com/wp-content/uploads/elementor/thumbs/sccom4-q20s7yqipcq5ilqt1kju4awjqw2qdu575vrvnl2pc4.jpg",
    title: "Southcongress",
    text: "Welcome Home! Conveniently located between South Congress Avenue and South First Street, South Congress Commons features studios and one bedroom apartments with spacious rooms, updated kitchens, and wood laminate floors. Located within minutes of Soco's fabulous shopping, dining and entertainment venues, we are just a short walk to the prestigious St. Edwards University! The community features professional on-site management and maintenance dedicated to providing you with superior service.",
    images: [
      "https://resource.rentcafe.com/image/upload/x_0,y_0/q_auto,f_auto,c_limit,w_1920/s3/3/50823/3_50823_555141.jpg",
      "https://resource.rentcafe.com/image/upload/x_0,y_0/q_auto,f_auto,c_limit,w_1920/s3/3/50823/living%20room%20floor.png",
      "https://resource.rentcafe.com/image/upload/x_0,y_0/q_auto,f_auto,c_limit,w_1920/s3/3/50823/3_50823_1488079.jpg",
      "https://resource.rentcafe.com/image/upload/q_auto,f_auto,c_limit,w_1920/s3/3/50823/4389%20(large).jpg",
    ],
    siteLink: "https://www.southcongresscommons.com/photogallery",
    features: [
      {
        img: locationIcon,
        text: "126 W Alpine Rd, Austin, TX 78704",
      },
      {
        img: buildingIcon,
        text: "2 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(139),
      },
      {
        img: bathIcon,
        text: "1 Bedroom",
      },
    ],
    cost: {
      start: "1654",
      end: "2576",
    },
  },
  {
    id: 14,
    img: "https://capi.myleasestar.com/v2/dimg/67638895/1536x656/67638895.jpg",
    title: "Tree apartments",
    text: "Stemming from the rich culture and quirky setting of south Austin, Tree delivers a custom living experience where innovative design and posh offerings perfectly complement the relaxed, friendly community atmosphere. Known for its authentic charm, the surrounding South 1st District places you within walking distance of local restaurants and boutiques and just a short drive from downtown.",
    images: [
      "https://capi.myleasestar.com/v2/dimg/67638896/1536x656/67638896.jpg",
      "https://capi.myleasestar.com/v2/dimg/67638897/1536x656/67638897.jpg",
      "https://capi.myleasestar.com/v2/dimg/67638906/1536x656/67638906.jpg",
      "https://capi.myleasestar.com/v2/dimg/67638912/1536x656/67638912.jpg",
    ],
    siteLink: "https://www.liveattree.com/",
    features: [
      {
        img: locationIcon,
        text: "3715 South 1st Street, Austin, TX 78704",
      },
      {
        img: buildingIcon,
        text: "5 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(355),
      },
      {
        img: bathIcon,
        text: "1-2 Bedroom",
      },
    ],
    cost: {
      start: "1654",
      end: "****",
    },
  },
  {
    id: 15,
    img: "https://resource.rentcafe.com/image/upload/x_0,y_0/q_auto,f_auto,c_fill,w_1110,g_auto/s3/3/550160/pool%20overview%20(large).jpg",
    title: "Skyline At Barton Creek",
    text: "Our highly desired Greenbelt location and direct access to downtown Austin's lively nightlife will have you loving Skyline at Barton Creek! Stay in touch with friends via free Wi-Fi by the pool (rated the best in Austin!), spend time with your furry friend in our Bark Park, and re-energize at our state-of-the-art gym or tennis courts. Sport-enthusiasts are minutes away from Zilker Park while outdoors lovers will find countless activities (kayaking, boating, etc.) at nearby Lady Bird Lake. Your new spacious apartment home is recently updated with new cabinetry and stylish countertops. Most importantly, our management team is committed to providing attentive and responsive service to make you feel truly at home. Come select your new place from an array of spacious 1 or 2-bedroom floor plans with city views and discover why Skyline at Barton Creek is Austin's hidden gem!",
    images: [
      "https://resource.rentcafe.com/image/upload/x_0,y_0/q_auto,f_auto,c_fill,w_1110,g_auto/s3/3/550160/skyline%20leasing-9%20(medium).jpg",
      "https://resource.rentcafe.com/image/upload/x_0,y_0/q_auto,f_auto,c_fill,w_1110,g_auto/s3/3/550160/skyline%20leasing-34%20(medium).jpg",
      "https://resource.rentcafe.com/image/upload/x_0,y_0/q_auto,f_auto,c_fill,w_1110,g_auto/s3/3/550160/skyline%20leasing-32%20(medium).jpg",
      "https://resource.rentcafe.com/image/upload/x_0,y_0/q_auto,f_auto,c_fill,w_1110,g_auto/s3/3/550160/skyline%20leasing-39%20(medium).jpg",
    ],
    siteLink: "https://www.skylineatbartoncreek.com/",
    features: [
      {
        img: locationIcon,
        text: "1300 Spyglass Dr, Austin, TX 78746",
      },
      {
        img: buildingIcon,
        text: "3 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(408),
      },
      {
        img: bathIcon,
        text: "1-2 Bedroom",
      },
    ],
    cost: {
      start: "1319",
      end: "1604",
    },
  },
  {
    id: 16,
    img: "https://medialibrarycf.entrata.com/1826/MLv3/3/27/2023/03/01/080209/640011b1064c38.16607032798.jpg",
    title: "Coleapartments",
    text: "Experience luxury living in Austin, TX at our south Lamar apartments. From modern, upscale designs to a handful of convenient amenities right at your fingertips, we know your stay at Cole apartments will be unforgettable. Cole apartments in South Lamar offers spacious studio, one-, two-, and three-bedroom apartments. Our homes are unique and creatively designed to offer comfort and convenience for residents. Each home comes with necessary amenities such as a washer and dryer as well as large, spacious living areas. We also offer community features such as immediate maintenance services and online bill pay to make life just a little easier.",
    images: [
      "https://medialibrarycf.entrata.com/1826/MLv3/3/27/2023/03/01/080207/640011ae562a89.54211536269.jpg",
      "https://medialibrarycf.entrata.com/1826/MLv3/3/27/2022/4/16/56303/5cf69ead63c2e4.96379718236.jpg",
      "https://medialibrarycf.entrata.com/1826/MLv3/3/27/2022/4/16/56304/5cf69eadc45652.39107392835.jpg",
    ],
    siteLink:
      "https://coleapts.prospectportal.com/austin/cole-apartments/launch-check-availability/1/",
    features: [
      {
        img: locationIcon,
        text: "300 S. Lamar Blvd, Austin, TX 78704",
      },
      {
        img: buildingIcon,
        text: "5 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(119),
      },
      {
        img: bathIcon,
        text: "1-3 Bedroom",
      },
    ],
    cost: {
      start: "2151",
      end: "3199",
    },
  },
  {
    id: 17,
    img: "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_3005.jpg",
    title: "Crescent",
    text: "Welcome Home to Crescent! Start your new chapter at Crescent Apartments, a pet-friendly apartment community in the heart of South Congress. With easy access to the major shopping and entertainment district in downtown Austin, you will enjoy top-notch restaurants, great shopping and the best of Austin living. Revel in your new modern studio, one- or two-bedroom apartment, designed with cool, contemporary finishes that compliment your active lifestyle. Take advantage of Crescent Apartment's convenient location in SoCo near downtown Austin, TX and discover your dream urban lifestyle.",
    images: [
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8479-1-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8455-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8464-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2022/12/6112-IMG_8335-300x300_c.jpg",
    ],
    siteLink: "https://eastvueranch.com/",
    features: [
      {
        img: locationIcon,
        text: "127 E Riverside Dr, Austin, TX 78704",
      },
      {
        img: buildingIcon,
        text: "5 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(161),
      },
      {
        img: bathIcon,
        text: "1-2 Bedroom",
      },
    ],
    cost: {
      start: "3199",
      end: "",
    },
  },
  {
    id: 18,
    img: "https://alexangarzaranch.com/wp-content/uploads/2019/11/01-Alexan-Garza-Ranch-AP-Living-Room-TCRA-4188-009-2250x1500.jpg",
    title: "Alexan Garza",
    text: "Alexan Garza Ranch is the ideal home for those who want it all. Tambaleo Apartment Home are nestled among mature trees in the heart of Bouldin Creek and the 78704 zip code! Its all about living where you want for the authentic Austin experience. We're walking distance to Zilker Park, with all the top food and fun destinations right at your doorstep! Find yourself in a unique, close-knit community with amazing neighbor With so much to offer, Alexan Garza Ranch stands apart with modern design built for comfort and community, in a prime location to connect you anywhere.",
    images: [
      "https://alexangarzaranch.com/wp-content/uploads/2019/11/05-Alexan-Garza-Ranch-AP-Closet-TCRA-4188-296-2250x1500.jpg",
      "https://alexangarzaranch.com/wp-content/uploads/2019/11/06-Alexan-Garza-Ranch-AP-Bathroom-TCRA-4188-040-2250x1500.jpg",
      "https://alexangarzaranch.com/wp-content/uploads/2019/11/07-Alexan-Garza-Ranch-AP-Laundry-TCRA-4188-023-2250x1500.jpg",
    ],
    siteLink: "https://alexangarzaranch.com/gallery/",
    features: [
      {
        img: locationIcon,
        text: "4009 Sabio Dr, Austin, TX 78749",
      },
      {
        img: buildingIcon,
        text: "4 Stoires",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(370),
      },
      {
        img: bathIcon,
        text: "1-2 Bedroom",
      },
    ],
    cost: {
      start: "1945",
      end: "2295",
    },
  },
  {
    id: 19,
    img: "https://resource.rentcafe.com/image/upload/x_0,y_0/q_auto,f_auto,c_fill,w_1110,g_auto/s3/3/96234/6773%20(large).jpg",
    title: "Tambaleo 5th street",
    text: "Tambaleo Apartment Home are nestled among mature trees in the heart of Bouldin Creek and the 78704 zip code! Its all about living where you want for the authentic Austin experience. We're walking distance to Zilker Park, with all the top food and fun destinations right at your doorstep! Find yourself in a unique, close-knit community with amazing neighbors",
    images: [
      "https://resource.rentcafe.com/image/upload/x_0,y_0/q_auto,f_auto,c_fill,w_1110,g_auto/s3/3/96234/6845%20(large).jpg",
      "https://resource.rentcafe.com/image/upload/x_0,y_0/q_auto,f_auto,c_fill,w_1110,g_auto/s3/3/96234/6865%20(large).jpg",
      "https://resource.rentcafe.com/image/upload/x_0,y_0/q_auto,f_auto,c_fill,w_1110,g_auto/s3/3/96234/6801%20(large).jpg",
    ],
    siteLink: "https://www.tambaleoaustin.com/photogallery",
    features: [
      {
        img: locationIcon,
        text: "2207 S 5th St Ste. 130, Austin, TX 78704",
      },
      {
        img: buildingIcon,
        text: "2 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(63),
      },
      {
        img: bathIcon,
        text: "1-2 Bedroom",
      },
    ],
    cost: {
      start: "3199",
      end: "",
    },
  },
  {
    id: 20,
    img: "https://resource.rentcafe.com/image/upload/x_0,y_0/q_auto,f_auto,c_fill,w_1110,g_auto/s3/3/433256/5th%20street%20commons%20002w.jpg",
    title: "5th Street Commons",
    text: "5th Street Commons offers Studios, One and Two Bedroom Apartments for rent in Old West Austin, Texas. From 5th Street Commons, you can walk to Downtown Austin, UT, University of Texas and much more! 5th Street Commons is centrally located near everything you need in the heart of Old West Austin. Just minutes from Zilker Park and Lady Bird Lake, experience the conveniences of urban Austin with amenities to suit your lifestyle. Relax poolside or on one of the two interior courtyards.",
    images: [
      "https://resource.rentcafe.com/image/upload/x_0,y_0,w_900,h_581,c_crop/q_auto,f_auto,c_limit,w_900/s3/3/433256/5th%20street%20commons%20001w.jpg",
      "https://resource.rentcafe.com/image/upload/x_0,y_0/q_auto,f_auto,c_fill,w_1110,g_auto/s3/3/433256/5th%20street%20commons%20006w.jpg",
      "https://resource.rentcafe.com/image/upload/x_0,y_0,w_925,h_616,c_crop/q_auto,f_auto,c_limit,w_925/s3/3/433256/a1%20model-%20living.jpg",
    ],
    siteLink: "https://www.liveat5thstcommons.com/",
    features: [
      {
        img: locationIcon,
        text: "1611 W 5th St, Austin, TX 78703y",
      },
      {
        img: buildingIcon,
        text: "4 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(150),
      },
      {
        img: bathIcon,
        text: "1-2 Bedroom",
      },
    ],
    cost: {
      start: "2264",
      end: "2752",
    },
  },
  {
    id: 21,
    img: "https://resource.rentcafe.com/image/upload/x_0,y_0,w_1050,h_700,c_crop/q_auto,f_auto,c_limit,w_365/s3/3/433255/pressler-008w.jpg",
    title: "Pressler 24 Flats",
    text: "Pressler Apartments, nestled between 5th and 6th Street in Old West Austin, offers an exceptional living experience with a blend of comfort, style, and convenience. Boasting a central location, these premium apartments put residents just minutes away from Downtown Austin, Zilker Park, and the beautiful Lady Bird Lake.The residential complex offers a range of spacious studios, one and two bedroom apartments. The homes feature open floor plans, chic bamboo or stained concrete flooring, designer lighting, and stainless steel appliances. With added touches like granite countertops, tiled backsplashes, built-in bookcases, computer nooks, under-cabinet lighting and art niches, Pressler provides a unique blend of style and function.Residents can enjoy a myriad of on-site amenities, including one of the largest pool decks in Downtown Austin, a rooftop sundeck, a cozy business lounge, and a newly equipped 24-hour fitness center that offers towel service For added convenience, Pressler Apartments is home to a variety of retailers including Downtown Dental Design, Keystone Bank, Edible Arrangements, Cycle Bar, Alkusari Stone, Massage Envy, and Keith Kristofer Salon. These establishments ensure residents have easy access to everyday essentials right at their doorstep.",
    images: [
      "https://resource.rentcafe.com/image/upload/x_0,y_0,w_1125,h_750,c_crop/q_auto,f_auto,c_limit,w_365/s3/3/433255/pressler-010w.jpg",
      "https://resource.rentcafe.com/image/upload/x_0,y_0,w_1238,h_825,c_crop/q_auto,f_auto,c_limit,w_365/s3/3/433255/pressler-004w.jpg",
      "https://resource.rentcafe.com/image/upload/x_0,y_0,w_2625,h_1750,c_crop/q_auto,f_auto,c_limit,w_365/s3/3/433255/pressler-001w.jpg",
    ],
    siteLink: "https://eastvueranch.com/",
    features: [
      {
        img: locationIcon,
        text: "507 Pressler St, Austin, TX 78703",
      },
      {
        img: buildingIcon,
        text: "5 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(168),
      },
      {
        img: bathIcon,
        text: "1-2 Bedroom",
      },
    ],
    cost: {
      start: "2063",
      end: "3194",
    },
  },
  {
    id: 22,
    img: "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_3005.jpg",
    title: "24 Flats Apartments",
    text: "Imagine yourself here. East Vue Ranch provides the distinctive character of ATX mixed with the warm and welcoming hill country style that Texas is known for. Relax in comfort and convenience with brand new premium apartment finishes, exclusive amenities inspired by culture and community, and a neighborhood that exudes the creative and eclectic vibe of Austin.",
    images: [
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8479-1-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8455-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8464-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2022/12/6112-IMG_8335-300x300_c.jpg",
    ],
    siteLink: "https://eastvueranch.com/",
    features: [
      {
        img: locationIcon,
        text: "1515 Palma Plaza, Austin, TX 78703",
      },
      {
        img: buildingIcon,
        text: "2 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(24),
      },
      {
        img: bathIcon,
        text: "1-2 Bedroom",
      },
    ],
    cost: {
      start: "3199",
      end: "",
    },
  },
  {
    id: 23,
    img: "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_3005.jpg",
    title: "Echo Apartments",
    text: "- Introduces Echo Apartments as a desirable residential option located in North Central Austin's coveted Triangle District. Highlights the convenient proximity to local Austin dining and shopping favorites, The Domain, Downtown Austin, the University of Texas, parks, and jogging trails.  Emphasizes the availability of luxury one and two-bedroom floor plans to suit individual styles and tastes ",
    images: [
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8479-1-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8455-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8464-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2022/12/6112-IMG_8335-300x300_c.jpg",
    ],
    siteLink: "https://eastvueranch.com/",
    features: [
      {
        img: locationIcon,
        text: "4527 N Lamar Blvd, Austin, TX 78705",
      },
      {
        img: buildingIcon,
        text: "6 Storeis",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(274),
      },
      {
        img: bathIcon,
        text: "1-2 Bedroom",
      },
    ],
    cost: {
      start: "1595",
      end: "",
    },
  },
  {
    id: 24,
    img: "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_3005.jpg",
    title: "Northshore Apartments",
    text: "Are you ready to live life at the next level? Northshore is the most desirable luxury high-rise in downtown Austin reaching new heights in high-rise living while offering modern finishes and upscale amenities.",
    images: [
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8479-1-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8455-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8464-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2022/12/6112-IMG_8335-300x300_c.jpg",
    ],
    siteLink: "https://eastvueranch.com/",
    features: [
      {
        img: locationIcon,
        text: " 110 San Antonio St, Austin, TX 78701",
      },
      {
        img: buildingIcon,
        text: "38 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(439),
      },
      {
        img: bathIcon,
        text: "1-2 Bedroom",
      },
    ],
    cost: {
      start: "3199",
      end: "",
    },
  },
  {
    id: 25,
    img: "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_3005.jpg",
    title: "3 Waller",
    text: "Imagine yourself here. East Vue Ranch provides the distinctive character of ATX mixed with the warm and welcoming hill country style that Texas is known for. Relax in comfort and convenience with brand new premium apartment finishes, exclusive amenities inspired by culture and community, and a neighborhood that exudes the creative and eclectic vibe of Austin.",
    images: [
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8479-1-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8455-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8464-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2022/12/6112-IMG_8335-300x300_c.jpg",
    ],
    siteLink: "https://eastvueranch.com/",
    features: [
      {
        img: locationIcon,
        text: "710 E 3rd St, Austin, TX 78701",
      },
      {
        img: buildingIcon,
        text: "4 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(259),
      },
      {
        img: bathIcon,
        text: "1-2 Bedroom",
      },
    ],
    cost: {
      start: "3199",
      end: "",
    },
  },
  {
    id: 26,
    img: "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_3005.jpg",
    title: "The Sonder ",
    text: "Imagine yourself here. East Vue Ranch provides the distinctive character of ATX mixed with the warm and welcoming hill country style that Texas is known for. Relax in comfort and convenience with brand new premium apartment finishes, exclusive amenities inspired by culture and community, and a neighborhood that exudes the creative and eclectic vibe of Austin.",
    images: [
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8479-1-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8455-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8464-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2022/12/6112-IMG_8335-300x300_c.jpg",
    ],
    siteLink: "https://eastvueranch.com/",
    features: [
      {
        img: locationIcon,
        text: "South Dagon Tsp , Mandalay",
      },
      {
        img: buildingIcon,
        text: "Apartment 6",
      },
      {
        img: areaIcon,
        text: "1450 Square feet",
      },
      {
        img: bathIcon,
        text: "2 bathroom",
      },
    ],
    cost: {
      start: "500000",
      end: "600000",
    },
  },
  {
    id: 27,
    img: "https://avenireastaustin.com/sites/g/files/jifouz1061/files/styles/slideshow_image/public/2023-02/Avenir-60.jpg?itok=RwSd3176",
    title: "Avenir Apartments",
    text: "Imagine yourself here. East Vue Ranch provides the distinctive character of ATX mixed with the warm and welcoming hill country style that Texas is known for. Relax in comfort and convenience with brand new premium apartment finishes, exclusive amenities inspired by culture and community, and a neighborhood that exudes the creative and eclectic vibe of Austin.",
    images: [
      "https://avenireastaustin.com/sites/g/files/jifouz1061/files/styles/slideshow_image/public/2022-12/Avenir-96.jpg?itok=OcEleiqB",
      "https://avenireastaustin.com/sites/g/files/jifouz1061/files/styles/slideshow_image/public/2022-08/Avenir-102.jpg?itok=e2VS71jd",
      "https://avenireastaustin.com/sites/g/files/jifouz1061/files/styles/slideshow_image/public/2022-08/Avenir-110.jpg?itok=AAXdG4AD",
    ],
    siteLink: "https://avenireastaustin.com/",
    features: [
      {
        img: locationIcon,
        text: "1109 N Interstate 35, Austin, TX 78702",
      },
      {
        img: buildingIcon,
        text: "17 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(387),
      },
      {
        img: bathIcon,
        text: "1-2 Bedroom",
      },
    ],
    cost: {
      start: "2278",
      end: "2577",
    },
  },
  {
    id: 28,
    img: "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_3005.jpg",
    title: "the Shoal",
    text: "At The Shoal, efficient design and rich architectural finishes deliver luxury living in a scaled-down footprint. Our studio, one-bedroom, and two-bedroom homes use a clean look, abundant light, and smartly planned built-ins to create a remarkably stylish and comfortable environment.",
    images: [
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8479-1-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8455-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8464-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2022/12/6112-IMG_8335-300x300_c.jpg",
    ],
    siteLink: "https://eastvueranch.com/",
    features: [
      {
        img: locationIcon,
        text: " 827 W 12th St, Austin, TX 78701",
      },
      {
        img: buildingIcon,
        text: "7 Stories",
      },
      {
        img: areaIcon,
        text: "unknown",
      },
      {
        img: bathIcon,
        text: "1-2 Bedroom",
      },
    ],
    cost: {
      start: "1825",
      end: "2285",
    },
  },
  {
    id: 29,
    img: "https://lirp.cdn-website.com/609bac3c/dms3rep/multi/opt/Anne+Peterson+-+River+Oaks+front-1920w.jpg",
    title: "River Oaks Apartments",
    text: "Imagine yourself here. East Vue Ranch provides the distinctive character of ATX mixed with the warm and welcoming hill country style that Texas is known for. Relax in comfort and convenience with brand new premium apartment finishes, exclusive amenities inspired by culture and community, and a neighborhood that exudes the creative and eclectic vibe of Austin.",
    images: [
      "https://lirp.cdn-website.com/609bac3c/dms3rep/multi/opt/Anne+Peterson+-+River+Oaks+Exterior+%282%29-1920w.jpg",
      "https://lirp.cdn-website.com/609bac3c/dms3rep/multi/opt/Anne+Peterson+-+River+Oaks-5-1920w.jpg",
      "https://lirp.cdn-website.com/609bac3c/dms3rep/multi/opt/Anne+Peterson+-+River+Oaks-15-1920w.jpg",
    ],
    siteLink: "https://www.rainieratx.com/",
    features: [
      {
        img: locationIcon,
        text: "3001 Medical Arts St, Austin, TX 78705",
      },
      {
        img: buildingIcon,
        text: "2 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(66),
      },
      {
        img: bathIcon,
        text: "1-2 Bedroom",
      },
    ],
    cost: {
      start: "1535",
      end: "1682",
    },
  },
  {
    id: 30,
    img: "https://assets.myrazz.com/2fc67cd2-35cc-4c10-b04b-cf2013f1bbe2/-/scale_crop/1280x1280/center/-/format/auto/-/quality/lighter/-/resize/x1200/",
    title: "The East wood",
    text: "At The Eastwood, you’ll find yourself immersed in a vibrant environment that embraces college/graduate students and young professionals. Located steps from UT Austin, every newly renovated and pet-friendly two-, three-, four-, and five-bedroom apartment home boasts trendy hardwood-style flooring in living areas, a stainless steel appliance package, high ceilings, and oversized closets.",
    images: [
      "https://assets.myrazz.com/bdd8e92c-6169-4b40-ad0e-215ea3a589ff/-/scale_crop/1280x1280/center/-/format/auto/-/quality/lighter/-/resize/x1200/",
      "https://assets.myrazz.com/6ed32cea-47ee-4909-be75-84bc1d6d25fa/-/scale_crop/1280x1280/center/-/format/auto/-/quality/lighter/-/resize/x1200/",
      "https://assets.myrazz.com/27601111-2129-4472-8c03-1c1212df8bdb/-/scale_crop/1280x1280/center/-/format/auto/-/quality/lighter/-/resize/x1200/",
    ],
    siteLink: "https://www.livetheeastwood.com/",
    features: [
      {
        img: locationIcon,
        text: " 2901 - 2904 Swisher St, Austin, TX 78705",
      },
      {
        img: buildingIcon,
        text: "3 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(35),
      },
      {
        img: bathIcon,
        text: "3 Bedroom",
      },
    ],
    cost: {
      start: "1620",
      end: "1995",
    },
  },
  {
    id: 31,
    img: "https://images.apts247.info/63663/1025x700.webp",
    title: "Fort Branch At Trumans Landing",
    text: "* Fort Branch at Truman’s Landing is Ideally located in East Austin, Texas. Our two and three bedroom apartments for rent offer the perfect blend of modern comfort and charm, such as a work and study from home space, a stylish all-electric kitchen, ceiling fans with overhead lighting, wood-inspired flooring, and plush carpeting. We are a pet-friendly community.",
    images: [
      "https://images.apts247.info/59941/1025x700.webp",
      "https://thumbs.apts247.info/resize/?img=https://media.apts247.info/ff/fff5868977e74cfda58cddfa78ee31d1/amenity_lists/community-amenities.jpg&w=1050&output=webp",
    ],
    siteLink: "https://www.livefortbranchattrumanslanding.com/",
    features: [
      {
        img: locationIcon,
        text: "5800 Techni Center Dr, Austin, TX 78721",
      },
      {
        img: buildingIcon,
        text: "3 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(250),
      },
      {
        img: bathIcon,
        text: "2-3 Bedroom",
      },
    ],
    cost: {
      start: "1347",
      end: "1568",
    },
  },
  {
    id: 32,
    img: "https://assets.website-files.com/645527628ac05433a1b81db9/645528ea959ddedd701e367f_og%20hero%20image.jpeg",
    title: "Urban Vilas Apartment",
    text: "Starlight residents enjoy private access to one-of-a-kind spaces and features throughout the community and within each unique apartment home. Located in the eclectic East Austin neighborhood just a few blocks away from downtown Austin.",
    images: [
      "https://assets.website-files.com/645527628ac05433a1b81db9/6455380f2db8463ed178f4e9_69125297-p-1080.jpg",
      "https://assets.website-files.com/645527628ac05433a1b81db9/6455382aeb9487059618730a_69125296-p-1080.jpg",
    ],
    siteLink: "https://www.urbanvillasapts.com/",
    features: [
      {
        img: locationIcon,
        text: "Wilshire West Apartments, 4411 Airport Blvd, Austin, TX 78722",
      },
      {
        img: buildingIcon,
        text: "2 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(89),
      },
      {
        img: bathIcon,
        text: "1-2 Bedroom",
      },
    ],
    cost: {
      start: "1345",
      end: "1400",
    },
  },
  {
    id: 33,
    img: "https://resource.rentcafe.com/image/upload/y_313,w_1623,h_378,c_crop/q_auto,f_auto,c_lfill,w_1200,h_350,g_auto/s3/3/146549/volume%20leasing%20office%202%20(large)(1).jpg",
    title: "Volume 6",
    text: "",
    images: [
      "https://resource.rentcafe.com/image/upload/x_0,y_0/q_auto,f_auto,c_limit,w_576/s3/3/146549/vol%202%20a1%20color%20wash.png",
      "https://resource.rentcafe.com/image/upload/x_0,y_0/q_auto,f_auto,c_limit,w_576/s3/3/146549/vol%202%20b1%20color%20wash.png",
      "https://resource.rentcafe.com/image/upload/x_180,y_20,w_1673,h_1980,c_crop/q_auto,f_auto,c_limit,w_576/s3/3/146549/vol%204%20e1%20color%20wash.png",
    ],
    siteLink: "https://www.volumeapartments.com/",
    features: [
      {
        img: locationIcon,
        text: "2704 French Pl, Austin, TX 78722",
      },
      {
        img: buildingIcon,
        text: "3 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(102),
      },
      {
        img: bathIcon,
        text: "1-3 Bedroom",
      },
    ],
    cost: {
      start: "1250",
      end: "1500",
    },
  },
  {
    id: 34,
    img: "https://www.starlightatx.com/uploads/images/images/1336x1336G/718958/Starlight_-_Hero.jpg?1663348337",
    title: "Starlight Apartments",
    text: "Imagine yourself here. East Vue Ranch provides the distinctive character of ATX mixed with the warm and welcoming hill country style that Texas is known for. Relax in comfort and convenience with brand new premium apartment finishes, exclusive amenities inspired by culture and community, and a neighborhood that exudes the creative and eclectic vibe of Austin.",
    images: [
      "https://www.starlightatx.com/uploads/images/images/1336x1336G/744429/IMG_9021.jpg?1685561047",
      "https://www.starlightatx.com/uploads/images/images/1336x1336G/744450/IMG_9048.jpg?1685561174",
      "https://www.starlightatx.com/uploads/images/images/1336x1336G/718957/Starlight_-_Courtyard.jpg?1663348336",
    ],
    siteLink: "https://www.starlightatx.com/starlight-austin-tx/",
    features: [
      {
        img: locationIcon,
        text: "2901 Manor Rd, Austin, TX 78722",
      },
      {
        img: buildingIcon,
        text: "5 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(318),
      },
      {
        img: bathIcon,
        text: "1-2 Bedroom",
      },
    ],
    cost: {
      start: "1890",
      end: "2815",
    },
  },
  {
    id: 35,
    img: "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_3005.jpg",
    title: "arnold apartments",
    text: "The Arnold apartments offers a vibrant eastside lifestyle where art and rhythm collide. It provides luxury amenities, designer finishes, superior customer service and an address conveniently located in the heart of it all.",
    images: [
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8479-1-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8455-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2021/02/IMG_8464-300x300_c.jpg",
      "https://eastvueranch.com/wp-content/uploads/2022/12/6112-IMG_8335-300x300_c.jpg",
    ],
    siteLink: "https://eastvueranch.com/",
    features: [
      {
        img: locationIcon,
        text: "1621 E 6th St, Austin, TX 78702",
      },
      {
        img: buildingIcon,
        text: "5 Stories",
      },
      {
        img: areaIcon,
        text: convertToSquareFeet(346),
      },
      {
        img: bathIcon,
        text: "1-2 Bedroom",
      },
    ],
    cost: {
      start: "1620",
      end: "****",
    },
  },
];
