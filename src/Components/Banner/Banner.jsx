import React from "react";
import { Link } from "react-router-dom";

import img1 from "../../Assets/Images/banner-1.PNG";
import img2 from "../../Assets/Images/banner-2.PNG";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner">
        <div className="banner-img-left">
          <img src={img1} alt="" />
        </div>
        <div className="content">
          <span>New Collection</span>
          <h3>50% Off / Selected items</h3>
          <p>
            Mus venenatis habitasse leo malesuada lacus <br />
            commodo faucibus torquent donec
          </p>
          <button>
            <Link to="/">view offer</Link>
          </button>
        </div>
        <div className="banner-img-right">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
