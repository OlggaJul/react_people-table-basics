(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(26),a=c(11),s=(c(35),c(36),c(2)),r=(c(37),c(4)),j=c(6),i=c(5),l=c(0),b=c(15),o=c.n(b),d=(c(38),c(3)),h=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})},x="https://mate-academy.github.io/react_people-table/api/people.json";function O(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch(x)})).then((function(e){return e.json()}));var e}var u=function(){var e=Object(l.useState)(!0),t=Object(i.a)(e,2),c=t[0],n=t[1],b=Object(l.useState)([]),x=Object(i.a)(b,2),u=x[0],p=x[1],m=Object(l.useState)(!1),f=Object(i.a)(m,2),v=f[0],g=f[1],N=Object(s.p)().slug,y=function(){var e=Object(j.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O();case 3:t=e.sent,p((function(){return t})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),g(!0);case 10:return e.prev=10,n(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),w=!c&&!u.length;Object(l.useEffect)((function(){y()}),[]);var k=function(e){var t=u.find((function(t){return t.name===e}));return e?t?Object(d.jsx)(a.b,{className:o()({"has-text-danger":"f"===t.sex}),to:t.slug,children:e}):"".concat(e):"-"};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:"People Page"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)("div",{className:"box table-container",children:c?Object(d.jsx)(h,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Sex"}),Object(d.jsx)("th",{children:"Born"}),Object(d.jsx)("th",{children:"Died"}),Object(d.jsx)("th",{children:"Mother"}),Object(d.jsx)("th",{children:"Father"})]})}),Object(d.jsx)("tbody",{children:u.map((function(e){return Object(d.jsxs)("tr",{className:o()({"has-background-warning":e.slug===N}),"data-cy":"person",children:[Object(d.jsx)("td",{children:Object(d.jsx)(a.b,{to:e.slug,className:o()({"has-text-danger":"f"===e.sex}),children:e.name})}),Object(d.jsx)("td",{children:e.sex}),Object(d.jsx)("td",{children:e.born}),Object(d.jsx)("td",{children:e.died}),Object(d.jsx)("td",{children:k(e.motherName)}),Object(d.jsx)("td",{children:k(e.fatherName)})]},e.slug)}))})]}),v&&Object(d.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),w&&Object(d.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})})})]})},p=function(e){var t=e.to,c=e.text;return Object(d.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return o()("navbar-item",{"has-background-grey-lighter":t})},children:c})},m=function(){return Object(d.jsxs)("div",{"data-cy":"app",children:[Object(d.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(p,{to:"/",text:"Home"}),Object(d.jsx)(p,{to:"/people",text:"People"})]})})}),Object(d.jsx)("main",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.b,{path:"*",element:Object(d.jsx)("h1",{className:"title",children:"Page not found"})}),Object(d.jsx)(s.b,{path:"/home",element:Object(d.jsx)(s.a,{to:"/",replace:!0})}),Object(d.jsx)(s.b,{path:"/",element:Object(d.jsx)("h1",{className:"title",children:"Home Page"})}),Object(d.jsx)(s.b,{path:"/people",element:Object(d.jsx)(u,{}),children:Object(d.jsx)(s.b,{path:":slug",element:Object(d.jsx)(u,{})})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(d.jsx)(a.a,{children:Object(d.jsx)(m,{})}))}},[[40,1,2]]]);
//# sourceMappingURL=main.47a6b6bc.chunk.js.map