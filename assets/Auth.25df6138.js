import{n as A,g as E,o as c,c as d,a,r as h,u as q,b as M,m as f,d as y,e as k,f as u,w as v,h as x,t as z,i as Y,j as $,k as I,l as R,F as C,_ as B,p as N,q as j,s as P,v as D,x as T,y as U,z as _,A as L,B as O}from"./index.fc03ebdb.js";import{_ as X}from"./BrForm.d11a9a22.js";import{_ as F}from"./BrAlert.42ed2b44.js";const W=.4,H="power4.out";function S(t,e){if(t.dataset.anim){const[s,r=W,i=0,w=H]=t.dataset.anim.split(";");e.push([t,s,r,i,w])}if(t.children)for(const s of t.children)S(s,e);return e}const Q=t=>{switch(t){case"top":return{y:"-100%",opacity:0,filter:"blur(10px)"};case"bottom":return{y:"100%",opacity:0,filter:"blur(10px)"};case"right":return{x:"100%",opacity:0,filter:"blur(10px)"};case"left":return{x:"-100%",opacity:0,filter:"blur(10px)"};case"text":return{x:-50,opacity:0,delay:.5,stagger:.01,rotateX:70};default:return{opacity:0,scale:.4}}},G=async t=>{await A();const e=[];S(t.value,e);const s=E.timeline();for(let[r,i,w,m,o]of e)r=i=="text"?r.querySelectorAll("span"):r,s.from(r,{...Q(i),ease:o,delay:m,duration:w})},J={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},K=a("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m11 5l-7 7l7 7m-7-7h16"},null,-1),tt=[K];function et(t,e){return c(),d("svg",J,tt)}var at={name:"akar-icons-arrow-left",render:et};const rt={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},ot=a("path",{fill:"currentColor",d:"M16 3c-3.035 0-5.586 1.965-6.625 4.625l1.844.75C11.977 6.434 13.836 5 16 5c2.754 0 5 2.246 5 5v1.375C19.523 10.515 17.824 10 16 10c-5.512 0-10 4.488-10 10s4.488 10 10 10s10-4.488 10-10a9.97 9.97 0 0 0-3-7.125V10c0-3.844-3.156-7-7-7zm0 9c4.43 0 8 3.57 8 8s-3.57 8-8 8s-8-3.57-8-8s3.57-8 8-8zm0 6a2 2 0 0 0-2 2c0 .738.402 1.371 1 1.719V25h2v-3.281c.598-.348 1-.98 1-1.719a2 2 0 0 0-2-2z"},null,-1),st=[ot];function it(t,e){return c(),d("svg",rt,st)}var nt={name:"la-unlock-alt",render:it};const lt={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},ct=a("path",{fill:"currentColor",d:"M16.188 4C8.823 3.89 2.914 10.484 4.155 18.031C5 23.152 9.203 27.18 14.344 27.875c3.465.469 6.703-.531 9.156-2.5l-1.25-1.563c-2.047 1.641-4.738 2.489-7.656 2.094c-4.254-.574-7.742-3.953-8.438-8.187C5.11 11.348 9.992 5.91 16.156 6c5.254.078 9.684 4.434 9.844 9.688c.004.113 0 .222 0 .343A3.984 3.984 0 0 1 22 20c-1.117 0-2-.883-2-2v-8h-2v.781A4.43 4.43 0 0 0 15.5 10a4.516 4.516 0 0 0-4.5 4.5v3c0 2.473 2.027 4.5 4.5 4.5c1.348 0 2.547-.613 3.375-1.563C19.609 21.372 20.73 22 22 22c3.285 0 5.988-2.68 6-5.969c0-.133.004-.261 0-.406C27.809 9.289 22.523 4.094 16.187 4zm-.688 8c1.39 0 2.5 1.11 2.5 2.5v3c0 1.39-1.11 2.5-2.5 2.5S13 18.89 13 17.5v-3c0-1.39 1.11-2.5 2.5-2.5z"},null,-1),mt=[ct];function dt(t,e){return c(),d("svg",lt,mt)}var V={name:"la-at",render:dt};const wt=a("article",{class:"welcome","data-anim":"bottom;.5;-.5"},[a("div",null,"Sign in"),a("p",null," Please enter the details below to access your account. ")],-1),pt={key:0,class:"!w-full bg-danger-50"},ut={class:"auth-form","data-anim":"bottom;.5;-.3"},vt={__name:"Login",props:["requestedview"],emits:["update:requestedview"],setup(t,{emit:e}){const s=h(null);q();const r=M({}),i={form:{type:"stacked-int",save:"perForm"},fields:[{name:"email",label:"Email address",type:"email",beforeIcon:f(V),parentClasses:"br-span-full",rules:y().email().required(),placeholder:"Enter your email"},{name:"password",rules:y().required(),beforeIcon:f(nt),parentClasses:"br-span-full",placeholder:"\u2022\u2022\u2022",type:"password",label:"Password"}]},w=({values:o,errors:n,results:l,notify:p})=>{},m=async(o,{setErrors:n,notify:l})=>{const p=await R(o.email,o.password),{status:g}=p;if(g>=400){n({email:" ",password:" "}),g===403&&(s.value="These credentials don't match our records.");return}g===200&&window.location.reload()};return(o,n)=>{const l=F,p=k("br-transition"),g=X;return c(),d("section",null,[wt,u(p,{name:"dissolve"},{default:v(()=>[s.value?(c(),d("div",pt,[u(l,{class:"text-xs !w-content !mx-auto",show:!0,level:"danger"},{default:v(()=>[x(z(s.value),1)]),_:1})])):Y("",!0)]),_:1}),a("article",ut,[u(g,$({name:"login",modelValue:r,"onUpdate:modelValue":n[1]||(n[1]=b=>I(r)?r.value=b:null)},{schema:i,onFormErrors:w,onFormValid:m},{"submit-text":"Sign in","submitting-text":"Signing in..."}),{"after-fields":v(()=>[a("div",{class:"br-link br-primary iom-login--after-fields",onClick:n[0]||(n[0]=b=>e("update:requestedview","forgot"))},"Forgot password")]),_:1},16,["modelValue"])])])}}},gt=a("article",{class:"welcome","data-anim":"bottom;.5;-.5"},[a("div",null,"Forgot password?"),a("p",null," No worries. It happens. Please enter below the email address associated with your account. ")],-1),ht={class:"auth-form","data-anim":"bottom;.5;-.3"},ft={key:1,class:"auth-result"},yt=x(" Now check your inbox. "),xt=x(" We have sent you a link to reset your password. "),bt={__name:"ForgotPass",setup(t){const e=h(!1),s=h({}),r={form:{type:"stacked",save:"perForm"},fields:[{name:"email",label:"Email address",type:"email",beforeIcon:f(V),parentClasses:"br-span-full",rules:y().email().required(),placeholder:"Enter your email"}]},i=({values:m,errors:o,results:n,notify:l})=>{},w=async(m,{setErrors:o,notify:n})=>{e.value=!0};return(m,o)=>{const n=X,l=F;return c(),d("section",null,[e.value?(c(),d("section",ft,[u(l,{show:e.value,"onUpdate:show":o[1]||(o[1]=p=>e.value=p),level:"info"},{desc:v(()=>[xt]),default:v(()=>[yt]),_:1},8,["show"])])):(c(),d(C,{key:0},[gt,a("article",ht,[u(n,$({modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=p=>s.value=p),name:"forgot"},{schema:r,onFormErrors:i,onFormValid:w},{class:"!bg-transparent !h-full","submit-text":"Reset password","submitting-text":"Resetting..."}),null,16,["modelValue"])])],64))])}}};const Z=t=>(T("data-v-16286a37"),t=t(),U(),t),_t={class:"w-full pb-3 origin-top lg:col-start-1 lg:pt-[25vh] relative bg-blend-darken","data-anim":"top;0.9;power4.in"},kt=Z(()=>a("div",{class:"iom-logo"},null,-1)),zt=Z(()=>a("div",{class:"lg:relative lg:w-[5vw] lg:h-1.5 lg:bg-white lg:mx-auto lg:mt-12 lg:mb-8","data-anim":"left;0.4;-0.4;power4.in"},null,-1)),Yt={"data-anim":"text;.3;-.4;power4.out"},$t={__name:"Auth",setup(t){const e={login:vt,forgot:bt};N();const s=j(()=>e[i.value]),r=h(null),i=h("login");return P(()=>{G(r)}),(w,m)=>{const o=at,n=k("br-transition");return c(),d("section",{ref_key:"form",ref:r,class:"iom-auth-form w-full bg-blue-gray-100 text-dark-700 h-screen lg:grid lg:grid-cols-2"},[a("header",_t,[u(n,{name:"dissolve",delay:.5},{default:v(()=>[i.value!=="login"?(c(),_(o,{key:0,class:"br-link go-back",onClick:m[0]||(m[0]=l=>i.value="login")})):Y("",!0)]),_:1},8,["delay"]),kt,zt,a("p",Yt,[(c(),d(C,null,D("Field Survey Platform",l=>a("span",{key:l},z(l),1)),64))])]),u(n,{name:"horizontalBlurRight"},{default:v(()=>[(c(),_(L(O(s)),{requestedview:i.value,"onUpdate:requestedview":m[1]||(m[1]=l=>i.value=l)},null,40,["requestedview"]))]),_:1})],512)}}};var St=B($t,[["__scopeId","data-v-16286a37"]]);export{St as default};
