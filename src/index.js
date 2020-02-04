import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";


import "assets/scss/material-kit-pro-react.scss?v=1.8.0";

import Home from "views/HomePage/Home.js";
import Signup from "views/SignupPage/Signup.js";
import Signin from "views/SigninPage/Signin.js";
import Service from "views/ServicePage/Sictions/Service.js";
import ServicePage from "views/ServicePage/ServicePage"
import ServiceItemParent from "views/ServicePage/Sictions/ServiceItemParent"
import CategoriesPage from "views/Categories/CategoriesPage.js"

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
      <Route path="/service" component={Service} />
      <Route path="/servicePage" component={ServicePage}/>
      <Route path ='/serviceItemParent' component ={ServiceItemParent}/>
      <Route path='/categoriesPage' component={CategoriesPage}/>
      <Route path="/" component={Signin} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
