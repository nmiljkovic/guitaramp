import React, {Fragment} from "react";
import "./AdvancedAmpControls.css";
import PresetSelector from "./AdvancedAmpControls/PresetSelector";
import AdvancedReverb from "./AdvancedAmpControls/AdvancedReverb";
import CabinetSelector from "./AdvancedAmpControls/CabinetSelector";
import DistortionSelector from "./AdvancedAmpControls/DistortionSelector";

const AdvancedAmpControls = () => (
  <Fragment>
    <div className="select-input">
      <AdvancedReverb/>
    </div>
    <div className="select-input">
      <CabinetSelector/>
    </div>
    <div className="select-input">
      <DistortionSelector/>
    </div>
    <div className="select-input">
      <PresetSelector/>
    </div>
  </Fragment>
);


export default AdvancedAmpControls;
