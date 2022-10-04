"use strict";(self.webpackChunkreact_monkey_blogging_boilerplate=self.webpackChunkreact_monkey_blogging_boilerplate||[]).push([[714],{9646:function(e,n,t){t.d(n,{Z:function(){return m}});var r,a,s=t(1413),o=t(4925),i=t(168),c=(t(2791),t(6031)),l=t(184),d=c.ZP.div(r||(r=(0,i.Z)(["\n  display: inline-block;\n  width: ",";\n  height: ",";\n  border: "," solid #fff;\n  border-top: "," solid transparent;\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n  border-radius: 50%;\n  animation: spinner linear infinite 0.75s;\n  @keyframes spinner {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])),(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.border}),(function(e){return e.border})),u=function(e){var n=e.size,t=e.border;return(0,l.jsx)(d,{size:n,border:t})},h=["children","type","onClick"],p=c.ZP.button(a||(a=(0,i.Z)(["\n  margin-top: 16px;\n  background: ",";\n  width: 250px;\n  cursor: pointer;\n  padding: 18px 0;\n  color: white;\n  border-radius: 8px;\n  font-size: 20px;\n  transition: all ease-in 0.25s;\n  font-weight: 600;\n  &:disabled {\n    opacity: 0.6;\n    pointer-events: none;\n  }\n"])),(function(e){return e.theme.gradientColor})),m=function(e){var n=e.children,t=e.type,r=void 0===t?"button":t,a=e.onClick,i=void 0===a?function(){}:a,c=(0,o.Z)(e,h),d=c.loading;return(0,l.jsx)(p,(0,s.Z)((0,s.Z)({type:r,onClick:i,disabled:d},c),{},{children:d?(0,l.jsx)(u,{size:"30px",border:"4px"}):n}))}},8119:function(e,n,t){var r=t(1413),a=t(4925),s=(t(2791),t(1134)),o=t(184),i=["checked","children","control","name"];n.Z=function(e){var n=e.checked,t=e.children,c=e.control,l=e.name,d=(0,a.Z)(e,i),u=(0,s.bc)({control:c,name:l,defaultValue:""}).field;return(0,o.jsxs)("label",{children:[(0,o.jsx)("input",(0,r.Z)((0,r.Z)({onChange:function(){},checked:n,type:"radio",className:"hidden-input"},u),d)),(0,o.jsxs)("div",{className:"flex items-center gap-x-3 font-medium cursor-pointer",children:[(0,o.jsx)("div",{className:"w-7 h-7 rounded-full ".concat(n?"bg-green-400":"bg-gray-200")}),(0,o.jsx)("span",{children:t})]})]})}},3471:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(1413),a=t(4925),s=t(2791),o=t(9439),i=t(184),c=(0,s.createContext)();function l(e){var n=Object.assign({},e),t=(0,s.useState)(!1),a=(0,o.Z)(t,2),l=a[0],d=a[1],u={handleToggleDropdown:function(){d(!l)},show:l,setShow:d};return(0,i.jsx)(c.Provider,(0,r.Z)((0,r.Z)({value:u},n),{},{children:n.children}))}function d(){var e=(0,s.useContext)(c);if("undefined"===typeof e)throw new Error("useDropdown must be used within DropdownProvider");return e}var u=function(e){var n=e.children,t=d(),r=t.show,a=t.setShow;return(0,i.jsx)(i.Fragment,{children:r&&(0,i.jsx)("div",{className:"absolute top-full left-0 w-full bg-white shadow-lg",onClick:function(){return a(!1)},children:n})})},h=function(e){var n=e.placeholder,t=d(),r=t.show,a=t.handleToggleDropdown;return(0,i.jsxs)("div",{className:"flex items-center justify-between p-5 bg-[#E7ECF3] rounded cursor-pointer font-medium",onClick:a,children:[(0,i.jsx)("span",{children:n}),(0,i.jsx)("span",{children:r?(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 15l7-7 7 7"})}):(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})})})]})},p=["placeholder","children"],m=function(e){var n=e.placeholder,t=e.children,s=(0,a.Z)(e,p);return(0,i.jsx)(l,(0,r.Z)((0,r.Z)({},s),{},{children:(0,i.jsxs)("div",{className:"relative inline-block w-full mt-3",children:[(0,i.jsx)(h,{placeholder:n}),(0,i.jsx)(u,{children:t})]})}))}},5990:function(e,n,t){t(2791);var r=t(184);n.Z=function(e){var n=e.onClick;return(0,r.jsx)("div",{className:"px-5 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-100 select-none",onClick:n,children:e.children})}},2033:function(e,n,t){var r,a=t(168),s=(t(2791),t(6031)),o=t(184),i=s.ZP.div(r||(r=(0,a.Z)(["\n  text-align: left;\n  margin-bottom: 16px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n"])));n.Z=function(e){var n=e.children;return(0,o.jsx)(i,{className:"form-group",children:n})}},4110:function(e,n,t){var r,a=t(1413),s=t(4925),o=t(168),i=(t(2791),t(6031)),c=t(1134),l=t(184),d=["children","type","name","control","errorMessage"],u=i.ZP.div(r||(r=(0,o.Z)(["\n  position: relative;\n  border-radius: 8px;\n  margin-top: 12px;\n  input {\n    border: 1px solid #ddd;\n    width: 100%;\n    border-radius: inherit;\n    padding: 16px;\n    outline: none;\n    transition: all ease-in 0.2s;\n    background-color: ",";\n    &:focus {\n      border: 1px solid ",";\n    }\n  }\n  input::placeholder {\n    color: #c4c4c4;\n  }\n"])),(function(e){return e.bgInput}),(function(e){return e.theme.secondary}));n.Z=function(e){var n=e.children,t=e.type,r=void 0===t?"text":t,o=e.name,i=e.control,h=(e.errorMessage,(0,s.Z)(e,d)),p=(0,c.bc)({control:i,name:o}).field;return(0,l.jsxs)(u,{children:[(0,l.jsx)("input",(0,a.Z)((0,a.Z)({type:r,id:o},p),h)),n]})}},6639:function(e,n,t){var r,a=t(168),s=(t(2791),t(6031)),o=t(184),i=s.ZP.label(r||(r=(0,a.Z)(["\n  color: #292d32;\n  font-weight: 600;\n  font-size: 16px;\n"])));n.Z=function(e){var n=e.name,t=e.children;return(0,o.jsx)(i,{htmlFor:n,children:t})}},4961:function(e,n,t){var r=t(1413),a=t(4925),s=(t(2791),t(184)),o=["on","onClick"];n.Z=function(e){var n=e.on,t=e.onClick,i=(0,a.Z)(e,o);return(0,s.jsxs)("label",{children:[(0,s.jsx)("input",{type:"checkbox",checked:n,className:"hidden-input",onChange:function(){},onClick:t}),(0,s.jsx)("div",(0,r.Z)((0,r.Z)({className:"inline-block w-[80px] h-[42px] relative cursor-pointer rounded-full p-1 transition-all ".concat(n?"bg-green-500":"bg-gray-300")},i),{},{children:(0,s.jsx)("span",{className:"transition-all w-[34px] h-[34px] bg-white rounded-full inline-block ".concat(n?"translate-x-[38px]":"")})}))]})}},6030:function(e,n,t){var r=t(1413),a=t(4925),s=(t(2791),t(184)),o=["name","className","progress","image","handleDeleteImage","loadingSize"];n.Z=function(e){var n=e.name,t=e.className,i=void 0===t?"":t,c=e.progress,l=void 0===c?0:c,d=e.image,u=void 0===d?"":d,h=e.handleDeleteImage,p=(e.loadingSize,(0,a.Z)(e,o));return(0,s.jsxs)("label",{className:"cursor-pointer flex items-center justify-center bg-gray-100 border border-dashed w-full min-h-[200px] rounded-lg ".concat(i," relative overflow-hidden group"),children:[(0,s.jsx)("input",(0,r.Z)({type:"file",name:n,className:"hidden-input"},p)),!u&&0===l&&(0,s.jsxs)("div",{className:"flex flex-col items-center text-center pointer-events-none",children:[(0,s.jsx)("img",{src:"/add-image.png",alt:"upload-img",className:"max-w-[80px] mb-3"}),(0,s.jsx)("p",{className:"font-semibold",children:"Choose photo"})]}),!u&&0!==l&&(0,s.jsx)("div",{className:"border-8 bg-transparent w-14 h-14 rounded-full border-green-500 border-t-transparent animate-spin"}),u&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:u,className:"w-full h-full object-cover",alt:""}),(0,s.jsx)("button",{className:"absolute bg-white opacity-0 w-14 h-14 rounded-full text-green-700 group-hover:opacity-80 transition-all duration-200",onClick:h,type:"button",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5 mx-auto",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})})]}),!u&&(0,s.jsx)("div",{className:"absolute w-10 h-1 bg-green-400 bottom-0 left-0 transition-all image-upload-progress",style:{width:"".concat(Math.ceil(l),"%")}})]})}},4810:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(1413),a=t(3433),s=t(5861),o=t(9439),i=t(4506),c=t(7757),l=t.n(c),d=t(9062),u=t(2791),h=t(3141);function p(e,n){var t=(0,i.Z)(n).slice(0),c=(0,u.useState)([]),p=(0,o.Z)(c,2),m=p[0],f=p[1];return(0,u.useEffect)((function(){function n(){return(n=(0,s.Z)(l().mark((function n(){var s,o,i,c;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=(0,d.hJ)(h.db,e),o=d.IO.apply(void 0,[s].concat((0,a.Z)(t))),n.next=4,(0,d.PL)(o);case 4:i=n.sent,c=[],i.forEach((function(e){c.push((0,r.Z)({id:e.id},e.data()))})),f(c);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),{data:m,setData:f}}},1776:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(9439),a=t(2791),s=t(4453);function o(e,n){var t=(0,a.useState)(""),o=(0,r.Z)(t,2),i=o[0],c=o[1],l=(0,a.useState)(0),d=(0,r.Z)(l,2),u=d[0],h=d[1];return{image:i,setImage:c,progressPercent:u,setProgressPercent:h,handleSelectImage:function(n){var t=n.target.files[0];t&&(e("image_name",t.name),function(e){var n=(0,s.cF)(),t=(0,s.iH)(n,"images/"+e.name),r=(0,s.B0)(t,e);r.on("state_changed",(function(e){var n=e.bytesTransferred/e.totalBytes*100;switch(h(n),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break;default:console.log("Nothing at all")}}),(function(e){console.log(e)}),(function(){(0,s.Jt)(r.snapshot.ref).then((function(e){c(e)}))}))}(t))},handleDeleteImage:function(){var e=(0,s.cF)(),t=(0,s.iH)(e,"images/"+n("image_name"));(0,s.oq)(t).then((function(){c(""),h(0)})).catch((function(e){}))}}}},6801:function(e,n,t){t(2791);var r=t(184);n.Z=function(e){var n=e.title,t=void 0===n?"":n,a=e.desc,s=void 0===a?"":a;return(0,r.jsxs)("div",{className:"mb-10",children:[(0,r.jsx)("h1",{className:"font-bold text-2xl mb-3",children:t}),(0,r.jsx)("p",{className:"text-base",children:s})]})}},7714:function(e,n,t){t.r(n);var r=t(1413),a=t(5861),s=t(9439),o=t(7757),i=t.n(o),c=t(2791),l=t(1134),d=t(3504),u=t(6871),h=t(6801),p=t(4695),m=t(1724),f=t(2033),g=t(6639),x=t(4110),v=t(8119),b=t(3585),j=t(4961),Z=t(6030),w=t(9646),k=t(9062),y=t(3141),N=t(6770),C=t.n(N),P=t(8113),S=(t(6009),t(3471)),D=t(4810),E=t(5990),I=t(1776),_=t(577),U=t(333),L=t.n(U),z=t(4569),T=t.n(z),F=t(184);N.Quill.register("modules/imageUploader",P.Z);var O=m.Ry({title:m.Z_().required("Please enter post title").min(10,"Please enter the minimum 10 character"),categoryID:m.Z_().required("Please choose a category for the post"),image:m.Z_().required("Please select a present image for post"),status:m.Rx(),slug:m.Z_(),hot:m.O7()});n.default=function(){var e=(0,d.lr)(),n=(0,s.Z)(e,1)[0].get("id"),t=(0,u.s0)(),o=c.useState({}),m=(0,s.Z)(o,2),N=m[0],P=m[1],U=c.useState(""),z=(0,s.Z)(U,2),J=z[0],M=z[1],R=c.useState(),q=(0,s.Z)(R,2),A=q[0],B=q[1],H=(0,l.cI)({mode:"onSubmit",resolver:(0,p.X)(O)}),V=H.control,Q=H.watch,W=H.setValue,G=H.handleSubmit,X=H.getValues,K=H.reset,Y=H.formState,$=Y.errors,ee=Y.isSubmitting,ne=Y.isDirty,te=(0,I.Z)(W,X),re=te.image,ae=te.setImage,se=te.progressPercent,oe=(te.setProgressPercent,te.handleSelectImage),ie=te.handleDeleteImage,ce=Q("status"),le=Q("hot"),de=(0,D.Z)("category",[(0,k.ar)("status","==",1)]).data;c.useEffect((function(){var e=Object.values($);e.length>0&&_.Am.error(e[0].message,{pauseOnHover:!1,style:{backgroundColor:b.rS.toastErrorColor}})}),[$]),c.useEffect((function(){function e(){return(e=(0,a.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return t=(0,k.JU)(y.db,"posts",n),e.next=5,(0,k.QT)(t);case 5:r=e.sent,P(r.data()),ae(r.data().image),M(r.data().content),K(r.data());case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=(0,a.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,k.JU)(y.db,"category",N.categoryID),e.next=3,(0,k.QT)(n);case 3:t=e.sent,B(t.data().name);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[n]);var ue=function(){var e=(0,a.Z)(i().mark((function e(a){var s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=(0,k.JU)(y.db,"posts",n),e.next=3,(0,k.r7)(s,(0,r.Z)((0,r.Z)({},a),{},{slug:L()(a.slug||a.title,{lower:!0}),content:J}));case 3:_.Am.success("Update post successfully!",{pauseOnHover:!1,style:{backgroundColor:b.rS.toastSuccessColor}}),t("/manage/post");case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),he=(0,c.useMemo)((function(){return{toolbar:[["bold","italic","underline","strike"],["blockquote"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{header:[1,2,3,4,5,6,!1]}],["link","image"]],imageUploader:{upload:function(){var e=(0,a.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("image",n),e.next=4,T()({method:"post",url:"https://api.imgbb.com/1/upload?key=f8e815dfbd5fbbe3997abbd65dfa80cf",data:t,headers:{"Content-Type":"multipart/form-data"}});case 4:return r=e.sent,e.abrupt("return",r.data.data.url);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}}),[]);return n?(0,F.jsxs)("div",{children:[(0,F.jsx)(h.Z,{title:"Update Post",desc:"Update new post"}),(0,F.jsxs)("form",{onSubmit:G(ue),children:[(0,F.jsxs)("div",{className:"grid grid-cols-2 gap-x-10 mb-10",children:[(0,F.jsxs)(f.Z,{children:[(0,F.jsx)(g.Z,{children:"Title"}),(0,F.jsx)(x.Z,{control:V,placeholder:"Enter your title",name:"title"})]}),(0,F.jsxs)(f.Z,{children:[(0,F.jsx)(g.Z,{children:"Slug"}),(0,F.jsx)(x.Z,{control:V,placeholder:"Enter your slug",name:"slug"})]})]}),(0,F.jsxs)("div",{className:"grid grid-cols-2 gap-x-10 mb-10",children:[(0,F.jsxs)(f.Z,{children:[(0,F.jsx)(g.Z,{children:"Status"}),(0,F.jsxs)("div",{className:"flex items-center gap-x-5 mt-3",children:[(0,F.jsx)(v.Z,{name:"status",control:V,checked:Number(ce)===b.cf.APPROVED,value:b.cf.APPROVED,children:"Approved"}),(0,F.jsx)(v.Z,{name:"status",control:V,checked:Number(ce)===b.cf.PENDING,value:b.cf.PENDING,children:"Pending"}),(0,F.jsx)(v.Z,{name:"status",control:V,checked:Number(ce)===b.cf.REJECT,value:b.cf.REJECT,children:"Reject"})]})]}),(0,F.jsxs)(f.Z,{children:[(0,F.jsx)(g.Z,{className:!0,children:"Feature post"}),(0,F.jsx)("div",{className:"mt-3",children:(0,F.jsx)(j.Z,{on:le,onClick:function(){return W("hot",!le)}})})]})]}),(0,F.jsx)("div",{className:"mb-10",children:(0,F.jsxs)(f.Z,{children:[(0,F.jsx)(g.Z,{children:"Content"}),(0,F.jsx)("div",{className:"w-full h-[500px] mt-3 pb-10 entry-content",children:(0,F.jsx)(C(),{modules:he,theme:"snow",className:"h-full",value:J,onChange:M})})]})}),(0,F.jsxs)("div",{className:"grid grid-cols-2 gap-x-10 mb-10",children:[(0,F.jsxs)(f.Z,{children:[(0,F.jsx)(g.Z,{children:"Category"}),(0,F.jsx)(S.Z,{placeholder:A||"Please select a category",children:de.length>0&&de.map((function(e){return(0,F.jsx)(E.Z,{onClick:function(){B(e.name),W("categoryID",e.id)},children:e.name},e.id)}))})]}),(0,F.jsxs)(f.Z,{children:[(0,F.jsx)(g.Z,{children:"Image"}),(0,F.jsx)(Z.Z,{name:"image",className:"mt-3 h-[250px]",image:re,progress:se,onChange:oe,handleDeleteImage:ie})]})]}),(0,F.jsx)("div",{className:"text-center",children:(0,F.jsx)(w.Z,{type:"submit",className:"mx-auto ".concat(!ne&&!J&&"pointer-events-none opacity-50"),loading:ee,children:"Update post"})})]})]}):null}}}]);
//# sourceMappingURL=714.1587257a.chunk.js.map