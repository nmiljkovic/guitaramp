import React, {useCallback, useState} from "react";
import {connect} from "react-redux";
import {loadPreset, savePreset} from "../../reducers/preset";

function PresetSelector({presets, selectedPreset, savePreset, loadPreset}) {
  const [inEditMode, setEditMode] = useState(false);
  const [presetName, setPresetName] = useState("");

  const onClickSavePreset = useCallback(
    () => {
      if (!inEditMode) {
        setPresetName(selectedPreset);
        return setEditMode(true);
      }

      savePreset(presetName);
      loadPreset(presetName);
      return setEditMode(false);
    },
    [inEditMode, presetName, selectedPreset],
  );

  const onChangePresetName = useCallback(
    (event) => setPresetName(event.target.value),
    [],
  );

  const onSelectNewPreset = useCallback(
    (event) => loadPreset(event.target.value),
    [],
  );

  const onCancelEditMode = useCallback(
    () => setEditMode(false),
    [],
  );

  return (
    <>
      <label htmlFor="preset-selector">Preset:</label>

      {inEditMode ? (
        <input
          type="text"
          value={presetName}
          onChange={onChangePresetName}
          style={{boxSizing: "border-box", width: "150px", padding: "1px 5px"}}
        />
      ) : (
        <select
          id="preset-selector"
          value={selectedPreset}
          onChange={onSelectNewPreset}
          style={{boxSizing: "border-box", width: "150px"}}
        >
          {presets.map(preset =>
            <option key={preset.name}>{preset.name}</option>
          )}
        </select>
      )}

      <button onClick={onClickSavePreset} style={{marginLeft: "10px"}}>
        Save
      </button>

      {inEditMode ? (
        <button onClick={onCancelEditMode} style={{marginLeft: "10px"}}>
          Cancel
        </button>
      ) : null}
    </>
  );
}

const snapshotAndSavePreset = (presetName) => (dispatch, getState) => {
  const state = getState();
  const settings = {...state};
  delete settings.preset;
  dispatch(savePreset(presetName, settings));
};

export default connect(
  state => ({
    presets: state.preset.presets,
    selectedPreset: state.preset.selectedPreset,
  }),
  {
    savePreset: snapshotAndSavePreset,
    loadPreset,
  },
)(PresetSelector);
