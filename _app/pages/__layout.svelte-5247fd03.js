import{S as V,i as j,s as B,j as C,m as q,o as N,x as S,u as A,v as F,e as p,t as G,k,c as b,a as g,g as H,d as _,n as D,b as h,f as $,D as v,E as W,l as E,F as z,G as L,H as M,I as O,J as Q,K as R}from"../chunks/vendor-bd031b77.js";import{S as T}from"../chunks/Sidebar-57637be2.js";function J(r,e,l){const t=r.slice();return t[3]=e[l],t[5]=l,t}function K(r){let e,l,t=("00"+(r[5]+1)).slice(-2)+"",o,c,a,n,f,s;function m(){return r[2](r[5])}return{c(){e=p("a"),l=p("p"),o=G(t),c=k(),this.h()},l(d){e=b(d,"A",{class:!0,href:!0});var i=g(e);l=b(i,"P",{});var u=g(l);o=H(u,t),u.forEach(_),c=D(i),i.forEach(_),this.h()},h(){h(e,"class",a=""+((r[0]==r[5]+1?"selected":"")+" selectable svelte-11wb1lh")),h(e,"href",n="/aoc2021/day"+("00"+(r[5]+1)).slice(-2)+"/part1")},m(d,i){$(d,e,i),v(e,l),v(l,o),v(e,c),f||(s=W(e,"click",m),f=!0)},p(d,i){r=d,i&1&&a!==(a=""+((r[0]==r[5]+1?"selected":"")+" selectable svelte-11wb1lh"))&&h(e,"class",a)},d(d){d&&_(e),f=!1,s()}}}function U(r){let e,l,t,o,c=r[1],a=[];for(let n=0;n<c.length;n+=1)a[n]=K(J(r,c,n));return{c(){e=p("div"),l=G("Days:"),t=k();for(let n=0;n<a.length;n+=1)a[n].c();o=E()},l(n){e=b(n,"DIV",{});var f=g(e);l=H(f,"Days:"),f.forEach(_),t=D(n);for(let s=0;s<a.length;s+=1)a[s].l(n);o=E()},m(n,f){$(n,e,f),v(e,l),$(n,t,f);for(let s=0;s<a.length;s+=1)a[s].m(n,f);$(n,o,f)},p(n,f){if(f&1){c=n[1];let s;for(s=0;s<c.length;s+=1){const m=J(n,c,s);a[s]?a[s].p(m,f):(a[s]=K(m),a[s].c(),a[s].m(o.parentNode,o))}for(;s<a.length;s+=1)a[s].d(1);a.length=c.length}},d(n){n&&_(e),n&&_(t),z(a,n),n&&_(o)}}}function X(r){let e,l;return e=new T({props:{$$slots:{default:[U]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,o){N(e,t,o),l=!0},p(t,[o]){const c={};o&65&&(c.$$scope={dirty:o,ctx:t}),e.$set(c)},i(t){l||(S(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){F(e,t)}}}function Y(r,e,l){let t=[...Array(25)],{selected:o=1}=e;const c=a=>l(0,o=a+1);return r.$$set=a=>{"selected"in a&&l(0,o=a.selected)},[o,t,c]}class Z extends V{constructor(e){super();j(this,e,Y,X,B,{selected:0})}}function P(r){let e;return{c(){e=p("base"),this.h()},l(l){e=b(l,"BASE",{href:!0}),this.h()},h(){h(e,"href",r[0])},m(l,t){$(l,e,t)},p(l,t){t&1&&h(e,"href",l[0])},d(l){l&&_(e)}}}function x(r){let e,l,t,o,c,a,n,f,s=r[0]&&P(r);c=new Z({});const m=r[2].default,d=L(m,r,r[1],null);return{c(){s&&s.c(),e=E(),l=k(),t=p("div"),o=p("div"),C(c.$$.fragment),a=k(),n=p("div"),d&&d.c(),this.h()},l(i){const u=M('[data-svelte="svelte-7b8xlt"]',document.head);s&&s.l(u),e=E(),u.forEach(_),l=D(i),t=b(i,"DIV",{id:!0,class:!0});var y=g(t);o=b(y,"DIV",{id:!0,class:!0});var I=g(o);q(c.$$.fragment,I),I.forEach(_),a=D(y),n=b(y,"DIV",{id:!0,class:!0});var w=g(n);d&&d.l(w),w.forEach(_),y.forEach(_),this.h()},h(){h(o,"id","sidebar"),h(o,"class","svelte-1n6kgse"),h(n,"id","content"),h(n,"class","svelte-1n6kgse"),h(t,"id","main-grid"),h(t,"class","svelte-1n6kgse")},m(i,u){s&&s.m(document.head,null),v(document.head,e),$(i,l,u),$(i,t,u),v(t,o),N(c,o,null),v(t,a),v(t,n),d&&d.m(n,null),f=!0},p(i,[u]){i[0]?s?s.p(i,u):(s=P(i),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),d&&d.p&&(!f||u&2)&&O(d,m,i,i[1],f?R(m,i[1],u,null):Q(i[1]),null)},i(i){f||(S(c.$$.fragment,i),S(d,i),f=!0)},o(i){A(c.$$.fragment,i),A(d,i),f=!1},d(i){s&&s.d(i),_(e),i&&_(l),i&&_(t),F(c),d&&d.d(i)}}}async function le({page:r}){return{props:{base:r.path.startsWith("/Advent-of-Code-2021/")?"/Advent-of-Code-2021/":void 0}}}function ee(r,e,l){let{$$slots:t={},$$scope:o}=e,{base:c}=e;return r.$$set=a=>{"base"in a&&l(0,c=a.base),"$$scope"in a&&l(1,o=a.$$scope)},[c,o,t]}class ae extends V{constructor(e){super();j(this,e,ee,x,B,{base:0})}}export{ae as default,le as load};