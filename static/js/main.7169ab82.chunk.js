(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{333:function(e,t,c){},334:function(e,t,c){"use strict";c.r(t);var a=c(7),n=c(0),r=c.n(n),i=c(58),s=c(24),o=c.n(s),A=c(344),l=A.a.Content,j=function(e){var t=e.children;return Object(a.jsx)(A.a,{children:Object(a.jsx)(l,{className:"site-layout container",children:Object(a.jsx)("div",{className:"site-layout-background",children:t})})})},d=c(193),b=c(341),u=c(30),g=c(81),E=c(345),h=c(85),O=function(e){return Object(a.jsx)(E.a,Object(u.a)(Object(u.a)({},e),{},{className:"search-input",allowClear:!0,prefix:Object(a.jsx)(g.a,{icon:h.b,color:"#adadad"}),style:{width:300},"data-testid":"search-input"}))};function Q(e){var t=e.loadingAction,c=e.action,a=e.delay,r=function(){var e=Object(n.useRef)(!0);return Object(n.useLayoutEffect)((function(){e.current&&(e.current=!1)})),e.current}();Object(n.useEffect)((function(){if(!r){t();var e=setTimeout((function(){return c()}),a||500);return function(){return clearTimeout(e)}}c()}),[c,a,r,t])}var m=c(168),v=c.n(m);function f(e){var t=e.url,c=e.initialValue,a=e.nameType;return function(e){v.a.get(t).then((function(t){var c={type:a,data:Object(u.a)(Object(u.a)({},t.data),{},{status:"DONE"})};return e(c)})).catch((function(){var t={type:a,data:Object(u.a)(Object(u.a)({},c),{},{status:"ERROR"})};return e(t)}))}}var x=c(137),B={Search:[],status:"LOADING",filters:{page:1,search:""}},I={Actors:"",Awards:"",BoxOffice:"",Country:"",DVD:"",Director:"",Genre:"",Language:"",Metascore:"",Plot:"",Poster:"",Production:"",Rated:"",Response:"",Runtime:"",Title:"",Type:"",Website:"",Writer:"",Year:"",imdbID:"",imdbRating:"",imdbVotes:"",Ratings:[],status:"LOADING"},p="".concat("https://www.omdbapi.com/","?apikey=").concat("faf7e5bb"),N="GET_MOVIES",y="GET_MORE_MOVIES",S="GET_MOVIES_DETAIL",C="SET_FILTERS",J=function(e){var t=e.search,c=e.page;return function(e){e({type:"SET_FILTERS",data:{filters:{search:t,page:c}}})}},R=function(e){var t=e.search,c=e.page;return function(e){e(J({search:t,page:c})),e(f({url:"".concat(p,"&s=").concat(t,"&page=").concat(c),nameType:N,initialValue:B}))}},T=function(){return function(e){e({type:S,data:Object(u.a)(Object(u.a)({},I),{},{status:"LOADING"})})}},k=c(33),K=function(){var e=Object(k.h)();return new URLSearchParams(e.search)},D=b.a.Title,w=function(){var e=Object(k.g)(),t=K(),c=Object(i.b)(),r=Object(n.useState)(t.get("s")||void 0),s=Object(d.a)(r,2),o=s[0],A=s[1];Q({loadingAction:function(){return c((function(e){e({type:N,data:Object(u.a)(Object(u.a)({},B),{},{status:"LOADING"})})}))},action:function(){c(R({search:o||"batman",page:1}))}});return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(D,{level:1,children:"Find your favorite movie"}),Object(a.jsx)(O,{value:o,placeholder:"Ex 'Batman'",onChange:function(t){void 0!==o&&e.replace("?s=".concat(o)),A(t.target.value)}})]})},L=c(340),P=c(339),Y=c(342),z=c(347),U="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",M=b.a.Paragraph,F=b.a.Text,G=function(e){var t=Object(k.g)();return Object(a.jsxs)(P.a,{className:"movie-card",cover:Object(a.jsx)(Y.a,{alt:e.Title,loading:"lazy",src:e.Poster,preview:!1,height:300,fallback:U,className:"object-fit-cover movie-poster","data-testid":"movie-poster"}),size:"small",bordered:!1,onClick:function(){return t.push("/".concat(e.imdbID,"/").concat(e.search))},children:[Object(a.jsx)(F,{type:"secondary",strong:!0,"data-testid":"movie-year",children:e.Year}),Object(a.jsx)(M,{ellipsis:{rows:2},strong:!0,style:{minHeight:44},"data-testid":"movie-title",children:e.Title}),Object(a.jsx)(z.a,{className:"movie-type",color:"#108ee9","data-testid":"movie-type",children:e.Type})]})},H=function(e){var t=e.children,c=e.loadMore,r=e.minItem,i=e.disable,s=Object(n.createRef)(),o=function(){return!i&&(!!(function(){var e,t=null===(e=s.current)||void 0===e?void 0:e.getBoundingClientRect().bottom;return!!t&&t-40<=window.innerHeight}()&&document.getElementsByClassName("page-items").length>=r)&&void c())};return Object(n.useEffect)((function(){return document.addEventListener("scroll",o),function(){document.removeEventListener("scroll",o)}})),Object(a.jsx)("div",{className:"infinite-scroll",ref:s,"data-testid":"infiniteScroll",children:t})},Z=function(e){var t=e.disableInfiniteScroll,c=Object(i.c)((function(e){return e.moviesState})),n=Object(i.b)();return Object(a.jsx)(H,{minItem:10,disable:t,loadMore:function(){return n(function(e){var t=e.search,c=e.page;return function(e){e(J({search:t,page:c})),e(f({url:"".concat(p,"&s=").concat(t,"&page=").concat(c),nameType:y,initialValue:B}))}}({search:c.filters.search,page:c.filters.page+1}))},children:Object(a.jsx)(L.b,{grid:{gutter:16,column:5,xs:2,sm:16},dataSource:c.Search,loading:"LOADING"===c.status,renderItem:function(e){return Object(a.jsx)(L.b.Item,{className:"page-items",children:Object(a.jsx)(G,Object(u.a)(Object(u.a)({},e),{},{search:c.filters.search}),e.imdbID)})}})})},q=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(w,{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(Z,{})]})},X=c(72),V=c(192),W=c(90),_=c(343),$=c(56),ee=c(346);var te=b.a.Text,ce=function(e){var t=e.rating,c=e.votes;return Object(a.jsxs)("div",{className:"movie-rating",children:[Object(a.jsx)(g.a,{icon:h.c,color:"#e3bb23",size:"2x"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"rating","data-testid":"movie-rating",children:t}),Object(a.jsx)("span",{className:"fs-xsmall",children:"/10"})]})}),Object(a.jsx)(te,{type:"secondary",className:"fs-small","data-testid":"movie-votes",children:c})]})]})},ae=b.a.Title,ne=b.a.Text,re=function(){var e=Object(k.g)(),t=Object(i.b)(),c=Object(i.c)((function(e){return e.movieDetailState})),r=Object(k.i)(),s=r.id,o=r.search;return Object(n.useEffect)((function(){document.body.scrollTop=0,document.documentElement.scrollTop=0,t(function(e){var t=e.id;return function(e){e(T()),e(f({url:"".concat(p,"&i=").concat(t),nameType:S,initialValue:I}))}}({id:s})),t(R({search:o,page:1}))}),[s]),Object(a.jsxs)("div",{children:[Object(a.jsx)(V.a,{color:"#212121",size:"large",icon:Object(a.jsx)(g.a,{className:"anticon",icon:h.a}),onClick:function(){return e.push("/?s=".concat(o))},children:"Back"}),Object(a.jsx)(W.a,{gutter:[16,16],className:"movie-detail",children:Object(a.jsxs)(_.a,{active:!0,loading:"LOADING"===c.status,children:[Object(a.jsx)($.a,{xs:24,md:5,children:Object(a.jsx)(Y.a,{alt:c.Title,loading:"eager",src:c.Poster,height:300,preview:!1,width:"100%",onClick:function(){return e.push("/".concat(c.imdbID,"/").concat(o,"/preview?url=").concat(c.Poster))},className:"object-fit-cover movie-poster cursor-zoom-in",fallback:U})}),Object(a.jsx)($.a,{xs:24,md:19,children:Object(a.jsxs)(ee.a,{size:"small",children:[Object(a.jsx)(ee.a.Item,{span:3,style:{paddingBottom:0},children:Object(a.jsxs)(ae,{level:3,style:{marginBottom:0},children:[c.Title," ",Object(a.jsxs)(ne,{type:"secondary",children:["(",c.Year,")"]})]})}),Object(a.jsx)(ee.a.Item,{span:3,children:Object(a.jsxs)("div",{className:"movie-info",children:[Object(a.jsx)(ne,{type:"secondary",children:c.Rated}),Object(a.jsx)(ne,{type:"secondary",children:c.Runtime}),Object(a.jsx)(ne,{type:"secondary",children:c.Genre})]})}),Object(a.jsx)(ee.a.Item,{span:3,children:Object(a.jsx)(ce,{rating:c.imdbRating,votes:c.imdbVotes})}),Object(a.jsx)(ee.a.Item,{span:3,children:c.Plot}),Object(a.jsx)(ee.a.Item,{label:"Actors",span:3,children:c.Actors}),Object(a.jsx)(ee.a.Item,{label:"Writer",span:3,children:c.Writer}),Object(a.jsx)(ee.a.Item,{label:"Director",span:3,children:c.Director}),Object(a.jsx)(ee.a.Item,{label:"Production",span:3,children:c.Production})]})})]})}),Object(a.jsx)("br",{}),Object(a.jsxs)(ae,{level:3,children:['Another Result for "',o,'"']}),Object(a.jsx)(Z,{disableInfiniteScroll:!0})]})},ie=c(103),se=c.n(ie),oe=function(){var e=Object(k.g)(),t=K().get("url");return Object(a.jsx)(se.a,{centered:!0,visible:!0,footer:!1,onCancel:function(){return e.goBack()},bodyStyle:{padding:0},children:t&&Object(a.jsx)(Y.a,{fallback:U,src:t,alt:"Preview",width:"100%"})})};var Ae=function(){return Object(a.jsx)(X.a,{basename:"/",children:Object(a.jsx)(j,{children:Object(a.jsxs)(k.d,{children:[Object(a.jsx)(k.b,{path:"/",exact:!0,children:Object(a.jsx)(q,{})}),Object(a.jsx)(k.b,{path:"/:id/:search",children:Object(a.jsx)(re,{})}),Object(a.jsx)(k.b,{path:"/:id/:search/preview",children:Object(a.jsx)(oe,{})}),Object(a.jsx)(k.a,{to:"/"})]})})})},le=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,348)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),r(e),i(e)}))},je=(c(333),c(74)),de=c(188),be=c(189),ue=Object(je.c)({moviesState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(u.a)(Object(u.a)({},e),{},{filters:t.data.filters});case N:return Object(u.a)(Object(u.a)({},e),{},{Search:t.data.Search,status:t.data.status});case y:return e.Search&&t.data.Search?Object(u.a)(Object(u.a)({},e),{},{Search:[].concat(Object(x.a)(e.Search),Object(x.a)(t.data.Search)),status:t.data.status}):e;default:return e}},movieDetailState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(u.a)(Object(u.a)({},e),t.data);default:return e}}}),ge=Object(be.createLogger)(),Ee=Object(je.d)(ue,Object(je.a)(de.a,ge));o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(i.a,{store:Ee,children:Object(a.jsx)(Ae,{})})}),document.getElementById("root")),le()}},[[334,1,2]]]);
//# sourceMappingURL=main.7169ab82.chunk.js.map