import React from "react";
import { Link } from "react-router-dom";
export const Tag = props => {
  const template = (
    <div
      style={{
        background: props.bck,
        fontSize: props.size,
        color: props.color,
        padding: "5px 10px",
        display: "inline-block",
        fontFamily: "Roboto",
        ...props.add
      }}
    >
      {props.children}
    </div>
  );
  if (props.link) {
    return <Link to={props.linkTo}>{template}</Link>;
  } else {
    return template;
  }
};
export const firebaseLooer = snaphot => {
  const data = [];
  snaphot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    });
  });
};
export const reverseArray = actualArray => {
  let reversedArray = [];
  for (let i = actualArray.length - 1; i >= 0; i--) {
    reversedArray.push(actualArray[i]);
  }
  return reversedArray;
};
export const validate = element => {
  let error = [true, ""];
  if (element.validation.email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valid = re.test(String(element.value).toLowerCase());
    const message = `${!valid ? "Must be a valid email" : ""}`;
    error = !valid ? [valid, message] : error;
  }
  if (element.validation.required) {
    const valid = element.value.trim() !== "";
    const message = `${!valid ? "this field is required" : ""}`;
    error = !valid ? [valid, message] : error;
  }
  return error;
};
