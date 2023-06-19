"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[68],{984:function(e,t,n){n.d(t,{Df:function(){return i},M1:function(){return l},TP:function(){return p},tx:function(){return d},zi:function(){return f}});var r=n(5861),a=n(4687),c=n.n(a),o=n(1243),s="5cb4dd4cf3f1476227d92f7c4b196044",u="https://api.themoviedb.org/3",i=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(s));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(s));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a,i,p=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:1,r=p.length>2&&void 0!==p[2]?p[2]:"",e.next=4,o.Z.get("".concat(u,"/").concat(t,"?api_key=").concat(s,"&query=").concat(r,"&page=").concat(n));case 4:return a=e.sent,i=a.data,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(s));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(s));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},1068:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(5861),a=n(3433),c=n(9439),o=n(4687),s=n.n(o),u=n(984),i=n(1523),p="Loader_loader__+lRPl",f=n(184);function l(){return(0,f.jsx)("div",{className:p,children:(0,f.jsx)(i.p2,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}var d=n(2791),m=n(1686);var h,v,g=function(e){var t=e.onSubmit,n=(e.message,(0,d.useState)("")),r=(0,c.Z)(n,2),a=r[0],o=r[1];return(0,f.jsx)("div",{children:(0,f.jsxs)("form",{className:"searchbar-form",onSubmit:function(e){e.preventDefault(),""!==a.trim()?(t(a.trim()),o("")):m.Notify.warning("Enter something")},children:[(0,f.jsx)("input",{className:"searchbar-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies by name",value:a,onChange:function(e){o(e.currentTarget.value)}}),(0,f.jsx)("button",{type:"submit",className:"searchbar-button",children:"Search"})]})})},x=n(168),w=n(1109),b=w.Z.ul(h||(h=(0,x.Z)(["\ndisplay: flex;\n  flex-wrap: wrap;\n  gap: 32px 16px;\n  margin-bottom: 40px;\n"]))),y=n(7689),Z=n(1087),j=w.Z.li(v||(v=(0,x.Z)(["\ncursor:pointer;\nborder-radius:5px;\n"]))),k=function(e){var t=e.movie,n=(0,y.TH)(),r=t.title,a=t.id,c=t.poster_path,o="https://image.tmdb.org/t/p/w500/".concat(c);return(0,f.jsx)(j,{children:(0,f.jsxs)(Z.rU,{to:"/"===n.pathname?"movies/".concat(a):"".concat(a),state:{from:n},children:[(0,f.jsx)("img",{className:" movie-poster",src:o,alt:r,width:"300",height:"450"}),(0,f.jsx)("h3",{children:r})]})})},_=function(e){var t=e.movies,n=e.pageTitle;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{className:"page-title",children:n}),(0,f.jsx)(b,{children:t.map((function(e){return(0,f.jsx)(k,{movie:e},"".concat(e.id))}))})]})},N=function(){var e=(0,Z.lr)(),t=(0,c.Z)(e,2),n=t[0],o=t[1],i=(0,d.useMemo)((function(){return Object.fromEntries((0,a.Z)(n))}),[n]),p=(0,d.useState)("Enter name of movie"),h=(0,c.Z)(p,2),v=h[0],x=h[1],w=i.query,b=void 0===w?"":w,y=i.page,j=void 0===y?"1":y,k=(0,d.useState)([]),N=(0,c.Z)(k,2),S=N[0],C=N[1],F=(0,d.useState)(!1),T=(0,c.Z)(F,2),E=T[0],L=T[1],q=(0,d.useState)(""),M=(0,c.Z)(q,2),P=M[0],z=M[1];(0,d.useEffect)((function(){if(b){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t,n,r,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,L(!0),e.next=4,(0,u.zi)("search/movie",j,b);case 4:t=e.sent,n=t.results,r=t.total_results,c=t.total_pages,1===Number(j)?r>0?(m.Notify.success("Founded ".concat(r,' for "').concat(b,'"')),x("Founded ".concat(r,' for "').concat(b,'"'))):(m.Notify.warning('Founded nothing for "'.concat(b,'"')),x('Founded nothing for "'.concat(b,'"'))):x("Page ".concat(Number(j)," of ").concat(c,' for "').concat(b,'"')),console.log("results:",n),console.log(r),console.log(c),C((0,a.Z)(n)),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),z(e.t0.message),m.Notify.failure(e.t0.message);case 19:return e.prev=19,L(!1),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[0,15,19,22]])})));return function(){return e.apply(this,arguments)}}();e()}}),[j,b]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(g,{onSubmit:function(e){e.toLowerCase()!==b.toLowerCase()?(o({query:e,page:"1"}),C([])):m.Notify.warning('You are alredy viewing results for "'.concat(b,'" '))},message:v}),E&&(0,f.jsx)(l,{}),Boolean(P.length)>0&&(0,f.jsx)("p",{children:P}),S.length>0&&(0,f.jsx)(_,{movies:S,pageTitle:'Movies for "'.concat(b,'"')})]})}}}]);
//# sourceMappingURL=68.11ae27f8.chunk.js.map