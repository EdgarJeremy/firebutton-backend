(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,a){e.exports=a(336)},334:function(e,t,a){},336:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),s=a.n(o),i=a(54),l=a(55),c=a(58),d=a(56),p=a(59),m=a(57),h=a(29),u=a(5),g=a.n(u),b=a(28),f=a(129),v=a.n(f),E=a(133),y=a.n(E),k=a(130),x=a.n(k),S=a(131),w=a.n(S),O=a(42),T=a.n(O),I=a(18),C=a.n(I),j=a(30),B=a.n(j),N=a(77),R=a.n(N),P=a(132),U=a.n(P),D=a(134),z=a.n(D),J=a(60),A=a.n(J),q=a(79),W=a.n(q),_=a(61),H=a.n(_),K=a(78),L=a.n(K),F=a(136),G=a.n(F),M=a(135),X=a.n(M),Q=a(138),Y=a.n(Q),$=a(137),V=a.n($),Z=a(72),ee=a.n(Z),te=a(125),ae=a.n(te),ne=a(124),re=a.n(ne),oe=a(20),se=a.n(oe),ie=a(76),le=a.n(ie),ce=a(128),de=a.n(ce),pe=a(126),me=a.n(pe),he=a(127),ue=a.n(he),ge=a(31),be=a.n(ge),fe=a(73),ve=a.n(fe),Ee=a(75),ye=a.n(Ee),ke=a(32),xe=a.n(ke),Se=window.location.origin,we=a(74),Oe=a.n(we),Te=a(122),Ie=a.n(Te),Ce=function(e){"x-access-token"in e.headers&&"x-refresh-token"in e.headers&&(localStorage.setItem("devAccessToken",e.headers["x-access-token"]),localStorage.setItem("devRefreshToken",e.headers["x-refresh-token"]));var t=e.data;return t.data&&t.data.tokens&&(t.data.tokens.token&&localStorage.setItem("devAccessToken",t.data.tokens.token),t.data.tokens.refreshToken&&localStorage.setItem("devRefreshToken",t.data.tokens.refreshToken)),e},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.url,a=e.method,n=e.body,r=e.onSuccess,o=e.onError;a=Ie.a.lowerCase(a);var s={headers:{"x-access-token":localStorage.getItem("devAccessToken"),"x-refresh-token":localStorage.getItem("devRefreshToken"),"x-socket-id":localStorage.getItem("devSocketid")}};"post"===a||"put"===a?Oe.a[a](t,n,s).then(Ce).then(r).catch(o):Oe.a[a](t,Object(h.a)({},s)).then(Ce).then(r).catch(o)},Be=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={params:{},body:{},placeholders:{},url:Se,storageKey:"",resTabIndex:0,reqTabIndex:0,loading:!1,response:{}},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.initData(this.props)}},{key:"componentWillReceiveProps",value:function(e){this.initData(e)}},{key:"initData",value:function(e){var t=e.placeholders,a=e.verb,n=e.basepoint,r=e.endpoint,o=a.toLowerCase()+n+r,s=JSON.parse(localStorage.getItem(o));s||(s={placeholders:t,params:{},body:{}},localStorage.setItem(o,JSON.stringify(s))),this.setState(Object(h.a)({},s,{response:{},reqTabIndex:0,resTabIndex:0,storageKey:o}))}},{key:"onUpdatePlaceholder",value:function(e){var t=this.state.storageKey,a=JSON.parse(localStorage.getItem(t));a.placeholders=e.updated_src,localStorage.setItem(t,JSON.stringify(a)),this.setState({placeholders:e.updated_src})}},{key:"onUpdateParams",value:function(e){var t=this.state.storageKey,a=JSON.parse(localStorage.getItem(t));a.params=e.updated_src,localStorage.setItem(t,JSON.stringify(a)),this.setState({params:e.updated_src})}},{key:"onUpdateBody",value:function(e){var t=this.state.storageKey,a=JSON.parse(localStorage.getItem(t));a.body=e.updated_src,localStorage.setItem(t,JSON.stringify(a)),this.setState({body:e.updated_src})}},{key:"getUrl",value:function(){var e=this.props,t=e.basepoint,a=e.endpoint,n=this.state,r=n.params,o=n.placeholders,s=n.url+t+a;Object.keys(o).forEach(function(e){s=s.replace(":".concat(e),o[e])});var i=Object.keys(r).map(function(e){return e+"="+r[e]}).join("&");return s+=i.length>0?"?".concat(i):""}},{key:"hit",value:function(){var e=this,t=this.state.body,a=this.props.verb,n=this.getUrl();console.log("hit"),this.setState({loading:!0},function(){console.log("loading"),je({url:n,method:a,body:t,onSuccess:function(t){console.log("success"),console.log(t.headers),e.setState({loading:!1,response:t})},onError:function(t){console.log("error"),console.log(t.response.headers),"x-access-token"in t.response.headers&&"x-refresh-token"in t.response.headers&&(console.log("renew"),localStorage.setItem("devAccessToken",t.response.headers["x-access-token"]),localStorage.setItem("devRefreshToken",t.response.headers["x-refresh-token"])),e.setState({loading:!1,response:t.response})}})})}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.basepoint,o=t.endpoint,s=t.verb,i=this.state,l=i.params,c=i.body,d=i.placeholders,p=i.loading,m=i.response;return r.a.createElement("div",{style:{display:"flex",height:"100%",paddingTop:64}},r.a.createElement("div",{style:{padding:"24px 0",paddingRight:24,width:"50%",height:"100%",flex:"1 0 auto"}},r.a.createElement(se.a,{style:{position:"relative"}},r.a.createElement("div",{className:a.contain},r.a.createElement(C.a,{variant:"h5",component:"h3"},"Request"),r.a.createElement("br",null),r.a.createElement(B.a,null),r.a.createElement("br",null),r.a.createElement(C.a,{style:{fontSize:15,color:"#bdc3c7",marginBottom:5},variant:"h6",component:"p"},"Route"),r.a.createElement(re.a,{fullWidth:!0,id:"outlined-simple-start-adornment",className:g()(a.margin,a.textField),variant:"outlined",color:"#3498db",value:n+o,InputProps:{startAdornment:r.a.createElement(ae.a,{position:"start"},s)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(se.a,null,r.a.createElement(ye.a,{value:this.state.reqTabIndex,onChange:function(t,a){return e.setState({reqTabIndex:a})},indicatorColor:"secondary",textColor:"secondary",fullWidth:!0},r.a.createElement(xe.a,{label:"Query Parameter (".concat(Object.keys(l).length,")")}),r.a.createElement(xe.a,{label:"Body (".concat(Object.keys(c).length,")"),disabled:"POST"!==s&&"PUT"!==s}),r.a.createElement(xe.a,{label:"Placeholder (".concat(Object.keys(d).length,")"),disabled:0===Object.keys(d).length})),r.a.createElement(ve.a,{axis:"x",index:this.state.reqTabIndex,onChangeIndex:function(t){return e.setState({reqTabIndex:t})}},r.a.createElement("div",null,r.a.createElement(be.a,{name:"params",style:{padding:10,borderRadius:5,marginTop:5,marginBottom:5},onAdd:this.onUpdateParams.bind(this),onEdit:this.onUpdateParams.bind(this),onDelete:this.onUpdateParams.bind(this),src:l})),r.a.createElement("div",null,r.a.createElement(be.a,{name:"body",style:{padding:10,borderRadius:5,marginTop:5,marginBottom:5},onAdd:this.onUpdateBody.bind(this),onEdit:this.onUpdateBody.bind(this),onDelete:this.onUpdateBody.bind(this),src:c})),r.a.createElement("div",null,r.a.createElement(be.a,{name:"placeholder",style:{padding:10,borderRadius:5,marginTop:5,marginBottom:5},onEdit:this.onUpdatePlaceholder.bind(this),src:d})))),r.a.createElement("br",null),r.a.createElement("pre",{style:{overflowY:"hidden",backgroundColor:"#ddd",padding:5,borderRadius:4,color:"#333"}},this.getUrl()),r.a.createElement("br",null),r.a.createElement(le.a,{onClick:this.hit.bind(this),variant:"contained",size:"large",style:{backgroundColor:"#2980b9",color:"#ffffff"},className:a.button},r.a.createElement(me.a,null)," \xa0Hit!"),"\xa0",r.a.createElement(le.a,{variant:"contained",size:"large",style:{backgroundColor:"#2ecc71",color:"#ffffff"},className:a.button},r.a.createElement(ue.a,null)," \xa0Kode")))),r.a.createElement("div",{style:{width:"50%",height:"100%",padding:"24px 0",flex:"1 0 auto"}},r.a.createElement(se.a,{className:a.contain,style:{overflowX:"hidden",maxHeight:"100%",display:"flex",flexDirection:"column"}},r.a.createElement(C.a,{variant:"h5",component:"h3"},"Response ",Object.keys(m).length>0&&r.a.createElement("span",{style:{fontWeight:"bold",float:"right",color:"#ffffff",fontSize:14,padding:5,borderRadius:5,backgroundColor:m.status>=200&&m.status<400?"#2ecc71":m.status>=400&&m.status<500?"#e67e22":"#e74c3c"}},m.status," - ",m.statusText)),r.a.createElement("br",null),r.a.createElement(B.a,null),r.a.createElement("br",null),p&&r.a.createElement(de.a,null),0===Object.keys(m).length&&!p&&r.a.createElement("div",null,r.a.createElement(C.a,{variant:"h6",gutterBottom:!0},"Belum ada hasil"),r.a.createElement(C.a,{variant:"subtitle1",gutterBottom:!0},"Hit endpoint untuk memulai request dan melihat hasil")),Object.keys(m).length>0&&!p&&r.a.createElement(se.a,null,r.a.createElement(ye.a,{value:this.state.resTabIndex,onChange:function(t,a){return e.setState({resTabIndex:a})},indicatorColor:"primary",textColor:"primary",fullWidth:!0},r.a.createElement(xe.a,{label:"Body (".concat(Object.keys(m.data).length,")")}),r.a.createElement(xe.a,{label:"Headers (".concat(Object.keys(m.headers).length,")")})),r.a.createElement(ve.a,{axis:"x",index:this.state.resTabIndex,onChangeIndex:function(t){return e.setState({resTabIndex:t})}},r.a.createElement("div",null,r.a.createElement(be.a,{name:"body",collapsed:1,style:{padding:10,borderRadius:5,marginTop:5,marginBottom:5},src:m.data})),r.a.createElement("div",null,r.a.createElement(be.a,{name:"headers",style:{padding:10,borderRadius:5,marginTop:5,marginBottom:5},src:m.headers})))))))}}]),t}(r.a.Component),Ne=Object(b.withStyles)(function(e){return{contain:{padding:20},fullUrl:{fontFamily:"monospace",fontSize:14}}})(Be),Re=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={open:!0,expandTarget:null,routes:[],models:[],endpoint:"",basepoint:"",verb:"",placeholders:{}},a.handleDrawerOpen=function(){a.setState({open:!0})},a.handleDrawerClose=function(){a.setState({open:!1,expandTarget:null})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(Se,"/app_meta")).then(function(e){return e.json()}).then(function(t){var a=t.routes,n=t.models;e.setState({routes:a,models:n})})}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null),r.a.createElement("div",{className:t.root},r.a.createElement(x.a,{position:"absolute",className:g()(t.appBar,this.state.open&&t.appBarShift)},r.a.createElement(w.a,{disableGutters:!this.state.open,className:t.toolbar},r.a.createElement(R.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:g()(t.menuButton,this.state.open&&t.menuButtonHidden)},r.a.createElement(U.a,null)),r.a.createElement(C.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:t.title},"Sirius.js Inspector"))),r.a.createElement(y.a,{variant:"permanent",classes:{paper:g()(t.drawerPaper,!this.state.open&&t.drawerPaperClose)},open:this.state.open},r.a.createElement("div",{className:t.toolbarIcon},r.a.createElement(R.a,{onClick:this.handleDrawerClose},r.a.createElement(z.a,null))),r.a.createElement(B.a,null),r.a.createElement(T.a,{component:"nav",subheader:this.state.open&&r.a.createElement(L.a,{component:"div"},"Route Resource")},this.state.routes.map(function(a,n){return r.a.createElement("div",{key:n},r.a.createElement(A.a,{button:!0,selected:e.state.expandTarget===n,onClick:function(){return e.setState({expandTarget:e.state.expandTarget===n?null:n,open:!0})}},r.a.createElement(W.a,null,e.state.expandTarget===n?r.a.createElement(X.a,null):r.a.createElement(G.a,null)),r.a.createElement(H.a,{primary:a.basepoint,secondary:"basepoint"})),a.endpoints.length&&r.a.createElement(V.a,{in:e.state.expandTarget===n,timeout:"auto",unmountOnExit:!0},r.a.createElement(T.a,{component:"div",disablePadding:!0},a.endpoints.map(function(n,o){return r.a.createElement(A.a,{button:!0,selected:e.state.endpoint+e.state.verb===n.endpoint+n.verbs,className:t.nested,key:o,onClick:function(){var t={};n.keys.forEach(function(e){t[e]=":".concat(e)}),e.setState({endpoint:n.endpoint,basepoint:a.basepoint,verb:n.verbs,placeholders:t})}},r.a.createElement(ee.a,{label:n.verbs,style:{fontSize:10,padding:0,height:25,width:50,borderRadius:3},className:t["chip".concat(n.verbs.toLowerCase())]}),r.a.createElement(H.a,{primaryTypographyProps:{style:{fontSize:11}},primary:n.endpoint,secondary:"endpoint"}))}))))})),r.a.createElement(B.a,null),r.a.createElement(T.a,{component:"nav",subheader:this.state.open&&r.a.createElement(L.a,{component:"div"},"Model Resource")},this.state.models.map(function(e,t){return r.a.createElement(A.a,{key:t,button:!0},r.a.createElement(W.a,null,r.a.createElement(Y.a,null)),r.a.createElement(H.a,{primary:e.name}))}))),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.appBarSpacer}),this.state.basepoint&&this.state.endpoint&&this.state.verb&&this.state.placeholders&&r.a.createElement(Ne,{basepoint:this.state.basepoint,endpoint:this.state.endpoint,verb:this.state.verb,placeholders:this.state.placeholders}))))}}]),t}(r.a.Component),Pe=Object(b.withStyles)(function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(h.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{backgroundColor:"#3498db",zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:300,width:"calc(100% - ".concat(300,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:300,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(m.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:7*e.spacing.unit},e.breakpoints.up("sm"),{width:9*e.spacing.unit}),content:{flexGrow:1,padding:3*e.spacing.unit,paddingTop:0,paddingBottom:0,height:"100vh",overflow:"auto",backgroundColor:"#ecf0f1"},chartContainer:{marginLeft:-22},tableContainer:{height:320},h5:{marginBottom:2*e.spacing.unit},nested:{paddingLeft:4*e.spacing.unit,fontSize:12},chipget:{color:"#ffffff",backgroundColor:"#3498db"},chippost:{color:"#ffffff",backgroundColor:"#34495e"},chipput:{color:"#ffffff",backgroundColor:"#2ecc71"},chipdelete:{color:"#ffffff",backgroundColor:"#e74c3c"}}})(Re);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(334);s.a.render(r.a.createElement(Pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[139,2,1]]]);
//# sourceMappingURL=main.e1b5cf47.chunk.js.map