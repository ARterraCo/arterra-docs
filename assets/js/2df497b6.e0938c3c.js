"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[408],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1429:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],l={},s="Intro",p={unversionedId:"intro",id:"intro",title:"Intro",description:"Production",source:"@site/docs/010-intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/ARterraCo/arterraco.github.io/tree/dev/docs/010-intro.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Payment Flow",permalink:"/docs/payment-flow"}},u={},c=[{value:"Production",id:"production",level:2},{value:"Sandbox",id:"sandbox",level:2},{value:"Glossary and main terms",id:"glossary-and-main-terms",level:2},{value:"User roles",id:"user-roles",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"intro"},"Intro"),(0,i.kt)("h2",{id:"production"},"Production"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"web page ",(0,i.kt)("a",{parentName:"li",href:"https://app.arterra.co/"},"https://app.arterra.co/")),(0,i.kt)("li",{parentName:"ul"},"mainnet NEAR contract ",(0,i.kt)("a",{parentName:"li",href:"https://explorer.near.org/accounts/arterra.near"},"arterra.near")),(0,i.kt)("li",{parentName:"ul"},"Swagger documentation ",(0,i.kt)("a",{parentName:"li",href:"https://app.arterra.co/api/api/"},"https://app.arterra.co/api/api/"))),(0,i.kt)("h2",{id:"sandbox"},"Sandbox"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"web page ",(0,i.kt)("a",{parentName:"li",href:"https://staging.arterra.co/"},"https://staging.arterra.co/")),(0,i.kt)("li",{parentName:"ul"},"testnet NEAR contract ",(0,i.kt)("a",{parentName:"li",href:"https://explorer.testnet.near.org/accounts/stage.arterra.testnet"},"stage.arterra.testnet")),(0,i.kt)("li",{parentName:"ul"},"Swagger documentation ",(0,i.kt)("a",{parentName:"li",href:"https://staging.arterra.co/api/api/"},"https://staging.arterra.co/api/api/"))),(0,i.kt)("h2",{id:"glossary-and-main-terms"},"Glossary and main terms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Digital Collectible or NFT (non-fungible token) - an easily verifiable digital asset\nthat can represent items like images, videos, music, event tickets, and a whole lot more!",(0,i.kt)("br",null),"\nAt ARterra, we like to refer to NFTs as Digital Collectibles because we go way beyond your PFP,\nor profile picture, collectibles like Cryptopunks and Bored Ape Yacht Club.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Business partner (",(0,i.kt)("em",{parentName:"p"},"BP"),") - ARterra Labs partner that has restricted access to the Admin Panel\nwith a possibility to manage users that were onboarded by that partner.",(0,i.kt)("br",null),"\nBusiness partner can integrate own 3rd party applications to ARterra Labs.",(0,i.kt)("br",null),"\nBP applications can make actions on behalf of ARterra Labs users via OAuth2 connection. "))),(0,i.kt)("h3",{id:"user-roles"},"User roles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"FAN")," - The default role that is assigned to user during sign up.\nUser can view Marketplace, other users profile, take part in airdrops, purchase Digital Collectibles,\nsell or gift own Digital Collectibles.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"CREATOR")," - Additionally to all ",(0,i.kt)("em",{parentName:"p"},"FAN")," permissions, user can mint new Digital Collectible\nor increase supply of the Digital Collectibles that were minted by this user.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"ADMIN")," (Platform ",(0,i.kt)("em",{parentName:"p"},"ADMIN"),") - Additionally to all ",(0,i.kt)("em",{parentName:"p"},"CREATOR")," permissions, ",(0,i.kt)("em",{parentName:"p"},"ADMINs")," have access to the Admin Panel.",(0,i.kt)("br",null),"\nADMINs can manage other users role, business partners and review payments.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"BP ADMIN")," (Business Partner ",(0,i.kt)("em",{parentName:"p"},"ADMIN"),") - Additionally to all ",(0,i.kt)("em",{parentName:"p"},"CREATOR")," permissions, user has access to the Admin Panel.",(0,i.kt)("br",null),"\n",(0,i.kt)("em",{parentName:"p"},"BP ADMINs")," can manage other users role and review payments related to users that were onboarded to ARterra Labs platform by this BP."))),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"Contact ARterra Labs representatives for questions and issues using the platform"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://discord.com/invite/xAD2cTsHZG'"},"Discord")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/ARterraLabs'"},"Twitter"))))}d.isMDXComponent=!0}}]);