import{a as Re}from"./pools-list-item.d62a4ae8.js";import{u as Ee,c as L}from"./sha256.1260a8a5.js";import{i as z}from"./import-icon.de3e6c66.js";import{u as Be,e as F,t as x,d as ze}from"./pool.dabf3b56.js";import{a as Fe,l as qe,b as Ue,r as h,m as w,y as Ze,D as J,e as He,K as ve,o as n,f as r,h as s,v as u,u as g,x as v,L as B,z as D,t as ee,a8 as me,G as Ge,F as M,s as R,j as E,i as _,w as O,V as Je,S as We,J as Qe,c as Xe,p as Ye,k as xe,W as es}from"./entry.cb7a74c4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{p as ss}from"./precision.9d58cda5.js";import{_ as W}from"./icon_on_2x.5e96733d.js";import{_ as os,a as ls}from"./img-no-Positions_2x.01ba6cba.js";import"./apr-tips.b7a44f88.js";import"./nuxt-link.2fce51fc.js";const ts=Fe({setup(){const{t:e,locale:o}=qe(),V=Ue(),q=h(!1),U=h(!1),P=h(!1),C=h("VOL"),T=h(["APR","TVL"]),N=h(!1),S=h(e("tab.all")),j=h([e("tab.layerZero"),e("tab.wormhole"),e("tab.celer")]),$=h([]),A=h(""),t=h(["pools"]),b=Be(),f=Ee(),Z=h(!0),Q=h(""),c=w(()=>f),he=w(()=>f.theme),y=w(()=>b),fe=w(()=>f.statsData),ke=(l,a)=>a.liqidity-l.liqidity,ge=(l,a)=>a.vol-l.vol,be=(l,a)=>a.aprNum-l.aprNum,K=h(!1),ye=()=>{localStorage.setItem(`pools-${Y.value}-selectall`,K.value?"":"true"),K.value=!K.value},X=w(()=>{if(y.value.tokens&&y.value.tokens.length>0){const l={};return y.value.tokens.forEach(a=>{l[a.address]={...a}}),l}return null});Ze(()=>{var p,k,G;const l=(G=(k=(p=V==null?void 0:V.currentRoute)==null?void 0:p.value)==null?void 0:k.query)==null?void 0:G.language;l&&we(l),Q.value=o.value,document.addEventListener("click",()=>{H("")});const a=localStorage.getItem(`pools-${Y.value}-selectall`);K.value=a==="true"}),J(()=>c.value.chainName,(l,a)=>{l&&f.getStatsData(l,c.value.filterCoinsObj)},{immediate:!0});const{setLang:$e}=f,we=l=>{$e(l),o.value=l},Ce=(l,a)=>l&&a?ss.plus(x(l),x(a)):l||0,se=l=>{let a=0;return l&&l.forEach(p=>{a+=x(String(p))}),String(ze(String(a),2))},Se=(l=[])=>{const a=l&&l.length>0?l:Object.values(y.value.poolsObj),p=[];a.forEach(d=>{var ne,ie,re,ue,de,ce,pe;const i=c.value.addressLpTokens[d.address],I=y.value.poolsObj[d.address];let oe,le,te,ae;i&&(oe=i.rewarder_apr[0]?Number(i.rewarder_apr[0].substring(0,i.rewarder_apr[0].length-1)):0,le=i.rewarder_apr[1]?Number(i.rewarder_apr[1].substring(0,i.rewarder_apr[1].length-1)):0,te=i.rewarder_apr[2]?Number(i.rewarder_apr[2].substring(0,i.rewarder_apr[2].length-1)):0,ae=oe+le+te);const je=d.needReverse?((ie=y.value.tokensObj[d.coinB.address])==null?void 0:ie.labels)||[]:((ne=y.value.tokensObj[d.coinA.address])==null?void 0:ne.labels)||[],Ke=d.needReverse?((re=y.value.tokensObj[d.coinA.address])==null?void 0:re.labels)||[]:((ue=y.value.tokensObj[d.coinB.address])==null?void 0:ue.labels)||[],Me=[...new Set(je.concat(Ke))];p.push({...d,liqidity:i?i.tvl_in_usd:"0.00000000001",vol:i?i.vol_in_usd_24h:"0",apr:i&&i.apr_7day?(de=i.apr_7day)==null?void 0:de.replace("%",""):"--",fee:d.fee?d.fee:I!=null&&I.fee?I.fee:"--",aprNum:i&&i.apr_7day?String(Number(i.apr_7day.substring(0,i.apr_7day.length-1))+ae):"0",rewarder_apr:se(i&&i.rewarder_apr),aprTotal:Ce(i&&i.apr_7day,i&&se(i.rewarder_apr)),rewarders0:i&&i.rewarder_apr[0],rewarders1:i&&i.rewarder_apr[1],rewarders2:i&&i.rewarder_apr[2],labels:Me,isFarming:d==null?void 0:d.isFarming,fee_24_h:i&&i.fee_24_h,isAuthorized:!!(X.value[(ce=d==null?void 0:d.token_a)==null?void 0:ce.address]&&X.value[(pe=d==null?void 0:d.token_b)==null?void 0:pe.address]),rewarderInfo:c.value.chainName=="Aptos"?I==null?void 0:I.rewarder_infos:[]})});let k=[];if(C.value=="APR"?k=p.sort(be):C.value=="VOL"?k=p.sort(ge):k=p.sort(ke),S.value!=e("tab.all")){const d=[];k.forEach(i=>{i.labels.indexOf(S.value)!==-1&&d.push(i)}),$.value=d}else $.value=k;if(A.value){var G=new RegExp("[\\u4E00-\\u9FFF]+","g");if(G.test(A.value)){A.value="";return}const d=$.value.filter(i=>i.symbol.toLowerCase().includes(A.value.toLowerCase()));$.value=d}Z.value=!1};J(()=>[X.value,y.value.poolConfigList,c.value.chainName,c.value.addressLpTokens,A.value,C.value,S.value],([l,a,p,k])=>{l&&a&&(a==null?void 0:a.length)>0&&a[0]&&p&&(p!=null&&p.toLowerCase().includes(a[0].chain))&&Se(a)},{immediate:!0,deep:!0});const Ae=l=>{if(!Z.value&&(q.value=!0,l)){const a=$.value.filter(p=>p.symbol.toLowerCase().includes(l.toLowerCase()));$.value=a,q.value=!1}},_e=()=>{Z.value=!0,U.value=!0,f.getStatsData(c.value.chainName,c.value.filterCoinsObj),b.setPoolConfigList(c.value.chainName,c.value.filterCoinsObj),setTimeout(()=>{U.value=!1},1e3)},Le=l=>{const a=[];a.push(C.value),T.value.forEach((p,k)=>{p!=l&&a.push(p)}),T.value=a,C.value=l},Ve=l=>{const a=[];j.value.forEach((p,k)=>{p==l?a[k]=S.value:a[k]=p}),j.value=a,S.value=l};J(()=>f.lang,l=>{Q.value=l});const H=l=>{l=="label"?(f.setIsSelect("pools"),N.value=!N.value,P.value=!1,c.value.setIsShowMore(!1)):l=="select"?(f.setIsSelect("pools"),P.value=!P.value,N.value=!1,c.value.setIsShowMore(!1)):(P.value=!1,N.value=!1)},Ne=()=>{V&&V.push("/position")},Ie=w(()=>L[c.value.chainName]);J(()=>c.value.isSelect,l=>{l!=="pools"&&H("")},{immediate:!0});const De=w(()=>y.value.poolConfigList.filter(a=>a.address==L[c.value.chainName].newPositionAddress)[0]),Oe=()=>{c.value.setIsShowMore(!c.value.isShowMore),c.value.setOpenMore(!1),c.value.setOpenSwitchLang(!1),c.value.setOpenH5Icon(!1),c.value.setOpenSwitchChain(!1),H("")},Pe=w(()=>L[c.value.chainName].hasCreatePool),Y=w(()=>c.value.chainName),Te=w(()=>{const l=$.value.filter(a=>a.isAuthorized);return K.value?4-$.value.length%4:4-l.length%4});return{clickDisplayAll:ye,isSelectAll:K,chainName:Y,hasCreatePool:Pe,store:c,showMore:Oe,lpInfo:De,config:Ie,toPositionList:Ne,t:e,router:V,loading:q,clickRefresh:_e,refresh:U,updateLpList:Ae,searchKey:A,current:t,addCommom:F,list:$,theme:he,statsData:fe,pools:y,select:P,selectValue:C,selectList:T,label:N,labelValue:S,labelList:j,changeSort:Le,changeSortLabel:Ve,reviseValue:H,listLoading:Z,languageValue:Q,importIcon:z,patchNumber:Te}}});const m=e=>(Ye("data-v-eb0db9bd"),e=e(),xe(),e),as={class:"pools-list-container"},ns={class:"right-link"},is=["href"],rs=m(()=>s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon-jump"})],-1)),us=m(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),ds=[us],cs={key:0,class:"more-list"},ps=["href"],vs={key:2,class:"sui-createPool position"},ms=m(()=>s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon-add1"})],-1)),hs={class:"search-refresh"},fs={class:"my-position position-h5"},ks=["placeholder"],gs=m(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),bs=[gs],ys={key:0,class:"select-item"},$s=["onClick"],ws={key:0,class:"search-select display-all-box"},Cs=["src"],Ss=["src"],As=m(()=>s("span",null,"Display all pools",-1)),_s=m(()=>s("img",{src:W,alt:""},null,-1)),Ls=m(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),Vs=[Ls],Ns={key:0,class:"select-item"},Is=["onClick"],Ds=m(()=>s("img",{src:W,alt:""},null,-1)),Os=m(()=>s("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),Ps=[Os],Ts={class:"search-tab"},js={class:"my-position position-pc"},Ks=m(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),Ms=[Ks],Rs={key:0,class:"select-item"},Es=["onClick"],Bs={key:1,class:"search-select display-all-box"},zs=["src"],Fs=["src"],qs=m(()=>s("span",null,"Display all pools",-1)),Us=m(()=>s("img",{src:W,alt:""},null,-1)),Zs=m(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),Hs=[Zs],Gs={key:0,class:"select-item"},Js=["onClick"],Ws=m(()=>s("img",{src:W,alt:""},null,-1)),Qs=["placeholder"],Xs=m(()=>s("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),Ys=[Xs],xs={class:"item item-left"},eo={class:"value"},so={class:"label"},oo={class:"item item-right"},lo={class:"value"},to={class:"label"},ao={key:0,class:"loading-spin"},no={key:2,class:"no-data"},io={key:0,src:os},ro={key:1,src:ls};function uo(e,o,V,q,U,P){const C=ve("mail-outlined"),T=es,N=ve("appstore-outlined"),S=Je,j=We,$=Qe,A=Re;return n(),r("div",as,[s("div",{class:"pools-title",onClick:o[4]||(o[4]=t=>e.reviseValue(""))},[s("div",null,u(e.$t("common.concentratedPools")),1),s("div",ns,[!e.hasCreatePool&&e.store&&e.store.chainName==="Aptos"?(n(),r("a",{key:0,href:`${("config"in e?e.config:g(L)).ammSite}/pools?language=${e.languageValue}&chain=aptos`,class:"ammSite"},[s("span",null,u(e.$t("common.ammPools")),1),rs],8,is)):v("",!0),e.store&&e.store.chainName==="Aptos"&&e.hasCreatePool?(n(),r("div",{key:1,class:"more",onClick:o[1]||(o[1]=B((...t)=>e.showMore&&e.showMore(...t),["stop"]))},[s("span",null,u(e.$t("newAdd.more")),1),(n(),r("svg",{class:D([e.store.isShowMore?"icon-open":"","icon"]),"aria-hidden":"true"},ds,2)),e.store.isShowMore?(n(),r("div",cs,[s("p",null,[s("a",{href:`${("config"in e?e.config:g(L)).ammSite}/pools?language=${e.languageValue}&chain=aptos`},u(e.$t("common.ammPools")),9,ps)]),s("p",{onClick:o[0]||(o[0]=t=>e.router.push(`/deposit?action=create-pool&tokenb=${("config"in e?e.config:g(L)).currentChainTokenAddress}&from=pool`))},u(e.$t("newAdd.createPool")),1)])):v("",!0)])):v("",!0),e.store&&e.store.chainName==="Sui"&&e.hasCreatePool?(n(),r("div",vs,[s("span",{onClick:o[2]||(o[2]=t=>e.router.push(`/deposit?action=create-pool&tokenb=${("config"in e?e.config:g(L)).currentChainTokenAddress}&from=pool`))},u(e.$t("newAdd.createPool")),1)])):v("",!0),s("div",{class:"position",onClick:o[3]||(o[3]=t=>e.router.push(`/deposit?actions=new-position&tokenb=${("config"in e?e.config:g(L)).currentChainTokenAddress}`))},[s("span",null,u(e.$t("button.addLiquidity")),1),ms])])]),s("div",hs,[s("div",fs,[s("div",{class:"search-input",onClick:o[8]||(o[8]=t=>e.reviseValue(""))},[ee(s("input",{"onUpdate:modelValue":o[5]||(o[5]=t=>e.searchKey=t),oninput:"value=value.match(/^[A-Za-z0-9-]+$/g,'')",placeholder:e.$t("inputPlaceholder.myPositionInput")},null,8,ks),[[me,e.searchKey]]),e.searchKey?(n(),r("div",{key:0,class:"out-icon",onClick:o[6]||(o[6]=t=>e.searchKey="")})):v("",!0),s("div",{class:"search-icon",onClick:o[7]||(o[7]=t=>e.updateLpList(e.searchKey))})]),ee(s("div",{class:"search-select search-label",onClick:o[9]||(o[9]=B(t=>e.reviseValue("label"),["stop"]))},[s("span",null,u(e.$t("newAdd.label")),1),s("div",null,u(e.labelValue),1),(n(),r("svg",{"aria-hidden":"true",class:D(e.label?"show-icon icon":"icon")},bs,2)),e.label?(n(),r("div",ys,[(n(!0),r(M,null,R(e.labelList,(t,b)=>(n(),r("div",{key:b,class:"select-menu-item",onClick:f=>e.changeSortLabel(t)},u(t),9,$s))),128))])):v("",!0)],512),[[Ge,e.chainName=="Aptos"]]),e.store.chainName!=="Aptos"?(n(),r("div",ws,[s("div",{class:"radio",onClick:o[10]||(o[10]=t=>e.clickDisplayAll())},[e.isSelectAll&&e.store.theme=="default"?(n(),r("img",{key:0,src:("importIcon"in e?e.importIcon:g(z))("/image/icon-check@2x.png"),alt:""},null,8,Cs)):v("",!0),e.isSelectAll&&e.store.theme!=="default"?(n(),r("img",{key:1,src:("importIcon"in e?e.importIcon:g(z))("/sui-image/checked.png"),alt:""},null,8,Ss)):v("",!0)]),As])):v("",!0),s("div",{class:"search-select",onClick:o[11]||(o[11]=B(t=>e.reviseValue("select"),["stop"]))},[s("span",null,u(e.$t("newAdd.sortBy")),1),s("div",null,[E(u(e.selectValue)+" ",1),_s]),(n(),r("svg",{"aria-hidden":"true",class:D(e.select?"show-icon icon":"icon")},Vs,2)),e.select?(n(),r("div",Ns,[(n(!0),r(M,null,R(e.selectList,(t,b)=>(n(),r("div",{key:b,class:"select-menu-item",onClick:f=>e.changeSort(t)},[E(u(t)+" ",1),Ds],8,Is))),128))])):v("",!0)]),(n(),r("svg",{"aria-hidden":"true",class:D(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:o[12]||(o[12]=(...t)=>e.clickRefresh&&e.clickRefresh(...t))},Ps,2))]),s("div",Ts,[_(S,{selectedKeys:e.current,"onUpdate:selectedKeys":o[13]||(o[13]=t=>e.current=t),mode:"horizontal"},{default:O(()=>[_(T,{key:"pools"},{icon:O(()=>[_(C)]),default:O(()=>[E(" "+u(e.$t("menu.pools")),1)]),_:1}),_(T,{key:"position",onClick:e.toPositionList},{icon:O(()=>[_(N)]),default:O(()=>[E(" "+u(e.$t("common.myPosition")),1)]),_:1},8,["onClick"])]),_:1},8,["selectedKeys"])]),s("div",js,[e.store.theme=="default"?(n(),r("div",{key:0,class:"search-select search-label",onClick:o[14]||(o[14]=B(t=>e.reviseValue("label"),["stop"]))},[s("span",null,u(e.$t("newAdd.label")),1),s("div",null,u(e.labelValue),1),(n(),r("svg",{"aria-hidden":"true",class:D(e.label?"show-icon icon":"icon")},Ms,2)),e.label?(n(),r("div",Rs,[(n(!0),r(M,null,R(e.labelList,(t,b)=>(n(),r("div",{key:b,class:"select-menu-item",onClick:f=>e.changeSortLabel(t)},u(t),9,Es))),128))])):v("",!0)])):v("",!0),e.store.chainName!=="Aptos"?(n(),r("div",Bs,[s("div",{class:"radio",onClick:o[15]||(o[15]=t=>e.clickDisplayAll())},[e.isSelectAll&&e.store.theme=="default"?(n(),r("img",{key:0,src:("importIcon"in e?e.importIcon:g(z))("/image/icon-check@2x.png"),alt:""},null,8,zs)):v("",!0),e.isSelectAll&&e.store.theme!=="default"?(n(),r("img",{key:1,src:("importIcon"in e?e.importIcon:g(z))("/sui-image/checked.png"),alt:""},null,8,Fs)):v("",!0)]),qs])):v("",!0),s("div",{class:"search-select",onClick:o[16]||(o[16]=B(t=>e.reviseValue("select"),["stop"]))},[s("span",null,u(e.$t("newAdd.sortBy")),1),s("div",null,[E(u(e.selectValue)+" ",1),Us]),(n(),r("svg",{"aria-hidden":"true",class:D(e.select?"show-icon icon":"icon")},Hs,2)),e.select?(n(),r("div",Gs,[(n(!0),r(M,null,R(e.selectList,(t,b)=>(n(),r("div",{key:b,class:"select-menu-item",onClick:f=>e.changeSort(t)},[E(u(t)+" ",1),Ws],8,Js))),128))])):v("",!0)]),s("div",{class:"search-input",onClick:o[20]||(o[20]=t=>e.reviseValue(""))},[ee(s("input",{"onUpdate:modelValue":o[17]||(o[17]=t=>e.searchKey=t),oninput:"value=value.match(/^[A-Za-z0-9-]+$/g,'')",placeholder:e.$t("inputPlaceholder.myPositionInput")},null,8,Qs),[[me,e.searchKey]]),e.searchKey?(n(),r("div",{key:0,class:"out-icon",onClick:o[18]||(o[18]=t=>e.searchKey="")})):v("",!0),s("div",{class:"search-icon",onClick:o[19]||(o[19]=t=>e.updateLpList(e.searchKey))})]),(n(),r("svg",{"aria-hidden":"true",class:D(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:o[21]||(o[21]=(...t)=>e.clickRefresh&&e.clickRefresh(...t))},Ys,2))])]),s("div",{class:"tvl-vol",onClick:o[22]||(o[22]=t=>e.reviseValue(""))},[s("div",xs,[_(j,{loading:e.listLoading,active:"",paragraph:!1},{default:O(()=>[s("div",eo," $ "+u(e.store.chainName==="Aptos"?("addCommom"in e?e.addCommom:g(F))(e.statsData&&e.statsData.tvl_in_usd_sum_v1,2):("addCommom"in e?e.addCommom:g(F))(e.statsData&&e.statsData.pure_tvl_in_usd,2)),1)]),_:1},8,["loading"]),s("div",so,u(e.$t("common.totalValueLocked")),1)]),s("div",oo,[_(j,{loading:e.listLoading,active:"",paragraph:!1},{default:O(()=>[s("div",lo," $ "+u(e.store.chainName==="Aptos"?("addCommom"in e?e.addCommom:g(F))(e.statsData&&e.statsData.vol_in_usd_24h_sum_v1,2):("addCommom"in e?e.addCommom:g(F))(e.statsData&&e.statsData.vol_in_usd_24h,2)),1)]),_:1},8,["loading"]),s("div",to,u(e.$t("common.volume24H")),1)])]),s("div",{class:"item-container",onClick:o[23]||(o[23]=t=>e.reviseValue(""))},[e.listLoading?(n(),r("div",ao,[_($)])):e.list&&e.list.length>0?(n(!0),r(M,{key:1},R(e.list,(t,b)=>(n(),Xe(A,{key:b,"l-item":t,"is-select-all":e.isSelectAll},null,8,["l-item","is-select-all"]))),128)):(n(),r("div",no,[e.theme=="default"?(n(),r("img",io)):(n(),r("img",ro)),s("span",null,u(e.$t("common.poolsNotFound")),1)])),(n(!0),r(M,null,R(e.patchNumber,t=>(n(),r("div",{key:t,class:"patch-item"}))),128))])])}const Ao=He(ts,[["render",uo],["__scopeId","data-v-eb0db9bd"]]);export{Ao as default};
