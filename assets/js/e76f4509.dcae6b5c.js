"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[8041],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3647:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],d={title:"Migrate a daemon to v1",sidebar_position:4},l=void 0,s={unversionedId:"provider/daemon/migrate_daemon",id:"provider/daemon/migrate_daemon",isDocsHomePage:!1,title:"Migrate a daemon to v1",description:"If you are already running a v0 liquidity provider, you can bump its version to the newest v1 by using the brand new service called tdex-migration. This service requires the unlocking password and helps you translating the data stored in the old daemon's datadir to the format required by the newest version v1 and by the Ocean wallet.",source:"@site/docs/provider/daemon/migrate_daemon.md",sourceDirName:"provider/daemon",slug:"/provider/daemon/migrate_daemon",permalink:"/docs/latest/provider/daemon/migrate_daemon",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/docs/provider/daemon/migrate_daemon.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Migrate a daemon to v1",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Init & Unlock",permalink:"/docs/latest/provider/daemon/init_daemon"},next:{title:"Fee Account",permalink:"/docs/latest/provider/daemon/fee_account"}},p=[{value:"Migrate standalone daemon",id:"migrate-standalone-daemon",children:[]}],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you are already running a ",(0,o.kt)("em",{parentName:"p"},"v0")," liquidity provider, you can bump its version to the newest ",(0,o.kt)("em",{parentName:"p"},"v1")," by using the brand new service called ",(0,o.kt)("inlineCode",{parentName:"p"},"tdex-migration"),". This service requires the unlocking password and helps you translating the data stored in the old daemon's datadir to the format required by the newest version ",(0,o.kt)("em",{parentName:"p"},"v1")," and by the Ocean wallet."),(0,o.kt)("p",null,"You can either use the released binary, or you can build it yourself by cloning the official tdex-daemon repository and run ",(0,o.kt)("inlineCode",{parentName:"p"},"make build-migration")," - you'll find it in the ",(0,o.kt)("em",{parentName:"p"},"build/")," folder -.\nInstead, if you serve your daemon as a dockerized solution, you can just pull the latest official image with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker pull ghcr.io/tdex-network/tdexd:latest")," and use the ",(0,o.kt)("inlineCode",{parentName:"p"},"tdex-migration")," binary packed together with ",(0,o.kt)("inlineCode",{parentName:"p"},"tdexd")," (daemon) and ",(0,o.kt)("inlineCode",{parentName:"p"},"tdex")," (cli)."),(0,o.kt)("p",null,"The service can be configured by the mean of the fowllowing flags:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--password")," (required) the daemon's password used to unlock the storage for reading all the data that is going to be translated"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--v0-datadir")," (optional) the path of the ",(0,o.kt)("em",{parentName:"li"},"v0")," daemons' datadir to be migrated. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.tdex-daemon")," for Linux and ",(0,o.kt)("inlineCode",{parentName:"li"},"~/Library/Application\\ Support/Tdex-daemon")," for MacOS"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--v1-datadir")," (optional) the path of the ",(0,o.kt)("em",{parentName:"li"},"v1")," daemon's datadir as result of the migration. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.tdex-daemon")," for Linux and ",(0,o.kt)("inlineCode",{parentName:"li"},"~/Library/Application\\ Support/Tdex-daemon")," for MacOS in order to overwrite the old datadir"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--ocean-datadir")," (optional) the path of the Ocean wallet's datadir as result of the migration. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.oceand")," for Linux and ",(0,o.kt)("inlineCode",{parentName:"li"},"~/Library/Application\\ Support/Oceand")," for MacOS"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--no-backup")," (optional) skip creating a ",(0,o.kt)("inlineCode",{parentName:"li"},".tar.gz")," compressed archive of the old datadir, included in the new one otherwise. When disabling the backup, the old datadir is just deleted and forever lost. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("h2",{id:"migrate-standalone-daemon"},"Migrate standalone daemon"),(0,o.kt)("p",null,"Move the ",(0,o.kt)("inlineCode",{parentName:"p"},"tdex-migration")," binary to your ",(0,o.kt)("em",{parentName:"p"},"PATH")," (eg. ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),"), then start the migration with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Start migration with default configuration \n$ tdex-migration --password password\n\n# Start migration with default configuration and no backup of the old datadir\n$ tdex-migration --password password --no-backup\n\n# Start migration with custom source folder and default targets\n$ tdex-migration --password password --v0-datadir path/to/datadir\n\n# Start migration with default source folder and custom targets\n$ tdex-migration --password password --v1-datadir path/to/datadir --ocean-datadir path/to/ocean-datadir\n")),(0,o.kt)("p",null,"Once the migration is complete, you should first start the Ocean wallet and then the daemon as shown ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/provider/daemon/getting_started/run_standalone"},"here")," - don't forget to change the path for their datadirs with ",(0,o.kt)("inlineCode",{parentName:"p"},"export OCEAN_DATADIR=path/to/wallet/datadir")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"export TDEX_DATADIR=/path/to/daemon/datadir")," if you don't use the defaults."),(0,o.kt)("p",null,"Keep in mind that you must run your ocean wallet configured with ",(0,o.kt)("inlineCode",{parentName:"p"},"OCEAN_DB_TYPE=badger")," when you migrate your daemon. You can't select a different storage unless you choose to move to a brand new wallet, or restore the same one by loosing the whole trading history though."),(0,o.kt)("p",null,"##\xa0Migrate dockerized daemon"),(0,o.kt)("p",null,"Once you pulled down the latest daemon's docker images, take care of making a backup of your daemon's datadir manually, then you can run the migration by overriding its entrypoint with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run --rm --entrypoint 'tdex-migration' \\\n  --volume /path/to/datadir:/home/tdex/.tdex-daemon \\\n  ghcr.io/tdex-network/tdexd:latest \\\n  --password password \\\n  --ocean-datadir /home/tdex/.tdex-daemon/oceand \\\n  --no-backup\n")),(0,o.kt)("p",null,"With this command your provider's datadir will be overwritten and will also include the datadir of the Ocean wallet.\nThe backup of the datadir is intentionally skipped because that operation might cause problems with the migration depending on the machine on which docker is installed. To prevent any problem in advance, we strongly suggest you to manually backup the ",(0,o.kt)("em",{parentName:"p"},"v0")," datadir and skip this step."),(0,o.kt)("p",null,"Once the migration is complete, you should move the ocean datadir out of the daemon's one, then start the wallet and the daemon as hown ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/provider/daemon/getting_started/run_docker"},"here"),"."),(0,o.kt)("p",null,"Keep in mind that you must run your ocean wallet configured with ",(0,o.kt)("inlineCode",{parentName:"p"},"OCEAN_DB_TYPE=badger")," when you migrate your daemon. You can't select a different storage unless you choose to move to a brand new wallet, or restore the same one by loosing the whole trading history though."),(0,o.kt)("p",null,"Wonderful! You just bumped your provider to the latest version and you can now see a lot of new cool stuff, like the new commands for managing the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/provider/daemon/fee_account"},(0,o.kt)("em",{parentName:"a"},"fee account"))," or the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/provider/daemon/market_account"},(0,o.kt)("em",{parentName:"a"},"markets")),", or even how to handle the newly introduced ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/provider/daemon/feeder"},(0,o.kt)("em",{parentName:"a"},"price feeds"))," or the changes made to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/provider/daemon/webhooks"},"webhooks"),". You can surf the documentation to know more of every features of the new ",(0,o.kt)("em",{parentName:"p"},"v1")," provider!"))}m.isMDXComponent=!0}}]);