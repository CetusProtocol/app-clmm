import{_ as Qe}from"./back.f8e4b7bf.js";import{_ as Xe,a as Ye,b as Ze}from"./claim-fees.6df60696.js";import{_ as Ve}from"./apr-tab.c4659966.js";import{_ as xe}from"./apr-tips.e9912181.js";import{u as eo,r as j,a as m,j as Ie,e as oo,c as M,q as J,s as no,k as _e,g as so}from"./pool.7066e590.js";import{a as ao,r as d,l as b,b as io,q as ne,y as to,a4 as ro,H as lo,C as B,a7 as Oe,e as uo,s as co,o as w,f as R,h as s,i as k,A as K,w as P,x as Q,c as $e,v as r,u as g,t as X,N as po,B as mo,M as vo,S as fo,j as N,F as ho,E as ko,p as go,k as bo}from"./entry.fb0d1e13.js";/* empty css              *//* empty css              */import{i as wo}from"./import-icon.de3e6c66.js";import{u as _o,a as Io,c as Pe}from"./sha256.53cbc506.js";import{p as yo}from"./precision.9d58cda5.js";import{D as ue}from"./decimal.0bdeb344.js";import"./token-warning.9251daab.js";import"./status-block.2a4d74ba.js";/* empty css              */import"./icon-arrow_2x.948aedb2.js";import"./icon-arrow_2x.4ffddb8e.js";/* empty css              */import"./notifi.8bb66848.js";import"./useWhale.e751d43c.js";import"./index.4b53cc81.js";import"./farms.2e60326a.js";import"./icon_rewards_2x.461e4cdc.js";const Ro=ao({setup(){const e=d(!1),v=d(!1),ae=d(!1),ye=d(!0),_=_o(),f=b(()=>_),ce=eo(),O=d(""),D=d(""),z=d(""),Y=d(30),pe=d("Estimated APR"),me=d([{time:"24H",num:24},{time:"7D",num:7},{time:"30D",num:30}]),Z=d(!0),ve=n=>{Y.value=n.num},F=()=>{Z.value=!Z.value},t=b(()=>ce),ie=b(()=>{var l,i,h,p;const n=o.value.feeOwedA*((l=t.value.RATES[o.value&&o.value.token_a&&o.value.token_a.address])==null?void 0:l.price),a=o.value.feeOwedB*((i=t.value.RATES[o.value&&o.value.token_b&&o.value.token_b.address])==null?void 0:i.price);return(h=t.value.RATES[o.value&&o.value.token_a&&o.value.token_a.address])!=null&&h.price&&((p=t.value.RATES[o.value&&o.value.token_b&&o.value.token_b.address])!=null&&p.price)?n+a:" --"}),o=d({}),u=io();function T(){u.push(`/remove-liquidity?collect=${o.value.collectionName}&&token=${o.value.tokenName}&&address=${o.value.pool}&pos=${o.value.pos_object_id}`)}function A(){u.push(`/increase-liquidity?collect=${o.value.collectionName}&&token=${o.value.tokenName}&&address=${o.value.pool}&pos=${o.value.pos_object_id}`)}const C=()=>{y(),ae.value=!0,setTimeout(()=>{ae.value=!1},1e3)},c=b(()=>f.value.chainName?oo(f.value.chainName):{}),y=async()=>{t.value.setCurrentPositionLoading(!0);const n=u.currentRoute.value.query.token||"",a=u.currentRoute.value.query.collect||"",l=u.currentRoute.value.query.address||"",i=u.currentRoute.value.query.pos||"";D.value=l,f.value.chainName==="Aptos"?n&&a&&l&&(O.value=a,z.value=n,t.value.setCurrentPositionInfo(D.value,O.value,z.value,f.value.chainName)):n&&l&&i&&(O.value=a,z.value=n,t.value.setCurrentPositionInfo(l,O.value,z.value,f.value.chainName,i))},E=b(()=>{var a,l,i;const n=((i=(l=(a=u==null?void 0:u.currentRoute)==null?void 0:a.value)==null?void 0:l.query)==null?void 0:i.address)||"";return n&&t.value.addressLpTokens&&!M(t.value.addressLpTokens)&&t.value.addressLpTokens[n]?t.value.addressLpTokens[n]:null});ne(()=>E.value,(n,a)=>{n&&!M(n)&&n.current_sqrt_price!==(a==null?void 0:a.current_sqrt_price)&&y()},{immediate:!0});const L=d(""),U=d(""),q=d(""),W=(n,a)=>n&&a?no(yo.plus(_e(n),_e(a)),2)+"%":n,H=n=>{let a=0;return n&&n.forEach(l=>{a+=_e(String(l))}),String(J(String(a),2))},V=d(""),x=d("");ne(()=>[f.value.newTopPoolsObj,o.value,Y],([n,a])=>{if(!M(n)&&!M(a)){const l=a.poolAddress,i=n[l];L.value=i&&(i==null?void 0:i.apr_7day),x.value=H(i&&(i==null?void 0:i.rewarder_apr)),V.value=W(i&&(i==null?void 0:i.apr_7day),i&&H(i==null?void 0:i.rewarder_apr)),U.value=i&&J(i==null?void 0:i.tvl_in_usd,2),q.value=i&&J(i==null?void 0:i.vol_in_usd_24h,2)}},{immediate:!0,deep:!0});const te=Io(),G=b(()=>te),{t:fe}=to(),{$notify:Re}=ro(),je=async()=>{e.value=!0,v.value=!1;const n=m(o.value.feeOwedA,o.value.token_a.decimals)==0?"":`${j(o.value.feeOwedA,o.value.token_a.decimals)} ${o.value.token_a.symbol}`,a=m(o.value.feeOwedB,o.value.token_b.decimals)==0?"":`${j(o.value.feeOwedB,o.value.token_b.decimals)} ${o.value.token_b.symbol}`;_.setTransactionDesc(fe("newAdd.claimWaitingText",{from:we.value?a:n,and:m(o.value.feeOwedA,o.value.token_a.decimals)==0||m(o.value.feeOwedB,o.value.token_b.decimals)==0?"":"and",to:we.value?n:a})),_.setIsShowWaiting(!0);let l;const i={pool:o.value.poolInfo,position:o.value};try{const h=await c.value.getCollectFeeTransactionPayload(i);if(f.value.chainName==="Aptos")l=await G.value.currentWallet.signAndSubmitTransaction(h);else{const p=await c.value.signAndExecuteTransactionBlock(G.value.currentWallet,h);l=c.value.handleTx(p)}if(l){_.setTransactionTxid(l.hash),_.setIsShowWaiting(!1),_.setIsShowSuccess(!0);const p={title:"Claim",desc:"",hash:l.hash,tit:"Fees Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:`${o.value.token_a.symbol}`,numa:m(o.value.feeOwedA,o.value.token_a.decimals)==0?"":`+ ${j(o.value.feeOwedA,o.value.token_a.decimals)}`,logoa:m(o.value.feeOwedA,o.value.token_a.decimals)==0?"":t.value.tokensObj&&o.value&&o.value.token_a.address&&t.value.tokensObj[o.value.token_a.address]&&t.value.tokensObj[o.value.token_a.address].logoURI,tokenb:`${o.value.token_b.symbol}`,numb:m(o.value.feeOwedB,o.value.token_b.decimals)==0?"":`+ ${j(o.value.feeOwedB,o.value.token_b.decimals)}`,logob:m(o.value.feeOwedB,o.value.token_b.decimals)==0?"":t.value.tokensObj&&o.value&&o.value.token_b.address&&t.value.tokensObj[o.value.token_b.address]&&t.value.tokensObj[o.value.token_b.address].logoURI}};f.value.chainName!=="Aptos"&&(p.res=l.res),c.value.showTransitionPending(p),await c.value.watchTransaction(p)&&setTimeout(()=>{y()},1e3)}else _.setIsShowWaiting(!1),_.setIsShowRejected(!0),Re.error({icon:B("svg",{class:{icon:!0},"aria-hidden":!0},[B("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),duration:4.5,message:B("div",{class:"notification-title"},[B("span",{innerHTML:Oe.global.t("newAdd.claimFailed")},null)]),description:fe("newAdd.somethingWrong"),class:"ant-notification-copy ant-notification-error"});e.value=!1}catch{e.value=!1,_.setIsShowWaiting(!1),_.setIsShowRejected(!0),Re.error({icon:B("svg",{class:{icon:!0},"aria-hidden":!0},[B("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),message:B("div",{class:"notification-title"},[B("span",{innerHTML:Oe.global.t("newAdd.claimFailed")},null)]),duration:4.5,description:fe("newAdd.somethingWrong"),class:"ant-notification-copy ant-notification-error"})}},he=d(""),ke=d(""),De=()=>{he.value=o.value.token_b,ke.value=o.value.token_a},Ee=async(n=null)=>{const a=n||o.value,l=t.value.addressLpTokens[u.currentRoute.value.query.address],i=await c.value.getTickDataByIndex(l.ticks_handle,Number(a.tick_lower_index)),h=await c.value.getTickDataByIndex(l.ticks_handle,Number(a.tick_upper_index));let p={};re.value==="Aptos"?p=await c.value.getPosRewardersAmount({poolAddress:u.currentRoute.value.query.address,positionName:u.currentRoute.value.query.token,tickLowerData:i,tickUpperData:h}):p=await c.value.getPosRewardersAmount({poolAddress:u.currentRoute.value.query.address,pos:u.currentRoute.value.query.pos,positionHandle:l.position_manager.positions_handle});const S=[];let I=new ue(0);p.forEach(($,ee)=>{if(a.poolInfo[`rewarder_display${ee+1}`]){const oe=t.value.tokensObj[$.coin_address].decimals,Ge=t.value.tokensObj[$.coin_address],Je=$.amount_owed.toString(),Se=new ue(Je).div(Math.pow(10,oe)).toString(),Ke=t.value.RATES[$.coin_address].price,Ne=new ue(Se).mul(Ke);I=new ue(I).plus(Ne),S.push({...$,...Ge,amount:J(Se,oe),amountUSD:J(Ne.toString(),2)})}}),le.value=S,ge.value=Number(I.toString()),Te.value=Number(J(I.toString(),2))};ne(()=>t.value.currentPositionInfo,n=>{n&&(o.value=n,he.value=n==null?void 0:n.token_a,ke.value=n==null?void 0:n.token_b)},{immediate:!0});const Le=b(()=>t.value.tokensObj&&o&&o.value.token_a&&o.value.token_a.address&&t.value.tokensObj[o.value.token_a.address]&&t.value.tokensObj[o.value.token_a.address].logoURI),Ue=b(()=>t.value.tokensObj&&o&&o.value.token_b&&o.value.token_b.address&&t.value.tokensObj[o.value.token_b.address]&&t.value.tokensObj[o.value.token_b.address].logoURI),re=b(()=>f.value.chainName),qe=b(()=>Pe[re.value]),ge=d(0),le=d([]),Te=d(0);lo(()=>{ge.value=0,le.value=[],Te.value=0});const{setIsShowSuccess:Be,setIsShowRejected:Ae,setIsShowWaiting:be,setTransactionDesc:Rn,setTransactionTxid:Fe}=_,de=d(!1),We=async()=>{de.value=!0;const n=le.value;let a={coinTypeA:o.value.poolInfo.coinTypeA,coinTypeB:o.value.poolInfo.coinTypeB,coinTypeC:"",coinTypeD:"",coinTypeE:"",pool_address:o.value.poolAddress,pos_index:o.value.index,rewarder_nums:n.length};a.coinTypeC=n[0]?n[0].coin_address:"",a.coinTypeD=n[1]?n[1].coin_address:"",a.coinTypeE=n[2]?n[2].coin_address:"";try{const l=await c.value.getCollectRewarderTransactionPayload(a);let i;if(f.value.chainName==="Aptos")i=await G.value.currentWallet.signAndSubmitTransaction(l);else{const h=await c.value.signAndExecuteTransactionBlock(G.value.currentWallet,l);i=c.value.handleTx(h)}if(i&&i.hash){Fe(i.hash),be(!1),Be(!0);const h=n[0].amount+n[0].symbol,p=a.coinTypeD?" and "+n[1].amount+n[1].symbol:"",S=a.coinTypeE?" and "+n[2].amount+n[2].symbol:"",I={title:"Claim",desc:"",hash:i.hash,tit:"Rewards Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:n[0].symbol,numa:`+ ${Number(n[0].amount)}`,logoa:t.value.tokensObj&&n[0]&&n[0].address&&t.value.tokensObj[n[0].address]&&t.value.tokensObj[n[0].address].logoURI,tokenb:a.coinTypeD?n[1].symbol:"",numb:a.coinTypeD?`+ ${Number(n[1].amount)}`:"",logob:a.coinTypeD?t.value.tokensObj&&n[1]&&n[1].address&&t.value.tokensObj[n[1].address]&&t.value.tokensObj[n[1].address].logoURI:"",tokenc:a.coinTypeE?n[2].symbol:"",numc:a.coinTypeE?`+ ${Number(n[2].amount)}`:"",logoc:a.coinTypeE?t.value.tokensObj&&n[2]&&n[2].address&&t.value.tokensObj[n[2].address]&&t.value.tokensObj[n[2].address].logoURI:""}};f.value.chainName!=="Aptos"&&(I.res=i.res),c.value.showTransitionPending(I),await c.value.watchTransaction(I)&&setTimeout(()=>{y(),c.value.getAccount(G.value.address)},3e3)}else be(!1),Ae(!0);de.value=!1}catch{de.value=!1,be(!1),Ae(!0)}},Ce=d([]);ne(()=>[o.value,t.value.addressLpTokens,t.value.tokensObj,f.value.newTopPoolsObj],([n,a,l,i])=>{if(!M(n)&&!M(a)&&!M(l)){const h=n.address,p=a[h];let S=(p==null?void 0:p.rewarder_infos)||[];const I=i[h],$=[];S&&S.length>0&&(S==null||S.forEach((ee,oe)=>{p[`rewarder_display${oe+1}`]&&$.push({...ee,symbol:l[ee.coinAddress].symbol,rewarderApr:I==null?void 0:I.rewarder_apr[oe],logoUrl:l[ee.coinAddress].logoURI})}),Ce.value=$,Ee(n))}},{immediate:!0,deep:!0});const He=d();ne(()=>t.value.RATES,n=>{n&&(He.value=n)},{immediate:!0});const we=b(()=>{var n,a;return(a=(n=o.value)==null?void 0:n.poolInfo)==null?void 0:a.needReverse}),Me=b(()=>Pe[re.value].hasNotifi),ze=b(()=>f.value.currentExplorer);return{hasNotifi:Me,rewarderArr:Ce,feeOwed:ie,config:qe,showNum:j,index:f,fromCoinUrl:Le,toCoinUrl:Ue,toggle:De,fromCoin:he,toCoin:ke,apr:L,liquidityTvl:U,vol24:q,addCommom:m,decimalFormat:Ie,wallet:G,isLoading:e,toClaim:je,pools:t,positionInfo:o,importIcon:wo,router:u,toRemove:T,toIncrease:A,isShowClaim:v,direct:ye,refresh:ae,clickRefresh:C,pendingRewarderArr:le,pendingRewarder:ge,toClaimRewards:We,rewarderLoading:de,aprRewardsParameter:Y,aprRewardsDateList:me,aprTab:ve,reviseValue:F,label:Z,aprTitle:pe,aprTotal:V,rewardAprList:x,currentPoolInfo:E,chainName:re,needReverse:we,currentExplorer:ze}}});const se=e=>(go("data-v-0ea4aa5a"),e=e(),bo(),e),To={key:0,class:"position-detail-container"},Ao={class:"position-detail-header"},Co={class:"back-and-refresh"},So=se(()=>s("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),No=[So],Oo={class:"action-position"},$o={class:"coin-pair"},Po=se(()=>s("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),jo=[Po],Do=["href"],Eo=se(()=>s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon-jump"})],-1)),Lo=[Eo],Uo={class:"acton-btn-box"},qo=se(()=>s("svg",{"aria-hidden":"true",class:"action-icon"},[s("use",{"xlink:href":"#icon-icon-Reduction"})],-1)),Bo=se(()=>s("svg",{"aria-hidden":"true",class:"action-icon"},[s("use",{"xlink:href":"#icon-icon-add"})],-1)),Fo={class:"position-content"},Wo={key:0,class:"pedding-fee range-alerts-all"},Ho={class:"pedding-fee"},Mo={class:"pedding-fee"},zo={class:"top"},Go={class:"left"},Jo={class:"bottom"},Ko={key:1,class:"pedding-fee"},Qo={class:"top"},Xo={class:"left"},Yo={class:"bottom"},Zo={alt:""},Vo={key:2,class:"poolInfo"},xo={class:"pool-info-title"},en={class:"currentPrice"},on={key:0,class:"coin"},nn={key:1,class:"coin"},sn={class:"toggle"},an={alt:""},tn={alt:""},rn={key:0},ln={class:"info-block-container"},dn={class:"info-block"},un={class:"leabl"},cn={class:"text"},pn={class:"apr-hover-content"},mn={class:"info-block"},vn={class:"leabl"},fn={class:"text"},hn={class:"info-block"},kn={class:"leabl"},gn={class:"text"},bn={class:"info-block"},wn={class:"leabl"},_n={class:"text"},In={class:"loading-global"};function yn(e,v,ae,ye,_,f){var t,ie;const ce=Qe,O=mo,D=vo,z=Xe,Y=Ye,pe=Ve,me=xe,Z=Ze,ve=fo,F=co("image");return e.positionInfo?(w(),R("div",To,[s("div",Ao,[s("div",Co,[k(ce),(w(),R("svg",{"aria-hidden":"true",class:K(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:v[0]||(v[0]=(...o)=>e.clickRefresh&&e.clickRefresh(...o))},No,2))]),s("div",Oo,[k(D,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:P(()=>{var o,u,T,A,C,c;return[s("div",$o,[N(r(e.positionInfo.tokenName)+" ",1),(w(),R("svg",{class:"icon","aria-hidden":"true",onClick:v[1]||(v[1]=y=>e.index.copy(e.positionInfo.nftHash))},jo)),s("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:g(so))(e.currentExplorer,"nftAddress",e.positionInfo.nftHash),target:"_blank"},Lo,8,Do)]),s("div",Uo,[k(O,{class:K(["remove-liquidity action-btn",(u=(o=e.positionInfo)==null?void 0:o.poolInfo)!=null&&u.is_pause?"text-default":""]),disabled:(A=(T=e.positionInfo)==null?void 0:T.poolInfo)==null?void 0:A.is_pause,onClick:e.toRemove},{default:P(()=>[qo,N(" "+r(e.$t("button.remove")),1)]),_:1},8,["class","disabled","onClick"]),k(O,{class:"increase-liquidity action-btn",disabled:(c=(C=e.positionInfo)==null?void 0:C.poolInfo)==null?void 0:c.is_pause,onClick:e.toIncrease},{default:P(()=>[Bo,N(" "+r(e.$t("button.increase")),1)]),_:1},8,["disabled","onClick"])])]}),_:1},8,["loading"])])]),s("div",Fo,[k(z,{"position-info":e.positionInfo},null,8,["position-info"])]),e.chainName=="Aptos"&&e.hasNotifi?(w(),R("div",Wo,[k(Y,{"position-info":e.positionInfo},null,8,["position-info"])])):Q("",!0),s("div",Ho,[(w(),$e(pe,{key:0,"apr-title":e.aprTitle,"apr-rewards-date-list":e.aprRewardsDateList,"apr-rewards-parameter":e.aprRewardsParameter,"name-tab":"position","from-coin":e.fromCoin,"to-coin":e.toCoin,"pool-info":e.positionInfo.poolInfo,"min-price":e.positionInfo.minPrice,"max-price":e.positionInfo.maxPrice&&String(e.positionInfo.maxPrice).indexOf("+")>-1?"∞":e.positionInfo.maxPrice,onAprTab:e.aprTab},null,8,["apr-title","apr-rewards-date-list","apr-rewards-parameter","from-coin","to-coin","pool-info","min-price","max-price","onAprTab"]))]),s("div",Mo,[s("div",zo,[s("div",Go,[s("span",null,r(e.$t("newAdd.pendingFees")),1),s("p",null," $"+r(e.pools.currentPositionLoading||e.feeOwed=="--"?"--":Number(e.feeOwed)==0?0:Number(e.feeOwed)<.01?"<0.01":("addCommom"in e?e.addCommom:g(m))(e.feeOwed,2)),1)]),k(O,{class:"increase-liquidity action-btn",disabled:e.isLoading||!e.wallet.connected||!(Number(e.positionInfo&&e.positionInfo.feeOwedA)||Number(e.positionInfo&&e.positionInfo.feeOwedB))||e.positionInfo.poolInfo.is_pause,onClick:v[2]||(v[2]=o=>e.isShowClaim=!0)},{default:P(()=>[N(r(e.$t("common.claim")),1)]),_:1},8,["disabled"])]),k(D,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:P(()=>{var o,u,T,A,C,c,y,E,L,U,q,W,H,V,x,te;return[s("div",Jo,[s("div",null,[X(s("img",null,null,512),[[F,e.needReverse?e.toCoinUrl:e.fromCoinUrl]]),s("p",null,r(e.needReverse?("showNum"in e?e.showNum:g(j))(e.positionInfo.feeOwedB,(A=(T=e.positionInfo)==null?void 0:T.token_b)==null?void 0:A.decimals):("showNum"in e?e.showNum:g(j))(e.positionInfo.feeOwedA,(u=(o=e.positionInfo)==null?void 0:o.token_a)==null?void 0:u.decimals)),1),s("span",null,r(e.needReverse?(E=(y=e.positionInfo)==null?void 0:y.token_b)==null?void 0:E.symbol:(c=(C=e.positionInfo)==null?void 0:C.token_a)==null?void 0:c.symbol),1)]),s("div",null,[X(s("img",null,null,512),[[F,e.needReverse?e.fromCoinUrl:e.toCoinUrl]]),s("p",null,r(e.needReverse?("showNum"in e?e.showNum:g(j))(e.positionInfo.feeOwedA,(W=(q=e.positionInfo)==null?void 0:q.token_a)==null?void 0:W.decimals):("showNum"in e?e.showNum:g(j))(e.positionInfo.feeOwedB,(U=(L=e.positionInfo)==null?void 0:L.token_b)==null?void 0:U.decimals)),1),s("span",null,r(e.needReverse?(te=(x=e.positionInfo)==null?void 0:x.token_a)==null?void 0:te.symbol:(V=(H=e.positionInfo)==null?void 0:H.token_b)==null?void 0:V.symbol),1)])])]}),_:1},8,["loading"])]),e.positionInfo&&e.positionInfo.poolInfo&&e.positionInfo.poolInfo.rewarder_infos&&e.positionInfo.poolInfo.rewarder_infos.length>0&&e.positionInfo.poolInfo.is_display_rewarder&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(w(),R("div",Ko,[s("div",Qo,[s("div",Xo,[s("span",null,r(e.$t("newAdd.pendingRewards")),1),s("p",null," $"+r(e.pendingRewarder=="--"?"--":Number(e.pendingRewarder)==0?0:Number(e.pendingRewarder)<.01?"<0.01":("addCommom"in e?e.addCommom:g(m))(e.pendingRewarder,2)),1)]),k(O,{class:"increase-liquidity action-btn",disabled:e.rewarderLoading||!e.wallet.connected||e.pendingRewarder<=0||((ie=(t=e.positionInfo)==null?void 0:t.poolInfo)==null?void 0:ie.is_pause),loading:e.rewarderLoading,onClick:e.toClaimRewards},{default:P(()=>[N(r(e.$t("common.claim")),1)]),_:1},8,["disabled","loading","onClick"])]),k(D,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:P(()=>[s("div",Yo,[(w(!0),R(ho,null,ko(e.pendingRewarderArr,o=>(w(),R("div",{key:o,class:K(Number(o==null?void 0:o.amount)==0?"reward-none":"")},[X(s("img",Zo,null,512),[[F,o.logoURI]]),s("p",null,r(o.amount),1),s("span",null,r(o.symbol),1)],2))),128))])]),_:1},8,["loading"])])):Q("",!0),e.positionInfo&&e.positionInfo.poolInfo?(w(),R("div",Vo,[s("div",xo,r(e.$t("newAdd.poolInfo")),1),s("div",en,[k(D,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:P(()=>{var o,u,T,A,C,c,y,E,L,U,q,W;return[(e.needReverse?!e.direct:e.direct)?(w(),R("div",on,[s("span",null,r(e.$t("common.currentPrice")),1),N(" "+r(("addCommom"in e?e.addCommom:g(m))(("decimalFormat"in e?e.decimalFormat:g(Ie))(e.positionInfo.currentPrice,6),6))+" "+r((o=e.toCoin)==null?void 0:o.symbol)+" per "+r((u=e.fromCoin)==null?void 0:u.symbol),1)])):(w(),R("div",nn,[s("span",null,r(e.$t("common.currentPrice")),1),N(" "+r(("addCommom"in e?e.addCommom:g(m))(("decimalFormat"in e?e.decimalFormat:g(Ie))(1/e.positionInfo.currentPrice,6),6))+" "+r((T=e.fromCoin)==null?void 0:T.symbol)+" per "+r((A=e.toCoin)==null?void 0:A.symbol),1)])),s("div",sn,[s("div",{class:K(e.direct?"item active-item":"item"),onClick:v[3]||(v[3]=H=>e.direct=!0)},[X(s("img",an,null,512),[[F,e.needReverse?e.toCoinUrl:e.fromCoinUrl]]),N(" "+r(e.needReverse?(E=(y=e.positionInfo)==null?void 0:y.token_b)==null?void 0:E.symbol:(c=(C=e.positionInfo)==null?void 0:C.token_a)==null?void 0:c.symbol),1)],2),s("div",{class:K(e.direct?"item ":"item active-item"),onClick:v[4]||(v[4]=H=>e.direct=!1)},[X(s("img",tn,null,512),[[F,e.needReverse?e.fromCoinUrl:e.toCoinUrl]]),N(" "+r(e.needReverse?(W=(q=e.positionInfo)==null?void 0:q.token_a)==null?void 0:W.symbol:(U=(L=e.positionInfo)==null?void 0:L.token_b)==null?void 0:U.symbol),1)],2)])]}),_:1},8,["loading"])]),k(D,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:P(()=>[e.aprTotal&&e.liquidityTvl&&e.vol24?(w(),R("div",rn,[s("div",ln,[s("div",dn,[s("div",un,r(e.$t("common.apr")),1),s("div",cn,[N(r(e.aprTotal?("addCommom"in e?e.addCommom:g(m))(e.aprTotal.substring(0,e.aprTotal.length-1),2):0)+"% ",1),s("div",pn,[k(me,{class:K(e.isShow?"showHover apr-hover-con":"noHover apr-hover-con"),"l-item":{apr:e.apr,rewarder_apr:e.rewardAprList,aprTotal:e.aprTotal,is_display_rewarder:e.positionInfo.poolInfo.is_display_rewarder},"rewarder-info":e.rewarderArr},null,8,["class","l-item","rewarder-info"])])])]),s("div",mn,[s("div",vn,r(e.$t("common.liquidity")),1),s("div",fn,"$"+r(("addCommom"in e?e.addCommom:g(m))(e.liquidityTvl,2)),1)]),s("div",hn,[s("div",kn,r(e.$t("common.volume24h")),1),s("div",gn,"$"+r(("addCommom"in e?e.addCommom:g(m))(e.vol24,2)),1)]),s("div",bn,[s("div",wn,r(e.$t("newAdd.tickSpacing")),1),s("div",_n,r(e.positionInfo.tickSpacing),1)])])])):Q("",!0)]),_:1},8,["loading"])])):Q("",!0),e.isShowClaim?(w(),$e(Z,{key:3,"is-loading":e.isLoading,"position-info":e.positionInfo,"need-reverse":e.needReverse,onOnClose:v[5]||(v[5]=o=>e.isShowClaim=!1),onToClaim:e.toClaim},null,8,["is-loading","position-info","need-reverse","onToClaim"])):Q("",!0),X(s("div",In,[k(ve)],512),[[po,e.pools.currentPositionLoading]])])):Q("",!0)}const Qn=uo(Ro,[["render",yn],["__scopeId","data-v-0ea4aa5a"]]);export{Qn as default};
