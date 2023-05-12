import{a as Os,h as k,_ as de,c as G,u as ie,e as Cs,s as ue,t as fs,f as bs,p as ys}from"./pool.428db35d.js";import{a as Ts,m as q,r as u,v as Fs,L as ce,a6 as ve,e as Is,o as t,f as d,h as o,t as n,x as O,u as p,i as Y,w as hs,s as E,S as pe,p as Bs,k as Ds,l as he,A as ws,b as Ae,j as H,F as os,q as as,Z as ge,B as _e}from"./entry.b7ec75a4.js";/* empty css              */import"./index.9260e5c8.js";import{u as ke}from"./useSuiLaunchpad.7c5f3e45.js";import{_ as me}from"./apr-tips.5efc2159.js";import{i as z}from"./import-icon.de3e6c66.js";/* empty css              */import{p as fe}from"./precision.9d58cda5.js";import{_ as As}from"./icon_on_stats.cdf13a69.js";import{_ as js}from"./icon-Rewards.f4fc18d5.js";const be=Ts({props:{isShow:{type:String,default:""}},setup(){const s=Os(),r=q(()=>s),ds=q(()=>de[r.value.chainName]),m=u(),ns=u(0),rs=u(0),x=u(0),B=u(0),M=u(0),ss=u(""),e=u("--"),C=async()=>{var _,c;const F=(await ke("Sui").getLaunchpadAllPools()||[]).filter(L=>L.pool_address==="0x8b3b1b25d0769ec4165c9d7cf6090375be6066c3b4b35cb472c7eb8f05b07a9c"),b=F&&((c=(_=F[0])==null?void 0:_.purchase_summary)==null?void 0:c.size)||0;e.value=b},T=q(()=>e.value+M.value);Fs(()=>{C(),document.body.clientWidth,setTimeout(()=>{document.body.clientWidth<750?D(40,100,6,"vol","day"):D(40,100,20,"vol","day")},100),window.addEventListener("resize",()=>{document.body.clientWidth<750?D(40,100,6,"vol","day"):D(40,100,20,"vol","day")})});const S=i=>{if(!i)return 0;const g=["","",""];let F=1e3,b=3,_="",c=1;for(;i/F>=1;)F*=10,b+=1;return b<=6?(g[0]=i+"",g[1]=""):b<=12?(_=parseInt(String(b-4))/3>=1?"M":"K",c=_==="K"?1e3:1e6,i%c===0?g[0]=parseInt(String(i/c))+"":g[0]=P(parseFloat(String(i/c)),1),g[1]=_):b<=16&&(_=(b-9)/3>1?"T":"B",c=1,_==="B"?c=1e9:_==="T"&&(c=1e12),i%c===0?g[0]=parseInt(String(i/c))+"":g[0]=P(parseFloat(String(i/c)),2),g[1]=_),i<1e3&&(g[0]=i+"",g[1]=""),g.join("")},P=(i,g)=>{i=i.toString();let F=i.indexOf(".");return F!==-1?i=i.substring(0,g+F+1):i=i.substring(0),parseFloat(i).toFixed(g)};ce(()=>{if(!G(r.value.statsData)&&r.value.chainName){const i=r.value.chainName=="Sui"?r.value.statsData.vol_in_usd_24h:r.value.statsData.vol_in_usd_24h_sum_v1,g=r.value.chainName=="Sui"?r.value.statsData.tvl_in_usd:r.value.statsData.tvl_in_usd_sum_v1;ns.value=i,ss.value=k(i,2),rs.value=r.value.statsData.vol_in_usd,x.value=g,B.value=r.value.statsData.tx_num,M.value=r.value.statsData.user_num}});const V=u("D"),A=u({}),J=i=>{V.value=i,i=="D"?m.value<750?D(40,100,6,"vol","day"):D(40,100,20,"vol","day"):i=="W"?m.value<750?D(30,100,15,"vol","wek"):D(30,100,30,"vol","wek"):i=="M"&&(m.value<750?D(20,100,20,"vol","mon"):D(20,100,40,"vol","mon"))},D=async(i,g,F,b,_)=>{const{data:c}=r.value.theme=="default"?await fetch(`${ds.value.api}/v2/histogram?date_type=${_}&typ=${b}&limit=${i}`).then(y=>y.json()):await fetch(`${ds.value.api}/v2/sui/histogram?date_type=${_}&typ=${b}&limit=${i}`).then(y=>y.json());let L=c.list;const U={categoryData:[],valueData:[],wheelBase:[]};L&&L.forEach(y=>{U.categoryData.push(y.date.slice(0,10)),U.valueData.push(y.num)}),A.value=U,X(g,F)},Q=u({day:"",month:"",year:"",current:""}),W=i=>i==1?"Jan":i==2?"Feb":i==3?"Mar":i==4?"Apr":i==5?"May":i==6?"Jun":i==7?"Jul":i==8?"Aug":i==9?"Sep":i==10?"Oct":i==11?"Nov":"Dec",X=(i,g)=>{const F=document.getElementById("echartsBox"),b=ve(F);r.value.theme=="default";let _={tooltip:{trigger:"axis",position:function(c,L,U,y,N){return[c[0]-50,"10%"]},backgroundColor:"#28353F",borderColor:"transparent",extraCssText:"height:24px;",formatter:function(c){let L=c[0].axisValue.slice(5,7),U=W(L);const y=c[0].axisValue.slice(8,10),N=U,K=c[0].axisValue.slice(0,4);return Q.value={day:y,month:N,year:K,current:""},ss.value=k(c[0].value,2),r.value.theme=="default","&nbsp;&nbsp;&nbsp;"+y+"&nbsp;"+N+"&nbsp;"+K+"&nbsp;&nbsp;&nbsp;"},textStyle:{color:"#909DB4",innerHeight:"24",lineHeight:"24"},padding:0,axisPointer:{type:"line",lineStyle:{width:4,type:"solid",color:r.value.theme=="default"?"#14B88E":"#76C8FF"}}},xAxis:{max:A.value.categoryData.length>40?40:A.value.categoryData.length-1,type:"category",axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},splitArea:{show:!1},data:A.value.categoryData,axisLabel:{formatter:(c,L)=>{let U,y=c.slice(5,7),N=W(y);return V.value=="M"?U=N:U=c.slice(8,10),`${U}`}}},yAxis:{show:!1,max:function(c){return c.max},splitArea:{show:!1}},dataZoom:[{type:"inside",start:0,end:i,zoomLock:!0}],series:[{data:A.value.valueData,type:"bar",itemStyle:{normal:{barBorderRadius:1,color:c=>r.value.theme=="default"?"#00A57B":"#488CB4"}},barWidth:g}],grid:{left:0,top:0,bottom:20,right:24}};document.body.clientWidth<750&&(_.grid={left:4,top:0,bottom:20,right:24}),r.value.theme=="default"&&(_.tooltip.backgroundColor="#293F38"),_&&b.setOption(_),_&&b.resize(),b.on("globalout",c=>{Q.value={day:"",month:"",year:"",current:""},ss.value=k(r.value.statsData.vol_in_usd_24h_sum_v1,2)})};return{total_user_num:T,idoPurchaseSummary:e,store:r,addCommom:k,vol_in_usd_24h:ns,vol_in_usd:rs,tvl_in_usd:x,tx_num:B,user_num:M,changeEchart:J,echartVal:V,volTime:Q,TradingVolume:ss,getNum:S}}}),we="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQAQMAAAC032DuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURWv/4UdwTEZzSI8AAAACdFJOUxgA9IhVYQAAANFJREFUKM/d0rsNwjAQANALLlzeCB4lRYagZQFmiKMUmQhaDBQMQYHZwBJCcmHZOPFdIpEJwNXTybqPz5DmA39EC4BEDSCJACDWrI73htildJ3olWFatC1zier6zOyTIEaxEAMSvWK+vHJ14dO2TLNLOW0hLJxyffOCCYlXFWeeosp1JqbxgmsKZe5ZFOYMhpin1MRcbUO0bZREVwccCr3y6lEYcOx4YpT5TQpvwiTi0HVMYQRTWkmMwiFH+6CYHe3NAOiFsGZeakV87w/bn/yeHxjEueFEhaKoAAAAAElFTkSuQmCC",Ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQAgMAAADzfxo+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURX/O/0dwTHvO/0vxVZMAAAADdFJOUxkAC35ThakAAAEYSURBVDjL7dS9asMwEMDxk0HF7p49FPwefgQPPuFmEh37FBrbrYuhY5Ysecrc6cO6E4FMpUsODOEH/js+xwG8M/DE/8fPtzibwgBxRoXJwD7G8HqlOQt0G4aBP8wCJ4Nz16ADwAU2jSsYOhr0dFHfns4XaS/k6D74UMi5lBTIuZQs6C4iWXDtRLLgDL81WfFYkxWhJgXytkeNPeVcTu74QjmXk+8F7XfFjx3j3efN/Cg8pM0cBWKwaTMgkR5SXLbCOUZDr3DhKJUVxihtZTpI5Kg3eEKJHM1b2dFRNH/ZiusGtix6Rz9OnTeoMdi0bImUWyAnBY70o8f29AH90GJ5mgX7L5ozaMyvxWNckhn9bl7jXJ5/Vn+FN4PU4UmMd44FAAAAAElFTkSuQmCC",ye="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQAQMAAAC032DuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURWv/4UdwTEZzSI8AAAACdFJOUxgA9IhVYQAAARVJREFUKM/FkjFOxDAQRb+JRCSE5JKOHIACTkC25BbLESi3S7gJLadYHyV0W7pBspBl4z+T2NJCv6menh37z3iQ64fL4rEicLfiAmBSLAQrGImdoMcxf0BwKYupbC7oyi/ZjcR3nhcGYkeMgj0xCdqGau3ZXknkxWLkuWp75lCLxzxD7C2TXYu1c8F7PdcX1HNt3mH4c7FtF/+bLLVksa/Jgqm1BQm5sOKwG9gs9sG/FX2SEsIB5gWC/pkh1Vq3oe9itRi/H5xamOm02leuP4k9FDKL2Imv4sVOP7jKXq3EUSvta9Y3u5zZwPbmL0EWwcdbK06GmFhm0JfnLMw6Dw43pavrPNSBiTok2xjtt+H63F901n8BIM90paz3Z+kAAAAASUVORK5CYII=",Oe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQAgMAAADzfxo+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURX/O/0dwTHrM/3gFXSYAAAADdFJOUxkAC35ThakAAAFgSURBVDjL5ZS9asMwEMcvAg/q7tCxFFJInsKP4CESqScvhZKn0NgXEDSZvASCnrKSpfuQMW33aDDm57vz3f1PB2blwKPB9/CxhIMDAHWr4AD53AS0rkAl4JjAV3o0DEu4GFgRPIHyGKZF2JcfpM8Nwm5D2TqN0O0I9huCnuBRIYRV2K5A1xAc2VJx1xjCHg0ZOmzPJwjLSA8XM9xBwm/As2V3PxWmZfKly0/GVhWFyEKVPJdp/6j9v5bHNdgDd/6EnR9BE+xQow7IfyA13XMspYhJurttLNCXkcIJcW2apUOYh4mgttQ6hpBaLmYxQ23OM3qRllE4G0I4V+7x7xdzvVfuLNHbIqVZDsvQmyyc8pbdY2nnJH2sSVpS40FaSjWWlmbV8nf3TkhEcORrlF+zmi2F1IZ0x5mfsthl5ucLa6ciK+B1fw2pfs3J0mIo+kO1QnbVYskS7Zd7KUr0aDv5Bxpkztruo1fyAAAAAElFTkSuQmCC",Te="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQAgMAAADzfxo+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURWz/4kdwTG3/0ZPyUHUAAAADdFJOUxkACglUtT8AAADCSURBVDjL7dRBCoMwEAXQrxAw7j1C7uERslDJMssew2V7APeue8rWzEyTEaF0V8S/UHgkZAKZwXgQnAEj3rE7RIrGgbBTGAidwrXavnNbYoDZfp6Xgs+2hLbAGWl7jzrjhIYOarB8cICUREUlDLUUP7uMVq4ZM3q59BhNRiPoL/wLfKZo5FfXKeTH4BROtH256vwVj7ojVIK9KzuOU3TcQH26dW7uzREtXXOF6ndOrSYDp5wMk+BSTpvbPeVxopn8HV/6v9wGz1dPfgAAAABJRU5ErkJggg==",Fe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQAgMAAADzfxo+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURYDO/0dwTHfK/2/IZbgAAAADdFJOUxkACglUtT8AAADASURBVDjL7dQxDoMwDAXQTyQkwt7egHtwBAaIMjL2GIzt3uzMPWVLHBO7QqJjRfsHkJ4SxZFiY9gIjoAjXrFviBiNPeFJoSdsFM7F8p1qiR7l8uvSUqSzLaEVOCFub2EyOlR0UIWwYo874ZmKiugNF982GS1fc8zY8aWHscxYMnZ//AZ0j5igkF+dQn6f+9t/uc6Pcas7fMEom8swTo3ozUDmRG8OqOmaM1S/pxg1GVLkZHCMQU6byzXmdqCZvI9PbTbciS7GBh0AAAAASUVORK5CYII=",Ie="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQAQMAAAC032DuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURWv/4UdwTEZzSI8AAAACdFJOUxgA9IhVYQAAAQdJREFUKM+1kk1uhDAMhU2Ryq45go+SozEV1bDslYK4SGbVLcssorj+S2ZfTRFIH5ad92wHaDzwerzCwDQNBFgdK0DsuGR0LFhDj65tcWxEjokTN0OYiU7FCixwKBYReChemKJjXq9IWTFRRboUN2rBE/jI4NFFXouyk/2JmyHXsKyqNTVzPqNbj57mV6PehURLGIcl7Hj3kXDal+NO9A7YTX6AlR1UQ5m9i4I0WW8xR7pZx29cn/sc+H8d0ylRE2Q6hmliAR4F4y3yrprixLsQ12yd7cziD0g28umIos1WQY4RrZ2RdeTrWAwzqazgQ9YZ6bsj6n04ZLOG59/wRy4H/s/9fT3+AmFQrF21qLPSAAAAAElFTkSuQmCC",Be="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4AQMAAAADqqSRAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURX/O/0dwTPKzuZgAAAACdFJOUxkA7ZNkIAAAAZdJREFUOMvV1TtuhDAQANBBFKSIQpcqkm8Sjoa3yjH2KuQmlnIBly6QyXw8nmGjbdKx2g9PgO35mIXj/IKrOk1nA6zeO0DwzgCzdwIYvSPAcPKcwRuWyhOArSMuzjhYCs5fOOV8Xn8x89rKpC48996dOJg6qjeAxRskGHVF071D8w7rRuduzWWgtzlPeIszLZwm7MbJNnRs3hb56Pm4yjXdNGYw029xHlrwalrbPtt61S0ejpOSoabY8Ks+WPP1zJpvdX7wFpzxZq0nz1Mnq7esz/qB/Wb9Qi6v1k8c7wuXpOcjf9j1UdzHp1ynT66xy3eB4OqDOY/aPxQI/iatfx6x5IfUmOsNR8bjav3wHvVa3z9UR3Vo80LbDEH7wvVXDjqebJ4yt/nR4JwA36vUkOOhflvMNDgFQ4lmU/zm2nqUE4vHO+d77OZ9w8EN7Dy7RIMsU5IsplaVYMUbezPzg6M1NFkeGAuPATKSjPrNvslu7h767v5hj7bbnfdnrs36PKtyUOez/5z/rw8Z+OjruYvv1/4/uIh/AQYeBu9GWt/aAAAAAElFTkSuQmCC";const De=s=>(Bs("data-v-ecdebf81"),s=s(),Ds(),s),je={key:0,class:"echarts-container"},Ee={class:"echarts-content-box"},$e={class:"title"},Le={class:"echarts-tab"},Ue={class:"echarts-content"},He={class:"left"},Pe=De(()=>o("div",{id:"echartsBox",class:"right"},null,-1)),Se={class:"echarts-data"},Ve={class:"item"},Re={key:0,src:we},ze={key:1,src:Ce},Me={class:"left"},Ne={class:"item"},Qe={key:0,src:ye},Ke={key:1,src:Oe},Ge={class:"left"},Je={class:"item"},We={key:0,src:Te},Ze={key:1,src:Fe},Ye={class:"left"},Xe={class:"item"},qe={key:0,src:Ie},xe={key:1,src:Be},so={class:"left"},eo={key:0},oo={key:1,class:"status-purchaseAmountLoading-box"};function ao(s,r,ds,m,ns,rs){const x=pe;return s.isShow=="big"?(t(),d("div",je,[o("div",Ee,[o("div",$e,n(s.$t("menu.stats")),1),o("div",Le,[o("div",{class:O(["title-day",s.echartVal=="D"?"title-active":""]),onClick:r[0]||(r[0]=B=>s.changeEchart("D"))},"D",2),o("div",{class:O(["title-week",s.echartVal=="W"?"title-active":""]),onClick:r[1]||(r[1]=B=>s.changeEchart("W"))},"W",2),o("div",{class:O(["title-mouth",s.echartVal=="M"?"title-active":""]),onClick:r[2]||(r[2]=B=>s.changeEchart("M"))},"M",2)]),o("div",Ue,[o("div",He,[o("span",null,n(s.$t("common.tradingVal24h")),1),o("p",null,"$"+n(Number(s.TradingVolume)==0?0:s.TradingVolume),1)]),Pe])]),o("div",Se,[o("div",Ve,[s.store.theme=="default"?(t(),d("img",Re)):(t(),d("img",ze)),o("div",Me,[o("span",null,n(s.$t("common.cumulativeVolume")),1),o("p",null,"$"+n(("addCommom"in s?s.addCommom:p(k))(s.vol_in_usd,2)),1)])]),o("div",Ne,[s.store.theme=="default"?(t(),d("img",Qe)):(t(),d("img",Ke)),o("div",Ge,[o("span",null,n(s.$t("common.totalValueLocked")),1),o("p",null,"$"+n(("addCommom"in s?s.addCommom:p(k))(s.tvl_in_usd,2)),1)])]),o("div",Je,[s.store.theme=="default"?(t(),d("img",We)):(t(),d("img",Ze)),o("div",Ye,[o("span",null,n(s.$t("common.cumulativeTransactions")),1),o("p",null,n(("addCommom"in s?s.addCommom:p(k))(s.tx_num,2)),1)])]),o("div",Xe,[s.store.theme=="default"?(t(),d("img",qe)):(t(),d("img",xe)),o("div",so,[o("span",null,n(s.$t("common.totalAccount")),1),s.store&&s.store.theme=="default"?(t(),d("p",eo,n(("addCommom"in s?s.addCommom:p(k))(s.user_num,2)),1)):(t(),d("div",oo,[Y(x,{class:"status-purchaseAmountLoading",loading:s.idoPurchaseSummary=="--",active:"",paragraph:!1},{default:hs(()=>[o("p",null,n(("addCommom"in s?s.addCommom:p(k))(s.total_user_num,2)),1)]),_:1},8,["loading"])]))])])])])):E("",!0)}const lo=Is(be,[["render",ao],["__scopeId","data-v-ecdebf81"]]),no=Ts({setup(){const s=ie(),{t:r,locale:ds}=he(),m=q(()=>s),ns=q(()=>m.value.allTokenObj||{}),rs=q(()=>m.value.tokensObj||{}),x=Os(),B=q(()=>x),M=Ae();let ss=u("big");const e=u(1),C=u(1);let T=u(!1);Fs(()=>{x.getStatsData(B.value.chainName,B.value.filterCoinsObj);const a=document.body.clientWidth;a<750?T.value=!1:T.value=!0,window.onresize=()=>{a<750?T.value=!1:T.value=!0},T.value,cs(e.value,10),vs(C.value,10)});let S=u([]);const P=q(()=>B.value.topPoolsList),V=a=>(l,v)=>{let f=l[a],h=v[a];return f-h},A=a=>(l,v)=>{let f=l[a];return v[a]-f},J=u(!1),D=u(!1),Q=u(!1),W=u(!1),X=u(!0),i=u(!1),g=u(!1),F=u(!1),b=u(!1),_=u(!1),c=u(!1),L=u(!1),U=u(!1),y=u(!1),N=u(!1),K=u(!0),is=u(!1),gs=u("TVL"),_s=u(["Volume (24H)","Volume (7D)","APR"]),us=u(!1),ks=u("TVL"),ms=u(["Price","Volume (24H)","Price Change"]),Es=a=>{const l=P;if(a=="tvl_in_usd"?(X.value?(J.value=!J.value,l.value.sort(J.value?V(a):A(a))):l.value.sort(A(a)),D.value=!1,Q.value=!1,W.value=!1,X.value=!0,i.value=!1,g.value=!1,F.value=!1):a=="vol_in_usd_24h"?(i.value?(D.value=!D.value,l.value.sort(D.value?V(a):A(a))):l.value.sort(A(a)),J.value=!1,Q.value=!1,W.value=!1,X.value=!1,i.value=!0,g.value=!1,F.value=!1):a=="vol_in_usd_7_day"?(g.value?(Q.value=!Q.value,l.value.sort(Q.value?V(a):A(a))):l.value.sort(A(a)),J.value=!1,D.value=!1,W.value=!1,X.value=!1,i.value=!1,g.value=!0,F.value=!1):a=="aprNum"&&(F.value?(W.value=!W.value,l.value.sort(W.value?V(a):A(a))):l.value.sort(A(a)),J.value=!1,D.value=!1,Q.value=!1,X.value=!1,i.value=!1,g.value=!1,F.value=!0),l.value.length<10)S.value=l.value.slice(0,10);else{const v=e.value*10;S.value=l.value.slice(v-10,v)}},$s=a=>{const l=ts;if(a=="price"?(U.value?(b.value=!b.value,l.value.sort(b.value?V(a):A(a))):l.value.sort(A(a)),_.value=!1,c.value=!1,L.value=!1,U.value=!0,y.value=!1,N.value=!1,K.value=!1):a=="vol_in_usd_24h"?(N.value?(c.value=!c.value,l.value.sort(c.value?V(a):A(a))):l.value.sort(A(a)),b.value=!1,_.value=!1,L.value=!1,U.value=!1,y.value=!1,N.value=!0,K.value=!1):a=="tvl_in_usd"?(K.value?(L.value=!L.value,l.value.sort(L.value?V(a):A(a))):l.value.sort(A(a)),b.value=!1,_.value=!1,c.value=!1,U.value=!1,y.value=!1,N.value=!1,K.value=!0):a=="priceHour"&&(y.value?(_.value=!_.value,l.value.sort(_.value?V(a):A(a))):l.value.sort(A(a)),b.value=!1,c.value=!1,L.value=!1,U.value=!1,y.value=!0,N.value=!1,K.value=!1),l.value.length<10)es.value=l.value.slice(0,10);else{const v=C.value*10;es.value=l.value.slice(v-10,v)}},Ls=a=>{a=="label"?(us.value=!us.value,is.value=!1):a=="select"?(is.value=!is.value,us.value=!1):(is.value=!1,us.value=!1)},Us=a=>{const l=[];l.push(gs.value),_s.value.forEach((v,f)=>{v!=a&&l.push(v)}),_s.value=l,gs.value=a,a=="TVL"?S.value.sort(A("tvl_in_usd")):a=="Volume (24H)"?S.value.sort(A("vol_in_usd_24h")):a=="Volume (7D)"?S.value.sort(A("vol_in_usd_7_day")):a=="APR"&&S.value.sort(A("aprNum"))},Hs=a=>{const l=[];l.push(ks.value),ms.value.forEach((v,f)=>{v!=a&&l.push(v)}),ms.value=l,ks.value=a,a=="TVL"?es.value.sort(A("tvl_in_usd")):a=="Volume (24H)"?es.value.sort(A("vol_in_usd_24h")):a=="Price"?es.value.sort(A("price")):a=="Price Change"&&es.value.sort(A("priceHour"))};ws(P,()=>{T.value,cs(e.value,10)});const cs=(a,l)=>{e.value=a;const v=l*a-l;let f=l*a;f=f>P.value.length?P.value.length:f;const h=P.value;if(h.length>0){X.value&&!J.value?h.sort(Ps):X.value&&J.value?h.sort(zs):i.value?D.value?h.sort(Ms):h.sort(Ss):g.value?Q.value?h.sort(Ns):h.sort(Vs):F.value&&(W.value?h.sort(Qs):h.sort(Rs));const I=h.filter((w,R)=>R>=v&&R<f);S.value=I}return h},Ps=(a,l)=>l.tvl_in_usd-a.tvl_in_usd,Ss=(a,l)=>l.vol_in_usd_24h-a.vol_in_usd_24h,Vs=(a,l)=>l.vol_in_usd_7_day-a.vol_in_usd_7_day,Rs=(a,l)=>l.aprNum-a.aprNum,zs=(a,l)=>a.tvl_in_usd-l.tvl_in_usd,Ms=(a,l)=>a.vol_in_usd_24h-l.vol_in_usd_24h,Ns=(a,l)=>a.vol_in_usd_7_day-l.vol_in_usd_7_day,Qs=(a,l)=>a.aprNum-l.aprNum;let es=u([]);const ts=q(()=>{const a=B.value.topTokensList,l=[];for(let v=0;v<a.length;v++){const f=a[v];l.push({...f,priceHour:f?Number(f.price_rate_24h.substring(0,f.price_rate_24h.length-1)):"0",address:f.symbol=="SUI"?"0x2::sui::SUI":f.address})}return l});ws(ts,()=>{T.value,vs(C.value,10)});const vs=(a,l)=>{C.value=a;const v=l*a-l;let f=l*a;f=f>ts.value.length?ts.value.length:f;const h=ts.value;if(h.length>0){K.value&&!L.value?h.sort(Ks):K.value&&L.value?h.sort(Zs):U.value?b.value?h.sort(Ys):h.sort(Gs):y.value?_.value?h.sort(Xs):h.sort(Js):N.value&&(c.value?h.sort(qs):h.sort(Ws));const I=h.filter((w,R)=>R>=v&&R<f);es.value=I}return h},Ks=(a,l)=>l.tvl_in_usd-a.tvl_in_usd,Gs=(a,l)=>l.price-a.price,Js=(a,l)=>l.priceHour-a.priceHour,Ws=(a,l)=>l.vol_in_usd_24h-a.vol_in_usd_24h,Zs=(a,l)=>a.tvl_in_usd-l.tvl_in_usd,Ys=(a,l)=>a.price-l.price,Xs=(a,l)=>a.priceHour-l.priceHour,qs=(a,l)=>a.vol_in_usd_24h-l.vol_in_usd_24h,xs=a=>{const l=a.swap_account;return m.value.addressLpTokens&&m.value.addressLpTokens[l]&&m.value.addressLpTokens[l].rewarder_infos},se=a=>{const l=a.swap_account;return m.value.addressLpTokens&&m.value.addressLpTokens[l]&&m.value.addressLpTokens[l].labels},ee=a=>{if(!G(a)&&!G(m.value.addressLpTokens)&&!G(m.value.tokensObj)){const l=m.value.addressLpTokens[a.swap_account];return l==null?void 0:l.is_display_rewarder}else return!1},oe=a=>{if(!G(a)&&!G(m.value.addressLpTokens)&&!G(m.value.tokensObj)){const l=a.swap_account,v=m.value.addressLpTokens[l];let f=(v==null?void 0:v.rewarder_infos)||[];const h=[];for(let w=0;w<f.length;w++){const R=f[w];m.value.tokensObj[R==null?void 0:R.coinAddress]&&h.push({...R,symbol:m.value.tokensObj[R.coinAddress].symbol,rewarderApr:a.rewarder_apr[w],logoUrl:m.value.tokensObj[R.coinAddress].logoURI,rewarder_display:v[`rewarder_display${w+1}`]})}let I=[];return I=h.filter(w=>w.rewarder_display),I}},ae=(a,l)=>a&&l?ue(fe.plus(fs(a),fs(l)),2)+"%":a,le=a=>{let l=0;return a&&a.forEach(v=>{v.rewarder_display&&(l+=fs(String(v.rewarders)))}),String(bs(String(l),2))},ne=()=>{M&&M.push("/stats-pools")},re=()=>{M&&M.push("/stats-tokens")},ps=u({});ws(()=>[m.value.poolConfigObj,m.value.tokensObj,B.value.topPoolsList,B.value.chainName,m.value.addressLpTokens],([a,l,v,f,h])=>{f=="Sui"?a&&!G(a)&&v&&v.length>0&&l&&!G(l)&&v.forEach(I=>{const w=a[I.swap_account],R=w==null?void 0:w.rewarderInfo.map((ls,Z)=>{const j=l[ls.coinAddress];return{...ls,emissionsEveryDay:ys(ls.emissionsEveryDay,j==null?void 0:j.decimals),rewarder_display:w[`rewarder_display${Z+1}`],rewarders:I.rewarder_apr[Z]&&I.rewarder_apr[Z].replace("%",""),logoUrl:j==null?void 0:j.logo_url,symbol:j==null?void 0:j.symbol,rewarderApr:I.rewarder_apr[Z]&&I.rewarder_apr[Z].replace("%","")}});w!=null&&w.is_display_rewarder&&(ps.value={...ps.value,[I.swap_account]:R})}):a&&!G(a)&&v&&v.length>0&&l&&!G(l)&&h&&!G(h)&&v.forEach(I=>{const w=h[I.swap_account];if(w){const R=w.rewarder_infos.map((ls,Z)=>{const j=l[ls.coinAddress];return{...ls,emissionsEveryDay:ys(ls.emissionsEveryDay,j==null?void 0:j.decimals),rewarder_display:w[`rewarder_display${Z+1}`],rewarders:bs(I.rewarder_apr[Z]&&I.rewarder_apr[Z].replace("%",""),2),logoUrl:j==null?void 0:j.logo_url,symbol:j==null?void 0:j.symbol,rewarderApr:bs(I.rewarder_apr[Z]&&I.rewarder_apr[Z].replace("%",""),2)}});w!=null&&w.is_display_rewarder&&(ps.value={...ps.value,[I.swap_account]:R})}})},{immediate:!0,deep:!0});const te=a=>{var l;return(a==null?void 0:a.logoURI)||(a==null?void 0:a.logo_url)||((l=m.value.tokensObj[a==null?void 0:a.address])==null?void 0:l.logo_url)||(B.value.theme==="default"?z("/image/coins/unknown.png"):z("/image/coins/sui-unknown.png"))};return{theme:q(()=>B.value.theme),getCoinIcon:te,getRewarderInfo:xs,addCommom:k,store:B,importIcon:z,topPoolsList:P,addressTokens:ns,showEcharts:ss,currentPools:e,onChangePools:cs,currentTopPoolsList:S,onChangeTokens:vs,currentTokens:C,currentTopTokensList:es,topTokensList:ts,router:M,isPc:T,getAprTotal:ae,getRewarderApr:le,toPoolsList:ne,toTokensList:re,changePoolsList:Es,changeTokensList:$s,tvlImprint:J,volHImprint:D,volDImprint:Q,aprImprint:W,tokensPriceImprint:b,tokensPriceHImprint:_,tokensVolHImprint:c,tokensTvlImprint:L,labelToken:us,select:is,selectValue:gs,selectList:_s,reviseValue:Ls,changeSort:Us,tokenValue:ks,tokensList:ms,changeSortLabel:Hs,tvlImprintHighlight:X,volHImprintHighlight:i,volDImprintHighlight:g,aprImprintHighlight:F,tokensPriceImprintHighlight:U,tokensPriceHImprintHighlight:y,tokensVolHImprintHighlight:N,tokensTvlImprintHighlight:K,getLabel:se,rewardApr:oe,tokensObj:rs,rewardDisplay:ee,rewardObj:ps,t:r,decimalUi:Cs}}});const $=s=>(Bs("data-v-13942fd3"),s=s(),Ds(),s),ro={class:"stats-container"},to=$(()=>o("div",{class:"select-mask"},null,-1)),io={class:"title"},uo={class:"top-pools-new"},co={class:"title"},vo={class:"sort-by"},po=$(()=>o("img",{src:As,alt:""},null,-1)),ho=$(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),Ao=[ho],go={key:0,class:"select-item"},_o=["onClick"],ko=$(()=>o("img",{src:As,alt:""},null,-1)),mo={class:"content"},fo={class:"item"},bo=$(()=>o("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),wo=[bo],Co=$(()=>o("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),yo=[Co],Oo=$(()=>o("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),To=[Oo],Fo=$(()=>o("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Io=[Fo],Bo={class:"apr-hover-content"},Do=$(()=>o("span",null," ",-1)),jo={class:"token"},Eo=["src","onerror"],$o={key:1,class:"pool-warning"},Lo=["src","onerror"],Uo={key:1,class:"pool-warning"},Ho={class:"name"},Po={class:"token-name"},So={class:"fee-tier-top"},Vo={class:"label-all"},Ro={key:0},zo={class:"tvl"},Mo={class:"volume-hour"},No={class:"volume-day"},Qo=$(()=>o("img",{src:js,alt:""},null,-1)),Ko={key:0,class:"apr-hover-content"},Go={class:"btn-box"},Jo={class:"top"},Wo={class:"token"},Zo=["src","onerror"],Yo={key:1,class:"pool-warning"},Xo=["src","onerror"],qo={key:1,class:"pool-warning"},xo={class:"name"},sa={class:"token-name"},ea={class:"label-all"},oa={key:0},aa={class:"fee-tier-hint"},la={class:"middle"},na={class:"item-pools"},ra={class:"item-pools"},ta={class:"item-pools"},da=$(()=>o("img",{src:js,alt:""},null,-1)),ia={key:0,class:"apr-hover-content"},ua={class:"bottom"},ca={class:"panation"},va={class:"top-tokens"},pa={class:"title"},ha={class:"sort-by"},Aa=$(()=>o("img",{src:As,alt:""},null,-1)),ga=$(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),_a=[ga],ka={key:0,class:"select-item"},ma=["onClick"],fa=$(()=>o("img",{src:As,alt:""},null,-1)),ba={class:"content"},wa={class:"item"},Ca=$(()=>o("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),ya=[Ca],Oa=$(()=>o("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Ta=[Oa],Fa=$(()=>o("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Ia=[Fa],Ba=$(()=>o("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Da=[Ba],ja=$(()=>o("span",null," ",-1)),Ea={class:"token"},$a={class:"left"},La=["src","onerror"],Ua={key:0,class:"pool-warning"},Ha={class:"right"},Pa={class:"name"},Sa={key:0,class:"label-all"},Va={class:"price"},Ra={class:"price"},za={class:"volume"},Ma={class:"tvl"},Na={class:"btn-box"},Qa={class:"top"},Ka={class:"token"},Ga=["src","onerror"],Ja={key:0,class:"pool-warning"},Wa={class:"right"},Za={class:"name"},Ya={key:0,class:"label-all"},Xa={class:"middle"},qa={class:"item-pools"},xa={class:"price"},sl={class:"item-pools"},el={class:"item-pools"},ol={class:"item-pools"},al={class:"bottom"},ll={class:"panation"};function nl(s,r,ds,m,ns,rs){const x=lo,B=me,M=_e,ss=ge;return t(),d("div",ro,[to,o("div",io,n(s.$t("menu.stats")),1),Y(x,{class:"title-overview","is-show":s.showEcharts},null,8,["is-show"]),o("div",uo,[o("div",co,[o("div",null,n(s.$t("common.topPools")),1),o("div",{class:"view-all",onClick:r[0]||(r[0]=(...e)=>s.toPoolsList&&s.toPoolsList(...e))},n(s.$t("newAdd.viewAll"))+"   > ",1)]),o("div",vo,[o("div",null,n(s.$t("newAdd.sortBy")),1),o("div",{class:"search-select",onClick:r[1]||(r[1]=e=>s.reviseValue("select"))},[o("div",null,[H(n(s.selectValue)+" ",1),po]),(t(),d("svg",{"aria-hidden":"true",class:O(s.select?"show-icon icon":"icon")},Ao,2)),s.select?(t(),d("div",go,[(t(!0),d(os,null,as(s.selectList,(e,C)=>(t(),d("div",{key:C,class:"select-menu-item",onClick:T=>s.changeSort(e)},[H(n(e)+" ",1),ko],8,_o))),128))])):E("",!0)])]),o("div",mo,[o("div",fo,[o("span",null,n(s.$t("menu.pools")),1),o("span",{onClick:r[2]||(r[2]=e=>s.changePoolsList("tvl_in_usd"))},[H(n(s.$t("common.tvl"))+" ",1),(t(),d("svg",{"aria-hidden":"true",class:O(["pools-icon",s.tvlImprint?s.tvlImprintHighlight?"selected highlight":"selected":s.tvlImprintHighlight?"highlight":""])},wo,2))]),o("span",{onClick:r[3]||(r[3]=e=>s.changePoolsList("vol_in_usd_24h"))},[H(n(s.$t("common.volume24h"))+" ",1),(t(),d("svg",{"aria-hidden":"true",class:O(["pools-icon",s.volHImprint?s.volHImprintHighlight?"selected highlight":"selected":s.volHImprintHighlight?"highlight":""])},yo,2))]),o("span",{onClick:r[4]||(r[4]=e=>s.changePoolsList("vol_in_usd_7_day"))},[H(n(s.$t("newAdd.volume7D"))+" ",1),(t(),d("svg",{"aria-hidden":"true",class:O(["pools-icon",s.volDImprint?s.volDImprintHighlight?"selected highlight":"selected":s.volDImprintHighlight?"highlight":""])},To,2))]),o("span",{onClick:r[5]||(r[5]=e=>s.changePoolsList("aprNum"))},[H(n(s.$t("common.apr"))+" ",1),(t(),d("svg",{"aria-hidden":"true",class:O(["pools-icon",s.aprImprint?s.aprImprintHighlight?"selected highlight":"selected":s.aprImprintHighlight?"highlight":""])},Io,2)),o("div",Bo,[Y(B,{class:"noHover apr-hover-con"})])]),Do]),(t(!0),d(os,null,as(s.currentTopPoolsList,(e,C)=>{var T,S;return t(),d("div",{key:C,class:"item pc-item"},[o("div",jo,[o("div",null,[e!=null&&e.token_a_address?(t(),d("img",{key:0,src:s.getCoinIcon(e.is_forward!==!1?s.addressTokens&&s.addressTokens[e.token_a_address]:s.addressTokens&&s.addressTokens[e.token_b_address]),onerror:s.theme=="default"?("importIcon"in s?s.importIcon:p(z))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:p(z))("/image/coins/sui-unknown.png")},null,8,Eo)):E("",!0),s.tokensObj&&s.tokensObj[e.token_a_address]&&s.tokensObj[e.token_a_address].isSelfBuilt?(t(),d("div",$o)):E("",!0)]),o("div",null,[e!=null&&e.token_b_address?(t(),d("img",{key:0,src:s.getCoinIcon(e.is_forward!==!1?s.addressTokens&&s.addressTokens[e.token_b_address]:s.addressTokens&&s.addressTokens[e.token_a_address]),onerror:s.theme=="default"?("importIcon"in s?s.importIcon:p(z))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:p(z))("/image/coins/sui-unknown.png")},null,8,Lo)):E("",!0),s.tokensObj&&s.tokensObj[e.token_b_address]&&s.tokensObj[e.token_b_address].isSelfBuilt?(t(),d("div",Uo)):E("",!0)]),o("div",Ho,[o("p",Po,n(e.is_forward!==!1?e.token_a_reserves:e.token_b_reserves)+" - "+n(e.is_forward!==!1?e.token_b_reserves:e.token_a_reserves),1),o("div",So,n((e==null?void 0:e.fee)*100)+"%",1),o("div",Vo,[(t(!0),d(os,null,as(s.getLabel(e),(P,V)=>(t(),d("div",{key:V,class:O(["label",P])},[P!=="Native"?(t(),d("span",Ro,n(P),1)):E("",!0)],2))),128))])])]),o("div",zo," $"+n(e.tvl_in_usd?("addCommom"in s?s.addCommom:p(k))(e.tvl_in_usd,2):"--"),1),o("div",Mo," $"+n(e!=null&&e.vol_in_usd_24h?("addCommom"in s?s.addCommom:p(k))(e==null?void 0:e.vol_in_usd_24h,2):"--"),1),o("div",No," $"+n(e!=null&&e.vol_in_usd_7_day?("addCommom"in s?s.addCommom:p(k))(e==null?void 0:e.vol_in_usd_7_day,2):"--"),1),o("div",{class:O(["apr",s.rewardObj&&((T=s.rewardObj[e.swap_account])==null?void 0:T.length)>0?"apr-mark":""])},[Qo,H(" "+n(s.getAprTotal(e.apr_7day,s.getRewarderApr(s.rewardObj[e.swap_account])))+" ",1),s.rewardObj&&((S=s.rewardObj[e.swap_account])==null?void 0:S.length)>0&&s.rewardObj&&s.rewardObj[e.swap_account]?(t(),d("div",Ko,[Y(B,{class:"noHover apr-hover-con","l-item":{apr:e.apr_7day&&e.apr_7day.replace("%",""),aprTotal:s.getAprTotal(e.apr_7day,s.getRewarderApr(s.rewardObj[e.swap_account])),is_display_rewarder:s.rewardObj&&s.rewardObj[e.swap_account],rewarder_apr:s.getRewarderApr(s.rewardObj[e.swap_account])},"rewarder-info":s.rewardObj&&s.rewardObj[e.swap_account]},null,8,["l-item","rewarder-info"])])):E("",!0)],2),o("div",Go,[Y(M,{class:"cancel-btn",onClick:()=>s.router.push(`/deposit?tokena=${e==null?void 0:e.token_a_address}&tokenb=${e==null?void 0:e.token_b_address}&fee=${e==null?void 0:e.fee}`)},{default:hs(()=>[H(n(s.$t("common.deposit")),1)]),_:2},1032,["onClick"])])])}),128)),(t(!0),d(os,null,as(s.currentTopPoolsList,(e,C)=>{var T,S;return t(),d("div",{key:C,class:"item h5-item"},[o("div",Jo,[o("div",Wo,[o("div",null,[e!=null&&e.token_a_address?(t(),d("img",{key:0,src:s.getCoinIcon(e.is_forward!==!1?s.addressTokens&&s.addressTokens[e.token_a_address]:s.addressTokens&&s.addressTokens[e.token_b_address]),onerror:s.theme=="default"?("importIcon"in s?s.importIcon:p(z))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:p(z))("/image/coins/sui-unknown.png")},null,8,Zo)):E("",!0),s.tokensObj&&s.tokensObj[e.token_a_address]&&s.tokensObj[e.token_a_address].isSelfBuilt?(t(),d("div",Yo)):E("",!0)]),o("div",null,[e!=null&&e.token_b_address?(t(),d("img",{key:0,src:s.getCoinIcon(e.is_forward!==!1?s.addressTokens&&s.addressTokens[e.token_b_address]:s.addressTokens&&s.addressTokens[e.token_a_address]),onerror:s.theme=="default"?("importIcon"in s?s.importIcon:p(z))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:p(z))("/image/coins/sui-unknown.png")},null,8,Xo)):E("",!0),s.tokensObj&&s.tokensObj[e.token_b_address]&&s.tokensObj[e.token_b_address].isSelfBuilt?(t(),d("div",qo)):E("",!0)]),o("div",xo,[o("p",sa,n(e.token_a_reserves)+" - "+n(e.token_b_reserves),1),o("div",ea,[(t(!0),d(os,null,as(s.getLabel(e),(P,V)=>(t(),d("div",{key:V,class:O(["label",P])},[P!=="Native"?(t(),d("span",oa,n(P),1)):E("",!0)],2))),128))])])]),o("div",aa,n((e==null?void 0:e.fee)*100)+"%",1)]),o("div",la,[o("div",na,[o("span",null,n(s.$t("common.tvl")),1),o("p",null," $"+n(e.tvl_in_usd?("addCommom"in s?s.addCommom:p(k))(e.tvl_in_usd,2):"--"),1)]),o("div",ra,[o("span",null,n(s.$t("common.volume24h")),1),o("p",null," $"+n(e!=null&&e.vol_in_usd_24h?("addCommom"in s?s.addCommom:p(k))(e==null?void 0:e.vol_in_usd_24h,2):"--"),1)]),o("div",ta,[o("span",null,n(s.$t("newAdd.volume7D")),1),o("p",null," $"+n(e!=null&&e.vol_in_usd_7_day?("addCommom"in s?s.addCommom:p(k))(e==null?void 0:e.vol_in_usd_7_day,2):"--"),1)]),o("div",{class:O(["item-pools",s.rewardObj&&((T=s.rewardObj[e.swap_account])==null?void 0:T.length)>0?"":"apr-mark-h5"])},[o("span",null,n(s.$t("common.apr")),1),o("p",null,[da,H(" "+n(s.getAprTotal(e.apr_7day,s.getRewarderApr(s.rewardObj[e.swap_account]))),1)]),s.rewardObj&&((S=s.rewardObj[e.swap_account])==null?void 0:S.length)>0?(t(),d("div",ia,[Y(B,{class:"noHover apr-hover-con","l-item":{apr:e.apr_7day&&e.apr_7day.replace("%",""),aprTotal:s.getAprTotal(e.apr_7day,s.getRewarderApr(s.rewardObj[e.swap_account])),is_display_rewarder:s.rewardDisplay(e),rewarder_apr:s.getRewarderApr(s.rewardObj[e.swap_account])},"rewarder-info":s.rewardObj&&s.rewardObj[e.swap_account]},null,8,["l-item","rewarder-info"])])):E("",!0)],2)]),o("div",ua,[Y(M,{class:"cancel-btn",onClick:()=>s.router.push(`/deposit?tokena=${e==null?void 0:e.token_a_address}&tokenb=${e==null?void 0:e.token_b_address}&fee=${e==null?void 0:e.fee}`)},{default:hs(()=>[H(n(s.$t("common.deposit")),1)]),_:2},1032,["onClick"])])])}),128))]),o("div",ca,[Y(ss,{current:s.currentPools,"onUpdate:current":r[6]||(r[6]=e=>s.currentPools=e),"page-size":(s.isPc,10),simple:"",total:s.topPoolsList.length>20?20:s.topPoolsList.length,onChange:s.onChangePools},null,8,["current","page-size","total","onChange"])])]),o("div",va,[o("div",pa,[o("div",null,n(s.$t("common.topTokens")),1),o("div",{class:"view-all",onClick:r[7]||(r[7]=(...e)=>s.toTokensList&&s.toTokensList(...e))},n(s.$t("newAdd.viewAll"))+"   > ",1)]),o("div",ha,[o("div",null,n(s.$t("newAdd.sortBy")),1),o("div",{class:"search-select",onClick:r[8]||(r[8]=e=>s.reviseValue("label"))},[o("div",null,[H(n(s.tokenValue)+" ",1),Aa]),(t(),d("svg",{"aria-hidden":"true",class:O(s.labelToken?"show-icon icon":"icon")},_a,2)),s.labelToken?(t(),d("div",ka,[(t(!0),d(os,null,as(s.tokensList,(e,C)=>(t(),d("div",{key:C,class:"select-menu-item",onClick:T=>s.changeSortLabel(e)},[H(n(e)+" ",1),fa],8,ma))),128))])):E("",!0)])]),o("div",ba,[o("div",wa,[o("span",null,n(s.$t("common.tokens")),1),o("span",{onClick:r[9]||(r[9]=e=>s.changeTokensList("price"))},[H(n(s.$t("common.price"))+" ",1),(t(),d("svg",{"aria-hidden":"true",class:O(["pools-icon",s.tokensPriceImprint?s.tokensPriceImprintHighlight?"selected highlight":"selected":s.tokensPriceImprintHighlight?"highlight":""])},ya,2))]),o("span",{onClick:r[10]||(r[10]=e=>s.changeTokensList("priceHour"))},[H(n(s.$t("newAdd.priceChange"))+" ",1),(t(),d("svg",{"aria-hidden":"true",class:O(["pools-icon",s.tokensPriceHImprint?s.tokensPriceHImprintHighlight?"selected highlight":"selected":s.tokensPriceHImprintHighlight?"highlight":""])},Ta,2))]),o("span",{onClick:r[11]||(r[11]=e=>s.changeTokensList("vol_in_usd_24h"))},[H(n(s.$t("common.volume24h"))+" ",1),(t(),d("svg",{"aria-hidden":"true",class:O(["pools-icon",s.tokensVolHImprint?s.tokensVolHImprintHighlight?"selected highlight":"selected":s.tokensVolHImprintHighlight?"highlight":""])},Ia,2))]),o("span",{onClick:r[12]||(r[12]=e=>s.changeTokensList("tvl_in_usd"))},[H(n(s.$t("common.tvl"))+" ",1),(t(),d("svg",{"aria-hidden":"true",class:O(["pools-icon",s.tokensTvlImprint?s.tokensTvlImprintHighlight?"selected highlight":"selected":s.tokensTvlImprintHighlight?"highlight":""])},Da,2))]),ja]),(t(!0),d(os,null,as(s.currentTopTokensList,(e,C)=>(t(),d("div",{key:C,class:"item pc-item"},[o("div",Ea,[o("div",$a,[o("div",null,[o("img",{src:s.getCoinIcon(s.addressTokens&&s.addressTokens[e.address]),onerror:s.theme=="default"?("importIcon"in s?s.importIcon:p(z))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:p(z))("/image/coins/sui-unknown.png"),alt:""},null,8,La),s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].isSelfBuilt?(t(),d("div",Ua)):E("",!0)])]),o("div",Ha,[o("div",Pa,[o("p",null,n(e.symbol),1),o("span",null,n(e.name)+" ",1)]),s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].labels&&s.tokensObj[e.address].labels[0]?(t(),d("div",Sa,[o("div",{class:O(["label",s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].labels&&s.tokensObj[e.address].labels[0]])},[o("span",null,n(s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].labels&&s.tokensObj[e.address].labels[0]?`${s.tokensObj[e.address].labels[0]}`:""),1)],2)])):E("",!0)])]),o("div",Va,[o("p",null,n(e.price?"$"+("addCommom"in s?s.addCommom:p(k))(("decimalUi"in s?s.decimalUi:p(Cs))(e.price,2)):"--"),1)]),o("div",Ra,[o("p",{class:O(e.price_rate_24h.includes("-")?"redecue-change-price":"add-change-price")},n(e.price_rate_24h!=="0%"&&!e.price_rate_24h.includes("-")?`+${e.price_rate_24h}`:e.price_rate_24h),3)]),o("div",za," $"+n(("addCommom"in s?s.addCommom:p(k))(e.vol_in_usd_24h,2)=="0.00"?0:("addCommom"in s?s.addCommom:p(k))(e.vol_in_usd_24h,2)?("addCommom"in s?s.addCommom:p(k))(e.vol_in_usd_24h,2):"--"),1),o("div",Ma," $"+n(("addCommom"in s?s.addCommom:p(k))(e.tvl_in_usd,2)=="0.00"?0:("addCommom"in s?s.addCommom:p(k))(e.tvl_in_usd,2)?("addCommom"in s?s.addCommom:p(k))(e.tvl_in_usd,2):"--"),1),o("div",Na,[Y(M,{class:"cancel-btn",onClick:T=>s.router.push(`/swap?to=${e.address}`)},{default:hs(()=>[H(n(s.$t("button.swap")),1)]),_:2},1032,["onClick"])])]))),128)),(t(!0),d(os,null,as(s.currentTopTokensList,(e,C)=>(t(),d("div",{key:C,class:"item h5-item"},[o("div",Qa,[o("div",Ka,[o("div",null,[o("img",{src:s.getCoinIcon(s.addressTokens&&s.addressTokens[e.address]),onerror:s.theme=="default"?("importIcon"in s?s.importIcon:p(z))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:p(z))("/image/coins/sui-unknown.png"),alt:""},null,8,Ga),s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].isSelfBuilt?(t(),d("div",Ja)):E("",!0)]),o("div",Wa,[o("div",Za,[o("p",null,n(s.addressTokens&&s.addressTokens[e.address]&&s.addressTokens[e.address].symbol),1),o("span",null,n(s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].name)+" ",1)]),s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].labels&&s.tokensObj[e.address].labels[0]?(t(),d("div",Ya,[o("div",{class:O(["label",s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].labels&&s.tokensObj[e.address].labels[0]])},[o("span",null,n(s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].labels&&s.tokensObj[e.address].labels[0]?`${s.tokensObj[e.address].labels[0]}`:""),1)],2)])):E("",!0)])])]),o("div",Xa,[o("div",qa,[o("span",null,n(s.$t("common.price")),1),o("div",xa,[o("p",null,"$"+n(("addCommom"in s?s.addCommom:p(k))(("decimalUi"in s?s.decimalUi:p(Cs))(e.price,2))),1)])]),o("div",sl,[o("span",null,n(s.$t("newAdd.priceChange")),1),o("p",{class:O(e.price_rate_24h.includes("-")?"redecue-change-price":"add-change-price")},n(e.price_rate_24h),3)]),o("div",el,[o("span",null,n(s.$t("common.volume24h")),1),o("p",null," $"+n(("addCommom"in s?s.addCommom:p(k))(e.vol_in_usd_24h,2)=="0.00"?0:("addCommom"in s?s.addCommom:p(k))(e.vol_in_usd_24h,2)),1)]),o("div",ol,[o("span",null,n(s.$t("common.tvl")),1),o("p",null," $"+n(("addCommom"in s?s.addCommom:p(k))(e.tvl_in_usd,2)=="0.00"?0:("addCommom"in s?s.addCommom:p(k))(e.tvl_in_usd,2)),1)])]),o("div",al,[Y(M,{class:"cancel-btn",onClick:T=>s.router.push(`/swap?to=${e.address}`)},{default:hs(()=>[H(n(s.$t("button.swap")),1)]),_:2},1032,["onClick"])])]))),128))]),o("div",ll,[Y(ss,{current:s.currentTokens,"onUpdate:current":r[13]||(r[13]=e=>s.currentTokens=e),"page-size":(s.isPc,10),simple:"",total:s.topTokensList.length>20?20:s.topTokensList.length,onChange:s.onChangeTokens},null,8,["current","page-size","total","onChange"])])])])}const kl=Is(no,[["render",nl],["__scopeId","data-v-13942fd3"]]);export{kl as default};
