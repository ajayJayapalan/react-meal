import React from "react";

import classes from "./BlackBackground.module.css";

const BlackBackground = (props) => {
  return <div onClick={props.onConfirm} className={classes["overlay"]}></div>;
};

export default BlackBackground;
