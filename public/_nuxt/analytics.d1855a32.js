import{_ as Ie}from"./upgrade-chart.e0baf0cf.js";import{u as Ne,e as Ae,z as je,A as se,B as ne,a as y,d as f,y as Ue,c,D as Oe,g as w,p as pe,s as we}from"./pool.7e07c235.js";import{a as Ce,r as O,l as _,m as Se,q as x,H as me,X as Ee,e as Be,s as Le,o as s,f as n,i as h,x as m,h as o,F as R,E as P,A as C,v as a,z as ee,w as q,u as l,t as A,S as Te,P as De,M as Re,j as V,N as oe,p as qe,k as $e}from"./entry.69df4926.js";/* empty css              *//* empty css              *//* empty css              */import{u as Me,a as Pe,c as Ve}from"./sha256.97c0006b.js";import{i as ve}from"./import-icon.de3e6c66.js";import{D as j}from"./decimal.0bdeb344.js";import{g as Fe}from"./common-fun.ae91045f.js";import{_ as ze,a as He}from"./img-no-Positions_2x.2e6435ec.js";import"./index.491dd4b5.js";import"./lodash.549090cf.js";import"./precision.9d58cda5.js";const We=Ce({setup(){const e=O(!0),k=O(!1),E=O([]),K=O("vol"),Q=Me(),p=_(()=>Q),F=Pe();_(()=>F);const Y=Ne(),I=_(()=>Y),u=Se();_(()=>Ve[p.value.chainName]);const g=_(()=>p.value.chainName),z=g.value=="Sui"?[{label:"Volume",value:"vol"},{label:"TVL",value:"tvl"},{label:"Fees",value:"fee"}]:[{label:"Volume",value:"vol"},{label:"TVL",value:"tvl"},{label:"Fees",value:"fee"}],H=d=>{K.value=d.value},B=O(0),W=()=>{k.value=!0,B.value=B.value+1,p.value.getTransactionList(g.value,u.query.poolAddress,B.value)},L=O(!1),X=()=>{L.value=!0,e.value=!0,E.value=[],I.value.setPoolConfigList(p.value.chainName,p.value.filterCoinsObj),p.value.getTransactionList(g.value,u.query.poolAddress,0),Q.getStatsData(p.value.chainName,p.value.filterCoinsObj),setTimeout(()=>{L.value=!1},1e3)},t=_(()=>{const d=u.query.poolAddress;return I.value.poolConfigObj[d]}),i=O({}),T=_(()=>Fe(t.value,I,p));x(()=>u,d=>{e.value=!0,E.value=[],p.value.getTransactionList(g.value,u.query.poolAddress,0)},{immediate:!0,deep:!0});const S=Ae(p.value.chainName),N=_(()=>p.value.isShowLoadMore);x(()=>[p.value.liquiditytransactionList,t.value,N.value],async([d,v,U])=>{v&&(p.value.chainName&&p.value.chainName.includes("Aptos")&&(i.value=await S.getPool(v.address)),d?(E.value=d,e.value=!1,k.value=!1):U==!1&&(E.value=[],e.value=!1,k.value=!1))},{immediate:!0,deep:!0}),me(()=>{e.value=!0}),Ee(()=>{p.value.setClearLiquiditytransactionList()});const $=d=>{var U;let v;return(d==null?void 0:d.address)=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"?v="0x2::sui::SUI":v=d==null?void 0:d.address,(d==null?void 0:d.logoURI)||(d==null?void 0:d.logo_url)||((U=I.value.tokensObj[v])==null?void 0:U.logo_url)||(p.value.theme==="default"?ve("/image/coins/unknown.png"):ve("/image/coins/sui-unknown.png"))},fe=d=>{switch(d){case"add_liquidity_event":return"Add liquidity";case"swap_event":return"Swap";case"remove_liquidity_event":return"Remove liquidity";case"collect_reward_event":return"Claim Rewards";case"collect_fee_event":return"Claim Fees"}},le=_(()=>{let d;return p.value.chainName=="Sui"?d=(t==null?void 0:t.value)&&(t==null?void 0:t.value.object)&&(t==null?void 0:t.value.object.coin_a):d=(i==null?void 0:i.value)&&(i==null?void 0:i.value.coinAmountA),pe(d,(t==null?void 0:t.value)&&(t==null?void 0:t.value.coinA)&&(t==null?void 0:t.value.coinA.decimals))}),ie=_(()=>{let d;return p.value.chainName=="Sui"?d=(t==null?void 0:t.value)&&(t==null?void 0:t.value.object)&&(t==null?void 0:t.value.object.coin_b):d=(i==null?void 0:i.value)&&(i==null?void 0:i.value.coinAmountB),pe(d,(t==null?void 0:t.value)&&(t==null?void 0:t.value.coinB)&&(t==null?void 0:t.value.coinB.decimals))}),te=_(()=>{var d;if(I.value.RATES){const v=new j(le.value),U=new j(((d=I.value.RATES[(t==null?void 0:t.value)&&(t==null?void 0:t.value.coinA)&&t.value.coinA.address])==null?void 0:d.price)||0);return v.mul(U).toString()}else return"--"}),ae=_(()=>{var d;if(I.value.RATES){const v=new j(ie.value),U=new j(((d=I.value.RATES[(t==null?void 0:t.value)&&(t==null?void 0:t.value.coinB)&&t.value.coinB.address])==null?void 0:d.price)||0);return v.mul(U).toString()}else return"--"}),de=O(),re=O(),ke=(d,v)=>{var ue,he;const U=[];let D=new j(0);const be=new j(d).plus(new j(v));[{amount:d,name:"usdA"},{amount:v,name:"usdB"}].forEach(b=>{const J=b.amount,_e=new j(J).gt(0)?new j(J).div(be).mul(100).toString():0,Z=we(_e,2);D=D.plus(Z);const ye=Z.split(".");U.push({value:Z,decimal:ye[1],name:b.name})});let G=new j(100).minus(D).toNumber();const M=U.sort((b,J)=>Number(J.decimal)-Number(b.decimal));if(G&&D.gt(0))for(let b=0;b<M.length&&G;b++)M[b].value=new j(M[b].value).plus(.01).toString(),G=new j(G).minus(.01).toNumber();de.value=(ue=M.find(b=>b.name=="usdA"))==null?void 0:ue.value,re.value=(he=M.find(b=>b.name=="usdB"))==null?void 0:he.value};x(()=>[te.value,ae.value],([d,v])=>{d&&v&&ke(d,v)},{immediate:!0});const ce=O(!0);me(()=>{const d=je();ce.value=d==="Sui Explorer"});const ge=_(()=>p.value.currentExplorer);return{isShowLoadMore:N,formatNumberDecimal:se,getTimeDifferenceString:ne,isTracitionLoading:k,poolStatsInfo:T,chainName:g,loadMore:W,poolMoreInfo:i,addCommom:y,decimalUi:f,route:u,timeFormat:Ue,amountAUSD:te,amountBUSD:ae,amountA:le,amountB:ie,tokena_ratio:de,tokenb_ratio:re,poolInfo:t,getType:fe,getCoinIcon:$,transactionList:E,refresh:L,clickRefresh:X,changeMode:H,modeList:z,mode:K,checkNullObj:c,store:p,isLoading:e,getSuicanExplorerUrl:Oe,getExplorerUrl:w,isSuiExplorer:ce,currentExplorer:ge}}});const r=e=>(qe("data-v-55601202"),e=e(),$e(),e),Xe={key:0,class:"loading-spin-liquidity loading-global"},Ge={class:"analytics-container"},Je={class:"mode-tab"},Ke=["onClick"],Qe=r(()=>o("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),Ye=[Qe],Ze={class:"poolInfo"},xe={class:"info"},eo=r(()=>o("div",{class:"page-tit"},"Pool Info",-1)),oo={class:"info-detail"},so={class:"top"},no=r(()=>o("p",null,"Pool Address",-1)),lo={class:"copy-address"},io=r(()=>o("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),to=[io],ao={class:"pc-tooltip"},ro=["href"],co=r(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon-link1"})],-1)),uo=[co],ho={class:"h5-tooltip"},po=["href"],mo=r(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon-link1"})],-1)),vo=[mo],fo={class:"center"},ko={class:"item"},go=r(()=>o("p",null,"Pool ID",-1)),bo={class:"item"},_o=r(()=>o("p",null,"Tick Sapcing",-1)),yo={class:"item"},Io=r(()=>o("p",null,"Fee Tier",-1)),No={key:0},Ao={key:1},jo={class:"item"},Uo={class:"left"},Oo={alt:""},wo={class:"right"},Co=r(()=>o("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),So=[Co],Eo={key:0,class:"pc-tooltip"},Bo=["href"],Lo=r(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon-link1"})],-1)),To=[Lo],Do={key:1,class:"h5-tooltip"},Ro=["href"],qo=r(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon-link1"})],-1)),$o=[qo],Mo={class:"item"},Po={class:"left"},Vo={alt:""},Fo={class:"right"},zo=r(()=>o("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),Ho=[zo],Wo={key:0,class:"pc-tooltip"},Xo=["href"],Go=r(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon-link1"})],-1)),Jo=[Go],Ko={key:1,class:"h5-tooltip"},Qo=["href"],Yo=r(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon-link1"})],-1)),Zo=[Yo],xo={class:"composition"},es=r(()=>o("div",{class:"page-tit"},"Pool Composition",-1)),os={class:"table-info table-composition"},ss={class:"table"},ns=r(()=>o("thead",{class:"table-header"},[o("tr",{class:"table-tr"},[o("th",null,"Token"),o("th",null,"Amount"),o("th",null,"Amount (USD)"),o("th",null,"Token Ratio")])],-1)),ls={key:0,class:"table-tr"},is={key:0},ts={class:"skeleton-box"},as={key:1},ds={alt:""},rs={key:2},cs={class:"skeleton-box"},us={key:3},hs={key:4},ps={class:"skeleton-box"},ms={key:5},vs={key:6},fs={class:"skeleton-box"},ks={key:7},gs={class:"table-tr"},bs={key:0},_s={class:"skeleton-box"},ys={key:1},Is={alt:""},Ns={key:2},As={class:"skeleton-box"},js={key:3},Us={key:4},Os={class:"skeleton-box"},ws={key:5},Cs={key:6},Ss={class:"skeleton-box"},Es={key:7},Bs={key:1,class:"table-tr"},Ls={key:0},Ts={class:"skeleton-box"},Ds={key:1},Rs={alt:""},qs={key:2},$s={class:"skeleton-box"},Ms={key:3},Ps={key:4},Vs={class:"skeleton-box"},Fs={key:5},zs={key:6},Hs={class:"skeleton-box"},Ws={key:7},Xs={class:"card"},Gs={class:"token"},Js={alt:""},Ks={class:"name"},Qs={class:"symbol"},Ys={class:"label"},Zs={class:"bottom"},xs={class:"row"},en=r(()=>o("div",{class:"left"},"Amount",-1)),on={key:0,class:"skeleton-box"},sn={key:1,class:"right"},nn={class:"row"},ln=r(()=>o("div",{class:"left"},"Amount (USD)",-1)),tn={key:0,class:"skeleton-box"},an={key:1,class:"right"},dn={class:"row"},rn=r(()=>o("div",{class:"left"},"Token Ratio",-1)),cn={key:0,class:"skeleton-box"},un={key:1,class:"right"},hn={class:"card"},pn={class:"token"},mn={alt:""},vn={class:"name"},fn={class:"symbol"},kn={class:"label"},gn={class:"bottom"},bn={class:"row"},_n=r(()=>o("div",{class:"left"},"Amount",-1)),yn={key:0,class:"skeleton-box"},In={key:1,class:"right"},Nn={class:"row"},An=r(()=>o("div",{class:"left"},"Amount (USD)",-1)),jn={key:0,class:"skeleton-box"},Un={key:1,class:"right"},On={class:"row"},wn=r(()=>o("div",{class:"left"},"Token Ratio",-1)),Cn={key:0,class:"skeleton-box"},Sn={key:1,class:"right"},En={class:"transactions"},Bn=r(()=>o("div",{class:"page-tit"},"Transactions",-1)),Ln={class:"table-info table-transactions"},Tn=r(()=>o("thead",{class:"table-header"},[o("tr",{class:"table-tr"},[o("th",null,"Event"),o("th",null,"Amounts"),o("th",null,"Transactions"),o("th",null,"Time")])],-1)),Dn={key:0,class:"loading-global"},Rn={key:1,class:"table-body"},qn={key:0,class:"icon swap-icon","aria-hidden":"true"},$n=r(()=>o("use",{"xlink:href":"#icon-tx_swap"},null,-1)),Mn=[$n],Pn={key:1,class:"icon add-icon","aria-hidden":"true"},Vn=r(()=>o("use",{"xlink:href":"#icon-tx_add"},null,-1)),Fn=[Vn],zn={key:2,class:"icon remove-icon","aria-hidden":"true"},Hn=r(()=>o("use",{"xlink:href":"#icon-tx_remove"},null,-1)),Wn=[Hn],Xn={alt:""},Gn={key:0,class:"jiantou"},Jn=["href"],Kn={key:2,class:"noData"},Qn={key:0,src:ze},Yn={key:1,src:He},Zn={class:"h5-table-info h5-transactions-table-info"},xn={class:"row"},el=r(()=>o("div",{class:"left"},"Event",-1)),ol={class:"right"},sl={key:0,class:"icon swap-icon","aria-hidden":"true"},nl=r(()=>o("use",{"xlink:href":"#icon-tx_swap"},null,-1)),ll=[nl],il={key:1,class:"icon add-icon","aria-hidden":"true"},tl=r(()=>o("use",{"xlink:href":"#icon-tx_add"},null,-1)),al=[tl],dl={key:2,class:"icon remove-icon","aria-hidden":"true"},rl=r(()=>o("use",{"xlink:href":"#icon-tx_remove"},null,-1)),cl=[rl],ul={class:"row"},hl=r(()=>o("div",{class:"left"},"Amounts",-1)),pl={class:"right"},ml={alt:""},vl={key:0,class:"jiantou"},fl={class:"row"},kl=r(()=>o("div",{class:"left"},"Transactions",-1)),gl={class:"right"},bl=["href"],_l={class:"row"},yl=r(()=>o("div",{class:"left"},"Time (UTC)",-1)),Il={class:"right"};function Nl(e,k,E,K,Q,p){var z,H,B,W,L,X,t;const F=Te,Y=Ie,I=De,u=Re,g=Le("image");return s(),n(R,null,[e.isLoading?(s(),n("div",Xe,[h(F)])):m("",!0),o("div",Ge,[o("div",Je,[o("div",null,[(s(!0),n(R,null,P(e.modeList,i=>(s(),n("div",{key:i,class:C(["title",e.mode==i.value?"title-active":""]),onClick:T=>e.changeMode(i)},a(i.label),11,Ke))),128))]),(s(),n("svg",{"aria-hidden":"true",class:C(e.refresh?"refresh refresh-icon":"refresh-icon"),onClick:k[0]||(k[0]=(...i)=>e.clickRefresh&&e.clickRefresh(...i))},Ye,2))]),o("div",Ze,[h(Y,{"pool-info":e.poolStatsInfo,mode:e.mode,address:e.route.query.poolAddress},null,8,["pool-info","mode","address"]),o("div",xe,[eo,o("div",oo,[o("div",so,[no,o("div",lo,[o("span",null,a(e.poolInfo&&e.poolInfo.address),1),(s(),n("svg",{class:"icon","aria-hidden":"true",onClick:k[1]||(k[1]=ee(i=>e.store.copy(e.poolInfo&&e.poolInfo.address),["stop"]))},to)),o("div",ao,[h(I,{placement:"top","arrow-point-at-center":""},{title:q(()=>[V(" View on Explorer ")]),default:q(()=>[o("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:l(w))(e.currentExplorer,"poolAddress",e.poolInfo.address),target:"_blank"},uo,8,ro)]),_:1})]),o("div",ho,[o("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:l(w))(e.currentExplorer,"poolAddress",e.poolInfo.address),target:"_blank"},vo,8,po)])])]),o("div",fo,[o("div",ko,[go,o("span",null,"#"+a(e.poolInfo&&e.poolInfo.object&&((z=e.poolInfo)==null?void 0:z.object.index)),1)]),o("div",bo,[_o,o("span",null,a(e.poolInfo&&((H=e.poolInfo)==null?void 0:H.tick_spacing)),1)]),o("div",yo,[Io,("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("span",No,"--%")):(s(),n("span",Ao,a(e.poolInfo&&((B=e.poolInfo)==null?void 0:B.fee)*100)+"%",1))])]),o("div",{class:C(["bottom",(W=e.poolInfo)!=null&&W.needReverse?"bottom-reserve":""])},[o("div",jo,[o("div",Uo,[A(o("img",Oo,null,512),[[g,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),o("span",null,a(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol),1)]),o("div",wo,[o("span",null,a(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.address),1),(s(),n("svg",{class:"icon","aria-hidden":"true",onClick:k[2]||(k[2]=ee(i=>e.store.copy(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.address),["stop"]))},So)),e.isSuiExplorer?m("",!0):(s(),n("div",Eo,[h(I,{placement:"top",trigger:"hover","arrow-point-at-center":""},{title:q(()=>[V(" View on Explorer ")]),default:q(()=>[o("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:l(w))(e.currentExplorer,"coin",e.poolInfo.coinA.address),target:"_blank"},To,8,Bo)]),_:1})])),e.isSuiExplorer?m("",!0):(s(),n("div",Do,[o("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:l(w))(e.currentExplorer,"coin",e.poolInfo.coinA.address),target:"_blank"},$o,8,Ro)]))])]),o("div",Mo,[o("div",Po,[A(o("img",Vo,null,512),[[g,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),o("span",null,a(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol),1)]),o("div",Fo,[o("span",null,a(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.address),1),(s(),n("svg",{class:"icon","aria-hidden":"true",onClick:k[3]||(k[3]=ee(i=>e.store.copy(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.address),["stop"]))},Ho)),e.isSuiExplorer?m("",!0):(s(),n("div",Wo,[h(I,{placement:"top","arrow-point-at-center":""},{title:q(()=>[V(" View on Explorer ")]),default:q(()=>[o("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:l(w))(e.currentExplorer,"coin",e.poolInfo.coinB.address),target:"_blank"},Jo,8,Xo)]),_:1})])),e.isSuiExplorer?m("",!0):(s(),n("div",Ko,[o("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:l(w))(e.currentExplorer,"coin",e.poolInfo.coinB.address),target:"_blank"},Zo,8,Qo)]))])])],2)])])]),o("div",xo,[es,o("div",os,[o("table",ss,[ns,o("tbody",{class:C(["table-body",e.poolInfo&&e.poolInfo.needReverse?"reserve-th":""])},[(L=e.poolInfo)!=null&&L.needReverse?m("",!0):(s(),n("tr",ls,[("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("td",is,[o("div",ts,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",as,[A(o("img",ds,null,512),[[g,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),o("div",null,[o("p",null,a(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol),1),o("span",null,a(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.name),1)])])),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",rs,[o("div",cs,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",us,a(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountA,e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.decimals))),1)),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",hs,[o("div",ps,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",ms,"$"+a(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountAUSD,2))),1)),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",vs,[o("div",fs,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",ks,a(("decimalUi"in e?e.decimalUi:l(f))(e.tokena_ratio,2))+"%",1))])),o("tr",gs,[("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("td",bs,[o("div",_s,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",ys,[A(o("img",Is,null,512),[[g,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),o("div",null,[o("p",null,a(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol),1),o("span",null,a(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.name),1)])])),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",Ns,[o("div",As,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",js,a(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountB,e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.decimals))),1)),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",Us,[o("div",Os,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",ws,"$"+a(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountBUSD,2))),1)),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",Cs,[o("div",Ss,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",Es,a(("decimalUi"in e?e.decimalUi:l(f))(e.tokenb_ratio,2))+"%",1))]),(X=e.poolInfo)!=null&&X.needReverse?(s(),n("tr",Bs,[("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("td",Ls,[o("div",Ts,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",Ds,[A(o("img",Rs,null,512),[[g,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),o("div",null,[o("p",null,a(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol),1),o("span",null,a(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.name),1)])])),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",qs,[o("div",$s,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",Ms,a(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountA,e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.decimals))),1)),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",Ps,[o("div",Vs,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",Fs,"$"+a(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountAUSD,2))),1)),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",zs,[o("div",Hs,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",Ws,a(("decimalUi"in e?e.decimalUi:l(f))(e.tokena_ratio,2))+"%",1))])):m("",!0)],2)])]),o("div",{class:C(["h5-table-info",(t=e.poolInfo)!=null&&t.needReverse?"h5-table-info-reserve":""])},[o("div",Xs,[o("div",Gs,[A(o("img",Js,null,512),[[g,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),o("div",Ks,[o("div",Qs,a(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol),1),o("div",Ys,a(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.name),1)])]),o("div",Zs,[o("div",xs,[en,("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("div",on,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(s(),n("div",sn,a(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountA,e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.decimals))),1))]),o("div",nn,[ln,("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("div",tn,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(s(),n("div",an,"$"+a(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountAUSD,2))),1))]),o("div",dn,[rn,("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("div",cn,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(s(),n("div",un,a(("decimalUi"in e?e.decimalUi:l(f))(e.tokena_ratio,2))+"%",1))])])]),o("div",hn,[o("div",pn,[A(o("img",mn,null,512),[[g,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),o("div",vn,[o("div",fn,a(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol),1),o("div",kn,a(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.name),1)])]),o("div",gn,[o("div",bn,[_n,("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("div",yn,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(s(),n("div",In,a(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountB,e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.decimals))),1))]),o("div",Nn,[An,("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("div",jn,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(s(),n("div",Un,"$"+a(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountBUSD,2))),1))]),o("div",On,[wn,("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("div",Cn,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(s(),n("div",Sn,a(("decimalUi"in e?e.decimalUi:l(f))(e.tokenb_ratio,2))+"%",1))])])])],2)]),o("div",En,[Bn,o("div",Ln,[o("table",{class:C(["table",e.transactionList&&e.transactionList.length>0?"":"no-date-table"])},[Tn,e.isTracitionLoading?(s(),n("div",Dn,[h(F)])):m("",!0),e.transactionList&&e.transactionList.length>0?(s(),n("tbody",Rn,[(s(!0),n(R,null,P(e.transactionList,(i,T)=>{var S;return s(),n("tr",{key:T,class:"table-tr"},[o("td",null,[i.type=="swap_event"?(s(),n("svg",qn,Mn)):m("",!0),i.type=="add_liquidity_event"?(s(),n("svg",Pn,Fn)):m("",!0),i.type=="remove_liquidity_event"||i.type=="collect_reward_event"||i.type=="collect_fee_event"?(s(),n("svg",zn,Wn)):m("",!0),V(" "+a(e.getType(i.type)),1)]),o("td",null,[o("div",{class:C(["item-box",(i.type=="add_liquidity_event"||i.type=="remove_liquidity_event")&&((S=e.poolInfo)!=null&&S.needReverse)?"reserve-item-box":""])},[(s(!0),n(R,null,P(i.items,(N,$)=>A((s(),n("div",{key:$,class:"item"},[A(o("img",Xn,null,512),[[g,e.getCoinIcon(N)]]),o("p",null,a(("addCommom"in e?e.addCommom:l(y))(("formatNumberDecimal"in e?e.formatNumberDecimal:l(se))(N.amount,2))),1),o("span",null,a(N.symbol),1),i.type=="swap_event"?(s(),n("p",Gn,"→")):m("",!0)])),[[oe,Number(N.amount)!==0]])),128))],2)]),o("td",null,[o("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:l(w))(e.currentExplorer,"tx",i.tx),target:"_blank"},[o("span",null,a(i.tx.substr(0,6))+" ... "+a(i.tx.substr(i.tx.length-4,4)),1)],8,Jn)]),o("td",null,a(("getTimeDifferenceString"in e?e.getTimeDifferenceString:l(ne))(Date.parse(i.block_time))),1)])}),128))])):m("",!0),e.transactionList&&e.transactionList.length<=0&&!e.isLoading?(s(),n("div",Kn,[e.store.theme=="default"?(s(),n("img",Qn)):(s(),n("img",Yn)),o("p",null,a(e.$t("newAdd.noTransactions")),1)])):m("",!0)],2)]),o("div",Zn,[(s(!0),n(R,null,P(e.transactionList,(i,T)=>{var S;return A((s(),n("div",{key:T,class:"card"},[o("div",xn,[el,o("div",ol,[i.type=="swap_event"?(s(),n("svg",sl,ll)):m("",!0),i.type=="add_liquidity_event"?(s(),n("svg",il,al)):m("",!0),i.type=="remove_liquidity_event"||i.type=="collect_reward_event"||i.type=="collect_fee_event"?(s(),n("svg",dl,cl)):m("",!0),V(" "+a(e.getType(i.type)),1)])]),o("div",ul,[hl,o("div",pl,[o("div",{class:C(["item-box",(i.type=="add_liquidity_event"||i.type=="remove_liquidity_event")&&((S=e.poolInfo)!=null&&S.needReverse)?"reserve-item-box":""])},[(s(!0),n(R,null,P(i.items,(N,$)=>A((s(),n("div",{key:$,class:"item"},[o("div",null,[o("div",null,[A(o("img",ml,null,512),[[g,e.getCoinIcon(N)]]),o("p",null,a(("addCommom"in e?e.addCommom:l(y))(("formatNumberDecimal"in e?e.formatNumberDecimal:l(se))(N.amount,2))),1),o("span",null,a(N.symbol),1)]),i.type=="swap_event"?(s(),n("p",vl,"→")):m("",!0)])])),[[oe,Number(N.amount)!==0]])),128))],2)])]),o("div",fl,[kl,o("div",gl,[o("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:l(w))(e.currentExplorer,"tx",i.tx),target:"_blank"},[o("span",null,a(i.tx.substr(0,6))+" ... "+a(i.tx.substr(i.tx.length-4,4)),1)],8,bl)])]),o("div",_l,[yl,o("div",Il,a(("getTimeDifferenceString"in e?e.getTimeDifferenceString:l(ne))(Date.parse(i.block_time))),1)])])),[[oe,e.transactionList&&e.transactionList.length>0]])}),128))]),e.transactionList&&e.transactionList.length>=10&&!e.isLoading&&e.isShowLoadMore?(s(),n("div",{key:0,class:"load-more",onClick:k[4]||(k[4]=i=>e.loadMore())}," Load More ")):m("",!0)])])],64)}const Ml=Be(We,[["render",Nl],["__scopeId","data-v-55601202"]]);export{Ml as default};
