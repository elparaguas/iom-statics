import{o as e,c as a,a as r,e as v,x as l,w as b,A as s,i as o,B as p,V as w}from"./index.edb05c85.js";const g={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},y=r("path",{fill:"currentColor",d:"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39a1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08l3.78-5a1 1 0 1 1 1.6 1.22Z"},null,-1),x=[y];function $(t,i){return e(),a("svg",g,x)}var k={name:"eva-checkmark-circle2-fill",render:$};const B={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},M=r("path",{fill:"currentColor",d:"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 15a1 1 0 1 1 1-1a1 1 0 0 1-1 1Zm1-4a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0Z"},null,-1),A=[M];function Z(t,i){return e(),a("svg",B,A)}var C={name:"eva-alert-circle-fill",render:Z};const R={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},V=r("path",{fill:"currentColor",d:"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm2.71 11.29a1 1 0 0 1 0 1.42a1 1 0 0 1-1.42 0L12 13.41l-1.29 1.3a1 1 0 0 1-1.42 0a1 1 0 0 1 0-1.42l1.3-1.29l-1.3-1.29a1 1 0 0 1 1.42-1.42l1.29 1.3l1.29-1.3a1 1 0 0 1 1.42 1.42L13.41 12Z"},null,-1),Y=[V];function L(t,i){return e(),a("svg",R,Y)}var N={name:"eva-close-circle-fill",render:L};const S={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},z=r("path",{fill:"currentColor",d:"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 14a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0Zm-1-7a1 1 0 1 1 1-1a1 1 0 0 1-1 1Z"},null,-1),E=[z];function j(t,i){return e(),a("svg",S,E)}var q={name:"eva-info-fill",render:j};const D={key:0,class:"br-notify-preicon"},F={class:"br-notify--content"},G={key:0,class:"br-alert--desc"},H={key:1},I={key:0},O={__name:"BrAlert",props:{closable:{default:!1,type:Boolean},level:{default:"",type:String},show:{default:!1,type:Boolean}},emits:["update:show"],setup(t,{emit:i}){return(n,c)=>{const _=q,d=N,m=C,f=k,u=w,h=v("br-transition");return e(),l(h,{name:"verticalBlur"},{default:b(()=>[t.show?(e(),a("section",{key:0,class:p(["br-alert",`br-alert__${t.level}`])},[r("article",null,[s(n.$slots,"preicon",{},()=>[t.level?(e(),a("section",D,[t.level=="info"?(e(),l(_,{key:0})):o("",!0),t.level=="danger"?(e(),l(d,{key:1})):o("",!0),t.level=="warning"?(e(),l(m,{key:2})):o("",!0),t.level=="success"?(e(),l(f,{key:3})):o("",!0)])):o("",!0)]),r("div",F,[r("span",null,[s(n.$slots,"default")]),n.$slots.desc?(e(),a("span",G,[s(n.$slots,"desc")])):o("",!0),n.$slots["inline-actions"]?(e(),a("span",H,[s(n.$slots,"inline-actions")])):o("",!0)]),s(n.$slots,"aftericon",{},()=>[t.closable&&!n.$slots.actions?(e(),a("section",I,[t.closable?(e(),l(u,{key:0,class:"br-notify--close",onClick:c[0]||(c[0]=J=>i("update:show",!1))})):o("",!0)])):o("",!0)]),s(n.$slots,"actions")])],2)):o("",!0)]),_:3})}}};export{O as _};
