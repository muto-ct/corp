(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[771],{8869:function(e,t,n){"use strict";var r=n(9008),o=n(1664),a=n(4608),i=n.n(a),s=n(5893);t.Z=function(e){var t=e.children,n=e.home;return(0,s.jsxs)("div",{className:i().container,children:[(0,s.jsxs)(r.default,{children:[(0,s.jsx)("meta",{charSet:"UTF-8"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,s.jsx)("header",{className:i().header,children:!n&&(0,s.jsx)(o.default,{href:"/",children:(0,s.jsx)("a",{className:i().headerBackTop,children:"\u5408\u540c\u4f1a\u793e\u6b66\u85e4\u96fb\u7b97\u6a5f\u6280\u8853"})})}),(0,s.jsx)("main",{children:t}),(0,s.jsxs)("footer",{className:i().footer,children:[!n&&(0,s.jsx)("div",{className:i().footerBackTop,children:(0,s.jsx)(o.default,{href:"/",children:(0,s.jsx)("a",{className:i().footerBackTop,children:"\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\u3078"})})}),"\xa9 2022 \u5408\u540c\u4f1a\u793e\u6b66\u85e4\u96fb\u7b97\u6a5f\u6280\u8853"]})]})}},2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},i=n(1063),s=n(4651),c=n(7426);var l={};function u(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,o=s.useRouter(),d=a.default.useMemo((function(){var t=i.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],s=n[1];return{href:a,as:e.as?i.resolveHref(o,e.as):s||a}}),[o,e.href,e.as]),f=d.href,_=d.as,p=e.children,h=e.replace,v=e.shallow,j=e.scroll,x=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var b=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,w=c.useIntersection({rootMargin:"200px"}),g=r(w,2),m=g[0],k=g[1],y=a.default.useCallback((function(e){m(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,m]);a.default.useEffect((function(){var e=k&&n&&i.isLocalURL(f),t="undefined"!==typeof x?x:o&&o.locale,r=l[f+"%"+_+(t?"%"+t:"")];e&&!r&&u(o,f,_,{locale:t})}),[_,f,k,x,n,o]);var H={ref:y,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:s}))}(e,o,f,_,h,v,j,x)},onMouseEnter:function(e){i.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,f,_,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof x?x:o&&o.locale,C=o&&o.isLocaleDomain&&i.getDomainLocale(_,L,o&&o.locales,o&&o.domainLocales);H.href=C||i.addBasePath(i.addLocale(_,L,o&&o.defaultLocale))}return a.default.cloneElement(t,H)};t.default=d},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=o.useRef(),l=o.useState(!1),u=r(l,2),d=u[0],f=u[1],_=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||d||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),s.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return o.useEffect((function(){if(!i&&!d){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),[_,d]};var o=n(7294),a=n(3447),i="undefined"!==typeof IntersectionObserver;var s=new Map},7532:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return l}});var r=n(9008),o=n(1664),a=n(8869),i=n(5080),s=n.n(i),c=n(5893),l=!0;t.default=function(e){var t=e.postData;return(0,c.jsxs)(a.Z,{children:[(0,c.jsx)(r.default,{children:(0,c.jsxs)("title",{children:[t.title," - \u52df\u96c6\u60c5\u5831 - \u5408\u540c\u4f1a\u793e\u6b66\u85e4\u96fb\u7b97\u6a5f\u6280\u8853"]})}),(0,c.jsxs)("section",{className:"".concat(s().headingMd," ").concat(s().padding1px),children:[(0,c.jsxs)("h1",{className:s().jobHeading,children:[(0,c.jsx)("span",{className:s().jobHeadingSubtext,children:"\u52df\u96c6\u60c5\u5831"}),(0,c.jsx)("span",{children:t.title})]}),(0,c.jsx)("div",{className:s().jobContent,dangerouslySetInnerHTML:{__html:t.contentHtml}}),(0,c.jsxs)("div",{className:s().jobContact,children:["\u5fdc\u52df\u307e\u305f\u306f\u3054\u76f8\u8ac7\u306f",(0,c.jsx)(o.default,{href:"/contact",children:(0,c.jsx)("a",{children:"\u304a\u554f\u3044\u5408\u308f\u305b"})}),"\u304f\u3060\u3055\u3044\u3002"]}),(0,c.jsx)("div",{className:s().jobBackIndex,children:(0,c.jsx)(o.default,{href:"/job",children:(0,c.jsx)("a",{children:"\u52df\u96c6\u60c5\u5831\u4e00\u89a7\u3078"})})})]})]})}},9375:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/job/[id]",function(){return n(7532)}])},4608:function(e){e.exports={container:"layout_container__2t4v2",header:"layout_header__2rhWq",headerBackTop:"layout_headerBackTop__15BF3",footer:"layout_footer__127N0",footerBackTop:"layout_footerBackTop__1EeE0"}},5080:function(e){e.exports={topTitle:"utils_topTitle__8MiEx",topDescriptionListWrapper:"utils_topDescriptionListWrapper__30D8R",topDescriptionList:"utils_topDescriptionList__2FTq-",topAnchorList:"utils_topAnchorList__3qIA1",jobHeading:"utils_jobHeading__DFodn",jobHeadingSubtext:"utils_jobHeadingSubtext__2Msjg",jobListWrapper:"utils_jobListWrapper__1Jc7H",jobContact:"utils_jobContact__gGYGf",jobBackIndex:"utils_jobBackIndex__cMFSB",jobContent:"utils_jobContent__1Z-J8",contactHeading:"utils_contactHeading__eAPyh",workHeading:"utils_workHeading__bA2Lu",workContent:"utils_workContent__2CDXU",newsHeading:"utils_newsHeading__2HqwU",newsContent:"utils_newsContent__1OB_y",newsArticle:"utils_newsArticle__IWEJk",newsArticleHeaderWrapper:"utils_newsArticleHeaderWrapper__1WAuJ",newsArticleHeader:"utils_newsArticleHeader__lrCiw",newsArticleHeaderDateArea:"utils_newsArticleHeaderDateArea__Yr4m7"}},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=9375,e(e.s=t);var t}));var t=e.O();_N_E=t}]);