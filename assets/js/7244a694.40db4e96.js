"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[4079],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return v}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(r),v=o,m=s["".concat(d,".").concat(v)]||s[v]||u[v]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},234:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={title:"Overview",sidebar_position:1},d=void 0,p={unversionedId:"provider/daemon/getting_started/overview",id:"version-1.0.0/provider/daemon/getting_started/overview",isDocsHomePage:!1,title:"Overview",description:"The daemon can be served in one of the following ways:",source:"@site/versioned_docs/version-1.0.0/provider/daemon/getting_started/overview.md",sourceDirName:"provider/daemon/getting_started",slug:"/provider/daemon/getting_started/overview",permalink:"/docs/v1/provider/daemon/getting_started/overview",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/versioned_docs/version-1.0.0/provider/daemon/getting_started/overview.md",tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"version-1.0.0/tutorialSidebar",previous:{title:"Overview",permalink:"/docs/v1/provider/daemon/overview"},next:{title:"Run with Docker",permalink:"/docs/v1/provider/daemon/getting_started/run_docker"}},l=[],u={toc:l};function s(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The daemon can be served in one of the following ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1/provider/daemon/getting_started/run_docker"},"Dockerized application")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1/provider/daemon/getting_started/run_standalone"},"Standalone application"))),(0,i.kt)("p",null,"The daemon makes use of an external ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vulpemventures/ocean"},"Ocean wallet")," to which it connects via gRPC (HTTP/2)."),(0,i.kt)("p",null,"Once your provider is up and running you need to ",(0,i.kt)("a",{parentName:"p",href:"/docs/v1/provider/daemon/getting_started/configure_cli"},"configure the operator CLI")," in order to setup your markets - and lot more things. "),(0,i.kt)("p",null,"If you have already done all these steps, you are ready to ",(0,i.kt)("a",{parentName:"p",href:"/docs/v1/provider/daemon/init_daemon"},"initialize and unlock the daemon and its wallet"),"."))}s.isMDXComponent=!0}}]);