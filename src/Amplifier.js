import Bypass from "./effects/Bypass";
import Tone from "./effects/Tone";
import Equalizer from "./effects/Equalizer";
import Convolver from "./effects/Convolver";
import {connect} from "./effects/utils";
import {cabinetImpulses, getCabinetImpulseUrl} from "./reducers/cabinet";
import {getReverbImpulseUrl, reverbImpulses} from "./reducers/reverb";
import Distortion from "./effects/Distortion";

export default class Amplifier {
  constructor(context, input, output, store) {
    this.context = context;
    this.input = input;
    this.output = output;
    this.store = store;

    this.setup();
  }

  setup() {
    const store = this.store;
    const context = this.context;

    const inputGain = context.createGain();

    const distortion = new Distortion(context);
    const distortionBypass = new Bypass(context, distortion);

    const tone = new Tone(context);

    const equalizer = new Equalizer(context);
    const equalizerBypass = new Bypass(context, equalizer);

    const reverb = new Convolver(context, reverbImpulses[0].impulse);

    const cabinet = new Convolver(context, cabinetImpulses[0].impulse);
    cabinet.setGain(1);

    const cabinetBypass = new Bypass(context, cabinet);

    const volume = context.createGain();
    const master = context.createGain();

    const update = () => {
      const state = store.getState();

      if (state.distortion !== this.distortion) {
        distortion.setDistortionCurve(state.distortion.curve, state.distortion.gain);
        this.distortion = state.distortion;
      }
      distortionBypass.setBypass(state.distortion.bypass);

      tone.setBass(state.tone.bass);
      tone.setMiddle(state.tone.middle);
      tone.setTreble(state.tone.treble);
      tone.setPresence(state.tone.presence);

      reverb.setGain(state.reverb.gain / 80);
      if (this.reverbImpulse !== state.reverb.impulse) {
        reverb.setImpulse(getReverbImpulseUrl(state.reverb.impulse));
        this.reverbImpulse = state.reverb.impulse;
      }

      if (this.cabinetImpulse !== state.cabinet.impulse) {
        cabinet.setImpulse(getCabinetImpulseUrl(state.cabinet.impulse));
        this.cabinetImpulse = state.cabinet.impulse;
      }
      cabinetBypass.setBypass(state.cabinet.bypass);

      volume.gain.value = state.tone.volume / 2;
      master.gain.value = state.tone.master / 4;
      equalizerBypass.setBypass(state.eq.bypass);

      Object.keys(state.eq.bands).forEach((value, index) => {
        const freq = 100 * Math.pow(2, index);
        equalizer.setFrequency(freq, value);
      });
    };

    update();
    store.subscribe(update);

    connect(
      this.input,
      inputGain,
      distortionBypass,
      tone,
      equalizerBypass,
      reverb,
      cabinetBypass,
      volume,
      master,
      this.output,
    );
  }
}
