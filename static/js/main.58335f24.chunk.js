(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{272:function(e,t,c){},273:function(e,t,c){"use strict";c.r(t);var a=c(7),n=c(0),i=c.n(n),r=c(67),s=c(25),A=c.n(s),o=c(284),l=o.a.Content,d=function(e){var t=e.children;return Object(a.jsx)(o.a,{children:Object(a.jsx)(l,{className:"site-layout container",children:Object(a.jsx)("div",{className:"site-layout-background",children:t})})})},j=c(88),E=c(33),g=c(32),b=c(131),h=c.n(b);function u(e){var t=e.url,c=e.initialValue,a=e.nameType;return function(e){h.a.get(t).then((function(t){var c={type:a,data:Object(g.a)(Object(g.a)({},t.data),{},{status:"DONE"})};return e(c)})).catch((function(){var t={type:a,data:Object(g.a)(Object(g.a)({},c),{},{status:"ERROR"})};return e(t)}))}}var Q=c(112),m={Search:[],status:"LOADING",filters:{page:1,search:""}},O={Actors:"",Awards:"",BoxOffice:"",Country:"",DVD:"",Director:"",Genre:"",Language:"",Metascore:"",Plot:"",Poster:"",Production:"",Rated:"",Response:"",Runtime:"",Title:"",Type:"",Website:"",Writer:"",Year:"",imdbID:"",imdbRating:"",imdbVotes:"",Ratings:[],status:"LOADING"},B="".concat("http://www.omdbapi.com/","?apikey=").concat("faf7e5bb"),v="GET_MOVIES",I="GET_MORE_MOVIES",f="GET_MOVIES_DETAIL",x="SET_FILTERS",N=function(e){var t=e.search,c=e.page;return function(e){e({type:"SET_FILTERS",data:{filters:{search:t,page:c}}})}},p=function(){return function(e){e({type:f,data:Object(g.a)(Object(g.a)({},O),{},{status:"LOADING"})})}},S=c(280),y=c(283),C=c(81),J=c(282),R=c(52),T=c(281),k=c(285),K=c(278),D=c(286),L="data:image/png;base64,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",w=S.a.Paragraph,P=S.a.Text,Y=function(e){var t=Object(E.e)();return Object(a.jsxs)(K.a,{className:"movie-card",cover:Object(a.jsx)(T.a,{alt:e.Title,loading:"lazy",src:e.Poster,preview:!1,height:300,fallback:L,className:"object-fit-cover movie-poster","data-testid":"movie-poster"}),size:"small",bordered:!1,onClick:function(){return t.push("/".concat(e.imdbID,"/").concat(e.search))},children:[Object(a.jsx)(P,{type:"secondary",strong:!0,"data-testid":"movie-year",children:e.Year}),Object(a.jsx)(w,{ellipsis:{rows:2},strong:!0,style:{minHeight:44},"data-testid":"movie-title",children:e.Title}),Object(a.jsx)(D.a,{className:"movie-type",color:"#108ee9","data-testid":"movie-type",children:e.Type})]})},z=c(279),M=function(e){var t=e.children,c=e.loadMore,i=e.minItem,r=e.disable,s=Object(n.createRef)(),A=function(){return!r&&(!!(function(){var e,t=null===(e=s.current)||void 0===e?void 0:e.getBoundingClientRect().bottom;return!!t&&t-40<=window.innerHeight}()&&document.getElementsByClassName("page-items").length>=i)&&void c())};return Object(n.useEffect)((function(){return document.addEventListener("scroll",A),function(){document.removeEventListener("scroll",A)}})),Object(a.jsx)("div",{className:"infinite-scroll",ref:s,"data-testid":"infiniteScroll",children:t})},U=function(e){var t=e.disableInfiniteScroll,c=Object(r.c)((function(e){return e.moviesState})),n=Object(r.b)();return Object(a.jsx)(M,{minItem:10,disable:t,loadMore:function(){return n(function(e){var t=e.search,c=e.page;return function(e){e(N({search:t,page:c})),e(u({url:"".concat(B,"&s=").concat(t,"&page=").concat(c),nameType:I,initialValue:m}))}}({search:c.filters.search,page:c.filters.page+1}))},children:Object(a.jsx)(z.b,{grid:{gutter:16,column:5,xs:2,sm:16},dataSource:c.Search,loading:"LOADING"===c.status,renderItem:function(e){return Object(a.jsx)(z.b.Item,{className:"page-items",children:Object(a.jsx)(Y,Object(g.a)(Object(g.a)({},e),{},{search:c.filters.search}),e.imdbID)})}})})},F=c(99),G=c(100);var H=S.a.Text,Z=function(e){var t=e.rating,c=e.votes;return Object(a.jsxs)("div",{className:"movie-rating",children:[Object(a.jsx)(F.a,{icon:G.b,color:"#e3bb23",size:"2x"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"rating","data-testid":"movie-rating",children:t}),Object(a.jsx)("span",{className:"fs-xsmall",children:"/10"})]})}),Object(a.jsx)(H,{type:"secondary",className:"fs-small","data-testid":"movie-votes",children:c})]})]})},q=S.a.Title,X=S.a.Text,V=function(){var e=Object(E.e)(),t=Object(r.b)(),c=Object(r.c)((function(e){return e.movieDetailState})),i=Object(E.f)(),s=i.id,A=i.search;return Object(n.useEffect)((function(){document.body.scrollTop=0,document.documentElement.scrollTop=0,t(function(e){var t=e.id;return function(e){e(p()),e(u({url:"".concat(B,"&i=").concat(t),nameType:f,initialValue:O}))}}({id:s})),t(function(e){var t=e.search,c=e.page;return function(e){e(N({search:t,page:c})),e(u({url:"".concat(B,"&s=").concat(t,"&page=").concat(c),nameType:v,initialValue:m}))}}({search:A,page:1}))}),[s]),Object(a.jsxs)("div",{children:[Object(a.jsx)(y.a,{color:"#212121",size:"large",icon:Object(a.jsx)(F.a,{className:"anticon",icon:G.a}),onClick:function(){return e.push("/?s=".concat(A))},children:"Back"}),Object(a.jsx)(C.a,{gutter:[16,16],className:"movie-detail",children:Object(a.jsxs)(J.a,{active:!0,loading:"LOADING"===c.status,children:[Object(a.jsx)(R.a,{xs:24,md:5,children:Object(a.jsx)(T.a,{alt:c.Title,loading:"eager",src:c.Poster,height:300,preview:!1,width:"100%",onClick:function(){return e.push("/".concat(c.imdbID,"/").concat(A,"/preview?url=").concat(c.Poster))},className:"object-fit-cover movie-poster cursor-zoom-in",fallback:L})}),Object(a.jsx)(R.a,{xs:24,md:19,children:Object(a.jsxs)(k.a,{size:"small",children:[Object(a.jsx)(k.a.Item,{span:3,style:{paddingBottom:0},children:Object(a.jsxs)(q,{level:3,style:{marginBottom:0},children:[c.Title," ",Object(a.jsxs)(X,{type:"secondary",children:["(",c.Year,")"]})]})}),Object(a.jsx)(k.a.Item,{span:3,children:Object(a.jsxs)("div",{className:"movie-info",children:[Object(a.jsx)(X,{type:"secondary",children:c.Rated}),Object(a.jsx)(X,{type:"secondary",children:c.Runtime}),Object(a.jsx)(X,{type:"secondary",children:c.Genre})]})}),Object(a.jsx)(k.a.Item,{span:3,children:Object(a.jsx)(Z,{rating:c.imdbRating,votes:c.imdbVotes})}),Object(a.jsx)(k.a.Item,{span:3,children:c.Plot}),Object(a.jsx)(k.a.Item,{label:"Actors",span:3,children:c.Actors}),Object(a.jsx)(k.a.Item,{label:"Writer",span:3,children:c.Writer}),Object(a.jsx)(k.a.Item,{label:"Director",span:3,children:c.Director}),Object(a.jsx)(k.a.Item,{label:"Production",span:3,children:c.Production})]})})]})}),Object(a.jsx)("br",{}),Object(a.jsxs)(q,{level:3,children:['Another Result for "',A,'"']}),Object(a.jsx)(U,{disableInfiniteScroll:!0})]})};var W=function(){return Object(a.jsx)(j.a,{children:Object(a.jsxs)(d,{children:[Object(a.jsx)(E.a,{path:"/:id/:search",children:Object(a.jsx)(V,{})}),Object(a.jsx)("div",{children:"hiii test"})]})})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,287)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),i(e),r(e)}))},$=(c(272),c(68)),ee=c(159),te=c(160),ce=Object($.c)({moviesState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(g.a)(Object(g.a)({},e),{},{filters:t.data.filters});case v:return Object(g.a)(Object(g.a)({},e),{},{Search:t.data.Search,status:t.data.status});case I:return e.Search&&t.data.Search?Object(g.a)(Object(g.a)({},e),{},{Search:[].concat(Object(Q.a)(e.Search),Object(Q.a)(t.data.Search)),status:t.data.status}):e;default:return e}},movieDetailState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(g.a)(Object(g.a)({},e),t.data);default:return e}}}),ae=Object(te.createLogger)(),ne=Object($.d)(ce,Object($.a)(ee.a,ae));A.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(r.a,{store:ne,children:Object(a.jsx)(W,{})})}),document.getElementById("root")),_()}},[[273,1,2]]]);
//# sourceMappingURL=main.58335f24.chunk.js.map