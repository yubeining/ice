"use strict";(self.webpackChunkice_website_v3=self.webpackChunkice_website_v3||[]).push([[9157],{4852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,g=u["".concat(o,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(5675),r=(n(9231),n(4852));const l={title:"\u4ece ice.js 2.x \u5347\u7ea7",order:"0902"},i="\u4ece ice.js 2.x \u5347\u7ea7",p={unversionedId:"guide/advanced/update-from-icejs2",id:"guide/advanced/update-from-icejs2",title:"\u4ece ice.js 2.x \u5347\u7ea7",description:"\u524d\u8a00",source:"@site/docs/guide/advanced/update-from-icejs2.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/update-from-icejs2",permalink:"/docs/guide/advanced/update-from-icejs2",draft:!1,editUrl:"https://github.com/alibaba/ice/edit/master/website/docs/guide/advanced/update-from-icejs2.md",tags:[],version:"current",frontMatter:{title:"\u4ece ice.js 2.x \u5347\u7ea7",order:"0902"},sidebar:"docs",previous:{title:"\u4ece Rax App \u8fc1\u79fb",permalink:"/docs/guide/advanced/integrate-from-rax"},next:{title:"\u5f00\u53d1\u63d2\u4ef6",permalink:"/docs/guide/plugins/plugin-dev"}},o={},d=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u5347\u7ea7\u6307\u5357",id:"\u5347\u7ea7\u6307\u5357",level:2},{value:"\u4f9d\u8d56\u4fee\u6539",id:"\u4f9d\u8d56\u4fee\u6539",level:3},{value:"\u5de5\u7a0b\u914d\u7f6e\u6587\u4ef6\u5347\u7ea7",id:"\u5de5\u7a0b\u914d\u7f6e\u6587\u4ef6\u5347\u7ea7",level:3},{value:"\u5e38\u89c1\u914d\u7f6e\u8fc1\u79fb",id:"\u5e38\u89c1\u914d\u7f6e\u8fc1\u79fb",level:3},{value:"cssLoaderOptions",id:"cssloaderoptions",level:4},{value:"lessLoaderOptions",id:"lessloaderoptions",level:4},{value:"sassLoaderOptions",id:"sassloaderoptions",level:4},{value:"postcssOptions / postcssrc",id:"postcssoptions--postcssrc",level:4},{value:"webpackPlugins",id:"webpackplugins",level:4},{value:"webpackLoaders",id:"webpackloaders",level:4},{value:"babelPlugins / babelPresets",id:"babelplugins--babelpresets",level:4},{value:"\u8fd0\u884c\u65f6\u4fee\u6539",id:"\u8fd0\u884c\u65f6\u4fee\u6539",level:3},{value:"\u5e94\u7528\u5165\u53e3\u4fee\u6539",id:"\u5e94\u7528\u5165\u53e3\u4fee\u6539",level:4},{value:"\u8def\u7531\u4fee\u6539",id:"\u8def\u7531\u4fee\u6539",level:4},{value:"\u8fdb\u9636\u65b9\u6848\u8fc1\u79fb",id:"\u8fdb\u9636\u65b9\u6848\u8fc1\u79fb",level:3},{value:"\u72b6\u6001\u7ba1\u7406",id:"\u72b6\u6001\u7ba1\u7406",level:4},{value:"\u6570\u636e\u8bf7\u6c42",id:"\u6570\u636e\u8bf7\u6c42",level:4},{value:"\u6743\u9650\u65b9\u6848",id:"\u6743\u9650\u65b9\u6848",level:4}],s={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4ece-icejs-2x-\u5347\u7ea7"},"\u4ece ice.js 2.x \u5347\u7ea7"),(0,r.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"\u5347\u7ea7 ice.js 3.x \u53ef\u4ee5\u5e26\u6765\u6784\u5efa\u901f\u5ea6\u548c\u9875\u9762\u6027\u80fd\u7684\u63d0\u5347\uff0c\u5e76\u4e14\u5e26\u6765\u66f4\u591a\u79fb\u52a8\u7aef\u529f\u80fd\uff0c\u6bd4\u5982\u5f00\u7bb1\u5373\u7528\u7684 PHA\u3001Weex \u548c\u5c0f\u7a0b\u5e8f\u65b9\u6848\u7b49\u3002"),(0,r.kt)("h2",{id:"\u5347\u7ea7\u6307\u5357"},"\u5347\u7ea7\u6307\u5357"),(0,r.kt)("h3",{id:"\u4f9d\u8d56\u4fee\u6539"},"\u4f9d\u8d56\u4fee\u6539"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'{\n  "devDependencies": {\n-    "ice.js": "^2.0.0",\n+    "@ice/app": "^3.0.0",\n+    "@ice/runtime": "^1.0.0",\n  }\n}\n')),(0,r.kt)("p",null,"\u5bf9\u5e94\u63d2\u4ef6\u80fd\u529b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@ali/build-plugin-ice-def -> @ali/ice-plugin-def"),(0,r.kt)("li",{parentName:"ul"},"build-plugin-moment-locales -> @ice/plugin-moment-locales"),(0,r.kt)("li",{parentName:"ul"},"build-plugin-fusion -> @ice/plugin-fusion (\u591a\u4e3b\u9898\u80fd\u529b\u6682\u4e0d\u652f\u6301)"),(0,r.kt)("li",{parentName:"ul"},"build-plugin-antd -> @ice/plugin-antd"),(0,r.kt)("li",{parentName:"ul"},"build-plugin-css-assets-local -> @ice/plugin-css-assets-local"),(0,r.kt)("li",{parentName:"ul"},"build-plugin-jsx-plus -> @ice/plugin-jsx-plus ",(0,r.kt)("a",{parentName:"li",href:"/docs/guide/advanced/jsx-plus"},"\u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},"build-plugin-keep-alive \u4e0d\u518d\u652f\u6301\uff0c\u6709 ice.js 3.0 \u7684 ",(0,r.kt)("a",{parentName:"li",href:"/docs/guide/advanced/keep-alive"},"keep alive \u65b9\u6848"),"\u66ff\u4ee3")),(0,r.kt)("p",null,"\u63d2\u4ef6\u4f7f\u7528\u65b9\u5f0f\u53d8\u66f4\u4e3a\u51fd\u6570\u8c03\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\nimport jsxPlus from '@ice/plugin-jsx-plus';\n\nexport default defineConfig(() => ({\n  plugins: [\n    jsxPlus(),\n  ],\n}));\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5b8c\u6210\u4f9d\u8d56\u5347\u7ea7\u540e\u63a8\u8350\u91cd\u65b0\u5b89\u88c5\u4f9d\u8d56\uff0c\u5373\u6267\u884c npm update")),(0,r.kt)("h3",{id:"\u5de5\u7a0b\u914d\u7f6e\u6587\u4ef6\u5347\u7ea7"},"\u5de5\u7a0b\u914d\u7f6e\u6587\u4ef6\u5347\u7ea7"),(0,r.kt)("p",null,"\u4e3a\u4e86\u83b7\u53d6\u66f4\u597d\u7684\u7c7b\u578b\u63d0\u793a\uff0cice \u65b0\u7248\u672c\u4e2d\u63a8\u8350\u4f7f\u7528 ts \u6587\u4ef6\u8fdb\u884c\u914d\u7f6e\uff0c\u5373\u5728\u9879\u76ee\u76ee\u5f55\u4e0b\u65b0\u589e ",(0,r.kt)("inlineCode",{parentName:"p"},"ice.config.mts")," \u6587\u4ef6\uff0c\u539f json \u4e2d\u7684\u80fd\u529b\u652f\u6301\u60c5\u51b5\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ice 2.x"),(0,r.kt)("th",{parentName:"tr",align:null},"ice 3.0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--port"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--host"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--config"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--disable-open"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plugins"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alias"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"publicPath"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"devPublicPath"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sourceMap"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"externals"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hash"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"outputDir"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proxy"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"define"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssr"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--disable-mock"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--https"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--analyzer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dropLogLevel"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minify"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7b80\u5316\u914d\u7f6e\uff08true/false\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compileDependencies"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u5408\u73b0\u6709\u7684 compileIncludes \u80fd\u529b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eslint"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tsChecker"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"postcssOptions / postcssrc"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"polyfill"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u4e3b\u52a8\u5f00\u542f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"remoteRuntime"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--disable-assets"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u5e38\u7528\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u63a7\u5236\u65e5\u5fd7\u8f93\u51fa\u8be6\u7ec6\u7a0b\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--disable-reload"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u7981\u6b62 fastRefresh")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"terser"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5185\u7f6e\u65b9\u6848")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"outputAssetsPath"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540e\u7eed\u8f93\u51fa\u6700\u4f73\u76ee\u5f55\u5b9e\u8df5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"devServer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301\u5168\u91cf\u914d\u7f6e devServer\uff0c\u6309\u9700\u5f00\u542f server \u76f8\u5173\u80fd\u529b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"browserslist"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7edf\u4e00\u8d70 browserlist \u6587\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vendor"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5185\u7f6e\u7684\u5206\u5305\u5b9e\u8df5\uff0c\u53ef\u4ee5\u901a\u8fc7 splitChunks \u5173\u95ed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"libraryTarget / library / libraryExport"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cssLoaderOptions / lessLoaderOptions / sassLoaderOptions"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301 webpack loader \u76f8\u5173\uff0c\u5185\u7f6e\u914d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ignoreHtmlTemplate"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entry"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u573a\u666f\u8d70 client.entry.tsx")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vite / vitePlugins"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"swc"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"store / auth / request / pwa / router"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u5b9a\u5236\u7684\u63d2\u4ef6\u652f\u6301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disableRuntime"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"babelPlugins / babelPresets / webpackPlugins / webpackLoaders"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u63a8\u8350\u76f4\u63a5\u914d\u7f6e")))),(0,r.kt)("p",null,"ice.js 3 \u65b0\u7248\u672c\u4e2d\u4e0d\u518d\u652f\u6301 vite \u6a21\u5f0f\uff0c\u5e76\u4e14 webpack \u76f8\u5173\u7684\u5feb\u6377\u914d\u7f6e\u4e5f\u4e0d\u518d\u652f\u6301\u3002\u6211\u4eec\u5c06\u4f1a\u5c06\u5185\u7f6e\u7684\u903b\u8f91\u505a\u5230\u6700\u4f18\u3002\u5982\u679c\u5b58\u5728 webpack \u5b9a\u5236\u9700\u6c42\uff0c\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u81ea\u5b9a\u4e49\u65b9\u5f0f\u5b9a\u5236\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\nimport { modifyLoader } from '@ice/webpack-modify';\n\nexport default defineConfig(() => ({\n  // Set your configs here.\n  // ...\n  webpack: (webpackConfig) => {\n    if (typeof webpackConfig.devServer?.client === 'object') {\n      // \u4fee\u6539 webpack \u914d\u7f6e\n      webpackConfig.devServer.client.overlay = false;\n    }\n\n    // \u4fee\u6539\u5185\u7f6e\u7684 webpack \u89c4\u5219\uff0c\u501f\u52a9\u5b98\u65b9\u5de5\u5177\u53ef\u4ee5\u66f4\u4fbf\u6377\u7684\u4fee\u6539\n    // \u4fee\u6539 css \u6837\u5f0f\u89c4\u5219\u4e0b\u7684 postcss-loader \u914d\u7f6e\u9879\n    return modifyLoader(webpackConfig, {\n    rule: '.css',\n    loader: 'postcss-loader',\n    options: (originOptions) => ({}),\n  });\n  }\n}));\n")),(0,r.kt)("p",null,"\u5176\u4ed6\u65b0\u7248\u914d\u7f6e\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/basic/config"},"\u94fe\u63a5"),"\n\u65b0\u7248\u63d2\u4ef6\u89c4\u8303\uff1a",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/plugins/plugin-dev"},"\u94fe\u63a5")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u65b0\u7248\u7684 webpack \u914d\u7f6e\u4e0d\u518d\u4f9d\u8d56 webpack-chain\uff0c\u5982\u679c\u6709\u5b9a\u5236 webpack \u7684\u8bc9\u6c42\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 webpack-merge \u7684\u65b9\u5f0f\u5408\u5e76\u914d\u7f6e")),(0,r.kt)("h3",{id:"\u5e38\u89c1\u914d\u7f6e\u8fc1\u79fb"},"\u5e38\u89c1\u914d\u7f6e\u8fc1\u79fb"),(0,r.kt)("p",null,"\u65b0\u7248\u6846\u67b6\u5bf9\u4e8e\u5927\u91cf\u914d\u7f6e\u8fdb\u884c\u4e86\u6536\u655b\uff0c\u5982\u679c\u8fc1\u79fb\u65f6\u6d89\u53ca\u5230\u8d1f\u8d23\u7684\u5b9a\u5236\u573a\u666f\uff0c\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u914d\u7f6e\u8fdb\u884c\u8fc1\u79fb"),(0,r.kt)("h4",{id:"cssloaderoptions"},"cssLoaderOptions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\nimport { modifyLoader } from '@ice/webpack-modify';\n\nexport default defineConfig(() => ({\n  // Set your configs here.\n  // ...\n  webpack: (webpackConfig) => {\n    return ['css', 'less', 'sass'].reduce((acc, cur) => {\n      return modifyLoader(acc, {\n        rule: `.${cur}`,\n        loader: 'css-loader',\n        options: (originOptions) => ({}),\n      });\n    }, webpackConfig);\n  },\n}));\n")),(0,r.kt)("h4",{id:"lessloaderoptions"},"lessLoaderOptions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\nimport { modifyLoader } from '@ice/webpack-modify';\n\nexport default defineConfig(() => ({\n  // Set your configs here.\n  // ...\n  webpack: (webpackConfig) => {\n    return modifyLoader(webpackConfig, {\n      rule: '.less',\n      loader: 'less-loader',\n      options: (originOptions) => ({}),\n    });\n  },\n}));\n")),(0,r.kt)("h4",{id:"sassloaderoptions"},"sassLoaderOptions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\nimport { modifyLoader } from '@ice/webpack-modify';\n\nexport default defineConfig(() => ({\n  // Set your configs here.\n  ...\n  webpack: (webpackConfig) => {\n    return modifyLoader(webpackConfig, {\n      rule: '.sass',\n      loader: 'sass-loader',\n      options: (originOptions) => ({}),\n    });\n  }\n}));\n")),(0,r.kt)("h4",{id:"postcssoptions--postcssrc"},"postcssOptions / postcssrc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\nimport { modifyLoader } from '@ice/webpack-modify';\n\nexport default defineConfig(() => ({\n  // Set your configs here.\n  // ...\n  webpack: (webpackConfig) => {\n    return ['css', 'less', 'sass'].reduce((acc, cur) => {\n      return modifyLoader(acc, {\n        rule: `.${cur}`,\n        loader: 'postcss-loader',\n        options: (originOptions) => ({}),\n      });\n    }, webpackConfig);\n  },\n}));\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u5e0c\u671b\u4f7f\u7528 postcssrc \u80fd\u529b\uff0c\u5c06 options \u914d\u7f6e\u6210\u5982\u4e0a\u7a7a\u5bf9\u8c61\u5373\u53ef")),(0,r.kt)("h4",{id:"webpackplugins"},"webpackPlugins"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\nimport { removePlugin } from '@ice/webpack-modify';\n\nexport default defineConfig(() => ({\n  // Set your configs here.\n  // ...\n  webpack: (webpackConfig) => {\n    let modifiedConfig = webpackConfig;\n    // \u6dfb\u52a0\u63d2\u4ef6\n    webpackConfig.plugins.push(new WebpackPlugin());\n    // webpack \u63d2\u4ef6\u4fee\u6539\uff0c\u5148\u5220\u9664\u63d2\u4ef6\u5728\u91cd\u65b0\u6dfb\u52a0\n    modifiedConfig = removePlugin(webpackConfig, {\n      pluginName: 'AssetsManifestPlugin',\n    });\n    webpackConfig.plugins.push(new AssetsManifestPlugin());\n  }\n}));\n")),(0,r.kt)("h4",{id:"webpackloaders"},"webpackLoaders"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\nimport { addLoader, modifyLoader, removeLoader } from '@ice/webpack-modify';\n\nexport default defineConfig(() => ({\n  // Set your configs here.\n  //...\n  webpack: (webpackConfig) => {\n    let modifiedConfig = webpackConfig;\n    // \u4e3a css \u89c4\u5219\u6dfb\u52a0 loader\n    modifiedConfig = addLoader(modifiedConfig, {\n      rule: '.css',\n      before: 'css-loader',\n      useItem: {\n        loader: 'style-loader',\n      },\n    });\n    // \u79fb\u9664 loader\n    modifiedConfig = removeLoader(modifiedConfig, {\n      rule: '.css',\n      loader: 'css-loader',\n    });\n    // \u4fee\u6539 loader\n    modifiedConfig = modifyLoader(getWebpackConfig(), {\n      rule: '.css',\n      loader: 'css-loader',\n      options: () => ({ module: true }),\n    });\n    return modifiedConfig;\n  },\n}));\n")),(0,r.kt)("h4",{id:"babelplugins--babelpresets"},"babelPlugins / babelPresets"),(0,r.kt)("p",null,"\u6846\u67b6\u5185\u7f6e\u4e0d\u518d\u652f\u6301 babel \u8f6c\u6362\uff0c\u4e00\u4e9b\u5e38\u89c1\u8bed\u6cd5\u8f6c\u5316\u903b\u8f91\u5df2\u5185\u7f6e\uff0c\u5982\u679c\u5b58\u5728\u5b9a\u5236 babel \u63d2\u4ef6\u7684\u60c5\u51b5\u4e0b\uff0c\u63a8\u8350\u4ee5\u4e0b\u65b9\u5f0f\u8f6c\u5316"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\nimport { transformSync } from '@babel/core';\n\nexport default defineConfig(() => ({\n  // Set your configs here.\n  // ...\n  transform: async (source, id) => {\n    // \u8fc7\u6ee4\u6761\u4ef6\n    if (id.match(/\\.(j|t)s(x)?$/) && !id.includes('node_modules')) {\n    // \u501f\u52a9 babel \u7f16\u8bd1\n      const { code, map } = transformSync(source, {\n        plugins: ['transform-decorators-legacy'],\n      });\n      return { code, map };\n    }\n  },\n}));\n")),(0,r.kt)("h3",{id:"\u8fd0\u884c\u65f6\u4fee\u6539"},"\u8fd0\u884c\u65f6\u4fee\u6539"),(0,r.kt)("h4",{id:"\u5e94\u7528\u5165\u53e3\u4fee\u6539"},"\u5e94\u7528\u5165\u53e3\u4fee\u6539"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"- import { runApp } from 'ice';\n\nconst appConfing = {};\n\n- runApp(appConfig);\n+ export default appConfig;\n")),(0,r.kt)("p",null,"\u4e3a\u4e86\u83b7\u5f97\u826f\u597d\u7c7b\u578b\u63d0\u793a\uff0c\u63a8\u8350\u5199\u6cd5\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { defineAppConfig } from 'ice';\n\nexport default defineAppConfig(() => ({\n  app: {\n    strict: false,\n  },\n}));\n")),(0,r.kt)("p",null,"\u539f appConfig \u4e0a\u5927\u90e8\u5206\u80fd\u529b\u5747\u901a\u8fc7\u4e0d\u540c\u7684\u63d2\u4ef6\u8fdb\u884c\u627f\u8f7d\uff0c\u76ee\u524d\u5e94\u7528\u5165\u53e3\u80fd\u529b\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/basic/app#%E9%85%8D%E7%BD%AE%E9%A1%B9"},"\u6587\u6863")),(0,r.kt)("h4",{id:"\u8def\u7531\u4fee\u6539"},"\u8def\u7531\u4fee\u6539"),(0,r.kt)("p",null,"\u4e3a\u4e86\u63d0\u4f9b\u66f4\u597d\u7684\u6846\u67b6\u80fd\u529b\uff0c\u65b0\u7248 ice \u9ed8\u8ba4\u63d0\u4f9b\u7684\u8def\u7531\u89c4\u5219\u4e3a",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/basic/router"},"\u7ea6\u5b9a\u5f0f\u8def\u7531")),(0,r.kt)("p",null,"\u539f\u914d\u7f6e\u5f0f\u8def\u7531\u63a8\u8350\u901a\u8fc7\u4e0a\u8ff0\u7684\u89c4\u5219\u91cd\u65b0\u7ec4\u7ec7\u76ee\u5f55\u7ed3\u6784\uff0c\u5982\u679c\u8def\u7531\u8fc7\u4e8e\u590d\u6742\uff0c\u63a8\u8350\u5982\u4e0b\u65b9\u5f0f\u8fdb\u884c\u8fc1\u79fb\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\n\nexport default defineConfig(() => ({\n  routes: {\n    // \u5ffd\u7565\u6240\u6709\u7ea6\u5b9a\u5f0f\u89c4\u5219\n    ignoreFiles: ['**'],\n    defineRoutes: (route) => {\n      // \u6307\u5b9a\u6839\u8def\u7531\u9875\u9762\u4e3a home/index.ts\n      route('/', 'home/index.tsx');\n      // \u4e3a /product \u8def\u7531\u6dfb\u52a0 layout.tsx \u4f5c\u4e3a layout\uff0c\u5e76\u6e32\u67d3 products.tsx \u5185\u5bb9\n      route('/', 'layout.tsx', () => {\n        route('/product', 'products.tsx');\n      });\n    },\n  },\n}));\n")),(0,r.kt)("h3",{id:"\u8fdb\u9636\u65b9\u6848\u8fc1\u79fb"},"\u8fdb\u9636\u65b9\u6848\u8fc1\u79fb"),(0,r.kt)("h4",{id:"\u72b6\u6001\u7ba1\u7406"},"\u72b6\u6001\u7ba1\u7406"),(0,r.kt)("p",null,"\u4f7f\u7528\u72b6\u6001\u7ba1\u7406\u65b9\u6848\u9700\u4e3b\u52a8\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"@ice/plugin-store"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @ice/plugin-store -D\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"ice.config.mts")," \u4e2d\u6dfb\u52a0\u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\nimport store from '@ice/plugin-store';\n\nexport default defineConfig(() => ({\n  plugins: [\n    store({ resetPageState: true }),\n  ],\n}));\n")),(0,r.kt)("p",null,"\u66f4\u591a\u7528\u6cd5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/advanced/store"},"\u72b6\u6001\u7ba1\u7406")),(0,r.kt)("h4",{id:"\u6570\u636e\u8bf7\u6c42"},"\u6570\u636e\u8bf7\u6c42"),(0,r.kt)("p",null,"\u4f7f\u7528\u6570\u636e\u8bf7\u6c42\u65b9\u6848\u9700\u4e3b\u52a8\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"@ice/plugin-request"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @ice/plugin-request -D\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"ice.config.mts")," \u4e2d\u6dfb\u52a0\u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\nimport request from '@ice/plugin-request';\n\nexport default defineConfig(() => ({\n  plugins: [\n    request(),\n  ],\n}));\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app.ts")," \u4e2d\u5bfc\u51fa\u7edf\u4e00\u7684\u8bf7\u6c42\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},"export const requestConfig = {\n  ...\n};\n")),(0,r.kt)("p",null,"\u66f4\u591a\u914d\u7f6e\u548c\u7528\u6cd5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/advanced/request"},"\u7f51\u7edc\u8bf7\u6c42")),(0,r.kt)("h4",{id:"\u6743\u9650\u65b9\u6848"},"\u6743\u9650\u65b9\u6848"),(0,r.kt)("p",null,"\u4f7f\u7528\u6743\u9650\u65b9\u6848\u9700\u4e3b\u52a8\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"@ice/plugin-auth"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @ice/plugin-auth -D\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"ice.config.mts")," \u4e2d\u6dfb\u52a0\u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\nimport auth from '@ice/plugin-auth';\n\nexport default defineConfig(() => ({\n  plugins: [\n    auth(),\n  ],\n}));\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app.ts")," \u4e2d\u5bfc\u51fa\u7684\u6743\u9650\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},"export const authConfig = {\n  ...\n};\n")),(0,r.kt)("p",null,"\u66f4\u591a\u914d\u7f6e\u548c\u7528\u6cd5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/advanced/auth"},"\u6743\u9650\u7ba1\u7406")))}m.isMDXComponent=!0}}]);