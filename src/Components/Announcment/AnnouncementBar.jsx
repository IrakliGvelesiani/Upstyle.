import React from "react";
import { Link } from "react-router-dom";

function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="announcment-text">
        <span>
          <Link className="link ann" to="/new-arrivals">
            DISCOVER OUR MATCHING SETS |
          </Link>{" "}
          <Link className="link ann-link" to="/women">
            {" "}
            WOMEN
          </Link>{" "}
          <Link className="link ann-link" to="/men">
            MEN
          </Link>
        </span>
      </div>
    </div>
  );
}

export default AnnouncementBar;
