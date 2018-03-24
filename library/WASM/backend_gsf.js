// create separate namespace for all the Emscripten stuff.. otherwise naming clashes may occur especially when 
// optimizing using closure compiler..
window.spp_backend_state_gsf= {
	notReady: true,
	adapterCallback: function(){}	// overwritten later	
};
window.spp_backend_state_gsf["onRuntimeInitialized"] = function() {	// emscripten callback needed in case async init is used (e.g. for WASM)
	this.notReady= false;
	this.adapterCallback();
}.bind(window.spp_backend_state_gsf);

var backend_gsf = (function(Module) {var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in e)e.hasOwnProperty(l)&&(k[l]=e[l]);e.arguments=[];e.thisProgram="./this.program";e.quit=function(a,b){throw b;};e.preRun=[];e.postRun=[];var m=!1,n=!1,r=!1,aa=!1;
if(e.ENVIRONMENT)if("WEB"===e.ENVIRONMENT)m=!0;else if("WORKER"===e.ENVIRONMENT)n=!0;else if("NODE"===e.ENVIRONMENT)r=!0;else if("SHELL"===e.ENVIRONMENT)aa=!0;else throw Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");else m="object"===typeof window,n="function"===typeof importScripts,r="object"===typeof process&&"function"===typeof require&&!m&&!n,aa=!m&&!r&&!n;
if(r){var ba,ca;e.read=function(a,b){ba||(ba=require("fs"));ca||(ca=require("path"));a=ca.normalize(a);a=ba.readFileSync(a);return b?a:a.toString()};e.readBinary=function(a){a=e.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(e.thisProgram=process.argv[1].replace(/\\/g,"/"));e.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=e);process.on("uncaughtException",function(a){if(!(a instanceof t))throw a;});process.on("unhandledRejection",
function(){process.exit(1)});e.inspect=function(){return"[Emscripten Module object]"}}else if(aa)"undefined"!=typeof read&&(e.read=function(a){return read(a)}),e.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?e.arguments=scriptArgs:"undefined"!=typeof arguments&&(e.arguments=arguments),"function"===typeof quit&&(e.quit=function(a){quit(a)});else if(m||n)e.read=function(a){var b=
new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},n&&(e.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),e.readAsync=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},"undefined"!=typeof arguments&&(e.arguments=arguments),e.setWindowTitle=
function(a){document.title=a};e.print="undefined"!==typeof console?console.log:"undefined"!==typeof print?print:null;e.printErr="undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn||e.print;e.print=e.print;e.printErr=e.printErr;for(l in k)k.hasOwnProperty(l)&&(e[l]=k[l]);k=void 0;function da(a){assert(!fa);var b=u;u=u+a+15&-16;return b}function ha(a){assert(v);var b=x[v>>2];a=b+a+15&-16;x[v>>2]=a;if(a=a>=y)ia(),a=!0;return a?(x[v>>2]=b,0):b}
function ja(a){var b;b||(b=16);return Math.ceil(a/b)*b}var ka=0;function assert(a,b){a||z("Assertion failed: "+b)}var qa={stackSave:function(){la()},stackRestore:function(){ma()},arrayToC:function(a){var b=na(a.length);oa.set(a,b);return b},stringToC:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=na(c);pa(a,A,b,c)}return b}},ra={string:qa.stringToC,array:qa.arrayToC};
function sa(a,b){if("number"===typeof a){var c=!0;var d=a}else c=!1,d=a.length;b=4==b?f:["function"===typeof C?C:da,na,da,ha][void 0===b?2:b](Math.max(d,1));if(c){var f=b;assert(0==(b&3));for(a=b+(d&-4);f<a;f+=4)x[f>>2]=0;for(a=b+d;f<a;)oa[f++>>0]=0;return b}a.subarray||a.slice?A.set(a,b):A.set(new Uint8Array(a),b);return b}
function D(a,b){if(0===b||!a)return"";for(var c=0,d,f=0;;){d=A[a+f>>0];c|=d;if(0==d&&!b)break;f++;if(b&&f==b)break}b||(b=f);d="";if(128>c){for(;0<b;)c=String.fromCharCode.apply(String,A.subarray(a,a+Math.min(b,1024))),d=d?d+c:c,a+=1024,b-=1024;return d}return ta(A,a)}var ua="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ta(a,b){for(var c=b;a[c];)++c;if(16<c-b&&a.subarray&&ua)return ua.decode(a.subarray(b,c));for(c="";;){var d=a[b++];if(!d)return c;if(d&128){var f=a[b++]&63;if(192==(d&224))c+=String.fromCharCode((d&31)<<6|f);else{var g=a[b++]&63;if(224==(d&240))d=(d&15)<<12|f<<6|g;else{var h=a[b++]&63;if(240==(d&248))d=(d&7)<<18|f<<12|g<<6|h;else{var p=a[b++]&63;if(248==(d&252))d=(d&3)<<24|f<<18|g<<12|h<<6|p;else{var q=a[b++]&63;d=(d&1)<<30|f<<24|g<<18|h<<12|p<<6|q}}}65536>d?c+=String.fromCharCode(d):(d-=
65536,c+=String.fromCharCode(55296|d>>10,56320|d&1023))}}else c+=String.fromCharCode(d)}}
function pa(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);55296<=h&&57343>=h&&(h=65536+((h&1023)<<10)|a.charCodeAt(++g)&1023);if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(2097151>=h){if(c+3>=d)break;b[c++]=240|h>>18}else{if(67108863>=h){if(c+4>=d)break;b[c++]=248|h>>24}else{if(c+5>=d)break;b[c++]=252|h>>30;b[c++]=128|h>>24&63}b[c++]=128|h>>18&63}b[c++]=128|
h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0;return c-f}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");var buffer,oa,A,wa,x;function xa(){e.HEAP8=oa=new Int8Array(buffer);e.HEAP16=wa=new Int16Array(buffer);e.HEAP32=x=new Int32Array(buffer);e.HEAPU8=A=new Uint8Array(buffer);e.HEAPU16=new Uint16Array(buffer);e.HEAPU32=new Uint32Array(buffer);e.HEAPF32=new Float32Array(buffer);e.HEAPF64=new Float64Array(buffer)}var ya,u,fa,za,Aa,Ba,Ca,v;ya=u=za=Aa=Ba=Ca=v=0;fa=!1;
function ia(){z("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+y+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}var Da=e.TOTAL_STACK||5242880,y=e.TOTAL_MEMORY||67108864;y<Da&&e.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+y+"! (TOTAL_STACK="+Da+")");
e.buffer?buffer=e.buffer:("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(e.wasmMemory=new WebAssembly.Memory({initial:y/65536,maximum:y/65536}),buffer=e.wasmMemory.buffer):buffer=new ArrayBuffer(y),e.buffer=buffer);xa();x[0]=1668509029;wa[1]=25459;if(115!==A[2]||99!==A[3])throw"Runtime error: expected the system to be little-endian!";
function Ea(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Ia;"number"===typeof c?void 0===b.W?e.dynCall_v(c):e.dynCall_vi(c,b.W):c(void 0===b.W?null:b.W)}}}var Fa=[],Ga=[],Ha=[],Ia=[],Ja=[],Ka=!1;function La(){var a=e.preRun.shift();Fa.unshift(a)}var E=0,Ma=null,Na=null;function Oa(){E++;e.monitorRunDependencies&&e.monitorRunDependencies(E)}
function Pa(){E--;e.monitorRunDependencies&&e.monitorRunDependencies(E);if(0==E&&(null!==Ma&&(clearInterval(Ma),Ma=null),Na)){var a=Na;Na=null;a()}}e.preloadedImages={};e.preloadedAudios={};function Qa(a){return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}
(function(){function a(){try{if(e.wasmBinary)return new Uint8Array(e.wasmBinary);if(e.readBinary)return e.readBinary(f);throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";}catch(B){z(B)}}function b(){return e.wasmBinary||!m&&!n||"function"!==typeof fetch?new Promise(function(b){b(a())}):fetch(f,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+f+
"'";return a.arrayBuffer()}).catch(function(){return a()})}function c(a){function c(a){p=a.exports;if(p.memory){a=p.memory;var b=e.buffer;a.byteLength<b.byteLength&&e.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");b=new Int8Array(b);(new Int8Array(a)).set(b);e.buffer=buffer=a;xa()}e.asm=p;e.usingWasm=!0;Pa()}function d(a){c(a.instance)}function g(a){b().then(function(a){return WebAssembly.instantiate(a,h)}).then(a).catch(function(a){e.printErr("failed to asynchronously prepare wasm: "+
a);z(a)})}if("object"!==typeof WebAssembly)return e.printErr("no native wasm support detected"),!1;if(!(e.wasmMemory instanceof WebAssembly.Memory))return e.printErr("no native wasm Memory in use"),!1;a.memory=e.wasmMemory;h.global={NaN:NaN,Infinity:Infinity};h["global.Math"]=Math;h.env=a;Oa();if(e.instantiateWasm)try{return e.instantiateWasm(h,c)}catch(L){return e.printErr("Module.instantiateWasm callback failed with error: "+L),!1}e.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||
Qa(f)||"function"!==typeof fetch?g(d):WebAssembly.instantiateStreaming(fetch(f,{credentials:"same-origin"}),h).then(d).catch(function(a){e.printErr("wasm streaming compile failed: "+a);e.printErr("falling back to ArrayBuffer instantiation");g(d)});return{}}var d="gsf.wast",f="gsf.wasm",g="gsf.temp.asm.js";"function"===typeof e.locateFile&&(Qa(d)||(d=e.locateFile(d)),Qa(f)||(f=e.locateFile(f)),Qa(g)||(g=e.locateFile(g)));var h={global:null,env:null,asm2wasm:{"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}},
parent:e},p=null;e.asmPreload=e.asm;var q=e.reallocBuffer;e.reallocBuffer=function(a){if("asmjs"===w)var b=q(a);else a:{var c=e.usingWasm?65536:16777216;0<a%c&&(a+=c-a%c);c=e.buffer.byteLength;if(e.usingWasm)try{b=-1!==e.wasmMemory.grow((a-c)/65536)?e.buffer=e.wasmMemory.buffer:null;break a}catch(va){b=null;break a}b=void 0}return b};var w="";e.asm=function(a,b){if(!b.table){a=e.wasmTableSize;void 0===a&&(a=1024);var d=e.wasmMaxTableSize;b.table="object"===typeof WebAssembly&&"function"===typeof WebAssembly.Table?
void 0!==d?new WebAssembly.Table({initial:a,maximum:d,element:"anyfunc"}):new WebAssembly.Table({initial:a,element:"anyfunc"}):Array(a);e.wasmTable=b.table}b.memoryBase||(b.memoryBase=e.STATIC_BASE);b.tableBase||(b.tableBase=0);(b=c(b))||z("no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods");return b}})();ya=1024;u=ya+119888;Ga.push({Ia:function(){Ra()}});e.STATIC_BASE=ya;
e.STATIC_BUMP=119888;u+=16;function Sa(){return!!Sa.N}var Va=0,Wa=[],F={};function Xa(a){if(!a||F[a])return a;for(var b in F)if(F[b].ia===a)return b;return a}function ___cxa_free_exception(a){try{return Ya(a)}catch(b){}}
function Za(){var a=Va;if(!a)return($a(0),0)|0;var b=F[a],c=b.type;if(!c)return($a(0),a)|0;var d=Array.prototype.slice.call(arguments);e.___cxa_is_pointer_type(c);ab||(ab=C(4));x[ab>>2]=a;a=ab;for(var f=0;f<d.length;f++)if(d[f]&&e.___cxa_can_catch(d[f],c,a))return a=x[a>>2],b.ia=a,($a(d[f]),a)|0;a=x[a>>2];return($a(c),a)|0}
var ab,G={D:1,s:2,Fc:3,Bb:4,A:5,ha:6,Ua:7,Zb:8,L:9,ib:10,da:11,Pc:11,Ca:12,S:13,ub:14,lc:15,T:16,ea:17,Qc:18,V:19,fa:20,H:21,h:22,Ub:23,Ba:24,C:25,Mc:26,vb:27,hc:28,M:29,Cc:30,Nb:31,vc:32,rb:33,zc:34,cc:42,yb:43,jb:44,Eb:45,Fb:46,Gb:47,Mb:48,Nc:49,Xb:50,Db:51,ob:35,$b:37,$a:52,cb:53,Rc:54,Vb:55,eb:56,fb:57,pb:35,gb:59,jc:60,Yb:61,Jc:62,ic:63,dc:64,ec:65,Bc:66,ac:67,Xa:68,Gc:69,kb:70,wc:71,Pb:72,sb:73,bb:74,qc:76,ab:77,Ac:78,Hb:79,Ib:80,Lb:81,Kb:82,Jb:83,kc:38,ga:39,Qb:36,U:40,rc:95,uc:96,nb:104,Wb:105,
Ya:97,yc:91,oc:88,fc:92,Dc:108,mb:111,Va:98,lb:103,Tb:101,Rb:100,Kc:110,wb:112,xb:113,Ab:115,Za:114,qb:89,Ob:90,xc:93,Ec:94,Wa:99,Sb:102,Cb:106,mc:107,Lc:109,Oc:87,tb:122,Hc:116,pc:95,bc:123,zb:84,sc:75,hb:125,nc:131,tc:130,Ic:86},bb={0:"Success",1:"Not super-user",2:"No such file or directory",3:"No such process",4:"Interrupted system call",5:"I/O error",6:"No such device or address",7:"Arg list too long",8:"Exec format error",9:"Bad file number",10:"No children",11:"No more processes",12:"Not enough core",
13:"Permission denied",14:"Bad address",15:"Block device required",16:"Mount device busy",17:"File exists",18:"Cross-device link",19:"No such device",20:"Not a directory",21:"Is a directory",22:"Invalid argument",23:"Too many open files in system",24:"Too many open files",25:"Not a typewriter",26:"Text file busy",27:"File too large",28:"No space left on device",29:"Illegal seek",30:"Read only file system",31:"Too many links",32:"Broken pipe",33:"Math arg out of domain of func",34:"Math result not representable",
35:"File locking deadlock error",36:"File or path name too long",37:"No record locks available",38:"Function not implemented",39:"Directory not empty",40:"Too many symbolic links",42:"No message of desired type",43:"Identifier removed",44:"Channel number out of range",45:"Level 2 not synchronized",46:"Level 3 halted",47:"Level 3 reset",48:"Link number out of range",49:"Protocol driver not attached",50:"No CSI structure available",51:"Level 2 halted",52:"Invalid exchange",53:"Invalid request descriptor",
54:"Exchange full",55:"No anode",56:"Invalid request code",57:"Invalid slot",59:"Bad font file fmt",60:"Device not a stream",61:"No data (for no delay io)",62:"Timer expired",63:"Out of streams resources",64:"Machine is not on the network",65:"Package not installed",66:"The object is remote",67:"The link has been severed",68:"Advertise error",69:"Srmount error",70:"Communication error on send",71:"Protocol error",72:"Multihop attempted",73:"Cross mount point (not really error)",74:"Trying to read unreadable message",
75:"Value too large for defined data type",76:"Given log. name not unique",77:"f.d. invalid for this operation",78:"Remote address changed",79:"Can   access a needed shared lib",80:"Accessing a corrupted shared lib",81:".lib section in a.out corrupted",82:"Attempting to link in too many libs",83:"Attempting to exec a shared library",84:"Illegal byte sequence",86:"Streams pipe error",87:"Too many users",88:"Socket operation on non-socket",89:"Destination address required",90:"Message too long",91:"Protocol wrong type for socket",
92:"Protocol not available",93:"Unknown protocol",94:"Socket type not supported",95:"Not supported",96:"Protocol family not supported",97:"Address family not supported by protocol family",98:"Address already in use",99:"Address not available",100:"Network interface is not configured",101:"Network is unreachable",102:"Connection reset by network",103:"Connection aborted",104:"Connection reset by peer",105:"No buffer space available",106:"Socket is already connected",107:"Socket is not connected",108:"Can't send after socket shutdown",
109:"Too many references",110:"Connection timed out",111:"Connection refused",112:"Host is down",113:"Host is unreachable",114:"Socket already connected",115:"Connection already in progress",116:"Stale file handle",122:"Quota exceeded",123:"No medium (in tape drive)",125:"Operation canceled",130:"Previous owner died",131:"State not recoverable"};function cb(a){e.___errno_location&&(x[e.___errno_location()>>2]=a);return a}
function db(a,b){for(var c=0,d=a.length-1;0<=d;d--){var f=a[d];"."===f?a.splice(d,1):".."===f?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(b)for(;c;c--)a.unshift("..");return a}function eb(a){var b="/"===a.charAt(0),c="/"===a.substr(-1);(a=db(a.split("/").filter(function(a){return!!a}),!b).join("/"))||b||(a=".");a&&c&&(a+="/");return(b?"/":"")+a}
function fb(a){var b=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);a=b[0];b=b[1];if(!a&&!b)return".";b&&(b=b.substr(0,b.length-1));return a+b}function gb(a){if("/"===a)return"/";var b=a.lastIndexOf("/");return-1===b?a:a.substr(b+1)}function hb(){var a=Array.prototype.slice.call(arguments,0);return eb(a.join("/"))}function H(a,b){return eb(a+"/"+b)}
function ib(){for(var a="",b=!1,c=arguments.length-1;-1<=c&&!b;c--){b=0<=c?arguments[c]:"/";if("string"!==typeof b)throw new TypeError("Arguments to path.resolve must be strings");if(!b)return"";a=b+"/"+a;b="/"===b.charAt(0)}a=db(a.split("/").filter(function(a){return!!a}),!b).join("/");return(b?"/":"")+a||"."}var jb=[];function kb(a,b){jb[a]={input:[],output:[],G:b};lb(a,mb)}
var mb={open:function(a){var b=jb[a.node.rdev];if(!b)throw new I(G.V);a.tty=b;a.seekable=!1},close:function(a){a.tty.G.flush(a.tty)},flush:function(a){a.tty.G.flush(a.tty)},read:function(a,b,c,d){if(!a.tty||!a.tty.G.ta)throw new I(G.ha);for(var f=0,g=0;g<d;g++){try{var h=a.tty.G.ta(a.tty)}catch(p){throw new I(G.A);}if(void 0===h&&0===f)throw new I(G.da);if(null===h||void 0===h)break;f++;b[c+g]=h}f&&(a.node.timestamp=Date.now());return f},write:function(a,b,c,d){if(!a.tty||!a.tty.G.aa)throw new I(G.ha);
for(var f=0;f<d;f++)try{a.tty.G.aa(a.tty,b[c+f])}catch(g){throw new I(G.A);}d&&(a.node.timestamp=Date.now());return f}},nb={ta:function(a){if(!a.input.length){var b=null;if(r){var c=new Buffer(256),d=0,f=process.stdin.fd;if("win32"!=process.platform){var g=!1;try{f=fs.openSync("/dev/stdin","r"),g=!0}catch(h){}}try{d=fs.readSync(f,c,0,256,null)}catch(h){if(-1!=h.toString().indexOf("EOF"))d=0;else throw h;}g&&fs.closeSync(f);0<d?b=c.slice(0,d).toString("utf-8"):b=null}else"undefined"!=typeof window&&
"function"==typeof window.prompt?(b=window.prompt("Input: "),null!==b&&(b+="\n")):"function"==typeof readline&&(b=readline(),null!==b&&(b+="\n"));if(!b)return null;a.input=J(b,!0)}return a.input.shift()},aa:function(a,b){null===b||10===b?(e.print(ta(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&0<a.output.length&&(e.print(ta(a.output,0)),a.output=[])}},ob={aa:function(a,b){null===b||10===b?(e.printErr(ta(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&
0<a.output.length&&(e.printErr(ta(a.output,0)),a.output=[])}},K={m:null,j:function(){return K.createNode(null,"/",16895,0)},createNode:function(a,b,c,d){if(24576===(c&61440)||4096===(c&61440))throw new I(G.D);K.m||(K.m={dir:{node:{o:K.c.o,i:K.c.i,lookup:K.c.lookup,I:K.c.I,rename:K.c.rename,unlink:K.c.unlink,rmdir:K.c.rmdir,readdir:K.c.readdir,symlink:K.c.symlink},stream:{v:K.f.v}},file:{node:{o:K.c.o,i:K.c.i},stream:{v:K.f.v,read:K.f.read,write:K.f.write,ja:K.f.ja,wa:K.f.wa,za:K.f.za}},link:{node:{o:K.c.o,
i:K.c.i,readlink:K.c.readlink},stream:{}},na:{node:{o:K.c.o,i:K.c.i},stream:pb}});c=qb(a,b,c,d);M(c.mode)?(c.c=K.m.dir.node,c.f=K.m.dir.stream,c.b={}):32768===(c.mode&61440)?(c.c=K.m.file.node,c.f=K.m.file.stream,c.g=0,c.b=null):40960===(c.mode&61440)?(c.c=K.m.link.node,c.f=K.m.link.stream):8192===(c.mode&61440)&&(c.c=K.m.na.node,c.f=K.m.na.stream);c.timestamp=Date.now();a&&(a.b[b]=c);return c},Ja:function(a){if(a.b&&a.b.subarray){for(var b=[],c=0;c<a.g;++c)b.push(a.b[c]);return b}return a.b},Uc:function(a){return a.b?
a.b.subarray?a.b.subarray(0,a.g):new Uint8Array(a.b):new Uint8Array},pa:function(a,b){a.b&&a.b.subarray&&b>a.b.length&&(a.b=K.Ja(a),a.g=a.b.length);if(!a.b||a.b.subarray){var c=a.b?a.b.length:0;c>=b||(b=Math.max(b,c*(1048576>c?2:1.125)|0),0!=c&&(b=Math.max(b,256)),c=a.b,a.b=new Uint8Array(b),0<a.g&&a.b.set(c.subarray(0,a.g),0))}else for(!a.b&&0<b&&(a.b=[]);a.b.length<b;)a.b.push(0)},Pa:function(a,b){if(a.g!=b)if(0==b)a.b=null,a.g=0;else{if(!a.b||a.b.subarray){var c=a.b;a.b=new Uint8Array(new ArrayBuffer(b));
c&&a.b.set(c.subarray(0,Math.min(b,a.g)))}else if(a.b||(a.b=[]),a.b.length>b)a.b.length=b;else for(;a.b.length<b;)a.b.push(0);a.g=b}},c:{o:function(a){var b={};b.dev=8192===(a.mode&61440)?a.id:1;b.ino=a.id;b.mode=a.mode;b.nlink=1;b.uid=0;b.gid=0;b.rdev=a.rdev;M(a.mode)?b.size=4096:32768===(a.mode&61440)?b.size=a.g:40960===(a.mode&61440)?b.size=a.link.length:b.size=0;b.atime=new Date(a.timestamp);b.mtime=new Date(a.timestamp);b.ctime=new Date(a.timestamp);b.B=4096;b.blocks=Math.ceil(b.size/b.B);return b},
i:function(a,b){void 0!==b.mode&&(a.mode=b.mode);void 0!==b.timestamp&&(a.timestamp=b.timestamp);void 0!==b.size&&K.Pa(a,b.size)},lookup:function(){throw rb[G.s];},I:function(a,b,c,d){return K.createNode(a,b,c,d)},rename:function(a,b,c){if(M(a.mode)){try{var d=N(b,c)}catch(g){}if(d)for(var f in d.b)throw new I(G.ga);}delete a.parent.b[a.name];a.name=c;b.b[c]=a;a.parent=b},unlink:function(a,b){delete a.b[b]},rmdir:function(a,b){var c=N(a,b),d;for(d in c.b)throw new I(G.ga);delete a.b[b]},readdir:function(a){var b=
[".",".."],c;for(c in a.b)a.b.hasOwnProperty(c)&&b.push(c);return b},symlink:function(a,b,c){a=K.createNode(a,b,41471,0);a.link=c;return a},readlink:function(a){if(40960!==(a.mode&61440))throw new I(G.h);return a.link}},f:{read:function(a,b,c,d,f){var g=a.node.b;if(f>=a.node.g)return 0;a=Math.min(a.node.g-f,d);assert(0<=a);if(8<a&&g.subarray)b.set(g.subarray(f,f+a),c);else for(d=0;d<a;d++)b[c+d]=g[f+d];return a},write:function(a,b,c,d,f,g){if(!d)return 0;a=a.node;a.timestamp=Date.now();if(b.subarray&&
(!a.b||a.b.subarray)){if(g)return a.b=b.subarray(c,c+d),a.g=d;if(0===a.g&&0===f)return a.b=new Uint8Array(b.subarray(c,c+d)),a.g=d;if(f+d<=a.g)return a.b.set(b.subarray(c,c+d),f),d}K.pa(a,f+d);if(a.b.subarray&&b.subarray)a.b.set(b.subarray(c,c+d),f);else for(g=0;g<d;g++)a.b[f+g]=b[c+g];a.g=Math.max(a.g,f+d);return d},v:function(a,b,c){1===c?b+=a.position:2===c&&32768===(a.node.mode&61440)&&(b+=a.node.g);if(0>b)throw new I(G.h);return b},ja:function(a,b,c){K.pa(a.node,b+c);a.node.g=Math.max(a.node.g,
b+c)},wa:function(a,b,c,d,f,g,h){if(32768!==(a.node.mode&61440))throw new I(G.V);c=a.node.b;if(h&2||c.buffer!==b&&c.buffer!==b.buffer){if(0<f||f+d<a.node.g)c.subarray?c=c.subarray(f,f+d):c=Array.prototype.slice.call(c,f,f+d);a=!0;d=C(d);if(!d)throw new I(G.Ca);b.set(c,d)}else a=!1,d=c.byteOffset;return{Oa:d,Sc:a}},za:function(a,b,c,d,f){if(32768!==(a.node.mode&61440))throw new I(G.V);if(f&2)return 0;K.f.write(a,b,0,d,c,!1);return 0}}},O={P:!1,Sa:function(){O.P=!!process.platform.match(/^win/);var a=
process.binding("constants");a.fs&&(a=a.fs);O.qa={1024:a.O_APPEND,64:a.O_CREAT,128:a.O_EXCL,0:a.O_RDONLY,2:a.O_RDWR,4096:a.O_SYNC,512:a.O_TRUNC,1:a.O_WRONLY}},ka:function(a){return Buffer.N?Buffer.from(a):new Buffer(a)},j:function(a){assert(r);return O.createNode(null,"/",O.sa(a.$.root),0)},createNode:function(a,b,c){if(!M(c)&&32768!==(c&61440)&&40960!==(c&61440))throw new I(G.h);a=qb(a,b,c);a.c=O.c;a.f=O.f;return a},sa:function(a){try{var b=fs.lstatSync(a);O.P&&(b.mode=b.mode|(b.mode&292)>>2)}catch(c){if(!c.code)throw c;
throw new I(G[c.code]);}return b.mode},l:function(a){for(var b=[];a.parent!==a;)b.push(a.name),a=a.parent;b.push(a.j.$.root);b.reverse();return hb.apply(null,b)},Ha:function(a){a&=-2656257;var b=0,c;for(c in O.qa)a&c&&(b|=O.qa[c],a^=c);if(a)throw new I(G.h);return b},c:{o:function(a){a=O.l(a);try{var b=fs.lstatSync(a)}catch(c){if(!c.code)throw c;throw new I(G[c.code]);}O.P&&!b.B&&(b.B=4096);O.P&&!b.blocks&&(b.blocks=(b.size+b.B-1)/b.B|0);return{dev:b.dev,ino:b.ino,mode:b.mode,nlink:b.nlink,uid:b.uid,
gid:b.gid,rdev:b.rdev,size:b.size,atime:b.atime,mtime:b.mtime,ctime:b.ctime,B:b.B,blocks:b.blocks}},i:function(a,b){var c=O.l(a);try{void 0!==b.mode&&(fs.chmodSync(c,b.mode),a.mode=b.mode),void 0!==b.size&&fs.truncateSync(c,b.size)}catch(d){if(!d.code)throw d;throw new I(G[d.code]);}},lookup:function(a,b){var c=H(O.l(a),b);c=O.sa(c);return O.createNode(a,b,c)},I:function(a,b,c,d){a=O.createNode(a,b,c,d);b=O.l(a);try{M(a.mode)?fs.mkdirSync(b,a.mode):fs.writeFileSync(b,"",{mode:a.mode})}catch(f){if(!f.code)throw f;
throw new I(G[f.code]);}return a},rename:function(a,b,c){a=O.l(a);b=H(O.l(b),c);try{fs.renameSync(a,b)}catch(d){if(!d.code)throw d;throw new I(G[d.code]);}},unlink:function(a,b){a=H(O.l(a),b);try{fs.unlinkSync(a)}catch(c){if(!c.code)throw c;throw new I(G[c.code]);}},rmdir:function(a,b){a=H(O.l(a),b);try{fs.rmdirSync(a)}catch(c){if(!c.code)throw c;throw new I(G[c.code]);}},readdir:function(a){a=O.l(a);try{return fs.readdirSync(a)}catch(b){if(!b.code)throw b;throw new I(G[b.code]);}},symlink:function(a,
b,c){a=H(O.l(a),b);try{fs.symlinkSync(c,a)}catch(d){if(!d.code)throw d;throw new I(G[d.code]);}},readlink:function(a){var b=O.l(a);try{return b=fs.readlinkSync(b),b=sb.relative(sb.resolve(a.j.$.root),b)}catch(c){if(!c.code)throw c;throw new I(G[c.code]);}}},f:{open:function(a){var b=O.l(a.node);try{32768===(a.node.mode&61440)&&(a.K=fs.openSync(b,O.Ha(a.flags)))}catch(c){if(!c.code)throw c;throw new I(G[c.code]);}},close:function(a){try{32768===(a.node.mode&61440)&&a.K&&fs.closeSync(a.K)}catch(b){if(!b.code)throw b;
throw new I(G[b.code]);}},read:function(a,b,c,d,f){if(0===d)return 0;try{return fs.readSync(a.K,O.ka(b.buffer),c,d,f)}catch(g){throw new I(G[g.code]);}},write:function(a,b,c,d,f){try{return fs.writeSync(a.K,O.ka(b.buffer),c,d,f)}catch(g){throw new I(G[g.code]);}},v:function(a,b,c){if(1===c)b+=a.position;else if(2===c&&32768===(a.node.mode&61440))try{b+=fs.fstatSync(a.K).size}catch(d){throw new I(G[d.code]);}if(0>b)throw new I(G.h);return b}}};u+=16;u+=16;u+=16;
var tb=null,ub={},P=[],vb=1,Q=null,wb=!0,R={},I=null,rb={};
function S(a,b){a=ib("/",a);b=b||{};if(!a)return{path:"",node:null};var c={ra:!0,ba:0},d;for(d in c)void 0===b[d]&&(b[d]=c[d]);if(8<b.ba)throw new I(G.U);a=db(a.split("/").filter(function(a){return!!a}),!1);var f=tb;c="/";for(d=0;d<a.length;d++){var g=d===a.length-1;if(g&&b.parent)break;f=N(f,a[d]);c=H(c,a[d]);f.J&&(!g||g&&b.ra)&&(f=f.J.root);if(!g||b.X)for(g=0;40960===(f.mode&61440);)if(f=xb(c),c=ib(fb(c),f),f=S(c,{ba:b.ba}).node,40<g++)throw new I(G.U);}return{path:c,node:f}}
function T(a){for(var b;;){if(a===a.parent)return a=a.j.ya,b?"/"!==a[a.length-1]?a+"/"+b:a+b:a;b=b?a.name+"/"+b:a.name;a=a.parent}}function yb(a,b){for(var c=0,d=0;d<b.length;d++)c=(c<<5)-c+b.charCodeAt(d)|0;return(a+c>>>0)%Q.length}function zb(a){var b=yb(a.parent.id,a.name);a.F=Q[b];Q[b]=a}function N(a,b){var c;if(c=(c=Ab(a,"x"))?c:a.c.lookup?0:G.S)throw new I(c,a);for(c=Q[yb(a.id,b)];c;c=c.F){var d=c.name;if(c.parent.id===a.id&&d===b)return c}return a.c.lookup(a,b)}
function qb(a,b,c,d){Bb||(Bb=function(a,b,c,d){a||(a=this);this.parent=a;this.j=a.j;this.J=null;this.id=vb++;this.name=b;this.mode=c;this.c={};this.f={};this.rdev=d},Bb.prototype={},Object.defineProperties(Bb.prototype,{read:{get:function(){return 365===(this.mode&365)},set:function(a){a?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146===(this.mode&146)},set:function(a){a?this.mode|=146:this.mode&=-147}},Ma:{get:function(){return M(this.mode)}},La:{get:function(){return 8192===(this.mode&
61440)}}}));a=new Bb(a,b,c,d);zb(a);return a}function M(a){return 16384===(a&61440)}var Cb={r:0,rs:1052672,"r+":2,w:577,wx:705,xw:705,"w+":578,"wx+":706,"xw+":706,a:1089,ax:1217,xa:1217,"a+":1090,"ax+":1218,"xa+":1218};function Db(a){var b=["r","w","rw"][a&3];a&512&&(b+="w");return b}function Ab(a,b){if(wb)return 0;if(-1===b.indexOf("r")||a.mode&292){if(-1!==b.indexOf("w")&&!(a.mode&146)||-1!==b.indexOf("x")&&!(a.mode&73))return G.S}else return G.S;return 0}
function Eb(a,b){try{return N(a,b),G.ea}catch(c){}return Ab(a,"wx")}function Fb(a){var b=4096;for(a=a||0;a<=b;a++)if(!P[a])return a;throw new I(G.Ba);}function Gb(a,b){Hb||(Hb=function(){},Hb.prototype={},Object.defineProperties(Hb.prototype,{object:{get:function(){return this.node},set:function(a){this.node=a}}}));var c=new Hb,d;for(d in a)c[d]=a[d];a=c;b=Fb(b);a.fd=b;return P[b]=a}var pb={open:function(a){a.f=ub[a.node.rdev].f;a.f.open&&a.f.open(a)},v:function(){throw new I(G.M);}};
function lb(a,b){ub[a]={f:b}}function Ib(a,b){var c="/"===b,d=!b;if(c&&tb)throw new I(G.T);if(!c&&!d){var f=S(b,{ra:!1});b=f.path;f=f.node;if(f.J)throw new I(G.T);if(!M(f.mode))throw new I(G.fa);}b={type:a,$:{},ya:b,Na:[]};a=a.j(b);a.j=b;b.root=a;c?tb=a:f&&(f.J=b,f.j&&f.j.Na.push(b))}function Jb(a,b,c){var d=S(a,{parent:!0}).node;a=gb(a);if(!a||"."===a||".."===a)throw new I(G.h);var f=Eb(d,a);if(f)throw new I(f);if(!d.c.I)throw new I(G.D);return d.c.I(d,a,b,c)}
function U(a,b){return Jb(a,(void 0!==b?b:511)&1023|16384,0)}function Kb(a,b,c){"undefined"===typeof c&&(c=b,b=438);return Jb(a,b|8192,c)}function Lb(a,b){if(!ib(a))throw new I(G.s);var c=S(b,{parent:!0}).node;if(!c)throw new I(G.s);b=gb(b);var d=Eb(c,b);if(d)throw new I(d);if(!c.c.symlink)throw new I(G.D);return c.c.symlink(c,b,a)}
function Mb(a){var b=S(a,{parent:!0}).node,c=gb(a),d=N(b,c);a:{try{var f=N(b,c)}catch(h){f=h.u;break a}var g=Ab(b,"wx");f=g?g:M(f.mode)?G.H:0}if(f)throw new I(f);if(!b.c.unlink)throw new I(G.D);if(d.J)throw new I(G.T);try{R.willDeletePath&&R.willDeletePath(a)}catch(h){console.log("FS.trackingDelegate['willDeletePath']('"+a+"') threw an exception: "+h.message)}b.c.unlink(b,c);b=yb(d.parent.id,d.name);if(Q[b]===d)Q[b]=d.F;else for(b=Q[b];b;){if(b.F===d){b.F=d.F;break}b=b.F}try{if(R.onDeletePath)R.onDeletePath(a)}catch(h){console.log("FS.trackingDelegate['onDeletePath']('"+
a+"') threw an exception: "+h.message)}}function xb(a){a=S(a).node;if(!a)throw new I(G.s);if(!a.c.readlink)throw new I(G.h);return ib(T(a.parent),a.c.readlink(a))}function Nb(a,b){var c;"string"===typeof a?c=S(a,{X:!0}).node:c=a;if(!c.c.i)throw new I(G.D);c.c.i(c,{mode:b&4095|c.mode&-4096,timestamp:Date.now()})}
function V(a,b,c,d){if(""===a)throw new I(G.s);if("string"===typeof b){var f=Cb[b];if("undefined"===typeof f)throw Error("Unknown file open mode: "+b);b=f}c=b&64?("undefined"===typeof c?438:c)&4095|32768:0;if("object"===typeof a)var g=a;else{a=eb(a);try{g=S(a,{X:!(b&131072)}).node}catch(p){}}f=!1;if(b&64)if(g){if(b&128)throw new I(G.ea);}else g=Jb(a,c,0),f=!0;if(!g)throw new I(G.s);8192===(g.mode&61440)&&(b&=-513);if(b&65536&&!M(g.mode))throw new I(G.fa);if(!f&&(c=g?40960===(g.mode&61440)?G.U:M(g.mode)&&
("r"!==Db(b)||b&512)?G.H:Ab(g,Db(b)):G.s))throw new I(c);if(b&512){c=g;var h;"string"===typeof c?h=S(c,{X:!0}).node:h=c;if(!h.c.i)throw new I(G.D);if(M(h.mode))throw new I(G.H);if(32768!==(h.mode&61440))throw new I(G.h);if(c=Ab(h,"w"))throw new I(c);h.c.i(h,{size:0,timestamp:Date.now()})}b&=-641;d=Gb({node:g,path:T(g),flags:b,seekable:!0,position:0,f:g.f,Ta:[],error:!1},d);d.f.open&&d.f.open(d);!e.logReadFiles||b&1||(Ob||(Ob={}),a in Ob||(Ob[a]=1,e.printErr("read file: "+a)));try{R.onOpenFile&&(g=
0,1!==(b&2097155)&&(g|=1),0!==(b&2097155)&&(g|=2),R.onOpenFile(a,g))}catch(p){console.log("FS.trackingDelegate['onOpenFile']('"+a+"', flags) threw an exception: "+p.message)}return d}function Pb(a){a.Y&&(a.Y=null);try{a.f.close&&a.f.close(a)}catch(b){throw b;}finally{P[a.fd]=null}}function Qb(a,b,c){if(!a.seekable||!a.f.v)throw new I(G.M);a.position=a.f.v(a,b,c);a.Ta=[];return a.position}
function Rb(a,b,c,d,f,g){if(0>d||0>f)throw new I(G.h);if(0===(a.flags&2097155))throw new I(G.L);if(M(a.node.mode))throw new I(G.H);if(!a.f.write)throw new I(G.h);a.flags&1024&&(f=Qb(a,0,2));var h=!0;if("undefined"===typeof f)f=a.position,h=!1;else if(!a.seekable)throw new I(G.M);b=a.f.write(a,b,c,d,f,g);h||(a.position+=b);try{if(a.path&&R.onWriteToFile)R.onWriteToFile(a.path)}catch(p){console.log("FS.trackingDelegate['onWriteToFile']('"+path+"') threw an exception: "+p.message)}return b}
function Sb(){I||(I=function(a,b){this.node=b;this.Ra=function(a){this.u=a;for(var b in G)if(G[b]===a){this.code=b;break}};this.Ra(a);this.message=bb[a];this.stack&&Object.defineProperty(this,"stack",{value:Error().stack,writable:!0})},I.prototype=Error(),I.prototype.constructor=I,[G.s].forEach(function(a){rb[a]=new I(a);rb[a].stack="<generic error, no stack>"}))}var Tb;function Ub(a,b){var c=0;a&&(c|=365);b&&(c|=146);return c}
function Vb(a,b,c,d){a=H("string"===typeof a?a:T(a),b);return U(a,Ub(c,d))}function Wb(a,b){a="string"===typeof a?a:T(a);for(b=b.split("/").reverse();b.length;){var c=b.pop();if(c){var d=H(a,c);try{U(d)}catch(f){}a=d}}return d}function Xb(a,b,c,d){a=H("string"===typeof a?a:T(a),b);c=Ub(c,d);return Jb(a,(void 0!==c?c:438)&4095|32768,0)}
function Yb(a,b,c,d,f,g){a=b?H("string"===typeof a?a:T(a),b):a;d=Ub(d,f);f=Jb(a,(void 0!==d?d:438)&4095|32768,0);if(c){if("string"===typeof c){a=Array(c.length);b=0;for(var h=c.length;b<h;++b)a[b]=c.charCodeAt(b);c=a}Nb(f,d|146);a=V(f,"w");Rb(a,c,0,c.length,0,g);Pb(a);Nb(f,d)}return f}
function W(a,b,c,d){a=H("string"===typeof a?a:T(a),b);b=Ub(!!c,!!d);W.va||(W.va=64);var f=W.va++<<8|0;lb(f,{open:function(a){a.seekable=!1},close:function(){d&&d.buffer&&d.buffer.length&&d(10)},read:function(a,b,d,f){for(var g=0,h=0;h<f;h++){try{var p=c()}catch(Ua){throw new I(G.A);}if(void 0===p&&0===g)throw new I(G.da);if(null===p||void 0===p)break;g++;b[d+h]=p}g&&(a.node.timestamp=Date.now());return g},write:function(a,b,c,f){for(var g=0;g<f;g++)try{d(b[c+g])}catch(B){throw new I(G.A);}f&&(a.node.timestamp=
Date.now());return g}});return Kb(a,b,f)}function Zb(a,b,c){a=H("string"===typeof a?a:T(a),b);return Lb(c,a)}
function $b(a){if(a.La||a.Ma||a.link||a.b)return!0;var b=!0;if("undefined"!==typeof XMLHttpRequest)throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(e.read)try{a.b=J(e.read(a.url),!0),a.g=a.b.length}catch(c){b=!1}else throw Error("Cannot load without read() or XMLHttpRequest.");b||cb(G.A);return b}
function ac(a,b,c,d,f){function g(){this.Z=!1;this.O=[]}g.prototype.get=function(a){if(!(a>this.length-1||0>a)){var b=a%this.chunkSize;return this.ua(a/this.chunkSize|0)[b]}};g.prototype.Qa=function(a){this.ua=a};g.prototype.la=function(){var a=new XMLHttpRequest;a.open("HEAD",c,!1);a.send(null);if(!(200<=a.status&&300>a.status||304===a.status))throw Error("Couldn't load "+c+". Status: "+a.status);var b=Number(a.getResponseHeader("Content-length")),d,f=(d=a.getResponseHeader("Accept-Ranges"))&&"bytes"===
d;a=(d=a.getResponseHeader("Content-Encoding"))&&"gzip"===d;var g=1048576;f||(g=b);var h=this;h.Qa(function(a){var d=a*g,f=(a+1)*g-1;f=Math.min(f,b-1);if("undefined"===typeof h.O[a]){var p=h.O;if(d>f)throw Error("invalid range ("+d+", "+f+") or no bytes requested!");if(f>b-1)throw Error("only "+b+" bytes available! programmer error!");var q=new XMLHttpRequest;q.open("GET",c,!1);b!==g&&q.setRequestHeader("Range","bytes="+d+"-"+f);"undefined"!=typeof Uint8Array&&(q.responseType="arraybuffer");q.overrideMimeType&&
q.overrideMimeType("text/plain; charset=x-user-defined");q.send(null);if(!(200<=q.status&&300>q.status||304===q.status))throw Error("Couldn't load "+c+". Status: "+q.status);d=void 0!==q.response?new Uint8Array(q.response||[]):J(q.responseText||"",!0);p[a]=d}if("undefined"===typeof h.O[a])throw Error("doXHR failed!");return h.O[a]});if(a||!b)g=b=1,g=b=this.ua(0).length,console.log("LazyFiles on gzip forces download of the whole file when length is accessed");this.Ea=b;this.Da=g;this.Z=!0};if("undefined"!==
typeof XMLHttpRequest){if(!n)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var h=new g;Object.defineProperties(h,{length:{get:function(){this.Z||this.la();return this.Ea}},chunkSize:{get:function(){this.Z||this.la();return this.Da}}});var p=void 0}else p=c,h=void 0;var q=Xb(a,b,d,f);h?q.b=h:p&&(q.b=null,q.url=p);Object.defineProperties(q,{g:{get:function(){return this.b.length}}});var w={};Object.keys(q.f).forEach(function(a){var b=
q.f[a];w[a]=function(){if(!$b(q))throw new I(G.A);return b.apply(null,arguments)}});w.read=function(a,b,c,d,f){if(!$b(q))throw new I(G.A);a=a.node.b;if(f>=a.length)return 0;d=Math.min(a.length-f,d);assert(0<=d);if(a.slice)for(var g=0;g<d;g++)b[c+g]=a[f+g];else for(g=0;g<d;g++)b[c+g]=a.get(f+g);return d};q.f=w;return q}
function bc(a,b,c,d,f,g,h,p,q,w){function B(c){function B(c){w&&w();p||Yb(a,b,c,d,f,q);g&&g();Pa()}var L=!1;e.preloadPlugins.forEach(function(a){!L&&a.canHandle(ea)&&(a.handle(c,ea,B,function(){h&&h();Pa()}),L=!0)});L||B(c)}Browser.Vc();var ea=b?ib(H(a,b)):a;Oa();"string"==typeof c?Browser.Tc(c,function(a){B(a)},h):B(c)}var FS={},Bb,Hb,Ob,X=0;function Y(){X+=4;return x[X-4>>2]}function Z(){var a=P[Y()];if(!a)throw new I(G.L);return a}sa(J("GMT"),2);var cc=u,dc=u+=16,ec=u+=16;u+=16;
function fc(){function a(a){return(a=a.toTimeString().match(/\(([A-Za-z ]+)\)$/))?a[1]:"GMT"}if(!hc){hc=!0;x[ec>>2]=60*(new Date).getTimezoneOffset();var b=new Date(2E3,0,1),c=new Date(2E3,6,1);x[dc>>2]=Number(b.getTimezoneOffset()!=c.getTimezoneOffset());var d=a(b),f=a(c);d=sa(J(d),0);f=sa(J(f),0);c.getTimezoneOffset()<b.getTimezoneOffset()?(x[cc>>2]=d,x[cc+4>>2]=f):(x[cc>>2]=f,x[cc+4>>2]=d)}}var hc;Sb();Q=Array(4096);Ib(K,"/");U("/tmp");U("/home");U("/home/web_user");
(function(){U("/dev");lb(259,{read:function(){return 0},write:function(a,b,f,g){return g}});Kb("/dev/null",259);kb(1280,nb);kb(1536,ob);Kb("/dev/tty",1280);Kb("/dev/tty1",1536);if("undefined"!==typeof crypto){var a=new Uint8Array(1);var b=function(){crypto.getRandomValues(a);return a[0]}}else b=r?function(){return require("crypto").randomBytes(1)[0]}:function(){return 256*Math.random()|0};W("/dev","random",b);W("/dev","urandom",b);U("/dev/shm");U("/dev/shm/tmp")})();U("/proc");U("/proc/self");U("/proc/self/fd");
Ib({j:function(){var a=qb("/proc/self","fd",16895,73);a.c={lookup:function(a,c){var b=P[+c];if(!b)throw new I(G.L);a={parent:null,j:{ya:"fake"},c:{readlink:function(){return b.path}}};return a.parent=a}};return a}},"/proc/self/fd");
Ga.unshift(function(){if(!e.noFSInit&&!Tb){assert(!Tb,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");Tb=!0;Sb();e.stdin=e.stdin;e.stdout=e.stdout;e.stderr=e.stderr;e.stdin?W("/dev","stdin",e.stdin):Lb("/dev/tty","/dev/stdin");e.stdout?W("/dev","stdout",null,e.stdout):Lb("/dev/tty","/dev/stdout");e.stderr?W("/dev","stderr",null,e.stderr):Lb("/dev/tty1","/dev/stderr");var a=
V("/dev/stdin","r");assert(0===a.fd,"invalid handle for stdin ("+a.fd+")");a=V("/dev/stdout","w");assert(1===a.fd,"invalid handle for stdout ("+a.fd+")");a=V("/dev/stderr","w");assert(2===a.fd,"invalid handle for stderr ("+a.fd+")")}});Ha.push(function(){wb=!1});Ia.push(function(){Tb=!1;var a=e._fflush;a&&a(0);for(a=0;a<P.length;a++){var b=P[a];b&&Pb(b)}});e.FS_createFolder=Vb;e.FS_createPath=Wb;e.FS_createDataFile=Yb;e.FS_createPreloadedFile=bc;e.FS_createLazyFile=ac;e.FS_createLink=Zb;
e.FS_createDevice=W;e.FS_unlink=Mb;Ga.unshift(function(){});Ia.push(function(){});if(r){var fs=require("fs"),sb=require("path");O.Sa()}v=da(4);za=Aa=ja(u);Ba=za+Da;Ca=ja(Ba);x[v>>2]=Ca;fa=!0;function J(a,b){for(var c=0,d=0;d<a.length;++d){var f=a.charCodeAt(d);55296<=f&&57343>=f&&(f=65536+((f&1023)<<10)|a.charCodeAt(++d)&1023);127>=f?++c:c=2047>=f?c+2:65535>=f?c+3:2097151>=f?c+4:67108863>=f?c+5:c+6}c=Array(c+1);a=pa(a,c,0,c.length);b&&(c.length=a);return c}e.wasmTableSize=3442;
e.wasmMaxTableSize=3442;e.Fa={};
e.Ga={abort:z,enlargeMemory:function(){ia()},getTotalMemory:function(){return y},abortOnCannotGrowMemory:ia,invoke_ii:function(a,b){try{return e.dynCall_ii(a,b)}catch(c){if("number"!==typeof c&&"longjmp"!==c)throw c;e.setThrew(1,0)}},invoke_iiii:function(a,b,c,d){try{return e.dynCall_iiii(a,b,c,d)}catch(f){if("number"!==typeof f&&"longjmp"!==f)throw f;e.setThrew(1,0)}},invoke_v:function(a){try{e.dynCall_v(a)}catch(b){if("number"!==typeof b&&"longjmp"!==b)throw b;e.setThrew(1,0)}},invoke_vi:function(a,
b){try{e.dynCall_vi(a,b)}catch(c){if("number"!==typeof c&&"longjmp"!==c)throw c;e.setThrew(1,0)}},invoke_vii:function(a,b,c){try{e.dynCall_vii(a,b,c)}catch(d){if("number"!==typeof d&&"longjmp"!==d)throw d;e.setThrew(1,0)}},invoke_viii:function(a,b,c,d){try{e.dynCall_viii(a,b,c,d)}catch(f){if("number"!==typeof f&&"longjmp"!==f)throw f;e.setThrew(1,0)}},invoke_viiii:function(a,b,c,d,f){try{e.dynCall_viiii(a,b,c,d,f)}catch(g){if("number"!==typeof g&&"longjmp"!==g)throw g;e.setThrew(1,0)}},___assert_fail:function(a,
b,c,d){z("Assertion failed: "+D(a)+", at: "+[b?D(b):"unknown filename",c,d?D(d):"unknown function"])},___cxa_allocate_exception:function(a){return C(a)},___cxa_begin_catch:function(a){var b=F[a];b&&!b.ma&&(b.ma=!0,Sa.N--);b&&(b.Aa=!1);Wa.push(a);(b=Xa(a))&&F[b].R++;return a},___cxa_end_catch:function(){e.setThrew(0);var a=Wa.pop();if(a){if(a=Xa(a)){var b=F[a];assert(0<b.R);b.R--;0!==b.R||b.Aa||(b.oa&&e.dynCall_vi(b.oa,a),delete F[a],___cxa_free_exception(a))}Va=0}},___cxa_find_matching_catch_2:function(){return Za.apply(null,
arguments)},___cxa_find_matching_catch_3:function(){return Za.apply(null,arguments)},___cxa_free_exception:___cxa_free_exception,___cxa_throw:function(a,b,c){F[a]={Oa:a,ia:a,type:b,oa:c,R:0,ma:!1,Aa:!1};Va=a;"uncaught_exception"in Sa?Sa.N++:Sa.N=1;throw a;},___lock:function(){},___resumeException:function(a){Va||(Va=a);throw a;},___setErrNo:cb,___syscall140:function(a,b){X=b;try{var c=Z();Y();var d=Y(),f=Y(),g=Y();Qb(c,d,g);x[f>>2]=c.position;c.Y&&0===d&&0===g&&(c.Y=null);return 0}catch(h){return"undefined"!==
typeof FS&&h instanceof I||z(h),-h.u}},___syscall145:function(a,b){X=b;try{var c=Z(),d=Y();a:{var f=Y();for(b=a=0;b<f;b++){var g=x[d+(8*b+4)>>2],h=c,p=x[d+8*b>>2],q=g,w=void 0,B=oa;if(0>q||0>w)throw new I(G.h);if(1===(h.flags&2097155))throw new I(G.L);if(M(h.node.mode))throw new I(G.H);if(!h.f.read)throw new I(G.h);var ea=!0;if("undefined"===typeof w)w=h.position,ea=!1;else if(!h.seekable)throw new I(G.M);var Ua=h.f.read(h,B,p,q,w);ea||(h.position+=Ua);var va=Ua;if(0>va){var L=-1;break a}a+=va;if(va<
g)break}L=a}return L}catch(Ta){return"undefined"!==typeof FS&&Ta instanceof I||z(Ta),-Ta.u}},___syscall146:function(a,b){X=b;try{var c=Z(),d=Y();a:{var f=Y();for(b=a=0;b<f;b++){var g=Rb(c,oa,x[d+8*b>>2],x[d+(8*b+4)>>2],void 0);if(0>g){var h=-1;break a}a+=g}h=a}return h}catch(p){return"undefined"!==typeof FS&&p instanceof I||z(p),-p.u}},___syscall221:function(a,b){X=b;try{var c=Z();switch(Y()){case 0:var d=Y();return 0>d?-G.h:V(c.path,c.flags,0,d).fd;case 1:case 2:return 0;case 3:return c.flags;case 4:return d=
Y(),c.flags|=d,0;case 12:case 12:return d=Y(),wa[d+0>>1]=2,0;case 13:case 14:case 13:case 14:return 0;case 16:case 8:return-G.h;case 9:return cb(G.h),-1;default:return-G.h}}catch(f){return"undefined"!==typeof FS&&f instanceof I||z(f),-f.u}},___syscall5:function(a,b){X=b;try{var c=D(Y()),d=Y(),f=Y();return V(c,d,f).fd}catch(g){return"undefined"!==typeof FS&&g instanceof I||z(g),-g.u}},___syscall54:function(a,b){X=b;try{var c=Z(),d=Y();switch(d){case 21509:case 21505:return c.tty?0:-G.C;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return c.tty?
0:-G.C;case 21519:if(!c.tty)return-G.C;var f=Y();return x[f>>2]=0;case 21520:return c.tty?-G.h:-G.C;case 21531:a=f=Y();if(!c.f.Ka)throw new I(G.C);return c.f.Ka(c,d,a);case 21523:return c.tty?0:-G.C;default:z("bad ioctl syscall "+d)}}catch(g){return"undefined"!==typeof FS&&g instanceof I||z(g),-g.u}},___syscall6:function(a,b){X=b;try{var c=Z();Pb(c);return 0}catch(d){return"undefined"!==typeof FS&&d instanceof I||z(d),-d.u}},___unlock:function(){},_abort:function(){e.abort()},_emscripten_memcpy_big:function(a,
b,c){A.set(A.subarray(b,b+c),a);return a},_gsf_request_file:function(a){return window.fileRequestCallback(a)},_llvm_exp2_f32:function(a){return Math.pow(2,a)},_localtime_r:function(a,b){fc();a=new Date(1E3*x[a>>2]);x[b>>2]=a.getSeconds();x[b+4>>2]=a.getMinutes();x[b+8>>2]=a.getHours();x[b+12>>2]=a.getDate();x[b+16>>2]=a.getMonth();x[b+20>>2]=a.getFullYear()-1900;x[b+24>>2]=a.getDay();var c=new Date(a.getFullYear(),0,1);x[b+28>>2]=(a.getTime()-c.getTime())/864E5|0;x[b+36>>2]=-(60*a.getTimezoneOffset());
var d=(new Date(2E3,6,1)).getTimezoneOffset();c=c.getTimezoneOffset();a=(d!=c&&a.getTimezoneOffset()==Math.min(c,d))|0;x[b+32>>2]=a;x[b+40>>2]=x[cc+(a?4:0)>>2];return b},_time:function(a){var b=Date.now()/1E3|0;a&&(x[a>>2]=b);return b},DYNAMICTOP_PTR:v,STACKTOP:Aa};var ic=e.asm(e.Fa,e.Ga,buffer);e.asm=ic;var Ra=e.__GLOBAL__sub_I_gsfplug_cpp=function(){return e.asm.__GLOBAL__sub_I_gsfplug_cpp.apply(null,arguments)};e.___cxa_can_catch=function(){return e.asm.___cxa_can_catch.apply(null,arguments)};
e.___cxa_is_pointer_type=function(){return e.asm.___cxa_is_pointer_type.apply(null,arguments)};e.___errno_location=function(){return e.asm.___errno_location.apply(null,arguments)};e._emu_compute_audio_samples=function(){return e.asm._emu_compute_audio_samples.apply(null,arguments)};e._emu_get_audio_buffer=function(){return e.asm._emu_get_audio_buffer.apply(null,arguments)};e._emu_get_audio_buffer_length=function(){return e.asm._emu_get_audio_buffer_length.apply(null,arguments)};
e._emu_get_current_position=function(){return e.asm._emu_get_current_position.apply(null,arguments)};e._emu_get_max_position=function(){return e.asm._emu_get_max_position.apply(null,arguments)};e._emu_get_sample_rate=function(){return e.asm._emu_get_sample_rate.apply(null,arguments)};e._emu_get_track_info=function(){return e.asm._emu_get_track_info.apply(null,arguments)};e._emu_init=function(){return e.asm._emu_init.apply(null,arguments)};
e._emu_seek_position=function(){return e.asm._emu_seek_position.apply(null,arguments)};e._emu_set_subsong=function(){return e.asm._emu_set_subsong.apply(null,arguments)};e._emu_setup=function(){return e.asm._emu_setup.apply(null,arguments)};e._emu_teardown=function(){return e.asm._emu_teardown.apply(null,arguments)};
var Ya=e._free=function(){return e.asm._free.apply(null,arguments)},C=e._malloc=function(){return e.asm._malloc.apply(null,arguments)},$a=e.setTempRet0=function(){return e.asm.setTempRet0.apply(null,arguments)};e.setThrew=function(){return e.asm.setThrew.apply(null,arguments)};var na=e.stackAlloc=function(){return e.asm.stackAlloc.apply(null,arguments)},ma=e.stackRestore=function(){return e.asm.stackRestore.apply(null,arguments)},la=e.stackSave=function(){return e.asm.stackSave.apply(null,arguments)};
e.dynCall_ii=function(){return e.asm.dynCall_ii.apply(null,arguments)};e.dynCall_iiii=function(){return e.asm.dynCall_iiii.apply(null,arguments)};e.dynCall_v=function(){return e.asm.dynCall_v.apply(null,arguments)};e.dynCall_vi=function(){return e.asm.dynCall_vi.apply(null,arguments)};e.dynCall_vii=function(){return e.asm.dynCall_vii.apply(null,arguments)};e.dynCall_viii=function(){return e.asm.dynCall_viii.apply(null,arguments)};e.dynCall_viiii=function(){return e.asm.dynCall_viiii.apply(null,arguments)};
e.asm=ic;e.ccall=function(a,b,c,d){var f=e["_"+a];assert(f,"Cannot call unknown function "+a+", make sure it is exported");var g=[];a=0;if(d)for(var h=0;h<d.length;h++){var p=ra[c[h]];p?(0===a&&(a=la()),g[h]=p(d[h])):g[h]=d[h]}c=f.apply(null,g);"string"===b&&(c=D(c));0!==a&&ma(a);return c};e.getMemory=function(a){return fa?Ka?C(a):ha(a):da(a)};e.Pointer_stringify=D;e.addRunDependency=Oa;e.removeRunDependency=Pa;e.FS_createFolder=Vb;e.FS_createPath=Wb;e.FS_createDataFile=Yb;
e.FS_createPreloadedFile=bc;e.FS_createLazyFile=ac;e.FS_createLink=Zb;e.FS_createDevice=W;e.FS_unlink=Mb;function t(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}t.prototype=Error();t.prototype.constructor=t;var jc=null;Na=function kc(){e.calledRun||lc();e.calledRun||(Na=kc)};
function lc(){function a(){if(!e.calledRun&&(e.calledRun=!0,!ka)){Ka||(Ka=!0,Ea(Ga));Ea(Ha);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var a=e.postRun.shift();Ja.unshift(a)}Ea(Ja)}}null===jc&&(jc=Date.now());if(!(0<E)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)La();Ea(Fa);0<E||e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},
1);a()},1)):a())}}e.run=lc;e.exit=function(a,b){if(!b||!e.noExitRuntime||0!==a){if(!e.noExitRuntime&&(ka=!0,Aa=void 0,Ea(Ia),e.onExit))e.onExit(a);r&&process.exit(a);e.quit(a,new t(a))}};function z(a){if(e.onAbort)e.onAbort(a);void 0!==a?(e.print(a),e.printErr(a),a=JSON.stringify(a)):a="";ka=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=z;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();e.noExitRuntime=!0;lc();
  return {
	Module: Module,  // expose original Module
  };
})(window.spp_backend_state_gsf);
/*
 gsf_adapter.js: Adapts "GSF decoder" backend to generic WebAudio/ScriptProcessor player.
 
 version 1.0
 
 	Copyright (C) 2018 Juergen Wothke

 LICENSE
 
* This library is distributed under the Mozilla Public License version 2.0. A copy of 
* the license is available in the distributed LICENSE file.
*/

