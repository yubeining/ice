"use strict";(self.webpackChunkice_website_v3=self.webpackChunkice_website_v3||[]).push([[2328],{4852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(9231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),c=i,k=d["".concat(o,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:i,l[1]=p;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(1504),i=(n(9231),n(4852));const r={title:"\u8def\u7531",order:4},l=void 0,p={unversionedId:"guide/basic/router",id:"guide/basic/router",title:"\u8def\u7531",description:"ice.js \u91c7\u7528 \u7ea6\u5b9a\u5f0f\u8def\u7531\uff0c\u5e76\u9488\u5bf9 \u5d4c\u5957\u8def\u7531 \u505a\u4e86\u4e00\u7cfb\u5217\u52a0\u8f7d\u548c\u6e32\u67d3\u4e0a\u7684\u4f18\u5316\uff0c\u4ee5\u6784\u5efa\u51fa\u6027\u80fd\u66f4\u597d\u7684 Web \u5e94\u7528\u3002",source:"@site/docs/guide/basic/router.md",sourceDirName:"guide/basic",slug:"/guide/basic/router",permalink:"/docs/guide/basic/router",draft:!1,editUrl:"https://github.com/alibaba/ice/edit/master/website/docs/guide/basic/router.md",tags:[],version:"current",frontMatter:{title:"\u8def\u7531",order:4},sidebar:"docs",previous:{title:"\u5e94\u7528\u5165\u53e3",permalink:"/docs/guide/basic/app"},next:{title:"\u9875\u9762",permalink:"/docs/guide/basic/page"}},o={},s=[{value:"\u57fa\u7840\u6982\u5ff5",id:"\u57fa\u7840\u6982\u5ff5",level:2},{value:"\u7ea6\u5b9a\u5f0f\u8def\u7531",id:"\u7ea6\u5b9a\u5f0f\u8def\u7531",level:3},{value:"\u5c0f\u7a0b\u5e8f\u7aef\u8def\u7531\u89c4\u5219",id:"\u5c0f\u7a0b\u5e8f\u7aef\u8def\u7531\u89c4\u5219",level:3},{value:"\u8def\u7531\u7ec4\u4ef6",id:"\u8def\u7531\u7ec4\u4ef6",level:3},{value:"\u5e03\u5c40\u7ec4\u4ef6",id:"\u5e03\u5c40\u7ec4\u4ef6",level:3},{value:"\u5d4c\u5957\u8def\u7531",id:"\u5d4c\u5957\u8def\u7531",level:2},{value:"\u52a8\u6001\u8def\u7531",id:"\u52a8\u6001\u8def\u7531",level:2},{value:"\u901a\u914d\u8def\u7531",id:"\u901a\u914d\u8def\u7531",level:2},{value:"\u8f6c\u4e49\u8def\u7531",id:"\u8f6c\u4e49\u8def\u7531",level:2},{value:"\u8def\u7531\u8df3\u8f6c",id:"\u8def\u7531\u8df3\u8f6c",level:2},{value:"history",id:"history",level:3},{value:"useNavigate",id:"usenavigate",level:3},{value:"Link \u7ec4\u4ef6",id:"link-\u7ec4\u4ef6",level:3},{value:"\u83b7\u53d6\u8def\u7531\u4fe1\u606f",id:"\u83b7\u53d6\u8def\u7531\u4fe1\u606f",level:2},{value:"location",id:"location",level:3},{value:"query",id:"query",level:3},{value:"\u52a8\u6001\u8def\u7531\u53c2\u6570",id:"\u52a8\u6001\u8def\u7531\u53c2\u6570",level:3},{value:"\u5ffd\u7565\u88ab\u89e3\u6790\u4e3a\u8def\u7531\u7ec4\u4ef6",id:"\u5ffd\u7565\u88ab\u89e3\u6790\u4e3a\u8def\u7531\u7ec4\u4ef6",level:2},{value:"\u5b9a\u5236\u8def\u7531\u5730\u5740",id:"\u5b9a\u5236\u8def\u7531\u5730\u5740",level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ice.js \u91c7\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u7ea6\u5b9a\u5f0f\u8def\u7531"),"\uff0c\u5e76\u9488\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u5d4c\u5957\u8def\u7531")," \u505a\u4e86\u4e00\u7cfb\u5217\u52a0\u8f7d\u548c\u6e32\u67d3\u4e0a\u7684\u4f18\u5316\uff0c\u4ee5\u6784\u5efa\u51fa\u6027\u80fd\u66f4\u597d\u7684 Web \u5e94\u7528\u3002"),(0,i.kt)("h2",{id:"\u57fa\u7840\u6982\u5ff5"},"\u57fa\u7840\u6982\u5ff5"),(0,i.kt)("h3",{id:"\u7ea6\u5b9a\u5f0f\u8def\u7531"},"\u7ea6\u5b9a\u5f0f\u8def\u7531"),(0,i.kt)("p",null,"\u6846\u67b6\u4f1a\u6839\u636e\u9879\u76ee\u7684\u76ee\u5f55\u7ed3\u6784\u81ea\u52a8\u751f\u6210\u5e94\u7528\u7684\u8def\u7531\u4fe1\u606f\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"src/pages")," \u76ee\u5f55\u4e0b\u7684\u6bcf\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},".(js|jsx|tsx)")," \u6587\u4ef6\u4f1a\u88ab\u6620\u5c04\u4e3a\u4e00\u4e2a\u8def\u7531\u5730\u5740\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,i.kt)("img",{src:"https://img.alicdn.com/imgextra/i1/O1CN01ehzrle1ym0kPnJeVH_!!6000000006620-2-tps-800-596.png",width:"375px"}),(0,i.kt)("h3",{id:"\u5c0f\u7a0b\u5e8f\u7aef\u8def\u7531\u89c4\u5219"},"\u5c0f\u7a0b\u5e8f\u7aef\u8def\u7531\u89c4\u5219"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u5c0f\u7a0b\u5e8f\u6765\u8bf4\uff0c\u4f7f\u7528\u7ea6\u5b9a\u5f0f\u8def\u7531\u4f1a\u5e26\u6765\u65e0\u6cd5\u786e\u5b9a\u9996\u9875\u7684\u95ee\u9898\uff08\u5728\u539f\u751f\u5c0f\u7a0b\u5e8f\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"app.json")," \u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"pages")," \u6570\u7ec4\u7684\u7b2c\u4e00\u9879\u5373\u88ab\u6307\u5b9a\u4e3a\u9996\u9875\uff09\u3002\u56e0\u6b64 ice.js \u5f00\u53d1\u5c0f\u7a0b\u5e8f\u65f6\uff0c\u7528\u6237\u9700\u8981\u5728 src/app.tsx \u4e2d\u901a\u8fc7\u5bfc\u51fa ",(0,i.kt)("inlineCode",{parentName:"p"},"miniappManifest")," \u8fdb\u884c\u8def\u7531\u7684\u6307\u5b9a\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export const miniappManifest = {\n  routes: [\n    'index',\n    'about',\n    'repo/index',\n    'repo/preview',\n  ],\n};\n")),(0,i.kt)("p",null,"\u6ce8\u610f\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"routes")," \u4e2d\u7684\u6bcf\u4e00\u9879\u5e94\u8be5\u4e0e\u6587\u4ef6\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"pages")," \u76ee\u5f55\u4e0b\u7684\u5b9e\u9645\u8def\u5f84\u4fdd\u6301\u4e00\u81f4\uff0c\u4e14\u5176\u7b2c\u4e00\u9879\u5c06\u4f5c\u4e3a\u5c0f\u7a0b\u5e8f\u7684\u9996\u9875\u88ab\u52a0\u8f7d\u3002"),(0,i.kt)("h3",{id:"\u8def\u7531\u7ec4\u4ef6"},"\u8def\u7531\u7ec4\u4ef6"),(0,i.kt)("p",null,"\u8def\u7531\u7ec4\u4ef6\uff0c\u662f\u6bcf\u4e00\u4e2a\u9875\u9762\u7684\u5165\u53e3\u6587\u4ef6\uff0c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"export default")," \u5bfc\u51fa\u5176\u5177\u4f53\u5b9e\u73b0\uff0c\u4f8b\u5982:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/index.tsx"',title:'"src/pages/index.tsx"'},"export default function Home() {\n  return (\n    <div>Hello ICE</div>\n  );\n};\n")),(0,i.kt)("p",null,"\u8def\u7531\u7ec4\u4ef6\u652f\u6301\u914d\u7f6e\u9875\u9762\u7ea7\u4fe1\u606f\u548c\u6570\u636e\u52a0\u8f7d\u903b\u8f91\uff0c\u8be6\u89c1",(0,i.kt)("a",{parentName:"p",href:"/docs/guide/basic/page"},"\u9875\u9762"),"\u3002"),(0,i.kt)("h3",{id:"\u5e03\u5c40\u7ec4\u4ef6"},"\u5e03\u5c40\u7ec4\u4ef6"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u652f\u6301\u3002")),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"pages")," \u76ee\u5f55\u4e0b\uff0c\u8fd8\u53ef\u4ee5\u521b\u5efa\u4e00\u7c7b\u7279\u6b8a\u7684\u7ec4\u4ef6\uff0c\u6765\u7ef4\u62a4\u5168\u5c40\u6216\u4e00\u7ec4\u9875\u9762\u5171\u7528\u7684\u5e03\u5c40, \u5176\u6587\u4ef6\u540d\u7ea6\u5b9a\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"layout.(js|jsx|tsx)"),"\u3002"),(0,i.kt)("p",null,"\u5e03\u5c40\u7ec4\u4ef6\u548c\u8def\u7531\u7ec4\u4ef6\u4e00\u6837\uff0c\u4e5f\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"export default")," \u5bfc\u51fa\u5176\u5177\u4f53\u5b9e\u73b0\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Outlet } from 'ice';\n\nexport default function Layout() {\n  return (\n    <div>\n      <h1>Root Layout</h1>\n      <h2>Hello ICE</h2>\n      <Outlet />\n    </div>\n  )\n}\n")),(0,i.kt)("p",null,"\u5176\u4e2d, ",(0,i.kt)("inlineCode",{parentName:"p"},"<Outlet />")," \u7ec4\u4ef6\u5bf9\u5e94\u9700\u8981\u88ab\u5e03\u5c40\u7ec4\u4ef6\u5d4c\u5957\u7684\u5b50\u7ec4\u4ef6\u3002"),(0,i.kt)("img",{src:"https://img.alicdn.com/imgextra/i3/O1CN01Zezxbi21qXWDzWc9d_!!6000000007036-2-tps-890-588.png",width:"500px"}),(0,i.kt)("p",null,"\u5e03\u5c40\u7ec4\u4ef6\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f4d\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"pages")," \u76ee\u5f55\u7684\u6700\u9876\u5c42\uff0c\u5219\u5b83\u5c06\u4f5c\u4e3a\u5168\u5c40\u5e03\u5c40\uff0c\u5d4c\u5957\u5728\u6240\u6709\u8def\u7531\u7ec4\u4ef6\u5916\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f4d\u4e8e\u67d0\u4e2a\u5b50\u6587\u4ef6\u5939\uff0c\u5219\u5b83\u5c06\u4f5c\u4e3a\u9875\u9762\u7ea7\u5e03\u5c40\uff0c\u5d4c\u5957\u5728\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u7684\u5176\u4ed6\u8def\u7531\u7ec4\u4ef6\u5916\u3002")),(0,i.kt)("p",null,"\u5982\u679c\u540c\u65f6\u5b58\u5728 ",(0,i.kt)("strong",{parentName:"p"},"\u5168\u5c40\u5e03\u5c40\u7ec4\u4ef6")," \u548c ",(0,i.kt)("strong",{parentName:"p"},"\u9875\u9762\u7ea7\u5e03\u5c40\u7ec4\u4ef6"),"\uff0c\u5219\u5168\u5c40\u5e03\u5c40\u7ec4\u4ef6\u4f1a\u5d4c\u5957\u4e8e\u9875\u9762\u7ea7\u5e03\u5c40\u7ec4\u4ef6\u4e4b\u5916\u3002"),(0,i.kt)("h2",{id:"\u5d4c\u5957\u8def\u7531"},"\u5d4c\u5957\u8def\u7531"),(0,i.kt)("p",null,"\u901a\u8fc7\u521b\u5efa",(0,i.kt)("strong",{parentName:"p"},"\u6587\u4ef6\u5939"),"\u548c",(0,i.kt)("strong",{parentName:"p"},"\u5e03\u5c40\u7ec4\u4ef6"),"\uff0c\u53ef\u4ee5\u8f7b\u677e\u6784\u5efa\u5d4c\u5957\u8def\u7531\u3002\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u793a\u4f8b\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"/repo/preview")," \u9875\u9762\uff0c\u7531\u8fd9\u4e09\u4e2a\u7ec4\u4ef6\u5d4c\u5957\u800c\u6210\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"layout.tsx"),(0,i.kt)("li",{parentName:"ul"},"repo/layout.tsx"),(0,i.kt)("li",{parentName:"ul"},"repo/preview.tsx")),(0,i.kt)("img",{src:"https://img.alicdn.com/imgextra/i1/O1CN01Zax1Rz1r5gqZhs4LX_!!6000000005580-2-tps-578-634.png",width:"260px"}),(0,i.kt)("p",null,"ice.js \u9488\u5bf9\u5d4c\u5957\u8def\u7531\u7684\u573a\u666f\uff0c\u5e94\u7528\u4e86\u4ee5\u4e0b\u4f18\u5316\uff0c\u6765\u8ba9\u9875\u9762\u8fbe\u6210\u66f4\u597d\u7684\u6027\u80fd\u4f53\u9a8c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5404\u8def\u7531\u7ec4\u4ef6\u7684",(0,i.kt)("strong",{parentName:"li"},"\u8d44\u6e90"),"\u548c",(0,i.kt)("strong",{parentName:"li"},"\u6570\u636e\u8bf7\u6c42"),"\u4f1a\u88ab\u5e76\u884c\u52a0\u8f7d\uff0c\u4ee5\u8fbe\u5230\u6700\u5feb\u7684\u8d44\u6e90\u52a0\u8f7d\u901f\u5ea6\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8def\u7531\u95f4\u8df3\u8f6c\uff0c\u6bd4\u5982\u4ece ",(0,i.kt)("inlineCode",{parentName:"li"},"/repo/preview")," \u8df3\u8f6c\u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"/repo/edit"),"\uff0c\u6846\u67b6\u53ea\u4f1a\u52a0\u8f7d\u5dee\u5f02\u5316\u7684\u8def\u7531\u7ec4\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"li"},"edit.tsx")," \u8fdb\u884c\u6e32\u67d3\uff0c\u800c\u4e0d\u4f1a\u91cd\u65b0\u6e32\u67d3\u6574\u4e2a\u9875\u9762\u3002")),(0,i.kt)("p",null,"\u5229\u7528\u6846\u67b6\u5bf9",(0,i.kt)("inlineCode",{parentName:"p"},"\u5d4c\u5957\u8def\u7531"),"\u6240\u505a\u7684\u4f18\u5316\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u9875\u9762\u4e2d\u903b\u8f91\u76f8\u5bf9\u5206\u79bb\u7684\u90e8\u5206\uff0c\u7528\u5d4c\u5957\u8def\u7531\u7684\u65b9\u5f0f\u6765\u7ec4\u7ec7\uff0c\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u52a0\u8f7d\u4f53\u9a8c\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u9762\u8fd9\u4e2a\u5e38\u89c1\u7684\u79fb\u52a8\u7aef\u8425\u9500\u9875\uff0c\u53ef\u4ee5\u5c06\u9876\u90e8\u901a\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Slider")," \u62bd\u8c61\u4e3a\u5e03\u5c40\u7ec4\u4ef6\uff0c\u5c06\u4e0d\u540c ",(0,i.kt)("inlineCode",{parentName:"p"},"tab")," \u4e0b\u5bf9\u5e94\u7684\u7011\u5e03\u6d41\uff0c\u62bd\u8c61\u4e3a\u8def\u7531\u7ec4\u4ef6\u3002\u8fd9\u6837\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Slider")," \u548c\u7011\u5e03\u6d41\u5c31\u53ef\u4ee5\u505a\u5230\u5e76\u884c\u52a0\u8f7d\uff0c\u5e76\u4e14\u5f53\u5207\u6362 ",(0,i.kt)("inlineCode",{parentName:"p"},"tab")," \u65f6\uff0c\u65b0\u7684 tab \u5185\u5bb9\u5c06\u7531\u6846\u67b6\u89e6\u53d1\u6309\u9700\u52a0\u8f7d\u548c\u6e32\u67d3\u3002",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alibaba/ice/tree/master/examples/with-nested-routes"},"\u793a\u4f8b\u5de5\u7a0b")),(0,i.kt)("img",{src:"https://img.alicdn.com/imgextra/i3/O1CN01gKRkTc1aTe5QiWmpt_!!6000000003331-2-tps-1566-704.png",width:"750px"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u5047\u5982\u540c\u65f6\u5b58\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/pages/home.tsx")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"src/pages/home/index.tsx"),"\uff0c\u5219\u8bbf\u95ee ",(0,i.kt)("inlineCode",{parentName:"p"},"/home")," \u8def\u7531\u5730\u5740\u65f6\uff0c\u53ea\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/pages/home/index.tsx")," \u7ec4\u4ef6\u6e32\u67d3\u3002")),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u6709\u5d4c\u5957\u8def\u7531\uff0c\u4f46\u662f\u53c8\u4e0d\u60f3\u521b\u5efa\u6709\u5d4c\u5957\u76ee\u5f55\u7ed3\u6784\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},".")," \u6765\u521b\u5efa\u4e00\u4e2a\u6241\u5e73\u7684\u6587\u4ef6\u540d\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 root.jsx\n    \u2514\u2500\u2500 pages\n-       \u251c\u2500\u2500 about\n-       \u2502   \u251c\u2500\u2500 repo\n-       \u2502   \u2502   \u2514\u2500\u2500 $id.tsx\n        \u2502   \u2514\u2500\u2500 index.tsx\n+       \u2514\u2500\u2500 about.repo.$id.tsx\n")),(0,i.kt)("p",null,"\u8fd9\u6837\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"/about/repo/$id")," \u7684\u8def\u7531\u5730\u5740\u8bbf\u95ee\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"about.repo.$id.tsx")," \u7684\u8def\u7531\u7ec4\u4ef6\u4e86\u3002"),(0,i.kt)("h2",{id:"\u52a8\u6001\u8def\u7531"},"\u52a8\u6001\u8def\u7531"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u652f\u6301\u3002")),(0,i.kt)("p",null,"\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\u53ef\u80fd\u9700\u8981\u52a8\u6001\u6307\u5b9a\u8def\u7531\uff0c\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"/user/:id"),"\uff0c\u53ef\u4ee5\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," \u5f00\u5934\u521b\u5efa\u6587\u4ef6\u540d\u6216\u76ee\u5f55\u540d\uff0c\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/pages/user/$id.tsx"),"\uff1a"),(0,i.kt)("img",{src:"https://img.alicdn.com/imgextra/i4/O1CN01IzAaaD1SnKBElEVDM_!!6000000002291-2-tps-722-440.png",width:"350px"}),(0,i.kt)("h2",{id:"\u901a\u914d\u8def\u7531"},"\u901a\u914d\u8def\u7531"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"src/pages")," \u76ee\u5f55\u4e0b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"$.tsx")," \u6587\u4ef6\u5c06\u4f1a\u88ab\u89e3\u6790\u6210\u901a\u914d\u8def\u7531\u3002\u5982\u679c\u5f53\u524d\u8bbf\u95ee\u7684\u8def\u7531\u6ca1\u6709\u4efb\u4f55\u7ec4\u4ef6\u80fd\u5339\u914d\uff0c\u5c06\u4f1a\u6e32\u67d3\u901a\u914d\u8def\u7531\u7ec4\u4ef6\u3002"),(0,i.kt)("img",{src:"https://img.alicdn.com/imgextra/i4/O1CN01bqlzGA1vQ4wBR4Hr8_!!6000000006166-2-tps-1152-744.png",width:"350px"}),(0,i.kt)("p",null,"\u901a\u5e38\u53ef\u4ee5\u589e\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/pages/$.tsx")," \u4f5c\u4e3a\u81ea\u5b9a\u4e49 404 \u9875\u9762\u3002"),(0,i.kt)("h2",{id:"\u8f6c\u4e49\u8def\u7531"},"\u8f6c\u4e49\u8def\u7531"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5bf9\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"src/pages/**/index.tsx")," \u8fd9\u6837\u7684\u8def\u7531\u6587\u4ef6\uff0c\u8def\u7531\u7684\u751f\u6210\u89c4\u5219\u662f\u8fd9\u6837\u7684\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8def\u7531\u6587\u4ef6"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8def\u7531"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"src/pages/index.tsx"),(0,i.kt)("td",{parentName:"tr",align:null},"/")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"src/pages/about/index.tsx"),(0,i.kt)("td",{parentName:"tr",align:null},"/about")))),(0,i.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"index")," \u5b57\u7b26\u4e32\u4e0d\u4f1a\u51fa\u73b0\u5728\u8def\u7531\u4e0a\uff0c\u88ab\u8f6c\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),"\u3002\u5982\u679c\u5e0c\u671b\u8def\u7531\u4e0a\u4fdd\u7559 ",(0,i.kt)("inlineCode",{parentName:"p"},"/index"),"\uff0c\u53ef\u4ee5\u4f7f\u7528\u8f6c\u4e49\u5b57\u7b26 ",(0,i.kt)("inlineCode",{parentName:"p"},"[]"),"\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8def\u7531\u6587\u4ef6"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8def\u7531"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"src/pages/","[index]",".tsx"),(0,i.kt)("td",{parentName:"tr",align:null},"/index")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"src/pages/about/","[index]",".tsx"),(0,i.kt)("td",{parentName:"tr",align:null},"/about/index")))),(0,i.kt)("h2",{id:"\u8def\u7531\u8df3\u8f6c"},"\u8def\u7531\u8df3\u8f6c"),(0,i.kt)("p",null,"ice.js \u63d0\u4f9b\u4e09\u79cd\u65b9\u5f0f\u8fdb\u884c\u8def\u7531\u95f4\u8df3\u8f6c\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u53ea\u52a0\u8f7d\u4e0b\u4e00\u4e2a\u9875\u9762\u76f8\u6bd4\u4e8e\u5f53\u524d\u9875\u9762\u5dee\u5f02\u5316\u7684 Bundle \u8fdb\u884c\u6e32\u67d3\uff0c\u4ee5\u8fbe\u5230\u66f4\u597d\u7684\u6027\u80fd\u4f53\u9a8c\u3002"),(0,i.kt)("h3",{id:"history"},"history"),(0,i.kt)("p",null,"\u53ef\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"./api#history"},"history")," API \u8fdb\u884c\u8def\u7531\u8df3\u8f6c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { history } from 'ice';\n\nexport default () => {\n  history.push('/dashboard');\n}\n")),(0,i.kt)("h3",{id:"usenavigate"},"useNavigate"),(0,i.kt)("p",null,"\u7ec4\u4ef6\u5185\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"./api#usenavigate"},"useNavigate")," Hook \u8fdb\u884c\u8def\u7531\u8df3\u8f6c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useNavigate } from 'ice';\n\nexport default () => {\n  const navigate = useNavigate();\n  navigate('/logout');\n}\n")),(0,i.kt)("h3",{id:"link-\u7ec4\u4ef6"},"Link \u7ec4\u4ef6"),(0,i.kt)("p",null,"\u7ec4\u4ef6\u5185\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"./api#link-"},(0,i.kt)("inlineCode",{parentName:"a"},"<Link />"))," \u7ec4\u4ef6\u8fdb\u884c\u8def\u7531\u8df3\u8f6c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/index.tsx"',title:'"src/pages/index.tsx"'},"import { Link } from 'ice';\n\nexport default function Home() {\n  return (\n    <>\n      <div>Hello ICE</div>\n      <Link to=\"/about\">about ice</Link>\n    </>\n  );\n}\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u5728\u5c0f\u7a0b\u5e8f\u4e2d\uff0cLink \u7ec4\u4ef6\u5e95\u5c42\u5b9e\u73b0\u5373\u4e3a\u539f\u751f ",(0,i.kt)("inlineCode",{parentName:"p"},"navigator")," \u7ec4\u4ef6\u3002")),(0,i.kt)("h2",{id:"\u83b7\u53d6\u8def\u7531\u4fe1\u606f"},"\u83b7\u53d6\u8def\u7531\u4fe1\u606f"),(0,i.kt)("h3",{id:"location"},"location"),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"./api#uselocation"},"useLocation")," \u83b7\u53d6 location \u4fe1\u606f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useLocation } from 'ice';\n\nexport default function () {\n  const location = useLocation();\n}\n")),(0,i.kt)("h3",{id:"query"},"query"),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"./api#usesearchparams"},"useSearchParams")," \u83b7\u53d6\u548c\u4fee\u6539 query \u4fe1\u606f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSearchParams } from 'ice';\n\nexport default function Repo() {\n  const [searchParams, setSearchParams] = useSearchParams();\n  console.log(searchParams);\n  setSearchParams({ tab: 'a' })\n}\n")),(0,i.kt)("h3",{id:"\u52a8\u6001\u8def\u7531\u53c2\u6570"},"\u52a8\u6001\u8def\u7531\u53c2\u6570"),(0,i.kt)("p",null,"\u5728\u52a8\u6001\u8def\u7531\u7ec4\u4ef6\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"./api#useparams"},"useParams")," \u83b7\u53d6\u5f53\u524d\u8def\u7531\u7684\u53c2\u6570\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useParams } from 'ice';\n\n// \u8def\u7531\u89c4\u5219\u4e3a  /repo/:id\n// \u5f53\u524d\u8def\u5f84    /repo/123\nexport default function Repo() {\n  const params = useParams();\n  console.log(params);\n  // { id: 123 }\n}\n")),(0,i.kt)("h2",{id:"\u5ffd\u7565\u88ab\u89e3\u6790\u4e3a\u8def\u7531\u7ec4\u4ef6"},"\u5ffd\u7565\u88ab\u89e3\u6790\u4e3a\u8def\u7531\u7ec4\u4ef6"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cice.js \u4f1a\u628a ",(0,i.kt)("inlineCode",{parentName:"p"},"src/pages")," \u76ee\u5f55\u4e0b\u7684\u6bcf\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},".(js|jsx|tsx)")," \u6587\u4ef6\u6620\u5c04\u4e3a\u4e00\u4e2a\u8def\u7531\u5730\u5740\u3002\u5982\u679c\u4f60\u6709\u4e00\u4e9b\u7ec4\u4ef6\u4e0d\u60f3\u88ab\u89e3\u6790\u6210\u8def\u7531\u7ec4\u4ef6\uff0c\u53ef\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"./config#ignorefiles"},"ignoreFiles")," \u8fdb\u884c\u914d\u7f6e\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\n\nexport default defineConfig({\n  routes: {\n    ignoreFiles: [\n      'custom.tsx',\n      '**/components/**',   // \u5982\u679c\u6bcf\u4e2a\u9875\u9762\u4e0b\u6709 components \u76ee\u5f55\u5b58\u653e\u5f53\u524d\u9875\u9762\u7684\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0\u6b64\u914d\u7f6e\u5ffd\u7565\u88ab\u89e3\u6790\u6210\u8def\u7531\u7ec4\u4ef6\n    ],\n  },\n});\n")),(0,i.kt)("h2",{id:"\u5b9a\u5236\u8def\u7531\u5730\u5740"},"\u5b9a\u5236\u8def\u7531\u5730\u5740"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u7ea6\u5b9a\u5f0f\u8def\u7531\u4e0d\u6ee1\u8db3\u7684\u573a\u666f\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"./config#defineroutes"},"defineRoutes")," \u65b9\u5f0f\u8fdb\u884c\u81ea\u5b9a\u4e49\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\n\nexport default defineConfig({\n  routes: {\n    defineRoutes: (route) => {\n      // \u5c06 /hello \u8def\u7531\u8bbf\u95ee\u5185\u5bb9\u6307\u5b9a\u4e3a about.tsx\n      route('/hello', 'about.tsx');\n    },\n  },\n});\n")))}d.isMDXComponent=!0}}]);