// create separate namespace for all the Emscripten stuff.. otherwise naming clashes may occur especially when 
// optimizing using closure compiler..
window.spp_backend_state_SC68= {
	notReady: true,
	adapterCallback: function(){}	// overwritten later	
};
window.spp_backend_state_SC68["onRuntimeInitialized"] = function() {	// emscripten callback needed in case async init is used (e.g. for WASM)
	this.notReady= false;
	this.adapterCallback();
}.bind(window.spp_backend_state_SC68);

var backend_SC68 = (function(Module) {var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in e)e.hasOwnProperty(l)&&(k[l]=e[l]);e.arguments=[];e.thisProgram="./this.program";e.quit=function(a,b){throw b;};e.preRun=[];e.postRun=[];var m=!1,q=!1,r=!1,aa=!1;
if(e.ENVIRONMENT)if("WEB"===e.ENVIRONMENT)m=!0;else if("WORKER"===e.ENVIRONMENT)q=!0;else if("NODE"===e.ENVIRONMENT)r=!0;else if("SHELL"===e.ENVIRONMENT)aa=!0;else throw Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");else m="object"===typeof window,q="function"===typeof importScripts,r="object"===typeof process&&"function"===typeof require&&!m&&!q,aa=!m&&!r&&!q;
if(r){var ba,ca;e.read=function(a,b){ba||(ba=require("fs"));ca||(ca=require("path"));a=ca.normalize(a);a=ba.readFileSync(a);return b?a:a.toString()};e.readBinary=function(a){a=e.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(e.thisProgram=process.argv[1].replace(/\\/g,"/"));e.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=e);process.on("uncaughtException",function(a){if(!(a instanceof t))throw a;});process.on("unhandledRejection",
function(){process.exit(1)});e.inspect=function(){return"[Emscripten Module object]"}}else if(aa)"undefined"!=typeof read&&(e.read=function(a){return read(a)}),e.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?e.arguments=scriptArgs:"undefined"!=typeof arguments&&(e.arguments=arguments),"function"===typeof quit&&(e.quit=function(a){quit(a)});else if(m||q)e.read=function(a){var b=
new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},q&&(e.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),e.readAsync=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},"undefined"!=typeof arguments&&(e.arguments=arguments),e.setWindowTitle=
function(a){document.title=a};e.print="undefined"!==typeof console?console.log:"undefined"!==typeof print?print:null;e.printErr="undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn||e.print;e.print=e.print;e.printErr=e.printErr;for(l in k)k.hasOwnProperty(l)&&(e[l]=k[l]);k=void 0;function da(a){assert(!ea);var b=u;u=u+a+15&-16;return b}function fa(a){var b;b||(b=16);return Math.ceil(a/b)*b}var ha=0;function assert(a,b){a||v("Assertion failed: "+b)}
var na={stackSave:function(){ia()},stackRestore:function(){ja()},arrayToC:function(a){var b=ka(a.length);la.set(a,b);return b},stringToC:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=ka(c);ma(a,w,b,c)}return b}},oa={string:na.stringToC,array:na.arrayToC};
function pa(a,b){if(0===b||!a)return"";for(var c=0,d,f=0;;){d=w[a+f>>0];c|=d;if(0==d&&!b)break;f++;if(b&&f==b)break}b||(b=f);d="";if(128>c){for(;0<b;)c=String.fromCharCode.apply(String,w.subarray(a,a+Math.min(b,1024))),d=d?d+c:c,a+=1024,b-=1024;return d}return x(w,a)}var qa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function x(a,b){for(var c=b;a[c];)++c;if(16<c-b&&a.subarray&&qa)return qa.decode(a.subarray(b,c));for(c="";;){var d=a[b++];if(!d)return c;if(d&128){var f=a[b++]&63;if(192==(d&224))c+=String.fromCharCode((d&31)<<6|f);else{var g=a[b++]&63;if(224==(d&240))d=(d&15)<<12|f<<6|g;else{var h=a[b++]&63;if(240==(d&248))d=(d&7)<<18|f<<12|g<<6|h;else{var n=a[b++]&63;if(248==(d&252))d=(d&3)<<24|f<<18|g<<12|h<<6|n;else{var p=a[b++]&63;d=(d&1)<<30|f<<24|g<<18|h<<12|n<<6|p}}}65536>d?c+=String.fromCharCode(d):(d-=
65536,c+=String.fromCharCode(55296|d>>10,56320|d&1023))}}else c+=String.fromCharCode(d)}}
function ma(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);55296<=h&&57343>=h&&(h=65536+((h&1023)<<10)|a.charCodeAt(++g)&1023);if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(2097151>=h){if(c+3>=d)break;b[c++]=240|h>>18}else{if(67108863>=h){if(c+4>=d)break;b[c++]=248|h>>24}else{if(c+5>=d)break;b[c++]=252|h>>30;b[c++]=128|h>>24&63}b[c++]=128|h>>18&63}b[c++]=128|
h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0;return c-f}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");var buffer,la,w,ra,y;function sa(){e.HEAP8=la=new Int8Array(buffer);e.HEAP16=ra=new Int16Array(buffer);e.HEAP32=y=new Int32Array(buffer);e.HEAPU8=w=new Uint8Array(buffer);e.HEAPU16=new Uint16Array(buffer);e.HEAPU32=new Uint32Array(buffer);e.HEAPF32=new Float32Array(buffer);e.HEAPF64=new Float64Array(buffer)}var ta,u,ea,ua,va,wa,xa,z;ta=u=ua=va=wa=xa=z=0;ea=!1;
function ya(){v("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+A+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}var za=e.TOTAL_STACK||5242880,A=e.TOTAL_MEMORY||16777216;A<za&&e.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+A+"! (TOTAL_STACK="+za+")");
e.buffer?buffer=e.buffer:("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(e.wasmMemory=new WebAssembly.Memory({initial:A/65536,maximum:A/65536}),buffer=e.wasmMemory.buffer):buffer=new ArrayBuffer(A),e.buffer=buffer);sa();y[0]=1668509029;ra[1]=25459;if(115!==w[2]||99!==w[3])throw"Runtime error: expected the system to be little-endian!";
function B(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Mc;"number"===typeof c?void 0===b.T?e.dynCall_v(c):e.dynCall_vi(c,b.T):c(void 0===b.T?null:b.T)}}}var Aa=[],Ba=[],Ca=[],Da=[],Ea=[],Fa=!1;function Ga(){var a=e.preRun.shift();Aa.unshift(a)}var C=0,Ha=null,D=null;function Ia(){C++;e.monitorRunDependencies&&e.monitorRunDependencies(C)}
function Ja(){C--;e.monitorRunDependencies&&e.monitorRunDependencies(C);if(0==C&&(null!==Ha&&(clearInterval(Ha),Ha=null),D)){var a=D;D=null;a()}}e.preloadedImages={};e.preloadedAudios={};function Ka(a){return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}
(function(){function a(){try{if(e.wasmBinary)return new Uint8Array(e.wasmBinary);if(e.readBinary)return e.readBinary(f);throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";}catch(G){v(G)}}function b(){return e.wasmBinary||!m&&!q||"function"!==typeof fetch?new Promise(function(b){b(a())}):fetch(f,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+f+
"'";return a.arrayBuffer()}).catch(function(){return a()})}function c(a){function c(a){n=a.exports;if(n.memory){a=n.memory;var b=e.buffer;a.byteLength<b.byteLength&&e.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");b=new Int8Array(b);(new Int8Array(a)).set(b);e.buffer=buffer=a;sa()}e.asm=n;e.usingWasm=!0;Ja()}function d(a){c(a.instance)}function g(a){b().then(function(a){return WebAssembly.instantiate(a,h)}).then(a).catch(function(a){e.printErr("failed to asynchronously prepare wasm: "+
a);v(a)})}if("object"!==typeof WebAssembly)return e.printErr("no native wasm support detected"),!1;if(!(e.wasmMemory instanceof WebAssembly.Memory))return e.printErr("no native wasm Memory in use"),!1;a.memory=e.wasmMemory;h.global={NaN:NaN,Infinity:Infinity};h["global.Math"]=Math;h.env=a;Ia();if(e.instantiateWasm)try{return e.instantiateWasm(h,c)}catch(V){return e.printErr("Module.instantiateWasm callback failed with error: "+V),!1}e.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||
Ka(f)||"function"!==typeof fetch?g(d):WebAssembly.instantiateStreaming(fetch(f,{credentials:"same-origin"}),h).then(d).catch(function(a){e.printErr("wasm streaming compile failed: "+a);e.printErr("falling back to ArrayBuffer instantiation");g(d)});return{}}var d="sc68.wast",f="sc68.wasm",g="sc68.temp.asm.js";"function"===typeof e.locateFile&&(Ka(d)||(d=e.locateFile(d)),Ka(f)||(f=e.locateFile(f)),Ka(g)||(g=e.locateFile(g)));var h={global:null,env:null,asm2wasm:{"f64-rem":function(a,b){return a%b},
"debugger":function(){debugger}},parent:e},n=null;e.asmPreload=e.asm;var p=e.reallocBuffer;e.reallocBuffer=function(a){if("asmjs"===H)var b=p(a);else a:{var c=e.usingWasm?65536:16777216;0<a%c&&(a+=c-a%c);c=e.buffer.byteLength;if(e.usingWasm)try{b=-1!==e.wasmMemory.grow((a-c)/65536)?e.buffer=e.wasmMemory.buffer:null;break a}catch(Tb){b=null;break a}b=void 0}return b};var H="";e.asm=function(a,b){if(!b.table){a=e.wasmTableSize;void 0===a&&(a=1024);var d=e.wasmMaxTableSize;b.table="object"===typeof WebAssembly&&
"function"===typeof WebAssembly.Table?void 0!==d?new WebAssembly.Table({initial:a,maximum:d,element:"anyfunc"}):new WebAssembly.Table({initial:a,element:"anyfunc"}):Array(a);e.wasmTable=b.table}b.memoryBase||(b.memoryBase=e.STATIC_BASE);b.tableBase||(b.tableBase=0);(b=c(b))||v("no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods");return b}})();ta=1024;u=ta+204144;Ba.push();
e.STATIC_BASE=ta;e.STATIC_BUMP=204144;u+=16;
var E={B:1,s:2,wc:3,rb:4,v:5,ea:6,Ka:7,Pb:8,N:9,Ya:10,$:11,Gc:11,ua:12,M:13,kb:14,ac:15,O:16,aa:17,Hc:18,R:19,ba:20,I:21,l:22,Kb:23,ta:24,fc:25,Dc:26,lb:27,Xb:28,S:29,tc:30,Db:31,mc:32,hb:33,qc:34,Tb:42,ob:43,Za:44,ub:45,vb:46,wb:47,Cb:48,Ec:49,Nb:50,tb:51,eb:35,Qb:37,Qa:52,Ta:53,Ic:54,Lb:55,Ua:56,Va:57,fb:35,Wa:59,Zb:60,Ob:61,Ac:62,Yb:63,Ub:64,Vb:65,sc:66,Rb:67,Na:68,xc:69,$a:70,nc:71,Fb:72,ib:73,Sa:74,hc:76,Ra:77,rc:78,xb:79,yb:80,Bb:81,Ab:82,zb:83,$b:38,da:39,Gb:36,P:40,ic:95,lc:96,cb:104,Mb:105,
Oa:97,pc:91,dc:88,Wb:92,uc:108,bb:111,La:98,ab:103,Jb:101,Hb:100,Bc:110,mb:112,nb:113,qb:115,Pa:114,gb:89,Eb:90,oc:93,vc:94,Ma:99,Ib:102,sb:106,bc:107,Cc:109,Fc:87,jb:122,yc:116,ec:95,Sb:123,pb:84,jc:75,Xa:125,cc:131,kc:130,zc:86},La={0:"Success",1:"Not super-user",2:"No such file or directory",3:"No such process",4:"Interrupted system call",5:"I/O error",6:"No such device or address",7:"Arg list too long",8:"Exec format error",9:"Bad file number",10:"No children",11:"No more processes",12:"Not enough core",
13:"Permission denied",14:"Bad address",15:"Block device required",16:"Mount device busy",17:"File exists",18:"Cross-device link",19:"No such device",20:"Not a directory",21:"Is a directory",22:"Invalid argument",23:"Too many open files in system",24:"Too many open files",25:"Not a typewriter",26:"Text file busy",27:"File too large",28:"No space left on device",29:"Illegal seek",30:"Read only file system",31:"Too many links",32:"Broken pipe",33:"Math arg out of domain of func",34:"Math result not representable",
35:"File locking deadlock error",36:"File or path name too long",37:"No record locks available",38:"Function not implemented",39:"Directory not empty",40:"Too many symbolic links",42:"No message of desired type",43:"Identifier removed",44:"Channel number out of range",45:"Level 2 not synchronized",46:"Level 3 halted",47:"Level 3 reset",48:"Link number out of range",49:"Protocol driver not attached",50:"No CSI structure available",51:"Level 2 halted",52:"Invalid exchange",53:"Invalid request descriptor",
54:"Exchange full",55:"No anode",56:"Invalid request code",57:"Invalid slot",59:"Bad font file fmt",60:"Device not a stream",61:"No data (for no delay io)",62:"Timer expired",63:"Out of streams resources",64:"Machine is not on the network",65:"Package not installed",66:"The object is remote",67:"The link has been severed",68:"Advertise error",69:"Srmount error",70:"Communication error on send",71:"Protocol error",72:"Multihop attempted",73:"Cross mount point (not really error)",74:"Trying to read unreadable message",
75:"Value too large for defined data type",76:"Given log. name not unique",77:"f.d. invalid for this operation",78:"Remote address changed",79:"Can   access a needed shared lib",80:"Accessing a corrupted shared lib",81:".lib section in a.out corrupted",82:"Attempting to link in too many libs",83:"Attempting to exec a shared library",84:"Illegal byte sequence",86:"Streams pipe error",87:"Too many users",88:"Socket operation on non-socket",89:"Destination address required",90:"Message too long",91:"Protocol wrong type for socket",
92:"Protocol not available",93:"Unknown protocol",94:"Socket type not supported",95:"Not supported",96:"Protocol family not supported",97:"Address family not supported by protocol family",98:"Address already in use",99:"Address not available",100:"Network interface is not configured",101:"Network is unreachable",102:"Connection reset by network",103:"Connection aborted",104:"Connection reset by peer",105:"No buffer space available",106:"Socket is already connected",107:"Socket is not connected",108:"Can't send after socket shutdown",
109:"Too many references",110:"Connection timed out",111:"Connection refused",112:"Host is down",113:"Host is unreachable",114:"Socket already connected",115:"Connection already in progress",116:"Stale file handle",122:"Quota exceeded",123:"No medium (in tape drive)",125:"Operation canceled",130:"Previous owner died",131:"State not recoverable"};function Ma(a){e.___errno_location&&(y[e.___errno_location()>>2]=a);return a}
function Na(a,b){for(var c=0,d=a.length-1;0<=d;d--){var f=a[d];"."===f?a.splice(d,1):".."===f?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(b)for(;c;c--)a.unshift("..");return a}function Oa(a){var b="/"===a.charAt(0),c="/"===a.substr(-1);(a=Na(a.split("/").filter(function(a){return!!a}),!b).join("/"))||b||(a=".");a&&c&&(a+="/");return(b?"/":"")+a}
function Pa(a){var b=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);a=b[0];b=b[1];if(!a&&!b)return".";b&&(b=b.substr(0,b.length-1));return a+b}function Qa(a){if("/"===a)return"/";var b=a.lastIndexOf("/");return-1===b?a:a.substr(b+1)}function Ra(){var a=Array.prototype.slice.call(arguments,0);return Oa(a.join("/"))}function F(a,b){return Oa(a+"/"+b)}
function I(){for(var a="",b=!1,c=arguments.length-1;-1<=c&&!b;c--){b=0<=c?arguments[c]:"/";if("string"!==typeof b)throw new TypeError("Arguments to path.resolve must be strings");if(!b)return"";a=b+"/"+a;b="/"===b.charAt(0)}a=Na(a.split("/").filter(function(a){return!!a}),!b).join("/");return(b?"/":"")+a||"."}var Sa=[];function Ta(a,b){Sa[a]={input:[],output:[],D:b};Ua(a,Va)}
var Va={open:function(a){var b=Sa[a.node.rdev];if(!b)throw new J(E.R);a.tty=b;a.seekable=!1},close:function(a){a.tty.D.flush(a.tty)},flush:function(a){a.tty.D.flush(a.tty)},read:function(a,b,c,d){if(!a.tty||!a.tty.D.na)throw new J(E.ea);for(var f=0,g=0;g<d;g++){try{var h=a.tty.D.na(a.tty)}catch(n){throw new J(E.v);}if(void 0===h&&0===f)throw new J(E.$);if(null===h||void 0===h)break;f++;b[c+g]=h}f&&(a.node.timestamp=Date.now());return f},write:function(a,b,c,d){if(!a.tty||!a.tty.D.Y)throw new J(E.ea);
for(var f=0;f<d;f++)try{a.tty.D.Y(a.tty,b[c+f])}catch(g){throw new J(E.v);}d&&(a.node.timestamp=Date.now());return f}},Xa={na:function(a){if(!a.input.length){var b=null;if(r){var c=new Buffer(256),d=0,f=process.stdin.fd;if("win32"!=process.platform){var g=!1;try{f=fs.openSync("/dev/stdin","r"),g=!0}catch(h){}}try{d=fs.readSync(f,c,0,256,null)}catch(h){if(-1!=h.toString().indexOf("EOF"))d=0;else throw h;}g&&fs.closeSync(f);0<d?b=c.slice(0,d).toString("utf-8"):b=null}else"undefined"!=typeof window&&
"function"==typeof window.prompt?(b=window.prompt("Input: "),null!==b&&(b+="\n")):"function"==typeof readline&&(b=readline(),null!==b&&(b+="\n"));if(!b)return null;a.input=Wa(b)}return a.input.shift()},Y:function(a,b){null===b||10===b?(e.print(x(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&0<a.output.length&&(e.print(x(a.output,0)),a.output=[])}},Ya={Y:function(a,b){null===b||10===b?(e.printErr(x(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&
0<a.output.length&&(e.printErr(x(a.output,0)),a.output=[])}},K={m:null,i:function(){return K.createNode(null,"/",16895,0)},createNode:function(a,b,c,d){if(24576===(c&61440)||4096===(c&61440))throw new J(E.B);K.m||(K.m={dir:{node:{o:K.c.o,h:K.c.h,lookup:K.c.lookup,F:K.c.F,rename:K.c.rename,unlink:K.c.unlink,rmdir:K.c.rmdir,readdir:K.c.readdir,symlink:K.c.symlink},stream:{u:K.f.u}},file:{node:{o:K.c.o,h:K.c.h},stream:{u:K.f.u,read:K.f.read,write:K.f.write,fa:K.f.fa,qa:K.f.qa,sa:K.f.sa}},link:{node:{o:K.c.o,
h:K.c.h,readlink:K.c.readlink},stream:{}},ia:{node:{o:K.c.o,h:K.c.h},stream:Za}});c=$a(a,b,c,d);L(c.mode)?(c.c=K.m.dir.node,c.f=K.m.dir.stream,c.b={}):32768===(c.mode&61440)?(c.c=K.m.file.node,c.f=K.m.file.stream,c.g=0,c.b=null):40960===(c.mode&61440)?(c.c=K.m.link.node,c.f=K.m.link.stream):8192===(c.mode&61440)&&(c.c=K.m.ia.node,c.f=K.m.ia.stream);c.timestamp=Date.now();a&&(a.b[b]=c);return c},Ba:function(a){if(a.b&&a.b.subarray){for(var b=[],c=0;c<a.g;++c)b.push(a.b[c]);return b}return a.b},Nc:function(a){return a.b?
a.b.subarray?a.b.subarray(0,a.g):new Uint8Array(a.b):new Uint8Array},ja:function(a,b){a.b&&a.b.subarray&&b>a.b.length&&(a.b=K.Ba(a),a.g=a.b.length);if(!a.b||a.b.subarray){var c=a.b?a.b.length:0;c>=b||(b=Math.max(b,c*(1048576>c?2:1.125)|0),0!=c&&(b=Math.max(b,256)),c=a.b,a.b=new Uint8Array(b),0<a.g&&a.b.set(c.subarray(0,a.g),0))}else for(!a.b&&0<b&&(a.b=[]);a.b.length<b;)a.b.push(0)},Fa:function(a,b){if(a.g!=b)if(0==b)a.b=null,a.g=0;else{if(!a.b||a.b.subarray){var c=a.b;a.b=new Uint8Array(new ArrayBuffer(b));
c&&a.b.set(c.subarray(0,Math.min(b,a.g)))}else if(a.b||(a.b=[]),a.b.length>b)a.b.length=b;else for(;a.b.length<b;)a.b.push(0);a.g=b}},c:{o:function(a){var b={};b.dev=8192===(a.mode&61440)?a.id:1;b.ino=a.id;b.mode=a.mode;b.nlink=1;b.uid=0;b.gid=0;b.rdev=a.rdev;L(a.mode)?b.size=4096:32768===(a.mode&61440)?b.size=a.g:40960===(a.mode&61440)?b.size=a.link.length:b.size=0;b.atime=new Date(a.timestamp);b.mtime=new Date(a.timestamp);b.ctime=new Date(a.timestamp);b.A=4096;b.blocks=Math.ceil(b.size/b.A);return b},
h:function(a,b){void 0!==b.mode&&(a.mode=b.mode);void 0!==b.timestamp&&(a.timestamp=b.timestamp);void 0!==b.size&&K.Fa(a,b.size)},lookup:function(){throw ab[E.s];},F:function(a,b,c,d){return K.createNode(a,b,c,d)},rename:function(a,b,c){if(L(a.mode)){try{var d=M(b,c)}catch(g){}if(d)for(var f in d.b)throw new J(E.da);}delete a.parent.b[a.name];a.name=c;b.b[c]=a;a.parent=b},unlink:function(a,b){delete a.b[b]},rmdir:function(a,b){var c=M(a,b),d;for(d in c.b)throw new J(E.da);delete a.b[b]},readdir:function(a){var b=
[".",".."],c;for(c in a.b)a.b.hasOwnProperty(c)&&b.push(c);return b},symlink:function(a,b,c){a=K.createNode(a,b,41471,0);a.link=c;return a},readlink:function(a){if(40960!==(a.mode&61440))throw new J(E.l);return a.link}},f:{read:function(a,b,c,d,f){var g=a.node.b;if(f>=a.node.g)return 0;a=Math.min(a.node.g-f,d);assert(0<=a);if(8<a&&g.subarray)b.set(g.subarray(f,f+a),c);else for(d=0;d<a;d++)b[c+d]=g[f+d];return a},write:function(a,b,c,d,f,g){if(!d)return 0;a=a.node;a.timestamp=Date.now();if(b.subarray&&
(!a.b||a.b.subarray)){if(g)return a.b=b.subarray(c,c+d),a.g=d;if(0===a.g&&0===f)return a.b=new Uint8Array(b.subarray(c,c+d)),a.g=d;if(f+d<=a.g)return a.b.set(b.subarray(c,c+d),f),d}K.ja(a,f+d);if(a.b.subarray&&b.subarray)a.b.set(b.subarray(c,c+d),f);else for(g=0;g<d;g++)a.b[f+g]=b[c+g];a.g=Math.max(a.g,f+d);return d},u:function(a,b,c){1===c?b+=a.position:2===c&&32768===(a.node.mode&61440)&&(b+=a.node.g);if(0>b)throw new J(E.l);return b},fa:function(a,b,c){K.ja(a.node,b+c);a.node.g=Math.max(a.node.g,
b+c)},qa:function(a,b,c,d,f,g,h){if(32768!==(a.node.mode&61440))throw new J(E.R);c=a.node.b;if(h&2||c.buffer!==b&&c.buffer!==b.buffer){if(0<f||f+d<a.node.g)c.subarray?c=c.subarray(f,f+d):c=Array.prototype.slice.call(c,f,f+d);a=!0;d=bb(d);if(!d)throw new J(E.ua);b.set(c,d)}else a=!1,d=c.byteOffset;return{Pc:d,Jc:a}},sa:function(a,b,c,d,f){if(32768!==(a.node.mode&61440))throw new J(E.R);if(f&2)return 0;K.f.write(a,b,0,d,c,!1);return 0}}},N={L:!1,Ia:function(){N.L=!!process.platform.match(/^win/);var a=
process.binding("constants");a.fs&&(a=a.fs);N.ka={1024:a.O_APPEND,64:a.O_CREAT,128:a.O_EXCL,0:a.O_RDONLY,2:a.O_RDWR,4096:a.O_SYNC,512:a.O_TRUNC,1:a.O_WRONLY}},ga:function(a){return Buffer.Lc?Buffer.from(a):new Buffer(a)},i:function(a){assert(r);return N.createNode(null,"/",N.ma(a.X.root),0)},createNode:function(a,b,c){if(!L(c)&&32768!==(c&61440)&&40960!==(c&61440))throw new J(E.l);a=$a(a,b,c);a.c=N.c;a.f=N.f;return a},ma:function(a){try{var b=fs.lstatSync(a);N.L&&(b.mode=b.mode|(b.mode&292)>>2)}catch(c){if(!c.code)throw c;
throw new J(E[c.code]);}return b.mode},j:function(a){for(var b=[];a.parent!==a;)b.push(a.name),a=a.parent;b.push(a.i.X.root);b.reverse();return Ra.apply(null,b)},Aa:function(a){a&=-2656257;var b=0,c;for(c in N.ka)a&c&&(b|=N.ka[c],a^=c);if(a)throw new J(E.l);return b},c:{o:function(a){a=N.j(a);try{var b=fs.lstatSync(a)}catch(c){if(!c.code)throw c;throw new J(E[c.code]);}N.L&&!b.A&&(b.A=4096);N.L&&!b.blocks&&(b.blocks=(b.size+b.A-1)/b.A|0);return{dev:b.dev,ino:b.ino,mode:b.mode,nlink:b.nlink,uid:b.uid,
gid:b.gid,rdev:b.rdev,size:b.size,atime:b.atime,mtime:b.mtime,ctime:b.ctime,A:b.A,blocks:b.blocks}},h:function(a,b){var c=N.j(a);try{void 0!==b.mode&&(fs.chmodSync(c,b.mode),a.mode=b.mode),void 0!==b.size&&fs.truncateSync(c,b.size)}catch(d){if(!d.code)throw d;throw new J(E[d.code]);}},lookup:function(a,b){var c=F(N.j(a),b);c=N.ma(c);return N.createNode(a,b,c)},F:function(a,b,c,d){a=N.createNode(a,b,c,d);b=N.j(a);try{L(a.mode)?fs.mkdirSync(b,a.mode):fs.writeFileSync(b,"",{mode:a.mode})}catch(f){if(!f.code)throw f;
throw new J(E[f.code]);}return a},rename:function(a,b,c){a=N.j(a);b=F(N.j(b),c);try{fs.renameSync(a,b)}catch(d){if(!d.code)throw d;throw new J(E[d.code]);}},unlink:function(a,b){a=F(N.j(a),b);try{fs.unlinkSync(a)}catch(c){if(!c.code)throw c;throw new J(E[c.code]);}},rmdir:function(a,b){a=F(N.j(a),b);try{fs.rmdirSync(a)}catch(c){if(!c.code)throw c;throw new J(E[c.code]);}},readdir:function(a){a=N.j(a);try{return fs.readdirSync(a)}catch(b){if(!b.code)throw b;throw new J(E[b.code]);}},symlink:function(a,
b,c){a=F(N.j(a),b);try{fs.symlinkSync(c,a)}catch(d){if(!d.code)throw d;throw new J(E[d.code]);}},readlink:function(a){var b=N.j(a);try{return b=fs.readlinkSync(b),b=cb.relative(cb.resolve(a.i.X.root),b)}catch(c){if(!c.code)throw c;throw new J(E[c.code]);}}},f:{open:function(a){var b=N.j(a.node);try{32768===(a.node.mode&61440)&&(a.H=fs.openSync(b,N.Aa(a.flags)))}catch(c){if(!c.code)throw c;throw new J(E[c.code]);}},close:function(a){try{32768===(a.node.mode&61440)&&a.H&&fs.closeSync(a.H)}catch(b){if(!b.code)throw b;
throw new J(E[b.code]);}},read:function(a,b,c,d,f){if(0===d)return 0;try{return fs.readSync(a.H,N.ga(b.buffer),c,d,f)}catch(g){throw new J(E[g.code]);}},write:function(a,b,c,d,f){try{return fs.writeSync(a.H,N.ga(b.buffer),c,d,f)}catch(g){throw new J(E[g.code]);}},u:function(a,b,c){if(1===c)b+=a.position;else if(2===c&&32768===(a.node.mode&61440))try{b+=fs.fstatSync(a.H).size}catch(d){throw new J(E[d.code]);}if(0>b)throw new J(E.l);return b}}};u+=16;u+=16;u+=16;
var eb=null,fb={},O=[],gb=1,P=null,hb=!0,Q={},J=null,ab={};
function R(a,b){a=I("/",a);b=b||{};if(!a)return{path:"",node:null};var c={la:!0,Z:0},d;for(d in c)void 0===b[d]&&(b[d]=c[d]);if(8<b.Z)throw new J(E.P);a=Na(a.split("/").filter(function(a){return!!a}),!1);var f=eb;c="/";for(d=0;d<a.length;d++){var g=d===a.length-1;if(g&&b.parent)break;f=M(f,a[d]);c=F(c,a[d]);f.G&&(!g||g&&b.la)&&(f=f.G.root);if(!g||b.U)for(g=0;40960===(f.mode&61440);)if(f=ib(c),c=I(Pa(c),f),f=R(c,{Z:b.Z}).node,40<g++)throw new J(E.P);}return{path:c,node:f}}
function S(a){for(var b;;){if(a===a.parent)return a=a.i.ra,b?"/"!==a[a.length-1]?a+"/"+b:a+b:a;b=b?a.name+"/"+b:a.name;a=a.parent}}function jb(a,b){for(var c=0,d=0;d<b.length;d++)c=(c<<5)-c+b.charCodeAt(d)|0;return(a+c>>>0)%P.length}function kb(a){var b=jb(a.parent.id,a.name);a.C=P[b];P[b]=a}function M(a,b){var c;if(c=(c=T(a,"x"))?c:a.c.lookup?0:E.M)throw new J(c,a);for(c=P[jb(a.id,b)];c;c=c.C){var d=c.name;if(c.parent.id===a.id&&d===b)return c}return a.c.lookup(a,b)}
function $a(a,b,c,d){U||(U=function(a,b,c,d){a||(a=this);this.parent=a;this.i=a.i;this.G=null;this.id=gb++;this.name=b;this.mode=c;this.c={};this.f={};this.rdev=d},U.prototype={},Object.defineProperties(U.prototype,{read:{get:function(){return 365===(this.mode&365)},set:function(a){a?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146===(this.mode&146)},set:function(a){a?this.mode|=146:this.mode&=-147}},Da:{get:function(){return L(this.mode)}},Ca:{get:function(){return 8192===(this.mode&
61440)}}}));a=new U(a,b,c,d);kb(a);return a}function L(a){return 16384===(a&61440)}var lb={r:0,rs:1052672,"r+":2,w:577,wx:705,xw:705,"w+":578,"wx+":706,"xw+":706,a:1089,ax:1217,xa:1217,"a+":1090,"ax+":1218,"xa+":1218};function mb(a){var b=["r","w","rw"][a&3];a&512&&(b+="w");return b}function T(a,b){if(hb)return 0;if(-1===b.indexOf("r")||a.mode&292){if(-1!==b.indexOf("w")&&!(a.mode&146)||-1!==b.indexOf("x")&&!(a.mode&73))return E.M}else return E.M;return 0}
function nb(a,b){try{return M(a,b),E.aa}catch(c){}return T(a,"wx")}function ob(){var a=4096;for(var b=0;b<=a;b++)if(!O[b])return b;throw new J(E.ta);}function pb(a){W||(W=function(){},W.prototype={},Object.defineProperties(W.prototype,{object:{get:function(){return this.node},set:function(a){this.node=a}}}));var b=new W,c;for(c in a)b[c]=a[c];a=b;b=ob();a.fd=b;return O[b]=a}var Za={open:function(a){a.f=fb[a.node.rdev].f;a.f.open&&a.f.open(a)},u:function(){throw new J(E.S);}};
function Ua(a,b){fb[a]={f:b}}function qb(a,b){var c="/"===b,d=!b;if(c&&eb)throw new J(E.O);if(!c&&!d){var f=R(b,{la:!1});b=f.path;f=f.node;if(f.G)throw new J(E.O);if(!L(f.mode))throw new J(E.ba);}b={type:a,X:{},ra:b,Ea:[]};a=a.i(b);a.i=b;b.root=a;c?eb=a:f&&(f.G=b,f.i&&f.i.Ea.push(b))}function rb(a,b,c){var d=R(a,{parent:!0}).node;a=Qa(a);if(!a||"."===a||".."===a)throw new J(E.l);var f=nb(d,a);if(f)throw new J(f);if(!d.c.F)throw new J(E.B);return d.c.F(d,a,b,c)}
function X(a,b){return rb(a,(void 0!==b?b:511)&1023|16384,0)}function sb(a,b,c){"undefined"===typeof c&&(c=b,b=438);return rb(a,b|8192,c)}function tb(a,b){if(!I(a))throw new J(E.s);var c=R(b,{parent:!0}).node;if(!c)throw new J(E.s);b=Qa(b);var d=nb(c,b);if(d)throw new J(d);if(!c.c.symlink)throw new J(E.B);return c.c.symlink(c,b,a)}
function ub(a){var b=R(a,{parent:!0}).node,c=Qa(a),d=M(b,c);a:{try{var f=M(b,c)}catch(h){f=h.K;break a}var g=T(b,"wx");f=g?g:L(f.mode)?E.I:0}if(f)throw new J(f);if(!b.c.unlink)throw new J(E.B);if(d.G)throw new J(E.O);try{Q.willDeletePath&&Q.willDeletePath(a)}catch(h){console.log("FS.trackingDelegate['willDeletePath']('"+a+"') threw an exception: "+h.message)}b.c.unlink(b,c);b=jb(d.parent.id,d.name);if(P[b]===d)P[b]=d.C;else for(b=P[b];b;){if(b.C===d){b.C=d.C;break}b=b.C}try{if(Q.onDeletePath)Q.onDeletePath(a)}catch(h){console.log("FS.trackingDelegate['onDeletePath']('"+
a+"') threw an exception: "+h.message)}}function ib(a){a=R(a).node;if(!a)throw new J(E.s);if(!a.c.readlink)throw new J(E.l);return I(S(a.parent),a.c.readlink(a))}function vb(a,b){var c;"string"===typeof a?c=R(a,{U:!0}).node:c=a;if(!c.c.h)throw new J(E.B);c.c.h(c,{mode:b&4095|c.mode&-4096,timestamp:Date.now()})}
function wb(a,b){if(""===a)throw new J(E.s);if("string"===typeof b){var c=lb[b];if("undefined"===typeof c)throw Error("Unknown file open mode: "+b);b=c}var d=b&64?("undefined"===typeof d?438:d)&4095|32768:0;if("object"===typeof a)var f=a;else{a=Oa(a);try{f=R(a,{U:!(b&131072)}).node}catch(h){}}c=!1;if(b&64)if(f){if(b&128)throw new J(E.aa);}else f=rb(a,d,0),c=!0;if(!f)throw new J(E.s);8192===(f.mode&61440)&&(b&=-513);if(b&65536&&!L(f.mode))throw new J(E.ba);if(!c&&(d=f?40960===(f.mode&61440)?E.P:L(f.mode)&&
("r"!==mb(b)||b&512)?E.I:T(f,mb(b)):E.s))throw new J(d);if(b&512){d=f;var g;"string"===typeof d?g=R(d,{U:!0}).node:g=d;if(!g.c.h)throw new J(E.B);if(L(g.mode))throw new J(E.I);if(32768!==(g.mode&61440))throw new J(E.l);if(d=T(g,"w"))throw new J(d);g.c.h(g,{size:0,timestamp:Date.now()})}b&=-641;f=pb({node:f,path:S(f),flags:b,seekable:!0,position:0,f:f.f,Ja:[],error:!1});f.f.open&&f.f.open(f);!e.logReadFiles||b&1||(xb||(xb={}),a in xb||(xb[a]=1,e.printErr("read file: "+a)));try{Q.onOpenFile&&(g=0,1!==
(b&2097155)&&(g|=1),0!==(b&2097155)&&(g|=2),Q.onOpenFile(a,g))}catch(h){console.log("FS.trackingDelegate['onOpenFile']('"+a+"', flags) threw an exception: "+h.message)}return f}function yb(a){a.V&&(a.V=null);try{a.f.close&&a.f.close(a)}catch(b){throw b;}finally{O[a.fd]=null}}function zb(a,b,c){if(!a.seekable||!a.f.u)throw new J(E.S);a.position=a.f.u(a,b,c);a.Ja=[];return a.position}
function Ab(a,b,c,d,f,g){if(0>d||0>f)throw new J(E.l);if(0===(a.flags&2097155))throw new J(E.N);if(L(a.node.mode))throw new J(E.I);if(!a.f.write)throw new J(E.l);a.flags&1024&&(f=zb(a,0,2));var h=!0;if("undefined"===typeof f)f=a.position,h=!1;else if(!a.seekable)throw new J(E.S);b=a.f.write(a,b,c,d,f,g);h||(a.position+=b);try{if(a.path&&Q.onWriteToFile)Q.onWriteToFile(a.path)}catch(n){console.log("FS.trackingDelegate['onWriteToFile']('"+path+"') threw an exception: "+n.message)}return b}
function Bb(){J||(J=function(a,b){this.node=b;this.Ha=function(a){this.K=a;for(var b in E)if(E[b]===a){this.code=b;break}};this.Ha(a);this.message=La[a];this.stack&&Object.defineProperty(this,"stack",{value:Error().stack,writable:!0})},J.prototype=Error(),J.prototype.constructor=J,[E.s].forEach(function(a){ab[a]=new J(a);ab[a].stack="<generic error, no stack>"}))}var Cb;function Db(a,b){var c=0;a&&(c|=365);b&&(c|=146);return c}
function Eb(a,b,c,d){a=F("string"===typeof a?a:S(a),b);return X(a,Db(c,d))}function Fb(a,b){a="string"===typeof a?a:S(a);for(b=b.split("/").reverse();b.length;){var c=b.pop();if(c){var d=F(a,c);try{X(d)}catch(f){}a=d}}return d}function Gb(a,b,c,d){a=F("string"===typeof a?a:S(a),b);c=Db(c,d);return rb(a,(void 0!==c?c:438)&4095|32768,0)}
function Hb(a,b,c,d,f,g){a=b?F("string"===typeof a?a:S(a),b):a;d=Db(d,f);f=rb(a,(void 0!==d?d:438)&4095|32768,0);if(c){if("string"===typeof c){a=Array(c.length);b=0;for(var h=c.length;b<h;++b)a[b]=c.charCodeAt(b);c=a}vb(f,d|146);a=wb(f,"w");Ab(a,c,0,c.length,0,g);yb(a);vb(f,d)}return f}
function Y(a,b,c,d){a=F("string"===typeof a?a:S(a),b);b=Db(!!c,!!d);Y.pa||(Y.pa=64);var f=Y.pa++<<8|0;Ua(f,{open:function(a){a.seekable=!1},close:function(){d&&d.buffer&&d.buffer.length&&d(10)},read:function(a,b,d,f){for(var g=0,h=0;h<f;h++){try{var n=c()}catch(Sb){throw new J(E.v);}if(void 0===n&&0===g)throw new J(E.$);if(null===n||void 0===n)break;g++;b[d+h]=n}g&&(a.node.timestamp=Date.now());return g},write:function(a,b,c,f){for(var g=0;g<f;g++)try{d(b[c+g])}catch(G){throw new J(E.v);}f&&(a.node.timestamp=
Date.now());return g}});return sb(a,b,f)}function Ib(a,b,c){a=F("string"===typeof a?a:S(a),b);return tb(c,a)}
function Jb(a){if(a.Ca||a.Da||a.link||a.b)return!0;var b=!0;if("undefined"!==typeof XMLHttpRequest)throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(e.read)try{a.b=Wa(e.read(a.url)),a.g=a.b.length}catch(c){b=!1}else throw Error("Cannot load without read() or XMLHttpRequest.");b||Ma(E.v);return b}
function Kb(a,b,c,d,f){function g(){this.W=!1;this.J=[]}g.prototype.get=function(a){if(!(a>this.length-1||0>a)){var b=a%this.chunkSize;return this.oa(a/this.chunkSize|0)[b]}};g.prototype.Ga=function(a){this.oa=a};g.prototype.ha=function(){var a=new XMLHttpRequest;a.open("HEAD",c,!1);a.send(null);if(!(200<=a.status&&300>a.status||304===a.status))throw Error("Couldn't load "+c+". Status: "+a.status);var b=Number(a.getResponseHeader("Content-length")),d,f=(d=a.getResponseHeader("Accept-Ranges"))&&"bytes"===
d;a=(d=a.getResponseHeader("Content-Encoding"))&&"gzip"===d;var g=1048576;f||(g=b);var h=this;h.Ga(function(a){var d=a*g,f=(a+1)*g-1;f=Math.min(f,b-1);if("undefined"===typeof h.J[a]){var n=h.J;if(d>f)throw Error("invalid range ("+d+", "+f+") or no bytes requested!");if(f>b-1)throw Error("only "+b+" bytes available! programmer error!");var p=new XMLHttpRequest;p.open("GET",c,!1);b!==g&&p.setRequestHeader("Range","bytes="+d+"-"+f);"undefined"!=typeof Uint8Array&&(p.responseType="arraybuffer");p.overrideMimeType&&
p.overrideMimeType("text/plain; charset=x-user-defined");p.send(null);if(!(200<=p.status&&300>p.status||304===p.status))throw Error("Couldn't load "+c+". Status: "+p.status);d=void 0!==p.response?new Uint8Array(p.response||[]):Wa(p.responseText||"");n[a]=d}if("undefined"===typeof h.J[a])throw Error("doXHR failed!");return h.J[a]});if(a||!b)g=b=1,g=b=this.oa(0).length,console.log("LazyFiles on gzip forces download of the whole file when length is accessed");this.wa=b;this.va=g;this.W=!0};if("undefined"!==
typeof XMLHttpRequest){if(!q)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var h=new g;Object.defineProperties(h,{length:{get:function(){this.W||this.ha();return this.wa}},chunkSize:{get:function(){this.W||this.ha();return this.va}}});var n=void 0}else n=c,h=void 0;var p=Gb(a,b,d,f);h?p.b=h:n&&(p.b=null,p.url=n);Object.defineProperties(p,{g:{get:function(){return this.b.length}}});var H={};Object.keys(p.f).forEach(function(a){var b=
p.f[a];H[a]=function(){if(!Jb(p))throw new J(E.v);return b.apply(null,arguments)}});H.read=function(a,b,c,d,f){if(!Jb(p))throw new J(E.v);a=a.node.b;if(f>=a.length)return 0;d=Math.min(a.length-f,d);assert(0<=d);if(a.slice)for(var g=0;g<d;g++)b[c+g]=a[f+g];else for(g=0;g<d;g++)b[c+g]=a.get(f+g);return d};p.f=H;return p}
function Lb(a,b,c,d,f,g,h,n,p,H){function G(c){function G(c){H&&H();n||Hb(a,b,c,d,f,p);g&&g();Ja()}var V=!1;e.preloadPlugins.forEach(function(a){!V&&a.canHandle(db)&&(a.handle(c,db,G,function(){h&&h();Ja()}),V=!0)});V||G(c)}Browser.Oc();var db=b?I(F(a,b)):a;Ia();"string"==typeof c?Browser.Kc(c,function(a){G(a)},h):G(c)}var FS={},U,W,xb,Mb=0;function Z(){Mb+=4;return y[Mb-4>>2]}function Nb(){var a=O[Z()];if(!a)throw new J(E.N);return a}Bb();P=Array(4096);qb(K,"/");X("/tmp");X("/home");X("/home/web_user");
(function(){X("/dev");Ua(259,{read:function(){return 0},write:function(a,b,f,g){return g}});sb("/dev/null",259);Ta(1280,Xa);Ta(1536,Ya);sb("/dev/tty",1280);sb("/dev/tty1",1536);if("undefined"!==typeof crypto){var a=new Uint8Array(1);var b=function(){crypto.getRandomValues(a);return a[0]}}else b=r?function(){return require("crypto").randomBytes(1)[0]}:function(){return 256*Math.random()|0};Y("/dev","random",b);Y("/dev","urandom",b);X("/dev/shm");X("/dev/shm/tmp")})();X("/proc");X("/proc/self");X("/proc/self/fd");
qb({i:function(){var a=$a("/proc/self","fd",16895,73);a.c={lookup:function(a,c){var b=O[+c];if(!b)throw new J(E.N);a={parent:null,i:{ra:"fake"},c:{readlink:function(){return b.path}}};return a.parent=a}};return a}},"/proc/self/fd");
Ba.unshift(function(){if(!e.noFSInit&&!Cb){assert(!Cb,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");Cb=!0;Bb();e.stdin=e.stdin;e.stdout=e.stdout;e.stderr=e.stderr;e.stdin?Y("/dev","stdin",e.stdin):tb("/dev/tty","/dev/stdin");e.stdout?Y("/dev","stdout",null,e.stdout):tb("/dev/tty","/dev/stdout");e.stderr?Y("/dev","stderr",null,e.stderr):tb("/dev/tty1","/dev/stderr");var a=
wb("/dev/stdin","r");assert(0===a.fd,"invalid handle for stdin ("+a.fd+")");a=wb("/dev/stdout","w");assert(1===a.fd,"invalid handle for stdout ("+a.fd+")");a=wb("/dev/stderr","w");assert(2===a.fd,"invalid handle for stderr ("+a.fd+")")}});Ca.push(function(){hb=!1});Da.push(function(){Cb=!1;var a=e._fflush;a&&a(0);for(a=0;a<O.length;a++){var b=O[a];b&&yb(b)}});e.FS_createFolder=Eb;e.FS_createPath=Fb;e.FS_createDataFile=Hb;e.FS_createPreloadedFile=Lb;e.FS_createLazyFile=Kb;e.FS_createLink=Ib;
e.FS_createDevice=Y;e.FS_unlink=ub;Ba.unshift(function(){});Da.push(function(){});if(r){var fs=require("fs"),cb=require("path");N.Ia()}z=da(4);ua=va=fa(u);wa=ua+za;xa=fa(wa);y[z>>2]=xa;ea=!0;function Wa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:2097151>=d?b+4:67108863>=d?b+5:b+6}b=Array(b+1);a=ma(a,b,0,b.length);b.length=a;return b}e.wasmTableSize=1512;e.wasmMaxTableSize=1512;
e.ya={};
e.za={abort:v,enlargeMemory:function(){ya()},getTotalMemory:function(){return A},abortOnCannotGrowMemory:ya,___setErrNo:Ma,___syscall140:function(a,b){Mb=b;try{var c=Nb();Z();var d=Z(),f=Z(),g=Z();zb(c,d,g);y[f>>2]=c.position;c.V&&0===d&&0===g&&(c.V=null);return 0}catch(h){return"undefined"!==typeof FS&&h instanceof J||v(h),-h.K}},___syscall146:function(a,b){Mb=b;try{var c=Nb(),d=Z();a:{var f=Z();for(b=a=0;b<f;b++){var g=Ab(c,la,y[d+8*b>>2],y[d+(8*b+4)>>2],void 0);if(0>g){var h=-1;break a}a+=g}h=
a}return h}catch(n){return"undefined"!==typeof FS&&n instanceof J||v(n),-n.K}},___syscall6:function(a,b){Mb=b;try{var c=Nb();yb(c);return 0}catch(d){return"undefined"!==typeof FS&&d instanceof J||v(d),-d.K}},_callback_check_replay:function(a){window.fileRequestCallback(a)},_emscripten_memcpy_big:function(a,b,c){w.set(w.subarray(b,b+c),a);return a},DYNAMICTOP_PTR:z,STACKTOP:va};var Ob=e.asm(e.ya,e.za,buffer);e.asm=Ob;e.___errno_location=function(){return e.asm.___errno_location.apply(null,arguments)};
e._emu_change_subsong=function(){return e.asm._emu_change_subsong.apply(null,arguments)};e._emu_compute_audio_samples=function(){return e.asm._emu_compute_audio_samples.apply(null,arguments)};e._emu_getVolVoice1=function(){return e.asm._emu_getVolVoice1.apply(null,arguments)};e._emu_getVolVoice2=function(){return e.asm._emu_getVolVoice2.apply(null,arguments)};e._emu_getVolVoice3=function(){return e.asm._emu_getVolVoice3.apply(null,arguments)};
e._emu_get_audio_buffer=function(){return e.asm._emu_get_audio_buffer.apply(null,arguments)};e._emu_get_audio_buffer_length=function(){return e.asm._emu_get_audio_buffer_length.apply(null,arguments)};e._emu_get_current_position=function(){return e.asm._emu_get_current_position.apply(null,arguments)};e._emu_get_max_position=function(){return e.asm._emu_get_max_position.apply(null,arguments)};e._emu_get_sample_rate=function(){return e.asm._emu_get_sample_rate.apply(null,arguments)};
e._emu_get_track_info=function(){return e.asm._emu_get_track_info.apply(null,arguments)};e._emu_init=function(){return e.asm._emu_init.apply(null,arguments)};e._emu_is_end=function(){return e.asm._emu_is_end.apply(null,arguments)};e._emu_is_error=function(){return e.asm._emu_is_error.apply(null,arguments)};e._emu_is_loop=function(){return e.asm._emu_is_loop.apply(null,arguments)};e._emu_is_track_change=function(){return e.asm._emu_is_track_change.apply(null,arguments)};
e._emu_is_waiting=function(){return e.asm._emu_is_waiting.apply(null,arguments)};e._emu_seek_position=function(){return e.asm._emu_seek_position.apply(null,arguments)};e._emu_set_binary_data=function(){return e.asm._emu_set_binary_data.apply(null,arguments)};e._free=function(){return e.asm._free.apply(null,arguments)};
var bb=e._malloc=function(){return e.asm._malloc.apply(null,arguments)},ka=e.stackAlloc=function(){return e.asm.stackAlloc.apply(null,arguments)},ja=e.stackRestore=function(){return e.asm.stackRestore.apply(null,arguments)},ia=e.stackSave=function(){return e.asm.stackSave.apply(null,arguments)};e.dynCall_v=function(){return e.asm.dynCall_v.apply(null,arguments)};e.dynCall_vi=function(){return e.asm.dynCall_vi.apply(null,arguments)};e.asm=Ob;
e.ccall=function(a,b,c,d){var f=e["_"+a];assert(f,"Cannot call unknown function "+a+", make sure it is exported");var g=[];a=0;if(d)for(var h=0;h<d.length;h++){var n=oa[c[h]];n?(0===a&&(a=ia()),g[h]=n(d[h])):g[h]=d[h]}c=f.apply(null,g);"string"===b&&(c=pa(c));0!==a&&ja(a);return c};e.getMemory=function(a){if(ea)if(Fa)var b=bb(a);else{assert(z);b=y[z>>2];a=b+a+15&-16;y[z>>2]=a;if(a=a>=A)ya(),a=!0;a&&(y[z>>2]=b,b=0)}else b=da(a);return b};e.Pointer_stringify=pa;e.addRunDependency=Ia;
e.removeRunDependency=Ja;e.FS_createFolder=Eb;e.FS_createPath=Fb;e.FS_createDataFile=Hb;e.FS_createPreloadedFile=Lb;e.FS_createLazyFile=Kb;e.FS_createLink=Ib;e.FS_createDevice=Y;e.FS_unlink=ub;function t(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}t.prototype=Error();t.prototype.constructor=t;var Pb=null;D=function Qb(){e.calledRun||Rb();e.calledRun||(D=Qb)};
function Rb(){function a(){if(!e.calledRun&&(e.calledRun=!0,!ha)){Fa||(Fa=!0,B(Ba));B(Ca);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var a=e.postRun.shift();Ea.unshift(a)}B(Ea)}}null===Pb&&(Pb=Date.now());if(!(0<C)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ga();B(Aa);0<C||e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},
1);a()},1)):a())}}e.run=Rb;e.exit=function(a,b){if(!b||!e.noExitRuntime||0!==a){if(!e.noExitRuntime&&(ha=!0,va=void 0,B(Da),e.onExit))e.onExit(a);r&&process.exit(a);e.quit(a,new t(a))}};function v(a){if(e.onAbort)e.onAbort(a);void 0!==a?(e.print(a),e.printErr(a),a=JSON.stringify(a)):a="";ha=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=v;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();e.noExitRuntime=!0;Rb();
  return {
	Module: Module,  // expose original Module
  };
})(window.spp_backend_state_SC68);
/*
 sc68_adapter.js: Adapts SC68 backend to generic WebAudio/ScriptProcessor player.
 
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

var sc68BackendInitOnce= false;	// must be global (otherwise reinit of backend may fail)

SC68BackendAdapter = (function(){ var $this = function () { 
		$this.base.call(this, backend_SC68.Module, 2);
		this._currentTrack;
		this._replayCache= new Array();
	}; 
	// SC68's sample buffer contains 2-byte integer sample data (i.e. must be rescaled) 
	// of 2 interleaved channels
	extend(EmsHEAP16BackendAdapter, $this, {  
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
			var status = this.Module.ccall('emu_compute_audio_samples', 'number');
			
			var isError= this.Module.ccall('emu_is_error', 'number', ['number'], [status]);
			if (isError) {
				return -1;
			} else {
				var isWaiting= this.Module.ccall('emu_is_waiting', 'number', ['number'], [status]);
												
				if (isWaiting) {
					// eventually the "replay" will be loaded and normal 
					// processing will resume					
					ScriptNodePlayer.getInstance().setWait(true);
					return -1;
				} else {
					//this.Module.ccall('emu_is_track_change', 'number', ['number'], [status]) 
					if (this.Module.ccall('emu_is_loop', 'number', ['number'], [status]) || 
						this.Module.ccall('emu_is_end', 'number', ['number'], [status])) {
						return 1;	// do not distinguish the above cases.. just end current song
					}
					return 0;
				}
			}
		},
		getMaxPlaybackPosition: function() { 
			return this.Module.ccall('emu_get_max_position', 'number');
		},
		getPlaybackPosition: function() {
			return this.Module.ccall('emu_get_current_position', 'number');
		},
		seekPlaybackPosition: function(pos) {
			return this.Module.ccall('emu_seek_position', 'number', ['number'], [pos]);
		},
		getPathAndFilename: function(filename) {
			return ['/', filename];
		},
		registerFileData: function(pathFilenameArray, data) {
			return 0;
		},
		loadMusicData: function(sampleRate, path, filename, data, options) {
			// load the song's binary data
			var buf = this.Module._malloc(data.length);
			this.Module.HEAPU8.set(data, buf);

			var timeout= -1;	// means: keep built-in timeout
			if ((typeof options != 'undefined') && typeof options.timeout != 'undefined') { 
				timeout= options.timeout*1000;
			}
			var ret = this.Module.ccall('emu_init', 'number', 
							['number', 'number', 'number', 'number', 'number'], 
							[sc68BackendInitOnce, sampleRate, timeout, buf, data.length]);

			sc68BackendInitOnce= true;
			this.Module._free(buf);

			if (ret == 0) {
				var inputSampleRate = this.Module.ccall('emu_get_sample_rate', 'number');
				this.resetSampleRate(sampleRate, inputSampleRate); 
			}
						
			return ret;			
		},
		evalTrackOptions: function(options) {
			if (typeof options.timeout != 'undefined') {
				// FIXME quite redundant - since sc68 also has a timeout.. (see above)
				ScriptNodePlayer.getInstance().setPlaybackTimeout(options.timeout*1000);
			}
			var track = options.track ?  options.track : 0;	// frontend counts from 0
			this._currentTrack= track +1;					// sc68 starts counting at 1
			
			// for sc68 "0" means "all".. 		
			var ret= this.Module.ccall('emu_change_subsong', 'number', ['number'], [this._currentTrack]);
			
			// it seems that the above doesn't work and that manual seeking has to be used instead..		
			if (this._currentTrack > 1) {
				var o= new Object();
				var seek=0;
				var i;
				for (i= 1; i<this._currentTrack; i++) {
					seek+=this.getSongLength(i);
				}			
				// hack; seeking doesnt seem to work before emu_compute_audio_samples is called
				this.Module.ccall('emu_compute_audio_samples', 'number');	
				this.seekPlaybackPosition(seek);
			}			
			
			return ret;
		},				
		teardown: function() {
		},
		getSongInfoMeta: function() {
			return {title: String,
					author: String,
					composer: String,
					replay: String,
					hwname: String,
					songInMillis: Number,
					numberOfTracks: Number
					};
		},
		getSongLength: function(track) {
			var numAttr= 7;
			ret = this.Module.ccall('emu_get_track_info', 'number', ['number'], [track]);			
			var array = this.Module.HEAP32.subarray(ret>>2, (ret>>2)+numAttr);
			return parseInt(this.Module.Pointer_stringify(array[5]));
		},
		updateSongInfo: function(filename, result) {
			var numAttr= 7;
			ret = this.Module.ccall('emu_get_track_info', 'number', ['number'], [this._currentTrack]);
			
			var array = this.Module.HEAP32.subarray(ret>>2, (ret>>2)+numAttr);
			result.title= this.Module.Pointer_stringify(array[0]);
			result.author= this.Module.Pointer_stringify(array[1]);
			result.composer= this.Module.Pointer_stringify(array[2]);
			result.replay= this.Module.Pointer_stringify(array[3]);
			result.hwname= this.Module.Pointer_stringify(array[4]);
			result.songInMillis= parseInt(this.Module.Pointer_stringify(array[5]));
			result.numberOfTracks= parseInt(this.Module.Pointer_stringify(array[6]));
		},
		
		// --------------------------- async file loading stuff -------------------------

		mapBackendFilename: function (name) {
			var input= this.Module.Pointer_stringify(name);
			
			if (input && (input in this._replayCache)) {
				this.setCachedReplay(input);
			}
			
			return "replay/"+input+".bin";	// only sc68 replays are loaded here
		},
		cacheReplay: function(name, data) {
			ScriptNodePlayer.getInstance().trace("cache replay: ["+name+"] length: "+data.length);
			this._replayCache[name]= data;
		},
		registerFileData: function(pathFilenameArray, byteArray) {
			ScriptNodePlayer.getInstance().trace("loaded: ["+pathFilenameArray[1]+"] length: "+byteArray.length);
			
			var name= pathFilenameArray[1];
			var replay= "replay/";

			if (name.substring(0, replay.length) == replay) {
				// only 'replay' filed need to be handled here
				name= name.substring(replay.length);
				name= name.substring(0, name.length-4);	// also crop ".bin" (that we added above)
				
				this.cacheReplay(name, byteArray);				
			}			
			return 1;	// anything but undefined
		},	
		setCachedReplay: function(name) {
			if (name) {
				var replay= this._replayCache[name];
			
				if (replay) {
					ScriptNodePlayer.getInstance().trace(
						"set cached replay: ["+name+"] length: "+replay.length);
					
					var bytes = new Uint8Array(name.length+1);	// we dont have any unicode here
					var i;
					for (i = 0; i < name.length; i++){ 
						var c= name.charCodeAt(i);
						bytes[i]= c & 0xff;
					}
					bytes[i]= 0;
					var keybuf = this.Module._malloc(bytes.length);
					this.Module.HEAPU8.set(bytes, keybuf);
					var buf = this.Module._malloc(replay.length);
					this.Module.HEAPU8.set(replay, buf);
					var ret = this.Module.ccall('emu_set_binary_data', 'number', ['number', 'number', 'number', 'number'], [keybuf, bytes.length, buf, replay.length]);
					this.Module._free(keybuf);
					this.Module._free(buf);				
				}
			}
		}

	});	return $this; })();
	