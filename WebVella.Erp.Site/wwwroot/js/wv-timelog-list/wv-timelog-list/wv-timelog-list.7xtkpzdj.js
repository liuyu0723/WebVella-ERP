/*! Built with http://stenciljs.com */
((w,d,x,n,h,c,r)=>{((s)=>{s&&(r=s.getAttribute('data-resources-url'))})(d.querySelector("script[data-namespace='wv-timelog-list']"));
(function(Context, resourcesUrl){Context.store=function(){let t;return{getStore:function(){return t},setStore:function(e){t=e},getState:function(){return t&&t.getState()},mapDispatchToProps:function(e,n){Object.keys(n).forEach(o=>{const c=n[o];Object.defineProperty(e,o,{get:()=>(...e)=>c(...e)(t.dispatch,t.getState),configurable:!0,enumerable:!0})})},mapStateToProps:function(e,n){const o=(o,c)=>{const r=n(t.getState());Object.keys(r).forEach(t=>{e[t]=r[t]})};t.subscribe(()=>o()),o()}}}();
})(x,r);
function e(e,t){let n,o,l=null,i=!1,s=!1,r=arguments.length;for(;r-- >2;)m.push(arguments[r]);for(;m.length>0;){let t=m.pop();if(t&&void 0!==t.pop)for(r=t.length;r--;)m.push(t[r]);else"boolean"==typeof t&&(t=null),(s="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(s=!1)),s&&i?l[l.length-1].vtext+=t:null===l?l=[s?{vtext:t}:t]:l.push(s?{vtext:t}:t),i=s}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(r in t.class)t.class[r]&&m.push(r);t.class=m.join(" "),m.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,l||[],b):{vtag:e,vchildren:l,vtext:void 0,vattrs:t,vkey:n,vname:o,t:void 0,o:!1}}const t={},o=e=>null!=e,l=e=>e.toLowerCase(),i=(e,t,n,o,i,r)=>{if("class"!==n||r)if("style"===n){for(const e in o)i&&null!=i[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in i)o&&i[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,i[e]):t.style[e]=i[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!r&&(n in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=e.l(t);o&&o.i&&o.i[n]?a(t,n,i):"ref"!==n&&(a(t,n,null==i?"":i),null!=i&&!1!==i||e.u.s(t,n))}else null!=i&&"key"!==n?((e,t,n,o="boolean"==typeof n,i)=>{i=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?i?e.removeAttributeNS("http://www.w3.org/1999/xlink",l(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),i?e.setAttributeNS("http://www.w3.org/1999/xlink",l(t),n):e.setAttribute(t,n))})(t,n,i):(r||e.u.p(t,n)&&(null==i||!1===i))&&e.u.s(t,n);else n=l(n)in t?l(n.substring(2)):l(n[2])+n.substring(3),i?i!==o&&e.u.v(t,n,i,0):e.u.m(t,n,0);else if(o!==i){const e=s(o),n=s(i),l=e.filter(e=>!n.includes(e)),r=s(t.className).filter(e=>!l.includes(e)),a=n.filter(t=>!e.includes(t)&&!r.includes(t));r.push(...a),t.className=r.join(" ")}},s=e=>null==e||""===e?[]:e.trim().split(/\s+/),a=(e,t,n)=>{try{e[t]=n}catch(e){}},f=(e,n,o,l,s)=>{const r=11===o.t.nodeType&&o.t.host?o.t.host:o.t,a=n&&n.vattrs||t,f=o.vattrs||t;for(s in a)f&&null!=f[s]||null==a[s]||i(e,r,s,a[s],void 0,l,o.o);for(s in f)s in a&&f[s]===("value"===s||"checked"===s?r[s]:a[s])||i(e,r,s,a[s],f[s],l,o.o)};let u=!1;const p=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.t),e.vchildren&&e.vchildren.forEach(e=>{p(e,t)}))},v=(e,t)=>{{let n=0,o=!1;const l=()=>t.performance.now(),i=!1!==e.asyncQueue,s=Promise.resolve(),r=[],a=[],f=[],c=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(v))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](l())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=l())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},v=()=>{n++,p(a);const t=i?l()+7*Math.ceil(n*(1/22)):Infinity;d(f,t),d(c,t),f.length>0&&(c.push(...f),f.length=0),(o=a.length+f.length+c.length>0)?e.raf(v):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){r.push(e),1===r.length&&s.then(()=>p(r))},read:u(a),write:u(f)}}},m=[],b={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},y=(e,t,n)=>{const[o,l,,i,s,r]=e,a={color:{M:"color"}};if(i)for(t=0;t<i.length;t++)a[(n=i[t])[0]]={g:n[1],k:!!n[2],M:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,j:n[4]};return{C:o,W:l,i:Object.assign({},a),N:s,O:r?r.map(M):void 0}},M=e=>({S:e[0],A:e[1],T:!!e[2],R:!!e[3],L:!!e[4]}),g=(e,t)=>o(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t,$=(e,t,n)=>{e.D.add(t),e.q.has(t)||(e.q.set(t,!0),e.B?e.queue.write(()=>k(e,t,n)):e.queue.tick(()=>k(e,t,n)))},k=async(t,n,o,l,i,s)=>{if(t.q.delete(n),!t.I.has(n)){if(!(i=t.P.get(n))){if((s=t.F.get(n))&&!s["s-rn"])return void(s["s-rc"]=s["s-rc"]||[]).push(()=>{k(t,n,o)});if(i=E(t,n,t.H.get(n),o))try{i.componentWillLoad&&await i.componentWillLoad()}catch(e){t.U(e,3,n)}}((t,n,o,l)=>{try{const i=n.Z.host,s=n.Z.encapsulation,r=!1;let a,f=o;if(l.render||l.hostData||i||a){t.G=!0;const n=l.render&&l.render();let i;t.G=!1;const a=e(null,i,n),c=t.J.get(o)||{};c.t=f,t.J.set(o,t.render(o,c,a,r,s))}o["s-rn"]=!0,o["s-rc"]&&(o["s-rc"].forEach(e=>e()),o["s-rc"]=null)}catch(e){t.G=!1,t.U(e,8,o,!0)}})(t,t.l(n),n,i),n["s-init"]()}},j=(e,t,n,l,i,s,r,a,f)=>{if(t.type||t.state){const c=e.K.get(n);t.state||(!t.attr||void 0!==c[i]&&""!==c[i]||(a=s&&s.V)&&o(f=a[t.attr])&&(c[i]=g(t.type,f)),n.hasOwnProperty(i)&&(void 0===c[i]&&(c[i]=g(t.type,n[i])),"mode"!==i&&delete n[i])),l.hasOwnProperty(i)&&void 0===c[i]&&(c[i]=l[i]),N(l,i,function c(t){return(t=e.K.get(e.X.get(this)))&&t[i]},function u(n,o){(o=e.X.get(this))&&(t.state||t.mutable)&&C(e,o,i,n,r)})}else if(t.context){const o=e.Y(t.context);void 0!==o&&W(l,i,o.getContext&&o.getContext(n)||o)}},C=(e,t,n,o,l,i,s)=>{(s=e.K.get(t))||e.K.set(t,s={}),o!==s[n]&&(s[n]=o,e.P.get(t)&&!e.G&&t["s-rn"]&&$(e,t,l))},W=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,value:n})},N=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},E=(e,t,n,o,l,i)=>{try{l=new(i=e.l(t).Z),((e,t,n,o,l,i)=>{e.X.set(o,n),e.K.has(n)||e.K.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,s])=>{j(e,s,n,o,t,l,i)})})(e,i,t,l,n,o)}catch(n){l={},e.U(n,7,t,!0)}return e.P.set(t,l),l},O=(e,t,n,o,l,i)=>{if(e.D.delete(t),(l=e.F.get(t))&&((o=l["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||l["s-init"]&&l["s-init"]()),e.F.delete(t)),e._.length&&!e.D.size)for(;i=e._.shift();)i()},S=(e,t,n,o)=>{t.forEach(([t,l])=>{3&l.g&&N(n,t,function n(){return(e.K.get(this)||{})[t]},function n(i){C(e,this,t,g(l.j,i),o)})})},A=(e,t,n,o,i)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.I.delete(n),e.ee.has(n)||(e.te=!0,e.D.add(n),e.ee.set(n,!0),((e,t,n)=>{for(n=t;n=e.u.ne(n);)if(e.oe(n)){e.le.has(t)||(e.F.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.H.set(n,((e,t,n,o,l)=>(n.mode||(n.mode=e.ie(n)),n["s-cr"]||e.se(n,"ssrv")||e.re&&1===t.N||(n["s-cr"]=e.ae(""),n["s-cr"]["s-cn"]=!0,e.fe(n,n["s-cr"],e.ce(n)[0])),o={V:{}},t.i&&Object.keys(t.i).forEach(i=>{(l=t.i[i].M)&&(o.V[l]=e.se(n,l))}),o))(e.u,t,n)),e.ue(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{!e.pe&&((e,t)=>{for(;t;){if(!e.de(t))return 9!==e.ve(t);t=e.de(t)}})(e.u,t)&&(e.I.set(t,!0),O(e,t),p(e.J.get(t),!0),e.u.m(t),e.me.delete(t),[e.F,e.be,e.H].forEach(e=>e.delete(t)))})(e,this)},n["s-init"]=function(){((e,t,n,o,l,i,s)=>{if((l=e.P.get(t))&&!e.I.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.le.set(t,!0),(s=e.he.has(t))||(e.he.set(t,!0),t["s-ld"]=void 0,e.u.ye(t,n));try{p(e.J.get(t)),(i=e.be.get(t))&&(i.forEach(e=>e(t)),e.be.delete(t)),!s&&l.componentDidLoad&&l.componentDidLoad()}catch(n){e.U(n,4,t)}O(e,t)}})(e,this,o)},n.forceUpdate=function(){$(e,this,i)},t.i){const o=Object.entries(t.i);{let e={};o.forEach(([t,{M:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function i(e,t,n,o){const i=e[l(n)];i&&(t[i]=o)})(e,this,t,o)}}S(e,o,n,i)}};((t,n,i,s,r,a,c)=>{const p=i.performance,d={html:{}},m=i[t]=i[t]||{},b=((e,t,n)=>{const o=new WeakMap,i={we:n,re:!!n.documentElement.attachShadow,Me:!1,ve:e=>e.nodeType,ge:e=>n.createElement(e),$e:(e,t)=>n.createElementNS(e,t),ae:e=>n.createTextNode(e),ke:e=>n.createComment(e),fe:(e,t,n)=>e.insertBefore(t,n),je:e=>e.remove(),Ce:(e,t)=>e.appendChild(t),ye:(e,t)=>{e.classList.add(t)},ce:e=>e.childNodes,de:e=>e.parentNode,We:e=>e.nextSibling,Ne:e=>e.previousSibling,xe:e=>l(e.nodeName),Ee:e=>e.textContent,Oe:(e,t)=>e.textContent=t,se:(e,t)=>e.getAttribute(t),Se:(e,t,n)=>e.setAttribute(t,n),s:(e,t)=>e.removeAttribute(t),p:(e,t)=>e.hasAttribute(t),ie:t=>t.getAttribute("mode")||(e.Context||{}).mode,Ae:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?i.ne(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e,v:(t,n,l,s,r,a,f,c,u,p)=>{let d=t,v=l,m=o.get(t);p=n+s,m&&m[p]&&m[p](),"object"==typeof f&&(d=f),d&&(c=i.Me?{capture:!!r,passive:!!a}:!!r,e.ael(d,n,v,c),m||o.set(t,m={}),m[p]=(()=>{d&&e.rel(d,n,v,c),m[p]=null}))},m:(e,t,n,l)=>{(l=o.get(e))&&(t?l[t+n]&&l[t+n]():Object.keys(l).forEach(e=>{l[e]&&l[e]()}))},Te:(e,n,o,l)=>(l=new t.CustomEvent(n,o),e&&e.dispatchEvent(l),l),ne:(e,t)=>(t=i.de(e))&&11===i.ve(t)?t.host:t,Re:(e,t,n,o)=>e.setAttributeNS(t,n,o)};return e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o))),i})(m,i,s),h=b.we.documentElement,w=i["s-defined"]=i["s-defined"]||{},M=(e,t)=>{i.customElements.get(e.C)||(A(g,d[e.C]=e,t.prototype,a,p),t.observedAttributes=Object.values(e.i).map(e=>e.M).filter(e=>!!e),i.customElements.define(e.C,t))},g={u:b,Le:M,l:e=>d[b.xe(e)],Y:e=>n[e],isClient:!0,oe:e=>!(!w[b.xe(e)]&&!g.l(e)),U:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:n.queue=v(m,i),ue:(e,t)=>{{const n=e.W;let o=r+n+".entry.js";import(o).then(n=>{try{e.Z=n[(e=>l(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""))(e.C)],$(g,t,p)}catch(t){console.error(t),e.Z=class{}}},e=>console.error(e,o))}},G:!1,B:!1,pe:!1,De:void 0,F:new WeakMap,qe:new WeakMap,ee:new WeakMap,me:new WeakMap,he:new WeakMap,le:new WeakMap,X:new WeakMap,H:new WeakMap,P:new WeakMap,I:new WeakMap,q:new WeakMap,be:new WeakMap,Be:new WeakMap,J:new WeakMap,K:new WeakMap,D:new Set,_:[]};return n.isServer=n.isPrerender=!(n.isClient=!0),n.window=i,n.location=i.location,n.document=s,n.resourcesUrl=n.publicPath=r,m.h=e,m.Context=n,m.onReady=(()=>new Promise(e=>g.queue.write(()=>g.D.size?g._.push(e):e()))),g.render=((e,t)=>{let n,l,i,s,r,a,c;const p=(i,v,m,b,h,y,w,M,g)=>{if(M=v.vchildren[m],n||(s=!0,"slot"===M.vtag&&(l&&t.ye(b,l+"-s"),M.vchildren?M.Ie=!0:M.Pe=!0)),o(M.vtext))M.t=t.ae(M.vtext);else if(M.Pe)M.t=t.ae("");else{if(y=M.t=u||"svg"===M.vtag?t.$e("http://www.w3.org/2000/svg",M.vtag):t.ge(M.Ie?"slot-fb":M.vtag),e.oe(y)&&e.le.delete(c),u="svg"===M.vtag||"foreignObject"!==M.vtag&&u,f(e,null,M,u),o(l)&&y["s-si"]!==l&&t.ye(y,y["s-si"]=l),M.vchildren)for(h=0;h<M.vchildren.length;++h)(w=p(i,M,h,y))&&t.Ce(y,w);"svg"===M.vtag&&(u=!1)}return M.t["s-hn"]=a,(M.Ie||M.Pe)&&(M.t["s-sr"]=!0,M.t["s-cr"]=r,M.t["s-sn"]=M.vname||"",(g=i&&i.vchildren&&i.vchildren[m])&&g.vtag===M.vtag&&i.t&&d(i.t)),M.t},d=(n,o,l,i)=>{e.pe=!0;const r=t.ce(n);for(l=r.length-1;l>=0;l--)(i=r[l])["s-hn"]!==a&&i["s-ol"]&&(t.je(i),t.fe(y(i),i,h(i)),t.je(i["s-ol"]),i["s-ol"]=null,s=!0),o&&d(i,o);e.pe=!1},v=(e,n,l,i,s,r,f,c)=>{const u=e["s-cr"];for((f=u&&t.de(u)||e).shadowRoot&&t.xe(f)===a&&(f=f.shadowRoot);s<=r;++s)i[s]&&(c=o(i[s].vtext)?t.ae(i[s].vtext):p(null,l,s,e))&&(i[s].t=c,t.fe(f,c,h(n)))},m=(e,n,l,s)=>{for(;n<=l;++n)o(e[n])&&(s=e[n].t,i=!0,s["s-ol"]?t.je(s["s-ol"]):d(s,!0),t.je(s))},b=(e,t)=>e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname),h=e=>e&&e["s-ol"]?e["s-ol"]:e,y=e=>t.de(e["s-ol"]?e["s-ol"]:e),w=(n,l,i)=>{const s=l.t=n.t,r=n.vchildren,a=l.vchildren;u=l.t&&o(t.ne(l.t))&&void 0!==l.t.ownerSVGElement,u="svg"===l.vtag||"foreignObject"!==l.vtag&&u,o(l.vtext)?(i=s["s-cr"])?t.Oe(t.de(i),l.vtext):n.vtext!==l.vtext&&t.Oe(s,l.vtext):("slot"!==l.vtag&&f(e,n,l,u),o(r)&&o(a)?((e,n,l,i,s,r,a,f)=>{let c=0,u=0,M=n.length-1,g=n[0],$=n[M],k=i.length-1,j=i[0],C=i[k];for(;c<=M&&u<=k;)if(null==g)g=n[++c];else if(null==$)$=n[--M];else if(null==j)j=i[++u];else if(null==C)C=i[--k];else if(b(g,j))w(g,j),g=n[++c],j=i[++u];else if(b($,C))w($,C),$=n[--M],C=i[--k];else if(b(g,C))"slot"!==g.vtag&&"slot"!==C.vtag||d(t.de(g.t)),w(g,C),t.fe(e,g.t,t.We($.t)),g=n[++c],C=i[--k];else if(b($,j))"slot"!==g.vtag&&"slot"!==C.vtag||d(t.de($.t)),w($,j),t.fe(e,$.t,g.t),$=n[--M],j=i[++u];else{for(s=null,r=c;r<=M;++r)if(n[r]&&o(n[r].vkey)&&n[r].vkey===j.vkey){s=r;break}o(s)?((f=n[s]).vtag!==j.vtag?a=p(n&&n[u],l,s,e):(w(f,j),n[s]=void 0,a=f.t),j=i[++u]):(a=p(n&&n[u],l,u,e),j=i[++u]),a&&t.fe(y(g.t),a,h(g.t))}c>M?v(e,null==i[k+1]?null:i[k+1].t,l,i,u,k):u>k&&m(n,c,M)})(s,r,l,a):o(a)?(o(n.vtext)&&t.Oe(s,""),v(s,null,l,a,0,a.length-1)):o(r)&&m(r,0,r.length-1)),u&&"svg"===l.vtag&&(u=!1)},M=(e,n,o,l,i,s,r,a)=>{for(l=0,i=(o=t.ce(e)).length;l<i;l++)if(n=o[l],1===t.ve(n)){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,s=0;s<i;s++)if(o[s]["s-hn"]!==n["s-hn"])if(a=t.ve(o[s]),""!==r){if(1===a&&r===t.se(o[s],"slot")){n.hidden=!0;break}}else if(1===a||3===a&&""!==t.Ee(o[s]).trim()){n.hidden=!0;break}M(n)}},g=[],$=(e,n,o,l,s,r,a,f,c,u)=>{for(s=0,r=(n=t.ce(e)).length;s<r;s++){if((o=n[s])["s-sr"]&&(l=o["s-cr"]))for(f=t.ce(t.de(l)),c=o["s-sn"],a=f.length-1;a>=0;a--)(l=f[a])["s-cn"]||l["s-nr"]||l["s-hn"]===o["s-hn"]||((3===(u=t.ve(l))||8===u)&&""===c||1===u&&null===t.se(l,"slot")&&""===c||1===u&&t.se(l,"slot")===c)&&(g.some(e=>e.Fe===l)||(i=!0,l["s-sn"]=c,g.push({He:o,Fe:l})));1===t.ve(o)&&$(o)}};return(o,f,u,p,d,v,m,b,h,y,k,j)=>{if(c=o,a=t.xe(c),r=c["s-cr"],n=p,l=c["s-sc"],s=i=!1,w(f,u),s){for($(u.t),m=0;m<g.length;m++)(b=g[m]).Fe["s-ol"]||((h=t.ae(""))["s-nr"]=b.Fe,t.fe(t.de(b.Fe),b.Fe["s-ol"]=h,b.Fe));for(e.pe=!0,m=0;m<g.length;m++){for(b=g[m],k=t.de(b.He),j=t.We(b.He),h=b.Fe["s-ol"];h=t.Ne(h);)if((y=h["s-nr"])&&y&&y["s-sn"]===b.Fe["s-sn"]&&k===t.de(y)&&(y=t.We(y))&&y&&!y["s-nr"]){j=y;break}(!j&&k!==t.de(b.Fe)||t.We(b.Fe)!==j)&&b.Fe!==j&&(t.je(b.Fe),t.fe(k,b.Fe,j))}e.pe=!1}return i&&M(u.t),g.length=0,u}})(g,b),h["s-ld"]=[],h["s-rn"]=!0,h["s-init"]=(()=>{g.le.set(h,m.loaded=g.B=!0),b.Te(i,"appload",{detail:{namespace:t}})}),c.map(y).forEach(e=>M(e,class extends HTMLElement{})),g.te||h["s-init"](),((e,t,n,o,l,i)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.l(t);if(o)if(e.le.has(t))n(t);else{const o=e.be.get(t)||[];o.push(n),e.be.set(t,o)}return!!o}),l){for(i=l.length-1;i>=0;i--)t.componentOnReady(l[i][0],l[i][1])&&l.splice(i,1);for(i=0;i<o.length;i++)if(!n[o[i]].componentOnReady)return;for(i=0;i<l.length;i++)l[i][1](null);l.length=0}})(g,m,i,i["s-apps"],i["s-cr"]),m.initialized=!0,g})(n,x,w,d,r,h,c);
})(window,document,{},"WvTimelogList","hydrated",[["wv-add-timelog","fv4vcdhm",0,[["datePickr",16],["isBillable",16],["isReplyBoxVisible",16],["isReplyBtnDisabled",16],["loggedOn",16],["minutes",16],["store",4,0,0,0,"store"],["taskBody",16]]],["wv-timelog","fv4vcdhm",0,[["isReplyBoxVisible",16],["isReplyBtnDisabled",16],["post",1],["reloadPostIndex",16],["store",4,0,0,0,"store"]]],["wv-timelog-list","fv4vcdhm",0,[["currentUser",1,0,"current-user",2],["isBillable",1,0,"is-billable",4],["isDebug",1,0,"is-debug",2],["records",1,0,1,2],["relatedRecords",1,0,"related-records",2],["reloadPostIndex",16],["siteRootUrl",1,0,"site-root-url",2],["store",4,0,0,0,"store"]]]]);