import React from "react";

import { Link } from "react-router-dom";

import Grid from "../Grid/Grid";

const footerAboutLinks = [
  {
    display: "Shipping & Returns",
    path: "/about",
  },
  {
    display: "Help & FAQ",
    path: "/about",
  },
  {
    display: "Terms & Conditions",
    path: "/about",
  },
  {
    display: "Privacy Policy",
    path: "/about",
  },
  {
    display: "Contact",
    path: "/about",
  },
];

const footerCustomerLinks = [
  {
    display: "Shop All",
    path: "/about",
  },
  {
    display: "About Us",
    path: "/about",
  },
  {
    display: "Community",
    path: "/about",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">About</div>
            <div className="footer__content">
              <p>About us</p>
              <p>Store location</p>

              <p>Contact</p>
              <p>Orders tracking</p>
            </div>
          </div>
          <div>
            <div className="footer__title">Explore</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Support</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>

          <div className="footer__about">
            <p>
              <Link className="Logo" to="/">
                UPSTYLE.
              </Link>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate incidunt et, itaque illum praesentium dolore qui maxime
              labore consequuntur officia, sunt laudantium perspiciatis,
              voluptatum cum?
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
