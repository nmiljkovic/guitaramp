import React from "react";
import "./PedalSwitch.css";
import classnames from "classnames";

function PedalSwitch({size, toggle, on}) {
  const className = classnames("pedal-switch", {
    "on": on,
  });
  return (
    <div
      onClick={toggle}
      className={className}
      style={{width: size, height: size}}
    />
  );
}

PedalSwitch.defaultProps = {
  size: 30,
  on: false,
};

export default PedalSwitch;
