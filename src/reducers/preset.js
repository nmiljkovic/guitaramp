const initialPresets = [
  {
    name: "default",
    preset: {
      "distortion": {"bypass": false, "gain": 0.5, "curve": "blues"},
      "tone": {"gain": 0, "bass": 0, "middle": 0, "treble": 0, "presence": 0, "volume": 10},
      "reverb": {"gain": 10, "impulse": "pcm90"},
      "eq": {"bypass": false, "bands": [0, 0, 0, 0, 0, 0, 0]},
      "cabinet": {"gain": 1, "bypass": false, "impulse": "59_tweed"}
    },
  },
];

const presets = localStorage.getItem("presets") !== null ?
  JSON.parse(localStorage.getItem("presets")) :
  initialPresets;

const initialState = {
  selectedPreset: "default",
  presets,
};

export const SAVE_PRESET = "SAVE_PRESET";
export const LOAD_PRESET = "LOAD_PRESET";

export const savePreset = (name, preset) => ({
  type: SAVE_PRESET,
  name, preset,
});

export const loadPreset = (name) => ({
  type: LOAD_PRESET,
  name,
});

export const presetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PRESET:
      const existingPreset = state.presets.findIndex(preset =>
        preset.name.toLowerCase() === action.name.toLowerCase());
      let newPresets = state.presets.slice();
      if (existingPreset !== -1) {
        newPresets.splice(existingPreset, 1);
      }
      newPresets = newPresets.concat({
        name: action.name,
        preset: action.preset,
      });
      console.log(action.preset);
      newPresets.sort((left, right) => left.name - right.name);
      return {...state, presets: newPresets};
    case LOAD_PRESET:
      return {...state, selectedPreset: action.name};
    default:
      return state;
  }
};
