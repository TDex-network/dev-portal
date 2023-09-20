"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[6439],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,h=p["".concat(s,".").concat(f)]||p[f]||u[f]||r;return n?a.createElement(h,d(d({ref:t},l),{},{components:n})):a.createElement(h,d({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,d=new Array(r);d[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,d[1]=i;for(var c=2;c<r;c++)d[c]=n[c];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3938:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),d=["components"],i={title:"Fee Account",sidebar_position:4},s=void 0,c={unversionedId:"provider/daemon/fee_account",id:"version-0.9.1/provider/daemon/fee_account",isDocsHomePage:!1,title:"Fee Account",description:"The daemon is designed to pay for Liquid network fees to include a transaction in the blockchain, whether it is a trade between the daemon and a trader or a withdraw from one of the HD wallet accounts.",source:"@site/versioned_docs/version-0.9.1/provider/daemon/fee_account.md",sourceDirName:"provider/daemon",slug:"/provider/daemon/fee_account",permalink:"/docs/v0/provider/daemon/fee_account",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/versioned_docs/version-0.9.1/provider/daemon/fee_account.md",tags:[],version:"0.9.1",sidebarPosition:4,frontMatter:{title:"Fee Account",sidebar_position:4},sidebar:"version-0.9.1/tutorialSidebar",previous:{title:"Init & Unlock",permalink:"/docs/v0/provider/daemon/init_daemon"},next:{title:"Deposit funds",permalink:"/docs/v0/provider/daemon/market/deposit_funds"}},l=[{value:"Deposit and claim funds",id:"deposit-and-claim-funds",children:[]},{value:"List all deposit addresses",id:"list-all-deposit-addresses",children:[]},{value:"Check the balance",id:"check-the-balance",children:[]},{value:"Withdraw funds",id:"withdraw-funds",children:[]}],u={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The daemon is designed to pay for Liquid network fees to include a transaction in the blockchain, whether it is a trade between the daemon and a trader or a withdraw from one of the HD wallet accounts."),(0,r.kt)("p",null,"The Fee account is the very first account you should send funds to. This account is designed to handle only L-BTC funds. If you deposit funds of some other asset type, they just won't be used by this acount. You'll stll be able to withdraw them though."),(0,r.kt)("p",null,"Since this account is meant to only pay for network fees, it will need to cover very low amounts, like ~700 sats/vbyte per trade transaction, even lower for withdrawls. Therefore, it is suggested to fund it with multiple UTXOs with small amounts like for example 2000 or 5000 sats."),(0,r.kt)("h2",{id:"deposit-and-claim-funds"},"Deposit and claim funds"),(0,r.kt)("p",null,"Get some deposit address(es):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ tdex fee deposit --num_of_addresses 1\n# {\n#   "address": "el1qqdxwu2769zwkp9gn7pfl9vdvelfhjc6hk8v56wtpn6aww7h8ckhme7tj6hggvw3ycyn9epqlwzzml5yhdn9sv0dlxu676nr5k",\n#   "blinding": "7a01d7ce7367bcd4b444f34f00580dbef5b617447a3e07cf07c8883c34a1e0d8"\n# }\n')),(0,r.kt)("p",null,"If you want to get only one address, you can omit the ",(0,r.kt)("inlineCode",{parentName:"p"},"--num_of_addresses")," flag."),(0,r.kt)("p",null,"Now send some L-BTC to the address(es), then claim the deposits for the fee account with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ tdex fee claim --outpoints \'[{"hash": "248a47a99ae3e6de93a614a05ab1c0e064aa9ea2fb292bfa1b33c48b067cac10", "index": 1}]\'\n#\n# fee account is funded\n')),(0,r.kt)("p",null,"The daemon will start watching for those unconfirmed unspents if needed. You might not see the expected available balance until all utxos have ben at least included in blockchain."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Take a look at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/v0/provider/daemon/fee_fragmenter_account"},"Fee Fragmenter"),", a special account that splits its funds into many fragments, becoming then deposits of the Fee account. This account aims to make your life easier for depositing funds to the Fee account."))),(0,r.kt)("h2",{id:"list-all-deposit-addresses"},"List all deposit addresses"),(0,r.kt)("p",null,"You can see the list of all derived deposit addresses so far with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ tdex fee addresses\n# [\n#   {\n#     "address": "el1qqdxwu2769zwkp9gn7pfl9vdvelfhjc6hk8v56wtpn6aww7h8ckhme7tj6hggvw3ycyn9epqlwzzml5yhdn9sv0dlxu676nr5k",\n#     "blinding": "7a01d7ce7367bcd4b444f34f00580dbef5b617447a3e07cf07c8883c34a1e0d8"\n#   }\n# ]\n')),(0,r.kt)("p",null,"Like for the ",(0,r.kt)("inlineCode",{parentName:"p"},"deposit")," command, the list is a pair of confidential address and related private blinding key."),(0,r.kt)("h2",{id:"check-the-balance"},"Check the balance"),(0,r.kt)("p",null,"You can check the balance of the Fee account with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ tdex fee balanace\n# {\n#   "available_balance": "50000",\n#   "total_balance": "50000"\n# }\n')),(0,r.kt)("p",null,"The output shows the ",(0,r.kt)("inlineCode",{parentName:"p"},"available_balance"),", or the balance of all confirmed and spendable L-BTC utxos, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"total_balance"),", ie. including all confirmed/unconfirmed utxos and also those currently used by some not-yet confirmed transaction."),(0,r.kt)("h2",{id:"withdraw-funds"},"Withdraw funds"),(0,r.kt)("p",null,"Of course, you are allowed to move funds of the Fee account away to an address of yours.",(0,r.kt)("br",{parentName:"p"}),"\n","For this you can run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ tdex fee withdraw --amount 10000 --address AzpppEPZ9oNeogPNVZKLLroubqTbfhsvun9AaucVBNwwNXc2CCLg2LQvGcKPA8KVwK1qU7xKt38KKLEt\n# {\n#   "txid": "0bf8a14239710cff95a41d0ccba381ed878b37ecba82ef0174c303548d023150"\n# }\n')),(0,r.kt)("p",null,"By default the command uses make you withdraw L-BTC funds. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--asset")," flag and specify the asset of the funds to withdraw if you need to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ tdex fee withdraw --amount 2000000 --address AzpppEPZ9oNeogPNVZKLLroubqTbfhsvun9AaucVBNwwNXc2CCLg2LQvGcKPA8KVwK1qU7xKt38KKLEt --asset dfb6da971d312ecb6715fbeecfd1f71dcd7a2df2e341303269f5f14e784fa670\n# {\n#   "txid": "b7a53f26fd49cf5a00660c5788a28265501a9a89df3ddf060d0b2abdd66e9e40"\n# }\n')),(0,r.kt)("p",null,"What's next? Check out how to ",(0,r.kt)("a",{parentName:"p",href:"/docs/v0/provider/daemon/market/deposit_funds"},"create and manage a market"),"."))}p.isMDXComponent=!0}}]);