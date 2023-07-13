import{u as L,b as f,o as s,e as j}from"./pool.3baa2e38.js";import"./index.3100b733.js";import{u as T}from"./launchpad.193dce8d.js";import{a as E,m as x,r as W,y as B,a2 as H,e as U,o as q,f as D}from"./entry.475e70a6.js";import"./index.3355c568.js";import"./index.a64f9d46.js";const G=E({setup(){const w=T();x(()=>w);let e=W(!1);B(()=>{document.body.clientWidth<750?e.value=!1:e.value=!0,window.onresize=()=>{document.body.clientWidth<750?e.value=!1:e.value=!0},setTimeout(()=>{k()},1e3)});const C=W({}),F=L();x(()=>F);const t=x(()=>({symbol:"SUI",decimals:9})),_=u=>{var p,n;if(u<1){let l=(p=u.toString().split(".")[1])==null?void 0:p.length;return{isdecimal:!0,num:l||0}}else{let l=(n=u.toString().split(".")[0])==null?void 0:n.length;return{isdecimal:!1,num:l?l<=2?0:l-1:0}}},k=()=>{var P,$,M,O,A;const u=document.getElementById("myChart"),p=H(u);document.body.clientWidth;let n=[],l=1e4,b=1030,h=1e4,d=1020;const a=_(d);let N=f(d/h,t.value.decimals),z=f(l/h,t.value.decimals),r=Number(a.isdecimal?Number(s(b).times(Math.pow(10,a.num)).toString()):Number(s(b).div(Math.pow(10,a.num)).toString())),y=Number(a.isdecimal?Number(s(h).times(Math.pow(10,a.num)).toString()):Number(s(h).div(Math.pow(10,a.num)).toString())),o=Math.ceil(a.isdecimal?s(l).times(Math.pow(10,a.num)).toString():s(l).div(Math.pow(10,a.num)).toString()),g=Math.ceil(a.isdecimal?s(d).times(Math.pow(10,a.num)).toString():s(d).div(Math.pow(10,a.num)).toString()),c,m=f(g/y,t.value.decimals),v=f(o/y,t.value.decimals);for(var i=0;i<=o;i++)i<=g?n.push([i,m]):i<=o?n.push([i,i/y]):n.push([i,v]);Number(r)<=Number(g)?c=m:Number(r)<=Number(o)?c=f(r/y,t.value.decimals):c=v;let S;Number(b)<=Number(d)?S=N:Number(b)<=Number(l)?S=f(b/h,t.value.decimals):S=z;var I={tooltip:{trigger:"axis",show:!1,triggerOn:"none",axisPointer:{type:"none"}},xAxis:{show:!1,axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},splitArea:{show:!1},min:0,max:o},yAxis:{show:!1,min:Number(m)-Number(m)/10,max:Number(v)+Number(m)/10,axisLine:{show:!1},splitArea:{show:!1}},grid:{left:e.value?30:5,top:40,bottom:40,right:e.value?30:5},visualMap:{show:!1,min:0,max:o+1,dimension:0,pieces:[{lte:0,color:"#76C8FF"},{gt:0,lte:r,color:"#76C8FF"},{gt:r,lte:o,color:"#364f5f"},{gt:o+1,color:"#364f5f"}]},series:[{data:n,type:"line",smooth:!1,axisTick:{show:!1},markLine:{symbol:["none","none"],data:[{xAxis:g,symbol:"none",silent:!1,name:"警戒线",lineStyle:{type:"dashed",width:1,color:"#999"},emphasis:{lineStyle:{width:1}},label:{position:"end",formatter:["{a|Soft Cap}",`{b|${d} ${t.value&&((P=t.value)==null?void 0:P.symbol)}}`].join(" "),rotate:0,offset:0,align:e.value?"center":"right",color:"rgba(255, 255, 255, 0.5)",rich:{a:{fontSize:e.value?14:12},b:{fontSize:e.value?14:12,color:"#76C8FF"}}}},{xAxis:0,symbol:"none",silent:!1,name:"警戒线",lineStyle:{type:"dashed",color:"transparent"},label:{position:"start",formatter:["{a|Floor Price}",`{b|${N} ${t.value&&(($=t.value)==null?void 0:$.symbol)}}`].join(" "),rotate:0,offset:0,align:"left",color:"rgba(255, 255, 255, 0.5)",rich:{a:{fontSize:e.value?14:12},b:{fontSize:e.value?14:12,color:"#76C8FF"}}}},{xAxis:o,symbol:"none",silent:!1,name:"警戒线",lineStyle:{type:"dashed",color:"transparent"},label:{position:"end",formatter:["{a|Hard Cap}",`{b|${l} ${t.value&&((M=t.value)==null?void 0:M.symbol)}}`].join(" "),rotate:0,offset:0,align:"right",color:"rgba(255, 255, 255, 0.5)",rich:{a:{fontSize:e.value?14:12},b:{fontSize:e.value?14:12,color:"#76C8FF"}}}},{xAxis:o,symbol:"none",silent:!1,name:"警戒线",lineStyle:{type:"dashed",color:"transparent"},label:{position:"start",formatter:["{a|Max.Price}",`{b|${z} ${t.value&&((O=t.value)==null?void 0:O.symbol)}}`].join(" "),rotate:0,offset:0,align:"right",color:"rgba(255, 255, 255, 0.5)",rich:{a:{fontSize:e.value?14:12},b:{fontSize:e.value?14:12,color:"#76C8FF"}}}}]},markPoint:{data:[{itemStyle:{color:"transparent"},coord:[r,r>3*o/4?3*c/4:c],label:{formatter:[`{a|${C.value.pool_status=="Ended"?"End Price":C.value.pool_status=="Live"?"Current Price":"Price"}}`,`{b|${S} ${t.value&&((A=t.value)==null?void 0:A.symbol)}}`].join(`
`),rotate:0,offset:0,backgroundColor:"#191919",align:r>o/2?"right":"left",color:"rgba(255, 255, 255, 1)",padding:[6,12],borderWidth:1,borderColor:"#355C76",lineHeight:18,rich:{a:{fontSize:e.value?14:12,color:"rgba(255, 255, 255, 0.5)",align:"left"},b:{fontSize:e.value?14:12,align:"left",color:"rgba(255, 255, 255, 1)"}}}},{symbol:"circle",symbolSize:5,itemStyle:{color:"#76C8FF"},coord:[r,c]},{symbol:"circle",symbolSize:14,itemStyle:{color:"#76C8FF",opacity:"0.15"},coord:[Number(r)-1e-7,c]},{symbol:"circle",symbolSize:5,itemStyle:{color:"#76C8FF"},coord:[0,m]},{symbol:"circle",symbolSize:5,itemStyle:{color:"#76C8FF"},coord:[o,v]},{symbol:"circle",symbolSize:5,itemStyle:{color:"#76C8FF"},coord:[g,m]}]},lineStyle:{width:3},showSymbol:!1,grid:{show:!1}}]};p.setOption(I)};return{addCommom:j}}});const J={id:"myChart",class:"echart-box"};function K(w,e,C,F,t,_){return q(),D("div",J)}const ee=U(G,[["render",K],["__scopeId","data-v-d2093c17"]]);export{ee as default};
