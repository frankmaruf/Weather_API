(this.webpackJsonptemperature=this.webpackJsonptemperature||[]).push([[0],{18:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(4),r=a.n(s),i=a(1);var j=a(6),u=a.n(j),o=a(8),m=a(7),p=a(9),l=a.n(p),b=(a(18),function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)("Dhaka"),j=Object(m.a)(r,2),p=j[0],b=j[1];return Object(n.useEffect)((function(){(function(){var e=Object(o.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://api.openweathermap.org/data/2.5/weather?q=".concat(p,"&units=metric&appid=8b0a515401f1def6cc984ec764e92f2e"),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,s(n.main);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p]),Object(i.jsx)(c.a.Fragment,{children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("div",{className:"inputData",children:Object(i.jsx)("input",{type:"search",className:"inputFeild",value:p,onChange:function(e){b(e.target.value)}})}),a?Object(i.jsxs)("div",{className:"info",children:[Object(i.jsxs)("h2",{className:"location",children:[Object(i.jsx)(l.a,{color:"primary"}),p]}),Object(i.jsxs)("h1",{className:"temp",children:[a.temp,"\u2103"]}),Object(i.jsxs)("h3",{className:"tempmin_max",children:["Min : ",a.temp_min,"\u2103  | Max : ",a.temp_max,"\u2103"]})]}):Object(i.jsx)("p",{children:"No Data Found"}),Object(i.jsx)("div",{className:"wave -one"}),Object(i.jsx)("div",{className:"wave -one"}),Object(i.jsx)("div",{className:"wave -one"})]})})}),d=function(){return Object(i.jsx)(c.a.Fragment,{children:Object(i.jsx)(b,{})})};r.a.render(Object(i.jsx)(d,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.08a5d68c.chunk.js.map