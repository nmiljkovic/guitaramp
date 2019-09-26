import allure59tweed from "../impulses/cabinet/Allure_59_Tweed_P10N.wav";
import allure64a30 from "../impulses/cabinet/Allure_64_A30_G12.wav";
import allure64usdeluxe from "../impulses/cabinet/Allure_64_USDeluxe_P12N.wav";
import allure67brit from "../impulses/cabinet/Allure_67_Brit_Greenback.wav";
import marshall1960 from "../impulses/cabinet/Marshall1960.wav";
import mesaboogie57ts from "../impulses/cabinet/MesaBoogie57TS.wav";
import voxtweed1x12 from "../impulses/cabinet/vox_tweed_1x12.wav";
import plexilead from "../impulses/cabinet/Plexi Lead Channel.wav";

export const cabinetImpulses = [
  {
    id: "59_tweed",
    name: "'59 Tweed P10N",
    impulse: allure59tweed,
  },
  {
    id: "64_a30",
    name: "'64 A30 G12",
    impulse: allure64a30,
  },
  {
    id: "64_usdeluxe",
    name: "'64 USDeluxe P12N",
    impulse: allure64usdeluxe,
  },
  {
    id: "67_brit_greenback",
    name: "'67 Brit Greenback",
    impulse: allure67brit,
  },
  {
    id: "marshall_1960",
    name: "Marshall 1960",
    impulse: marshall1960,
  },
  {
    id: "mesa-boogie-57-ts",
    name: "Mesa Boogie 57 TS",
    impulse: mesaboogie57ts,
  },
  {
    id: "vox-tweed-1x12",
    name: "Vox Tweed 1x12",
    impulse: voxtweed1x12,
  },
  {
    id: "plexi-lead",
    name: "Plexi Lead",
    impulse: plexilead,
  },
];

export function getCabinetImpulseUrl(id) {
  return cabinetImpulses.find(impulse => impulse.id === id).impulse;
}

export const SET_CABINET_IMPULSE = "SET_CABINET_IMPULSE";
export const SET_CABINET_BYPASS = "SET_CABINET_BYPASS";

export const setCabinetImpulse = id => ({
  type: SET_CABINET_IMPULSE,
  id,
});

export const setCabinetBypass = bypass => ({type: SET_CABINET_BYPASS, bypass});

const initialState = {
  gain: 1,
  bypass: false,
  impulse: "59_tweed",
};

export const cabinetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CABINET_IMPULSE:
      return {...state, impulse: action.id};
    case SET_CABINET_BYPASS:
      return {...state, bypass: action.bypass};
    default:
      return state;
  }
};
