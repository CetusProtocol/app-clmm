import{a as O,W as A,l as M,r as b,y as T,m as V,ad as z,e as D,Q as E,o as l,c as C,w as i,h as o,i as c,j as k,v as p,f as u,F,s as j,z as N,x as _,ae as L,I as Q,Y as U,B as W,p as Y,k as q}from"./entry.1f4600f5.js";/* empty css              *//* empty css              */import{u as G}from"./sha256.afac5bac.js";const H=O({components:{Modal:A},setup(e,n){const{t:w,locale:y}=M(),g=G(),I=["0.1","0.5","1"],r=b(g.slippage||.5),{setSlippage:f}=g,m=z();function v(a,h){r.value=h}function S(){localStorage.setItem("swapOrderSplit",s.value),localStorage.setItem("includeRoutes",t.value),f(r.value),n.emit("onClose",!1)}const s=b(),t=b(),$=a=>{s.value=a},R=a=>{t.value=a};T(()=>{const a=localStorage.getItem("swapOrderSplit")||"open";a=="open"?s.value="open":a=="close"?s.value="close":s.value="open";const h=localStorage.getItem("includeRoutes")||"close";h=="open"?t.value="open":(h=="close",t.value="close")});const B=V(()=>g.chainName);return{settingArr:I,changeActiveIndex:v,confirm:S,emit:m,slippage:r,t:w,orderSplit:s,includeRoutes:t,setOrderSplit:$,setIncludeRoutes:R,chainName:B}}});const d=e=>(Y("data-v-e79a4e25"),e=e(),q(),e),J=d(()=>o("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),K={class:"setting-container"},P={class:"title"},X={class:"tag-list"},Z={class:"input-box"},x={class:"custom"},ee={key:0,class:"icon modal-icon-close","aria-hidden":"true"},se=d(()=>o("use",{"xlink:href":"#icon-icon-tips"},null,-1)),oe=[se],ne={key:1,class:"icon modal-icon-close","aria-hidden":"true"},te=d(()=>o("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),ae=[te],le={key:1,class:"swap-router-config"},ie={class:"order-split"},pe=d(()=>o("span",null,"Support order split",-1)),re={class:"include-router"},ce=d(()=>o("span",null,"Include DeepBook routes",-1)),ue={class:"footer"};function de(e,n,w,y,g,I){const r=L,f=Q,m=U,v=W,S=E("Modal");return l(),C(S,{title:"Settings",class:"setting",centered:"",visible:!0,width:"400px",onCancel:n[4]||(n[4]=s=>e.$emit("onClose"))},{closeIcon:i(()=>[J]),footer:i(()=>[o("div",ue,[c(v,{type:"cancel",class:"cancel-btn cancel-btn-new",onClick:n[3]||(n[3]=s=>e.$emit("onClose"))},{default:i(()=>[k(p(e.$t("button.cancel")),1)]),_:1}),c(v,{class:"confirmbtn",disabled:Number(e.slippage)==0||Number(e.slippage)>50,onClick:e.confirm},{default:i(()=>[k(p(e.$t("button.confirm")),1)]),_:1},8,["disabled","onClick"])])]),default:i(()=>[o("div",K,[o("div",P,p(e.$t("modal.slippageTolerance")),1),o("div",X,[(l(!0),u(F,null,j(e.settingArr,(s,t)=>(l(),C(r,{key:t,class:N(s==e.slippage?"tag-active":""),onClick:$=>e.changeActiveIndex(t,s)},{default:i(()=>[k(p(s)+"% ",1)]),_:2},1032,["class","onClick"]))),128))]),o("div",Z,[c(f,{value:e.slippage,"onUpdate:value":n[0]||(n[0]=s=>e.slippage=s),placeholder:"",suffix:"%",class:N(["slippage-input",Number(e.slippage)>1&&50>=Number(e.slippage)?"slippage-input-waring":Number(e.slippage)>50?"slippage-input-error":""])},null,8,["value","class"]),o("span",x,p(e.$t("modal.customSlippage")),1)])]),e.slippage?(l(),u("div",{key:0,class:N(["slippage-hint",Number(e.slippage)>1&&50>=Number(e.slippage)?"slippage-hint-waring":Number(e.slippage)>50?"slippage-hint-error":""])},[Number(e.slippage)>1&&50>=Number(e.slippage)?(l(),u("svg",ee,oe)):_("",!0),Number(e.slippage)>50?(l(),u("svg",ne,ae)):_("",!0),o("p",null,p(Number(e.slippage)>1&&50>=Number(e.slippage)?e.$t("tips.slippageTolerance2"):Number(e.slippage)>50?e.$t("tips.slippageTolerance1"):""),1)],2)):_("",!0),e.chainName=="Sui"&&e.$route.name=="swap"?(l(),u("div",le,[o("div",ie,[pe,c(m,{class:"range-alerts-switch",checked:e.orderSplit=="open",onChange:n[1]||(n[1]=s=>e.setOrderSplit(e.orderSplit=="open"?"close":"open"))},null,8,["checked"])]),o("div",re,[ce,c(m,{class:"range-alerts-switch",checked:e.includeRoutes=="open",onChange:n[2]||(n[2]=s=>e.setIncludeRoutes(e.includeRoutes=="open"?"close":"open"))},null,8,["checked"])])])):_("",!0)]),_:1})}const _e=D(H,[["render",de],["__scopeId","data-v-e79a4e25"]]);export{_e as _};
