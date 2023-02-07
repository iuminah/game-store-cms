"use strict";(self.webpackChunkgame_store_cms=self.webpackChunkgame_store_cms||[]).push([[801],{94369:(z,A,a)=>{a.r(A),a.d(A,{default:()=>rn});var e=a(67294),i=a(68547),L=a(23724),T=a(27361),Q=a.n(T);const D={i8:"4.5.4"};var C=a(61931),h=a(49656),M=a(37424),O=a(99168),b=a(61080),$=a(38914),N=a.n($),k=a(64729),P=a(27821),Y=a(45697),s=a.n(Y),f=a(97132),E=a(44034),v=a(25896),R=a(46273),I=a(35961),X=a(7681),We=a(12028),ce=a(29728),je=a(70968);const Fe=(0,P.default)(R.k)`
  position: fixed;
  z-index: 4;
  inset: 0;
  /* this is theme.colors.neutral800 with opacity */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
`,de=({onClose:t,onSkip:n,children:o,hideSkip:r})=>{const{formatMessage:u}=(0,f.useIntl)();return e.createElement(E.h,null,e.createElement(Fe,{onClick:t,padding:8,justifyContent:"center"},e.createElement(v.i,{onEscape:t},e.createElement(X.K,{background:"neutral0",width:(0,i.pxToRem)(660),shadow:"popupShadow",hasRadius:!0,padding:4,spacing:8,role:"dialog","aria-modal":!0,onClick:l=>l.stopPropagation()},e.createElement(R.k,{justifyContent:"flex-end"},e.createElement(We.h,{onClick:t,"aria-label":u({id:"app.utils.close-label",defaultMessage:"Close"}),icon:e.createElement(je.default,null)})),e.createElement(I.x,{paddingLeft:7,paddingRight:7,paddingBottom:r?8:0},o),!r&&e.createElement(R.k,{justifyContent:"flex-end"},e.createElement(ce.z,{variant:"tertiary",onClick:n},u({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"})))))))};de.propTypes={children:s().node.isRequired,onClose:s().func.isRequired,onSkip:s().func.isRequired,hideSkip:s().bool.isRequired};const $e=de;var ue=a(18172);const pe={stepContent:null,sectionIndex:null,stepIndex:null,hasSectionAfter:!1,hasStepAfter:!1},ke=(t=pe,n)=>(0,ue.default)(t,o=>{switch(n.type){case"UPDATE_MODAL":{o.stepContent=n.content,o.sectionIndex=n.newSectionIndex,o.stepIndex=n.newStepIndex,o.hasSectionAfter=n.newHasSectionAfter,o.hasStepAfter=n.newHasStepAfter;break}default:return o}});var x=a(72735),me=a(37323);const Ke=P.default.li`
  list-style: disc;
`,ge=({id:t,defaultMessage:n})=>{const{formatMessage:o}=(0,f.useIntl)();return e.createElement(X.K,{spacing:4,paddingBottom:6},o({id:t,defaultMessage:n},{documentationLink:r=>e.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters"},r),b:r=>e.createElement(x.Z,{fontWeight:"semiBold"},r),p:r=>e.createElement(x.Z,null,r),light:r=>e.createElement(x.Z,{textColor:"neutral600"},r),ul:r=>e.createElement(I.x,{paddingLeft:6},e.createElement("ul",null,r)),li:r=>e.createElement(Ke,null,r)}))};ge.propTypes={id:s().string.isRequired,defaultMessage:s().string.isRequired};const Ze=ge;var J=a(89285),Ve=a(96392);const q=({number:t,last:n,type:o})=>e.createElement(I.x,{paddingTop:3,paddingBottom:n?0:3},e.createElement(Ve.Z,{number:t,type:o}));q.defaultProps={number:void 0,last:!1,type:""},q.propTypes={number:s().number,last:s().bool,type:s().string};const fe=q;var K=a(99872),ze=Object.defineProperty,he=Object.getOwnPropertySymbols,He=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,Ee=(t,n,o)=>n in t?ze(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,Qe=(t,n)=>{for(var o in n||(n={}))He.call(n,o)&&Ee(t,o,n[o]);if(he)for(var o of he(n))we.call(n,o)&&Ee(t,o,n[o]);return t};const _=({title:t,content:n,cta:o,onCtaClick:r,sectionIndex:u,stepIndex:l,hasSectionAfter:m})=>{const{formatMessage:g}=(0,f.useIntl)(),p=u>0,c=l>0,S=u+1;return e.createElement(e.Fragment,null,e.createElement(R.k,{alignItems:"stretch"},e.createElement(R.k,{marginRight:8,justifyContent:"center",minWidth:(0,i.pxToRem)(30)},p&&e.createElement(J.Z,{type:K.hx,minHeight:(0,i.pxToRem)(24)})),e.createElement(x.Z,{variant:"sigma",textColor:"primary600"},g({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"}))),e.createElement(R.k,null,e.createElement(R.k,{marginRight:8,minWidth:(0,i.pxToRem)(30)},e.createElement(fe,{number:u+1,type:c?K.hx:K.lW})),e.createElement(x.Z,{variant:"alpha",fontWeight:"bold",textColor:"neutral800",as:"h3",id:"title"},g(t))),e.createElement(R.k,{alignItems:"stretch"},e.createElement(R.k,{marginRight:8,direction:"column",justifyContent:"center",minWidth:(0,i.pxToRem)(30)},m&&e.createElement(e.Fragment,null,e.createElement(J.Z,{type:K.hx}),c&&e.createElement(fe,{number:S+1,type:K.lW,last:!0}))),e.createElement(I.x,null,e.createElement(Ze,Qe({},n)),o&&(o.target?e.createElement(i.LinkButton,{endIcon:e.createElement(me.Z,null),onClick:r,to:o.target},g(o.title)):e.createElement(ce.z,{endIcon:e.createElement(me.Z,null),onClick:r},g(o.title))))),c&&m&&e.createElement(I.x,{paddingTop:3},e.createElement(R.k,{marginRight:8,justifyContent:"center",width:(0,i.pxToRem)(30)},e.createElement(J.Z,{type:K.hx,minHeight:(0,i.pxToRem)(24)}))))};_.defaultProps={currentStep:null,cta:void 0},_.propTypes={sectionIndex:s().number.isRequired,stepIndex:s().number.isRequired,hasSectionAfter:s().bool.isRequired,content:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired}).isRequired,cta:s().shape({target:s().string,title:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired})}),currentStep:s().string,onCtaClick:s().func.isRequired,title:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired}).isRequired};const Ye=_;var Xe=Object.defineProperty,Je=Object.defineProperties,qe=Object.getOwnPropertyDescriptors,ve=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable,ye=(t,n,o)=>n in t?Xe(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,tt=(t,n)=>{for(var o in n||(n={}))_e.call(n,o)&&ye(t,o,n[o]);if(ve)for(var o of ve(n))et.call(n,o)&&ye(t,o,n[o]);return t},nt=(t,n)=>Je(t,qe(n));const at=()=>{const{currentStep:t,guidedTourState:n,setCurrentStep:o,setStepState:r,isGuidedTourVisible:u,setSkipped:l}=(0,i.useGuidedTour)(),[m,g]=(0,e.useState)(t),[{stepContent:p,sectionIndex:c,stepIndex:S,hasSectionAfter:U,hasStepAfter:B},G]=(0,e.useReducer)(ke,pe),{trackUsage:Z}=(0,i.useTracking)();(0,e.useEffect)(()=>{if(!t){g(!1);return}const[j]=N()(n,t);g(!j&&u)},[t,n,u]),(0,e.useEffect)(()=>{if(t){const[j]=N()(k.Z,t),d=Object.keys(n),[y,F]=t.split("."),se=d.indexOf(y),w=Object.keys(n[y]).indexOf(F),re=se<d.length-1,ie=w<Object.keys(n[y]).length-1;G({type:"UPDATE_MODAL",content:j,newSectionIndex:se,newStepIndex:w,newHasSectionAfter:re,newHasStepAfter:ie})}},[t,n]);const V=()=>{r(t,!0),Z(p.trackingEvent),o(null)},W=()=>{l(!0),o(null),Z("didSkipGuidedtour")};return m&&p?e.createElement($e,{hideSkip:!B&&!U,onSkip:W,onClose:V},e.createElement(Ye,nt(tt({},p),{onCtaClick:V,currentStep:t,sectionIndex:c,stepIndex:S,hasSectionAfter:U}))):null};var ot=a(70004),st=a(64330),rt=a(37907),it=a(98994),ee=a(38040),Te=a(51974),lt=a(37227),ct=a(56691),dt=a(42384),ut=a(90690),pt=a(87569);const mt=(0,P.default)(I.x)`
  width: ${150/16}rem;
  position: absolute;
  bottom: ${({theme:t})=>t.spaces[9]};
  left: ${({theme:t})=>t.spaces[5]};
`,Pe=(0,P.default)(h.NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: ${({theme:t})=>`${t.spaces[2]} ${t.spaces[4]}`};
  border-radius: ${({theme:t})=>t.spaces[1]};

  &:hover {
    background: ${({theme:t,logout:n})=>n?t.colors.danger100:t.colors.primary100};
    text-decoration: none;
  }

  svg {
    path {
      fill: ${({theme:t})=>t.colors.danger600};
    }
  }
`,Ce=({generalSectionLinks:t,pluginsSectionLinks:n})=>{const o=(0,e.useRef)(),[r,u]=(0,e.useState)(!1),{logos:{menu:l}}=(0,pt.Z)(),[m,g]=(0,i.usePersistentState)("navbar-condensed",!1),{userDisplayName:p}=(0,i.useAppInfos)(),{formatMessage:c}=(0,f.useIntl)(),{trackUsage:S}=(0,i.useTracking)(),{pathname:U}=(0,h.useLocation)(),B=p.split(" ").map(d=>d.substring(0,1)).join("").substring(0,2),G=()=>u(d=>!d),Z=()=>{i.auth.clearAppStorage(),G()},V=d=>{var y,F;!d.currentTarget.contains(d.relatedTarget)&&((F=(y=d.relatedTarget)==null?void 0:y.parentElement)==null?void 0:F.id)!=="main-nav-user-button"&&u(!1)},W=(d=null)=>{S("willNavigate",{from:U,to:d})},j=c({id:"app.components.LeftMenu.navbrand.title",defaultMessage:"Strapi Dashboard"});return e.createElement(st.$,{condensed:m},e.createElement(rt.D,{as:h.NavLink,workplace:c({id:"app.components.LeftMenu.navbrand.workplace",defaultMessage:"Workplace"}),title:j,icon:e.createElement("img",{src:l.custom||l.default,alt:c({id:"app.components.LeftMenu.logo.alt",defaultMessage:"Application logo"})})}),e.createElement(ot.i,null),e.createElement(it._,null,e.createElement(ee.O,{as:h.NavLink,to:"/content-manager",icon:e.createElement(dt.Z,null),onClick:()=>W("/content-manager")},c({id:"global.content-manager",defaultMessage:"Content manager"})),n.length>0?e.createElement(Te.y,{label:c({id:"app.components.LeftMenu.plugins",defaultMessage:"Plugins"})},n.map(d=>{const y=d.icon;return e.createElement(ee.O,{as:h.NavLink,to:d.to,key:d.to,icon:e.createElement(y,null),onClick:()=>W(d.to)},c(d.intlLabel))})):null,t.length>0?e.createElement(Te.y,{label:c({id:"app.components.LeftMenu.general",defaultMessage:"General"})},t.map(d=>{const y=d.icon;return e.createElement(ee.O,{as:h.NavLink,badgeContent:d.notificationsCount>0&&d.notificationsCount.toString()||void 0,to:d.to,key:d.to,icon:e.createElement(y,null),onClick:()=>W(d.to)},c(d.intlLabel))})):null),e.createElement(lt.r,{id:"main-nav-user-button",ref:o,onClick:G,initials:B},p),r&&e.createElement(mt,{onBlur:V,padding:1,shadow:"tableShadow",background:"neutral0",hasRadius:!0},e.createElement(v.i,{onEscape:G},e.createElement(X.K,{spacing:0},e.createElement(Pe,{tabIndex:0,onClick:G,to:"/me"},e.createElement(x.Z,null,c({id:"global.profile",defaultMessage:"Profile"}))),e.createElement(Pe,{tabIndex:0,onClick:Z,logout:"logout",to:"/auth/login"},e.createElement(x.Z,{textColor:"danger600"},c({id:"app.components.LeftMenu.logout",defaultMessage:"Logout"})),e.createElement(ut.Z,null))))),e.createElement(ct.w,{onClick:()=>g(d=>!d)},c(m?{id:"app.components.LeftMenu.expand",defaultMessage:"Expand the navbar"}:{id:"app.components.LeftMenu.collapse",defaultMessage:"Collapse the navbar"})))};Ce.propTypes={generalSectionLinks:s().array.isRequired,pluginsSectionLinks:s().array.isRequired};const gt=Ce;var ft=a(727);const ht=(0,P.default)(I.x)`
  flex: 1;
`,Me=({children:t,sideNav:n})=>{const{formatMessage:o}=(0,f.useIntl)();return e.createElement(I.x,{background:"neutral100"},e.createElement(ft.z,null,o({id:"skipToContent",defaultMessage:"Skip to content"})),e.createElement(R.k,{alignItems:"flex-start"},n,e.createElement(ht,null,t)))};Me.propTypes={children:s().node.isRequired,sideNav:s().node.isRequired};const Et=Me;var te=a(38683),vt=a(36657),ne=a(70982),Oe=a(51436);const yt=(0,P.default)(I.x)`
  position: fixed;
  bottom: ${({theme:t})=>t.spaces[2]};
  right: ${({theme:t})=>t.spaces[2]};
`,Tt=P.default.button`
  width: ${({theme:t})=>t.spaces[8]};
  height: ${({theme:t})=>t.spaces[8]};
  background: ${({theme:t})=>t.colors.primary600};
  box-shadow: ${({theme:t})=>t.shadows.tableShadow};
  border-radius: 50%;
  svg {
    color: ${({theme:t})=>t.colors.buttonNeutral0};
  }
`,Pt=(0,P.default)(I.x)`
  position: absolute;
  bottom: ${({theme:t})=>`${t.spaces[9]}`};
  right: 0;
  width: ${200/16}rem;
`,Ct=P.default.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: ${({theme:t})=>t.spaces[2]};
  padding-left: ${({theme:t})=>t.spaces[5]};

  svg {
    color: ${({theme:t})=>t.colors.neutral600};
    margin-right: ${({theme:t})=>t.spaces[2]};
  }

  &:hover {
    background: ${({theme:t})=>t.colors.neutral100};
    color: ${({theme:t})=>t.colors.neutral500};

    svg {
      color: ${({theme:t})=>t.colors.neutral700};
    }

    ${[x.Z]} {
      color: ${({theme:t})=>t.colors.neutral700};
    }
  }

  ${[x.Z]} {
    color: ${({theme:t})=>t.colors.neutral600};
  }
`,Mt=()=>{const[t,n]=(0,e.useState)(!1),{formatMessage:o}=(0,f.useIntl)(),{showTutorials:r}=(0,C.um)();if(!r)return null;const u=[{icon:"book",label:o({id:"global.documentation",defaultMessage:"Documentation"}),destination:"https://docs.strapi.io"},{icon:"file",label:o({id:"app.static.links.cheatsheet",defaultMessage:"CheatSheet"}),destination:"https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf"}],l=()=>{n(m=>!m)};return e.createElement(yt,{as:"aside"},e.createElement(Tt,{id:"onboarding","aria-label":o({id:"app.components.Onboarding.help.button",defaultMessage:"Help button"}),onClick:l},!t&&e.createElement(ne.G,{icon:Oe.Psp}),t&&e.createElement(ne.G,{icon:Oe.NBC})),t&&e.createElement(v.i,{onEscape:l},e.createElement(Pt,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingBottom:2,paddingTop:2},u.map(m=>e.createElement(Ct,{key:m.label,rel:"nofollow noreferrer noopener",target:"_blank",href:m.destination},e.createElement(ne.G,{icon:m.icon}),e.createElement(x.Z,null,m.label))))))},Ot=(0,e.lazy)(()=>Promise.all([a.e(5926),a.e(8702),a.e(118),a.e(6593),a.e(994)]).then(a.bind(a,4085))),Rt=(0,e.lazy)(()=>a.e(3981).then(a.bind(a,11063))),St=(0,e.lazy)(()=>a.e(3677).then(a.bind(a,14928))),At=(0,e.lazy)(()=>Promise.all([a.e(5926),a.e(5516)]).then(a.bind(a,86986))),Re=(0,e.lazy)(()=>Promise.resolve().then(a.bind(a,23330))),It=(0,e.lazy)(()=>a.e(9501).then(a.bind(a,17502))),xt=(0,e.lazy)(()=>a.e(9497).then(a.bind(a,50166))),Se=(0,e.lazy)(()=>Promise.all([a.e(5926),a.e(1534),a.e(5895)]).then(a.bind(a,93500))),Lt=()=>{const{trackUsage:t}=(0,i.useTracking)(),n=(0,M.useDispatch)(),o=(0,M.useSelector)(r=>r.admin_app.status);(0,e.useEffect)(()=>{o==="init"&&(t("didAccessAuthenticatedAdministration"),n({type:vt.e}))},[o])},Dt=()=>{Lt();const{isLoading:t,generalSectionLinks:n,pluginsSectionLinks:o}=(0,C.H9)(),{menu:r}=(0,i.useStrapiApp)(),u=(0,e.useMemo)(()=>r.filter(l=>l.Component).map(({to:l,Component:m,exact:g})=>(0,te.ot)(m,l,g)),[r]);return t?e.createElement(i.LoadingIndicatorPage,null):e.createElement(O.DndProvider,{backend:b.PD},e.createElement(Et,{sideNav:e.createElement(gt,{generalSectionLinks:n,pluginsSectionLinks:o})},e.createElement(e.Suspense,{fallback:e.createElement(i.LoadingIndicatorPage,null)},e.createElement(h.Switch,null,e.createElement(h.Route,{path:"/",component:Rt,exact:!0}),e.createElement(h.Route,{path:"/me",component:xt,exact:!0}),e.createElement(h.Route,{path:"/content-manager",component:Ot}),u,e.createElement(h.Route,{path:"/settings/:settingId",component:Se}),e.createElement(h.Route,{path:"/settings",component:Se,exact:!0}),e.createElement(h.Route,{path:"/marketplace"},e.createElement(At,null)),e.createElement(h.Route,{path:"/list-plugins",exact:!0},e.createElement(St,null)),e.createElement(h.Route,{path:"/404",component:Re}),e.createElement(h.Route,{path:"/500",component:It}),e.createElement(h.Route,{path:"",component:Re}))),e.createElement(at,null),e.createElement(Mt,null)))};var bt=Object.defineProperty,Ae=Object.getOwnPropertySymbols,Bt=Object.prototype.hasOwnProperty,Gt=Object.prototype.propertyIsEnumerable,Ie=(t,n,o)=>n in t?bt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,Nt=(t,n)=>{for(var o in n||(n={}))Bt.call(n,o)&&Ie(t,o,n[o]);if(Ae)for(var o of Ae(n))Gt.call(n,o)&&Ie(t,o,n[o]);return t};const Ut=t=>({plugins:Object.keys(t).reduce((n,o)=>(n[o]=Nt({},t[o]),n),{})});var Wt=a(36968),jt=a.n(Wt);const xe={plugins:null},Ft=(t=xe,n)=>(0,ue.default)(t,o=>{switch(n.type){case"SET_PLUGIN_READY":{jt()(o,["plugins",n.pluginId,"isReady"],!0);break}default:return o}}),$t=()=>{const{plugins:t}=(0,i.useStrapiApp)(),[{plugins:n},o]=(0,e.useReducer)(Ft,xe,()=>Ut(t)),r=(0,e.useRef)(l=>{o({type:"SET_PLUGIN_READY",pluginId:l})});if(Object.keys(n).some(l=>n[l].isReady===!1)){const l=Object.keys(n).reduce((m,g)=>{const p=n[g].initializer;if(p){const c=n[g].pluginId;m.push(e.createElement(p,{key:c,setPlugin:r.current}))}return m},[]);return e.createElement(e.Fragment,null,l,e.createElement(i.LoadingIndicatorPage,null))}return e.createElement(Dt,null)};var Le=a(28344);const kt=()=>({type:Le.l}),Kt=t=>({type:Le.m,permissions:t}),De=({children:t,permissions:n,refetchPermissions:o})=>{const{allPermissions:r}=(0,M.useSelector)(l=>l.rbacProvider),u=(0,M.useDispatch)();return(0,e.useEffect)(()=>(u(Kt(n)),()=>{u(kt())}),[n,u]),r?e.createElement(i.RBACProviderContext.Provider,{value:{allPermissions:r,refetchPermissions:o}},t):e.createElement(i.LoadingIndicatorPage,null)};De.propTypes={children:s().element.isRequired,permissions:s().array.isRequired,refetchPermissions:s().func.isRequired};const Zt=De;var Vt=a(9669),zt=a.n(Vt),Ht=a(81249),ae=a.n(Ht);const be=(t,n)=>!ae().valid(t)||!ae().valid(n)?!1:ae().lt(t,n);var oe=a(23998),H=(t,n,o)=>new Promise((r,u)=>{var l=p=>{try{g(o.next(p))}catch(c){u(c)}},m=p=>{try{g(o.throw(p))}catch(c){u(c)}},g=p=>p.done?r(p.value):Promise.resolve(p.value).then(l,m);g((o=o.apply(t,n)).next())});const Be=D.i8,wt=!JSON.parse(localStorage.getItem("STRAPI_UPDATE_NOTIF")),Qt=t=>H(void 0,null,function*(){try{const{data:{tag_name:n}}=yield zt().get("https://api.github.com/repos/strapi/strapi/releases/latest");return be(Be,n)&&wt&&t({type:"info",message:{id:"notification.version.update.message"},link:{url:`https://github.com/strapi/strapi/releases/tag/${n}`,label:{id:"global.see-more"}},blockTransition:!0,onClose:()=>localStorage.setItem("STRAPI_UPDATE_NOTIF",!0)}),n}catch(n){return Be}}),Yt=()=>H(void 0,null,function*(){try{const{data:t,headers:n}=yield oe.be.get("/admin/information");if(!n["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}}),Xt=()=>H(void 0,null,function*(){try{const{data:t,headers:n}=yield oe.be.get("/admin/users/me/permissions");if(!n["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}}),Jt=()=>H(void 0,null,function*(){try{const{data:{data:{roles:t}}}=yield oe.be.get("/admin/users/me");return t}catch(t){throw new Error(t)}});var qt=Object.defineProperty,_t=Object.defineProperties,en=Object.getOwnPropertyDescriptors,Ge=Object.getOwnPropertySymbols,tn=Object.prototype.hasOwnProperty,nn=Object.prototype.propertyIsEnumerable,Ne=(t,n,o)=>n in t?qt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,an=(t,n)=>{for(var o in n||(n={}))tn.call(n,o)&&Ne(t,o,n[o]);if(Ge)for(var o of Ge(n))nn.call(n,o)&&Ne(t,o,n[o]);return t},on=(t,n)=>_t(t,en(n)),sn=(t,n,o)=>new Promise((r,u)=>{var l=p=>{try{g(o.next(p))}catch(c){u(c)}},m=p=>{try{g(o.throw(p))}catch(c){u(c)}},g=p=>p.done?r(p.value):Promise.resolve(p.value).then(l,m);g((o=o.apply(t,n)).next())});const Ue=D.i8,rn=()=>{const{setGuidedTourVisibility:t}=(0,i.useGuidedTour)(),n=(0,i.useNotification)(),o=(0,e.useRef)(t),r=i.auth.getUserInfo(),u=Q()(r,"username")||(0,te.Pp)(r.firstname,r.lastname),[l,m]=(0,e.useState)(u),[g,p]=(0,e.useState)(null),{showReleaseNotification:c}=(0,C.um)(),[{data:S,status:U},{data:B,isLoading:G},{data:Z,status:V,refetch:W,isFetched:j,isFetching:d},{data:y}]=(0,L.useQueries)([{queryKey:"app-infos",queryFn:Yt},{queryKey:"strapi-release",queryFn:()=>Qt(n),enabled:c,initialData:Ue},{queryKey:"admin-users-permission",queryFn:Xt,initialData:[]},{queryKey:"user-roles",queryFn:Jt}]),F=(0,e.useMemo)(()=>be(Ue,B),[B]);(0,e.useEffect)(()=>{y&&y.find(({code:le})=>le==="strapi-super-admin")&&(S==null?void 0:S.autoReload)&&o.current(!0)},[y,S]),(0,e.useEffect)(()=>{(()=>sn(void 0,null,function*(){const le=yield(0,te.Qy)(r);p(le)}))()},[r]);const w=G||(d&&j||U==="loading"||V==="loading"),re=(0,e.useMemo)(()=>on(an({},S),{userId:g,latestStrapiReleaseTag:B,setUserDisplayName:m,shouldUpdateStrapi:F,userDisplayName:l}),[S,B,F,l,g]);return w?e.createElement(i.LoadingIndicatorPage,null):U==="error"?e.createElement("div",null,"error..."):e.createElement(i.AppInfosContext.Provider,{value:re},e.createElement(Zt,{permissions:Z,refetchPermissions:W},e.createElement($t,null)))}},89285:(z,A,a)=>{a.d(A,{Z:()=>Y});var e=a(67294),i=a(45697),L=a.n(i),T=a(68547),Q=a.n(T),D=a(35961),C=a(99872),h=Object.defineProperty,M=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,$=(s,f,E)=>f in s?h(s,f,{enumerable:!0,configurable:!0,writable:!0,value:E}):s[f]=E,N=(s,f)=>{for(var E in f||(f={}))O.call(f,E)&&$(s,E,f[E]);if(M)for(var E of M(f))b.call(f,E)&&$(s,E,f[E]);return s},k=(s,f)=>{var E={};for(var v in s)O.call(s,v)&&f.indexOf(v)<0&&(E[v]=s[v]);if(s!=null&&M)for(var v of M(s))f.indexOf(v)<0&&b.call(s,v)&&(E[v]=s[v]);return E};const P=s=>{var f=s,{type:E}=f,v=k(f,["type"]);return e.createElement(D.x,N({width:(0,T.pxToRem)(2),height:"100%",background:E===C.VM?"neutral300":"primary500",hasRadius:!0},v))};P.defaultProps={type:C.VM},P.propTypes={type:L().oneOf([C.lW,C.hx,C.VM])};const Y=P},96392:(z,A,a)=>{a.d(A,{Z:()=>$});var e=a(67294),i=a(45697),L=a.n(i),T=a(68547),Q=a.n(T),D=a(46273),C=a(72735),h=a(52624),M=a(85018),O=a(99872);const b=({type:N,number:k})=>N===O.hx?e.createElement(D.k,{background:"primary600",padding:2,borderRadius:"50%",width:(0,T.pxToRem)(30),height:(0,T.pxToRem)(30),justifyContent:"center"},e.createElement(h.J,{as:M.Z,"aria-hidden":!0,width:(0,T.pxToRem)(16),color:"neutral0"})):N===O.lW?e.createElement(D.k,{background:"primary600",padding:2,borderRadius:"50%",width:(0,T.pxToRem)(30),height:(0,T.pxToRem)(30),justifyContent:"center"},e.createElement(C.Z,{fontWeight:"semiBold",textColor:"neutral0"},k)):e.createElement(D.k,{borderColor:"neutral500",borderWidth:"1px",borderStyle:"solid",padding:2,borderRadius:"50%",width:(0,T.pxToRem)(30),height:(0,T.pxToRem)(30),justifyContent:"center"},e.createElement(C.Z,{fontWeight:"semiBold",textColor:"neutral600"},k));b.defaultProps={number:void 0,type:O.VM},b.propTypes={number:L().number,type:L().oneOf([O.lW,O.hx,O.VM])};const $=b},99872:(z,A,a)=>{a.d(A,{VM:()=>L,hx:()=>i,lW:()=>e});const e="isActive",i="isDone",L="isNotDone"},64729:(z,A,a)=>{a.d(A,{Z:()=>i});const i={contentTypeBuilder:{home:{title:{id:"app.components.GuidedTour.home.CTB.title",defaultMessage:"\u{1F9E0} Build the content structure"},cta:{title:{id:"app.components.GuidedTour.home.CTB.cta.title",defaultMessage:"Go to the Content type Builder"},type:"REDIRECT",target:"/plugins/content-type-builder"},trackingEvent:"didClickGuidedTourHomepageContentTypeBuilder"},create:{title:{id:"app.components.GuidedTour.CTB.create.title",defaultMessage:"\u{1F9E0} Create a first Collection type"},content:{id:"app.components.GuidedTour.CTB.create.content",defaultMessage:"<p>Collection types help you manage several entries, Single types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection type whereas a Homepage would be a Single type.</p>"},cta:{title:{id:"app.components.GuidedTour.CTB.create.cta.title",defaultMessage:"Build a Collection type"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep1CollectionType"},success:{title:{id:"app.components.GuidedTour.CTB.success.title",defaultMessage:"Step 1: Completed \u2705"},content:{id:"app.components.GuidedTour.CTB.success.content",defaultMessage:"<p>Good going!</p><b>\u26A1\uFE0F What would you like to share with the world?</b>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didCreateGuidedTourCollectionType"}},contentManager:{home:{title:{id:"app.components.GuidedTour.home.CM.title",defaultMessage:"\u26A1\uFE0F What would you like to share with the world?"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didClickGuidedTourHomepageContentManager"},create:{title:{id:"app.components.GuidedTour.CM.create.title",defaultMessage:"\u26A1\uFE0F Create content"},content:{id:"app.components.GuidedTour.CM.create.content",defaultMessage:"<p>Create and manage all the content here in the Content Manager.</p><p>Ex: Taking the Blog website example further, one can write an Article, save and publish it as they like.</p><p>\u{1F4A1} Quick tip - Don't forget to hit publish on the content you create.</p>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep2ContentManager"},success:{title:{id:"app.components.GuidedTour.CM.success.title",defaultMessage:"Step 2: Completed \u2705"},content:{id:"app.components.GuidedTour.CM.success.content",defaultMessage:"<p>Awesome, one last step to go!</p><b>\u{1F680}  See content in action</b>"},cta:{title:{id:"app.components.GuidedTour.CM.success.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didCreateGuidedTourEntry"}},apiTokens:{home:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},cta:{title:{id:"app.components.GuidedTour.home.apiTokens.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didClickGuidedTourHomepageApiTokens"},create:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},content:{id:"app.components.GuidedTour.apiTokens.create.content",defaultMessage:"<p>Generate an authentication token here and retrieve the content you just created.</p>"},cta:{title:{id:"app.components.GuidedTour.apiTokens.create.cta.title",defaultMessage:"Generate an API Token"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep3ApiTokens"},success:{title:{id:"app.components.GuidedTour.apiTokens.success.title",defaultMessage:"Step 3: Completed \u2705"},content:{id:"app.components.GuidedTour.apiTokens.success.content",defaultMessage:"<p>See content in action by making an HTTP request:</p><ul><li><p>To this URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>With the header: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>For more ways to interact with content, see the <documentationLink>documentation</documentationLink>.</p>"},trackingEvent:"didGenerateGuidedTourApiTokens"}}}}}]);