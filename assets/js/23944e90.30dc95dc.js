"use strict";(self.webpackChunkice_website_v3=self.webpackChunkice_website_v3||[]).push([[7481],{4852:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(9231);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var m=n.createContext({}),o=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(m.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,m=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=o(a),d=i,k=s["".concat(m,".").concat(d)]||s[d]||u[d]||l;return a?n.createElement(k,r(r({ref:t},c),{},{components:a})):n.createElement(k,r({ref:t},c))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=d;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[s]="string"==typeof e?e:i,r[1]=p;for(var o=2;o<l;o++)r[o]=a[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9604:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(5675),i=(a(9231),a(4852));const l={title:"\u5feb\u901f\u5f00\u59cb",order:1},r=void 0,p={unversionedId:"guide/miniapp/start",id:"guide/miniapp/start",title:"\u5feb\u901f\u5f00\u59cb",description:"ice.js \u652f\u6301\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u3002\u7531\u4e8e\u5c0f\u7a0b\u5e8f\u7aef\u5927\u90e8\u5206\u80fd\u529b\u53ca\u914d\u7f6e\u5747\u4e0e Web \u5e94\u7528\u5bf9\u9f50\uff0c\u672c\u7ae0\u8282\u4ec5\u4ecb\u7ecd\u5c0f\u7a0b\u5e8f\u5feb\u901f\u5f00\u59cb\u3001\u4e0e Web \u5e94\u7528\u7684\u5dee\u5f02\u70b9\u4ee5\u53ca\u5c0f\u7a0b\u5e8f\u72ec\u6709\u80fd\u529b\u7684\u4f7f\u7528\u3002",source:"@site/docs/guide/miniapp/start.md",sourceDirName:"guide/miniapp",slug:"/guide/miniapp/start",permalink:"/docs/guide/miniapp/start",draft:!1,editUrl:"https://github.com/alibaba/ice/edit/master/website/docs/guide/miniapp/start.md",tags:[],version:"current",frontMatter:{title:"\u5feb\u901f\u5f00\u59cb",order:1},sidebar:"docs",previous:{title:"\u5143\u7d20\u53ef\u89c1",permalink:"/docs/guide/basic/appear"},next:{title:"\u5e94\u7528\u914d\u7f6e",permalink:"/docs/guide/miniapp/app-config"}},m={},o=[{value:"\u521b\u5efa\u5c0f\u7a0b\u5e8f\u5e94\u7528",id:"\u521b\u5efa\u5c0f\u7a0b\u5e8f\u5e94\u7528",level:2},{value:"1. \u901a\u8fc7\u5c0f\u7a0b\u5e8f\u6a21\u677f\u521b\u5efa",id:"1-\u901a\u8fc7\u5c0f\u7a0b\u5e8f\u6a21\u677f\u521b\u5efa",level:3},{value:"2. \u6539\u9020\u5df2\u6709\u7684 Web \u5e94\u7528",id:"2-\u6539\u9020\u5df2\u6709\u7684-web-\u5e94\u7528",level:3},{value:"\u914d\u7f6e\u547d\u4ee4",id:"\u914d\u7f6e\u547d\u4ee4",level:4},{value:"\u914d\u7f6e\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u63d2\u4ef6\u53ca\u8fd0\u884c\u65f6\u4f9d\u8d56",id:"\u914d\u7f6e\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u63d2\u4ef6\u53ca\u8fd0\u884c\u65f6\u4f9d\u8d56",level:4},{value:"\u6dfb\u52a0 <code>miniappManifest</code>",id:"\u6dfb\u52a0-miniappmanifest",level:4},{value:"\u9002\u914d HTML \u6807\u7b7e\u6837\u5f0f",id:"\u9002\u914d-html-\u6807\u7b7e\u6837\u5f0f",level:4},{value:"\u8c03\u8bd5\u4e0e\u6784\u5efa",id:"\u8c03\u8bd5\u4e0e\u6784\u5efa",level:2},{value:"\u652f\u6301\u5c0f\u7a0b\u5e8f\u5e73\u53f0",id:"\u652f\u6301\u5c0f\u7a0b\u5e8f\u5e73\u53f0",level:2},{value:"\u5f85\u652f\u6301\u80fd\u529b",id:"\u5f85\u652f\u6301\u80fd\u529b",level:2},{value:"\u4e0d\u652f\u6301\u80fd\u529b",id:"\u4e0d\u652f\u6301\u80fd\u529b",level:2}],c={toc:o},s="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(s,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ice.js \u652f\u6301\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u3002\u7531\u4e8e\u5c0f\u7a0b\u5e8f\u7aef\u5927\u90e8\u5206\u80fd\u529b\u53ca\u914d\u7f6e\u5747\u4e0e Web \u5e94\u7528\u5bf9\u9f50\uff0c\u672c\u7ae0\u8282\u4ec5\u4ecb\u7ecd\u5c0f\u7a0b\u5e8f\u5feb\u901f\u5f00\u59cb\u3001\u4e0e Web \u5e94\u7528\u7684\u5dee\u5f02\u70b9\u4ee5\u53ca\u5c0f\u7a0b\u5e8f\u72ec\u6709\u80fd\u529b\u7684\u4f7f\u7528\u3002"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u5f53\u4f60\u51c6\u5907\u5f00\u53d1\u5c0f\u7a0b\u5e8f\u65f6\uff0c\u8bf7\u52a1\u5fc5\u9605\u8bfb\u672c\u6a21\u5757\u6587\u6863\u3002")),(0,i.kt)("h2",{id:"\u521b\u5efa\u5c0f\u7a0b\u5e8f\u5e94\u7528"},"\u521b\u5efa\u5c0f\u7a0b\u5e8f\u5e94\u7528"),(0,i.kt)("p",null,"\u5171\u6709\u4e24\u79cd\u65b9\u5f0f\u521b\u5efa ice.js \u5c0f\u7a0b\u5e8f\u5e94\u7528\uff1a"),(0,i.kt)("h3",{id:"1-\u901a\u8fc7\u5c0f\u7a0b\u5e8f\u6a21\u677f\u521b\u5efa"},"1. \u901a\u8fc7\u5c0f\u7a0b\u5e8f\u6a21\u677f\u521b\u5efa"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm create ice ice-app --template @ice/miniapp-scaffold\n$ cd ice-app\n$ npm install\n")),(0,i.kt)("p",null,"\u521b\u5efa\u5b8c\u6bd5\u540e\u53ef\u4ee5\u76f4\u63a5\u8df3\u5230\u8c03\u8bd5\u4e0e\u6784\u5efa\u7ae0\u8282\u3002"),(0,i.kt)("h3",{id:"2-\u6539\u9020\u5df2\u6709\u7684-web-\u5e94\u7528"},"2. \u6539\u9020\u5df2\u6709\u7684 Web \u5e94\u7528"),(0,i.kt)("p",null,"\u5c06\u5df2\u6709\u7684 ice.js Web \u5e94\u7528\u6539\u9020\u4e3a\u652f\u6301\u5c0f\u7a0b\u5e8f\u5f00\u53d1\uff0c\u53ea\u9700\u8fdb\u884c\u4ee5\u4e0b\u51e0\u6b65\uff1a"),(0,i.kt)("h4",{id:"\u914d\u7f6e\u547d\u4ee4"},"\u914d\u7f6e\u547d\u4ee4"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u914d\u7f6e\u4ee5\u4e0b scripts \u547d\u4ee4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  "scripts": {\n    "start": "ice start",\n    "start:wechat": "ice start --target wechat-miniprogram",\n    "start:ali": "ice start --target ali-miniapp",\n    "build": "ice build",\n    "build:wechat": "ice build --target wechat-miniprogram",\n    "build:ali": "ice start --target ali-miniapp"\n  }\n')),(0,i.kt)("h4",{id:"\u914d\u7f6e\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u63d2\u4ef6\u53ca\u8fd0\u884c\u65f6\u4f9d\u8d56"},"\u914d\u7f6e\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u63d2\u4ef6\u53ca\u8fd0\u884c\u65f6\u4f9d\u8d56"),(0,i.kt)("p",null,"\u5b89\u88c5\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u63d2\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"p"},"@ice/plugin-miniapp")," \u548c\u5c0f\u7a0b\u5e8f\u8fd0\u884c\u65f6\u4f9d\u8d56 ",(0,i.kt)("inlineCode",{parentName:"p"},"@ice/miniapp-runtime"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install @ice/plugin-miniapp -D\n$ npm install @ice/miniapp-runtime -S\n")),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"ice.config.mts")," \u4e2d\u914d\u7f6e\u63d2\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=ice.config.mts",title:"ice.config.mts"},"import miniapp from '@ice/plugin-miniapp';\n\nexport default defineConfig({\n  plugins: [miniapp()],\n});\n")),(0,i.kt)("h4",{id:"\u6dfb\u52a0-miniappmanifest"},"\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"h4"},"miniappManifest")),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/app.tsx")," \u4e2d\u5bfc\u51fa ",(0,i.kt)("inlineCode",{parentName:"p"},"miniappManifest"),"\uff0c\u5728\u5176\u4e2d\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"routes")," \u6570\u7ec4\u7528\u4ee5\u6307\u5b9a\u5c0f\u7a0b\u5e8f\u4e2d\u7684\u9875\u9762\uff08\u8be6\u89c1",(0,i.kt)("a",{parentName:"p",href:"./router"},"\u5c0f\u7a0b\u5e8f-\u8def\u7531"),"\uff09:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export const miniappManifest = {\n  routes: [\n    // \u521d\u59cb\u5316\u9879\u76ee\u4e2d\u4ec5\u6709 index \u4e00\u4e2a\u9875\u9762\n    'index' \n  ]\n};\n")),(0,i.kt)("h4",{id:"\u9002\u914d-html-\u6807\u7b7e\u6837\u5f0f"},"\u9002\u914d HTML \u6807\u7b7e\u6837\u5f0f"),(0,i.kt)("p",null,"\u4ece Web \u5e94\u7528\u8fc1\u79fb\u800c\u6765\u610f\u5473\u7740\u4f60\u7684\u9879\u76ee\u4e2d\u4f7f\u7528\u4e86 HTML \u6807\u7b7e\uff0c\u4e3a\u4e86\u9002\u914d\u6837\u5f0f\uff0c\u4f60\u8fd8\u9700\u8981\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/global.css")," \u5f15\u5165\u6837\u5f0f\u7684 polyfill\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"@import '@ice/miniapp-html-styles/html';\n")),(0,i.kt)("p",null,"\u5173\u4e8e\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u4f7f\u7528 HTML \u6807\u7b7e\u7684\u6ce8\u610f\u4e8b\u9879\uff0c\u8be6\u89c1\u6587\u6863",(0,i.kt)("a",{parentName:"p",href:"./use-html"},"\u4f7f\u7528 HTML \u6807\u7b7e"),"\u3002"),(0,i.kt)("h2",{id:"\u8c03\u8bd5\u4e0e\u6784\u5efa"},"\u8c03\u8bd5\u4e0e\u6784\u5efa"),(0,i.kt)("p",null,"\u5f53\u9700\u8981\u5f00\u53d1\u5c0f\u7a0b\u5e8f\u65f6\uff0c\u6267\u884c\u5bf9\u5e94\u7684\u547d\u4ee4\u5373\u53ef\u3002\u4f8b\u5982\uff0c\u9700\u8981\u5f00\u53d1\u8c03\u8bd5\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u65f6\uff0c\u6267\u884c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm run start:wechat\n")),(0,i.kt)("p",null,"\u9700\u8981\u6784\u5efa\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u751f\u4ea7\u73af\u5883\u7684\u4ea7\u7269\u65f6\uff0c\u6267\u884c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm run build:wechat\n")),(0,i.kt)("p",null,"\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u547d\u4ee4\u884c\u4f1a\u7ed9\u51fa\u76f8\u5e94\u63d0\u793a\uff0c\u63d0\u9192\u5f00\u53d1\u8005\u4f7f\u7528\u5bf9\u5e94\u7684\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u8005\u5de5\u5177\u6253\u5f00\u7f16\u8bd1\u4ea7\u7269\u76ee\u5f55\u8fdb\u884c\u8c03\u8bd5\u9884\u89c8\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"Use wechat-miniprogram developer tools to open the following folder:\n~/Code/ice-next/examples/miniapp-project/build\n")),(0,i.kt)("h2",{id:"\u652f\u6301\u5c0f\u7a0b\u5e8f\u5e73\u53f0"},"\u652f\u6301\u5c0f\u7a0b\u5e8f\u5e73\u53f0"),(0,i.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u76f8\u6bd4\u5f00\u53d1 Web \u5e94\u7528\uff0c\u5f00\u53d1\u5c0f\u7a0b\u5e8f\u7684\u547d\u4ee4\u9700\u8981\u4f20\u9012 ",(0,i.kt)("inlineCode",{parentName:"p"},"platform")," \u53c2\u6570\uff0c\u76ee\u524d ice.js \u652f\u6301\u5f00\u53d1\u7684\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u53ca\u5176 ",(0,i.kt)("inlineCode",{parentName:"p"},"platform")," \u540d\u79f0\u5982\u4e0b\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u5c0f\u7a0b\u5e8f\u5e73\u53f0"),(0,i.kt)("th",{parentName:"tr",align:null},"platform"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u963f\u91cc\u7cfb\uff08\u652f\u4ed8\u5b9d\u3001\u6dd8\u5b9d\u3001\u9489\u9489\u7b49\uff09"),(0,i.kt)("td",{parentName:"tr",align:null},"ali-miniapp")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u5fae\u4fe1"),(0,i.kt)("td",{parentName:"tr",align:null},"wechat-miniprogram")))),(0,i.kt)("p",null,"\u6682\u672a\u652f\u6301\u4f46\u8ba1\u5212\u652f\u6301\u7684\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u53ca\u5176 ",(0,i.kt)("inlineCode",{parentName:"p"},"platform")," \u540d\u79f0\u5982\u4e0b\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u5c0f\u7a0b\u5e8f\u5e73\u53f0"),(0,i.kt)("th",{parentName:"tr",align:null},"platform"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u5b57\u8282"),(0,i.kt)("td",{parentName:"tr",align:null},"bytedance-microapp")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u767e\u5ea6"),(0,i.kt)("td",{parentName:"tr",align:null},"baidu-smartprogram")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u5feb\u624b"),(0,i.kt)("td",{parentName:"tr",align:null},"kuaishou-miniprogram")))),(0,i.kt)("h2",{id:"\u5f85\u652f\u6301\u80fd\u529b"},"\u5f85\u652f\u6301\u80fd\u529b"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u914d\u7f6e\u5c0f\u7a0b\u5e8f\u539f\u751f\u5e94\u7528\u751f\u547d\u5468\u671f\u53ca\u4e8b\u4ef6"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u914d\u7f6e\u5c0f\u7a0b\u5e8f\u539f\u751f\u9875\u9762\u751f\u547d\u5468\u671f\u53ca\u4e8b\u4ef6"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u914d\u7f6e\u539f\u751f\u5c0f\u7a0b\u5e8f project.config.json"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u4e0e\u539f\u751f\u9875\u9762\u3001\u7ec4\u4ef6\u3001\u63d2\u4ef6\u6df7\u7528"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u5206\u5305\u52a0\u8f7d")),(0,i.kt)("h2",{id:"\u4e0d\u652f\u6301\u80fd\u529b"},"\u4e0d\u652f\u6301\u80fd\u529b"),(0,i.kt)("p",null,"\u53d7\u5c0f\u7a0b\u5e8f\u73af\u5883\u9650\u5236\uff0c\u4ee5\u4e0b ice.js \u63d0\u4f9b\u7684\u80fd\u529b\u5728\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u9002\u7528\uff0c\u76f8\u5173\u7ae0\u8282\u4e2d\u4e5f\u4f1a\u8fdb\u884c\u6807\u6ce8\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../basic/mock"},"\u6570\u636e\u6a21\u62df Mock"))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u5c0f\u7a0b\u5e8f\u4e2d\u7684\u6570\u636e\u8bf7\u6c42\u9700\u8981\u7edf\u4e00\u4f7f\u7528\u5176\u63d0\u4f9b\u7684 request \u76f8\u5173 API\uff0c\u56e0\u6b64 ice.js \u63d0\u4f9b\u7684\u6570\u636e\u6a21\u62df Mock \u80fd\u529b\u5bf9\u5c0f\u7a0b\u5e8f\u4e0d\u9002\u7528\u3002\u5c0f\u7a0b\u5e8f\u7aef\u7684\u6570\u636e\u6a21\u62df\u80fd\u529b\u53ef\u901a\u8fc7\u5f00\u53d1\u8005\u5de5\u5177\u8fdb\u884c\u914d\u7f6e\u4f7f\u7528\uff0c\u8fd9\u91cc\u5217\u51fa\u963f\u91cc\u53ca\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684\u76f8\u5173\u4f7f\u7528\u6587\u6863\uff1a"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://opendocs.alipay.com/mini/anymock"},"\u963f\u91cc\u5c0f\u7a0b\u5e8f Anymock \u573a\u666f\u6570\u636e\u5e73\u53f0\u6269\u5c55")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/api-mock.html"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f API Mock")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../basic/ssg"},"\u6784\u5efa\u65f6\u6e32\u67d3 SSG")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../basic/ssr"},"\u670d\u52a1\u7aef\u6e32\u67d3 SSR")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../basic/document"},"\u5b9a\u5236 HTML")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../advanced/auth"},"\u6743\u9650\u7ba1\u7406")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../advanced/css-assets-local"},"CSS \u8d44\u6e90\u672c\u5730\u5316")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../advanced/keep-alive"},"Keep Alive")),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 antd/fusion \u7b49\u5df2\u6709 Web \u7ec4\u4ef6\u5e93")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u6ca1\u6709\u7ecf\u8fc7\u9002\u914d\u7684 Web \u7ec4\u4ef6\u5e93\u6682\u65f6\u65e0\u6cd5\u76f4\u63a5\u5728 ice.js \u5c0f\u7a0b\u5e8f\u7aef\u4f7f\u7528\u3002")))}u.isMDXComponent=!0}}]);