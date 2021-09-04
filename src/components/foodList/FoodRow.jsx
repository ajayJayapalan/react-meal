import React from "react";

import classes from "./FoodRow.module.css";
import FoodCheck from "./FoodRow/FoodCheck";
import FoodInfo from "./FoodRow/FoodInfo";

const FoodRow = (props) => {

  const clickHandler = (id,value)=>{
    props.onAdd(id,value)
  }
  
  return (
    <>
      <div className={classes["food-row"]}>
        <FoodInfo name={props.name} price={props.price} />
        <FoodCheck stock={props.stock} onAdd={props.onAdd} onClick={clickHandler} id={props.id} />
      </div>
    </>
  );
};

export default FoodRow;
