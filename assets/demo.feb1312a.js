import{c as e}from"./mobile.2d6b7d6d.js";import{k as l,J as n,r as a,o as c,c as d,f as o,i as u}from"./vendor.ed841bd5.js";import"./index.75ed6cdc.js";const{createDemo:t}=e("switch");var h=t({setup(){let{proxy:e}=n();const a=l(!0),c=l(!0);return{checked:a,checkedAsync:c,change:(l,n)=>{e.$toast.text(`触发了change事件，开关状态：${l}`)},changeAsync:(l,n)=>{e.$toast.text(`2秒后异步触发 ${l}`),setTimeout((()=>{c.value=l}),2e3)}}}});const s={class:"demo"},m=o("h2",null,"基础用法",-1),i=o("h2",null,"禁用状态",-1),r=o("h2",null,"change事件",-1),g=o("h2",null,"异步控制",-1),V=o("h2",null,"自定义颜色",-1),k=o("h2",null,"支持文字",-1);h.render=function(e,l,n,t,h,f){const p=a("nut-switch"),C=a("nut-cell");return c(),d("div",s,[m,o(C,null,{default:u((()=>[o(p,{modelValue:e.checked,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checked=l)},null,8,["modelValue"])])),_:1}),i,o(C,null,{default:u((()=>[o(p,{modelValue:e.checked,"onUpdate:modelValue":l[2]||(l[2]=l=>e.checked=l),disable:""},null,8,["modelValue"])])),_:1}),r,o(C,null,{default:u((()=>[o(p,{modelValue:e.checked,"onUpdate:modelValue":l[3]||(l[3]=l=>e.checked=l),onChange:e.change},null,8,["modelValue","onChange"])])),_:1}),g,o(C,null,{default:u((()=>[o(p,{"model-value":e.checkedAsync,onChange:e.changeAsync},null,8,["model-value","onChange"])])),_:1}),V,o(C,null,{default:u((()=>[o(p,{modelValue:e.checked,"onUpdate:modelValue":l[4]||(l[4]=l=>e.checked=l),onChange:e.switchChange,"active-color":"blue"},null,8,["modelValue","onChange"])])),_:1}),k,o(C,null,{default:u((()=>[o(p,{modelValue:e.checked,"onUpdate:modelValue":l[5]||(l[5]=l=>e.checked=l),onChange:e.switchChange,"active-text":"开","inactive-text":"关"},null,8,["modelValue","onChange"])])),_:1})])};export default h;
