import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AnnouncementBar from "../../Assets/Images/Announcment/AnnouncmentBar";

import Routes from "../../Routes/Routes";

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div>
            <AnnouncementBar />
            <Header {...props} />
            <div className="container">
              <div className="main">
                <Routes />
              </div>
            </div>
            <Footer />
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
