import{a as f,u as h,c as s}from"./sha256.1260a8a5.js";import{a as v,m as r,r as n,D as m,e as w,o as k,f as N,h as l,v as S,u as g,x as C,p as $,k as I}from"./entry.cb7a74c4.js";const x=v({setup(){const e=f(),c=r(()=>e),i=n(""),t=n(!1),u=h(),o=r(()=>u);m(()=>c.value.walletNetwork,a=>{i.value=a,a&&o.value.chainName&&a.toLowerCase().indexOf(s[o.value.chainName].network)<0?t.value=!0:t.value=!1},{immediate:!0});const _=r(()=>c.value.aptosConnected),d=n(""),p=n("");return m(()=>o.value.chainName,a=>{a&&(d.value=s[o.value.chainName].network,p.value=o.value.chainName)},{immediate:!0}),{walletNetwork:i,configNetwork:d,isShowTips:t,chainName:p,aptosConnected:_,config:s}}});const y=e=>($("data-v-bd6c0e96"),e=e(),I(),e),T={key:0,class:"network-tips"},b=y(()=>l("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[l("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1));function B(e,c,i,t,u,o){return e.isShowTips&&e.chainName==="Aptos"&&e.aptosConnected?(k(),N("div",T,[b,l("span",null,S(e.$t("newAdd.walletNotConnect",{network:`${("config"in e?e.config:g(s))[e.chainName].networkTip}`})),1)])):C("",!0)}const E=w(x,[["render",B],["__scopeId","data-v-bd6c0e96"]]);export{E as _};
