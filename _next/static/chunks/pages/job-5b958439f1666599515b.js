(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[236],{8869:function(e,t,n){"use strict";var r=n(9008),o=n(1664),a=n(4608),i=n.n(a),c=n(5893);t.Z=function(e){var t=e.children,n=e.home;return(0,c.jsxs)("div",{className:i().container,children:[(0,c.jsxs)(r.default,{children:[(0,c.jsx)("meta",{charSet:"UTF-8"}),(0,c.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,c.jsx)("header",{className:i().header,children:!n&&(0,c.jsx)(o.default,{href:"/",children:(0,c.jsx)("a",{className:i().headerBackTop,children:"\u5408\u540c\u4f1a\u793e\u6b66\u85e4\u96fb\u7b97\u6a5f\u6280\u8853"})})}),(0,c.jsx)("main",{children:t}),(0,c.jsxs)("footer",{className:i().footer,children:[!n&&(0,c.jsx)("div",{className:i().footerBackTop,children:(0,c.jsx)(o.default,{href:"/",children:(0,c.jsx)("a",{className:i().footerBackTop,children:"\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\u3078"})})}),"\xa9 2021 \u5408\u540c\u4f1a\u793e\u6b66\u85e4\u96fb\u7b97\u6a5f\u6280\u8853"]})]})}},2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},i=n(1063),c=n(4651),s=n(7426);var l={};function u(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),f=a.default.useMemo((function(){var t=i.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?i.resolveHref(o,e.as):c||a}}),[o,e.href,e.as]),d=f.href,p=f.as,_=e.children,h=e.replace,v=e.shallow,j=e.scroll,b=e.locale;"string"===typeof _&&(_=a.default.createElement("a",null,_));var x=(t=a.default.Children.only(_))&&"object"===typeof t&&t.ref,m=s.useIntersection({rootMargin:"200px"}),g=r(m,2),y=g[0],L=g[1],k=a.default.useCallback((function(e){y(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,y]);a.default.useEffect((function(){var e=L&&n&&i.isLocalURL(d),t="undefined"!==typeof b?b:o&&o.locale,r=l[d+"%"+p+(t?"%"+t:"")];e&&!r&&u(o,d,p,{locale:t})}),[p,d,L,b,n,o]);var N={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:c}))}(e,o,d,p,h,v,j,b)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:o&&o.locale,M=o&&o.isLocaleDomain&&i.getDomainLocale(p,E,o&&o.locales,o&&o.domainLocales);N.href=M||i.addBasePath(i.addLocale(p,E,o&&o.defaultLocale))}return a.default.cloneElement(t,N)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,s=o.useRef(),l=o.useState(!1),u=r(l,2),f=u[0],d=u[1],p=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!i&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=n(7294),a=n(3447),i="undefined"!==typeof IntersectionObserver;var c=new Map},5904:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return l}});var r=n(9008),o=n(1664),a=n(8869),i=n(5080),c=n.n(i),s=n(5893),l=!0;t.default=function(e){var t=e.allPostSummaries;return(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(r.default,{children:(0,s.jsx)("title",{children:"\u63a1\u7528\u60c5\u5831/\u5354\u529b\u4f1a\u793e\u52df\u96c6 - \u5408\u540c\u4f1a\u793e\u6b66\u85e4\u96fb\u7b97\u6a5f\u6280\u8853"})}),(0,s.jsxs)("section",{className:"".concat(c().headingMd," ").concat(c().padding1px),children:[(0,s.jsx)("h1",{className:c().jobHeading,children:"\u52df\u96c6\u60c5\u5831"}),(0,s.jsx)("div",{className:c().jobListWrapper,children:(0,s.jsx)("ul",{className:c().jobList,children:t.map((function(e){var t=e.id,n=(e.date,e.title);return(0,s.jsx)("li",{children:(0,s.jsx)(o.default,{href:"/job/[id]",as:"/job/".concat(t),children:(0,s.jsx)("a",{children:n})})},t)}))})})]})]})}},3545:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/job",function(){return n(5904)}])},4608:function(e){e.exports={container:"layout_container__2t4v2",header:"layout_header__2rhWq",headerBackTop:"layout_headerBackTop__15BF3",footer:"layout_footer__127N0",footerBackTop:"layout_footerBackTop__1EeE0"}},5080:function(e){e.exports={topTitle:"utils_topTitle__8MiEx",topDescriptionListWrapper:"utils_topDescriptionListWrapper__30D8R",topDescriptionList:"utils_topDescriptionList__2FTq-",topAnchorList:"utils_topAnchorList__3qIA1",jobHeading:"utils_jobHeading__DFodn",jobHeadingSubtext:"utils_jobHeadingSubtext__2Msjg",jobListWrapper:"utils_jobListWrapper__1Jc7H",jobContact:"utils_jobContact__gGYGf",jobBackIndex:"utils_jobBackIndex__cMFSB",jobContent:"utils_jobContent__1Z-J8",contactHeading:"utils_contactHeading__eAPyh"}},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=3545,e(e.s=t);var t}));var t=e.O();_N_E=t}]);