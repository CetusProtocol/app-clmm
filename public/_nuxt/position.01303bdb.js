import{_ as ie}from"./upgrade-select-input.54289239.js";import{_ as ce}from"./upgrade-loading.3cf7857c.js";import{_ as de}from"./upgrade-position-item.5a2c13b3.js";import{a as me,r as v,y as pe,b as ve,l as m,q as R,H as ge,K as be,R as he,X as fe,e as _e,o as l,f as r,h as p,F as j,E as V,x as A,i as I,z as K,v as w,A as H,j as M,w as ye,B as ke,c as Se,p as Le,k as Ae}from"./entry.8244466d.js";import{u as we,a as Te,c as Pe}from"./sha256.723c3cf0.js";import{u as $e}from"./notifi.185f9ea9.js";import{u as Oe,c as Re}from"./pool.daa43b66.js";import{i as X}from"./import-icon.de3e6c66.js";import{_ as Z}from"./icon_on_2x.5e96733d.js";import{_ as Ue}from"./img-no-Positions_2x.56a001cd.js";import{_ as Be}from"./img-no-Positions_2x.c458fed1.js";import{_ as Ce}from"./img-connect-wallet_2x.d445bdbc.js";import{_ as Ne}from"./img-connect-wallet_2x.a5cb9955.js";import"./coin-select.491fe770.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";import"./status-block.68c3d66b.js";import"./decimal.0bdeb344.js";import"./farms.f3f146a4.js";import"./farms.d0ba7140.js";import"./icon-arrow_2x.948aedb2.js";import"./icon-arrow_2x.4ffddb8e.js";import"./icon_rewards_2x.f03a99f1.js";import"./useWhale.24992a6a.js";const Ee=me({setup(){const o=v(!1),{t:i}=pe(),W=v(["position"]),P=ve(),q=v(""),U=we(),g=m(()=>U),E=m(()=>g.value.chainName?Pe[g.value.chainName]:{});let c=v([]);const _=Oe(),a=m(()=>_),y=Te(),b=m(()=>y),D=v(!1),$=v(i("tab.all")),G=v([i("tab.layerZero"),i("tab.wormhole"),i("tab.celer")]),B=v(!0),Y=v("TVL"),z=()=>{o.value=!0,c.value=[],b.value.address&&_.getMyPositons(b.value.address,a.value.poolsObj,g.value.chainName),setTimeout(()=>{o.value=!1},1e3)},x=m(()=>{const s=Array.from(new Set(a.value.poolConfigList.flatMap(e=>!(e!=null&&e.category)||(e==null?void 0:e.category)==""?"All":e==null?void 0:e.category)));return s.length<=1?[]:s}),ee=s=>{a.value.setCurrentPoolTab(s)};R(()=>g.value.isRefresh,s=>{var e,t,n,u;s&&((u=(n=(t=(e=P==null?void 0:P.currentRoute)==null?void 0:e.value)==null?void 0:t.name)==null?void 0:n.split("-"))==null?void 0:u[1])=="position"&&z()}),ge(()=>{c.value=[],document.addEventListener("click",()=>{D.value=!1}),_.setMyPositionsLoading(!0)}),be(()=>{document.addEventListener("click",()=>{D.value=!1})}),he(()=>{b.value.connected||(c.value=[])});const F=()=>{o.value=!0;let s=[];a.value.myPositions.forEach(e=>{var f,T,C,N;let t,n;const u=e.amountA*((f=a.value.RATES[e.token_a.address])==null?void 0:f.price),d=e.amountB*((T=a.value.RATES[e.token_b.address])==null?void 0:T.price);(C=a.value.RATES[e.token_a.address])!=null&&C.price&&((N=a.value.RATES[e.token_b.address])!=null&&N.price)?(t=u+d,n=u+d):(t=" --",n=0),(a.value.currentPoolTab=="All"||a.value.currentPoolTab!=="All"&&e.category==a.value.currentPoolTab)&&s.push({...e,amountUSD:t,amountUSDOrigin:n,tokenARates:u,tokenBRates:d})}),$.value!="All"?B.value?(c.value=s.sort((e,t)=>Number(t.amountUSDOrigin)-Number(e.amountUSDOrigin)),o.value=!1):(c.value=s.sort((e,t)=>Number(e.amountUSDOrigin)-Number(t.amountUSDOrigin)),o.value=!1):B.value?(c.value=s.sort((e,t)=>t.amountUSDOrigin-e.amountUSDOrigin),o.value=!1):(c.value=s.sort((e,t)=>e.amountUSDOrigin-t.amountUSDOrigin),o.value=!1)};R(()=>[a.value.myPositions,a.value.RATES],([s,e])=>{s&&e&&F()},{immediate:!0}),R(()=>[b.value.address,a.value.poolConfigList,a.value.poolsObj,g.value.chainName],([s,e,t,n])=>{var u,d,f;s&&e&&e.length>0&&n&&(n!=null&&n.toLowerCase().includes((u=e[0])==null?void 0:u.chain))&&!Re(t)&&(n==="Aptos"?e.length===Object.values(t).length:(f=(d=Object.values(t)[0])==null?void 0:d.chain)!=null&&f.includes("sui"))&&_.getMyPositons(b.value.address,t,n)},{immediate:!0,deep:!0}),R(()=>[$.value,B.value,a.value.currentPoolTab],([s])=>{F()});const oe=s=>{const e=[];G.value.forEach((t,n)=>{t==s?e[n]=$.value:e[n]=t}),G.value=e,$.value=s},O=$e(),h=m(()=>O),J=m(()=>_),se=async s=>{await O.getSourceGroups();const e=h.value.sourceGroups&&h.value.sourceGroups.length>0&&h.value.sourceGroups[0]&&h.value.sourceGroups[0].sources||[];for(let t=0;t<e.length;t++){const{pool_address:n,position_index:u}=JSON.parse(e[t].blockchainAddress);let d=!1,f;for(let T=0;T<s.length;T++){const{poolAddress:C,index:N,positionSource:re,name:ue}=s[T];n==C&&Number(re=="clmm"?N:ue.split("-")[1])==Number(u)&&(d=!0),f={pool_address:n,position_index:u}}d||await O.subscribePosition(f,"",!1,!1)}},te=async()=>{await O.getSourceGroups();const s=h.value.sourceGroups&&h.value.sourceGroups.length>0&&h.value.sourceGroups[0]&&h.value.sourceGroups[0].sources||[];for(let e=0;e<s.length;e++){const{pool_address:t,position_index:n}=JSON.parse(s[e].blockchainAddress),{name:u}=s[e],d={pool_address:t,position_index:n};await O.subscribePosition(d,u,!1,!1)}},ae=m(()=>J.value.myPositionsLoading);R(()=>J.value.myPositions,(s,e)=>{E.value.hasNotifi&&(s&&s.length>0&&e&&e.length!==s.length?se(s):s&&s.length==0&&!ae.value&&te())},{immediate:!0});const ne=s=>{var e;return(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||((e=a.value.tokensObj[s==null?void 0:s.address])==null?void 0:e.logo_url)||(g.value.theme==="default"?X("/image/coins/unknown.png"):X("/image/coins/sui-unknown.png"))},k=v(null),S=m(()=>k.value&&k.value.firstToken?k.value.firstToken:null),L=m(()=>k.value&&k.value.lastToken?k.value.lastToken:null),le=m(()=>{let s=[];s=c.value;const e=s.filter((t,n)=>S.value&&L.value?t.coinA.symbol==S.value.symbol&&t.coinB.symbol==L.value.symbol||t.coinA.symbol==L.value.symbol&&t.coinB.symbol==S.value.symbol:S.value?t.coinA.symbol.toLowerCase().includes(S.value.symbol.toLowerCase())||t.coinB.symbol.toLowerCase().includes(S.value.symbol.toLowerCase()):L.value?t.coinA.symbol.toLowerCase().includes(L.value.symbol.toLowerCase())||t.coinB.symbol.toLowerCase().includes(L.value.symbol.toLowerCase()):s);return a.value.myPositionsLoading||U.setPositiomAmount(e.length),e});return fe(()=>{U.setPositiomAmount("--")}),{tabArr:x,changeTab:ee,showList:le,childTokenSelectRef:k,firstToken:S,lastToken:L,getCoinIcon:ne,changeSortLabel:oe,label:D,labelList:G,labelValue:$,select:B,selectValue:Y,t:i,pools:a,store:g,wallet:b,list:c,clickRefresh:z,refresh:o,current:W,router:P,searchKey:q}}});const Q=o=>(Le("data-v-fc2b2b02"),o=o(),Ae(),o),De={class:"upgrade-position-list-container"},Ge={class:"content-top"},je={class:"content-top-left"},Ve={key:0,class:"tag-list"},Ie=["onClick"],We={class:"content-top-right"},qe={class:"value"},ze=Q(()=>p("use",{"xlink:href":"#icon-icon_on"},null,-1)),Fe=[ze],Je={key:0,class:"select-item"},Ke=["onClick"],He={class:"search-select-box"},Me=Q(()=>p("span",null,"TVL",-1)),Xe={key:0,src:Z,alt:""},Ze={key:1,class:"fan-img",src:Z,alt:""},Qe={key:0,class:"upgrade-loading"},Ye={key:1,class:"position-list"},xe={key:2,class:"no-data"},eo={key:0,src:Ue,alt:""},oo={key:1,src:Be,alt:""},so={key:3,class:"no-data"},to={key:0,src:Ce,alt:""},ao={key:1,src:Ne,alt:""};function no(o,i,W,P,q,U){const g=ie,E=ce,c=de,_=ke;return l(),r("div",De,[p("div",Ge,[p("div",je,[o.tabArr.length>1?(l(),r("div",Ve,[(l(!0),r(j,null,V(o.tabArr,(a,y)=>(l(),r("div",{key:y,class:H(["tag-item",a==o.pools.currentPoolTab?`tag-active tab-num-${o.tabArr.length}`:`tab-num-${o.tabArr.length}`]),onClick:b=>o.changeTab(a)},w(a),11,Ie))),128))])):A("",!0),I(g,{ref:"childTokenSelectRef"},null,512)]),p("div",We,[o.store.theme=="default"?(l(),r("div",{key:0,class:"search-label",onClick:i[0]||(i[0]=K(a=>o.label=!o.label,["stop"]))},[p("span",null,w(o.$t("newAdd.label")),1),p("div",qe,w(o.labelValue),1),(l(),r("svg",{"aria-hidden":"true",class:H(o.label?"show-icon icon":"icon")},Fe,2)),o.label?(l(),r("div",Je,[(l(!0),r(j,null,V(o.labelList,(a,y)=>(l(),r("div",{key:y,class:"select-menu-item",onClick:b=>o.changeSortLabel(a)},w(a),9,Ke))),128))])):A("",!0)])):A("",!0),p("div",He,[p("div",{class:"search-select",onClick:i[1]||(i[1]=K(a=>o.select=!o.select,["stop"]))},[M(w(o.$t("newAdd.sortBy"))+" ",1),p("div",null,[Me,o.select?(l(),r("img",Xe)):(l(),r("img",Ze))])])])])]),o.pools.myPositionsLoading&&o.wallet.connected?(l(),r("div",Qe,[I(E,{loading:o.pools.myPositionsLoading,type:"position"},null,8,["loading"])])):A("",!0),o.showList&&o.showList.length>0&&o.wallet.connected&&!o.pools.myPositionsLoading?(l(),r("div",Ye,[(l(!0),r(j,null,V(o.showList,(a,y)=>(l(),Se(c,{key:y,"p-item":a},null,8,["p-item"]))),128))])):A("",!0),o.showList&&o.showList.length<=0&&!o.pools.myPositionsLoading&&o.wallet.connected?(l(),r("div",xe,[o.store.theme=="default"?(l(),r("img",eo)):(l(),r("img",oo)),p("span",null,w(o.$t("common.noLiquidityPositions")),1)])):A("",!0),o.wallet.connected?A("",!0):(l(),r("div",so,[o.store.theme=="default"?(l(),r("img",to)):(l(),r("img",ao)),I(_,{class:"connect-wallet",onClick:i[2]||(i[2]=a=>o.wallet.setIsShowWalletModal(!0))},{default:ye(()=>[M(w(o.$t("button.connectWallet")),1)]),_:1})]))])}const No=_e(Ee,[["render",no],["__scopeId","data-v-fc2b2b02"]]);export{No as default};
