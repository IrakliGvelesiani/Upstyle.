import React, { useEffect, useState } from "react";
import Helmet from "../../Components/Helmet/Helmet";

import { useSelector } from "react-redux";

import productData from "../../Assets/Data/Products";
import Button from "../../Components/Button/Button";
import CartItem from "../../Components/CartItem/CartItem";
import Collapsible from "react-collapsible";

import NumberWithCommas from "../../Utils/NumberWithCommas";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);

  const [cartProducts, setCartProducts] = useState([]);

  // const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cartItems));
    // setTotalProducts(
    //   cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    // );
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
  }, [cartItems]);
  return (
    <Helmet title="Cart">
      <div className="cart">
        <div className="cart__list">
          {cartProducts.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>ORDER SUMMARY</p>
            <div className="cart__info__txt__price">
              <span>Order Value</span>
              <span>${NumberWithCommas(totalPrice)}</span>
            </div>
            <div className="promo">
              <Collapsible
                className="promo__code"
                trigger="Got a promotion code?"
              >
                <div className="emailBox">
                  <input type="text" size="24" maxLength="10" />
                  <button>ADD</button>
                </div>
              </Collapsible>
            </div>
          </div>
          <div className="cart__info__txt">
            <div className="cart__info__txt__price">
              <span>TOTAL</span>
              <span>${NumberWithCommas(totalPrice)}</span>
            </div>
          </div>
          <div className="cart_info__btn">
            <Button size="block">Proceed to checkout</Button>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
