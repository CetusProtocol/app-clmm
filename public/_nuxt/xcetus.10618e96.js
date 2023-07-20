import{c as g,p as c,a as m,s as f,D as d}from"./pool.dabf3b56.js";import{u as i}from"./useWhale.f02d68cf.js";import{a1 as p}from"./entry.cb7a74c4.js";import{c as v}from"./sha256.1260a8a5.js";const X=p("xcetus",{state:()=>({venft_id:"",xWhaleBalance:"--",venftInfo:{},pendingAmount:"--",whaleBalance:"--",ownerLocks:[],availableXwhale:"--",redeemingXwhale:"--",nextStartTime:"",xcetusShare:"--",pendingCoinInfo:{},cetusApr:"",claimLoading:"",dividendManagerInfo:{}}),actions:{async getOwnerVeNFT(t){const a=i("Sui");try{const e=await a.getOwnerVeNFT(t);e&&!g(e)?(this.venft_id=e.id,this.xWhaleBalance=c(e.xcetus_balance,9),this.venftInfo={id:e.id,type:e.type,index:e.index,xcetus_balance:e.xcetus_balance},this.getVeNFTDividendInfo()):(this.xWhaleBalance="0",this.availableXwhale="0",this.redeemingXwhale="0",this.pendingAmount="0")}catch{this.xWhaleBalance="0",this.availableXwhale="0",this.redeemingXwhale="0",this.pendingAmount="0"}},async getVeNFTDividendInfo(){const t=i("Sui"),a=m("Sui");try{const e=await t.getVeNFTDividendInfo(this.venft_id,this.dividendManagerInfo),n=await t.getPeriod(this.dividendManagerInfo);let s=0;if(e&&e.rewards){for(let o=0;o<e.rewards.length;o++)if(e.rewards[o].period<n){const u=e.rewards[o].rewards;for(let l=0;l<u.length;l++){const h=u[l];let r=(await a.getTokenList()).filter(w=>w.address==h.coin_type)[0];r||(r=(await a.getTokenListByCoinType([h.coin_type]))[0]),this.pendingCoinInfo=r,s+=Number(c(h.amount,r.decimals))}}this.pendingAmount=f(s,6)}else this.pendingAmount="0"}catch{this.pendingAmount="0"}},async getDividendManager(){const a=await i("Sui").getDividendManager();this.nextStartTime=a.nextStartTime,this.dividendManagerInfo=a,this.getVeNFTDividendInfo()},async getAccountWhaleBalance(t){const e=await i("Sui").getOwnerCetusCoins(t);if(e&&e.length>0){let n=new d(0);e.forEach(s=>{n=n.add(c(s.balance.toString(),9))}),this.whaleBalance=n}else this.whaleBalance="0"},async getOwnerLockCetuss(t){const n=(await i("Sui").getOwnerLockCetuss(t)).sort((s,o)=>s.locked_until_time-o.locked_until_time);this.ownerLocks=n,this.setClaimLoading(""),this.getAvailableXCetus()},async getAvailableXCetus(){const a=await i("Sui").getAvailableXCetus(this.venftInfo,this.ownerLocks);this.availableXwhale=c(a,9),this.redeemingXwhale=this.xWhaleBalance!=="--"?new d(this.xWhaleBalance).sub(new d(this.availableXwhale)).toString():"--"},async getMyShare(t){const e=await i("Sui").getMyShare(t);this.xcetusShare=Number(e)>0&&Number(e)<.01?"<0.01":e},async getXcetusApr(){const{data:t}=await fetch(`${v.Sui.api}/v2/sui/storm/dividend_rewards`).then(e=>e.json()),a=t.apr&&t.apr.replace("%","");this.cetusApr=Number(a)>0&&Number(a)<.01?"<0.01":a},loginOut(){this.venft_id="",this.xWhaleBalance="--",this.venftInfo={},this.pendingAmount="--",this.whaleBalance="--",this.ownerLocks=[],this.availableXwhale="--",this.redeemingXwhale="--",this.xcetusShare="--"},setClaimLoading(t){this.claimLoading=t}}});export{X as u};
