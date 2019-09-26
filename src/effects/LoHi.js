import {connect} from "./utils";

export default class LoHi {
  constructor(context) {
    this.lowCutFilter = context.createBiquadFilter();
    this.lowCutFilter.type = "highpass";
    this.lowCutFilter.frequency.value = 20;

    this.hiCutFilter = context.createBiquadFilter();
    this.hiCutFilter.type = "lowpass";
    this.hiCutFilter.frequency.value = 12000;

    connect(this.lowCutFilter, this.hiCutFilter);
  }

  getInput() {
    return this.lowCutFilter;
  }

  getOutput() {
    return this.hiCutFilter;
  }
}
