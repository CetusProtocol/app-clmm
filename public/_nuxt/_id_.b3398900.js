import{_ as le}from"./new-position-title.88cbc8b2.js";import{_ as ue}from"./token-warning.ef8ffdad.js";import{_ as re}from"./status-block.dbedf618.js";import{_ as Yo}from"./auto-pool-apy-tips.913e5620.js";import{u as Do,g as de,a as L,d as Oo,c as lo,s as to,b as Z,p as zo,e as Go,T as bo,f as me,h as ce,V as Vo,C as Ho}from"./pool.2069f4f3.js";import{u as qo,a as Ro}from"./sha256.29b0ebac.js";import{i as $o}from"./import-icon.de3e6c66.js";import{u as No,a as Zo}from"./autoPool.09b54540.js";import{a as ko,l as r,r as S,m as Co,q as Q,e as So,s as Uo,o as m,f as w,h as e,t as vo,i as K,v as p,j as To,x as po,u as U,p as Bo,k as Lo,y as Eo,z as Jo,A as Wo,c as E,w as Io,B as Ko,C as ve,L as pe,I as fe,S as Qo,D as _e,b as xo,F as be,E as ye,G as he}from"./entry.e9f8e70a.js";import{_ as ge}from"./assets-card.d0d3456a.js";import{_ as Ie}from"./coin-lock.53a615b1.js";import{_ as oe,a as ee}from"./auto-pool-remove-modal.b0e4ba52.js";import{D as f}from"./decimal.0bdeb344.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./back.d2b09c6a.js";import"./swap-setting.e84059c4.js";/* empty css              */import"./icon-error_2x.446ef670.js";/* empty css              */import"./img-lock_2x.a28135f4.js";import"./img-lock_2x.023061b5.js";const $e=ko({components:{AutoPoolApyTips:Yo},setup(){const o=qo(),n=r(()=>o),M=Do(),q=r(()=>M),O=r(()=>n.value.theme),I=s=>{var t;return(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||((t=q.value.tokensObj[s==null?void 0:s.address])==null?void 0:t.logo_url)||(O.value==="default"?$o("/image/coins/unknown.png"):$o("/image/coins/sui-unknown.png"))},g=S(!0),b=No(),v=r(()=>b),$=Co(),a=S();Q(()=>[v.value.positionInfoObj,$.params.id],([s,t])=>{s&&!lo(s)&&t&&(a.value=s[t])},{immediate:!0,deep:!0});const i=r(()=>{var s;return(s=a.value)==null?void 0:s.needReverse}),_=r(()=>{var s,t;return v.value.apyObj&&((t=v.value.apyObj[(s=a.value)==null?void 0:s.id])==null?void 0:t.tvl)||"--"}),c=r(()=>{var s,t;return v.value.apyObj&&((t=v.value.apyObj[(s=a.value)==null?void 0:s.id])==null?void 0:t.apr)||"--"});return{positionInfo:a,tvl:_,store:n,indexStore:o,needReverse:i,getCoinIcon:I,getExplorerUrl:de,addCommom:L,decimalUi:Oo,direct:g,apy:c}}});const wo=o=>(Bo("data-v-f35bbd0d"),o=o(),Lo(),o),ke={class:"auto-position-info"},Ce={class:"pool-info"},Se={class:"left"},we={class:"coin-a"},Ae={alt:""},Pe={class:"coin-b"},Te={alt:""},qe={class:"position-name"},Re={key:0,class:"pool-fee"},Ne=wo(()=>e("span",null,"Fee tier",-1)),Be={class:"right"},Le={class:"price-info"},Me={class:"current-price"},Oe=wo(()=>e("span",null,"Current Price",-1)),De={class:"coin-rate"},Ue=wo(()=>e("div",null,[e("svg",{class:"icon icon-up","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),je=wo(()=>e("div",null,[e("svg",{class:"icon icon-down","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),Fe=[Ue,je],We={key:0},Ee={key:1},Xe={class:"apy-and-tvl"},ze={class:"apy"},Ve=wo(()=>e("div",{class:"apy-title"},"APY",-1)),He={class:"apy-text"},Ye={class:"tvl"},Ge=wo(()=>e("div",{class:"tvl-title"},"TVL",-1)),Ze={class:"tvl-text"};function Je(o,n,M,q,O,I){var a,i,_,c,s,t,l,k,A,y,H,B,C,V,j,X,P,eo,x,J,Y,oo,so,io,Ao,uo,ao,ro,ho,fo,mo,d,D;const g=ue,b=re,v=Yo,$=Uo("image");return m(),w("div",ke,[e("div",Ce,[e("div",Se,[e("div",we,[vo(e("img",Ae,null,512),[[$,o.needReverse?o.getCoinIcon((i=o.positionInfo)==null?void 0:i.token_b):o.getCoinIcon((a=o.positionInfo)==null?void 0:a.token_a)]]),K(g,{address:o.needReverse?(t=(s=o.positionInfo)==null?void 0:s.token_b)==null?void 0:t.address:(c=(_=o.positionInfo)==null?void 0:_.token_a)==null?void 0:c.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"4px"}},null,8,["address"])]),e("div",Pe,[vo(e("img",Te,null,512),[[$,o.needReverse?o.getCoinIcon((k=o.positionInfo)==null?void 0:k.token_a):o.getCoinIcon((l=o.positionInfo)==null?void 0:l.token_b)]]),K(g,{address:o.needReverse?(B=(H=o.positionInfo)==null?void 0:H.token_a)==null?void 0:B.address:(y=(A=o.positionInfo)==null?void 0:A.token_b)==null?void 0:y.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"4px"}},null,8,["address"])]),e("div",qe,p(o.needReverse?(V=(C=o.positionInfo)==null?void 0:C.token_b)==null?void 0:V.symbol:(X=(j=o.positionInfo)==null?void 0:j.token_a)==null?void 0:X.symbol)+" - "+p(o.needReverse?(eo=(P=o.positionInfo)==null?void 0:P.token_a)==null?void 0:eo.symbol:(J=(x=o.positionInfo)==null?void 0:x.token_b)==null?void 0:J.symbol),1),(Y=o.positionInfo)!=null&&Y.fee?(m(),w("div",Re,[Ne,To(" "+p(((oo=o.positionInfo)==null?void 0:oo.fee)*100)+"% ",1)])):po("",!0)]),e("div",Be,[K(b,{"current-status":(so=o.positionInfo)==null?void 0:so.currentStatus},null,8,["current-status"])])]),e("div",Le,[e("div",Me,[e("div",null,[Oe,e("div",De,[e("div",{onClick:n[0]||(n[0]=co=>o.direct=!o.direct)},Fe)])]),(o.needReverse?!o.direct:o.direct)?(m(),w("div",We,[To(p(("addCommom"in o?o.addCommom:U(L))(("decimalUi"in o?o.decimalUi:U(Oo))((io=o.positionInfo)==null?void 0:io.price,6)))+"   ",1),e("span",null,p((uo=(Ao=o.positionInfo)==null?void 0:Ao.token_b)==null?void 0:uo.symbol)+" per "+p((ro=(ao=o.positionInfo)==null?void 0:ao.token_a)==null?void 0:ro.symbol),1)])):(m(),w("div",Ee,[To(p(("addCommom"in o?o.addCommom:U(L))(("decimalUi"in o?o.decimalUi:U(Oo))(1/((ho=o.positionInfo)==null?void 0:ho.price),6)))+"   ",1),e("span",null,p((mo=(fo=o.positionInfo)==null?void 0:fo.token_a)==null?void 0:mo.symbol)+" per "+p((D=(d=o.positionInfo)==null?void 0:d.token_b)==null?void 0:D.symbol),1)]))]),e("div",Xe,[e("div",ze,[Ve,e("div",He,[To(p(o.apy)+" ",1),K(v)])]),e("div",Ye,[Ge,e("div",Ze,"$"+p(("addCommom"in o?o.addCommom:U(L))(o.tvl,2)),1)])])])])}const ne=So($e,[["render",Je],["__scopeId","data-v-f35bbd0d"]]),Ke=ko({setup(){const o=No(),n=r(()=>o),M=Co(),q=r(()=>n.value.positionInfoObj[M.params.id]),O=r(()=>{var v;return(v=q.value)==null?void 0:v.needReverse}),I=Ro(),g=r(()=>I);return{positionInfo:q,needReverse:O,addCommom:L,wallet:g,getCoinIcon:v=>(v==null?void 0:v.logoURI)||(v==null?void 0:v.logo_url)||$o("/image/coins/sui-unknown.png")}}});const yo=o=>(Bo("data-v-ddd2440b"),o=o(),Lo(),o),Qe={class:"auto-position-liquidity"},xe={class:"my-liquidity"},on={class:"left"},en=yo(()=>e("div",null,"My Liquidity",-1)),nn={key:0},tn={key:1},sn={class:"right"},an=yo(()=>e("div",null,"My share",-1)),ln={key:0},un={key:1},rn={class:"my-liquidity-info"},dn={class:"lp-info"},mn={class:"lp-bg"},cn={alt:""},vn={key:0,class:"lp-num"},pn={key:1,class:"lp-num"},fn=yo(()=>e("div",{class:"assets-pooled-title"}," Pooled Assets ",-1)),_n={class:"assets-pooled"},bn={alt:""},yn={key:0},hn={key:1},gn=yo(()=>e("p",null,"--",-1)),In=yo(()=>e("p",null,"--",-1)),$n=[gn,In],kn={alt:""},Cn={key:0},Sn={key:1},wn=yo(()=>e("p",null,"--",-1)),An=yo(()=>e("p",null,"--",-1)),Pn=[wn,An];function Tn(o,n,M,q,O,I){var b,v,$,a,i,_,c,s,t,l,k,A,y,H,B,C,V,j,X,P,eo,x,J,Y,oo,so,io;const g=Uo("image");return m(),w("div",Qe,[e("div",xe,[e("div",on,[en,(b=o.wallet)!=null&&b.connected?(m(),w("div",nn,"$"+p(("addCommom"in o?o.addCommom:U(L))((v=o.positionInfo)==null?void 0:v.myLiquidityUSD)),1)):(m(),w("div",tn,"--"))]),e("div",sn,[an,($=o.wallet)!=null&&$.connected?(m(),w("div",ln,p((a=o.positionInfo)==null?void 0:a.myShare)+"%",1)):(m(),w("div",un,"--%"))])]),e("div",rn,[e("div",dn,[e("div",mn,[vo(e("img",cn,null,512),[[g,((_=(i=o.positionInfo)==null?void 0:i.lpInfo)==null?void 0:_.logo_url)||o.getCoinIcon((c=o.positionInfo)==null?void 0:c.lpInfo)]])]),(s=o.wallet)!=null&&s.connected?(m(),w("div",vn,p(("addCommom"in o?o.addCommom:U(L))((t=o.positionInfo)==null?void 0:t.myLiquidity))+" LP",1)):(m(),w("div",pn,"-- LP"))]),fn,e("div",_n,[e("div",null,[vo(e("img",bn,null,512),[[g,o.needReverse?o.getCoinIcon((l=o.positionInfo)==null?void 0:l.token_b):o.getCoinIcon((k=o.positionInfo)==null?void 0:k.token_a)]]),(A=o.wallet)!=null&&A.connected?(m(),w("div",yn,[e("p",null,p((y=o.positionInfo)==null?void 0:y.myAmountAUSD),1),e("p",null,p(("addCommom"in o?o.addCommom:U(L))((H=o.positionInfo)==null?void 0:H.amountA))+" "+p(o.needReverse?(C=(B=o.positionInfo)==null?void 0:B.token_b)==null?void 0:C.symbol:(j=(V=o.positionInfo)==null?void 0:V.token_a)==null?void 0:j.symbol),1)])):(m(),w("div",hn,$n))]),e("div",null,[vo(e("img",kn,null,512),[[g,o.needReverse?o.getCoinIcon((X=o.positionInfo)==null?void 0:X.token_a):o.getCoinIcon((P=o.positionInfo)==null?void 0:P.token_b)]]),(eo=o.wallet)!=null&&eo.connected?(m(),w("div",Cn,[e("p",null,p((x=o.positionInfo)==null?void 0:x.myAmountBUSD),1),e("p",null,p(("addCommom"in o?o.addCommom:U(L))((J=o.positionInfo)==null?void 0:J.amountB))+" "+p(o.needReverse?(oo=(Y=o.positionInfo)==null?void 0:Y.token_a)==null?void 0:oo.symbol:(io=(so=o.positionInfo)==null?void 0:so.token_b)==null?void 0:io.symbol),1)])):(m(),w("div",Sn,Pn))])])])])}const te=So(Ke,[["render",Tn],["__scopeId","data-v-ddd2440b"]]),qn=ko({components:{AutoPoolAddModal:oe},setup(){const o=Ro(),n=S(!1),M=qo(),q=r(()=>M),O=r(()=>q.value.chainName),I=r(()=>o),g=No(),b=r(()=>g),v=Do(),$=r(()=>v),a=S(),i=Co();Q(()=>[b.value.positionInfoObj,i.params.id],([u,h])=>{u&&!lo(u)&&h&&(a.value=u[h])},{immediate:!0,deep:!0});const _=r(()=>{var u;return(u=a.value)==null?void 0:u.needReverse}),c=S(),s=S(),t=S(),l=S(),k=S(!0),A=r(()=>I.value.assets&&c.value&&I.value.assets[c.value.address]?zo(I.value.assets[c.value.address].balance,c.value.decimals):0),y=r(()=>I.value.assets&&s.value&&I.value.assets[s.value.address]?zo(I.value.assets[s.value.address].balance,s.value.decimals):0),H=u=>{u==="fromCoin"?(k.value=!0,t.value=A.value>0?c.value.symbol=="SUI"?new f(Number(A.value)).sub(new f(.05)).lt(new f(0))?"0":new f(Number(A.value)).sub(new f(.05)).toString():String(A.value):""):(k.value=!1,l.value=y.value>0?s.value.symbol=="SUI"?new f(Number(y.value)).sub(new f(.05)).lt(new f(0))?"0":new f(Number(y.value)).sub(new f(.05)).toString():String(y.value):"")},B=u=>{u==="fromCoin"?(k.value=!0,t.value=A.value>0?to(new f(Number(A.value)).div(2).toString(),c.value.decimals).toString():""):(k.value=!1,l.value=y.value>0?to(new f(Number(y.value)).div(2).toString(),s.value.decimals).toString():"")},C=r(()=>O.value?Go(O.value):{}),V=r(()=>q.value.slippage),j=S("--"),X=S("--"),P=u=>{const h=new f(a.value.autoPoolPositionInfo.liquidity),R=new f(u.toString());if(h.toNumber()>0&&R.toNumber()>0){const T=R.add(h),F=R.div(T).mul(100).toString(),N=me(F),z=N==-1?2:N+2,no=to(R.div(T).mul(100).toString(),z),G=new f(1).div(new f(Math.pow(10,a.value.lpInfo.decimals))).toString();Number(no)<Number(G)?j.value=`<${G}`:j.value=no}else R.toNumber()>0&&h.toNumber()<=0?j.value="100":j.value="--"},eo=u=>{const h=new f(u.toString()),R=h.mul(new f(V.value).div(100)),T=new f(Math.pow(10,a.value.lpInfo.decimals));X.value=to(h.minus(R).div(T).toString(),a.value.lpInfo.decimals)},x=S(!1),J=S(!1),Y=()=>{if(!a.value)return;const u=a.value.autoPoolPositionInfo.tick_lower_index,h=a.value.autoPoolPositionInfo.tick_upper_index,R=bo.sqrtPriceX64ToTickIndex(new Z(a.value.current_sqrt_price));R<u&&(_.value?x.value=!0:J.value=!0),R>h&&(_.value?J.value=!0:x.value=!0);let T;if(t.value||l.value){if(k.value){const W=new f(t.value).mul(Math.pow(10,c.value.decimals)).toString();T=new Z(W)}else{const W=new f(l.value).mul(Math.pow(10,s.value.decimals)).toString();T=new Z(W)}const{liquidityAmount:F,tokenMaxA:N,tokenMaxB:z,tokenMaxAOrigin:no,tokenMaxBOrigin:G}=C.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:c.value,tokenB:s.value,lowerTick:u,upperTick:h,coinAmount:T,iscoinA:k.value,roundUp:!0,slippage:Number(V.value)/100,curSqrtPrice:new Z(a.value.current_sqrt_price)});k.value?l.value=Number(z)>0?z:"":t.value=Number(N)>0?N:"",P(F),eo(F)}};Q(()=>a.value,u=>{u&&!lo(u)&&(c.value=u==null?void 0:u.token_a,s.value=u==null?void 0:u.token_b,x.value=!1,J.value=!1,Y())},{immediate:!0});const oo=r(()=>$.value.RATES),so=r(()=>{var u,h,R,T,F,N,z,no;if((h=oo.value[(u=c.value)==null?void 0:u.address])!=null&&h.price&&((T=oo.value[(R=s.value)==null?void 0:R.address])!=null&&T.price)){const G=new f(t.value||0).mul(new f((N=oo.value[(F=c.value)==null?void 0:F.address])==null?void 0:N.price)),W=new f(l.value||0).mul(new f((no=oo.value[(z=s.value)==null?void 0:z.address])==null?void 0:no.price));return Oo(G.add(W).toString(),2)}else return"--"});Q(t,(u,h)=>{u&&Y(),u==""&&(j.value="--",l.value="",X.value="--")}),Q(l,(u,h)=>{u&&Y(),u==""&&(t.value="",j.value="--",X.value="--")});const{t:io,locale:Ao}=Eo(),uo=r(()=>{const u=Number(t.value)>Number(A.value),h=Number(l.value)>Number(y.value);return!t.value&&!l.value?io("button.enterAmount"):u?io("button.insufficientBalance",{name:c.value.symbol}):h?io("button.insufficientBalance",{name:s.value.symbol}):"Add Liquidity"}),ao=r(()=>{const u=Number(t.value)>Number(A.value),h=Number(l.value)>Number(y.value);return!!(!t.value&&!l.value||u||h||t.value<=0&&l.value<=0)}),ro=S(!0),{setIsShowSuccess:ho,setIsShowRejected:fo,setIsShowWaiting:mo,setTransactionDesc:d,setTransactionTxid:D,setPositiomNum:co}=M,_o=Zo("Sui");return{wallet:I,positionInfo:a,isShowAddModal:n,needReverse:_,fromCoin:c,toCoin:s,fromCoinAmount:t,toCoinAmount:l,fromCoinBlance:A,toCoinBlance:y,fixedFromCoin:k,maxBtnSelect:H,halfBtnSelect:B,totalAmountUSD:so,addCommom:L,shareOfPool:j,minimumReceivedLP:X,addLiquidityBtnText:uo,addLiquidityBtnDisabled:ao,toAdd:async()=>{var no,G;n.value=!1,ro.value=!0,D("");const u=`${L(t.value)} ${(no=c.value)==null?void 0:no.symbol}`,h=`${L(l.value)} ${(G=s.value)==null?void 0:G.symbol}`;d(`Deposit ${t.value>0?u:""} ${l.value>0&&t.value>0?"and":""} ${l.value>0?h:""}`),mo(!0);const R=k.value,T=a.value.autoPoolPositionInfo.tick_lower_index,F=a.value.autoPoolPositionInfo.tick_upper_index;let N;if(k.value){const W=new f(t.value).mul(Math.pow(10,c.value.decimals)).toString();N=new Z(W)}else{const W=new f(l.value).mul(Math.pow(10,s.value.decimals)).toString();N=new Z(W)}const z=a.value.rewarderInfo.map(W=>W.coinAddress);try{const W={lowerTick:T,upperTick:F,coinAmount:N,fix_amount_a:R,slippage:Number(V.value)/100,curSqrtPrice:new Z(a.value.current_sqrt_price),id:a.value.id,clmm_pool:a.value.autoPoolPositionInfo.pool,lp_token_type:a.value.lp_token_type,coinTypeA:a.value.autoPoolPositionInfo.coin_type_a,coinTypeB:a.value.autoPoolPositionInfo.coin_type_b,rewarder_coin_types:z},Xo=await _o.deposit(W),ae=await C.value.signAndExecuteTransactionBlock(I.value.currentWallet,Xo);let Po=C.value.handleTx(ae);if(Po&&Po.hash){D(Po.hash),mo(!1),ho(!0);const Fo={title:"Supplied",desc:`Deposit ${t.value>0?u:""} ${l.value>0&&t.value>0?"and":""} ${l.value>0?h:""}`,hash:Po.hash,tit:"Liquidity Increased",icon:"icon-icon-Increased",text:`Deposit ${t.value>0?u:""} ${l.value>0&&t.value>0?"and":""} ${l.value>0?h:""}`};O.value!=="Aptos"&&(Fo.res=Po.res),C.value.showTransitionPending(Fo),await C.value.watchTransaction(Fo)&&setTimeout(()=>{g.updatePositionItem(a.value.id),C.value.getAccount(I.value.address)},1e3),co()}else mo(!1),fo(!0);t.value="",l.value="",ro.value=!1}catch{t.value="",l.value="",ro.value=!1,mo(!1),fo(!0)}},showToCoinLock:J,showFromCoinLock:x}}});const Mo=o=>(Bo("data-v-77f1776b"),o=o(),Lo(),o),Rn={class:"auto-pool-add"},Nn={class:"auto-pool-add-content"},Bn={class:"liquidity-action-tab"},Ln=Mo(()=>e("div",{class:"increase tab-active"},"Add",-1)),Mn={class:"card-item"},On={class:"card-item"},Dn={class:"add-info"},Un={class:"total-amount"},jn=Mo(()=>e("span",null,"Total Amount",-1)),Fn={class:"total-amount"},Wn=Mo(()=>e("span",null,"Share of Pool",-1)),En={class:"total-amount"},Xn=Mo(()=>e("span",null,"Minimum Received LP",-1)),zn=Mo(()=>e("span",null,"Pool Closed",-1));function Vn(o,n,M,q,O,I){var a,i,_,c,s;const g=ge,b=Ie,v=Ko,$=oe;return m(),w("div",Rn,[e("div",Nn,[e("div",Bn,[Ln,e("div",{class:"remove",onClick:n[0]||(n[0]=Jo(t=>o.$emit("changeCurrentTab"),["stop"]))},"Remove")]),e("div",{class:Wo(o.needReverse?"card-container reverse":"card-container")},[e("div",Mn,[K(g,{modelValue:o.fromCoinAmount,"onUpdate:modelValue":n[1]||(n[1]=t=>o.fromCoinAmount=t),"input-value":o.fromCoinAmount,"coin-symbol":o.fromCoin?o.fromCoin.symbol:null,"coin-name":o.fromCoin?o.fromCoin.name:null,balance:o.fromCoinBlance,"coin-icon":o.fromCoin?o.fromCoin.logoURI:"",address:o.fromCoin?o.fromCoin.address:"","swap-direct":"From","import-page":"deposit","has-arrow":!1,onOnMax:n[2]||(n[2]=t=>o.maxBtnSelect("fromCoin")),onOnHalf:n[3]||(n[3]=t=>o.halfBtnSelect("fromCoin")),onOnInput:n[4]||(n[4]=t=>{o.fromCoinAmount=t}),onOnFocus:n[5]||(n[5]=()=>{o.fixedFromCoin=!0})},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"]),o.showFromCoinLock?(m(),E(b,{key:0})):po("",!0)]),e("div",On,[K(g,{modelValue:o.toCoinAmount,"onUpdate:modelValue":n[6]||(n[6]=t=>o.toCoinAmount=t),"input-value":o.toCoinAmount,"coin-symbol":o.toCoin?o.toCoin.symbol:null,"coin-name":o.toCoin?o.toCoin.name:null,balance:o.toCoinBlance,"swap-direct":"To","coin-icon":o.toCoin?o.toCoin.logoURI:"",address:o.toCoin?o.toCoin.address:"","import-page":"deposit","has-arrow":!1,onOnMax:n[7]||(n[7]=t=>o.maxBtnSelect("toCoin")),onOnHalf:n[8]||(n[8]=t=>o.halfBtnSelect("toCoin")),onOnInput:n[9]||(n[9]=t=>{o.toCoinAmount=t}),onOnFocus:n[10]||(n[10]=()=>{o.fixedFromCoin=!1})},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"]),o.showToCoinLock?(m(),E(b,{key:0})):po("",!0)])],2),e("div",Dn,[e("div",Un,[jn,e("span",null,"$"+p(("addCommom"in o?o.addCommom:U(L))(o.totalAmountUSD)),1)]),e("div",Fn,[Wn,e("span",null,p(o.shareOfPool)+"%",1)]),e("div",En,[Xn,e("span",null,p(("addCommom"in o?o.addCommom:U(L))(o.minimumReceivedLP))+" "+p(o.needReverse?(a=o.toCoin)==null?void 0:a.symbol:(i=o.fromCoin)==null?void 0:i.symbol)+"-"+p(o.needReverse?(_=o.fromCoin)==null?void 0:_.symbol:(c=o.toCoin)==null?void 0:c.symbol),1)])])]),(s=o.positionInfo)!=null&&s.is_pause?(m(),E(v,{key:0,class:"big-btn liquidity-btn",disabled:!0},{default:Io(()=>[zn]),_:1})):o.wallet.connected?(m(),E(v,{key:1,class:"big-btn liquidity-btn",disabled:o.addLiquidityBtnDisabled,onClick:n[11]||(n[11]=t=>o.isShowAddModal=!0)},{default:Io(()=>[e("span",null,p(o.addLiquidityBtnText),1)]),_:1},8,["disabled"])):(m(),E(v,{key:2,class:"big-btn",onClick:n[12]||(n[12]=t=>o.wallet.setIsShowWalletModal(!0))},{default:Io(()=>[e("span",null,p(o.$t("button.connectWallet")),1)]),_:1})),o.isShowAddModal?(m(),E($,{key:3,"pool-info":o.positionInfo,"from-coin":o.needReverse?o.positionInfo.token_b:o.positionInfo.token_a,"to-coin":o.needReverse?o.positionInfo.token_a:o.positionInfo.token_b,"from-coin-amount":o.needReverse?o.toCoinAmount:o.fromCoinAmount,"to-coin-amount":o.needReverse?o.fromCoinAmount:o.toCoinAmount,"total-amount":o.totalAmountUSD,"share-of-pool":o.shareOfPool,"minimum-received-l-p":o.minimumReceivedLP,onOnClose:n[13]||(n[13]=t=>o.isShowAddModal=!1),onToAdd:o.toAdd},null,8,["pool-info","from-coin","to-coin","from-coin-amount","to-coin-amount","total-amount","share-of-pool","minimum-received-l-p","onToAdd"])):po("",!0)])}const se=So(qn,[["render",Vn],["__scopeId","data-v-77f1776b"]]),Hn=ko({props:{inputValue:{type:String,default:""},balance:{type:String,default:""},lpDecimals:{type:String,default:""},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},inputDisabled:{type:Boolean,default:!1},positionInfo:{default:()=>({})}},setup(o,n){const{t:M,locale:q}=Eo(),O=qo(),I=r(()=>O),g=r(()=>new f(Number(o.balance)).div(2)),b=ve(pe,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0});function v(){this.$emit("onSelect")}const $=y=>{const H=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${o.lpDecimals&&o.lpDecimals}})?).*$`);y.target.value=y.target.value.replace(H,"$1")},a=Ro(),i=r(()=>a),_=Do(),c=r(()=>_),s=r(()=>c.value.tokensWarningObj);Q(()=>c.value.RATES,y=>{},{immediate:!0});const t=r(()=>c.value.tokensObj),l=r(()=>I.value.theme);return{route:Co(),theme:l,tokensObj:t,pool:c,halfBalance:g,t:M,addCommom:L,store:I,wallet:i,indicator:b,inputChange:$,importIcon:$o,selectCoin:v,formatNumber:ce,tokensWarningObj:s,checkNullObj:lo,getCoinIcon:y=>(y==null?void 0:y.logoURI)||(y==null?void 0:y.logo_url)||$o("/image/coins/sui-unknown.png")}}});const Yn=o=>(Bo("data-v-afb7957e"),o=o(),Lo(),o),Gn={class:"card"},Zn={class:"top"},Jn={key:1,class:"input-div"},Kn={key:0},Qn={class:"left"},xn={class:"loading-token"},ot={class:"lp-bg"},et={key:0,alt:""},nt={class:"bottom"},tt=Yn(()=>e("div",null,null,-1)),st={class:"top"},it={class:"right"};function at(o,n,M,q,O,I){const g=fe,b=Qo,v=Uo("image");return m(),w("div",Gn,[e("div",Zn,[o.inputDisabled?(m(),w("div",Jn,[o.inputValue?(m(),w("span",Kn,p(o.inputValue),1)):(m(),E(b,{key:1,indicator:o.indicator},null,8,["indicator"]))])):(m(),E(g,{key:0,value:o.inputValue=="InsufficientLiquidity"?"":o.inputValue,placeholder:"0.0",disabled:o.inputDisabled,onChange:o.inputChange,onInput:n[0]||(n[0]=$=>o.$emit("onInput",$.target.value)),onFocus:n[1]||(n[1]=$=>o.$emit("onFocus"))},null,8,["value","disabled","onChange"])),e("div",Qn,[e("div",xn,[e("div",ot,[o.positionInfo&&!("checkNullObj"in o?o.checkNullObj:U(lo))(o.positionInfo)&&o.positionInfo.lpInfo?vo((m(),w("img",et,null,512)),[[v,o.getCoinIcon(o.positionInfo.lpInfo)]]):po("",!0)]),e("p",null,p(o.fromCoin.symbol)+" - "+p(o.toCoin.symbol),1)])])]),e("div",nt,[tt,e("div",st,[e("div",it,[To(p(o.$t("common.balance"))+" ",1),e("span",{class:"balance",onClick:n[2]||(n[2]=$=>o.$emit("onMax"))},p(o.wallet.connected?("addCommom"in o?o.addCommom:U(L))(o.balance,o.lpDecimals):"0"),1)])])])])}const lt=So(Hn,[["render",at],["__scopeId","data-v-afb7957e"]]),ut=ko({components:{AutoPoolRemoveModal:ee},setup(){const o=Ro(),n=r(()=>o),M=qo(),q=r(()=>M),O=r(()=>q.value.slippage),I=r(()=>q.value.chainName),g=[{name:"25%",value:25},{name:"50%",value:50},{name:"75%",value:75},{name:"MAX",value:100}],b=S(25),v=Co(),$=No(),a=r(()=>$),i=r(()=>a.value.positionInfoObj[v.params.id]),_=r(()=>{var d;return(d=i.value)==null?void 0:d.needReverse}),c=S(),s=S(),t=S(!1),l=S(),k=r(()=>{var d;return(d=i.value)==null?void 0:d.myLiquidity}),A=S(!0),y=r(()=>I.value?Go(I.value):{}),H=Zo("Sui"),B=S("--"),C=S("--"),V=S("--"),j=()=>{if(A.value||!i.value)return;if(!l.value){B.value="--",C.value="--",b.value=0;return}if(Number(l.value)>Number(k.value))return;if(Number(l.value)*Math.pow(10,i.value.decimals)==Number(k.value)){b.value=100,P({value:1}),A.value=!0;return}const d=new f(l.value).mul(Math.pow(10,i.value.lpInfo.decimals)).toString(),D=new f(l.value).div(new f(k.value)).mul(100),co=i.value.tick_lower_index,_o=i.value.tick_upper_index,go=i.value.token_a.decimals,u=i.value.token_b.decimals,h=bo.tickIndexToSqrtPriceX64(co),R=bo.tickIndexToSqrtPriceX64(_o),T=Vo.get_share_liquidity_by_amount({liquidity:i.value.liquidity,total_supply:i.value.total_supply},d.toString()),F=Ho.getCoinAmountFromLiquidity(new Z(T),new Z(i.value.object.current_sqrt_price),h,R,!1),N=new f(F.coinA.toString()).div(Math.pow(10,go)).toString(),z=new f(F.coinB.toString()).div(Math.pow(10,u)).toString();B.value=Number(N)>0?N:"--",C.value=Number(z)>0?z:"--",b.value=D.toString(),V.value=to(d,0),X.value=to(T,0)},X=S(),P=d=>{if(!A.value)return;A.value=!0;const D=i.value.token_a.decimals,co=i.value.token_b.decimals,_o=i.value.tick_lower_index,go=i.value.tick_upper_index,u=bo.tickIndexToSqrtPriceX64(_o),h=bo.tickIndexToSqrtPriceX64(go);let R="",T;d.value!==1?T=new f(i.value.myLiquidity).mul(Math.pow(10,i.value.lpInfo.decimals)).mul(d.value).toString():T=new f(i.value.myLiquidity).mul(Math.pow(10,i.value.lpInfo.decimals)).toString(),l.value=new f(T).div(Math.pow(10,i.value.lpInfo.decimals)),R=Vo.get_share_liquidity_by_amount({liquidity:i.value.liquidity,total_supply:i.value.total_supply},T),V.value=to(T,0),X.value=to(R,0);const F=Ho.getCoinAmountFromLiquidity(new Z(R),new Z(i.value.object.current_sqrt_price),u,h,!1),N=new f(F.coinA.toString()).div(Math.pow(10,D)).toString(),z=new f(F.coinB.toString()).div(Math.pow(10,co)).toString();B.value=Number(N)>0?N:"--",C.value=Number(z)>0?z:"--"};Q(b,_e((d,D)=>{d!==D&&(Number(d)>100?b.value=100:d&&i.value?(b.value=d,P({value:b.value/100})):(B.value="--",C.value="--"))},300)),Q(()=>l.value,d=>{j()},{immediate:!0});const eo=xo(),{setIsShowSuccess:x,setIsShowRejected:J,setIsShowWaiting:Y,setTransactionDesc:oo,setTransactionTxid:so,setPositiomNum:io,setTransactionDescText:Ao}=M,uo=S(!1),{t:ao}=Eo(),ro=async()=>{var T,F;uo.value=!0,so("");const d=Number(B.value)>0?`${L(B.value,c.value.decimals)} ${c.value.symbol}`:"",D=Number(C.value)>0?`${L(C.value,s.value.decimals)} ${s.value.symbol}`:"";oo(ao("tips.removeLiquidiyText",{from:_.value?D:d,and:Number(B.value)>0&&Number(C.value)>0?"and":"",to:_.value?d:D})),Y(!0);const co=ao("modal.removeLiquidityText2");Ao(co);const _o=i.value.autoPoolPositionInfo.tick_lower_index,go=i.value.autoPoolPositionInfo.tick_upper_index,u=bo.tickIndexToSqrtPriceX64(_o),h=bo.tickIndexToSqrtPriceX64(go),R=i.value.rewarderInfo.map(N=>N.coinAddress);try{const N={lowerSqrtPrice:u,upperSqrtPrice:h,lpTokenAmount:new Z(V.value),liquidity:new Z(X.value),curSqrtPrice:new Z(i.value.object.current_sqrt_price),slippage:Number(O.value)/100,id:i.value.id,clmm_pool:i.value.autoPoolPositionInfo.pool,lp_token_type:i.value.lp_token_type,coinTypeA:i.value.autoPoolPositionInfo.coin_type_a,coinTypeB:i.value.autoPoolPositionInfo.coin_type_b,rewarder_coin_types:R},z=await H.remove(N),no=await y.value.signAndExecuteTransactionBlock(n.value.currentWallet,z);let G=y.value.handleTx(no);if(G&&G.hash){so(G.hash),Y(!1),x(!0);const W={title:ao("common.removeLiquidity"),desc:"",hash:G.hash,descTransactions:`Remove ${d} ${Number(B.value)>0&&Number(C.value)>0?"and":""} ${D} from the pool`,sender:n.value.address,chainName:"Sui",tit:"Liquidity Removed",icon:"icon-icon-Removed",text:`Withdraw ${B.value} ${(T=c.value)==null?void 0:T.symbol} and ${C.value} ${(F=s.value)==null?void 0:F.symbol}`};W.res=G.res,y.value.showTransitionPending(W),await y.value.watchTransaction(W)&&(B.value="",C.value="",l.value="",b.value=0,setTimeout(()=>{$.updatePositionItem(i.value.id),y.value.getAccount(n.value.address)},1e3),Number(b.value)==100&&v.name=="auto-pool-detail"&&eo.push("/vaults"))}else Y(!1),J(!0);uo.value=!1}catch{uo.value=!1,Y(!1),J(!0)}};Q(()=>i.value,(d,D)=>{d&&!lo(d)&&(c.value=d==null?void 0:d.token_a,s.value=d==null?void 0:d.token_b,(!D||D&&D.address!==d.address)&&P({value:b.value/100}))},{immediate:!0});const ho=r(()=>{const d=Number(l.value)>Number(k.value);return!l.value||l.value<=0?ao("button.enterAmount"):d?"Invalid Amount":ao("button.remove")}),fo=r(()=>{const d=Number(l.value)>Number(k.value);return!!(!l.value||l.value<=0||d)});return{removeLiquidityBtnText:ho,removeLiquidityBtnDisabled:fo,wallet:n,ratioArr:g,positionInfo:i,isShowRemoveModal:t,needReverse:_,fromCoin:c,toCoin:s,lpAmount:l,lpBalance:k,sliderVal:b,sFixD:to,isSlider:A,fromCoinAmount:B,toCoinAmount:C,setPercent:P,toRemove:ro,addCommom:L,getCoinIcon:d=>(d==null?void 0:d.logoURI)||(d==null?void 0:d.logo_url)||$o("/image/coins/sui-unknown.png")}}});const jo=o=>(Bo("data-v-116e5aa2"),o=o(),Lo(),o),rt={class:"auto-pool-add"},dt={class:"auto-pool-add-content"},mt={class:"liquidity-action-tab"},ct=jo(()=>e("div",{class:"remove tab-active"},"Remove",-1)),vt={class:"card-item"},pt={class:"remove-ratio"},ft=jo(()=>e("div",{class:"remove-ratio-title"},"Amount",-1)),_t={class:"remove-ratio-select"},bt={key:0,class:"ratio"},yt={key:1,class:"ratio"},ht={class:"ratio-list"},gt=["onClick"],It={class:"est-receive"},$t=jo(()=>e("div",{class:"est-receive-title"},"Estimated Receive",-1)),kt={class:"token-a"},Ct={alt:""},St={class:"token-a"},wt={alt:""},At=jo(()=>e("span",null,"Pool Closed",-1));function Pt(o,n,M,q,O,I){var i,_,c,s,t,l,k,A,y,H,B,C,V,j,X;const g=lt,b=he,v=Ko,$=ee,a=Uo("image");return m(),w("div",rt,[e("div",dt,[e("div",mt,[e("div",{class:"increase",onClick:n[0]||(n[0]=Jo(P=>o.$emit("changeCurrentTab"),["stop"]))},"Add"),ct]),e("div",{class:Wo(o.needReverse?"card-container reverse":"card-container")},[e("div",vt,[K(g,{modelValue:o.lpAmount,"onUpdate:modelValue":n[1]||(n[1]=P=>o.lpAmount=P),"input-value":o.lpAmount,balance:o.lpBalance,"from-coin":o.needReverse?o.toCoin:o.fromCoin,"to-coin":o.needReverse?o.fromCoin:o.toCoin,"position-info":o.positionInfo,"lp-decimals":(_=(i=o.positionInfo)==null?void 0:i.lpInfo)==null?void 0:_.decimals,onOnMax:n[2]||(n[2]=()=>{o.sliderVal=100,o.setPercent({value:1})}),onOnInput:n[3]||(n[3]=P=>{o.isSlider=!1,o.lpAmount=P})},null,8,["modelValue","input-value","balance","from-coin","to-coin","position-info","lp-decimals"])])],2),e("div",pt,[ft,e("div",_t,[Number(o.lpBalance)>=Number(o.lpAmount)?(m(),w("div",bt,p(o.sliderVal>0&&Number(("sFixD"in o?o.sFixD:U(to))(o.sliderVal,2))<.01?"<0.01":("sFixD"in o?o.sFixD:U(to))(o.sliderVal,2))+"% ",1)):(m(),w("div",yt,"--")),e("div",ht,[(m(!0),w(be,null,ye(o.ratioArr,(P,eo)=>(m(),w("div",{key:eo,class:Wo(["ratio-item",o.sliderVal==P.value?"ratio-item-active":""]),onClick:()=>{o.isSlider=!0,o.sliderVal=P.value}},p(P.name),11,gt))),128))])]),K(b,{value:o.sliderVal,"onUpdate:value":n[4]||(n[4]=P=>o.sliderVal=P)},null,8,["value"])]),e("div",It,[$t,e("div",kt,[e("div",null,p(("addCommom"in o?o.addCommom:U(L))(o.fromCoinAmount)),1),e("div",null,[vo(e("img",Ct,null,512),[[a,o.needReverse?o.getCoinIcon((c=o.positionInfo)==null?void 0:c.token_b):o.getCoinIcon((s=o.positionInfo)==null?void 0:s.token_a)]]),e("span",null,p(o.needReverse?(l=(t=o.positionInfo)==null?void 0:t.token_b)==null?void 0:l.symbol:(A=(k=o.positionInfo)==null?void 0:k.token_a)==null?void 0:A.symbol),1)])]),e("div",St,[e("div",null,p(("addCommom"in o?o.addCommom:U(L))(o.toCoinAmount)),1),e("div",null,[vo(e("img",wt,null,512),[[a,o.needReverse?o.getCoinIcon((y=o.positionInfo)==null?void 0:y.token_a):o.getCoinIcon((H=o.positionInfo)==null?void 0:H.token_b)]]),e("span",null,p(o.needReverse?(C=(B=o.positionInfo)==null?void 0:B.token_a)==null?void 0:C.symbol:(j=(V=o.positionInfo)==null?void 0:V.token_b)==null?void 0:j.symbol),1)])])])]),(X=o.positionInfo)!=null&&X.is_pause?(m(),E(v,{key:0,class:"big-btn liquidity-btn",disabled:!0},{default:Io(()=>[At]),_:1})):o.wallet.connected?(m(),E(v,{key:1,class:"big-btn liquidity-btn",disabled:o.removeLiquidityBtnDisabled,onClick:o.toRemove},{default:Io(()=>[e("span",null,p(o.removeLiquidityBtnText),1)]),_:1},8,["disabled","onClick"])):(m(),E(v,{key:2,class:"big-btn",onClick:n[5]||(n[5]=P=>o.wallet.setIsShowWalletModal(!0))},{default:Io(()=>[e("span",null,p(o.$t("button.connectWallet")),1)]),_:1})),o.isShowRemoveModal?(m(),E($,{key:3,"pool-info":o.positionInfo,"from-coin":o.positionInfo.token_a,"to-coin":o.positionInfo.token_b,onOnClose:n[6]||(n[6]=P=>o.isShowRemoveModal=!1)},null,8,["pool-info","from-coin","to-coin"])):po("",!0)])}const ie=So(ut,[["render",Pt],["__scopeId","data-v-116e5aa2"]]),Tt=ko({components:{AutoPoolAdd:se,AutoPositionInfo:ne,AutoPositionLiquidity:te,AutoPoolRemove:ie},setup(){const o=S("add"),n=Ro(),M=r(()=>n),q=No(),O=r(()=>q),I=Do(),g=r(()=>I);Q(()=>g.value.poolConfigList,_=>{_&&_.length>0&&q.getAutoPoolList()},{immediate:!0}),Q(()=>[M.value.address,O.value.autoPoolList,g.value.poolConfigList],([_,c,s])=>{_&&c&&c.length>0&&s&&s.length>0&&q.getMyAutoPoolPosition()},{immediate:!0});const b=Co(),v=r(()=>O.value.positionInfoObj[b.params.id]||{});Q(()=>b.query.action,_=>{_&&(o.value=_)},{immediate:!0}),xo(),Q(()=>M.value.address,_=>{_||q.logout()},{immediate:!0});const $=qo(),a=r(()=>$);return{currentTab:o,positionInfo:v,clickRefresh:()=>{q.getAutoPoolAPY(),q.getAutoPoolList(),I.setPoolConfigList(a.value.chainName,a.value.filterCoinsObj)},checkNullObj:lo}}});const qt={class:"auto-increase-liquidity"},Rt={class:"auto-increase-liquidity-content pc-content"},Nt={class:"left"},Bt={class:"right"},Lt={class:"auto-increase-liquidity-content h5-content"},Mt={class:"left"},Ot={class:"right"};function Dt(o,n,M,q,O,I){const g=le,b=ne,v=te,$=se,a=ie,i=Qo;return m(),w("div",qt,[K(g,{onClickRefresh:o.clickRefresh},null,8,["onClickRefresh"]),e("div",Rt,[e("div",Nt,[K(b),K(v)]),e("div",Bt,[o.currentTab=="add"?(m(),E($,{key:0,onChangeCurrentTab:n[0]||(n[0]=_=>o.currentTab="remove")})):(m(),E(a,{key:1,onChangeCurrentTab:n[1]||(n[1]=_=>o.currentTab="add")}))]),("checkNullObj"in o?o.checkNullObj:U(lo))(o.positionInfo)?(m(),E(i,{key:0})):po("",!0)]),e("div",Lt,[e("div",Mt,[K(b),o.currentTab=="add"?(m(),E($,{key:0,onChangeCurrentTab:n[2]||(n[2]=_=>o.currentTab="remove")})):(m(),E(a,{key:1,onChangeCurrentTab:n[3]||(n[3]=_=>o.currentTab="add")}))]),e("div",Ot,[K(v)]),("checkNullObj"in o?o.checkNullObj:U(lo))(o.positionInfo)?(m(),E(i,{key:0})):po("",!0)])])}const rs=So(Tt,[["render",Dt],["__scopeId","data-v-c1d813f3"]]);export{rs as default};
