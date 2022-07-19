import{_ as x}from"./BrForm.70ad26f4.js";import{_ as N}from"./BrAlert.b5c159f5.js";import{a7 as S,p as Y,u as M,r as f,a0 as y,Y as l,d as e,J as n,o as _,c as O,f as o,z as m,x as H,w as i,j as A,i as q,R as E,S as D,h as g,a as t}from"./index.2309702b.js";import{u as j,_ as P,a as T}from"./composables.600b6226.js";const a=()=>S().nullable().transform(r=>isNaN(r)?null:r),B=g("Request access and review the following documents: "),z=t("ul",{class:"py-2 pl-4 list-disc space-y-1"},[t("li",null," Operation License "),t("li",null," Fire Permit ")],-1),R=g("Request access and review the following document: "),F=t("ul",{class:"py-2 pl-4 list-disc space-y-1"},[t("li",null," IP\u2019s monthly reports submitted to IOM for cross-referencing data gathered during visit")],-1),U={__name:"FieldVisitSurvey",setup(r){const v=Y();window.store=v;const w=M(),c=f(!1),s=f({fv_date:new Date}),{formControls:I,saveMode:p,formName:C}=j("field",w,s,c),u=new Date,k={form:{save:p.value},sections:{basic:{label:"Basic Information"},self:{label:"General Overview",helpText:"Self observation notes regarding general state of the facility."},ilc:{label:"General Operation of the ILC",helpText:"Self observation notes regarding the operaration of the Integration Learning Center."},ico:{label:"Integration Courses Overview",helpText:"Carried out through consultations with LC\u2019s representative. All data provided here needs to be checked and cross-referenced in the relevant files."},ip_res:{label:"IP\u2019s Resources"},arch:{label:"Archive"},vis:{label:"Visibility"},report:{label:"Reporting"}},fields:[{name:"fv_date",label:"Date of field visit",type:"date",rules:y().required(),section:"basic",extra:{variant:"simple",minYear:u.getFullYear(),maxYear:u.getFullYear()}},{name:"fv_staff_names",label:"Name/Names of Field Personnel",type:"tagger",rules:l().required().of(e()),section:"basic"},{name:"interviewee_position",label:"Reference Persons during Visit (Name and Position)",type:"textarea",rules:e().required(),section:"basic"},{name:"ilc_vibe",label:"What is the general atmosphere in the ILC?",type:"radio",theme:"stacked",section:"self",rules:e(),choices:[{id:"d",label:"Bad"},{id:"c",label:"Fair"},{id:"b",label:"Good"},{id:"a",label:"Very good"}]},{name:"ilc_vibe_comments",label:"Comments / remarks",type:"textarea",section:"self",rules:e()},{name:"ilc_security_ok",label:"Are the ILC premises secure?",type:"radio",theme:"spread",section:"self",rules:e(),choices:[{id:"d",label:"No, the ILC is not guarded."},{id:"c",label:"No, the ILC is not guarded, but valuable equipment is locked away and secured."},{id:"b",label:"Yes, the ILC is guarded by a security officer-guard or security company, during hours of operation."},{id:"a",label:"Yes, the ILC is guarded by a security officer-guard or security company, 24/7"}]},{name:"ilc_security_ok_comments",label:"Comments / remarks",type:"textarea",section:"self",rules:e()},{name:"ilc_space_ok",label:"Does the ILC have the necessary space to fulfill all the project activities on its premises?",helpText:"(Classrooms, work stations, information stations, room and hardware for e-classes, bathrooms, break room, etc.)",type:"decision",section:"self",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"ilc_space_ok_comments",label:"Comments / remarks",type:"textarea",section:"self",rules:e()},{name:"ilc_infra_ok",label:"Does the ILC have the necessary infrastructure to fulfill all the project activities on its premises?",helpText:"(Good ventilation, lighting, heat and cool conditions, hygiene conditions, etc.)",type:"decision",section:"self",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"ilc_infra_ok_comments",label:"Comments / remarks",type:"textarea",section:"self",rules:e()},{name:"ilc_equip_ok",label:"Does the ILC have the necessary equipment to fulfil all the project activities on its premises?",helpText:"(Good ventilation, lighting, heat and cool conditions, hygiene conditions, etc.)",type:"decision",section:"self",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"ilc_equip_ok_comments",label:"Comments / remarks",type:"textarea",section:"self",rules:e()},{name:"ilc_has_vault",label:"Is there a vault or locked cabinet on the premises where petty cash, original documents and valuables can be kept?",type:"decision",section:"self",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"ilc_has_vault_comments",label:"Comments / remarks",type:"textarea",section:"self",rules:e()},{name:"ilc_wheelchair_ok",label:"Are the facilities wheelchair accessible with corresponding signage?",helpText:"E.g. ramps, elevators, bathrooms, etc.",type:"decision",section:"self",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"ilc_wheelchair_ok_comments",label:"Comments / remarks",type:"textarea",section:"self",rules:e()},{name:"ilc_kids_ok",label:"What is the general condition of the Recreation Space for Children?",type:"decision",section:"self",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"ilc_kids_ok_comments",label:"Comments / remarks",type:"textarea",section:"self",rules:e()},{name:"ilc_license_ok",label:"Is the ILC\u2019s license of operation up to date?",type:"decision",section:"ilc",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"ilc_license_ok_comments",label:"Comments / remarks",type:"textarea",section:"ilc",rules:e()},{name:"ilc_fire_permit",label:"Is the ILC\u2019s fire permit (per fire department\u2019s inspection) complete and up to date?",type:"decision",section:"ilc",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"ilc_fire_permit_comments",label:"Comments / remarks",type:"textarea",section:"ilc",rules:e()},{name:"ilc_ever_closed",label:"Have there been any instances when the Center was forced to close?",type:"decision",section:"ilc",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"ilc_ever_closed_comments",helpText:"If answered yes above, provide reasons and impact on the operations",label:"Comments / remarks",type:"textarea",section:"ilc",rules:e()},{name:"ilc_data_sec_impl",label:"Were data security measures implemented by the ILC\u2019s staff during the field visit?",helpText:"E.g. computers left logged on, files left unattended, etc.",type:"decision",section:"ilc",extra:{variant:"cycler"},rules:e(),choices:[{id:"always",label:"Always"},{id:"sometimes",label:"Sometimes"},{id:"never",label:"Never"}]},{name:"ilc_data_sec_impl_comments",label:"Comments / remarks",type:"textarea",section:"ilc",rules:e()},{name:"benef_count_per_level",label:"How many beneficiaries (beneficiaries of international protection) have been enrolled to the Integration Courses since beginning of project / since last visit?",type:"mapping",section:"ico",header:["Language level","Count"],data:{a1:{label:"A1 Level",type:"number",typeProps:{placeholder:"0"}},a2:{label:"A2 Level",type:"number"},"b1+":{label:"B1+ Level Soft Skills",type:"number"}},rules:n({a1:a().required(),a2:a().required(),"b1+":a().required()}).required()},{name:"benef_ellig_how_verif",label:"How was beneficiary eligibility verified and recorded?",type:"textarea",section:"ico",rules:e()},{name:"total_benef_count",label:"How many beneficiaries actually attend in-person or online integration courses since beginning of project or since last visit?",helpText:"Note: Beneficiaries older than 16 years old and family members",type:"number",section:"ico",rules:a()},{name:"benef_family_count_per_level",label:"How many family members of beneficiaries have been enrolled to the Integration Courses since beginning of project / since last visit?",type:"mapping",section:"ico",header:["Language level","Count"],data:{a1:{label:"A1 Level",type:"number",typeProps:{placeholder:"0"}},a2:{label:"A2 Level",type:"number"},"b1+":{label:"B1+ Level Soft Skills",type:"number"}},rules:n({a1:a().required(),a2:a().required(),"b1+":a().required()}).required()},{name:"placement_test_count",label:"How many placement tests have been conducted since beginning of project or since last visit?",helpText:"Check against previous questions to validate consistency and systematization of operations",type:"number",section:"ico",rules:a()},{name:"student_present_on_fvisit_count",label:"How many students attended courses on the day of the visit?",type:"number",section:"ico",rules:a()},{name:"how_in_person_att_checked",label:"How is in-person course attendance monitored?",helpText:"(At the beginning of class, after each break, at the beginning and end of class, what if a student leaves mid class, students sign themselves in)",type:"textarea",section:"ico",rules:e()},{name:"how_ecourse_att_checked",label:"How is course attendance in e-learning integration courses monitored?",type:"textarea",section:"ico",rules:e()},{name:"course_cycle_count_per_level",label:"How many course cycles are currently taking place?",type:"mapping",section:"ico",header:["Language level","Count"],data:{a1:{label:"A1 Level",type:"number",typeProps:{placeholder:"0"}},a2:{label:"A2 Level",type:"number"},"b1+":{label:"B1+ Level Soft Skills",type:"number"}},rules:n({a1:a().required(),a2:a().required(),"b1+":a().required()}).required()},{name:"active_class_count_per_level",label:"How many classes are currently taking place?",type:"mapping",section:"ico",header:["Language level","Count"],data:{a1:{label:"A1 Level",type:"number",typeProps:{placeholder:"0"}},a2:{label:"A2 Level",type:"number"},"b1+":{label:"B1+ Level Soft Skills",type:"number"}},rules:n({a1:a().required(),a2:a().required(),"b1+":a().required()}).required()},{name:"benef_count_exempted_from_course",label:"How many beneficiaries have been granted exemption from courses since beginning of project or since last visit?",helpText:"(Beneficiaries older than 16 years old and family members)",type:"number",section:"ico",rules:a()},{name:"how_exempt_processed",label:"How are exemptions processed, against what criteria and is there documentation/records?",type:"textarea",section:"ico",rules:e()},{name:"dormant_benef_count",label:"How many beneficiaries have been granted dormancy status since beginning of project or since last visit?",helpText:"(Beneficiaries older than 16 years old and family members)",type:"number",section:"ico",rules:a()},{name:"how_dormancy_processed",label:"How is dormancy status processed, against what criteria and is there documentation/records?",type:"textarea",section:"ico",rules:e()},{name:"frozen_and_enrolled_benef_count",label:"How many beneficiaries were put on hold (frozen) and then enrolled in the courses since beginning of project or since last visit?",helpText:"(Beneficiaries older than 16 years old and family members)",type:"number",section:"ico",rules:a()},{name:"benef_dereg_count",label:"How many beneficiaries were deregistered from the project since beginning of project or since last visit and what were the reasons?",helpText:"(Beneficiaries older than 16 years old and family members)",type:"number",section:"ico",rules:a()},{name:"enroll_deadlines_respected",label:"Are the deadlines for enrollment respected?",type:"decision",extra:{direction:"vertical"},section:"ico",rules:e(),choices:[{id:"A",label:"Yes, they are strictly respected."},{id:"B",label:"Yes, but there is a leeway for special cases."},{id:"C",label:"No, only for the beneficiaries who are obliged to attend."},{id:"D",label:"No, not really."}]},{name:"coc_count",label:"How many Cultural Orientation Courses have taken place since beginning of project or since last visit?",type:"number",section:"ico",rules:a()},{name:"lsc_count",label:"How many Life Skills Courses have taken place since beginning of project or since last visit?",type:"number",section:"ico",rules:a()},{name:"jrc_count",label:"How many Job Readiness Courses have taken place since beginning of project or since last visit?",type:"number",section:"ico",rules:a()},{name:"cult_mediators_avail",label:"Are cultural mediators available for every language the beneficiaries speak during the Soft Skills courses?",type:"radio",section:"ico",rules:e(),theme:"spread",choices:[{id:"A",label:"Yes, cultural mediators in every language are available."},{id:"B",label:"No, cultural mediators in most (three or more) languages are available."},{id:"C",label:"No, cultural mediators in two or less languages are available."}]},{name:"elearning_lang_full_cover",label:"Are the e-learning courses available in every native language of the beneficiaries?",type:"decision",section:"ico",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"ext_part_ssm_count",label:"How many events with external participation of local, state or non-state service providers in the framework of the Soft Skills Module have taken place since beginning of project or since last visit?",type:"number",section:"ico",rules:a()},{name:"benef_kid_space_usage_count",label:"How many beneficiaries use the available Recreation Space for Children during their courses?",helpText:"(Beneficiaries older than 16 years old and family members)",type:"number",section:"ico",rules:a()},{name:"activites_in_kid_space",label:"What activities are provided in the Recreation Space for Children?",type:"tagger",section:"ico",rules:l().of(e())},{name:"elearning_lang_full_cover",label:"Were all data for the preceding questions readily available and systematized?",helpText:"Monitor\u2019s own observation",type:"decision",section:"ico",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"tech_staff_present",section:"ico",label:"Technical staff present on the day of the visit",rules:l().of(e()),type:"switch",theme:"stacked",choices:[{id:"prog_head",label:"Head of Programmes"},{id:"grant_man",label:"Grant Manager"},{id:"edu_coor",label:"Education coordinator"},{id:"edu_off",label:"Education Officer"},{id:"int_coor",label:"Integration Coordinator"},{id:"meal_man",label:"MEAL Manager"},{id:"im_coor",label:"IM Coordinator"},{id:"meal_staff",label:"MEAL Staff"},{id:"co_field",label:"(CO + FIELD)"},{id:"account_fcrm",label:"Accountability and FCRM Officer"},{id:"urban_man",label:"Urban Manager"},{id:"teach_edu",label:"Teachers and Educators"},{id:"interp",label:"Interpreters"},{id:"ilc_leader",label:"ILC Team Leader"},{id:"int_co",label:"Integration Center Officer / Assistant"},{id:"rsc_assis",label:"RSC Assistant"},{id:"ilc_cleaner",label:"ILC Cleaner"}]},{name:"admin_staff_present",section:"ip_res",label:"Administrative and support staff present on the day of the visit",rules:l().of(e()),type:"switch",theme:"stacked",choices:[{id:"country_dir",label:"Country Director"},{id:"head_support",label:"Head of Support Services"},{id:"area_man",label:"Area Manager"},{id:"safety_adv",label:"Safety and Security Advisor"},{id:"safety_off",label:"Safety and Security Officer"},{id:"fin_spec",label:"Finance Specialist"},{id:"fin_off",label:"Finance Officer"},{id:"hr_man",label:"HR Manager"},{id:"hr_off",label:"HR Officer"},{id:"supply_spec",label:"Supply Chain Specialist"},{id:"supply_off",label:"Supply Chain Officer"},{id:"it_off",label:"IT Officer"},{id:"comms_off",label:"Media and Communications Officer"},{id:"field_fin_off",label:"Finance Officer (FIELD)"},{id:"field_hr_off",label:"HR Officer (FIELD)"},{id:"field_chain_off",label:"Supply Chain Officer (FIELD)"},{id:"field_admin_assist",label:"Admin Assistant (FIELD)"}]},{name:"staff_attend_sheets_avail",label:"Are staff attendance sheets readily available?",type:"decision",section:"ip_res",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"budget_and_report_docs_avail",label:"Are budgeting plans, expenditures and reporting documents readily available and archived systematically?",type:"decision",section:"ip_res",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"benef_hard_copy_files_archived",label:"Is the beneficiaries\u2019 physical files' archive complete and up to date?",helpText:"Sampling: pick three beneficiaries from previous day\u2019s attendance sheet and check his file in the Center\u2019s archive. The file should absolutely include the following documents: Beneficiary\u2019s declaration of participation and acceptance of the terms of the project HELIOS",type:"radio",theme:"spread",section:"arch",rules:e(),choices:[{id:"A",label:"Yes, it is complete and up to date."},{id:"B",label:"No, it is up to date but some documents are missing / unsigned/ erroneously filed/ damaged."},{id:"C",label:"No, it is complete but not up to date."},{id:"D",label:"No, it is neither complete nor up to date."}]},{name:"benef_dig_files_archived",label:"Is the beneficiaries\u2019 digital files' archive complete and up to date?",helpText:"Sampling: pick the same beneficiaries as in physical files",type:"radio",theme:"spread",section:"arch",rules:e(),choices:[{id:"A",label:"Yes, it is complete and up to date."},{id:"B",label:"No, it is up to date but some documents are missing / unsigned/ erroneously filed/ damaged."},{id:"C",label:"No, it is complete but not up to date."},{id:"D",label:"No, it is neither complete nor up to date."}]},{name:"files_hard_copy_and_dig_match",label:"Do the files\u2019 physical and digital archive match?",type:"radio",theme:"spread",section:"arch",rules:e(),choices:[{id:"A",label:"Yes, they match completely."},{id:"B",label:"No, some documents and/or updated information are missing from the physical archive."},{id:"C",label:"No, some documents and/or updated information are missing from the digital archive."}]},{name:"inter_instr_on_apply_iom_charter",label:"Is there an internal instruction on how to apply IOM\u2019s visibility requirements?",type:"decision",section:"vis",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"contact_person_for_vis",label:"Is there a contact person for visibility specific to this project?",type:"decision",section:"vis",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"logos_present",label:"Do the MoM, IOM and HELIOS logos appear when referencing the HELIOS project on IP\u2019s website?",type:"decision",section:"vis",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"iom_tagged",label:"Do the MoM, IOM and HELIOS mentioned or tagged when referencing the HELIOS project on IP\u2019s social media accounts?",type:"decision",section:"vis",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"iom_website_link_present",label:"Does a link to MoM and IOM Greece website appear when referencing the HELIOS project on IP\u2019s website and social media accounts?",type:"decision",section:"vis",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"iom_text_mention",label:"Is the following line included when referencing the HELIOS project on IP\u2019s website and social media accounts 'The project is implemented by IOM Greece and is funded by the Ministry of Migration and Asylum.'?",type:"decision",section:"vis",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"iom_font_order_ok",label:"Do the MoM, IOM, HELIOS and IP\u2019s logos appear on the ILC\u2019s building signage, in the same font size and in this particular order?",type:"decision",section:"vis",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"iom_logo_on_stuff",label:"Do the MoM, IOM, HELIOS and IP\u2019s logos appear on equipment and materials addressing beneficiaries, such as computers, notepads, etc?",type:"radio",theme:"spread",section:"vis",rules:e(),choices:[{id:"A",label:"Yes, they all appear in all basic equipment and materials, in the same font size and in this particular order."},{id:"B",label:"Yes, they all appear in few equipment and materials used in the center, in the same font size and in this particular order."},{id:"C",label:"Yes, they all appear, but not in this particular order and/or in different font sizes."},{id:"D",label:"No, only some of them appear."},{id:"E",label:"No, there are no logos on any objects at the center."}]},{name:"iom_logo_on_clothes",label:"Do the MoM, IOM, HELIOS and IP\u2019s logos appear on clothing items worn by IP\u2019 staff, such as vests, stickers, t-shirts, caps, etc?",type:"radio",theme:"spread",section:"vis",rules:e(),choices:[{id:"A",label:"Yes, they all appear in all basic clothing items worn by IP\u2019 staff, in the same font size and in this particular order."},{id:"B",label:"Yes, they all appear in few clothing items worn by IP\u2019 staff, in the same font size and in this particular order."},{id:"C",label:"Yes, they all appear, but not in this particular order and/or in different font sizes."},{id:"D",label:"No, only some of them appear."},{id:"E",label:"No, there are no logos on any clothing items worn by IP\u2019 staff at the center."}]},{name:"iom_logo_on_docs",label:"Do the MoM, IOM, HELIOS and IP\u2019s logos appear on the files and documents used in the visiting center, such as document forms, digital archive, etc?",type:"radio",theme:"spread",section:"vis",rules:e(),choices:[{id:"A",label:"Yes, they all appear in all files, in the same font size and in this particular order."},{id:"B",label:"Yes, they all appear in few files used in the center, in the same font size and in this particular order."},{id:"C",label:"Yes, they all appear, but not in this particular order and/or in different font sizes."},{id:"D",label:"No, only some of them appear."},{id:"E",label:"No, there are no logos on any files at the center."}]},{name:"iom_logo_on_pubs",label:"Do the MoM, IOM, HELIOS and IP\u2019s logos appear on the publications regarding the HELIOS project available at the visiting center, such as brochures, flyers, newsletters, etc?",type:"radio",theme:"spread",section:"vis",rules:e(),choices:[{id:"A",label:"Yes, they all appear in all publications, in the same font size and in this particular order."},{id:"B",label:"Yes, they all appear in few publications used in the center, in the same font size and in this particular order."},{id:"C",label:"Yes, they all appear, but not in this particular order and/or in different font sizes"},{id:"D",label:"No, only some of them appear."},{id:"E",label:"No, there are no logos on any publicatons at the center."}]},{name:"latest_narr_report",label:"When was the latest narrative report submitted?",type:"date",rules:y().required(),section:"report",extra:{variant:"simple"}},{name:"dig_report_archive_avail",label:"Is there a digital archive for all reports (is it systematized and readily available)",type:"decision",section:"report",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]}]};return(V,b)=>{const h=N,L=x;return _(),O("article",null,[o(P),m(p)&&s.value?(_(),H(L,A({key:0,class:["iom-form",c.value?"opacity-50":""],"root-loading":c.value,"persist-state":!0,name:m(C),modelValue:s.value,"onUpdate:modelValue":b[0]||(b[0]=d=>s.value=d)},{schema:k,...m(I)},{"submit-text":"Save"}),{"prepend-section-ilc":i(()=>[o(h,{level:"warning",show:!0,class:"transform -translate-y-6 !mb-6 block relative"},{desc:i(()=>[z]),default:i(()=>[B]),_:1})]),"prepend-section-ico":i(()=>[o(h,{level:"warning",show:!0,class:"transform -translate-y-6"},{desc:i(()=>[F]),default:i(()=>[R]),_:1})]),"submit-button":i(d=>[o(T,E(D({...d})),null,16)]),_:1},16,["class","root-loading","name","modelValue"])):q("",!0)])}}};export{U as default};
