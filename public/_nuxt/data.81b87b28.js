import{D as u}from"./decimal.0e8aa3f1.js";import{r as e}from"./entry.f573392f.js";const l=e(""),a=e(""),O=e(""),x=e(""),S=e(),p=e(),r=e(),s=e(),d=e(),f=e(),v=e(),i=e(),m=e(!0),P=e(!0),D=e(!1),C=e(!1),T=()=>{m.value=!m.value;const o=r.value;if(r.value=s.value,s.value=o,l.value!==""&&a.value!==""){if(l.value=="0"&&a.value=="∞")return;if(l.value!=="0"&&a.value!=="∞"){const n=l.value,t=a.value;l.value=new u(1).div(t).toString(),a.value=new u(1).div(n).toString();const c=v.value,w=i.value;v.value=new u(1).div(w).toString(),i.value=new u(1).div(c).toString()}else if(a.value=="∞"){const n=l.value;l.value="0",a.value=new u(1).div(n).toString();const t=v.value;i.value,v.value="0",i.value=new u(1).div(t).toString()}else if(l.value=="0"){const n=a.value;l.value=new u(1).div(n).toString(),a.value="∞",v.value;const t=i.value;v.value=new u(1).div(t).toString(),i.value="∞"}}P.value?d.value=f.value:f.value=d.value},g=e(),A=async(o,n)=>{const t=await o.value.getTicks(n.value),c=t?o.value.getTickDataFromUrlData(t):[];g.value=c},b=()=>{l.value="",a.value="",O.value="",x.value="",S.value="",p.value="",r.value=null,s.value=null,d.value="",f.value="",v.value="",i.value="",m.value=!0,P.value=!0,g.value=[],C.value=!1};export{S as currentPrice,p as currentPriceReverse,O as currentPriceTab,i as defaultMaxPrice,v as defaultMinPrice,m as direction,P as fixedFromCoin,r as fromCoin,d as fromCoinAmount,C as isInputTotalAmount,a as maxPrice,l as minPrice,D as positionError,x as priceConfigObj,b as resetData,A as resetTickList,g as tickList,s as toCoin,f as toCoinAmount,T as toggle};
