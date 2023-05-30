import{_ as Ye}from"./back.eb3dde6a.js";import{_ as Ze}from"./coin-pair-name.4d50fd6a.js";import{_ as Ge}from"./status-block.b57fce77.js";import{_ as xe}from"./token-warning.d607a2a7.js";import{a as eo,_ as oo}from"./network-tips.feb639b7.js";import{a as so,u as no,j as ao,b as to,l as S,d as _,c as se,T as Xe,D as io,f as Ee,A as lo,e as Fe,h as He}from"./pool.cc4a70b7.js";import{p as pe}from"./precision.a7a6c57b.js";import{a as uo,l as ro,r as v,m as D,b as vo,L as mo,A as ne,a7 as co,e as po,o as y,f as O,i as N,h as s,t as l,x as ce,c as ze,s as W,F as Ke,q as Qe,u as X,j as Q,w as fo,E as bo,G as ko,I as ho,a8 as Io,B as go,J as _o,p as yo,k as wo}from"./entry.df2391fb.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{i as We}from"./import-icon.de3e6c66.js";import{u as Ao}from"./notifi.a64e29d6.js";const Ro=uo({setup(){const{t:e,locale:b}=ro();let Ve=v(!1),ae=v(!1);const fe=v(!1),Me=()=>{H(),fe.value=!0,setTimeout(()=>{fe.value=!1},1e3)},qe=[{name:"25%",value:25},{name:"50%",value:50},{name:"75%",value:75},{name:"MAX",value:100}],te=so(),w=D(()=>te),Be=no(),Y=v(""),C=v(""),Z=v(""),be=v(""),ke=v(""),he=v(""),ie=v(""),le=v(""),Ie=n=>{let t=n.replace(/[^\d.]/g,"");const c=/^\d+(\.\d+)?$/;t.split(".").length>2&&!c.exec(t)&&(t=t.substr(0,t.length-1)),I.value=t},a=D(()=>Be),r=v({}),d=v({}),o=v(a.value.currentPositionInfo||{}),ge=ao(),V=D(()=>ge),j=vo();mo(()=>{V.value.connected||j.push("/position")});const A=D(()=>w.value.chainName?to(w.value.chainName):{}),H=async()=>{a.value.setCurrentPositionLoading(!0);const n=j.currentRoute.value.query.token||"",t=j.currentRoute.value.query.collect||"",c=j.currentRoute.value.query.pos||"";w.value.chainName==="Aptos"?n&&t&&(Y.value=t,C.value=j.currentRoute.value.query.address,Z.value=n,a.value.setCurrentPositionInfo(C.value,Y.value,Z.value,w.value.chainName),o.value=a.value.currentPositionInfo):c&&(Y.value=t,C.value=j.currentRoute.value.query.address,Z.value=n,a.value.setCurrentPositionInfo(C.value,Y.value,Z.value,w.value.chainName,c),o.value=a.value.currentPositionInfo)},G=v(!0);ne(()=>a.value.addressLpTokens,n=>{const t=j.currentRoute.value.query.address||"";!se(n)&&n[t]&&G.value&&(H(),G.value=!1)},{immediate:!0,deep:!0}),ne(()=>a.value.currentPositionInfo,n=>{n&&(o.value=a.value.currentPositionInfo,r.value=o.value.token_a,d.value=o.value.token_b,ee({value:I.value/100}),console.log(o.value,"  positionInfo.valuepositionInfo.value"))});const I=v(50),p=v(0),f=v(0),ue=v("0"),x=D(()=>te.slippage);ne(I,co((n,t)=>{Number(n)>100?I.value=100:n&&o.value&&(I.value=n,ee({value:I.value/100}))},300)),ne(x,n=>{n&&o.value&&ee({value:I.value/100})});const ee=n=>{var m,i;const t=o.value.token_a.decimals,c=o.value.token_b.decimals,k=o.value.tick_lower_index,h=o.value.tick_upper_index,u=Xe.tickIndexToSqrtPriceX64(k),q=Xe.tickIndexToSqrtPriceX64(h);let g="";n.value!==1?g=new io(o.value.liquidity).mul(n.value).toString():g=o.value.liquidity,g=Ee(g,0)||"0",ue.value=g;const L=lo.getCoinAmountFromLiquidity(new Fe(g),new Fe(o.value.current_sqrt_price),u,q,!0);console.log(L,"===>amountInfo");const M=Number(L.coinA.toString())/Math.pow(10,t),R=Number(L.coinB.toString())/Math.pow(10,c);console.log(M,R,"amountA121212"),p.value=M,f.value=R;const B=a.value.RATES&&a.value.RATES[o.value.token_a.address]&&((m=a.value.RATES[o.value.token_a.address])==null?void 0:m.price)||0,E=a.value.RATES&&a.value.RATES[o.value.token_b.address]&&((i=a.value.RATES[o.value.token_b.address])==null?void 0:i.price)||0;console.log(p.value,B,"fromCoinAmount.value"),be.value=Number(p.value*B)<.01?Number(p.value*B)===0?"0":"<0.01":_(p.value*B,2),ke.value=Number(f.value*E)<.01?Number(f.value*E)===0?"0":"<0.01":_(f.value*E,2);const F=pe.minus(Number(o.value.amountA),Number(p.value))*B;he.value=Number(F)<.01?Number(F)===0?"0":"<0.01":_(F,2);const J=pe.minus(Number(o.value.amountB),Number(f.value))*E;ie.value=Number(J)<.01?Number(J)===0?"0":"<0.01":_(J,2);const P=Number(He(F,2))+Number(He(J,2));le.value=Number(P)<.01?Number(P)===0?"0":"<0.01":_(P,2)},{setIsShowSuccess:_e,setIsShowRejected:re,setIsShowWaiting:z,setTransactionDesc:ye,setTransactionTxid:de,setPositiomNum:Pe,setTransactionDescText:we}=te,K=Ao(),oe=D(()=>K),Ae=D(()=>oe.value.status),Re=async()=>{await K.getSources();let n;oe.value.allSources.forEach(t=>{const{pool_address:c,position_index:k}=JSON.parse(t.blockchainAddress);c==o.value.poolAddress&&k==o.value.index&&(n=t.id)}),console.log(n,"sourceID649==>"),K.deleteSource(n)},Ne=async()=>{var k,h,u,q,g,L,M,R,B,E,F,J,P;ae.value=!0,de("");const n=_(p.value,r.value.decimals)==0?"":`${S(p.value,r.value.decimals)} ${r.value.symbol}`,t=_(f.value,d.value.decimals)==0?"":`${S(f.value,d.value.decimals)} ${d.value.symbol}`;ye(e("tips.removeLiquidiyText",{from:T.value?t:n,and:_(p.value,r.value.decimals)==0||_(f.value,d.value.decimals)==0?"":"and",to:T.value?n:t})),z(!0);const c=$.value&&$.value.length>0&&I.value==100?e("modal.removeLiquidityText1"):e("modal.removeLiquidityText2");we(c);try{let m={};m={pool:{...o.value.poolInfo,coinA:o.value.token_a,coinB:o.value.token_b},coinTypeA:o.value.poolInfo.coinTypeA,coinTypeB:o.value.poolInfo.coinTypeB,position:o.value,delta_liquidity:new Fe(Ee(ue.value,0)),slippage:Number(x.value),rewards_num:$.value.length};const i=$.value;console.log($,"===>pendingRewarderArr"),m.coinTypeC=i[0]?i[0].coin_address:"",m.coinTypeD=i[1]?i[1].coin_address:"",m.coinTypeE=i[2]?i[2].coin_address:"",console.log(m,"===>params");const Je=await A.value.getRemoveLiquidityTransactionPayload(m);let U;if(w.value.chainName==="Aptos")U=await V.value.currentWallet.signAndSubmitTransaction(Je);else{const me=await V.value.currentWallet.signAndExecuteTransactionBlock(Je);U=A.value.handleTx(me),console.log("0331###remove###tx####",U)}if(U&&U.hash){de(U.hash),z(!1),_e(!0);const me={title:e("common.removeLiquidity"),desc:"",hash:U.hash,descTransactions:`Remove ${p.value} ${(k=r.value)==null?void 0:k.symbol} and ${f.value} ${(h=d.value)==null?void 0:h.symbol} 
             from the pool`,sender:V.value.address,chainName:w.value.chainName,tit:"Liquidity Removed",icon:"icon-icon-Removed",tokenInfo:{tokena:T.value?`${(q=d.value)==null?void 0:q.address}`:`${(u=r.value)==null?void 0:u.address}`,numa:T.value?`+ ${f.value}`:`+ ${p.value}`,logoa:T.value?a.value.tokensObj&&d.value&&d.value.address&&a.value.tokensObj[d.value.address]&&a.value.tokensObj[d.value.address].logoURI:a.value.tokensObj&&r.value&&r.value.address&&a.value.tokensObj[r.value.address]&&a.value.tokensObj[r.value.address].logoURI,tokenb:T.value?`${(g=r.value)==null?void 0:g.address}`:`${(L=d.value)==null?void 0:L.address}`,numb:T.value?`+ ${p.value}`:`+ ${f.value}`,logob:T.value?a.value.tokensObj&&r.value&&r.value.address&&a.value.tokensObj[r.value.address]&&a.value.tokensObj[r.value.address].logoURI:a.value.tokensObj&&d.value&&d.value.address&&a.value.tokensObj[d.value.address]&&a.value.tokensObj[d.value.address].logoURI},text:`Withdraw ${p.value} ${(M=r.value)==null?void 0:M.symbol} and ${f.value} ${(R=d.value)==null?void 0:R.symbol}`};w.value.chainName!=="Aptos"&&(me.res=U.res),A.value.showTransitionPending(me);const Ce=await A.value.watchTransaction(me);if($.value&&$.value.length>0&&(Number((B=i[0])==null?void 0:B.amount)!==0||m.coinTypeD&&Number((E=i[1])==null?void 0:E.amount)!==0||m.coinTypeE&&Number((F=i[2])==null?void 0:F.amount)!==0)){const De={title:e("common.removeLiquidity"),desc:"",hash:U.hash,tit:"Bonus Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:i[0].symbol,numa:`+ ${Number(i[0].amount)}`,logoa:a.value.tokensObj&&i[0]&&i[0].address&&a.value.tokensObj[i[0].address]&&a.value.tokensObj[i[0].address].logoURI,tokenb:m.coinTypeD?i[1].symbol:"",numb:m.coinTypeD?`+ ${Number(i[1].amount)}`:"",logob:m.coinTypeD?a.value.tokensObj&&i[1]&&i[1].address&&a.value.tokensObj[i[1].address]&&a.value.tokensObj[i[1].address].logoURI:"",tokenc:m.coinTypeE?i[2].symbol:"",numc:m.coinTypeE?`+ ${Number(i[2].amount)}`:"",logoc:m.coinTypeE?a.value.tokensObj&&i[2]&&i[2].address&&a.value.tokensObj[i[2].address]&&a.value.tokensObj[i[2].address].logoURI:""},text:`Withdraw ${p.value} ${(J=r.value)==null?void 0:J.symbol} and ${f.value} ${(P=d.value)==null?void 0:P.symbol}`},Le=await A.value.setTransations(De);console.log("9999transitionStatusFees",Ce,Le)}if(S(o.value.feeOwedA,o.value.token_a.decimals)!==0||S(o.value.feeOwedB,o.value.token_b.decimals)!==0){const De={title:"Claim",desc:"",hash:U.hash,chainName:w.value.chainName,tit:"Fees Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:`${o.value.token_a.symbol}`,numa:_(o.value.feeOwedA,o.value.token_a.decimals)==0?"":`+ ${S(o.value.feeOwedA,o.value.token_a.decimals)}`,logoa:_(o.value.feeOwedA,o.value.token_a.decimals)==0?"":a.value.tokensObj&&o.value&&o.value.token_a.address&&a.value.tokensObj[o.value.token_a.address]&&a.value.tokensObj[o.value.token_a.address].logoURI,tokenb:`${o.value.token_b.symbol}`,numb:_(o.value.feeOwedB,o.value.token_b.decimals)==0?"":`+ ${S(o.value.feeOwedB,o.value.token_b.decimals)}`,logob:_(o.value.feeOwedB,o.value.token_b.decimals)==0?"":a.value.tokensObj&&o.value&&o.value.token_b.address&&a.value.tokensObj[o.value.token_b.address]&&a.value.tokensObj[o.value.token_b.address].logoURI}},Le=await A.value.setTransations(De);console.log("9999transitionStatusFees",Ce,Le)}Ce&&Number(I.value)==100&&Ae.value=="authenticated"&&ve.value&&(await K.subscribePosition({pool_address:o.value.poolAddress,position_index:o.value.index},o.value.nftHash,!1),Re()),Ce&&(setTimeout(()=>{H()},3e3),setTimeout(()=>{H()},6e3),Number(I.value)==100&&j.push("/position"))}else z(!1),re(!0);ae.value=!1}catch(m){console.log("Remove error",m),ae.value=!1,z(!1),re(!0)}},Se=D(()=>a.value.tokensObj&&r.value.address&&a.value.tokensObj[r.value.address]&&a.value.tokensObj[r.value.address].logoURI),$e=D(()=>a.value.tokensObj&&d.value.address&&a.value.tokensObj[d.value.address]&&a.value.tokensObj[d.value.address].logoURI),Te=v(0),$=v([]);ne(()=>[o.value,a.value.addressLpTokens,a.value.tokensObj,a.value.RATES],async([n,t,c,k])=>{if(!se(n)&&!se(t)&&!se(c)&&!se(k)){const h=t[n.poolAddress];console.log(h,"===>pool");const u=await A.value.getTickDataByIndex(h.ticks_handle,Number(n.tick_lower_index)),q=await A.value.getTickDataByIndex(h.ticks_handle,Number(n.tick_upper_index));let g={};w.value.chainName==="Aptos"?g=await A.value.getPosRewardersAmount({poolAddress:n.poolAddress,positionName:n.tokenName,tickLowerData:u,tickUpperData:q}):g=await A.value.getPosRewardersAmount({poolAddress:n.poolAddress,pos:n.pos_object_id,positionHandle:h.position_manager.positions_handle});const L=[];let M=0;g.forEach((R,B)=>{const E=c[R.coin_address].decimals,F=c[R.coin_address],P=(Number(R.amount_owed.toString())>99999999999999?0:Number(R.amount_owed.toString()))/Math.pow(10,E);if(o.value.poolInfo[`rewarder_display${B+1}`]||Number(P)>0){console.log(R.amount_owed.toString(),"===>element.amount_owed.toString()");const m=k[R.coin_address].price,i=P*m;M+=i,L.push({...R,...F,amount:P,amountUSD:i})}}),$.value=L,Te.value=Number(Ee(M,2))}},{immediate:!0});const ve=v(!1),Oe=n=>{const t=n.sources;t.forEach(c=>{const{pool_address:k,position_index:h}=JSON.parse(c.blockchainAddress);console.log(k,h,"===>pool_address, position_index"),console.log(o.value.poolAddress,o.value.index,"===>positionInfo.value.index"),k==o.value.poolAddress&&Number(h)==Number(o.value.index)&&(ve.value=!0)}),console.log(t,"===>sources")};ne(()=>[oe.value.sourceGroups,o.value],([n,t])=>{n&&n.sources&&n.sources.length>0&&t&&!se(t)&&Oe(n)},{immediate:!0,deep:!0});const T=D(()=>{var n,t;return(t=(n=o.value)==null?void 0:n.poolInfo)==null?void 0:t.needReverse});return{removeAmountARates:he,removeAmountBRates:ie,removeAmountRates:le,receiveAmountARates:be,receiveAmountBRates:ke,showNum:S,fromCoinUrl:Se,toCoinUrl:$e,precision:pe,addCommom:_,loading:ae,wallet:V,toRemove:Ne,fromCoinAmount:p,toCoinAmount:f,pools:a,refresh:fe,amountArr:qe,sliderVal:I,positionInfo:o,slippage:x,importIcon:We,clickRefresh:Me,isShowSwapSetting:Ve,pendingRewarderArr:$,changeValue:Ie,needReverse:T,getCoinIcon:n=>{var t;return(n==null?void 0:n.logoURI)||(n==null?void 0:n.logo_url)||((t=a.value.tokensObj[n==null?void 0:n.address])==null?void 0:t.logo_url)||(w.value.theme==="default"?We("/image/coins/unknown.png"):We("/image/coins/sui-unknown.png"))},isFirstLoadding:G}}});const je=e=>(yo("data-v-5c273b5d"),e=e(),wo(),e),No={class:"remove-liquidity"},So={class:"remove-liquidity-top"},$o={class:"remove-title"},To={class:"right title-right"},Oo=je(()=>s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-a-icon-setslippage"})],-1)),Co=je(()=>s("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),jo=[Co],qo={class:"remove-liquidity-center"},Bo={class:"top"},Po={class:"left"},Uo={class:"right"},Do={class:"fee"},Lo={class:"bottom"},Eo={class:"add-amount"},Fo={class:"add-amount-header"},Wo={class:"amount-list"},Vo=["onClick"],Mo={class:"slider-box"},Jo={class:"receive"},Xo={class:"receiveTit"},Ho={class:"item"},zo={class:"left"},Ko=["src"],Qo={key:0,class:"right"},Yo={class:"item"},Zo={class:"left"},Go=["src"],xo={key:0,class:"right"},es={class:"remove-liquidity-bottom-box"},os={class:"induction remove-liquidity-bottom"},ss={class:"item"},ns={class:"induction-text"},as={class:"induction-value"},ts=["src"],is=je(()=>s("div",{class:"induction-text"},null,-1)),ls={class:"induction-value"},us=["src"],rs={class:"induction-text"},ds={class:"induction-value"},vs=["src"],ms=je(()=>s("svg",{"aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon-Remove"})],-1)),cs={key:0,class:"receive"},ps={class:"receiveTit"},fs={class:"left"},bs={key:0,class:"right"},ks={class:"item"},hs={class:"left"},Is=["src"],gs={key:0,class:"right"},_s={class:"item"},ys={class:"left"},ws=["src"],As={key:0,class:"right"},Rs={class:"loading-global"};function Ns(e,b,Ve,ae,fe,Me){var ie,le,Ie,a,r,d,o,ge,V,j,A,H,G,I,p,f,ue,x,ee,_e,re,z,ye,de,Pe,we,K,oe,Ae,Re,Ne,Se,$e,Te,$,ve,Oe,T,Ue,n,t,c,k,h;const qe=Ye,te=Ze,w=Ge,Be=ho,Y=Io,C=xe,Z=go,be=eo,ke=oo,he=_o;return y(),O("div",No,[N(qe),s("div",So,[s("div",$o,l(e.$t("common.removeLiquidity")),1),s("div",To,[s("div",{class:"slippage-icon",onClick:b[0]||(b[0]=u=>e.isShowSwapSetting=!0)},[Oo,s("span",null,l(e.slippage)+"%",1)]),(y(),O("svg",{"aria-hidden":"true",class:ce(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:b[1]||(b[1]=(...u)=>e.clickRefresh&&e.clickRefresh(...u))},jo,2))])]),s("div",qo,[s("div",Bo,[s("div",Po,[e.positionInfo?(y(),ze(te,{key:0,"from-coin":e.needReverse?e.positionInfo.token_b:e.positionInfo.token_a,"to-coin":e.needReverse?e.positionInfo.token_a:e.positionInfo.token_b},null,8,["from-coin","to-coin"])):W("",!0),s("div",Uo,[s("div",Do,l(e.positionInfo.fee*100)+"%",1)])]),N(w,{"current-status":e.positionInfo.currentStatus||""},null,8,["current-status"])]),s("div",Lo,[s("div",Eo,[s("div",Fo,[s("span",null,l(e.$t("common.amount")),1),s("div",Wo,[(y(!0),O(Ke,null,Qe(e.amountArr,(u,q)=>(y(),O("div",{key:q,class:ce(["amount-item",e.sliderVal==u.value?"amount-item-active":""]),onClick:g=>e.sliderVal=u.value},l(u.name),11,Vo))),128))])]),s("div",Mo,[N(Be,{value:e.sliderVal,"onUpdate:value":b[2]||(b[2]=u=>e.sliderVal=u),suffix:"%",onChange:b[3]||(b[3]=u=>e.changeValue(u.target.value))},null,8,["value"]),N(Y,{value:e.sliderVal,"onUpdate:value":b[4]||(b[4]=u=>e.sliderVal=u)},null,8,["value"])])])])]),s("div",Jo,[s("div",Xo,l(e.$t("newAdd.receive")),1),s("div",{class:ce(e.needReverse?"receive-item-box reverse":"receive-item-box")},[s("div",Ho,[s("div",zo,[s("img",{src:e.fromCoinUrl||e.getCoinIcon((ie=e.positionInfo)==null?void 0:ie.token_a)},null,8,Ko),N(C,{address:(Ie=(le=e.positionInfo)==null?void 0:le.token_a)==null?void 0:Ie.address,"style-params":{width:"8px",height:"8px",left:"15px",bottom:"0px"}},null,8,["address"]),s("span",null,l(("showNum"in e?e.showNum:X(S))(e.fromCoinAmount,e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.decimals)),1),Q(" "+l(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol)+" "+l(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.labels&&e.positionInfo.token_a.labels[0]?`(${e.positionInfo.token_a.labels[0]})`:""),1)]),e.receiveAmountARates>0?(y(),O("div",Qo,"≈ $"+l(e.receiveAmountARates),1)):W("",!0)]),s("div",Yo,[s("div",Zo,[s("img",{src:e.toCoinUrl||e.getCoinIcon((a=e.positionInfo)==null?void 0:a.token_b)},null,8,Go),N(C,{address:(d=(r=e.positionInfo)==null?void 0:r.token_b)==null?void 0:d.address,"style-params":{width:"8px",height:"8px",left:"15px",bottom:"0px"}},null,8,["address"]),s("span",null,l(("showNum"in e?e.showNum:X(S))(e.toCoinAmount,e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.decimals)),1),Q(" "+l(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol)+" "+l(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.labels&&e.positionInfo.token_b.labels[0]?`(${e.positionInfo.token_b.labels[0]})`:""),1)]),e.receiveAmountBRates>0?(y(),O("div",xo,"≈ $"+l(e.receiveAmountBRates),1)):W("",!0)])],2)]),s("div",es,[s("div",os,[s("div",ss,[s("div",ns,l(e.$t("common.fees")),1),s("div",as,[s("img",{src:e.getCoinIcon(e.needReverse?(ge=e.positionInfo)==null?void 0:ge.token_b:(o=e.positionInfo)==null?void 0:o.token_a)},null,8,ts),Q(" "+l(("showNum"in e?e.showNum:X(S))(e.needReverse?(j=e.positionInfo)==null?void 0:j.feeOwedB:(V=e.positionInfo)==null?void 0:V.feeOwedA,e.needReverse?(I=(G=e.positionInfo)==null?void 0:G.token_b)==null?void 0:I.decimals:(H=(A=e.positionInfo)==null?void 0:A.token_a)==null?void 0:H.decimals))+" ",1),N(C,{address:e.needReverse?(x=(ue=e.positionInfo)==null?void 0:ue.token_b)==null?void 0:x.address:(f=(p=e.positionInfo)==null?void 0:p.token_a)==null?void 0:f.address,"style-params":{width:"8px",height:"8px",left:"10px",bottom:"0px"}},null,8,["address"]),s("span",null,l(e.needReverse?(z=(re=e.positionInfo)==null?void 0:re.token_b)==null?void 0:z.symbol:(_e=(ee=e.positionInfo)==null?void 0:ee.token_a)==null?void 0:_e.symbol),1)])]),s("div",{class:ce(e.pendingRewarderArr.length>0?"item item-boder":"item")},[is,s("div",ls,[s("img",{src:e.getCoinIcon(e.needReverse?(de=e.positionInfo)==null?void 0:de.token_a:(ye=e.positionInfo)==null?void 0:ye.token_b)},null,8,us),Q(" "+l(("showNum"in e?e.showNum:X(S))(e.needReverse?(we=e.positionInfo)==null?void 0:we.feeOwedA:(Pe=e.positionInfo)==null?void 0:Pe.feeOwedB,e.needReverse?(Re=(Ae=e.positionInfo)==null?void 0:Ae.token_a)==null?void 0:Re.decimals:(oe=(K=e.positionInfo)==null?void 0:K.token_b)==null?void 0:oe.decimals))+" ",1),N(C,{address:e.needReverse?(Te=($e=e.positionInfo)==null?void 0:$e.token_a)==null?void 0:Te.address:(Se=(Ne=e.positionInfo)==null?void 0:Ne.token_b)==null?void 0:Se.address,"style-params":{width:"8px",height:"8px",left:"10px",bottom:"0px"}},null,8,["address"]),s("span",null,l(e.needReverse?(T=(Oe=e.positionInfo)==null?void 0:Oe.token_a)==null?void 0:T.symbol:(ve=($=e.positionInfo)==null?void 0:$.token_b)==null?void 0:ve.symbol),1)])],2),e.positionInfo.is_display_rewarder&&e.sliderVal==100?(y(!0),O(Ke,{key:0},Qe(e.pendingRewarderArr,(u,q)=>(y(),O("div",{key:u,class:"item"},[s("div",rs,l(q==0?e.$t("common.rewards"):""),1),s("div",ds,[s("img",{src:e.getCoinIcon(u)},null,8,vs),Q(" "+l(u.amount>1e-6?u.amount:u.amount===0?"0":"<0.000001")+" ",1),s("span",null,l(u.symbol),1)])]))),128)):W("",!0)])]),N(Z,{disabled:e.wallet.connected?Number(e.sliderVal)==0||e.loading:!1,class:"remove-btn big-btn",onClick:b[5]||(b[5]=u=>e.wallet.connected?e.toRemove():e.wallet.setIsShowWalletModal(!0))},{default:fo(()=>[ms,s("span",null,l(e.wallet.connected?e.$t("button.remove"):e.$t("button.connectWallet")),1)]),_:1},8,["disabled"]),N(be),e.sliderVal<100?(y(),O("div",cs,[s("div",ps,[s("div",fs,l(e.$t("newAdd.remainingPosition")),1),e.removeAmountRates>0?(y(),O("div",bs,"$"+l(e.removeAmountRates),1)):W("",!0)]),s("div",{class:ce(e.needReverse?"receive-item-box reverse":"receive-item-box")},[s("div",ks,[s("div",hs,[s("img",{src:e.fromCoinUrl||e.getCoinIcon((Ue=e.positionInfo)==null?void 0:Ue.token_a)},null,8,Is),N(C,{address:(t=(n=e.positionInfo)==null?void 0:n.token_a)==null?void 0:t.address,"style-params":{width:"8px",height:"8px",left:"18px",bottom:"0px"}},null,8,["address"]),s("span",null,l(("showNum"in e?e.showNum:X(S))(("precision"in e?e.precision:X(pe)).minus(Number(e.positionInfo.amountA),Number(e.fromCoinAmount)),e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.decimals)),1),Q(" "+l(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol)+" "+l(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.labels&&e.positionInfo.token_a.labels[0]?`(${e.positionInfo.token_a.labels[0]})`:""),1)]),e.removeAmountARates>0?(y(),O("div",gs,"≈ $"+l(e.removeAmountARates),1)):W("",!0)]),s("div",_s,[s("div",ys,[s("img",{src:e.toCoinUrl||e.getCoinIcon((c=e.positionInfo)==null?void 0:c.token_b)},null,8,ws),N(C,{address:(h=(k=e.positionInfo)==null?void 0:k.token_b)==null?void 0:h.address,"style-params":{width:"8px",height:"8px",left:"18px",bottom:"0px"}},null,8,["address"]),s("span",null,l(("showNum"in e?e.showNum:X(S))(("precision"in e?e.precision:X(pe)).minus(Number(e.positionInfo.amountB),Number(e.toCoinAmount)),e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.decimals)),1),Q(" "+l(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol)+" "+l(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.labels&&e.positionInfo.token_b.labels[0]?`(${e.positionInfo.token_b.labels[0]})`:""),1)]),e.removeAmountBRates>0?(y(),O("div",As,"≈ $"+l(e.removeAmountBRates),1)):W("",!0)])],2)])):W("",!0),e.isShowSwapSetting?(y(),ze(ke,{key:1,onOnClose:b[6]||(b[6]=u=>e.isShowSwapSetting=!1)})):W("",!0),bo(s("div",Rs,[N(he)],512),[[ko,e.pools.currentPositionLoading||e.isFirstLoadding]])])}const Ws=po(Ro,[["render",Ns],["__scopeId","data-v-5c273b5d"]]);export{Ws as default};
