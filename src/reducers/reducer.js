import {combineReducers} from "redux";
import {eqReducer} from "./eq";
import {toneReducer} from "./tone";
import {cabinetReducer} from "./cabinet";
import {reverbReducer} from "./reverb";
import {distortionReducer} from "./distortion";
import {LOAD_PRESET, presetReducer, SAVE_PRESET} from "./preset";

const reducer = combineReducers({
  distortion: distortionReducer,
  tone: toneReducer,
  reverb: reverbReducer,
  eq: eqReducer,
  cabinet: cabinetReducer,
  preset: presetReducer,
});

export default function (state, action) {
  const newState = reducer(state, action);

  switch (action.type) {
    case SAVE_PRESET:
      localStorage.setItem("presets", JSON.stringify(newState.preset.presets));
      return newState;
    case LOAD_PRESET:
      const selectedPreset = newState.preset.selectedPreset;
      const preset = newState.preset.presets.find(preset => preset.name === selectedPreset);
      if (preset) {
        return {...newState, ...preset.preset};
      }
      return newState;
  }
  return newState;
}
