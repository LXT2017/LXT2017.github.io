(function(t){function e(e){for(var a,o,r=e[0],c=e[1],l=e[2],u=0,f=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},s=[];function o(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e234d445"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=a);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=o(t);var l=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",l.name="ChunkLoadError",l.type=a,l.request=s,n[1](l)}i[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0201":function(t,e,n){"use strict";n("1b04")},"034f":function(t,e,n){"use strict";n("85ec")},"069f":function(t,e,n){t.exports=n.p+"img/bqr4.7d732c13.jpg"},"1b04":function(t,e,n){},"40f4":function(t,e,n){t.exports=n.p+"img/yqr2.fea0ea36.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("router-view")],1)])},s=[],o=(n("034f"),n("2877")),r={},c=Object(o["a"])(r,i,s,!1,null,null,null),l=c.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"body1"},[n("div",{staticClass:"top"},[t._v("请输入相应的学生信息")]),n("div",{staticClass:"middle"},[n("div",{staticClass:"info"},[t._v(" 您的身份：")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"input",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.id=e.target.multiple?n:n[0]}}},t._l(t.couponList,(function(e){return n("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})),0),n("div",{staticClass:"info"},[t._v(" 学院：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.college,expression:"college"}],staticClass:"input",domProps:{value:t.college},on:{input:function(e){e.target.composing||(t.college=e.target.value)}}}),t._v("s "),n("div",{staticClass:"info"},[t._v(" 学号：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],staticClass:"input",domProps:{value:t.number},on:{input:function(e){e.target.composing||(t.number=e.target.value)}}}),n("div",{staticClass:"info"},[t._v(" 姓名：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),n("div",{staticClass:"btn",on:{click:t.btn}},[t._v(" 提交 ")])])])},f=[],m=(n("b0c0"),{data:function(){return{id:"",college:"",number:"",name:"",couponList:[{id:"0",name:"本科生"},{id:"1",name:"研究生"}]}},methods:{btn:function(){""!=this.number&&""!=this.college&&""!=this.name&&""!=this.id?(localStorage.setItem("college",this.college),localStorage.setItem("number",this.number),localStorage.setItem("name",this.name),localStorage.setItem("id",this.id),this.$router.push("/info")):alert("请填写正确的信息")}}}),p=m,v=(n("5cc0"),Object(o["a"])(p,d,f,!1,null,"0d3f2896",null)),g=v.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"topBack"}),n("div",{staticClass:"card"},[n("div",{staticClass:"date"},[n("div",[t._v(t._s(t.dateFormat(t.newDate)))]),n("div",[t._v(t._s(t.timeFormat(t.newDate)))])]),t._m(0),n("div",{staticClass:"imageinfo"},[n("img",{staticClass:"image",attrs:{src:t.imgsrc,alt:"qr"}})]),n("div",{staticClass:"middleinfo"},[n("span",{staticClass:"middleinfo1"},[t._v("卢鑫涛")]),n("span",{staticClass:"middleinfo1",staticStyle:{color:"blue"},on:{click:t.fresh}},[t._v("刷新")])])]),t._m(1),n("div",{staticClass:"lastinfo"},[n("span",{staticClass:"lasttext",on:{click:t.history}},[t._v("通行记录")])])])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topinfo"},[n("span",[t._v("信息学院")]),n("span",{staticClass:"xuehao"},[t._v("2017329621094")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottleinfo"},[n("div",[t._v("2021-07-05 至 2021-09-30")]),n("div",[n("span",{staticClass:"bottletext"},[t._v("通行码类型： ")]),n("span",[t._v("普通通行码")])]),n("div",[n("span",{staticClass:"bottletext"},[t._v("剩余次数： ")]),n("span",[t._v("200")])])])}],b={data:function(){return{newDate:new Date,imgsrclist:[n("9597"),n("f522"),n("b1de"),n("069f"),n("c0ca")]}},created:function(){var t=Math.floor(5*Math.random());this.imgsrc=this.imgsrclist[t]},mounted:function(){var t=this;this.timer=setInterval((function(){t.newDate=(new Date).toLocaleString()}))},methods:{dateFormat:function(){var t=new Date,e=(t.getMonth(),t.getMonth()+1),n=t.getDate()<10?"0"+t.getDate():t.getDate();return e+"月"+n+"日 "},timeFormat:function(){var t=new Date,e=t.getHours()<10?"0"+t.getHours():t.getHours(),n=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),a=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return e+":"+n+":"+a},fresh:function(){var t=Math.floor(5*Math.random());console.log(t),this.imgsrc=this.imgsrclist[t]},history:function(){this.$router.push("/history")}}},C=b,w=(n("0201"),Object(o["a"])(C,h,_,!1,null,null,null)),y=w.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["0"==t.id?n("div",{staticClass:"topBackUnderGraduate"}):n("div",{staticClass:"topBackGraduate"}),n("div",{staticClass:"card"},[n("div",{staticClass:"date"},[n("div",[t._v(t._s(t.dateFormat(t.newDate)))]),n("div",[t._v(t._s(t.timeFormat(t.newDate)))])]),n("div",{staticClass:"topinfo"},[n("span",[t._v(t._s(t.college))]),n("span",{staticClass:"xuehao"},[t._v(t._s(t.number))])]),n("div",{staticClass:"imageinfo"},[n("img",{staticClass:"image",attrs:{src:t.imgsrc,alt:"qr"}})]),n("div",{staticClass:"middleinfo"},[n("span",{staticClass:"middleinfo1"},[t._v(t._s(t.name))]),n("span",{staticClass:"middleinfo1",staticStyle:{color:"blue"},on:{click:t.fresh}},[t._v("刷新")])])]),t._m(0),n("div",{staticClass:"lastinfo"},[n("span",{staticClass:"lasttext",on:{click:t.history}},[t._v("通行记录")])])])},D=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottleinfo"},[n("div",[t._v("2021-07-05 至 2021-09-30")]),n("div",[n("span",{staticClass:"bottletext"},[t._v("通行码类型： ")]),n("span",[t._v("普通通行码")])]),n("div",[n("span",{staticClass:"bottletext"},[t._v("剩余次数： ")]),n("span",[t._v("200")])])])}],j={data:function(){return{newDate:new Date,name:"",college:"",number:"",id:"",imgsrcylist:[n("b818"),n("40f4"),n("a265"),n("b90b"),n("c400")],imgsrcblist:[n("9597"),n("f522"),n("b1de"),n("069f"),n("c0ca")]}},created:function(){var t=localStorage.getItem("college"),e=localStorage.getItem("number"),n=localStorage.getItem("name"),a=localStorage.getItem("id");null==t&&null==e&&null==n&&null==a||(this.college=t,this.number=e,this.name=n,this.id=a),this.fresh()},mounted:function(){var t=this;this.timer=setInterval((function(){t.newDate=(new Date).toLocaleString()}))},methods:{dateFormat:function(){var t=new Date,e=(t.getMonth(),t.getMonth()+1),n=t.getDate()<10?"0"+t.getDate():t.getDate();return e+"月"+n+"日 "},timeFormat:function(){var t=new Date,e=t.getHours()<10?"0"+t.getHours():t.getHours(),n=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),a=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return e+":"+n+":"+a},fresh:function(){var t,e=Math.floor(5*Math.random());t=0==this.id?this.imgsrcblist[e]:this.imgsrcylist[e],this.imgsrc=t},history:function(){this.$router.push("/history")}}},S=j,M=(n("b8cb"),Object(o["a"])(S,x,D,!1,null,"61220627",null)),E=M.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"topBack"},[t._v("智慧浙理校园通行码")]),t._m(0),t._m(1),n("div",[n("div",{staticClass:"date"},[t._v(t._s(t.dateFormat(t.newDate)))]),n("div",{staticClass:"time"},[t._v(t._s(t.timeFormat(t.newDate)))])]),t._m(2),t._m(3),t._m(4)])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topinfo"},[n("span",[t._v("职工号")]),n("span",{staticClass:"topinfospan"},[t._v("19970284")]),n("span",{staticClass:"topinfospan"},[t._v("姓名")]),n("span",{staticClass:"topinfospan"},[t._v("樊晓")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topinfo"},[n("span",[t._v("学院部")]),n("span",{staticClass:"topinfospan"},[t._v("体育教研部 (军训工作部)")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topinfo"},[n("span",{staticStyle:{"padding-left":"5%"}},[t._v("有效期限")]),n("span",{staticClass:"topinfospan"},[t._v("2021-07-03 — 2021-09-05")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"imageinfo"},[a("img",{staticClass:"image",attrs:{src:n("63cb"),alt:"qr"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottleinfo"},[n("div",[t._v("二维码定期更新，请勿截图")]),n("div",[t._v("温馨提醒：提前打开 快速通行")]),n("div",[t._v("信息化办公室 Copyright@2021")])])}],k={data:function(){return{newDate:new Date}},mounted:function(){var t=this;this.timer=setInterval((function(){t.newDate=(new Date).toLocaleString()}))},methods:{dateFormat:function(){var t=new Date,e=(t.getMonth(),t.getMonth()+1),n=t.getDate()<10?"0"+t.getDate():t.getDate();return e+"月"+n+"日 "},timeFormat:function(){var t=new Date,e=t.getHours()<10?"0"+t.getHours():t.getHours(),n=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),a=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return e+":"+n+":"+a}}},q=k,P=(n("7e5e"),Object(o["a"])(q,$,O,!1,null,"12dd6cc0",null)),F=P.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},H=[],L={},T=Object(o["a"])(L,I,H,!1,null,null,null),B=T.exports;a["a"].use(u["a"]);var N=[{path:"/",component:g,meta:{title:"学生通行码"}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/me",component:y,meta:{title:"学生通行码"}},{path:"/info",component:E,meta:{title:"学生通行码"}},{path:"/fan",component:F,meta:{title:"通行码"}},{path:"/history",component:B,meta:{title:"学生通行码"}}],A=new u["a"]({routes:N});A.beforeEach((function(t,e,n){t.meta.title&&(document.title=t.meta.title,n())}));var G=A;a["a"].config.productionTip=!1,new a["a"]({router:G,render:function(t){return t(l)}}).$mount("#app")},"5cc0":function(t,e,n){"use strict";n("7efe")},"63cb":function(t,e,n){t.exports=n.p+"img/qr2.9fb22a5d.jpg"},"7e5e":function(t,e,n){"use strict";n("bc2b")},"7efe":function(t,e,n){},"85ec":function(t,e,n){},9597:function(t,e,n){t.exports=n.p+"img/bqr1.0e079b05.jpg"},a265:function(t,e,n){t.exports=n.p+"img/yqr3.7bd1a5c4.jpg"},b1de:function(t,e,n){t.exports=n.p+"img/bqr3.79b0a1f8.jpg"},b818:function(t,e,n){t.exports=n.p+"img/yqr1.090c80da.jpg"},b8cb:function(t,e,n){"use strict";n("e9c4")},b90b:function(t,e,n){t.exports=n.p+"img/yqr4.d718de82.jpg"},bc2b:function(t,e,n){},c0ca:function(t,e,n){t.exports=n.p+"img/bqr5.89da4231.jpg"},c400:function(t,e,n){t.exports=n.p+"img/yqr5.d718de82.jpg"},e9c4:function(t,e,n){},f522:function(t,e,n){t.exports=n.p+"img/bqr2.b27c155e.jpg"}});
//# sourceMappingURL=app.fc151d04.js.map