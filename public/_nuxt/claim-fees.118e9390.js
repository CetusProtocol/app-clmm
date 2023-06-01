import{_ as fo}from"./token-warning.c64039ed.js";import{_ as co}from"./status-block.fe6e045a.js";import{u as so,c as io,k as L,g as Io,b as _,e as R}from"./pool.0ee2ab8c.js";import{a as z,l as to,r as q,m as g,e as H,q as ao,o as d,f as m,h as e,i as I,w as O,t as $,v as i,x as w,z as F,u,S as ko,p as J,k as W,D as M,b as ho,c as lo,j as V,T as vo,B as ro,O as bo,M as go,L as _o}from"./entry.97513d1f.js";/* empty css              */import{i as j}from"./import-icon.de3e6c66.js";import{u as G}from"./index.f0ad319f.js";import{_ as uo}from"./icon-arrow_2x.948aedb2.js";import{_ as mo}from"./icon-arrow_2x.4ffddb8e.js";/* empty css              */import{u as Co}from"./notifi.74dd4920.js";const So=z({props:{positionInfo:{type:Object,required:!0,default:()=>({})}},setup(o){const{t:p}=to();let C=q(!1),U=q(!0);const k=G(),S=so(),n=g(()=>S),l=g(()=>{var t,r,v,b,P,N,B,T;if(io(o.positionInfo))return" --";{const D=o.positionInfo.amountA*((r=n.value.RATES[(t=o.positionInfo)==null?void 0:t.token_a.address])==null?void 0:r.price),E=o.positionInfo.amountB*((b=n.value.RATES[(v=o.positionInfo)==null?void 0:v.token_b.address])==null?void 0:b.price);return(N=n.value.RATES[(P=o.positionInfo)==null?void 0:P.token_a.address])!=null&&N.price&&((T=n.value.RATES[(B=o.positionInfo)==null?void 0:B.token_b.address])!=null&&T.price)?D+E:" --"}}),h=g(()=>{var t,r,v,b;return(r=n.value.RATES[(t=o.positionInfo)==null?void 0:t.token_a.name.toUpperCase()])!=null&&r.price&&l.value!=="--"?(o.positionInfo.amountA*((b=n.value.RATES[(v=o.positionInfo)==null?void 0:v.token_a.name.toUpperCase()])==null?void 0:b.price)/l.value*100).toFixed(0):" --"}),f=g(()=>{var t,r,v,b;return(r=n.value.RATES[(t=o.positionInfo)==null?void 0:t.token_b.name.toUpperCase()])!=null&&r.price&&l.value!=="--"?(o.positionInfo.amountB*((b=n.value.RATES[(v=o.positionInfo)==null?void 0:v.token_b.name.toUpperCase()])==null?void 0:b.price)/l.value*100).toFixed(0):" --"}),s=g(()=>n.value.allTokenObj&&o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.address&&n.value.allTokenObj[o.positionInfo.token_a.address]&&n.value.allTokenObj[o.positionInfo.token_a.address].logoURI),a=g(()=>n.value.allTokenObj&&o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.address&&n.value.allTokenObj[o.positionInfo.token_b.address]&&n.value.allTokenObj[o.positionInfo.token_b.address].logoURI),c=g(()=>{var t,r;return(r=(t=o.positionInfo)==null?void 0:t.poolInfo)==null?void 0:r.needReverse}),y=t=>{var r;return(t==null?void 0:t.logoURI)||(t==null?void 0:t.logo_url)||((r=n.value.tokensObj[t==null?void 0:t.address])==null?void 0:r.logo_url)||(k.theme==="default"?j("/image/coins/unknown.png"):j("/image/coins/sui-unknown.png"))};return{tokensObj:g(()=>n.value.tokensObj),fromPercent:f,toPercent:h,amountUSD:l,showNum:L,t:p,importIcon:j,indexStore:k,rateChange:U,decimalFormat:Io,fromCoinUrl:s,toCoinUrl:a,pools:n,addCommom:_,isPc:C,needReverse:c,getCoinIcon:y,decimalUi:R}}});const po=o=>(J("data-v-27ab0699"),o=o(),W(),o),yo={key:0,class:"position-card"},wo={key:0,class:"coin-pair"},Uo={class:"coin-a"},$o={class:"coin-b"},Oo={key:1,class:"coin-pair"},Po={class:"coin-a"},Ro={key:0,class:"token-warning"},jo={class:"coin-b"},Ao={key:0,class:"token-warning"},No={class:"fee"},Bo={class:"right"},To={key:0,class:"status"},Do={class:"min-and-max"},Eo={key:0},Lo={class:"text"},qo={key:0,src:uo,alt:""},Mo={key:1,src:mo,alt:""},Fo={class:"text"},Vo={key:1},zo={class:"text"},Ho={key:0,src:uo,alt:""},Jo={key:1,src:mo,alt:""},Wo={class:"text"},Go=po(()=>e("div",null,[e("svg",{class:"icon icon-up","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),Ko=po(()=>e("div",null,[e("svg",{class:"icon icon-down","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),Qo=[Go,Ko],Xo={class:"liquidity"},Yo={class:"label"},Zo={class:"value"},xo={class:"item"},oe={class:"rate"},ee={class:"item"},ne={class:"rate"};function se(o,p,C,U,k,S){const n=fo,l=ko,h=co,f=ao("image");return o.positionInfo?(d(),m("div",yo,[e("div",{class:F(["left",`position-status-${o.positionInfo&&o.positionInfo.currentStatus&&o.positionInfo.currentStatus.toLowerCase()}`])},[I(l,{class:"left-skeleton",loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:O(()=>{var s,a,c,y;return[o.needReverse?(d(),m("div",Oo,[e("div",null,[e("div",Po,[$(e("img",null,null,512),[[f,o.toCoinUrl||o.getCoinIcon(o.positionInfo.token_b)]]),o.tokensObj&&o.tokensObj[o.positionInfo.token_b.address]&&o.tokensObj[o.positionInfo.token_b.address].isSelfBuilt?(d(),m("div",Ro)):w("",!0)]),e("div",jo,[$(e("img",null,null,512),[[f,o.fromCoinUrl||o.getCoinIcon(o.positionInfo.token_a)]]),o.tokensObj&&o.tokensObj[o.positionInfo.token_a.address]&&o.tokensObj[o.positionInfo.token_a.address].isSelfBuilt?(d(),m("div",Ao)):w("",!0)])]),e("span",null,i(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol)+" - "+i(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol),1)])):(d(),m("div",wo,[e("div",null,[e("div",Uo,[$(e("img",null,null,512),[[f,o.fromCoinUrl||o.getCoinIcon(o.positionInfo.token_a)]]),I(n,{address:(a=(s=o.positionInfo)==null?void 0:s.token_a)==null?void 0:a.address,"style-params":{width:"16px",height:"16px",left:"25px",bottom:"10px"}},null,8,["address"])]),e("div",$o,[$(e("img",null,null,512),[[f,o.toCoinUrl||o.getCoinIcon(o.positionInfo.token_b)]]),I(n,{address:(y=(c=o.positionInfo)==null?void 0:c.token_b)==null?void 0:y.address,"style-params":{width:"16px",height:"16px",left:"25px",bottom:"10px"}},null,8,["address"])])]),e("span",null,i(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol)+" - "+i(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol),1)])),e("div",No,i(o.$t("common.fee"))+" "+i(o.positionInfo.fee*100)+"% ",1)]}),_:1},8,["loading"])],2),e("div",Bo,[o.pools.currentPositionLoading?w("",!0):(d(),m("div",To,[I(h,{"current-status":o.positionInfo.currentStatus||"","block-name":"detail"},null,8,["current-status"])])),I(l,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:O(()=>[e("div",Do,[(o.needReverse?!o.rateChange:o.rateChange)?(d(),m("div",Eo,[e("div",Lo,i(("addCommom"in o?o.addCommom:u(_))(("decimalUi"in o?o.decimalUi:u(R))(String(o.positionInfo.minPrice),6))),1),o.indexStore.theme=="default"?(d(),m("img",qo)):(d(),m("img",Mo)),e("div",Fo,i(o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("∞")>-1||o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("+")>-1?"∞":("addCommom"in o?o.addCommom:u(_))(("decimalUi"in o?o.decimalUi:u(R))(String(o.positionInfo.maxPrice),6)))+" "+i(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol)+" per "+i(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol),1)])):(d(),m("div",Vo,[e("div",zo,i(("addCommom"in o?o.addCommom:u(_))(("decimalUi"in o?o.decimalUi:u(R))(String(1/Number(o.positionInfo.maxPrice)),6))),1),o.indexStore.theme=="default"?(d(),m("img",Ho)):(d(),m("img",Jo)),e("div",Wo,i(o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("∞")>-1||o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("+")>-1?"∞":("addCommom"in o?o.addCommom:u(_))(("decimalUi"in o?o.decimalUi:u(R))(String(1/Number(o.positionInfo.minPrice)),6)))+" "+i(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol)+" per "+i(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol),1)])),e("div",{class:"icon-change",onClick:p[0]||(p[0]=s=>o.rateChange=!o.rateChange)},Qo)])]),_:1},8,["loading"]),e("div",Xo,[I(l,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:O(()=>[e("div",Yo,i(o.$t("common.liquidity")),1),e("div",Zo," $"+i(o.amountUSD=="--"?"--":Number(o.amountUSD)==0?0:Number(o.amountUSD)<.01?"<0.01":("addCommom"in o?o.addCommom:u(_))(o.amountUSD,2)),1)]),_:1},8,["loading"])]),e("div",{class:F(o.needReverse?"token-num reverse":"token-num")},[I(l,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:O(()=>{var s,a,c,y,A,t,r,v,b,P,N,B,T,D,E,K,Q,X,Y,Z,x,oo,eo,no;return[e("div",xo,[e("div",null,[$(e("img",null,null,512),[[f,o.fromCoinUrl||o.getCoinIcon((s=o.positionInfo)==null?void 0:s.token_a)]]),I(n,{address:(c=(a=o.positionInfo)==null?void 0:a.token_a)==null?void 0:c.address,"style-params":{width:"12px",height:"12px",left:"15px",bottom:"0px"}},null,8,["address"]),e("p",null,i(("decimalUi"in o?o.decimalUi:u(R))((y=o.positionInfo)==null?void 0:y.amountA,(t=(A=o.positionInfo)==null?void 0:A.token_a)==null?void 0:t.decimals)),1),e("span",null,i((v=(r=o.positionInfo)==null?void 0:r.token_a)==null?void 0:v.symbol)+" "+i((P=(b=o.positionInfo)==null?void 0:b.token_a)!=null&&P.labels&&((B=(N=o.positionInfo)==null?void 0:N.token_a)!=null&&B.labels[0])?`(${o.positionInfo.token_a.labels[0]})`:""),1)]),e("div",oe,i(("addCommom"in o?o.addCommom:u(_))(o.positionInfo.fromPercent,0))+"% ",1)]),e("div",ee,[e("div",null,[$(e("img",null,null,512),[[f,o.toCoinUrl||o.getCoinIcon((T=o.positionInfo)==null?void 0:T.token_b)]]),I(n,{address:(E=(D=o.positionInfo)==null?void 0:D.token_b)==null?void 0:E.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),e("p",null,i(("decimalUi"in o?o.decimalUi:u(R))((K=o.positionInfo)==null?void 0:K.amountB,(X=(Q=o.positionInfo)==null?void 0:Q.token_b)==null?void 0:X.decimals)),1),e("span",null,i((Z=(Y=o.positionInfo)==null?void 0:Y.token_b)==null?void 0:Z.symbol)+" "+i((oo=(x=o.positionInfo)==null?void 0:x.token_b)!=null&&oo.labels&&((no=(eo=o.positionInfo)==null?void 0:eo.token_b)!=null&&no.labels[0])?`(${o.positionInfo.token_b.labels[0]})`:""),1)]),e("div",ne,i(("addCommom"in o?o.addCommom:u(_))(o.positionInfo.toPercent,0))+"%",1)])]}),_:1},8,["loading"])],2)])])):w("",!0)}const je=H(So,[["render",se],["__scopeId","data-v-27ab0699"]]),ie=z({props:{positionInfo:{type:Object,default:()=>({})}},setup(o){const p=Co(),C=g(()=>p),U=g(()=>C.value.status),k=G();M(()=>[C.value.targetGroups],s=>{},{immediate:!0});const S=q(!1);M(()=>U.value,s=>{s=="authenticated",S.value=!1},{immediate:!0});const n=q(!1),l=async()=>{n.value=!n.value;const s={pool_address:o.positionInfo.poolAddress,position_index:o.positionInfo.index},a=o.positionInfo.nftHash;await p.subscribePosition(s,a,n.value)},h=s=>{const a=s.sources;n.value=a.some(c=>JSON.parse(c.blockchainAddress).pool_address==o.positionInfo.poolAddress&&Number(JSON.parse(c.blockchainAddress).position_index)==Number(o.positionInfo.index))},f=ho();return M(()=>[C.value.sourceGroups,o.positionInfo],([s,a])=>{var c,y,A;n.value=!1,s&&s.length>0&&s[0]&&a&&!io(a)&&((A=(y=(c=f==null?void 0:f.currentRoute)==null?void 0:c.value)==null?void 0:y.query)==null?void 0:A.token)==(a==null?void 0:a.name)&&h(s[0])},{immediate:!0,deep:!0}),{importIcon:j,isShowSetUp:S,changeSwitch:l,checked:n,notifiStatus:U,store:k}}});const te=o=>(J("data-v-f7b0e511"),o=o(),W(),o),ae={class:"range-alerts"},le={class:"range-alerts-top"},de={class:"title"},re=te(()=>e("div",{class:"title-all"},[e("span",{class:"Range"},"Range Alerts")],-1)),ue={key:1,class:"h5-switch-box"},me={class:"range-alerts-bottom"},pe={key:0,class:"pc-switch-box"};function fe(o,p,C,U,k,S){const n=ro,l=bo;return d(),m("div",ae,[e("div",le,[e("div",de,[re,o.isShowSetUp||o.notifiStatus!=="authenticated"?(d(),lo(n,{key:0,class:"range-alerts-button",onClick:p[0]||(p[0]=vo(h=>o.store.setIsShowNotifi(!0),["stop"]))},{default:O(()=>[V(" Set up ")]),_:1})):w("",!0),!o.isShowSetUp&&o.notifiStatus=="authenticated"?(d(),m("div",ue,[I(l,{class:"range-alerts-switch",checked:o.checked,disabled:o.notifiStatus!=="authenticated",onChange:o.changeSwitch},null,8,["checked","disabled","onChange"])])):w("",!0)])]),e("div",me,[V(" Receive alerts via Telegram, SMS, or email when this position goes out of range. "),!o.isShowSetUp&&o.notifiStatus=="authenticated"?(d(),m("div",pe,[I(l,{class:"range-alerts-switch",checked:o.checked,disabled:o.notifiStatus!=="authenticated",onChange:o.changeSwitch},null,8,["checked","disabled","onChange"])])):w("",!0)])])}const Ae=H(ie,[["render",fe],["__scopeId","data-v-f7b0e511"]]),ce=z({components:{Modal:go},props:{positionInfo:{type:Object,required:!0},isLoading:{type:Boolean,required:!0},needReverse:{type:Boolean,required:!1}},setup(o,p){const{t:C,locale:U}=to(),k=G(),{copy:S}=k,n=()=>{p.emit("toClaim")},l=so(),h=g(()=>l);return{showNum:L,toClaim:n,t:C,addCommom:_,importIcon:j,store:k,copy:S,getCoinIcon:s=>{var a;return(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||((a=h.value.tokensObj[s==null?void 0:s.address])==null?void 0:a.logo_url)||(k.theme==="default"?j("/image/coins/unknown.png"):j("/image/coins/sui-unknown.png"))}}}});const Ie=o=>(J("data-v-aee0080d"),o=o(),W(),o),ke=Ie(()=>e("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),he={key:0,class:"pc-claim"},ve={key:1,class:"pc-claim"};function be(o,p,C,U,k,S){const n=ro,l=_o("Modal"),h=ao("image");return d(),lo(l,{visible:!0,class:"claim-fees",centered:"",closable:!0,title:o.$t("modal.claimFees"),width:"400px",footer:null,onCancel:p[0]||(p[0]=f=>o.$emit("onClose"))},{closeIcon:O(()=>[ke]),default:O(()=>[e("div",{class:F(o.needReverse?"claim-container reverse":"claim-container")},[o.positionInfo&&o.positionInfo.token_a.symbol?(d(),m("div",he,[$(e("img",null,null,512),[[h,o.getCoinIcon(o.positionInfo.token_a)]]),e("span",null,i(("showNum"in o?o.showNum:u(L))(o.positionInfo.feeOwedA,o.positionInfo.token_a.decimals))+" "+i(o.positionInfo.token_a.symbol),1)])):w("",!0),o.positionInfo&&o.positionInfo.token_b.symbol?(d(),m("div",ve,[$(e("img",null,null,512),[[h,o.getCoinIcon(o.positionInfo.token_b)]]),e("span",null,i(("showNum"in o?o.showNum:u(L))(o.positionInfo.feeOwedB,o.positionInfo.token_b.decimals))+" "+i(o.positionInfo.token_b.symbol),1)])):w("",!0)],2),I(n,{class:"big-btn claim-btn",disabled:o.isLoading||("addCommom"in o?o.addCommom:u(_))(o.positionInfo.feeOwedA,o.positionInfo.token_a.decimals)==0&&("addCommom"in o?o.addCommom:u(_))(o.positionInfo.feeOwedB,o.positionInfo.token_b.decimals)==0||o.positionInfo.poolInfo.is_pause,onClick:o.toClaim},{default:O(()=>[V(i(o.$t("common.claim")),1)]),_:1},8,["disabled","onClick"])]),_:1},8,["title"])}const Ne=H(ce,[["render",be],["__scopeId","data-v-aee0080d"]]);export{je as _,Ae as a,Ne as b};
