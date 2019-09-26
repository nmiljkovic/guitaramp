import React from "react";
import ReactDOM from "react-dom";
import Amp from "./components/Amp";
import Amplifier from "./Amplifier";
import {applyMiddleware, createStore} from "redux";
import reducer from "./reducers/reducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

window.Amplifier = Amplifier;
window.BootstrapGuitarAmplifier = function (opts) {
  const store = createStore(reducer, applyMiddleware(thunk));

  const element = (opts && opts.hasOwnProperty("element")) ?
    opts.element : opts;
  const audioInput = (opts && opts.hasOwnProperty("input")) ?
    opts.input : null;
  const context = (opts && opts.hasOwnProperty("context")) ?
    opts.context : new AudioContext();
  const output = context.destination;

  if (element) {
    ReactDOM.render(
      <Provider store={store}>
        <Amp/>
      </Provider>,
      element,
    );
  }

  function getInput(audioInput) {
    if (audioInput) {
      return Promise.resolve(audioInput);
    }
    return navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: false,
        autoGainControl: false,
        noiseSuppression: false,
        latency: 0,
      },
    }).then(stream => context.createMediaStreamSource(stream));
  }

  return getInput(audioInput)
    .then(input => {
      const amplifier = new Amplifier(context, input, output, store);

      return {
        amplifier,
        store,
        unmount: function () {
          ReactDOM.unmountComponentAtNode(element);
          return context.close();
        },
      };
    });
};
