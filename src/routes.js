import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Signin from "./Components/signin/index";
import Layout from "./HOC/Layout";
import Home from "./Components/home/";
const Routes = props => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/sign_in" component={Signin} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
};
export default Routes;
