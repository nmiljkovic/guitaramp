import React, {Fragment, useEffect, useState} from "react";

import Crunch from "./Crunch";
import Knobs from "./Knobs";
import Equalizer from "./Equalizer";
import AdvancedAmpControls from "./AdvancedAmpControls";
import "./Amp.css";

export default function Amp() {
  const [advanced, setShowAdvanced] = useState(false);

  useEffect(() => {
    const handler = e => {
      if (e.key === "1") {
        setShowAdvanced(!advanced);
      }
    };
    document.addEventListener("keyup", handler);

    return function() {
      document.removeEventListener("keyup", handler);
    };
  }, [advanced, setShowAdvanced]);

  return (
    <Fragment>
      <div className="amp">
        <div className="amp-control">
          <Knobs/>
          <Crunch/>
        </div>
        <div className="amp-speaker">
          {advanced ? <AdvancedAmpControls/> : (
            <div className="amp-pedals">
              <Equalizer/>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}
