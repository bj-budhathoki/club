import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import { firebase } from "../../../firebase";
const AdminNav = () => {
  const style = {
    color: "#ffffff",
    fontWeight: "300",
    borderBottom: "1px solid #353535",
    fontSize: "2rem"
  };
  const links = [
    { title: "Matches", linkTo: "/admin_matches" },
    { title: "Add Matches", linkTo: "/admin_matches/edit_match" },
    { title: "Players", linkTo: "/admin_palayers" },
    { title: "Add Players", linkTo: "/admin_palayers/add_player" }
  ];
  const renderItems = () =>
    links.map(link => (
      <Link key={link.linkTo} to={link.linkTo}>
        <ListItem button style={style}>
          {link.title}
        </ListItem>
      </Link>
    ));
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          console.log("log out");
        },
        err => {
          console.log("error");
        }
      );
  };
  return (
    <div>
      {renderItems()}
      <ListItem button style={style} onClick={() => handleLogout()}>
        Logout
      </ListItem>
    </div>
  );
};

export default AdminNav;
