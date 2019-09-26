const initialState = {
  bypass: false,
  gain: 0.5,
  curve: "blues",
};

const curveGainMapping = {
  blues: 0.5,
  sunshine: 0.2,
  driver: 0.2,
  sustained: 0.3,
  arch: 0.2,
  cubic: 0,
};

function getGainForCurve(curve) {
  if (curveGainMapping.hasOwnProperty(curve)) {
    return curveGainMapping[curve];
  }
  return 1;
}

export const SET_DISTORTION_BYPASS = "SET_DISTORTION_BYPASS";
export const SET_DISTORTION_CURVE = "SET_DISTORTION_CURVE";
export const SET_DISTORTION_GAIN = "SET_DISTORTION_GAIN";

export const setDistortionBypass = bypass => ({type: SET_DISTORTION_BYPASS, bypass});
export const setDistortionCurve = curve => ({type: SET_DISTORTION_CURVE, curve});
export const setDistortionGain = gain => ({type: SET_DISTORTION_GAIN, gain});

export const distortionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DISTORTION_BYPASS:
      return {...state, bypass: action.bypass};
    case SET_DISTORTION_CURVE:
      return {...state, curve: action.curve, gain: getGainForCurve(action.curve)};
    case SET_DISTORTION_GAIN:
      return {...state, gain: action.gain};
    default:
      return state;
  }
};
