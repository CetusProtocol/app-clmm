import{S as b,f as N,am as u,s as d,D as c}from"./pool.19b8b8ea.js";import{_ as l}from"./index.e30d2a8b.js";import{a1 as L,m as F,O as V}from"./entry.9e5ce800.js";function B(r){const i={fullRpcUrl:localStorage.getItem(`${r}-currentRpc`)||l[r||"Sui"].fullRpcUrl,faucetURL:localStorage.getItem(`${r}-currentRpc`)||l[r||"Sui"].faucetURL,simulationAccount:l[r||"Sui"].simulationAccount,xcetus:l[r||"Sui"].xcetus};console.log("defaultNetworkOptions####",i);const o=L(new b(i)),m=N(),g=F(()=>m);V(()=>{g.value.address&&(o.senderAddress=g.value.address)}),console.log(o.senderAddress,"===>sdk.senderAddress");const w=async t=>{const e=await o.XCetusModule.getOwnerLockCetuss(t);return console.log(e,"===>lockWhales"),e},y=async(t,e)=>{const n=u.getAvailableXCetus(t,e);return console.log(n,"==>availableXwhale"),n},C=async t=>{const e=await o.XCetusModule.getOwnerCetusCoins(t);return console.log(e,"===>coins"),e},M=async t=>await o.XCetusModule.getOwnerVeNFT(t),v=async(t,e)=>{const n={amount:t};e&&(n.venft_id=e);const s=await o.XCetusModule.convertPayload(n);return a(s)},f=async()=>{const t=await o.XCetusModule.mintVeNFTPayload();return a(t)},X=async(t,e)=>{const n=await o.XCetusModule.redeemNum(t,e);return console.log(n,"result===>"),{amountOut:n.amountOut,percent:d(new c(n.percent).mul(new c(100)).toString(),2)}},p=async(t,e)=>{const n=await o.XCetusModule.reverseRedeemNum(t,e);return{amountOut:n.amountOut,percent:d(new c(n.percent).mul(new c(100)).toString(),2)}},k=async(t,e,n)=>{const s=await o.XCetusModule.redeemLockPayload({venft_id:e,amount:t,lock_day:n});return console.log(s,"tx===>"),a(s)},x=t=>u.getLockingCetuss(t),S=async(t,e)=>{const n=await o.XCetusModule.getLockCetus(t);if(n&&u.isLocked(n)){const s=o.XCetusModule.cancelRedeemPayload({venft_id:e,lock_id:t});return a(s)}},D=async(t,e)=>{const n=await o.XCetusModule.getLockCetus(t);if(n&&!u.isLocked(n)){const s=await o.XCetusModule.redeemPayload({venft_id:e,lock_id:t});return a(s)}},P=async()=>{const t=await o.XCetusModule.getDividendManager();console.log("dividendManager:",t);const e=Number(u.getNextStartTime(t).toString());return console.log(e,"===>nextStartTime"),{nextStartTime:e,...t}},T=async(t,e)=>{const n=await o.XCetusModule.getVeNFTDividendInfo(e.venft_dividends.id,t);return{rewards:n&&n.rewards||[]}},h=async t=>{const e=await o.XCetusModule.getDividendManager();if(console.log("dividendManager: ",e),e.bonus_types.length>0){const n=await o.XCetusModule.redeemDividendPayload(t,e.bonus_types);return a(n)}},O=async t=>{const e=await o.XCetusModule.getDividendManager();if(console.log("dividendManager: ",e),e.bonus_types.length>0){const n=await o.XCetusModule.redeemDividendV2Payload(t,e.bonus_types);return a(n)}},R=async t=>{const e=await o.XCetusModule.getOwnerVeNFT(t);if(console.log("nfts: ",e),e){const n=await o.XCetusModule.getXcetusManager();console.log("xcetusManager: ",n);const s=new c(e.xcetus_balance).div(n.treasury).mul(100).toString();return console.log("rate: ",s),Number(s)>0&&Number(s)<.01?"<0.01":d(s,2)}else return 0},a=t=>({transactionBlock:t,options:{showEffects:!0,showEvents:!0,showInput:!0,showRawInput:!0,showObjectChanges:!0,showBalanceChanges:!0}});return{getOwnerLockCetuss:w,getOwnerCetusCoins:C,getOwnerVeNFT:M,depositCetus:v,getMintVeNFTPayload:f,redeemNum:X,getRedeemLockPayload:k,getAvailableXCetus:y,getLockingCetuss:x,getCancelRedeemPayload:S,getVeNFTDividendInfo:T,reverseRedeemNum:p,getRedeemPayload:D,getRedeemDividendPayload:h,getMyShare:R,getDividendManager:P,getPeriod:t=>{const e=Date.now()/1e3,{start_time:n,interval_day:s}=t,_=Math.ceil((e-n)/(s*24*3600));return console.log(e,"===>currentTime"),console.log(n,"===>start_time"),console.log(e-n,"===>currentTime-start_time"),console.log((e-n)/(s*60),"(currentTime - start_time) / (interval_day * 60)"),_},getRedeemDividendV2Payload:O}}export{B as u};
