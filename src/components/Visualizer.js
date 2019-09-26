import * as React from "react";
import * as d3 from "d3";

export default class Visualizer extends React.Component {
  sampleSize = 154;
  width = 300;
  height = 230;

  componentWillMount() {
    this.analyser = this.props.store.analyser;
    this.props.store.listen(this._updateState);
  }

  componentWillUnmount() {
    if (this._handle) {
      cancelAnimationFrame(this._handle);
    }
    this.props.store.stopListening(this._updateState);
  }

  componentDidMount() {
    this.svg = d3.select(this.refs.x)
      .append("svg")
      .attr("height", this.height + "px")
      .attr("width", this.width + "px")
      .attr("style", "background-color: white");

    this.svg.selectAll("rect")
      .data(new Array(this.sampleSize))
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * (this.width / this.sampleSize))
      .attr("width", this.width / this.sampleSize);

    this._handle = requestAnimationFrame(this._update);
  }

  _updateState = () => {
    this.analyser = this.props.store.analyser;
  };

  _update = () => {
    window.requestAnimationFrame(this._update);
    if (!this.analyser) {
      return;
    }

    const freqByteData = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(freqByteData);

    let f = [];
    for (let i = 0; i < this.sampleSize; i++) {
      f.push(freqByteData[i]);
    }

    this.svg.selectAll("rect")
      .data(f)
      .attr("y", d => this.height - d / 255 * this.height)
      .attr("height", d => d / 255 * this.height)
      .attr("fill", d => "rgb(0, 0, " + d + ")");
  };

  render() {
    return (
      <div ref="x"/>
    );
  }
}
