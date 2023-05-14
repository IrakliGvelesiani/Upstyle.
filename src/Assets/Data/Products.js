const product_01_image_01 =
  require("../Images/Products/product-01 (1).jpg").default;
const product_01_image_02 =
  require("../Images/Products/product-01 (2).jpg").default;
// const product_01_image_03 = require('../Images/Products/product-01 (3).jpg').default

const product_02_image_01 =
  require("../Images/Products/product-02 (1).jpg").default;
const product_02_image_02 =
  require("../Images/Products/product-02 (2).jpg").default;

const product_03_image_01 =
  require("../Images/Products/product-03 (1).jpg").default;
const product_03_image_02 =
  require("../Images/Products/product-03 (2).jpg").default;

const product_04_image_01 =
  require("../Images/Products/product-04 (1).jpg").default;
const product_04_image_02 =
  require("../Images/Products/product-04 (2).jpg").default;

const product_05_image_01 =
  require("../Images/Products/product-05 (1).jpg").default;
const product_05_image_02 =
  require("../Images/Products/product-05 (2).jpg").default;

const product_06_image_01 =
  require("../Images/Products/product-06 (1).jpg").default;
const product_06_image_02 =
  require("../Images/Products/product-06 (2).jpg").default;

const product_07_image_01 =
  require("../Images/Products/product-07 (1).jpg").default;
const product_07_image_02 =
  require("../Images/Products/product-07 (2).jpg").default;

const product_08_image_01 =
  require("../Images/Products/product-08 (1).jpg").default;
const product_08_image_02 =
  require("../Images/Products/product-08 (2).jpg").default;

const product_09_image_01 =
  require("../Images/Products/product-09 (1).jpg").default;
const product_09_image_02 =
  require("../Images/Products/product-09 (2).jpg").default;

const product_10_image_01 =
  require("../Images/Products/product-10 (1).jpg").default;
const product_10_image_02 =
  require("../Images/Products/product-10 (2).jpg").default;

const product_11_image_01 =
  require("../Images/Products/product-11 (1).jpg").default;
const product_11_image_02 =
  require("../Images/Products/product-11 (2).jpg").default;

const product_12_image_01 =
  require("../Images/Products/product-12 (1).jpg").default;
const product_12_image_02 =
  require("../Images/Products/product-12 (2).jpg").default;

const product_13_image_01 =
  require("../Images/Products/product-13 (1).jpg").default;
const product_13_image_02 =
  require("../Images/Products/product-13 (2).jpg").default;

const product_14_image_01 =
  require("../Images/Products/product-14 (1).jpg").default;
const product_14_image_02 =
  require("../Images/Products/product-14 (2).jpg").default;

const product_15_image_01 =
  require("../Images/Products/product-15 (1).jpg").default;
const product_15_image_02 =
  require("../Images/Products/product-15 (2).jpg").default;

const product_16_image_01 =
  require("../Images/Products/product-16 (1).jpg").default;
const product_16_image_02 =
  require("../Images/Products/product-16 (2).jpg").default;

const product_17_image_01 =
  require("../Images/Products/product-17 (1).jpg").default;
const product_17_image_02 =
  require("../Images/Products/product-17 (2).jpg").default;

const product_18_image_01 =
  require("../Images/Products/product-18 (1).jpg").default;
const product_18_image_02 =
  require("../Images/Products/product-18 (2).jpg").default;

