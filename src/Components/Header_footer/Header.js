import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

import { CityLogo } from "../ui/icons";
const Header = () => {
  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "#98c5e9",
        boxShadow: "none",
        padding: "1rem 0",
        borderBottom: "2px solid #00285e"
      }}
    >
      <Toolbar styles={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <div className="header_logo" style={{ fontSize: "1.5rem" }}>
            <CityLogo link={true} linkTo="/" width="6rem" height="6rem" />
          </div>
        </div>
        <Link to="/the_team">
          <Button color="inherit" style={{ fontSize: "1.5rem" }}>
            The team
          </Button>
        </Link>
        <Link to="/the_matches">
          <Button color="inherit" style={{ fontSize: "1.5rem" }}>
            Matches
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
