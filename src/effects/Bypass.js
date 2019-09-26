import {connect} from "./utils";

export default class Bypass {
  constructor(context, effect) {
    this.effect = effect;
    this.bypass = context.createGain();
    this.effectOut = context.createGain();

    connect(effect, this.effectOut);

    this.setBypass(false);
  }

  getInput() {
    return [this.bypass, this.effect];
  }

  getOutput() {
    return [this.bypass, this.effectOut];
  }

  setBypass(active) {
    this.isActive = active;
    if (active) {
      this.bypass.gain.value = 1;
      this.effectOut.gain.value = 0;
    } else {
      this.bypass.gain.value = 0;
      this.effectOut.gain.value = 1;
    }
  }
}
