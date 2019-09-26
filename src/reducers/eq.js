const initialState = {
  bypass: false,
  bands: [
    0, // 100hz
    0, // 200hz
    0, // 400hz
    0, // 800hz
    0, // 1.6khz
    0, // 3.2khz
    0, // 6.4khz
  ],
};

export const SET_EQ_BAND = "SET_EQ_BAND";
export const SET_EQ_BYPASS = "SET_EQ_BYPASS";

export const setEqBypass = function (bypass) {
  return {
    type: SET_EQ_BYPASS,
    bypass,
  };
};

export const setEqBand = function (index, value) {
  return {
    type: SET_EQ_BAND,
    index, value,
  };
};

export const eqReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EQ_BYPASS:
      return {...state, bypass: action.bypass};
    case SET_EQ_BAND:
      const bands = state.bands.slice();
      bands[action.index] = action.value;
      return {...state, bands};
    default:
      return state;
  }
};
