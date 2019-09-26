import React from "react";
import {connect} from "react-redux";
import {setDistortionBypass, setDistortionCurve, setDistortionGain} from "../../reducers/distortion";

const DistortionSelector = ({curve, bypass, gain, setCurve, setBypass, setGain}) => (
  <>
    <label htmlFor="distortion-curve">Distortion curve:</label>
    <select
      id="distortion-curve"
      onChange={setCurve}
      value={curve}
    >
      <option value="blues">Blues</option>
      <option value="sunshine">Sunshine</option>
      <option value="driver">Driver</option>
      <option value="sustained">Sustained</option>
      <option value="arch">Arch</option>
      <option value="cubic">Cubic</option>
    </select>

    <label htmlFor="distortion-bypass">Bypass</label>
    <input
      type="checkbox" id="distortion-bypass"
      checked={bypass}
      onChange={setBypass}
    />

    <label htmlFor="distortion-gain">Gain</label>
    <input
      value={gain}
      onChange={setGain}
      style={{width: "200px"}}
      type="range" min="0" max="1" step="0.005"
    />
    <span style={{color: "white"}}>{gain}</span>
  </>
);

const mapStateToProps = state => state.distortion;

const mapDispatchToProps = dispatch => ({
  setCurve: e => dispatch(setDistortionCurve(e.target.value)),
  setBypass: e => dispatch(setDistortionBypass(e.target.checked)),
  setGain: e => dispatch(setDistortionGain(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DistortionSelector);


