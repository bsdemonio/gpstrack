(this.webpackJsonpgpsTrack=this.webpackJsonpgpsTrack||[]).push([[1],{113:function(e,n,t){},124:function(e,n,t){},125:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),c=t(33),i=t.n(c),a=t(25),s=t(2),l=t(70),j=t(18),d=(t(93),t(3)),h=function(e,n){e&&e.length>0&&localStorage.setItem(n,e)},b=function(e){if(localStorage.getItem(e))return localStorage.getItem(e)},u=b("name"),O=function(){return Object(d.jsxs)(s.i,{children:[Object(d.jsx)(s.d,{children:Object(d.jsx)(s.p,{children:Object(d.jsx)(s.o,{children:"Informacion"})})}),Object(d.jsxs)(s.c,{fullscreen:!0,children:[Object(d.jsx)(s.d,{collapse:"condense",children:Object(d.jsx)(s.p,{children:Object(d.jsx)(s.o,{size:"large",children:"Informacion personal"})})}),Object(d.jsxs)(s.g,{children:[Object(d.jsx)(s.h,{children:"Celular"}),Object(d.jsx)(s.f,{value:b("cellphone"),placeholder:"Numero de Celular",onIonChange:function(e){return h(e.detail.value,"cellphone")}})]}),Object(d.jsxs)(s.g,{children:[Object(d.jsx)(s.h,{children:"Nombre"}),Object(d.jsx)(s.f,{value:u,placeholder:"Nombre",onIonChange:function(e){return h(e.detail.value,"name")}})]}),Object(d.jsxs)(s.g,{children:[Object(d.jsx)(s.h,{children:"Email"}),Object(d.jsx)(s.f,{value:b("email"),placeholder:"Email",onIonChange:function(e){return h(e.detail.value,"email")}})]}),Object(d.jsxs)(s.g,{children:[Object(d.jsx)(s.h,{children:"Profile"}),Object(d.jsx)(s.f,{value:b("profile"),placeholder:"Profile",onIonChange:function(e){return h(e.detail.value,"profile")}})]}),Object(d.jsx)(s.g,{children:Object(d.jsx)(s.b,{expand:"block",color:"primary",onClick:function(){localStorage.getItem("cellphone")?alert("Numero guardado !"):alert("Proporcione un numero valido ! ")},children:"Guardar"})})]})]})},p=t(19),x=t(72),g=t.n(x),m=t(42),f=t.n(m),y=t(74);t(113);y.a.enable();var v=function(){var e=Object(r.useState)("N/A"),n=Object(p.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)("N/A"),i=Object(p.a)(c,2),a=i[0],l=i[1],j=Object(r.useState)("N/A"),h=Object(p.a)(j,2),b=h[0],u=h[1];return Object(d.jsxs)(s.i,{children:[Object(d.jsx)(s.d,{children:Object(d.jsx)(s.p,{children:Object(d.jsx)(s.o,{children:"Iniciar Captura de Coordenadas"})})}),Object(d.jsxs)(s.c,{fullscreen:!0,children:[Object(d.jsx)(s.d,{collapse:"condense",children:Object(d.jsx)(s.p,{children:Object(d.jsx)(s.o,{size:"large",children:"Coordenadas"})})}),Object(d.jsxs)(s.g,{children:[Object(d.jsx)(s.h,{children:"Latitud"}),Object(d.jsx)(s.h,{children:t})]}),Object(d.jsxs)(s.g,{children:[Object(d.jsx)(s.h,{children:"Longitud"}),Object(d.jsx)(s.h,{children:a})]}),Object(d.jsxs)(s.g,{children:[Object(d.jsx)(s.h,{children:"Timestamp"}),Object(d.jsx)(s.h,{children:b})]}),Object(d.jsx)(s.g,{children:Object(d.jsx)(s.b,{expand:"block",color:"primary",onClick:function(){setInterval((function(){navigator.geolocation.getCurrentPosition((function(e){var n=e.coords.latitude.toString(),t=e.coords.longitude.toString(),r=localStorage.getItem("cellphone"),c=localStorage.getItem("name"),i=localStorage.getItem("email"),a=localStorage.getItem("profile");o(n),l(t),u(f()().format("DD-MM-YYYY HH:mm:ss a").toString());var s=new FormData;s.append("cellNumber",r),s.append("name",c),s.append("email",i),s.append("profile",a),s.append("lat",n),s.append("long",t),s.append("date",f()().format("DD-MM-YYYY")),s.append("time",f()().format("HH:mm:ss a")),g.a.post("https://com-geored.uaa.mx/save",s).then((function(n){o(e.coords.latitude.toString()),l(e.coords.longitude.toString()),u(f()().format("DD-MM-YYYY HH:mm:ss a").toString()),console.log(n)}))}))}),6e3)},children:"Guardar"})})]})]})},_=(t(114),t(115),t(116),t(117),t(118),t(119),t(120),t(121),t(122),t(123),t(124),function(){return Object(d.jsx)(s.a,{children:Object(d.jsx)(l.a,{children:Object(d.jsxs)(s.n,{children:[Object(d.jsxs)(s.k,{children:[Object(d.jsx)(a.b,{exact:!0,path:"/tab1",children:Object(d.jsx)(O,{})}),Object(d.jsx)(a.b,{exact:!0,path:"/tab2",children:Object(d.jsx)(v,{})}),Object(d.jsx)(a.b,{exact:!0,path:"/",children:Object(d.jsx)(a.a,{to:"/tab1"})})]}),Object(d.jsxs)(s.l,{slot:"bottom",children:[Object(d.jsxs)(s.m,{tab:"tab1",href:"/tab1",children:[Object(d.jsx)(s.e,{icon:j.o}),Object(d.jsx)(s.h,{children:"Capturar datos"})]}),Object(d.jsxs)(s.m,{tab:"tab2",href:"/tab2",children:[Object(d.jsx)(s.e,{icon:j.h}),Object(d.jsx)(s.h,{children:"Captura de GPS"})]})]})]})})})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=function(e){e&&e instanceof Function&&t.e(58).then(t.bind(null,188)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),r(e),o(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(_,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),S()},83:function(e,n,t){var r={"./ion-action-sheet.entry.js":[128,5],"./ion-alert.entry.js":[129,6],"./ion-app_8.entry.js":[130,7],"./ion-avatar_3.entry.js":[131,17],"./ion-back-button.entry.js":[132,18],"./ion-backdrop.entry.js":[133,43],"./ion-button_2.entry.js":[134,19],"./ion-card_5.entry.js":[135,20],"./ion-checkbox.entry.js":[136,21],"./ion-chip.entry.js":[137,22],"./ion-col_3.entry.js":[138,44],"./ion-datetime_3.entry.js":[139,10],"./ion-fab_3.entry.js":[140,23],"./ion-img.entry.js":[141,45],"./ion-infinite-scroll_2.entry.js":[142,46],"./ion-input.entry.js":[143,24],"./ion-item-option_3.entry.js":[144,25],"./ion-item_8.entry.js":[145,26],"./ion-loading.entry.js":[146,27],"./ion-menu_3.entry.js":[147,28],"./ion-modal.entry.js":[148,8],"./ion-nav_2.entry.js":[149,14],"./ion-popover.entry.js":[150,9],"./ion-progress-bar.entry.js":[151,29],"./ion-radio_2.entry.js":[152,30],"./ion-range.entry.js":[153,31],"./ion-refresher_2.entry.js":[154,11],"./ion-reorder_2.entry.js":[155,16],"./ion-ripple-effect.entry.js":[156,47],"./ion-route_4.entry.js":[157,32],"./ion-searchbar.entry.js":[158,33],"./ion-segment_2.entry.js":[159,34],"./ion-select_3.entry.js":[160,35],"./ion-slide_2.entry.js":[161,48],"./ion-spinner.entry.js":[162,13],"./ion-split-pane.entry.js":[163,49],"./ion-tab-bar_2.entry.js":[164,36],"./ion-tab_2.entry.js":[165,15],"./ion-text.entry.js":[166,37],"./ion-textarea.entry.js":[167,38],"./ion-toast.entry.js":[168,39],"./ion-toggle.entry.js":[169,12],"./ion-virtual-scroll.entry.js":[170,50]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(r)},o.id=83,e.exports=o},85:function(e,n,t){var r={"./ion-icon.entry.js":[171,57]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(r)},o.id=85,e.exports=o},93:function(e,n,t){}},[[125,3,4]]]);
//# sourceMappingURL=main.8eba21d9.chunk.js.map