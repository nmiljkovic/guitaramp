import * as React from "react";
import Knob from "./Knob";
import {connect} from "react-redux";
import {setReverb} from "../reducers/reverb";
import {setBass, setMiddle, setPresence, setTreble, setVolume, setMaster} from "../reducers/tone";

function Separator() {
  return <div style={{
    width: 2, backgroundColor: "black",
    marginLeft: 10,
    marginRight: 10,
  }}/>;
}

class Knobs extends React.Component {
  render() {
    const props = this.props;

    return (
      <div style={{display: "flex"}}>
        <Knob caption="bass"
              value={props.bass}
              min={-15} max={15}
              onChange={this.props.setBass}/>
        <Knob caption="middle"
              value={props.middle}
              min={-15} max={15}
              onChange={this.props.setMiddle}/>
        <Knob caption="treble"
              value={props.treble}
              min={-15} max={15}
              onChange={this.props.setTreble}/>
        <Knob caption="presence"
              value={props.presence}
              min={-15} max={15}
              onChange={this.props.setPresence}/>
        <Separator/>
        <Knob caption="reverb"
              value={props.reverb}
              min={0} max={40}
              onChange={this.props.setReverb}
        />
        <Separator/>
        <Knob caption="volume"
              value={props.volume}
              min={0} max={10}
              onChange={this.props.setVolume}/>
        <Knob caption="master"
              value={props.master}
              min={0} max={10}
              onChange={this.props.setMaster}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.tone,
  reverb: state.reverb.gain,
});

const mapDispatchToProps = {
  setBass,
  setMiddle,
  setTreble,
  setPresence,
  setReverb,
  setVolume,
  setMaster,
};

export default connect(mapStateToProps, mapDispatchToProps)(Knobs);
