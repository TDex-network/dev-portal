"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[4592],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7011:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={title:"Overview",sidebar_position:1},p=void 0,c={unversionedId:"provider/daemon/overview",id:"version-0.9.1/provider/daemon/overview",isDocsHomePage:!1,title:"Overview",description:"The daemon is that tool enabling a Liquidity provider to execute automated market marking strategies on top of TDEX.",source:"@site/versioned_docs/version-0.9.1/provider/daemon/overview.md",sourceDirName:"provider/daemon",slug:"/provider/daemon/overview",permalink:"/docs/v0/provider/daemon/overview",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/versioned_docs/version-0.9.1/provider/daemon/overview.md",tags:[],version:"0.9.1",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"version-0.9.1/tutorialSidebar",previous:{title:"Overview",permalink:"/docs/v0/provider/intro"},next:{title:"Overview",permalink:"/docs/v0/provider/daemon/getting_started/overview"}},l=[{value:"Data directory",id:"data-directory",children:[]},{value:"Configuration",id:"configuration",children:[]}],d={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The daemon is that tool enabling a Liquidity provider to execute automated market marking strategies on top of TDEX."),(0,a.kt)("p",null,"It exposes two HTTP/2 gRPC interfaces, one meant to be public and consumed by traders that fully implements ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tdex-network/tdex-specs/blob/master/04-trade-protocol.md"},"BOTD #4")," called ",(0,a.kt)("strong",{parentName:"p"},"trade interface")," (by default on the port ",(0,a.kt)("strong",{parentName:"p"},"9945"),") and another private to be consumed by the liquidity provider for internal management called ",(0,a.kt)("strong",{parentName:"p"},"operator interface")," (by default on the port ",(0,a.kt)("strong",{parentName:"p"},"9000"),"). The specs of the operator interface can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/TDex-network/tdex-daemon/blob/master/api-spec/protobuf/operator.proto"},"here"),"."),(0,a.kt)("p",null,"The daemon comes with an embedded Liquid HD wallet and sources blockchain information via a block explorer. At the time of writing, only the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/blockstream/electrs"},"Blockstream fork of Electrs")," is supported, sticking with ",(0,a.kt)("a",{parentName:"p",href:"https://blockstream.info/liquid/api/"},"Blockstream.info APIs"),"."),(0,a.kt)("p",null,"The HD wallet is organized in multiple sub accounts, each one with its own purpose:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fee account"),": owns only LBTCs funds and is used to pay for Liquid network fees for trade or withdrawal transactions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Wallet account"),": this aims to be a personal wallet that you can use to send/receive your funds. The daemon does not store any data internally for this account."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Market account(s)"),": each market is associated with a unique account of the HD wallet and owns funds of exactly 2 asset, the asset pair of the market.")),(0,a.kt)("h2",{id:"data-directory"},"Data directory"),(0,a.kt)("p",null,"The first time you run the daemon, it creates a ",(0,a.kt)("strong",{parentName:"p"},"data directory")," (",(0,a.kt)("inlineCode",{parentName:"p"},"~/.tdex-daemon")," for linux and ",(0,a.kt)("inlineCode",{parentName:"p"},"~/Library/Application\\ Support/Tdex-daemon")," for macOS)  and it is used to persist the wallet and the state in an embedded database.\nIt's possible to use a different path for the data directory exporting the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"TDEX_DATA_DIR_PATH"),". If you use docker you must mount the volume pointing to the different chosen path."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Be sure to replicate this data directory to keep your markets running in case of hardware failures. You can restore the access of your funds and the markets with your mnemonic seed.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"As briefly introduced, it's possible to configure the daemon with environment variables. The list of all available variables can be found ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/tdex-network/tdex-daemon/config#pkg-constants"},"here"),"."))}u.isMDXComponent=!0}}]);