import{c as t}from"./index.72d9dd4c.js";import{d as e,t as n,v as a,r as o,o as s,c as i,a as l,j as d,C as r,k as c,D as p}from"./vendor.02de9c8e.js";var m=e({name:"RichText",components:{RichTextEditor:t},data:()=>({title:"",htmlContent:"",jsonContent:""}),methods:{getHtmlContent(){this.htmlContent=this.$refs.richTextEditor.getHtmlContent()},getJsonContent(){this.jsonContent=this.$refs.richTextEditor.getJsonContent()}}});const h=c();n("data-v-20916eac");const C={class:"main-container"},u={class:"flex"},f=p("获取HTML"),x=p("获取JSON"),v={key:1,class:"p-4 mt-4 priview-content"};a();const g=h(((t,e,n,a,c,p)=>{const m=o("n-input"),g=o("n-card"),y=o("n-button"),T=o("n-space"),j=o("RichTextEditor");return s(),i("div",C,[l(g,{title:"文章标题","content-style":{padding:"10px"},"header-style":{padding:"5px"}},{default:h((()=>[l(m,{modelValue:t.title,"onUpdate:modelValue":e[1]||(e[1]=e=>t.title=e),class:"title-input",placeholder:"请输入文章标题"},null,8,["modelValue"])])),_:1}),l(g,{title:"文章内容","content-style":{padding:"10px"},"header-style":{padding:"10px"},class:"mt-4"},{"header-extra":h((()=>[l("div",u,[l(T,{justify:"end"},{default:h((()=>[l(y,{type:"primary",size:"small",onClick:t.getHtmlContent},{default:h((()=>[f])),_:1},8,["onClick"]),l(y,{type:"warning",size:"small",onClick:t.getJsonContent},{default:h((()=>[x])),_:1},8,["onClick"])])),_:1})])])),default:h((()=>[l(j,{ref:"richTextEditor",height:400},null,512)])),_:1}),t.htmlContent?(s(),i("div",{key:0,class:"p-4 mt-4 priview-content",innerHTML:t.htmlContent},null,8,["innerHTML"])):d("v-if",!0),t.jsonContent?(s(),i("div",v,r(t.jsonContent),1)):d("v-if",!0)])}));m.render=g,m.__scopeId="data-v-20916eac";export default m;
