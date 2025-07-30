(function(p,b){"use strict";var u={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h;function j(){if(h)return d;h=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function r(x,t,o){var i=null;if(o!==void 0&&(i=""+o),t.key!==void 0&&(i=""+t.key),"key"in t){o={};for(var c in t)c!=="key"&&(o[c]=t[c])}else o=t;return t=o.ref,{$$typeof:n,type:x,key:i,ref:t!==void 0?t:null,props:o}}return d.Fragment=a,d.jsx=r,d.jsxs=r,d}var g;function y(){return g||(g=1,u.exports=j()),u.exports}var e=y();const k="https://aichatbotwidget-production.up.railway.app";function R(){const n=`
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
  `,[a,r]=p.useState(!1),[x,t]=p.useState([]),[o,i]=p.useState(""),[c,m]=p.useState(!1),f=async()=>{if(!o.trim())return;const s={role:"user",content:o};t(l=>[...l,s]),i(""),m(!0);try{const C={role:"bot",content:(await(await fetch(`${k}/api/chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:o})})).json()).response||"❌ Odpověď se nepodařilo načíst."};t(E=>[...E,C])}catch{const w={role:"bot",content:"⚠️ Chyba při komunikaci s API."};t(v=>[...v,w])}m(!1)};return e.jsxs("div",{className:"chat-float",children:[e.jsx("style",{children:n}),a?e.jsxs("div",{className:"chat-box",children:[e.jsxs("div",{className:"chat-header",children:[e.jsx("span",{children:"AI Chatbot"}),e.jsx("button",{onClick:()=>r(!1),children:"✖️"})]}),e.jsxs("div",{className:"chat-messages",children:[x.map((s,l)=>e.jsx("div",{className:s.role==="user"?"chat-message-user":"chat-message-bot",children:e.jsx("div",{className:`chat-bubble ${s.role==="user"?"bubble-user":"bubble-bot"}`,children:s.content})},l)),c&&e.jsx("div",{className:"chat-message-bot bubble-bot chat-bubble",children:"✍️ Píšu odpověď..."})]}),e.jsxs("div",{className:"chat-input",children:[e.jsx("input",{type:"text",value:o,placeholder:"Zadej dotaz...",onChange:s=>i(s.target.value),onKeyDown:s=>s.key==="Enter"&&f()}),e.jsx("button",{onClick:f,children:"➡️"})]})]}):e.jsx("button",{onClick:()=>r(!0),className:"chat-toggle",children:"💬 Chat s námi"})]})}window.ChatbotWidget={init:(n={})=>{if(document.getElementById("chatbot-widget-container"))return;const a=document.createElement("div");a.id="chatbot-widget-container",document.body.appendChild(a),b.createRoot(a).render(e.jsx(R,{...n}))},destroy:()=>{const n=document.getElementById("chatbot-widget-container");n&&(b.createRoot(n).unmount(),n.remove())}},window.addEventListener("DOMContentLoaded",()=>{window.ChatbotWidget&&window.ChatbotWidget.init()})})(React,ReactDOM);
