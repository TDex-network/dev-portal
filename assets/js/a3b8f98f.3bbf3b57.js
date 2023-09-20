"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[9967],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2010:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={title:"BOTD#1: Message"},c="Message Protocol",p={unversionedId:"specs/message-protocol",id:"version-1.0.0/specs/message-protocol",isDocsHomePage:!1,title:"BOTD#1: Message",description:"Definitions",source:"@site/versioned_docs/version-1.0.0/specs/01-message-protocol.md",sourceDirName:"specs",slug:"/specs/message-protocol",permalink:"/docs/v1/specs/message-protocol",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/versioned_docs/version-1.0.0/specs/01-message-protocol.md",tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{title:"BOTD#1: Message"},sidebar:"version-1.0.0/tutorialSidebar",previous:{title:"BOTD#0: Index",permalink:"/docs/v1/specs/index"},next:{title:"BOTD#2: Transport",permalink:"/docs/v1/specs/transport-protocol"}},l=[{value:"Definitions",id:"definitions",children:[]}],u={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"message-protocol"},"Message Protocol"),(0,i.kt)("h3",{id:"definitions"},"Definitions"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"connection")," is a reliable, bidirectional communication channel between two peers that provides security."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Security")," in this context means that all confidential communications SHOULD be encrypted, and that the identity of each peer SHOULD be cryptographically verifiable by the other peer."),(0,i.kt)("p",null,"The messages exchanged between peers can be serialized using either ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/"},(0,i.kt)("strong",{parentName:"a"},"Protocol Buffers")),", a language-neutral, platform-neutral, extensible mechanism for serializing structured data, or ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON utf8"),"."))}f.isMDXComponent=!0}}]);