import React from "react";
import { Switch, Route } from "react-router-dom";
import Signin from "./Components/signin";
import Layout from "./HOC/Layout";
import Home from "./Components/home/";
import Dashboard from "./Components/admin/Dashboard";
import PrivateRoutes from "./Components/authRoutes/privateRoutes";
import AdminMatches from "./Components/admin/matches";
const Routes = props => {
  return (
    <Layout>
      <Switch>
        <PrivateRoutes
          {...props}
          path="/admin_matches"
          exact
          component={AdminMatches}
        />
        <Route exact path="/" component={Home} />
        <Route exact path="/sign_in" component={Signin} />
        <PrivateRoutes
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />
      </Switch>
    </Layout>
  );
};
export default Routes;
