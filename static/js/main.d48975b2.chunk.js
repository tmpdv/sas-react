(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{58:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(0),i=n.n(a),r=n(21),o=n.n(r),l=(n(58),n(44)),s=n(8),d=n(20),u=n(112),j=n(115),b=n(117),h=n(118),m=n(119),p=n(121),x=n(116),O=n(120),f=n(45),g=n(43),v=n.n(g),k=[{name:"\u041f\u0435\u0440\u0435\u043b\u0451\u0442",link:"/https://docs.google.com/uc?export=download&id=1yNnI9lexfjZDpyFXltRI-mMgSZiZIwKr",creationDate:"2013-11-25"},{name:"Moment",link:"https://docs.google.com/uc?export=download&id=1B_banSTzLb6MlmBusUe2ybkp7qPGeAhi",creationDate:"2014-08-12"},{name:"Prostory",link:"https://docs.google.com/uc?export=download&id=1FpeT6eAeKfEnFctRkbh1ByQ4za0Ci_3S",creationDate:"2014-10-27"},{name:"\u0427\u0430\u0448\u0430646",link:"https://docs.google.com/uc?export=download&id=171SWtaZ2CPH2O3BfmuQPydGwZBdwvju0",creationDate:"2015-01-21"},{name:"\u0427\u0443\u0448\u0430\u0430\u041c\u0430\u0430\u0448\u0443\u0427",link:"https://docs.google.com/uc?export=download&id=1cA1scoUvAinEZ4t_yBWG9P-aA2b8ddz7",creationDate:"2015-03-12"},{name:"LLSSDD",link:"https://docs.google.com/uc?export=download&id=1sFOZTUdBbOMQQhnJZvtWgdp5qrnDVhAY.mp3",creationDate:"2015-06-01"}],y=n(23),S=n(46),w=n(42),F=n.n(w),C=n(113),D=n(123),B=n(114),I=n(122),A=function(e){var t=e.children,n=e.value,a=e.index,i=Object(S.a)(e,["children","value","index"]);return Object(c.jsx)("div",Object(y.a)(Object(y.a)({role:"tabpanel",hidden:n!==a,id:"full-width-tabpanel-".concat(a),"aria-labelledby":"full-width-tab-".concat(a)},i),{},{children:n===a&&Object(c.jsx)(I.a,{p:3,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:t})}))};function N(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var P=Object(u.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:"100%"},audio:{outline:"none",marginBottom:"1em"},image:{marginBottom:"1em",width:"15em"}}}));function T(e){var t=e.tracks,n=e.images,a=e.about,r=P(),o=P(),l=i.a.useState(0),s=Object(d.a)(l,2),u=s[0],j=s[1];return Object(c.jsxs)("div",{className:r.root,children:[Object(c.jsx)(C.a,{position:"static",color:"default",children:Object(c.jsxs)(D.a,{value:u,onChange:function(e,t){j(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"full width tabs example",children:[Object(c.jsx)(B.a,Object(y.a)({label:"Tracks"},N(0))),Object(c.jsx)(B.a,Object(y.a)({label:"Visuals"},N(1))),Object(c.jsx)(B.a,Object(y.a)({label:"About"},N(2)))]})}),Object(c.jsxs)(F.a,{axis:"rtl"===o.direction?"x-reverse":"x",index:u,onChangeIndex:function(e){j(e)},children:[Object(c.jsx)(A,{value:u,index:0,dir:o.direction,children:t&&t.map((function(e){return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsx)("p",{children:e.name}),Object(c.jsx)("audio",{controls:!0,src:e.link,className:r.audio},e.link)]})}))}),Object(c.jsx)(A,{value:u,index:1,dir:o.direction,children:n&&n.map((function(e){return Object(c.jsx)("img",{src:e.link,alt:"",className:r.image},e.id)}))}),Object(c.jsx)(A,{value:u,index:2,dir:o.direction,children:Object(c.jsx)("p",{children:a&&a.value})})]})]})}var Z=Object(u.a)({main:{background:"url(https://docs.google.com/uc?export=download&id=1_rsIQL5vscxsNAItQ3c4FTRvInz0dQf_)",backgroundAttachment:"fixed",backgroundPosition:"center",backgroundSize:"cover"},card:{opacity:.8,minHeight:"100vh"}}),E=function(){var e=Object(f.a)({palette:{type:"dark",primary:{main:v.a[100]}}}),t=Object(a.useState)(),n=Object(d.a)(t,2),i=n[0],r=n[1];Object(a.useEffect)((function(){fetch("/data/pictures").then((function(e){return e.json()})).then((function(e){return r(e.elementList)}))}),[]);var o=Object(a.useState)(),l=Object(d.a)(o,2),s=l[0],u=l[1];Object(a.useEffect)((function(){fetch("/data/about").then((function(e){return e.json()})).then((function(e){return u(e)}))}),[]);var g=Z();return Object(c.jsx)(j.a,{theme:e,children:Object(c.jsx)("div",{className:g.main,children:Object(c.jsx)(x.a,{maxWidth:"sm",children:Object(c.jsxs)(b.a,{className:g.card,children:[Object(c.jsx)(h.a,{children:Object(c.jsx)(m.a,{children:Object(c.jsxs)(O.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:[Object(c.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Staffs and Scrolls"}),Object(c.jsx)(p.a,{variant:"body2",color:"textSecondary",component:"p",children:"Ambient. Visuals. Trips."})]})})}),Object(c.jsx)(T,{tracks:k,images:i,about:s})]})})})})},L=function(e){var t=e.onFileSelect,n=Object(a.useRef)(null);return Object(c.jsxs)("div",{className:"file-uploader",children:[Object(c.jsx)("input",{type:"file",onChange:function(e){t(e.target.files[0])}}),Object(c.jsx)("button",{onClick:function(e){return n.current&&n.current.click()},className:"btn btn-primary"})]})},Q=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(null),o=Object(d.a)(r,2),l=o[0],s=o[1];return Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{type:"text",value:n,onChange:function(e){return i(e.target.value)}}),Object(c.jsx)(L,{onFileSelectSuccess:function(e){return s(e)},onFileSelectError:function(e){var t=e.error;return alert(t)}}),Object(c.jsx)("button",{onClick:function(){var e=new FormData;e.append("name",n),e.append("file",l),fetch().post("/store/upload",e).then((function(e){alert("File Upload success")})).catch((function(e){return alert("File Upload Error")}))},children:"Submit"})]})};var z=function(){return Object(c.jsx)("div",{className:"root",children:Object(c.jsx)(l.a,{children:Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{exact:!0,path:"/",component:E}),Object(c.jsx)(s.a,{path:"/admin/upload",component:Q})]})})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,125)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(z,{})}),document.getElementById("root")),M()}},[[86,1,2]]]);
//# sourceMappingURL=main.d48975b2.chunk.js.map