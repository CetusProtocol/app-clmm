import{_ as Qe}from"./back.671d13bb.js";import{_ as Xe}from"./upgrade-loading.6c0bec31.js";import{i as z}from"./import-icon.de3e6c66.js";import{u as Ye,e as f,d as ee,c as ue,s as Ze,t as de}from"./pool.391d046d.js";import{a as xe,m as N,b as es,r as i,y as ss,D as he,e as os,q as ls,o as p,f as h,h as n,i as J,j as L,v as t,z as H,F as ve,s as ce,x,$ as ns,t as fe,u as c,w as ke,p as as,k as ts,B as rs}from"./entry.0485e02f.js";/* empty css              */import{u as is}from"./index.383699e2.js";import{p as us}from"./precision.9d58cda5.js";import{_ as _e}from"./icon_on_stats.cdf13a69.js";/* empty css              *//* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";const ds=xe({setup(){const e=Ye(),r=N(()=>e),pe=N(()=>r.value.tokensObj||{}),se=is(),m=N(()=>se),M=es();let le=i("big");const g=i(1),b=i(1);let T=i(!1);const oe=()=>{se.getStatsData(m.value.chainName,m.value.filterCoinsObj)};ss(()=>{se.getStatsData(m.value.chainName,m.value.filterCoinsObj);const s=document.body.clientWidth;s<750?T.value=!1:T.value=!0,window.onresize=()=>{s<750?T.value=!1:T.value=!0},T.value,X(g.value,10),Y(b.value,10)});let l=i([]);const k=N(()=>m.value.topPoolsList),_=s=>(o,u)=>{let v=o[s],a=u[s];return v-a},d=s=>(o,u)=>{let v=o[s];return u[s]-v},C=i(!1),O=i(!1),j=i(!1),P=i(!1),$=i(!1),S=i(!0),W=i(!1),B=i(!1),w=i(!1),y=i(!1),V=i(!1),I=i(!1),R=i(!1),E=i(!1),F=i(!1),D=i(!0),K=i(!1),ne=i("Volume (24H)"),ae=i(["TVL","Volume (7D)","APR"]),Q=i(!1),te=i("TVL"),re=i(["Price","Volume (24H)","Price Change"]),me=s=>{const o=k;if(s=="tvl_in_usd"?($.value?(C.value=!C.value,o.value.sort(C.value?_(s):d(s))):o.value.sort(d(s)),O.value=!1,j.value=!1,P.value=!1,$.value=!0,S.value=!1,W.value=!1,B.value=!1):s=="vol_in_usd_24h"?(S.value?(O.value=!O.value,o.value.sort(O.value?_(s):d(s))):o.value.sort(d(s)),C.value=!1,j.value=!1,P.value=!1,$.value=!1,S.value=!0,W.value=!1,B.value=!1):s=="vol_in_usd_7_day"?(W.value?(j.value=!j.value,o.value.sort(j.value?_(s):d(s))):o.value.sort(d(s)),C.value=!1,O.value=!1,P.value=!1,$.value=!1,S.value=!1,W.value=!0,B.value=!1):s=="aprNum"&&(B.value?(P.value=!P.value,o.value.sort(P.value?_(s):d(s))):o.value.sort(d(s)),C.value=!1,O.value=!1,j.value=!1,$.value=!1,S.value=!1,W.value=!1,B.value=!0),o.value.length<10)l.value=o.value.slice(0,10);else{const u=g.value*10;l.value=o.value.slice(u-10,u)}},ge=s=>{const o=G;if(s=="price"?(R.value?(w.value=!w.value,o.value.sort(w.value?_(s):d(s))):o.value.sort(d(s)),y.value=!1,V.value=!1,I.value=!1,R.value=!0,E.value=!1,F.value=!1,D.value=!1):s=="vol_in_usd_24h"?(F.value?(V.value=!V.value,o.value.sort(V.value?_(s):d(s))):o.value.sort(d(s)),w.value=!1,y.value=!1,I.value=!1,R.value=!1,E.value=!1,F.value=!0,D.value=!1):s=="tvl_in_usd"?(D.value?(I.value=!I.value,o.value.sort(I.value?_(s):d(s))):o.value.sort(d(s)),w.value=!1,y.value=!1,V.value=!1,R.value=!1,E.value=!1,F.value=!1,D.value=!0):s=="priceHour"&&(E.value?(y.value=!y.value,o.value.sort(y.value?_(s):d(s))):o.value.sort(d(s)),w.value=!1,V.value=!1,I.value=!1,R.value=!1,E.value=!0,F.value=!1,D.value=!1),o.value.length<10)A.value=o.value.slice(0,10);else{const u=b.value*10;A.value=o.value.slice(u-10,u)}},be=s=>{s=="label"?(Q.value=!Q.value,K.value=!1):s=="select"?(K.value=!K.value,Q.value=!1):(K.value=!1,Q.value=!1)},Te=s=>{const o=[];o.push(ne.value),ae.value.forEach((u,v)=>{u!=s&&o.push(u)}),ae.value=o,ne.value=s,s=="TVL"?l.value.sort(d("tvl_in_usd")):s=="Volume (24H)"?l.value.sort(d("vol_in_usd_24h")):s=="Volume (7D)"?l.value.sort(d("vol_in_usd_7_day")):s=="APR"&&l.value.sort(d("aprNum"))},Ce=s=>{const o=[];o.push(te.value),re.value.forEach((u,v)=>{u!=s&&o.push(u)}),re.value=o,te.value=s,s=="TVL"?A.value.sort(d("tvl_in_usd")):s=="Volume (24H)"?A.value.sort(d("vol_in_usd_24h")):s=="Price"?A.value.sort(d("price")):s=="Price Change"&&A.value.sort(d("priceHour"))};he(k,()=>{T.value,X(g.value,10)});const X=(s,o)=>{g.value=s;const u=o*s-o;let v=o*s;v=v>k.value.length?k.value.length:v;const a=k.value;if(a.length>0){$.value&&!C.value?a.sort(Ie):$.value&&C.value?a.sort(je):S.value?O.value?a.sort(Pe):a.sort(Le):W.value?j.value?a.sort($e):a.sort(He):B.value&&(P.value?a.sort(we):a.sort(Oe));const q=a.filter((ie,Z)=>Z>=u&&Z<v);l.value=q}return a},Ie=(s,o)=>o.tvl_in_usd-s.tvl_in_usd,Le=(s,o)=>o.vol_in_usd_24h-s.vol_in_usd_24h,He=(s,o)=>o.vol_in_usd_7_day-s.vol_in_usd_7_day,Oe=(s,o)=>o.aprNum-s.aprNum,je=(s,o)=>s.tvl_in_usd-o.tvl_in_usd,Pe=(s,o)=>s.vol_in_usd_24h-o.vol_in_usd_24h,$e=(s,o)=>s.vol_in_usd_7_day-o.vol_in_usd_7_day,we=(s,o)=>s.aprNum-o.aprNum;let A=i(null);const G=N(()=>{const s=m.value.topTokensList,o=[];for(let u=0;u<s.length;u++){const v=s[u];o.push({...v,priceHour:v?Number(v.price_rate_24h.substring(0,v.price_rate_24h.length-1)):"0",address:v.symbol=="SUI"?"0x2::sui::SUI":v.address})}return o});he(G,()=>{T.value,Y(b.value,10)});const Y=(s,o)=>{b.value=s;const u=o*s-o;let v=o*s;v=v>G.value.length?G.value.length:v;const a=G.value;if(a.length>0){D.value&&!I.value?a.sort(ye):D.value&&I.value?a.sort(Ne):R.value?w.value?a.sort(Ue):a.sort(Ve):E.value?y.value?a.sort(Se):a.sort(De):F.value&&(V.value?a.sort(We):a.sort(Ae));const q=a.filter((ie,Z)=>Z>=u&&Z<v);A.value=q}return a},ye=(s,o)=>o.tvl_in_usd-s.tvl_in_usd,Ve=(s,o)=>o.price-s.price,De=(s,o)=>o.priceHour-s.priceHour,Ae=(s,o)=>o.vol_in_usd_24h-s.vol_in_usd_24h,Ne=(s,o)=>s.tvl_in_usd-o.tvl_in_usd,Ue=(s,o)=>s.price-o.price,Se=(s,o)=>s.priceHour-o.priceHour,We=(s,o)=>s.vol_in_usd_24h-o.vol_in_usd_24h,Be=s=>{const o=s.swap_account;return r.value.addressLpTokens&&r.value.addressLpTokens[o]&&r.value.addressLpTokens[o].rewarder_infos},Re=s=>{const o=s.swap_account;return r.value.addressLpTokens&&r.value.addressLpTokens[o]&&r.value.addressLpTokens[o].labels},Ee=s=>{if(!ue(s)&&!ue(r.value.addressLpTokens)&&!ue(r.value.tokensObj)){const o=s.swap_account;let v=r.value.addressLpTokens[o].rewarder_infos||[];const a=[];return v.forEach((q,ie)=>{a.push({...q,symbol:r.value.tokensObj[q.coinAddress].symbol,rewarderApr:s.rewarder_apr[ie],logoUrl:r.value.tokensObj[q.coinAddress].logoURI})}),a}},Fe=(s,o)=>s&&o?Ze(us.plus(de(s),de(o)),2)+"%":s,qe=s=>{let o=0;return s&&s.forEach(u=>{o+=de(String(u))}),String(o)},ze=()=>{M&&M.push("/stats-pools")},Me=()=>{M&&M.push("/stats-tokens")},Ge=N(()=>r.value.tokensObj||{}),Je=s=>{var o;return(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||((o=r.value.tokensObj[s==null?void 0:s.address])==null?void 0:o.logo_url)||(m.value.theme==="default"?z("/image/coins/unknown.png"):z("/image/coins/sui-unknown.png"))},Ke=N(()=>m.value.theme);return{tokensWarningObj:N(()=>r.value.tokensWarningObj),theme:Ke,getCoinIcon:Je,getRewarderInfo:Be,addCommom:f,store:m,importIcon:z,topPoolsList:k,addressTokens:pe,showEcharts:le,currentPools:g,onChangePools:X,currentTopPoolsList:l,onChangeTokens:Y,currentTokens:b,currentTopTokensList:A,topTokensList:G,router:M,isPc:T,getAprTotal:Fe,getRewarderApr:qe,toPoolsList:ze,toTokensList:Me,changePoolsList:me,changeTokensList:ge,tvlImprint:C,volHImprint:O,volDImprint:j,aprImprint:P,tokensPriceImprint:w,tokensPriceHImprint:y,tokensVolHImprint:V,tokensTvlImprint:I,labelToken:Q,select:K,selectValue:ne,selectList:ae,reviseValue:be,changeSort:Te,tokenValue:te,tokensList:re,changeSortLabel:Ce,tvlImprintHighlight:$,volHImprintHighlight:S,volDImprintHighlight:W,aprImprintHighlight:B,tokensPriceImprintHighlight:R,tokensPriceHImprintHighlight:E,tokensVolHImprintHighlight:F,tokensTvlImprintHighlight:D,getLabel:Re,rewardApr:Ee,getsad:oe,tokensObj:Ge,decimalUi:ee}}});const U=e=>(as("data-v-582a5c24"),e=e(),ts(),e),vs={class:"stats-container"},cs={class:"title"},ps={class:"top-tokens"},hs={class:"sort-by"},fs=U(()=>n("img",{src:_e,alt:""},null,-1)),ks=U(()=>n("use",{"xlink:href":"#icon-icon_on"},null,-1)),_s=[ks],ms={key:0,class:"select-item"},gs=["onClick"],bs=U(()=>n("img",{src:_e,alt:""},null,-1)),Ts={class:"content"},Cs={class:"item"},Is=U(()=>n("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Ls=[Is],Hs=U(()=>n("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Os=[Hs],js=U(()=>n("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Ps=[js],$s=U(()=>n("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),ws=[$s],ys=U(()=>n("span",null," ",-1)),Vs={key:0,class:"upgrade-loading"},Ds={class:"token"},As={class:"left"},Ns=["onerror"],Us={key:0,class:"pool-warning"},Ss={class:"right"},Ws={class:"name"},Bs={key:0,class:"label-all"},Rs={class:"price"},Es={class:"price"},Fs={class:"volume"},qs={class:"tvl"},zs={class:"btn-box"},Ms={key:2,class:"upgrade-loading"},Gs={class:"top"},Js={class:"token"},Ks={class:"left"},Qs=["onerror"],Xs={key:0,class:"pool-warning"},Ys={class:"right"},Zs={class:"name"},xs={key:0,class:"label-all"},eo={class:"middle"},so={class:"item-pools"},oo={class:"price"},lo={class:"item-pools"},no={class:"item-pools"},ao={class:"item-pools"},to={class:"bottom"},ro={class:"panation"};function io(e,r,pe,se,m,M){const le=Qe,g=Xe,b=rs,T=ns,oe=ls("image");return p(),h("div",vs,[n("div",cs,[J(le),L(" "+t(e.$t("common.tokens")),1)]),n("div",ps,[n("div",hs,[n("div",null,t(e.$t("newAdd.sortBy")),1),n("div",{class:"search-select",onClick:r[0]||(r[0]=l=>e.reviseValue("label"))},[n("div",null,[L(t(e.tokenValue)+" ",1),fs]),(p(),h("svg",{"aria-hidden":"true",class:H(e.labelToken?"show-icon icon":"icon")},_s,2)),e.labelToken?(p(),h("div",ms,[(p(!0),h(ve,null,ce(e.tokensList,(l,k)=>(p(),h("div",{key:k,class:"select-menu-item",onClick:_=>e.changeSortLabel(l)},[L(t(l)+" ",1),bs],8,gs))),128))])):x("",!0)])]),n("div",Ts,[n("div",Cs,[n("span",null,t(e.$t("common.tokens")),1),n("span",{onClick:r[1]||(r[1]=l=>e.changeTokensList("price"))},[L(t(e.$t("common.price"))+" ",1),(p(),h("svg",{"aria-hidden":"true",class:H(["pools-icon",e.tokensPriceImprint?e.tokensPriceImprintHighlight?"selected highlight":"selected":e.tokensPriceImprintHighlight?"highlight":""])},Ls,2))]),n("span",{onClick:r[2]||(r[2]=l=>e.changeTokensList("priceHour"))},[L(t(e.$t("newAdd.priceChange"))+" ",1),(p(),h("svg",{"aria-hidden":"true",class:H(["pools-icon",e.tokensPriceHImprint?e.tokensPriceHImprintHighlight?"selected highlight":"selected":e.tokensPriceHImprintHighlight?"highlight":""])},Os,2))]),n("span",{onClick:r[3]||(r[3]=l=>e.changeTokensList("vol_in_usd_24h"))},[L(t(e.$t("common.volume24h"))+" ",1),(p(),h("svg",{"aria-hidden":"true",class:H(["pools-icon",e.tokensVolHImprint?e.tokensVolHImprintHighlight?"selected highlight":"selected":e.tokensVolHImprintHighlight?"highlight":""])},Ps,2))]),n("span",{onClick:r[4]||(r[4]=l=>e.changeTokensList("tvl_in_usd"))},[L(t(e.$t("common.tvl"))+" ",1),(p(),h("svg",{"aria-hidden":"true",class:H(["pools-icon",e.tokensTvlImprint?e.tokensTvlImprintHighlight?"selected highlight":"selected":e.tokensTvlImprintHighlight?"highlight":""])},ws,2))]),ys]),e.currentTopTokensList?(p(!0),h(ve,{key:1},ce(e.currentTopTokensList,(l,k)=>(p(),h("div",{key:k,class:"item pc-item"},[n("div",Ds,[n("div",As,[n("div",null,[fe(n("img",{onerror:e.theme=="default"?("importIcon"in e?e.importIcon:c(z))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:c(z))("/image/coins/sui-unknown.png"),alt:""},null,8,Ns),[[oe,e.getCoinIcon(e.addressTokens&&e.addressTokens[l.address])]]),e.tokensWarningObj&&!e.tokensWarningObj[l.address]?(p(),h("div",Us)):x("",!0)])]),n("div",Ss,[n("div",Ws,[n("p",null,t(l.symbol),1),n("span",null,t(l.name)+" ",1)]),e.tokensObj&&e.tokensObj[l.address]&&e.tokensObj[l.address].labels&&e.tokensObj[l.address].labels[0]?(p(),h("div",Bs,[n("div",{class:H(["label",e.tokensObj&&e.tokensObj[l.address]&&e.tokensObj[l.address].labels&&e.tokensObj[l.address].labels[0]])},[n("span",null,t(e.tokensObj&&e.tokensObj[l.address]&&e.tokensObj[l.address].labels&&e.tokensObj[l.address].labels[0]?`${e.tokensObj[l.address].labels[0]}`:""),1)],2)])):x("",!0)])]),n("div",Rs,[n("p",null,t(l.price?"$"+(Number(l.price)>1?("addCommom"in e?e.addCommom:c(f))(("decimalUi"in e?e.decimalUi:c(ee))(l.price,2)):("addCommom"in e?e.addCommom:c(f))(("decimalUi"in e?e.decimalUi:c(ee))(l.price,4))):"--"),1)]),n("div",Es,[n("p",{class:H(l.price_rate_24h.includes("-")?"redecue-change-price":"add-change-price")},t(l.price_rate_24h!=="0%"&&!l.price_rate_24h.includes("-")?`+${l.price_rate_24h}`:l.price_rate_24h),3)]),n("div",Fs," $"+t(("addCommom"in e?e.addCommom:c(f))(l.vol_in_usd_24h,2)=="0.00"?0:("addCommom"in e?e.addCommom:c(f))(l.vol_in_usd_24h,2)?("addCommom"in e?e.addCommom:c(f))(l.vol_in_usd_24h,2):"--"),1),n("div",qs," $"+t(("addCommom"in e?e.addCommom:c(f))(l.tvl_in_usd,2)=="0.00"?0:("addCommom"in e?e.addCommom:c(f))(l.tvl_in_usd,2)?("addCommom"in e?e.addCommom:c(f))(l.tvl_in_usd,2):"--"),1),n("div",zs,[J(b,{class:"cancel-btn",onClick:_=>e.router.push(`/swap?to=${l.address}`)},{default:ke(()=>[L(t(e.$t("button.swap")),1)]),_:2},1032,["onClick"])])]))),128)):(p(),h("div",Vs,[J(g,{loading:!0,type:"statsTokens"})])),e.currentTopTokensList?(p(!0),h(ve,{key:3},ce(e.currentTopTokensList,(l,k)=>(p(),h("div",{key:k,class:"item h5-item"},[n("div",Gs,[n("div",Js,[n("div",Ks,[n("div",null,[fe(n("img",{onerror:e.theme=="default"?("importIcon"in e?e.importIcon:c(z))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:c(z))("/image/coins/sui-unknown.png"),alt:""},null,8,Qs),[[oe,e.getCoinIcon(e.addressTokens&&e.addressTokens[l.address])]]),e.tokensWarningObj&&!e.tokensWarningObj[l.address]?(p(),h("div",Xs)):x("",!0)])]),n("div",Ys,[n("div",Zs,[n("p",null,t(l.symbol),1),n("span",null,t(l.name)+" ",1)]),e.tokensObj&&e.tokensObj[l.address]&&e.tokensObj[l.address].labels&&e.tokensObj[l.address].labels[0]?(p(),h("div",xs,[n("div",{class:H(["label",e.tokensObj&&e.tokensObj[l.address]&&e.tokensObj[l.address].labels&&e.tokensObj[l.address].labels[0]])},[n("span",null,t(e.tokensObj&&e.tokensObj[l.address]&&e.tokensObj[l.address].labels&&e.tokensObj[l.address].labels[0]?`${e.tokensObj[l.address].labels[0]}`:""),1)],2)])):x("",!0)])])]),n("div",eo,[n("div",so,[n("span",null,t(e.$t("common.price")),1),n("div",oo,[n("p",null,t(l.price?"$"+(Number(l.price)>1?("addCommom"in e?e.addCommom:c(f))(("decimalUi"in e?e.decimalUi:c(ee))(l.price,2)):("addCommom"in e?e.addCommom:c(f))(("decimalUi"in e?e.decimalUi:c(ee))(l.price,4))):"--"),1)])]),n("div",lo,[n("span",null,t(e.$t("newAdd.priceChange")),1),n("p",{class:H(l.price_rate_24h.includes("-")?"redecue-change-price":"add-change-price")},t(l.price_rate_24h),3)]),n("div",no,[n("span",null,t(e.$t("common.volume24h")),1),n("p",null," $"+t(("addCommom"in e?e.addCommom:c(f))(l.vol_in_usd_24h,2)=="0.00"?0:("addCommom"in e?e.addCommom:c(f))(l.vol_in_usd_24h,2)),1)]),n("div",ao,[n("span",null,t(e.$t("common.tvl")),1),n("p",null," $"+t(("addCommom"in e?e.addCommom:c(f))(l.tvl_in_usd,2)=="0.00"?0:("addCommom"in e?e.addCommom:c(f))(l.tvl_in_usd,2)),1)])]),n("div",to,[J(b,{class:"cancel-btn",onClick:_=>e.router.push(`/swap?to=${l.address}`)},{default:ke(()=>[L(t(e.$t("button.swap")),1)]),_:2},1032,["onClick"])])]))),128)):(p(),h("div",Ms,[J(g,{loading:!0,type:"statsTokenH5"})]))]),n("div",ro,[J(T,{current:e.currentTokens,"onUpdate:current":r[5]||(r[5]=l=>e.currentTokens=l),"page-size":(e.isPc,10),simple:"",total:e.topTokensList.length,onChange:e.onChangeTokens},null,8,["current","page-size","total","onChange"])])])])}const Io=os(ds,[["render",io],["__scopeId","data-v-582a5c24"]]);export{Io as default};
