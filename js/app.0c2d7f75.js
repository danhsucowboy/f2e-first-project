(function(e){function t(t){for(var n,s,c=t[0],a=t[1],l=t[2],u=0,m=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,s=1;s<i.length;s++){var c=i[s];0!==o[c]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=i[0]))}return e}var n={},s={app:0},o={app:0},r=[];function c(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1aa90554"}[e]+".js"}function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.e=function(e){var t=[],i={about:1};s[e]?t.push(s[e]):0!==s[e]&&i[e]&&t.push(s[e]=new Promise((function(t,i){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"bd06da30"}[e]+".css",o=a.p+n,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return t()}var m=document.getElementsByTagName("style");for(c=0;c<m.length;c++){l=m[c],u=l.getAttribute("data-href");if(u===n||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete s[e],d.parentNode.removeChild(d),i(r)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){s[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,i){n=o[e]=[t,i]}));t.push(n[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=c(e);var m=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var i=o[e];if(0!==i){if(i){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",m.name="ChunkLoadError",m.type=n,m.request=s,i[1](m)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/f2e-first-project/",a.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var d=u;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("cd49")},3033:function(e,t,i){"use strict";i("7357")},"3c34":function(e,t,i){"use strict";i("f3c1")},"54b5":function(e,t,i){"use strict";i("5f7d")},"5f7d":function(e,t,i){},"6bf4":function(e,t,i){},"6cc5":function(e,t,i){"use strict";i("8091")},7357:function(e,t,i){},8091:function(e,t,i){},8265:function(e,t,i){"use strict";i("9902")},8309:function(e,t,i){},"97a2":function(e,t,i){"use strict";i("6bf4")},9902:function(e,t,i){},"9a65":function(e,t,i){"use strict";i("8309")},afae:function(e,t,i){"use strict";i("b6c9")},b6c9:function(e,t,i){},cd49:function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("7a23"),s={class:"wrapper"},o={class:"container"},r={key:0,class:"contents"},c={class:"menu-wrapper content-between"};function a(e,t,i,a,l,u){var m=Object(n["v"])("Nav"),d=Object(n["v"])("router-view"),p=Object(n["v"])("Menu"),h=Object(n["v"])("Pomodoro");return Object(n["p"])(),Object(n["d"])("div",s,[Object(n["g"])("div",o,[Object(n["g"])("div",{class:["main-controller",{shiftToMenu:e.rightShift}]},[Object(n["g"])(m,{titleHide:e.panelCloseBtn,onPanelStatus:e.openPanel},null,8,["titleHide","onPanelStatus"])],2),e.rightShift?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("div",r,[Object(n["g"])(d,{missionsToDO:e.missionsList,onNewMission:e.addNewMission,onNewProcessItem:e.changeCurrentItem,onMissionChecked:e.getFinishedId,onMissionUnChecked:e.getUnCheckMission,workRing:e.workRing,breakRing:e.breakRing,onNewWorkRing:e.changeWorkRing,onNewBreakRing:e.changeBreakRing},null,8,["missionsToDO","onNewMission","onNewProcessItem","onMissionChecked","onMissionUnChecked","workRing","breakRing","onNewWorkRing","onNewBreakRing"])])),Object(n["g"])("div",c,[Object(n["g"])(p,{btnActive:e.panelCloseBtn,onCloseClick:e.closePanel},null,8,["btnActive","onCloseClick"])])]),Object(n["g"])(h,{pomodoroShow:e.panelCloseBtn,onClickId:e.getFinishedId,currentItemId:e.getCurrentId,missionsToDo:e.toDoList,onNewMission:e.addNewMission,onNewProcessItem:e.changeCurrentItem},null,8,["pomodoroShow","onClickId","currentItemId","missionsToDo","onNewMission","onNewProcessItem"])])}var l=i("d4ec"),u=i("bee2"),m=i("262e"),d=i("2caf"),p=(i("159b"),i("4de4"),i("9ab4")),h=i("ce1f"),b=Object(n["g"])("div",{class:"nav-icon list"},null,-1),f={key:0,class:"nav-title"},g=Object(n["g"])("div",{class:"nav-icon analytics"},null,-1),O={key:0,class:"nav-title"},k=Object(n["g"])("div",{class:"nav-icon ringtones"},null,-1),j={key:0,class:"nav-title"};function v(e,t,i,s,o,r){var c=Object(n["v"])("router-link");return Object(n["p"])(),Object(n["d"])("div",{class:["option",{alignEnd:e.titleHide}]},[Object(n["g"])(c,{to:"/",class:[e.checkLink("ToDoList"),"item"],onClick:e.linkClicked},{default:Object(n["B"])((function(){return[b,e.titleHide?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("p",f,"to-do list"))]})),_:1},8,["class","onClick"]),Object(n["g"])(c,{to:"/analytics",class:[e.checkLink("Analytics"),"item"],onClick:e.linkClicked},{default:Object(n["B"])((function(){return[g,e.titleHide?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("p",O,"analytics"))]})),_:1},8,["class","onClick"]),Object(n["g"])(c,{to:"/ringtones",class:[e.checkLink("Ringtones"),"item"],onClick:e.linkClicked},{default:Object(n["B"])((function(){return[k,e.titleHide?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("p",j,"ringtones"))]})),_:1},8,["class","onClick"])],2)}i("b0c0");var w=function(e){Object(m["a"])(i,e);var t=Object(d["a"])(i);function i(){return Object(l["a"])(this,i),t.apply(this,arguments)}return Object(u["a"])(i,[{key:"checkLink",value:function(e){return{iconDefaultColor:this.$route.name!==e&&!this.titleHide,iconPrimaryColor:this.$route.name===e&&!this.titleHide,iconSecColor:this.titleHide}}},{key:"linkClicked",value:function(){this.$emit("panelStatus",!0)}}]),i}(h["b"]);w=Object(p["a"])([Object(h["a"])({props:{titleHide:Boolean},emits:{panelStatus:Boolean}})],w);var y=w;i("afae");y.render=v;var C=y,S={class:"interface"},M={key:0,class:"bgPrimaryColor count-ui"},I={class:"process-circle"},P=Object(n["g"])("div",{class:"bg"},null,-1),T={key:2,class:"mission"},D={key:0,class:"contents"},A={class:"currentItem"},B={key:0,class:"showMission"},N={class:"itemProcess"},U={class:"missionTitle"},L={class:"processBoard"},R={key:0,class:"smallCircle"};function x(e,t,i,s,o,r){var c=Object(n["v"])("Orologio"),a=Object(n["v"])("AddMissionBar"),l=Object(n["v"])("MissionItem");return Object(n["p"])(),Object(n["d"])("div",{class:[{mainPanelOpen:e.pomodoroShow},"pomodoro"]},[e.pomodoroShow?(Object(n["p"])(),Object(n["d"])("div",{key:0,class:["isolated count-ui",{workBorder:e.workingStatus,breakBorder:!e.workingStatus}]},[Object(n["g"])("section",{class:"process-wrapper",style:e.cssVars,"data-anim":e.setWrapperAnim},[Object(n["g"])("section",{class:["left circle",{workBgColor:e.workingStatus,breakBgColor:!e.workingStatus}],"data-anim":e.setLeftCircleAnim},null,10,["data-anim"]),Object(n["g"])("section",{class:["right circle",{workBgColor:e.workingStatus,breakBgColor:!e.workingStatus}],"data-anim":e.setRightCircleAnim},null,10,["data-anim"])],12,["data-anim"]),Object(n["g"])("div",{class:["process-circle",e.processBarColor]},[Object(n["g"])("button",{class:["iconCircle",e.iconColor],onClick:t[1]||(t[1]=function(){return e.processPlay&&e.processPlay.apply(e,arguments)})},null,2),Object(n["g"])("button",{class:["stop-circle",e.stopIconColor],onClick:t[2]||(t[2]=function(t){return e.processStop(!0)})},null,2)],2)],2)):Object(n["e"])("",!0),Object(n["g"])("div",S,[e.pomodoroShow?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("div",M,[Object(n["g"])("div",I,[Object(n["g"])("button",{class:["side iconCircle",e.iconColor],onClick:t[3]||(t[3]=function(){return e.processPlay&&e.processPlay.apply(e,arguments)})},null,2),P])])),e.pomodoroShow?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])(c,{key:1,timerProp:e.orologioProp},null,8,["timerProp"])),e.pomodoroShow?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("div",T,Object(n["x"])(e.missionsToDo.length>0?e.getMission.contents:"Clear"),1))]),Object(n["g"])("div",{class:[{bgOpen:e.pomodoroShow,workPanelBgColor:e.workingStatus,breakPanelBgColor:!e.workingStatus},"bg"]},[e.pomodoroShow?(Object(n["p"])(),Object(n["d"])("div",D,[Object(n["g"])(a,{onAdd:e.addNewMission,status:e.workingStatus},null,8,["onAdd","status"]),Object(n["g"])("div",A,[e.missionsToDo.length>0?(Object(n["p"])(),Object(n["d"])("div",B,[Object(n["g"])("button",{class:"missionBtn",onClick:t[4]||(t[4]=function(){return e.currentItemChecked&&e.currentItemChecked.apply(e,arguments)})}),Object(n["g"])("div",N,[Object(n["g"])("div",U,Object(n["x"])(e.getMission.contents),1),Object(n["g"])("div",L,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(e.getMission.processTimeUnits,(function(e){return Object(n["p"])(),Object(n["d"])("div",{class:"doneCircle",key:e})})),128)),e.workingStatus?(Object(n["p"])(),Object(n["d"])("div",R,[Object(n["g"])("section",{class:"process-wrapper",style:e.cssVars,"data-anim":e.setWrapperAnim},[Object(n["g"])("section",{class:"workBgColor left circle","data-anim":e.setLeftCircleAnim},null,8,["data-anim"]),Object(n["g"])("section",{class:"workBgColor right circle","data-anim":e.setRightCircleAnim},null,8,["data-anim"])],12,["data-anim"])])):Object(n["e"])("",!0)])])])):Object(n["e"])("",!0),Object(n["g"])(c,{timerProp:e.orologioProp},null,8,["timerProp"])]),Object(n["g"])("div",{class:["listContents",{allMission:e.displayAll}]},[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(e.toDoSource,(function(t,i){return Object(n["p"])(),Object(n["d"])(l,{key:i,itemProps:{panelOpen:!1,folderTitle:"",item:t,currentId:e.currentItemId},onNewProcessItem:e.checkCurrentItem},null,8,["itemProps","onNewProcessItem"])})),128)),e.missionsToDo.length>4&&!e.displayAll?(Object(n["p"])(),Object(n["d"])("button",{key:0,class:["more",{workColor:e.workingStatus,breakColor:!e.workingStatus}],onClick:t[5]||(t[5]=function(t){return e.displayAll=!0})},"more",2)):Object(n["e"])("",!0)],2)])):Object(n["e"])("",!0)],2)],2)}i("a9e3");function E(e,t,i,s,o,r){return Object(n["p"])(),Object(n["d"])("div",{class:["timer",{workColor:e.timerProp.status,breakColor:!e.timerProp.status}]},Object(n["x"])(e.timerProp.currentId>0?e.showCountingTime:"Clear"),3)}i("99af");var $=function(e){Object(m["a"])(i,e);var t=Object(d["a"])(i);function i(){return Object(l["a"])(this,i),t.apply(this,arguments)}return Object(u["a"])(i,[{key:"showCountingTime",get:function(){return this.timerProp.currentId>0?0===this.timerProp.mode?this.timerProp.timeUnit<10?"0".concat(this.timerProp.timeUnit,":00"):this.timerProp.timeUnit+":00":this.timerProp.processMin<10&&this.timerProp.processSec<10?"0".concat(this.timerProp.processMin,":0").concat(this.timerProp.processSec):this.timerProp.processMin<10?"0".concat(this.timerProp.processMin,":").concat(this.timerProp.processSec):this.timerProp.processSec<10?"".concat(this.timerProp.processMin,":0").concat(this.timerProp.processSec):"".concat(this.timerProp.processMin,":").concat(this.timerProp.processSec):"Clear"}}]),i}(h["b"]);$=Object(p["a"])([Object(h["a"])({props:{timerProp:{status:Boolean,currentId:Number,processMode:Number,timeUnit:Number,processMin:Number,processSec:Number}},data:function(){return{delayTime:0,rightDuration:0,leftDuration:0}}})],$);var H=$;i("54b5");H.render=E;var W=H,_={class:"newMissionBar"};function F(e,t,i,s,o,r){return Object(n["p"])(),Object(n["d"])("div",_,[Object(n["C"])(Object(n["g"])("input",{class:["missionInput",{workColor:e.status,breakColor:!e.status}],type:"text",placeholder:"add a new mission…","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.newMission=t}),onKeyup:t[2]||(t[2]=Object(n["D"])((function(){return e.emitNewMission&&e.emitNewMission.apply(e,arguments)}),["enter"]))},null,34),[[n["z"],e.newMission]]),Object(n["g"])("button",{class:["addMission",{workBgColor:e.status,breakBgColor:!e.status}],onClick:t[3]||(t[3]=function(){return e.emitNewMission&&e.emitNewMission.apply(e,arguments)})},null,2)])}var V=function(e){Object(m["a"])(i,e);var t=Object(d["a"])(i);function i(){return Object(l["a"])(this,i),t.apply(this,arguments)}return Object(u["a"])(i,[{key:"emitNewMission",value:function(){void 0!==this.newMission&&""!==this.newMission&&(this.$emit("add",this.newMission),this.newMission="")}}]),i}(h["b"]);V=Object(p["a"])([Object(h["a"])({data:function(){return{newMission:""}},props:{status:Boolean},emits:{add:String}})],V);var q=V;i("8265");q.render=F;var J=q,K={key:1,class:"processTimeRecord"},z={key:2,class:"processTimeRecord"},X=Object(n["g"])("div",{class:"circleUnit"},null,-1),G={class:"unitCounts"};function Q(e,t,i,s,o,r){return Object(n["p"])(),Object(n["d"])("div",{class:["listItem",{borderPrimaryColor:e.itemProps.panelOpen,borderSecColor:!e.itemProps.panelOpen}]},[Object(n["g"])("button",{class:[e.missionStatus,{bgWhite:e.itemProps.panelOpen,bgPrimaryColor:!e.itemProps.panelOpen}],onClick:t[1]||(t[1]=function(){return e.missionChecked&&e.missionChecked.apply(e,arguments)})},null,2),Object(n["g"])("div",{class:["missionTitle",[e.textDecorate,{white:e.itemProps.panelOpen,primaryColor:!e.itemProps.panelOpen}]]},Object(n["x"])(e.itemProps.item.contents),3),"done"!==e.itemProps.folderTitle?(Object(n["p"])(),Object(n["d"])("button",{key:0,class:["starter",{bgWhite:e.itemProps.panelOpen,bgPrimaryColor:!e.itemProps.panelOpen}],onClick:t[2]||(t[2]=function(){return e.missionStart&&e.missionStart.apply(e,arguments)})},null,2)):Object(n["e"])("",!0),"done"===e.itemProps.folderTitle&&e.itemProps.item.processTimeUnits<8?(Object(n["p"])(),Object(n["d"])("div",K,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(e.itemProps.item.processTimeUnits,(function(e){return Object(n["p"])(),Object(n["d"])("div",{class:"circleUnit",key:e})})),128))])):"done"===e.itemProps.folderTitle&&e.itemProps.item.processTimeUnits>=8?(Object(n["p"])(),Object(n["d"])("div",z,[X,Object(n["g"])("p",G,"X "+Object(n["x"])(e.itemProps.item.processTimeUnits),1)])):Object(n["e"])("",!0)],2)}var Y=function(e){Object(m["a"])(i,e);var t=Object(d["a"])(i);function i(){var e;return Object(l["a"])(this,i),e=t.apply(this,arguments),e.missionStatus="uncheck",e.textDecorate="",e}return Object(u["a"])(i,[{key:"created",value:function(){"done"===this.itemProps.folderTitle&&(this.missionStatus="check",this.textDecorate="line-through")}},{key:"missionChecked",value:function(){this.itemProps.item.checkStatus=!this.itemProps.item.checkStatus,this.$emit("clickId",this.itemProps.item.id)}},{key:"missionStart",value:function(){this.$emit("newProcessItem",this.itemProps.item.id)}}]),i}(h["b"]);Y=Object(p["a"])([Object(h["a"])({props:{itemProps:{panelOpen:Boolean,folderTitle:String,item:Object,currentId:Number}},emits:{clickId:Number,newProcessItem:Number},computed:{checkMode:function(){return!!this.itemProps.panelOpen||this.itemProps.item.id!==this.itemProps.currentId}}})],Y);var Z=Y;i("9a65");Z.render=Q;var ee=Z,te=function(e){Object(m["a"])(i,e);var t=Object(d["a"])(i);function i(){var e;return Object(l["a"])(this,i),e=t.apply(this,arguments),e.missionStatus="uncheck",e.displayAll=!1,e.processMode=0,e.wrapperAnim="",e.leftCircleAnim="",e.rightCircleAnim="",e.secTimer={timerId:0,start:0,remaining:1e3},e.minTimer={timerId:0,start:0,remaining:6e4},e.processingTime=0,e.breakUnit=5,e}return Object(u["a"])(i,[{key:"orologioProp",get:function(){return{status:this.workingStatus,currentId:this.currentItemId,mode:this.processMode,timeUnit:this.getMission.timeUnit,processMin:this.processingTime,processSec:this.oneMinute}}},{key:"setWrapperAnim",get:function(){return this.wrapperAnim},set:function(e){this.wrapperAnim=e}},{key:"setLeftCircleAnim",get:function(){return this.leftCircleAnim},set:function(e){this.leftCircleAnim=e}},{key:"setRightCircleAnim",get:function(){return this.rightCircleAnim},set:function(e){this.rightCircleAnim=e}},{key:"cssVars",get:function(){return 1===this.processMode||2===this.processMode?{"--anime-wrapper-name":"close-wrapper","--anime-right-name":"right-spin","--anime-left-name":"left-spin","--delay-time":this.delayTime+"s","--right-during":this.rightDuration+"s","--left-during":this.leftDuration+"s"}:{"--anime-wrapper-name":"none","--anime-right-name":"none","--anime-left-name":"none"}}},{key:"processBarColor",get:function(){switch(this.processMode){case 0:case 2:return this.workingStatus?"workBgColor workBorder":"breakBgColor breakBorder";case 1:return this.workingStatus?"processBgColor workBorder":"processBgColor breakBorder";default:return""}}},{key:"iconColor",get:function(){switch(this.processMode){case 0:case 2:return this.pomodoroShow?"play":"workBgColor smallPlay";case 1:return this.workingStatus?"workBgColor pause":"breakBgColor pause";default:return""}}},{key:"stopIconColor",get:function(){switch(this.processMode){case 0:case 2:return"processBgColor";case 1:return this.workingStatus?"workBgColor":"breakBgColor";default:return""}}},{key:"addNewMission",value:function(e){var t={id:Math.floor((new Date).valueOf()*Math.random()),contents:e,checkStatus:!1,timeUnit:25,processTimeUnits:0};this.$emit("newMission",t)}},{key:"getCheckedId",value:function(e){this.$emit("missionChecked",e)}},{key:"checkCurrentItem",value:function(e){this.$emit("newProcessItem",e)}},{key:"currentItemChecked",value:function(){this.$emit("clickId",this.currentItemId)}},{key:"countDownMinute",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=0===t?6e4:t;this.processingTime>=0?(this.minTimer.start=Date.now(),clearTimeout(this.minTimer.timerId),this.minTimer.timerId=setTimeout((function(){e.processingTime-=1,e.oneMinute=59,e.countDownMinute(),e.countDownSecond()}),i)):(this.processStop(),this.workingStatus=!this.workingStatus,this.workingStatus?setTimeout((function(){e.start(e.getMission.timeUnit),e.processMode=1,e.setWrapperAnim="base wrapper",e.setLeftCircleAnim="base left",e.setRightCircleAnim="base right"}),100):(this.getMission.processTimeUnits++,setTimeout((function(){e.start(e.breakUnit),e.processMode=1,e.setWrapperAnim="base wrapper",e.setLeftCircleAnim="base left",e.setRightCircleAnim="base right"}),100)))}},{key:"countDownSecond",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=0===t?1e3:t;this.oneMinute>=1&&(this.secTimer.start=Date.now(),clearTimeout(this.secTimer.timerId),this.secTimer.timerId=setTimeout((function(){e.oneMinute-=1,e.countDownSecond()}),i))}},{key:"start",value:function(e){this.processingTime=e;var t=60*this.processingTime;this.delayTime=t/2,this.rightDuration=t/2,this.leftDuration=t,this.processingTime-=1,this.countDownMinute(),this.countDownSecond()}},{key:"pause",value:function(){clearTimeout(this.minTimer.timerId),clearTimeout(this.secTimer.timerId),this.minTimer.remaining-=Date.now()-this.minTimer.start,this.secTimer.remaining-=Date.now()-this.secTimer.start}},{key:"resume",value:function(){this.countDownMinute(this.minTimer.remaining),this.countDownSecond(this.secTimer.remaining)}},{key:"processPlay",value:function(){switch(this.processMode){case 0:this.start(this.getMission.timeUnit),this.processMode=1,this.setWrapperAnim="base wrapper",this.setLeftCircleAnim="base left",this.setRightCircleAnim="base right";break;case 1:this.pause(),this.processMode=2,this.setWrapperAnim="base wrapper pause",this.setLeftCircleAnim="base left pause",this.setRightCircleAnim="base right pause";break;case 2:this.resume(),this.processMode=1,this.setWrapperAnim="base wrapper",this.setLeftCircleAnim="base left",this.setRightCircleAnim="base right";break}}},{key:"processStop",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(this.workingStatus=!0),clearTimeout(this.minTimer.timerId),clearTimeout(this.secTimer.timerId),this.minTimer.remaining=6e4,this.secTimer.remaining=1e3,this.processMode=0,this.setWrapperAnim="",this.setLeftCircleAnim="",this.setRightCircleAnim="",this.processingTime=0,this.oneMinute=59}}]),i}(h["b"]);te=Object(p["a"])([Object(h["a"])({components:{Orologio:W,AddMissionBar:J,MissionItem:ee},props:{pomodoroShow:Boolean,currentItemId:Number,missionsToDo:{type:Array,default:[]}},emits:{newMission:String,missionChecked:Number,clickId:Number,newProcessItem:Number},computed:{toDoSource:function(){var e=this;return this.displayAll?this.missionsToDo.filter((function(t){return t.id!==e.currentItemId})):this.missionsToDo.filter((function(t,i){return t.id!==e.currentItemId&&i<4}))},getMission:function(){var e=this;return this.missionsToDo.filter((function(t){return!t.checkStatus&&t.id===e.currentItemId}))[0]}},data:function(){return{delayTime:0,rightDuration:0,leftDuration:0,oneMinute:59,workingStatus:!0}}})],te);var ie=te;i("3033");ie.render=x;var ne=ie,se={class:"menu"},oe=Object(n["g"])("div",{class:"close"},null,-1),re=Object(n["g"])("div",{class:"title"},"Pomodoro",-1);function ce(e,t,i,s,o,r){return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])("div",se,[e.btnActive?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("button",{key:0,class:"cancelBtn",onClick:t[1]||(t[1]=function(t){return e.$emit("closeClick",!0)})},[oe]))]),re],64)}var ae=function(e){Object(m["a"])(i,e);var t=Object(d["a"])(i);function i(){return Object(l["a"])(this,i),t.apply(this,arguments)}return i}(h["b"]);ae=Object(p["a"])([Object(h["a"])({props:{btnActive:Boolean},emits:{closeClick:Boolean}})],ae);var le=ae;i("97a2");le.render=ce;var ue=le,me=function(e){Object(m["a"])(i,e);var t=Object(d["a"])(i);function i(){var e;return Object(l["a"])(this,i),e=t.apply(this,arguments),e.panelCloseBtn=!0,e.currentId=0,e.rightShift=!0,e}return Object(u["a"])(i,[{key:"getCurrentId",get:function(){return 0===this.currentId?this.toDoList[0].id:this.currentId},set:function(e){this.currentId=e}},{key:"getRandomId",value:function(){return Math.floor((new Date).valueOf()*Math.random())}},{key:"addNewMission",value:function(e){this.missionsList.push(e)}},{key:"changeCurrentItem",value:function(e){this.currentId=e}},{key:"getUnCheckMission",value:function(e){-1===this.currentId&&(this.currentId=e)}},{key:"getFinishedId",value:function(e){this.toDoList.forEach((function(t){t.id===e&&(t.checkStatus=!t.checkStatus)})),this.toDoList.length>0?this.currentId=this.toDoList[0].id:this.currentId=-1}},{key:"openPanel",value:function(e){this.panelCloseBtn=!e,this.rightShift=!1}},{key:"closePanel",value:function(e){this.panelCloseBtn=e,this.rightShift=!0}},{key:"changeWorkRing",value:function(e){this.workRing=e}},{key:"changeBreakRing",value:function(e){this.breakRing=e}}]),i}(h["b"]);me=Object(p["a"])([Object(h["a"])({components:{Nav:C,Pomodoro:ne,Menu:ue},data:function(){return{missionsList:[{id:Math.floor((new Date).valueOf()*Math.random()),contents:"The one minute demo",checkStatus:!1,timeUnit:1,processTimeUnits:0},{id:Math.floor((new Date).valueOf()*Math.random()),contents:"the second thing to do today",checkStatus:!1,timeUnit:25,processTimeUnits:0},{id:Math.floor((new Date).valueOf()*Math.random()),contents:"the third thing to do today",checkStatus:!1,timeUnit:25,processTimeUnits:0},{id:Math.floor((new Date).valueOf()*Math.random()),contents:"the Forth thing to do today",checkStatus:!1,timeUnit:25,processTimeUnits:0},{id:Math.floor((new Date).valueOf()*Math.random()),contents:"complete the keynote",checkStatus:!1,timeUnit:25,processTimeUnits:0},{id:Math.floor((new Date).valueOf()*Math.random()),contents:"prepare presentation",checkStatus:!1,timeUnit:25,processTimeUnits:0},{id:Math.floor((new Date).valueOf()*Math.random()),contents:"mockup of the new case",checkStatus:!0,timeUnit:25,processTimeUnits:4},{id:Math.floor((new Date).valueOf()*Math.random()),contents:"product prototype",checkStatus:!0,timeUnit:25,processTimeUnits:10},{id:Math.floor((new Date).valueOf()*Math.random()),contents:"draw a wireframe",checkStatus:!0,timeUnit:25,processTimeUnits:7},{id:Math.floor((new Date).valueOf()*Math.random()),contents:"website detail refine",checkStatus:!0,timeUnit:25,processTimeUnits:5}],workRing:0,breakRing:0}},computed:{toDoList:function(){return this.missionsList.filter((function(e){return!e.checkStatus}))}}})],me);var de=me;i("6cc5");de.render=a;var pe=de,he=(i("d3b7"),i("3ca3"),i("ddb0"),i("6c02"));function be(e,t,i,s,o,r){var c=Object(n["v"])("AddMissionBar"),a=Object(n["v"])("ListFolder");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])(c,{onAdd:e.addNewMission,status:!0},null,8,["onAdd"]),Object(n["g"])(a,{title:"to-do",foldedSetting:!0,panelStatus:!0,missions:e.missionsToDO,onItemStatus:e.getItemCheckedId,onNewProcessItem:e.checkCurrentItem},null,8,["missions","onItemStatus","onNewProcessItem"]),Object(n["g"])(a,{title:"done",missions:e.missionsToDO,panelStatus:!0,onItemStatus:e.getItemUnCheckedId},null,8,["missions","onItemStatus"])],64)}var fe={class:"folderList"},ge={class:"folderTitle"},Oe={key:0,class:"listItem"},ke={class:"missionTitle"},je={key:1,class:"workColor mention"},ve={key:2,class:"breakColor mention"};function we(e,t,i,s,o,r){var c=Object(n["v"])("MissionItem");return Object(n["p"])(),Object(n["d"])("div",fe,[Object(n["g"])("div",{class:"folderBar",onClick:t[1]||(t[1]=function(){return e.foldList&&e.foldList.apply(e,arguments)})},[Object(n["g"])("p",ge,Object(n["x"])(e.title),1),Object(n["g"])("div",{class:["folderBtn",{open:e.unfolded,close:!e.unfolded}]},null,2)]),e.unfolded?(Object(n["p"])(),Object(n["d"])("div",{key:0,class:["listContents",e.checkFolderType]},[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(e.checkItemStatus,(function(t){return Object(n["p"])(),Object(n["d"])(c,{key:t,itemProps:{panelOpen:e.panelStatus,folderTitle:e.title,item:t},onClickId:e.getIdStatusChange,onNewProcessItem:e.checkCurrentItem},null,8,["itemProps","onClickId","onNewProcessItem"])})),128)),e.checkListEmpty?(Object(n["p"])(),Object(n["d"])("div",Oe,[Object(n["g"])("div",ke,Object(n["x"])("done"===e.title?"Empty":"Clear"),1)])):Object(n["e"])("",!0)],2)):Object(n["e"])("",!0),"to-do"===e.title&&e.checkItemStatus.length>6&&e.unfolded?(Object(n["p"])(),Object(n["d"])("p",je,"Scroll down see MORE")):Object(n["e"])("",!0),"done"===e.title&&e.checkItemStatus.length>4&&e.unfolded?(Object(n["p"])(),Object(n["d"])("p",ve,"Scroll down see your ACHIEVEMENT")):Object(n["e"])("",!0)])}var ye=function(e){Object(m["a"])(i,e);var t=Object(d["a"])(i);function i(){var e;return Object(l["a"])(this,i),e=t.apply(this,arguments),e.unfolded=e.foldedSetting,e}return Object(u["a"])(i,[{key:"foldList",value:function(){this.unfolded=!this.unfolded}},{key:"getIdStatusChange",value:function(e){this.$emit("itemStatus",e)}},{key:"checkCurrentItem",value:function(e){this.$emit("newProcessItem",e)}}]),i}(h["b"]);ye=Object(p["a"])([Object(h["a"])({components:{MissionItem:ee},props:{id:Number,title:String,panelStatus:Boolean,missions:{type:Array,default:function(){return[]}},foldedSetting:{type:Boolean,default:function(){return!1}}},emits:{itemStatus:Number,newProcessItem:Number},computed:{checkListEmpty:function(){return!(this.checkItemStatus.length>=1)},checkFolderType:function(){return"to-do"===this.title?this.checkItemStatus.length>6?"moreMission listToDoHeight":"listToDoHeight":"done"===this.title?this.checkItemStatus.length>4?"moreMission listDoneHeight":"listDoneHeight":""},checkItemStatus:function(){return"done"===this.title?this.missions.filter((function(e){return e.checkStatus})):this.missions.filter((function(e){return!e.checkStatus}))}}})],ye);var Ce=ye;i("3c34");Ce.render=we;var Se=Ce,Me=function(e){Object(m["a"])(i,e);var t=Object(d["a"])(i);function i(){var e;return Object(l["a"])(this,i),e=t.apply(this,arguments),e.listSetting=!0,e}return Object(u["a"])(i,[{key:"addNewMission",value:function(e){var t={id:Math.floor((new Date).valueOf()*Math.random()),contents:e,checkStatus:!1,timeUnit:25,processTimeUnits:0};this.$emit("newMission",t)}},{key:"checkCurrentItem",value:function(e){this.$emit("newProcessItem",e)}},{key:"getItemCheckedId",value:function(e){this.$emit("missionChecked",e)}},{key:"getItemUnCheckedId",value:function(e){this.$emit("missionUnChecked",e)}}]),i}(h["b"]);Me=Object(p["a"])([Object(h["a"])({components:{AddMissionBar:J,ListFolder:Se},props:{missionsToDO:{type:Array,default:[]},finishedToDO:{type:Array,default:[]}},emits:{newMission:String,missionChecked:Number,missionUnChecked:Number,newProcessItem:Number}})],Me);var Ie=Me;Ie.render=be;var Pe=Ie,Te=[{path:"/",name:"ToDoList",component:Pe},{path:"/analytics",name:"Analytics",component:function(){return i.e("about").then(i.bind(null,"41f2"))}},{path:"/ringtones",name:"Ringtones",component:function(){return i.e("about").then(i.bind(null,"13c5"))}}],De=Object(he["a"])({history:Object(he["b"])("/f2e-first-project/"),routes:Te}),Ae=De;Object(n["c"])(pe).use(Ae).mount("#app")},f3c1:function(e,t,i){}});
//# sourceMappingURL=app.0c2d7f75.js.map