import React from "react";
import Helmet from "../../Components/Helmet/Helmet";

import img1 from "../../Assets/Images/magazine(3).jpg";
import img2 from "../../Assets/Images/magazine(2).jpg";
import img3 from "../../Assets/Images/magazine(1).jpg";
import { Link } from "react-router-dom";

import Card from "../../Assets/Data/Card";

const Magazine = () => {
  return (
    <Helmet title="Magazine">
      <section className="section new-arrival">
        <div className="title">
          <h2>UPSTYLE. Magazine</h2>
        </div>

        <div className="row container">
          <div className="col col-1">
            <img src={img1} alt="" />
            <h3>
              New view with Myha’la Herrold
              <br />
              <Link to="/">
                <u>Read More</u>
              </Link>
            </h3>
          </div>
          <div className="col col-2">
            <img src={img2} alt="" />
            <h3>
              New view with Myha’la Herrold
              <br />
              <Link to="/">
                <u>Read More</u>
              </Link>
            </h3>
          </div>
          <div className="col col-3">
            <img src={img3} alt="" />
            <h3>
              New view with Myha’la Herrold
              <br />
              <Link to="/">
                <u>Read More</u>
              </Link>
            </h3>
          </div>
        </div>
      </section>
      <div className="more-explore">
        <h1>Browse by category</h1>
        <button>
          <Link to="/magazine">people</Link>
        </button>
        <button>
          <Link to="/magazine">places</Link>
        </button>
        <button>
          <Link to="/magazine">things</Link>
        </button>
        <button>
          <Link to="/magazine">stories</Link>
        </button>
      </div>
      <div className="cards">
        <Link to="/">
          <Card
            image="https://images.pexels.com/photos/12430058/pexels-photo-12430058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="New view with Myha’la Herrold  "
            description="Tristique risus feugiat fermentum eget estorem. Lipsum dolorin sitem pretium dignissim esse suspendisse vulputate sollicitudi dinest antemi leolido risus viverra. Adipiscing intellus ullamco arcun bibendum quam varius velis commodo pharetra velimut. Porttitor diamat tempor cillum"
          />
        </Link>
        <Link to="/">
          <Card
            image="https://images.pexels.com/photos/5840225/pexels-photo-5840225.jpeg?auto=compress&cs=tinysrgb&w=750&h=750&dpr=1"
            title="New view with Myha’la Herrold"
            description="Tristique risus feugiat fermentum eget estorem. Lipsum dolorin sitem pretium dignissim esse suspendisse vulputate sollicitudi dinest antemi leolido risus viverra. Adipiscing intellus ullamco arcun bibendum quam varius velis commodo pharetra velimut. Porttitor diamat tempor cillum"
          />
        </Link>
        <Link to="/">
          <Card
            image="https://images.pexels.com/photos/14848573/pexels-photo-14848573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="New view with Myha’la Herrold"
            description="Tristique risus feugiat fermentum eget estorem. Lipsum dolorin sitem pretium dignissim esse suspendisse vulputate sollicitudi dinest antemi leolido risus viverra. Adipiscing intellus ullamco arcun bibendum quam varius velis commodo pharetra velimut. Porttitor diamat tempor cillum"
          />
        </Link>
        <Link to="/">
          <Card
            image="https://images.pexels.com/photos/9463581/pexels-photo-9463581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="New view with Myha’la Herrold"
            description="Tristique risus feugiat fermentum eget estorem. Lipsum dolorin sitem pretium dignissim esse suspendisse vulputate sollicitudi dinest antemi leolido risus viverra. Adipiscing intellus ullamco arcun bibendum quam varius velis commodo pharetra velimut. Porttitor diamat tempor cillum"
          />
        </Link>
      </div>
      <div className="subscribe__banner">
        <div className="banner-container">
          <div className="banner">
            <div className="content">
              <h3>Subscribe for 10% off your first order</h3>
              <p>Be the first to know what’s happening in our world</p>
              <button>
                <Link to="/">SUBSCRIBE</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="cards">
        <Link to="/">
          <Card
            image="https://images.pexels.com/photos/7576582/pexels-photo-7576582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="New view with Myha’la Herrold  "
            description="Tristique risus feugiat fermentum eget estorem. Lipsum dolorin sitem pretium dignissim esse suspendisse vulputate sollicitudi dinest antemi leolido risus viverra. Adipiscing intellus ullamco arcun bibendum quam varius velis commodo pharetra velimut. Porttitor diamat tempor cillum"
          />
        </Link>
        <Link to="/">
          <Card
            image="https://images.pexels.com/photos/10667867/pexels-photo-10667867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="New view with Myha’la Herrold"
            description="Tristique risus feugiat fermentum eget estorem. Lipsum dolorin sitem pretium dignissim esse suspendisse vulputate sollicitudi dinest antemi leolido risus viverra. Adipiscing intellus ullamco arcun bibendum quam varius velis commodo pharetra velimut. Porttitor diamat tempor cillum"
          />
        </Link>
        <Link to="/">
          <Card
            image="https://images.pexels.com/photos/7622239/pexels-photo-7622239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="New view with Myha’la Herrold"
            description="Tristique risus feugiat fermentum eget estorem. Lipsum dolorin sitem pretium dignissim esse suspendisse vulputate sollicitudi dinest antemi leolido risus viverra. Adipiscing intellus ullamco arcun bibendum quam varius velis commodo pharetra velimut. Porttitor diamat tempor cillum"
          />
        </Link>
        <Link to="/">
          <Card
            image="https://images.pexels.com/photos/6069075/pexels-photo-6069075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="New view with Myha’la Herrold"
            description="Tristique risus feugiat fermentum eget estorem. Lipsum dolorin sitem pretium dignissim esse suspendisse vulputate sollicitudi dinest antemi leolido risus viverra. Adipiscing intellus ullamco arcun bibendum quam varius velis commodo pharetra velimut. Porttitor diamat tempor cillum"
          />
        </Link>
      </div>
    </Helmet>
  );
};

export default Magazine;
