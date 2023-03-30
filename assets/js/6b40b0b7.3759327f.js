"use strict";(self.webpackChunkice_website_v3=self.webpackChunkice_website_v3||[]).push([[7765],{4852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var l=n(9231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=l.createContext({}),s=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return l.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,k=m["".concat(o,".").concat(u)]||m[u]||d[u]||a;return n?l.createElement(k,r(r({ref:t},c),{},{components:n})):l.createElement(k,r({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:i,r[1]=p;for(var s=2;s<a;s++)r[s]=n[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1781:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var l=n(5675),i=(n(9231),n(4852));const a={title:"\u4f7f\u7528 HTML \u6807\u7b7e",order:5},r=void 0,p={unversionedId:"guide/miniapp/use-html",id:"guide/miniapp/use-html",title:"\u4f7f\u7528 HTML \u6807\u7b7e",description:"ice.js \u652f\u6301\u5728\u5f00\u53d1\u5c0f\u7a0b\u5e8f\u65f6\u76f4\u63a5\u4f7f\u7528 HTML \u6807\u7b7e\uff1a",source:"@site/docs/guide/miniapp/use-html.md",sourceDirName:"guide/miniapp",slug:"/guide/miniapp/use-html",permalink:"/docs/guide/miniapp/use-html",draft:!1,editUrl:"https://github.com/alibaba/ice/edit/master/website/docs/guide/miniapp/use-html.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 HTML \u6807\u7b7e",order:5},sidebar:"docs",previous:{title:"\u7ec4\u4ef6\u4f7f\u7528",permalink:"/docs/guide/miniapp/component-use"},next:{title:"API",permalink:"/docs/guide/miniapp/api"}},o={},s=[{value:"\u6837\u5f0f\u76f8\u5173\u95ee\u9898",id:"\u6837\u5f0f\u76f8\u5173\u95ee\u9898",level:2},{value:"\u6d4f\u89c8\u5668\u9ed8\u8ba4\u6837\u5f0f",id:"\u6d4f\u89c8\u5668\u9ed8\u8ba4\u6837\u5f0f",level:3},{value:"<code>&lt;span&gt;</code> \u9ed8\u8ba4\u8868\u73b0\u4e3a\u5757\u7ea7\u6837\u5f0f",id:"span-\u9ed8\u8ba4\u8868\u73b0\u4e3a\u5757\u7ea7\u6837\u5f0f",level:3},{value:"\u4e0d\u652f\u6301\u90e8\u5206 CSS \u9009\u62e9\u5668",id:"\u4e0d\u652f\u6301\u90e8\u5206-css-\u9009\u62e9\u5668",level:3},{value:"\u4e0d\u652f\u6301\u4f7f\u7528 rem",id:"\u4e0d\u652f\u6301\u4f7f\u7528-rem",level:3},{value:"\u5176\u4ed6\u9650\u5236",id:"\u5176\u4ed6\u9650\u5236",level:2},{value:"\u8868\u5355\u7ec4\u4ef6",id:"\u8868\u5355\u7ec4\u4ef6",level:3},{value:"\u4e0d\u80fd\u540c\u6b65\u83b7\u53d6\u5143\u7d20\u5c3a\u5bf8",id:"\u4e0d\u80fd\u540c\u6b65\u83b7\u53d6\u5143\u7d20\u5c3a\u5bf8",level:3},{value:"DOM API \u5dee\u5f02",id:"dom-api-\u5dee\u5f02",level:3},{value:"<code>&lt;img&gt;</code> \u56fe\u7247\u5c3a\u5bf8\u95ee\u9898",id:"img-\u56fe\u7247\u5c3a\u5bf8\u95ee\u9898",level:3},{value:"\u4e0d\u652f\u6301 ReactDOM \u90e8\u5206 API",id:"\u4e0d\u652f\u6301-reactdom-\u90e8\u5206-api",level:3},{value:"\u4e0d\u652f\u6301 React Portal",id:"\u4e0d\u652f\u6301-react-portal",level:3},{value:"\u4e0d\u652f\u6301\u4f7f\u7528 SVG",id:"\u4e0d\u652f\u6301\u4f7f\u7528-svg",level:3}],c={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ice.js \u652f\u6301\u5728\u5f00\u53d1\u5c0f\u7a0b\u5e8f\u65f6\u76f4\u63a5\u4f7f\u7528 HTML \u6807\u7b7e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default function Home() {\n  return (\n    <div> Hello World!</div>\n  )\n}\n")),(0,i.kt)("h2",{id:"\u6837\u5f0f\u76f8\u5173\u95ee\u9898"},"\u6837\u5f0f\u76f8\u5173\u95ee\u9898"),(0,i.kt)("h3",{id:"\u6d4f\u89c8\u5668\u9ed8\u8ba4\u6837\u5f0f"},"\u6d4f\u89c8\u5668\u9ed8\u8ba4\u6837\u5f0f"),(0,i.kt)("p",null,"ice.js \u63d0\u4f9b\u4e86\u4e24\u79cd\u5185\u7f6e\u7684\u6d4f\u89c8\u5668\u9ed8\u8ba4\u6837\u5f0f\uff0c\u53ef\u4ee5\u6839\u636e\u9879\u76ee\u9700\u8981\u8fdb\u884c\u5f15\u5165\u3002"),(0,i.kt)("p",null,"\u6839\u636e\u7ecf\u9a8c\uff0c\u5728 Web \u7aef\u7684\u9879\u76ee\u4e2d\u5e38\u5e38\u4f1a\u5199\u4e00\u4e9b\u6837\u5f0f\u53bb\u91cd\u7f6e\u90e8\u5206\u6d4f\u89c8\u5668\u7684\u9ed8\u8ba4\u6837\u5f0f\uff0c\u56e0\u6b64\u4e00\u822c\u60c5\u51b5\u4e0b\u5f00\u53d1\u8005\u5e76\u4e0d\u9700\u8981\u6240\u6709\u7684\u8fd9\u4e9b\u9ed8\u8ba4\u6837\u5f0f\u3002\u6211\u4eec\u5efa\u8bae\u624b\u52a8\u6311\u9009\u9879\u76ee\u9700\u8981\u7684\u9ed8\u8ba4\u6837\u5f0f\u6dfb\u52a0\u5230\u5168\u5c40\u6837\u5f0f\u4e2d\u3002"),(0,i.kt)("p",null,"\u9996\u5148\u9700\u8981\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"@ice/miniapp-html-styles")," \u5305\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install @ice/miniapp-html-styles --save\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"HTML4\nW3C HTML4 \u7684\u5185\u7f6e\u6837\u5f0f\u3002\u53ea\u6709 HTML4 \u6807\u7b7e\u6837\u5f0f\uff0c\u4f53\u79ef\u8f83\u5c0f\uff0c\u517c\u5bb9\u6027\u5f3a\uff0c\u80fd\u9002\u5e94\u5927\u591a\u6570\u60c5\u51b5\u3002")),(0,i.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:"title=src/global.css",title:"src/global.css"},"@import '@ice/miniapp-html-styles/html';\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"HTML5\nChrome(Blink) HTML5 \u7684\u5185\u7f6e\u6837\u5f0f\u3002\u5185\u7f6e\u6837\u5f0f\u4e30\u5bcc\uff0c\u5305\u62ec\u4e86\u5927\u591a\u6570 HTML5 \u6807\u7b7e\uff0c\u4f53\u79ef\u8f83\u5927\uff0c\u4e0d\u4e00\u5b9a\u652f\u6301\u6240\u6709\u5c0f\u7a0b\u5e8f\u5bb9\u5668\u3002")),(0,i.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:"title=src/global.css",title:"src/global.css"},"@import '@ice/miniapp-html-styles/html5';\n")),(0,i.kt)("h3",{id:"span-\u9ed8\u8ba4\u8868\u73b0\u4e3a\u5757\u7ea7\u6837\u5f0f"},(0,i.kt)("inlineCode",{parentName:"h3"},"<span>")," \u9ed8\u8ba4\u8868\u73b0\u4e3a\u5757\u7ea7\u6837\u5f0f"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<span>")," \u662f\u884c\u5185\u5143\u7d20\uff0c\u672c\u6765\u9700\u8981\u6620\u5c04\u4e3a\u540c\u6837\u662f\u884c\u5185\u5143\u7d20\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"<Text>")," \u7ec4\u4ef6\u3002"),(0,i.kt)("p",null,"\u4f46\u5c0f\u7a0b\u5e8f\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"<Text>")," \u7ec4\u4ef6\u6709\u4e00\u4e2a\u9650\u5236\uff0c\u5b83\u53ea\u80fd\u5d4c\u5957 ",(0,i.kt)("inlineCode",{parentName:"p"},"<Text>")," \u81ea\u8eab\uff0c\u5d4c\u5957 ",(0,i.kt)("inlineCode",{parentName:"p"},"<View>"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"<Image>")," \u7b49\u7ec4\u4ef6\u90fd\u4f1a\u4e0d\u663e\u793a\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"p"},"<span>")," \u6620\u5c04\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"<Text>"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"<span>")," \u53ea\u80fd\u5d4c\u5957\u540c\u6837\u6620\u5c04\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"<Text>")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"<i>"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"<b>")," \u7b49\u884c\u5185\u5143\u7d20\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\u6211\u4eec\u53d1\u73b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"<span>")," \u91cc\u5f88\u53ef\u80fd\u4f1a\u5d4c\u5957 ",(0,i.kt)("inlineCode",{parentName:"p"},"<div>"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"<img>")," \u7b49\u6807\u7b7e\uff0c\u7528\u6cd5\u5341\u5206\u591a\u6837\u3002\u56e0\u6b64\u6211\u4eec\u51b3\u5b9a\u628a ",(0,i.kt)("inlineCode",{parentName:"p"},"<span>")," \u6620\u5c04\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"<View>"),"\uff0c\u4ee5\u517c\u5bb9 H5 \u6807\u7b7e\u5199\u6cd5\u7684\u591a\u6837\u6027\u3002"),(0,i.kt)("p",null,"\u8fd9\u6837\u505a\u7684\u7f3a\u70b9\u662f\uff0c\u5f00\u53d1\u8005\u9700\u8981\u81ea\u884c\u4f7f\u7528\u6837\u5f0f\u4ee4 ",(0,i.kt)("inlineCode",{parentName:"p"},"<span>")," \u9ed8\u8ba4\u8868\u73b0\u4e3a\u884c\u5185\u6837\u5f0f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:"title=src/global.css",title:"src/global.css"},"/* \u65b9\u6cd5\u4e00\uff1a\u53ea\u4f7f\u7528\u90e8\u5206\u9700\u8981\u7684\u6d4f\u89c8\u5668\u9ed8\u8ba4\u6837\u5f0f */\n.h5-span {\n  display: inline;\n}\n\n/* \u65b9\u6cd5\u4e8c\uff1a\u76f4\u63a5\u5f15\u5165\u5168\u5957\u6d4f\u89c8\u5668\u9ed8\u8ba4\u6837\u5f0f */\n@import '@ice/miniapp-html-styles/html';\n")),(0,i.kt)("p",null,"\u81f3\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"<i>")," \u7b49\u884c\u5185\u6807\u7b7e\u8fd8\u662f\u9ed8\u8ba4\u6620\u5c04\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"<Text>"),"\u3002"),(0,i.kt)("h3",{id:"\u4e0d\u652f\u6301\u90e8\u5206-css-\u9009\u62e9\u5668"},"\u4e0d\u652f\u6301\u90e8\u5206 CSS \u9009\u62e9\u5668"),(0,i.kt)("p",null,"\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u90e8\u5206 CSS \u9009\u62e9\u5668\u4e0d\u4f1a\u751f\u6548\uff0c\u5982\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u901a\u914d\u7b26 *"),(0,i.kt)("li",{parentName:"ul"},"\u5a92\u4f53\u67e5\u8be2"),(0,i.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u9009\u62e9\u5668\uff0c\u5f53\u5c5e\u6027\u4e0d\u662f\u5bf9\u5e94\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u7684\u5185\u7f6e\u5c5e\u6027\u65f6")),(0,i.kt)("h3",{id:"\u4e0d\u652f\u6301\u4f7f\u7528-rem"},"\u4e0d\u652f\u6301\u4f7f\u7528 rem"),(0,i.kt)("p",null,"\u6682\u4e0d\u652f\u6301 rem\u3002"),(0,i.kt)("h2",{id:"\u5176\u4ed6\u9650\u5236"},"\u5176\u4ed6\u9650\u5236"),(0,i.kt)("p",null,"HTML \u6807\u51c6\u548c\u5c0f\u7a0b\u5e8f\u6807\u51c6\u5b58\u5728\u7740\u5f88\u5927\u7684\u5dee\u5f02\uff0c\u6709\u4e00\u4e9b\u80fd\u591f\u62b9\u5e73\uff0c\u4f46\u4ecd\u6709\u90e8\u5206\u5dee\u5f02\u65e0\u6cd5\u5904\u7406\u3002"),(0,i.kt)("h3",{id:"\u8868\u5355\u7ec4\u4ef6"},"\u8868\u5355\u7ec4\u4ef6"),(0,i.kt)("p",null,"HTML \u6807\u7b7e\u548c\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u4e24\u79cd\u89c4\u8303\u4e4b\u95f4\uff0c\u5b58\u5728\u8f83\u5927\u5dee\u5f02\u7684\u90e8\u5206\u4e3b\u8981\u662f\u8868\u5355\u7ec4\u4ef6\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"<input type='checkbox'>")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},"<input type='radio'>")," \u65f6\uff0c\u9700\u8981\u624b\u52a8\u8865\u5145 ",(0,i.kt)("inlineCode",{parentName:"li"},"<checkbox-group>"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"<radio-group>")," \u7ec4\u4ef6\u3002\nHTML \u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"<select>")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"<option>")," \u5b9e\u73b0\u9009\u62e9\u5668\uff0c\u800c\u5c0f\u7a0b\u5e8f\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"<Picker>"),"\u3002\u4e24\u8005\u5dee\u5f02\u5de8\u5927\uff0c\u56e0\u6b64\u4e0d\u4f5c\u6620\u5c04\u3002\u5f53\u7528\u6237\u4f7f\u7528\u4e86 ",(0,i.kt)("inlineCode",{parentName:"li"},"<select>")," \u65f6\uff0c\u4f1a\u63d0\u793a\u7528\u6237\u76f4\u63a5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"<Picker>")," \u7ec4\u4ef6\u3002")),(0,i.kt)("h3",{id:"\u4e0d\u80fd\u540c\u6b65\u83b7\u53d6\u5143\u7d20\u5c3a\u5bf8"},"\u4e0d\u80fd\u540c\u6b65\u83b7\u53d6\u5143\u7d20\u5c3a\u5bf8"),(0,i.kt)("p",null,"\u5728 H5 \u4e2d\u6211\u4eec\u53ef\u4ee5\u8c03\u7528 DOM API \u540c\u6b65\u83b7\u53d6\u5143\u7d20\u7684\u5c3a\u5bf8\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=h5",title:"h5"},"const el = document.getElementById('#inner');\nconst res = el.getBoundingClientRect();\nconsole.log(res);\n")),(0,i.kt)("p",null,"\u4f46\u662f\u5728\u5c0f\u7a0b\u5e8f\u4e2d\uff0c\u83b7\u53d6\u5143\u7d20\u5c3a\u5bf8\u7684 API \u662f\u5f02\u6b65\u7684\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=\u5c0f\u7a0b\u5e8f",title:"\u5c0f\u7a0b\u5e8f"},"const query = Taro.createSelectorQuery();\nquery.select('#inner')\n  .boundingClientRect()\n  .exec(res => {\n    console.log(res)\n  });\n")),(0,i.kt)("p",null,"\u56e0\u6b64 ice.js \u63d0\u4f9b\u4e86\u8fd9\u4e9b API \u7684\u5f02\u6b65\u7248\u672c\uff0c\u5982 getBoundingClientRect\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=ice.js",title:"ice.js"},"const el = document.getElementById('#inner');\nconst res = await el.getBoundingClientRect();\nconsole.log(res);\n")),(0,i.kt)("h3",{id:"dom-api-\u5dee\u5f02"},"DOM API \u5dee\u5f02"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"canvas"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"video"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"audio")," \u7b49\u5143\u7d20\u5728 H5 \u7aef\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLElement")," \u4e0a\u7684\u65b9\u6cd5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=h5",title:"h5"},"const el = document.getElementById('myVideo');\nel.play();\n")),(0,i.kt)("p",null,"\u4f46\u662f\u5728 ice.js \u5c0f\u7a0b\u5e8f\u4e2d\uff0c\u8981\u8c03\u7528\u7ec4\u4ef6\u4e0a\u7684\u539f\u751f\u65b9\u6cd5\uff0c\u5fc5\u987b\u5148\u521b\u5efa\u5bf9\u5e94\u7684 Context\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=\u5c0f\u7a0b\u5e8f",title:"\u5c0f\u7a0b\u5e8f"},"// \u914d\u5408 Uni API \u63d0\u4f9b\u7684\u80fd\u529b\nimport { createVideoContext } from '@uni/video';\n\nconst videoContext = createVideoContext('myVideo');\nvideoContext.play();\n")),(0,i.kt)("h3",{id:"img-\u56fe\u7247\u5c3a\u5bf8\u95ee\u9898"},(0,i.kt)("inlineCode",{parentName:"h3"},"<img>")," \u56fe\u7247\u5c3a\u5bf8\u95ee\u9898"),(0,i.kt)("p",null,"\u5728 H5 \u4e2d\uff0c\u4e0d\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"<img>")," \u7684\u5bbd\u9ad8\u65f6\uff0c\u6d4f\u89c8\u5668\u4f1a\u4f7f\u7528\u539f\u56fe\u7684\u5bbd\u9ad8\u4f5c\u4e3a\u6807\u7b7e\u7684\u5bbd\u9ad8\u3002"),(0,i.kt)("p",null,"\u800c\u5728\u5c0f\u7a0b\u5e8f\u4e2d\uff0c\u4e0d\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"<Image>")," \u7684\u5bbd\u9ad8\u65f6\uff0c\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u6837\u5f0f\u4e2d\u89c4\u5b9a\u7684\u5bbd\u9ad8\u3002"),(0,i.kt)("p",null,"\u89e3\u51b3\u529e\u6cd5\uff1a\u7528\u6237\u5728\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"<img>")," \u65f6\u5fc5\u987b\u663e\u5f0f\u8bbe\u7f6e\u5b83\u7684\u5bbd\u9ad8\u3002"),(0,i.kt)("h3",{id:"\u4e0d\u652f\u6301-reactdom-\u90e8\u5206-api"},"\u4e0d\u652f\u6301 ReactDOM \u90e8\u5206 API"),(0,i.kt)("p",null,"ice.js \u4f7f\u7528 React Reconciler \u5b9e\u73b0\u4e86\u81ea\u5b9a\u4e49\u7684\u6e32\u67d3\u5668\uff0c\u76f8\u5bf9\u4e8e ReactDOM \u6765\u8bf4\u529f\u80fd\u5341\u5206\u7cbe\u7b80\u3002"),(0,i.kt)("p",null,"\u56e0\u6b64\u90e8\u5206\u57fa\u4e8e ReactDOM \u5b9e\u73b0\u7684 H5 \u7ec4\u4ef6\u4f1a\u65e0\u6cd5\u4f7f\u7528\uff0c\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"unstable_renderSubtreeIntoContainer"),"\u3002"),(0,i.kt)("h3",{id:"\u4e0d\u652f\u6301-react-portal"},"\u4e0d\u652f\u6301 React Portal"),(0,i.kt)("h3",{id:"\u4e0d\u652f\u6301\u4f7f\u7528-svg"},"\u4e0d\u652f\u6301\u4f7f\u7528 SVG"),(0,i.kt)("p",null,"\u6682\u4e0d\u652f\u6301\u4f7f\u7528 SVG\u3002"))}d.isMDXComponent=!0}}]);