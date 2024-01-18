import{_ as z}from"./status-block.6ef45a3a.js";import{u as Q,g as O,a as b,j as T,c as A,d as C}from"./pool.d6b5ef6c.js";import{a as G,$ as J,r as M,l as m,b as K,q as W,e as X,Q as Y,s as Z,o as r,c as j,w as f,h as e,i as y,j as P,v as s,f as d,u as t,A as x,t as q,M as oo,B as eo,p as no,k as io}from"./entry.4b03dc9c.js";/* empty css              */import{i as E}from"./import-icon.de3e6c66.js";import{u as so,c as to}from"./sha256.033d7784.js";import{_ as H}from"./icon-arrow_2x.948aedb2.js";import{_ as V}from"./icon-arrow_2x.4ffddb8e.js";const ao=G({components:{Modal:J},props:{poolInfo:{type:Object,required:!0},farmPoolInfo:{type:Object,default:()=>({})},isAutoStakeFarming:{type:Boolean,default:!0}},setup(o){const n=M({}),R=so(),I=m(()=>R),_=m(()=>I.value.chainName),B=m(()=>to[_.value]);let g=M(!0);const N=Q(),c=m(()=>N),w=K(),$=m(()=>o.poolInfo.needReverse),a=m(()=>o.farmPoolInfo&&o.isAutoStakeFarming?`/new-position-detail?position_nft_id=${n.value.id}&positionSource=farming`:`/new-position-detail?collect=${n.value.collectionName}&&token=${n.value.tokenName}&&address=${n.value.pool}&pos=${n.value.pos_object_id}`);W(()=>c.value.currentPositionInfo,i=>{i&&(n.value=i)},{immediate:!0});const p=i=>{var l;return(i==null?void 0:i.logoURI)||(i==null?void 0:i.logo_url)||((l=c.value.tokensObj[i==null?void 0:i.address])==null?void 0:l.logo_url)||(I.value.theme==="default"?E("/image/coins/unknown.png"):E("/image/coins/sui-unknown.png"))},u=m(()=>I.value.currentExplorer);return{getExplorerUrl:O,addCommom:b,router:w,pools:c,positionInfo:n,decimalFormat:T,rateChange:g,config:B,importIcon:E,store:I,chainName:_,checkNullObj:A,needReverse:$,getCoinIcon:p,decimalUi:C,currentExplorer:u,positionDetailUrl:a}}});const S=o=>(no("data-v-afa0e1ed"),o=o(),io(),o),ro=S(()=>e("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),lo={class:"rejected-container"},po={class:"coin-pair"},uo=S(()=>e("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),mo=[uo],fo=["href"],co=S(()=>e("svg",{class:"icon","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-icon-jump"})],-1)),Io=[co],go={class:"coin-pair"},ho={class:"fee"},vo={class:"status"},ko={class:"min-and-max"},bo={key:0},Co={class:"text"},$o={key:0,src:H,alt:""},yo={key:1,src:V,alt:""},So={class:"text"},_o={key:1},No={class:"text"},wo={key:0,src:H,alt:""},Uo={key:1,src:V,alt:""},jo={class:"text"},Po=S(()=>e("use",{"xlink:href":"#icon-a-icon-change2"},null,-1)),Eo=[Po];function Oo(o,n,R,I,_,B){const g=oo,N=z,c=eo,w=Y("Modal"),$=Z("image");return r(),j(w,{visible:!0,class:"transiaction-rejected",centered:"",title:o.$t("newAdd.openPositionSuccessful"),width:"340px",footer:null,onCancel:n[4]||(n[4]=a=>o.$emit("onClose"))},{closeIcon:f(()=>[ro]),default:f(()=>[e("div",lo,[y(g,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:f(()=>[e("div",po,[P(s(o.positionInfo.tokenName)+" ",1),(r(),d("svg",{class:"icon","aria-hidden":"true",onClick:n[0]||(n[0]=a=>o.store.copy(o.positionInfo.nftHash))},mo)),e("a",{href:o.chainName==="Aptos"?("getExplorerUrl"in o?o.getExplorerUrl:t(O))(o.currentExplorer,"nftAddress",o.positionInfo.nftHash):("getExplorerUrl"in o?o.getExplorerUrl:t(O))(o.currentExplorer,"nftAddress",o.positionInfo.pos_object_id),target:"_blank"},Io,8,fo)])]),_:1},8,["loading"]),e("div",{class:x(["left",`position-status-${o.positionInfo&&o.positionInfo.currentStatus&&o.positionInfo.currentStatus.toLowerCase()}`])},[y(g,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:f(()=>{var a,p,u,i,l,h,v,k,U,D,F,L;return[e("div",go,[e("div",null,[q(e("img",null,null,512),[[$,o.getCoinIcon(o.needReverse?(p=o.positionInfo)==null?void 0:p.token_b:(a=o.positionInfo)==null?void 0:a.token_a)]]),q(e("img",null,null,512),[[$,o.getCoinIcon(o.needReverse?(i=o.positionInfo)==null?void 0:i.token_a:(u=o.positionInfo)==null?void 0:u.token_b)]])]),e("span",null,s(o.needReverse?(k=(v=o.positionInfo)==null?void 0:v.token_b)==null?void 0:k.symbol:(h=(l=o.positionInfo)==null?void 0:l.token_a)==null?void 0:h.symbol)+" - "+s(o.needReverse?(L=(F=o.positionInfo)==null?void 0:F.token_a)==null?void 0:L.symbol:(D=(U=o.positionInfo)==null?void 0:U.token_b)==null?void 0:D.symbol),1)]),e("div",ho,s(o.$t("common.fee"))+" "+s(o.positionInfo.fee*100)+"%",1)]}),_:1},8,["loading"])],2),e("div",vo,[y(N,{"current-status":o.positionInfo.currentStatus||""},null,8,["current-status"])]),y(g,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:f(()=>{var a,p,u,i,l,h,v,k;return[e("div",ko,[(o.needReverse?!o.rateChange:o.rateChange)?(r(),d("div",bo,[e("div",Co,s(("addCommom"in o?o.addCommom:t(b))(("decimalUi"in o?o.decimalUi:t(C))(String(o.positionInfo&&o.positionInfo.minPrice),6))),1),o.store.theme=="default"?(r(),d("img",$o)):(r(),d("img",yo)),e("div",So,s(o.positionInfo&&o.positionInfo.maxPrice.indexOf("∞")>-1||o.positionInfo&&o.positionInfo.maxPrice.indexOf("+")>-1?"∞":("addCommom"in o?o.addCommom:t(b))(("decimalUi"in o?o.decimalUi:t(C))(String(o.positionInfo&&o.positionInfo.maxPrice),6)))+" "+s((p=(a=o.positionInfo)==null?void 0:a.token_b)==null?void 0:p.symbol)+" per "+s((i=(u=o.positionInfo)==null?void 0:u.token_a)==null?void 0:i.symbol),1)])):(r(),d("div",_o,[e("div",No,s(("addCommom"in o?o.addCommom:t(b))(("decimalUi"in o?o.decimalUi:t(C))(String(1/Number(o.positionInfo&&o.positionInfo.maxPrice)),6))),1),o.store.theme=="default"?(r(),d("img",wo)):(r(),d("img",Uo)),e("div",jo,s(o.positionInfo&&o.positionInfo.maxPrice.indexOf("∞")>-1||o.positionInfo&&o.positionInfo.maxPrice.indexOf("+")>-1?"∞":("addCommom"in o?o.addCommom:t(b))(("decimalUi"in o?o.decimalUi:t(C))(String(1/Number(o.positionInfo&&o.positionInfo.minPrice)),6)))+" "+s((h=(l=o.positionInfo)==null?void 0:l.token_a)==null?void 0:h.symbol)+" per "+s((k=(v=o.positionInfo)==null?void 0:v.token_b)==null?void 0:k.symbol),1)])),(r(),d("svg",{class:"icon-change","aria-hidden":"true",onClick:n[1]||(n[1]=U=>o.rateChange=!o.rateChange)},Eo))])]}),_:1},8,["loading"])]),o.chainName=="Sui"?(r(),j(c,{key:0,disabled:("checkNullObj"in o?o.checkNullObj:t(A))(o.positionInfo)||o.isAutoStakeFarming&&!o.positionInfo.clmm_pool_id,onClick:n[2]||(n[2]=a=>o.router.push(o.positionDetailUrl))},{default:f(()=>[P(s(o.$t("newAdd.viewDetail")),1)]),_:1},8,["disabled"])):(r(),j(c,{key:1,disabled:("checkNullObj"in o?o.checkNullObj:t(A))(o.positionInfo),onClick:n[3]||(n[3]=a=>o.router.push(`/new-position-detail?collect=${o.positionInfo.collectionName}&&token=${o.positionInfo.tokenName}&&address=${o.positionInfo.pool}&pos=${o.positionInfo.pos_object_id}`))},{default:f(()=>[P(s(o.$t("newAdd.viewDetail")),1)]),_:1},8,["disabled"]))]),_:1},8,["title"])}const Ho=X(ao,[["render",Oo],["__scopeId","data-v-afa0e1ed"]]);export{Ho as _};
