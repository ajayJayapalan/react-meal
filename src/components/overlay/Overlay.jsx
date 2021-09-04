import BlackBackground from "../portals/BlackBackground";
import Kart from "../portals/Kart";

import ReactDOM from "react-dom";

const Overlay = (props) => {
  return (
    <>
      {props.popup && (
        <>
          {ReactDOM.createPortal(
            <BlackBackground onConfirm={props.onConfirm} />,
            document.getElementById("black-background-root")
          )}
          {ReactDOM.createPortal(
            <Kart
              handleIncrement={props.handleIncrement}
              handleDecrement={props.handleDecrement}
              onConfirm={props.onConfirm}
              orders={props.orders}
            />,
            document.getElementById("kart-root")
          )}
        </>
      )}
    </>
  );
};

export default Overlay;
