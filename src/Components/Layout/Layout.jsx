import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import ProductViewModal from "../ProductViewModal/ProductViewModal";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AnnouncmentBar from "../Announcment/AnnouncementBar";
import Copyright from "../Copyright/Copyright";

import Routes from "../../Routes/Routes";

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div>
            <AnnouncmentBar />
            <Header {...props} />
            <div className="container">
              <div className="main">
                <Routes />
              </div>
            </div>
            <Footer />
            <Copyright />
            <ProductViewModal />
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
