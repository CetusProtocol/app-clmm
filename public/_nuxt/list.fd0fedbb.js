import{_ as ie}from"./upgrade-select-input.ac36182d.js";import{_ as ce}from"./upgrade-loading.fbcff0f3.js";import{_ as ue}from"./apr-tips.47413fd8.js";import{_ as ve}from"./coin-tips.78991f49.js";import{_ as he}from"./nuxt-link.f53e954c.js";import{_ as Vs,a as pe,b as Es,c as Ms}from"./pools-list-item.f3dbd884.js";import{u as _e,c as ys}from"./sha256.29b0ebac.js";import{u as ge,a as $,L as fe,c as q,d as x,k as Is,j as As,l as be}from"./pool.2069f4f3.js";import{i as us}from"./import-icon.de3e6c66.js";import{a as ke,y as we,b as ye,r as w,l as R,H as me,q as ds,m as Ae,X as Ce,e as Se,s as Oe,o as a,f as l,h as o,F as D,E as V,x as _,i as k,A as E,z as is,v as p,j as L,t as Z,w as cs,u as h,c as Ns,p as Ie,k as Ne,M as Le}from"./entry.e9f8e70a.js";/* empty css              */import{p as $e}from"./precision.9d58cda5.js";import{u as je}from"./autoPool.09b54540.js";import{D as Cs}from"./decimal.0bdeb344.js";import{_ as qs}from"./icon-selected_3x.09e9a6f0.js";import{_ as Ps}from"./icon_on_2x.5e96733d.js";import{_ as Hs,a as zs}from"./farms.4e951a66.js";import{a as Js}from"./coin-select.bbd2fc73.js";import{_ as Fe}from"./img-no-Positions_2x.a1f2b6e9.js";import{_ as Be}from"./img-no-Positions_2x.0be0ddd9.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";import"./farms.6fdc0285.js";import"./icon_rewards_2x.66c05b41.js";/* empty css              *//* empty css              */const Re=ke({setup(){const{t:e,locale:m}=we(),K=ye(),Ls=w(!1),ms=w(!1),ss=w(!1),bs=w(!1),ks=w(!1),P=w("VOL"),X=w(["APR","TVL"]),M=w(!1),A=w(e("tab.all")),ws=w([e("tab.wormhole"),e("tab.celer")]),H=R(()=>{const r=Array.from(new Set(u.value.poolConfigList.flatMap(d=>!d.category||d.category==""?"All":d.category)));return r.length<=1?[]:r}),s=r=>{u.value.setCurrentPoolTab(r)},g=w([]),O=w(""),es=w(["pools"]),G=ge(),C=_e(),z=w(!0),T=w(!1),Q=w(!1),Y=w(!1),os=w([]),W=w(""),f=R(()=>C),as=R(()=>C.theme),u=R(()=>G),I=R(()=>C.statsData);me(()=>{var n,S,b;const r=(b=(S=(n=K==null?void 0:K.currentRoute)==null?void 0:n.value)==null?void 0:S.query)==null?void 0:b.language;r&&vs(r),W.value=m.value,document.addEventListener("click",()=>{ks.value=!1,M.value=!1,Y.value=!1});const d=localStorage.getItem(`pools-${ps.value}-selectall`),t=localStorage.getItem(`pools-${ps.value}-farms`),i=localStorage.getItem(`pools-${ps.value}-viewCard`);T.value=d==="true",Q.value=t==="true",ss.value=i==="true";const U=localStorage.getItem("selectIncentiveTypeList"),c=U&&JSON.parse(U);U&&c.length>0?N.value=c:N.value=["Mining","Farming","No incentives"]}),ds(()=>ss.value,async(r,d)=>{r!==d&&(bs.value=!0,await be(1500),bs.value=!1)}),ds(()=>f.value.chainName,(r,d)=>{r&&C.getStatsData(r,f.value.filterCoinsObj)},{immediate:!0});const{setLang:y}=C,vs=r=>{y(r),m.value=r},Ks=(r,d)=>r&&d?$e.plus(Is(r),Is(d)):r||0,Ss=r=>{let d=0;return r&&r.forEach(t=>{d+=Is(String(t))}),String(x(String(d),2))},Xs=(r=[])=>{const d=r&&r.length>0?r:Object.values(u.value.poolsObj),t=[];d.filter(c=>!c.is_closed).forEach(c=>{var js,Fs,Bs,Rs,Ts,Ds,Us;const n=f.value.addressLpTokens[c.address],S=u.value.poolsObj[c.address];let b,J,_s,B,gs,fs;n&&(b=n.rewarder_apr[0]?Number(n.rewarder_apr[0].substring(0,n.rewarder_apr[0].length-1)):0,J=n.rewarder_apr[1]?Number(n.rewarder_apr[1].substring(0,n.rewarder_apr[1].length-1)):0,_s=n.rewarder_apr[2]?Number(n.rewarder_apr[2].substring(0,n.rewarder_apr[2].length-1)):0,B=b+J+_s,n.stable_farming&&n.stable_farming.stable_rewarder.map(de=>{de.amount_second>0&&(fs=!0)}),gs=n.stable_farming&&n.stable_farming.apr*100);const rs=c.needReverse?((Fs=u.value.tokensObj[c.coinB.address])==null?void 0:Fs.labels)||[]:((js=u.value.tokensObj[c.coinA.address])==null?void 0:js.labels)||[],ns=c.needReverse?((Bs=u.value.tokensObj[c.coinA.address])==null?void 0:Bs.labels)||[]:((Rs=u.value.tokensObj[c.coinB.address])==null?void 0:Rs.labels)||[],ts=[...new Set(rs.concat(ns))];t.push({...c,liqidity:n?n.tvl_in_usd:"0",...n,vol:n?n.vol_in_usd_24h:"0",apr:n&&n.apr_7day?(Ts=n.apr_7day)==null?void 0:Ts.replace("%",""):"--",fee:c.fee?c.fee:S!=null&&S.fee?S.fee:"--",aprNum:n&&n.apr_7day?String(Number(n.apr_7day.substring(0,n.apr_7day.length-1))+B):"0",rewarder_apr:Ss(n&&n.rewarder_apr),aprTotal:Ks(n&&n.apr_7day,n&&Ss(n.rewarder_apr)),rewarders0:n&&n.rewarder_apr[0],rewarders1:n&&n.rewarder_apr[1],rewarders2:n&&n.rewarder_apr[2],labels:ts,isFarming:c==null?void 0:c.isFarming,fee_24_h:n&&n.fee_24_h?n.fee_24_h:0,isAuthorized:!!(hs.value[(Ds=c==null?void 0:c.token_a)==null?void 0:Ds.address]&&hs.value[(Us=c==null?void 0:c.token_b)==null?void 0:Us.address]),isStableFarming:fs,stableFarmingApr:gs,isVaults:n&&n.auto_pool})});let i=[];if(P.value=="APR"?i=t.sort((c,n)=>n.aprNum-c.aprNum):P.value=="VOL"?i=t.sort((c,n)=>n.vol-c.vol):i=t.sort((c,n)=>n.liqidity-c.liqidity),A.value!=e("tab.all")){const c=[];i.forEach(n=>{n.labels.indexOf(A.value)!==-1&&c.push(n)}),g.value=c}else g.value=i;if(O.value){var U=new RegExp("[\\u4E00-\\u9FFF]+","g");if(U.test(O.value)){O.value="";return}const c=g.value.filter(n=>n.symbol.toLowerCase().includes(O.value.toLowerCase()));g.value=c}z.value=!1},hs=R(()=>{if(u.value.tokens&&u.value.tokens.length>0){const r={};return u.value.tokens.forEach(d=>{r[d.address]={...d}}),r}return null});ds(()=>[hs.value,u.value.poolConfigList,f.value.chainName,f.value.addressLpTokens,O.value,P.value,A.value],([r,d,t,i])=>{r&&d&&(d==null?void 0:d.length)>0&&d[0]&&t&&(t!=null&&t.toLowerCase().includes(d[0].chain))&&Xs(d)},{immediate:!0,deep:!0}),Ae(),je();const $s=()=>{z.value=!0,ms.value=!0,C.getStatsData(f.value.chainName,f.value.filterCoinsObj),G.setPoolConfigList(f.value.chainName,f.value.filterCoinsObj),setTimeout(()=>{ms.value=!1},1e3)};ds(()=>f.value.isRefresh,r=>{var t;const d=(t=K==null?void 0:K.currentRoute)==null?void 0:t.value.name.split("-")[1];r&&(!d||d=="list"||d=="")&&$s()});const Gs=r=>{const d=[];d.push(P.value),X.value.forEach((t,i)=>{t!=r&&d.push(t)}),X.value=d,P.value=r},Qs=r=>{const d=[];ws.value.forEach((t,i)=>{t==r?d[i]=A.value:d[i]=t}),ws.value=d,A.value=r};ds(()=>C.lang,r=>{W.value=r});const Ys=R(()=>ys[f.value.chainName]);ds(()=>f.value.isSelect,r=>{r!=="pools"&&(ks.value=!1,M.value=!1)});const Zs=R(()=>u.value.poolConfigList.filter(d=>d.address==ys[f.value.chainName].newPositionAddress)[0]),xs=R(()=>ys[f.value.chainName].hasCreatePool),ps=R(()=>f.value.chainName),se=()=>{localStorage.setItem(`pools-${ps.value}-selectall`,T.value?"":"true"),T.value=!T.value},ee=()=>{localStorage.setItem(`pools-${ps.value}-viewCard`,ss.value?"":"true"),ss.value=!ss.value},oe=r=>{var d;return(r==null?void 0:r.logoURI)||(r==null?void 0:r.logo_url)||((d=u.value.tokensObj[r==null?void 0:r.address])==null?void 0:d.logo_url)||(f.value.theme==="default"?us("/image/coins/unknown.png"):us("/image/coins/sui-unknown.png"))},ls=w(null),j=R(()=>ls.value&&ls.value.firstToken?ls.value.firstToken:null),F=R(()=>ls.value&&ls.value.lastToken?ls.value.lastToken:null),ae=R(()=>{if(f.value.chainName!=="Sui")return g.value;if(hs.value&&g.value&&g.value.length>0){const r=[];return g.value.forEach(t=>{var i,U;if(hs.value[(i=t==null?void 0:t.token_a)==null?void 0:i.address]&&hs.value[(U=t==null?void 0:t.token_b)==null?void 0:U.address])if(N.value.includes("Mining")&&t.rewarderInfo&&t.rewarderInfo.length>0){const c=[];t.rewarderInfo.forEach((b,J)=>{var rs,ns,ts;const _s=(rs=u.value.tokensObj[b.coinAddress])==null?void 0:rs.decimals,B=As(new Cs(b.emissionsEveryDay/Math.pow(10,_s)).toDP(2,Cs.ROUND_HALF_UP).toString(),4),gs=Number(B)>0?$(B):B,fs=As(Number(B)*u.value.RATES[b.coinAddress]&&u.value.RATES[b.coinAddress].price,4);c.push({...b,logoUrl:(ns=u.value.tokensObj[b.coinAddress])==null?void 0:ns.logoURI,day:gs,dayUSD:fs,symbol:(ts=u.value.tokensObj[b.coinAddress])==null?void 0:ts.symbol,rewarders:t[`rewarders${J}`]&&t[`rewarders${J}`].replace("%",""),rewarder_display:t[`rewarder_display${J+1}`],resultDay:B})});const n=c.filter(b=>b.rewarder_display);let S=[];(!t.rewarderInfo||t.rewarderInfo.length<1||JSON.stringify(t.rewarderInfo)!==JSON.stringify(r))&&(S=n),r.push({...t,rewardes:S})}else(N.value.includes("Farming")&&t.isStableFarming||N.value.includes("No incentives")&&t.rewarderInfo&&t.rewarderInfo.length<=0&&!t.isStableFarming)&&r.push(t)}),r.filter((t,i)=>j.value&&F.value?t.coinA.address==j.value.address&&t.coinB.address==F.value.address||t.coinA.address==F.value.address&&t.coinB.address==j.value.address:j.value?t.coinA.address.toLowerCase().includes(j.value.address.toLowerCase())||t.coinB.address.toLowerCase().includes(j.value.address.toLowerCase()):F.value?t.coinA.address.toLowerCase().includes(F.value.address.toLowerCase())||t.coinB.address.toLowerCase().includes(F.value.address.toLowerCase()):r)}return[]}),Os=w([]),le=["Mining","Farming","No incentives"],N=w(),re=r=>{if(N.value.includes(r)){const d=N.value.indexOf(r);N.value.splice(d,1)}else N.value.push(r);localStorage.setItem("selectIncentiveTypeList",JSON.stringify(N.value))},ne=()=>{let r=[];r=g.value;const d=r.filter((i,U)=>j.value&&F.value?i.coinA.address==j.value.address&&i.coinB.address==F.value.address||i.coinA.address==F.value.address&&i.coinB.address==j.value.address:j.value?i.coinA.address.toLowerCase().includes(j.value.address.toLowerCase())||i.coinB.address.toLowerCase().includes(j.value.address.toLowerCase()):F.value?i.coinA.address.toLowerCase().includes(F.value.address.toLowerCase())||i.coinB.address.toLowerCase().includes(F.value.address.toLowerCase()):r);let t=[];d.forEach((i,U)=>{if(N.value.includes("Mining")&&i.rewarderInfo&&i.rewarderInfo.length>0){const c=[];if(i.rewarderInfo&&i.rewarderInfo.length>0){i.rewarderInfo.forEach((b,J)=>{var rs,ns,ts;const _s=(rs=u.value.tokensObj[b.coinAddress])==null?void 0:rs.decimals,B=As(new Cs(b.emissionsEveryDay/Math.pow(10,_s)).toDP(2,Cs.ROUND_HALF_UP).toString(),4),gs=Number(B)>0?$(B):B,fs=As(Number(B)*u.value.RATES[b.coinAddress]&&u.value.RATES[b.coinAddress].price,4);c.push({...b,logoUrl:(ns=u.value.tokensObj[b.coinAddress])==null?void 0:ns.logoURI,day:gs,dayUSD:fs,symbol:(ts=u.value.tokensObj[b.coinAddress])==null?void 0:ts.symbol,rewarders:i[`rewarders${J}`]&&i[`rewarders${J}`].replace("%",""),rewarder_display:i[`rewarder_display${J+1}`],resultDay:B})});const n=c.filter(b=>b.rewarder_display);let S=[];(!i.rewarderInfo||i.rewarderInfo.length<1||JSON.stringify(i.rewarderInfo)!==JSON.stringify(n))&&(S=n),t.push({...i,rewardes:S})}}else(N.value.includes("Farming")&&i.isStableFarming||N.value.includes("No incentives")&&i.rewarderInfo&&i.rewarderInfo.length<=0&&!i.isStableFarming)&&t.push(i)}),Os.value=t,z.value||(T.value?C.setPoolAmount(t.length):C.setPoolAmount(ae.value.length))};Ce(()=>{C.setPoolAmount("--")}),ds(()=>[j.value,F.value,g.value,T.value,u.value.currentPoolTab,N.value],([r,d,t,i,U,c])=>{var n,S;(r&&((n=u==null?void 0:u.value.tokensObj[r.address])!=null&&n.isSelfBuilt)||d&&((S=u==null?void 0:u.value.tokensObj[d.address])!=null&&S.isSelfBuilt))&&!U?Os.value=[]:(r||d||t||i)&&ne()},{deep:!0});const te=R(()=>f.value.poolAmount!=="--"?4-Number(f.value.poolAmount)%4:0);return{isCheckOpen:Y,selectedIncentiveType:re,selectIncentiveTypeList:N,selectedOptions:os,tabArr:H,changeTab:s,getLabel:r=>u.value.tokensObj&&u.value.tokensObj[r]&&u.value.tokensObj[r].labels,patchNumber:te,getRewarderApr:Ss,childTokenSelectRef:ls,firstToken:j,lastToken:F,showList:Os,isFarms:Q,getCoinIcon:oe,isViewCard:ss,clickDisplayAll:se,clickViewCard:ee,isSelectAll:T,chainName:ps,hasCreatePool:xs,store:f,lpInfo:Zs,config:Ys,t:e,router:K,loading:Ls,clickRefresh:$s,refresh:ms,searchKey:O,current:es,addCommom:$,list:g,theme:as,statsData:I,pools:u,select:ks,selectValue:P,selectList:X,label:M,labelValue:A,labelList:ws,changeSort:Gs,changeSortLabel:Qs,listLoading:z,languageValue:W,isSwitchDisplayMode:bs,formatNumberAddCommom:fe,checkNullObj:q,importIcon:us,decimalUi:x,incentiveTypesList:le}}}),Ws=""+globalThis.__publicAssetsURL("sui-image/icon_autopools@2x.gif");const v=e=>(Ie("data-v-f4ac5986"),e=e(),Ne(),e),Te={class:"upgrade-pools-list-container"},De={class:"content-top"},Ue={class:"content-top-left"},Ve={key:0,class:"tag-list"},Ee=["onClick"],Me={class:"content-top-right"},qe={class:"radio"},Pe={key:0,src:qs},He=v(()=>o("span",null,"Display all pools",-1)),ze={class:"check-box"},Je=v(()=>o("span",null,"Incentive types",-1)),We=v(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),Ke=[We],Xe={key:0,class:"select-list"},Ge=["onClick"],Qe={class:"radio"},Ye={key:0,src:qs},Ze={class:"search-select-box"},xe=v(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),so=[xe],eo={key:0,class:"select-list"},oo=["onClick"],ao={class:"search-select-box"},lo=v(()=>o("img",{src:Ps,alt:""},null,-1)),ro=v(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),no=[ro],to={key:0,class:"select-list"},io=["onClick"],co=v(()=>o("img",{src:Ps,alt:""},null,-1)),uo={key:0,"aria-hidden":"true",class:"cardIcon"},vo=v(()=>o("use",{"xlink:href":"#icon-icon-card"},null,-1)),ho=[vo],po={key:1,"aria-hidden":"true",class:"listIcon"},_o=v(()=>o("use",{"xlink:href":"#icon-icon-list1"},null,-1)),go=[_o],fo={key:0,class:"upgrade-loading"},bo={key:1,class:"table-contianer"},ko={class:"table"},wo={class:"table-header"},yo={class:"table-tr"},mo=v(()=>o("th",null,"Pools",-1)),Ao=v(()=>o("th",null,"Liquidity",-1)),Co=v(()=>o("th",null,"Volume (24H)",-1)),So=v(()=>o("th",null,"Fees (24H)",-1)),Oo=v(()=>o("th",null,"Mining Rewards",-1)),Io={class:"hover-box"},No={class:"apr-hover-content"},Lo=v(()=>o("th",null,"Action",-1)),$o={class:"table-body"},jo=["onClick"],Fo={class:"token"},Bo={class:"img-box"},Ro={key:0,class:"pool-warning"},To={class:"img-box img-last-box"},Do={key:0,class:"pool-warning"},Uo={class:"name"},Vo={class:"top"},Eo={class:"token-name"},Mo={class:"tokena"},qo={class:"tokenb"},Po={class:"fee-tier-top"},Ho={key:0,class:"isFarming farming-logo"},zo=v(()=>o("img",{class:"default-img",src:Es,alt:""},null,-1)),Jo=v(()=>o("img",{class:"hover-img",src:Ms,alt:""},null,-1)),Wo=v(()=>o("div",{class:"hover-text"},"Mining rewards available",-1)),Ko=[zo,Jo,Wo],Xo={key:1,class:"isFarming vault-logo"},Go=v(()=>o("img",{class:"default-img",src:Hs,alt:""},null,-1)),Qo=v(()=>o("img",{class:"hover-img",src:zs,alt:""},null,-1)),Yo=v(()=>o("div",{class:"hover-text"},"Farm rewards available",-1)),Zo={key:2,class:"isFarming vault-logo"},xo=v(()=>o("img",{class:"default-img",src:Vs,alt:""},null,-1)),sa=v(()=>o("img",{class:"hover-img",src:Ws,alt:""},null,-1)),ea=v(()=>o("div",{class:"hover-text"},"Vault available",-1)),oa={key:3,class:"pool-warning"},aa=v(()=>o("img",{src:Js,alt:""},null,-1)),la={class:"hover-text"},ra={class:"label-all"},na={key:0},ta={key:0},da={class:"skeleton-box"},ia={key:1},ca={key:2},ua={class:"skeleton-box"},va={key:3},ha={key:4},pa={class:"skeleton-box"},_a={key:5},ga={key:6},fa={class:"skeleton-box"},ba={key:7},ka={class:"reward-token-box"},wa={class:"rewards-hover"},ya={alt:""},ma={key:8},Aa={key:9},Ca={class:"skeleton-box"},Sa={class:"hover-box"},Oa={class:"apr"},Ia={key:0,class:"farming-apr"},Na=v(()=>o("br",null,null,-1)),La={key:1,class:"apr-hover-content"},$a={class:"action"},ja={key:2,class:"item-container"},Fa={class:"h5-pool-item"},Ba={class:"token"},Ra={class:"token"},Ta={class:"img-box"},Da={key:0,class:"pool-warning"},Ua={class:"img-box img-last-box"},Va={key:0,class:"pool-warning"},Ea={class:"name"},Ma={class:"top"},qa={class:"token-name"},Pa={class:"tokena"},Ha={class:"tokenb"},za={class:"fee-tier-top"},Ja={key:0,class:"isFarming farming-logo"},Wa=v(()=>o("img",{class:"default-img",src:Es,alt:""},null,-1)),Ka=v(()=>o("img",{class:"hover-img",src:Ms,alt:""},null,-1)),Xa=v(()=>o("div",{class:"hover-text"},"Mining rewards available",-1)),Ga=[Wa,Ka,Xa],Qa={key:1,class:"isFarming vault-logo"},Ya=v(()=>o("img",{class:"default-img",src:Hs,alt:""},null,-1)),Za=v(()=>o("img",{class:"hover-img",src:zs,alt:""},null,-1)),xa=v(()=>o("div",{class:"hover-text"},"Farm rewards available",-1)),sl={key:2,class:"isFarming vault-logo"},el=v(()=>o("img",{class:"default-img",src:Vs,alt:""},null,-1)),ol=v(()=>o("img",{class:"hover-img",src:Ws,alt:""},null,-1)),al=v(()=>o("div",{class:"hover-text"},"Vault available",-1)),ll={key:3,class:"pool-warning"},rl=v(()=>o("img",{src:Js,alt:""},null,-1)),nl={class:"hover-text"},tl={class:"label-all"},dl={key:0},il={class:"bottom"},cl={class:"row"},ul=v(()=>o("div",{class:"left"},"APR (24H)",-1)),vl={key:0,class:"right"},hl={style:{color:"#fff"}},pl={key:0},_l={class:"apr-hover-content"},gl={class:"row"},fl=v(()=>o("div",{class:"left"},"Liquidity",-1)),bl={key:0,class:"right"},kl={key:1,class:"right"},wl={class:"row"},yl=v(()=>o("div",{class:"left"},"Volume (24H)",-1)),ml={key:0,class:"right"},Al={key:1,class:"right"},Cl={class:"row"},Sl=v(()=>o("div",{class:"left"},"Fees (24H)",-1)),Ol={key:0,class:"right"},Il={key:1,class:"right"},Nl={key:0,class:"row"},Ll=v(()=>o("div",{class:"left"},"Mining Rewards",-1)),$l={key:0,class:"right"},jl={key:1,class:"right reward-right"},Fl={class:"rewards-hover"},Bl={alt:""},Rl={key:3,class:"no-data"},Tl={key:0,src:Fe},Dl={key:1,src:Be};function Ul(e,m,K,Ls,ms,ss){const bs=ie,ks=ce,P=ue,X=ve,M=he,A=Le,ws=pe,H=Oe("image");return a(),l("div",Te,[o("div",De,[o("div",Ue,[e.tabArr.length>1?(a(),l("div",Ve,[(a(!0),l(D,null,V(e.tabArr,(s,g)=>(a(),l("div",{key:g,class:E(["tag-item",s==e.pools.currentPoolTab?`tag-active tab-num-${e.tabArr.length}`:`tab-num-${e.tabArr.length}`]),onClick:O=>e.changeTab(s)},p(s),11,Ee))),128))])):_("",!0),k(bs,{ref:"childTokenSelectRef"},null,512)]),o("div",Me,[o("div",{class:E(["tab-item",e.isSelectAll?"tab-item-active":""]),onClick:m[0]||(m[0]=is(s=>e.clickDisplayAll(),["stop"]))},[o("div",qe,[e.isSelectAll&&e.store.theme=="sui"?(a(),l("img",Pe)):_("",!0)]),He],2),o("div",ze,[o("div",{class:"search-select search-label",onClick:m[1]||(m[1]=is(()=>{e.isCheckOpen=!e.isCheckOpen,e.label=!1,e.select=!1},["stop"]))},[Je,(a(),l("svg",{"aria-hidden":"true",class:E(e.isCheckOpen?"show-icon icon":"icon")},Ke,2)),e.isCheckOpen?(a(),l("div",Xe,[(a(!0),l(D,null,V(e.incentiveTypesList,s=>(a(),l("div",{key:s,class:"select-menu-item",onClick:is(g=>e.selectedIncentiveType(s),["stop"])},[o("div",Qe,[e.selectIncentiveTypeList.includes(s)?(a(),l("img",Ye)):_("",!0)]),o("span",null,p(s),1)],8,Ge))),128))])):_("",!0)])]),o("div",Ze,[o("div",{class:"search-select search-label",onClick:m[2]||(m[2]=is(()=>{e.store.setIsSelect("pools"),e.isCheckOpen=!1,e.label=!e.label,e.select=!1},["stop"]))},[o("span",null,p(e.$t("newAdd.label")),1),o("div",null,[L(p(e.labelValue)+" ",1),(a(),l("svg",{"aria-hidden":"true",class:E(e.label?"show-icon icon":"icon")},so,2))]),e.label?(a(),l("div",eo,[(a(!0),l(D,null,V(e.labelList,(s,g)=>(a(),l("div",{key:g,class:"select-menu-item",onClick:O=>e.changeSortLabel(s)},p(s),9,oo))),128))])):_("",!0)])]),o("div",ao,[o("div",{class:"search-select",onClick:m[3]||(m[3]=is(()=>{e.store.setIsSelect("pools"),e.isCheckOpen=!1,e.select=!e.select,e.label=!1},["stop"]))},[o("span",null,p(e.$t("newAdd.sortBy")),1),o("div",null,[L(p(e.selectValue)+" ",1),lo,(a(),l("svg",{"aria-hidden":"true",class:E(e.select?"show-icon icon":"icon")},no,2))]),e.select?(a(),l("div",to,[(a(!0),l(D,null,V(e.selectList,(s,g)=>(a(),l("div",{key:g,class:"select-menu-item",onClick:O=>e.changeSort(s)},[L(p(s)+" ",1),co],8,io))),128))])):_("",!0)])]),o("div",{class:"change-view",onClick:m[4]||(m[4]=s=>e.clickViewCard())},[e.isViewCard&&e.current[0]=="pools"?(a(),l("svg",uo,ho)):(a(),l("svg",po,go))])])]),e.listLoading||e.isSwitchDisplayMode?(a(),l("div",fo,[k(ks,{loading:e.listLoading||e.isSwitchDisplayMode,type:e.isViewCard?"poolsCard":"poolsList"},null,8,["loading","type"])])):_("",!0),!e.isSwitchDisplayMode&&!e.isViewCard&&!e.listLoading?(a(),l("div",bo,[o("table",ko,[o("thead",wo,[o("tr",yo,[mo,Ao,Co,So,Oo,o("th",null,[o("span",Io,[L(" APR (24H) "),o("div",No,[k(P,{class:"noHover apr-hover-con"})])])]),Lo])]),o("tbody",$o,[(a(!0),l(D,null,V(e.showList,s=>{var g,O,es,G,C,z,T,Q,Y,os,W,f,as,u,I;return a(),l("tr",{key:s.address,class:E(["table-tr",e.isSelectAll||s!=null&&s.isAuthorized?e.isFarms?s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"none":"":"none"]),onClick:y=>s.needReverse?e.router.push(`/liquidity/deposit?poolAddress=${s.address}`):e.router.push(`/liquidity/deposit?poolAddress=${s.address}`)},[o("td",null,[o("div",Fo,[o("div",Bo,[Z(o("img",null,null,512),[[H,e.getCoinIcon(s.needReverse?s.coinB:s.coinA)]]),(s.needReverse?(G=(es=e.pools)==null?void 0:es.tokensObj[s.coinB.address])!=null&&G.isSelfBuilt:(O=(g=e.pools)==null?void 0:g.tokensObj[s.coinA.address])!=null&&O.isSelfBuilt)?(a(),l("div",Ro)):_("",!0)]),o("div",To,[Z(o("img",null,null,512),[[H,e.getCoinIcon(s.needReverse?s.coinA:s.coinB)]]),(s.needReverse?(z=(C=e.pools)==null?void 0:C.tokensObj[s.coinA.address])!=null&&z.isSelfBuilt:(Q=(T=e.pools)==null?void 0:T.tokensObj[s.coinB.address])!=null&&Q.isSelfBuilt)?(a(),l("div",Do)):_("",!0)]),o("div",Uo,[o("div",Vo,[o("p",Eo,[o("span",Mo,[L(p(s.needReverse?s.coinB.symbol:s.coinA.symbol)+" ",1),k(X,{"coin-info":s.needReverse?s==null?void 0:s.coinB:s==null?void 0:s.coinA},null,8,["coin-info"])]),L(" - "),o("span",qo,[L(p(s.needReverse?s.coinA.symbol:s.coinB.symbol)+" ",1),k(X,{"coin-info":s.needReverse?s==null?void 0:s.coinA:s==null?void 0:s.coinB},null,8,["coin-info"])])]),o("div",Po,p((s==null?void 0:s.fee)*100)+"%",1),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),l("div",Ho,Ko)):_("",!0),s.isStableFarming?(a(),l("div",Xo,[k(M,{to:"/farms",onClick:m[5]||(m[5]=is(()=>{},["stop"]))},{default:cs(()=>[Go,Qo]),_:1}),Yo])):_("",!0),e.chainName=="Sui"&&s.isVaults&&("config"in e?e.config:h(ys)).hasVault?(a(),l("div",Zo,[k(M,{to:"/vaults",onClick:m[6]||(m[6]=is(()=>{},["stop"]))},{default:cs(()=>[xo,sa]),_:1}),ea])):_("",!0),(os=(Y=e.pools)==null?void 0:Y.tokensObj[s.coinA.address])!=null&&os.isSelfBuilt||(f=(W=e.pools)==null?void 0:W.tokensObj[s.coinB.address])!=null&&f.isSelfBuilt?(a(),l("div",oa,[aa,o("div",la,p(e.t("newAdd.poolWarning")),1)])):_("",!0)]),o("div",ra,[(a(!0),l(D,null,V(s.labels,(y,vs)=>(a(),l("div",{key:vs,class:E(["label",y])},[y!=="Native"?(a(),l("span",na,p(y),1)):_("",!0)],2))),128))])])])]),("checkNullObj"in e?e.checkNullObj:h(q))(e.store.statsData)?(a(),l("td",ta,[o("div",da,[k(A,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(a(),l("td",ia,p(Number(s.liqidity)!==0&&Number(s.liqidity)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:h($))(("decimalUi"in e?e.decimalUi:h(x))(s.liqidity,2),2)}`),1)),("checkNullObj"in e?e.checkNullObj:h(q))(e.store.statsData)?(a(),l("td",ca,[o("div",ua,[k(A,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(a(),l("td",va,p(Number(s.vol)!==0&&Number(s.vol)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:h($))(("decimalUi"in e?e.decimalUi:h(x))(s.vol,2),2)}`),1)),("checkNullObj"in e?e.checkNullObj:h(q))(e.store.statsData)?(a(),l("td",ha,[o("div",pa,[k(A,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(a(),l("td",_a,p(Number(s.fee_24_h)!==0&&Number(s.fee_24_h)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:h($))(("decimalUi"in e?e.decimalUi:h(x))(s.fee_24_h,2),2)}`),1)),("checkNullObj"in e?e.checkNullObj:h(q))(e.store.statsData)?(a(),l("td",ga,[o("div",fa,[k(A,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),l("td",ba,[o("div",ka,[(a(!0),l(D,null,V(s.rewardes,y=>{var vs;return a(),l("div",{key:y.address,class:E(["rewarder-token",y.day===0?"reward-none":""])},[Z(o("img",null,null,512),[[H,e.getCoinIcon((vs=e.pools)==null?void 0:vs.tokensObj[y.coinAddress])]]),o("div",wa,[Z(o("img",ya,null,512),[[H,y.logoUrl?y.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:h(us))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:h(us))("/image/coins/sui-unknown.png")]]),o("span",null,p(`${y.day} ${y.symbol} per day`),1)])],2)}),128))])])):(a(),l("td",ma," ")),("checkNullObj"in e?e.checkNullObj:h(q))(e.store.statsData)?(a(),l("td",Aa,[o("div",Ca,[k(A,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(a(),l("td",{key:10,class:E(s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0||(as=s==null?void 0:s.stable_farming)!=null&&as.stable_farming_pool?"":"noCursor")},[o("span",Sa,[o("i",Oa,p(s.is_display_rewarder?s.aprTotal>0&&s.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:h($))(s.aprTotal,2):s.apr>0&&s.apr<.01?"<0.01":("addCommom"in e?e.addCommom:h($))(s.apr,2))+"%",1),(u=s==null?void 0:s.stable_farming)!=null&&u.stable_farming_pool?(a(),l("i",Ia,[Na,L(" "+p(s.stable_farming.apr>0&&s.stable_farming.apr<1e-4?"+<0.01":`+${("addCommom"in e?e.addCommom:h($))(s.stable_farming?(s==null?void 0:s.stable_farming.apr)*100:0,2)}`)+"% ",1)])):_("",!0),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0||(I=s==null?void 0:s.stable_farming)!=null&&I.stable_farming_pool?(a(),l("div",La,[k(P,{"l-item":s,"rewarder-info":s.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])):_("",!0)])],2)),o("td",null,[o("div",$a,[s.needReverse?(a(),Ns(M,{key:0,class:"action-add",to:`/liquidity/deposit?poolAddress=${s.address}`},{default:cs(()=>[L("+")]),_:2},1032,["to"])):(a(),Ns(M,{key:1,class:"action-add",to:`/liquidity/deposit?poolAddress=${s.address}`},{default:cs(()=>[L("+")]),_:2},1032,["to"]))])])],10,jo)}),128))])])])):_("",!0),!e.isSwitchDisplayMode&&e.isViewCard&&!e.listLoading?(a(),l("div",ja,[e.showList&&e.showList.length>0?(a(),l(D,{key:0},[(a(!0),l(D,null,V(e.showList,(s,g)=>(a(),Ns(ws,{key:g,"l-item":s,"is-select-all":e.isSelectAll,"is-farms":e.isFarms},null,8,["l-item","is-select-all","is-farms"]))),128)),(a(!0),l(D,null,V(e.patchNumber,s=>(a(),l("div",{key:s,class:"patch-item"}))),128))],64)):_("",!0)])):_("",!0),o("div",Fa,[(a(!0),l(D,null,V(e.showList,s=>{var g,O,es,G,C,z,T,Q,Y,os,W,f,as,u;return a(),l("div",{key:s.address,class:E([e.isSelectAll||s!=null&&s.isAuthorized?e.isFarms?s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"none":"":"none","item"])},[o("div",Ba,[o("div",Ra,[o("div",Ta,[Z(o("img",null,null,512),[[H,e.getCoinIcon(s.needReverse?s.coinB:s.coinA)]]),(s.needReverse?(G=(es=e.pools)==null?void 0:es.tokensObj[s.coinB.address])!=null&&G.isSelfBuilt:(O=(g=e.pools)==null?void 0:g.tokensObj[s.coinA.address])!=null&&O.isSelfBuilt)?(a(),l("div",Da)):_("",!0)]),o("div",Ua,[Z(o("img",null,null,512),[[H,e.getCoinIcon(s.needReverse?s.coinA:s.coinB)]]),(s.needReverse?(z=(C=e.pools)==null?void 0:C.tokensObj[s.coinA.address])!=null&&z.isSelfBuilt:(Q=(T=e.pools)==null?void 0:T.tokensObj[s.coinB.address])!=null&&Q.isSelfBuilt)?(a(),l("div",Va)):_("",!0)]),o("div",Ea,[o("div",Ma,[o("p",qa,[o("span",Pa,[L(p(s.needReverse?s.coinB.symbol:s.coinA.symbol)+" ",1),k(X,{"coin-info":s.needReverse?s==null?void 0:s.coinB:s==null?void 0:s.coinA},null,8,["coin-info"])]),L(" - "),o("span",Ha,[L(p(s.needReverse?s.coinA.symbol:s.coinB.symbol)+" ",1),k(X,{"coin-info":s.needReverse?s==null?void 0:s.coinA:s==null?void 0:s.coinB},null,8,["coin-info"])])]),o("div",za,p((s==null?void 0:s.fee)*100)+"%",1),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),l("div",Ja,Ga)):_("",!0),s.isStableFarming?(a(),l("div",Qa,[k(M,{to:"/farms"},{default:cs(()=>[Ya,Za]),_:1}),xa])):_("",!0),e.chainName=="Sui"&&s.isVaults&&("config"in e?e.config:h(ys)).hasVault?(a(),l("div",sl,[k(M,{to:"/vaults"},{default:cs(()=>[el,ol]),_:1}),al])):_("",!0),(os=(Y=e.pools)==null?void 0:Y.tokensObj[s.coinA.address])!=null&&os.isSelfBuilt||(f=(W=e.pools)==null?void 0:W.tokensObj[s.coinB.address])!=null&&f.isSelfBuilt?(a(),l("div",ll,[rl,o("div",nl,p(e.t("newAdd.poolWarning")),1)])):_("",!0)]),o("div",tl,[(a(!0),l(D,null,V(s.labels,(I,y)=>(a(),l("div",{key:y,class:E(["label",I])},[I!=="Native"?(a(),l("span",dl,p(I),1)):_("",!0)],2))),128))])])])]),o("div",il,[o("div",cl,[ul,("checkNullObj"in e?e.checkNullObj:h(q))(e.store.statsData)?(a(),l("div",vl,[k(A,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(a(),l("div",{key:1,class:E(["right theme-right",s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0||(as=s==null?void 0:s.stable_farming)!=null&&as.stable_farming_pool?"":"noCursor"])},[o("div",null,[o("span",hl,p(s.is_display_rewarder?s.aprTotal>0&&s.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:h($))(s.aprTotal,2):s.apr>0&&s.apr<.01?"<0.01":("addCommom"in e?e.addCommom:h($))(s.apr,2))+"% ",1),L("   "),(u=s==null?void 0:s.stable_farming)!=null&&u.stable_farming_pool?(a(),l("span",pl,p(s.stable_farming.apr>0&&s.stable_farming.apr<1e-4?"<0.01":`+${("addCommom"in e?e.addCommom:h($))(s.stable_farming?(s==null?void 0:s.stable_farming.apr)*100:0,2)}`)+"% ",1)):_("",!0)]),o("div",_l,[k(P,{"l-item":s,"rewarder-info":s.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])],2))]),o("div",gl,[fl,("checkNullObj"in e?e.checkNullObj:h(q))(e.store.statsData)?(a(),l("div",bl,[k(A,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(a(),l("div",kl,p(Number(s.liqidity)!==0&&Number(s.liqidity)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:h($))(("decimalUi"in e?e.decimalUi:h(x))(s.liqidity,2),2)}`),1))]),o("div",wl,[yl,("checkNullObj"in e?e.checkNullObj:h(q))(e.store.statsData)?(a(),l("div",ml,[k(A,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(a(),l("div",Al,p(Number(s.vol)!==0&&Number(s.vol)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:h($))(("decimalUi"in e?e.decimalUi:h(x))(s.vol,2),2)}`),1))]),o("div",Cl,[Sl,("checkNullObj"in e?e.checkNullObj:h(q))(e.store.statsData)?(a(),l("div",Ol,[k(A,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(a(),l("div",Il,p(Number(s.fee_24_h)!==0&&Number(s.fee_24_h)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:h($))(("decimalUi"in e?e.decimalUi:h(x))(s.fee_24_h,2),2)}`),1))]),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),l("div",Nl,[Ll,("checkNullObj"in e?e.checkNullObj:h(q))(e.store.statsData)?(a(),l("div",$l,[k(A,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),l("div",jl,[(a(!0),l(D,null,V(s.rewardes,I=>{var y;return a(),l("div",{key:I.address,class:"rewarder-token"},[Z(o("img",null,null,512),[[H,e.getCoinIcon((y=e.pools)==null?void 0:y.tokensObj[I.coinAddress])]]),o("div",Fl,[Z(o("img",Bl,null,512),[[H,I.logoUrl?I.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:h(us))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:h(us))("/image/coins/sui-unknown.png")]]),o("span",null,p(`${I.day} ${I.symbol} per day`),1)])])}),128))])):_("",!0)])):_("",!0)]),k(M,{to:`/liquidity/deposit?poolAddress=${s.address}`,class:"add-btn"},{default:cs(()=>[L("+ Add Liquidity")]),_:2},1032,["to"])],2)}),128))]),!e.isSwitchDisplayMode&&e.store.poolAmount!=="--"&&e.store.poolAmount<=0&&!e.listLoading?(a(),l("div",Rl,[e.theme=="default"?(a(),l("img",Tl)):(a(),l("img",Dl)),o("span",null,p(e.$t("common.poolsNotFound")),1)])):_("",!0)])}const ur=Se(Re,[["render",Ul],["__scopeId","data-v-f4ac5986"]]);export{ur as default};
