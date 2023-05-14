import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Collapsible from "react-collapsible";

import { useDispatch } from "react-redux";

import { addItem } from "../../Redux/ShoppingCart/CartItemsSlide";

import { withRouter } from "react-router";

import Button from "../Button/Button";
import numberWithCommas from "../../Utils/NumberWithCommas";

const ProductView = (props) => {
  const dispatch = useDispatch();
  let product = props.product;

  if (product === undefined)
    product = {
      title: "",
      price: "",
      image01: null,
      image02: null,
      categorySlug: "",

      slug: "",
      size: [],
      description: "",
    };

  const [previewImg, setPreviewImg] = useState(product.image01);

  const [size, setSize] = useState(undefined);

  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  useEffect(() => {
    setPreviewImg(product.image01);
    setQuantity(1);
    setSize(undefined);
  }, [product]);

  const check = () => {
    if (size === undefined) {
      alert("Choose Size");
      return false;
    }

    return true;
  };

  const addToCart = () => {
    if (check) {
      dispatch(
        addItem({
          slug: product.slug,
          size: size,
          quantity: quantity,
          price: product.price,
        })
      );
      alert("success");
    }
  };

  const goToCart = () => {
    if (check())
      dispatch(
        addItem({
          slug: product.slug,
          size: size,
          quantity: quantity,
          price: product.price,
        })
      );

    props.history.push("/cart");
  };

  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.image01)}
          >
            <img src={product.image01} alt="" />
          </div>
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.image02)}
          >
            <img src={product.image02} alt="" />
          </div>
        </div>
        <div className="product__images__main">
          <img src={previewImg} alt="" />
        </div>
      </div>
      <div className="product__info">
        <h1 className="product__info__title">{product.title}</h1>
        <div className="product__info__item">
          <span className="product__info__item__price">
            ${numberWithCommas(product.price)}
          </span>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Size</div>
          <div className="product__info__item__list">
            {product.size.map((item, index) => (
              <div
                key={index}
                className={`product__info__item__list__item ${
                  size === item ? "active" : ""
                }`}
                onClick={() => setSize(item)}
              >
                <span className="product__info__item__list__item__size">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Quantity</div>
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn__minus"
              onClick={() => updateQuantity("minus")}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quantity__btn__plus"
              onClick={() => updateQuantity("plus")}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="product__info__item">
          <Button onClick={() => addToCart()}>Add To Cart</Button>
          <Button onClick={() => goToCart()}>Buy Now</Button>
        </div>
        <Collapsible trigger="ABOUT">
          <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
        </Collapsible>
        <Collapsible trigger="DELIVERY & RETURNS">
          <p>Shipping to: International</p>
          <p>
            Standard home delivery $20 USD / Free on orders over $200 USD
            Payment methods: Credit / Debit card | Klarna | Paypal
          </p>
          <p>
            Please note, that the total amount of your order does not include
            local sales taxes and VAT, which means extra fees may be applied
            after placing your order. Read more about the delivery fees here.
          </p>
          <p>
            Your return will cost $25. If something isn’t quite right, you have
            28 days to send it back to u
          </p>
          <p>
            Minimum order value is $5 USD Free shipping on orders over threshold
          </p>
        </Collapsible>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object,
};

export default withRouter(ProductView);
