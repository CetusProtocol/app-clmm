import{_ as ts}from"./back.71e0730e.js";import{_ as us}from"./apr-tips.52f0f24f.js";import{_ as ds}from"./upgrade-loading.0612ce60.js";import{_ as is}from"./token-warning.e1cf9cc0.js";import{i as U}from"./import-icon.de3e6c66.js";import{u as vs,a as R,d as Y,s as $e,c as V,q as _e,k as me,p as Ae}from"./pool.d6b5ef6c.js";import{a as ps,l as E,b as _s,r as p,H as cs,q as ce,e as hs,s as fs,o as i,f as v,h as o,i as L,j as S,v as d,A as B,F as de,E as ie,x as A,a3 as gs,t as he,u as h,w as He,p as ks,k as ws,B as bs}from"./entry.4b03dc9c.js";/* empty css              */import{u as ms}from"./sha256.033d7784.js";import{p as ys}from"./precision.9d58cda5.js";import{_ as Le}from"./icon_on_stats.cdf13a69.js";import"./farms.edd8456a.js";import"./decimal.0bdeb344.js";import"./icon_rewards_2x.7f0a5f9e.js";/* empty css              *//* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";const Ts=ps({setup(){const e=vs(),n=E(()=>e),ye=E(()=>n.value.tokensObj||{}),ve=ms(),$=E(()=>ve),se=_s();let fe=p("big");const P=p(1),F=p(1);let H=p(!1);const pe=()=>{ve.getStatsData($.value.chainName,$.value.filterCoinsObj)};cs(()=>{ve.getStatsData($.value.chainName,$.value.filterCoinsObj);const a=document.body.clientWidth;a<750?H.value=!1:H.value=!0,window.onresize=()=>{a<750?H.value=!1:H.value=!0},H.value,ne(P.value,10),te(F.value,10)});let C=p(null);const I=E(()=>$.value.topPoolsList),s=a=>(l,r)=>{let _=l[a],t=r[a];return _-t},u=a=>(l,r)=>{let _=l[a];return r[a]-_},k=p(!1),m=p(!1),y=p(!1),w=p(!1),W=p(!1),O=p(!1),q=p(!0),M=p(!1),z=p(!1),ge=p(!1),G=p(!1),J=p(!1),K=p(!1),j=p(!1),Z=p(!1),x=p(!1),ee=p(!0),Q=p(!1),le=p(!1),ke=p("Volume (24H)"),oe=p(["TVL","Volume (7D)","APR","Fees (24h)"]),Te=E(()=>$.value.chainName);ce(()=>Te.value,a=>{a=="Sui"?oe.value=["TVL","Volume (7D)","APR","Fees (24h)"]:oe.value=["TVL","Volume (7D)","APR"]},{immediate:!0});const re=p(!1),we=p("Volume (24H)"),be=p(["Price","TVL","Price Change"]),Pe=a=>{const l=I;if(a=="tvl_in_usd"?(O.value?(k.value=!k.value,l.value.sort(k.value?s(a):u(a))):l.value.sort(u(a)),m.value=!1,y.value=!1,w.value=!1,O.value=!0,q.value=!1,M.value=!1,z.value=!1):a=="vol_in_usd_24h"?(q.value?(m.value=!m.value,l.value.sort(m.value?s(a):u(a))):l.value.sort(u(a)),k.value=!1,y.value=!1,w.value=!1,O.value=!1,q.value=!0,M.value=!1,z.value=!1):a=="vol_in_usd_7_day"?(M.value?(y.value=!y.value,l.value.sort(y.value?s(a):u(a))):l.value.sort(u(a)),k.value=!1,m.value=!1,w.value=!1,O.value=!1,q.value=!1,M.value=!0,z.value=!1):a=="total_apr"?(z.value?(w.value=!w.value,l.value.sort(w.value?s(a):u(a))):l.value.sort(u(a)),k.value=!1,m.value=!1,y.value=!1,O.value=!1,q.value=!1,M.value=!1,z.value=!0):a=="fee_24_h"&&(ge.value?(W.value=!W.value,l.value.sort(W.value?s(a):u(a))):l.value.sort(u(a)),k.value=!1,m.value=!1,y.value=!1,w.value=!1,O.value=!1,q.value=!1,M.value=!1,z.value=!1,ge.value=!0),l.value.length<10)C.value=l.value.slice(0,10);else{const r=P.value*10;C.value=l.value.slice(r-10,r)}},Ce=a=>{const l=ae;if(a=="price"?(Z.value?(G.value=!G.value,l.value.sort(G.value?s(a):u(a))):l.value.sort(u(a)),J.value=!1,K.value=!1,j.value=!1,Z.value=!0,x.value=!1,ee.value=!1,Q.value=!1):a=="vol_in_usd_24h"?(ee.value?(K.value=!K.value,l.value.sort(K.value?s(a):u(a))):l.value.sort(u(a)),G.value=!1,J.value=!1,j.value=!1,Z.value=!1,x.value=!1,ee.value=!0,Q.value=!1):a=="tvl_in_usd"?(Q.value?(j.value=!j.value,l.value.sort(j.value?s(a):u(a))):l.value.sort(u(a)),G.value=!1,J.value=!1,K.value=!1,Z.value=!1,x.value=!1,ee.value=!1,Q.value=!0):a=="priceHour"&&(x.value?(J.value=!J.value,l.value.sort(J.value?s(a):u(a))):l.value.sort(u(a)),G.value=!1,K.value=!1,j.value=!1,Z.value=!1,x.value=!0,ee.value=!1,Q.value=!1),l.value.length<10)X.value=l.value.slice(0,10);else{const r=F.value*10;X.value=l.value.slice(r-10,r)}},Ie=a=>{a=="label"?(re.value=!re.value,le.value=!1):a=="select"?(le.value=!le.value,re.value=!1):(le.value=!1,re.value=!1)},De=a=>{const l=[];l.push(ke.value),oe.value.forEach((r,_)=>{r!=a&&l.push(r)}),oe.value=l,ke.value=a,a=="TVL"?C.value.sort(u("tvl_in_usd")):a=="Volume (24H)"?C.value.sort(u("vol_in_usd_24h")):a=="Volume (7D)"?C.value.sort(u("vol_in_usd_7_day")):a=="APR"?C.value.sort(u("total_apr")):a=="Fees (24h)"&&C.value.sort(u("fee_24_h"))},Ve=a=>{const l=[];l.push(we.value),be.value.forEach((r,_)=>{r!=a&&l.push(r)}),be.value=l,we.value=a,a=="TVL"?X.value.sort(u("tvl_in_usd")):a=="Volume (24H)"?X.value.sort(u("vol_in_usd_24h")):a=="Price"?X.value.sort(u("price")):a=="Price Change"&&X.value.sort(u("priceHour"))};ce(I,()=>{H.value,ne(P.value,10)});const ne=(a,l)=>{P.value=a;const r=l*a-l;let _=l*a;_=_>I.value.length?I.value.length:_;const t=I.value;if(t.length>0){O.value&&!k.value?t.sort(Se):O.value&&k.value?t.sort(Ne):q.value?m.value?t.sort(Oe):t.sort(Ue):M.value?y.value?t.sort(je):t.sort(Fe):z.value&&(w.value?t.sort(Ee):t.sort(Re));const f=t.filter((c,b)=>b>=r&&b<_);C.value=f}return t},Se=(a,l)=>l.tvl_in_usd-a.tvl_in_usd,Ue=(a,l)=>l.vol_in_usd_24h-a.vol_in_usd_24h,Fe=(a,l)=>l.vol_in_usd_7_day-a.vol_in_usd_7_day,Re=(a,l)=>l.total_apr-a.total_apr,Ne=(a,l)=>a.tvl_in_usd-l.tvl_in_usd,Oe=(a,l)=>a.vol_in_usd_24h-l.vol_in_usd_24h,je=(a,l)=>a.vol_in_usd_7_day-l.vol_in_usd_7_day,Ee=(a,l)=>a.total_apr-l.total_apr;let X=p([]);const ae=E(()=>{const a=$.value.topTokensList,l=[];for(let r=0;r<a.length;r++){const _=a[r];l.push({..._,priceHour:_?Number(_.price_rate_24h.substring(0,_.price_rate_24h.length-1)):"0"})}return l});ce(ae,()=>{H.value,te(F.value,10)});const te=(a,l)=>{F.value=a;const r=l*a-l;let _=l*a;_=_>ae.value.length?ae.value.length:_;const t=ae.value;if(t.length>0){Q.value&&!j.value?t.sort(Be):Q.value&&j.value?t.sort(ze):Z.value?G.value?t.sort(Ge):t.sort(We):x.value?J.value?t.sort(Je):t.sort(qe):ee.value&&(K.value?t.sort(Ke):t.sort(Me));const f=t.filter((c,b)=>b>=r&&b<_);X.value=f}return t},Be=(a,l)=>l.tvl_in_usd-a.tvl_in_usd,We=(a,l)=>l.price-a.price,qe=(a,l)=>l.priceHour-a.priceHour,Me=(a,l)=>l.vol_in_usd_24h-a.vol_in_usd_24h,ze=(a,l)=>a.tvl_in_usd-l.tvl_in_usd,Ge=(a,l)=>a.price-l.price,Je=(a,l)=>a.priceHour-l.priceHour,Ke=(a,l)=>a.vol_in_usd_24h-l.vol_in_usd_24h,Qe=a=>{const l=a.swap_account;return n.value.addressLpTokens&&n.value.addressLpTokens[l]&&n.value.addressLpTokens[l].rewarder_infos},Xe=a=>{var l,r,_,t,f,c;if($.value.theme=="sui"){const b=a.needReverse?((r=n.value.tokensObj[a.token_b_address])==null?void 0:r.labels)||[]:((l=n.value.tokensObj[a.token_a_address])==null?void 0:l.labels)||[],D=a.needReverse?((_=n.value.tokensObj[a.token_a_address])==null?void 0:_.labels)||[]:((t=n.value.tokensObj[a.token_b_address])==null?void 0:t.labels)||[],T=b.concat(D);return[...new Set(T)]}else{const b=((f=n.value.tokensObj[a.token_a_address])==null?void 0:f.labels)||[],D=((c=n.value.tokensObj[a.token_b_address])==null?void 0:c.labels)||[],T=b.concat(D);return[...new Set(T)]}},Ye=a=>{if(!V(a)&&!V(n.value.addressLpTokens)&&!V(n.value.tokensObj)){const l=n.value.addressLpTokens[a.swap_account];return l==null?void 0:l.is_display_rewarder}else return!1},Ze=a=>{if(!V(a)&&!V(n.value.addressLpTokens)&&!V(n.value.tokensObj)){const l=a.swap_account,r=n.value.addressLpTokens[l];let _=(r==null?void 0:r.rewarder_infos)||[];const t=[];_.forEach((c,b)=>{t.push({...c,symbol:n.value.tokensObj[c.coinAddress].symbol,rewarderApr:_e(a.rewarder_apr[b]&&a.rewarder_apr[b].replace("%",""),2),logoUrl:n.value.tokensObj[c.coinAddress].logoURI,rewarder_display:r[`rewarder_display${b+1}`]})});let f=[];return f=t.filter(c=>c.rewarder_display),f}},xe=(a,l)=>a&&l?$e(ys.plus(me(a),me(l)),2)+"%":a,es=a=>{let l=0;return a&&a.forEach(r=>{l+=me(String(r))}),String(_e(String(l),2))},ss=()=>{se&&se.push("/stats-pools")},as=()=>{se&&se.push("/stats-tokens")},ls=a=>{var l;return(a==null?void 0:a.logoURI)||(a==null?void 0:a.logo_url)||((l=n.value.tokensObj[a==null?void 0:a.address])==null?void 0:l.logo_url)||($.value.theme==="default"?U("/image/coins/unknown.png"):U("/image/coins/sui-unknown.png"))},os=E(()=>n.value.tokensObj),rs=E(()=>$.value.theme),ns=E(()=>n.value.tokensWarningObj),ue=p({});return ce(()=>[n.value.poolConfigObj,n.value.tokensObj,$.value.topPoolsList,$.value.chainName,n.value.addressLpTokens],([a,l,r,_,t])=>{_=="Sui"?a&&!V(a)&&r&&r.length>0&&l&&!V(l)&&r.forEach(f=>{const c=a[f.swap_account],b=c==null?void 0:c.rewarderInfo.map((D,T)=>{const g=l[D.coinAddress];return{...D,emissionsEveryDay:Ae(D.emissionsEveryDay,g==null?void 0:g.decimals),rewarder_display:c[`rewarder_display${T+1}`],rewarders:f.rewarder_apr[T]&&f.rewarder_apr[T].replace("%",""),logoUrl:g==null?void 0:g.logo_url,symbol:g==null?void 0:g.symbol,rewarderApr:f.rewarder_apr[T]&&f.rewarder_apr[T].replace("%","")}});c!=null&&c.is_display_rewarder&&(ue.value={...ue.value,[f.swap_account]:b})}):a&&!V(a)&&r&&r.length>0&&l&&!V(l)&&t&&!V(t)&&r.forEach(f=>{const c=t[f.swap_account];if(c){const b=c.rewarder_infos.map((D,T)=>{const g=l[D.coinAddress];return{...D,emissionsEveryDay:Ae(D.emissionsEveryDay,g==null?void 0:g.decimals),rewarder_display:c[`rewarder_display${T+1}`],rewarders:_e(f.rewarder_apr[T]&&f.rewarder_apr[T].replace("%",""),2),logoUrl:g==null?void 0:g.logo_url,symbol:g==null?void 0:g.symbol,rewarderApr:_e(f.rewarder_apr[T]&&f.rewarder_apr[T].replace("%",""),2)}});c!=null&&c.is_display_rewarder&&(ue.value={...ue.value,[f.swap_account]:b})}})},{immediate:!0,deep:!0}),{tokensWarningObj:ns,theme:rs,tokensObj:os,getCoinIcon:ls,getRewarderInfo:Qe,addCommom:R,store:$,importIcon:U,topPoolsList:I,addressTokens:ye,showEcharts:fe,currentPools:P,onChangePools:ne,currentTopPoolsList:C,onChangeTokens:te,currentTokens:F,currentTopTokensList:X,topTokensList:ae,router:se,isPc:H,getAprTotal:xe,getRewarderApr:es,toPoolsList:ss,toTokensList:as,changePoolsList:Pe,changeTokensList:Ce,tvlImprint:k,volHImprint:m,volDImprint:y,aprImprint:w,tokensPriceImprint:G,tokensPriceHImprint:J,tokensVolHImprint:K,tokensTvlImprint:j,fees24hImprint:W,labelToken:re,select:le,selectValue:ke,selectList:oe,reviseValue:Ie,changeSort:De,tokenValue:we,tokensList:be,changeSortLabel:Ve,tvlImprintHighlight:O,volHImprintHighlight:q,volDImprintHighlight:M,aprImprintHighlight:z,fees24hHighlight:ge,tokensPriceImprintHighlight:Z,tokensPriceHImprintHighlight:x,tokensVolHImprintHighlight:ee,tokensTvlImprintHighlight:Q,getLabel:Xe,rewardApr:Ze,getsad:pe,rewardDisplay:Ye,chainName:Te,decimalUi:Y,rewardObj:ue,sFixD:$e}}});const N=e=>(ks("data-v-fa9131cd"),e=e(),ws(),e),$s={class:"stats-container"},As={class:"title"},Hs={class:"top-pools-new"},Ls={class:"sort-by"},Ps=N(()=>o("img",{src:Le,alt:""},null,-1)),Cs=N(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),Is=[Cs],Ds={key:0,class:"select-item"},Vs=["onClick"],Ss=N(()=>o("img",{src:Le,alt:""},null,-1)),Us={class:"content"},Fs={class:"item"},Rs=N(()=>o("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Ns=[Rs],Os=N(()=>o("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),js=[Os],Es=N(()=>o("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Bs=[Es],Ws=N(()=>o("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),qs=[Ws],Ms={class:"apr-hover-content"},zs=N(()=>o("span",null," ",-1)),Gs={key:0,class:"upgrade-loading"},Js={class:"token"},Ks=["onerror"],Qs=["onerror"],Xs={class:"name"},Ys={class:"token-name"},Zs={class:"fee-tier-top"},xs={class:"label-all"},ea={key:0},sa={class:"tvl"},aa={class:"volume-hour"},la={key:0,class:"fees-24h"},oa=N(()=>o("br",null,null,-1)),ra={key:0,class:"farming-apr"},na={key:1,class:"apr-hover-content"},ta={class:"btn-box"},ua={key:2,class:"upgrade-loading"},da={class:"top"},ia={class:"token"},va=["onerror"],pa=["onerror"],_a={class:"name"},ca={class:"token-name"},ha={class:"label-all"},fa={key:0},ga={class:"fee-tier-hint"},ka={class:"middle"},wa={class:"item-pools"},ba={class:"item-pools"},ma={class:"item-pools"},ya={key:0,class:"item-pools"},Ta=N(()=>o("span",null,"Fees (24h)",-1)),$a={key:0,class:"farming-apr"},Aa={key:0,class:"apr-hover-content"},Ha={class:"bottom"},La={class:"panation"};function Pa(e,n,ye,ve,$,se){const fe=ts,P=us,F=ds,H=is,pe=bs,C=gs,I=fs("image");return i(),v("div",$s,[o("div",As,[L(fe),S(" "+d(e.$t("menu.pools")),1)]),o("div",Hs,[o("div",Ls,[o("div",null,d(e.$t("newAdd.sortBy")),1),o("div",{class:"search-select",onClick:n[0]||(n[0]=s=>e.reviseValue("select"))},[o("div",null,[S(d(e.selectValue)+" ",1),Ps]),(i(),v("svg",{"aria-hidden":"true",class:B(e.select?"show-icon icon":"icon")},Is,2)),e.select?(i(),v("div",Ds,[(i(!0),v(de,null,ie(e.selectList,(s,u)=>(i(),v("div",{key:u,class:"select-menu-item",onClick:k=>e.changeSort(s)},[S(d(s)+" ",1),Ss],8,Vs))),128))])):A("",!0)])]),o("div",Us,[o("div",Fs,[o("span",null,d(e.$t("newAdd.pool")),1),o("span",{onClick:n[1]||(n[1]=s=>e.changePoolsList("tvl_in_usd"))},[S(d(e.$t("common.tvl"))+" ",1),(i(),v("svg",{"aria-hidden":"true",class:B(["pools-icon",e.tvlImprint?e.tvlImprintHighlight?"selected highlight":"selected":e.tvlImprintHighlight?"highlight":""])},Ns,2))]),o("span",{onClick:n[2]||(n[2]=s=>e.changePoolsList("vol_in_usd_24h"))},[S(d(e.$t("common.volume24H"))+" ",1),(i(),v("svg",{"aria-hidden":"true",class:B(["pools-icon",e.volHImprint?e.volHImprintHighlight?"selected highlight":"selected":e.volHImprintHighlight?"highlight":""])},js,2))]),e.chainName=="Sui"?(i(),v("span",{key:0,onClick:n[3]||(n[3]=s=>e.changePoolsList("fee_24_h"))},[S(" Fees (24H) "),(i(),v("svg",{"aria-hidden":"true",class:B(["pools-icon",e.fees24hImprint?e.fees24hHighlight?"selected highlight":"selected":e.fees24hHighlight?"highlight":""])},Bs,2))])):A("",!0),o("span",{onClick:n[4]||(n[4]=s=>e.changePoolsList("total_apr"))},[S(d(e.$t("common.apr"))+" ",1),(i(),v("svg",{"aria-hidden":"true",class:B(["pools-icon",e.aprImprint?e.aprImprintHighlight?"selected highlight":"selected":e.aprImprintHighlight?"highlight":""])},qs,2)),o("div",Ms,[L(P,{class:"noHover apr-hover-con"})])]),zs]),e.currentTopPoolsList?(i(!0),v(de,{key:1},ie(e.currentTopPoolsList,(s,u)=>{var k,m,y;return i(),v("div",{key:u,class:"item pc-item"},[o("div",Js,[o("div",null,[s!=null&&s.token_a_address?he((i(),v("img",{key:0,onerror:e.theme=="default"?("importIcon"in e?e.importIcon:h(U))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:h(U))("/image/coins/sui-unknown.png")},null,8,Ks)),[[I,e.getCoinIcon(e.theme=="sui"?s.is_forward!==!1?e.addressTokens&&e.addressTokens[s.token_a_address]:e.addressTokens&&e.addressTokens[s.token_b_address]:e.addressTokens&&e.addressTokens[s.token_a_address])]]):A("",!0),L(H,{address:s.is_forward?s.token_a_address:s.token_b_address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),o("div",null,[s!=null&&s.token_b_address?he((i(),v("img",{key:0,onerror:e.theme=="default"?("importIcon"in e?e.importIcon:h(U))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:h(U))("/image/coins/sui-unknown.png")},null,8,Qs)),[[I,e.getCoinIcon(e.theme=="sui"?s.is_forward!==!1?e.addressTokens&&e.addressTokens[s.token_b_address]:e.addressTokens&&e.addressTokens[s.token_a_address]:e.addressTokens&&e.addressTokens[s.token_b_address])]]):A("",!0),L(H,{address:s.is_forward?s.token_b_address:s.token_a_address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),o("div",Xs,[o("p",Ys,d(e.theme=="sui"?s.is_forward!==!1?s.token_a_reserves:s.token_b_reserves:s.token_a_reserves)+" - "+d(e.theme=="sui"?s.is_forward!==!1?s.token_b_reserves:s.token_a_reserves:s.token_b_reserves),1),o("div",Zs,d((s==null?void 0:s.fee)*100)+"%",1),o("div",xs,[(i(!0),v(de,null,ie(e.getLabel(s),(w,W)=>(i(),v("div",{key:W,class:B(["label",w])},[w!=="Native"?(i(),v("span",ea,d(w),1)):A("",!0)],2))),128))])])]),o("div",sa,d(s.tvl_in_usd>0&&s.tvl_in_usd<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:h(R))(("decimalUi"in e?e.decimalUi:h(Y))(s.tvl_in_usd,2),2)}`),1),o("div",aa,d(s.vol_in_usd_24h>0&&s.vol_in_usd_24h<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:h(R))(("decimalUi"in e?e.decimalUi:h(Y))(s.vol_in_usd_24h,2,2))}`),1),e.chainName=="Sui"?(i(),v("div",la,d(s.fee_24_h>0&&s.fee_24_h<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:h(R))(("decimalUi"in e?e.decimalUi:h(Y))(s.fee_24_h,2),2)}`),1)):A("",!0),o("div",{class:B(["apr",e.theme=="sui"&&s.isStableFarming||((k=e.rewardApr(s))==null?void 0:k.length)>0&&e.rewardDisplay(s)?"apr-mark":""])},[S(d(e.getAprTotal(s.apr_7day,e.getRewarderApr(s.rewarder_apr)))+" ",1),oa,(m=s==null?void 0:s.stable_farming)!=null&&m.stable_farming_pool?(i(),v("i",ra,d(s.stable_farming.apr>0&&s.stable_farming.apr<1e-4?"+<0.01":`+${("addCommom"in e?e.addCommom:h(R))(s.stable_farming?(s==null?void 0:s.stable_farming.apr)*100:0,2)}`)+"% ",1)):A("",!0),e.theme=="sui"&&s.isStableFarming||((y=e.rewardApr(s))==null?void 0:y.length)!=0&&e.rewardDisplay(s)?(i(),v("div",na,[L(P,{class:"noHover apr-hover-con","l-item":{...s,apr:s.apr_7day&&s.apr_7day.replace("%",""),aprTotal:e.getAprTotal(s.apr_7day,e.getRewarderApr(s.rewarder_apr)),is_display_rewarder:e.rewardDisplay(s),rewarder_apr:e.getRewarderApr(s.rewarder_apr),isStableFarming:s.isStableFarming,stableFarmingApr:s.stableFarmingApr},"rewarder-info":e.rewardApr(s)},null,8,["l-item","rewarder-info"])])):A("",!0)],2),o("div",ta,[L(pe,{class:"cancel-btn",onClick:()=>e.router.push(`/liquidity/deposit?poolAddress=${s==null?void 0:s.swap_account}`)},{default:He(()=>[S(d(e.$t("common.deposit")),1)]),_:2},1032,["onClick"])])])}),128)):(i(),v("div",Gs,[L(F,{loading:!0,type:"statsTokens"})])),e.currentTopPoolsList?(i(!0),v(de,{key:3},ie(e.currentTopPoolsList,(s,u)=>{var k,m,y;return i(),v("div",{key:u,class:"item h5-item"},[o("div",da,[o("div",ia,[o("div",null,[s!=null&&s.token_a_address?he((i(),v("img",{key:0,onerror:e.theme=="default"?("importIcon"in e?e.importIcon:h(U))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:h(U))("/image/coins/sui-unknown.png")},null,8,va)),[[I,e.getCoinIcon(e.theme=="sui"?s.is_forward!==!1?e.addressTokens&&e.addressTokens[s.token_a_address]:e.addressTokens&&e.addressTokens[s.token_b_address]:e.addressTokens&&e.addressTokens[s.token_a_address])]]):A("",!0),L(H,{address:s.is_forward?s.token_a_address:s.token_b_address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),o("div",null,[s!=null&&s.token_b_address?he((i(),v("img",{key:0,onerror:e.theme=="default"?("importIcon"in e?e.importIcon:h(U))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:h(U))("/image/coins/sui-unknown.png")},null,8,pa)),[[I,e.getCoinIcon(e.theme=="sui"?s.is_forward!==!1?e.addressTokens&&e.addressTokens[s.token_b_address]:e.addressTokens&&e.addressTokens[s.token_a_address]:e.addressTokens&&e.addressTokens[s.token_b_address])]]):A("",!0),L(H,{address:s.is_forward?s.token_b_address:s.token_a_address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),o("div",_a,[o("p",ca,d(e.theme=="sui"?s.is_forward!==!1?s.token_a_reserves:s.token_b_reserves:s.token_a_reserves)+" - "+d(e.theme=="sui"?s.is_forward!==!1?s.token_b_reserves:s.token_a_reserves:s.token_b_reserves),1),o("div",ha,[(i(!0),v(de,null,ie(e.getLabel(s),(w,W)=>(i(),v("div",{key:W,class:B(["label",w])},[w!=="Native"?(i(),v("span",fa,d(w),1)):A("",!0)],2))),128))])])]),o("div",ga,d((s==null?void 0:s.fee)*100)+"%",1)]),o("div",ka,[o("div",wa,[o("span",null,d(e.$t("common.tvl")),1),o("p",null,d(s.tvl_in_usd>0&&s.tvl_in_usd<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:h(R))(("decimalUi"in e?e.decimalUi:h(Y))(s.tvl_in_usd,2),2)}`),1)]),o("div",ba,[o("span",null,d(e.$t("common.volume24h")),1),o("p",null,d(s.vol_in_usd_24h>0&&s.vol_in_usd_24h<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:h(R))(("decimalUi"in e?e.decimalUi:h(Y))(s.vol_in_usd_24h,2),2)}`),1)]),o("div",ma,[o("span",null,d(e.$t("newAdd.volume7D")),1),o("p",null,d(s.vol_in_usd_7_day>0&&s.vol_in_usd_7_day<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:h(R))(("decimalUi"in e?e.decimalUi:h(Y))(s.vol_in_usd_7_day,2),2)}`),1)]),e.chainName=="Sui"?(i(),v("div",ya,[Ta,o("p",null,d(s.fee_24_h>0&&s.fee_24_h<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:h(R))(("decimalUi"in e?e.decimalUi:h(Y))(s.fee_24_h,2),2)}`),1)])):A("",!0),o("div",{class:B(["item-pools",e.theme=="sui"&&s.isStableFarming||((k=e.rewardApr(s))==null?void 0:k.length)>0&&e.rewardDisplay(s)?"":"apr-mark-h5"])},[o("span",null,d(e.$t("common.apr")),1),o("p",null,[S(d(e.getAprTotal(s.apr_7day,e.getRewarderApr(s.rewarder_apr)))+" ",1),(m=s==null?void 0:s.stable_farming)!=null&&m.stable_farming_pool?(i(),v("i",$a,d(s.stable_farming.apr>0&&s.stable_farming.apr<1e-4?"+<0.01":`+${("addCommom"in e?e.addCommom:h(R))(s.stable_farming?(s==null?void 0:s.stable_farming.apr)*100:0,2)}`)+"% ",1)):A("",!0)]),e.theme=="sui"&&s.isStableFarming||((y=e.rewardApr(s))==null?void 0:y.length)!=0&&e.rewardDisplay(s)?(i(),v("div",Aa,[L(P,{class:"noHover apr-hover-con","l-item":{...s,apr:s.apr_7day&&s.apr_7day.replace("%",""),aprTotal:e.getAprTotal(s.apr_7day,e.getRewarderApr(s.rewarder_apr)),is_display_rewarder:e.rewardDisplay(s),rewarder_apr:e.getRewarderApr(s.rewarder_apr),isStableFarming:s.isStableFarming,stableFarmingApr:s.stableFarmingApr},"rewarder-info":e.rewardApr(s)},null,8,["l-item","rewarder-info"])])):A("",!0)],2)]),o("div",Ha,[L(pe,{class:"cancel-btn",onClick:()=>e.router.push(`/liquidity/deposit?poolAddress=${s==null?void 0:s.swap_account}`)},{default:He(()=>[S(d(e.$t("common.deposit")),1)]),_:2},1032,["onClick"])])])}),128)):(i(),v("div",ua,[L(F,{loading:!0,type:"statsPoolH5"})]))]),o("div",La,[L(C,{current:e.currentPools,"onUpdate:current":n[5]||(n[5]=s=>e.currentPools=s),"page-size":(e.isPc,10),simple:"",total:e.topPoolsList.length,onChange:e.onChangePools},null,8,["current","page-size","total","onChange"])])])])}const Ga=hs(Ts,[["render",Pa],["__scopeId","data-v-fa9131cd"]]);export{Ga as default};
