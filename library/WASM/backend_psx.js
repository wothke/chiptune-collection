// create separate namespace for all the Emscripten stuff.. otherwise naming clashes may occur especially when 
// optimizing using closure compiler..
window.spp_backend_state_PSX= {
	notReady: true,
	adapterCallback: function(){}	// overwritten later	
};
window.spp_backend_state_PSX["onRuntimeInitialized"] = function() {	// emscripten callback needed in case async init is used (e.g. for WASM)
	this.notReady= false;
	this.adapterCallback();
}.bind(window.spp_backend_state_PSX);

var backend_PSX = (function(Module) {var d;d||(d=typeof Module !== 'undefined' ? Module : {});var aa={},k;for(k in d)d.hasOwnProperty(k)&&(aa[k]=d[k]);d.arguments=[];d.thisProgram="./this.program";d.quit=function(a,b){throw b;};d.preRun=[];d.postRun=[];var l=!1,m=!1,n=!1,ba=!1;
if(d.ENVIRONMENT)if("WEB"===d.ENVIRONMENT)l=!0;else if("WORKER"===d.ENVIRONMENT)m=!0;else if("NODE"===d.ENVIRONMENT)n=!0;else if("SHELL"===d.ENVIRONMENT)ba=!0;else throw Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");else l="object"===typeof window,m="function"===typeof importScripts,n="object"===typeof process&&"function"===typeof require&&!l&&!m,ba=!l&&!n&&!m;
if(n){var ca,da;d.read=function(a,b){ca||(ca=require("fs"));da||(da=require("path"));a=da.normalize(a);a=ca.readFileSync(a);return b?a:a.toString()};d.readBinary=function(a){a=d.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(d.thisProgram=process.argv[1].replace(/\\/g,"/"));d.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=d);process.on("uncaughtException",function(a){if(!(a instanceof ea))throw a;});process.on("unhandledRejection",
function(){d.printErr("node.js exiting due to unhandled promise rejection");process.exit(1)});d.inspect=function(){return"[Emscripten Module object]"}}else if(ba)"undefined"!=typeof read&&(d.read=function(a){return read(a)}),d.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?d.arguments=scriptArgs:"undefined"!=typeof arguments&&(d.arguments=arguments),"function"===typeof quit&&
(d.quit=function(a){quit(a)});else if(l||m)d.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},m&&(d.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),d.readAsync=function(a,b,c){var e=new XMLHttpRequest;e.open("GET",a,!0);e.responseType="arraybuffer";e.onload=function(){200==e.status||0==e.status&&e.response?b(e.response):c()};e.onerror=c;e.send(null)},"undefined"!=
typeof arguments&&(d.arguments=arguments),d.setWindowTitle=function(a){document.title=a};else throw Error("unknown runtime environment");d.print="undefined"!==typeof console?console.log:"undefined"!==typeof print?print:null;d.printErr="undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn||d.print;d.print=d.print;d.printErr=d.printErr;for(k in aa)aa.hasOwnProperty(k)&&(d[k]=aa[k]);aa=void 0;fa=ha=ja=function(){p("cannot use the stack before compiled code is ready to run, and has provided stack access")};
function ka(a){assert(!la);var b=q;q=q+a+15&-16;return b}function ma(a){var b;b||(b=16);return Math.ceil(a/b)*b}function na(a){oa||(oa={});oa[a]||(oa[a]=1,d.printErr(a))}var oa,pa=0;function assert(a,b){a||p("Assertion failed: "+b)}
var ta={stackSave:function(){fa()},stackRestore:function(){ha()},arrayToC:function(a){var b=ja(a.length);assert(0<=a.length,"writeArrayToMemory array must have a length (should be an array or typed array)");qa.set(a,b);return b},stringToC:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1,e=b=ja(c);assert("number"==typeof c,"stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");ra(a,r,e,c)}return b}},ua={string:ta.stringToC,
array:ta.arrayToC};function va(a,b){if(0===b||!a)return"";for(var c=0,e,f=0;;){assert(a+f<u);e=r[a+f>>0];c|=e;if(0==e&&!b)break;f++;if(b&&f==b)break}b||(b=f);e="";if(128>c){for(;0<b;)c=String.fromCharCode.apply(String,r.subarray(a,a+Math.min(b,1024))),e=e?e+c:c,a+=1024,b-=1024;return e}return wa(r,a)}var xa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function wa(a,b){for(var c=b;a[c];)++c;if(16<c-b&&a.subarray&&xa)return xa.decode(a.subarray(b,c));for(c="";;){var e=a[b++];if(!e)return c;if(e&128){var f=a[b++]&63;if(192==(e&224))c+=String.fromCharCode((e&31)<<6|f);else{var g=a[b++]&63;if(224==(e&240))e=(e&15)<<12|f<<6|g;else{var h=a[b++]&63;if(240==(e&248))e=(e&7)<<18|f<<12|g<<6|h;else{var t=a[b++]&63;if(248==(e&252))e=(e&3)<<24|f<<18|g<<12|h<<6|t;else{var w=a[b++]&63;e=(e&1)<<30|f<<24|g<<18|h<<12|t<<6|w}}}65536>e?c+=String.fromCharCode(e):(e-=
65536,c+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else c+=String.fromCharCode(e)}}
function ra(a,b,c,e){if(!(0<e))return 0;var f=c;e=c+e-1;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);55296<=h&&57343>=h&&(h=65536+((h&1023)<<10)|a.charCodeAt(++g)&1023);if(127>=h){if(c>=e)break;b[c++]=h}else{if(2047>=h){if(c+1>=e)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=e)break;b[c++]=224|h>>12}else{if(2097151>=h){if(c+3>=e)break;b[c++]=240|h>>18}else{if(67108863>=h){if(c+4>=e)break;b[c++]=248|h>>24}else{if(c+5>=e)break;b[c++]=252|h>>30;b[c++]=128|h>>24&63}b[c++]=128|h>>18&63}b[c++]=128|
h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0;return c-f}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ya(a){return a.replace(/__Z[\w\d_]+/g,function(a){na("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");return a===a?a:a+" ["+a+"]"})}
function za(){a:{var a=Error();if(!a.stack){try{throw Error(0);}catch(b){a=b}if(!a.stack){a="(no stack trace available)";break a}}a=a.stack.toString()}d.extraStackTrace&&(a+="\n"+d.extraStackTrace());return ya(a)}var buffer,qa,r,Aa,x,y;
function Ba(){d.HEAP8=qa=new Int8Array(buffer);d.HEAP16=Aa=new Int16Array(buffer);d.HEAP32=x=new Int32Array(buffer);d.HEAPU8=r=new Uint8Array(buffer);d.HEAPU16=new Uint16Array(buffer);d.HEAPU32=y=new Uint32Array(buffer);d.HEAPF32=new Float32Array(buffer);d.HEAPF64=new Float64Array(buffer)}var Ca,q,la,Da,Ea,z,Fa,B;Ca=q=Da=Ea=z=Fa=B=0;la=!1;
function Ga(){34821223==y[(z>>2)-1]&&2310721022==y[(z>>2)-2]||p("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x02135467, but received 0x"+y[(z>>2)-2].toString(16)+" "+y[(z>>2)-1].toString(16));if(1668509029!==x[0])throw"Runtime error: The application has corrupted its heap memory area (address zero)!";}
function Ha(){p("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+u+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}var Ia=d.TOTAL_STACK||5242880,u=d.TOTAL_MEMORY||134217728;u<Ia&&d.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+u+"! (TOTAL_STACK="+Ia+")");
assert("undefined"!==typeof Int32Array&&"undefined"!==typeof Float64Array&&void 0!==Int32Array.prototype.subarray&&void 0!==Int32Array.prototype.set,"JS engine does not provide full typed array support");
d.buffer?(buffer=d.buffer,assert(buffer.byteLength===u,"provided buffer should be "+u+" bytes, but it is "+buffer.byteLength)):("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(assert(0===u%65536),d.wasmMemory=new WebAssembly.Memory({initial:u/65536,maximum:u/65536}),buffer=d.wasmMemory.buffer):buffer=new ArrayBuffer(u),assert(buffer.byteLength===u),d.buffer=buffer);Ba();x[0]=1668509029;Aa[1]=25459;
if(115!==r[2]||99!==r[3])throw"Runtime error: expected the system to be little-endian!";function Ja(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Rc;"number"===typeof c?void 0===b.V?d.dynCall_v(c):d.dynCall_vi(c,b.V):c(void 0===b.V?null:b.V)}}}var Ka=[],La=[],Ma=[],Na=[],Oa=[],C=!1,D=!1;function Pa(){var a=d.preRun.shift();Ka.unshift(a)}assert(Math.imul&&Math.fround&&Math.clz32&&Math.trunc,"this is a legacy browser, build with LEGACY_VM_SUPPORT");
var E=0,F=null,Qa=null,Ra={};function Sa(a){for(var b=a;Ra[a];)a=b+Math.random();return a}function Ta(a){E++;d.monitorRunDependencies&&d.monitorRunDependencies(E);a?(assert(!Ra[a]),Ra[a]=1,null===F&&"undefined"!==typeof setInterval&&(F=setInterval(function(){if(pa)clearInterval(F),F=null;else{var a=!1,c;for(c in Ra)a||(a=!0,d.printErr("still waiting on run dependencies:")),d.printErr("dependency: "+c);a&&d.printErr("(end of list)")}},1E4))):d.printErr("warning: run dependency added without ID")}
function Ua(a){E--;d.monitorRunDependencies&&d.monitorRunDependencies(E);a?(assert(Ra[a]),delete Ra[a]):d.printErr("warning: run dependency removed without ID");0==E&&(null!==F&&(clearInterval(F),F=null),Qa&&(a=Qa,Qa=null,a()))}d.preloadedImages={};d.preloadedAudios={};function Va(a){return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}
(function(){function a(){try{if(d.wasmBinary)return new Uint8Array(d.wasmBinary);if(d.readBinary)return d.readBinary(f);throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";}catch(v){p(v)}}function b(){return d.wasmBinary||!l&&!m||"function"!==typeof fetch?new Promise(function(b){b(a())}):fetch(f,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+f+
"'";return a.arrayBuffer()}).catch(function(){return a()})}function c(a){function c(a){t=a.exports;if(t.memory){a=t.memory;var b=d.buffer;a.byteLength<b.byteLength&&d.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");b=new Int8Array(b);(new Int8Array(a)).set(b);d.buffer=buffer=a;Ba()}d.asm=t;d.usingWasm=!0;Ua("wasm-instantiate")}function e(a){assert(d===v,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
v=null;c(a.instance)}function g(a){b().then(function(a){return WebAssembly.instantiate(a,h)}).then(a).catch(function(a){d.printErr("failed to asynchronously prepare wasm: "+a);p(a)})}if("object"!==typeof WebAssembly)return d.printErr("no native wasm support detected"),!1;if(!(d.wasmMemory instanceof WebAssembly.Memory))return d.printErr("no native wasm Memory in use"),!1;a.memory=d.wasmMemory;h.global={NaN:NaN,Infinity:Infinity};h["global.Math"]=Math;h.env=a;Ta("wasm-instantiate");if(d.instantiateWasm)try{return d.instantiateWasm(h,
c)}catch(K){return d.printErr("Module.instantiateWasm callback failed with error: "+K),!1}var v=d;d.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Va(f)||"function"!==typeof fetch?g(e):WebAssembly.instantiateStreaming(fetch(f,{credentials:"same-origin"}),h).then(e).catch(function(a){d.printErr("wasm streaming compile failed: "+a);d.printErr("falling back to ArrayBuffer instantiation");g(e)});return{}}var e="psx.wast",f="psx.wasm",g="psx.temp.asm.js";"function"===typeof d.locateFile&&
(Va(e)||(e=d.locateFile(e)),Va(f)||(f=d.locateFile(f)),Va(g)||(g=d.locateFile(g)));var h={global:null,env:null,asm2wasm:{"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}},parent:d},t=null;d.asmPreload=d.asm;var w=d.reallocBuffer;d.reallocBuffer=function(a){if("asmjs"===A)var b=w(a);else a:{var c=d.usingWasm?65536:16777216;0<a%c&&(a+=c-a%c);c=d.buffer.byteLength;if(d.usingWasm)try{b=-1!==d.wasmMemory.grow((a-c)/65536)?d.buffer=d.wasmMemory.buffer:null;break a}catch(sa){console.error("Module.reallocBuffer: Attempted to grow from "+
c+" bytes to "+a+" bytes, but got error: "+sa);b=null;break a}b=void 0}return b};var A="";d.asm=function(a,b){if(!b.table){a=d.wasmTableSize;void 0===a&&(a=1024);var e=d.wasmMaxTableSize;b.table="object"===typeof WebAssembly&&"function"===typeof WebAssembly.Table?void 0!==e?new WebAssembly.Table({initial:a,maximum:e,element:"anyfunc"}):new WebAssembly.Table({initial:a,element:"anyfunc"}):Array(a);d.wasmTable=b.table}b.memoryBase||(b.memoryBase=d.STATIC_BASE);b.tableBase||(b.tableBase=0);(b=c(b))||
p("no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods");return b}})();Ca=1024;q=Ca+172480;La.push();d.STATIC_BASE=Ca;d.STATIC_BUMP=172480;var Wa=q;q+=16;assert(0==Wa%8);
var G={D:1,u:2,Bc:3,xb:4,A:5,fa:6,Qa:7,Vb:8,M:9,eb:10,aa:11,Lc:11,va:12,R:13,qb:14,hc:15,S:16,ba:17,Mc:18,U:19,da:20,H:21,h:22,Qb:23,ua:24,C:25,Ic:26,rb:27,cc:28,N:29,yc:30,Jb:31,rc:32,nb:33,vc:34,Zb:42,ub:43,fb:44,Ab:45,Bb:46,Cb:47,Ib:48,Jc:49,Tb:50,zb:51,kb:35,Wb:37,Wa:52,Za:53,Nc:54,Rb:55,$a:56,ab:57,lb:35,bb:59,ec:60,Ub:61,Fc:62,dc:63,$b:64,ac:65,xc:66,Xb:67,Ta:68,Cc:69,gb:70,sc:71,Lb:72,ob:73,Ya:74,mc:76,Xa:77,wc:78,Db:79,Eb:80,Hb:81,Gb:82,Fb:83,fc:38,ea:39,Mb:36,T:40,nc:95,qc:96,jb:104,Sb:105,
Ua:97,uc:91,kc:88,bc:92,zc:108,ib:111,Ra:98,hb:103,Pb:101,Nb:100,Gc:110,sb:112,tb:113,wb:115,Va:114,mb:89,Kb:90,tc:93,Ac:94,Sa:99,Ob:102,yb:106,ic:107,Hc:109,Kc:87,pb:122,Dc:116,lc:95,Yb:123,vb:84,oc:75,cb:125,jc:131,pc:130,Ec:86},Xa={0:"Success",1:"Not super-user",2:"No such file or directory",3:"No such process",4:"Interrupted system call",5:"I/O error",6:"No such device or address",7:"Arg list too long",8:"Exec format error",9:"Bad file number",10:"No children",11:"No more processes",12:"Not enough core",
13:"Permission denied",14:"Bad address",15:"Block device required",16:"Mount device busy",17:"File exists",18:"Cross-device link",19:"No such device",20:"Not a directory",21:"Is a directory",22:"Invalid argument",23:"Too many open files in system",24:"Too many open files",25:"Not a typewriter",26:"Text file busy",27:"File too large",28:"No space left on device",29:"Illegal seek",30:"Read only file system",31:"Too many links",32:"Broken pipe",33:"Math arg out of domain of func",34:"Math result not representable",
35:"File locking deadlock error",36:"File or path name too long",37:"No record locks available",38:"Function not implemented",39:"Directory not empty",40:"Too many symbolic links",42:"No message of desired type",43:"Identifier removed",44:"Channel number out of range",45:"Level 2 not synchronized",46:"Level 3 halted",47:"Level 3 reset",48:"Link number out of range",49:"Protocol driver not attached",50:"No CSI structure available",51:"Level 2 halted",52:"Invalid exchange",53:"Invalid request descriptor",
54:"Exchange full",55:"No anode",56:"Invalid request code",57:"Invalid slot",59:"Bad font file fmt",60:"Device not a stream",61:"No data (for no delay io)",62:"Timer expired",63:"Out of streams resources",64:"Machine is not on the network",65:"Package not installed",66:"The object is remote",67:"The link has been severed",68:"Advertise error",69:"Srmount error",70:"Communication error on send",71:"Protocol error",72:"Multihop attempted",73:"Cross mount point (not really error)",74:"Trying to read unreadable message",
75:"Value too large for defined data type",76:"Given log. name not unique",77:"f.d. invalid for this operation",78:"Remote address changed",79:"Can   access a needed shared lib",80:"Accessing a corrupted shared lib",81:".lib section in a.out corrupted",82:"Attempting to link in too many libs",83:"Attempting to exec a shared library",84:"Illegal byte sequence",86:"Streams pipe error",87:"Too many users",88:"Socket operation on non-socket",89:"Destination address required",90:"Message too long",91:"Protocol wrong type for socket",
92:"Protocol not available",93:"Unknown protocol",94:"Socket type not supported",95:"Not supported",96:"Protocol family not supported",97:"Address family not supported by protocol family",98:"Address already in use",99:"Address not available",100:"Network interface is not configured",101:"Network is unreachable",102:"Connection reset by network",103:"Connection aborted",104:"Connection reset by peer",105:"No buffer space available",106:"Socket is already connected",107:"Socket is not connected",108:"Can't send after socket shutdown",
109:"Too many references",110:"Connection timed out",111:"Connection refused",112:"Host is down",113:"Host is unreachable",114:"Socket already connected",115:"Connection already in progress",116:"Stale file handle",122:"Quota exceeded",123:"No medium (in tape drive)",125:"Operation canceled",130:"Previous owner died",131:"State not recoverable"};function Ya(a){d.___errno_location?x[d.___errno_location()>>2]=a:d.printErr("failed to set errno from JS");return a}
function Za(a,b){for(var c=0,e=a.length-1;0<=e;e--){var f=a[e];"."===f?a.splice(e,1):".."===f?(a.splice(e,1),c++):c&&(a.splice(e,1),c--)}if(b)for(;c;c--)a.unshift("..");return a}function $a(a){var b="/"===a.charAt(0),c="/"===a.substr(-1);(a=Za(a.split("/").filter(function(a){return!!a}),!b).join("/"))||b||(a=".");a&&c&&(a+="/");return(b?"/":"")+a}
function ab(a){var b=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);a=b[0];b=b[1];if(!a&&!b)return".";b&&(b=b.substr(0,b.length-1));return a+b}function bb(a){if("/"===a)return"/";var b=a.lastIndexOf("/");return-1===b?a:a.substr(b+1)}function cb(){var a=Array.prototype.slice.call(arguments,0);return $a(a.join("/"))}function H(a,b){return $a(a+"/"+b)}
function db(){for(var a="",b=!1,c=arguments.length-1;-1<=c&&!b;c--){b=0<=c?arguments[c]:"/";if("string"!==typeof b)throw new TypeError("Arguments to path.resolve must be strings");if(!b)return"";a=b+"/"+a;b="/"===b.charAt(0)}a=Za(a.split("/").filter(function(a){return!!a}),!b).join("/");return(b?"/":"")+a||"."}var eb=[];function fb(a,b){eb[a]={input:[],output:[],G:b};gb(a,hb)}
var hb={open:function(a){var b=eb[a.node.rdev];if(!b)throw new I(G.U);a.tty=b;a.seekable=!1},close:function(a){a.tty.G.flush(a.tty)},flush:function(a){a.tty.G.flush(a.tty)},read:function(a,b,c,e){if(!a.tty||!a.tty.G.oa)throw new I(G.fa);for(var f=0,g=0;g<e;g++){try{var h=a.tty.G.oa(a.tty)}catch(t){throw new I(G.A);}if(void 0===h&&0===f)throw new I(G.aa);if(null===h||void 0===h)break;f++;b[c+g]=h}f&&(a.node.timestamp=Date.now());return f},write:function(a,b,c,e){if(!a.tty||!a.tty.G.Z)throw new I(G.fa);
for(var f=0;f<e;f++)try{a.tty.G.Z(a.tty,b[c+f])}catch(g){throw new I(G.A);}e&&(a.node.timestamp=Date.now());return f}},jb={oa:function(a){if(!a.input.length){var b=null;if(n){var c=new Buffer(256),e=0,f=process.stdin.fd;if("win32"!=process.platform){var g=!1;try{f=fs.openSync("/dev/stdin","r"),g=!0}catch(h){}}try{e=fs.readSync(f,c,0,256,null)}catch(h){if(-1!=h.toString().indexOf("EOF"))e=0;else throw h;}g&&fs.closeSync(f);0<e?b=c.slice(0,e).toString("utf-8"):b=null}else"undefined"!=typeof window&&
"function"==typeof window.prompt?(b=window.prompt("Input: "),null!==b&&(b+="\n")):"function"==typeof readline&&(b=readline(),null!==b&&(b+="\n"));if(!b)return null;a.input=ib(b)}return a.input.shift()},Z:function(a,b){null===b||10===b?(d.print(wa(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&0<a.output.length&&(d.print(wa(a.output,0)),a.output=[])}},kb={Z:function(a,b){null===b||10===b?(d.printErr(wa(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&
0<a.output.length&&(d.printErr(wa(a.output,0)),a.output=[])}},J={m:null,j:function(){return J.createNode(null,"/",16895,0)},createNode:function(a,b,c,e){if(24576===(c&61440)||4096===(c&61440))throw new I(G.D);J.m||(J.m={dir:{node:{s:J.c.s,i:J.c.i,lookup:J.c.lookup,J:J.c.J,rename:J.c.rename,unlink:J.c.unlink,rmdir:J.c.rmdir,readdir:J.c.readdir,symlink:J.c.symlink},stream:{v:J.f.v}},file:{node:{s:J.c.s,i:J.c.i},stream:{v:J.f.v,read:J.f.read,write:J.f.write,ga:J.f.ga,ra:J.f.ra,ta:J.f.ta}},link:{node:{s:J.c.s,
i:J.c.i,readlink:J.c.readlink},stream:{}},ja:{node:{s:J.c.s,i:J.c.i},stream:lb}});c=mb(a,b,c,e);L(c.mode)?(c.c=J.m.dir.node,c.f=J.m.dir.stream,c.b={}):32768===(c.mode&61440)?(c.c=J.m.file.node,c.f=J.m.file.stream,c.g=0,c.b=null):40960===(c.mode&61440)?(c.c=J.m.link.node,c.f=J.m.link.stream):8192===(c.mode&61440)&&(c.c=J.m.ja.node,c.f=J.m.ja.stream);c.timestamp=Date.now();a&&(a.b[b]=c);return c},Ca:function(a){if(a.b&&a.b.subarray){for(var b=[],c=0;c<a.g;++c)b.push(a.b[c]);return b}return a.b},Sc:function(a){return a.b?
a.b.subarray?a.b.subarray(0,a.g):new Uint8Array(a.b):new Uint8Array},ka:function(a,b){a.b&&a.b.subarray&&b>a.b.length&&(a.b=J.Ca(a),a.g=a.b.length);if(!a.b||a.b.subarray){var c=a.b?a.b.length:0;c>=b||(b=Math.max(b,c*(1048576>c?2:1.125)|0),0!=c&&(b=Math.max(b,256)),c=a.b,a.b=new Uint8Array(b),0<a.g&&a.b.set(c.subarray(0,a.g),0))}else for(!a.b&&0<b&&(a.b=[]);a.b.length<b;)a.b.push(0)},La:function(a,b){if(a.g!=b)if(0==b)a.b=null,a.g=0;else{if(!a.b||a.b.subarray){var c=a.b;a.b=new Uint8Array(new ArrayBuffer(b));
c&&a.b.set(c.subarray(0,Math.min(b,a.g)))}else if(a.b||(a.b=[]),a.b.length>b)a.b.length=b;else for(;a.b.length<b;)a.b.push(0);a.g=b}},c:{s:function(a){var b={};b.dev=8192===(a.mode&61440)?a.id:1;b.ino=a.id;b.mode=a.mode;b.nlink=1;b.uid=0;b.gid=0;b.rdev=a.rdev;L(a.mode)?b.size=4096:32768===(a.mode&61440)?b.size=a.g:40960===(a.mode&61440)?b.size=a.link.length:b.size=0;b.atime=new Date(a.timestamp);b.mtime=new Date(a.timestamp);b.ctime=new Date(a.timestamp);b.B=4096;b.blocks=Math.ceil(b.size/b.B);return b},
i:function(a,b){void 0!==b.mode&&(a.mode=b.mode);void 0!==b.timestamp&&(a.timestamp=b.timestamp);void 0!==b.size&&J.La(a,b.size)},lookup:function(){throw nb[G.u];},J:function(a,b,c,e){return J.createNode(a,b,c,e)},rename:function(a,b,c){if(L(a.mode)){try{var e=ob(b,c)}catch(g){}if(e)for(var f in e.b)throw new I(G.ea);}delete a.parent.b[a.name];a.name=c;b.b[c]=a;a.parent=b},unlink:function(a,b){delete a.b[b]},rmdir:function(a,b){var c=ob(a,b),e;for(e in c.b)throw new I(G.ea);delete a.b[b]},readdir:function(a){var b=
[".",".."],c;for(c in a.b)a.b.hasOwnProperty(c)&&b.push(c);return b},symlink:function(a,b,c){a=J.createNode(a,b,41471,0);a.link=c;return a},readlink:function(a){if(40960!==(a.mode&61440))throw new I(G.h);return a.link}},f:{read:function(a,b,c,e,f){var g=a.node.b;if(f>=a.node.g)return 0;a=Math.min(a.node.g-f,e);assert(0<=a);if(8<a&&g.subarray)b.set(g.subarray(f,f+a),c);else for(e=0;e<a;e++)b[c+e]=g[f+e];return a},write:function(a,b,c,e,f,g){if(!e)return 0;a=a.node;a.timestamp=Date.now();if(b.subarray&&
(!a.b||a.b.subarray)){if(g)return assert(0===f,"canOwn must imply no weird position inside the file"),a.b=b.subarray(c,c+e),a.g=e;if(0===a.g&&0===f)return a.b=new Uint8Array(b.subarray(c,c+e)),a.g=e;if(f+e<=a.g)return a.b.set(b.subarray(c,c+e),f),e}J.ka(a,f+e);if(a.b.subarray&&b.subarray)a.b.set(b.subarray(c,c+e),f);else for(g=0;g<e;g++)a.b[f+g]=b[c+g];a.g=Math.max(a.g,f+e);return e},v:function(a,b,c){1===c?b+=a.position:2===c&&32768===(a.node.mode&61440)&&(b+=a.node.g);if(0>b)throw new I(G.h);return b},
ga:function(a,b,c){J.ka(a.node,b+c);a.node.g=Math.max(a.node.g,b+c)},ra:function(a,b,c,e,f,g,h){if(32768!==(a.node.mode&61440))throw new I(G.U);c=a.node.b;if(h&2||c.buffer!==b&&c.buffer!==b.buffer){if(0<f||f+e<a.node.g)c.subarray?c=c.subarray(f,f+e):c=Array.prototype.slice.call(c,f,f+e);a=!0;e=pb(e);if(!e)throw new I(G.va);b.set(c,e)}else a=!1,e=c.byteOffset;return{Uc:e,Oc:a}},ta:function(a,b,c,e,f){if(32768!==(a.node.mode&61440))throw new I(G.U);if(f&2)return 0;J.f.write(a,b,0,e,c,!1);return 0}}},
M={P:!1,Oa:function(){M.P=!!process.platform.match(/^win/);var a=process.binding("constants");a.fs&&(a=a.fs);M.la={1024:a.O_APPEND,64:a.O_CREAT,128:a.O_EXCL,0:a.O_RDONLY,2:a.O_RDWR,4096:a.O_SYNC,512:a.O_TRUNC,1:a.O_WRONLY}},ha:function(a){return Buffer.Qc?Buffer.from(a):new Buffer(a)},j:function(a){assert(n);return M.createNode(null,"/",M.na(a.Y.root),0)},createNode:function(a,b,c){if(!L(c)&&32768!==(c&61440)&&40960!==(c&61440))throw new I(G.h);a=mb(a,b,c);a.c=M.c;a.f=M.f;return a},na:function(a){try{var b=
fs.lstatSync(a);M.P&&(b.mode=b.mode|(b.mode&292)>>2)}catch(c){if(!c.code)throw c;throw new I(G[c.code]);}return b.mode},l:function(a){for(var b=[];a.parent!==a;)b.push(a.name),a=a.parent;b.push(a.j.Y.root);b.reverse();return cb.apply(null,b)},Ba:function(a){a&=-2656257;var b=0,c;for(c in M.la)a&c&&(b|=M.la[c],a^=c);if(a)throw new I(G.h);return b},c:{s:function(a){a=M.l(a);try{var b=fs.lstatSync(a)}catch(c){if(!c.code)throw c;throw new I(G[c.code]);}M.P&&!b.B&&(b.B=4096);M.P&&!b.blocks&&(b.blocks=
(b.size+b.B-1)/b.B|0);return{dev:b.dev,ino:b.ino,mode:b.mode,nlink:b.nlink,uid:b.uid,gid:b.gid,rdev:b.rdev,size:b.size,atime:b.atime,mtime:b.mtime,ctime:b.ctime,B:b.B,blocks:b.blocks}},i:function(a,b){var c=M.l(a);try{void 0!==b.mode&&(fs.chmodSync(c,b.mode),a.mode=b.mode),void 0!==b.size&&fs.truncateSync(c,b.size)}catch(e){if(!e.code)throw e;throw new I(G[e.code]);}},lookup:function(a,b){var c=H(M.l(a),b);c=M.na(c);return M.createNode(a,b,c)},J:function(a,b,c,e){a=M.createNode(a,b,c,e);b=M.l(a);
try{L(a.mode)?fs.mkdirSync(b,a.mode):fs.writeFileSync(b,"",{mode:a.mode})}catch(f){if(!f.code)throw f;throw new I(G[f.code]);}return a},rename:function(a,b,c){a=M.l(a);b=H(M.l(b),c);try{fs.renameSync(a,b)}catch(e){if(!e.code)throw e;throw new I(G[e.code]);}},unlink:function(a,b){a=H(M.l(a),b);try{fs.unlinkSync(a)}catch(c){if(!c.code)throw c;throw new I(G[c.code]);}},rmdir:function(a,b){a=H(M.l(a),b);try{fs.rmdirSync(a)}catch(c){if(!c.code)throw c;throw new I(G[c.code]);}},readdir:function(a){a=M.l(a);
try{return fs.readdirSync(a)}catch(b){if(!b.code)throw b;throw new I(G[b.code]);}},symlink:function(a,b,c){a=H(M.l(a),b);try{fs.symlinkSync(c,a)}catch(e){if(!e.code)throw e;throw new I(G[e.code]);}},readlink:function(a){var b=M.l(a);try{return b=fs.readlinkSync(b),b=qb.relative(qb.resolve(a.j.Y.root),b)}catch(c){if(!c.code)throw c;throw new I(G[c.code]);}}},f:{open:function(a){var b=M.l(a.node);try{32768===(a.node.mode&61440)&&(a.L=fs.openSync(b,M.Ba(a.flags)))}catch(c){if(!c.code)throw c;throw new I(G[c.code]);
}},close:function(a){try{32768===(a.node.mode&61440)&&a.L&&fs.closeSync(a.L)}catch(b){if(!b.code)throw b;throw new I(G[b.code]);}},read:function(a,b,c,e,f){if(0===e)return 0;try{return fs.readSync(a.L,M.ha(b.buffer),c,e,f)}catch(g){throw new I(G[g.code]);}},write:function(a,b,c,e,f){try{return fs.writeSync(a.L,M.ha(b.buffer),c,e,f)}catch(g){throw new I(G[g.code]);}},v:function(a,b,c){if(1===c)b+=a.position;else if(2===c&&32768===(a.node.mode&61440))try{b+=fs.fstatSync(a.L).size}catch(e){throw new I(G[e.code]);
}if(0>b)throw new I(G.h);return b}}};q+=16;q+=16;q+=16;var rb=null,sb={},N=[],tb=1,O=null,ub=!0,P={},I=null,nb={};
function Q(a,b){a=db("/",a);b=b||{};if(!a)return{path:"",node:null};var c={ma:!0,$:0},e;for(e in c)void 0===b[e]&&(b[e]=c[e]);if(8<b.$)throw new I(G.T);a=Za(a.split("/").filter(function(a){return!!a}),!1);var f=rb;c="/";for(e=0;e<a.length;e++){var g=e===a.length-1;if(g&&b.parent)break;f=ob(f,a[e]);c=H(c,a[e]);f.K&&(!g||g&&b.ma)&&(f=f.K.root);if(!g||b.I)for(g=0;40960===(f.mode&61440);)if(f=vb(c),c=db(ab(c),f),f=Q(c,{$:b.$}).node,40<g++)throw new I(G.T);}return{path:c,node:f}}
function R(a){for(var b;;){if(a===a.parent)return a=a.j.sa,b?"/"!==a[a.length-1]?a+"/"+b:a+b:a;b=b?a.name+"/"+b:a.name;a=a.parent}}function wb(a,b){for(var c=0,e=0;e<b.length;e++)c=(c<<5)-c+b.charCodeAt(e)|0;return(a+c>>>0)%O.length}function xb(a){var b=wb(a.parent.id,a.name);a.F=O[b];O[b]=a}function ob(a,b){var c;if(c=(c=yb(a,"x"))?c:a.c.lookup?0:G.R)throw new I(c,a);for(c=O[wb(a.id,b)];c;c=c.F){var e=c.name;if(c.parent.id===a.id&&e===b)return c}return a.c.lookup(a,b)}
function mb(a,b,c,e){Ab||(Ab=function(a,b,c,e){a||(a=this);this.parent=a;this.j=a.j;this.K=null;this.id=tb++;this.name=b;this.mode=c;this.c={};this.f={};this.rdev=e},Ab.prototype={},Object.defineProperties(Ab.prototype,{read:{get:function(){return 365===(this.mode&365)},set:function(a){a?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146===(this.mode&146)},set:function(a){a?this.mode|=146:this.mode&=-147}},Fa:{get:function(){return L(this.mode)}},Ea:{get:function(){return 8192===(this.mode&
61440)}}}));a=new Ab(a,b,c,e);xb(a);return a}function L(a){return 16384===(a&61440)}var Bb={r:0,rs:1052672,"r+":2,w:577,wx:705,xw:705,"w+":578,"wx+":706,"xw+":706,a:1089,ax:1217,xa:1217,"a+":1090,"ax+":1218,"xa+":1218};function Cb(a){var b=["r","w","rw"][a&3];a&512&&(b+="w");return b}function yb(a,b){if(ub)return 0;if(-1===b.indexOf("r")||a.mode&292){if(-1!==b.indexOf("w")&&!(a.mode&146)||-1!==b.indexOf("x")&&!(a.mode&73))return G.R}else return G.R;return 0}
function Db(a,b){try{return ob(a,b),G.ba}catch(c){}return yb(a,"wx")}function Eb(a){var b=4096;for(a=a||0;a<=b;a++)if(!N[a])return a;throw new I(G.ua);}function Fb(a,b){Gb||(Gb=function(){},Gb.prototype={},Object.defineProperties(Gb.prototype,{object:{get:function(){return this.node},set:function(a){this.node=a}}}));var c=new Gb,e;for(e in a)c[e]=a[e];a=c;b=Eb(b);a.fd=b;return N[b]=a}var lb={open:function(a){a.f=sb[a.node.rdev].f;a.f.open&&a.f.open(a)},v:function(){throw new I(G.N);}};
function gb(a,b){sb[a]={f:b}}function Hb(a,b){var c="/"===b,e=!b;if(c&&rb)throw new I(G.S);if(!c&&!e){var f=Q(b,{ma:!1});b=f.path;f=f.node;if(f.K)throw new I(G.S);if(!L(f.mode))throw new I(G.da);}b={type:a,Y:{},sa:b,Ha:[]};a=a.j(b);a.j=b;b.root=a;c?rb=a:f&&(f.K=b,f.j&&f.j.Ha.push(b))}function Ib(a,b,c){var e=Q(a,{parent:!0}).node;a=bb(a);if(!a||"."===a||".."===a)throw new I(G.h);var f=Db(e,a);if(f)throw new I(f);if(!e.c.J)throw new I(G.D);return e.c.J(e,a,b,c)}
function S(a,b){return Ib(a,(void 0!==b?b:511)&1023|16384,0)}function Jb(a,b,c){"undefined"===typeof c&&(c=b,b=438);return Ib(a,b|8192,c)}function Kb(a,b){if(!db(a))throw new I(G.u);var c=Q(b,{parent:!0}).node;if(!c)throw new I(G.u);b=bb(b);var e=Db(c,b);if(e)throw new I(e);if(!c.c.symlink)throw new I(G.D);return c.c.symlink(c,b,a)}
function Lb(a){var b=Q(a,{parent:!0}).node,c=bb(a),e=ob(b,c);a:{try{var f=ob(b,c)}catch(h){f=h.o;break a}var g=yb(b,"wx");f=g?g:L(f.mode)?G.H:0}if(f)throw new I(f);if(!b.c.unlink)throw new I(G.D);if(e.K)throw new I(G.S);try{P.willDeletePath&&P.willDeletePath(a)}catch(h){console.log("FS.trackingDelegate['willDeletePath']('"+a+"') threw an exception: "+h.message)}b.c.unlink(b,c);b=wb(e.parent.id,e.name);if(O[b]===e)O[b]=e.F;else for(b=O[b];b;){if(b.F===e){b.F=e.F;break}b=b.F}try{if(P.onDeletePath)P.onDeletePath(a)}catch(h){console.log("FS.trackingDelegate['onDeletePath']('"+
a+"') threw an exception: "+h.message)}}function vb(a){a=Q(a).node;if(!a)throw new I(G.u);if(!a.c.readlink)throw new I(G.h);return db(R(a.parent),a.c.readlink(a))}function Mb(a,b){var c;"string"===typeof a?c=Q(a,{I:!0}).node:c=a;if(!c.c.i)throw new I(G.D);c.c.i(c,{mode:b&4095|c.mode&-4096,timestamp:Date.now()})}
function Nb(a,b,c,e){if(""===a)throw new I(G.u);if("string"===typeof b){var f=Bb[b];if("undefined"===typeof f)throw Error("Unknown file open mode: "+b);b=f}c=b&64?("undefined"===typeof c?438:c)&4095|32768:0;if("object"===typeof a)var g=a;else{a=$a(a);try{g=Q(a,{I:!(b&131072)}).node}catch(t){}}f=!1;if(b&64)if(g){if(b&128)throw new I(G.ba);}else g=Ib(a,c,0),f=!0;if(!g)throw new I(G.u);8192===(g.mode&61440)&&(b&=-513);if(b&65536&&!L(g.mode))throw new I(G.da);if(!f&&(c=g?40960===(g.mode&61440)?G.T:L(g.mode)&&
("r"!==Cb(b)||b&512)?G.H:yb(g,Cb(b)):G.u))throw new I(c);if(b&512){c=g;var h;"string"===typeof c?h=Q(c,{I:!0}).node:h=c;if(!h.c.i)throw new I(G.D);if(L(h.mode))throw new I(G.H);if(32768!==(h.mode&61440))throw new I(G.h);if(c=yb(h,"w"))throw new I(c);h.c.i(h,{size:0,timestamp:Date.now()})}b&=-641;e=Fb({node:g,path:R(g),flags:b,seekable:!0,position:0,f:g.f,Pa:[],error:!1},e);e.f.open&&e.f.open(e);!d.logReadFiles||b&1||(Ob||(Ob={}),a in Ob||(Ob[a]=1,d.printErr("read file: "+a)));try{P.onOpenFile&&(g=
0,1!==(b&2097155)&&(g|=1),0!==(b&2097155)&&(g|=2),P.onOpenFile(a,g))}catch(t){console.log("FS.trackingDelegate['onOpenFile']('"+a+"', flags) threw an exception: "+t.message)}return e}function Pb(a){a.W&&(a.W=null);try{a.f.close&&a.f.close(a)}catch(b){throw b;}finally{N[a.fd]=null}}function Qb(a,b,c){if(!a.seekable||!a.f.v)throw new I(G.N);a.position=a.f.v(a,b,c);a.Pa=[];return a.position}
function Rb(a,b,c,e,f,g){if(0>e||0>f)throw new I(G.h);if(0===(a.flags&2097155))throw new I(G.M);if(L(a.node.mode))throw new I(G.H);if(!a.f.write)throw new I(G.h);a.flags&1024&&(f=Qb(a,0,2));var h=!0;if("undefined"===typeof f)f=a.position,h=!1;else if(!a.seekable)throw new I(G.N);b=a.f.write(a,b,c,e,f,g);h||(a.position+=b);try{if(a.path&&P.onWriteToFile)P.onWriteToFile(a.path)}catch(t){console.log("FS.trackingDelegate['onWriteToFile']('"+path+"') threw an exception: "+t.message)}return b}
function Sb(){I||(I=function(a,b){this.node=b;this.Na=function(a){this.o=a;for(var b in G)if(G[b]===a){this.code=b;break}};this.Na(a);this.message=Xa[a];this.stack&&Object.defineProperty(this,"stack",{value:Error().stack,writable:!0});this.stack&&(this.stack=ya(this.stack))},I.prototype=Error(),I.prototype.constructor=I,[G.u].forEach(function(a){nb[a]=new I(a);nb[a].stack="<generic error, no stack>"}))}var Tb;function Ub(a,b){var c=0;a&&(c|=365);b&&(c|=146);return c}
function Vb(a,b,c,e){a=H("string"===typeof a?a:R(a),b);return S(a,Ub(c,e))}function Wb(a,b){a="string"===typeof a?a:R(a);for(b=b.split("/").reverse();b.length;){var c=b.pop();if(c){var e=H(a,c);try{S(e)}catch(f){}a=e}}return e}function Xb(a,b,c,e){a=H("string"===typeof a?a:R(a),b);c=Ub(c,e);return Ib(a,(void 0!==c?c:438)&4095|32768,0)}
function Yb(a,b,c,e,f,g){a=b?H("string"===typeof a?a:R(a),b):a;e=Ub(e,f);f=Ib(a,(void 0!==e?e:438)&4095|32768,0);if(c){if("string"===typeof c){a=Array(c.length);b=0;for(var h=c.length;b<h;++b)a[b]=c.charCodeAt(b);c=a}Mb(f,e|146);a=Nb(f,"w");Rb(a,c,0,c.length,0,g);Pb(a);Mb(f,e)}return f}
function T(a,b,c,e){a=H("string"===typeof a?a:R(a),b);b=Ub(!!c,!!e);T.qa||(T.qa=64);var f=T.qa++<<8|0;gb(f,{open:function(a){a.seekable=!1},close:function(){e&&e.buffer&&e.buffer.length&&e(10)},read:function(a,b,e,f){for(var g=0,h=0;h<f;h++){try{var t=c()}catch(W){throw new I(G.A);}if(void 0===t&&0===g)throw new I(G.aa);if(null===t||void 0===t)break;g++;b[e+h]=t}g&&(a.node.timestamp=Date.now());return g},write:function(a,b,c,f){for(var g=0;g<f;g++)try{e(b[c+g])}catch(v){throw new I(G.A);}f&&(a.node.timestamp=
Date.now());return g}});return Jb(a,b,f)}function Zb(a,b,c){a=H("string"===typeof a?a:R(a),b);return Kb(c,a)}
function $b(a){if(a.Ea||a.Fa||a.link||a.b)return!0;var b=!0;if("undefined"!==typeof XMLHttpRequest)throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(d.read)try{a.b=ib(d.read(a.url)),a.g=a.b.length}catch(c){b=!1}else throw Error("Cannot load without read() or XMLHttpRequest.");b||Ya(G.A);return b}
function ac(a,b,c,e,f){function g(){this.X=!1;this.O=[]}g.prototype.get=function(a){if(!(a>this.length-1||0>a)){var b=a%this.chunkSize;return this.pa(a/this.chunkSize|0)[b]}};g.prototype.Ma=function(a){this.pa=a};g.prototype.ia=function(){var a=new XMLHttpRequest;a.open("HEAD",c,!1);a.send(null);if(!(200<=a.status&&300>a.status||304===a.status))throw Error("Couldn't load "+c+". Status: "+a.status);var b=Number(a.getResponseHeader("Content-length")),e,f=(e=a.getResponseHeader("Accept-Ranges"))&&"bytes"===
e;a=(e=a.getResponseHeader("Content-Encoding"))&&"gzip"===e;var g=1048576;f||(g=b);var h=this;h.Ma(function(a){var e=a*g,f=(a+1)*g-1;f=Math.min(f,b-1);if("undefined"===typeof h.O[a]){var t=h.O;if(e>f)throw Error("invalid range ("+e+", "+f+") or no bytes requested!");if(f>b-1)throw Error("only "+b+" bytes available! programmer error!");var v=new XMLHttpRequest;v.open("GET",c,!1);b!==g&&v.setRequestHeader("Range","bytes="+e+"-"+f);"undefined"!=typeof Uint8Array&&(v.responseType="arraybuffer");v.overrideMimeType&&
v.overrideMimeType("text/plain; charset=x-user-defined");v.send(null);if(!(200<=v.status&&300>v.status||304===v.status))throw Error("Couldn't load "+c+". Status: "+v.status);e=void 0!==v.response?new Uint8Array(v.response||[]):ib(v.responseText||"");t[a]=e}if("undefined"===typeof h.O[a])throw Error("doXHR failed!");return h.O[a]});if(a||!b)g=b=1,g=b=this.pa(0).length,console.log("LazyFiles on gzip forces download of the whole file when length is accessed");this.ya=b;this.wa=g;this.X=!0};if("undefined"!==
typeof XMLHttpRequest){if(!m)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var h=new g;Object.defineProperties(h,{length:{get:function(){this.X||this.ia();return this.ya}},chunkSize:{get:function(){this.X||this.ia();return this.wa}}});var t=void 0}else t=c,h=void 0;var w=Xb(a,b,e,f);h?w.b=h:t&&(w.b=null,w.url=t);Object.defineProperties(w,{g:{get:function(){return this.b.length}}});var A={};Object.keys(w.f).forEach(function(a){var b=
w.f[a];A[a]=function(){if(!$b(w))throw new I(G.A);return b.apply(null,arguments)}});A.read=function(a,b,c,e,f){if(!$b(w))throw new I(G.A);a=a.node.b;if(f>=a.length)return 0;e=Math.min(a.length-f,e);assert(0<=e);if(a.slice)for(var g=0;g<e;g++)b[c+g]=a[f+g];else for(g=0;g<e;g++)b[c+g]=a.get(f+g);return e};w.f=A;return w}
function bc(a,b,c,e,f,g,h,t,w,A){function v(c){function v(c){A&&A();t||Yb(a,b,c,e,f,w);g&&g();Ua(W)}var K=!1;d.preloadPlugins.forEach(function(a){!K&&a.canHandle(ia)&&(a.handle(c,ia,v,function(){h&&h();Ua(W)}),K=!0)});K||v(c)}Browser.Tc();var ia=b?db(H(a,b)):a,W=Sa("cp "+ia);Ta(W);"string"==typeof c?Browser.Pc(c,function(a){v(a)},h):v(c)}var FS={},Ab,Gb,Ob,U=0;function V(){U+=4;return x[U-4>>2]}function cc(){var a=N[V()];if(!a)throw new I(G.M);return a}Sb();O=Array(4096);Hb(J,"/");S("/tmp");S("/home");
S("/home/web_user");(function(){S("/dev");gb(259,{read:function(){return 0},write:function(a,b,f,g){return g}});Jb("/dev/null",259);fb(1280,jb);fb(1536,kb);Jb("/dev/tty",1280);Jb("/dev/tty1",1536);if("undefined"!==typeof crypto){var a=new Uint8Array(1);var b=function(){crypto.getRandomValues(a);return a[0]}}else b=n?function(){return require("crypto").randomBytes(1)[0]}:function(){return 256*Math.random()|0};T("/dev","random",b);T("/dev","urandom",b);S("/dev/shm");S("/dev/shm/tmp")})();S("/proc");
S("/proc/self");S("/proc/self/fd");Hb({j:function(){var a=mb("/proc/self","fd",16895,73);a.c={lookup:function(a,c){var b=N[+c];if(!b)throw new I(G.M);a={parent:null,j:{sa:"fake"},c:{readlink:function(){return b.path}}};return a.parent=a}};return a}},"/proc/self/fd");
La.unshift(function(){if(!d.noFSInit&&!Tb){assert(!Tb,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");Tb=!0;Sb();d.stdin=d.stdin;d.stdout=d.stdout;d.stderr=d.stderr;d.stdin?T("/dev","stdin",d.stdin):Kb("/dev/tty","/dev/stdin");d.stdout?T("/dev","stdout",null,d.stdout):Kb("/dev/tty","/dev/stdout");d.stderr?T("/dev","stderr",null,d.stderr):Kb("/dev/tty1","/dev/stderr");var a=
Nb("/dev/stdin","r");assert(0===a.fd,"invalid handle for stdin ("+a.fd+")");a=Nb("/dev/stdout","w");assert(1===a.fd,"invalid handle for stdout ("+a.fd+")");a=Nb("/dev/stderr","w");assert(2===a.fd,"invalid handle for stderr ("+a.fd+")")}});Ma.push(function(){ub=!1});Na.push(function(){Tb=!1;var a=d._fflush;a&&a(0);for(a=0;a<N.length;a++){var b=N[a];b&&Pb(b)}});d.FS_createFolder=Vb;d.FS_createPath=Wb;d.FS_createDataFile=Yb;d.FS_createPreloadedFile=bc;d.FS_createLazyFile=ac;d.FS_createLink=Zb;
d.FS_createDevice=T;d.FS_unlink=Lb;La.unshift(function(){});Na.push(function(){});if(n){var fs=require("fs"),qb=require("path");M.Oa()}B=ka(4);Da=Ea=ma(q);z=Da+Ia;Fa=ma(z);x[B>>2]=Fa;la=!0;assert(Fa<u,"TOTAL_MEMORY not big enough for stack");
function ib(a){for(var b=0,c=0;c<a.length;++c){var e=a.charCodeAt(c);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++c)&1023);127>=e?++b:b=2047>=e?b+2:65535>=e?b+3:2097151>=e?b+4:67108863>=e?b+5:b+6}b=Array(b+1);a=ra(a,b,0,b.length);b.length=a;return b}
var X="0 _psf_file_fopen _psf_file_fclose _psf_file_ftell ___stdio_close 0 0 0".split(" "),Y="0 _sif_lw _intr_lw _dma0_lw _timer_lw _misc_lw _dma1_lw _iop_spu_lw _iop_spu2_lw _catcher_lw ___stdio_write ___stdio_seek ___stdout_write _sn_write _audit_lw _zcalloc _psf_lib_meta _psf_info_meta ___stdio_read 0 0 0 0 0 0 0 0 0 0 0 0 0".split(" "),dc=["0","_psf_file_fread"],ec=["0","_virtual_readfile","_psf1_load","_psf2fs_load_callback"],fc=["0","_psf_file_fseek"],hc=["0","_iop_advance","_zcfree","0"],ic=
"0 _spucore_predict_0 _spucore_predict_1 _spucore_predict_2 _spucore_predict_3 _spucore_predict_4 0 0".split(" "),jc="0 _sif_sw _intr_sw _dma0_sw _timer_sw _dma1_sw _iop_spu_sw _iop_spu2_sw _iop_emucall_sw _catcher_sw _audit_sw 0 0 0 0 0".split(" ");d.wasmTableSize=76;d.wasmMaxTableSize=76;d.za={};
d.Aa={abort:p,enlargeMemory:function(){Ha()},getTotalMemory:function(){return u},abortOnCannotGrowMemory:Ha,abortStackOverflow:function(a){p("Stack overflow! Attempted to allocate "+a+" bytes on the stack, but stack has only "+(z-fa()+a)+" bytes available!")},nullFunc_ii:function(a){d.printErr("Invalid function pointer '"+a+"' called with signature 'ii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");
d.printErr("This pointer might make sense in another type signature: iiii: "+Y[a]+"  iiji: "+fc[a]+"  iiiii: "+dc[a]+"  iiiiii: "+ec[a]+"  vii: "+hc[a]+"  viii: "+ic[a]+"  viiii: "+jc[a]+"  ");p(a)},nullFunc_iiii:function(a){d.printErr("Invalid function pointer '"+a+"' called with signature 'iiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");
d.printErr("This pointer might make sense in another type signature: ii: "+X[a]+"  iiiii: "+dc[a]+"  iiiiii: "+ec[a]+"  iiji: "+fc[a]+"  viii: "+ic[a]+"  viiii: "+jc[a]+"  vii: "+hc[a]+"  ");p(a)},nullFunc_iiiii:function(a){d.printErr("Invalid function pointer '"+a+"' called with signature 'iiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");
d.printErr("This pointer might make sense in another type signature: iiii: "+Y[a]+"  ii: "+X[a]+"  iiiiii: "+ec[a]+"  viiii: "+jc[a]+"  iiji: "+fc[a]+"  viii: "+ic[a]+"  vii: "+hc[a]+"  ");p(a)},nullFunc_iiiiii:function(a){d.printErr("Invalid function pointer '"+a+"' called with signature 'iiiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");
d.printErr("This pointer might make sense in another type signature: iiii: "+Y[a]+"  iiiii: "+dc[a]+"  ii: "+X[a]+"  viiii: "+jc[a]+"  iiji: "+fc[a]+"  viii: "+ic[a]+"  vii: "+hc[a]+"  ");p(a)},nullFunc_iiji:function(a){d.printErr("Invalid function pointer '"+a+"' called with signature 'iiji'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");
d.printErr("This pointer might make sense in another type signature: ii: "+X[a]+"  iiii: "+Y[a]+"  viii: "+ic[a]+"  vii: "+hc[a]+"  iiiii: "+dc[a]+"  viiii: "+jc[a]+"  iiiiii: "+ec[a]+"  ");p(a)},nullFunc_vii:function(a){d.printErr("Invalid function pointer '"+a+"' called with signature 'vii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");
d.printErr("This pointer might make sense in another type signature: viii: "+ic[a]+"  viiii: "+jc[a]+"  ii: "+X[a]+"  iiii: "+Y[a]+"  iiji: "+fc[a]+"  iiiii: "+dc[a]+"  iiiiii: "+ec[a]+"  ");p(a)},nullFunc_viii:function(a){d.printErr("Invalid function pointer '"+a+"' called with signature 'viii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");
d.printErr("This pointer might make sense in another type signature: vii: "+hc[a]+"  viiii: "+jc[a]+"  ii: "+X[a]+"  iiii: "+Y[a]+"  iiji: "+fc[a]+"  iiiii: "+dc[a]+"  iiiiii: "+ec[a]+"  ");p(a)},nullFunc_viiii:function(a){d.printErr("Invalid function pointer '"+a+"' called with signature 'viiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");
d.printErr("This pointer might make sense in another type signature: viii: "+ic[a]+"  vii: "+hc[a]+"  iiii: "+Y[a]+"  ii: "+X[a]+"  iiiii: "+dc[a]+"  iiji: "+fc[a]+"  iiiiii: "+ec[a]+"  ");p(a)},___lock:function(){},___setErrNo:Ya,___syscall140:function(a,b){U=b;try{var c=cc();V();var e=V(),f=V(),g=V();Qb(c,e,g);x[f>>2]=c.position;c.W&&0===e&&0===g&&(c.W=null);return 0}catch(h){return"undefined"!==typeof FS&&h instanceof I||p(h),-h.o}},___syscall145:function(a,b){U=b;try{var c=cc(),e=V();a:{var f=
V();for(b=a=0;b<f;b++){var g=x[e+(8*b+4)>>2],h=c,t=x[e+8*b>>2],w=g,A=void 0,v=qa;if(0>w||0>A)throw new I(G.h);if(1===(h.flags&2097155))throw new I(G.M);if(L(h.node.mode))throw new I(G.H);if(!h.f.read)throw new I(G.h);var ia=!0;if("undefined"===typeof A)A=h.position,ia=!1;else if(!h.seekable)throw new I(G.N);var W=h.f.read(h,v,t,w,A);ia||(h.position+=W);var sa=W;if(0>sa){var zb=-1;break a}a+=sa;if(sa<g)break}zb=a}return zb}catch(K){return"undefined"!==typeof FS&&K instanceof I||p(K),-K.o}},___syscall146:function(a,
b){U=b;try{var c=cc(),e=V();a:{var f=V();for(b=a=0;b<f;b++){var g=Rb(c,qa,x[e+8*b>>2],x[e+(8*b+4)>>2],void 0);if(0>g){var h=-1;break a}a+=g}h=a}return h}catch(t){return"undefined"!==typeof FS&&t instanceof I||p(t),-t.o}},___syscall221:function(a,b){U=b;try{var c=cc();switch(V()){case 0:var e=V();return 0>e?-G.h:Nb(c.path,c.flags,0,e).fd;case 1:case 2:return 0;case 3:return c.flags;case 4:return e=V(),c.flags|=e,0;case 12:case 12:return e=V(),Aa[e+0>>1]=2,0;case 13:case 14:case 13:case 14:return 0;
case 16:case 8:return-G.h;case 9:return Ya(G.h),-1;default:return-G.h}}catch(f){return"undefined"!==typeof FS&&f instanceof I||p(f),-f.o}},___syscall5:function(a,b){U=b;try{var c=va(V()),e=V(),f=V();return Nb(c,e,f).fd}catch(g){return"undefined"!==typeof FS&&g instanceof I||p(g),-g.o}},___syscall54:function(a,b){U=b;try{var c=cc(),e=V();switch(e){case 21509:case 21505:return c.tty?0:-G.C;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return c.tty?0:-G.C;case 21519:if(!c.tty)return-G.C;
var f=V();return x[f>>2]=0;case 21520:return c.tty?-G.h:-G.C;case 21531:a=f=V();if(!c.f.Da)throw new I(G.C);return c.f.Da(c,e,a);case 21523:return c.tty?0:-G.C;default:p("bad ioctl syscall "+e)}}catch(g){return"undefined"!==typeof FS&&g instanceof I||p(g),-g.o}},___syscall6:function(a,b){U=b;try{var c=cc();Pb(c);return 0}catch(e){return"undefined"!==typeof FS&&e instanceof I||p(e),-e.o}},___unlock:function(){},_emscripten_memcpy_big:function(a,b,c){r.set(r.subarray(b,b+c),a);return a},_psx_request_file:function(a){return window.fileRequestCallback(a)},
DYNAMICTOP_PTR:B,STACKTOP:Ea,STACK_MAX:z};var Z=d.asm(d.za,d.Aa,buffer),kc=Z.___errno_location;Z.___errno_location=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return kc.apply(null,arguments)};var lc=Z._emu_compute_audio_samples;
Z._emu_compute_audio_samples=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return lc.apply(null,arguments)};var mc=Z._emu_get_audio_buffer;
Z._emu_get_audio_buffer=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return mc.apply(null,arguments)};var nc=Z._emu_get_audio_buffer_length;
Z._emu_get_audio_buffer_length=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return nc.apply(null,arguments)};var oc=Z._emu_get_current_position;
Z._emu_get_current_position=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return oc.apply(null,arguments)};var pc=Z._emu_get_max_position;
Z._emu_get_max_position=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return pc.apply(null,arguments)};var qc=Z._emu_get_sample_rate;
Z._emu_get_sample_rate=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return qc.apply(null,arguments)};var rc=Z._emu_get_track_info;
Z._emu_get_track_info=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return rc.apply(null,arguments)};var sc=Z._emu_init;
Z._emu_init=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return sc.apply(null,arguments)};var tc=Z._emu_seek_position;
Z._emu_seek_position=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return tc.apply(null,arguments)};var uc=Z._emu_set_subsong;
Z._emu_set_subsong=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return uc.apply(null,arguments)};var vc=Z._emu_setup;
Z._emu_setup=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return vc.apply(null,arguments)};var wc=Z._emu_teardown;
Z._emu_teardown=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return wc.apply(null,arguments)};var xc=Z._fflush;Z._fflush=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return xc.apply(null,arguments)};
var yc=Z._free;Z._free=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return yc.apply(null,arguments)};var zc=Z._llvm_bswap_i32;
Z._llvm_bswap_i32=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return zc.apply(null,arguments)};var Ac=Z._malloc;Z._malloc=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Ac.apply(null,arguments)};
var Bc=Z._sbrk;Z._sbrk=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Bc.apply(null,arguments)};var Cc=Z.establishStackSpace;
Z.establishStackSpace=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Cc.apply(null,arguments)};var Dc=Z.getTempRet0;
Z.getTempRet0=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Dc.apply(null,arguments)};var Ec=Z.setTempRet0;Z.setTempRet0=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Ec.apply(null,arguments)};
var Fc=Z.setThrew;Z.setThrew=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Fc.apply(null,arguments)};var Gc=Z.stackAlloc;
Z.stackAlloc=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Gc.apply(null,arguments)};var Hc=Z.stackRestore;Z.stackRestore=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Hc.apply(null,arguments)};
var Ic=Z.stackSave;Z.stackSave=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Ic.apply(null,arguments)};d.asm=Z;
d.___errno_location=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm.___errno_location.apply(null,arguments)};
d._emu_compute_audio_samples=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm._emu_compute_audio_samples.apply(null,arguments)};
d._emu_get_audio_buffer=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm._emu_get_audio_buffer.apply(null,arguments)};
d._emu_get_audio_buffer_length=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm._emu_get_audio_buffer_length.apply(null,arguments)};
d._emu_get_current_position=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm._emu_get_current_position.apply(null,arguments)};
d._emu_get_max_position=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm._emu_get_max_position.apply(null,arguments)};
d._emu_get_sample_rate=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm._emu_get_sample_rate.apply(null,arguments)};
d._emu_get_track_info=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm._emu_get_track_info.apply(null,arguments)};
d._emu_init=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm._emu_init.apply(null,arguments)};
d._emu_seek_position=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm._emu_seek_position.apply(null,arguments)};
d._emu_set_subsong=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm._emu_set_subsong.apply(null,arguments)};
d._emu_setup=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm._emu_setup.apply(null,arguments)};
d._emu_teardown=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm._emu_teardown.apply(null,arguments)};
d._fflush=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm._fflush.apply(null,arguments)};d._free=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm._free.apply(null,arguments)};
d._llvm_bswap_i32=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm._llvm_bswap_i32.apply(null,arguments)};
var pb=d._malloc=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm._malloc.apply(null,arguments)};d._sbrk=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm._sbrk.apply(null,arguments)};
d.establishStackSpace=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm.establishStackSpace.apply(null,arguments)};
d.getTempRet0=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm.getTempRet0.apply(null,arguments)};
d.setTempRet0=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm.setTempRet0.apply(null,arguments)};
d.setThrew=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm.setThrew.apply(null,arguments)};
var ja=d.stackAlloc=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm.stackAlloc.apply(null,arguments)},ha=d.stackRestore=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm.stackRestore.apply(null,
arguments)},fa=d.stackSave=function(){assert(C,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!D,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return d.asm.stackSave.apply(null,arguments)};d.asm=Z;d.intArrayFromString||(d.intArrayFromString=function(){p("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.intArrayToString||(d.intArrayToString=function(){p("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
d.ccall=function(a,b,c,e){var f=d["_"+a];assert(f,"Cannot call unknown function "+a+", make sure it is exported");var g=[];a=0;assert("array"!==b,'Return type should not be "array".');if(e)for(var h=0;h<e.length;h++){var t=ua[c[h]];t?(0===a&&(a=fa()),g[h]=t(e[h])):g[h]=e[h]}c=f.apply(null,g);"string"===b&&(c=va(c));0!==a&&ha(a);return c};d.cwrap||(d.cwrap=function(){p("'cwrap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.setValue||(d.setValue=function(){p("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
d.getValue||(d.getValue=function(){p("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.allocate||(d.allocate=function(){p("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.getMemory=function(a){if(la)if(C)var b=pb(a);else{assert(B);b=x[B>>2];a=b+a+15&-16;x[B>>2]=a;if(a=a>=u)Ha(),a=!0;a&&(x[B>>2]=b,b=0)}else b=ka(a);return b};d.Pointer_stringify=va;d.AsciiToString||(d.AsciiToString=function(){p("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
d.stringToAscii||(d.stringToAscii=function(){p("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.UTF8ArrayToString||(d.UTF8ArrayToString=function(){p("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.UTF8ToString||(d.UTF8ToString=function(){p("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.stringToUTF8Array||(d.stringToUTF8Array=function(){p("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
d.stringToUTF8||(d.stringToUTF8=function(){p("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.UTF16ToString||(d.UTF16ToString=function(){p("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.stringToUTF16||(d.stringToUTF16=function(){p("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.lengthBytesUTF16||(d.lengthBytesUTF16=function(){p("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
d.UTF32ToString||(d.UTF32ToString=function(){p("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.stringToUTF32||(d.stringToUTF32=function(){p("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.lengthBytesUTF32||(d.lengthBytesUTF32=function(){p("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.allocateUTF8||(d.allocateUTF8=function(){p("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
d.stackTrace||(d.stackTrace=function(){p("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.addOnPreRun||(d.addOnPreRun=function(){p("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.addOnInit||(d.addOnInit=function(){p("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.addOnPreMain||(d.addOnPreMain=function(){p("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
d.addOnExit||(d.addOnExit=function(){p("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.addOnPostRun||(d.addOnPostRun=function(){p("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.writeStringToMemory||(d.writeStringToMemory=function(){p("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.writeArrayToMemory||(d.writeArrayToMemory=function(){p("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
d.writeAsciiToMemory||(d.writeAsciiToMemory=function(){p("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.addRunDependency=Ta;d.removeRunDependency=Ua;d.FS||(d.FS=function(){p("'FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.FS_createFolder=Vb;d.FS_createPath=Wb;d.FS_createDataFile=Yb;d.FS_createPreloadedFile=bc;d.FS_createLazyFile=ac;d.FS_createLink=Zb;d.FS_createDevice=T;d.FS_unlink=Lb;d.GL||(d.GL=function(){p("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
d.staticAlloc||(d.staticAlloc=function(){p("'staticAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.dynamicAlloc||(d.dynamicAlloc=function(){p("'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.warnOnce||(d.warnOnce=function(){p("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.loadDynamicLibrary||(d.loadDynamicLibrary=function(){p("'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
d.loadWebAssemblyModule||(d.loadWebAssemblyModule=function(){p("'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.getLEB||(d.getLEB=function(){p("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.getFunctionTables||(d.getFunctionTables=function(){p("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.alignFunctionTables||(d.alignFunctionTables=function(){p("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
d.registerFunctions||(d.registerFunctions=function(){p("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.addFunction||(d.addFunction=function(){p("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.removeFunction||(d.removeFunction=function(){p("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.getFuncWrapper||(d.getFuncWrapper=function(){p("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
d.prettyPrint||(d.prettyPrint=function(){p("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.makeBigInt||(d.makeBigInt=function(){p("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.dynCall||(d.dynCall=function(){p("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});d.getCompilerSetting||(d.getCompilerSetting=function(){p("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
d.ALLOC_NORMAL||Object.defineProperty(d,"ALLOC_NORMAL",{get:function(){p("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}});d.ALLOC_STACK||Object.defineProperty(d,"ALLOC_STACK",{get:function(){p("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}});d.ALLOC_STATIC||Object.defineProperty(d,"ALLOC_STATIC",{get:function(){p("'ALLOC_STATIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}});
d.ALLOC_DYNAMIC||Object.defineProperty(d,"ALLOC_DYNAMIC",{get:function(){p("'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}});d.ALLOC_NONE||Object.defineProperty(d,"ALLOC_NONE",{get:function(){p("'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}});function ea(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}ea.prototype=Error();ea.prototype.constructor=ea;var Jc=null;
Qa=function Kc(){d.calledRun||Lc();d.calledRun||(Qa=Kc)};
function Lc(){function a(){if(!d.calledRun&&(d.calledRun=!0,!pa)){Ga();C||(C=!0,Ja(La));Ga();Ja(Ma);l&&null!==Jc&&d.printErr("pre-main prep time: "+(Date.now()-Jc)+" ms");if(d.onRuntimeInitialized)d.onRuntimeInitialized();assert(!d._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');Ga();if(d.postRun)for("function"==typeof d.postRun&&(d.postRun=[d.postRun]);d.postRun.length;){var a=d.postRun.shift();Oa.unshift(a)}Ja(Oa)}}null===Jc&&(Jc=
Date.now());if(!(0<E)){assert(0==(z&3));y[(z>>2)-1]=34821223;y[(z>>2)-2]=2310721022;if(d.preRun)for("function"==typeof d.preRun&&(d.preRun=[d.preRun]);d.preRun.length;)Pa();Ja(Ka);0<E||d.calledRun||(d.setStatus?(d.setStatus("Running..."),setTimeout(function(){setTimeout(function(){d.setStatus("")},1);a()},1)):a(),Ga())}}d.run=Lc;
function Mc(){var a=d.print,b=d.printErr,c=!1;d.print=d.printErr=function(){c=!0};try{var e=d._fflush;e&&e(0);["stdout","stderr"].forEach(function(a){a="/dev/"+a;try{var b=Q(a,{I:!0});a=b.path}catch(t){}var e={Ga:!1,exists:!1,error:0,name:null,path:null,object:null,Ia:!1,Ka:null,Ja:null};try{b=Q(a,{parent:!0}),e.Ia=!0,e.Ka=b.path,e.Ja=b.node,e.name=bb(a),b=Q(a,{I:!0}),e.exists=!0,e.path=b.path,e.object=b.node,e.name=b.node.name,e.Ga="/"===b.path}catch(t){e.error=t.o}e&&(b=eb[e.object.rdev])&&b.output&&
b.output.length&&(c=!0)})}catch(f){}d.print=a;d.printErr=b;c&&na("stdio streams had content in them that was not flushed. you should set NO_EXIT_RUNTIME to 0 (see the FAQ), or make sure to emit a newline when you printf etc.")}
d.exit=function(a,b){Mc();if(!b||!d.noExitRuntime||0!==a){if(d.noExitRuntime)b||d.printErr("exit("+a+") called, but NO_EXIT_RUNTIME is set, so halting execution but not exiting the runtime or preventing further async execution (build with NO_EXIT_RUNTIME=0, if you want a true shutdown)");else if(pa=!0,Ea=void 0,Ga(),Ja(Na),D=!0,d.onExit)d.onExit(a);n&&process.exit(a);d.quit(a,new ea(a))}};var Nc=[];
function p(a){if(d.onAbort)d.onAbort(a);void 0!==a?(d.print(a),d.printErr(a),a=JSON.stringify(a)):a="";pa=!0;var b="abort("+a+") at "+za()+"";Nc&&Nc.forEach(function(c){b=c(b,a)});throw b;}d.abort=p;if(d.preInit)for("function"==typeof d.preInit&&(d.preInit=[d.preInit]);0<d.preInit.length;)d.preInit.pop()();d.noExitRuntime=!0;Lc();
  return {
	Module: Module,  // expose original Module
  };
})(window.spp_backend_state_PSX);
/*
 psx_adapter.js: Adapts HighlyExperimental backend to generic WebAudio/ScriptProcessor player.
 
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

PSXBackendAdapter = (function(){ var $this = function (presetBIOS, modlandMode) {
		$this.base.call(this, backend_PSX.Module, 2);
		this._manualSetupComplete= presetBIOS?false:true;
		this._undefined;
		this._currentPath;
		this._currentFile;

		// aka dumshit ftp.modland.com mode:
		this.modlandMode= (typeof modlandMode != 'undefined') ? modlandMode : false;
		this.originalFile= "";
		this.modlandMap= {};	// mapping of weird shit filenames used on modland 
		
		if (!backend_PSX.Module.notReady) {
			// in sync scenario the "onRuntimeInitialized" has already fired before execution gets here,
			// i.e. it has to be called explicitly here (in async scenario "onRuntimeInitialized" will trigger
			// the call directly)
			this.doOnAdapterReady();
		}				
	}; 
	// HighlyExperimental's sample buffer contains 2-byte integer sample data (i.e. 
	// must be rescaled) of 2 interleaved channels
	extend(EmsHEAP16BackendAdapter, $this, {
		uploadFile: function(filename, options) {
			if (options.setBIOS === 'undefined') {
				return -1;
			} else {
				// if not explicitly set here.. then 'emu_init' will go for some default later..
				
				if (this.Module.ccall('emu_setup', 'number', ['string'], [filename]) ==0) {
					this._manualSetupComplete= true;
					if (!(this._observer === 'undefined')) this._observer.handleBackendEvent();
					return 0;
				} else {
					return -1;
				}				
			}
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
			var ret= this.Module.ccall('emu_compute_audio_samples', 'number');
			return ret;
		},
		getMaxPlaybackPosition: function() { 
			return this.Module.ccall('emu_get_max_position', 'number');
		},
		getPlaybackPosition: function() {
			return this.Module.ccall('emu_get_current_position', 'number');
		},
		seekPlaybackPosition: function(pos) {
			var v= ScriptNodePlayer.getInstance().getVolume();
			ScriptNodePlayer.getInstance().setVolume(0);	// suppress any output while reset is in progress

			var current= this.getPlaybackPosition();
			if (pos < current) {
				// hack: for some reason backward seeking fails ('he: execution error') if "built-in"
				// file reload if used... 
				var ret = this.Module.ccall('emu_init', 'number', 
							['string', 'string'], 
							[ this._currentPath, this._currentFile]);
			}
			this.Module.ccall('emu_seek_position', 'number', ['number'], [pos]);
			ScriptNodePlayer.getInstance().setVolume(v);
		},
		
		/*
		* Creates the URL used to retrieve the song file.
		*/
		mapUrl: function(filename) {			
			// used transform the "internal filename" to a valid URL
			var uri= this.mapFs2Uri(filename);
			return uri;
		},
		mapInternalFilename: function(overridePath, basePath, filename) {
			//map URLSs to FS	
			filename= this.mapUri2Fs(filename);	// treat all songs as "from outside"

			var f= ((overridePath)?overridePath:basePath) + filename;	// this._basePath ever needed?			
			if (this.modlandMode) this.originalFile= f;			
			return f;
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
			if (this.modlandMode) {
				var tmpPathFilenameArray = new Array(2);	// do not touch original IO param			
				var p= input.lastIndexOf("/");
				if (p > 0) {
					tmpPathFilenameArray[0]= input.substring(0, p);
					tmpPathFilenameArray[1]= input.substring(p+1);
					
					var output= tmpPathFilenameArray[1].toLowerCase();	// idiots!
					if (tmpPathFilenameArray[1] != output) {	// remember the filename mapping (path is the same)
						this.modlandMap[output.replace(/^.*[\\\/]/, '')]= tmpPathFilenameArray[1].replace(/^.*[\\\/]/, '');	// needed to create FS expected by emu
						tmpPathFilenameArray[1]= output;
					}				
				} else  {
					tmpPathFilenameArray[0]= "";
					tmpPathFilenameArray[1]= input;
				}							
								
				input= tmpPathFilenameArray[0]+"/"+ tmpPathFilenameArray[1];
			}
			return input;
		},
		registerFileData: function(pathFilenameArray, data) {
			// input: the path is fixed to the basePath & the filename is actually still a path+filename
			var path= pathFilenameArray[0];
			var filename= pathFilenameArray[1];

			// MANDATORTY to move any path info still present in the "filename" to "path"
			var tmpPathFilenameArray = new Array(2);	// do not touch original IO param			
			var p= filename.lastIndexOf("/");
			if (p > 0) {
				tmpPathFilenameArray[0]= path + filename.substring(0, p);
				tmpPathFilenameArray[1]= filename.substring(p+1);
			} else  {
				tmpPathFilenameArray[0]= path;
				tmpPathFilenameArray[1]= filename;
			}

			if (this.modlandMode) {
				if (typeof this.modlandMap[tmpPathFilenameArray[1]] != 'undefined') {
					tmpPathFilenameArray[1]= this.modlandMap[tmpPathFilenameArray[1]];	// reverse map
				}
			}
			// setup data in our virtual FS (the next access should then be OK)
			return this.registerEmscriptenFileData(tmpPathFilenameArray, data);
		},
		loadMusicData: function(sampleRate, path, filename, data, options) {
			filename= path+"/"+ filename;
			var ret = this.Module.ccall('emu_init', 'number', 
								['string', 'string'], 
								[ "", filename]);	// separate path not used in emu

			if (ret == 0) {
				// PS2 always uses 48000hz / PS1 44100hz				
				var inputSampleRate = this.Module.ccall('emu_get_sample_rate', 'number');
				this.resetSampleRate(sampleRate, inputSampleRate); 
				this._currentPath= path;
				this._currentFile= filename;
			} else {
				this._currentPath= this._undefined;
				this._currentFile= this._undefined;
			}
			return ret;
		},
		evalTrackOptions: function(options) {
// is there any scenario with subsongs?
			if (typeof options.timeout != 'undefined') {
				ScriptNodePlayer.getInstance().setPlaybackTimeout(options.timeout*1000);
			}
			var id= (options && options.track) ? options.track : 0;		
			var boostVolume= (options && options.boostVolume) ? options.boostVolume : 0;		
			return this.Module.ccall('emu_set_subsong', 'number', ['number', 'number'], [id, boostVolume]);
		},				
		teardown: function() {
			this.Module.ccall('emu_teardown', 'number');	// just in case
		},
		getSongInfoMeta: function() {
			return {title: String,
					artist: String, 
					game: String, 
					year: String, 
					genre: String,
					copyright: String,
					psfby: String
					};
		},
		
		updateSongInfo: function(filename, result) {
			var numAttr= 7;
			var ret = this.Module.ccall('emu_get_track_info', 'number');

			var array = this.Module.HEAP32.subarray(ret>>2, (ret>>2)+numAttr);
			result.title= this.Module.Pointer_stringify(array[0]);
			if (!result.title.length) result.title= filename;		
			result.artist= this.Module.Pointer_stringify(array[1]);		
			result.game= this.Module.Pointer_stringify(array[2]);
			result.year= this.Module.Pointer_stringify(array[3]);
			result.genre= this.Module.Pointer_stringify(array[4]);
			result.copyright= this.Module.Pointer_stringify(array[5]);
			result.psfby= this.Module.Pointer_stringify(array[6]);
		}
	});	return $this; })();