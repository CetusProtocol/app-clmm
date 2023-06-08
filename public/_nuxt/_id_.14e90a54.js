import{_ as Je}from"./back.671d13bb.js";import{_ as Ke,a as Qe,b as Xe}from"./claim-fees.c67384b7.js";import{_ as Ye}from"./apr-tab.8453c0ff.js";import{_ as Ze}from"./apr-tips.3a6c09a2.js";import{u as Ve,a as xe,c as M,f as eo,j,e as m,b as Ie,k as J,s as oo,t as _e,D as ue,g as no}from"./pool.391d046d.js";import{a as so,r as d,m as I,b as ao,D as ne,l as io,a5 as to,y as ro,a3 as E,a6 as Oe,e as lo,q as uo,o as g,f as R,h as s,i as k,z as K,w as P,x as Q,c as $e,v as r,u as b,t as X,G as co,B as po,S as mo,J as vo,j as N,F as fo,s as ho,p as ko,k as bo}from"./entry.0485e02f.js";/* empty css              *//* empty css              */import{i as go}from"./import-icon.de3e6c66.js";import{u as wo,_ as Pe}from"./index.383699e2.js";import{p as _o}from"./precision.9d58cda5.js";import"./token-warning.af1b18fe.js";import"./status-block.24136202.js";/* empty css              */import"./icon-arrow_2x.948aedb2.js";import"./icon-arrow_2x.4ffddb8e.js";/* empty css              */import"./notifi.1b511a20.js";import"./index.cdadb4b1.js";const Io=so({setup(){const e=d(!1),v=d(!1),ae=d(!1),ye=d(!0),w=wo(),f=I(()=>w),ce=Ve(),O=d(""),D=d(""),z=d(""),Y=d(30),pe=d("Estimated APR"),me=d([{time:"24H",num:24},{time:"7D",num:7},{time:"30D",num:30}]),Z=d(!0),ve=n=>{Y.value=n.num},F=()=>{Z.value=!Z.value},t=I(()=>ce),ie=I(()=>{var l,i,h,p;const n=o.value.feeOwedA*((l=t.value.RATES[o.value&&o.value.token_a&&o.value.token_a.address])==null?void 0:l.price),a=o.value.feeOwedB*((i=t.value.RATES[o.value&&o.value.token_b&&o.value.token_b.address])==null?void 0:i.price);return(h=t.value.RATES[o.value&&o.value.token_a&&o.value.token_a.address])!=null&&h.price&&((p=t.value.RATES[o.value&&o.value.token_b&&o.value.token_b.address])!=null&&p.price)?n+a:" --"}),o=d({}),u=ao();function T(){u.push(`/remove-liquidity?collect=${o.value.collectionName}&&token=${o.value.tokenName}&&address=${o.value.pool}&pos=${o.value.pos_object_id}`)}function A(){u.push(`/increase-liquidity?collect=${o.value.collectionName}&&token=${o.value.tokenName}&&address=${o.value.pool}&pos=${o.value.pos_object_id}`)}const C=()=>{y(),ae.value=!0,setTimeout(()=>{ae.value=!1},1e3)},c=I(()=>f.value.chainName?xe(f.value.chainName):{}),y=async()=>{t.value.setCurrentPositionLoading(!0);const n=u.currentRoute.value.query.token||"",a=u.currentRoute.value.query.collect||"",l=u.currentRoute.value.query.address||"",i=u.currentRoute.value.query.pos||"";D.value=l,f.value.chainName==="Aptos"?n&&a&&l&&(O.value=a,z.value=n,t.value.setCurrentPositionInfo(D.value,O.value,z.value,f.value.chainName)):n&&l&&i&&(O.value=a,z.value=n,t.value.setCurrentPositionInfo(l,O.value,z.value,f.value.chainName,i))},L=I(()=>{var a,l,i;const n=((i=(l=(a=u==null?void 0:u.currentRoute)==null?void 0:a.value)==null?void 0:l.query)==null?void 0:i.address)||"";return n&&t.value.addressLpTokens&&!M(t.value.addressLpTokens)&&t.value.addressLpTokens[n]?t.value.addressLpTokens[n]:null});ne(()=>L.value,(n,a)=>{n&&!M(n)&&n.current_sqrt_price!==(a==null?void 0:a.current_sqrt_price)&&y()},{immediate:!0});const U=d(""),B=d(""),q=d(""),W=(n,a)=>n&&a?oo(_o.plus(_e(n),_e(a)),2)+"%":n,H=n=>{let a=0;return n&&n.forEach(l=>{a+=_e(String(l))}),String(J(String(a),2))},V=d(""),x=d("");ne(()=>[f.value.newTopPoolsObj,o.value,Y],([n,a])=>{if(!M(n)&&!M(a)){const l=a.poolAddress,i=n[l];U.value=i&&(i==null?void 0:i.apr_7day),x.value=H(i&&(i==null?void 0:i.rewarder_apr)),V.value=W(i&&(i==null?void 0:i.apr_7day),i&&H(i==null?void 0:i.rewarder_apr)),B.value=i&&J(i==null?void 0:i.tvl_in_usd,2),q.value=i&&J(i==null?void 0:i.vol_in_usd_24h,2)}},{immediate:!0,deep:!0});const te=eo(),G=I(()=>te),{t:fe}=io(),{$notify:Re}=to(),je=async()=>{e.value=!0,v.value=!1;const n=m(o.value.feeOwedA,o.value.token_a.decimals)==0?"":`${j(o.value.feeOwedA,o.value.token_a.decimals)} ${o.value.token_a.symbol}`,a=m(o.value.feeOwedB,o.value.token_b.decimals)==0?"":`${j(o.value.feeOwedB,o.value.token_b.decimals)} ${o.value.token_b.symbol}`;w.setTransactionDesc(fe("newAdd.claimWaitingText",{from:we.value?a:n,and:m(o.value.feeOwedA,o.value.token_a.decimals)==0||m(o.value.feeOwedB,o.value.token_b.decimals)==0?"":"and",to:we.value?n:a})),w.setIsShowWaiting(!0);let l;const i={pool:o.value.poolInfo,position:o.value};try{const h=await c.value.getCollectFeeTransactionPayload(i);if(f.value.chainName==="Aptos")l=await G.value.currentWallet.signAndSubmitTransaction(h);else{const p=await G.value.currentWallet.signAndExecuteTransactionBlock(h);l=c.value.handleTx(p)}if(l){w.setTransactionTxid(l.hash),w.setIsShowWaiting(!1),w.setIsShowSuccess(!0);const p={title:"Claim",desc:"",hash:l.hash,tit:"Fees Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:`${o.value.token_a.symbol}`,numa:m(o.value.feeOwedA,o.value.token_a.decimals)==0?"":`+ ${j(o.value.feeOwedA,o.value.token_a.decimals)}`,logoa:m(o.value.feeOwedA,o.value.token_a.decimals)==0?"":t.value.tokensObj&&o.value&&o.value.token_a.address&&t.value.tokensObj[o.value.token_a.address]&&t.value.tokensObj[o.value.token_a.address].logoURI,tokenb:`${o.value.token_b.symbol}`,numb:m(o.value.feeOwedB,o.value.token_b.decimals)==0?"":`+ ${j(o.value.feeOwedB,o.value.token_b.decimals)}`,logob:m(o.value.feeOwedB,o.value.token_b.decimals)==0?"":t.value.tokensObj&&o.value&&o.value.token_b.address&&t.value.tokensObj[o.value.token_b.address]&&t.value.tokensObj[o.value.token_b.address].logoURI}};f.value.chainName!=="Aptos"&&(p.res=l.res),c.value.showTransitionPending(p),await c.value.watchTransaction(p)&&setTimeout(()=>{y()},1e3)}else w.setIsShowWaiting(!1),w.setIsShowRejected(!0),Re.error({icon:E("svg",{class:{icon:!0},"aria-hidden":!0},[E("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),duration:4.5,message:E("div",{class:"notification-title"},[E("span",{innerHTML:Oe.global.t("newAdd.claimFailed")},null)]),description:fe("newAdd.somethingWrong"),class:"ant-notification-copy ant-notification-error"});e.value=!1}catch{e.value=!1,w.setIsShowWaiting(!1),w.setIsShowRejected(!0),Re.error({icon:E("svg",{class:{icon:!0},"aria-hidden":!0},[E("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),message:E("div",{class:"notification-title"},[E("span",{innerHTML:Oe.global.t("newAdd.claimFailed")},null)]),duration:4.5,description:fe("newAdd.somethingWrong"),class:"ant-notification-copy ant-notification-error"})}},he=d(""),ke=d(""),De=()=>{he.value=o.value.token_b,ke.value=o.value.token_a},Le=async(n=null)=>{const a=n||o.value,l=t.value.addressLpTokens[u.currentRoute.value.query.address],i=await c.value.getTickDataByIndex(l.ticks_handle,Number(a.tick_lower_index)),h=await c.value.getTickDataByIndex(l.ticks_handle,Number(a.tick_upper_index));let p={};re.value==="Aptos"?p=await c.value.getPosRewardersAmount({poolAddress:u.currentRoute.value.query.address,positionName:u.currentRoute.value.query.token,tickLowerData:i,tickUpperData:h}):p=await c.value.getPosRewardersAmount({poolAddress:u.currentRoute.value.query.address,pos:u.currentRoute.value.query.pos,positionHandle:l.position_manager.positions_handle});const S=[];let _=new ue(0);p.forEach(($,ee)=>{if(a.poolInfo[`rewarder_display${ee+1}`]){const oe=t.value.tokensObj[$.coin_address].decimals,Me=t.value.tokensObj[$.coin_address],ze=$.amount_owed.toString(),Se=new ue(ze).div(Math.pow(10,oe)).toString(),Ge=t.value.RATES[$.coin_address].price,Ne=new ue(Se).mul(Ge);_=new ue(_).plus(Ne),S.push({...$,...Me,amount:J(Se,oe),amountUSD:J(Ne.toString(),2)})}}),le.value=S,be.value=Number(_.toString()),Te.value=Number(J(_.toString(),2))};ne(()=>t.value.currentPositionInfo,n=>{n&&(o.value=n,he.value=n==null?void 0:n.token_a,ke.value=n==null?void 0:n.token_b)},{immediate:!0});const Ue=I(()=>t.value.tokensObj&&o&&o.value.token_a&&o.value.token_a.address&&t.value.tokensObj[o.value.token_a.address]&&t.value.tokensObj[o.value.token_a.address].logoURI),Be=I(()=>t.value.tokensObj&&o&&o.value.token_b&&o.value.token_b.address&&t.value.tokensObj[o.value.token_b.address]&&t.value.tokensObj[o.value.token_b.address].logoURI),re=I(()=>f.value.chainName),qe=I(()=>Pe[re.value]),be=d(0),le=d([]),Te=d(0);ro(()=>{be.value=0,le.value=[],Te.value=0});const{setIsShowSuccess:Ee,setIsShowRejected:Ae,setIsShowWaiting:ge,setTransactionDesc:In,setTransactionTxid:Fe}=w,de=d(!1),We=async()=>{de.value=!0;const n=le.value;let a={coinTypeA:o.value.poolInfo.coinTypeA,coinTypeB:o.value.poolInfo.coinTypeB,coinTypeC:"",coinTypeD:"",coinTypeE:"",pool_address:o.value.poolAddress,pos_index:o.value.index,rewarder_nums:n.length};a.coinTypeC=n[0]?n[0].coin_address:"",a.coinTypeD=n[1]?n[1].coin_address:"",a.coinTypeE=n[2]?n[2].coin_address:"";try{const l=await c.value.getCollectRewarderTransactionPayload(a);let i;if(f.value.chainName==="Aptos")i=await G.value.currentWallet.signAndSubmitTransaction(l);else{const h=await G.value.currentWallet.signAndExecuteTransactionBlock(l);i=c.value.handleTx(h)}if(i&&i.hash){Fe(i.hash),ge(!1),Ee(!0);const h=n[0].amount+n[0].symbol,p=a.coinTypeD?" and "+n[1].amount+n[1].symbol:"",S=a.coinTypeE?" and "+n[2].amount+n[2].symbol:"",_={title:"Claim",desc:"",hash:i.hash,tit:"Bonus Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:n[0].symbol,numa:`+ ${Number(n[0].amount)}`,logoa:t.value.tokensObj&&n[0]&&n[0].address&&t.value.tokensObj[n[0].address]&&t.value.tokensObj[n[0].address].logoURI,tokenb:a.coinTypeD?n[1].symbol:"",numb:a.coinTypeD?`+ ${Number(n[1].amount)}`:"",logob:a.coinTypeD?t.value.tokensObj&&n[1]&&n[1].address&&t.value.tokensObj[n[1].address]&&t.value.tokensObj[n[1].address].logoURI:"",tokenc:a.coinTypeE?n[2].symbol:"",numc:a.coinTypeE?`+ ${Number(n[2].amount)}`:"",logoc:a.coinTypeE?t.value.tokensObj&&n[2]&&n[2].address&&t.value.tokensObj[n[2].address]&&t.value.tokensObj[n[2].address].logoURI:""}};f.value.chainName!=="Aptos"&&(_.res=i.res),c.value.showTransitionPending(_),await c.value.watchTransaction(_)&&setTimeout(()=>{y(),c.value.getAccount(G.value.address)},3e3)}else ge(!1),Ae(!0);de.value=!1}catch{de.value=!1,ge(!1),Ae(!0)}},Ce=d([]);ne(()=>[o.value,t.value.addressLpTokens,t.value.tokensObj,f.value.newTopPoolsObj],([n,a,l,i])=>{if(!M(n)&&!M(a)&&!M(l)){const h=n.address,p=a[h];let S=(p==null?void 0:p.rewarder_infos)||[];const _=i[h],$=[];S&&S.length>0&&(S==null||S.forEach((ee,oe)=>{p[`rewarder_display${oe+1}`]&&$.push({...ee,symbol:l[ee.coinAddress].symbol,rewarderApr:_==null?void 0:_.rewarder_apr[oe],logoUrl:l[ee.coinAddress].logoURI})}),Ce.value=$,Le(n))}},{immediate:!0,deep:!0});const He=d();ne(()=>t.value.RATES,n=>{n&&(He.value=n)},{immediate:!0});const we=I(()=>{var n,a;return(a=(n=o.value)==null?void 0:n.poolInfo)==null?void 0:a.needReverse});return{hasNotifi:I(()=>Pe[re.value].hasNotifi),rewarderArr:Ce,feeOwed:ie,config:qe,showNum:j,index:f,fromCoinUrl:Ue,toCoinUrl:Be,toggle:De,fromCoin:he,toCoin:ke,apr:U,liquidityTvl:B,vol24:q,addCommom:m,decimalFormat:Ie,wallet:G,isLoading:e,toClaim:je,pools:t,positionInfo:o,importIcon:go,router:u,toRemove:T,toIncrease:A,isShowClaim:v,direct:ye,refresh:ae,clickRefresh:C,pendingRewarderArr:le,pendingRewarder:be,toClaimRewards:We,rewarderLoading:de,aprRewardsParameter:Y,aprRewardsDateList:me,aprTab:ve,reviseValue:F,label:Z,aprTitle:pe,aprTotal:V,rewardAprList:x,currentPoolInfo:L,chainName:re,needReverse:we}}});const se=e=>(ko("data-v-7f47ffdb"),e=e(),bo(),e),yo={key:0,class:"position-detail-container"},Ro={class:"position-detail-header"},To={class:"back-and-refresh"},Ao=se(()=>s("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),Co=[Ao],So={class:"action-position"},No={class:"coin-pair"},Oo=se(()=>s("use",{"xlink:href":"#icon-icon-copy"},null,-1)),$o=[Oo],Po=["href"],jo=se(()=>s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon-jump"})],-1)),Do=[jo],Lo={class:"acton-btn-box"},Uo=se(()=>s("svg",{"aria-hidden":"true",class:"action-icon"},[s("use",{"xlink:href":"#icon-icon-Reduction"})],-1)),Bo=se(()=>s("svg",{"aria-hidden":"true",class:"action-icon"},[s("use",{"xlink:href":"#icon-icon-add"})],-1)),qo={class:"position-content"},Eo={key:0,class:"pedding-fee range-alerts-all"},Fo={class:"pedding-fee"},Wo={class:"pedding-fee"},Ho={class:"top"},Mo={class:"left"},zo={class:"bottom"},Go={key:1,class:"pedding-fee"},Jo={class:"top"},Ko={class:"left"},Qo={class:"bottom"},Xo={alt:""},Yo={key:2,class:"poolInfo"},Zo={class:"pool-info-title"},Vo={class:"currentPrice"},xo={key:0,class:"coin"},en={key:1,class:"coin"},on={class:"toggle"},nn={alt:""},sn={alt:""},an={key:0},tn={class:"info-block-container"},rn={class:"info-block"},ln={class:"leabl"},dn={class:"text"},un={class:"apr-hover-content"},cn={class:"info-block"},pn={class:"leabl"},mn={class:"text"},vn={class:"info-block"},fn={class:"leabl"},hn={class:"text"},kn={class:"info-block"},bn={class:"leabl"},gn={class:"text"},wn={class:"loading-global"};function _n(e,v,ae,ye,w,f){var t,ie;const ce=Je,O=po,D=mo,z=Ke,Y=Qe,pe=Ye,me=Ze,Z=Xe,ve=vo,F=uo("image");return e.positionInfo?(g(),R("div",yo,[s("div",Ro,[s("div",To,[k(ce),(g(),R("svg",{"aria-hidden":"true",class:K(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:v[0]||(v[0]=(...o)=>e.clickRefresh&&e.clickRefresh(...o))},Co,2))]),s("div",So,[k(D,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:P(()=>{var o,u,T,A,C,c;return[s("div",No,[N(r(e.positionInfo.tokenName)+" ",1),(g(),R("svg",{class:"icon","aria-hidden":"true",onClick:v[1]||(v[1]=y=>e.index.copy(e.positionInfo.nftHash))},$o)),s("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:b(no))("nftAddress",e.positionInfo.nftHash),target:"_blank"},Do,8,Po)]),s("div",Lo,[k(O,{class:K(["remove-liquidity action-btn",(u=(o=e.positionInfo)==null?void 0:o.poolInfo)!=null&&u.is_pause?"text-default":""]),disabled:(A=(T=e.positionInfo)==null?void 0:T.poolInfo)==null?void 0:A.is_pause,onClick:e.toRemove},{default:P(()=>[Uo,N(" "+r(e.$t("button.remove")),1)]),_:1},8,["class","disabled","onClick"]),k(O,{class:"increase-liquidity action-btn",disabled:(c=(C=e.positionInfo)==null?void 0:C.poolInfo)==null?void 0:c.is_pause,onClick:e.toIncrease},{default:P(()=>[Bo,N(" "+r(e.$t("button.increase")),1)]),_:1},8,["disabled","onClick"])])]}),_:1},8,["loading"])])]),s("div",qo,[k(z,{"position-info":e.positionInfo},null,8,["position-info"])]),e.chainName=="Aptos"&&e.hasNotifi?(g(),R("div",Eo,[k(Y,{"position-info":e.positionInfo},null,8,["position-info"])])):Q("",!0),s("div",Fo,[(g(),$e(pe,{key:0,"apr-title":e.aprTitle,"apr-rewards-date-list":e.aprRewardsDateList,"apr-rewards-parameter":e.aprRewardsParameter,"name-tab":"position","from-coin":e.fromCoin,"to-coin":e.toCoin,"pool-info":e.positionInfo.poolInfo,"min-price":e.positionInfo.minPrice,"max-price":e.positionInfo.maxPrice&&String(e.positionInfo.maxPrice).indexOf("+")>-1?"∞":e.positionInfo.maxPrice,onAprTab:e.aprTab},null,8,["apr-title","apr-rewards-date-list","apr-rewards-parameter","from-coin","to-coin","pool-info","min-price","max-price","onAprTab"]))]),s("div",Wo,[s("div",Ho,[s("div",Mo,[s("span",null,r(e.$t("newAdd.pendingFees")),1),s("p",null," $"+r(e.pools.currentPositionLoading||e.feeOwed=="--"?"--":Number(e.feeOwed)==0?0:Number(e.feeOwed)<.01?"<0.01":("addCommom"in e?e.addCommom:b(m))(e.feeOwed,2)),1)]),k(O,{class:"increase-liquidity action-btn",disabled:e.isLoading||!e.wallet.connected||!(Number(e.positionInfo&&e.positionInfo.feeOwedA)||Number(e.positionInfo&&e.positionInfo.feeOwedB))||e.positionInfo.poolInfo.is_pause,onClick:v[2]||(v[2]=o=>e.isShowClaim=!0)},{default:P(()=>[N(r(e.$t("common.claim")),1)]),_:1},8,["disabled"])]),k(D,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:P(()=>{var o,u,T,A,C,c,y,L,U,B,q,W,H,V,x,te;return[s("div",zo,[s("div",null,[X(s("img",null,null,512),[[F,e.needReverse?e.toCoinUrl:e.fromCoinUrl]]),s("p",null,r(e.needReverse?("showNum"in e?e.showNum:b(j))(e.positionInfo.feeOwedB,(A=(T=e.positionInfo)==null?void 0:T.token_b)==null?void 0:A.decimals):("showNum"in e?e.showNum:b(j))(e.positionInfo.feeOwedA,(u=(o=e.positionInfo)==null?void 0:o.token_a)==null?void 0:u.decimals)),1),s("span",null,r(e.needReverse?(L=(y=e.positionInfo)==null?void 0:y.token_b)==null?void 0:L.symbol:(c=(C=e.positionInfo)==null?void 0:C.token_a)==null?void 0:c.symbol),1)]),s("div",null,[X(s("img",null,null,512),[[F,e.needReverse?e.fromCoinUrl:e.toCoinUrl]]),s("p",null,r(e.needReverse?("showNum"in e?e.showNum:b(j))(e.positionInfo.feeOwedA,(W=(q=e.positionInfo)==null?void 0:q.token_a)==null?void 0:W.decimals):("showNum"in e?e.showNum:b(j))(e.positionInfo.feeOwedB,(B=(U=e.positionInfo)==null?void 0:U.token_b)==null?void 0:B.decimals)),1),s("span",null,r(e.needReverse?(te=(x=e.positionInfo)==null?void 0:x.token_a)==null?void 0:te.symbol:(V=(H=e.positionInfo)==null?void 0:H.token_b)==null?void 0:V.symbol),1)])])]}),_:1},8,["loading"])]),e.positionInfo&&e.positionInfo.poolInfo&&e.positionInfo.poolInfo.rewarder_infos&&e.positionInfo.poolInfo.rewarder_infos.length>0&&e.positionInfo.poolInfo.is_display_rewarder&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(g(),R("div",Go,[s("div",Jo,[s("div",Ko,[s("span",null,r(e.$t("newAdd.pendingRewards")),1),s("p",null," $"+r(e.pendingRewarder=="--"?"--":Number(e.pendingRewarder)==0?0:Number(e.pendingRewarder)<.01?"<0.01":("addCommom"in e?e.addCommom:b(m))(e.pendingRewarder,2)),1)]),k(O,{class:"increase-liquidity action-btn",disabled:e.rewarderLoading||!e.wallet.connected||e.pendingRewarder<=0||((ie=(t=e.positionInfo)==null?void 0:t.poolInfo)==null?void 0:ie.is_pause),loading:e.rewarderLoading,onClick:e.toClaimRewards},{default:P(()=>[N(r(e.$t("common.claim")),1)]),_:1},8,["disabled","loading","onClick"])]),k(D,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:P(()=>[s("div",Qo,[(g(!0),R(fo,null,ho(e.pendingRewarderArr,o=>(g(),R("div",{key:o,class:K(Number(o==null?void 0:o.amount)==0?"reward-none":"")},[X(s("img",Xo,null,512),[[F,o.logoURI]]),s("p",null,r(o.amount),1),s("span",null,r(o.symbol),1)],2))),128))])]),_:1},8,["loading"])])):Q("",!0),e.positionInfo&&e.positionInfo.poolInfo?(g(),R("div",Yo,[s("div",Zo,r(e.$t("newAdd.poolInfo")),1),s("div",Vo,[k(D,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:P(()=>{var o,u,T,A,C,c,y,L,U,B,q,W;return[(e.needReverse?!e.direct:e.direct)?(g(),R("div",xo,[s("span",null,r(e.$t("common.currentPrice")),1),N(" "+r(("addCommom"in e?e.addCommom:b(m))(("decimalFormat"in e?e.decimalFormat:b(Ie))(e.positionInfo.currentPrice,6),6))+" "+r((o=e.toCoin)==null?void 0:o.symbol)+" per "+r((u=e.fromCoin)==null?void 0:u.symbol),1)])):(g(),R("div",en,[s("span",null,r(e.$t("common.currentPrice")),1),N(" "+r(("addCommom"in e?e.addCommom:b(m))(("decimalFormat"in e?e.decimalFormat:b(Ie))(1/e.positionInfo.currentPrice,6),6))+" "+r((T=e.fromCoin)==null?void 0:T.symbol)+" per "+r((A=e.toCoin)==null?void 0:A.symbol),1)])),s("div",on,[s("div",{class:K(e.direct?"item active-item":"item"),onClick:v[3]||(v[3]=H=>e.direct=!0)},[X(s("img",nn,null,512),[[F,e.needReverse?e.toCoinUrl:e.fromCoinUrl]]),N(" "+r(e.needReverse?(L=(y=e.positionInfo)==null?void 0:y.token_b)==null?void 0:L.symbol:(c=(C=e.positionInfo)==null?void 0:C.token_a)==null?void 0:c.symbol),1)],2),s("div",{class:K(e.direct?"item ":"item active-item"),onClick:v[4]||(v[4]=H=>e.direct=!1)},[X(s("img",sn,null,512),[[F,e.needReverse?e.fromCoinUrl:e.toCoinUrl]]),N(" "+r(e.needReverse?(W=(q=e.positionInfo)==null?void 0:q.token_a)==null?void 0:W.symbol:(B=(U=e.positionInfo)==null?void 0:U.token_b)==null?void 0:B.symbol),1)],2)])]}),_:1},8,["loading"])]),k(D,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:P(()=>[e.aprTotal&&e.liquidityTvl&&e.vol24?(g(),R("div",an,[s("div",tn,[s("div",rn,[s("div",ln,r(e.$t("common.apr")),1),s("div",dn,[N(r(e.aprTotal?("addCommom"in e?e.addCommom:b(m))(e.aprTotal.substring(0,e.aprTotal.length-1),2):0)+"% ",1),s("div",un,[k(me,{class:K(e.isShow?"showHover apr-hover-con":"noHover apr-hover-con"),"l-item":{apr:e.apr,rewarder_apr:e.rewardAprList,aprTotal:e.aprTotal,is_display_rewarder:e.positionInfo.poolInfo.is_display_rewarder},"rewarder-info":e.rewarderArr},null,8,["class","l-item","rewarder-info"])])])]),s("div",cn,[s("div",pn,r(e.$t("common.liquidity")),1),s("div",mn,"$"+r(("addCommom"in e?e.addCommom:b(m))(e.liquidityTvl,2)),1)]),s("div",vn,[s("div",fn,r(e.$t("common.volume24h")),1),s("div",hn,"$"+r(("addCommom"in e?e.addCommom:b(m))(e.vol24,2)),1)]),s("div",kn,[s("div",bn,r(e.$t("newAdd.tickSpacing")),1),s("div",gn,r(e.positionInfo.tickSpacing),1)])])])):Q("",!0)]),_:1},8,["loading"])])):Q("",!0),e.isShowClaim?(g(),$e(Z,{key:3,"is-loading":e.isLoading,"position-info":e.positionInfo,"need-reverse":e.needReverse,onOnClose:v[5]||(v[5]=o=>e.isShowClaim=!1),onToClaim:e.toClaim},null,8,["is-loading","position-info","need-reverse","onToClaim"])):Q("",!0),X(s("div",wn,[k(ve)],512),[[co,e.pools.currentPositionLoading]])])):Q("",!0)}const Mn=lo(Io,[["render",_n],["__scopeId","data-v-7f47ffdb"]]);export{Mn as default};
