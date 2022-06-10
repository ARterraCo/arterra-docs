"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[326],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||c[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4143:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={},l="Users",u={unversionedId:"admin-panel/users",id:"admin-panel/users",title:"Users",description:"User Admin Page allows ADMINs to manage marketplace users.",source:"@site/docs/040-admin-panel/010-users.md",sourceDirName:"040-admin-panel",slug:"/admin-panel/users",permalink:"/docs/admin-panel/users",editUrl:"https://github.com/ARterraCo/arterraco.github.io/tree/dev/docs/040-admin-panel/010-users.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OAuth2",permalink:"/docs/third-party-apps/oauth2"},next:{title:"Business partners",permalink:"/docs/admin-panel/business-partners"}},p={},c=[],m={toc:c};function f(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"users"},"Users"),(0,o.kt)("p",null,"User Admin Page allows ",(0,o.kt)("em",{parentName:"p"},"ADMINs")," to manage marketplace users.\nPlatform ",(0,o.kt)("em",{parentName:"p"},"ADMIN")," users have access to all other users and ",(0,o.kt)("em",{parentName:"p"},"BP_ADMIN")," users to only related to that very BP audience."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"BP_ADMIN")," can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"change user's role, e.g. promote from ",(0,o.kt)("em",{parentName:"li"},"FAN")," to ",(0,o.kt)("em",{parentName:"li"},"CREATOR")," or even ",(0,o.kt)("em",{parentName:"li"},"ADMIN")),(0,o.kt)("li",{parentName:"ul"},"track users Stripe onboarding state"),(0,o.kt)("li",{parentName:"ul"},"block users who do not follow Terms and Conditions rules"),(0,o.kt)("li",{parentName:"ul"},"mark user's email verified in case platform user has troubles with verifying its email"),(0,o.kt)("li",{parentName:"ul"},"view how many users are signed up on the platform")),(0,o.kt)("p",null,"Platform ",(0,o.kt)("em",{parentName:"p"},"ADMIN")," can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"all the same as ",(0,o.kt)("em",{parentName:"li"},"BP_ADMIN")," user"),(0,o.kt)("li",{parentName:"ul"},"promote someone to Platform ",(0,o.kt)("em",{parentName:"li"},"ADMIN")," user (In case this user email is preconfigured in API env config)")),(0,o.kt)("p",null,"Screenshot of Users Admin Page:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Users Admin Page",src:r(718).Z,width:"2558",height:"1672"})))}f.isMDXComponent=!0},718:function(e,t,r){t.Z=r.p+"assets/images/user_page-05d6627f82c2eb4f0a92732bbc516416.png"}}]);