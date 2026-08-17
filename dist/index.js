"use strict";var l=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var m=l(function(Q,k){
function D(e,r,n,u,o,x,p){var f,c,q,i,s,v,a,t,y;for(f=r.data,c=o.data,i=r.accessors[0],q=o.accessors[1],a=u,t=p,s=i(f,a),y=1;y<e;y++)a+=n,v=i(f,a),q(c,t,v-s),s=v,t+=x;return o}k.exports=D
});var d=l(function(S,R){
var P=require('@stdlib/array-base-arraylike2object/dist'),E=m();function F(e,r,n,u,o,x,p){var f,c,q,i,s,v,a;if(q=P(r),i=P(o),q.accessorProtocol||i.accessorProtocol)return E(e,q,n,u,i,x,p),o;for(s=u,v=p,f=r[s],a=1;a<e;a++)s+=n,c=r[s],o[v]=c-f,f=c,v+=x;return o}R.exports=F
});var j=l(function(T,w){
var h=require('@stdlib/blas-base-gcopy/dist').ndarray,G=d();function H(e,r,n,u,o,x,p,f,c,q,i,s,v,a,t){var y,b;return y=e+o+c,y<=1||(h(o,x,p,f,v,a,t),b=t+o*a,G(e,r,n,u,v,a,b),e>0&&(b+=(e-1)*a),h(c,q,i,s,v,a,b)),v}w.exports=H
});var B=l(function(U,z){
var g=require('@stdlib/strided-base-stride2offset/dist'),I=j();function J(e,r,n,u,o,x,p,f,c,q,i){var s=g(e,n),v=g(u,x),a=g(p,c),t=g(e+u+p-1,i);return I(e,r,n,s,u,o,x,v,p,f,c,a,q,i,t)}z.exports=J
});var K=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),L=j();K(C,"ndarray",L);module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
