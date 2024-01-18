import{_ as Re}from"./pools-list-item.7b6ad11f.js";import{u as Ee,c as L}from"./sha256.033d7784.js";import{i as B}from"./import-icon.de3e6c66.js";import{u as qe,a as z,k as x,d as Be}from"./pool.d6b5ef6c.js";import{a as ze,y as Fe,b as Ue,r as h,l as C,H as Ze,q as Y,e as He,Q as ve,o as n,f as r,h as s,v as u,u as k,x as v,z as q,A as O,t as ee,a9 as me,N as Qe,F as K,E as R,j as E,i as _,w as P,Y as Ye,M as Ge,S as Je,c as We,p as Xe,k as xe,Z as es}from"./entry.4b03dc9c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{p as ss}from"./precision.9d58cda5.js";import{_ as G}from"./icon_on_2x.5e96733d.js";import{_ as os}from"./img-no-Positions_2x.97729749.js";import{_ as ls}from"./img-no-Positions_2x.aa614114.js";import"./coin-tips.b77210d2.js";import"./apr-tips.52f0f24f.js";import"./farms.edd8456a.js";import"./decimal.0bdeb344.js";import"./icon_rewards_2x.7f0a5f9e.js";import"./nuxt-link.f7238744.js";import"./autoPool.778cd51a.js";import"./icon_farms_2x.aabbde4b.js";const ts=ze({setup(){const{t:e,locale:o}=Fe(),V=Ue(),F=h(!1),U=h(!1),D=h(!1),w=h("VOL"),T=h(["APR","TVL"]),N=h(!1),S=h(e("tab.all")),M=h([e("tab.layerZero"),e("tab.wormhole"),e("tab.celer")]),$=h([]),A=h(""),t=h(["pools"]),y=qe(),f=Ee(),Z=h(!0),J=h(""),c=C(()=>f),he=C(()=>f.theme),b=C(()=>y),fe=C(()=>f.statsData),ge=(l,a)=>a.liqidity-l.liqidity,ke=(l,a)=>a.vol-l.vol,ye=(l,a)=>a.aprNum-l.aprNum,j=h(!1),be=()=>{localStorage.setItem(`pools-${X.value}-selectall`,j.value?"":"true"),j.value=!j.value},W=C(()=>{if(b.value.tokens&&b.value.tokens.length>0){const l={};return b.value.tokens.forEach(a=>{l[a.address]={...a}}),l}return null});Ze(()=>{var p,g,Q;const l=(Q=(g=(p=V==null?void 0:V.currentRoute)==null?void 0:p.value)==null?void 0:g.query)==null?void 0:Q.language;l&&Ce(l),J.value=o.value,document.addEventListener("click",()=>{H("")});const a=localStorage.getItem(`pools-${X.value}-selectall`);j.value=a==="true"}),Y(()=>c.value.chainName,(l,a)=>{l&&f.getStatsData(l,c.value.filterCoinsObj)},{immediate:!0});const{setLang:$e}=f,Ce=l=>{$e(l),o.value=l},we=(l,a)=>l&&a?ss.plus(x(l),x(a)):l||0,se=l=>{let a=0;return l&&l.forEach(p=>{a+=x(String(p))}),String(Be(String(a),2))},Se=(l=[])=>{const a=l&&l.length>0?l:Object.values(b.value.poolsObj),p=[];a.forEach(d=>{var ne,ie,re,ue,de,ce,pe;const i=c.value.addressLpTokens[d.address],I=b.value.poolsObj[d.address];let oe,le,te,ae;i&&(oe=i.rewarder_apr[0]?Number(i.rewarder_apr[0].substring(0,i.rewarder_apr[0].length-1)):0,le=i.rewarder_apr[1]?Number(i.rewarder_apr[1].substring(0,i.rewarder_apr[1].length-1)):0,te=i.rewarder_apr[2]?Number(i.rewarder_apr[2].substring(0,i.rewarder_apr[2].length-1)):0,ae=oe+le+te);const Me=d.needReverse?((ie=b.value.tokensObj[d.coinB.address])==null?void 0:ie.labels)||[]:((ne=b.value.tokensObj[d.coinA.address])==null?void 0:ne.labels)||[],je=d.needReverse?((re=b.value.tokensObj[d.coinA.address])==null?void 0:re.labels)||[]:((ue=b.value.tokensObj[d.coinB.address])==null?void 0:ue.labels)||[],Ke=[...new Set(Me.concat(je))];p.push({...d,liqidity:i?i.tvl_in_usd:"0.00000000001",vol:i?i.vol_in_usd_24h:"0",apr:i&&i.apr_7day?(de=i.apr_7day)==null?void 0:de.replace("%",""):"--",fee:d.fee?d.fee:I!=null&&I.fee?I.fee:"--",aprNum:i&&i.apr_7day?String(Number(i.apr_7day.substring(0,i.apr_7day.length-1))+ae):"0",rewarder_apr:se(i&&i.rewarder_apr),aprTotal:we(i&&i.apr_7day,i&&se(i.rewarder_apr)),rewarders0:i&&i.rewarder_apr[0],rewarders1:i&&i.rewarder_apr[1],rewarders2:i&&i.rewarder_apr[2],labels:Ke,isFarming:d==null?void 0:d.isFarming,fee_24_h:i&&i.fee_24_h,isAuthorized:!!(W.value[(ce=d==null?void 0:d.token_a)==null?void 0:ce.address]&&W.value[(pe=d==null?void 0:d.token_b)==null?void 0:pe.address]),rewarderInfo:c.value.chainName=="Aptos"?I==null?void 0:I.rewarder_infos:[]})});let g=[];if(w.value=="APR"?g=p.sort(ye):w.value=="VOL"?g=p.sort(ke):g=p.sort(ge),S.value!=e("tab.all")){const d=[];g.forEach(i=>{i.labels.indexOf(S.value)!==-1&&d.push(i)}),$.value=d}else $.value=g;if(A.value){var Q=new RegExp("[\\u4E00-\\u9FFF]+","g");if(Q.test(A.value)){A.value="";return}const d=$.value.filter(i=>i.symbol.toLowerCase().includes(A.value.toLowerCase()));$.value=d}Z.value=!1};Y(()=>[W.value,b.value.poolConfigList,c.value.chainName,c.value.addressLpTokens,A.value,w.value,S.value],([l,a,p,g])=>{l&&a&&(a==null?void 0:a.length)>0&&a[0]&&p&&(p!=null&&p.toLowerCase().includes(a[0].chain))&&Se(a)},{immediate:!0,deep:!0});const Ae=l=>{if(!Z.value&&(F.value=!0,l)){const a=$.value.filter(p=>p.symbol.toLowerCase().includes(l.toLowerCase()));$.value=a,F.value=!1}},_e=()=>{Z.value=!0,U.value=!0,f.getStatsData(c.value.chainName,c.value.filterCoinsObj),y.setPoolConfigList(c.value.chainName,c.value.filterCoinsObj),setTimeout(()=>{U.value=!1},1e3)},Le=l=>{const a=[];a.push(w.value),T.value.forEach((p,g)=>{p!=l&&a.push(p)}),T.value=a,w.value=l},Ve=l=>{const a=[];M.value.forEach((p,g)=>{p==l?a[g]=S.value:a[g]=p}),M.value=a,S.value=l};Y(()=>f.lang,l=>{J.value=l});const H=l=>{l=="label"?(f.setIsSelect("pools"),N.value=!N.value,D.value=!1,c.value.setIsShowMore(!1)):l=="select"?(f.setIsSelect("pools"),D.value=!D.value,N.value=!1,c.value.setIsShowMore(!1)):(D.value=!1,N.value=!1)},Ne=()=>{V&&V.push("/position")},Ie=C(()=>L[c.value.chainName]);Y(()=>c.value.isSelect,l=>{l!=="pools"&&H("")},{immediate:!0});const Oe=C(()=>b.value.poolConfigList.filter(a=>a.address==L[c.value.chainName].newPositionAddress)[0]),Pe=()=>{c.value.setIsShowMore(!c.value.isShowMore),c.value.setOpenMore(!1),c.value.setOpenSwitchLang(!1),c.value.setOpenH5Icon(!1),c.value.setOpenSwitchChain(!1),H("")},De=C(()=>L[c.value.chainName].hasCreatePool),X=C(()=>c.value.chainName),Te=C(()=>{const l=$.value.filter(a=>a.isAuthorized);return j.value?4-$.value.length%4:4-l.length%4});return{clickDisplayAll:be,isSelectAll:j,chainName:X,hasCreatePool:De,store:c,showMore:Pe,lpInfo:Oe,config:Ie,toPositionList:Ne,t:e,router:V,loading:F,clickRefresh:_e,refresh:U,updateLpList:Ae,searchKey:A,current:t,addCommom:z,list:$,theme:he,statsData:fe,pools:b,select:D,selectValue:w,selectList:T,label:N,labelValue:S,labelList:M,changeSort:Le,changeSortLabel:Ve,reviseValue:H,listLoading:Z,languageValue:J,importIcon:B,patchNumber:Te}}});const m=e=>(Xe("data-v-7d5b0f47"),e=e(),xe(),e),as={class:"pools-list-container"},ns={class:"right-link"},is=["href"],rs=m(()=>s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon-jump"})],-1)),us=m(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),ds=[us],cs={key:0,class:"more-list"},ps=["href"],vs={key:2,class:"sui-createPool position"},ms=m(()=>s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon-add1"})],-1)),hs={class:"search-refresh"},fs={class:"my-position position-h5"},gs=["placeholder"],ks=m(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),ys=[ks],bs={key:0,class:"select-item"},$s=["onClick"],Cs={key:0,class:"search-select display-all-box"},ws=["src"],Ss=["src"],As=m(()=>s("span",null,"Display all pools",-1)),_s=m(()=>s("img",{src:G,alt:""},null,-1)),Ls=m(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),Vs=[Ls],Ns={key:0,class:"select-item"},Is=["onClick"],Os=m(()=>s("img",{src:G,alt:""},null,-1)),Ps=m(()=>s("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),Ds=[Ps],Ts={class:"search-tab"},Ms={class:"my-position position-pc"},js=m(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),Ks=[js],Rs={key:0,class:"select-item"},Es=["onClick"],qs={key:1,class:"search-select display-all-box"},Bs=["src"],zs=["src"],Fs=m(()=>s("span",null,"Display all pools",-1)),Us=m(()=>s("img",{src:G,alt:""},null,-1)),Zs=m(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),Hs=[Zs],Qs={key:0,class:"select-item"},Ys=["onClick"],Gs=m(()=>s("img",{src:G,alt:""},null,-1)),Js=["placeholder"],Ws=m(()=>s("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),Xs=[Ws],xs={class:"item item-left"},eo={class:"value"},so={class:"label"},oo={class:"item item-right"},lo={class:"value"},to={class:"label"},ao={key:0,class:"loading-spin"},no={key:2,class:"no-data"},io={key:0,src:os},ro={key:1,src:ls};function uo(e,o,V,F,U,D){const w=ve("mail-outlined"),T=es,N=ve("appstore-outlined"),S=Ye,M=Ge,$=Je,A=Re;return n(),r("div",as,[s("div",{class:"pools-title",onClick:o[4]||(o[4]=t=>e.reviseValue(""))},[s("div",null,u(e.$t("common.concentratedPools")),1),s("div",ns,[!e.hasCreatePool&&e.store&&e.store.chainName==="Aptos"?(n(),r("a",{key:0,href:`${("config"in e?e.config:k(L)).ammSite}/pools?language=${e.languageValue}&chain=aptos`,class:"ammSite"},[s("span",null,u(e.$t("common.ammPools")),1),rs],8,is)):v("",!0),e.store&&e.store.chainName==="Aptos"&&e.hasCreatePool?(n(),r("div",{key:1,class:"more",onClick:o[1]||(o[1]=q((...t)=>e.showMore&&e.showMore(...t),["stop"]))},[s("span",null,u(e.$t("newAdd.more")),1),(n(),r("svg",{class:O([e.store.isShowMore?"icon-open":"","icon"]),"aria-hidden":"true"},ds,2)),e.store.isShowMore?(n(),r("div",cs,[s("p",null,[s("a",{href:`${("config"in e?e.config:k(L)).ammSite}/pools?language=${e.languageValue}&chain=aptos`},u(e.$t("common.ammPools")),9,ps)]),s("p",{onClick:o[0]||(o[0]=t=>e.router.push(`/liquidity/create?toCoin=${("config"in e?e.config:k(L)).currentChainTokenAddress}`))},u(e.$t("newAdd.createPool")),1)])):v("",!0)])):v("",!0),e.store&&e.store.chainName==="Sui"&&e.hasCreatePool?(n(),r("div",vs,[s("span",{onClick:o[2]||(o[2]=t=>e.router.push(`/liquidity/create?toCoin=${("config"in e?e.config:k(L)).currentChainTokenAddress}`))},u(e.$t("newAdd.createPool")),1)])):v("",!0),s("div",{class:"position",onClick:o[3]||(o[3]=t=>e.router.push(`/liquidity/deposit?action=newposition&toCoin=${("config"in e?e.config:k(L)).currentChainTokenAddress}`))},[s("span",null,u(e.$t("button.addLiquidity")),1),ms])])]),s("div",hs,[s("div",fs,[s("div",{class:"search-input",onClick:o[8]||(o[8]=t=>e.reviseValue(""))},[ee(s("input",{"onUpdate:modelValue":o[5]||(o[5]=t=>e.searchKey=t),oninput:"value=value.match(/^[A-Za-z0-9-]+$/g,'')",placeholder:e.$t("inputPlaceholder.myPositionInput")},null,8,gs),[[me,e.searchKey]]),e.searchKey?(n(),r("div",{key:0,class:"out-icon",onClick:o[6]||(o[6]=t=>e.searchKey="")})):v("",!0),s("div",{class:"search-icon",onClick:o[7]||(o[7]=t=>e.updateLpList(e.searchKey))})]),ee(s("div",{class:"search-select search-label",onClick:o[9]||(o[9]=q(t=>e.reviseValue("label"),["stop"]))},[s("span",null,u(e.$t("newAdd.label")),1),s("div",null,u(e.labelValue),1),(n(),r("svg",{"aria-hidden":"true",class:O(e.label?"show-icon icon":"icon")},ys,2)),e.label?(n(),r("div",bs,[(n(!0),r(K,null,R(e.labelList,(t,y)=>(n(),r("div",{key:y,class:"select-menu-item",onClick:f=>e.changeSortLabel(t)},u(t),9,$s))),128))])):v("",!0)],512),[[Qe,e.chainName=="Aptos"]]),e.store.chainName!=="Aptos"?(n(),r("div",Cs,[s("div",{class:"radio",onClick:o[10]||(o[10]=t=>e.clickDisplayAll())},[e.isSelectAll&&e.store.theme=="default"?(n(),r("img",{key:0,src:("importIcon"in e?e.importIcon:k(B))("/image/icon-check@2x.png"),alt:""},null,8,ws)):v("",!0),e.isSelectAll&&e.store.theme!=="default"?(n(),r("img",{key:1,src:("importIcon"in e?e.importIcon:k(B))("/sui-image/checked.png"),alt:""},null,8,Ss)):v("",!0)]),As])):v("",!0),s("div",{class:"search-select",onClick:o[11]||(o[11]=q(t=>e.reviseValue("select"),["stop"]))},[s("span",null,u(e.$t("newAdd.sortBy")),1),s("div",null,[E(u(e.selectValue)+" ",1),_s]),(n(),r("svg",{"aria-hidden":"true",class:O(e.select?"show-icon icon":"icon")},Vs,2)),e.select?(n(),r("div",Ns,[(n(!0),r(K,null,R(e.selectList,(t,y)=>(n(),r("div",{key:y,class:"select-menu-item",onClick:f=>e.changeSort(t)},[E(u(t)+" ",1),Os],8,Is))),128))])):v("",!0)]),(n(),r("svg",{"aria-hidden":"true",class:O(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:o[12]||(o[12]=(...t)=>e.clickRefresh&&e.clickRefresh(...t))},Ds,2))]),s("div",Ts,[_(S,{selectedKeys:e.current,"onUpdate:selectedKeys":o[13]||(o[13]=t=>e.current=t),mode:"horizontal"},{default:P(()=>[_(T,{key:"pools"},{icon:P(()=>[_(w)]),default:P(()=>[E(" "+u(e.$t("menu.pools")),1)]),_:1}),_(T,{key:"position",onClick:e.toPositionList},{icon:P(()=>[_(N)]),default:P(()=>[E(" "+u(e.$t("common.myPosition")),1)]),_:1},8,["onClick"])]),_:1},8,["selectedKeys"])]),s("div",Ms,[e.store.theme=="default"?(n(),r("div",{key:0,class:"search-select search-label",onClick:o[14]||(o[14]=q(t=>e.reviseValue("label"),["stop"]))},[s("span",null,u(e.$t("newAdd.label")),1),s("div",null,u(e.labelValue),1),(n(),r("svg",{"aria-hidden":"true",class:O(e.label?"show-icon icon":"icon")},Ks,2)),e.label?(n(),r("div",Rs,[(n(!0),r(K,null,R(e.labelList,(t,y)=>(n(),r("div",{key:y,class:"select-menu-item",onClick:f=>e.changeSortLabel(t)},u(t),9,Es))),128))])):v("",!0)])):v("",!0),e.store.chainName!=="Aptos"?(n(),r("div",qs,[s("div",{class:"radio",onClick:o[15]||(o[15]=t=>e.clickDisplayAll())},[e.isSelectAll&&e.store.theme=="default"?(n(),r("img",{key:0,src:("importIcon"in e?e.importIcon:k(B))("/image/icon-check@2x.png"),alt:""},null,8,Bs)):v("",!0),e.isSelectAll&&e.store.theme!=="default"?(n(),r("img",{key:1,src:("importIcon"in e?e.importIcon:k(B))("/sui-image/checked.png"),alt:""},null,8,zs)):v("",!0)]),Fs])):v("",!0),s("div",{class:"search-select",onClick:o[16]||(o[16]=q(t=>e.reviseValue("select"),["stop"]))},[s("span",null,u(e.$t("newAdd.sortBy")),1),s("div",null,[E(u(e.selectValue)+" ",1),Us]),(n(),r("svg",{"aria-hidden":"true",class:O(e.select?"show-icon icon":"icon")},Hs,2)),e.select?(n(),r("div",Qs,[(n(!0),r(K,null,R(e.selectList,(t,y)=>(n(),r("div",{key:y,class:"select-menu-item",onClick:f=>e.changeSort(t)},[E(u(t)+" ",1),Gs],8,Ys))),128))])):v("",!0)]),s("div",{class:"search-input",onClick:o[20]||(o[20]=t=>e.reviseValue(""))},[ee(s("input",{"onUpdate:modelValue":o[17]||(o[17]=t=>e.searchKey=t),oninput:"value=value.match(/^[A-Za-z0-9-]+$/g,'')",placeholder:e.$t("inputPlaceholder.myPositionInput")},null,8,Js),[[me,e.searchKey]]),e.searchKey?(n(),r("div",{key:0,class:"out-icon",onClick:o[18]||(o[18]=t=>e.searchKey="")})):v("",!0),s("div",{class:"search-icon",onClick:o[19]||(o[19]=t=>e.updateLpList(e.searchKey))})]),(n(),r("svg",{"aria-hidden":"true",class:O(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:o[21]||(o[21]=(...t)=>e.clickRefresh&&e.clickRefresh(...t))},Xs,2))])]),s("div",{class:"tvl-vol",onClick:o[22]||(o[22]=t=>e.reviseValue(""))},[s("div",xs,[_(M,{loading:e.listLoading,active:"",paragraph:!1},{default:P(()=>[s("div",eo," $ "+u(e.store.chainName==="Aptos"?("addCommom"in e?e.addCommom:k(z))(e.statsData&&e.statsData.tvl_in_usd_sum_v1,2):("addCommom"in e?e.addCommom:k(z))(e.statsData&&e.statsData.pure_tvl_in_usd,2)),1)]),_:1},8,["loading"]),s("div",so,u(e.$t("common.totalValueLocked")),1)]),s("div",oo,[_(M,{loading:e.listLoading,active:"",paragraph:!1},{default:P(()=>[s("div",lo," $ "+u(e.store.chainName==="Aptos"?("addCommom"in e?e.addCommom:k(z))(e.statsData&&e.statsData.vol_in_usd_24h_sum_v1,2):("addCommom"in e?e.addCommom:k(z))(e.statsData&&e.statsData.vol_in_usd_24h,2)),1)]),_:1},8,["loading"]),s("div",to,u(e.$t("common.volume24H")),1)])]),s("div",{class:"item-container",onClick:o[23]||(o[23]=t=>e.reviseValue(""))},[e.listLoading?(n(),r("div",ao,[_($)])):e.list&&e.list.length>0?(n(!0),r(K,{key:1},R(e.list,(t,y)=>(n(),We(A,{key:y,"l-item":t,"is-select-all":e.isSelectAll},null,8,["l-item","is-select-all"]))),128)):(n(),r("div",no,[e.theme=="default"?(n(),r("img",io)):(n(),r("img",ro)),s("span",null,u(e.$t("common.poolsNotFound")),1)])),(n(!0),r(K,null,R(e.patchNumber,t=>(n(),r("div",{key:t,class:"patch-item"}))),128))])])}const Po=He(ts,[["render",uo],["__scopeId","data-v-7d5b0f47"]]);export{Po as default};
