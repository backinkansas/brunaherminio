import{r as s,j as n}from"./jsx-runtime-56DGgGmo.js";import{u as y,w as S,x as g,y as k,_ as x,O as j,M as b,L as p,S as _}from"./components-ULJOhd3c.js";/**
 * @remix-run/react v2.9.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let u="positions";function M({getKey:e,...r}){let{isSpaMode:o}=y(),t=S(),c=g();k({getKey:e,storageKey:u});let m=s.useMemo(()=>{if(!e)return null;let a=e(t,c);return a!==t.key?a:null},[]);if(o)return null;let v=((a,h)=>{if(!window.history.state||!window.history.state.key){let i=Math.random().toString(32).slice(2);window.history.replaceState({key:i},"")}try{let l=JSON.parse(sessionStorage.getItem(a)||"{}")[h||window.history.state.key];typeof l=="number"&&window.scrollTo(0,l)}catch(i){console.error(i),sessionStorage.removeItem(a)}}).toString();return s.createElement("script",x({},r,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${v})(${JSON.stringify(u)}, ${JSON.stringify(m)})`}}))}var R="@vercel/analytics",E="1.3.1",A=()=>{window.va||(window.va=function(...r){(window.vaq=window.vaq||[]).push(r)})};function f(){return typeof window<"u"}function w(){try{const e="production"}catch{}return"production"}function L(e="auto"){if(e==="auto"){window.vam=w();return}window.vam=e}function T(){return(f()?window.vam:w())||"production"}function d(){return T()==="development"}var $="https://va.vercel-scripts.com/v1/script.debug.js",O="/_vercel/insights/script.js";function I(e={debug:!0}){var r;if(!f())return;L(e.mode),A(),e.beforeSend&&((r=window.va)==null||r.call(window,"beforeSend",e.beforeSend));const o=e.scriptSrc||(d()?$:O);if(document.head.querySelector(`script[src*="${o}"]`))return;const t=document.createElement("script");t.src=o,t.defer=!0,t.dataset.sdkn=R+(e.framework?`/${e.framework}`:""),t.dataset.sdkv=E,e.disableAutoTrack&&(t.dataset.disableAutoTrack="1"),e.endpoint&&(t.dataset.endpoint=e.endpoint),e.dsn&&(t.dataset.dsn=e.dsn),t.onerror=()=>{const c=d()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${o}. ${c}`)},d()&&e.debug===!1&&(t.dataset.debug="false"),document.head.appendChild(t)}function q({route:e,path:r}){var o;(o=window.va)==null||o.call(window,"pageview",{route:e,path:r})}function C(e){return s.useEffect(()=>{I({framework:e.framework||"react",...e.route!==void 0&&{disableAutoTrack:!0},...e})},[]),s.useEffect(()=>{e.route&&e.path&&q({route:e.route,path:e.path})},[e.route,e.path]),null}const N="/assets/root-QhpNsz5j.css";function J({children:e}){return n.jsxs("html",{lang:"en",children:[n.jsxs("head",{children:[n.jsx("meta",{charSet:"utf-8"}),n.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),n.jsx(b,{}),n.jsx(p,{})]}),n.jsxs("body",{children:[e,n.jsx(M,{}),n.jsx(_,{}),n.jsx(C,{})]})]})}function W(){return n.jsx(j,{})}const B=()=>[{rel:"stylesheet",href:N}];export{J as Layout,W as default,B as links};