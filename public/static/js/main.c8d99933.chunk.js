(this.webpackJsonpeye_sense_website=this.webpackJsonpeye_sense_website||[]).push([[0],{121:function(e,t,a){e.exports=a.p+"static/media/headerImage.d87d5630.png"},147:function(e,t,a){e.exports=a(198)},188:function(e,t){},198:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),c=a.n(r),i=a(260),l=a(131),s=a(120);a.n(s).a.load({google:{families:["Poppins"]}});var m=Object(i.a)(Object(l.a)({palette:{primary:{main:"#0097A7"}},size:{appBarHeight:"120"},font:{titleFontCategory:'2em "Poppins"',Poppins:"Poppins"}})),u=a(256),p=a(24),g=a(32),h=a(13),d=a(248),f=a(247),E=Object(f.a)((function(e){return{button:{minWidth:"150px"}}})),b=a(2);function x(e){var t=E();return o.a.createElement(d.a,Object.assign({},e,{className:Object(b.a)(t.button,e.className),variant:"contained",color:"primary",disableElevation:!0,onClick:e.onClickFunction}),e.textbefore,e.text)}var v=a(249),O=a(121),j=a.n(O),C=Object(f.a)((function(e){return{root:{width:"100%",height:e.size.appBarHeight+"px",backgroundImage:"url("+j.a+")",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",marginBottom:"35px"},title:{color:"white",fontWeight:"bold",textAlign:"center",fontFamily:e.font.Poppins+" !important"}}})),y=a(199);function k(){var e=C();return o.a.createElement(v.a,{container:!0,className:e.root,justify:"center",alignContent:"center"},o.a.createElement(v.a,{item:!0,xs:12},o.a.createElement(y.a,{variant:"h3",component:"h1",className:e.title},"Eye Sense")))}var S=a(250),N=Object(f.a)((function(e){return{containerGrid:{textAlign:"center"}}}));function P(e){var t=N(),a=Object(h.f)();return o.a.createElement("div",null,o.a.createElement(k,null),o.a.createElement(S.a,null,o.a.createElement(v.a,{container:!0,spacing:3,justify:"center",className:t.containerGrid},o.a.createElement(v.a,{item:!0,xs:12},o.a.createElement(x,{text:"COMMENCER UN TEST",onClickFunction:function(){a.push("/StartTest")}})),o.a.createElement(v.a,{item:!0,xs:12},o.a.createElement(x,{text:"CR\xc9ER UNE CAT\xc9GORIE",onClickFunction:function(){a.push("/CreateCategory")}})),o.a.createElement(v.a,{item:!0,xs:12},o.a.createElement(x,{text:"AJOUTER UNE PHOTO",onClickFunction:function(){a.push("/AddPhotoToCategory")}})),o.a.createElement(v.a,{item:!0,xs:12},o.a.createElement(x,{text:"SUPPRIMER UNE CATEGORIE",onClickFunction:function(){a.push("/DeleteCategory")}})))))}var I=a(132),w=a(95),z=a.n(w),F=a(122),R=a(12),D=function(e,t){switch(t.type){case"LOGIN":return{isConnected:!0,socket:t.payload.socket};default:return e}},A=a(123),T=a.n(A),H=o.a.createContext();function M(e){var t=function(){var e=Object(n.useReducer)(D,{isConnected:!1}),t=Object(R.a)(e,2),a=t[0],r=t[1],c=function(){var e=Object(F.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=T()("http://localhost:8080/websiteNamespace"),r({type:"LOGIN",payload:Object.assign({socket:t})});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.useEffect((function(){c()}),[]),{state:a}}();return o.a.createElement(H.Provider,{value:t}," ",e.children)}var B=a(124),G=a(125),L=a.n(G),V=a(92),_=Object(f.a)((function(e){return{main:{zIndex:5,top:"0",right:"0",position:"fixed",width:"100%",height:"100%",backgroundColor:"rgba(255,255,255,0.7)"},display:{display:"none"},loading:{}}}));function J(){var e=Object(B.a)(["\n  transform:translate(-100%,-100%);\n   left:50%;\n   top:50%;\n position:absolute;\n \n"]);return J=function(){return e},e}var W=Object(V.css)(J());var U=function(e){var t=_();return o.a.createElement("div",{className:Object(b.a)(t.main,!e.loading&&t.display)},o.a.createElement(L.a,{css:W,size:50,color:e.color,className:t.loading}))},q=a(28),Y=function(e){var t=e.component,a=(e.restricted,Object(I.a)(e,["component","restricted"])),r=Object(n.useContext)(H),c=Object(q.a)();return o.a.createElement(h.a,Object.assign({},a,{render:function(e){return r.state.isConnected?o.a.createElement(t,Object.assign({},e,{state:r.state})):o.a.createElement(U,{loading:!0,color:c.palette.primary.main})}}))},K=Object(f.a)((function(e){return{global:{height:"100%"},autoComplete:{minWidth:"350px"},textField:{width:"350px"}}})),Q=a(251),X=Object(f.a)((function(e){return{textField:{}}}));function Z(e){var t=X();return o.a.createElement(Q.a,Object.assign({},e,{variant:"outlined",className:Object(b.a)(t.textField,e.className)}))}var $=a(257),ee=a(128),te=a.n(ee),ae=a(129),ne=a.n(ae),oe=a(259),re=a(35),ce=a.n(re),ie=a(206),le=a(261),se=a(208),me=a(203),ue=a(202);function pe(e){var t=K(),a=Object(h.f)(),n=Object(q.a)(),r=o.a.useState(!0),c=Object(R.a)(r,2),i=c[0],l=c[1],s=Object(p.b)(),m=s.enqueueSnackbar,u=(s.closeSnackbar,o.a.useState({})),g=Object(R.a)(u,2),d=g[0],f=g[1],E=o.a.createRef(),b=o.a.useState(""),O=Object(R.a)(b,2),j=O[0],C=O[1],y=o.a.useState(void 0),N=Object(R.a)(y,2),P=N[0],I=N[1],w=o.a.useState(["","","","","",""]),z=Object(R.a)(w,2),F=z[0],D=z[1];return o.a.useEffect((function(){l(!0),fetch("http://localhost:8080/api/categories/getAllCategories",{method:"GET",headers:{"Content-type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){var t=e.filter((function(e){return e.allPhotos.length>=3}));f(t),l(!1)})).catch((function(e){l(!1),e.json().then((function(e){e.message&&m(e.message.message,{autoHideDuration:3e3,variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"center"}})}))}))}),[]),o.a.createElement("div",null,i?o.a.createElement(U,{loading:!0,color:n.palette.primary.main}):o.a.createElement("div",null,o.a.createElement(k,null),o.a.createElement(S.a,{className:t.global,maxWidth:"xl"},o.a.createElement(x,{textbefore:o.a.createElement(ce.a,null),text:"Retour",onClickFunction:function(){a.push("/")}}),o.a.createElement(v.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:2},o.a.createElement(v.a,{item:!0},o.a.createElement(Z,{className:t.textField,label:"Age",inputRef:E,error:Boolean(F[0]),helperText:F[0],variant:"outlined"})),o.a.createElement(v.a,{item:!0},o.a.createElement(ue.a,{variant:"outlined",className:t.textField,error:Boolean(F[1])},o.a.createElement(se.a,{id:"demo-simple-select-outlined-label"},"Sexe"),o.a.createElement(ie.a,{className:t.textField,value:j,label:"Sexe",onChange:function(e){return C(e.target.value)}},o.a.createElement(le.a,{value:"H"},"Homme"),o.a.createElement(le.a,{value:"F"},"Femme")),o.a.createElement(me.a,null,F[1]))),o.a.createElement(v.a,{item:!0},o.a.createElement($.a,{multiple:!0,id:"checkboxes-tags-demo",options:d,onChange:function(e,t){I(t)},disableCloseOnSelect:!0,getOptionLabel:function(e){return e.name},renderOption:function(e,t){var a=t.selected;return o.a.createElement(o.a.Fragment,null,o.a.createElement(oe.a,{icon:o.a.createElement(te.a,{fontSize:"small"}),checkedIcon:o.a.createElement(ne.a,{fontSize:"small"}),style:{marginRight:8},checked:a}),e.name)},className:t.autoComplete,renderInput:function(e){return o.a.createElement(Z,Object.assign({},e,{variant:"outlined",error:Boolean(F[2]),helperText:F[2],label:"S\xe9lectionner une / des cat\xe9gorie(s)",placeholder:"Favorites"}))}})),o.a.createElement(v.a,{item:!0},o.a.createElement(x,{onClickFunction:function(){l(!0);var e=!1,t=["","",""];""===E.current.value&&(e=!0,t[0]="Veuillez pr\xe9cisez l'\xe2ge"),""===j&&(e=!0,t[1]="Veuillez pr\xe9cisez le sexe"),void 0!==P&&0!==P.length||(e=!0,t[2]="Veuillez pr\xe9cisez au moins une cat\xe9gorie"),e||(localStorage.setItem("test",JSON.stringify({categorie:P,age:E.current.value,gender:j})),a.push("/Test")),l(!1),D(t)},text:"COMMENCER LE TEST"}))))))}var ge=a(37),he=Object(f.a)((function(e){return{title:{font:e.font.titleFontCategory,marginBottom:"15px"},gridContainer:{textAlign:"center"},input:{display:"none"},img:{margin:"auto",width:"100%"},accordion:{margin:"auto !important",width:"450px"},titleImg:{textAlign:"left",flex:"1"},containerAccordion:{marginTop:"25px"},deleteIcon:{color:"red"}}})),de=a(262),fe=a(253),Ee=a(254),be=a(50),xe=a.n(be),ve=a(77),Oe=a.n(ve);function je(){var e=he(),t=Object(h.f)(),a=o.a.useState([]),n=Object(R.a)(a,2),r=n[0],c=n[1],i=o.a.createRef(),l=Object(p.b)(),s=l.enqueueSnackbar;l.closeSnackbar;return o.a.createElement("div",null,o.a.createElement(k,null),o.a.createElement(S.a,{maxWidth:"xl"},o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=i.current.value;""===t?s("Veuillez pr\xe9ciser le nom de la cat\xe9gorie",{autoHideDuration:3e3,variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"center"}}):fetch("http://localhost:8080/api/categories/createCategories",{method:"POST",headers:{"Content-type":"application/json"},credentials:"include",body:JSON.stringify({nameCategory:t,allImg:r})}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){s(e.message.message,{autoHideDuration:3e3,variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"center"}})})).catch((function(e){e.json().then((function(e){e.message&&s(e.message.message,{autoHideDuration:3e3,variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"center"}})}))}))}},o.a.createElement(x,{textbefore:o.a.createElement(ce.a,null),text:"Retour",onClickFunction:function(){t.push("/")}}),o.a.createElement(v.a,{container:!0,justify:"center",className:e.gridContainer,spacing:3},o.a.createElement(v.a,{item:!0,xs:12},o.a.createElement(y.a,{variant:"h5",component:"h2",className:e.title},"Cr\xe9er une cat\xe9gorie")),o.a.createElement(v.a,{item:!0,xs:12}),o.a.createElement(v.a,{item:!0,xs:12},o.a.createElement(Z,{inputRef:i,label:"Nom de la cat\xe9gorie"})),o.a.createElement(v.a,{item:!0,xs:12},o.a.createElement("input",{accept:"image/*",className:e.input,id:"contained-button-file",multiple:!0,type:"file",onChange:function(e){for(var t=0;t<e.target.files.length;t++){var a;if(e.target.files&&e.target.files[t])!function(){a=new FileReader;var n=e.target.files[t].name;a.readAsDataURL(e.target.files[t]),a.onload=function(e){c((function(t){var a=Object(ge.a)(t);return a.push({src:e.target.result,extension:n.split(".").pop(),name:n}),a}))}}()}}}),o.a.createElement("label",{htmlFor:"contained-button-file"},o.a.createElement(x,{text:"Ajouter une photo",component:"span"}))),o.a.createElement(v.a,{item:!0,xs:12},o.a.createElement(x,{type:"submit",text:"ENVOYER"})),o.a.createElement(v.a,{item:!0,xs:12,className:e.containerAccordion},r.map((function(t,a){return o.a.createElement(de.a,{key:a,className:e.accordion},o.a.createElement(fe.a,{expandIcon:o.a.createElement(xe.a,null)},o.a.createElement(y.a,{ariant:"h5",component:"h2",className:e.titleImg},t.name),o.a.createElement(Oe.a,{className:e.deleteIcon,onClick:function(e){return function(e,t){e.stopPropagation(),c((function(e){var a=Object(ge.a)(e);return a.splice(t,1),Object(ge.a)(a)}))}(e,a)}})),o.a.createElement(Ee.a,null,o.a.createElement("img",{className:e.img,src:t.src})))})))))))}var Ce=Object(f.a)((function(e){return{gridContainer:{textAlign:"center"},title:{font:e.font.titleFontCategory,marginBottom:"15px"},input:{display:"none"},autoComplete:{display:"flex",justifyContent:"center"},accordion:{margin:"auto !important",width:"450px"},containerAccordion:{marginTop:"25px"},titleImg:{textAlign:"left",flex:"1"},img:{margin:"auto",width:"100%"},deleteIcon:{color:"red"}}}));function ye(){var e=Ce(),t=Object(h.f)(),a=o.a.useState([]),n=Object(R.a)(a,2),r=n[0],c=n[1],i=o.a.useState(!0),l=Object(R.a)(i,2),s=l[0],m=l[1],u=o.a.useState({}),g=Object(R.a)(u,2),d=g[0],f=g[1],E=o.a.useState(null),b=Object(R.a)(E,2),O=b[0],j=b[1],C=Object(p.b)(),N=C.enqueueSnackbar,P=(C.closeSnackbar,Object(q.a)());o.a.useEffect((function(){m(!0),fetch("http://localhost:8080/api/categories/getAllCategories",{method:"GET",headers:{"Content-type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){f(e),m(!1)})).catch((function(e){console.log(e),m(!1),e.json().then((function(e){e.message&&N(e.message.message,{autoHideDuration:3e3,variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"center"}})}))}))}),[]);return o.a.createElement("div",null,s?o.a.createElement(U,{loading:!0,color:P.palette.primary.main}):o.a.createElement("div",null,o.a.createElement(k,null),o.a.createElement(S.a,{maxWidth:"xl"},o.a.createElement(x,{textbefore:o.a.createElement(ce.a,null),text:"Retour",onClickFunction:function(){t.push("/")}}),o.a.createElement(v.a,{container:!0,justify:"center",className:e.gridContainer,spacing:3},o.a.createElement(v.a,{item:!0,xs:12},o.a.createElement(y.a,{className:e.title},"Ajouter une photo")),o.a.createElement(v.a,{item:!0,xs:12,className:e.autoComplete},o.a.createElement($.a,{options:d,getOptionLabel:function(e){return e.name},style:{width:300},value:O,onChange:function(e,t){return j(t)},renderInput:function(e){return o.a.createElement(Q.a,Object.assign({},e,{label:"Cat\xe9gorie",variant:"outlined"}))}})),o.a.createElement(v.a,{item:!0,xs:12},o.a.createElement("input",{accept:"image/*",className:e.input,id:"contained-button-file",multiple:!0,type:"file",onChange:function(e){for(var t=0;t<e.target.files.length;t++){var a;if(e.target.files&&e.target.files[t])!function(){a=new FileReader;var n=e.target.files[t].name;a.readAsDataURL(e.target.files[t]),a.onload=function(e){c((function(t){var a=Object(ge.a)(t);return a.push({src:e.target.result,extension:n.split(".").pop(),name:n}),a}))}}()}}}),o.a.createElement("label",{htmlFor:"contained-button-file"},o.a.createElement(x,{text:"Ajouter une photo",component:"span"}))),o.a.createElement(v.a,{item:!0,xs:12,className:e.containerAccordion},r.map((function(t,a){return o.a.createElement(de.a,{key:a,className:e.accordion},o.a.createElement(fe.a,{expandIcon:o.a.createElement(xe.a,null)},o.a.createElement(y.a,{ariant:"h5",component:"h2",className:e.titleImg},t.name),o.a.createElement(Oe.a,{className:e.deleteIcon,onClick:function(e){return function(e,t){e.stopPropagation(),c((function(e){var a=Object(ge.a)(e);return a.splice(t,1),Object(ge.a)(a)}))}(e,a)}})),o.a.createElement(Ee.a,null,o.a.createElement("img",{className:e.img,src:t.src})))}))),o.a.createElement(v.a,{item:!0,xs:12},o.a.createElement(x,{type:"submit",text:"ENVOYER",onClickFunction:function(){null===O||null===r?N("NONONON",{autoHideDuration:3e3,variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"center"}}):(m(!0),fetch("http://localhost:8080/api/categories/addPhotos",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({categorie:O,allImg:r})}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){m(!1),N(e.message.message,{autoHideDuration:3e3,variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"center"}})})).catch((function(e){m(!1),e.json().then((function(e){e.message&&N(e.message.message,{autoHideDuration:3e3,variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"center"}})}))})))}}))))))}var ke=Object(f.a)((function(e){return{img:{width:"100%",height:"200px"}}}));Object(f.a)((function(e){return{img:{height:"100%",width:"100%"},elevation:{height:"348px",width:"424px"},container:{color:"white",height:"348px",width:"424px",fontFamily:"Roboto"},Button:{color:"white",backgroundColor:"#006876",fontSize:"15px",height:"17px",marginBottom:"50px",marginRight:"1px",marginLeft:"1px"},titre:{fontSize:"18px",fontWeight:"bold",marginBottom:"20px"},description:{color:"black",fontSize:"7px",marginBottom:"50px"},prix:{fontWeight:"bold",fontSize:"30px",textAlign:"right",color:"black"},containerImg:{height:"100%",width:"100%"},containerRight:{height:"100%",width:"100%",backgroundColor:"#56C7D6",padding:"20px"}}})),a(246);function Se(e){var t=ke(),a=Object(h.f)(),n=Object(q.a)(),r=o.a.useState(!0),c=Object(R.a)(r,2),i=c[0],l=c[1],s=Object(p.b)(),m=(s.enqueueSnackbar,s.closeSnackbar,o.a.useState([])),u=Object(R.a)(m,2),g=u[0],d=u[1],f=function(e){var t,a,n;for(n=e.length-1;n>0;n--)t=Math.floor(Math.random()*(n+1)),a=e[n],e[n]=e[t],e[t]=a;d(e)};o.a.useEffect((function(){b();var t=JSON.parse(localStorage.getItem("test")),n=t.categorie,o=t.categorie.length,r=t.categorie.length;l(!1),f(n[0].allPhotos),r-=1;var c=setInterval((function(){0===r?(e.state.socket.emit("test finished",!0),!1,a.push("/")):(f(n[o-r].allPhotos),r-=1)}),5e3);return function(){return clearInterval(c)}}),[]);var E=[],b=function(){for(var t=JSON.parse(localStorage.getItem("test")),a=[],n=0;n<t.categorie.length;n++)a.push(t.categorie[n].name);console.log(a);var o={age:t.age,gender:t.gender,categorie:a};e.state.socket.emit("send user data",o),!0};return o.a.createElement("div",null,i?o.a.createElement(U,{loading:!0,color:n.palette.primary.main}):o.a.createElement("div",null,o.a.createElement(k,null),o.a.createElement(S.a,null,o.a.createElement(v.a,{container:!0,spacing:4},g.map((function(a,n){return o.a.createElement(v.a,{item:!0,xs:4},o.a.createElement("img",{className:t.img,id:a,onLoad:function(t){return function(t,a,n){var o=t.target.getBoundingClientRect();E.push({_id:n,topRight:{x:o.right,y:o.top},topLeft:{x:o.left,y:o.top},bottomRight:{x:o.right,y:o.bottom},bottomLeft:{x:o.left,y:o.bottom}}),E.length===g.length&&(e.state.socket.emit("send photos",E),E=[])}(t,0,a)},src:"http://localhost:8080/api/photos/getPhotos?id="+a}))}))))))}var Ne=a(78),Pe=a(96),Ie=Object(f.a)((function(e){return{img:{margin:"auto",width:"100%"},accordion:{margin:"auto !important",width:"450px"},containerGrid:{textAlign:"center",marginTop:"10px"}}})),we=a(255),ze=a(79),Fe=a(258),Re=Object(f.a)((function(e){return{root:{position:"absolute",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"max-content",height:"auto",textAlign:"center"},title:{marginBottom:"25px"}}}));function De(e){var t=Re();return o.a.createElement(Fe.a,{open:e.openModalDeleteCategories},o.a.createElement("div",{className:t.root},o.a.createElement(v.a,{container:!0,justify:"center"},o.a.createElement(v.a,{item:!0,xs:12},o.a.createElement(y.a,{component:"h1",variant:"h6",color:"inherit",className:t.title},"Voulez-vous vraiment supprimer ces cat\xe9gories ?")),o.a.createElement(v.a,{item:!0,xs:6},o.a.createElement(x,{text:"Valider",onClickFunction:function(){var t=e.getCategoriesToDelete();e.postCategories(t),e.setOpenModalDeleteCategories(!1)}})),o.a.createElement(v.a,{item:!0,xs:6},o.a.createElement(x,{text:"Retour",onClickFunction:function(){e.setOpenModalDeleteCategories(!1)}})))))}var Ae=Object(f.a)((function(e){return{root:{position:"absolute",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"max-content",height:"auto",textAlign:"center"},title:{marginBottom:"25px"}}}));function Te(e){var t=Ae();return o.a.createElement(Fe.a,{open:e.openModalDeletePhoto},o.a.createElement("div",{className:t.root},o.a.createElement(v.a,{container:!0,justify:"center"},o.a.createElement(v.a,{item:!0,xs:12},o.a.createElement(y.a,{component:"h1",variant:"h6",color:"inherit",className:t.title},"Voulez-vous vraiment supprimer cette photo ?")),o.a.createElement(v.a,{item:!0,xs:6},o.a.createElement(x,{text:"Valider",onClickFunction:function(){e.postPhoto(e.photo),e.setOpenModalDeletePhoto(!1)}})),o.a.createElement(v.a,{item:!0,xs:6},o.a.createElement(x,{text:"Retour",onClickFunction:function(){e.setOpenModalDeletePhoto(!1)}})))))}function He(){var e=Ie(),t=Object(q.a)(),a=Object(h.f)(),n=Object(p.b)(),r=n.enqueueSnackbar,c=(n.closeSnackbar,o.a.useState({})),i=Object(R.a)(c,2),l=i[0],s=i[1],m=o.a.useState({}),u=Object(R.a)(m,2),g=u[0],d=u[1],f=o.a.useState(!0),E=Object(R.a)(f,2),b=E[0],O=E[1],j=o.a.useState({}),C=Object(R.a)(j,2),N=C[0],P=C[1],I=o.a.useState(!1),w=Object(R.a)(I,2),z=w[0],F=w[1],D=o.a.useState(!1),A=Object(R.a)(D,2),T=A[0],H=A[1];o.a.useEffect((function(){B()}),[]);var M=function(e){P(Object(Pe.a)(Object(Pe.a)({},N),{},Object(Ne.a)({},e.target.name,e.target.checked)))};function B(){O(!0),fetch("http://localhost:8080/api/categories/getAllCategories",{method:"GET",headers:{"Content-type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){s(e),O(!1)})).catch((function(e){O(!1),e.json().then((function(e){e.message&&r(e.message.message,{autoHideDuration:3e3,variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"center"}})}))}))}return o.a.createElement("div",null,b?o.a.createElement(U,{loading:!0,color:t.palette.primary.main}):o.a.createElement("div",null,o.a.createElement(De,{openModalDeleteCategories:z,setOpenModalDeleteCategories:F,getCategoriesToDelete:function(){var e=[];return Object.keys(N).forEach((function(t){!0===N[t]&&e.push(t.split("_")[0])})),e},postCategories:function(e){O(!0),e===[]?r("Veuillez choisir des objets \xe0 supprimer",{autoHideDuration:3e3,variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"center"}}):fetch("http://localhost:8080/api/categories/deleteCategories",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({arrayId:e})}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){B(),O(!1),P([]),r(e.message.message,{autoHideDuration:3e3,variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"center"}})})).catch((function(e){O(!1),P([]),e.json().then((function(e){e.message&&r(e.message.message,{autoHideDuration:3e3,variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"center"}})}))}))}}),o.a.createElement(Te,{openModalDeletePhoto:T,setOpenModalDeletePhoto:H,photo:g,postPhoto:function(e){O(!0),fetch("http://localhost:8080/api/categories/deletePhotos",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({idImage:e.idImage,idCategory:e.idCategory})}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){B(),O(!1),d({}),r(e.message.message,{autoHideDuration:3e3,variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"center"}})})).catch((function(e){O(!1),d({}),e.json().then((function(e){e.message&&r(e.message.message,{autoHideDuration:3e3,variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"center"}})}))}))}}),o.a.createElement(k,null),o.a.createElement(S.a,{maxWidth:"xl"},o.a.createElement(x,{textbefore:o.a.createElement(ce.a,null),text:"Retour",onClickFunction:function(){a.push("/")}}),l.map((function(a,n){return o.a.createElement(de.a,{key:n,className:e.accordion},o.a.createElement(fe.a,{expandIcon:o.a.createElement(xe.a,null)},o.a.createElement(we.a,{className:e.categoryName,"aria-label":a._id+"_label",onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},control:o.a.createElement(oe.a,{icon:o.a.createElement(ze.a,null),checkedIcon:o.a.createElement(ze.b,null),name:a._id+"_checkbox",color:t.palette.primary.main,onChange:M})}),o.a.createElement(y.a,{variant:"h5",component:"h2"},a.name)),o.a.createElement(Ee.a,null,o.a.createElement(v.a,null,a.allPhotos.map((function(t,n){return o.a.createElement(v.a,{item:!0,xs:12},o.a.createElement("img",{key:n,className:e.img,src:"http://localhost:8080/api/photos/getPhotos?id="+t,onClick:function(){d({idImage:t,idCategory:a._id}),H(!0)}}))})))))})),o.a.createElement(v.a,{container:!0,spacing:3,justify:"center",className:e.containerGrid},o.a.createElement(v.a,{item:!0,xs:12},o.a.createElement(x,{text:"Supprimer",onClickFunction:function(){F(!0)}}))))))}function Me(){return o.a.createElement(g.a,null,o.a.createElement(h.c,null,o.a.createElement(Y,{path:"/CreateCategory",exact:!0,component:je}),o.a.createElement(Y,{path:"/DeleteCategory",exact:!0,component:He}),o.a.createElement(Y,{path:"/AddPhotoToCategory",exact:!0,component:ye}),o.a.createElement(Y,{path:"/StartTest",exact:!0,component:pe}),o.a.createElement(Y,{path:"/Test",exact:!0,component:Se}),o.a.createElement(Y,{path:"/",exact:!0,component:P}),o.a.createElement(Y,{path:"*",exact:!0,component:P})))}var Be=a(204),Ge=a(130),Le=a.n(Ge),Ve=o.a.createRef(),_e=function(e){return function(){Ve.current.closeSnackbar(e)}};c.a.render(o.a.createElement(M,null,o.a.createElement(u.a,{theme:m},o.a.createElement(p.a,{maxSnack:4,ref:Ve,action:function(e){return o.a.createElement(Be.a,{onClick:_e(e)},o.a.createElement(Le.a,{fontSize:"small",style:{color:"white"}}))}},o.a.createElement(Me,null)))),document.getElementById("root"))}},[[147,1,2]]]);
//# sourceMappingURL=main.c8d99933.chunk.js.map