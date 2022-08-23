import{_ as D}from"./BrForm.2e646909.js";import{_ as j}from"./BrAlert.2a07804d.js";import{o as n,c as C,a as l,a1 as B,p as T,u as z,r as p,a2 as N,Z as f,d as e,G as y,q as F,N as R,z as a,x as v,i as u,w as i,j as V,f as L,P as $,Q as G,h as S}from"./index.8a9c668b.js";import{u as W,_ as Z,a as U}from"./composables.83279af0.js";import"./map-pin-fill.88153bbb.js";const J={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 48 48"},Q=l("path",{fill:"currentColor",d:"M46 13c0 6.075-4.925 11-11 11s-11-4.925-11-11S28.925 2 35 2s11 4.925 11 11ZM36 6a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V6Zm5.5 22.75v-4.49a13.044 13.044 0 0 0 2.5-1.88v6.37A7.25 7.25 0 0 1 36.75 36H26.397l-10.85 7.658C14.057 44.71 12 43.644 12 41.82V36h-.75A7.25 7.25 0 0 1 4 28.75v-15.5A7.25 7.25 0 0 1 11.25 6h12.794c-.5.78-.919 1.618-1.244 2.5H11.25a4.75 4.75 0 0 0-4.75 4.75v15.5a4.75 4.75 0 0 0 4.75 4.75h3.25v7.838L25.603 33.5H36.75a4.75 4.75 0 0 0 4.75-4.75Z"},null,-1),K=[Q];function X(h,x){return n(),C("svg",J,K)}var ee={name:"fluent-comment-add48-regular",render:X};const t=()=>B().nullable().transform(h=>isNaN(h)?null:h),te=["onClick"],ae=l("small",null,"Add Comment",-1),ie=S("Request access and review the following documents: "),se=l("ul",{class:"py-2 pl-4 list-disc space-y-1"},[l("li",null," Operation License "),l("li",null," Fire Permit ")],-1),ne=S(" Request access and review the following document: "),le=l("ul",{class:"py-2 pl-4 list-disc space-y-1"},[l("li",null," IP\u2019s monthly reports submitted to IOM for cross-referencing data gathered during visit ")],-1),be={__name:"FieldVisitSurvey",setup(h){const x=T(),M=z(),g=p(!1),o=p({fv_date:new Date}),w=new Date,Y=p([{name:"fv_date",label:"Date of field visit",type:"date",rules:N().required(),section:"basic",extra:{variant:"simple",minYear:w.getFullYear(),maxYear:w.getFullYear()}},{name:"fv_staff_names",label:"Name/Names of Field Personnel",type:"tagger",rules:f().required().of(e()),section:"basic"},{name:"interviewee_position",label:"Reference Persons during Visit (Name and Position)",type:"textarea",rules:e().required(),section:"basic"},{name:"start_visit_time",label:"Start visit time",type:"time",extra:{subtype:"time"},rules:e().required(),section:"basic"},{name:"end_visit_time",label:"End visit time",type:"time",extra:{subtype:"time"},rules:e().required(),section:"basic"},{name:"ilc_vibe",label:"What is the general atmosphere in the ILC?",type:"radio",theme:"stacked",section:"self",rules:e(),choices:[{id:"d",label:"Bad"},{id:"c",label:"Fair"},{id:"b",label:"Good"},{id:"a",label:"Very good"}]},{name:"ilc_vibe_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"self",rules:e()},{name:"ilc_security_ok",label:"Are the ILC premises secure?",type:"radio",theme:"spread",section:"self",rules:e(),choices:[{id:"d",label:"No, the ILC is not guarded."},{id:"c",label:"No, the ILC is not guarded, but valuable equipment is locked away and secured."},{id:"b",label:"Yes, the ILC is guarded by a security officer-guard or security company, during hours of operation."},{id:"a",label:"Yes, the ILC is guarded by a security officer-guard or security company, 24/7"}]},{name:"ilc_security_ok_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"self",rules:e()},{name:"ilc_space_ok",label:"Does the ILC have the necessary space to fulfill all the project activities on its premises?",helpText:"(Classrooms, work stations, information stations, room and hardware for e-classes, bathrooms, break room, etc.)",type:"decision",section:"self",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"ilc_space_ok_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"self",rules:e()},{name:"ilc_infra_ok",label:"Does the ILC have the necessary infrastructure to fulfill all the project activities on its premises?",helpText:"(Good ventilation, lighting, heat and cool conditions, hygiene conditions, etc.)",type:"decision",section:"self",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"ilc_infra_ok_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"self",rules:e()},{name:"ilc_equip_ok",label:"Does the ILC have the necessary equipment to fulfil all the project activities on its premises?",helpText:"(Good ventilation, lighting, heat and cool conditions, hygiene conditions, etc.)",type:"decision",section:"self",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"ilc_equip_ok_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"self",rules:e()},{name:"ilc_has_vault",label:"Is there a vault or locked cabinet on the premises where petty cash, original documents and valuables can be kept?",type:"decision",section:"self",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"ilc_has_vault_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"self",rules:e()},{name:"ilc_wheelchair_ok",label:"Are the facilities wheelchair accessible with corresponding signage?",helpText:"E.g. ramps, elevators, bathrooms, etc.",type:"decision",section:"self",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"ilc_wheelchair_ok_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"self",rules:e()},{name:"state_imposed_covid_measu_abide",label:"Are the state-imposed health and safety measures for the prevention of COVID-19 adhered to?",helpText:"I.a. airing the rooms between classes, desk spacing, masks, testing",type:"decision",section:"self",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"state_imposed_covid_measu_abide_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"self",rules:e()},{name:"covid_protection_equip_avail",label:"Is protection equipment against COVID-19 (masks, gloves, anti-bacterial hand gels, etc.) available at the premises?",type:"decision",section:"self",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"covid_protection_equip_avail_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"self",rules:e()},{name:"ilc_kids_ok",label:"What is the general condition of the Recreation Space for Children?",type:"decision",section:"self",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"ilc_kids_ok_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"self",rules:e()},{name:"ilc_license_ok",label:"Is the ILC\u2019s license of operation up to date?",type:"decision",section:"ilc",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"ilc_license_ok_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ilc",rules:e()},{name:"ilc_fire_permit",label:"Is the ILC\u2019s fire permit (per fire department\u2019s inspection) complete and up to date?",type:"decision",section:"ilc",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"ilc_fire_permit_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ilc",rules:e()},{name:"ilc_ever_closed",label:"Have there been any instances when the Center was forced to close?",type:"decision",section:"ilc",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"ilc_ever_closed_comments",hidden:!0,helpText:"If answered yes above, provide reasons and impact on the operations",label:"Comments / remarks",type:"textarea",section:"ilc",rules:e()},{name:"data_prot_abide",label:"Were IOM\u2019s data protection principles adhered to during the field visit?",helpText:"E.g. personal data of beneficiaries openly discussed or shared with third parties, etc.",type:"decision",section:"ilc",extra:{variant:"cycler"},rules:e(),choices:[{id:"always",label:"Always"},{id:"sometimes",label:"Sometimes"},{id:"never",label:"Never"}]},{name:"data_prot_abide_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ilc",rules:e()},{name:"ilc_data_sec_impl",label:"Were data security measures implemented by the ILC\u2019s staff during the field visit?",helpText:"E.g. computers left logged on, files left unattended, etc.",type:"decision",section:"ilc",extra:{variant:"cycler"},rules:e(),choices:[{id:"always",label:"Always"},{id:"sometimes",label:"Sometimes"},{id:"never",label:"Never"}]},{name:"ilc_data_sec_impl_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ilc",rules:e()},{name:"benef_count_per_level",label:"How many beneficiaries (beneficiaries of international protection) have been enrolled to the Integration Courses since beginning of project / since last visit?",type:"mapping",section:"ico",header:["Language level","Count"],data:{a1:{label:"A1 Level",type:"number",typeProps:{placeholder:"0"}},a2:{label:"A2 Level",type:"number",typeProps:{placeholder:"0"}},b1:{label:"B1+ Level",type:"number",typeProps:{placeholder:"0"}},soft:{label:"Soft Skills",type:"number",typeProps:{placeholder:"0"}}},rules:y({a1:t().required(),a2:t().required(),b1:t().required(),soft:t().required()}).required()},{name:"benef_count_per_level_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ico",rules:e()},{name:"benef_ellig_how_verif",label:"How was beneficiary eligibility verified and recorded?",type:"textarea",section:"ico",rules:e()},{name:"total_benef_count",label:"How many beneficiaries actually attend in-person or online integration courses since beginning of project or since last visit?",helpText:"Note: Beneficiaries older than 16 years old and family members",type:"number",section:"ico",rules:t()},{name:"total_benef_count_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ico",rules:e()},{name:"benef_family_count_per_level",label:"How many family members of beneficiaries have been enrolled to the Integration Courses since beginning of project / since last visit?",type:"mapping",section:"ico",header:["Language level","Count"],data:{a1:{label:"A1 Level",type:"number",typeProps:{placeholder:"0"}},a2:{label:"A2 Level",type:"number",typeProps:{placeholder:"0"}},b1:{label:"B1+ Level",type:"number",typeProps:{placeholder:"0"}},soft:{label:"Soft Skills",type:"number",typeProps:{placeholder:"0"}}},rules:y({a1:t().required(),a2:t().required(),b1:t().required(),soft:t().required()}).required()},{name:"benef_family_count_per_level_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ico",rules:e()},{name:"placement_test_count",label:"How many placement tests have been conducted since beginning of project or since last visit?",helpText:"Check against previous questions to validate consistency and systematization of operations",type:"number",section:"ico",rules:t()},{name:"placement_test_count_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ico",rules:e()},{name:"student_present_on_fvisit_count",label:"How many students attended courses on the day of the visit?",type:"number",section:"ico",rules:t()},{name:"student_present_on_fvisit_count_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ico",rules:e()},{name:"how_in_person_att_checked",label:"How is in-person course attendance monitored?",helpText:"(At the beginning of class, after each break, at the beginning and end of class, what if a student leaves mid class, students sign themselves in)",type:"textarea",section:"ico",rules:e()},{name:"how_ecourse_att_checked",label:"How is course attendance in e-learning integration courses monitored?",type:"textarea",section:"ico",rules:e()},{name:"course_cycle_count_per_level",label:"How many course cycles are currently taking place?",type:"mapping",section:"ico",header:["Language level","Count"],data:{a1:{label:"A1 Level",type:"number",typeProps:{placeholder:"0"}},a2:{label:"A2 Level",type:"number",typeProps:{placeholder:"0"}},b1:{label:"B1+ Level",type:"number",typeProps:{placeholder:"0"}},soft:{label:"Soft Skills",type:"number",typeProps:{placeholder:"0"}}},rules:y({a1:t().required(),a2:t().required(),b1:t().required(),soft:t().required()}).required()},{name:"course_cycle_count_per_level_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ico",rules:e()},{name:"active_class_count_per_level",label:"How many classes are currently taking place?",type:"mapping",section:"ico",header:["Language level","Count"],data:{a1:{label:"A1 Level",type:"number",typeProps:{placeholder:"0"}},a2:{label:"A2 Level",type:"number",typeProps:{placeholder:"0"}},b1:{label:"B1+ Level",type:"number",typeProps:{placeholder:"0"}},soft:{label:"Soft Skills",type:"number",typeProps:{placeholder:"0"}}},rules:y({a1:t().required(),a2:t().required(),b1:t().required(),soft:t().required()}).required()},{name:"active_class_count_per_level_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ico",rules:e()},{name:"benef_count_exempted_from_course",label:"How many beneficiaries have been granted exemption from courses since beginning of project or since last visit?",helpText:"(Beneficiaries older than 16 years old and family members)",type:"number",section:"ico",rules:t()},{name:"benef_count_exempted_from_course_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ico",rules:e()},{name:"how_exempt_processed",label:"How are exemptions processed, against what criteria and is there documentation/records?",type:"textarea",section:"ico",rules:e()},{name:"dormant_benef_count",label:"How many beneficiaries have been granted dormancy status since beginning of project or since last visit?",helpText:"(Beneficiaries older than 16 years old and family members)",type:"number",section:"ico",rules:t()},{name:"dormant_benef_count_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ico",rules:e()},{name:"how_dormancy_processed",label:"How is dormancy status processed, against what criteria and is there documentation/records?",type:"textarea",section:"ico",rules:e()},{name:"frozen_and_enrolled_benef_count",label:"How many beneficiaries were put on hold (frozen) and then enrolled in the courses since beginning of project or since last visit?",helpText:"(Beneficiaries older than 16 years old and family members)",type:"number",section:"ico",rules:t()},{name:"frozen_and_enrolled_benef_count_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ico",rules:e()},{name:"benef_dereg_count",label:"How many beneficiaries were deregistered from the project since beginning of project or since last visit and what were the reasons?",helpText:"(Beneficiaries older than 16 years old and family members)",type:"number",section:"ico",rules:t()},{name:"benef_dereg_count_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ico",rules:e()},{name:"enroll_deadlines_respected",label:"Are the deadlines for enrollment respected?",type:"decision",extra:{direction:"vertical"},section:"ico",rules:e(),choices:[{id:"A",label:"Yes, they are strictly respected."},{id:"B",label:"Yes, but there is a leeway for special cases."},{id:"C",label:"No, only for the beneficiaries who are obliged to attend."},{id:"D",label:"No, not really."}]},{name:"enroll_deadlines_respected_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ico",rules:e()},{name:"coc_count",label:"How many Cultural Orientation Courses have taken place since beginning of project or since last visit?",type:"number",section:"ico",rules:t()},{name:"coc_count_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ico",rules:e()},{name:"lsc_count",label:"How many Life Skills Courses have taken place since beginning of project or since last visit?",type:"number",section:"ico",rules:t()},{name:"lsc_count_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ico",rules:e()},{name:"jrc_count",label:"How many Job Readiness Courses have taken place since beginning of project or since last visit?",type:"number",section:"ico",rules:t()},{name:"jrc_count_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ico",rules:e()},{name:"cult_mediators_avail",label:"Are cultural mediators available for every language the beneficiaries speak during the Soft Skills courses?",type:"radio",section:"ico",rules:e(),theme:"spread",choices:[{id:"A",label:"Yes, cultural mediators in every language are available."},{id:"B",label:"No, cultural mediators in most (three or more) languages are available."},{id:"C",label:"No, cultural mediators in two or less languages are available."}]},{name:"cult_mediators_avail_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ico",rules:e()},{name:"elearning_lang_full_cover",label:"Are the e-learning courses available in every native language of the beneficiaries?",type:"decision",section:"ico",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"elearning_lang_full_cover_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ico",rules:e()},{name:"ext_part_ssm_count",label:"How many events with external participation of local, state or non-state service providers in the framework of the Soft Skills Module have taken place since beginning of project or since last visit?",type:"number",section:"ico",rules:t()},{name:"ext_part_ssm_count_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ico",rules:e()},{name:"benef_kid_space_usage_count",label:"How many beneficiaries use the available Recreation Space for Children during their courses?",helpText:"(Beneficiaries older than 16 years old and family members)",type:"number",section:"ico",rules:t()},{name:"benef_kid_space_usage_count_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ico",rules:e()},{name:"activites_in_kid_space",label:"What activities are provided in the Recreation Space for Children?",type:"tagger",section:"ico",rules:f().of(e())},{name:"activites_in_kid_space_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ico",rules:e()},{name:"elearning_lang_full_cover",label:"Were all data for the preceding questions readily available and systematized?",helpText:"Monitor\u2019s own observation",type:"decision",section:"ico",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"elearning_lang_full_cover_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ico",rules:e()},{name:"tech_staff_present",section:"ico",label:"Technical staff present on the day of the visit",rules:f().of(e()),type:"switch",theme:"stacked",choices:[{id:"prog_head",label:"Head of Programmes"},{id:"grant_man",label:"Grant Manager"},{id:"edu_coor",label:"Education coordinator"},{id:"edu_off",label:"Education Officer"},{id:"int_coor",label:"Integration Coordinator"},{id:"meal_man",label:"MEAL Manager"},{id:"im_coor",label:"IM Coordinator"},{id:"meal_staff",label:"MEAL Staff"},{id:"co_field",label:"(CO + FIELD)"},{id:"account_fcrm",label:"Accountability and FCRM Officer"},{id:"urban_man",label:"Urban Manager"},{id:"teach_edu",label:"Teachers and Educators"},{id:"interp",label:"Interpreters"},{id:"ilc_leader",label:"ILC Team Leader"},{id:"int_co",label:"Integration Center Officer / Assistant"},{id:"rsc_assis",label:"RSC Assistant"},{id:"ilc_cleaner",label:"ILC Cleaner"}]},{name:"tech_staff_present_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ip_res",rules:e()},{name:"admin_staff_present",section:"ip_res",label:"Administrative and support staff present on the day of the visit",rules:f().of(e()),type:"switch",theme:"stacked",choices:[{id:"country_dir",label:"Country Director"},{id:"head_support",label:"Head of Support Services"},{id:"area_man",label:"Area Manager"},{id:"safety_adv",label:"Safety and Security Advisor"},{id:"safety_off",label:"Safety and Security Officer"},{id:"fin_spec",label:"Finance Specialist"},{id:"fin_off",label:"Finance Officer"},{id:"hr_man",label:"HR Manager"},{id:"hr_off",label:"HR Officer"},{id:"supply_spec",label:"Supply Chain Specialist"},{id:"supply_off",label:"Supply Chain Officer"},{id:"it_off",label:"IT Officer"},{id:"comms_off",label:"Media and Communications Officer"},{id:"field_fin_off",label:"Finance Officer (FIELD)"},{id:"field_hr_off",label:"HR Officer (FIELD)"},{id:"field_chain_off",label:"Supply Chain Officer (FIELD)"},{id:"field_admin_assist",label:"Admin Assistant (FIELD)"}]},{name:"admin_staff_present_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ip_res",rules:e()},{name:"staff_attend_sheets_avail",label:"Are staff attendance sheets readily available?",type:"decision",section:"ip_res",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"staff_attend_sheets_avail_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ip_res",rules:e()},{name:"budget_and_report_docs_avail",label:"Are budgeting plans, expenditures and reporting documents readily available and archived systematically?",type:"decision",section:"ip_res",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"budget_and_report_docs_avail_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"ip_res",rules:e()},{name:"benef_hard_copy_files_archived",label:"Is the beneficiaries\u2019 physical files' archive complete and up to date?",helpText:"Sampling: pick three beneficiaries from previous day\u2019s attendance sheet and check his file in the Center\u2019s archive. The file should absolutely include the following documents: Beneficiary\u2019s declaration of participation and acceptance of the terms of the project HELIOS",type:"radio",theme:"spread",section:"arch",rules:e(),choices:[{id:"A",label:"Yes, it is complete and up to date."},{id:"B",label:"No, it is up to date but some documents are missing / unsigned/ erroneously filed/ damaged."},{id:"C",label:"No, it is complete but not up to date."},{id:"D",label:"No, it is neither complete nor up to date."}]},{name:"benef_hard_copy_files_archived_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"vis",rules:e()},{name:"benef_dig_files_archived",label:"Is the beneficiaries\u2019 digital files' archive complete and up to date?",helpText:"Sampling: pick the same beneficiaries as in physical files",type:"radio",theme:"spread",section:"arch",rules:e(),choices:[{id:"A",label:"Yes, it is complete and up to date."},{id:"B",label:"No, it is up to date but some documents are missing / unsigned/ erroneously filed/ damaged."},{id:"C",label:"No, it is complete but not up to date."},{id:"D",label:"No, it is neither complete nor up to date."}]},{name:"benef_dig_files_archived_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"vis",rules:e()},{name:"files_hard_copy_and_dig_match",label:"Do the files\u2019 physical and digital archive match?",type:"radio",theme:"spread",section:"arch",rules:e(),choices:[{id:"A",label:"Yes, they match completely."},{id:"B",label:"No, some documents and/or updated information are missing from the physical archive."},{id:"C",label:"No, some documents and/or updated information are missing from the digital archive."}]},{name:"files_hard_copy_and_dig_match_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"vis",rules:e()},{name:"inter_instr_on_apply_iom_charter",label:"Is there an internal instruction on how to apply IOM\u2019s visibility requirements?",type:"decision",section:"vis",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"inter_instr_on_apply_iom_charter_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"vis",rules:e()},{name:"contact_person_for_vis",label:"Is there a contact person for visibility specific to this project?",type:"decision",section:"vis",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"contact_person_for_vis_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"vis",rules:e()},{name:"logos_present",label:"Do the MoM, IOM and HELIOS logos appear when referencing the HELIOS project on IP\u2019s website?",type:"decision",section:"vis",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"logos_present_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"vis",rules:e()},{name:"iom_tagged",label:"Do the MoM, IOM and HELIOS mentioned or tagged when referencing the HELIOS project on IP\u2019s social media accounts?",type:"decision",section:"vis",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"iom_tagged_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"vis",rules:e()},{name:"iom_website_link_present",label:"Does a link to MoM and IOM Greece website appear when referencing the HELIOS project on IP\u2019s website and social media accounts?",type:"decision",section:"vis",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"iom_website_link_present_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"vis",rules:e()},{name:"iom_text_mention",label:"Is the following line included when referencing the HELIOS project on IP\u2019s website and social media accounts 'The project is implemented by IOM Greece and is funded by the Ministry of Migration and Asylum.'?",type:"decision",section:"vis",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"iom_text_mention_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"vis",rules:e()},{name:"info_on_project_on_website",label:"Is information about the project referencing IOM and MoM found at least monthly on the IP\u2019s website and social media accounts?",type:"decision",section:"vis",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"info_on_project_on_website_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"vis",rules:e()},{name:"iom_font_order_ok",label:"Do the MoM, IOM, HELIOS and IP\u2019s logos appear on the ILC\u2019s building signage, in the same font size and in this particular order?",type:"decision",section:"vis",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"iom_font_order_ok_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"vis",rules:e()},{name:"iom_logo_on_stuff",label:"Do the MoM, IOM, HELIOS and IP\u2019s logos appear on equipment and materials addressing beneficiaries, such as computers, notepads, etc?",type:"radio",theme:"spread",section:"vis",rules:e(),choices:[{id:"A",label:"Yes, they all appear in all basic equipment and materials, in the same font size and in this particular order."},{id:"B",label:"Yes, they all appear in few equipment and materials used in the center, in the same font size and in this particular order."},{id:"C",label:"Yes, they all appear, but not in this particular order and/or in different font sizes."},{id:"D",label:"No, only some of them appear."},{id:"E",label:"No, there are no logos on any objects at the center."}]},{name:"iom_logo_on_clothes",label:"Do the MoM, IOM, HELIOS and IP\u2019s logos appear on clothing items worn by IP\u2019 staff, such as vests, stickers, t-shirts, caps, etc?",type:"radio",theme:"spread",section:"vis",rules:e(),choices:[{id:"A",label:"Yes, they all appear in all basic clothing items worn by IP\u2019 staff, in the same font size and in this particular order."},{id:"B",label:"Yes, they all appear in few clothing items worn by IP\u2019 staff, in the same font size and in this particular order."},{id:"C",label:"Yes, they all appear, but not in this particular order and/or in different font sizes."},{id:"D",label:"No, only some of them appear."},{id:"E",label:"No, there are no logos on any clothing items worn by IP\u2019 staff at the center."}]},{name:"iom_logo_on_docs",label:"Do the MoM, IOM, HELIOS and IP\u2019s logos appear on the files and documents used in the visiting center, such as document forms, digital archive, etc?",type:"radio",theme:"spread",section:"vis",rules:e(),choices:[{id:"A",label:"Yes, they all appear in all files, in the same font size and in this particular order."},{id:"B",label:"Yes, they all appear in few files used in the center, in the same font size and in this particular order."},{id:"C",label:"Yes, they all appear, but not in this particular order and/or in different font sizes."},{id:"D",label:"No, only some of them appear."},{id:"E",label:"No, there are no logos on any files at the center."}]},{name:"iom_logo_on_pubs",label:"Do the MoM, IOM, HELIOS and IP\u2019s logos appear on the publications regarding the HELIOS project available at the visiting center, such as brochures, flyers, newsletters, etc?",type:"radio",theme:"spread",section:"vis",rules:e(),choices:[{id:"A",label:"Yes, they all appear in all publications, in the same font size and in this particular order."},{id:"B",label:"Yes, they all appear in few publications used in the center, in the same font size and in this particular order."},{id:"C",label:"Yes, they all appear, but not in this particular order and/or in different font sizes"},{id:"D",label:"No, only some of them appear."},{id:"E",label:"No, there are no logos on any publicatons at the center."}]},{name:"latest_narr_report",label:"When was the latest narrative report submitted?",type:"date",rules:N().required(),section:"report",extra:{variant:"simple"}},{name:"latest_narr_report_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"report",rules:e()},{name:"dig_report_archive_avail",label:"Is there a digital archive for all reports (is it systematized and readily available)",type:"decision",section:"report",rules:e(),choices:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{name:"dig_report_archive_avail_comments",hidden:!0,label:"Comments / remarks",type:"textarea",section:"report",rules:e()}]),{formControls:b,saveMode:k,formName:A,fields:O,formType:H}=W("field",Y,M,o,g),r=p({form:{type:H.value,save:k.value},sections:{basic:{label:"Basic Information"},self:{label:"General Overview",helpText:"Self observation notes regarding general state of the facility."},ilc:{label:"General Operation of the ILC",helpText:"Self observation notes regarding the operaration of the Integration Learning Center."},ico:{label:"Integration Courses Overview",helpText:"Carried out through consultations with LC\u2019s representative. All data provided here needs to be checked and cross-referenced in the relevant files."},ip_res:{label:"IP\u2019s Resources"},arch:{label:"Archive"},vis:{label:"Visibility"},report:{label:"Reporting"}},fields:O}),q=F(()=>r.value.fields.map((c,s)=>{if(c.name.match("comments")&&c.hidden)return r.value.fields[s-1].name}).filter(Boolean)),P=c=>{const s=r.value.fields.indexOf(c),d=r.value.fields[s+1];d.hidden=!1},I=p(!1);return R(o,(c,s)=>{if(k.value==="perField"&&!I.value)for(const d of r.value.fields.filter(({name:_})=>_.match("comments")))o.value[d.name]&&(I.value=!0,d.hidden=!1)},{deep:!0}),(c,s)=>{const d=ee,_=j,E=D;return n(),C("article",null,[a(x).ui.menu=="full"?(n(),v(U,{key:0})):u("",!0),a(k)&&o.value?(n(),v(E,V({key:1,class:["iom-form",[g.value?"opacity-50":""]],"root-loading":g.value,"persist-state":!0,name:a(A),modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=m=>o.value=m)},{schema:r.value,...a(b)},{"submit-text":"Save"}),{"after-field":i(({fieldObj:m,fieldIndex:oe,fields:re})=>[!a(b).readonly&&a(q).includes(m.name)?(n(),C("section",{key:0,class:"flex items-center space-x-2 py-3 select-none cursor-pointer hover:text-primary-600 group",onClick:ce=>P(m)},[L(d,{class:"w-6 h-6 text-dark-600 group-hover:text-primary-700"}),ae],8,te)):u("",!0)]),"prepend-section-ilc":i(()=>[a(b).readonly?u("",!0):(n(),v(_,{key:0,level:"warning",show:!0,class:"transform -translate-y-6 !mb-6 block relative"},{desc:i(()=>[se]),default:i(()=>[ie]),_:1}))]),"prepend-section-ico":i(()=>[a(b).readonly?u("",!0):(n(),v(_,{key:0,level:"warning",show:!0,class:"transform -translate-y-6"},{desc:i(()=>[le]),default:i(()=>[ne]),_:1}))]),"submit-button":i(m=>[L(Z,$(G({...m})),null,16)]),_:1},16,["class","root-loading","name","modelValue"])):u("",!0)])}}};export{be as default};
