import {connect} from "./utils";

export default class Cabinet {
  constructor(context, impulseUrl) {
    this.context = context;
    this.convolver = context.createConvolver();

    this.input = context.createGain();
    this.input.gain.value = 1;
    this.dry = context.createGain();
    this.dry.gain.value = 1;
    this.wet = context.createGain();
    this.wet.gain.value = 0;
    this.output = context.createGain();
    this.output.gain.value = 1;

    connect(
      this.input,
      this.dry,
      this.output,
    );

    connect(
      this.input,
      this.convolver,
      this.wet,
      this.output,
    );

    if (impulseUrl) {
      this.setImpulse(impulseUrl);
    }
  }

  setGain(gain) {
    this.dry.gain.value = Math.cos(gain * Math.PI / 2);
    this.wet.gain.value = Math.cos((1 - gain) * Math.PI / 2);
  }

  setImpulse(impulseUrl) {
    const ajaxRequest = new XMLHttpRequest();
    ajaxRequest.open("GET", impulseUrl, true);
    ajaxRequest.responseType = "arraybuffer";

    ajaxRequest.onload = () => {
      const audioData = ajaxRequest.response;
      this.context.decodeAudioData(audioData,
        buffer => {
          this.convolver.buffer = buffer;
        },
        e => {
          throw new Error("Error with decoding audio data" + e.err);
        },
      );
    };

    ajaxRequest.send();
  }

  getInput() {
    return this.input;
  }

  getOutput() {
    return this.output;
  }
}
