"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[705],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6979:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"assets",title:"Assets",sidebar_label:"Assets",sidebar_position:5,pagination_next:"docs",pagination_prev:"xml"},l=void 0,u={unversionedId:"assets",id:"assets",title:"Assets",description:"Inserting assets to documents",source:"@site/docs/assets.md",sourceDirName:".",slug:"/assets",permalink:"/final-assignment/assets",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"assets",title:"Assets",sidebar_label:"Assets",sidebar_position:5,pagination_next:"docs",pagination_prev:"xml"},sidebar:"tutorialSidebar",previous:{title:"Extensible Markup Language",permalink:"/final-assignment/xml"},next:{title:"Documentation purposes",permalink:"/final-assignment/docs"}},p={},c=[{value:"Inserting assets to documents",id:"inserting-assets-to-documents",level:2},{value:"Images",id:"images",level:3},{value:"Videos",id:"videos",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"inserting-assets-to-documents"},"Inserting assets to documents"),(0,o.kt)("p",null,"Apart from text-based content in your documentation, there may be a necessity of using some assets, like images or videos or even gifs."),(0,o.kt)("h3",{id:"images"},"Images"),(0,o.kt)("p",null,"While both MD and HTML provide a way to embed images into your documents, HTML is slightly more malleable, giving you the native option to resize your images by appending an image tag with ",(0,o.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," attributes, though neither ",(0,o.kt)("inlineCode",{parentName:"p"},"width")," nor ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," attributes are not mandatory."),(0,o.kt)("p",null,"In the case of markdown there is no native way to change size of images (unless you resize the files themselves outside the document through the use of some other software), but you can write HTML syntax inside md files and it is an acceptable practice."),(0,o.kt)("p",null,"Example of image/gif insertion in Markdown:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"![alt text](path to image on the web or local)\n")),(0,o.kt)("p",null,"Example of image/gif insertion in HTML:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<img src="path to image on the web or local" alt="alt text for photo">\n')),(0,o.kt)("p",null,"Example of image/gif insertion in DITA XML:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<image href="images/sample.png" placement="break"><alt>Sample image</alt></image>\n')),(0,o.kt)("h3",{id:"videos"},"Videos"),(0,o.kt)("p",null,"In markdown there is no native way to add videos, you can use raw HTML inside markdown to embed the video like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'<a href="{video-url}" title="Link Title"><img src="{image-url}" alt="Alternate Text" /></a>\n')),(0,o.kt)("p",null,"In case of videos in HTML you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"<video>")," tag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<video width="320" height="240" controls>\n  <source src="movie.mp4" type="video/mp4">\n  <source src="movie.ogg" type="video/ogg">\nYour browser does not support the video tag.\n</video>\n')),(0,o.kt)("p",null,"Example of video embedding in DITA XML:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<object width="640" height="360" data="here-goes-your-video">\n    <param name="src" value="here-goes-the-link"/>\n    <param name="movie" value="here-goes-the-link"/>\n    <param name="allowFullScreen" value="true"/>\n    <param name="allowscriptaccess" value="always"/>\n</object>\n')))}d.isMDXComponent=!0}}]);