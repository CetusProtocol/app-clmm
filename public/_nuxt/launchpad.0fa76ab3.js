import{C,L as w}from"./index.95abf299.js";import{v as S,u as O,af as B}from"./pool.57f03307.js";import{c as l,a as M,u as W}from"./index.bd5ac2dd.js";import{a0 as x,m as f,O as E,a1 as N}from"./entry.3bca6f6c.js";function p(e){const i={launchpad:l[e||"Sui"].launchpad,xcetus:l[e||"Sui"].xcetus,booster:l[e||"Sui"].booster,maker_bonus:l[e||"Sui"].maker_bonus},n={fullRpcUrl:localStorage.getItem(`${e}-currentRpclocal`)||l[e||"Sui"].fullRpcUrl,faucetURL:localStorage.getItem(`${e}-currentRpclocal`)||l[e||"Sui"].faucetURL,faucet:l[e||"Sui"].faucet,simulationAccount:l[e||"Sui"].simulationAccount,cetus_config:l[e||"Sui"].cetus_config,clmm:l[e||"Sui"].clmm},s=new S(n),a=x(new C(i,s)),g=M(),_=f(()=>g);E(()=>{_.value.address&&(a.ClmmSDK.senderAddress=_.value.address)});const k=()=>{const t=new S(n);return new C(i,t)},h=t=>({transactionBlock:t,options:{showEffects:!0,showEvents:!0,showInput:!0,showRawInput:!0,showObjectChanges:!0,showBalanceChanges:!0}}),A=W();f(()=>A);const I=O();f(()=>I);const T=async t=>{t.setSenderIfNotSet(_.value.address);const o=await t.build({provider:a.ClmmSDK.fullClient});return await a.ClmmSDK.fullClient.dryRunTransactionBlock({transactionBlock:o})},b=async()=>await a.Launchpad.getPools([]),D=async t=>await a.Launchpad.getPool(t),U=async(t,o)=>{const r=o||await a.Launchpad.getPools(),c=[],d=await a.Launchpad.getPurchaseMarks(t);return r.forEach(y=>{for(const m of d)if(m.pool_id===y.pool_address){c.push(y);break}}),c},v=async(t,o)=>{const r=o||await a.Launchpad.getPools(),c=[];return r.forEach(d=>{d.recipient===t&&c.push(d)}),c},R=async t=>{const o=k();o.ClmmSDK.senderAddress=_.value.address;const r=await o.Launchpad.creatPurchasePayload({pool_address:t.pool.pool_address,purchase_amount:t.amount,coin_type_sale:t.pool.coin_type_sale,coin_type_raise:t.pool.coin_type_raise});return h(r)},K=async t=>{const o=await a.Launchpad.creatClaimPayload({pool_address:t.pool.pool_address,coin_type_sale:t.pool.coin_type_sale,coin_type_raise:t.pool.coin_type_raise});return h(o)},L=async t=>{if(t.pool_status!=="Settle")throw new Error("The pool is not in settle ");let o=null,r=!1;const c=await a.ClmmSDK.Pool.getPoolImmutables();for(const u of c){if(u.coinTypeA===t.coin_type_sale&&u.coinTypeB===t.coin_type_raise&&Number(u.tickSpacing)===t.tick_spacing){o=await a.ClmmSDK.Pool.getPool(u.poolAddress);break}if(u.coinTypeA===t.coin_type_raise&&u.coinTypeB===t.coin_type_sale&&Number(u.tickSpacing)===t.tick_spacing){o=await a.ClmmSDK.Pool.getPool(u.poolAddress),r=!0;break}}const d=await a.ClmmSDK.CetusConfig.getTokenListByCoinTypes([t.coin_type_raise,t.coin_type_sale]),y=d[t.coin_type_sale].decimals,m=d[t.coin_type_raise].decimals;let P;if(t.liquidity_rate>0&&o===null)throw new Error("not found clmmPool ");if(o&&t.liquidity_rate>0)try{P=await a.Launchpad.creatSettlePayload({pool_address:t.pool_address,coin_type_sale:t.coin_type_sale,coin_type_raise:t.coin_type_raise,clmm_args:{current_price:t.current_price,clmm_pool_address:o.poolAddress,clmm_sqrt_price:o.current_sqrt_price.toString(),opposite:r,sale_decimals:y,raise_decimals:m}})}catch{}else P=await a.Launchpad.creatSettlePayload({pool_address:t.pool_address,coin_type_sale:t.coin_type_sale,coin_type_raise:t.coin_type_raise});return P};return{getPoolConfigs:async()=>await a.ClmmSDK.CetusConfig.getLaunchpadPoolConfigs(),getLockNFTList:async t=>{if(t.pool_status=="Ended")return await a.Launchpad.getLockNFTList(t.pool_type,t.recipient)},beforeSettle:L,simulate:T,TickUtil:B,getCmmPoolAddress:async t=>{let o=null;const r=await a.ClmmSDK.Pool.getPoolImmutables();for(const c of r){if(c.coinTypeA===t.coin_type_sale&&c.coinTypeB===t.coin_type_raise&&Number(c.tickSpacing)==Number(t.tick_spacing)){o=await a.ClmmSDK.Pool.getPool(c.poolAddress);break}if(c.coinTypeA===t.coin_type_raise&&c.coinTypeB===t.coin_type_sale&&Number(c.tickSpacing)==Number(t.tick_spacing)){o=await a.ClmmSDK.Pool.getPool(c.poolAddress);break}}return o||null},getLaunchpadAllPools:b,getLaunchpadPoolInfo:D,getJoinPools:U,getOwnerPools:v,getCreatPurchasePayload:R,getCreatClaimPayload:K,getCreatSettlePayload:async t=>{const o=await L(t);return h(o)},getCreatWithdrawParams:async t=>{const o=a.Launchpad.creatWithdrawPayload({pool_address:t.pool.pool_address,coin_type_sale:t.pool.coin_type_sale,coin_type_raise:t.pool.coin_type_raise,sale_amount:t.sale_amount,raise_amount:t.raise_amount});return h(o)},getIsWhiteListUser:async(t,o)=>{var c;return await a.Launchpad.isWhiteListUser((c=t.white_summary)==null?void 0:c.white_handle,o)},getCreatUnlockNftPayload:async(t,o)=>{if(t.pool_status=="Ended"){if(o){const r=a.Launchpad.creatUnlockNftPayload({lock_nft:o.lock_nft_id,nft_type:o.nft_type});return h(r)}}else throw new Error("The pool is not in Ended  ")},getIsAdminCap:async t=>await a.Launchpad.isAdminCap(t),getPurchaseMark:async(t,o)=>await a.Launchpad.getPurchaseMarks(t,[o]),getPurchaseAmountVal:async(t,o)=>await a.Launchpad.getPurchaseAmount(o.white_summary.white_handle,t),getUnusedRaiseAmount:async t=>await w.getHistoryWithdrawRaise(a,t),getUnusedSaleAmount:async t=>await w.getHistoryWithdrawSale(a,t),getCoinInfo:async(t,o)=>await a.ClmmSDK.CetusConfig.getTokenListByCoinTypes([t,o])}}const nt=N("launchpad",{state:()=>({currentLaunchpadPoolInfo:{},launchpadAllPools:[],launchpadOwnerAllPools:[],launchpadJoinPools:[],haveLaunchpad:!1,launchpadPoolsLoading:!0,getOwnDateLoading:!0,ownIsWhiteList:!1,committedCoinAssetCount:"0",currentPoolNumData:{},idoPoolConfigInfo:{},purchaseMark:{},settlePayTokenAInfo:{},settlePayTokenBInfo:{},getPurchaseAmountLoading:!0,currentTab:"latest"}),actions:{async setSettlePayTokenAInfo(e){this.settlePayTokenAInfo=e},async setSettlePayTokenBInfo(e){this.settlePayTokenBInfo=e},async setGetPurchaseAmountLoading(e){this.getPurchaseAmountLoading=e},async setPurchaseMark(e){this.purchaseMark=e},async setGetOwnDateLoading(e){this.getOwnDateLoading=e},async setCurrentLaunchpadPoolInfo(e){this.currentLaunchpadPoolInfo=e},async setCurrentTab(e){this.currentTab=e},async setCurrentPoolNumData(e){this.currentPoolNumData=e},async setOwnIsWhiteList(e){this.ownIsWhiteList=e},async setMyCountCommittedCoinAsset(e){this.committedCoinAssetCount=e},async setLaunchpadPoolsLoading(e){this.launchpadPoolsLoading=e},async setLaunchpadAllPools(){this.launchpadAllPools=[],this.setLaunchpadPoolsLoading(!0);const i=await p("Sui").getLaunchpadAllPools()||[];this.launchpadAllPools=i.sort((n,s)=>s.activity_end_time-n.activity_end_time),this.setLaunchpadPoolsLoading(!1)},async setLaunchpadAllPoolsNoLoading(){const i=await p("Sui").getLaunchpadAllPools()||[];this.launchpadAllPools=i.sort((n,s)=>s.activity_end_time-n.activity_end_time)},async getCurrentLaunchpadPoolInfo(e){this.setGetPurchaseAmountLoading(!0);const i=p("Sui"),n=await i.getLaunchpadPoolInfo(e)||{},s=await i.getCoinInfo(n.coin_type_raise,n.coin_type_sale);this.currentLaunchpadPoolInfo={raiseCoinInfo:{logoURI:s[n.coin_type_raise].logo_url,...s[n.coin_type_raise]},saleCoinInfo:{logoURI:s[n.coin_type_sale].logo_url,...s[n.coin_type_sale]},...n},this.setGetOwnDateLoading(!1)},async getCurrentLaunchpadPoolInfoNoLoading(e){const i=p("Sui"),n=await i.getLaunchpadPoolInfo(e)||{},s=await i.getCoinInfo(n.coin_type_raise,n.coin_type_sale);this.currentLaunchpadPoolInfo={raiseCoinInfo:{logoURI:s[n.coin_type_raise].logo_url,...s[n.coin_type_raise]},saleCoinInfo:{logoURI:s[n.coin_type_sale].logo_url,...s[n.coin_type_sale]},...n}},async setLaunchpadJoinPools(e){this.setLaunchpadPoolsLoading(!0);const n=await p("Sui").getJoinPools(e)||[];n.length<1?this.setLaunchpadPoolsLoading(!1):(this.launchpadJoinPools=n.sort((s,a)=>a.activity_end_time-s.activity_end_time),this.setLaunchpadPoolsLoading(!1))},async setLaunchpadOwnerAllPools(e,i){const s=await p("Sui").getOwnerPools(e,i)||[];s.length<1?this.haveLaunchpad=!1:(this.launchpadOwnerAllPools=s.sort((a,g)=>g.activity_end_time-a.activity_end_time),this.haveLaunchpad=!0)},async getIdoPoolConfigInfo(){const i=await p("Sui").getPoolConfigs(),n={};i.map((s,a)=>{n[s.pool_address]=s}),this.idoPoolConfigInfo=n||{}}}});export{p as a,nt as u};
