import{S as H,i as L,s as O,e as N,b as k,H as D,O as Z,h,k as g,q as V,a as w,l as b,m as p,r as y,c as x,n as u,D as m,u as A,M as P,N as q}from"../chunks/index.d49c866b.js";function B(c,l,i){const e=c.slice();return e[1]=l[i],e}function C(c,l,i){const e=c.slice();return e[4]=l[i],e}function j(c){let l,i,e;return{c(){l=g("div"),i=g("p"),e=V("No navigation information")},l(n){l=b(n,"DIV",{});var a=p(l);i=b(a,"P",{});var t=p(i);e=y(t,"No navigation information"),t.forEach(h),a.forEach(h)},m(n,a){k(n,l,a),m(l,i),m(i,e)},p:D,d(n){n&&h(l)}}}function z(c){let l,i=c[1].metadata.path.split("/").slice(1),e=[];for(let n=0;n<i.length;n+=1)e[n]=M(C(c,i,n));return{c(){l=g("div");for(let n=0;n<e.length;n+=1)e[n].c();this.h()},l(n){l=b(n,"DIV",{class:!0});var a=p(l);for(let t=0;t<e.length;t+=1)e[t].l(a);a.forEach(h),this.h()},h(){u(l,"class","flex items-center gap-1")},m(n,a){k(n,l,a);for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(l,null)},p(n,a){if(a&1){i=n[1].metadata.path.split("/").slice(1);let t;for(t=0;t<i.length;t+=1){const s=C(n,i,t);e[t]?e[t].p(s,a):(e[t]=M(s),e[t].c(),e[t].m(l,null))}for(;t<e.length;t+=1)e[t].d(1);e.length=i.length}},d(n){n&&h(l),Z(e,n)}}}function M(c){let l,i=c[4]+"",e,n,a,t,s,r;return{c(){l=g("p"),e=V(i),n=w(),a=g("div"),t=P("svg"),s=P("path"),r=w(),this.h()},l(o){l=b(o,"P",{});var d=p(l);e=y(d,i),d.forEach(h),n=x(o),a=b(o,"DIV",{class:!0});var _=p(a);t=q(_,"svg",{width:!0,height:!0,fill:!0,viewBox:!0,xmlns:!0});var f=p(t);s=q(f,"path",{d:!0,fill:!0}),p(s).forEach(h),f.forEach(h),r=x(_),_.forEach(h),this.h()},h(){u(s,"d","M11.073 18.839c-.808.707-2.073.133-2.073-.94V6.101c0-1.074 1.265-1.648 2.073-.94l6.31 5.521a1.75 1.75 0 0 1 0 2.634l-6.31 5.522Zm-.573-1.492 5.896-5.159a.25.25 0 0 0 0-.376L10.5 6.653v10.694Z"),u(s,"fill","currentColor"),u(t,"width","14"),u(t,"height","14"),u(t,"fill","none"),u(t,"viewBox","0 0 24 24"),u(t,"xmlns","http://www.w3.org/2000/svg"),u(a,"class","text-gray-400 last:hidden")},m(o,d){k(o,l,d),m(l,e),k(o,n,d),k(o,a,d),m(a,t),m(t,s),m(a,r)},p(o,d){d&1&&i!==(i=o[4]+"")&&A(e,i)},d(o){o&&h(l),o&&h(n),o&&h(a)}}}function S(c){let l,i,e,n=c[1].metadata.title+"",a,t,s,r;function o(f,v){return f[1].metadata.path?z:j}let d=o(c),_=d(c);return{c(){l=g("a"),i=g("div"),e=g("p"),a=V(n),t=w(),_.c(),s=w(),this.h()},l(f){l=b(f,"A",{href:!0});var v=p(l);i=b(v,"DIV",{class:!0});var E=p(i);e=b(E,"P",{class:!0});var I=p(e);a=y(I,n),I.forEach(h),t=x(E),_.l(E),s=x(E),E.forEach(h),v.forEach(h),this.h()},h(){u(e,"class","text-xl font-semibold"),u(i,"class","p-4"),u(l,"href",r=c[1].route)},m(f,v){k(f,l,v),m(l,i),m(i,e),m(e,a),m(i,t),_.m(i,null),m(i,s)},p(f,v){v&1&&n!==(n=f[1].metadata.title+"")&&A(a,n),d===(d=o(f))&&_?_.p(f,v):(_.d(1),_=d(f),_&&(_.c(),_.m(i,s))),v&1&&r!==(r=f[1].route)&&u(l,"href",r)},d(f){f&&h(l),_.d()}}}function F(c){var n;let l,i=(n=c[0])==null?void 0:n.documents,e=[];for(let a=0;a<i.length;a+=1)e[a]=S(B(c,i,a));return{c(){for(let a=0;a<e.length;a+=1)e[a].c();l=N()},l(a){for(let t=0;t<e.length;t+=1)e[t].l(a);l=N()},m(a,t){for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(a,t);k(a,l,t)},p(a,[t]){var s;if(t&1){i=(s=a[0])==null?void 0:s.documents;let r;for(r=0;r<i.length;r+=1){const o=B(a,i,r);e[r]?e[r].p(o,t):(e[r]=S(o),e[r].c(),e[r].m(l.parentNode,l))}for(;r<e.length;r+=1)e[r].d(1);e.length=i.length}},i:D,o:D,d(a){Z(e,a),a&&h(l)}}}function G(c,l,i){let{data:e}=l;return c.$$set=n=>{"data"in n&&i(0,e=n.data)},[e]}class K extends H{constructor(l){super(),L(this,l,G,F,O,{data:0})}}export{K as default};
