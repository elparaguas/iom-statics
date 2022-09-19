import{n as A,g as S,o as c,c as d,a as e,r as f,u as X,b as M,m as h,d as g,e as k,f as p,w as v,h as y,t as $,i as C,j as z,k as R,l as B,F as V,p as Z,q as N,s as P,v as I,x as b,y as T,z as D}from"./index.d22dee8e.js";import{_ as F}from"./BrForm.ab9b6199.js";import{_ as Y}from"./BrAlert.14eadb0e.js";const U=.4,j="power4.out";function E(a,t){if(a.dataset.anim){const[s,r=U,n=0,m=j]=a.dataset.anim.split(";");t.push([a,s,r,n,m])}if(a.children)for(const s of a.children)E(s,t);return t}const L=a=>{switch(a){case"top":return{y:"-100%",opacity:0,filter:"blur(10px)"};case"bottom":return{y:"100%",opacity:0,filter:"blur(10px)"};case"right":return{x:"100%",opacity:0,filter:"blur(10px)"};case"left":return{x:"-100%",opacity:0,filter:"blur(10px)"};case"text":return{x:-50,opacity:0,delay:.5,stagger:.01,rotateX:70};default:return{opacity:0,scale:.4}}},W=async a=>{await A();const t=[];E(a.value,t);const s=S.timeline();for(let[r,n,m,u,o]of t)r=n=="text"?r.querySelectorAll("span"):r,s.from(r,{...L(n),ease:o,delay:u,duration:m})},O={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},G=e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m11 5l-7 7l7 7m-7-7h16"},null,-1),H=[G];function J(a,t){return c(),d("svg",O,H)}var K={name:"akar-icons-arrow-left",render:J};const Q={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},tt=e("path",{fill:"currentColor",d:"M16 3c-3.035 0-5.586 1.965-6.625 4.625l1.844.75C11.977 6.434 13.836 5 16 5c2.754 0 5 2.246 5 5v1.375C19.523 10.515 17.824 10 16 10c-5.512 0-10 4.488-10 10s4.488 10 10 10s10-4.488 10-10a9.97 9.97 0 0 0-3-7.125V10c0-3.844-3.156-7-7-7zm0 9c4.43 0 8 3.57 8 8s-3.57 8-8 8s-8-3.57-8-8s3.57-8 8-8zm0 6a2 2 0 0 0-2 2c0 .738.402 1.371 1 1.719V25h2v-3.281c.598-.348 1-.98 1-1.719a2 2 0 0 0-2-2z"},null,-1),et=[tt];function at(a,t){return c(),d("svg",Q,et)}var rt={name:"la-unlock-alt",render:at};const ot={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},st=e("path",{fill:"currentColor",d:"M16.188 4C8.823 3.89 2.914 10.484 4.155 18.031C5 23.152 9.203 27.18 14.344 27.875c3.465.469 6.703-.531 9.156-2.5l-1.25-1.563c-2.047 1.641-4.738 2.489-7.656 2.094c-4.254-.574-7.742-3.953-8.438-8.187C5.11 11.348 9.992 5.91 16.156 6c5.254.078 9.684 4.434 9.844 9.688c.004.113 0 .222 0 .343A3.984 3.984 0 0 1 22 20c-1.117 0-2-.883-2-2v-8h-2v.781A4.43 4.43 0 0 0 15.5 10a4.516 4.516 0 0 0-4.5 4.5v3c0 2.473 2.027 4.5 4.5 4.5c1.348 0 2.547-.613 3.375-1.563C19.609 21.372 20.73 22 22 22c3.285 0 5.988-2.68 6-5.969c0-.133.004-.261 0-.406C27.809 9.289 22.523 4.094 16.187 4zm-.688 8c1.39 0 2.5 1.11 2.5 2.5v3c0 1.39-1.11 2.5-2.5 2.5S13 18.89 13 17.5v-3c0-1.39 1.11-2.5 2.5-2.5z"},null,-1),nt=[st];function lt(a,t){return c(),d("svg",ot,nt)}var q={name:"la-at",render:lt};const it=e("article",{class:"welcome","data-anim":"bottom;.5;-.5"},[e("div",null,"Sign in"),e("p",null," Please enter the details below to access your account. ")],-1),ct={key:0,class:"!w-full bg-danger-50"},ut={class:"auth-form","data-anim":"bottom;.5;-.3"},dt={__name:"Login",props:["requestedview"],emits:["update:requestedview"],setup(a,{emit:t}){const s=f(null);X();const r=M({}),n={form:{type:"stacked-int",save:"perForm"},fields:[{name:"email",label:"Email address",type:"email",beforeIcon:h(q),parentClasses:"br-span-full",rules:g().email().required(),placeholder:"Enter your email"},{name:"password",rules:g().required(),beforeIcon:h(rt),parentClasses:"br-span-full",placeholder:"\u2022\u2022\u2022",type:"password",label:"Password"}]},m=({values:o,errors:l,results:i,notify:w})=>{},u=async(o,{setErrors:l,notify:i})=>{const w=await B(o.email,o.password),{status:_}=w;if(_>=400){l({email:" ",password:" "}),_===403&&(s.value="These credentials don't match our records.");return}_===200&&window.location.reload()};return(o,l)=>{const i=Y,w=k("br-transition"),_=F;return c(),d("section",null,[it,p(w,{name:"dissolve"},{default:v(()=>[s.value?(c(),d("div",ct,[p(i,{class:"text-xs !w-content !mx-auto",show:!0,level:"danger"},{default:v(()=>[y($(s.value),1)]),_:1})])):C("",!0)]),_:1}),e("article",ut,[p(_,z({name:"login",modelValue:r,"onUpdate:modelValue":l[1]||(l[1]=x=>R(r)?r.value=x:null)},{schema:n,onFormErrors:m,onFormValid:u},{"submit-text":"Sign in","submitting-text":"Signing in..."}),{"after-fields":v(()=>[e("div",{class:"br-link br-primary iom-login--after-fields",onClick:l[0]||(l[0]=x=>t("update:requestedview","forgot"))},"Forgot password")]),_:1},16,["modelValue"])])])}}},mt=e("article",{class:"welcome","data-anim":"bottom;.5;-.5"},[e("div",null,"Forgot password?"),e("p",null," No worries. It happens. Please enter below the email address associated with your account. ")],-1),wt={class:"auth-form","data-anim":"bottom;.5;-.3"},pt={key:1,class:"auth-result"},vt=y(" Now check your inbox. "),_t=y(" We have sent you a link to reset your password. "),ft={__name:"ForgotPass",setup(a){const t=f(!1),s=f({}),r={form:{type:"stacked",save:"perForm"},fields:[{name:"email",label:"Email address",type:"email",beforeIcon:h(q),parentClasses:"br-span-full",rules:g().email().required(),placeholder:"Enter your email"}]},n=({values:u,errors:o,results:l,notify:i})=>{},m=async(u,{setErrors:o,notify:l})=>{t.value=!0};return(u,o)=>{const l=F,i=Y;return c(),d("section",null,[t.value?(c(),d("section",pt,[p(i,{show:t.value,"onUpdate:show":o[1]||(o[1]=w=>t.value=w),level:"info"},{desc:v(()=>[_t]),default:v(()=>[vt]),_:1},8,["show"])])):(c(),d(V,{key:0},[mt,e("article",wt,[p(l,z({modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=w=>s.value=w),name:"forgot"},{schema:r,onFormErrors:n,onFormValid:m},{class:"!bg-transparent !h-full","submit-text":"Reset password","submitting-text":"Resetting..."}),null,16,["modelValue"])])],64))])}}},ht={class:"w-full pb-3 origin-top lg:col-start-1 lg:pt-[25vh] relative bg-blend-darken","data-anim":"top;0.9;power4.in"},gt=e("div",{class:"iom-logo"},null,-1),yt=e("div",{class:"lg:relative lg:w-[5vw] lg:h-1.5 lg:bg-white lg:mx-auto lg:mt-12 lg:mb-8","data-anim":"left;0.4;-0.4;power4.in"},null,-1),xt={"data-anim":"text;.3;-.4;power4.out"},Ct={__name:"Auth",setup(a){const t={login:dt,forgot:ft};Z();const s=N(()=>t[n.value]),r=f(null),n=f("login");return P(()=>{W(r)}),(m,u)=>{const o=K,l=k("br-transition");return c(),d("section",{ref_key:"form",ref:r,class:"iom-auth-form w-full bg-blue-gray-100 text-dark-700 h-screen lg:grid lg:grid-cols-2"},[e("header",ht,[p(l,{name:"dissolve",delay:.5},{default:v(()=>[n.value!=="login"?(c(),b(o,{key:0,class:"br-link go-back",onClick:u[0]||(u[0]=i=>n.value="login")})):C("",!0)]),_:1},8,["delay"]),gt,yt,e("p",xt,[(c(),d(V,null,I("Field Survey Platform",i=>e("span",{key:i},$(i),1)),64))])]),p(l,{name:"horizontalBlurRight"},{default:v(()=>[(c(),b(T(D(s)),{requestedview:n.value,"onUpdate:requestedview":u[1]||(u[1]=i=>n.value=i)},null,40,["requestedview"]))]),_:1})],512)}}};export{Ct as default};
