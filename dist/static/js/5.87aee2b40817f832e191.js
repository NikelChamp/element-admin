webpackJsonp([5],{TQvf:function(e,n,t){
/*!
 * clipboard.js v2.0.0
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
var i;i=function(){return function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n,t){var i,o,a,c;c=function(e,n){"use strict";var t,i=(t=n)&&t.__esModule?t:{default:t};var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),c=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(n),this.initSelection()}return a(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px";var t=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=t+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,i.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(n){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":o(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}();e.exports=c},o=[e,t(7)],void 0===(a="function"==typeof(i=c)?i.apply(n,o):i)||(e.exports=a)},function(e,n,t){var i=t(6),o=t(5);e.exports=function(e,n,t){if(!e&&!n&&!t)throw new Error("Missing required arguments");if(!i.string(n))throw new TypeError("Second argument must be a String");if(!i.fn(t))throw new TypeError("Third argument must be a Function");if(i.node(e))return function(e,n,t){return e.addEventListener(n,t),{destroy:function(){e.removeEventListener(n,t)}}}(e,n,t);if(i.nodeList(e))return function(e,n,t){return Array.prototype.forEach.call(e,function(e){e.addEventListener(n,t)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(n,t)})}}}(e,n,t);if(i.string(e))return function(e,n,t){return o(document.body,e,n,t)}(e,n,t);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(e,n){function t(){}t.prototype={on:function(e,n,t){var i=this.e||(this.e={});return(i[e]||(i[e]=[])).push({fn:n,ctx:t}),this},once:function(e,n,t){var i=this;function o(){i.off(e,o),n.apply(t,arguments)}return o._=n,this.on(e,o,t)},emit:function(e){for(var n=[].slice.call(arguments,1),t=((this.e||(this.e={}))[e]||[]).slice(),i=0,o=t.length;i<o;i++)t[i].fn.apply(t[i].ctx,n);return this},off:function(e,n){var t=this.e||(this.e={}),i=t[e],o=[];if(i&&n)for(var a=0,c=i.length;a<c;a++)i[a].fn!==n&&i[a].fn._!==n&&o.push(i[a]);return o.length?t[e]=o:delete t[e],this}},e.exports=t},function(e,n,t){var i,o,a,c;c=function(e,n,t,i){"use strict";var o=r(n),a=r(t),c=r(i);function r(e){return e&&e.__esModule?e:{default:e}}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var s=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();var m=function(e){function n(e,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var i=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return i.resolveOptions(t),i.listenClick(e),i}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,a.default),s(n,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===l(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var n=this;this.listener=(0,c.default)(e,"click",function(e){return n.onClick(e)})}},{key:"onClick",value:function(e){var n=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new o.default({action:this.action(n),target:this.target(n),text:this.text(n),container:this.container,trigger:n,emitter:this})}},{key:"defaultAction",value:function(e){return u("action",e)}},{key:"defaultTarget",value:function(e){var n=u("target",e);if(n)return document.querySelector(n)}},{key:"defaultText",value:function(e){return u("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],n="string"==typeof e?[e]:e,t=!!document.queryCommandSupported;return n.forEach(function(e){t=t&&!!document.queryCommandSupported(e)}),t}}]),n}();function u(e,n){var t="data-clipboard-"+e;if(n.hasAttribute(t))return n.getAttribute(t)}e.exports=m},o=[e,t(0),t(2),t(1)],void 0===(a="function"==typeof(i=c)?i.apply(n,o):i)||(e.exports=a)},function(e,n){var t=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var i=Element.prototype;i.matches=i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector}e.exports=function(e,n){for(;e&&e.nodeType!==t;){if("function"==typeof e.matches&&e.matches(n))return e;e=e.parentNode}}},function(e,n,t){var i=t(4);function o(e,n,t,o,a){var c=function(e,n,t,o){return function(t){t.delegateTarget=i(t.target,n),t.delegateTarget&&o.call(e,t)}}.apply(this,arguments);return e.addEventListener(t,c,a),{destroy:function(){e.removeEventListener(t,c,a)}}}e.exports=function(e,n,t,i,a){return"function"==typeof e.addEventListener?o.apply(null,arguments):"function"==typeof t?o.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return o(e,n,t,i,a)}))}},function(e,n){n.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},n.nodeList=function(e){var t=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===t||"[object HTMLCollection]"===t)&&"length"in e&&(0===e.length||n.node(e[0]))},n.string=function(e){return"string"==typeof e||e instanceof String},n.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,n){e.exports=function(e){var n;if("SELECT"===e.nodeName)e.focus(),n=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var t=e.hasAttribute("readonly");t||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),t||e.removeAttribute("readonly"),n=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var i=window.getSelection(),o=document.createRange();o.selectNodeContents(e),i.removeAllRanges(),i.addRange(o),n=i.toString()}return n}}])},e.exports=i()},norQ:function(e,n){},ripP:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t("TQvf"),o=t.n(i),a=[{name:"icon-lvshihan"},{name:"icon-law"},{name:"icon-wujiaoxing"},{name:"icon-tuichu1"},{name:"icon-zhengcefagui2"},{name:"icon-falvsolid"},{name:"icon-tianjia"},{name:"icon-huidaodingbu"},{name:"icon-guanjiaowangtubiao35"},{name:"icon-xuanxiang"},{name:"icon-lvshiguanli"},{name:"icon-wenzibida"},{name:"icon-zhengcefagui"},{name:"icon-tupian"},{name:"icon-zhexiantu"},{name:"icon-guanzhu"},{name:"icon-lvshi"},{name:"icon-jiaoliu"},{name:"icon-gengduo"},{name:"icon-zhifubao"},{name:"icon-accessory"},{name:"icon-activity"},{name:"icon-activity_fill"},{name:"icon-add"},{name:"icon-addition_fill"},{name:"icon-addition"},{name:"icon-addpeople_fill"},{name:"icon-addpeople"},{name:"icon-addressbook_fill"},{name:"icon-addressbook"},{name:"icon-barrage_fill"},{name:"icon-barrage"},{name:"icon-browse_fill"},{name:"icon-browse"},{name:"icon-brush"},{name:"icon-brush_fill"},{name:"icon-businesscard_fill"},{name:"icon-businesscard"},{name:"icon-camera_fill"},{name:"icon-camera"},{name:"icon-clock_fill"},{name:"icon-clock"},{name:"icon-close"},{name:"icon-collection_fill"},{name:"icon-collection"},{name:"icon-computer_fill"},{name:"icon-computer"},{name:"icon-coordinates_fill"},{name:"icon-coordinates"},{name:"icon-coupons_fill"},{name:"icon-coupons"},{name:"icon-createtask_fill"},{name:"icon-createtask"},{name:"icon-customerservice_fill"},{name:"icon-customerservice"},{name:"icon-delete_fill"},{name:"icon-delete"},{name:"icon-document"},{name:"icon-document_fill"},{name:"icon-dynamic_fill"},{name:"icon-dynamic"},{name:"icon-editor"},{name:"icon-eit"},{name:"icon-emoji_fill"},{name:"icon-emoji"},{name:"icon-empty"},{name:"icon-empty_fill"},{name:"icon-enter"},{name:"icon-enterinto"},{name:"icon-enterinto_fill"},{name:"icon-feedback_fill"},{name:"icon-feedback"},{name:"icon-flag_fill"},{name:"icon-flag"},{name:"icon-flashlight"},{name:"icon-flashlight_fill"},{name:"icon-flip"},{name:"icon-flip_fill"},{name:"icon-fullscreen"},{name:"icon-group"},{name:"icon-group_fill"},{name:"icon-headlines_fill"},{name:"icon-headlines"},{name:"icon-homepage_fill"},{name:"icon-homepage"},{name:"icon-integral_fill"},{name:"icon-integral"},{name:"icon-interactive_fill"},{name:"icon-interactive"},{name:"icon-keyboard"},{name:"icon-label"},{name:"icon-label_fill"},{name:"icon-like_fill"},{name:"icon-like"},{name:"icon-live_fill"},{name:"icon-live"},{name:"icon-lock_fill"},{name:"icon-lock"},{name:"icon-mail"},{name:"icon-mail_fill"},{name:"icon-manage_fill"},{name:"icon-manage"},{name:"icon-message"},{name:"icon-message_fill"},{name:"icon-mine"},{name:"icon-mine_fill"},{name:"icon-mobilephone_fill"},{name:"icon-mobilephone"},{name:"icon-more"},{name:"icon-narrow"},{name:"icon-offline_fill"},{name:"icon-offline"},{name:"icon-order_fill"},{name:"icon-order"},{name:"icon-other"},{name:"icon-people_fill"},{name:"icon-people"},{name:"icon-picture_fill"},{name:"icon-picture"},{name:"icon-play"},{name:"icon-play_fill"},{name:"icon-playon_fill"},{name:"icon-playon"},{name:"icon-praise_fill"},{name:"icon-praise"},{name:"icon-prompt_fill"},{name:"icon-prompt"},{name:"icon-qrcode_fill"},{name:"icon-qrcode"},{name:"icon-redpacket_fill"},{name:"icon-redpacket"},{name:"icon-refresh"},{name:"icon-remind_fill"},{name:"icon-remind"},{name:"icon-return"},{name:"icon-right"},{name:"icon-scan"},{name:"icon-select_fill"},{name:"icon-select"},{name:"icon-send"},{name:"icon-service_fill"},{name:"icon-service"},{name:"icon-setup_fill"},{name:"icon-setup"},{name:"icon-share_fill"},{name:"icon-share"},{name:"icon-shielding_fill"},{name:"icon-shielding"},{name:"icon-smallscreen_fill"},{name:"icon-smallscreen"},{name:"icon-stealth_fill"},{name:"icon-stealth"},{name:"icon-success_fill"},{name:"icon-success"},{name:"icon-suspend"},{name:"icon-switch"},{name:"icon-systemprompt_fill"},{name:"icon-systemprompt"},{name:"icon-tailor"},{name:"icon-task"},{name:"icon-task_fill"},{name:"icon-tasklist_fill"},{name:"icon-tasklist"},{name:"icon-text"},{name:"icon-time_fill"},{name:"icon-time"},{name:"icon-translation_fill"},{name:"icon-translation"},{name:"icon-trash"},{name:"icon-trash_fill"},{name:"icon-undo"},{name:"icon-unlock_fill"},{name:"icon-unlock"},{name:"icon-video"},{name:"icon-video_fill"},{name:"icon-warning_fill"},{name:"icon-warning"},{name:"icon-workbench_fill"},{name:"icon-workbench"},{name:"icon-search"},{name:"icon-searchfill"},{name:"icon-qianniu"},{name:"icon-publishgoods_fill"},{name:"icon-shop_fill"},{name:"icon-transaction_fill"},{name:"icon-packup"},{name:"icon-unfold"},{name:"icon-wangwang"},{name:"icon-financial_fill"},{name:"icon-marketing_fill"},{name:"icon-huidaodingbu1"},{name:"icon-shake"},{name:"icon-decoration_fill"},{name:"icon-icon-test"},{name:"icon-jingcha"}],c=[{name:"icon-wenjian-"},{name:"icon-sousuo-"},{name:"icon-shenfen-"},{name:"icon-shouru"},{name:"icon-shijian-"},{name:"icon-shangpin-"},{name:"icon-shezhi-"},{name:"icon-rongyu-"},{name:"icon-riqi-"},{name:"icon-nanshi-"},{name:"icon-nvshi-"},{name:"icon-mubiao-"},{name:"icon-hezuo-"},{name:"icon-goutong-"},{name:"icon-gongzuo-"},{name:"icon-linggan-"},{name:"icon-liwu-"},{name:"icon-jiangli-"},{name:"icon-ziliao-"},{name:"icon-biaoqian-"},{name:"icon-dangan-"},{name:"icon-dingwei-"},{name:"icon-fasong-"},{name:"icon-anquan-"}],r={name:"iconfont",components:{},data:function(){return{iconfont:a,symbol:c,isLabel:!0}},watch:{},computed:{},methods:{clip:function(e,n){var t=this,i=void 0;i=this.isLabel?n?'<v-icon name="'+e.name+'" symbol></v-icon>':'<v-icon name="'+e.name+'" ></v-icon>':e.name,console.log(i);var a=new o.a(".icon",{text:function(){return i}});a.on("success",function(e){e.clearSelection(),a.destroy(),t.$message({message:"代码已经复制到剪贴板",type:"success"})})}},created:function(){},mounted:function(){}},l={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-row",[t("el-col",[t("el-card",[t("div",{staticClass:"markdown"},[t("h1",[e._v("IconFont 图标 "),t("span",{staticStyle:{"font-size":"16px"}},[e._v("点击图标复制代码到粘贴板")])]),e._v(" "),t("div",[t("el-switch",{attrs:{"active-text":"复制标签","inactive-text":"复制类名"},model:{value:e.isLabel,callback:function(n){e.isLabel=n},expression:"isLabel"}})],1),e._v(" "),t("div",{staticClass:"icon_lists"},[t("div",[t("h3",[e._v("多色图标")])]),e._v(" "),t("el-row",[t("el-col",e._l(e.symbol,function(n){return t("span",{key:n.name,staticClass:"icon-box",on:{click:function(t){e.clip(n,e.symbol)}}},[t("v-icon",{attrs:{name:n.name,symbol:""}})],1)}))],1),e._v(" "),t("div",[t("h3",[e._v("字体图标")])]),e._v(" "),t("el-row",[t("el-col",e._l(e.iconfont,function(n){return t("span",{key:n.name,staticClass:"icon-box",on:{click:function(t){e.clip(n,null)}}},[t("v-icon",{attrs:{name:n.name}})],1)}))],1)],1)])])],1)],1)},staticRenderFns:[]};var s=t("VU/8")(r,l,!1,function(e){t("norQ")},null,null);n.default=s.exports}});
//# sourceMappingURL=5.87aee2b40817f832e191.js.map