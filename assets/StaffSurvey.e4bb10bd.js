import{_ as T}from"./BrForm.00baf69d.js";import{_ as Y}from"./comment-add48-regular.6d06f400.js";import{r,u as L,p as P,a2 as y,d as e,Z as S,q as W,N as M,o as d,c as g,z as l,x as D,i as v,f as m,w as x,j,a9 as A,R as B,P as E,Q as O,a as V}from"./index.343a86ba.js";import{u as F,_ as $,a as R}from"./composables.1f8f226f.js";import"./map-pin-fill.5c0bf3d8.js";const z=["onClick"],G=V("small",null,"Add Comment",-1),oe={__name:"StaffSurvey",setup(K){const c=r(!1),w=L(),p=P(),n=r({interview_date:new Date}),h=new Date,k=r([{name:"interview_date",label:"Date of the interview",type:"date",parentClasses:"br-span-3 br-span-flex",rules:y().required(),section:"basic",extra:{variant:"simple",minYear:h.getFullYear(),maxYear:h.getFullYear()}},{name:"interviewee_name",label:"Name of the interviewee",type:"text",rules:e().required(),section:"basic"},{name:"interviewee_position",label:"Interviewee's position",type:"text",rules:e().required(),section:"basic"},{name:"interviewee_position_since",label:"Interviewee has held this position since?",type:"date",rules:y().max(new Date).required(),section:"basic",extra:{variant:"simple",minYear:1990}},{name:"interview_lang",label:"Interview language",type:"select",helpText:"Language in which the interview takes place",rules:e().required(),section:"basic",choices:p.LANGS},{name:"project_role",label:"What is your role in the project? What do your daily duties entail?",type:"textarea",section:"lc_op",rules:e().required()},{name:"project_duties",label:"What do your daily duties entail?",helpText:"<<Explain how to use tagger>>",type:"tagger",section:"lc_op",rules:S().required().of(e())},{name:"inperson_integ_courses_eff",label:"How does the IP guarantee the smooth and effective operation of the in-person integration courses?",type:"textarea",section:"lc_op",helpText:"The interviewee is asked about the procedures for dealing with i.e. issues of poor attendance, teaching issues, course continuity, availability and effectiveness of interpreters/cultural mediators, progress testing, etc",rules:e()},{name:"remote_integ_courses_eff",label:"How does the IP guarantee the smooth and effective operation of the e-learning integration courses?",helpText:"The interviewee is asked about the procedures for dealing with i.e. issues of poor attendance, attendance verification, teaching issues, availability of translations in beneficiaries\u2019 languages, technical issues, progress testing, etc.",type:"textarea",section:"lc_op",rules:e()},{name:"accom_ensuring",label:"How does the IP guarantee that accommodation services requirements/ beneficiary obligations are being respected?",type:"textarea",section:"lc_op",rules:e()},{name:"result_recording",label:"How is this verification being recorded?",type:"textarea",section:"lc_op",rules:e()},{name:"lc_feed_how",label:"How does it feed into the ILC\u2019s work?",type:"textarea",section:"lc_op",rules:e()},{name:"benef_misconduct",label:"Has there ever (or since the last visit) been any instances of misconduct and/or attempted fraud by the beneficiaries?",helpText:"If yes, ask also how it was remedied?",type:"textarea",section:"lc_op",rules:e()},{name:"ip_approach_to_ssm",label:"How does the IP approach the Soft Skills Module of the Integration Courses that you provide?",type:"textarea",section:"lc_op",helpText:"The interviewee is asked to provide information on i.e. ILC\u2019s choice of activities, cooperation with state and non-state services and programs, course variation, practicality and usefulness, cultural visits, economic integration activities, etc.",rules:e()},{name:"lc_success",label:"What has been the most successful course or activity (Greek Language and/or Soft Skills Module) that the ILC has provided (in terms of attendance and effectiveness) and why?",type:"textarea",section:"lc_op",rules:e()},{name:"lc_failure",label:"What has been the least successful course or activity (Greek Language and/or Soft Skills Module) that the ILC has provided (in terms of attendance and effectiveness) and why?",type:"textarea",section:"lc_op",rules:e()},{name:"lc_sec_issues",label:"Have there ever (or since the last visit) been any security issues on the premises?",helpText:"E.g. demonstrations against the center\u2019s operation, vandalism incidents, suspicions of crime, etc. If none were recorded, leave out empty.",type:"textarea",section:"lc_op",rules:e()},{name:"res_adequate",label:"Are human, financial and material resources adequate in terms of quality and quantity to achieve project results?",type:"decision",section:"resources",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"res_adequate_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"resources",rules:e()},{name:"budget_adequate",label:"Is the budget estimate adequate or it requires amendment towards its increase/decrease?",type:"decision",section:"resources",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"budget_adequate_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"resources",rules:e()},{name:"expenditure_mechanism",label:"How is the expenditure process being managed, what are the approval mechanisms in place? Is there a systematic record keeping of expenditures? How is it verified before it feeds into financial reports towards IOM?",type:"textarea",section:"resources",rules:e()},{name:"special_roles",label:"Which functions within the staff structure have distinct added value in the operations?",type:"textarea",section:"resources",rules:e()},{name:"redundant_roles",label:"Could you identify functions that could be consolidated?",type:"textarea",section:"resources",rules:e()},{name:"recruitment_proc_exist",label:"Are there any formal procedures for personnel recruitment?",type:"decision",section:"resources",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"recruitment_proc_exist_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"resources",rules:e()},{name:"perf_manag_proc_exist",label:"Is there a performance management formal process and how does it work?",type:"decision",section:"resources",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"perf_manag_proc_exist_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"resources",rules:e()},{name:"train_period_new_staff",label:"Is there a training period for new staff?",type:"decision",section:"resources",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"train_period_new_staff_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"resources",rules:e()},{name:"train_seminars_for_staff_vol",label:"Are there any training seminars provided to ILC staff by IP on a voluntary or obligatory basis?",type:"decision",section:"resources",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"train_seminars_for_staff_vol_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"resources",rules:e()},{name:"perf_manag_proc_desc",label:"How does the performance management formal process work?",helpText:'Leave out blank if replied "No" in the previous question',type:"textarea",section:"resources",rules:e()},{name:"perf_manag_proc_desc_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"resources",rules:e()},{name:"change_in_staff",label:"Has there been a change in personnel (management, financial and administrative staff) since the beginning of the project/since last field visit?",type:"decision",section:"resources",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"change_in_staff_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"resources",rules:e()},{name:"change_in_staff_iom_informed",label:"If yes, to review when was IOM informed about the changes?",type:"decision",section:"resources",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"change_in_staff_iom_informed_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"resources",rules:e()},{name:"planned_risks_occur",label:"Did any of the risks laid out in the project planning documents occur? If so, how did you address them?",helpText:"Leave out blank if negative",type:"textarea",section:"resources",rules:e()},{name:"has_psea",label:"Does the IP have a document policy on PSEA?",type:"decision",section:"resources",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"has_psea_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"resources",rules:e()},{name:"has_proc_for_staff_benef_sea_all",label:"Does the IP have mechanisms and procedures in place for personnel and beneficiaries, including children, to report SEA allegations?",type:"decision",section:"resources",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"has_proc_for_staff_benef_sea_all_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"resources",rules:e()},{name:"susp_of_sea",label:"Have there been any allegations or suspicions of SEA? If yes, was there an investigation? What corrective measures were taken?",type:"decision",section:"resources",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"susp_of_sea_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"resources",rules:e()},{name:"susp_uneth_pract",label:"Have there been any allegations or suspicions of fraudulent, corrupt, exploitative or unethical practice?",type:"decision",section:"resources",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"susp_uneth_pract_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"resources",rules:e()},{name:"susp_uneth_pract_desc",label:"If yes, how was it handled? What measures were taken?",helpText:'Leave out blank if replied "No" in the previous question',type:"textarea",section:"resources",rules:e()},{name:"unplanned_risks_occur",label:"Did any unexpected risks occur? If so, how did you address them?",helpText:"Leave out blank if negative",type:"textarea",section:"diff",rules:e()},{name:"record_keeping_of_diff",label:"Do you keep record of such challenges and how do they inform your management decisions? How are they communicated with IOM and your sub-IPS (if they exist)?",type:"textarea",section:"diff",rules:e()},{name:"impl_diff",label:"Have you or has a member of your team ever (or since the last visit) faced any difficulties in implementing the project parameters regarding the integration courses and activities? If yes, how did you cope?",helpText:"Leave out blank if negative",type:"textarea",section:"diff",rules:e()},{name:"teachers_feedback_how",label:"How often and in which form do you receive course feedback from teachers?",type:"textarea",section:"diff",rules:e()},{name:"teachers_feedback",label:"What is the feedback?",type:"textarea",section:"diff",rules:e()},{name:"benef_feedback_how",label:"How often and in which form do you receive course feedback from beneficiaries?",type:"textarea",section:"diff",rules:e()},{name:"benef_feedback",label:"What is the feedback?",type:"textarea",section:"diff",rules:e()},{name:"exch_with_other_ips",label:"Is there any cooperation/coordination/exchanges with other IPs under this project initiated by you?",type:"decision",section:"x",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"exch_with_other_ips_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"x",rules:e()},{name:"iom_datasec_observed",label:"Are IOM\u2019s data protection principles adhered to?",type:"decision",section:"x",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"iom_datasec_observed_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"x",rules:e()},{name:"iom_datasec_exceptions",label:"Has there ever (or since the last visit) been any exceptions to IOM\u2019s data protection principles?",helpText:"E.g. for visibility reasons, urgent measures, etc.",type:"decision",section:"x",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"iom_datasec_exceptions_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"x",rules:e()},{name:"iom_datasec_precautions",label:"What precautions do you take to protect the confidentiality of the beneficiaries\u2019 personal data?",type:"textarea",section:"x",rules:e()},{name:"iom_datasec_measures",label:"What data security measures do you implement to preserve the integrity of the selected personal data",helpText:"E.g. against data corruption, equipment damage, unauthorized access etc.",type:"textarea",section:"x",rules:e()},{name:"ilc_improv_feedback",label:"Is there something that would better enable the operations of your ILC(s)?",type:"textarea",helpText:"Leave out blank if negative",section:"x",rules:e()},{name:"comments",label:"Is there anything else you would like to add?",type:"textarea",helpText:"Leave out blank if negative",section:"x",rules:e()},{name:"subip_coop",label:"How is the cooperation with your IPs?",type:"textarea",section:"subip",rules:e()},{name:"subip_coord",label:"Is there a coordination mechanism between you and all IPs?",type:"textarea",section:"subip",rules:e()},{name:"subip_selection",label:"What is the process for selecting them? Is there a formal documented due diligence process in the selection?",type:"textarea",section:"subip",rules:e()},{name:"subip_donor_req",label:"How do you communicate donor requirements for project implementation, monitoring and reporting?",type:"textarea",section:"subip",rules:e()},{name:"subip_compliance_ensuring",label:"How do you ensure compliance and quality of operations",type:"textarea",section:"subip",rules:e()},{name:"subip_their_reporting_req",label:"What are their IPs reporting requirements (scope, frequency) and how do those reports feed into their own reporting obligations towards IOM?",type:"textarea",section:"subip",rules:e()},{name:"subip_budget_manag",label:"How do they oversee budget management and reporting in their IPs?",type:"textarea",section:"subip",rules:e()}]),{formControls:f,saveMode:_,formName:I,formType:C,readonly:Q,fields:q}=F("staff",k,w,n,c),a=r({form:{type:C.value,save:_.value},sections:{basic:{label:"Basic Information"},lc_op:{label:"LC Operations"},resources:{label:"Resource Management"},diff:{label:"Challenges"},x:{label:"Cross Cutting"},subip:{label:"Sub-IP Specific Questions"}},fields:q}),N=W(()=>a.value.fields.map((s,t)=>{if(s.name.match("comments")&&s.hidden)return a.value.fields[t-1].name}).filter(Boolean)),H=s=>{const t=a.value.fields.indexOf(s),o=a.value.fields[t+1];o.hidden=!1},b=r(!1);return M(n,(s,t)=>{if(_.value==="perField"&&!b.value)for(const o of a.value.fields.filter(({name:u})=>u.match("comments")))n.value[o.name]&&(b.value=!0,o.hidden=!1)},{deep:!0}),(s,t)=>{const o=Y,u=T;return d(),g("article",null,[l(p).ui.menu=="full"?(d(),D(R,{key:0})):v("",!0),m(u,j({class:[c.value?"opacity-50":"","iom-form"],"root-loading":c.value,"persist-state":!0,name:l(I),onKeydown:t[0]||(t[0]=A(B(()=>{},["prevent"]),["enter"])),modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=i=>n.value=i)},{schema:a.value,...l(f)},{"submit-text":"Save"}),{"after-field":x(({fieldObj:i,fieldIndex:U,fields:Z})=>[!l(f).readonly&&l(N).includes(i.name)?(d(),g("section",{key:0,class:"flex items-center space-x-2 py-3 select-none cursor-pointer hover:text-primary-600 group",onClick:J=>H(i)},[m(o,{class:"w-6 h-6 text-dark-600 group-hover:text-primary-700"}),G],8,z)):v("",!0)]),"submit-button":x(i=>[m($,E(O({...i})),null,16)]),_:1},16,["class","root-loading","name","modelValue"])])}}};export{oe as default};
