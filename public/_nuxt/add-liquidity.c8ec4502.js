import{a as se,e as re,o as n,f as s,h as r,t as o,x as ne,M as me,l as te,r as b,m as p,v as de,A as K,K as le,c as ae,w as $,i as h,u as i,s as l,H as ue,j as ce,B as ye,p as fe,k as ve}from"./entry.df2391fb.js";import{_ as Ce}from"./coin-pair-name.4d50fd6a.js";import{_ as be}from"./status-block.b57fce77.js";import{_ as he}from"./c-switch.db3f7ed8.js";import{g as t,a as ke,_ as ge,l as v,d as u,f as Se,h as pe}from"./pool.cc4a70b7.js";import{p as U}from"./precision.a7a6c57b.js";import{i as Ie}from"./import-icon.de3e6c66.js";import{u as Ae}from"./notifi.a64e29d6.js";const Jo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAngAAABUBAMAAADjSFdtAAAAMFBMVEVHcEwlW04lW04mW04lWUwmW04mXE4lW04mW04SHx4gPzclWk1o/9gVKyhSyKs8jnpksmsVAAAACXRSTlMA6xZ3ykwulK7bAIv/AAAEOUlEQVR42u2dTU8TURSGh7YUEjeISkxm04pREzZoJC66qR8Ji9lgiNGkm2LcsSGKKzZo4qq/YCyFtTQmjC1YevEHEEf2FdE1CX+AhYlt7xk6t3PvnSld2JD33QxluumTOee899yPMQzoAio2v/zQdK7OzqTAold0zy1Gct4CX08aLjBnduZlKnZrftlktTkQia5Jkz3Oex+S95lzD0yi6rZZFWhNWuw1qERT3Kzlxf8kC840uETKd1Y3uxa9CsBE0UpVUh+Gm3F7A2zCdJMpIvQVuwY6IUFrTshvJM3LDJZFr1xNYYlHakYmCz7aSsuWFHeGdoyhLwCkU0ZZVRPbxtQWAOkyni+tJR+0GgNvPNsSd55ZqyCky3idB++FSX2BD9QqsJiTByG1YqaX8WJ3GdtsNEqlTcau8BISf4Ixmk6JWodd3SaVPXpNfohbzeBinP54yj7bZ/p55o4TX8FIXS4oqY2wb7ZPh55/ScImq6O24tWGui2oXKXAzYyBksrk0QhigTVEeCU2IeKFgrV2jkaxu3aXiuRShp0UOKlGr22l63ZAZSolhSVwkiq9w6/WbhBescrvLY6DkzzlrVKpJWB/Tlz34C99oII7iqQnl8nzWo5sStFtix7Dw22eDx1wkro8ikzzE6+wewdNiocn3zm8j1QqLDg9mSgi4xS1Jfe0ddlwybZQdz6DEZpMU7zVmaao3Tjg15NTittx/7cgUTlukTM8au11ite9Y4pb/mAmtkFK1hXgcWlSmK794Ndf+xTGvFTE0RuQycrz5gB5k7V98WrzpgDKrXRwxqmM1lXwyrxUmBigKZ3K0K4KXnEMXkUlSmaLang7/tQICW2BilBsg/Co3GbQGgiKPMiKGh5/NHNwyc2y+e56XoDHo9JqqOCVeFJczIKdscCYsKSH1lKYani8HE+NgZ1ReH+nJoNnq+DZgwcvsfmfxFIxwe9e2mpfmBoe839vAH5BdlDhuYIGFd6Ahq0MHnJeaMEgeP4JDBcFI5pVKTSU8GBVIppkCTzPJANe2PCM8/p97IeH4VnExoDrtykuGgM9taRk8NCSUkpshkrgoRmqkdCGl8CjNnwVpCQSJoA4r3VfwcAEkE7C1GPQqmDqUSdh0jsID5PeOgnLLYLwsNwigleJtRf6BBoDWOijl3+JWQAelpjp1b24URAWN+qFZbX9tAawoLuPARq2EvST9LhNxiaW8yjC9qksKKmcHjbu9dMbCNkymkZXQBO3Z5OR8s3KBUStrt56TqS9Tf7Ito862+Sb0Yxaq5PmgIZWuUA7Sl8yOhWh62gQ8SYks3qV892DDN1xSE3/Mg0+IVlPdRBXrICMF5r1VEfALTjIeKFSHD4YZ4/AJsIwQ3rspYXBRaTAlR64WkXQRqu4OOq3DwUPmXZwgFlk4XjzvvIeDtbvQ75XOlTxSofe8eFlIhda/wAfMfQ7ksgW2wAAAABJRU5ErkJggg==",Qo=""+new URL("img-lock_2x.693ff210.png",import.meta.url).href,Ne=se({props:{direct:{type:Boolean,default:!0},formCoinSymbol:{type:String,default:""},toCoinSymbol:{type:String,default:""}}});const Re={class:"coin-tab"};function Pe(e,d,W,X,I,V){return n(),s("div",Re,[r("div",{class:ne(e.direct?"active":""),onClick:d[0]||(d[0]=c=>e.$emit("changeDirect",!0))},o(e.formCoinSymbol),3),r("div",{class:ne(e.direct?"":"active"),onClick:d[1]||(d[1]=c=>e.$emit("changeDirect",!1))},o(e.toCoinSymbol),3)])}const we=re(Ne,[["render",Pe],["__scopeId","data-v-97284659"]]),Ue=se({components:{Modal:me},props:{isIncrease:{type:Boolean,required:!1},fromCoin:{type:Object,required:!0},toCoin:{type:Object,required:!0},fromCoinAmount:{type:String,default:""},toCoinAmount:{type:String,default:""},minPrice:{type:String,default:""},maxPrice:{type:String,default:""},currentPriceReverse:{type:String,default:""},currentPrice:{type:String,default:""},poolInfo:{type:Object,required:!0},currentDirect:{type:Boolean,default:!0}},setup(e,d){const{t:W,locale:X}=te(),I=b(!0);function V(m){I.value=m}const c=b(""),y=b(""),f=b(""),A=b(""),B=b(""),N=b(""),a=p(()=>{var m,P,w;return((m=e==null?void 0:e.poolInfo)==null?void 0:m.needReverse)||((w=(P=e==null?void 0:e.poolInfo)==null?void 0:P.poolInfo)==null?void 0:w.needReverse)});de(()=>{c.value=String(t(String(e.minPrice),6)),y.value=String(t(String(e.maxPrice),6)),f.value=e.currentPrice,A.value=e.currentPriceReverse,e.isIncrease&&(c.value=a.value?String(t(String(1/e.maxPrice),6)):String(t(String(e.minPrice),6)),y.value=a.value?String(t(String(1/e.minPrice),6)):String(t(String(e.maxPrice),6)),f.value=a.value?e.currentPriceReverse:e.currentPrice,A.value=a.value?e.currentPrice:e.currentPriceReverse),console.log(f,"===>currentPrice"),console.log("0421###onMounted###poolInfo####",e.poolInfo)}),K(I,m=>{!e.isIncrease&&m||e.isIncrease&&!a.value&&m?(console.log("0517####add-liquidity###direct###11111###val###",m),c.value=String(t(String(e.minPrice),6)),y.value=String(t(String(e.maxPrice),6))):!e.isIncrease&&!m||e.isIncrease&&!a.value&&!m?(console.log("0517####add-liquidity###direct###22222###val####",m),c.value=String(t(String(1/Number(e.maxPrice)),6)),y.value=String(t(String(1/Number(e.minPrice)),6))):e.isIncrease&&a.value&&(e.currentDirect?m:!m)?(console.log("0517####add-liquidity###direct###3333###val###",m),c.value=String(t(String(1/Number(e.maxPrice)),6)),y.value=String(t(String(1/Number(e.minPrice)),6))):e.isIncrease&&a.value&&(e.currentDirect?!m:m)&&(console.log("0517####add-liquidity###direct###44444###val###",m),c.value=String(t(String(e.minPrice),6)),y.value=String(t(String(e.maxPrice),6))),f.value=e.currentPrice,A.value=e.currentPriceReverse}),K(()=>e.minPrice,m=>{m&&(B.value=m.toString())},{immediate:!0}),K(()=>e.maxPrice,m=>{m&&(N.value=m.toString()),console.log(N.value,"===>mockMax.value")},{immediate:!0});const q=async()=>{console.log(g.value&&S.value=="authenticated","checked.value&&notifiStatus.value=='authenticated'"),d.emit("toAdd",g.value&&S.value=="authenticated")},g=b(!1),D=Ae(),T=p(()=>D),S=p(()=>T.value.status),E=ke(),k=p(()=>E),R=p(()=>k.value.chainName&&k.value.chainName.toLowerCase().includes("sui")?k.value.chainName.split("2")[0]:k.value.chainName),M=p(()=>ge[R.value].hasNotifi);return K(()=>e.poolInfo,m=>{console.log("0421###props.poolInfo###",m)}),{hasNotifi:M,showNum:v,precision:U,addCommom:u,decimalUi:t,t:W,clickAddBtn:q,min:c,max:y,importIcon:Ie,fixD:Se,decimalFormat:pe,direct:I,changeDirect:V,mockMin:B,mockMax:N,checked:g,notifiStatus:S,chainName:R,needReverse:a}}});const z=e=>(fe("data-v-6e2600bd"),e=e(),ve(),e),Be=z(()=>r("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[r("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),qe={class:"add-liquidity-container"},De={class:"top"},Te={class:"induction info"},Ee={class:"item"},Me={key:0,class:"induction-text"},Ke={key:1,class:"induction-text"},ze={key:2,class:"induction-value"},We={key:3,class:"induction-value"},Ve={class:"item"},$e={key:0,class:"induction-text"},Xe={key:1,class:"induction-text"},Ze={key:2,class:"induction-value"},Fe={key:3,class:"induction-value"},Je={class:"item"},Qe={class:"induction-text"},Oe={class:"induction-value"},Ye={class:"range-box"},je={class:"range-title"},Ge={key:0,class:"current-price"},Le={key:0},He={key:1},_e={key:2},xe={key:3},eo={key:1,class:"current-price"},oo={key:0},io={key:1},no={key:2},so={key:3},ro={key:2,class:"current-price"},mo={key:0},to={key:1},lo={key:3,class:"current-price"},ao={key:0},uo={key:1},co={class:"price-range-block"},yo={class:"price-item"},fo={class:"title"},vo={class:"price"},Co={key:0,class:"text"},bo={key:1,class:"text"},ho={key:2,class:"text"},ko={key:3,class:"text"},go={class:"price-item"},So={class:"title"},po={class:"price"},Io={key:0,class:"text"},Ao={key:1,class:"text"},No={key:2,class:"text"},Ro={key:3,class:"text"},Po={class:"text-block"},wo={class:"note"},Uo={class:"note"},Bo={key:0,class:"range-alerts"},qo={class:"range-alerts-top"},Do=z(()=>r("div",{class:"title"}," Range alerts for this position ",-1)),To=z(()=>r("div",{class:"range-alerts-bottom"}," Subscribe to receive alerts on email, SMS, or Telegram when the price for this pool moves out of your selected range. ",-1)),Eo=z(()=>r("svg",{class:"icon","aria-hidden":"true"},[r("use",{"xlink:href":"#icon-icon-add"})],-1));function Mo(e,d,W,X,I,V){const c=Ce,y=be,f=we,A=he,B=ye,N=le("Modal");return n(),ae(N,{width:"440px",visible:!0,footer:null,title:e.$t("button.addLiquidity"),class:"add-liquidity-modal",onCancel:d[5]||(d[5]=a=>e.$emit("onClose"))},{closeIcon:$(()=>[Be]),default:$(()=>{var a,q,g,D,T,S,E,k,R,M,m,P,w,Z,F,J,Q,O,Y,j,G,L,H,_,x,ee,oe,ie;return[r("div",qe,[r("div",De,[h(c,{"from-coin":e.needReverse?(q=e.poolInfo)==null?void 0:q.token_b:(a=e.poolInfo)==null?void 0:a.token_a,"to-coin":e.needReverse?(D=e.poolInfo)==null?void 0:D.token_a:(g=e.poolInfo)==null?void 0:g.token_b},null,8,["from-coin","to-coin"]),h(y,{"current-status":e.poolInfo.currentStatus||""},null,8,["current-status"])]),r("div",Te,[r("div",Ee,[e.isIncrease?(n(),s("span",Ke,o(e.needReverse?(k=(E=e.poolInfo)==null?void 0:E.token_b)==null?void 0:k.symbol:(S=(T=e.poolInfo)==null?void 0:T.token_a)==null?void 0:S.symbol),1)):(n(),s("span",Me,o(e.fromCoin.symbol),1)),e.isIncrease?(n(),s("span",We,o(e.needReverse?("showNum"in e?e.showNum:i(v))(e.poolInfo.amountB,(P=(m=e.poolInfo)==null?void 0:m.token_b)==null?void 0:P.decimals):("showNum"in e?e.showNum:i(v))(e.poolInfo.amountA,(M=(R=e.poolInfo)==null?void 0:R.token_a)==null?void 0:M.decimals))+" → "+o(e.needReverse?("showNum"in e?e.showNum:i(v))(("precision"in e?e.precision:i(U)).plus(Number(e.poolInfo.amountB),Number(e.toCoinAmount)),(J=(F=e.poolInfo)==null?void 0:F.token_b)==null?void 0:J.decimals):("showNum"in e?e.showNum:i(v))(("precision"in e?e.precision:i(U)).plus(Number(e.poolInfo.amountA),Number(e.fromCoinAmount)),(Z=(w=e.poolInfo)==null?void 0:w.token_a)==null?void 0:Z.decimals)),1)):(n(),s("span",ze,o(e.fromCoinAmount||0),1))]),r("div",Ve,[e.isIncrease?(n(),s("span",Xe,o(e.needReverse?(j=(Y=e.poolInfo)==null?void 0:Y.token_a)==null?void 0:j.symbol:(O=(Q=e.poolInfo)==null?void 0:Q.token_b)==null?void 0:O.symbol),1)):(n(),s("span",$e,o(e.toCoin.symbol),1)),e.isIncrease?(n(),s("span",Fe,o(e.needReverse?("showNum"in e?e.showNum:i(v))(e.poolInfo.amountA,(_=(H=e.poolInfo)==null?void 0:H.token_a)==null?void 0:_.decimals):("showNum"in e?e.showNum:i(v))(e.poolInfo.amountB,(L=(G=e.poolInfo)==null?void 0:G.token_b)==null?void 0:L.decimals))+" → "+o(e.needReverse?("showNum"in e?e.showNum:i(v))(("precision"in e?e.precision:i(U)).plus(Number(e.poolInfo.amountA),Number(e.fromCoinAmount)),(ie=(oe=e.poolInfo)==null?void 0:oe.token_a)==null?void 0:ie.decimals):("showNum"in e?e.showNum:i(v))(("precision"in e?e.precision:i(U)).plus(Number(e.poolInfo.amountB),Number(e.toCoinAmount)),(ee=(x=e.poolInfo)==null?void 0:x.token_b)==null?void 0:ee.decimals)),1)):(n(),s("span",Ze,o(e.toCoinAmount||0),1))]),r("div",Je,[r("span",Qe,o(e.$t("common.feeTier")),1),r("span",Oe,o(e.poolInfo.fee*100)+"%",1)])]),r("div",Ye,[r("div",je,[r("h3",null,o(e.$t("common.selectedRange")),1)]),!e.isIncrease&&!e.needReverse?(n(),s("div",Ge,[e.direct&&e.currentDirect?(n(),s("div",Le,"1 "+o(e.fromCoin.symbol)+" ≈ "+o(("addCommom"in e?e.addCommom:i(u))(("decimalUi"in e?e.decimalUi:i(t))(e.currentPrice,e.toCoin.decimals)))+" "+o(e.toCoin.symbol),1)):l("",!0),e.direct&&!e.currentDirect?(n(),s("div",He,"1 "+o(e.fromCoin.symbol)+" ≈ "+o(("addCommom"in e?e.addCommom:i(u))(("decimalUi"in e?e.decimalUi:i(t))(e.currentPriceReverse,e.toCoin.decimals)))+" "+o(e.toCoin.symbol),1)):l("",!0),!e.direct&&e.currentDirect?(n(),s("div",_e,"1 "+o(e.toCoin.symbol)+" ≈ "+o(("addCommom"in e?e.addCommom:i(u))(("decimalUi"in e?e.decimalUi:i(t))(e.currentPriceReverse,e.fromCoin.decimals)))+" "+o(e.fromCoin.symbol),1)):l("",!0),!e.direct&&!e.currentDirect?(n(),s("div",xe,"1 "+o(e.toCoin.symbol)+" ≈ "+o(("addCommom"in e?e.addCommom:i(u))(("decimalUi"in e?e.decimalUi:i(t))(e.currentPrice,e.fromCoin.decimals)))+" "+o(e.fromCoin.symbol),1)):l("",!0),h(f,{direct:e.direct,"form-coin-symbol":e.needReverse?e.toCoin.symbol:e.fromCoin.symbol,"to-coin-symbol":e.needReverse?e.fromCoin.symbol:e.toCoin.symbol,onChangeDirect:d[0]||(d[0]=C=>e.direct=C)},null,8,["direct","form-coin-symbol","to-coin-symbol"])])):!e.isIncrease&&e.needReverse?(n(),s("div",eo,[e.direct&&e.currentDirect?(n(),s("div",oo,"1 "+o(e.fromCoin.symbol)+" ≈ "+o(("addCommom"in e?e.addCommom:i(u))(("decimalUi"in e?e.decimalUi:i(t))(e.currentPrice,e.toCoin.decimals)))+" "+o(e.toCoin.symbol),1)):l("",!0),!e.direct&&e.currentDirect?(n(),s("div",io,"1 "+o(e.toCoin.symbol)+" ≈ "+o(("addCommom"in e?e.addCommom:i(u))(("decimalUi"in e?e.decimalUi:i(t))(e.currentPriceReverse,e.fromCoin.decimals)))+" "+o(e.fromCoin.symbol),1)):l("",!0),e.direct&&!e.currentDirect?(n(),s("div",no,"1 "+o(e.fromCoin.symbol)+" ≈ "+o(("addCommom"in e?e.addCommom:i(u))(("decimalUi"in e?e.decimalUi:i(t))(e.currentPriceReverse,e.toCoin.decimals)))+" "+o(e.toCoin.symbol),1)):l("",!0),!e.direct&&!e.currentDirect?(n(),s("div",so,"1 "+o(e.toCoin.symbol)+" ≈ "+o(("addCommom"in e?e.addCommom:i(u))(("decimalUi"in e?e.decimalUi:i(t))(e.currentPrice,e.fromCoin.decimals)))+" "+o(e.fromCoin.symbol),1)):l("",!0),h(f,{direct:e.direct,"form-coin-symbol":e.needReverse?e.fromCoin.symbol:e.toCoin.symbol,"to-coin-symbol":e.needReverse?e.toCoin.symbol:e.fromCoin.symbol,onChangeDirect:d[1]||(d[1]=C=>e.direct=C)},null,8,["direct","form-coin-symbol","to-coin-symbol"])])):e.isIncrease&&!e.needReverse?(n(),s("div",ro,[e.direct?(n(),s("div",mo,"1 "+o(e.fromCoin.symbol)+" ≈ "+o(("addCommom"in e?e.addCommom:i(u))(("decimalUi"in e?e.decimalUi:i(t))(e.currentPrice,e.toCoin.decimals)))+" "+o(e.toCoin.symbol),1)):(n(),s("div",to,"1 "+o(e.toCoin.symbol)+" ≈ "+o(("addCommom"in e?e.addCommom:i(u))(("decimalUi"in e?e.decimalUi:i(t))(e.currentPriceReverse,6)))+" "+o(e.fromCoin.symbol),1)),h(f,{direct:e.direct,"form-coin-symbol":e.needReverse?e.toCoin.symbol:e.fromCoin.symbol,"to-coin-symbol":e.needReverse?e.fromCoin.symbol:e.toCoin.symbol,onChangeDirect:d[2]||(d[2]=C=>e.direct=C)},null,8,["direct","form-coin-symbol","to-coin-symbol"])])):e.isIncrease&&e.needReverse?(n(),s("div",lo,[e.direct?(n(),s("div",ao,"1 "+o(e.toCoin.symbol)+" ≈ "+o(("addCommom"in e?e.addCommom:i(u))(("decimalUi"in e?e.decimalUi:i(t))(e.currentPriceReverse,e.fromCoin.decimals)))+" "+o(e.fromCoin.symbol),1)):(n(),s("div",uo,"1 "+o(e.fromCoin.symbol)+" ≈ "+o(("addCommom"in e?e.addCommom:i(u))(("decimalUi"in e?e.decimalUi:i(t))(e.currentPrice,e.toCoin.decimals)))+" "+o(e.toCoin.symbol),1)),h(f,{direct:e.direct,"form-coin-symbol":e.needReverse?e.toCoin.symbol:e.fromCoin.symbol,"to-coin-symbol":e.needReverse?e.fromCoin.symbol:e.toCoin.symbol,onChangeDirect:d[3]||(d[3]=C=>e.direct=C)},null,8,["direct","form-coin-symbol","to-coin-symbol"])])):l("",!0),r("div",co,[r("div",yo,[r("div",fo,o(e.$t("common.minPrice")),1),r("p",vo,o(e.min),1),!e.isIncrease&&!e.direct?(n(),s("div",Co,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):!e.isIncrease&&e.direct?(n(),s("div",bo,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):l("",!0),e.isIncrease&&(e.needReverse?e.direct:!e.direct)?(n(),s("div",ho,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):e.isIncrease&&(e.needReverse?!e.direct:e.direct)?(n(),s("div",ko,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):l("",!0)]),r("div",go,[r("div",So,o(e.$t("common.maxPrice")),1),r("p",po,o(e.mockMax.indexOf("∞")>-1||e.mockMax.indexOf("+")>-1?"∞":e.max),1),!e.isIncrease&&!e.direct?(n(),s("div",Io,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):!e.isIncrease&&e.direct?(n(),s("div",Ao,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):l("",!0),e.isIncrease&&(e.needReverse?e.direct:!e.direct)?(n(),s("div",No,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):e.isIncrease&&(e.needReverse?!e.direct:e.direct)?(n(),s("div",Ro,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):l("",!0)])]),r("div",Po,[r("div",wo,o(e.t("common.positionwillBe",{symbol:`${!e.isIncrease&&e.needReverse?e.fromCoin.symbol:e.toCoin.symbol}`})),1),r("div",Uo,o(e.t("common.positionwillBe",{symbol:`${!e.isIncrease&&e.needReverse?e.toCoin.symbol:e.fromCoin.symbol}`})),1)])])]),e.notifiStatus=="authenticated"&&e.chainName=="Aptos"&&e.hasNotifi?(n(),s("div",Bo,[r("div",qo,[Do,h(A,{checked:e.checked,disabled:e.notifiStatus!=="authenticated",onChange:d[4]||(d[4]=C=>e.checked=!e.checked)},null,8,["checked","disabled"])]),To])):l("",!0),h(B,{class:"big-btn liquidity-btn",style:ue(e.notifiStatus=="authenticated"&&e.hasNotifi?{bottom:"-172px"}:{bottom:"-65px"}),onClick:e.clickAddBtn},{default:$(()=>[Eo,ce(" "+o(e.isIncrease?e.$t("newAdd.addMore"):e.$t("button.addLiquidity")),1)]),_:1},8,["style","onClick"])]}),_:1},8,["title"])}const Oo=re(Ue,[["render",Mo],["__scopeId","data-v-6e2600bd"]]);export{Jo as _,Qo as a,Oo as b,we as c};
