import{r as p,J as D,q as T,Y as q,l as x,b as L,e as P,o as j,f as k,j as m,v as _,x as A,p as R,k as V,h}from"./entry.1d58a270.js";import{a as C}from"./sha256.22518486.js";import{u as M}from"./launchpad.60ea72cc.js";const E={props:{startTime:{type:String,require:!0,default:""},endTime:{type:Number,require:!0,default:0},isProject:{type:Boolean,require:!1,default:!1},isShow:{type:Boolean,require:!1,default:!0}},setup(e){const S=p("--"),u=p("--"),a=p("--"),v=p("--");let n=null;D(()=>{i()}),T(e,t=>{t&&e.isProject&&i()}),q(()=>{window.clearInterval(n)});const i=()=>{const t=new Date().getTime()/1e3;parseInt(String(t))<Number(e.startTime)&&g(e.startTime),parseInt(String(t))>=Number(e.startTime)&&parseInt(String(t))<Number(e.endTime)&&g(e.endTime)},y=C();x(()=>y);const d=M(),b=x(()=>d),w=L();T(()=>b.value.currentTab,t=>{t&&(clearInterval(n),window.clearInterval(n),i())});const g=t=>{n=setInterval(()=>{let N=new Date().getTime()/1e3,r=t-parseInt(String(N));if(clearInterval(n),window.clearInterval(n),n=null,i(),r==0){const I=w.currentRoute.value.path,B=w.currentRoute.value.params.id||"";I.includes("/launchpad")&&d.setLaunchpadAllPools(),(I.includes("/launchpad-detail")||I.includes("/launchpad-project-detail"))&&(d.setLaunchpadPoolsLoading(!0),d.getCurrentLaunchpadPoolInfo(B));return}r--;let o=parseInt(String(r/60/60/24));o=o<10?"0"+o:o;let s=parseInt(String(r/60/60%24));s=s<10?"0"+s:s;let c=parseInt(String(r/60%60));c=c<10?"0"+c:c;let l=parseInt(String(r%60));l=l<10?"0"+l:l,S.value=o,u.value=s,a.value=c,v.value=l},1e3)};return{day:S,hour:u,min:a,sec:v}}};const f=e=>(R("data-v-1403cbe3"),e=e(),V(),e),H={key:0,class:"count-down"},J=f(()=>h("span",null,"D : ",-1)),U=f(()=>h("span",null,"H : ",-1)),W=f(()=>h("span",null,"M : ",-1)),Y=f(()=>h("span",null,"S",-1));function z(e,S,u,a,v,n){return u.isShow?(j(),k("div",H,[m(_(a.day)+" ",1),J,m(" "+_(a.hour)+" ",1),U,m(" "+_(a.min)+" ",1),W,m(" "+_(a.sec)+" ",1),Y])):A("",!0)}const Q=P(E,[["render",z],["__scopeId","data-v-1403cbe3"]]);export{Q as _};
