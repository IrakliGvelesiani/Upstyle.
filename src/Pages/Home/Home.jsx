import React from "react";
import { Link } from "react-router-dom";

import Section, {
  SectionBody,
  SectionTitle,
} from "../../Components/Section/Section";

import Helmet from "../../Components/Helmet/Helmet";
import HeroSlider from "../../Components/HeroSlider/HeroSlider";
import MasonryLayout from "../../Components/MasonryLayout/MasonryLayout";
import Banner from "../../Components/Banner/Banner";
import Explore from "../../Components/Explore/Explore";

import KeyFutures from "../../Components/KeyFutures/KeyFutures";
import Grid from "../../Components/Grid/Grid";
import ProductCard from "../../Components/ProductCard/ProductCard";

import Features from "../../Assets/Data/Features";
import productData from "../../Assets/Data/Products";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* hero slider */}
      <HeroSlider />
      {/* end hero slider */}

      {/* Features section */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {Features.map((item, index) => (
              <Link key={index} to="/features">
                <KeyFutures
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* Features section */}

      {/* MasonryLayout */}
      <Section>
        <SectionBody>
          <MasonryLayout />
        </SectionBody>
      </Section>
      {/* MasonryLayout */}

      {/* New Arrivals Section */}
      <Section>
        <SectionTitle>New Arrivals</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(4).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* New Arrivals Section */}

      {/* Banner Section */}
      <section>
        <SectionBody>
          <Banner />
        </SectionBody>
      </section>
      {/* Banner Section */}

      {/* Featured Products Section */}
      <Section>
        <SectionTitle>Featured Products</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* Featured Products Section */}

      {/* More To Explore */}
      <Section>
        <SectionTitle>More To Explore</SectionTitle>
        <SectionBody>
          <Explore />
        </SectionBody>
      </Section>
      {/* More To Explore */}
    </Helmet>
  );
};

export default Home;
