import React, { useCallback, useState, useEffect, useRef } from "react";

import Helmet from "../../Components/Helmet/Helmet";
import CheckBox from "../../Components/CheckBox/CheckBox";

import productData from "../../Assets/Data/Products";
import Category from "../../Assets/Data/Category";
import Size from "../../Assets/Data/ProductSize";

import Button from "../../Components/Button/Button";
import InfinityList from "../../Components/InfinityList/InfinityList";

const Women = () => {
  const initFilter = {
    Category: [],
    Size: [],
  };

  const productList = productData.getAllProducts();

  const [products, setProducts] = useState(productList);

  const [filter, setFilter] = useState(initFilter);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            Category: [...filter.Category, item.categorySlug],
          });
          break;
        case "SIZE":
          setFilter({ ...filter, Size: [...filter.Size, item.size] });
          break;
        default:
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.Category.filter(
            (e) => e !== item.categorySlug
          );
          setFilter({ ...filter, Category: newCategory });
          break;
        case "SIZE":
          const newSize = filter.Size.filter((e) => e !== item.size);
          setFilter({ ...filter, size: newSize });
          break;
        default:
      }
    }
  };

  const clearFilter = () => setFilter(initFilter);

  const updateProducts = useCallback(() => {
    let temp = productList;

    if (filter.Category.length > 0) {
      temp = temp.filter((e) => filter.Category.includes(e.categorySlug));
    }

    if (filter.Size.length > 0) {
      temp = temp.filter((e) => {
        const check = e.size.find((size) => filter.Size.includes(size));
        return check !== undefined;
      });
    }

    setProducts(temp);
  }, [filter, productList]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  const filterRef = useRef(null);

  const showHideFilter = () => filterRef.current.classList.toggle("active");

  return (
    <Helmet title="New Arrivals">
      <div className="new-arrivals">
        <div className="new-arrivals__filter" ref={filterRef}>
          <div
            className="new-arrivals__filter__close"
            onClick={() => showHideFilter()}
          >
            <i className="bx bx-left-arrow-alt"></i>
          </div>
          <div className="new-arrivals__filter__widget">
            <div className="new-arrivals__filter__widget__title">
              Shop Clothing
            </div>
            <div className="new-arrivals__filter__widget__content">
              {Category.map((item, index) => (
                <div
                  key={index}
                  className="new-arrivals__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("CATEGORY", input.checked, item)
                    }
                    checked={filter.Category.includes(item.categorySlug)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="new-arrivals__filter__widget">
            <div className="new-arrivals__filter__widget__title">Size</div>
            <div className="new-arrivals__filter__widget__content">
              {Size.map((item, index) => (
                <div
                  key={index}
                  className="new-arrivals__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("SIZE", input.checked, item)
                    }
                    checked={filter.Size.includes(item.size)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="new-arrivals__filter__widget">
            <div className="new-arrivals__filter__widget__content">
              <Button size="sm" onClick={clearFilter}>
                Clear Filter
              </Button>
            </div>
          </div>
        </div>
        <div className="new-arrivals__filter__toggle">
          <Button size="sm" onClick={() => showHideFilter()}>
            Filter
          </Button>
        </div>
        <div className="new-arrivals__content">
          <InfinityList data={products} />
        </div>
      </div>
    </Helmet>
  );
};

export default Women;
