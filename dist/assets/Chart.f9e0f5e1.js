import{u as e}from"./useEcharts.a4e0412d.js";import{d as t,m as r,g as a,M as s,o as n,c as o}from"./vendor.02de9c8e.js";var i=t({name:"LineChart",props:{id:{type:Number,default:0},options:{type:Object,default:()=>({})}},setup(t){const n=r(null);return a((()=>{const r=s(t,"options"),a=e(n.value);a.setOption(r.value),a.resize()})),{eChartContainer:n}}});const u={ref:"eChartContainer",style:{height:"180px",width:"100%"}};i.render=function(e,t,r,a,s,i){return n(),o("div",u,null,512)};export default i;
