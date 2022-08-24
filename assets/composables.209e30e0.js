import{_ as z}from"./map-pin-fill.534f31ff.js";import{o as _,c as h,a as y,p as M,a3 as D,u as V,q as k,f as $,z as b,t as x,i as R,h as g,x as B,a4 as E,w as q,R as I,F,a5 as N,a6 as A,a7 as L,N as U,a8 as Y}from"./index.7d40272a.js";import{a as G}from"./BrForm.5f1f755c.js";const H={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},J=y("path",{fill:"currentColor",d:"M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"},null,-1),K=[J];function P(s,o){return _(),h("svg",H,K)}var Q={name:"ic-round-arrow-back-ios",render:P};const W={class:"sticky top-0 rounded-t-lg z-1000 py-3 lg:py-3 px-4 border-b border-light-900 font-medium bg-slate-50 block <md:border-dark-400"},X={class:"flex items-center justify-between flex-nowrap"},Z={class:"flex items-center"},ee={key:0},te={class:"uppercase tracking-wider text-xs text-slate-900"},se={class:"flex items-center text-xs mt-1 text-slate-500 font-normal justify-self-end"},re=y("div",{class:"absolute w-full h-3 bg-transparent left-0 bottom-0",style:{"box-shadow":"0 14px 20px #fff"}},null,-1),me={__name:"CardNav",setup(s){const o=M(),e=D(),a=V(),r=k(()=>{const{ip:n}=e.params,{loc:i}=e.query,{name:l}=o.ips.find(({id:d})=>d==n)||{};return{ip:l,loc:i}});return(n,i)=>{const l=Q,d=E,c=z;return _(),h("nav",W,[y("div",X,[y("div",Z,[$(l,{class:"cursor-pointer text-dark-700/80 rounded-full transform hover:bg-dark-200/60 hover:text-dark-500 active:bg-dark-300/60 active:text-dark-700 active:scale-90 md:h-9 md:p-1.8 md:w-9 mr-4",onClick:i[0]||(i[0]=t=>b(a).back())}),b(o).ui.menu==="full"?(_(),h("div",ee,[y("span",te,x(b(e).meta.crumb),1)])):R("",!0)]),y("div",se,[$(d,{class:"h-5 w-5 md:mr-1.5 text-dark-500/90"}),g(" "+x(b(r).ip)+" ",1),b(e).name!=="staff-form"?(_(),B(c,{key:0,class:"ml-2 md:ml-5 md:mr-1.5 h-5 w-5 text-dark-500/90"})):R("",!0),g(" "+x(b(r).loc),1)])]),re])}}},oe=g(" Cancel "),fe={__name:"FormFooter",props:["formMode","meta","isSubmitting","submitText","submittingText"],setup(s){const o=V();return(e,a)=>{const r=G;return _(),h(F,null,[$(r,{class:"br-btn--alt br-form--submit-btn",onClick:a[0]||(a[0]=I(n=>b(o).push({name:"overview"}),["prevent"]))},{default:q(()=>[oe]),_:1}),s.formMode==="perForm"?(_(),B(r,{key:0,class:"br-btn--main br-form--submit-btn",type:"submit",disabled:s.meta.touched&&!s.meta.valid,loading:s.isSubmitting},{default:q(()=>[s.isSubmitting?(_(),h(F,{key:1},[g(x(s.submittingText),1)],64)):(_(),h(F,{key:0},[g(x(s.submitText),1)],64))]),_:1},8,["disabled","loading"])):R("",!0)],64)}}},p=M(),S={field:"fieldvisitsurvey/",staff:"staffsurvey/",benef:"benefsurvey/"},ae=s=>async({values:o,errors:e,results:a,notify:r})=>{const n=document.querySelectorAll(".br-errored");r(`This form contains <b>${n.length}</b> fields with errors`,"Cannot proceed before all fields containing errors are corrected.","danger"),setTimeout(()=>{window.scrollBy({top:n[0].getBoundingClientRect().top-150,behavior:"smooth"})},1500)},ne=(s,o)=>async(e,{setErrors:a,notify:r})=>{const n=o.currentRoute.value,{ip:i}=n.params,{loc:l}=n.query;e.ip=i,e.location=l;const d=S[s],c=await L(d,e);if(c.status===422)a(c.data);else if(c.status>=400)r(c.data,null,"danger");else if(c.status===200){const{id:t}=c.data;r("Form saved successfully.",null,"success"),p.$patch(u=>{u.surveys.push({...e,id:t,survey:s,fetched:!0})}),setTimeout(()=>{o.push({name:"overview"})},1e3)}},ie=(s,o)=>async(e,{value:a,setSuccessText:r,setError:n})=>{await N(.3);const i=o.currentRoute.value.query.id||o.currentRoute.value.params.ip,l=S[s],d=await A(l,{select:{id:i},payload:{[e]:a}});if(d.status>=400)return n(d.data);p.$patch(c=>{const t=c.surveys.find(u=>u.id==i);t&&(t[e]=a,t.fetched=!0)}),r("Field has been updated successfully")},ce=(s,o,e,a,r)=>{const n=k(()=>{const t=e.currentRoute.value;if(!t)return"";const{ip:u}=t.params;if(t.name=="staff-form")return`${t.name}-${u}`;const{loc:m}=t.query;return`${t.name}-${u}-${m}`});let i=[...o.value];const l=k(()=>{const t=e.currentRoute.value;if(!n.value)return;if(t.name==="staff-form")return p.getSurveyStatus(t.params.ip,"staff")?"perField":"perForm";const{id:u}=t.query;return u?"perField":"perForm"}),d=k(()=>p.isObserver?"stacked-disjoint":"stacked"),c=t=>{const u=Object.entries(t);p.isObserver&&(i=i.map(m=>{const f=t[m.name];return f===null||typeof f=="object"&&Object.keys(f).length,m}));for(let[m,f]of u)a.value[m]=f};return U(l,async t=>{if(t==="perField"){await N(.8),r.value=!0;const u=e.currentRoute.value,m=u.query.id||u.params.ip,f=p.surveys.filter(v=>v.fetched).find(v=>v.id==m);if(f)return r.value=!1,c(f);const j=S[s]+"getall/",C=await Y(j,m);if(C.status===200){const{data:v}=C;p.$patch(w=>{const T=w.surveys.findIndex(({id:O})=>O==v.id);w.surveys[T]={...w.surveys[T]||{},...v}}),c(v),r.value=!1}}},{immediate:!0}),{saveMode:l,formName:n,formType:d,fields:i}},pe=(s,o,e,a,r)=>({formControls:{onFormErrors:ae(),onFieldValid:ie(s,e),onFormValid:ne(s,e),readonly:p.isObserver},...ce(s,o,e,a,r)});export{fe as _,me as a,pe as u};
