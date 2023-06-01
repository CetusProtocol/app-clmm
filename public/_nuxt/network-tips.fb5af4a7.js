import{a as T,M as z,l as D,r as _,ae as E,e as A,L as F,o as p,c as I,w as m,h as s,i as w,j as b,v as g,f,F as V,s as j,z as k,x as h,af as O,I as U,B as W,p as B,k as M,m as $,D as y,u as q}from"./entry.97513d1f.js";/* empty css              */import{u as L,_ as v}from"./index.f0ad319f.js";import{i as G}from"./pool.0ee2ab8c.js";const H=T({components:{Modal:z},setup(e,n){const{t:c,locale:r}=D(),u=L(),o=["0.1","0.5","1"],i=_(u.slippage||.5),{setSlippage:d}=u,l=E();function t(N,S){i.value=S}function a(){d(i.value),n.emit("onClose",!1)}return{settingArr:o,changeActiveIndex:t,confirm:a,emit:l,slippage:i,t:c}}});const C=e=>(B("data-v-e8a8c660"),e=e(),M(),e),J=C(()=>s("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),K={class:"setting-container"},P={class:"tag-list"},Q={class:"input-box"},R={class:"custom"},X={key:0,class:"icon modal-icon-close","aria-hidden":"true"},Y=C(()=>s("use",{"xlink:href":"#icon-icon-tips"},null,-1)),Z=[Y],x={key:1,class:"icon modal-icon-close","aria-hidden":"true"},ee=C(()=>s("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),se=[ee],ne={class:"footer"};function oe(e,n,c,r,u,o){const i=O,d=U,l=W,t=F("Modal");return p(),I(t,{title:"Slippage Settings",class:"setting",centered:"",visible:!0,width:"400px",onCancel:n[2]||(n[2]=a=>e.$emit("onClose"))},{closeIcon:m(()=>[J]),footer:m(()=>[s("div",ne,[w(l,{type:"cancel",class:"cancel-btn cancel-btn-new",onClick:n[1]||(n[1]=a=>e.$emit("onClose"))},{default:m(()=>[b(g(e.$t("button.cancel")),1)]),_:1}),w(l,{class:"confirmbtn",disabled:Number(e.slippage)==0||Number(e.slippage)>100,onClick:e.confirm},{default:m(()=>[b(g(e.$t("button.confirm")),1)]),_:1},8,["disabled","onClick"])])]),default:m(()=>[s("div",K,[s("div",P,[(p(!0),f(V,null,j(e.settingArr,(a,N)=>(p(),I(i,{key:N,class:k(a==e.slippage?"tag-active":""),onClick:S=>e.changeActiveIndex(N,a)},{default:m(()=>[b(g(a)+"% ",1)]),_:2},1032,["class","onClick"]))),128))]),s("div",Q,[w(d,{value:e.slippage,"onUpdate:value":n[0]||(n[0]=a=>e.slippage=a),placeholder:"",suffix:"%",class:k(["slippage-input",Number(e.slippage)>1&&50>=Number(e.slippage)?"slippage-input-waring":Number(e.slippage)>50?"slippage-input-error":""])},null,8,["value","class"]),s("span",R,g(e.$t("modal.customSlippage")),1)])]),e.slippage?(p(),f("div",{key:0,class:k(["slippage-hint",Number(e.slippage)>1&&50>=Number(e.slippage)?"slippage-hint-waring":Number(e.slippage)>50?"slippage-hint-error":""])},[Number(e.slippage)>1&&50>=Number(e.slippage)?(p(),f("svg",X,Z)):h("",!0),Number(e.slippage)>50?(p(),f("svg",x,se)):h("",!0),s("p",null,g(Number(e.slippage)>1&&50>=Number(e.slippage)?e.$t("tips.slippageTolerance2"):Number(e.slippage)>50?e.$t("tips.slippageTolerance1"):""),1)],2)):h("",!0)]),_:1})}const me=A(H,[["render",oe],["__scopeId","data-v-e8a8c660"]]),te=T({setup(){const e=G(),n=$(()=>e),c=_(""),r=_(!1),u=L(),o=$(()=>u);y(()=>n.value.walletNetwork,t=>{c.value=t,t&&o.value.chainName&&t.toLowerCase().indexOf(v[o.value.chainName].network)<0?r.value=!0:r.value=!1},{immediate:!0});const i=$(()=>n.value.aptosConnected),d=_(""),l=_("");return y(()=>o.value.chainName,t=>{t&&(d.value=v[o.value.chainName].network,l.value=o.value.chainName)},{immediate:!0}),{walletNetwork:c,configNetwork:d,isShowTips:r,chainName:l,aptosConnected:i,config:v}}});const ae=e=>(B("data-v-bd6c0e96"),e=e(),M(),e),ie={key:0,class:"network-tips"},le=ae(()=>s("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1));function pe(e,n,c,r,u,o){return e.isShowTips&&e.chainName==="Aptos"&&e.aptosConnected?(p(),f("div",ie,[le,s("span",null,g(e.$t("newAdd.walletNotConnect",{network:`${("config"in e?e.config:q(v))[e.chainName].networkTip}`})),1)])):h("",!0)}const ge=A(te,[["render",pe],["__scopeId","data-v-bd6c0e96"]]);export{me as _,ge as a};
