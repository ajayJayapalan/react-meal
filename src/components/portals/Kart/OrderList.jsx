import classes from "../Kart.module.css";

const OrderList = (props) => {
  return (
    <div className={classes["order-list-container"]}>
      <div className={classes["order-right"]}>
        <h3>{props.foodName}</h3>
        <p>
          ${props.foodPrice}
          <span className={classes["order-times"]}>x{props.foodCount}</span>
        </p>
      </div>
      <div className={classes["order-left"]}>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => props.handleDecrement(props.id)}
        >
          -
        </span>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => props.handleIncrement(props.id)}
        >
          +
        </span>
      </div>
    </div>
  );
};

export default OrderList;
