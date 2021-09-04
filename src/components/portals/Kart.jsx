import React, { useState, useEffect } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./Kart.module.css";
import OrderList from "./Kart/OrderList";
import TotalAmount from "./Kart/TotalAmount";

const Kart = (props) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const totalAmountReducer = (acc, cur) => {
    let sum = Number(cur.price) * cur.orderCount;
    return acc + sum;
  };

  useEffect(() => {
    const price = props.orders.reduce(totalAmountReducer, 0);
    // console.log("price", props.orders,price)
    setTotalPrice(price);
  }, [props.orders]);

  return (
    <div className={classes["kart"]}>
      <Card>
        {props.orders.map((food) => {
          return (
            <OrderList
              key={food.id}
              id={food.id}
              foodName={food.name}
              foodPrice={food.price}
              foodCount={food.orderCount}
              handleIncrement={props.handleIncrement}
              handleDecrement={props.handleDecrement}
            />
          );
        })}
        <TotalAmount totalPrice={totalPrice} />
        <Button onClick={props.onConfirm}>Close</Button>
        <Button>Order</Button>
      </Card>
    </div>
  );
};

export default Kart;
