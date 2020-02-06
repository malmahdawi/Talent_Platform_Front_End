import React, { Component } from 'react';
import history from "./history.js";
import { Router, Route, Switch } from "react-router";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import Home from "views/HomePage/Hero.js";
import Signup from "views/SignupPage/SignupParent.js";
import Signin from "views/SigninPage/SigninParent.js";
import Offer from "views/OfferPage/OfferParent.js"
import ManageService from "views/ManageServicePage/ManageServiceParent.js"
import CheckOffersParent from 'views/CheckOffersPage/CheckOffersParent';
import AddNewServiceParent from './views/ManageServicePage/Sections/AddNewServiceParent.js'
import EditServiceParent from './views/ManageServicePage/Sections/EditServiceParent.js'
import PaymentParent from "./views/Payment/PaymentParent.js"
import ServiceParent from "./views/ServicePage/ServiceParent.js"
import MakeOfferParent from "./views/MakeOfferPage/MakeOfferParent.js"
import Profile from './views/ProfilePage/Profile'
import Hero from './views/HomePage/Hero'
import Aboutus from './views/AboutUsPage/AboutUsPage'
import Footer from './views/Footer/Footer'
// var hist = createBrowserHistory();

export default function App({...rest}) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

    return (
      <div>
        <Router history={history}>
        <Header
        color="transparent"
        brand="Talent"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "primary"
        }}
        {...rest}
      />
            <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/home" component={Hero} />
                <Route path="/signin" component={Signin} />
                <Route path="/profile" component={Profile} /> 
                <Route path="/my-offers" component={Offer} /> 
                <Route path="/aboutus" component={Aboutus} /> 
                <Route path="/my-services" component={ManageService} /> 
                <Route path="/check-offers" component={CheckOffersParent} /> 
                <Route path="/add-new-service" component={AddNewServiceParent} />
                <Route path="/edit-service" component={EditServiceParent} />
                <Route path="/make-payment" component={PaymentParent} />
                <Route path="/services" component={ServiceParent} />
                <Route path="/make-offer" component={MakeOfferParent} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
        <Footer></Footer>
      </div>
    );
}
