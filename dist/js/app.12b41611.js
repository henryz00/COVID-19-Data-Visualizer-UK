(function(t){function a(a){for(var r,i,o=a[0],c=a[1],l=a[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(a);while(f.length)f.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],r=!0,o=1;o<e.length;o++){var c=e[o];0!==n[c]&&(r=!1)}r&&(s.splice(a--,1),t=i(i.s=e[0]))}return t}var r={},n={app:0},s=[];function i(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)i.d(e,r,function(a){return t[a]}.bind(null,r));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=a,o=o.slice();for(var l=0;l<o.length;l++)a(o[l]);var u=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},1694:function(t,a,e){},4678:function(t,a,e){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var a=s(t);return e(a)}function s(t){if(!e.o(r,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return r[t]}n.keys=function(){return Object.keys(r)},n.resolve=s,t.exports=n,n.id="4678"},"502e":function(t,a,e){"use strict";var r=e("1694"),n=e.n(r);n.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[t.dataNow&&t.dataHistory&&t.dataUK?e("div",{staticClass:"mContent"},[e("div",{staticClass:"title"},[t._v("今日概览")]),e("div",{staticClass:"overview mBlock"},[e("div",{staticClass:"overview_item",staticStyle:{color:"#ff5151"}},[e("div",{staticClass:"overview_title"},[t._v("累计确诊")]),e("div",{staticClass:"overview_number"},[t._v(t._s(t.dataNow[0].confirmed))]),e("div",{staticClass:"daily-increase"},[t._v(t._s("+"+t.dataUK.dailyConfirmed))])]),e("div",{staticClass:"overview_item",staticStyle:{color:"#575757"}},[e("div",{staticClass:"overview_title"},[t._v("累计死亡")]),e("div",{staticClass:"overview_number"},[t._v(t._s(t.dataNow[0].death))]),e("div",{staticClass:"daily-increase"},[t._v(t._s("+"+(t.todayData.death-t.yestData.death)))])]),e("div",{staticClass:"overview_item",staticStyle:{color:"#0094b9"}},[e("div",{staticClass:"overview_title"},[t._v("累计测试")]),e("div",{staticClass:"overview_number"},[t._v(t._s(t.dataNow[0].tested))]),e("div",{staticClass:"daily-increase"},[t._v(" "+t._s("+"+(t.todayData.tested-t.yestData.tested))+" ")])]),e("div",{staticClass:"overview_item",staticStyle:{color:"#28ca00"}},[e("div",{staticClass:"overview_title"},[t._v("累计治愈")]),e("div",{staticClass:"overview_number"},[t._v(t._s(t.dataNow[1].cured))]),e("div",{staticClass:"daily-increase"},[t._v(t._s("+"+(t.todayData.cured-t.yestData.cured)))])])]),e("div",{staticClass:"title"},[t._v("国家概览")]),e("div",{staticClass:"overview mBlock"},[e("div",{staticClass:"overview_item"},[e("div",{staticClass:"overview_title"},[t._v("英格兰")]),e("div",{staticClass:"overview_number"},[t._v(t._s(t.dataNow[0].england))]),e("div",{staticClass:"country-death"},[t._v(t._s(t.dataUK.englandDeceased))])]),e("div",{staticClass:"overview_item"},[e("div",{staticClass:"overview_title"},[t._v("苏格兰")]),e("div",{staticClass:"overview_number"},[t._v(t._s(t.dataNow[0].scotland))]),e("div",{staticClass:"country-death"},[t._v(t._s(t.dataUK.scottlandDeceased))])]),e("div",{staticClass:"overview_item"},[e("div",{staticClass:"overview_title"},[t._v("威尔士")]),e("div",{staticClass:"overview_number"},[t._v(t._s(t.dataNow[0].wales))]),e("div",{staticClass:"country-death"},[t._v(t._s(t.dataUK.walesDeceased))])]),e("div",{staticClass:"overview_item"},[e("div",{staticClass:"overview_title"},[t._v("北爱尔兰")]),e("div",{staticClass:"overview_number"},[t._v(t._s(t.dataNow[0].nireland))]),e("div",{staticClass:"country-death"},[t._v(t._s(t.dataUK.northenIrelandDeceased))])])]),e("div",{ref:"navPlaceholder",attrs:{id:"navPlaceholder"}}),e("div",{ref:"nav",staticClass:"mNav",attrs:{id:"mNavbar"}},[e("ul",{directives:[{name:"scroll-spy-active",rawName:"v-scroll-spy-active",value:{selector:"li a",class:"active",offset:50},expression:"{selector: 'li a', class: 'active', offset: 50}"},{name:"scroll-spy-link",rawName:"v-scroll-spy-link"}],staticClass:"nav nav-pills nav-fill"},[t._m(0),t._m(1),t._m(2)])]),e("div",{directives:[{name:"scroll-spy",rawName:"v-scroll-spy",value:{data:"section"},expression:"{data: 'section'}"}]},[e("div",{staticClass:"mSection",staticStyle:{"padding-top":"0"},attrs:{id:"charts"}},[e("div",{staticClass:"title"},[t._v("确诊及死亡")]),e("Chart",{attrs:{id:"confirmedAndDeathChart1",type:"area",dataHistory:t.dataHistory,seriesData:t.confirmedAndDeathChart1}}),e("div",{staticClass:"title"},[t._v("新增死亡")]),e("Chart",{attrs:{id:"deathChart2",type:"bar",stacked:!0,dataHistory:t.dataHistory,seriesData:t.deathChart2,colors:["#c40000","#3d000d","#2c9100"]}}),e("div",{staticClass:"title"},[t._v("死亡率及治愈率")]),e("Chart",{attrs:{id:"rateChart3",type:"area",dataHistory:t.dataHistory,seriesData:t.rateChart3,colors:["#ca0011","#0088ff"]}})],1),t.regionBarRaceData?e("div",{staticClass:"mSection",attrs:{id:"animation"}},[e("div",{staticClass:"title"},[t._v("数据动画")]),e("BarRace",{attrs:{raceData:t.regionBarRaceData}})],1):t._e(),e("div",{staticClass:"mSection",attrs:{id:"regionData"}},[e("div",{staticClass:"title"},[t._v("地区列表")]),e("RegionTable",{attrs:{dataNow:t.dataNow,dataYesterday:t.dataHistory[t.dataHistory.length-1]}})],1)])]):e("div",[t._m(3)])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#charts"}},[t._v("当前数据")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#animation"}},[t._v("数据动画")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#regionData"}},[t._v("地图列表")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"vertical-center"},[e("div",{staticClass:"spinner-border text-primary",staticStyle:{width:"3rem",height:"3rem"},attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])])])}],i=(e("d81d"),e("d3b7"),e("96cf"),e("c964")),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mBlock"},[e("div",{staticClass:"btn-group-wrap"},[e("div",{staticClass:"btn-group btn-group-sm",attrs:{role:"group","aria-label":"date range"}},[e("button",{staticClass:"btn btn-secondary",class:{active:-7===t.range},attrs:{type:"button"},on:{click:function(a){return t.updateRange(-7,!0)}}},[t._v(" 一周内 ")]),e("button",{staticClass:"btn btn-secondary",class:{active:-14===t.range},attrs:{type:"button"},on:{click:function(a){return t.updateRange(-14,!0)}}},[t._v(" 两周内 ")]),e("button",{staticClass:"btn btn-secondary",class:{active:-31===t.range},attrs:{type:"button"},on:{click:function(a){return t.updateRange(-31,!1)}}},[t._v(" 一个月内 ")]),e("button",{staticClass:"btn btn-secondary",class:{active:0===t.range},attrs:{type:"button"},on:{click:function(a){return t.updateRange(0,!1)}}},[t._v(" 全部数据 ")])])]),e("VueApexCharts",{attrs:{width:"100%",type:t.type,options:t.options,series:t.series}})],1)},c=[],l=(e("fb6a"),e("1321")),u=e.n(l),d={name:"Chart",components:{VueApexCharts:u.a},props:{seriesData:Array,dataHistory:Array,id:String,type:String,colors:Array,stacked:Boolean},data:function(){return{showLabel:!1,range:-31}},methods:{updateRange:function(t,a){this.range=t,this.showLabel=a}},computed:{series:function(){var t=this;return this.seriesData.map((function(a){return a.originalData=a.originalData?a.originalData:a.data,a.data=a.originalData.slice(t.range),a}))},options:function(){return{chart:{id:this.id,height:350,type:this.type?this.type:"line",stacked:this.stacked,zoom:{enabled:window.innerWidth>800}},colors:this.colors?this.colors:["#ff0000","#3d0707"],dataLabels:{enabled:this.showLabel,textAnchor:"middle",dropShadow:{enabled:!0}},stroke:{curve:"smooth"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{type:"datetime",categories:this.dataHistory.map((function(t){return t.date})).slice(this.range),labels:{format:"dd/MM",rotate:-10}}}}}},f=d,v=e("2877"),b=Object(v["a"])(f,o,c,!1,null,"c4064dee",null),h=b.exports,m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mBlock"},[e("div",{staticClass:"btn-group-wrap"},[e("div",{staticClass:"btn-group btn-group-sm",attrs:{role:"group","aria-label":"date range"}},[e("button",{staticClass:"btn btn-secondary",class:{active:0===t.sort},attrs:{type:"button"},on:{click:function(a){return t.sortByDefault()}}},[t._v(" 默认排序 ")]),e("button",{staticClass:"btn btn-secondary",class:{active:1===t.sort},attrs:{type:"button"},on:{click:function(a){return t.sortByAlphabet()}}},[t._v(" 按地区 ")]),e("button",{staticClass:"btn btn-secondary",class:{active:2===t.sort},attrs:{type:"button"},on:{click:function(a){return t.sortByNumber()}}},[t._v(" 按人数 ")]),e("button",{staticClass:"btn btn-secondary",class:{active:3===t.sort},attrs:{type:"button"},on:{click:function(a){return t.sortByIncreaseNumber()}}},[t._v(" 按变化 ")])])]),e("div",{staticStyle:{"max-height":"500px","overflow-y":"scroll"}},[e("table",{staticClass:"table table-striped table-hover"},[t._m(0),e("tbody",[t._l(t.regionData,(function(a){return e("tr",{key:a.id,staticClass:"singleRegionData"},[e("th",[t._v(t._s(a.location))]),e("td",[t._v(t._s(a.number))]),e("td",[t._v(t._s(a.change))])])})),e("tr")],2)])])])},p=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticStyle:{position:"sticky"}},[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("NHS地区")]),e("th",{attrs:{scope:"col"}},[t._v("确诊人数")]),e("th",{attrs:{scope:"col"}},[t._v("较上次更新")])])])}],y=e("d0ff"),j=e("54f8"),g=(e("7db0"),e("4160"),e("caad"),e("ac1f"),e("25f0"),e("2532"),e("5319"),e("498a"),e("159b"),e("c1df"));function _(t){var a=JSON.parse(t.replace(/\\/g,"")),e=function(t){null!=t.number&&(t.number.toString().includes(",")&&(t.number=t.number.replace(/,/g,"")),t.location=t.location.trim(),t.number=parseInt(t.number.toString().trim()))};return a.forEach(e),a}function w(t){var a,e=[],r=Object(j["a"])(t);try{for(r.s();!(a=r.n()).done;){var n=a.value;if(n.area){var s=_(n.area);s.date=g(n.date).format("DD/MM"),e.push(s)}}}catch(b){r.e(b)}finally{r.f()}for(var i=[],o=null,c=0,l=e;c<l.length;c++){var u,d=l[c],f=Object(j["a"])(d);try{var v=function(){var t=u.value,a={};if(a.name=t.location,a.value=t.number,a.year=d.date,a.lastValue=0,o){var e=o.find((function(a){return a.location===t.location}));a.lastValue=e&&e.number?e.number:0}i.push(a)};for(f.s();!(u=f.n()).done;)v()}catch(b){f.e(b)}finally{f.f()}o=d}return i}var C={name:"RegionTable",props:["dataNow","dataYesterday"],data:function(){return{regionData:[],sort:0}},mounted:function(){this.regionData=this.getRegionData()},methods:{getRegionData:function(){var t,a=_(this.dataNow[0].area),e=_(this.dataYesterday.area),r=0,n=Object(j["a"])(a);try{for(n.s();!(t=n.n()).done;){var s=t.value;s.id=r++;var i=e[r]?s.number-e[r].number:0;s.change=(i>0?"+":"")+i}}catch(o){n.e(o)}finally{n.f()}return a},sortByDefault:function(){this.sort=0,this.regionData=Object(y["a"])(this.regionData).sort((function(t,a){return a.id-t.id}))},sortByAlphabet:function(){this.sort=1,this.regionData=Object(y["a"])(this.regionData).sort((function(t,a){return t.location.localeCompare(a.location)}))},sortByNumber:function(){this.sort=2,this.regionData=Object(y["a"])(this.regionData).sort((function(t,a){return a.number-t.number}))},sortByIncreaseNumber:function(){this.sort=3,this.regionData=Object(y["a"])(this.regionData).sort((function(t,a){return a.change-t.change}))}}},k=C,x=Object(v["a"])(k,m,p,!1,null,"0236e6c4",null),D=x.exports,N=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mBlock",attrs:{id:"barRace"}})},L=[],O=(e("4de4"),e("b0c0"),{name:"BarRace",props:{raceData:Array},data:function(){return{width:500}},created:function(){window.addEventListener("resize",this.myEventHandler)},destroyed:function(){window.removeEventListener("resize",this.myEventHandler)},methods:{myEventHandler:function(t){this.width=window.innerWidth>510?510:window.innerWidth-55,console.log(this.width)}},mounted:function(){var t=e("c1df");this.myEventHandler();var a=e("5698"),r=a.select("#barRace").append("svg").attr("width",this.width).attr("height",500),n=500,s=12,i=500,o=this.width,c={top:80,right:0,bottom:5,left:0},l=(i-(c.bottom+c.top))/(5*s),u=(r.append("text").attr("class","title").attr("y",24).html("NHS地区确诊数量变化"),r.append("text").attr("class","subTitle").attr("y",55).html("确诊人数（例）"),r.append("text").attr("class","caption").attr("x",o).attr("y",i-5).style("text-anchor","end").html("Source: isjeff.com"),"06/03");function d(e){console.log(e),e.forEach((function(t){t.value=+t.value,t.lastValue=t.lastValue<0?0:+t.lastValue,t.value=isNaN(t.value)&&t.value<0?0:t.value,t.year=t.year,t.colour=a.rgb(0,195,255)})),console.log(e);var d=e.filter((function(t){return t.year==u&&!isNaN(t.value)})).sort((function(t,a){return a.value-t.value})).slice(0,s);d.forEach((function(t,a){return t.rank=a})),console.log("yearSlice: ",d);var f=a.scaleLinear().domain([0,a.max(d,(function(t){return t.value}))]).range([c.left,o-c.right-65]),v=a.scaleLinear().domain([s,0]).range([i-c.bottom,c.top]),b=a.axisTop().scale(f).ticks(o>500?5:2).tickSize(-(i-c.top-c.bottom)).tickFormat((function(t){return a.format(",")(t)}));r.append("g").attr("class","axis xAxis").attr("transform","translate(0, ".concat(c.top,")")).call(b).selectAll(".tick line").classed("origin",(function(t){return 0==t})),r.selectAll("rect.bar").data(d,(function(t){return t.name})).enter().append("rect").attr("class","bar").attr("x",f(0)+1).attr("width",(function(t){return f(t.value)-f(0)-1<0?0:f(t.value)-f(0)-1})).attr("y",(function(t){return v(t.rank)+5})).attr("height",v(1)-v(0)-l).style("fill",(function(t){return t.colour})),r.selectAll("text.label").data(d,(function(t){return t.name})).enter().append("text").attr("class","label").attr("x",(function(t){return f(t.value)-8})).attr("y",(function(t){return v(t.rank)+5+(v(1)-v(0))/2+1})).style("text-anchor","end").style("color","white").html((function(t){return t.name})),r.selectAll("text.valueLabel").data(d,(function(t){return t.name})).enter().append("text").attr("class","valueLabel").attr("x",(function(t){return f(t.value)+5})).attr("y",(function(t){return v(t.rank)+5+(v(1)-v(0))/2+1})).text((function(t){return a.format(",.0f")(t.lastValue)}));var h=r.append("text").attr("class","yearText").attr("x",o-c.right).attr("y",i-25).style("text-anchor","end").html(u);a.interval((function(i){d=e.filter((function(t){return t.year==u&&!isNaN(t.value)})).sort((function(t,a){return a.value-t.value})).slice(0,s),d.forEach((function(t,a){return t.rank=a})),f.domain([0,a.max(d,(function(t){return t.value}))]),r.select(".xAxis").transition().duration(n).ease(a.easeLinear).call(b);var o=r.selectAll(".bar").data(d,(function(t){return t.name}));o.enter().append("rect").attr("class",(function(t){return"bar ".concat(t.name.replace(/\s/g,"_"))})).attr("x",f(0)+1).attr("width",(function(t){return f(t.value)-f(0)-1<0?0:f(t.value)-f(0)-1})).attr("y",(function(t){return v(s+1)+5})).attr("height",v(1)-v(0)-l).style("fill",(function(t){return t.colour})).transition().duration(n).ease(a.easeLinear).attr("y",(function(t){return v(t.rank)+5})),o.transition().duration(n).ease(a.easeLinear).attr("width",(function(t){return f(t.value)-f(0)-1<0?0:f(t.value)-f(0)-1})).attr("y",(function(t){return v(t.rank)+5})),o.exit().transition().duration(n).ease(a.easeLinear).attr("width",(function(t){return f(t.value)-f(0)-1<0?0:f(t.value)-f(0)-1})).attr("y",(function(t){return v(s+1)+5})).remove();var c=r.selectAll(".label").data(d,(function(t){return t.name}));c.enter().append("text").attr("class","label").attr("x",(function(t){return f(t.value)-8})).attr("y",(function(t){return v(s+1)+5+(v(1)-v(0))/2})).style("text-anchor","end").style("color","white").html((function(t){return t.name})).transition().duration(n).ease(a.easeLinear).attr("y",(function(t){return v(t.rank)+5+(v(1)-v(0))/2+1})),c.transition().duration(n).ease(a.easeLinear).attr("x",(function(t){return f(t.value)-8})).attr("y",(function(t){return v(t.rank)+5+(v(1)-v(0))/2+1})),c.exit().transition().duration(n).ease(a.easeLinear).attr("x",(function(t){return f(t.value)-8})).attr("y",(function(t){return v(s+1)+5})).remove();var m=r.selectAll(".valueLabel").data(d,(function(t){return t.name}));m.enter().append("text").attr("class","valueLabel").attr("x",(function(t){return f(t.value)+5})).attr("y",(function(t){return v(s+1)+5})).text((function(t){return a.format(",.0f")(t.lastValue)})).transition().duration(n).ease(a.easeLinear).attr("y",(function(t){return v(t.rank)+5+(v(1)-v(0))/2+1})),m.transition().duration(n).ease(a.easeLinear).attr("x",(function(t){return f(t.value)+5})).attr("y",(function(t){return v(t.rank)+5+(v(1)-v(0))/2+1})).tween("text",(function(t){var e=a.interpolateRound(t.lastValue,t.value);return function(t){this.textContent=a.format(",")(e(t))}})),m.exit().transition().duration(n).ease(a.easeLinear).attr("x",(function(t){return f(t.value)+5})).attr("y",(function(t){return v(s+1)+5})).remove(),h.html(u);var p=t(u+"/2020","DD/MM/YYYY"),y=t(e[e.length-1].year+"/2020","DD/MM/YYYY");u=p.add(1,"days").format("DD/MM"),p.isAfter(y)&&(u="06/03")}),n)}console.log(u),d(this.raceData)}}),S=O,H=(e("efaf"),Object(v["a"])(S,N,L,!1,null,null,null)),R=H.exports,z={name:"App",components:{Chart:h,RegionTable:D,BarRace:R},data:function(){return{dataNow:null,dataHistory:null,dataUK:null,todayData:null,yestData:null,section:0,regionBarRaceData:null}},mounted:function(){var t=this;fetch("https://api.covid19uk.live/").then(function(){var a=Object(i["a"])(regeneratorRuntime.mark((function a(e){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.json();case 2:r=a.sent,t.$data.dataNow=r.data;case 4:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()),fetch("https://api.covid19uk.live/history").then(function(){var a=Object(i["a"])(regeneratorRuntime.mark((function a(e){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.json();case 2:r=a.sent,t.$data.dataHistory=r.data,t.todayData=t.dataHistory[t.dataHistory.length-1],t.yestData=t.dataHistory[t.dataHistory.length-2],t.regionBarRaceData=w(r.data);case 7:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()),fetch("https://api.apify.com/v2/key-value-stores/KWLojgM5r1JmMW4b4/records/LATEST?disableRedirect=true").then(function(){var a=Object(i["a"])(regeneratorRuntime.mark((function a(e){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.json();case 2:r=a.sent,t.$data.dataUK=r;case 4:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()),document.addEventListener("scroll",(function(){window.scrollY>t.$refs["navPlaceholder"].offsetTop?(t.$refs["nav"].classList.add("fixed_nav"),t.$refs["navPlaceholder"].classList.add("navPlaceholder")):(t.$refs["nav"].classList.remove("fixed_nav"),t.$refs["navPlaceholder"].classList.remove("navPlaceholder"))}))},computed:{confirmedAndDeathChart1:function(){return[{name:"总确诊",data:this.dataHistory.map((function(t){return t.confirmed}))},{name:"总死亡",data:this.dataHistory.map((function(t){return t.death}))}]},deathChart2:function(){var t=0,a=0;return[{name:"新增确诊",data:this.dataHistory.map((function(a){var e=a.confirmed-t;return t=a.confirmed,e}))},{name:"新增死亡",data:this.dataHistory.map((function(t){var e=t.death-a;return a=t.death,e}))}]},rateChart3:function(){return[{name:"死亡率",data:this.dataHistory.map((function(t){var a=(t.death/t.confirmed).toPrecision(2);return a}))},{name:"治愈率",data:this.dataHistory.map((function(t){var a=(t.cured/t.confirmed).toPrecision(2);return a}))}]}}},A=z,E=(e("502e"),Object(v["a"])(A,n,s,!1,null,"40328ff0",null)),B=E.exports,$=e("33bc");r["a"].use($["b"],{easing:$["a"].Quartic.InOut}),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(B)}}).$mount("#app")},"9a79":function(t,a,e){},efaf:function(t,a,e){"use strict";var r=e("9a79"),n=e.n(r);n.a}});
//# sourceMappingURL=app.12b41611.js.map