(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const io="160",Kh=0,Uo=1,Zh=2,Fc=1,Oc=2,Rn=3,xn=0,Wt=1,on=2,qn=0,Ki=1,No=2,Fo=3,Oo=4,$h=5,hi=100,Jh=101,Qh=102,ko=103,Bo=104,eu=200,tu=201,nu=202,iu=203,Ia=204,Da=205,su=206,ru=207,au=208,ou=209,lu=210,cu=211,hu=212,uu=213,du=214,fu=0,pu=1,mu=2,Mr=3,gu=4,_u=5,xu=6,vu=7,kc=0,yu=1,Mu=2,jn=0,bu=1,Su=2,Eu=3,Bc=4,wu=5,Tu=6,zo="attached",Au="detached",zc=300,Ji=301,Qi=302,Ua=303,Na=304,Lr=306,Kn=1e3,Qt=1001,br=1002,Tt=1003,Fa=1004,xr=1005,Vt=1006,Hc=1007,gi=1008,Yn=1009,Ru=1010,Cu=1011,so=1012,Gc=1013,Vn=1014,Cn=1015,Rs=1016,Vc=1017,Wc=1018,fi=1020,Lu=1021,en=1023,Pu=1024,Iu=1025,pi=1026,es=1027,Du=1028,Xc=1029,Uu=1030,qc=1031,jc=1033,Wr=33776,Xr=33777,qr=33778,jr=33779,Ho=35840,Go=35841,Vo=35842,Wo=35843,Yc=36196,Xo=37492,qo=37496,jo=37808,Yo=37809,Ko=37810,Zo=37811,$o=37812,Jo=37813,Qo=37814,el=37815,tl=37816,nl=37817,il=37818,sl=37819,rl=37820,al=37821,Yr=36492,ol=36494,ll=36495,Nu=36283,cl=36284,hl=36285,ul=36286,Fu=2200,Ou=2201,ku=2202,Cs=2300,ts=2301,Kr=2302,Gi=2400,Vi=2401,Sr=2402,ro=2500,Bu=2501,zu=0,Kc=1,Oa=2,Zc=3e3,mi=3001,Hu=3200,Gu=3201,$c=0,Vu=1,tn="",at="srgb",Lt="srgb-linear",ao="display-p3",Pr="display-p3-linear",Er="linear",lt="srgb",wr="rec709",Tr="p3",Si=7680,dl=519,Wu=512,Xu=513,qu=514,Jc=515,ju=516,Yu=517,Ku=518,Zu=519,ka=35044,fl="300 es",Ba=1035,Ln=2e3,Ar=2001;class yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pl=1234567;const Ss=Math.PI/180,ns=180/Math.PI;function hn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[s&255]+Dt[s>>8&255]+Dt[s>>16&255]+Dt[s>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function At(s,e,t){return Math.max(e,Math.min(t,s))}function oo(s,e){return(s%e+e)%e}function $u(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Ju(s,e,t){return s!==e?(t-s)/(e-s):0}function Es(s,e,t){return(1-t)*s+t*e}function Qu(s,e,t,n){return Es(s,e,1-Math.exp(-t*n))}function ed(s,e=1){return e-Math.abs(oo(s,e*2)-e)}function td(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function nd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function id(s,e){return s+Math.floor(Math.random()*(e-s+1))}function sd(s,e){return s+Math.random()*(e-s)}function rd(s){return s*(.5-Math.random())}function ad(s){s!==void 0&&(pl=s);let e=pl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function od(s){return s*Ss}function ld(s){return s*ns}function za(s){return(s&s-1)===0&&s!==0}function cd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Rr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hd(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function mn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qe(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Pn={DEG2RAD:Ss,RAD2DEG:ns,generateUUID:hn,clamp:At,euclideanModulo:oo,mapLinear:$u,inverseLerp:Ju,lerp:Es,damp:Qu,pingpong:ed,smoothstep:td,smootherstep:nd,randInt:id,randFloat:sd,randFloatSpread:rd,seededRandom:ad,degToRad:od,radToDeg:ld,isPowerOfTwo:za,ceilPowerOfTwo:cd,floorPowerOfTwo:Rr,setQuaternionFromProperEuler:hd,normalize:Qe,denormalize:mn};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,i,r,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],x=i[4],b=i[7],L=i[2],A=i[5],T=i[8];return r[0]=a*_+o*y+l*L,r[3]=a*m+o*x+l*A,r[6]=a*p+o*b+l*T,r[1]=c*_+h*y+d*L,r[4]=c*m+h*x+d*A,r[7]=c*p+h*b+d*T,r[2]=u*_+f*y+g*L,r[5]=u*m+f*x+g*A,r[8]=u*p+f*b+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=u*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Zr.makeScale(e,t)),this}rotate(e){return this.premultiply(Zr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zr=new We;function Qc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ls(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ud(){const s=Ls("canvas");return s.style.display="block",s}const ml={};function ws(s){s in ml||(ml[s]=!0,console.warn(s))}const gl=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_l=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ks={[Lt]:{transfer:Er,primaries:wr,toReference:s=>s,fromReference:s=>s},[at]:{transfer:lt,primaries:wr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Pr]:{transfer:Er,primaries:Tr,toReference:s=>s.applyMatrix3(_l),fromReference:s=>s.applyMatrix3(gl)},[ao]:{transfer:lt,primaries:Tr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(_l),fromReference:s=>s.applyMatrix3(gl).convertLinearToSRGB()}},dd=new Set([Lt,Pr]),Ze={enabled:!0,_workingColorSpace:Lt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!dd.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=ks[e].toReference,i=ks[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ks[s].primaries},getTransfer:function(s){return s===tn?Er:ks[s].transfer}};function Zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $r(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ei;class eh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ei===void 0&&(Ei=Ls("canvas")),Ei.width=e.width,Ei.height=e.height;const n=Ei.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Zi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zi(t[n]/255)*255):t[n]=Zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fd=0;class th{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=hn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Jr(i[a].image)):r.push(Jr(i[a]))}else r=Jr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Jr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?eh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pd=0;class Rt extends yi{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Qt,i=Qt,r=Vt,a=gi,o=en,l=Yn,c=Rt.DEFAULT_ANISOTROPY,h=tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=hn(),this.name="",this.source=new th(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===mi?at:tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kn:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case br:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kn:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case br:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===at?mi:Zc}set encoding(e){ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===mi?at:tn}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=zc;Rt.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,i=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,b=(f+1)/2,L=(p+1)/2,A=(h+u)/4,T=(d+_)/4,z=(g+m)/4;return x>b&&x>L?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=A/n,r=T/n):b>L?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=A/i,r=z/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=T/r,i=z/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class md extends yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(ws("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===mi?at:tn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Rt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new th(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends md{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class nh extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gd extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==u||c!==f||h!==g){let m=1-o;const p=l*u+c*f+h*g+d*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const L=Math.sqrt(x),A=Math.atan2(L,p*y);m=Math.sin(m*A)/L,o=Math.sin(o*A)/L}const b=o*y;if(l=l*m+u*b,c=c*m+f*b,h=h*m+g*b,d=d*m+_*b,m===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qr.copy(this).projectOnVector(e),this.sub(Qr)}reflect(e){return this.sub(Qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qr=new R,xl=new Kt;class yt{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(e.matrixWorld),this.union(Bs)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),zs.subVectors(this.max,fs),wi.subVectors(e.a,fs),Ti.subVectors(e.b,fs),Ai.subVectors(e.c,fs),Dn.subVectors(Ti,wi),Un.subVectors(Ai,Ti),Qn.subVectors(wi,Ai);let t=[0,-Dn.z,Dn.y,0,-Un.z,Un.y,0,-Qn.z,Qn.y,Dn.z,0,-Dn.x,Un.z,0,-Un.x,Qn.z,0,-Qn.x,-Dn.y,Dn.x,0,-Un.y,Un.x,0,-Qn.y,Qn.x,0];return!ea(t,wi,Ti,Ai,zs)||(t=[1,0,0,0,1,0,0,0,1],!ea(t,wi,Ti,Ai,zs))?!1:(Hs.crossVectors(Dn,Un),t=[Hs.x,Hs.y,Hs.z],ea(t,wi,Ti,Ai,zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mn=[new R,new R,new R,new R,new R,new R,new R,new R],nn=new R,Bs=new yt,wi=new R,Ti=new R,Ai=new R,Dn=new R,Un=new R,Qn=new R,fs=new R,zs=new R,Hs=new R,ei=new R;function ea(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ei.fromArray(s,r);const o=i.x*Math.abs(ei.x)+i.y*Math.abs(ei.y)+i.z*Math.abs(ei.z),l=e.dot(ei),c=t.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const _d=new yt,ps=new R,ta=new R;class un{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_d.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);const t=ps.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ps,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(ta)),this.expandByPoint(ps.copy(e.center).sub(ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new R,na=new R,Gs=new R,Nn=new R,ia=new R,Vs=new R,sa=new R;class Ds{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){na.copy(e).add(t).multiplyScalar(.5),Gs.copy(t).sub(e).normalize(),Nn.copy(this.origin).sub(na);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Gs),o=Nn.dot(this.direction),l=-Nn.dot(Gs),c=Nn.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(na).addScaledVector(Gs,u),f}intersectSphere(e,t){bn.subVectors(e.center,this.origin);const n=bn.dot(this.direction),i=bn.dot(bn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,n,i,r){ia.subVectors(t,e),Vs.subVectors(n,e),sa.crossVectors(ia,Vs);let a=this.direction.dot(sa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nn.subVectors(this.origin,e);const l=o*this.direction.dot(Vs.crossVectors(Nn,Vs));if(l<0)return null;const c=o*this.direction.dot(ia.cross(Nn));if(c<0||l+c>a)return null;const h=-o*Nn.dot(sa);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(e,t,n,i,r,a,o,l,c,h,d,u,f,g,_,m){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,u,f,g,_,m)}set(e,t,n,i,r,a,o,l,c,h,d,u,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ri.setFromMatrixColumn(e,0).length(),r=1/Ri.setFromMatrixColumn(e,1).length(),a=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xd,e,vd)}lookAt(e,t,n){const i=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Fn.crossVectors(n,qt),Fn.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Fn.crossVectors(n,qt)),Fn.normalize(),Ws.crossVectors(qt,Fn),i[0]=Fn.x,i[4]=Ws.x,i[8]=qt.x,i[1]=Fn.y,i[5]=Ws.y,i[9]=qt.y,i[2]=Fn.z,i[6]=Ws.z,i[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],b=n[11],L=n[15],A=i[0],T=i[4],z=i[8],S=i[12],w=i[1],V=i[5],q=i[9],re=i[13],P=i[2],B=i[6],W=i[10],Y=i[14],X=i[3],j=i[7],K=i[11],te=i[15];return r[0]=a*A+o*w+l*P+c*X,r[4]=a*T+o*V+l*B+c*j,r[8]=a*z+o*q+l*W+c*K,r[12]=a*S+o*re+l*Y+c*te,r[1]=h*A+d*w+u*P+f*X,r[5]=h*T+d*V+u*B+f*j,r[9]=h*z+d*q+u*W+f*K,r[13]=h*S+d*re+u*Y+f*te,r[2]=g*A+_*w+m*P+p*X,r[6]=g*T+_*V+m*B+p*j,r[10]=g*z+_*q+m*W+p*K,r[14]=g*S+_*re+m*Y+p*te,r[3]=y*A+x*w+b*P+L*X,r[7]=y*T+x*V+b*B+L*j,r[11]=y*z+x*q+b*W+L*K,r[15]=y*S+x*re+b*Y+L*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*d-i*c*d-r*o*u+n*c*u+i*o*f-n*l*f)+_*(+t*l*f-t*c*u+r*a*u-i*a*f+i*c*h-r*l*h)+m*(+t*c*d-t*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-t*l*d+t*o*u+i*a*d-n*a*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=d*m*c-_*u*c+_*l*f-o*m*f-d*l*p+o*u*p,x=g*u*c-h*m*c-g*l*f+a*m*f+h*l*p-a*u*p,b=h*_*c-g*d*c+g*o*f-a*_*f-h*o*p+a*d*p,L=g*d*l-h*_*l-g*o*u+a*_*u+h*o*m-a*d*m,A=t*y+n*x+i*b+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=y*T,e[1]=(_*u*r-d*m*r-_*i*f+n*m*f+d*i*p-n*u*p)*T,e[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*T,e[3]=(d*l*r-o*u*r-d*i*c+n*u*c+o*i*f-n*l*f)*T,e[4]=x*T,e[5]=(h*m*r-g*u*r+g*i*f-t*m*f-h*i*p+t*u*p)*T,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*p-t*l*p)*T,e[7]=(a*u*r-h*l*r+h*i*c-t*u*c-a*i*f+t*l*f)*T,e[8]=b*T,e[9]=(g*d*r-h*_*r-g*n*f+t*_*f+h*n*p-t*d*p)*T,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*T,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*f-t*o*f)*T,e[12]=L*T,e[13]=(h*_*i-g*d*i+g*n*u-t*_*u-h*n*m+t*d*m)*T,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*T,e[15]=(a*d*i-h*o*i+h*n*l-t*d*l-a*n*u+t*o*u)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,_=a*h,m=a*d,p=o*d,y=l*c,x=l*h,b=l*d,L=n.x,A=n.y,T=n.z;return i[0]=(1-(_+p))*L,i[1]=(f+b)*L,i[2]=(g-x)*L,i[3]=0,i[4]=(f-b)*A,i[5]=(1-(u+p))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(g+x)*T,i[9]=(m-y)*T,i[10]=(1-(u+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ri.set(i[0],i[1],i[2]).length();const a=Ri.set(i[4],i[5],i[6]).length(),o=Ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],sn.copy(this);const c=1/r,h=1/a,d=1/o;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=d,sn.elements[9]*=d,sn.elements[10]*=d,t.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Ln){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i);let f,g;if(o===Ln)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ar)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Ln){const l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(a-r),u=(t+e)*c,f=(n+i)*h;let g,_;if(o===Ln)g=(a+r)*d,_=-2*d;else if(o===Ar)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ri=new R,sn=new Ae,xd=new R(0,0,0),vd=new R(1,1,1),Fn=new R,Ws=new R,qt=new R,vl=new Ae,yl=new Kt;class Ir{constructor(e=0,t=0,n=0,i=Ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yl.setFromEuler(this),this.setFromQuaternion(yl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ir.DEFAULT_ORDER="XYZ";class lo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yd=0;const Ml=new R,Ci=new Kt,Sn=new Ae,Xs=new R,ms=new R,Md=new R,bd=new Kt,bl=new R(1,0,0),Sl=new R(0,1,0),El=new R(0,0,1),Sd={type:"added"},Ed={type:"removed"};class ht extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new R,t=new Ir,n=new Kt,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ae},normalMatrix:{value:new We}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(bl,e)}rotateY(e){return this.rotateOnAxis(Sl,e)}rotateZ(e){return this.rotateOnAxis(El,e)}translateOnAxis(e,t){return Ml.copy(e).applyQuaternion(this.quaternion),this.position.add(Ml.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bl,e)}translateY(e){return this.translateOnAxis(Sl,e)}translateZ(e){return this.translateOnAxis(El,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xs.copy(e):Xs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(ms,Xs,this.up):Sn.lookAt(Xs,ms,this.up),this.quaternion.setFromRotationMatrix(Sn),i&&(Sn.extractRotation(i.matrixWorld),Ci.setFromRotationMatrix(Sn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Sd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ed)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,Md),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,bd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ht.DEFAULT_UP=new R(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new R,En=new R,ra=new R,wn=new R,Li=new R,Pi=new R,wl=new R,aa=new R,oa=new R,la=new R;let qs=!1;class an{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),rn.subVectors(e,t),i.cross(rn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){rn.subVectors(i,t),En.subVectors(n,t),ra.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(En),l=rn.dot(ra),c=En.dot(En),h=En.dot(ra),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getUV(e,t,n,i,r,a,o,l){return qs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qs=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l)}static isFrontFacing(e,t,n,i){return rn.subVectors(n,t),En.subVectors(e,t),rn.cross(En).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),rn.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return qs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qs=!0),an.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return an.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Li.subVectors(i,n),Pi.subVectors(r,n),aa.subVectors(e,n);const l=Li.dot(aa),c=Pi.dot(aa);if(l<=0&&c<=0)return t.copy(n);oa.subVectors(e,i);const h=Li.dot(oa),d=Pi.dot(oa);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Li,a);la.subVectors(e,r);const f=Li.dot(la),g=Pi.dot(la);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Pi,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return wl.subVectors(r,i),o=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(wl,o);const p=1/(m+_+u);return a=_*p,o=u*p,t.copy(n).addScaledVector(Li,a).addScaledVector(Pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},js={h:0,s:0,l:0};function ca(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=oo(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ca(a,r,e+1/3),this.g=ca(a,r,e),this.b=ca(a,r,e-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(e,t=at){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){const n=ih[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return Ze.fromWorkingColorSpace(Ut.copy(this),e),Math.round(At(Ut.r*255,0,255))*65536+Math.round(At(Ut.g*255,0,255))*256+Math.round(At(Ut.b*255,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Ut.copy(this),t);const n=Ut.r,i=Ut.g,r=Ut.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=at){Ze.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,i=Ut.b;return e!==at?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(js);const n=Es(On.h,js.h,t),i=Es(On.s,js.s,t),r=Es(On.l,js.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new xe;xe.NAMES=ih;let wd=0;class _n extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=hn(),this.name="",this.type="Material",this.blending=Ki,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=Da,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ia&&(n.blendSrc=this.blendSrc),this.blendDst!==Da&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wn extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new R,Ys=new ke;class Ct{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ka,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ys.fromBufferAttribute(this,t),Ys.applyMatrix3(e),this.setXY(t,Ys.x,Ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ka&&(e.usage=this.usage),e}}class sh extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rh extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Td=0;const $t=new Ae,ha=new ht,Ii=new R,jt=new yt,gs=new yt,wt=new R;class Pt extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=hn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qc(e)?rh:sh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,n){return $t.makeTranslation(e,t,n),this.applyMatrix4($t),this}scale(e,t,n){return $t.makeScale(e,t,n),this.applyMatrix4($t),this}lookAt(e){return ha.lookAt(e),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(jt.min,gs.min),jt.expandByPoint(wt),wt.addVectors(jt.max,gs.max),jt.expandByPoint(wt)):(jt.expandByPoint(gs.min),jt.expandByPoint(gs.max))}jt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)wt.fromBufferAttribute(o,c),l&&(Ii.fromBufferAttribute(e,c),wt.add(Ii)),i=Math.max(i,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new R,h[w]=new R;const d=new R,u=new R,f=new R,g=new ke,_=new ke,m=new ke,p=new R,y=new R;function x(w,V,q){d.fromArray(i,w*3),u.fromArray(i,V*3),f.fromArray(i,q*3),g.fromArray(a,w*2),_.fromArray(a,V*2),m.fromArray(a,q*2),u.sub(d),f.sub(d),_.sub(g),m.sub(g);const re=1/(_.x*m.y-m.x*_.y);isFinite(re)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(re),y.copy(f).multiplyScalar(_.x).addScaledVector(u,-m.x).multiplyScalar(re),c[w].add(p),c[V].add(p),c[q].add(p),h[w].add(y),h[V].add(y),h[q].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let w=0,V=b.length;w<V;++w){const q=b[w],re=q.start,P=q.count;for(let B=re,W=re+P;B<W;B+=3)x(n[B+0],n[B+1],n[B+2])}const L=new R,A=new R,T=new R,z=new R;function S(w){T.fromArray(r,w*3),z.copy(T);const V=c[w];L.copy(V),L.sub(T.multiplyScalar(T.dot(V))).normalize(),A.crossVectors(z,V);const re=A.dot(h[w])<0?-1:1;l[w*4]=L.x,l[w*4+1]=L.y,l[w*4+2]=L.z,l[w*4+3]=re}for(let w=0,V=b.length;w<V;++w){const q=b[w],re=q.start,P=q.count;for(let B=re,W=re+P;B<W;B+=3)S(n[B+0]),S(n[B+1]),S(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,d=new R;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Ct(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tl=new Ae,ti=new Ds,Ks=new un,Al=new R,Di=new R,Ui=new R,Ni=new R,ua=new R,Zs=new R,$s=new ke,Js=new ke,Qs=new ke,Rl=new R,Cl=new R,Ll=new R,er=new R,tr=new R;class tt extends ht{constructor(e=new Pt,t=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Zs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(ua.fromBufferAttribute(d,e),a?Zs.addScaledVector(ua,h):Zs.addScaledVector(ua.sub(t),h))}t.add(Zs)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(r),ti.copy(e.ray).recast(e.near),!(Ks.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Ks,Al)===null||ti.origin.distanceToSquared(Al)>(e.far-e.near)**2))&&(Tl.copy(r).invert(),ti.copy(e.ray).applyMatrix4(Tl),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,L=x;b<L;b+=3){const A=o.getX(b),T=o.getX(b+1),z=o.getX(b+2);i=nr(this,p,e,n,c,h,d,A,T,z),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),x=o.getX(m+1),b=o.getX(m+2);i=nr(this,a,e,n,c,h,d,y,x,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,L=x;b<L;b+=3){const A=b,T=b+1,z=b+2;i=nr(this,p,e,n,c,h,d,A,T,z),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,x=m+1,b=m+2;i=nr(this,a,e,n,c,h,d,y,x,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Ad(s,e,t,n,i,r,a,o){let l;if(e.side===Wt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===xn,o),l===null)return null;tr.copy(o),tr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(tr);return c<t.near||c>t.far?null:{distance:c,point:tr.clone(),object:s}}function nr(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Di),s.getVertexPosition(l,Ui),s.getVertexPosition(c,Ni);const h=Ad(s,e,t,n,Di,Ui,Ni,er);if(h){i&&($s.fromBufferAttribute(i,o),Js.fromBufferAttribute(i,l),Qs.fromBufferAttribute(i,c),h.uv=an.getInterpolation(er,Di,Ui,Ni,$s,Js,Qs,new ke)),r&&($s.fromBufferAttribute(r,o),Js.fromBufferAttribute(r,l),Qs.fromBufferAttribute(r,c),h.uv1=an.getInterpolation(er,Di,Ui,Ni,$s,Js,Qs,new ke),h.uv2=h.uv1),a&&(Rl.fromBufferAttribute(a,o),Cl.fromBufferAttribute(a,l),Ll.fromBufferAttribute(a,c),h.normal=an.getInterpolation(er,Di,Ui,Ni,Rl,Cl,Ll,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new R,materialIndex:0};an.getNormal(Di,Ui,Ni,d.normal),h.face=d}return h}class Mi extends Pt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2));function g(_,m,p,y,x,b,L,A,T,z,S){const w=b/T,V=L/z,q=b/2,re=L/2,P=A/2,B=T+1,W=z+1;let Y=0,X=0;const j=new R;for(let K=0;K<W;K++){const te=K*V-re;for(let ne=0;ne<B;ne++){const G=ne*w-q;j[_]=G*y,j[m]=te*x,j[p]=P,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[p]=A>0?1:-1,h.push(j.x,j.y,j.z),d.push(ne/T),d.push(1-K/z),Y+=1}}for(let K=0;K<z;K++)for(let te=0;te<T;te++){const ne=u+te+B*K,G=u+te+B*(K+1),Z=u+(te+1)+B*(K+1),ce=u+(te+1)+B*K;l.push(ne,G,ce),l.push(G,Z,ce),X+=6}o.addGroup(f,X,S),f+=X,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function is(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function zt(s){const e={};for(let t=0;t<s.length;t++){const n=is(s[t]);for(const i in n)e[i]=n[i]}return e}function Rd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ah(s){return s.getRenderTarget()===null?s.outputColorSpace:Ze.workingColorSpace}const Cd={clone:is,merge:zt};var Ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ld,this.fragmentShader=Pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=Rd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class oh extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nt extends oh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ss*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fi=-90,Oi=1;class Id extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Nt(Fi,Oi,e,t);i.layers=this.layers,this.add(i);const r=new Nt(Fi,Oi,e,t);r.layers=this.layers,this.add(r);const a=new Nt(Fi,Oi,e,t);a.layers=this.layers,this.add(a);const o=new Nt(Fi,Oi,e,t);o.layers=this.layers,this.add(o);const l=new Nt(Fi,Oi,e,t);l.layers=this.layers,this.add(l);const c=new Nt(Fi,Oi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class lh extends Rt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ji,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dd extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ws("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===mi?at:tn),this.texture=new lh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Mi(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:qn});r.uniforms.tEquirect.value=t;const a=new tt(i,r),o=t.minFilter;return t.minFilter===gi&&(t.minFilter=Vt),new Id(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const da=new R,Ud=new R,Nd=new We;class oi{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=da.subVectors(n,t).cross(Ud.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(da),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Nd.getNormalMatrix(e),i=this.coplanarPoint(da).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new un,ir=new R;class Dr{constructor(e=new oi,t=new oi,n=new oi,i=new oi,r=new oi,a=new oi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],y=i[13],x=i[14],b=i[15];if(n[0].setComponents(l-r,u-c,m-f,b-p).normalize(),n[1].setComponents(l+r,u+c,m+f,b+p).normalize(),n[2].setComponents(l+a,u+h,m+g,b+y).normalize(),n[3].setComponents(l-a,u-h,m-g,b-y).normalize(),n[4].setComponents(l-o,u-d,m-_,b-x).normalize(),t===Ln)n[5].setComponents(l+o,u+d,m+_,b+x).normalize();else if(t===Ar)n[5].setComponents(o,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ir.x=i.normal.x>0?e.max.x:e.min.x,ir.y=i.normal.y>0?e.max.y:e.min.y,ir.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ch(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Fd(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,f=d.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,d,u),c.onUploadCallback();let _;if(d instanceof Float32Array)_=s.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=s.SHORT;else if(d instanceof Uint32Array)_=s.UNSIGNED_INT;else if(d instanceof Int32Array)_=s.INT;else if(d instanceof Int8Array)_=s.BYTE;else if(d instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,d){const u=h.array,f=h._updateRange,g=h.updateRanges;if(s.bindBuffer(d,c),f.count===-1&&g.length===0&&s.bufferSubData(d,0,u),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];t?s.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):s.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):s.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,i(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}class xi extends Pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*u-a;for(let x=0;x<c;x++){const b=x*d-r;g.push(b,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const x=y+c*p,b=y+c*(p+1),L=y+1+c*(p+1),A=y+1+c*p;f.push(x,b,A),f.push(b,L,A)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Od=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$d=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,of=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",mf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Af=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,If=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Df=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ff=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Of=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$f=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Qf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,np=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ap=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ep=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ip=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Xp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$p=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,em=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,am=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:Od,alphahash_pars_fragment:kd,alphamap_fragment:Bd,alphamap_pars_fragment:zd,alphatest_fragment:Hd,alphatest_pars_fragment:Gd,aomap_fragment:Vd,aomap_pars_fragment:Wd,batching_pars_vertex:Xd,batching_vertex:qd,begin_vertex:jd,beginnormal_vertex:Yd,bsdfs:Kd,iridescence_fragment:Zd,bumpmap_pars_fragment:$d,clipping_planes_fragment:Jd,clipping_planes_pars_fragment:Qd,clipping_planes_pars_vertex:ef,clipping_planes_vertex:tf,color_fragment:nf,color_pars_fragment:sf,color_pars_vertex:rf,color_vertex:af,common:of,cube_uv_reflection_fragment:lf,defaultnormal_vertex:cf,displacementmap_pars_vertex:hf,displacementmap_vertex:uf,emissivemap_fragment:df,emissivemap_pars_fragment:ff,colorspace_fragment:pf,colorspace_pars_fragment:mf,envmap_fragment:gf,envmap_common_pars_fragment:_f,envmap_pars_fragment:xf,envmap_pars_vertex:vf,envmap_physical_pars_fragment:Pf,envmap_vertex:yf,fog_vertex:Mf,fog_pars_vertex:bf,fog_fragment:Sf,fog_pars_fragment:Ef,gradientmap_pars_fragment:wf,lightmap_fragment:Tf,lightmap_pars_fragment:Af,lights_lambert_fragment:Rf,lights_lambert_pars_fragment:Cf,lights_pars_begin:Lf,lights_toon_fragment:If,lights_toon_pars_fragment:Df,lights_phong_fragment:Uf,lights_phong_pars_fragment:Nf,lights_physical_fragment:Ff,lights_physical_pars_fragment:Of,lights_fragment_begin:kf,lights_fragment_maps:Bf,lights_fragment_end:zf,logdepthbuf_fragment:Hf,logdepthbuf_pars_fragment:Gf,logdepthbuf_pars_vertex:Vf,logdepthbuf_vertex:Wf,map_fragment:Xf,map_pars_fragment:qf,map_particle_fragment:jf,map_particle_pars_fragment:Yf,metalnessmap_fragment:Kf,metalnessmap_pars_fragment:Zf,morphcolor_vertex:$f,morphnormal_vertex:Jf,morphtarget_pars_vertex:Qf,morphtarget_vertex:ep,normal_fragment_begin:tp,normal_fragment_maps:np,normal_pars_fragment:ip,normal_pars_vertex:sp,normal_vertex:rp,normalmap_pars_fragment:ap,clearcoat_normal_fragment_begin:op,clearcoat_normal_fragment_maps:lp,clearcoat_pars_fragment:cp,iridescence_pars_fragment:hp,opaque_fragment:up,packing:dp,premultiplied_alpha_fragment:fp,project_vertex:pp,dithering_fragment:mp,dithering_pars_fragment:gp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:xp,shadowmap_pars_fragment:vp,shadowmap_pars_vertex:yp,shadowmap_vertex:Mp,shadowmask_pars_fragment:bp,skinbase_vertex:Sp,skinning_pars_vertex:Ep,skinning_vertex:wp,skinnormal_vertex:Tp,specularmap_fragment:Ap,specularmap_pars_fragment:Rp,tonemapping_fragment:Cp,tonemapping_pars_fragment:Lp,transmission_fragment:Pp,transmission_pars_fragment:Ip,uv_pars_fragment:Dp,uv_pars_vertex:Up,uv_vertex:Np,worldpos_vertex:Fp,background_vert:Op,background_frag:kp,backgroundCube_vert:Bp,backgroundCube_frag:zp,cube_vert:Hp,cube_frag:Gp,depth_vert:Vp,depth_frag:Wp,distanceRGBA_vert:Xp,distanceRGBA_frag:qp,equirect_vert:jp,equirect_frag:Yp,linedashed_vert:Kp,linedashed_frag:Zp,meshbasic_vert:$p,meshbasic_frag:Jp,meshlambert_vert:Qp,meshlambert_frag:em,meshmatcap_vert:tm,meshmatcap_frag:nm,meshnormal_vert:im,meshnormal_frag:sm,meshphong_vert:rm,meshphong_frag:am,meshphysical_vert:om,meshphysical_frag:lm,meshtoon_vert:cm,meshtoon_frag:hm,points_vert:um,points_frag:dm,shadow_vert:fm,shadow_frag:pm,sprite_vert:mm,sprite_frag:gm},se={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},pn={basic:{uniforms:zt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:zt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new xe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:zt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:zt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:zt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new xe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:zt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:zt([se.points,se.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:zt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:zt([se.common,se.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:zt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:zt([se.sprite,se.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:zt([se.common,se.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:zt([se.lights,se.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};pn.physical={uniforms:zt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const sr={r:0,b:0,g:0};function _m(s,e,t,n,i,r,a){const o=new xe(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(m,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),y=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Lr)?(h===void 0&&(h=new tt(new Mi(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:is(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Ze.getTransfer(x.colorSpace)!==lt,(d!==x||u!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new tt(new xi(2,2),new _i({name:"BackgroundMaterial",uniforms:is(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(x.colorSpace)!==lt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(sr,ah(s)),n.buffers.color.setClear(sr.r,sr.g,sr.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function xm(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,h=!1;function d(P,B,W,Y,X){let j=!1;if(a){const K=_(Y,W,B);c!==K&&(c=K,f(c.object)),j=p(P,Y,W,X),j&&y(P,Y,W,X)}else{const K=B.wireframe===!0;(c.geometry!==Y.id||c.program!==W.id||c.wireframe!==K)&&(c.geometry=Y.id,c.program=W.id,c.wireframe=K,j=!0)}X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,z(P,B,W,Y),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,B,W){const Y=W.wireframe===!0;let X=o[P.id];X===void 0&&(X={},o[P.id]=X);let j=X[B.id];j===void 0&&(j={},X[B.id]=j);let K=j[Y];return K===void 0&&(K=m(u()),j[Y]=K),K}function m(P){const B=[],W=[],Y=[];for(let X=0;X<i;X++)B[X]=0,W[X]=0,Y[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:Y,object:P,attributes:{},index:null}}function p(P,B,W,Y){const X=c.attributes,j=B.attributes;let K=0;const te=W.getAttributes();for(const ne in te)if(te[ne].location>=0){const Z=X[ne];let ce=j[ne];if(ce===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor)),Z===void 0||Z.attribute!==ce||ce&&Z.data!==ce.data)return!0;K++}return c.attributesNum!==K||c.index!==Y}function y(P,B,W,Y){const X={},j=B.attributes;let K=0;const te=W.getAttributes();for(const ne in te)if(te[ne].location>=0){let Z=j[ne];Z===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));const ce={};ce.attribute=Z,Z&&Z.data&&(ce.data=Z.data),X[ne]=ce,K++}c.attributes=X,c.attributesNum=K,c.index=Y}function x(){const P=c.newAttributes;for(let B=0,W=P.length;B<W;B++)P[B]=0}function b(P){L(P,0)}function L(P,B){const W=c.newAttributes,Y=c.enabledAttributes,X=c.attributeDivisors;W[P]=1,Y[P]===0&&(s.enableVertexAttribArray(P),Y[P]=1),X[P]!==B&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,B),X[P]=B)}function A(){const P=c.newAttributes,B=c.enabledAttributes;for(let W=0,Y=B.length;W<Y;W++)B[W]!==P[W]&&(s.disableVertexAttribArray(W),B[W]=0)}function T(P,B,W,Y,X,j,K){K===!0?s.vertexAttribIPointer(P,B,W,X,j):s.vertexAttribPointer(P,B,W,Y,X,j)}function z(P,B,W,Y){if(n.isWebGL2===!1&&(P.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const X=Y.attributes,j=W.getAttributes(),K=B.defaultAttributeValues;for(const te in j){const ne=j[te];if(ne.location>=0){let G=X[te];if(G===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){const Z=G.normalized,ce=G.itemSize,ve=t.get(G);if(ve===void 0)continue;const _e=ve.buffer,De=ve.type,Ne=ve.bytesPerElement,we=n.isWebGL2===!0&&(De===s.INT||De===s.UNSIGNED_INT||G.gpuType===Gc);if(G.isInterleavedBufferAttribute){const je=G.data,U=je.stride,Ft=G.offset;if(je.isInstancedInterleavedBuffer){for(let Me=0;Me<ne.locationSize;Me++)L(ne.location+Me,je.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let Me=0;Me<ne.locationSize;Me++)b(ne.location+Me);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let Me=0;Me<ne.locationSize;Me++)T(ne.location+Me,ce/ne.locationSize,De,Z,U*Ne,(Ft+ce/ne.locationSize*Me)*Ne,we)}else{if(G.isInstancedBufferAttribute){for(let je=0;je<ne.locationSize;je++)L(ne.location+je,G.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let je=0;je<ne.locationSize;je++)b(ne.location+je);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let je=0;je<ne.locationSize;je++)T(ne.location+je,ce/ne.locationSize,De,Z,ce*Ne,ce/ne.locationSize*je*Ne,we)}}else if(K!==void 0){const Z=K[te];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(ne.location,Z);break;case 3:s.vertexAttrib3fv(ne.location,Z);break;case 4:s.vertexAttrib4fv(ne.location,Z);break;default:s.vertexAttrib1fv(ne.location,Z)}}}}A()}function S(){q();for(const P in o){const B=o[P];for(const W in B){const Y=B[W];for(const X in Y)g(Y[X].object),delete Y[X];delete B[W]}delete o[P]}}function w(P){if(o[P.id]===void 0)return;const B=o[P.id];for(const W in B){const Y=B[W];for(const X in Y)g(Y[X].object),delete Y[X];delete B[W]}delete o[P.id]}function V(P){for(const B in o){const W=o[B];if(W[P.id]===void 0)continue;const Y=W[P.id];for(const X in Y)g(Y[X].object),delete Y[X];delete W[P.id]}}function q(){re(),h=!0,c!==l&&(c=l,f(c.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:re,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:V,initAttributes:x,enableAttribute:b,disableUnusedAttributes:A}}function vm(s,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,d){s.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,u){if(u===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,d,u),t.update(d,r,u)}function c(h,d,u){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{f.multiDrawArraysWEBGL(r,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function ym(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,b=a||e.has("OES_texture_float"),L=x&&b,A=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:L,maxSamples:A}}function Mm(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new oi,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,x=y*4;let b=p.clippingState||null;l.value=b,b=h(g,u,x,f);for(let L=0;L!==x;++L)b[L]=t[L];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,b=f;x!==_;++x,b+=4)a.copy(d[x]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function bm(s){let e=new WeakMap;function t(a,o){return o===Ua?a.mapping=Ji:o===Na&&(a.mapping=Qi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ua||o===Na)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Dd(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class co extends oh{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wi=4,Pl=[.125,.215,.35,.446,.526,.582],ui=20,fa=new co,Il=new xe;let pa=null,ma=0,ga=0;const li=(1+Math.sqrt(5))/2,ki=1/li,Dl=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,li,ki),new R(0,li,-ki),new R(ki,0,li),new R(-ki,0,li),new R(li,ki,0),new R(-li,ki,0)];class Ul{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pa,ma,ga),e.scissorTest=!1,rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Rs,format:en,colorSpace:Lt,depthBuffer:!1},i=Nl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sm(r)),this._blurMaterial=Em(r,e,t)}return i}_compileMaterial(e){const t=new tt(this._lodPlanes[0],e);this._renderer.compile(t,fa)}_sceneToCubeUV(e,t,n,i){const o=new Nt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Il),h.toneMapping=jn,h.autoClear=!1;const f=new Wn({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new tt(new Mi,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Il),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;rr(i,y*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ji||e.mapping===Qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new tt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;rr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,fa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Dl[(i-1)%Dl.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new tt(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ui-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ui;m>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);const p=[];let y=0;for(let T=0;T<ui;++T){const z=T/_,S=Math.exp(-z*z/2);p.push(S),T===0?y+=S:T<m&&(y+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const b=this._sizeLods[i],L=3*b*(i>x-Wi?i-x+Wi:0),A=4*(this._cubeSize-b);rr(t,L,A,3*b,2*b),l.setRenderTarget(t),l.render(d,fa)}}function Sm(s){const e=[],t=[],n=[];let i=s;const r=s-Wi+1+Pl.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Wi?l=Pl[a-s+Wi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),x=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let A=0;A<f;A++){const T=A%3*2/3-1,z=A>2?0:-1,S=[T,z,0,T+2/3,z,0,T+2/3,z+1,0,T,z,0,T+2/3,z+1,0,T,z+1,0];y.set(S,_*g*A),x.set(u,m*g*A);const w=[A,A,A,A,A,A];b.set(w,p*g*A)}const L=new Pt;L.setAttribute("position",new Ct(y,_)),L.setAttribute("uv",new Ct(x,m)),L.setAttribute("faceIndex",new Ct(b,p)),e.push(L),i>Wi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Nl(s,e,t){const n=new Zn(s,e,t);return n.texture.mapping=Lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Em(s,e,t){const n=new Float32Array(ui),i=new R(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Fl(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Ol(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ho(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wm(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ua||l===Na,h=l===Ji||l===Qi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Ul(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Ul(s));const u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Tm(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Am(s,e,t,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let x=0,b=y.length;x<b;x+=3){const L=y[x+0],A=y[x+1],T=y[x+2];u.push(L,A,A,T,T,L)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,b=y.length/3-1;x<b;x+=3){const L=x+0,A=x+1,T=x+2;u.push(L,A,A,T,T,L)}}else return;const m=new(Qc(u)?rh:sh)(u,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Rm(s,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,g){s.drawElements(r,g,o,f*l),t.update(g,r,1)}function d(f,g,_){if(_===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*l,_),t.update(g,r,_)}function u(f,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,_);let p=0;for(let y=0;y<_;y++)p+=g[y];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function Cm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Lm(s,e){return s[0]-e[0]}function Pm(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Im(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new et,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let B=function(){re.dispose(),r.delete(h),h.removeEventListener("dispose",B)};var f=B;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,L=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let S=0;x===!0&&(S=1),b===!0&&(S=2),L===!0&&(S=3);let w=h.attributes.position.count*S,V=1;w>e.maxTextureSize&&(V=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const q=new Float32Array(w*V*4*_),re=new nh(q,w,V,_);re.type=Cn,re.needsUpdate=!0;const P=S*4;for(let W=0;W<_;W++){const Y=A[W],X=T[W],j=z[W],K=w*V*4*W;for(let te=0;te<Y.count;te++){const ne=te*P;x===!0&&(a.fromBufferAttribute(Y,te),q[K+ne+0]=a.x,q[K+ne+1]=a.y,q[K+ne+2]=a.z,q[K+ne+3]=0),b===!0&&(a.fromBufferAttribute(X,te),q[K+ne+4]=a.x,q[K+ne+5]=a.y,q[K+ne+6]=a.z,q[K+ne+7]=0),L===!0&&(a.fromBufferAttribute(j,te),q[K+ne+8]=a.x,q[K+ne+9]=a.y,q[K+ne+10]=a.z,q[K+ne+11]=j.itemSize===4?a.w:1)}}m={count:_,texture:re,size:new ke(w,V)},r.set(h,m),h.addEventListener("dispose",B)}let p=0;for(let x=0;x<u.length;x++)p+=u[x];const y=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",y),d.getUniforms().setValue(s,"morphTargetInfluences",u),d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=u===void 0?0:u.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let b=0;b<g;b++)_[b]=[b,0];n[h.id]=_}for(let b=0;b<g;b++){const L=_[b];L[0]=b,L[1]=u[b]}_.sort(Pm);for(let b=0;b<8;b++)b<g&&_[b][1]?(o[b][0]=_[b][0],o[b][1]=_[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(Lm);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let y=0;for(let b=0;b<8;b++){const L=o[b],A=L[0],T=L[1];A!==Number.MAX_SAFE_INTEGER&&T?(m&&h.getAttribute("morphTarget"+b)!==m[A]&&h.setAttribute("morphTarget"+b,m[A]),p&&h.getAttribute("morphNormal"+b)!==p[A]&&h.setAttribute("morphNormal"+b,p[A]),i[b]=T,y+=T):(m&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),p&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),i[b]=0)}const x=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(s,"morphTargetBaseInfluence",x),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Dm(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class hh extends Rt{constructor(e,t,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:pi,h!==pi&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===pi&&(n=Vn),n===void 0&&h===es&&(n=fi),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Tt,this.minFilter=l!==void 0?l:Tt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const uh=new Rt,dh=new hh(1,1);dh.compareFunction=Jc;const fh=new nh,ph=new gd,mh=new lh,kl=[],Bl=[],zl=new Float32Array(16),Hl=new Float32Array(9),Gl=new Float32Array(4);function ls(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=kl[i];if(r===void 0&&(r=new Float32Array(i),kl[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Mt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function bt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ur(s,e){let t=Bl[e];t===void 0&&(t=new Int32Array(e),Bl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Um(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Nm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2fv(this.addr,e),bt(t,e)}}function Fm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;s.uniform3fv(this.addr,e),bt(t,e)}}function Om(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4fv(this.addr,e),bt(t,e)}}function km(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Gl.set(n),s.uniformMatrix2fv(this.addr,!1,Gl),bt(t,n)}}function Bm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Hl.set(n),s.uniformMatrix3fv(this.addr,!1,Hl),bt(t,n)}}function zm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;zl.set(n),s.uniformMatrix4fv(this.addr,!1,zl),bt(t,n)}}function Hm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Gm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2iv(this.addr,e),bt(t,e)}}function Vm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3iv(this.addr,e),bt(t,e)}}function Wm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4iv(this.addr,e),bt(t,e)}}function Xm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function qm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2uiv(this.addr,e),bt(t,e)}}function jm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3uiv(this.addr,e),bt(t,e)}}function Ym(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4uiv(this.addr,e),bt(t,e)}}function Km(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?dh:uh;t.setTexture2D(e||r,i)}function Zm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ph,i)}function $m(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||mh,i)}function Jm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||fh,i)}function Qm(s){switch(s){case 5126:return Um;case 35664:return Nm;case 35665:return Fm;case 35666:return Om;case 35674:return km;case 35675:return Bm;case 35676:return zm;case 5124:case 35670:return Hm;case 35667:case 35671:return Gm;case 35668:case 35672:return Vm;case 35669:case 35673:return Wm;case 5125:return Xm;case 36294:return qm;case 36295:return jm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Jm}}function e0(s,e){s.uniform1fv(this.addr,e)}function t0(s,e){const t=ls(e,this.size,2);s.uniform2fv(this.addr,t)}function n0(s,e){const t=ls(e,this.size,3);s.uniform3fv(this.addr,t)}function i0(s,e){const t=ls(e,this.size,4);s.uniform4fv(this.addr,t)}function s0(s,e){const t=ls(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function r0(s,e){const t=ls(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function a0(s,e){const t=ls(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function o0(s,e){s.uniform1iv(this.addr,e)}function l0(s,e){s.uniform2iv(this.addr,e)}function c0(s,e){s.uniform3iv(this.addr,e)}function h0(s,e){s.uniform4iv(this.addr,e)}function u0(s,e){s.uniform1uiv(this.addr,e)}function d0(s,e){s.uniform2uiv(this.addr,e)}function f0(s,e){s.uniform3uiv(this.addr,e)}function p0(s,e){s.uniform4uiv(this.addr,e)}function m0(s,e,t){const n=this.cache,i=e.length,r=Ur(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||uh,r[a])}function g0(s,e,t){const n=this.cache,i=e.length,r=Ur(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||ph,r[a])}function _0(s,e,t){const n=this.cache,i=e.length,r=Ur(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||mh,r[a])}function x0(s,e,t){const n=this.cache,i=e.length,r=Ur(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||fh,r[a])}function v0(s){switch(s){case 5126:return e0;case 35664:return t0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return r0;case 35676:return a0;case 5124:case 35670:return o0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return h0;case 5125:return u0;case 36294:return d0;case 36295:return f0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return x0}}class y0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qm(t.type)}}class M0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=v0(t.type)}}class b0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const _a=/(\w+)(\])?(\[|\.)?/g;function Vl(s,e){s.seq.push(e),s.map[e.id]=e}function S0(s,e,t){const n=s.name,i=n.length;for(_a.lastIndex=0;;){const r=_a.exec(n),a=_a.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Vl(t,c===void 0?new y0(o,s,e):new M0(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new b0(o),Vl(t,d)),t=d}}}class vr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);S0(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Wl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const E0=37297;let w0=0;function T0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function A0(s){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(s);let n;switch(e===t?n="":e===Tr&&t===wr?n="LinearDisplayP3ToLinearSRGB":e===wr&&t===Tr&&(n="LinearSRGBToLinearDisplayP3"),s){case Lt:case Pr:return[n,"LinearTransferOETF"];case at:case ao:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Xl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+T0(s.getShaderSource(e),a)}else return i}function R0(s,e){const t=A0(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function C0(s,e){let t;switch(e){case bu:t="Linear";break;case Su:t="Reinhard";break;case Eu:t="OptimizedCineon";break;case Bc:t="ACESFilmic";break;case Tu:t="AgX";break;case wu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function L0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xi).join(`
`)}function P0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Xi).join(`
`)}function I0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function D0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Xi(s){return s!==""}function ql(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const U0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(s){return s.replace(U0,F0)}const N0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function F0(s,e){let t=Oe[e];if(t===void 0){const n=N0.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ha(t)}const O0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yl(s){return s.replace(O0,k0)}function k0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Kl(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function B0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Fc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Oc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Rn&&(e="SHADOWMAP_TYPE_VSM"),e}function z0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ji:case Qi:e="ENVMAP_TYPE_CUBE";break;case Lr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function H0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Qi:e="ENVMAP_MODE_REFRACTION";break}return e}function G0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case kc:e="ENVMAP_BLENDING_MULTIPLY";break;case yu:e="ENVMAP_BLENDING_MIX";break;case Mu:e="ENVMAP_BLENDING_ADD";break}return e}function V0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function W0(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=B0(t),c=z0(t),h=H0(t),d=G0(t),u=V0(t),f=t.isWebGL2?"":L0(t),g=P0(t),_=I0(r),m=i.createProgram();let p,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Xi).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Xi).join(`
`),y.length>0&&(y+=`
`)):(p=[Kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),y=[f,Kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==jn?C0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,R0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xi).join(`
`)),a=Ha(a),a=ql(a,t),a=jl(a,t),o=Ha(o),o=ql(o,t),o=jl(o,t),a=Yl(a),o=Yl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=x+p+a,L=x+y+o,A=Wl(i,i.VERTEX_SHADER,b),T=Wl(i,i.FRAGMENT_SHADER,L);i.attachShader(m,A),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function z(q){if(s.debug.checkShaderErrors){const re=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(A).trim(),B=i.getShaderInfoLog(T).trim();let W=!0,Y=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,A,T);else{const X=Xl(i,A,"vertex"),j=Xl(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+X+`
`+j)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(P===""||B==="")&&(Y=!1);Y&&(q.diagnostics={runnable:W,programLog:re,vertexShader:{log:P,prefix:p},fragmentShader:{log:B,prefix:y}})}i.deleteShader(A),i.deleteShader(T),S=new vr(i,m),w=D0(i,m)}let S;this.getUniforms=function(){return S===void 0&&z(this),S};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=i.getProgramParameter(m,E0)),V},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=w0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=T,this}let X0=0;class q0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new j0(e),t.set(e,n)),n}}class j0{constructor(e){this.id=X0++,this.code=e,this.usedTimes=0}}function Y0(s,e,t,n,i,r,a){const o=new lo,l=new q0,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,w,V,q,re){const P=q.fog,B=re.geometry,W=S.isMeshStandardMaterial?q.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),X=Y&&Y.mapping===Lr?Y.image.height:null,j=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const K=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,te=K!==void 0?K.length:0;let ne=0;B.morphAttributes.position!==void 0&&(ne=1),B.morphAttributes.normal!==void 0&&(ne=2),B.morphAttributes.color!==void 0&&(ne=3);let G,Z,ce,ve;if(j){const Ot=pn[j];G=Ot.vertexShader,Z=Ot.fragmentShader}else G=S.vertexShader,Z=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),ve=l.getFragmentShaderID(S);const _e=s.getRenderTarget(),De=re.isInstancedMesh===!0,Ne=re.isBatchedMesh===!0,we=!!S.map,je=!!S.matcap,U=!!Y,Ft=!!S.aoMap,Me=!!S.lightMap,Pe=!!S.bumpMap,pe=!!S.normalMap,ut=!!S.displacementMap,Be=!!S.emissiveMap,E=!!S.metalnessMap,v=!!S.roughnessMap,F=S.anisotropy>0,Q=S.clearcoat>0,J=S.iridescence>0,ee=S.sheen>0,me=S.transmission>0,le=F&&!!S.anisotropyMap,de=Q&&!!S.clearcoatMap,Ee=Q&&!!S.clearcoatNormalMap,ze=Q&&!!S.clearcoatRoughnessMap,$=J&&!!S.iridescenceMap,Je=J&&!!S.iridescenceThicknessMap,Xe=ee&&!!S.sheenColorMap,Ce=ee&&!!S.sheenRoughnessMap,ye=!!S.specularMap,fe=!!S.specularColorMap,Fe=!!S.specularIntensityMap,$e=me&&!!S.transmissionMap,ft=me&&!!S.thicknessMap,Ge=!!S.gradientMap,ie=!!S.alphaMap,C=S.alphaTest>0,ae=!!S.alphaHash,oe=!!S.extensions,Te=!!B.attributes.uv1,be=!!B.attributes.uv2,nt=!!B.attributes.uv3;let it=jn;return S.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(it=s.toneMapping),{isWebGL2:h,shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:G,fragmentShader:Z,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:ve,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ne,instancing:De,instancingColor:De&&re.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Lt,map:we,matcap:je,envMap:U,envMapMode:U&&Y.mapping,envMapCubeUVHeight:X,aoMap:Ft,lightMap:Me,bumpMap:Pe,normalMap:pe,displacementMap:u&&ut,emissiveMap:Be,normalMapObjectSpace:pe&&S.normalMapType===Vu,normalMapTangentSpace:pe&&S.normalMapType===$c,metalnessMap:E,roughnessMap:v,anisotropy:F,anisotropyMap:le,clearcoat:Q,clearcoatMap:de,clearcoatNormalMap:Ee,clearcoatRoughnessMap:ze,iridescence:J,iridescenceMap:$,iridescenceThicknessMap:Je,sheen:ee,sheenColorMap:Xe,sheenRoughnessMap:Ce,specularMap:ye,specularColorMap:fe,specularIntensityMap:Fe,transmission:me,transmissionMap:$e,thicknessMap:ft,gradientMap:Ge,opaque:S.transparent===!1&&S.blending===Ki,alphaMap:ie,alphaTest:C,alphaHash:ae,combine:S.combine,mapUv:we&&_(S.map.channel),aoMapUv:Ft&&_(S.aoMap.channel),lightMapUv:Me&&_(S.lightMap.channel),bumpMapUv:Pe&&_(S.bumpMap.channel),normalMapUv:pe&&_(S.normalMap.channel),displacementMapUv:ut&&_(S.displacementMap.channel),emissiveMapUv:Be&&_(S.emissiveMap.channel),metalnessMapUv:E&&_(S.metalnessMap.channel),roughnessMapUv:v&&_(S.roughnessMap.channel),anisotropyMapUv:le&&_(S.anisotropyMap.channel),clearcoatMapUv:de&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(S.sheenRoughnessMap.channel),specularMapUv:ye&&_(S.specularMap.channel),specularColorMapUv:fe&&_(S.specularColorMap.channel),specularIntensityMapUv:Fe&&_(S.specularIntensityMap.channel),transmissionMapUv:$e&&_(S.transmissionMap.channel),thicknessMapUv:ft&&_(S.thicknessMap.channel),alphaMapUv:ie&&_(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(pe||F),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:be,vertexUv3s:nt,pointsUvs:re.isPoints===!0&&!!B.attributes.uv&&(we||ie),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:re.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ne,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,useLegacyLights:s._useLegacyLights,decodeVideoTexture:we&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===on,flipSided:S.side===Wt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:oe&&S.extensions.derivatives===!0,extensionFragDepth:oe&&S.extensions.fragDepth===!0,extensionDrawBuffers:oe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const V in S.defines)w.push(V),w.push(S.defines[V]);return S.isRawShaderMaterial===!1&&(y(w,S),x(w,S),w.push(s.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function y(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function x(S,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function b(S){const w=g[S.type];let V;if(w){const q=pn[w];V=Cd.clone(q.uniforms)}else V=S.uniforms;return V}function L(S,w){let V;for(let q=0,re=c.length;q<re;q++){const P=c[q];if(P.cacheKey===w){V=P,++V.usedTimes;break}}return V===void 0&&(V=new W0(s,w,S,r),c.push(V)),V}function A(S){if(--S.usedTimes===0){const w=c.indexOf(S);c[w]=c[c.length-1],c.pop(),S.destroy()}}function T(S){l.remove(S)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:L,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:z}}function K0(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Z0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Zl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function $l(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,u,f,g,_,m){let p=s[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function o(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||Z0),n.length>1&&n.sort(u||Zl),i.length>1&&i.sort(u||Zl)}function h(){for(let d=e,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function $0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new $l,s.set(n,[a])):i>=r.length?(a=new $l,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function J0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new xe};break;case"SpotLight":t={position:new R,direction:new R,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function Q0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let eg=0;function tg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ng(s,e){const t=new J0,n=Q0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new R);const r=new R,a=new Ae,o=new Ae;function l(h,d){let u=0,f=0,g=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let _=0,m=0,p=0,y=0,x=0,b=0,L=0,A=0,T=0,z=0,S=0;h.sort(tg);const w=d===!0?Math.PI:1;for(let q=0,re=h.length;q<re;q++){const P=h[q],B=P.color,W=P.intensity,Y=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=B.r*W*w,f+=B.g*W*w,g+=B.b*W*w;else if(P.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(P.sh.coefficients[j],W);S++}else if(P.isDirectionalLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const K=P.shadow,te=n.get(P);te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,i.directionalShadow[_]=te,i.directionalShadowMap[_]=X,i.directionalShadowMatrix[_]=P.shadow.matrix,b++}i.directional[_]=j,_++}else if(P.isSpotLight){const j=t.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(B).multiplyScalar(W*w),j.distance=Y,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,i.spot[p]=j;const K=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,K.updateMatrices(P),P.castShadow&&z++),i.spotLightMatrix[p]=K.matrix,P.castShadow){const te=n.get(P);te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,i.spotShadow[p]=te,i.spotShadowMap[p]=X,A++}p++}else if(P.isRectAreaLight){const j=t.get(P);j.color.copy(B).multiplyScalar(W),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),i.rectArea[y]=j,y++}else if(P.isPointLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*w),j.distance=P.distance,j.decay=P.decay,P.castShadow){const K=P.shadow,te=n.get(P);te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,te.shadowCameraNear=K.camera.near,te.shadowCameraFar=K.camera.far,i.pointShadow[m]=te,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=P.shadow.matrix,L++}i.point[m]=j,m++}else if(P.isHemisphereLight){const j=t.get(P);j.skyColor.copy(P.color).multiplyScalar(W*w),j.groundColor.copy(P.groundColor).multiplyScalar(W*w),i.hemi[x]=j,x++}}y>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;const V=i.hash;(V.directionalLength!==_||V.pointLength!==m||V.spotLength!==p||V.rectAreaLength!==y||V.hemiLength!==x||V.numDirectionalShadows!==b||V.numPointShadows!==L||V.numSpotShadows!==A||V.numSpotMaps!==T||V.numLightProbes!==S)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=A+T-z,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=S,V.directionalLength=_,V.pointLength=m,V.spotLength=p,V.rectAreaLength=y,V.hemiLength=x,V.numDirectionalShadows=b,V.numPointShadows=L,V.numSpotShadows=A,V.numSpotMaps=T,V.numLightProbes=S,i.version=eg++)}function c(h,d){let u=0,f=0,g=0,_=0,m=0;const p=d.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){const b=h[y];if(b.isDirectionalLight){const L=i.directional[u];L.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(p),u++}else if(b.isSpotLight){const L=i.spot[g];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(p),L.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(p),g++}else if(b.isRectAreaLight){const L=i.rectArea[_];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(p),o.identity(),a.copy(b.matrixWorld),a.premultiply(p),o.extractRotation(a),L.halfWidth.set(b.width*.5,0,0),L.halfHeight.set(0,b.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const L=i.point[f];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const L=i.hemi[m];L.direction.setFromMatrixPosition(b.matrixWorld),L.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Jl(s,e){const t=new ng(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ig(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Jl(s,e),t.set(r,[l])):a>=o.length?(l=new Jl(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class sg extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rg extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,og=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lg(s,e,t){let n=new Dr;const i=new ke,r=new ke,a=new et,o=new sg({depthPacking:Gu}),l=new rg,c={},h=t.maxTextureSize,d={[xn]:Wt,[Wt]:xn,[on]:on},u=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:ag,fragmentShader:og}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Pt;g.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new tt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc;let p=this.type;this.render=function(A,T,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=s.getRenderTarget(),w=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),q=s.state;q.setBlending(qn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const re=p!==Rn&&this.type===Rn,P=p===Rn&&this.type!==Rn;for(let B=0,W=A.length;B<W;B++){const Y=A[B],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const j=X.getFrameExtents();if(i.multiply(j),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,X.mapSize.y=r.y)),X.map===null||re===!0||P===!0){const te=this.type!==Rn?{minFilter:Tt,magFilter:Tt}:{};X.map!==null&&X.map.dispose(),X.map=new Zn(i.x,i.y,te),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const K=X.getViewportCount();for(let te=0;te<K;te++){const ne=X.getViewport(te);a.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),q.viewport(a),X.updateMatrices(Y,te),n=X.getFrustum(),b(T,z,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===Rn&&y(X,z),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,w,V)};function y(A,T){const z=e.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zn(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(T,null,z,u,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(T,null,z,f,_,null)}function x(A,T,z,S){let w=null;const V=z.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(V!==void 0)w=V;else if(w=z.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const q=w.uuid,re=T.uuid;let P=c[q];P===void 0&&(P={},c[q]=P);let B=P[re];B===void 0&&(B=w.clone(),P[re]=B,T.addEventListener("dispose",L)),w=B}if(w.visible=T.visible,w.wireframe=T.wireframe,S===Rn?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:d[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const q=s.properties.get(w);q.light=z}return w}function b(A,T,z,S,w){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Rn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld);const re=e.update(A),P=A.material;if(Array.isArray(P)){const B=re.groups;for(let W=0,Y=B.length;W<Y;W++){const X=B[W],j=P[X.materialIndex];if(j&&j.visible){const K=x(A,j,S,w);A.onBeforeShadow(s,A,T,z,re,K,X),s.renderBufferDirect(z,null,re,K,A,X),A.onAfterShadow(s,A,T,z,re,K,X)}}}else if(P.visible){const B=x(A,P,S,w);A.onBeforeShadow(s,A,T,z,re,B,null),s.renderBufferDirect(z,null,re,B,A,null),A.onAfterShadow(s,A,T,z,re,B,null)}}const q=A.children;for(let re=0,P=q.length;re<P;re++)b(q[re],T,z,S,w)}function L(A){A.target.removeEventListener("dispose",L);for(const z in c){const S=c[z],w=A.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function cg(s,e,t){const n=t.isWebGL2;function i(){let C=!1;const ae=new et;let oe=null;const Te=new et(0,0,0,0);return{setMask:function(be){oe!==be&&!C&&(s.colorMask(be,be,be,be),oe=be)},setLocked:function(be){C=be},setClear:function(be,nt,it,St,Ot){Ot===!0&&(be*=St,nt*=St,it*=St),ae.set(be,nt,it,St),Te.equals(ae)===!1&&(s.clearColor(be,nt,it,St),Te.copy(ae))},reset:function(){C=!1,oe=null,Te.set(-1,0,0,0)}}}function r(){let C=!1,ae=null,oe=null,Te=null;return{setTest:function(be){be?Ne(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(be){ae!==be&&!C&&(s.depthMask(be),ae=be)},setFunc:function(be){if(oe!==be){switch(be){case fu:s.depthFunc(s.NEVER);break;case pu:s.depthFunc(s.ALWAYS);break;case mu:s.depthFunc(s.LESS);break;case Mr:s.depthFunc(s.LEQUAL);break;case gu:s.depthFunc(s.EQUAL);break;case _u:s.depthFunc(s.GEQUAL);break;case xu:s.depthFunc(s.GREATER);break;case vu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}oe=be}},setLocked:function(be){C=be},setClear:function(be){Te!==be&&(s.clearDepth(be),Te=be)},reset:function(){C=!1,ae=null,oe=null,Te=null}}}function a(){let C=!1,ae=null,oe=null,Te=null,be=null,nt=null,it=null,St=null,Ot=null;return{setTest:function(st){C||(st?Ne(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(st){ae!==st&&!C&&(s.stencilMask(st),ae=st)},setFunc:function(st,kt,dn){(oe!==st||Te!==kt||be!==dn)&&(s.stencilFunc(st,kt,dn),oe=st,Te=kt,be=dn)},setOp:function(st,kt,dn){(nt!==st||it!==kt||St!==dn)&&(s.stencilOp(st,kt,dn),nt=st,it=kt,St=dn)},setLocked:function(st){C=st},setClear:function(st){Ot!==st&&(s.clearStencil(st),Ot=st)},reset:function(){C=!1,ae=null,oe=null,Te=null,be=null,nt=null,it=null,St=null,Ot=null}}}const o=new i,l=new r,c=new a,h=new WeakMap,d=new WeakMap;let u={},f={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,b=null,L=null,A=null,T=null,z=null,S=new xe(0,0,0),w=0,V=!1,q=null,re=null,P=null,B=null,W=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=j>=1):K.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=j>=2);let te=null,ne={};const G=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),ce=new et().fromArray(G),ve=new et().fromArray(Z);function _e(C,ae,oe,Te){const be=new Uint8Array(4),nt=s.createTexture();s.bindTexture(C,nt),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let it=0;it<oe;it++)n&&(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)?s.texImage3D(ae,0,s.RGBA,1,1,Te,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(ae+it,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return nt}const De={};De[s.TEXTURE_2D]=_e(s.TEXTURE_2D,s.TEXTURE_2D,1),De[s.TEXTURE_CUBE_MAP]=_e(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(De[s.TEXTURE_2D_ARRAY]=_e(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),De[s.TEXTURE_3D]=_e(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(s.DEPTH_TEST),l.setFunc(Mr),Be(!1),E(Uo),Ne(s.CULL_FACE),pe(qn);function Ne(C){u[C]!==!0&&(s.enable(C),u[C]=!0)}function we(C){u[C]!==!1&&(s.disable(C),u[C]=!1)}function je(C,ae){return f[C]!==ae?(s.bindFramebuffer(C,ae),f[C]=ae,n&&(C===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ae),C===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ae)),!0):!1}function U(C,ae){let oe=_,Te=!1;if(C)if(oe=g.get(ae),oe===void 0&&(oe=[],g.set(ae,oe)),C.isWebGLMultipleRenderTargets){const be=C.texture;if(oe.length!==be.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let nt=0,it=be.length;nt<it;nt++)oe[nt]=s.COLOR_ATTACHMENT0+nt;oe.length=be.length,Te=!0}}else oe[0]!==s.COLOR_ATTACHMENT0&&(oe[0]=s.COLOR_ATTACHMENT0,Te=!0);else oe[0]!==s.BACK&&(oe[0]=s.BACK,Te=!0);Te&&(t.isWebGL2?s.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function Ft(C){return m!==C?(s.useProgram(C),m=C,!0):!1}const Me={[hi]:s.FUNC_ADD,[Jh]:s.FUNC_SUBTRACT,[Qh]:s.FUNC_REVERSE_SUBTRACT};if(n)Me[ko]=s.MIN,Me[Bo]=s.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(Me[ko]=C.MIN_EXT,Me[Bo]=C.MAX_EXT)}const Pe={[eu]:s.ZERO,[tu]:s.ONE,[nu]:s.SRC_COLOR,[Ia]:s.SRC_ALPHA,[lu]:s.SRC_ALPHA_SATURATE,[au]:s.DST_COLOR,[su]:s.DST_ALPHA,[iu]:s.ONE_MINUS_SRC_COLOR,[Da]:s.ONE_MINUS_SRC_ALPHA,[ou]:s.ONE_MINUS_DST_COLOR,[ru]:s.ONE_MINUS_DST_ALPHA,[cu]:s.CONSTANT_COLOR,[hu]:s.ONE_MINUS_CONSTANT_COLOR,[uu]:s.CONSTANT_ALPHA,[du]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(C,ae,oe,Te,be,nt,it,St,Ot,st){if(C===qn){p===!0&&(we(s.BLEND),p=!1);return}if(p===!1&&(Ne(s.BLEND),p=!0),C!==$h){if(C!==y||st!==V){if((x!==hi||A!==hi)&&(s.blendEquation(s.FUNC_ADD),x=hi,A=hi),st)switch(C){case Ki:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case No:s.blendFunc(s.ONE,s.ONE);break;case Fo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Oo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Ki:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case No:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Fo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Oo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}b=null,L=null,T=null,z=null,S.set(0,0,0),w=0,y=C,V=st}return}be=be||ae,nt=nt||oe,it=it||Te,(ae!==x||be!==A)&&(s.blendEquationSeparate(Me[ae],Me[be]),x=ae,A=be),(oe!==b||Te!==L||nt!==T||it!==z)&&(s.blendFuncSeparate(Pe[oe],Pe[Te],Pe[nt],Pe[it]),b=oe,L=Te,T=nt,z=it),(St.equals(S)===!1||Ot!==w)&&(s.blendColor(St.r,St.g,St.b,Ot),S.copy(St),w=Ot),y=C,V=!1}function ut(C,ae){C.side===on?we(s.CULL_FACE):Ne(s.CULL_FACE);let oe=C.side===Wt;ae&&(oe=!oe),Be(oe),C.blending===Ki&&C.transparent===!1?pe(qn):pe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);const Te=C.stencilWrite;c.setTest(Te),Te&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),F(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ne(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function Be(C){q!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),q=C)}function E(C){C!==Kh?(Ne(s.CULL_FACE),C!==re&&(C===Uo?s.cullFace(s.BACK):C===Zh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),re=C}function v(C){C!==P&&(X&&s.lineWidth(C),P=C)}function F(C,ae,oe){C?(Ne(s.POLYGON_OFFSET_FILL),(B!==ae||W!==oe)&&(s.polygonOffset(ae,oe),B=ae,W=oe)):we(s.POLYGON_OFFSET_FILL)}function Q(C){C?Ne(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function J(C){C===void 0&&(C=s.TEXTURE0+Y-1),te!==C&&(s.activeTexture(C),te=C)}function ee(C,ae,oe){oe===void 0&&(te===null?oe=s.TEXTURE0+Y-1:oe=te);let Te=ne[oe];Te===void 0&&(Te={type:void 0,texture:void 0},ne[oe]=Te),(Te.type!==C||Te.texture!==ae)&&(te!==oe&&(s.activeTexture(oe),te=oe),s.bindTexture(C,ae||De[C]),Te.type=C,Te.texture=ae)}function me(){const C=ne[te];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function le(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{s.compressedTexImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ee(){try{s.texSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ze(){try{s.texSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Je(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Xe(){try{s.texStorage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ce(){try{s.texStorage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ye(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Fe(C){ce.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),ce.copy(C))}function $e(C){ve.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),ve.copy(C))}function ft(C,ae){let oe=d.get(ae);oe===void 0&&(oe=new WeakMap,d.set(ae,oe));let Te=oe.get(C);Te===void 0&&(Te=s.getUniformBlockIndex(ae,C.name),oe.set(C,Te))}function Ge(C,ae){const Te=d.get(ae).get(C);h.get(ae)!==Te&&(s.uniformBlockBinding(ae,Te,C.__bindingPointIndex),h.set(ae,Te))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},te=null,ne={},f={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,b=null,L=null,A=null,T=null,z=null,S=new xe(0,0,0),w=0,V=!1,q=null,re=null,P=null,B=null,W=null,ce.set(0,0,s.canvas.width,s.canvas.height),ve.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ne,disable:we,bindFramebuffer:je,drawBuffers:U,useProgram:Ft,setBlending:pe,setMaterial:ut,setFlipSided:Be,setCullFace:E,setLineWidth:v,setPolygonOffset:F,setScissorTest:Q,activeTexture:J,bindTexture:ee,unbindTexture:me,compressedTexImage2D:le,compressedTexImage3D:de,texImage2D:ye,texImage3D:fe,updateUBOMapping:ft,uniformBlockBinding:Ge,texStorage2D:Xe,texStorage3D:Ce,texSubImage2D:Ee,texSubImage3D:ze,compressedTexSubImage2D:$,compressedTexSubImage3D:Je,scissor:Fe,viewport:$e,reset:ie}}function hg(s,e,t,n,i,r,a){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return f?new OffscreenCanvas(E,v):Ls("canvas")}function _(E,v,F,Q){let J=1;if((E.width>Q||E.height>Q)&&(J=Q/Math.max(E.width,E.height)),J<1||v===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ee=v?Rr:Math.floor,me=ee(J*E.width),le=ee(J*E.height);d===void 0&&(d=g(me,le));const de=F?g(me,le):d;return de.width=me,de.height=le,de.getContext("2d").drawImage(E,0,0,me,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+me+"x"+le+")."),de}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return za(E.width)&&za(E.height)}function p(E){return o?!1:E.wrapS!==Qt||E.wrapT!==Qt||E.minFilter!==Tt&&E.minFilter!==Vt}function y(E,v){return E.generateMipmaps&&v&&E.minFilter!==Tt&&E.minFilter!==Vt}function x(E){s.generateMipmap(E)}function b(E,v,F,Q,J=!1){if(o===!1)return v;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ee=v;if(v===s.RED&&(F===s.FLOAT&&(ee=s.R32F),F===s.HALF_FLOAT&&(ee=s.R16F),F===s.UNSIGNED_BYTE&&(ee=s.R8)),v===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(ee=s.R8UI),F===s.UNSIGNED_SHORT&&(ee=s.R16UI),F===s.UNSIGNED_INT&&(ee=s.R32UI),F===s.BYTE&&(ee=s.R8I),F===s.SHORT&&(ee=s.R16I),F===s.INT&&(ee=s.R32I)),v===s.RG&&(F===s.FLOAT&&(ee=s.RG32F),F===s.HALF_FLOAT&&(ee=s.RG16F),F===s.UNSIGNED_BYTE&&(ee=s.RG8)),v===s.RGBA){const me=J?Er:Ze.getTransfer(Q);F===s.FLOAT&&(ee=s.RGBA32F),F===s.HALF_FLOAT&&(ee=s.RGBA16F),F===s.UNSIGNED_BYTE&&(ee=me===lt?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function L(E,v,F){return y(E,F)===!0||E.isFramebufferTexture&&E.minFilter!==Tt&&E.minFilter!==Vt?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function A(E){return E===Tt||E===Fa||E===xr?s.NEAREST:s.LINEAR}function T(E){const v=E.target;v.removeEventListener("dispose",T),S(v),v.isVideoTexture&&h.delete(v)}function z(E){const v=E.target;v.removeEventListener("dispose",z),V(v)}function S(E){const v=n.get(E);if(v.__webglInit===void 0)return;const F=E.source,Q=u.get(F);if(Q){const J=Q[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(E),Object.keys(Q).length===0&&u.delete(F)}n.remove(E)}function w(E){const v=n.get(E);s.deleteTexture(v.__webglTexture);const F=E.source,Q=u.get(F);delete Q[v.__cacheKey],a.memory.textures--}function V(E){const v=E.texture,F=n.get(E),Q=n.get(v);if(Q.__webglTexture!==void 0&&(s.deleteTexture(Q.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(F.__webglFramebuffer[J]))for(let ee=0;ee<F.__webglFramebuffer[J].length;ee++)s.deleteFramebuffer(F.__webglFramebuffer[J][ee]);else s.deleteFramebuffer(F.__webglFramebuffer[J]);F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer[J])}else{if(Array.isArray(F.__webglFramebuffer))for(let J=0;J<F.__webglFramebuffer.length;J++)s.deleteFramebuffer(F.__webglFramebuffer[J]);else s.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&s.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let J=0;J<F.__webglColorRenderbuffer.length;J++)F.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(F.__webglColorRenderbuffer[J]);F.__webglDepthRenderbuffer&&s.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let J=0,ee=v.length;J<ee;J++){const me=n.get(v[J]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(v[J])}n.remove(v),n.remove(E)}let q=0;function re(){q=0}function P(){const E=q;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),q+=1,E}function B(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function W(E,v){const F=n.get(E);if(E.isVideoTexture&&ut(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(F,E,v);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+v)}function Y(E,v){const F=n.get(E);if(E.version>0&&F.__version!==E.version){ce(F,E,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+v)}function X(E,v){const F=n.get(E);if(E.version>0&&F.__version!==E.version){ce(F,E,v);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+v)}function j(E,v){const F=n.get(E);if(E.version>0&&F.__version!==E.version){ve(F,E,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+v)}const K={[Kn]:s.REPEAT,[Qt]:s.CLAMP_TO_EDGE,[br]:s.MIRRORED_REPEAT},te={[Tt]:s.NEAREST,[Fa]:s.NEAREST_MIPMAP_NEAREST,[xr]:s.NEAREST_MIPMAP_LINEAR,[Vt]:s.LINEAR,[Hc]:s.LINEAR_MIPMAP_NEAREST,[gi]:s.LINEAR_MIPMAP_LINEAR},ne={[Wu]:s.NEVER,[Zu]:s.ALWAYS,[Xu]:s.LESS,[Jc]:s.LEQUAL,[qu]:s.EQUAL,[Ku]:s.GEQUAL,[ju]:s.GREATER,[Yu]:s.NOTEQUAL};function G(E,v,F){if(F?(s.texParameteri(E,s.TEXTURE_WRAP_S,K[v.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,K[v.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,K[v.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,te[v.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,te[v.minFilter])):(s.texParameteri(E,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(E,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(v.wrapS!==Qt||v.wrapT!==Qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,s.TEXTURE_MAG_FILTER,A(v.magFilter)),s.texParameteri(E,s.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==Tt&&v.minFilter!==Vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,ne[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Tt||v.minFilter!==xr&&v.minFilter!==gi||v.type===Cn&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===Rs&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(s.texParameterf(E,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function Z(E,v){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",T));const Q=v.source;let J=u.get(Q);J===void 0&&(J={},u.set(Q,J));const ee=B(v);if(ee!==E.__cacheKey){J[ee]===void 0&&(J[ee]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[ee].usedTimes++;const me=J[E.__cacheKey];me!==void 0&&(J[E.__cacheKey].usedTimes--,me.usedTimes===0&&w(v)),E.__cacheKey=ee,E.__webglTexture=J[ee].texture}return F}function ce(E,v,F){let Q=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Q=s.TEXTURE_3D);const J=Z(E,v),ee=v.source;t.bindTexture(Q,E.__webglTexture,s.TEXTURE0+F);const me=n.get(ee);if(ee.version!==me.__version||J===!0){t.activeTexture(s.TEXTURE0+F);const le=Ze.getPrimaries(Ze.workingColorSpace),de=v.colorSpace===tn?null:Ze.getPrimaries(v.colorSpace),Ee=v.colorSpace===tn||le===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const ze=p(v)&&m(v.image)===!1;let $=_(v.image,ze,!1,i.maxTextureSize);$=Be(v,$);const Je=m($)||o,Xe=r.convert(v.format,v.colorSpace);let Ce=r.convert(v.type),ye=b(v.internalFormat,Xe,Ce,v.colorSpace,v.isVideoTexture);G(Q,v,Je);let fe;const Fe=v.mipmaps,$e=o&&v.isVideoTexture!==!0&&ye!==Yc,ft=me.__version===void 0||J===!0,Ge=L(v,$,Je);if(v.isDepthTexture)ye=s.DEPTH_COMPONENT,o?v.type===Cn?ye=s.DEPTH_COMPONENT32F:v.type===Vn?ye=s.DEPTH_COMPONENT24:v.type===fi?ye=s.DEPTH24_STENCIL8:ye=s.DEPTH_COMPONENT16:v.type===Cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===pi&&ye===s.DEPTH_COMPONENT&&v.type!==so&&v.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Vn,Ce=r.convert(v.type)),v.format===es&&ye===s.DEPTH_COMPONENT&&(ye=s.DEPTH_STENCIL,v.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=fi,Ce=r.convert(v.type))),ft&&($e?t.texStorage2D(s.TEXTURE_2D,1,ye,$.width,$.height):t.texImage2D(s.TEXTURE_2D,0,ye,$.width,$.height,0,Xe,Ce,null));else if(v.isDataTexture)if(Fe.length>0&&Je){$e&&ft&&t.texStorage2D(s.TEXTURE_2D,Ge,ye,Fe[0].width,Fe[0].height);for(let ie=0,C=Fe.length;ie<C;ie++)fe=Fe[ie],$e?t.texSubImage2D(s.TEXTURE_2D,ie,0,0,fe.width,fe.height,Xe,Ce,fe.data):t.texImage2D(s.TEXTURE_2D,ie,ye,fe.width,fe.height,0,Xe,Ce,fe.data);v.generateMipmaps=!1}else $e?(ft&&t.texStorage2D(s.TEXTURE_2D,Ge,ye,$.width,$.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,$.width,$.height,Xe,Ce,$.data)):t.texImage2D(s.TEXTURE_2D,0,ye,$.width,$.height,0,Xe,Ce,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){$e&&ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,ye,Fe[0].width,Fe[0].height,$.depth);for(let ie=0,C=Fe.length;ie<C;ie++)fe=Fe[ie],v.format!==en?Xe!==null?$e?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,$.depth,Xe,fe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,ye,fe.width,fe.height,$.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,$.depth,Xe,Ce,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,ye,fe.width,fe.height,$.depth,0,Xe,Ce,fe.data)}else{$e&&ft&&t.texStorage2D(s.TEXTURE_2D,Ge,ye,Fe[0].width,Fe[0].height);for(let ie=0,C=Fe.length;ie<C;ie++)fe=Fe[ie],v.format!==en?Xe!==null?$e?t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,fe.width,fe.height,Xe,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,ye,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage2D(s.TEXTURE_2D,ie,0,0,fe.width,fe.height,Xe,Ce,fe.data):t.texImage2D(s.TEXTURE_2D,ie,ye,fe.width,fe.height,0,Xe,Ce,fe.data)}else if(v.isDataArrayTexture)$e?(ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,ye,$.width,$.height,$.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Xe,Ce,$.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ye,$.width,$.height,$.depth,0,Xe,Ce,$.data);else if(v.isData3DTexture)$e?(ft&&t.texStorage3D(s.TEXTURE_3D,Ge,ye,$.width,$.height,$.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Xe,Ce,$.data)):t.texImage3D(s.TEXTURE_3D,0,ye,$.width,$.height,$.depth,0,Xe,Ce,$.data);else if(v.isFramebufferTexture){if(ft)if($e)t.texStorage2D(s.TEXTURE_2D,Ge,ye,$.width,$.height);else{let ie=$.width,C=$.height;for(let ae=0;ae<Ge;ae++)t.texImage2D(s.TEXTURE_2D,ae,ye,ie,C,0,Xe,Ce,null),ie>>=1,C>>=1}}else if(Fe.length>0&&Je){$e&&ft&&t.texStorage2D(s.TEXTURE_2D,Ge,ye,Fe[0].width,Fe[0].height);for(let ie=0,C=Fe.length;ie<C;ie++)fe=Fe[ie],$e?t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Xe,Ce,fe):t.texImage2D(s.TEXTURE_2D,ie,ye,Xe,Ce,fe);v.generateMipmaps=!1}else $e?(ft&&t.texStorage2D(s.TEXTURE_2D,Ge,ye,$.width,$.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Xe,Ce,$)):t.texImage2D(s.TEXTURE_2D,0,ye,Xe,Ce,$);y(v,Je)&&x(Q),me.__version=ee.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ve(E,v,F){if(v.image.length!==6)return;const Q=Z(E,v),J=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+F);const ee=n.get(J);if(J.version!==ee.__version||Q===!0){t.activeTexture(s.TEXTURE0+F);const me=Ze.getPrimaries(Ze.workingColorSpace),le=v.colorSpace===tn?null:Ze.getPrimaries(v.colorSpace),de=v.colorSpace===tn||me===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ee=v.isCompressedTexture||v.image[0].isCompressedTexture,ze=v.image[0]&&v.image[0].isDataTexture,$=[];for(let ie=0;ie<6;ie++)!Ee&&!ze?$[ie]=_(v.image[ie],!1,!0,i.maxCubemapSize):$[ie]=ze?v.image[ie].image:v.image[ie],$[ie]=Be(v,$[ie]);const Je=$[0],Xe=m(Je)||o,Ce=r.convert(v.format,v.colorSpace),ye=r.convert(v.type),fe=b(v.internalFormat,Ce,ye,v.colorSpace),Fe=o&&v.isVideoTexture!==!0,$e=ee.__version===void 0||Q===!0;let ft=L(v,Je,Xe);G(s.TEXTURE_CUBE_MAP,v,Xe);let Ge;if(Ee){Fe&&$e&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ft,fe,Je.width,Je.height);for(let ie=0;ie<6;ie++){Ge=$[ie].mipmaps;for(let C=0;C<Ge.length;C++){const ae=Ge[C];v.format!==en?Ce!==null?Fe?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C,0,0,ae.width,ae.height,Ce,ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C,fe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C,0,0,ae.width,ae.height,Ce,ye,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C,fe,ae.width,ae.height,0,Ce,ye,ae.data)}}}else{Ge=v.mipmaps,Fe&&$e&&(Ge.length>0&&ft++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ft,fe,$[0].width,$[0].height));for(let ie=0;ie<6;ie++)if(ze){Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,$[ie].width,$[ie].height,Ce,ye,$[ie].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,fe,$[ie].width,$[ie].height,0,Ce,ye,$[ie].data);for(let C=0;C<Ge.length;C++){const oe=Ge[C].image[ie].image;Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C+1,0,0,oe.width,oe.height,Ce,ye,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C+1,fe,oe.width,oe.height,0,Ce,ye,oe.data)}}else{Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ce,ye,$[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,fe,Ce,ye,$[ie]);for(let C=0;C<Ge.length;C++){const ae=Ge[C];Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C+1,0,0,Ce,ye,ae.image[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C+1,fe,Ce,ye,ae.image[ie])}}}y(v,Xe)&&x(s.TEXTURE_CUBE_MAP),ee.__version=J.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function _e(E,v,F,Q,J,ee){const me=r.convert(F.format,F.colorSpace),le=r.convert(F.type),de=b(F.internalFormat,me,le,F.colorSpace);if(!n.get(v).__hasExternalTextures){const ze=Math.max(1,v.width>>ee),$=Math.max(1,v.height>>ee);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,ee,de,ze,$,v.depth,0,me,le,null):t.texImage2D(J,ee,de,ze,$,0,me,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),pe(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,J,n.get(F).__webglTexture,0,Pe(v)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,J,n.get(F).__webglTexture,ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(E,v,F){if(s.bindRenderbuffer(s.RENDERBUFFER,E),v.depthBuffer&&!v.stencilBuffer){let Q=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(F||pe(v)){const J=v.depthTexture;J&&J.isDepthTexture&&(J.type===Cn?Q=s.DEPTH_COMPONENT32F:J.type===Vn&&(Q=s.DEPTH_COMPONENT24));const ee=Pe(v);pe(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,Q,v.width,v.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,Q,v.width,v.height)}else s.renderbufferStorage(s.RENDERBUFFER,Q,v.width,v.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,E)}else if(v.depthBuffer&&v.stencilBuffer){const Q=Pe(v);F&&pe(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,v.width,v.height):pe(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,E)}else{const Q=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let J=0;J<Q.length;J++){const ee=Q[J],me=r.convert(ee.format,ee.colorSpace),le=r.convert(ee.type),de=b(ee.internalFormat,me,le,ee.colorSpace),Ee=Pe(v);F&&pe(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,de,v.width,v.height):pe(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,de,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,de,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ne(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);const Q=n.get(v.depthTexture).__webglTexture,J=Pe(v);if(v.depthTexture.format===pi)pe(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(v.depthTexture.format===es)pe(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function we(E){const v=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ne(v.__webglFramebuffer,E)}else if(F){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]=s.createRenderbuffer(),De(v.__webglDepthbuffer[Q],E,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=s.createRenderbuffer(),De(v.__webglDepthbuffer,E,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function je(E,v,F){const Q=n.get(E);v!==void 0&&_e(Q.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&we(E)}function U(E){const v=E.texture,F=n.get(E),Q=n.get(v);E.addEventListener("dispose",z),E.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=v.version,a.memory.textures++);const J=E.isWebGLCubeRenderTarget===!0,ee=E.isWebGLMultipleRenderTargets===!0,me=m(E)||o;if(J){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let de=0;de<v.mipmaps.length;de++)F.__webglFramebuffer[le][de]=s.createFramebuffer()}else F.__webglFramebuffer[le]=s.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)F.__webglFramebuffer[le]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(ee)if(i.drawBuffers){const le=E.texture;for(let de=0,Ee=le.length;de<Ee;de++){const ze=n.get(le[de]);ze.__webglTexture===void 0&&(ze.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&pe(E)===!1){const le=ee?v:[v];F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let de=0;de<le.length;de++){const Ee=le[de];F.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[de]);const ze=r.convert(Ee.format,Ee.colorSpace),$=r.convert(Ee.type),Je=b(Ee.internalFormat,ze,$,Ee.colorSpace,E.isXRRenderTarget===!0),Xe=Pe(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xe,Je,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,F.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),De(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),G(s.TEXTURE_CUBE_MAP,v,me);for(let le=0;le<6;le++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)_e(F.__webglFramebuffer[le][de],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,de);else _e(F.__webglFramebuffer[le],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);y(v,me)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const le=E.texture;for(let de=0,Ee=le.length;de<Ee;de++){const ze=le[de],$=n.get(ze);t.bindTexture(s.TEXTURE_2D,$.__webglTexture),G(s.TEXTURE_2D,ze,me),_e(F.__webglFramebuffer,E,ze,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,0),y(ze,me)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?le=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,Q.__webglTexture),G(le,v,me),o&&v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)_e(F.__webglFramebuffer[de],E,v,s.COLOR_ATTACHMENT0,le,de);else _e(F.__webglFramebuffer,E,v,s.COLOR_ATTACHMENT0,le,0);y(v,me)&&x(le),t.unbindTexture()}E.depthBuffer&&we(E)}function Ft(E){const v=m(E)||o,F=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0,J=F.length;Q<J;Q++){const ee=F[Q];if(y(ee,v)){const me=E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,le=n.get(ee).__webglTexture;t.bindTexture(me,le),x(me),t.unbindTexture()}}}function Me(E){if(o&&E.samples>0&&pe(E)===!1){const v=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],F=E.width,Q=E.height;let J=s.COLOR_BUFFER_BIT;const ee=[],me=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=n.get(E),de=E.isWebGLMultipleRenderTargets===!0;if(de)for(let Ee=0;Ee<v.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ee=0;Ee<v.length;Ee++){ee.push(s.COLOR_ATTACHMENT0+Ee),E.depthBuffer&&ee.push(me);const ze=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(ze===!1&&(E.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),de&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]),ze===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[me]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[me])),de){const $=n.get(v[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$,0)}s.blitFramebuffer(0,0,F,Q,0,0,F,Q,J,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let Ee=0;Ee<v.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]);const ze=n.get(v[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Pe(E){return Math.min(i.maxSamples,E.samples)}function pe(E){const v=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ut(E){const v=a.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function Be(E,v){const F=E.colorSpace,Q=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Ba||F!==Lt&&F!==tn&&(Ze.getTransfer(F)===lt?o===!1?e.has("EXT_sRGB")===!0&&Q===en?(E.format=Ba,E.minFilter=Vt,E.generateMipmaps=!1):v=eh.sRGBToLinear(v):(Q!==en||J!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}this.allocateTextureUnit=P,this.resetTextureUnits=re,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=X,this.setTextureCube=j,this.rebindTextures=je,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=pe}function ug(s,e,t){const n=t.isWebGL2;function i(r,a=tn){let o;const l=Ze.getTransfer(a);if(r===Yn)return s.UNSIGNED_BYTE;if(r===Vc)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Wc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Ru)return s.BYTE;if(r===Cu)return s.SHORT;if(r===so)return s.UNSIGNED_SHORT;if(r===Gc)return s.INT;if(r===Vn)return s.UNSIGNED_INT;if(r===Cn)return s.FLOAT;if(r===Rs)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Lu)return s.ALPHA;if(r===en)return s.RGBA;if(r===Pu)return s.LUMINANCE;if(r===Iu)return s.LUMINANCE_ALPHA;if(r===pi)return s.DEPTH_COMPONENT;if(r===es)return s.DEPTH_STENCIL;if(r===Ba)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Du)return s.RED;if(r===Xc)return s.RED_INTEGER;if(r===Uu)return s.RG;if(r===qc)return s.RG_INTEGER;if(r===jc)return s.RGBA_INTEGER;if(r===Wr||r===Xr||r===qr||r===jr)if(l===lt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Wr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===jr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Wr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===jr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ho||r===Go||r===Vo||r===Wo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ho)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Go)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Xo||r===qo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Xo)return l===lt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===qo)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===jo||r===Yo||r===Ko||r===Zo||r===$o||r===Jo||r===Qo||r===el||r===tl||r===nl||r===il||r===sl||r===rl||r===al)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===jo)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yo)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ko)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zo)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$o)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jo)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qo)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===el)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===tl)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===nl)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===il)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===sl)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rl)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===al)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Yr||r===ol||r===ll)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Yr)return l===lt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ol)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ll)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Nu||r===cl||r===hl||r===ul)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Yr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===cl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===hl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ul)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===fi?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class dg extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mt extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fg={type:"move"};class xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class pg extends yi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const y=[],x=[],b=new ke;let L=null;const A=new Nt;A.layers.enable(1),A.viewport=new et;const T=new Nt;T.layers.enable(2),T.viewport=new et;const z=[A,T],S=new dg;S.layers.enable(1),S.layers.enable(2);let w=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=y[G];return Z===void 0&&(Z=new xa,y[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=y[G];return Z===void 0&&(Z=new xa,y[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=y[G];return Z===void 0&&(Z=new xa,y[G]=Z),Z.getHandSpace()};function q(G){const Z=x.indexOf(G.inputSource);if(Z===-1)return;const ce=y[Z];ce!==void 0&&(ce.update(G.inputSource,G.frame,c||a),ce.dispatchEvent({type:G.type,data:G.inputSource}))}function re(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",re),i.removeEventListener("inputsourceschange",P);for(let G=0;G<y.length;G++){const Z=x[G];Z!==null&&(x[G]=null,y[G].disconnect(Z))}w=null,V=null,e.setRenderTarget(m),f=null,u=null,d=null,i=null,p=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",re),i.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(b),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Zn(f.framebufferWidth,f.framebufferHeight,{format:en,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,ce=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=_.stencil?es:pi,ce=_.stencil?fi:Vn);const _e={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(_e),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new Zn(u.textureWidth,u.textureHeight,{format:en,type:Yn,depthTexture:new hh(u.textureWidth,u.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const De=e.properties.get(p);De.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ne.setContext(i),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(G){for(let Z=0;Z<G.removed.length;Z++){const ce=G.removed[Z],ve=x.indexOf(ce);ve>=0&&(x[ve]=null,y[ve].disconnect(ce))}for(let Z=0;Z<G.added.length;Z++){const ce=G.added[Z];let ve=x.indexOf(ce);if(ve===-1){for(let De=0;De<y.length;De++)if(De>=x.length){x.push(ce),ve=De;break}else if(x[De]===null){x[De]=ce,ve=De;break}if(ve===-1)break}const _e=y[ve];_e&&_e.connect(ce)}}const B=new R,W=new R;function Y(G,Z,ce){B.setFromMatrixPosition(Z.matrixWorld),W.setFromMatrixPosition(ce.matrixWorld);const ve=B.distanceTo(W),_e=Z.projectionMatrix.elements,De=ce.projectionMatrix.elements,Ne=_e[14]/(_e[10]-1),we=_e[14]/(_e[10]+1),je=(_e[9]+1)/_e[5],U=(_e[9]-1)/_e[5],Ft=(_e[8]-1)/_e[0],Me=(De[8]+1)/De[0],Pe=Ne*Ft,pe=Ne*Me,ut=ve/(-Ft+Me),Be=ut*-Ft;Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Be),G.translateZ(ut),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const E=Ne+ut,v=we+ut,F=Pe-Be,Q=pe+(ve-Be),J=je*we/v*E,ee=U*we/v*E;G.projectionMatrix.makePerspective(F,Q,J,ee,E,v),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function X(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;S.near=T.near=A.near=G.near,S.far=T.far=A.far=G.far,(w!==S.near||V!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,V=S.far);const Z=G.parent,ce=S.cameras;X(S,Z);for(let ve=0;ve<ce.length;ve++)X(ce[ve],Z);ce.length===2?Y(S,A,T):S.projectionMatrix.copy(A.projectionMatrix),j(G,S,Z)};function j(G,Z,ce){ce===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(ce.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ns*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(G){l=G,u!==null&&(u.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)};let K=null;function te(G,Z){if(h=Z.getViewerPose(c||a),g=Z,h!==null){const ce=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ve=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,ve=!0);for(let _e=0;_e<ce.length;_e++){const De=ce[_e];let Ne=null;if(f!==null)Ne=f.getViewport(De);else{const je=d.getViewSubImage(u,De);Ne=je.viewport,_e===0&&(e.setRenderTargetTextures(p,je.colorTexture,u.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(p))}let we=z[_e];we===void 0&&(we=new Nt,we.layers.enable(_e),we.viewport=new et,z[_e]=we),we.matrix.fromArray(De.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(De.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),_e===0&&(S.matrix.copy(we.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ve===!0&&S.cameras.push(we)}}for(let ce=0;ce<y.length;ce++){const ve=x[ce],_e=y[ce];ve!==null&&_e!==void 0&&_e.update(ve,Z,c||a)}K&&K(G,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const ne=new ch;ne.setAnimationLoop(te),this.setAnimationLoop=function(G){K=G},this.dispose=function(){}}}function mg(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ah(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,x,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function gg(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){const b=x.program;n.uniformBlockBinding(y,b)}function c(y,x){let b=i[y.id];b===void 0&&(g(y),b=h(y),i[y.id]=b,y.addEventListener("dispose",m));const L=x.program;n.updateUBOMapping(y,L);const A=e.render.frame;r[y.id]!==A&&(u(y),r[y.id]=A)}function h(y){const x=d();y.__bindingPointIndex=x;const b=s.createBuffer(),L=y.__size,A=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,L,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,b),b}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const x=i[y.id],b=y.uniforms,L=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let A=0,T=b.length;A<T;A++){const z=Array.isArray(b[A])?b[A]:[b[A]];for(let S=0,w=z.length;S<w;S++){const V=z[S];if(f(V,A,S,L)===!0){const q=V.__offset,re=Array.isArray(V.value)?V.value:[V.value];let P=0;for(let B=0;B<re.length;B++){const W=re[B],Y=_(W);typeof W=="number"||typeof W=="boolean"?(V.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,q+P,V.__data)):W.isMatrix3?(V.__data[0]=W.elements[0],V.__data[1]=W.elements[1],V.__data[2]=W.elements[2],V.__data[3]=0,V.__data[4]=W.elements[3],V.__data[5]=W.elements[4],V.__data[6]=W.elements[5],V.__data[7]=0,V.__data[8]=W.elements[6],V.__data[9]=W.elements[7],V.__data[10]=W.elements[8],V.__data[11]=0):(W.toArray(V.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,x,b,L){const A=y.value,T=x+"_"+b;if(L[T]===void 0)return typeof A=="number"||typeof A=="boolean"?L[T]=A:L[T]=A.clone(),!0;{const z=L[T];if(typeof A=="number"||typeof A=="boolean"){if(z!==A)return L[T]=A,!0}else if(z.equals(A)===!1)return z.copy(A),!0}return!1}function g(y){const x=y.uniforms;let b=0;const L=16;for(let T=0,z=x.length;T<z;T++){const S=Array.isArray(x[T])?x[T]:[x[T]];for(let w=0,V=S.length;w<V;w++){const q=S[w],re=Array.isArray(q.value)?q.value:[q.value];for(let P=0,B=re.length;P<B;P++){const W=re[P],Y=_(W),X=b%L;X!==0&&L-X<Y.boundary&&(b+=L-X),q.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=b,b+=Y.storage}}}const A=b%L;return A>0&&(b+=L-A),y.__size=b,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const b=a.indexOf(x.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class gh{constructor(e={}){const{canvas:t=ud(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=at,this._useLegacyLights=!1,this.toneMapping=jn,this.toneMappingExposure=1;const x=this;let b=!1,L=0,A=0,T=null,z=-1,S=null;const w=new et,V=new et;let q=null;const re=new xe(0);let P=0,B=t.width,W=t.height,Y=1,X=null,j=null;const K=new et(0,0,B,W),te=new et(0,0,B,W);let ne=!1;const G=new Dr;let Z=!1,ce=!1,ve=null;const _e=new Ae,De=new ke,Ne=new R,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return T===null?Y:1}let U=n;function Ft(M,I){for(let O=0;O<M.length;O++){const k=M[O],N=t.getContext(k,I);if(N!==null)return N}return null}try{const M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${io}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",ae,!1),U===null){const I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),U=Ft(I,M),U===null)throw Ft(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Me,Pe,pe,ut,Be,E,v,F,Q,J,ee,me,le,de,Ee,ze,$,Je,Xe,Ce,ye,fe,Fe,$e;function ft(){Me=new Tm(U),Pe=new ym(U,Me,e),Me.init(Pe),fe=new ug(U,Me,Pe),pe=new cg(U,Me,Pe),ut=new Cm(U),Be=new K0,E=new hg(U,Me,pe,Be,Pe,fe,ut),v=new bm(x),F=new wm(x),Q=new Fd(U,Pe),Fe=new xm(U,Me,Q,Pe),J=new Am(U,Q,ut,Fe),ee=new Dm(U,J,Q,ut),Xe=new Im(U,Pe,E),ze=new Mm(Be),me=new Y0(x,v,F,Me,Pe,Fe,ze),le=new mg(x,Be),de=new $0,Ee=new ig(Me,Pe),Je=new _m(x,v,F,pe,ee,u,l),$=new lg(x,ee,Pe),$e=new gg(U,ut,Pe,pe),Ce=new vm(U,Me,ut,Pe),ye=new Rm(U,Me,ut,Pe),ut.programs=me.programs,x.capabilities=Pe,x.extensions=Me,x.properties=Be,x.renderLists=de,x.shadowMap=$,x.state=pe,x.info=ut}ft();const Ge=new pg(x,U);this.xr=Ge,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const M=Me.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Me.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(M){M!==void 0&&(Y=M,this.setSize(B,W,!1))},this.getSize=function(M){return M.set(B,W)},this.setSize=function(M,I,O=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=M,W=I,t.width=Math.floor(M*Y),t.height=Math.floor(I*Y),O===!0&&(t.style.width=M+"px",t.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(B*Y,W*Y).floor()},this.setDrawingBufferSize=function(M,I,O){B=M,W=I,Y=O,t.width=Math.floor(M*O),t.height=Math.floor(I*O),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(w)},this.getViewport=function(M){return M.copy(K)},this.setViewport=function(M,I,O,k){M.isVector4?K.set(M.x,M.y,M.z,M.w):K.set(M,I,O,k),pe.viewport(w.copy(K).multiplyScalar(Y).floor())},this.getScissor=function(M){return M.copy(te)},this.setScissor=function(M,I,O,k){M.isVector4?te.set(M.x,M.y,M.z,M.w):te.set(M,I,O,k),pe.scissor(V.copy(te).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(M){pe.setScissorTest(ne=M)},this.setOpaqueSort=function(M){X=M},this.setTransparentSort=function(M){j=M},this.getClearColor=function(M){return M.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(M=!0,I=!0,O=!0){let k=0;if(M){let N=!1;if(T!==null){const he=T.texture.format;N=he===jc||he===qc||he===Xc}if(N){const he=T.texture.type,ge=he===Yn||he===Vn||he===so||he===fi||he===Vc||he===Wc,Se=Je.getClearColor(),Re=Je.getClearAlpha(),He=Se.r,Ie=Se.g,Ue=Se.b;ge?(f[0]=He,f[1]=Ie,f[2]=Ue,f[3]=Re,U.clearBufferuiv(U.COLOR,0,f)):(g[0]=He,g[1]=Ie,g[2]=Ue,g[3]=Re,U.clearBufferiv(U.COLOR,0,g))}else k|=U.COLOR_BUFFER_BIT}I&&(k|=U.DEPTH_BUFFER_BIT),O&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),de.dispose(),Ee.dispose(),Be.dispose(),v.dispose(),F.dispose(),ee.dispose(),Fe.dispose(),$e.dispose(),me.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Ot),Ge.removeEventListener("sessionend",st),ve&&(ve.dispose(),ve=null),kt.stop()};function ie(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const M=ut.autoReset,I=$.enabled,O=$.autoUpdate,k=$.needsUpdate,N=$.type;ft(),ut.autoReset=M,$.enabled=I,$.autoUpdate=O,$.needsUpdate=k,$.type=N}function ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function oe(M){const I=M.target;I.removeEventListener("dispose",oe),Te(I)}function Te(M){be(M),Be.remove(M)}function be(M){const I=Be.get(M).programs;I!==void 0&&(I.forEach(function(O){me.releaseProgram(O)}),M.isShaderMaterial&&me.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,O,k,N,he){I===null&&(I=we);const ge=N.isMesh&&N.matrixWorld.determinant()<0,Se=Xh(M,I,O,k,N);pe.setMaterial(k,ge);let Re=O.index,He=1;if(k.wireframe===!0){if(Re=J.getWireframeAttribute(O),Re===void 0)return;He=2}const Ie=O.drawRange,Ue=O.attributes.position;let _t=Ie.start*He,Xt=(Ie.start+Ie.count)*He;he!==null&&(_t=Math.max(_t,he.start*He),Xt=Math.min(Xt,(he.start+he.count)*He)),Re!==null?(_t=Math.max(_t,0),Xt=Math.min(Xt,Re.count)):Ue!=null&&(_t=Math.max(_t,0),Xt=Math.min(Xt,Ue.count));const Et=Xt-_t;if(Et<0||Et===1/0)return;Fe.setup(N,k,Se,O,Re);let yn,dt=Ce;if(Re!==null&&(yn=Q.get(Re),dt=ye,dt.setIndex(yn)),N.isMesh)k.wireframe===!0?(pe.setLineWidth(k.wireframeLinewidth*je()),dt.setMode(U.LINES)):dt.setMode(U.TRIANGLES);else if(N.isLine){let Ve=k.linewidth;Ve===void 0&&(Ve=1),pe.setLineWidth(Ve*je()),N.isLineSegments?dt.setMode(U.LINES):N.isLineLoop?dt.setMode(U.LINE_LOOP):dt.setMode(U.LINE_STRIP)}else N.isPoints?dt.setMode(U.POINTS):N.isSprite&&dt.setMode(U.TRIANGLES);if(N.isBatchedMesh)dt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)dt.renderInstances(_t,Et,N.count);else if(O.isInstancedBufferGeometry){const Ve=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,zr=Math.min(O.instanceCount,Ve);dt.renderInstances(_t,Et,zr)}else dt.render(_t,Et)};function nt(M,I,O){M.transparent===!0&&M.side===on&&M.forceSinglePass===!1?(M.side=Wt,M.needsUpdate=!0,Os(M,I,O),M.side=xn,M.needsUpdate=!0,Os(M,I,O),M.side=on):Os(M,I,O)}this.compile=function(M,I,O=null){O===null&&(O=M),m=Ee.get(O),m.init(),y.push(m),O.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),M!==O&&M.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights(x._useLegacyLights);const k=new Set;return M.traverse(function(N){const he=N.material;if(he)if(Array.isArray(he))for(let ge=0;ge<he.length;ge++){const Se=he[ge];nt(Se,O,N),k.add(Se)}else nt(he,O,N),k.add(he)}),y.pop(),m=null,k},this.compileAsync=function(M,I,O=null){const k=this.compile(M,I,O);return new Promise(N=>{function he(){if(k.forEach(function(ge){Be.get(ge).currentProgram.isReady()&&k.delete(ge)}),k.size===0){N(M);return}setTimeout(he,10)}Me.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let it=null;function St(M){it&&it(M)}function Ot(){kt.stop()}function st(){kt.start()}const kt=new ch;kt.setAnimationLoop(St),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(M){it=M,Ge.setAnimationLoop(M),M===null?kt.stop():kt.start()},Ge.addEventListener("sessionstart",Ot),Ge.addEventListener("sessionend",st),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(I),I=Ge.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,I,T),m=Ee.get(M,y.length),m.init(),y.push(m),_e.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),G.setFromProjectionMatrix(_e),ce=this.localClippingEnabled,Z=ze.init(this.clippingPlanes,ce),_=de.get(M,p.length),_.init(),p.push(_),dn(M,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,j),this.info.render.frame++,Z===!0&&ze.beginShadows();const O=m.state.shadowsArray;if($.render(O,M,I),Z===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(_,M),m.setupLights(x._useLegacyLights),I.isArrayCamera){const k=I.cameras;for(let N=0,he=k.length;N<he;N++){const ge=k[N];Ro(_,M,ge,ge.viewport)}}else Ro(_,M,I);T!==null&&(E.updateMultisampleRenderTarget(T),E.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(x,M,I),Fe.resetDefaultState(),z=-1,S=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function dn(M,I,O,k){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||G.intersectsSprite(M)){k&&Ne.setFromMatrixPosition(M.matrixWorld).applyMatrix4(_e);const ge=ee.update(M),Se=M.material;Se.visible&&_.push(M,ge,Se,O,Ne.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||G.intersectsObject(M))){const ge=ee.update(M),Se=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ne.copy(M.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ne.copy(ge.boundingSphere.center)),Ne.applyMatrix4(M.matrixWorld).applyMatrix4(_e)),Array.isArray(Se)){const Re=ge.groups;for(let He=0,Ie=Re.length;He<Ie;He++){const Ue=Re[He],_t=Se[Ue.materialIndex];_t&&_t.visible&&_.push(M,ge,_t,O,Ne.z,Ue)}}else Se.visible&&_.push(M,ge,Se,O,Ne.z,null)}}const he=M.children;for(let ge=0,Se=he.length;ge<Se;ge++)dn(he[ge],I,O,k)}function Ro(M,I,O,k){const N=M.opaque,he=M.transmissive,ge=M.transparent;m.setupLightsView(O),Z===!0&&ze.setGlobalState(x.clippingPlanes,O),he.length>0&&Wh(N,he,I,O),k&&pe.viewport(w.copy(k)),N.length>0&&Fs(N,I,O),he.length>0&&Fs(he,I,O),ge.length>0&&Fs(ge,I,O),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Wh(M,I,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const he=Pe.isWebGL2;ve===null&&(ve=new Zn(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Rs:Yn,minFilter:gi,samples:he?4:0})),x.getDrawingBufferSize(De),he?ve.setSize(De.x,De.y):ve.setSize(Rr(De.x),Rr(De.y));const ge=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(re),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const Se=x.toneMapping;x.toneMapping=jn,Fs(M,O,k),E.updateMultisampleRenderTarget(ve),E.updateRenderTargetMipmap(ve);let Re=!1;for(let He=0,Ie=I.length;He<Ie;He++){const Ue=I[He],_t=Ue.object,Xt=Ue.geometry,Et=Ue.material,yn=Ue.group;if(Et.side===on&&_t.layers.test(k.layers)){const dt=Et.side;Et.side=Wt,Et.needsUpdate=!0,Co(_t,O,k,Xt,Et,yn),Et.side=dt,Et.needsUpdate=!0,Re=!0}}Re===!0&&(E.updateMultisampleRenderTarget(ve),E.updateRenderTargetMipmap(ve)),x.setRenderTarget(ge),x.setClearColor(re,P),x.toneMapping=Se}function Fs(M,I,O){const k=I.isScene===!0?I.overrideMaterial:null;for(let N=0,he=M.length;N<he;N++){const ge=M[N],Se=ge.object,Re=ge.geometry,He=k===null?ge.material:k,Ie=ge.group;Se.layers.test(O.layers)&&Co(Se,I,O,Re,He,Ie)}}function Co(M,I,O,k,N,he){M.onBeforeRender(x,I,O,k,N,he),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(x,I,O,k,M,he),N.transparent===!0&&N.side===on&&N.forceSinglePass===!1?(N.side=Wt,N.needsUpdate=!0,x.renderBufferDirect(O,I,k,N,M,he),N.side=xn,N.needsUpdate=!0,x.renderBufferDirect(O,I,k,N,M,he),N.side=on):x.renderBufferDirect(O,I,k,N,M,he),M.onAfterRender(x,I,O,k,N,he)}function Os(M,I,O){I.isScene!==!0&&(I=we);const k=Be.get(M),N=m.state.lights,he=m.state.shadowsArray,ge=N.state.version,Se=me.getParameters(M,N.state,he,I,O),Re=me.getProgramCacheKey(Se);let He=k.programs;k.environment=M.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(M.isMeshStandardMaterial?F:v).get(M.envMap||k.environment),He===void 0&&(M.addEventListener("dispose",oe),He=new Map,k.programs=He);let Ie=He.get(Re);if(Ie!==void 0){if(k.currentProgram===Ie&&k.lightsStateVersion===ge)return Po(M,Se),Ie}else Se.uniforms=me.getUniforms(M),M.onBuild(O,Se,x),M.onBeforeCompile(Se,x),Ie=me.acquireProgram(Se,Re),He.set(Re,Ie),k.uniforms=Se.uniforms;const Ue=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ue.clippingPlanes=ze.uniform),Po(M,Se),k.needsLights=jh(M),k.lightsStateVersion=ge,k.needsLights&&(Ue.ambientLightColor.value=N.state.ambient,Ue.lightProbe.value=N.state.probe,Ue.directionalLights.value=N.state.directional,Ue.directionalLightShadows.value=N.state.directionalShadow,Ue.spotLights.value=N.state.spot,Ue.spotLightShadows.value=N.state.spotShadow,Ue.rectAreaLights.value=N.state.rectArea,Ue.ltc_1.value=N.state.rectAreaLTC1,Ue.ltc_2.value=N.state.rectAreaLTC2,Ue.pointLights.value=N.state.point,Ue.pointLightShadows.value=N.state.pointShadow,Ue.hemisphereLights.value=N.state.hemi,Ue.directionalShadowMap.value=N.state.directionalShadowMap,Ue.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ue.spotShadowMap.value=N.state.spotShadowMap,Ue.spotLightMatrix.value=N.state.spotLightMatrix,Ue.spotLightMap.value=N.state.spotLightMap,Ue.pointShadowMap.value=N.state.pointShadowMap,Ue.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Ie,k.uniformsList=null,Ie}function Lo(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=vr.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function Po(M,I){const O=Be.get(M);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function Xh(M,I,O,k,N){I.isScene!==!0&&(I=we),E.resetTextureUnits();const he=I.fog,ge=k.isMeshStandardMaterial?I.environment:null,Se=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Lt,Re=(k.isMeshStandardMaterial?F:v).get(k.envMap||ge),He=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ie=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ue=!!O.morphAttributes.position,_t=!!O.morphAttributes.normal,Xt=!!O.morphAttributes.color;let Et=jn;k.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Et=x.toneMapping);const yn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,dt=yn!==void 0?yn.length:0,Ve=Be.get(k),zr=m.state.lights;if(Z===!0&&(ce===!0||M!==S)){const Zt=M===S&&k.id===z;ze.setState(k,M,Zt)}let pt=!1;k.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==zr.state.version||Ve.outputColorSpace!==Se||N.isBatchedMesh&&Ve.batching===!1||!N.isBatchedMesh&&Ve.batching===!0||N.isInstancedMesh&&Ve.instancing===!1||!N.isInstancedMesh&&Ve.instancing===!0||N.isSkinnedMesh&&Ve.skinning===!1||!N.isSkinnedMesh&&Ve.skinning===!0||N.isInstancedMesh&&Ve.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ve.instancingColor===!1&&N.instanceColor!==null||Ve.envMap!==Re||k.fog===!0&&Ve.fog!==he||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ze.numPlanes||Ve.numIntersection!==ze.numIntersection)||Ve.vertexAlphas!==He||Ve.vertexTangents!==Ie||Ve.morphTargets!==Ue||Ve.morphNormals!==_t||Ve.morphColors!==Xt||Ve.toneMapping!==Et||Pe.isWebGL2===!0&&Ve.morphTargetsCount!==dt)&&(pt=!0):(pt=!0,Ve.__version=k.version);let $n=Ve.currentProgram;pt===!0&&($n=Os(k,I,N));let Io=!1,ds=!1,Hr=!1;const It=$n.getUniforms(),Jn=Ve.uniforms;if(pe.useProgram($n.program)&&(Io=!0,ds=!0,Hr=!0),k.id!==z&&(z=k.id,ds=!0),Io||S!==M){It.setValue(U,"projectionMatrix",M.projectionMatrix),It.setValue(U,"viewMatrix",M.matrixWorldInverse);const Zt=It.map.cameraPosition;Zt!==void 0&&Zt.setValue(U,Ne.setFromMatrixPosition(M.matrixWorld)),Pe.logarithmicDepthBuffer&&It.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&It.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,ds=!0,Hr=!0)}if(N.isSkinnedMesh){It.setOptional(U,N,"bindMatrix"),It.setOptional(U,N,"bindMatrixInverse");const Zt=N.skeleton;Zt&&(Pe.floatVertexTextures?(Zt.boneTexture===null&&Zt.computeBoneTexture(),It.setValue(U,"boneTexture",Zt.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(It.setOptional(U,N,"batchingTexture"),It.setValue(U,"batchingTexture",N._matricesTexture,E));const Gr=O.morphAttributes;if((Gr.position!==void 0||Gr.normal!==void 0||Gr.color!==void 0&&Pe.isWebGL2===!0)&&Xe.update(N,O,$n),(ds||Ve.receiveShadow!==N.receiveShadow)&&(Ve.receiveShadow=N.receiveShadow,It.setValue(U,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Jn.envMap.value=Re,Jn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),ds&&(It.setValue(U,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&qh(Jn,Hr),he&&k.fog===!0&&le.refreshFogUniforms(Jn,he),le.refreshMaterialUniforms(Jn,k,Y,W,ve),vr.upload(U,Lo(Ve),Jn,E)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(vr.upload(U,Lo(Ve),Jn,E),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&It.setValue(U,"center",N.center),It.setValue(U,"modelViewMatrix",N.modelViewMatrix),It.setValue(U,"normalMatrix",N.normalMatrix),It.setValue(U,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Zt=k.uniformsGroups;for(let Vr=0,Yh=Zt.length;Vr<Yh;Vr++)if(Pe.isWebGL2){const Do=Zt[Vr];$e.update(Do,$n),$e.bind(Do,$n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $n}function qh(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function jh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,I,O){Be.get(M.texture).__webglTexture=I,Be.get(M.depthTexture).__webglTexture=O;const k=Be.get(M);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,I){const O=Be.get(M);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,O=0){T=M,L=I,A=O;let k=!0,N=null,he=!1,ge=!1;if(M){const Re=Be.get(M);Re.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(U.FRAMEBUFFER,null),k=!1):Re.__webglFramebuffer===void 0?E.setupRenderTarget(M):Re.__hasExternalTextures&&E.rebindTextures(M,Be.get(M.texture).__webglTexture,Be.get(M.depthTexture).__webglTexture);const He=M.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(ge=!0);const Ie=Be.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ie[I])?N=Ie[I][O]:N=Ie[I],he=!0):Pe.isWebGL2&&M.samples>0&&E.useMultisampledRTT(M)===!1?N=Be.get(M).__webglMultisampledFramebuffer:Array.isArray(Ie)?N=Ie[O]:N=Ie,w.copy(M.viewport),V.copy(M.scissor),q=M.scissorTest}else w.copy(K).multiplyScalar(Y).floor(),V.copy(te).multiplyScalar(Y).floor(),q=ne;if(pe.bindFramebuffer(U.FRAMEBUFFER,N)&&Pe.drawBuffers&&k&&pe.drawBuffers(M,N),pe.viewport(w),pe.scissor(V),pe.setScissorTest(q),he){const Re=Be.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,Re.__webglTexture,O)}else if(ge){const Re=Be.get(M.texture),He=I||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.__webglTexture,O||0,He)}z=-1},this.readRenderTargetPixels=function(M,I,O,k,N,he,ge){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Be.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){pe.bindFramebuffer(U.FRAMEBUFFER,Se);try{const Re=M.texture,He=Re.format,Ie=Re.type;if(He!==en&&fe.convert(He)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Ie===Rs&&(Me.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Ie!==Yn&&fe.convert(Ie)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===Cn&&(Pe.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-k&&O>=0&&O<=M.height-N&&U.readPixels(I,O,k,N,fe.convert(He),fe.convert(Ie),he)}finally{const Re=T!==null?Be.get(T).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(M,I,O=0){const k=Math.pow(2,-O),N=Math.floor(I.image.width*k),he=Math.floor(I.image.height*k);E.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,O,0,0,M.x,M.y,N,he),pe.unbindTexture()},this.copyTextureToTexture=function(M,I,O,k=0){const N=I.image.width,he=I.image.height,ge=fe.convert(O.format),Se=fe.convert(O.type);E.setTexture2D(O,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment),I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,k,M.x,M.y,N,he,ge,Se,I.image.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,k,M.x,M.y,I.mipmaps[0].width,I.mipmaps[0].height,ge,I.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,k,M.x,M.y,ge,Se,I.image),k===0&&O.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(M,I,O,k,N=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=M.max.x-M.min.x+1,ge=M.max.y-M.min.y+1,Se=M.max.z-M.min.z+1,Re=fe.convert(k.format),He=fe.convert(k.type);let Ie;if(k.isData3DTexture)E.setTexture3D(k,0),Ie=U.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)E.setTexture2DArray(k,0),Ie=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const Ue=U.getParameter(U.UNPACK_ROW_LENGTH),_t=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Xt=U.getParameter(U.UNPACK_SKIP_PIXELS),Et=U.getParameter(U.UNPACK_SKIP_ROWS),yn=U.getParameter(U.UNPACK_SKIP_IMAGES),dt=O.isCompressedTexture?O.mipmaps[N]:O.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,dt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,dt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,M.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,M.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,M.min.z),O.isDataTexture||O.isData3DTexture?U.texSubImage3D(Ie,N,I.x,I.y,I.z,he,ge,Se,Re,He,dt.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ie,N,I.x,I.y,I.z,he,ge,Se,Re,dt.data)):U.texSubImage3D(Ie,N,I.x,I.y,I.z,he,ge,Se,Re,He,dt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ue),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_t),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Xt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Et),U.pixelStorei(U.UNPACK_SKIP_IMAGES,yn),N===0&&k.generateMipmaps&&U.generateMipmap(Ie),pe.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),pe.unbindTexture()},this.resetState=function(){L=0,A=0,T=null,pe.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ao?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===Pr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===at?mi:Zc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===mi?at:Lt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class _g extends gh{}_g.prototype.isWebGL1Renderer=!0;class uo{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=t,this.far=n}clone(){return new uo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _h extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class xg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ka,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bt=new R;class fo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ql=new R,ec=new et,tc=new et,vg=new R,nc=new Ae,ar=new R,va=new un,ic=new Ae,ya=new Ds;class yg extends tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zo,this.bindMatrix=new Ae,this.bindMatrixInverse=new Ae,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ar),this.boundingBox.expandByPoint(ar)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new un),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ar),this.boundingSphere.expandByPoint(ar)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),va.copy(this.boundingSphere),va.applyMatrix4(i),e.ray.intersectsSphere(va)!==!1&&(ic.copy(i).invert(),ya.copy(e.ray).applyMatrix4(ic),!(this.boundingBox!==null&&ya.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ya)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Au?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ec.fromBufferAttribute(i.attributes.skinIndex,e),tc.fromBufferAttribute(i.attributes.skinWeight,e),Ql.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=tc.getComponent(r);if(a!==0){const o=ec.getComponent(r);nc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(vg.copy(Ql).applyMatrix4(nc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class xh extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Mg extends Rt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Tt,h=Tt,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sc=new Ae,bg=new Ae;class po{constructor(e=[],t=[]){this.uuid=hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ae)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ae;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:bg;sc.multiplyMatrices(o,t[r]),sc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new po(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Mg(t,e,e,en,Cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new xh),this.bones.push(a),this.boneInverses.push(new Ae().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Ga extends Ct{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Bi=new Ae,rc=new Ae,or=[],ac=new yt,Sg=new Ae,_s=new tt,xs=new un;class di extends tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ga(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Sg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bi),ac.copy(e.boundingBox).applyMatrix4(Bi),this.boundingBox.union(ac)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bi),xs.copy(e.boundingSphere).applyMatrix4(Bi),this.boundingSphere.union(xs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(_s.geometry=this.geometry,_s.material=this.material,_s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xs.copy(this.boundingSphere),xs.applyMatrix4(n),e.ray.intersectsSphere(xs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Bi),rc.multiplyMatrices(n,Bi),_s.matrixWorld=rc,_s.raycast(e,or);for(let a=0,o=or.length;a<o;a++){const l=or[a];l.instanceId=r,l.object=this,t.push(l)}or.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ga(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class mo extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oc=new R,lc=new R,cc=new Ae,Ma=new Ds,lr=new un;class go extends ht{constructor(e=new Pt,t=new mo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)oc.fromBufferAttribute(t,i-1),lc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=oc.distanceTo(lc);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(i),lr.radius+=r,e.ray.intersectsSphere(lr)===!1)return;cc.copy(i).invert(),Ma.copy(e.ray).applyMatrix4(cc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new R,h=new R,d=new R,u=new R,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let x=p,b=y-1;x<b;x+=f){const L=g.getX(x),A=g.getX(x+1);if(c.fromBufferAttribute(m,L),h.fromBufferAttribute(m,A),Ma.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(u);z<e.near||z>e.far||t.push({distance:z,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let x=p,b=y-1;x<b;x+=f){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),Ma.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(u);A<e.near||A>e.far||t.push({distance:A,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const hc=new R,uc=new R;class vh extends go{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)hc.fromBufferAttribute(t,i),uc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hc.distanceTo(uc);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Eg extends go{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class yh extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dc=new Ae,Va=new Ds,cr=new un,hr=new R;class wg extends ht{constructor(e=new Pt,t=new yh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(i),cr.radius+=r,e.ray.intersectsSphere(cr)===!1)return;dc.copy(i).invert(),Va.copy(e.ray).applyMatrix4(dc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,_=f;g<_;g++){const m=c.getX(g);hr.fromBufferAttribute(d,m),fc(hr,m,l,i,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,_=f;g<_;g++)hr.fromBufferAttribute(d,g),fc(hr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function fc(s,e,t,n,i,r,a){const o=Va.distanceSqToPoint(s);if(o<t){const l=new R;Va.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class _o extends Rt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tg{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new ke:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,i=[],r=[],a=[],o=new R,l=new Ae;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(At(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(At(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function xo(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const ur=new R,ba=new xo,Sa=new xo,Ea=new xo;class Ag extends Tg{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(ur.subVectors(i[0],i[1]).add(i[0]),c=ur);const d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(ur.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ur),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ba.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,_,m),Sa.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,_,m),Ea.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ba.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Sa.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Ea.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(ba.calc(l),Sa.calc(l),Ea.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class vo extends Pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new R,h=new ke;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(o,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Yt extends _n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class In extends Yt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function dr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Rg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Cg(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function pc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Mh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Us{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Lg extends Us{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gi,endingEnd:Gi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vi:r=e,o=2*t-n;break;case Sr:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vi:a=e,l=2*n-t;break;case Sr:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,y=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,b=f*m-f*_;for(let L=0;L!==o;++L)r[L]=p*a[h+L]+y*a[c+L]+x*a[l+L]+b*a[d+L];return r}}class bh extends Us{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}}class Pg extends Us{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class vn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=dr(t,this.TimeBufferType),this.values=dr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:dr(e.times,Array),values:dr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Pg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Lg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Cs:t=this.InterpolantFactoryMethodDiscrete;break;case ts:t=this.InterpolantFactoryMethodLinear;break;case Kr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cs;case this.InterpolantFactoryMethodLinear:return ts;case this.InterpolantFactoryMethodSmooth:return Kr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Rg(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Kr,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const _=t[d+g];if(_!==t[u+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=ts;class cs extends vn{}cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Cs;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;class Sh extends vn{}Sh.prototype.ValueTypeName="color";class ss extends vn{}ss.prototype.ValueTypeName="number";class Ig extends Us{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Kt.slerpFlat(r,0,a,c-o,a,c,l);return r}}class vi extends vn{InterpolantFactoryMethodLinear(e){return new Ig(this.times,this.values,this.getValueSize(),e)}}vi.prototype.ValueTypeName="quaternion";vi.prototype.DefaultInterpolation=ts;vi.prototype.InterpolantFactoryMethodSmooth=void 0;class hs extends vn{}hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Cs;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;class rs extends vn{}rs.prototype.ValueTypeName="vector";class Wa{constructor(e,t=-1,n,i=ro){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=hn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Ug(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(vn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Cg(l);l=pc(l,1,h),c=pc(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ss(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,g,_){if(f.length!==0){const m=[],p=[];Mh(f,m,p,g),m.length!==0&&_.push(new d(u,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let _=0;_<u[g].morphTargets.length;_++)f[u[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let y=0;y!==u[g].morphTargets.length;++y){const x=u[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new ss(".morphTargetInfluence["+_+"]",m,p))}l=f.length*a}else{const f=".bones["+t[d].name+"]";n(rs,f+".position",u,"pos",i),n(vi,f+".quaternion",u,"rot",i),n(rs,f+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Dg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ss;case"vector":case"vector2":case"vector3":case"vector4":return rs;case"color":return Sh;case"quaternion":return vi;case"bool":case"boolean":return cs;case"string":return hs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Ug(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Dg(s.type);if(s.times===void 0){const t=[],n=[];Mh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Xn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Ng{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Fg=new Ng;class us{constructor(e){this.manager=e!==void 0?e:Fg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}us.DEFAULT_MATERIAL_NAME="__DEFAULT";const Tn={};class Og extends Error{constructor(e,t){super(e),this.response=t}}class Eh extends us{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Xn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Tn[e]!==void 0){Tn[e].push({onLoad:t,onProgress:n,onError:i});return}Tn[e]=[],Tn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Tn[e],d=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=u?parseInt(u):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){d.read().then(({done:x,value:b})=>{if(x)p.close();else{_+=b.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,T=h.length;A<T;A++){const z=h[A];z.onProgress&&z.onProgress(L)}p.enqueue(b),y()}})}}});return new Response(m)}else throw new Og(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Xn.add(e,c);const h=Tn[e];delete Tn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Tn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Tn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class kg extends us{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Xn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Ls("img");function l(){h(),Xn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Bg extends us{constructor(e){super(e)}load(e,t,n,i){const r=new Rt,a=new kg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Nr extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class wh extends Nr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const wa=new Ae,mc=new R,gc=new R;class yo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dr,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;mc.setFromMatrixPosition(e.matrixWorld),t.position.copy(mc),gc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gc),t.updateMatrixWorld(),wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zg extends yo{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ns*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Hg extends Nr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new zg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const _c=new Ae,vs=new R,Ta=new R;class Gg extends yo{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),vs.setFromMatrixPosition(e.matrixWorld),n.position.copy(vs),Ta.copy(n.position),Ta.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ta),n.updateMatrixWorld(),i.makeTranslation(-vs.x,-vs.y,-vs.z),_c.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_c)}}class Vg extends Nr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Gg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Wg extends yo{constructor(){super(new co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mo extends Nr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Wg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ts{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Xg extends us{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Xn.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Xn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Xn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Xn.add(e,l),r.manager.itemStart(e)}}class qg{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Kt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;Kt.multiplyQuaternionsFlat(e,a,e,t,e,n),Kt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const bo="\\[\\]\\.:\\/",jg=new RegExp("["+bo+"]","g"),So="[^"+bo+"]",Yg="[^"+bo.replace("\\.","")+"]",Kg=/((?:WC+[\/:])*)/.source.replace("WC",So),Zg=/(WCOD+)?/.source.replace("WCOD",Yg),$g=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",So),Jg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",So),Qg=new RegExp("^"+Kg+Zg+$g+Jg+"$"),e_=["material","materials","bones","map"];class t_{constructor(e,t,n){const i=n||Ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ke{constructor(e,t,n){this.path=t,this.parsedPath=n||Ke.parseTrackName(t),this.node=Ke.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ke.Composite(e,t,n):new Ke(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jg,"")}static parseTrackName(e){const t=Qg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);e_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ke.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ke.Composite=t_;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class n_{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Gi,endingEnd:Gi};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ou,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Bu:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case ro:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===ku;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Fu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Vi,i.endingEnd=Vi):(e?i.endingStart=this.zeroSlopeAtStart?Vi:Gi:i.endingStart=Sr,t?i.endingEnd=this.zeroSlopeAtEnd?Vi:Gi:i.endingEnd=Sr)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const i_=new Float32Array(1);class s_ extends yi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){const u=i[d],f=u.name;let g=h[f];if(g!==void 0)++g.referenceCount,a[d]=g;else{if(g=a[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[d].binding.parsedPath;g=new qg(Ke.create(n,f,_),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),a[d]=g}o[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new bh(new Float32Array(2),new Float32Array(2),1,i_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?Wa.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=ro),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new n_(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Wa.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class r_{constructor(e,t,n=0,i=1/0){this.ray=new Ds(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new lo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Xa(e,this,n,t),n.sort(xc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Xa(e[i],this,n,t);return n.sort(xc),n}}function xc(s,e){return s.distance-e.distance}function Xa(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Xa(i[r],e,t,!0)}}class a_ extends vh{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Pt;r.setIndex(new Ct(n,1)),r.setAttribute("position",new gt(i,3)),super(r,new mo({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:io}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=io);function o_(s){const e=new Map,t=new Map,n=s.clone();return Th(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Th(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Th(s.children[n],e.children[n],t)}function l_(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Pt;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const d=[];for(let u=0;u<s.length;++u){const f=s[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(const h in r){const d=vc(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][u]);const g=vc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function vc(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}const a=new e(r);let o=0;for(let c=0;c<s.length;++c)a.set(s[c].array,o),o+=s[c].array.length;const l=new Ct(a,t,n);return i!==void 0&&(l.gpuType=i),l}function yc(s,e){if(e===zu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Oa||e===Kc){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Oa)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Ah(s,e){s.updateMatrixWorld(!0);const t=[];let n=!0;if(s.traverse(l=>{if(!(l instanceof tt))return;if(Array.isArray(l.material)){n=!1;return}const c=l.material;if(!c.isMeshStandardMaterial||c.map||c.transparent||c.opacity!==1||c.emissive.getHex()!==0||c.normalMap||c.roughness!==1||c.metalness!==0||c.side!==xn){n=!1;return}t.push(l)}),!n||!t.length)return null;const i=t.every(l=>l.geometry.index!==null),r=t.map(l=>{const c=l.geometry.clone(),h=!i&&c.index?c.toNonIndexed():c;h!==c&&c.dispose(),h.applyMatrix4(l.matrixWorld);const d=h.getAttribute("position"),u=new Float32Array(d.count*3),f=h.getAttribute("color"),g=l.material.color;for(let _=0;_<d.count;_++)u[_*3]=g.r*(f?f.getX(_):1),u[_*3+1]=g.g*(f?f.getY(_):1),u[_*3+2]=g.b*(f?f.getZ(_):1);for(const _ of Object.keys(h.attributes))["position","normal"].includes(_)||h.deleteAttribute(_);return h.getAttribute("normal")||h.computeVertexNormals(),h.setAttribute("color",new Ct(u,3)),h.clearGroups(),h}),a=l_(r,!1);for(const l of r)l.dispose();if(!a)return null;a.computeBoundingBox(),a.computeBoundingSphere();const o=new mt;return o.add(new tt(a,e)),o}class c_ extends us{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new p_(t)}),this.register(function(t){return new S_(t)}),this.register(function(t){return new E_(t)}),this.register(function(t){return new w_(t)}),this.register(function(t){return new g_(t)}),this.register(function(t){return new __(t)}),this.register(function(t){return new x_(t)}),this.register(function(t){return new v_(t)}),this.register(function(t){return new f_(t)}),this.register(function(t){return new y_(t)}),this.register(function(t){return new m_(t)}),this.register(function(t){return new b_(t)}),this.register(function(t){return new M_(t)}),this.register(function(t){return new u_(t)}),this.register(function(t){return new T_(t)}),this.register(function(t){return new A_(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Ts.extractUrlBase(e);a=Ts.resolveURL(c,this.path)}else a=Ts.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Eh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Rh){try{a[qe.KHR_BINARY_GLTF]=new R_(e)}catch(d){i&&i(d);return}r=JSON.parse(a[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new H_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case qe.KHR_MATERIALS_UNLIT:a[d]=new d_;break;case qe.KHR_DRACO_MESH_COMPRESSION:a[d]=new C_(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:a[d]=new L_;break;case qe.KHR_MESH_QUANTIZATION:a[d]=new P_;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function h_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class u_{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new xe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Lt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Mo(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Vg(h),c.distance=d;break;case"spot":c=new Hg(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Bn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class d_{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Wn}extendParams(e,t,n){const i=[];e.color=new xe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Lt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,at))}return Promise.all(i)}}class f_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class p_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ke(o,o)}return Promise.all(r)}}class m_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class g_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Lt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,at)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class __{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class x_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new xe().setRGB(o[0],o[1],o[2],Lt),Promise.all(r)}}class v_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class y_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new xe().setRGB(o[0],o[1],o[2],Lt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,at)),Promise.all(r)}}class M_{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class b_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class S_{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class E_{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class w_{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class T_{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}}class A_{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Jt.TRIANGLES&&c.mode!==Jt.TRIANGLE_STRIP&&c.mode!==Jt.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(const g of d){const _=new Ae,m=new R,p=new Kt,y=new R(1,1,1),x=new di(g.geometry,g.material,u);for(let b=0;b<u;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,b),l.SCALE&&y.fromBufferAttribute(l.SCALE,b),x.setMatrixAt(b,_.compose(m,p,y));for(const b in l)if(b==="_COLOR_0"){const L=l[b];x.instanceColor=new Ga(L.array,L.itemSize,L.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);ht.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Rh="glTF",ys=12,Mc={JSON:1313821514,BIN:5130562};class R_{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ys),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Rh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ys,r=new DataView(e,ys);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Mc.JSON){const c=new Uint8Array(e,ys+a,o);this.content=n.decode(c)}else if(l===Mc.BIN){const c=ys+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class C_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const d=qa[h]||h.toLowerCase();o[d]=a[h]}for(const h in e.attributes){const d=qa[h]||h.toLowerCase();if(a[h]!==void 0){const u=n.accessors[e.attributes[h]],f=$i[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}d(f)},o,c,Lt,u)})})}}class L_{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class P_{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class Ch extends Us{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,g=e*c,_=g-c,m=-2*f+3*u,p=f-u,y=1-m,x=p-u+d;for(let b=0;b!==o;b++){const L=a[_+b+o],A=a[_+b+l]*h,T=a[g+b+o],z=a[g+b]*h;r[b]=y*L+x*A+m*T+p*z}return r}}const I_=new Kt;class D_ extends Ch{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return I_.fromArray(r).normalize().toArray(r),r}}const Jt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},$i={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bc={9728:Tt,9729:Vt,9984:Fa,9985:Hc,9986:xr,9987:gi},Sc={33071:Qt,33648:br,10497:Kn},Aa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},kn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},U_={CUBICSPLINE:void 0,LINEAR:ts,STEP:Cs},Ra={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function N_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Yt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xn})),s.DefaultMaterial}function ii(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Bn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function F_(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(u)}if(r){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],u=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function O_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function k_(s){let e;const t=s.extensions&&s.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ca(t.attributes):e=s.indices+":"+Ca(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ca(s.targets[n]);return e}function Ca(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ja(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function B_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const z_=new Ae;class H_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new h_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Bg(this.options.manager):this.textureLoader=new Xg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Eh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ii(r,o,i),Bn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Ts.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Aa[i.type],o=$i[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Ct(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Aa[i.type],c=$i[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==d){const p=Math.floor(u/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(y);x||(_=new c(o,p*f,i.count*f/h),x=new xg(_,f/h),t.cache.add(y,x)),m=new fo(x,l,u%f/h,g)}else o===null?_=new c(i.count*l):_=new c(o,u,i.count*l),m=new Ct(_,l,g);if(i.sparse!==void 0){const p=Aa.SCALAR,y=$i[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,L=new y(a[1],x,i.sparse.count*p),A=new c(a[2],b,i.sparse.count*l);o!==null&&(m=new Ct(m.array.slice(),m.itemSize,m.normalized));for(let T=0,z=L.length;T<z;T++){const S=L[T];if(m.setX(S,A[T*l]),l>=2&&m.setY(S,A[T*l+1]),l>=3&&m.setZ(S,A[T*l+2]),l>=4&&m.setW(S,A[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return h.magFilter=bc[u.magFilter]||Vt,h.minFilter=bc[u.minFilter]||gi,h.wrapS=Sc[u.wrapS]||Kn,h.wrapT=Sc[u.wrapT]||Kn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;const u=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Rt(_);m.needsUpdate=!0,u(m)}),t.load(Ts.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),d.userData.mimeType=a.mimeType||B_(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new yh,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new mo,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Yt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[qe.KHR_MATERIALS_UNLIT]){const d=i[qe.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new xe(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Lt),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,at)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=on);const h=r.alphaMode||Ra.OPAQUE;if(h===Ra.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ra.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Wn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ke(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Wn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Wn){const d=r.emissiveFactor;o.emissive=new xe().setRGB(d[0],d[1],d[2],Lt)}return r.emissiveTexture!==void 0&&a!==Wn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,at)),Promise.all(c).then(function(){const d=new a(o);return r.name&&(d.name=r.name),Bn(d,r),t.associations.set(d,{materials:e}),r.extensions&&ii(i,d,r),d})}createUniqueName(e){const t=Ke.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Ec(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=k_(c),d=i[h];if(d)a.push(d.promise);else{let u;c.extensions&&c.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=Ec(new Pt,c,t),i[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?N_(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=a[f];let p;const y=c[f];if(m.mode===Jt.TRIANGLES||m.mode===Jt.TRIANGLE_STRIP||m.mode===Jt.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new yg(_,y):new tt(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Jt.TRIANGLE_STRIP?p.geometry=yc(p.geometry,Kc):m.mode===Jt.TRIANGLE_FAN&&(p.geometry=yc(p.geometry,Oa));else if(m.mode===Jt.LINES)p=new vh(_,y);else if(m.mode===Jt.LINE_STRIP)p=new go(_,y);else if(m.mode===Jt.LINE_LOOP)p=new Eg(_,y);else if(m.mode===Jt.POINTS)p=new wg(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&O_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Bn(p,r),m.extensions&&ii(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&ii(i,d[0],r),d[0];const u=new mt;r.extensions&&ii(i,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Nt(Pn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new co(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Bn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const d=a[c];if(d){o.push(d);const u=new Ae;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new po(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){const f=i.channels[d],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],g=d[2],_=d[3],m=d[4],p=[];for(let y=0,x=u.length;y<x;y++){const b=u[y],L=f[y],A=g[y],T=_[y],z=m[y];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const S=n._createAnimationTracks(b,L,A,T,z);if(S)for(let w=0;w<S.length;w++)p.push(S[w])}return new Wa(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,z_)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new xh:c.length>1?h=new mt:c.length===1?h=c[0]:h=new ht,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=a),Bn(h,r),r.extensions&&ii(n,h,r),r.matrix!==void 0){const d=new Ae;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new mt;n.name&&(r.name=i.createUniqueName(n.name)),Bn(r,n),n.extensions&&ii(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++)r.add(l[h]);const c=h=>{const d=new Map;for(const[u,f]of i.associations)(u instanceof _n||u instanceof Rt)&&d.set(u,f);return h.traverse(u=>{const f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];kn[r.path]===kn.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(o);let c;switch(kn[r.path]){case kn.weights:c=ss;break;case kn.rotation:c=vi;break;case kn.position:case kn.scale:c=rs;break;default:switch(n.itemSize){case 1:c=ss;break;case 2:case 3:default:c=rs;break}break}const h=i.interpolation!==void 0?U_[i.interpolation]:ts,d=this._getArrayFromAccessor(n);for(let u=0,f=l.length;u<f;u++){const g=new c(l[u]+"."+kn[r.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ja(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof vi?D_:Ch;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function G_(s,e,t){const n=e.attributes,i=new yt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),o.normalized){const h=ja($i[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new R,l=new R;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const _=ja($i[u.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new un;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Ec(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=qa[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ze.workingColorSpace!==Lt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Bn(s,e),G_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?F_(s,e.targets,t):s})}const An=(s,e=8,t="building")=>({id:s,path:`village/${s}.glb`,scale:e,category:t}),vt=(s,e=1)=>({id:s,path:`nature/${s}.glb`,scale:e,category:"nature"}),Lh=[...["Wall_Plaster_Straight","Wall_Plaster_Door_Flat","Floor_WoodDark","Door_4_Flat","Roof_RoundTiles_4x6","Roof_Front_Brick4"].map(s=>({id:s,path:`modular/${s}.glb`,scale:1,category:"building"})),...["table","chair","bookcaseopen","books","rugrectangle"].map(s=>({id:"furniture-"+s,path:`furniture/${s}.glb`,scale:s==="table"?2.5:s==="rugrectangle"?2:2.2,solid:s!=="rugrectangle",category:"prop"})),...["building_home_A_blue","building_home_A_green","building_home_B_blue","building_home_B_green","building_tavern_blue","building_market_blue","building_windmill_blue","building_church_blue","building_blacksmith_blue","building_watermill_blue"].map(s=>An(s,8)),An("building_well_blue",5,"prop"),An("building_bridge_A",9,"prop"),An("fence_wood_straight",5,"prop"),An("barrel",5,"prop"),An("crate_A_small",5,"prop"),An("sack",5,"prop"),An("wheelbarrow",5,"prop"),An("waterplant_A",3,"nature"),vt("tree-oak",2.7),vt("tree-detailed",2.8),vt("tree-pinedefaulta",3.1),vt("tree-pinedefaultb",3),vt("plant-bush",1.5),vt("plant-bushsmall",1.3),vt("flower-purplea",1),vt("flower-yellowa",1),vt("flower-reda",1),vt("grass-large",1),vt("rock-largea",1.8),vt("rock-largeb",2),vt("rock-smalla",1.2),vt("stump-round",1.4),vt("log",2),vt("mushroom-red",1),vt("tent-smallopen",5.5),vt("campfire-stones",1.4),vt("sign",1.5),vt("lily-small",1.2)],Ps=new Map(Lh.map(s=>[s.id,s]));class V_{models=new Map;batchSources=new Map;natureMaterial=new Yt({vertexColors:!0,roughness:1,metalness:0});instancingSource(e){let t=this.batchSources.get(e);if(t)return t;const n=this.models.get(e);return t=Ah(n,this.natureMaterial)||n,this.batchSources.set(e,t),t}bounds=new Map;character;textures=new Map;async load(e){const t=new c_;let n=0;const i=[...Lh.map(a=>async()=>{const l=(await t.loadAsync(`./adventures/${a.path}`)).scene;l.updateMatrixWorld(!0);const c=new yt().setFromObject(l),h=c.getCenter(new R),d=new mt;l.position.x-=h.x,l.position.y-=c.min.y,l.position.z-=h.z,d.add(l),d.updateMatrixWorld(!0),d.traverse(u=>{if(u instanceof tt){u.castShadow=!0,u.receiveShadow=!0;for(const f of Array.isArray(u.material)?u.material:[u.material]){const g=f;g.roughness=1,g.metalness=0;const _={leafsGreen:5405763,leafsDark:3366460,leafsLight:7443528,woodBark:8413252,woodBarkDark:6376503,grass:7441987,grassGreen:7441987,wood:8413252,carpet:10596491,carpetDarker:7243625,carpetWhite:14012341,woodInner:12557939};if((a.category==="nature"||a.path.startsWith("furniture/"))&&_[g.name]!==void 0&&g.color.set(_[g.name]),a.id==="tent-smallopen"&&g.name.startsWith("colorRed")&&g.color.set(g.name==="colorRed"?12231286:9336913),g.map){const m=g.map.image,p=a.path.startsWith("village/")?"village-atlas":`nature-${m==null?void 0:m.width}-${m==null?void 0:m.height}`;if(p==="village-atlas"){const y=this.textures.get(p);y?(g.map.dispose(),g.map=y):this.textures.set(p,g.map)}g.map.anisotropy=2}}}}),this.models.set(a.id,d),this.bounds.set(a.id,new yt().setFromObject(d))}),async()=>{this.character=await t.loadAsync("./adventures/character/Explorer.glb")}];let r=0;await Promise.all(Array.from({length:4},async()=>{for(;r<i.length;){const a=i[r++];await a(),e(++n,i.length)}}))}create(e,t=(n=>(n=Ps.get(e))==null?void 0:n.scale)()??1){const i=this.models.get(e);if(!i)throw Error(`Unknown asset ${e}`);const r=i.clone(!0);return r.scale.setScalar(t),r}}const W_={minX:-185,maxX:185,minZ:-98,maxZ:98},X_=[{id:"village",name:"Willowmere",x:-105,z:0},{id:"woodland",name:"Whispering Wood",x:0,z:0},{id:"meadow",name:"Maker’s Meadow",x:105,z:0}],as=s=>[-75+Math.sin(s*.055)*2.5,30+Math.sin(s*.055)*2.5];function qi(s,e){const t=Math.max(0,Math.abs(e)-72)/30+Math.max(0,Math.abs(s)-160)/40;let n=t*t*(2+Math.sin(s*.08)*.8+Math.cos(e*.1)*.7);for(const i of as(e))n-=Math.max(0,1-Math.abs(s-i)/5)*1.65;return n}function ci(s,e,t=3){if(t>=4&&s>124.7&&s<131.3&&e>-45.3&&e<-38.7)return .06;for(const n of as(e))if(Math.abs(e-8)<2.1&&Math.abs(s-n)<5)return .02+Math.max(0,1-Math.abs(s-n)/5)*.4;return qi(s,e)}function Ya(s,e){return Math.abs(e-8)>2&&as(e).some(t=>Math.abs(s-t)<2.65)}function Ph(s){return s==="vale"?W_:{minX:-84,maxX:84,minZ:-84,maxZ:84}}function zn(s,e,t,n=0){const i=Ph(t);return s>i.minX+n&&s<i.maxX-n&&e>i.minZ+n&&e<i.maxZ-n}function Ms(s,e,t,n){const i=[];for(let u=1;u<s.length;u++){const f=s[u-1],g=s[u],_=Math.hypot(g[0]-f[0],g[1]-f[1]);if(_<1e-4)continue;const m=Array.from({length:Math.ceil(_/1.3)},(p,y)=>y/Math.ceil(_/1.3));if(n!==void 0&&f[1]===8&&g[1]===8)for(const p of[-5,5]){const y=(n+p-f[0])/(g[0]-f[0]);y>0&&y<1&&m.push(y)}for(const p of[...new Set(m)].sort((y,x)=>y-x))i.push([Pn.lerp(f[0],g[0],p),Pn.lerp(f[1],g[1],p)])}i.push(s[s.length-1]);const r=[],a=[],o=[],l=i.length>2&&Math.hypot(i[0][0]-i.at(-1)[0],i[0][1]-i.at(-1)[1])<.001,c=(u,f)=>{const g=Math.hypot(f[0]-u[0],f[1]-u[1]);return[-(f[1]-u[1])/g,(f[0]-u[0])/g]};let h=0;for(let u=0;u<i.length;u++){const f=i[u],g=i[u-1]||(l?i.at(-2):f),_=i[u+1]||(l?i[1]:f),m=u===0&&!l?c(f,_):c(g,f),p=u===i.length-1&&!l?m:c(f,_),y=Math.hypot(m[0]+p[0],m[1]+p[1]),x=y>.001?(m[0]+p[0])/y:p[0],b=y>.001?(m[1]+p[1])/y:p[1],L=e/2/Math.max(.55,x*p[0]+b*p[1]);u&&(h+=Math.hypot(f[0]-g[0],f[1]-g[1]));for(const A of[-1,1]){const T=f[0]+x*L*A,z=f[1]+b*L*A;r.push(T,t(T,z)+.045,z),a.push((A+1)*e/2,h)}if(u<i.length-1){const A=(f[0]+_[0])/2,T=(f[1]+_[1])/2;if(n!==void 0&&Math.abs(T-8)<.01&&Math.abs(A-n)<5)continue;const z=u*2;o.push(z,z+1,z+3,z,z+3,z+2)}}const d=new Pt;return d.setAttribute("position",new gt(r,3)),d.setAttribute("uv",new gt(a,2)),d.setIndex(o),d.computeVertexNormals(),d}const wc=4,Gt=[{id:"vale",name:"The Willow Vale",tag:"A CONNECTED WORLD",description:"Willowmere lanes, whispering pines and a meadow of your own, connected by the old road.",icon:"♧",spawn:{x:-105,z:18},yaw:0},{id:"village",name:"Willowmere",tag:"THE VILLAGE",description:"Blue rooftops, winding lanes and a little market by the brook.",icon:"⌂",spawn:{x:0,z:18},yaw:0},{id:"woodland",name:"Whispering Wood",tag:"THE WILDERNESS",description:"Follow the water to a quiet camp beneath the pines.",icon:"♧",spawn:{x:0,z:28},yaw:0},{id:"meadow",name:"Maker’s Meadow",tag:"YOUR OWN PLACE",description:"An open green, a few supplies and room for your next idea.",icon:"◇",spawn:{x:0,z:16},yaw:0}],Ht=s=>30+Math.sin(s*.055)*2.5,Is=Pn.clamp;function Ih(s,e,t){if(t==="vale")return qi(s,e);let i=Is((Math.hypot(s*.85,e)-43)/30,0,1)*(2.2+Math.sin(s*.09+e*.035)*1.5+Math.cos(e*.11)*1.3);return t==="woodland"&&(i+=Math.sin(s*.055)*Math.sin(e*.06)*1.6),t!=="meadow"&&(i-=Math.max(0,1-Math.abs(s-Ht(e))/5)*1.65),i}function fn(s,e,t,n=1){return t==="vale"?ci(s,e,n):t!=="meadow"&&Math.abs(e-8)<2.1&&Math.abs(s-Ht(e))<5?.02+Math.max(0,1-Math.abs(s-Ht(e))/5)*.4:Ih(s,e,t)}function Hn(s,e,t){return t==="vale"?Ya(s,e):t!=="meadow"&&Math.abs(s-Ht(e))<2.65&&Math.abs(e-8)>2}function ln(s,e,t,n=.34){return t.some(i=>{const r=Is(s,i.minX,i.maxX),a=Is(e,i.minZ,i.maxZ);return(s-r)**2+(e-a)**2<n**2})}const Dh=(s,e,t,n)=>{const i=n[0]-t[0],r=n[1]-t[1],a=Is(((s-t[0])*i+(e-t[1])*r)/(i*i+r*r),0,1);return Math.hypot(s-t[0]-i*a,e-t[1]-r*a)};let yr=1;function rt(){return yr=Math.imul(yr,1664525)+1013904223>>>0,yr/4294967296}function q_(){const s=document.createElement("canvas");s.width=s.height=256;const e=s.getContext("2d");e.fillStyle="#ada28b",e.fillRect(0,0,256,256);for(let n=-1;n<9;n++)for(let i=-1;i<5;i++){const r=i*64+n%2*32,a=n*32;e.fillStyle=["#c7bca4","#d0c5ad","#beb59e","#d6ccb4"][(n*7+i+100)%4],e.beginPath(),typeof e.roundRect=="function"?e.roundRect(r+2,a+2,60,28,5):(e.moveTo(r+7,a+2),e.lineTo(r+57,a+2),e.quadraticCurveTo(r+62,a+2,r+62,a+7),e.lineTo(r+62,a+25),e.quadraticCurveTo(r+62,a+30,r+57,a+30),e.lineTo(r+7,a+30),e.quadraticCurveTo(r+2,a+30,r+2,a+25),e.lineTo(r+2,a+7),e.quadraticCurveTo(r+2,a+2,r+7,a+2)),e.fill(),e.fillStyle="#e1d7c1",e.fillRect(r+8,a+3,43,1)}const t=new _o(s);return t.colorSpace=at,t.wrapS=t.wrapT=Kn,t.repeat.set(.6,.6),t.anisotropy=4,t}function j_(){const s=document.createElement("canvas");s.width=s.height=128;const e=s.getContext("2d");e.fillStyle="#b5a17d",e.fillRect(0,0,128,128);for(let n=0;n<650;n++){const i=n*73%128,r=(n*31+Math.floor(n/128)*17)%128;e.fillStyle=n%3===0?"#bca986":"#aa9674",e.fillRect(i,r,n%4===0?2:1,1)}const t=new _o(s);return t.colorSpace=at,t.wrapS=t.wrapT=Kn,t.repeat.set(.45,.45),t.anisotropy=4,t}function Ka(s,e=1.3){const t=s.length>3&&s[0][0]===s[s.length-1][0]&&s[0][1]===s[s.length-1][1],n=(t?s.slice(0,-1):s).map(([r,a])=>new R(r,0,a)),i=new Ag(n,t,"centripetal");return i.getSpacedPoints(Math.max(2,Math.ceil(i.getLength()/e))).map(r=>[r.x,r.z])}class Uh{constructor(e,t,n=1,i={}){this.library=e,this.id=t,this.layout=n,this.options=i,yr=t==="village"?5678:t==="woodland"?22111:9976;const r=q_();this.ownedTextures.push(r),this.pathMaterial=this.material(new Yt({color:14142645,map:r,roughness:1}));const a=j_();this.ownedTextures.push(a),this.trailMaterial=this.material(new Yt({map:a,roughness:1,color:14866619})),i.terrain!==!1&&this.terrain(),t==="village"?this.village():t==="woodland"?this.woodland():this.meadow(),i.populate!==!1&&this.surroundings(),this.layout>=2&&this.plantedClearings(),this.flushInstances(),this.group.updateMatrixWorld(!0)}group=new mt;obstacles=[];landmarks=[];instances=0;geometries=[];materials=[];ownedTextures=[];buckets=new Map;paths=[];pathMaterial;trailMaterial;assetRoots=[];get trailSurface(){return this.trailMaterial}ground(e,t){var n,i;return((i=(n=this.options).ground)==null?void 0:i.call(n,e,t))??Ih(e,t,this.id)}walk(e,t){var n,i;return((i=(n=this.options).walk)==null?void 0:i.call(n,e,t))??fn(e,t,this.id)}material(e){return this.materials.push(e),e}mesh(e,t){this.geometries.push(e);const n=new tt(e,t);return n.receiveShadow=!0,this.group.add(n),n}terrain(){const e=this.layout>=2?new xi(360,360,144,144):new xi(190,190,95,95);e.rotateX(-Math.PI/2);const t=e.getAttribute("position"),n=[];for(let i=0;i<t.count;i++){const r=t.getX(i),a=t.getZ(i),o=this.ground(r,a),l=this.layout>=2?Math.max(0,Math.hypot(r*.9,a)-85)*.18*(1+.3*Math.sin(r*.045)*Math.cos(a*.035)):0;t.setY(i,o+l);const c=Math.sin(r*.27+a*.17)*.018+Math.cos(r*.13-a*.21)*.017,h=new xe(this.id==="woodland"?5404740:7968598);h.offsetHSL(c,.01,c);const d=1-Is(Math.abs(r-Ht(a))/5,0,1);this.id!=="meadow"&&h.lerp(new xe(12694930),d*.8),n.push(h.r,h.g,h.b)}if(e.setAttribute("color",new gt(n,3)),e.computeVertexNormals(),this.mesh(e,this.material(new Yt({vertexColors:!0,roughness:1,flatShading:!0}))),this.id!=="meadow"){const i=[],r=[];for(let o=0;o<=90;o++){const l=-95+o*190/90,c=Ht(l);if(i.push(c-2.9,-.58,l,c+2.9,-.58,l),o<90){const h=o*2;r.push(h,h+2,h+1,h+1,h+2,h+3)}}const a=new Pt;a.setAttribute("position",new gt(i,3)),a.setIndex(r),a.computeVertexNormals(),this.mesh(a,this.material(new Yt({color:6926261,roughness:.25,metalness:.1,transparent:!0,opacity:.92,side:on})))}}trail(e,t=2.2){if(this.layout===1){this.path(e,t);return}this.path(e.length>2?Ka(e):e,t,this.trailMaterial)}path(e,t=3.2,n=this.pathMaterial){if(this.paths.push({points:e,width:t}),this.layout>=3){this.mesh(Ms(e,t,(c,h)=>this.walk(c,h),this.id==="meadow"?void 0:Ht(8)),n);return}const i=[],r=[],a=[];let o=0;for(let c=0;c<e.length-1;c++){const h=e[c],d=e[c+1],u=d[0]-h[0],f=d[1]-h[1],g=Math.hypot(u,f),_=-f/g*t/2,m=u/g*t/2,p=Math.ceil(g/1.5),y=Array.from({length:p+1},(x,b)=>b/p);if(this.id!=="meadow"&&Math.abs(h[1]-8)<.001&&Math.abs(d[1]-8)<.001){for(const x of[-5,5]){const b=(Ht(8)+x-h[0])/u;b>0&&b<1&&y.push(b)}y.sort((x,b)=>x-b)}for(let x=0;x<y.length-1;x++){const b=y[x],L=y[x+1],A=(b+L)/2;if(this.id!=="meadow"&&Math.abs(h[1]+f*A-8)<.01&&Math.abs(h[0]+u*A-Ht(8))<5)continue;const T=i.length/3;for(const[z,S]of[[b,-1],[b,1],[L,1],[L,-1]]){const w=h[0]+u*z+_*S,V=h[1]+f*z+m*S;i.push(w,this.walk(w,V)+.045,V),r.push((S+1)*t/2,o+z*g)}a.push(T,T+1,T+2,T,T+2,T+3)}o+=g}for(const[c,h]of e){if(this.id!=="meadow"&&Math.abs(h-8)<2.2&&Math.abs(c-Ht(8))<5)continue;const d=i.length/3;i.push(c,this.walk(c,h)+.049,h),r.push(c,h);for(let u=0;u<=20;u++){const f=u/20*Math.PI*2,g=c+Math.sin(f)*t/2,_=h+Math.cos(f)*t/2;i.push(g,this.walk(g,_)+.049,_),r.push(g,_),u<20&&a.push(d,d+u+1,d+u+2)}}const l=new Pt;l.setAttribute("position",new gt(i,3)),l.setAttribute("uv",new gt(r,2)),l.setIndex(a),l.computeVertexNormals(),this.mesh(l,n)}disc(e,t,n,i,r=!1){const a=new vo(n,48);if(r){const l=a.getAttribute("position"),c=a.getAttribute("uv");for(let h=0;h<l.count;h++)c.setXY(h,l.getX(h),l.getY(h))}const o=this.mesh(a,r?this.pathMaterial:this.material(new Yt({color:i,roughness:1})));return o.rotation.x=-Math.PI/2,o.position.set(e,this.ground(e,t)+.055,t),o}place(e,t,n,i=(l=>(l=Ps.get(e))==null?void 0:l.scale)()??1,r=0,a=!1,o){e==="tent-smallopen"&&this.options.fullSizeTents&&(i=5.5,r+=Math.PI);const c=this.library.create(e,i);if(c.position.set(t,o??this.walk(t,n),n),c.rotation.y=r,this.group.add(c),this.assetRoots.push(c),c.updateMatrixWorld(!0),a){const h=new yt().setFromObject(c),d=e.startsWith("building_")?.45:.08;this.obstacles.push({minX:h.min.x+d,maxX:h.max.x-d,minZ:h.min.z+d,maxZ:h.max.z-d,height:h.max.y,name:e})}return c}instance(e,t,n,i,r=0,a){const o=`${e}:${Math.floor(t/48)}:${Math.floor(n/48)}`;let l=this.buckets.get(o);l||this.buckets.set(o,l={id:e,matrices:[]});const c=new Ae().compose(new R(t,a??this.ground(t,n),n),new Kt().setFromAxisAngle(new R(0,1,0),r),new R(i,i,i));l.matrices.push(c),this.instances++}nearPath(e,t,n=0){return this.paths.some(i=>i.points.slice(1).some((r,a)=>Dh(e,t,i.points[a],r)<i.width/2+n))}garden(e,t){this.layout<3&&this.disc(e,t,1.7,7833178);for(let n=0;n<16;n++){const i=rt()*Math.PI*2,r=Math.sqrt(rt())*1.6;this.instance(["flower-purplea","flower-yellowa","flower-reda"][n%3],e+Math.sin(i)*r,t+Math.cos(i)*r,.8+rt()*.7,rt()*6.28)}this.instance("plant-bush",e,t,1.4);for(let n=0;n<8;n++){const i=n*Math.PI/4;this.instance("rock-smalla",e+Math.sin(i)*1.7,t+Math.cos(i)*1.7,.6+rt()*.2,i)}}village(){this.path([[0,54],[0,12],[0,-30]],5.2),this.path([[-37,8],[0,8],[39,8]],4.2),this.path([[-20,28],[-20,-29],[0,-29],[20,-29],[20,28]],3.1),this.path([[-20,-9],[20,-9]],3),this.path([[-20,27],[20,27]],3.3),this.disc(0,0,8.6,13156777,!0),this.place("building_well_blue",0,-1,6,0,!0),this.landmarks.push({id:"well",name:"The wishing well",x:0,z:3,description:"They say the brook remembers every wish. Welcome to Willowmere."});const e=[["building_home_A_blue",-10,-10,Math.PI/2],["building_home_B_green",-11,10,Math.PI/2],["building_home_A_green",11,-11,-Math.PI/2],["building_home_B_blue",12,13,-Math.PI/2],["building_home_A_blue",-28,-11,Math.PI/2],["building_home_A_green",-28,9,Math.PI/2],["building_home_B_blue",-11,34,Math.PI],["building_home_A_blue",12,34,Math.PI],["building_home_A_green",-28,29,Math.PI/2]];for(const[t,n,i,r]of e){this.place(t,n,i,7.2,r,!0);const a=Math.sin(r),o=Math.cos(r);this.path([[n+a*3.4,i+o*3.4],[n+a*6.5,i+o*6.5]],1.8),this.garden(n+Math.cos(r)*3.7+a*4,i-Math.sin(r)*3.7+o*4)}this.place("building_tavern_blue",0,-23,8.8,0,!0),this.place("building_church_blue",-27,-32,8,Math.PI/2,!0),this.place("building_blacksmith_blue",19,-20,7,-Math.PI/2,!0),this.place("building_market_blue",14,0,7.2,-Math.PI/2,!0),this.place("building_windmill_blue",-39,24,8,Math.PI/2,!0),this.path([[-37,8],[-39,17]],2.8),this.landmarks.push({id:"inn",name:"The Bluebird Inn",x:0,z:-16,description:"A place for travellers and tall tales. These prefab buildings have decorative closed doors; interiors are not included."},{id:"market",name:"Willowmere market",x:8,z:0,description:"Fresh apples, warm bread, and something for the road. Follow the lane east to the woodland bridge."},{id:"mill",name:"Old Willow Windmill",x:-33,z:24,description:"The village’s oldest landmark, standing watch over the meadow."}),this.bridge(),this.trail([[39,8],[47,0],[56,-4],[64,2],[66,18],[57,27],[46,21],[39,8]],2.2),this.trail([[56,-4],[56,-8.5]],1.7),this.place("tent-smallopen",56,-10,2.5,0,!0),this.place("campfire-stones",54,-4,1.7,0,!0),this.garden(54,12),this.place("log",60,14,2.5,1,!0),this.place("stump-round",54,16,1.7,0,!0),this.landmarks.push({id:"camp",name:"The woodland camp",x:54,z:-1,description:"A quiet resting place at the edge of the forest. The trail loops back to the bridge."});for(const[t,n]of[[-5,7],[5,7],[-5,-8],[5,-8]])this.garden(t,n);for(const[t,n,i]of[[-4,-15,0],[5,11,1],[7,-4,0],[-17,22,1]])this.place("barrel",t,n,4,i,!0),this.place("crate_A_small",t+1,n+.4,4.2,i,!0);this.place("wheelbarrow",17,-14,4,1.5,!0)}bridge(){const e=this.place("building_bridge_A",Ht(8),8,1,0,!1,0);e.updateMatrixWorld(!0);const t=new yt().setFromObject(e),n=t.getSize(new R);e.scale.set(4.2/n.x,3/n.y,10/n.z),e.rotation.y=Math.PI/2,e.position.y=-2.45;const i=Ht(8);this.obstacles.push({minX:i-4.8,maxX:i+4.8,minZ:5.8,maxZ:6.1,height:1.2},{minX:i-4.8,maxX:i+4.8,minZ:9.9,maxZ:10.2,height:1.2}),this.landmarks.push({id:"bridge",name:"Willowbrook bridge",x:24,z:8,description:"Beyond the bridge, wildflowers give way to the pines. The water stays safely below the footpath."})}woodland(){this.trail([[0,38],[0,22],[-9,8],[-7,-9],[2,-24],[18,-27],[22,-13],[22,8],[12,17],[0,22]],2.6),this.layout===1?this.path([[22,8],[39,8],[46,8],[58,-3],[60,-24]],2.3):(this.path([[22,8],[39,8],[46,8]],2.3,this.trailMaterial),this.trail([[46,8],[58,-3],[60,-24]],2.3)),this.bridge(),this.place("tent-smallopen",-9,-17,3.2,.5,!0),this.place("campfire-stones",0,-14,2,0,!0),this.place("log",-1,-8,2.6,1,!0),this.place("stump-round",3,-10,2,0,!0),this.place("rock-largeb",15,-30,4,1,!0),this.place("rock-largea",17,-33,3,0,!0),this.landmarks.push({id:"camp",name:"The explorer’s camp",x:-4,z:-7,description:"The fire has gone quiet. Take the winding trail, find the old stones, and listen to the brook."},{id:"stones",name:"The old stones",x:13,z:-27,description:"Moss and time have softened every edge. A good place to stop for a while."},{id:"view",name:"Pinewater lookout",x:59,z:-24,description:"The trail ends above the water. Turn back for the camp, or travel to the village from Places."})}meadow(){this.layout>=3?(this.trail([[0,25],[0,15],[-4,6],[-9,-1],[-12,-9]],2.8),this.trail([[-12,-9],[-4,-11],[5,-11],[14,-11]],2.4),this.trail([[-12,-9],[-15,-9],[-15,-11]],1.8),this.trail([[0,25],[9,27],[19,26],[26,18]],1.8)):(this.path([[-19,-9],[0,-9],[19,-9]],3),this.path([[0,25],[0,-9],[0,-30]],3.2),this.disc(0,0,7,10532731)),this.place("building_home_A_green",-15,-15,7,0,!0),this.place("building_well_blue",14,-15,5,0,!0),this.place("wheelbarrow",-9,-8,4,0,!0);for(let e=0;e<3;e++)this.place("crate_A_small",(this.layout>=3?-16:-10)+e*1.2,this.layout>=3?-3:-5,4,0,!0),this.place("barrel",(this.layout>=3?-17:-13)+e,this.layout>=3?-6:-8,4,0,!0);if(this.landmarks.push({id:"makers",name:"Make yourself at home",x:0,z:6,description:"Open Build to place premade trees, flowers, supplies and cottages. Tap an object to select it; move, rotate or remove it. Your meadow saves separately."}),this.garden(7,10),this.garden(-7,10),this.layout>=3){for(const e of[-6,-3.6,-1.2,1.2,3.6])this.place("fence_wood_straight",-19,e,2.4,0,!0);this.place("sign",-3,20,1.7,.3,!0),this.landmarks.push({id:"orchard",name:"The meadow edge",x:24,z:18,description:"A sheltered corner for a garden. The wide green beside the lane is yours to build on."})}}surroundings(){const e=this.id==="village";for(let t=0;t<700;t++){const n=(rt()-.5)*172,i=(rt()-.5)*172;if(this.nearPath(n,i,2.8)||ln(n,i,this.obstacles,2.8)||Hn(n,i,this.id)||(this.id==="woodland"?Math.hypot(n,i)<9:this.id==="meadow"?Math.abs(n)<32&&Math.abs(i)<35:n>-35&&n<23&&i>-40&&i<43))continue;const a=4.1+rt()*2.7,o=n>38||this.id==="woodland"?rt()>.25?"tree-pinedefaulta":"tree-pinedefaultb":rt()>.4?"tree-oak":"tree-detailed";this.instance(o,n,i,a,rt()*6.28),this.obstacles.push({minX:n-.2,maxX:n+.2,minZ:i-.2,maxZ:i+.2,height:6,name:"tree"}),t%3===0&&this.instance("plant-bush",n+1.8,i+.5,1+rt(),rt()*6.28)}for(let t=0;t<1e3;t++){const n=(rt()-.5)*158,i=(rt()-.5)*158;if(this.nearPath(n,i,.8)||ln(n,i,this.obstacles,.8)||Hn(n,i,this.id)||e&&Math.hypot(n,i)<8||this.id==="meadow"&&Math.abs(n)<25&&Math.abs(i)<25)continue;const r=t%13===0?"rock-smalla":t%5===0?"flower-yellowa":t%4===0?"flower-purplea":"grass-large";this.instance(r,n,i,.65+rt()*1.2,rt()*6.28)}if(this.id!=="meadow")for(let t=0;t<55;t++){const n=-84+t*3,i=Ht(n)+(t%2?-3.8:3.8);Math.abs(n-8)<4||(this.instance("plant-bushsmall",i,n,1+rt(),rt()*6.28),t%3===0&&this.instance("rock-largea",i+1,n,1+rt()))}if(e)for(const[t,n]of[[-8,21],[8,22],[-8,-34],[7,-35],[-36,-1],[20,29]])ln(t,n,this.obstacles,2)||(this.instance("tree-oak",t,n,4.6,0),this.obstacles.push({minX:t-.22,maxX:t+.22,minZ:n-.22,maxZ:n+.22,height:6}))}plantedClearings(){if(this.id==="meadow"&&this.layout<3)return;const e=this.id==="meadow"?[[-20,6],[-22,-14],[-8,24],[9,29],[23,21],[25,8]]:this.id==="woodland"?[[-12,-12],[-4,-20],[5,-8],[11,-25],[18,15],[52,1],[60,-17]]:[[45,17],[51,-7],[62,-5],[61,20],[54,15]];for(const[t,n]of e)for(let i=0;i<38;i++){const r=rt()*Math.PI*2,a=Math.sqrt(rt())*3.2,o=t+Math.cos(r)*a,l=n+Math.sin(r)*a;if(this.nearPath(o,l,.75)||ln(o,l,this.obstacles,.65)||Hn(o,l,this.id))continue;const c=i%7===0?"plant-bushsmall":i%5===0?"mushroom-red":i%3===0?"flower-yellowa":i%2===0?"flower-purplea":"grass-large";this.instance(c,o,l,.9+rt()*.7,rt()*6.28)}if(this.id!=="meadow")for(let t=0;t<45;t++){const n=-70+t*3.1;if(Math.abs(n-8)<6)continue;const i=Ht(n)+(t%2?3.55:-3.55);this.nearPath(i,n,.8)||ln(i,n,this.obstacles,.7)||this.instance("waterplant_A",i,n,3.1+rt(),rt()*6.28)}}flushInstances(){for(const{id:e,matrices:t}of this.buckets.values()){const n=this.library.models.get(e);n.updateMatrixWorld(!0),n.traverse(i=>{if(!(i instanceof tt))return;const r=new di(i.geometry,i.material,t.length);r.castShadow=e.startsWith("tree"),r.receiveShadow=!0;for(let a=0;a<t.length;a++)r.setMatrixAt(a,new Ae().multiplyMatrices(t[a],i.matrixWorld));if(this.layout>=2&&e.startsWith("tree"))for(let a=0;a<t.length;a++){const o=new R().setFromMatrixPosition(t[a]),l=.83+(Math.sin(o.x*13.7+o.z*7.3)*.5+.5)*.22;r.setColorAt(a,new xe(l,l+.015,l-.02))}r.computeBoundingSphere(),this.group.add(r)})}this.buckets.clear()}dispose(){this.group.removeFromParent(),this.group.traverse(e=>{e instanceof di&&e.dispose()});for(const e of this.geometries)e.dispose();for(const e of this.materials)e.dispose();for(const e of this.ownedTextures)e.dispose();this.group.clear(),this.assetRoots.length=0,this.obstacles.length=0}}function Y_(s,e,t){const n=Math.max(1,Math.ceil((s.maxX-s.minX)/1.2)),i=Math.max(1,Math.ceil((s.maxZ-s.minZ)/1.2));for(let r=0;r<=n;r++)for(let a=0;a<=i;a++){const o=s.minX+(s.maxX-s.minX)*r/n,l=s.minZ+(s.maxZ-s.minZ)*a/i;if(!t.inside(o,l))return"Keep the whole object inside the explored landscape";if(t.water(o,l))return"Keep the water clear";if(t.path(o,l))return"Keep paths and entrances clear";if(Math.abs(t.height(o,l)-e)>.45)return"Choose flatter ground for this object"}return null}const Tc=(s,e,t)=>e>=s.x&&e<=s.x+s.width&&t>=s.y&&t<=s.y+s.height,Ac=(s,e,t=0)=>s.x<e.x+e.width+t&&s.x+s.width>e.x-t&&s.y<e.y+e.height+t&&s.y+s.height>e.y-t;function K_(s,e,t,n,i){const r=t<500&&e.scale<1.8,a=r?"600 11px system-ui":"600 13px system-ui",o=r?13:16,l=s.map(h=>({destination:h,...e.screen(h.x,h.z)})).filter(h=>h.x>=0&&h.x<=t&&h.y>=0&&h.y<=n),c=[];for(const h of l){const d=h.destination.name,u=d.indexOf(" "),f=r&&u>0?[d.slice(0,u),d.slice(u+1)]:[d],g=Math.min(t-8,Math.max(...f.map(x=>i(x,a)))+10),_=f.length*o+8,m=[{x:h.x-g/2,y:h.y-15-_},{x:h.x-g/2,y:h.y+15},{x:h.x-15-g,y:h.y-_/2},{x:h.x+15,y:h.y-_/2}];let p=m[0],y=1/0;for(let x=0;x<m.length;x++){const b={x:Math.max(4,Math.min(t-g-4,m[x].x)),y:Math.max(4,Math.min(n-_-4,m[x].y)),width:g,height:_},L=c.filter(z=>Ac(b,z.label,3)).length,A=l.filter(z=>z!==h&&Ac(b,{x:z.x-9,y:z.y-9,width:18,height:18})).length,T=L*1e6+A*1e4+x*10+Math.hypot(b.x-m[x].x,b.y-m[x].y);T<y&&(p=b,y=T)}c.push({...h,label:{...p,width:g,height:_,font:a,lines:f,lineHeight:o}})}return c}function Z_(s,e,t,n,i){if(e<0||t<0||e>n||t>i)return;const r=(a,o=!1)=>{var l;return(l=[...a].sort((c,h)=>{const d=u=>o?Math.hypot(u.label.x+u.label.width/2-e,u.label.y+u.label.height/2-t):Math.hypot(u.x-e,u.y-t);return d(c)-d(h)})[0])==null?void 0:l.destination};return r(s.filter(a=>Math.hypot(a.x-e,a.y-t)<=9))||r(s.filter(a=>Tc(a.label,e,t)),!0)||r(s.filter(a=>Math.hypot(a.x-e,a.y-t)<=25))||r(s.filter(a=>{const o=a.label,l=Math.max(44,o.width+8),c=Math.max(44,o.height+8);return Tc({x:o.x-(l-o.width)/2,y:o.y-(c-o.height)/2,width:l,height:c},e,t)}),!0)}function $_(s,e){const t=Ph(s),n=[];if(s!=="meadow")for(let r=0;r<(s==="vale"?2:1);r++){const a=[];for(let o=t.minZ;o<=t.maxZ;o+=2)a.push([s==="vale"?as(o)[r]:Ht(o),o]);n.push(a)}const i=s==="vale"?[{id:"home",name:"Willowmere",x:-105,z:18},{id:"woodland",name:"Whispering Wood",x:0,z:24},{id:"meadow",name:"Maker’s Meadow",x:105,z:16},{id:"brookside",name:"Brookside",x:78,z:52},{id:"foresters",name:"Foresters’ Rest",x:-23,z:-38}]:[{id:"home",name:Gt.find(r=>r.id===s).name,...Gt.find(r=>r.id===s).spawn},...e.landmarks.filter(r=>!["bridge","well"].includes(r.id)).slice(0,3)];return s==="vale"&&e.landmarks.some(r=>r.id==="lodge-door")&&i.push({id:"lodge",name:"Meadow Lodge",x:128,z:-36}),{scene:s,bounds:t,paths:e.paths,buildings:[...e.obstacles.filter(r=>{var a;return(a=r.name)==null?void 0:a.startsWith("building_")}),...e.mapBuildings||[]],trees:e.trees||e.obstacles.filter(r=>r.name==="tree").map(r=>({x:(r.minX+r.maxX)/2,z:(r.minZ+r.maxZ)/2,radius:1.6})),rivers:n,destinations:i}}class Rc{constructor(e,t,n){this.bounds=e,this.width=t,this.height=n,this.fit()}x=0;z=0;scale=1;fit(){this.x=(this.bounds.minX+this.bounds.maxX)/2,this.z=(this.bounds.minZ+this.bounds.maxZ)/2,this.scale=Math.min((this.width-60)/(this.bounds.maxX-this.bounds.minX),(this.height-90)/(this.bounds.maxZ-this.bounds.minZ))}screen(e,t){return{x:(e-this.x)*this.scale+this.width/2,y:(t-this.z)*this.scale+this.height/2}}world(e,t){return{x:(e-this.width/2)/this.scale+this.x,z:(t-this.height/2)/this.scale+this.z}}zoom(e,t=this.width/2,n=this.height/2){const i=this.world(t,n),r=Math.min((this.width-60)/(this.bounds.maxX-this.bounds.minX),(this.height-90)/(this.bounds.maxZ-this.bounds.minZ));this.scale=Math.max(r,Math.min(r*8,this.scale*e));const a=this.world(t,n);this.x+=i.x-a.x,this.z+=i.z-a.z,this.clamp()}pan(e,t){this.x-=e/this.scale,this.z-=t/this.scale,this.clamp()}clamp(){this.x=Math.max(this.bounds.minX,Math.min(this.bounds.maxX,this.x)),this.z=Math.max(this.bounds.minZ,Math.min(this.bounds.maxZ,this.z))}}class J_{constructor(e,t,n){this.mini=e,this.full=t,this.travel=n,t.addEventListener("pointerdown",i=>{if(!this.open)return;t.setPointerCapture(i.pointerId);const r=this.point(i);this.pointers.set(i.pointerId,r),this.down=r,this.pointers.size>1&&(this.gesture=!0,this.pinch=this.span())}),t.addEventListener("pointermove",i=>{const r=this.pointers.get(i.pointerId);if(!r||!this.transform)return;const a=this.point(i),o=a.x-r.x,l=a.y-r.y;if(this.pointers.set(i.pointerId,a),this.pointers.size===2){const c=this.span(),h=[...this.pointers.values()];this.transform.zoom(c/Math.max(1,this.pinch),(h[0].x+h[1].x)/2,(h[0].y+h[1].y)/2),this.pinch=c}else this.down&&Math.hypot(a.x-this.down.x,a.y-this.down.y)>7&&(this.gesture=!0),this.gesture&&this.transform.pan(o,l);this.drawFull()}),t.addEventListener("pointerup",i=>{const r=this.point(i);if(this.pointers.has(i.pointerId)&&this.open&&this.down&&Math.hypot(r.x-this.down.x,r.y-this.down.y)<=7&&!this.gesture&&this.pointers.size===1&&this.transform&&this.data){const o=this.full.getBoundingClientRect(),l=Z_(this.targets,r.x,r.y,o.width,o.height);l&&this.travel(l)}this.pointers.delete(i.pointerId),this.pointers.size||(this.gesture=!1,this.down=null)});for(const i of["pointercancel","lostpointercapture"])t.addEventListener(i,r=>{this.pointers.delete(r.pointerId),this.pointers.size||(this.gesture=!1,this.down=null)});t.addEventListener("wheel",i=>{var r;i.preventDefault(),(r=this.transform)==null||r.zoom(Math.exp(-i.deltaY*.0015),i.offsetX,i.offsetY),this.drawFull()},{passive:!1}),t.addEventListener("keydown",i=>{if(!this.transform)return;const r={ArrowLeft:[40,0],ArrowRight:[-40,0],ArrowUp:[0,40],ArrowDown:[0,-40]};r[i.key]&&(i.preventDefault(),this.transform.pan(...r[i.key]),this.drawFull()),(i.key==="+"||i.key==="=")&&this.zoom(1.3),i.key==="-"&&this.zoom(1/1.3)})}data=null;transform=null;open=!1;base=document.createElement("canvas");pose={x:0,z:0,yaw:0};lastMini=0;drawnPose="";pointers=new Map;gesture=!1;down=null;pinch=0;targets=[];point(e){const t=this.full.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}span(){const[e,t]=[...this.pointers.values()];return e&&t?Math.hypot(e.x-t.x,e.y-t.y):0}setWorld(e){this.data=e,this.targets=[],this.transform=null,this.drawnPose="",this.makeBase()}makeBase(){var o;if(!this.data)return;const e=this.data,t=e.bounds,n=t.maxX-t.minX,i=t.maxZ-t.minZ;this.base.width=1536,this.base.height=Math.ceil(1536*i/n);const r=this.base.getContext("2d"),a=1536/n;if(r.scale(a,a),r.translate(-t.minX,-t.minZ),r.fillStyle="#acc08a",r.fillRect(t.minX,t.minZ,n,i),e.scene==="woodland"||e.scene==="vale"){const l=r.createLinearGradient(t.minX,0,t.maxX,0);l.addColorStop(0,"#a2b97b"),l.addColorStop(.32,"#8fa970"),l.addColorStop(.52,"#638963"),l.addColorStop(.7,"#95b17d"),l.addColorStop(1,"#b2c691"),r.fillStyle=l,r.fillRect(t.minX,t.minZ,n,i)}for(const l of e.rivers)r.strokeStyle="#d3ce9f",r.lineWidth=9,r.lineJoin="round",this.line(r,l),r.strokeStyle="#75b9bf",r.lineWidth=5.8,this.line(r,l);for(const l of e.trees)r.fillStyle="rgba(40,75,48,.17)",r.beginPath(),r.arc(l.x+.8,l.z+.6,l.radius*1.2,0,Math.PI*2),r.fill(),r.fillStyle=e.scene==="woodland"||e.scene==="vale"&&l.x>-43&&l.x<47?"#3e704f":"#6d9456",r.beginPath(),r.arc(l.x,l.z,l.radius,0,Math.PI*2),r.fill();for(const l of e.paths)r.strokeStyle="#8d9563",r.lineWidth=l.width+.5,r.lineJoin="round",r.lineCap="round",this.line(r,l.points),r.strokeStyle="#e1d0a3",r.lineWidth=l.width,this.line(r,l.points);for(const l of e.buildings)r.fillStyle="#456358",r.fillRect(l.minX+.6,l.minZ+.7,l.maxX-l.minX,l.maxZ-l.minZ),r.fillStyle=(o=l.name)!=null&&o.includes("green")?"#5e8d75":"#548693",r.strokeStyle="#385d55",r.lineWidth=.4,r.fillRect(l.minX,l.minZ,l.maxX-l.minX,l.maxZ-l.minZ),r.strokeRect(l.minX,l.minZ,l.maxX-l.minX,l.maxZ-l.minZ)}line(e,t){e.beginPath(),t.forEach(([n,i],r)=>r?e.lineTo(n,i):e.moveTo(n,i)),e.stroke()}update(e,t){if(this.pose=e,t-this.lastMini<80)return;const n=[e.x.toFixed(2),e.z.toFixed(2),e.yaw.toFixed(2),this.mini.clientWidth].join(":");n!==this.drawnPose&&(this.drawMini(),this.drawnPose=n),this.lastMini=t,this.open&&this.drawFull()}canvasSize(e){const t=e.getBoundingClientRect(),n=Math.min(devicePixelRatio,2);(e.width!==Math.round(t.width*n)||e.height!==Math.round(t.height*n))&&(e.width=Math.round(t.width*n),e.height=Math.round(t.height*n));const i=e.getContext("2d");return i.setTransform(n,0,0,n,0,0),{c:i,w:t.width,h:t.height}}background(e,t,n,i){if(!this.data)return;const r=this.data.bounds,a=i.screen(r.minX,r.minZ);e.fillStyle="#d7ddbd",e.fillRect(0,0,t,n),e.drawImage(this.base,a.x,a.y,(r.maxX-r.minX)*i.scale,(r.maxZ-r.minZ)*i.scale)}player(e,t,n,i=8){e.save(),e.translate(t,n),e.rotate(Math.PI-this.pose.yaw),e.shadowBlur=4,e.shadowColor="#203c3a66",e.beginPath(),e.moveTo(0,-i),e.lineTo(i*.65,i*.7),e.lineTo(0,i*.35),e.lineTo(-i*.65,i*.7),e.closePath(),e.fillStyle="#fcf7e8",e.strokeStyle="#244b50",e.lineWidth=2,e.fill(),e.stroke(),e.restore()}drawMini(){if(!this.data)return;const{c:e,w:t,h:n}=this.canvasSize(this.mini);if(!t||!n)return;const i=new Rc(this.data.bounds,t,n);i.x=this.pose.x,i.z=this.pose.z,i.scale=t/66,e.save(),e.beginPath(),e.arc(t/2,n/2,t/2-1,0,Math.PI*2),e.clip(),this.background(e,t,n,i),this.player(e,t/2,n/2,9),e.restore(),e.font="600 11px system-ui",e.textAlign="center",e.fillStyle="#2a5148",e.fillText("N",t/2,16)}show(){this.open=!0,this.resize(),this.transform&&this.full.clientWidth<700&&(this.transform.zoom(2.3),this.transform.x=this.pose.x,this.transform.z=this.pose.z,this.drawFull()),this.full.focus()}hide(){this.open=!1,this.pointers.clear(),this.gesture=!1,this.down=null}resize(){if(!this.open||!this.data)return;const{w:e,h:t}=this.canvasSize(this.full),n=this.transform;this.transform=new Rc(this.data.bounds,e,t),n&&(this.transform.x=n.x,this.transform.z=n.z,this.transform.scale=n.scale),this.drawFull()}zoom(e){var t;(t=this.transform)==null||t.zoom(e),this.drawFull()}fit(){var e;(e=this.transform)==null||e.fit(),this.drawFull()}drawFull(){if(!this.open||!this.data||!this.transform)return;const{c:e,w:t,h:n}=this.canvasSize(this.full),i=this.transform;this.background(e,t,n,i),e.textAlign="center",e.textBaseline="middle",this.targets=K_(this.data.destinations,i,t,n,(a,o)=>(e.font=o,e.measureText(a).width));for(const a of this.targets)e.beginPath(),e.arc(a.x,a.y,7,0,Math.PI*2),e.fillStyle="#fff9e8",e.fill(),e.strokeStyle="#3d6554",e.lineWidth=2,e.stroke();for(const{label:a}of this.targets){e.font=a.font;for(let o=0;o<a.lines.length;o++){const l=a.x+a.width/2,c=a.y+4+(o+.5)*a.lineHeight;e.lineWidth=3,e.strokeStyle="#f9f6e6",e.strokeText(a.lines[o],l,c),e.fillStyle="#294b40",e.fillText(a.lines[o],l,c)}}const r=i.screen(this.pose.x,this.pose.z);this.player(e,r.x,r.y,10)}}function La(s,e,t=18){if(e(s.x,s.z))return{...s};for(let n=.5;n<=t;n+=.5){const i=Math.ceil(2*Math.PI*n/.65);for(let r=0;r<i;r++){const a=r/i*Math.PI*2,o=s.x+Math.sin(a)*n,l=s.z+Math.cos(a)*n;if(e(o,l))return{x:o,z:l}}}return null}const ji={x:128,z:-42,half:3.3},gn=(s,e,t,n,i=3.5,r="lodge-wall")=>({minX:ji.x+s,maxX:ji.x+e,minZ:ji.z+t,maxZ:ji.z+n,height:i,name:r});function Q_(){return[gn(-3.5,-3.1,-3.5,3.5),gn(3.1,3.5,-3.5,3.5),gn(-3.5,3.5,-3.5,-3.1),gn(-3.5,-.61,3.1,3.5),gn(.61,3.5,3.1,3.5)]}function ex(s,e=1){return s?gn(-.72,-.5,e>0?2.02:3.28,e>0?3.32:4.58,2.4,"lodge-door"):gn(-.61,.61,3.18,3.42,2.4,"lodge-door")}class tx{constructor(e,t=!1){this.library=e,this.open=t,this.target=this.angle=t?Math.PI/2:0;const n=this.back,i=this.front,r=new mt,a=new mt,o=(d,u,f,g,_,m=1,p=0)=>{const y=e.create(u,1);return y.position.set(f,g,_),y.rotation.y=p,Array.isArray(m)?y.scale.fromArray(m):y.scale.setScalar(m),d.add(y),y};for(const d of[-2.2,0,2.2]){o(n,"Wall_Plaster_Straight",d,.06,-3.3,1.1,Math.PI),o(i,d===0?"Wall_Plaster_Door_Flat":"Wall_Plaster_Straight",d,.06,3.3,1.1);for(const u of[-2.2,0,2.2])o(r,"Floor_WoodDark",d,.04,u,1.1)}for(const d of[-2.2,0,2.2])o(this.left,"Wall_Plaster_Straight",-3.3,.06,d,1.1,-Math.PI/2),o(this.right,"Wall_Plaster_Straight",3.3,.06,d,1.1,Math.PI/2);const l=new mt,c=new Mi(.3,3.5,.3);this.buffers.push(c);for(const d of[-3.3,3.3])for(const u of[-3.3,3.3]){const f=new tt(c,this.joinMaterial);f.position.set(d,1.8,u),l.add(f)}o(this.roof,"Roof_RoundTiles_4x6",0,3.28,0,[1.38,.5,.99]),o(this.roof,"Roof_Front_Brick4",0,3.37,3.3,[1.5,.69,1],0),o(this.roof,"Roof_Front_Brick4",0,3.37,-3.3,[1.5,.69,1],Math.PI),this.hinge.position.set(-.61,.06,3.3),o(this.hinge,"Door_4_Flat",.61,0,0,1.1),this.hinge.rotation.y=this.angle,this.hinge.traverse(d=>{d.userData.dynamic=!0});const h=(d,u,f,g,_=0,m=.06,p=!0)=>{const y=o(a,d,u,m,f,g,_);if(y.updateMatrixWorld(!0),p){const x=new yt().setFromObject(y);this.furniture.push({minX:x.min.x+128,maxX:x.max.x+128,minZ:x.min.z-42,maxZ:x.max.z-42,height:x.max.y,name:d})}return y};h("furniture-table",1.45,-1.1,2.5),h("furniture-chair",1.45,.2,2.2,Math.PI),h("furniture-chair",1.45,-2.4,2.2),h("furniture-bookcaseopen",-2.6,-1.6,2.2,Math.PI/2),h("furniture-rugrectangle",.1,.3,2,0,.065,!1),h("furniture-books",.6,-1.1,2,0,.06+.326733977*2.5,!1);for(const d of[n,this.left,this.right,l,i,r,a,this.roof]){const u=Ah(d,this.material);if(u){for(d.clear();u.children.length;)d.add(u.children[0]);d.traverse(f=>{f instanceof tt&&(this.buffers.push(f.geometry),f.castShadow=!0,f.receiveShadow=!0)})}this.group.add(d)}this.group.add(this.hinge),this.group.position.set(128,0,-42)}group=new mt;roof=new mt;front=new mt;back=new mt;left=new mt;right=new mt;hinge=new mt;walls=Q_();furniture=[];roofBodies=[{...gn(-3.9,3.9,-4.1,4.1,5.8,"lodge-roof"),base:3.3}];cameraBodies=[{...gn(-.61,.61,3.1,3.5,3.5,"lodge-header"),base:2.35}];exteriorCameraBodies=[...this.cameraBodies,...this.roofBodies];landmarks=[{id:"lodge-door",name:"The Meadow Lodge",x:128,z:-38.7,description:"A shelter beside the meadow road.",action:"door"},{id:"lodge-book",name:"The lodge guestbook",x:126.8,z:-44,description:"You found a real room inside the lodge. A table, shelves and a quiet place to plan the next adventure."}];open;target;angle;direction=1;changing=!1;buffers=[];joinMaterial=new Yt({color:new xe(.28,.12,.055),roughness:1,metalness:0});material=new Yt({vertexColors:!0,roughness:1,metalness:0});inside(e){return Math.abs(e.x-128)<3.35&&Math.abs(e.z+42)<3.35}doorBody(){return ex(this.changing?!1:this.open,this.direction)}isVisibleOccluder(e){const t=this.walls.indexOf(e);return t===0?this.left.visible:t===1?this.right.visible:t===2?this.back.visible:t===3||t===4?this.front.visible:this.roofBodies.includes(e)?this.roof.visible:this.cameraBodies.includes(e)?this.front.visible:!0}toggle(e,t){if(this.changing)return"Give the door a moment";const n=this.open?this.direction:e.z>ji.z+ji.half?1:-1,r=gn(-.95,.8,n>0?1.7:3,n>0?3.42:4.9,2.4);return e.x>r.minX-.3&&e.x<r.maxX+.3&&e.z>r.minZ-.3&&e.z<r.maxZ+.3?"Step away from the doorway to move the door":t.some(a=>a.minX<r.maxX&&a.maxX>r.minX&&a.minZ<r.maxZ&&a.maxZ>r.minZ)?"Move the object beside the door first":(this.open||(this.direction=n),this.open=!this.open,this.target=this.open?this.direction*Math.PI/2:0,this.changing=!0,null)}setCutaway(e,t=0){const n=this.inside(e),i=Math.sin(t),r=Math.cos(t);this.roof.visible=!n,this.front.visible=!n||r<=.15,this.back.visible=!n||r>=-.15,this.left.visible=!n||i>=-.15,this.right.visible=!n||i<=.15}update(e,t){return this.setCutaway(t),this.changing?(this.angle=Pn.damp(this.angle,this.target,14,e),this.hinge.rotation.y=this.angle,Math.abs(this.angle-this.target)<.005?(this.angle=this.target,this.hinge.rotation.y=this.angle,this.changing=!1,!0):!1):!1}dispose(){for(const e of this.buffers)e.dispose();this.material.dispose(),this.joinMaterial.dispose(),this.group.removeFromParent()}}function Nh(s,e,t,n){return-(t[2]*s.x+t[6]*s.y+t[10]*s.z+t[14])-e<=n}class nx{constructor(e){this.mesh=e,this.count=e.count,this.matrices=new Float32Array(e.instanceMatrix.array),this.colors=e.instanceColor?new Float32Array(e.instanceColor.array):null,this.bounds=new Float32Array(this.count*4),e.geometry.computeBoundingSphere();const t=new Ae,n=new Ae;for(let i=0;i<this.count;i++)t.fromArray(this.matrices,i*16),n.multiplyMatrices(e.matrixWorld,t),this.sphere.copy(e.geometry.boundingSphere).applyMatrix4(n),this.bounds.set([this.sphere.center.x,this.sphere.center.y,this.sphere.center.z,this.sphere.radius],i*4),this.kept.push(i)}matrices;colors;bounds;kept=[];next=[];sphere=new un;count;update(e,t,n){this.next.length=0;for(let r=0;r<this.count;r++){const a=r*4;this.sphere.center.fromArray(this.bounds,a),this.sphere.radius=this.bounds[a+3],Nh(this.sphere.center,this.sphere.radius,t.matrixWorldInverse.elements,n)&&e.intersectsSphere(this.sphere)&&this.next.push(r)}if(this.next.length===this.kept.length&&this.next.every((r,a)=>r===this.kept[a]))return;this.write(this.next);const i=this.kept;this.kept=this.next,this.next=i}restore(){if(this.mesh.count===this.count)return;this.next.length=0;for(let t=0;t<this.count;t++)this.next.push(t);this.write(this.next);const e=this.kept;this.kept=this.next,this.next=e}write(e){var i;const t=this.mesh.instanceMatrix.array,n=(i=this.mesh.instanceColor)==null?void 0:i.array;for(let r=0;r<e.length;r++){const a=e[r];for(let o=0;o<16;o++)t[r*16+o]=this.matrices[a*16+o];if(n&&this.colors)for(let o=0;o<3;o++)n[r*3+o]=this.colors[a*3+o]}this.mesh.count=e.length,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}get retainedBytes(){var e;return this.matrices.byteLength+(((e=this.colors)==null?void 0:e.byteLength)||0)+this.bounds.byteLength}}const ix=[{points:[[-66,8],[-58,13],[-51,21],[-38,16],[-23,12],[-9,8]],width:2.8},{points:[[46,8],[62,8],[78,12],[90,19],[105,25]],width:3.2},{points:[[105,25],[95,33],[85,39],[78,44],[78,64]],width:3},{points:[[2,-24],[-10,-30],[-23,-38]],width:2.2}];class si{constructor(e,t=3,n=!1){this.library=e,this.layout=t,this.terrain();for(const r of X_){const a=new Uh(e,r.id,3,{terrain:!1,populate:!1,fullSizeTents:!0,ground:(o,l)=>qi(o+r.x,l+r.z),walk:(o,l)=>ci(o+r.x,l+r.z)});a.group.position.set(r.x,0,r.z),this.group.add(a.group),this.regions.push(a),this.obstacles.push(...a.obstacles.map(o=>({...o,minX:o.minX+r.x,maxX:o.maxX+r.x,minZ:o.minZ+r.z,maxZ:o.maxZ+r.z}))),this.landmarks.push(...a.landmarks.map(o=>({...o,id:r.id+":"+o.id,x:o.x+r.x,z:o.z+r.z}))),this.paths.push(...a.paths.map(o=>({width:o.width,points:o.points.map(([l,c])=>[l+r.x,c+r.z])}))),this.instances+=a.instances}const i=this.regions[0].trailSurface;for(const r of ix){const a=Ka(r.points);this.paths.push({points:a,width:r.width}),this.mesh(Ms(a,r.width,ci),i)}if(this.settlements(),t>=4){this.lodge=new tx(e,n),this.group.add(this.lodge.group);const r=new yt().setFromObject(this.lodge.group);this.mapBuildings.push({minX:r.min.x,maxX:r.max.x,minZ:r.min.z,maxZ:r.max.z,height:r.max.y,name:"building_lodge"}),this.obstacles.push(...this.lodge.walls,...this.lodge.furniture,this.lodge.doorBody()),this.landmarks.push(...this.lodge.landmarks),this.obstacles.push({minX:124.4,maxX:131.6,minZ:-45.6,maxZ:-38.4,height:0,name:"lodge-reserve"});const a={points:Ka([[119,-11],[125,-19],[128,-28],[128,-38.4]]),width:2.2};this.paths.push(a),this.mesh(Ms(a.points,a.width,ci),this.regions[0].trailSurface)}this.populate(),this.obstacles=this.obstacles.filter(r=>r.name!=="lodge-reserve"),this.permanent=this.obstacles.filter(r=>r.name!=="lodge-door"),this.group.updateMatrixWorld(!0),this.group.traverse(r=>{if(!(r instanceof tt)||r.userData.dynamic)return;let a;r instanceof di?(r.computeBoundingSphere(),a=r.boundingSphere.clone()):(r.geometry.computeBoundingSphere(),a=r.geometry.boundingSphere.clone()),a.applyMatrix4(r.matrixWorld),this.visibility.push({mesh:r,sphere:a,culler:r instanceof di?new nx(r):void 0})})}id="vale";lodge;mapBuildings=[];permanent=[];group=new mt;obstacles=[];landmarks=[];paths=[];instances=0;trees=[];regions=[];visibility=[];frustum=new Dr;projection=new Ae;geometry=[];materials=[];mesh(e,t){const n=new tt(e,t);return n.receiveShadow=!0,this.geometry.push(e),this.group.add(n),n}terrain(){const e=new xi(480,300,192,120);e.rotateX(-Math.PI/2);const t=e.getAttribute("position"),n=[];for(let a=0;a<t.count;a++){const o=t.getX(a),l=t.getZ(a);t.setY(a,qi(o,l));const c=Math.exp(-(o*o)/2704),h=new xe(7968598).lerp(new xe(5404740),c);h.offsetHSL(Math.sin(o*.17+l*.23)*.012,0,Math.cos(o*.11-l*.19)*.012);const d=Math.max(...as(l).map(u=>Math.max(0,1-Math.abs(o-u)/5)));h.lerp(new xe(12694930),d*.8),n.push(h.r,h.g,h.b)}e.setAttribute("color",new gt(n,3)),e.computeVertexNormals();const i=new Yt({vertexColors:!0,roughness:1,flatShading:!0});this.materials.push(i),this.mesh(e,i);const r=new Yt({color:6926261,roughness:.4});this.materials.push(r);for(let a=0;a<2;a++){const o=[],l=[];for(let h=0;h<=120;h++){const d=-150+h*2.5,u=as(d)[a];if(o.push(u-2.9,-.58,d,u+2.9,-.58,d),h<120){const f=h*2;l.push(f,f+2,f+1,f+1,f+2,f+3)}}const c=new Pt;c.setAttribute("position",new gt(o,3)),c.setIndex(l),c.computeVertexNormals(),this.mesh(c,r)}}place(e,t,n,i,r=0){const a=this.library.create(e,i);a.position.set(t,ci(t,n),n),a.rotation.y=r,this.group.add(a),a.updateMatrixWorld(!0);const o=new yt().setFromObject(a),l=e.startsWith("building_")?.45:.08;return this.obstacles.push({minX:o.min.x+l,maxX:o.max.x-l,minZ:o.min.z+l,maxZ:o.max.z-l,height:o.max.y,name:e}),a}settlements(){const e=this.regions[0].trailSurface.clone();e.name="Brookside earth driveways",e.polygonOffset=!0,e.polygonOffsetFactor=1,e.polygonOffsetUnits=1,this.materials.push(e);for(const[n,i,r]of[[69,47,Math.PI/2],[87,47,-Math.PI/2],[69,59,Math.PI/2],[87,60,-Math.PI/2],[78,68,Math.PI]]){this.place(n===87?"building_home_B_blue":"building_home_A_green",n,i,6.8,r);const a=[n+Math.sin(r)*4,i+Math.cos(r)*4],o={points:[[78,a[1]],a],width:1.8};this.paths.push(o),this.mesh(Ms(o.points,o.width,ci),e)}const t={points:[[78,56],[92,56]],width:2.2};this.paths.push(t),this.mesh(Ms(t.points,t.width,ci),e),this.place("building_market_blue",96,56,6.8,-Math.PI/2),this.place("building_well_blue",78,39,5),this.place("building_home_A_blue",-29,-44,6.5,.5),this.place("building_home_A_green",-17,-46,6.5,-.5),this.place("sign",-20,-33,3,0),this.landmarks.push({id:"brookside",name:"Brookside hamlet",x:78,z:52,description:"A little market, cottage gardens and the road back to Maker’s Meadow."},{id:"foresters",name:"Foresters’ rest",x:-23,z:-38,description:"The foresters keep two cottages beside the old woodland trail."})}nearPath(e,t,n=0){return this.paths.some(i=>i.points.slice(1).some((r,a)=>Dh(e,t,i.points[a],r)<i.width/2+n))}populate(){let e=31825;const t=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),n=new Map,i=(r,a,o,l)=>{const c=r+":"+Math.floor(a/32)+":"+Math.floor(o/32);let h=n.get(c);h||n.set(c,h={id:r,matrices:[]}),h.matrices.push(new Ae().compose(new R(a,qi(a,o),o),new Kt().setFromAxisAngle(new R(0,1,0),t()*6.28),new R(l,l,l))),this.instances++};for(let r=0;r<2300;r++){const a=(t()-.5)*358,o=(t()-.5)*180,l=a>-143&&a<-81&&o>-41&&o<43,c=a>75&&a<136&&o>-30&&o<31,h=Math.hypot(a,o+14)<11;if(l||c||h||this.nearPath(a,o,3.4)||ln(a,o,this.obstacles,2.6)||Ya(a,o))continue;const d=a>-43&&a<47?t()>.22?"tree-pinedefaulta":"tree-pinedefaultb":t()>.4?"tree-oak":"tree-detailed",u=4.1+t()*2.5;i(d,a,o,u),this.trees.push({x:a,z:o,radius:u*.3}),this.obstacles.push({minX:a-.22,maxX:a+.22,minZ:o-.22,maxZ:o+.22,height:qi(a,o)+u*1.55,name:"tree"}),r%3===0&&i("plant-bush",a+1.5,o+.6,1+t())}for(let r=0;r<2400;r++){const a=(t()-.5)*352,o=(t()-.5)*174;!zn(a,o,"vale",2)||this.nearPath(a,o,.8)||ln(a,o,this.obstacles,.8)||Ya(a,o)||a>82&&a<130&&o>-24&&o<24||i(r%11===0?"rock-smalla":r%4===0?"flower-yellowa":r%3===0?"flower-purplea":"grass-large",a,o,.7+t())}for(const{id:r,matrices:a}of n.values()){const o=this.library.instancingSource(r);o.updateMatrixWorld(!0),o.traverse(l=>{if(!(l instanceof tt))return;const c=new di(l.geometry,l.material,a.length);c.castShadow=r.startsWith("tree"),c.receiveShadow=!0;for(let h=0;h<a.length;h++)c.setMatrixAt(h,new Ae().multiplyMatrices(a[h],l.matrixWorld));c.computeBoundingSphere(),this.group.add(c)})}}updateLodge(e,t){if(!this.lodge)return!1;const n=this.lodge.update(e,t);return n&&(this.obstacles=[...this.permanent,this.lodge.doorBody()]),n}updateVisibility(e,t,n=!0){e.updateMatrixWorld(),n&&(this.projection.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.projection));for(const{mesh:i,sphere:r,culler:a}of this.visibility)i.visible=Nh(r.center,r.radius,e.matrixWorldInverse.elements,t),n?i.visible&&(a==null||a.update(this.frustum,e,t)):a==null||a.restore(),a&&a.mesh.count===0&&(i.visible=!1)}dispose(){var e;this.group.removeFromParent(),(e=this.lodge)==null||e.dispose();for(const t of this.regions)t.dispose();this.group.traverse(t=>{t instanceof di&&t.dispose()});for(const t of this.geometry)t.dispose();for(const t of this.materials)t.dispose();this.group.clear(),this.visibility.length=0}}const sx=[[1,"Escape"],[9,"PadMenu"],[8,"PadMap"],[0,"Enter"],[3,"KeyE"],[2,"KeyB"],[5,"KeyR"],[10,"PadRun"],[12,"PadUp"],[13,"PadDown"],[14,"PadLeft"],[15,"PadRight"]],Pa=()=>({x:0,z:0,lookX:0,lookY:0,command:null});function Cc(s,e,t=.18){s=Number.isFinite(s)?s:0,e=Number.isFinite(e)?e:0;const n=Math.hypot(s,e);if(n<=t)return{x:0,y:0};const i=Math.min(1,(n-t)/(1-t));return{x:s/n*i,y:e/n*i}}class rx{connected=!1;index=null;state=Pa();armed=!1;previous=[];reset(){this.state=Pa(),this.armed=!1}sample(e,t=!0){var c;const n=e.filter(h=>!!h&&h.connected!==!1&&h.mapping==="standard"),i=n.find(h=>h.index===this.index)||n[0];if(!i)return this.connected=!1,this.index=null,this.previous=[],this.reset(),this.state;this.index!==i.index&&(this.index=i.index,this.reset(),this.previous=[]),this.connected=!0;const r=Cc(i.axes[0],i.axes[1]),a=Cc(i.axes[2],i.axes[3]),o=i.buttons.map(h=>!!h.pressed||(h.value??0)>.55);if(!t)return this.reset(),this.previous=o,this.state;if(!this.armed)return this.previous=o,!o.some(Boolean)&&!r.x&&!r.y&&!a.x&&!a.y&&(this.armed=!0),this.state=Pa(),this.state;const l=((c=sx.find(([h])=>o[h]&&!this.previous[h]))==null?void 0:c[1])||null;return this.previous=o,this.state={x:r.x,z:r.y,lookX:a.x,lookY:a.y,command:l},this.state}}class ax{constructor(e,t,n,i,r,a,o=()=>!1,l=()=>{}){this.canvas=e,this.enabled=t,this.look=n,this.zoom=i,this.tap=r,this.action=a,this.padOverlay=o,this.padStatus=l;const c=document.querySelector("#joystick"),h=document.querySelector("#knob"),d=()=>{const _=this.stickPointer;this.stickPointer=null,_!==null&&c.hasPointerCapture(_)&&c.releasePointerCapture(_),this.stick.x=this.stick.y=0,h.style.transform="translate(-50%,-50%)"};this.releaseStick=d;const u=_=>{const m=(_.clientX-this.stickOrigin.x)/42,p=(_.clientY-this.stickOrigin.y)/42,y=Math.max(1,Math.hypot(m,p));this.stick={x:m/y,y:p/y},h.style.transform=`translate(calc(-50% + ${this.stick.x*35}px),calc(-50% + ${this.stick.y*35}px))`};c.addEventListener("pointerdown",_=>{if(!this.enabled()||this.stickPointer!==null)return;_.preventDefault(),this.stickPointer=_.pointerId,c.setPointerCapture(_.pointerId);const m=c.getBoundingClientRect();this.stickOrigin={x:m.left+m.width/2,y:m.top+m.height/2},u(_)}),c.addEventListener("pointermove",_=>{_.pointerId===this.stickPointer&&u(_)});for(const _ of["pointerup","pointercancel","lostpointercapture"])c.addEventListener(_,m=>{m.pointerId===this.stickPointer&&d()});let f=null;this.releaseWorld=()=>{f=null},e.addEventListener("pointerdown",_=>{if(this.enabled())if(e.setPointerCapture(_.pointerId),this.pointers.set(_.pointerId,{x:_.clientX,y:_.clientY}),this.pointers.size===1)f={id:_.pointerId,x:_.clientX,y:_.clientY,startX:_.clientX,startY:_.clientY,distance:0};else{f=null;const[m,p]=[...this.pointers.values()];this.previousPinch=Math.hypot(m.x-p.x,m.y-p.y)}}),e.addEventListener("pointermove",_=>{if(!(!this.pointers.has(_.pointerId)||!this.enabled())){if(this.pointers.set(_.pointerId,{x:_.clientX,y:_.clientY}),this.pointers.size===2){const[m,p]=[...this.pointers.values()],y=Math.hypot(m.x-p.x,m.y-p.y);this.zoom((this.previousPinch-y)*.045),this.previousPinch=y}else if((f==null?void 0:f.id)===_.pointerId){const m=_.clientX-f.x,p=_.clientY-f.y;f.distance+=Math.hypot(m,p),f.x=_.clientX,f.y=_.clientY,this.look(m,p)}}});const g=(_,m=!1)=>{if(!this.pointers.has(_.pointerId))return;const p=this.pointers.size>1;if(this.pointers.delete(_.pointerId),(f==null?void 0:f.id)===_.pointerId&&(!m&&f.distance<8&&Math.hypot(_.clientX-f.startX,_.clientY-f.startY)<8&&this.enabled()&&this.tap(_.clientX,_.clientY),f=null),p&&this.pointers.size===1){const[y,x]=[...this.pointers.entries()][0];f={id:y,x:x.x,y:x.y,startX:x.x,startY:x.y,distance:8},this.previousPinch=0}this.pointers.size===0&&(this.previousPinch=0)};e.addEventListener("pointerup",_=>g(_));for(const _ of["pointercancel","lostpointercapture"])e.addEventListener(_,m=>g(m,!0));e.addEventListener("wheel",_=>{_.preventDefault(),this.zoom(_.deltaY*.012)},{passive:!1}),e.addEventListener("contextmenu",_=>_.preventDefault()),addEventListener("gamepadconnected",()=>this.gamepad.reset()),addEventListener("gamepaddisconnected",_=>{this.gamepad.index===_.gamepad.index&&(this.gamepad.sample([]),this.padStatus(!1))}),addEventListener("keydown",_=>{var m,p;if(!((_.code==="Enter"||_.code==="Space")&&((m=_.target)!=null&&m.closest("button,summary")))&&!((p=_.target)!=null&&p.matches("input,textarea,select"))){if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(_.code)&&_.preventDefault(),!this.enabled()){_.code==="Escape"&&this.action(_.code);return}this.keys.add(_.code),_.repeat||this.action(_.code)}}),addEventListener("keyup",_=>this.keys.delete(_.code)),addEventListener("blur",()=>{this.clear(),d(),f=null}),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.clear(),d(),f=null)})}gamepad=new rx;keys=new Set;stick={x:0,y:0};running=!1;pointers=new Map;stickPointer=null;stickOrigin={x:0,y:0};previousPinch=0;releaseStick=()=>{};releaseWorld=()=>{};pollGamepad(e){var r;let t=[];try{t=((r=navigator.getGamepads)==null?void 0:r.call(navigator))||[]}catch{}const n=this.gamepad.connected,i=this.gamepad.sample(t,!document.hidden&&document.hasFocus());n!==this.gamepad.connected&&this.padStatus(this.gamepad.connected),i.command&&this.action(i.command),!this.padOverlay(i.x,i.z,i.lookX,i.lookY,e)&&this.enabled()&&(i.lookX||i.lookY)&&this.look(i.lookX*e*420,i.lookY*e*320)}clear(){this.gamepad.reset(),this.releaseStick(),this.releaseWorld();for(const t of this.pointers.keys())this.canvas.hasPointerCapture(t)&&this.canvas.releasePointerCapture(t);this.previousPinch=0,this.keys.clear(),this.stick.x=this.stick.y=0,this.pointers.clear();const e=document.querySelector("#knob");e&&(e.style.transform="translate(-50%,-50%)")}movement(){return{x:(this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0)-(this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0)+this.stick.x+this.gamepad.state.x,z:(this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0)-(this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0)+this.stick.y+this.gamepad.state.z,run:this.running||this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")}}}const ox={flowers:[[.5,.16,.5,.6,.32,.6,11827792],[.5,.48,.5,.06,.64,.06,5671001],[.5,.78,.5,.46,.18,.46,14523267],[.5,.89,.5,.18,.06,.18,16110715]],lantern:[[.5,.06,.5,.55,.12,.55,6255726],[.5,.46,.5,.4,.7,.4,16174707],[.5,.87,.5,.6,.12,.6,6255726],...[.27,.73].flatMap(s=>[.27,.73].map(e=>[s,.46,e,.06,.75,.06,6255726]))],bench:[[.5,.47,.5,.94,.12,.64,11369552],[.5,.77,.77,.94,.4,.1,11369552],...[.12,.88].flatMap(s=>[.25,.72].map(e=>[s,.22,e,.1,.44,.1,6714986]))]},bi=[],Za=[15851437,15185051,12177332,14728124,14268559,11914194],Fh=[4488320,11365457,7042704,7108992];function Fr(s,e,t,n,i){e.forEach((r,a)=>{const o=t+n*16,l=n<0?0:Math.PI;if(!i.includes(a)){const c=s==="north"?[1,5].includes(a)&&n<0:[2,5].includes(a)&&n>0;bi.push({id:`${s}-${n<0?"n":"s"}-${a}`,name:`${s==="north"?"Linden":"Willow"} ${c?"family home":"cottage"} ${a+1}`,x:r,z:o,w:c?12:8+a%3,d:c?12:8+a%2*2,angle:l,wall:Za[(a+(n+1)*2)%Za.length],roof:Fh[(a+(n+1))%4],style:c?"gable":["hip","gable","shed"][a%3],storeys:c?2:1,rooms:c||a%3===0,designed:!0,garden:0,garage:a%4===0,street:s})}})}Fr("north",[-96,-74,-52,-30,-8,14,36,58,80],-143,-1,[2,6]);Fr("north",[-96,-74,-52,-30,-8,14,36,58,80],-143,1,[1,5,8]);Fr("south",[-90,-66,-42,-18,6,30,54,78],128,-1,[0,3,6]);Fr("south",[-90,-66,-42,-18,6,30,54,78],128,1,[1,4]);bi.push({id:"linden-library",name:"Linden library",x:60,z:-195,w:12,d:12,angle:Math.PI,route:"trail",wall:15851437,roof:4488320,style:"hip",shop:!0,sign:"LIBRARY",rooms:!0,designed:!0},{id:"willow-workshop",name:"Willow motor workshop",x:-109,z:110,w:12,d:12,angle:0,street:"south",wall:14268559,roof:7108992,style:"gable",shop:!0,sign:"WORKSHOP",garage:!0,designed:!0},{id:"manor",name:"Magnolia manor",x:103,z:16,w:22,d:18,angle:-Math.PI/2,route:"trail",wall:15851437,roof:7042704,style:"hip",storeys:2,rooms:!0,designed:!0,porch:5},{id:"garden-cafe",name:"Garden cafe",x:112,z:-26,w:10,d:9,angle:Math.PI,wall:14728124,roof:11365457,style:"gable",shop:!0,sign:"GARDEN CAFE",designed:!0});for(const[s,e]of[-28,-52,-76,-100,-122].entries())bi.push({id:`elm-${s}`,name:`Elm lane ${s===2?"family house":"cottage"}`,x:-121,z:e,w:s===2?12:9,d:s===2?12:9,angle:-Math.PI/2,wall:Za[s%6],roof:Fh[s%4],style:s%2?"hip":"gable",storeys:s===2?2:1,rooms:!0,designed:!0,street:"elm"});const lx=bi.findIndex(s=>s.id==="north-n-0");bi.splice(lx,1);for(const s of["north-n-1","north-n-8"])bi.find(e=>e.id===s).z=-154;bi.find(s=>s.id==="south-s-0").x=-86;const ct=(s,e,t,n,i,r,a,o,l,c,h={})=>({id:s,name:e,x:t,z:n,w:i,d:r,angle:a,style:o,wall:l,roof:c,...h}),zi=0,ri=Math.PI,fr=Math.PI/2,ai=-Math.PI/2;ct("juniper","Juniper veranda",-160,-45,12,10,ai,"hip",12177332,11365457,{porch:4.4,carport:!0,garden:2,bay:!0}),ct("birch","Birch twin cottage",-212,-40,8,11,fr,"gable",15851437,7042704,{wing:!0,garden:3,chimney:!0}),ct("copper","Copper longhouse",-161,-80,7,12,ai,"shed",14268559,4488320,{porch:4,garden:1,bay:!0}),ct("lavender","Lavender bungalow",-215,5,10,8,fr,"hip",14728124,7108992,{garage:!0,garden:2}),ct("acacia","Acacia courtyard",-213,47,14,9,fr,"gable",15185051,4488320,{wing:!0,porch:4.6,garden:3}),ct("riverside","Riverside home",-151,45,9,9,ai,"hip",11914194,11365457,{carport:!0,garden:1,bay:!0}),ct("north-house","North garden house",-42,-214,12,10,zi,"hip",14728124,7042704,{wing:!0,garden:3}),ct("north-bakery","Sunbeam bakery",-18,-214,9,8,zi,"gable",15851437,11365457,{shop:!0,sign:"SUNBEAM",approach:{x:-18,z:-202},chimney:!0}),ct("north-hall","North village hall",7,-214,14,10,zi,"gable",12177332,4488320,{shop:!0,sign:"VILLAGE HALL",approach:{x:7,z:-202},porch:4.2}),ct("north-clock","Clockmaker house",35,-214,8,8,zi,"hip",14268559,7108992,{tower:!0,porch:3.2,garden:2}),ct("weavers","Weavers studio",202,-132,9,10,ai,"shed",14728124,7042704,{shop:!0,sign:"WEAVERS",bay:!0}),ct("clay-yard","Clay courtyard",206,-103,12,8,ai,"hip",15185051,4488320,{shop:!0,sign:"CLAY YARD",wing:!0}),ct("makers","Makers long workshop",205,-75,8,14,ai,"gable",14268559,11365457,{shop:!0,sign:"MAKERS",carport:!0,chimney:!0}),ct("greenhouse","Garden potting house",207,-45,7,7,ai,"gable",12177332,4488320,{porch:3.4,garden:3,bay:!0}),ct("lake-house","Lakeview veranda",213,4,10,9,zi,"shed",11914194,7108992,{route:"trail",porch:4.6,garden:2,bay:!0}),ct("east-house","Eastern carport house",212,109,14,8,ri,"hip",15851437,11365457,{route:"trail",carport:!0,garden:1}),ct("beacon-house","Beacon lodge",214,145,8,9,ri,"gable",14728124,4488320,{route:"trail",tower:!0,garden:2}),ct("farm-home","Farmhouse porch",43,215,12,10,ri,"gable",15851437,7042704,{route:"trail",porch:5,chimney:!0,garden:1}),ct("farm-shop","Farmyard store",12,216,10,8,ri,"hip",12177332,11365457,{route:"trail",shop:!0,sign:"FARM STORE",approach:{x:12,z:204},carport:!0}),ct("red-barn","Red barn workshop",-18,214,14,12,ri,"gambrel",13075044,7108992,{route:"trail",shop:!0,sign:"RED BARN",approach:{x:-18,z:202},chimney:!0}),ct("farm-cottage","Farm garden cottage",-47,213,8,9,ri,"hip",15185051,4488320,{route:"trail",wing:!0,garden:3}),ct("orchard-barn","Orchard long barn",-96,211,14,12,ri,"gambrel",14268559,11365457,{route:"trail",carport:!0,garden:1}),ct("pond-cabin","Reed pond cabin",-201,192,7,8,fr,"gable",12177332,7042704,{route:"trail",porch:3.5,garden:2}),ct("trail-hut","North trail cabin",152,-218,6,7,zi,"shed",14728124,4488320,{route:"trail",porch:3,garden:2});const cn=Object.freeze({id:"little-block-world-06",saveVersion:4,halfSize:250,buildHeight:24,maxBlocks:12e3,maxSaveBytes:4e6,chunkSize:24,fogNear:75,fogFar:155,cameraFar:190,saveKey:"blockworld.neighborhood.06",preferencesKey:"blockworld.neighborhood.controls.v6"});class $a{constructor(e=12){this.size=e,this.cells=new Map,this.global=new Set,this.entries=new Map}keys(e){const t=[];for(let n=Math.floor(e.minX/this.size);n<=Math.floor(e.maxX/this.size);n++)for(let i=Math.floor(e.minZ/this.size);i<=Math.floor(e.maxZ/this.size);i++)t.push(`${n},${i}`);return t}add(e){const t=this.keys(e);if(this.entries.set(e,t),t.length>64){this.global.add(e);return}for(const n of t)this.cells.has(n)||this.cells.set(n,new Set),this.cells.get(n).add(e)}remove(e){for(const t of this.entries.get(e)||[]){const n=this.cells.get(t);n==null||n.delete(e),n!=null&&n.size||this.cells.delete(t)}this.global.delete(e),this.entries.delete(e)}query(e){const t=new Set(this.global);for(const n of this.keys(e))for(const i of this.cells.get(n)||[])t.add(i);return[...t].filter(n=>n.minX<=e.maxX&&n.maxX>=e.minX&&n.minZ<=e.maxZ&&n.maxZ>=e.minZ&&n.minY<=e.maxY&&n.maxY>=e.minY)}}const Hi=cn.halfSize,cx=cn.maxBlocks,pr=.28,hx=1.65,ux=["wood","brick","stone","glass"],Ja=["flowers","lantern","bench"],Lc=[...ux,...Ja],Oh=(s,e,t)=>Math.max(e,Math.min(t,s)),Pc=s=>`${s.x},${s.y},${s.z}`,bs=s=>{const e=(s.rotation||0)*Math.PI/180,t=Math.abs(Math.cos(e)),n=Math.abs(Math.sin(e)),i=s.type==="bench"?Math.max(0,(.94*t+.64*n-1)/2):0,r=s.type==="bench"?Math.max(0,(.94*n+.64*t-1)/2):0;return{minX:s.x-i,minY:s.y,minZ:s.z-r,maxX:s.x+1+i,maxY:s.y+1,maxZ:s.z+1+r}},dx=s=>({minX:s.x-pr,minY:s.y+.001,minZ:s.z-pr,maxX:s.x+pr,maxY:s.y+hx,maxZ:s.z+pr});function Ic(s){return s.obb??{cx:(s.minX+s.maxX)/2,cz:(s.minZ+s.maxZ)/2,c:1,s:0,halfW:(s.maxX-s.minX)/2,halfD:(s.maxZ-s.minZ)/2}}function fx(s,e,t){if(!s.ramp)return null;const n=s.ramp,i=e-n.cx,r=t-n.cz,a=i*n.c-r*n.s,o=i*n.s+r*n.c;return Math.abs(a)>n.width/2+.001||Math.abs(o)>n.length/2+.001?null:Oh((n.length/2-o)/n.length,0,1)*n.rise}function Cr(s,e){if(e.ramp){const a=fx(e,(s.minX+s.maxX)/2,(s.minZ+s.maxZ)/2);return a!==null&&s.minY<a-1e-5&&s.maxY>e.minY}if(s.ramp)return Cr(e,s);if(!(s.minX<e.maxX-1e-5&&s.maxX>e.minX+1e-5&&s.minY<e.maxY-1e-5&&s.maxY>e.minY+1e-5&&s.minZ<e.maxZ-1e-5&&s.maxZ>e.minZ+1e-5))return!1;if(!s.obb&&!e.obb)return!0;const t=Ic(s),n=Ic(e),i=n.cx-t.cx,r=n.cz-t.cz;for(const[a,o]of[[t.c,-t.s],[t.s,t.c],[n.c,-n.s],[n.s,n.c]]){const l=t.halfW*Math.abs(a*t.c-o*t.s)+t.halfD*Math.abs(a*t.s+o*t.c),c=n.halfW*Math.abs(a*n.c-o*n.s)+n.halfD*Math.abs(a*n.s+o*n.c);if(Math.abs(i*a+r*o)>=l+c-1e-5)return!1}return!0}const px=(s,e)=>e.some(t=>Cr(dx(s),t)),kh={x:-14.4,y:0,z:-1.2,yaw:0,pitch:0};function mx(){return{version:cn.saveVersion,world:cn.id,blocks:[],inventory:{flowers:0,lantern:0,bench:0},selected:"hand",player:{...kh},doors:{},doorSwings:{}}}function gx(s,e=[]){var c,h,d;if(!s||![1,2,3,cn.saveVersion].includes(s.version)||s.version===cn.saveVersion&&s.world!==cn.id||s.version===2&&s.world!=="little-block-world-04"||s.version===3&&s.world!=="little-block-world-05"||!Array.isArray(s.blocks)||s.blocks.length>cx)throw Error("This is not a supported BlockWorld save");const t=s.version===1,n=s.version===2;if(t&&s.blocks.length>800)throw Error("Older saves support up to 800 pieces");const i=mx(),r=new Set,a=new $a(4),o=new $a;for(const u of e)o.add(u);for(const u of s.blocks){if(!u||!Lc.includes(u.type)||![u.x,u.y,u.z].every(Number.isInteger)||u.y<0||u.y>=cn.buildHeight||u.x<-Hi||u.x>=Hi||u.z<-Hi||u.z>=Hi||t&&(Math.abs(u.x)>31||u.x===31||Math.abs(u.z)>31||u.z===31||u.y>9)||n&&(u.x<-125||u.x>=125||u.z<-125||u.z>=125)||r.has(Pc(u)))throw Error("The save contains an invalid piece");if(o.query(bs(u)).some(_=>Cr(bs(u),_.ramp?{..._,ramp:null}:_)))throw Error("A saved piece overlaps the neighborhood");const f=bs(u);if(a.query(f).some(_=>Cr(f,_)))throw Error("Saved pieces overlap");a.add(f),r.add(Pc(u));const g=u.rotation??0;if(!Number.isFinite(g)||Math.abs(g)>36e3)throw Error("The piece rotation is invalid");i.blocks.push({x:u.x,y:u.y,z:u.z,type:u.type,...Ja.includes(u.type)?{rotation:(g%360+360)%360}:{}})}for(const u of Ja){const f=((c=s.inventory)==null?void 0:c[u])??0;if(!Number.isInteger(f)||f<0||f>999)throw Error("The inventory is invalid");i.inventory[u]=f}const l=s.player;l&&["x","y","z","yaw","pitch"].every(u=>Number.isFinite(l[u]))&&Math.abs(l.x)<Hi&&Math.abs(l.z)<Hi&&l.y>=0&&l.y<=cn.buildHeight+2&&(i.player={x:l.x,y:l.y,z:l.z,yaw:l.yaw%(Math.PI*2),pitch:Oh(l.pitch,-1.3,1.3)}),(s.selected==="hand"||Lc.includes(s.selected))&&(i.selected=s.selected);for(const u of Object.keys(s.doors||{}).filter(f=>/^[a-z][a-z0-9-]{0,39}$/.test(f)&&!["constructor","prototype"].includes(f)))i.doors[u]=((h=s.doors)==null?void 0:h[u])===!0,i.doorSwings[u]=((d=s.doorSwings)==null?void 0:d[u])===1?1:-1;return px(i.player,[...e,...i.blocks.map(bs)])&&(i.player={...kh}),i}function _x(s,e){const l=(u,f,g=.7)=>[-u/2+.1,u/2-.1].flatMap(_=>[-f/2+.1,f/2-.1].map(m=>e(_,g/2,m,.1,g,.1,11963744))),c=(u,f,g=.2)=>[e(-u/2,f/2,0,.2,f,g,15655365),e(u/2,f/2,0,.2,f,g,15655365),e(0,f,0,u+.2,.2,g,15655365)],h=(u,f,g,_)=>[e(-u/2,f/2,0,.12,f,g,11963744),e(u/2,f/2,0,.12,f,g,11963744),...Array.from({length:_},(m,p)=>e(0,.08+p*(f-.16)/(_-1),0,u,.12,g,11963744))],d=[e(0,.45,0,.8,.15,.8,7838867),e(0,.85,.35,.8,.7,.12,7838867),...l(.7,.7,.4)];for(const[u,f,g,_]of[["parquet","Parquet flooring",12622701,"parquet"],["herringbone-brick","Herringbone paving",12748393,"herringbone"],["river-stone","River stone",9873565,"river"],["corrugated-metal","Corrugated sheet",10663094,"corrugated"],["woven-bamboo","Woven bamboo",13022593,"woven"],["shingles","Roof shingles",9143927,"shingles"]])s(u,f,"Materials",[e(0,.5,0,1,1,1,g)],{cube:!0,surface:_});s("window-wall","Wall with window opening","Shapes",[e(-.8,1.25,0,.4,2.5,.2,15655365),e(.8,1.25,0,.4,2.5,.2,15655365),e(0,.4,0,1.2,.8,.2,15655365),e(0,2.25,0,1.2,.5,.2,15655365)]),s("doorway-wall","Wall with clear doorway","Shapes",c(1.5,2.5)),s("wide-floor","Four-metre floor","Shapes",[e(0,.075,0,4,.15,4,11963744)]),s("long-slab","Long half slab","Shapes",[e(0,.25,0,3,.5,1,13143410)]),s("half-block","Half-width block","Shapes",[e(0,.5,0,.5,1,1,15655365)]),s("corner-pillar","L-shaped pillar","Shapes",[e(-.25,1.25,0,.25,2.5,.8,13143410),e(0,1.25,-.25,.8,2.5,.25,13143410)]),s("fluted-column","Fluted column","Shapes",[e(0,.12,0,.9,.24,.9,15655365),e(0,1.4,0,.4,2.6,.7,15655365),e(0,1.4,0,.7,2.6,.4,15655365),e(0,2.8,0,.9,.2,.9,15655365)]),s("roof-ridge","Roof ridge cap","Shapes",[e(0,.15,0,1,.3,2,13143410),e(0,.36,0,.45,.18,2,13143410)]),s("roof-corner","Roof corner","Shapes",[e(0,.5,0,1,1,1,13143410,"wedge"),{...e(.5,.5,.5,1,1,1,13143410,"wedge"),yaw:Math.PI/2}]),s("brick-stairs","Wide masonry stairs","Shapes",Array.from({length:6},(u,f)=>e(0,(f+1)/6,1.25-f*.5,2,(f+1)/3,.5,13143410)),{ramp:!0,rampLength:3}),s("long-ramp","Long accessible ramp","Shapes",[e(0,1,0,2,2,4,11963744,"wedge")],{ramp:!0,rampLength:4}),s("balcony","Balcony platform","Shapes",[e(0,.1,0,2,.2,2,11963744),...[-.95,.95].map(u=>e(u,.7,0,.1,1.2,2,6782077)),e(0,.7,-.95,2,1.2,.1,6782077)]),s("casement-window","Opening casement window","Openings",[...c(1.2,1.2,.12),e(0,.05,0,1.2,.1,.12,15655365),e(0,.6,0,1.04,1.05,.08,10536654)],{interaction:"door"}),s("stable-door","Stable half door","Openings",[...c(1.4,1.2),e(0,.6,0,1.2,1.05,.12,11963744)],{interaction:"door"}),s("field-gate","Wide field gate","Openings",[...c(2.5,1.25),e(0,.65,0,2.3,1,.1,7838867)],{interaction:"door"}),s("lattice-fence","Lattice fence","Openings",[e(-.65,.65,0,.1,1.3,.12,11963744),e(.65,.65,0,.1,1.3,.12,11963744),...[-.4,0,.4].flatMap(u=>[e(u,.45,0,.1,.8,.12,11963744),e(0,.3+u,0,1.3,.08,.12,11963744)])]),s("garage-frame","Wide garage opening frame","Openings",c(4.5,3,.35)),s("round-table","Octagonal dining table","Furniture",[e(0,.76,0,1.4,.14,1,11963744),e(0,.76,0,1,.14,1.4,11963744),e(0,.38,0,.25,.76,.25,6782077),e(0,.08,0,.9,.16,.9,6782077)]),s("rocking-chair","Rocking chair","Furniture",[...d,e(-.3,.08,0,.12,.16,1.1,11963744),e(.3,.08,0,.12,.16,1.1,11963744)]),s("beanbag","Beanbag seat","Furniture",[e(0,.25,0,.9,.5,.9,13143410),e(0,.5,.2,.8,.35,.55,13143410),e(0,.18,-.25,1,.25,.7,13143410)],{interaction:"seat"}),s("loft-bed","Loft bed with desk","Furniture",[e(0,1.6,0,1.2,.25,2,7838867),...l(1.2,2,1.6),e(0,.75,-.5,1,.12,.7,11963744),e(0,1.85,-.95,1.2,.4,.1,11963744)]),s("chaise","Chaise lounge","Furniture",[e(0,.4,0,.85,.35,1.8,7838867),e(0,.75,.7,.85,.7,.25,7838867),...l(.8,1.7,.25)],{interaction:"seat"}),s("wall-clock","Wall clock","Furniture",[e(0,.45,0,.8,.9,.1,11963744),e(0,.45,.07,.64,.72,.04,15655365),e(0,.58,.1,.04,.27,.03,6782077),e(.15,.45,.1,.3,.04,.03,6782077)]),s("picture-frame","Landscape picture","Furniture",[e(0,.45,0,1.1,.9,.1,11963744),e(0,.46,.07,.95,.7,.04,10536654),e(0,.23,.1,.95,.25,.02,7838867),e(.25,.65,.1,.15,.15,.02,15980422)]),s("coat-rack","Coat stand","Furniture",[e(0,.9,0,.12,1.8,.12,11963744),e(0,1.5,0,.8,.1,.15,11963744),e(0,1.25,0,.15,.1,.7,11963744),e(0,.06,0,.7,.12,.7,6782077)]),s("shoe-rack","Open shoe rack","Furniture",h(1,.65,.4,3)),s("folding-screen","Folding room screen","Furniture",[-1,0,1].map(u=>({...e(u*.6,1,Math.abs(u)*.18,.6,2,.08,7838867),yaw:u*.35}))),s("corner-counter","Corner kitchen counter","Kitchen",[e(-.35,.5,0,.6,1,1.3,7838867),e(.3,.5,-.35,.7,1,.6,7838867),e(-.35,1.05,0,.68,.1,1.4,15655365),e(.3,1.05,-.35,.7,.1,.68,15655365)]),s("dishwasher","Dishwasher","Kitchen",[e(0,.5,0,.8,1,.7,15655365),e(0,.5,.37,.65,.65,.04,6782077),e(0,.9,.38,.5,.06,.04,7838867)]),s("washing-machine","Washing machine","Kitchen",[e(0,.5,0,.85,1,.75,15655365),e(0,.45,.39,.55,.55,.06,6782077),e(0,.45,.43,.35,.35,.02,10536654),e(.25,.9,.4,.1,.1,.04,7838867)]),s("microwave","Microwave","Kitchen",[e(0,.22,0,.65,.44,.45,15655365),e(-.08,.22,.24,.4,.3,.03,6782077),e(.23,.3,.25,.07,.08,.03,7838867)]),s("kettle","Electric kettle","Kitchen",[e(0,.18,0,.28,.36,.28,7838867),e(.18,.2,0,.12,.08,.12,7838867),e(-.18,.22,0,.1,.22,.12,6782077),e(0,.03,0,.35,.06,.35,6782077)]),s("toaster","Toaster","Kitchen",[e(0,.15,0,.42,.3,.28,13143410),e(-.1,.31,0,.06,.02,.2,6782077),e(.1,.31,0,.06,.02,.2,6782077),e(.23,.2,0,.04,.06,.08,6782077)]),s("cup-rack","Cup rack","Kitchen",[e(0,.06,0,.5,.12,.4,11963744),e(0,.4,0,.08,.7,.08,11963744),e(0,.55,0,.55,.06,.08,11963744),...[-.2,.2].map(u=>e(u,.42,0,.15,.2,.16,15655365))]),s("dining-hutch","Dining hutch","Kitchen",[e(0,.45,0,1.5,.9,.6,11963744),...h(1.4,1,.35,3).map(u=>({...u,y:u.y+.9,z:u.z-.1})),e(0,1.4,-.3,1.5,1,.08,11963744)]),s("corner-bath","Corner bath","Bathroom",[e(-.2,.3,0,.9,.6,1.4,15655365),e(.35,.3,-.3,.8,.6,.8,15655365),e(-.2,.62,0,.65,.03,1.1,10536654)]),s("laundry-basket","Laundry basket","Bathroom",[e(0,.05,0,.65,.1,.55,11963744),...[-.3,.3].map(u=>e(u,.35,0,.07,.7,.55,11963744)),...[-.25,.25].map(u=>e(0,.35,u,.6,.7,.06,11963744)),e(0,.67,0,.5,.08,.4,15655365)]),s("bath-mat","Bath mat","Bathroom",[e(0,.02,0,1.1,.04,.65,7838867),...[-.4,-.2,0,.2,.4].map(u=>e(u,.045,0,.06,.01,.6,15655365))]),s("soap-dispenser","Soap dispenser","Bathroom",[e(0,.15,0,.18,.3,.18,13143410),e(0,.34,0,.06,.08,.06,6782077),e(.06,.39,0,.18,.03,.05,6782077)]),s("shower-stool","Shower stool","Bathroom",[e(0,.45,0,.6,.1,.5,15655365),...l(.5,.4,.4)],{interaction:"seat"}),s("car-lift","Garage service lift","Workshop",[e(-1.4,1.4,0,.3,2.8,.5,7838867),e(1.4,1.4,0,.3,2.8,.5,7838867),e(-.8,.18,0,.45,.2,4,6782077),e(.8,.18,0,.45,.2,4,6782077)]),s("air-compressor","Air compressor","Workshop",[e(0,.4,0,1.1,.5,.5,13143410),e(0,.78,0,.45,.25,.35,6782077),...[-.4,.4].map(u=>e(u,.15,0,.2,.3,.65,6782077)),e(.55,.9,0,.1,.5,.1,6782077)]),s("tool-board","Tool pegboard","Workshop",[e(0,.65,0,1.6,1.3,.1,11963744),...[-.55,0,.55].flatMap((u,f)=>[e(u,.6,.1,.08,.65,.07,6782077),e(u,.9,.1,f===1?.3:.16,.1,.07,6782077)])]),s("wheelbarrow","Wheelbarrow","Workshop",[e(0,.55,0,.8,.25,1,7838867),e(-.35,.65,.7,.08,.1,1,11963744),e(.35,.65,.7,.08,.1,1,11963744),e(0,.2,-.5,.2,.4,.4,6782077),e(-.3,.25,.3,.06,.5,.06,6782077),e(.3,.25,.3,.06,.5,.06,6782077)]),s("sawhorse","Folding sawhorse","Workshop",[e(0,.8,0,1.4,.15,.2,11963744),...[-.55,.55].flatMap(u=>[-.3,.3].map(f=>e(u,.4,f,.1,.8,.1,11963744)))]),s("bench-vice","Bench vice","Workshop",[e(0,.08,0,.6,.16,.4,6782077),e(-.18,.27,0,.15,.3,.4,7838867),e(.18,.27,0,.15,.3,.4,7838867),e(.35,.2,0,.4,.06,.06,6782077)]),s("bicycle-rack","Bicycle parking rack","Workshop",[e(0,.08,0,2,.16,.65,6782077),...[-.7,0,.7].map(u=>e(u,.4,0,.08,.8,.65,6782077))]),s("willow","Weeping willow","Garden",[e(0,1.3,0,.35,2.6,.35,11963744),e(0,3,0,2.8,1.4,2.8,7838867),...[-1.2,1.2].flatMap(u=>[-1.2,1.2].map(f=>e(u,1.9,f,.35,2,.35,7838867)))]),s("birch","Birch tree","Garden",[e(0,1.6,0,.25,3.2,.25,15655365),e(0,3.1,0,1.3,1.8,1.4,10007682),e(.5,2.7,0,.9,1.1,1,10007682),...Array.from({length:6},(u,f)=>e(0,.3+f*.4,.13,.25,.06,.02,6782077))]),s("fern","Fern","Garden",[-1,0,1].flatMap(u=>[e(u*.23,.25,0,.18,.5,.8,7838867),e(0,.2,u*.23,.8,.4,.18,7838867)])),s("flower-arch","Flowered garden arch","Garden",[...c(2.4,2.8,.3),...[-1.15,1.15].flatMap(u=>[e(u,1.4,0,.4,1.8,.4,7838867),e(u,2.3,0,.5,.4,.5,13143410)]),e(0,2.9,0,2.3,.25,.5,7838867)]),s("raised-bed","Raised vegetable bed","Garden",[e(0,.2,0,2,.4,1.3,11963744),e(0,.42,0,1.8,.04,1.1,9205339),...[-.6,0,.6].flatMap(u=>[-.3,.3].map(f=>e(u,.58,f,.3,.3,.3,7838867)))]),s("stone-path","Stepping stone path","Garden",[-.65,0,.65].map((u,f)=>e(f%2?.1:-.1,.03,u,.85,.06,.5,11318688))),s("pond-bridge","Garden footbridge","Garden",[e(0,.18,0,1.6,.2,3,11963744),...[-.85,.85].flatMap(u=>[e(u,.65,0,.1,.1,3,11963744),...[-1.3,0,1.3].map(f=>e(u,.35,f,.1,.7,.1,11963744))])].map(u=>({...u,color:u.color||11963744}))),s("watering-can","Watering can","Garden",[e(0,.22,0,.4,.44,.35,7838867),{...e(.35,.24,0,.5,.12,.12,7838867),yaw:0},e(-.25,.3,0,.12,.35,.12,6782077),e(0,.5,0,.35,.08,.12,6782077)]),s("wall-sconce","Wall sconce","Lighting",[e(0,.35,-.1,.3,.7,.1,6782077),e(0,.45,.12,.35,.4,.35,16768917)],{interaction:"light"}),s("desk-lamp","Articulated desk lamp","Lighting",[e(0,.04,0,.5,.08,.4,6782077),e(-.15,.3,0,.06,.55,.06,7838867),e(0,.55,0,.4,.08,.08,7838867),e(.18,.5,0,.3,.2,.25,16768917)],{interaction:"light"}),s("string-lights","Garden string lights","Lighting",[e(-1.5,1.1,0,.1,2.2,.1,11963744),e(1.5,1.1,0,.1,2.2,.1,11963744),e(0,2.15,0,3,.04,.04,6782077),...[-1,-.33,.33,1].map(u=>e(u,2,0,.15,.25,.15,16768917))],{interaction:"light"}),s("camp-lantern","Camping lantern","Lighting",[e(0,.07,0,.4,.14,.4,6782077),e(0,.3,0,.28,.35,.28,16768917),e(0,.5,0,.4,.08,.4,7838867),e(0,.65,0,.25,.2,.05,6782077)],{interaction:"light"}),s("swing","Playground swing","Play",[e(-1,1.3,0,.15,2.6,.8,7838867),e(1,1.3,0,.15,2.6,.8,7838867),e(0,2.5,0,2.2,.15,.15,11963744),e(-.35,1.55,0,.04,1.8,.04,6782077),e(.35,1.55,0,.04,1.8,.04,6782077),e(0,.65,0,.8,.12,.45,13143410)]),s("seesaw","Seesaw","Play",[e(0,.3,0,.4,.6,.7,7838867),e(0,.65,0,3,.15,.4,11963744),e(-1.2,.8,0,.5,.15,.55,13143410),e(1.2,.8,0,.5,.15,.55,13143410)]),s("spring-rider","Spring pony","Play",[e(0,.25,0,.25,.5,.25,6782077),e(0,.65,0,.45,.5,.9,13143410),e(0,1,-.4,.3,.5,.25,13143410),e(0,.9,0,.6,.1,.1,7838867)]),s("trampoline","Garden trampoline","Play",[e(0,.4,0,2,.15,2,7838867),e(0,.49,0,1.7,.04,1.7,6782077),...l(1.9,1.9,.35)]),s("teddy","Teddy bear","Play",[e(0,.25,0,.3,.4,.25,11963744),e(0,.55,0,.35,.3,.28,11963744),...[-.18,.18].flatMap(u=>[e(u,.7,0,.12,.14,.12,11963744),e(u,.1,.1,.15,.15,.2,11963744)]),e(0,.54,.16,.12,.07,.04,6782077)]),s("toy-train","Toy train","Play",[e(0,.18,0,.4,.2,1,13143410),e(0,.4,.2,.4,.4,.35,7838867),e(0,.4,-.25,.25,.25,.35,6782077),...[-.23,.23].flatMap(u=>[-.32,.32].map(f=>e(u,.12,f,.12,.22,.2,6782077)))]),s("toy-blocks","Wooden toy blocks","Play",[e(-.2,.12,0,.25,.24,.3,13143410),e(.15,.17,0,.3,.34,.3,7838867),e(.1,.42,0,.6,.16,.3,15655365)]),s("chalkboard","Standing chalkboard","Play",[e(0,.95,0,1.4,1,.12,11963744),e(0,.95,.08,1.2,.8,.03,3693394),...[-.55,.55].map(u=>e(u,.5,0,.12,1,.5,11963744)),e(0,.9,.11,.6,.04,.02,15655365)]),s("post-box","Post box","Street",[e(0,.5,0,.5,1,.5,13143410),e(0,1.05,0,.6,.15,.6,13143410),e(0,.85,.26,.35,.06,.02,6782077)]),s("bus-shelter","Bus shelter","Street",[e(0,2.3,0,3,.2,1.8,7838867),...[-1.3,1.3].map(u=>e(u,1.1,-.6,.12,2.2,.12,6782077)),e(0,1.2,-.7,2.8,1.8,.08,10536654),e(0,.5,-.3,2,.15,.45,11963744),e(-.8,.25,-.3,.1,.5,.1,6782077),e(.8,.25,-.3,.1,.5,.1,6782077)]),s("street-sign","Direction signpost","Street",[e(0,1.1,0,.12,2.2,.12,11963744),e(.25,1.9,0,1,.3,.1,7838867),e(-.25,1.5,0,1,.3,.1,13143410)]),s("park-bin","Park recycling bin","Street",[e(0,.5,0,.65,1,.65,7838867),e(0,1.05,0,.75,.12,.75,6782077),e(0,.85,.34,.4,.16,.03,6782077)]),s("hydrant","Street hydrant","Street",[e(0,.4,0,.3,.8,.3,13143410),e(0,.85,0,.4,.12,.4,13143410),e(0,.6,0,.7,.18,.18,6782077)]),s("bollard","Path bollard","Street",[e(0,.45,0,.2,.9,.2,6782077),e(0,.75,0,.23,.15,.23,15655365)]),s("feeding-trough","Animal feeding trough","Farm",[e(0,.2,0,1.5,.4,.6,11963744),e(0,.42,0,1.3,.04,.4,7838867),e(-.55,.12,0,.12,.24,.75,6782077),e(.55,.12,0,.12,.24,.75,6782077)]),s("hay-bale","Hay bale","Farm",[e(0,.35,0,1.2,.7,.75,14007677),e(-.35,.35,0,.06,.72,.78,11963744),e(.35,.35,0,.06,.72,.78,11963744)]),s("chicken-coop","Chicken coop","Farm",[...l(1.4,1,.4),e(0,.5,0,1.4,.2,1,11963744),e(-.6,.9,0,.2,.8,1,15655365),e(.6,.9,0,.2,.8,1,15655365),e(0,.9,-.45,1.2,.8,.1,15655365),e(0,1.35,0,1.6,.25,1.2,13143410,"wedge")]),s("kennel","Dog kennel","Farm",[e(-.4,.35,0,.15,.7,1,11963744),e(.4,.35,0,.15,.7,1,11963744),e(0,.35,-.45,.8,.7,.1,11963744),e(0,.8,0,1,.25,1.1,7838867,"wedge")]),s("hitching-post","Hitching rail","Farm",[e(-.8,.6,0,.15,1.2,.15,11963744),e(.8,.6,0,.15,1.2,.15,11963744),e(0,1,0,1.8,.15,.15,11963744)]),s("beehive","Garden beehive","Farm",[e(0,.1,0,.85,.2,.75,11963744),...[0,1,2].map(u=>e(0,.3+u*.24,0,.65,.22,.6,14204024)),e(0,.92,0,.8,.12,.75,7838867)])}const xx=new Set(["wood","brick","stone","glass","flowers","lantern","bench"]),D=(s,e,t,n,i,r,a,o="box")=>({x:s,y:e,z:t,w:n,h:i,d:r,color:a,shape:o}),Le=11239513,ot=15852744,Ye=5796718,os=10340302,Ns=[];function ue(s,e,t,n,i={}){var r;Ns.push({id:s,label:e,category:t,parts:n,icon:t==="Garden"?"🌿":t==="Lighting"?"💡":t==="Openings"?"🚪":t==="Furniture"?"🪑":"▦",color:((r=n[0])==null?void 0:r.color)||Le,...i})}for(const[s,e,t]of[["wood","Wood",12424551],["brick","Brick",13075044],["stone","Stone",10267045],["glass","Glass",os]])ue(s,e,"Materials",[D(0,.5,0,1,1,1,t)],{cube:!0,icon:s==="wood"?"▥":s==="brick"?"▦":s==="stone"?"▧":"◈"});for(const[s,e,t]of[["flowers","Flowers","🌷"],["lantern","Lantern","🏮"],["bench","Bench","🪑"]])ue(s,e,s==="flowers"?"Garden":"Furniture",ox[s].map(([n,i,r,a,o,l,c])=>D(n-.5,i,r-.5,a,o,l,c)),{icon:t});for(const[s,e,t,n]of[["oak-planks","Oak planks",12423520,"wood"],["bamboo","Bamboo",12763001,"bamboo"],["log-end","Timber logs",10912340,"log"],["white-brick","White brick",14407359,"brick"],["cobble","Cobblestone",9607822,"cobble"],["sandstone","Sandstone",14468245,"stone"],["marble","Marble",14867920,"marble"],["slate","Slate",6912896,"stone"],["concrete","Concrete",11710880,"concrete"],["terracotta","Terracotta",12419166,"tile"],["mosaic","Mosaic tiles",8563103,"mosaic"],["checker-tile","Checker tiles",14274995,"checker"],["copper","Copper panels",12157540,"metal"],["steel","Steel plate",11123392,"metal"],["grass","Turf",8957292,"grass"],["sand","Sand",14930847,"sand"]])ue(s,e,"Materials",[D(0,.5,0,1,1,1,t)],{cube:!0,surface:n});for(const[s,e,t,n,i,r]of[["slab","Half slab",1,.5,1,"box"],["floor-panel","Floor panel",1,.15,1,"box"],["wall-panel","Wall panel",1,2,.15,"box"],["half-wall","Half wall",1,1,.15,"box"],["pillar","Square pillar",.35,2.5,.35,"box"],["beam","Long beam",3,.25,.25,"box"],["post","Fence post",.18,1.2,.18,"box"],["roof-slope","Roof slope",1,1,1,"wedge"],["roof-slab","Roof sheet",2,.15,2,"box"],["ramp","Walking ramp",1,1,2,"wedge"],["wide-ramp","Wide ramp",2,1,2,"wedge"],["step","Low step",1,.25,.5,"box"],["foundation","Foundation plinth",2,.4,2,"box"]])ue(s,e,"Shapes",[D(0,n/2,0,t,n,i,s.includes("roof")?9665388:Le,r)],{ramp:r==="wedge"});ue("stairs","Timber stairs","Shapes",Array.from({length:4},(s,e)=>D(0,(e+1)*.125,.75-e*.5,1,(e+1)*.25,.5,Le)),{ramp:!0});ue("arch","Wide arch","Shapes",[D(-.8,1,0,.3,2,.4,12627596),D(.8,1,0,.3,2,.4,12627596),D(0,2,0,1.9,.35,.4,12627596)]);ue("corner-wall","Corner wall","Shapes",[D(-.42,1,0,.16,2,1,ot),D(0,1,-.42,1,2,.16,ot)]);for(const[s,e,t,n,i]of[["door","Timber door",1,2.2,Le],["glass-door","Glass door",1,2.2,os],["double-door","Double-width door",2,2.2,Le],["garden-gate","Garden gate",1.4,1.2,10268294]])ue(s,e,"Openings",[D(-t/2,n/2,0,.1,n,.18,Ye),D(t/2,n/2,0,.1,n,.18,Ye),D(0,n,0,t+.1,.1,.18,Ye),D(0,n/2,0,t-.16,n-.1,.1,i)],{interaction:"door"});for(const[s,e,t,n]of[["window","Window",1.2,1.2],["wide-window","Wide window",2,1.2],["tall-window","Tall window",.8,2],["skylight","Skylight",1.2,.35]])ue(s,e,"Openings",[D(0,n/2,0,t,n,.09,os),D(-t/2,n/2,0,.08,n,.15,ot),D(t/2,n/2,0,.08,n,.15,ot),D(0,n,0,t+.08,.08,.15,ot),D(0,.04,0,t+.08,.08,.15,ot),D(0,n/2,0,.06,n,.16,ot)]);for(const[s,e,t]of[["picket-fence","Picket fence",ot],["rail-fence","Timber rail fence",Le],["metal-rail","Metal railing",Ye]])ue(s,e,"Openings",[...[-.48,.48].map(n=>D(n,.6,0,.1,1.2,.1,t)),D(0,.9,0,1,.1,.1,t),D(0,.4,0,1,.1,.1,t),...s==="picket-fence"?[-.25,0,.25].map(n=>D(n,.55,0,.09,1.1,.1,t)):[]]);const Or=(s=1.5,e=1,t=.75,n=Le)=>[D(0,t,0,s,.12,e,n),...[-s*.38,s*.38].flatMap(i=>[-e*.35,e*.35].map(r=>D(i,t/2,r,.1,t,.1,Ye)))],kr=(s=1,e=9942176)=>[D(0,.4,0,s,.25,.8,e),D(0,.8,.34,s,.6,.16,e),...[-s*.36,s*.36].map(t=>D(t,.15,0,.1,.3,.6,Le))];ue("chair","Dining chair","Furniture",kr(.6),{interaction:"seat"});ue("armchair","Armchair","Furniture",[...kr(1),D(-.48,.55,0,.18,.4,.8,9942176),D(.48,.55,0,.18,.4,.8,9942176)],{interaction:"seat"});ue("sofa","Two-seat sofa","Furniture",kr(1.9,9152434),{interaction:"seat"});ue("corner-sofa","Corner sofa","Furniture",[...kr(1.8,11772084),D(-.6,.4,-.7,.6,.25,1.2,11772084)],{interaction:"seat"});ue("stool","Stool","Furniture",[D(0,.55,0,.55,.12,.55,14003573),...[-.2,.2].flatMap(s=>[-.2,.2].map(e=>D(s,.25,e,.08,.5,.08,Le)))],{interaction:"seat"});ue("dining-table","Dining table","Furniture",Or(1.8,1));ue("coffee-table","Coffee table","Furniture",Or(1.2,.7,.4));ue("desk","Writing desk","Furniture",[...Or(1.5,.8),D(.5,.5,0,.4,.5,.65,14272417)]);for(const[s,e,t,n]of[["single-bed","Single bed",.95,2],["double-bed","Double bed",1.75,2.1]])ue(s,e,"Furniture",[D(0,.25,0,t,.5,n,Le),D(0,.55,0,t,.15,n,15186816),D(0,.68,-n*.33,t*.8,.18,.45,ot),D(0,.65,-n/2,t,.8,.12,Le)]);ue("bunk-bed","Bunk beds","Furniture",[D(0,.5,0,1,.2,2,14663563),D(0,1.7,0,1,.2,2,14663563),...[-.47,.47].flatMap(s=>[-.95,.95].map(e=>D(s,1,e,.1,2,.1,Le))),...Array.from({length:5},(s,e)=>D(-.58,.2+e*.33,.6,.25,.08,.18,Le))]);ue("crib","Crib","Furniture",[D(0,.4,0,.9,.15,1.5,ot),...[-.45,.45].flatMap(s=>[-.65,-.3,0,.3,.65].map(e=>D(s,.75,e,.06,.8,.06,Le)))]);ue("wardrobe","Wardrobe","Furniture",[D(0,1,0,1.2,2,.6,Le),D(0,1,.32,.04,1.8,.05,ot)]);ue("dresser","Dresser","Furniture",[D(0,.6,0,1.4,1.2,.65,Le),...Array.from({length:3},(s,e)=>D(0,.25+e*.35,.34,1.25,.04,.04,ot))]);ue("nightstand","Nightstand","Furniture",[D(0,.3,0,.55,.6,.5,Le),D(0,.4,.27,.1,.06,.05,Ye)]);ue("bookcase","Bookcase","Furniture",[D(0,1,0,1.4,2,.35,Le),...Array.from({length:6},(s,e)=>D(-.55+e*.22,1.35,.2,.16,.55,.08,[13208431,8562842,13876601][e%3]))]);ue("shelf","Wall shelf","Furniture",[D(0,.2,0,1.5,.12,.35,Le),D(-.55,.1,.08,.1,.2,.1,Ye),D(.55,.1,.08,.1,.2,.1,Ye)]);ue("tv-cabinet","TV cabinet","Furniture",[D(0,.35,0,1.5,.7,.5,Le),D(0,1,.05,1.2,.65,.12,Ye),D(0,.95,.13,1.05,.5,.03,10930105)]);ue("rug","Woven rug","Furniture",[D(0,.025,0,1.8,.05,1.3,13216390),D(0,.055,0,1.5,.01,1,14994589)]);const Br=(s=12897715)=>[D(0,.5,0,.98,1,.6,s),D(0,1.04,0,1,.08,.68,ot),D(0,.75,.32,.25,.05,.06,Ye)];ue("kitchen-counter","Kitchen counter","Kitchen",Br());ue("sink","Kitchen sink","Kitchen",[...Br(),D(0,1.09,0,.6,.04,.4,9218473),D(.28,1.3,-.2,.06,.45,.06,Ye)]);ue("stove","Cooker","Kitchen",[...Br(13949132),...[-.25,.25].flatMap(s=>[-.18,.18].map(e=>D(s,1.1,e,.25,.02,.22,Ye))),D(0,.55,.32,.7,.45,.04,Ye)]);ue("fridge","Fridge","Kitchen",[D(0,1,0,.85,2,.8,14476243),D(.28,1,.42,.06,.6,.06,Ye)]);ue("oven","Oven","Kitchen",[...Br(11713718),D(0,.5,.32,.7,.5,.05,Ye)]);ue("kitchen-island","Kitchen island","Kitchen",[D(0,.5,0,2,1,.8,10860973),D(0,1.05,0,2.2,.12,1,ot)]);ue("wall-cupboard","Wall cupboard","Kitchen",[D(0,.4,0,1,.8,.35,14081476),D(0,.4,.2,.04,.7,.03,Ye)]);ue("bin","Kitchen bin","Kitchen",[D(0,.4,0,.5,.8,.5,Ye),D(0,.82,0,.55,.08,.55,11779249)]);ue("toilet","Toilet","Bathroom",[D(0,.22,0,.4,.44,.5,ot),D(0,.48,-.05,.6,.15,.7,ot),D(0,.72,-.3,.6,.6,.18,ot)]);ue("bath","Bath","Bathroom",[D(0,.25,0,.9,.5,1.8,ot),D(0,.52,0,.7,.03,1.5,10077642),D(.32,.7,-.55,.05,.35,.05,Ye)]);ue("shower","Shower","Bathroom",[D(0,.04,0,1,.08,1,ot),D(0,1,-.46,.9,2,.06,os),D(.44,1,0,.06,2,1,os),D(-.3,1.4,-.4,.05,1,.05,Ye),D(-.3,1.95,-.2,.3,.07,.3,Ye)]);ue("washbasin","Washbasin","Bathroom",[D(0,.5,0,.7,1,.5,12306876),D(0,1.05,0,.8,.12,.6,ot),D(.2,1.2,-.2,.05,.3,.05,Ye)]);ue("mirror","Mirror","Bathroom",[D(0,.65,0,.8,1.3,.1,Le),D(0,.65,.06,.68,1.15,.04,os)]);ue("towel-rail","Towel rail","Bathroom",[D(0,.6,0,.9,.08,.08,Ye),D(0,.4,.04,.6,.45,.04,13939875)]);ue("workbench","Workbench","Workshop",[...Or(2,.9,.9),D(0,1.4,-.35,2,.8,.1,Le)]);ue("tool-cabinet","Tool cabinet","Workshop",[D(0,.7,0,1.1,1.4,.55,9153185),...Array.from({length:4},(s,e)=>D(0,.25+e*.3,.29,.8,.04,.05,Ye))]);ue("garage-shelf","Garage shelving","Workshop",[...[-.7,.7].flatMap(s=>[-.3,.3].map(e=>D(s,1,e,.08,2,.08,Ye))),...Array.from({length:4},(s,e)=>D(0,.2+e*.55,0,1.5,.08,.7,Le))]);ue("storage-crate","Storage crate","Workshop",[D(0,.4,0,.8,.8,.8,Le),D(0,.42,.41,.7,.1,.04,ot)]);ue("traffic-cone","Traffic cone","Workshop",[D(0,.06,0,.6,.12,.6,6255729),D(0,.3,0,.35,.5,.35,13998948),D(0,.6,0,.2,.2,.2,16050123)]);ue("tyre-stack","Tyre stack","Workshop",[D(0,.18,0,.7,.3,.7,Ye),D(0,.52,0,.7,.3,.7,Ye)]);for(const[s,e,t,n,i]of[["oak-tree","Oak tree",2.4,3.5,7444841],["pine-tree","Pine tree",1.6,4,6132863],["palm-tree","Palm tree",2.5,3.2,8890990],["fruit-tree","Fruit tree",2,2.8,9876856]])ue(s,e,"Garden",[D(0,n*.35,0,.25,n*.7,.25,Le),...s==="pine-tree"?[0,1,2].map(r=>D(0,n*.48+r*.75,0,t*(1-r*.23),1,t*(1-r*.23),i)):s==="palm-tree"?[D(0,n*.86,0,t,.3,.45,i),D(0,n*.88,0,.45,.3,t,i),D(0,n*.95,0,.8,.5,.8,i)]:[D(0,n*.75,0,t*.75,n*.5,t*.75,i),...[-1,1].map(r=>D(r*t*.3,n*.71,0,t*.4,n*.33,t*.65,i))],...s==="fruit-tree"?[-.65,0,.65].map(r=>D(r,n*.75,.8,.2,.2,.2,14724205)):[]]);ue("hedge","Hedge","Garden",[D(0,.5,0,1.5,1,.7,7840116)]);ue("flower-bed","Flower bed","Garden",[D(0,.12,0,1.5,.24,.8,Le),...[-.5,0,.5].map(s=>D(s,.45,0,.3,.5,.3,14069921))]);ue("planter","Square planter","Garden",[D(0,.25,0,.7,.5,.7,12555371),D(0,.65,0,.5,.5,.5,8956533)]);ue("vegetable-patch","Vegetable patch","Garden",[D(0,.06,0,1.8,.12,1.5,10847589),...[-.5,0,.5].flatMap(s=>[-.45,0,.45].map(e=>D(s,.22,e,.2,.3,.2,9021805)))]);ue("boulder","Boulder","Garden",[D(0,.35,0,1.3,.7,1.1,10398366),D(.2,.8,0,.8,.3,.8,10398366)]);ue("birdhouse","Birdhouse","Garden",[D(0,.8,0,.1,1.6,.1,Le),D(0,1.65,0,.5,.5,.45,13939070),D(0,1.95,0,.65,.12,.6,9217434)]);ue("pergola","Pergola","Garden",[...[-1,1].flatMap(s=>[-1,1].map(e=>D(s,1.25,e,.15,2.5,.15,Le))),...[-1,-.5,0,.5,1].map(s=>D(s,2.55,0,.15,.15,2.3,Le))]);for(const[s,e,t,n]of[["table-lamp","Table lamp",.65,.4],["floor-lamp","Floor lamp",1.8,.6],["street-lamp","Street lamp",3,.7],["garden-light","Garden light",.7,.35],["ceiling-light","Ceiling lamp",.3,.7],["wall-light","Wall light",.5,.3]])ue(s,e,"Lighting",[D(0,t*.4,0,.08,t*.8,.08,Ye),D(0,t*.85,0,n,t*.3,n,16768917),D(0,.04,0,n*.7,.08,n*.7,Ye)],{interaction:"light"});ue("toy-box","Toy box","Play",[D(0,.3,0,1.1,.6,.7,13874817),D(0,.65,0,1.15,.1,.75,9154209)]);ue("dollhouse","Doll house","Play",[D(0,.25,0,.8,.5,.55,14529701),D(0,.6,0,.9,.25,.65,9348764,"wedge")]);ue("sandpit","Sandpit","Play",[D(0,.08,0,2,.16,2,Le),D(0,.18,0,1.7,.08,1.7,14930335)]);ue("play-slide","Play slide","Play",[D(0,.5,0,.6,1,1.7,14202233,"wedge"),D(-.4,1,.7,.12,2,.12,Ye),D(.4,1,.7,.12,2,.12,Ye)]);ue("goal","Play goal","Play",[D(-1,.7,0,.1,1.4,.1,ot),D(1,.7,0,.1,1.4,.1,ot),D(0,1.4,0,2.1,.1,.1,ot)]);_x(ue,D);for(const[s,e]of[["swing","swing"],["seesaw","seesaw"],["spring-rider","rock"],["rocking-chair","rock"],["trampoline","bounce"],["play-slide","slide"],["bench","seat"],["lantern","light"]])Ns.find(t=>t.id===s).interaction=e;const Qa=Ns.find(s=>s.id==="dining-hutch");Qa.interaction="cabinet";Qa.parts=[D(-.7,.45,0,.1,.9,.6,Le),D(.7,.45,0,.1,.9,.6,Le),D(0,.45,-.25,1.4,.9,.1,Le),D(0,.05,0,1.4,.1,.6,Le),D(0,.87,0,1.5,.12,.6,Le),...Qa.parts.slice(1),D(0,.45,.32,1.3,.72,.08,10860706)];const Eo=new Map(Ns.map(s=>[s.id,s]));function vx(s,e){const t=Eo.get(s.type);if(!t)throw Error("Unknown catalogue item");const n=t.parts.filter((i,r)=>!(["garden-gate","stable-door","field-gate"].includes(s.type)&&r===2)).map(i=>({...i}));if(["door","cabinet"].includes(t.interaction||"")&&(s.open||e!==void 0)){const i=n.at(-1),r=(s.open?1:0)*Math.PI/2*(t.interaction==="cabinet"?-1:1);i.x+=-i.w/2+Math.cos(r)*i.w/2,i.z+=-Math.sin(r)*i.w/2,i.yaw=r}if(t.interaction==="light"&&s.on===!1)for(const i of n)i.color===16768917&&(i.color=12960431);return n}function yx(s,e){if(xx.has(s.type))return[bs(s)];const t=(s.rotation||0)*Math.PI/180,n=Math.cos(t),i=Math.sin(t),r=Eo.get(s.type);if(r.ramp){const a=Math.max(...r.parts.map(c=>c.w)),o=r.rampLength||(s.type==="stairs"?2:r.parts[0].d),l=Math.max(...r.parts.map(c=>c.y+c.h/2));return[{minX:s.x+.5-(Math.abs(n)*a+Math.abs(i)*o)/2,maxX:s.x+.5+(Math.abs(n)*a+Math.abs(i)*o)/2,minZ:s.z+.5-(Math.abs(i)*a+Math.abs(n)*o)/2,maxZ:s.z+.5+(Math.abs(i)*a+Math.abs(n)*o)/2,minY:s.y,maxY:s.y+l,ramp:{cx:s.x+.5,cz:s.z+.5,c:n,s:i,width:a,length:o,rise:l,baseY:s.y}}]}return vx(s,e).map(a=>{const o=t+(a.yaw||0),l=Math.cos(o),c=Math.sin(o),h=s.x+.5+a.x*n+a.z*i,d=s.z+.5-a.x*i+a.z*n,u=(Math.abs(l)*a.w+Math.abs(c)*a.d)/2,f=(Math.abs(c)*a.w+Math.abs(l)*a.d)/2;return{minX:h-u,maxX:h+u,minZ:d-f,maxZ:d+f,minY:s.y+a.y-a.h/2,maxY:s.y+a.y+a.h/2,obb:{cx:h,cz:d,c:l,s:c,halfW:a.w/2,halfD:a.d/2}}})}function eo(s){return yx(s)}function Mx(s){const e=eo(s);return{minX:Math.min(...e.map(t=>t.minX)),maxX:Math.max(...e.map(t=>t.maxX)),minY:Math.min(...e.map(t=>t.minY)),maxY:Math.max(...e.map(t=>t.maxY)),minZ:Math.min(...e.map(t=>t.minZ)),maxZ:Math.max(...e.map(t=>t.maxZ))}}const Bh=[{id:"set-bedroom",label:"Bedroom set",category:"Presets",icon:"🛏",color:Le,blocks:[{x:0,y:0,z:0,type:"single-bed"},{x:2,y:0,z:0,type:"nightstand"},{x:2,y:0,z:2,type:"floor-lamp"}]},{id:"set-kitchen",label:"Kitchen run",category:"Presets",icon:"🍳",color:ot,blocks:[{x:0,y:0,z:0,type:"kitchen-counter"},{x:1,y:0,z:0,type:"sink"},{x:2,y:0,z:0,type:"stove"}]},{id:"set-garden",label:"Garden seating",category:"Presets",icon:"🌷",color:Le,blocks:[{x:0,y:0,z:0,type:"bench"},{x:-2,y:0,z:0,type:"planter"},{x:2,y:0,z:0,type:"planter"}]},{id:"set-workshop",label:"Workshop set",category:"Presets",icon:"🛠",color:Ye,blocks:[{x:0,y:0,z:0,type:"workbench"},{x:3,y:0,z:0,type:"tool-cabinet"},{x:0,y:0,z:2,type:"storage-crate"}]}];Bh.push({id:"set-dining",label:"Family dining",category:"Presets",icon:"🍽",color:Le,blocks:[{x:0,y:0,z:0,type:"round-table"},{x:-2,y:0,z:0,type:"chair",rotation:270},{x:2,y:0,z:0,type:"chair",rotation:90},{x:0,y:0,z:2,type:"chair"}]},{id:"set-bathroom",label:"Bathroom suite",category:"Presets",icon:"🛁",color:ot,blocks:[{x:0,y:0,z:0,type:"washbasin"},{x:2,y:0,z:0,type:"toilet"},{x:4,y:0,z:0,type:"bath"}]},{id:"set-study",label:"Reading and study",category:"Presets",icon:"📚",color:Le,blocks:[{x:0,y:0,z:0,type:"desk"},{x:0,y:.81,z:0,type:"desk-lamp"},{x:0,y:0,z:2,type:"chair"},{x:3,y:0,z:0,type:"bookcase"}]},{id:"set-playground",label:"Little playground",category:"Presets",icon:"🛝",color:Le,blocks:[{x:0,y:0,z:0,type:"swing"},{x:4,y:0,z:0,type:"play-slide"},{x:0,y:0,z:4,type:"sandpit"}]},{id:"set-farm",label:"Animal care corner",category:"Presets",icon:"🐾",color:Le,blocks:[{x:0,y:0,z:0,type:"feeding-trough"},{x:3,y:0,z:0,type:"kennel"},{x:-3,y:0,z:0,type:"hay-bale"}]},{id:"set-bus-stop",label:"Neighbourhood bus stop",category:"Presets",icon:"🚏",color:Ye,blocks:[{x:0,y:0,z:0,type:"bus-shelter"},{x:3,y:0,z:0,type:"street-sign"},{x:-3,y:0,z:0,type:"park-bin"}]},{id:"set-picnic",label:"Picnic corner",category:"Presets",icon:"☀",color:Le,blocks:[{x:0,y:0,z:0,type:"round-table"},{x:0,y:0,z:2,type:"bench"},{x:0,y:0,z:-2,type:"bench",rotation:180},{x:3,y:0,z:0,type:"planter"}]},{id:"set-pavilion",label:"Open garden pavilion",category:"Presets",icon:"⌂",color:Le,blocks:[{x:0,y:0,z:0,type:"wide-floor"},...[-1,1].flatMap(s=>[-1,1].map(e=>({x:s,y:.15,z:e,type:"pillar"}))),{x:0,y:2.65,z:0,type:"wide-floor"}]});const Dc=[...Ns,...Bh];cn.halfSize;cn.maxBlocks;const bx=(s,e,t)=>Math.max(e,Math.min(t,s));function Uc(s){return s.obb??{cx:(s.minX+s.maxX)/2,cz:(s.minZ+s.maxZ)/2,c:1,s:0,halfW:(s.maxX-s.minX)/2,halfD:(s.maxZ-s.minZ)/2}}function Sx(s,e,t){if(!s.ramp)return null;const n=s.ramp,i=e-n.cx,r=t-n.cz,a=i*n.c-r*n.s,o=i*n.s+r*n.c;return Math.abs(a)>n.width/2+.001||Math.abs(o)>n.length/2+.001?null:(n.baseY||0)+bx((n.length/2-o)/n.length,0,1)*n.rise}function zh(s,e){if(e.ramp){const a=Sx(e,(s.minX+s.maxX)/2,(s.minZ+s.maxZ)/2);return a!==null&&s.minY<a-1e-5&&s.maxY>e.minY}if(s.ramp)return zh(e,s);if(!(s.minX<e.maxX-1e-5&&s.maxX>e.minX+1e-5&&s.minY<e.maxY-1e-5&&s.maxY>e.minY+1e-5&&s.minZ<e.maxZ-1e-5&&s.maxZ>e.minZ+1e-5))return!1;if(!s.obb&&!e.obb)return!0;const t=Uc(s),n=Uc(e),i=n.cx-t.cx,r=n.cz-t.cz;for(const[a,o]of[[t.c,-t.s],[t.s,t.c],[n.c,-n.s],[n.s,n.c]]){const l=t.halfW*Math.abs(a*t.c-o*t.s)+t.halfD*Math.abs(a*t.s+o*t.c),c=n.halfW*Math.abs(a*n.c-o*n.s)+n.halfD*Math.abs(a*n.s+o*n.c);if(Math.abs(i*a+r*o)>=l+c-1e-5)return!1}return!0}const Ex=s=>Number.isInteger(s.x)&&Number.isInteger(s.z)&&Number.isFinite(s.y)&&Math.abs(s.y*100-Math.round(s.y*100))<1e-7;function wx(s){if(!Array.isArray(s)||s.length>12e3)throw Error("Unsupported build capacity");const e=new Set,t=new $a(4);for(const n of s){if(!n||!Eo.has(n.type)||!Ex(n)||n.x<-250||n.x>=250||n.z<-250||n.z>=250||n.y<0||n.y>=24||n.rotation!==void 0&&!Number.isFinite(n.rotation)||Math.abs(n.rotation||0)>36e3||n.open!==void 0&&typeof n.open!="boolean"||n.on!==void 0&&typeof n.on!="boolean")throw Error("Invalid catalogue object");const i=`${n.x},${n.y},${n.z}`;if(e.has(i))throw Error("Duplicate build anchor");if(e.add(i),Mx(n).maxY>24.001)throw Error("Object exceeds build ceiling");for(const a of eo(n))if(t.query(a).some(o=>zh(a,o)))throw Error("Saved objects overlap");for(const a of eo(n))t.add(a)}}new Mi(1,1,1);const wo=new Pt;wo.setAttribute("position",new gt([-.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,.5,.5,-.5,.5,-.5,.5,-.5,.5,.5,-.5],3));wo.setIndex([0,2,1,1,2,3,0,1,4,1,5,4,0,4,2,1,3,5,2,4,3,3,4,5]);wo.computeVertexNormals();const Tx=[{id:"sunbeam-county",name:"Sunbeam County",icon:"🌄",layout:3,spawn:{x:-21.4,y:0,z:0,yaw:0,pitch:0}},{id:"sunbeam-region",name:"Sunbeam Region",layout:2,icon:"🌳",spawn:{x:-21.4,y:0,z:0,yaw:0,pitch:0}},{id:"sunbeam-town",name:"Sunbeam Town",icon:"☀",spawn:{x:-21.4,y:0,z:0,yaw:0,pitch:0}},{id:"home-square",name:"Home & Square",icon:"☀",spawn:{x:-21.4,y:0,z:0,yaw:0,pitch:0}},{id:"legacy-06",name:"Legacy neighbourhood",icon:"🏡",spawn:{x:-14.4,y:0,z:-1.2,yaw:0,pitch:0}},{id:"blank",name:"Blank creative",icon:"🧱",spawn:{x:0,y:0,z:8,yaw:0,pitch:0}}],Ax=[{id:"explorer",name:"Explorer",skin:14395767,shirt:7183243,pants:11639667,hair:6638909,hat:"sun",extra:"pack"},{id:"builder",name:"Little builder",skin:12092507,shirt:15122027,pants:7179424,hair:4406066,hat:"hard",extra:"overalls"},{id:"gardener",name:"Gardener",skin:9133890,shirt:13017773,pants:6323816,hair:3945264,hat:"sun",extra:"apron"},{id:"pilot",name:"Friendly pilot",skin:12882024,shirt:8166578,pants:5860992,hair:5915959,hat:"cap",extra:"scarf"},{id:"painter",name:"Painter",skin:15188378,shirt:10849195,pants:8557967,hair:8938314,hat:"beret",extra:"apron"},{id:"sailor",name:"Sailor",skin:9726539,shirt:15327176,pants:6589853,hair:3748912,hat:"sailor",extra:"stripes"},{id:"cosy",name:"Cosy hoodie",skin:13803892,shirt:13143166,pants:7900032,hair:6310971,hat:"hood",extra:"pocket"},{id:"stargazer",name:"Stargazer",skin:11500885,shirt:7832742,pants:5991815,hair:3879985,hat:"cap",extra:"star"},{id:"sporty",name:"Park runner",skin:15054220,shirt:12158841,pants:7440277,hair:7491128,hat:"band",extra:"stripes"},{id:"rainbow",name:"Rainbow jumper",skin:9002304,shirt:11250340,pants:7637906,hair:3485227,hat:"none",extra:"rainbow"},{id:"farmer",name:"Farm friend",skin:13212272,shirt:12032370,pants:8034464,hair:5981235,hat:"sun",extra:"overalls"},{id:"blossom",name:"Blossom",skin:11435867,shirt:14203269,pants:9414033,hair:4535853,hat:"pony",extra:"skirt"}];function Hh(s){let e=2166136261;for(let t=0;t<s.length;t++)e^=s.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0).toString(16).padStart(8,"0")}function To(s){const e=s;if(!e||![1,2,3].includes(e.schema)||!Tx.some(r=>r.id===e.template)||!e.world||!e.player||!e.preferences)throw Error("Unsupported world schema or template");for(const r of["x","y","z","yaw","pitch"])if(!Number.isFinite(e.player[r]))throw Error("Invalid player position");if(Math.abs(e.player.x)>=250||Math.abs(e.player.z)>=250||e.player.y<0||e.player.y>26)throw Error("Player outside supported bounds");const t=e.world.layout??(e.template==="sunbeam-region"&&e.schema===3?2:1);if(!Number.isInteger(t)||Number(t)<1||Number(t)>(e.template==="sunbeam-county"?3:2))throw Error("Unsupported template layout");if(e.preferences.avatar!==void 0&&!Ax.some(r=>r.id===e.preferences.avatar))throw Error("Unknown avatar appearance");if(e.preferences.lookSpeed!==void 0&&(typeof e.preferences.lookSpeed!="number"||![.6,1,1.4].includes(e.preferences.lookSpeed)))throw Error("Invalid look speed");if(e.preferences.leftHanded!==void 0&&typeof e.preferences.leftHanded!="boolean")throw Error("Invalid control side");for(const[r,a]of[["hotbar",8],["recent",8],["favourites",32]]){const o=e.preferences[r];if(o!==void 0&&(!Array.isArray(o)||o.length>a||o.some(l=>typeof l!="string"||!Dc.some(c=>c.id===l))))throw Error("Invalid catalogue preferences")}if(wx(e.world.blocks),!["hand",...Dc.map(r=>r.id)].includes(e.preferences.selected))throw Error("Invalid selected item");if(!e.world.doors||Array.isArray(e.world.doors)||typeof e.world.doors!="object"||Object.values(e.world.doors).some(r=>typeof r!="boolean"))throw Error("Invalid doors");const n=e.world.props;if(n!==void 0&&(!n||Array.isArray(n)||typeof n!="object"||Object.keys(n).length>256||Object.values(n).some(r=>!r||Array.isArray(r)||typeof r!="object"||Object.entries(r).some(([a,o])=>!["open","on"].includes(a)||typeof o!="boolean"))))throw Error("Invalid furniture state");const i=e.world.activity;if(i!==void 0&&(!i||!i.car||![i.car.x,i.car.z,i.car.yaw].every(Number.isFinite)||Math.abs(i.car.x)>249||Math.abs(i.car.z)>249))throw Error("Invalid vehicle checkpoint");if((i==null?void 0:i.vehicles)!==void 0&&(!Array.isArray(i.vehicles)||i.vehicles.length>2||i.vehicles.length&&e.template!=="sunbeam-county"||new Set(i.vehicles.map(r=>r.id)).size!==i.vehicles.length||i.vehicles.some(r=>!r||!["runabout","bicycle"].includes(r.id)||![r.x,r.z,r.yaw].every(Number.isFinite)||Math.abs(r.x)>249||Math.abs(r.z)>249)))throw Error("Invalid vehicle fleet checkpoint");if((i==null?void 0:i.pet)!==void 0&&(!i.pet||!["wander","follow","stay","home"].includes(i.pet.mode)||![i.pet.x,i.pet.z,i.pet.yaw].every(Number.isFinite)||Math.abs(i.pet.x)>249||Math.abs(i.pet.z)>249))throw Error("Invalid companion checkpoint");if((i==null?void 0:i.horses)!==void 0&&(!Array.isArray(i.horses)||i.horses.length>4||new Set(i.horses.map(r=>r.id)).size!==i.horses.length||i.horses.some(r=>!r||!Number.isInteger(r.id)||r.id<0||r.id>3||![r.x,r.z,r.yaw].every(Number.isFinite)||Math.abs(r.x)>249||Math.abs(r.z)>249)))throw Error("Invalid horse checkpoint");return{...structuredClone(e),world:{...structuredClone(e.world),layout:t},schema:3}}function Gn(s){const e=JSON.stringify(To(s));return{json:e,checksum:Hh(e)}}function As(s){if(!s||typeof s.json!="string"||s.json.length>8e6||Hh(s.json)!==s.checksum)throw Error("Checkpoint checksum failed");return To(JSON.parse(s.json))}function Rx(s){if(s.length>12e6)throw Error("Backup is too large");const e=JSON.parse(s);if(e.format==="blockworld2"&&e.version===1)return{snapshot:As(e.checkpoint),...typeof e.legacySource=="string"&&e.legacySource.length<=4e6?{source:e.legacySource}:{},name:typeof e.name=="string"?e.name.slice(0,60):"Imported world"};if(s.length>4e6)throw Error("Legacy backup exceeds 4 MB");const t=gx(e);return{snapshot:To({schema:3,template:"legacy-06",world:{blocks:t.blocks,doors:t.doors},player:t.player,preferences:{selected:t.selected}}),source:s,name:"Imported legacy neighbourhood"}}class Nc extends Error{constructor(){super("This world changed in another tab. Your unsaved work is still here; export or save a new copy.")}}const mr=s=>new Promise((e,t)=>{s.onsuccess=()=>e(s.result),s.onerror=()=>t(s.error||Error("Storage request failed"))}),gr=s=>new Promise((e,t)=>{s.oncomplete=()=>e(),s.onabort=()=>t(s.error||Error("Storage transaction aborted")),s.onerror=()=>{}});class Ao{constructor(e){this.db=e}static open(e="blockworld2-development"){return new Promise((t,n)=>{const i=indexedDB.open(e,1);i.onupgradeneeded=()=>{for(const r of["worlds","meta"])i.result.objectStoreNames.contains(r)||i.result.createObjectStore(r,{keyPath:r==="worlds"?"id":"key"})},i.onsuccess=()=>{i.result.onversionchange=()=>i.result.close(),t(new Ao(i.result))},i.onerror=()=>n(i.error),i.onblocked=()=>n(Error("Close another BlockWorld tab to open saves"))})}async read(e,t){const n=this.db.transaction(e,"readonly");return mr(n.objectStore(e).get(t))}async list(){const e=this.db.transaction("worlds","readonly");return mr(e.objectStore("worlds").getAll())}async last(){var e;return(e=await this.read("meta","last"))==null?void 0:e.value}async select(e){const t=this.db.transaction("meta","readwrite"),n=gr(t);t.objectStore("meta").put({key:"last",value:e}),await n}async create(e,t,n){const i=Gn(t),r={id:crypto.randomUUID(),name:e.trim().slice(0,60)||"My world",template:t.template,revision:0,updated:Date.now(),current:i,previous:[],...n?{importSource:n}:{}},a=this.db.transaction("worlds","readwrite"),o=gr(a);return a.objectStore("worlds").add(r),await o,r}async load(e){const t=await this.read("worlds",e);if(!t)throw Error("World was not found");try{return{record:t,snapshot:As(t.current),recovered:!1}}catch{for(const i of t.previous||[])try{return{record:t,snapshot:As(i),recovered:!0}}catch{}throw Error("No valid checkpoint. Original data is retained; import a backup or choose another world.")}}async save(e,t,n){const i=Gn(n),r=this.db.transaction("worlds","readwrite"),a=gr(r);try{const o=r.objectStore("worlds"),l=await mr(o.get(e));if(!l)throw Error("World no longer exists");if(l.revision!==t)throw new Nc;As(l.current);const c={...l,revision:t+1,current:i,previous:[l.current,...l.previous].slice(0,3),updated:Date.now()};return o.put(c),await a,c}catch(o){try{r.abort()}catch{}throw await a.catch(()=>{}),o}}async rename(e,t,n){const i=this.db.transaction("worlds","readwrite"),r=gr(i);try{const a=i.objectStore("worlds"),o=await mr(a.get(e));if(!o||o.revision!==t)throw new Nc;const l={...o,name:n.trim().slice(0,60)||o.name,revision:t+1,updated:Date.now()};return a.put(l),await r,l}catch(a){try{i.abort()}catch{}throw await r.catch(()=>{}),a}}async duplicate(e){const{record:t,snapshot:n,recovered:i}=await this.load(e);if(i)throw Error("Recover this world to a new copy before duplicating");return this.create(t.name+" copy",n,t.importSource)}async import(e){const t=Rx(e);return this.create(t.name,t.snapshot,t.source)}export(e,t){return JSON.stringify({format:"blockworld2",version:1,name:e.name,...e.importSource?{legacySource:e.importSource}:{},checkpoint:t?Gn(t):e.current},null,2)}}const Cx="blockworld-adventures-assets-v1";function Yi(s){const e=s.world.adventure;if(!e||e.version!==1||e.layout!==void 0&&e.layout!==1&&e.layout!==2&&e.layout!==3&&e.layout!==4||!Gt.some(n=>n.id===e.scene)||e.scene==="vale"&&e.layout!==3&&e.layout!==4||e.doors!==void 0&&(!e.doors||typeof e.doors!="object"||Array.isArray(e.doors)||Object.entries(e.doors).some(([n,i])=>n!=="lodge"||typeof i!="boolean"))||!Array.isArray(e.objects)||e.objects.length>200||!Array.isArray(e.discoveries)||e.discoveries.length>50||e.discoveries.some(n=>typeof n!="string"||n.length>80))throw Error("This is not a supported Adventures preview backup. Existing saves are unchanged.");const t=new Set;for(const n of e.objects){if(!n||typeof n.id!="string"||n.id.length>80||t.has(n.id)||!Ps.has(n.asset)||![n.x,n.z,n.yaw,n.scale].every(Number.isFinite)||!zn(n.x,n.z,e.scene,-.001)||n.scale<.2||n.scale>14)throw Error("Invalid imported object. Existing saves are unchanged.");t.add(n.id)}if(!zn(s.player.x,s.player.z,e.scene,-.001))throw Error("Player outside the preview boundary.");return{...structuredClone(e),layout:e.layout??1}}function to(s,e){return{schema:3,template:"blank",world:{blocks:[],doors:{},layout:1,adventure:structuredClone(s)},player:{...e,y:0},preferences:{selected:"hand",avatar:"explorer",camera:"third"}}}class Lx{constructor(e,t,n,i){this.capture=e,this.apply=t,this.status=n,this.pause=i}store;current=null;blocked=!1;busy=0;queue=Promise.resolve();last="";serial(e){const t=this.queue.then(e);return this.queue=t.catch(()=>{}),t}async init(){this.store=await Ao.open(Cx);const e=await this.store.list(),t=await this.store.last();let n=e.find(i=>i.id===t)||e[0];if(!n){const i=Gt[0];n=await this.store.create(i.name,to({version:1,scene:i.id,layout:i.id==="vale"?wc:3,objects:[],discoveries:[]},{...i.spawn,yaw:i.yaw,pitch:.47}))}await this.open(n.id)}async flush(){var i;if(!this.current||!this.store)return;if(this.blocked)throw Error("Saving is paused. Export your work or save a new copy.");const e=this.current,t=this.capture();Yi(t);const n=Gn(t).json;if(n!==this.last){this.status("Saving…");try{const r=await this.store.save(e.id,e.revision,t);((i=this.current)==null?void 0:i.id)===e.id&&(this.current=r,this.last=n),this.status("Saved on this device")}catch(r){throw this.blocked=!0,this.status(String(r),!0),r}}}save(){return this.serial(()=>this.flush())}change(e){return this.busy++,this.pause(!0),this.serial(e).finally(()=>{--this.busy===0&&this.pause(!1)})}open(e){return this.change(async()=>{await this.flush();const t=await this.store.load(e);Yi(t.snapshot),await this.flush(),this.apply(t.snapshot),this.current=t.record,this.last=Gn(t.snapshot).json,this.blocked=t.recovered,await this.store.select(e),this.status(t.recovered?"An older checkpoint was recovered. Export it or save a new copy before continuing.":"Saved on this device",t.recovered)})}create(e){return this.change(async()=>{await this.flush();const t=Gt.find(c=>c.id===e),n=to({version:1,scene:e,layout:t.id==="vale"?wc:3,objects:[],discoveries:[]},{...t.spawn,yaw:t.yaw,pitch:.47}),i=await this.store.list(),r=new Set(i.map(c=>c.name));let a=t.name,o=2;for(;r.has(a);)a=t.name+" "+o++;const l=await this.store.create(a,n);return this.apply(n),this.current=l,this.last=Gn(n).json,await this.store.select(l.id),this.status("Saved on this device"),l})}import(e){return this.change(async()=>{if(await this.flush(),e.length>12e6)throw Error("Backup exceeds 12 MB");const t=JSON.parse(e);if(t.format!=="blockworld2"||t.version!==1)throw Error("Use an Adventures .bw2 backup. Original game backups belong in the original game.");const n=As(t.checkpoint);Yi(n);const i=await this.store.create(typeof t.name=="string"?t.name:"Imported adventure",n);this.apply(n),this.current=i,this.last=Gn(n).json,await this.store.select(i.id),this.status("Backup imported as a new world")})}export(){return this.store.export(this.current||{name:"Unsaved adventure"},this.capture())}recover(){return this.change(async()=>{var n;const e=this.capture();Yi(e);const t=await this.store.create(`${((n=this.current)==null?void 0:n.name)||"Adventure"} recovered`,e);await this.store.select(t.id),this.current=t,this.last=Gn(e).json,this.blocked=!1,this.status("Recovered copy saved")})}}const no=[{id:"furniture-table",name:"Timber table",group:"Furniture"},{id:"furniture-chair",name:"Wooden chair",group:"Furniture"},{id:"furniture-bookcaseopen",name:"Open bookcase",group:"Furniture"},{id:"furniture-rugrectangle",name:"Meadow rug",group:"Furniture"},{id:"building_home_A_blue",name:"Blue-roof cottage",group:"Homes"},{id:"building_home_A_green",name:"Green-roof cottage",group:"Homes"},{id:"building_home_B_blue",name:"Blue-roof townhouse",group:"Homes"},{id:"tree-oak",name:"Oak tree",group:"Garden & woodland"},{id:"tree-pinedefaulta",name:"Pine tree",group:"Garden & woodland"},{id:"plant-bush",name:"Leafy bush",group:"Garden & woodland"},{id:"flower-purplea",name:"Purple wildflowers",group:"Garden & woodland"},{id:"flower-yellowa",name:"Yellow wildflowers",group:"Garden & woodland"},{id:"flower-reda",name:"Red wildflowers",group:"Garden & woodland"},{id:"barrel",name:"Wooden barrel",group:"Village supplies"},{id:"crate_A_small",name:"Supply crate",group:"Village supplies"},{id:"wheelbarrow",name:"Wheelbarrow",group:"Village supplies"},{id:"rock-largea",name:"Boulder",group:"Garden & woodland"},{id:"log",name:"Fallen log",group:"Garden & woodland"},{id:"tent-smallopen",name:"Explorer’s tent",group:"Village supplies"}],Px=s=>{var e;return(e=no.find(t=>t.id===s))==null?void 0:e.name};function Ix(s,e,t){const n=new _h,i=e.create(t),r=new Zn(256,192,{samples:4});r.texture.colorSpace=at,n.add(i,new wh(15069420,8224869,1.6));const a=new Mo(16772558,2.5);a.position.set(-3,6,4),n.add(a),i.updateMatrixWorld(!0);const o=new yt().setFromObject(i),l=o.getCenter(new R),c=o.getSize(new R).length()/2,h=new Nt(40,256/192,.01,1e3),d=c/Math.sin(Pn.degToRad(20))*1.08;h.position.copy(l).addScaledVector(new R(1,.65,1.3).normalize(),d),h.near=Math.max(.001,d/100),h.far=d*10,h.updateProjectionMatrix(),h.lookAt(l);const u=s.getRenderTarget(),f=s.getClearColor(new xe),g=s.getClearAlpha(),_=s.shadowMap.enabled;try{s.shadowMap.enabled=!1,s.setRenderTarget(r),s.setClearColor(0,0),s.clear(),s.render(n,h);const m=new Uint8Array(256*192*4);s.readRenderTargetPixels(r,0,0,256,192,m);const p=document.createElement("canvas");p.width=256,p.height=192;const y=p.getContext("2d"),x=y.createImageData(256,192);for(let b=0;b<192;b++)x.data.set(m.subarray((191-b)*256*4,(192-b)*256*4),b*256*4);return y.putImageData(x,0,0),p.toDataURL("image/png")}finally{s.setRenderTarget(u),s.setClearColor(f,g),s.shadowMap.enabled=_,r.dispose(),n.clear()}}const Gh="blockworld-adventures-controls-v2";function Dx(s){try{const e=JSON.parse((s==null?void 0:s.getItem(Gh))||"null");return{quality:["gentle","balanced","high"].includes(e==null?void 0:e.quality)?e.quality:"balanced",running:typeof(e==null?void 0:e.running)=="boolean"?e.running:!1}}catch{return{quality:"balanced",running:!1}}}function Ux(s,e){try{return s==null||s.setItem(Gh,JSON.stringify(e)),!!s}catch{return!1}}class Nx{all=[];current=[];excluded;replace(e,t){this.all=[...e,...t],this.current=[],this.excluded=void 0}view(e=null){return this.excluded!==e&&(this.excluded=e,this.current=e?this.all.filter(t=>t.ownerId!==e):this.all),this.current}}function Vh(s,e,t,n=.18){let i=-1/0,r=1/0;for(let a=0;a<3;a++){const o=a===0?s.x:a===1?s.y:s.z,l=a===0?e.x:a===1?e.y:e.z,c=a===0?t.minX-n:a===1?t.base??-3:t.minZ-n,h=a===0?t.maxX+n:a===1?t.height+n:t.maxZ+n;if(Math.abs(l)<1e-12){if(o<c||o>h)return 1/0;continue}let d=(c-o)/l,u=(h-o)/l;if(d>u){const f=d;d=u,u=f}if(i=Math.max(i,d),r=Math.min(r,u),i>r)return 1/0}return r<0?1/0:i>=0?i:r}function _r(s,e,t){const n=Math.hypot(e.x,e.y,e.z);if(!n)return 1;const i={x:e.x/n,y:e.y/n,z:e.z/n};let r=1;for(const a of t){if(a.height<s.y-.5||a.minX>s.x+n||a.maxX<s.x-n||a.minZ>s.z+n||a.maxZ<s.z-n)continue;const o=Vh(s,i,a);if(o/n<1){const c=Math.min(n*.04,o*.5);r=Math.min(r,Math.max(0,(o-c)/n))}}return r}function Fx(s,e,t,n=80){if(![s.x,s.y,s.z,e.x,e.y,e.z,n].every(Number.isFinite)||e.y>=-.001||n<=0||s.y<t(s.x,s.z))return null;for(let i=.5;i<=n;i+=.5){const r=s.x+e.x*i,a=s.y+e.y*i,o=s.z+e.z*i;if(a>t(r,o))continue;let l=i-.5,c=i;for(let u=0;u<12;u++){const f=(l+c)/2,g=s.x+e.x*f,_=s.z+e.z*f;s.y+e.y*f>t(g,_)?l=f:c=f}const h=s.x+e.x*c,d=s.z+e.z*c;return{x:h,y:t(h,d),z:d}}return null}function Ox(s=crypto){typeof s.randomUUID!="function"&&Object.defineProperty(s,"randomUUID",{configurable:!0,value:()=>{const e=s.getRandomValues(new Uint8Array(16));e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=Array.from(e,n=>n.toString(16).padStart(2,"0")).join("");return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}})}Ox();const H=s=>document.getElementById(s),kx=H("app");kx.innerHTML=`
<canvas id="view" aria-label="BlockWorld Adventures. Drag to orbit the camera. Use WASD or the touch joystick to walk." tabindex="0"></canvas>
<header id="hud"><div class="identity"><span class="brandmark">◇</span><div class="wordmark">BLOCKWORLD<span>ADVENTURES</span></div><span class="identity-divider"></span><div class="location"><strong id="placeName">Willowmere</strong><span id="placeTag">THE VILLAGE</span></div></div><nav><button id="places" title="Choose a place">⌂ <span>Places</span></button><button id="build" title="Build with premade assets">◇ <span>Build</span></button><button id="menu" aria-label="Open menu">☰</button></nav></header>
<div id="discoveryCount" class="smallPill">♧ <span>Little discoveries</span> <b id="discovered">0 / 5</b></div><div id="compass" aria-label="Camera direction">N <i>↑</i></div><button id="minimap" aria-label="Open world map" title="World map (M)"><canvas id="miniCanvas" aria-hidden="true"></canvas></button>
<div id="mapOverlay" hidden role="dialog" aria-modal="true" aria-labelledby="mapTitle"><header class="mapHeader"><div><small>THE LONG WAY HOME</small><h1 id="mapTitle">The Willow Vale</h1></div><button id="mapClose" aria-label="Close map">✕</button></header><canvas id="fullMap" tabindex="0" aria-label="World map. Drag to pan, pinch or use plus and minus to zoom. Tap a named place to travel. Keyboard arrows pan."></canvas><div class="mapTools"><button id="mapHome">⌂ Home</button><button id="mapFit" aria-label="Show whole world">⊡</button><button id="mapMinus" aria-label="Zoom map out">−</button><button id="mapPlus" aria-label="Zoom map in">+</button><select id="mapDestination" aria-label="Travel to a landmark"><option value="">Travel to…</option></select></div><p class="mapHint">Drag to explore · pinch to zoom · tap a place to travel</p></div>
<div id="joystick" role="group" aria-label="Touch movement joystick"><div id="knob"></div></div><button id="run" class="roundControl" aria-label="Toggle running" aria-pressed="false">➟<span>Run</span></button>
<div id="context" hidden><span id="contextLabel"></span><button id="interact">Discover <kbd>E</kbd></button></div>
<div id="bottomHint"><span><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> walk</span><span>drag to look</span><span><kbd>Shift</kbd> run</span></div><div id="touchHint">Left thumb to walk · drag the world to look</div>
<output id="toast" role="status" aria-live="polite" hidden></output><output id="saveState" aria-live="polite">Preparing your world…</output><div id="stats" hidden></div>
<div id="editBar" hidden><span id="editName">Place object</span><button id="editRotate">↻ <span>Rotate</span></button><button id="editMove">✥ <span>Move</span></button><button id="editRemove">× <span>Remove</span></button><button id="editConfirm" class="primary">✓ <span>Place</span></button><button id="editCancel" aria-label="Cancel editing">✕</button></div>
<div id="modal" hidden role="dialog" aria-modal="true" aria-labelledby="modalTitle"></div>
<div id="welcome"><section><div class="eyebrow">A BLOCKWORLD ADVENTURE</div><h1>A little world.<br>A little wonder.</h1><p>Follow a cobbled lane. Find a quiet corner.<br>Make a place of your own.</p><button id="enter" class="primary" disabled>Preparing the valley… <span>→</span></button><div class="loadingTrack"><i id="loadingBar"></i></div><small id="loadingText">Unpacking the village</small><div class="welcomeFoot">FREE TO EXPLORE <span>•</span> SAVED ON YOUR DEVICE</div></section><div class="previewBadge">WILLOW VALE · DEVELOPMENT PREVIEW 06</div></div>
<div id="fatal" hidden role="alert"></div>`;class Bx{library=new V_;scene=new _h;camera=new Nt(48,innerWidth/innerHeight,.12,220);renderer;landscape;controls;worldMap;session;data={version:1,scene:"village",objects:[],discoveries:[]};player={x:0,y:0,z:18,yaw:0,pitch:.47};cameraYaw=0;cameraPitch=.47;distance=12;velocity=new ke;actor;mixer;actions=new Map;currentAnimation="";actorYaw=0;last=performance.now();started=!1;busy=!0;modalOpen=!1;toastTimer=0;fpsSamples=[];statsTime=0;frames=0;fps=0;quality="balanced";preferenceStorage=null;selectionOutline=new a_(new yt,16765579);collisionCache=new Nx;userGroup=new mt;userRoots=new Map;selection=null;ghost=null;pending=null;placementAnchor=null;moving=null;ghostValidation="";originalMaterials=new Map;history=[];redoHistory=[];near=null;contextFrame=0;debugCamera=!1;sun;contactShadow;cameraPosition=new R;interiorBodySource;interiorCameraBodies=[];dirty=!1;constructor(){this.renderer=new gh({canvas:H("view"),antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(innerWidth,innerHeight),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.outputColorSpace=at,this.renderer.toneMapping=Bc,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Oc,this.scene.background=new xe(13031892),this.scene.fog=new uo(13031892,70,150),this.scene.add(new wh(15069420,8224869,1.2)),this.sun=new Mo(16772558,2.5),this.sun.position.set(-30,55,30),this.sun.castShadow=!0,this.sun.shadow.autoUpdate=!1,this.sun.shadow.needsUpdate=!0,this.sun.shadow.mapSize.set(1024,1024),Object.assign(this.sun.shadow.camera,{left:-45,right:45,top:45,bottom:-45,near:1,far:150}),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.035,this.scene.add(this.sun,this.sun.target,this.userGroup);const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(32,32,2,32,32,32);n.addColorStop(0,"#0009"),n.addColorStop(1,"#0000"),t.fillStyle=n,t.fillRect(0,0,64,64),this.contactShadow=new tt(new xi(1.5,1.15),new Wn({map:new _o(e),transparent:!0,depthWrite:!1,opacity:.55})),this.contactShadow.rotation.x=-Math.PI/2,this.scene.add(this.contactShadow),this.session=new Lx(()=>this.snapshot(),a=>this.apply(a),(a,o)=>this.saveStatus(a,o),a=>{var o;this.busy=a,(o=this.controls)==null||o.clear(),H("modal").inert=a,H("hud").inert=a}),this.controls=new ax(H("view"),()=>this.enabled(),(a,o)=>{this.debugCamera=!1,this.cameraYaw-=a*.004,this.cameraPitch=Pn.clamp(this.cameraPitch+o*.003,.18,1.1),this.dirty=!0},a=>{this.distance=Pn.clamp(this.distance+a,5,22)},(a,o)=>this.tap(a,o),a=>this.key(a),(a,o,l,c,h)=>{var d,u;return(d=this.worldMap)!=null&&d.open?((u=this.worldMap.transform)==null||u.pan(-a*h*280,-o*h*280),c?this.worldMap.zoom(Math.exp(-c*h*1.8)):(a||o)&&this.worldMap.drawFull(),!0):this.modalOpen},a=>{a||this.velocity.set(0,0),this.toast(a?"Controller connected. Controls are in the menu.":"Controller disconnected. Touch and keyboard are ready.")}),this.worldMap=new J_(H("miniCanvas"),H("fullMap"),a=>this.travelTo(a)),this.selectionOutline.visible=!1,this.selectionOutline.renderOrder=20;const i=this.selectionOutline.material;i.depthTest=!1,i.transparent=!0,i.opacity=.95,this.scene.add(this.selectionOutline);try{this.preferenceStorage=localStorage}catch{}const r=Dx(this.preferenceStorage);this.controls.running=r.running,H("run").setAttribute("aria-pressed",String(r.running)),this.setQuality(r.quality),this.bind(),document.addEventListener("keydown",a=>{if(a.code!=="Tab"||!this.modalOpen)return;const o=[...H(this.worldMap.open?"mapOverlay":"modal").querySelectorAll("button,input,select,textarea,summary,a,canvas[tabindex]")].filter(h=>!h.hasAttribute("disabled")&&h.offsetParent!==null);if(!o.length)return;const l=o[0],c=o[o.length-1];a.shiftKey&&document.activeElement===l?(a.preventDefault(),c.focus()):!a.shiftKey&&document.activeElement===c&&(a.preventDefault(),l.focus())}),addEventListener("resize",()=>this.resize()),H("view").addEventListener("webglcontextlost",a=>{a.preventDefault(),this.busy=!0,this.session.save().catch(()=>{}),this.fail("Graphics were interrupted. Reopen this preview to continue from your last saved checkpoint.")}),this.init().catch(a=>this.fail(String(a)))}async init(){await this.library.load((e,t)=>{H("loadingBar").style.width=`${e/t*100}%`,H("loadingText").textContent=`Preparing models · ${e} / ${t}`}),this.actor=o_(this.library.character.scene),this.actor.scale.setScalar(.8),this.actor.traverse(e=>{e instanceof tt&&(e.castShadow=!1,e.receiveShadow=!0)}),this.scene.add(this.actor),this.mixer=new s_(this.actor);for(const e of this.library.character.animations)this.actions.set(e.name,this.mixer.clipAction(e));this.animate("Idle"),this.actorYaw=Math.PI,this.actor.rotation.y=Math.PI,await this.session.init(),this.busy=!1,H("enter").disabled=!1,H("enter").innerHTML=`Enter ${Gt.find(e=>e.id===this.data.scene).name} <span>→</span>`,H("loadingText").textContent="Your next small adventure is ready",this.last=performance.now(),requestAnimationFrame(e=>this.frame(e)),setInterval(()=>{this.started&&!this.busy&&this.dirty&&(this.dirty=!1,this.session.save().catch(()=>{}))},2500),document.addEventListener("visibilitychange",()=>{document.hidden&&this.started&&this.session.save().catch(()=>{})}),addEventListener("blur",()=>{this.started&&this.session.save().catch(()=>{})}),new URLSearchParams(location.search).get("test")==="1"&&Object.assign(window,{adventure:{game:this,session:this.session,ready:!0,stats:()=>this.stats(),thumbnail:e=>Ix(this.renderer,this.library,e),snapshot:()=>this.snapshot(),view:e=>this.qaView(e)}})}fail(e){H("fatal").hidden=!1,H("fatal").innerHTML="<h2>The adventure could not continue</h2><p></p><button>Reload preview</button>",H("fatal").querySelector("p").textContent=e,H("fatal").querySelector("button").onclick=()=>location.reload(),H("welcome").hidden=!0,console.error(e)}enabled(){return this.started&&!this.busy&&!this.modalOpen&&!document.hidden}snapshot(){return to(this.data,{x:this.player.x,z:this.player.z,yaw:this.cameraYaw,pitch:this.cameraPitch})}apply(e){var a;const t=Yi(e),n=t.scene==="vale"?new si(this.library,t.layout===4?4:3,(a=t.doors)==null?void 0:a.lodge):new Uh(this.library,t.scene,t.layout),i=this.landscape;this.landscape=n,this.data=t,this.scene.add(n.group),i==null||i.dispose(),this.player.x=e.player.x,this.player.z=e.player.z,this.cameraYaw=e.player.yaw,this.cameraPitch=Pn.clamp(e.player.pitch,.18,1.1),this.velocity.set(0,0),this.cancelEdit(),this.history=[],this.redoHistory=[],this.renderObjects(),this.safeSpawn(),this.player.y=fn(this.player.x,this.player.z,this.data.scene,this.data.layout),this.actor.position.set(this.player.x,this.player.y,this.player.z),this.contactShadow.position.set(this.player.x,this.player.y+.025,this.player.z),this.cameraPosition.set(0,0,0),this.debugCamera=!1;const r=Gt.find(o=>o.id===t.scene);H("placeName").textContent=r.name,H("placeTag").textContent=r.tag,this.countDiscoveries(),this.dirty=!1,this.sun.shadow.needsUpdate=!0}safeSpawn(){const e=(r,a)=>!ln(r,a,this.obstacles())&&!Hn(r,a,this.data.scene)&&zn(r,a,this.data.scene);if(e(this.player.x,this.player.z))return;const t={x:this.player.x,z:this.player.z},n=Gt.find(r=>r.id===this.data.scene).spawn,i=La(t,e)||La(n,e,32);i&&(Object.assign(this.player,i),this.toast("Moved to the nearest clear ground"))}travelTo(e){if(this.busy)return;this.cancelEdit();const n=La(e,(i,r)=>zn(i,r,this.data.scene,1)&&!Hn(i,r,this.data.scene)&&!ln(i,r,this.obstacles(),.42),14);if(!n){this.toast("That place is blocked. Clear a little space before travelling there.");return}Object.assign(this.player,n),this.player.y=fn(n.x,n.z,this.data.scene,this.data.layout),this.velocity.set(0,0),this.actor.position.set(this.player.x,this.player.y,this.player.z),this.controls.clear(),this.animate("Idle"),this.cameraPosition.set(0,0,0),this.debugCamera=!1,this.dirty=!0,this.closeWorldMap(),this.cameraUpdate(1/60),this.toast("Arrived at "+e.name)}refreshMap(){if(!this.worldMap||!this.landscape)return;const e=$_(this.data.scene,this.landscape);for(const t of this.data.objects){const n=this.userRoots.get(t.id);if(n&&t.asset.startsWith("building_")){const i=this.objectBox(n,t.asset);i&&e.buildings.push({...i,name:t.asset})}}this.worldMap.setWorld(e)}openWorldMap(){var t;if(this.busy||!this.started)return;this.closeModal(),this.cancelEdit(),this.modalOpen=!0,this.controls.clear(),H("mapOverlay").hidden=!1,H("mapTitle").textContent=Gt.find(n=>n.id===this.data.scene).name;const e=H("mapDestination");e.innerHTML='<option value="">Travel to…</option>';for(const n of((t=this.worldMap.data)==null?void 0:t.destinations)||[]){const i=document.createElement("option");i.value=n.id,i.textContent=n.name,e.append(i)}this.worldMap.show()}closeWorldMap(){H("mapOverlay").hidden=!0,this.worldMap.hide(),this.modalOpen=!1,this.controls.clear(),H("view").focus()}objectBox(e,t){var i;if(((i=Ps.get(t))==null?void 0:i.solid)===!1||t.startsWith("flower")||t.startsWith("grass")||t==="lily-small")return null;e.updateMatrixWorld(!0);const n=new yt().setFromObject(e);if(t.startsWith("tree")){const r=e.position;return{minX:r.x-.22,maxX:r.x+.22,minZ:r.z-.22,maxZ:r.z+.22,height:n.max.y}}return{minX:n.min.x+.08,maxX:n.max.x-.08,minZ:n.min.z+.08,maxZ:n.max.z-.08,height:n.max.y}}rebuildObstacles(){var t;this.ghostValidation="";const e=[];for(const n of this.data.objects){const i=this.userRoots.get(n.id);if(i){const r=this.objectBox(i,n.asset);r&&e.push({...r,ownerId:n.id})}}this.collisionCache.replace(((t=this.landscape)==null?void 0:t.obstacles)||[],e)}obstacles(){return this.collisionCache.view(this.moving)}renderObjects(){for(const e of this.userRoots.values())e.removeFromParent();this.userRoots.clear();for(const e of this.data.objects){const t=this.library.create(e.asset,e.scale);t.position.set(e.x,fn(e.x,e.z,this.data.scene,this.data.layout),e.z),t.rotation.y=e.yaw,t.userData.placementId=e.id,this.userGroup.add(t),this.userRoots.set(e.id,t)}this.rebuildObstacles(),this.sun.shadow.needsUpdate=!0,this.refreshSelection(),this.refreshMap()}animate(e){var n;if(this.currentAnimation===e)return;const t=this.actions.get(e);t&&((n=this.actions.get(this.currentAnimation))==null||n.fadeOut(.24),t.reset().fadeIn(.24).play(),this.currentAnimation=e)}update(e,t=this.controls.movement()){var p,y;if(!this.enabled()||this.debugCamera){(p=this.mixer)==null||p.update(e);return}const n=Math.hypot(t.x,t.z),i=t.run?6:3.05,r=Math.max(1,n),a=Math.sin(this.cameraYaw),o=Math.cos(this.cameraYaw),l=(t.x/r*o+t.z/r*a)*i,c=(-t.x/r*a+t.z/r*o)*i;this.velocity.lerp(new ke(l,c),1-Math.exp(-e*11)),this.velocity.length()<.025&&this.velocity.set(0,0),this.landscape instanceof si&&this.landscape.updateLodge(e,this.player)&&(this.rebuildObstacles(),this.sun.shadow.needsUpdate=!0);const h=this.player.x,d=this.player.z,u=this.obstacles(),f=Math.ceil(e/(1/60)),g=e/f;for(let x=0;x<f;x++){const b=this.velocity.x*g,L=this.velocity.y*g,A=(T,z)=>zn(T,z,this.data.scene)&&!Hn(T,z,this.data.scene)&&!ln(T,z,u)&&Math.abs(fn(T,z,this.data.scene,this.data.layout)-this.player.y)<.5;A(this.player.x+b,this.player.z)&&(this.player.x+=b),A(this.player.x,this.player.z+L)&&(this.player.z+=L),this.player.y=fn(this.player.x,this.player.z,this.data.scene,this.data.layout)}this.actor.position.set(this.player.x,this.player.y,this.player.z),this.contactShadow.position.set(this.player.x,this.player.y+.025,this.player.z);const _=Math.hypot(this.player.x-h,this.player.z-d)/Math.max(e,1e-5),m=_>.12;if(m){const x=Math.atan2(this.velocity.x,this.velocity.y),b=Math.atan2(Math.sin(x-this.actorYaw),Math.cos(x-this.actorYaw));this.actorYaw+=b*(1-Math.exp(-e*13)),this.actor.rotation.y=this.actorYaw,this.dirty=!0}this.animate(m?t.run?"Running_A":"Walking_A":"Idle"),(y=this.actions.get("Walking_A"))==null||y.setEffectiveTimeScale(Math.max(.7,_/3.05)),this.mixer.update(e),this.pending&&(!this.selection||this.moving)&&this.updateGhost()}cameraUpdate(e){if(this.debugCamera)return;const t=this.landscape instanceof si?this.landscape.lodge:void 0,n=!!(t!=null&&t.inside(this.player));t==null||t.setCutaway(this.player,this.cameraYaw);const i=n?Math.max(this.cameraPitch,.78):this.cameraPitch,r=new R(this.player.x,this.player.y+1.35,this.player.z),a=new R(Math.sin(this.cameraYaw)*Math.cos(i),Math.sin(i),Math.cos(this.cameraYaw)*Math.cos(i)).multiplyScalar(this.distance),o=r.clone().add(a),l=this.obstacles();n&&this.interiorBodySource!==l&&(this.interiorBodySource=l,this.interiorCameraBodies=l.filter(p=>{var y,x;return!((y=p.name)!=null&&y.startsWith("lodge"))&&!((x=p.name)!=null&&x.startsWith("furniture-"))}));const c=n?this.interiorCameraBodies:l,h=t&&!n?t.exteriorCameraBodies:[],d=Math.min(_r(r,a,c),_r(r,a,h));o.copy(r).addScaledVector(a,d),o.y=Math.max(o.y,fn(o.x,o.z,this.data.scene,this.data.layout)+.45),this.cameraPosition.lengthSq()===0?this.cameraPosition.copy(o):this.cameraPosition.lerp(o,1-Math.exp(-e*(d<1?30:7)));const u=this.cameraPosition.clone().sub(r),f=Math.min(_r(r,u,c),_r(r,u,h));f<1&&this.cameraPosition.copy(r).addScaledVector(u,f),this.camera.position.copy(this.cameraPosition),this.camera.lookAt(r),this.actor.visible=this.camera.position.distanceTo(r)>1.1;const g=this.sun.target.position,_=Math.round(this.player.x/16)*16,m=Math.round(this.player.z/16)*16;(g.x!==_||g.z!==m)&&(g.set(_,0,m),this.sun.shadow.needsUpdate=!0),this.sun.position.copy(g).add(new R(-30,55,30)),H("compass").style.transform=`rotate(${-this.cameraYaw}rad)`}renderScene(){this.landscape instanceof si&&this.landscape.updateVisibility(this.camera,this.scene.fog.far,!this.renderer.shadowMap.enabled),this.renderer.render(this.scene,this.camera)}frame(e){const t=(e-this.last)/1e3,n=Math.min(.05,t);this.last=e,document.hidden||(this.controls.pollGamepad(n),this.modalOpen||(this.update(n),this.cameraUpdate(n),this.renderScene()),this.worldMap.update({x:this.player.x,z:this.player.z,yaw:this.actorYaw},e),this.modalOpen?(this.frames=0,this.statsTime=e):(this.fpsSamples.push(t*1e3),this.fpsSamples.length>240&&this.fpsSamples.shift(),this.frames++,e-this.statsTime>1e3&&(this.fps=Math.round(this.frames*1e3/(e-this.statsTime)),this.frames=0,this.statsTime=e,H("stats").hidden||(H("stats").textContent=JSON.stringify(this.stats(),null,2)))),e-this.contextFrame>120&&(this.contextFrame=e,this.updateContext())),requestAnimationFrame(i=>this.frame(i))}updateContext(){var e;if(!this.enabled()||this.pending){H("context").hidden=!0;return}this.near=this.landscape.landmarks.filter(t=>Math.hypot(t.x-this.player.x,t.z-this.player.z)<(t.action?2.8:4.5)).sort((t,n)=>Math.hypot(t.x-this.player.x,t.z-this.player.z)-Math.hypot(n.x-this.player.x,n.z-this.player.z))[0]||null,H("context").hidden=!this.near,this.near&&(H("contextLabel").textContent=this.near.name,H("interact").innerHTML=this.near.action==="door"?`${this.landscape instanceof si&&((e=this.landscape.lodge)!=null&&e.open)?"Close":"Open"} door <kbd>E</kbd>`:`${this.data.discoveries.includes(this.near.id)?"Read":"Discover"} <kbd>E</kbd>`)}discover(){if(!this.near)return;const e=this.near;if(e.action==="door"&&this.landscape instanceof si&&this.landscape.lodge){const t=this.landscape.lodge.toggle(this.player,this.obstacles().filter(n=>!!n.ownerId));if(t){this.toast(t);return}this.data.doors={lodge:this.landscape.lodge.open},this.dirty=!0,this.rebuildObstacles(),this.sun.shadow.needsUpdate=!0,this.updateContext();return}this.data.discoveries.includes(e.id)||(this.data.discoveries.push(e.id),this.dirty=!0,this.countDiscoveries()),this.openModal(`<div class="eyebrow">A LITTLE DISCOVERY</div><h1 id="modalTitle">${e.name}</h1><p>${e.description}</p><button id="backToWorld" class="primary">Keep exploring →</button>`),H("backToWorld").onclick=()=>this.closeModal(),this.animate("Interact")}countDiscoveries(){H("discovered").textContent=`${this.data.discoveries.length} / ${this.landscape.landmarks.filter(e=>!e.action).length}`}saveStatus(e,t=!1){H("saveState").textContent=(t?"! ":"◦ ")+e,H("saveState").classList.toggle("saveError",t),t?H("saveState").onclick=()=>this.menu():H("saveState").onclick=null}toast(e){clearTimeout(this.toastTimer),H("toast").textContent=e,H("toast").hidden=!1,this.toastTimer=window.setTimeout(()=>H("toast").hidden=!0,3500)}resize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight),this.worldMap.resize(),this.started&&!this.busy&&this.modalOpen&&!this.worldMap.open&&this.renderScene()}bind(){H("minimap").onclick=()=>this.openWorldMap(),H("mapClose").onclick=()=>this.closeWorldMap(),H("mapPlus").onclick=()=>this.worldMap.zoom(1.35),H("mapMinus").onclick=()=>this.worldMap.zoom(1/1.35),H("mapFit").onclick=()=>this.worldMap.fit(),H("mapHome").onclick=()=>{const e=Gt.find(t=>t.id===this.data.scene);this.travelTo({id:"home",name:e.name,...e.spawn})},H("mapDestination").onchange=e=>{var n;const t=(n=this.worldMap.data)==null?void 0:n.destinations.find(i=>i.id===e.target.value);t&&this.travelTo(t)},H("enter").onclick=()=>{this.started=!0,document.body.classList.add("playing"),H("welcome").hidden=!0,H("view").focus(),this.toast("The world is yours to wander. Follow the old road.")},H("places").onclick=()=>void this.places(),H("menu").onclick=()=>this.menu(),H("build").onclick=()=>this.catalogue(),H("interact").onclick=()=>this.discover(),H("run").onclick=()=>{this.controls.running=!this.controls.running,H("run").setAttribute("aria-pressed",String(this.controls.running)),this.storePreferences()},H("editCancel").onclick=()=>this.cancelEdit(),H("editRotate").onclick=()=>{if(this.pending)this.pending.yaw+=Math.PI/4,this.ghost.rotation.y=this.pending.yaw,this.validateGhost();else if(this.selection){const e=this.data.objects.find(r=>r.id===this.selection),t=this.userRoots.get(e.id),n=e.yaw+Math.PI/4;t.rotation.y=n,t.updateMatrixWorld(!0),this.moving=e.id;const i=this.placementProblem({...e,yaw:n},t);this.moving=null,t.rotation.y=e.yaw,t.updateMatrixWorld(!0),i?this.toast(i):(this.checkpoint(),e.yaw=n,t.rotation.y=n,this.rebuildObstacles(),this.refreshSelection(),this.refreshMap(),this.sun.shadow.needsUpdate=!0,this.dirty=!0)}},H("editConfirm").onclick=()=>this.confirmEdit(),H("editRemove").onclick=()=>this.removeSelected(),H("editMove").onclick=()=>{this.pending&&this.placementAnchor?(this.placementAnchor=null,H("editMove").hidden=!0,this.updateGhost()):this.moveSelected()}}key(e){if(!this.busy){if(!this.started){e==="Enter"&&!H("enter").disabled&&H("enter").click();return}if(e==="PadMenu"){this.worldMap.open?this.closeWorldMap():this.modalOpen?this.closeModal():this.menu();return}if(e==="PadMap"){this.worldMap.open?this.closeWorldMap():this.openWorldMap();return}if(e==="PadRun"){this.enabled()&&H("run").click();return}if(e.startsWith("Pad")&&["PadUp","PadDown","PadLeft","PadRight"].includes(e)){this.padFocus(e);return}if(e==="Enter"){if(!this.started){H("enter").disabled||H("enter").click();return}const t=document.activeElement;if(this.modalOpen||t!=null&&t.closest("#editBar")){t instanceof HTMLSelectElement?t.value&&t.dispatchEvent(new Event("change",{bubbles:!0})):(t instanceof HTMLButtonElement||t.tagName==="SUMMARY")&&!t.disabled&&!t.hidden&&t.click();return}this.pending?this.confirmEdit():this.near?this.discover():this.selection?this.moveSelected():this.tap(innerWidth/2,innerHeight/2);return}if(e==="Escape"&&this.worldMap.open){this.closeWorldMap();return}if(e==="KeyM"){this.openWorldMap();return}e==="Escape"&&(this.modalOpen?this.closeModal():this.pending||this.selection?this.cancelEdit():this.menu()),e==="KeyE"&&this.discover(),e==="KeyB"&&this.catalogue(),e==="KeyR"&&H("editRotate").click(),e==="KeyZ"&&this.undo()}}padFocus(e){const t=this.worldMap.open?H("mapOverlay"):this.modalOpen?H("modal"):H("editBar").hidden?null:H("editBar");if(!t)return;const n=document.activeElement;if(n instanceof HTMLSelectElement&&(e==="PadLeft"||e==="PadRight")){const o=n.options.length;n.selectedIndex=(n.selectedIndex+(e==="PadRight"?1:-1)+o)%o;return}const i=[...t.querySelectorAll("button,select,input,textarea,summary")].filter(o=>o.offsetParent!==null&&!o.hasAttribute("disabled"));if(!i.length)return;const r=i.indexOf(n),a=e==="PadUp"||e==="PadLeft"?-1:1;i[r<0?0:(r+a+i.length)%i.length].focus()}openModal(e){var t;this.worldMap.open&&this.closeWorldMap(),this.modalOpen=!0,this.controls.clear(),this.velocity.set(0,0),this.animate("Idle"),H("modal").innerHTML=`<section><button class="closeModal" aria-label="Close dialog">✕</button>${e}</section>`,H("modal").hidden=!1,H("modal").querySelector(".closeModal").onclick=()=>this.closeModal(),(t=H("modal").querySelector("button:not(.closeModal),input,select"))==null||t.focus()}closeModal(){this.modalOpen=!1,H("modal").hidden=!0,this.controls.clear(),H("view").focus()}async places(){var e;this.cancelEdit();try{await this.session.save();const t=(await this.session.store.list()).sort((n,i)=>i.updated-n.updated);this.openModal(`<div class="eyebrow">TAKE THE LONG WAY HOME</div><h1 id="modalTitle">Where shall we go?</h1><p>One valley. Take the old road from village to forest and meadow.</p><div class="placeCards">${Gt.filter(n=>n.id==="vale").map(n=>`<button class="placeCard ${n.id}" data-scene="${n.id}"><span class="sceneIcon">${n.icon}</span><small>${n.tag}</small><strong>${n.name}</strong><span>${n.description}</span><b>Explore →</b></button>`).join("")}</div><div class="savedWorlds"><h2>Your saved worlds & earlier previews</h2><div id="savedRows"></div></div><details class="newPlaces"><summary>Start a fresh place</summary><p>Your saved worlds & earlier previews stay here. Fresh places use the latest scenery.</p><div id="newPlaceButtons"></div></details><p class="finePrint">Earlier independent places keep their original scenery and saves. Original BlockWorld worlds remain in the original game.</p>`);for(const n of Gt.filter(i=>i.id==="vale")){const i=H("modal").querySelector(`[data-scene="${n.id}"]`);i.onclick=()=>{(async()=>{const r=t.find(a=>{try{return Yi(JSON.parse(a.current.json)).scene===n.id}catch{return!1}});r?await this.session.open(r.id):await this.session.create(n.id),this.closeModal(),this.toast(`Welcome to ${n.name}`)})().catch(r=>this.toast(String(r)))}}for(const n of Gt.filter(i=>i.id==="vale")){const i=document.createElement("button");i.textContent="New "+n.name,i.dataset.newScene=n.id,i.onclick=()=>void this.session.create(n.id).then(()=>{this.closeModal(),this.toast("A fresh "+n.name+" is ready")}).catch(r=>this.toast(String(r))),H("newPlaceButtons").append(i)}for(const n of t){const i=document.createElement("button");i.textContent=(n.id===((e=this.session.current)==null?void 0:e.id)?"● ":"")+n.name,i.onclick=()=>void this.session.open(n.id).then(()=>this.closeModal()).catch(r=>this.toast(String(r))),H("savedRows").append(i)}}catch(t){this.toast(String(t))}}menu(){this.openModal('<div class="eyebrow">BLOCKWORLD ADVENTURES</div><h1 id="modalTitle">Make yourself at home.</h1><p>Walk with WASD or the left joystick. Drag the world to turn the camera. Hold Shift or tap Run to move faster. Scroll or pinch to change the camera distance.</p><div class="menuGrid"><button id="resume" class="primary">Back to the world →</button><button id="home">Return to a clear starting point</button><button id="backup">Export backup</button><label class="fileButton">Import backup<input id="import" type="file" accept=".bw2,.json,application/json"></label><button id="recover">Save a new copy</button><button id="undo">Undo last edit</button><button id="redo">Redo edit</button><button id="performance">Show performance</button></div><label class="qualityLabel">Graphics <select id="quality"><option value="gentle">Gentle · fewer pixels, no shadows</option><option value="balanced">Balanced · soft shadows</option><option value="high">High · sharper image</option></select></label><details id="controllerHelp"><summary>Xbox-style controller controls</summary><p>Press a controller button after your browser connects it. Left stick walks; right stick looks. A interacts, selects or places; B goes back. X opens Build; Y interacts; right bumper rotates; left-stick click toggles Run. View opens the map and Menu opens this menu.</p><p>Use the D-pad to move between menu or building buttons, then A to choose. On the map, left stick pans and right stick up/down zooms. The Travel to list changes with D-pad left/right; A travels. Release sticks and buttons after opening a menu or reconnecting. Touch and keyboard remain available.</p></details><details><summary>Backup text and asset credits</summary><p>If a download is unavailable, copy this text to a file and keep it safe.</p><textarea id="backupText" readonly aria-label="Backup JSON text"></textarea><button id="copy">Copy backup text</button><p>Village & character: Kay Lousberg / KayKit. Nature & furniture: Kenney. Meadow Lodge modules: Quaternius (Standard FREE). CC0 public domain. <a href="adventures/PROVENANCE.md" target="_blank">Source and licence details</a>.</p><p>Development preview 06. The Meadow Lodge has an opening door and furnished room; original prefab houses remain closed. Physical tablet and iPhone performance has not been tested.</p></details><p id="menuError" role="alert"></p>'),H("resume").onclick=()=>this.closeModal(),H("home").onclick=()=>{const e=Gt.find(t=>t.id===this.data.scene);this.closeModal(),this.travelTo({id:"home",name:e.name,...e.spawn})},H("backup").onclick=()=>this.exportBackup(),H("recover").onclick=()=>void this.session.recover().then(()=>this.toast("A separate recovery copy was saved")).catch(e=>H("menuError").textContent=String(e)),H("undo").onclick=()=>this.undo(),H("redo").onclick=()=>this.redo(),H("performance").onclick=()=>{H("stats").hidden=!H("stats").hidden,this.closeModal()},H("quality").value=this.quality,H("quality").onchange=e=>this.setQuality(e.target.value),H("import").onchange=()=>{(async()=>{var t;const e=(t=H("import").files)==null?void 0:t[0];if(e){if(e.size>12e6)throw Error("Backup exceeds 12 MB");await this.session.import(await e.text()),this.closeModal(),this.toast("Imported as a separate saved adventure")}})().catch(e=>{H("menuError").textContent=String(e)})},H("copy").onclick=()=>{var n;const e=this.session.export();H("backupText").value=e;const t=()=>{H("backupText").select(),this.toast("Select and copy the backup text")};(n=navigator.clipboard)!=null&&n.writeText?navigator.clipboard.writeText(e).then(()=>this.toast("Backup text copied")).catch(t):t()}}exportBackup(){try{const e=this.session.export();H("backupText").value=e;const t=new Blob([e],{type:"application/json"}),n=URL.createObjectURL(t),i=document.createElement("a");i.href=n,i.download=`BlockWorld-Adventures-${this.data.scene}-preview04.bw2`,i.click(),setTimeout(()=>URL.revokeObjectURL(n),6e4),this.toast("Backup requested. The text is also available below.")}catch(e){this.toast(String(e))}}storePreferences(){Ux(this.preferenceStorage,{quality:this.quality,running:this.controls.running})}setQuality(e){var t;["gentle","balanced","high"].includes(e)&&this.quality!==e&&(this.quality=e,this.renderer.setPixelRatio(Math.min(devicePixelRatio,e==="gentle"?1:e==="high"?2:1.5)),this.renderer.shadowMap.enabled=e!=="gentle",this.sun.shadow.mapSize.set(e==="high"?2048:1024,e==="high"?2048:1024),(t=this.sun.shadow.map)==null||t.dispose(),this.sun.shadow.map=null,this.sun.shadow.needsUpdate=!0,this.renderer.setSize(innerWidth,innerHeight),this.started&&!this.busy&&this.modalOpen&&!this.worldMap.open&&this.renderScene(),this.storePreferences())}catalogue(){this.cancelEdit(),this.openModal(`<div class="eyebrow">A PLACE OF YOUR OWN</div><h1 id="modalTitle">What will you make?</h1><p>Choose something, tap nearby ground to position it, then choose Place.</p><div class="catalogueFilters" role="group" aria-label="Filter building assets">${["All",...new Set(no.map(e=>e.group))].map((e,t)=>`<button data-category="${e}" aria-pressed="${t===0}">${e}</button>`).join("")}</div><div class="assetGrid">${no.map(e=>`<button data-asset="${e.id}" data-group="${e.group}" aria-label="Place ${e.name}"><img src="./adventures/thumbnails/${e.id}.png" alt="" loading="lazy" width="256" height="192"><span class="assetLabel">${e.name}</span></button>`).join("")}</div><p class="finePrint">Walk or turn to aim ahead until you choose ground. Tap your own object to move, rotate or remove it.</p>`);for(const e of H("modal").querySelectorAll("[data-category]"))e.onclick=()=>{for(const t of H("modal").querySelectorAll("[data-category]"))t.setAttribute("aria-pressed",String(t===e));for(const t of H("modal").querySelectorAll("[data-asset]"))t.hidden=e.dataset.category!=="All"&&t.dataset.group!==e.dataset.category};for(const e of H("modal").querySelectorAll("[data-asset]"))e.onclick=()=>{this.closeModal(),this.beginPlacement(e.dataset.asset)}}assetName(e){return Px(e)||e.replace("building_","").replace("home_A","Cottage").replace("home_B","Tall cottage").replace(/-/g," ").replace(/_/g," ").replace(/a$/,"").replace(/\b\w/g,t=>t.toUpperCase())}beginPlacement(e,t){if(this.cancelEdit(),!t&&this.data.objects.length>=200){this.toast("This place has 200 objects. Remove one before adding another.");return}this.pending=t?{...t}:{id:crypto.randomUUID(),asset:e,x:0,z:0,yaw:0,scale:Ps.get(e).scale},this.moving=(t==null?void 0:t.id)||null,t&&(this.userRoots.get(t.id).visible=!1),this.ghost=this.library.create(e,this.pending.scale),this.ghost.traverse(n=>{if(n instanceof tt){const i=Array.isArray(n.material)?n.material:[n.material];this.originalMaterials.set(n,n.material);const r=i.map(a=>{const o=a.clone();return o.transparent=!0,o.opacity=.55,o.depthWrite=!1,o});n.material=Array.isArray(n.material)?r:r[0]}}),this.scene.add(this.ghost),this.selection=null,H("editBar").hidden=!1,document.body.classList.add("editing"),H("editName").textContent=this.assetName(e),H("editMove").hidden=!0,H("editRemove").hidden=!0,H("editConfirm").hidden=!1,this.updateGhost(),this.toast("Tap nearby ground to position · Place to keep it")}updateGhost(){var i,r;if(!this.pending||!this.ghost)return;const e=this.library.bounds.get(this.pending.asset),t=Math.hypot(e.max.x-e.min.x,e.max.z-e.min.z)*this.pending.scale/2,n=Math.max(this.pending.asset.startsWith("building")?9:this.pending.asset.startsWith("furniture-")?2.8:4.5,t+.9);this.pending.x=((i=this.placementAnchor)==null?void 0:i.x)??Math.round((this.player.x-Math.sin(this.cameraYaw)*n)*2)/2,this.pending.z=((r=this.placementAnchor)==null?void 0:r.z)??Math.round((this.player.z-Math.cos(this.cameraYaw)*n)*2)/2,this.ghost.position.set(this.pending.x,fn(this.pending.x,this.pending.z,this.data.scene,this.data.layout),this.pending.z),this.ghost.rotation.y=this.pending.yaw,this.validateGhost()}placementProblem(e,t){if(this.pending&&Math.hypot(e.x-this.player.x,e.z-this.player.z)>this.placementReach(e))return"Move closer to the object";if(!zn(e.x,e.z,this.data.scene,4))return"Keep inside the explored landscape";if(Hn(e.x,e.z,this.data.scene))return"Keep the water clear";if(this.landscape.nearPath(e.x,e.z,e.asset.startsWith("building")?4:1))return"Keep paths and entrances clear";const n=this.objectBox(t,e.asset);if(n){const i=Y_(n,t.position.y,{inside:(a,o)=>zn(a,o,this.data.scene,.1),water:(a,o)=>Hn(a,o,this.data.scene),path:(a,o)=>this.landscape.nearPath(a,o,.35),height:(a,o)=>fn(a,o,this.data.scene,this.data.layout)});if(i)return i;const r={...n,minX:n.minX-.3,maxX:n.maxX+.3,minZ:n.minZ-.3,maxZ:n.maxZ+.3};if(this.obstacles().some(a=>a.minX<r.maxX&&a.maxX>r.minX&&a.minZ<r.maxZ&&a.maxZ>r.minZ))return"Choose a clear spot";if(ln(this.player.x,this.player.z,[r],.55))return"Move away from the object"}return null}validateGhost(){if(!this.pending||!this.ghost)return;const e=[this.pending.id,this.pending.x,this.pending.z,this.pending.yaw,this.pending.scale,this.placementAnchor?this.player.x.toFixed(2):"",this.placementAnchor?this.player.z.toFixed(2):""].join(":");if(this.ghostValidation===e)return;this.ghostValidation=e,this.ghost.updateMatrixWorld(!0);const t=this.placementProblem(this.pending,this.ghost);H("editConfirm").disabled=!!t,H("editName").textContent=t||this.assetName(this.pending.asset),this.ghost.traverse(n=>{var i;if(n instanceof tt)for(const r of Array.isArray(n.material)?n.material:[n.material]){const a=r;(i=a.emissive)==null||i.set(t?10629152:1860669),a.emissiveIntensity=.25}})}confirmEdit(){if(!this.pending||!this.ghost)return;const e=this.placementProblem(this.pending,this.ghost);if(e){this.toast(e);return}this.checkpoint(),this.moving&&(this.data.objects=this.data.objects.filter(t=>t.id!==this.moving)),this.data.objects.push({...this.pending}),this.cancelEdit(),this.renderObjects(),this.dirty=!0,this.toast("Placed. Tap your object to edit it.")}cancelEdit(){this.ghost&&(this.ghost.removeFromParent(),this.ghost.traverse(e=>{if(e instanceof tt)for(const t of Array.isArray(e.material)?e.material:[e.material])t.dispose()})),this.ghost=null,this.ghostValidation="",this.originalMaterials.clear(),this.moving&&(this.userRoots.get(this.moving).visible=!0),this.pending=null,this.placementAnchor=null,H("editMove").setAttribute("aria-label","Move selected object"),H("editMove").querySelector("span").textContent="Move",this.moving=null,this.selection=null,this.selectionOutline.visible=!1,document.body.classList.remove("editing"),H("editBar").hidden=!0}tap(e,t){const n=new r_;if(n.setFromCamera(new ke(e/innerWidth*2-1,1-t/innerHeight*2),this.camera),this.pending){this.targetPlacement(n.ray);return}const i=n.intersectObjects([...this.userRoots.values()],!0)[0];if(i&&this.pickOccluded(n.ray,i.distance,!1)){this.cancelEdit();return}if(!i){this.cancelEdit();return}let r=i.object;for(;r&&!r.userData.placementId;)r=r.parent;r&&(this.selection=r.userData.placementId,this.refreshSelection(),document.body.classList.add("editing"),H("editBar").hidden=!1,H("editName").textContent=this.assetName(this.data.objects.find(a=>a.id===this.selection).asset),H("editMove").hidden=!1,H("editRemove").hidden=!1,H("editConfirm").hidden=!0)}placementReach(e){const t=this.library.bounds.get(e.asset),n=Math.hypot(t.max.x-t.min.x,t.max.z-t.min.z)*e.scale/2;return Math.max(e.asset.startsWith("building")?18:8,n+4)}pickOccluded(e,t,n){const i=this.landscape instanceof si?this.landscape.lodge:void 0,r=n?this.obstacles():this.landscape.obstacles,a=o=>i&&!i.isVisibleOccluder(o)?!1:Vh(e.origin,e.direction,o,.01)<t-.05;return r.some(a)||!!(i!=null&&i.exteriorCameraBodies.some(a))}targetPlacement(e){if(!this.pending)return;const t=Fx(e.origin,e.direction,(r,a)=>fn(r,a,this.data.scene,this.data.layout));if(!t||Math.hypot(t.x-this.player.x,t.z-this.player.z)>this.placementReach(this.pending)){this.toast("Choose nearby ground in view");return}const n=e.origin.distanceTo(new R(t.x,t.y,t.z));if(this.pickOccluded(e,n,!0)){this.toast("Choose clear ground you can see");return}const i=this.pending.asset.startsWith("furniture-")?4:2;this.placementAnchor={x:Math.round(t.x*i)/i,z:Math.round(t.z*i)/i},H("editMove").hidden=!1,H("editMove").setAttribute("aria-label","Move object in front of me"),H("editMove").querySelector("span").textContent="Aim ahead",this.updateGhost()}refreshSelection(){const e=this.selection?this.userRoots.get(this.selection):null;this.selectionOutline.visible=!!e,e&&(e.updateMatrixWorld(!0),this.selectionOutline.box.setFromObject(e).expandByScalar(.04))}moveSelected(){if(!this.selection)return;const e=this.data.objects.find(t=>t.id===this.selection);this.beginPlacement(e.asset,e)}removeSelected(){this.selection&&(this.checkpoint(),this.data.objects=this.data.objects.filter(e=>e.id!==this.selection),this.cancelEdit(),this.renderObjects(),this.dirty=!0,this.toast("Object removed. Undo is available in the menu."))}checkpoint(){this.history.push(structuredClone(this.data.objects)),this.history.length>30&&this.history.shift(),this.redoHistory=[]}undo(){const e=this.history.pop();if(!e){this.toast("Nothing to undo");return}this.redoHistory.push(structuredClone(this.data.objects)),this.data.objects=e,this.cancelEdit(),this.renderObjects(),this.safeSpawn(),this.dirty=!0,this.toast("Last edit undone")}redo(){const e=this.redoHistory.pop();if(!e){this.toast("Nothing to redo");return}this.history.push(structuredClone(this.data.objects)),this.data.objects=e,this.cancelEdit(),this.renderObjects(),this.safeSpawn(),this.dirty=!0}stats(){var n;const e=this.renderer.info,t=[...this.fpsSamples].sort((i,r)=>i-r);return{fps:this.fps,frameP95Ms:+(t[Math.floor(t.length*.95)]||0).toFixed(1),drawCalls:e.render.calls,triangles:e.render.triangles,geometries:e.memory.geometries,textures:e.memory.textures,pixelRatio:this.renderer.getPixelRatio(),scene:this.data.scene,natureInstances:(n=this.landscape)==null?void 0:n.instances,objects:this.data.objects.length,quality:this.quality}}qaView(e){this.started=!0,document.body.classList.add("playing"),H("welcome").hidden=!0,this.closeModal(),this.actor.visible=!0;const t={centre:{position:[-17,18,30],target:[0,2,-3]},street:{position:[-19,7,21],target:[-16,3,-12]},forest:{position:[44,8,24],target:[56,2,4]},bridge:{position:[23,5,16],target:[32,0,8]},entrance:{position:[-1,5,-12],target:[0,3,-23]},overview:{position:[-55,65,65],target:[0,0,0]},player:{position:[this.player.x+1,6,this.player.z+11],target:[this.player.x,1.5,this.player.z-2]}};if(this.data.scene==="vale"){for(const i of["centre","street","entrance","overview","bridge"])t[i].position[0]-=105,t[i].target[0]-=105;Object.assign(t,{lodge:{position:[128,5,-29],target:[128,2,-42]},lodgeRoom:{position:[128,3.2,-39.4],target:[128,1.1,-43]},woodland:{position:[-17,18,30],target:[0,2,-3]},meadow:{position:[88,18,30],target:[105,2,-3]},hamlet:{position:[62,14,73],target:[79,2,52]},road:{position:[-57,6,30],target:[-37,1,13]},campScale:{position:[-5,4,-10],target:[-9,1.5,-17]}})}const n=t[e]||t.centre;return this.debugCamera=!0,this.camera.position.fromArray(n.position),this.camera.lookAt(new R().fromArray(n.target)),this.renderScene(),this.stats()}}try{new Bx}catch(s){H("fatal").hidden=!1,H("fatal").textContent=`Could not start the preview: ${String(s)}`,console.error(s)}
