(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{128:function(e,t,n){e.exports=n(230)},133:function(e,t,n){},135:function(e,t,n){},230:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),l=(n(133),n(134),n(127)),i=n(86),m=(n(135),n(236)),s=n(237),p=n(233),u=n(234),f=n(87),y=n(235),d=m.a.Title;var g=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),m=Object(i.a)(c,2),g=m[0],h=m[1],v=function(e){var t=[].concat(Object(l.a)(g),[{text:e,complete:!1}]);h(t)};return o.a.createElement(a.Fragment,null,o.a.createElement(p.a,{gutter:[16,10],style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},o.a.createElement(u.a,{span:12,style:{marginTop:"16px"}},o.a.createElement(d,{level:1},"Pan's Todo List")),o.a.createElement(u.a,{xs:{span:18},md:{span:20},lg:{span:12}},o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(n),r("")}},o.a.createElement(s.a,{type:"text",value:n,onChange:function(e){r(e.target.value)},allowClear:!0,required:!0}),o.a.createElement(f.a,{type:"primary",htmlType:"submit",ghost:!0,style:{width:"150px",marginTop:"16px"}},"Add Todo"),o.a.createElement(f.a,{type:"primary",danger:!0,ghost:!0,style:{width:"150px",marginTop:"16px"},onClick:function(){h([])},id:"removeBtn"},"Remove All")))),o.a.createElement(u.a,{lg:{span:8,offset:8},xs:{span:18,offset:3},md:{span:16,offset:4}},o.a.createElement(y.a,{itemLayout:"horizontal"},g.map((function(e,t){return o.a.createElement(y.a.Item,{key:t,style:{textDecoration:e.complete?"line-through":"",fontSize:"24px"},actions:[o.a.createElement("a",{key:t,onClick:function(){return function(e){var t=Array.from(g);t[e].complete=!t[e].complete,h(t)}(t)}},e.complete?"incompelete":"Complete"),o.a.createElement("a",{key:t,onClick:function(){return function(e){var t=Array.from(g);t.splice(e,1),h(t)}(t)}}," \xd7")]},e.text)})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[128,1,2]]]);
//# sourceMappingURL=main.e26050bc.chunk.js.map