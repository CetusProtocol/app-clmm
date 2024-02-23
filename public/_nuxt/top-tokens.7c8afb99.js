import{_ as he}from"./back.4357b0d6.js";import{_ as be}from"./upgrade-loading.41b88455.js";import{i as U}from"./import-icon.de3e6c66.js";import{u as _e,a as b,d as W,L as ke,c as O,k as F,p as Q,q as X}from"./pool.c81130b3.js";import{a as ge,y as we,l as S,b as Ce,r as T,H as ye,q as Y,e as Te,s as Oe,o as u,f as c,h as s,v as d,i as H,j as N,z as B,A as w,F as q,E as M,x as E,a3 as fe,t as Z,u as i,w as x,p as je,k as Ne,B as $e}from"./entry.0b7fadcd.js";/* empty css              */import{u as Ae}from"./sha256.a17b0374.js";import{p as Se}from"./precision.9d58cda5.js";const Le=ge({props:{isAll:{type:Boolean,default:!1}},setup(){const e=_e(),{t:m,locale:ee}=we(),p=S(()=>e),G=S(()=>p.value.allTokenObj||{}),J=S(()=>p.value.tokensObj||{}),z=Ae(),g=S(()=>z),V=Ce(),L=T(1),A=T("vol"),o=T("desc");let C=T(!1);ye(()=>{const n=document.body.clientWidth;n<750?C.value=!1:C.value=!0,window.onresize=()=>{n<750?C.value=!1:C.value=!0}});const se=T(!1),oe=S(()=>g.value.chainName),ne=T(!1),re=T("Volume (24H)"),ae=T(["Price","TVL","Volume (24H)","Price Change"]);let R=T(null);const D=S(()=>{const n=g.value.topTokensList,l=[];for(let r=0;r<n.length;r++){const a=n[r];l.push({...a,priceHour:a?Number(a.price_rate_24h.substring(0,a.price_rate_24h.length-1)):"0",address:a.symbol=="SUI"?"0x2::sui::SUI":a.address})}return Array.from(l).sort((r,a)=>Number(a.vol_in_usd_24h)-Number(r.vol_in_usd_24h))}),K=n=>{const l=Array.from(D.value).sort((r,a)=>{if(n==A.value)if(o.value=="desc"){if(n=="price")return Number(a.price)-Number(r.price);if(n=="priceChange")return Number(a.priceHour)-Number(r.priceHour);if(n=="vol")return Number(a.vol_in_usd_24h)-Number(r.vol_in_usd_24h);if(n=="tvl")return Number(a.tvl_in_usd)-Number(r.tvl_in_usd)}else{if(n=="tvl")return Number(r.tvl_in_usd)-Number(a.tvl_in_usd);if(n=="vol")return Number(r.vol_in_usd_24h)-Number(a.vol_in_usd_24h);if(n=="price")return Number(r.price)-Number(a.price);if(n=="priceChange")return Number(r.priceHour)-Number(a.priceHour)}else{if(n=="tvl")return Number(r.tvl_in_usd)-Number(a.tvl_in_usd);if(n=="vol")return Number(r.vol_in_usd_24h)-Number(a.vol_in_usd_24h);if(n=="price")return Number(r.price)-Number(a.price);if(n=="priceChange")return Number(r.priceHour)-Number(a.priceHour)}});if(l.length<10)R.value=l.slice(0,10);else{const r=L.value*10;R.value=l.slice(r-10,r)}},le=n=>{n==A.value?o.value=o.value=="desc"?"asc":"desc":(A.value=n,o.value="desc"),K(n)},I=(n,l)=>{L.value=n,D.value&&D.value.length>0&&K(A.value)};Y(D,n=>{C.value,I(L.value)},{immediate:!0});const de=n=>{var l,r,a,f,v,t;if(g.value.theme=="sui"){const _=n.needReverse?((r=p.value.tokensObj[n.token_b_address])==null?void 0:r.labels)||[]:((l=p.value.tokensObj[n.token_a_address])==null?void 0:l.labels)||[],y=n.needReverse?((a=p.value.tokensObj[n.token_a_address])==null?void 0:a.labels)||[]:((f=p.value.tokensObj[n.token_b_address])==null?void 0:f.labels)||[],k=_.concat(y);return[...new Set(k)]}else{const _=((v=p.value.tokensObj[n.token_a_address])==null?void 0:v.labels)||[],y=((t=p.value.tokensObj[n.token_b_address])==null?void 0:t.labels)||[],k=_.concat(y);return[...new Set(k)]}},te=n=>{if(!O(n)&&!O(p.value.addressLpTokens)&&!O(p.value.tokensObj)){const l=n.swap_account,r=p.value.addressLpTokens[l];let a=(r==null?void 0:r.rewarder_infos)||[];const f=[];for(let t=0;t<a.length;t++){const _=a[t];p.value.tokensObj[_==null?void 0:_.coinAddress]&&f.push({..._,symbol:p.value.tokensObj[_.coinAddress].symbol,rewarderApr:n.rewarder_apr[t],logoUrl:p.value.tokensObj[_.coinAddress].logoURI,rewarder_display:r[`rewarder_display${t+1}`]})}let v=[];return v=f.filter(t=>t.rewarder_display),v}},ie=(n,l)=>n&&l?Se.plus(F(n),F(l)):n>0&&n<.01?"<0.01":0,ue=n=>{let l=0;return n&&n.forEach(r=>{r.rewarder_display&&(l+=F(String(r.rewarders)))}),String(l)},ce=()=>{V&&V.push("/stats-tokens")},P=T({});Y(()=>[p.value.poolConfigObj,p.value.tokensObj,g.value.topPoolsList,g.value.chainName,p.value.addressLpTokens],([n,l,r,a,f])=>{a=="Sui"?n&&!O(n)&&r&&r.length>0&&l&&!O(l)&&r.forEach(v=>{var y;const t=n[v.swap_account],_=(y=t==null?void 0:t.rewarderInfo)==null?void 0:y.map((k,h)=>{const j=l[k.coinAddress];return{...k,emissionsEveryDay:Q(k.emissionsEveryDay,j==null?void 0:j.decimals),rewarder_display:t[`rewarder_display${h+1}`],rewarders:v.rewarder_apr[h]&&v.rewarder_apr[h].replace("%",""),logoUrl:j==null?void 0:j.logo_url,symbol:j==null?void 0:j.symbol,rewarderApr:v.rewarder_apr[h]&&v.rewarder_apr[h].replace("%","")}});t!=null&&t.is_display_rewarder&&(P.value={...P.value,[v.swap_account]:_})}):n&&!O(n)&&r&&r.length>0&&l&&!O(l)&&f&&!O(f)&&r.forEach(v=>{const t=f[v.swap_account];if(t){const _=t.rewarder_infos.map((y,k)=>{const h=l[y.coinAddress];return{...y,emissionsEveryDay:Q(y.emissionsEveryDay,h==null?void 0:h.decimals),rewarder_display:t[`rewarder_display${k+1}`],rewarders:X(v.rewarder_apr[k]&&v.rewarder_apr[k].replace("%",""),2),logoUrl:h==null?void 0:h.logo_url,symbol:h==null?void 0:h.symbol,rewarderApr:X(v.rewarder_apr[k]&&v.rewarder_apr[k].replace("%",""),2)}});t!=null&&t.is_display_rewarder&&(P.value={...P.value,[v.swap_account]:_})}})},{immediate:!0,deep:!0});const pe=n=>{var l;return(n==null?void 0:n.logoURI)||(n==null?void 0:n.logo_url)||((l=p.value.tokensObj[n==null?void 0:n.address])==null?void 0:l.logo_url)||(g.value.theme==="default"?U("/image/coins/unknown.png"):U("/image/coins/sui-unknown.png"))},ve=S(()=>g.value.theme),me=S(()=>p.value.tokensWarningObj);return{currentSortColumn:A,currentSortOrder:o,sortTable:le,tokensWarningObj:me,theme:ve,getCoinIcon:pe,addCommom:b,store:g,importIcon:U,addressTokens:G,onChangeTokens:I,currentTokens:L,currentTopTokensList:R,topTokensList:D,router:V,isPc:C,getAprTotal:ie,getRewarderApr:ue,toTokensList:ce,labelToken:ne,select:se,tokenValue:re,tokensList:ae,getLabel:de,rewardApr:te,tokensObj:J,rewardObj:P,t:m,decimalUi:W,chainName:oe,formatNumberAddCommom:ke}}});const $=e=>(je("data-v-0994572d"),e=e(),Ne(),e),Ue={key:0,class:"title"},Ve={key:1,class:"title view-all-title"},He={class:"sort-by"},Be=$(()=>s("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Ee=[Be],De=$(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),Pe=[De],We={key:0,class:"select-item"},ze=["onClick"],Re=$(()=>s("svg",{"aria-hidden":"true",class:"pools-icon"},[s("use",{"xlink:href":"#icon-icon_on-pool"})],-1)),Ie={class:"table-contianer"},Fe={class:"pools-table"},qe={class:"table-header"},Me=$(()=>s("th",null,"Tokens",-1)),Ge=$(()=>s("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Je=[Ge],Ke=$(()=>s("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Qe=[Ke],Xe=$(()=>s("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Ye=[Xe],Ze=$(()=>s("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),xe=[Ze],es=$(()=>s("th",null,null,-1)),ss={class:"table-body"},os={key:0},ns={colspan:"6"},rs={class:"upgrade-loading"},as={class:"token"},ls={class:"left"},ds=["onerror"],ts={key:0,class:"pool-warning"},is={class:"right"},us={class:"name"},cs={key:0,class:"label-all"},ps={class:"price onlyPrice"},vs={class:"price"},ms={class:"volume"},hs={class:"tvl"},bs={class:"btn-box"},_s={class:"h5-item-container"},ks={key:0,class:"upgrade-loading"},gs={class:"top"},ws={class:"token"},Cs=["onerror"],ys={key:0,class:"pool-warning"},Ts={class:"right"},Os={class:"name"},fs={key:0,class:"label-all"},js={class:"middle"},Ns={class:"item-pools"},$s={class:"price"},As={class:"item-pools"},Ss={class:"item-pools"},Ls={class:"item-pools"},Us={class:"bottom"},Vs={class:"panation"};function Hs(e,m,ee,p,G,J){const z=he,g=be,V=$e,L=fe,A=Oe("image");return u(),c("div",{class:w(["top-tokens-table",e.isAll?"top-tokens-table-all":""])},[e.isAll?(u(),c("div",Ve,[H(z),N(" "+d(e.$t("common.tokens")),1)])):(u(),c("div",Ue,[s("div",null,d(e.$t("common.topTokens")),1),s("div",{class:"view-all",onClick:m[0]||(m[0]=(...o)=>e.toTokensList&&e.toTokensList(...o))},d(e.$t("newAdd.viewAll"))+"   > ",1)])),s("div",He,[s("div",null,d(e.$t("newAdd.sortBy")),1),s("div",{class:"search-select",onClick:m[1]||(m[1]=B(o=>e.labelToken=!e.labelToken,["stop"]))},[s("div",null,[N(d(e.tokenValue)+" ",1),(u(),c("svg",{"aria-hidden":"true",class:w(["pools-icon",e.currentSortOrder=="desc"?"desc-svg":"asc-svg"])},Ee,2))]),(u(),c("svg",{"aria-hidden":"true",class:w(e.labelToken?"show-icon icon":"icon")},Pe,2))]),e.labelToken?(u(),c("div",We,[(u(!0),c(q,null,M(e.tokensList,(o,C)=>(u(),c("div",{key:C,class:"select-menu-item",onClick:B(()=>{e.labelToken=!1,e.tokenValue=o,e.sortTable(o=="Price"?"price":o=="Volume (24H)"?"vol":o=="TVL"?"tvl":"priceChange")},["stop"])},[N(d(o)+" ",1),Re],8,ze))),128))])):E("",!0)]),s("div",Ie,[s("table",Fe,[s("thead",qe,[s("tr",null,[Me,s("th",null,[s("span",{onClick:m[2]||(m[2]=B(o=>e.sortTable("price"),["stop"]))},[N(" Price "),(u(),c("svg",{"aria-hidden":"true",class:w(["pools-icon",e.currentSortColumn=="price"?e.currentSortOrder=="desc"?"desc-svg active-svg":"asc-svg active-svg":""])},Je,2))])]),s("th",null,[s("span",{onClick:m[3]||(m[3]=B(o=>e.sortTable("priceChange"),["stop"]))},[N(" Price Change "),(u(),c("svg",{"aria-hidden":"true",class:w(["pools-icon",e.currentSortColumn=="priceChange"?e.currentSortOrder=="desc"?"desc-svg active-svg":"asc-svg active-svg":""])},Qe,2))])]),s("th",null,[s("span",{onClick:m[4]||(m[4]=B(o=>e.sortTable("vol"),["stop"]))},[N(" Volume (24H) "),(u(),c("svg",{"aria-hidden":"true",class:w(["pools-icon",e.currentSortColumn=="vol"?e.currentSortOrder=="desc"?"desc-svg active-svg":"asc-svg active-svg":""])},Ye,2))])]),s("th",null,[s("span",{class:"hover-box",onClick:m[5]||(m[5]=B(o=>e.sortTable("tvl"),["stop"]))},[N(" TVL "),(u(),c("svg",{"aria-hidden":"true",class:w(["pools-icon",e.currentSortColumn=="tvl"?e.currentSortOrder=="desc"?"desc-svg active-svg":"asc-svg active-svg":""])},xe,2))])]),es])]),s("tbody",ss,[e.currentTopTokensList?E("",!0):(u(),c("tr",os,[s("td",ns,[s("div",rs,[H(g,{loading:!0,type:"statsPools"})])])])),(u(!0),c(q,null,M(e.currentTopTokensList,o=>(u(),c("tr",{key:o.address},[s("td",null,[s("div",as,[s("div",ls,[s("div",null,[Z(s("img",{onerror:e.theme=="default"?("importIcon"in e?e.importIcon:i(U))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:i(U))("/image/coins/sui-unknown.png"),alt:""},null,8,ds),[[A,e.getCoinIcon(e.addressTokens&&e.addressTokens[o.address])]]),!("checkNullObj"in e?e.checkNullObj:i(O))(e.tokensWarningObj||{})&&!e.tokensWarningObj[o.address]?(u(),c("div",ts)):E("",!0)])]),s("div",is,[s("div",us,[s("p",null,d(o.symbol),1),s("span",null,d(o.name),1)]),e.tokensObj&&e.tokensObj[o.address]&&e.tokensObj[o.address].labels&&e.tokensObj[o.address].labels[0]?(u(),c("div",cs,[s("div",{class:w(["label",e.tokensObj&&e.tokensObj[o.address]&&e.tokensObj[o.address].labels&&e.tokensObj[o.address].labels[0]])},[s("span",null,d(e.tokensObj&&e.tokensObj[o.address]&&e.tokensObj[o.address].labels&&e.tokensObj[o.address].labels[0]?`${e.tokensObj[o.address].labels[0]}`:""),1)],2)])):E("",!0)])])]),s("td",null,[s("div",ps,[s("p",null,d(o.price?"$"+(Number(o.price)>1?("addCommom"in e?e.addCommom:i(b))(("decimalUi"in e?e.decimalUi:i(W))(o.price,2)):("addCommom"in e?e.addCommom:i(b))(("decimalUi"in e?e.decimalUi:i(W))(o.price,4))):"--"),1)])]),s("td",null,[s("div",vs,[s("p",{class:w(o.price_rate_24h.includes("-")?"redecue-change-price":"add-change-price")},d(o.price_rate_24h!=="0%"&&!o.price_rate_24h.includes("-")?`+${o.price_rate_24h}`:o.price_rate_24h),3)])]),s("td",null,[s("div",ms," $"+d(("addCommom"in e?e.addCommom:i(b))(o.vol_in_usd_24h,2)=="0.00"?0:("addCommom"in e?e.addCommom:i(b))(o.vol_in_usd_24h,2)?("addCommom"in e?e.addCommom:i(b))(o.vol_in_usd_24h,2):"--"),1)]),s("td",null,[s("div",hs," $"+d(("addCommom"in e?e.addCommom:i(b))(o.tvl_in_usd,2)=="0.00"?0:("addCommom"in e?e.addCommom:i(b))(o.tvl_in_usd,2)?("addCommom"in e?e.addCommom:i(b))(o.tvl_in_usd,2):"--"),1)]),s("td",null,[s("div",bs,[H(V,{class:"cancel-btn",onClick:C=>e.router.push(`/swap?to=${o.address}`)},{default:x(()=>[N(d(e.$t("button.swap")),1)]),_:2},1032,["onClick"])])])]))),128))])])]),s("div",_s,[e.currentTopTokensList?(u(!0),c(q,{key:1},M(e.currentTopTokensList,o=>(u(),c("div",{key:o.address,class:"item h5-item"},[s("div",gs,[s("div",ws,[s("div",null,[Z(s("img",{onerror:e.theme=="default"?("importIcon"in e?e.importIcon:i(U))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:i(U))("/image/coins/sui-unknown.png"),alt:""},null,8,Cs),[[A,e.getCoinIcon(e.addressTokens&&e.addressTokens[o.address])]]),!("checkNullObj"in e?e.checkNullObj:i(O))(e.tokensWarningObj||{})&&!e.tokensWarningObj[o.address]?(u(),c("div",ys)):E("",!0)]),s("div",Ts,[s("div",Os,[s("p",null,d(o.symbol),1),s("span",null,d(o.name),1)]),e.tokensObj&&e.tokensObj[o.address]&&e.tokensObj[o.address].labels&&e.tokensObj[o.address].labels[0]?(u(),c("div",fs,[s("div",{class:w(["label",e.tokensObj&&e.tokensObj[o.address]&&e.tokensObj[o.address].labels&&e.tokensObj[o.address].labels[0]])},[s("span",null,d(e.tokensObj&&e.tokensObj[o.address]&&e.tokensObj[o.address].labels&&e.tokensObj[o.address].labels[0]?`${e.tokensObj[o.address].labels[0]}`:""),1)],2)])):E("",!0)])])]),s("div",js,[s("div",Ns,[s("span",null,d(e.$t("common.price")),1),s("div",$s,[s("p",null,d(o.price?"$"+(Number(o.price)>1?("addCommom"in e?e.addCommom:i(b))(("decimalUi"in e?e.decimalUi:i(W))(o.price,2)):("addCommom"in e?e.addCommom:i(b))(("decimalUi"in e?e.decimalUi:i(W))(o.price,4))):"--"),1)])]),s("div",As,[s("span",null,d(e.$t("newAdd.priceChange")),1),s("p",{class:w(o.price_rate_24h.includes("-")?"redecue-change-price":"add-change-price")},d(o.price_rate_24h),3)]),s("div",Ss,[s("span",null,d(e.$t("common.volume24h")),1),s("p",null," $"+d(("addCommom"in e?e.addCommom:i(b))(o.vol_in_usd_24h,2)=="0.00"?0:("addCommom"in e?e.addCommom:i(b))(o.vol_in_usd_24h,2)),1)]),s("div",Ls,[s("span",null,d(e.$t("common.tvl")),1),s("p",null," $"+d(("addCommom"in e?e.addCommom:i(b))(o.tvl_in_usd,2)=="0.00"?0:("addCommom"in e?e.addCommom:i(b))(o.tvl_in_usd,2)),1)])]),s("div",Us,[H(V,{class:"cancel-btn",onClick:C=>e.router.push(`/swap?to=${o.address}`)},{default:x(()=>[N(d(e.$t("button.swap")),1)]),_:2},1032,["onClick"])])]))),128)):(u(),c("div",ks,[H(g,{loading:!0,type:"statsPoolH5"})]))]),s("div",Vs,[H(L,{current:e.currentTokens,"onUpdate:current":m[6]||(m[6]=o=>e.currentTokens=o),"page-size":(e.isPc,10),simple:"",total:e.isAll?e.topTokensList.length:e.topTokensList.length>20?20:e.topTokensList.length,onChange:e.onChangeTokens},null,8,["current","page-size","total","onChange"])])],2)}const Fs=Te(Le,[["render",Hs],["__scopeId","data-v-0994572d"]]);export{Fs as T};
