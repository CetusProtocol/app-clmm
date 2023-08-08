import{_ as on}from"./xwhale-header.b0945733.js";import{r as C,U as Ye,D as W,e as X,o as m,f as A,h as a,v as T,j as N,l as ae,q as ln,x as L,t as Fe,p as G,k as K,m as r,i as U,c as D,w as O,B as oe,K as He,u as Be,z as pe,a as De,a4 as sn,a9 as un,I as rn,S as dn,M as cn,y as mn,C as vn,F as We,s as Oe,a8 as gn,a7 as fn}from"./entry.37ac1515.js";import{u as Pe}from"./xcetus.0412dcc5.js";import{a as le,u as ie}from"./sha256.bc212f92.js";import{i as q}from"./import-icon.de3e6c66.js";import{e as $,s as _e,a as Ee,c as xe,p as Z,u as Xe,q as he,D as Ve}from"./pool.05960e4b.js";import{u as Ue}from"./useWhale.09d14315.js";import{_ as je}from"./xWHALE-icon.2df34cd4.js";import{_ as Ze}from"./WHALE-icon.28f954ba.js";import{_ as hn}from"./head-switch.ef136367.js";/* empty css              *//* empty css              */import{_ as pn}from"./icon-selected_3x.09e9a6f0.js";/* empty css              *//* empty css              */import{u as _n}from"./useTheme.e99f1b80.js";import{_ as wn}from"./img-leverage_2x.1c577303.js";import"./index.547c9a2a.js";const Cn={props:{startTime:{type:String,require:!0,default:""},endTime:{type:Number,require:!0,default:0}},setup(e,t){const i=C("--"),n=C("--"),b=C("--"),h=C("--");let d=null;Ye(()=>{window.clearInterval(d)});const y=()=>{const _=new Date().getTime()/1e3;Number(_)<=Number(e.startTime)&&p(e.startTime),Number(_)>Number(e.startTime)&&Number(_)<=Number(e.endTime)&&p(e.endTime)},p=_=>{clearInterval(d),window.clearInterval(d),d=setInterval(()=>{let f=new Date().getTime()/1e3,u=_-parseInt(String(f));if(u==0){t.emit("countDown"),clearInterval(d),window.clearInterval(d),d=null;return}else u<0&&(clearInterval(d),window.clearInterval(d),t.emit("countDown"),d=null);u--;let c=parseInt(String(u/60/60/24));c=(c<10,c);let o=parseInt(String(u/60/60%24));o=(o<10,o);let S=parseInt(String(u/60%60));S=(S<10,S);let P=parseInt(String(u%60));P=P<10?+P:P,i.value=c,n.value=o,b.value=S,h.value=P},1e3)};return W(()=>e.startTime,(_,f)=>{_!==f&&y()},{immediate:!0}),{day:i,hour:n,min:b,sec:h}}};const bn={class:"count-time"};function yn(e,t,i,n,b,h){return m(),A("div",bn,[a("p",null,T(n.day)+"d",1),N(" : "),a("p",null,T(n.hour)+"h",1),N(" : "),a("p",null,T(n.min)+"m",1),N(" : "),a("p",null,T(n.sec)+"s",1)])}const Sn=X(Cn,[["render",yn],["__scopeId","data-v-ce10c596"]]),Tn={props:{titleText:{type:String,default:""},tipsText:{type:String,default:""},imgIcon:{type:String,default:""},value:{type:String,default:"--"}},setup(e){const{t}=ae();return{t}}};const An=e=>(G("data-v-77f61894"),e=e(),K(),e),kn={class:"table-rewards"},In={class:"text-top-all"},Nn={key:0,class:"icon-hover-box"},Bn=An(()=>a("svg",{class:"icon","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-icon-information"})],-1)),xn={class:"tips-text-box"},Dn={key:0,alt:""};function Pn(e,t,i,n,b,h){const d=ln("image");return m(),A("div",kn,[a("div",In,[a("p",null,T(i.titleText),1),i.tipsText?(m(),A("div",Nn,[Bn,a("div",xn,T(i.titleText=="est.APR"?"Estimated APR of the current epoch for all xCETUS holders.":"The number of qualified positions in this epoch."),1)])):L("",!0)]),a("span",null,[a("p",null,[i.imgIcon?Fe((m(),A("img",Dn,null,512)),[[d,i.imgIcon]]):L("",!0),N(T(i.value),1)])])])}const En=X(Tn,[["render",Pn],["__scopeId","data-v-77f61894"]]),Un={setup(e){const{t}=ae(),i=Pe(),n=r(()=>i),b=r(()=>n.value.pendingAmount),h=r(()=>n.value.newPendingAmount),d=r(()=>n.value.nextStartTime),y=r(()=>1683094391),p=r(()=>n.value.xcetusShare&&$(n.value.xcetusShare,2)),_=le(),f=r(()=>_),s=r(()=>n.value.cetusApr&&n.value.cetusApr>.01?$(_e(n.value.cetusApr,2),2):$(n.value.cetusApr,2)),u=r(()=>n.value.pendingCoinInfo),c=r(()=>n.value.newPendingCoinInfo),o=C("");W(()=>u.value,g=>{g&&!xe(g)?o.value=`Pending yield (${g.symbol})`:o.value="Pending yield"},{immediate:!0});const S=C("");W(()=>c.value,g=>{g&&!xe(g)?S.value=`Pending yield (${g.symbol})`:S.value="Pending yield"},{immediate:!0});const P=()=>{setTimeout(()=>{i.getDividendManager()},3e3)},ue=r(()=>n.value.dividendManagerInfo),be=r(()=>{const g=parseInt(String(new Date().getTime()/1e3)),M=ue.value.interval_day,Q=(g-Number(ue.value.start_time))/(M*60);return parseInt(String(Q))>0}),re=ie(),de=r(()=>re),{setIsShowSuccess:j,setIsShowRejected:ce,setIsShowWaiting:V,setTransactionDesc:ye,setTransactionTxid:me}=re,k=Ue("Sui"),H=C(!1),Se=r(()=>n.value.venft_id),J=r(()=>de.value.chainName?Ee(de.value.chainName):{});return{t,pendingAmount:b,nextStartTime:d,wallet:f,myShare:p,importIcon:q,nextEndTime:y,pendingYieldText:o,cetusApr:s,pendingCoinInfo:u,getNextEpoch:P,canClaim:be,claimPendingYield:async()=>{H.value=!0,V(!0),me(""),ye(`${t("tips.claimingPendingYield")} ${b.value} ${u.value.symbol} ${Number(h.value)>0?"and":""} ${Number(h.value)>0?h.value+" "+c.value.symbol:""}`);try{let g;const M=await k.getRedeemDividendV2Payload(Se.value),Q=await f.value.currentWallet.signAndExecuteTransactionBlock(M);if(g=J.value.handleTx(Q),g&&g.hash){me(g.hash),V(!1),j(!0);const w={title:"Claim",desc:`Claimed ${b.value} ${u.value.symbol} ${Number(h.value)>0?"and":""} ${Number(h.value)>0?h.value+" "+c.value.symbol:""} successfully.`,hash:g.hash,tit:"Claimed Rewards",icon:"icon-icon-Removed",tokenInfo:{tokena:u.value.symbol,numa:`+ ${b.value}`,logoa:u.value.logo_url}};J.value.showTransitionPending(w),await J.value.watchTransaction(w)&&setTimeout(()=>{i.getVeNFTDividendInfo(),H.value=!1},3e3),i.getOwnerLockCetuss(f.value.address)}else V(!1),ce(!0),H.value=!1}catch{V(!1),ce(!0),H.value=!1}},claimLoading:H,addCommom:$,newPendingCoinInfo:c,newPendingAmount:h,newPendingYieldText:S}}},$n=""+new URL("staking-rewards-banner-h5.1c7401db.png",import.meta.url).href,Rn="data:image/png;base64,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";const we=e=>(G("data-v-02f41497"),e=e(),K(),e),Ln={class:"top-banner"},Mn=we(()=>a("img",{src:$n,alt:""},null,-1)),Wn=we(()=>a("p",null,"Convert CETUS to xCETUS to start earning",-1)),On={class:"bot-count"},Vn=we(()=>a("span",null,"Reward distribution in ",-1)),Yn={class:"holder-rewards"},Fn={class:"title"},Hn=we(()=>a("div",{class:"left"},[a("img",{src:Rn,alt:""}),a("span",null,"xCETUS Staking Rewards")],-1)),Xn={class:"right"},jn={class:"rewards-value"},Zn={key:0,class:"rewards-value"},qn={class:"claim-h5"};function Gn(e,t,i,n,b,h){var _,f,s,u,c;const d=Sn,y=oe,p=En;return m(),A("div",null,[a("div",Ln,[Mn,Wn,a("div",On,[Vn,U(d,{"start-time":n.nextStartTime,onCountDown:t[0]||(t[0]=o=>e.$emit("getNextEpoch"))},null,8,["start-time"])])]),a("div",Yn,[a("div",Fn,[Hn,a("div",Xn,[n.wallet&&n.wallet.address?(m(),D(y,{key:0,loading:n.claimLoading,disabled:!n.canClaim||n.pendingAmount=="--"||n.pendingAmount<=0,onClick:n.claimPendingYield},{default:O(()=>[N(" Claim ")]),_:1},8,["loading","disabled","onClick"])):L("",!0)])]),a("div",jn,[U(p,{"title-text":"est.APR","tips-text":"good",value:n.cetusApr+"%"},null,8,["title-text","value"]),U(p,{"title-text":"My share",value:n.myShare+"%"},null,8,["value"]),Number(n.pendingAmount)>0&&n.newPendingAmount=="0"?(m(),D(p,{key:0,"title-text":n.pendingYieldText,"img-icon":(_=n.pendingCoinInfo)==null?void 0:_.logo_url,value:n.addCommom(n.pendingAmount,6)},null,8,["title-text","img-icon","value"])):Number(n.newPendingAmount)>0&&n.pendingAmount=="0"?(m(),D(p,{key:1,"title-text":n.newPendingYieldText,"img-icon":(f=n.newPendingCoinInfo)==null?void 0:f.logo_url,value:n.addCommom(n.newPendingAmount,6)},null,8,["title-text","img-icon","value"])):n.newPendingAmount=="0"&&n.pendingAmount=="0"?(m(),D(p,{key:2,"title-text":n.newPendingYieldText,"img-icon":(s=n.newPendingCoinInfo)==null?void 0:s.logo_url,value:n.addCommom(n.newPendingAmount,6)},null,8,["title-text","img-icon","value"])):L("",!0)]),Number(n.pendingAmount)>0&&Number(n.newPendingAmount)>0?(m(),A("div",Zn,[U(p,{"title-text":n.pendingYieldText,"img-icon":(u=n.pendingCoinInfo)==null?void 0:u.logo_url,value:n.addCommom(n.pendingAmount,6)},null,8,["title-text","img-icon","value"]),U(p,{"title-text":n.newPendingYieldText,"img-icon":(c=n.newPendingCoinInfo)==null?void 0:c.logo_url,value:n.addCommom(n.newPendingAmount,6)},null,8,["title-text","img-icon","value"])])):L("",!0),a("div",qn,[n.wallet&&n.wallet.address?(m(),D(y,{key:0,disabled:!n.canClaim||n.pendingAmount=="--"||n.pendingAmount<=0,loading:n.claimLoading,onClick:t[1]||(t[1]=o=>e.$emit("claimPendingYield"))},{default:O(()=>[N(" Claim ")]),_:1},8,["disabled","loading"])):L("",!0)])])])}const Kn=X(Un,[["render",Gn],["__scopeId","data-v-02f41497"]]),Qn={props:{startTime:{type:String,require:!0,default:""},endTime:{type:Number,require:!0,default:0}},setup(e,t){const i=C("--"),n=C("--"),b=C("--"),h=C("--");let d=null;Ye(()=>{window.clearInterval(d)});const y=()=>{const _=new Date().getTime()/1e3;Number(_)<=Number(e.startTime)&&p(e.startTime),Number(_)>Number(e.startTime)&&Number(_)<=Number(e.endTime)&&p(e.endTime)},p=_=>{d=setInterval(()=>{let f=new Date().getTime()/1e3,u=_-parseInt(String(f));if(u==0){t.emit("countDown"),clearInterval(d),window.clearInterval(d),d=null;return}else u<0&&(clearInterval(d),window.clearInterval(d),t.emit("countDown"),d=null);u--;let c=parseInt(String(u/60/60/24));c=c<10?"0"+c:c;let o=parseInt(String(u/60/60%24));o=o<10?"0"+o:o;let S=parseInt(String(u/60%60));S=S<10?"0"+S:S;let P=parseInt(String(u%60));P=P<10?"0"+P:P,i.value=c,n.value=o,b.value=S,h.value=P},1e3)};return W(()=>e.startTime,(_,f)=>{_!==f&&y()},{immediate:!0}),{day:i,hour:n,min:b,sec:h}}};const Ce=e=>(G("data-v-131b3f4e"),e=e(),K(),e),zn={class:"count-down"},Jn=Ce(()=>a("span",null,"D : ",-1)),et=Ce(()=>a("span",null,"H : ",-1)),nt=Ce(()=>a("span",null,"M : ",-1)),tt=Ce(()=>a("span",null,"S",-1));function at(e,t,i,n,b,h){return m(),A("div",zn,[N(T(n.day)+" ",1),Jn,N(" "+T(n.hour)+" ",1),et,N(" "+T(n.min)+" ",1),nt,N(" "+T(n.sec)+" ",1),tt])}const ot=X(Qn,[["render",at],["__scopeId","data-v-131b3f4e"]]),lt={components:{WcountDown:ot},props:{vItem:{type:Object,default:()=>({})},loading:{type:Boolean,default:!1}},setup(e,t){const{t:i}=ae(),n=Pe(),b=ie(),h=r(()=>b),d=c=>{t.emit("claim",c),n.setClaimLoading(c.id)},y=r(()=>n),p=r(()=>new Date().getTime()/1e3>e.vItem.locked_until_time),_=c=>{t.emit("cancelRedeemPayload",c),n.setClaimLoading(c.id)};r(()=>h.value.chainName),Ue("Sui");const f=le();return r(()=>f),r(()=>y.value.venft_id),r(()=>h.value.chainName?Ee(h.value.chainName):{}),{t:i,prettyAmount:Z,claimBoolean:p,toClaim:d,toCancel:_,claimWhale:c=>{t.emit("claimWhale",c)},cancelRedeemPayload:c=>{t.emit("cancelRedeemPayload",c)}}}};const $e=e=>(G("data-v-22a782cd"),e=e(),K(),e),it={class:"vesting-box"},st={class:"left"},ut=$e(()=>a("img",{src:je,alt:""},null,-1)),rt=$e(()=>a("svg",{class:"icon","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-icon-swap2"})],-1)),dt=$e(()=>a("img",{src:Ze,alt:""},null,-1)),ct={class:"available-all"},mt={class:"available"},vt={key:0},gt={key:1};function ft(e,t,i,n,b,h){const d=He("WcountDown"),y=oe;return m(),A("div",it,[a("div",st,[a("p",null,[a("span",null,[ut,N(" "+T(("addCommom"in e?e.addCommom:Be($))(n.prettyAmount(i.vItem.xcetus_amount,9),9))+" xCETUS ",1)]),rt,a("span",null,[dt,N(" "+T(("addCommom"in e?e.addCommom:Be($))(n.prettyAmount(i.vItem.cetus_amount,9),9))+" CETUS ",1)])]),a("div",ct,[a("div",mt,[a("span",null,T(n.claimBoolean?"Available":"Available in"),1),n.claimBoolean?L("",!0):(m(),D(d,{key:0,"start-time":i.vItem.locked_start_time,"end-time":i.vItem.locked_until_time,onCountDown:t[0]||(t[0]=p=>e.$emit("countDown"))},null,8,["start-time","end-time"]))]),a("div",{class:pe(n.claimBoolean?"highlight right-h5":"right-h5")},[n.claimBoolean?(m(),A("span",vt,"Claim")):(m(),A("span",gt,"Cancel"))],2)])]),n.claimBoolean?(m(),D(y,{key:0,disabled:!n.claimBoolean||i.loading,loading:i.loading,onClick:t[1]||(t[1]=p=>n.claimWhale(i.vItem))},{default:O(()=>[N(T(n.claimBoolean?"Claim":"Cancel"),1)]),_:1},8,["disabled","loading"])):(m(),D(y,{key:1,type:"text",class:"right",disabled:i.loading,loading:i.loading,onClick:t[2]||(t[2]=p=>n.cancelRedeemPayload(i.vItem))},{default:O(()=>[N(T(n.claimBoolean?"Claim":"Cancel"),1)]),_:1},8,["disabled","loading"]))])}const ht=X(lt,[["render",ft],["__scopeId","data-v-22a782cd"]]),pt=De({props:{inputValue:{type:String,default:""},coinSymbol:{type:String,default:""},whaleDirection:{type:String,default:""},address:{type:String,default:""},balance:{type:String,default:""}},setup(e,t){const{t:i,locale:n}=ae(),b=ie(),h=r(()=>b),d=sn(un,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0}),y=le(),p=r(()=>y),_=Xe(),f=r(()=>_),s=c=>{const S=new RegExp("[^\\d-]*(\\d*(?:\\.\\d{0,9})?).*$");c.target.value=c.target.value.replace(S,"$1")},u=r(()=>{var c;return f.value.tokensObj&&e.address&&f.value.tokensObj[e.address]&&((c=f.value.tokensObj[e.address])==null?void 0:c.decimals)});return W(()=>f.value.RATES,c=>{},{immediate:!0}),{pool:f,t:i,addCommom:$,store:h,wallet:p,indicator:d,inputChange:s,importIcon:q,coinDecimals:u}}});const _t=e=>(G("data-v-83d9dead"),e=e(),K(),e),wt={class:"card"},Ct={class:"top"},bt={class:"left"},yt={class:"loading-token"},St={key:0,src:Ze,alt:""},Tt={key:1,src:je,alt:""},At={class:"bottom"},kt=_t(()=>a("div",null,null,-1)),It={class:"top"},Nt={class:"right"},Bt={key:0,class:"balance"};function xt(e,t,i,n,b,h){var _,f;const d=rn,y=dn,p=oe;return m(),A("div",wt,[a("div",Ct,[U(d,{value:e.inputValue,placeholder:"0.0",onChange:e.inputChange,onInput:t[0]||(t[0]=s=>e.$emit("onInput",s.target.value)),onFocus:t[1]||(t[1]=s=>e.$emit("onFocus"))},null,8,["value","onChange"]),a("div",bt,[a("div",yt,[e.coinSymbol=="CETUS"?(m(),A("img",St)):(m(),A("img",Tt)),a("div",null,[a("p",null,T(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1)])])])]),a("div",At,[kt,a("div",It,[a("div",Nt,[a("span",null,T(e.$t("common.balance")),1),e.balance?(m(),A("span",Bt,T(e.balance>1?("addCommom"in e?e.addCommom:Be($))(e.balance):e.balance),1)):(m(),D(y,{key:1,loading:!0,class:"loading-token-skeleton",active:"",paragraph:!1})),e.whaleDirection=="From"?(m(),D(p,{key:2,class:"max-btn",disabled:!e.balance||e.balance==0||!((_=e.wallet)!=null&&_.address),onClick:t[2]||(t[2]=s=>e.$emit("halfBalanne"))},{default:O(()=>[N(T("Half"))]),_:1},8,["disabled"])):L("",!0),e.whaleDirection=="From"?(m(),D(p,{key:3,class:"max-btn",disabled:!e.balance||e.balance==0||!((f=e.wallet)!=null&&f.address),onClick:t[3]||(t[3]=s=>e.$emit("maxBalanne"))},{default:O(()=>[N(T(e.$t("button.max")),1)]),_:1},8,["disabled"])):L("",!0)])])])])}const Dt=X(pt,[["render",xt],["__scopeId","data-v-83d9dead"]]);const Pt=De({components:{Modal:cn},setup(e,t){const i=ie(),n=C(!1);r(()=>i);const b=le(),h=r(()=>b);return{store:i,isSelect:n,clickConvert:()=>{n.value&&localStorage.setItem(`notRemind${h.value.address}`,!0),t.emit("clickConvert")}}}}),Re=e=>(G("data-v-ee04003a"),e=e(),K(),e),Et=Re(()=>a("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),Ut=[Et],$t={class:"token-waring-conetnt"},Rt=Re(()=>a("div",{class:"tips-text"},[N(" Please note that after conversion, if you want to convert xCETUS back to CETUS, a vesting period will be applied & different vesting durations correspond to different redeem ratios. "),a("a",{href:"https://cetus-1.gitbook.io/cetus-docs/tokenomics/xcetus",target:"_blank"}," Learn more")],-1)),Lt={class:"read-text"},Mt={key:0,src:pn},Wt=Re(()=>a("span",null," Do not remind again. ",-1));function Ot(e,t,i,n,b,h){const d=oe,y=He("Modal");return m(),D(y,{width:"440px",visible:!0,footer:null,title:null,"mask-closable":!0,onCancel:t[3]||(t[3]=p=>e.$emit("close"))},{closeIcon:O(()=>[(m(),A("svg",{class:"icon modal-icon-close","aria-hidden":"true",onClick:t[0]||(t[0]=p=>e.$emit("close"))},Ut))]),default:O(()=>[a("div",$t,[Rt,a("div",Lt,[a("div",{class:"radio",onClick:t[1]||(t[1]=p=>e.isSelect=!e.isSelect)},[e.isSelect?(m(),A("img",Mt)):L("",!0)]),Wt]),U(d,{class:"big-btn continue",onClick:t[2]||(t[2]=()=>e.clickConvert())},{default:O(()=>[N("Convert")]),_:1})])]),_:1})}const Vt=X(Pt,[["render",Ot],["__scopeId","data-v-ee04003a"]]),Yt=De({setup(){const e=Pe(),t=r(()=>e),i=r(()=>t.value.venft_id),n=r(()=>t.value.venftInfo),b=Xe(),h=r(()=>b),d=ie(),y=r(()=>d),p=_n();r(()=>h.value.tokensObj&&h.value.tokensObj["0x2a4f647bc73f070182436658bff75060246019857c769ad9268c22c4472bca7f::cetus::CETUS"]);const _=C("");let f=C(!1);const s=C(""),u=C(""),c=C(!1),o=C("convert"),{t:S}=ae(),P=C([{time:"15 D",num:15},{time:"30 D",num:30},{time:"90 D",num:90},{time:"180 D",num:180}]),ue=C([{name:"est.APR",value:"100.12%"},{name:"My share",value:"<0.1%"},{name:"Pending yield (USDC)",value:0}]),be=C([{name:"My total locked",value:"$100.12"},{name:"Pending rewards (xCETUS)",value:"100.12"},{name:"",value:""}]),re=C([{name:"My positions",value:"12"},{name:"My qualified positions",value:"0"},{name:"Pending rewards (xCETUS)",value:"100.12"}]),de=window.setInterval(()=>{e.getXcetusApr(),w.value.address&&(e.getMyShare(w.value.address),e.getVeNFTDividendInfo())},6e4);mn(()=>{document.addEventListener("visibilitychange",()=>{document.hidden||e.getDividendManager()}),e.getXcetusApr(),e.getDividendManager()}),vn(()=>{window.clearInterval(de),document.removeEventListener("visibilitychange",()=>{})}),W(()=>y.value.theme,l=>{l!=="sui"&&p.selectSuiTheme()},{immediate:!0});const j=r(()=>t.value.whaleBalance),ce=r(()=>t.value.xWhaleBalance),V=r(()=>t.value.availableXwhale),ye=r(()=>t.value.redeemingXwhale),me=r(()=>{if(o.value=="convert"){if(Number(s.value)>Number(j.value))return!0}else if(Number(s.value)>Number(V.value))return!0;return!s.value||!u.value||Number(s.value)==0||Number(u.value)==0}),k=C("180"),H=r(()=>o.value=="convert"&&Number(s.value)>Number(j.value)?S("button.insufficientBalance",{name:"CETUS"}):o.value!=="convert"&&Number(s.value)>Number(V.value)?S("button.insufficientBalance",{name:"xCETUS"}):Number(k.value)<15?"Minimum vesting duration is 15 days":o.value=="convert"&&i?"Convert":o.value!=="convert"&&i?"Redeem":"Convert"),Se=l=>{s.value="",u.value="",o.value=l},J=()=>{f.value=!0,setTimeout(()=>{f.value=!1},300)},Le=l=>{k.value=l},g=C(!1),M=Ue("Sui"),Q=le(),w=r(()=>Q),Te=r(()=>t.value.ownerLocks);W(()=>w.value.address,l=>{l?(e.getOwnerVeNFT(l),e.getAccountWhaleBalance(l),e.getOwnerLockCetuss(l),e.getMyShare(l)):e.loginOut()},{immediate:!0});const E=r(()=>y.value.chainName?Ee(y.value.chainName):{}),ee=r(()=>y.value.chainName),{setIsShowSuccess:ne,setIsShowRejected:Y,setIsShowWaiting:I,setTransactionDesc:te,setTransactionTxid:F}=d,Ae=async()=>{g.value=!0,I(!0),F(""),te(S("tips.converting",{from:`${$(s.value,9)} CETUS`,and:"to",to:`${$(s.value,9)} xCETUS`}));try{let l;const v=he(s.value,9),B=await M.depositCetus(v,i.value),R=await w.value.currentWallet.signAndExecuteTransactionBlock(B);if(l=E.value.handleTx(R),l&&l.hash){F(l.hash),I(!1),ne(!0);const x={title:"Converted",desc:`Converted ${$(s.value,9)} xCETUS successfully`,hash:l.hash,tit:"Converted",icon:"icon-icon-Swap",tokenInfo:{tokena:"CETUS",numa:`- ${s.value}`,logoa:q("/sui-image/WHALE-icon.png"),tokenb:"xCETUS",numb:`+ ${s.value}`,logob:q("/sui-image/xWHALE-icon.png")}};ee.value!=="Aptos"&&(x.res=l.res),E.value.showTransitionPending(x),await E.value.watchTransaction(x)&&setTimeout(()=>{e.getAccountWhaleBalance(w.value.address),e.getOwnerVeNFT(w.value.address),e.getOwnerLockCetuss(w.value.address),e.getMyShare(w.value.address)},3e3),g.value=!1}else I(!1),Y(!0),g.value=!1;s.value=""}catch{I(!1),Y(!0),g.value=!1,s.value=""}},z=C(!0),ke=C("0"),qe=async()=>{const l=he(s.value,9),v=await M.redeemNum(l,Number(k.value));u.value=Z(v.amountOut,9),ke.value=v.percent},Ge=async()=>{const l=he(u.value,9),v=await M.reverseRedeemNum(l,Number(k.value));s.value=Z(v.amountOut,9),ke.value=v.percent};W(()=>[s.value,k.value,z.value],([l,v,B])=>{l&&v&&B&&Number(v)>=15&&qe(),!l&&B&&(u.value="")},{immediate:!0}),W(()=>[u.value,k.value,z.value],([l,v,B])=>{l&&v&&!B&&Number(v)>=15&&Ge(),!l&&!B&&(s.value="")},{immediate:!0}),W(()=>[k.value,z.value],([l,v])=>{Number(l)>180?k.value="180":Number(l)<15?v?u.value="":s.value="":l||(v?s.value="":u.value="")},{immediate:!0});const Ke=()=>{z.value=!0,s.value=_e(new Ve(o.value!=="convert"?V.value:j.value).div(new Ve(2)).toString(),9)},Qe=()=>{z.value=!0,s.value=o.value!=="convert"?_e(V.value,9):_e(j.value,9)},Me=async()=>{g.value=!0,I(!0),F(""),te(S("tips.redeeming",{from:`${$(s.value,9)} xCETUS`,to:`${$(u.value,9)} CETUS`}));try{let l;const v=he(s.value,9),B=await M.getRedeemLockPayload(v,i.value,Number(k.value)),R=await w.value.currentWallet.signAndExecuteTransactionBlock(B);if(l=E.value.handleTx(R),l&&l.hash){F(l.hash),I(!1),ne(!0);const x={title:"Redemption",desc:"Redemption transaction submitted successfully.",hash:l.hash,tit:"Vesting",icon:"icon-icon-Removed",tokenInfo:{tokena:"xCETUS",numa:`- ${s.value}`,logoa:q("/sui-image/xWHALE-icon.png")}};ee.value!=="Aptos"&&(x.res=l.res),E.value.showTransitionPending(x),await E.value.watchTransaction(x)&&setTimeout(()=>{e.getAccountWhaleBalance(w.value.address),e.getOwnerVeNFT(w.value.address),e.getOwnerLockCetuss(w.value.address),e.getMyShare(w.value.address)},3e3),g.value=!1}else I(!1),Y(!0),g.value=!1;s.value="",u.value=""}catch{I(!1),Y(!0),g.value=!1,s.value="",u.value=""}};W(()=>[i.value,Te.value,n.value,w.value.address],([l,v,B,R])=>{R&&(l&&e.getVeNFTDividendInfo(),l&&!xe(B)&&v&&v.length>0&&e.getAvailableXCetus())},{immediate:!0,deep:!0});const ze=async l=>{g.value=!0,I(!0),F(""),te("");try{let v;const B=await M.getCancelRedeemPayload(l.id,i.value),R=await w.value.currentWallet.signAndExecuteTransactionBlock(B);if(v=E.value.handleTx(R),v&&v.hash){F(v.hash),I(!1),ne(!0);const x={title:"Cancelled Redemption",desc:"Cancelled redemption successfully.",hash:v.hash,tit:"Cancelled Redemption",icon:"icon-a-icon-Shutdown",tokenInfo:{tokena:"xCETUS",numa:`+ ${Z(l.xcetus_amount,9)}`,logoa:q("/sui-image/xWHALE-icon.png")}};ee.value!=="Aptos"&&(x.res=v.res),E.value.showTransitionPending(x),await E.value.watchTransaction(x)&&setTimeout(()=>{e.getOwnerVeNFT(w.value.address),e.getOwnerLockCetuss(w.value.address),g.value=!1},3e3)}else I(!1),Y(!0),g.value=!1;s.value="",u.value=""}catch{I(!1),Y(!0),g.value=!1,s.value="",u.value="",e.setClaimLoading("")}},Je=C({}),en=()=>{e.getOwnerLockCetuss(w.value.address)},nn=async l=>{g.value=!0,I(!0),F(""),te(`${S("tips.claimingPendingYield")} ${$(Z(l.cetus_amount,9),9)} CETUS`);try{let v;const B=await M.getRedeemPayload(l.id,i.value),R=await w.value.currentWallet.signAndExecuteTransactionBlock(B);if(v=E.value.handleTx(R),v&&v.hash){F(v.hash),I(!1),ne(!0);const x={title:"Claimed",desc:`Claimed ${$(Z(l.cetus_amount,9),9)} CETUS successfully.`,hash:v.hash,tit:"CETUS Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:"CETUS",numa:`+ ${Z(l.cetus_amount,9)}`,logoa:q("/sui-image/WHALE-icon.png")}};ee.value!=="Aptos"&&(x.res=v.res),E.value.showTransitionPending(x),await E.value.watchTransaction(x)&&setTimeout(()=>{e.getOwnerLockCetuss(w.value.address),e.getAccountWhaleBalance(w.value.address),e.getOwnerVeNFT(w.value.address),e.getMyShare(w.value.address),e.getAvailableXCetus(),g.value=!1},3e3)}else I(!1),Y(!0),g.value=!1;s.value="",u.value=""}catch{I(!1),Y(!0),g.value=!1,s.value="",u.value="",e.setClaimLoading("")}},Ie=C(!1),tn=()=>{!localStorage.getItem(`notRemind${w.value.address}`)&&H.value=="Convert"?Ie.value=!0:H.value=="Redeem"?Me():Ae()},an=()=>{Ie.value=!1,Ae()},ve=r(()=>t.value.pendingCoinInfo),ge=r(()=>t.value.pendingAmount),fe=C(!1);return{clickModalConvert:an,openConfirmModal:Ie,validateInput:()=>{k.value&&(k.value=k.value.replace(/[^\d]/g,""),k.value.charAt(0)==="0"&&(k.value=k.value.slice(1)))},countDown:en,value:_,change:f,clickExchange:J,fromCoinAmount:s,toCoinAmount:u,showCoinSelect:c,headSwitchValue:o,headSwitchChange:Se,vestingDateList:P,vestingParameter:k,vestingTab:Le,holderList:ue,lockupList:be,leaderboardList:re,whaleBalance:j,depositCetus:Ae,btnText:H,loading:g,redeemRatio:ke,halfBalanne:Ke,maxBalanne:Qe,xWhaleBalance:ce,availableXwhale:V,redeemingXwhale:ye,withdrawWhale:Me,ownerLocks:Te,cancelRedeemPayload:ze,holderInfo:Je,btnDisabled:me,fixedFromCoin:z,walletStore:Q,claimWhale:nn,wallet:w,depositOrWithdraw:tn,pendingAmount:ge,claimPendingYield:async()=>{fe.value=!0,I(!0),F(""),te(`${S("tips.claimingPendingYield")} ${ge.value} ${ve.value.symbol}`);try{let l;const v=await M.getRedeemDividendV2Payload(i.value),B=await w.value.currentWallet.signAndExecuteTransactionBlock(v);if(l=E.value.handleTx(B),l&&l.hash){F(l.hash),I(!1),ne(!0);const R={title:"Claim",desc:`Claimed ${ge.value} ${ve.value.symbol} successfully.`,hash:l.hash,tit:"Claimed Rewards",icon:"icon-icon-Removed",tokenInfo:{tokena:ve.value.symbol,numa:`+ ${ge.value}`,logoa:ve.value.logo_url}};ee.value!=="Aptos"&&(R.res=l.res),E.value.showTransitionPending(R),await E.value.watchTransaction(R)&&setTimeout(()=>{e.getVeNFTDividendInfo(),fe.value=!1},3e3),e.getOwnerLockCetuss(w.value.address)}else I(!1),Y(!0),fe.value=!1,g.value=!1}catch{I(!1),Y(!0),fe.value=!1}},inputBlur:()=>{Number(k.value)<15&&(k.value="15")},getNextEpoch:()=>{e.getDividendManager()}}}});const se=e=>(G("data-v-924bb0a1"),e=e(),K(),e),Ft={class:"dashboard-all"},Ht={class:"dashboard-content"},Xt={class:"content-left"},jt={key:0,class:"vesting"},Zt=se(()=>a("p",null,"Vesting",-1)),qt={class:"content-right"},Gt={key:0,class:"card-container"},Kt={class:"card-item"},Qt={class:"card-item"},zt={class:"exchange"},Jt=se(()=>a("use",{"xlink:href":"#icon-icon-swap2"},null,-1)),ea=[Jt],na={key:1,class:"card-redeem"},ta={class:"card-item"},aa={class:"vesting-duration"},oa=se(()=>a("p",null,"Vesting duration",-1)),la={class:"vesting-content"},ia={class:"vesting-left"},sa={class:"value-days"},ua=se(()=>a("span",null,"days",-1)),ra={class:"vesting-right"},da=["onClick"],ca={class:"card-item"},ma={class:"redeem-ratio"},va=se(()=>a("span",null,"Redeem ratio",-1));function ga(e,t,i,n,b,h){const d=on,y=Kn,p=ht,_=hn,f=Dt,s=fn,u=oe,c=Vt;return m(),A("div",Ft,[U(d,{title:"Dashboard","total-xwhale":e.xWhaleBalance,"available-xwhale":e.availableXwhale,"redeeming-xwhale":e.redeemingXwhale},null,8,["total-xwhale","available-xwhale","redeeming-xwhale"]),a("div",Ht,[a("div",Xt,[U(y,{"holder-info":e.holderInfo,"pending-amount":e.pendingAmount,"claim-loading":e.claimLoading,onClaimPendingYield:e.claimPendingYield,onGetNextEpoch:e.getNextEpoch},null,8,["holder-info","pending-amount","claim-loading","onClaimPendingYield","onGetNextEpoch"]),e.ownerLocks&&e.ownerLocks.length>0?(m(),A("div",jt,[Zt,(m(!0),A(We,null,Oe(e.ownerLocks,o=>(m(),D(p,{key:o,"v-item":o,loading:e.loading,onCountDown:e.countDown,onClaimWhale:e.claimWhale,onCancelRedeemPayload:e.cancelRedeemPayload},null,8,["v-item","loading","onCountDown","onClaimWhale","onCancelRedeemPayload"]))),128))])):L("",!0)]),a("div",qt,[U(_,{"head-switch-value":e.headSwitchValue,"left-text":"Get xCETUS","right-text":"Redeem CETUS",onHeadSwitchChange:t[0]||(t[0]=o=>{e.headSwitchChange(o)})},null,8,["head-switch-value"]),e.headSwitchValue=="convert"?(m(),A("div",Gt,[a("div",Kt,[U(f,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[1]||(t[1]=o=>e.fromCoinAmount=o),"input-value":e.fromCoinAmount,"coin-symbol":"CETUS","whale-direction":"From",balance:e.whaleBalance,onHalfBalanne:e.halfBalanne,onMaxBalanne:e.maxBalanne,onOnInput:t[2]||(t[2]=o=>{e.fromCoinAmount=o})},null,8,["modelValue","input-value","balance","onHalfBalanne","onMaxBalanne"])]),a("div",Qt,[U(f,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[3]||(t[3]=o=>e.fromCoinAmount=o),"input-value":e.fromCoinAmount,"coin-symbol":"xCETUS","whale-direction":"To",balance:e.availableXwhale,onOnInput:t[4]||(t[4]=o=>{e.fromCoinAmount=o})},null,8,["modelValue","input-value","balance"])]),a("img",{class:pe(e.change?"gang animationex":"gang"),src:wn,alt:""},null,2),a("div",zt,[(m(),A("svg",{class:pe(e.change?"icon animationex":"icon"),"aria-hidden":"true"},ea,2))])])):(m(),A("div",na,[a("div",ta,[U(f,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[5]||(t[5]=o=>e.fromCoinAmount=o),"input-value":e.fromCoinAmount,"coin-symbol":"xCETUS","whale-direction":"From",balance:e.availableXwhale,onHalfBalanne:e.halfBalanne,onMaxBalanne:e.maxBalanne,onOnInput:t[6]||(t[6]=o=>{e.fixedFromCoin=!0,e.fromCoinAmount=o})},null,8,["modelValue","input-value","balance","onHalfBalanne","onMaxBalanne"])]),a("div",aa,[oa,a("div",la,[a("div",ia,[a("div",sa,[Fe(a("input",{"onUpdate:modelValue":t[7]||(t[7]=o=>e.vestingParameter=o),onInput:t[8]||(t[8]=(...o)=>e.validateInput&&e.validateInput(...o)),onBlur:t[9]||(t[9]=(...o)=>e.inputBlur&&e.inputBlur(...o))},null,544),[[gn,e.vestingParameter]])]),ua]),a("div",ra,[(m(!0),A(We,null,Oe(e.vestingDateList,o=>(m(),A("div",{key:o.time,class:pe(["box-table",{"box-table-active":o.num===Number(e.vestingParameter)}]),onClick:S=>e.vestingTab(o.num)},T(o.time),11,da))),128))])]),U(s,{value:e.vestingParameter,"onUpdate:value":t[10]||(t[10]=o=>e.vestingParameter=o),max:180,min:15},null,8,["value"])]),a("div",ca,[U(f,{modelValue:e.toCoinAmount,"onUpdate:modelValue":t[11]||(t[11]=o=>e.toCoinAmount=o),"input-value":e.toCoinAmount,"coin-symbol":"CETUS","whale-direction":"To",balance:e.whaleBalance,onOnInput:t[12]||(t[12]=o=>{e.fixedFromCoin=!1,e.toCoinAmount=o})},null,8,["modelValue","input-value","balance"])]),a("div",ma,[va,a("p",null,T(e.redeemRatio)+"%",1)])])),e.wallet&&e.wallet.address?(m(),D(u,{key:2,class:"big-btn",loading:e.loading,disabled:e.btnDisabled,onClick:e.depositOrWithdraw},{default:O(()=>[a("span",null,T(e.btnText),1)]),_:1},8,["loading","disabled","onClick"])):(m(),D(u,{key:3,class:"big-btn",onClick:t[13]||(t[13]=o=>e.walletStore.setIsShowWalletModal(!0))},{default:O(()=>[a("span",null,T(e.$t("button.connectWallet")),1)]),_:1}))])]),e.openConfirmModal?(m(),D(c,{key:0,onClickConvert:e.clickModalConvert,onClose:t[14]||(t[14]=()=>e.openConfirmModal=!e.openConfirmModal)},null,8,["onClickConvert"])):L("",!0)])}const La=X(Yt,[["render",ga],["__scopeId","data-v-924bb0a1"]]);export{La as default};
