import{_ as H}from"./upgrade-loading.37af8d3d.js";import{_ as M}from"./upgrade-position-item.8ffaf9aa.js";import{a as Q,r as w,l as X,b as Y,E as Z,m as a,y as x,M as ee,D as C,T as oe,e as se,o as l,f as r,i as O,x as N,F as te,s as ne,h as ae,v as U,w as le,B as re,c as ue,j as ie}from"./entry.aafbdb45.js";import{u as ce,c as de,a as pe}from"./sha256.9163db08.js";import{u as me}from"./notifi.234b7ff0.js";import{u as ve}from"./pool.500c575e.js";import{i as D}from"./import-icon.de3e6c66.js";import{_ as ge,a as _e}from"./img-no-Positions_2x.b0964793.js";import{_ as fe,a as he}from"./img-connect-wallet_2x.13600241.js";/* empty css              *//* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";import"./status-block.db1d4fc9.js";/* empty css              */import"./decimal.0e8aa3f1.js";import"./icon-arrow_2x.948aedb2.js";import"./icon-arrow_2x.4ffddb8e.js";import"./useWhale.0d4c9dd2.js";import"./index.7ca15f77.js";const ye=Q({setup(){const s=w(!1),{t:S}=X(),R=w(["position"]),G=Y(),E=Z(),$=w(""),h=ce(),c=a(()=>h),A=a(()=>{const e=E.query.poolAddress,o=n.value.poolConfigObj[e];return console.log(o,"infoinfoinfo"),o}),T=a(()=>c.value.chainName?de[c.value.chainName]:{});let u=w([]);const y=ve(),n=a(()=>y),V=pe(),b=a(()=>V),q=()=>{s.value=!0,u.value=[],b.value.address&&y.getMyPositons(b.value.address,n.value.poolsObj,c.value.chainName),setTimeout(()=>{s.value=!1},1e3)};x(()=>{u.value=[],y.setMyPositionsLoading(!0)}),ee(()=>{b.value.connected||(u.value=[])});const F=()=>{s.value=!0;let e=[];n.value.poolPositions.forEach(o=>{var L,f,P,B;let t,i;const p=o.amountA*((L=n.value.RATES[o.token_a.address])==null?void 0:L.price),m=o.amountB*((f=n.value.RATES[o.token_b.address])==null?void 0:f.price);(P=n.value.RATES[o.token_a.address])!=null&&P.price&&((B=n.value.RATES[o.token_b.address])!=null&&B.price)?(t=p+m,i=p+m):(t=" --",i=0),e.push({...o,amountUSD:t,amountUSDOrigin:i,tokenARates:p,tokenBRates:m})}),u.value=e,console.log(u.value,"list.value========>")};C(()=>[n.value.poolPositions,n.value.RATES,A.value],([e,o,t])=>{e&&o&&t&&(console.log("0605==>updateLpList9099999"),F())},{immediate:!0}),C(()=>[b.value.address,A.value,c.value.chainName],([e,o,t])=>{e&&o&&t&&y.getMyPositonsByPool(e,o,t)},{immediate:!0,deep:!0});const k=me(),d=a(()=>k),j=a(()=>y),J=async e=>{await k.getSourceGroups();const o=d.value.sourceGroups&&d.value.sourceGroups.length>0&&d.value.sourceGroups[0]&&d.value.sourceGroups[0].sources||[];for(let t=0;t<o.length;t++){const{pool_address:i,position_index:p}=JSON.parse(o[t].blockchainAddress);let m=!1,L;for(let f=0;f<e.length;f++){const{poolAddress:P,index:B}=e[f];i==P&&Number(B)==Number(p)&&(m=!0),L={pool_address:i,position_index:p}}m||await k.subscribePosition(L,"",!1,!1)}},W=async()=>{await k.getSourceGroups();const e=d.value.sourceGroups&&d.value.sourceGroups.length>0&&d.value.sourceGroups[0]&&d.value.sourceGroups[0].sources||[];for(let o=0;o<e.length;o++){const{pool_address:t,position_index:i}=JSON.parse(e[o].blockchainAddress),{name:p}=e[o],m={pool_address:t,position_index:i};await k.subscribePosition(m,p,!1,!1)}},I=a(()=>j.value.myPositionsLoading);C(()=>j.value.poolPositions,(e,o)=>{T.value.hasNotifi&&(e&&e.length>0&&o&&o.length!==e.length?J(e):e&&e.length==0&&!I.value&&W())},{immediate:!0});const K=e=>{var o;return(e==null?void 0:e.logoURI)||(e==null?void 0:e.logo_url)||((o=n.value.tokensObj[e==null?void 0:e.address])==null?void 0:o.logo_url)||(c.value.theme==="default"?D("/image/coins/unknown.png"):D("/image/coins/sui-unknown.png"))},v=w(null),g=a(()=>v.value&&v.value.firstToken?v.value.firstToken:null),_=a(()=>v.value&&v.value.lastToken?v.value.lastToken:null),z=a(()=>{let e=[];e=u.value;const o=e.filter((t,i)=>g.value&&_.value?t.coinA.symbol==g.value.symbol&&t.coinB.symbol==_.value.symbol||t.coinA.symbol==_.value.symbol&&t.coinB.symbol==g.value.symbol:g.value?t.coinA.symbol.toLowerCase().includes(g.value.symbol.toLowerCase())||t.coinB.symbol.toLowerCase().includes(g.value.symbol.toLowerCase()):_.value?t.coinA.symbol.toLowerCase().includes(_.value.symbol.toLowerCase())||t.coinB.symbol.toLowerCase().includes(_.value.symbol.toLowerCase()):e);return n.value.myPositionsLoading||h.setPositiomAmount(o.length),o});return oe(()=>{h.setPositiomAmount("--")}),{showList:z,childTokenSelectRef:v,firstToken:g,lastToken:_,getCoinIcon:K,t:S,pools:n,store:c,wallet:b,list:u,clickRefresh:q,refresh:s,current:R,router:G,searchKey:$}}});const be={class:"your-liquidity-container"},ke={key:0,class:"upgrade-loading"},Le={key:1,class:"position-list"},we={key:2,class:"no-data"},Se={key:0,src:ge,alt:""},Ae={key:1,src:_e,alt:""},Te={key:3,class:"no-data"},Pe={key:0,src:fe,alt:""},Be={key:1,src:he,alt:""};function Ne(s,S,R,G,E,$){const h=H,c=M,A=re;return l(),r("div",be,[s.pools.myPositionsLoading&&s.wallet.connected?(l(),r("div",ke,[O(h,{loading:s.pools.myPositionsLoading,type:"position"},null,8,["loading"])])):N("",!0),s.showList&&s.showList.length>0&&s.wallet.connected&&!s.pools.myPositionsLoading?(l(),r("div",Le,[(l(!0),r(te,null,ne(s.showList,(T,u)=>(l(),ue(c,{key:u,"p-item":T},null,8,["p-item"]))),128))])):N("",!0),s.showList&&s.showList.length<=0&&!s.pools.myPositionsLoading&&s.wallet.connected?(l(),r("div",we,[s.store.theme=="default"?(l(),r("img",Se)):(l(),r("img",Ae)),ae("span",null,U(s.$t("common.noLiquidityPositions")),1)])):N("",!0),s.wallet.connected?N("",!0):(l(),r("div",Te,[s.store.theme=="default"?(l(),r("img",Pe)):(l(),r("img",Be)),O(A,{class:"connect-wallet",onClick:S[0]||(S[0]=T=>s.wallet.setIsShowWalletModal(!0))},{default:le(()=>[ie(U(s.$t("button.connectWallet")),1)]),_:1})]))])}const Qe=se(ye,[["render",Ne],["__scopeId","data-v-46b7787d"]]);export{Qe as default};
