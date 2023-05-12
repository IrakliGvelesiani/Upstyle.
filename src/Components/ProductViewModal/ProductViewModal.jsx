import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import Button from "../Button/Button";
import ProductView from "../ProductView/ProductView";

import { remove } from "../../Redux/ProductModal/ProductModalSlice";

import productData from "../../Assets/Data/Products";

import CloseIcon from "@mui/icons-material/Close";

const ProductViewModal = () => {
  const productSlug = useSelector((state) => state.productModal.value);
  const dispatch = useDispatch();

  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    setProduct(productData.getProductBySlug(productSlug));
  }, [productSlug]);

  return (
    <div
      className={`product-view__modal ${product === undefined ? "" : "active"}`}
    >
      <div className="product-view__modal__content">
        <ProductView product={product} />
        <div className="product-view__modal__content__close">
          <Button size="sm" onClick={() => dispatch(remove())}>
            <CloseIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
