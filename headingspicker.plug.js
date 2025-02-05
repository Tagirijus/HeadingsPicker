var k=Object.defineProperty;var x=(e,r)=>{for(var n in r)k(e,n,{get:r[n],enumerable:!0})};var l=e=>{throw new Error("Not initialized yet")},g=typeof window>"u"&&typeof globalThis.WebSocketPair>"u";typeof Deno>"u"&&(self.Deno={args:[],build:{arch:"x86_64"},env:{get(){}}});var f=new Map,m=0;g&&(globalThis.syscall=async(e,...r)=>await new Promise((n,o)=>{m++,f.set(m,{resolve:n,reject:o}),l({type:"sys",id:m,name:e,args:r})}));function h(e,r,n){g&&(l=n,self.addEventListener("message",o=>{(async()=>{let i=o.data;switch(i.type){case"inv":{let a=e[i.name];if(!a)throw new Error(`Function not loaded: ${i.name}`);try{let s=await Promise.resolve(a(...i.args||[]));l({type:"invr",id:i.id,result:s})}catch(s){console.error("An exception was thrown as a result of invoking function",i.name,"error:",s.message),l({type:"invr",id:i.id,error:s.message})}}break;case"sysr":{let a=i.id,s=f.get(a);if(!s)throw Error("Invalid request id");f.delete(a),i.error?s.reject(new Error(i.error)):s.resolve(i.result)}break}})().catch(console.error)}),l({type:"manifest",manifest:r}))}function C(e){let r=atob(e),n=r.length,o=new Uint8Array(n);for(let i=0;i<n;i++)o[i]=r.charCodeAt(i);return o}function T(e){typeof e=="string"&&(e=new TextEncoder().encode(e));let r="",n=e.byteLength;for(let o=0;o<n;o++)r+=String.fromCharCode(e[o]);return btoa(r)}async function M(e,r){if(typeof e!="string"){let n=new Uint8Array(await e.arrayBuffer()),o=n.length>0?T(n):void 0;r={method:e.method,headers:Object.fromEntries(e.headers.entries()),base64Body:o},e=e.url}return syscall("sandboxFetch.fetch",e,r)}globalThis.nativeFetch=globalThis.fetch;function S(){globalThis.fetch=async function(e,r){let n=r&&r.body?T(new Uint8Array(await new Response(r.body).arrayBuffer())):void 0,o=await M(e,r&&{method:r.method,headers:r.headers,base64Body:n});return new Response(o.base64Body?C(o.base64Body):null,{status:o.status,headers:o.headers})}}g&&S();var c={};x(c,{confirm:()=>ne,copyToClipboard:()=>fe,deleteLine:()=>ge,dispatch:()=>re,downloadFile:()=>X,filterBox:()=>_,flashNotification:()=>V,fold:()=>se,foldAll:()=>le,getCurrentPage:()=>F,getCursor:()=>L,getSelection:()=>R,getText:()=>E,getUiOption:()=>oe,goHistory:()=>I,hidePanel:()=>z,insertAtCursor:()=>ee,insertAtPos:()=>G,moveCursor:()=>J,moveCursorToLine:()=>Z,navigate:()=>H,openCommandPalette:()=>W,openPageNavigator:()=>K,openSearchPanel:()=>me,openUrl:()=>j,prompt:()=>te,redo:()=>pe,reloadConfigAndCommands:()=>q,reloadPage:()=>B,reloadUI:()=>O,replaceRange:()=>Y,save:()=>D,setSelection:()=>N,setText:()=>U,setUiOption:()=>ie,showPanel:()=>$,toggleFold:()=>ce,undo:()=>ue,unfold:()=>ae,unfoldAll:()=>de,uploadFile:()=>Q,vimEx:()=>ye});typeof self>"u"&&(self={syscall:()=>{throw new Error("Not implemented here")}});function t(e,...r){return globalThis.syscall(e,...r)}function F(){return t("editor.getCurrentPage")}function E(){return t("editor.getText")}function U(e){return t("editor.setText",e)}function L(){return t("editor.getCursor")}function R(){return t("editor.getSelection")}function N(e,r){return t("editor.setSelection",e,r)}function D(){return t("editor.save")}function H(e,r=!1,n=!1){return t("editor.navigate",e,r,n)}function K(e="page"){return t("editor.openPageNavigator",e)}function W(){return t("editor.openCommandPalette")}function B(){return t("editor.reloadPage")}function O(){return t("editor.reloadUI")}function q(){return t("editor.reloadConfigAndCommands")}function j(e,r=!1){return t("editor.openUrl",e,r)}function I(e){return t("editor.goHistory",e)}function X(e,r){return t("editor.downloadFile",e,r)}function Q(e,r){return t("editor.uploadFile",e,r)}function V(e,r="info"){return t("editor.flashNotification",e,r)}function _(e,r,n="",o=""){return t("editor.filterBox",e,r,n,o)}function $(e,r,n,o=""){return t("editor.showPanel",e,r,n,o)}function z(e){return t("editor.hidePanel",e)}function G(e,r){return t("editor.insertAtPos",e,r)}function Y(e,r,n){return t("editor.replaceRange",e,r,n)}function J(e,r=!1){return t("editor.moveCursor",e,r)}function Z(e,r=1,n=!1){return t("editor.moveCursorToLine",e,r,n)}function ee(e){return t("editor.insertAtCursor",e)}function re(e){return t("editor.dispatch",e)}function te(e,r=""){return t("editor.prompt",e,r)}function ne(e){return t("editor.confirm",e)}function oe(e){return t("editor.getUiOption",e)}function ie(e,r){return t("editor.setUiOption",e,r)}function se(){return t("editor.fold")}function ae(){return t("editor.unfold")}function ce(){return t("editor.toggleFold")}function le(){return t("editor.foldAll")}function de(){return t("editor.unfoldAll")}function ue(){return t("editor.undo")}function pe(){return t("editor.redo")}function me(){return t("editor.openSearchPanel")}function fe(e){return t("editor.copyToClipboard",e)}function ge(){return t("editor.deleteLine")}function ye(e){return t("editor.vimEx",e)}var u={};x(u,{parseMarkdown:()=>Pe,renderParseTree:()=>xe});function Pe(e){return t("markdown.parseMarkdown",e)}function xe(e){return t("markdown.renderParseTree",e)}function y(e,r){if(r(e))return[e];let n=[];if(e.children)for(let o of e.children)n=[...n,...y(o,r)];return n}function d(e,r){return y(e,n=>n.type===r)[0]}function v(e,r){y(e,r)}function p(e){if(!e)return"";let r=[];if(e.text!==void 0)return e.text;for(let n of e.children)r.push(p(n));return r.join("")}function P(e){if(e.type?.endsWith("Mark")||e.type?.endsWith("Delimiter"))return"";let r=n=>n.map(P).join("");switch(e.type){case"Document":case"Emphasis":case"Highlight":case"Strikethrough":case"InlineCode":case"StrongEmphasis":case"Superscript":case"Subscript":case"Paragraph":case"ATXHeading1":case"ATXHeading2":case"ATXHeading3":case"ATXHeading4":case"ATXHeading5":case"ATXHeading6":case"Blockquote":case"BulletList":case"OrderedList":case"ListItem":case"Table":case"TableHeader":case"TableCell":case"TableRow":case"Task":case"HTMLTag":return r(e.children);case"FencedCode":case"CodeBlock":return e.children=e.children.filter(n=>n.type),r(e.children);case"Link":{let n=e.children.slice(1,-4);return r(n)}case"Image":{let n=d(e,"WikiLinkAlias")||e.children[1],o=n&&n.type!=="LinkMark"?p(n):"<Image>",i=/\d*[^\|\s]*?[xX]\d*[^\|\s]*/.exec(o);return i&&(o=o.replace(i[0],"").replace("|","")),o}case"WikiLink":{let n=d(e,"WikiLinkAlias"),o;return n?o=n.children[0].text:o=d(e,"WikiLinkPage").children[0].text.split("/").pop(),o}case"NakedURL":return e.children[0].text;case"CommandLink":{let n=d(e,"CommandLinkAlias"),o;return n?o=n.children[0].text:o=e.children[1].children[0].text,o}case"TaskState":return e.children[1].text;case"Escape":return e.children[0].text.slice(1);case"CodeText":case"Entity":return e.children[0].text;case"TemplateDirective":case"DeadlineDate":return p(e);case"CodeInfo":case"CommentBlock":case"FrontMatter":case"Hashtag":case"HardBreak":case"HorizontalRule":case"NamedAnchor":case"Attribute":return"";case void 0:return e.text;default:return console.log("Unknown tree type: ",e.type),""}}async function Ne(){let e=await c.getText(),r=await u.parseMarkdown(e),n=[];return v(r,o=>{if(o.type?.startsWith("ATXHeading")){let i=+o.type[o.type.length-1],a="_ ".repeat(Math.max(0,i-1))+o.children.slice(1).map(P).join("").trim();return n.push({name:a,pos:o.from,level:i}),!0}return!1}),n}async function b(){let e=await Ne(),r=await c.filterBox("Headings Picker",e);r&&await c.moveCursor(r.pos,!0)}var A={headingsPicker:b},w={name:"headingspicker",functions:{headingsPicker:{path:"headingspicker.ts:headingsPicker",command:{name:"Navigate: Headings Picker",key:"Ctrl-r"}}},assets:{}},gr={manifest:w,functionMapping:A};h(A,w,self.postMessage);export{gr as plug};
