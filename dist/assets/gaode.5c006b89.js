import{u as e}from"./useCreateScript.3da3d983.js";import{d as t,m as a,g as n,o as r,c as i}from"./vendor.02de9c8e.js";var o=t({setup(){const t=a(null),r=a(0),{createScriptPromise:i}=e("https://webapi.amap.com/maps?v=1.4.15&key=9f2d3fcc4b12a7c915fded4b55902e21");return n((()=>{var e,a;r.value=(null==(a=null==(e=t.value)?void 0:e.parentElement)?void 0:a.getBoundingClientRect().height)||0,i.then((()=>{new window.AMap.Map(t.value,{zoom:22,center:[116.397428,39.90923],viewMode:"3D",pitch:75})}))})),{container:t,height:r}}});o.render=function(e,t,a,n,o,d){return r(),i("div",{ref:"container",style:{height:e.height+"px",width:"100%"}},null,4)};export default o;
