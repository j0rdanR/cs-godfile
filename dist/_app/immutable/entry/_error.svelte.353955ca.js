import{S as k,i as q,s as D,k as h,q as g,a as H,l as m,m as b,r as v,h as p,c as I,n as w,b as y,D as u,u as E,H as $,I as C}from"../chunks/index.d49c866b.js";import{s as F}from"../chunks/singletons.9486e9f9.js";const N=()=>{const e=F;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},P={subscribe(e){return N().page.subscribe(e)}},S={404:"Not Found",500:"Server issue"},x=e=>S[e]?S[e]+` (${e})`:"Unknown error: "+e;function T(e){let s,o,t=x(e[0].status)+"",n,d,i,c=e[0].error.message+"",l;return{c(){s=h("div"),o=h("h1"),n=g(t),d=H(),i=h("p"),l=g(c),this.h()},l(a){s=m(a,"DIV",{class:!0});var r=b(s);o=m(r,"H1",{});var _=b(o);n=v(_,t),_.forEach(p),d=I(r),i=m(r,"P",{});var f=b(i);l=v(f,c),f.forEach(p),r.forEach(p),this.h()},h(){w(s,"class","prose p-8 mx-auto")},m(a,r){y(a,s,r),u(s,o),u(o,n),u(s,d),u(s,i),u(i,l)},p(a,[r]){r&1&&t!==(t=x(a[0].status)+"")&&E(n,t),r&1&&c!==(c=a[0].error.message+"")&&E(l,c)},i:$,o:$,d(a){a&&p(s)}}}function U(e,s,o){let t;return C(e,P,n=>o(0,t=n)),[t]}let z=class extends k{constructor(s){super(),q(this,s,U,T,D,{})}};export{z as default};
