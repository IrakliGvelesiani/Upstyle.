import React from "react";
import PropTypes from "prop-types";

const KeyFutures = (props) => {
  return (
    <div className="policy-cards">
      <div className="policy-cards__icon">
        <i className={props.icon}></i>
      </div>
      <div className="policy-cards__info">
        <div className="policy-cards__info__title">{props.name}</div>
        <div className="policy-cards__info__description">
          {props.description}
        </div>
      </div>
    </div>
  );
};

KeyFutures.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default KeyFutures;
