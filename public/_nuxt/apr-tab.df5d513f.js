import{a as he,u as ve,j as ne,e as C,c as le,s as _e}from"./pool.deddc395.js";import{a as Pe,b as ye,r as m,m as re,y as fe,D as ae,a7 as we,e as Le,o as d,f as l,h as s,z as h,j as A,i as se,w as y,v as n,x as U,F as te,s as ie,H as oe,u as f,t as ce,G as pe,N as je,p as Oe,k as Te}from"./entry.66452a28.js";/* empty css              */import"./index.a0467ff3.js";import{u as Ne}from"./sha256.eb70349c.js";const Ae=Pe({props:{aprRewardsDateList:{type:Array,default:()=>[]},aprRewardsParameter:{type:Number,default:30},aprTitle:{type:String,default:""},nameTab:{type:String,default:""},poolInfo:{type:Object,default:()=>({})},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},minPrice:{type:String,default:""},maxPrice:{type:String,default:""}},setup(e,de){ye();const D=m(0),S=m(0),E=m(0),H=m(0),b=m(1e4),B=m("echartsBox"+Date.now()+Math.random()),Y=Ne(),c=re(()=>Y),G=re(()=>c.value.chainName?he(c.value.chainName):{}),_=m(!1),g=m({});fe(()=>{document.body.clientWidth<750?_.value=!1:_.value=!0,window.onresize=()=>{document.body.clientWidth<750?_.value=!1:_.value=!0,setTimeout(()=>{F()},500)}}),ae(()=>g.value,(r,t)=>{le(r)||(D.value=r==null?void 0:r.aprFee,S.value=r!=null&&r.rewardAprList[0].rewarder_display?r==null?void 0:r.rewardAprList[0].rewarder_apr:0,E.value=r!=null&&r.rewardAprList[1].rewarder_display?r==null?void 0:r.rewardAprList[1].rewarder_apr:0,H.value=r!=null&&r.rewardAprList[2].rewarder_display?r==null?void 0:r.rewardAprList[2].rewarder_apr:0,(r==null?void 0:r.aprPercentageTotal)==0||isNaN(r==null?void 0:r.aprPercentageTotal)||(r==null?void 0:r.aprPercentageTotal)==1/0?b.value=1e9:b.value=0,!r.is_display_rewarder&&D.value==0&&(b.value=1e9),r.is_display_rewarder||(S.value=0,E.value=0,H.value=0),setTimeout(()=>{F()},500))},{immediate:!0,deep:!0});const F=()=>{const r=document.getElementById(B.value);if(!r)return;const t=we(r);let u={tooltip:{show:!0,trigger:"axis",axisPointer:{type:"shadow",axis:"auto",snap:!0},renderMode:"html",backgroundColor:"rgba(50,50,50,0.7)",borderColor:"#333",borderWidth:0,padding:5,textStyle:{color:"#fff",fontStyle:"normal",fontWeight:"normal",fontFamily:"sans-serif",fontSize:14},extraCssText:"box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);",confine:!1,formatter:function(o){return o[0].name+"的分数是:"+o[0].data}},title:{text:"",left:"center",top:"center"},series:[{type:"pie",silent:!0,data:[{value:D.value,name:"A"},{value:S.value,name:"B"},{value:E.value,name:"C"},{value:H.value,name:"D"},{value:b.value,name:"E"}],labelLine:{show:!1},itemStyle:{normal:{color:function(o){var p=c.value.theme=="default"?["#9EFFC3","#9E65FF","#6C65FF","#D3E97C","#8D8D8D"]:["#65C8FF","#9E65FF","#6C65FF","#D3E97C","#D3E97C"];return p[o.dataIndex]}}},radius:["74%","100%"]}]};u&&t.setOption(u,!0)},J=re(()=>{var t;let r=0;return g.value&&g.value.rewardAprList&&((t=g.value)==null?void 0:t.rewardAprList).forEach(o=>{o!=null&&o.rewarder_display&&r++}),r}),K=ve(),w=re(()=>K),M=async r=>{var W,$,z;let t;e.nameTab=="position"||r.token_a.address.toLowerCase()===e.fromCoin.address.toLowerCase()&&r.token_b.address.toLowerCase()===e.toCoin.address.toLowerCase()?t=!0:t=!1;const u=t?Number(e.minPrice):e.maxPrice=="∞"?1/2**50:1/Number(e.maxPrice),o=isNaN(Number(e.maxPrice))||e.maxPrice=="∞"?2**50:t?Number(e.maxPrice):1/Number(e.minPrice);let p=[];p=c.value&&c.value.addressHistTokens&&c.value.addressHistTokens[r.poolAddress]&&c.value.addressHistTokens[r.poolAddress].data&&c.value.addressHistTokens[r.poolAddress].data.length>0&&Object.fromEntries(c.value.addressHistTokens[r.poolAddress].data.map(T=>[T.key,T.value]));const Z=Number(Number(e.aprRewardsParameter==7?p.before_7_d_contract_price_lowest:e.aprRewardsParameter==24?p.before_24_h_contract_price_lowest:p.before_30_d_contract_price_lowest)),I=Number(Number(e.aprRewardsParameter==7?p.before_7_d_contract_price_highest:e.aprRewardsParameter==24?p.before_24_h_contract_price_highest:p.before_30_d_contract_price_highest)),k=w.value.tokensObj,x=await G.value.getEstPositionAPRWithMulti(u,o,Z,I),j=Number(x.toString()),i=c.value.newTopPoolsObj[r.poolAddress];let O;if(i){e.aprRewardsParameter==7?O=i.apr_7day?Number(i.apr_7day.substring(0,i.apr_7day.length-1)):0:e.aprRewardsParameter==24?O=i.apr_24h?Number(i.apr_24h.substring(0,i.apr_24h.length-1)):0:O=i.apr_30day?Number(i.apr_30day.substring(0,i.apr_30day.length-1)):0;const T=i.rewarder_apr[0]?Number(i.rewarder_apr[0].substring(0,i.rewarder_apr[0].length-1)):0,V=i.rewarder_apr[1]?Number(i.rewarder_apr[1].substring(0,i.rewarder_apr[1].length-1)):0,ee=i.rewarder_apr[2]?Number(i.rewarder_apr[2].substring(0,i.rewarder_apr[2].length-1)):0,P=Number(j*O),N=Number(j*T),a=Number(j*V),R=Number(j*ee),q=P+(r.rewarder_display1?N:0)+(r.rewarder_display2?a:0)+(r.rewarder_display3?R:0),ue=r.rewarder_infos[0]?(W=k[r.rewarder_infos[0].coinAddress])==null?void 0:W.symbol:"--",ge=r.rewarder_infos[1]?($=k[r.rewarder_infos[1].coinAddress])==null?void 0:$.symbol:"--",be=r.rewarder_infos[2]?(z=k[r.rewarder_infos[2].coinAddress])==null?void 0:z.symbol:"--",me={aprFee:P==1/0||isNaN(P)?0:P,rewardAprList:[{rewarder_name:ue,rewarder_apr:N==1/0||isNaN(N)?0:N,styleName:"one",rewarder_display:r.rewarder_display1},{rewarder_name:ge,rewarder_apr:a==1/0||isNaN(a)?0:a,styleName:"two",rewarder_display:r.rewarder_display2},{rewarder_name:be,rewarder_apr:R==1/0||isNaN(R)?0:R,styleName:"three",rewarder_display:r.rewarder_display2}],aprPercentageTotal:q==1/0||isNaN(q)||q===0?0:q,aprPercentage:ne(P/q,2),is_display_rewarder:r.is_display_rewarder};g.value=me}};ae(()=>[e.aprRewardsParameter],()=>{e.nameTab=="position"&&M(e.poolInfo)});const L=m("--"),Q=(r,t)=>{r!=="0"&&t!=="∞"?L.value=_e(1/(1-Number((r/t)**.25)),2)+"x":L.value=1};ae(()=>[e.poolInfo,e.minPrice,e.maxPrice,c.value.addressHistTokens],([r,t,u,o])=>{r&&!le(r)&&o&&M(r),t&&u&&Q(t,u)},{immediate:!0});const X=(r,t)=>{de.emit("aprTab",r)};return ae(()=>w.value.currentPositionLoading,r=>{w.value.currentPositionLoading&&(g.value={},L.value="--")},{immediate:!0}),{pools:w,initialize:F,aprOne:D,aprTwo:S,aprThree:E,aprFour:H,echartsBox:B,aprPercentageObjList:g,rewardLength:J,fixD:ne,addCommom:C,aprTab:X,lever:L,isPc:_}}});const v=e=>(Oe("data-v-654bc1fe"),e=e(),Te(),e),Ce={key:0,class:"apr-lever"},Fe={class:"top"},ke={key:0,class:"left"},Re=v(()=>s("span",null,"The concentration degree of your liquidity compared with allocating liquidity to full range like a constant product AMM pool. You would enjoy multiplied capital efficiency but with higher impermanent loss possibility accordingly.",-1)),De=v(()=>s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon-information"})],-1)),Se={class:"lever-text"},Ee={class:"right"},He={class:"top"},Be={class:"apr-rewards"},Me=v(()=>s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon-information"})],-1)),We={class:"apr-tab"},$e=["onClick"],ze={class:"tottom"},qe={class:"fees-all"},Ue={key:0,class:"right-box"},Ye=["id"],Ge=v(()=>s("div",{class:"ratio-bg"},null,-1)),Je={class:"progress-fees progress-all"},Ke=v(()=>s("div",{class:"light-hint"},null,-1)),Qe={key:1,class:"apr-lever-h5"},Xe={key:0,class:"top"},Ze={class:"leverage"},Ie={class:"leverage-title"},xe=v(()=>s("span",null,"The concentration degree of your liquidity compared with allocating liquidity to full range like a constant product AMM pool. You would enjoy multiplied capital efficiency but with higher impermanent loss possibility accordingly.",-1)),Ve=v(()=>s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon-information"})],-1)),er={class:"leverage-text"},rr={class:"left"},ar=v(()=>s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon-information"})],-1)),sr={class:"apr-tab"},tr=["onClick"],ir={class:"right"},nr={key:0,class:"right-box"},or=["id"],dr=v(()=>s("div",{class:"ratio-bg"},null,-1)),lr={class:"fees-all"},cr={class:"hover-fees-all"};function pr(e,de,D,S,E,H){var B,Y,c,G,_,g,F,J,K,w,M,L,Q,X,r,t,u,o,p,Z,I,k,x,j,i,O,W,$,z,T,V,ee,P,N;const b=je;return e.isPc?(d(),l("div",Ce,[s("div",Fe,[e.minPrice!=="0"&&e.maxPrice!=="∞"?(d(),l("div",ke,[s("div",{class:h(["lever-title apr-title",e.nameTab])},[A(" Leverage "),se(b,{placement:"bottom","arrow-point-at-center":""},{title:y(()=>[Re]),default:y(()=>[De]),_:1})],2),s("div",Se,n(e.lever),1)])):U("",!0),s("div",Ee,[s("div",He,[s("div",Be,[s("div",{class:h(["apr-title",e.nameTab])},[A(n(e.aprTitle)+" ",1),se(b,{placement:"bottom","arrow-point-at-center":""},{title:y(()=>[s("span",null," Estimated according to trading activity and farming rewards in the past "+n(e.aprRewardsParameter==7?"7 days":e.aprRewardsParameter==24?"24 hours":"30 days")+". Historical data is only a reference. By no means can it guarantee future returns. ",1)]),default:y(()=>[Me]),_:1})],2),s("div",We,[(d(!0),l(te,null,ie(e.aprRewardsDateList,a=>(d(),l("div",{key:a,class:h(["apr-item",{"apr-item-active":a.num===e.aprRewardsParameter}]),onClick:R=>e.aprTab(a)},n(a.time),11,$e))),128))])])]),s("div",ze,[s("div",{class:"lever-and-apr",style:oe({justifyContent:e.minPrice!=="0"&&e.maxPrice!=="∞"?"flex-start":"center"})},[s("div",{class:h(["trade-fees",e.rewardLength>0&&e.aprPercentageObjList.is_display_rewarder?"rewarded":""])},[s("div",qe,[s("span",null,n(e.pools.currentPositionLoading?"--":e.aprPercentageObjList.is_display_rewarder?(B=e.aprPercentageObjList)!=null&&B.aprPercentageTotal?((Y=e.aprPercentageObjList)==null?void 0:Y.aprPercentageTotal)>1e4?">10,000":((c=e.aprPercentageObjList)==null?void 0:c.aprPercentageTotal)<.01&&((G=e.aprPercentageObjList)==null?void 0:G.aprPercentageTotal)>0?"<0.01":("fixD"in e?e.fixD:f(ne))((_=e.aprPercentageObjList)==null?void 0:_.aprPercentageTotal,2):(g=e.aprPercentageObjList)!=null&&g.rewardAprList?"0":"--":(F=e.aprPercentageObjList)!=null&&F.aprFee?((J=e.aprPercentageObjList)==null?void 0:J.aprFee)>1e4?">10,000":((K=e.aprPercentageObjList)==null?void 0:K.aprFee)<.01&&((w=e.aprPercentageObjList)==null?void 0:w.aprFee)>0?"<0.01":("addCommom"in e?e.addCommom:f(C))((M=e.aprPercentageObjList)==null?void 0:M.aprFee,2):(L=e.aprPercentageObjList)!=null&&L.rewardAprList?"0":"--")+"% ",1),e.aprPercentageObjList&&e.aprPercentageObjList.aprPercentageTotal>0?(d(),l("div",Ue,[s("div",{id:e.echartsBox,class:"right"},null,8,Ye),Ge])):U("",!0)]),e.aprPercentageObjList&&e.aprPercentageObjList.aprPercentageTotal>0?(d(),l("div",{key:0,class:h(["percentage-fee",e.nameTab])},[s("div",{class:"progress-all-in",style:oe({height:e.aprPercentageObjList&&e.aprPercentageObjList.aprPercentageTotal>0?"auto":"25px",lineHeight:e.$route.name=="position-detail"?"25px":""})},[s("div",Je,[Ke,A(" Fees  "+n(e.pools.currentPositionLoading?"--":(Q=e.aprPercentageObjList)!=null&&Q.aprFee?((X=e.aprPercentageObjList)==null?void 0:X.aprFee)>1e4?">10,000":((r=e.aprPercentageObjList)==null?void 0:r.aprFee)<.01?"<0.01":("addCommom"in e?e.addCommom:f(C))((t=e.aprPercentageObjList)==null?void 0:t.aprFee,2):(u=e.aprPercentageObjList)!=null&&u.rewardAprList?"<0.01":"--")+"% ",1)]),(d(!0),l(te,null,ie((o=e.aprPercentageObjList)==null?void 0:o.rewardAprList,a=>ce((d(),l("div",{key:a,class:"progress-rewards progress-all"},[s("div",{class:h(["light-hint",a==null?void 0:a.styleName])},null,2),A(" "+n(a==null?void 0:a.rewarder_name)+" Rewards  "+n(a!=null&&a.rewarder_apr?(a==null?void 0:a.rewarder_apr)>1e4?">10,000":(a==null?void 0:a.rewarder_apr)<.01?"<0.01":("addCommom"in e?e.addCommom:f(C))(a==null?void 0:a.rewarder_apr,2):"0")+"% ",1)])),[[pe,(a==null?void 0:a.rewarder_name)!="--"&&a.rewarder_display&&e.aprPercentageObjList.is_display_rewarder&&!e.pools.currentPositionLoading]])),128))],4)],2)):U("",!0)],2)],4)])])])])):(d(),l("div",Qe,[e.minPrice!=="0"&&e.maxPrice!=="∞"?(d(),l("div",Xe,[s("div",Ze,[s("div",Ie,[A(" Leverage "),se(b,{placement:"bottom","arrow-point-at-center":""},{title:y(()=>[xe]),default:y(()=>[Ve]),_:1})]),s("div",er,n(e.lever),1)])])):U("",!0),s("div",{class:"bottom",style:oe(e.minPrice!=="0"&&e.maxPrice!=="∞"?{}:{border:"none"})},[s("div",rr,[s("div",{class:h(["apr-title",e.nameTab])},[A(n(e.aprTitle)+" ",1),se(b,{placement:"bottom","arrow-point-at-center":""},{title:y(()=>[s("span",null," Estimated according to trading activity and farming bonus in the past "+n(e.aprRewardsParameter==7?"7 days":e.aprRewardsParameter==24?"24 hours":"30 days")+". Historical data is only a reference. By no means can it guarantee future returns. ",1)]),default:y(()=>[ar]),_:1})],2),s("div",sr,[(d(!0),l(te,null,ie(e.aprRewardsDateList,a=>(d(),l("div",{key:a,class:h(["apr-item",{"apr-item-active":a.num===e.aprRewardsParameter}]),onClick:R=>e.aprTab(a)},n(a.time),11,tr))),128))])]),s("div",ir,[e.aprPercentageObjList&&e.aprPercentageObjList.aprPercentageTotal>0?(d(),l("div",nr,[s("div",{id:e.echartsBox,class:"right"},null,8,or),dr])):U("",!0),s("div",{class:h(["trade-fees",e.rewardLength>0&&e.aprPercentageObjList.is_display_rewarder?"rewarded":""])},[s("div",lr,[s("span",null,n(e.pools.currentPositionLoading?"--":e.aprPercentageObjList.is_display_rewarder?(p=e.aprPercentageObjList)!=null&&p.aprPercentageTotal?((Z=e.aprPercentageObjList)==null?void 0:Z.aprPercentageTotal)>1e4?">10,000":((I=e.aprPercentageObjList)==null?void 0:I.aprPercentageTotal)<.01?"<0.01":("fixD"in e?e.fixD:f(ne))((k=e.aprPercentageObjList)==null?void 0:k.aprPercentageTotal,2):(x=e.aprPercentageObjList)!=null&&x.rewardAprList?"0":"--":(j=e.aprPercentageObjList)!=null&&j.aprFee?((i=e.aprPercentageObjList)==null?void 0:i.aprFee)>1e4?">10,000":((O=e.aprPercentageObjList)==null?void 0:O.aprFee)<.01?"<0.01":("addCommom"in e?e.addCommom:f(C))((W=e.aprPercentageObjList)==null?void 0:W.aprFee,2):($=e.aprPercentageObjList)!=null&&$.rewardAprList?"0":"--")+"% ",1),s("div",cr,[A(" Fees  :  "),s("span",null,n(e.pools.currentPositionLoading?"--":(z=e.aprPercentageObjList)!=null&&z.aprFee?((T=e.aprPercentageObjList)==null?void 0:T.aprFee)>1e4?">10,000":((V=e.aprPercentageObjList)==null?void 0:V.aprFee)<.01?"<0.01":("addCommom"in e?e.addCommom:f(C))((ee=e.aprPercentageObjList)==null?void 0:ee.aprFee,2):(P=e.aprPercentageObjList)!=null&&P.rewardAprList?"0":"--")+"% ",1),(d(!0),l(te,null,ie((N=e.aprPercentageObjList)==null?void 0:N.rewardAprList,a=>ce((d(),l("div",{key:a},n(a==null?void 0:a.rewarder_name)+" Rewards  :  "+n(a!=null&&a.rewarder_apr?(a==null?void 0:a.rewarder_apr)>1e4?">10,000":(a==null?void 0:a.rewarder_apr)<.01?"<0.01":("addCommom"in e?e.addCommom:f(C))(a==null?void 0:a.rewarder_apr,2):"<0.01")+"% ",1)),[[pe,(a==null?void 0:a.rewarder_name)!="--"&&a.rewarder_display&&e.aprPercentageObjList.is_display_rewarder&&!e.pools.currentPositionLoading]])),128))])])],2)])],4)]))}const vr=Le(Ae,[["render",pr],["__scopeId","data-v-654bc1fe"]]);export{vr as _};
