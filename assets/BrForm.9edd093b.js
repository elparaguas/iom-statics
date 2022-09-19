import{o as i,c as n,A as w,i as b,a as h,B as _,C as Yt,b as E,D as Et,r as M,q as g,E as ot,G as Ct,H as Xt,I as Lt,J as st,K as Mt,L as Zt,M as It,N as Dt,e as Rt,x as Z,f as N,O as it,w as F,h as P,t as z,T as qt,z as l,F as I,v as A,P as D,j as nt,y as Jt,Q as G,R as Ut,S as Nt,_ as Pt,U as At}from"./index.edb05c85.js";const Gt=["disabled"],Ht={key:0,class:"br-btn--icon"},Kt={key:1,class:"br-btn--icon",viewBox:"0 0 38 38"},Qt=Yt('<defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-color="#fff" stop-opacity="0" offset="0%"></stop><stop stop-color="#fff" stop-opacity=".631" offset="63.146%"></stop><stop stop-color="#fff" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)"><path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="4"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></path><circle fill="#fff" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></circle></g></g>',2),Wt=[Qt],Ot={class:"relative"},jt={key:0},tr={__name:"BrButton",props:{disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},setup(u){const $=u;return(c,H)=>c.$slots.default?(i(),n("button",{key:0,disabled:!!u.loading||u.disabled,tabindex:"0",class:_([c.$attrs.class,"br-btn"])},[c.$slots.beforeicon&&!u.loading?(i(),n("div",Ht,[w(c.$slots,"beforeicon")])):b("",!0),$.loading?(i(),n("svg",Kt,Wt)):b("",!0),h("span",Ot,[w(c.$slots,"default")])],10,Gt)):(i(),n("button",{key:1,class:_([c.$attrs.class,"br-btn br-btn--lone-icon"])},[c.$slots.beforeicon&&!$.loading?(i(),n("div",jt,[w(c.$slots,"beforeicon")])):b("",!0)],2))}};const rr=["onSubmit"],er=["innerHTML"],ar={key:0,class:"br-form--section-header"},or={class:"block"},sr={key:0},ir={key:1},nr=["id"],lr={key:0,class:"br-form--ext-label"},dr={key:0,class:"br-form--ext-label--required"},cr=h("span",null,null,-1),mr=[cr],fr={class:"br-form--field"},br={key:0,class:"br-form--submit"},vr={__name:"BrForm",props:{name:{type:String,required:!0},debounceInterval:{type:Number,default:700},modelValue:{type:Object,default:()=>({})},onFieldValid:{type:Function,default:async()=>{}},onFormErrors:{type:Function,default:async()=>{}},onFormValid:{type:Function,default:async()=>{}},persistState:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rootLoading:{type:Boolean,default:!1},submitText:{type:String,default:"Submit"},submittingText:{type:String,default:"Submitting..."},schema:{type:Object,default:()=>({})},wrapperClass:{type:[Array,String],default:""}},emits:["update:modelValue"],setup(u,{emit:$}){const c=u,H=["password"],C=E({}),{modelValue:lt,schema:m,debounceInterval:dt,name:ct,persistState:K,rootLoading:mt,readonly:y}=Et(c),ft=["checkbox","switch"],Q=E({}),bt=M({}),pt=M({}),T=E({}),X=M({}),W=M(!1),R=`br:formperm:${ct.value}`,v=E({msg:"",desc:"",open:!1,level:"info"});function O(r,t,e){v.level=e,v.msg=r,v.desc=t,v.open=!0}const x=g(()=>m.value.form&&m.value.form.save||"perForm"),q=g(()=>(m.value.form||{}).type||"stacked"),wt=["selectionBox","decision","mapping"],ut=g(()=>Object.fromEntries(m.value.fields.map(r=>[r.name,wt.includes(ot(r.type,!0))]))),gt=g(()=>m.value.fields.filter(r=>H.includes(r.type)).map(r=>r.name)),j=r=>{if(x.value==="perForm"&&K.value){const t=Object.fromEntries(Object.entries(r).filter(([e,a])=>a!==void 0&&!gt.value.includes(e)));localStorage.setItem(R,JSON.stringify(t))}},J=g(()=>{let r=Object.fromEntries(m.value.fields.map((t,e)=>{if(t.type==="select")m.value.fields[e].mode=t.rules.type==="array"?"multi":"single";else if(t.type==="radio")m.value.fields[e].mode="single";else if(ft.includes(t.type))m.value.fields[e].mode="multi";else if(t.type==="mapping"){const{data:a,rules:{fields:d}}=t;for(const f in a){const{label:o}=a[f];d[f].spec.label=o}}return[t.name,t.rules.label(t.label)]}));return Ct().shape(r)}),B=g(()=>{var r=E(lt.value||{});if(x.value==="perForm"&&K.value){let t=Xt(R)||{};Object.assign(t,r),r=t}return r});g(()=>{const r=["mapping"];return m.value.fields.filter(({type:t})=>r.includes(t)).map(({name:t})=>t)});const{handleSubmit:vt,isSubmitting:V,setFieldError:pr,setErrors:U,errors:tt,meta:Y,submitForm:wr,values:L}=Lt({validationSchema:J.value,initialValues:B.value}),ht=g(()=>Object.entries(tt.value).reduce((t,e)=>{let[a,d]=e;return a.match(".")?(a=a.split(".")[0],t[a]||(t[a]=[]),t[a].push(d)):t[a]=d,t},{}));st("IS_FORM_SUBMITTING",V),st("FORM_MODE",x);const yt=Nt(),xt=["stacked-int","stacked-2col-int","stacked-disjoint-int"],kt=g(()=>{const r=Object.entries(J.value.resolve({}).describe().fields);return Object.fromEntries(r.map(([t,e])=>[t,e.type==="object"?[e]:e.tests]))}),_t=({name:r})=>mt.value||V.value||!!T[r],S={},St=Mt(async([r,t])=>{if(y.value)return;let e=S[t];if(e=e==null||e==null?Y.value.initialValues[t]:e,r instanceof Object){if(JSON.stringify(r)===JSON.stringify(e))return;S[t]=JSON.parse(JSON.stringify(r))}else{if(e==r)return;S[t]=r}T[t]=!0;const a=f=>X.value[t]=f,d=f=>U({[t]:f});await c.onFieldValid(t,{value:r,setSuccessText:a,setError:d}),T[t]=!1},dt.value),rt=async(r,t,e=null)=>{if(y.value||!t&&t!==0&&t!==!1)return;let a=S[e||r];if(a=a==null||a==null?Y.value.initialValues[e||r]:a,t instanceof Object){if(JSON.stringify(t)===JSON.stringify(a))return;S[e||r]=JSON.parse(JSON.stringify(t))}else{if(a==t)return;S[e||r]=t}T[r]=!0;const d=o=>{X.value[r]=o},f=o=>U({[r]:o});await c.onFieldValid(e||r,{value:t,setSuccessText:d,setError:f}),T[r]=!1},Ft=async([r,t])=>{if(y.value)return;const[e,a]=r.split(":"),d=Q[r];B.value[d]=t,$("update:modelValue",B.value),x.value==="perField"?await rt(e,t,d):j(B.value)},zt=g(()=>{if(!m.value)return{};const r=[];for(let t of m.value.fields){const{models:e,name:a,hidden:d}=t;if(d)continue;const f=ut.value[a];if(t.isCompound=f,x.value==="perField"?(Zt.includes(t.type)?t.handleFieldBlur=async(o,...p)=>{C[a]=!1,o&&await rt(...p)}:t.handleFieldDebounced=St,t.successText=X.value[a],t.loading=_t({name:a})):t.handleFieldDebounced=t.handleFieldBlur=()=>{C[a]=!1},t.schema=kt.value[a],t.validationSchema=J.value.fields[a],t.isRequired=!y.value&&Object.values(t.schema).some(({name:o})=>o==="required"),q.value.match("-int"))t.displayExtLabel=!1,t.displayLabel=!0;else{const o=!xt.includes(q.value);t.displayExtLabel=o&&!f,t.displayLabel=o&&f}t.id=t.id!=null?t.id:`br-field--${t.name}`,e&&Object.entries(e).map(([o,{name:p}])=>{delete m.value.models,t[p]=B.value[o],Q[`${a}:${p}`]=o}),r.push(t)}return{...m.value,fields:r}}),$t=g(()=>{let r=Object.assign({},zt.value);const t=r.sections;if(!t)return{"":{fields:r.fields}};for(let e in r.sections)t[e].fields=new Set;for(let e of r.fields){const{section:a="default"}=e;t[a]||(t[a]={}),t[a].fields||(t[a].fields=new Set),t[a].fields.add(e)}return t}),et=()=>{X.value={}},Tt=vt(async r=>{localStorage.setItem(R,JSON.stringify({})),await c.onFormValid(r,{setErrors:U,notify:O}),W.value=!0,yt.provides[It]},async({values:r,errors:t,results:e})=>{await c.onFormErrors({values:r,errors:t,results:e,notify:O})}),Bt=(...r)=>{if(!(x.value==="perField"||y.value))return Tt(...r)};return Dt(L,r=>{$("update:modelValue",r),!W.value&&!y.value&&j(r)}),(r,t)=>{const e=Pt,a=At,d=Rt("br-transition"),f=tr;return i(),n("form",{class:_(["br-form",`br-form__${l(q)}`]),novalidate:"",target:"_self",enctype:"application/json",onSubmit:Ut(Bt,["prevent"])},[(i(),Z(qt,{to:"body"},[N(e,{show:v.open,"onUpdate:show":t[0]||(t[0]=o=>v.open=o),"auto-close":!0,level:v.level},it({default:F(()=>[h("span",{innerHTML:v.msg},null,8,er)]),_:2},[v.desc?{name:"desc",fn:F(()=>[P(z(v.desc),1)])}:void 0]),1032,["show","level"])])),h("section",null,[w(r.$slots,"before-fields",{errors:l(tt)}),h("section",{class:_(["br-form--main",u.wrapperClass])},[(i(!0),n(I,null,A(l($t),(o,p)=>(i(),Z(d,{key:p,name:"horizontalBlur2"},{default:F(()=>[o.hidden?b("",!0):(i(),n("article",{key:0,ref_for:!0,ref:s=>{s&&(pt.value[p]=s)},class:_(["br-form--section",o.classes||[]])},[p?w(r.$slots,`before-section-${p}`,{key:0}):b("",!0),p?w(r.$slots,`section-${p}`,D(nt({key:1},o)),()=>[o.label?(i(),n("header",ar,[h("span",or,[o.label?(i(),n("h3",sr,z(o.label),1)):b("",!0),o.helpText?(i(),n("div",ir,z(o.helpText),1)):b("",!0)])])):b("",!0)]):b("",!0),p?w(r.$slots,`prepend-section-${p}`,{key:2}):b("",!0),N(d,{name:"dissolve",class:"br-form--fields-wrap",tag:"div",type:"group"},{default:F(()=>[(i(!0),n(I,null,A(o.fields,s=>(i(),n("div",{key:s.name,id:s.id,ref_for:!0,ref:k=>{k&&(bt.value[s.name]=k)},class:_(["field",[l(ht)[s.name]?"br-errored":"",s.parentClasses||""]]),tabindex:"0",onClick:et,onFocus:et},[s.displayExtLabel?(i(),n("article",lr,[s.isRequired?(i(),n("div",dr)):b("",!0),h("label",null,z(s.label),1),N(a,{loading:s.loading},null,8,["loading"])])):!s.isCompound&&s.isRequired?(i(),n("div",{key:1,class:_(["br-form--ext-label--required br-plain-field",C[s.name]?"br-plain-field__focused":""])},mr,2)):b("",!0),h("section",null,[h("div",fr,[(i(),Z(Jt(l(ot)(s.type)),nt({modelValue:l(L)[s.name],"onUpdate:modelValue":k=>l(L)[s.name]=k},s,{class:[s.classes||""],readonly:l(y),"onUpdate:auxModel":Ft,onFieldupdated:s.handleFieldDebounced,onFieldBlur:({valid:k})=>s.handleFieldBlur(k,s.name,l(L)[s.name]),onFocusToggle:k=>C[s.name]=!0}),it({_:2},[A(r.$slots,(k,at)=>({name:at,fn:F(Vt=>[w(r.$slots,at,D(G(Vt)))])}))]),1040,["modelValue","onUpdate:modelValue","class","readonly","onFieldupdated","onFieldBlur","onFocusToggle"]))])]),w(r.$slots,`after-field-${s.name}`),w(r.$slots,"after-field",D(G({fieldObj:s,fields:o.fields})))],42,nr))),128)),w(r.$slots,"after-fields")]),_:2},1024)],2))]),_:2},1024))),128))],2),l(y)?b("",!0):(i(),n("div",br,[w(r.$slots,"submit-button",D(G({formMode:l(x),meta:l(Y),isSubmitting:l(V),submitText:u.submitText,submittingText:u.submittingText})),()=>[l(x)==="perForm"?(i(),Z(f,{key:0,class:"br-btn--main br-form--submit-btn",type:"submit",disabled:l(Y).touched&&!l(Y).valid,loading:l(V)},{default:F(()=>[l(V)?(i(),n(I,{key:1},[P(z(u.submittingText),1)],64)):(i(),n(I,{key:0},[P(z(u.submitText),1)],64))]),_:1},8,["disabled","loading"])):b("",!0)])]))])],42,rr)}}};export{vr as _,tr as a};
