import{S as P,i as R,s as S,e as h,k as I,t as T,c as v,a as y,d as i,m as E,h as j,b as f,g as b,F as c,T as k,I as F,a6 as C,G as V,V as G,w as U,x as q,y as B,q as O,o as x,B as A}from"../../chunks/vendor-6ff58972.js";import{g as H}from"../../chunks/navigation-bd39ff07.js";import{s as M}from"../../chunks/database-a28b565e.js";import"../../chunks/singletons-a6a7384f.js";function z(_){let e,o,a,r,u,n,d,l,p,$,m,g;return{c(){e=h("form"),o=h("div"),a=h("input"),r=I(),u=h("div"),n=h("input"),d=I(),l=h("div"),p=h("button"),$=T("Sign In"),this.h()},l(t){e=v(t,"FORM",{});var s=y(e);o=v(s,"DIV",{class:!0});var w=y(o);a=v(w,"INPUT",{class:!0,type:!0,placeholder:!0}),w.forEach(i),r=E(s),u=v(s,"DIV",{class:!0});var D=y(u);n=v(D,"INPUT",{class:!0,type:!0,placeholder:!0}),D.forEach(i),d=E(s),l=v(s,"DIV",{class:!0});var L=y(l);p=v(L,"BUTTON",{class:!0,type:!0});var N=y(p);$=j(N,"Sign In"),N.forEach(i),L.forEach(i),s.forEach(i),this.h()},h(){f(a,"class","form-control"),f(a,"type","email"),f(a,"placeholder","Email"),f(o,"class","mt-3"),f(n,"class","form-control"),f(n,"type","password"),f(n,"placeholder","Password"),f(u,"class","mt-3"),f(p,"class","btn btn-success"),f(p,"type","submit"),f(l,"class","mt-3")},m(t,s){b(t,e,s),c(e,o),c(o,a),k(a,_[0]),c(e,r),c(e,u),c(u,n),k(n,_[1]),c(e,d),c(e,l),c(l,p),c(p,$),m||(g=[F(a,"input",_[3]),F(n,"input",_[4]),F(e,"submit",C(_[2]))],m=!0)},p(t,[s]){s&1&&a.value!==t[0]&&k(a,t[0]),s&2&&n.value!==t[1]&&k(n,t[1])},i:V,o:V,d(t){t&&i(e),m=!1,G(g)}}}function J(_,e,o){let a,r;async function u(){const{error:l}=await M.auth.signIn({email:a,password:r});l&&alert(l.message),H("/")}function n(){a=this.value,o(0,a)}function d(){r=this.value,o(1,r)}return[a,r,u,n,d]}class K extends P{constructor(e){super();R(this,e,J,z,S,{})}}class Q extends P{constructor(e){super();R(this,e,null,null,S,{})}}function W(_){let e,o,a,r,u,n,d,l,p,$,m,g;return r=new K({}),m=new Q({}),{c(){e=h("p"),o=T("Login"),a=I(),U(r.$$.fragment),u=I(),n=h("hr"),d=I(),l=h("p"),p=T("Register"),$=I(),U(m.$$.fragment),this.h()},l(t){e=v(t,"P",{class:!0});var s=y(e);o=j(s,"Login"),s.forEach(i),a=E(t),q(r.$$.fragment,t),u=E(t),n=v(t,"HR",{}),d=E(t),l=v(t,"P",{});var w=y(l);p=j(w,"Register"),w.forEach(i),$=E(t),q(m.$$.fragment,t),this.h()},h(){f(e,"class","mt-3")},m(t,s){b(t,e,s),c(e,o),b(t,a,s),B(r,t,s),b(t,u,s),b(t,n,s),b(t,d,s),b(t,l,s),c(l,p),b(t,$,s),B(m,t,s),g=!0},p:V,i(t){g||(O(r.$$.fragment,t),O(m.$$.fragment,t),g=!0)},o(t){x(r.$$.fragment,t),x(m.$$.fragment,t),g=!1},d(t){t&&i(e),t&&i(a),A(r,t),t&&i(u),t&&i(n),t&&i(d),t&&i(l),t&&i($),A(m,t)}}}class et extends P{constructor(e){super();R(this,e,null,W,S,{})}}export{et as default};
