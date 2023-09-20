"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[1001],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(r),f=o,m=l["".concat(d,".").concat(f)]||l[f]||u[f]||n;return r?a.createElement(m,i(i({ref:t},s),{},{components:r})):a.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=l;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},4195:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var a=r(7462),o=r(3366),n=(r(7294),r(3905)),i=["components"],c={title:"Price feeder",sidebar_position:9},d=void 0,p={unversionedId:"provider/daemon/feeder",id:"version-1.0.0/provider/daemon/feeder",isDocsHomePage:!1,title:"Price feeder",description:"If you set the pluggable strategy for your market you have to provide its price manually.",source:"@site/versioned_docs/version-1.0.0/provider/daemon/feeder.md",sourceDirName:"provider/daemon",slug:"/provider/daemon/feeder",permalink:"/docs/v1/provider/daemon/feeder",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/versioned_docs/version-1.0.0/provider/daemon/feeder.md",tags:[],version:"1.0.0",sidebarPosition:9,frontMatter:{title:"Price feeder",sidebar_position:9},sidebar:"version-1.0.0/tutorialSidebar",previous:{title:"Market Fragmenter Account",permalink:"/docs/v1/provider/daemon/market_fragmenter_account"},next:{title:"Webhooks",permalink:"/docs/v1/provider/daemon/webhooks"}},s=[{value:"List the supported price sources",id:"list-the-supported-price-sources",children:[]},{value:"Create a price feed",id:"create-a-price-feed",children:[]},{value:"Start a price feed",id:"start-a-price-feed",children:[]},{value:"Stop a price feed",id:"stop-a-price-feed",children:[]},{value:"Get info about a price feed",id:"get-info-about-a-price-feed",children:[]},{value:"Update a price feed",id:"update-a-price-feed",children:[]},{value:"List all price feeds",id:"list-all-price-feeds",children:[]},{value:"Remove a price feed",id:"remove-a-price-feed",children:[]}],u={toc:s};function l(e){var t=e.components,r=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If you set the ",(0,n.kt)("em",{parentName:"p"},"pluggable")," strategy for your market you have to provide its price manually."),(0,n.kt)("p",null,"This operation can be conveniently automated for those market that don't have a fixed price, but rather that constantly changes depending on external factors, just like the LBTC/USDT one we opened previously in this guide."),(0,n.kt)("p",null,"The daemon, in fact, supports setting up ",(0,n.kt)("strong",{parentName:"p"},"price feeds")," and here you can learn how to manage them with the CLI. "),(0,n.kt)("p",null,"Like for the other commands, the target market is sourced from the configuration file, so don't forget to set the base and quote assets in your CLI if you didn't yet:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ tdex config set base_asset 144c654344aa716d6f3abcc1ca90e5641e4e2a7f633bc09fe3baf64585819a49\n$ tdex config set quote_asset f3d1ec678811398cd2ae277cbe3849c6f6dbd72c74bc542f7c4b11ff0e820958\n")),(0,n.kt)("h2",{id:"list-the-supported-price-sources"},"List the supported price sources"),(0,n.kt)("p",null,'The daemon supports various different so-called "price sources", or public exchanges used as sources for periodically feeding prices taken from them to the your market. You can see the list of all price sources with:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ tdex feeder sources\n")),(0,n.kt)("h2",{id:"create-a-price-feed"},"Create a price feed"),(0,n.kt)("p",null,"When you create a new price feed, you have to specify the source from those available and the ticker used by that specific source to refer to your market. This is up to you by looking at the API documentation of the selected ",(0,n.kt)("em",{parentName:"p"},"source"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ tdex feeder add --source bitfinex --ticker BTCUSD\n")),(0,n.kt)("p",null,"The daemon returns the id of the price feed. like for example ",(0,n.kt)("inlineCode",{parentName:"p"},"c5bb454d-cb47-4fef-9459-248741da6a53"),"."),(0,n.kt)("h2",{id:"start-a-price-feed"},"Start a price feed"),(0,n.kt)("p",null,"You can start your newly created price feed with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ tdex feeder start --id c5bb454d-cb47-4fef-9459-248741da6a53\n")),(0,n.kt)("p",null,"If something goes wrong here, like for example you set a wrong ticker for your price feed you don't need to worry, you can change source and/or ticker if you need, we'll cover this very soon."),(0,n.kt)("h2",{id:"stop-a-price-feed"},"Stop a price feed"),(0,n.kt)("p",null,"You can stop a feeder with the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ tdex feeder stop --id c5bb454d-cb47-4fef-9459-248741da6a53\n")),(0,n.kt)("h2",{id:"get-info-about-a-price-feed"},"Get info about a price feed"),(0,n.kt)("p",null,"You can get info about a price feed - its target market, source and ticker - with the command below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ tdex feeder info --id c5bb454d-cb47-4fef-9459-248741da6a53\n")),(0,n.kt)("h2",{id:"update-a-price-feed"},"Update a price feed"),(0,n.kt)("p",null,"You may want to change the source of your price feed, or mzybe you need to fix the ticker because you set a wrong one. For these kind of changes you can use the following command. It requires the price feed to be stopped in advance:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'$ tdex-cli feeder update --id c5bb454d-cb47-4fef-9459-248741da6a53 --source kraken --ticker "XBT/USDT"\n')),(0,n.kt)("h2",{id:"list-all-price-feeds"},"List all price feeds"),(0,n.kt)("p",null,"You can list and get info about all your price feeds with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ tdex-cli feeder list\n")),(0,n.kt)("h2",{id:"remove-a-price-feed"},"Remove a price feed"),(0,n.kt)("p",null,"If you decided to switch your market to an AMM strategy and you don't need a price feed anymore, you can remove it with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ tdex feeder remove --id c5bb454d-cb47-4fef-9459-248741da6a53\n")),(0,n.kt)("p",null,"This is everything you need to know to manage your price feeds. Your market should now be ready for starting accept trades, let's ",(0,n.kt)("a",{parentName:"p",href:"/docs/v1/provider/registry"},"announce it to the public"),"!."))}l.isMDXComponent=!0}}]);