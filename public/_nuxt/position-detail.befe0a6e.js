import{_ as Ze}from"./back.4e2d02ab.js";import{_ as Ve,a as xe,b as eo}from"./claim-fees.653b4e8a.js";import{_ as oo}from"./apr-tab.deefb9ff.js";import{_ as no}from"./token-warning.07714dd4.js";import{_ as so}from"./apr-tips.32c20f0e.js";import{a as ao,u as io,b as to,c as ee,j as ro,_ as Le,i as Ee,l as y,g as $e,d as v,h as lo,f as Ae,t as Te}from"./pool.3ed98032.js";import{a as uo,r as u,m as I,b as po,A as ie,l as co,a4 as vo,v as mo,a1 as K,a5 as De,e as fo,o as b,f as _,h as s,i as k,x as te,w as W,s as Q,c as qe,t as l,u as g,E as ko,G as ho,B as bo,S as go,J as wo,j as N,F as Io,q as _o,p as yo,k as Ro}from"./entry.927fc72a.js";/* empty css              *//* empty css              */import{i as Oe}from"./import-icon.de3e6c66.js";import{p as Co}from"./precision.9d58cda5.js";import"./status-block.fcf324b5.js";/* empty css              */import"./icon-arrow_2x.948aedb2.js";import"./icon-arrow_2x.4ffddb8e.js";import"./c-switch.6d256530.js";import"./notifi.2bdeee90.js";import"./index.be35975e.js";const Ao=uo({setup(){const e=u(!1),h=u(!1),le=u(!1),Se=u(!0),R=ao(),f=I(()=>R),he=io(),j=u(""),F=u(""),oe=u(""),ne=u(30),be=u("Estimated APR"),de=u([{time:"24H",num:24},{time:"7D",num:7},{time:"30D",num:30}]),se=u(!0),ge=n=>{ne.value=n.num},we=()=>{se.value=!se.value},i=I(()=>he),ue=I(()=>{var r,t,m,c;const n=o.value.feeOwedA*((r=i.value.RATES[o.value&&o.value.token_a&&o.value.token_a.address])==null?void 0:r.price),a=o.value.feeOwedB*((t=i.value.RATES[o.value&&o.value.token_b&&o.value.token_b.address])==null?void 0:t.price);return(m=i.value.RATES[o.value&&o.value.token_a&&o.value.token_a.address])!=null&&m.price&&((c=i.value.RATES[o.value&&o.value.token_b&&o.value.token_b.address])!=null&&c.price)?n+a:" --"}),o=u({}),d=po();function O(){d.push(`/remove-liquidity?collect=${o.value.collectionName}&&token=${o.value.tokenName}&&address=${o.value.pool}&pos=${o.value.pos_object_id}`)}function $(){d.push(`/increase-liquidity?collect=${o.value.collectionName}&&token=${o.value.tokenName}&&address=${o.value.pool}&pos=${o.value.pos_object_id}`)}const S=()=>{C(),le.value=!0,setTimeout(()=>{le.value=!1},1e3)},p=I(()=>f.value.chainName?to(f.value.chainName):{}),C=async()=>{i.value.setCurrentPositionLoading(!0);const n=d.currentRoute.value.query.token||"",a=d.currentRoute.value.query.collect||"",r=d.currentRoute.value.query.address||"",t=d.currentRoute.value.query.pos||"",m=d.currentRoute.value.query.id||"";F.value=r,f.value.chainName==="Aptos"?n&&a&&r&&(j.value=a,oe.value=n,i.value.setCurrentPositionInfo(F.value,j.value,oe.value,f.value.chainName)):n&&r&&t?(j.value=a,oe.value=n,i.value.setCurrentPositionInfo(r,j.value,oe.value,f.value.chainName,t)):m&&i.value.setCurrentPositionInfo("","","",f.value.chainName,m)},H=I(()=>{var a,r,t;const n=((t=(r=(a=d==null?void 0:d.currentRoute)==null?void 0:a.value)==null?void 0:r.query)==null?void 0:t.address)||"";return n&&i.value.addressLpTokens&&!ee(i.value.addressLpTokens)&&i.value.addressLpTokens[n]?i.value.addressLpTokens[n]:null});ie(()=>H.value,(n,a)=>{n&&!ee(n)&&n.current_sqrt_price!==(a==null?void 0:a.current_sqrt_price)&&C()},{immediate:!0});const P=u(""),B=u(""),U=u(""),X=(n,a)=>n&&a?Co.plus(Te(n),Te(a)):n,M=n=>{let a=0;return n&&n.forEach(r=>{a+=Te(String(r))}),String(a)},z=u(""),G=u("");ie(()=>[f.value.newTopPoolsObj,o.value,ne,f.value.statsData],([n,a])=>{if(n&&!ee(n)&&a&&!ee(a)){const r=a.poolAddress,t=n[r];t?(P.value=t&&t.apr_7day&&t.apr_7day.replace("%",""),G.value=M(t&&(t==null?void 0:t.rewarder_apr)),z.value=X(t&&(t==null?void 0:t.apr_7day),t&&M(t==null?void 0:t.rewarder_apr)),B.value=t&&Ae(t==null?void 0:t.tvl_in_usd,2),U.value=t&&Ae(t==null?void 0:t.vol_in_usd_24h,2)):(B.value=0,U.value=0,P.value="0")}},{immediate:!0,deep:!0});const Y=ro(),A=I(()=>Y),{t:L}=co(),{$notify:J}=vo(),Z=async()=>{e.value=!0,h.value=!1;const n=v(o.value.feeOwedA,o.value.token_a.decimals)==0?"":`${y(o.value.feeOwedA,o.value.token_a.decimals)} ${o.value.token_a.symbol}`,a=v(o.value.feeOwedB,o.value.token_b.decimals)==0?"":`${y(o.value.feeOwedB,o.value.token_b.decimals)} ${o.value.token_b.symbol}`;R.setTransactionDesc(L("newAdd.claimWaitingText",{from:Re.value?a:n,and:v(o.value.feeOwedA,o.value.token_a.decimals)==0||v(o.value.feeOwedB,o.value.token_b.decimals)==0?"":"and",to:Re.value?n:a})),R.setIsShowWaiting(!0);let r;const t={pool:o.value.poolInfo,position:o.value};try{const m=await p.value.getCollectFeeTransactionPayload(t);if(f.value.chainName==="Aptos")r=await A.value.currentWallet.signAndSubmitTransaction(m);else{const c=await A.value.currentWallet.signAndExecuteTransactionBlock(m);r=p.value.handleTx(c)}if(r){R.setTransactionTxid(r.hash),R.setIsShowWaiting(!1),R.setIsShowSuccess(!0);const c={title:"Claim",desc:"",hash:r.hash,tit:"Fees Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:`${o.value.token_a.address}`,numa:v(o.value.feeOwedA,o.value.token_a.decimals)==0?"":`${y(o.value.feeOwedA,o.value.token_a.decimals)}`,logoa:v(o.value.feeOwedA,o.value.token_a.decimals)==0?"":i.value.tokensObj&&o.value&&o.value.token_a.address&&i.value.tokensObj[o.value.token_a.address]&&i.value.tokensObj[o.value.token_a.address].logoURI,tokenb:`${o.value.token_b.address}`,numb:v(o.value.feeOwedB,o.value.token_b.decimals)==0?"":`${y(o.value.feeOwedB,o.value.token_b.decimals)}`,logob:v(o.value.feeOwedB,o.value.token_b.decimals)==0?"":i.value.tokensObj&&o.value&&o.value.token_b.address&&i.value.tokensObj[o.value.token_b.address]&&i.value.tokensObj[o.value.token_b.address].logoURI},text:`Claim ${v(o.value.feeOwedA,o.value.token_a.decimals)==0?"":`${y(o.value.feeOwedA,o.value.token_a.decimals)} ${o.value.token_a.symbol}`}  
              ${v(o.value.feeOwedA,o.value.token_a.decimals)==0||v(o.value.feeOwedB,o.value.token_b.decimals)==0?"":"and"} ${v(o.value.feeOwedB,o.value.token_b.decimals)==0?"":`${y(o.value.feeOwedB,o.value.token_b.decimals)} ${o.value.token_b.symbol}`}

            `};f.value.chainName!=="Aptos"&&(c.res=r.res),p.value.showTransitionPending(c),await p.value.watchTransaction(c)&&setTimeout(()=>{C()},1e3)}else R.setIsShowWaiting(!1),R.setIsShowRejected(!0),J.error({icon:K("svg",{class:{icon:!0},"aria-hidden":!0},[K("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),duration:4.5,message:K("div",{class:"notification-title"},[K("span",{innerHTML:De.global.t("newAdd.claimFailed")},null)]),description:L("newAdd.somethingWrong"),class:"ant-notification-copy ant-notification-error"});e.value=!1}catch{e.value=!1,R.setIsShowWaiting(!1),R.setIsShowRejected(!0),J.error({icon:K("svg",{class:{icon:!0},"aria-hidden":!0},[K("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),message:K("div",{class:"notification-title"},[K("span",{innerHTML:De.global.t("newAdd.claimFailed")},null)]),duration:4.5,description:L("newAdd.somethingWrong"),class:"ant-notification-copy ant-notification-error"})}},D=u(""),q=u(""),pe=()=>{D.value=o.value.token_b,q.value=o.value.token_a},ce=async(n=null)=>{const a=n||o.value,r=i.value.addressLpTokens[d.currentRoute.value.query.address],t=await p.value.getTickDataByIndex(r.ticks_handle,Number(a.tick_lower_index)),m=await p.value.getTickDataByIndex(r.ticks_handle,Number(a.tick_upper_index));let c={};ve.value==="Aptos"?c=await p.value.getPosRewardersAmount({poolAddress:d.currentRoute.value.query.address,positionName:d.currentRoute.value.query.token,tickLowerData:t,tickUpperData:m}):c=await p.value.getPosRewardersAmount({poolAddress:d.currentRoute.value.query.address,pos:d.currentRoute.value.query.pos,positionHandle:r.position_manager.positions_handle});const w=[];let T=0;c.forEach((E,ae)=>{var Be,Ue;const V=(Be=i.value.tokensObj[E.coin_address])==null?void 0:Be.decimals,ke=Number(E.amount_owed.toString())>99999999999999?0:Number(E.amount_owed.toString()),x=Number(ke/Math.pow(10,V));if(a.poolInfo[`rewarder_display${ae+1}`]||x>0){const Xe=i.value.tokensObj[E.coin_address],Ye=((Ue=i.value.RATES[E.coin_address])==null?void 0:Ue.price)||0,Ce=x*Ye;T+=Ce,w.push({...E,...Xe,amount:x>0?y(x,V):0,amountUSD:Ce>0?y(Ce,2):0})}}),me.value=w,_e.value=T,Ne.value=Number(Ae(T,2))};ie(()=>i.value.currentPositionInfo,n=>{n&&(o.value=n,D.value=n==null?void 0:n.token_a,q.value=n==null?void 0:n.token_b)},{immediate:!0});const Ie=I(()=>i.value.tokensObj&&o&&o.value.token_a&&o.value.token_a.address&&i.value.tokensObj[o.value.token_a.address]&&i.value.tokensObj[o.value.token_a.address].logoURI),We=I(()=>i.value.tokensObj&&o&&o.value.token_b&&o.value.token_b.address&&i.value.tokensObj[o.value.token_b.address]&&i.value.tokensObj[o.value.token_b.address].logoURI),ve=I(()=>f.value.chainName),Fe=I(()=>Le[ve.value]),_e=u(0),me=u([]),Ne=u(0);mo(()=>{_e.value=0,me.value=[],Ne.value=0,i.value.setCurrentPositionLoading(!0),(d.currentRoute.value.query.id||"")&&C()});const{setIsShowSuccess:He,setIsShowRejected:je,setIsShowWaiting:ye,setTransactionDesc:Nn,setTransactionTxid:Me}=R,fe=u(!1),ze=async()=>{fe.value=!0;const n=me.value;let a={coinTypeA:o.value.poolInfo.coinTypeA,coinTypeB:o.value.poolInfo.coinTypeB,coinTypeC:"",coinTypeD:"",coinTypeE:"",pool_address:o.value.poolAddress,pos_index:o.value.index,rewarder_nums:n.length};a.coinTypeC=n[0]?n[0].coin_address:"",a.coinTypeD=n[1]?n[1].coin_address:"",a.coinTypeE=n[2]?n[2].coin_address:"";try{let r;if(f.value.chainName==="Aptos"){const t=await p.value.getCollectRewarderTransactionPayload(a);r=await A.value.currentWallet.signAndSubmitTransaction(t)}else{a.pos_index=o.value.pos_object_id;const t=await p.value.getCollectRewarderTransactionPayload(a),m=await A.value.currentWallet.signAndExecuteTransactionBlock(t);r=p.value.handleTx(m)}if(r&&r.hash){Me(r.hash),ye(!1),He(!0);const t=n[0].amount+n[0].symbol,m=a.coinTypeD?" and "+n[1].amount+n[1].symbol:"",c=a.coinTypeE?" and "+n[2].amount+n[2].symbol:"",w={title:"Claim",desc:"",hash:r.hash,tit:"Bonus Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:n[0].address,numa:`+ ${Number(n[0].amount)}`,logoa:i.value.tokensObj&&n[0]&&n[0].address&&i.value.tokensObj[n[0].address]&&i.value.tokensObj[n[0].address].logoURI,tokenb:n[1]&&n[1].address,numb:a.coinTypeD?`+ ${Number(n[1].amount)}`:"",logob:a.coinTypeD?i.value.tokensObj&&n[1]&&n[1].address&&i.value.tokensObj[n[1].address]&&i.value.tokensObj[n[1].address].logoURI:"",tokenc:n[2]&&n[2].address,numc:a.coinTypeE?`+ ${Number(n[2].amount)}`:"",logoc:a.coinTypeE?i.value.tokensObj&&n[2]&&n[2].address&&i.value.tokensObj[n[2].address]&&i.value.tokensObj[n[2].address].logoURI:""},text:t+m+c};f.value.chainName!=="Aptos"&&(w.res=r.res),p.value.showTransitionPending(w),await p.value.watchTransaction(w)&&setTimeout(()=>{C(),p.value.getAccount(A.value.address)},3e3)}else ye(!1),je(!0);fe.value=!1}catch{fe.value=!1,ye(!1),je(!0)}},Pe=u([]);ie(()=>[o.value,i.value.addressLpTokens,i.value.tokensObj,f.value.newTopPoolsObj],([n,a,r,t])=>{if(!ee(n)&&!ee(a)&&!ee(r)){const m=n.address,c=a[m];let w=(c==null?void 0:c.rewarder_infos)||[];const T=t[m],E=[];w&&w.length>0&&(w==null||w.forEach((ae,V)=>{var ke,x;c[`rewarder_display${V+1}`]&&E.push({...ae,symbol:(ke=r[ae.coinAddress])==null?void 0:ke.symbol,rewarderApr:(T==null?void 0:T.rewarder_apr[V])&&(T==null?void 0:T.rewarder_apr[V].replace("%","")),logoUrl:(x=r[ae.coinAddress])==null?void 0:x.logoURI,rewarder_display:c[`rewarder_display${V+1}`]})}),Pe.value=E,ce(n))}},{immediate:!0,deep:!0});const Ge=u();ie(()=>i.value.RATES,n=>{n&&(Ge.value=n)},{immediate:!0});const Re=I(()=>{var n,a;return(a=(n=o.value)==null?void 0:n.poolInfo)==null?void 0:a.needReverse}),Je=I(()=>Le[ve.value].hasNotifi),Ke=n=>{var a;return(n==null?void 0:n.logoURI)||(n==null?void 0:n.logo_url)||((a=i.value.tokensObj[n==null?void 0:n.address])==null?void 0:a.logo_url)||(f.value.theme==="default"?Oe("/image/coins/unknown.png"):Oe("/image/coins/sui-unknown.png"))},Qe=I(()=>i.value.tokensObj);return{getExplorerUrl:Ee,hasNotifi:Je,rewarderArr:Pe,feeOwed:ue,config:Fe,showNum:y,decimalUi:$e,index:f,fromCoinUrl:Ie,toCoinUrl:We,toggle:pe,fromCoin:D,toCoin:q,apr:P,liquidityTvl:B,vol24:U,addCommom:v,decimalFormat:lo,wallet:A,isLoading:e,toClaim:Z,pools:i,positionInfo:o,importIcon:Oe,router:d,toRemove:O,toIncrease:$,isShowClaim:h,direct:Se,refresh:le,clickRefresh:S,pendingRewarderArr:me,pendingRewarder:_e,toClaimRewards:ze,rewarderLoading:fe,aprRewardsParameter:ne,aprRewardsDateList:de,aprTab:ge,reviseValue:we,label:se,aprTitle:be,aprTotal:z,rewardAprList:G,currentPoolInfo:H,chainName:ve,needReverse:Re,getCoinIcon:Ke,tokensObj:Qe}}});const re=e=>(yo("data-v-5009a924"),e=e(),Ro(),e),To={key:0,class:"position-detail-container"},Oo={class:"position-detail-header"},$o={class:"back-and-refresh"},So=re(()=>s("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),No=[So],jo={class:"action-position"},Po={class:"coin-pair"},Bo=re(()=>s("use",{"xlink:href":"#icon-icon-copy"},null,-1)),Uo=[Bo],Lo=["href"],Do=re(()=>s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon-jump"})],-1)),qo=[Do],Eo={class:"acton-btn-box"},Wo=re(()=>s("svg",{"aria-hidden":"true",class:"action-icon"},[s("use",{"xlink:href":"#icon-icon-Reduction"})],-1)),Fo=re(()=>s("svg",{"aria-hidden":"true",class:"action-icon"},[s("use",{"xlink:href":"#icon-icon-add"})],-1)),Ho={class:"position-content"},Mo={key:0,class:"pedding-fee range-alerts-all"},zo={class:"pedding-fee"},Go={class:"pedding-fee"},Jo={class:"top"},Ko={class:"left"},Qo={key:0,class:"bottom"},Xo={class:"token-a"},Yo=["src"],Zo={key:0,class:"token-warning"},Vo={class:"token-b"},xo=["src"],en={key:0,class:"token-warning"},on={key:1,class:"pedding-fee"},nn={class:"top"},sn={class:"left"},an={class:"bottom"},tn=["src"],rn={key:2,class:"poolInfo"},ln={class:"pool-info-title"},dn={class:"currentPrice"},un={key:0,class:"coin"},pn={key:1,class:"coin"},cn={class:"toggle"},vn=["src"],mn=["src"],fn={class:"info-block-container"},kn={class:"info-block"},hn={class:"leabl"},bn={class:"text"},gn={class:"apr-hover-content"},wn={class:"info-block"},In={class:"leabl"},_n={class:"text"},yn={class:"info-block"},Rn={class:"leabl"},Cn={class:"text"},An={class:"info-block"},Tn={class:"leabl"},On={class:"text"},$n={class:"loading-global"};function Sn(e,h,le,Se,R,f){var i,ue;const he=Ze,j=bo,F=go,oe=Ve,ne=xe,be=oo,de=no,se=so,ge=eo,we=wo;return e.positionInfo?(b(),_("div",To,[s("div",Oo,[s("div",$o,[k(he),(b(),_("svg",{"aria-hidden":"true",class:te(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:h[0]||(h[0]=(...o)=>e.clickRefresh&&e.clickRefresh(...o))},No,2))]),s("div",jo,[k(F,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:W(()=>{var o,d,O,$,S,p;return[s("div",Po,[N(l(e.positionInfo.tokenName)+" ",1),(b(),_("svg",{class:"icon","aria-hidden":"true",onClick:h[1]||(h[1]=C=>e.index.copy(e.positionInfo.nftHash))},Uo)),s("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:g(Ee))("nftAddress",e.positionInfo.nftHash),target:"_blank"},qo,8,Lo)]),s("div",Eo,[k(j,{class:te(["remove-liquidity action-btn",(d=(o=e.positionInfo)==null?void 0:o.poolInfo)!=null&&d.is_pause?"text-default":""]),disabled:($=(O=e.positionInfo)==null?void 0:O.poolInfo)==null?void 0:$.is_pause,onClick:e.toRemove},{default:W(()=>[Wo,N(" "+l(e.$t("button.remove")),1)]),_:1},8,["class","disabled","onClick"]),k(j,{class:"increase-liquidity action-btn",disabled:(p=(S=e.positionInfo)==null?void 0:S.poolInfo)==null?void 0:p.is_pause,onClick:e.toIncrease},{default:W(()=>[Fo,N(" "+l(e.$t("button.increase")),1)]),_:1},8,["disabled","onClick"])])]}),_:1},8,["loading"])])]),s("div",Ho,[k(oe,{"position-info":e.positionInfo},null,8,["position-info"])]),e.chainName=="Aptos"&&e.hasNotifi?(b(),_("div",Mo,[k(ne,{"position-info":e.positionInfo},null,8,["position-info"])])):Q("",!0),s("div",zo,[(b(),qe(be,{key:0,"apr-title":e.aprTitle,"apr-rewards-date-list":e.aprRewardsDateList,"apr-rewards-parameter":e.aprRewardsParameter,"name-tab":"position","from-coin":e.fromCoin,"to-coin":e.toCoin,"pool-info":e.positionInfo.poolInfo,"min-price":e.positionInfo.minPrice,"max-price":e.positionInfo.maxPrice&&String(e.positionInfo.maxPrice).indexOf("+")>-1?"∞":e.positionInfo.maxPrice,onAprTab:e.aprTab},null,8,["apr-title","apr-rewards-date-list","apr-rewards-parameter","from-coin","to-coin","pool-info","min-price","max-price","onAprTab"]))]),s("div",Go,[s("div",Jo,[s("div",Ko,[s("span",null,l(e.$t("newAdd.pendingFees")),1),s("p",null," $"+l(e.pools.currentPositionLoading||e.feeOwed=="--"?"--":Number(e.feeOwed)==0?0:Number(e.feeOwed)<.01?"<0.01":("addCommom"in e?e.addCommom:g(v))(e.feeOwed,2)),1)]),k(j,{class:"increase-liquidity action-btn",disabled:e.isLoading||!e.wallet.connected||!(Number(e.positionInfo&&e.positionInfo.feeOwedA)||Number(e.positionInfo&&e.positionInfo.feeOwedB))||e.positionInfo.poolInfo.is_pause,onClick:h[2]||(h[2]=o=>e.isShowClaim=!0)},{default:W(()=>[N(l(e.$t("common.claim")),1)]),_:1},8,["disabled"])]),k(F,{class:"pedding-fee-skeleton",loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:W(()=>{var o,d,O,$,S,p,C,H,P,B,U,X,M,z,G,Y,A,L,J,Z,D,q;return[e.positionInfo&&((o=e.positionInfo)!=null&&o.token_a)&&((d=e.positionInfo)!=null&&d.token_b)?(b(),_("div",Qo,[s("div",null,[s("div",Xo,[s("img",{src:(e.needReverse?e.toCoinUrl:e.fromCoinUrl)||e.getCoinIcon(e.needReverse?($=e.positionInfo)==null?void 0:$.token_b:(O=e.positionInfo)==null?void 0:O.token_a)},null,8,Yo),(e.needReverse?e.tokensObj&&e.tokensObj[e.positionInfo.token_b.address]&&e.tokensObj[e.positionInfo.token_b.address].isSelfBuilt:e.tokensObj&&e.tokensObj[e.positionInfo.token_a.address]&&e.tokensObj[e.positionInfo.token_a.address].isSelfBuilt)?(b(),_("div",Zo)):Q("",!0)]),s("p",null,l(e.needReverse?("showNum"in e?e.showNum:g(y))(e.positionInfo.feeOwedB,(H=(C=e.positionInfo)==null?void 0:C.token_b)==null?void 0:H.decimals):("showNum"in e?e.showNum:g(y))(e.positionInfo.feeOwedA,(p=(S=e.positionInfo)==null?void 0:S.token_a)==null?void 0:p.decimals)),1),s("span",null,l(e.needReverse?(X=(U=e.positionInfo)==null?void 0:U.token_b)==null?void 0:X.symbol:(B=(P=e.positionInfo)==null?void 0:P.token_a)==null?void 0:B.symbol),1)]),s("div",null,[s("div",Vo,[s("img",{src:(e.needReverse?e.fromCoinUrl:e.toCoinUrl)||e.getCoinIcon(e.needReverse?(z=e.positionInfo)==null?void 0:z.token_a:(M=e.positionInfo)==null?void 0:M.token_b)},null,8,xo),(e.needReverse?e.tokensObj&&e.tokensObj[e.positionInfo.token_a.address]&&e.tokensObj[e.positionInfo.token_a.address].isSelfBuilt:e.tokensObj&&e.tokensObj[e.positionInfo.token_b.address]&&e.tokensObj[e.positionInfo.token_b.address].isSelfBuilt)?(b(),_("div",en)):Q("",!0)]),s("p",null,l(e.needReverse?("showNum"in e?e.showNum:g(y))(e.positionInfo.feeOwedA,(L=(A=e.positionInfo)==null?void 0:A.token_a)==null?void 0:L.decimals):("showNum"in e?e.showNum:g(y))(e.positionInfo.feeOwedB,(Y=(G=e.positionInfo)==null?void 0:G.token_b)==null?void 0:Y.decimals)),1),s("span",null,l(e.needReverse?(q=(D=e.positionInfo)==null?void 0:D.token_a)==null?void 0:q.symbol:(Z=(J=e.positionInfo)==null?void 0:J.token_b)==null?void 0:Z.symbol),1)])])):Q("",!0)]}),_:1},8,["loading"])]),e.positionInfo&&e.positionInfo.poolInfo&&e.positionInfo.poolInfo.rewarder_infos&&e.positionInfo.poolInfo.rewarder_infos.length>0&&e.positionInfo.poolInfo.is_display_rewarder&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(b(),_("div",on,[s("div",nn,[s("div",sn,[s("span",null,l(e.$t("newAdd.pendingRewards")),1),s("p",null," $"+l(e.pendingRewarder=="--"?"--":Number(e.pendingRewarder)==0?0:Number(e.pendingRewarder)<.01?"<0.01":("addCommom"in e?e.addCommom:g(v))(e.pendingRewarder,2)),1)]),k(j,{class:"increase-liquidity action-btn",disabled:e.rewarderLoading||!e.wallet.connected||e.pendingRewarder<=0||((ue=(i=e.positionInfo)==null?void 0:i.poolInfo)==null?void 0:ue.is_pause),loading:e.rewarderLoading,onClick:e.toClaimRewards},{default:W(()=>[N(l(e.$t("common.claim")),1)]),_:1},8,["disabled","loading","onClick"])]),k(F,{class:"pedding-fee-skeleton",loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:W(()=>[s("div",an,[(b(!0),_(Io,null,_o(e.pendingRewarderArr,o=>(b(),_("div",{key:o},[s("img",{src:(o==null?void 0:o.logoURI)||e.getCoinIcon(o),alt:""},null,8,tn),s("p",null,l(o.amount),1),s("span",null,l(o.symbol),1)]))),128))])]),_:1},8,["loading"])])):Q("",!0),e.positionInfo&&e.positionInfo.poolInfo?(b(),_("div",rn,[s("div",ln,l(e.$t("newAdd.poolInfo")),1),s("div",dn,[k(F,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:W(()=>{var o,d,O,$,S,p,C,H,P,B,U,X,M,z,G,Y,A,L,J,Z,D,q,pe,ce;return[(e.needReverse?!e.direct:e.direct)?(b(),_("div",un,[s("span",null,l(e.$t("common.currentPrice")),1),N(" "+l(("addCommom"in e?e.addCommom:g(v))(("decimalUi"in e?e.decimalUi:g($e))(e.positionInfo.currentPrice,6)))+" "+l((o=e.toCoin)==null?void 0:o.symbol)+" per "+l((d=e.fromCoin)==null?void 0:d.symbol),1)])):(b(),_("div",pn,[s("span",null,l(e.$t("common.currentPrice")),1),N(" "+l(("addCommom"in e?e.addCommom:g(v))(("decimalUi"in e?e.decimalUi:g($e))(1/e.positionInfo.currentPrice,6)))+" "+l((O=e.fromCoin)==null?void 0:O.symbol)+" per "+l(($=e.toCoin)==null?void 0:$.symbol),1)])),s("div",cn,[s("div",{class:te(e.direct?"item active-item":"item"),onClick:h[3]||(h[3]=Ie=>e.direct=!0)},[s("img",{src:(e.needReverse?e.toCoinUrl:e.fromCoinUrl)||e.getCoinIcon(e.needReverse?(p=e.positionInfo)==null?void 0:p.token_b:(S=e.positionInfo)==null?void 0:S.token_a),alt:""},null,8,vn),N(" "+l(e.needReverse?(B=(P=e.positionInfo)==null?void 0:P.token_b)==null?void 0:B.symbol:(H=(C=e.positionInfo)==null?void 0:C.token_a)==null?void 0:H.symbol)+" ",1),k(de,{address:e.needReverse?(z=(M=e.positionInfo)==null?void 0:M.token_b)==null?void 0:z.address:(X=(U=e.positionInfo)==null?void 0:U.token_a)==null?void 0:X.address,"style-params":{width:"8px",height:"8px",left:"18px",bottom:"4px"}},null,8,["address"])],2),s("div",{class:te(e.direct?"item ":"item active-item"),onClick:h[4]||(h[4]=Ie=>e.direct=!1)},[s("img",{src:(e.needReverse?e.fromCoinUrl:e.toCoinUrl)||e.getCoinIcon(e.needReverse?(Y=e.positionInfo)==null?void 0:Y.token_a:(G=e.positionInfo)==null?void 0:G.token_b),alt:""},null,8,mn),N(" "+l(e.needReverse?(Z=(J=e.positionInfo)==null?void 0:J.token_a)==null?void 0:Z.symbol:(L=(A=e.positionInfo)==null?void 0:A.token_b)==null?void 0:L.symbol)+" ",1),k(de,{address:e.needReverse?(ce=(pe=e.positionInfo)==null?void 0:pe.token_a)==null?void 0:ce.address:(q=(D=e.positionInfo)==null?void 0:D.token_b)==null?void 0:q.address,"style-params":{width:"8px",height:"8px",left:"18px",bottom:"4px"}},null,8,["address"])],2)])]}),_:1},8,["loading"])]),k(F,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:W(()=>[s("div",null,[s("div",fn,[s("div",kn,[s("div",hn,l(e.$t("common.apr")),1),s("div",bn,[N(l(e.aprTotal>0&&e.aprTotal<.01?"<0.01":e.aprTotal==0?0:("addCommom"in e?e.addCommom:g(v))(e.aprTotal,2))+"% ",1),s("div",gn,[k(se,{class:te(e.isShow?"showHover apr-hover-con":"noHover apr-hover-con"),"l-item":{apr:e.apr,rewarder_apr:e.rewardAprList,aprTotal:e.aprTotal,is_display_rewarder:e.positionInfo.poolInfo.is_display_rewarder},"rewarder-info":e.rewarderArr},null,8,["class","l-item","rewarder-info"])])])]),s("div",wn,[s("div",In,l(e.$t("common.liquidity")),1),s("div",_n,"$"+l(("addCommom"in e?e.addCommom:g(v))(e.liquidityTvl,2)),1)]),s("div",yn,[s("div",Rn,l(e.$t("common.volume24h")),1),s("div",Cn,"$"+l(("addCommom"in e?e.addCommom:g(v))(e.vol24,2)),1)]),s("div",An,[s("div",Tn,l(e.$t("newAdd.tickSpacing")),1),s("div",On,l(e.positionInfo.tickSpacing),1)])])])]),_:1},8,["loading"])])):Q("",!0),e.isShowClaim?(b(),qe(ge,{key:3,"is-loading":e.isLoading,"position-info":e.positionInfo,"need-reverse":e.needReverse,onOnClose:h[5]||(h[5]=o=>e.isShowClaim=!1),onToClaim:e.toClaim},null,8,["is-loading","position-info","need-reverse","onToClaim"])):Q("",!0),ko(s("div",$n,[k(we)],512),[[ho,e.pools.currentPositionLoading]])])):Q("",!0)}const Yn=fo(Ao,[["render",Sn],["__scopeId","data-v-5009a924"]]);export{Yn as default};
