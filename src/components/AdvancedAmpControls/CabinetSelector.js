import React from "react";
import {cabinetImpulses, setCabinetBypass, setCabinetImpulse} from "../../reducers/cabinet";
import {connect} from "react-redux";

const CabinetSelector = ({cabinetImpulse, cabinetBypass, setCabinetImpulse, setCabinetBypass}) => (
  <>
    <label htmlFor="cabinet-impulse">
      Cabinet impulse:
    </label>
    <select
      id="cabinet-impulse"
      value={cabinetImpulse}
      onChange={setCabinetImpulse}
    >
      {cabinetImpulses.map(impulse => (
        <option value={impulse.id} key={impulse.id}>
          {impulse.name}
        </option>
      ))}
    </select>
    <label htmlFor="cabinet-bypass">Bypass</label>
    <input type="checkbox" id="cabinet-bypass"
           checked={cabinetBypass}
           onChange={setCabinetBypass}
    />
  </>
);

const mapStateToProps = state => ({
  cabinetImpulse: state.cabinet.impulse,
  cabinetBypass: state.cabinet.bypass,
});

const mapDispatchToProps = dispatch => ({
  setCabinetImpulse: (e) => dispatch(setCabinetImpulse(e.target.value)),
  setCabinetBypass: (e) => dispatch(setCabinetBypass(e.target.checked)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CabinetSelector);
