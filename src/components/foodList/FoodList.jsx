import React from "react";
import Card from "../UI/Card";

import FoodRow from "./FoodRow";
import { foodStock } from "../../services/fake_foodList";

const FoodList = (props) => {
  
  return (
    <>
      <Card>
        {foodStock.map((row) => {
          return <FoodRow onAdd={props.onAdd} id={row.id} key={row.id} stock={row.stock} name={row.name} price={row.price} />;
        })}
      </Card>
    </>
  );
};

export default FoodList;
