import{_ as Xs}from"./back.0c4da570.js";import{_ as Ys}from"./apr-tips.d96a610d.js";import{i as y}from"./import-icon.de3e6c66.js";import{u as Zs,b as J,c as Z,s as xs,t as ps,f as se}from"./pool.723017bd.js";import{a as ee,m as S,b as oe,r as p,y as le,D as _s,e as ne,q as ae,o as i,f as v,h as n,i as G,j as b,v as u,z as A,F as ls,s as ns,x as g,$ as re,t as rs,u as f,w as hs,p as te,k as ue,B as de}from"./entry.16e77510.js";/* empty css              */import{u as ie}from"./index.554ab19b.js";import{p as ve}from"./precision.9d58cda5.js";import{_ as fs}from"./icon_on_stats.cdf13a69.js";import{_ as gs}from"./icon-Rewards.af221607.js";const pe=ee({setup(){const s=Zs(),a=S(()=>s),cs=S(()=>a.value.tokensObj||{}),as=ie(),I=S(()=>as),K=oe();let ts=p("big");const T=p(1),L=p(1);let H=p(!1);const Q=()=>{as.getStatsData(I.value.chainName,I.value.filterCoinsObj)};le(()=>{as.getStatsData(I.value.chainName,I.value.filterCoinsObj);const o=document.body.clientWidth;o<750?H.value=!1:H.value=!0,window.onresize=()=>{o<750?H.value=!1:H.value=!0},H.value,es(T.value,10),os(L.value,10)});let e=p([]);const k=S(()=>I.value.topPoolsList),h=o=>(l,t)=>{let c=l[o],d=t[o];return c-d},r=o=>(l,t)=>{let c=l[o];return t[o]-c},_=p(!1),w=p(!1),$=p(!1),D=p(!1),V=p(!1),B=p(!0),E=p(!1),U=p(!1),O=p(!1),j=p(!1),m=p(!1),C=p(!1),F=p(!1),q=p(!1),z=p(!1),N=p(!0),x=p(!1),us=p("Volume (24H)"),ds=p(["TVL","Volume (7D)","APR"]),ss=p(!1),is=p("TVL"),vs=p(["Price","Volume (24H)","Price Change"]),ks=o=>{const l=k;if(o=="tvl_in_usd"?(V.value?(_.value=!_.value,l.value.sort(_.value?h(o):r(o))):l.value.sort(r(o)),w.value=!1,$.value=!1,D.value=!1,V.value=!0,B.value=!1,E.value=!1,U.value=!1):o=="vol_in_usd_24h"?(B.value?(w.value=!w.value,l.value.sort(w.value?h(o):r(o))):l.value.sort(r(o)),_.value=!1,$.value=!1,D.value=!1,V.value=!1,B.value=!0,E.value=!1,U.value=!1):o=="vol_in_usd_7_day"?(E.value?($.value=!$.value,l.value.sort($.value?h(o):r(o))):l.value.sort(r(o)),_.value=!1,w.value=!1,D.value=!1,V.value=!1,B.value=!1,E.value=!0,U.value=!1):o=="aprNum"&&(U.value?(D.value=!D.value,l.value.sort(D.value?h(o):r(o))):l.value.sort(r(o)),_.value=!1,w.value=!1,$.value=!1,V.value=!1,B.value=!1,E.value=!1,U.value=!0),l.value.length<10)e.value=l.value.slice(0,10);else{const t=T.value*10;e.value=l.value.slice(t-10,t)}},ws=o=>{const l=X;if(o=="price"?(F.value?(O.value=!O.value,l.value.sort(O.value?h(o):r(o))):l.value.sort(r(o)),j.value=!1,m.value=!1,C.value=!1,F.value=!0,q.value=!1,z.value=!1,N.value=!1):o=="vol_in_usd_24h"?(z.value?(m.value=!m.value,l.value.sort(m.value?h(o):r(o))):l.value.sort(r(o)),O.value=!1,j.value=!1,C.value=!1,F.value=!1,q.value=!1,z.value=!0,N.value=!1):o=="tvl_in_usd"?(N.value?(C.value=!C.value,l.value.sort(C.value?h(o):r(o))):l.value.sort(r(o)),O.value=!1,j.value=!1,m.value=!1,F.value=!1,q.value=!1,z.value=!1,N.value=!0):o=="priceHour"&&(q.value?(j.value=!j.value,l.value.sort(j.value?h(o):r(o))):l.value.sort(r(o)),O.value=!1,m.value=!1,C.value=!1,F.value=!1,q.value=!0,z.value=!1,N.value=!1),l.value.length<10)R.value=l.value.slice(0,10);else{const t=L.value*10;R.value=l.value.slice(t-10,t)}},Ts=o=>{o=="label"?(ss.value=!ss.value,x.value=!1):o=="select"?(x.value=!x.value,ss.value=!1):(x.value=!1,ss.value=!1)},bs=o=>{const l=[];l.push(us.value),ds.value.forEach((t,c)=>{t!=o&&l.push(t)}),ds.value=l,us.value=o,o=="TVL"?e.value.sort(r("tvl_in_usd")):o=="Volume (24H)"?e.value.sort(r("vol_in_usd_24h")):o=="Volume (7D)"?e.value.sort(r("vol_in_usd_7_day")):o=="APR"&&e.value.sort(r("aprNum"))},ys=o=>{const l=[];l.push(is.value),vs.value.forEach((t,c)=>{t!=o&&l.push(t)}),vs.value=l,is.value=o,o=="TVL"?R.value.sort(r("tvl_in_usd")):o=="Volume (24H)"?R.value.sort(r("vol_in_usd_24h")):o=="Price"?R.value.sort(r("price")):o=="Price Change"&&R.value.sort(r("priceHour"))};_s(k,()=>{H.value,es(T.value,10)});const es=(o,l)=>{T.value=o;const t=l*o-l;let c=l*o;c=c>k.value.length?k.value.length:c;const d=k.value;if(d.length>0){V.value&&!_.value?d.sort(Is):V.value&&_.value?d.sort(Cs):B.value?w.value?d.sort(As):d.sort(Ls):E.value?$.value?d.sort($s):d.sort(Hs):U.value&&(D.value?d.sort(Ds):d.sort(Ps));const Y=d.filter((M,W)=>W>=t&&W<c);e.value=Y}return d},Is=(o,l)=>l.tvl_in_usd-o.tvl_in_usd,Ls=(o,l)=>l.vol_in_usd_24h-o.vol_in_usd_24h,Hs=(o,l)=>l.vol_in_usd_7_day-o.vol_in_usd_7_day,Ps=(o,l)=>l.aprNum-o.aprNum,Cs=(o,l)=>o.tvl_in_usd-l.tvl_in_usd,As=(o,l)=>o.vol_in_usd_24h-l.vol_in_usd_24h,$s=(o,l)=>o.vol_in_usd_7_day-l.vol_in_usd_7_day,Ds=(o,l)=>o.aprNum-l.aprNum;let R=p([]);const X=S(()=>{const o=I.value.topTokensList,l=[];for(let t=0;t<o.length;t++){const c=o[t];l.push({...c,priceHour:c?Number(c.price_rate_24h.substring(0,c.price_rate_24h.length-1)):"0"})}return l});_s(X,()=>{H.value,os(L.value,10)});const os=(o,l)=>{L.value=o;const t=l*o-l;let c=l*o;c=c>X.value.length?X.value.length:c;const d=X.value;if(d.length>0){N.value&&!C.value?d.sort(Vs):N.value&&C.value?d.sort(Ns):F.value?O.value?d.sort(Rs):d.sort(Os):q.value?j.value?d.sort(Ws):d.sort(js):z.value&&(m.value?d.sort(Ss):d.sort(ms));const Y=d.filter((M,W)=>W>=t&&W<c);R.value=Y}return d},Vs=(o,l)=>l.tvl_in_usd-o.tvl_in_usd,Os=(o,l)=>l.price-o.price,js=(o,l)=>l.priceHour-o.priceHour,ms=(o,l)=>l.vol_in_usd_24h-o.vol_in_usd_24h,Ns=(o,l)=>o.tvl_in_usd-l.tvl_in_usd,Rs=(o,l)=>o.price-l.price,Ws=(o,l)=>o.priceHour-l.priceHour,Ss=(o,l)=>o.vol_in_usd_24h-l.vol_in_usd_24h,Bs=o=>{const l=o.swap_account;return a.value.addressLpTokens&&a.value.addressLpTokens[l]&&a.value.addressLpTokens[l].rewarder_infos},Es=o=>{const l=o.swap_account;return a.value.addressLpTokens&&a.value.addressLpTokens[l]&&a.value.addressLpTokens[l].labels},Us=o=>{if(!Z(o)&&!Z(a.value.addressLpTokens)&&!Z(a.value.tokensObj)){const l=a.value.addressLpTokens[o.swap_account];return l==null?void 0:l.is_display_rewarder}else return!1},Fs=o=>{if(!Z(o)&&!Z(a.value.addressLpTokens)&&!Z(a.value.tokensObj)){const l=o.swap_account,t=a.value.addressLpTokens[l];let c=(t==null?void 0:t.rewarder_infos)||[];const d=[];c.forEach((M,W)=>{d.push({...M,symbol:a.value.tokensObj[M.coinAddress].symbol,rewarderApr:o.rewarder_apr[W],logoUrl:a.value.tokensObj[M.coinAddress].logoURI,rewarder_display:t[`rewarder_display${W+1}`]})});let Y=[];return Y=d.filter(M=>M.rewarder_display),Y}},qs=(o,l)=>o&&l?xs(ve.plus(ps(o),ps(l)),2)+"%":o,zs=o=>{let l=0;return o&&o.forEach(t=>{l+=ps(String(t))}),String(se(String(l),2))},Ms=()=>{K&&K.push("/stats-pools")},Gs=()=>{K&&K.push("/stats-tokens")},Js=o=>{var l;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((l=a.value.tokensObj[o==null?void 0:o.address])==null?void 0:l.logo_url)||(I.value.theme==="default"?y("/image/coins/unknown.png"):y("/image/coins/sui-unknown.png"))},Ks=S(()=>a.value.tokensObj),Qs=S(()=>I.value.theme);return{tokensWarningObj:S(()=>a.value.tokensWarningObj),theme:Qs,tokensObj:Ks,getCoinIcon:Js,getRewarderInfo:Bs,addCommom:J,store:I,importIcon:y,topPoolsList:k,addressTokens:cs,showEcharts:ts,currentPools:T,onChangePools:es,currentTopPoolsList:e,onChangeTokens:os,currentTokens:L,currentTopTokensList:R,topTokensList:X,router:K,isPc:H,getAprTotal:qs,getRewarderApr:zs,toPoolsList:Ms,toTokensList:Gs,changePoolsList:ks,changeTokensList:ws,tvlImprint:_,volHImprint:w,volDImprint:$,aprImprint:D,tokensPriceImprint:O,tokensPriceHImprint:j,tokensVolHImprint:m,tokensTvlImprint:C,labelToken:ss,select:x,selectValue:us,selectList:ds,reviseValue:Ts,changeSort:bs,tokenValue:is,tokensList:vs,changeSortLabel:ys,tvlImprintHighlight:V,volHImprintHighlight:B,volDImprintHighlight:E,aprImprintHighlight:U,tokensPriceImprintHighlight:F,tokensPriceHImprintHighlight:q,tokensVolHImprintHighlight:z,tokensTvlImprintHighlight:N,getLabel:Es,rewardApr:Fs,getsad:Q,rewardDisplay:Us}}});const P=s=>(te("data-v-d01b82b5"),s=s(),ue(),s),ce={class:"stats-container"},_e={class:"title"},he={class:"top-pools-new"},fe={class:"sort-by"},ge=P(()=>n("img",{src:fs,alt:""},null,-1)),ke=P(()=>n("use",{"xlink:href":"#icon-icon_on"},null,-1)),we=[ke],Te={key:0,class:"select-item"},be=["onClick"],ye=P(()=>n("img",{src:fs,alt:""},null,-1)),Ie={class:"content"},Le={class:"item"},He=P(()=>n("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Pe=[He],Ce=P(()=>n("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Ae=[Ce],$e=P(()=>n("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),De=[$e],Ve=P(()=>n("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Oe=[Ve],je={class:"apr-hover-content"},me=P(()=>n("span",null," ",-1)),Ne={class:"token"},Re=["onerror"],We={key:1,class:"pool-warning"},Se=["onerror"],Be={key:1,class:"pool-warning"},Ee={class:"name"},Ue={class:"token-name"},Fe={class:"fee-tier-top"},qe={class:"label-all"},ze={key:0},Me={class:"tvl"},Ge={class:"volume-hour"},Je={class:"volume-day"},Ke=P(()=>n("img",{src:gs,alt:""},null,-1)),Qe={key:0,class:"apr-hover-content"},Xe={class:"btn-box"},Ye={class:"top"},Ze={class:"token"},xe=["onerror"],so={key:1,class:"pool-warning"},eo=["onerror"],oo={key:1,class:"pool-warning"},lo={class:"name"},no={class:"token-name"},ao={class:"label-all"},ro={key:0},to={class:"fee-tier-hint"},uo={class:"middle"},io={class:"item-pools"},vo={class:"item-pools"},po={class:"item-pools"},co=P(()=>n("img",{src:gs,alt:""},null,-1)),_o={key:0,class:"apr-hover-content"},ho={class:"bottom"},fo={class:"panation"};function go(s,a,cs,as,I,K){const ts=Xs,T=Ys,L=de,H=re,Q=ae("image");return i(),v("div",ce,[n("div",_e,[G(ts),b(" "+u(s.$t("menu.pools")),1)]),n("div",he,[n("div",fe,[n("div",null,u(s.$t("newAdd.sortBy")),1),n("div",{class:"search-select",onClick:a[0]||(a[0]=e=>s.reviseValue("select"))},[n("div",null,[b(u(s.selectValue)+" ",1),ge]),(i(),v("svg",{"aria-hidden":"true",class:A(s.select?"show-icon icon":"icon")},we,2)),s.select?(i(),v("div",Te,[(i(!0),v(ls,null,ns(s.selectList,(e,k)=>(i(),v("div",{key:k,class:"select-menu-item",onClick:h=>s.changeSort(e)},[b(u(e)+" ",1),ye],8,be))),128))])):g("",!0)])]),n("div",Ie,[n("div",Le,[n("span",null,u(s.$t("newAdd.pool")),1),n("span",{onClick:a[1]||(a[1]=e=>s.changePoolsList("tvl_in_usd"))},[b(u(s.$t("common.tvl"))+" ",1),(i(),v("svg",{"aria-hidden":"true",class:A(["pools-icon",s.tvlImprint?s.tvlImprintHighlight?"selected highlight":"selected":s.tvlImprintHighlight?"highlight":""])},Pe,2))]),n("span",{onClick:a[2]||(a[2]=e=>s.changePoolsList("vol_in_usd_24h"))},[b(u(s.$t("common.volume24H"))+" ",1),(i(),v("svg",{"aria-hidden":"true",class:A(["pools-icon",s.volHImprint?s.volHImprintHighlight?"selected highlight":"selected":s.volHImprintHighlight?"highlight":""])},Ae,2))]),n("span",{onClick:a[3]||(a[3]=e=>s.changePoolsList("vol_in_usd_7_day"))},[b(u(s.$t("newAdd.volume7D"))+" ",1),(i(),v("svg",{"aria-hidden":"true",class:A(["pools-icon",s.volDImprint?s.volDImprintHighlight?"selected highlight":"selected":s.volDImprintHighlight?"highlight":""])},De,2))]),n("span",{onClick:a[4]||(a[4]=e=>s.changePoolsList("aprNum"))},[b(" APR "),(i(),v("svg",{"aria-hidden":"true",class:A(["pools-icon",s.aprImprint?s.aprImprintHighlight?"selected highlight":"selected":s.aprImprintHighlight?"highlight":""])},Oe,2)),n("div",je,[G(T,{class:"noHover apr-hover-con"})])]),me]),(i(!0),v(ls,null,ns(s.currentTopPoolsList,(e,k)=>{var h,r;return i(),v("div",{key:k,class:"item pc-item"},[n("div",Ne,[n("div",null,[e!=null&&e.token_a_address?rs((i(),v("img",{key:0,onerror:s.theme=="default"?("importIcon"in s?s.importIcon:f(y))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:f(y))("/image/coins/sui-unknown.png")},null,8,Re)),[[Q,s.getCoinIcon(e.is_forward!==!1?s.addressTokens&&s.addressTokens[e.token_a_address]:s.addressTokens&&s.addressTokens[e.token_b_address])]]):g("",!0),s.tokensWarningObj&&!s.tokensWarningObj[e.token_a_address]?(i(),v("div",We)):g("",!0)]),n("div",null,[e!=null&&e.token_b_address?rs((i(),v("img",{key:0,onerror:s.theme=="default"?("importIcon"in s?s.importIcon:f(y))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:f(y))("/image/coins/sui-unknown.png")},null,8,Se)),[[Q,s.getCoinIcon(e.is_forward!==!1?s.addressTokens&&s.addressTokens[e.token_b_address]:s.addressTokens&&s.addressTokens[e.token_a_address])]]):g("",!0),s.tokensWarningObj&&!s.tokensWarningObj[e.token_b_address]?(i(),v("div",Be)):g("",!0)]),n("div",Ee,[n("p",Ue,u(e.token_a_reserves)+" - "+u(e.token_b_reserves),1),n("div",Fe,u((e==null?void 0:e.fee)*100)+"%",1),n("div",qe,[(i(!0),v(ls,null,ns(s.getLabel(e),(_,w)=>(i(),v("div",{key:w,class:A(["label",_])},[_!=="Native"?(i(),v("span",ze,u(_),1)):g("",!0)],2))),128))])])]),n("div",Me," $"+u(e.tvl_in_usd?("addCommom"in s?s.addCommom:f(J))(e.tvl_in_usd,2):"--"),1),n("div",Ge," $"+u(e!=null&&e.vol_in_usd_24h?("addCommom"in s?s.addCommom:f(J))(e==null?void 0:e.vol_in_usd_24h,2):"--"),1),n("div",Je," $"+u(e!=null&&e.vol_in_usd_7_day?("addCommom"in s?s.addCommom:f(J))(e==null?void 0:e.vol_in_usd_7_day,2):"--"),1),n("div",{class:A(["apr",((h=s.rewardApr(e))==null?void 0:h.length)>0&&s.rewardDisplay(e)?"apr-mark":""])},[Ke,b(" "+u(s.getAprTotal(e.apr_7day,s.getRewarderApr(e.rewarder_apr)))+" ",1),((r=s.rewardApr(e))==null?void 0:r.length)!=0&&s.rewardDisplay(e)?(i(),v("div",Qe,[G(T,{class:"noHover apr-hover-con","l-item":{apr:e.apr_7day,aprTotal:s.getAprTotal(e.apr_7day,s.getRewarderApr(e.rewarder_apr)),is_display_rewarder:s.rewardDisplay(e),rewarder_apr:s.getRewarderApr(e.rewarder_apr)},"rewarder-info":s.rewardApr(e)},null,8,["l-item","rewarder-info"])])):g("",!0)],2),n("div",Xe,[G(L,{class:"cancel-btn",onClick:()=>s.router.push(`/deposit?tokena=${e==null?void 0:e.token_a_address}&tokenb=${e==null?void 0:e.token_b_address}&fee=${e==null?void 0:e.fee}`)},{default:hs(()=>[b(u(s.$t("common.deposit")),1)]),_:2},1032,["onClick"])])])}),128)),(i(!0),v(ls,null,ns(s.currentTopPoolsList,(e,k)=>{var h,r;return i(),v("div",{key:k,class:"item h5-item"},[n("div",Ye,[n("div",Ze,[n("div",null,[e!=null&&e.token_a_address?rs((i(),v("img",{key:0,onerror:s.theme=="default"?("importIcon"in s?s.importIcon:f(y))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:f(y))("/image/coins/sui-unknown.png")},null,8,xe)),[[Q,s.getCoinIcon(e.is_forward!==!1?s.addressTokens&&s.addressTokens[e.token_a_address]:s.addressTokens&&s.addressTokens[e.token_b_address])]]):g("",!0),s.tokensWarningObj&&!s.tokensWarningObj[e.token_a_address]?(i(),v("div",so)):g("",!0)]),n("div",null,[e!=null&&e.token_b_address?rs((i(),v("img",{key:0,onerror:s.theme=="default"?("importIcon"in s?s.importIcon:f(y))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:f(y))("/image/coins/sui-unknown.png")},null,8,eo)),[[Q,s.getCoinIcon(e.is_forward!==!1?s.addressTokens&&s.addressTokens[e.token_b_address]:s.addressTokens&&s.addressTokens[e.token_a_address])]]):g("",!0),s.tokensWarningObj&&!s.tokensWarningObj[e.token_b_address]?(i(),v("div",oo)):g("",!0)]),n("div",lo,[n("p",no,u(e.token_a_reserves)+" - "+u(e.token_b_reserves),1),n("div",ao,[(i(!0),v(ls,null,ns(s.getLabel(e),(_,w)=>(i(),v("div",{key:w,class:A(["label",_])},[_!=="Native"?(i(),v("span",ro,u(_),1)):g("",!0)],2))),128))])])]),n("div",to,u((e==null?void 0:e.fee)*100)+"%",1)]),n("div",uo,[n("div",io,[n("span",null,u(s.$t("common.tvl")),1),n("p",null," $"+u(e.tvl_in_usd?("addCommom"in s?s.addCommom:f(J))(e.tvl_in_usd,2):"--"),1)]),n("div",vo,[n("span",null,u(s.$t("common.volume24H")),1),n("p",null," $"+u(e!=null&&e.vol_in_usd_24h?("addCommom"in s?s.addCommom:f(J))(e==null?void 0:e.vol_in_usd_24h,2):"--"),1)]),n("div",po,[n("span",null,u(s.$t("newAdd.volume7D")),1),n("p",null," $"+u(e!=null&&e.vol_in_usd_7_day?("addCommom"in s?s.addCommom:f(J))(e==null?void 0:e.vol_in_usd_7_day,2):"--"),1)]),n("div",{class:A(["item-pools",((h=s.rewardApr(e))==null?void 0:h.length)>0&&s.rewardDisplay(e)?"":"apr-mark-h5"])},[n("span",null,u(s.$t("common.apr")),1),n("p",null,[co,b(" "+u(s.getAprTotal(e.apr_7day,s.getRewarderApr(e.rewarder_apr))),1)]),((r=s.rewardApr(e))==null?void 0:r.length)!=0&&s.rewardDisplay(e)?(i(),v("div",_o,[G(T,{class:"noHover apr-hover-con","l-item":{apr:e.apr_7day,aprTotal:s.getAprTotal(e.apr_7day,s.getRewarderApr(e.rewarder_apr)),is_display_rewarder:s.rewardDisplay(e),rewarder_apr:s.getRewarderApr(e.rewarder_apr)},"rewarder-info":s.rewardApr(e)},null,8,["l-item","rewarder-info"])])):g("",!0)],2)]),n("div",ho,[G(L,{class:"cancel-btn",onClick:()=>s.router.push(`/deposit?tokena=${e==null?void 0:e.token_a_address}&tokenb=${e==null?void 0:e.token_b_address}&fee=${e==null?void 0:e.fee}`)},{default:hs(()=>[b(u(s.$t("common.deposit")),1)]),_:2},1032,["onClick"])])])}),128))]),n("div",fo,[G(H,{current:s.currentPools,"onUpdate:current":a[5]||(a[5]=e=>s.currentPools=e),"page-size":(s.isPc,10),simple:"",total:s.topPoolsList.length,onChange:s.onChangePools},null,8,["current","page-size","total","onChange"])])])])}const $o=ne(pe,[["render",go],["__scopeId","data-v-d01b82b5"]]);export{$o as default};
