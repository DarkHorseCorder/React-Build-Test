(this["webpackJsonptomb.finance"]=this["webpackJsonptomb.finance"]||[]).push([[20],{1070:function(t,e,n){"use strict";var o=n(7),a=n(13),r=n(0),i=(n(15),n(19)),s=n(783),c=n(21),l=r.forwardRef((function(t,e){var n=t.classes,c=t.className,l=t.raised,u=void 0!==l&&l,p=Object(a.a)(t,["classes","className","raised"]);return r.createElement(s.a,Object(o.a)({className:Object(i.default)(n.root,c),elevation:u?8:1,ref:e},p))}));e.a=Object(c.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},1188:function(t,e,n){"use strict";var o=n(13),a=n(7),r=n(0),i=(n(15),n(19)),s=n(43),c=n(21),l=n(783),u=n(282),p=Object(u.a)(r.createElement("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),m=Object(u.a)(r.createElement("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),f=Object(u.a)(r.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),d=Object(u.a)(r.createElement("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),h=Object(u.a)(r.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),v=n(822),y=n(36),b={success:r.createElement(p,{fontSize:"inherit"}),warning:r.createElement(m,{fontSize:"inherit"}),error:r.createElement(f,{fontSize:"inherit"}),info:r.createElement(d,{fontSize:"inherit"})},g=r.createElement(h,{fontSize:"small"}),T=r.forwardRef((function(t,e){var n=t.action,s=t.children,c=t.classes,u=t.className,p=t.closeText,m=void 0===p?"Close":p,f=t.color,d=t.icon,h=t.iconMapping,T=void 0===h?b:h,S=t.onClose,O=t.role,C=void 0===O?"alert":O,D=t.severity,w=void 0===D?"success":D,E=t.variant,M=void 0===E?"standard":E,j=Object(o.a)(t,["action","children","classes","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"]);return r.createElement(l.a,Object(a.a)({role:C,square:!0,elevation:0,className:Object(i.default)(c.root,c["".concat(M).concat(Object(y.a)(f||w))],u),ref:e},j),!1!==d?r.createElement("div",{className:c.icon},d||T[w]||b[w]):null,r.createElement("div",{className:c.message},s),null!=n?r.createElement("div",{className:c.action},n):null,null==n&&S?r.createElement("div",{className:c.action},r.createElement(v.a,{size:"small","aria-label":m,title:m,color:"inherit",onClick:S},g)):null)}));e.a=Object(c.a)((function(t){var e="light"===t.palette.type?s.a:s.d,n="light"===t.palette.type?s.d:s.a;return{root:Object(a.a)({},t.typography.body2,{borderRadius:t.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"}),standardSuccess:{color:e(t.palette.success.main,.6),backgroundColor:n(t.palette.success.main,.9),"& $icon":{color:t.palette.success.main}},standardInfo:{color:e(t.palette.info.main,.6),backgroundColor:n(t.palette.info.main,.9),"& $icon":{color:t.palette.info.main}},standardWarning:{color:e(t.palette.warning.main,.6),backgroundColor:n(t.palette.warning.main,.9),"& $icon":{color:t.palette.warning.main}},standardError:{color:e(t.palette.error.main,.6),backgroundColor:n(t.palette.error.main,.9),"& $icon":{color:t.palette.error.main}},outlinedSuccess:{color:e(t.palette.success.main,.6),border:"1px solid ".concat(t.palette.success.main),"& $icon":{color:t.palette.success.main}},outlinedInfo:{color:e(t.palette.info.main,.6),border:"1px solid ".concat(t.palette.info.main),"& $icon":{color:t.palette.info.main}},outlinedWarning:{color:e(t.palette.warning.main,.6),border:"1px solid ".concat(t.palette.warning.main),"& $icon":{color:t.palette.warning.main}},outlinedError:{color:e(t.palette.error.main,.6),border:"1px solid ".concat(t.palette.error.main),"& $icon":{color:t.palette.error.main}},filledSuccess:{color:"#fff",fontWeight:t.typography.fontWeightMedium,backgroundColor:t.palette.success.main},filledInfo:{color:"#fff",fontWeight:t.typography.fontWeightMedium,backgroundColor:t.palette.info.main},filledWarning:{color:"#fff",fontWeight:t.typography.fontWeightMedium,backgroundColor:t.palette.warning.main},filledError:{color:"#fff",fontWeight:t.typography.fontWeightMedium,backgroundColor:t.palette.error.main},icon:{marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9},message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiAlert"})(T)},1210:function(t,e,n){"use strict";var o=n(7),a=n(13),r=n(0),i=(n(15),n(19)),s=n(21),c=r.forwardRef((function(t,e){var n=t.classes,s=t.className,c=t.component,l=void 0===c?"div":c,u=Object(a.a)(t,["classes","className","component"]);return r.createElement(l,Object(o.a)({className:Object(i.default)(n.root,s),ref:e},u))}));e.a=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(c)},1213:function(t,e,n){"use strict";var o=n(0),a=n(15);function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=l(t);if(e){var a=l(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return p(this,n)}}function f(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(t);if(0===e)return n;var o=n.match(/(.*?)([0-9]+)(.*)/),a=o?o[1]:"",r=o?o[3]:"",i=o?o[2]:n,s=i.length>=e?i:(f(Array(e)).map((function(){return"0"})).join("")+i).slice(-1*e);return"".concat(a).concat(s).concat(r)}var v={daysInHours:!1,zeroPadTime:2};function y(t,e){var n=t.days,o=t.hours,a=t.minutes,r=t.seconds,i=Object.assign(Object.assign({},v),e),s=i.daysInHours,c=i.zeroPadTime,l=i.zeroPadDays,u=void 0===l?c:l,p=Math.min(2,c),m=s?h(o+24*n,c):h(o,p);return{days:s?"":h(n,u),hours:m,minutes:h(a,p),seconds:h(r,p)}}var b=function(t){c(n,t);var e=m(n);function n(){var t;return r(this,n),(t=e.apply(this,arguments)).state={count:t.props.count||3},t.startCountdown=function(){t.interval=window.setInterval((function(){0===t.state.count-1?(t.stopCountdown(),t.props.onComplete&&t.props.onComplete()):t.setState((function(t){return{count:t.count-1}}))}),1e3)},t.stopCountdown=function(){clearInterval(t.interval)},t.addTime=function(e){t.stopCountdown(),t.setState((function(t){return{count:t.count+e}}),t.startCountdown)},t}return s(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?Object(o.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(o.Component);b.propTypes={count:a.number,children:a.element,onComplete:a.func};var g=function(t){c(n,t);var e=m(n);function n(t){var a;if(r(this,n),(a=e.call(this,t)).mounted=!1,a.initialTimestamp=a.calcOffsetStartTimestamp(),a.offsetStartTimestamp=a.props.autoStart?0:a.initialTimestamp,a.offsetTime=0,a.legacyMode=!1,a.legacyCountdownRef=Object(o.createRef)(),a.tick=function(){var t=a.calcTimeDelta(),e=t.completed&&!a.props.overtime?void 0:a.props.onTick;a.setTimeDeltaState(t,void 0,e)},a.start=function(){if(!a.isStarted()){var t=a.offsetStartTimestamp;a.offsetStartTimestamp=0,a.offsetTime+=t?a.calcOffsetStartTimestamp()-t:0;var e=a.calcTimeDelta();a.setTimeDeltaState(e,"STARTED",a.props.onStart),a.props.controlled||e.completed&&!a.props.overtime||(a.clearTimer(),a.interval=window.setInterval(a.tick,a.props.intervalDelay))}},a.pause=function(){a.isPaused()||(a.clearTimer(),a.offsetStartTimestamp=a.calcOffsetStartTimestamp(),a.setTimeDeltaState(a.state.timeDelta,"PAUSED",a.props.onPause))},a.stop=function(){a.isStopped()||(a.clearTimer(),a.offsetStartTimestamp=a.calcOffsetStartTimestamp(),a.offsetTime=a.offsetStartTimestamp-a.initialTimestamp,a.setTimeDeltaState(a.calcTimeDelta(),"STOPPED",a.props.onStop))},a.isStarted=function(){return a.isStatus("STARTED")},a.isPaused=function(){return a.isStatus("PAUSED")},a.isStopped=function(){return a.isStatus("STOPPED")},a.isCompleted=function(){return a.isStatus("COMPLETED")},a.handleOnComplete=function(t){a.props.onComplete&&a.props.onComplete(t)},t.date){var i=a.calcTimeDelta();a.state={timeDelta:i,status:i.completed?"COMPLETED":"STOPPED"}}else a.legacyMode=!0;return a}return s(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.props.date!==t.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var t=this.props,e=t.date,n=t.now,o=t.precision,a=t.controlled,r=t.overtime;return function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.now,a=void 0===o?Date.now:o,r=n.precision,i=void 0===r?0:r,s=n.controlled,c=n.offsetTime,l=void 0===c?0:c,u=n.overtime;e="string"===typeof t?new Date(t).getTime():t instanceof Date?t.getTime():t,s||(e+=l);var p=s?e:e-a(),m=Math.min(20,Math.max(0,i)),f=Math.round(1e3*parseFloat(((u?p:Math.max(0,p))/1e3).toFixed(m))),d=Math.abs(f)/1e3;return{total:f,days:Math.floor(d/86400),hours:Math.floor(d/3600%24),minutes:Math.floor(d/60%60),seconds:Math.floor(d%60),milliseconds:Number((d%1*1e3).toFixed()),completed:f<=0}}(e,{now:n,precision:o,controlled:a,offsetTime:this.offsetTime,overtime:r})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.current.addTime(t)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(t){return this.state.status===t}},{key:"setTimeDeltaState",value:function(t,e,n){var o=this;if(this.mounted){var a;!this.state.timeDelta.completed&&t.completed&&(this.props.overtime||this.clearTimer(),a=this.handleOnComplete);return this.setState((function(n){var a=e||n.status;return t.completed&&!o.props.overtime?a="COMPLETED":e||"COMPLETED"!==a||(a="STOPPED"),{timeDelta:t,status:a}}),(function(){n&&n(o.state.timeDelta),a&&a(o.state.timeDelta)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t=this.props,e=t.daysInHours,n=t.zeroPadTime,o=t.zeroPadDays,a=this.state.timeDelta;return Object.assign(Object.assign({},a),{api:this.getApi(),props:this.props,formatted:y(a,{daysInHours:e,zeroPadTime:n,zeroPadDays:o})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,e=t.count,n=t.children,a=t.onComplete;return Object(o.createElement)(b,{ref:this.legacyCountdownRef,count:e,onComplete:a},n)}var r=this.props,i=r.className,s=r.overtime,c=r.children,l=r.renderer,u=this.getRenderProps();if(l)return l(u);if(c&&this.state.timeDelta.completed&&!s)return Object(o.cloneElement)(c,{countdown:u});var p=u.formatted,m=p.days,f=p.hours,d=p.minutes,h=p.seconds;return Object(o.createElement)("span",{className:i},u.total<0?"-":"",m,m?":":"",f,":",d,":",h)}}]),n}(o.Component);g.defaultProps=Object.assign(Object.assign({},v),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),g.propTypes={date:Object(a.oneOfType)([Object(a.instanceOf)(Date),a.string,a.number]),daysInHours:a.bool,zeroPadTime:a.number,zeroPadDays:a.number,controlled:a.bool,intervalDelay:a.number,precision:a.number,autoStart:a.bool,overtime:a.bool,className:a.string,children:a.element,renderer:a.func,now:a.func,onMount:a.func,onStart:a.func,onPause:a.func,onStop:a.func,onTick:a.func,onComplete:a.func},e.a=g}}]);
//# sourceMappingURL=20.5121ec0c.chunk.js.map