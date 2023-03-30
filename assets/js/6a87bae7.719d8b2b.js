"use strict";(self.webpackChunkice_website_v3=self.webpackChunkice_website_v3||[]).push([[777],{4852:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(9231);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5035:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=t(5675),a=(t(9231),t(4852));const i={title:"\u5143\u7d20\u53ef\u89c1",order:16},o=void 0,p={unversionedId:"guide/basic/appear",id:"guide/basic/appear",title:"\u5143\u7d20\u53ef\u89c1",description:"\u5f53\u9700\u8981\u76d1\u6d4b\u4e00\u4e2a\u5143\u7d20\u662f\u5426\u51fa\u73b0\u5728\u53ef\u89c1\u533a\u57df\u65f6\uff08\u6bd4\u5982\u5217\u8868\u6eda\u52a8\u65f6\u662f\u5426\u66dd\u5149\uff09\uff0c\u53ef\u4ee5\u901a\u8fc7 `` \u7ec4\u4ef6\u6765\u76d1\u6d4b\u6307\u5b9a\u5143\u7d20\u662f\u5426\u5f53\u524d\u53ef\u89c1\u6216\u8005\u6d88\u5931\u3002",source:"@site/docs/guide/basic/appear.md",sourceDirName:"guide/basic",slug:"/guide/basic/appear",permalink:"/docs/guide/basic/appear",draft:!1,editUrl:"https://github.com/alibaba/ice/edit/master/website/docs/guide/basic/appear.md",tags:[],version:"current",frontMatter:{title:"\u5143\u7d20\u53ef\u89c1",order:16},sidebar:"docs",previous:{title:"\u73af\u5883\u53d8\u91cf",permalink:"/docs/guide/basic/env"},next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/guide/miniapp/start"}},l={},s=[{value:"\u5b89\u88c5\u7ec4\u4ef6\u4f9d\u8d56",id:"\u5b89\u88c5\u7ec4\u4ef6\u4f9d\u8d56",level:2},{value:"\u5f53\u5143\u7d20\u8fdb\u5165\u53ef\u89c1\u72b6\u6001\u65f6",id:"\u5f53\u5143\u7d20\u8fdb\u5165\u53ef\u89c1\u72b6\u6001\u65f6",level:2},{value:"\u5143\u7d20\u9996\u6b21\u53ef\u89c1",id:"\u5143\u7d20\u9996\u6b21\u53ef\u89c1",level:3},{value:"\u5f53\u5143\u7d20\u8fdb\u5165\u4e0d\u53ef\u89c1\u72b6\u6001\u65f6",id:"\u5f53\u5143\u7d20\u8fdb\u5165\u4e0d\u53ef\u89c1\u72b6\u6001\u65f6",level:2}],c={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u76d1\u6d4b\u4e00\u4e2a\u5143\u7d20\u662f\u5426\u51fa\u73b0\u5728\u53ef\u89c1\u533a\u57df\u65f6\uff08\u6bd4\u5982\u5217\u8868\u6eda\u52a8\u65f6\u662f\u5426\u66dd\u5149\uff09\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"<VisibilityChange />")," \u7ec4\u4ef6\u6765\u76d1\u6d4b\u6307\u5b9a\u5143\u7d20\u662f\u5426\u5f53\u524d\u53ef\u89c1\u6216\u8005\u6d88\u5931\u3002"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u652f\u6301\u8be5\u80fd\u529b\u3002")),(0,a.kt)("h2",{id:"\u5b89\u88c5\u7ec4\u4ef6\u4f9d\u8d56"},"\u5b89\u88c5\u7ec4\u4ef6\u4f9d\u8d56"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<VisibilityChange />")," \u7ec4\u4ef6\u5e76\u4e0d\u662f\u5185\u7f6e\u7ec4\u4ef6\uff0c\u9700\u8981\u901a\u8fc7\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"@ice/appear")," \u6765\u5f15\u5165\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @ice/appear --save\n")),(0,a.kt)("h2",{id:"\u5f53\u5143\u7d20\u8fdb\u5165\u53ef\u89c1\u72b6\u6001\u65f6"},"\u5f53\u5143\u7d20\u8fdb\u5165\u53ef\u89c1\u72b6\u6001\u65f6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import VisibilityChange from '@ice/appear';\n\nexport default function Home() {\n  return (\n    <VisibilityChange\n      onAppear={() => {\n        console.log('onAppear')\n      }}\n    >\n      show something\n    </VisibilityChange>\n  )\n}\n")),(0,a.kt)("h3",{id:"\u5143\u7d20\u9996\u6b21\u53ef\u89c1"},"\u5143\u7d20\u9996\u6b21\u53ef\u89c1"),(0,a.kt)("p",null,"\u6709\u65f6\u5019\u6211\u4eec\u53ea\u9700\u8981\u5143\u7d20\u9996\u6b21\u53ef\u89c1\u7684\u65f6\u673a\uff0c\u4f8b\u5982\u53d1\u9001\u66dd\u5149\u57cb\u70b9\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"useOnce")," \u7684\u81ea\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"p"},"hook")," \u6765\u5b9e\u73b0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/pages/home.tsx"',title:'"src/pages/home.tsx"'},"import { useState } from 'react';\nimport VisibilityChange from '@ice/appear';\n\n// \u793a\u4f8b\u4ee3\u7801\nfunction useOnce(fn) {\n  const [called, setCalled] = useState(false);\n  return (...args) => {\n    if (!called) {\n      setCalled(true);\n      return fn(...args);\n    }\n  };\n}\n\nexport default function Index() {\n  const handleAppearOnce = useOnce(() => {\n    console.log('The first time view appeared.');\n  });\n\n  return (\n    <div className={styles.app}>\n      <VisibilityChange\n        onAppear={handleAppearOnce}\n      >\n        <p>Hello ice.js 3</p>\n      </VisibilityChange>\n    </div>\n  );\n}\n")),(0,a.kt)("h2",{id:"\u5f53\u5143\u7d20\u8fdb\u5165\u4e0d\u53ef\u89c1\u72b6\u6001\u65f6"},"\u5f53\u5143\u7d20\u8fdb\u5165\u4e0d\u53ef\u89c1\u72b6\u6001\u65f6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/home.tsx"',title:'"src/pages/home.tsx"'},"import VisibilityChange from '@ice/appear';\n\nexport default function Home() {\n  return (\n    <VisibilityChange\n      onDisappear={() => {\n        console.log('onDisappear')\n      }}\n    >\n      show something\n    </VisibilityChange>\n  )\n}\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u8bf7\u6ce8\u610f\uff0c\u5f53\u5143\u7d20\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"transform")," \u7b49\u975e\u89e6\u53d1 DOM \u5e03\u5c40\u53d8\u66f4\u7684\u884c\u4e3a\u4f7f\u5143\u7d20\u79fb\u52a8\u65f6\uff0c\u672c\u7ec4\u4ef6\u7684\u884c\u4e3a\u53ef\u80fd\u4f1a\u5931\u6548\u3002")))}d.isMDXComponent=!0}}]);