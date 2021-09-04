import React, { useState } from "react";

import classes from "../FoodRow.module.css";
import Button from "../../UI/Button";

const FoodCheck = (props) => {
  const [value, setValue] = useState(1);

  const valueHandler = (event) => {
    setValue(Number(event.target.value));
  };

  return (
    <div className="food-row__check">
      <div className={classes["food-row__input__wrapper"]}>
        <label htmlFor="food-row__input">Amount</label>
        <input
          onChange={valueHandler}
          type="number"
          name="amount"
          value={value}
          min={0}
          max={props.stock}
          id="food-row__input"
        />
      </div>
      <Button
        disabled={value === 0 ? true : false}
        onClick={() => props.onClick(props.id, value)}
      >
        +Add
      </Button>
    </div>
  );
};

export default FoodCheck;
