import{a7 as W}from"./entry.8244466d.js";import{u as Y,T as R,e as Q,m as V}from"./pool.daa43b66.js";import{D as r}from"./decimal.0bdeb344.js";import{c as Z}from"./sha256.723c3cf0.js";const ro=W("farms",{state:()=>({farmsPoolList:[],farmsPoolObj:{},farmsPoolListLoading:!1,cmmPoolInfoObj:{},farmsPositionObj:{},farmsLoadingObj:{},farmsUserUsd:{},farmsRewardObj:{},farmsPositionList:[],farmsAllPositionLoading:!1,myFarmsPoolList:[]}),getters:{getPoolStore(){return Y()}},actions:{async getFarmsPoolList(S){S||(this.farmsPoolListLoading=!0);try{const{data:l}=await fetch(`${Z.Sui.api}/v2/sui/swap/count`).then(t=>t.json()),_=l.pools.filter(t=>t.stable_farming).map(t=>{var A,s,o;let g=0;const L=t.coin_a.decimals,e=t.coin_b.decimals,n=R.tickIndexToPrice(t.stable_farming.effective_tick_lower,L,e).toString(),c=R.tickIndexToPrice(t.stable_farming.effective_tick_upper,L,e).toString();let a=[];t.rewarder&&t.rewarder.rewarder_coin&&t.rewarder.rewarder_coin.length>0&&(a=(s=(A=t.rewarder)==null?void 0:A.rewarder_coin)==null?void 0:s.map((i,d)=>({...i,amountDay:new r(i.amount_second).mul(new r(60*60*24)).toNumber(),rewarder_display:t.rewarder[`rewarder_display${d+1}`],rewarderApr:i.apr.replace("%","")})));let p=!1;t.stable_farming&&t.stable_farming.stable_rewarder.map(i=>{i.amount_second>0&&(p=!0)});const h=[];t.stable_farming.stable_rewarder.forEach(i=>{g+=Number(i.amount_second),i.amount_second>0&&h.push({emission_per_day:new r(i.amount_second).mul(60*60*24).toDP(2,r.ROUND_HALF_UP),reward_coin:i.coin=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"?"0x2::sui::SUI":i.coin,symbol:i.symbol,allocate_point:Number(i.amount_second)>0?1:0})});const m=t.apr_24h.replace("%",""),u=t.rewarder&&t.rewarder.apr.replace("%","")||0;return{...t,clmm_pool_id:t.swap_account,effective_tick_lower:t.stable_farming.effective_tick_lower,effective_tick_upper:t.stable_farming.effective_tick_upper,fee:t.fee*100+"%",id:t.stable_farming.stable_farming_pool,rewarders:h,status:g>0?"Live":"Ended",minPrice:n,maxPrice:c,coinA:t.coin_a,coinB:t.coin_b,stableFarmingApr:t.stable_farming&&t.stable_farming.apr*100,rewarder:{...t.rewarder,rewardList:a},isStableFarming:p,is_display_rewarder:(o=t==null?void 0:t.rewarder)==null?void 0:o.is_display_rewarder,aprTotal:Number(m)+Number(u),apr:t.apr_24h.replace("%",""),clmmApr:Number(m)+Number(u)}});this.farmsPoolList=_,this.farmsPoolObj=Object.fromEntries(_.map(t=>[t.clmm_pool_id,{...t,address:t.clmm_pool_id}])),this.farmsPoolListLoading=!1}catch{const _=await Q("Sui").getLpList(),t=Object.fromEntries(_.map((n,c)=>[n.address,n])),e=(await V("Sui").getFramsPoolList()).map(n=>{const c=t[n.clmm_pool_id];let a=0;const{tokensObj:p}=this.getPoolStore,h=n.rewarders.map(o=>{const i=o.reward_coin=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"?"0x2::sui::SUI":o.reward_coin,d=p[i].decimals,P=p[i].symbol;a=a+Number(o.allocate_point);const N=new r(o.allocate_point).div(new r(o.total_allocate_point));return{...o,reward_coin:i,emission_per_day:Number(o.allocate_point)>0?new r(o.emission_per_second).mul(N).div(Math.pow(10,12)).mul(60*60*24).div(Math.pow(10,d)).toString():"0",symbol:P}}),m=c.coinA.decimals,u=c.coinB.decimals,A=R.tickIndexToPrice(n.effective_tick_lower,m,u).toString(),s=R.tickIndexToPrice(n.effective_tick_upper,m,u).toString();return{...n,minPrice:A,maxPrice:s,fee:c.fee*100+"%",coinA:c.coinA,coinB:c.coinB,rewarders:h,status:a>0?"Live":"Ended",stable_farming:{apr:0,tvl:0},coin_a:c.coinA,coin_b:c.coinB}});this.farmsPoolList=e,this.farmsPoolObj=Object.fromEntries(e.map(n=>[n.clmm_pool_id,{...n,address:n.clmm_pool_id}])),this.cmmPoolInfoObj=t,this.farmsPoolListLoading=!1}},async getPositionByPool(S,l,f){var A,s;this.farmsLoadingObj[l]=!0;const _=Q("Sui"),g=await V("Sui").getOwnedFramsPositionNFTList([this.farmsPoolObj[l].id],!0),L=g==null?void 0:g.filter(o=>o.clmm_pool_id==l),e=await _.getPositionList(S,{address:{address:l}})||[],n=L.concat(e),c={},a={},p=[],h=await _.getPool(l);for(let o=0;o<n.length;o++){const i=n[o],d=this.farmsPoolObj[i.clmm_pool_id||i.pool],P=d.coinA.decimals,N=d.coinB.decimals;let b,v;i.tick_lower_index==_.TickUtil.getMinIndex(Number(d.tick_spacing))?b="0":b=_.TickMath.tickIndexToPrice(Number(i.tick_lower_index),P,N).toString(),i.tick_upper_index==_.TickUtil.getMaxIndex(Number(d.tick_spacing))?v="∞":v=_.TickMath.tickIndexToPrice(Number(i.tick_upper_index),P,N).toString();let E;const O=R.sqrtPriceX64ToPrice(h.current_sqrt_price,P,N).toString();Number(O)>=Number(b)&&(v==="∞"||Number(O)<=Number(v))?E="Active":(Number(O)>Number(v)||Number(O)<Number(b))&&(E="Inactive");const U=_.getCoinAmountFromLiquidity({pool:h,position:i,roundUp:!1}),{RATES:y,tokensObj:H}=this.getPoolStore,C=((A=y[d.coin_a.address])==null?void 0:A.price)||"",D=((s=y[d.coin_a.address])==null?void 0:s.price)||"",M=new r(U.coinaAmount).div(Math.pow(10,P)),T=new r(U.coinbAmount).div(Math.pow(10,N)),k=new r(U.coinaAmount).div(Math.pow(10,P)).mul(C),B=new r(U.coinbAmount).div(Math.pow(10,N)).mul(D);let q=new r(0);const I=this.farmsPoolObj[i.clmm_pool_id],G=[];i.rewards&&i.rewards.length>0?(i.rewards.forEach((w,z)=>{var $;const F=w.rewarder_type=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"?"0x2::sui::SUI":w.rewarder_type,J=H[F],K=(($=y[F])==null?void 0:$.price)||0,X=new r(w.rewarder_amount).div(new r(Math.pow(10,J.decimals))),j=X.mul(new r(K));a[i.clmm_pool_id]&&a[i.clmm_pool_id][i.id]?a[i.clmm_pool_id][i.id]=a[i.clmm_pool_id][i.id].add(j):a[i.clmm_pool_id]&&!a[i.clmm_pool_id][i.id]?(a[i.clmm_pool_id][i.id]={},a[i.clmm_pool_id][i.id]=j):(a[i.clmm_pool_id]={},a[i.clmm_pool_id][i.id]={},a[i.clmm_pool_id][i.id]=j),q=q.add(j),(I.rewarders[z]||w.rewarder_amount>0)&&G.push({...w,rewarderAmount:X.toString(),rewarderAmountUsd:j.toString(),rewarderType:F})}),i.rewards=G):(i.rewards=[],this.farmsRewardObj[i.clmm_pool_id]={});let x;if(i.id){const w=k.add(B);c[i.clmm_pool_id]||(c[i.clmm_pool_id]={}),c[i.clmm_pool_id][i.id]=w}p.push({...i,minPrice:b,maxPrice:v,positionUSD:k.add(B).toNumber(),clmmPool:i.clmm_pool_id||i.pool,positionStatus:E,positionSource:i.creator?"clmm":"farming",farmsPoolId:f,coinA:d.coinA,coinB:d.coinB,positionShare:x,amountAUsd:k,amountBUsd:B,amountA:M,amountB:T,positionRewardAmount:q})}const m={};Object.keys(a).forEach(o=>{m[o]={},m[o].amountUsd=new r(0),typeof a[o]=="object"&&Object.keys(a[o]).forEach(i=>{m[o].amountUsd=m[o].amountUsd.add(a[o][i])})});const u={};Object.keys(c).forEach(o=>{u[o]={},u[o].amount=new r(0),u[o].positionNum=0,typeof c[o]=="object"&&Object.keys(c[o]).forEach(i=>{u[o].amount=u[o].amount.add(c[o][i]),u[o].positionNum+=1})}),this.farmsRewardObj[l]={},this.farmsRewardObj={...this.farmsRewardObj,...m},this.farmsUserUsd[l]={},this.farmsUserUsd={...this.farmsUserUsd,...u},this.farmsPositionObj[l]=p,this.farmsLoadingObj[l]=!1,this.getMyFarms()},async getPositionByAllPool(S){var u,A;this.farmsAllPositionLoading=!0;const l=V("Sui"),f=Q("Sui"),_=await l.getOwnedFramsPositionNFTList([],!0),t=await f.getPositionList(S,this.farmsPoolObj)||[],g=_.concat(t),L=[],e={},n={},c=g.map(s=>s.clmm_pool_id||s.pool),a=await f.getPools(Array.from(new Set(c)));for(let s=0;s<g.length;s++){const o=g[s],i=a.filter(x=>x.poolAddress==o.clmm_pool_id||x.poolAddress==o.pool)[0],d=f.getCoinAmountFromLiquidity({pool:i,position:o,roundUp:!1}),{RATES:P,tokensObj:N}=this.getPoolStore,b=this.farmsPoolObj[o.clmm_pool_id||o.pool],v=((u=P[b.coin_a.address])==null?void 0:u.price)||"",E=((A=P[b.coin_b.address])==null?void 0:A.price)||"",O=b.coin_a.decimals,U=b.coin_b.decimals,y=new r(d.coinaAmount).div(Math.pow(10,O)),H=new r(d.coinbAmount).div(Math.pow(10,U)),C=new r(d.coinaAmount).div(Math.pow(10,O)).mul(v),D=new r(d.coinbAmount).div(Math.pow(10,U)).mul(E);let M,T;o.tick_lower_index==f.TickUtil.getMinIndex(Number(b.tick_spacing))?M="0":M=f.TickMath.tickIndexToPrice(Number(o.tick_lower_index),O,U).toString(),o.tick_upper_index==f.TickUtil.getMaxIndex(Number(b.tick_spacing))?T="∞":T=f.TickMath.tickIndexToPrice(Number(o.tick_upper_index),O,U).toString();let k;const B=R.sqrtPriceX64ToPrice(i.current_sqrt_price,O,U).toString();Number(B)>=Number(M)&&(T==="∞"||Number(B)<=Number(T))?k="Active":(Number(B)>Number(T)||Number(B)<Number(M))&&(k="Inactive");let q;if(o.id){const x=C.add(D);n[o.clmm_pool_id]||(n[o.clmm_pool_id]={}),n[o.clmm_pool_id][o.id]=x}let I=new r(0);const G=[];if(o.rewards&&o.rewards.length>0){const x=this.farmsPoolObj[o.clmm_pool_id];o.rewards.forEach((w,z)=>{var $;const F=w.rewarder_type=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"?"0x2::sui::SUI":w.rewarder_type,J=N[F],K=(($=P[F])==null?void 0:$.price)||0,X=new r(w.rewarder_amount).div(new r(Math.pow(10,J.decimals))),j=X.mul(new r(K));e[o.clmm_pool_id]&&e[o.clmm_pool_id][o.id]?e[o.clmm_pool_id][o.id]=e[o.clmm_pool_id][o.id].add(j):e[o.clmm_pool_id]&&!e[o.clmm_pool_id][o.id]?(e[o.clmm_pool_id][o.id]={},e[o.clmm_pool_id][o.id]=j):(e[o.clmm_pool_id]={},e[o.clmm_pool_id][o.id]={},e[o.clmm_pool_id][o.id]=j),I=I.add(j),(x.rewarders[z]||w.rewarder_amount>0)&&G.push({...w,rewarderAmount:X.toString(),rewarderAmountUsd:j.toString(),rewarderType:F})}),o.rewards=G}else o.rewards=[],this.farmsRewardObj[o.clmm_pool_id]={};L.push({...o,minPrice:M,maxPrice:T,positionUSD:C.add(D).toNumber(),clmmPool:o.clmm_pool_id||o.pool,positionStatus:k,positionSource:o.creator?"clmm":"farming",farmsPoolId:o.pool_id,coinA:b.coinA,coinB:b.coinB,soucrce:o.id?"farming":"clmm",positionShare:q,amountAUsd:C.toString(),amountBUsd:D.toString(),amountA:y.toString(),amountB:H.toString(),positionRewardAmount:I})}this.farmsPositionList=L;const p={};L.forEach(s=>{p[s.clmm_pool_id||s.pool]||(p[s.clmm_pool_id||s.pool]=[]),p[s.clmm_pool_id||s.pool].push(s)}),this.farmsPositionObj=p,this.farmsAllPositionLoading=!1;const h={};Object.keys(e).forEach(s=>{h[s]={},h[s].amountUsd=new r(0),typeof e[s]=="object"&&Object.keys(e[s]).forEach(o=>{h[s].amountUsd=h[s].amountUsd.add(e[s][o])})});const m={};Object.keys(n).forEach(s=>{m[s]={},m[s].amount=new r(0),m[s].positionNum=0,typeof n[s]=="object"&&Object.keys(n[s]).forEach(o=>{m[s].amount=m[s].amount.add(n[s][o]),m[s].positionNum+=1})}),this.farmsRewardObj=h,this.farmsUserUsd=m,this.getMyFarms()},getMyFarms(){const S=[];this.farmsPoolList.forEach(l=>{const f=this.farmsPositionObj[l.clmm_pool_id]&&this.farmsPositionObj[l.clmm_pool_id].filter(_=>_.positionSource=="farming");f&&f.length>0&&S.push(l)}),this.myFarmsPoolList=S},setFarmsLoadingObj(S){this.farmsLoadingObj[S]=!0},logOut(){this.farmsPositionObj={},this.farmsUserUsd={},this.farmsRewardObj={},this.farmsPositionList=[],this.farmsAllPositionLoading=!1,this.myFarmsPoolList=[]}}});export{ro as u};
