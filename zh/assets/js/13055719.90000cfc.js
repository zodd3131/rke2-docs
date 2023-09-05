"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[9185],{3905:(M,N,j)=>{j.d(N,{Zo:()=>y,kt:()=>e});var z=j(7294);function T(M,N,j){return N in M?Object.defineProperty(M,N,{value:j,enumerable:!0,configurable:!0,writable:!0}):M[N]=j,M}function D(M,N){var j=Object.keys(M);if(Object.getOwnPropertySymbols){var z=Object.getOwnPropertySymbols(M);N&&(z=z.filter((function(N){return Object.getOwnPropertyDescriptor(M,N).enumerable}))),j.push.apply(j,z)}return j}function L(M){for(var N=1;N<arguments.length;N++){var j=null!=arguments[N]?arguments[N]:{};N%2?D(Object(j),!0).forEach((function(N){T(M,N,j[N])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(j)):D(Object(j)).forEach((function(N){Object.defineProperty(M,N,Object.getOwnPropertyDescriptor(j,N))}))}return M}function O(M,N){if(null==M)return{};var j,z,T=function(M,N){if(null==M)return{};var j,z,T={},D=Object.keys(M);for(z=0;z<D.length;z++)j=D[z],N.indexOf(j)>=0||(T[j]=M[j]);return T}(M,N);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(M);for(z=0;z<D.length;z++)j=D[z],N.indexOf(j)>=0||Object.prototype.propertyIsEnumerable.call(M,j)&&(T[j]=M[j])}return T}var c=z.createContext({}),g=function(M){var N=z.useContext(c),j=N;return M&&(j="function"==typeof M?M(N):L(L({},N),M)),j},y=function(M){var N=g(M.components);return z.createElement(c.Provider,{value:N},M.children)},t={inlineCode:"code",wrapper:function(M){var N=M.children;return z.createElement(z.Fragment,{},N)}},u=z.forwardRef((function(M,N){var j=M.components,T=M.mdxType,D=M.originalType,c=M.parentName,y=O(M,["components","mdxType","originalType","parentName"]),u=g(j),e=T,I=u["".concat(c,".").concat(e)]||u[e]||t[e]||D;return j?z.createElement(I,L(L({ref:N},y),{},{components:j})):z.createElement(I,L({ref:N},y))}));function e(M,N){var j=arguments,T=N&&N.mdxType;if("string"==typeof M||T){var D=j.length,L=new Array(D);L[0]=u;var O={};for(var c in N)hasOwnProperty.call(N,c)&&(O[c]=N[c]);O.originalType=M,O.mdxType="string"==typeof M?M:T,L[1]=O;for(var g=2;g<D;g++)L[g]=j[g];return z.createElement.apply(null,L)}return z.createElement.apply(null,j)}u.displayName="MDXCreateElement"},6291:(M,N,j)=>{j.r(N),j.d(N,{assets:()=>c,contentTitle:()=>L,default:()=>t,frontMatter:()=>D,metadata:()=>O,toc:()=>g});var z=j(7462),T=(j(7294),j(3905));const D={slug:"/",sidebar_position:1,title:"\u4ecb\u7ecd"},L=void 0,O={unversionedId:"introduction",id:"introduction",title:"\u4ecb\u7ecd",description:"RKE2\uff0c\u4e5f\u79f0\u4e3a RKE Government\uff0c\u662f Rancher \u7684\u4e0b\u4e00\u4ee3 Kubernetes \u53d1\u884c\u7248\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/introduction.md",sourceDirName:".",slug:"/",permalink:"/zh/",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/introduction.md",tags:[],version:"current",lastUpdatedAt:1693940071,formattedLastUpdatedAt:"2023\u5e749\u67085\u65e5",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1,title:"\u4ecb\u7ecd"},sidebar:"mySidebar",next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh/install/quickstart"}},c={},g=[{value:"\u4e0e RKE \u6216 K3s \u7684\u5dee\u522b\uff1f",id:"\u4e0e-rke-\u6216-k3s-\u7684\u5dee\u522b",level:2},{value:"\u4e3a\u4ec0\u4e48\u6709\u4e24\u4e2a\u540d\u5b57\uff1f",id:"\u4e3a\u4ec0\u4e48\u6709\u4e24\u4e2a\u540d\u5b57",level:2},{value:"\u5b89\u5168",id:"\u5b89\u5168",level:2}],y={toc:g};function t(M){let{components:N,...D}=M;return(0,T.kt)("wrapper",(0,z.Z)({},y,D,{components:N,mdxType:"MDXLayout"}),(0,T.kt)("p",null,(0,T.kt)("img",{src:j(9273).Z+"#gh-light-mode-only",width:"346",height:"111"}),(0,T.kt)("img",{src:j(1103).Z+"#gh-dark-mode-only",width:"346",height:"111"})),(0,T.kt)("p",null,"RKE2\uff0c\u4e5f\u79f0\u4e3a RKE Government\uff0c\u662f Rancher \u7684\u4e0b\u4e00\u4ee3 Kubernetes \u53d1\u884c\u7248\u3002"),(0,T.kt)("p",null,"\u5b83\u662f\u4e00\u4e2a",(0,T.kt)("a",{parentName:"p",href:"https://landscape.cncf.io/card-mode?selected=rke-government"},"\u5b8c\u5168\u5408\u89c4\u7684 Kubernetes \u53d1\u884c\u7248"),"\uff0c\u4e13\u6ce8\u4e8e\u5b89\u5168\u548c\u5408\u89c4\u6027\u3002"),(0,T.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u4e9b\u76ee\u6807\uff0cRKE2 \u4f1a\uff1a"),(0,T.kt)("ul",null,(0,T.kt)("li",{parentName:"ul"},"\u63d0\u4f9b",(0,T.kt)("a",{parentName:"li",href:"/zh/security/hardening_guide"},"\u9ed8\u8ba4\u503c\u548c\u914d\u7f6e\u9009\u9879"),"\uff0c\u8ba9\u96c6\u7fa4\u80fd\u4f7f\u7528\u6700\u5c11\u7684\u4eba\u5458\u5e72\u9884\u901a\u8fc7 CIS Kubernetes Benchmark ",(0,T.kt)("a",{parentName:"li",href:"/zh/security/cis_self_assessment16"},"v1.6")," \u6216 ",(0,T.kt)("a",{parentName:"li",href:"/zh/security/cis_self_assessment123"},"v1.23")),(0,T.kt)("li",{parentName:"ul"},"\u542f\u7528 ",(0,T.kt)("a",{parentName:"li",href:"/zh/security/fips_support"},"FIPS 140-2 \u5408\u89c4")),(0,T.kt)("li",{parentName:"ul"},"\u5728\u6211\u4eec\u7684\u6784\u5efa\u6d41\u6c34\u7ebf\u4e2d\u4f7f\u7528 ",(0,T.kt)("a",{parentName:"li",href:"https://github.com/aquasecurity/trivy"},"trivy")," \u5b9a\u671f\u626b\u63cf\u7ec4\u4ef6\u4ee5\u67e5\u627e CVE")),(0,T.kt)("h2",{id:"\u4e0e-rke-\u6216-k3s-\u7684\u5dee\u522b"},"\u4e0e RKE \u6216 K3s \u7684\u5dee\u522b\uff1f"),(0,T.kt)("p",null,"RKE2 \u5b8c\u7f8e\u7ed3\u5408\u4e86 1.x \u7248\u672c\u7684 RKE\uff08\u4ee5\u4e0b\u7b80\u79f0 RKE1\uff09\u548c K3s\u3002"),(0,T.kt)("p",null,"\u5b83\u7ee7\u627f\u4e86 K3s \u7684\u53ef\u7528\u6027\u3001\u6613\u64cd\u4f5c\u6027\u548c\u90e8\u7f72\u6a21\u578b\u3002"),(0,T.kt)("p",null,"\u5b83\u8fd8\u7ee7\u627f\u4e86 RKE1 \u4e0e\u4e0a\u6e38 Kubernetes \u7684\u7d27\u5bc6\u7ed3\u5408\u5173\u7cfb\u3002\u4e3a\u4e86\u4f18\u5316\u8fb9\u7f18\u90e8\u7f72\uff0cK3s \u5728\u67d0\u4e9b\u5730\u65b9\u4e0e\u4e0a\u6e38 Kubernetes \u6709\u6240\u4e0d\u540c\uff0c\u4f46 RKE1 \u548c RKE2 \u53ef\u4ee5\u4e0e\u4e0a\u6e38\u4fdd\u6301\u7d27\u5bc6\u4e00\u81f4\u3002"),(0,T.kt)("p",null,"\u91cd\u8981\u7684\u662f\uff0cRKE2 \u4e0d\u50cf RKE1 \u4e00\u6837\u4f9d\u8d56 Docker\u3002RKE1 \u4f7f\u7528 Docker \u6765\u90e8\u7f72\u548c\u7ba1\u7406 control plane \u7ec4\u4ef6\u4ee5\u53ca Kubernetes \u7684\u5bb9\u5668\u8fd0\u884c\u65f6\u3002RKE2 \u5c06 control plane \u7ec4\u4ef6\u4f5c\u4e3a\u7531 kubelet \u7ba1\u7406\u7684\u9759\u6001 pod \u542f\u52a8\u3002\u5d4c\u5165\u5f0f\u5bb9\u5668\u8fd0\u884c\u65f6\u662f containerd\u3002"),(0,T.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u6709\u4e24\u4e2a\u540d\u5b57"},"\u4e3a\u4ec0\u4e48\u6709\u4e24\u4e2a\u540d\u5b57\uff1f"),(0,T.kt)("p",null,"\u5b83\u88ab\u79f0\u4e3a RKE Government\uff0c\u76ee\u7684\u662f\u4f20\u8fbe\u5176\u5f53\u524d\u9488\u5bf9\u7684\u4e3b\u8981\u7528\u4f8b\u548c\u90e8\u95e8\u3002"),(0,T.kt)("p",null,"\u5b83\u4e5f\u88ab\u79f0\u4e3a RKE2\uff0c\u56e0\u4e3a\u5b83\u662f Rancher Kubernetes Engine \u9488\u5bf9\u6570\u636e\u4e2d\u5fc3\u7528\u4f8b\u7684\u4e0b\u4e00\u6b21\u8fed\u4ee3\u3002\u8be5\u53d1\u884c\u7248\u72ec\u7acb\u8fd0\u884c\uff0c\u6211\u4eec\u6b63\u5728\u8fdb\u884c\u5b83\u4e0e Rancher \u7684\u96c6\u6210\u5de5\u4f5c\u3002RKE2 \u4e0e RKE \u7684\u529f\u80fd\u5bf9\u7b49\u540e\uff0c\u6211\u4eec\u4f1a\u8ba9 RKE2 \u6210\u4e3a Rancher \u4e2d\u7684\u4e00\u4e2a\u9009\u9879\u3002\u6211\u4eec\u4e5f\u5728\u5f00\u53d1\u4ece RKE \u8fc1\u79fb\u5230 RKE2 \u7684\u5347\u7ea7\u8def\u5f84\u3002"),(0,T.kt)("h2",{id:"\u5b89\u5168"},"\u5b89\u5168"),(0,T.kt)("p",null,"Rancher Labs \u4f1a\u8d1f\u8d23\u4efb\u5730\u62ab\u9732\u95ee\u9898\uff0c\u5e76\u81f4\u529b\u4e8e\u5728\u5408\u7406\u7684\u65f6\u95f4\u5185\u89e3\u51b3\u6240\u6709\u95ee\u9898\u3002\u8981\u62a5\u544a\u5b89\u5168\u6f0f\u6d1e\uff0c\u8bf7\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\u5230 ",(0,T.kt)("a",{parentName:"p",href:"mailto:security@rancher.com"},"security@rancher.com"),"\u3002"))}t.isMDXComponent=!0},1103:(M,N,j)=>{j.d(N,{Z:()=>z});const z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjEuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzNDUuOTk3NjUwMSAxMTEuMzYyMzgxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNDUuOTk3NjUwMSAxMTEuMzYyMzgxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGw6IzJFNjhFOTt9Cjwvc3R5bGU+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNjMuODE5ODU0NywzMC4zMTM5MDc2aDIwLjgwMjk0OGM5Ljg3NzczMTMsMCwxNi41Mzc1OTc3LDQuNzg5MDU4NywxNi41Mzc1OTc3LDE0LjA2NzU1ODMKCQkJCWMwLDcuNTU4NzI3My01LjE2Mjk3OTEsMTIuMTIzNjgwMS0xMC4xNzczNjgyLDEzLjY5NDg2MjRjMS40OTY4ODcyLDEuMjcxNTYwNywyLjYxOTg1NzgsMi45OTI1NTM3LDMuNTE3NTAxOCw0Ljc4OTA1ODcKCQkJCWMyLjA5NDkwOTcsNC4yNjUzMzUxLDMuNTE2MjgxMSw4Ljk3ODg4MTgsNy45MzE0MjcsOC45Nzg4ODE4YzEuMTIyOTcwNiwwLDIuMDIwNjE0Ni0wLjM3MzkxNjYsMi4wMjA2MTQ2LTAuMzczOTE2NgoJCQkJbC0wLjk3MzE1OTgsOC45MDQ1NzkyYzAsMC0yLjY5MjkzMjEsMC42NzM1MzgyLTUuMDEzMTY4MywwLjY3MzUzODJjLTUuOTg2MzI4MSwwLTkuNDI4MzE0Mi0yLjMyMDIzNjItMTIuOTQ1ODAwOC0xMC4zMjcxNzEzCgkJCQljLTEuNDk1NjgxOC0zLjU5MDU3NjItMy41OTE3OTY5LTkuODc3NzQyOC02LjM2MDI0NDgtOS44Nzc3NDI4aC0yLjg0Mzk2MzZWODAuODIzMTQzaC0xMi40OTYzODM3VjMwLjMxMzkwNzZ6CgkJCQkgTTE3Ni4zMTYyMzg0LDM5LjM2ODMwMTR2MTIuNDIwODY0MUgxODAuODA2OWMzLjU5MTc4MTYsMCw3Ljc4MTYwMS0xLjEyMTc1MzcsNy43ODE2MDEtNi41MDg4MzQ4CgkJCQljMC00LjQxNTE0NTktMi44NDI3NDI5LTUuOTEyMDI5My02LjI4NTkzNDQtNS45MTIwMjkzSDE3Ni4zMTYyMzg0eiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjA5LjY5MTA3MDYsMzAuMzEzOTA3NmgxMi40OTYzNjg0djE0LjE0MzA3NGMwLDEuNTcxMTgyMy0wLjIyNDEwNTgsMy44OTAxOTc4LTAuMzczOTE2Niw1LjYxMjQwNzcKCQkJCWgwLjI5OTYyMTZjMC44MjMzNDktMS4yNzE1NjA3LDEuODcwODAzOC0zLjIxNzg3NjQsMy4xNDIzNjQ1LTQuNzE0NzYzNmwxMi4zNDc3OTM2LTE1LjA0MDcxODFoMTMuNDY4MzA3NQoJCQkJbC0xNi40NjIwODE5LDE5LjgyOTc3NjhsMTcuMzYwOTQ2NywzMC42Nzk0NTg2SDIzNy42MDMzMDJsLTExLjY3NDI1NTQtMjEuMTc1NjMyNWwtMy43NDE2MDc3LDQuNTY0OTUyOVY4MC44MjMxNDNoLTEyLjQ5NjM2ODQKCQkJCVYzMC4zMTM5MDc2eiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjU1LjkzNzQwODQsMzAuMzEzOTI2N2gzMy40NDc5MDY1djkuMjc4NDkyaC0yMC45NTE1MzgxdjEwLjg1MDg5MTFoMTcuNTg1MDUyNXY5LjI3ODQ5MmgtMTcuNTg1MDUyNQoJCQkJVjcxLjU0NDYzMmgyMS43MDA1OTJ2OS4yNzg0OTU4aC0zNC4xOTY5NjA0VjMwLjMxMzkyNjd6Ii8+CgkJPC9nPgoJCTxnPgoJCQk8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSIzNC45MDgwNTgyIiBjeT0iNzYuMzk0MjEwOCIgcj0iNyIvPgoJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNzEuNDU4NjE4Miw1OC42ODE4MjM3Yy0wLjIwOTE4MjcsMC0wLjQxNjk5MjItMC4wMTA4MTA5LTAuNjIzMDkyNy0wLjAyOTM5NjEKCQkJCWMxLjgwMzQ4OTcsMy44OTkxNzc2LDIuOTU4OTMxLDguMTU2ODk4NSwzLjMwNjE5ODEsMTIuNjM5OTkxOGgxNC45NjU1NzYyCgkJCQljMi4xMzM2NjctMy43NjMwNTM5LDUuNjE4OTcyOC02LjY2MDY4MjcsOS43OTM1MDI4LTguMDI5MDIyMnYtNC41ODMyODI1aC0yNy40MTM0NzUKCQkJCUM3MS40Nzc5MjgyLDU4LjY4MDE1NjcsNzEuNDY4MTg1NCw1OC42ODE4MjM3LDcxLjQ1ODYxODIsNTguNjgxODIzN3oiLz4KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTQyLjEwNzE1NDgsMjcuNzQ0MDc5NnY5LjY0NjQwNDNjOC4yNDQzMDg1LDEuMTEyNDIyOSwxNS42MzY4NjM3LDQuOTM4MTEwNCwyMS4yNDkxNjg0LDEwLjU0OTMwNQoJCQkJbC00Ljg4ODAzODYtMjAuMTk1NzA5Mkg0Mi4xMDcxNTQ4eiIvPgoJCQk8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSIxMDQuMzM4Mjc5NyIgY3k9Ijc5Ljg5NDIxMDgiIHI9IjMuNSIvPgoJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTIxLjU4Njg5MTIsMEgxNC4zOTIzODI2QzYuNDc2NTM4MiwwLDAsNi40NzY2MjM1LDAsMTQuMzkyNDY4NXY4Mi41Nzc0Mzg0CgkJCQljMCw3LjkxNTg0NzgsNi40NzY1MzgyLDE0LjM5MjQ3MTMsMTQuMzkyMzgyNiwxNC4zOTI0NzEzaDEwNy4xOTQ1MTE0YzcuOTE1ODQwMSwwLDE0LjM5MjM4NzQtNi40NzY2MjM1LDE0LjM5MjM4NzQtMTQuMzkyNDcxMwoJCQkJVjE0LjM5MjQ2ODVDMTM1Ljk3OTI3ODYsNi40NzY2MjM1LDEyOS41MDI3MzEzLDAsMTIxLjU4Njg5MTIsMHogTTM0LjkwODA1ODIsOTcuMzk0MjEwOAoJCQkJYy0xMS41NzkzOTUzLDAtMjEuMDAwMDAxOS05LjQyMDU2MjctMjEuMDAwMDAxOS0yMVMyMy4zMjg2NjI5LDU1LjM5NDIwNywzNC45MDgwNTgyLDU1LjM5NDIwN3MyMSw5LjQyMDU2NjYsMjEsMjEuMDAwMDAzOAoJCQkJUzQ2LjQ4NzQ0OTYsOTcuMzk0MjEwOCwzNC45MDgwNTgyLDk3LjM5NDIxMDh6IE0xMDQuMzM4Mjc5Nyw5Ny4zOTQyMTA4CgkJCQljLTcuNzY2MTM2MiwwLTE0LjM2MzE1OTItNS4wODY1Nzg0LTE2LjY0NDE0MjItMTIuMTAxNzkxNGgtMjAuNDM2MjAzYy0zLjg2Mjk4NzUsMC02Ljk5NTIxNjQtMy4xMjkxNTA0LTctNi45OTE3OTg0CgkJCQlsLTAuMDA0NzgzNi00LjEwODA1NTFjMC0xMi43NjUwODcxLTEwLjM3ODMyMjYtMjMuMTQzNDA5Ny0yMy4xMzQ4NjQ4LTIzLjE0MzQwOTdIMjUuNjA4NjE3OGMtMy44NjU3MjI3LDAtNy0zLjEzMzkzNC03LTcKCQkJCXMzLjEzNDI3NzMtNyw3LTdoMi40OTg1MzUydi05LjMwNTA3NjZoLTIuNDk4NTM1MmMtMy44NjU3MjI3LDAtNy0zLjEzMzkzNTktNy03czMuMTM0Mjc3My03LDctN2gzOC4zNjczODU5CgkJCQljMy4yMzEzNDk5LDAsNi4wNDI5NjQ5LDIuMjEyMTA5Niw2LjgwMzgwNjMsNS4zNTMyMjE5bDYuMTkyMzM3LDI1LjU4MjgxMzNoMjYuNDE1MDg0OAoJCQkJYzUuMjQ1OTAzLDAsOS41MTM1NzI3LDQuMjY3Njc3Myw5LjUxMzU3MjcsOS41MTM1NzI3djEwLjQ0Njg5MThjNS4zMjg2MTMzLDMuMDAzMTEyOCw4LjkzNzQ3NzEsOC43MTMzMDI2LDguOTM3NDc3MSwxNS4yNTM2MzE2CgkJCQlDMTIxLjgzODI3OTcsODkuNTQzNzMxNywxMTMuOTg3ODkyMiw5Ny4zOTQyMTA4LDEwNC4zMzgyNzk3LDk3LjM5NDIxMDh6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM0NS45OTc2NTAxLDgwLjY0ODgxMTNoLTM3LjMwMDc4MTJ2LTguODU1MjkzM2wxMi41NTA3ODEyLTEyLjI5NTIyMzIKCQkJYzMuNTg1OTM3NS0zLjYzMjk0MjIsNS45Mjk2ODc1LTYuMTEzNTU1OSw3LjAzMTI1LTcuNDQxODQ4OHMxLjg2OTE0MDYtMi40NjkyNjUsMi4zMDI3MzQ0LTMuNDIyOTA4OAoJCQljMC40MzM1OTM4LTAuOTUzNjQ3NiwwLjY1MDM5MDYtMS45NTI3MDU0LDAuNjUwMzkwNi0yLjk5NzE3NzFjMC0xLjI5NDIzMTQtMC40MzM1OTM4LTIuMzE1OTk4MS0xLjMwMDc4MTItMy4wNjUyOTI0CgkJCWMtMC44NjcxODc1LTAuNzQ5MjkwNS0yLjA4NTkzNzUtMS4xMjM5Mzk1LTMuNjU2MjUtMS4xMjM5Mzk1Yy0xLjYxNzE4NzUsMC0zLjI1MTk1MzEsMC40NDg0NDA2LTQuOTA0Mjk2OSwxLjM0NTMyNTUKCQkJYy0xLjY1MjM0MzgsMC44OTY4ODExLTMuNTIxNDg0NCwyLjIxOTQ5NzctNS42MDc0MjE5LDMuOTY3ODQ5N2wtNy42Mjg5MDYyLTguNjUwOTM2MQoJCQljMi42NDg0Mzc1LTIuMjkzMjkzLDQuODc1LTMuOTMzNzkyMSw2LjY3OTY4NzUtNC45MjE0OTczczMuNzY3NTc4MS0xLjc0MjY3NTgsNS44ODg2NzE5LTIuMjY0OTA5NwoJCQljMi4xMjEwOTM4LTAuNTIyMjM1OSw0LjUwNTg1OTQtMC43ODMzNTE5LDcuMTU0Mjk2OS0wLjc4MzM1MTljMy4zMjgxMjUsMCw2LjI5ODgyODEsMC41Njc2NDYsOC45MTIxMDk0LDEuNzAyOTQKCQkJYzIuNjEzMjgxMiwxLjEzNTI5MjEsNC42NDA2MjUsMi43NTMwODYxLDYuMDgyMDMxMiw0Ljg1MzM3ODNzMi4xNjIxMDk0LDQuNDU2MDI4LDIuMTYyMTA5NCw3LjA2NzE5OTcKCQkJYzAsMS45NTI3MDU0LTAuMjUxOTUzMSwzLjc1NzgyMzktMC43NTU4NTk0LDUuNDE1MzUxOXMtMS4yODMyMDMxLDMuMjg2Njc0NS0yLjMzNzg5MDYsNC44ODc0MzU5CgkJCWMtMS4wNTQ2ODc1LDEuNjAwNzY1Mi0yLjQ1NTA3ODEsMy4yODY2NzQ1LTQuMjAxMTcxOSw1LjA1NzczMTZzLTUuNDY2Nzk2OSw1LjEzMTUyNjktMTEuMTYyMTA5NCwxMC4wODE0MDE4djAuMzQwNTkxNGgxOS40NDE0MDYyCgkJCVY4MC42NDg4MTEzeiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo="},9273:(M,N,j)=>{j.d(N,{Z:()=>z});const z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjEuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzNDUuOTk3NjUwMSAxMTEuMzYyMzgxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNDUuOTk3NjUwMSAxMTEuMzYyMzgxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzM4NDc0NTt9Cgkuc3Qxe2ZpbGw6IzJFNjhFOTt9Cjwvc3R5bGU+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNjMuODE5ODU0NywzMC4zMTM5MDc2aDIwLjgwMjk0OGM5Ljg3NzczMTMsMCwxNi41Mzc1OTc3LDQuNzg5MDU4NywxNi41Mzc1OTc3LDE0LjA2NzU1ODMKCQkJCWMwLDcuNTU4NzI3My01LjE2Mjk3OTEsMTIuMTIzNjgwMS0xMC4xNzczNjgyLDEzLjY5NDg2MjRjMS40OTY4ODcyLDEuMjcxNTYwNywyLjYxOTg1NzgsMi45OTI1NTM3LDMuNTE3NTAxOCw0Ljc4OTA1ODcKCQkJCWMyLjA5NDkwOTcsNC4yNjUzMzUxLDMuNTE2MjgxMSw4Ljk3ODg4MTgsNy45MzE0MjcsOC45Nzg4ODE4YzEuMTIyOTcwNiwwLDIuMDIwNjE0Ni0wLjM3MzkxNjYsMi4wMjA2MTQ2LTAuMzczOTE2NgoJCQkJbC0wLjk3MzE1OTgsOC45MDQ1NzkyYzAsMC0yLjY5MjkzMjEsMC42NzM1MzgyLTUuMDEzMTY4MywwLjY3MzUzODJjLTUuOTg2MzI4MSwwLTkuNDI4MzE0Mi0yLjMyMDIzNjItMTIuOTQ1ODAwOC0xMC4zMjcxNzEzCgkJCQljLTEuNDk1NjgxOC0zLjU5MDU3NjItMy41OTE3OTY5LTkuODc3NzQyOC02LjM2MDI0NDgtOS44Nzc3NDI4aC0yLjg0Mzk2MzZWODAuODIzMTQzaC0xMi40OTYzODM3VjMwLjMxMzkwNzZ6CgkJCQkgTTE3Ni4zMTYyMzg0LDM5LjM2ODMwMTR2MTIuNDIwODY0MUgxODAuODA2OWMzLjU5MTc4MTYsMCw3Ljc4MTYwMS0xLjEyMTc1MzcsNy43ODE2MDEtNi41MDg4MzQ4CgkJCQljMC00LjQxNTE0NTktMi44NDI3NDI5LTUuOTEyMDI5My02LjI4NTkzNDQtNS45MTIwMjkzSDE3Ni4zMTYyMzg0eiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjA5LjY5MTA3MDYsMzAuMzEzOTA3NmgxMi40OTYzNjg0djE0LjE0MzA3NGMwLDEuNTcxMTgyMy0wLjIyNDEwNTgsMy44OTAxOTc4LTAuMzczOTE2Niw1LjYxMjQwNzcKCQkJCWgwLjI5OTYyMTZjMC44MjMzNDktMS4yNzE1NjA3LDEuODcwODAzOC0zLjIxNzg3NjQsMy4xNDIzNjQ1LTQuNzE0NzYzNmwxMi4zNDc3OTM2LTE1LjA0MDcxODFoMTMuNDY4MzA3NQoJCQkJbC0xNi40NjIwODE5LDE5LjgyOTc3NjhsMTcuMzYwOTQ2NywzMC42Nzk0NTg2SDIzNy42MDMzMDJsLTExLjY3NDI1NTQtMjEuMTc1NjMyNWwtMy43NDE2MDc3LDQuNTY0OTUyOVY4MC44MjMxNDNoLTEyLjQ5NjM2ODQKCQkJCVYzMC4zMTM5MDc2eiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjU1LjkzNzQwODQsMzAuMzEzOTI2N2gzMy40NDc5MDY1djkuMjc4NDkyaC0yMC45NTE1MzgxdjEwLjg1MDg5MTFoMTcuNTg1MDUyNXY5LjI3ODQ5MmgtMTcuNTg1MDUyNQoJCQkJVjcxLjU0NDYzMmgyMS43MDA1OTJ2OS4yNzg0OTU4aC0zNC4xOTY5NjA0VjMwLjMxMzkyNjd6Ii8+CgkJPC9nPgoJCTxnPgoJCQk8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSIzNC45MDgwNTgyIiBjeT0iNzYuMzk0MjEwOCIgcj0iNyIvPgoJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNzEuNDU4NjE4Miw1OC42ODE4MjM3Yy0wLjIwOTE4MjcsMC0wLjQxNjk5MjItMC4wMTA4MTA5LTAuNjIzMDkyNy0wLjAyOTM5NjEKCQkJCWMxLjgwMzQ4OTcsMy44OTkxNzc2LDIuOTU4OTMxLDguMTU2ODk4NSwzLjMwNjE5ODEsMTIuNjM5OTkxOGgxNC45NjU1NzYyCgkJCQljMi4xMzM2NjctMy43NjMwNTM5LDUuNjE4OTcyOC02LjY2MDY4MjcsOS43OTM1MDI4LTguMDI5MDIyMnYtNC41ODMyODI1aC0yNy40MTM0NzUKCQkJCUM3MS40Nzc5MjgyLDU4LjY4MDE1NjcsNzEuNDY4MTg1NCw1OC42ODE4MjM3LDcxLjQ1ODYxODIsNTguNjgxODIzN3oiLz4KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTQyLjEwNzE1NDgsMjcuNzQ0MDc5NnY5LjY0NjQwNDNjOC4yNDQzMDg1LDEuMTEyNDIyOSwxNS42MzY4NjM3LDQuOTM4MTEwNCwyMS4yNDkxNjg0LDEwLjU0OTMwNQoJCQkJbC00Ljg4ODAzODYtMjAuMTk1NzA5Mkg0Mi4xMDcxNTQ4eiIvPgoJCQk8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSIxMDQuMzM4Mjc5NyIgY3k9Ijc5Ljg5NDIxMDgiIHI9IjMuNSIvPgoJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTIxLjU4Njg5MTIsMEgxNC4zOTIzODI2QzYuNDc2NTM4MiwwLDAsNi40NzY2MjM1LDAsMTQuMzkyNDY4NXY4Mi41Nzc0Mzg0CgkJCQljMCw3LjkxNTg0NzgsNi40NzY1MzgyLDE0LjM5MjQ3MTMsMTQuMzkyMzgyNiwxNC4zOTI0NzEzaDEwNy4xOTQ1MTE0YzcuOTE1ODQwMSwwLDE0LjM5MjM4NzQtNi40NzY2MjM1LDE0LjM5MjM4NzQtMTQuMzkyNDcxMwoJCQkJVjE0LjM5MjQ2ODVDMTM1Ljk3OTI3ODYsNi40NzY2MjM1LDEyOS41MDI3MzEzLDAsMTIxLjU4Njg5MTIsMHogTTM0LjkwODA1ODIsOTcuMzk0MjEwOAoJCQkJYy0xMS41NzkzOTUzLDAtMjEuMDAwMDAxOS05LjQyMDU2MjctMjEuMDAwMDAxOS0yMVMyMy4zMjg2NjI5LDU1LjM5NDIwNywzNC45MDgwNTgyLDU1LjM5NDIwN3MyMSw5LjQyMDU2NjYsMjEsMjEuMDAwMDAzOAoJCQkJUzQ2LjQ4NzQ0OTYsOTcuMzk0MjEwOCwzNC45MDgwNTgyLDk3LjM5NDIxMDh6IE0xMDQuMzM4Mjc5Nyw5Ny4zOTQyMTA4CgkJCQljLTcuNzY2MTM2MiwwLTE0LjM2MzE1OTItNS4wODY1Nzg0LTE2LjY0NDE0MjItMTIuMTAxNzkxNGgtMjAuNDM2MjAzYy0zLjg2Mjk4NzUsMC02Ljk5NTIxNjQtMy4xMjkxNTA0LTctNi45OTE3OTg0CgkJCQlsLTAuMDA0NzgzNi00LjEwODA1NTFjMC0xMi43NjUwODcxLTEwLjM3ODMyMjYtMjMuMTQzNDA5Ny0yMy4xMzQ4NjQ4LTIzLjE0MzQwOTdIMjUuNjA4NjE3OGMtMy44NjU3MjI3LDAtNy0zLjEzMzkzNC03LTcKCQkJCXMzLjEzNDI3NzMtNyw3LTdoMi40OTg1MzUydi05LjMwNTA3NjZoLTIuNDk4NTM1MmMtMy44NjU3MjI3LDAtNy0zLjEzMzkzNTktNy03czMuMTM0Mjc3My03LDctN2gzOC4zNjczODU5CgkJCQljMy4yMzEzNDk5LDAsNi4wNDI5NjQ5LDIuMjEyMTA5Niw2LjgwMzgwNjMsNS4zNTMyMjE5bDYuMTkyMzM3LDI1LjU4MjgxMzNoMjYuNDE1MDg0OAoJCQkJYzUuMjQ1OTAzLDAsOS41MTM1NzI3LDQuMjY3Njc3Myw5LjUxMzU3MjcsOS41MTM1NzI3djEwLjQ0Njg5MThjNS4zMjg2MTMzLDMuMDAzMTEyOCw4LjkzNzQ3NzEsOC43MTMzMDI2LDguOTM3NDc3MSwxNS4yNTM2MzE2CgkJCQlDMTIxLjgzODI3OTcsODkuNTQzNzMxNywxMTMuOTg3ODkyMiw5Ny4zOTQyMTA4LDEwNC4zMzgyNzk3LDk3LjM5NDIxMDh6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM0NS45OTc2NTAxLDgwLjY0ODgxMTNoLTM3LjMwMDc4MTJ2LTguODU1MjkzM2wxMi41NTA3ODEyLTEyLjI5NTIyMzIKCQkJYzMuNTg1OTM3NS0zLjYzMjk0MjIsNS45Mjk2ODc1LTYuMTEzNTU1OSw3LjAzMTI1LTcuNDQxODQ4OHMxLjg2OTE0MDYtMi40NjkyNjUsMi4zMDI3MzQ0LTMuNDIyOTA4OAoJCQljMC40MzM1OTM4LTAuOTUzNjQ3NiwwLjY1MDM5MDYtMS45NTI3MDU0LDAuNjUwMzkwNi0yLjk5NzE3NzFjMC0xLjI5NDIzMTQtMC40MzM1OTM4LTIuMzE1OTk4MS0xLjMwMDc4MTItMy4wNjUyOTI0CgkJCWMtMC44NjcxODc1LTAuNzQ5MjkwNS0yLjA4NTkzNzUtMS4xMjM5Mzk1LTMuNjU2MjUtMS4xMjM5Mzk1Yy0xLjYxNzE4NzUsMC0zLjI1MTk1MzEsMC40NDg0NDA2LTQuOTA0Mjk2OSwxLjM0NTMyNTUKCQkJYy0xLjY1MjM0MzgsMC44OTY4ODExLTMuNTIxNDg0NCwyLjIxOTQ5NzctNS42MDc0MjE5LDMuOTY3ODQ5N2wtNy42Mjg5MDYyLTguNjUwOTM2MQoJCQljMi42NDg0Mzc1LTIuMjkzMjkzLDQuODc1LTMuOTMzNzkyMSw2LjY3OTY4NzUtNC45MjE0OTczczMuNzY3NTc4MS0xLjc0MjY3NTgsNS44ODg2NzE5LTIuMjY0OTA5NwoJCQljMi4xMjEwOTM4LTAuNTIyMjM1OSw0LjUwNTg1OTQtMC43ODMzNTE5LDcuMTU0Mjk2OS0wLjc4MzM1MTljMy4zMjgxMjUsMCw2LjI5ODgyODEsMC41Njc2NDYsOC45MTIxMDk0LDEuNzAyOTQKCQkJYzIuNjEzMjgxMiwxLjEzNTI5MjEsNC42NDA2MjUsMi43NTMwODYxLDYuMDgyMDMxMiw0Ljg1MzM3ODNzMi4xNjIxMDk0LDQuNDU2MDI4LDIuMTYyMTA5NCw3LjA2NzE5OTcKCQkJYzAsMS45NTI3MDU0LTAuMjUxOTUzMSwzLjc1NzgyMzktMC43NTU4NTk0LDUuNDE1MzUxOXMtMS4yODMyMDMxLDMuMjg2Njc0NS0yLjMzNzg5MDYsNC44ODc0MzU5CgkJCWMtMS4wNTQ2ODc1LDEuNjAwNzY1Mi0yLjQ1NTA3ODEsMy4yODY2NzQ1LTQuMjAxMTcxOSw1LjA1NzczMTZzLTUuNDY2Nzk2OSw1LjEzMTUyNjktMTEuMTYyMTA5NCwxMC4wODE0MDE4djAuMzQwNTkxNGgxOS40NDE0MDYyCgkJCVY4MC42NDg4MTEzeiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo="}}]);