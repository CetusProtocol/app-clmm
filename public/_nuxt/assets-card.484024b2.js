import{_ as D}from"./token-warning.25081186.js";import{D as W,u as q,j as F,e as f,z as V}from"./pool.deddc395.js";import{a as H,l as M,m as s,a4 as J,a5 as U,D as G,E as K,e as Q,q as X,o as n,f as l,h as i,c as m,v as d,z as O,t as Y,x as c,i as T,w as $,u as b,j as w,I as Z,J as x,aa as ee,S as oe,B as ae,p as ne,k as te}from"./entry.66452a28.js";/* empty css              *//* empty css              *//* empty css              */import{i as se}from"./import-icon.de3e6c66.js";import{u as ie,a as le}from"./sha256.eb70349c.js";const de=H({components:{TokenWarning:D},props:{inputValue:{type:String,default:""},inputDisabled:{type:Boolean,default:!1},coinName:{type:String,default:""},coinSymbol:{type:String,default:""},balance:{type:Number,default:null},coinIcon:{type:String,default:""},havemax:{type:Boolean,default:!0},hasArrow:{type:Boolean,default:!0},isTotal:{type:Boolean,default:!1},importPage:{type:String,default:""},address:{type:String,default:""}},setup(e,t){const{t:I,locale:L}=M(),j=ie(),k=s(()=>j),g=s(()=>new W(Number(e.balance)).div(2)),h=J(U,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0});function y(){this.$emit("onSelect")}const S=a=>{const u=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(r==null?void 0:r.value)&&(r==null?void 0:r.value)}})?).*$`);a.target.value=a.target.value.replace(u,"$1")},C=le(),p=s(()=>C),_=q(),o=s(()=>_);let v={};G(()=>o.value.RATES,a=>{a&&(v=a)},{immediate:!0});const z=s(()=>F(Number(e.inputValue)*Number(v&&v[e.address]&&v[e.address].price),2)),A=s(()=>{var a,u;return o.value.tokensObj&&e.address&&o.value.tokensObj[e.address]&&((a=o.value.tokensObj[e.address])==null?void 0:a.labels)&&((u=o.value.tokensObj[e.address])==null?void 0:u.labels[0])}),r=s(()=>{var a;return o.value.tokensObj&&e.address&&o.value.tokensObj[e.address]&&((a=o.value.tokensObj[e.address])==null?void 0:a.decimals)}),P=s(()=>{var a,u,N,B;return e.coinIcon||((u=(a=o==null?void 0:o.value)==null?void 0:a.tokensObj[e.address])==null?void 0:u.logo_url)||((B=(N=o==null?void 0:o.value)==null?void 0:N.tokensObj[e.address])==null?void 0:B.logoURI)||""}),E=s(()=>o.value.tokensObj),R=s(()=>k.value.theme);return{route:K(),theme:R,currentIcon:P,tokensObj:E,pool:o,halfBalance:g,coinLabels:A,t:I,addCommom:f,store:k,wallet:p,indicator:h,inputChange:S,importIcon:se,selectCoin:y,amountPirce:z,coinDecimals:r,formatNumber:V}}});const re=e=>(ne("data-v-9682b482"),e=e(),te(),e),ue={class:"card"},me={class:"top"},ce={key:1,class:"input-div"},pe={key:0},ve={class:"loading-token"},be={key:1},fe={key:0},ke=re(()=>i("use",{"xlink:href":"#icon-icon_on"},null,-1)),ge=[ke],he={class:"bottom"},ye={key:0,class:"amount-price"},Se={key:1},Ce={class:"top"},_e={class:"right"},$e={class:"balance"};function we(e,t,I,L,j,k){const g=Z,h=x,y=ee,S=D,C=oe,p=ae,_=X("image");return n(),l("div",ue,[i("div",me,[e.inputDisabled?(n(),l("div",ce,[e.inputValue?(n(),l("span",pe,d(e.inputValue),1)):(n(),m(h,{key:1,indicator:e.indicator},null,8,["indicator"]))])):(n(),m(g,{key:0,value:e.inputValue=="InsufficientLiquidity"?"":e.inputValue,placeholder:"0.0",disabled:e.inputDisabled,onChange:e.inputChange,onInput:t[0]||(t[0]=o=>e.$emit("onInput",o.target.value)),onFocus:t[1]||(t[1]=o=>e.$emit("onFocus"))},null,8,["value","disabled","onChange"])),i("div",{class:O(["left",[e.hasArrow?"":"nohands",e.route.name=="swap"?"left-opcity":""].join("")]),onClick:t[2]||(t[2]=o=>e.hasArrow&&!e.pool.isTokenLoading?e.selectCoin():"")},[i("div",ve,[e.pool.isTokenLoading?(n(),m(y,{key:0,active:e.active,size:"small",paragraph:!1},null,8,["active"])):e.address?Y((n(),l("img",be,null,512)),[[_,e.currentIcon]]):c("",!0),T(S,{address:e.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),T(C,{loading:e.pool.isTokenLoading,class:"loading-token-skeleton",active:"",paragraph:!1},{default:$(()=>[i("div",null,[i("p",null,d(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1),e.coinLabels?(n(),l("p",fe,d(e.coinLabels),1)):c("",!0)])]),_:1},8,["loading"])]),e.hasArrow?(n(),l("svg",{key:0,class:O(["icon",e.pool.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},ge,2)):c("",!0)],2)]),i("div",he,[e.inputValue&&e.amountPirce!="--"?(n(),l("div",ye," $"+d(("formatNumber"in e?e.formatNumber:b(V))(e.amountPirce)),1)):(n(),l("div",Se)),i("div",Ce,[i("div",_e,[w(d(e.isTotal?e.$t("common.total"):e.$t("common.balance"))+" ",1),i("span",$e,d(e.wallet.connected?("addCommom"in e?e.addCommom:b(f))(e.balance,e.coinDecimals):"0"),1),e.havemax&&e.wallet.connected?(n(),m(p,{key:0,disabled:!e.coinName||("addCommom"in e?e.addCommom:b(f))(e.halfBalance,e.coinDecimals)==0,class:"max-btn",onClick:t[3]||(t[3]=o=>e.$emit("onHalf"))},{default:$(()=>[w(d("Half"))]),_:1},8,["disabled"])):c("",!0),e.havemax&&e.wallet.connected?(n(),m(p,{key:1,disabled:!e.coinName||("addCommom"in e?e.addCommom:b(f))(e.balance,e.coinDecimals)==0,class:"max-btn",onClick:t[4]||(t[4]=o=>e.$emit("onMax"))},{default:$(()=>[w(d(e.$t("button.max")),1)]),_:1},8,["disabled"])):c("",!0)])])])])}const ze=Q(de,[["render",we],["__scopeId","data-v-9682b482"]]);export{ze as _};
