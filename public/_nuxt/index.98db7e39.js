import{a as x,m as a,r as y,e as h,o as b,f as _,i as w,w as C,B as g,j as U}from"./entry.f573392f.js";import{u as S,a as k}from"./sha256.692c34db.js";import{g as v,c as t}from"./index.c61e7339.js";const $=x({async setup(){const s=S(),p=a(()=>s.chainName),l=a(()=>s),i=k(),n=a(()=>i),u=()=>{const e=v({appId:"d2baaf93-cda5-404c-9be2-36695a530d02",destinationWallets:[{address:"0xabcdef",blockchains:["sui"]},{address:"0x123456",assets:["ETH","USDC"]}]});window.open(e,"Coinbase Pay","height=600, width=400, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no")},r=(e,o)=>{try{const d=t.enc.Utf8.parse(o),m=t.enc.Utf8.parse(o.substring(0,16)),R=t.enc.Utf8.parse(e);return t.AES.encrypt(e,d,{iv:m,mode:t.mode.CBC}).toString()}catch{}return null},c=y(!1),f=a(()=>{if(n.value.address){const e=`address=${n.value.address}&appId=eux4fx43yH39DsW0`,o=r(e,"J8Y2oKoFAKiw6OCq");return`https://ramp.alchemypay.org/?network=SUI&appId=eux4fx43yH39DsW0&sign=${encodeURIComponent(o)}&address=${n.value.address}`}return""});return{testfun:u,chainName:p,testShow:c,iframeUrl:f,openTestModal:()=>{c.value=!0},closeTestModal:()=>{c.value=!0},index:l}}});function I(s,p,l,i,n,u){const r=g;return b(),_("div",null,[w(r,{type:"primary",onClick:s.testfun},{default:C(()=>[U("test")]),_:1},8,["onClick"])])}const E=h($,[["render",I]]);export{E as default};
