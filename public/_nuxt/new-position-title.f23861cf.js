import{_ as y}from"./back.5bbe4c8d.js";import{_ as R}from"./swap-setting.406cc772.js";import{u as h}from"./sha256.22518486.js";import{a as S,r as n,l as _,e as g,o as d,f as m,h as i,v as B,c as T,x as A,p as w,k,N as O,q as P,b as V,i as v,C as j}from"./entry.1d58a270.js";import{u as q,c as z}from"./pool.894b5f1d.js";const D=S({setup(){const e=h(),o=n(!1),c=_(()=>e);return{slippage:_(()=>c.value.slippage),isShowSwapSetting:o}}});const E=e=>(w("data-v-82585f8b"),e=e(),k(),e),M=E(()=>i("svg",{class:"icon","aria-hidden":"true"},[i("use",{"xlink:href":"#icon-a-icon-setslippage"})],-1));function U(e,o,c,a,t,r){const l=R;return d(),m("div",{class:"slippage-icon",onClick:o[1]||(o[1]=s=>e.isShowSwapSetting=!0)},[M,i("span",null,B(e.slippage)+"%",1),e.isShowSwapSetting?(d(),T(l,{key:0,onOnClose:o[0]||(o[0]=s=>e.isShowSwapSetting=!1)})):A("",!0)])}const F=g(D,[["render",U],["__scopeId","data-v-82585f8b"]]),G=S({props:{poolInfo:{type:Object,default:()=>({})}},setup(e,o){const c=n(!1),a=n(null),t=n(0),r=n(20),l=q(),s=h(),p=n(!1);O(()=>{clearInterval(a.value)});const I=()=>{a.value=setInterval(()=>{var u;p.value||t.value<r.value&&(t.value+=1,t.value===r.value&&((u=e==null?void 0:e.poolInfo)!=null&&u.poolAddress&&l.updateCurrentPools(e.poolInfo.poolAddress,s.chainName),t.value=0))},1e3)},$=_(()=>s.slippage),b=()=>{o.emit("clearAll")},f=n(!1),N=()=>{t.value=0,f.value=!0,o.emit("clickRefresh"),setTimeout(()=>{f.value=!1},1e3)};P(()=>e.poolInfo,u=>{u&&!a.value&&I()},{immediate:!0});const C=V(),x=_(()=>s.chainName);return{clickRefresh:N,isShowSwapSetting:c,countdown:t,autoRefreshTime:r,slippage:$,clearAll:b,checkNullObj:z,router:C,loading:p,chainName:x,refresh:f}}});const H=e=>(w("data-v-ca768f9b"),e=e(),k(),e),J={class:"new-position-title"},K={class:"left"},L={class:"right"},Q=H(()=>i("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),W=[Q];function X(e,o,c,a,t,r){const l=y,s=F;return d(),m("div",J,[i("div",K,[v(l)]),i("div",L,[v(s),(d(),m("svg",{"aria-hidden":"true",class:j(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:o[0]||(o[0]=(...p)=>e.clickRefresh&&e.clickRefresh(...p))},W,2))])])}const se=g(G,[["render",X],["__scopeId","data-v-ca768f9b"]]);export{se as _};
