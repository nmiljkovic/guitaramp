import * as React from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import "./Equalizer.css";
import {connect} from "react-redux";
import PedalSwitch from "./PedalSwitch";
import Lamp from "./Lamp";
import {setEqBand, setEqBypass} from "../reducers/eq";

class Equalizer extends React.Component {
  handleChange = (index, value) => {
    this.props.setEqBand(index, value);
  };

  toggleEq = () => {
    this.props.setEqBypass(!this.props.bypass);
  };

  renderSliders() {
    let labels = {
      "-15": "-15",
      "0": "0",
      "15": "+15",
    };
    return frequencies.map((band, index) => {
      let ret = <div key={band.freq} className="equalizer-control">
        <div className="equalizer-freq-label">{band.label}</div>
        <Slider
          min={-15}
          max={15}
          tooltip={false}
          labels={labels}
          value={this.props.bands[index]}
          orientation='vertical'
          onChange={(value) => this.handleChange(index, value)}
        />
      </div>;
      labels = {};
      return ret;
    });
  }

  render() {
    const on = !this.props.bypass;
    return (
      <div>
        <div className="equalizer">
          <div className="equalizer-controls">
            {this.renderSliders()}
          </div>
        </div>
        <div className="equalizer-pedal">
          <PedalSwitch on={on} toggle={this.toggleEq}/>
          <Lamp on={on}/>
        </div>
      </div>
    );
  }
}

const frequencies = [{
  freq: 100,
  label: "100",
}, {
  freq: 200,
  label: "200",
}, {
  freq: 400,
  label: "400",
}, {
  freq: 800,
  label: "800",
}, {
  freq: 1600,
  label: "1.6k",
}, {
  freq: 3200,
  label: "3.2k",
}, {
  freq: 6400,
  label: "6.4k",
}];

const mapStateToProps = state => state.eq;

const mapDispatchToProps = {
  setEqBand,
  setEqBypass,
};

export default connect(mapStateToProps, mapDispatchToProps)(Equalizer);
