(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8869:function(e,t,n){"use strict";var r=n(9008),o=n(1664),i=n(4608),a=n.n(i),s=n(5893);t.Z=function(e){var t=e.children,n=e.home;return(0,s.jsxs)("div",{className:a().container,children:[(0,s.jsxs)(r.default,{children:[(0,s.jsx)("meta",{charSet:"UTF-8"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,s.jsx)("header",{className:a().header,children:!n&&(0,s.jsx)(o.default,{href:"/",children:(0,s.jsx)("a",{className:a().headerBackTop,children:"\u5408\u540c\u4f1a\u793e\u6b66\u85e4\u96fb\u7b97\u6a5f\u6280\u8853"})})}),(0,s.jsx)("main",{children:t}),(0,s.jsxs)("footer",{className:a().footer,children:[!n&&(0,s.jsx)("div",{className:a().footerBackTop,children:(0,s.jsx)(o.default,{href:"/",children:(0,s.jsx)("a",{className:a().footerBackTop,children:"\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\u3078"})})}),"\xa9 2022 \u5408\u540c\u4f1a\u793e\u6b66\u85e4\u96fb\u7b97\u6a5f\u6280\u8853"]})]})}},2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},a=n(1063),s=n(4651),c=n(7426);var l={};function u(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,o=s.useRouter(),d=i.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),n=r(t,2),i=n[0],s=n[1];return{href:i,as:e.as?a.resolveHref(o,e.as):s||i}}),[o,e.href,e.as]),f=d.href,_=d.as,p=e.children,h=e.replace,j=e.shallow,x=e.scroll,v=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var w=(t=i.default.Children.only(p))&&"object"===typeof t&&t.ref,b=c.useIntersection({rootMargin:"200px"}),m=r(b,2),g=m[0],L=m[1],k=i.default.useCallback((function(e){g(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,g]);i.default.useEffect((function(){var e=L&&n&&a.isLocalURL(f),t="undefined"!==typeof v?v:o&&o.locale,r=l[f+"%"+_+(t?"%"+t:"")];e&&!r&&u(o,f,_,{locale:t})}),[_,f,L,v,n,o]);var y={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:s}))}(e,o,f,_,h,j,x,v)},onMouseEnter:function(e){a.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,f,_,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof v?v:o&&o.locale,H=o&&o.isLocaleDomain&&a.getDomainLocale(_,C,o&&o.locales,o&&o.domainLocales);y.href=H||a.addBasePath(a.addLocale(_,C,o&&o.defaultLocale))}return i.default.cloneElement(t,y)};t.default=d},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,c=o.useRef(),l=o.useState(!1),u=r(l,2),d=u[0],f=u[1],_=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||d||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),s.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return o.useEffect((function(){if(!a&&!d){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),[_,d]};var o=n(7294),i=n(3447),a="undefined"!==typeof IntersectionObserver;var s=new Map},2562:function(e,t,n){"use strict";n.r(t);var r=n(9008),o=n(1664),i=n(8869),a=n(5080),s=n.n(a),c=n(5893);t.default=function(){return(0,c.jsxs)(i.Z,{home:!0,children:[(0,c.jsx)(r.default,{children:(0,c.jsx)("title",{children:"\u5408\u540c\u4f1a\u793e\u6b66\u85e4\u96fb\u7b97\u6a5f\u6280\u8853"})}),(0,c.jsxs)("section",{children:[(0,c.jsxs)("h1",{className:s().topTitle,children:["\u5408\u540c\u4f1a\u793e",(0,c.jsx)("br",{}),"\u6b66\u85e4\u96fb\u7b97\u6a5f\u6280\u8853"]}),(0,c.jsx)("div",{className:s().topDescriptionListWrapper,children:(0,c.jsxs)("dl",{className:s().topDescriptionList,children:[(0,c.jsx)("dt",{children:"\u4f1a\u793e\u540d"}),(0,c.jsx)("dd",{children:"\u5408\u540c\u4f1a\u793e\u6b66\u85e4\u96fb\u7b97\u6a5f\u6280\u8853"}),(0,c.jsx)("dt",{children:"\u4f1a\u793e\u540d \u82f1\u8a9e\u8868\u8a18"}),(0,c.jsx)("dd",{children:"Muto Computer Technology LLC"}),(0,c.jsx)("dt",{children:"\u672c\u5e97\u6240\u5728\u5730"}),(0,c.jsx)("dd",{children:"\u6771\u4eac\u90fd\u54c1\u5ddd\u533a"})]})}),(0,c.jsxs)("ul",{className:s().topAnchorList,children:[(0,c.jsx)("li",{children:(0,c.jsx)(o.default,{href:"/work",children:(0,c.jsx)("a",{children:"\u4e8b\u696d\u5185\u5bb9"})})}),(0,c.jsx)("li",{children:(0,c.jsx)(o.default,{href:"/news",children:(0,c.jsx)("a",{children:"\u304a\u77e5\u3089\u305b"})})}),(0,c.jsx)("li",{children:(0,c.jsx)(o.default,{href:"/job",children:(0,c.jsx)("a",{children:"\u63a1\u7528\u60c5\u5831\u7b49"})})}),(0,c.jsx)("li",{children:(0,c.jsx)(o.default,{href:"/contact",children:(0,c.jsx)("a",{children:"\u304a\u554f\u3044\u5408\u308f\u305b"})})})]})]})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2562)}])},4608:function(e){e.exports={container:"layout_container__2t4v2",header:"layout_header__2rhWq",headerBackTop:"layout_headerBackTop__15BF3",footer:"layout_footer__127N0",footerBackTop:"layout_footerBackTop__1EeE0"}},5080:function(e){e.exports={topTitle:"utils_topTitle__8MiEx",topDescriptionListWrapper:"utils_topDescriptionListWrapper__30D8R",topDescriptionList:"utils_topDescriptionList__2FTq-",topAnchorList:"utils_topAnchorList__3qIA1",jobHeading:"utils_jobHeading__DFodn",jobHeadingSubtext:"utils_jobHeadingSubtext__2Msjg",jobListWrapper:"utils_jobListWrapper__1Jc7H",jobContact:"utils_jobContact__gGYGf",jobBackIndex:"utils_jobBackIndex__cMFSB",jobContent:"utils_jobContent__1Z-J8",contactHeading:"utils_contactHeading__eAPyh",workHeading:"utils_workHeading__bA2Lu",workContent:"utils_workContent__2CDXU",newsHeading:"utils_newsHeading__2HqwU",newsContent:"utils_newsContent__1OB_y",newsArticle:"utils_newsArticle__IWEJk",newsArticleHeaderWrapper:"utils_newsArticleHeaderWrapper__1WAuJ",newsArticleHeader:"utils_newsArticleHeader__lrCiw",newsArticleHeaderDateArea:"utils_newsArticleHeaderDateArea__Yr4m7"}},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);