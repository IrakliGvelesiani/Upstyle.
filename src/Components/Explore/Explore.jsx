import React from "react";

import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="more-explore">
      <button>
        <Link to="/">women's tops</Link>
      </button>
      <button>
        <Link to="/">women's trousers</Link>
      </button>
      <button>
        <Link to="/">men's shirts</Link>
      </button>
      <button>
        <Link to="/">men's trousers</Link>
      </button>
    </div>
  );
};

export default Explore;
