import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";


import "assets/scss/material-kit-pro-react.scss?v=1.8.0";

import Hero from "views/HomePage/Hero.js";
import Signup from "views/SignupPage/Signup.js";
import Signin from "views/SigninPage/Signin.js";
import Payment from "./views/Payment/Payment"
// import Header from './components/Header/Header';
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
      <Route path="/hero" component={Hero} />
      <Route path="/payment" component={Payment} />
      <Route path="/" component={Signin} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
