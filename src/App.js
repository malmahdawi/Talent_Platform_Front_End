import React, { Component } from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import Home from "views/HomePage/Hero.js";
import Signup from "views/SignupPage/SignupParent.js";
import Signin from "views/SigninPage/SigninParent.js";
import Offer from "views/OfferPage/OfferParent.js"
import ManageService from "views/ManageServicePage/ManageServiceParent.js"
import CheckOffersParent from 'views/CheckOffersPage/CheckOffersParent';
import AddNewServiceParent from './views/ManageServicePage/Sections/AddNewServiceParent.js'
import EditServiceParent from './views/ManageServicePage/Sections/EditServiceParent.js'
import PaymentParent from "./views/Payment/PaymentParent.js"

var hist = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={hist}>
            <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/signin" component={Signin} /> 
                <Route path="/my-offers" component={Offer} /> 
                <Route path="/my-services" component={ManageService} /> 
                <Route path="/check-offers" component={CheckOffersParent} /> 
                <Route path="/add-new-service" component={AddNewServiceParent} />
                <Route path="/edit-service" component={EditServiceParent} />
                <Route path="/make-payment" component={PaymentParent} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
      </div>
    );
  }
}
