"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9134],{64163:function(e,n,t){var i=t(1413),l=t(72791),s=t(45953),c=t(11135),a=t(25787),o=t(23814),r=t(80184);n.Z=(0,a.Z)((function(e){return(0,c.Z)((0,i.Z)({},o.xx))}))((function(e){var n=e.classes,t=e.label,i=void 0===t?"":t,c=e.content,a=e.multiLine,o=void 0!==a&&a,u=e.actionButton;return(0,r.jsx)(l.Fragment,{children:(0,r.jsxs)(s.ZP,{className:n.prefinedContainer,children:[""!==i&&(0,r.jsx)(s.ZP,{item:!0,xs:12,className:n.predefinedTitle,children:i}),(0,r.jsxs)(s.ZP,{item:!0,xs:12,className:"".concat(n.predefinedList," ").concat(u?n.includesActionButton:""),children:[(0,r.jsx)(s.ZP,{item:!0,xs:12,className:o?n.innerContentMultiline:n.innerContent,children:c}),u&&(0,r.jsx)("div",{className:n.overlayShareOption,children:u})]})]})})}))},56028:function(e,n,t){var i=t(29439),l=t(1413),s=t(72791),c=t(92177),a=t(13811),o=t(11647),r=t(58195),u=t(40464),d=t(8440),f=t(11135),m=t(25787),x=t(23814),Z=t(25469),h=t(29823),p=t(28057),v=t(87995),j=t(80184);n.Z=(0,m.Z)((function(e){return(0,f.Z)((0,l.Z)((0,l.Z)({},x.Qw),{},{content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},x.sN))}))((function(e){var n=e.onClose,t=e.modalOpen,f=e.title,m=e.children,x=e.classes,g=e.wideLimit,b=void 0===g||g,P=e.noContentPadding,y=e.titleIcon,k=void 0===y?null:y,N=(0,Z.TL)(),C=(0,s.useState)(!1),B=(0,i.Z)(C,2),S=B[0],L=B[1],T=(0,c.v9)((function(e){return e.system.modalSnackBar}));(0,s.useEffect)((function(){N((0,v.MK)(""))}),[N]),(0,s.useEffect)((function(){if(T){if(""===T.message)return void L(!1);"error"!==T.type&&L(!0)}}),[T]);var E=b?{classes:{paper:x.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},z="";return T&&(z=T.detailedErrorMsg,(""===T.detailedErrorMsg||T.detailedErrorMsg.length<5)&&(z=T.message)),(0,j.jsxs)(r.Z,(0,l.Z)((0,l.Z)({open:t,classes:x},E),{},{scroll:"paper",onClose:function(e,t){"backdropClick"!==t&&n()},className:x.root,children:[(0,j.jsxs)(u.Z,{className:x.title,children:[(0,j.jsxs)("div",{className:x.titleText,children:[k," ",f]}),(0,j.jsx)("div",{className:x.closeContainer,children:(0,j.jsx)(a.Z,{"aria-label":"close",id:"close",className:x.closeButton,onClick:n,disableRipple:!0,size:"small",children:(0,j.jsx)(h.Z,{})})})]}),(0,j.jsx)(p.Z,{isModal:!0}),(0,j.jsx)(o.Z,{open:S,className:x.snackBarModal,onClose:function(){L(!1),N((0,v.MK)(""))},message:z,ContentProps:{className:"".concat(x.snackBar," ").concat(T&&"error"===T.type?x.errorSnackBar:"")},autoHideDuration:T&&"error"===T.type?1e4:5e3}),(0,j.jsx)(d.Z,{className:P?"":x.content,children:m})]}))}))},58400:function(e,n,t){var i=t(93433),l=t(29439),s=t(1413),c=t(72791),a=t(11135),o=t(25787),r=t(89594),u=t(45953),d=t(21639),f=t(23814),m=t(81207),x=t(92983),Z=t(59114),h=t(87995),p=t(25469),v=t(74616),j=t(92177),g=t(80184);n.Z=(0,o.Z)((function(e){return(0,a.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)({noFound:{textAlign:"center",padding:"10px 0"},searchBox:{flex:1},fieldLabel:{fontWeight:400,width:160,marginRight:10},tableBlock:(0,s.Z)({},f.VX.tableBlock),filterBox:{display:"flex",marginBottom:15,alignItems:"center","& span":{fontSize:14}}},f.qg),f.VX),f.OR),f.jY))}))((function(e){var n=e.classes,t=(e.selectedPolicy,(0,p.TL)()),s=(0,c.useState)([]),a=(0,l.Z)(s,2),o=a[0],f=a[1],b=(0,c.useState)(!1),P=(0,l.Z)(b,2),y=P[0],k=P[1],N=(0,c.useState)(""),C=(0,l.Z)(N,2),B=C[0],S=C[1],L=(0,j.v9)((function(e){return e.createUser.selectedPolicies})),T=(0,c.useCallback)((function(){k(!0),m.Z.invoke("GET","/api/v1/policies?limit=1000").then((function(e){var n=null===e.policies?[]:e.policies;k(!1),f(n.sort(d.g4))})).catch((function(e){k(!1),t((0,h.zb)(e))}))}),[t]);(0,c.useEffect)((function(){k(!0)}),[]),(0,c.useEffect)((function(){y&&T()}),[y,T]);var E=o.filter((function(e){return e.name.includes(B)}));return(0,g.jsx)(u.ZP,{container:!0,children:(0,g.jsxs)(u.ZP,{item:!0,xs:12,children:[y&&(0,g.jsx)(r.Z,{}),o.length>0?(0,g.jsxs)(c.Fragment,{children:[(0,g.jsxs)(u.ZP,{item:!0,xs:12,className:n.filterBox,children:[(0,g.jsx)("span",{className:n.fieldLabel,children:"Assign Policies"}),(0,g.jsx)("div",{className:n.searchBox,children:(0,g.jsx)(Z.Z,{placeholder:"Start typing to search for a Policy",onChange:function(e){S(e)},value:B})})]}),(0,g.jsx)(u.ZP,{item:!0,xs:12,className:n.tableBlock,style:{paddingBottom:16},children:(0,g.jsx)(x.Z,{columns:[{label:"Policy",elementKey:"name"}],onSelect:function(e){var n=e.target,l=n.value,s=n.checked,c=(0,i.Z)(L);s?c.push(l):c=c.filter((function(e){return e!==l})),c=c.filter((function(e){return""!==e})),t((0,v.ue)(c))},selectedItems:L,isLoading:y,records:E,entityName:"Policies",idField:"name",customPaperHeight:n.multiSelectTable})})]}):(0,g.jsx)("div",{className:n.noFound,children:"No Policies Available"})]})})}))},39134:function(e,n,t){t.r(n);var i=t(29439),l=t(1413),s=t(72791),c=t(26181),a=t.n(c),o=t(75952),r=t(11135),u=t(25787),d=t(89594),f=t(45953),m=t(23814),x=t(56028),Z=t(81207),h=t(58400),p=t(64163),v=t(45248),j=t(87995),g=t(25469),b=t(92177),P=t(74616),y=t(80184);n.default=(0,u.Z)((function(e){return(0,r.Z)((0,l.Z)((0,l.Z)((0,l.Z)({},m.oO),m.bK),{},{tableBlock:(0,l.Z)((0,l.Z)({},m.VX.tableBlock),{},{marginTop:15}),buttonContainer:{display:"flex",justifyContent:"flex-end",marginTop:".9rem","& button":{marginLeft:8}}}))}))((function(e){var n=e.classes,t=e.closeModalAndRefresh,l=e.selectedUser,c=e.selectedGroups,r=e.open,u=(0,g.TL)(),m=(0,s.useState)(!1),k=(0,i.Z)(m,2),N=k[0],C=k[1],B=(0,s.useState)([]),S=(0,i.Z)(B,2),L=S[0],T=S[1],E=(0,s.useState)([]),z=(0,i.Z)(E,2),M=z[0],w=z[1],A=(0,b.v9)((function(e){return e.createUser.selectedPolicies}));(0,s.useEffect)((function(){if(r){if(1===(null===c||void 0===c?void 0:c.length))return void(1===(null===c||void 0===c?void 0:c.length)&&Z.Z.invoke("GET","/api/v1/group/".concat((0,v.LL)(c[0]))).then((function(e){var n=a()(e,"policy","");T(n.split(",")),w(n.split(",")),u((0,P.ue)(n.split(",")))})).catch((function(e){u((0,j.zb)(e)),C(!1)})));var e=a()(l,"policy",[]);T(e),w(e),u((0,P.ue)(e))}}),[r,null===c||void 0===c?void 0:c.length,l]);var F=a()(l,"accessKey","");return(0,y.jsxs)(x.Z,{onClose:function(){t()},modalOpen:r,title:"Set Policies",children:[(0,y.jsxs)(f.ZP,{container:!0,children:[(1===(null===c||void 0===c?void 0:c.length)||null!=l)&&(0,y.jsxs)(s.Fragment,{children:[(0,y.jsx)(f.ZP,{item:!0,xs:12,children:(0,y.jsx)(p.Z,{label:"Selected ".concat(null!==c?"Group":"User"),content:null!==c?c[0]:F})}),(0,y.jsx)(f.ZP,{item:!0,xs:12,children:(0,y.jsx)(p.Z,{label:"Current Policy",content:L.join(", ")})})]}),c&&(null===c||void 0===c?void 0:c.length)>1&&(0,y.jsx)(p.Z,{label:"Selected Groups",content:c.join(", ")}),(0,y.jsx)(f.ZP,{item:!0,xs:12,children:(0,y.jsx)("div",{className:n.tableBlock,children:(0,y.jsx)(h.Z,{selectedPolicy:M})})})]}),(0,y.jsxs)(f.ZP,{item:!0,xs:12,className:n.buttonContainer,children:[(0,y.jsx)(o.zx,{id:"reset",type:"button",variant:"regular",className:n.spacerRight,onClick:function(){w(L),u((0,P.ue)(L))},label:"Reset"}),(0,y.jsx)(o.zx,{id:"save",type:"button",variant:"callAction",color:"primary",disabled:N,onClick:function(){var e=null,n=null;null!==c?n=c:null!==l&&(e=[l.accessKey]||0),C(!0),Z.Z.invoke("PUT","/api/v1/set-policy-multi",{name:A,groups:n,users:e}).then((function(){C(!1),t()})).catch((function(e){C(!1),u((0,j.zb)(e))}))},label:"Save"})]}),N&&(0,y.jsx)(f.ZP,{item:!0,xs:12,children:(0,y.jsx)(d.Z,{})})]})}))}}]);
//# sourceMappingURL=9134.1bef9925.chunk.js.map