const products = [
  {
    title: "CARGO PARACHUTE TROUSER - STONE",
    price: "99",
    image01: product_01_image_01,
    image02: product_01_image_02,
    categorySlug: "cargos",
    slug: "cargo-parachute-trouser-stone-1",
    size: ["S", "M", "L", "XL"],
    description:
      "Straight Leg Cargo Trouser in a medium weight cotton.Beige cargo trouser Straight leg fit Side cargo pockets Back cargo pockets Cernucci rubber branding Model measures 5ft 10 and wears size 10 Composition: 100% Cotton",
  },
  {
    title: "BOXY CROPPED PARADISE BOWLING SHIRT - ECRU",
    price: "105",
    image01: product_02_image_01,
    image02: product_02_image_02,
    categorySlug: "crops",
    slug: "boxy-cropped-paradise-bowling-shirt-ecru",
    size: ["S", "M"],
    description:
      "Straight Leg Cargo Trouser in a medium weight cotton.Beige cargo trouser Straight leg fit Side cargo pockets Back cargo pockets Cernucci rubber branding Model measures 5ft 10 and wears size 10 Composition: 100% Cotton",
  },
  {
    title: "PARACHUTE TROUSER - GREY",
    price: "58",
    image01: product_03_image_01,
    image02: product_03_image_02,
    categorySlug: "trouser",
    slug: "parachute-trouser-grey",
    size: ["M"],
    description:
      "Straight Leg Cargo Trouser in a medium weight cotton.Beige cargo trouser Straight leg fit Side cargo pockets Back cargo pockets Cernucci rubber branding Model measures 5ft 10 and wears size 10 Composition: 100% Cotton",
  },
  {
    title: "PARACHUTE TROUSER - BLACK",
    price: "48",
    image01: product_04_image_01,
    image02: product_04_image_02,
    categorySlug: "trouser",
    slug: "parachute-trouser-black",
    size: ["XL"],
    description:
      "Straight Leg Cargo Trouser in a medium weight cotton.Beige cargo trouser Straight leg fit Side cargo pockets Back cargo pockets Cernucci rubber branding Model measures 5ft 10 and wears size 10 Composition: 100% Cotton",
  },
  {
    title: "STRAIGHT LEG CARGO TROUSER - TAUPE",
    price: "61",
    image01: product_05_image_01,
    image02: product_05_image_02,
    categorySlug: "cargos",
    slug: "straight-leg-cargo-trouser-taupe",
    size: [" XXL "],
    description:
      "Straight Leg Cargo Trouser in a medium weight cotton.Beige cargo trouser Straight leg fit Side cargo pockets Back cargo pockets Cernucci rubber branding Model measures 5ft 10 and wears size 10 Composition: 100% Cotton",
  },
  {
    title: "GRAND RESORT CROP T-SHIRT - BLACK",
    price: "58",
    image01: product_06_image_01,
    image02: product_06_image_02,
    categorySlug: "crops",
    slug: "grand-resort  -crop-t-shirt-black",
    size: ["S", "M", "XL"],
    description:
      "Straight Leg Cargo Trouser in a medium weight cotton.Beige cargo trouser Straight leg fit Side cargo pockets Back cargo pockets Cernucci rubber branding Model measures 5ft 10 and wears size 10 Composition: 100% Cotton",
  },
  {
    title: "MESH PRINTED LONG SLEEVE TOP - MULTI",
    price: "80",
    image01: product_07_image_01,
    image02: product_07_image_02,
    categorySlug: "crops",
    slug: "mesh-printed-long-sleeve-top-multi",
    size: ["L", "XL"],
    description:
      "Straight Leg Cargo Trouser in a medium weight cotton.Beige cargo trouser Straight leg fit Side cargo pockets Back cargo pockets Cernucci rubber branding Model measures 5ft 10 and wears size 10 Composition: 100% Cotton",
  },
  {
    title: "STRAIGHT LEG CARGO TROUSER - TAUPE",
    price: "38",
    image01: product_08_image_01,
    image02: product_08_image_02,
    categorySlug: "cargos",
    slug: "straight-leg-cargo-trouser-taupe",
    size: ["S", "M", "XL"],
    description:
      "Straight Leg Cargo Trouser in a medium weight cotton.Beige cargo trouser Straight leg fit Side cargo pockets Back cargo pockets Cernucci rubber branding Model measures 5ft 10 and wears size 10 Composition: 100% Cotton",
  },
  {
    title: "STRAIGHT LEG CARGO TROUSER - BLACK",
    price: "38",
    image01: product_09_image_01,
    image02: product_09_image_02,
    categorySlug: "cargos",
    slug: "straight-leg-cargo-trouser-black",
    size: ["M"],
    description:
      "Straight Leg Cargo Trouser in a medium weight cotton.Beige cargo trouser Straight leg fit Side cargo pockets Back cargo pockets Cernucci rubber branding Model measures 5ft 10 and wears size 10 Composition: 100% Cotton",
  },
  {
    title: "CROPPED PUFFER GILET - BLACK",
    price: "88",
    image01: product_10_image_01,
    image02: product_10_image_02,
    categorySlug: "crops",
    slug: "cropped-puffer-gilet-black",
    size: ["L", "XL"],
    description:
      "Straight Leg Cargo Trouser in a medium weight cotton.Beige cargo trouser Straight leg fit Side cargo pockets Back cargo pockets Cernucci rubber branding Model measures 5ft 10 and wears size 10 Composition: 100% Cotton",
  },
  {
    title: "DOUBLE LAYER MESH SLEEVE CROP TOP - BLACK",
    price: "78",
    image01: product_11_image_01,
    image02: product_11_image_02,
    categorySlug: "crops",
    slug: "double-layer-mesh-sleeve-crop-top-black",
    size: ["S", "M", "XL"],
    description:
      "Straight Leg Cargo Trouser in a medium weight cotton.Beige cargo trouser Straight leg fit Side cargo pockets Back cargo pockets Cernucci rubber branding Model measures 5ft 10 and wears size 10 Composition: 100% Cotton",
  },
  {
    title: "DOUBLE LAYER MESH SLEEVE CROP TOP - WHITE",
    price: "78",
    image01: product_12_image_01,
    image02: product_12_image_02,
    categorySlug: "crops",
    slug: "double-layer  -mesh-sleeve-crop-top-white",
    size: ["S", "M", "XL"],
    description:
      "Straight Leg Cargo Trouser in a medium weight cotton.Beige cargo trouser Straight leg fit Side cargo pockets Back cargo pockets Cernucci rubber branding Model measures 5ft 10 and wears size 10 Composition: 100% Cotton",
  },
  {
    title: "MULTI CARGO POCKET JEANS - BLACK",
    price: "76",
    image01: product_13_image_01,
    image02: product_13_image_02,
    categorySlug: "jeans",
    slug: "multi-cargo-pocket-jeans-black",
    size: ["S", "M", "XL"],
    description:
      "Straight Leg Cargo Trouser in a medium weight cotton.Beige cargo trouser Straight leg fit Side cargo pockets Back cargo pockets Cernucci rubber branding Model measures 5ft 10 and wears size 10 Composition: 100% Cotton",
  },
  {
    title: "RELAXED RAW EDGE DETAIL JEANS - ICE BLUE",
    price: "92",
    image01: product_14_image_01,
    image02: product_14_image_02,
    categorySlug: "jeans",
    slug: "relaxed-raw-edge-detail-jeans-ice-blue",
    size: ["S", "M"],
    description:
      "Straight Leg Cargo Trouser in a medium weight cotton.Beige cargo trouser Straight leg fit Side cargo pockets Back cargo pockets Cernucci rubber branding Model measures 5ft 10 and wears size 10 Composition: 100% Cotton",
  },
  {
    title: "SPLIT HEM JOGGER - GREY MARL",
    price: "38",
    image01: product_15_image_01,
    image02: product_15_image_02,
    categorySlug: "joggers",
    slug: "split-hem-jogger-grey-marl",
    size: ["XL"],
    description:
      "Straight Leg Cargo Trouser in a medium weight cotton.Beige cargo trouser Straight leg fit Side cargo pockets Back cargo pockets Cernucci rubber branding Model measures 5ft 10 and wears size 10 Composition: 100% Cotton",
  },
  {
    title: "SPLIT HEM JOGGER - CHOCOLATE",
    price: "38",
    image01: product_16_image_01,
    image02: product_16_image_02,
    categorySlug: "joggers",
    slug: "split-hem-jogger-chocolate",
    size: ["M", "XL"],
    description:
      "Straight Leg Cargo Trouser in a medium weight cotton.Beige cargo trouser Straight leg fit Side cargo pockets Back cargo pockets Cernucci rubber branding Model measures 5ft 10 and wears size 10 Composition: 100% Cotton",
  },
  {
    title: "HOODIE - CREAM",
    price: "82",
    image01: product_17_image_01,
    image02: product_17_image_02,
    categorySlug: "hoodies",
    slug: "hoodie-cream",
    size: ["S", "L", "XL"],
    description:
      "Straight Leg Cargo Trouser in a medium weight cotton.Beige cargo trouser Straight leg fit Side cargo pockets Back cargo pockets Cernucci rubber branding Model measures 5ft 10 and wears size 10 Composition: 100% Cotton",
  },
  {
    title: "HOODIE - GREY MARL",
    price: "82",
    image01: product_18_image_01,
    image02: product_18_image_02,
    categorySlug: "hoodies",
    slug: "hoodie-grey-marl",
    size: ["S", "M", "L", "XL"],
    description:
      "Straight Leg Cargo Trouser in a medium weight cotton.Beige cargo trouser Straight leg fit Side cargo pockets Back cargo pockets Cernucci rubber branding Model measures 5ft 10 and wears size 10 Composition: 100% Cotton",
  },
  // 18 products
];

const getAllProducts = () => products;

const getProducts = (count) => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};

const getProductBySlug = (slug) => products.find((e) => e.slug === slug);

const getCartItemsInfo = (cartItems) => {
  let res = [];
  if (cartItems.length > 0) {
    cartItems.forEach((e) => {
      let product = getProductBySlug(e.slug);
      res.push({
        ...e,
        product: product,
      });
    });
  }
  // console.log(res)
  // console.log('sorted')
  // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
  return res.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
};

const productData = {
  getAllProducts,
  getProducts,
  getProductBySlug,
  getCartItemsInfo,
};

export default productData;
