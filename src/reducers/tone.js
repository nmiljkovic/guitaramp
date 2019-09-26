function createSetAction(type) {
  return function (value) {
    return {type, value};
  };
}

export const SET_BASS = "SET_BASS";
export const SET_MIDDLE = "SET_MIDDLE";
export const SET_TREBLE = "SET_TREBLE";
export const SET_PRESENCE = "SET_PRESENCE";
export const SET_VOLUME = "SET_VOLUME";
export const SET_MASTER = "SET_MASTER";

export const setBass = createSetAction(SET_BASS);
export const setMiddle = createSetAction(SET_MIDDLE);
export const setTreble = createSetAction(SET_TREBLE);
export const setPresence = createSetAction(SET_PRESENCE);
export const setVolume = createSetAction(SET_VOLUME);
export const setMaster = createSetAction(SET_MASTER);

const initialState = {
  bass: 0,
  middle: 0,
  treble: 0,
  presence: 0,
  volume: 5,
  master: 10,
};

const actionPropertyMap = {
  [SET_BASS]: "bass",
  [SET_MIDDLE]: "middle",
  [SET_TREBLE]: "treble",
  [SET_PRESENCE]: "presence",
  [SET_VOLUME]: "volume",
  [SET_MASTER]: "master",
};

export const toneReducer = (state = initialState, action) => {
  if (!actionPropertyMap.hasOwnProperty(action.type)) {
    return state;
  }
  const property = actionPropertyMap[action.type];
  return {...state, [property]: action.value};
};