GSFBackendAdapter = (function(){ var $this = function (modlandMode) {
		$this.base.call(this, backend_gsf.Module, 2);
		this._manualSetupComplete= true;
		this._undefined;
		this._currentPath;
		this._currentFile;
		
		// aka dumshit ftp.modland.com mode:
		this.modlandMode= (typeof modlandMode != 'undefined') ? modlandMode : false;
		this.originalFile= "";
		this.modlandMap= {};	// mapping of weird shit filenames used on modland 

		if (!backend_gsf.Module.notReady) {
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
			var current= this.getPlaybackPosition();
			if (pos < current) {
				// hack: for some reason backward seeking fails ('he: execution error') if "built-in"
				// file reload if used... 
				var ret = this.Module.ccall('emu_init', 'number', 
							['string', 'string'], 
							[ this._currentPath, this._currentFile]);
			}
			var v= ScriptNodePlayer.getInstance().getVolume();
			ScriptNodePlayer.getInstance().setVolume(0);	// suppress any output while reset is in progress
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
						this.modlandMap[output.replace(/^.*[\\\/]/, '')]= tmpPathFilenameArray[1].replace(/^.*[\\\/]/, '');	// needed to create FS expected by "amiga"
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
			var ret = this.Module.ccall('emu_init', 'number', 
								['string', 'string'], 
								[ path, filename]);

			if (ret == 0) {
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