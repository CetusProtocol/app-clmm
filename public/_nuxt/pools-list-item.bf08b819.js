import{i as f}from"./import-icon.de3e6c66.js";import{e as te,a as ae,m as p,q as le,o as t,f as a,t as D,h as s,v as l,K as ce,p as re,k as ie,r as Z,a1 as Ie,a2 as pe,l as ve,b as ge,x as A,z as T,j as J,i as $,F as x,s as ee,u as I,c as oe,w as se,S as he,J as fe,B as we}from"./entry.aafbdb45.js";import{u as de,c as g,b as ne,e as S,B as ke,D as be}from"./pool.500c575e.js";import{u as me,c as ye,a as _e}from"./sha256.9163db08.js";import{_ as Ae}from"./apr-tips.c20e3378.js";import{_ as $e}from"./nuxt-link.a4f20066.js";/* empty css              *//* empty css              */const Se=ae({props:{coinInfo:{type:Object,default:()=>({})}},setup(e){console.log(e,"props====>");const u=de(),R=p(()=>u),j=me(),w=p(()=>j),U=r=>{var B;return(r==null?void 0:r.logoURI)||(r==null?void 0:r.logo_url)||((B=R.value.tokensObj[r==null?void 0:r.address])==null?void 0:B.logo_url)||(w.value.theme==="default"?f("/image/coins/unknown.png"):f("/image/coins/sui-unknown.png"))},k=p(()=>ye[w.value.chainName]);return{getCoinIcon:U,store:j,config:k}}}),je=e=>(re("data-v-155c7a8a"),e=e(),ie(),e),Be={class:"coin-tips"},Oe={alt:""},Ce={class:"address"},Ne=je(()=>s("use",{"xlink:href":"#icon-icon-copy"},null,-1)),Te=[Ne];function Re(e,u,R,j,w,U){const k=le("image");return t(),a("div",Be,[D(s("img",Oe,null,512),[[k,e.getCoinIcon(e.coinInfo)]]),s("div",Ce,l(e.coinInfo.address&&e.coinInfo.address.substr(0,6))+" ... "+l(e.coinInfo.address&&e.coinInfo.address.substr(e.coinInfo.address.length-6,6)),1),(t(),a("svg",{class:"icon","aria-hidden":"true",onClick:u[0]||(u[0]=ce(r=>e.store.copy(e.coinInfo&&e.coinInfo.address),["stop"]))},Te))])}const Ue=te(Se,[["render",Re],["__scopeId","data-v-155c7a8a"]]),qe=ae({props:{lItem:{type:Object,required:!0},isSelectAll:{type:Boolean,default:!1},isFarms:{type:Boolean,default:!1}},setup(e){const u=Z(!1),R=Ie(pe,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0}),{t:j}=ve(),w=ge(),U=_e(),k=p(()=>U),r=Z(!1);function B(o){const i=o.balance,c=be(i).div(Math.pow(10,o.decimals)).toString();return S(c,o.decimals)}const K=o=>{r.value=!0,setTimeout(()=>{r.value=!1},2e3),console.log(w,"==>router"),console.log(o,"===>pool163"),console.log("0428###toAdd###pool.address###",o.address),console.log("0428###toAdd###pool.coinA.address###",o.coinA.address),console.log("0428###toAdd###pool.coinB.address###",o.coinB.address),console.log("0428###toAdd###pool.fee###",o.fee),w.push(`/liquidity/deposit?poolAddress=${o.address}`)},G=de(),n=p(()=>G),O=p(()=>n.value.tokensObj&&e.lItem.coinA.address&&n.value.tokensObj[e.lItem.coinA.address]&&n.value.tokensObj[e.lItem.coinA.address].logo_url),E=p(()=>n.value.tokensObj&&e.lItem.coinB.address&&n.value.tokensObj[e.lItem.coinB.address]&&n.value.tokensObj[e.lItem.coinB.address].logo_url),C=me(),h=p(()=>C),z=p(()=>h.value.theme),V=p(()=>{var b,y;let o=[],i={};if(console.log(e.lItem,"====335"),(b=e.lItem)!=null&&b.rewarderInfo)!g(n.value.tokensObj)&&!g(n.value.RATES)&&(o=(y=e.lItem)==null?void 0:y.rewarderInfo,i=n.value.tokensObj);else if(!g(h.value.addressLpTokens)&&!g(n.value.tokensObj)&&!g(n.value.RATES)&&!g(h.value.newTopPoolsObj)){const d=e.lItem.address&&h.value.addressLpTokens[e.lItem.address]&&h.value.addressLpTokens[e.lItem.address].rewarder_infos||[];console.log(h.value.addressLpTokens,"result===>"),o=d,console.log(o,"===>rewarderInfos"),i=n.value.tokensObj}const c=[];o.forEach((d,N)=>{var q,L,F;const H=(q=i[d.coinAddress])==null?void 0:q.decimals,_=ne(d.emissionsEveryDay/Math.pow(10,H),4),M=Number(_)>0?S(_):_,P=ne(Number(_)*n.value.RATES[d.coinAddress]&&n.value.RATES[d.coinAddress].price,4);c.push({...d,logoUrl:(L=i[d.coinAddress])==null?void 0:L.logoURI,day:M,dayUSD:P,symbol:(F=i[d.coinAddress])==null?void 0:F.symbol,rewarders:e.lItem[`rewarders${N}`]&&e.lItem[`rewarders${N}`].replace("%",""),rewarder_display:e.lItem[`rewarder_display${N+1}`],resultDay:_})}),console.log(c,"===>mockArr");const v=c.filter(d=>d.rewarder_display);return v&&v.length>0?(console.log(v,"result===>380"),v):[]});console.log(e.lItem,"props.lItem====>");const W=p(()=>{var o,i,c,v,b,y;return(i=(o=e.lItem)==null?void 0:o.coinA)!=null&&i.address&&n.value.tokensWarningObj?!n.value.tokensWarningObj[(v=(c=e.lItem)==null?void 0:c.coinA)==null?void 0:v.address]||!n.value.tokensObj[(y=(b=e.lItem)==null?void 0:b.coinB)==null?void 0:y.address]:!1});return{checkNullObj:g,store:C,t:j,isShow:u,indicator:R,thousands:ke,importIcon:f,router:w,wallet:k,addCommom:S,getLpView:B,toAdd:K,fromCoinUrl:O,toCoinUrl:E,addLiquidity:r,rewarderInfo:V,theme:z,isSelfBuilt:W,pools:n,getCoinIcon:o=>{var i;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((i=n.value.tokensObj[o==null?void 0:o.address])==null?void 0:i.logo_url)||(C.theme==="default"?f("/image/coins/unknown.png"):f("/image/coins/sui-unknown.png"))}}}});const X=e=>(re("data-v-6feb28f6"),e=e(),ie(),e),Le={key:0,class:"isFarming"},Fe=X(()=>s("div",{class:"hover-text"},"Farming rewards available",-1)),De=[Fe],Ee=X(()=>s("div",{class:"topBg"},null,-1)),ze={class:"top"},Ve={key:0},We={key:1},He={class:"coin-name"},Me={class:"token-a"},Pe=X(()=>s("span",null," - ",-1)),Je={class:"token-b"},Ke={key:0,class:"pool-warning"},Ge={class:"hover-text"},Qe={class:"symbol-label"},Xe={class:"apr"},Ye={key:0,class:"skeleton-box"},Ze={class:"bottom"},xe={class:"induction"},eo={class:"item"},oo={class:"induction-text"},so={class:"induction-value"},no={class:"item"},to={class:"induction-text"},ao={key:0,class:"induction-value"},lo={key:1,class:"induction-value"},ro={class:"item"},io={class:"induction-text"},mo={key:0,class:"induction-value"},uo={key:1,class:"induction-value"},co={key:0,class:"item rewards-item"},Io={class:"induction-text"},po={class:"induction-value induction-value-rewards"},vo={class:"rewards-hover"},go={alt:""},ho={alt:""};function fo(e,u,R,j,w,U){var E,C,h,z,V,W,Q,o,i,c,v,b,y,d,N,H,_,M,P,q,L,F,Y;const k=Ue,r=he,B=Ae,K=fe,G=we,n=$e,O=le("image");return t(),a("div",{class:T(["pools-list-item",e.isSelectAll||(E=e.lItem)!=null&&E.isAuthorized?e.isFarms?e.lItem.isFarming&&e.lItem.rewarderInfo&&e.lItem.rewarderInfo.length>0?"":"none":"":"none"])},[(C=e.lItem)!=null&&C.isFarming&&e.rewarderInfo&&e.rewarderInfo.length>0?(t(),a("div",Le,De)):A("",!0),Ee,s("div",ze,[s("div",{class:T(e.lItem.needReverse?"img-box reverse":"img-box")},[(h=e.lItem)!=null&&h.coinA?D((t(),a("img",Ve,null,512)),[[O,e.fromCoinUrl||e.getCoinIcon((z=e.lItem)==null?void 0:z.coinA)]]):A("",!0),(V=e.lItem)!=null&&V.coinB?D((t(),a("img",We,null,512)),[[O,e.toCoinUrl||e.getCoinIcon((W=e.lItem)==null?void 0:W.coinB)]]):A("",!0)],2),s("div",He,[s("div",Me,[J(l(e.lItem.needReverse?(c=(i=e.lItem)==null?void 0:i.coinB)==null?void 0:c.symbol:(o=(Q=e.lItem)==null?void 0:Q.coinA)==null?void 0:o.symbol)+" ",1),$(k,{"coin-info":e.lItem.needReverse?(b=e.lItem)==null?void 0:b.coinB:(v=e.lItem)==null?void 0:v.coinA},null,8,["coin-info"])]),Pe,s("div",Je,[J(l(e.lItem.needReverse?(H=(N=e.lItem)==null?void 0:N.coinA)==null?void 0:H.symbol:(d=(y=e.lItem)==null?void 0:y.coinB)==null?void 0:d.symbol)+" ",1),$(k,{"coin-info":e.lItem.needReverse?(M=e.lItem)==null?void 0:M.coinA:(_=e.lItem)==null?void 0:_.coinB},null,8,["coin-info"])]),e.theme=="sui"&&((q=(P=e.pools)==null?void 0:P.tokensObj[e.lItem.coinA.address])!=null&&q.isSelfBuilt||(F=(L=e.pools)==null?void 0:L.tokensObj[e.lItem.coinB.address])!=null&&F.isSelfBuilt)?(t(),a("div",Ke,[s("div",Ge,l(e.t("newAdd.poolWarning")),1)])):A("",!0)]),s("div",Qe,[(t(!0),a(x,null,ee((Y=e.lItem)==null?void 0:Y.labels,(m,ue)=>(t(),a("div",{key:ue,class:T(["lable",m])},null,2))),128))]),s("div",Xe,[("checkNullObj"in e?e.checkNullObj:I(g))(e.store.statsData)?(t(),a("div",Ye,[$(r,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),a("span",{key:1,class:"apr-text",onClick:u[0]||(u[0]=m=>e.isShow=!e.isShow)},l(e.lItem.is_display_rewarder?e.lItem.aprTotal>0&&e.lItem.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:I(S))(e.lItem.aprTotal,2):e.lItem.apr>0&&e.lItem.apr<.01?"<0.01":("addCommom"in e?e.addCommom:I(S))(e.lItem.apr,2))+"% ",1)),s("span",{onClick:u[1]||(u[1]=m=>e.isShow=!e.isShow)},l(e.$t("common.apr")),1),$(B,{class:T(e.isShow?"showHover apr-hover-con":"noHover apr-hover-con"),"l-item":e.lItem,"rewarder-info":e.rewarderInfo},null,8,["class","l-item","rewarder-info"])])]),s("div",Ze,[s("div",xe,[s("div",eo,[s("div",oo,l(e.$t("common.feeTier")),1),s("div",so,l(e.lItem.fee!=="--"?e.lItem.fee*100:"--")+"%",1)]),s("div",no,[s("div",to,l(e.$t("common.liquidity")),1),("checkNullObj"in e?e.checkNullObj:I(g))(e.store.statsData)?(t(),a("div",ao,[$(r,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),a("div",lo,"$"+l(Number(e.lItem.liqidity)!==0&&Number(e.lItem.liqidity)<.01?"<0.01":("addCommom"in e?e.addCommom:I(S))(e.lItem.liqidity,2)),1))]),s("div",ro,[s("div",io,l(e.$t("common.volume24H")),1),("checkNullObj"in e?e.checkNullObj:I(g))(e.store.statsData)?(t(),a("div",mo,[$(r,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),a("div",uo,"$"+l(Number(e.lItem.vol)!==0&&Number(e.lItem.vol)<.01?"<0.01":("addCommom"in e?e.addCommom:I(S))(e.lItem.vol,2)),1))]),e.lItem.is_display_rewarder&&e.rewarderInfo&&e.rewarderInfo.length>0?(t(),a("div",co,[s("div",Io,l(e.$t("common.rewards")),1),s("div",po,[e.rewarderInfo&&e.rewarderInfo.length>0?(t(!0),a(x,{key:0},ee(e.rewarderInfo,m=>(t(),a("div",{key:m,class:T(["rewards",m.day===0?"reward-none":""])},[s("div",vo,[D(s("img",go,null,512),[[O,m.logoUrl?m.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:I(f))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:I(f))("/image/coins/sui-unknown.png")]]),s("span",null,l(`${m.day} ${m.symbol} per day`),1)]),D(s("img",ho,null,512),[[O,m.logoUrl?m.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:I(f))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:I(f))("/image/coins/sui-unknown.png")]]),s("span",null,l(m.symbol),1)],2))),128)):e.rewarderInfo&&e.rewarderInfo.length==0&&e.lItem.rewarder_apr!=="0%"?(t(),oe(K,{key:1,size:"small"})):A("",!0)]),e.rewarderInfo&&e.rewarderInfo.length==0&&e.lItem.rewarder_apr=="0%"?(t(),a("div",{key:0,class:T(["induction-value",e.lItem.rewarder_apr=="0%"?"text-default":"induction-value-rewards"])},l(e.$t("newAdd.noRewards")),3)):A("",!0)])):A("",!0)]),e.lItem.is_pause?(t(),oe(G,{key:0,class:"addBtn",disabled:e.lItem.is_pause,loading:e.addLiquidity},{default:se(()=>[J(l(e.lItem.is_pause?"Pool Closed":e.$t("button.addLiquidity")),1)]),_:1},8,["disabled","loading"])):A("",!0),$(n,{class:"addBtn",to:`/liquidity/deposit?poolAddress=${e.lItem.address}`},{default:se(()=>[J(l(e.$t("button.addLiquidity")),1)]),_:1},8,["to"])])],2)}const jo=te(qe,[["render",fo],["__scopeId","data-v-6feb28f6"]]);export{Ue as _,jo as a};
