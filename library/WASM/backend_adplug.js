// create separate namespace for all the Emscripten stuff.. otherwise naming clashes may occur especially when 
// optimizing using closure compiler..
window.spp_backend_state_ADPLUG= {
	notReady: true,
	adapterCallback: function(){}	// overwritten later	
};
window.spp_backend_state_ADPLUG["onRuntimeInitialized"] = function() {	// emscripten callback needed in case async init is used (e.g. for WASM)
	this.notReady= false;
	this.adapterCallback();
}.bind(window.spp_backend_state_ADPLUG);

var backend_AdPlug = (function(Module) {var e;e||(e=typeof Module !== 'undefined' ? Module : {});var aa={},k;for(k in e)e.hasOwnProperty(k)&&(aa[k]=e[k]);e.arguments=[];e.thisProgram="./this.program";e.quit=function(a,b){throw b;};e.preRun=[];e.postRun=[];var l=!1,m=!1,p=!1,ba=!1;
if(e.ENVIRONMENT)if("WEB"===e.ENVIRONMENT)l=!0;else if("WORKER"===e.ENVIRONMENT)m=!0;else if("NODE"===e.ENVIRONMENT)p=!0;else if("SHELL"===e.ENVIRONMENT)ba=!0;else throw Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");else l="object"===typeof window,m="function"===typeof importScripts,p="object"===typeof process&&"function"===typeof require&&!l&&!m,ba=!l&&!p&&!m;
if(p){var ca,da;e.read=function(a,b){ca||(ca=require("fs"));da||(da=require("path"));a=da.normalize(a);a=ca.readFileSync(a);return b?a:a.toString()};e.readBinary=function(a){a=e.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(e.thisProgram=process.argv[1].replace(/\\/g,"/"));e.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=e);process.on("uncaughtException",function(a){if(!(a instanceof ea))throw a;});process.on("unhandledRejection",
function(){process.exit(1)});e.inspect=function(){return"[Emscripten Module object]"}}else if(ba)"undefined"!=typeof read&&(e.read=function(a){return read(a)}),e.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?e.arguments=scriptArgs:"undefined"!=typeof arguments&&(e.arguments=arguments),"function"===typeof quit&&(e.quit=function(a){quit(a)});else if(l||m)e.read=function(a){var b=
new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},m&&(e.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),e.readAsync=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},"undefined"!=typeof arguments&&(e.arguments=arguments),e.setWindowTitle=
function(a){document.title=a};e.print="undefined"!==typeof console?console.log:"undefined"!==typeof print?print:null;e.printErr="undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn||e.print;e.print=e.print;e.printErr=e.printErr;for(k in aa)aa.hasOwnProperty(k)&&(e[k]=aa[k]);aa=void 0;function fa(a){assert(!ha);var b=q;q=q+a+15&-16;return b}function ia(a){var b;b||(b=16);return Math.ceil(a/b)*b}var ja=0;function assert(a,b){a||w("Assertion failed: "+b)}
var oa={stackSave:function(){ka()},stackRestore:function(){la()},arrayToC:function(a){var b=ma(a.length);y.set(a,b);return b},stringToC:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=ma(c);na(a,z,b,c)}return b}},pa={string:oa.stringToC,array:oa.arrayToC};
function A(a,b){if(0===b||!a)return"";for(var c=0,d,f=0;;){d=z[a+f>>0];c|=d;if(0==d&&!b)break;f++;if(b&&f==b)break}b||(b=f);d="";if(128>c){for(;0<b;)c=String.fromCharCode.apply(String,z.subarray(a,a+Math.min(b,1024))),d=d?d+c:c,a+=1024,b-=1024;return d}return qa(z,a)}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function qa(a,b){for(var c=b;a[c];)++c;if(16<c-b&&a.subarray&&ra)return ra.decode(a.subarray(b,c));for(c="";;){var d=a[b++];if(!d)return c;if(d&128){var f=a[b++]&63;if(192==(d&224))c+=String.fromCharCode((d&31)<<6|f);else{var g=a[b++]&63;if(224==(d&240))d=(d&15)<<12|f<<6|g;else{var h=a[b++]&63;if(240==(d&248))d=(d&7)<<18|f<<12|g<<6|h;else{var n=a[b++]&63;if(248==(d&252))d=(d&3)<<24|f<<18|g<<12|h<<6|n;else{var r=a[b++]&63;d=(d&1)<<30|f<<24|g<<18|h<<12|n<<6|r}}}65536>d?c+=String.fromCharCode(d):(d-=
65536,c+=String.fromCharCode(55296|d>>10,56320|d&1023))}}else c+=String.fromCharCode(d)}}
function na(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);55296<=h&&57343>=h&&(h=65536+((h&1023)<<10)|a.charCodeAt(++g)&1023);if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(2097151>=h){if(c+3>=d)break;b[c++]=240|h>>18}else{if(67108863>=h){if(c+4>=d)break;b[c++]=248|h>>24}else{if(c+5>=d)break;b[c++]=252|h>>30;b[c++]=128|h>>24&63}b[c++]=128|h>>18&63}b[c++]=128|
h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0;return c-f}function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:2097151>=d?b+4:67108863>=d?b+5:b+6}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");var buffer,y,z,ta,B;
function ua(){e.HEAP8=y=new Int8Array(buffer);e.HEAP16=ta=new Int16Array(buffer);e.HEAP32=B=new Int32Array(buffer);e.HEAPU8=z=new Uint8Array(buffer);e.HEAPU16=new Uint16Array(buffer);e.HEAPU32=new Uint32Array(buffer);e.HEAPF32=new Float32Array(buffer);e.HEAPF64=new Float64Array(buffer)}var va,q,ha,wa,xa,ya,za,C;va=q=wa=xa=ya=za=C=0;ha=!1;
function Aa(){w("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+D+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}var Ba=e.TOTAL_STACK||5242880,D=e.TOTAL_MEMORY||33554432;D<Ba&&e.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+D+"! (TOTAL_STACK="+Ba+")");
e.buffer?buffer=e.buffer:("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(e.wasmMemory=new WebAssembly.Memory({initial:D/65536,maximum:D/65536}),buffer=e.wasmMemory.buffer):buffer=new ArrayBuffer(D),e.buffer=buffer);ua();B[0]=1668509029;ta[1]=25459;if(115!==z[2]||99!==z[3])throw"Runtime error: expected the system to be little-endian!";
function Ca(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.T;"number"===typeof c?void 0===b.ba?e.dynCall_v(c):e.dynCall_vi(c,b.ba):c(void 0===b.ba?null:b.ba)}}}var Da=[],Ea=[],Fa=[],Ga=[],Ha=[],Ia=!1;function Ja(){var a=e.preRun.shift();Da.unshift(a)}var E=0,Ka=null,La=null;function Ma(){E++;e.monitorRunDependencies&&e.monitorRunDependencies(E)}
function Na(){E--;e.monitorRunDependencies&&e.monitorRunDependencies(E);if(0==E&&(null!==Ka&&(clearInterval(Ka),Ka=null),La)){var a=La;La=null;a()}}e.preloadedImages={};e.preloadedAudios={};function Oa(a){return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}
(function(){function a(){try{if(e.wasmBinary)return new Uint8Array(e.wasmBinary);if(e.readBinary)return e.readBinary(f);throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";}catch(x){w(x)}}function b(){return e.wasmBinary||!l&&!m||"function"!==typeof fetch?new Promise(function(b){b(a())}):fetch(f,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+f+
"'";return a.arrayBuffer()}).catch(function(){return a()})}function c(a){function c(a){n=a.exports;if(n.memory){a=n.memory;var b=e.buffer;a.byteLength<b.byteLength&&e.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");b=new Int8Array(b);(new Int8Array(a)).set(b);e.buffer=buffer=a;ua()}e.asm=n;e.usingWasm=!0;Na()}function d(a){c(a.instance)}function u(a){b().then(function(a){return WebAssembly.instantiate(a,h)}).then(a).catch(function(a){e.printErr("failed to asynchronously prepare wasm: "+
a);w(a)})}if("object"!==typeof WebAssembly)return e.printErr("no native wasm support detected"),!1;if(!(e.wasmMemory instanceof WebAssembly.Memory))return e.printErr("no native wasm Memory in use"),!1;a.memory=e.wasmMemory;h.global={NaN:NaN,Infinity:Infinity};h["global.Math"]=Math;h.env=a;Ma();if(e.instantiateWasm)try{return e.instantiateWasm(h,c)}catch(t){return e.printErr("Module.instantiateWasm callback failed with error: "+t),!1}e.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||
Oa(f)||"function"!==typeof fetch?u(d):WebAssembly.instantiateStreaming(fetch(f,{credentials:"same-origin"}),h).then(d).catch(function(a){e.printErr("wasm streaming compile failed: "+a);e.printErr("falling back to ArrayBuffer instantiation");u(d)});return{}}var d="adplug.wast",f="adplug.wasm",g="adplug.temp.asm.js";"function"===typeof e.locateFile&&(Oa(d)||(d=e.locateFile(d)),Oa(f)||(f=e.locateFile(f)),Oa(g)||(g=e.locateFile(g)));var h={global:null,env:null,asm2wasm:{"f64-rem":function(a,b){return a%
b},"debugger":function(){debugger}},parent:e},n=null;e.asmPreload=e.asm;var r=e.reallocBuffer;e.reallocBuffer=function(a){if("asmjs"===v)var b=r(a);else a:{var c=e.usingWasm?65536:16777216;0<a%c&&(a+=c-a%c);c=e.buffer.byteLength;if(e.usingWasm)try{b=-1!==e.wasmMemory.grow((a-c)/65536)?e.buffer=e.wasmMemory.buffer:null;break a}catch(u){b=null;break a}b=void 0}return b};var v="";e.asm=function(a,b){if(!b.table){a=e.wasmTableSize;void 0===a&&(a=1024);var d=e.wasmMaxTableSize;b.table="object"===typeof WebAssembly&&
"function"===typeof WebAssembly.Table?void 0!==d?new WebAssembly.Table({initial:a,maximum:d,element:"anyfunc"}):new WebAssembly.Table({initial:a,element:"anyfunc"}):Array(a);e.wasmTable=b.table}b.memoryBase||(b.memoryBase=e.STATIC_BASE);b.tableBase||(b.tableBase=0);(b=c(b))||w("no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods");return b}})();va=1024;q=va+65344;
Ea.push({T:function(){Pa()}},{T:function(){Qa()}},{T:function(){Ra()}},{T:function(){Sa()}});e.STATIC_BASE=va;e.STATIC_BUMP=65344;q+=16;function Ta(){return!!Ta.o}
var F={F:1,A:2,Kc:3,Gb:4,D:5,na:6,Za:7,dc:8,P:9,nb:10,ja:11,Uc:11,Ea:12,Y:13,zb:14,qc:15,Z:16,ka:17,Vc:18,aa:19,la:20,L:21,h:22,Zb:23,Da:24,I:25,Rc:26,Ab:27,mc:28,R:29,Hc:30,Sb:31,Ac:32,wb:33,Ec:34,ic:42,Db:43,ob:44,Jb:45,Kb:46,Lb:47,Rb:48,Sc:49,bc:50,Ib:51,tb:35,ec:37,fb:52,ib:53,Wc:54,$b:55,jb:56,kb:57,ub:35,lb:59,oc:60,cc:61,Oc:62,nc:63,jc:64,kc:65,Gc:66,fc:67,bb:68,Lc:69,pb:70,Bc:71,Ub:72,xb:73,hb:74,vc:76,gb:77,Fc:78,Mb:79,Nb:80,Qb:81,Pb:82,Ob:83,pc:38,ma:39,Vb:36,$:40,wc:95,zc:96,sb:104,ac:105,
cb:97,Dc:91,tc:88,lc:92,Ic:108,rb:111,$a:98,qb:103,Yb:101,Wb:100,Pc:110,Bb:112,Cb:113,Fb:115,eb:114,vb:89,Tb:90,Cc:93,Jc:94,ab:99,Xb:102,Hb:106,rc:107,Qc:109,Tc:87,yb:122,Mc:116,uc:95,hc:123,Eb:84,xc:75,mb:125,sc:131,yc:130,Nc:86};function Ua(a){e.___errno_location&&(B[e.___errno_location()>>2]=a);return a}
var Va={0:"Success",1:"Not super-user",2:"No such file or directory",3:"No such process",4:"Interrupted system call",5:"I/O error",6:"No such device or address",7:"Arg list too long",8:"Exec format error",9:"Bad file number",10:"No children",11:"No more processes",12:"Not enough core",13:"Permission denied",14:"Bad address",15:"Block device required",16:"Mount device busy",17:"File exists",18:"Cross-device link",19:"No such device",20:"Not a directory",21:"Is a directory",22:"Invalid argument",23:"Too many open files in system",
24:"Too many open files",25:"Not a typewriter",26:"Text file busy",27:"File too large",28:"No space left on device",29:"Illegal seek",30:"Read only file system",31:"Too many links",32:"Broken pipe",33:"Math arg out of domain of func",34:"Math result not representable",35:"File locking deadlock error",36:"File or path name too long",37:"No record locks available",38:"Function not implemented",39:"Directory not empty",40:"Too many symbolic links",42:"No message of desired type",43:"Identifier removed",
44:"Channel number out of range",45:"Level 2 not synchronized",46:"Level 3 halted",47:"Level 3 reset",48:"Link number out of range",49:"Protocol driver not attached",50:"No CSI structure available",51:"Level 2 halted",52:"Invalid exchange",53:"Invalid request descriptor",54:"Exchange full",55:"No anode",56:"Invalid request code",57:"Invalid slot",59:"Bad font file fmt",60:"Device not a stream",61:"No data (for no delay io)",62:"Timer expired",63:"Out of streams resources",64:"Machine is not on the network",
65:"Package not installed",66:"The object is remote",67:"The link has been severed",68:"Advertise error",69:"Srmount error",70:"Communication error on send",71:"Protocol error",72:"Multihop attempted",73:"Cross mount point (not really error)",74:"Trying to read unreadable message",75:"Value too large for defined data type",76:"Given log. name not unique",77:"f.d. invalid for this operation",78:"Remote address changed",79:"Can   access a needed shared lib",80:"Accessing a corrupted shared lib",81:".lib section in a.out corrupted",
82:"Attempting to link in too many libs",83:"Attempting to exec a shared library",84:"Illegal byte sequence",86:"Streams pipe error",87:"Too many users",88:"Socket operation on non-socket",89:"Destination address required",90:"Message too long",91:"Protocol wrong type for socket",92:"Protocol not available",93:"Unknown protocol",94:"Socket type not supported",95:"Not supported",96:"Protocol family not supported",97:"Address family not supported by protocol family",98:"Address already in use",99:"Address not available",
100:"Network interface is not configured",101:"Network is unreachable",102:"Connection reset by network",103:"Connection aborted",104:"Connection reset by peer",105:"No buffer space available",106:"Socket is already connected",107:"Socket is not connected",108:"Can't send after socket shutdown",109:"Too many references",110:"Connection timed out",111:"Connection refused",112:"Host is down",113:"Host is unreachable",114:"Socket already connected",115:"Connection already in progress",116:"Stale file handle",
122:"Quota exceeded",123:"No medium (in tape drive)",125:"Operation canceled",130:"Previous owner died",131:"State not recoverable"};function Wa(a,b){for(var c=0,d=a.length-1;0<=d;d--){var f=a[d];"."===f?a.splice(d,1):".."===f?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(b)for(;c;c--)a.unshift("..");return a}function Xa(a){var b="/"===a.charAt(0),c="/"===a.substr(-1);(a=Wa(a.split("/").filter(function(a){return!!a}),!b).join("/"))||b||(a=".");a&&c&&(a+="/");return(b?"/":"")+a}
function Ya(a){var b=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);a=b[0];b=b[1];if(!a&&!b)return".";b&&(b=b.substr(0,b.length-1));return a+b}function Za(a){if("/"===a)return"/";var b=a.lastIndexOf("/");return-1===b?a:a.substr(b+1)}function $a(){var a=Array.prototype.slice.call(arguments,0);return Xa(a.join("/"))}function G(a,b){return Xa(a+"/"+b)}
function ab(){for(var a="",b=!1,c=arguments.length-1;-1<=c&&!b;c--){b=0<=c?arguments[c]:"/";if("string"!==typeof b)throw new TypeError("Arguments to path.resolve must be strings");if(!b)return"";a=b+"/"+a;b="/"===b.charAt(0)}a=Wa(a.split("/").filter(function(a){return!!a}),!b).join("/");return(b?"/":"")+a||"."}var bb=[];function db(a,b){bb[a]={input:[],output:[],K:b};eb(a,fb)}
var fb={open:function(a){var b=bb[a.node.rdev];if(!b)throw new H(F.aa);a.tty=b;a.seekable=!1},close:function(a){a.tty.K.flush(a.tty)},flush:function(a){a.tty.K.flush(a.tty)},read:function(a,b,c,d){if(!a.tty||!a.tty.K.wa)throw new H(F.na);for(var f=0,g=0;g<d;g++){try{var h=a.tty.K.wa(a.tty)}catch(n){throw new H(F.D);}if(void 0===h&&0===f)throw new H(F.ja);if(null===h||void 0===h)break;f++;b[c+g]=h}f&&(a.node.timestamp=Date.now());return f},write:function(a,b,c,d){if(!a.tty||!a.tty.K.ha)throw new H(F.na);
for(var f=0;f<d;f++)try{a.tty.K.ha(a.tty,b[c+f])}catch(g){throw new H(F.D);}d&&(a.node.timestamp=Date.now());return f}},hb={wa:function(a){if(!a.input.length){var b=null;if(p){var c=new Buffer(256),d=0,f=process.stdin.fd;if("win32"!=process.platform){var g=!1;try{f=fs.openSync("/dev/stdin","r"),g=!0}catch(h){}}try{d=fs.readSync(f,c,0,256,null)}catch(h){if(-1!=h.toString().indexOf("EOF"))d=0;else throw h;}g&&fs.closeSync(f);0<d?b=c.slice(0,d).toString("utf-8"):b=null}else"undefined"!=typeof window&&
"function"==typeof window.prompt?(b=window.prompt("Input: "),null!==b&&(b+="\n")):"function"==typeof readline&&(b=readline(),null!==b&&(b+="\n"));if(!b)return null;a.input=gb(b,!0)}return a.input.shift()},ha:function(a,b){null===b||10===b?(e.print(qa(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&0<a.output.length&&(e.print(qa(a.output,0)),a.output=[])}},ib={ha:function(a,b){null===b||10===b?(e.printErr(qa(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&
0<a.output.length&&(e.printErr(qa(a.output,0)),a.output=[])}},I={s:null,l:function(){return I.createNode(null,"/",16895,0)},createNode:function(a,b,c,d){if(24576===(c&61440)||4096===(c&61440))throw new H(F.F);I.s||(I.s={dir:{node:{v:I.c.v,j:I.c.j,lookup:I.c.lookup,M:I.c.M,rename:I.c.rename,unlink:I.c.unlink,rmdir:I.c.rmdir,readdir:I.c.readdir,symlink:I.c.symlink},stream:{B:I.f.B}},file:{node:{v:I.c.v,j:I.c.j},stream:{B:I.f.B,read:I.f.read,write:I.f.write,oa:I.f.oa,Aa:I.f.Aa,V:I.f.V}},link:{node:{v:I.c.v,
j:I.c.j,readlink:I.c.readlink},stream:{}},ra:{node:{v:I.c.v,j:I.c.j},stream:jb}});c=kb(a,b,c,d);J(c.mode)?(c.c=I.s.dir.node,c.f=I.s.dir.stream,c.b={}):32768===(c.mode&61440)?(c.c=I.s.file.node,c.f=I.s.file.stream,c.g=0,c.b=null):40960===(c.mode&61440)?(c.c=I.s.link.node,c.f=I.s.link.stream):8192===(c.mode&61440)&&(c.c=I.s.ra.node,c.f=I.s.ra.stream);c.timestamp=Date.now();a&&(a.b[b]=c);return c},La:function(a){if(a.b&&a.b.subarray){for(var b=[],c=0;c<a.g;++c)b.push(a.b[c]);return b}return a.b},Yc:function(a){return a.b?
a.b.subarray?a.b.subarray(0,a.g):new Uint8Array(a.b):new Uint8Array},sa:function(a,b){a.b&&a.b.subarray&&b>a.b.length&&(a.b=I.La(a),a.g=a.b.length);if(!a.b||a.b.subarray){var c=a.b?a.b.length:0;c>=b||(b=Math.max(b,c*(1048576>c?2:1.125)|0),0!=c&&(b=Math.max(b,256)),c=a.b,a.b=new Uint8Array(b),0<a.g&&a.b.set(c.subarray(0,a.g),0))}else for(!a.b&&0<b&&(a.b=[]);a.b.length<b;)a.b.push(0)},Qa:function(a,b){if(a.g!=b)if(0==b)a.b=null,a.g=0;else{if(!a.b||a.b.subarray){var c=a.b;a.b=new Uint8Array(new ArrayBuffer(b));
c&&a.b.set(c.subarray(0,Math.min(b,a.g)))}else if(a.b||(a.b=[]),a.b.length>b)a.b.length=b;else for(;a.b.length<b;)a.b.push(0);a.g=b}},c:{v:function(a){var b={};b.dev=8192===(a.mode&61440)?a.id:1;b.ino=a.id;b.mode=a.mode;b.nlink=1;b.uid=0;b.gid=0;b.rdev=a.rdev;J(a.mode)?b.size=4096:32768===(a.mode&61440)?b.size=a.g:40960===(a.mode&61440)?b.size=a.link.length:b.size=0;b.atime=new Date(a.timestamp);b.mtime=new Date(a.timestamp);b.ctime=new Date(a.timestamp);b.G=4096;b.blocks=Math.ceil(b.size/b.G);return b},
j:function(a,b){void 0!==b.mode&&(a.mode=b.mode);void 0!==b.timestamp&&(a.timestamp=b.timestamp);void 0!==b.size&&I.Qa(a,b.size)},lookup:function(){throw lb[F.A];},M:function(a,b,c,d){return I.createNode(a,b,c,d)},rename:function(a,b,c){if(J(a.mode)){try{var d=K(b,c)}catch(g){}if(d)for(var f in d.b)throw new H(F.ma);}delete a.parent.b[a.name];a.name=c;b.b[c]=a;a.parent=b},unlink:function(a,b){delete a.b[b]},rmdir:function(a,b){var c=K(a,b),d;for(d in c.b)throw new H(F.ma);delete a.b[b]},readdir:function(a){var b=
[".",".."],c;for(c in a.b)a.b.hasOwnProperty(c)&&b.push(c);return b},symlink:function(a,b,c){a=I.createNode(a,b,41471,0);a.link=c;return a},readlink:function(a){if(40960!==(a.mode&61440))throw new H(F.h);return a.link}},f:{read:function(a,b,c,d,f){var g=a.node.b;if(f>=a.node.g)return 0;a=Math.min(a.node.g-f,d);assert(0<=a);if(8<a&&g.subarray)b.set(g.subarray(f,f+a),c);else for(d=0;d<a;d++)b[c+d]=g[f+d];return a},write:function(a,b,c,d,f,g){if(!d)return 0;a=a.node;a.timestamp=Date.now();if(b.subarray&&
(!a.b||a.b.subarray)){if(g)return a.b=b.subarray(c,c+d),a.g=d;if(0===a.g&&0===f)return a.b=new Uint8Array(b.subarray(c,c+d)),a.g=d;if(f+d<=a.g)return a.b.set(b.subarray(c,c+d),f),d}I.sa(a,f+d);if(a.b.subarray&&b.subarray)a.b.set(b.subarray(c,c+d),f);else for(g=0;g<d;g++)a.b[f+g]=b[c+g];a.g=Math.max(a.g,f+d);return d},B:function(a,b,c){1===c?b+=a.position:2===c&&32768===(a.node.mode&61440)&&(b+=a.node.g);if(0>b)throw new H(F.h);return b},oa:function(a,b,c){I.sa(a.node,b+c);a.node.g=Math.max(a.node.g,
b+c)},Aa:function(a,b,c,d,f,g,h){if(32768!==(a.node.mode&61440))throw new H(F.aa);c=a.node.b;if(h&2||c.buffer!==b&&c.buffer!==b.buffer){if(0<f||f+d<a.node.g)c.subarray?c=c.subarray(f,f+d):c=Array.prototype.slice.call(c,f,f+d);a=!0;d=mb(d);if(!d)throw new H(F.Ea);b.set(c,d)}else a=!1,d=c.byteOffset;return{bd:d,Ha:a}},V:function(a,b,c,d,f){if(32768!==(a.node.mode&61440))throw new H(F.aa);if(f&2)return 0;I.f.write(a,b,0,d,c,!1);return 0}}},L={U:!1,Ta:function(){L.U=!!process.platform.match(/^win/);var a=
process.binding("constants");a.fs&&(a=a.fs);L.ta={1024:a.O_APPEND,64:a.O_CREAT,128:a.O_EXCL,0:a.O_RDONLY,2:a.O_RDWR,4096:a.O_SYNC,512:a.O_TRUNC,1:a.O_WRONLY}},pa:function(a){return Buffer.o?Buffer.from(a):new Buffer(a)},l:function(a){assert(p);return L.createNode(null,"/",L.va(a.ga.root),0)},createNode:function(a,b,c){if(!J(c)&&32768!==(c&61440)&&40960!==(c&61440))throw new H(F.h);a=kb(a,b,c);a.c=L.c;a.f=L.f;return a},va:function(a){try{var b=fs.lstatSync(a);L.U&&(b.mode=b.mode|(b.mode&292)>>2)}catch(c){if(!c.code)throw c;
throw new H(F[c.code]);}return b.mode},m:function(a){for(var b=[];a.parent!==a;)b.push(a.name),a=a.parent;b.push(a.l.ga.root);b.reverse();return $a.apply(null,b)},Ka:function(a){a&=-2656257;var b=0,c;for(c in L.ta)a&c&&(b|=L.ta[c],a^=c);if(a)throw new H(F.h);return b},c:{v:function(a){a=L.m(a);try{var b=fs.lstatSync(a)}catch(c){if(!c.code)throw c;throw new H(F[c.code]);}L.U&&!b.G&&(b.G=4096);L.U&&!b.blocks&&(b.blocks=(b.size+b.G-1)/b.G|0);return{dev:b.dev,ino:b.ino,mode:b.mode,nlink:b.nlink,uid:b.uid,
gid:b.gid,rdev:b.rdev,size:b.size,atime:b.atime,mtime:b.mtime,ctime:b.ctime,G:b.G,blocks:b.blocks}},j:function(a,b){var c=L.m(a);try{void 0!==b.mode&&(fs.chmodSync(c,b.mode),a.mode=b.mode),void 0!==b.size&&fs.truncateSync(c,b.size)}catch(d){if(!d.code)throw d;throw new H(F[d.code]);}},lookup:function(a,b){var c=G(L.m(a),b);c=L.va(c);return L.createNode(a,b,c)},M:function(a,b,c,d){a=L.createNode(a,b,c,d);b=L.m(a);try{J(a.mode)?fs.mkdirSync(b,a.mode):fs.writeFileSync(b,"",{mode:a.mode})}catch(f){if(!f.code)throw f;
throw new H(F[f.code]);}return a},rename:function(a,b,c){a=L.m(a);b=G(L.m(b),c);try{fs.renameSync(a,b)}catch(d){if(!d.code)throw d;throw new H(F[d.code]);}},unlink:function(a,b){a=G(L.m(a),b);try{fs.unlinkSync(a)}catch(c){if(!c.code)throw c;throw new H(F[c.code]);}},rmdir:function(a,b){a=G(L.m(a),b);try{fs.rmdirSync(a)}catch(c){if(!c.code)throw c;throw new H(F[c.code]);}},readdir:function(a){a=L.m(a);try{return fs.readdirSync(a)}catch(b){if(!b.code)throw b;throw new H(F[b.code]);}},symlink:function(a,
b,c){a=G(L.m(a),b);try{fs.symlinkSync(c,a)}catch(d){if(!d.code)throw d;throw new H(F[d.code]);}},readlink:function(a){var b=L.m(a);try{return b=fs.readlinkSync(b),b=nb.relative(nb.resolve(a.l.ga.root),b)}catch(c){if(!c.code)throw c;throw new H(F[c.code]);}}},f:{open:function(a){var b=L.m(a.node);try{32768===(a.node.mode&61440)&&(a.O=fs.openSync(b,L.Ka(a.flags)))}catch(c){if(!c.code)throw c;throw new H(F[c.code]);}},close:function(a){try{32768===(a.node.mode&61440)&&a.O&&fs.closeSync(a.O)}catch(b){if(!b.code)throw b;
throw new H(F[b.code]);}},read:function(a,b,c,d,f){if(0===d)return 0;try{return fs.readSync(a.O,L.pa(b.buffer),c,d,f)}catch(g){throw new H(F[g.code]);}},write:function(a,b,c,d,f){try{return fs.writeSync(a.O,L.pa(b.buffer),c,d,f)}catch(g){throw new H(F[g.code]);}},B:function(a,b,c){if(1===c)b+=a.position;else if(2===c&&32768===(a.node.mode&61440))try{b+=fs.fstatSync(a.O).size}catch(d){throw new H(F[d.code]);}if(0>b)throw new H(F.h);return b}}};q+=16;q+=16;q+=16;
var ob=null,pb={},M=[],qb=1,N=null,rb=!0,O={},H=null,lb={};
function Q(a,b){a=ab("/",a);b=b||{};if(!a)return{path:"",node:null};var c={ua:!0,ia:0},d;for(d in c)void 0===b[d]&&(b[d]=c[d]);if(8<b.ia)throw new H(F.$);a=Wa(a.split("/").filter(function(a){return!!a}),!1);var f=ob;c="/";for(d=0;d<a.length;d++){var g=d===a.length-1;if(g&&b.parent)break;f=K(f,a[d]);c=G(c,a[d]);f.N&&(!g||g&&b.ua)&&(f=f.N.root);if(!g||b.da)for(g=0;40960===(f.mode&61440);)if(f=sb(c),c=ab(Ya(c),f),f=Q(c,{ia:b.ia}).node,40<g++)throw new H(F.$);}return{path:c,node:f}}
function R(a){for(var b;;){if(a===a.parent)return a=a.l.Ba,b?"/"!==a[a.length-1]?a+"/"+b:a+b:a;b=b?a.name+"/"+b:a.name;a=a.parent}}function tb(a,b){for(var c=0,d=0;d<b.length;d++)c=(c<<5)-c+b.charCodeAt(d)|0;return(a+c>>>0)%N.length}function ub(a){var b=tb(a.parent.id,a.name);a.J=N[b];N[b]=a}function K(a,b){var c;if(c=(c=vb(a,"x"))?c:a.c.lookup?0:F.Y)throw new H(c,a);for(c=N[tb(a.id,b)];c;c=c.J){var d=c.name;if(c.parent.id===a.id&&d===b)return c}return a.c.lookup(a,b)}
function kb(a,b,c,d){wb||(wb=function(a,b,c,d){a||(a=this);this.parent=a;this.l=a.l;this.N=null;this.id=qb++;this.name=b;this.mode=c;this.c={};this.f={};this.rdev=d},wb.prototype={},Object.defineProperties(wb.prototype,{read:{get:function(){return 365===(this.mode&365)},set:function(a){a?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146===(this.mode&146)},set:function(a){a?this.mode|=146:this.mode&=-147}},Oa:{get:function(){return J(this.mode)}},Na:{get:function(){return 8192===(this.mode&
61440)}}}));a=new wb(a,b,c,d);ub(a);return a}function J(a){return 16384===(a&61440)}var xb={r:0,rs:1052672,"r+":2,w:577,wx:705,xw:705,"w+":578,"wx+":706,"xw+":706,a:1089,ax:1217,xa:1217,"a+":1090,"ax+":1218,"xa+":1218};function yb(a){var b=["r","w","rw"][a&3];a&512&&(b+="w");return b}function vb(a,b){if(rb)return 0;if(-1===b.indexOf("r")||a.mode&292){if(-1!==b.indexOf("w")&&!(a.mode&146)||-1!==b.indexOf("x")&&!(a.mode&73))return F.Y}else return F.Y;return 0}
function zb(a,b){try{return K(a,b),F.ka}catch(c){}return vb(a,"wx")}function Ab(a){var b=4096;for(a=a||0;a<=b;a++)if(!M[a])return a;throw new H(F.Da);}function Bb(a,b){Cb||(Cb=function(){},Cb.prototype={},Object.defineProperties(Cb.prototype,{object:{get:function(){return this.node},set:function(a){this.node=a}}}));var c=new Cb,d;for(d in a)c[d]=a[d];a=c;b=Ab(b);a.fd=b;return M[b]=a}var jb={open:function(a){a.f=pb[a.node.rdev].f;a.f.open&&a.f.open(a)},B:function(){throw new H(F.R);}};
function eb(a,b){pb[a]={f:b}}function Db(a,b){var c="/"===b,d=!b;if(c&&ob)throw new H(F.Z);if(!c&&!d){var f=Q(b,{ua:!1});b=f.path;f=f.node;if(f.N)throw new H(F.Z);if(!J(f.mode))throw new H(F.la);}b={type:a,ga:{},Ba:b,Pa:[]};a=a.l(b);a.l=b;b.root=a;c?ob=a:f&&(f.N=b,f.l&&f.l.Pa.push(b))}function Eb(a,b,c){var d=Q(a,{parent:!0}).node;a=Za(a);if(!a||"."===a||".."===a)throw new H(F.h);var f=zb(d,a);if(f)throw new H(f);if(!d.c.M)throw new H(F.F);return d.c.M(d,a,b,c)}
function S(a,b){return Eb(a,(void 0!==b?b:511)&1023|16384,0)}function Fb(a,b,c){"undefined"===typeof c&&(c=b,b=438);return Eb(a,b|8192,c)}function Gb(a,b){if(!ab(a))throw new H(F.A);var c=Q(b,{parent:!0}).node;if(!c)throw new H(F.A);b=Za(b);var d=zb(c,b);if(d)throw new H(d);if(!c.c.symlink)throw new H(F.F);return c.c.symlink(c,b,a)}
function Hb(a){var b=Q(a,{parent:!0}).node,c=Za(a),d=K(b,c);a:{try{var f=K(b,c)}catch(h){f=h.u;break a}var g=vb(b,"wx");f=g?g:J(f.mode)?F.L:0}if(f)throw new H(f);if(!b.c.unlink)throw new H(F.F);if(d.N)throw new H(F.Z);try{O.willDeletePath&&O.willDeletePath(a)}catch(h){console.log("FS.trackingDelegate['willDeletePath']('"+a+"') threw an exception: "+h.message)}b.c.unlink(b,c);b=tb(d.parent.id,d.name);if(N[b]===d)N[b]=d.J;else for(b=N[b];b;){if(b.J===d){b.J=d.J;break}b=b.J}try{if(O.onDeletePath)O.onDeletePath(a)}catch(h){console.log("FS.trackingDelegate['onDeletePath']('"+
a+"') threw an exception: "+h.message)}}function sb(a){a=Q(a).node;if(!a)throw new H(F.A);if(!a.c.readlink)throw new H(F.h);return ab(R(a.parent),a.c.readlink(a))}function Ib(a,b){var c;"string"===typeof a?c=Q(a,{da:!0}).node:c=a;if(!c.c.j)throw new H(F.F);c.c.j(c,{mode:b&4095|c.mode&-4096,timestamp:Date.now()})}
function T(a,b,c,d){if(""===a)throw new H(F.A);if("string"===typeof b){var f=xb[b];if("undefined"===typeof f)throw Error("Unknown file open mode: "+b);b=f}c=b&64?("undefined"===typeof c?438:c)&4095|32768:0;if("object"===typeof a)var g=a;else{a=Xa(a);try{g=Q(a,{da:!(b&131072)}).node}catch(n){}}f=!1;if(b&64)if(g){if(b&128)throw new H(F.ka);}else g=Eb(a,c,0),f=!0;if(!g)throw new H(F.A);8192===(g.mode&61440)&&(b&=-513);if(b&65536&&!J(g.mode))throw new H(F.la);if(!f&&(c=g?40960===(g.mode&61440)?F.$:J(g.mode)&&
("r"!==yb(b)||b&512)?F.L:vb(g,yb(b)):F.A))throw new H(c);if(b&512){c=g;var h;"string"===typeof c?h=Q(c,{da:!0}).node:h=c;if(!h.c.j)throw new H(F.F);if(J(h.mode))throw new H(F.L);if(32768!==(h.mode&61440))throw new H(F.h);if(c=vb(h,"w"))throw new H(c);h.c.j(h,{size:0,timestamp:Date.now()})}b&=-641;d=Bb({node:g,path:R(g),flags:b,seekable:!0,position:0,f:g.f,Ya:[],error:!1},d);d.f.open&&d.f.open(d);!e.logReadFiles||b&1||(Jb||(Jb={}),a in Jb||(Jb[a]=1,e.printErr("read file: "+a)));try{O.onOpenFile&&(g=
0,1!==(b&2097155)&&(g|=1),0!==(b&2097155)&&(g|=2),O.onOpenFile(a,g))}catch(n){console.log("FS.trackingDelegate['onOpenFile']('"+a+"', flags) threw an exception: "+n.message)}return d}function Kb(a){a.ea&&(a.ea=null);try{a.f.close&&a.f.close(a)}catch(b){throw b;}finally{M[a.fd]=null}}function Lb(a,b,c){if(!a.seekable||!a.f.B)throw new H(F.R);a.position=a.f.B(a,b,c);a.Ya=[];return a.position}
function Mb(a,b,c,d,f,g){if(0>d||0>f)throw new H(F.h);if(0===(a.flags&2097155))throw new H(F.P);if(J(a.node.mode))throw new H(F.L);if(!a.f.write)throw new H(F.h);a.flags&1024&&(f=Lb(a,0,2));var h=!0;if("undefined"===typeof f)f=a.position,h=!1;else if(!a.seekable)throw new H(F.R);b=a.f.write(a,b,c,d,f,g);h||(a.position+=b);try{if(a.path&&O.onWriteToFile)O.onWriteToFile(a.path)}catch(n){console.log("FS.trackingDelegate['onWriteToFile']('"+path+"') threw an exception: "+n.message)}return b}
function Nb(){H||(H=function(a,b){this.node=b;this.Sa=function(a){this.u=a;for(var b in F)if(F[b]===a){this.code=b;break}};this.Sa(a);this.message=Va[a];this.stack&&Object.defineProperty(this,"stack",{value:Error().stack,writable:!0})},H.prototype=Error(),H.prototype.constructor=H,[F.A].forEach(function(a){lb[a]=new H(a);lb[a].stack="<generic error, no stack>"}))}var Ob;function Pb(a,b){var c=0;a&&(c|=365);b&&(c|=146);return c}
function Qb(a,b,c,d){a=G("string"===typeof a?a:R(a),b);return S(a,Pb(c,d))}function Rb(a,b){a="string"===typeof a?a:R(a);for(b=b.split("/").reverse();b.length;){var c=b.pop();if(c){var d=G(a,c);try{S(d)}catch(f){}a=d}}return d}function Sb(a,b,c,d){a=G("string"===typeof a?a:R(a),b);c=Pb(c,d);return Eb(a,(void 0!==c?c:438)&4095|32768,0)}
function Tb(a,b,c,d,f,g){a=b?G("string"===typeof a?a:R(a),b):a;d=Pb(d,f);f=Eb(a,(void 0!==d?d:438)&4095|32768,0);if(c){if("string"===typeof c){a=Array(c.length);b=0;for(var h=c.length;b<h;++b)a[b]=c.charCodeAt(b);c=a}Ib(f,d|146);a=T(f,"w");Mb(a,c,0,c.length,0,g);Kb(a);Ib(f,d)}return f}
function U(a,b,c,d){a=G("string"===typeof a?a:R(a),b);b=Pb(!!c,!!d);U.za||(U.za=64);var f=U.za++<<8|0;eb(f,{open:function(a){a.seekable=!1},close:function(){d&&d.buffer&&d.buffer.length&&d(10)},read:function(a,b,d,f){for(var g=0,h=0;h<f;h++){try{var n=c()}catch(X){throw new H(F.D);}if(void 0===n&&0===g)throw new H(F.ja);if(null===n||void 0===n)break;g++;b[d+h]=n}g&&(a.node.timestamp=Date.now());return g},write:function(a,b,c,f){for(var g=0;g<f;g++)try{d(b[c+g])}catch(x){throw new H(F.D);}f&&(a.node.timestamp=
Date.now());return g}});return Fb(a,b,f)}function Ub(a,b,c){a=G("string"===typeof a?a:R(a),b);return Gb(c,a)}
function Vb(a){if(a.Na||a.Oa||a.link||a.b)return!0;var b=!0;if("undefined"!==typeof XMLHttpRequest)throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(e.read)try{a.b=gb(e.read(a.url),!0),a.g=a.b.length}catch(c){b=!1}else throw Error("Cannot load without read() or XMLHttpRequest.");b||Ua(F.D);return b}
function Wb(a,b,c,d,f){function g(){this.fa=!1;this.S=[]}g.prototype.get=function(a){if(!(a>this.length-1||0>a)){var b=a%this.chunkSize;return this.ya(a/this.chunkSize|0)[b]}};g.prototype.Ra=function(a){this.ya=a};g.prototype.qa=function(){var a=new XMLHttpRequest;a.open("HEAD",c,!1);a.send(null);if(!(200<=a.status&&300>a.status||304===a.status))throw Error("Couldn't load "+c+". Status: "+a.status);var b=Number(a.getResponseHeader("Content-length")),d,f=(d=a.getResponseHeader("Accept-Ranges"))&&"bytes"===
d;a=(d=a.getResponseHeader("Content-Encoding"))&&"gzip"===d;var g=1048576;f||(g=b);var h=this;h.Ra(function(a){var d=a*g,f=(a+1)*g-1;f=Math.min(f,b-1);if("undefined"===typeof h.S[a]){var u=h.S;if(d>f)throw Error("invalid range ("+d+", "+f+") or no bytes requested!");if(f>b-1)throw Error("only "+b+" bytes available! programmer error!");var t=new XMLHttpRequest;t.open("GET",c,!1);b!==g&&t.setRequestHeader("Range","bytes="+d+"-"+f);"undefined"!=typeof Uint8Array&&(t.responseType="arraybuffer");t.overrideMimeType&&
t.overrideMimeType("text/plain; charset=x-user-defined");t.send(null);if(!(200<=t.status&&300>t.status||304===t.status))throw Error("Couldn't load "+c+". Status: "+t.status);d=void 0!==t.response?new Uint8Array(t.response||[]):gb(t.responseText||"",!0);u[a]=d}if("undefined"===typeof h.S[a])throw Error("doXHR failed!");return h.S[a]});if(a||!b)g=b=1,g=b=this.ya(0).length,console.log("LazyFiles on gzip forces download of the whole file when length is accessed");this.Ga=b;this.Fa=g;this.fa=!0};if("undefined"!==
typeof XMLHttpRequest){if(!m)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var h=new g;Object.defineProperties(h,{length:{get:function(){this.fa||this.qa();return this.Ga}},chunkSize:{get:function(){this.fa||this.qa();return this.Fa}}});var n=void 0}else n=c,h=void 0;var r=Sb(a,b,d,f);h?r.b=h:n&&(r.b=null,r.url=n);Object.defineProperties(r,{g:{get:function(){return this.b.length}}});var v={};Object.keys(r.f).forEach(function(a){var b=
r.f[a];v[a]=function(){if(!Vb(r))throw new H(F.D);return b.apply(null,arguments)}});v.read=function(a,b,c,d,f){if(!Vb(r))throw new H(F.D);a=a.node.b;if(f>=a.length)return 0;d=Math.min(a.length-f,d);assert(0<=d);if(a.slice)for(var u=0;u<d;u++)b[c+u]=a[f+u];else for(u=0;u<d;u++)b[c+u]=a.get(f+u);return d};r.f=v;return r}
function Xb(a,b,c,d,f,g,h,n,r,v){function x(c){function u(c){v&&v();n||Tb(a,b,c,d,f,r);g&&g();Na()}var t=!1;e.preloadPlugins.forEach(function(a){!t&&a.canHandle(P)&&(a.handle(c,P,u,function(){h&&h();Na()}),t=!0)});t||u(c)}Browser.Zc();var P=b?ab(G(a,b)):a;Ma();"string"==typeof c?Browser.Xc(c,function(a){x(a)},h):x(c)}var FS={},wb,Cb,Jb,Yb={},V=0;function W(){V+=4;return B[V-4>>2]}function Zb(){var a=M[W()];if(!a)throw new H(F.P);return a}var $b=q;q+=16;var ac,Y={};
function bc(a){if(0===a)return 0;a=A(a);if(!Y.hasOwnProperty(a))return 0;bc.o&&cc(bc.o);a=Y[a];var b=sa(a)+1,c=mb(b);c&&na(a,y,c,b);bc.o=c;return bc.o}function dc(a){return Math.pow(2,a)}var ec={},fc=1;function hc(a,b){hc.o||(hc.o={});a in hc.o||(e.dynCall_v(b),hc.o[a]=1)}function ic(a){return 0===a%4&&(0!==a%100||0===a%400)}function jc(a,b){for(var c=0,d=0;d<=b;c+=a[d++]);return c}var kc=[31,29,31,30,31,30,31,31,30,31,30,31],lc=[31,28,31,30,31,30,31,31,30,31,30,31];
function mc(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),d=(ic(a.getFullYear())?kc:lc)[c];if(b>d-a.getDate())b-=d-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function nc(a,b,c,d){function f(a,b,c){for(a="number"===typeof a?a.toString():a||"";a.length<b;)a=c[0]+a;return a}function g(a,b){return f(a,b,"0")}function h(a,b){function c(a){return 0>a?-1:0<a?1:0}var d;0===(d=c(a.getFullYear()-b.getFullYear()))&&0===(d=c(a.getMonth()-b.getMonth()))&&(d=c(a.getDate()-b.getDate()));return d}function n(a){switch(a.getDay()){case 0:return new Date(a.getFullYear()-1,11,29);case 1:return a;case 2:return new Date(a.getFullYear(),0,3);case 3:return new Date(a.getFullYear(),
0,2);case 4:return new Date(a.getFullYear(),0,1);case 5:return new Date(a.getFullYear()-1,11,31);case 6:return new Date(a.getFullYear()-1,11,30)}}function r(a){a=mc(new Date(a.i+1900,0,1),a.X);var b=n(new Date(a.getFullYear()+1,0,4));return 0>=h(n(new Date(a.getFullYear(),0,4)),a)?0>=h(b,a)?a.getFullYear()+1:a.getFullYear():a.getFullYear()-1}var v=B[d+40>>2];d={Wa:B[d>>2],Va:B[d+4>>2],W:B[d+8>>2],H:B[d+12>>2],C:B[d+16>>2],i:B[d+20>>2],Ca:B[d+24>>2],X:B[d+28>>2],cd:B[d+32>>2],Ua:B[d+36>>2],Xa:v?A(v):
""};c=A(c);v={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S"};for(var x in v)c=c.replace(new RegExp(x,"g"),v[x]);var P="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),X="January February March April May June July August September October November December".split(" ");v={"%a":function(a){return P[a.Ca].substring(0,3)},"%A":function(a){return P[a.Ca]},"%b":function(a){return X[a.C].substring(0,
3)},"%B":function(a){return X[a.C]},"%C":function(a){return g((a.i+1900)/100|0,2)},"%d":function(a){return g(a.H,2)},"%e":function(a){return f(a.H,2," ")},"%g":function(a){return r(a).toString().substring(2)},"%G":function(a){return r(a)},"%H":function(a){return g(a.W,2)},"%I":function(a){a=a.W;0==a?a=12:12<a&&(a-=12);return g(a,2)},"%j":function(a){return g(a.H+jc(ic(a.i+1900)?kc:lc,a.C-1),3)},"%m":function(a){return g(a.C+1,2)},"%M":function(a){return g(a.Va,2)},"%n":function(){return"\n"},"%p":function(a){return 0<=
a.W&&12>a.W?"AM":"PM"},"%S":function(a){return g(a.Wa,2)},"%t":function(){return"\t"},"%u":function(a){return(new Date(a.i+1900,a.C+1,a.H,0,0,0,0)).getDay()||7},"%U":function(a){var b=new Date(a.i+1900,0,1),c=0===b.getDay()?b:mc(b,7-b.getDay());a=new Date(a.i+1900,a.C,a.H);return 0>h(c,a)?g(Math.ceil((31-c.getDate()+(jc(ic(a.getFullYear())?kc:lc,a.getMonth()-1)-31)+a.getDate())/7),2):0===h(c,b)?"01":"00"},"%V":function(a){var b=n(new Date(a.i+1900,0,4)),c=n(new Date(a.i+1901,0,4)),d=mc(new Date(a.i+
1900,0,1),a.X);return 0>h(d,b)?"53":0>=h(c,d)?"01":g(Math.ceil((b.getFullYear()<a.i+1900?a.X+32-b.getDate():a.X+1-b.getDate())/7),2)},"%w":function(a){return(new Date(a.i+1900,a.C+1,a.H,0,0,0,0)).getDay()},"%W":function(a){var b=new Date(a.i,0,1),c=1===b.getDay()?b:mc(b,0===b.getDay()?1:7-b.getDay()+1);a=new Date(a.i+1900,a.C,a.H);return 0>h(c,a)?g(Math.ceil((31-c.getDate()+(jc(ic(a.getFullYear())?kc:lc,a.getMonth()-1)-31)+a.getDate())/7),2):0===h(c,b)?"01":"00"},"%y":function(a){return(a.i+1900).toString().substring(2)},
"%Y":function(a){return a.i+1900},"%z":function(a){a=a.Ua;var b=0<=a;a=Math.abs(a)/60;return(b?"+":"-")+String("0000"+(a/60*100+a%60)).slice(-4)},"%Z":function(a){return a.Xa},"%%":function(){return"%"}};for(x in v)0<=c.indexOf(x)&&(c=c.replace(new RegExp(x,"g"),v[x](d)));x=gb(c,!1);if(x.length>b)return 0;y.set(x,a);return x.length-1}Nb();N=Array(4096);Db(I,"/");S("/tmp");S("/home");S("/home/web_user");
(function(){S("/dev");eb(259,{read:function(){return 0},write:function(a,b,f,g){return g}});Fb("/dev/null",259);db(1280,hb);db(1536,ib);Fb("/dev/tty",1280);Fb("/dev/tty1",1536);if("undefined"!==typeof crypto){var a=new Uint8Array(1);var b=function(){crypto.getRandomValues(a);return a[0]}}else b=p?function(){return require("crypto").randomBytes(1)[0]}:function(){return 256*Math.random()|0};U("/dev","random",b);U("/dev","urandom",b);S("/dev/shm");S("/dev/shm/tmp")})();S("/proc");S("/proc/self");S("/proc/self/fd");
Db({l:function(){var a=kb("/proc/self","fd",16895,73);a.c={lookup:function(a,c){var b=M[+c];if(!b)throw new H(F.P);a={parent:null,l:{Ba:"fake"},c:{readlink:function(){return b.path}}};return a.parent=a}};return a}},"/proc/self/fd");
Ea.unshift(function(){if(!e.noFSInit&&!Ob){assert(!Ob,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");Ob=!0;Nb();e.stdin=e.stdin;e.stdout=e.stdout;e.stderr=e.stderr;e.stdin?U("/dev","stdin",e.stdin):Gb("/dev/tty","/dev/stdin");e.stdout?U("/dev","stdout",null,e.stdout):Gb("/dev/tty","/dev/stdout");e.stderr?U("/dev","stderr",null,e.stderr):Gb("/dev/tty1","/dev/stderr");var a=
T("/dev/stdin","r");assert(0===a.fd,"invalid handle for stdin ("+a.fd+")");a=T("/dev/stdout","w");assert(1===a.fd,"invalid handle for stdout ("+a.fd+")");a=T("/dev/stderr","w");assert(2===a.fd,"invalid handle for stderr ("+a.fd+")")}});Fa.push(function(){rb=!1});Ga.push(function(){Ob=!1;var a=e._fflush;a&&a(0);for(a=0;a<M.length;a++){var b=M[a];b&&Kb(b)}});e.FS_createFolder=Qb;e.FS_createPath=Rb;e.FS_createDataFile=Tb;e.FS_createPreloadedFile=Xb;e.FS_createLazyFile=Wb;e.FS_createLink=Ub;
e.FS_createDevice=U;e.FS_unlink=Hb;Ea.unshift(function(){});Ga.push(function(){});if(p){var fs=require("fs"),nb=require("path");L.Ta()}var oc,Z;ac?(Z=B[$b>>2],oc=B[Z>>2]):(ac=!0,Y.USER=Y.LOGNAME="web_user",Y.PATH="/",Y.PWD="/",Y.HOME="/home/web_user",Y.LANG="C.UTF-8",Y._=e.thisProgram,oc=fa(1024),Z=fa(256),B[Z>>2]=oc,B[$b>>2]=Z);var pc=[],qc=0,rc;for(rc in Y)if("string"===typeof Y[rc]){var sc=rc+"="+Y[rc];pc.push(sc);qc+=sc.length}
if(1024<qc)throw Error("Environment size exceeded TOTAL_ENV_SIZE!");for(var tc=0;tc<pc.length;tc++){for(var uc=sc=pc[tc],vc=oc,wc=0;wc<uc.length;++wc)y[vc++>>0]=uc.charCodeAt(wc);y[vc>>0]=0;B[Z+4*tc>>2]=oc;oc+=sc.length+1}B[Z+4*pc.length>>2]=0;C=fa(4);wa=xa=ia(q);ya=wa+Ba;za=ia(ya);B[C>>2]=za;ha=!0;function gb(a,b){var c=Array(sa(a)+1);a=na(a,c,0,c.length);b&&(c.length=a);return c}e.wasmTableSize=1320;e.wasmMaxTableSize=1320;e.Ia={};
e.Ja={abort:w,enlargeMemory:function(){Aa()},getTotalMemory:function(){return D},abortOnCannotGrowMemory:Aa,__ZSt18uncaught_exceptionv:Ta,___assert_fail:function(a,b,c,d){w("Assertion failed: "+A(a)+", at: "+[b?A(b):"unknown filename",c,d?A(d):"unknown function"])},___cxa_allocate_exception:function(a){return mb(a)},___cxa_pure_virtual:function(){ja=!0;throw"Pure virtual function called!";},___cxa_throw:function(a){"uncaught_exception"in Ta?Ta.o++:Ta.o=1;throw a+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";
},___lock:function(){},___map_file:function(){Ua(F.F);return-1},___setErrNo:Ua,___syscall140:function(a,b){V=b;try{var c=Zb();W();var d=W(),f=W(),g=W();Lb(c,d,g);B[f>>2]=c.position;c.ea&&0===d&&0===g&&(c.ea=null);return 0}catch(h){return"undefined"!==typeof FS&&h instanceof H||w(h),-h.u}},___syscall145:function(a,b){V=b;try{var c=Zb(),d=W();a:{var f=W();for(b=a=0;b<f;b++){var g=B[d+(8*b+4)>>2],h=c,n=B[d+8*b>>2],r=g,v=void 0,x=y;if(0>r||0>v)throw new H(F.h);if(1===(h.flags&2097155))throw new H(F.P);
if(J(h.node.mode))throw new H(F.L);if(!h.f.read)throw new H(F.h);var P=!0;if("undefined"===typeof v)v=h.position,P=!1;else if(!h.seekable)throw new H(F.R);var X=h.f.read(h,x,n,r,v);P||(h.position+=X);var u=X;if(0>u){var t=-1;break a}a+=u;if(u<g)break}t=a}return t}catch(cb){return"undefined"!==typeof FS&&cb instanceof H||w(cb),-cb.u}},___syscall146:function(a,b){V=b;try{var c=Zb(),d=W();a:{var f=W();for(b=a=0;b<f;b++){var g=Mb(c,y,B[d+8*b>>2],B[d+(8*b+4)>>2],void 0);if(0>g){var h=-1;break a}a+=g}h=
a}return h}catch(n){return"undefined"!==typeof FS&&n instanceof H||w(n),-n.u}},___syscall221:function(a,b){V=b;try{var c=Zb();switch(W()){case 0:var d=W();return 0>d?-F.h:T(c.path,c.flags,0,d).fd;case 1:case 2:return 0;case 3:return c.flags;case 4:return d=W(),c.flags|=d,0;case 12:case 12:return d=W(),ta[d+0>>1]=2,0;case 13:case 14:case 13:case 14:return 0;case 16:case 8:return-F.h;case 9:return Ua(F.h),-1;default:return-F.h}}catch(f){return"undefined"!==typeof FS&&f instanceof H||w(f),-f.u}},___syscall5:function(a,
b){V=b;try{var c=A(W()),d=W(),f=W();return T(c,d,f).fd}catch(g){return"undefined"!==typeof FS&&g instanceof H||w(g),-g.u}},___syscall54:function(a,b){V=b;try{var c=Zb(),d=W();switch(d){case 21509:case 21505:return c.tty?0:-F.I;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return c.tty?0:-F.I;case 21519:if(!c.tty)return-F.I;var f=W();return B[f>>2]=0;case 21520:return c.tty?-F.h:-F.I;case 21531:a=f=W();if(!c.f.Ma)throw new H(F.I);return c.f.Ma(c,d,a);case 21523:return c.tty?0:-F.I;
default:w("bad ioctl syscall "+d)}}catch(g){return"undefined"!==typeof FS&&g instanceof H||w(g),-g.u}},___syscall6:function(a,b){V=b;try{var c=Zb();Kb(c);return 0}catch(d){return"undefined"!==typeof FS&&d instanceof H||w(d),-d.u}},___syscall91:function(a,b){V=b;try{var c=W(),d=W(),f=Yb[c];if(!f)return 0;if(d===f.$c){var g=M[f.fd],h=f.flags,n=new Uint8Array(z.subarray(c,c+d));g&&g.f.V&&g.f.V(g,n,0,d,h);Yb[c]=null;f.Ha&&cc(f.ad)}return 0}catch(r){return"undefined"!==typeof FS&&r instanceof H||w(r),
-r.u}},___unlock:function(){},_abort:function(){e.abort()},_adlib_request_file:function(a){return window.fileRequestCallback(a)},_emscripten_memcpy_big:function(a,b,c){z.set(z.subarray(b,b+c),a);return a},_getenv:bc,_llvm_exp2_f64:function(){return dc.apply(null,arguments)},_pthread_cond_wait:function(){return 0},_pthread_getspecific:function(a){return ec[a]||0},_pthread_key_create:function(a){if(0==a)return F.h;B[a>>2]=fc;ec[fc]=0;fc++;return 0},_pthread_once:hc,_pthread_setspecific:function(a,b){if(!(a in
ec))return F.h;ec[a]=b;return 0},_strftime_l:function(a,b,c,d){return nc(a,b,c,d)},DYNAMICTOP_PTR:C,STACKTOP:xa};var xc=e.asm(e.Ia,e.Ja,buffer);e.asm=xc;
var Pa=e.__GLOBAL__I_000101=function(){return e.asm.__GLOBAL__I_000101.apply(null,arguments)},Ra=e.__GLOBAL__sub_I_adapter_cpp=function(){return e.asm.__GLOBAL__sub_I_adapter_cpp.apply(null,arguments)},Qa=e.__GLOBAL__sub_I_adplug_cpp=function(){return e.asm.__GLOBAL__sub_I_adplug_cpp.apply(null,arguments)},Sa=e.__GLOBAL__sub_I_iostream_cpp=function(){return e.asm.__GLOBAL__sub_I_iostream_cpp.apply(null,arguments)};e.___errno_location=function(){return e.asm.___errno_location.apply(null,arguments)};
e._emu_compute_audio_samples=function(){return e.asm._emu_compute_audio_samples.apply(null,arguments)};e._emu_get_audio_buffer=function(){return e.asm._emu_get_audio_buffer.apply(null,arguments)};e._emu_get_audio_buffer_length=function(){return e.asm._emu_get_audio_buffer_length.apply(null,arguments)};e._emu_get_current_position=function(){return e.asm._emu_get_current_position.apply(null,arguments)};e._emu_get_max_position=function(){return e.asm._emu_get_max_position.apply(null,arguments)};
e._emu_get_track_info=function(){return e.asm._emu_get_track_info.apply(null,arguments)};e._emu_init=function(){return e.asm._emu_init.apply(null,arguments)};e._emu_seek_position=function(){return e.asm._emu_seek_position.apply(null,arguments)};e._emu_set_subsong=function(){return e.asm._emu_set_subsong.apply(null,arguments)};e._emu_teardown=function(){return e.asm._emu_teardown.apply(null,arguments)};
var cc=e._free=function(){return e.asm._free.apply(null,arguments)},mb=e._malloc=function(){return e.asm._malloc.apply(null,arguments)},ma=e.stackAlloc=function(){return e.asm.stackAlloc.apply(null,arguments)},la=e.stackRestore=function(){return e.asm.stackRestore.apply(null,arguments)},ka=e.stackSave=function(){return e.asm.stackSave.apply(null,arguments)};e.dynCall_v=function(){return e.asm.dynCall_v.apply(null,arguments)};e.dynCall_vi=function(){return e.asm.dynCall_vi.apply(null,arguments)};
e.asm=xc;e.ccall=function(a,b,c,d){var f=e["_"+a];assert(f,"Cannot call unknown function "+a+", make sure it is exported");var g=[];a=0;if(d)for(var h=0;h<d.length;h++){var n=pa[c[h]];n?(0===a&&(a=ka()),g[h]=n(d[h])):g[h]=d[h]}c=f.apply(null,g);"string"===b&&(c=A(c));0!==a&&la(a);return c};e.getMemory=function(a){if(ha)if(Ia)var b=mb(a);else{assert(C);b=B[C>>2];a=b+a+15&-16;B[C>>2]=a;if(a=a>=D)Aa(),a=!0;a&&(B[C>>2]=b,b=0)}else b=fa(a);return b};e.Pointer_stringify=A;e.addRunDependency=Ma;
e.removeRunDependency=Na;e.FS_createFolder=Qb;e.FS_createPath=Rb;e.FS_createDataFile=Tb;e.FS_createPreloadedFile=Xb;e.FS_createLazyFile=Wb;e.FS_createLink=Ub;e.FS_createDevice=U;e.FS_unlink=Hb;function ea(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}ea.prototype=Error();ea.prototype.constructor=ea;var yc=null;La=function zc(){e.calledRun||Ac();e.calledRun||(La=zc)};
function Ac(){function a(){if(!e.calledRun&&(e.calledRun=!0,!ja)){Ia||(Ia=!0,Ca(Ea));Ca(Fa);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var a=e.postRun.shift();Ha.unshift(a)}Ca(Ha)}}null===yc&&(yc=Date.now());if(!(0<E)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ja();Ca(Da);0<E||e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},
1);a()},1)):a())}}e.run=Ac;e.exit=function(a,b){if(!b||!e.noExitRuntime||0!==a){if(!e.noExitRuntime&&(ja=!0,xa=void 0,Ca(Ga),e.onExit))e.onExit(a);p&&process.exit(a);e.quit(a,new ea(a))}};function w(a){if(e.onAbort)e.onAbort(a);void 0!==a?(e.print(a),e.printErr(a),a=JSON.stringify(a)):a="";ja=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=w;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();e.noExitRuntime=!0;Ac();
  return {
	Module: Module,  // expose original Module
  };
})(window.spp_backend_state_ADPLUG);
/*
 adplug_adapter.js: Adapts AdPlug backend to generic WebAudio/ScriptProcessor player.
 
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
AdPlugBackendAdapter = (function(){ var $this = function () { 
		$this.base.call(this, backend_AdPlug.Module, 2);
		
		if (!backend_AdPlug.Module.notReady) {
			// in sync scenario the "onRuntimeInitialized" has already fired before execution gets here,
			// i.e. it has to be called explicitly here (in async scenario "onRuntimeInitialized" will trigger
			// the call directly)
			this.doOnAdapterReady();
		}		

	}; 
	// AdPlug's sample buffer contains 2-byte integer sample data (i.e. must be rescaled) 
	// of 2 interleaved channels
	extend(EmsHEAP16BackendAdapter, $this, {  
		getAudioBuffer: function() {
			var ptr=  this.Module.ccall('emu_get_audio_buffer', 'number');			
			// make it a this.Module.HEAP16 pointer
			return ptr >> 1;	// 2 x 16 bit samples			
		},
		getAudioBufferLength: function() {
			var len= this.Module.ccall('emu_get_audio_buffer_length', 'number') >>2;
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

		mapUrl: function(filename) {			
			// used transform the "internal filename" to a valid URL
			var uri= this.mapFs2Uri(filename);
			var p= uri.indexOf("@");	// cut off "basePath" for "outside" files
			if (p >= 0) {
				uri= uri.substring(p+1);
			}
			return uri;
		},
		/*
		* Creates the URL used to retrieve the song file.
		*/
		mapInternalFilename: function(overridePath, basePath, filename) {
			// the problem is that in UADE there is only one "basePath" and this specifies 
			// where to look for *any* files, i.e. uade prefixes this path to whatever
			// files it is tying to load (config/music - doesn't matter), i.e. a correct 
			// outside URL CANNOT be passed through UADE without being messed up in the process
			
			// solution: use a special marker for "outside" URLs and later just substitute 
			// whatever garbage path information UADE is adding (see mapUrl() above)
			
			// map URL to some valid FS path (must not contain "//", ":" or "?")
			// input e.g. "@mod_proxy.php?mod=Fasttracker/4-Mat/bonus.mod" or
			// "@ftp://foo.com/foo/bar/file.mod" (should avoid name clashes)
			
			filename= this.mapUri2Fs("@" + filename);	// treat all songs as "from outside"

			var f= ((overridePath)?overridePath:basePath) + filename;	// this._basePath ever needed?

			if (this.modlandMode) this.originalFile= f;

			return f;
		},
		getPathAndFilename: function(fullFilename) {
			// input is path+filename combined: base for "registerFileData" & "loadMusicData"
			return ["", fullFilename];
		},
		mapCacheFileName: function (name) {
			return name;	// might need to use toUpper() in case there are inconsistent refs
		},
		mapBackendFilename: function (name) {
			var input= this.Module.Pointer_stringify(name);		
			return input;
		},
		registerFileData: function(pathFilenameArray, data) {			
			// input: the path is fixed to the basePath & the filename is actually still a path+filename
			var path= pathFilenameArray[0];
			var filename= pathFilenameArray[1];

			// MANDATORTY to move any path info still present in the "filename" to "path"
			var tmpPpathFilenameArray = new Array(2);	// do not touch original IO param			
			var p= filename.lastIndexOf("/");
			if (p > 0) {
				tmpPpathFilenameArray[0]= path + filename.substring(0, p);
				tmpPpathFilenameArray[1]= filename.substring(p+1);
			} else  {
				tmpPpathFilenameArray[0]= path;
				tmpPpathFilenameArray[1]= filename;
			}

			// setup data in our virtual FS (the next access should then be OK)
			return this.registerEmscriptenFileData(tmpPpathFilenameArray, data);
		},		
		loadMusicData: function(sampleRate, path, filename, data, options) {
			var ret = this.Module.ccall('emu_init', 'number', ['number', 'string', 'string'], 
														[sampleRate, path, filename]);

			if (ret == 0) {			
				var inputSampleRate = sampleRate;
				this.resetSampleRate(sampleRate, inputSampleRate); 
			}
			return ret;			
		},
		evalTrackOptions: function(options) {
			if (typeof options.timeout != 'undefined') {
				ScriptNodePlayer.getInstance().setPlaybackTimeout(options.timeout*1000);
			}
			var track= options.track;
			var ret= this.Module.ccall('emu_set_subsong', 'number', ['number'], [track]);
			return ret;
		},				
		teardown: function() {
			this.Module.ccall('emu_teardown', 'number');	// just in case
		},
		getSongInfoMeta: function() {
			return {title: String,
					author: String, 
					desc: String, 
					player: String, 
					speed: Number, 
					tracks: Number
					};
		},
		updateSongInfo: function(filename, result) {
			// get song infos
			var numAttr= 6;
			var ret = this.Module.ccall('emu_get_track_info', 'number');

			var array = this.Module.HEAP32.subarray(ret>>2, (ret>>2)+numAttr);
			result.title= this.Module.Pointer_stringify(array[0]);
			if (!result.title.length) result.title= filename.replace(/^.*[\\\/]/, '');
			result.author= this.Module.Pointer_stringify(array[1]);		
			result.desc= this.Module.Pointer_stringify(array[2]);
			result.player= this.Module.Pointer_stringify(array[3]);
			var s= parseInt(this.Module.Pointer_stringify(array[4]))
			result.speed= s;
			var t= parseInt(this.Module.Pointer_stringify(array[5]))
			result.tracks= t;
		}
	});	return $this; })();
	