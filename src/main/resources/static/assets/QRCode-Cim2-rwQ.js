import{az as A,R as $,bl as de,bm as fe,M as me,b as z,u as ge,ar as pe,p as j,q as Ee,K as we,j as w,N as Ce}from"./index-BExaS2Py.js";import{i as Me,M as Re}from"./MenuBar-Chc4_1cm.js";import{L as ve,m as Ne}from"./LoadingScreen-Ctspyb8t.js";import{N as ye}from"./NotificationIcon-66PNowqj.js";import"./index-A_Z1ZYEd.js";import"./index-CLXYYP3z.js";import"./index-Bs-wkye_.js";var Ie=Object.defineProperty,F=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,W=(d,a,o)=>a in d?Ie(d,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):d[a]=o,U=(d,a)=>{for(var o in a||(a={}))K.call(a,o)&&W(d,o,a[o]);if(F)for(var o of F(a))X.call(a,o)&&W(d,o,a[o]);return d},Q=(d,a)=>{var o={};for(var c in d)K.call(d,c)&&a.indexOf(c)<0&&(o[c]=d[c]);if(d!=null&&F)for(var c of F(d))a.indexOf(c)<0&&X.call(d,c)&&(o[c]=d[c]);return o};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var O;(d=>{const a=class p{constructor(e,r,t,s){if(this.version=e,this.errorCorrectionLevel=r,this.modules=[],this.isFunction=[],e<p.MIN_VERSION||e>p.MAX_VERSION)throw new RangeError("Version value out of range");if(s<-1||s>7)throw new RangeError("Mask value out of range");this.size=e*4+17;let n=[];for(let i=0;i<this.size;i++)n.push(!1);for(let i=0;i<this.size;i++)this.modules.push(n.slice()),this.isFunction.push(n.slice());this.drawFunctionPatterns();const l=this.addEccAndInterleave(t);if(this.drawCodewords(l),s==-1){let i=1e9;for(let g=0;g<8;g++){this.applyMask(g),this.drawFormatBits(g);const h=this.getPenaltyScore();h<i&&(s=g,i=h),this.applyMask(g)}}u(0<=s&&s<=7),this.mask=s,this.applyMask(s),this.drawFormatBits(s),this.isFunction=[]}static encodeText(e,r){const t=d.QrSegment.makeSegments(e);return p.encodeSegments(t,r)}static encodeBinary(e,r){const t=d.QrSegment.makeBytes(e);return p.encodeSegments([t],r)}static encodeSegments(e,r,t=1,s=40,n=-1,l=!0){if(!(p.MIN_VERSION<=t&&t<=s&&s<=p.MAX_VERSION)||n<-1||n>7)throw new RangeError("Invalid value");let i,g;for(i=t;;i++){const m=p.getNumDataCodewords(i,r)*8,M=v.getTotalBits(e,i);if(M<=m){g=M;break}if(i>=s)throw new RangeError("Data too long")}for(const m of[p.Ecc.MEDIUM,p.Ecc.QUARTILE,p.Ecc.HIGH])l&&g<=p.getNumDataCodewords(i,m)*8&&(r=m);let h=[];for(const m of e){o(m.mode.modeBits,4,h),o(m.numChars,m.mode.numCharCountBits(i),h);for(const M of m.getData())h.push(M)}u(h.length==g);const x=p.getNumDataCodewords(i,r)*8;u(h.length<=x),o(0,Math.min(4,x-h.length),h),o(0,(8-h.length%8)%8,h),u(h.length%8==0);for(let m=236;h.length<x;m^=253)o(m,8,h);let N=[];for(;N.length*8<h.length;)N.push(0);return h.forEach((m,M)=>N[M>>>3]|=m<<7-(M&7)),new p(i,r,N,n)}getModule(e,r){return 0<=e&&e<this.size&&0<=r&&r<this.size&&this.modules[r][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let t=0;t<this.size;t++)this.setFunctionModule(6,t,t%2==0),this.setFunctionModule(t,6,t%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),r=e.length;for(let t=0;t<r;t++)for(let s=0;s<r;s++)t==0&&s==0||t==0&&s==r-1||t==r-1&&s==0||this.drawAlignmentPattern(e[t],e[s]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const r=this.errorCorrectionLevel.formatBits<<3|e;let t=r;for(let n=0;n<10;n++)t=t<<1^(t>>>9)*1335;const s=(r<<10|t)^21522;u(s>>>15==0);for(let n=0;n<=5;n++)this.setFunctionModule(8,n,c(s,n));this.setFunctionModule(8,7,c(s,6)),this.setFunctionModule(8,8,c(s,7)),this.setFunctionModule(7,8,c(s,8));for(let n=9;n<15;n++)this.setFunctionModule(14-n,8,c(s,n));for(let n=0;n<8;n++)this.setFunctionModule(this.size-1-n,8,c(s,n));for(let n=8;n<15;n++)this.setFunctionModule(8,this.size-15+n,c(s,n));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;const r=this.version<<12|e;u(r>>>18==0);for(let t=0;t<18;t++){const s=c(r,t),n=this.size-11+t%3,l=Math.floor(t/3);this.setFunctionModule(n,l,s),this.setFunctionModule(l,n,s)}}drawFinderPattern(e,r){for(let t=-4;t<=4;t++)for(let s=-4;s<=4;s++){const n=Math.max(Math.abs(s),Math.abs(t)),l=e+s,i=r+t;0<=l&&l<this.size&&0<=i&&i<this.size&&this.setFunctionModule(l,i,n!=2&&n!=4)}}drawAlignmentPattern(e,r){for(let t=-2;t<=2;t++)for(let s=-2;s<=2;s++)this.setFunctionModule(e+s,r+t,Math.max(Math.abs(s),Math.abs(t))!=1)}setFunctionModule(e,r,t){this.modules[r][e]=t,this.isFunction[r][e]=!0}addEccAndInterleave(e){const r=this.version,t=this.errorCorrectionLevel;if(e.length!=p.getNumDataCodewords(r,t))throw new RangeError("Invalid argument");const s=p.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][r],n=p.ECC_CODEWORDS_PER_BLOCK[t.ordinal][r],l=Math.floor(p.getNumRawDataModules(r)/8),i=s-l%s,g=Math.floor(l/s);let h=[];const x=p.reedSolomonComputeDivisor(n);for(let m=0,M=0;m<s;m++){let E=e.slice(M,M+g-n+(m<i?0:1));M+=E.length;const I=p.reedSolomonComputeRemainder(E,x);m<i&&E.push(0),h.push(E.concat(I))}let N=[];for(let m=0;m<h[0].length;m++)h.forEach((M,E)=>{(m!=g-n||E>=i)&&N.push(M[m])});return u(N.length==l),N}drawCodewords(e){if(e.length!=Math.floor(p.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let r=0;for(let t=this.size-1;t>=1;t-=2){t==6&&(t=5);for(let s=0;s<this.size;s++)for(let n=0;n<2;n++){const l=t-n,g=(t+1&2)==0?this.size-1-s:s;!this.isFunction[g][l]&&r<e.length*8&&(this.modules[g][l]=c(e[r>>>3],7-(r&7)),r++)}}u(r==e.length*8)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let r=0;r<this.size;r++)for(let t=0;t<this.size;t++){let s;switch(e){case 0:s=(t+r)%2==0;break;case 1:s=r%2==0;break;case 2:s=t%3==0;break;case 3:s=(t+r)%3==0;break;case 4:s=(Math.floor(t/3)+Math.floor(r/2))%2==0;break;case 5:s=t*r%2+t*r%3==0;break;case 6:s=(t*r%2+t*r%3)%2==0;break;case 7:s=((t+r)%2+t*r%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[r][t]&&s&&(this.modules[r][t]=!this.modules[r][t])}}getPenaltyScore(){let e=0;for(let n=0;n<this.size;n++){let l=!1,i=0,g=[0,0,0,0,0,0,0];for(let h=0;h<this.size;h++)this.modules[n][h]==l?(i++,i==5?e+=p.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,g),l||(e+=this.finderPenaltyCountPatterns(g)*p.PENALTY_N3),l=this.modules[n][h],i=1);e+=this.finderPenaltyTerminateAndCount(l,i,g)*p.PENALTY_N3}for(let n=0;n<this.size;n++){let l=!1,i=0,g=[0,0,0,0,0,0,0];for(let h=0;h<this.size;h++)this.modules[h][n]==l?(i++,i==5?e+=p.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,g),l||(e+=this.finderPenaltyCountPatterns(g)*p.PENALTY_N3),l=this.modules[h][n],i=1);e+=this.finderPenaltyTerminateAndCount(l,i,g)*p.PENALTY_N3}for(let n=0;n<this.size-1;n++)for(let l=0;l<this.size-1;l++){const i=this.modules[n][l];i==this.modules[n][l+1]&&i==this.modules[n+1][l]&&i==this.modules[n+1][l+1]&&(e+=p.PENALTY_N2)}let r=0;for(const n of this.modules)r=n.reduce((l,i)=>l+(i?1:0),r);const t=this.size*this.size,s=Math.ceil(Math.abs(r*20-t*10)/t)-1;return u(0<=s&&s<=9),e+=s*p.PENALTY_N4,u(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(this.version==1)return[];{const e=Math.floor(this.version/7)+2,r=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2;let t=[6];for(let s=this.size-7;t.length<e;s-=r)t.splice(1,0,s);return t}}static getNumRawDataModules(e){if(e<p.MIN_VERSION||e>p.MAX_VERSION)throw new RangeError("Version number out of range");let r=(16*e+128)*e+64;if(e>=2){const t=Math.floor(e/7)+2;r-=(25*t-10)*t-55,e>=7&&(r-=36)}return u(208<=r&&r<=29648),r}static getNumDataCodewords(e,r){return Math.floor(p.getNumRawDataModules(e)/8)-p.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e]*p.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let r=[];for(let s=0;s<e-1;s++)r.push(0);r.push(1);let t=1;for(let s=0;s<e;s++){for(let n=0;n<r.length;n++)r[n]=p.reedSolomonMultiply(r[n],t),n+1<r.length&&(r[n]^=r[n+1]);t=p.reedSolomonMultiply(t,2)}return r}static reedSolomonComputeRemainder(e,r){let t=r.map(s=>0);for(const s of e){const n=s^t.shift();t.push(0),r.forEach((l,i)=>t[i]^=p.reedSolomonMultiply(l,n))}return t}static reedSolomonMultiply(e,r){if(e>>>8||r>>>8)throw new RangeError("Byte out of range");let t=0;for(let s=7;s>=0;s--)t=t<<1^(t>>>7)*285,t^=(r>>>s&1)*e;return u(t>>>8==0),t}finderPenaltyCountPatterns(e){const r=e[1];u(r<=this.size*3);const t=r>0&&e[2]==r&&e[3]==r*3&&e[4]==r&&e[5]==r;return(t&&e[0]>=r*4&&e[6]>=r?1:0)+(t&&e[6]>=r*4&&e[0]>=r?1:0)}finderPenaltyTerminateAndCount(e,r,t){return e&&(this.finderPenaltyAddHistory(r,t),r=0),r+=this.size,this.finderPenaltyAddHistory(r,t),this.finderPenaltyCountPatterns(t)}finderPenaltyAddHistory(e,r){r[0]==0&&(e+=this.size),r.pop(),r.unshift(e)}};a.MIN_VERSION=1,a.MAX_VERSION=40,a.PENALTY_N1=3,a.PENALTY_N2=3,a.PENALTY_N3=40,a.PENALTY_N4=10,a.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],a.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],d.QrCode=a;function o(C,e,r){if(e<0||e>31||C>>>e)throw new RangeError("Value out of range");for(let t=e-1;t>=0;t--)r.push(C>>>t&1)}function c(C,e){return(C>>>e&1)!=0}function u(C){if(!C)throw new Error("Assertion error")}const f=class R{constructor(e,r,t){if(this.mode=e,this.numChars=r,this.bitData=t,r<0)throw new RangeError("Invalid argument");this.bitData=t.slice()}static makeBytes(e){let r=[];for(const t of e)o(t,8,r);return new R(R.Mode.BYTE,e.length,r)}static makeNumeric(e){if(!R.isNumeric(e))throw new RangeError("String contains non-numeric characters");let r=[];for(let t=0;t<e.length;){const s=Math.min(e.length-t,3);o(parseInt(e.substring(t,t+s),10),s*3+1,r),t+=s}return new R(R.Mode.NUMERIC,e.length,r)}static makeAlphanumeric(e){if(!R.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");let r=[],t;for(t=0;t+2<=e.length;t+=2){let s=R.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t))*45;s+=R.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t+1)),o(s,11,r)}return t<e.length&&o(R.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)),6,r),new R(R.Mode.ALPHANUMERIC,e.length,r)}static makeSegments(e){return e==""?[]:R.isNumeric(e)?[R.makeNumeric(e)]:R.isAlphanumeric(e)?[R.makeAlphanumeric(e)]:[R.makeBytes(R.toUtf8ByteArray(e))]}static makeEci(e){let r=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)o(e,8,r);else if(e<16384)o(2,2,r),o(e,14,r);else if(e<1e6)o(6,3,r),o(e,21,r);else throw new RangeError("ECI assignment value out of range");return new R(R.Mode.ECI,0,r)}static isNumeric(e){return R.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return R.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,r){let t=0;for(const s of e){const n=s.mode.numCharCountBits(r);if(s.numChars>=1<<n)return 1/0;t+=4+n+s.bitData.length}return t}static toUtf8ByteArray(e){e=encodeURI(e);let r=[];for(let t=0;t<e.length;t++)e.charAt(t)!="%"?r.push(e.charCodeAt(t)):(r.push(parseInt(e.substring(t+1,t+3),16)),t+=2);return r}};f.NUMERIC_REGEX=/^[0-9]*$/,f.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,f.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let v=f;d.QrSegment=f})(O||(O={}));(d=>{(a=>{const o=class{constructor(u,f){this.ordinal=u,this.formatBits=f}};o.LOW=new o(0,1),o.MEDIUM=new o(1,0),o.QUARTILE=new o(2,3),o.HIGH=new o(3,2),a.Ecc=o})(d.QrCode||(d.QrCode={}))})(O||(O={}));(d=>{(a=>{const o=class{constructor(u,f){this.modeBits=u,this.numBitsCharCount=f}numCharCountBits(u){return this.numBitsCharCount[Math.floor((u+7)/17)]}};o.NUMERIC=new o(1,[10,12,14]),o.ALPHANUMERIC=new o(2,[9,11,13]),o.BYTE=new o(4,[8,16,16]),o.KANJI=new o(8,[8,10,12]),o.ECI=new o(7,[0,0,0]),a.Mode=o})(d.QrSegment||(d.QrSegment={}))})(O||(O={}));var T=O;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var Ae={L:T.QrCode.Ecc.LOW,M:T.QrCode.Ecc.MEDIUM,Q:T.QrCode.Ecc.QUARTILE,H:T.QrCode.Ecc.HIGH},Z=128,q="L",J="#FFFFFF",ee="#000000",te=!1,re=1,xe=4,be=0,Pe=.1;function se(d,a=0){const o=[];return d.forEach(function(c,u){let f=null;c.forEach(function(v,C){if(!v&&f!==null){o.push(`M${f+a} ${u+a}h${C-f}v1H${f+a}z`),f=null;return}if(C===c.length-1){if(!v)return;f===null?o.push(`M${C+a},${u+a} h1v1H${C+a}z`):o.push(`M${f+a},${u+a} h${C+1-f}v1H${f+a}z`);return}v&&f===null&&(f=C)})}),o.join("")}function ne(d,a){return d.slice().map((o,c)=>c<a.y||c>=a.y+a.h?o:o.map((u,f)=>f<a.x||f>=a.x+a.w?u:!1))}function Se(d,a,o,c){if(c==null)return null;const u=d.length+o*2,f=Math.floor(a*Pe),v=u/a,C=(c.width||f)*v,e=(c.height||f)*v,r=c.x==null?d.length/2-C/2:c.x*v,t=c.y==null?d.length/2-e/2:c.y*v,s=c.opacity==null?1:c.opacity;let n=null;if(c.excavate){let i=Math.floor(r),g=Math.floor(t),h=Math.ceil(C+r-i),x=Math.ceil(e+t-g);n={x:i,y:g,w:h,h:x}}const l=c.crossOrigin;return{x:r,y:t,h:e,w:C,excavation:n,opacity:s,crossOrigin:l}}function Le(d,a){return a!=null?Math.max(Math.floor(a),0):d?xe:be}function oe({value:d,level:a,minVersion:o,includeMargin:c,marginSize:u,imageSettings:f,size:v,boostLevel:C}){let e=A.useMemo(()=>{const i=(Array.isArray(d)?d:[d]).reduce((g,h)=>(g.push(...T.QrSegment.makeSegments(h)),g),[]);return T.QrCode.encodeSegments(i,Ae[a],o,void 0,void 0,C)},[d,a,o,C]);const{cells:r,margin:t,numCells:s,calculatedImageSettings:n}=A.useMemo(()=>{let l=e.getModules();const i=Le(c,u),g=l.length+i*2,h=Se(l,v,i,f);return{cells:l,margin:i,numCells:g,calculatedImageSettings:h}},[e,v,f,c,u]);return{qrcode:e,margin:t,cells:r,numCells:s,calculatedImageSettings:n}}var Oe=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),ke=A.forwardRef(function(a,o){const c=a,{value:u,size:f=Z,level:v=q,bgColor:C=J,fgColor:e=ee,includeMargin:r=te,minVersion:t=re,boostLevel:s,marginSize:n,imageSettings:l}=c,g=Q(c,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:h}=g,x=Q(g,["style"]),N=l==null?void 0:l.src,m=A.useRef(null),M=A.useRef(null),E=A.useCallback(L=>{m.current=L,typeof o=="function"?o(L):o&&(o.current=L)},[o]),[I,y]=A.useState(!1),{margin:b,cells:k,numCells:B,calculatedImageSettings:P}=oe({value:u,level:v,minVersion:t,boostLevel:s,includeMargin:r,marginSize:n,imageSettings:l,size:f});A.useEffect(()=>{if(m.current!=null){const L=m.current,S=L.getContext("2d");if(!S)return;let H=k;const D=M.current,G=P!=null&&D!==null&&D.complete&&D.naturalHeight!==0&&D.naturalWidth!==0;G&&P.excavation!=null&&(H=ne(k,P.excavation));const Y=window.devicePixelRatio||1;L.height=L.width=f*Y;const V=f/B*Y;S.scale(V,V),S.fillStyle=C,S.fillRect(0,0,B,B),S.fillStyle=e,Oe?S.fill(new Path2D(se(H,b))):k.forEach(function(le,ce){le.forEach(function(ue,he){ue&&S.fillRect(he+b,ce+b,1,1)})}),P&&(S.globalAlpha=P.opacity),G&&S.drawImage(D,P.x+b,P.y+b,P.w,P.h)}}),A.useEffect(()=>{y(!1)},[N]);const ae=U({height:f,width:f},h);let _=null;return N!=null&&(_=A.createElement("img",{src:N,key:N,style:{display:"none"},onLoad:()=>{y(!0)},ref:M,crossOrigin:P==null?void 0:P.crossOrigin})),A.createElement(A.Fragment,null,A.createElement("canvas",U({style:ae,height:f,width:f,ref:E,role:"img"},x)),_)});ke.displayName="QRCodeCanvas";var ie=A.forwardRef(function(a,o){const c=a,{value:u,size:f=Z,level:v=q,bgColor:C=J,fgColor:e=ee,includeMargin:r=te,minVersion:t=re,boostLevel:s,title:n,marginSize:l,imageSettings:i}=c,g=Q(c,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:h,cells:x,numCells:N,calculatedImageSettings:m}=oe({value:u,level:v,minVersion:t,boostLevel:s,includeMargin:r,marginSize:l,imageSettings:i,size:f});let M=x,E=null;i!=null&&m!=null&&(m.excavation!=null&&(M=ne(x,m.excavation)),E=A.createElement("image",{href:i.src,height:m.h,width:m.w,x:m.x+h,y:m.y+h,preserveAspectRatio:"none",opacity:m.opacity,crossOrigin:m.crossOrigin}));const I=se(M,h);return A.createElement("svg",U({height:f,width:f,viewBox:`0 0 ${N} ${N}`,ref:o,role:"img"},g),!!n&&A.createElement("title",null,n),A.createElement("path",{fill:C,d:`M0,0 h${N}v${N}H0z`,shapeRendering:"crispEdges"}),A.createElement("path",{fill:e,d:I,shapeRendering:"crispEdges"}),E)});ie.displayName="QRCodeSVG";const _e=()=>{var N,m,M;const[d,a]=$(Me),[o,c]=$(de),[u,f]=$(fe),v=me(),C=sessionStorage.getItem("userId"),[e,r]=z.useState(!1),t=ge(),{id:s}=pe(),n=z.useRef(null),l=z.useRef(null),i=()=>{if(!n.current||!l.current)return;const E=n.current,I=l.current,y=E.clientWidth,b=E.clientHeight,k=I.clientHeight;E.style.clipPath=`path('M0 0 L0 ${b-5} Q10 ${b-5} 10 ${b} L ${y-10} ${b} Q${y-10} ${b-5} ${y} ${b-5} L${y} 0 Z')`,I.style.clipPath=`path('M10 0 Q10 10 0 10 L0 ${k} L${y} ${k} L${y} 10 Q${y-10} 10 ${y-10} 0 Z')`};z.useEffect(()=>{a(!1),s?(c(s),h(parseInt(s))):g()},[s]),z.useLayoutEffect(()=>{const E=()=>{requestAnimationFrame(()=>{i()})};return window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[]);const g=async()=>{const E={userId:C};try{const y=(await j.get("/api/order/ticket/ticketOne",{params:E,headers:{Authorization:`Bearer ${v}`}})).data.resultData;y?(c(y),h(y)):console.warn("티켓 ID가 없습니다.")}catch(I){console.error("티켓 ID 가져오기 실패:",I)}},h=async E=>{if(E)try{const y=(await j.get("/api/order/ticket",{params:{ticketId:E},headers:{Authorization:`Bearer ${v}`}})).data.resultData.ticket;f(y),requestAnimationFrame(()=>{i(),setTimeout(()=>{r(!0)},1500)})}catch(I){console.error("티켓 데이터를 가져오는 중 오류 발생:",I),alert("티켓 정보를 가져오는 중 오류가 발생했습니다. 다시 시도해주세요.")}};z.useEffect(()=>{if(!o)return;const E=setInterval(async()=>{try{(await j.get("/api/order/ticket",{params:{ticketId:o},headers:{Authorization:`Bearer ${v}`}})).data.resultData.ticket.ticketStatus===1&&(clearInterval(E),sessionStorage.removeItem("ticketId"),Ee.fire({title:"식권이 사용되었어요",icon:"success",confirmButtonText:"확인",allowOutsideClick:!1}).then(b=>{b.isConfirmed&&t("/user")}))}catch(I){console.error("티켓 상태 조회 실패:",I)}},3e3);return()=>clearInterval(E)},[o]);const x=s&&u.restaurantId?`${we}/store/request?ticketId=${s}&restaurantId=${u.restaurantId}`:"";return w.jsxs("div",{className:"flex flex-col w-full h-dvh px-5 py-20 overflow-x-hidden overflow-y-scroll scrollbar-hide",children:[w.jsx(ye,{}),w.jsxs("div",{className:"absolute top-0 left-0 w-full flex justify-between items-center px-3 py-5 border-b-2 border-gray border-opacity-70 bg-white z-30",children:[w.jsx("span",{className:"flex w-[10%] justify-center text-2xl cursor-pointer",children:w.jsx(Ce,{onClick:()=>t("/user/order")})}),w.jsx("span",{className:"text-xl font-semibold tracking-wider",children:"내 식권"}),w.jsx("span",{children:" "})]}),e?w.jsxs(Ne.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[w.jsx("section",{id:"visual",ref:n,className:"overflow-visible mt-2",children:w.jsxs("div",{className:"gap-4 pb-5 flex flex-col items-center justify-center bg-gray rounded-t-2xl border-b-2 border-dotted border-darkGray",children:[w.jsx("div",{className:"w-full text-center bg-primary rounded-t-2xl p-6 text-white font-bold",children:w.jsx("span",{className:"font-bold text-4xl text-nowrap",children:u.restaurantName})}),w.jsxs("div",{className:"flex flex-col w-full items-center",children:[w.jsx("span",{className:"text-base -ml-44 text-nowrap",children:"식권 발급 시간"}),w.jsxs("div",{className:"flex text-2xl text-center font-semibold gap-8",children:[w.jsx("span",{className:"flex tracking-widest",children:(N=u==null?void 0:u.reservationTime)==null?void 0:N.split(" ")[0]}),w.jsx("span",{className:"flex tracking-widest",children:(M=(m=u==null?void 0:u.reservationTime)==null?void 0:m.split(" ")[1])==null?void 0:M.slice(0,5)})]})]}),w.jsxs("div",{className:"flex flex-col w-full items-center gap-2 px-4",children:[w.jsx("span",{className:"text-2xl",children:(()=>{const E=u.menuNames.split(","),I=E[0].trim(),y=E.length-1;return y===0?I:`${I} 외 ${y}개`})()}),w.jsxs("span",{className:"text-4xl font-bold tracking-wider",children:[u.totalAmount.toLocaleString("ko-KR"),"원"]}),w.jsx("span",{className:"text-xl",children:u.personCount===0?"앉아서 주문":`${u.personCount}명 예약`})]})]})}),w.jsx("section",{id:"info",ref:l,children:w.jsx("div",{className:"p-10 flex flex-col justify-center items-center bg-gray rounded-b-2xl border-t-2 border-dotted border-darkGray",children:w.jsx("div",{className:"flex w-full justify-center items-center",children:x&&w.jsx(ie,{value:x,size:180,bgColor:"none"})})})}),w.jsx("div",{className:"text-xl underline text-center mt-10 pb-16",children:"예약 취소는 매장으로 문의해주세요"})]}):w.jsx(ve,{message:"식권 준비 중..."}),w.jsx(Re,{})]})};export{_e as default};
