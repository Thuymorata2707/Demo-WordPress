"use strict";(globalThis.webpackChunkomnipress=globalThis.webpackChunkomnipress||[]).push([[66],{969:(e,t,a)=>{a.d(t,{Z:()=>d});var o=a(143),p=a(333),r=a(307),s=a(736),n=a(193),l=a(583),i=a(155),c=a(352);const{isOmnipressPage:m}=_omnipress;function d({isPremium:e,content:t,className:a,labels:{beforeCopy:d,afterCopy:x,insert:y}}){const{close:u,insertContent:h}=(0,o.C)(),[b,g]=(0,r.useState)(!1),k=(0,p.useCopyToClipboard)(t,(()=>g(!0)));return(0,r.useEffect)((()=>{const e=setTimeout((()=>{b&&g(!1)}),1500);return()=>clearTimeout(e)}),[b]),e&&!t?React.createElement("button",{onClick:()=>window.open("https://omnipressteam.com/pricing","_blank"),type:"button",className:a||"op-btn-primary"},React.createElement(c.QhI,null),(0,s.__)("Buy Premium","omnipress")):React.createElement("button",{style:b?{backgroundColor:"#a8bc17"}:{},disabled:b,ref:m?k:void 0,type:"button",className:a||"op-btn-primary",onClick:()=>{m||(h(t),u())}},m?b?React.createElement(n.bzc,null):React.createElement(i.On2,null):React.createElement(l.aBF,null),m?b?x:d:y)}},450:(e,t,a)=>{a.d(t,{Z:()=>n});var o=a(864),p=a(307),r=a(736),s=a(750);const n=function({openFilter:e,setOpenFilter:t,total:a,categories:n,onClick:l}){const[i,c]=(0,p.useState)("");return React.createElement("div",{className:`filter-sidebar-wrap op-absolute lg:op-relative dark:op-bg-gray-800  op-z-10 op-bg-white ${e?" op-w-80 md:op-w-56":"op-hidden op-overflow-hidden"} op-p-small op-duration-200 op-rounded-lg op-shadow-2xl md:op-shadow-none`},React.createElement("div",{className:(e?"op-inline-flex":"op-hidden")+" op-gap-3 op-items-center"},React.createElement(o.Z,{text:(0,r.__)("Close filter","omnipress"),position:"top"},React.createElement("button",{onClick:()=>t(!e),className:" op-bg-primary hover:op-bg-primary/80 op-rounded-md op-p-[5px]"},React.createElement(s.P7O,{className:"op-text-white op-w-7 op-h-5"}))),React.createElement("h2",{className:`${!e&&"op-hidden"} op-duration-200 op-text-14 op-font-poppin op-font-medium dark:op-text-light-text`},(0,r.__)("Categories","omnipress"))),React.createElement("hr",{className:"op-my-xsmall op-border-gray-100 dark:op-border-dark-bg-color"}),React.createElement("div",{className:"op-flex op-flex-col op-gap-xxsmall"},React.createElement("div",{onClick:()=>{c(""),l(null)},className:"op-font-poppins op-text-14 op-cursor-pointer "},React.createElement("a",{className:(i?"":"op-text-primary dark:op-text-primary op-font-bold")+" op-inline-flex op-items-center op-justify-between op-gap-2 dark:op-text-light-text hover:op-text-primary dark:hover:op-text-primary focus:op-ring-0"},(0,r.__)("All","omnipress"),React.createElement("span",{className:" op-bg-secondary/5 op-cursor-pointer  op-text-secondary op-rounded-md op-py-[3px] op-px-[5px]"},a))),!!n&&Object.keys(n).map((e=>React.createElement("div",{key:e,onClick:()=>{c(e),l({...n[e],key:e})},className:"op-font-poppins op-text-14 op-cursor-pointer "},React.createElement("a",{className:(e===i?"op-text-primary dark:op-text-primary op-font-bold":"")+" op-inline-flex op-items-center op-justify-between op-gap-2 dark:op-text-light-text hover:op-text-primary dark:hover:op-text-primary focus:op-ring-0"},n[e].label,React.createElement("span",{className:" op-bg-secondary/5 op-cursor-pointer op-text-secondary op-rounded-md op-py-[3px] op-px-[5px]"},n[e].count)))))))}},702:(e,t,a)=>{a.d(t,{Z:()=>r});var o=a(307);let p={};const r=({gradient:e,height:t,width:a,className:r,src:s})=>{const n={background:e,height:t??"100%",width:a??"100%",filter:"blur(15px)"},[l,i]=(0,o.useState)(!!p?.[s]);return(0,o.useEffect)((()=>{p?.[s]||i(!1)}),[s]),React.createElement(React.Fragment,null,!l&&React.createElement("div",{className:"op-animate-pulse",style:n}),React.createElement("img",{style:l?{}:{position:"absolute",visibility:"hidden"},className:r,src:s,onLoad:()=>{i(!0),p={...p,[s]:!0}},loading:"lazy"}))}},29:(e,t,a)=>{function o({children:e,isLoading:t,className:a,height:o,width:p}){return React.createElement(React.Fragment,null,t?React.createElement(React.Fragment,null,o||p?React.createElement("div",{className:`skeleton-wrap op-rounded-[5px] op-bg-slate-300 dark:op-bg-slate-600 op-animate-pulse ${a}`},React.createElement("div",{style:{height:o,width:p}})):React.createElement("div",{className:`skeleton-wrap op-rounded-[5px] op-bg-slate-300 dark:op-bg-slate-600 op-animate-pulse ${a}`})):React.createElement(React.Fragment,null,e))}function p({total:e,isLoading:t,children:a,height:p,width:r,className:s}){return t?[...Array(e||6).keys()].map((e=>React.createElement(o,{className:s,key:e,height:p,width:r,isLoading:!0}))):a}a.d(t,{N:()=>p,O:()=>o})},66:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var o=a(864),p=a(72),r=a(969),s=a(450),n=a(702),l=a(29),i=a(989),c=a.n(i),m=a(609),d=a(307),x=a(736),y=a(193),u=a(750),h=a(434),b=a(352);const g=JSON.parse('{"nm":"CirclePop","ddd":0,"h":120,"w":120,"meta":{"a":"Sabbir","k":"teal","d":"Circle pop","g":"LottieFiles AE 0.1.21","tc":"#008080"},"layers":[{"ty":4,"nm":"circle 2","sr":1,"st":0,"op":750,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-264,-41,0],"ix":1},"s":{"a":0,"k":[80,80,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[60,60,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Ellipse 1","ix":1,"cix":2,"np":3,"it":[{"ty":"el","bm":0,"hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"s":{"a":0,"k":[67,67],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.7647,0,0],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-264,-40.75],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":1},{"ty":4,"nm":"circle","sr":1,"st":0,"op":750,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-264,-41,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[80,80,100],"t":0},{"h":1,"s":[160,160,100],"t":25},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[80,80,100],"t":26},{"h":1,"s":[160,160,100],"t":50},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[80,80,100],"t":51},{"h":1,"s":[160,160,100],"t":75},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[80,80,100],"t":76},{"h":1,"s":[160,160,100],"t":100},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[80,80,100],"t":101},{"h":1,"s":[160,160,100],"t":125},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[80,80,100],"t":126},{"h":1,"s":[160,160,100],"t":150},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[80,80,100],"t":151},{"h":1,"s":[160,160,100],"t":175},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[80,80,100],"t":176},{"h":1,"s":[160,160,100],"t":200},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[80,80,100],"t":201},{"h":1,"s":[160,160,100],"t":225},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[80,80,100],"t":226},{"h":1,"s":[160,160,100],"t":250},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[80,80,100],"t":251},{"h":1,"s":[160,160,100],"t":275},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[80,80,100],"t":276},{"h":1,"s":[160,160,100],"t":300},{"s":[80,80,100],"t":301}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[60,60,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[60],"t":0},{"h":1,"s":[0],"t":25},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[60],"t":26},{"h":1,"s":[0],"t":50},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[60],"t":51},{"h":1,"s":[0],"t":75},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[60],"t":76},{"h":1,"s":[0],"t":100},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[60],"t":101},{"h":1,"s":[0],"t":125},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[60],"t":126},{"h":1,"s":[0],"t":150},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[60],"t":151},{"h":1,"s":[0],"t":175},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[60],"t":176},{"h":1,"s":[0],"t":200},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[60],"t":201},{"h":1,"s":[0],"t":225},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[60],"t":226},{"s":[0],"t":250}],"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Ellipse 1","ix":1,"cix":2,"np":3,"it":[{"ty":"el","bm":0,"hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"s":{"a":0,"k":[67,67],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.7608,0,0],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-264,-40.75],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":2}],"v":"5.5.7","fr":25,"op":26,"ip":0,"assets":[]}');var k=a(260),E=a.n(k);function f({isFavorite:e,patternKey:t}){const[a,p]=(0,d.useState)(e||!1);return React.createElement(o.Z,{text:a?(0,x.__)("Remove from favorites","omnipress"):(0,x.__)("Add to favorites","omnipress"),position:"right"},React.createElement("button",{type:"button",onClick:()=>{p(!a),c()({method:a?"DELETE":"POST",path:"/omnipress/v1/patterns/favorites",data:{key:t}})}},a?React.createElement(y.M_L,{className:" op-text-red-600 op-w-5 op-h-5"}):React.createElement(y.lo,{className:"op-text-white op-w-5 op-h-5"})))}function R(){return React.createElement(React.Fragment,null,React.createElement(E(),{className:"op-w-[25px] op-h-[25px]",animationData:g,loop:!0}))}function v({response:e,selectedPattern:t,closeModal:a}){return t?.thumbnails?React.createElement(m.Modal,{style:{padding:0},onRequestClose:a,__experimentalHideHeader:!0,overlayClassName:"op-model-overlay",className:"op-modal op-relative op-bg-gray-200 dark:op-bg-gray-600 op-w-[90vw] md:op-w-[80vw]"},React.createElement("div",{className:"pattern-modal-header op-absolute op-bg-white dark:op-bg-gray-800 op-flex op-flex-wrap op-items-top md:op-items-center op-justify-between op-w-full md:op-h-[60px] op-border-b op-border-slate-900/10 dark:op-border-slate-50/[0.06]"},React.createElement("div",{className:"op-flex op-items-center op-justify-start op-flex-wrap op-gap-xxsmall op-px-xsmall"},React.createElement(r.Z,{content:t.content,isPremium:"pro"===t.type,labels:{beforeCopy:(0,x.__)("Copy Pattern","omnipres"),afterCopy:(0,x.__)("Pattern Copied","omnipres"),insert:(0,x.__)("Insert Pattern","omnipres")}}),t.dynamic&&React.createElement("p",{className:"op-hidden md:op-flex op-items-center op-flex-wrap op-font-poppins op-text-gray-900 dark:op-text-gray-50"}," ",React.createElement(R,null)," ",React.createElement("strong",null,(0,x.__)("Note:","omnipress"))," ",(0,x.__)("This pattern uses dynamic blocks and contents, so the design may vary based on your contents","omnipress"))),React.createElement("button",{onClick:a,className:"op-min-h-[20px] md:op-min-h-[60px] op-bg-gray-100 hover:op-bg-red-600 dark:op-bg-gray-700 dark:hover:op-bg-red-600 op-p-xxsmall md:op-p-xsmall md:op-px-xsmall op-group op-duration-300"},React.createElement(y.oHP,{className:"op-w-4 op-h-4 md:op-w-5 md:op-h-5 group-hover:op-rotate-180 group-hover:op-text-white dark:op-text-light-text op-duration-300"}))),React.createElement("div",{className:"modal-content op-p-small op-pt-xlarge"},React.createElement(n.Z,{height:"40em",width:"35em",src:t.thumbnails.original,gradient:t.gradient,className:"h-auto op-object-contain op-mx-auto op-my-0"}))):null}const N=function(){const[e,t]=(0,d.useState)({sync:!1,loading:!0}),[a,i]=(0,d.useState)({}),[m,g]=(0,d.useState)([]),[k,E]=(0,d.useState)({}),[R,N]=(0,d.useState)(!1),[w,_]=(0,d.useState)(!1),C=(0,d.useRef)(),P=async(a,o)=>{const p=await c()({path:a?"/omnipress/v1/patterns?sync=true":o?`/omnipress/v1/patterns?filter=${o}`:"/omnipress/v1/patterns"});return i(p),g(p?.patterns||[]),t(a?{...e,sync:!1}:{...e,loading:!1}),p};return(0,d.useEffect)((()=>{t({...e,loading:!0}),P()}),[]),React.createElement(p.Z,{openFilter:R},React.createElement(s.Z,{total:a?.total,openFilter:R,setOpenFilter:N,categories:a?.categories,onClick:e=>{_(!1),P(!1,e?.key||null)}}),React.createElement("button",{className:"op-absolute",ref:C}),React.createElement("div",{className:"pattern-content-wrap op-flex-1 op-bg-white dark:op-bg-gray-800 op-h-full op-rounded-lg op-p-small op-overflow-hidden "},React.createElement("div",{className:"patterns-content-header op-flex op-flex-wrap op-items-center op-pb-small op-justify-between"},React.createElement("div",{className:"op-relative"},React.createElement("div",{className:"op-flex op-items-center op-gap-xxsmall"},!1===R?React.createElement(o.Z,{text:(0,x.__)("Filter by categories"),position:"top"},React.createElement("button",{onClick:()=>N(!R),className:" op-bg-primary hover:op-bg-primary/80 op-rounded-md op-p-[5px]"},React.createElement(u.P7O,{className:"op-text-white op-w-7 op-h-5"}))):React.createElement(o.Z,{text:(0,x.__)("Close filter"),position:"top"},React.createElement("button",{onClick:()=>N(!R),className:" op-bg-primary/10 op-text-black dark:op-bg-gray-900 hover:op-text-primary dark:op-text-light-text dark:hover:op-bg-primary op-flex op-rounded-md op-p-[5px] op-duration-200"},React.createElement(y.kyg,{className:"op-w-7 op-h-5"}))),React.createElement(o.Z,{text:e.sync?(0,x.__)("Syncing","omnipress"):(0,x.__)("Sync library","omnipress"),position:"top"},React.createElement("button",{type:"button",disabled:!!e.sync,onClick:()=>{_(!1),t({...e,sync:!0}),P(!0)},className:"op-bg-primary/10 op-text-black dark:op-bg-gray-900 hover:op-text-primary dark:op-text-light-text dark:hover:op-bg-primary op-flex op-rounded-md op-p-[5px] op-duration-200"},React.createElement(y.IDO,{className:e.sync?"op-w-5 op-h-5 op-animate-spin":"op-w-5 op-h-5"}))),React.createElement("div",{className:"pattern-count-wrap"},React.createElement("h2",{className:"op-font-poppins op-text-18 op-font-semibold dark:op-text-light-text"},w?(0,x.__)("Favorites","omnipress"):(0,x.__)("Patterns","omnipress"))))),React.createElement("div",{className:"my-favorite-btn-wrap"},React.createElement("button",{type:"button",className:"op-bg-primary/10 dark:op-bg-gray-900 op-flex op-items-center op-gap-[5px] hover:op-text-primary dark:op-text-light-text dark:hover:op-bg-primary op-rounded-[5px] op-px-xxsmall op-py-[5px] op-duration-200",onClick:()=>{P().then((e=>{const t=w?e.patterns:Object.values(e.favorites);g(t||[]),_(!w)}))}},w?React.createElement(u.KF7,{size:18}):React.createElement(h.Yqy,{size:18}),React.createElement("span",{className:"op-font-poppins op-font-normal"},w?(0,x.__)("View Patterns","omnipress"):(0,x.__)("My Favorites","omnipress"))))),React.createElement("div",{className:"op-h-[calc(100%-50px)] op-pr-[10px] op-overflow-y-auto op-scrollbar-thin op-scrollbar-thumb-rounded-full op-scrollbar-track-rounded-full op-scrollbar-thumb-gray-500 op-scrollbar-track-gray-300"},React.createElement("div",{className:"pattern-grid-wrap op-columns-1 md:op-columns-2 lg:op-columns-3 op-gap-8"},React.createElement(l.N,{className:"op-mb-10",isLoading:e.loading||e.sync,height:"20em",width:"10px"},m.length?m.map((e=>React.createElement("div",{key:e.key,className:"pattern-frame-wrap dark:op-bg-gray-600 op-group op-relative op-bg-slate-100 op-min-h-[60px] op-overflow-hidden op-drop-shadow-md op-mb-small"},"pro"===e.type&&React.createElement("div",{className:"op-absolute op-top-xsmall op-right-xsmall op-z-10"},React.createElement(o.Z,{text:(0,x.__)("Premium","omnipress")},React.createElement("button",{type:"button"},React.createElement(b.QhI,{size:30,className:"op-bg-black/80 op-text-[#fca120] op-rounded-[5px] op-py-[5px] op-px-[5px]"})))),React.createElement(n.Z,{src:e.thumbnails.low,height:"20em",width:"35em",gradient:e.gradient,className:"h-auto op-object-contain op-mx-auto op-my-0"}),React.createElement("div",{className:"op-absolute op-bg-dark-bg-color/70 -op-bottom-14 group-hover:op-bottom-0 op-left-0 op-right-0 op-flex op-justify-between op-items-center op-p-xxsmall op-duration-300 op-z-10"},React.createElement(f,{isFavorite:!!a?.favorites?.[e.key],patternKey:e.key}),React.createElement("div",{className:"op-flex op-justify-end op-gap-3"},e.dynamic&&React.createElement(o.Z,{text:(0,x.__)("This pattern uses dynamic blocks","omnipress")},React.createElement("button",{type:"button"},React.createElement(h.MtG,{className:"op-text-white op-w-5 op-h-5"}))),React.createElement(r.Z,{content:e.content,isPremium:"pro"===e.type,labels:{beforeCopy:(0,x.__)("Copy Pattern","omnipres"),afterCopy:(0,x.__)("Pattern Copied","omnipres"),insert:(0,x.__)("Insert Pattern","omnipres")}}),React.createElement("button",{onClick:()=>E(e),type:"button",className:"op-btn-secondary"},React.createElement(u.xt8,null)," ",(0,x.__)("Preview","omnipress"))))))):React.createElement("h2",{className:"op-font-poppins op-text-18 op-font-semibold dark:op-text-light-text"},(0,x.__)("No items found","omnipress")))))),React.createElement(v,{response:a,selectedPattern:k,closeModal:()=>{C.current.focus(),E({})}}))}}}]);