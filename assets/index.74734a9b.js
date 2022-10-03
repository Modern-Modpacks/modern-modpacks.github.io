const Re=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const r of u)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(u){const r={};return u.integrity&&(r.integrity=u.integrity),u.referrerpolicy&&(r.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?r.credentials="include":u.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(u){if(u.ep)return;u.ep=!0;const r=l(u);fetch(u.href,r)}};Re();function oe(){}function Ge(e){return e()}function Ce(){return Object.create(null)}function ce(e){e.forEach(Ge)}function Je(e){return typeof e=="function"}function we(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ye;function le(e,t){return ye||(ye=document.createElement("a")),ye.href=t,e===ye.href}function Ve(e){return Object.keys(e).length===0}function a(e,t){e.appendChild(t)}function F(e,t,l){e.insertBefore(t,l||null)}function N(e){e.parentNode.removeChild(e)}function be(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function h(e){return document.createElement(e)}function T(e){return document.createTextNode(e)}function L(){return T(" ")}function Ke(){return T("")}function ge(e,t,l,s){return e.addEventListener(t,l,s),()=>e.removeEventListener(t,l,s)}function n(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function Xe(e){return Array.from(e.childNodes)}function ie(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function R(e,t,l,s){l===null?e.style.removeProperty(t):e.style.setProperty(t,l,s?"important":"")}let pe;function Me(e){pe=e}function et(){if(!pe)throw new Error("Function called outside component initialization");return pe}function tt(e){et().$$.on_mount.push(e)}const he=[],_e=[],Le=[],Ie=[],lt=Promise.resolve();let Ne=!1;function nt(){Ne||(Ne=!0,lt.then(Fe))}function Te(e){Le.push(e)}function We(e){Ie.push(e)}const je=new Set;let ve=0;function Fe(){const e=pe;do{for(;ve<he.length;){const t=he[ve];ve++,Me(t),st(t.$$)}for(Me(null),he.length=0,ve=0;_e.length;)_e.pop()();for(let t=0;t<Le.length;t+=1){const l=Le[t];je.has(l)||(je.add(l),l())}Le.length=0}while(he.length);for(;Ie.length;)Ie.pop()();Ne=!1,je.clear(),Me(e)}function st(e){if(e.fragment!==null){e.update(),ce(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Te)}}const ke=new Set;let te;function at(){te={r:0,c:[],p:te}}function it(){te.r||ce(te.c),te=te.p}function ue(e,t){e&&e.i&&(ke.delete(e),e.i(t))}function ze(e,t,l,s){if(e&&e.o){if(ke.has(e))return;ke.add(e),te.c.push(()=>{ke.delete(e),s&&(l&&e.d(1),s())}),e.o(t)}else s&&s()}const ut=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function $e(e,t,l){const s=e.$$.props[t];s!==void 0&&(e.$$.bound[s]=l,l(e.$$.ctx[s]))}function Ze(e){e&&e.c()}function De(e,t,l,s){const{fragment:u,on_mount:r,on_destroy:o,after_update:m}=e.$$;u&&u.m(t,l),s||Te(()=>{const d=r.map(Ge).filter(Je);o?o.push(...d):ce(d),e.$$.on_mount=[]}),m.forEach(Te)}function Se(e,t){const l=e.$$;l.fragment!==null&&(ce(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function ot(e,t){e.$$.dirty[0]===-1&&(he.push(e),nt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ee(e,t,l,s,u,r,o,m=[-1]){const d=pe;Me(e);const f=e.$$={fragment:null,ctx:null,props:r,update:oe,not_equal:u,bound:Ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:Ce(),dirty:m,skip_bound:!1,root:t.target||d.$$.root};o&&o(f.root);let v=!1;if(f.ctx=l?l(e,t.props||{},(y,b,...z)=>{const D=z.length?z[0]:b;return f.ctx&&u(f.ctx[y],f.ctx[y]=D)&&(!f.skip_bound&&f.bound[y]&&f.bound[y](D),v&&ot(e,y)),b}):[],f.update(),v=!0,ce(f.before_update),f.fragment=s?s(f.ctx):!1,t.target){if(t.hydrate){const y=Xe(t.target);f.fragment&&f.fragment.l(y),y.forEach(N)}else f.fragment&&f.fragment.c();t.intro&&ue(e.$$.fragment),De(e,t.target,t.anchor,t.customElement),Fe()}Me(d)}class Ae{$destroy(){Se(this,1),this.$destroy=oe}$on(t,l){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(l),()=>{const u=s.indexOf(l);u!==-1&&s.splice(u,1)}}$set(t){this.$$set&&!Ve(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ct(e){let t,l,s,u,r,o,m,d,f=e[0].name+"",v,y,b,z,D=e[0].abbr+"",Q,$,Z,g,j=e[0].desc+"",S,re,x,de,G=e[0].difficulty+"",ne,P,H,w,W,J,fe,U,V,K,C,A,me,X,B,O,M,se,q,I;return{c(){t=h("div"),l=h("div"),s=h("div"),u=h("img"),o=L(),m=h("div"),d=h("h1"),v=T(f),y=L(),b=h("h2"),z=T("["),Q=T(D),$=T("]"),Z=L(),g=h("p"),S=T(j),re=L(),x=h("h3"),de=T("Difficulty: "),ne=T(G),P=T("/5"),H=L(),w=h("a"),W=h("img"),fe=L(),U=h("h1"),U.textContent="Download",K=L(),C=h("a"),A=h("img"),X=L(),B=h("h2"),B.textContent="Source",le(u.src,r="/close.svg")||n(u,"src",r),n(u,"alt","button"),n(u,"id","close"),n(u,"class","svelte-nqb06l"),n(s,"id","banner"),R(s,"background-image","url("+e[0].assets.banner+")"),n(s,"class","svelte-nqb06l"),n(d,"class","svelte-nqb06l"),n(b,"class","svelte-nqb06l"),n(g,"class","svelte-nqb06l"),n(x,"class","svelte-nqb06l"),le(W.src,J="https://gist.githubusercontent.com/thecodewarrior/110057b210551c4ecf2c9be6d58ff824/raw/38748511ca1eb5677f009092fb3fcd71cc76cdf0/logo.svg")||n(W,"src",J),n(W,"alt","curseforge"),n(W,"class","svelte-nqb06l"),n(U,"class","svelte-nqb06l"),n(w,"id","download"),n(w,"href",V=e[0].links.cf),n(w,"class","svelte-nqb06l"),le(A.src,me="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg==")||n(A,"src",me),n(A,"alt","github"),n(A,"class","svelte-nqb06l"),n(B,"class","svelte-nqb06l"),n(C,"id","source"),n(C,"href",O=e[0].links.gh),n(C,"class","svelte-nqb06l"),n(m,"id","desc"),n(m,"class","svelte-nqb06l"),n(l,"id","content"),n(l,"class",M=(e[1]?"":"invisable")+" "+(e[2]?"disableanim":"")+" svelte-nqb06l"),n(t,"id","darken"),n(t,"class",se=(e[1]?"":"disabled")+" "+(e[2]?"disableanim":"")+" svelte-nqb06l")},m(k,p){F(k,t,p),a(t,l),a(l,s),a(s,u),a(l,o),a(l,m),a(m,d),a(d,v),a(m,y),a(m,b),a(b,z),a(b,Q),a(b,$),a(m,Z),a(m,g),a(g,S),a(m,re),a(m,x),a(x,de),a(x,ne),a(x,P),a(m,H),a(m,w),a(w,W),a(w,fe),a(w,U),a(m,K),a(m,C),a(C,A),a(C,X),a(C,B),q||(I=ge(u,"click",e[3]),q=!0)},p(k,[p]){p&1&&R(s,"background-image","url("+k[0].assets.banner+")"),p&1&&f!==(f=k[0].name+"")&&ie(v,f),p&1&&D!==(D=k[0].abbr+"")&&ie(Q,D),p&1&&j!==(j=k[0].desc+"")&&ie(S,j),p&1&&G!==(G=k[0].difficulty+"")&&ie(ne,G),p&1&&V!==(V=k[0].links.cf)&&n(w,"href",V),p&1&&O!==(O=k[0].links.gh)&&n(C,"href",O),p&6&&M!==(M=(k[1]?"":"invisable")+" "+(k[2]?"disableanim":"")+" svelte-nqb06l")&&n(l,"class",M),p&6&&se!==(se=(k[1]?"":"disabled")+" "+(k[2]?"disableanim":"")+" svelte-nqb06l")&&n(t,"class",se)},i:oe,o:oe,d(k){k&&N(t),q=!1,I()}}}function rt(e,t,l){let{modpack:s}=t,u,r=!1;function o(d=!1){document.body.id="noscroll",d&&l(2,r=!0),l(1,u=!0),localStorage.setItem("popup",s.name)}function m(){document.body.id="",l(2,r=!1),l(1,u=!1),localStorage.removeItem("popup")}return e.$$set=d=>{"modpack"in d&&l(0,s=d.modpack)},[s,u,r,m,o]}class dt extends Ae{constructor(t){super(),Ee(this,t,rt,ct,we,{modpack:0,activate:4})}get activate(){return this.$$.ctx[4]}}function ft(e){let t,l,s,u,r,o,m=(e[1].name!=null?e[1].name:"???")+"",d,f,v,y,b,z,D,Q;function $(g){e[8](g)}let Z={modpack:e[1]};return e[0]!==void 0&&(Z.activate=e[0]),y=new dt({props:Z}),_e.push(()=>$e(y,"activate",$)),{c(){t=h("div"),l=h("div"),s=h("img"),r=L(),o=h("h1"),d=T(m),v=L(),Ze(y.$$.fragment),n(s,"draggable","false"),R(s,"--mask","url(/masks/"+(e[4]?e[2]:"null")+(e[3]?"inverted":"")+".png)"),le(s.src,u="https://github.com/Modern-Modpacks/assets/raw/main/FG.png")||n(s,"src",u),n(s,"alt","foreground"),n(s,"class","svelte-1vicp6x"),n(l,"id","logo"),R(l,"background-image","url(https://github.com/Modern-Modpacks/assets/raw/main/BG/"+("0"+(e[2]+1)).slice(-2)+e[1].color+".png)"),n(l,"class","svelte-1vicp6x"),n(o,"class","svelte-1vicp6x"),n(t,"id","wrap"),n(t,"title",f=e[4]?e[1].shortdesc:""),R(t,"cursor",e[4]?"pointer":"not-allowed"),n(t,"class","svelte-1vicp6x")},m(g,j){F(g,t,j),a(t,l),a(l,s),a(t,r),a(t,o),a(o,d),F(g,v,j),De(y,g,j),z=!0,D||(Q=[ge(l,"mouseover",e[5]),ge(l,"mouseleave",e[6]),ge(t,"click",e[7])],D=!0)},p(g,[j]){(!z||j&12)&&R(s,"--mask","url(/masks/"+(g[4]?g[2]:"null")+(g[3]?"inverted":"")+".png)"),(!z||j&6)&&R(l,"background-image","url(https://github.com/Modern-Modpacks/assets/raw/main/BG/"+("0"+(g[2]+1)).slice(-2)+g[1].color+".png)"),(!z||j&2)&&m!==(m=(g[1].name!=null?g[1].name:"???")+"")&&ie(d,m),(!z||j&2&&f!==(f=g[4]?g[1].shortdesc:""))&&n(t,"title",f);const S={};j&2&&(S.modpack=g[1]),!b&&j&1&&(b=!0,S.activate=g[0],We(()=>b=!1)),y.$set(S)},i(g){z||(ue(y.$$.fragment,g),z=!0)},o(g){ze(y.$$.fragment,g),z=!1},d(g){g&&N(t),g&&N(v),Se(y,g),D=!1,ce(Q)}}}function mt(e,t,l){let{modpack:s}=t,{index:u}=t,{click:r}=t;const o=s.name!=null;let m=!0;const d=()=>{o&&l(3,m=!1)},f=()=>{o&&l(3,m=!0)},v=()=>{o&&r()};function y(b){r=b,l(0,r)}return e.$$set=b=>{"modpack"in b&&l(1,s=b.modpack),"index"in b&&l(2,u=b.index),"click"in b&&l(0,r=b.click)},[r,s,u,m,o,d,f,v,y]}class ht extends Ae{constructor(t){super(),Ee(this,t,mt,ft,we,{modpack:1,index:2,click:0})}}var Oe=["Welcome!","The last good version!","Hi mom!","Made for shits and giggles!","Minecraft: Badrock Edition","r/feedthememes approved!","1.16.5 ftw!","Expert ftw!","FOSS ftw!","Linux ftw!","I gregor \u{1F480}","Kid named Vazkii:","RLCraft sucks!","OptiFine sucks!","Biomes O' Plenty sucks!","PneumaticCraft sucks!","1.12.2 sucks!","1.7.10 sucks!","1.18.2 sucks!","Not made by the Enigmatica Team","How about you Create some bitches?","Thaumcraft 1.16.5 when","Checkout r/feedthebeast_r34!","Also try Factorio!","This post has been removed by the moderators of r/minecraft","This message will never appear on the splash screen... shit.","Kitchen stinks!","Shit reporting feature!","I use arch btw!","splash splash splosh splosh","Better Call Greg!","This is the biggest splash, just like your mom. OOOOOOOOOOOOHHHHHHHHHHHHH","sudo rm -rf /*","THE GREGTECH IS REEEEAL!","Use Rubidium!","4K 120fps!","Trans rights!","It was all in le head!","People's packs!","Botania is a tech mod!","FeedThemBleach","CBT stands for Connected Block Texutres","I am living in your walls.","-0_0","We don't stream on twitch.","Made with vite+svelte!","Made with html, css and javascript!","Made with KubeJS!","Made with Java!","Kotlin > Java","Quilt > Fabric","<3","u/thaboar check it out!","We did it reddit","Ancient Modpacks","/src/json/splashes.json","Modpack x16","Create is like modern gregtech!","_jeb","Flux rift is from Botania, trust me.","When the dementia hits:When the dementia hits:When the dementia hits:","Press alt+F4 for a free cookie!","This website requires cookies and you will accept them.","ur computer has a virus","(almost) All the mods!","When the greg is tech! \u{1F633}","Not anti-fun!","Full of easter (gr)eggs!","Made with grandma's recipe!","I live in a compact machine!","Give us money!","Stay hydrated!","[deleted]","[removed]","[redacted]","Funny"],gt=[{name:null,abbr:null,shortdesc:null,desc:null,difficulty:null,color:"red",assets:{banner:null},links:{cf:null,gh:null}},{name:null,abbr:null,shortdesc:null,desc:null,difficulty:null,color:"orange",assets:{banner:null},links:{cf:null,gh:null}},{name:null,abbr:null,shortdesc:null,desc:null,difficulty:null,color:"yellow",assets:{banner:null},links:{cf:null,gh:null}},{name:null,abbr:null,shortdesc:null,desc:null,difficulty:null,color:"green",assets:{banner:null},links:{cf:null,gh:null}},{name:null,abbr:null,shortdesc:null,desc:null,difficulty:null,color:"lime",assets:{banner:null},links:{cf:null,gh:null}},{name:null,abbr:null,shortdesc:null,desc:null,difficulty:null,color:"lightblue",assets:{banner:null},links:{cf:null,gh:null}},{name:null,abbr:null,shortdesc:null,desc:null,difficulty:null,color:"cyan",assets:{banner:null},links:{cf:null,gh:null}},{name:null,abbr:null,shortdesc:null,desc:null,difficulty:null,color:"blue",assets:{banner:null},links:{cf:null,gh:null}},{name:null,abbr:null,shortdesc:null,desc:null,difficulty:null,color:"purple",assets:{banner:null},links:{cf:null,gh:null}},{name:null,abbr:null,shortdesc:null,desc:null,difficulty:null,color:"magenta",assets:{banner:null},links:{cf:null,gh:null}},{name:null,abbr:null,shortdesc:null,desc:null,difficulty:null,color:"pink",assets:{banner:null},links:{cf:null,gh:null}},{name:null,abbr:null,shortdesc:null,desc:null,difficulty:null,color:"gray",assets:{banner:null},links:{cf:null,gh:null}},{name:null,abbr:null,shortdesc:null,desc:null,difficulty:null,color:"lightgray",assets:{banner:null},links:{cf:null,gh:null}},{name:null,abbr:null,shortdesc:null,desc:null,difficulty:null,color:"white",assets:{banner:null},links:{cf:null,gh:null}},{name:null,abbr:null,shortdesc:null,desc:null,difficulty:null,color:"black",assets:{banner:null},links:{cf:null,gh:null}},{name:null,abbr:null,shortdesc:null,desc:null,difficulty:null,color:"brown",assets:{banner:null},links:{cf:null,gh:null}}];const{document:ee}=ut;function Qe(e,t,l){const s=e.slice();return s[6]=t[l],s}function xe(e,t,l){const s=e.slice();return s[9]=t[l],s}function He(e,t,l){const s=e.slice();return s[12]=t[l],s}function Ue(e,t,l){const s=e.slice();return s[15]=t[l],s[16]=t,s[17]=l,s}function Ye(e){let t,l,s;function u(o){e[4](o,e[15])}let r={modpack:e[15][1],index:e[15][0]};return e[1][e[15][1].name]!==void 0&&(r.click=e[1][e[15][1].name]),t=new ht({props:r}),_e.push(()=>$e(t,"click",u)),{c(){Ze(t.$$.fragment)},m(o,m){De(t,o,m),s=!0},p(o,m){e=o;const d={};!l&&m&6&&(l=!0,d.click=e[1][e[15][1].name],We(()=>l=!1)),t.$set(d)},i(o){s||(ue(t.$$.fragment,o),s=!0)},o(o){ze(t.$$.fragment,o),s=!1},d(o){Se(t,o)}}}function Pe(e){let t,l=e[12]+1+"",s,u,r=["Vanila+","Casual","Harder","Professional","Extreme"][e[12]]+"",o,m;return{c(){t=h("h2"),s=T(l),u=T(" ("),o=T(r),m=T(")"),n(t,"class","svelte-14uz4m3")},m(d,f){F(d,t,f),a(t,s),a(t,u),a(t,o),a(t,m)},p:oe,d(d){d&&N(t)}}}function Mt(e){let t,l,s,u;function r(){return e[5](e[9])}return{c(){t=h("img"),n(t,"title",e[9][1].name),R(t,"grid-row",10-Math.round((e[9][1].difficulty-.5)*2)),le(t.src,l="https://raw.githubusercontent.com/Modern-Modpacks/assets/main/icons/"+("0"+(e[9][0]+1)).slice(-2)+e[9][1].color+"_"+e[9][1].abbr+".png")||n(t,"src",l),n(t,"alt","icon"),n(t,"class","svelte-14uz4m3")},m(o,m){F(o,t,m),s||(u=ge(t,"click",r),s=!0)},p(o,m){e=o},d(o){o&&N(t),s=!1,u()}}}function Be(e){let t,l=e[9][1].name!=null&&Mt(e);return{c(){l&&l.c(),t=Ke()},m(s,u){l&&l.m(s,u),F(s,t,u)},p(s,u){s[9][1].name!=null&&l.p(s,u)},d(s){l&&l.d(s),s&&N(t)}}}function qe(e){let t,l,s,u;return{c(){t=h("a"),l=h("img"),u=L(),le(l.src,s=e[6].img)||n(l,"src",s),n(l,"alt",e[6].title),n(l,"title",e[6].title),n(l,"draggable","false"),n(l,"class","svelte-14uz4m3"),n(t,"href",e[6].url),n(t,"draggable","false"),n(t,"class","svelte-14uz4m3")},m(r,o){F(r,t,o),a(t,l),a(t,u)},p:oe,d(r){r&&N(t)}}}function pt(e){let t,l,s,u,r,o,m,d,f,v,y,b,z,D,Q,$,Z,g,j,S,re,x,de,G,ne,P,H,w,W,J,fe,U,V,K,C,A,me,X,B,O=e[2],M=[];for(let c=0;c<O.length;c+=1)M[c]=Ye(Ue(e,O,c));const se=c=>ze(M[c],1,1,()=>{M[c]=null});let q=Array.from(Array(5).keys()).reverse(),I=[];for(let c=0;c<q.length;c+=1)I[c]=Pe(He(e,q,c));let k=e[2],p=[];for(let c=0;c<k.length;c+=1)p[c]=Be(xe(e,k,c));let ae=e[3],E=[];for(let c=0;c<ae.length;c+=1)E[c]=qe(Qe(e,ae,c));return{c(){t=h("link"),l=h("meta"),s=h("meta"),u=h("meta"),r=h("meta"),o=h("meta"),m=L(),d=h("main"),f=h("div"),v=h("img"),b=L(),z=h("h1"),z.textContent="Modern Modpacks",D=L(),Q=h("h2"),$=T(e[0]),Z=L(),g=h("div"),g.innerHTML='<h1 class="svelte-14uz4m3">Modern Modpacks makes expert modpacks for 1.16.5</h1>',j=L(),S=h("div");for(let c=0;c<M.length;c+=1)M[c].c();re=L(),x=h("div"),x.innerHTML=`<h1 class="svelte-14uz4m3">Q&amp;A</h1> 
        <p class="svelte-14uz4m3">Q: Why not the latest version?
            <b class="svelte-14uz4m3">A: We belive that people should stop hopping from version to version and stick to one LTS release.</b>
            
            Q: Why not 1.19.2?
            <b class="svelte-14uz4m3">A: The chat reporting feature is a deal breaker for us. We won&#39;t ever update past 1.19</b>

            Q: Why not 1.18.2?
            <b class="svelte-14uz4m3">A: 1.18 is not optimized as much as 1.16.5, even with performance mods.</b>

            Q: Why not 1.12.2?
            <b class="svelte-14uz4m3">A: 1.12.2 was released back in 2017 and has lived long enough to be replaced with something more new,
            like 1.16.5 which was released in 2020!</b>

            Q: Why not 1.7.10?
            <b class="svelte-14uz4m3">A: bruh.</b>

            Q: Why expert and not kitchen sinks?
            <b class="svelte-14uz4m3">A: While kitchen sinks can be fun in their own way, experts are in many cases more fun to play.</b>

            Q: How many modpacks will there be?
            <b class="svelte-14uz4m3">A: We plan on making 16 modpacks, each with their own theme and challenge.
               Each modpack is based on a single minecraft dye color, so that&#39;s why there are 16 of them!</b>
        
            Q: How can I help?
            <b class="svelte-14uz4m3">A: If you want to help us make modpacks you can open an issue/pr on our
               GitHub, or if you REALLY want to help us, contact G_cat#2267 on discord
               or send us an email and become a member of Modern Modpacks!</b>

            Q: Fabric/Quilt?
            <b class="svelte-14uz4m3">A: Maybe someday. But we&#39;re only forge for now.</b></p>`,de=L(),G=h("div"),G.innerHTML='<h1 class="svelte-14uz4m3">Difficulty</h1>',ne=L(),P=h("div"),H=h("div"),w=h("div");for(let c=0;c<I.length;c+=1)I[c].c();W=L(),J=h("div"),fe=L(),U=h("div");for(let c=0;c<p.length;c+=1)p[c].c();V=L(),K=h("p"),K.innerHTML=`<b class="svelte-14uz4m3">Difficulty</b> does NOT mean how tedious and un-fun the modpack is, all it means is how much previous modded experience you should have to play the modpack and not get confused.
        
            <b class="svelte-14uz4m3">1 (Vanila+)</b> - Easy vanila+ modpack, the only experience you need to have is playing basic minecraft. FTB Chocolate and other vanila+ packs would be rated like this.

            <b class="svelte-14uz4m3">2 (Casual)</b> - If you&#39;re a beginner, start with these modpacks. Easy to understand but not as lightweight as Vanila+ modpacks. Create: Above and Beyond is a modpack that comes to mind.

            <b class="svelte-14uz4m3">3 (Harder)</b> - A typical expert experience. Something like Enigmatica 6/2 Expert and Not Too Complicated 1/2 would qualify as this. 
        
            <b class="svelte-14uz4m3">4 (Professional)</b> - These modpacks are somewhat hard to understand, but once you get how they work, you can get through them pretty easily. Divine Journey 1/2 would be the best comparison here.

            <b class="svelte-14uz4m3">5 (Extreme)</b> - The hardest difficulty of modpacks. If you like a challenge, try one of these. RLCraft and Gregtech: New Horizons are some of the examples of difficulty 5.`,C=L(),A=h("div");for(let c=0;c<E.length;c+=1)E[c].c();me=L(),X=h("h4"),X.textContent="greg",ee.title="Modern Modpacks",n(t,"rel","shortcut icon"),n(t,"href","https://avatars.githubusercontent.com/u/112729506?s=200&v=4"),n(t,"type","image/x-icon"),n(t,"class","svelte-14uz4m3"),n(l,"property","og:title"),n(l,"content","Modern Modpacks"),n(l,"class","svelte-14uz4m3"),n(s,"property","og:description"),n(s,"content","Making 1.16.5 expert modpacks circa 2022."),n(s,"class","svelte-14uz4m3"),n(u,"property","og:url"),n(u,"content","https://www.modernmodpacks.site"),n(u,"class","svelte-14uz4m3"),n(r,"property","og:image"),n(r,"content","https://avatars.githubusercontent.com/u/112729506?s=200&v=4"),n(r,"class","svelte-14uz4m3"),n(o,"content","#000000"),n(o,"data-react-helmet","true"),n(o,"name","theme-color"),n(o,"class","svelte-14uz4m3"),le(v.src,y="https://avatars.githubusercontent.com/u/112729506?s=200&v=4")||n(v,"src",y),n(v,"alt","logo"),n(v,"id","logo"),n(v,"draggable","false"),n(v,"class","svelte-14uz4m3"),n(z,"class","svelte-14uz4m3"),n(Q,"class","svelte-14uz4m3"),n(f,"id","banner"),n(f,"class","svelte-14uz4m3"),n(g,"class","svelte-14uz4m3"),n(S,"id","modpacks"),n(S,"class","svelte-14uz4m3"),n(x,"class","svelte-14uz4m3"),n(G,"class","svelte-14uz4m3"),n(w,"class","svelte-14uz4m3"),n(J,"id","scale"),n(J,"class","svelte-14uz4m3"),n(U,"id","icons"),n(U,"class","svelte-14uz4m3"),n(H,"class","svelte-14uz4m3"),n(K,"class","svelte-14uz4m3"),n(P,"id","difficulty"),n(P,"class","svelte-14uz4m3"),n(A,"id","socials"),n(A,"class","svelte-14uz4m3"),n(X,"class","svelte-14uz4m3"),n(d,"class","svelte-14uz4m3")},m(c,_){a(ee.head,t),a(ee.head,l),a(ee.head,s),a(ee.head,u),a(ee.head,r),a(ee.head,o),F(c,m,_),F(c,d,_),a(d,f),a(f,v),a(f,b),a(f,z),a(f,D),a(f,Q),a(Q,$),a(d,Z),a(d,g),a(d,j),a(d,S);for(let i=0;i<M.length;i+=1)M[i].m(S,null);a(d,re),a(d,x),a(d,de),a(d,G),a(d,ne),a(d,P),a(P,H),a(H,w);for(let i=0;i<I.length;i+=1)I[i].m(w,null);a(H,W),a(H,J),a(H,fe),a(H,U);for(let i=0;i<p.length;i+=1)p[i].m(U,null);a(P,V),a(P,K),a(d,C),a(d,A);for(let i=0;i<E.length;i+=1)E[i].m(A,null);a(d,me),a(d,X),B=!0},p(c,[_]){if((!B||_&1)&&ie($,c[0]),_&6){O=c[2];let i;for(i=0;i<O.length;i+=1){const Y=Ue(c,O,i);M[i]?(M[i].p(Y,_),ue(M[i],1)):(M[i]=Ye(Y),M[i].c(),ue(M[i],1),M[i].m(S,null))}for(at(),i=O.length;i<M.length;i+=1)se(i);it()}if(_&0){q=Array.from(Array(5).keys()).reverse();let i;for(i=0;i<q.length;i+=1){const Y=He(c,q,i);I[i]?I[i].p(Y,_):(I[i]=Pe(Y),I[i].c(),I[i].m(w,null))}for(;i<I.length;i+=1)I[i].d(1);I.length=q.length}if(_&6){k=c[2];let i;for(i=0;i<k.length;i+=1){const Y=xe(c,k,i);p[i]?p[i].p(Y,_):(p[i]=Be(Y),p[i].c(),p[i].m(U,null))}for(;i<p.length;i+=1)p[i].d(1);p.length=k.length}if(_&8){ae=c[3];let i;for(i=0;i<ae.length;i+=1){const Y=Qe(c,ae,i);E[i]?E[i].p(Y,_):(E[i]=qe(Y),E[i].c(),E[i].m(A,null))}for(;i<E.length;i+=1)E[i].d(1);E.length=ae.length}},i(c){if(!B){for(let _=0;_<O.length;_+=1)ue(M[_]);B=!0}},o(c){M=M.filter(Boolean);for(let _=0;_<M.length;_+=1)ze(M[_]);B=!1},d(c){N(t),N(l),N(s),N(u),N(r),N(o),c&&N(m),c&&N(d),be(M,c),be(I,c),be(p,c),be(E,c)}}}function yt(e,t,l){const s=Array.from(gt.entries()),u=[{title:"Discord",url:"https://discord.gg/ZTTw4J6aYu",img:"https://www.svgrepo.com/show/353655/discord-icon.svg"},{title:"GitHub",url:"https://github.com/Modern-Modpacks",img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg=="},{title:"CurseForge",url:"https://www.curseforge.com/members/modernmodpacks",img:"https://gist.githubusercontent.com/thecodewarrior/110057b210551c4ecf2c9be6d58ff824/raw/38748511ca1eb5677f009092fb3fcd71cc76cdf0/logo.svg"},{title:"YouTube",url:"https://www.youtube.com/channel/UCgfqMIZPXL64d7HDhM8_Dfg",img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkuNjE1IDMuMTg0Yy0zLjYwNC0uMjQ2LTExLjYzMS0uMjQ1LTE1LjIzIDAtMy44OTcuMjY2LTQuMzU2IDIuNjItNC4zODUgOC44MTYuMDI5IDYuMTg1LjQ4NCA4LjU0OSA0LjM4NSA4LjgxNiAzLjYuMjQ1IDExLjYyNi4yNDYgMTUuMjMgMCAzLjg5Ny0uMjY2IDQuMzU2LTIuNjIgNC4zODUtOC44MTYtLjAyOS02LjE4NS0uNDg0LTguNTQ5LTQuMzg1LTguODE2em0tMTAuNjE1IDEyLjgxNnYtOGw4IDMuOTkzLTggNC4wMDd6Ii8+PC9zdmc+"},{title:"E-Mail",url:"mailto:info@modernmodpacks.site",img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMTIuNzEzbC0xMS45ODUtOS43MTNoMjMuOTcxbC0xMS45ODYgOS43MTN6bS01LjQyNS0xLjgyMmwtNi41NzUtNS4zMjl2MTIuNTAxbDYuNTc1LTcuMTcyem0xMC44NSAwbDYuNTc1IDcuMTcydi0xMi41MDFsLTYuNTc1IDUuMzI5em0tMS41NTcgMS4yNjFsLTMuODY4IDMuMTM1LTMuODY4LTMuMTM1LTguMTEgOC44NDhoMjMuOTU2bC04LjExLTguODQ4eiIvPjwvc3ZnPg=="}];let r=null,o={};tt(()=>{if(window.scrollY==0&&localStorage.getItem("popup")==null)document.body.id="noscroll",setTimeout(()=>{document.body.id=""},2e3),localStorage.getItem("splash")!=null&&l(0,r=Oe[Math.floor(Math.random()*Oe.length)]);else{document.getElementById("banner").style.animation="none";for(const f of document.getElementById("banner").children)f.style.animation="none";l(0,r=localStorage.getItem("splash")),localStorage.getItem("popup")!=null&&o[localStorage.getItem("popup")](!0)}r==null&&l(0,r="Welcome!"),localStorage.setItem("splash",r)});function m(f,v){e.$$.not_equal(o[v[1].name],f)&&(o[v[1].name]=f,l(1,o))}return[r,o,s,u,m,f=>{o[f[1].name]()}]}class bt extends Ae{constructor(t){super(),Ee(this,t,yt,pt,we,{})}}new bt({target:document.getElementById("app")});
