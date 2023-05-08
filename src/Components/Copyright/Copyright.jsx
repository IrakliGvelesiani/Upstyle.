import React from "react";
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <div className="copyright">
      <div className="copyright__text">
        <span>
          <a href="https://github.com/IrakliGvelesiani" target="blank">
            Copyright &#169; Irakli Gvelesiani All rights reserved.
          </a>{" "}
          <Link className="copyright__link" to="/women">
            {" "}
            Terms of Use
          </Link>
          {"   "}|{"   "}
          <Link className="copyright__link" to="/men">
            Privacy Policy
          </Link>
        </span>
      </div>
      <div className="contact__information">
        <p>Tbilisi,Georgia (+888 888 888) | TTY (+888 888 888)</p>
      </div>
    </div>
  );
};

export default Copyright;
