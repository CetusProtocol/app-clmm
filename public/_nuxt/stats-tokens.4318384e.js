import{_ as Qe}from"./back.2e2aba00.js";import{_ as Xe}from"./upgrade-loading.d5821087.js";import{i as z}from"./import-icon.de3e6c66.js";import{u as Ye,e as k,d as ee,c as ue,s as Ze,t as de}from"./pool.19b8b8ea.js";import{a as xe,m as N,b as es,r as i,y as ss,D as he,e as os,q as ls,o as p,f as h,h as n,i as J,j as I,v as r,z as O,F as ve,s as ce,x,a0 as ns,t as ke,u as c,w as fe,p as as,k as ts,B as rs}from"./entry.9e5ce800.js";/* empty css              */import{u as is}from"./index.e30d2a8b.js";import{p as us}from"./precision.a7a6c57b.js";import{_ as _e}from"./icon_on_stats.cdf13a69.js";/* empty css              *//* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";const ds=xe({setup(){const e=Ye(),a=N(()=>e),pe=N(()=>a.value.tokensObj||{}),se=is(),b=N(()=>se),M=es();let le=i("big");const _=i(1),g=i(1);let T=i(!1);const oe=()=>{se.getStatsData(b.value.chainName,b.value.filterCoinsObj)};ss(()=>{se.getStatsData(b.value.chainName,b.value.filterCoinsObj);const s=document.body.clientWidth;s<750?T.value=!1:T.value=!0,window.onresize=()=>{s<750?T.value=!1:T.value=!0},T.value,X(_.value,10),Y(g.value,10)});let l=i([]);const f=N(()=>b.value.topPoolsList),m=s=>(o,u)=>{let v=o[s],t=u[s];return v-t},d=s=>(o,u)=>{let v=o[s];return u[s]-v},C=i(!1),j=i(!1),H=i(!1),P=i(!1),y=i(!1),S=i(!0),W=i(!1),B=i(!1),w=i(!1),$=i(!1),V=i(!1),L=i(!1),R=i(!1),E=i(!1),F=i(!0),D=i(!1),K=i(!1),ne=i("Volume (24H)"),ae=i(["TVL","Volume (7D)","APR"]),Q=i(!1),te=i("Volume (24H)"),re=i(["Price","TVL","Price Change"]),ge=s=>{const o=f;if(s=="tvl_in_usd"?(y.value?(C.value=!C.value,o.value.sort(C.value?m(s):d(s))):o.value.sort(d(s)),j.value=!1,H.value=!1,P.value=!1,y.value=!0,S.value=!1,W.value=!1,B.value=!1):s=="vol_in_usd_24h"?(S.value?(j.value=!j.value,o.value.sort(j.value?m(s):d(s))):o.value.sort(d(s)),C.value=!1,H.value=!1,P.value=!1,y.value=!1,S.value=!0,W.value=!1,B.value=!1):s=="vol_in_usd_7_day"?(W.value?(H.value=!H.value,o.value.sort(H.value?m(s):d(s))):o.value.sort(d(s)),C.value=!1,j.value=!1,P.value=!1,y.value=!1,S.value=!1,W.value=!0,B.value=!1):s=="aprNum"&&(B.value?(P.value=!P.value,o.value.sort(P.value?m(s):d(s))):o.value.sort(d(s)),C.value=!1,j.value=!1,H.value=!1,y.value=!1,S.value=!1,W.value=!1,B.value=!0),console.log(o.value,"===>>>>>poolsListArray.value"),console.log(_.value,"===>>>>>currentPools.value"),o.value.length<10)l.value=o.value.slice(0,10);else{const u=_.value*10;l.value=o.value.slice(u-10,u)}},me=s=>{const o=G;if(s=="price"?(R.value?(w.value=!w.value,o.value.sort(w.value?m(s):d(s))):o.value.sort(d(s)),$.value=!1,V.value=!1,L.value=!1,R.value=!0,E.value=!1,F.value=!1,D.value=!1):s=="vol_in_usd_24h"?(F.value?(V.value=!V.value,o.value.sort(V.value?m(s):d(s))):o.value.sort(d(s)),w.value=!1,$.value=!1,L.value=!1,R.value=!1,E.value=!1,F.value=!0,D.value=!1):s=="tvl_in_usd"?(D.value?(L.value=!L.value,o.value.sort(L.value?m(s):d(s))):o.value.sort(d(s)),w.value=!1,$.value=!1,V.value=!1,R.value=!1,E.value=!1,F.value=!1,D.value=!0):s=="priceHour"&&(E.value?($.value=!$.value,o.value.sort($.value?m(s):d(s))):o.value.sort(d(s)),w.value=!1,V.value=!1,L.value=!1,R.value=!1,E.value=!0,F.value=!1,D.value=!1),console.log(o.value,"===>>>>>tokensListArray.value"),console.log(g.value,"===>>>>>tokensListArray.value"),o.value.length<10)A.value=o.value.slice(0,10);else{const u=g.value*10;A.value=o.value.slice(u-10,u)}},be=s=>{s=="label"?(Q.value=!Q.value,K.value=!1):s=="select"?(K.value=!K.value,Q.value=!1):(K.value=!1,Q.value=!1)},Te=s=>{const o=[];o.push(ne.value),ae.value.forEach((u,v)=>{u!=s&&o.push(u)}),ae.value=o,ne.value=s,s=="TVL"?l.value.sort(d("tvl_in_usd")):s=="Volume (24H)"?l.value.sort(d("vol_in_usd_24h")):s=="Volume (7D)"?l.value.sort(d("vol_in_usd_7_day")):s=="APR"&&l.value.sort(d("aprNum"))},Ce=s=>{console.log(s,"===>>>>search-select");const o=[];o.push(te.value),re.value.forEach((u,v)=>{u!=s&&o.push(u)}),re.value=o,te.value=s,s=="TVL"?A.value.sort(d("tvl_in_usd")):s=="Volume (24H)"?A.value.sort(d("vol_in_usd_24h")):s=="Price"?A.value.sort(d("price")):s=="Price Change"&&A.value.sort(d("priceHour"))};he(f,()=>{T.value,X(_.value,10)});const X=(s,o)=>{console.log(s,"page"),_.value=s;const u=o*s-o;let v=o*s;console.log(f,"===>>>>>topPoolsList"),v=v>f.value.length?f.value.length:v;const t=f.value;if(t.length>0){y.value&&!C.value?t.sort(Le):y.value&&C.value?t.sort(He):S.value?j.value?t.sort(Pe):t.sort(Ie):W.value?H.value?t.sort(ye):t.sort(Oe):B.value&&(P.value?t.sort(we):t.sort(je));const q=t.filter((ie,Z)=>Z>=u&&Z<v);l.value=q}return t},Le=(s,o)=>o.tvl_in_usd-s.tvl_in_usd,Ie=(s,o)=>o.vol_in_usd_24h-s.vol_in_usd_24h,Oe=(s,o)=>o.vol_in_usd_7_day-s.vol_in_usd_7_day,je=(s,o)=>o.aprNum-s.aprNum,He=(s,o)=>s.tvl_in_usd-o.tvl_in_usd,Pe=(s,o)=>s.vol_in_usd_24h-o.vol_in_usd_24h,ye=(s,o)=>s.vol_in_usd_7_day-o.vol_in_usd_7_day,we=(s,o)=>s.aprNum-o.aprNum;let A=i(null);const G=N(()=>{const s=b.value.topTokensList,o=[];for(let u=0;u<s.length;u++){const v=s[u];o.push({...v,priceHour:v?Number(v.price_rate_24h.substring(0,v.price_rate_24h.length-1)):"0",address:v.symbol=="SUI"?"0x2::sui::SUI":v.address})}return o});he(G,()=>{T.value,Y(g.value,10)});const Y=(s,o)=>{console.log(s,"page1"),g.value=s;const u=o*s-o;let v=o*s;v=v>G.value.length?G.value.length:v;const t=G.value;if(t.length>0){D.value&&!L.value?t.sort($e):D.value&&L.value?t.sort(Ne):R.value?w.value?t.sort(Ue):t.sort(Ve):E.value?$.value?t.sort(Se):t.sort(De):F.value&&(V.value?t.sort(We):t.sort(Ae));const q=t.filter((ie,Z)=>Z>=u&&Z<v);A.value=q}return t},$e=(s,o)=>o.tvl_in_usd-s.tvl_in_usd,Ve=(s,o)=>o.price-s.price,De=(s,o)=>o.priceHour-s.priceHour,Ae=(s,o)=>o.vol_in_usd_24h-s.vol_in_usd_24h,Ne=(s,o)=>s.tvl_in_usd-o.tvl_in_usd,Ue=(s,o)=>s.price-o.price,Se=(s,o)=>s.priceHour-o.priceHour,We=(s,o)=>s.vol_in_usd_24h-o.vol_in_usd_24h,Be=s=>{const o=s.swap_account;return console.log(a.value.addressLpTokens[o].rewarder_infos,"==>&pools.value.addressLpTokens[address].rewarder_infos"),a.value.addressLpTokens&&a.value.addressLpTokens[o]&&a.value.addressLpTokens[o].rewarder_infos},Re=s=>{const o=s.swap_account;return a.value.addressLpTokens&&a.value.addressLpTokens[o]&&a.value.addressLpTokens[o].labels},Ee=s=>{if(!ue(s)&&!ue(a.value.addressLpTokens)&&!ue(a.value.tokensObj)){const o=s.swap_account;let v=a.value.addressLpTokens[o].rewarder_infos||[];const t=[];return v.forEach((q,ie)=>{console.log(a.value.tokensObj,"===>tokensObj"),t.push({...q,symbol:a.value.tokensObj[q.coinAddress].symbol,rewarderApr:s.rewarder_apr[ie],logoUrl:a.value.tokensObj[q.coinAddress].logoURI})}),console.log(t,"===>result111"),t}},Fe=(s,o)=>s&&o?Ze(us.plus(de(s),de(o)),2)+"%":s,qe=s=>{let o=0;return s&&s.forEach(u=>{console.log(u,"===>ele"),o+=de(String(u))}),String(o)},ze=()=>{M&&M.push("/stats-pools")},Me=()=>{M&&M.push("/stats-tokens")},Ge=N(()=>(console.log(a.value.tokensObj,"===>pools.value.tokensObj"),a.value.tokensObj||{})),Je=s=>{var o;return(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||((o=a.value.tokensObj[s==null?void 0:s.address])==null?void 0:o.logo_url)||(b.value.theme==="default"?z("/image/coins/unknown.png"):z("/image/coins/sui-unknown.png"))},Ke=N(()=>b.value.theme);return{tokensWarningObj:N(()=>a.value.tokensWarningObj),theme:Ke,getCoinIcon:Je,getRewarderInfo:Be,addCommom:k,store:b,importIcon:z,topPoolsList:f,addressTokens:pe,showEcharts:le,currentPools:_,onChangePools:X,currentTopPoolsList:l,onChangeTokens:Y,currentTokens:g,currentTopTokensList:A,topTokensList:G,router:M,isPc:T,getAprTotal:Fe,getRewarderApr:qe,toPoolsList:ze,toTokensList:Me,changePoolsList:ge,changeTokensList:me,tvlImprint:C,volHImprint:j,volDImprint:H,aprImprint:P,tokensPriceImprint:w,tokensPriceHImprint:$,tokensVolHImprint:V,tokensTvlImprint:L,labelToken:Q,select:K,selectValue:ne,selectList:ae,reviseValue:be,changeSort:Te,tokenValue:te,tokensList:re,changeSortLabel:Ce,tvlImprintHighlight:y,volHImprintHighlight:S,volDImprintHighlight:W,aprImprintHighlight:B,tokensPriceImprintHighlight:R,tokensPriceHImprintHighlight:E,tokensVolHImprintHighlight:F,tokensTvlImprintHighlight:D,getLabel:Re,rewardApr:Ee,getsad:oe,tokensObj:Ge,decimalUi:ee}}});const U=e=>(as("data-v-5d78fb52"),e=e(),ts(),e),vs={class:"stats-container"},cs={class:"title"},ps={class:"top-tokens"},hs={class:"sort-by"},ks=U(()=>n("img",{src:_e,alt:""},null,-1)),fs=U(()=>n("use",{"xlink:href":"#icon-icon_on"},null,-1)),_s=[fs],gs={key:0,class:"select-item"},ms=["onClick"],bs=U(()=>n("img",{src:_e,alt:""},null,-1)),Ts={class:"content"},Cs={class:"item"},Ls=U(()=>n("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Is=[Ls],Os=U(()=>n("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),js=[Os],Hs=U(()=>n("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Ps=[Hs],ys=U(()=>n("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),ws=[ys],$s=U(()=>n("span",null," ",-1)),Vs={key:0,class:"upgrade-loading"},Ds={class:"token"},As={class:"left"},Ns=["onerror"],Us={key:0,class:"pool-warning"},Ss={class:"right"},Ws={class:"name"},Bs={key:0,class:"label-all"},Rs={class:"price"},Es={class:"price"},Fs={class:"volume"},qs={class:"tvl"},zs={class:"btn-box"},Ms={key:2,class:"upgrade-loading"},Gs={class:"top"},Js={class:"token"},Ks={class:"left"},Qs=["onerror"],Xs={key:0,class:"pool-warning"},Ys={class:"right"},Zs={class:"name"},xs={key:0,class:"label-all"},eo={class:"middle"},so={class:"item-pools"},oo={class:"price"},lo={class:"item-pools"},no={class:"item-pools"},ao={class:"item-pools"},to={class:"bottom"},ro={class:"panation"};function io(e,a,pe,se,b,M){const le=Qe,_=Xe,g=rs,T=ns,oe=ls("image");return p(),h("div",vs,[n("div",cs,[J(le),I(" "+r(e.$t("common.tokens")),1)]),n("div",ps,[n("div",hs,[n("div",null,r(e.$t("newAdd.sortBy")),1),n("div",{class:"search-select",onClick:a[0]||(a[0]=l=>e.reviseValue("label"))},[n("div",null,[I(r(e.tokenValue)+" ",1),ks]),(p(),h("svg",{"aria-hidden":"true",class:O(e.labelToken?"show-icon icon":"icon")},_s,2)),e.labelToken?(p(),h("div",gs,[(p(!0),h(ve,null,ce(e.tokensList,(l,f)=>(p(),h("div",{key:f,class:"select-menu-item",onClick:m=>e.changeSortLabel(l)},[I(r(l)+" ",1),bs],8,ms))),128))])):x("",!0)])]),n("div",Ts,[n("div",Cs,[n("span",null,r(e.$t("common.tokens")),1),n("span",{onClick:a[1]||(a[1]=l=>e.changeTokensList("price"))},[I(r(e.$t("common.price"))+" ",1),(p(),h("svg",{"aria-hidden":"true",class:O(["pools-icon",e.tokensPriceImprint?e.tokensPriceImprintHighlight?"selected highlight":"selected":e.tokensPriceImprintHighlight?"highlight":""])},Is,2))]),n("span",{onClick:a[2]||(a[2]=l=>e.changeTokensList("priceHour"))},[I(r(e.$t("newAdd.priceChange"))+" ",1),(p(),h("svg",{"aria-hidden":"true",class:O(["pools-icon",e.tokensPriceHImprint?e.tokensPriceHImprintHighlight?"selected highlight":"selected":e.tokensPriceHImprintHighlight?"highlight":""])},js,2))]),n("span",{onClick:a[3]||(a[3]=l=>e.changeTokensList("vol_in_usd_24h"))},[I(r(e.$t("common.volume24h"))+" ",1),(p(),h("svg",{"aria-hidden":"true",class:O(["pools-icon",e.tokensVolHImprint?e.tokensVolHImprintHighlight?"selected highlight":"selected":e.tokensVolHImprintHighlight?"highlight":""])},Ps,2))]),n("span",{onClick:a[4]||(a[4]=l=>e.changeTokensList("tvl_in_usd"))},[I(r(e.$t("common.tvl"))+" ",1),(p(),h("svg",{"aria-hidden":"true",class:O(["pools-icon",e.tokensTvlImprint?e.tokensTvlImprintHighlight?"selected highlight":"selected":e.tokensTvlImprintHighlight?"highlight":""])},ws,2))]),$s]),e.currentTopTokensList?(p(!0),h(ve,{key:1},ce(e.currentTopTokensList,(l,f)=>(p(),h("div",{key:f,class:"item pc-item"},[n("div",Ds,[n("div",As,[n("div",null,[ke(n("img",{onerror:e.theme=="default"?("importIcon"in e?e.importIcon:c(z))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:c(z))("/image/coins/sui-unknown.png"),alt:""},null,8,Ns),[[oe,e.getCoinIcon(e.addressTokens&&e.addressTokens[l.address])]]),e.tokensWarningObj&&!e.tokensWarningObj[l.address]?(p(),h("div",Us)):x("",!0)])]),n("div",Ss,[n("div",Ws,[n("p",null,r(l.symbol),1),n("span",null,r(l.name)+" ",1)]),e.tokensObj&&e.tokensObj[l.address]&&e.tokensObj[l.address].labels&&e.tokensObj[l.address].labels[0]?(p(),h("div",Bs,[n("div",{class:O(["label",e.tokensObj&&e.tokensObj[l.address]&&e.tokensObj[l.address].labels&&e.tokensObj[l.address].labels[0]])},[n("span",null,r(e.tokensObj&&e.tokensObj[l.address]&&e.tokensObj[l.address].labels&&e.tokensObj[l.address].labels[0]?`${e.tokensObj[l.address].labels[0]}`:""),1)],2)])):x("",!0)])]),n("div",Rs,[n("p",null,r(l.price?"$"+(Number(l.price)>1?("addCommom"in e?e.addCommom:c(k))(("decimalUi"in e?e.decimalUi:c(ee))(l.price,2)):("addCommom"in e?e.addCommom:c(k))(("decimalUi"in e?e.decimalUi:c(ee))(l.price,4))):"--"),1)]),n("div",Es,[n("p",{class:O(l.price_rate_24h.includes("-")?"redecue-change-price":"add-change-price")},r(l.price_rate_24h!=="0%"&&!l.price_rate_24h.includes("-")?`+${l.price_rate_24h}`:l.price_rate_24h),3)]),n("div",Fs," $"+r(("addCommom"in e?e.addCommom:c(k))(l.vol_in_usd_24h,2)=="0.00"?0:("addCommom"in e?e.addCommom:c(k))(l.vol_in_usd_24h,2)?("addCommom"in e?e.addCommom:c(k))(l.vol_in_usd_24h,2):"--"),1),n("div",qs," $"+r(("addCommom"in e?e.addCommom:c(k))(l.tvl_in_usd,2)=="0.00"?0:("addCommom"in e?e.addCommom:c(k))(l.tvl_in_usd,2)?("addCommom"in e?e.addCommom:c(k))(l.tvl_in_usd,2):"--"),1),n("div",zs,[J(g,{class:"cancel-btn",onClick:m=>e.router.push(`/swap?to=${l.address}`)},{default:fe(()=>[I(r(e.$t("button.swap")),1)]),_:2},1032,["onClick"])])]))),128)):(p(),h("div",Vs,[J(_,{loading:!0,type:"statsTokens"})])),e.currentTopTokensList?(p(!0),h(ve,{key:3},ce(e.currentTopTokensList,(l,f)=>(p(),h("div",{key:f,class:"item h5-item"},[n("div",Gs,[n("div",Js,[n("div",Ks,[n("div",null,[ke(n("img",{onerror:e.theme=="default"?("importIcon"in e?e.importIcon:c(z))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:c(z))("/image/coins/sui-unknown.png"),alt:""},null,8,Qs),[[oe,e.getCoinIcon(e.addressTokens&&e.addressTokens[l.address])]]),e.tokensWarningObj&&!e.tokensWarningObj[l.address]?(p(),h("div",Xs)):x("",!0)])]),n("div",Ys,[n("div",Zs,[n("p",null,r(l.symbol),1),n("span",null,r(l.name)+" ",1)]),e.tokensObj&&e.tokensObj[l.address]&&e.tokensObj[l.address].labels&&e.tokensObj[l.address].labels[0]?(p(),h("div",xs,[n("div",{class:O(["label",e.tokensObj&&e.tokensObj[l.address]&&e.tokensObj[l.address].labels&&e.tokensObj[l.address].labels[0]])},[n("span",null,r(e.tokensObj&&e.tokensObj[l.address]&&e.tokensObj[l.address].labels&&e.tokensObj[l.address].labels[0]?`${e.tokensObj[l.address].labels[0]}`:""),1)],2)])):x("",!0)])])]),n("div",eo,[n("div",so,[n("span",null,r(e.$t("common.price")),1),n("div",oo,[n("p",null,r(l.price?"$"+(Number(l.price)>1?("addCommom"in e?e.addCommom:c(k))(("decimalUi"in e?e.decimalUi:c(ee))(l.price,2)):("addCommom"in e?e.addCommom:c(k))(("decimalUi"in e?e.decimalUi:c(ee))(l.price,4))):"--"),1)])]),n("div",lo,[n("span",null,r(e.$t("newAdd.priceChange")),1),n("p",{class:O(l.price_rate_24h.includes("-")?"redecue-change-price":"add-change-price")},r(l.price_rate_24h),3)]),n("div",no,[n("span",null,r(e.$t("common.volume24h")),1),n("p",null," $"+r(("addCommom"in e?e.addCommom:c(k))(l.vol_in_usd_24h,2)=="0.00"?0:("addCommom"in e?e.addCommom:c(k))(l.vol_in_usd_24h,2)),1)]),n("div",ao,[n("span",null,r(e.$t("common.tvl")),1),n("p",null," $"+r(("addCommom"in e?e.addCommom:c(k))(l.tvl_in_usd,2)=="0.00"?0:("addCommom"in e?e.addCommom:c(k))(l.tvl_in_usd,2)),1)])]),n("div",to,[J(g,{class:"cancel-btn",onClick:m=>e.router.push(`/swap?to=${l.address}`)},{default:fe(()=>[I(r(e.$t("button.swap")),1)]),_:2},1032,["onClick"])])]))),128)):(p(),h("div",Ms,[J(_,{loading:!0,type:"statsTokenH5"})]))]),n("div",ro,[J(T,{current:e.currentTokens,"onUpdate:current":a[5]||(a[5]=l=>e.currentTokens=l),"page-size":(e.isPc,10),simple:"",total:e.topTokensList.length,onChange:e.onChangeTokens},null,8,["current","page-size","total","onChange"])])])])}const Lo=os(ds,[["render",io],["__scopeId","data-v-5d78fb52"]]);export{Lo as default};
