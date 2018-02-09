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

var backend_PSX = (function(Module) {var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in e)e.hasOwnProperty(l)&&(k[l]=e[l]);e.arguments=[];e.thisProgram="./this.program";e.quit=function(a,b){throw b;};e.preRun=[];e.postRun=[];var m=!1,q=!1,r=!1,aa=!1;
if(e.ENVIRONMENT)if("WEB"===e.ENVIRONMENT)m=!0;else if("WORKER"===e.ENVIRONMENT)q=!0;else if("NODE"===e.ENVIRONMENT)r=!0;else if("SHELL"===e.ENVIRONMENT)aa=!0;else throw Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");else m="object"===typeof window,q="function"===typeof importScripts,r="object"===typeof process&&"function"===typeof require&&!m&&!q,aa=!m&&!r&&!q;
if(r){var ba,ca;e.read=function(a,b){ba||(ba=require("fs"));ca||(ca=require("path"));a=ca.normalize(a);a=ba.readFileSync(a);return b?a:a.toString()};e.readBinary=function(a){a=e.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(e.thisProgram=process.argv[1].replace(/\\/g,"/"));e.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=e);process.on("uncaughtException",function(a){if(!(a instanceof t))throw a;});process.on("unhandledRejection",
function(){process.exit(1)});e.inspect=function(){return"[Emscripten Module object]"}}else if(aa)"undefined"!=typeof read&&(e.read=function(a){return read(a)}),e.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?e.arguments=scriptArgs:"undefined"!=typeof arguments&&(e.arguments=arguments),"function"===typeof quit&&(e.quit=function(a){quit(a)});else if(m||q)e.read=function(a){var b=
new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},q&&(e.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),e.readAsync=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},"undefined"!=typeof arguments&&(e.arguments=arguments),e.setWindowTitle=
function(a){document.title=a};e.print="undefined"!==typeof console?console.log:"undefined"!==typeof print?print:null;e.printErr="undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn||e.print;e.print=e.print;e.printErr=e.printErr;for(l in k)k.hasOwnProperty(l)&&(e[l]=k[l]);k=void 0;function da(a){assert(!ea);var b=u;u=u+a+15&-16;return b}function fa(a){var b;b||(b=16);return Math.ceil(a/b)*b}var ha=0;function assert(a,b){a||w("Assertion failed: "+b)}
var na={stackSave:function(){ia()},stackRestore:function(){ja()},arrayToC:function(a){var b=ka(a.length);la.set(a,b);return b},stringToC:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=ka(c);ma(a,x,b,c)}return b}},oa={string:na.stringToC,array:na.arrayToC};
function qa(a,b){if(0===b||!a)return"";for(var c=0,d,f=0;;){d=x[a+f>>0];c|=d;if(0==d&&!b)break;f++;if(b&&f==b)break}b||(b=f);d="";if(128>c){for(;0<b;)c=String.fromCharCode.apply(String,x.subarray(a,a+Math.min(b,1024))),d=d?d+c:c,a+=1024,b-=1024;return d}return y(x,a)}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function y(a,b){for(var c=b;a[c];)++c;if(16<c-b&&a.subarray&&ra)return ra.decode(a.subarray(b,c));for(c="";;){var d=a[b++];if(!d)return c;if(d&128){var f=a[b++]&63;if(192==(d&224))c+=String.fromCharCode((d&31)<<6|f);else{var g=a[b++]&63;if(224==(d&240))d=(d&15)<<12|f<<6|g;else{var h=a[b++]&63;if(240==(d&248))d=(d&7)<<18|f<<12|g<<6|h;else{var n=a[b++]&63;if(248==(d&252))d=(d&3)<<24|f<<18|g<<12|h<<6|n;else{var p=a[b++]&63;d=(d&1)<<30|f<<24|g<<18|h<<12|n<<6|p}}}65536>d?c+=String.fromCharCode(d):(d-=
65536,c+=String.fromCharCode(55296|d>>10,56320|d&1023))}}else c+=String.fromCharCode(d)}}
function ma(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);55296<=h&&57343>=h&&(h=65536+((h&1023)<<10)|a.charCodeAt(++g)&1023);if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(2097151>=h){if(c+3>=d)break;b[c++]=240|h>>18}else{if(67108863>=h){if(c+4>=d)break;b[c++]=248|h>>24}else{if(c+5>=d)break;b[c++]=252|h>>30;b[c++]=128|h>>24&63}b[c++]=128|h>>18&63}b[c++]=128|
h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0;return c-f}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");var buffer,la,x,sa,z;function ta(){e.HEAP8=la=new Int8Array(buffer);e.HEAP16=sa=new Int16Array(buffer);e.HEAP32=z=new Int32Array(buffer);e.HEAPU8=x=new Uint8Array(buffer);e.HEAPU16=new Uint16Array(buffer);e.HEAPU32=new Uint32Array(buffer);e.HEAPF32=new Float32Array(buffer);e.HEAPF64=new Float64Array(buffer)}var ua,u,ea,va,wa,xa,ya,A;ua=u=va=wa=xa=ya=A=0;ea=!1;
function za(){w("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+C+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}var Aa=e.TOTAL_STACK||5242880,C=e.TOTAL_MEMORY||67108864;C<Aa&&e.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+C+"! (TOTAL_STACK="+Aa+")");
e.buffer?buffer=e.buffer:("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(e.wasmMemory=new WebAssembly.Memory({initial:C/65536,maximum:C/65536}),buffer=e.wasmMemory.buffer):buffer=new ArrayBuffer(C),e.buffer=buffer);ta();z[0]=1668509029;sa[1]=25459;if(115!==x[2]||99!==x[3])throw"Runtime error: expected the system to be little-endian!";
function D(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Nc;"number"===typeof c?void 0===b.W?e.dynCall_v(c):e.dynCall_vi(c,b.W):c(void 0===b.W?null:b.W)}}}var Ba=[],Ca=[],Da=[],Ea=[],Fa=[],Ga=!1;function Ha(){var a=e.preRun.shift();Ba.unshift(a)}var E=0,Ia=null,F=null;function La(){E++;e.monitorRunDependencies&&e.monitorRunDependencies(E)}
function Ma(){E--;e.monitorRunDependencies&&e.monitorRunDependencies(E);if(0==E&&(null!==Ia&&(clearInterval(Ia),Ia=null),F)){var a=F;F=null;a()}}e.preloadedImages={};e.preloadedAudios={};function Na(a){return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}
(function(){function a(){try{if(e.wasmBinary)return new Uint8Array(e.wasmBinary);if(e.readBinary)return e.readBinary(f);throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";}catch(B){w(B)}}function b(){return e.wasmBinary||!m&&!q||"function"!==typeof fetch?new Promise(function(b){b(a())}):fetch(f,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+f+
"'";return a.arrayBuffer()}).catch(function(){return a()})}function c(a){function c(a){n=a.exports;if(n.memory){a=n.memory;var b=e.buffer;a.byteLength<b.byteLength&&e.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");b=new Int8Array(b);(new Int8Array(a)).set(b);e.buffer=buffer=a;ta()}e.asm=n;e.usingWasm=!0;Ma()}function d(a){c(a.instance)}function g(a){b().then(function(a){return WebAssembly.instantiate(a,h)}).then(a).catch(function(a){e.printErr("failed to asynchronously prepare wasm: "+
a);w(a)})}if("object"!==typeof WebAssembly)return e.printErr("no native wasm support detected"),!1;if(!(e.wasmMemory instanceof WebAssembly.Memory))return e.printErr("no native wasm Memory in use"),!1;a.memory=e.wasmMemory;h.global={NaN:NaN,Infinity:Infinity};h["global.Math"]=Math;h.env=a;La();if(e.instantiateWasm)try{return e.instantiateWasm(h,c)}catch(L){return e.printErr("Module.instantiateWasm callback failed with error: "+L),!1}e.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||
Na(f)||"function"!==typeof fetch?g(d):WebAssembly.instantiateStreaming(fetch(f,{credentials:"same-origin"}),h).then(d).catch(function(a){e.printErr("wasm streaming compile failed: "+a);e.printErr("falling back to ArrayBuffer instantiation");g(d)});return{}}var d="psx.wast",f="psx.wasm",g="psx.temp.asm.js";"function"===typeof e.locateFile&&(Na(d)||(d=e.locateFile(d)),Na(f)||(f=e.locateFile(f)),Na(g)||(g=e.locateFile(g)));var h={global:null,env:null,asm2wasm:{"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}},
parent:e},n=null;e.asmPreload=e.asm;var p=e.reallocBuffer;e.reallocBuffer=function(a){if("asmjs"===v)var b=p(a);else a:{var c=e.usingWasm?65536:16777216;0<a%c&&(a+=c-a%c);c=e.buffer.byteLength;if(e.usingWasm)try{b=-1!==e.wasmMemory.grow((a-c)/65536)?e.buffer=e.wasmMemory.buffer:null;break a}catch(pa){b=null;break a}b=void 0}return b};var v="";e.asm=function(a,b){if(!b.table){a=e.wasmTableSize;void 0===a&&(a=1024);var d=e.wasmMaxTableSize;b.table="object"===typeof WebAssembly&&"function"===typeof WebAssembly.Table?
void 0!==d?new WebAssembly.Table({initial:a,maximum:d,element:"anyfunc"}):new WebAssembly.Table({initial:a,element:"anyfunc"}):Array(a);e.wasmTable=b.table}b.memoryBase||(b.memoryBase=e.STATIC_BASE);b.tableBase||(b.tableBase=0);(b=c(b))||w("no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods");return b}})();ua=1024;u=ua+197632;Ca.push();e.STATIC_BASE=ua;e.STATIC_BUMP=197632;u+=16;
var G={B:1,u:2,xc:3,tb:4,A:5,fa:6,Ma:7,Rb:8,L:9,$a:10,ba:11,Hc:11,va:12,R:13,mb:14,cc:15,S:16,da:17,Ic:18,U:19,V:20,H:21,h:22,Mb:23,ua:24,D:25,Ec:26,nb:27,Zb:28,M:29,uc:30,Fb:31,nc:32,jb:33,rc:34,Vb:42,qb:43,ab:44,wb:45,xb:46,yb:47,Eb:48,Fc:49,Pb:50,vb:51,gb:35,Sb:37,Sa:52,Va:53,Jc:54,Nb:55,Wa:56,Xa:57,hb:35,Ya:59,ac:60,Qb:61,Bc:62,$b:63,Wb:64,Xb:65,tc:66,Tb:67,Pa:68,yc:69,bb:70,oc:71,Hb:72,kb:73,Ua:74,ic:76,Ta:77,sc:78,zb:79,Ab:80,Db:81,Cb:82,Bb:83,bc:38,ea:39,Ib:36,T:40,jc:95,mc:96,fb:104,Ob:105,
Qa:97,qc:91,fc:88,Yb:92,vc:108,eb:111,Na:98,cb:103,Lb:101,Jb:100,Cc:110,ob:112,pb:113,sb:115,Ra:114,ib:89,Gb:90,pc:93,wc:94,Oa:99,Kb:102,ub:106,dc:107,Dc:109,Gc:87,lb:122,zc:116,hc:95,Ub:123,rb:84,kc:75,Za:125,ec:131,lc:130,Ac:86},Oa={0:"Success",1:"Not super-user",2:"No such file or directory",3:"No such process",4:"Interrupted system call",5:"I/O error",6:"No such device or address",7:"Arg list too long",8:"Exec format error",9:"Bad file number",10:"No children",11:"No more processes",12:"Not enough core",
13:"Permission denied",14:"Bad address",15:"Block device required",16:"Mount device busy",17:"File exists",18:"Cross-device link",19:"No such device",20:"Not a directory",21:"Is a directory",22:"Invalid argument",23:"Too many open files in system",24:"Too many open files",25:"Not a typewriter",26:"Text file busy",27:"File too large",28:"No space left on device",29:"Illegal seek",30:"Read only file system",31:"Too many links",32:"Broken pipe",33:"Math arg out of domain of func",34:"Math result not representable",
35:"File locking deadlock error",36:"File or path name too long",37:"No record locks available",38:"Function not implemented",39:"Directory not empty",40:"Too many symbolic links",42:"No message of desired type",43:"Identifier removed",44:"Channel number out of range",45:"Level 2 not synchronized",46:"Level 3 halted",47:"Level 3 reset",48:"Link number out of range",49:"Protocol driver not attached",50:"No CSI structure available",51:"Level 2 halted",52:"Invalid exchange",53:"Invalid request descriptor",
54:"Exchange full",55:"No anode",56:"Invalid request code",57:"Invalid slot",59:"Bad font file fmt",60:"Device not a stream",61:"No data (for no delay io)",62:"Timer expired",63:"Out of streams resources",64:"Machine is not on the network",65:"Package not installed",66:"The object is remote",67:"The link has been severed",68:"Advertise error",69:"Srmount error",70:"Communication error on send",71:"Protocol error",72:"Multihop attempted",73:"Cross mount point (not really error)",74:"Trying to read unreadable message",
75:"Value too large for defined data type",76:"Given log. name not unique",77:"f.d. invalid for this operation",78:"Remote address changed",79:"Can   access a needed shared lib",80:"Accessing a corrupted shared lib",81:".lib section in a.out corrupted",82:"Attempting to link in too many libs",83:"Attempting to exec a shared library",84:"Illegal byte sequence",86:"Streams pipe error",87:"Too many users",88:"Socket operation on non-socket",89:"Destination address required",90:"Message too long",91:"Protocol wrong type for socket",
92:"Protocol not available",93:"Unknown protocol",94:"Socket type not supported",95:"Not supported",96:"Protocol family not supported",97:"Address family not supported by protocol family",98:"Address already in use",99:"Address not available",100:"Network interface is not configured",101:"Network is unreachable",102:"Connection reset by network",103:"Connection aborted",104:"Connection reset by peer",105:"No buffer space available",106:"Socket is already connected",107:"Socket is not connected",108:"Can't send after socket shutdown",
109:"Too many references",110:"Connection timed out",111:"Connection refused",112:"Host is down",113:"Host is unreachable",114:"Socket already connected",115:"Connection already in progress",116:"Stale file handle",122:"Quota exceeded",123:"No medium (in tape drive)",125:"Operation canceled",130:"Previous owner died",131:"State not recoverable"};function Pa(a){e.___errno_location&&(z[e.___errno_location()>>2]=a);return a}
function Qa(a,b){for(var c=0,d=a.length-1;0<=d;d--){var f=a[d];"."===f?a.splice(d,1):".."===f?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(b)for(;c;c--)a.unshift("..");return a}function Ra(a){var b="/"===a.charAt(0),c="/"===a.substr(-1);(a=Qa(a.split("/").filter(function(a){return!!a}),!b).join("/"))||b||(a=".");a&&c&&(a+="/");return(b?"/":"")+a}
function Sa(a){var b=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);a=b[0];b=b[1];if(!a&&!b)return".";b&&(b=b.substr(0,b.length-1));return a+b}function Ta(a){if("/"===a)return"/";var b=a.lastIndexOf("/");return-1===b?a:a.substr(b+1)}function Ua(){var a=Array.prototype.slice.call(arguments,0);return Ra(a.join("/"))}function H(a,b){return Ra(a+"/"+b)}
function Va(){for(var a="",b=!1,c=arguments.length-1;-1<=c&&!b;c--){b=0<=c?arguments[c]:"/";if("string"!==typeof b)throw new TypeError("Arguments to path.resolve must be strings");if(!b)return"";a=b+"/"+a;b="/"===b.charAt(0)}a=Qa(a.split("/").filter(function(a){return!!a}),!b).join("/");return(b?"/":"")+a||"."}var Wa=[];function Xa(a,b){Wa[a]={input:[],output:[],G:b};Ya(a,Za)}
var Za={open:function(a){var b=Wa[a.node.rdev];if(!b)throw new I(G.U);a.tty=b;a.seekable=!1},close:function(a){a.tty.G.flush(a.tty)},flush:function(a){a.tty.G.flush(a.tty)},read:function(a,b,c,d){if(!a.tty||!a.tty.G.oa)throw new I(G.fa);for(var f=0,g=0;g<d;g++){try{var h=a.tty.G.oa(a.tty)}catch(n){throw new I(G.A);}if(void 0===h&&0===f)throw new I(G.ba);if(null===h||void 0===h)break;f++;b[c+g]=h}f&&(a.node.timestamp=Date.now());return f},write:function(a,b,c,d){if(!a.tty||!a.tty.G.$)throw new I(G.fa);
for(var f=0;f<d;f++)try{a.tty.G.$(a.tty,b[c+f])}catch(g){throw new I(G.A);}d&&(a.node.timestamp=Date.now());return f}},ab={oa:function(a){if(!a.input.length){var b=null;if(r){var c=new Buffer(256),d=0,f=process.stdin.fd;if("win32"!=process.platform){var g=!1;try{f=fs.openSync("/dev/stdin","r"),g=!0}catch(h){}}try{d=fs.readSync(f,c,0,256,null)}catch(h){if(-1!=h.toString().indexOf("EOF"))d=0;else throw h;}g&&fs.closeSync(f);0<d?b=c.slice(0,d).toString("utf-8"):b=null}else"undefined"!=typeof window&&
"function"==typeof window.prompt?(b=window.prompt("Input: "),null!==b&&(b+="\n")):"function"==typeof readline&&(b=readline(),null!==b&&(b+="\n"));if(!b)return null;a.input=$a(b)}return a.input.shift()},$:function(a,b){null===b||10===b?(e.print(y(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&0<a.output.length&&(e.print(y(a.output,0)),a.output=[])}},bb={$:function(a,b){null===b||10===b?(e.printErr(y(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&
0<a.output.length&&(e.printErr(y(a.output,0)),a.output=[])}},J={s:null,j:function(){return J.createNode(null,"/",16895,0)},createNode:function(a,b,c,d){if(24576===(c&61440)||4096===(c&61440))throw new I(G.B);J.s||(J.s={dir:{node:{m:J.c.m,i:J.c.i,lookup:J.c.lookup,I:J.c.I,rename:J.c.rename,unlink:J.c.unlink,rmdir:J.c.rmdir,readdir:J.c.readdir,symlink:J.c.symlink},stream:{v:J.f.v}},file:{node:{m:J.c.m,i:J.c.i},stream:{v:J.f.v,read:J.f.read,write:J.f.write,ga:J.f.ga,ra:J.f.ra,ta:J.f.ta}},link:{node:{m:J.c.m,
i:J.c.i,readlink:J.c.readlink},stream:{}},ja:{node:{m:J.c.m,i:J.c.i},stream:cb}});c=db(a,b,c,d);K(c.mode)?(c.c=J.s.dir.node,c.f=J.s.dir.stream,c.b={}):32768===(c.mode&61440)?(c.c=J.s.file.node,c.f=J.s.file.stream,c.g=0,c.b=null):40960===(c.mode&61440)?(c.c=J.s.link.node,c.f=J.s.link.stream):8192===(c.mode&61440)&&(c.c=J.s.ja.node,c.f=J.s.ja.stream);c.timestamp=Date.now();a&&(a.b[b]=c);return c},Ca:function(a){if(a.b&&a.b.subarray){for(var b=[],c=0;c<a.g;++c)b.push(a.b[c]);return b}return a.b},Oc:function(a){return a.b?
a.b.subarray?a.b.subarray(0,a.g):new Uint8Array(a.b):new Uint8Array},ka:function(a,b){a.b&&a.b.subarray&&b>a.b.length&&(a.b=J.Ca(a),a.g=a.b.length);if(!a.b||a.b.subarray){var c=a.b?a.b.length:0;c>=b||(b=Math.max(b,c*(1048576>c?2:1.125)|0),0!=c&&(b=Math.max(b,256)),c=a.b,a.b=new Uint8Array(b),0<a.g&&a.b.set(c.subarray(0,a.g),0))}else for(!a.b&&0<b&&(a.b=[]);a.b.length<b;)a.b.push(0)},Ha:function(a,b){if(a.g!=b)if(0==b)a.b=null,a.g=0;else{if(!a.b||a.b.subarray){var c=a.b;a.b=new Uint8Array(new ArrayBuffer(b));
c&&a.b.set(c.subarray(0,Math.min(b,a.g)))}else if(a.b||(a.b=[]),a.b.length>b)a.b.length=b;else for(;a.b.length<b;)a.b.push(0);a.g=b}},c:{m:function(a){var b={};b.dev=8192===(a.mode&61440)?a.id:1;b.ino=a.id;b.mode=a.mode;b.nlink=1;b.uid=0;b.gid=0;b.rdev=a.rdev;K(a.mode)?b.size=4096:32768===(a.mode&61440)?b.size=a.g:40960===(a.mode&61440)?b.size=a.link.length:b.size=0;b.atime=new Date(a.timestamp);b.mtime=new Date(a.timestamp);b.ctime=new Date(a.timestamp);b.C=4096;b.blocks=Math.ceil(b.size/b.C);return b},
i:function(a,b){void 0!==b.mode&&(a.mode=b.mode);void 0!==b.timestamp&&(a.timestamp=b.timestamp);void 0!==b.size&&J.Ha(a,b.size)},lookup:function(){throw eb[G.u];},I:function(a,b,c,d){return J.createNode(a,b,c,d)},rename:function(a,b,c){if(K(a.mode)){try{var d=M(b,c)}catch(g){}if(d)for(var f in d.b)throw new I(G.ea);}delete a.parent.b[a.name];a.name=c;b.b[c]=a;a.parent=b},unlink:function(a,b){delete a.b[b]},rmdir:function(a,b){var c=M(a,b),d;for(d in c.b)throw new I(G.ea);delete a.b[b]},readdir:function(a){var b=
[".",".."],c;for(c in a.b)a.b.hasOwnProperty(c)&&b.push(c);return b},symlink:function(a,b,c){a=J.createNode(a,b,41471,0);a.link=c;return a},readlink:function(a){if(40960!==(a.mode&61440))throw new I(G.h);return a.link}},f:{read:function(a,b,c,d,f){var g=a.node.b;if(f>=a.node.g)return 0;a=Math.min(a.node.g-f,d);assert(0<=a);if(8<a&&g.subarray)b.set(g.subarray(f,f+a),c);else for(d=0;d<a;d++)b[c+d]=g[f+d];return a},write:function(a,b,c,d,f,g){if(!d)return 0;a=a.node;a.timestamp=Date.now();if(b.subarray&&
(!a.b||a.b.subarray)){if(g)return a.b=b.subarray(c,c+d),a.g=d;if(0===a.g&&0===f)return a.b=new Uint8Array(b.subarray(c,c+d)),a.g=d;if(f+d<=a.g)return a.b.set(b.subarray(c,c+d),f),d}J.ka(a,f+d);if(a.b.subarray&&b.subarray)a.b.set(b.subarray(c,c+d),f);else for(g=0;g<d;g++)a.b[f+g]=b[c+g];a.g=Math.max(a.g,f+d);return d},v:function(a,b,c){1===c?b+=a.position:2===c&&32768===(a.node.mode&61440)&&(b+=a.node.g);if(0>b)throw new I(G.h);return b},ga:function(a,b,c){J.ka(a.node,b+c);a.node.g=Math.max(a.node.g,
b+c)},ra:function(a,b,c,d,f,g,h){if(32768!==(a.node.mode&61440))throw new I(G.U);c=a.node.b;if(h&2||c.buffer!==b&&c.buffer!==b.buffer){if(0<f||f+d<a.node.g)c.subarray?c=c.subarray(f,f+d):c=Array.prototype.slice.call(c,f,f+d);a=!0;d=fb(d);if(!d)throw new I(G.va);b.set(c,d)}else a=!1,d=c.byteOffset;return{Qc:d,Kc:a}},ta:function(a,b,c,d,f){if(32768!==(a.node.mode&61440))throw new I(G.U);if(f&2)return 0;J.f.write(a,b,0,d,c,!1);return 0}}},N={P:!1,Ka:function(){N.P=!!process.platform.match(/^win/);var a=
process.binding("constants");a.fs&&(a=a.fs);N.la={1024:a.O_APPEND,64:a.O_CREAT,128:a.O_EXCL,0:a.O_RDONLY,2:a.O_RDWR,4096:a.O_SYNC,512:a.O_TRUNC,1:a.O_WRONLY}},ha:function(a){return Buffer.Mc?Buffer.from(a):new Buffer(a)},j:function(a){assert(r);return N.createNode(null,"/",N.na(a.Z.root),0)},createNode:function(a,b,c){if(!K(c)&&32768!==(c&61440)&&40960!==(c&61440))throw new I(G.h);a=db(a,b,c);a.c=N.c;a.f=N.f;return a},na:function(a){try{var b=fs.lstatSync(a);N.P&&(b.mode=b.mode|(b.mode&292)>>2)}catch(c){if(!c.code)throw c;
throw new I(G[c.code]);}return b.mode},l:function(a){for(var b=[];a.parent!==a;)b.push(a.name),a=a.parent;b.push(a.j.Z.root);b.reverse();return Ua.apply(null,b)},Ba:function(a){a&=-2656257;var b=0,c;for(c in N.la)a&c&&(b|=N.la[c],a^=c);if(a)throw new I(G.h);return b},c:{m:function(a){a=N.l(a);try{var b=fs.lstatSync(a)}catch(c){if(!c.code)throw c;throw new I(G[c.code]);}N.P&&!b.C&&(b.C=4096);N.P&&!b.blocks&&(b.blocks=(b.size+b.C-1)/b.C|0);return{dev:b.dev,ino:b.ino,mode:b.mode,nlink:b.nlink,uid:b.uid,
gid:b.gid,rdev:b.rdev,size:b.size,atime:b.atime,mtime:b.mtime,ctime:b.ctime,C:b.C,blocks:b.blocks}},i:function(a,b){var c=N.l(a);try{void 0!==b.mode&&(fs.chmodSync(c,b.mode),a.mode=b.mode),void 0!==b.size&&fs.truncateSync(c,b.size)}catch(d){if(!d.code)throw d;throw new I(G[d.code]);}},lookup:function(a,b){var c=H(N.l(a),b);c=N.na(c);return N.createNode(a,b,c)},I:function(a,b,c,d){a=N.createNode(a,b,c,d);b=N.l(a);try{K(a.mode)?fs.mkdirSync(b,a.mode):fs.writeFileSync(b,"",{mode:a.mode})}catch(f){if(!f.code)throw f;
throw new I(G[f.code]);}return a},rename:function(a,b,c){a=N.l(a);b=H(N.l(b),c);try{fs.renameSync(a,b)}catch(d){if(!d.code)throw d;throw new I(G[d.code]);}},unlink:function(a,b){a=H(N.l(a),b);try{fs.unlinkSync(a)}catch(c){if(!c.code)throw c;throw new I(G[c.code]);}},rmdir:function(a,b){a=H(N.l(a),b);try{fs.rmdirSync(a)}catch(c){if(!c.code)throw c;throw new I(G[c.code]);}},readdir:function(a){a=N.l(a);try{return fs.readdirSync(a)}catch(b){if(!b.code)throw b;throw new I(G[b.code]);}},symlink:function(a,
b,c){a=H(N.l(a),b);try{fs.symlinkSync(c,a)}catch(d){if(!d.code)throw d;throw new I(G[d.code]);}},readlink:function(a){var b=N.l(a);try{return b=fs.readlinkSync(b),b=gb.relative(gb.resolve(a.j.Z.root),b)}catch(c){if(!c.code)throw c;throw new I(G[c.code]);}}},f:{open:function(a){var b=N.l(a.node);try{32768===(a.node.mode&61440)&&(a.K=fs.openSync(b,N.Ba(a.flags)))}catch(c){if(!c.code)throw c;throw new I(G[c.code]);}},close:function(a){try{32768===(a.node.mode&61440)&&a.K&&fs.closeSync(a.K)}catch(b){if(!b.code)throw b;
throw new I(G[b.code]);}},read:function(a,b,c,d,f){if(0===d)return 0;try{return fs.readSync(a.K,N.ha(b.buffer),c,d,f)}catch(g){throw new I(G[g.code]);}},write:function(a,b,c,d,f){try{return fs.writeSync(a.K,N.ha(b.buffer),c,d,f)}catch(g){throw new I(G[g.code]);}},v:function(a,b,c){if(1===c)b+=a.position;else if(2===c&&32768===(a.node.mode&61440))try{b+=fs.fstatSync(a.K).size}catch(d){throw new I(G[d.code]);}if(0>b)throw new I(G.h);return b}}};u+=16;u+=16;u+=16;
var hb=null,ib={},O=[],jb=1,P=null,kb=!0,Q={},I=null,eb={};
function R(a,b){a=Va("/",a);b=b||{};if(!a)return{path:"",node:null};var c={ma:!0,aa:0},d;for(d in c)void 0===b[d]&&(b[d]=c[d]);if(8<b.aa)throw new I(G.T);a=Qa(a.split("/").filter(function(a){return!!a}),!1);var f=hb;c="/";for(d=0;d<a.length;d++){var g=d===a.length-1;if(g&&b.parent)break;f=M(f,a[d]);c=H(c,a[d]);f.J&&(!g||g&&b.ma)&&(f=f.J.root);if(!g||b.O)for(g=0;40960===(f.mode&61440);)if(f=lb(c),c=Va(Sa(c),f),f=R(c,{aa:b.aa}).node,40<g++)throw new I(G.T);}return{path:c,node:f}}
function S(a){for(var b;;){if(a===a.parent)return a=a.j.sa,b?"/"!==a[a.length-1]?a+"/"+b:a+b:a;b=b?a.name+"/"+b:a.name;a=a.parent}}function mb(a,b){for(var c=0,d=0;d<b.length;d++)c=(c<<5)-c+b.charCodeAt(d)|0;return(a+c>>>0)%P.length}function nb(a){var b=mb(a.parent.id,a.name);a.F=P[b];P[b]=a}function M(a,b){var c;if(c=(c=ob(a,"x"))?c:a.c.lookup?0:G.R)throw new I(c,a);for(c=P[mb(a.id,b)];c;c=c.F){var d=c.name;if(c.parent.id===a.id&&d===b)return c}return a.c.lookup(a,b)}
function db(a,b,c,d){pb||(pb=function(a,b,c,d){a||(a=this);this.parent=a;this.j=a.j;this.J=null;this.id=jb++;this.name=b;this.mode=c;this.c={};this.f={};this.rdev=d},pb.prototype={},Object.defineProperties(pb.prototype,{read:{get:function(){return 365===(this.mode&365)},set:function(a){a?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146===(this.mode&146)},set:function(a){a?this.mode|=146:this.mode&=-147}},Fa:{get:function(){return K(this.mode)}},Ea:{get:function(){return 8192===(this.mode&
61440)}}}));a=new pb(a,b,c,d);nb(a);return a}function K(a){return 16384===(a&61440)}var qb={r:0,rs:1052672,"r+":2,w:577,wx:705,xw:705,"w+":578,"wx+":706,"xw+":706,a:1089,ax:1217,xa:1217,"a+":1090,"ax+":1218,"xa+":1218};function rb(a){var b=["r","w","rw"][a&3];a&512&&(b+="w");return b}function ob(a,b){if(kb)return 0;if(-1===b.indexOf("r")||a.mode&292){if(-1!==b.indexOf("w")&&!(a.mode&146)||-1!==b.indexOf("x")&&!(a.mode&73))return G.R}else return G.R;return 0}
function sb(a,b){try{return M(a,b),G.da}catch(c){}return ob(a,"wx")}function tb(a){var b=4096;for(a=a||0;a<=b;a++)if(!O[a])return a;throw new I(G.ua);}function ub(a,b){vb||(vb=function(){},vb.prototype={},Object.defineProperties(vb.prototype,{object:{get:function(){return this.node},set:function(a){this.node=a}}}));var c=new vb,d;for(d in a)c[d]=a[d];a=c;b=tb(b);a.fd=b;return O[b]=a}var cb={open:function(a){a.f=ib[a.node.rdev].f;a.f.open&&a.f.open(a)},v:function(){throw new I(G.M);}};
function Ya(a,b){ib[a]={f:b}}function wb(a,b){var c="/"===b,d=!b;if(c&&hb)throw new I(G.S);if(!c&&!d){var f=R(b,{ma:!1});b=f.path;f=f.node;if(f.J)throw new I(G.S);if(!K(f.mode))throw new I(G.V);}b={type:a,Z:{},sa:b,Ga:[]};a=a.j(b);a.j=b;b.root=a;c?hb=a:f&&(f.J=b,f.j&&f.j.Ga.push(b))}function xb(a,b,c){var d=R(a,{parent:!0}).node;a=Ta(a);if(!a||"."===a||".."===a)throw new I(G.h);var f=sb(d,a);if(f)throw new I(f);if(!d.c.I)throw new I(G.B);return d.c.I(d,a,b,c)}
function T(a,b){return xb(a,(void 0!==b?b:511)&1023|16384,0)}function yb(a,b,c){"undefined"===typeof c&&(c=b,b=438);return xb(a,b|8192,c)}function zb(a,b){if(!Va(a))throw new I(G.u);var c=R(b,{parent:!0}).node;if(!c)throw new I(G.u);b=Ta(b);var d=sb(c,b);if(d)throw new I(d);if(!c.c.symlink)throw new I(G.B);return c.c.symlink(c,b,a)}
function Ab(a){var b=R(a,{parent:!0}).node,c=Ta(a),d=M(b,c);a:{try{var f=M(b,c)}catch(h){f=h.o;break a}var g=ob(b,"wx");f=g?g:K(f.mode)?G.H:0}if(f)throw new I(f);if(!b.c.unlink)throw new I(G.B);if(d.J)throw new I(G.S);try{Q.willDeletePath&&Q.willDeletePath(a)}catch(h){console.log("FS.trackingDelegate['willDeletePath']('"+a+"') threw an exception: "+h.message)}b.c.unlink(b,c);b=mb(d.parent.id,d.name);if(P[b]===d)P[b]=d.F;else for(b=P[b];b;){if(b.F===d){b.F=d.F;break}b=b.F}try{if(Q.onDeletePath)Q.onDeletePath(a)}catch(h){console.log("FS.trackingDelegate['onDeletePath']('"+
a+"') threw an exception: "+h.message)}}function lb(a){a=R(a).node;if(!a)throw new I(G.u);if(!a.c.readlink)throw new I(G.h);return Va(S(a.parent),a.c.readlink(a))}function Bb(a,b){var c;"string"===typeof a?c=R(a,{O:!0}).node:c=a;if(!c.c.i)throw new I(G.B);c.c.i(c,{mode:b&4095|c.mode&-4096,timestamp:Date.now()})}
function U(a,b,c,d){if(""===a)throw new I(G.u);if("string"===typeof b){var f=qb[b];if("undefined"===typeof f)throw Error("Unknown file open mode: "+b);b=f}c=b&64?("undefined"===typeof c?438:c)&4095|32768:0;if("object"===typeof a)var g=a;else{a=Ra(a);try{g=R(a,{O:!(b&131072)}).node}catch(n){}}f=!1;if(b&64)if(g){if(b&128)throw new I(G.da);}else g=xb(a,c,0),f=!0;if(!g)throw new I(G.u);8192===(g.mode&61440)&&(b&=-513);if(b&65536&&!K(g.mode))throw new I(G.V);if(!f&&(c=g?40960===(g.mode&61440)?G.T:K(g.mode)&&
("r"!==rb(b)||b&512)?G.H:ob(g,rb(b)):G.u))throw new I(c);if(b&512){c=g;var h;"string"===typeof c?h=R(c,{O:!0}).node:h=c;if(!h.c.i)throw new I(G.B);if(K(h.mode))throw new I(G.H);if(32768!==(h.mode&61440))throw new I(G.h);if(c=ob(h,"w"))throw new I(c);h.c.i(h,{size:0,timestamp:Date.now()})}b&=-641;d=ub({node:g,path:S(g),flags:b,seekable:!0,position:0,f:g.f,La:[],error:!1},d);d.f.open&&d.f.open(d);!e.logReadFiles||b&1||(Cb||(Cb={}),a in Cb||(Cb[a]=1,e.printErr("read file: "+a)));try{Q.onOpenFile&&(g=
0,1!==(b&2097155)&&(g|=1),0!==(b&2097155)&&(g|=2),Q.onOpenFile(a,g))}catch(n){console.log("FS.trackingDelegate['onOpenFile']('"+a+"', flags) threw an exception: "+n.message)}return d}function Db(a){a.X&&(a.X=null);try{a.f.close&&a.f.close(a)}catch(b){throw b;}finally{O[a.fd]=null}}function Eb(a,b,c){if(!a.seekable||!a.f.v)throw new I(G.M);a.position=a.f.v(a,b,c);a.La=[];return a.position}
function Fb(a,b,c,d,f,g){if(0>d||0>f)throw new I(G.h);if(0===(a.flags&2097155))throw new I(G.L);if(K(a.node.mode))throw new I(G.H);if(!a.f.write)throw new I(G.h);a.flags&1024&&(f=Eb(a,0,2));var h=!0;if("undefined"===typeof f)f=a.position,h=!1;else if(!a.seekable)throw new I(G.M);b=a.f.write(a,b,c,d,f,g);h||(a.position+=b);try{if(a.path&&Q.onWriteToFile)Q.onWriteToFile(a.path)}catch(n){console.log("FS.trackingDelegate['onWriteToFile']('"+path+"') threw an exception: "+n.message)}return b}
function Gb(){I||(I=function(a,b){this.node=b;this.Ja=function(a){this.o=a;for(var b in G)if(G[b]===a){this.code=b;break}};this.Ja(a);this.message=Oa[a];this.stack&&Object.defineProperty(this,"stack",{value:Error().stack,writable:!0})},I.prototype=Error(),I.prototype.constructor=I,[G.u].forEach(function(a){eb[a]=new I(a);eb[a].stack="<generic error, no stack>"}))}var Hb;function Ib(a,b){var c=0;a&&(c|=365);b&&(c|=146);return c}
function Jb(a,b,c,d){a=H("string"===typeof a?a:S(a),b);return T(a,Ib(c,d))}function Kb(a,b){a="string"===typeof a?a:S(a);for(b=b.split("/").reverse();b.length;){var c=b.pop();if(c){var d=H(a,c);try{T(d)}catch(f){}a=d}}return d}function Lb(a,b,c,d){a=H("string"===typeof a?a:S(a),b);c=Ib(c,d);return xb(a,(void 0!==c?c:438)&4095|32768,0)}
function Mb(a,b,c,d,f,g){a=b?H("string"===typeof a?a:S(a),b):a;d=Ib(d,f);f=xb(a,(void 0!==d?d:438)&4095|32768,0);if(c){if("string"===typeof c){a=Array(c.length);b=0;for(var h=c.length;b<h;++b)a[b]=c.charCodeAt(b);c=a}Bb(f,d|146);a=U(f,"w");Fb(a,c,0,c.length,0,g);Db(a);Bb(f,d)}return f}
function V(a,b,c,d){a=H("string"===typeof a?a:S(a),b);b=Ib(!!c,!!d);V.qa||(V.qa=64);var f=V.qa++<<8|0;Ya(f,{open:function(a){a.seekable=!1},close:function(){d&&d.buffer&&d.buffer.length&&d(10)},read:function(a,b,d,f){for(var g=0,h=0;h<f;h++){try{var n=c()}catch(Ka){throw new I(G.A);}if(void 0===n&&0===g)throw new I(G.ba);if(null===n||void 0===n)break;g++;b[d+h]=n}g&&(a.node.timestamp=Date.now());return g},write:function(a,b,c,f){for(var g=0;g<f;g++)try{d(b[c+g])}catch(B){throw new I(G.A);}f&&(a.node.timestamp=
Date.now());return g}});return yb(a,b,f)}function Nb(a,b,c){a=H("string"===typeof a?a:S(a),b);return zb(c,a)}
function Ob(a){if(a.Ea||a.Fa||a.link||a.b)return!0;var b=!0;if("undefined"!==typeof XMLHttpRequest)throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(e.read)try{a.b=$a(e.read(a.url)),a.g=a.b.length}catch(c){b=!1}else throw Error("Cannot load without read() or XMLHttpRequest.");b||Pa(G.A);return b}
function Pb(a,b,c,d,f){function g(){this.Y=!1;this.N=[]}g.prototype.get=function(a){if(!(a>this.length-1||0>a)){var b=a%this.chunkSize;return this.pa(a/this.chunkSize|0)[b]}};g.prototype.Ia=function(a){this.pa=a};g.prototype.ia=function(){var a=new XMLHttpRequest;a.open("HEAD",c,!1);a.send(null);if(!(200<=a.status&&300>a.status||304===a.status))throw Error("Couldn't load "+c+". Status: "+a.status);var b=Number(a.getResponseHeader("Content-length")),d,f=(d=a.getResponseHeader("Accept-Ranges"))&&"bytes"===
d;a=(d=a.getResponseHeader("Content-Encoding"))&&"gzip"===d;var g=1048576;f||(g=b);var h=this;h.Ia(function(a){var d=a*g,f=(a+1)*g-1;f=Math.min(f,b-1);if("undefined"===typeof h.N[a]){var n=h.N;if(d>f)throw Error("invalid range ("+d+", "+f+") or no bytes requested!");if(f>b-1)throw Error("only "+b+" bytes available! programmer error!");var p=new XMLHttpRequest;p.open("GET",c,!1);b!==g&&p.setRequestHeader("Range","bytes="+d+"-"+f);"undefined"!=typeof Uint8Array&&(p.responseType="arraybuffer");p.overrideMimeType&&
p.overrideMimeType("text/plain; charset=x-user-defined");p.send(null);if(!(200<=p.status&&300>p.status||304===p.status))throw Error("Couldn't load "+c+". Status: "+p.status);d=void 0!==p.response?new Uint8Array(p.response||[]):$a(p.responseText||"");n[a]=d}if("undefined"===typeof h.N[a])throw Error("doXHR failed!");return h.N[a]});if(a||!b)g=b=1,g=b=this.pa(0).length,console.log("LazyFiles on gzip forces download of the whole file when length is accessed");this.ya=b;this.wa=g;this.Y=!0};if("undefined"!==
typeof XMLHttpRequest){if(!q)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var h=new g;Object.defineProperties(h,{length:{get:function(){this.Y||this.ia();return this.ya}},chunkSize:{get:function(){this.Y||this.ia();return this.wa}}});var n=void 0}else n=c,h=void 0;var p=Lb(a,b,d,f);h?p.b=h:n&&(p.b=null,p.url=n);Object.defineProperties(p,{g:{get:function(){return this.b.length}}});var v={};Object.keys(p.f).forEach(function(a){var b=
p.f[a];v[a]=function(){if(!Ob(p))throw new I(G.A);return b.apply(null,arguments)}});v.read=function(a,b,c,d,f){if(!Ob(p))throw new I(G.A);a=a.node.b;if(f>=a.length)return 0;d=Math.min(a.length-f,d);assert(0<=d);if(a.slice)for(var g=0;g<d;g++)b[c+g]=a[f+g];else for(g=0;g<d;g++)b[c+g]=a.get(f+g);return d};p.f=v;return p}
function Qb(a,b,c,d,f,g,h,n,p,v){function B(c){function B(c){v&&v();n||Mb(a,b,c,d,f,p);g&&g();Ma()}var L=!1;e.preloadPlugins.forEach(function(a){!L&&a.canHandle(Z)&&(a.handle(c,Z,B,function(){h&&h();Ma()}),L=!0)});L||B(c)}Browser.Pc();var Z=b?Va(H(a,b)):a;La();"string"==typeof c?Browser.Lc(c,function(a){B(a)},h):B(c)}var FS={},pb,vb,Cb;
function Rb(a,b){try{var c=R(a,{O:!0}).node;if(!c)throw new I(G.u);if(!c.c.m)throw new I(G.B);var d=c.c.m(c)}catch(f){if(f&&f.node&&Ra(a)!==Ra(S(f.node)))return-G.V;throw f;}z[b>>2]=d.dev;z[b+4>>2]=0;z[b+8>>2]=d.ino;z[b+12>>2]=d.mode;z[b+16>>2]=d.nlink;z[b+20>>2]=d.uid;z[b+24>>2]=d.gid;z[b+28>>2]=d.rdev;z[b+32>>2]=0;z[b+36>>2]=d.size;z[b+40>>2]=4096;z[b+44>>2]=d.blocks;z[b+48>>2]=d.atime.getTime()/1E3|0;z[b+52>>2]=0;z[b+56>>2]=d.mtime.getTime()/1E3|0;z[b+60>>2]=0;z[b+64>>2]=d.ctime.getTime()/1E3|
0;z[b+68>>2]=0;z[b+72>>2]=d.ino;return 0}var W=0;function X(){W+=4;return z[W-4>>2]}function Y(){var a=O[X()];if(!a)throw new I(G.L);return a}Gb();P=Array(4096);wb(J,"/");T("/tmp");T("/home");T("/home/web_user");
(function(){T("/dev");Ya(259,{read:function(){return 0},write:function(a,b,f,g){return g}});yb("/dev/null",259);Xa(1280,ab);Xa(1536,bb);yb("/dev/tty",1280);yb("/dev/tty1",1536);if("undefined"!==typeof crypto){var a=new Uint8Array(1);var b=function(){crypto.getRandomValues(a);return a[0]}}else b=r?function(){return require("crypto").randomBytes(1)[0]}:function(){return 256*Math.random()|0};V("/dev","random",b);V("/dev","urandom",b);T("/dev/shm");T("/dev/shm/tmp")})();T("/proc");T("/proc/self");T("/proc/self/fd");
wb({j:function(){var a=db("/proc/self","fd",16895,73);a.c={lookup:function(a,c){var b=O[+c];if(!b)throw new I(G.L);a={parent:null,j:{sa:"fake"},c:{readlink:function(){return b.path}}};return a.parent=a}};return a}},"/proc/self/fd");
Ca.unshift(function(){if(!e.noFSInit&&!Hb){assert(!Hb,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");Hb=!0;Gb();e.stdin=e.stdin;e.stdout=e.stdout;e.stderr=e.stderr;e.stdin?V("/dev","stdin",e.stdin):zb("/dev/tty","/dev/stdin");e.stdout?V("/dev","stdout",null,e.stdout):zb("/dev/tty","/dev/stdout");e.stderr?V("/dev","stderr",null,e.stderr):zb("/dev/tty1","/dev/stderr");var a=
U("/dev/stdin","r");assert(0===a.fd,"invalid handle for stdin ("+a.fd+")");a=U("/dev/stdout","w");assert(1===a.fd,"invalid handle for stdout ("+a.fd+")");a=U("/dev/stderr","w");assert(2===a.fd,"invalid handle for stderr ("+a.fd+")")}});Da.push(function(){kb=!1});Ea.push(function(){Hb=!1;var a=e._fflush;a&&a(0);for(a=0;a<O.length;a++){var b=O[a];b&&Db(b)}});e.FS_createFolder=Jb;e.FS_createPath=Kb;e.FS_createDataFile=Mb;e.FS_createPreloadedFile=Qb;e.FS_createLazyFile=Pb;e.FS_createLink=Nb;
e.FS_createDevice=V;e.FS_unlink=Ab;Ca.unshift(function(){});Ea.push(function(){});if(r){var fs=require("fs"),gb=require("path");N.Ka()}A=da(4);va=wa=fa(u);xa=va+Aa;ya=fa(xa);z[A>>2]=ya;ea=!0;function $a(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:2097151>=d?b+4:67108863>=d?b+5:b+6}b=Array(b+1);a=ma(a,b,0,b.length);b.length=a;return b}e.wasmTableSize=76;e.wasmMaxTableSize=76;
e.za={};
e.Aa={abort:w,enlargeMemory:function(){za()},getTotalMemory:function(){return C},abortOnCannotGrowMemory:za,___lock:function(){},___setErrNo:Pa,___syscall140:function(a,b){W=b;try{var c=Y();X();var d=X(),f=X(),g=X();Eb(c,d,g);z[f>>2]=c.position;c.X&&0===d&&0===g&&(c.X=null);return 0}catch(h){return"undefined"!==typeof FS&&h instanceof I||w(h),-h.o}},___syscall145:function(a,b){W=b;try{var c=Y(),d=X();a:{var f=X();for(b=a=0;b<f;b++){var g=z[d+(8*b+4)>>2],h=c,n=z[d+8*b>>2],p=g,v=void 0,B=la;if(0>p||
0>v)throw new I(G.h);if(1===(h.flags&2097155))throw new I(G.L);if(K(h.node.mode))throw new I(G.H);if(!h.f.read)throw new I(G.h);var Z=!0;if("undefined"===typeof v)v=h.position,Z=!1;else if(!h.seekable)throw new I(G.M);var Ka=h.f.read(h,B,n,p,v);Z||(h.position+=Ka);var pa=Ka;if(0>pa){var L=-1;break a}a+=pa;if(pa<g)break}L=a}return L}catch(Ja){return"undefined"!==typeof FS&&Ja instanceof I||w(Ja),-Ja.o}},___syscall146:function(a,b){W=b;try{var c=Y(),d=X();a:{var f=X();for(b=a=0;b<f;b++){var g=Fb(c,
la,z[d+8*b>>2],z[d+(8*b+4)>>2],void 0);if(0>g){var h=-1;break a}a+=g}h=a}return h}catch(n){return"undefined"!==typeof FS&&n instanceof I||w(n),-n.o}},___syscall195:function(a,b){W=b;try{var c=qa(X()),d=X();return Rb(c,d)}catch(f){return"undefined"!==typeof FS&&f instanceof I||w(f),-f.o}},___syscall197:function(a,b){W=b;try{var c=Y(),d=X();return Rb(c.path,d)}catch(f){return"undefined"!==typeof FS&&f instanceof I||w(f),-f.o}},___syscall221:function(a,b){W=b;try{var c=Y();switch(X()){case 0:var d=X();
return 0>d?-G.h:U(c.path,c.flags,0,d).fd;case 1:case 2:return 0;case 3:return c.flags;case 4:return d=X(),c.flags|=d,0;case 12:case 12:return d=X(),sa[d+0>>1]=2,0;case 13:case 14:case 13:case 14:return 0;case 16:case 8:return-G.h;case 9:return Pa(G.h),-1;default:return-G.h}}catch(f){return"undefined"!==typeof FS&&f instanceof I||w(f),-f.o}},___syscall5:function(a,b){W=b;try{var c=qa(X()),d=X(),f=X();return U(c,d,f).fd}catch(g){return"undefined"!==typeof FS&&g instanceof I||w(g),-g.o}},___syscall54:function(a,
b){W=b;try{var c=Y(),d=X();switch(d){case 21509:case 21505:return c.tty?0:-G.D;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return c.tty?0:-G.D;case 21519:if(!c.tty)return-G.D;var f=X();return z[f>>2]=0;case 21520:return c.tty?-G.h:-G.D;case 21531:a=f=X();if(!c.f.Da)throw new I(G.D);return c.f.Da(c,d,a);case 21523:return c.tty?0:-G.D;default:w("bad ioctl syscall "+d)}}catch(g){return"undefined"!==typeof FS&&g instanceof I||w(g),-g.o}},___syscall6:function(a,b){W=b;try{var c=Y();
Db(c);return 0}catch(d){return"undefined"!==typeof FS&&d instanceof I||w(d),-d.o}},___unlock:function(){},_abort:function(){e.abort()},_emscripten_memcpy_big:function(a,b,c){x.set(x.subarray(b,b+c),a);return a},DYNAMICTOP_PTR:A,STACKTOP:wa};var Sb=e.asm(e.za,e.Aa,buffer);e.asm=Sb;e.___errno_location=function(){return e.asm.___errno_location.apply(null,arguments)};e._emu_compute_audio_samples=function(){return e.asm._emu_compute_audio_samples.apply(null,arguments)};
e._emu_get_audio_buffer=function(){return e.asm._emu_get_audio_buffer.apply(null,arguments)};e._emu_get_audio_buffer_length=function(){return e.asm._emu_get_audio_buffer_length.apply(null,arguments)};e._emu_get_current_position=function(){return e.asm._emu_get_current_position.apply(null,arguments)};e._emu_get_max_position=function(){return e.asm._emu_get_max_position.apply(null,arguments)};e._emu_get_sample_rate=function(){return e.asm._emu_get_sample_rate.apply(null,arguments)};
e._emu_get_track_info=function(){return e.asm._emu_get_track_info.apply(null,arguments)};e._emu_init=function(){return e.asm._emu_init.apply(null,arguments)};e._emu_seek_position=function(){return e.asm._emu_seek_position.apply(null,arguments)};e._emu_set_subsong=function(){return e.asm._emu_set_subsong.apply(null,arguments)};e._emu_setup=function(){return e.asm._emu_setup.apply(null,arguments)};e._emu_teardown=function(){return e.asm._emu_teardown.apply(null,arguments)};
e._free=function(){return e.asm._free.apply(null,arguments)};var fb=e._malloc=function(){return e.asm._malloc.apply(null,arguments)},ka=e.stackAlloc=function(){return e.asm.stackAlloc.apply(null,arguments)},ja=e.stackRestore=function(){return e.asm.stackRestore.apply(null,arguments)},ia=e.stackSave=function(){return e.asm.stackSave.apply(null,arguments)};e.asm=Sb;
e.ccall=function(a,b,c,d){var f=e["_"+a];assert(f,"Cannot call unknown function "+a+", make sure it is exported");var g=[];a=0;if(d)for(var h=0;h<d.length;h++){var n=oa[c[h]];n?(0===a&&(a=ia()),g[h]=n(d[h])):g[h]=d[h]}c=f.apply(null,g);"string"===b&&(c=qa(c));0!==a&&ja(a);return c};e.getMemory=function(a){if(ea)if(Ga)var b=fb(a);else{assert(A);b=z[A>>2];a=b+a+15&-16;z[A>>2]=a;if(a=a>=C)za(),a=!0;a&&(z[A>>2]=b,b=0)}else b=da(a);return b};e.Pointer_stringify=qa;e.addRunDependency=La;
e.removeRunDependency=Ma;e.FS_createFolder=Jb;e.FS_createPath=Kb;e.FS_createDataFile=Mb;e.FS_createPreloadedFile=Qb;e.FS_createLazyFile=Pb;e.FS_createLink=Nb;e.FS_createDevice=V;e.FS_unlink=Ab;function t(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}t.prototype=Error();t.prototype.constructor=t;var Tb=null;F=function Ub(){e.calledRun||Vb();e.calledRun||(F=Ub)};
function Vb(){function a(){if(!e.calledRun&&(e.calledRun=!0,!ha)){Ga||(Ga=!0,D(Ca));D(Da);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var a=e.postRun.shift();Fa.unshift(a)}D(Fa)}}null===Tb&&(Tb=Date.now());if(!(0<E)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ha();D(Ba);0<E||e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},
1);a()},1)):a())}}e.run=Vb;e.exit=function(a,b){if(!b||!e.noExitRuntime||0!==a){if(!e.noExitRuntime&&(ha=!0,wa=void 0,D(Ea),e.onExit))e.onExit(a);r&&process.exit(a);e.quit(a,new t(a))}};function w(a){if(e.onAbort)e.onAbort(a);void 0!==a?(e.print(a),e.printErr(a),a=JSON.stringify(a)):a="";ha=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=w;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();e.noExitRuntime=!0;Vb();
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

PSXBackendAdapter = (function(){ var $this = function (presetBIOS) {
		$this.base.call(this, backend_PSX.Module, 2);
		this._manualSetupComplete= presetBIOS?false:true;
		this._undefined;
		this._currentPath;
		this._currentFile;
	}; 
	// HighlyExperimental's sample buffer contains 2-byte integer sample data (i.e. 
	// must be rescaled) of 2 interleaved channels
	extend(EmsHEAP16BackendAdapter, $this, {
		uploadFile: function(filename, options) {
			if (options.setBIOS === 'undefined') {
				console.log("unsupported uploadFile('"+filename+")' call" );
				return -1;
			} else {
				// if not explicitly set here.. then 'emu_init' will go for some default later..
				if (this.Module.ccall('emu_setup', 'number', ['string'], [filename]) ==0) {
					this._manualSetupComplete= true;
					if (!(this._observer === 'undefined')) this._observer.handleBackendEvent();
					return 0;
				} else {
					console.log("installBIOS failed");
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
			this.Module.ccall('emu_seek_position', 'number', ['number'], [pos]);
		},
		getPathAndFilename: function(filename) {		
			var sp = filename.split('/');	// avoid folders
			var fn = sp[sp.length-1];					
			var path= '/'; // make it flat... filename.substring(0, filename.lastIndexOf("/"));	
			if (path.lenght) path= path+"/";
			return [path, fn];
		},
		registerFileData: function(pathFilenameArray, data) {
			return this.registerEmscriptenFileData(pathFilenameArray, data);
		},
		loadMusicData: function(sampleRate, path, filename, data, options) {
			var ret = this.Module.ccall('emu_init', 'number', 
								['string', 'string'], 
								[ path, filename]);

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