import{_ as D}from"./token-warning.b74ef0bf.js";import{D as q,u as F,j as H,e as f,z as V,c as M}from"./pool.0f02dce8.js";import{a as J,l as U,m as s,a4 as G,a5 as K,D as Q,E as X,e as Y,q as Z,o as n,f as l,h as i,c as m,v as d,z as B,t as x,x as c,i as T,w as $,u as b,j,I as ee,J as ae,aa as oe,S as ne,B as te,p as se,k as ie}from"./entry.868b1999.js";/* empty css              *//* empty css              *//* empty css              */import{i as le}from"./import-icon.de3e6c66.js";import{u as de,a as re}from"./sha256.42d79f92.js";const ue=J({components:{TokenWarning:D},props:{inputValue:{type:String,default:""},inputDisabled:{type:Boolean,default:!1},coinName:{type:String,default:""},coinSymbol:{type:String,default:""},balance:{type:Number,default:null},coinIcon:{type:String,default:""},havemax:{type:Boolean,default:!0},hasArrow:{type:Boolean,default:!0},isTotal:{type:Boolean,default:!1},importPage:{type:String,default:""},address:{type:String,default:""}},setup(e,t){const{t:w,locale:L}=U(),I=de(),k=s(()=>I),g=s(()=>new q(Number(e.balance)).div(2)),h=G(K,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0});function y(){this.$emit("onSelect")}const S=o=>{const u=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(r==null?void 0:r.value)&&(r==null?void 0:r.value)}})?).*$`);o.target.value=o.target.value.replace(u,"$1")},C=re(),p=s(()=>C),_=F(),a=s(()=>_),z=s(()=>a.value.tokensWarningObj);let v={};Q(()=>a.value.RATES,o=>{o&&(v=o)},{immediate:!0});const A=s(()=>H(Number(e.inputValue)*Number(v&&v[e.address]&&v[e.address].price),2)),P=s(()=>{var o,u;return a.value.tokensObj&&e.address&&a.value.tokensObj[e.address]&&((o=a.value.tokensObj[e.address])==null?void 0:o.labels)&&((u=a.value.tokensObj[e.address])==null?void 0:u.labels[0])}),r=s(()=>{var o;return a.value.tokensObj&&e.address&&a.value.tokensObj[e.address]&&((o=a.value.tokensObj[e.address])==null?void 0:o.decimals)}),W=s(()=>{var o,u,N,O;return e.coinIcon||((u=(o=a==null?void 0:a.value)==null?void 0:o.tokensObj[e.address])==null?void 0:u.logo_url)||((O=(N=a==null?void 0:a.value)==null?void 0:N.tokensObj[e.address])==null?void 0:O.logoURI)||""}),E=s(()=>a.value.tokensObj),R=s(()=>k.value.theme);return{route:X(),theme:R,currentIcon:W,tokensObj:E,pool:a,halfBalance:g,coinLabels:P,t:w,addCommom:f,store:k,wallet:p,indicator:h,inputChange:S,importIcon:le,selectCoin:y,amountPirce:A,coinDecimals:r,formatNumber:V,tokensWarningObj:z,checkNullObj:M}}});const me=e=>(se("data-v-51a3e07c"),e=e(),ie(),e),ce={class:"card"},pe={class:"top"},ve={key:1,class:"input-div"},be={key:0},fe={class:"loading-token"},ke={key:1},ge={key:0},he=me(()=>i("use",{"xlink:href":"#icon-icon_on"},null,-1)),ye=[he],Se={class:"bottom"},Ce={key:0,class:"amount-price"},_e={key:1},$e={class:"top"},je={class:"right"},we={class:"balance"};function Ie(e,t,w,L,I,k){const g=ee,h=ae,y=oe,S=D,C=ne,p=te,_=Z("image");return n(),l("div",ce,[i("div",pe,[e.inputDisabled?(n(),l("div",ve,[e.inputValue?(n(),l("span",be,d(e.inputValue),1)):(n(),m(h,{key:1,indicator:e.indicator},null,8,["indicator"]))])):(n(),m(g,{key:0,value:e.inputValue=="InsufficientLiquidity"?"":e.inputValue,placeholder:"0.0",disabled:e.inputDisabled,onChange:e.inputChange,onInput:t[0]||(t[0]=a=>e.$emit("onInput",a.target.value)),onFocus:t[1]||(t[1]=a=>e.$emit("onFocus"))},null,8,["value","disabled","onChange"])),i("div",{class:B(["left",[e.hasArrow?"":"nohands",e.route.name=="swap"?"left-opcity":""].join("")]),onClick:t[2]||(t[2]=a=>e.hasArrow&&!e.pool.isTokenLoading?e.selectCoin():"")},[i("div",fe,[e.pool.isTokenLoading?(n(),m(y,{key:0,active:e.active,size:"small",paragraph:!1},null,8,["active"])):e.address?x((n(),l("img",ke,null,512)),[[_,e.currentIcon]]):c("",!0),T(S,{address:e.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),T(C,{loading:e.pool.isTokenLoading,class:"loading-token-skeleton",active:"",paragraph:!1},{default:$(()=>[i("div",null,[i("p",null,d(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1),e.coinLabels?(n(),l("p",ge,d(e.coinLabels),1)):c("",!0)])]),_:1},8,["loading"])]),e.hasArrow?(n(),l("svg",{key:0,class:B(["icon",e.pool.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},ye,2)):c("",!0)],2)]),i("div",Se,[e.inputValue&&e.amountPirce!="--"?(n(),l("div",Ce," $"+d(("formatNumber"in e?e.formatNumber:b(V))(e.amountPirce)),1)):(n(),l("div",_e)),i("div",$e,[i("div",je,[j(d(e.isTotal?e.$t("common.total"):e.$t("common.balance"))+" ",1),i("span",we,d(e.wallet.connected?("addCommom"in e?e.addCommom:b(f))(e.balance,e.coinDecimals):"0"),1),e.havemax&&e.wallet.connected?(n(),m(p,{key:0,disabled:!e.coinName||("addCommom"in e?e.addCommom:b(f))(e.halfBalance,e.coinDecimals)==0,class:"max-btn",onClick:t[3]||(t[3]=a=>e.$emit("onHalf"))},{default:$(()=>[j(d("Half"))]),_:1},8,["disabled"])):c("",!0),e.havemax&&e.wallet.connected?(n(),m(p,{key:1,disabled:!e.coinName||("addCommom"in e?e.addCommom:b(f))(e.balance,e.coinDecimals)==0,class:"max-btn",onClick:t[4]||(t[4]=a=>e.$emit("onMax"))},{default:$(()=>[j(d(e.$t("button.max")),1)]),_:1},8,["disabled"])):c("",!0)])])])])}const Pe=Y(ue,[["render",Ie],["__scopeId","data-v-51a3e07c"]]);export{Pe as _};
