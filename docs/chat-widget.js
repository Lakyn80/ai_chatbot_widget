(function(r,l){typeof exports=="object"&&typeof module<"u"?l(require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["react","react-dom"],l):(r=typeof globalThis<"u"?globalThis:r||self,l(r.React,r.ReactDOM))})(this,function(r,l){"use strict";function _(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var g={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w;function C(){if(w)return u;w=1;var t=r,i=Symbol.for("react.element"),p=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,b=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function h(d,n,x){var e,a={},c=null,f=null;x!==void 0&&(c=""+x),n.key!==void 0&&(c=""+n.key),n.ref!==void 0&&(f=n.ref);for(e in n)y.call(n,e)&&!s.hasOwnProperty(e)&&(a[e]=n[e]);if(d&&d.defaultProps)for(e in n=d.defaultProps,n)a[e]===void 0&&(a[e]=n[e]);return{$$typeof:i,type:d,key:c,ref:f,props:a,_owner:b.current}}return u.Fragment=p,u.jsx=h,u.jsxs=h,u}var v;function k(){return v||(v=1,g.exports=C()),g.exports}var o=k(),m={},R;function O(){if(R)return m;R=1;var t=l;return m.createRoot=t.createRoot,m.hydrateRoot=t.hydrateRoot,m}var E=O();const j=_(E),N="https://aichatbotwidget-production.up.railway.app";function S(){const t=`
    .chat-float {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
    }

    .chat-toggle {
      background: #2563eb;
      color: white;
      padding: 10px 16px;
      border-radius: 9999px;
      font-size: 14px;
      cursor: pointer;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      border: none;
    }

    .chat-box {
      width: 320px;
      height: 450px;
      background: white;
      border: 1px solid #ccc;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    }

    .chat-header {
      background: #2563eb;
      color: white;
      padding: 12px;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .chat-messages {
      flex: 1;
      padding: 12px;
      overflow-y: auto;
      font-size: 14px;
    }

    .chat-message-user {
      text-align: right;
      margin-bottom: 6px;
    }

    .chat-message-bot {
      text-align: left;
      margin-bottom: 6px;
    }

    .chat-bubble {
      display: inline-block;
      padding: 8px 12px;
      border-radius: 12px;
      max-width: 80%;
    }

    .bubble-user {
      background: #2563eb;
      color: white;
    }

    .bubble-bot {
      background: #f3f4f6;
      color: black;
    }

    .chat-input {
      display: flex;
      border-top: 1px solid #ddd;
      padding: 8px;
      gap: 6px;
    }

    .chat-input input {
      flex: 1;
      padding: 6px 8px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 14px;
    }

    .chat-input button {
      background: #2563eb;
      color: white;
      border: none;
      border-radius: 6px;
      padding: 6px 12px;
      font-size: 14px;
      cursor: pointer;
    }
  `,[i,p]=r.useState(!1),[y,b]=r.useState([]),[s,h]=r.useState(""),[d,n]=r.useState(!1),x=async()=>{if(!s.trim())return;const e={role:"user",content:s};b(a=>[...a,e]),h(""),n(!0);try{const I={role:"bot",content:(await(await fetch(`${N}/api/chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:s})})).json()).response||"❌ Odpověď se nepodařilo načíst."};b(P=>[...P,I])}catch{const c={role:"bot",content:"⚠️ Chyba při komunikaci s API."};b(f=>[...f,c])}n(!1)};return o.jsxs("div",{className:"chat-float",children:[o.jsx("style",{children:t}),i?o.jsxs("div",{className:"chat-box",children:[o.jsxs("div",{className:"chat-header",children:[o.jsx("span",{children:"AI Chatbot"}),o.jsx("button",{onClick:()=>p(!1),children:"✖️"})]}),o.jsxs("div",{className:"chat-messages",children:[y.map((e,a)=>o.jsx("div",{className:e.role==="user"?"chat-message-user":"chat-message-bot",children:o.jsx("div",{className:`chat-bubble ${e.role==="user"?"bubble-user":"bubble-bot"}`,children:e.content})},a)),d&&o.jsx("div",{className:"chat-message-bot bubble-bot chat-bubble",children:"✍️ Píšu odpověď..."})]}),o.jsxs("div",{className:"chat-input",children:[o.jsx("input",{type:"text",value:s,placeholder:"Zadej dotaz...",onChange:e=>h(e.target.value),onKeyDown:e=>e.key==="Enter"&&x()}),o.jsx("button",{onClick:x,children:"➡️"})]})]}):o.jsx("button",{onClick:()=>p(!0),className:"chat-toggle",children:"💬 Chat s námi"})]})}window.ChatbotWidget={init:(t={})=>{if(document.getElementById("chatbot-widget-container"))return;const i=document.createElement("div");i.id="chatbot-widget-container",document.body.appendChild(i),j.createRoot(i).render(o.jsx(S,{...t}))},destroy:()=>{const t=document.getElementById("chatbot-widget-container");t&&(j.createRoot(t).unmount(),t.remove())}},window.addEventListener("DOMContentLoaded",()=>{window.ChatbotWidget&&typeof window.ChatbotWidget.init=="function"&&window.ChatbotWidget.init()})});
