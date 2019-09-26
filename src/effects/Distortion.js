import {makeDistortionCurve} from "./distortion_fns";
import {connect} from "./utils";

export default class Distortion {

  constructor(context) {
    this.context = context;
    this.input = context.createGain();
    this.output = context.createGain();
    this.output.gain.value = 0.5;

    const filter1 = context.createBiquadFilter();
    filter1.type = "highpass";
    filter1.frequency.value = 33;
    filter1.Q.value = Math.SQRT1_2;

    const preFilter = context.createBiquadFilter();
    preFilter.type = "bandpass";
    preFilter.Q.value = 0.7;
    preFilter.frequency.value = 2150;

    this.waveShaper = context.createWaveShaper();
    this.waveShaper.oversample = "4x";

    const postFilter = context.createBiquadFilter();
    postFilter.type = "lowpass";
    postFilter.Q.value = Math.SQRT1_2;
    postFilter.frequency.value = 12000;

    const toneFilter = context.createBiquadFilter();
    toneFilter.type = "lowpass";
    toneFilter.Q.value = Math.SQRT1_2;
    toneFilter.frequency.value = 3200;

    connect(this.input, filter1, preFilter, this.waveShaper,
      postFilter, toneFilter, this.output);

    this.setDistortionCurve("blues", 0.5);
  }

  setDistortionCurve(curve, gain) {
    if (curve !== this.curve || gain !== this.gain) {
      this.waveShaper.curve = makeDistortionCurve(gain, this.context.sampleRate, curve);
      this.curve = curve;
      this.gain = gain;
    }
  }

  getInput() {
    return this.input;
  }

  getOutput() {
    return this.output;
  }

}
