import{c as e}from"./mobile.2d6b7d6d.js";import{k as l,r as n,o as s,c as d,f as r,i as t}from"./vendor.ed841bd5.js";import"./index.75ed6cdc.js";const{createDemo:u}=e("price");var a=u({setup(){const e=l(0);return setInterval((()=>{e.value=1e7*Math.random()}),1e3),{price:e}}});const c={class:"demo"},i=r("h2",null,"基本用法",-1),o=r("h2",null,"有人民币符号，无千位分隔",-1),p=r("h2",null,"带人民币符号，有千位分隔，保留小数点后三位",-1),m=r("h2",null,"异步随机变更",-1);a.render=function(e,l,u,a,f,h){const b=n("nut-price"),v=n("nut-cell");return s(),d("div",c,[i,r(v,null,{default:t((()=>[r(b,{price:0,"need-symbol":!1,thousands:!0})])),_:1}),o,r(v,null,{default:t((()=>[r(b,{price:10010.01,"need-symbol":!0,thousands:!1},null,8,["price"])])),_:1}),p,r(v,null,{default:t((()=>[r(b,{price:15213.1221,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1}),m,r(v,null,{default:t((()=>[r(b,{price:e.price,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1})])};export default a;
