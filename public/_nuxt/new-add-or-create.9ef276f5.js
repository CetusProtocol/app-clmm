import{_ as ye}from"./token-warning.4a37a56e.js";import{_ as ve}from"./status-block.8d10aa09.js";import{u as ae,a as he,i as oe,e as m,c as be,f as ne,d}from"./pool.ac9878c4.js";import{a as me,r as q,m as h,E as le,D as se,e as ue,o as i,f as n,h as r,j as ie,v as o,i as K,w as _,u as t,x as s,F as j,L as ke,p as ce,k as Ce,W as ge,l as pe,y as Ie,a6 as Se,Q as Pe,q as Ae,c as re,t as H,H as we,Y as Re,B as De}from"./entry.f573392f.js";/* empty css              */import{D as y}from"./decimal.0e8aa3f1.js";import{u as fe,c as Ue}from"./sha256.692c34db.js";/* empty css              */import{i as de}from"./import-icon.de3e6c66.js";import{u as Ne}from"./notifi.c77849b0.js";const nn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAngAAABUBAMAAADjSFdtAAAAMFBMVEVHcEwlW04lW04mW04lWUwmW04mXE4lW04mW04SHx4gPzclWk1o/9gVKyhSyKs8jnpksmsVAAAACXRSTlMA6xZ3ykwulK7bAIv/AAAEOUlEQVR42u2dTU8TURSGh7YUEjeISkxm04pREzZoJC66qR8Ji9lgiNGkm2LcsSGKKzZo4qq/YCyFtTQmjC1YevEHEEf2FdE1CX+AhYlt7xk6t3PvnSld2JD33QxluumTOee899yPMQzoAio2v/zQdK7OzqTAold0zy1Gct4CX08aLjBnduZlKnZrftlktTkQia5Jkz3Oex+S95lzD0yi6rZZFWhNWuw1qERT3Kzlxf8kC840uETKd1Y3uxa9CsBE0UpVUh+Gm3F7A2zCdJMpIvQVuwY6IUFrTshvJM3LDJZFr1xNYYlHakYmCz7aSsuWFHeGdoyhLwCkU0ZZVRPbxtQWAOkyni+tJR+0GgNvPNsSd55ZqyCky3idB++FSX2BD9QqsJiTByG1YqaX8WJ3GdtsNEqlTcau8BISf4Ixmk6JWodd3SaVPXpNfohbzeBinP54yj7bZ/p55o4TX8FIXS4oqY2wb7ZPh55/ScImq6O24tWGui2oXKXAzYyBksrk0QhigTVEeCU2IeKFgrV2jkaxu3aXiuRShp0UOKlGr22l63ZAZSolhSVwkiq9w6/WbhBescrvLY6DkzzlrVKpJWB/Tlz34C99oII7iqQnl8nzWo5sStFtix7Dw22eDx1wkro8ikzzE6+wewdNiocn3zm8j1QqLDg9mSgi4xS1Jfe0ddlwybZQdz6DEZpMU7zVmaao3Tjg15NTittx/7cgUTlukTM8au11ite9Y4pb/mAmtkFK1hXgcWlSmK794Ndf+xTGvFTE0RuQycrz5gB5k7V98WrzpgDKrXRwxqmM1lXwyrxUmBigKZ3K0K4KXnEMXkUlSmaLang7/tQICW2BilBsg/Co3GbQGgiKPMiKGh5/NHNwyc2y+e56XoDHo9JqqOCVeFJczIKdscCYsKSH1lKYani8HE+NgZ1ReH+nJoNnq+DZgwcvsfmfxFIxwe9e2mpfmBoe839vAH5BdlDhuYIGFd6Ahq0MHnJeaMEgeP4JDBcFI5pVKTSU8GBVIppkCTzPJANe2PCM8/p97IeH4VnExoDrtykuGgM9taRk8NCSUkpshkrgoRmqkdCGl8CjNnwVpCQSJoA4r3VfwcAEkE7C1GPQqmDqUSdh0jsID5PeOgnLLYLwsNwigleJtRf6BBoDWOijl3+JWQAelpjp1b24URAWN+qFZbX9tAawoLuPARq2EvST9LhNxiaW8yjC9qksKKmcHjbu9dMbCNkymkZXQBO3Z5OR8s3KBUStrt56TqS9Tf7Ito862+Sb0Yxaq5PmgIZWuUA7Sl8yOhWh62gQ8SYks3qV892DDN1xSE3/Mg0+IVlPdRBXrICMF5r1VEfALTjIeKFSHD4YZ4/AJsIwQ3rspYXBRaTAlR64WkXQRqu4OOq3DwUPmXZwgFlk4XjzvvIeDtbvQ75XOlTxSofe8eFlIhda/wAfMfQ7ksgW2wAAAABJRU5ErkJggg==";y.config({precision:64,rounding:y.ROUND_DOWN,toExpNeg:-64,toExpPos:64});const Te=me({props:{minPrice:{type:String,default:""},maxPrice:{type:String,default:""},poolInfo:{type:Object,default:()=>({})},fixedFromCoin:{type:Boolean,default:!0},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},currentPriceTab:{type:String,default:""},slippage:{type:Number,default:0},currentPrice:{type:Number,default:0},currentPriceReverse:{type:Number,default:0},fromCoinAmount:{type:String,default:""},toCoinAmount:{type:String,default:""},positionTotalAmount:{type:Number,default:0},tickLower:{type:Number,default:0},tickUpper:{type:Number,default:0}},setup(e){const v=q("--"),L=q("--"),b=fe(),M=h(()=>b);h(()=>M.value.chainName);const X=ae(),k=h(()=>X),$=h(()=>M.value.chainName?he(M.value.chainName):{}),I=le(),Z=async()=>{var G;if(!e.minPrice&&!e.maxPrice)return;const{TickUtil:c,TickMath:S,getNearestTickByTick:g}=$.value,R=e.poolInfo.token_a.decimals,E=e.poolInfo.token_b.decimals;let D,U,C,f,P,A,p,a=1,u=1;const w=e.poolInfo.current_tick_index;let N=k.value.poolPriceConfigObj&&k.value.poolPriceConfigObj[e.poolInfo.address]&&k.value.poolPriceConfigObj[e.poolInfo.address].recommend_ranges||{};if(e.poolInfo.token_a.address.toLowerCase()===e.fromCoin.address.toLowerCase()&&e.poolInfo.token_b.address.toLowerCase()===e.toCoin.address.toLowerCase()?p=!0:p=!1,e.minPrice==="0"&&e.maxPrice==="∞")C=c.getMinIndex(e.poolInfo.tickSpacing),f=c.getMaxIndex(e.poolInfo.tickSpacing);else if(e.currentPriceTab=="custom"||(G=I==null?void 0:I.query)!=null&&G.action){p?(D=Number(e.minPrice),U=Number(e.maxPrice)):(D=new y(1).div(e.maxPrice).toString(),U=new y(1).div(e.minPrice).toString());try{P=S.priceToTickIndex(new y(D),R,E)}catch{P=-443636}try{A=S.priceToTickIndex(new y(U),R,E)}catch{A=443636}D==0&&(P=-443636),C=I.name=="increase-liquidity"||I.name=="new-position-detail"?e.tickLower:g(P,Number(e.poolInfo.tickSpacing)),f=I.name=="increase-liquidity"||I.name=="new-position-detail"?e.tickUpper:g(A,Number(e.poolInfo.tickSpacing))}else C=N&&N[e.currentPriceTab]&&N[e.currentPriceTab].lower,f=N&&N[e.currentPriceTab]&&N[e.currentPriceTab].upper;if(e.maxPrice==="∞"||w>=C&&w<=f){let O;if(e.fixedFromCoin){const Q=new y(e.fromCoinAmount||1).mul(Math.pow(10,e.fromCoin.decimals)).toString();O=new ne(Q)}else{const Q=new y(e.toCoinAmount||1).mul(Math.pow(10,e.toCoin.decimals)).toString();O=new ne(Q)}const{tokenMaxA:T,tokenMaxB:B}=await $.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:e.poolInfo.token_a,tokenB:e.poolInfo.token_b,lowerTick:C,upperTick:f,coinAmount:O,iscoinA:p?e.fixedFromCoin:!e.fixedFromCoin,roundUp:!0,slippage:Number(e.slippage)/100,curSqrtPrice:new ne(e.poolInfo.current_sqrt_price)});p?e.fixedFromCoin?(u=Number(B)>0?B:"",a=Number(T)>0?T:""):(a=Number(T)>0?T:"",u=Number(B)>0?B:""):(e.fixedFromCoin,u=T,a=B)}else w>f?p?(u=1,a=0):(a=1,u=0):w<C&&(p?(u=0,a=1):(u=1,a=0));const V=a?Number(a):0,J=u?Number(u):0,Y=new y(J).add(new y(p?new y(V*e.currentPrice):new y(V*e.currentPriceReverse))),x=d(new y(V).mul(new y(p?e.currentPrice:e.currentPriceReverse)).div(Y).mul(100).toNumber().toFixed(2),2),ee=d(new y(J).div(Y).mul(100).toNumber().toFixed(2),2);v.value=x,L.value=ee};se(()=>[e.poolInfo,e.minPrice,e.maxPrice,e.fromCoinAmount,e.toCoinAmount],([c,S,g])=>{S&&g&&c&&!be(c)&&(S!=="0"||g!=="0")?Z():(v.value="",L.value="")},{immediate:!0,deep:!0});let l={};se(()=>k.value.RATES,c=>{c&&(l=c)},{immediate:!0});const W=h(()=>{const c=l&&l[e.fromCoin.address]&&l[e.fromCoin.address].price,S=l&&l[e.toCoin.address]&&l[e.toCoin.address].price,g=Number(e.fromCoinAmount)*Number(l&&l[e.fromCoin.address]&&l[e.fromCoin.address].price),R=Number(e.toCoinAmount)*Number(l&&l[e.toCoin.address]&&l[e.toCoin.address].price);return c&&S?Number(g)+Number(R):"--"});return{positionAmount:h(()=>W.value!=="--"?new y(e.positionTotalAmount).add(new y(W.value)).toString():0),fromCoinRatio:v,toCoinRatio:L,totalAmount:W,fixD:oe,addCommom:m,route:I}}});const Be=e=>(ce("data-v-4949cbc1"),e=e(),Ce(),e),qe={class:"deposit-ratio"},$e={class:"lebal"},Fe=Be(()=>r("svg",{class:"icon","aria-hidden":"true"},[r("use",{"xlink:href":"#icon-icon-information"})],-1)),Ee={key:0,class:"text"},Oe={key:1},Le={key:0,class:"deposit-ratio totalAmount"},Me={class:"lebal"},We={class:"text"},Ke={key:0,class:"liquidity-update"},je={key:1};function ze(e,v,L,b,M,X){const k=ke;return i(),n(j,null,[r("div",qe,[r("div",$e,[ie(o(e.$t("newAdd.depositRatio"))+" ",1),K(k,{placement:"bottom","arrow-point-at-center":""},{title:_(()=>[r("span",null,o(e.$t("newAdd.depositRatioTips")),1)]),default:_(()=>[Fe]),_:1})]),e.currentPriceTab!=="full range"?(i(),n("div",Ee,o(e.fromCoinRatio!=="--"?e.fromCoinRatio+"%":"--")+" "+o(e.fromCoinRatio!=="--"?e.fromCoin&&e.fromCoin.symbol:"")+" / "+o(e.toCoinRatio!=="--"?e.toCoinRatio+"%":"--")+" "+o(e.toCoinRatio!=="--"?e.toCoin&&e.toCoin.symbol:""),1)):(i(),n("div",Oe," 50% "+o(e.fromCoin&&e.fromCoin.symbol)+" / 50% "+o(e.toCoin&&e.toCoin.symbol),1))]),e.totalAmount!==0?(i(),n("div",Le,[r("div",Me,o(e.$t("newAdd.totalAmount")),1),r("div",We,[e.route.name=="increase-liquidity"?(i(),n("div",Ke,[r("span",null," $"+o(e.positionTotalAmount>0&&e.positionTotalAmount<.01?"<0.01":("addCommom"in e?e.addCommom:t(m))(("fixD"in e?e.fixD:t(oe))(e.positionTotalAmount,2),2))+" → ",1),r("span",null,"$"+o(Number(e.positionAmount)>0&&Number(e.positionAmount)<.01?"<0.01":("addCommom"in e?e.addCommom:t(m))(("fixD"in e?e.fixD:t(oe))(e.positionAmount,2),2)),1)])):(i(),n("div",je," $"+o(e.totalAmount>0&&e.totalAmount<.01?"<0.01":("addCommom"in e?e.addCommom:t(m))(("fixD"in e?e.fixD:t(oe))(e.totalAmount,2))),1))])])):s("",!0)],64)}const Ve=ue(Te,[["render",ze],["__scopeId","data-v-4949cbc1"]]),Qe=me({components:{Modal:ge},props:{title:{type:String,default:""},poolInfo:{type:Object,default:()=>({})},fromCoinAmount:{type:String,default:"1245566.008946"},toCoinAmount:{type:String,default:"11111111111"},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},minPrice:{type:String,default:""},maxPrice:{type:String,default:""},isIncrease:{type:Boolean,default:!1},fixedFromCoin:{type:Boolean,default:!0},currentPriceTab:{type:String,default:""},currentPrice:{type:String,default:""},currentPriceReverse:{type:String,default:""},showFromCoinLock:{type:Boolean,default:!1},showToCoinLock:{type:Boolean,default:!1},currentDirect:{type:Boolean,default:!0},positionTotalAmount:{type:Number,default:0},tickLower:{type:Number,default:0},tickUpper:{type:Number,default:0},isCreate:{type:Boolean,default:!1}},setup(e,v){const{t:L}=pe(),b=h(()=>{var a,u,w;return((a=e==null?void 0:e.poolInfo)==null?void 0:a.needReverse)||((w=(u=e==null?void 0:e.poolInfo)==null?void 0:u.poolInfo)==null?void 0:w.needReverse)}),M=ae(),X=h(()=>M),k=fe(),$=h(()=>k),I=a=>{var u;return(a==null?void 0:a.logoURI)||(a==null?void 0:a.logo_url)||((u=X.value.tokensObj[a==null?void 0:a.address])==null?void 0:u.logo_url)||($.value.theme==="default"?de("/image/coins/unknown.png"):de("/image/coins/sui-unknown.png"))},Z=q(!1),l=q(!0);function W(){l.value=!l.value}const F=h(()=>$.value.slippage),c=Ne(),S=h(()=>c),g=h(()=>S.value.status),R=h(()=>$.value.chainName),E=h(()=>Ue[R.value].hasNotifi),D=le(),U=q(!1),C=q(""),f=q(""),P=q(""),A=q("");return Ie(()=>{C.value=String(d(String(e.minPrice),6)),f.value=String(d(String(e.maxPrice),6)),P.value=e.currentPrice,A.value=e.currentPriceReverse,e.isIncrease&&(C.value=b.value?String(d(String(1/e.maxPrice),6)):String(d(String(e.minPrice),6)),f.value=b.value?String(d(String(1/e.minPrice),6)):String(d(String(e.maxPrice),6)),P.value=b.value?e.currentPriceReverse:e.currentPrice,A.value=b.value?e.currentPrice:e.currentPriceReverse)}),se(l,a=>{!e.isIncrease&&a||e.isIncrease&&!b.value&&a?(C.value=String(d(String(e.minPrice),6)),f.value=String(d(String(e.maxPrice),6))):!e.isIncrease&&!a||e.isIncrease&&!b.value&&!a?(C.value=String(d(String(1/Number(e.maxPrice)),6)),f.value=String(d(String(1/Number(e.minPrice)),6))):e.isIncrease&&b.value&&(e.currentDirect?a:!a)?(C.value=String(d(String(1/Number(e.maxPrice)),6)),f.value=String(d(String(1/Number(e.minPrice)),6))):e.isIncrease&&b.value&&(e.currentDirect?!a:a)&&(C.value=String(d(String(e.minPrice),6)),f.value=String(d(String(e.maxPrice),6))),P.value=e.currentPrice,A.value=e.currentPriceReverse}),{needReverse:b,getCoinIcon:I,addCommom:m,rateChange:Z,changeDirect:W,direct:l,t:L,slippage:F,notifiStatus:g,hasNotifi:E,route:D,checked:U,min:C,max:f,decimalUi:d,clickSubmit:()=>{e.isIncrease?v.emit("toAdd"):e.title==Se.global.t("newAdd.preview")?v.emit("createPool"):v.emit("toAdd",U.value&&g.value=="authenticated")}}}});const z=e=>(ce("data-v-a3736924"),e=e(),Ce(),e),Xe=z(()=>r("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[r("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),Ze={class:"modal-content"},Je={class:"pool-info"},Ye={class:"left"},Ge={alt:""},He={alt:""},_e={class:"pool-name"},xe={class:"right"},eo={class:"coin-info"},oo={class:"from-coin-info"},io={class:"left"},no={class:"coin-amount"},ro={class:"coin-symbol"},so={class:"right"},to={class:"to-coin-info"},ao={class:"left"},mo={class:"coin-amount"},lo={class:"coin-symbol"},uo={class:"right"},co=z(()=>r("div",{class:"to-swap-logo"},null,-1)),Co={class:"select-range"},fo=z(()=>r("div",{class:"select-range-title"},"Selected Range",-1)),yo={class:"price-conent"},vo={class:"current-price"},ho={class:"left"},bo={key:0,class:"current-price-title"},ko={key:1,class:"current-price-title"},go={key:0,class:"a2b"},po={key:0},Io={key:1},So={key:2},Po={key:3},Ao={key:4},wo={key:5},Ro={key:6},Do={key:7},Uo={key:1,class:"a2b"},No={key:0},To={key:1},Bo={key:2},qo={key:3},$o={key:4},Fo={key:5},Eo={key:6},Oo={key:7},Lo={key:2,class:"a2b"},Mo={key:0},Wo={key:1},Ko={key:2},jo={key:3},zo={key:3,class:"a2b"},Vo={key:0},Qo={key:1},Xo={key:2},Zo={key:3},Jo={key:0,class:"a2b"},Yo={key:0},Go={key:1},Ho={key:2},_o={key:3},xo={key:4},ei={key:5},oi={key:6},ii={key:7},ni={key:1,class:"a2b"},ri={key:0},si={key:1},ti={key:2},di={key:3},ai={key:4},mi={key:5},li={key:6},ui={key:7},ci={class:"right"},Ci={alt:""},fi={class:"coin-rate"},yi=z(()=>r("div",null,[r("svg",{class:"icon icon-up","aria-hidden":"true"},[r("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),vi=z(()=>r("div",null,[r("svg",{class:"icon icon-down","aria-hidden":"true"},[r("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),hi=[yi,vi],bi={class:"price-range-block-content"},ki={class:"price-range-block"},gi={class:"price-item"},pi={class:"title"},Ii={class:"price"},Si={key:0,class:"text"},Pi={key:1,class:"text"},Ai={key:0,class:"text"},wi={key:1,class:"text"},Ri={key:0,class:"text"},Di={key:1,class:"text"},Ui={class:"note"},Ni={class:"price-item"},Ti={class:"title"},Bi={class:"price"},qi={key:0,class:"text"},$i={key:1,class:"text"},Fi={key:0,class:"text"},Ei={key:1,class:"text"},Oi={key:0,class:"text"},Li={key:1,class:"text"},Mi={class:"note"},Wi={class:"deposit-ratio-content"},Ki={key:0,class:"range-alerts"},ji={class:"range-alerts-top"},zi=z(()=>r("div",{class:"title"}," Range alerts for this position ",-1)),Vi=z(()=>r("div",{class:"range-alerts-bottom"}," Subscribe to receive alerts on email, SMS, or Telegram when the price for this pool moves out of your selected range. ",-1));function Qi(e,v,L,b,M,X){const k=ye,$=ve,I=Ve,Z=Re,l=De,W=Pe("Modal"),F=Ae("image");return i(),re(W,{width:"440px",visible:!0,footer:null,title:e.title,onCancel:v[2]||(v[2]=c=>e.$emit("onClose"))},{closeIcon:_(()=>[Xe]),default:_(()=>{var c,S,g,R,E,D,U,C,f,P,A,p,a,u,w,N,V,J,Y,x,ee,G,O,T,B,Q;return[r("div",Ze,[r("div",Je,[r("div",Ye,[r("div",null,[H(r("img",Ge,null,512),[[F,e.needReverse?(R=(g=e.poolInfo)==null?void 0:g.token_b)==null?void 0:R.logo_url:(S=(c=e.poolInfo)==null?void 0:c.token_a)==null?void 0:S.logo_url]]),K(k,{address:e.needReverse?(C=(U=e.poolInfo)==null?void 0:U.token_b)==null?void 0:C.address:(D=(E=e.poolInfo)==null?void 0:E.token_a)==null?void 0:D.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),r("div",null,[H(r("img",He,null,512),[[F,e.needReverse?(p=(A=e.poolInfo)==null?void 0:A.token_a)==null?void 0:p.logo_url:(P=(f=e.poolInfo)==null?void 0:f.token_b)==null?void 0:P.logo_url]]),K(k,{address:e.needReverse?(N=(w=e.poolInfo)==null?void 0:w.token_a)==null?void 0:N.address:(u=(a=e.poolInfo)==null?void 0:a.token_b)==null?void 0:u.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),r("div",_e,[r("span",null,o(e.needReverse?(x=(Y=e.poolInfo)==null?void 0:Y.token_b)==null?void 0:x.symbol:(J=(V=e.poolInfo)==null?void 0:V.token_a)==null?void 0:J.symbol),1),ie(" - "),r("span",null,o(e.needReverse?(T=(O=e.poolInfo)==null?void 0:O.token_a)==null?void 0:T.symbol:(G=(ee=e.poolInfo)==null?void 0:ee.token_b)==null?void 0:G.symbol),1)])]),r("div",xe,[ie(" Fee tier "),r("span",null,o(e.poolInfo&&e.poolInfo.fee*100)+"%",1)])]),r("div",eo,[r("div",oo,[r("div",io,[r("div",no,o(("addCommom"in e?e.addCommom:t(m))(e.fromCoinAmount)||0),1),r("div",ro,o(e.fromCoin&&e.fromCoin.symbol),1)]),r("div",so,[H(r("img",null,null,512),[[F,e.fromCoin&&e.fromCoin.logoURI||e.getCoinIcon(e.fromCoin)]]),K(k,{address:e.fromCoin&&e.fromCoin.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])])]),r("div",to,[r("div",ao,[r("div",mo,o(("addCommom"in e?e.addCommom:t(m))(e.toCoinAmount)||0),1),r("div",lo,o(e.toCoin&&e.toCoin.symbol),1)]),r("div",uo,[H(r("img",null,null,512),[[F,e.toCoin&&e.toCoin.logoURI||e.getCoinIcon(e.toCoin)]]),K(k,{address:e.toCoin&&e.toCoin.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),co])]),r("div",Co,[fo,e.title!==e.$t("newAdd.preview")?(i(),re($,{key:0,"current-status":e.showFromCoinLock||e.showToCoinLock?"Inactive":"Active"},null,8,["current-status"])):s("",!0)]),r("div",yo,[r("div",vo,[r("div",ho,[e.title!==e.$t("newAdd.preview")?(i(),n("div",bo,"Current Price")):(i(),n("div",ko,"Initial Price")),e.isCreate?(i(),n(j,{key:3},[!e.isIncrease&&!e.needReverse?(i(),n("div",Jo,[e.direct&&e.currentDirect?(i(),n("span",Yo,o(("addCommom"in e?e.addCommom:t(m))(("decimalUi"in e?e.decimalUi:t(d))(e.currentPrice,e.toCoin.decimals))),1)):s("",!0),e.direct&&!e.currentDirect?(i(),n("span",Go,o(("addCommom"in e?e.addCommom:t(m))(("decimalUi"in e?e.decimalUi:t(d))(e.currentPriceReverse,e.toCoin.decimals))),1)):s("",!0),!e.direct&&e.currentDirect?(i(),n("span",Ho,o(("addCommom"in e?e.addCommom:t(m))(("decimalUi"in e?e.decimalUi:t(d))(e.currentPriceReverse,e.fromCoin.decimals))),1)):s("",!0),!e.direct&&!e.currentDirect?(i(),n("span",_o,o(("addCommom"in e?e.addCommom:t(m))(("decimalUi"in e?e.decimalUi:t(d))(e.currentPrice,e.fromCoin.decimals))),1)):s("",!0),e.direct&&e.currentDirect?(i(),n("div",xo,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):s("",!0),e.direct&&!e.currentDirect?(i(),n("div",ei,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):s("",!0),!e.direct&&e.currentDirect?(i(),n("div",oi,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):s("",!0),!e.direct&&!e.currentDirect?(i(),n("div",ii,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):s("",!0)])):!e.isIncrease&&e.needReverse?(i(),n("div",ni,[e.direct&&e.currentDirect?(i(),n("span",ri,o(("addCommom"in e?e.addCommom:t(m))(("decimalUi"in e?e.decimalUi:t(d))(e.currentPrice,e.toCoin.decimals))),1)):s("",!0),!e.direct&&e.currentDirect?(i(),n("span",si,o(("addCommom"in e?e.addCommom:t(m))(("decimalUi"in e?e.decimalUi:t(d))(e.currentPriceReverse,e.fromCoin.decimals))),1)):s("",!0),e.direct&&!e.currentDirect?(i(),n("span",ti,o(("addCommom"in e?e.addCommom:t(m))(("decimalUi"in e?e.decimalUi:t(d))(e.currentPrice,e.toCoin.decimals))),1)):s("",!0),!e.direct&&!e.currentDirect?(i(),n("span",di,o(("addCommom"in e?e.addCommom:t(m))(("decimalUi"in e?e.decimalUi:t(d))(e.currentPriceReverse,e.fromCoin.decimals))),1)):s("",!0),e.direct&&e.currentDirect?(i(),n("div",ai,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):s("",!0),!e.direct&&e.currentDirect?(i(),n("div",mi,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):s("",!0),e.direct&&!e.currentDirect?(i(),n("div",li,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):s("",!0),!e.direct&&!e.currentDirect?(i(),n("div",ui,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):s("",!0)])):s("",!0)],64)):(i(),n(j,{key:2},[!e.isIncrease&&!e.needReverse?(i(),n("div",go,[e.direct&&e.currentDirect?(i(),n("span",po,o(("addCommom"in e?e.addCommom:t(m))(("decimalUi"in e?e.decimalUi:t(d))(e.currentPrice,e.toCoin.decimals))),1)):s("",!0),e.direct&&!e.currentDirect?(i(),n("span",Io,o(("addCommom"in e?e.addCommom:t(m))(("decimalUi"in e?e.decimalUi:t(d))(e.currentPriceReverse,e.toCoin.decimals))),1)):s("",!0),!e.direct&&e.currentDirect?(i(),n("span",So,o(("addCommom"in e?e.addCommom:t(m))(("decimalUi"in e?e.decimalUi:t(d))(e.currentPriceReverse,e.fromCoin.decimals))),1)):s("",!0),!e.direct&&!e.currentDirect?(i(),n("span",Po,o(("addCommom"in e?e.addCommom:t(m))(("decimalUi"in e?e.decimalUi:t(d))(e.currentPrice,e.fromCoin.decimals))),1)):s("",!0),e.direct&&e.currentDirect?(i(),n("div",Ao,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):s("",!0),e.direct&&!e.currentDirect?(i(),n("div",wo,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):s("",!0),!e.direct&&e.currentDirect?(i(),n("div",Ro,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):s("",!0),!e.direct&&!e.currentDirect?(i(),n("div",Do,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):s("",!0)])):!e.isIncrease&&e.needReverse?(i(),n("div",Uo,[e.direct&&e.currentDirect?(i(),n("span",No,o(("addCommom"in e?e.addCommom:t(m))(("decimalUi"in e?e.decimalUi:t(d))(e.currentPrice,e.toCoin.decimals))),1)):s("",!0),!e.direct&&e.currentDirect?(i(),n("span",To,o(("addCommom"in e?e.addCommom:t(m))(("decimalUi"in e?e.decimalUi:t(d))(e.currentPriceReverse,e.fromCoin.decimals))),1)):s("",!0),e.direct&&!e.currentDirect?(i(),n("span",Bo,o(("addCommom"in e?e.addCommom:t(m))(("decimalUi"in e?e.decimalUi:t(d))(e.currentPriceReverse,e.toCoin.decimals))),1)):s("",!0),!e.direct&&!e.currentDirect?(i(),n("span",qo,o(("addCommom"in e?e.addCommom:t(m))(("decimalUi"in e?e.decimalUi:t(d))(e.currentPrice,e.fromCoin.decimals))),1)):s("",!0),e.direct&&e.currentDirect?(i(),n("div",$o,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):s("",!0),!e.direct&&e.currentDirect?(i(),n("div",Fo,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):s("",!0),e.direct&&!e.currentDirect?(i(),n("div",Eo,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):s("",!0),!e.direct&&!e.currentDirect?(i(),n("div",Oo,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):s("",!0)])):s("",!0),e.isIncrease&&!e.needReverse?(i(),n("div",Lo,[e.direct?(i(),n("span",Mo,o(("addCommom"in e?e.addCommom:t(m))(("decimalUi"in e?e.decimalUi:t(d))(e.currentPrice,e.toCoin.decimals))),1)):(i(),n("span",Wo,o(("addCommom"in e?e.addCommom:t(m))(("decimalUi"in e?e.decimalUi:t(d))(e.currentPriceReverse,6))),1)),e.direct?(i(),n("div",jo,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):(i(),n("div",Ko,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1))])):s("",!0),e.isIncrease&&e.needReverse?(i(),n("div",zo,[e.direct?(i(),n("span",Vo,o(("addCommom"in e?e.addCommom:t(m))(("decimalUi"in e?e.decimalUi:t(d))(e.currentPriceReverse,e.fromCoin.decimals))),1)):(i(),n("span",Qo,o(("addCommom"in e?e.addCommom:t(m))(("decimalUi"in e?e.decimalUi:t(d))(e.currentPrice,e.toCoin.decimals))),1)),e.direct?(i(),n("div",Xo,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):(i(),n("div",Zo,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1))])):s("",!0)],64))]),r("div",ci,[H(r("img",Ci,null,512),[[F,e.direct?e.fromCoin.logo_url:e.toCoin.logo_url]]),r("span",null,o(e.direct?(B=e.fromCoin)==null?void 0:B.symbol:(Q=e.toCoin)==null?void 0:Q.symbol),1),r("div",fi,[r("div",{onClick:v[0]||(v[0]=(...te)=>e.changeDirect&&e.changeDirect(...te))},hi)])])]),r("div",bi,[r("div",ki,[r("div",gi,[r("div",pi,o(e.$t("common.minPrice")),1),r("p",Ii,o(("addCommom"in e?e.addCommom:t(m))(e.min)),1),!e.isIncrease&&!e.direct?(i(),n("div",Si,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):!e.isIncrease&&e.direct?(i(),n("div",Pi,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):s("",!0),e.isIncrease&&e.needReverse?(i(),n(j,{key:2},[e.isIncrease&&(e.needReverse?e.direct:!e.direct)?(i(),n("div",Ai,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):e.isIncrease&&(e.needReverse?!e.direct:e.direct)?(i(),n("div",wi,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):s("",!0)],64)):s("",!0),e.isIncrease&&!e.needReverse?(i(),n(j,{key:3},[e.isIncrease&&(e.needReverse?e.direct:!e.direct)?(i(),n("div",Ri,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):e.isIncrease&&(e.needReverse?!e.direct:e.direct)?(i(),n("div",Di,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):s("",!0)],64)):s("",!0),r("div",Ui,o(e.t("common.positionwillBe",{symbol:e.isIncrease?`${e.needReverse&&e.direct?e.fromCoin.symbol:e.toCoin.symbol}`:`${e.direct?e.fromCoin.symbol:e.toCoin.symbol}`})),1)]),r("div",Ni,[r("div",Ti,o(e.$t("common.maxPrice")),1),r("p",Bi,o(e.maxPrice.indexOf("∞")>-1||e.maxPrice.indexOf("+")>-1?"∞":("addCommom"in e?e.addCommom:t(m))(e.max)),1),!e.isIncrease&&!e.direct?(i(),n("div",qi,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):!e.isIncrease&&e.direct?(i(),n("div",$i,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):s("",!0),e.isIncrease&&e.needReverse?(i(),n(j,{key:2},[e.isIncrease&&(e.needReverse?e.direct:!e.direct)?(i(),n("div",Fi,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):e.isIncrease&&(e.needReverse?!e.direct:e.direct)?(i(),n("div",Ei,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):s("",!0)],64)):s("",!0),e.isIncrease&&!e.needReverse?(i(),n(j,{key:3},[e.isIncrease&&(e.needReverse?e.direct:!e.direct)?(i(),n("div",Oi,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):e.isIncrease&&(e.needReverse?!e.direct:e.direct)?(i(),n("div",Li,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):s("",!0)],64)):s("",!0),r("div",Mi,o(e.t("common.positionwillBe",{symbol:e.isIncrease?`${e.needReverse&&e.direct?e.toCoin.symbol:e.fromCoin.symbol}`:`${e.direct?e.toCoin.symbol:e.fromCoin.symbol}`})),1)])])])]),r("div",Wi,[e.poolInfo?(i(),re(I,{key:0,"min-price":e.minPrice,"max-price":e.maxPrice,"pool-info":e.poolInfo,"fixed-from-coin":e.fixedFromCoin,"from-coin":e.fromCoin,"to-coin":e.toCoin,"current-price-tab":e.currentPriceTab,slippage:e.slippage,"current-price":e.currentPrice,"current-price-reverse":e.currentPriceReverse,"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,"position-total-amount":e.positionTotalAmount,"tick-lower":e.tickLower,"tick-upper":e.tickUpper},null,8,["min-price","max-price","pool-info","fixed-from-coin","from-coin","to-coin","current-price-tab","slippage","current-price","current-price-reverse","from-coin-amount","to-coin-amount","position-total-amount","tick-lower","tick-upper"])):s("",!0)])]),e.notifiStatus=="authenticated"&&e.hasNotifi&&e.route.name=="deposit"&&e.title==e.$t("button.addLiquidity")&&e.minPrice!=="0"&&e.maxPrice!=="∞"?(i(),n("div",Ki,[r("div",ji,[zi,K(Z,{class:"range-alerts-switch",checked:e.checked,onClick:v[1]||(v[1]=te=>e.checked=!e.checked)},null,8,["checked"])]),Vi])):s("",!0),K(l,{class:"big-btn liquidity-btn",style:we(e.notifiStatus=="authenticated"&&e.hasNotifi&&e.route.name=="deposit"&&e.title==e.$t("button.addLiquidity")&&e.minPrice!=="0"&&e.maxPrice!=="∞"?{bottom:"-172px"}:{bottom:"-65px"}),onClick:e.clickSubmit},{default:_(()=>[ie(o(e.isIncrease?"Increase Liquidity":e.title==e.$t("button.addLiquidity")?"Add Liquidity":"Create and Add Liquidity"),1)]),_:1},8,["style","onClick"])]}),_:1},8,["title"])}const rn=ue(Qe,[["render",Qi],["__scopeId","data-v-a3736924"]]);export{nn as _,Ve as a,rn as b};
