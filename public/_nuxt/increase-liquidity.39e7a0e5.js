import{_ as Ye}from"./back.eb3dde6a.js";import{_ as Ze}from"./coin-pair-name.4d50fd6a.js";import{_ as _e}from"./status-block.b57fce77.js";import{_ as Je,a as Ke,c as xe,b as eo}from"./add-liquidity.c8ec4502.js";import{_ as oo,a as no}from"./coin-select.f29087a2.js";import{a as io,_ as so}from"./network-tips.feb639b7.js";import{a as ao,u as lo,j as to,b as uo,p as We,l as oe,d as ro,f as vo,h as mo,g as z,c as fo,D as f,e as fe,m as co,o as po,s as ze}from"./pool.cc4a70b7.js";import{p as pe}from"./precision.a7a6c57b.js";import{a as bo,l as ko,m as O,r as c,b as Io,v as yo,L as wo,A as Fe,e as ho,o as k,f as w,h as n,i as j,t as l,x as Ge,u as S,s as ce,w as go,c as Xe,E as Co,G as So,B as No,J as Ao,p as $o,k as Po}from"./entry.df2391fb.js";/* empty css              */import{i as Ro}from"./import-icon.de3e6c66.js";import"./token-warning.d607a2a7.js";/* empty css              */import"./c-switch.db3f7ed8.js";import"./notifi.a64e29d6.js";/* empty css              *//* empty css              */import"./img-no-Positions_2x.767bd51b.js";const Bo=bo({setup(){const{t:e,locale:a}=ko(),be=ao(),R=O(()=>be),ke=c(20),F=c(0),Ie=c(null);let ne=c(!1);const ye=c(!1),G=c(!1),J=c("fromCoin"),ie=c(""),se=c(""),ae=c(!1),le=c(!1),A=c(!0),r=c(""),t=c(""),te=c(!1),we=c(!1),K=O(()=>be.slippage),he=O(()=>{const o=Number(r.value)>Number(g.value),p=Number(t.value)>Number(C.value);return ue.value?e("button.enterAmount"):o?e("button.insufficientBalance",{name:i.value.symbol}):p?e("button.insufficientBalance",{name:s.value.symbol}):e("newAdd.addMore")}),ge=O(()=>d.value&&!m.value&&t.value||m.value&&!d.value&&r.value?!1:!(!m.value&&!d.value&&t.value&&r.value)),Ce=O(()=>{const o=Number(r.value)>Number(g.value),p=Number(t.value)>Number(C.value);return d.value&&!m.value&&!p||m.value&&!d.value&&!o?!1:!(!d.value&&!m.value&&!o&&!p.value)}),ue=O(()=>d.value&&!m.value&&!t.value||m.value&&!d.value&&!r.value?!0:!d.value&&!m.value&&(!r.value||!t.value)),E=c(""),V=c(""),W=c(""),Se=lo(),b=O(()=>Se),i=c({}),s=c({}),u=c(b.value.currentPositionInfo||{}),Ne=to(),N=O(()=>Ne),U=Io();yo(()=>{re()}),wo(()=>{N.value.connected||U.push("/position")});const L=O(()=>R.value.chainName?uo(R.value.chainName):{}),Q=async()=>{b.value.setCurrentPositionLoading(!0);const o=U.currentRoute.value.query.token||"",p=U.currentRoute.value.query.collect||"",I=U.currentRoute.value.query.pos||"";R.value.chainName==="Aptos"?o&&p&&(E.value=p,V.value=U.currentRoute.value.query.address,W.value=o,b.value.setCurrentPositionInfo(V.value,E.value,W.value,R.value.chainName),u.value=b.value.currentPositionInfo):I&&(E.value=p,V.value=U.currentRoute.value.query.address,W.value=o,b.value.setCurrentPositionInfo(V.value,E.value,W.value,R.value.chainName,I),u.value=b.value.currentPositionInfo)};Fe(()=>b.value.addressLpTokens,o=>{fo(o)||Q()},{immediate:!0}),Fe(()=>b.value.currentPositionInfo,o=>{if(o){u.value=o,i.value=u.value.token_a,s.value=u.value.token_b;let p=Number(u.value.tick_lower_index),I=Number(u.value.tick_upper_index);const y=Number(u.value.current_tick_index);(u.value.maxPrice.indexOf("+")>0||u.value.maxPrice==="∞"?"∞":u.value.maxPrice)=="∞"||y>p&&y<I?(d.value=!1,m.value=!1):y>=I?(r.value="",d.value=!0,m.value=!1):y<=p?(d.value=!1,m.value=!0,t.value=""):(d.value=!0,r.value="",m.value=!0,t.value=""),_()}});const d=c(!1),m=c(!1),D=c({}),Y=c(),Z=c(),_=()=>{var me;if(!u.value||!r.value&&!t.value)return;const{TickMath:o,TickUtil:p}=L.value;let I=u.value.minPrice,y=u.value.maxPrice.indexOf("+")>0?"∞":u.value.maxPrice;console.log(u.value,"positionInfo.value====>");let h=Number(u.value.tick_lower_index),$=Number(u.value.tick_upper_index);const v=Number(u.value.current_tick_index);let x,ee,je=Number(I).toString(),De=u.value.maxPrice.indexOf("+")>0||u.value.maxPrice==="∞"?"∞":Number(y);if(je=="0"&&De=="∞"?(h=Number(u.value.tick_lower_index),$=Number(u.value.tick_upper_index)):(x=o.priceToSqrtPriceX64(new f(I),i.value.decimals,s.value.decimals),ee=o.priceToSqrtPriceX64(new f(y),i.value.decimals,s.value.decimals)),Y.value=h,Z.value=$,console.log(h,$,"tick_lowertick_lower"),y!=="∞"&&h>=$){d.value=!0,r.value="",m.value=!0,t.value="";return}if(y=="∞"||v>h&&v<$){console.log("0413###increase###11111"),d.value=!1,m.value=!1;let T;if(r.value||t.value){if(A.value){const Ve=new f(r.value).mul(Math.pow(10,i.value.decimals)).toString();T=new fe(Ve)}else{const Ve=new f(t.value).mul(Math.pow(10,s.value.decimals)).toString();T=new fe(Ve)}const{liquidityAmount:q,tokenMaxA:P,tokenMaxB:M,tokenMaxAOrigin:He,tokenMaxBOrigin:Qe}=L.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:i.value,tokenB:s.value,lowerTick:h,upperTick:$,coinAmount:T,iscoinA:X.value?A.value:!A.value,roundUp:!0,slippage:Number(K.value)/100,curSqrtPrice:new fe(u.value.current_sqrt_price)});D.value={liquidityAmount:q,tokenMaxA:P,tokenMaxB:M,tokenMaxAOrigin:He,tokenMaxBOrigin:Qe},X.value?A.value?t.value=Number(M)>0?M:"":r.value=Number(P)>0?P:"":A.value?t.value=P:r.value=M}}else if(v>=$){if(console.log("0413###increase###22222"),r.value="",d.value=!0,m.value=!1,r.value||t.value){let T;const q=new f(t.value).mul(Math.pow(10,(me=s.value)==null?void 0:me.decimals)).toString();T=new fe(q),D.value={liquidityAmount:co(x,ee,T),tokenMaxA:0,tokenMaxB:t.value}}}else if(v<=h){if(console.log("0413###increase###33333"),d.value=!1,m.value=!0,t.value="",r.value||t.value){let T;const q=new f(r.value).mul(Math.pow(10,i.value.decimals)).toString();T=new fe(q),D.value={liquidityAmount:po(x,ee,T),tokenMaxA:r.value,tokenMaxB:0}}}else console.log("0413###increase###4444"),d.value=!0,r.value="",m.value=!0,t.value=""};Fe(r,(o,p)=>{o&&_(),o==""&&(t.value="")}),Fe(t,(o,p)=>{o&&_(),o==""&&(r.value="")});const g=O(()=>N.value.assets&&i.value&&N.value.assets[i.value.address]?We(N.value.assets[i.value.address].balance,i.value.decimals):0),C=O(()=>N.value.assets&&s.value&&N.value.assets[s.value.address]?We(N.value.assets[s.value.address].balance,s.value.decimals):0),X=c(!0);function Ae(o){X.value=o}const $e=()=>{Q(),F.value=0,ne.value=!0,setTimeout(()=>{ne.value=!1},1e3)},Pe=()=>{const o=i.value;i.value=s.value,s.value=o,le.value=!le.value},Re=o=>{var p,I,y,h;J.value=o,o==="fromCoin"?(ie.value=((p=s.value)==null?void 0:p.symbol)||"",se.value=((I=i.value)==null?void 0:I.symbol)||""):(ie.value=((y=i.value)==null?void 0:y.symbol)||"",se.value=((h=s.value)==null?void 0:h.symbol)||""),ae.value=!0},Be=o=>{J.value==="fromCoin"?(s.value&&o.symbol.toLowerCase()===(s==null?void 0:s.value.symbol.toLowerCase())&&(s.value=null),i.value=o):(i.value&&o.symbol.toLowerCase()===(i==null?void 0:i.value.symbol.toLowerCase())&&(i.value=null),s.value=o),ae.value=!1},Te=o=>{o==="fromCoin"?(A.value=!0,R.value.chainName==="Aptos"?r.value=g.value>0?i.value.symbol=="APT"?new f(Number(g.value)).sub(new f(.1)).lt(new f(0))?"0":new f(Number(g.value)).sub(new f(.1)).toString():String(g.value):"":r.value=g.value>0?i.value.symbol=="SUI"?new f(Number(g.value)).sub(new f(.05)).lt(new f(0))?"0":new f(Number(g.value)).sub(new f(.05)).toString():String(g.value):""):(A.value=!1,R.value.chainName==="Aptos"?t.value=C.value>0?s.value.symbol=="APT"?new f(Number(C.value)).sub(new f(.1)).lt(new f(0))?"0":new f(Number(C.value)).sub(new f(.1)).toString():String(C.value):"":t.value=C.value>0?s.value.symbol=="SUI"?new f(Number(C.value)).sub(new f(.05)).lt(new f(0))?"0":new f(Number(C.value)).sub(new f(.05)).toString():String(C.value):"")},Oe=o=>{o==="fromCoin"?(A.value=!0,r.value=ze(new f(Number(g.value)).div(2).toString(),i.value.decimals).toString()):(A.value=!1,t.value=ze(new f(Number(C.value)).div(2).toString(),s.value.decimals).toString())},re=()=>{Ie.value=setInterval(()=>{ye.value||F.value<ke.value&&(F.value+=1,F.value===ke.value&&(F.value=0))},1e3)},{setIsShowSuccess:qe,setIsShowRejected:ve,setIsShowWaiting:H,setTransactionDesc:Le,setTransactionTxid:de,setPositiomNum:Me}=be,Ue=async()=>{var y,h,$,v,x,ee,je,De,me,T;te.value=!1,G.value=!0,de("");const o=d.value?"":`${r.value} ${(y=i.value)==null?void 0:y.symbol}`,p=m.value?"":`${t.value} ${(h=s.value)==null?void 0:h.symbol}`;Le(e("tips.increaseLiquiditySuccess",{from:B.value?p:o,and:!d.value&&!m.value?"and":"",to:B.value?o:p})),H(!0);const I=A.value;console.log(I,"===>fix_amount_a"),console.log(Y.value,"tickLower.value===>"),console.log(Z.value,"tickUpper.value,===>"),console.log("0222###increase###positionInfo###",u);try{const q=await L.value.getAddLiquidityTransactionPayload({pool:{poolAddress:u.value.poolAddress,token_a:u.value.token_a,token_b:u.value.token_b},amount:I?D.value.tokenMaxA:D.value.tokenMaxB,fix_amount_a:I,tick_lower:Y.value,tick_upper:Z.value,index:R.value.chainName==="Aptos"?u.value.index:u.value.pos_object_id,slippage:Number(K.value)/100,roundUp:!0});console.log(q,"===>payloadAdd11111");let P;if(R.value.chainName==="Aptos")P=await N.value.currentWallet.signAndSubmitTransaction(q);else{const M=await N.value.currentWallet.signAndExecuteTransactionBlock(q);P=L.value.handleTx(M)}if(console.log("toAdd###tx###",P),P&&P.hash){de(P.hash),H(!1),qe(!0),console.log(u,"===>positionInfo");const M={title:"Supplied",desc:e("tips.addLiquiditySuccessText",{from:d.value?"":`${r.value} ${($=i.value)==null?void 0:$.symbol}`,and:!d.value&&!m.value?"and":"",to:m.value?"":`${t.value} ${(v=s.value)==null?void 0:v.symbol}`}),hash:P.hash,tit:"Liquidity Increased",icon:"icon-icon-Increased",tokenInfo:{tokena:B.value?`${(ee=s.value)==null?void 0:ee.address}`:`${(x=i.value)==null?void 0:x.address}`,numa:B.value?`- ${t.value}`:`- ${r.value}`,logoa:B.value?b.value.tokensObj&&s.value&&s.value.address&&b.value.tokensObj[s.value.address]&&b.value.tokensObj[s.value.address].logoURI:b.value.tokensObj&&i.value&&i.value.address&&b.value.tokensObj[i.value.address]&&b.value.tokensObj[i.value.address].logoURI,tokenb:B.value?`${(De=i.value)==null?void 0:De.address}`:`${(je=s.value)==null?void 0:je.address}`,numb:B.value?`- ${r.value}`:`- ${t.value}`,logob:B.value?b.value.tokensObj&&i.value&&i.value.address&&b.value.tokensObj[i.value.address]&&b.value.tokensObj[i.value.address].logoURI:b.value.tokensObj&&s.value&&s.value.address&&b.value.tokensObj[s.value.address]&&b.value.tokensObj[s.value.address].logoURI},text:`Deopsit ${d.value?"":`${r.value} ${(me=i.value)==null?void 0:me.symbol}`} ${!d.value&&!m.value?"and":""} ${m.value?"":`${t.value} ${(T=s.value)==null?void 0:T.symbol}`}`};R.value.chainName!=="Aptos"&&(M.res=P.res),L.value.showTransitionPending(M),await L.value.watchTransaction(M)&&setTimeout(()=>{Q(),L.value.getAccount(N.value.address)},1e3),Me()}else H(!1),ve(!0);r.value="",t.value="",G.value=!1}catch(q){r.value="",t.value="",console.log("addError###",q),G.value=!1,H(!1),ve(!0)}},B=O(()=>{var o,p;return(p=(o=u.value)==null?void 0:o.poolInfo)==null?void 0:p.needReverse});return{halfBtnSelect:Oe,showNum:oe,precision:pe,noEnterAmount:ue,insufficientBalance:Ce,isDisabled:ge,prettyAmount:We,addCommom:ro,wallet:N,addLoading:G,toAdd:Ue,fromCoinBlance:g,toCoinBlance:C,storeIndex:R,showToCoinLock:m,showFromCoinLock:d,pools:b,t:e,importIcon:Ro,changeDirect:Ae,fixD:vo,decimalFormat:mo,decimalUi:z,direct:X,positionInfo:u,clickRefresh:$e,refresh:ne,autoRefreshTime:ke,countdown:F,setMarketTimer:re,marketTimer:Ie,loading:ye,slippage:K,fromCoin:i,toCoin:s,openCoinSelect:Re,onCoinSelect:Be,existingCoins:ie,lastSelectCoin:se,currentCoinKey:J,showCoinSelect:ae,fromCoinAmount:r,toCoinAmount:t,maxBtnSelect:Te,fixedFromCoin:A,change:le,toggle:Pe,addLiquidityBtnText:he,isShowLiquidityModal:te,isShowSwapSetting:we,needReverse:B}}});const Ee=e=>($o("data-v-d4b797dc"),e=e(),Po(),e),To={class:"increase-liquidity-container"},Oo={class:"back-title"},qo={class:"title"},Lo={class:"right title-right"},Mo=Ee(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-a-icon-setslippage"})],-1)),Uo=Ee(()=>n("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),jo=[Uo],Do={class:"price-range"},Fo={class:"price-range-header"},Eo={class:"left"},Vo={class:"right"},Wo={class:"fee"},Xo={class:"price-range-footer"},Ho={class:"select-range"},zo={class:"range-bottom"},Go={key:0,class:"price"},Jo={key:1,class:"price"},Ko={class:"price-range-block"},Qo={class:"price-item"},Yo={class:"title"},Zo={key:0,class:"price"},_o={key:1,class:"price"},xo={key:2,class:"text"},en={key:3,class:"text"},on={class:"price-item"},nn={class:"title"},sn={key:0,class:"price"},an={key:1,class:"price"},ln={key:2,class:"text"},tn={key:3,class:"text"},un={class:"text-block"},rn={class:"note"},vn={class:"note"},dn={class:"card-item"},mn={key:0,class:"unilateral"},fn={key:0,src:Je,alt:""},cn={key:1,src:Ke,alt:""},pn={class:"card-item"},bn={key:0,class:"unilateral"},kn={key:0,src:Je,alt:""},In={key:1,src:Ke,alt:""},yn={class:"induction remove-liquidity-bottom"},wn={class:"item"},hn={class:"induction-text"},gn={class:"induction-value"},Cn={class:"item"},Sn=Ee(()=>n("div",{class:"induction-text"},null,-1)),Nn={class:"induction-value"},An=Ee(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-icon-add"})],-1)),$n={class:"loading-global"};function Pn(e,a,be,R,ke,F){var t,te,we,K,he,ge,Ce,ue,E,V,W,Se,b,i,s,u,Ne,N,U,L,Q,d,m,D,Y,Z,_,g,C,X,Ae,$e,Pe,Re,Be,Te,Oe,re,qe,ve,H,Le,de,Me,Ue,B,o,p,I,y,h,$;const Ie=Ye,ne=Ze,ye=_e,G=xe,J=oo,ie=No,se=io,ae=no,le=so,A=eo,r=Ao;return k(),w("div",To,[n("div",Oo,[j(Ie),n("div",qo,[n("p",null,l(e.$t("common.increaseLiquidity")),1),n("div",Lo,[n("div",{class:"slippage-icon",onClick:a[0]||(a[0]=v=>e.isShowSwapSetting=!0)},[Mo,n("span",null,l(e.slippage)+"%",1)]),(k(),w("svg",{"aria-hidden":"true",class:Ge(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:a[1]||(a[1]=(...v)=>e.clickRefresh&&e.clickRefresh(...v))},jo,2))])])]),n("div",Do,[n("div",Fo,[n("div",Eo,[j(ne,{"from-coin":e.needReverse?e.positionInfo.token_b:e.positionInfo.token_a,"to-coin":e.needReverse?e.positionInfo.token_a:e.positionInfo.token_b},null,8,["from-coin","to-coin"]),n("div",Vo,[n("div",Wo,l(e.positionInfo.fee*100)+"%",1)])]),j(ye,{"current-status":e.positionInfo.currentStatus||""},null,8,["current-status"])]),n("div",Xo,[n("div",Ho,[n("p",null,l(e.$t("common.selectedRange")),1),n("div",zo,[(e.needReverse?!e.direct:e.direct)?(k(),w("div",Go," 1 "+l(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol)+" ≈ "+l(("decimalUi"in e?e.decimalUi:S(z))((t=e.positionInfo)==null?void 0:t.currentPrice,e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.decimals))+" "+l(e.positionInfo&&e.positionInfo.token_b&&((te=e.positionInfo)==null?void 0:te.token_b.symbol)),1)):(k(),w("div",Jo," 1 "+l(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol)+" ≈ "+l(("decimalUi"in e?e.decimalUi:S(z))(1/((we=e.positionInfo)==null?void 0:we.currentPrice),e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.decimals))+" "+l(e.positionInfo&&e.positionInfo.token_a&&((K=e.positionInfo)==null?void 0:K.token_a.symbol)),1)),j(G,{direct:e.direct,"form-coin-symbol":e.needReverse?(ue=(Ce=e.positionInfo)==null?void 0:Ce.token_b)==null?void 0:ue.symbol:(ge=(he=e.positionInfo)==null?void 0:he.token_a)==null?void 0:ge.symbol,"to-coin-symbol":e.needReverse?(Se=(W=e.positionInfo)==null?void 0:W.token_a)==null?void 0:Se.symbol:(V=(E=e.positionInfo)==null?void 0:E.token_b)==null?void 0:V.symbol,onChangeDirect:a[2]||(a[2]=v=>e.direct=v)},null,8,["direct","form-coin-symbol","to-coin-symbol"])])]),n("div",Ko,[n("div",Qo,[n("div",Yo,l(e.$t("common.minPrice")),1),(e.needReverse?!e.direct:e.direct)?(k(),w("p",Zo,l(((b=e.positionInfo)==null?void 0:b.minPrice)&&("decimalUi"in e?e.decimalUi:S(z))(e.positionInfo.minPrice,6)),1)):(k(),w("p",_o,l(e.positionInfo&&e.positionInfo.minPrice&&("decimalUi"in e?e.decimalUi:S(z))(1/((i=e.positionInfo)==null?void 0:i.maxPrice),6)),1)),(e.needReverse?e.direct:!e.direct)?(k(),w("div",xo,l(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol)+" per "+l(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol),1)):(k(),w("div",en,l(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol)+" per "+l(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol),1))]),n("div",on,[n("div",nn,l(e.$t("common.maxPrice")),1),(e.needReverse?!e.direct:e.direct)?(k(),w("p",sn,l(((u=(s=e.positionInfo)==null?void 0:s.maxPrice)==null?void 0:u.indexOf("+"))>0||((Ne=e.positionInfo)==null?void 0:Ne.maxPrice)==="∞"?"∞":("decimalUi"in e?e.decimalUi:S(z))(e.positionInfo.maxPrice,6)),1)):(k(),w("p",an,l(((U=(N=e.positionInfo)==null?void 0:N.maxPrice)==null?void 0:U.indexOf("+"))>0||((L=e.positionInfo)==null?void 0:L.minPrice)=="0"?"∞":("decimalUi"in e?e.decimalUi:S(z))(1/e.positionInfo.minPrice,6)),1)),(e.needReverse?e.direct:!e.direct)?(k(),w("div",ln,l(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol)+" per "+l(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol),1)):(k(),w("div",tn,l(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol)+" per "+l(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol),1))])]),n("div",un,[n("div",rn,l(e.t("common.positionwillBe",{symbol:(e.needReverse?!e.direct:e.direct)?`${e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol}`:`${e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol}`})),1),n("div",vn,l(e.t("common.positionwillBe",{symbol:(e.needReverse?!e.direct:e.direct)?`${e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol}`:`${e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol}`})),1)])])]),n("div",{class:Ge(e.needReverse?"card-container reverse":"card-container")},[n("div",dn,[j(J,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":a[3]||(a[3]=v=>e.fromCoinAmount=v),"has-arrow":!1,"input-value":e.fromCoinAmount,"coin-symbol":e.fromCoin?e.fromCoin.symbol:null,"coin-name":e.fromCoin?e.fromCoin.name:null,balance:e.fromCoinBlance,"coin-icon":e.fromCoin?e.fromCoin.logoURI:"",address:e.fromCoin?e.fromCoin.address:"","swap-direction":"From",onOnMax:a[4]||(a[4]=v=>e.maxBtnSelect("fromCoin")),onOnHalf:a[5]||(a[5]=v=>e.halfBtnSelect("fromCoin")),onOnInput:a[6]||(a[6]=v=>e.fromCoinAmount=v),onOnFocus:a[7]||(a[7]=()=>{e.fixedFromCoin=!0}),onOnSelect:a[8]||(a[8]=v=>e.openCoinSelect("fromCoin"))},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"]),e.showFromCoinLock?(k(),w("div",mn,[e.storeIndex.theme=="default"?(k(),w("img",fn)):(k(),w("img",cn)),n("p",null,l(e.$t("tips.marketprice")),1)])):ce("",!0)]),n("div",pn,[j(J,{modelValue:e.toCoinAmount,"onUpdate:modelValue":a[9]||(a[9]=v=>e.toCoinAmount=v),"has-arrow":!1,"input-value":e.toCoinAmount,"coin-symbol":e.toCoin?e.toCoin.symbol:null,"coin-name":e.toCoin?e.toCoin.name:null,balance:e.toCoinBlance,"swap-direction":"To","coin-icon":e.toCoin?e.toCoin.logoURI:"",address:e.toCoin?e.toCoin.address:"",onOnMax:a[10]||(a[10]=v=>e.maxBtnSelect("toCoin")),onOnHalf:a[11]||(a[11]=v=>e.halfBtnSelect("toCoin")),onOnInput:a[12]||(a[12]=v=>e.toCoinAmount=v),onOnFocus:a[13]||(a[13]=()=>{e.fixedFromCoin=!1}),onOnSelect:a[14]||(a[14]=v=>e.openCoinSelect("toCoin"))},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"]),e.showToCoinLock?(k(),w("div",bn,[e.storeIndex.theme=="default"?(k(),w("img",kn)):(k(),w("img",In)),n("p",null,l(e.$t("tips.marketprice")),1)])):ce("",!0)])],2),n("div",yn,[n("div",wn,[n("div",hn,l(e.$t("common.liquidity")),1),n("div",gn,l(("showNum"in e?e.showNum:S(oe))(e.needReverse?e.positionInfo.amountB:e.positionInfo.amountA,e.needReverse?(D=(m=e.positionInfo)==null?void 0:m.token_b)==null?void 0:D.decimals:(d=(Q=e.positionInfo)==null?void 0:Q.token_a)==null?void 0:d.decimals))+" "+l(e.needReverse?(g=(_=e.positionInfo)==null?void 0:_.token_b)==null?void 0:g.symbol:(Z=(Y=e.positionInfo)==null?void 0:Y.token_a)==null?void 0:Z.symbol)+" → "+l(("showNum"in e?e.showNum:S(oe))(e.needReverse?("precision"in e?e.precision:S(pe)).plus(Number(e.positionInfo.amountB),Number(e.toCoinAmount)):("precision"in e?e.precision:S(pe)).plus(Number(e.positionInfo.amountA),Number(e.fromCoinAmount)),e.needReverse?($e=(Ae=e.positionInfo)==null?void 0:Ae.token_b)==null?void 0:$e.decimals:(X=(C=e.positionInfo)==null?void 0:C.token_a)==null?void 0:X.decimals))+" "+l(e.needReverse?(Te=(Be=e.positionInfo)==null?void 0:Be.token_b)==null?void 0:Te.symbol:(Re=(Pe=e.positionInfo)==null?void 0:Pe.token_a)==null?void 0:Re.symbol),1)]),n("div",Cn,[Sn,n("div",Nn,l(("showNum"in e?e.showNum:S(oe))(e.needReverse?e.positionInfo.amountA:e.positionInfo.amountB,e.needReverse?(ve=(qe=e.positionInfo)==null?void 0:qe.token_a)==null?void 0:ve.decimals:(re=(Oe=e.positionInfo)==null?void 0:Oe.token_b)==null?void 0:re.decimals))+" "+l(e.needReverse?(Me=(de=e.positionInfo)==null?void 0:de.token_a)==null?void 0:Me.symbol:(Le=(H=e.positionInfo)==null?void 0:H.token_b)==null?void 0:Le.symbol)+" → "+l(e.needReverse?("showNum"in e?e.showNum:S(oe))(("precision"in e?e.precision:S(pe)).plus(Number(e.positionInfo.amountA),Number(e.fromCoinAmount)),(p=(o=e.positionInfo)==null?void 0:o.token_a)==null?void 0:p.decimals):("showNum"in e?e.showNum:S(oe))(("precision"in e?e.precision:S(pe)).plus(Number(e.positionInfo.amountB),Number(e.toCoinAmount)),(B=(Ue=e.positionInfo)==null?void 0:Ue.token_b)==null?void 0:B.decimals))+" "+l(e.needReverse?($=(h=e.positionInfo)==null?void 0:h.token_a)==null?void 0:$.symbol:(y=(I=e.positionInfo)==null?void 0:I.token_b)==null?void 0:y.symbol),1)])]),j(ie,{disabled:e.wallet.connected?e.noEnterAmount||e.insufficientBalance||e.isDisabled||e.addLoading||e.addLiquidityBtnText!==e.t("newAdd.addMore"):!1,class:"big-btn",onClick:a[15]||(a[15]=v=>e.wallet.connected?e.isShowLiquidityModal=!0:e.wallet.setIsShowWalletModal(!0))},{default:go(()=>[An,n("span",null,l(e.wallet.connected?e.addLiquidityBtnText:e.$t("button.connectWallet")),1)]),_:1},8,["disabled"]),j(se),e.showCoinSelect?(k(),Xe(ae,{key:0,"existing-coins":e.existingCoins,"last-select-coin":e.lastSelectCoin,onOnSelect:e.onCoinSelect,onOnClose:a[16]||(a[16]=v=>e.showCoinSelect=!1)},null,8,["existing-coins","last-select-coin","onOnSelect"])):ce("",!0),e.isShowSwapSetting?(k(),Xe(le,{key:1,onOnClose:a[17]||(a[17]=v=>e.isShowSwapSetting=!1)})):ce("",!0),e.isShowLiquidityModal?(k(),Xe(A,{key:2,"is-increase":!0,"from-coin":e.positionInfo.token_a,"to-coin":e.positionInfo.token_b,"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,"min-price":e.positionInfo.minPrice,"max-price":e.positionInfo.maxPrice,"current-price":e.positionInfo.currentPrice,"current-price-reverse":1/e.positionInfo.currentPrice,"pool-info":e.positionInfo,onToAdd:e.toAdd,onOnClose:a[18]||(a[18]=v=>e.isShowLiquidityModal=!1)},null,8,["from-coin","to-coin","from-coin-amount","to-coin-amount","min-price","max-price","current-price","current-price-reverse","pool-info","onToAdd"])):ce("",!0),Co(n("div",$n,[j(r)],512),[[So,e.pools.currentPositionLoading]])])}const Jn=ho(Bo,[["render",Pn],["__scopeId","data-v-d4b797dc"]]);export{Jn as default};
