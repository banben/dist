webpackJsonp([0],{132:function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},134:function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=f[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));f[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function i(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(m){var i=d++;r=p||(p=o()),e=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),e=u.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function a(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function u(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(363),f={},l=s&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){v=n;var o=c(t,e);return r(o),function(e){for(var n=[],i=0;i<o.length;i++){var a=o[i],u=f[a.id];u.refs--,n.push(u)}e?(o=c(t,e),r(o)):o=[];for(var i=0;i<n.length;i++){var u=n[i];if(0===u.refs){for(var s=0;s<u.parts.length;s++)u.parts[s]();delete f[u.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},136:function(t,e,n){"use strict";function r(){var t=n.i(u.a)(),e=n.i(s.a)();return n.i(c.sync)(t,e),{app:new o.default({router:e,store:t,render:function(t){return t(a.a)}}),router:e,store:t}}e.a=r;var o=n(50),i=n(351),a=n.n(i),u=n(343),s=n(340),c=n(95);n.n(c)},339:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(136),o=n.i(r.a)(),i=o.app,a=o.router,u=o.store;window.__INITIAL_STATE__&&u.replaceState(window.__INITIAL_STATE__),a.onReady(function(){a.beforeResolve(function(t,e,n){var r=a.getMatchedComponents(t),o=a.getMatchedComponents(e),i=!1,s=r.filter(function(t,e){return i||(i=o[e]!==t)});if(!s.length)return n();Promise.all(s.map(function(e){if(e.asyncData)return e.asyncData({store:u,route:t})})).then(function(){n()}).catch(n)}),i.$mount("#app")}),"https:"===window.location.protocol&&navigator.serviceWorker&&navigator.serviceWorker.register("/service-worker.js")},340:function(t,e,n){"use strict";(function(t){var r=n(50),o=n(354),i=n.n(o),a=n(352),u=n.n(a),s=n(353),c=n.n(s),f=n(355),l=n.n(f),p=n(94);r.default.use(p.default),e.a=function(){return new p.default({mode:"history",base:t,routes:[{path:"/",component:i.a},{path:"/Topics",component:l.a},{path:"/Counter",component:c.a},{path:"/About",component:u.a}]})}}).call(e,"/")},341:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"getTopics",function(){return i}),n.d(e,"increment",function(){return a}),n.d(e,"decrement",function(){return u});var r=n(93),o=n.n(r);o.a.defaults.baseURL="http://jsonplaceholder.typicode.com/";var i=function(t){var e=t.commit;t.state;return o.a.get("posts").then(function(t){"OK"===t.statusText&&e("TOPICS_LIST",t.data)}).catch(function(t){console.log(t)})},a=function(t){return(0,t.commit)("INCREMENT")},u=function(t){return(0,t.commit)("DECREMENT")}},342:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"getTopics",function(){return r}),n.d(e,"getCount",function(){return o});var r=function(t){return t.topics},o=function(t){return t.count}},343:function(t,e,n){"use strict";var r=n(50),o=n(51),i=n(341),a=n(342);r.default.use(o.default);var u={topics:[],count:0},s={TOPICS_LIST:function(t,e){t.topics=e},INCREMENT:function(t){t.count++},DECREMENT:function(t){t.count--}};e.a=function(){return new o.default.Store({state:u,actions:i,mutations:s,getters:a})}},344:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(51),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.default={methods:o({},n.i(r.mapActions)(["increment","decrement"])),computed:o({},n.i(r.mapGetters)({count:"getCount"}))}},345:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(51),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.default={computed:o({},n.i(r.mapGetters)({topics:"getTopics"})),asyncData:function(t){return t.store.dispatch("getTopics")}}},346:function(t,e,n){e=t.exports=n(132)(!1),e.push([t.i,"\nbody {\n  font-family: Helvetica, sans-serif;\n}\n.router-link-active{\n  color: red ;\n}\n",""])},347:function(t,e,n){e=t.exports=n(132)(!1),e.push([t.i,"\nbody {\n  background: gray;\n}\n",""])},348:function(t,e,n){t.exports=n.p+"logo.png?82b9c7a5a3f405032b1db71a25f67021"},351:function(t,e,n){n(361);var r=n(49)(null,n(356),null,null);t.exports=r.exports},352:function(t,e,n){var r=n(49)(null,n(358),null,null);t.exports=r.exports},353:function(t,e,n){n(362);var r=n(49)(n(344),n(360),null,null);t.exports=r.exports},354:function(t,e,n){var r=n(49)(null,n(357),null,null);t.exports=r.exports},355:function(t,e,n){var r=n(49)(n(345),n(359),null,null);t.exports=r.exports},356:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{src:n(348)}}),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/",exact:""}},[t._v("Home")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/topics"}},[t._v("Topics")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/counter"}},[t._v("Counter")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)]),t._v(" "),r("router-view",{staticClass:"view"})],1)},staticRenderFns:[]}},357:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("Home")])},staticRenderFns:[]}},358:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("About")])},staticRenderFns:[]}},359:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.topics,function(e){return n("div",[n("p",[t._v(t._s(e.title))])])}))},staticRenderFns:[]}},360:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{on:{click:t.increment}},[t._v("Increment +1")]),t._v(" "),n("button",{on:{click:t.decrement}},[t._v("Decrement -1")]),t._v(" "),n("h3",[t._v("Count is "+t._s(t.count))])])},staticRenderFns:[]}},361:function(t,e,n){var r=n(346);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(134)("6183ee1f",r,!0)},362:function(t,e,n){var r=n(347);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(134)("0e691ca2",r,!0)},363:function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],u=i[1],s=i[2],c=i[3],f={id:t+":"+o,css:u,media:s,sourceMap:c};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}},49:function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(o=t,i=t.default);var u="function"==typeof i?i.options:i;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var s=u.computed||(u.computed={});Object.keys(r).forEach(function(t){var e=r[t];s[t]=function(){return e}})}return{esModule:o,exports:i,options:u}}}},[339]);