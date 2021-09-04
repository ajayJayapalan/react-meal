import React from "react";



const FoodInfo = (props) => {
  return (
    <div className="food-row__info">
      <h3 className="food-row__name">{props.name}</h3>
      <p className="food-row__price">${props.price}</p>
    </div>
  );
};

export default FoodInfo;
