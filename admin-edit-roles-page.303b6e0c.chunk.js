"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[2544],{92100:(ae,S,t)=>{t.r(S),t.d(S,{default:()=>w});var e=t(67294),n=t(68547),L=t(49656),M=t(87751),u=t(35961),C=t(29728),D=t(67838),F=t(49066),j=t(185),y=t(7681),z=t(7600),N=t(67109),K=t(27361),b=t.n(K),x=t(97132),G=t(28834),O=t(11276),T=t(74571),$=t(46273),A=t(72735),H=t(64256),V=t(16364),W=t(45697),g=t.n(W);const P=({disabled:r,role:s,values:a,errors:i,onChange:d,onBlur:c})=>{const{formatMessage:o}=(0,x.useIntl)();return e.createElement(u.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(y.K,{spacing:4},e.createElement($.k,{justifyContent:"space-between"},e.createElement(u.x,null,e.createElement(u.x,null,e.createElement(A.Z,{fontWeight:"bold"},s?s.name:o({id:"global.details",defaultMessage:"Details"}))),e.createElement(u.x,null,e.createElement(A.Z,{textColor:"neutral500",variant:"pi"},s?s.description:o({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(C.z,{disabled:!0,variant:"secondary"},o({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:s.usersCount}))),e.createElement(O.r,{gap:4},e.createElement(T.P,{col:6},e.createElement(V.o,{disabled:r,name:"name",error:i.name&&o({id:i.name}),label:o({id:"global.name",defaultMessage:"Name"}),onChange:d,onBlur:c,value:a.name||""})),e.createElement(T.P,{col:6},e.createElement(H.g,{disabled:r,label:o({id:"global.description",defaultMessage:"Description"}),name:"description",error:i.name&&o({id:i.name}),onChange:d,onBlur:c},a.description||"")))))};P.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},P.propTypes={disabled:g().bool,errors:g().object.isRequired,onBlur:g().func.isRequired,onChange:g().func.isRequired,role:g().object,values:g().object};const J=P;var I=t(78143),U=t(53209);const Q=U.Ry().shape({name:U.Z_().required(n.translatedErrors.required)});var X=t(25108),Y=(r,s,a)=>new Promise((i,d)=>{var c=l=>{try{v(a.next(l))}catch(E){d(E)}},o=l=>{try{v(a.throw(l))}catch(E){d(E)}},v=l=>l.done?i(l.value):Promise.resolve(l.value).then(c,o);v((a=a.apply(r,s)).next())});const k=()=>{const r=(0,n.useNotification)(),{formatMessage:s}=(0,x.useIntl)(),{params:{id:a}}=(0,L.useRouteMatch)("/settings/roles/:id"),[i,d]=(0,e.useState)(!1),c=(0,e.useRef)(),{lockApp:o,unlockApp:v}=(0,n.useOverlayBlocker)(),{trackUsage:l}=(0,n.useTracking)(),{isLoading:E,data:q}=(0,I.U_)(a),{role:p,permissions:_,isLoading:Z,onSubmitSucceeded:ee}=(0,I.Dq)(a),te=f=>Y(void 0,null,function*(){try{o(),d(!0);const{permissionsToSend:m,didUpdateConditions:h}=c.current.getPermissions();yield(0,n.request)(`/admin/roles/${a}`,{method:"PUT",body:f}),p.code!=="strapi-super-admin"&&(yield(0,n.request)(`/admin/roles/${a}/permissions`,{method:"PUT",body:{permissions:m}}),h&&l("didUpdateConditions")),c.current.setFormAfterSubmit(),ee({name:f.name,description:f.description}),r({type:"success",message:{id:"notification.success.saved"}})}catch(m){X.error(m.response);const h=b()(m,"response.payload.message","An error occured"),R=b()(m,"response.payload.data.permissions[0]",h);r({type:"warning",message:R})}finally{d(!1),v()}}),B=p.code==="strapi-super-admin";return e.createElement(j.o,null,e.createElement(n.SettingsPageTitle,{name:"Roles"}),e.createElement(z.Formik,{enableReinitialize:!0,initialValues:{name:p.name,description:p.description},onSubmit:te,validationSchema:Q,validateOnChange:!1},({handleSubmit:f,values:m,errors:h,handleChange:R,handleBlur:se})=>e.createElement("form",{onSubmit:f},e.createElement(D.T,{primaryAction:e.createElement(y.K,{horizontal:!0,spacing:2},e.createElement(C.z,{disabled:p.code==="strapi-super-admin",onClick:f,loading:i,size:"L"},s({id:"global.save",defaultMessage:"Save"}))),title:s({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:s({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(n.Link,{startIcon:e.createElement(N.Z,null),to:"/settings/roles"},s({id:"global.back",defaultMessage:"Back"}))}),e.createElement(F.D,null,e.createElement(y.K,{spacing:6},e.createElement(J,{isLoading:Z,disabled:B,errors:h,values:m,onChange:R,onBlur:se,role:p}),!E&&!Z?e.createElement(u.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(G.Z,{isFormDisabled:B,permissions:_,ref:c,layout:q})):e.createElement(u.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(n.LoadingIndicatorPage,null)))))))},w=()=>{const r=(0,e.useMemo)(()=>({read:M.Z.settings.roles.read,update:M.Z.settings.roles.update}),[]),{isLoading:s,allowedActions:{canRead:a,canUpdate:i}}=(0,n.useRBAC)(r);return s?e.createElement(n.LoadingIndicatorPage,null):!a&&!i?e.createElement(L.Redirect,{to:"/"}):e.createElement(k,null)}}}]);
