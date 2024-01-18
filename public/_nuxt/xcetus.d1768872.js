import{_ as lt}from"./xwhale-header.2e5e44d7.js";import{r as f,X as He,q as O,e as q,o as r,f as w,h as n,v as y,j as E,y as se,l as i,s as st,x as V,t as Xe,c as L,M as Ye,p as Z,k as ee,i as W,F as Be,E as Re,w as H,B as ie,Q as je,u as Ee,A as be,a as De,C as it,L as ut,I as rt,$ as dt,H as ct,K as mt,a9 as vt,G as gt}from"./entry.4b03dc9c.js";/* empty css              */import{a as ne,u as ue}from"./sha256.033d7784.js";import{u as Pe}from"./xcetus.7d473eac.js";import{i as J}from"./import-icon.de3e6c66.js";import{a as P,s as ye,e as Le,u as Ue,c as Se,p as Q,z as Ce}from"./pool.d6b5ef6c.js";import{u as We}from"./useWhale.48eef1de.js";import{_ as qe}from"./xWHALE-icon.2df34cd4.js";import{_ as Ge}from"./WHALE-icon.28f954ba.js";import{_ as ht}from"./head-switch.a4e66039.js";/* empty css              */import{_ as _t}from"./icon-selected_3x.09e9a6f0.js";/* empty css              *//* empty css              */import{D as Fe}from"./decimal.0bdeb344.js";import{u as pt}from"./useTheme.cbcc5121.js";import{_ as ft}from"./img-leverage_2x.1c577303.js";const wt={props:{startTime:{type:String,require:!0,default:""},endTime:{type:Number,require:!0,default:0}},setup(e,t){const s=f("--"),a=f("--"),k=f("--"),S=f("--");let d=null;He(()=>{window.clearInterval(d)});const C=()=>{const g=new Date().getTime()/1e3;Number(g)<=Number(e.startTime)&&T(e.startTime),Number(g)>Number(e.startTime)&&Number(g)<=Number(e.endTime)&&T(e.endTime)},T=g=>{clearInterval(d),window.clearInterval(d),d=setInterval(()=>{let _=new Date().getTime()/1e3,c=g-parseInt(String(_));if(c==0){t.emit("countDown"),clearInterval(d),window.clearInterval(d),d=null;return}else c<0&&(clearInterval(d),window.clearInterval(d),t.emit("countDown"),d=null);c--;let v=parseInt(String(c/60/60/24));v=(v<10,v);let l=parseInt(String(c/60/60%24));l=(l<10,l);let $=parseInt(String(c/60%60));$=($<10,$);let x=parseInt(String(c%60));x=x<10?+x:x,s.value=v,a.value=l,k.value=$,S.value=x},1e3)};return O(()=>e.startTime,(g,_)=>{g!==_&&C()},{immediate:!0}),{day:s,hour:a,min:k,sec:S}}};const Ct={class:"count-time"};function bt(e,t,s,a,k,S){return r(),w("div",Ct,[n("p",null,y(a.day)+"d",1),E(" : "),n("p",null,y(a.hour)+"h",1),E(" : "),n("p",null,y(a.min)+"m",1),E(" : "),n("p",null,y(a.sec)+"s",1)])}const yt=q(wt,[["render",bt],["__scopeId","data-v-ce10c596"]]),St={props:{titleText:{type:String,default:""},tipsText:{type:String,default:""},imgIcon:{type:String,default:""},value:{type:String,default:"--"},tokenSymbol:{type:String,default:""},logo:{type:String,default:""}},setup(e){const{t}=se(),s=ne(),a=i(()=>s);return{t,wallet:a}}};const Tt=e=>(Z("data-v-844310a2"),e=e(),ee(),e),kt={class:"table-rewards"},$t={key:0,class:"logo"},It=["src"],At={class:"text-top-all"},Nt={key:0,class:"icon-hover-box"},xt=Tt(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-icon-information"})],-1)),Bt={class:"tips-text-box"},Rt={key:0},Et={key:0,alt:""},Dt={key:2};function Pt(e,t,s,a,k,S){const d=Ye,C=st("image");return r(),w("div",kt,[s.logo?(r(),w("div",$t,[n("img",{src:s.logo,alt:""},null,8,It)])):V("",!0),n("div",null,[n("div",At,[n("p",null,y(s.titleText),1),s.tipsText?(r(),w("div",Nt,[xt,n("div",Bt,y(s.titleText=="est.APR"?"Estimated APR of the current epoch for all xCETUS holders.":"The number of qualified positions in this epoch."),1)])):V("",!0)]),n("span",null,[s.value!=="--"?(r(),w("p",Rt,[s.imgIcon?Xe((r(),w("img",Et,null,512)),[[C,s.imgIcon]]):V("",!0),E(y(s.value)+" ",1),n("span",null,y(s.tokenSymbol),1)])):s.value=="--"&&a.wallet&&a.wallet.address?(r(),L(d,{key:1,loading:!0,class:"loading-token-skeleton",active:"",paragraph:!1})):(r(),w("p",Dt,"--"))])])])}const Lt=q(St,[["render",Pt],["__scopeId","data-v-844310a2"]]),Ut={setup(e){const{t}=se(),s=Pe(),a=i(()=>s),k=i(()=>a.value.pendingAmount),S=i(()=>a.value.newPendingAmount),d=i(()=>a.value.rewardCoinAmount),C=i(()=>a.value.nextStartTime),T=i(()=>1683094391),g=i(()=>a.value.xcetusShare&&P(a.value.xcetusShare,3)),_=ne(),u=i(()=>_),c=i(()=>a.value.cetusApr&&a.value.cetusApr>.01?P(ye(a.value.cetusApr,2),2):P(a.value.cetusApr,2)),v=i(()=>a.value.pendingCoinInfo),l=i(()=>a.value.newPendingCoinInfo),$=i(()=>a.value.rewardCoin),x=f("");O(()=>v.value,p=>{p&&Se(p),x.value="Pending yield"},{immediate:!0});const ae=f("");O(()=>l.value,p=>{p&&!Se(p)?ae.value=`Pending yield (${p.symbol})`:ae.value="Pending yield"},{immediate:!0});const oe=f();O(()=>$.value,p=>{p&&!Se(p)?oe.value=`Pending yield (${p.symbol})`:oe.value="Pending yield"},{immediate:!0});const ke=()=>{setTimeout(()=>{s.getDividendManager()},3e3)},ce=i(()=>a.value.dividendManagerInfo),G=i(()=>{const p=parseInt(String(new Date().getTime()/1e3)),N=ce.value.interval_day,h=(p-Number(ce.value.start_time))/(N*60);return parseInt(String(h))>0}),me=ue(),j=i(()=>me),{setIsShowSuccess:$e,setIsShowRejected:ve,setIsShowWaiting:I,setTransactionDesc:le,setTransactionTxid:ge}=me,Ie=We("Sui"),z=f(!1),A=i(()=>a.value.venft_id),F=i(()=>j.value.chainName?Le(j.value.chainName):{}),he=async()=>{z.value=!0,I(!0),ge("");let p=`${t("tips.claimingPendingYield")} `,N="";X.value.forEach((h,Y)=>{N=N+`${P(h.amount)} ${h.symbol} ${Y==X.value.length-1?"":"and "}`}),le(p+N);try{let h;const Y=await Ie.getRedeemDividendV2Payload(A.value),M=await u.value.currentWallet.signAndExecuteTransactionBlock(Y);if(h=F.value.handleTx(M),h&&h.hash){ge(h.hash),I(!1),$e(!0);const te={title:"Claim",desc:`Claimed ${N} successfully.`,hash:h.hash,tit:"Claimed Rewards",icon:"icon-icon-Removed",tokenInfo:{tokena:v.value.symbol,numa:`+ ${k.value}`,logoa:v.value.logo_url}};F.value.showTransitionPending(te),await F.value.watchTransaction(te)&&setTimeout(()=>{s.getVeNFTDividendInfo(),z.value=!1},3e3),s.getOwnerLockCetuss(u.value.address)}else I(!1),ve(!0),z.value=!1}catch{I(!1),ve(!0),z.value=!1}},b=Ue(),_e=i(()=>b),B=p=>{var N;return(p==null?void 0:p.logoURI)||(p==null?void 0:p.logo_url)||((N=_e.value.tokensObj[p==null?void 0:p.address])==null?void 0:N.logo_url)},X=i(()=>a.value.xcetusRewardList);return{t,pendingAmount:k,nextStartTime:C,wallet:u,myShare:g,importIcon:J,nextEndTime:T,pendingYieldText:x,cetusApr:c,pendingCoinInfo:v,getNextEpoch:ke,canClaim:G,claimPendingYield:he,claimLoading:z,addCommom:P,newPendingCoinInfo:l,newPendingAmount:S,newPendingYieldText:ae,rewardCoin:$,rewardCoinAmount:d,rewardCoinYieldText:oe,getCoinIcon:B,xcetusRewardList:X}}},Wt=""+new URL("staking-rewards-banner-h5.1c7401db.png",import.meta.url).href,Mt=""+globalThis.__publicAssetsURL("sui-image/icon_pendingyield@2x.png");const re=e=>(Z("data-v-a063a6cd"),e=e(),ee(),e),Ot={class:"top-banner"},Vt=re(()=>n("img",{src:Wt,alt:""},null,-1)),Ft=re(()=>n("p",null,"Convert CETUS to xCETUS to start earning",-1)),Ht={class:"bot-count"},Xt=re(()=>n("span",null,"Reward distribution in ",-1)),Yt={class:"holder-rewards"},jt=re(()=>n("div",{class:"title"},[n("div",{class:"left"},[n("span",null,"xCETUS Staking Rewards")])],-1)),qt={class:"rewards-value"},Gt={key:0,class:"pending-yield"},zt=re(()=>n("div",{class:"pending-yield-title"},[n("img",{src:Mt,alt:""}),n("span",null,"Pending Yield")],-1)),Kt={class:"pending-yield-list"},Qt=["src"],Jt={class:"claim-btn-box"};function Zt(e,t,s,a,k,S){const d=yt,C=Lt,T=ie;return r(),w("div",null,[n("div",Ot,[Vt,Ft,n("div",Ht,[Xt,W(d,{"start-time":a.nextStartTime,onCountDown:t[0]||(t[0]=g=>e.$emit("getNextEpoch"))},null,8,["start-time"])])]),n("div",Yt,[jt,n("div",qt,[W(C,{"title-text":"est.APR","tips-text":"good",value:"≈"+a.cetusApr+"%",logo:"/sui-image/icon_estapr@2x.png"},null,8,["title-text","value"]),W(C,{"title-text":"My share",value:a.myShare!=="--"?"≈"+a.myShare+"%":"--",logo:"/sui-image/icon_myshare@2x.png"},null,8,["value"]),a.xcetusRewardList&&a.xcetusRewardList.length==0?(r(),L(C,{key:0,"title-text":"Pending yield",value:a.wallet&&a.wallet.address?"0":"--",logo:"/sui-image/icon_pendingyield@2x.png"},null,8,["value"])):V("",!0)]),a.wallet&&a.wallet.address&&a.xcetusRewardList&&a.xcetusRewardList.length>0?(r(),w("div",Gt,[zt,n("div",Kt,[(r(!0),w(Be,null,Re(a.xcetusRewardList,(g,_)=>(r(),w("div",{key:_,class:"pending-yield-item"},[n("div",null,[n("img",{src:a.getCoinIcon(g),alt:""},null,8,Qt),n("span",null,y(g.symbol),1)]),n("div",null,y(a.addCommom(g.amount,6)),1)]))),128)),n("div",Jt,[a.wallet&&a.wallet.address&&a.xcetusRewardList&&a.xcetusRewardList.length>0?(r(),L(T,{key:0,class:"claim-btn",loading:a.claimLoading,disabled:!a.canClaim||a.xcetusRewardList&&a.xcetusRewardList.length==0,onClick:a.claimPendingYield},{default:H(()=>[E(" Claim ")]),_:1},8,["loading","disabled","onClick"])):V("",!0)])])])):V("",!0)])])}const en=q(Ut,[["render",Zt],["__scopeId","data-v-a063a6cd"]]),tn={props:{startTime:{type:String,require:!0,default:""},endTime:{type:Number,require:!0,default:0}},setup(e,t){const s=f("--"),a=f("--"),k=f("--"),S=f("--");let d=null;He(()=>{window.clearInterval(d)});const C=()=>{const g=new Date().getTime()/1e3;Number(g)<=Number(e.startTime)&&T(e.startTime),Number(g)>Number(e.startTime)&&Number(g)<=Number(e.endTime)&&T(e.endTime)},T=g=>{d=setInterval(()=>{let _=new Date().getTime()/1e3,c=g-parseInt(String(_));if(c==0){t.emit("countDown"),clearInterval(d),window.clearInterval(d),d=null;return}else c<0&&(clearInterval(d),window.clearInterval(d),t.emit("countDown"),d=null);c--;let v=parseInt(String(c/60/60/24));v=v<10?"0"+v:v;let l=parseInt(String(c/60/60%24));l=l<10?"0"+l:l;let $=parseInt(String(c/60%60));$=$<10?"0"+$:$;let x=parseInt(String(c%60));x=x<10?"0"+x:x,s.value=v,a.value=l,k.value=$,S.value=x},1e3)};return O(()=>e.startTime,(g,_)=>{g!==_&&C()},{immediate:!0}),{day:s,hour:a,min:k,sec:S}}};const Te=e=>(Z("data-v-131b3f4e"),e=e(),ee(),e),nn={class:"count-down"},an=Te(()=>n("span",null,"D : ",-1)),on=Te(()=>n("span",null,"H : ",-1)),ln=Te(()=>n("span",null,"M : ",-1)),sn=Te(()=>n("span",null,"S",-1));function un(e,t,s,a,k,S){return r(),w("div",nn,[E(y(a.day)+" ",1),an,E(" "+y(a.hour)+" ",1),on,E(" "+y(a.min)+" ",1),ln,E(" "+y(a.sec)+" ",1),sn])}const rn=q(tn,[["render",un],["__scopeId","data-v-131b3f4e"]]),dn={components:{WcountDown:rn},props:{vItem:{type:Object,default:()=>({})},loading:{type:Boolean,default:!1}},setup(e,t){const{t:s}=se(),a=Pe(),k=ue(),S=i(()=>k),d=v=>{t.emit("claim",v),a.setClaimLoading(v.id)},C=i(()=>a),T=i(()=>new Date().getTime()/1e3>e.vItem.locked_until_time),g=v=>{t.emit("cancelRedeemPayload",v),a.setClaimLoading(v.id)};i(()=>S.value.chainName),We("Sui");const _=ne();return i(()=>_),i(()=>C.value.venft_id),i(()=>S.value.chainName?Le(S.value.chainName):{}),{t:s,prettyAmount:Q,claimBoolean:T,toClaim:d,toCancel:g,claimWhale:v=>{t.emit("claimWhale",v)},cancelRedeemPayload:v=>{t.emit("cancelRedeemPayload",v)}}}};const Me=e=>(Z("data-v-22a782cd"),e=e(),ee(),e),cn={class:"vesting-box"},mn={class:"left"},vn=Me(()=>n("img",{src:qe,alt:""},null,-1)),gn=Me(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-icon-swap2"})],-1)),hn=Me(()=>n("img",{src:Ge,alt:""},null,-1)),_n={class:"available-all"},pn={class:"available"},fn={key:0},wn={key:1};function Cn(e,t,s,a,k,S){const d=je("WcountDown"),C=ie;return r(),w("div",cn,[n("div",mn,[n("p",null,[n("span",null,[vn,E(" "+y(("addCommom"in e?e.addCommom:Ee(P))(a.prettyAmount(s.vItem.xcetus_amount,9),9))+" xCETUS ",1)]),gn,n("span",null,[hn,E(" "+y(("addCommom"in e?e.addCommom:Ee(P))(a.prettyAmount(s.vItem.cetus_amount,9),9))+" CETUS ",1)])]),n("div",_n,[n("div",pn,[n("span",null,y(a.claimBoolean?"Available":"Available in"),1),a.claimBoolean?V("",!0):(r(),L(d,{key:0,"start-time":s.vItem.locked_start_time,"end-time":s.vItem.locked_until_time,onCountDown:t[0]||(t[0]=T=>e.$emit("countDown"))},null,8,["start-time","end-time"]))]),n("div",{class:be(a.claimBoolean?"highlight right-h5":"right-h5")},[a.claimBoolean?(r(),w("span",fn,"Claim")):(r(),w("span",wn,"Cancel"))],2)])]),a.claimBoolean?(r(),L(C,{key:0,disabled:!a.claimBoolean||s.loading,loading:s.loading,onClick:t[1]||(t[1]=T=>a.claimWhale(s.vItem))},{default:H(()=>[E(y(a.claimBoolean?"Claim":"Cancel"),1)]),_:1},8,["disabled","loading"])):(r(),L(C,{key:1,type:"text",class:"right",disabled:s.loading,loading:s.loading,onClick:t[2]||(t[2]=T=>a.cancelRedeemPayload(s.vItem))},{default:H(()=>[E(y(a.claimBoolean?"Claim":"Cancel"),1)]),_:1},8,["disabled","loading"]))])}const bn=q(dn,[["render",Cn],["__scopeId","data-v-22a782cd"]]),yn=De({props:{inputValue:{type:String,default:""},coinSymbol:{type:String,default:""},whaleDirection:{type:String,default:""},address:{type:String,default:""},balance:{type:String,default:""}},setup(e,t){const{t:s,locale:a}=se(),k=ue(),S=i(()=>k),d=it(ut,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0}),C=ne(),T=i(()=>C),g=Ue(),_=i(()=>g),u=v=>{const $=new RegExp("[^\\d-]*(\\d*(?:\\.\\d{0,9})?).*$");v.target.value=v.target.value.replace($,"$1")},c=i(()=>{var v;return _.value.tokensObj&&e.address&&_.value.tokensObj[e.address]&&((v=_.value.tokensObj[e.address])==null?void 0:v.decimals)});return O(()=>_.value.RATES,v=>{},{immediate:!0}),{pool:_,t:s,addCommom:P,store:S,wallet:T,indicator:d,inputChange:u,importIcon:J,coinDecimals:c}}});const Sn=e=>(Z("data-v-c5336450"),e=e(),ee(),e),Tn={class:"card"},kn={class:"top"},$n={class:"left"},In={class:"loading-token"},An={key:0,src:Ge,alt:""},Nn={key:1,src:qe,alt:""},xn={class:"bottom"},Bn=Sn(()=>n("div",null,null,-1)),Rn={class:"top"},En={class:"right"},Dn={key:0,class:"balance"},Pn={key:2,class:"balance"};function Ln(e,t,s,a,k,S){var g,_;const d=rt,C=Ye,T=ie;return r(),w("div",Tn,[n("div",kn,[W(d,{value:e.inputValue,placeholder:"0.0",onChange:e.inputChange,onInput:t[0]||(t[0]=u=>e.$emit("onInput",u.target.value)),onFocus:t[1]||(t[1]=u=>e.$emit("onFocus"))},null,8,["value","onChange"]),n("div",$n,[n("div",In,[e.coinSymbol=="CETUS"?(r(),w("img",An)):(r(),w("img",Nn)),n("div",null,[n("p",null,y(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1)])])])]),n("div",xn,[Bn,n("div",Rn,[n("div",En,[n("span",null,y(e.$t("common.balance")),1),e.balance!=="--"?(r(),w("span",Dn,y(e.balance>1?("addCommom"in e?e.addCommom:Ee(P))(e.balance):e.balance),1)):e.balance=="--"&&e.wallet&&e.wallet.address?(r(),L(C,{key:1,loading:!0,class:"loading-token-skeleton",active:"",paragraph:!1})):(r(),w("span",Pn,"--")),e.whaleDirection=="From"?(r(),L(T,{key:3,class:"max-btn",disabled:!e.balance||e.balance==0||!((g=e.wallet)!=null&&g.address),onClick:t[2]||(t[2]=u=>e.$emit("halfBalanne"))},{default:H(()=>[E(y("Half"))]),_:1},8,["disabled"])):V("",!0),e.whaleDirection=="From"?(r(),L(T,{key:4,class:"max-btn",disabled:!e.balance||e.balance==0||!((_=e.wallet)!=null&&_.address),onClick:t[3]||(t[3]=u=>e.$emit("maxBalanne"))},{default:H(()=>[E(y(e.$t("button.max")),1)]),_:1},8,["disabled"])):V("",!0)])])])])}const Un=q(yn,[["render",Ln],["__scopeId","data-v-c5336450"]]);const Wn=De({components:{Modal:dt},setup(e,t){const s=ue(),a=f(!1);i(()=>s);const k=ne(),S=i(()=>k);return{store:s,isSelect:a,clickConvert:()=>{a.value&&localStorage.setItem(`notRemind${S.value.address}`,!0),t.emit("clickConvert")}}}}),Oe=e=>(Z("data-v-ee04003a"),e=e(),ee(),e),Mn=Oe(()=>n("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),On=[Mn],Vn={class:"token-waring-conetnt"},Fn=Oe(()=>n("div",{class:"tips-text"},[E(" Please note that after conversion, if you want to convert xCETUS back to CETUS, a vesting period will be applied & different vesting durations correspond to different redeem ratios. "),n("a",{href:"https://cetus-1.gitbook.io/cetus-docs/tokenomics/xcetus",target:"_blank"}," Learn more")],-1)),Hn={class:"read-text"},Xn={key:0,src:_t},Yn=Oe(()=>n("span",null," Do not remind again. ",-1));function jn(e,t,s,a,k,S){const d=ie,C=je("Modal");return r(),L(C,{width:"440px",visible:!0,footer:null,title:null,"mask-closable":!0,onCancel:t[3]||(t[3]=T=>e.$emit("close"))},{closeIcon:H(()=>[(r(),w("svg",{class:"icon modal-icon-close","aria-hidden":"true",onClick:t[0]||(t[0]=T=>e.$emit("close"))},On))]),default:H(()=>[n("div",Vn,[Fn,n("div",Hn,[n("div",{class:"radio",onClick:t[1]||(t[1]=T=>e.isSelect=!e.isSelect)},[e.isSelect?(r(),w("img",Xn)):V("",!0)]),Yn]),W(d,{class:"big-btn continue",onClick:t[2]||(t[2]=()=>e.clickConvert())},{default:H(()=>[E("Convert")]),_:1})])]),_:1})}const qn=q(Wn,[["render",jn],["__scopeId","data-v-ee04003a"]]),Gn=De({setup(){const e=Pe(),t=i(()=>e),s=i(()=>t.value.venft_id),a=i(()=>t.value.venftInfo),k=Ue(),S=i(()=>k),d=ue(),C=i(()=>d),T=pt();i(()=>S.value.tokensObj&&S.value.tokensObj["0x2a4f647bc73f070182436658bff75060246019857c769ad9268c22c4472bca7f::cetus::CETUS"]);const g=f("");let _=f(!1);const u=f(""),c=f(""),v=f(!1),l=f("convert"),{t:$}=se(),x=f([{time:"15 D",num:15},{time:"30 D",num:30},{time:"90 D",num:90},{time:"180 D",num:180}]),ae=f([{name:"est.APR",value:"100.12%"},{name:"My share",value:"<0.1%"},{name:"Pending yield (USDC)",value:0}]),oe=f([{name:"My total locked",value:"$100.12"},{name:"Pending rewards (xCETUS)",value:"100.12"},{name:"",value:""}]),ke=f([{name:"My positions",value:"12"},{name:"My qualified positions",value:"0"},{name:"Pending rewards (xCETUS)",value:"100.12"}]),ce=window.setInterval(()=>{e.getXcetusApr(),b.value.address&&(e.getMyShare(b.value.address),e.getVeNFTDividendInfo())},6e4);ct(()=>{document.addEventListener("visibilitychange",()=>{document.hidden||e.getDividendManager()}),e.getXcetusApr(),e.getDividendManager()}),mt(()=>{window.clearInterval(ce),document.removeEventListener("visibilitychange",()=>{})}),O(()=>C.value.theme,o=>{o!=="sui"&&T.selectSuiTheme()},{immediate:!0});const G=i(()=>t.value.whaleBalance),me=i(()=>t.value.xWhaleBalance),j=i(()=>t.value.availableXwhale),$e=i(()=>t.value.redeemingXwhale),ve=i(()=>{if(l.value=="convert"){if(Number(u.value)>Number(G.value))return!0}else if(Number(u.value)>Number(j.value))return!0;return!u.value||!c.value||Number(u.value)==0||Number(c.value)==0}),I=f("180"),le=i(()=>l.value=="convert"&&Number(u.value)>Number(G.value)?$("button.insufficientBalance",{name:"CETUS"}):l.value!=="convert"&&Number(u.value)>Number(j.value)?$("button.insufficientBalance",{name:"xCETUS"}):Number(I.value)<15?"Minimum vesting duration is 15 days":l.value=="convert"&&s?"Convert":l.value!=="convert"&&s?"Redeem":"Convert"),ge=o=>{u.value="",c.value="",l.value=o},Ie=()=>{_.value=!0,setTimeout(()=>{_.value=!1},300)},z=o=>{I.value=o},A=f(!1),F=We("Sui"),he=ne(),b=i(()=>he),_e=i(()=>t.value.ownerLocks);O(()=>b.value.address,o=>{o?(e.getOwnerVeNFT(o),e.getAccountWhaleBalance(o),e.getOwnerLockCetuss(o),e.getMyShare(o)):e.loginOut()},{immediate:!0});const B=i(()=>C.value.chainName?Le(C.value.chainName):{}),X=i(()=>C.value.chainName),{setIsShowSuccess:p,setIsShowRejected:N,setIsShowWaiting:h,setTransactionDesc:Y,setTransactionTxid:M}=d,te=async()=>{A.value=!0,h(!0),M(""),Y($("tips.converting",{from:`${P(u.value,9)} CETUS`,and:"to",to:`${P(u.value,9)} xCETUS`}));try{let o;const m=Ce(u.value,9),R=await F.depositCetus(m,s.value),U=await b.value.currentWallet.signAndExecuteTransactionBlock(R);if(o=B.value.handleTx(U),o&&o.hash){M(o.hash),h(!1),p(!0);const D={title:"Converted",desc:`Converted ${P(u.value,9)} xCETUS successfully`,hash:o.hash,tit:"Converted",icon:"icon-icon-Swap",tokenInfo:{tokena:"CETUS",numa:`- ${u.value}`,logoa:J("/sui-image/WHALE-icon.png"),tokenb:"xCETUS",numb:`+ ${u.value}`,logob:J("/sui-image/xWHALE-icon.png")}};X.value!=="Aptos"&&(D.res=o.res),B.value.showTransitionPending(D),await B.value.watchTransaction(D)&&setTimeout(()=>{e.getAccountWhaleBalance(b.value.address),e.getOwnerVeNFT(b.value.address),e.getOwnerLockCetuss(b.value.address),e.getMyShare(b.value.address)},3e3),A.value=!1}else h(!1),N(!0),A.value=!1;u.value=""}catch{h(!1),N(!0),A.value=!1,u.value=""}},K=f(!0),Ae=f("0"),ze=async()=>{const o=Ce(u.value,9),m=await F.redeemNum(o,Number(I.value));c.value=Q(m.amountOut,9),Ae.value=m.percent},Ke=async()=>{const o=Ce(c.value,9),m=await F.reverseRedeemNum(o,Number(I.value));u.value=Q(m.amountOut,9),Ae.value=m.percent};O(()=>[u.value,I.value,K.value],([o,m,R])=>{o&&m&&R&&Number(m)>=15&&ze(),!o&&R&&(c.value="")},{immediate:!0}),O(()=>[c.value,I.value,K.value],([o,m,R])=>{o&&m&&!R&&Number(m)>=15&&Ke(),!o&&!R&&(u.value="")},{immediate:!0}),O(()=>[I.value,K.value],([o,m])=>{Number(o)>180?I.value="180":Number(o)<15?m?c.value="":u.value="":o||(m?u.value="":c.value="")},{immediate:!0});const Qe=()=>{K.value=!0,u.value=ye(new Fe(l.value!=="convert"?j.value:G.value).div(new Fe(2)).toString(),9)},Je=()=>{K.value=!0,u.value=l.value!=="convert"?ye(j.value,9):ye(G.value,9)},Ve=async()=>{A.value=!0,h(!0),M(""),Y($("tips.redeeming",{from:`${P(u.value,9)} xCETUS`,to:`${P(c.value,9)} CETUS`}));try{let o;const m=Ce(u.value,9),R=await F.getRedeemLockPayload(m,s.value,Number(I.value)),U=await b.value.currentWallet.signAndExecuteTransactionBlock(R);if(o=B.value.handleTx(U),o&&o.hash){M(o.hash),h(!1),p(!0);const D={title:"Redemption",desc:"Redemption transaction submitted successfully.",hash:o.hash,tit:"Vesting",icon:"icon-icon-Removed",tokenInfo:{tokena:"xCETUS",numa:`- ${u.value}`,logoa:J("/sui-image/xWHALE-icon.png")}};X.value!=="Aptos"&&(D.res=o.res),B.value.showTransitionPending(D),await B.value.watchTransaction(D)&&setTimeout(()=>{e.getAccountWhaleBalance(b.value.address),e.getOwnerVeNFT(b.value.address),e.getOwnerLockCetuss(b.value.address),e.getMyShare(b.value.address)},3e3),A.value=!1}else h(!1),N(!0),A.value=!1;u.value="",c.value=""}catch{h(!1),N(!0),A.value=!1,u.value="",c.value=""}};O(()=>[s.value,_e.value,a.value,b.value.address],([o,m,R,U])=>{U&&(o&&e.getVeNFTDividendInfo(),o&&!Se(R)&&m&&m.length>0&&e.getAvailableXCetus())},{immediate:!0,deep:!0});const Ze=async o=>{A.value=!0,h(!0),M(""),Y("");try{let m;const R=await F.getCancelRedeemPayload(o.id,s.value),U=await b.value.currentWallet.signAndExecuteTransactionBlock(R);if(m=B.value.handleTx(U),m&&m.hash){M(m.hash),h(!1),p(!0);const D={title:"Cancelled Redemption",desc:"Cancelled redemption successfully.",hash:m.hash,tit:"Cancelled Redemption",icon:"icon-a-icon-Shutdown",tokenInfo:{tokena:"xCETUS",numa:`+ ${Q(o.xcetus_amount,9)}`,logoa:J("/sui-image/xWHALE-icon.png")}};X.value!=="Aptos"&&(D.res=m.res),B.value.showTransitionPending(D),await B.value.watchTransaction(D)&&setTimeout(()=>{e.getOwnerVeNFT(b.value.address),e.getOwnerLockCetuss(b.value.address),A.value=!1},3e3)}else h(!1),N(!0),A.value=!1;u.value="",c.value=""}catch{h(!1),N(!0),A.value=!1,u.value="",c.value="",e.setClaimLoading("")}},et=f({}),tt=()=>{e.getOwnerLockCetuss(b.value.address)},nt=async o=>{A.value=!0,h(!0),M(""),Y(`${$("tips.claimingPendingYield")} ${P(Q(o.cetus_amount,9),9)} CETUS`);try{let m;const R=await F.getRedeemPayload(o.id,s.value),U=await b.value.currentWallet.signAndExecuteTransactionBlock(R);if(m=B.value.handleTx(U),m&&m.hash){M(m.hash),h(!1),p(!0);const D={title:"Claimed",desc:`Claimed ${P(Q(o.cetus_amount,9),9)} CETUS successfully.`,hash:m.hash,tit:"CETUS Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:"CETUS",numa:`+ ${Q(o.cetus_amount,9)}`,logoa:J("/sui-image/WHALE-icon.png")}};X.value!=="Aptos"&&(D.res=m.res),B.value.showTransitionPending(D),await B.value.watchTransaction(D)&&setTimeout(()=>{e.getOwnerLockCetuss(b.value.address),e.getAccountWhaleBalance(b.value.address),e.getOwnerVeNFT(b.value.address),e.getMyShare(b.value.address),e.getAvailableXCetus(),A.value=!1},3e3)}else h(!1),N(!0),A.value=!1;u.value="",c.value=""}catch{h(!1),N(!0),A.value=!1,u.value="",c.value="",e.setClaimLoading("")}},Ne=f(!1),at=()=>{!localStorage.getItem(`notRemind${b.value.address}`)&&le.value=="Convert"?Ne.value=!0:le.value=="Redeem"?Ve():te()},ot=()=>{Ne.value=!1,te()},pe=i(()=>t.value.pendingCoinInfo),fe=i(()=>t.value.pendingAmount),we=f(!1);return{clickModalConvert:ot,openConfirmModal:Ne,validateInput:()=>{I.value&&(I.value=I.value.replace(/[^\d]/g,""),I.value.charAt(0)==="0"&&(I.value=I.value.slice(1)))},countDown:tt,value:g,change:_,clickExchange:Ie,fromCoinAmount:u,toCoinAmount:c,showCoinSelect:v,headSwitchValue:l,headSwitchChange:ge,vestingDateList:x,vestingParameter:I,vestingTab:z,holderList:ae,lockupList:oe,leaderboardList:ke,whaleBalance:G,depositCetus:te,btnText:le,loading:A,redeemRatio:Ae,halfBalanne:Qe,maxBalanne:Je,xWhaleBalance:me,availableXwhale:j,redeemingXwhale:$e,withdrawWhale:Ve,ownerLocks:_e,cancelRedeemPayload:Ze,holderInfo:et,btnDisabled:ve,fixedFromCoin:K,walletStore:he,claimWhale:nt,wallet:b,depositOrWithdraw:at,pendingAmount:fe,claimPendingYield:async()=>{we.value=!0,h(!0),M(""),Y(`${$("tips.claimingPendingYield")} ${fe.value} ${pe.value.symbol}`);try{let o;const m=await F.getRedeemDividendV2Payload(s.value),R=await b.value.currentWallet.signAndExecuteTransactionBlock(m);if(o=B.value.handleTx(R),o&&o.hash){M(o.hash),h(!1),p(!0);const U={title:"Claim",desc:`Claimed ${fe.value} ${pe.value.symbol} successfully.`,hash:o.hash,tit:"Claimed Rewards",icon:"icon-icon-Removed",tokenInfo:{tokena:pe.value.symbol,numa:`+ ${fe.value}`,logoa:pe.value.logo_url}};X.value!=="Aptos"&&(U.res=o.res),B.value.showTransitionPending(U),await B.value.watchTransaction(U)&&setTimeout(()=>{e.getVeNFTDividendInfo(),we.value=!1},3e3),e.getOwnerLockCetuss(b.value.address)}else h(!1),N(!0),we.value=!1,A.value=!1}catch{h(!1),N(!0),we.value=!1}},inputBlur:()=>{Number(I.value)<15&&(I.value="15")},getNextEpoch:()=>{e.getDividendManager()}}}});const de=e=>(Z("data-v-821c97a6"),e=e(),ee(),e),zn={class:"dashboard-all"},Kn={class:"dashboard-content"},Qn={class:"content-left"},Jn={key:0,class:"vesting"},Zn=de(()=>n("p",null,"Vesting",-1)),ea={class:"content-right"},ta={key:0,class:"card-container"},na={class:"card-item"},aa={class:"card-item"},oa={class:"exchange"},la=de(()=>n("use",{"xlink:href":"#icon-icon-swap2"},null,-1)),sa=[la],ia={key:1,class:"card-redeem"},ua={class:"card-item"},ra={class:"vesting-duration"},da=de(()=>n("p",null,"Vesting duration",-1)),ca={class:"vesting-content"},ma={class:"vesting-left"},va={class:"value-days"},ga=de(()=>n("span",null,"days",-1)),ha={class:"vesting-right"},_a=["onClick"],pa={class:"card-item"},fa={class:"redeem-ratio"},wa=de(()=>n("span",null,"Redeem ratio",-1));function Ca(e,t,s,a,k,S){const d=lt,C=en,T=bn,g=ht,_=Un,u=gt,c=ie,v=qn;return r(),w("div",zn,[W(d,{title:"Dashboard","total-xwhale":e.xWhaleBalance,"available-xwhale":e.availableXwhale,"redeeming-xwhale":e.redeemingXwhale},null,8,["total-xwhale","available-xwhale","redeeming-xwhale"]),n("div",Kn,[n("div",Qn,[W(C,{"holder-info":e.holderInfo,"pending-amount":e.pendingAmount,"claim-loading":e.claimLoading,onClaimPendingYield:e.claimPendingYield,onGetNextEpoch:e.getNextEpoch},null,8,["holder-info","pending-amount","claim-loading","onClaimPendingYield","onGetNextEpoch"]),e.ownerLocks&&e.ownerLocks.length>0?(r(),w("div",Jn,[Zn,(r(!0),w(Be,null,Re(e.ownerLocks,l=>(r(),L(T,{key:l,"v-item":l,loading:e.loading,onCountDown:e.countDown,onClaimWhale:e.claimWhale,onCancelRedeemPayload:e.cancelRedeemPayload},null,8,["v-item","loading","onCountDown","onClaimWhale","onCancelRedeemPayload"]))),128))])):V("",!0)]),n("div",ea,[W(g,{"head-switch-value":e.headSwitchValue,"left-text":"Get xCETUS","right-text":"Redeem CETUS",onHeadSwitchChange:t[0]||(t[0]=l=>{e.headSwitchChange(l)})},null,8,["head-switch-value"]),e.headSwitchValue=="convert"?(r(),w("div",ta,[n("div",na,[W(_,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[1]||(t[1]=l=>e.fromCoinAmount=l),"input-value":e.fromCoinAmount,"coin-symbol":"CETUS","whale-direction":"From",balance:e.whaleBalance,onHalfBalanne:e.halfBalanne,onMaxBalanne:e.maxBalanne,onOnInput:t[2]||(t[2]=l=>{e.fromCoinAmount=l})},null,8,["modelValue","input-value","balance","onHalfBalanne","onMaxBalanne"])]),n("div",aa,[W(_,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[3]||(t[3]=l=>e.fromCoinAmount=l),"input-value":e.fromCoinAmount,"coin-symbol":"xCETUS","whale-direction":"To",balance:e.availableXwhale,onOnInput:t[4]||(t[4]=l=>{e.fromCoinAmount=l})},null,8,["modelValue","input-value","balance"])]),n("img",{class:be(e.change?"gang animationex":"gang"),src:ft,alt:""},null,2),n("div",oa,[(r(),w("svg",{class:be(e.change?"icon animationex":"icon"),"aria-hidden":"true"},sa,2))])])):(r(),w("div",ia,[n("div",ua,[W(_,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[5]||(t[5]=l=>e.fromCoinAmount=l),"input-value":e.fromCoinAmount,"coin-symbol":"xCETUS","whale-direction":"From",balance:e.availableXwhale,onHalfBalanne:e.halfBalanne,onMaxBalanne:e.maxBalanne,onOnInput:t[6]||(t[6]=l=>{e.fixedFromCoin=!0,e.fromCoinAmount=l})},null,8,["modelValue","input-value","balance","onHalfBalanne","onMaxBalanne"])]),n("div",ra,[da,n("div",ca,[n("div",ma,[n("div",va,[Xe(n("input",{"onUpdate:modelValue":t[7]||(t[7]=l=>e.vestingParameter=l),onInput:t[8]||(t[8]=(...l)=>e.validateInput&&e.validateInput(...l)),onBlur:t[9]||(t[9]=(...l)=>e.inputBlur&&e.inputBlur(...l))},null,544),[[vt,e.vestingParameter]])]),ga]),n("div",ha,[(r(!0),w(Be,null,Re(e.vestingDateList,l=>(r(),w("div",{key:l.time,class:be(["box-table",{"box-table-active":l.num===Number(e.vestingParameter)}]),onClick:$=>e.vestingTab(l.num)},y(l.time),11,_a))),128))])]),W(u,{value:e.vestingParameter,"onUpdate:value":t[10]||(t[10]=l=>e.vestingParameter=l),max:180,min:15},null,8,["value"])]),n("div",pa,[W(_,{modelValue:e.toCoinAmount,"onUpdate:modelValue":t[11]||(t[11]=l=>e.toCoinAmount=l),"input-value":e.toCoinAmount,"coin-symbol":"CETUS","whale-direction":"To",balance:e.whaleBalance,onOnInput:t[12]||(t[12]=l=>{e.fixedFromCoin=!1,e.toCoinAmount=l})},null,8,["modelValue","input-value","balance"])]),n("div",fa,[wa,n("p",null,y(e.redeemRatio)+"%",1)])])),e.wallet&&e.wallet.address?(r(),L(c,{key:2,class:"big-btn",loading:e.loading,disabled:e.btnDisabled,onClick:e.depositOrWithdraw},{default:H(()=>[n("span",null,y(e.btnText),1)]),_:1},8,["loading","disabled","onClick"])):(r(),L(c,{key:3,class:"big-btn",onClick:t[13]||(t[13]=l=>e.walletStore.setIsShowWalletModal(!0))},{default:H(()=>[n("span",null,y(e.$t("button.connectWallet")),1)]),_:1}))])]),e.openConfirmModal?(r(),L(v,{key:0,onClickConvert:e.clickModalConvert,onClose:t[14]||(t[14]=()=>e.openConfirmModal=!e.openConfirmModal)},null,8,["onClickConvert"])):V("",!0)])}const Ha=q(Gn,[["render",Ca],["__scopeId","data-v-821c97a6"]]);export{Ha as default};
