import{_ as ze}from"./back.4e2d02ab.js";import{_ as Ge,a as Je,b as Ke}from"./claim-fees.653b4e8a.js";import{_ as Qe}from"./apr-tab.deefb9ff.js";import{_ as Xe}from"./apr-tips.32c20f0e.js";import{a as Ye,u as Ze,b as Ve,c as W,j as xe,_ as Ce,l as L,d as v,h as ge,f as G,s as eo,t as be,i as oo}from"./pool.3ed98032.js";import{a as no,r as d,m as I,b as so,A as oe,l as ao,a4 as io,v as to,a1 as F,a5 as Ne,e as ro,o as w,f as R,h as s,i as b,x as J,w as j,s as K,c as Se,t as r,u as g,E as lo,G as uo,B as co,S as po,J as mo,j as $,F as vo,q as fo,p as ho,k as ko}from"./entry.927fc72a.js";/* empty css              *//* empty css              */import{i as bo}from"./import-icon.de3e6c66.js";import{p as go}from"./precision.9d58cda5.js";import"./token-warning.07714dd4.js";import"./status-block.fcf324b5.js";/* empty css              */import"./icon-arrow_2x.948aedb2.js";import"./icon-arrow_2x.4ffddb8e.js";import"./c-switch.6d256530.js";import"./notifi.2bdeee90.js";import"./index.be35975e.js";const wo=no({setup(){const e=d(!1),f=d(!1),se=d(!1),we=d(!0),_=Ye(),h=I(()=>_),le=Ze(),P=d(""),U=d(""),H=d(""),Q=d(30),de=d("Estimated APR"),ue=d([{time:"24H",num:24},{time:"7D",num:7},{time:"30D",num:30}]),X=d(!0),ce=n=>{Q.value=n.num},ae=()=>{X.value=!X.value},t=I(()=>le),c=I(()=>{var l,i,k,m;const n=o.value.feeOwedA*((l=t.value.RATES[o.value&&o.value.token_a&&o.value.token_a.address])==null?void 0:l.price),a=o.value.feeOwedB*((i=t.value.RATES[o.value&&o.value.token_b&&o.value.token_b.address])==null?void 0:i.price);return(k=t.value.RATES[o.value&&o.value.token_a&&o.value.token_a.address])!=null&&k.price&&((m=t.value.RATES[o.value&&o.value.token_b&&o.value.token_b.address])!=null&&m.price)?n+a:" --"}),o=d({}),u=so();function T(){u.push(`/remove-liquidity?collect=${o.value.collectionName}&&token=${o.value.tokenName}&&address=${o.value.pool}&pos=${o.value.pos_object_id}`)}function A(){u.push(`/increase-liquidity?collect=${o.value.collectionName}&&token=${o.value.tokenName}&&address=${o.value.pool}&pos=${o.value.pos_object_id}`)}const C=()=>{N(),se.value=!0,setTimeout(()=>{se.value=!1},1e3)},p=I(()=>h.value.chainName?Ve(h.value.chainName):{}),N=async()=>{t.value.setCurrentPositionLoading(!0);const n=u.currentRoute.value.query.token||"",a=u.currentRoute.value.query.collect||"",l=u.currentRoute.value.query.address||"",i=u.currentRoute.value.query.pos||"";U.value=l,h.value.chainName==="Aptos"?n&&a&&l&&(P.value=a,H.value=n,t.value.setCurrentPositionInfo(U.value,P.value,H.value,h.value.chainName)):n&&l&&i&&(P.value=a,H.value=n,t.value.setCurrentPositionInfo(l,P.value,H.value,h.value.chainName,i))},B=I(()=>{var a,l,i;const n=((i=(l=(a=u==null?void 0:u.currentRoute)==null?void 0:a.value)==null?void 0:l.query)==null?void 0:i.address)||"";return n&&t.value.addressLpTokens&&!W(t.value.addressLpTokens)&&t.value.addressLpTokens[n]?t.value.addressLpTokens[n]:null});oe(()=>B.value,(n,a)=>{n&&!W(n)&&n.current_sqrt_price!==(a==null?void 0:a.current_sqrt_price)&&N()},{immediate:!0});const D=d(""),E=d(""),q=d(""),M=(n,a)=>n&&a?eo(go.plus(be(n),be(a)),2)+"%":n,Y=n=>{let a=0;return n&&n.forEach(l=>{a+=be(String(l))}),String(G(String(a),2))},Z=d(""),V=d("");oe(()=>[h.value.newTopPoolsObj,o.value,Q],([n,a])=>{if(!W(n)&&!W(a)){const l=a.poolAddress,i=n[l];D.value=i&&(i==null?void 0:i.apr_7day),V.value=Y(i&&(i==null?void 0:i.rewarder_apr)),Z.value=M(i&&(i==null?void 0:i.apr_7day),i&&Y(i==null?void 0:i.rewarder_apr)),E.value=i&&G(i==null?void 0:i.tvl_in_usd,2),q.value=i&&G(i==null?void 0:i.vol_in_usd_24h,2)}},{immediate:!0,deep:!0});const Oe=xe(),z=I(()=>Oe),{t:pe}=ao(),{$notify:_e}=io(),$e=async()=>{e.value=!0,f.value=!1;const n=v(o.value.feeOwedA,o.value.token_a.decimals)==0?"":`${L(o.value.feeOwedA,o.value.token_a.decimals)} ${o.value.token_a.symbol}`,a=v(o.value.feeOwedB,o.value.token_b.decimals)==0?"":`${L(o.value.feeOwedB,o.value.token_b.decimals)} ${o.value.token_b.symbol}`;_.setTransactionDesc(pe("newAdd.claimWaitingText",{from:ke.value?a:n,and:v(o.value.feeOwedA,o.value.token_a.decimals)==0||v(o.value.feeOwedB,o.value.token_b.decimals)==0?"":"and",to:ke.value?n:a})),_.setIsShowWaiting(!0);let l;const i={pool:o.value.poolInfo,position:o.value};try{const k=await p.value.getCollectFeeTransactionPayload(i);if(h.value.chainName==="Aptos")l=await z.value.currentWallet.signAndSubmitTransaction(k);else{const m=await z.value.currentWallet.signAndExecuteTransactionBlock(k);l=p.value.handleTx(m)}if(l){_.setTransactionTxid(l.hash),_.setIsShowWaiting(!1),_.setIsShowSuccess(!0);const m={title:"Claim",desc:"",hash:l.hash,tit:"Fees Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:`${o.value.token_a.symbol}`,numa:v(o.value.feeOwedA,o.value.token_a.decimals)==0?"":`+ ${L(o.value.feeOwedA,o.value.token_a.decimals)}`,logoa:v(o.value.feeOwedA,o.value.token_a.decimals)==0?"":t.value.tokensObj&&o.value&&o.value.token_a.address&&t.value.tokensObj[o.value.token_a.address]&&t.value.tokensObj[o.value.token_a.address].logoURI,tokenb:`${o.value.token_b.symbol}`,numb:v(o.value.feeOwedB,o.value.token_b.decimals)==0?"":`+ ${L(o.value.feeOwedB,o.value.token_b.decimals)}`,logob:v(o.value.feeOwedB,o.value.token_b.decimals)==0?"":t.value.tokensObj&&o.value&&o.value.token_b.address&&t.value.tokensObj[o.value.token_b.address]&&t.value.tokensObj[o.value.token_b.address].logoURI}};h.value.chainName!=="Aptos"&&(m.res=l.res),p.value.showTransitionPending(m),await p.value.watchTransaction(m)&&setTimeout(()=>{N()},1e3)}else _.setIsShowWaiting(!1),_.setIsShowRejected(!0),_e.error({icon:F("svg",{class:{icon:!0},"aria-hidden":!0},[F("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),duration:4.5,message:F("div",{class:"notification-title"},[F("span",{innerHTML:Ne.global.t("newAdd.claimFailed")},null)]),description:pe("newAdd.somethingWrong"),class:"ant-notification-copy ant-notification-error"});e.value=!1}catch{e.value=!1,_.setIsShowWaiting(!1),_.setIsShowRejected(!0),_e.error({icon:F("svg",{class:{icon:!0},"aria-hidden":!0},[F("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),message:F("div",{class:"notification-title"},[F("span",{innerHTML:Ne.global.t("newAdd.claimFailed")},null)]),duration:4.5,description:pe("newAdd.somethingWrong"),class:"ant-notification-copy ant-notification-error"})}},me=d(""),ve=d(""),Pe=()=>{me.value=o.value.token_b,ve.value=o.value.token_a},je=async(n=null)=>{const a=n||o.value,l=t.value.addressLpTokens[u.currentRoute.value.query.address],i=await p.value.getTickDataByIndex(l.ticks_handle,Number(a.tick_lower_index)),k=await p.value.getTickDataByIndex(l.ticks_handle,Number(a.tick_upper_index));let m={};ie.value==="Aptos"?m=await p.value.getPosRewardersAmount({poolAddress:u.currentRoute.value.query.address,positionName:u.currentRoute.value.query.token,tickLowerData:i,tickUpperData:k}):m=await p.value.getPosRewardersAmount({poolAddress:u.currentRoute.value.query.address,pos:u.currentRoute.value.query.pos,positionHandle:l.position_manager.positions_handle});const S=[];let y=0;m.forEach((O,x)=>{if(a.poolInfo[`rewarder_display${x+1}`]){const ee=t.value.tokensObj[O.coin_address].decimals,We=t.value.tokensObj[O.coin_address],He=Number(O.amount_owed.toString())>99999999999999?0:Number(O.amount_owed.toString()),Te=Number(He/Math.pow(10,ee)),Me=t.value.RATES[O.coin_address].price,Ae=Te*Me;y+=Ae,S.push({...O,...We,amount:G(Te,ee),amountUSD:G(Ae,2)})}}),te.value=S,fe.value=y,Ie.value=Number(G(y,2))};oe(()=>t.value.currentPositionInfo,n=>{n&&(o.value=n,me.value=n==null?void 0:n.token_a,ve.value=n==null?void 0:n.token_b)},{immediate:!0});const Le=I(()=>t.value.tokensObj&&o&&o.value.token_a&&o.value.token_a.address&&t.value.tokensObj[o.value.token_a.address]&&t.value.tokensObj[o.value.token_a.address].logoURI),Ue=I(()=>t.value.tokensObj&&o&&o.value.token_b&&o.value.token_b.address&&t.value.tokensObj[o.value.token_b.address]&&t.value.tokensObj[o.value.token_b.address].logoURI),ie=I(()=>h.value.chainName),Be=I(()=>Ce[ie.value]),fe=d(0),te=d([]),Ie=d(0);to(()=>{fe.value=0,te.value=[],Ie.value=0});const{setIsShowSuccess:De,setIsShowRejected:ye,setIsShowWaiting:he,setTransactionDesc:In,setTransactionTxid:Ee}=_,re=d(!1),qe=async()=>{re.value=!0;const n=te.value;let a={coinTypeA:o.value.poolInfo.coinTypeA,coinTypeB:o.value.poolInfo.coinTypeB,coinTypeC:"",coinTypeD:"",coinTypeE:"",pool_address:o.value.poolAddress,pos_index:o.value.index,rewarder_nums:n.length};a.coinTypeC=n[0]?n[0].coin_address:"",a.coinTypeD=n[1]?n[1].coin_address:"",a.coinTypeE=n[2]?n[2].coin_address:"";try{const l=await p.value.getCollectRewarderTransactionPayload(a);let i;if(h.value.chainName==="Aptos")i=await z.value.currentWallet.signAndSubmitTransaction(l);else{const k=await z.value.currentWallet.signAndExecuteTransactionBlock(l);i=p.value.handleTx(k)}if(i&&i.hash){Ee(i.hash),he(!1),De(!0);const k=n[0].amount+n[0].symbol,m=a.coinTypeD?" and "+n[1].amount+n[1].symbol:"",S=a.coinTypeE?" and "+n[2].amount+n[2].symbol:"",y={title:"Claim",desc:"",hash:i.hash,tit:"Bonus Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:n[0].symbol,numa:`+ ${Number(n[0].amount)}`,logoa:t.value.tokensObj&&n[0]&&n[0].address&&t.value.tokensObj[n[0].address]&&t.value.tokensObj[n[0].address].logoURI,tokenb:a.coinTypeD?n[1].symbol:"",numb:a.coinTypeD?`+ ${Number(n[1].amount)}`:"",logob:a.coinTypeD?t.value.tokensObj&&n[1]&&n[1].address&&t.value.tokensObj[n[1].address]&&t.value.tokensObj[n[1].address].logoURI:"",tokenc:a.coinTypeE?n[2].symbol:"",numc:a.coinTypeE?`+ ${Number(n[2].amount)}`:"",logoc:a.coinTypeE?t.value.tokensObj&&n[2]&&n[2].address&&t.value.tokensObj[n[2].address]&&t.value.tokensObj[n[2].address].logoURI:""}};h.value.chainName!=="Aptos"&&(y.res=i.res),p.value.showTransitionPending(y),await p.value.watchTransaction(y)&&setTimeout(()=>{N(),p.value.getAccount(z.value.address)},3e3)}else he(!1),ye(!0);re.value=!1}catch{re.value=!1,he(!1),ye(!0)}},Re=d([]);oe(()=>[o.value,t.value.addressLpTokens,t.value.tokensObj,h.value.newTopPoolsObj],([n,a,l,i])=>{if(!W(n)&&!W(a)&&!W(l)){const k=n.address,m=a[k];let S=(m==null?void 0:m.rewarder_infos)||[];const y=i[k],O=[];S&&S.length>0&&(S==null||S.forEach((x,ee)=>{m[`rewarder_display${ee+1}`]&&O.push({...x,symbol:l[x.coinAddress].symbol,rewarderApr:y==null?void 0:y.rewarder_apr[ee],logoUrl:l[x.coinAddress].logoURI})}),Re.value=O,je(n))}},{immediate:!0,deep:!0});const Fe=d();oe(()=>t.value.RATES,n=>{n&&(Fe.value=n)},{immediate:!0});const ke=I(()=>{var n,a;return(a=(n=o.value)==null?void 0:n.poolInfo)==null?void 0:a.needReverse});return{hasNotifi:I(()=>Ce[ie.value].hasNotifi),rewarderArr:Re,feeOwed:c,config:Be,showNum:L,index:h,fromCoinUrl:Le,toCoinUrl:Ue,toggle:Pe,fromCoin:me,toCoin:ve,apr:D,liquidityTvl:E,vol24:q,addCommom:v,decimalFormat:ge,wallet:z,isLoading:e,toClaim:$e,pools:t,positionInfo:o,importIcon:bo,router:u,toRemove:T,toIncrease:A,isShowClaim:f,direct:we,refresh:se,clickRefresh:C,pendingRewarderArr:te,pendingRewarder:fe,toClaimRewards:qe,rewarderLoading:re,aprRewardsParameter:Q,aprRewardsDateList:ue,aprTab:ce,reviseValue:ae,label:X,aprTitle:de,aprTotal:Z,rewardAprList:V,currentPoolInfo:B,chainName:ie,needReverse:ke}}});const ne=e=>(ho("data-v-520da086"),e=e(),ko(),e),_o={key:0,class:"position-detail-container"},Io={class:"position-detail-header"},yo={class:"back-and-refresh"},Ro=ne(()=>s("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),To=[Ro],Ao={class:"action-position"},Co={class:"coin-pair"},No=ne(()=>s("use",{"xlink:href":"#icon-icon-copy"},null,-1)),So=[No],Oo=["href"],$o=ne(()=>s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon-jump"})],-1)),Po=[$o],jo={class:"acton-btn-box"},Lo=ne(()=>s("svg",{"aria-hidden":"true",class:"action-icon"},[s("use",{"xlink:href":"#icon-icon-Reduction"})],-1)),Uo=ne(()=>s("svg",{"aria-hidden":"true",class:"action-icon"},[s("use",{"xlink:href":"#icon-icon-add"})],-1)),Bo={class:"position-content"},Do={key:0,class:"pedding-fee range-alerts-all"},Eo={class:"pedding-fee"},qo={class:"pedding-fee"},Fo={class:"top"},Wo={class:"left"},Ho={class:"bottom"},Mo=["src"],zo=["src"],Go={key:1,class:"pedding-fee"},Jo={class:"top"},Ko={class:"left"},Qo={class:"bottom"},Xo=["src"],Yo={key:2,class:"poolInfo"},Zo={class:"pool-info-title"},Vo={class:"currentPrice"},xo={key:0,class:"coin"},en={key:1,class:"coin"},on={class:"toggle"},nn=["src"],sn=["src"],an={key:0},tn={class:"info-block-container"},rn={class:"info-block"},ln={class:"leabl"},dn={class:"text"},un={class:"apr-hover-content"},cn={class:"info-block"},pn={class:"leabl"},mn={class:"text"},vn={class:"info-block"},fn={class:"leabl"},hn={class:"text"},kn={class:"info-block"},bn={class:"leabl"},gn={class:"text"},wn={class:"loading-global"};function _n(e,f,se,we,_,h){var ae,t;const le=ze,P=co,U=po,H=Ge,Q=Je,de=Qe,ue=Xe,X=Ke,ce=mo;return e.positionInfo?(w(),R("div",_o,[s("div",Io,[s("div",yo,[b(le),(w(),R("svg",{"aria-hidden":"true",class:J(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:f[0]||(f[0]=(...c)=>e.clickRefresh&&e.clickRefresh(...c))},To,2))]),s("div",Ao,[b(U,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:j(()=>{var c,o,u,T,A,C;return[s("div",Co,[$(r(e.positionInfo.tokenName)+" ",1),(w(),R("svg",{class:"icon","aria-hidden":"true",onClick:f[1]||(f[1]=p=>e.index.copy(e.positionInfo.nftHash))},So)),s("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:g(oo))("nftAddress",e.positionInfo.nftHash),target:"_blank"},Po,8,Oo)]),s("div",jo,[b(P,{class:J(["remove-liquidity action-btn",(o=(c=e.positionInfo)==null?void 0:c.poolInfo)!=null&&o.is_pause?"text-default":""]),disabled:(T=(u=e.positionInfo)==null?void 0:u.poolInfo)==null?void 0:T.is_pause,onClick:e.toRemove},{default:j(()=>[Lo,$(" "+r(e.$t("button.remove")),1)]),_:1},8,["class","disabled","onClick"]),b(P,{class:"increase-liquidity action-btn",disabled:(C=(A=e.positionInfo)==null?void 0:A.poolInfo)==null?void 0:C.is_pause,onClick:e.toIncrease},{default:j(()=>[Uo,$(" "+r(e.$t("button.increase")),1)]),_:1},8,["disabled","onClick"])])]}),_:1},8,["loading"])])]),s("div",Bo,[b(H,{"position-info":e.positionInfo},null,8,["position-info"])]),e.chainName=="Aptos"&&e.hasNotifi?(w(),R("div",Do,[b(Q,{"position-info":e.positionInfo},null,8,["position-info"])])):K("",!0),s("div",Eo,[(w(),Se(de,{key:0,"apr-title":e.aprTitle,"apr-rewards-date-list":e.aprRewardsDateList,"apr-rewards-parameter":e.aprRewardsParameter,"name-tab":"position","from-coin":e.fromCoin,"to-coin":e.toCoin,"pool-info":e.positionInfo.poolInfo,"min-price":e.positionInfo.minPrice,"max-price":e.positionInfo.maxPrice&&String(e.positionInfo.maxPrice).indexOf("+")>-1?"∞":e.positionInfo.maxPrice,onAprTab:e.aprTab},null,8,["apr-title","apr-rewards-date-list","apr-rewards-parameter","from-coin","to-coin","pool-info","min-price","max-price","onAprTab"]))]),s("div",qo,[s("div",Fo,[s("div",Wo,[s("span",null,r(e.$t("newAdd.pendingFees")),1),s("p",null," $"+r(e.pools.currentPositionLoading||e.feeOwed=="--"?"--":Number(e.feeOwed)==0?0:Number(e.feeOwed)<.01?"<0.01":("addCommom"in e?e.addCommom:g(v))(e.feeOwed,2)),1)]),b(P,{class:"increase-liquidity action-btn",disabled:e.isLoading||!e.wallet.connected||!(Number(e.positionInfo&&e.positionInfo.feeOwedA)||Number(e.positionInfo&&e.positionInfo.feeOwedB))||e.positionInfo.poolInfo.is_pause,onClick:f[2]||(f[2]=c=>e.isShowClaim=!0)},{default:j(()=>[$(r(e.$t("common.claim")),1)]),_:1},8,["disabled"])]),b(U,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:j(()=>{var c,o,u,T,A,C,p,N,B,D,E,q,M,Y,Z,V;return[s("div",Ho,[s("div",null,[s("img",{src:e.needReverse?e.toCoinUrl:e.fromCoinUrl},null,8,Mo),s("p",null,r(e.needReverse?("showNum"in e?e.showNum:g(L))(e.positionInfo.feeOwedB,(T=(u=e.positionInfo)==null?void 0:u.token_b)==null?void 0:T.decimals):("showNum"in e?e.showNum:g(L))(e.positionInfo.feeOwedA,(o=(c=e.positionInfo)==null?void 0:c.token_a)==null?void 0:o.decimals)),1),s("span",null,r(e.needReverse?(N=(p=e.positionInfo)==null?void 0:p.token_b)==null?void 0:N.symbol:(C=(A=e.positionInfo)==null?void 0:A.token_a)==null?void 0:C.symbol),1)]),s("div",null,[s("img",{src:e.needReverse?e.fromCoinUrl:e.toCoinUrl},null,8,zo),s("p",null,r(e.needReverse?("showNum"in e?e.showNum:g(L))(e.positionInfo.feeOwedA,(q=(E=e.positionInfo)==null?void 0:E.token_a)==null?void 0:q.decimals):("showNum"in e?e.showNum:g(L))(e.positionInfo.feeOwedB,(D=(B=e.positionInfo)==null?void 0:B.token_b)==null?void 0:D.decimals)),1),s("span",null,r(e.needReverse?(V=(Z=e.positionInfo)==null?void 0:Z.token_a)==null?void 0:V.symbol:(Y=(M=e.positionInfo)==null?void 0:M.token_b)==null?void 0:Y.symbol),1)])])]}),_:1},8,["loading"])]),e.positionInfo&&e.positionInfo.poolInfo&&e.positionInfo.poolInfo.rewarder_infos&&e.positionInfo.poolInfo.rewarder_infos.length>0&&e.positionInfo.poolInfo.is_display_rewarder&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(w(),R("div",Go,[s("div",Jo,[s("div",Ko,[s("span",null,r(e.$t("newAdd.pendingRewards")),1),s("p",null," $"+r(e.pendingRewarder=="--"?"--":Number(e.pendingRewarder)==0?0:Number(e.pendingRewarder)<.01?"<0.01":("addCommom"in e?e.addCommom:g(v))(e.pendingRewarder,2)),1)]),b(P,{class:"increase-liquidity action-btn",disabled:e.rewarderLoading||!e.wallet.connected||e.pendingRewarder<=0||((t=(ae=e.positionInfo)==null?void 0:ae.poolInfo)==null?void 0:t.is_pause),loading:e.rewarderLoading,onClick:e.toClaimRewards},{default:j(()=>[$(r(e.$t("common.claim")),1)]),_:1},8,["disabled","loading","onClick"])]),b(U,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:j(()=>[s("div",Qo,[(w(!0),R(vo,null,fo(e.pendingRewarderArr,c=>(w(),R("div",{key:c,class:J(Number(c==null?void 0:c.amount)==0?"reward-none":"")},[s("img",{src:c.logoURI,alt:""},null,8,Xo),s("p",null,r(c.amount),1),s("span",null,r(c.symbol),1)],2))),128))])]),_:1},8,["loading"])])):K("",!0),e.positionInfo&&e.positionInfo.poolInfo?(w(),R("div",Yo,[s("div",Zo,r(e.$t("newAdd.poolInfo")),1),s("div",Vo,[b(U,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:j(()=>{var c,o,u,T,A,C,p,N,B,D,E,q;return[(e.needReverse?!e.direct:e.direct)?(w(),R("div",xo,[s("span",null,r(e.$t("common.currentPrice")),1),$(" "+r(("addCommom"in e?e.addCommom:g(v))(("decimalFormat"in e?e.decimalFormat:g(ge))(e.positionInfo.currentPrice,6),6))+" "+r((c=e.toCoin)==null?void 0:c.symbol)+" per "+r((o=e.fromCoin)==null?void 0:o.symbol),1)])):(w(),R("div",en,[s("span",null,r(e.$t("common.currentPrice")),1),$(" "+r(("addCommom"in e?e.addCommom:g(v))(("decimalFormat"in e?e.decimalFormat:g(ge))(1/e.positionInfo.currentPrice,6),6))+" "+r((u=e.fromCoin)==null?void 0:u.symbol)+" per "+r((T=e.toCoin)==null?void 0:T.symbol),1)])),s("div",on,[s("div",{class:J(e.direct?"item active-item":"item"),onClick:f[3]||(f[3]=M=>e.direct=!0)},[s("img",{src:e.needReverse?e.toCoinUrl:e.fromCoinUrl,alt:""},null,8,nn),$(" "+r(e.needReverse?(N=(p=e.positionInfo)==null?void 0:p.token_b)==null?void 0:N.symbol:(C=(A=e.positionInfo)==null?void 0:A.token_a)==null?void 0:C.symbol),1)],2),s("div",{class:J(e.direct?"item ":"item active-item"),onClick:f[4]||(f[4]=M=>e.direct=!1)},[s("img",{src:e.needReverse?e.fromCoinUrl:e.toCoinUrl,alt:""},null,8,sn),$(" "+r(e.needReverse?(q=(E=e.positionInfo)==null?void 0:E.token_a)==null?void 0:q.symbol:(D=(B=e.positionInfo)==null?void 0:B.token_b)==null?void 0:D.symbol),1)],2)])]}),_:1},8,["loading"])]),b(U,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:j(()=>[e.aprTotal&&e.liquidityTvl&&e.vol24?(w(),R("div",an,[s("div",tn,[s("div",rn,[s("div",ln,r(e.$t("common.apr")),1),s("div",dn,[$(r(e.aprTotal?("addCommom"in e?e.addCommom:g(v))(e.aprTotal.substring(0,e.aprTotal.length-1),2):0)+"% ",1),s("div",un,[b(ue,{class:J(e.isShow?"showHover apr-hover-con":"noHover apr-hover-con"),"l-item":{apr:e.apr,rewarder_apr:e.rewardAprList,aprTotal:e.aprTotal,is_display_rewarder:e.positionInfo.poolInfo.is_display_rewarder},"rewarder-info":e.rewarderArr},null,8,["class","l-item","rewarder-info"])])])]),s("div",cn,[s("div",pn,r(e.$t("common.liquidity")),1),s("div",mn,"$"+r(("addCommom"in e?e.addCommom:g(v))(e.liquidityTvl,2)),1)]),s("div",vn,[s("div",fn,r(e.$t("common.volume24h")),1),s("div",hn,"$"+r(("addCommom"in e?e.addCommom:g(v))(e.vol24,2)),1)]),s("div",kn,[s("div",bn,r(e.$t("newAdd.tickSpacing")),1),s("div",gn,r(e.positionInfo.tickSpacing),1)])])])):K("",!0)]),_:1},8,["loading"])])):K("",!0),e.isShowClaim?(w(),Se(X,{key:3,"is-loading":e.isLoading,"position-info":e.positionInfo,"need-reverse":e.needReverse,onOnClose:f[5]||(f[5]=c=>e.isShowClaim=!1),onToClaim:e.toClaim},null,8,["is-loading","position-info","need-reverse","onToClaim"])):K("",!0),lo(s("div",wn,[b(ce)],512),[[uo,e.pools.currentPositionLoading]])])):K("",!0)}const Hn=ro(wo,[["render",_n],["__scopeId","data-v-520da086"]]);export{Hn as default};
