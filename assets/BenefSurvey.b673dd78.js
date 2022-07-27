import{_ as p}from"./BrForm.3c916e68.js";import{r as n,u as y,d as e,a1 as f,a8 as g,Y as _,o as v,c as q,f as o,w,j as k,z as r,a2 as I,U as x,R as L,S as T}from"./index.817cb47c.js";import{u as A,_ as B,a as C}from"./composables.68d30ea4.js";const E={__name:"BenefSurvey",setup(S){const a=n(!1),c=y(),s=n({inter_date:new Date}),{formControls:u,saveMode:d,formName:m}=A("benef",c,s,a),l=new Date,b={form:{type:"stacked",save:d.value},sections:{basic:{label:"Basic Information"},interviewee:{label:"Interviewee Data"},questions:{label:"Interview Questions"}},fields:[{name:"inter_name",label:"Interviewer's name",rules:e().required(),type:"text",section:"basic"},{name:"inter_date",label:"Date of the interview",type:"date",rules:f().required(),section:"basic",extra:{variant:"simple",minYear:l.getFullYear(),maxYear:l.getFullYear()}},{name:"mediator_name",label:"Name of Cultural Mediator/Interpreter",rules:e(),type:"text",section:"basic"},{name:"age",label:"Age",rules:g().min(0).required(),type:"number",section:"interviewee"},{name:"legal_status",label:"Legal Status",rules:e().required(),type:"radio",theme:"stacked",section:"interviewee",choices:[{id:"recognized",label:"Recognized Refugee"},{id:"benef",label:"Beneficiary of Subsidiary Protection"}]},{name:"lang",label:"Mother Tongue",rules:e().required(),type:"select",section:"interviewee",choices:store.LANGS},{name:"inter_lang",label:"Interview language",type:"select",helpText:"Language in which the interview takes place",rules:e().required(),section:"interviewee",choices:store.LANGS},{name:"course_enrolled",label:"Type of course in which enrolled",rules:e().required(),type:"radio",theme:"stacked",section:"interviewee",choices:[{id:"in-person",label:"In-person"},{id:"elearning",label:"E-learning"}]},{name:"family_in_project",label:"Family members participating in project?",type:"decision",section:"self",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"duration",label:"How long have you been a student at this ILC?",rules:e().required(),type:"radio",theme:"stacked",section:"questions",choices:[{id:"A",label:"This is the first month."},{id:"B",label:"1-3 months."},{id:"C",label:"3-6 months."},{id:"D",label:"More than 6 months."},{id:"E",label:"Since the beginning of this project (January 2022)."},{id:"F",label:"Transferred from previous HELIOS project."}]},{name:"class_att",label:"Which class do you currently attend?",rules:e().required(),type:"radio",theme:"stacked",section:"questions",choices:[{id:"A",label:"A1 Level."},{id:"B",label:"A2 Level."},{id:"C",label:"B1 Level."},{id:"D",label:"Soft skills classes only."}]},{name:"motivation",label:"What motivated you to enroll in this project\u2019s integration courses?",rules:e().required(),type:"radio",theme:"stacked",section:"questions",choices:[{id:"A",label:"To learn the language."},{id:"B",label:"To find a job."},{id:"C",label:"To develop soft skills."},{id:"D",label:"To receive financial support."},{id:"E",label:"To receive interpretation support."},{id:"F",label:"To receive accommodation support."}]},{name:"ilc_attract",label:"What attracted you to this specific ILC?",rules:e().required(),type:"radio",theme:"stacked",section:"questions",choices:[{id:"A",label:"The location of the ILC."},{id:"B",label:"The possibility of online courses."},{id:"C",label:"The combination of language and soft skill courses."},{id:"D",label:"The teaching staff and equipment."},{id:"E",label:"Other"}]},{name:"ilc_attract_other",label:"Please specify",rules:e(),type:"textarea",section:"questions"},{name:"where_learned_about",label:"How did you learn about this project?",rules:e().required(),type:"radio",theme:"stacked",section:"questions",choices:[{id:"A",label:"GAS."},{id:"B",label:"Other beneficiaries."},{id:"C",label:"IP\u2019s Outreach team."},{id:"D",label:"IP\u2019s Flyers."},{id:"E",label:"Internet and Social Media."},{id:"F",label:"Other."}]},{name:"where_learned_about_other",label:"Please specify",rules:e(),type:"textarea",section:"questions"},{name:"services_used",label:"Which services provided by IP do you use more often?",type:"tagger",section:"questions",rules:_().of(e())},{name:"why_chosen_courses",label:"Why did you choose in-person integration courses / e-learning courses?",rules:e(),type:"textarea",section:"questions"},{name:"attendance",label:"What is your attendance record?",rules:e(),type:"text",section:"questions"},{name:"why_not_att",label:"Why have you not attended all courses?",rules:e().required(),type:"radio",theme:"stacked",section:"questions",choices:[{id:"A",label:"Loss of interest."},{id:"B",label:"Incomprehensible lessons / poor teaching methods."},{id:"C",label:"Lack of essential equipment / poor infrastructure."},{id:"D",label:"Personal reasons."},{id:"E",label:"Better courses elsewhere."},{id:"F",label:"Few teaching hours / course not intensive enough / no classes available in their language level."},{id:"G",label:"Other."}]},{name:"why_not_att_other",label:"Please specify",rules:e(),type:"textarea",section:"questions"},{name:"ip_infra_issues",label:"Are there any issues regarding the center\u2019s infrastructure (eg. not enough bathrooms, poor lighting, poor hygiene conditions etc)?",rules:e(),type:"textarea",section:"questions"},{name:"ip_learning_mat_issues",label:"Are there any issues regarding the ILC\u2019s learning materials (eg. books, computers, teaching equipment etc)?",rules:e(),type:"textarea",section:"questions"},{name:"willing_to_recommend",label:"Have you or would you recommend this program to other beneficiaries of international protection?",type:"decision",section:"questions",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"feedback",label:"How could this program be improved and better tailored to your specific personal needs?",rules:e(),type:"textarea",section:"questions"},{name:"comments",label:"Is there anything you would like to add? Other comments.",rules:e(),type:"textarea",section:"questions"}]};return(D,t)=>{const h=p;return v(),q("article",null,[o(B),o(h,k({class:[a.value?"opacity-50":"","iom-form"],"root-loading":a.value,onKeydown:t[0]||(t[0]=I(x(()=>{},["prevent"]),["enter"])),name:r(m),modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=i=>s.value=i)},{schema:b,...r(u)},{"submit-text":"Save"}),{"submit-button":w(i=>[o(C,L(T({...i})),null,16)]),_:1},16,["class","root-loading","name","modelValue"])])}}};export{E as default};
//# sourceMappingURL=BenefSurvey.b673dd78.js.map
