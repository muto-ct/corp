(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var a,c=(a=n(7294))&&a.__esModule?a:{default:a},o=n(1063),i=n(4651),s=n(7426);var l={};function u(e,t,n,r){if(e&&o.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=i.useRouter(),f=c.default.useMemo((function(){var t=o.resolveHref(a,e.href,!0),n=r(t,2),c=n[0],i=n[1];return{href:c,as:e.as?o.resolveHref(a,e.as):i||c}}),[a,e.href,e.as]),d=f.href,g=f.as,m=e.children,p=e.replace,h=e.shallow,v=e.scroll,x=e.locale;"string"===typeof m&&(m=c.default.createElement("a",null,m));var j=(t=c.default.Children.only(m))&&"object"===typeof t&&t.ref,b=s.useIntersection({rootMargin:"200px"}),y=r(b,2),w=y[0],A=y[1],N=c.default.useCallback((function(e){w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,w]);c.default.useEffect((function(){var e=A&&n&&o.isLocalURL(d),t="undefined"!==typeof x?x:a&&a.locale,r=l[d+"%"+g+(t?"%"+t:"")];e&&!r&&u(a,d,g,{locale:t})}),[g,d,A,x,n,a]);var k={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,c,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[a?"replace":"push"](n,r,{shallow:c,locale:s,scroll:i}))}(e,a,d,g,p,h,v,x)},onMouseEnter:function(e){o.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,d,g,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof x?x:a&&a.locale,_=a&&a.isLocaleDomain&&o.getDomainLocale(g,E,a&&a.locales,a&&a.domainLocales);k.href=_||o.addBasePath(o.addLocale(g,E,a&&a.defaultLocale))}return c.default.cloneElement(t,k)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,s=a.useRef(),l=a.useState(!1),u=r(l,2),f=u[0],d=u[1],g=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,c=r.observer,o=r.elements;return o.set(e,t),c.observe(e),function(){o.delete(e),c.unobserve(e),0===o.size&&(c.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return a.useEffect((function(){if(!o&&!f){var e=c.requestIdleCallback((function(){return d(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[f]),[g,f]};var a=n(7294),c=n(3447),o="undefined"!==typeof IntersectionObserver;var i=new Map},1504:function(e,t,n){"use strict";n.r(t);var r=n(7965),a=n(5893);t.default=function(){return(0,a.jsx)(r.Z,{title:"\u304a\u554f\u3044\u5408\u308f\u305b",children:(0,a.jsx)("section",{children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"mb-8",children:["\u4ee5\u4e0b\u306e\u30d5\u30a9\u30fc\u30e0\u3092\u4f7f\u7528\u3057\u3066\u3044\u305f\u3060\u304f\u307b\u304b\u306b\u3001info@muto-ct.jp \u307e\u3067\u76f4\u63a5\u30e1\u30fc\u30eb\u3092\u304a\u9001\u308a\u3044\u305f\u3060\u304f\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002",(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]}),(0,a.jsx)("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSc-cSmhgETRV2STkAap0CoxiOEPmMYFUtwgl0Tj8oj6cEO3AA/viewform?embedded=true",width:"100%",height:"1200px",frameBorder:0,marginHeight:0,marginWidth:0,children:"\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059..."})]})})})}},7965:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(9008),a=(n(7294),n(1664)),c=n(4832),o="/_next/static/image/src/components/atoms/PageTitleArea/logo.cbfd05ca4ebea3b0e26fe72ce5af6bee.png",i=n(5893),s=function(e){var t=e.title;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"w-full",style:{backgroundImage:"url(".concat(c.Z.src,")"),backgroundSize:"60px 56px",backgroundRepeat:"repeat",backgroundColor:"rgba(255,255,255,0.8)",backgroundBlendMode:"lighten"},children:(0,i.jsx)("div",{className:"w-full h-full py-6",style:{background:"linear-gradient(rgba(255,255,255,1), rgba(255,255,255,1) 3%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,0))"},children:(0,i.jsxs)("div",{className:"w-full h-full flex flex-col justify-center items-center",children:[(0,i.jsx)("div",{className:"h-10 mb-8",children:(0,i.jsx)(a.default,{href:"/",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:o,className:"object-contain h-full",alt:"\u5408\u540c\u4f1a\u793e\u6b66\u85e4\u96fb\u7b97\u6a5f\u6280\u8853"})})})}),(0,i.jsx)("h1",{className:"text-3xl",children:t})]})})})})},l=n(5984),u=function(){var e="G-RX351H25PY";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(e)}),(0,i.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n          gtag('config', '".concat(e,"');")}})]})},f=function(e){var t=e.children,n=e.home,a=e.title,c=void 0===a?"":a,o=e.headTitle,f="\u5408\u540c\u4f1a\u793e\u6b66\u85e4\u96fb\u7b97\u6a5f\u6280\u8853",d="Web\u6280\u8853\u3092\u4e2d\u5fc3\u306b\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u958b\u767a\u4e8b\u696d\u3092\u884c\u3046\u5408\u540c\u4f1a\u793e\u6b66\u85e4\u96fb\u7b97\u6a5f\u6280\u8853\u306e\u30b3\u30fc\u30dd\u30ec\u30fc\u30c8\u30b5\u30a4\u30c8\u3067\u3059\u3002\u4f1a\u793e\u6982\u8981\u3001\u304a\u77e5\u3089\u305b\u3001\u63a1\u7528\u60c5\u5831\u7b49\u3092\u63b2\u8f09\u3057\u3066\u304a\u308a\u307e\u3059\u3002",g=o?o+" - "+f:c?c+" - "+f:f;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.default,{children:[(0,i.jsx)("title",{children:g}),(0,i.jsx)("meta",{charSet:"UTF-8"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("meta",{name:"description",content:d}),(0,i.jsx)("meta",{name:"thumbnail",content:"/assets/og_image.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:title",content:g}),(0,i.jsx)("meta",{property:"og:description",content:d}),(0,i.jsx)("meta",{property:"og:image",content:"https://muto-ct.jp/images/og_image.png"}),(0,i.jsx)(u,{})]}),!n&&(0,i.jsx)("header",{className:"mb-8",children:(0,i.jsx)(s,{title:c})}),(0,i.jsx)("div",{className:n?"":"w-full flex justify-center px-8 sm:px-12 lg:px-0",children:(0,i.jsx)("main",{className:n?"":"w-full max-w-[750px]",children:t})}),(0,i.jsxs)("footer",{className:"py-4",children:[!n&&(0,i.jsx)("div",{className:"my-14 text-center",children:(0,i.jsx)(l.u,{href:"/#menu",children:"\u30c8\u30c3\u30d7\u30da\u30fc\u30b8 (\u30e1\u30cb\u30e5\u30fc) \u3078"})}),(0,i.jsx)("div",{className:"text-center text-sm",children:"\xa9 2022 \u5408\u540c\u4f1a\u793e\u6b66\u85e4\u96fb\u7b97\u6a5f\u6280\u8853"})]})]})}},5984:function(e,t,n){"use strict";n.d(t,{u:function(){return c}});n(7294);var r=n(1664),a=n(5893),c=function(e){var t=e.children,n=e.href;return(0,a.jsx)(r.default,{href:n,children:(0,a.jsx)("a",{className:"inline underline decoration-gray-300 hover:decoration-gray-700",children:t})})}},4832:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r={src:"/_next/static/image/src/components/atoms/CommonBackgroundImage/background.1d6c943b3dfe3f18567bc17cf6591f0a.png",height:167,width:178,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAZElEQVR42i3NQQrCQBSD4e8EdaHWEW2lVnC0o9KCqCs33v9MvkUJSSBZ/Hx1fj42cmTNycpRslPrVEz2isZNG14wzkOJfrky2MpanSRrmCRvd0vrUMVTMYrPxcGZh2wQHL2k/wNpuAj+7pYnvQAAAABJRU5ErkJggg=="}},9679:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(1504)}])},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=9679,e(e.s=t);var t}));var t=e.O();_N_E=t}]);