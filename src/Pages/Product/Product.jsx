import React from "react";

import Grid from "../../Components/Grid/Grid";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Helmet from "../../Components/Helmet/Helmet";
import Section, {
  SectionBody,
  SectionTitle,
} from "../../Components/Section/Section";
import ProductView from "../../Components/ProductView/ProductView";

import productData from "../../Assets/Data/Products";

const Product = (props) => {
  const product = productData.getProductBySlug(props.match.params.slug);

  const relatedProducts = productData.getProducts(8);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>YOU MAY ALSO LIKE</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProducts.map((item, index) => (
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
    </Helmet>
  );
};

export default Product;
