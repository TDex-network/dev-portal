"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[1044],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7679:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={title:"BOTD#0: Index"},c="Index and Overview",p={unversionedId:"specs/index",id:"version-1.0.0/specs/index",isDocsHomePage:!1,title:"BOTD#0: Index",description:"Welcome! These Basics of True Dex (BOTD) documents",source:"@site/versioned_docs/version-1.0.0/specs/00-index.md",sourceDirName:"specs",slug:"/specs/index",permalink:"/docs/v1/specs/index",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/versioned_docs/version-1.0.0/specs/00-index.md",tags:[],version:"1.0.0",sidebarPosition:0,frontMatter:{title:"BOTD#0: Index"},sidebar:"version-1.0.0/tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/v1/"},next:{title:"BOTD#1: Message",permalink:"/docs/v1/specs/message-protocol"}},l=[{value:"Index",id:"index",children:[]},{value:"Overview",id:"overview",children:[]}],d={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"index-and-overview"},"Index and Overview"),(0,a.kt)("p",null,"Welcome! These ",(0,a.kt)("strong",{parentName:"p"},"Basics of True Dex (BOTD)")," documents\ndescribe a protocol that provides an open interface for seamless exchange of ",(0,a.kt)("a",{parentName:"p",href:"https://elementsproject.org"},"Elements-based")," assets on the ",(0,a.kt)("a",{parentName:"p",href:"https://liquid.net"},"Liquid Network"),", dropping unnecessary forms of middlemen it allows faster, more efficient and non-custodial exchange."),(0,a.kt)("h2",{id:"index"},"Index"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/v1/specs/index"},"BOTD #0: Index")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/v1/specs/message-protocol"},"BOTD #1: Message Protocol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/v1/specs/transport-protocol"},"BOTD #2: Transport Protocol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/v1/specs/swap-protocol"},"BOTD #3: Swap Protocol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/v1/specs/trade-protocol"},"BOTD #4: Trade Protocol"))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"TrueDEX aims to create a global exchange network with an open interface for faster, non-custodial and confidential trading of digital assets."),(0,a.kt)("p",null,"To do that, we take advantage of the UTXO model and then the underlying capability of Elements-based networks to perform automated ",(0,a.kt)("strong",{parentName:"p"},"swaps"),", without the need of a trusted third-party. We propose to consolidate the stakeholders on an open standard for swaps, described in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1/specs/swap-protocol"},"BOTD #3: Swap Protocol")))}u.isMDXComponent=!0}}]);