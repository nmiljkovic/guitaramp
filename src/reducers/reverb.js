import pcm90cleanplate from "../impulses/reverb/pcm90cleanplate.wav";
import parkingGarage from "../impulses/reverb/parking-garage.wav";
import scalaMilanOpera from "../impulses/reverb/scala-milan-opera.wav";

export const reverbImpulses = [
  {
    id: "pcm90",
    name: "PCM90",
    impulse: pcm90cleanplate,
  },
  {
    id: "parking-garage",
    name: "Parking Garage",
    impulse: parkingGarage,
  },
  {
    id: "milan-opera-hall",
    name: "Milan Opera Hall",
    impulse: scalaMilanOpera,
  },
];

const initialState = {
  gain: 10,
  impulse: "pcm90",
};

export function getReverbImpulseUrl(id) {
  return reverbImpulses.find(impulse => impulse.id === id).impulse;
}

export const SET_REVERB = "SET_REVERB";
export const SET_REVERB_IMPULSE = "SET_REVERB_IMPULSE";

export const setReverb = gain => ({type: SET_REVERB, gain});
export const setReverbImpulse = id => ({type: SET_REVERB_IMPULSE, id});

export const reverbReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REVERB:
      return {...state, gain: action.gain};
    case SET_REVERB_IMPULSE:
      return {...state, impulse: action.id};
    default:
      return state;
  }
};
