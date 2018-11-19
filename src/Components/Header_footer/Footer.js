import React from "react";
import { CityLogo } from "../ui/icons";
const Footer = () => {
  return(
    <footer className="bck_blue">
      <div className="footer_logo">
        <CityLogo link={true} linkTo="/" width="7rem" height="7rem" />
      </div>
      <div className="footer_discl">
        Manchester city 2018.All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
