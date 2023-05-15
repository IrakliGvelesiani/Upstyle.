import React from "react";

function CardImage(props) {
  const isImageURL = props.image;
  if (isImageURL) {
    return (
      <div className="styleImage">
        <img
          style={{ width: props.width + "px", marginTop: "-8%" }}
          src={props.image}
          alt="Seattle"
        />
      </div>
    );
  }
  return null;
}

function CardContent(props) {
  return (
    <div className="styleCardContent">
      <p className="styleCardTitle">{props.title}</p>
      <p className="styleDescription">{props.description}</p>
    </div>
  );
}

export default class Card extends React.Component {
  render() {
    return (
      <div style={{ width: this.props.width + "px" }}>
        <div className="styleCard">
          <CardImage image={this.props.image} width={this.props.width} />
          <CardContent
            title={this.props.title}
            description={this.props.description}
          />
        </div>
      </div>
    );
  }
}

// 2. Defaults /////////////////////////////////////////////
Card.defaultProps = {
  width: 350,
  title: "Template - Card Title",
  description: "Template description textbox",
};
