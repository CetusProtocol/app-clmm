import{_ as u,S as L,j as N,a as B,u as M,ak as O,al as E,am as m}from"./pool.3ed98032.js";import{$ as W,m as P,L as w,a0 as x}from"./entry.927fc72a.js";function _(o){const c={fullRpcUrl:localStorage.getItem(`${o}-currentRpc`)||u[o||"Sui"].fullRpcUrl,faucetURL:localStorage.getItem(`${o}-currentRpc`)||u[o||"Sui"].faucetURL,faucet_router:u[o||"Sui"].faucet_router,simulationAccount:u[o||"Sui"].simulationAccount,token:u[o||"Sui"].token,clmm:u[o||"Sui"].clmm,launchpad:u[o||"Sui"].launchpad,xwhale:u[o||"Sui"].xwhale},e=W(new L(c)),n=N(),r=P(()=>n);w(()=>{r.value.address&&(e.senderAddress=r.value.address,e.gasConfig=c.gasConfig)});const d=t=>({transactionBlock:t,options:{showEffects:!0,showEvents:!0,showInput:!0,showRawInput:!0,showObjectChanges:!0,showBalanceChanges:!0}}),C=B();P(()=>C);const k=M();P(()=>k),w(()=>{r.value.address&&(e.senderAddress=r.value.address)});const A=async t=>{t.setSenderIfNotSet(r.value.address);const a=await t.build({provider:e._fullClient});return await e.fullClient.dryRunTransactionBlock({transactionBlock:a})},I=async()=>await e.Launchpad.getPools([]),S=async t=>await e.Launchpad.getPool(t),T=async(t,a)=>{const s=await e.Launchpad.getOwnerLaunchpadCoins(a,e.Launchpad.buildLaunchpadCoinType(t.coin_type_sale,t.coin_type_raise));return E.calculateTotalBalance(s).toString()},b=async(t,a)=>{const s=a||await e.Launchpad.getPools(),i=[],p=await e.Launchpad.getPurchaseMarks(t);return s.forEach(h=>{for(const y of p)if(y.pool_id===h.pool_address){i.push(h);break}}),i},v=async(t,a)=>{const s=a||await e.Launchpad.getPools(),i=[];return s.forEach(p=>{p.recipient===t&&i.push(p)}),i},U=async t=>{const a=new L(c);a.senderAddress=r.value.address,a.gasConfig=c.gasConfig;const s=await a.Launchpad.creatPurchasePayload({pool_address:t.pool.pool_address,purchase_amount:t.amount,coin_type_sale:t.pool.coin_type_sale,coin_type_raise:t.pool.coin_type_raise});return d(s)},R=async t=>{const a=await e.Launchpad.creatClaimPayload({pool_address:t.pool.pool_address,coin_type_sale:t.pool.coin_type_sale,coin_type_raise:t.pool.coin_type_raise});return d(a)},f=async t=>{if(t.pool_status!=="Settle")throw new Error("The pool is not in settle ");let a=null,s=!1;const i=await e.Pool.getPoolImmutables();for(const l of i){if(l.coinTypeA===t.coin_type_sale&&l.coinTypeB===t.coin_type_raise&&Number(l.tickSpacing)===t.tick_spacing){a=await e.Pool.getPool(l.poolAddress);break}if(l.coinTypeA===t.coin_type_raise&&l.coinTypeB===t.coin_type_sale&&Number(l.tickSpacing)===t.tick_spacing){a=await e.Pool.getPool(l.poolAddress),s=!0;break}}const p=await e.Token.getTokenListByCoinTypes([t.coin_type_raise,t.coin_type_sale]),h=p[t.coin_type_sale].decimals,y=p[t.coin_type_raise].decimals;let g;if(t.liquidity_rate>0&&a===null)throw new Error("not found clmmPool ");if(a&&t.liquidity_rate>0)try{g=await e.Launchpad.creatSettlePayload({pool_address:t.pool_address,coin_type_sale:t.coin_type_sale,coin_type_raise:t.coin_type_raise,clmm_args:{current_price:t.current_price,clmm_pool_address:a.poolAddress,clmm_sqrt_price:a.current_sqrt_price.toString(),opposite:s,sale_decimals:h,raise_decimals:y}})}catch{}else g=await e.Launchpad.creatSettlePayload({pool_address:t.pool_address,coin_type_sale:t.coin_type_sale,coin_type_raise:t.coin_type_raise});return g};return{getPoolConfigs:async()=>await e.Launchpad.getPoolConfigs(!0),getLockNFTList:async t=>{if(t.pool_status=="Ended")return await e.Launchpad.getLockNFTList(t.pool_type,t.recipient)},beforeSettle:f,simulate:A,TickUtil:O,getCmmPoolAddress:async t=>{let a=null;const s=await e.Pool.getPoolImmutables();for(const i of s){if(i.coinTypeA===t.coin_type_sale&&i.coinTypeB===t.coin_type_raise&&Number(i.tickSpacing)==Number(t.tick_spacing)){a=await e.Pool.getPool(i.poolAddress);break}if(i.coinTypeA===t.coin_type_raise&&i.coinTypeB===t.coin_type_sale&&Number(i.tickSpacing)==Number(t.tick_spacing)){a=await e.Pool.getPool(i.poolAddress);break}}return a||null},getMyCommittedCoinAsset:T,getLaunchpadAllPools:I,getLaunchpadPoolInfo:S,getJoinPools:b,getOwnerPools:v,getCreatPurchasePayload:U,getCreatClaimPayload:R,getCreatSettlePayload:async t=>{const a=await f(t);return d(a)},getCreatWithdrawParams:async t=>{const a=e.Launchpad.creatWithdrawPayload({pool_address:t.pool.pool_address,coin_type_sale:t.pool.coin_type_sale,coin_type_raise:t.pool.coin_type_raise,sale_amount:t.sale_amount,raise_amount:t.raise_amount});return d(a)},getIsWhiteListUser:async(t,a)=>{var i;return await e.Launchpad.isWhiteListUser((i=t.white_summary)==null?void 0:i.white_handle,a)},getCreatUnlockNftPayload:async(t,a)=>{if(t.pool_status=="Ended"){if(a){const s=e.Launchpad.creatUnlockNftPayload({lock_nft:a.lock_nft_id,nft_type:a.nft_type});return d(s)}}else throw new Error("The pool is not in Ended  ")},getLockNFT:async t=>{if(t.pool_status=="Ended"){const a=await e.Launchpad.getLockNFTEvent(t.pool_type,t.tick_spacing,t.recipient);if(a){const s=await e.Launchpad.getLockNFT(a.lock_nft_id);return{lockNftEvent:a,lockNftInfo:s}}}return null},getIsAdminCap:async t=>await e.Launchpad.isAdminCap(t),getPurchaseMark:async(t,a)=>await e.Launchpad.getPurchaseMarks(t,[a]),getPurchaseAmountVal:async(t,a)=>await e.Launchpad.getPurchaseAmount(a.white_summary.white_handle,t),getUnusedRaiseAmount:async t=>await m.getHistoryWithdrawRaise(e,t),getUnusedSaleAmount:async t=>await m.getHistoryWithdrawSale(e,t),getCoinInfo:async(t,a)=>await e.Token.getTokenListByCoinTypes([t,a])}}const et=x("launchpad",{state:()=>({currentLaunchpadPoolInfo:{},launchpadAllPools:[],launchpadOwnerAllPools:[],launchpadJoinPools:[],haveLaunchpad:!1,launchpadPoolsLoading:!0,getOwnDateLoading:!0,ownIsWhiteList:!1,committedCoinAssetCount:"0",currentPoolNumData:{},idoPoolConfigInfo:{},purchaseMark:{},settlePayTokenAInfo:{},settlePayTokenBInfo:{},getPurchaseAmountLoading:!0,currentTab:"latest"}),actions:{async setSettlePayTokenAInfo(o){this.settlePayTokenAInfo=o},async setSettlePayTokenBInfo(o){this.settlePayTokenBInfo=o},async setGetPurchaseAmountLoading(o){this.getPurchaseAmountLoading=o},async setPurchaseMark(o){this.purchaseMark=o},async setGetOwnDateLoading(o){this.getOwnDateLoading=o},async setCurrentLaunchpadPoolInfo(o){this.currentLaunchpadPoolInfo=o},async setCurrentTab(o){this.currentTab=o},async setCurrentPoolNumData(o){this.currentPoolNumData=o},async setOwnIsWhiteList(o){this.ownIsWhiteList=o},async setMyCountCommittedCoinAsset(o){this.committedCoinAssetCount=o},async setLaunchpadPoolsLoading(o){this.launchpadPoolsLoading=o},async setLaunchpadAllPools(){this.launchpadAllPools=[],this.setLaunchpadPoolsLoading(!0);const c=await _("Sui").getLaunchpadAllPools()||[];this.launchpadAllPools=c.sort((e,n)=>n.activity_end_time-e.activity_end_time),this.setLaunchpadPoolsLoading(!1)},async setLaunchpadAllPoolsNoLoading(){const c=await _("Sui").getLaunchpadAllPools()||[];this.launchpadAllPools=c.sort((e,n)=>n.activity_end_time-e.activity_end_time)},async getCurrentLaunchpadPoolInfo(o){this.setGetPurchaseAmountLoading(!0);const c=_("Sui"),e=await c.getLaunchpadPoolInfo(o)||{},n=await c.getCoinInfo(e.coin_type_raise,e.coin_type_sale);this.currentLaunchpadPoolInfo={raiseCoinInfo:{logoURI:n[e.coin_type_raise].logo_url,...n[e.coin_type_raise]},saleCoinInfo:{logoURI:n[e.coin_type_sale].logo_url,...n[e.coin_type_sale]},...e},this.setGetOwnDateLoading(!1)},async getCurrentLaunchpadPoolInfoNoLoading(o){const c=_("Sui"),e=await c.getLaunchpadPoolInfo(o)||{},n=await c.getCoinInfo(e.coin_type_raise,e.coin_type_sale);this.currentLaunchpadPoolInfo={raiseCoinInfo:{logoURI:n[e.coin_type_raise].logo_url,...n[e.coin_type_raise]},saleCoinInfo:{logoURI:n[e.coin_type_sale].logo_url,...n[e.coin_type_sale]},...e}},async setLaunchpadJoinPools(o){this.setLaunchpadPoolsLoading(!0);const e=await _("Sui").getJoinPools(o)||[];e.length<1?this.setLaunchpadPoolsLoading(!1):(this.launchpadJoinPools=e.sort((n,r)=>r.activity_end_time-n.activity_end_time),this.setLaunchpadPoolsLoading(!1))},async setLaunchpadOwnerAllPools(o,c){const n=await _("Sui").getOwnerPools(o,c)||[];n.length<1?this.haveLaunchpad=!1:(this.launchpadOwnerAllPools=n.sort((r,d)=>d.activity_end_time-r.activity_end_time),this.haveLaunchpad=!0)},async getIdoPoolConfigInfo(){const c=await _("Sui").getPoolConfigs(),e={};c.map((n,r)=>{e[n.pool_address]=n}),this.idoPoolConfigInfo=e||{}}}});export{_ as a,et as u};
