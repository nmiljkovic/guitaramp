(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(21).concat([function(e,t,n){e.exports=n.p+"static/media/pcm90cleanplate.ce654815.wav"},function(e,t,n){e.exports=n.p+"static/media/parking-garage.2c0a9528.wav"},function(e,t,n){e.exports=n.p+"static/media/scala-milan-opera.5e8146d9.wav"},,function(e,t,n){e.exports=n.p+"static/media/Allure_59_Tweed_P10N.62b177eb.wav"},function(e,t,n){e.exports=n.p+"static/media/Allure_64_A30_G12.9f93c5df.wav"},function(e,t,n){e.exports=n.p+"static/media/Allure_64_USDeluxe_P12N.1f523840.wav"},function(e,t,n){e.exports=n.p+"static/media/Allure_67_Brit_Greenback.49f49da7.wav"},function(e,t,n){e.exports=n.p+"static/media/Marshall1960.d2bdc216.wav"},function(e,t,n){e.exports=n.p+"static/media/MesaBoogie57TS.a96aabe5.wav"},function(e,t,n){e.exports=n.p+"static/media/vox_tweed_1x12.7fa61919.wav"},function(e,t,n){e.exports=n.p+"static/media/Plexi Lead Channel.0ecb4c85.wav"},,function(e,t,n){e.exports=n(56)},,,,,function(e,t,n){},,,,,,,function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),s=n.n(i),u=n(14),c=n(2),l=n(3),o=n(8),p=n(7),m=n(9),v=(n(39),n(4)),h=n(1),d={bypass:!1,gain:.5,curve:"blues"},b={blues:.5,sunshine:.2,driver:.2,sustained:.3,arch:.2,cubic:0};var f=function(e){return{type:"SET_DISTORTION_BYPASS",bypass:e}},E=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).toggleCrunch=function(){n.props.setDistortionBypass(!n.props.distortionBypass)},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="crunch-switch";return e+=this.props.distortionBypass?" switch-clean":" switch-crunch",a.createElement("div",{className:"crunch"},a.createElement("div",{style:{textAlign:"center"}},"CLEAN / CRUNCH"),a.createElement("div",{style:{display:"flex",justifyContent:"center"},onClick:this.toggleCrunch},a.createElement("div",{className:e},a.createElement("div",{className:"crunch-switch-inner"}))))}}]),t}(a.Component),y={setDistortionBypass:f},g=Object(v.b)(function(e){return{distortionBypass:e.distortion.bypass}},y)(E),O=(n(46),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(p.a)(t).call(this,e))).render=function(){return a.createElement("div",null,a.createElement("div",{className:"knob-caption"},n.props.caption),a.createElement("div",{className:"knob-container"},a.createElement("div",{className:"knob-ticks"},[0,1,2,3,4,5,6,7,8,9,10].map(function(e){return a.createElement("div",{className:"knob-tick",key:e,style:{transform:"rotate("+(30*e-150)+"deg)"}})}),a.createElement("div",{className:"knob-0"},"0"),a.createElement("div",{className:"knob-10"},"10")),a.createElement("div",{onDoubleClick:n.onReset,className:"knob",ref:"knob",style:{transform:"rotate("+n.getRotationInDegrees()+"deg)"}},a.createElement("div",{className:"knob-dial"}))))},n.onWheel=function(e){e.preventDefault();var t=Math.min(Math.max(-.5,-e.deltaY),.5),a=n.props.max||10,r=n.props.min||0,i=Math.max(r,Math.min(a,n.state.value+t));n.props.onChange(i),n.setState({value:i})},n.onReset=function(){n.props.onChange(0),n.setState({value:0})},n.state={value:"undefined"!==typeof e.value?e.value:5},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({value:"undefined"!==typeof e.value?e.value:5})}},{key:"componentDidMount",value:function(){this.refs.knob.addEventListener("wheel",this.onWheel)}},{key:"componentWillUnmount",value:function(){this.refs.knob.removeEventListener("wheel",this.onWheel)}},{key:"getNormalizedValue",value:function(){var e=this.props.max||10,t=this.props.min||0;return(Math.max(t,Math.min(e,this.state.value))-t)/(e-t)}},{key:"getRotationInDegrees",value:function(){var e=300*this.getNormalizedValue()-150;return Math.round(e)}}]),t}(a.Component)),S=n(21),w=n.n(S),k=n(22),j=n.n(k),_=n(23),x=n.n(_),C=[{id:"pcm90",name:"PCM90",impulse:w.a},{id:"parking-garage",name:"Parking Garage",impulse:j.a},{id:"milan-opera-hall",name:"Milan Opera Hall",impulse:x.a}],T={gain:10,impulse:"pcm90"};var B,I=n(5);function M(e){return function(t){return{type:e,value:t}}}var N=M("SET_BASS"),P=M("SET_MIDDLE"),A=M("SET_TREBLE"),F=M("SET_PRESENCE"),q=M("SET_VOLUME"),R=M("SET_MASTER"),D={bass:0,middle:0,treble:0,presence:0,volume:5,master:10},G=(B={},Object(I.a)(B,"SET_BASS","bass"),Object(I.a)(B,"SET_MIDDLE","middle"),Object(I.a)(B,"SET_TREBLE","treble"),Object(I.a)(B,"SET_PRESENCE","presence"),Object(I.a)(B,"SET_VOLUME","volume"),Object(I.a)(B,"SET_MASTER","master"),B);function L(){return a.createElement("div",{style:{width:2,backgroundColor:"black",marginLeft:10,marginRight:10}})}var V=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props;return a.createElement("div",{style:{display:"flex"}},a.createElement(O,{caption:"bass",value:e.bass,min:-15,max:15,onChange:this.props.setBass}),a.createElement(O,{caption:"middle",value:e.middle,min:-15,max:15,onChange:this.props.setMiddle}),a.createElement(O,{caption:"treble",value:e.treble,min:-15,max:15,onChange:this.props.setTreble}),a.createElement(O,{caption:"presence",value:e.presence,min:-15,max:15,onChange:this.props.setPresence}),a.createElement(L,null),a.createElement(O,{caption:"reverb",value:e.reverb,min:0,max:40,onChange:this.props.setReverb}),a.createElement(L,null),a.createElement(O,{caption:"volume",value:e.volume,min:0,max:10,onChange:this.props.setVolume}),a.createElement(O,{caption:"master",value:e.master,min:0,max:10,onChange:this.props.setMaster}))}}]),t}(a.Component),U={setBass:N,setMiddle:P,setTreble:A,setPresence:F,setReverb:function(e){return{type:"SET_REVERB",gain:e}},setVolume:q,setMaster:R},z=Object(v.b)(function(e){return Object(h.a)({},e.tone,{reverb:e.reverb.gain})},U)(V),Q=n(24),Y=n.n(Q),W=(n(50),n(51),n(52),n(13)),H=n.n(W);function J(e){var t=e.size,n=e.toggle,a=e.on,i=H()("pedal-switch",{on:a});return r.a.createElement("div",{onClick:n,className:i,style:{width:t,height:t}})}J.defaultProps={size:30,on:!1};var X=J;n(53);var K=function(e){var t=e.toggle,n=e.on,a=H()("lamp-switch-inner",{on:n});return r.a.createElement("div",{className:"lamp-switch",onClick:t},r.a.createElement("div",{className:a}))},Z={bypass:!1,bands:[0,0,0,0,0,0,0]},$=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e,t){n.props.setEqBand(e,t)},n.toggleEq=function(){n.props.setEqBypass(!n.props.bypass)},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderSliders",value:function(){var e=this,t={"-15":"-15",0:"0",15:"+15"};return ee.map(function(n,r){var i=a.createElement("div",{key:n.freq,className:"equalizer-control"},a.createElement("div",{className:"equalizer-freq-label"},n.label),a.createElement(Y.a,{min:-15,max:15,tooltip:!1,labels:t,value:e.props.bands[r],orientation:"vertical",onChange:function(t){return e.handleChange(r,t)}}));return t={},i})}},{key:"render",value:function(){var e=!this.props.bypass;return a.createElement("div",null,a.createElement("div",{className:"equalizer"},a.createElement("div",{className:"equalizer-controls"},this.renderSliders())),a.createElement("div",{className:"equalizer-pedal"},a.createElement(X,{on:e,toggle:this.toggleEq}),a.createElement(K,{on:e})))}}]),t}(a.Component),ee=[{freq:100,label:"100"},{freq:200,label:"200"},{freq:400,label:"400"},{freq:800,label:"800"},{freq:1600,label:"1.6k"},{freq:3200,label:"3.2k"},{freq:6400,label:"6.4k"}],te={setEqBand:function(e,t){return{type:"SET_EQ_BAND",index:e,value:t}},setEqBypass:function(e){return{type:"SET_EQ_BYPASS",bypass:e}}},ne=Object(v.b)(function(e){return e.eq},te)($),ae=(n(54),{selectedPreset:"default",presets:null!==localStorage.getItem("presets")?JSON.parse(localStorage.getItem("presets")):[{name:"default",preset:{distortion:{bypass:!1,gain:.5,curve:"blues"},tone:{gain:0,bass:0,middle:0,treble:0,presence:0,volume:10},reverb:{gain:10,impulse:"pcm90"},eq:{bypass:!1,bands:[0,0,0,0,0,0,0]},cabinet:{gain:1,bypass:!1,impulse:"59_tweed"}}}]});var re=Object(v.b)(function(e){return{presets:e.preset.presets,selectedPreset:e.preset.selectedPreset}},{savePreset:function(e){return function(t,n){var a=n(),r=Object(h.a)({},a);delete r.preset,t({type:"SAVE_PRESET",name:e,preset:r})}},loadPreset:function(e){return{type:"LOAD_PRESET",name:e}}})(function(e){var t=e.presets,n=e.selectedPreset,i=e.savePreset,s=e.loadPreset,c=Object(a.useState)(!1),l=Object(u.a)(c,2),o=l[0],p=l[1],m=Object(a.useState)(""),v=Object(u.a)(m,2),h=v[0],d=v[1],b=Object(a.useCallback)(function(){return o?(i(h),s(h),p(!1)):(d(n),p(!0))},[o,h,n]),f=Object(a.useCallback)(function(e){return d(e.target.value)},[]),E=Object(a.useCallback)(function(e){return s(e.target.value)},[]),y=Object(a.useCallback)(function(){return p(!1)},[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"preset-selector"},"Preset:"),o?r.a.createElement("input",{type:"text",value:h,onChange:f,style:{boxSizing:"border-box",width:"150px",padding:"1px 5px"}}):r.a.createElement("select",{id:"preset-selector",value:n,onChange:E,style:{boxSizing:"border-box",width:"150px"}},t.map(function(e){return r.a.createElement("option",{key:e.name},e.name)})),r.a.createElement("button",{onClick:b,style:{marginLeft:"10px"}},"Save"),o?r.a.createElement("button",{onClick:y,style:{marginLeft:"10px"}},"Cancel"):null)}),ie=Object(v.b)(function(e){return{reverbImpulse:e.reverb.impulse}},function(e){return{setReverbImpulse:function(t){return e({type:"SET_REVERB_IMPULSE",id:t.target.value})}}})(function(e){var t=e.reverbImpulse,n=e.setReverbImpulse;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"reverb-impulse"},"Reverb impulse:"),r.a.createElement("select",{id:"reverb-impulse",value:t,onChange:n},C.map(function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.name)})))}),se=n(25),ue=n.n(se),ce=n(26),le=n.n(ce),oe=n(27),pe=n.n(oe),me=n(28),ve=n.n(me),he=n(29),de=n.n(he),be=n(30),fe=n.n(be),Ee=n(31),ye=n.n(Ee),ge=n(32),Oe=n.n(ge),Se=[{id:"59_tweed",name:"'59 Tweed P10N",impulse:ue.a},{id:"64_a30",name:"'64 A30 G12",impulse:le.a},{id:"64_usdeluxe",name:"'64 USDeluxe P12N",impulse:pe.a},{id:"67_brit_greenback",name:"'67 Brit Greenback",impulse:ve.a},{id:"marshall_1960",name:"Marshall 1960",impulse:de.a},{id:"mesa-boogie-57-ts",name:"Mesa Boogie 57 TS",impulse:fe.a},{id:"vox-tweed-1x12",name:"Vox Tweed 1x12",impulse:ye.a},{id:"plexi-lead",name:"Plexi Lead",impulse:Oe.a}];var we={gain:1,bypass:!1,impulse:"59_tweed"},ke=Object(v.b)(function(e){return{cabinetImpulse:e.cabinet.impulse,cabinetBypass:e.cabinet.bypass}},function(e){return{setCabinetImpulse:function(t){return e({type:"SET_CABINET_IMPULSE",id:t.target.value})},setCabinetBypass:function(t){return e({type:"SET_CABINET_BYPASS",bypass:t.target.checked})}}})(function(e){var t=e.cabinetImpulse,n=e.cabinetBypass,a=e.setCabinetImpulse,i=e.setCabinetBypass;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"cabinet-impulse"},"Cabinet impulse:"),r.a.createElement("select",{id:"cabinet-impulse",value:t,onChange:a},Se.map(function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.name)})),r.a.createElement("label",{htmlFor:"cabinet-bypass"},"Bypass"),r.a.createElement("input",{type:"checkbox",id:"cabinet-bypass",checked:n,onChange:i}))}),je=Object(v.b)(function(e){return e.distortion},function(e){return{setCurve:function(t){return e({type:"SET_DISTORTION_CURVE",curve:t.target.value})},setBypass:function(t){return e(f(t.target.checked))},setGain:function(t){return e({type:"SET_DISTORTION_GAIN",gain:t.target.value})}}})(function(e){var t=e.curve,n=e.bypass,a=e.gain,i=e.setCurve,s=e.setBypass,u=e.setGain;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"distortion-curve"},"Distortion curve:"),r.a.createElement("select",{id:"distortion-curve",onChange:i,value:t},r.a.createElement("option",{value:"blues"},"Blues"),r.a.createElement("option",{value:"sunshine"},"Sunshine"),r.a.createElement("option",{value:"driver"},"Driver"),r.a.createElement("option",{value:"sustained"},"Sustained"),r.a.createElement("option",{value:"arch"},"Arch"),r.a.createElement("option",{value:"cubic"},"Cubic")),r.a.createElement("label",{htmlFor:"distortion-bypass"},"Bypass"),r.a.createElement("input",{type:"checkbox",id:"distortion-bypass",checked:n,onChange:s}),r.a.createElement("label",{htmlFor:"distortion-gain"},"Gain"),r.a.createElement("input",{value:a,onChange:u,style:{width:"200px"},type:"range",min:"0",max:"1",step:"0.005"}),r.a.createElement("span",{style:{color:"white"}},a))}),_e=function(){return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"select-input"},r.a.createElement(ie,null)),r.a.createElement("div",{className:"select-input"},r.a.createElement(ke,null)),r.a.createElement("div",{className:"select-input"},r.a.createElement(je,null)),r.a.createElement("div",{className:"select-input"},r.a.createElement(re,null)))};n(55);function xe(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)(function(){var e=function(e){"1"===e.key&&i(!n)};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}},[n,i]),r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"amp"},r.a.createElement("div",{className:"amp-control"},r.a.createElement(z,null),r.a.createElement(g,null)),r.a.createElement("div",{className:"amp-speaker"},n?r.a.createElement(_e,null):r.a.createElement("div",{className:"amp-pedals"},r.a.createElement(ne,null)))))}function Ce(){for(var e=arguments,t=function(t){var n=function e(t){if(t instanceof AudioNode)return[t];if(Array.isArray(t))return Te(t.map(function(t){return e(t)}));return Te(e(t.getOutput()))}(t<0||e.length<=t?void 0:e[t]),a=function e(t){if(t instanceof AudioNode)return[t];if(Array.isArray(t))return Te(t.map(function(t){return e(t)}));return Te(e(t.getInput()))}(t+1<0||e.length<=t+1?void 0:e[t+1]);n.forEach(function(e){a.forEach(function(t){return e.connect(t)})})},n=0;n<arguments.length-1;n++)t(n)}function Te(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.forEach(function(e){Array.isArray(e)?Te(e,t):t.push(e)}),t}var Be=function(){function e(t,n){Object(c.a)(this,e),this.effect=n,this.bypass=t.createGain(),this.effectOut=t.createGain(),Ce(n,this.effectOut),this.setBypass(!1)}return Object(l.a)(e,[{key:"getInput",value:function(){return[this.bypass,this.effect]}},{key:"getOutput",value:function(){return[this.bypass,this.effectOut]}},{key:"setBypass",value:function(e){this.isActive=e,e?(this.bypass.gain.value=1,this.effectOut.gain.value=0):(this.bypass.gain.value=0,this.effectOut.gain.value=1)}}]),e}(),Ie=function(){function e(t){Object(c.a)(this,e),this.bassFilter=t.createBiquadFilter(),this.bassFilter.frequency.value=250,this.bassFilter.gain.value=0,this.bassFilter.type="lowshelf",this.midFilter=t.createBiquadFilter(),this.midFilter.frequency.value=1100,this.midFilter.gain.value=0,this.midFilter.type="peaking",this.trebleFilter=t.createBiquadFilter(),this.trebleFilter.frequency.value=3200,this.trebleFilter.gain.value=0,this.trebleFilter.type="highshelf",this.presenceFilter=t.createBiquadFilter(),this.presenceFilter.frequency.value=2500,this.presenceFilter.gain.value=0,this.presenceFilter.type="peaking",Ce(this.bassFilter,this.midFilter,this.trebleFilter,this.presenceFilter)}return Object(l.a)(e,[{key:"setBass",value:function(e){this.bassFilter.gain.value=e}},{key:"setMiddle",value:function(e){this.midFilter.gain.value=e}},{key:"setTreble",value:function(e){this.trebleFilter.gain.value=e}},{key:"setPresence",value:function(e){this.presenceFilter.gain.value=e}},{key:"getInput",value:function(){return this.bassFilter}},{key:"getOutput",value:function(){return this.trebleFilter}}]),e}(),Me=[100,200,400,800,1600,3200,6400],Ne=function(){function e(t){Object(c.a)(this,e),this.bands=Me.map(function(e){var n=t.createBiquadFilter();return n.type="peaking",n.frequency.value=e,n.gain.value=0,n});for(var n=0;n<this.bands.length-1;n++)this.bands[n].connect(this.bands[n+1])}return Object(l.a)(e,[{key:"setFrequency",value:function(e,t){var n=Me.indexOf(e);if(-1===n)throw new Error("invalid frequency ".concat(e,"Hz"));this.bands[n].gain.value=t}},{key:"getInput",value:function(){return this.bands[0]}},{key:"getOutput",value:function(){return this.bands[this.bands.length-1]}}]),e}(),Pe=function(){function e(t,n){Object(c.a)(this,e),this.context=t,this.convolver=t.createConvolver(),this.input=t.createGain(),this.input.gain.value=1,this.dry=t.createGain(),this.dry.gain.value=1,this.wet=t.createGain(),this.wet.gain.value=0,this.output=t.createGain(),this.output.gain.value=1,Ce(this.input,this.dry,this.output),Ce(this.input,this.convolver,this.wet,this.output),n&&this.setImpulse(n)}return Object(l.a)(e,[{key:"setGain",value:function(e){this.dry.gain.value=Math.cos(e*Math.PI/2),this.wet.gain.value=Math.cos((1-e)*Math.PI/2)}},{key:"setImpulse",value:function(e){var t=this,n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="arraybuffer",n.onload=function(){var e=n.response;t.context.decodeAudioData(e,function(e){t.convolver.buffer=e},function(e){throw new Error("Error with decoding audio data"+e.err)})},n.send()}},{key:"getInput",value:function(){return this.input}},{key:"getOutput",value:function(){return this.output}}]),e}(),Ae={blues:function(e,t,n){for(var a,r=10*e,i=0;i<=n;++i)a=2*i/n-1,t[i]=Math.tanh(.5*r*r*a*Math.PI)},sunshine:function(e,t,n){for(var a,r,i=10*e,s=0;s<=n;++s)a=2*s/n-1,r=Math.tanh(.5*a*i*Math.PI),t[s]=Math.tanh(.5*r*i*Math.PI)*Math.cos(.5*r)},driver:function(e,t,n){for(var a,r=100*e,i=0;i<n;++i)a=2*i/n-1,t[i]=(1+r/101)*a/(1+r/101*Math.abs(a))},sustained:function(e,t,n){for(var a,r,i=1-e,s=0;s<n;++s)r=(a=2*s/n-1)<0?-Math.pow(Math.abs(a),i+.04):Math.pow(a,i),t[s]=Math.tanh(2*r)},arch:function(e,t,n){for(var a,r=100*Math.max(e,.01),i=0;i<n;++i)a=2*i/n-1,t[i]=2/Math.PI*Math.atan(r*a)},cubic:function(e,t,n){for(var a,r=0;r<n;++r)a=2*r/n-1,t[r]=1.5*a-.5*Math.pow(a,3)}};var Fe=function(){function e(t){Object(c.a)(this,e),this.context=t,this.input=t.createGain(),this.output=t.createGain(),this.output.gain.value=.5;var n=t.createBiquadFilter();n.type="highpass",n.frequency.value=33,n.Q.value=Math.SQRT1_2;var a=t.createBiquadFilter();a.type="bandpass",a.Q.value=.7,a.frequency.value=2150,this.waveShaper=t.createWaveShaper(),this.waveShaper.oversample="4x";var r=t.createBiquadFilter();r.type="lowpass",r.Q.value=Math.SQRT1_2,r.frequency.value=12e3;var i=t.createBiquadFilter();i.type="lowpass",i.Q.value=Math.SQRT1_2,i.frequency.value=3200,Ce(this.input,n,a,this.waveShaper,r,i,this.output),this.setDistortionCurve("blues",.5)}return Object(l.a)(e,[{key:"setDistortionCurve",value:function(e,t){e===this.curve&&t===this.gain||(this.waveShaper.curve=function(e,t,n){var a=new Float32Array(t);return Ae[n](e,a,t),a}(t,this.context.sampleRate,e),this.curve=e,this.gain=t)}},{key:"getInput",value:function(){return this.input}},{key:"getOutput",value:function(){return this.output}}]),e}(),qe=function(){function e(t,n,a,r){Object(c.a)(this,e),this.context=t,this.input=n,this.output=a,this.store=r,this.setup()}return Object(l.a)(e,[{key:"setup",value:function(){var e=this,t=this.store,n=this.context,a=n.createGain(),r=new Fe(n),i=new Be(n,r),s=new Ie(n),u=new Ne(n),c=new Be(n,u),l=new Pe(n,C[0].impulse),o=new Pe(n,Se[0].impulse);o.setGain(1);var p=new Be(n,o),m=n.createGain(),v=n.createGain(),h=function(){var n,a=t.getState();a.distortion!==e.distortion&&(r.setDistortionCurve(a.distortion.curve,a.distortion.gain),e.distortion=a.distortion),i.setBypass(a.distortion.bypass),s.setBass(a.tone.bass),s.setMiddle(a.tone.middle),s.setTreble(a.tone.treble),s.setPresence(a.tone.presence),l.setGain(a.reverb.gain/80),e.reverbImpulse!==a.reverb.impulse&&(l.setImpulse((n=a.reverb.impulse,C.find(function(e){return e.id===n}).impulse)),e.reverbImpulse=a.reverb.impulse),e.cabinetImpulse!==a.cabinet.impulse&&(o.setImpulse(function(e){return Se.find(function(t){return t.id===e}).impulse}(a.cabinet.impulse)),e.cabinetImpulse=a.cabinet.impulse),p.setBypass(a.cabinet.bypass),m.gain.value=a.tone.volume/2,v.gain.value=a.tone.master/4,c.setBypass(a.eq.bypass),Object.keys(a.eq.bands).forEach(function(e,t){var n=100*Math.pow(2,t);u.setFrequency(n,e)})};h(),t.subscribe(h),Ce(this.input,a,i,s,c,l,p,m,v,this.output)}}]),e}(),Re=n(11),De=Object(Re.c)({distortion:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_DISTORTION_BYPASS":return Object(h.a)({},t,{bypass:n.bypass});case"SET_DISTORTION_CURVE":return Object(h.a)({},t,{curve:n.curve,gain:(e=n.curve,b.hasOwnProperty(e)?b[e]:1)});case"SET_DISTORTION_GAIN":return Object(h.a)({},t,{gain:n.gain});default:return t}},tone:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;if(!G.hasOwnProperty(t.type))return e;var n=G[t.type];return Object(h.a)({},e,Object(I.a)({},n,t.value))},reverb:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_REVERB":return Object(h.a)({},e,{gain:t.gain});case"SET_REVERB_IMPULSE":return Object(h.a)({},e,{impulse:t.id});default:return e}},eq:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EQ_BYPASS":return Object(h.a)({},e,{bypass:t.bypass});case"SET_EQ_BAND":var n=e.bands.slice();return n[t.index]=t.value,Object(h.a)({},e,{bands:n});default:return e}},cabinet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CABINET_IMPULSE":return Object(h.a)({},e,{impulse:t.id});case"SET_CABINET_BYPASS":return Object(h.a)({},e,{bypass:t.bypass});default:return e}},preset:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_PRESET":var n=e.presets.findIndex(function(e){return e.name.toLowerCase()===t.name.toLowerCase()}),a=e.presets.slice();return-1!==n&&a.splice(n,1),a=a.concat({name:t.name,preset:t.preset}),console.log(t.preset),a.sort(function(e,t){return e.name-t.name}),Object(h.a)({},e,{presets:a});case"LOAD_PRESET":return Object(h.a)({},e,{selectedPreset:t.name});default:return e}}}),Ge=function(e,t){var n=De(e,t);switch(t.type){case"SAVE_PRESET":return localStorage.setItem("presets",JSON.stringify(n.preset.presets)),n;case"LOAD_PRESET":var a=n.preset.selectedPreset,r=n.preset.presets.find(function(e){return e.name===a});return r?Object(h.a)({},n,r.preset):n}return n},Le=n(33);window.Amplifier=qe,window.BootstrapGuitarAmplifier=function(e){var t=Object(Re.d)(Ge,Object(Re.a)(Le.a)),n=e&&e.hasOwnProperty("element")?e.element:e,a=e&&e.hasOwnProperty("input")?e.input:null,i=e&&e.hasOwnProperty("context")?e.context:new AudioContext,u=i.destination;return n&&s.a.render(r.a.createElement(v.a,{store:t},r.a.createElement(xe,null)),n),function(e){return e?Promise.resolve(e):navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,autoGainControl:!1,noiseSuppression:!1,latency:0}}).then(function(e){return i.createMediaStreamSource(e)})}(a).then(function(e){return{amplifier:new qe(i,e,u,t),store:t,unmount:function(){return s.a.unmountComponentAtNode(n),i.close()}}})}}]),[[34,1,2]]]);
//# sourceMappingURL=main.d4734994.chunk.js.map