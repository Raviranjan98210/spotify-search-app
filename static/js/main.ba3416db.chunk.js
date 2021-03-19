(this["webpackJsonpspotify-search-app"]=this["webpackJsonpspotify-search-app"]||[]).push([[0],{87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(16),c=a.n(s),i=a(23),o=a(21),l=a(53),u=a(19),j=a(13),b="SET_ALBUMS",p="ADD_ALBUMS",d="SET_ARTISTS",h="ADD_ARTISTS",m="SET_PLAYLIST",O="ADD_PLAYLIST",x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.albums;switch(t.type){case b:return a;case p:return Object(j.a)(Object(j.a)({},e),{},{next:a.next,items:[].concat(Object(u.a)(e.items),Object(u.a)(a.items))});default:return e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.artists;switch(t.type){case d:return a;case h:return Object(j.a)(Object(j.a)({},e),{},{next:a.next,items:[].concat(Object(u.a)(e.items),Object(u.a)(a.items))});default:return e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.playlists;switch(t.type){case m:return a;case O:return Object(j.a)(Object(j.a)({},e),{},{next:a.next,items:[].concat(Object(u.a)(e.items),Object(u.a)(a.items))});default:return e}},v=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,g=Object(o.e)(Object(o.c)({albums:x,artists:f,playlist:y}),v(Object(o.a)(l.a))),_=a(30),S=a(31),E=a(33),T=a(32),k=a(20),w=a(6),C=a(91),A=a(90),N=a(1),L=function(){return Object(N.jsx)("h1",{className:"main-heading",children:"Spotify Music Search"})},I=Object(i.b)()((function(e){var t=Object({NODE_ENV:"production",PUBLIC_URL:"/spotify-search-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLIENT_ID:"0e2d0a02137e4cc09803cf6d2455f2d2",REACT_APP_AUTHORIZE_URL:"https://accounts.spotify.com/authorize",REACT_APP_REDIRECT_URL:"https://raviranjan98210.github.io/spotify-search-app/redirect"}),a=t.REACT_APP_CLIENT_ID,r=t.REACT_APP_AUTHORIZE_URL,s=(t.REACT_APP_REDIRECT_URL,e.isValidSession),c=e.location.state,i=c&&c.session_expired;return Object(N.jsx)(n.a.Fragment,{children:s()?Object(N.jsx)(w.a,{to:"/dashboard"}):Object(N.jsxs)("div",{className:"login",children:[Object(N.jsx)(L,{}),i&&Object(N.jsx)(C.a,{variant:"info",children:"Session expired. Please login again."}),Object(N.jsx)(A.a,{variant:"info",type:"submit",onClick:function(){window.location="".concat(r,"?client_id=").concat(a,"&redirect_uri=https://raviranjan98210.github.io/spotify-search-app/redirect&response_type=token&show_dialog=true")},children:"Login to spotify"})]})})})),P=a(10),R=a.n(P),D=a(17),V=a(27),U=a.n(V),F=function(){try{var e=JSON.parse(localStorage.getItem("params"));e&&(U.a.defaults.headers.common.Authorization="Bearer ".concat(e.access_token))}catch(t){console.log("Error setting auth",t)}},B=function(e){Object(E.a)(a,e);var t=Object(T.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setExpiryTime,a=e.history,r=e.location;try{if(R.a.isEmpty(r.hash))return a.push("/dashboard");var n=r.hash.slice(1).split("&").reduce((function(e,t){var a=t.split("="),r=Object(D.a)(a,2),n=r[0],s=r[1];return e[n]=s,e}),{}),s=(new Date).getTime()+1e3*n.expires_in;localStorage.setItem("params",JSON.stringify(n)),localStorage.setItem("expiry_time",s),t(s),a.push("/dashboard")}catch(c){a.push("/")}}},{key:"render",value:function(){return null}}]),a}(n.a.Component),M=a(8),H=a.n(M),J=a(18),K=function(){var e=Object(J.a)(H.a.mark((function e(t,a){var r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(),e.next=3,U.a.get(t,a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),W=function(e){return{type:b,albums:e}},q=function(e){return{type:d,artists:e}},z=function(e){return{type:m,playlists:e}},G=function(e){return function(){var t=Object(J.a)(H.a.mark((function t(a){var r;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,K(e);case 3:return r=t.sent,t.abrupt("return",a((n=r.albums,{type:p,albums:n})));case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}var n}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},X=function(e){return function(){var t=Object(J.a)(H.a.mark((function t(a){var r;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,K(e);case 3:return r=t.sent,t.abrupt("return",a((n=r.artists,{type:h,artists:n})));case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}var n}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},Y=function(e){return function(){var t=Object(J.a)(H.a.mark((function t(a){var r;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,K(e);case 3:return r=t.sent,t.abrupt("return",a((n=r.playlists,{type:O,playlists:n})));case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}var n}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},Z=a(93),Q=a.p+"static/media/music.b2fe7d4d.jpeg",$=function(e){var t=e.albums;return Object(N.jsx)(n.a.Fragment,{children:Object.keys(t).length>0&&Object(N.jsx)("div",{className:"albums",children:t.items.map((function(e,t){return Object(N.jsx)(n.a.Fragment,{children:Object(N.jsxs)(Z.a,{style:{width:"18rem"},children:[Object(N.jsx)("a",{target:"_blank",href:e.external_urls.spotify,rel:"noopener noreferrer",className:"card-image-link",children:R.a.isEmpty(e.images)?Object(N.jsx)("img",{src:Q,alt:""}):Object(N.jsx)(Z.a.Img,{variant:"top",src:e.images[0].url,alt:""})}),Object(N.jsxs)(Z.a.Body,{children:[Object(N.jsx)(Z.a.Title,{children:e.name}),Object(N.jsx)(Z.a.Text,{children:Object(N.jsx)("small",{children:e.artists.map((function(e){return e.name})).join(", ")})})]})]})},t)}))})})},ee=function(e){var t=e.artists;return Object(N.jsx)(n.a.Fragment,{children:Object.keys(t).length>0&&Object(N.jsx)("div",{className:"artists",children:t.items.map((function(e,t){return Object(N.jsx)(n.a.Fragment,{children:Object(N.jsxs)(Z.a,{style:{width:"18rem"},children:[Object(N.jsx)("a",{target:"_blank",href:e.external_urls.spotify,rel:"noopener noreferrer",className:"card-image-link",children:R.a.isEmpty(e.images)?Object(N.jsx)("img",{src:Q,alt:""}):Object(N.jsx)(Z.a.Img,{variant:"top",src:e.images[0].url,alt:""})}),Object(N.jsx)(Z.a.Body,{children:Object(N.jsx)(Z.a.Title,{children:e.name})})]})},t)}))})})},te=function(e){var t=e.playlist;return Object(N.jsx)("div",{children:Object.keys(t).length>0&&Object(N.jsx)("div",{className:"playlist",children:t.items.map((function(e,t){return Object(N.jsx)(n.a.Fragment,{children:Object(N.jsxs)(Z.a,{style:{width:"18rem"},children:[Object(N.jsx)("a",{target:"_blank",href:e.external_urls.spotify,rel:"noopener noreferrer",className:"card-image-link",children:R.a.isEmpty(e.images)?Object(N.jsx)("img",{src:Q,alt:""}):Object(N.jsx)(Z.a.Img,{variant:"top",src:e.images[0].url,alt:""})}),Object(N.jsxs)(Z.a.Body,{children:[Object(N.jsx)(Z.a.Title,{children:e.name}),Object(N.jsx)(Z.a.Text,{children:Object(N.jsxs)("small",{children:["By ",e.owner.display_name]})})]})]})},t)}))})})},ae=function(e){var t=e.isValidSession,a=e.loadMore,r=e.result,s=e.setCategory,c=e.selectedCategory,i=r.albums,o=r.artists,l=r.playlist;return t()?Object(N.jsxs)(n.a.Fragment,{children:[Object(N.jsxs)("div",{className:"search-buttons",children:[!R.a.isEmpty(i.items)&&Object(N.jsx)("button",{className:"".concat("albums"===c?"btn active":"btn"),onClick:function(){return s("albums")},children:"Albums"}),!R.a.isEmpty(o.items)&&Object(N.jsx)("button",{className:"".concat("artists"===c?"btn active":"btn"),onClick:function(){return s("artists")},children:"Artists"}),!R.a.isEmpty(l.items)&&Object(N.jsx)("button",{className:"".concat("playlist"===c?"btn active":"btn"),onClick:function(){return s("playlist")},children:"PlayLists"})]}),Object(N.jsx)("div",{className:"".concat("albums"===c?"":"hide"),children:i&&Object(N.jsx)($,{albums:i})}),Object(N.jsx)("div",{className:"".concat("artists"===c?"":"hide"),children:o&&Object(N.jsx)(ee,{artists:o})}),Object(N.jsx)("div",{className:"".concat("playlist"===c?"":"hide"),children:l&&Object(N.jsx)(te,{playlist:l})}),!R.a.isEmpty(r[c])&&!R.a.isEmpty(r[c].next)&&Object(N.jsx)("div",{className:"load-more",onClick:function(){return a(c)},children:Object(N.jsx)(A.a,{variant:"info",type:"button",children:"Load More"})})]}):Object(N.jsx)(w.a,{to:{pathname:"/",state:{session_expired:!0}}})},re=a(92),ne=function(e){var t=Object(r.useState)(""),a=Object(D.a)(t,2),n=a[0],s=a[1],c=Object(r.useState)(""),i=Object(D.a)(c,2),o=i[0],l=i[1];return Object(N.jsx)("div",{children:Object(N.jsxs)(re.a,{onSubmit:function(t){t.preventDefault(),""!==n.trim()?(l(""),e.handleSearch(n)):l("Please enter a search term.")},children:[o&&Object(N.jsx)("p",{className:"errorMsg",children:o}),Object(N.jsxs)(re.a.Group,{controlId:"formBasicEmail",children:[Object(N.jsx)(re.a.Label,{children:"Enter search term"}),Object(N.jsx)(re.a.Control,{type:"search",name:"searchTerm",value:n,placeholder:"Search for album, artist or playlist",onChange:function(e){var t=e.target.value;s(t)},autoComplete:"off"})]}),Object(N.jsx)(A.a,{variant:"info",type:"submit",children:"Search"})]})})},se=function(e){var t=Object(r.useState)(document.createElement("div")),a=Object(D.a)(t,1)[0],n=document.querySelector("#loader");return Object(r.useEffect)((function(){n.appendChild(a).classList.add("message")}),[n,a]),Object(r.useEffect)((function(){e.show?(n.classList.remove("hide"),document.body.classList.add("loader-open")):(n.classList.add("hide"),document.body.classList.remove("loader-open"))}),[n,e.show]),c.a.createPortal(e.children,a)},ce=Object(i.b)((function(e){return{albums:e.albums,artists:e.artists,playlist:e.playlist}}))((function(e){var t=Object(r.useState)(!1),a=Object(D.a)(t,2),s=a[0],c=a[1],i=Object(r.useState)("albums"),o=Object(D.a)(i,2),l=o[0],u=o[1],j=e.isValidSession,b=e.history,p=function(){var t=Object(J.a)(H.a.mark((function t(a){var r,n,s,i;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!j()){t.next=18;break}r=e.dispatch,n=e.albums,s=e.artists,i=e.playlist,c(!0),t.t0=a,t.next="albums"===t.t0?6:"artists"===t.t0?9:"playlist"===t.t0?12:15;break;case 6:return t.next=8,r(G(n.next));case 8:return t.abrupt("break",15);case 9:return t.next=11,r(X(s.next));case 11:return t.abrupt("break",15);case 12:return t.next=14,r(Y(i.next));case 14:return t.abrupt("break",15);case 15:c(!1),t.next=19;break;case 18:b.push({pathname:"/",state:{session_expired:!0}});case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d={albums:e.albums,artists:e.artists,playlist:e.playlist};return Object(N.jsx)(n.a.Fragment,{children:j()?Object(N.jsxs)("div",{children:[Object(N.jsx)(L,{}),Object(N.jsx)(ne,{handleSearch:function(t){j()?(c(!0),e.dispatch(function(e){return function(){var t=Object(J.a)(H.a.mark((function t(a){var r,n,s,c,i;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="https://api.spotify.com/v1/search?query=".concat(encodeURIComponent(e),"&type=album,playlist,artist"),t.next=4,K(r);case 4:return n=t.sent,console.log(n),s=n.albums,c=n.artists,i=n.playlists,a(W(s)),a(q(c)),t.abrupt("return",a(z(i)));case 12:t.prev=12,t.t0=t.catch(0),console.log("error",t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()}(t)).then((function(){c(!1),u("albums")}))):b.push({pathname:"/",state:{session_expired:!0}})}}),Object(N.jsx)(se,{show:s,children:"Loading..."}),Object(N.jsx)(ae,{result:d,loadMore:p,setCategory:function(e){u(e)},selectedCategory:l,isValidSession:j})]}):Object(N.jsx)(w.a,{to:{pathname:"/",state:{session_expired:!0}}})})})),ie=function(){return Object(N.jsxs)(n.a.Fragment,{children:[Object(N.jsx)(L,{}),"Page not found. Goto ",Object(N.jsx)(k.b,{to:"/dashboard",children:"Home Page"})]})},oe=function(e){Object(E.a)(a,e);var t=Object(T.a)(a);function a(){var e;Object(_.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={expiryTime:"0"},e.setExpiryTime=function(t){e.setState({expiryTime:t})},e.isValidSession=function(){return(new Date).getTime()<e.state.expiryTime},e}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e;try{e=JSON.parse(localStorage.getItem("expiry_time"))}catch(t){e="0"}this.setState({expiryTime:e})}},{key:"render",value:function(){var e=this;return Object(N.jsx)(k.a,{children:Object(N.jsx)("div",{className:"main",children:Object(N.jsxs)(w.d,{children:[Object(N.jsx)(w.b,{path:"/",exact:!0,render:function(t){return Object(N.jsx)(I,Object(j.a)({isValidSession:e.isValidSession},t))}}),Object(N.jsx)(w.b,{path:"/redirect",render:function(t){return Object(N.jsx)(B,Object(j.a)({isValidSession:e.isValidSession,setExpiryTime:e.setExpiryTime},t))}}),Object(N.jsx)(w.b,{path:"/dashboard",render:function(t){return Object(N.jsx)(ce,Object(j.a)({isValidSession:e.isValidSession},t))}}),Object(N.jsx)(w.b,{component:ie})]})})})}}]),a}(n.a.Component);a(86),a(87);c.a.render(Object(N.jsx)(i.a,{store:g,children:Object(N.jsx)(oe,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.ba3416db.chunk.js.map