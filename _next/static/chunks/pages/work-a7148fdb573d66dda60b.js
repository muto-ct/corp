(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[337],{8869:function(e,t,n){"use strict";var r=n(9008),o=n(1664),a=n(4608),i=n.n(a),c=n(5893);t.Z=function(e){var t=e.children,n=e.home;return(0,c.jsxs)("div",{className:i().container,children:[(0,c.jsxs)(r.default,{children:[(0,c.jsx)("meta",{charSet:"UTF-8"}),(0,c.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,c.jsx)("header",{className:i().header,children:!n&&(0,c.jsx)(o.default,{href:"/",children:(0,c.jsx)("a",{className:i().headerBackTop,children:"\u5408\u540c\u4f1a\u793e\u6b66\u85e4\u96fb\u7b97\u6a5f\u6280\u8853"})})}),(0,c.jsx)("main",{children:t}),(0,c.jsxs)("footer",{className:i().footer,children:[!n&&(0,c.jsx)("div",{className:i().footerBackTop,children:(0,c.jsx)(o.default,{href:"/",children:(0,c.jsx)("a",{className:i().footerBackTop,children:"\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\u3078"})})}),"\xa9 2021 \u5408\u540c\u4f1a\u793e\u6b66\u85e4\u96fb\u7b97\u6a5f\u6280\u8853"]})]})}},2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},i=n(1063),c=n(4651),s=n(7426);var l={};function u(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),f=a.default.useMemo((function(){var t=i.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?i.resolveHref(o,e.as):c||a}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,_=e.replace,j=e.shallow,v=e.scroll,x=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var b=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,k=s.useIntersection({rootMargin:"200px"}),g=r(k,2),m=g[0],w=g[1],y=a.default.useCallback((function(e){m(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,m]);a.default.useEffect((function(){var e=w&&n&&i.isLocalURL(d),t="undefined"!==typeof x?x:o&&o.locale,r=l[d+"%"+p+(t?"%"+t:"")];e&&!r&&u(o,d,p,{locale:t})}),[p,d,w,x,n,o]);var E={ref:y,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:c}))}(e,o,d,p,_,j,v,x)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof x?x:o&&o.locale,C=o&&o.isLocaleDomain&&i.getDomainLocale(p,L,o&&o.locales,o&&o.domainLocales);E.href=C||i.addBasePath(i.addLocale(p,L,o&&o.defaultLocale))}return a.default.cloneElement(t,E)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,s=o.useRef(),l=o.useState(!1),u=r(l,2),f=u[0],d=u[1],p=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!i&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=n(7294),a=n(3447),i="undefined"!==typeof IntersectionObserver;var c=new Map},8361:function(e,t,n){"use strict";n.r(t);var r=n(9008),o=n(1664),a=n(8869),i=n(5080),c=n.n(i),s=n(5893);t.default=function(){return(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(r.default,{children:(0,s.jsx)("title",{children:"\u4e8b\u696d\u5185\u5bb9 - \u5408\u540c\u4f1a\u793e\u6b66\u85e4\u96fb\u7b97\u6a5f\u6280\u8853"})}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h1",{className:c().workHeading,children:"\u4e8b\u696d\u5185\u5bb9"}),(0,s.jsx)("section",{className:c().workContent,children:(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"Web\u30b5\u30a4\u30c8/\u30b5\u30fc\u30d3\u30b9\u306e\u65b0\u898f\u958b\u767a\u3001\u904b\u7528\u3001\u4fdd\u5b88\u7b49\u3005\u3001 \u4e3b\u306bWeb\u6280\u8853\u306b\u307e\u3064\u308f\u308b\u6280\u8853\u7684\u306a\u304a\u624b\u4f1d\u3044\u3092\u5f97\u610f\u3068\u3057\u3066\u304a\u308a\u307e\u3059\u3002"}),(0,s.jsx)("p",{children:"\u5fc5\u8981\u306b\u5fdc\u3058Web\u6280\u8853\u3092\u7528\u3044\u305f\u696d\u52d9\u30d5\u30ed\u30fc\u6539\u5584(DX\u5316)\u306e\u3054\u63d0\u6848\u3001 UI/UX\u6539\u5584\u3084\u691c\u7d22\u30a8\u30f3\u30b8\u30f3\u6700\u9069\u5316\u3001 Web\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0\u306e\u76e3\u4fee\u30fb\u30b3\u30f3\u30b5\u30eb\u30c6\u30a3\u30f3\u30b0\u3082\u884c\u3063\u3066\u304a\u308a\u307e\u3059\u3002"}),(0,s.jsx)("p",{children:"Web\u696d\u754c\u3067\u5f37\u8abf\u3055\u308c\u308b\u3053\u3068\u304c\u591a\u3044\u300c\u304d\u3089\u3073\u3084\u304b\u3055\u300d\u3082\u6642\u3068\u5834\u5408\u306b\u5fdc\u3058\u5fc5\u8981\u3068\u306f\u8003\u3048\u3066\u304a\u308a\u307e\u3059\u304c\u3001 \u672c\u8cea\u7684\u306a\u5229\u4fbf\u6027\u5411\u4e0a\u3001\u696d\u52d9\u52b9\u7387\u5316\u3068\u3044\u3063\u305f\u70b9\u3092\u8cea\u5b9f\u525b\u5065\u306b\u8ffd\u3044\u6c42\u3081\u3066\u304a\u308a\u307e\u3059\u3002 \u672c\u30b3\u30fc\u30dd\u30ec\u30fc\u30c8\u30b5\u30a4\u30c8\u3082\u305d\u3046\u3044\u3063\u305f\u8996\u70b9\u306b\u3088\u308a\u3001\u7d20\u6734\u306a\u30c7\u30b6\u30a4\u30f3\u304b\u3064\u3001 \u30da\u30fc\u30b8\u63cf\u753b\u306e\u9ad8\u901f\u6027\u3092\u91cd\u8996\u3057\u305f\u6280\u8853\u9078\u5b9a\u306e\u4e0a\u3067\u88fd\u4f5c\u3057\u3066\u304a\u308a\u307e\u3059\u3002"}),(0,s.jsxs)("p",{children:["Web\u30b5\u30a4\u30c8/\u30b5\u30fc\u30d3\u30b9\u4f5c\u6210\u3084Web\u6280\u8853\u3092\u6d3b\u7528\u3057\u305f\u696d\u52d9\u52b9\u7387\u5316\u7b49\u306b\u3054\u8208\u5473\u304c\u3054\u3056\u3044\u307e\u3057\u305f\u3089\u3001 \u304a\u6c17\u8efd\u306b",(0,s.jsx)(o.default,{href:"/contact",children:(0,s.jsx)("a",{children:"\u304a\u554f\u3044\u5408\u308f\u305b"})}),"\u304f\u3060\u3055\u3044\u3002"]})]})}),(0,s.jsx)("h2",{className:c().workHeading,children:"\u5236\u4f5c\u5b9f\u7e3e"}),(0,s.jsx)("section",{className:c().workContent,children:(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"\u516c\u958b\u306e\u8a31\u53ef\u3092\u9802\u3044\u305f\u4e00\u90e8\u3092\u3054\u7d39\u4ecb\u3057\u307e\u3059\u3002"}),(0,s.jsxs)("p",{children:["SEESE\u682a\u5f0f\u4f1a\u793e\u69d8",(0,s.jsx)("span",{children:" - "}),(0,s.jsx)(o.default,{href:"https://seese.jp",children:(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:"SEESE"})}),(0,s.jsx)("span",{children:" (\u958b\u767a\u5143\u8acb)"})]})]})})]})]})}},7098:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/work",function(){return n(8361)}])},4608:function(e){e.exports={container:"layout_container__2t4v2",header:"layout_header__2rhWq",headerBackTop:"layout_headerBackTop__15BF3",footer:"layout_footer__127N0",footerBackTop:"layout_footerBackTop__1EeE0"}},5080:function(e){e.exports={topTitle:"utils_topTitle__8MiEx",topDescriptionListWrapper:"utils_topDescriptionListWrapper__30D8R",topDescriptionList:"utils_topDescriptionList__2FTq-",topAnchorList:"utils_topAnchorList__3qIA1",jobHeading:"utils_jobHeading__DFodn",jobHeadingSubtext:"utils_jobHeadingSubtext__2Msjg",jobListWrapper:"utils_jobListWrapper__1Jc7H",jobContact:"utils_jobContact__gGYGf",jobBackIndex:"utils_jobBackIndex__cMFSB",jobContent:"utils_jobContent__1Z-J8",contactHeading:"utils_contactHeading__eAPyh",workHeading:"utils_workHeading__bA2Lu",workContent:"utils_workContent__2CDXU"}},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=7098,e(e.s=t);var t}));var t=e.O();_N_E=t}]);