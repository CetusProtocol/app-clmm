import{i as y}from"./import-icon.de3e6c66.js";import{f as re,u as ue,e as ne,a as ce,p as de,B as pe}from"./pool.19b8b8ea.js";import{a as ve,M as be,a5 as _e,l as me,m as N,r as g,y as fe,D as U,ab as he,e as ke,K as q,q as ge,o as i,c as oe,w as _,h as a,t as B,a3 as Ce,f as r,x as M,F as K,s as E,z as J,u as C,v as d,i as O,j as W,L as ye,N as we,ac as Le,J as Se,p as Te,k as Ie}from"./entry.9e5ce800.js";/* empty css              *//* empty css              */import{u as se}from"./index.e30d2a8b.js";import{_ as $e,a as Ne}from"./img-no-Positions_2x.2e74e4b6.js";const Oe=ve({components:{Modal:be,LoadingOutlined:_e},props:{existingCoins:{type:String,default:""},lastSelectCoin:{type:String,default:""},isCreatePoolToCoin:{type:Boolean,default:!1},isCreatePoolFromCoin:{type:Boolean,default:!1}},setup(e,v){const{t:l,locale:te}=me(),G=re(),m=N(()=>G),I=ue(),c=N(()=>I),j=se(),f=N(()=>j),A=N(()=>{var n;return(n=f.value)==null?void 0:n.filterCreatePoolCoin}),R=g([l("tab.all"),l("tab.native"),l("tab.layerZero"),l("tab.wormhole"),l("tab.celer")]),u=g(l("tab.all")),s=g(l("tab.all")),L=se(),$=N(()=>L.chainName),h=g([]);console.log(h,"===>tokenList");const P=g(null);fe(()=>{});const F=g(!1);U(u,n=>{n!==l("tab.all")&&(F.value=!1),n==l("tab.all")?s.value=l("tab.all"):n==l("tab.layerZero")?s.value=l("tab.layerZero"):n==l("tab.wormhole")?s.value=l("tab.wormhole"):n==l("tab.celer")?s.value=l("tab.celer"):n==l("tab.native")&&(s.value=l("tab.native")),D(P.value)});const D=async n=>{var H,Q,X,Y,V,x,ee;let p=[],S=c.value.tokens;if(!(f.value.chainName&&S&&S[0]&&f.value.chainName.toLowerCase().includes((H=S[0])==null?void 0:H.chain))){h.value=[];return}let z=S;if(n&&n.split("::")&&n.split("::").length==3&&$.value=="Sui"){const t=ce("Sui");try{const o=c.value.tokensObj[n]||await t.getTokenBySymbol(c.value.tokens,n);o&&((Q=S.filter(b=>(b==null?void 0:b.address)===(o==null?void 0:o.address)))==null?void 0:Q.length)<1&&(I.setNewTokens({[n]:o}),z=S.concat(o))}catch(o){console.log("searchToken##err##",o)}}for(const t of Object.keys(z)){let o=he(z[t]);const b=m.value.assets[o.address]&&m.value.assets[o.address].balance?de(m.value.assets&&m.value.assets[o.address].balance,o.decimals):0;e.lastSelectCoin&&o&&o.address===e.lastSelectCoin?o.unusable=!0:o.unusable=!1;const le=((X=c.value.tokensObj[o.address])==null?void 0:X.labels)&&((Y=c.value.tokensObj[o.address])==null?void 0:Y.labels[0]),ie=c.value.tokensObj[o.address]?(V=c.value.tokensObj[o.address])==null?void 0:V.name:o.name;o={...o,balance:b,labels:le,name:ie,sort:(f.value.chainName==="Aptos"?o.symbol=="APT":o.symbol=="SUI")?1:-1},p.push(o)}let T;m.value.address?T=p.sort((t,o)=>o.balance-t.balance):T=p;let k=[];if(n){console.log(T,"sortResult=====>");const t=T.filter(o=>o.symbol.toLowerCase().indexOf(n.toLowerCase())!==-1||o.address.toLowerCase().indexOf(n.toLowerCase())!==-1||o.address.toLowerCase().indexOf(pe(n).full_address.toLowerCase())!==-1||o.name.toLowerCase().indexOf(n.toLowerCase())!==-1);console.log(t,"===>result"),u.value!==l("tab.all")?k=t.filter(b=>u.value==l("tab.native")?!b.labels:b.labels&&b.labels.toLowerCase()==u.value.toLowerCase()):k=t}else console.log(u.value,"===>currentTab.value"),u.value!==l("tab.all")?k=T.filter(o=>u.value==l("tab.native")?!o.labels:o.labels&&o.labels.toLowerCase()==u.value.toLowerCase()):k=T;e.isCreatePoolToCoin?h.value=(x=k.filter(t=>A.value[t==null?void 0:t.address]))==null?void 0:x.sort((t,o)=>o.sort-t.sort).sort((t,o)=>o.unusable-t.unusable):h.value=k.sort((t,o)=>o.sort-t.sort).sort((t,o)=>o.unusable-t.unusable),e.isCreatePoolFromCoin&&(h.value=(ee=k.filter(t=>!A.value[t==null?void 0:t.address]))==null?void 0:ee.sort((t,o)=>o.sort-t.sort).sort((t,o)=>o.unusable-t.unusable)),console.log(h.value,"tokenList.value===>322")},ae=n=>{n.unusable||(v.emit("onSelect",n),v.emit("onClose"))};U(()=>[P.value,F.value],([n,p])=>{console.log(n,"===>keyword"),D(n)},{immediate:!0});const Z=g([]);return U(()=>c.value.tokens,n=>{n&&(console.log(c.value.tokens,"===>pools.value.tokens"),D(P.value),Z.value=n.filter(p=>(e.lastSelectCoin&&p.address===e.lastSelectCoin?p.unusable=!0:p.unusable=!1,p.suggested_priority&&p.suggested_priority>0)),console.log(Z.value,"===>popularList.value"))},{immediate:!0}),{popularList:Z,pools:c,t:l,chainName:$,tabList:R,currentTab:u,addCommom:ne,tokenList:h,importIcon:y,keyword:P,wallet:m,toSelect:ae,store:f,isShowAll:F}}}),Ae=""+globalThis.__publicAssetsURL("sui-image/token-warning@2x.png");const w=e=>(Te("data-v-522d3320"),e=e(),Ie(),e),Pe=w(()=>a("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),Be={class:"coin-select-modal"},Me={class:"search-input"},je=["placeholder"],Re=w(()=>a("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),Fe=[Re],De={key:0,class:"popular"},Ze=["onClick"],ze={key:1,class:"tab-list"},Ue=["onClick"],qe={class:"item"},Ke=w(()=>a("div",{class:"line"},null,-1)),Ee={class:"coin-list-box"},Je={key:0,class:"coin-list"},We=["onClick"],Ge={class:"left"},He={key:0},Qe={key:1,alt:""},Xe={class:"name-box"},Ye=["onClick"],Ve=w(()=>a("svg",{class:"icon","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-icon-copy"})],-1)),xe=w(()=>a("img",{src:Ae,alt:""},null,-1)),eo={class:"balance-box"},oo={class:"balance"},so={key:0},no={key:1},to={key:2},ao={key:3},lo=w(()=>a("p",null,null,-1)),io={key:1,class:"no-data"},ro={key:0,class:"token-loading"},uo={key:1,class:"no-data-content"},co={key:0,src:$e},po={key:1,src:Ne},vo=w(()=>a("svg",{class:"icon","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-icon-information"})],-1));function bo(e,v,l,te,G,m){const I=we,c=q("loading-outlined"),j=Le,f=Se,A=q("vue-scroll"),R=q("Modal"),u=ge("image");return i(),oe(R,{title:e.$t("modal.selectTokenModalTitle"),class:"select-mod",width:420,centered:"",visible:!0,footer:null,onCancel:v[2]||(v[2]=s=>e.$emit("onClose"))},{closeIcon:_(()=>[Pe]),default:_(()=>[a("div",Be,[a("div",Me,[B(a("input",{"onUpdate:modelValue":v[0]||(v[0]=s=>e.keyword=s),onkeyup:"value=value.replace(/[^A-Za-z0-9]+$/g,'')",placeholder:e.$t("inputPlaceholder.selectTokenModalPlaceholder")},null,8,je),[[Ce,e.keyword]]),e.keyword?(i(),r("svg",{key:0,class:"clear-icon icon modal-icon-close","aria-hidden":"true",onClick:v[1]||(v[1]=s=>e.keyword="")},Fe)):M("",!0)]),e.popularList&&e.popularList.length>0?(i(),r("div",De,[(i(!0),r(K,null,E(e.popularList,s=>(i(),r("div",{key:s.address,class:J(["img-box",s.unusable?"img-box-unusable":""]),onClick:L=>e.toSelect(s)},[B(a("img",null,null,512),[[u,s.icon||s.logo_url||(e.store.theme=="default"?("importIcon"in e?e.importIcon:C(y))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:C(y))("/image/coins/sui-unknown.png"))]]),a("span",null,d(s.symbol),1)],10,Ze))),128))])):M("",!0),e.chainName!=="Sui"?(i(),r("div",ze,[(i(!0),r(K,null,E(e.tabList,(s,L)=>(i(),r("div",{key:L,class:J(["item-container",e.currentTab==s?"item-container-active item-container":"item-container"]),onClick:$=>e.currentTab=s},[a("div",qe,d(s),1)],10,Ue))),128))])):M("",!0),Ke,a("div",Ee,[O(A,null,{default:_(()=>[e.tokenList&&e.tokenList.length>0?(i(),r("ul",Je,[(i(!0),r(K,null,E(e.tokenList,(s,L)=>(i(),r("li",{key:L,class:J(s.unusable?"unusable":""),onClick:$=>e.toSelect(s)},[a("div",Ge,[s.isChinaToken?B((i(),r("img",Qe,null,512)),[[u,e.store.theme=="default"?("importIcon"in e?e.importIcon:C(y))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:C(y))("/image/coins/sui-unknown.png")]]):B((i(),r("img",He,null,512)),[[u,s.icon||s.logo_url||(e.store.theme=="default"?("importIcon"in e?e.importIcon:C(y))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:C(y))("/image/coins/sui-unknown.png"))]]),a("div",Xe,[a("span",null,[W(d(s.symbol)+" ",1),a("span",{class:"copy-text",onClick:ye($=>e.store.copy(s&&s.address),["stop"])},[W(d(s.address&&s.address.substr(0,4))+" ... "+d(s.address&&s.address.substr(s.address.length-4,4))+" ",1),Ve],8,Ye),s.isSelfBuilt?(i(),oe(I,{key:0,placement:"right","arrow-point-at-center":""},{title:_(()=>[a("span",null,d(e.t("newAdd.notCetusTokenList")),1)]),default:_(()=>[xe]),_:1})):M("",!0)]),a("p",null,d(s.name)+" "+d(s.labels?`(${s.labels})`:""),1)])]),a("div",eo,[a("div",oo,[e.wallet.loading?(i(),r("div",so,[O(j,null,{default:_(()=>[O(c)]),_:1})])):s.balance&&e.wallet.connected?(i(),r("div",no,d(("addCommom"in e?e.addCommom:C(ne))(s.balance,s.decimals)),1)):!s.balance&&e.wallet.connected?(i(),r("div",to,"0")):(i(),r("div",ao))]),lo])],10,We))),128))])):(i(),r("div",io,[e.pools.isTokenLoading?(i(),r("div",ro,[O(f)])):(i(),r("div",uo,[e.store.theme=="default"?(i(),r("img",co)):(i(),r("img",po)),a("p",null,d(e.t("newAdd.noTokensFound")),1),a("div",null,[W(d(e.t("newAdd.enterCoinType"))+" ",1),O(I,{placement:"bottom","arrow-point-at-center":""},{title:_(()=>[a("span",null,d(e.t("newAdd.uniqueIdOfCoin")),1)]),default:_(()=>[vo]),_:1})])]))]))]),_:1})])])]),_:1},8,["title"])}const yo=ke(Oe,[["render",bo],["__scopeId","data-v-522d3320"]]);export{yo as _,Ae as a};
