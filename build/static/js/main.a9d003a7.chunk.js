(this.webpackJsonpports=this.webpackJsonpports||[]).push([[0],{117:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),r=n(18),i=n.n(r),s=(n(117),n(26)),a=(n(118),n.p+"static/media/propforce-white.8b48787f.png"),l=n(198),u=n(196),j=n(199),d=(n(88),n(194)),b=n(200),O=n(195),h=(n(119),n(197)),p={url:"https://propforce-ports-node.herokuapp.com"},f=n(9),m=h.a.Option;var x=function(e){var t=e.ports,n=e.setActivePort,o=e.setActiveUser,r=Object(c.useState)(null),i=Object(s.a)(r,2),a=(i[0],i[1]),l=Object(c.useState)(!1),u=Object(s.a)(l,2),j=(u[0],u[1]),d=Object(c.useState)([]),b=Object(s.a)(d,2),O=b[0],x=b[1];Object(c.useEffect)((function(){v()}),[]);var v=function(){fetch("".concat(p.url,"/api/user")).then((function(e){return e.json()})).then((function(e){console.log(e),j(!0),x(e)}),(function(e){console.log(e.message),j(!0),a(e)}))};return Object(f.jsxs)("div",{class:"set-port-container",children:[Object(f.jsx)(h.a,{showSearch:!0,style:{width:200},placeholder:"Select Your Name",optionFilterProp:"children",className:"port-dropdown",onChange:function(e){o(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},allowClear:!0,children:O.map((function(e){return Object(f.jsx)(m,{value:e.name,children:e.name},e._id)}))}),Object(f.jsx)(h.a,{showSearch:!0,style:{width:200},placeholder:"Select the port",optionFilterProp:"children",className:"port-dropdown",onChange:function(e){n(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},allowClear:!0,children:t.map((function(e){return Object(f.jsx)(m,{value:e._id,children:e.name},e._id)}))})]})},v=l.a.Header,w=l.a.Footer,S=l.a.Content;var g=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),n=(t[0],t[1]),o=Object(c.useState)(!1),r=Object(s.a)(o,2),i=(r[0],r[1]),h=Object(c.useState)([]),m=Object(s.a)(h,2),g=m[0],C=m[1],N=Object(c.useState)(null),P=Object(s.a)(N,2),y=P[0],_=P[1],k=Object(c.useState)(null),F=Object(s.a)(k,2),L=F[0],T=F[1],A=Object(c.useState)(!1),E=Object(s.a)(A,2),J=E[0],U=E[1],B=u.a.confirm;Object(c.useEffect)((function(){I()}),[]);var I=function(){fetch("".concat(p.url,"/api/port")).then((function(e){return e.json()})).then((function(e){i(!0),C(e)}),(function(e){console.log(e.message),i(!0),n(e)}))},D=function(e){var t={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("".concat(p.url,"/api/port"),t).then((function(e){return e.json()})).then((function(e){i(!0),I()}),(function(e){i(!0),n(e)}))};return Object(f.jsxs)(l.a,{children:[Object(f.jsxs)(v,{children:[Object(f.jsxs)("div",{className:"title",children:[Object(f.jsx)("img",{className:"logo",src:a,alt:"Propforce"}),Object(f.jsx)("div",{children:"PORTS"})]}),Object(f.jsx)(b.a,{className:"add-icon",onClick:function(){U(!0)}}),Object(f.jsx)(u.a,{title:"Set Port",visible:J,onOk:function(){D({_id:y,name:L}),U(!1)},onCancel:function(){U(!1)},children:Object(f.jsx)(x,{ports:g,setActivePort:_,setActiveUser:T})})]}),Object(f.jsxs)(S,{children:[Object(f.jsx)("div",{className:"port-container",children:Object(f.jsx)("div",{className:"port-inner-container",children:Object(f.jsx)("ul",{className:"port-list",children:g.map((function(e){return e.user&&e.user.name?Object(f.jsx)(j.a,{content:e.user.name,children:Object(f.jsxs)("li",{className:"port ".concat(e.user?"occupied":"free"),children:[e.name,Object(f.jsx)(O.a,{onClick:function(){return t=e,void B({icon:Object(f.jsx)(d.a,{}),content:Object(f.jsxs)("div",{className:"popup-title",children:[Object(f.jsx)("div",{children:"Are you sure you want to free the port?"}),Object(f.jsxs)("div",{children:["Port ",Object(f.jsx)("b",{children:t.name})," is currently occupied by"," ",Object(f.jsx)("b",{children:t.user.name})]})]}),onOk:function(){D({_id:t._id,user:null})},onCancel:function(){}});var t},className:"remove-icon"})]},e._id)}):Object(f.jsx)("li",{className:"port ".concat(e.user&&e.user.name?"occupied":"free"),children:e.name},e._id)}))})})}),Object(f.jsx)("div",{className:"wave"}),Object(f.jsx)("div",{className:"wave"})]}),Object(f.jsx)(w,{children:Object(f.jsx)("div",{className:"footerTitle",children:"Propforce \xa9 2021"})})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,201)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))};i.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root")),C()}},[[191,1,2]]]);
//# sourceMappingURL=main.a9d003a7.chunk.js.map