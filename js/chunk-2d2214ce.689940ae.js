(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2214ce"],{ca82:function(t,n,e){"use strict";e.r(n);e("b0c0");var o=e("7a23"),c={class:"relax-doc"},l=Object(o["j"])("h1",null,"Tooltip 文字提示",-1),r=Object(o["j"])("blockquote",null,[Object(o["j"])("p",null,"用于辅助的文字提示，可代替 HTML 元素默认的 title 属性")],-1),u=Object(o["j"])("h2",{id:"yan-shi"},[Object(o["j"])("a",{class:"header-anchor",href:"#yan-shi"}),Object(o["i"])(" 演示")],-1),a=Object(o["j"])("blockquote",null,[Object(o["j"])("p",null,"基本使用")],-1),i=Object(o["j"])("p",null,"文字必须要被标签包裹",-1),p=Object(o["j"])("pre",null,[Object(o["j"])("code",{class:"html"},'<template>\n  <x-tooltip content="这是文字提示">\n    <span>文字提示</span>\n  </x-tooltip>\n</template>\n')],-1),f=Object(o["j"])("h2",{id:"wei-zhi"},[Object(o["j"])("a",{class:"header-anchor",href:"#wei-zhi"}),Object(o["i"])(" 位置")],-1),b=Object(o["j"])("blockquote",null,[Object(o["j"])("p",null,"left , top , right , bottom 是物理中的 4 个方向, 表示显示的位置")],-1),d=Object(o["j"])("p",null,[Object(o["i"])("通过"),Object(o["j"])("code",null,"placement"),Object(o["i"])("设置不同的位置")],-1),j=Object(o["j"])("pre",null,[Object(o["j"])("code",{class:"html"},'<template>\n  <div class="tooltip-box">\n    <x-row type="flex" justify="center">\n      <x-col :span="5">\n        <x-tooltip content="这是文字提示" placement="top-start">\n          <x-button type="primary" plain> 上左 </x-button>\n        </x-tooltip>\n      </x-col>\n      <x-col :span="5">\n        <x-tooltip content="这是文字提示" placement="top">\n          <x-button type="primary" plain> 上中 </x-button>\n        </x-tooltip>\n      </x-col>\n      <x-col :span="5">\n        <x-tooltip content="这是文字提示" placement="top-end">\n          <x-button type="primary" plain> 上右 </x-button>\n        </x-tooltip>\n      </x-col>\n    </x-row>\n\n    <x-row type="flex" justify="space-between">\n      <x-col :span="4">\n        <x-tooltip content="这是文字提示" placement="left-start">\n          <x-button type="primary" plain> 左上 </x-button>\n        </x-tooltip>\n      </x-col>\n      <x-col :span="4">\n        <x-tooltip content="这是文字提示" placement="right-start">\n          <x-button type="primary" plain> 右上 </x-button>\n        </x-tooltip>\n      </x-col>\n    </x-row>\n\n    <x-row type="flex" justify="space-between">\n      <x-col :span="4">\n        <x-tooltip content="这是文字提示" placement="left">\n          <x-button type="primary" plain> 左中 </x-button>\n        </x-tooltip>\n      </x-col>\n      <x-col :span="4">\n        <x-tooltip content="这是文字提示" placement="right">\n          <x-button type="primary" plain> 右中 </x-button>\n        </x-tooltip>\n      </x-col>\n    </x-row>\n\n    <x-row type="flex" justify="space-between">\n      <x-col :span="4">\n        <x-tooltip content="这是文字提示" placement="left-end">\n          <x-button type="primary" plain> 左下 </x-button>\n        </x-tooltip>\n      </x-col>\n      <x-col :span="4">\n        <x-tooltip content="这是文字提示" placement="right-end">\n          <x-button type="primary" plain> 右下 </x-button>\n        </x-tooltip>\n      </x-col>\n    </x-row>\n\n    <x-row type="flex" justify="center">\n      <x-col :span="5">\n        <x-tooltip content="这是文字提示" placement="bottom-start">\n          <x-button type="primary" plain> 下左 </x-button>\n        </x-tooltip>\n      </x-col>\n      <x-col :span="5">\n        <x-tooltip content="这是文字提示" placement="bottom">\n          <x-button type="primary" plain> 下中 </x-button>\n        </x-tooltip>\n      </x-col>\n      <x-col :span="5">\n        <x-tooltip content="这是文字提示" placement="bottom-end">\n          <x-button type="primary" plain> 下右 </x-button>\n        </x-tooltip>\n      </x-col>\n    </x-row>\n\n  </div>\n</template>\n')],-1),s=Object(o["j"])("h2",{id:"she-zhi-kuan-du"},[Object(o["j"])("a",{class:"header-anchor",href:"#she-zhi-kuan-du"}),Object(o["i"])(" 设置宽度")],-1),x=Object(o["j"])("blockquote",null,[Object(o["j"])("p",null,[Object(o["i"])("可以设置"),Object(o["j"])("code",null,"tooltip"),Object(o["i"])("的宽度 换行可以用 "),Object(o["j"])("code",null,"br")])],-1),m=Object(o["j"])("p",null,"文字必须要被标签包裹",-1),y=Object(o["j"])("pre",null,[Object(o["j"])("code",{class:"html"},'<template>\n  <x-tooltip content="这是一段非常长的文字提示，主要是用于演示" width="180px">\n    <span>文字提示</span>\n  </x-tooltip>\n</template>\n')],-1),h={key:0,class:"h2-nav"};function O(t,n,e,O,v,_){var w=Object(o["C"])("element-demo0"),g=Object(o["C"])("demo-block"),k=Object(o["C"])("element-demo1"),M=Object(o["C"])("element-demo2");return Object(o["v"])(),Object(o["f"])(o["a"],null,[Object(o["j"])("section",c,[l,r,u,a,Object(o["j"])(g,null,{source:Object(o["M"])((function(){return[Object(o["j"])(w)]})),highlight:Object(o["M"])((function(){return[p]})),default:Object(o["M"])((function(){return[i]})),_:1}),f,b,Object(o["j"])(g,null,{source:Object(o["M"])((function(){return[Object(o["j"])(k)]})),highlight:Object(o["M"])((function(){return[j]})),default:Object(o["M"])((function(){return[d]})),_:1}),s,x,Object(o["j"])(g,null,{source:Object(o["M"])((function(){return[Object(o["j"])(M)]})),highlight:Object(o["M"])((function(){return[y]})),default:Object(o["M"])((function(){return[m]})),_:1})]),O.menu?(Object(o["v"])(),Object(o["f"])("div",h,[Object(o["j"])("div",{class:"dot",style:{transform:"translateY("+28*O.menuActive+"px)"}},null,4),(Object(o["v"])(!0),Object(o["f"])(o["a"],null,Object(o["A"])(O.menu,(function(t,n){return Object(o["v"])(),Object(o["f"])("div",{class:["item",{active:O.menuActive===n}],onClick:function(t){return O.toView(n)}},Object(o["F"])(t.name),11,["onClick"])})),256))])):Object(o["g"])("",!0)],64)}e("4160"),e("a630"),e("3ca3"),e("159b");var v=e("5530"),_=e("1487"),w=e.n(_),g={name:"component-doc",setup:function(){var t=Object(o["x"])([]),n=Object(o["y"])(0);Object(o["t"])((function(){Object(o["p"])((function(){var n=document.querySelectorAll(".relax-doc [id]");n.length&&Array.from(n).forEach((function(n){t.push({name:n.innerText,id:n.id})}))}))}));var e=function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;if(!e)return document.body.scrollTop=document.documentElement.scrollTop=n,n;var o=20,c=e/o,l=document.body.scrollTop+document.documentElement.scrollTop,r=(n-l)/c,u=setInterval((function(){c>0?(c--,t(l+=r)):clearInterval(u)}),o)},c=function(n){if(t.length){var o=document.querySelector("#"+t[n].id),c=o&&o.offsetTop-30;e(c,400)}};return window.onscroll=function(e){if(t.length){for(var o=document.body.scrollTop+document.documentElement.scrollTop,c=[],l=0;l<t.length;l++){var r=document.querySelector("#"+t[l].id),u=r&&r.offsetTop-30;c.push(Math.abs(o-u))}for(var a=0,i=c[0],p=1;p<c.length;p++)c[p]<i&&(i=c[p],a=p);n.value=a}},{menu:t,menuActive:n,toView:c}},components:{"element-demo0":function(){var t=o["j"],n=o["C"],e=o["M"],c=o["v"],l=o["f"];function r(o,r){var u=n("x-tooltip");return c(),l(u,{content:"这是文字提示"},{default:e((function(){return[t("span",null,"文字提示")]})),_:1})}var u={};return Object(v["a"])({mounted:function(){this.$nextTick((function(){var t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,w.a.highlightBlock)}))},render:r},u)}(),"element-demo1":function(){var t=o["i"],n=o["C"],e=o["M"],c=o["j"],l=o["v"],r=o["f"];function u(o,u){var a=n("x-button"),i=n("x-tooltip"),p=n("x-col"),f=n("x-row");return l(),r("div",{class:"tooltip-box"},[c(f,{type:"flex",justify:"center"},{default:e((function(){return[c(p,{span:5},{default:e((function(){return[c(i,{content:"这是文字提示",placement:"top-start"},{default:e((function(){return[c(a,{type:"primary",plain:""},{default:e((function(){return[t(" 上左 ")]})),_:1})]})),_:1})]})),_:1}),c(p,{span:5},{default:e((function(){return[c(i,{content:"这是文字提示",placement:"top"},{default:e((function(){return[c(a,{type:"primary",plain:""},{default:e((function(){return[t(" 上中 ")]})),_:1})]})),_:1})]})),_:1}),c(p,{span:5},{default:e((function(){return[c(i,{content:"这是文字提示",placement:"top-end"},{default:e((function(){return[c(a,{type:"primary",plain:""},{default:e((function(){return[t(" 上右 ")]})),_:1})]})),_:1})]})),_:1})]})),_:1}),c(f,{type:"flex",justify:"space-between"},{default:e((function(){return[c(p,{span:4},{default:e((function(){return[c(i,{content:"这是文字提示",placement:"left-start"},{default:e((function(){return[c(a,{type:"primary",plain:""},{default:e((function(){return[t(" 左上 ")]})),_:1})]})),_:1})]})),_:1}),c(p,{span:4},{default:e((function(){return[c(i,{content:"这是文字提示",placement:"right-start"},{default:e((function(){return[c(a,{type:"primary",plain:""},{default:e((function(){return[t(" 右上 ")]})),_:1})]})),_:1})]})),_:1})]})),_:1}),c(f,{type:"flex",justify:"space-between"},{default:e((function(){return[c(p,{span:4},{default:e((function(){return[c(i,{content:"这是文字提示",placement:"left"},{default:e((function(){return[c(a,{type:"primary",plain:""},{default:e((function(){return[t(" 左中 ")]})),_:1})]})),_:1})]})),_:1}),c(p,{span:4},{default:e((function(){return[c(i,{content:"这是文字提示",placement:"right"},{default:e((function(){return[c(a,{type:"primary",plain:""},{default:e((function(){return[t(" 右中 ")]})),_:1})]})),_:1})]})),_:1})]})),_:1}),c(f,{type:"flex",justify:"space-between"},{default:e((function(){return[c(p,{span:4},{default:e((function(){return[c(i,{content:"这是文字提示",placement:"left-end"},{default:e((function(){return[c(a,{type:"primary",plain:""},{default:e((function(){return[t(" 左下 ")]})),_:1})]})),_:1})]})),_:1}),c(p,{span:4},{default:e((function(){return[c(i,{content:"这是文字提示",placement:"right-end"},{default:e((function(){return[c(a,{type:"primary",plain:""},{default:e((function(){return[t(" 右下 ")]})),_:1})]})),_:1})]})),_:1})]})),_:1}),c(f,{type:"flex",justify:"center"},{default:e((function(){return[c(p,{span:5},{default:e((function(){return[c(i,{content:"这是文字提示",placement:"bottom-start"},{default:e((function(){return[c(a,{type:"primary",plain:""},{default:e((function(){return[t(" 下左 ")]})),_:1})]})),_:1})]})),_:1}),c(p,{span:5},{default:e((function(){return[c(i,{content:"这是文字提示",placement:"bottom"},{default:e((function(){return[c(a,{type:"primary",plain:""},{default:e((function(){return[t(" 下中 ")]})),_:1})]})),_:1})]})),_:1}),c(p,{span:5},{default:e((function(){return[c(i,{content:"这是文字提示",placement:"bottom-end"},{default:e((function(){return[c(a,{type:"primary",plain:""},{default:e((function(){return[t(" 下右 ")]})),_:1})]})),_:1})]})),_:1})]})),_:1})])}var a={};return Object(v["a"])({mounted:function(){this.$nextTick((function(){var t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,w.a.highlightBlock)}))},render:u},a)}(),"element-demo2":function(){var t=o["j"],n=o["C"],e=o["M"],c=o["v"],l=o["f"];function r(o,r){var u=n("x-tooltip");return c(),l(u,{content:"这是一段非常长的文字提示，主要是用于演示",width:"180px"},{default:e((function(){return[t("span",null,"文字提示")]})),_:1})}var u={};return Object(v["a"])({mounted:function(){this.$nextTick((function(){var t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,w.a.highlightBlock)}))},render:r},u)}()}};g.render=O;n["default"]=g}}]);
//# sourceMappingURL=chunk-2d2214ce.689940ae.js.map