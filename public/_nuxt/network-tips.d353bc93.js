import{a as f,u as h,c as s}from"./sha256.9163db08.js";import{a as v,m as l,r as n,D as m,e as w,o as N,f as k,h as u,v as S,u as g,x as C,p as $,k as I}from"./entry.aafbdb45.js";const x=v({setup(){const e=f(),c=l(()=>e),i=n(""),t=n(!1),d=h(),o=l(()=>d);m(()=>c.value.walletNetwork,a=>{console.log(a,"===>newValue"),i.value=a,a&&o.value.chainName&&a.toLowerCase().indexOf(s[o.value.chainName].network)<0?t.value=!0:t.value=!1},{immediate:!0});const _=l(()=>c.value.aptosConnected),p=n(""),r=n("");return m(()=>o.value.chainName,a=>{a&&(p.value=s[o.value.chainName].network,r.value=o.value.chainName,console.log(r,"===>chainName"))},{immediate:!0}),{walletNetwork:i,configNetwork:p,isShowTips:t,chainName:r,aptosConnected:_,config:s}}});const y=e=>($("data-v-bd6c0e96"),e=e(),I(),e),T={key:0,class:"network-tips"},b=y(()=>u("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[u("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1));function B(e,c,i,t,d,o){return e.isShowTips&&e.chainName==="Aptos"&&e.aptosConnected?(N(),k("div",T,[b,u("span",null,S(e.$t("newAdd.walletNotConnect",{network:`${("config"in e?e.config:g(s))[e.chainName].networkTip}`})),1)])):C("",!0)}const E=w(x,[["render",B],["__scopeId","data-v-bd6c0e96"]]);export{E as _};
