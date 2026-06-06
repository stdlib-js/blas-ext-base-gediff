"use strict";var l=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var m=l(function(Q,k){
function D(a,e,q,f,o,x,u){var n,c,p,i,s,v,r,t,y;for(n=e.data,c=o.data,i=e.accessors[0],p=o.accessors[1],r=f,t=u,s=i(n,r),y=1;y<a;y++)r+=q,v=i(n,r),p(c,t,v-s),s=v,t+=x;return o}k.exports=D
});var d=l(function(S,R){
var P=require('@stdlib/array-base-arraylike2object/dist'),E=m();function F(a,e,q,f,o,x,u){var n,c,p,i,s,v,r;if(p=P(e),i=P(o),p.accessorProtocol||i.accessorProtocol)return E(a,p,q,f,i,x,u),o;for(s=f,v=u,n=e[s],r=1;r<a;r++)s+=q,c=e[s],o[v]=c-n,n=c,v+=x;return o}R.exports=F
});var j=l(function(T,w){
var h=require('@stdlib/blas-base-gcopy/dist').ndarray,G=d();function H(a,e,q,f,o,x,u,n,c,p,i,s,v,r,t){var y,b;return y=a+o+c,y<=1||(h(o,x,u,n,v,r,t),b=t+o*r,G(a,e,q,f,v,r,b),a>0&&(b+=(a-1)*r),h(c,p,i,s,v,r,b)),v}w.exports=H
});var B=l(function(U,z){
var g=require('@stdlib/strided-base-stride2offset/dist'),I=j();function J(a,e,q,f,o,x,u,n,c,p,i){var s=g(a,q),v=g(f,x),r=g(u,c),t=g(a+f+u-1,i);return I(a,e,q,s,f,o,x,v,u,n,c,r,p,i,t)}z.exports=J
});var K=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),L=j();K(C,"ndarray",L);module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
