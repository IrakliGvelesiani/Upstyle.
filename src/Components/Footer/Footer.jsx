import React from "react";

import { Link } from "react-router-dom";

import Grid from "../Grid/Grid";

const footerSupportLinks = [
  {
    display: "Gift Cards",
    path: "/about",
  },
  {
    display: "Shipping",
    path: "/about",
  },
  {
    display: "Returns",
    path: "/about",
  },
  {
    display: "FAQs",
    path: "/about",
  },
  {
    display: "Privacy Policy",
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

const footerAboutLinks = [
  {
    display: "About Us",
    path: "/about",
  },
  {
    display: "Store Location",
    path: "/about",
  },
  {
    display: "Contact",
    path: "/about",
  },
  {
    display: "Orders tracking",
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
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
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
              {footerSupportLinks.map((item, index) => (
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
            <h3>JOIN THE TEAM</h3>
            <p>
              Be the first in line for new drops,limited <br />
              offers,and VIP community events
            </p>
            <div className="emailBox">
              <input
                id="emailAddress"
                type="email"
                size="34"
                maxlength="40"
                required
                placeholder="Enter your email addres"
              />
              <button>Subscribe</button>
            </div>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
