"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9635],{75578:function(e,n,t){var r=t(1413),i=t(72791),o=t(80184);n.Z=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(t){return(0,o.jsx)(i.Suspense,{fallback:n,children:(0,o.jsx)(e,(0,r.Z)({},t))})}}},47986:function(e,n,t){t(72791);var r=t(61889),i=t(64554),o=t(75952),s=t(80184);n.Z=function(e){var n=e.iconComponent,t=e.entity;return(0,s.jsx)(r.ZP,{container:!0,alignItems:"center",children:(0,s.jsx)(r.ZP,{item:!0,xs:12,children:(0,s.jsx)(o.KfX,{title:"".concat(t," not available"),iconComponent:n,help:(0,s.jsxs)(i.Z,{sx:{fontSize:"14px",display:"flex",border:"none",flexFlow:{xs:"column",md:"row"},"& a":{color:function(e){return e.colors.link},textDecoration:"underline"}},children:[(0,s.jsx)("div",{children:"This feature is not available for a single-disk setup."}),(0,s.jsxs)("div",{children:["Please deploy a server in"," ",(0,s.jsx)("a",{href:"https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html?ref=con",target:"_blank",rel:"noopener",children:"Distributed Mode"})," ","to use this feature."]})]})})})})}},89635:function(e,n,t){t.r(n);var r=t(29439),i=t(1413),o=t(72791),s=t(26181),l=t.n(s),a=t(78687),c=t(11135),u=t(25787),d=t(64554),x=t(40986),m=t(75952),f=t(61889),h=t(23814),j=t(81207),p=t(92983),g=t(81806),y=t(59114),b=t(75578),v=t(47986),F=t(56087),Z=t(38442),T=t(34345),C=t(87995),I=t(57689),O=t(81551),S=t(27454),k=t(47974),P=t(80184),w=(0,b.Z)(o.lazy((function(){return t.e(4414).then(t.bind(t,34414))})));n.default=(0,u.Z)((function(e){return(0,c.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},h.OR),h.qg),h.Je),h.fc),h.Bz),{},{customConfigurationPage:{minHeight:400},actionsTray:(0,i.Z)({},h.OR.actionsTray),searchField:(0,i.Z)((0,i.Z)({},h.qg.searchField),{},{marginRight:"auto",maxWidth:380}),rightActionButtons:{display:"flex","& button":{whiteSpace:"nowrap"}}},h.VX))}))((function(e){var n=e.classes,t=(0,O.TL)(),i=(0,I.s0)(),s=(0,a.v9)(C.N5),c=(0,o.useState)([]),u=(0,r.Z)(c,2),h=u[0],b=u[1],N=(0,o.useState)(""),E=(0,r.Z)(N,2),A=E[0],K=E[1],M=(0,o.useState)(!0),_=(0,r.Z)(M,2),B=_[0],D=_[1],R=(0,o.useState)(!1),X=(0,r.Z)(R,2),z=X[0],L=X[1],Y=(0,o.useState)({type:"unsupported",status:!1}),q=(0,r.Z)(Y,2),G=q[0],V=q[1],H=(0,Z.F)(F.C3,[F.Ft.ADMIN_SET_TIER]);(0,o.useEffect)((function(){if(B)if(s){j.Z.invoke("GET","/api/v1/admin/tiers").then((function(e){b(e.items||[]),D(!1)})).catch((function(e){t((0,C.Ih)(e)),D(!1)}))}else D(!1)}),[B,t,s]);var U=h.filter((function(e){if(""===A)return!0;var n=l()(e,"".concat(e.type,".name"),""),t=l()(e,"type","");return n.indexOf(A)>=0||t.indexOf(A)>=0})),W=function(){i(F.gA.TIERS_ADD)};return(0,P.jsxs)(o.Fragment,{children:[z&&(0,P.jsx)(w,{open:z,tierData:G,closeModalAndRefresh:function(){L(!1)}}),(0,P.jsx)(k.Z,{label:"Tiers"}),(0,P.jsx)(m.Xgh,{children:s?(0,P.jsxs)(o.Fragment,{children:[(0,P.jsxs)(f.ZP,{item:!0,xs:12,className:n.actionsTray,children:[(0,P.jsx)(y.Z,{placeholder:"Filter",onChange:K,overrideClass:n.searchField,value:A}),(0,P.jsxs)("div",{className:n.rightActionButtons,children:[(0,P.jsx)(m.zxk,{id:"refresh-list",icon:(0,P.jsx)(m.DuK,{}),label:"Refresh List",onClick:function(){D(!0)}}),(0,P.jsx)(S.Z,{tooltip:H?"":"You require additional permissions in order to create a new Tier. Please ask your MinIO administrator to grant you "+F.Ft.ADMIN_SET_TIER+" permission in order to create a Tier.",children:(0,P.jsx)(Z.s,{scopes:[F.Ft.ADMIN_SET_TIER],resource:F.C3,errorProps:{disabled:!0},children:(0,P.jsx)(m.zxk,{id:"add-tier",icon:(0,P.jsx)(m.dtP,{}),label:"Create Tier",onClick:W,variant:"callAction"})})})]})]}),B&&(0,P.jsx)(x.Z,{}),!B&&(0,P.jsxs)(o.Fragment,{children:[h.length>0&&(0,P.jsxs)(o.Fragment,{children:[(0,P.jsx)(f.ZP,{item:!0,xs:12,className:n.tableBlock,children:(0,P.jsx)(Z.s,{scopes:[F.Ft.ADMIN_LIST_TIERS],resource:F.C3,errorProps:{disabled:!0},children:(0,P.jsx)(p.Z,{itemActions:[{type:"edit",onClick:function(e){V(e),L(!0)}}],columns:[{label:"Tier Name",elementKey:"type",renderFunction:function(e){var n=l()(e,"".concat(e.type,".name"),"");return null!==n?(0,P.jsx)("b",{children:n}):""},renderFullObject:!0},{label:"Status",elementKey:"status",renderFunction:function(e){return e?(0,P.jsxs)(f.ZP,{container:!0,sx:{display:"flex",alignItems:"center",justifyItems:"start",color:"#4CCB92",fontSize:"8px"},flexDirection:"column",display:"flex",children:[(0,P.jsx)(m.Yp9,{style:{fill:"#4CCB92",width:14,height:14}}),"ONLINE"]}):(0,P.jsxs)(f.ZP,{container:!0,sx:{display:"flex",alignItems:"center",color:"#C83B51",fontSize:"8px"},flexDirection:"column",display:"flex",children:[(0,P.jsx)(m.qwj,{style:{fill:"#C83B51",width:14,height:14}}),"OFFLINE"]})},width:50},{label:"Type",elementKey:"type",renderFunction:function(e){var n=(T.Bh.find((function(n){return n.serviceName===e}))||{}).logoXs;return e?(0,P.jsx)(d.Z,{sx:{display:"flex",alignItems:"center","& .min-icon":{width:"18px",height:"22px"}},children:n}):""},width:50},{label:"Endpoint",elementKey:"type",renderFunction:function(e){var n=l()(e,"".concat(e.type,".endpoint"),"");return null!==n?n:""},renderFullObject:!0},{label:"Bucket",elementKey:"type",renderFunction:function(e){var n=l()(e,"".concat(e.type,".bucket"),"");return null!==n?n:""},renderFullObject:!0},{label:"Prefix",elementKey:"type",renderFunction:function(e){var n=l()(e,"".concat(e.type,".prefix"),"");return null!==n?n:""},renderFullObject:!0},{label:"Region",elementKey:"type",renderFunction:function(e){var n=l()(e,"".concat(e.type,".region"),"");return null!==n?n:""},renderFullObject:!0},{label:"Usage",elementKey:"type",renderFunction:function(e){var n=l()(e,"".concat(e.type,".usage"),"");return null!==n?n:""},renderFullObject:!0},{label:"Objects",elementKey:"type",renderFunction:function(e){var n=l()(e,"".concat(e.type,".objects"),"");return null!==n?n:""},renderFullObject:!0},{label:"Versions",elementKey:"type",renderFunction:function(e){var n=l()(e,"".concat(e.type,".versions"),"");return null!==n?n:""},renderFullObject:!0}],isLoading:B,records:U,entityName:"Tiers",idField:"service_name",customPaperHeight:n.customConfigurationPage})})}),(0,P.jsx)(f.ZP,{item:!0,xs:12,sx:{marginTop:"15px"},children:(0,P.jsx)(m.KfX,{title:"Learn more about TIERS",iconComponent:(0,P.jsx)(m.y2Y,{}),help:(0,P.jsxs)(o.Fragment,{children:["Tiers are used by the MinIO Object Lifecycle Management which allows creating rules for time or date based automatic transition or expiry of objects. For object transition, MinIO automatically moves the object to a configured remote storage tier.",(0,P.jsx)("br",{}),(0,P.jsx)("br",{}),"You can learn more at our"," ",(0,P.jsx)("a",{href:"https://min.io/docs/minio/linux/administration/object-management/object-lifecycle-management.html?ref=con",target:"_blank",rel:"noopener",children:"documentation"}),"."]})})})]}),0===h.length&&(0,P.jsx)(f.ZP,{container:!0,justifyContent:"center",alignContent:"center",alignItems:"center",children:(0,P.jsx)(f.ZP,{item:!0,xs:8,children:(0,P.jsx)(m.KfX,{title:"Tiers",iconComponent:(0,P.jsx)(m.y2Y,{}),help:(0,P.jsxs)(o.Fragment,{children:["Tiers are used by the MinIO Object Lifecycle Management which allows creating rules for time or date based automatic transition or expiry of objects. For object transition, MinIO automatically moves the object to a configured remote storage tier.",(0,P.jsx)("br",{}),(0,P.jsx)("br",{}),H?(0,P.jsxs)("div",{children:["To get started,"," ",(0,P.jsx)(g.Z,{onClick:W,children:"Create Tier"}),"."]}):""]})})})})]})]}):(0,P.jsx)(v.Z,{entity:"Tiers",iconComponent:(0,P.jsx)(m.gXu,{})})})]})}))},34345:function(e,n,t){t.d(n,{Bh:function(){return c},Pp:function(){return o},b2:function(){return l},f0:function(){return s},vB:function(){return a}});var r=t(75952),i=t(80184),o="minio",s="gcs",l="s3",a="azure",c=[{serviceName:o,targetTitle:"MinIO",logo:(0,i.jsx)(r.$E9,{}),logoXs:(0,i.jsx)(r.YEz,{})},{serviceName:s,targetTitle:"Google Cloud Storage",logo:(0,i.jsx)(r.UQG,{}),logoXs:(0,i.jsx)(r.Vwu,{})},{serviceName:l,targetTitle:"AWS S3",logo:(0,i.jsx)(r.feu,{}),logoXs:(0,i.jsx)(r.Xj3,{})},{serviceName:a,targetTitle:"Azure",logo:(0,i.jsx)(r.jze,{}),logoXs:(0,i.jsx)(r.nAe,{})}]}}]);
//# sourceMappingURL=9635.2b5ccda4.chunk.js.map