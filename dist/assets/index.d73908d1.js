import{a}from"./index.72d9dd4c.js";import{d as t,bt as s,m as e,t as l,v as i,r as d,o as n,c,a as r,C as u,F as o,H as v,D as p,k as f}from"./vendor.02de9c8e.js";var m=t({name:"Personal",components:{CameraOutline:s},setup(){const t=e(!1),s=e(!1),l=a();return{touched:t,uploaded:s,messages:[{title:"【总经理通知】",content:"明天【下午】有【不拘一格】课程直播，公司尝试全新直播模式，其中会直播各个部门员工的工作常态，需要全体家人的配合与支持。具体要求如下：1.、办公桌上只允许放：电脑、水杯、笔记本、笔、电话2.、座椅后背不允许挂衣服，全部放到厨子里3、直播期间，全员上身着工装外套4、直播期间请勿随意走动，文明用语，若进入直播镜头请微笑示意课程直播不仅是介绍课程，更重要的是向客户展示优行教育！[嘿哈][嘿哈][嘿哈]",status:0},{title:"重要通知：今天要加班，一堆bug等着修改，请全体家人们注意",content:"为了配合市场家人们努力开单，从今天开始，技术部及教研老师们要努力加班，全力配合市场的家人们多多开单。谢谢大家的支持与配合。",status:0},{title:"重要通知：今天要加班，一堆bug等着修改，请全体家人们注意",content:"为了配合市场家人们努力开单，从今天开始，技术部及教研老师们要努力加班，全力配合市场的家人们多多开单。谢谢大家的支持与配合。",status:1},{title:"重要通知：今天要加班，一堆bug等着修改，请全体家人们注意",content:"为了配合市场家人们努力开单，从今天开始，技术部及教研老师们要努力加班，全力配合市场的家人们多多开单。谢谢大家的支持与配合。",status:1},{title:"重要通知：今天要加班，一堆bug等着修改，请全体家人们注意",content:"为了配合市场家人们努力开单，从今天开始，技术部及教研老师们要努力加班，全力配合市场的家人们多多开单。谢谢大家的支持与配合。",status:1}],watingJobs:[{title:"和朋友同事一起玩王者，吃鸡",status:0},{title:"下班写今日总结",status:1},{title:"中午打卡，吃饭，下去买一瓶快乐水",status:0},{title:"给项目经理演示项目成果，汇报项目进度，查看同事新提交的bug",status:1},{title:"上班打卡",status:0},{title:"和朋友同事一起玩王者，吃鸡",status:0},{title:"下班写今日总结",status:1},{title:"中午打卡，吃饭，下去买一瓶快乐水",status:0},{title:"给项目经理演示项目成果，汇报项目进度，查看同事新提交的bug",status:1},{title:"上班打卡",status:0}],avatar:l.state.user.avatar,nickName:l.state.user.nickName,avatarTouchStart:()=>{t.value=!0},uploadAvatar:()=>{s.value=!0,setTimeout((()=>{t.value=!1,s.value=!1}),1e3)}}}});const x=f();l("data-v-31933aa2");const g={class:"main-container"},b={class:"box-wrapper"},y={class:"flex"},_={class:"info-wrapper"},w={class:"avatar-wrapper"},h={class:"text-xl"},z=r("div",{class:"des-wrapper"},[r("i",{class:"el-icon-edit"}),p(" 冰冻三尺，非一日之寒，成大事者不拘小节。 ")],-1),k=r("div",{class:"text-wrapper"},[r("div",{class:"label"}," 昵称： "),r("div",{class:"value"}," 蝴蝶飞呀飞 ")],-1),C=r("div",{class:"text-wrapper"},[r("div",{class:"label"}," 性别： "),r("div",{class:"value"}," 男 ")],-1),T=r("div",{class:"text-wrapper"},[r("div",{class:"label"}," 生日： "),r("div",{class:"value"}," 2021-1-1 ")],-1),j=r("div",{class:"text-wrapper"},[r("div",{class:"label"}," 部门： "),r("div",{class:"value"}," 研发部 ")],-1),A={class:"mt-4"},N=p("技术控"),S=p("爱学习"),J=p("大嘴巴"),O=p("宅男"),P=p("嘚嘚没完"),D=p("UP主"),F=p("手机控"),H=r("span",{class:"text-sm"},"待办事项",-1),I={class:"flex-1"},M={style:{width:"40px"}},U={class:"mt-2"},q=p(" 查看更多 "),B={class:"flex-1 ml-2"},E={class:"message-title"},G={class:"content"};i();const K=x(((a,t,s,e,l,i)=>{const f=d("CameraOutline"),m=d("n-icon"),K=d("n-tag"),L=d("n-space"),Q=d("n-card"),R=d("n-button");return n(),c("div",g,[r("div",b,[r("div",y,[r(Q,{class:"box-card personal-box","content-style":{padding:"10px"}},{default:x((()=>[r("div",_,[r("div",w,[r("div",{class:["avatar",{"avatar-touch":a.touched,"avatar-end":a.uploaded}],onMouseenter:t[1]||(t[1]=(...t)=>a.avatarTouchStart&&a.avatarTouchStart(...t))},[r("img",{src:a.avatar},null,8,["src"])],34),r("div",{class:"flex items-center justify-center camera-layer",onClick:t[2]||(t[2]=(...t)=>a.uploadAvatar&&a.uploadAvatar(...t))},[r(m,{size:"40",color:"#ffffff"},{default:x((()=>[r(f)])),_:1})])]),r("div",h,u(a.nickName),1),z,k,C,T,j,r("div",A,[r(L,null,{default:x((()=>[r(K,{type:"info",size:"small"},{default:x((()=>[N])),_:1}),r(K,{type:"info",size:"small"},{default:x((()=>[S])),_:1}),r(K,{type:"info",size:"small"},{default:x((()=>[J])),_:1}),r(K,{type:"info",size:"small"},{default:x((()=>[O])),_:1}),r(K,{type:"info",size:"small"},{default:x((()=>[P])),_:1}),r(K,{type:"info",size:"small"},{default:x((()=>[D])),_:1}),r(K,{type:"info",size:"small"},{default:x((()=>[F])),_:1})])),_:1})])])])),_:1}),r(Q,{class:"flex-1 ml-2 box-card wating-box","content-style":{padding:"10px"},"header-style":{padding:"10px"}},{header:x((()=>[H])),default:x((()=>[(n(!0),c(o,null,v(a.watingJobs,((a,t)=>(n(),c("div",{key:t,class:"flex wating-item"},[r("div",I,u(a.title),1),r("div",M,[r(K,{type:0===a.status?"error":"success",size:"mini"},{default:x((()=>[p(u(0===a.status?"未完成":"已完成"),1)])),_:2},1032,["type"])])])))),128))])),_:1})]),r("div",U,[r(Q,{title:"消息中心",class:"box-card flex-sub","header-style":{padding:"10px"},"content-style":{padding:"10px"}},{"header-extra":x((()=>[r(R,{type:"text"},{default:x((()=>[q])),_:1})])),default:x((()=>[(n(!0),c(o,null,v(a.messages,((a,t)=>(n(),c("div",{key:t,class:"flex items-center message-wrapper"},[r("div",{class:["notify",{"bg-red-500":0===a.status,"bg-green-500":1===a.status}]},null,2),r("div",B,[r("div",E,u(a.title),1),r("div",G,u(a.content),1)])])))),128))])),_:1})])])])}));m.render=K,m.__scopeId="data-v-31933aa2";export default m;
