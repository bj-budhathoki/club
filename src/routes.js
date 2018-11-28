import React from "react";
import { Switch, Route } from "react-router-dom";
import Signin from "./Components/signin";
import Layout from "./HOC/Layout";
import Home from "./Components/home/";
import Dashboard from "./Components/admin/Dashboard";
const Routes = props => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/sign_in" component={Signin} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
};
export default Routes;
