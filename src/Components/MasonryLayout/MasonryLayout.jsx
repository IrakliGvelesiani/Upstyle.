import React from "react";
import img1 from "../../Assets/Images/Masonry/layout-1 (1).jpg";
import img2 from "../../Assets/Images/Masonry/layout-1 (2).jpg";
import img3 from "../../Assets/Images/Masonry/layout-1 (3).jpg";
import img4 from "../../Assets/Images/Masonry/layout-1 (4).jpg";
import img5 from "../../Assets/Images/Masonry/layout-1 (5).jpg";
import img6 from "../../Assets/Images/Masonry/layout-1 (6).jpg";

import { Link } from "react-router-dom";

const MasonryLayout = () => {
  return (
    <div className="masonry__layout">
      <div className="col">
        <div className="row">
          <img src={img3} alt="" />
          <button>
            <Link className="link" to="/">
              Sale
            </Link>
          </button>
        </div>
        <div className=" row">
          <img src={img1} alt="" />
          <button>
            <Link className="link" to="/">
              Woman
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src={img5} alt="" />
          <button>
            <Link className="link" to="/">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src={img2} alt="" />
              <button>
                <Link className="link" to="/">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src={img4} alt="" />
              <button>
                <Link className="link" to="/">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src={img6} alt="" />
          <button>
            <Link className="link" to="/">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MasonryLayout;
