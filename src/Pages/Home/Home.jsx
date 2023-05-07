import React from "react";

import Helmet from "../../Components/Helmet/Helmet";
import HeroSlider from "../../Components/Slider/HeroSlider";

import heroSliderData from "../../Assets/Data/hero-slider";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* Hero Slider */}
      <HeroSlider data={heroSliderData} />
      {/* Hero Slider */}
    </Helmet>
  );
};

export default Home;
