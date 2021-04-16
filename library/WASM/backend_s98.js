// create separate namespace for all the Emscripten stuff.. otherwise naming clashes may occur especially when 
// optimizing using closure compiler..
window.spp_backend_state_S98= {
	notReady: true,
	adapterCallback: function(){}	// overwritten later	
};
window.spp_backend_state_S98["onRuntimeInitialized"] = function() {	// emscripten callback needed in case async init is used (e.g. for WASM)
	this.notReady= false;
	this.adapterCallback();
}.bind(window.spp_backend_state_S98);

var backend_S98 = (function(Module) {var c;c||(c=typeof Module !== 'undefined' ? Module : {});var aa={},h;for(h in c)c.hasOwnProperty(h)&&(aa[h]=c[h]);c.arguments=[];c.thisProgram="./this.program";c.quit=function(a,b){throw b;};c.preRun=[];c.postRun=[];var k=!1,l=!1,n=!1,ba=!1;
if(c.ENVIRONMENT)if("WEB"===c.ENVIRONMENT)k=!0;else if("WORKER"===c.ENVIRONMENT)l=!0;else if("NODE"===c.ENVIRONMENT)n=!0;else if("SHELL"===c.ENVIRONMENT)ba=!0;else throw Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");else k="object"===typeof window,l="function"===typeof importScripts,n="object"===typeof process&&"function"===typeof require&&!k&&!l,ba=!k&&!n&&!l;
if(n){var ca,da;c.read=function(a,b){ca||(ca=require("fs"));da||(da=require("path"));a=da.normalize(a);a=ca.readFileSync(a);return b?a:a.toString()};c.readBinary=function(a){a=c.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(c.thisProgram=process.argv[1].replace(/\\/g,"/"));c.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=c);process.on("uncaughtException",function(a){if(!(a instanceof ea))throw a;});process.on("unhandledRejection",
function(){c.printErr("node.js exiting due to unhandled promise rejection");process.exit(1)});c.inspect=function(){return"[Emscripten Module object]"}}else if(ba)"undefined"!=typeof read&&(c.read=function(a){return read(a)}),c.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?c.arguments=scriptArgs:"undefined"!=typeof arguments&&(c.arguments=arguments),"function"===typeof quit&&
(c.quit=function(a){quit(a)});else if(k||l)c.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(c.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),c.readAsync=function(a,b,d){var e=new XMLHttpRequest;e.open("GET",a,!0);e.responseType="arraybuffer";e.onload=function(){200==e.status||0==e.status&&e.response?b(e.response):d()};e.onerror=d;e.send(null)},"undefined"!=
typeof arguments&&(c.arguments=arguments),c.setWindowTitle=function(a){document.title=a};else throw Error("unknown runtime environment");c.print="undefined"!==typeof console?console.log:"undefined"!==typeof print?print:null;c.printErr="undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn||c.print;c.print=c.print;c.printErr=c.printErr;for(h in aa)aa.hasOwnProperty(h)&&(c[h]=aa[h]);aa=void 0;fa=ha=ia=ja=function(){p("cannot use the stack before compiled code is ready to run, and has provided stack access")};
function ka(a){assert(!q);var b=r;r=r+a+15&-16;return b}function la(a){var b;b||(b=16);return Math.ceil(a/b)*b}function ma(a){oa||(oa={});oa[a]||(oa[a]=1,c.printErr(a))}var oa;function pa(a){switch(a){case 1:return"i8";case 2:return"i16";case 4:return"i32";case 8:return"double";default:assert(0)}}
function qa(a,b){0>=a&&p("segmentation fault storing 4 bytes to address "+a);0!==a%4&&p("alignment error storing to address "+a+", which was expected to be aligned to a multiple of 4");q?(a+4>v[w>>2]&&p("segmentation fault, exceeded the top of the available dynamic heap when storing 4 bytes to address "+a+". STATICTOP="+r+", DYNAMICTOP="+v[w>>2]),assert(w),assert(v[w>>2]<=x)):a+4>r&&p("segmentation fault, exceeded the top of the available static heap when storing 4 bytes to address "+a+". STATICTOP="+
r);var d=pa(4);d=d||"i8";"*"===d.charAt(d.length-1)&&(d="i32");switch(d){case "i1":y[a>>0]=b;break;case "i8":y[a>>0]=b;break;case "i16":ra[a>>1]=b;break;case "i32":v[a>>2]=b;break;case "i64":tempI64=[b>>>0,(tempDouble=b,1<=+sa(tempDouble)?0<tempDouble?(ta(+ua(tempDouble/4294967296),4294967295)|0)>>>0:~~+va((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)];v[a>>2]=tempI64[0];v[a+4>>2]=tempI64[1];break;case "float":wa[a>>2]=b;break;case "double":xa[a>>3]=b;break;default:p("invalid type for setValue: "+
d)}}
function z(a,b,d){0>=a&&p("segmentation fault loading "+b+" bytes from address "+a);0!==a%b&&p("alignment error loading from address "+a+", which was expected to be aligned to a multiple of "+b);q?(a+b>v[w>>2]&&p("segmentation fault, exceeded the top of the available dynamic heap when loading "+b+" bytes from address "+a+". STATICTOP="+r+", DYNAMICTOP="+v[w>>2]),assert(w),assert(v[w>>2]<=x)):a+b>r&&p("segmentation fault, exceeded the top of the available static heap when loading "+b+" bytes from address "+a+
". STATICTOP="+r);b=pa(b);a=ya(a,b);d&&(d=parseInt(b.substr(1)),a=0<=a?a:32>=d?2*Math.abs(1<<d-1)+a:Math.pow(2,d)+a);return a}var za=0;function assert(a,b){a||p("Assertion failed: "+b)}
var Ba={stackSave:function(){fa()},stackRestore:function(){ha()},arrayToC:function(a){var b=ia(a.length);assert(0<=a.length,"writeArrayToMemory array must have a length (should be an array or typed array)");y.set(a,b);return b},stringToC:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var d=(a.length<<2)+1,e=b=ia(d);assert("number"==typeof d,"stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");Aa(a,A,e,d)}return b}},Ca={string:Ba.stringToC,
array:Ba.arrayToC};function ya(a,b){b=b||"i8";"*"===b.charAt(b.length-1)&&(b="i32");switch(b){case "i1":return y[a>>0];case "i8":return y[a>>0];case "i16":return ra[a>>1];case "i32":return v[a>>2];case "i64":return v[a>>2];case "float":return wa[a>>2];case "double":return xa[a>>3];default:p("invalid type for getValue: "+b)}return null}
function Da(a,b){if(0===b||!a)return"";for(var d=0,e,f=0;;){assert(a+f<x);e=z(a+f|0,1,1)|0;d|=e;if(0==e&&!b)break;f++;if(b&&f==b)break}b||(b=f);e="";if(128>d){for(;0<b;)d=String.fromCharCode.apply(String,A.subarray(a,a+Math.min(b,1024))),e=e?e+d:d,a+=1024,b-=1024;return e}return Ea(A,a)}var Fa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function Ea(a,b){for(var d=b;a[d];)++d;if(16<d-b&&a.subarray&&Fa)return Fa.decode(a.subarray(b,d));for(d="";;){var e=a[b++];if(!e)return d;if(e&128){var f=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|f);else{var g=a[b++]&63;if(224==(e&240))e=(e&15)<<12|f<<6|g;else{var m=a[b++]&63;if(240==(e&248))e=(e&7)<<18|f<<12|g<<6|m;else{var t=a[b++]&63;if(248==(e&252))e=(e&3)<<24|f<<18|g<<12|m<<6|t;else{var u=a[b++]&63;e=(e&1)<<30|f<<24|g<<18|m<<12|t<<6|u}}}65536>e?d+=String.fromCharCode(e):(e-=
65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}}
function Aa(a,b,d,e){if(!(0<e))return 0;var f=d;e=d+e-1;for(var g=0;g<a.length;++g){var m=a.charCodeAt(g);55296<=m&&57343>=m&&(m=65536+((m&1023)<<10)|a.charCodeAt(++g)&1023);if(127>=m){if(d>=e)break;b[d++]=m}else{if(2047>=m){if(d+1>=e)break;b[d++]=192|m>>6}else{if(65535>=m){if(d+2>=e)break;b[d++]=224|m>>12}else{if(2097151>=m){if(d+3>=e)break;b[d++]=240|m>>18}else{if(67108863>=m){if(d+4>=e)break;b[d++]=248|m>>24}else{if(d+5>=e)break;b[d++]=252|m>>30;b[d++]=128|m>>24&63}b[d++]=128|m>>18&63}b[d++]=128|
m>>12&63}b[d++]=128|m>>6&63}b[d++]=128|m&63}}b[d]=0;return d-f}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function Ga(a){return a.replace(/__Z[\w\d_]+/g,function(a){ma("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");return a===a?a:a+" ["+a+"]"})}
function Ia(){a:{var a=Error();if(!a.stack){try{throw Error(0);}catch(b){a=b}if(!a.stack){a="(no stack trace available)";break a}}a=a.stack.toString()}c.extraStackTrace&&(a+="\n"+c.extraStackTrace());return Ga(a)}var buffer,y,A,ra,v,B,wa,xa;
function Ja(){c.HEAP8=y=new Int8Array(buffer);c.HEAP16=ra=new Int16Array(buffer);c.HEAP32=v=new Int32Array(buffer);c.HEAPU8=A=new Uint8Array(buffer);c.HEAPU16=new Uint16Array(buffer);c.HEAPU32=B=new Uint32Array(buffer);c.HEAPF32=wa=new Float32Array(buffer);c.HEAPF64=xa=new Float64Array(buffer)}var Ka,r,q,La,Ma,C,Na,w;Ka=r=La=Ma=C=Na=w=0;q=!1;
function Oa(){34821223==B[(C>>2)-1]&&2310721022==B[(C>>2)-2]||p("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x02135467, but received 0x"+B[(C>>2)-2].toString(16)+" "+B[(C>>2)-1].toString(16));if(1668509029!==v[0])throw"Runtime error: The application has corrupted its heap memory area (address zero)!";}
function Pa(){p("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+x+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}var Qa=c.TOTAL_STACK||5242880,x=c.TOTAL_MEMORY||67108864;x<Qa&&c.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+x+"! (TOTAL_STACK="+Qa+")");
assert("undefined"!==typeof Int32Array&&"undefined"!==typeof Float64Array&&void 0!==Int32Array.prototype.subarray&&void 0!==Int32Array.prototype.set,"JS engine does not provide full typed array support");
c.buffer?(buffer=c.buffer,assert(buffer.byteLength===x,"provided buffer should be "+x+" bytes, but it is "+buffer.byteLength)):("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(assert(0===x%65536),c.wasmMemory=new WebAssembly.Memory({initial:x/65536,maximum:x/65536}),buffer=c.wasmMemory.buffer):buffer=new ArrayBuffer(x),assert(buffer.byteLength===x),c.buffer=buffer);Ja();v[0]=1668509029;ra[1]=25459;
if(115!==A[2]||99!==A[3])throw"Runtime error: expected the system to be little-endian!";function Ra(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var d=b.Ia;"number"===typeof d?void 0===b.X?c.dynCall_v(d):c.dynCall_vi(d,b.X):d(void 0===b.X?null:b.X)}}}var Sa=[],Ta=[],Ua=[],Va=[],Wa=[],D=!1,F=!1;function Xa(){var a=c.preRun.shift();Sa.unshift(a)}assert(Math.imul&&Math.fround&&Math.clz32&&Math.trunc,"this is a legacy browser, build with LEGACY_VM_SUPPORT");
var sa=Math.abs,va=Math.ceil,ua=Math.floor,ta=Math.min,H=0,I=null,Ya=null,Za={};function $a(a){for(var b=a;Za[a];)a=b+Math.random();return a}
function ab(a){H++;c.monitorRunDependencies&&c.monitorRunDependencies(H);a?(assert(!Za[a]),Za[a]=1,null===I&&"undefined"!==typeof setInterval&&(I=setInterval(function(){if(za)clearInterval(I),I=null;else{var a=!1,d;for(d in Za)a||(a=!0,c.printErr("still waiting on run dependencies:")),c.printErr("dependency: "+d);a&&c.printErr("(end of list)")}},1E4))):c.printErr("warning: run dependency added without ID")}
function bb(a){H--;c.monitorRunDependencies&&c.monitorRunDependencies(H);a?(assert(Za[a]),delete Za[a]):c.printErr("warning: run dependency removed without ID");0==H&&(null!==I&&(clearInterval(I),I=null),Ya&&(a=Ya,Ya=null,a()))}c.preloadedImages={};c.preloadedAudios={};function cb(a){return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}
(function(){function a(){try{if(c.wasmBinary)return new Uint8Array(c.wasmBinary);if(c.readBinary)return c.readBinary(f);throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";}catch(G){p(G)}}function b(){return c.wasmBinary||!k&&!l||"function"!==typeof fetch?new Promise(function(b){b(a())}):fetch(f,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+f+
"'";return a.arrayBuffer()}).catch(function(){return a()})}function d(a){function d(a){t=a.exports;if(t.memory){a=t.memory;var b=c.buffer;a.byteLength<b.byteLength&&c.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");b=new Int8Array(b);(new Int8Array(a)).set(b);c.buffer=buffer=a;Ja()}c.asm=t;c.usingWasm=!0;bb("wasm-instantiate")}function e(a){assert(c===G,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
G=null;d(a.instance)}function g(a){b().then(function(a){return WebAssembly.instantiate(a,m)}).then(a).catch(function(a){c.printErr("failed to asynchronously prepare wasm: "+a);p(a)})}if("object"!==typeof WebAssembly)return c.printErr("no native wasm support detected"),!1;if(!(c.wasmMemory instanceof WebAssembly.Memory))return c.printErr("no native wasm Memory in use"),!1;a.memory=c.wasmMemory;m.global={NaN:NaN,Infinity:Infinity};m["global.Math"]=Math;m.env=a;ab("wasm-instantiate");if(c.instantiateWasm)try{return c.instantiateWasm(m,
d)}catch(na){return c.printErr("Module.instantiateWasm callback failed with error: "+na),!1}var G=c;c.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||cb(f)||"function"!==typeof fetch?g(e):WebAssembly.instantiateStreaming(fetch(f,{credentials:"same-origin"}),m).then(e).catch(function(a){c.printErr("wasm streaming compile failed: "+a);c.printErr("falling back to ArrayBuffer instantiation");g(e)});return{}}var e="s98.wast",f="s98.wasm",g="s98.temp.asm.js";"function"===typeof c.locateFile&&
(cb(e)||(e=c.locateFile(e)),cb(f)||(f=c.locateFile(f)),cb(g)||(g=c.locateFile(g)));var m={global:null,env:null,asm2wasm:{"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}},parent:c},t=null;c.asmPreload=c.asm;var u=c.reallocBuffer;c.reallocBuffer=function(a){if("asmjs"===E)var b=u(a);else a:{var d=c.usingWasm?65536:16777216;0<a%d&&(a+=d-a%d);d=c.buffer.byteLength;if(c.usingWasm)try{b=-1!==c.wasmMemory.grow((a-d)/65536)?c.buffer=c.wasmMemory.buffer:null;break a}catch(jc){console.error("Module.reallocBuffer: Attempted to grow from "+
d+" bytes to "+a+" bytes, but got error: "+jc);b=null;break a}b=void 0}return b};var E="";c.asm=function(a,b){if(!b.table){a=c.wasmTableSize;void 0===a&&(a=1024);var e=c.wasmMaxTableSize;b.table="object"===typeof WebAssembly&&"function"===typeof WebAssembly.Table?void 0!==e?new WebAssembly.Table({initial:a,maximum:e,element:"anyfunc"}):new WebAssembly.Table({initial:a,element:"anyfunc"}):Array(a);c.wasmTable=b.table}b.memoryBase||(b.memoryBase=c.STATIC_BASE);b.tableBase||(b.tableBase=0);(b=d(b))||
p("no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods");return b}})();Ka=1024;r=Ka+633376;Ta.push({Ia:function(){eb()}});c.STATIC_BASE=Ka;c.STATIC_BUMP=633376;var fb=r;r+=16;assert(0==fb%8);function gb(){return!!gb.u}var hb=0,ib=[],J={};function jb(a){if(!a||J[a])return a;for(var b in J)if(J[b].ia===a)return b;return a}
function ___cxa_free_exception(a){try{return kb(a)}catch(b){c.printErr("exception during cxa_free_exception: "+b)}}function lb(){var a=hb;if(!a)return(ja(0),0)|0;var b=J[a],d=b.type;if(!d)return(ja(0),a)|0;var e=Array.prototype.slice.call(arguments);c.___cxa_is_pointer_type(d);mb||(mb=nb(4));qa(mb|0,a|0);a=mb;for(var f=0;f<e.length;f++)if(e[f]&&c.___cxa_can_catch(e[f],d,a))return a=z(a|0,4,0)|0,b.ia=a,(ja(e[f]),a)|0;a=z(a|0,4,0)|0;return(ja(d),a)|0}
var mb,K={F:1,s:2,Jc:3,Fb:4,B:5,ha:6,Ya:7,cc:8,N:9,mb:10,da:11,Tc:11,Ca:12,T:13,yb:14,pc:15,U:16,ea:17,Uc:18,W:19,fa:20,I:21,h:22,Yb:23,Ba:24,D:25,Qc:26,zb:27,lc:28,O:29,Gc:30,Rb:31,zc:32,vb:33,Dc:34,hc:42,Cb:43,nb:44,Ib:45,Jb:46,Kb:47,Qb:48,Rc:49,ac:50,Hb:51,sb:35,dc:37,eb:52,hb:53,Vc:54,Zb:55,ib:56,jb:57,tb:35,kb:59,nc:60,bc:61,Nc:62,mc:63,ic:64,jc:65,Fc:66,ec:67,ab:68,Kc:69,ob:70,Ac:71,Tb:72,wb:73,gb:74,uc:76,fb:77,Ec:78,Lb:79,Mb:80,Pb:81,Ob:82,Nb:83,oc:38,ga:39,Ub:36,V:40,vc:95,yc:96,rb:104,$b:105,
bb:97,Cc:91,sc:88,kc:92,Hc:108,qb:111,Za:98,pb:103,Xb:101,Vb:100,Oc:110,Ab:112,Bb:113,Eb:115,cb:114,ub:89,Sb:90,Bc:93,Ic:94,$a:99,Wb:102,Gb:106,qc:107,Pc:109,Sc:87,xb:122,Lc:116,tc:95,fc:123,Db:84,wc:75,lb:125,rc:131,xc:130,Mc:86},ob={0:"Success",1:"Not super-user",2:"No such file or directory",3:"No such process",4:"Interrupted system call",5:"I/O error",6:"No such device or address",7:"Arg list too long",8:"Exec format error",9:"Bad file number",10:"No children",11:"No more processes",12:"Not enough core",
13:"Permission denied",14:"Bad address",15:"Block device required",16:"Mount device busy",17:"File exists",18:"Cross-device link",19:"No such device",20:"Not a directory",21:"Is a directory",22:"Invalid argument",23:"Too many open files in system",24:"Too many open files",25:"Not a typewriter",26:"Text file busy",27:"File too large",28:"No space left on device",29:"Illegal seek",30:"Read only file system",31:"Too many links",32:"Broken pipe",33:"Math arg out of domain of func",34:"Math result not representable",
35:"File locking deadlock error",36:"File or path name too long",37:"No record locks available",38:"Function not implemented",39:"Directory not empty",40:"Too many symbolic links",42:"No message of desired type",43:"Identifier removed",44:"Channel number out of range",45:"Level 2 not synchronized",46:"Level 3 halted",47:"Level 3 reset",48:"Link number out of range",49:"Protocol driver not attached",50:"No CSI structure available",51:"Level 2 halted",52:"Invalid exchange",53:"Invalid request descriptor",
54:"Exchange full",55:"No anode",56:"Invalid request code",57:"Invalid slot",59:"Bad font file fmt",60:"Device not a stream",61:"No data (for no delay io)",62:"Timer expired",63:"Out of streams resources",64:"Machine is not on the network",65:"Package not installed",66:"The object is remote",67:"The link has been severed",68:"Advertise error",69:"Srmount error",70:"Communication error on send",71:"Protocol error",72:"Multihop attempted",73:"Cross mount point (not really error)",74:"Trying to read unreadable message",
75:"Value too large for defined data type",76:"Given log. name not unique",77:"f.d. invalid for this operation",78:"Remote address changed",79:"Can   access a needed shared lib",80:"Accessing a corrupted shared lib",81:".lib section in a.out corrupted",82:"Attempting to link in too many libs",83:"Attempting to exec a shared library",84:"Illegal byte sequence",86:"Streams pipe error",87:"Too many users",88:"Socket operation on non-socket",89:"Destination address required",90:"Message too long",91:"Protocol wrong type for socket",
92:"Protocol not available",93:"Unknown protocol",94:"Socket type not supported",95:"Not supported",96:"Protocol family not supported",97:"Address family not supported by protocol family",98:"Address already in use",99:"Address not available",100:"Network interface is not configured",101:"Network is unreachable",102:"Connection reset by network",103:"Connection aborted",104:"Connection reset by peer",105:"No buffer space available",106:"Socket is already connected",107:"Socket is not connected",108:"Can't send after socket shutdown",
109:"Too many references",110:"Connection timed out",111:"Connection refused",112:"Host is down",113:"Host is unreachable",114:"Socket already connected",115:"Connection already in progress",116:"Stale file handle",122:"Quota exceeded",123:"No medium (in tape drive)",125:"Operation canceled",130:"Previous owner died",131:"State not recoverable"};function pb(a){c.___errno_location?qa(c.___errno_location()|0,a|0):c.printErr("failed to set errno from JS");return a}
function qb(a,b){for(var d=0,e=a.length-1;0<=e;e--){var f=a[e];"."===f?a.splice(e,1):".."===f?(a.splice(e,1),d++):d&&(a.splice(e,1),d--)}if(b)for(;d;d--)a.unshift("..");return a}function rb(a){var b="/"===a.charAt(0),d="/"===a.substr(-1);(a=qb(a.split("/").filter(function(a){return!!a}),!b).join("/"))||b||(a=".");a&&d&&(a+="/");return(b?"/":"")+a}
function sb(a){var b=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);a=b[0];b=b[1];if(!a&&!b)return".";b&&(b=b.substr(0,b.length-1));return a+b}function tb(a){if("/"===a)return"/";var b=a.lastIndexOf("/");return-1===b?a:a.substr(b+1)}function ub(){var a=Array.prototype.slice.call(arguments,0);return rb(a.join("/"))}function L(a,b){return rb(a+"/"+b)}
function vb(){for(var a="",b=!1,d=arguments.length-1;-1<=d&&!b;d--){b=0<=d?arguments[d]:"/";if("string"!==typeof b)throw new TypeError("Arguments to path.resolve must be strings");if(!b)return"";a=b+"/"+a;b="/"===b.charAt(0)}a=qb(a.split("/").filter(function(a){return!!a}),!b).join("/");return(b?"/":"")+a||"."}var wb=[];function xb(a,b){wb[a]={input:[],output:[],H:b};yb(a,zb)}
var zb={open:function(a){var b=wb[a.node.rdev];if(!b)throw new M(K.W);a.tty=b;a.seekable=!1},close:function(a){a.tty.H.flush(a.tty)},flush:function(a){a.tty.H.flush(a.tty)},read:function(a,b,d,e){if(!a.tty||!a.tty.H.ta)throw new M(K.ha);for(var f=0,g=0;g<e;g++){try{var m=a.tty.H.ta(a.tty)}catch(t){throw new M(K.B);}if(void 0===m&&0===f)throw new M(K.da);if(null===m||void 0===m)break;f++;b[d+g]=m}f&&(a.node.timestamp=Date.now());return f},write:function(a,b,d,e){if(!a.tty||!a.tty.H.aa)throw new M(K.ha);
for(var f=0;f<e;f++)try{a.tty.H.aa(a.tty,b[d+f])}catch(g){throw new M(K.B);}e&&(a.node.timestamp=Date.now());return f}},Bb={ta:function(a){if(!a.input.length){var b=null;if(n){var d=new Buffer(256),e=0,f=process.stdin.fd;if("win32"!=process.platform){var g=!1;try{f=fs.openSync("/dev/stdin","r"),g=!0}catch(m){}}try{e=fs.readSync(f,d,0,256,null)}catch(m){if(-1!=m.toString().indexOf("EOF"))e=0;else throw m;}g&&fs.closeSync(f);0<e?b=d.slice(0,e).toString("utf-8"):b=null}else"undefined"!=typeof window&&
"function"==typeof window.prompt?(b=window.prompt("Input: "),null!==b&&(b+="\n")):"function"==typeof readline&&(b=readline(),null!==b&&(b+="\n"));if(!b)return null;a.input=Ab(b)}return a.input.shift()},aa:function(a,b){null===b||10===b?(c.print(Ea(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&0<a.output.length&&(c.print(Ea(a.output,0)),a.output=[])}},Cb={aa:function(a,b){null===b||10===b?(c.printErr(Ea(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&
0<a.output.length&&(c.printErr(Ea(a.output,0)),a.output=[])}},N={m:null,j:function(){return N.createNode(null,"/",16895,0)},createNode:function(a,b,d,e){if(24576===(d&61440)||4096===(d&61440))throw new M(K.F);N.m||(N.m={dir:{node:{o:N.c.o,i:N.c.i,lookup:N.c.lookup,K:N.c.K,rename:N.c.rename,unlink:N.c.unlink,rmdir:N.c.rmdir,readdir:N.c.readdir,symlink:N.c.symlink},stream:{A:N.f.A}},file:{node:{o:N.c.o,i:N.c.i},stream:{A:N.f.A,read:N.f.read,write:N.f.write,ja:N.f.ja,wa:N.f.wa,za:N.f.za}},link:{node:{o:N.c.o,
i:N.c.i,readlink:N.c.readlink},stream:{}},na:{node:{o:N.c.o,i:N.c.i},stream:Db}});d=Eb(a,b,d,e);O(d.mode)?(d.c=N.m.dir.node,d.f=N.m.dir.stream,d.b={}):32768===(d.mode&61440)?(d.c=N.m.file.node,d.f=N.m.file.stream,d.g=0,d.b=null):40960===(d.mode&61440)?(d.c=N.m.link.node,d.f=N.m.link.stream):8192===(d.mode&61440)&&(d.c=N.m.na.node,d.f=N.m.na.stream);d.timestamp=Date.now();a&&(a.b[b]=d);return d},Ja:function(a){if(a.b&&a.b.subarray){for(var b=[],d=0;d<a.g;++d)b.push(a.b[d]);return b}return a.b},Yc:function(a){return a.b?
a.b.subarray?a.b.subarray(0,a.g):new Uint8Array(a.b):new Uint8Array},pa:function(a,b){a.b&&a.b.subarray&&b>a.b.length&&(a.b=N.Ja(a),a.g=a.b.length);if(!a.b||a.b.subarray){var d=a.b?a.b.length:0;d>=b||(b=Math.max(b,d*(1048576>d?2:1.125)|0),0!=d&&(b=Math.max(b,256)),d=a.b,a.b=new Uint8Array(b),0<a.g&&a.b.set(d.subarray(0,a.g),0))}else for(!a.b&&0<b&&(a.b=[]);a.b.length<b;)a.b.push(0)},Ta:function(a,b){if(a.g!=b)if(0==b)a.b=null,a.g=0;else{if(!a.b||a.b.subarray){var d=a.b;a.b=new Uint8Array(new ArrayBuffer(b));
d&&a.b.set(d.subarray(0,Math.min(b,a.g)))}else if(a.b||(a.b=[]),a.b.length>b)a.b.length=b;else for(;a.b.length<b;)a.b.push(0);a.g=b}},c:{o:function(a){var b={};b.dev=8192===(a.mode&61440)?a.id:1;b.ino=a.id;b.mode=a.mode;b.nlink=1;b.uid=0;b.gid=0;b.rdev=a.rdev;O(a.mode)?b.size=4096:32768===(a.mode&61440)?b.size=a.g:40960===(a.mode&61440)?b.size=a.link.length:b.size=0;b.atime=new Date(a.timestamp);b.mtime=new Date(a.timestamp);b.ctime=new Date(a.timestamp);b.C=4096;b.blocks=Math.ceil(b.size/b.C);return b},
i:function(a,b){void 0!==b.mode&&(a.mode=b.mode);void 0!==b.timestamp&&(a.timestamp=b.timestamp);void 0!==b.size&&N.Ta(a,b.size)},lookup:function(){throw Fb[K.s];},K:function(a,b,d,e){return N.createNode(a,b,d,e)},rename:function(a,b,d){if(O(a.mode)){try{var e=Gb(b,d)}catch(g){}if(e)for(var f in e.b)throw new M(K.ga);}delete a.parent.b[a.name];a.name=d;b.b[d]=a;a.parent=b},unlink:function(a,b){delete a.b[b]},rmdir:function(a,b){var d=Gb(a,b),e;for(e in d.b)throw new M(K.ga);delete a.b[b]},readdir:function(a){var b=
[".",".."],d;for(d in a.b)a.b.hasOwnProperty(d)&&b.push(d);return b},symlink:function(a,b,d){a=N.createNode(a,b,41471,0);a.link=d;return a},readlink:function(a){if(40960!==(a.mode&61440))throw new M(K.h);return a.link}},f:{read:function(a,b,d,e,f){var g=a.node.b;if(f>=a.node.g)return 0;a=Math.min(a.node.g-f,e);assert(0<=a);if(8<a&&g.subarray)b.set(g.subarray(f,f+a),d);else for(e=0;e<a;e++)b[d+e]=g[f+e];return a},write:function(a,b,d,e,f,g){if(!e)return 0;a=a.node;a.timestamp=Date.now();if(b.subarray&&
(!a.b||a.b.subarray)){if(g)return assert(0===f,"canOwn must imply no weird position inside the file"),a.b=b.subarray(d,d+e),a.g=e;if(0===a.g&&0===f)return a.b=new Uint8Array(b.subarray(d,d+e)),a.g=e;if(f+e<=a.g)return a.b.set(b.subarray(d,d+e),f),e}N.pa(a,f+e);if(a.b.subarray&&b.subarray)a.b.set(b.subarray(d,d+e),f);else for(g=0;g<e;g++)a.b[f+g]=b[d+g];a.g=Math.max(a.g,f+e);return e},A:function(a,b,d){1===d?b+=a.position:2===d&&32768===(a.node.mode&61440)&&(b+=a.node.g);if(0>b)throw new M(K.h);return b},
ja:function(a,b,d){N.pa(a.node,b+d);a.node.g=Math.max(a.node.g,b+d)},wa:function(a,b,d,e,f,g,m){if(32768!==(a.node.mode&61440))throw new M(K.W);d=a.node.b;if(m&2||d.buffer!==b&&d.buffer!==b.buffer){if(0<f||f+e<a.node.g)d.subarray?d=d.subarray(f,f+e):d=Array.prototype.slice.call(d,f,f+e);a=!0;e=nb(e);if(!e)throw new M(K.Ca);b.set(d,e)}else a=!1,e=d.byteOffset;return{Sa:e,Wc:a}},za:function(a,b,d,e,f){if(32768!==(a.node.mode&61440))throw new M(K.W);if(f&2)return 0;N.f.write(a,b,0,e,d,!1);return 0}}},
P={R:!1,Wa:function(){P.R=!!process.platform.match(/^win/);var a=process.binding("constants");a.fs&&(a=a.fs);P.qa={1024:a.O_APPEND,64:a.O_CREAT,128:a.O_EXCL,0:a.O_RDONLY,2:a.O_RDWR,4096:a.O_SYNC,512:a.O_TRUNC,1:a.O_WRONLY}},ka:function(a){return Buffer.u?Buffer.from(a):new Buffer(a)},j:function(a){assert(n);return P.createNode(null,"/",P.sa(a.$.root),0)},createNode:function(a,b,d){if(!O(d)&&32768!==(d&61440)&&40960!==(d&61440))throw new M(K.h);a=Eb(a,b,d);a.c=P.c;a.f=P.f;return a},sa:function(a){try{var b=
fs.lstatSync(a);P.R&&(b.mode=b.mode|(b.mode&292)>>2)}catch(d){if(!d.code)throw d;throw new M(K[d.code]);}return b.mode},l:function(a){for(var b=[];a.parent!==a;)b.push(a.name),a=a.parent;b.push(a.j.$.root);b.reverse();return ub.apply(null,b)},Ha:function(a){a&=-2656257;var b=0,d;for(d in P.qa)a&d&&(b|=P.qa[d],a^=d);if(a)throw new M(K.h);return b},c:{o:function(a){a=P.l(a);try{var b=fs.lstatSync(a)}catch(d){if(!d.code)throw d;throw new M(K[d.code]);}P.R&&!b.C&&(b.C=4096);P.R&&!b.blocks&&(b.blocks=
(b.size+b.C-1)/b.C|0);return{dev:b.dev,ino:b.ino,mode:b.mode,nlink:b.nlink,uid:b.uid,gid:b.gid,rdev:b.rdev,size:b.size,atime:b.atime,mtime:b.mtime,ctime:b.ctime,C:b.C,blocks:b.blocks}},i:function(a,b){var d=P.l(a);try{void 0!==b.mode&&(fs.chmodSync(d,b.mode),a.mode=b.mode),void 0!==b.size&&fs.truncateSync(d,b.size)}catch(e){if(!e.code)throw e;throw new M(K[e.code]);}},lookup:function(a,b){var d=L(P.l(a),b);d=P.sa(d);return P.createNode(a,b,d)},K:function(a,b,d,e){a=P.createNode(a,b,d,e);b=P.l(a);
try{O(a.mode)?fs.mkdirSync(b,a.mode):fs.writeFileSync(b,"",{mode:a.mode})}catch(f){if(!f.code)throw f;throw new M(K[f.code]);}return a},rename:function(a,b,d){a=P.l(a);b=L(P.l(b),d);try{fs.renameSync(a,b)}catch(e){if(!e.code)throw e;throw new M(K[e.code]);}},unlink:function(a,b){a=L(P.l(a),b);try{fs.unlinkSync(a)}catch(d){if(!d.code)throw d;throw new M(K[d.code]);}},rmdir:function(a,b){a=L(P.l(a),b);try{fs.rmdirSync(a)}catch(d){if(!d.code)throw d;throw new M(K[d.code]);}},readdir:function(a){a=P.l(a);
try{return fs.readdirSync(a)}catch(b){if(!b.code)throw b;throw new M(K[b.code]);}},symlink:function(a,b,d){a=L(P.l(a),b);try{fs.symlinkSync(d,a)}catch(e){if(!e.code)throw e;throw new M(K[e.code]);}},readlink:function(a){var b=P.l(a);try{return b=fs.readlinkSync(b),b=Hb.relative(Hb.resolve(a.j.$.root),b)}catch(d){if(!d.code)throw d;throw new M(K[d.code]);}}},f:{open:function(a){var b=P.l(a.node);try{32768===(a.node.mode&61440)&&(a.M=fs.openSync(b,P.Ha(a.flags)))}catch(d){if(!d.code)throw d;throw new M(K[d.code]);
}},close:function(a){try{32768===(a.node.mode&61440)&&a.M&&fs.closeSync(a.M)}catch(b){if(!b.code)throw b;throw new M(K[b.code]);}},read:function(a,b,d,e,f){if(0===e)return 0;try{return fs.readSync(a.M,P.ka(b.buffer),d,e,f)}catch(g){throw new M(K[g.code]);}},write:function(a,b,d,e,f){try{return fs.writeSync(a.M,P.ka(b.buffer),d,e,f)}catch(g){throw new M(K[g.code]);}},A:function(a,b,d){if(1===d)b+=a.position;else if(2===d&&32768===(a.node.mode&61440))try{b+=fs.fstatSync(a.M).size}catch(e){throw new M(K[e.code]);
}if(0>b)throw new M(K.h);return b}}};r+=16;r+=16;r+=16;var Ib=null,Jb={},Q=[],Kb=1,R=null,Lb=!0,S={},M=null,Fb={};
function T(a,b){a=vb("/",a);b=b||{};if(!a)return{path:"",node:null};var d={ra:!0,ba:0},e;for(e in d)void 0===b[e]&&(b[e]=d[e]);if(8<b.ba)throw new M(K.V);a=qb(a.split("/").filter(function(a){return!!a}),!1);var f=Ib;d="/";for(e=0;e<a.length;e++){var g=e===a.length-1;if(g&&b.parent)break;f=Gb(f,a[e]);d=L(d,a[e]);f.L&&(!g||g&&b.ra)&&(f=f.L.root);if(!g||b.J)for(g=0;40960===(f.mode&61440);)if(f=Mb(d),d=vb(sb(d),f),f=T(d,{ba:b.ba}).node,40<g++)throw new M(K.V);}return{path:d,node:f}}
function U(a){for(var b;;){if(a===a.parent)return a=a.j.ya,b?"/"!==a[a.length-1]?a+"/"+b:a+b:a;b=b?a.name+"/"+b:a.name;a=a.parent}}function Nb(a,b){for(var d=0,e=0;e<b.length;e++)d=(d<<5)-d+b.charCodeAt(e)|0;return(a+d>>>0)%R.length}function Ob(a){var b=Nb(a.parent.id,a.name);a.G=R[b];R[b]=a}function Gb(a,b){var d;if(d=(d=Pb(a,"x"))?d:a.c.lookup?0:K.T)throw new M(d,a);for(d=R[Nb(a.id,b)];d;d=d.G){var e=d.name;if(d.parent.id===a.id&&e===b)return d}return a.c.lookup(a,b)}
function Eb(a,b,d,e){Qb||(Qb=function(a,b,d,e){a||(a=this);this.parent=a;this.j=a.j;this.L=null;this.id=Kb++;this.name=b;this.mode=d;this.c={};this.f={};this.rdev=e},Qb.prototype={},Object.defineProperties(Qb.prototype,{read:{get:function(){return 365===(this.mode&365)},set:function(a){a?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146===(this.mode&146)},set:function(a){a?this.mode|=146:this.mode&=-147}},Ma:{get:function(){return O(this.mode)}},La:{get:function(){return 8192===(this.mode&
61440)}}}));a=new Qb(a,b,d,e);Ob(a);return a}function O(a){return 16384===(a&61440)}var Rb={r:0,rs:1052672,"r+":2,w:577,wx:705,xw:705,"w+":578,"wx+":706,"xw+":706,a:1089,ax:1217,xa:1217,"a+":1090,"ax+":1218,"xa+":1218};function Sb(a){var b=["r","w","rw"][a&3];a&512&&(b+="w");return b}function Pb(a,b){if(Lb)return 0;if(-1===b.indexOf("r")||a.mode&292){if(-1!==b.indexOf("w")&&!(a.mode&146)||-1!==b.indexOf("x")&&!(a.mode&73))return K.T}else return K.T;return 0}
function Tb(a,b){try{return Gb(a,b),K.ea}catch(d){}return Pb(a,"wx")}function Ub(){var a=4096;for(var b=0;b<=a;b++)if(!Q[b])return b;throw new M(K.Ba);}function Vb(a){Wb||(Wb=function(){},Wb.prototype={},Object.defineProperties(Wb.prototype,{object:{get:function(){return this.node},set:function(a){this.node=a}}}));var b=new Wb,d;for(d in a)b[d]=a[d];a=b;b=Ub();a.fd=b;return Q[b]=a}var Db={open:function(a){a.f=Jb[a.node.rdev].f;a.f.open&&a.f.open(a)},A:function(){throw new M(K.O);}};
function yb(a,b){Jb[a]={f:b}}function Xb(a,b){var d="/"===b,e=!b;if(d&&Ib)throw new M(K.U);if(!d&&!e){var f=T(b,{ra:!1});b=f.path;f=f.node;if(f.L)throw new M(K.U);if(!O(f.mode))throw new M(K.fa);}b={type:a,$:{},ya:b,Oa:[]};a=a.j(b);a.j=b;b.root=a;d?Ib=a:f&&(f.L=b,f.j&&f.j.Oa.push(b))}function Yb(a,b,d){var e=T(a,{parent:!0}).node;a=tb(a);if(!a||"."===a||".."===a)throw new M(K.h);var f=Tb(e,a);if(f)throw new M(f);if(!e.c.K)throw new M(K.F);return e.c.K(e,a,b,d)}
function V(a,b){return Yb(a,(void 0!==b?b:511)&1023|16384,0)}function Zb(a,b,d){"undefined"===typeof d&&(d=b,b=438);return Yb(a,b|8192,d)}function $b(a,b){if(!vb(a))throw new M(K.s);var d=T(b,{parent:!0}).node;if(!d)throw new M(K.s);b=tb(b);var e=Tb(d,b);if(e)throw new M(e);if(!d.c.symlink)throw new M(K.F);return d.c.symlink(d,b,a)}
function ac(a){var b=T(a,{parent:!0}).node,d=tb(a),e=Gb(b,d);a:{try{var f=Gb(b,d)}catch(m){f=m.v;break a}var g=Pb(b,"wx");f=g?g:O(f.mode)?K.I:0}if(f)throw new M(f);if(!b.c.unlink)throw new M(K.F);if(e.L)throw new M(K.U);try{S.willDeletePath&&S.willDeletePath(a)}catch(m){console.log("FS.trackingDelegate['willDeletePath']('"+a+"') threw an exception: "+m.message)}b.c.unlink(b,d);b=Nb(e.parent.id,e.name);if(R[b]===e)R[b]=e.G;else for(b=R[b];b;){if(b.G===e){b.G=e.G;break}b=b.G}try{if(S.onDeletePath)S.onDeletePath(a)}catch(m){console.log("FS.trackingDelegate['onDeletePath']('"+
a+"') threw an exception: "+m.message)}}function Mb(a){a=T(a).node;if(!a)throw new M(K.s);if(!a.c.readlink)throw new M(K.h);return vb(U(a.parent),a.c.readlink(a))}function bc(a,b){var d;"string"===typeof a?d=T(a,{J:!0}).node:d=a;if(!d.c.i)throw new M(K.F);d.c.i(d,{mode:b&4095|d.mode&-4096,timestamp:Date.now()})}
function cc(a,b,d){if(""===a)throw new M(K.s);if("string"===typeof b){var e=Rb[b];if("undefined"===typeof e)throw Error("Unknown file open mode: "+b);b=e}d=b&64?("undefined"===typeof d?438:d)&4095|32768:0;if("object"===typeof a)var f=a;else{a=rb(a);try{f=T(a,{J:!(b&131072)}).node}catch(m){}}e=!1;if(b&64)if(f){if(b&128)throw new M(K.ea);}else f=Yb(a,d,0),e=!0;if(!f)throw new M(K.s);8192===(f.mode&61440)&&(b&=-513);if(b&65536&&!O(f.mode))throw new M(K.fa);if(!e&&(d=f?40960===(f.mode&61440)?K.V:O(f.mode)&&
("r"!==Sb(b)||b&512)?K.I:Pb(f,Sb(b)):K.s))throw new M(d);if(b&512){d=f;var g;"string"===typeof d?g=T(d,{J:!0}).node:g=d;if(!g.c.i)throw new M(K.F);if(O(g.mode))throw new M(K.I);if(32768!==(g.mode&61440))throw new M(K.h);if(d=Pb(g,"w"))throw new M(d);g.c.i(g,{size:0,timestamp:Date.now()})}b&=-641;f=Vb({node:f,path:U(f),flags:b,seekable:!0,position:0,f:f.f,Xa:[],error:!1});f.f.open&&f.f.open(f);!c.logReadFiles||b&1||(dc||(dc={}),a in dc||(dc[a]=1,c.printErr("read file: "+a)));try{S.onOpenFile&&(g=0,
1!==(b&2097155)&&(g|=1),0!==(b&2097155)&&(g|=2),S.onOpenFile(a,g))}catch(m){console.log("FS.trackingDelegate['onOpenFile']('"+a+"', flags) threw an exception: "+m.message)}return f}function ec(a){a.Y&&(a.Y=null);try{a.f.close&&a.f.close(a)}catch(b){throw b;}finally{Q[a.fd]=null}}function fc(a,b,d){if(!a.seekable||!a.f.A)throw new M(K.O);a.position=a.f.A(a,b,d);a.Xa=[];return a.position}
function hc(a,b,d,e,f,g){if(0>e||0>f)throw new M(K.h);if(0===(a.flags&2097155))throw new M(K.N);if(O(a.node.mode))throw new M(K.I);if(!a.f.write)throw new M(K.h);a.flags&1024&&(f=fc(a,0,2));var m=!0;if("undefined"===typeof f)f=a.position,m=!1;else if(!a.seekable)throw new M(K.O);b=a.f.write(a,b,d,e,f,g);m||(a.position+=b);try{if(a.path&&S.onWriteToFile)S.onWriteToFile(a.path)}catch(t){console.log("FS.trackingDelegate['onWriteToFile']('"+path+"') threw an exception: "+t.message)}return b}
function ic(){M||(M=function(a,b){this.node=b;this.Va=function(a){this.v=a;for(var b in K)if(K[b]===a){this.code=b;break}};this.Va(a);this.message=ob[a];this.stack&&Object.defineProperty(this,"stack",{value:Error().stack,writable:!0});this.stack&&(this.stack=Ga(this.stack))},M.prototype=Error(),M.prototype.constructor=M,[K.s].forEach(function(a){Fb[a]=new M(a);Fb[a].stack="<generic error, no stack>"}))}var kc;function lc(a,b){var d=0;a&&(d|=365);b&&(d|=146);return d}
function mc(a,b,d,e){a=L("string"===typeof a?a:U(a),b);return V(a,lc(d,e))}function nc(a,b){a="string"===typeof a?a:U(a);for(b=b.split("/").reverse();b.length;){var d=b.pop();if(d){var e=L(a,d);try{V(e)}catch(f){}a=e}}return e}function oc(a,b,d,e){a=L("string"===typeof a?a:U(a),b);d=lc(d,e);return Yb(a,(void 0!==d?d:438)&4095|32768,0)}
function pc(a,b,d,e,f,g){a=b?L("string"===typeof a?a:U(a),b):a;e=lc(e,f);f=Yb(a,(void 0!==e?e:438)&4095|32768,0);if(d){if("string"===typeof d){a=Array(d.length);b=0;for(var m=d.length;b<m;++b)a[b]=d.charCodeAt(b);d=a}bc(f,e|146);a=cc(f,"w");hc(a,d,0,d.length,0,g);ec(a);bc(f,e)}return f}
function W(a,b,d,e){a=L("string"===typeof a?a:U(a),b);b=lc(!!d,!!e);W.va||(W.va=64);var f=W.va++<<8|0;yb(f,{open:function(a){a.seekable=!1},close:function(){e&&e.buffer&&e.buffer.length&&e(10)},read:function(a,b,e,f){for(var g=0,m=0;m<f;m++){try{var t=d()}catch(Ha){throw new M(K.B);}if(void 0===t&&0===g)throw new M(K.da);if(null===t||void 0===t)break;g++;b[e+m]=t}g&&(a.node.timestamp=Date.now());return g},write:function(a,b,d,f){for(var g=0;g<f;g++)try{e(b[d+g])}catch(G){throw new M(K.B);}f&&(a.node.timestamp=
Date.now());return g}});return Zb(a,b,f)}function qc(a,b,d){a=L("string"===typeof a?a:U(a),b);return $b(d,a)}
function rc(a){if(a.La||a.Ma||a.link||a.b)return!0;var b=!0;if("undefined"!==typeof XMLHttpRequest)throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(c.read)try{a.b=Ab(c.read(a.url)),a.g=a.b.length}catch(d){b=!1}else throw Error("Cannot load without read() or XMLHttpRequest.");b||pb(K.B);return b}
function sc(a,b,d,e,f){function g(){this.Z=!1;this.P=[]}g.prototype.get=function(a){if(!(a>this.length-1||0>a)){var b=a%this.chunkSize;return this.ua(a/this.chunkSize|0)[b]}};g.prototype.Ua=function(a){this.ua=a};g.prototype.la=function(){var a=new XMLHttpRequest;a.open("HEAD",d,!1);a.send(null);if(!(200<=a.status&&300>a.status||304===a.status))throw Error("Couldn't load "+d+". Status: "+a.status);var b=Number(a.getResponseHeader("Content-length")),e,f=(e=a.getResponseHeader("Accept-Ranges"))&&"bytes"===
e;a=(e=a.getResponseHeader("Content-Encoding"))&&"gzip"===e;var g=1048576;f||(g=b);var m=this;m.Ua(function(a){var e=a*g,f=(a+1)*g-1;f=Math.min(f,b-1);if("undefined"===typeof m.P[a]){var t=m.P;if(e>f)throw Error("invalid range ("+e+", "+f+") or no bytes requested!");if(f>b-1)throw Error("only "+b+" bytes available! programmer error!");var u=new XMLHttpRequest;u.open("GET",d,!1);b!==g&&u.setRequestHeader("Range","bytes="+e+"-"+f);"undefined"!=typeof Uint8Array&&(u.responseType="arraybuffer");u.overrideMimeType&&
u.overrideMimeType("text/plain; charset=x-user-defined");u.send(null);if(!(200<=u.status&&300>u.status||304===u.status))throw Error("Couldn't load "+d+". Status: "+u.status);e=void 0!==u.response?new Uint8Array(u.response||[]):Ab(u.responseText||"");t[a]=e}if("undefined"===typeof m.P[a])throw Error("doXHR failed!");return m.P[a]});if(a||!b)g=b=1,g=b=this.ua(0).length,console.log("LazyFiles on gzip forces download of the whole file when length is accessed");this.Ea=b;this.Da=g;this.Z=!0};if("undefined"!==
typeof XMLHttpRequest){if(!l)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var m=new g;Object.defineProperties(m,{length:{get:function(){this.Z||this.la();return this.Ea}},chunkSize:{get:function(){this.Z||this.la();return this.Da}}});var t=void 0}else t=d,m=void 0;var u=oc(a,b,e,f);m?u.b=m:t&&(u.b=null,u.url=t);Object.defineProperties(u,{g:{get:function(){return this.b.length}}});var E={};Object.keys(u.f).forEach(function(a){var b=
u.f[a];E[a]=function(){if(!rc(u))throw new M(K.B);return b.apply(null,arguments)}});E.read=function(a,b,d,e,f){if(!rc(u))throw new M(K.B);a=a.node.b;if(f>=a.length)return 0;e=Math.min(a.length-f,e);assert(0<=e);if(a.slice)for(var g=0;g<e;g++)b[d+g]=a[f+g];else for(g=0;g<e;g++)b[d+g]=a.get(f+g);return e};u.f=E;return u}
function tc(a,b,d,e,f,g,m,t,u,E){function G(d){function G(d){E&&E();t||pc(a,b,d,e,f,u);g&&g();bb(Ha)}var na=!1;c.preloadPlugins.forEach(function(a){!na&&a.canHandle(db)&&(a.handle(d,db,G,function(){m&&m();bb(Ha)}),na=!0)});na||G(d)}Browser.Zc();var db=b?vb(L(a,b)):a,Ha=$a("cp "+db);ab(Ha);"string"==typeof d?Browser.Xc(d,function(a){G(a)},m):G(d)}var FS={},Qb,Wb,dc,X=0;function Y(){X+=4;return z(X-4|0,4,0)|0}function uc(){var a=Q[Y()];if(!a)throw new M(K.N);return a}
function vc(a){return Math.pow(2,a)}var wc={},xc=1;function yc(a,b){yc.u||(yc.u={});a in yc.u||(c.dynCall_v(b),yc.u[a]=1)}ic();R=Array(4096);Xb(N,"/");V("/tmp");V("/home");V("/home/web_user");
(function(){V("/dev");yb(259,{read:function(){return 0},write:function(a,b,f,g){return g}});Zb("/dev/null",259);xb(1280,Bb);xb(1536,Cb);Zb("/dev/tty",1280);Zb("/dev/tty1",1536);if("undefined"!==typeof crypto){var a=new Uint8Array(1);var b=function(){crypto.getRandomValues(a);return a[0]}}else b=n?function(){return require("crypto").randomBytes(1)[0]}:function(){return 256*Math.random()|0};W("/dev","random",b);W("/dev","urandom",b);V("/dev/shm");V("/dev/shm/tmp")})();V("/proc");V("/proc/self");V("/proc/self/fd");
Xb({j:function(){var a=Eb("/proc/self","fd",16895,73);a.c={lookup:function(a,d){var b=Q[+d];if(!b)throw new M(K.N);a={parent:null,j:{ya:"fake"},c:{readlink:function(){return b.path}}};return a.parent=a}};return a}},"/proc/self/fd");
Ta.unshift(function(){if(!c.noFSInit&&!kc){assert(!kc,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");kc=!0;ic();c.stdin=c.stdin;c.stdout=c.stdout;c.stderr=c.stderr;c.stdin?W("/dev","stdin",c.stdin):$b("/dev/tty","/dev/stdin");c.stdout?W("/dev","stdout",null,c.stdout):$b("/dev/tty","/dev/stdout");c.stderr?W("/dev","stderr",null,c.stderr):$b("/dev/tty1","/dev/stderr");var a=
cc("/dev/stdin","r");assert(0===a.fd,"invalid handle for stdin ("+a.fd+")");a=cc("/dev/stdout","w");assert(1===a.fd,"invalid handle for stdout ("+a.fd+")");a=cc("/dev/stderr","w");assert(2===a.fd,"invalid handle for stderr ("+a.fd+")")}});Ua.push(function(){Lb=!1});Va.push(function(){kc=!1;var a=c._fflush;a&&a(0);for(a=0;a<Q.length;a++){var b=Q[a];b&&ec(b)}});c.FS_createFolder=mc;c.FS_createPath=nc;c.FS_createDataFile=pc;c.FS_createPreloadedFile=tc;c.FS_createLazyFile=sc;c.FS_createLink=qc;
c.FS_createDevice=W;c.FS_unlink=ac;Ta.unshift(function(){});Va.push(function(){});if(n){var fs=require("fs"),Hb=require("path");P.Wa()}w=ka(4);La=Ma=la(r);C=La+Qa;Na=la(C);v[w>>2]=Na;q=!0;assert(Na<x,"TOTAL_MEMORY not big enough for stack");
function Ab(a){for(var b=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++d)&1023);127>=e?++b:b=2047>=e?b+2:65535>=e?b+3:2097151>=e?b+4:67108863>=e?b+5:b+6}b=Array(b+1);a=Aa(a,b,0,b.length);b.length=a;return b}c.wasmTableSize=247;c.wasmMaxTableSize=247;c.Fa={};
c.Ga={enlargeMemory:function(){Pa()},getTotalMemory:function(){return x},abortOnCannotGrowMemory:Pa,abortStackOverflow:function(a){p("Stack overflow! Attempted to allocate "+a+" bytes on the stack, but stack has only "+(C-fa()+a)+" bytes available!")},segfault:function(){p("segmentation fault")},alignfault:function(){p("alignment fault")},nullFunc_i:function(a){c.printErr("Invalid function pointer called with signature 'i'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");
c.printErr("Build with ASSERTIONS=2 for more info.");p(a)},nullFunc_ii:function(a){c.printErr("Invalid function pointer called with signature 'ii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");c.printErr("Build with ASSERTIONS=2 for more info.");
p(a)},nullFunc_iii:function(a){c.printErr("Invalid function pointer called with signature 'iii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");c.printErr("Build with ASSERTIONS=2 for more info.");p(a)},nullFunc_iiii:function(a){c.printErr("Invalid function pointer called with signature 'iiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");
c.printErr("Build with ASSERTIONS=2 for more info.");p(a)},nullFunc_v:function(a){c.printErr("Invalid function pointer called with signature 'v'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");c.printErr("Build with ASSERTIONS=2 for more info.");p(a)},
nullFunc_vi:function(a){c.printErr("Invalid function pointer called with signature 'vi'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");c.printErr("Build with ASSERTIONS=2 for more info.");p(a)},nullFunc_vii:function(a){c.printErr("Invalid function pointer called with signature 'vii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");
c.printErr("Build with ASSERTIONS=2 for more info.");p(a)},nullFunc_viid:function(a){c.printErr("Invalid function pointer called with signature 'viid'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");c.printErr("Build with ASSERTIONS=2 for more info.");
p(a)},nullFunc_viii:function(a){c.printErr("Invalid function pointer called with signature 'viii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");c.printErr("Build with ASSERTIONS=2 for more info.");p(a)},nullFunc_viiii:function(a){c.printErr("Invalid function pointer called with signature 'viiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");
c.printErr("Build with ASSERTIONS=2 for more info.");p(a)},nullFunc_viiiii:function(a){c.printErr("Invalid function pointer called with signature 'viiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");c.printErr("Build with ASSERTIONS=2 for more info.");
p(a)},nullFunc_viiiiii:function(a){c.printErr("Invalid function pointer called with signature 'viiiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");c.printErr("Build with ASSERTIONS=2 for more info.");p(a)},invoke_i:function(a){try{return c.dynCall_i(a)}catch(b){if("number"!==
typeof b&&"longjmp"!==b)throw b;c.setThrew(1,0)}},invoke_ii:function(a,b){try{return c.dynCall_ii(a,b)}catch(d){if("number"!==typeof d&&"longjmp"!==d)throw d;c.setThrew(1,0)}},invoke_iii:function(a,b,d){try{return c.dynCall_iii(a,b,d)}catch(e){if("number"!==typeof e&&"longjmp"!==e)throw e;c.setThrew(1,0)}},invoke_iiii:function(a,b,d,e){try{return c.dynCall_iiii(a,b,d,e)}catch(f){if("number"!==typeof f&&"longjmp"!==f)throw f;c.setThrew(1,0)}},invoke_v:function(a){try{c.dynCall_v(a)}catch(b){if("number"!==
typeof b&&"longjmp"!==b)throw b;c.setThrew(1,0)}},invoke_vi:function(a,b){try{c.dynCall_vi(a,b)}catch(d){if("number"!==typeof d&&"longjmp"!==d)throw d;c.setThrew(1,0)}},invoke_vii:function(a,b,d){try{c.dynCall_vii(a,b,d)}catch(e){if("number"!==typeof e&&"longjmp"!==e)throw e;c.setThrew(1,0)}},invoke_viii:function(a,b,d,e){try{c.dynCall_viii(a,b,d,e)}catch(f){if("number"!==typeof f&&"longjmp"!==f)throw f;c.setThrew(1,0)}},invoke_viiii:function(a,b,d,e,f){try{c.dynCall_viiii(a,b,d,e,f)}catch(g){if("number"!==
typeof g&&"longjmp"!==g)throw g;c.setThrew(1,0)}},___assert_fail:function(a,b,d,e){p("Assertion failed: "+Da(a)+", at: "+[b?Da(b):"unknown filename",d,e?Da(e):"unknown function"])},___cxa_allocate_exception:function(a){return nb(a)},___cxa_begin_catch:function(a){var b=J[a];b&&!b.ma&&(b.ma=!0,gb.u--);b&&(b.Aa=!1);ib.push(a);(b=jb(a))&&J[b].S++;return a},___cxa_end_catch:function(){c.setThrew(0);var a=ib.pop();if(a){if(a=jb(a)){var b=J[a];assert(0<b.S);b.S--;0!==b.S||b.Aa||(b.oa&&c.dynCall_vi(b.oa,
a),delete J[a],___cxa_free_exception(a))}hb=0}},___cxa_find_matching_catch_2:function(){return lb.apply(null,arguments)},___cxa_find_matching_catch_3:function(){return lb.apply(null,arguments)},___cxa_free_exception:___cxa_free_exception,___cxa_pure_virtual:function(){za=!0;throw"Pure virtual function called!";},___cxa_throw:function(a,b,d){J[a]={Sa:a,ia:a,type:b,oa:d,S:0,ma:!1,Aa:!1};hb=a;"uncaught_exception"in gb?gb.u++:gb.u=1;throw a;},___lock:function(){},___resumeException:function(a){hb||(hb=
a);throw a;},___setErrNo:pb,___syscall140:function(a,b){X=b;try{var d=uc();Y();var e=Y(),f=Y(),g=Y();fc(d,e,g);qa(f|0,d.position|0);d.Y&&0===e&&0===g&&(d.Y=null);return 0}catch(m){return"undefined"!==typeof FS&&m instanceof M||p(m),-m.v}},___syscall146:function(a,b){X=b;try{var d=uc(),e=Y();a:{var f=Y();for(b=a=0;b<f;b++){var g=z(e+8*b|0,4,0)|0,m=z(e+(8*b+4)|0,4,0)|0,t=hc(d,y,g,m,void 0);if(0>t){var u=-1;break a}a+=t}u=a}return u}catch(E){return"undefined"!==typeof FS&&E instanceof M||p(E),-E.v}},
___syscall3:function(a,b){X=b;try{var d=uc(),e=Y(),f=Y();a=y;if(0>f||0>g)throw new M(K.h);if(1===(d.flags&2097155))throw new M(K.N);if(O(d.node.mode))throw new M(K.I);if(!d.f.read)throw new M(K.h);b=!0;if("undefined"===typeof g){var g=d.position;b=!1}else if(!d.seekable)throw new M(K.O);var m=d.f.read(d,a,e,f,g);b||(d.position+=m);return m}catch(t){return"undefined"!==typeof FS&&t instanceof M||p(t),-t.v}},___syscall5:function(a,b){X=b;try{var d=Da(Y()),e=Y(),f=Y();return cc(d,e,f).fd}catch(g){return"undefined"!==
typeof FS&&g instanceof M||p(g),-g.v}},___syscall54:function(a,b){X=b;try{var d=uc(),e=Y();switch(e){case 21509:case 21505:return d.tty?0:-K.D;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return d.tty?0:-K.D;case 21519:if(!d.tty)return-K.D;var f=Y();qa(f|0,0);return 0;case 21520:return d.tty?-K.h:-K.D;case 21531:a=f=Y();if(!d.f.Ka)throw new M(K.D);return d.f.Ka(d,e,a);case 21523:return d.tty?0:-K.D;default:p("bad ioctl syscall "+e)}}catch(g){return"undefined"!==typeof FS&&g instanceof
M||p(g),-g.v}},___syscall6:function(a,b){X=b;try{var d=uc();ec(d);return 0}catch(e){return"undefined"!==typeof FS&&e instanceof M||p(e),-e.v}},___unlock:function(){},_abort:function(){c.abort()},_emscripten_memcpy_big:function(a,b,d){A.set(A.subarray(b,b+d),a);return a},_llvm_exp2_f64:function(){return vc.apply(null,arguments)},_pthread_getspecific:function(a){return wc[a]||0},_pthread_key_create:function(a){if(0==a)return K.h;qa(a|0,xc|0);wc[xc]=0;xc++;return 0},_pthread_once:yc,_pthread_setspecific:function(a,
b){if(!(a in wc))return K.h;wc[a]=b;return 0},DYNAMICTOP_PTR:w,STACKTOP:Ma,STACK_MAX:C};var Z=c.asm(c.Fa,c.Ga,buffer),zc=Z.__GLOBAL__sub_I_adapter_cpp;Z.__GLOBAL__sub_I_adapter_cpp=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return zc.apply(null,arguments)};var Ac=Z.___cxa_can_catch;
Z.___cxa_can_catch=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Ac.apply(null,arguments)};var Bc=Z.___cxa_is_pointer_type;
Z.___cxa_is_pointer_type=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Bc.apply(null,arguments)};var Cc=Z.___errno_location;
Z.___errno_location=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Cc.apply(null,arguments)};var Dc=Z._emu_compute_audio_samples;
Z._emu_compute_audio_samples=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Dc.apply(null,arguments)};var Ec=Z._emu_get_audio_buffer;
Z._emu_get_audio_buffer=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Ec.apply(null,arguments)};var Fc=Z._emu_get_audio_buffer_length;
Z._emu_get_audio_buffer_length=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Fc.apply(null,arguments)};var Gc=Z._emu_get_current_position;
Z._emu_get_current_position=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Gc.apply(null,arguments)};var Hc=Z._emu_get_max_position;
Z._emu_get_max_position=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Hc.apply(null,arguments)};var Ic=Z._emu_get_sample_rate;
Z._emu_get_sample_rate=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Ic.apply(null,arguments)};var Jc=Z._emu_get_track_info;
Z._emu_get_track_info=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Jc.apply(null,arguments)};var Kc=Z._emu_load_file;
Z._emu_load_file=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Kc.apply(null,arguments)};var Lc=Z._emu_seek_position;
Z._emu_seek_position=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Lc.apply(null,arguments)};var Mc=Z._emu_set_subsong;
Z._emu_set_subsong=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Mc.apply(null,arguments)};var Nc=Z._emu_teardown;
Z._emu_teardown=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Nc.apply(null,arguments)};var Oc=Z._fflush;Z._fflush=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Oc.apply(null,arguments)};
var Pc=Z._free;Z._free=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Pc.apply(null,arguments)};var Qc=Z._llvm_bswap_i32;
Z._llvm_bswap_i32=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Qc.apply(null,arguments)};var Rc=Z._malloc;Z._malloc=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Rc.apply(null,arguments)};
var Sc=Z._memmove;Z._memmove=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Sc.apply(null,arguments)};var Tc=Z._sbrk;
Z._sbrk=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Tc.apply(null,arguments)};var Uc=Z.establishStackSpace;
Z.establishStackSpace=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Uc.apply(null,arguments)};var Vc=Z.getTempRet0;
Z.getTempRet0=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Vc.apply(null,arguments)};var Wc=Z.setDynamicTop;
Z.setDynamicTop=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Wc.apply(null,arguments)};var Xc=Z.setTempRet0;
Z.setTempRet0=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Xc.apply(null,arguments)};var Yc=Z.setThrew;Z.setThrew=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Yc.apply(null,arguments)};
var Zc=Z.stackAlloc;Z.stackAlloc=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Zc.apply(null,arguments)};var $c=Z.stackRestore;
Z.stackRestore=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return $c.apply(null,arguments)};var ad=Z.stackSave;Z.stackSave=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return ad.apply(null,arguments)};
c.asm=Z;var eb=c.__GLOBAL__sub_I_adapter_cpp=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm.__GLOBAL__sub_I_adapter_cpp.apply(null,arguments)};
c.___cxa_can_catch=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm.___cxa_can_catch.apply(null,arguments)};
c.___cxa_is_pointer_type=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm.___cxa_is_pointer_type.apply(null,arguments)};
c.___errno_location=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm.___errno_location.apply(null,arguments)};
c._emu_compute_audio_samples=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm._emu_compute_audio_samples.apply(null,arguments)};
c._emu_get_audio_buffer=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm._emu_get_audio_buffer.apply(null,arguments)};
c._emu_get_audio_buffer_length=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm._emu_get_audio_buffer_length.apply(null,arguments)};
c._emu_get_current_position=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm._emu_get_current_position.apply(null,arguments)};
c._emu_get_max_position=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm._emu_get_max_position.apply(null,arguments)};
c._emu_get_sample_rate=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm._emu_get_sample_rate.apply(null,arguments)};
c._emu_get_track_info=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm._emu_get_track_info.apply(null,arguments)};
c._emu_load_file=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm._emu_load_file.apply(null,arguments)};
c._emu_seek_position=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm._emu_seek_position.apply(null,arguments)};
c._emu_set_subsong=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm._emu_set_subsong.apply(null,arguments)};
c._emu_teardown=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm._emu_teardown.apply(null,arguments)};
c._fflush=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm._fflush.apply(null,arguments)};var kb=c._free=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm._free.apply(null,arguments)};
c._llvm_bswap_i32=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm._llvm_bswap_i32.apply(null,arguments)};
var nb=c._malloc=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm._malloc.apply(null,arguments)};
c._memmove=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm._memmove.apply(null,arguments)};c._sbrk=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm._sbrk.apply(null,arguments)};
c.establishStackSpace=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm.establishStackSpace.apply(null,arguments)};
c.getTempRet0=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm.getTempRet0.apply(null,arguments)};
c.setDynamicTop=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm.setDynamicTop.apply(null,arguments)};
var ja=c.setTempRet0=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm.setTempRet0.apply(null,arguments)};
c.setThrew=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm.setThrew.apply(null,arguments)};
var ia=c.stackAlloc=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm.stackAlloc.apply(null,arguments)},ha=c.stackRestore=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm.stackRestore.apply(null,
arguments)},fa=c.stackSave=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm.stackSave.apply(null,arguments)};
c.dynCall_i=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm.dynCall_i.apply(null,arguments)};
c.dynCall_ii=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm.dynCall_ii.apply(null,arguments)};
c.dynCall_iii=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm.dynCall_iii.apply(null,arguments)};
c.dynCall_iiii=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm.dynCall_iiii.apply(null,arguments)};
c.dynCall_v=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm.dynCall_v.apply(null,arguments)};
c.dynCall_vi=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm.dynCall_vi.apply(null,arguments)};
c.dynCall_vii=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm.dynCall_vii.apply(null,arguments)};
c.dynCall_viii=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm.dynCall_viii.apply(null,arguments)};
c.dynCall_viiii=function(){assert(D,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!F,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return c.asm.dynCall_viiii.apply(null,arguments)};c.asm=Z;c.intArrayFromString||(c.intArrayFromString=function(){p("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.intArrayToString||(c.intArrayToString=function(){p("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
c.ccall=function(a,b,d,e){var f=c["_"+a];assert(f,"Cannot call unknown function "+a+", make sure it is exported");var g=[];a=0;assert("array"!==b,'Return type should not be "array".');if(e)for(var m=0;m<e.length;m++){var t=Ca[d[m]];t?(0===a&&(a=fa()),g[m]=t(e[m])):g[m]=e[m]}d=f.apply(null,g);"string"===b&&(d=Da(d));0!==a&&ha(a);return d};c.cwrap||(c.cwrap=function(){p("'cwrap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.setValue||(c.setValue=function(){p("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
c.getValue||(c.getValue=function(){p("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.allocate||(c.allocate=function(){p("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.getMemory=function(a){if(q)if(D)var b=nb(a);else{assert(w);b=v[w>>2];a=b+a+15&-16;v[w>>2]=a;if(a=a>=x)Pa(),a=!0;a&&(v[w>>2]=b,b=0)}else b=ka(a);return b};c.Pointer_stringify=Da;c.AsciiToString||(c.AsciiToString=function(){p("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
c.stringToAscii||(c.stringToAscii=function(){p("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.UTF8ArrayToString||(c.UTF8ArrayToString=function(){p("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.UTF8ToString||(c.UTF8ToString=function(){p("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.stringToUTF8Array||(c.stringToUTF8Array=function(){p("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
c.stringToUTF8||(c.stringToUTF8=function(){p("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.UTF16ToString||(c.UTF16ToString=function(){p("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.stringToUTF16||(c.stringToUTF16=function(){p("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.lengthBytesUTF16||(c.lengthBytesUTF16=function(){p("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
c.UTF32ToString||(c.UTF32ToString=function(){p("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.stringToUTF32||(c.stringToUTF32=function(){p("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.lengthBytesUTF32||(c.lengthBytesUTF32=function(){p("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.allocateUTF8||(c.allocateUTF8=function(){p("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
c.stackTrace||(c.stackTrace=function(){p("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.addOnPreRun||(c.addOnPreRun=function(){p("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.addOnInit||(c.addOnInit=function(){p("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.addOnPreMain||(c.addOnPreMain=function(){p("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
c.addOnExit||(c.addOnExit=function(){p("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.addOnPostRun||(c.addOnPostRun=function(){p("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.writeStringToMemory||(c.writeStringToMemory=function(){p("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.writeArrayToMemory||(c.writeArrayToMemory=function(){p("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
c.writeAsciiToMemory||(c.writeAsciiToMemory=function(){p("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.addRunDependency=ab;c.removeRunDependency=bb;c.FS||(c.FS=function(){p("'FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.FS_createFolder=mc;c.FS_createPath=nc;c.FS_createDataFile=pc;c.FS_createPreloadedFile=tc;c.FS_createLazyFile=sc;c.FS_createLink=qc;c.FS_createDevice=W;c.FS_unlink=ac;c.GL||(c.GL=function(){p("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
c.staticAlloc||(c.staticAlloc=function(){p("'staticAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.dynamicAlloc||(c.dynamicAlloc=function(){p("'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.warnOnce||(c.warnOnce=function(){p("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.loadDynamicLibrary||(c.loadDynamicLibrary=function(){p("'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
c.loadWebAssemblyModule||(c.loadWebAssemblyModule=function(){p("'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.getLEB||(c.getLEB=function(){p("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.getFunctionTables||(c.getFunctionTables=function(){p("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.alignFunctionTables||(c.alignFunctionTables=function(){p("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
c.registerFunctions||(c.registerFunctions=function(){p("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.addFunction||(c.addFunction=function(){p("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.removeFunction||(c.removeFunction=function(){p("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.getFuncWrapper||(c.getFuncWrapper=function(){p("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
c.prettyPrint||(c.prettyPrint=function(){p("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.makeBigInt||(c.makeBigInt=function(){p("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.dynCall||(c.dynCall=function(){p("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});c.getCompilerSetting||(c.getCompilerSetting=function(){p("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
c.ALLOC_NORMAL||Object.defineProperty(c,"ALLOC_NORMAL",{get:function(){p("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}});c.ALLOC_STACK||Object.defineProperty(c,"ALLOC_STACK",{get:function(){p("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}});c.ALLOC_STATIC||Object.defineProperty(c,"ALLOC_STATIC",{get:function(){p("'ALLOC_STATIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}});
c.ALLOC_DYNAMIC||Object.defineProperty(c,"ALLOC_DYNAMIC",{get:function(){p("'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}});c.ALLOC_NONE||Object.defineProperty(c,"ALLOC_NONE",{get:function(){p("'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}});function ea(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}ea.prototype=Error();ea.prototype.constructor=ea;var bd=null;
Ya=function cd(){c.calledRun||dd();c.calledRun||(Ya=cd)};
function dd(){function a(){if(!c.calledRun&&(c.calledRun=!0,!za)){Oa();D||(D=!0,Ra(Ta));Oa();Ra(Ua);k&&null!==bd&&c.printErr("pre-main prep time: "+(Date.now()-bd)+" ms");if(c.onRuntimeInitialized)c.onRuntimeInitialized();assert(!c._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');Oa();if(c.postRun)for("function"==typeof c.postRun&&(c.postRun=[c.postRun]);c.postRun.length;){var a=c.postRun.shift();Wa.unshift(a)}Ra(Wa)}}null===bd&&(bd=
Date.now());if(!(0<H)){assert(0==(C&3));B[(C>>2)-1]=34821223;B[(C>>2)-2]=2310721022;if(c.preRun)for("function"==typeof c.preRun&&(c.preRun=[c.preRun]);c.preRun.length;)Xa();Ra(Sa);0<H||c.calledRun||(c.setStatus?(c.setStatus("Running..."),setTimeout(function(){setTimeout(function(){c.setStatus("")},1);a()},1)):a(),Oa())}}c.run=dd;
function ed(){var a=c.print,b=c.printErr,d=!1;c.print=c.printErr=function(){d=!0};try{var e=c._fflush;e&&e(0);["stdout","stderr"].forEach(function(a){a="/dev/"+a;try{var b=T(a,{J:!0});a=b.path}catch(t){}var e={Na:!1,exists:!1,error:0,name:null,path:null,object:null,Pa:!1,Ra:null,Qa:null};try{b=T(a,{parent:!0}),e.Pa=!0,e.Ra=b.path,e.Qa=b.node,e.name=tb(a),b=T(a,{J:!0}),e.exists=!0,e.path=b.path,e.object=b.node,e.name=b.node.name,e.Na="/"===b.path}catch(t){e.error=t.v}e&&(b=wb[e.object.rdev])&&b.output&&
b.output.length&&(d=!0)})}catch(f){}c.print=a;c.printErr=b;d&&ma("stdio streams had content in them that was not flushed. you should set NO_EXIT_RUNTIME to 0 (see the FAQ), or make sure to emit a newline when you printf etc.")}
c.exit=function(a,b){ed();if(!b||!c.noExitRuntime||0!==a){if(c.noExitRuntime)b||c.printErr("exit("+a+") called, but NO_EXIT_RUNTIME is set, so halting execution but not exiting the runtime or preventing further async execution (build with NO_EXIT_RUNTIME=0, if you want a true shutdown)");else if(za=!0,Ma=void 0,Oa(),Ra(Va),F=!0,c.onExit)c.onExit(a);n&&process.exit(a);c.quit(a,new ea(a))}};var fd=[];
function p(a){if(c.onAbort)c.onAbort(a);void 0!==a?(c.print(a),c.printErr(a),a=JSON.stringify(a)):a="";za=!0;var b="abort("+a+") at "+Ia()+"";fd&&fd.forEach(function(d){b=d(b,a)});throw b;}c.abort=p;if(c.preInit)for("function"==typeof c.preInit&&(c.preInit=[c.preInit]);0<c.preInit.length;)c.preInit.pop()();c.noExitRuntime=!0;dd();
  return {
	Module: Module,  // expose original Module
  };
})(window.spp_backend_state_S98);
/*
 s98_adapter.js: Adapts S98 backend to generic WebAudio/ScriptProcessor player.
 
 version 1.0
 
 	Copyright (C) 2018 Juergen Wothke

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
S98BackendAdapter = (function(){ var $this = function () {
		$this.base.call(this, backend_S98.Module, 2);
		this._manualSetupComplete= true;
		this._undefined;
		this._currentPath;
		this._currentFile;
		this._chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	
		if (!backend_S98.Module.notReady) {
			// in sync scenario the "onRuntimeInitialized" has already fired before execution gets here,
			// i.e. it has to be called explicitly here (in async scenario "onRuntimeInitialized" will trigger
			// the call directly)
			this.doOnAdapterReady();
		}				
	}; 
	// sample buffer contains 2-byte integer sample data (i.e. 
	// must be rescaled) of 2 interleaved channels
	extend(EmsHEAP16BackendAdapter, $this, {
		doOnAdapterReady: function() {
			// called when runtime is ready (e.g. asynchronously when WASM is loaded)
			// if FS needed to be setup of would be done here..
		},
		getAudioBuffer: function() {
			var ptr=  this.Module.ccall('emu_get_audio_buffer', 'number');			
			// make it a this.Module.HEAP16 pointer
			return ptr >> 1;	// 2 x 16 bit samples			
		},
		getAudioBufferLength: function() {
			var len= this.Module.ccall('emu_get_audio_buffer_length', 'number');
			return len;
		},
		computeAudioSamples: function() {
			return this.Module.ccall('emu_compute_audio_samples', 'number');
		},
		getMaxPlaybackPosition: function() { 
			return this.Module.ccall('emu_get_max_position', 'number');
		},
		getPlaybackPosition: function() {
			return this.Module.ccall('emu_get_current_position', 'number');
		},
		seekPlaybackPosition: function(pos) {
			this.Module.ccall('emu_seek_position', 'number', ['number'], [pos]);
		},		
		getPathAndFilename: function(filename) {
			var sp = filename.split('/');
			var fn = sp[sp.length-1];					
			var path= filename.substring(0, filename.lastIndexOf("/"));	
			if (path.lenght) path= path+"/";
			
			return [path, fn];
		},
		mapBackendFilename: function (name) {
			// "name" comes from the C++ side 
			var input= this.Module.Pointer_stringify(name);
			return input;
		},
		registerFileData: function(pathFilenameArray, data) {
			return this.registerEmscriptenFileData(pathFilenameArray, data);
		},
		loadMusicData: function(sampleRate, path, filename, data, options) {
			var buf = this.Module._malloc(data.length);
			this.Module.HEAPU8.set(data, buf);
			var ret = this.Module.ccall('emu_load_file', 'number', ['string', 'number', 'number'], [filename, buf, data.length]);
			this.Module._free(buf);

			if (ret == 0) {
				this.playerSampleRate = this.Module.ccall('emu_get_sample_rate', 'number');
				this.resetSampleRate(sampleRate, this.playerSampleRate);
				this._currentPath= path;
				this._currentFile= filename;
			} else {
				this._currentPath= this._undefined;
				this._currentFile= this._undefined;
			}
			return ret;			
		},
		evalTrackOptions: function(options) {
			if (typeof options.timeout != 'undefined') {
				ScriptNodePlayer.getInstance().setPlaybackTimeout(options.timeout*1000);
			} else {
				ScriptNodePlayer.getInstance().setPlaybackTimeout(-1);	// reset last songs setting
			}
			var id= (options && options.track) ? options.track : -1;	// by default do not set track		
			var boostVolume= (options && options.boostVolume) ? options.boostVolume : 0;		
			return this.Module.ccall('emu_set_subsong', 'number', ['number', 'number'], [id, boostVolume]);	// not used for S98..
		},				
		teardown: function() {
			this.Module.ccall('emu_teardown', 'number');	// just in case
		},
		toUnicode: function(str) {
			return str.split('').map(function (value, index, array) {
				var temp = value.charCodeAt(0).toString(16).padStart(4, '0');
				//var temp = value.charCodeAt(0).toString(16).toUpperCase();
				if (temp.length > 2) {
					return '\\u' + temp;
				}
				return value;
			}).join('');
		},
		getExtAsciiString: function(heapPtr) {
			// Pointer_stringify cannot be used here since UTF-8 parsing 
			// messes up original extASCII content
			var len=0;
			for (var j= 0; j<100; j++) {
				var b= this.Module.HEAP8[heapPtr+j] & 0xff;
				if (b == 0) { len= j; break; }
			}
			var array = new Uint8Array(len);    
			array[10] = 256;
			for (var j= 0; j<len; j++) {
				array[j]= this.Module.HEAP8[heapPtr+j] & 0xff;
			}
			var s= this.toUnicode(new String(array, "UTF-16BE"));
			console.log("string: ["+s.valueOf+"]");
			return s;
			
		},
		// base64 decoding util
		findChar: function(str, c) {
			for (var i= 0; i<str.length; i++) {
				if (str.charAt(i) == c) {
					return i;
				}
			}
			return -1;
		},
		alphanumeric: function(inputtxt) {
			var letterNumber = /^[0-9a-zA-Z]+$/;
			return inputtxt.match(letterNumber);
		},
		is_base64: function(c) {
		  return (this.alphanumeric(""+c) || (c == '+') || (c == '/'));
		}, 
		base64Decode: function(encoded) {
			var in_len= encoded.length;
			var i= j= in_= 0;
			var arr4= new Array(4);
			var arr3= new Array(3);
			var ret= "";
			var carry=-1;

			while (in_len-- && ( encoded.charAt(in_) != '=') && this.is_base64(encoded.charAt(in_))) {
				arr4[i++]= encoded.charAt(in_); in_++;
				if (i ==4) {
					for (i = 0; i <4; i++) {
						arr4[i] = this.findChar(this._chars, arr4[i]);
					}
					arr3[0] = ( arr4[0] << 2       ) + ((arr4[1] & 0x30) >> 4);
					arr3[1] = ((arr4[1] & 0xf) << 4) + ((arr4[2] & 0x3c) >> 2);
					arr3[2] = ((arr4[2] & 0x3) << 6) +   arr4[3];

					for (i = 0; (i < 3); i++) {
						var val= arr3[i];
						
						if (carry > -1) {	// only allow 16bit max
							val= (carry << 8) + val;
							carry= -1;
							ret += String.fromCharCode(val)	// UNICODE
							
						} else if (val > 127) {	// treat as unicode
							carry= val;
						} else {
							ret += String.fromCharCode(val);	// ASCII
						}
					}
					i = 0;
				}
			}
			if (i) {
				for (j = 0; j < i; j++) {
					arr4[j] = this.findChar(this._chars, arr4[j]);
				}
				arr3[0] = (arr4[0] << 2) + ((arr4[1] & 0x30) >> 4);
				arr3[1] = ((arr4[1] & 0xf) << 4) + ((arr4[2] & 0x3c) >> 2);

				for (j = 0; (j < i - 1); j++) { 
					var val= arr3[j];
					
					if (carry > -1) {	// only allow 16bit max
						val= (carry << 8) + val;
						carry= -1;
						ret += String.fromCharCode(val)	// UNICODE
						
					} else if (val > 127) {	// treat as unicode
						carry= val;
					} else {
						ret += String.fromCharCode(val);	// ASCII
					}
				}
			}
			return ret;
		},		
		getSongInfoMeta: function() {
			return {title: String,		// the fields named in the V3 file spec
					artist: String, 
					game: String, 
					year: String, 
					genre: String, 
					comment: String, 
					copyright: String, 
					s98by: String, 
					system: String, 
					};
		},
		
		updateSongInfo: function(filename, result) {
			var numAttr= 9;
			var ret = this.Module.ccall('emu_get_track_info', 'number');

			// the automatic string creation fucks up the UNICODE chars beyond 
			// recognition.. base64	wrapping is used to handle the strings properly	
			var array = this.Module.HEAP32.subarray(ret>>2, (ret>>2)+numAttr);
			result.title= this.base64Decode(this.Module.Pointer_stringify(array[0]));
			result.artist= this.base64Decode(this.Module.Pointer_stringify(array[1]));
			result.game= this.base64Decode(this.Module.Pointer_stringify(array[2]));
			result.year= this.base64Decode(this.Module.Pointer_stringify(array[3]));
			result.genre= this.base64Decode(this.Module.Pointer_stringify(array[4]));
			result.comment= this.base64Decode(this.Module.Pointer_stringify(array[5]));
			result.copyright= this.base64Decode(this.Module.Pointer_stringify(array[6]));
			result.s98by= this.base64Decode(this.Module.Pointer_stringify(array[7]));
			result.system= this.base64Decode(this.Module.Pointer_stringify(array[8]));
		}
	});	return $this; })();