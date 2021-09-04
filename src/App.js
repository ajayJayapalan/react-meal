import { useEffect, useState } from "react";

import FoodList from "./components/foodList/FoodList";
import Order from "./components/order/Order";
import "./styles.css";

import { foodStock } from "./services/fake_foodList";

import Overlay from "./components/overlay/Overlay";

export default function App() {
  const [popup, setPopup] = useState(false);
  const [orders, setOrders] = useState([]);
  const [totalOrderCount, setTotalOrderCount] = useState(0);

  const popupHandler = () => {
    setPopup((prevState) => !prevState);
  };

  const orderHandler = (id, value) => {
    const index = orders.findIndex((item) => item.id === id);
    if (index >= 0) {
      setOrders((prevOrders) => {
        let newOrders = prevOrders.slice();
        newOrders[index].orderCount += value;
        return [...newOrders];
      });
    } else {
      const food = foodStock.filter((item) => item.id === id);
      const foodClone = { ...food[0] };
      const orderClone = { ...foodClone, orderCount: value };
      setOrders((prevOrders) => [...prevOrders, orderClone]);
    }
  };

  const totalCountReducer = (acc, cur) => {
    return acc + cur.orderCount;
  };

  useEffect(() => {
    const totalCount = orders.reduce(totalCountReducer, 0);
    setTotalOrderCount(totalCount);
  }, [orders]);

  const handleIncrement = (id) => {
    const index = orders.findIndex((item) => item.id === id);

    let newOrders = [...orders];
    newOrders[index].orderCount += 1;
    if (newOrders[index].orderCount > newOrders[index].stock) {
      return;
    }

    setOrders((prevOrders) => {
      return [...newOrders];
    });
  };
  const handleDecrement = (id) => {
    const index = orders.findIndex((item) => item.id === id);
    setOrders((prevOrders) => {
      let newOrders = prevOrders.slice();
      newOrders[index].orderCount -= 1;
      if (newOrders[index].orderCount === 0) {
        newOrders.splice(index, 1);
      }
      return [...newOrders];
    });
  };

  return (
    <div className="App">
      <Overlay
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        popup={popup}
        onConfirm={popupHandler}
        orders={orders}
      />
      <Order onConfirm={popupHandler} totalOrderCount={totalOrderCount} />
      <FoodList onAdd={orderHandler} />
    </div>
  );
}
