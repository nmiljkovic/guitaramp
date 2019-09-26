import * as React from "react";
import "./Crunch.css";
import {connect} from "react-redux";
import {setDistortionBypass} from "../reducers/distortion";

class Crunch extends React.Component {

  toggleCrunch = () => {
    this.props.setDistortionBypass(!this.props.distortionBypass);
  };

  render() {
    const clean = this.props.distortionBypass;
    let className = "crunch-switch";
    if (clean) {
      className += " switch-clean";
    } else {
      className += " switch-crunch";
    }

    return (
      <div className="crunch">
        <div style={{textAlign: "center"}}>
          CLEAN / CRUNCH
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center",
        }} onClick={this.toggleCrunch}>
          <div className={className}>
            <div className="crunch-switch-inner"/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  distortionBypass: state.distortion.bypass,
});

const mapDispatchToProps = {
  setDistortionBypass,
};

export default connect(mapStateToProps, mapDispatchToProps)(Crunch);
