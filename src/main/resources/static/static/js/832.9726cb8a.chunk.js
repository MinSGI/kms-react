"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[832],{832:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(791),s=r(184);const l=()=>{const[e,t]=(0,n.useState)("all");return(0,s.jsxs)("select",{onChange:r=>{t(r.currentTarget.value),console.log("sort value : "+e)},children:[(0,s.jsx)("option",{value:"all",children:"\uc81c\ubaa9+\ub0b4\uc6a9"}),(0,s.jsx)("option",{value:"title",children:"\uc81c\ubaa9"}),(0,s.jsx)("option",{value:"content",children:"\ub0b4\uc6a9"})]})};var a=r(294);const c=()=>{const[e,t]=(0,n.useState)([]);return(0,n.useEffect)((()=>{(async()=>{try{const e="PwA3g7rg7brtYe29mPQr",r="MkU0LOXXvm",n="https://openapi.naver.com/v1/search/news.json",s="\ucf54\ub85c\ub098",l=await a.Z.get("".concat(n,"?query=").concat(s),{headers:{"X-Naver-Client-Id":e,"X-Naver-Client-Secret":r}});t(l.data.items)}catch(e){console.error("Error fetching news:",e)}})()}),[]),(0,s.jsx)("ul",{children:e.map(((e,t)=>(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.title})},t)))})},o=()=>{const[e,t]=(0,n.useState)("");return(0,n.useEffect)((()=>{console.log("useEffect : "+e)}),[e]),(0,s.jsx)("input",{type:"text",onChange:r=>{console.log("@@@ : "+r.currentTarget.value),t(r.currentTarget.value),console.log("search value : "+e)},placeholder:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694."})},u=()=>(0,s.jsxs)("div",{children:[(0,s.jsx)(o,{}),(0,s.jsx)(l,{}),(0,s.jsx)(c,{})]})}}]);
//# sourceMappingURL=832.9726cb8a.chunk.js.map