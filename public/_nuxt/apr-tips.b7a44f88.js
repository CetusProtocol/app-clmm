import{s as d,e as g}from"./pool.dabf3b56.js";import{i as k}from"./import-icon.de3e6c66.js";import{e as c,a as w,l as y,E as h,m as I,o as r,f as s,x as n,h as o,v as a,u as t,F as E,s as B,z as G,p as R,k as v}from"./entry.cb7a74c4.js";import{u as N}from"./sha256.1260a8a5.js";const f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKqADAAQAAAABAAAAKgAAAADUGqULAAAE6klEQVRYCdVZXWxURRQ+W2q7tFtDRZTadJUQxFbAxPBgiNL4E01UajWiElQaoaa+8YgJTQgmBmMML8YIKlKNQaMREXmpwloLiQ9qBLQ/RmtttTUaRENr0QiX75t2hvt/73bv1vQkp3PmnDNnvs6c+bubksJoOZo3gRvAV9kYoozYuAfyh+CT4BkjgtsJHgBbeTLbsC1jFI2yiNwBPgfOF6DbnzEYizETozJE2gE+C3Z3WGh9Yio2+yiIFqB1N7hQQFHt2Qf7mhatQKtBcFQnSdnZF/vMi9jgDDgpEHHjsM/YYDkFg/8DSP3PsO/INGBSz0ROalBBJTGELrDn4BDU2Fq64X6r+bO3rI1/fWk9fPKgteqFLdYlmcpA/7BYlTVXRLXjTuNL3NO4XfgGuP3N5602q8/D6wcOWzE6dcRsaH3I2jT+tVV3580OvatvYjH7bAkqmp6BkNYVe4mRlCWPrlGqcxP/yM+dx2R8+FdVr1pUK42vsGk8AkhZvWu7lFak5a79L0rFwsB0JBZPYB5pgScOp5uj2fr3ceuyZdeqUSidm7aaj+4zI1xx5eVho6NsHMm281OzgrJ+44NRbYhJHbd6RJ+AQssQnTT/huuUYrT7C/njm++U/N/EWenf+75x1D5G4RL0SEoKBsDrat0qva+95/LyVImJ2Ay4+zwuNsXY0IiqVdcvFoyksSy48Xojjw2PGtktTBOkDqOwlaLGDXaR1vqVw8jJ6mVLpLJuodz78etqJAmyoe0R5T7204j82Tfg11QKBMmYxLaCE7EV7Ela6AyVVWVk7YkDUnVNrdEZAdN48I4W+eXI50alhfpNa6VxN0LnN926ub1sZw7U2zV+8r9nxuSDVetk6FCXw8yRnAGQ7FNhzEGIWn3GztXN/Q/5aqVKSozeHgMjme/q9o1ji5mDLP02RVSDSHsRQLJPYkzullQkkATKW1UyQIsI0gAteOo9IJGjGIAkWU19rpCgHpABx2IqlVILkAsxznHrwpTjhj957EDIlwDSuU8+2e57LNbedpPcuudZyVzNp/8kcavram2X8dHftCqsHOE+2hvmEWTzBfnqux53glzzyV4HSDpl72mU5mP7BPdZTxsfRc8cKE+Dn/IxBqrigsQ+K01HOqRsXpXK2J6X35ae3e9Ien61ZLI1Ul59qZSmy2W482hgX1OGzdqBB3Ws5PfkZMjC4aGgL9urX9pm4vOK+NjQp8rGl0JE3+oSwaknHZgswv/GHUkdJVNXo0X5/atvjcwr4uneH1Q9k72Yt8bBKShsGuge2M477c5aviDZ+tTxPhNkacsD5oqIy7fU3LJS2ew+xvmiQEzEpu41Wt0B4XFdsZd4E8m67zvV84EJ0sXV7bNw7G20fPdHu9TCYZ3PF44kQc6ZW65cci1PS3/Hfu3uLt+AYoNbmYUi8PsS9z8+yJij8IvNfPit//GwyVWdsyz5YAyJ5XjcucGGPpfzfW1qELjPqqc1Fw6f2nyD8emt7QHlDjc4e33WfIAg6FnxSUeP7qz4SGYHO4hKVC4lZWdfsb/kwddBTINucFJgguKwj8BPJg5EIRUuMK7AwK0LtiAAUXpuQYzNPhIj7rM8FAI//cAWBUzbGYOxGLNoxG9BO8EDYN1x3JJt2FZ9T0IZm1KxPf0dmfxNYL67w34Q452XP4idAE+LLgDdRuc2n6FW3gAAAABJRU5ErkJggg==",L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKqADAAQAAAABAAAAKgAAAADUGqULAAAFAUlEQVRYCdVZa2xURRQ+W2u3QLtAFvrwUShompLaGkM0gfAHDMXUlMcPIAI+KiWQGEB+NGowISFBMEHUqBGKREI1kR88Gkh4WRIaCBpjaCGFKo+lainVYmghhSCM55vdGe7ex967u7clPcnZe+bMeXw7O3PuzGyA0qPn2L2aeRLzEwZmkToN3MZyI/NZ5kEjgNvCfJlZJMnwgS9iDBgVceSdzPeZkwVotkcMxEJM3yiLI21kvsNsTphuuz8WGznSorHs3cycLiA3f+RArpSonL0izG5J/OpHLuRMiuDQx+wXCK9xkNMzWPwEkUcAUn0Z5HadBpjUgzEnFSinJzAkXGCb2MDJWZRVvSFe23pCrG66KWq+Pyumr9ossobnONonipUzptDND5VGU0BL0ZrWzu1sg06Lr67bRZNmLdZtJdy8doW+q51Kt/65plSuz4o5tTTj3U9pb91cuvLTESd7lMMS5g4YZOAjRuv5aQuSR1KD/O9uP0V+PkJ93X9It5GFxTTrg3oVw/UJkJXvbaXM4HCa+/FeygkXOPkACzBJUkDxSrMOV8yovPptKQHkrpoXaffKSto+v4T+aj0p9ROmVNGIcH7M2vmhQBLhhxR0bPNKutXT5ewQxSRftwpoDVsr2eKY92yF1P3Z0kx/Xzon5Xt3+uncwW+1bd4zURutMAlmkIc21FJr4zcmK0sTmIBNg5ttMTEoers6ZCs8vpQezx6me/JLXtByb2wqaIVBSBGkiiCxZXILBbZYae2eEZ7wYyaUUW7e0zT/86NyJAHy+XnLpXlv11W6Eblg50ppgkRMYCvHZFnLrCctyxYKjsiltxpaKVQ43tKHufbDOy/T1V+aLH0Vs5dS5fvbWB+dkx5/bkscVnyIOVBq12PU3b3dRw21U+jyqYNGNWEkBwEkckqMx1lwK766n1e3KH5ppggXl4pARobWG2PwSIq60w+YhXxy1bC1M/q4yMe5n1Dk0w2k/QcAJGIDo3+7pAECCaB9mKO+kI8LxxYPgHba9iShNIM8/NEyL8U8iQzUmTZQM0iUoJb92y0gAoEA8QIkXoieXremAJ0o+CmPqBmk00iOmzydXlm7g0IF43R+lDp8KY+7Ljmi57V3EoIdSLuRBMgFXxyLA4k02Mgsqj9JvJ/1krXtMbb6l3mFF2tl4xUk11la+GUTBXNGsaugM3u+ppZ922jYyDCF8osoO3c0ZWZlJ9qTqpSrlYAbDF0LE8kMMq6Yo+1kj5dCtOgLMbPuK23HGxuxorFD9uGk4OQf0wOb3j3tR8ONvI6kihPiTYyi6+2/KpGwReyJRGdcqMD1skRiU3V0B0d5oCPZCMmCRIjuiy06UlnVm3qLOHZiGT1VMU32df/+0EYbPxSACdgIqx6EW7YG5tfRMBMfxGjGms9YHd0FYXXbLRyz3+2e63Ijg4XzZPlUWrq7XY4kQGYGo/tal80zMMkbQGRWVMTCb8xBpTA+Uf9wxvnxk1WeQCpffMnF9adst4hthxrowLolytT8jDvcmTs3scJxcns44tr68n5WHq2xcHDUxpEbR+9EubhvoxmcsT1kLiAAekhc6ajRHRKXZEawEW64zSW/+pHL800e28YRpkEzs19gnOIgh+sNXhwymwYWGFYgyoVTolT1vl2NG3Gjzu5kvu8DYMRALMQcMHokf98Y30ypfDNM/mpmnLsT/SGGHQj+EGtlTon+B3ie92TJ5YyPAAAAAElFTkSuQmCC";const T=w({props:{rewarderInfo:{type:Array,default:()=>[]},lItem:{type:Object,default:()=>({})}},setup(A){const{t:i}=y(),l=h(),m=N(),p=I(()=>m),u=I(()=>p.value.chainName);return{route:l,t:i,sFixD:d,store:p,chainName:u}}}),U=A=>(R("data-v-c0bc6038"),A=A(),v(),A),b={class:"apr-hover-con"},Y={key:0,class:"title"},D={key:1,class:"value"},M={key:2,class:"apr-hover-bottom"},Q={class:"apr-hover-bottom-item"},V={class:"left"},X={key:0,src:f,alt:""},z={key:1,src:L,alt:""},F=U(()=>o("span",null,"Fee Earnings",-1)),S={class:"right"},C={class:"left"},P=["src"],q={class:"right"},J={key:3,class:"apr-hover-top"},K={key:4,class:"apr-hover-top"};function W(A,i,l,m,p,u){return r(),s("div",b,[A.lItem.is_display_rewarder&&A.rewarderInfo&&A.rewarderInfo.length>0?(r(),s("div",Y,"Total APR :")):n("",!0),A.lItem.is_display_rewarder&&A.rewarderInfo&&A.rewarderInfo.length>0?(r(),s("div",D,[o("span",null,a(A.lItem.is_display_rewarder?A.lItem.aprTotal>0&&A.lItem.aprTotal<.01?"<0.01":("addCommom"in A?A.addCommom:t(g))(A.lItem.aprTotal,2):A.lItem.apr>0&&A.lItem.apr<.01?"<0.01":("addCommom"in A?A.addCommom:t(g))(A.lItem.apr,2))+"% APR",1)])):n("",!0),A.lItem.is_display_rewarder&&A.rewarderInfo&&A.rewarderInfo.length>0?(r(),s("div",M,[o("div",Q,[o("div",V,[A.chainName=="Aptos"?(r(),s("img",X)):(r(),s("img",z)),F]),o("div",S,[o("span",null,a(Number(A.lItem.apr)!==0&&Number(A.lItem.apr)<.01?"<0.01":("sFixD"in A?A.sFixD:t(d))(A.lItem.apr,2,0))+"%",1)])]),(r(!0),s(E,null,B(A.rewarderInfo,e=>(r(),s("div",{key:e},[e.rewarder_display?(r(),s("div",{key:0,class:G(["apr-hover-bottom-item",e.rewarders=="0%"||e.rewarderApr=="0%"?"reward-none":""])},[o("div",C,[o("img",{src:e.logoUrl||(A.store.theme==="default"?("importIcon"in A?A.importIcon:t(k))("/image/coins/unknown.png"):("importIcon"in A?A.importIcon:t(k))("/image/coins/sui-unknown.png")),alt:""},null,8,P),o("span",null,a(e.symbol)+" Rewards",1)]),o("div",q,[o("span",null,a(e.rewarders||e.rewarderApr?(e.rewarders||e.rewarderApr)>0&&(e.rewarders||e.rewarderApr)<.01?"<0.01":("sFixD"in A?A.sFixD:t(d))(e.rewarders||e.rewarderApr,2):"")+"%",1)])],2)):n("",!0)]))),128))])):n("",!0),A.lItem.is_display_rewarder&&A.rewarderInfo&&A.rewarderInfo.length>0?(r(),s("div",J,a(A.chainName=="Aptos"?A.$t("tips.aprTips1"):A.$t("tips.aprTips")),1)):(r(),s("div",K,a(A.chainName=="Aptos"?A.$t("tips.aprTipsTest1"):A.$t("tips.aprTipsTest")),1))])}const x=c(T,[["render",W],["__scopeId","data-v-c0bc6038"]]);export{x as _};
