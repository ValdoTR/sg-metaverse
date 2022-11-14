class C{constructor(e){this.properties=e!=null?e:[]}get(e){const t=this.properties.filter(n=>n.name===e).map(n=>n.value);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const n=this.get(e);if(n!==void 0){if(t!=="json"&&typeof n!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return n}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const n=this.get(e);if(n===void 0)throw new Error('Property "'+e+'" is missing');if(t!=="json"&&typeof n!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return n}getType(e){const t=this.properties.filter(n=>n.name===e).map(n=>n.type);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}}const V="https://unpkg.com/@workadventure/scripting-api-extra@1.4.5/dist";class F{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new C(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function U(r){const e=r?"#"+r.join():"";WA.nav.openCoWebSite(V+"/configuration.html"+e)}async function ee(r,e){const t=await WA.room.getTiledMap(),n=new Map;return H(t.layers,n,r,e),n}function H(r,e,t,n){for(const o of r)if(o.type==="objectgroup"){for(const s of o.objects)if(s.type==="variable"||s.class==="variable"){if(!!t&&o.name!==t||!!n&&!n.includes(s.name))continue;e.set(s.name,new F(s))}}else o.type==="group"&&H(o.layers,e,t,n)}let B;async function P(){return B===void 0&&(B=te()),B}async function te(){return re(await WA.room.getTiledMap())}function re(r){const e=new Map;return X(r.layers,"",e),e}function X(r,e,t){for(const n of r)n.type==="group"?X(n.layers,e+n.name+"/",t):(n.name=e+n.name,t.set(n.name,n))}async function ne(){const r=await P(),e=[];for(const t of r.values())if(t.type==="objectgroup")for(const n of t.objects)(n.type==="area"||n.class==="area")&&e.push(n);return e}function oe(r){let e=1/0,t=1/0,n=0,o=0;const s=r.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let a=0;a<r.height;a++)for(let i=0;i<r.width;i++)s[i+a*r.width]!==0&&(e=Math.min(e,i),o=Math.max(o,i),t=Math.min(t,a),n=Math.max(n,a));return{top:t,left:e,right:o+1,bottom:n+1}}function Y(r){let e=1/0,t=1/0,n=0,o=0;for(const s of r){const a=oe(s);a.left<e&&(e=a.left),a.top<t&&(t=a.top),a.right>o&&(o=a.right),a.bottom>n&&(n=a.bottom)}return{top:t,left:e,right:o,bottom:n}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var se=Object.prototype.toString,W=Array.isArray||function(e){return se.call(e)==="[object Array]"};function x(r){return typeof r=="function"}function ae(r){return W(r)?"array":typeof r}function O(r){return r.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function _(r,e){return r!=null&&typeof r=="object"&&e in r}function ie(r,e){return r!=null&&typeof r!="object"&&r.hasOwnProperty&&r.hasOwnProperty(e)}var ue=RegExp.prototype.test;function ce(r,e){return ue.call(r,e)}var le=/\S/;function fe(r){return!ce(le,r)}var pe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function he(r){return String(r).replace(/[&<>"'`=\/]/g,function(t){return pe[t]})}var de=/\s*/,ge=/\s+/,D=/\s*=/,ye=/\s*\}/,me=/#|\^|\/|>|\{|&|=|!/;function ve(r,e){if(!r)return[];var t=!1,n=[],o=[],s=[],a=!1,i=!1,u="",l=0;function f(){if(a&&!i)for(;s.length;)delete o[s.pop()];else s=[];a=!1,i=!1}var g,m,T;function S(A){if(typeof A=="string"&&(A=A.split(ge,2)),!W(A)||A.length!==2)throw new Error("Invalid tags: "+A);g=new RegExp(O(A[0])+"\\s*"),m=new RegExp("\\s*"+O(A[1])),T=new RegExp("\\s*"+O("}"+A[1]))}S(e||d.tags);for(var c=new M(r),v,h,y,L,R,w;!c.eos();){if(v=c.pos,y=c.scanUntil(g),y)for(var k=0,Q=y.length;k<Q;++k)L=y.charAt(k),fe(L)?(s.push(o.length),u+=L):(i=!0,t=!0,u+=" "),o.push(["text",L,v,v+1]),v+=1,L===`
`&&(f(),u="",l=0,t=!1);if(!c.scan(g))break;if(a=!0,h=c.scan(me)||"name",c.scan(de),h==="="?(y=c.scanUntil(D),c.scan(D),c.scanUntil(m)):h==="{"?(y=c.scanUntil(T),c.scan(ye),c.scanUntil(m),h="&"):y=c.scanUntil(m),!c.scan(m))throw new Error("Unclosed tag at "+c.pos);if(h==">"?R=[h,y,v,c.pos,u,l,t]:R=[h,y,v,c.pos],l++,o.push(R),h==="#"||h==="^")n.push(R);else if(h==="/"){if(w=n.pop(),!w)throw new Error('Unopened section "'+y+'" at '+v);if(w[1]!==y)throw new Error('Unclosed section "'+w[1]+'" at '+v)}else h==="name"||h==="{"||h==="&"?i=!0:h==="="&&S(y)}if(f(),w=n.pop(),w)throw new Error('Unclosed section "'+w[1]+'" at '+c.pos);return we(Ae(o))}function Ae(r){for(var e=[],t,n,o=0,s=r.length;o<s;++o)t=r[o],t&&(t[0]==="text"&&n&&n[0]==="text"?(n[1]+=t[1],n[3]=t[3]):(e.push(t),n=t));return e}function we(r){for(var e=[],t=e,n=[],o,s,a=0,i=r.length;a<i;++a)switch(o=r[a],o[0]){case"#":case"^":t.push(o),n.push(o),t=o[4]=[];break;case"/":s=n.pop(),s[5]=o[2],t=n.length>0?n[n.length-1][4]:e;break;default:t.push(o)}return e}function M(r){this.string=r,this.tail=r,this.pos=0}M.prototype.eos=function(){return this.tail===""};M.prototype.scan=function(e){var t=this.tail.match(e);if(!t||t.index!==0)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n};M.prototype.scanUntil=function(e){var t=this.tail.search(e),n;switch(t){case-1:n=this.tail,this.tail="";break;case 0:n="";break;default:n=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=n.length,n};function b(r,e){this.view=r,this.cache={".":this.view},this.parent=e}b.prototype.push=function(e){return new b(e,this)};b.prototype.lookup=function(e){var t=this.cache,n;if(t.hasOwnProperty(e))n=t[e];else{for(var o=this,s,a,i,u=!1;o;){if(e.indexOf(".")>0)for(s=o.view,a=e.split("."),i=0;s!=null&&i<a.length;)i===a.length-1&&(u=_(s,a[i])||ie(s,a[i])),s=s[a[i++]];else s=o.view[e],u=_(o.view,e);if(u){n=s;break}o=o.parent}t[e]=n}return x(n)&&(n=n.call(this.view)),n};function p(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}p.prototype.clearCache=function(){typeof this.templateCache!="undefined"&&this.templateCache.clear()};p.prototype.parse=function(e,t){var n=this.templateCache,o=e+":"+(t||d.tags).join(":"),s=typeof n!="undefined",a=s?n.get(o):void 0;return a==null&&(a=ve(e,t),s&&n.set(o,a)),a};p.prototype.render=function(e,t,n,o){var s=this.getConfigTags(o),a=this.parse(e,s),i=t instanceof b?t:new b(t,void 0);return this.renderTokens(a,i,n,e,o)};p.prototype.renderTokens=function(e,t,n,o,s){for(var a="",i,u,l,f=0,g=e.length;f<g;++f)l=void 0,i=e[f],u=i[0],u==="#"?l=this.renderSection(i,t,n,o,s):u==="^"?l=this.renderInverted(i,t,n,o,s):u===">"?l=this.renderPartial(i,t,n,s):u==="&"?l=this.unescapedValue(i,t):u==="name"?l=this.escapedValue(i,t,s):u==="text"&&(l=this.rawValue(i)),l!==void 0&&(a+=l);return a};p.prototype.renderSection=function(e,t,n,o,s){var a=this,i="",u=t.lookup(e[1]);function l(m){return a.render(m,t,n,s)}if(!!u){if(W(u))for(var f=0,g=u.length;f<g;++f)i+=this.renderTokens(e[4],t.push(u[f]),n,o,s);else if(typeof u=="object"||typeof u=="string"||typeof u=="number")i+=this.renderTokens(e[4],t.push(u),n,o,s);else if(x(u)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");u=u.call(t.view,o.slice(e[3],e[5]),l),u!=null&&(i+=u)}else i+=this.renderTokens(e[4],t,n,o,s);return i}};p.prototype.renderInverted=function(e,t,n,o,s){var a=t.lookup(e[1]);if(!a||W(a)&&a.length===0)return this.renderTokens(e[4],t,n,o,s)};p.prototype.indentPartial=function(e,t,n){for(var o=t.replace(/[^ \t]/g,""),s=e.split(`
`),a=0;a<s.length;a++)s[a].length&&(a>0||!n)&&(s[a]=o+s[a]);return s.join(`
`)};p.prototype.renderPartial=function(e,t,n,o){if(!!n){var s=this.getConfigTags(o),a=x(n)?n(e[1]):n[e[1]];if(a!=null){var i=e[6],u=e[5],l=e[4],f=a;u==0&&l&&(f=this.indentPartial(a,l,i));var g=this.parse(f,s);return this.renderTokens(g,t,n,f,o)}}};p.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(n!=null)return n};p.prototype.escapedValue=function(e,t,n){var o=this.getConfigEscape(n)||d.escape,s=t.lookup(e[1]);if(s!=null)return typeof s=="number"&&o===d.escape?String(s):o(s)};p.prototype.rawValue=function(e){return e[1]};p.prototype.getConfigTags=function(e){return W(e)?e:e&&typeof e=="object"?e.tags:void 0};p.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!W(e))return e.escape};var d={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(r){E.templateCache=r},get templateCache(){return E.templateCache}},E=new p;d.clearCache=function(){return E.clearCache()};d.parse=function(e,t){return E.parse(e,t)};d.render=function(e,t,n,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+ae(e)+'" was given as the first argument for mustache#render(template, view, partials)');return E.render(e,t,n,o)};d.escape=he;d.Scanner=M;d.Context=b;d.Writer=p;class Z{constructor(e,t){this.template=e,this.state=t,this.ast=d.parse(e)}getValue(){return this.value===void 0&&(this.value=d.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const n of this.getUsedVariables().values())t.push(this.state.onVariableChange(n).subscribe(()=>{const o=d.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const n of t)n.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const n of e){const o=n[0],s=n[1],a=n[4];["name","&","#","^"].includes(o)&&t.add(s),a!==void 0&&typeof a!="string"&&this.recursiveGetUsedVariables(a,t)}}}async function be(){var r;const e=await ne();for(const t of e){const n=(r=t.properties)!==null&&r!==void 0?r:[];for(const o of n){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const s=new Z(o.value,WA.state);if(s.isPureString())continue;const a=s.getValue();await q(t.name,o.name,a),s.onChange(async i=>{await q(t.name,o.name,i)})}}}async function We(){var r;const e=await P();for(const[t,n]of e.entries())if(n.type!=="objectgroup"){const o=(r=n.properties)!==null&&r!==void 0?r:[];for(const s of o){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const a=new Z(s.value,WA.state);if(a.isPureString())continue;const i=a.getValue();K(t,s.name,i),a.onChange(u=>{K(t,s.name,u)})}}}async function q(r,e,t){console.log(r),(await WA.room.area.get(r)).setProperty(e,t)}function K(r,e,t){WA.room.setProperty(r,e,t),e==="visible"&&(t?WA.room.showLayer(r):WA.room.hideLayer(r))}let G,j=0,I=0;function N(r){if(WA.state[r.name]){let e=r.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.showLayer(t);e=r.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.hideLayer(t)}else{let e=r.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.hideLayer(t);e=r.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.showLayer(t)}}function Se(r){const e=r.properties.getString("openSound"),t=r.properties.getNumber("soundRadius");let n=1;if(t){const o=J(r.properties.mustGetString("openLayer").split(`
`));if(o>t)return;n=1-o/t}e&&WA.sound.loadSound(e).play({volume:n})}function Le(r){const e=r.properties.getString("closeSound"),t=r.properties.getNumber("soundRadius");let n=1;if(t){const o=J(r.properties.mustGetString("closeLayer").split(`
`));if(o>t)return;n=1-o/t}e&&WA.sound.loadSound(e).play({volume:n})}function z(r){return r.map(e=>G.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function J(r){const e=z(r),t=Y(e),n=((t.right-t.left)/2+t.left)*32,o=((t.bottom-t.top)/2+t.top)*32;return Math.sqrt(Math.pow(j-n,2)+Math.pow(I-o,2))}function Ce(r){WA.state.onVariableChange(r.name).subscribe(()=>{WA.state[r.name]?Se(r):Le(r),N(r)}),N(r)}function Ee(r,e,t,n){const o=r.name;let s,a,i=!1;const u=t.getString("tag");let l=!0;u&&!WA.player.tags.includes(u)&&(l=!1);const f=!!u;function g(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=t.getString("closeTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,m()}})}function m(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=t.getString("openTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,g()}})}function T(c){const v=Y(z(e.properties.mustGetString("closeLayer").split(`
`)));a=WA.room.website.create({name:"doorKeypad"+c,url:n+"/keypad.html#"+encodeURIComponent(c),position:{x:v.right*32,y:v.top*32,width:32*3,height:32*4},allowApi:!0})}function S(){a&&(WA.room.website.delete(a.name),a=void 0)}WA.room.onEnterLayer(o).subscribe(()=>{if(i=!0,t.getBoolean("autoOpen")&&l){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(f&&!l||!f)&&(t.getString("code")||t.getString("codeVariable"))){T(o);return}!l||(WA.state[e.name]?g():m())}),WA.room.onLeaveLayer(o).subscribe(()=>{i=!1,t.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),S()}),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!t.getBoolean("autoClose")&&WA.state[e.name]===!0&&g(),a&&WA.state[e.name]===!0&&S(),!t.getBoolean("autoOpen")&&WA.state[e.name]===!1&&m())})}function Pe(r){const e=r.properties.mustGetString("bellSound"),t=r.properties.getNumber("soundRadius");let n=1;if(t){const o=Math.sqrt(Math.pow(r.x-j,2)+Math.pow(r.y-I,2));if(o>t)return;n=1-o/t}WA.sound.loadSound(e).play({volume:n})}function Me(r){WA.state[r.name]===void 0&&(WA.state[r.name]=0),WA.state.onVariableChange(r.name).subscribe(()=>{WA.state[r.name]&&Pe(r)})}function Te(r,e,t){let n;const o=e.getString("bellPopup");WA.room.onEnterLayer(t).subscribe(()=>{var s;o?n=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[r]=WA.state[r]+1}}]):WA.state[r]=WA.state[r]+1}),WA.room.onLeaveLayer(t).subscribe(()=>{n&&(n.close(),n=void 0)})}async function Re(r){r=r!=null?r:V;const e=await ee();G=await P();for(const t of e.values())t.properties.get("door")&&Ce(t),t.properties.get("bell")&&Me(t);for(const t of G.values()){const n=new C(t.properties),o=n.getString("doorVariable");if(o&&t.type==="tilelayer"){const a=e.get(o);if(a===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+t.name+'"');Ee(t,a,n,r)}const s=n.getString("bellVariable");s&&Te(s,n,t.name)}WA.player.onPlayerMove(t=>{j=t.x,I=t.y})}function ke(r,e){const t=r.getString("bindVariable");if(t){const n=r.get("enterValue"),o=r.get("leaveValue"),s=r.getString("triggerMessage"),a=r.getString("tag");Be(t,e,n,o,s,a)}}function Be(r,e,t,n,o,s){s&&!WA.player.tags.includes(s)||(t!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[r]=t)}),n!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[r]=n}))}async function Oe(){const r=await P();for(const e of r.values()){const t=new C(e.properties);ke(t,e.name)}}let $;async function Ge(r){const e=await WA.room.getTiledMap();r=r!=null?r:V,$=await P();const t=e.layers.find(n=>n.name==="configuration");if(t){const o=new C(t.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(r+"/configuration.html",!0)});for(const s of $.values()){const a=new C(s.properties),i=a.getString("openConfig");i&&s.type==="tilelayer"&&Ve(i.split(","),s.name,a)}}}function Ve(r,e,t){let n;const o=t.getString("openConfigAdminTag");let s=!0;o&&!WA.player.tags.includes(o)&&(s=!1);function a(){var u;n&&n.remove(),n=WA.ui.displayActionMessage({message:(u=t.getString("openConfigTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE or touch here to configure",callback:()=>U(r)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const u=t.getString("openConfigTrigger");s&&(u&&u==="onaction"?a():U(r))}),WA.room.onLeaveLayer(e).subscribe(()=>{n&&n.remove(),i()})}function xe(){return WA.onInit().then(()=>{Re().catch(r=>console.error(r)),Oe().catch(r=>console.error(r)),Ge().catch(r=>console.error(r)),We().catch(r=>console.error(r)),be().catch(r=>console.error(r))}).catch(r=>console.error(r))}console.log("Script started successfully");WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.area.onEnter("interviewRoom1").subscribe(()=>{WA.room.hideLayer("door1Open"),WA.room.showLayer("door1Closed")}),WA.room.area.onLeave("interviewRoom1").subscribe(()=>{WA.room.showLayer("door1Open"),WA.room.hideLayer("door1Closed")}),WA.room.area.onEnter("interviewRoom2").subscribe(()=>{WA.room.hideLayer("door2Open"),WA.room.showLayer("door2Closed")}),WA.room.area.onLeave("interviewRoom2").subscribe(()=>{WA.room.showLayer("door2Open"),WA.room.hideLayer("door2Closed")}),WA.room.area.onEnter("interviewRoom3").subscribe(()=>{WA.room.hideLayer("door3Open"),WA.room.showLayer("door3Closed")}),WA.room.area.onLeave("interviewRoom3").subscribe(()=>{WA.room.showLayer("door3Open"),WA.room.hideLayer("door3Closed")}),WA.room.area.onEnter("interviewRoom4").subscribe(()=>{WA.room.hideLayer("door4Open"),WA.room.showLayer("door4Closed")}),WA.room.area.onLeave("interviewRoom4").subscribe(()=>{WA.room.showLayer("door4Open"),WA.room.hideLayer("door4Closed")}),WA.room.area.onEnter("interviewRoom5").subscribe(()=>{WA.room.hideLayer("door5Open"),WA.room.showLayer("door5Closed")}),WA.room.area.onLeave("interviewRoom5").subscribe(()=>{WA.room.showLayer("door5Open"),WA.room.hideLayer("door5Closed")}),WA.room.area.onEnter("interviewRoom6").subscribe(()=>{WA.room.hideLayer("door6Open"),WA.room.showLayer("door6Closed")}),WA.room.area.onLeave("interviewRoom6").subscribe(()=>{WA.room.showLayer("door6Open"),WA.room.hideLayer("door6Closed")}),xe().then(()=>{console.log("Scripting API Extra ready")}).catch(r=>console.error(r))}).catch(r=>console.error(r));