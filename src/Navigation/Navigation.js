import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";

import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Articles from "../pages/Articles";
import Reviews from "../pages/Reviews";
import Menu from "./Menu";
import Theme from "../components/Theme";

const NavigationRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/articles" element={<Articles />} />
    <Route path="/reviews" element={<Reviews />} />
  </Routes>
);

const Navigation = () => (
  <BrowserRouter>
    <Menu />
    <Theme>
      <NavigationRoutes />
    </Theme>
  </BrowserRouter>
);

export default Navigation;
