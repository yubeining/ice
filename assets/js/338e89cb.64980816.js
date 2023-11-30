"use strict";(self.webpackChunkice_website_v3=self.webpackChunkice_website_v3||[]).push([[659],{4852:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var a=t(9231);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=l,k=p["".concat(u,".").concat(m)]||p[m]||d[m]||r;return t?a.createElement(k,i(i({ref:n},s),{},{components:t})):a.createElement(k,i({ref:n},s))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5577:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(9231),l=t(9841);const r={tabItem:"tabItem_M7ZN"};function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:t},n)}},7642:(e,n,t)=>{t.d(n,{Z:()=>v});var a=t(5675),l=t(9231),r=t(9841),i=t(2571),o=t(9409),u=t(1954),c=t(7250),s=t(4967);function p(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:l}}=e;return{value:n,label:t,attributes:a,default:l}}))}function d(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function k(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(r),(0,l.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=d(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[u,c]=k({queryString:t,groupId:a}),[p,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,s.Nk)(t);return[a,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),N=(()=>{const e=u??p;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{N&&o(N)}),[N]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),f(e)}),[c,f,r]),tabValues:r}}var N=t(7101);const g={tabList:"tabList_bgMo",tabItem:"tabItem_E4E1"};function h(e){let{className:n,block:t,selectedValue:o,selectValue:u,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=s.indexOf(n),a=c[t].value;a!==o&&(p(n),u(a))},m=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}null==(n=t)||n.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>s.push(e),onKeyDown:m,onClick:d},i,{className:(0,r.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":o===n})}),t??n)})))}function C(e){let{lazy:n,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],n){const e=t.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function b(e){const n=f(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},l.createElement(h,(0,a.Z)({},e,n)),l.createElement(C,(0,a.Z)({},e,n)))}function v(e){const n=(0,N.Z)();return l.createElement(b,(0,a.Z)({key:String(n)},e))}},6418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>u,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=t(5675),l=(t(9231),t(4852)),r=t(7642),i=t(5577);const o={title:"\u56fd\u9645\u5316"},u=void 0,c={unversionedId:"guide/advanced/i18n",id:"guide/advanced/i18n",title:"\u56fd\u9645\u5316",description:"ice.js \u5b98\u65b9\u63d0\u4f9b i18n \u56fd\u9645\u5316\u63d2\u4ef6\uff0c\u652f\u6301\u5728\u5e94\u7528\u5feb\u901f\u5f00\u542f\u56fd\u9645\u5316\u80fd\u529b\u3002\u6838\u5fc3\u7279\u6027\u5305\u62ec\uff1a",source:"@site/docs/guide/advanced/i18n.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/i18n",permalink:"/docs/guide/advanced/i18n",draft:!1,editUrl:"https://github.com/alibaba/ice/edit/master/website/docs/guide/advanced/i18n.md",tags:[],version:"current",frontMatter:{title:"\u56fd\u9645\u5316"},sidebar:"docs",previous:{title:"\u90e8\u7f72",permalink:"/docs/guide/advanced/deploy"},next:{title:"\u517c\u5bb9 Rax",permalink:"/docs/guide/advanced/rax-compat"}},s={},p=[{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"\u56fd\u9645\u5316\u8def\u7531",id:"\u56fd\u9645\u5316\u8def\u7531",level:2},{value:"\u83b7\u53d6\u8bed\u8a00\u4fe1\u606f",id:"\u83b7\u53d6\u8bed\u8a00\u4fe1\u606f",level:2},{value:"<code>getLocales()</code>",id:"getlocales",level:3},{value:"<code>getDefaultLocale()</code>",id:"getdefaultlocale",level:3},{value:"<code>useLocale()</code>",id:"uselocale",level:3},{value:"<code>withLocale()</code>",id:"withlocale",level:3},{value:"\u5207\u6362\u8bed\u8a00",id:"\u5207\u6362\u8bed\u8a00",level:2},{value:"\u8def\u7531\u81ea\u52a8\u91cd\u5b9a\u5411",id:"\u8def\u7531\u81ea\u52a8\u91cd\u5b9a\u5411",level:2},{value:"\u7981\u7528 Cookie",id:"\u7981\u7528-cookie",level:2},{value:"SSG",id:"ssg",level:2},{value:"\u63d2\u4ef6\u9009\u9879",id:"\u63d2\u4ef6\u9009\u9879",level:2},{value:"<code>locales</code>",id:"locales",level:3},{value:"<code>defaultLocale</code>",id:"defaultlocale",level:3},{value:"<code>autoRedirect</code>",id:"autoredirect",level:3}],d={toc:p},m="wrapper";function k(e){let{components:n,...t}=e;return(0,l.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"ice.js \u5b98\u65b9\u63d0\u4f9b i18n \u56fd\u9645\u5316\u63d2\u4ef6\uff0c\u652f\u6301\u5728\u5e94\u7528\u5feb\u901f\u5f00\u542f\u56fd\u9645\u5316\u80fd\u529b\u3002\u6838\u5fc3\u7279\u6027\u5305\u62ec\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u652f\u6301\u81ea\u52a8\u5904\u7406\u548c\u751f\u6210\u56fd\u9645\u5316\u8def\u7531"),(0,l.kt)("li",{parentName:"ol"},"\u5b8c\u7f8e\u652f\u6301 SSR \u548c SSG\uff0c\u4ee5\u83b7\u5f97\u66f4\u597d\u7684 SEO \u4f18\u5316"),(0,l.kt)("li",{parentName:"ol"},"\u652f\u6301\u81ea\u52a8\u91cd\u5b9a\u5411\u5230\u504f\u597d\u8bed\u8a00\u5bf9\u5e94\u7684\u9875\u9762"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u8026\u5408\u4efb\u4f55\u4e00\u4e2a i18n \u5e93\uff08\u6d41\u884c\u7684 React i18n \u5e93\u6709 ",(0,l.kt)("a",{parentName:"li",href:"https://formatjs.io/docs/getting-started/installation/"},"react-intl"),"\u3001",(0,l.kt)("a",{parentName:"li",href:"https://react.i18next.com/"},"react-i18next")," \u7b49\uff09\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u4efb\u4e00\u56fd\u9645\u5316\u7684\u5e93\u6765\u4e3a\u4f60\u7684\u5e94\u7528\u8bbe\u7f6e\u56fd\u9645\u5316")),(0,l.kt)("details",{open:!0},(0,l.kt)("summary",null,"\u4f7f\u7528\u56fd\u9645\u5316\u63d2\u4ef6\u7684\u793a\u4f8b"),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("a",{href:"https://github.com/alibaba/ice/tree/master/examples/with-i18n",target:"_blank",rel:"noopener noreferrer"},"with-i18n")))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5e94\u7528\u4e0d\u9700\u8981\u4f7f\u7528\u56fd\u9645\u5316\u8def\u7531\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u4f8b\u5b50\u6765\u8ba9\u4f60\u7684\u9879\u76ee\u652f\u6301\u56fd\u9645\u5316\uff1a"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/alibaba/ice/tree/master/examples/with-antd5"},"with-antd5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/alibaba/ice/tree/master/examples/with-fusion"},"with-fusion")))),(0,l.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u5728\u7ec8\u7aef\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u63d2\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @ice/plugin-i18n -D\n")),(0,l.kt)("p",null,"\u7136\u540e\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"ice.config.mts")," \u4e2d\u6dfb\u52a0\u63d2\u4ef6\u548c\u9009\u9879\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { defineConfig } from '@ice/app';\nimport i18n from '@ice/plugin-i18n';\n\nexport default defineConfig({\n  plugins: [\n    i18n({\n      locales: ['zh-CN', 'en-US', 'de'],\n      defaultLocale: 'zh-CN',\n    }),\n  ],\n});\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"en-US")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"zh-CN")," \u662f\u56fd\u9645\u5316\u8bed\u8a00\u7684\u7f29\u5199\uff0c\u5b83\u4eec\u5747\u9075\u5faa\u6807\u51c6\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://www.unicode.org/reports/tr35/tr35-59/tr35.html#Identifiers"},"UTS \u8bed\u8a00\u6807\u8bc6\u7b26"),"\u3002\u6bd4\u5982\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"zh-CN"),"\uff1a\u4e2d\u6587\uff08\u4e2d\u56fd\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"zh-HK"),"\uff1a\u4e2d\u6587\uff08\u9999\u6e2f\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"en-US"),"\uff1a\u82f1\u6587\uff08\u7f8e\u56fd\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"de"),": \u5fb7\u6587")),(0,l.kt)("h2",{id:"\u56fd\u9645\u5316\u8def\u7531"},"\u56fd\u9645\u5316\u8def\u7531"),(0,l.kt)("p",null,"\u56fd\u9645\u5316\u8def\u7531\u662f\u6307\u5728\u9875\u9762\u8def\u7531\u5730\u5740\u4e2d\u5305\u542b\u4e86\u5f53\u524d\u9875\u9762\u7684\u8bed\u8a00\uff0c\u4e00\u4e2a\u56fd\u9645\u5316\u8def\u7531\u5bf9\u5e94\u4e00\u4e2a\u8bed\u8a00\u3002"),(0,l.kt)("p",null,"\u5047\u8bbe\u73b0\u5728\u63d2\u4ef6\u7684\u9009\u9879\u914d\u7f6e\u662f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { defineConfig } from '@ice/app';\nimport i18n from '@ice/plugin-i18n';\n\nexport default defineConfig({\n  plugins: [\n    i18n({\n      locales: ['zh-CN', 'en-US', 'nl-NL'],\n      defaultLocale: 'zh-CN',\n    }),\n  ],\n});\n")),(0,l.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a\u9875\u9762 ",(0,l.kt)("inlineCode",{parentName:"p"},"src/pages/home.tsx"),"\uff0c\u90a3\u4e48\u5c06\u4f1a\u4e00\u4e00\u5bf9\u5e94\u81ea\u52a8\u751f\u6210\u4ee5\u4e0b\u7684\u8def\u7531\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/home"),"\uff1a\u663e\u793a ",(0,l.kt)("inlineCode",{parentName:"li"},"zh-CN")," \u8bed\u8a00\uff0c\u9ed8\u8ba4\u8bed\u8a00\u5bf9\u5e94\u7684\u8def\u7531\u4e0d\u5305\u542b\u8bed\u8a00\u524d\u7f00"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/en-US/home"),"\uff1a\u663e\u793a ",(0,l.kt)("inlineCode",{parentName:"li"},"en-US")," \u8bed\u8a00"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/nl-NL/home"),"\uff1a\u663e\u793a ",(0,l.kt)("inlineCode",{parentName:"li"},"nl-NL")," \u8bed\u8a00")),(0,l.kt)("p",null,"\u8bbf\u95ee\u4e0d\u540c\u7684\u8def\u7531\uff0c\u5c06\u4f1a\u663e\u793a\u8be5\u8bed\u8a00\u5bf9\u5e94\u9875\u9762\u5185\u5bb9\u3002"),(0,l.kt)("h2",{id:"\u83b7\u53d6\u8bed\u8a00\u4fe1\u606f"},"\u83b7\u53d6\u8bed\u8a00\u4fe1\u606f"),(0,l.kt)("h3",{id:"getlocales"},(0,l.kt)("inlineCode",{parentName:"h3"},"getLocales()")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getAllLocales()")," \u7528\u4e8e\u83b7\u53d6\u5f53\u524d\u5e94\u7528\u652f\u6301\u7684\u6240\u6709\u8bed\u8a00\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { getAllLocales } from 'ice';\n\nconsole.log(getAllLocales()); // ['zh-CN', 'en-US']\n")),(0,l.kt)("h3",{id:"getdefaultlocale"},(0,l.kt)("inlineCode",{parentName:"h3"},"getDefaultLocale()")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getDefaultLocale()")," \u7528\u4e8e\u83b7\u53d6\u5e94\u7528\u914d\u7f6e\u7684\u9ed8\u8ba4\u8bed\u8a00\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { getDefaultLocale } from 'ice';\n\nconsole.log(getDefaultLocale()); // 'zh-CN'\n")),(0,l.kt)("h3",{id:"uselocale"},(0,l.kt)("inlineCode",{parentName:"h3"},"useLocale()")),(0,l.kt)("p",null,"\u5728 Function \u7ec4\u4ef6\u4e2d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"useLocale()")," Hook API\uff0c\u5b83\u7684\u8fd4\u56de\u503c\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u5305\u542b\u4e24\u4e2a\u503c\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5f53\u524d\u9875\u9762\u7684\u8bed\u8a00"),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u4e2a set \u51fd\u6570\u7528\u4e8e\u66f4\u65b0\u5f53\u524d\u9875\u9762\u7684\u8bed\u8a00\u3002\u6ce8\u610f\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u8c03\u7528\u6b64 set \u51fd\u6570\u65f6\u5019\uff0c\u540c\u65f6\u4f1a\u66f4\u65b0 Cookie \u4e2d ",(0,l.kt)("inlineCode",{parentName:"li"},"ice_locale")," \u7684\u503c\u4e3a\u5f53\u524d\u9875\u9762\u7684\u8bed\u8a00\u3002\u8fd9\u6837\uff0c\u518d\u6b21\u8bbf\u95ee\u8be5\u9875\u9762\u65f6\uff0c\u4ece\u670d\u52a1\u7aef\u8bf7\u6c42\u80fd\u5f97\u77e5\u5f53\u524d\u7528\u6237\u7684\u4e4b\u524d\u8bbe\u7f6e\u7684\u504f\u597d\u8bed\u8a00\uff0c\u4ee5\u4fbf\u8fd4\u56de\u5bf9\u5e94\u8bed\u8a00\u7684\u9875\u9762\u5185\u5bb9\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useLocale } from 'ice';\n\nexport default function Home() {\n  const [locale, setLocale] = useLocale();\n  \n  console.log('locale: ', locale);  // 'en-US'\n  return (\n    <>\n      {/* \u5207\u6362\u8bed\u8a00\u4e3a zh-CN */}\n      <div onClick={() => setLocale('zh-CN')}>Set zh-CN</div>\n    </>\n  )\n}\n")),(0,l.kt)("h3",{id:"withlocale"},(0,l.kt)("inlineCode",{parentName:"h3"},"withLocale()")),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"withLocale()")," \u65b9\u6cd5\u5305\u88f9\u7684 Class \u7ec4\u4ef6\uff0c\u7ec4\u4ef6\u7684 Props \u4f1a\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"locale")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"setLocale()")," \u51fd\u6570\uff0c\u53ef\u4ee5\u67e5\u770b\u548c\u4fee\u6539\u5f53\u524d\u9875\u9762\u7684\u8bed\u8a00\u3002\u6ce8\u610f\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"setLocale()"),"\uff0c\u4f1a\u66f4\u65b0 Cookie \u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"ice_locale")," \u7684\u503c\u4e3a\u5f53\u524d\u9875\u9762\u7684\u8bed\u8a00\u3002\u8fd9\u6837\uff0c\u518d\u6b21\u8bbf\u95ee\u8be5\u9875\u9762\u65f6\uff0c\u4ece\u670d\u52a1\u7aef\u8bf7\u6c42\u80fd\u5f97\u77e5\u5f53\u524d\u7528\u6237\u7684\u4e4b\u524d\u8bbe\u7f6e\u7684\u504f\u597d\u8bed\u8a00\uff0c\u4ee5\u4fbf\u8fd4\u56de\u5bf9\u5e94\u8bed\u8a00\u7684\u9875\u9762\u5185\u5bb9\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { withLocale } from 'ice';\n\nfunction Home({ locale, setLocale }) {\n  console.log('locale: ', locale);  // 'en-US'\n  return (\n    <>\n      {/* \u5207\u6362\u8bed\u8a00\u4e3a zh-CN */}\n      <div onClick={() => setLocale('zh-CN')}>Set zh-CN</div>\n    </>\n  )\n}\n\nexport default withLocale(Home);\n")),(0,l.kt)("h2",{id:"\u5207\u6362\u8bed\u8a00"},"\u5207\u6362\u8bed\u8a00"),(0,l.kt)("p",null,"\u63a8\u8350\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"setLocale()")," \u65b9\u6cd5\u914d\u5408 ",(0,l.kt)("inlineCode",{parentName:"p"},"<Link>")," \u7ec4\u4ef6\u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"useNavigate()")," \u65b9\u6cd5\u8fdb\u884c\u8bed\u8a00\u5207\u6362\uff1a"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"a",label:"\u4f7f\u7528 <Link />",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useLocale, getAllLocales, Link, useLocation } from 'ice';\n\nexport default function Layout() {\n  const location = useLocation();\n  const [activeLocale, setLocale] = useLocale();\n\n  return (\n    <main>\n      <p><b>Current locale: </b>{activeLocale}</p>\n  \n      <b>Choose language: </b>\n      <ul>\n        {\n          getAllLocales().map((locale: string) => {\n            return (\n              <li key={locale}>\n                <Link \n                  to={location.pathname} \n                  onClick={() => setLocale(locale)}\n                >\n                  {locale}\n                </Link>\n              </li>\n            );\n          })\n        }\n      </ul>\n    </main>\n  );\n}\n"))),(0,l.kt)(i.Z,{value:"b",label:"\u4f7f\u7528 useNavigate()",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useLocale, useNavigate, useLocation } from 'ice';\n\nexport default function Layout() {\n  const [, setLocale] = useLocale();\n  const location = useLocation();\n  const navigate = useNavigate();\n  const switchToZHCN = () => {\n    setLocale('zh-CN'); \n    navigate(location.pathname);\n  }\n  return (\n    <main>\n      <div onClick={switchToZHCN}>\n        \u70b9\u6211\u5207\u6362\u5230\u4e2d\u6587\n      </div>\n    </main>\n  );\n}\n")))),(0,l.kt)("h2",{id:"\u8def\u7531\u81ea\u52a8\u91cd\u5b9a\u5411"},"\u8def\u7531\u81ea\u52a8\u91cd\u5b9a\u5411"),(0,l.kt)("p",null,"\u8def\u7531\u81ea\u52a8\u91cd\u5b9a\u5411\u662f\u6307\uff0c\u5982\u679c\u5f53\u524d\u8bbf\u95ee\u7684\u9875\u9762\u662f\u6839\u8def\u7531\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"/"),"\uff09\uff0c\u5c06\u4f1a\u6839\u636e\u5f53\u524d\u8bed\u8a00\u73af\u5883\u81ea\u52a8\u8df3\u8f6c\u5230\u5bf9\u5e94\u7684\u56fd\u9645\u5316\u8def\u7531\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8def\u7531\u81ea\u52a8\u91cd\u5b9a\u5411\u7684\u529f\u80fd\u662f\u5173\u95ed\u7684\u3002\u5982\u679c\u9700\u8981\u5f00\u542f\uff0c\u5219\u9700\u8981\u52a0\u5165\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},"import { defineConfig } from '@ice/app';\nimport i18n from '@ice/plugin-i18n';\n\nexport default defineConfig({\n  plugins: [\n    i18n({\n      locales: ['zh-CN', 'en-US', 'de'],\n      defaultLocale: 'zh-CN',\n+     autoRedirect: true,\n    }),\n  ],\n});\n")),(0,l.kt)("p",null,"\u5176\u4e2d\uff0c\u8bed\u8a00\u73af\u5883\u7684\u8bc6\u522b\u987a\u5e8f\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CSR"),"\uff1acookie \u4e2d ",(0,l.kt)("inlineCode",{parentName:"li"},"ice_locale")," \u7684\u503c > ",(0,l.kt)("inlineCode",{parentName:"li"},"window.navigator.language")," > ",(0,l.kt)("inlineCode",{parentName:"li"},"defaultLocale")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SSR"),"\uff1acookie \u4e2d ",(0,l.kt)("inlineCode",{parentName:"li"},"ice_locale")," \u7684\u503c > ",(0,l.kt)("inlineCode",{parentName:"li"},"Request Header")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"Accept-Language")," > ",(0,l.kt)("inlineCode",{parentName:"li"},"defaultLocale"))),(0,l.kt)("p",null,"\u5728\u90e8\u7f72\u9636\u6bb5\uff0c\u8def\u7531\u81ea\u52a8\u91cd\u5b9a\u5411\u7684\u529f\u80fd\u9700\u8981\u914d\u5408 Node \u4e2d\u95f4\u4ef6\u4f7f\u7528\u624d\u80fd\u751f\u6548\u3002\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import express from 'express';\nimport { renderToHTML } from './build/server/index.mjs';\n\nconst app = express();\n\napp.use(express.static('build', {}));\n\napp.use(async (req, res) => {\n  const { statusCode, statusText, headers, value: body } = await renderToHTML({ req, res });\n  res.statusCode = statusCode;\n  res.statusMessage = statusText;\n  Object.entries((headers || {}) as Record<string, string>).forEach(([name, value]) => {\n    res.setHeader(name, value);\n  });\n  if (body && req.method !== 'HEAD') {\n    res.end(body);\n  } else {\n    res.end();\n  }\n});\n")),(0,l.kt)("h2",{id:"\u7981\u7528-cookie"},"\u7981\u7528 Cookie"),(0,l.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u7ae0\u8282\u4e2d\u63d0\u5230\uff0c\u7528\u6237\u8bbe\u7f6e\u7684\u504f\u597d\u8bed\u8a00\u662f\u5b58\u653e\u5728 Cookie \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"ice_locale"),"\uff0c\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"setLocale()")," \u65f6\u4f1a\u66f4\u65b0\u5230 Cookie \u4e2d\uff0c\u5e76\u4e14\u8def\u7531\u91cd\u5b9a\u5411\u548c\u8def\u7531\u8df3\u8f6c\u7684\u65f6\u5019\u4f9d\u8d56 ",(0,l.kt)("inlineCode",{parentName:"p"},"ice_locale")," \u7684\u503c\u3002"),(0,l.kt)("p",null,"\u5047\u8bbe\u6709\u8fd9\u4e48\u4e00\u4e2a\u573a\u666f\uff0c\u7528\u6237\u62d2\u7edd\u63a5\u53d7 Cookie\uff0c\u4e3a\u4e86\u4fdd\u62a4\u9690\u79c1\uff0c\u8fd9\u6837\u5c31\u4e0d\u80fd\u628a\u504f\u597d\u8bed\u8a00\u5199\u5230 Cookie \u4e2d\u4e86\u3002\u56e0\u6b64\u9700\u8981\u505a\u4ee5\u4e0b\u7684\u914d\u7f6e\u6765\u7981\u7528 Cookie\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},"import { defineI18nConfig } from '@ice/plugin-i18n/types';\n\nexport const i18nConfig = defineI18nConfig(() => ({\n  // \u53ef\u4ee5\u662f\u4e00\u4e2a function\n  disabledCookie: () => {\n    if (import.meta.renderer === 'client') {\n      return window.localStorage.getItem('acceptCookie') === 'yes';\n    }\n    return false;\n  },\n  // \u4e5f\u53ef\u4ee5\u662f boolean \u503c\n  // disabledCookie: true,\n}));\n")),(0,l.kt)("p",null,"\u8fd9\u6837\uff0c\u5c31\u7981\u7528\u6389\u4e86 Cookie \u7684\u5199\u5165\u4e86\u3002\u5728\u5207\u6362\u8bed\u8a00\u7684\u65f6\u5019\u9700\u8981\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"state")," \u5bf9\u8c61\u4e2d\u663e\u5f0f\u4f20\u5165\u5373\u5c06\u8981\u5207\u6362\u7684\u65b0\u8bed\u8a00\u7684\u503c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Link, useLocale } from 'ice';\n\nexport default function Home() {\n  const [, setLocale] = useLocale();\n  return (\n    <>\n      <Link \n        to=\"/\"\n        onClick={() => setLocale('zh-CN')}\n        state={{ locale: 'zh-CN' }}\n      >\n        \u5207\u6362\u5230 zh-CN\n      </Link>\n    </>\n  )\n}\n")),(0,l.kt)("h2",{id:"ssg"},"SSG"),(0,l.kt)("p",null,"\u5728\u5f00\u542f SSG \u529f\u80fd\u540e\uff0c\u5c06\u6839\u636e\u914d\u7f6e\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"locales")," \u7684\u503c\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," \u9636\u6bb5\u4f1a\u751f\u6210\u4e0d\u540c\u8bed\u8a00\u5bf9\u5e94\u7684 HTML\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\u6211\u4eec\u6709\u4ee5\u4e0b\u7684\u76ee\u5f55\u7ed3\u6784\uff0c\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"about")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"index")," \u4e24\u4e2a\u9875\u9762\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"\u251c\u2500\u2500 src/pages\n|  \u251c\u2500\u2500 about.tsx\n|  \u2514\u2500\u2500 index.tsx\n")),(0,l.kt)("p",null,"\u5047\u5982\u63d2\u4ef6\u7684\u914d\u7f6e\u662f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { defineConfig } from '@ice/app';\nimport i18n from '@ice/plugin-i18n';\n\nexport default defineConfig({\n  plugins: [\n    i18n({\n      locales: ['zh-CN', 'en-US'],\n      defaultLocale: 'zh-CN',\n    }),\n  ],\n});\n")),(0,l.kt)("p",null,"\u90a3\u4e48\u5c06\u4f1a\u751f\u6210 4 \u4e2a HTML \u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"\u251c\u2500\u2500 build\n|  \u251c\u2500\u2500 about\n|  |  \u2514\u2500\u2500 index.html\n|  \u251c\u2500\u2500 en-US\n|  |  \u251c\u2500\u2500 about\n|  |  |  \u2514\u2500\u2500 index.html\n|  |  \u2514\u2500\u2500 index.html\n|  \u251c\u2500\u2500 index.html\n")),(0,l.kt)("h2",{id:"\u63d2\u4ef6\u9009\u9879"},"\u63d2\u4ef6\u9009\u9879"),(0,l.kt)("h3",{id:"locales"},(0,l.kt)("inlineCode",{parentName:"h3"},"locales")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u7c7b\u578b\uff1a"),(0,l.kt)("inlineCode",{parentName:"li"},"string[]"))),(0,l.kt)("p",null,"\u7528\u4e8e\u58f0\u660e\u8be5\u5e94\u7528\u652f\u6301\u7684\u8bed\u8a00\u3002"),(0,l.kt)("h3",{id:"defaultlocale"},(0,l.kt)("inlineCode",{parentName:"h3"},"defaultLocale")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u7c7b\u578b\uff1a"),(0,l.kt)("inlineCode",{parentName:"li"},"string"))),(0,l.kt)("p",null,"\u58f0\u660e\u8be5\u5e94\u7528\u9ed8\u8ba4\u7684\u8bed\u8a00\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"locales")," \u6570\u7ec4\u5fc5\u987b\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultLocale")," \u7684\u503c\u3002"),(0,l.kt)("h3",{id:"autoredirect"},(0,l.kt)("inlineCode",{parentName:"h3"},"autoRedirect")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u7c7b\u578b\uff1a"),(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u9ed8\u8ba4\u503c\uff1a"),(0,l.kt)("inlineCode",{parentName:"li"},"false"))),(0,l.kt)("p",null,"\u9ed8\u8ba4\u4e0d\u4f1a\u81ea\u52a8\u91cd\u5b9a\u5411\u5230\u7528\u6237\u504f\u597d\u8bed\u8a00\u5bf9\u5e94\u7684\u9875\u9762\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5728\u751f\u4ea7\u73af\u5883\u4e0b\uff0c\u4e00\u822c\u9700\u8981\u914d\u5408 Node \u4e2d\u95f4\u4ef6\u4e00\u8d77\u4f7f\u7528\u624d\u80fd\u751f\u6548\u3002",(0,l.kt)("a",{parentName:"p",href:"#%E8%B7%AF%E7%94%B1%E8%87%AA%E5%8A%A8%E9%87%8D%E5%AE%9A%E5%90%91"},"\u8be6\u89c1")))}k.isMDXComponent=!0}}]);