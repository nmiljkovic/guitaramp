// Boss GE-7 Equalizer Pedal
const eqBands = [100, 200, 400, 800, 1600, 3200, 6400];

export default class Equalizer {
  constructor(context) {
    this.bands = eqBands.map(freq => {
      const filter = context.createBiquadFilter();
      filter.type = "peaking";
      filter.frequency.value = freq;
      filter.gain.value = 0;
      return filter;
    });

    for (let i = 0; i < this.bands.length - 1; i++) {
      this.bands[i].connect(this.bands[i + 1]);
    }
  }

  setFrequency(frequency, value) {
    let index = eqBands.indexOf(frequency);
    if (index === -1) {
      throw new Error(`invalid frequency ${frequency}Hz`);
    }
    this.bands[index].gain.value = value;
  }

  getInput() {
    return this.bands[0];
  }

  getOutput() {
    return this.bands[this.bands.length - 1];
  }
}
