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

const products = [
  {
    title: "CARGO PARACHUTE TROUSER - STONE",
    price: "99",
    image01: product_01_image_01,
    image02: product_01_image_02,
    categorySlug: "ao-thun",
    colors: ["white", "red", "orange"],
    slug: "cargo-parachute-trouser-stone-1",
    size: ["s", "m", "l", "xl"],
  },
  {
    title: "BOXY CROPPED PARADISE BOWLING SHIRT - ECRU",
    price: "105",
    image01: product_02_image_01,
    image02: product_02_image_02,
    categorySlug: "ao-thun",
    colors: ["white", "red", "blue"],
    slug: "boxy-cropped-paradise-bowling-shirt-ecru",
    size: ["s", "m"],
  },
  {
    title: "PARACHUTE TROUSER - GREY",
    price: "58",
    image01: product_03_image_01,
    image02: product_03_image_02,
    categorySlug: "ao-thun",
    colors: ["white", "red", "orange", "yellow"],
    slug: "parachute-trouser-grey",
    size: ["m"],
  },
  {
    title: "PARACHUTE TROUSER - BLACK",
    price: "48",
    image01: product_04_image_01,
    image02: product_04_image_02,
    categorySlug: "ao-thun",
    colors: ["white", "orange", "blue"],
    slug: "parachute-trouser-black",
    size: ["xl"],
  },
  {
    title: "STRAIGHT LEG CARGO TROUSER - TAUPE",
    price: "61",
    image01: product_05_image_01,
    image02: product_05_image_02,
    categorySlug: "ao-thun",
    colors: ["white", "pink"],
    slug: "straight-leg-cargo-trouser-taupe",
    size: ["xxl"],
  },
  {
    title: "GRAND RESORT CROP T-SHIRT - BLACK",
    price: "58",
    image01: product_06_image_01,
    image02: product_06_image_02,
    categorySlug: "ao-thun",
    colors: ["black"],
    slug: "grand-resort-crop-t-shirt-black",
    size: ["s", "m", "xl"],
  },
  {
    title: "MESH PRINTED LONG SLEEVE TOP - MULTI",
    price: "80",
    image01: product_07_image_01,
    image02: product_07_image_02,
    categorySlug: "ao-somi",
    colors: ["white", "red", "orange", "blue"],
    slug: "mesh-printed-long-sleeve-top-multi",
    size: ["l", "xl"],
  },
  {
    title: "STRAIGHT LEG CARGO TROUSER - TAUPE",
    price: "38",
    image01: product_08_image_01,
    image02: product_08_image_02,
    categorySlug: "ao-somi",
    colors: ["white", "red", "black"],
    slug: "straight-leg-cargo-trouser-taupe",
    size: ["s", "m", "xl"],
  },
  {
    title: "STRAIGHT LEG CARGO TROUSER - BLACK",
    price: "38",
    image01: product_09_image_01,
    image02: product_09_image_02,
    categorySlug: "ao-somi",
    colors: ["white", "blue"],
    slug: "straight-leg-cargo-trouser-black",
    size: ["m"],
  },
  {
    title: "CROPPED PUFFER GILET - BLACK",
    price: "88",
    image01: product_10_image_01,
    image02: product_10_image_02,
    categorySlug: "quan-jean",
    colors: ["blue", "black"],
    slug: "cropped-puffer-gilet-black",
    size: ["l"],
  },
  {
    title: "DOUBLE LAYER MESH SLEEVE CROP TOP - BLACK",
    price: "78",
    image01: product_11_image_01,
    image02: product_11_image_02,
    categorySlug: "quan-jean",
    colors: ["blue", "black"],
    slug: "double-layer-mesh-sleeve-crop-top-black",
    size: ["s", "m", "xl"],
  },
  {
    title: "DOUBLE LAYER MESH SLEEVE CROP TOP - WHITE",
    price: "78",
    image01: product_12_image_01,
    image02: product_12_image_02,
    categorySlug: "quan-jean",
    colors: ["blue"],
    slug: "double-layer-mesh-sleeve-crop-top-white",
    size: ["s", "m", "xl"],
  },
  {
    title: "CARGO PARACHUTE TROUSER - STONE",
    price: "48",
    image01: product_01_image_01,
    image02: product_01_image_02,
    categorySlug: "ao-thun",
    colors: ["white", "red"],
    slug: "cargo-parachute-trouser-stone-1",
    size: ["s", "m", "xl"],
  },
  {
    title: "BOXY CROPPED PARADISE BOWLING SHIRT - ECRU",
    price: "39",
    image01: product_02_image_01,
    image02: product_02_image_02,
    categorySlug: "ao-thun",
    colors: ["white", "blue"],
    slug: "boxy-cropped-paradise-bowling-shirt-ecru",
    size: ["s", "m"],
  },
  {
    title: "PARACHUTE TROUSER - GREY",
    price: "20",
    image01: product_03_image_01,
    image02: product_03_image_02,
    categorySlug: "ao-thun",
    colors: ["red", "blue"],
    slug: "parachute-trouser-grey",
    size: ["xl"],
  },
  {
    title: "STRAIGHT LEG CARGO TROUSER - BEIGE",
    price: "41",
    image01: product_08_image_01,
    image02: product_08_image_02,
    categorySlug: "ao-somi",
    colors: ["blue", "black"],
    slug: "straight-leg-cargo-trouser-beige",
    size: ["m", "xl"],
  },
  {
    title: "STRAIGHT LEG CARGO TROUSER - BLACK",
    price: "41",
    image01: product_09_image_01,
    image02: product_09_image_02,
    categorySlug: "ao-somi",
    colors: ["white", "blue"],
    slug: "straight-leg-cargo-trouser-black",
    size: ["s", "l", "xl"],
  },
  {
    title: "CROPPED PUFFER GILET - BLACK",
    price: "68",
    image01: product_10_image_01,
    image02: product_10_image_02,
    categorySlug: "quan-jean",
    colors: ["blue", "black"],
    slug: "cropped-puffer-gilet-black",
    size: ["s", "m", "l", "xl"],
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
