(this["webpackJsonptomb.finance"]=this["webpackJsonptomb.finance"]||[]).push([[23],{1691:function(e,t,n){"use strict";n.r(t),n.d(t,"NoEthereumProviderError",(function(){return v})),n.d(t,"ProvidedConnector",(function(){return m})),n.d(t,"UserRejectedRequestError",(function(){return l}));var r=n(855);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e,t,n){return(h=a()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&u(o,n.prototype),o}).apply(null,arguments)}function s(e){var t="function"===typeof Map?new Map:void 0;return(s=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return h(e,arguments,c(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function f(e,t){try{var n=e()}catch(r){return t(r)}return n&&n.then?n.then(void 0,t):n}function p(e){return e.hasOwnProperty("result")?e.result:e}var v=function(e){function t(){var t;return(t=e.call(this)||this).name=t.constructor.name,t.message="No Ethereum provider was passed to the constructor or found on window.ethereum.",t}return i(t,e),t}(s(Error)),l=function(e){function t(){var t;return(t=e.call(this)||this).name=t.constructor.name,t.message="The user rejected the request.",t}return i(t,e),t}(s(Error)),m=function(e){function t(t){var n,r=t.provider,o=void 0===r?window.ethereum:r,i=t.supportedChainIds;return(n=e.call(this,{supportedChainIds:i})||this).provider=o,n.handleNetworkChanged=n.handleNetworkChanged.bind(d(n)),n.handleChainChanged=n.handleChainChanged.bind(d(n)),n.handleAccountsChanged=n.handleAccountsChanged.bind(d(n)),n.handleClose=n.handleClose.bind(d(n)),n}i(t,e);var n=t.prototype;return n.handleChainChanged=function(e){this.emitUpdate({chainId:e,provider:this.provider})},n.handleAccountsChanged=function(e){0===e.length?this.emitDeactivate():this.emitUpdate({account:e[0]})},n.handleClose=function(e,t){this.emitDeactivate()},n.handleNetworkChanged=function(e){this.emitUpdate({chainId:e,provider:this.provider})},n.activate=function(){try{var e,t=function(t){if(n)return t;function i(){return o({provider:r.provider},e?{account:e}:{})}var c=function(){if(!e)return Promise.resolve(r.provider.enable().then((function(e){return e&&p(e)[0]}))).then((function(t){e=t}))}();return c&&c.then?c.then(i):i()},n=!1,r=this;if(!r.provider)throw new v;r.provider.on&&(r.provider.on("chainChanged",r.handleChainChanged),r.provider.on("accountsChanged",r.handleAccountsChanged),r.provider.on("close",r.handleClose),r.provider.on("networkChanged",r.handleNetworkChanged)),r.provider.isMetaMask&&(r.provider.autoRefreshOnNetworkChange=!1);var i=f((function(){return Promise.resolve(r.provider.send("eth_requestAccounts").then((function(e){return p(e)[0]}))).then((function(t){e=t}))}),(function(e){if(4001===e.code)throw new l}));return Promise.resolve(i&&i.then?i.then(t):t(i))}catch(c){return Promise.reject(c)}},n.getProvider=function(){try{return Promise.resolve(this.provider)}catch(e){return Promise.reject(e)}},n.getChainId=function(){try{var e,t=function(){function t(){if(!e)try{e=p(n.provider.send({method:"net_version"}))}catch(t){}return e||(e=n.provider.isDapper?p(n.provider.cachedResults.net_version):n.provider.chainId||n.provider.networkVersion||n.provider._chainId),e}var r=function(){if(!e){var t=f((function(){return Promise.resolve(n.provider.send("net_version").then(p)).then((function(t){e=t}))}),(function(){}));if(t&&t.then)return t.then((function(){}))}}();return r&&r.then?r.then(t):t()},n=this;if(!n.provider)throw new v;var r=f((function(){return Promise.resolve(n.provider.send("eth_chainId").then(p)).then((function(t){e=t}))}),(function(){}));return Promise.resolve(r&&r.then?r.then(t):t())}catch(o){return Promise.reject(o)}},n.getAccount=function(){try{var e,t=function(){function t(){return e||(e=p(n.provider.send({method:"eth_accounts"}))[0]),e}var r=function(){if(!e){var t=f((function(){return Promise.resolve(n.provider.enable().then((function(e){return p(e)[0]}))).then((function(t){e=t}))}),(function(){}));if(t&&t.then)return t.then((function(){}))}}();return r&&r.then?r.then(t):t()},n=this;if(!n.provider)throw new v;var r=f((function(){return Promise.resolve(n.provider.send("eth_accounts").then((function(e){return p(e)[0]}))).then((function(t){e=t}))}),(function(){}));return Promise.resolve(r&&r.then?r.then(t):t())}catch(o){return Promise.reject(o)}},n.deactivate=function(){this.provider&&this.provider.removeListener&&(this.provider.removeListener("chainChanged",this.handleChainChanged),this.provider.removeListener("accountsChanged",this.handleAccountsChanged),this.provider.removeListener("close",this.handleClose),this.provider.removeListener("networkChanged",this.handleNetworkChanged))},n.isAuthorized=function(){try{var e=this;return e.provider?Promise.resolve(f((function(){return Promise.resolve(e.provider.send("eth_accounts").then((function(e){return p(e).length>0})))}),(function(){return!1}))):Promise.resolve(!1)}catch(t){return Promise.reject(t)}},t}(r.a)},855:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(116),o=n(118);var i=function(e){var t,n;function r(t){var n,r=(void 0===t?{}:t).supportedChainIds;return(n=e.call(this)||this).supportedChainIds=r,n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.emitUpdate=function(e){this.emit(o.a.Update,e)},i.emitError=function(e){this.emit(o.a.Error,e)},i.emitDeactivate=function(){this.emit(o.a.Deactivate)},r}(r.EventEmitter)}}]);
//# sourceMappingURL=23.410d7f56.chunk.js.map