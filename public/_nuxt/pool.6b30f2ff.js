import{_ as x}from"./nuxt-link.a4f20066.js";import{u as ee,c as w,a as oe}from"./sha256.9163db08.js";import{a as te,l as se,b as ne,r as n,m as d,y as ae,D as F,e as re,Q as P,o as p,f as m,h as u,i as l,w as f,F as ie,s as le,x as S,u as D,v as g,z as K,U as ue,j as M,V as ce,p as de,k as pe}from"./entry.aafbdb45.js";/* empty css              *//* empty css              */import{u as me,e as fe}from"./pool.500c575e.js";import"./decimal.0e8aa3f1.js";const ge=te({setup(e,a){const{t:I,locale:$}=se(),t=ne(),N=n(!1),v=n(!1),h=n(!1),b=n("TVL"),V=n(["APR","VOL"]),L=n([]),_=n(["pools"]),s=me(),i=ee(),R=n(!0),O=n(!1),j=n(!1),E=n(!1),q=n(""),T=d(()=>s),U=d(()=>{const o=Array.from(new Set(T.value.poolConfigList.flatMap(r=>!r.category||r.category==""?"All":r.category)));return console.log(o,"newArr"),o.length<=1?[]:o}),Q=o=>{T.value.setCurrentPoolTab(o)},A=d(()=>i),W=d(()=>i.theme),G=d(()=>w[A.value.chainName]),H=d(()=>i.statsData);ae(()=>{var k,y,C,c;const o=(k=t==null?void 0:t.currentRoute)==null?void 0:k.value.name.split("-")[1];_.value=!o||o=="list"||o==""?["pools"]:[`${o}`];const r=(c=(C=(y=t==null?void 0:t.currentRoute)==null?void 0:y.value)==null?void 0:C.query)==null?void 0:c.language;r&&z(r),q.value=$.value,document.addEventListener("click",()=>{h.value=!1})}),F(()=>t,o=>{var r,k,y,C;if(o){const c=(r=t==null?void 0:t.currentRoute)==null?void 0:r.value.name.split("-")[1];_.value=!c||c=="list"||c==""?["pools"]:[`${c}`];const B=(C=(y=(k=t==null?void 0:t.currentRoute)==null?void 0:k.value)==null?void 0:y.query)==null?void 0:C.language;B&&z(B),q.value=$.value}},{deep:!0});const{setLang:J}=i,z=o=>{J(o),$.value=o};F(()=>A.value.chainName,(o,r)=>{o&&i.getStatsData(o,A.value.filterCoinsObj)},{immediate:!0});const X=()=>{R.value=!0,v.value=!0,i.setisRefresh(),setTimeout(()=>{v.value=!1},1e3)},Y=oe(),Z=d(()=>Y);return{tabArr:U,changeTab:Q,isViewCard:E,isDisplayAll:O,isFarms:j,clickRefresh:X,store:A,config:G,t:I,router:t,loading:N,refresh:v,current:_,addCommom:fe,list:L,theme:W,statsData:H,pools:T,isOpenSort:h,selectValue:b,selectList:V,listLoading:R,languageValue:q,wallet:Z}}});const ve=e=>(de("data-v-c41b4888"),e=e(),pe(),e),he={class:"upgrade-pools-container"},_e={class:"upgrade-pools-header"},ke={class:"header-left"},ye={key:0},Ce={key:0},$e={class:"header-right"},be={key:0,class:"tag-list"},Ae=["onClick"],Se=["href"],we=ve(()=>u("svg",{"aria-hidden":"true",class:"refresh-icon"},[u("use",{"xlink:href":"#icon-icon-refresh2"})],-1)),Ve=[we];function Le(e,a,I,$,t,N){const v=P("mail-outlined"),h=x,b=ce,V=P("appstore-outlined"),L=ue,_=P("router-view");return p(),m("div",he,[u("div",_e,[u("div",ke,[l(L,{selectedKeys:e.current,"onUpdate:selectedKeys":a[1]||(a[1]=s=>e.current=s),mode:"horizontal"},{default:f(()=>[l(b,{key:"pools"},{default:f(()=>[l(h,{to:"/pool/list"},{icon:f(()=>[l(v)]),default:f(()=>[M(" "+g(e.$t("menu.pools"))+" ",1),e.store.poolAmount!=="--"?(p(),m("i",ye,g(e.store.poolAmount),1)):S("",!0)]),_:1})]),_:1}),l(b,{key:"position",onClick:a[0]||(a[0]=s=>e.current=["position"])},{default:f(()=>[l(h,{to:"/pool/position"},{icon:f(()=>[l(V)]),default:f(()=>[M(" "+g(e.$t("common.myPosition"))+" ",1),e.store.positionAmount!=="--"&&e.wallet.connected?(p(),m("i",Ce,g(e.store.positionAmount),1)):S("",!0)]),_:1})]),_:1})]),_:1},8,["selectedKeys"])]),u("div",$e,[e.tabArr.length>1?(p(),m("div",be,[(p(!0),m(ie,null,le(e.tabArr,(s,i)=>(p(),m("div",{key:i,class:K(["tag-item",s==e.pools.currentPoolTab?"tag-active":""]),onClick:R=>e.changeTab(s)},g(s),11,Ae))),128))])):S("",!0),e.store.theme=="default"?(p(),m("a",{key:1,class:"quickly-enter-link quickly-enter",href:`${("config"in e?e.config:D(w)).ammSite}/pools?language=${e.languageValue}&chain=aptos`},g(e.$t("common.ammPools")),9,Se)):S("",!0),u("div",{class:"quickly-enter",onClick:a[2]||(a[2]=s=>e.router.push(`/liquidity/create?toCoin=${("config"in e?e.config:D(w)).currentChainTokenAddress}`))}," Create Pool "),u("div",{class:"quickly-enter",onClick:a[3]||(a[3]=s=>e.router.push(`/liquidity/deposit?action=newposition&toCoin=${("config"in e?e.config:D(w)).currentChainTokenAddress}`))}," + Add Liquidity "),u("div",{class:K(e.refresh?"refresh fresh-box":"fresh-box"),onClick:a[4]||(a[4]=(...s)=>e.clickRefresh&&e.clickRefresh(...s))},Ve,2)])]),l(_)])}const ze=re(ge,[["render",Le],["__scopeId","data-v-c41b4888"]]);export{ze as default};
