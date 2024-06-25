"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[2372],{71102:(e,t,n)=>{n.d(t,{A:()=>o});var s=n(65043),a=n(89923),i=n(70579);const o=e=>{let{timeStart:t,setTimeStart:n,timeEnd:o,setTimeEnd:l,triggerSync:c,label:r="Filter:",startLabel:d="Start Time:",endLabel:m="End Time:"}=e;return(0,i.jsx)(a.xA9,{item:!0,xs:12,sx:{"& .filter-date-input-label, .end-time-input-label":{display:"none"},"& .MuiInputBase-adornedEnd.filter-date-date-time-input":{width:"100%",border:"1px solid #eaeaea",paddingLeft:"8px",paddingRight:"8px",borderRadius:"1px"},"& .MuiInputAdornment-root button":{height:"20px",width:"20px",marginRight:"5px"},"& .filter-date-input-wrapper":{height:"30px",width:"100%","& .MuiTextField-root":{height:"30px",width:"90%","& input.Mui-disabled":{color:"#000000",WebkitTextFillColor:"#101010"}}}},children:(0,i.jsxs)(a.azJ,{sx:{display:"grid",height:40,alignItems:"center",gridTemplateColumns:"auto 2fr auto",padding:0,["@media (max-width: ".concat(a.nmC.sm,"px)")]:{padding:5},["@media (max-width: ".concat(a.nmC.md,"px)")]:{gridTemplateColumns:"1fr",height:"auto"},gap:"5px"},children:[(0,i.jsx)(a.azJ,{sx:{fontSize:"14px",fontWeight:500,marginRight:"5px"},className:"muted",children:r}),(0,i.jsxs)(a.azJ,{customBorderPadding:"0px",sx:{display:"grid",height:40,alignItems:"center",gridTemplateColumns:"1fr 1fr",gap:"8px",paddingLeft:"8px",paddingRight:"8px",["@media (max-width: ".concat(a.nmC.md,"px)")]:{height:"auto",gridTemplateColumns:"1fr"}},children:[(0,i.jsx)(a.e8j,{value:t,onChange:n,id:"stTime",secondsSelector:!1,pickerStartComponent:(0,i.jsxs)(s.Fragment,{children:[(0,i.jsx)(a.b1c,{}),(0,i.jsx)("span",{children:d})]})}),(0,i.jsx)(a.e8j,{value:o,onChange:l,id:"endTime",secondsSelector:!1,pickerStartComponent:(0,i.jsxs)(s.Fragment,{children:[(0,i.jsx)(a.b1c,{}),(0,i.jsx)("span",{children:m})]})})]}),c&&(0,i.jsx)(a.azJ,{sx:{alignItems:"flex-end",display:"flex",justifyContent:"flex-end"},children:(0,i.jsx)(a.$nd,{id:"sync",type:"button",variant:"callAction",onClick:c,icon:(0,i.jsx)(a.Fjq,{}),label:"Sync"})})]})})}},52372:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var s=n(65043),a=n(33097),i=n.n(a),o=n(22166),l=n(89923),c=n(56483);const r={time:"Timestamp",api_name:"API Name",access_key:"Access Key",bucket:"Bucket",object:"Object",remote_host:"Remote Host",request_id:"Request ID",user_agent:"User Agent",response_status:"Response Status",response_status_code:"Response Status Code",request_content_length:"Request Content Length",response_content_length:"Response Content Length",time_to_response_ns:"Time to Response NS"};var d=n(99161),m=n(64159),u=n(46537),x=n(20554),p=n(77938),h=n(20649),g=n(70579);const j=e=>{let{label:t,onChange:n,value:a,placeholder:i="",id:o,name:c}=e;return(0,g.jsx)(s.Fragment,{children:(0,g.jsxs)(l.azJ,{sx:{flexGrow:1,margin:"0 15px"},children:[(0,g.jsx)(l.l1Y,{children:t}),(0,g.jsx)(l.cl_,{placeholder:i,id:o,name:c,label:"",onChange:e=>{n(e.target.value)},sx:{"& input":{height:30}},value:a})]})})};var b=n(94141);const _=e=>{let{modalOpen:t,logSearchElement:n,onClose:a}=e;const o=Object.keys(n);return(0,g.jsx)(s.Fragment,{children:(0,g.jsx)(b.A,{modalOpen:t,title:"Full Log Information",onClose:()=>{a()},children:(0,g.jsxs)(l.xA9,{container:!0,children:[(0,g.jsx)(l.xA9,{item:!0,xs:12,children:(0,g.jsx)("table",{children:(0,g.jsx)("tbody",{children:o.map(((e,t)=>(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{style:{fontWeight:700,paddingRight:"10px",textAlign:"left"},children:i()(r,e,"".concat(e))}),(0,g.jsx)("td",{children:i()(n,e,"")})]},"logSearch-".concat(t.toString()))))})})}),(0,g.jsx)(l.xA9,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end"},children:(0,g.jsx)(l.$nd,{id:"close-log-search",variant:"callAction",color:"primary",onClick:a,label:"Close"})})]})})})};var f=n(71102);const C=e=>{let{iconComponent:t,entity:n,documentationLink:a}=e;return(0,g.jsx)(l.xA9,{container:!0,sx:{justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,g.jsx)(l.xA9,{item:!0,xs:8,children:(0,g.jsx)(l.lVp,{title:"".concat(n," not available"),iconComponent:t,help:(0,g.jsxs)(s.Fragment,{children:["This feature is not available.",(0,g.jsx)("br",{}),"Please configure"," ",(0,g.jsx)("a",{href:a,target:"_blank",rel:"noopener",children:n})," ","first to use this feature."]})})})})};var y=n(48793),S=n(55968);const k={display:"flex",justifyContent:"space-between",marginBottom:12},A=()=>{const e=(0,x.jL)(),t=(0,o.d4)(u.s$),[n,a]=(0,s.useState)(!0),[b,A]=(0,s.useState)(null),[v,w]=(0,s.useState)(null),[T,F]=(0,s.useState)(!1),[E,I]=(0,s.useState)([]),[q,R]=(0,s.useState)(""),[L,z]=(0,s.useState)(""),[K,O]=(0,s.useState)(""),[J,B]=(0,s.useState)(""),[D,M]=(0,s.useState)(""),[N,P]=(0,s.useState)(""),[W,H]=(0,s.useState)(""),[U,$]=(0,s.useState)("DESC"),[G,Y]=(0,s.useState)(["time","api_name","access_key","bucket","object","remote_host","request_id","user_agent","response_status"]),[V,Q]=(0,s.useState)(0),[X,Z]=(0,s.useState)(!1),[ee,te]=(0,s.useState)(!1),[ne,se]=(0,s.useState)(null);let ae=null;const ie=t&&t.includes("log-search"),oe=(0,s.useCallback)((()=>{if(!X&&ie){Z(!0);let t="".concat(""!==q?"&fp=bucket:".concat(q):"").concat(""!==D?"&fp=object:".concat(D):"").concat(""!==L?"&fp=api_name:".concat(L):"").concat(""!==K?"&fp=access_key:".concat(K):"").concat(""!==N?"&fp=request_id:".concat(N):"").concat(""!==J?"&fp=user_agent:".concat(J):"").concat(""!==W?"&fp=response_status:".concat(W):"");t=t.trim(),t.endsWith(",")&&(t=t.slice(0,-1)),h.A.invoke("GET","/api/v1/logs/search?q=reqinfo".concat(""!==t?"".concat(t):"","&pageSize=100&pageNo=").concat(V,"&order=").concat("DESC"===U?"timeDesc":"timeAsc").concat(null!==b?"&timeStart=".concat(b.toUTC().toISO()):"").concat(null!==v?"&timeEnd=".concat(v.toUTC().toISO()):"")).then((e=>{const t=e.results||[];a(!1),Z(!1),I(t),Q(V+1),null!==ae&&ae()})).catch((t=>{a(!1),Z(!1),e((0,m.C9)(t))}))}else a(!1),Z(!1)}),[X,ie,q,D,L,K,N,J,W,V,U,b,v,ae,e]);(0,s.useEffect)((()=>{n&&(I([]),oe())}),[n,U,oe]);return(0,s.useEffect)((()=>{e((0,m.ph)("audit_logs"))}),[]),(0,g.jsxs)(s.Fragment,{children:[ee&&null!==ne&&(0,g.jsx)(_,{logSearchElement:ne,modalOpen:ee,onClose:()=>{se(null),te(!1)}}),(0,g.jsx)(y.A,{label:"Audit Logs",actions:(0,g.jsx)(S.A,{})}),(0,g.jsx)(l.Mxu,{children:ie?(0,g.jsxs)(s.Fragment,{children:[" ",(0,g.jsxs)(l.azJ,{withBorders:!0,sx:{marginBottom:15},children:[(0,g.jsxs)(l.xA9,{item:!0,xs:12,sx:{display:"flex",padding:15,["@media (max-width: ".concat(l.nmC.lg,"px)")]:{flexFlow:"column"}},children:[(0,g.jsx)(l.azJ,{children:(0,g.jsx)(f.A,{setTimeEnd:e=>w(e),setTimeStart:e=>A(e),timeEnd:v,timeStart:b})}),(0,g.jsx)(l.azJ,{sx:{display:"flex",alignItems:"center"},children:(0,g.jsx)(l.J2w,{label:"".concat(T?"Hide":"Show"," advanced Filters"),open:T,onClick:()=>{F(!T)}})})]}),(0,g.jsxs)(l.xA9,{item:!0,xs:12,sx:{display:T?"block":"none",overflowY:"hidden",marginBottom:T?12:0},children:[(0,g.jsxs)(l.azJ,{sx:{marginLeft:15,marginBottom:15,fontSize:12,color:"#9C9C9C"},children:["Enable your preferred options to get filtered records.",(0,g.jsx)("br",{}),"You can use '*' to match any character, '.' to signify a single character or '\\' to scape an special character (E.g. mybucket-*)"]}),(0,g.jsxs)(l.azJ,{sx:k,children:[(0,g.jsx)(j,{onChange:R,value:q,label:"Bucket",id:"bucket",name:"bucket"}),(0,g.jsx)(j,{onChange:z,value:L,label:"API Name",id:"api_name",name:"api_name"}),(0,g.jsx)(j,{onChange:O,value:K,label:"Access Key",id:"access_key",name:"access_key"}),(0,g.jsx)(j,{onChange:B,value:J,label:"User Agent",id:"user_agent",name:"user_agent"})]}),(0,g.jsxs)(l.azJ,{sx:k,children:[(0,g.jsx)(j,{onChange:M,value:D,label:"Object",id:"object",name:"object"}),(0,g.jsx)(j,{onChange:P,value:N,label:"Request ID",id:"request_id",name:"request_id"}),(0,g.jsx)(j,{onChange:H,value:W,label:"Response Status",id:"response_status",name:"response_status"})]})]}),(0,g.jsx)(l.xA9,{item:!0,xs:12,sx:{marginBottom:15,padding:"0 15px 0 15px",display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,g.jsx)(l.$nd,{id:"get-information",type:"button",variant:"callAction",onClick:()=>{Q(0),a(!0)},label:"Get Information"})})]}),(0,g.jsx)(l.xA9,{item:!0,xs:12,children:(0,g.jsx)(p.R,{scopes:[d.OV.ADMIN_HEALTH_INFO],resource:d.Ms,errorProps:{disabled:!0},children:(0,g.jsx)(l.bQt,{columns:[{label:r.time,elementKey:"time",enableSort:!0},{label:r.api_name,elementKey:"api_name"},{label:r.access_key,elementKey:"access_key"},{label:r.bucket,elementKey:"bucket"},{label:r.object,elementKey:"object"},{label:r.remote_host,elementKey:"remote_host"},{label:r.request_id,elementKey:"request_id"},{label:r.user_agent,elementKey:"user_agent"},{label:r.response_status,elementKey:"response_status",renderFunction:e=>(0,g.jsx)(s.Fragment,{children:(0,g.jsxs)("span",{children:[e.response_status_code," (",e.response_status,")"]})}),renderFullObject:!0},{label:r.request_content_length,elementKey:"request_content_length",renderFunction:c.nO},{label:r.response_content_length,elementKey:"response_content_length",renderFunction:c.nO},{label:r.time_to_response_ns,elementKey:"time_to_response_ns",renderFunction:c.Wi,contentTextAlign:"right"}],isLoading:n,records:E,entityName:"Logs",customEmptyMessage:"There is no information with this criteria",idField:"request_id",columnsSelector:!0,columnsShown:G,onColumnChange:e=>{let t;t=G.findIndex((t=>t===e))>=0?G.filter((t=>t!==e)):[...G,e],Y(t)},customPaperHeight:T?"calc(100vh - 520px)":"calc(100vh - 320px)",sortEnabled:{currentSort:"time",currentDirection:U,onSortClick:e=>{const t=i()(e,"sortDirection","DESC");$(t),Q(0),a(!0)}},infiniteScrollConfig:{recordsCount:1e6,loadMoreRecords:e=>(oe(),new Promise((e=>{ae=e})))},itemActions:[{type:"view",onClick:e=>{se(e),te(!0)}}],textSelectable:!0})})})]}):(0,g.jsx)(C,{entity:"Audit Logs",iconComponent:(0,g.jsx)(l.WIv,{}),documentationLink:"https://min.io/docs/minio/windows/operations/monitoring/minio-logging.html?ref=con"})})]})}}}]);
//# sourceMappingURL=2372.97c7de62.chunk.js.map