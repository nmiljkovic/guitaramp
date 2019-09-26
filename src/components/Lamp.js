import React from "react";
import classnames from "classnames";
import "./Lamp.css";

function Lamp({toggle, on}) {
  const className = classnames("lamp-switch-inner", {
    "on": on,
  });
  return (
    <div className="lamp-switch" onClick={toggle}>
      <div className={className}/>
    </div>
  );
}

export default Lamp;
