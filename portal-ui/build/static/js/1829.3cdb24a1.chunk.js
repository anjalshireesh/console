"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[1829],{47986:function(e,n,t){t(72791);var a=t(61889),r=t(64554),o=t(75952),s=t(80184);n.Z=function(e){var n=e.iconComponent,t=e.entity;return(0,s.jsx)(a.ZP,{container:!0,alignItems:"center",children:(0,s.jsx)(a.ZP,{item:!0,xs:12,children:(0,s.jsx)(o.KfX,{title:"".concat(t," not available"),iconComponent:n,help:(0,s.jsxs)(r.Z,{sx:{fontSize:"14px",display:"flex",border:"none",flexFlow:{xs:"column",md:"row"},"& a":{color:function(e){return e.colors.link},textDecoration:"underline"}},children:[(0,s.jsx)("div",{children:"This feature is not available for a single-disk setup."}),(0,s.jsxs)("div",{children:["Please deploy a server in"," ",(0,s.jsx)("a",{href:"https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html?ref=con",target:"_blank",rel:"noopener",children:"Distributed Mode"})," ","to use this feature."]})]})})})})}},61829:function(e,n,t){t.r(n);var a=t(29439),r=t(1413),o=t(72791),s=t(78687),c=t(28353),i=t(4834),l=t(61889),d=t(68096),u=t(58406),f=t(23786),h=t(27391),b=t(95087),x=t(75952),m=t(11135),p=t(25787),g=t(26824),j=t(45248),v=t(23814),Z=t(56087),S=t(34866),k=t(81207),C=t(74794),y=t(38442),w=t(47986),H=t(87995),E=t(72455),N=t(80184),D=(0,E.Z)((function(e){return(0,m.Z)((0,r.Z)((0,r.Z)((0,r.Z)({graphContainer:{backgroundColor:"#fff",border:"#EAEDEE 1px solid",borderRadius:3,padding:"19px 38px",marginTop:15},scanInfo:{marginTop:20,display:"flex",flexDirection:"row",justifyContent:"space-between"},scanData:{fontSize:13},formBox:{padding:15,border:"1px solid #EAEAEA"},buttonBar:{display:"flex",alignItems:"center",justifyContent:"flex-end"},bucketField:{flex:1},prefixField:(0,r.Z)((0,r.Z)({},v.qg.searchField),{},{marginLeft:10,flex:1}),actionsTray:(0,r.Z)((0,r.Z)({},v.OR.actionsTray),{},{marginBottom:0})},v.IX),v.qg),v.Bz))})),P=(0,p.Z)((function(e){return(0,m.Z)({root:{lineHeight:"50px",marginRight:15,"label + &":{marginTop:e.spacing(3)},"& .MuiSelect-select:focus":{backgroundColor:"transparent"}}})}))(i.ZP);n.default=function(){var e=D(),n=(0,s.v9)(H.N5),t=(0,o.useState)(!1),r=(0,a.Z)(t,2),i=r[0],m=r[1],p=(0,o.useState)(""),v=(0,a.Z)(p,2),E=v[0],F=v[1],R=(0,o.useState)([]),B=(0,a.Z)(R,2),I=B[0],z=B[1],A=(0,o.useState)(""),G=(0,a.Z)(A,2),T=G[0],O=G[1],L=(0,o.useState)(!1),U=(0,a.Z)(L,2),Y=U[0],_=U[1],M=(0,o.useState)(!1),W=(0,a.Z)(M,2),q=W[0],X=W[1],J=(0,o.useState)(!1),K=(0,a.Z)(J,2),V=K[0],Q=K[1],$=(0,o.useState)({beforeHeal:[0,0,0,0],afterHeal:[0,0,0,0],objectsHealed:0,objectsScanned:0,healDuration:0,sizeScanned:""}),ee=(0,a.Z)($,2),ne=ee[0],te=ee[1];(0,o.useEffect)((function(){k.Z.invoke("GET","/api/v1/buckets").then((function(e){var n=[];null!==e.buckets&&(n=e.buckets),z(n)})).catch((function(e){console.error(e)}))}),[]),(0,o.useEffect)((function(){!0===q&&Q(!1)}),[q]),(0,o.useEffect)((function(){!0===V&&X(!1)}),[V]);var ae=function(e){return[e.Green,e.Yellow,e.Red,e.Grey]};(0,o.useEffect)((function(){if(i){var e={Green:0,Yellow:0,Red:0,Grey:0},n={Green:0,Yellow:0,Red:0,Grey:0},t=new URL(window.location.toString()),r=t.port,o=new URL(document.baseURI).pathname,s=(0,g.x2)(t.protocol),c=new b.w3cwebsocket("".concat(s,"://").concat(t.hostname,":").concat(r).concat(o,"ws/heal/").concat(E,"?prefix=").concat(T,"&recursive=").concat(Y,"&force-start=").concat(q,"&force-stop=").concat(V));if(null!==c)return c.onopen=function(){console.log("WebSocket Client Connected"),c.send("ok")},c.onmessage=function(t){for(var r=JSON.parse(t.data.toString()),o=0,s=Object.entries(r.healthAfterCols);o<s.length;o++){var c=(0,a.Z)(s[o],2),i=c[0],l=c[1];n[i]=100*l/r.itemsScanned}for(var d=0,u=Object.entries(r.healthBeforeCols);d<u.length;d++){var f=(0,a.Z)(u[d],2),h=f[0],b=f[1];e[h]=100*b/r.itemsScanned}te({beforeHeal:ae(e),afterHeal:ae(n),objectsHealed:r.objectsHealed,objectsScanned:r.objectsScanned,healDuration:r.healDuration,sizeScanned:(0,j.ae)(r.bytesScanned.toString())})},c.onclose=function(){m(!1),console.log("connection closed by server")},function(){c.close(1e3),console.log("closing websockets")}}}),[i,E,q,V,T,Y]);var re={labels:["Green","Yellow","Red","Grey"],datasets:[{label:"After Healing",data:ne.afterHeal,backgroundColor:"rgba(0, 0, 255, 0.2)",borderColor:"rgba(54, 162, 235, 1)",borderWidth:1},{label:"Before Healing",data:ne.beforeHeal,backgroundColor:"rgba(153, 102, 255, 0.2)",borderColor:"rgba(153, 102, 255, 1)",borderWidth:1}]},oe=I.map((function(e){return{label:e.name,value:e.name}}));return(0,N.jsxs)(o.Fragment,{children:[(0,N.jsx)(x.mr1,{label:"Drives"}),(0,N.jsx)(C.Z,{children:n?(0,N.jsxs)(y.s,{scopes:[Z.Ft.ADMIN_HEAL],resource:Z.C3,children:[(0,N.jsxs)(l.ZP,{xs:12,item:!0,className:e.formBox,children:[(0,N.jsxs)(l.ZP,{item:!0,xs:12,className:e.actionsTray,children:[(0,N.jsx)(d.Z,{variant:"outlined",className:e.bucketField,children:(0,N.jsxs)(u.Z,{label:"Bucket",id:"bucket-name",name:"bucket-name",value:E,onChange:function(e){F(e.target.value)},className:e.searchField,input:(0,N.jsx)(P,{}),displayEmpty:!0,children:[(0,N.jsx)(f.Z,{value:"",children:"Select Bucket"},"select-bucket-name-default"),oe.map((function(e){return(0,N.jsx)(f.Z,{value:e.value,children:e.label},"select-bucket-name-".concat(e.label))}))]})}),(0,N.jsx)(h.Z,{label:"Prefix",className:e.prefixField,id:"prefix-resource",disabled:!1,InputProps:{disableUnderline:!0},onChange:function(e){O(e.target.value)},variant:"standard"})]}),(0,N.jsxs)(l.ZP,{item:!0,xs:12,className:e.inlineCheckboxes,children:[(0,N.jsx)(S.Z,{name:"recursive",id:"recursive",value:"recursive",checked:Y,onChange:function(e){_(e.target.checked)},disabled:!1,label:"Recursive"}),(0,N.jsx)(S.Z,{name:"forceStart",id:"forceStart",value:"forceStart",checked:q,onChange:function(e){X(e.target.checked)},disabled:!1,label:"Force Start"}),(0,N.jsx)(S.Z,{name:"forceStop",id:"forceStop",value:"forceStop",checked:V,onChange:function(e){Q(e.target.checked)},disabled:!1,label:"Force Stop"})]}),(0,N.jsx)(l.ZP,{item:!0,xs:12,className:e.buttonBar,children:(0,N.jsx)(x.zxk,{id:"start-heal",type:"submit",variant:"callAction",color:"primary",disabled:i,onClick:function(){return m(!0)},label:"Start"})})]}),(0,N.jsxs)(l.ZP,{item:!0,xs:12,className:e.graphContainer,children:[(0,N.jsx)(c.n4,{data:re,width:80,height:30,options:{title:{display:!0,text:"Item's Health Status [%]",fontSize:20},legend:{display:!0,position:"right"}}}),(0,N.jsxs)(l.ZP,{item:!0,xs:12,className:e.scanInfo,children:[(0,N.jsxs)("div",{className:e.scanData,children:[(0,N.jsx)("strong",{children:"Size scanned:"})," ",ne.sizeScanned]}),(0,N.jsxs)("div",{className:e.scanData,children:[(0,N.jsx)("strong",{children:"Objects healed:"})," ",ne.objectsHealed," /"," ",ne.objectsScanned]}),(0,N.jsxs)("div",{className:e.scanData,children:[(0,N.jsx)("strong",{children:"Healing time:"})," ",ne.healDuration,"s"]})]})]})]}):(0,N.jsx)(w.Z,{entity:"Heal",iconComponent:(0,N.jsx)(x.lnI,{})})})]})}},26824:function(e,n,t){t.d(n,{HE:function(){return o},V9:function(){return a},ci:function(){return r},x2:function(){return s}});var a=1006,r=1008,o=1011,s=function(e){var n="ws";return"https:"===e&&(n="wss"),n}}}]);
//# sourceMappingURL=1829.3cdb24a1.chunk.js.map