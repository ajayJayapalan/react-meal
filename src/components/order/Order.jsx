import React from "react";
import Card from "../UI/Card";

import classes from "./Order.module.css"

const Order = (props) => {
  return (
    <>
      <Card>
        <div className={classes["order-container"]}>
          order<span onClick={props.onConfirm} className={classes["order__num"]}>{props.totalOrderCount}</span>
        </div>
      </Card>
    </>
  );
};

export default Order;
