import{p as u,e as m,X as f,s as p}from"./pool.2c251a50.js";import{u as c}from"./useWhale.8e3e6e91.js";import{a7 as v}from"./entry.ad8bd2bc.js";import{c as x}from"./sha256.0191632b.js";import{D as l}from"./decimal.0bdeb344.js";const A=v("xcetus",{state:()=>({venft_id:"",xWhaleBalance:"--",venftInfo:{},pendingAmount:"--",newPendingAmount:"--",whaleBalance:"--",ownerLocks:[],availableXwhale:"--",redeemingXwhale:"--",nextStartTime:"",xcetusShare:"--",pendingCoinInfo:{},newPendingCoinInfo:{},cetusApr:"",claimLoading:"",dividendManagerInfo:{},rewardCoin:{},rewardCoinAmount:"--",xcetusRewardList:[]}),actions:{async getOwnerVeNFT(t){const a=c("Sui");try{const e=await a.getOwnerVeNFT(t);e?(this.venft_id=e.id,this.xWhaleBalance=u(e.xcetus_balance,9),this.venftInfo={id:e.id,type:e.type,index:e.index,xcetus_balance:e.xcetus_balance},this.getVeNFTDividendInfo()):(this.xWhaleBalance="0",this.availableXwhale="0",this.redeemingXwhale="0",this.pendingAmount="0",this.newPendingAmount="0")}catch{this.xWhaleBalance="--",this.availableXwhale="--",this.redeemingXwhale="--",this.pendingAmount="--",this.newPendingAmount="--"}},async getVeNFTDividendInfo(){const t=c("Sui"),a=m("Sui");try{const e=await t.getVeNFTDividendInfo(this.venft_id,this.dividendManagerInfo),o=await t.getPeriod(this.dividendManagerInfo),h=await a.getTokenList(),r=[];if(e&&e.rewards&&e.rewards.length>0){for(let s=0;s<e.rewards.length;s++)if(e.rewards[s].period<o){const d=e.rewards[s].rewards;for(let n=0;n<d.length;n++){const i=d[n];Number(i.amount)>0&&r.push({...i})}}if(r&&r.length>0){const s={};for(let n=0;n<r.length;n++){const i=r[n];if(s[i.coin_type])s[i.coin_type].amount=new l(s[i.coin_type].amount).add(new l(i.amount)).toString();else{let w=h.filter(g=>f(g.address,i.coin_type))[0];w||(w=(await a.getTokenListByCoinType([i.coin_type]))[0]),s[i.coin_type]={...i,...w}}}const d=Object.values(s).map(n=>({...n,amount:p(u(n.amount,n.decimals),6)}));this.xcetusRewardList=d}else this.xcetusRewardList=[]}else this.xcetusRewardList=[]}catch{this.xcetusRewardList=[]}},async getDividendManager(){const a=await c("Sui").getDividendManager();this.nextStartTime=a.nextStartTime,this.dividendManagerInfo=a,this.getVeNFTDividendInfo()},async getAccountWhaleBalance(t){const e=await c("Sui").getOwnerCetusCoins(t);if(e&&e.length>0){let o=new l(0);e.forEach(h=>{o=o.add(u(h.balance.toString(),9))}),this.whaleBalance=o}else this.whaleBalance="0"},async getOwnerLockCetuss(t){const o=(await c("Sui").getOwnerLockCetuss(t)).sort((h,r)=>h.locked_until_time-r.locked_until_time);this.ownerLocks=o,this.setClaimLoading(""),this.getAvailableXCetus()},async getAvailableXCetus(){const a=await c("Sui").getAvailableXCetus(this.venftInfo,this.ownerLocks);this.availableXwhale=u(a,9),this.redeemingXwhale=this.xWhaleBalance!=="--"?new l(this.xWhaleBalance).sub(new l(this.availableXwhale)).toString():"--"},async getMyShare(t){const a=c("Sui");try{const e=await a.getMyShare(t);e?this.xcetusShare=Number(e)>0&&Number(e)<.01?"<0.01":e:this.xcetusShare="0"}catch{this.xcetusShare=""}},async getXcetusApr(){const{data:t}=await fetch(`${x.Sui.api}/v2/sui/storm/dividend_rewards`).then(e=>e.json()),a=t.apr&&t.apr.replace("%","");this.cetusApr=Number(a)>0&&Number(a)<.01?"<0.01":a},loginOut(){this.venft_id="",this.xWhaleBalance="--",this.venftInfo={},this.pendingAmount="--",this.whaleBalance="--",this.ownerLocks=[],this.availableXwhale="--",this.redeemingXwhale="--",this.xcetusShare="--",this.xcetusRewardList=[]},setClaimLoading(t){this.claimLoading=t}}});export{A as u};
