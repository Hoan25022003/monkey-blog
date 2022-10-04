"use strict";(self.webpackChunkreact_monkey_blogging_boilerplate=self.webpackChunkreact_monkey_blogging_boilerplate||[]).push([[391,791],{4994:function(n,e,t){var r,i=t(1413),o=t(4925),a=t(168),s=(t(2791),t(3504)),l=t(6031),c=t(184),d=["type","link","size","children","onClick"],p=l.ZP.button(r||(r=(0,a.Z)(["\n  width: ",";\n  background-color: ",";\n  font-size: 18px;\n  font-weight: 600;\n  padding: 16px 0;\n  color: ",";\n  border-radius: 8px;\n  cursor: pointer;\n"])),(function(n){return n.size}),(function(n){return n.bgColor||n.theme.secondary}),(function(n){return n.fontColor||"#fff"}));e.Z=function(n){var e=n.type,t=void 0===e?"button":e,r=n.link,a=n.size,l=void 0===a?"180px":a,u=n.children,x=n.onClick,h=void 0===x?function(){}:x,m=(0,o.Z)(n,d);return""!==r&&"string"===typeof r?(0,c.jsx)(s.rU,{to:r,children:(0,c.jsx)(p,(0,i.Z)((0,i.Z)({size:l,type:t},m),{},{children:u}))}):(0,c.jsx)(p,(0,i.Z)((0,i.Z)({onClick:h,size:l,type:t},m),{},{children:u}))}},391:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r,i,o,a=t(168),s=(t(2791),t(6871)),l=t(6031),c=t(6011),d=t(6791),p=t(3504),u=t(4994),x=t(184),h=l.ZP.div(r||(r=(0,a.Z)(["\n  background-color: white;\n  padding: 20px;\n  border-bottom: 1px solid #eee;\n  display: flex;\n  justify-content: space-between;\n  .header-logo {\n    display: flex;\n    align-items: center;\n    font-weight: 700;\n    font-size: 20px;\n    gap: 0 20px;\n    img {\n      max-width: 40px;\n    }\n    margin-bottom: 20px;\n    padding: 20px 20px 0;\n  }\n  .header-info {\n    display: flex;\n    align-items: center;\n    gap: 0 20px;\n  }\n  .header-avatar {\n    display: flex;\n    align-items: center;\n    img {\n      width: 52px;\n      height: 52px;\n      object-fit: cover;\n      border-radius: 100rem;\n    }\n    span {\n      margin-right: 10px;\n      font-weight: 600;\n      font-size: 16px;\n    }\n  }\n"]))),m=function(){var n=(0,c.a)().personalInfo;return(0,x.jsxs)(h,{children:[(0,x.jsxs)(p.rU,{to:"/",className:"header-logo",children:[(0,x.jsx)("img",{srcSet:"/monkey-logo.png 2x",alt:""}),(0,x.jsx)("span",{children:"Monkey Blogging"})]}),(0,x.jsxs)("div",{className:"header-info",children:[(0,x.jsx)(u.Z,{link:"/manage/add-post",children:"Write new post"}),(0,x.jsxs)(p.rU,{className:"header-avatar",to:"/profile",children:[(0,x.jsx)("span",{children:n.fullName}),(0,x.jsx)("img",{src:n.avatar,alt:""})]})]})]})},g=t(5861),f=t(7757),w=t.n(f),j=t(3578),v=t(3141),k=l.ZP.div(i||(i=(0,a.Z)(["\n  width: 300px;\n  background: #ffffff;\n  box-shadow: 10px 10px 20px rgba(218, 213, 213, 0.15);\n  border-radius: 12px;\n  .menu-item {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 14px 20px;\n    font-weight: 500;\n    color: ",";\n    margin-bottom: 20px;\n    cursor: pointer;\n    &.active,\n    &:hover {\n      background: #f1fbf7;\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.gray80}),(function(n){return n.theme.primary})),b=[{title:"Dashboard",url:"/dashboard",icon:(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"})})},{title:"Post",url:"/manage/post",icon:(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})},{title:"Category",url:"/manage/category",icon:(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"})})},{title:"User",url:"/manage/user",icon:(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"})})},{title:"Logout",url:"/",icon:(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})}),onClick:function(){var n=(0,g.Z)(w().mark((function n(){return w().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,j.w7)(v.I);case 2:window.location.href="/register";case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()}],y=function(){return(0,x.jsx)(k,{className:"sidebar",children:b.map((function(n){return n.onClick?(0,x.jsxs)("div",{className:"menu-item",onClick:n.onClick,children:[(0,x.jsx)("span",{className:"menu-icon",children:n.icon}),(0,x.jsx)("span",{className:"menu-text",children:n.title})]}):(0,x.jsxs)(p.OL,{to:n.url,className:"menu-item",children:[(0,x.jsx)("span",{className:"menu-icon",children:n.icon}),(0,x.jsx)("span",{className:"menu-text",children:n.title})]})}))})},C=l.ZP.div(o||(o=(0,a.Z)(["\n  max-width: 1600px;\n  margin: 0 auto;\n  .dashboard {\n    &-heading {\n      font-weight: bold;\n      font-size: 36px;\n      margin-bottom: 40px;\n      color: ",";\n      letter-spacing: 1px;\n    }\n    &-main {\n      display: grid;\n      grid-template-columns: 300px minmax(0, 1fr);\n      padding: 40px 20px;\n      gap: 0 40px;\n      align-items: start;\n    }\n  }\n"])),(function(n){return n.theme.primary})),N=function(){return(0,c.a)().userInfo?(0,x.jsxs)(C,{children:[(0,x.jsx)(m,{}),(0,x.jsxs)("div",{className:"dashboard-main",children:[(0,x.jsx)(y,{}),(0,x.jsx)("div",{className:"dashboard-children",children:(0,x.jsx)(s.j3,{})})]})]}):(0,x.jsx)(d.default,{})}},6791:function(n,e,t){t.r(e);var r,i=t(168),o=(t(2791),t(3504)),a=t(6031),s=t(184),l=a.ZP.div(r||(r=(0,i.Z)(["\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  color: white;\n  .page-content {\n    max-width: 1000px;\n    margin: 0 auto;\n    text-align: center;\n  }\n  .logo {\n    display: inline-block;\n    margin-bottom: 40px;\n  }\n  .heading {\n    font-size: 60px;\n    font-weight: bold;\n    margin-bottom: 20px;\n  }\n  .description {\n    max-width: 800px;\n    margin: 0 auto 40px;\n  }\n  .back {\n    display: inline-block;\n    padding: 15px 30px;\n    color: white;\n    background-image: ",";\n    border-radius: 8px;\n    font-weight: 500;\n  }\n  .image {\n    max-width: 250px;\n    margin: 0 auto 40px;\n  }\n"])),(function(n){return n.theme.gradientColor}));e.default=function(){return(0,s.jsx)(l,{children:(0,s.jsxs)("div",{className:"page-content text-black",children:[(0,s.jsx)("img",{src:"/404.png",alt:"notfound",className:"image"}),(0,s.jsx)("h1",{className:"heading",children:"404 - Looks like you're lost."}),(0,s.jsx)("p",{className:"description",children:"Maybe this page used to exist or you just spelled something wrong. Chances are your spelled something wrong, so can you double check the URL?"}),(0,s.jsx)(o.OL,{to:"/",className:"back",children:"Back to home"})]})})}},4925:function(n,e,t){function r(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}t.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=391.860d8929.chunk.js.map