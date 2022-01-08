import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';

import Layout from "./hoc/layout";
import Auth from "./hoc/auth"

import Home from "./components/Home";
import Product from "./components/Products";
import ProductDetails from "./components/Product_details";
import RegisterLogin from "./components/Register_login";
import Register from "./components/Register_login/Register";

import UserDashboard from "./components/Admin/User";

import reactRnd from "./components/react-rnd";



class Routes extends Component {

  render(){
    return(
      <Layout data-test="routes-component">
        <Switch>
          <Route path="/admin/dashboard" component={Auth(UserDashboard, true)} />
          <Route path="/register" component={Auth(Register, false)} />
          <Route path="/register_login" component={Auth(RegisterLogin, false)} />
          <Route path="/product_details" component={Auth(ProductDetails, null)} />
          <Route path="/rnd" component={Auth(reactRnd, null)} /> 
          <Route path="/shop" component={Auth(Product, null)} /> 
          <Route path="/" exact component={Auth(Home, null)} />
        </Switch>
      </Layout>
    )
  }
}

export default Routes;
