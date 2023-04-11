"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[6895],{66895:function(e,n,t){t.r(n);var i=t(29439),a=t(1413),r=t(72791),o=t(57689),c=t(11087),l=t(75952),s=t(78687),u=t(11135),d=t(25787),f=t(61889),h=t(81207),m=t(23814),x=t(14917),p=t(64554),b=t(56087),v=t(74794),C=t(50276),T=t(38442),Z=t(75578),E=t(87995),j=t(9859),_=t(81551),g=t(27454),I=t(47974),S=t(80184),y=(0,Z.Z)(r.lazy((function(){return t.e(9968).then(t.bind(t,39968))}))),F=(0,Z.Z)(r.lazy((function(){return t.e(7494).then(t.bind(t,47494))}))),w=(0,Z.Z)(r.lazy((function(){return t.e(4738).then(t.bind(t,84738))}))),N=(0,Z.Z)(r.lazy((function(){return t.e(9918).then(t.bind(t,79918))}))),A=(0,Z.Z)(r.lazy((function(){return t.e(5702).then(t.bind(t,25702))}))),P=(0,Z.Z)(r.lazy((function(){return t.e(2512).then(t.bind(t,32512))}))),M=(0,Z.Z)(r.lazy((function(){return Promise.all([t.e(1520),t.e(6503),t.e(51)]).then(t.bind(t,51))})));n.default=(0,d.Z)((function(e){return(0,u.Z)((0,a.Z)((0,a.Z)({pageContainer:{height:"100%"}},m.qg),{},{capitalize:{textTransform:"capitalize"}},m.Bz))}))((function(e){var n=e.classes,t=(0,_.TL)(),a=(0,o.s0)(),u=(0,o.UO)(),d=(0,s.v9)(E.N5),m=(0,s.v9)(j.HQ),Z=(0,s.v9)(j.G6),k=(0,s.v9)(E.gw),O=(0,r.useState)(!1),U=(0,i.Z)(O,2),B=U[0],R=U[1],L=(0,r.useState)(!1),z=(0,i.Z)(L,2),G=z[0],W=z[1],D=u.bucketName||"",K=u[0]||"";K=K||"summary";var H=(0,r.useState)(K),Q=(0,i.Z)(H,2),Y=Q[0],V=Q[1],q=(0,T.F)(D,b.o3),J=(0,T.F)(D,b.B);(0,r.useEffect)((function(){V(K)}),[K]),(0,r.useEffect)((function(){B||(t((0,j.d5)(!0)),R(!0))}),[B,t,R]),(0,r.useEffect)((function(){m&&h.Z.invoke("GET","/api/v1/buckets/".concat(D)).then((function(e){t((0,j.d5)(!1)),t((0,j.f4)(e))})).catch((function(e){t((0,j.d5)(!1)),t((0,E.Ih)(e))}))}),[D,m,t]);var X="/buckets/".concat(D),$={events:"/admin/events",replication:"/admin/replication",lifecycle:"/admin/lifecycle",access:"/admin/access",prefix:"/admin/prefix"},ee=function(e){var n=$[e];return n=n?"".concat(X).concat(n):"".concat(X).concat("/admin/summary")};return(0,S.jsxs)(r.Fragment,{children:[G&&(0,S.jsx)(y,{deleteOpen:G,selectedBucket:D,closeDeleteModalAndRefresh:function(e){!function(e){W(!1),e&&a("/buckets")}(e)}}),(0,S.jsx)(I.Z,{label:(0,S.jsx)(l.hbI,{label:"Buckets",onClick:function(){return a("/buckets")}}),actions:(0,S.jsx)(g.Z,{tooltip:J?"Browse Bucket":(0,b.MK)(b.D[b.EI.BUCKET_VIEWER],"browsing this bucket"),children:(0,S.jsx)(l.zxk,{id:"switch-browse-view","aria-label":"Browse Bucket",onClick:function(){a("/browser/".concat(D))},icon:(0,S.jsx)(l.ROc,{style:{width:20,height:20,marginTop:-3}}),style:{padding:"0 10px"},disabled:!J})})}),(0,S.jsxs)(v.Z,{className:n.pageContainer,children:[(0,S.jsx)(f.ZP,{item:!0,xs:12,children:(0,S.jsx)(x.Z,{icon:(0,S.jsx)(r.Fragment,{children:(0,S.jsx)(l.wNb,{width:40})}),title:D,subTitle:(0,S.jsxs)(T.s,{scopes:[b.Ft.S3_GET_BUCKET_POLICY,b.Ft.S3_GET_ACTIONS],resource:D,children:[(0,S.jsx)("span",{style:{fontSize:15},children:"Access: "}),(0,S.jsx)("span",{className:n.capitalize,style:{fontWeight:600,fontSize:15},children:null===Z||void 0===Z?void 0:Z.access.toLowerCase()})]}),actions:(0,S.jsxs)(r.Fragment,{children:[(0,S.jsx)(T.s,{scopes:b.o3,resource:D,errorProps:{disabled:!0},children:(0,S.jsx)(g.Z,{tooltip:q?"":(0,b.MK)([b.Ft.S3_DELETE_BUCKET,b.Ft.S3_FORCE_DELETE_BUCKET],"deleting this bucket"),children:(0,S.jsx)(l.zxk,{id:"delete-bucket-button",onClick:function(){W(!0)},label:"Delete Bucket",icon:(0,S.jsx)(l.XHJ,{}),variant:"secondary",disabled:!q})})}),(0,S.jsx)(l.zxk,{id:"refresh-bucket-info",onClick:function(){t((0,j.d5)(!0))},label:"Refresh",icon:(0,S.jsx)(l.DuK,{})})]})})}),(0,S.jsx)(p.Z,{sx:{border:"1px solid #eaeaea"},children:(0,S.jsxs)(C.Z,{selectedTab:Y,isRouteTabs:!0,routes:(0,S.jsx)("div",{style:{padding:"2rem"},children:(0,S.jsxs)(o.Z5,{children:[(0,S.jsx)(o.AW,{path:"summary",element:(0,S.jsx)(N,{})}),(0,S.jsx)(o.AW,{path:"events",element:(0,S.jsx)(A,{})}),d&&(0,S.jsx)(o.AW,{path:"replication",element:(0,S.jsx)(P,{})}),d&&(0,S.jsx)(o.AW,{path:"lifecycle",element:(0,S.jsx)(M,{})}),(0,S.jsx)(o.AW,{path:"access",element:(0,S.jsx)(w,{})}),(0,S.jsx)(o.AW,{path:"prefix",element:(0,S.jsx)(F,{})}),(0,S.jsx)(o.AW,{path:"*",element:(0,S.jsx)(o.Fg,{to:"/buckets/".concat(D,"/admin/summary")})})]})}),children:[{tabConfig:{label:"Summary",value:"summary",component:c.rU,to:ee("summary")}},{tabConfig:{label:"Events",value:"events",component:c.rU,disabled:!(0,T.F)(D,[b.Ft.S3_GET_BUCKET_NOTIFICATIONS,b.Ft.S3_PUT_BUCKET_NOTIFICATIONS,b.Ft.S3_GET_ACTIONS,b.Ft.S3_PUT_ACTIONS]),to:ee("events")}},{tabConfig:{label:"Replication",value:"replication",component:c.rU,disabled:!d||k.enabled&&k.curSite||!(0,T.F)(D,[b.Ft.S3_GET_REPLICATION_CONFIGURATION,b.Ft.S3_PUT_REPLICATION_CONFIGURATION,b.Ft.S3_GET_ACTIONS,b.Ft.S3_PUT_ACTIONS]),to:ee("replication")}},{tabConfig:{label:"Lifecycle",value:"lifecycle",component:c.rU,disabled:!d||!(0,T.F)(D,[b.Ft.S3_GET_LIFECYCLE_CONFIGURATION,b.Ft.S3_PUT_LIFECYCLE_CONFIGURATION,b.Ft.S3_GET_ACTIONS,b.Ft.S3_PUT_ACTIONS]),to:ee("lifecycle")}},{tabConfig:{label:"Access",value:"access",component:c.rU,disabled:!(0,T.F)(D,[b.Ft.ADMIN_GET_POLICY,b.Ft.ADMIN_LIST_USER_POLICIES,b.Ft.ADMIN_LIST_USERS]),to:ee("access")}},{tabConfig:{label:"Anonymous",value:"prefix",component:c.rU,disabled:!(0,T.F)(D,[b.Ft.S3_GET_BUCKET_POLICY,b.Ft.S3_GET_ACTIONS]),to:ee("prefix")}}]})})]})]})}))},75578:function(e,n,t){var i=t(1413),a=t(72791),r=t(80184);n.Z=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(t){return(0,r.jsx)(a.Suspense,{fallback:n,children:(0,r.jsx)(e,(0,i.Z)({},t))})}}},14917:function(e,n,t){t(72791);var i=t(61889),a=t(72455),r=t(80184),o=(0,a.Z)((function(e){return{headerBarIcon:{marginRight:".7rem",color:e.palette.primary.main,"& .min-icon":{width:44,height:44},"@media (max-width: 600px)":{display:"none"}},headerBarSubheader:{color:"grey","@media (max-width: 900px)":{maxWidth:200}},stContainer:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:8,borderBottom:"1px solid #EAEAEA","@media (max-width: 600px)":{flexFlow:"column"}},titleColumn:{height:"auto",justifyContent:"center",display:"flex",flexFlow:"column",alignItems:"flex-start","& h1":{fontSize:19}},leftItems:{display:"flex",alignItems:"center","@media (max-width: 600px)":{flexFlow:"column",width:"100%"}},rightItems:{display:"flex",alignItems:"center","& button":{marginLeft:8},"@media (max-width: 600px)":{width:"100%"}}}}));n.Z=function(e){var n=e.icon,t=e.title,a=e.subTitle,c=e.actions,l=e.className,s=o();return(0,r.jsx)(i.ZP,{container:!0,children:(0,r.jsxs)(i.ZP,{item:!0,xs:12,className:"".concat(s.stContainer," ").concat(l||""),children:[(0,r.jsxs)("div",{className:s.leftItems,children:[n?(0,r.jsx)("div",{className:s.headerBarIcon,children:n}):null,(0,r.jsxs)("div",{className:s.titleColumn,children:[(0,r.jsx)("h1",{style:{margin:0},children:t}),(0,r.jsx)("span",{className:s.headerBarSubheader,children:a})]})]}),(0,r.jsx)("div",{className:s.rightItems,children:c})]})})}},50276:function(e,n,t){var i=t(1413),a=t(29439),r=t(72791),o=t(64554),c=t(43896),l=t(83449),s=t(47283),u=t(82851),d=t(25787),f=t(13967),h=t(11135),m=t(95193),x=t(57689),p=t(80184),b={minHeight:60};n.Z=(0,d.Z)((function(e){return(0,h.Z)({tabsContainer:{display:"flex",height:"100%",width:"100%"},tabsHeaderContainer:{width:"300px",background:"#F8F8F8",borderRight:"1px solid #EAEAEA","& .MuiTabs-root":{"& .MuiTabs-indicator":{display:"none"},"& .MuiTab-root":{display:"flex",flexFlow:"row",alignItems:"center",justifyContent:"flex-start",borderBottom:"1px solid #EAEAEA","& .MuiSvgIcon-root":{marginRight:8,marginBottom:0},"&.Mui-selected":{background:"#E5E5E5",fontWeight:600}},"&. MuiTabs-scroller":{display:"none"}}},tabContentContainer:{width:"100%","& .MuiTabPanel-root":{height:"100%"}},tabPanel:{height:"100%"},"@media (max-width: 900px)":{tabsContainer:{flexFlow:"column",flexDirection:"column"},tabsHeaderContainer:{width:"100%",borderBottom:" 1px solid #EAEAEA","& .MuiTabs-root .MuiTabs-scroller .MuiButtonBase-root":{borderBottom:" 0px"}}}})}))((function(e){var n=e.children,t=e.classes,d=e.selectedTab,h=void 0===d?"0":d,v=e.routes,C=e.isRouteTabs,T=(0,f.Z)(),Z=(0,x.TH)().pathname,E=void 0===Z?"":Z,j=(0,m.Z)(T.breakpoints.down("md")),_=(0,r.useState)(h),g=(0,a.Z)(_,2),I=g[0],S=g[1],y=[],F=[];if((0,r.useEffect)((function(){if(C){var e=n.find((function(e){return e.tabConfig.to===E}));e&&S(e.tabConfig.value)}}),[C,n,E]),!n)return null;n.forEach((function(e){y.push(e.tabConfig),F.push(e.content)}));return(0,p.jsx)(l.ZP,{value:"".concat(I),children:(0,p.jsxs)(o.Z,{className:t.tabsContainer,children:[(0,p.jsx)(o.Z,{className:t.tabsHeaderContainer,children:(0,p.jsx)(s.Z,{onChange:function(e,n){S(n)},orientation:j?"horizontal":"vertical",variant:j?"scrollable":"standard",scrollButtons:"auto",className:t.tabList,children:y.map((function(e,n){return e?(0,p.jsx)(c.Z,(0,i.Z)((0,i.Z)({className:t.tabHeader,value:"".concat(n),style:b},e),{},{disableRipple:!0,disableTouchRipple:!0,focusRipple:!0}),"v-tab-".concat(n)):null}))})}),(0,p.jsxs)(o.Z,{className:t.tabContentContainer,children:[C?null:F.map((function(e,n){return(0,p.jsx)(u.Z,{classes:(0,i.Z)({},t.tabPanel),value:"".concat(n),children:e||null},"v-tab-p-".concat(n))})),C?(0,p.jsx)("div",{className:t.tabPanel,children:v}):null]})]})})}))},83449:function(e,n,t){t.d(n,{ZP:function(){return c},_i:function(){return l},pQ:function(){return u},uU:function(){return s}});var i=t(29439),a=t(72791),r=t(80184),o=a.createContext(null);function c(e){var n=e.children,t=e.value,c=function(){var e=a.useState(null),n=(0,i.Z)(e,2),t=n[0],r=n[1];return a.useEffect((function(){r("mui-p-".concat(Math.round(1e5*Math.random())))}),[]),t}(),l=a.useMemo((function(){return{idPrefix:c,value:t}}),[c,t]);return(0,r.jsx)(o.Provider,{value:l,children:n})}function l(){return a.useContext(o)}function s(e,n){return null===e.idPrefix?null:"".concat(e.idPrefix,"-P-").concat(n)}function u(e,n){return null===e.idPrefix?null:"".concat(e.idPrefix,"-T-").concat(n)}},47283:function(e,n,t){var i=t(87462),a=t(63366),r=t(72791),o=t(18073),c=t(83449),l=t(80184),s=["children"],u=r.forwardRef((function(e,n){var t=e.children,u=(0,a.Z)(e,s),d=(0,c._i)();if(null===d)throw new TypeError("No TabContext provided");var f=r.Children.map(t,(function(e){return r.isValidElement(e)?r.cloneElement(e,{"aria-controls":(0,c.uU)(d,e.props.value),id:(0,c.pQ)(d,e.props.value)}):null}));return(0,l.jsx)(o.Z,(0,i.Z)({},u,{ref:n,value:d.value,children:f}))}));n.Z=u},82851:function(e,n,t){t.d(n,{Z:function(){return p}});var i=t(87462),a=t(63366),r=t(72791),o=t(28182),c=t(66934),l=t(31402),s=t(94419),u=t(21217);function d(e){return(0,u.Z)("MuiTabPanel",e)}(0,t(75878).Z)("MuiTabPanel",["root"]);var f=t(83449),h=t(80184),m=["children","className","value"],x=(0,c.ZP)("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){return{padding:e.theme.spacing(3)}})),p=r.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiTabPanel"}),r=t.children,c=t.className,u=t.value,p=(0,a.Z)(t,m),b=(0,i.Z)({},t),v=function(e){var n=e.classes;return(0,s.Z)({root:["root"]},d,n)}(b),C=(0,f._i)();if(null===C)throw new TypeError("No TabContext provided");var T=(0,f.uU)(C,u),Z=(0,f.pQ)(C,u);return(0,h.jsx)(x,(0,i.Z)({"aria-labelledby":Z,className:(0,o.Z)(v.root,c),hidden:u!==C.value,id:T,ref:n,role:"tabpanel",ownerState:b},p,{children:u===C.value&&r}))}))},95193:function(e,n,t){var i;t.d(n,{Z:function(){return f}});var a=t(29439),r=t(72791),o=t(69120),c=t(33073),l=t(40162);function s(e,n,t,i,o){var c=r.useState((function(){return o&&t?t(e).matches:i?i(e).matches:n})),s=(0,a.Z)(c,2),u=s[0],d=s[1];return(0,l.Z)((function(){var n=!0;if(t){var i=t(e),a=function(){n&&d(i.matches)};return a(),i.addListener(a),function(){n=!1,i.removeListener(a)}}}),[e,t]),u}var u=(i||(i=t.t(r,2))).useSyncExternalStore;function d(e,n,t,i,o){var c=r.useCallback((function(){return n}),[n]),l=r.useMemo((function(){if(o&&t)return function(){return t(e).matches};if(null!==i){var n=i(e).matches;return function(){return n}}return c}),[c,e,i,o,t]),s=r.useMemo((function(){if(null===t)return[c,function(){return function(){}}];var n=t(e);return[function(){return n.matches},function(e){return n.addListener(e),function(){n.removeListener(e)}}]}),[c,t,e]),d=(0,a.Z)(s,2),f=d[0],h=d[1];return u(h,f,l)}function f(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(0,o.Z)(),i="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,a=(0,c.Z)({name:"MuiUseMediaQuery",props:n,theme:t}),r=a.defaultMatches,l=void 0!==r&&r,f=a.matchMedia,h=void 0===f?i?window.matchMedia:null:f,m=a.ssrMatchMedia,x=void 0===m?null:m,p=a.noSsr,b=void 0!==p&&p;var v="function"===typeof e?e(t):e;return v=v.replace(/^@media( ?)/m,""),(void 0!==u?d:s)(v,l,h,x,b)}}}]);
//# sourceMappingURL=6895.143165e2.chunk.js.map