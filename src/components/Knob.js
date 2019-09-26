import * as React from "react";
import "./Knob.css";

export default class Knob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: (typeof props.value !== "undefined") ? props.value : 5
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: (typeof nextProps.value !== "undefined") ? nextProps.value : 5
    });
  }

  render = () => (
    <div>
      <div className="knob-caption">
        {this.props.caption}
      </div>
      <div className="knob-container">
        <div className="knob-ticks">
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
              <div className="knob-tick"
                   key={i}
                   style={{
                     transform: "rotate(" + (-150 + 30 * i) + "deg)",
                   }}/>
            ))
          }
          <div className="knob-0">0</div>
          <div className="knob-10">10</div>
        </div>
        <div
          onDoubleClick={this.onReset}
          className="knob" ref="knob"
          style={{transform: "rotate(" + this.getRotationInDegrees() + "deg)"}}
        >
          <div className="knob-dial"/>
        </div>
      </div>
    </div>
  );

  componentDidMount() {
    this.refs.knob.addEventListener("wheel", this.onWheel);
  }

  onWheel = (event) => {
    event.preventDefault();

    const diff = Math.min(Math.max(-0.5, -event.deltaY), 0.5);
    const max = this.props.max || 10;
    const min = this.props.min || 0;
    const newValue = Math.max(min, Math.min(max, this.state.value + diff));
    this.props.onChange(newValue);
    this.setState({value: newValue});
  };

  onReset = () => {
    this.props.onChange(0);
    this.setState({value: 0});
  };

  componentWillUnmount() {
    this.refs.knob.removeEventListener("wheel", this.onWheel);
  }

  getNormalizedValue() {
    const max = this.props.max || 10;
    const min = this.props.min || 0;
    const value = Math.max(min, Math.min(max, this.state.value));

    return (value - min) / (max - min);
  }

  getRotationInDegrees() {
    const v = this.getNormalizedValue();
    const degPerVal = v * 300 - 150;
    return Math.round(degPerVal);
  }
}
