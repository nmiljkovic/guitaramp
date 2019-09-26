import React from "react";
import {reverbImpulses, setReverbImpulse} from "../../reducers/reverb";
import {connect} from "react-redux";

const AdvancedReverb = ({reverbImpulse, setReverbImpulse}) => (
  <>
    <label htmlFor="reverb-impulse">
      Reverb impulse:
    </label>
    <select id="reverb-impulse"
            value={reverbImpulse}
            onChange={setReverbImpulse}>
      {reverbImpulses.map(impulse => (
        <option value={impulse.id} key={impulse.id}>
          {impulse.name}
        </option>
      ))}
    </select>
  </>
);

const mapStateToProps = state => ({
  reverbImpulse: state.reverb.impulse,
});

const mapDispatchToProps = dispatch => ({
  setReverbImpulse: (e) => dispatch(setReverbImpulse(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedReverb);
