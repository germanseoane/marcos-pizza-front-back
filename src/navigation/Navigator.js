import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import WelcomeScreen from "../Screens/WelcomeScreen.js";
import CartScreen from "../Screens/CartScreen";
import FavouritesScreen from "../Screens/FavouritesScreen";
import SearchScreen from "../Screens/SearchScreen";
import ErrorScreen from "../Screens/ErrorScreen";
import { useAuthContext } from "../context/AuthContext";
import AccountScreen from "../Screens/AccountScreen";
import SideDrawer from "../Components/SideDrawer";
import Backdrop from "../Components/Backdrop";
import ProductsScreen from "../Screens/ProductsScreen";
import Footer from "../Components/Footer";
import HomeScreen from "../Screens/HomeScreen";

const Navigator = () => {
  const { auth } = useAuthContext();
  const [active, setActive] = useState(false);

  return (
    <Router>
      <Navbar active={active} setActive={setActive} />
      <SideDrawer active={active} setActive={setActive} />
      <Backdrop active={active} setActive={setActive} />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route
          exact
          path="/account"
          component={auth ? AccountScreen : WelcomeScreen}
        />
        <Route exact path="/cart" component={CartScreen} />
        <Route exact path="/products" component={ProductsScreen} />
        <Route exact path="/favourites" component={FavouritesScreen} />
        <Route exact path="/search" component={SearchScreen} />
        <Route
          exact
          path="/account"
          component={auth ? AccountScreen : WelcomeScreen}
        />
        <Route exact path="*" component={ErrorScreen} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Navigator;

//  <Router>
//    <Navbar />
//    <Switch>
//      <Route exact path="/" component={WelcomeScreen} />
//      <Route exact path="/cart" component={CartScreen} />
//      <Route exact path="/favourites" component={FavouritesScreen} />
//      <Route exact path="/search" component={SearchScreen} />
//      <Route path="*" component={ErrorScreen} />
//    </Switch>
//  </Router>;
