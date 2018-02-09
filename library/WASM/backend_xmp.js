// create separate namespace for all the Emscripten stuff.. otherwise naming clashes may occur especially when 
// optimizing using closure compiler..
window.spp_backend_state_XMP= {
	notReady: true,
	adapterCallback: function(){}	// overwritten later	
};
window.spp_backend_state_XMP["onRuntimeInitialized"] = function() {	// emscripten callback needed in case async init is used (e.g. for WASM)
	this.notReady= false;
	this.adapterCallback();
}.bind(window.spp_backend_state_XMP);

var backend_XMP = (function(Module) {var b;b||(b=typeof Module !== 'undefined' ? Module : {});var h={},l;for(l in b)b.hasOwnProperty(l)&&(h[l]=b[l]);b.arguments=[];b.thisProgram="./this.program";b.quit=function(a,c){throw c;};b.preRun=[];b.postRun=[];var m=!1,p=!1,q=!1,r=!1;
if(b.ENVIRONMENT)if("WEB"===b.ENVIRONMENT)m=!0;else if("WORKER"===b.ENVIRONMENT)p=!0;else if("NODE"===b.ENVIRONMENT)q=!0;else if("SHELL"===b.ENVIRONMENT)r=!0;else throw Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");else m="object"===typeof window,p="function"===typeof importScripts,q="object"===typeof process&&"function"===typeof require&&!m&&!p,r=!m&&!q&&!p;
if(q){var aa,ba;b.read=function(a,c){aa||(aa=require("fs"));ba||(ba=require("path"));a=ba.normalize(a);a=aa.readFileSync(a);return c?a:a.toString()};b.readBinary=function(a){a=b.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(b.thisProgram=process.argv[1].replace(/\\/g,"/"));b.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=b);process.on("uncaughtException",function(a){if(!(a instanceof u))throw a;});process.on("unhandledRejection",
function(){process.exit(1)});b.inspect=function(){return"[Emscripten Module object]"}}else if(r)"undefined"!=typeof read&&(b.read=function(a){return read(a)}),b.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?b.arguments=scriptArgs:"undefined"!=typeof arguments&&(b.arguments=arguments),"function"===typeof quit&&(b.quit=function(a){quit(a)});else if(m||p)b.read=function(a){var c=
new XMLHttpRequest;c.open("GET",a,!1);c.send(null);return c.responseText},p&&(b.readBinary=function(a){var c=new XMLHttpRequest;c.open("GET",a,!1);c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)}),b.readAsync=function(a,c,e){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?c(d.response):e()};d.onerror=e;d.send(null)},"undefined"!=typeof arguments&&(b.arguments=arguments),b.setWindowTitle=
function(a){document.title=a};b.print="undefined"!==typeof console?console.log:"undefined"!==typeof print?print:null;b.printErr="undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn||b.print;b.print=b.print;b.printErr=b.printErr;for(l in h)h.hasOwnProperty(l)&&(b[l]=h[l]);h=void 0;function v(a){assert(!ca);var c=w;w=w+a+15&-16;return c}function da(a){assert(x);var c=y[x>>2];a=c+a+15&-16;y[x>>2]=a;if(a=a>=z)ea(),a=!0;return a?(y[x>>2]=c,0):c}
function fa(a){var c;c||(c=16);return Math.ceil(a/c)*c}var ha=0;function assert(a,c){a||A("Assertion failed: "+c)}var la={stackSave:function(){ia()},stackRestore:function(){ja()},arrayToC:function(a){var c=ka(a.length);B.set(a,c);return c},stringToC:function(a){var c=0;if(null!==a&&void 0!==a&&0!==a){var e=(a.length<<2)+1;c=ka(e);C(a,D,c,e)}return c}},ma={string:la.stringToC,array:la.arrayToC};
function na(a,c){if("number"===typeof a){var e=!0;var d=a}else e=!1,d=a.length;c=4==c?f:["function"===typeof oa?oa:v,ka,v,da][void 0===c?2:c](Math.max(d,1));if(e){var f=c;assert(0==(c&3));for(a=c+(d&-4);f<a;f+=4)y[f>>2]=0;for(a=c+d;f<a;)B[f++>>0]=0;return c}a.subarray||a.slice?D.set(a,c):D.set(new Uint8Array(a),c);return c}
function E(a,c){if(0===c||!a)return"";for(var e=0,d,f=0;;){d=D[a+f>>0];e|=d;if(0==d&&!c)break;f++;if(c&&f==c)break}c||(c=f);d="";if(128>e){for(;0<c;)e=String.fromCharCode.apply(String,D.subarray(a,a+Math.min(c,1024))),d=d?d+e:e,a+=1024,c-=1024;return d}return pa(D,a)}var qa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function pa(a,c){for(var e=c;a[e];)++e;if(16<e-c&&a.subarray&&qa)return qa.decode(a.subarray(c,e));for(e="";;){var d=a[c++];if(!d)return e;if(d&128){var f=a[c++]&63;if(192==(d&224))e+=String.fromCharCode((d&31)<<6|f);else{var g=a[c++]&63;if(224==(d&240))d=(d&15)<<12|f<<6|g;else{var k=a[c++]&63;if(240==(d&248))d=(d&7)<<18|f<<12|g<<6|k;else{var n=a[c++]&63;if(248==(d&252))d=(d&3)<<24|f<<18|g<<12|k<<6|n;else{var t=a[c++]&63;d=(d&1)<<30|f<<24|g<<18|k<<12|n<<6|t}}}65536>d?e+=String.fromCharCode(d):(d-=
65536,e+=String.fromCharCode(55296|d>>10,56320|d&1023))}}else e+=String.fromCharCode(d)}}
function C(a,c,e,d){if(0<d){d=e+d-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);55296<=g&&57343>=g&&(g=65536+((g&1023)<<10)|a.charCodeAt(++f)&1023);if(127>=g){if(e>=d)break;c[e++]=g}else{if(2047>=g){if(e+1>=d)break;c[e++]=192|g>>6}else{if(65535>=g){if(e+2>=d)break;c[e++]=224|g>>12}else{if(2097151>=g){if(e+3>=d)break;c[e++]=240|g>>18}else{if(67108863>=g){if(e+4>=d)break;c[e++]=248|g>>24}else{if(e+5>=d)break;c[e++]=252|g>>30;c[e++]=128|g>>24&63}c[e++]=128|g>>18&63}c[e++]=128|g>>12&63}c[e++]=128|
g>>6&63}c[e++]=128|g&63}}c[e]=0}}function ra(a){for(var c=0,e=0;e<a.length;++e){var d=a.charCodeAt(e);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++e)&1023);127>=d?++c:c=2047>=d?c+2:65535>=d?c+3:2097151>=d?c+4:67108863>=d?c+5:c+6}return c}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");var buffer,B,D,sa,y;
function ta(){b.HEAP8=B=new Int8Array(buffer);b.HEAP16=sa=new Int16Array(buffer);b.HEAP32=y=new Int32Array(buffer);b.HEAPU8=D=new Uint8Array(buffer);b.HEAPU16=new Uint16Array(buffer);b.HEAPU32=new Uint32Array(buffer);b.HEAPF32=new Float32Array(buffer);b.HEAPF64=new Float64Array(buffer)}var F,w,ca,ua,G,va,wa,x;F=w=ua=G=va=wa=x=0;ca=!1;
function ea(){A("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+z+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}var xa=b.TOTAL_STACK||5242880,z=b.TOTAL_MEMORY||16777216;z<xa&&b.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+z+"! (TOTAL_STACK="+xa+")");
b.buffer?buffer=b.buffer:("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(b.wasmMemory=new WebAssembly.Memory({initial:z/65536,maximum:z/65536}),buffer=b.wasmMemory.buffer):buffer=new ArrayBuffer(z),b.buffer=buffer);ta();y[0]=1668509029;sa[1]=25459;if(115!==D[2]||99!==D[3])throw"Runtime error: expected the system to be little-endian!";
function H(a){for(;0<a.length;){var c=a.shift();if("function"==typeof c)c();else{var e=c.s;"number"===typeof e?void 0===c.h?b.dynCall_v(e):b.dynCall_vi(e,c.h):e(void 0===c.h?null:c.h)}}}var ya=[],za=[],Aa=[],Ba=[],Ca=[],Da=!1;function Ea(){var a=b.preRun.shift();ya.unshift(a)}var I=0,Fa=null,J=null;b.preloadedImages={};b.preloadedAudios={};function K(a){return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}
(function(){function a(){try{if(b.wasmBinary)return new Uint8Array(b.wasmBinary);if(b.readBinary)return b.readBinary(f);throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";}catch(Sa){A(Sa)}}function c(){return b.wasmBinary||!m&&!p||"function"!==typeof fetch?new Promise(function(c){c(a())}):fetch(f,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+
f+"'";return a.arrayBuffer()}).catch(function(){return a()})}function e(a){function d(a){n=a.exports;if(n.memory){a=n.memory;var c=b.buffer;a.byteLength<c.byteLength&&b.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");c=new Int8Array(c);(new Int8Array(a)).set(c);b.buffer=buffer=a;ta()}b.asm=n;b.usingWasm=!0;I--;b.monitorRunDependencies&&b.monitorRunDependencies(I);0==I&&(null!==Fa&&(clearInterval(Fa),Fa=null),J&&(a=J,J=null,a()))}
function e(a){d(a.instance)}function g(a){c().then(function(a){return WebAssembly.instantiate(a,k)}).then(a).catch(function(a){b.printErr("failed to asynchronously prepare wasm: "+a);A(a)})}if("object"!==typeof WebAssembly)return b.printErr("no native wasm support detected"),!1;if(!(b.wasmMemory instanceof WebAssembly.Memory))return b.printErr("no native wasm Memory in use"),!1;a.memory=b.wasmMemory;k.global={NaN:NaN,Infinity:Infinity};k["global.Math"]=Math;k.env=a;I++;b.monitorRunDependencies&&b.monitorRunDependencies(I);
if(b.instantiateWasm)try{return b.instantiateWasm(k,d)}catch(Ta){return b.printErr("Module.instantiateWasm callback failed with error: "+Ta),!1}b.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||K(f)||"function"!==typeof fetch?g(e):WebAssembly.instantiateStreaming(fetch(f,{credentials:"same-origin"}),k).then(e).catch(function(a){b.printErr("wasm streaming compile failed: "+a);b.printErr("falling back to ArrayBuffer instantiation");g(e)});return{}}var d="xmp.wast",f="xmp.wasm",g="xmp.temp.asm.js";
"function"===typeof b.locateFile&&(K(d)||(d=b.locateFile(d)),K(f)||(f=b.locateFile(f)),K(g)||(g=b.locateFile(g)));var k={global:null,env:null,asm2wasm:{"f64-rem":function(a,c){return a%c},"debugger":function(){debugger}},parent:b},n=null;b.asmPreload=b.asm;var t=b.reallocBuffer;b.reallocBuffer=function(a){if("asmjs"===O)var c=t(a);else a:{var d=b.usingWasm?65536:16777216;0<a%d&&(a+=d-a%d);d=b.buffer.byteLength;if(b.usingWasm)try{c=-1!==b.wasmMemory.grow((a-d)/65536)?b.buffer=b.wasmMemory.buffer:null;
break a}catch(ab){c=null;break a}c=void 0}return c};var O="";b.asm=function(a,c){if(!c.table){a=b.wasmTableSize;void 0===a&&(a=1024);var d=b.wasmMaxTableSize;c.table="object"===typeof WebAssembly&&"function"===typeof WebAssembly.Table?void 0!==d?new WebAssembly.Table({initial:a,maximum:d,element:"anyfunc"}):new WebAssembly.Table({initial:a,element:"anyfunc"}):Array(a);b.wasmTable=c.table}c.memoryBase||(c.memoryBase=b.STATIC_BASE);c.tableBase||(c.tableBase=0);(c=e(c))||A("no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods");
return c}})();F=1024;w=F+29888;za.push();b.STATIC_BASE=F;b.STATIC_BUMP=29888;w+=16;function L(){A()}function Ga(a){b.___errno_location&&(y[b.___errno_location()>>2]=a);return a}function Ha(a,c){if(0===a)a=Date.now();else if(1===a&&(q||"undefined"!==typeof dateNow||(m||p)&&self.performance&&self.performance.now))a=L();else return Ga(22),-1;y[c>>2]=a/1E3|0;y[c+4>>2]=a%1E3*1E6|0;return 0}var M=0;function N(){M+=4;return y[M-4>>2]}var P={};
function Q(a,c){M=c;try{var e=N(),d=N(),f=N();a=0;Q.c||(Q.c=[null,[],[]],Q.l=function(a,c){var d=Q.c[a];assert(d);0===c||10===c?((1===a?b.print:b.printErr)(pa(d,0)),d.length=0):d.push(c)});for(c=0;c<f;c++){for(var g=y[d+8*c>>2],k=y[d+(8*c+4)>>2],n=0;n<k;n++)Q.l(e,D[g+n]);a+=k}return a}catch(t){return"undefined"!==typeof FS&&t instanceof FS.a||A(t),-t.b}}var Ia=w;w+=16;var Ja,R={};
function S(a){if(0===a)return 0;a=E(a);if(!R.hasOwnProperty(a))return 0;S.c&&Ka(S.c);a=R[a];var c=ra(a)+1,e=oa(c);e&&C(a,B,e,c);S.c=e;return S.c}function La(a){return Math.pow(2,a)}na(Ma("GMT"),2);var T=w,Na=w+=16,Oa=w+=16;w+=16;
function Pa(){function a(a){return(a=a.toTimeString().match(/\(([A-Za-z ]+)\)$/))?a[1]:"GMT"}if(!Qa){Qa=!0;y[Oa>>2]=60*(new Date).getTimezoneOffset();var c=new Date(2E3,0,1),e=new Date(2E3,6,1);y[Na>>2]=Number(c.getTimezoneOffset()!=e.getTimezoneOffset());var d=a(c),f=a(e);d=na(Ma(d),0);f=na(Ma(f),0);e.getTimezoneOffset()<c.getTimezoneOffset()?(y[T>>2]=d,y[T+4>>2]=f):(y[T>>2]=f,y[T+4>>2]=d)}}var Qa;
q?L=function(){var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:"undefined"!==typeof dateNow?L=dateNow:"object"===typeof self&&self.performance&&"function"===typeof self.performance.now?L=function(){return self.performance.now()}:"object"===typeof performance&&"function"===typeof performance.now?L=function(){return performance.now()}:L=Date.now;var U,V;
Ja?(V=y[Ia>>2],U=y[V>>2]):(Ja=!0,R.USER=R.LOGNAME="web_user",R.PATH="/",R.PWD="/",R.HOME="/home/web_user",R.LANG="C.UTF-8",R._=b.thisProgram,U=v(1024),V=v(256),y[V>>2]=U,y[Ia>>2]=V);var W=[],Ra=0,X;for(X in R)if("string"===typeof R[X]){var Y=X+"="+R[X];W.push(Y);Ra+=Y.length}if(1024<Ra)throw Error("Environment size exceeded TOTAL_ENV_SIZE!");for(var Z=0;Z<W.length;Z++){for(var Ua=Y=W[Z],Va=U,Wa=0;Wa<Ua.length;++Wa)B[Va++>>0]=Ua.charCodeAt(Wa);B[Va>>0]=0;y[V+4*Z>>2]=U;U+=Y.length+1}
y[V+4*W.length>>2]=0;x=v(4);ua=G=fa(w);va=ua+xa;wa=fa(va);y[x>>2]=wa;ca=!0;function Ma(a){var c=Array(ra(a)+1);C(a,c,0,c.length);return c}b.wasmTableSize=496;b.wasmMaxTableSize=496;b.i={};
b.j={abort:A,enlargeMemory:function(){ea()},getTotalMemory:function(){return z},abortOnCannotGrowMemory:ea,___assert_fail:function(a,c,e,d){A("Assertion failed: "+E(a)+", at: "+[c?E(c):"unknown filename",e,d?E(d):"unknown function"])},___clock_gettime:function(){return Ha.apply(null,arguments)},___lock:function(){},___setErrNo:Ga,___syscall10:function(a,c){M=c;try{var e=E(N());FS.unlink(e);return 0}catch(d){return"undefined"!==typeof FS&&d instanceof FS.a||A(d),-d.b}},___syscall140:function(a,c){M=
c;try{var e=P.f();N();var d=N(),f=N(),g=N();FS.A(e,d,g);y[f>>2]=e.position;e.g&&0===d&&0===g&&(e.g=null);return 0}catch(k){return"undefined"!==typeof FS&&k instanceof FS.a||A(k),-k.b}},___syscall145:function(a,c){M=c;try{var e=P.f(),d=N(),f=N();return P.o(e,d,f)}catch(g){return"undefined"!==typeof FS&&g instanceof FS.a||A(g),-g.b}},___syscall146:Q,___syscall195:function(a,c){M=c;try{var e=E(N()),d=N();return P.m(FS.stat,e,d)}catch(f){return"undefined"!==typeof FS&&f instanceof FS.a||A(f),-f.b}},___syscall197:function(a,
c){M=c;try{var e=P.f(),d=N();return P.m(FS.stat,e.path,d)}catch(f){return"undefined"!==typeof FS&&f instanceof FS.a||A(f),-f.b}},___syscall220:function(a,c){M=c;try{var e=P.f(),d=N(),f=N();e.g||(e.g=FS.readdir(e.path));for(a=0;0<e.g.length&&a+268<=f;){var g=e.g.pop();if("."===g[0]){var k=1;var n=4}else{var t=FS.B(e.node,g);k=t.id;n=FS.u(t.mode)?2:FS.v(t.mode)?4:FS.w(t.mode)?10:8}y[d+a>>2]=k;y[d+a+4>>2]=e.position;sa[d+a+8>>1]=268;B[d+a+10>>0]=n;C(g,D,d+a+11,256);a+=268}return a}catch(O){return"undefined"!==
typeof FS&&O instanceof FS.a||A(O),-O.b}},___syscall221:function(a,c){M=c;return 0},___syscall41:function(a,c){M=c;try{var e=P.f();return FS.open(e.path,e.flags,0).fd}catch(d){return"undefined"!==typeof FS&&d instanceof FS.a||A(d),-d.b}},___syscall5:function(a,c){M=c;try{var e=E(N()),d=N(),f=N();return FS.open(e,d,f).fd}catch(g){return"undefined"!==typeof FS&&g instanceof FS.a||A(g),-g.b}},___syscall54:function(a,c){M=c;return 0},___syscall6:function(a,c){M=c;try{var e=P.f();FS.close(e);return 0}catch(d){return"undefined"!==
typeof FS&&d instanceof FS.a||A(d),-d.b}},___unlock:function(){},_emscripten_memcpy_big:function(a,c,e){D.set(D.subarray(c,c+e),a);return a},_getenv:S,_llvm_exp2_f64:function(){return La.apply(null,arguments)},_localtime_r:function(a,c){Pa();a=new Date(1E3*y[a>>2]);y[c>>2]=a.getSeconds();y[c+4>>2]=a.getMinutes();y[c+8>>2]=a.getHours();y[c+12>>2]=a.getDate();y[c+16>>2]=a.getMonth();y[c+20>>2]=a.getFullYear()-1900;y[c+24>>2]=a.getDay();var e=new Date(a.getFullYear(),0,1);y[c+28>>2]=(a.getTime()-e.getTime())/
864E5|0;y[c+36>>2]=-(60*a.getTimezoneOffset());var d=(new Date(2E3,6,1)).getTimezoneOffset();e=e.getTimezoneOffset();a=(d!=e&&a.getTimezoneOffset()==Math.min(e,d))|0;y[c+32>>2]=a;y[c+40>>2]=y[T+(a?4:0)>>2];return c},DYNAMICTOP_PTR:x,STACKTOP:G};var Xa=b.asm(b.i,b.j,buffer);b.asm=Xa;b._endXmp=function(){return b.asm._endXmp.apply(null,arguments)};var Ka=b._free=function(){return b.asm._free.apply(null,arguments)};b._getMusicInfo=function(){return b.asm._getMusicInfo.apply(null,arguments)};
b._getXmpCurrentPosition=function(){return b.asm._getXmpCurrentPosition.apply(null,arguments)};b._getXmpFrameInfo=function(){return b.asm._getXmpFrameInfo.apply(null,arguments)};b._getXmpLoopCount=function(){return b.asm._getXmpLoopCount.apply(null,arguments)};b._getXmpMaxPosition=function(){return b.asm._getXmpMaxPosition.apply(null,arguments)};b._getXmpModuleInfo=function(){return b.asm._getXmpModuleInfo.apply(null,arguments)};
b._getXmpSampleRate=function(){return b.asm._getXmpSampleRate.apply(null,arguments)};b._getXmpSoundBuffer=function(){return b.asm._getXmpSoundBuffer.apply(null,arguments)};b._getXmpSoundBufferLen=function(){return b.asm._getXmpSoundBufferLen.apply(null,arguments)};b._initXmp=function(){return b.asm._initXmp.apply(null,arguments)};b._loadXmpModule=function(){return b.asm._loadXmpModule.apply(null,arguments)};var oa=b._malloc=function(){return b.asm._malloc.apply(null,arguments)};
b._playXmpFrame=function(){return b.asm._playXmpFrame.apply(null,arguments)};b._seekXmpPosition=function(){return b.asm._seekXmpPosition.apply(null,arguments)};b._startXmpPlayer=function(){return b.asm._startXmpPlayer.apply(null,arguments)};var ka=b.stackAlloc=function(){return b.asm.stackAlloc.apply(null,arguments)},ja=b.stackRestore=function(){return b.asm.stackRestore.apply(null,arguments)},ia=b.stackSave=function(){return b.asm.stackSave.apply(null,arguments)};b.asm=Xa;
b.ccall=function(a,c,e,d){var f=b["_"+a];assert(f,"Cannot call unknown function "+a+", make sure it is exported");var g=[];a=0;if(d)for(var k=0;k<d.length;k++){var n=ma[e[k]];n?(0===a&&(a=ia()),g[k]=n(d[k])):g[k]=d[k]}e=f.apply(null,g);"string"===c&&(e=E(e));0!==a&&ja(a);return e};b.Pointer_stringify=E;function u(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}u.prototype=Error();u.prototype.constructor=u;var Ya=null;
J=function Za(){b.calledRun||$a();b.calledRun||(J=Za)};
function $a(){function a(){if(!b.calledRun&&(b.calledRun=!0,!ha)){Da||(Da=!0,H(za));H(Aa);if(b.onRuntimeInitialized)b.onRuntimeInitialized();if(b.postRun)for("function"==typeof b.postRun&&(b.postRun=[b.postRun]);b.postRun.length;){var a=b.postRun.shift();Ca.unshift(a)}H(Ca)}}null===Ya&&(Ya=Date.now());if(!(0<I)){if(b.preRun)for("function"==typeof b.preRun&&(b.preRun=[b.preRun]);b.preRun.length;)Ea();H(ya);0<I||b.calledRun||(b.setStatus?(b.setStatus("Running..."),setTimeout(function(){setTimeout(function(){b.setStatus("")},
1);a()},1)):a())}}b.run=$a;b.exit=function(a,c){if(!c||!b.noExitRuntime||0!==a){if(!b.noExitRuntime&&(ha=!0,G=void 0,H(Ba),b.onExit))b.onExit(a);q&&process.exit(a);b.quit(a,new u(a))}};function A(a){if(b.onAbort)b.onAbort(a);void 0!==a?(b.print(a),b.printErr(a),a=JSON.stringify(a)):a="";ha=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}b.abort=A;if(b.preInit)for("function"==typeof b.preInit&&(b.preInit=[b.preInit]);0<b.preInit.length;)b.preInit.pop()();b.noExitRuntime=!0;$a();
  return {
	Module: Module,  // expose original Module
  };
})(window.spp_backend_state_XMP);
/*
 xmp_adapter.js: Adapts XMP backend to generic WebAudio/ScriptProcessor player.
 
 version 1.0
 
 	Copyright (C) 2015 Juergen Wothke

 LICENSE
 
 This library is free software; you can redistribute it and/or modify it
 under the terms of the GNU General Public License as published by
 the Free Software Foundation; either version 2.1 of the License, or (at
 your option) any later version. This library is distributed in the hope
 that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
 warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public
 License along with this library; if not, write to the Free Software
 Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301 USA
*/
XMPBackendAdapter = (function(){ var $this = function () { 
		$this.base.call(this, backend_XMP.Module, 2);	
		this.once= 0;
	}; 
	// XMP's sample buffer contains 2-byte integer sample data (i.e. must be rescaled) 
	// of 2 interleaved channels
	extend(EmsHEAP16BackendAdapter, $this, {  
		getAudioBuffer: function() {
			var ptr=  this.Module.ccall('getXmpSoundBuffer', 'number');			
			// make it a this.Module.HEAP16 pointer
			return ptr >> 1;	// 2 x 16 bit samples			
		},
		getAudioBufferLength: function() {
			var len= this.Module.ccall('getXmpSoundBufferLen', 'number') >>2;
			return len;
		},
		computeAudioSamples: function() {
			var status= this.Module.ccall('playXmpFrame', 'number');
			if (status != 0) return status;						// means "end song"
			
			this.Module.ccall('getXmpFrameInfo', 'number');
			return this.Module.ccall('getXmpLoopCount', 'number');	// >0 means "end song"
		},
		getMaxPlaybackPosition: function() { 
			return this.Module.ccall('getXmpMaxPosition', 'number');
		},
		getPlaybackPosition: function() {
			return this.Module.ccall('getXmpCurrentPosition', 'number');
		},
		seekPlaybackPosition: function(pos) { 
			return this.Module.ccall('seekXmpPosition', 'number', ['number'], [pos]);
		},

		getPathAndFilename: function(filename) {
			return ['/', filename];
		},
		registerFileData: function(pathFilenameArray, data) {
			return 0;	// not used in XMP
		},
		loadMusicData: function(sampleRate, path, filename, data, options) {
			var buf = this.Module._malloc(data.length);
			this.Module.HEAPU8.set(data, buf);
			var ret = this.Module.ccall('loadXmpModule', 'number', ['number', 'number', 'number'], [buf, data.length, sampleRate]);
			this.Module._free(buf);

			if (ret == 0) {			
				var inputSampleRate = this.Module.ccall('getXmpSampleRate', 'number');
				this.resetSampleRate(sampleRate, inputSampleRate); 
			}
			return ret;			
		},
		evalTrackOptions: function(options) {
			if (typeof options.timeout != 'undefined') {
				ScriptNodePlayer.getInstance().setPlaybackTimeout(options.timeout*1000);
			}
			return this.Module.ccall('startXmpPlayer', 'number');
		},				
		teardown: function() {
			if(this.once)
				this.Module.ccall('endXmp', 'number');	// just in case
			this.once= 1;
			this.Module.ccall('initXmp', 'number');
		},
		getSongInfoMeta: function() {
			return {title: String,
					player: String 
					};
		},
		updateSongInfo: function(filename, result) {
		// get song infos (so far only use some top level module infos)
			var numAttr= 2;
			var ret = this.Module.ccall('getMusicInfo', 'number');
			
			var array = this.Module.HEAP32.subarray(ret>>2, (ret>>2)+numAttr);
			result.title= this.Module.Pointer_stringify(array[0]);
			result.player= this.Module.Pointer_stringify(array[1]);
		}
	});	return $this; })();
	