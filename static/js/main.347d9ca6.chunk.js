(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{282:function(e,t,a){},283:function(e,t,a){"use strict";a.r(t);var n=a(10),c=a(0),A=a.n(c),r=a(72),i=a(25),o=a.n(i),s=a(293),E=s.a.Content,g=function(e){var t=e.children;return Object(n.jsx)(s.a,{children:Object(n.jsx)(E,{className:"site-layout container",children:Object(n.jsx)("div",{className:"site-layout-background",children:t})})})},u=a(168),d=a(291),Q=a(28),l=a(133),j=a(292),b=a(136),h=function(e){return Object(n.jsx)(j.a,Object(Q.a)(Object(Q.a)({},e),{},{className:"search-input",allowClear:!0,prefix:Object(n.jsx)(l.a,{icon:b.a,color:"#adadad"}),style:{width:300},"data-testid":"search-input"}))};function B(e){var t=e.loadingAction,a=e.action,n=e.delay,A=function(){var e=Object(c.useRef)(!0);return Object(c.useLayoutEffect)((function(){e.current&&(e.current=!1)})),e.current}();Object(c.useEffect)((function(){if(!A){t();var e=setTimeout((function(){return a()}),n||500);return function(){return clearTimeout(e)}}a()}),[a,n,A,t])}var O=a(137),f=a.n(O);function m(e){var t=e.url,a=e.initialValue,n=e.nameType;return function(e){f.a.get(t).then((function(t){var a={type:n,data:Object(Q.a)(Object(Q.a)({},t.data),{},{status:"DONE"})};return e(a)})).catch((function(){var t={type:n,data:Object(Q.a)(Object(Q.a)({},a),{},{status:"ERROR"})};return e(t)}))}}var I=a(114),v={Search:[],status:"LOADING",filters:{page:1,search:""}},S={Actors:"",Awards:"",BoxOffice:"",Country:"",DVD:"",Director:"",Genre:"",Language:"",Metascore:"",Plot:"",Poster:"",Production:"",Rated:"",Response:"",Runtime:"",Title:"",Type:"",Website:"",Writer:"",Year:"",imdbID:"",imdbRating:"",imdbVotes:"",Ratings:[],status:"LOADING"},N="".concat("http://www.omdbapi.com/","?apikey=").concat("faf7e5bb"),C="GET_MOVIES",y="GET_MORE_MOVIES",J="GET_MOVIES_DETAIL",R="SET_FILTERS",p=function(e){var t=e.search,a=e.page;return function(e){e({type:"SET_FILTERS",data:{filters:{search:t,page:a}}})}},x=a(31),K=d.a.Title,T=function(){var e=Object(x.d)(),t=new URLSearchParams(window.location.search),a=Object(r.b)(),A=Object(c.useState)(t.get("s")||void 0),i=Object(u.a)(A,2),o=i[0],s=i[1];return B({loadingAction:function(){return a((function(e){e({type:C,data:Object(Q.a)(Object(Q.a)({},v),{},{status:"LOADING"})})}))},action:function(){void 0!==o&&e.replace("?s=".concat(o)),a(function(e){var t=e.search,a=e.page;return function(e){e(p({search:t,page:a})),e(m({url:"".concat(N,"&s=").concat(t,"&page=").concat(a),nameType:C,initialValue:v}))}}({search:o||"batman",page:1}))}}),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(K,{level:1,children:"Find your favorite movie"}),Object(n.jsx)(h,{value:o,placeholder:"Ex 'Batman'",onChange:function(e){return s(e.target.value)}})]})},k=a(289),w=a(288),D=a(290),L=a(294),U=d.a.Paragraph,Y=d.a.Text,M=function(e){var t=Object(x.d)();return Object(n.jsxs)(w.a,{className:"movie-card",cover:Object(n.jsx)(D.a,{alt:e.Title,loading:"lazy",src:e.Poster,preview:!1,height:300,fallback:"data:image/png;base64,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",className:"object-fit-cover movie-poster","data-testid":"movie-poster"}),size:"small",bordered:!1,onClick:function(){return t.push("/".concat(e.imdbID,"/").concat(e.search))},children:[Object(n.jsx)(Y,{type:"secondary",strong:!0,"data-testid":"movie-year",children:e.Year}),Object(n.jsx)(U,{ellipsis:{rows:2},strong:!0,style:{minHeight:44},"data-testid":"movie-title",children:e.Title}),Object(n.jsx)(L.a,{className:"movie-type",color:"#108ee9","data-testid":"movie-type",children:e.Type})]})},F=function(e){var t=e.children,a=e.loadMore,A=e.minItem,r=e.disable,i=Object(c.createRef)(),o=function(){return!r&&(!!(function(){var e,t=null===(e=i.current)||void 0===e?void 0:e.getBoundingClientRect().bottom;return!!t&&t-40<=window.innerHeight}()&&document.getElementsByClassName("page-items").length>=A)&&void a())};return Object(c.useEffect)((function(){return document.addEventListener("scroll",o),function(){document.removeEventListener("scroll",o)}})),Object(n.jsx)("div",{className:"infinite-scroll",ref:i,"data-testid":"infiniteScroll",children:t})},P=function(e){var t=e.disableInfiniteScroll,a=Object(r.c)((function(e){return e.moviesState})),c=Object(r.b)();return Object(n.jsx)(F,{minItem:10,disable:t,loadMore:function(){return c(function(e){var t=e.search,a=e.page;return function(e){e(p({search:t,page:a})),e(m({url:"".concat(N,"&s=").concat(t,"&page=").concat(a),nameType:y,initialValue:v}))}}({search:a.filters.search,page:a.filters.page+1}))},children:Object(n.jsx)(k.b,{grid:{gutter:16,column:5,xs:2,sm:16},dataSource:a.Search,loading:"LOADING"===a.status,renderItem:function(e){return Object(n.jsx)(k.b.Item,{className:"page-items",children:Object(n.jsx)(M,Object(Q.a)(Object(Q.a)({},e),{},{search:a.filters.search}),e.imdbID)})}})})},z=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(T,{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(P,{})]})},G=a(89);var H=function(){return Object(n.jsx)(G.a,{children:Object(n.jsxs)(g,{children:[Object(n.jsx)(z,{}),Object(n.jsx)("div",{children:"hiii test"})]})})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,295)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,A=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),A(e),r(e)}))},q=(a(282),a(67)),X=a(164),V=a(165),W=Object(q.c)({moviesState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(Q.a)(Object(Q.a)({},e),{},{filters:t.data.filters});case C:return Object(Q.a)(Object(Q.a)({},e),{},{Search:t.data.Search,status:t.data.status});case y:return e.Search&&t.data.Search?Object(Q.a)(Object(Q.a)({},e),{},{Search:[].concat(Object(I.a)(e.Search),Object(I.a)(t.data.Search)),status:t.data.status}):e;default:return e}},movieDetailState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(Q.a)(Object(Q.a)({},e),t.data);default:return e}}}),_=Object(V.createLogger)(),$=Object(q.d)(W,Object(q.a)(X.a,_));o.a.render(Object(n.jsx)(A.a.StrictMode,{children:Object(n.jsx)(r.a,{store:$,children:Object(n.jsx)(H,{})})}),document.getElementById("root")),Z()}},[[283,1,2]]]);
//# sourceMappingURL=main.347d9ca6.chunk.js.map