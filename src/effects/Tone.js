import {connect} from "./utils";

export default class MidEQ {
  constructor(context) {
    this.bassFilter = context.createBiquadFilter();
    this.bassFilter.frequency.value = 250;
    this.bassFilter.gain.value = 0;
    this.bassFilter.type = "lowshelf";

    this.midFilter = context.createBiquadFilter();
    this.midFilter.frequency.value = 1100;
    this.midFilter.gain.value = 0;
    this.midFilter.type = "peaking";

    this.trebleFilter = context.createBiquadFilter();
    this.trebleFilter.frequency.value = 3200;
    this.trebleFilter.gain.value = 0;
    this.trebleFilter.type = "highshelf";

    this.presenceFilter = context.createBiquadFilter();
    this.presenceFilter.frequency.value = 2500;
    this.presenceFilter.gain.value = 0;
    this.presenceFilter.type = "peaking";

    connect(
      this.bassFilter,
      this.midFilter,
      this.trebleFilter,
      this.presenceFilter,
    );
  }

  setBass(value) {
    this.bassFilter.gain.value = value;
  }

  setMiddle(value) {
    this.midFilter.gain.value = value;
  }

  setTreble(value) {
    this.trebleFilter.gain.value = value;
  }

  setPresence(value) {
    this.presenceFilter.gain.value = value;
  }

  getInput() {
    return this.bassFilter;
  }

  getOutput() {
    return this.trebleFilter;
  }
}
