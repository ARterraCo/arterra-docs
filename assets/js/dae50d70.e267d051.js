"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[862],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,g=m["".concat(s,".").concat(c)]||m[c]||v[c]||l;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6303:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return v}});var r=n(7462),i=n(3366),l=(n(7294),n(3905)),a=["components"],o={},s="Changelog",p={unversionedId:"Changelog",id:"Changelog",title:"Changelog",description:"Platform version consists of two parts divided with dash (-{clientversion}):",source:"@site/docs/060-Changelog.md",sourceDirName:".",slug:"/Changelog",permalink:"/docs/Changelog",editUrl:"https://github.com/ARterraCo/arterraco.github.io/tree/dev/docs/060-Changelog.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"API Reference",permalink:"/docs/API-reference"}},u={},v=[{value:"v0.0.29-v0.0.26 (29.06.2022)",id:"v0029-v0026-29062022",level:3},{value:"v0.0.28-v0.0.25 (14.06.2022)",id:"v0028-v0025-14062022",level:3},{value:"v0.0.27-v0.0.24 (03.06.2022)",id:"v0027-v0024-03062022",level:3},{value:"v0.0.26-v0.0.24 (27.05.2022)",id:"v0026-v0024-27052022",level:3},{value:"v0.0.25-v0.0.23 (17.05.2022)",id:"v0025-v0023-17052022",level:3},{value:"v0.0.24-v0.0.22 (13.05.2022)",id:"v0024-v0022-13052022",level:3},{value:"v0.0.24-v0.0.21 (13.05.2022)",id:"v0024-v0021-13052022",level:3},{value:"v0.0.23-v0.0.20 (04.05.2022)",id:"v0023-v0020-04052022",level:3},{value:"v0.0.23-v0.0.19 (03.05.2022)",id:"v0023-v0019-03052022",level:3},{value:"v0.0.22-v0.0.18 (30.04.2022)",id:"v0022-v0018-30042022",level:3},{value:"v0.0.21-v0.0.17 (22.04.2022)",id:"v0021-v0017-22042022",level:3},{value:"v0.0.20-v0.0.17 (20.04.2022)",id:"v0020-v0017-20042022",level:3}],m={toc:v};function c(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"changelog"},"Changelog"),(0,l.kt)("p",null,"Platform version consists of two parts divided with dash (",(0,l.kt)("inlineCode",{parentName:"p"},"{server_version}-{client_version}"),"): ",(0,l.kt)("br",null),"\nfirst part is API server version and the second one is web client application version."),(0,l.kt)("h3",{id:"v0029-v0026-29062022"},"v0.0.29-v0.0.26 (29.06.2022)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI/API]")," Protect airdrop claiming with security token"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI/API]")," Enhance Admin Panel Users page with filters and sorting"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI/API]")," Add IPFS image storing (currently with Pinata only, own IPFS node will be set up later)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI/API]")," Added Get list button to fetch csv file with all user emails for Admin Panel"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI]")," OAuth2 Sign in Page restyle and add Business partner links and description")),(0,l.kt)("h3",{id:"v0028-v0025-14062022"},"v0.0.28-v0.0.25 (14.06.2022)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI/API]")," 3D Models support"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI/API]")," Marketing Mailchimp Emails for Platform ",(0,l.kt)("em",{parentName:"li"},"ADMIN")," users"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[API]")," Fix NFT search by business partner"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[API]")," Add profile info to OAuth2 access token response"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI]")," Fix refresh access token requests. Enable usage in multiple browser tabs "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI/API]")," Transactional email layout improvements (email verification, password reset, gift, purchase notifications)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI/API]")," Other bug fixes")),(0,l.kt)("h3",{id:"v0027-v0024-03062022"},"v0.0.27-v0.0.24 (03.06.2022)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[API]")," Add possibility to hide Digital Collectible from Marketplace page via ENV config")),(0,l.kt)("h3",{id:"v0026-v0024-27052022"},"v0.0.26-v0.0.24 (27.05.2022)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI/API]")," Transactional emails improvements:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Redesign all emails"),(0,l.kt)("li",{parentName:"ul"},"Add ",(0,l.kt)("inlineCode",{parentName:"li"},'Your Digital Collectible "{title}" was sold!')," email for sellers when somebody purchases their NFT"),(0,l.kt)("li",{parentName:"ul"},"Add ",(0,l.kt)("inlineCode",{parentName:"li"},'You received a Digital Collectible "{title}"!')," email for recipients when somebody gifts them NFT"),(0,l.kt)("li",{parentName:"ul"},"Send emails via Mailchimp Transactional service for better deliverability analytics"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI]")," Admin Business Partner page UI improvements "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI/API]")," Other bug fixes")),(0,l.kt)("h3",{id:"v0025-v0023-17052022"},"v0.0.25-v0.0.23 (17.05.2022)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI/API]")," Allow selecting up to 500 recipients during Digital Collectible gifting"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI]")," Fix missing Business Partner assign popup for Users Admin Panel page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI/API]")," Other bug fixes")),(0,l.kt)("h3",{id:"v0024-v0022-13052022"},"v0.0.24-v0.0.22 (13.05.2022)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI]")," Fix typo in ARterra Labs link preview when using platform link in social media posts or messengers")),(0,l.kt)("h3",{id:"v0024-v0021-13052022"},"v0.0.24-v0.0.21 (13.05.2022)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI/API]")," Allow selecting up to 100 recipients during Digital Collectible gifting"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI]")," Add button to receive Digital Collectible Owners CSV file with emails for creators"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI]")," Improve ARterra Labs link previews when using platform link in social media posts or messengers")),(0,l.kt)("h3",{id:"v0023-v0020-04052022"},"v0.0.23-v0.0.20 (04.05.2022)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI]")," Add autoplay for video Digital Collectibles")),(0,l.kt)("h3",{id:"v0023-v0019-03052022"},"v0.0.23-v0.0.19 (03.05.2022)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI/API]")," Improve client side performance",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"add frontend static file caching and compression"),(0,l.kt)("li",{parentName:"ul"},"optimize file size of user avatars images and Digital Collectibles previews"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[API]")," Abort payment processing when price change occurs"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI/API]")," Other bug fixes")),(0,l.kt)("h3",{id:"v0022-v0018-30042022"},"v0.0.22-v0.0.18 (30.04.2022)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI/API]")," Connect Twitch and Discord social accounts on Profile page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI]")," Navigation bar redesign:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"add navigation Drawer for Mobile version"),(0,l.kt)("li",{parentName:"ul"},"show username on Desktop version"),(0,l.kt)("li",{parentName:"ul"},"move Logout button to Profile page"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI/API]")," Allow to sign-in not only with email but also using username or wallet"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[API]")," Add API endpoint to receive Digital Collectible Owners CSV file with emails for creators ")),(0,l.kt)("h3",{id:"v0021-v0017-22042022"},"v0.0.21-v0.0.17 (22.04.2022)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[API]")," fix payment flow crashes")),(0,l.kt)("h3",{id:"v0020-v0017-20042022"},"v0.0.20-v0.0.17 (20.04.2022)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI/API]")," Connect Twitter social account on Profile page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[API]")," Sort Digital Collectible Owners by offer price: from lowest to highest.\nOwners who don't sell their Collectibles are shown in the end."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[UI/API]")," Other bug fixes")))}c.isMDXComponent=!0}}]);