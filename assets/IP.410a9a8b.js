import{_ as O}from"./chevron-right.c0dfd9ec.js";import{o as t,c as n,a as e,p as j,X as H,r as p,u as T,s as U,d as g,Z as J,e as q,z as u,f as d,w,B as b,i as X,j as Y,F as k,v as C,t as $,x as I,h as D,$ as Q}from"./index.c0e4a89d.js";import{_ as W}from"./map-pin-fill.57ce3a32.js";import{_ as Z}from"./BrForm.f16b179e.js";const G={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},K=e("path",{fill:"currentColor",d:"M16.24 7.75A5.974 5.974 0 0 0 12 5.99v6l-4.24 4.24c2.34 2.34 6.14 2.34 8.49 0a5.99 5.99 0 0 0-.01-8.48zM12 1.99c-5.52 0-10 4.48-10 10s4.48 10 10 10s10-4.48 10-10s-4.48-10-10-10zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"},null,-1),ee=[K];function te(_,s){return t(),n("svg",G,ee)}var se={name:"ic-outline-timelapse",render:te};const oe={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ne=e("path",{fill:"currentColor",d:"M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17z"},null,-1),re=[ne];function ae(_,s){return t(),n("svg",oe,re)}var ie={name:"ic-round-check",render:ae};const le={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},ce=e("path",{fill:"currentColor",d:"M26 20h-2v4h-4v2h4v4h2v-4h4v-2h-4z"},null,-1),de=e("path",{fill:"currentColor",d:"M28 8H16l-3.4-3.4c-.4-.4-.9-.6-1.4-.6H4c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h14v-2H4V6h7.2l3.4 3.4l.6.6H28v8h2v-8c0-1.1-.9-2-2-2z"},null,-1),me=[ce,de];function pe(_,s){return t(),n("svg",le,me)}var ue={name:"carbon-folder-add",render:pe};const _e={class:"iom-impl-par pb-4 overflow-hidden md:p-1"},fe={key:0,class:"flex flex-col items-center justify-center relative md:px-12 py-6 transform"},he=e("h5",{class:"text-dark-900 text-lg font-normal mt-3"},[e("span",null,"+"),D(" Implementing Partner")],-1),ve={key:1,class:"pt-2 w-full h-full"},xe=["onClick","data-index"],ye={class:"shadow relative block border transition-all rounded-lg overflow-hidden"},ge={class:"!leading-5 w-full !text-sm pl-4 px-2 py-2 border-b bg-primary-200/30 text-slate-700 cursor-default"},we={class:"p-3 pl-3 md:py-4 flex items-center text-xs"},be={class:"space-y-2 flex-grow max-w-[50%] pr-2"},ke={class:"flex items-center"},Ce={class:"truncate"},$e={class:"bg-primary-500 flex md:flex-grow text-xs justify-between !w-1/2 items-center relative transition duration-300 ring-1 ring-dark-100 rounded-lg overflow-hidden hover:opacity-90 hover:ring-primary-100 hover:cursor-pointer"},Ie={class:"h-full relative mr-1 bg-slate-200/40 py-3 px-2 md:px-3 md:py-3 border-r"},Se=e("div",{class:"flex flex-col items-start my-2"},[e("span",{class:"underline underline-primary-200 flex items-center text-white font-medium"}," Staff Survey ")],-1),Be={__name:"IP",setup(_){const s=j();H();const m=p(""),v=p(null),S=p(null),x=p([]),f=p(!0),z=T(),P=o=>{if(s.isObserver&&!s.getSurveyStatus(id,"staff"))s.observerNotif403.open=!0;else{const r=s.surveys.find(i=>i.survey=="staff"&&i.ip==o.id);r&&z.push({name:"staff-form",params:{ip:o.id},query:{id:r.id}})}},M=async(o,{setErrors:r,notify:i})=>{const a=await Q(o);a.status===200&&(o.id=a.data.id,m.value="",s.$patch(c=>{c.ips.unshift(o)}))},V=()=>{},y=async(o={})=>{f.value=!0;const r=encodeURIComponent(JSON.stringify({population:{$gt:1e4},...o})),i=await fetch(`https://parseapi.back4app.com/classes/greeceCities_List_of_Greek_cities?limit=10&order=-population&keys=name&where=${r}`,{headers:{"X-Parse-Application-Id":"7ULzjba6mbRxuCi9O3umzEUnVhI5fcO14LCJlWeQ","X-Parse-REST-API-Key":"pOJV0euvADHJohCkybQkmxBb9oypFnztrcbOZ8zx"}});try{const a=await i.json();a&&a.results&&(x.value=a.results.map(c=>c.name).sort())}finally{f.value=!1}};U(async()=>{await y()});const B=async()=>{m.value!=="add"&&(m.value="add")},F={form:{type:"stacked-int",save:"perForm"},fields:[{name:"name",label:"Name of the Implementing Institution",type:"text",parentClasses:"br-span-full",rules:g().required(),placeholder:"Red Cross"},{name:"locations",section:"aux",label:"Enter IP's locations",rules:J().min(1).required().of(g()),type:"tagger",parentClasses:"br-span-full",helpText:"Select city locations of this IP's facilities by typing in the city name, followed by comma or Enter",extra:{enableHints:!0,choicesLoading:f,choices:x,onSearchInput:async(o,r)=>{r==0&&await y({name:{$regex:o}})}}}]};return(o,r)=>{const i=ue,a=Z,c=q("br-transition"),A=W,E=ie,L=se,N=O;return t(),n("section",_e,[u(s).isObserver?X("",!0):(t(),n("article",{onClick:B,key:"add",class:"w-full group py-1 px-4 mt-4"},[e("div",{class:b(["overflow-hidden h-full flex items-center justify-center border-dashed bg-white transition-all cursor-pointer rounded-lg",[m.value!=="add"?"border-2 border-dark-200 hover:bg-dark-50":"transparent"]])},[d(c,{name:"verticalBlur",class:"w-full overflow-auto"},{default:w(()=>[m.value?(t(),n("div",ve,[d(a,Y({ref_key:"addform",ref:S,"persist-state":!0,name:"addip",class:"iom-addip",modelValue:v.value,"onUpdate:modelValue":r[0]||(r[0]=l=>v.value=l)},{schema:F,onFormErrors:V,onFormValid:M},{"submit-text":"Create new IP"}),null,16,["modelValue"])])):(t(),n("div",fe,[d(i,{class:"text-dark-400 w-11 h-11"}),he]))]),_:1})],2)])),d(c,{type:"group",name:"dissolve",duration:.6,tag:"ul",class:"flex flex-wrap <md:px-4 <md:mt-2"},{default:w(()=>[(t(!0),n(k,null,C(u(s).ips,(l,R)=>(t(),n("li",{key:l.name,onClick:h=>P(l),class:b([u(s).ui.menu=="full"?"tablet:max-w-1/2":"md:max-w-1/2","iom-part w-full <md:pt-0 py-3 md:px-3 md:py-3 lg:px-3 lg:py-3"]),"data-index":R},[e("section",ye,[e("h4",ge,$(l.name),1),e("article",we,[e("ul",be,[(t(!0),n(k,null,C(l.locations,h=>(t(),n("li",{key:h},[e("div",ke,[d(A,{class:"w-4 h-4 mr-1 text-dark-400 flex-none"}),e("p",Ce,$(h),1)])]))),128))]),e("div",$e,[e("div",Ie,[u(s).getSurveyStatus(l.id,"staff")=="ok"?(t(),I(E,{key:0,class:"text-slate-100 w-4 h-4 md:w-5 md:h-5"})):(t(),I(L,{key:1,class:"text-slate-100 w-5 h-5"}))]),Se,d(N,{class:"text-slate-200 mr-2"})])])])],10,xe))),128))]),_:1})])}}};export{Be as default};
