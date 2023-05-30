import{a as A,M as E,l as F,r as _,ad as L,e as T,K as V,o as c,c as I,w as m,h as s,i as w,j as b,t as g,f as h,F as q,q as z,x as k,s as v,ae as D,I as K,B as O,p as B,k as M,m as $,A as y,u as U}from"./entry.df2391fb.js";/* empty css              */import{a as j,j as W,_ as f}from"./pool.cc4a70b7.js";const G=A({components:{Modal:E},setup(e,n){const{t:p,locale:r}=F(),u=j(),a=["0.1","0.5","1"],i=_(u.slippage||.5),{setSlippage:d}=u,l=L();console.log(i.value,"slippage.value");function o(N,S){i.value=S}function t(){d(i.value),n.emit("onClose",!1)}return{settingArr:a,changeActiveIndex:o,confirm:t,emit:l,slippage:i,t:p}}});const C=e=>(B("data-v-e8a8c660"),e=e(),M(),e),H=C(()=>s("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),J={class:"setting-container"},P={class:"tag-list"},Q={class:"input-box"},R={class:"custom"},X={key:0,class:"icon modal-icon-close","aria-hidden":"true"},Y=C(()=>s("use",{"xlink:href":"#icon-icon-tips"},null,-1)),Z=[Y],x={key:1,class:"icon modal-icon-close","aria-hidden":"true"},ee=C(()=>s("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),se=[ee],ne={class:"footer"};function oe(e,n,p,r,u,a){const i=D,d=K,l=O,o=V("Modal");return c(),I(o,{title:"Slippage Settings",class:"setting",centered:"",visible:!0,width:"400px",onCancel:n[2]||(n[2]=t=>e.$emit("onClose"))},{closeIcon:m(()=>[H]),footer:m(()=>[s("div",ne,[w(l,{type:"cancel",class:"cancel-btn cancel-btn-new",onClick:n[1]||(n[1]=t=>e.$emit("onClose"))},{default:m(()=>[b(g(e.$t("button.cancel")),1)]),_:1}),w(l,{class:"confirmbtn",disabled:Number(e.slippage)==0||Number(e.slippage)>100,onClick:e.confirm},{default:m(()=>[b(g(e.$t("button.confirm")),1)]),_:1},8,["disabled","onClick"])])]),default:m(()=>[s("div",J,[s("div",P,[(c(!0),h(q,null,z(e.settingArr,(t,N)=>(c(),I(i,{key:N,class:k(t==e.slippage?"tag-active":""),onClick:S=>e.changeActiveIndex(N,t)},{default:m(()=>[b(g(t)+"% ",1)]),_:2},1032,["class","onClick"]))),128))]),s("div",Q,[w(d,{value:e.slippage,"onUpdate:value":n[0]||(n[0]=t=>e.slippage=t),placeholder:"",suffix:"%",class:k(["slippage-input",Number(e.slippage)>1&&50>=Number(e.slippage)?"slippage-input-waring":Number(e.slippage)>50?"slippage-input-error":""])},null,8,["value","class"]),s("span",R,g(e.$t("modal.customSlippage")),1)])]),e.slippage?(c(),h("div",{key:0,class:k(["slippage-hint",Number(e.slippage)>1&&50>=Number(e.slippage)?"slippage-hint-waring":Number(e.slippage)>50?"slippage-hint-error":""])},[Number(e.slippage)>1&&50>=Number(e.slippage)?(c(),h("svg",X,Z)):v("",!0),Number(e.slippage)>50?(c(),h("svg",x,se)):v("",!0),s("p",null,g(Number(e.slippage)>1&&50>=Number(e.slippage)?e.$t("tips.slippageTolerance2"):Number(e.slippage)>50?e.$t("tips.slippageTolerance1"):""),1)],2)):v("",!0)]),_:1})}const de=T(G,[["render",oe],["__scopeId","data-v-e8a8c660"]]),ae=A({setup(){const e=W(),n=$(()=>e),p=_(""),r=_(!1),u=j(),a=$(()=>u);y(()=>n.value.walletNetwork,o=>{console.log(o,"===>newValue"),p.value=o,o&&a.value.chainName&&o.toLowerCase().indexOf(f[a.value.chainName].network)<0?r.value=!0:r.value=!1},{immediate:!0});const i=$(()=>n.value.aptosConnected),d=_(""),l=_("");return y(()=>a.value.chainName,o=>{o&&(d.value=f[a.value.chainName].network,l.value=a.value.chainName,console.log(l,"===>chainName"))},{immediate:!0}),{walletNetwork:p,configNetwork:d,isShowTips:r,chainName:l,aptosConnected:i,config:f}}});const te=e=>(B("data-v-bd6c0e96"),e=e(),M(),e),ie={key:0,class:"network-tips"},le=te(()=>s("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1));function ce(e,n,p,r,u,a){return e.isShowTips&&e.chainName==="Aptos"&&e.aptosConnected?(c(),h("div",ie,[le,s("span",null,g(e.$t("newAdd.walletNotConnect",{network:`${("config"in e?e.config:U(f))[e.chainName].networkTip}`})),1)])):v("",!0)}const me=T(ae,[["render",ce],["__scopeId","data-v-bd6c0e96"]]);export{de as _,me as a};
