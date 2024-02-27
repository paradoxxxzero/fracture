var U=Object.defineProperty;var D=(n,t,i)=>t in n?U(n,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[t]=i;var T=(n,t,i)=>(D(n,typeof t!="symbol"?t+"":t,i),i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const a of c)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(c){const a={};return c.integrity&&(a.integrity=c.integrity),c.referrerPolicy&&(a.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?a.credentials="include":c.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(c){if(c.ep)return;c.ep=!0;const a=i(c);fetch(c.href,a)}})();const M=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0 - 1.0, 0.0, 1.0);
}
`,N=`#version 300 es
precision highp float;

##CONFIG

uniform int iterations;
uniform float bailout;
uniform float scale;
uniform float aspect;

// uniform mat4x2 coefs;

#ifdef PERTURB
uniform sampler2D orbit;
uniform int maxIterations;
#else
uniform vec2 center;
#endif

in vec2 uv;
out vec4 fragColor;

vec2 cmul(vec2 z, vec2 w) {
  return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x);
}

const float k = pow(1., 0.22) * .05;
const vec3 l = vec3(3.0, 3.5, 4.0);
void main(void) {
  // fragColor = vec4(texture(orbit, uv).xy, 0.0, 1.0);
  // return;
  vec2 z = vec2(0.0);

  #ifdef DERIVE
  vec2 zd = vec2(1., 0.0);
  #endif

  vec2 dc = scale * vec2(aspect, 1.) * (2. * uv - 1.);
  #ifndef PERTURB
  dc += center;
  #endif

  vec2 dz = vec2(0.0);

  // vec2 dc2 = cmul(dc, dc);
  // vec2 dc3 = cmul(dc2, dc);
  // vec2 dc4 = cmul(dc2, dc2);
  // vec2 dz = cmul(coefs[0], dc) + cmul(coefs[1], dc2) + cmul(coefs[2], dc3) + cmul(coefs[3], dc4);
  #ifdef PERTURB
  int m = 0;
  vec2 zm = texelFetch(orbit, ivec2(m % 64, m / 64), 0).xy;
  #endif

  vec3 col = vec3(0.0);
  for(int i = 0; i < iterations; i++) {
    #ifdef PERTURB
    dz = cmul(2.0 * dz, zm) + cmul(dz, dz) + dc;
    // dz = cmul(2.0 * z + dz, dz) + dc;
    m++;
    zm = texelFetch(orbit, ivec2(m % 64, m / 64), 0).xy;
    z = zm + dz;
    #else
    z = cmul(z, z) + dc;
    #endif

    #ifdef DERIVE
    zd = cmul(2. * zd, z);
    if(dot(zd, zd) < 1e-5) {
      break;
    }
    #endif

    float zz = dot(z, z);
    if(zz > bailout) {
      // Smooth iteration count
      float mu = float(i) - log2(log2(zz)) + 4.0;
      col = 0.5 + 0.5 * cos(k * mu + l);
      break;
    }
    #ifdef PERTURB
    if(dot(z, z) < dot(dz, dz) || m >= maxIterations) {
      dz = z;
      m = 0;
      zm = texelFetch(orbit, ivec2(m % 64, m / 64), 0).xy;
    }
    #endif
  }

  fragColor = vec4(col, 1.0);
}
`,o=class{constructor(t){if(t instanceof o)return t;typeof t=="number"&&(t=t.toFixed(o.DECIMALS));let[i,r]=t.split(".").concat("");this._n=BigInt(i+r.padEnd(o.DECIMALS,"0").slice(0,o.DECIMALS))}static fromBigInt(t){return Object.assign(Object.create(o.prototype),{_n:t})}add(t){return o.fromBigInt(this._n+new o(t)._n)}subtract(t){return o.fromBigInt(this._n-new o(t)._n)}static _divRound(t,i){return o.fromBigInt(t/i)}multiply(t){return o._divRound(this._n*new o(t)._n,o.SHIFT)}divide(t){return o._divRound(this._n*o.SHIFT,new o(t)._n)}toNumber(){return Number(this._n)/Number(o.SHIFT)}toString(){let t=this._n.toString().replace("-","").padStart(o.DECIMALS+1,"0");return t=(t.slice(0,-o.DECIMALS)+"."+t.slice(-o.DECIMALS)).replace(/(\.0*|0+)$/,""),this._n<0?"-"+t:t}};let g=o;T(g,"DECIMALS",32),T(g,"SHIFT",BigInt("1"+"0".repeat(o.DECIMALS)));class p{constructor(t){this._n=typeof t=="string"?parseFloat(t):t}add(t){return new p(this._n+(t._n?t._n:t))}subtract(t){return new p(this._n-(t._n?t._n:t))}multiply(t){return new p(this._n*(t._n?t._n:t))}divide(t){return new p(this._n/(t._n?t._n:t))}toNumber(){return this._n}toString(){return this._n.toString()}}const v=window.location.search.includes("float")?n=>new p(n):n=>new g(n);class h{constructor(t,i){this.re=t,this.im=i}add(t){return new h(this.re.add(t.re),this.im.add(t.im))}subtract(t){return new h(this.re.subtract(t.re),this.im.subtract(t.im))}multiply(t){return new h(this.re.multiply(t.re).subtract(this.im.multiply(t.im)),this.re.multiply(t.im).add(this.im.multiply(t.re)))}divide(t){const i=t.re.multiply(t.re).add(t.im.multiply(t.im));return new h(this.re.multiply(t.re).add(this.im.multiply(t.im)).divide(i),this.im.multiply(t.re).subtract(this.re.multiply(t.im)).divide(i))}norm(){return this.re.multiply(this.re).add(this.im.multiply(this.im))}abs(){return Math.sqrt(this.norm())}toString(){return`${this.re} ${this.im}i`}static fromString(t){const[i,r]=t.split(" ");return new h(v(i),v(r.replace(/i$/,"")))}}const f=(n=0,t=0)=>new h(v(n),v(t)),F=n=>h.fromString(n);window.m=v;const C=(n,t)=>{let i;return function(){const r=arguments;clearTimeout(i),i=setTimeout(()=>{n.apply(this,r)},t)}};let e=null,d=null,R=null,y=null,L=null,s=null;const l={};class x{constructor(){this.aspect=1,this.center=f(-.5),this._scale=1.2,this.derive=!0,this.perturb=!1,this.bailout=16**2,this.iterations=1e3,this._supersampling=1.1,this.fromState(),this.toState=C(this.toState.bind(this),100),window.addEventListener("popstate",this.fromState.bind(this))}ratio(t,i){this.aspect=t/i}serialize(){return new URLSearchParams({center:this.center.toString(),scale:this.scale.toString(),perturb:this.perturb,derive:this.derive,bailout:this.bailout,iterations:this.iterations,supersampling:this.supersampling}).toString()}unserialize(t){this.center=F(t.get("center")),this.scale=parseFloat(t.get("scale")),this.perturb=t.get("perturb")==="true",this.derive=t.get("derive")==="true",this.bailout=parseFloat(t.get("bailout")),this.iterations=parseFloat(t.get("iterations")),this.supersampling=parseFloat(t.get("supersampling"))}fromState(){if(location.hash)try{this.unserialize(new URLSearchParams(location.hash.slice(1))),s&&I()}catch(t){console.error(t),location.hash=""}}toState(){const t=this.serialize();location.hash.slice(1)!==t&&window.history.pushState(null,"",`#${this.serialize()}`)}update(){this.toState(),e.uniform1f(l.scale,this.scale),e.uniform1f(l.aspect,this.aspect),P()}shift(t,i){const r=this.scale*2;this.center.re=this.center.re.subtract(t*r*this.aspect),this.center.im=this.center.im.add(i*r)}rescale(t,i,r){const c=.5-i,a=.5-r;this.shift(c*t,a*t),this.scale-=this.scale*t}get scale(){return this._scale}set scale(t){this._scale=t;let i=Math.log10(this._scale)<-4.5;i!==this.perturb&&(this.perturb=i,s&&I())}get supersampling(){return this._supersampling}set supersampling(t){this._supersampling=t,s&&S()}}const O=n=>n.replace("##CONFIG",[s.perturb?"#define PERTURB":"",s.derive?"#define DERIVE":""].filter(Boolean).join(`
`)),_=(n,t)=>{if(e.shaderSource(t,n),e.compileShader(t),window.shader=n,!e.getShaderParameter(t,e.COMPILE_STATUS)){const r=e.getShaderInfoLog(t);return console.error(`An error occurred compiling the shaders: ${r}`),r}},X=()=>{if(e.linkProgram(d),!e.getProgramParameter(d,e.LINK_STATUS)){const t=e.getProgramInfoLog(d);return console.error(`Unable to initialize the shader program: ${t}`),t}l.bailout=e.getUniformLocation(d,"bailout"),l.iterations=e.getUniformLocation(d,"iterations"),l.maxIterations=e.getUniformLocation(d,"maxIterations"),l.center=e.getUniformLocation(d,"center"),l.scale=e.getUniformLocation(d,"scale"),l.aspect=e.getUniformLocation(d,"aspect")},B=n=>{e=n.getContext("webgl2",{antialias:!1}),R=e.createShader(e.VERTEX_SHADER),y=e.createShader(e.FRAGMENT_SHADER),d=e.createProgram(),e.attachShader(d,R),e.attachShader(d,y),_(M,R),s=new x,I(),L=e.createTexture(),e.bindTexture(e.TEXTURE_2D,L),e.texImage2D(e.TEXTURE_2D,0,e.RG32F,64,64,0,e.RG,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),S()},I=()=>{_(O(N),y),X(),e.useProgram(d),e.uniform1f(l.scale,s.scale),e.uniform1f(l.aspect,s.aspect),e.uniform1i(l.iterations,s.iterations),e.uniform1f(l.bailout,s.bailout)},S=()=>{if(!e)return;let n=window.innerWidth,t=window.innerHeight,i=n*window.devicePixelRatio*s.supersampling,r=t*window.devicePixelRatio*s.supersampling;(i!==e.canvas.width||r!==e.canvas.height)&&(s.ratio(i,r),n=Math.floor(n),t=Math.floor(t),i=Math.floor(i),r=Math.floor(r),e.canvas.width=i,e.canvas.height=r,e.viewport(0,0,i,r)),s.update()},G=()=>{let n=f();const t=[f(1),f(),f(),f()];let i=0;const r=new Float32Array(64*64*2);for(i=0;i<s.iterations&&(r[i*2]=n.re.toNumber(),r[i*2+1]=n.im.toNumber(),n=n.multiply(n).add(s.center),!(n.norm().toNumber()>=s.bailout));i++);return{orbit:r,coefs:t,max:i}},P=()=>{if(s.perturb){const{orbit:n,max:t,coefs:i}=G();e.uniform1i(l.maxIterations,t),e.texImage2D(e.TEXTURE_2D,0,e.RG32F,64,64,0,e.RG,e.FLOAT,n)}else e.uniform2fv(l.center,[s.center.re.toNumber(),s.center.im.toNumber()]);e.drawArrays(e.TRIANGLES,0,3)},m=new Map;let w=null,b=null;const H=n=>{n.button!==0||n.target.tagName!=="CANVAS"||m.set(n.pointerId,[n.clientX,n.clientY])},W=n=>{if(!m.has(n.pointerId))return;const t=m.get(n.pointerId),i=[n.clientX-t[0],n.clientY-t[1]];if(m.set(n.pointerId,[n.clientX,n.clientY]),m.size>1){const a=m.values(),u=a.next().value,E=a.next().value;b===null&&(b=[(u[0]+E[0])/(2*window.innerWidth),(u[1]+E[1])/(2*window.innerHeight)]);const z=Math.hypot(u[0]-E[0],u[1]-E[1]);if(w===null){w=z;return}const A=(z-w)/window.innerWidth;w=z,s.rescale(A*2,...b),s.update();return}const r=i[0]/window.innerWidth,c=i[1]/window.innerHeight;s.shift(r,c),s.update()},V=n=>{m.clear(),w=null,b=null};window.addEventListener("pointerdown",H);window.addEventListener("pointermove",W);window.addEventListener("pointerup",V);window.addEventListener("wheel",n=>{const t=n.deltaY/(2*window.innerWidth),i=n.clientX/window.innerWidth,r=n.clientY/window.innerHeight;s.rescale(t,i,r),s.update()});window.addEventListener("dblclick",n=>{location.hash="",s=new x,S()});window.addEventListener("resize",S);window.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("gl");B(n),P()});
