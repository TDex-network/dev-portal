"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[6521],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3371:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={},l="Contributing to TDEX Specifications",c={unversionedId:"specs/CONTRIBUTING",id:"version-1.0.0/specs/CONTRIBUTING",isDocsHomePage:!1,title:"Contributing to TDEX Specifications",description:"This file define the guidelines and workflow to follow for correctly contributing on this project.",source:"@site/versioned_docs/version-1.0.0/specs/CONTRIBUTING.md",sourceDirName:"specs",slug:"/specs/CONTRIBUTING",permalink:"/docs/v1/specs/CONTRIBUTING",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/versioned_docs/version-1.0.0/specs/CONTRIBUTING.md",tags:[],version:"1.0.0",frontMatter:{},sidebar:"version-1.0.0/tutorialSidebar",previous:{title:"BOTD#5: Pool",permalink:"/docs/v1/specs/pool-protocol"},next:{title:"Overview",permalink:"/docs/v1/trader/intro"}},p=[{value:"Writing specs",id:"writing-specs",children:[]},{value:"Extend messages",id:"extend-messages",children:[]},{value:"Creating Test Vectors",id:"creating-test-vectors",children:[]},{value:"Workflow",id:"workflow",children:[]},{value:"Squashing",id:"squashing",children:[]}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contributing-to-tdex-specifications"},"Contributing to TDEX Specifications"),(0,i.kt)("p",null,"This file define the guidelines and workflow to follow for correctly contributing on this project. "),(0,i.kt)("h2",{id:"writing-specs"},"Writing specs"),(0,i.kt)("p",null,"The specification is supposed to be readable both in ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Markdown"},"Markdown")," format and plain text."),(0,i.kt)("p",null,"Some requirements are obvious, some are subtle. They're designed to walk an implementer through the code they have to write, so write them as YOU develop YOUR implementation. Stick with MUST/SHOULD/MAY and NOT: see ",(0,i.kt)("a",{parentName:"p",href:"https://www.ietf.org/rfc/rfc2119.txt"},"RFC 2119")),(0,i.kt)("h2",{id:"extend-messages"},"Extend messages"),(0,i.kt)("p",null,"All message payloads are serialized with Protcol Buffers, in order to add new fields or deprecate older ones you MUST increment the number to maintain backward compatibility."),(0,i.kt)("h2",{id:"creating-test-vectors"},"Creating Test Vectors"),(0,i.kt)("p",null,"For new low-level protocol constructions, test vectors are necessary. These have traditionally been lines within the spec itself, but the modern trend is to use JSON and separate files. The intent is that they be machine-readable by implementations."),(0,i.kt)("h2",{id:"workflow"},"Workflow"),(0,i.kt)("p",null,"To contribute a patch, the workflow is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Fork repository"),(0,i.kt)("li",{parentName:"ol"},"Create topic branch"),(0,i.kt)("li",{parentName:"ol"},"Commit patches"),(0,i.kt)("li",{parentName:"ol"},"Push changes to your fork"),(0,i.kt)("li",{parentName:"ol"},"Submit a pull request")),(0,i.kt)("p",null,"Guidelines:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Commits should be atomic and easy to read, messages should be describe in detail to helpful the readers"),(0,i.kt)("li",{parentName:"ul"},"If the commit references another issue, add the reference into message"),(0,i.kt)("li",{parentName:"ul"},"Write (if as a possible) unit tests and/or functional tests to verify patches"),(0,i.kt)("li",{parentName:"ul"},"Existing tests must be work")),(0,i.kt)("h2",{id:"squashing"},"Squashing"),(0,i.kt)("p",null,"Committer should squash or rebase commits before it will be merged, following Git ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-rebase"},"doc"),"."))}d.isMDXComponent=!0}}]);