import{S as T,i as F,s as G,j as H,m as J,o as L,x as w,u as C,v as M,t as V,e as E,k as g,g as $,c as q,a as S,d as _,n as j,b as h,f as P,D as y,E as A,F as U,l as z,L as W,M as X,N as Y,G as Z,O as x,H as ee,I as te,J as le,y as se,P as ae,C as ne}from"../../chunks/vendor-bee86594.js";import{S as ie}from"../../chunks/Sidebar-150425ce.js";function K(n,t,e){const a=n.slice();return a[7]=t[e],a[9]=e,a}function Q(n){let t,e,a,d,f,u,c,m,b,i,r=n[2].examples,s=[];for(let l=0;l<r.length;l+=1)s[l]=R(K(n,r,l));return{c(){t=V(`Input:
        `),e=E("div"),a=E("p"),d=V("Actual"),u=g();for(let l=0;l<s.length;l+=1)s[l].c();c=g(),m=E("div"),this.h()},l(l){t=$(l,`Input:
        `),e=q(l,"DIV",{class:!0});var p=S(e);a=q(p,"P",{});var v=S(a);d=$(v,"Actual"),v.forEach(_),p.forEach(_),u=j(l);for(let D=0;D<s.length;D+=1)s[D].l(l);c=j(l),m=q(l,"DIV",{class:!0}),S(m).forEach(_),this.h()},h(){h(e,"class",f=""+((n[1]==0?"selected":"")+" selectable svelte-knftqo")),h(m,"class","svelte-knftqo")},m(l,p){P(l,t,p),P(l,e,p),y(e,a),y(a,d),P(l,u,p);for(let v=0;v<s.length;v+=1)s[v].m(l,p);P(l,c,p),P(l,m,p),b||(i=A(e,"click",n[5]),b=!0)},p(l,p){if(p&2&&f!==(f=""+((l[1]==0?"selected":"")+" selectable svelte-knftqo"))&&h(e,"class",f),p&6){r=l[2].examples;let v;for(v=0;v<r.length;v+=1){const D=K(l,r,v);s[v]?s[v].p(D,p):(s[v]=R(D),s[v].c(),s[v].m(c.parentNode,c))}for(;v<s.length;v+=1)s[v].d(1);s.length=r.length}},d(l){l&&_(t),l&&_(e),l&&_(u),U(s,l),l&&_(c),l&&_(m),b=!1,i()}}}function R(n){let t,e,a,d=n[9]+1+"",f,u,c,m;function b(){return n[6](n[9])}return{c(){t=E("div"),e=E("p"),a=V("Test\xA0"),f=V(d),this.h()},l(i){t=q(i,"DIV",{class:!0});var r=S(t);e=q(r,"P",{});var s=S(e);a=$(s,"Test\xA0"),f=$(s,d),s.forEach(_),r.forEach(_),this.h()},h(){h(t,"class",u=""+((n[1]==n[9]+1?"selected":"")+" selectable svelte-knftqo"))},m(i,r){P(i,t,r),y(t,e),y(e,a),y(e,f),c||(m=A(t,"click",b),c=!0)},p(i,r){n=i,r&2&&u!==(u=""+((n[1]==n[9]+1?"selected":"")+" selectable svelte-knftqo"))&&h(t,"class",u)},d(i){i&&_(t),c=!1,m()}}}function oe(n){let t,e,a,d,f,u,c,m,b,i,r,s,l,p,v,D,k=n[2]&&Q(n);return{c(){t=V(`Part:
    `),e=E("a"),a=E("p"),d=V("Part\xA01"),u=g(),c=E("a"),m=E("p"),b=V("Part\xA02"),r=g(),s=E("div"),l=g(),k&&k.c(),p=z(),this.h()},l(o){t=$(o,`Part:
    `),e=q(o,"A",{class:!0,href:!0});var I=S(e);a=q(I,"P",{});var N=S(a);d=$(N,"Part\xA01"),N.forEach(_),I.forEach(_),u=j(o),c=q(o,"A",{class:!0,href:!0});var B=S(c);m=q(B,"P",{});var O=S(m);b=$(O,"Part\xA02"),O.forEach(_),B.forEach(_),r=j(o),s=q(o,"DIV",{class:!0}),S(s).forEach(_),l=j(o),k&&k.l(o),p=z(),this.h()},h(){h(e,"class",f=""+((n[0]==1?"selected":"")+" selectable svelte-knftqo")),h(e,"href","part1"),h(c,"class",i=""+((n[0]==2?"selected":"")+" selectable svelte-knftqo")),h(c,"href","part2"),h(s,"class","svelte-knftqo")},m(o,I){P(o,t,I),P(o,e,I),y(e,a),y(a,d),P(o,u,I),P(o,c,I),y(c,m),y(m,b),P(o,r,I),P(o,s,I),P(o,l,I),k&&k.m(o,I),P(o,p,I),v||(D=[A(e,"click",n[3]),A(c,"click",n[4])],v=!0)},p(o,I){I&1&&f!==(f=""+((o[0]==1?"selected":"")+" selectable svelte-knftqo"))&&h(e,"class",f),I&1&&i!==(i=""+((o[0]==2?"selected":"")+" selectable svelte-knftqo"))&&h(c,"class",i),o[2]?k?k.p(o,I):(k=Q(o),k.c(),k.m(p.parentNode,p)):k&&(k.d(1),k=null)},d(o){o&&_(t),o&&_(e),o&&_(u),o&&_(c),o&&_(r),o&&_(s),o&&_(l),k&&k.d(o),o&&_(p),v=!1,W(D)}}}function ce(n){let t,e;return t=new ie({props:{$$slots:{default:[oe]},$$scope:{ctx:n}}}),{c(){H(t.$$.fragment)},l(a){J(t.$$.fragment,a)},m(a,d){L(t,a,d),e=!0},p(a,[d]){const f={};d&1031&&(f.$$scope={dirty:d,ctx:a}),t.$set(f)},i(a){e||(w(t.$$.fragment,a),e=!0)},o(a){C(t.$$.fragment,a),e=!1},d(a){M(t,a)}}}function re(n,t,e){let{solution:a}=t,{selectedPart:d=1}=t,{selectedInput:f=1}=t;const u=()=>e(0,d=1),c=()=>e(0,d=2),m=()=>e(1,f=0),b=i=>e(1,f=i+1);return n.$$set=i=>{"solution"in i&&e(2,a=i.solution),"selectedPart"in i&&e(0,d=i.selectedPart),"selectedInput"in i&&e(1,f=i.selectedInput)},[d,f,a,u,c,m,b]}class fe extends T{constructor(t){super();F(this,t,re,ce,G,{solution:2,selectedPart:0,selectedInput:1})}}function ue(n){let t,e,a,d,f,u,c;function m(s){n[4](s)}let b={solution:n[0]};n[1]!==void 0&&(b.selectedInput=n[1]),a=new fe({props:b}),X.push(()=>Y(a,"selectedInput",m));const i=n[3].default,r=Z(i,n,n[2],null);return{c(){t=E("div"),e=E("div"),H(a.$$.fragment),f=g(),u=E("div"),r&&r.c(),this.h()},l(s){t=q(s,"DIV",{id:!0,class:!0});var l=S(t);e=q(l,"DIV",{id:!0,class:!0});var p=S(e);J(a.$$.fragment,p),p.forEach(_),f=j(l),u=q(l,"DIV",{id:!0,class:!0});var v=S(u);r&&r.l(v),v.forEach(_),l.forEach(_),this.h()},h(){h(e,"id","sidebar"),h(e,"class","svelte-1s0939y"),h(u,"id","content"),h(u,"class","svelte-1s0939y"),h(t,"id","main-grid"),h(t,"class","svelte-1s0939y")},m(s,l){P(s,t,l),y(t,e),L(a,e,null),y(t,f),y(t,u),r&&r.m(u,null),c=!0},p(s,[l]){const p={};l&1&&(p.solution=s[0]),!d&&l&2&&(d=!0,p.selectedInput=s[1],x(()=>d=!1)),a.$set(p),r&&r.p&&(!c||l&4)&&ee(r,i,s,s[2],c?le(i,s[2],l,null):te(s[2]),null)},i(s){c||(w(a.$$.fragment,s),w(r,s),c=!0)},o(s){C(a.$$.fragment,s),C(r,s),c=!1},d(s){s&&_(t),M(a),r&&r.d(s)}}}function _e(n,t,e){let{$$slots:a={},$$scope:d}=t,f,u,c=ne(),m=c.subscribe(i=>{e(0,f=i)});se("solutionObject",c),ae(()=>{m()});function b(i){u=i,e(1,u)}return n.$$set=i=>{"$$scope"in i&&e(2,d=i.$$scope)},[f,u,d,a,b]}class ve extends T{constructor(t){super();F(this,t,_e,ue,G,{})}}export{ve as default};