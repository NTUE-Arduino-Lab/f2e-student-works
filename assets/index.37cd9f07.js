var O=Object.defineProperty,T=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var S=(t,s,l)=>s in t?O(t,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[s]=l,C=(t,s)=>{for(var l in s||(s={}))V.call(s,l)&&S(t,l,s[l]);if(B)for(var l of B(s))X.call(s,l)&&S(t,l,s[l]);return t},b=(t,s)=>T(t,j(s));import{a as Z,j as i,b as e,L as $,r as _,F as G,N as z,u as M,S as P,c as W,d as H,B as I,R as K,e as x,f as E,g as q,h as J}from"./vendor.3bad1083.js";const Q=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function l(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=l(n);fetch(n.href,o)}};Q();const Y="https://script.google.com/macros/s/AKfycbzUvJmNkD6ho5dgCKL5gTLE9pcZc8wXhuxsAE5Uy17OxOBSxoZuPDC2tgdcShzRFr1g7w/exec",ee=async()=>{try{return(await Z.get(`${Y}`)).data}catch(t){console.log(t)}},te="_home_1dhmw_1",se="_home_img_1dhmw_11",le="_homeimg_text_1dhmw_59",ne="_title_1dhmw_68",ie="_special_text_1dhmw_86",ae="_navigation_1dhmw_96",re="_opacity_1dhmw_1";var p={home:te,home_img:se,homeimg_text:le,title:ne,special_text:ie,navigation:ae,opacity:re};function ce(){return i("div",{className:p.home,children:[e("div",{className:p.home_img}),e("div",{children:e("div",{className:p.homeimg_text})}),e("div",{children:i("h1",{className:p.title,children:[e("span",{children:"CLASS OF / "}),e("span",{className:p.special_text,children:[..."Websites"].map((t,s)=>e("span",{children:t},`text-${s}-${t}`))}),e("span",{className:p.special_text,children:[..."Design"].map((t,s)=>e("span",{children:t},`text-${s}-${t}`))}),e("span",{className:p.special_text,children:[..."and"].map((t,s)=>e("span",{children:t},`text-${s}-${t}`))}),e("span",{className:p.special_text,children:[..."Development"].map((t,s)=>e("span",{children:t},`text-${s}-${t}`))})]})}),e("div",{children:e("nav",{className:p.navigation,children:i("ul",{children:[e("li",{children:i($,{className:p.link,to:"/ntue",children:[e("span",{children:"NTUE /"}),"\u570B\u5317\u6559\u5927"]})}),e("li",{children:i($,{className:p.link,to:"/ntut",children:[e("span",{children:"NTUT /"}),"\u5317\u79D1\u5927"]})})]})})})]})}const oe="_workitem_11uf8_1",_e="_workitem_ntue_11uf8_9",ue="_workitem_ntut_11uf8_13",de="_link_website_11uf8_17",me="_mask_11uf8_30",pe="_skilllist_11uf8_67",he="_linklist_11uf8_89",ge="_line_11uf8_127",ve="_namelist_11uf8_142",ke="_categroy_11uf8_162";var v={workitem:oe,workitem_ntue:_e,workitem_ntut:ue,link_website:de,mask:me,skilllist:pe,linklist:he,line:ge,namelist:ve,categroy:ke};function fe(t){return _.exports.createElement("svg",C({width:30,height:30,viewBox:"0 0 30 30",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},t),_.exports.createElement("path",{d:"M1.4375 14.7812C1.4375 7.19609 7.23984 1.4375 14.825 1.4375C22.4102 1.4375 28.5625 7.19609 28.5625 14.7812C28.5625 20.8461 24.8547 26.0359 19.3859 27.8516C18.6914 27.9773 18.4398 27.5453 18.4398 27.1898C18.4398 26.7414 18.4563 24.4609 18.4563 22.618C18.4563 21.3328 18.0297 20.5125 17.5266 20.0805C20.5836 19.7359 23.8047 19.3148 23.8047 14.0375C23.8047 12.5391 23.2687 11.7844 22.3937 10.8164C22.5359 10.4609 23.0008 9.00078 22.2516 7.10313C21.1086 6.74219 18.4781 8.57969 18.4781 8.57969C17.3844 8.27344 16.2086 8.11484 15.0437 8.11484C13.8789 8.11484 12.7031 8.27344 11.6094 8.57969C11.6094 8.57969 8.97891 6.74766 7.83594 7.10313C7.08672 8.99531 7.55156 10.4609 7.69375 10.8164C6.81875 11.7789 6.40312 12.5336 6.40312 14.0375C6.40312 19.2984 9.4875 19.7414 12.5445 20.0805C12.1508 20.4414 11.7953 21.0484 11.6695 21.9234C10.8875 22.2844 8.88047 22.8914 7.68281 20.7805C6.93359 19.4789 5.57188 19.3695 5.57188 19.3695C4.23203 19.3531 5.48438 20.2117 5.48438 20.2117C6.38125 20.6219 7.00469 22.2133 7.00469 22.2133C7.80859 24.6633 11.6367 23.843 11.6367 23.843C11.6367 24.9914 11.6531 26.8617 11.6531 27.2008C11.6531 27.5562 11.407 27.9883 10.707 27.8625C5.25469 26.0359 1.4375 20.8461 1.4375 14.7812Z",fill:"currentColor"}))}function Ce(t){return _.exports.createElement("svg",C({width:30,height:30,viewBox:"0 0 30 30",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},t),_.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 4C5 2.89543 5.89543 2 7 2H18.1716C18.702 2 19.2107 2.21071 19.5858 2.58579L24.4142 7.41421C24.7893 7.78929 25 8.29799 25 8.82843V26C25 27.1046 24.1046 28 23 28H7C5.89543 28 5 27.1046 5 26V4ZM13.9278 11.3556C14.3001 11.1694 14.8272 11 15.5 11C17.2259 11 18.4011 11.7415 19.1115 12.7282C19.7852 13.6639 20 14.7566 20 15.5C20 16.2434 19.7852 17.3361 19.1115 18.2718C18.4011 19.2585 17.2259 20 15.5 20C14.4804 20 13.6529 19.7412 13 19.3259V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V15.5C11 14.9477 11.4477 14.5 12 14.5C12.5523 14.5 13 14.9477 13 15.5C13 15.9233 13.1352 16.5805 13.5115 17.1032C13.8511 17.5749 14.4259 18 15.5 18C16.5741 18 17.1489 17.5749 17.4885 17.1032C17.8648 16.5805 18 15.9233 18 15.5C18 15.0767 17.8648 14.4195 17.4885 13.8968C17.1489 13.4251 16.5741 13 15.5 13C15.1728 13 14.9499 13.0806 14.8222 13.1444C14.7567 13.1772 14.7138 13.2068 14.6938 13.2219L14.6845 13.229C14.2925 13.5975 13.676 13.5902 13.2929 13.2071C12.9024 12.8166 12.9024 12.1834 13.2929 11.7929L14 12.5C13.2929 11.7929 13.2932 11.7925 13.2936 11.7922L13.2943 11.7915L13.2958 11.79L13.2988 11.787L13.3057 11.7803L13.3219 11.7648C13.3339 11.7536 13.3482 11.7405 13.3649 11.7259C13.3983 11.6968 13.4412 11.6613 13.4937 11.6219C13.5987 11.5432 13.7433 11.4478 13.9278 11.3556ZM18 4L23 9H19C18.4477 9 18 8.55228 18 8V4Z",fill:"currentColor"}))}var we="/f2e-student-works/assets/404.d789e5e2.png";function xe({data:t,school:s,categroy:l}){const a=l.split("-");return i("div",{className:`${v.workitem} ${s==="ntue"?v.workitem_ntue:v.workitem_ntut}`,children:[i("a",{href:t.websiteUrl,className:v.link_website,target:"_blank",children:[e("div",{className:v.mask}),t.imgUrl!==void 0&&(t.imgUrl.slice(-4)===".png"||t.imgUrl.slice(-4)===".jpg"||t.imgUrl.slice(-5)===".jpeg")?e("img",{src:t.imgUrl,alt:""}):e("img",{src:we,alt:""})]}),e("h3",{children:t.workName}),e("div",{className:v.skilllist,children:t.skill&&t.skill.length>0?t.skill.map(n=>n!==""?e("span",{children:n},`skill-${n}`):null):null}),i("div",{className:v.linklist,children:[e("a",{href:t.pptUrl,target:"_blank",children:e(Ce,{})}),e("a",{href:t.githubUrl,target:"_blank",children:e(fe,{})})]}),e("div",{className:v.line}),i("div",{className:v.namelist,children:[e("span",{children:"BY"}),e("span",{children:t.name.join(" ")})]}),i("div",{className:v.categroy,children:[a[0],"\u5E74\u30FB",a[1]==="1"?"\u671F\u4E2D\u5C08\u984C":"\u671F\u672B\u5C08\u984C"]})]})}const ye="_works_x5stz_1",be="_works_ntue_x5stz_7",Ne="_opacity_x5stz_1",Ae="_works_ntut_x5stz_13",$e="_content_wrapper_x5stz_19",Ee="_title_wrapper_x5stz_52",De="_title_bg_x5stz_59",Le="_breadcrumb_x5stz_73",Be="_search_bar_x5stz_107",Se="_categroy_x5stz_119",ze="_section_x5stz_160",Re="_workslist_x5stz_164",Ue="_error_message_x5stz_173",Fe="_pagelist_x5stz_181",Oe="_a_active_x5stz_202",Te="_a_disable_x5stz_250",je="_bg_black_to_white_x5stz_1";var u={works:ye,works_ntue:be,opacity:Ne,works_ntut:Ae,content_wrapper:$e,title_wrapper:Ee,title_bg:De,breadcrumb:Le,search_bar:Be,categroy:Se,section:ze,workslist:Re,error_message:Ue,pagelist:Fe,a_active:Oe,a_disable:Te,bg_black_to_white:je};function Ve({works:t,school:s,selected_categroy:l}){const[a,n]=_.exports.useState(1);_.exports.useEffect(()=>{n(1)},[t]);const o=()=>{let r=[];for(let c=1;c<=t.length/12+1;c++)r.push(e("a",{className:`${a===c?u.a_active:""}`,onClick:()=>a===c?null:d(c),children:c},`page-${c}`));return r},d=r=>{r<=parseInt(t.length/12)+1&&r>=1&&(n(r),window.scrollTo(0,0))};return e("section",{className:u.section,children:t.length>0?i(G,{children:[e("div",{className:u.workslist,children:t.slice(0+(a-1)*12,12+(a-1)*12).map((r,c)=>e(xe,{data:r,school:s,categroy:l},`work-${c}`))}),i("div",{className:u.pagelist,children:[o(),e("a",{className:`${a>=t.length/12?u.a_disable:""}`,onClick:a<t.length/12?()=>d(a+1):null,children:"Next"})]})]}):e("div",{className:u.error_message,children:"\u67E5\u7121\u4F5C\u54C1\u8CC7\u6599"})})}const Xe="_nav_klql7_1",Ze="_a_active_klql7_48",Ge="_a_active_box_klql7_52";var N={nav:Xe,a_active:Ze,a_active_box:Ge};function Me({school:t}){return e("nav",{className:N.nav,children:i("ul",{children:[e("div",{className:N.a_active_box,style:t=="ntue"?{right:"3px"}:{left:"3px"}}),e("li",{children:e(z,{className:({isActive:s})=>s?N.a_active:"",to:"/ntut",children:[..."NTUT"].map((s,l)=>e("span",{children:s},`text-${l}-${s}`))})}),e("li",{children:e(z,{className:({isActive:s})=>s?N.a_active:"",to:"/ntue",children:[..."NTUE"].map((s,l)=>e("span",{children:s},`text-${l}-${s}`))})})]})})}var Pe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGXSURBVHgB3VVLTgJBEH2giQv0FCa4VDmB3sDgXs6gwA2AK/hJ2LmScAVd4k5x5yfKmq2/lcF66TcyGXqGBhIXvORl0lXV/aamumqAZUEuMK5k3DMWjQXjp/HJeGO8w4I4ND4YR+KXcahnZOsby5gDG8auDnkzVuGyiDLPaV2Vn3Ed4zoCQYFb44+xYVybEk9/U/G9UKGuNhxhNlS0rzMtkDVg6g3Mh6b2Z9aIRX7F5CeieD5hy8seB/cN4C6DFyW9RdUjQHs7JpTXeoRJoZrsOz6REzmLmHzjdkxoNbFOZrgl37FP5Mz4DX+DxoWeMwSiWJ5z6vHhEq7R0rBifJTAC1xGaRjqvD/VCB9wPZKWyQXcp6TApvEc6ZnwnHeP739qsitnLWGf9XbVZd9GCni/OYsW7ZN7ZKCst2hiPrS0/2BaIGcPZ1AFsyGaXVchwZyiPW1gRiFTuIXxFC4gEBRiRkx9AHcZeGvihee6Lv9IGQQLxMEa9TH+C7KTh3pGNhY5swah/3gOu324HmKWbFz+46+RMXGXD7/nZnchubAGpwAAAABJRU5ErkJggg==";const We="_filter_1tlor_1",He="_filter_wrapper_1tlor_13",Ie="_mask_1tlor_23",Ke="_container_1tlor_30",qe="_btn_cancel_1tlor_37",Je="_skilllist_1tlor_44",Qe="_title_1tlor_53",Ye="_line_1tlor_61",et="_btn_skill_active_1tlor_87",tt="_btnlist_1tlor_93";var h={filter:We,filter_wrapper:He,mask:Ie,container:Ke,btn_cancel:qe,skilllist:Je,title:Qe,line:Ye,btn_skill_active:et,btnlist:tt};function st({filterData:t,filterWorks:s,setShowFilter:l}){const[a,n]=_.exports.useState(t),o=r=>{let c=[...a];c[r].selected=!c[r].selected,n(c)},d=()=>{let r=[...a];r.forEach(c=>{c.selected=!1}),n(r)};return i("div",{className:h.filter_wrapper,children:[e("div",{className:h.mask,onClick:()=>l(!1)}),i("div",{className:h.filter,children:[e("a",{className:h.btn_cancel,onClick:()=>l(!1),children:e("img",{src:Pe,alt:""})}),i("div",{className:h.container,children:[e("div",{className:h.title,children:"\u9078\u64C7\u6A19\u7C64"}),e("div",{className:h.line}),e("div",{className:h.skilllist,children:a!==void 0&&a.length>0?a.map((r,c)=>e("a",{className:`${r.selected?h.btn_skill_active:""}`,onClick:w=>{w.target.className=`${r.selected?"":h.btn_skill_active}`,o(c)},children:r.name},`filter-${c}`)):null}),i("div",{className:h.btnlist,children:[e("a",{onClick:d,children:"\u6E05\u9664"}),e("a",{onClick:()=>{s(a),l(!1)},children:"\u78BA\u8A8D"})]})]})," "]})]})}const lt={control:t=>b(C({},t),{cursor:"pointer",width:"120px",padding:"0",margin:"0",opacity:"0"}),option:(t,{isFocused:s})=>b(C({},t),{backgroundColor:s?"#6768AB":void 0,color:s?"white":"#202020",textAlign:"center",letterSpacing:"2.5px",border:s?"0.5px solid black":void 0,cursor:"pointer",height:"36px",display:"flex",alignItems:"center",justifyContent:"center"}),menu:t=>b(C({},t),{borderRadius:"0"}),menuList:t=>b(C({},t),{padding:"0"})};function nt({options:t,school:s}){const l=M();return e(P,{options:t,styles:lt,onChange:n=>{l(`/${s}/${n.value}`)}})}function R({data:t,school:s}){const l=W();H();const[a,n]=_.exports.useState([]),[o,d]=_.exports.useState([]),[r,c]=_.exports.useState(!1),[w,L]=_.exports.useState([]);_.exports.useEffect(()=>{U()},[t,l.categroy]);const U=()=>{let k=[],y=[],g=[];t!==void 0&&(k=Object.keys(t).map(m=>Object.assign({},{label:`${m.split("-")[0]}${m.split("-")[1]==="1"?"\u671F\u4E2D":"\u671F\u672B"}`,value:m})),t[`${l.categroy}`]!==void 0&&(t[`${l.categroy}`].forEach(m=>{m.skill!=null&&m.skill.forEach(f=>{!g.some(A=>A.name===f)&&f!==""&&g.push({name:f,selected:!1})})}),g.sort((m,f)=>m.name.localeCompare(f.name)),y=t[`${l.categroy}`])),n(k),L(g),d(y),c(!1)},F=k=>{L(k);let y=t[`${l.categroy}`],g=[];k.every(m=>!m.selected)?g=y:k.forEach(m=>{m.selected&&(g=g.concat(y.filter(f=>f.skill.some(A=>A===m.name)&&!g.includes(f))))}),d(g)};return i("div",{className:`${u.works} ${s==="ntue"?u.works_ntue:u.works_ntut}`,children:[r?e(st,{filterData:w,filterWorks:F,setShowFilter:c}):null,i("div",{className:u.content_wrapper,children:[e(Me,{school:s}),i("header",{children:[i("ul",{className:u.breadcrumb,children:[e("li",{children:e($,{to:"/",children:"\u9996\u9801"})}),e("li",{children:">"}),e("li",{children:s==="ntue"?"\u570B\u5317\u6559":"\u5317\u79D1\u5927"})]}),i("div",{className:u.title_wrapper,children:[e("h1",{children:s==="ntue"?"NTUEDTD":"NTUTIXD"}),e("div",{className:u.title_bg})]}),i("ul",{className:u.search_bar,children:[e("li",{children:i("label",{className:u.categroy,children:[e("span",{children:"\u5206\u985E"}),t!==void 0?e(nt,{options:a,school:s}):null]})}),e("li",{children:e("a",{className:`${w.some(k=>k.selected)?u.a_active:""}`,style:t!==void 0?t.hasOwnProperty(l.categroy)&&w.length>0?null:{color:"rgba(119, 119, 119, 0.533)"}:null,onClick:()=>t!==void 0&&t.hasOwnProperty(l.categroy)&&w.length>0?c(!0):null,children:"\u9032\u968E\u641C\u5C0B"})})]})]}),e(Ve,{works:o,school:s,selected_categroy:l.categroy})]})]})}const it="_mask_2cs6t_1",at="_loading_wrapper_2cs6t_9",rt="_app_2cs6t_18";var D={mask:it,loading_wrapper:at,app:rt};function ct(){const[t,s]=_.exports.useState([]),[l,a]=_.exports.useState(!0),[n,o]=_.exports.useState(!1);_.exports.useEffect(()=>{d()},[]);const d=async()=>{const r=await ee();r!==void 0&&(s(r),o(!0),setTimeout(()=>{a(!1)},2e3))};return i("div",{className:D.app,children:[l?i("div",{className:D.loading_wrapper,children:[e("div",{className:D.mask,style:{opacity:n?"0":"1"}}),e("lottie-player",{autoplay:!0,loop:!0,mode:"normal",src:"https://assets8.lottiefiles.com/packages/lf20_1whhjts9.json",style:{width:"320px",transition:"all 0.2s",opacity:n?"0":"1"}})]}):null,e(I,{basename:"/f2e-student-works",children:i(K,{children:[e(x,{path:"/",element:e(ce,{})}),e(x,{path:"*",element:e(E,{replace:!0,to:"/"})}),t.ntue!==void 0?e(x,{path:"/ntue",element:e(E,{replace:!0,to:`/ntue/${Object.keys(t.ntue)[0]}`})}):null,e(x,{path:"/ntue/:categroy",element:e(R,{data:t.ntue,school:"ntue"})}),t.ntut!==void 0?e(x,{path:"/ntut",element:e(E,{replace:!0,to:`/ntut/${Object.keys(t.ntut)[0]}`})}):null,e(x,{path:"/ntut/:categroy",element:e(R,{data:t.ntut,school:"ntut"})})]})})]})}q.render(e(J.StrictMode,{children:e(ct,{})}),document.getElementById("root"));
