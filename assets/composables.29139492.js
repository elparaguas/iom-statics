import{a as B}from"./BrForm.4138334e.js";import{u as C,o as m,c as f,f as y,w as M,U as A,z as h,x as T,F as w,h as b,t as v,i as V,a as d,p as R,a3 as N,q as k,a4 as S,a5 as Z,a6 as j,G as z,a7 as E}from"./index.8fd27d99.js";const Y=b(" Cancel "),_e={__name:"FormFooter",props:["formMode","meta","isSubmitting","submitText","submittingText"],setup(e){const t=C();return(o,a)=>{const i=B;return m(),f(w,null,[y(i,{class:"br-btn--alt br-form--submit-btn",onClick:a[0]||(a[0]=A(c=>h(t).push({name:"ip"}),["prevent"]))},{default:M(()=>[Y]),_:1}),e.formMode==="perForm"?(m(),T(i,{key:0,class:"br-btn--main br-form--submit-btn",type:"submit",disabled:e.meta.touched&&!e.meta.valid,loading:e.isSubmitting},{default:M(()=>[e.isSubmitting?(m(),f(w,{key:1},[b(v(e.submittingText),1)],64)):(m(),f(w,{key:0},[b(v(e.submitText),1)],64))]),_:1},8,["disabled","loading"])):V("",!0)],64)}}},D={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256"},I=d("path",{fill:"currentColor",d:"M128.1 16a88.1 88.1 0 0 0-88 88c0 75.3 80 132.2 83.4 134.6a8.3 8.3 0 0 0 9.2 0c3.4-2.4 83.4-59.3 83.4-134.6a88.1 88.1 0 0 0-88-88Zm0 56a32 32 0 1 1-32 32a32 32 0 0 1 32-32Z"},null,-1),U=[I];function G(e,t){return m(),f("svg",D,U)}var L={name:"ph-map-pin-fill",render:G};const O={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256"},H=d("path",{fill:"currentColor",d:"M174.6 81.4a80 80 0 1 0-93.2 93.2a80 80 0 1 0 93.2-93.2ZM32 96a64 64 0 0 1 126-15.9A79.9 79.9 0 0 0 80.1 158A64.2 64.2 0 0 1 32 96Zm128 128a64.2 64.2 0 0 1-62-48.1A79.9 79.9 0 0 0 175.9 98A64 64 0 0 1 160 224Z"},null,-1),J=[H];function K(e,t){return m(),f("svg",O,J)}var P={name:"ph-intersect-fill",render:K};const Q={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},W=d("path",{fill:"currentColor",d:"M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"},null,-1),X=[W];function ee(e,t){return m(),f("svg",Q,X)}var te={name:"ic-round-arrow-back-ios",render:ee};const se={class:"sticky rounded-t-lg top-0 z-1000 py-3 lg:py-3 px-4 border-b border-light-900 font-medium bg-slate-50 block <md:border-dark-400"},oe={class:"flex items-center justify-between flex-nowrap"},re={class:"flex items-center"},ne={class:""},ae={class:"uppercase tracking-wider text-xs text-slate-900"},ie={class:"flex items-center text-xs mt-1 text-slate-500 font-normal justify-self-end"},ce=d("div",{class:"absolute w-full h-3 bg-transparent left-0 bottom-0",style:{"box-shadow":"0 14px 20px #fff"}},null,-1),he={__name:"CardNav",setup(e){const t=R(),o=N(),a=C(),i=k(()=>{const{ip:c}=o.params,{loc:l}=o.query,{name:s}=t.ips.find(({id:r})=>r==c)||{};return{ip:s,loc:l}});return(c,l)=>{const s=te,r=P,n=L;return m(),f("nav",se,[d("div",oe,[d("div",re,[y(s,{class:"hidden md:block cursor-pointer text-dark-700/80 rounded-full transform hover:bg-dark-200/60 hover:text-dark-500 active:bg-dark-300/60 active:text-dark-700 active:scale-90 h-9 p-1.8 w-9 mr-4",onClick:l[0]||(l[0]=u=>h(a).push({name:"ip"}))}),d("div",ne,[d("span",ae,v(h(o).meta.crumb),1)])]),d("div",ie,[y(r,{class:"h-6 w-6 md:mr-1.5 text-dark-500/90"}),b(" "+v(h(i).ip)+" ",1),y(n,{class:"ml-2 md:ml-5 md:mr-1.5 h-5 w-5 text-dark-500/90"}),b(" "+v(h(i).loc),1)])]),ce])}}},x=R(),F={field:"fieldvisitsurvey/",staff:"staffsurvey/",benef:"benefsurvey/"},le=e=>async({values:t,errors:o,results:a,notify:i})=>{const c=document.querySelectorAll(".br-errored");i(`This form contains <b>${c.length}</b> fields with errors`,"Cannot proceed before all fields containing errors are corrected.","danger"),setTimeout(()=>{window.scrollBy({top:c[0].getBoundingClientRect().top-150,behavior:"smooth"})},1500)},ue=(e,t)=>async(o,{setErrors:a,notify:i})=>{const c=t.currentRoute.value,{ip:l}=c.params,{loc:s}=c.query;o.ip=l,o.location=s;const r=F[e],n=await j(r,o);if(n.status===422)a(n.data);else if(n.status>=400)i(n.data,null,"danger");else if(n.status===200){const{id:u}=n.data;i("Form saved successfully.",null,"success"),x.$patch(_=>{_.surveys.push({...o,id:u,survey:e,fetched:!0})}),setTimeout(()=>{t.push({name:"ip"})},1e3)}},de=(e,t)=>async(o,{value:a,setSuccessText:i,setError:c})=>{await S(.3);const{id:l}=t.currentRoute.value.query,s=F[e],r=await Z(s,{select:{id:l},payload:{[o]:a}});if(r.status>=400)return c(r.data);x.$patch(n=>{const u=n.surveys.find(_=>_.id==l);u&&(u[o]=a,u.fetched=!0)}),i("Field has been updated successfully")},me=(e,t,o,a)=>{const i=k(()=>{const s=t.currentRoute.value;if(!s)return"";const{ip:r}=s.params,{loc:n}=s.query;return`${s.name}-${r}-${n}`}),c=k(()=>{const s=t.currentRoute.value;if(!i.value)return;const{id:r}=s.query;return r?"perField":"perForm"}),l=s=>{const r=Object.entries(s);for(let[n,u]of r)o.value[n]=u};return z(c,async s=>{if(s==="perField"){await S(.3),a.value=!0;const r=t.currentRoute.value,n=x.surveys.filter(p=>p.fetched).find(p=>p.id==r.query.id);if(n)return a.value=!1,l(n);const u=F[e]+"getall/",_=await E(u,r.query.id);if(_.status===200){const{data:p}=_;x.$patch(g=>{const $=g.surveys.findIndex(({id:q})=>q==p.id);g.surveys[$]={...g.surveys[$]||{},...p}}),l(p),a.value=!1}}},{immediate:!0}),{saveMode:c,formName:i}},ve=(e,t,o,a)=>({formControls:{onFormErrors:le(),onFieldValid:de(e,t),onFormValid:ue(e,t)},...me(e,t,o,a)});export{he as _,_e as a,ve as u};
