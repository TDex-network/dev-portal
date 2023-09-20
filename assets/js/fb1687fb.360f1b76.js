"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[9740],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=i,y=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(y,a(a({ref:t},d),{},{components:r})):n.createElement(y,a({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4709:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],l={title:"Registry",sidebar_position:3},p=void 0,s={unversionedId:"provider/registry",id:"version-1.0.0/provider/registry",isDocsHomePage:!1,title:"Registry",description:"Public list of tdex liquidity providers",source:"@site/versioned_docs/version-1.0.0/provider/registry.md",sourceDirName:"provider",slug:"/provider/registry",permalink:"/docs/v1/provider/registry",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/versioned_docs/version-1.0.0/provider/registry.md",tags:[],version:"1.0.0",sidebarPosition:3,frontMatter:{title:"Registry",sidebar_position:3},sidebar:"version-1.0.0/tutorialSidebar",previous:{title:"Webhooks",permalink:"/docs/v1/provider/daemon/webhooks"}},d=[{value:"Add a provider",id:"add-a-provider",children:[{value:"1. Test",id:"1-test",children:[]},{value:"2. Submit",id:"2-submit",children:[]},{value:"3. Availability",id:"3-availability",children:[]}]}],c={toc:d};function u(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Public list of tdex liquidity providers"),(0,o.kt)("p",null,"Any always-on endpoint that implements the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TDex-network/tdex-specs/blob/master/04-trade-protocol.md#trade"},"BOTD#4 Trade Protocol"),' HTTP2 interface could be registered in this list. Being in this list is not required to be "discovered" by the ',(0,o.kt)("inlineCode",{parentName:"p"},"tdex-app"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"tdex-cli")," or other ",(0,o.kt)("inlineCode",{parentName:"p"},"tdex-sdk"),"-based clients, anyone could connect to you directly. This aims to be a public list that helps advanced traders to discover liquidity providers that guarantee highly available and professional service."),(0,o.kt)("h2",{id:"add-a-provider"},"Add a provider"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#1-test"},"Test with tdex clients")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#2-submit"},"Submit your provider via Pull Request")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#3-availability"},"Be sure to stay online"))),(0,o.kt)("h3",{id:"1-test"},"1. Test"),(0,o.kt)("p",null,"Before submitting your endpoint, be sure to test with any tdex clients, such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TDex-network/tdex-app"},"TDex Mobile App")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vulpemventures/tdex-cli"},"TDex CLI"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"With the app goes to ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings")," > ",(0,o.kt)("inlineCode",{parentName:"li"},"Manage Liquidity Provider")," > ",(0,o.kt)("inlineCode",{parentName:"li"},"Connect")),(0,o.kt)("li",{parentName:"ul"},"With the cli use ",(0,o.kt)("inlineCode",{parentName:"li"},"tdex-cli connect <your_endpoint>"))),(0,o.kt)("h3",{id:"2-submit"},"2. Submit"),(0,o.kt)("p",null,"To add your provider to the list, first fork the repository and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TDex-network/tdex-registry/pulls"},"open a pull request")," adding your provider in the ",(0,o.kt)("inlineCode",{parentName:"p"},"registry.json")," file at the end of the array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "My Awesome Exchange",\n    "endpoint": "https://my.provider.com:9945"\n  }\n]\n')),(0,o.kt)("h3",{id:"3-availability"},"3. Availability"),(0,o.kt)("p",null,"We automatically check your provider: we call the ",(0,o.kt)("inlineCode",{parentName:"p"},"Markets")," service endpoint looking for successful reply and a ",(0,o.kt)("strong",{parentName:"p"},"non-empty array")," of markets. "),(0,o.kt)("h1",{id:"json-schema"},"JSON SCHEMA"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"tdex-registry")," is a simple public reachable file that follows the ",(0,o.kt)("a",{parentName:"p",href:"https://json-schema.org"},"JSON SCHEMA")," specification. Anyone is welcome to create a custom registry and source to tdex clients directly."))}u.isMDXComponent=!0}}]);