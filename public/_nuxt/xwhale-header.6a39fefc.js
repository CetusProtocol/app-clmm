import{l as f,m as r,e as y,o as l,f as n,s as d,h as e,t as h,i,S as p,x as k,w as g,j as b,B as S,p as w,k as L}from"./entry.df2391fb.js";/* empty css              */import{j as C,d as U}from"./pool.cc4a70b7.js";import{u as E}from"./xcetus.74b34aa1.js";import{_ as x}from"./xWHALE-icon.2df34cd4.js";const T={props:{haveLoading:{type:Boolean,default:!1,require:!1},icon:{type:String,default:""},label:{type:String,default:""},value:{type:String,default:"--"},symbolName:{type:String,default:""}},setup(s){const{t:u}=f(),t=C(),a=r(()=>t);return console.log(s.value,"props.value===>"),{t:u,wallet:a}}},B=""+new URL("icon-My-total-xWHALE_2x.a8c79cfa.png",import.meta.url).href,X=""+new URL("icon-Available-xWHALE_2x.26264052.png",import.meta.url).href,q=""+new URL("icon-Redeeming-xWHALE_2x.12af0f21.png",import.meta.url).href;const R={class:"icon-text"},W={key:0,src:B,alt:""},A={key:1,src:X,alt:""},M={key:2,src:q,alt:""},I={class:"text"},N={class:"label"},D={key:0,class:"text-loading"},H={key:1};function V(s,u,t,a,m,v){const c=p;return l(),n("div",R,[t.label.includes("My total xCETUS")?(l(),n("img",W)):t.label.includes("Available")?(l(),n("img",A)):t.label.includes("Redeeming")?(l(),n("img",M)):d("",!0),e("div",I,[e("span",N,h(t.label),1),t.value=="--"&&a.wallet.address?(l(),n("div",D,[i(c,{loading:!0,class:"loading-token-skeleton",active:"",paragraph:!1})])):(l(),n("p",H,h(t.value?t.value:"")+" "+h(t.symbolName),1))])])}const P=y(T,[["render",V],["__scopeId","data-v-d3297064"]]),j={props:{title:{type:String,default:""}},setup(s){const{t:u}=f(),t=r(()=>s.title=="LP Leaderboard"?"50% of the platform fee dividend is used for bonus distribution":s.title=="Dashboard"?"Manage your CETUS and xCETUS":s.title=="Liquidity Lockup"?"Lock your position, boost liquidity mining yield up to 2.5x.":""),a=E(),m=r(()=>a),v=r(()=>m.value.redeemingXwhale),c=r(()=>m.value.availableXwhale),o=r(()=>m.value.xWhaleBalance);return{t:u,headTitle:t,xWhaleBalance:o,availableXwhale:c,redeemingXwhale:v,addCommom:U}}},z=""+new URL("img-H5banner-leaderboard.61effe4e.png",import.meta.url).href,F=""+new URL("img-Liquidity-Lockup.48471df1.png",import.meta.url).href,G=""+new URL("banner-Dashboard-h5.8a7678c2.png",import.meta.url).href;const _=s=>(w("data-v-bdb29549"),s=s(),L(),s),J={class:"leaderboard-banner"},K={key:0,src:z,alt:""},O={key:1,src:F,alt:""},Q={key:2,src:G,alt:""},Y={class:"navigation-top"},Z={class:"title-lage"},$=["href"],ee=_(()=>e("div",{class:"more"},"Learn more",-1)),te=_(()=>e("svg",{class:"icon","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-icon_on1"})],-1)),ae=[ee,te],le={key:0,class:"leaderboard-bot"},ne={class:"bot-left"},ie=_(()=>e("img",{src:x,alt:""},null,-1)),oe=_(()=>e("div",{class:"pending-bonus"},[e("p",null,"My pending bonus"),e("span",null,"55.431 xCETUS")],-1)),se=_(()=>e("div",{class:"bot-right"},[e("p",null,"Next epoch"),e("div",{class:"epoch-time"},[e("span",null,"12"),b(" : "),e("span",null,"23"),b(" : "),e("span",null,"22"),b(" : "),e("span",null,"45")])],-1)),de={key:1,class:"navigation-bot"},ce={key:2,class:"liquidity-bot"},re={key:0,class:"navigation-bot-h5"},_e={key:1,class:"eaderboard-bot-h5"},ue=_(()=>e("div",null,[e("img",{src:x,alt:""}),e("div",{class:"pending-bonus"},[e("p",null,"My pending bonus"),e("span",null,"55.431 xCETUS")])],-1)),me={key:2,class:"liquidity-bot-h5"};function he(s,u,t,a,m,v){const c=S,o=P;return l(),n("div",null,[e("div",J,[t.title.includes("Leaderboard")?(l(),n("img",K)):t.title.includes("Liquidity")?(l(),n("img",O)):(l(),n("img",Q)),e("div",{class:k(["navigation",t.title.includes("Leaderboard")?"leaderboard":t.title.includes("Liquidity")?"liquidity":t.title])},[e("div",Y,[e("p",null,h(t.title),1),e("div",Z,h(a.headTitle),1),e("a",{href:t.title.includes("Dashboard")?"https://cetus-1.gitbook.io/cetus-docs/tokenomics/xcetus":"##",class:"link",target:"_blank"},ae,8,$)]),t.title.includes("Leaderboard")?(l(),n("div",le,[e("div",ne,[ie,oe,i(c,{loading:!1},{default:g(()=>[b(" Claim All ")]),_:1})]),se])):d("",!0),t.title.includes("Dashboard")?(l(),n("div",de,[i(o,{label:"My total xCETUS",value:a.xWhaleBalance>0?a.addCommom(a.xWhaleBalance):a.xWhaleBalance},null,8,["value"]),i(o,{label:"Available xCETUS",value:a.availableXwhale>0?a.addCommom(a.availableXwhale):a.availableXwhale},null,8,["value"]),i(o,{label:"Redeeming xCETUS",value:a.redeemingXwhale>0?a.addCommom(a.redeemingXwhale):a.redeemingXwhale},null,8,["value"])])):d("",!0),t.title.includes("Liquidity")?(l(),n("div",ce,[i(o,{label:"My total locked",value:"$100.12"}),i(o,{label:"Pending rewards (xCETUS)",value:"55.431"},null,8,["label"])])):d("",!0)],2)]),t.title.includes("Dashboard")?(l(),n("div",re,[i(o,{label:"My total xCETUS",value:a.xWhaleBalance},null,8,["value"]),i(o,{label:"Available xCETUS",value:a.availableXwhale},null,8,["value"]),i(o,{label:"Redeeming xCETUS",value:a.redeemingXwhale},null,8,["value"])])):d("",!0),t.title.includes("Leaderboard")?(l(),n("div",_e,[ue,i(c,{loading:!1},{default:g(()=>[b(" Claim All ")]),_:1})])):d("",!0),t.title.includes("Liquidity")?(l(),n("div",me,[i(o,{label:"My total locked",value:"$100.12"}),i(o,{label:"Pending rewards (xCETUS)",value:"55.431"},null,8,["label"])])):d("",!0)])}const xe=y(j,[["render",he],["__scopeId","data-v-bdb29549"]]);export{xe as _};
