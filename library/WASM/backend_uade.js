// create separate namespace for all the Emscripten stuff.. otherwise naming clashes may occur especially when 
// optimizing using closure compiler..
window.spp_backend_state_UADE= {
	notReady: true,
	adapterCallback: function(){}	// overwritten later	
};
window.spp_backend_state_UADE["onRuntimeInitialized"] = function() {	// emscripten callback needed in case async init is used (e.g. for WASM)
	this.notReady= false;
	this.adapterCallback();
}.bind(window.spp_backend_state_UADE);

var backend_UADE = (function(Module) {var e;e||(e=typeof Module !== 'undefined' ? Module : {});function aa(a,b){return a.match("^"+b)==b}var k={},l;for(l in e)e.hasOwnProperty(l)&&(k[l]=e[l]);e.arguments=[];e.thisProgram="./this.program";e.quit=function(a,b){throw b;};e.preRun=[];e.postRun=[];var p=!1,q=!1,r=!1,ba=!1;
if(e.ENVIRONMENT)if("WEB"===e.ENVIRONMENT)p=!0;else if("WORKER"===e.ENVIRONMENT)q=!0;else if("NODE"===e.ENVIRONMENT)r=!0;else if("SHELL"===e.ENVIRONMENT)ba=!0;else throw Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");else p="object"===typeof window,q="function"===typeof importScripts,r="object"===typeof process&&"function"===typeof require&&!p&&!q,ba=!p&&!r&&!q;
if(r){var ca,da;e.read=function(a,b){ca||(ca=require("fs"));da||(da=require("path"));a=da.normalize(a);a=ca.readFileSync(a);return b?a:a.toString()};e.readBinary=function(a){a=e.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(e.thisProgram=process.argv[1].replace(/\\/g,"/"));e.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=e);process.on("uncaughtException",function(a){if(!(a instanceof u))throw a;});process.on("unhandledRejection",
function(){process.exit(1)});e.inspect=function(){return"[Emscripten Module object]"}}else if(ba)"undefined"!=typeof read&&(e.read=function(a){return read(a)}),e.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?e.arguments=scriptArgs:"undefined"!=typeof arguments&&(e.arguments=arguments),"function"===typeof quit&&(e.quit=function(a){quit(a)});else if(p||q)e.read=function(a){var b=
new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},q&&(e.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),e.readAsync=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},"undefined"!=typeof arguments&&(e.arguments=arguments),e.setWindowTitle=
function(a){document.title=a};e.print="undefined"!==typeof console?console.log:"undefined"!==typeof print?print:null;e.printErr="undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn||e.print;e.print=e.print;e.printErr=e.printErr;for(l in k)k.hasOwnProperty(l)&&(e[l]=k[l]);k=void 0;function ea(a){assert(!fa);var b=v;v=v+a+15&-16;return b}function ha(a){assert(w);var b=x[w>>2];a=b+a+15&-16;x[w>>2]=a;if(a=a>=y)ia(),a=!0;return a?(x[w>>2]=b,0):b}
function ja(a){var b;b||(b=16);return Math.ceil(a/b)*b}var ka=0;function assert(a,b){a||A("Assertion failed: "+b)}var qa={stackSave:function(){la()},stackRestore:function(){ma()},arrayToC:function(a){var b=na(a.length);oa.set(a,b);return b},stringToC:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=na(c);pa(a,B,b,c)}return b}},ra={string:qa.stringToC,array:qa.arrayToC};
function sa(a,b){if("number"===typeof a){var c=!0;var d=a}else c=!1,d=a.length;b=4==b?f:["function"===typeof va?va:ea,na,ea,ha][void 0===b?2:b](Math.max(d,1));if(c){var f=b;assert(0==(b&3));for(a=b+(d&-4);f<a;f+=4)x[f>>2]=0;for(a=b+d;f<a;)oa[f++>>0]=0;return b}a.subarray||a.slice?B.set(a,b):B.set(new Uint8Array(a),b);return b}
function C(a,b){if(0===b||!a)return"";for(var c=0,d,f=0;;){d=B[a+f>>0];c|=d;if(0==d&&!b)break;f++;if(b&&f==b)break}b||(b=f);d="";if(128>c){for(;0<b;)c=String.fromCharCode.apply(String,B.subarray(a,a+Math.min(b,1024))),d=d?d+c:c,a+=1024,b-=1024;return d}return wa(B,a)}var xa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function wa(a,b){for(var c=b;a[c];)++c;if(16<c-b&&a.subarray&&xa)return xa.decode(a.subarray(b,c));for(c="";;){var d=a[b++];if(!d)return c;if(d&128){var f=a[b++]&63;if(192==(d&224))c+=String.fromCharCode((d&31)<<6|f);else{var g=a[b++]&63;if(224==(d&240))d=(d&15)<<12|f<<6|g;else{var h=a[b++]&63;if(240==(d&248))d=(d&7)<<18|f<<12|g<<6|h;else{var n=a[b++]&63;if(248==(d&252))d=(d&3)<<24|f<<18|g<<12|h<<6|n;else{var m=a[b++]&63;d=(d&1)<<30|f<<24|g<<18|h<<12|n<<6|m}}}65536>d?c+=String.fromCharCode(d):(d-=
65536,c+=String.fromCharCode(55296|d>>10,56320|d&1023))}}else c+=String.fromCharCode(d)}}
function pa(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);55296<=h&&57343>=h&&(h=65536+((h&1023)<<10)|a.charCodeAt(++g)&1023);if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(2097151>=h){if(c+3>=d)break;b[c++]=240|h>>18}else{if(67108863>=h){if(c+4>=d)break;b[c++]=248|h>>24}else{if(c+5>=d)break;b[c++]=252|h>>30;b[c++]=128|h>>24&63}b[c++]=128|h>>18&63}b[c++]=128|
h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0;return c-f}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");var buffer,oa,B,ya,x;function za(){e.HEAP8=oa=new Int8Array(buffer);e.HEAP16=ya=new Int16Array(buffer);e.HEAP32=x=new Int32Array(buffer);e.HEAPU8=B=new Uint8Array(buffer);e.HEAPU16=new Uint16Array(buffer);e.HEAPU32=new Uint32Array(buffer);e.HEAPF32=new Float32Array(buffer);e.HEAPF64=new Float64Array(buffer)}var Aa,v,fa,Ba,Ca,Da,Ea,w;Aa=v=Ba=Ca=Da=Ea=w=0;fa=!1;
function ia(){A("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+y+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}var Fa=e.TOTAL_STACK||5242880,y=e.TOTAL_MEMORY||16777216;y<Fa&&e.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+y+"! (TOTAL_STACK="+Fa+")");
e.buffer?buffer=e.buffer:("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(e.wasmMemory=new WebAssembly.Memory({initial:y/65536,maximum:y/65536}),buffer=e.wasmMemory.buffer):buffer=new ArrayBuffer(y),e.buffer=buffer);za();x[0]=1668509029;ya[1]=25459;if(115!==B[2]||99!==B[3])throw"Runtime error: expected the system to be little-endian!";
function Ga(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Nc;"number"===typeof c?void 0===b.U?e.dynCall_v(c):e.dynCall_vi(c,b.U):c(void 0===b.U?null:b.U)}}}var Ha=[],Ia=[],Ja=[],Ka=[],La=[],Ma=!1;function Na(){var a=e.preRun.shift();Ha.unshift(a)}var E=0,Oa=null,Pa=null;function Qa(){E++;e.monitorRunDependencies&&e.monitorRunDependencies(E)}
function Sa(){E--;e.monitorRunDependencies&&e.monitorRunDependencies(E);if(0==E&&(null!==Oa&&(clearInterval(Oa),Oa=null),Pa)){var a=Pa;Pa=null;a()}}e.preloadedImages={};e.preloadedAudios={};function Ta(a){return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}
(function(){function a(){try{if(e.wasmBinary)return new Uint8Array(e.wasmBinary);if(e.readBinary)return e.readBinary(f);throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";}catch(z){A(z)}}function b(){return e.wasmBinary||!p&&!q||"function"!==typeof fetch?new Promise(function(b){b(a())}):fetch(f,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+f+
"'";return a.arrayBuffer()}).catch(function(){return a()})}function c(a){function c(a){n=a.exports;if(n.memory){a=n.memory;var b=e.buffer;a.byteLength<b.byteLength&&e.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");b=new Int8Array(b);(new Int8Array(a)).set(b);e.buffer=buffer=a;za()}e.asm=n;e.usingWasm=!0;Sa()}function d(a){c(a.instance)}function g(a){b().then(function(a){return WebAssembly.instantiate(a,h)}).then(a).catch(function(a){e.printErr("failed to asynchronously prepare wasm: "+
a);A(a)})}if("object"!==typeof WebAssembly)return e.printErr("no native wasm support detected"),!1;if(!(e.wasmMemory instanceof WebAssembly.Memory))return e.printErr("no native wasm Memory in use"),!1;a.memory=e.wasmMemory;h.global={NaN:NaN,Infinity:Infinity};h["global.Math"]=Math;h.env=a;Qa();if(e.instantiateWasm)try{return e.instantiateWasm(h,c)}catch(ta){return e.printErr("Module.instantiateWasm callback failed with error: "+ta),!1}e.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||
Ta(f)||"function"!==typeof fetch?g(d):WebAssembly.instantiateStreaming(fetch(f,{credentials:"same-origin"}),h).then(d).catch(function(a){e.printErr("wasm streaming compile failed: "+a);e.printErr("falling back to ArrayBuffer instantiation");g(d)});return{}}var d="uade.wast",f="uade.wasm",g="uade.temp.asm.js";"function"===typeof e.locateFile&&(Ta(d)||(d=e.locateFile(d)),Ta(f)||(f=e.locateFile(f)),Ta(g)||(g=e.locateFile(g)));var h={global:null,env:null,asm2wasm:{"f64-rem":function(a,b){return a%b},
"debugger":function(){debugger}},parent:e},n=null;e.asmPreload=e.asm;var m=e.reallocBuffer;e.reallocBuffer=function(a){if("asmjs"===t)var b=m(a);else a:{var c=e.usingWasm?65536:16777216;0<a%c&&(a+=c-a%c);c=e.buffer.byteLength;if(e.usingWasm)try{b=-1!==e.wasmMemory.grow((a-c)/65536)?e.buffer=e.wasmMemory.buffer:null;break a}catch(ua){b=null;break a}b=void 0}return b};var t="";e.asm=function(a,b){if(!b.table){a=e.wasmTableSize;void 0===a&&(a=1024);var d=e.wasmMaxTableSize;b.table="object"===typeof WebAssembly&&
"function"===typeof WebAssembly.Table?void 0!==d?new WebAssembly.Table({initial:a,maximum:d,element:"anyfunc"}):new WebAssembly.Table({initial:a,element:"anyfunc"}):Array(a);e.wasmTable=b.table}b.memoryBase||(b.memoryBase=e.STATIC_BASE);b.tableBase||(b.tableBase=0);(b=c(b))||A("no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods");return b}})();Aa=1024;v=Aa+817872;Ia.push();
e.STATIC_BASE=Aa;e.STATIC_BUMP=817872;v+=16;
var F={D:1,u:2,xc:3,tb:4,A:5,fa:6,Ma:7,Rb:8,L:9,$a:10,aa:11,Hc:11,va:12,P:13,mb:14,cc:15,R:16,ba:17,Ic:18,T:19,da:20,H:21,h:22,Mb:23,ua:24,C:25,Ec:26,nb:27,Zb:28,M:29,uc:30,Fb:31,nc:32,jb:33,rc:34,Vb:42,qb:43,ab:44,wb:45,xb:46,yb:47,Eb:48,Fc:49,Pb:50,vb:51,gb:35,Sb:37,Sa:52,Va:53,Jc:54,Nb:55,Wa:56,Xa:57,hb:35,Ya:59,ac:60,Qb:61,Bc:62,$b:63,Wb:64,Xb:65,tc:66,Tb:67,Pa:68,yc:69,bb:70,oc:71,Hb:72,kb:73,Ua:74,ic:76,Ta:77,sc:78,zb:79,Ab:80,Db:81,Cb:82,Bb:83,bc:38,ea:39,Ib:36,S:40,jc:95,mc:96,fb:104,Ob:105,
Qa:97,qc:91,fc:88,Yb:92,vc:108,eb:111,Na:98,cb:103,Lb:101,Jb:100,Cc:110,ob:112,pb:113,sb:115,Ra:114,ib:89,Gb:90,pc:93,wc:94,Oa:99,Kb:102,ub:106,dc:107,Dc:109,Gc:87,lb:122,zc:116,hc:95,Ub:123,rb:84,kc:75,Za:125,ec:131,lc:130,Ac:86},Ua={0:"Success",1:"Not super-user",2:"No such file or directory",3:"No such process",4:"Interrupted system call",5:"I/O error",6:"No such device or address",7:"Arg list too long",8:"Exec format error",9:"Bad file number",10:"No children",11:"No more processes",12:"Not enough core",
13:"Permission denied",14:"Bad address",15:"Block device required",16:"Mount device busy",17:"File exists",18:"Cross-device link",19:"No such device",20:"Not a directory",21:"Is a directory",22:"Invalid argument",23:"Too many open files in system",24:"Too many open files",25:"Not a typewriter",26:"Text file busy",27:"File too large",28:"No space left on device",29:"Illegal seek",30:"Read only file system",31:"Too many links",32:"Broken pipe",33:"Math arg out of domain of func",34:"Math result not representable",
35:"File locking deadlock error",36:"File or path name too long",37:"No record locks available",38:"Function not implemented",39:"Directory not empty",40:"Too many symbolic links",42:"No message of desired type",43:"Identifier removed",44:"Channel number out of range",45:"Level 2 not synchronized",46:"Level 3 halted",47:"Level 3 reset",48:"Link number out of range",49:"Protocol driver not attached",50:"No CSI structure available",51:"Level 2 halted",52:"Invalid exchange",53:"Invalid request descriptor",
54:"Exchange full",55:"No anode",56:"Invalid request code",57:"Invalid slot",59:"Bad font file fmt",60:"Device not a stream",61:"No data (for no delay io)",62:"Timer expired",63:"Out of streams resources",64:"Machine is not on the network",65:"Package not installed",66:"The object is remote",67:"The link has been severed",68:"Advertise error",69:"Srmount error",70:"Communication error on send",71:"Protocol error",72:"Multihop attempted",73:"Cross mount point (not really error)",74:"Trying to read unreadable message",
75:"Value too large for defined data type",76:"Given log. name not unique",77:"f.d. invalid for this operation",78:"Remote address changed",79:"Can   access a needed shared lib",80:"Accessing a corrupted shared lib",81:".lib section in a.out corrupted",82:"Attempting to link in too many libs",83:"Attempting to exec a shared library",84:"Illegal byte sequence",86:"Streams pipe error",87:"Too many users",88:"Socket operation on non-socket",89:"Destination address required",90:"Message too long",91:"Protocol wrong type for socket",
92:"Protocol not available",93:"Unknown protocol",94:"Socket type not supported",95:"Not supported",96:"Protocol family not supported",97:"Address family not supported by protocol family",98:"Address already in use",99:"Address not available",100:"Network interface is not configured",101:"Network is unreachable",102:"Connection reset by network",103:"Connection aborted",104:"Connection reset by peer",105:"No buffer space available",106:"Socket is already connected",107:"Socket is not connected",108:"Can't send after socket shutdown",
109:"Too many references",110:"Connection timed out",111:"Connection refused",112:"Host is down",113:"Host is unreachable",114:"Socket already connected",115:"Connection already in progress",116:"Stale file handle",122:"Quota exceeded",123:"No medium (in tape drive)",125:"Operation canceled",130:"Previous owner died",131:"State not recoverable"};function Va(a){e.___errno_location&&(x[e.___errno_location()>>2]=a);return a}
function Wa(a,b){for(var c=0,d=a.length-1;0<=d;d--){var f=a[d];"."===f?a.splice(d,1):".."===f?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(b)for(;c;c--)a.unshift("..");return a}function Xa(a){var b="/"===a.charAt(0),c="/"===a.substr(-1);(a=Wa(a.split("/").filter(function(a){return!!a}),!b).join("/"))||b||(a=".");a&&c&&(a+="/");return(b?"/":"")+a}
function Ya(a){var b=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);a=b[0];b=b[1];if(!a&&!b)return".";b&&(b=b.substr(0,b.length-1));return a+b}function Za(a){if("/"===a)return"/";var b=a.lastIndexOf("/");return-1===b?a:a.substr(b+1)}function $a(){var a=Array.prototype.slice.call(arguments,0);return Xa(a.join("/"))}function G(a,b){return Xa(a+"/"+b)}
function ab(){for(var a="",b=!1,c=arguments.length-1;-1<=c&&!b;c--){b=0<=c?arguments[c]:"/";if("string"!==typeof b)throw new TypeError("Arguments to path.resolve must be strings");if(!b)return"";a=b+"/"+a;b="/"===b.charAt(0)}a=Wa(a.split("/").filter(function(a){return!!a}),!b).join("/");return(b?"/":"")+a||"."}var bb=[];function cb(a,b){bb[a]={input:[],output:[],G:b};db(a,eb)}
var eb={open:function(a){var b=bb[a.node.rdev];if(!b)throw new H(F.T);a.tty=b;a.seekable=!1},close:function(a){a.tty.G.flush(a.tty)},flush:function(a){a.tty.G.flush(a.tty)},read:function(a,b,c,d){if(!a.tty||!a.tty.G.oa)throw new H(F.fa);for(var f=0,g=0;g<d;g++){try{var h=a.tty.G.oa(a.tty)}catch(n){throw new H(F.A);}if(void 0===h&&0===f)throw new H(F.aa);if(null===h||void 0===h)break;f++;b[c+g]=h}f&&(a.node.timestamp=Date.now());return f},write:function(a,b,c,d){if(!a.tty||!a.tty.G.Z)throw new H(F.fa);
for(var f=0;f<d;f++)try{a.tty.G.Z(a.tty,b[c+f])}catch(g){throw new H(F.A);}d&&(a.node.timestamp=Date.now());return f}},fb={oa:function(a){if(!a.input.length){var b=null;if(r){var c=new Buffer(256),d=0,f=process.stdin.fd;if("win32"!=process.platform){var g=!1;try{f=fs.openSync("/dev/stdin","r"),g=!0}catch(h){}}try{d=fs.readSync(f,c,0,256,null)}catch(h){if(-1!=h.toString().indexOf("EOF"))d=0;else throw h;}g&&fs.closeSync(f);0<d?b=c.slice(0,d).toString("utf-8"):b=null}else"undefined"!=typeof window&&
"function"==typeof window.prompt?(b=window.prompt("Input: "),null!==b&&(b+="\n")):"function"==typeof readline&&(b=readline(),null!==b&&(b+="\n"));if(!b)return null;a.input=I(b,!0)}return a.input.shift()},Z:function(a,b){null===b||10===b?(e.print(wa(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&0<a.output.length&&(e.print(wa(a.output,0)),a.output=[])}},gb={Z:function(a,b){null===b||10===b?(e.printErr(wa(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&
0<a.output.length&&(e.printErr(wa(a.output,0)),a.output=[])}},J={m:null,j:function(){return J.createNode(null,"/",16895,0)},createNode:function(a,b,c,d){if(24576===(c&61440)||4096===(c&61440))throw new H(F.D);J.m||(J.m={dir:{node:{s:J.c.s,i:J.c.i,lookup:J.c.lookup,I:J.c.I,rename:J.c.rename,unlink:J.c.unlink,rmdir:J.c.rmdir,readdir:J.c.readdir,symlink:J.c.symlink},stream:{v:J.f.v}},file:{node:{s:J.c.s,i:J.c.i},stream:{v:J.f.v,read:J.f.read,write:J.f.write,ga:J.f.ga,ra:J.f.ra,ta:J.f.ta}},link:{node:{s:J.c.s,
i:J.c.i,readlink:J.c.readlink},stream:{}},ja:{node:{s:J.c.s,i:J.c.i},stream:hb}});c=ib(a,b,c,d);K(c.mode)?(c.c=J.m.dir.node,c.f=J.m.dir.stream,c.b={}):32768===(c.mode&61440)?(c.c=J.m.file.node,c.f=J.m.file.stream,c.g=0,c.b=null):40960===(c.mode&61440)?(c.c=J.m.link.node,c.f=J.m.link.stream):8192===(c.mode&61440)&&(c.c=J.m.ja.node,c.f=J.m.ja.stream);c.timestamp=Date.now();a&&(a.b[b]=c);return c},Ca:function(a){if(a.b&&a.b.subarray){for(var b=[],c=0;c<a.g;++c)b.push(a.b[c]);return b}return a.b},Oc:function(a){return a.b?
a.b.subarray?a.b.subarray(0,a.g):new Uint8Array(a.b):new Uint8Array},ka:function(a,b){a.b&&a.b.subarray&&b>a.b.length&&(a.b=J.Ca(a),a.g=a.b.length);if(!a.b||a.b.subarray){var c=a.b?a.b.length:0;c>=b||(b=Math.max(b,c*(1048576>c?2:1.125)|0),0!=c&&(b=Math.max(b,256)),c=a.b,a.b=new Uint8Array(b),0<a.g&&a.b.set(c.subarray(0,a.g),0))}else for(!a.b&&0<b&&(a.b=[]);a.b.length<b;)a.b.push(0)},Ha:function(a,b){if(a.g!=b)if(0==b)a.b=null,a.g=0;else{if(!a.b||a.b.subarray){var c=a.b;a.b=new Uint8Array(new ArrayBuffer(b));
c&&a.b.set(c.subarray(0,Math.min(b,a.g)))}else if(a.b||(a.b=[]),a.b.length>b)a.b.length=b;else for(;a.b.length<b;)a.b.push(0);a.g=b}},c:{s:function(a){var b={};b.dev=8192===(a.mode&61440)?a.id:1;b.ino=a.id;b.mode=a.mode;b.nlink=1;b.uid=0;b.gid=0;b.rdev=a.rdev;K(a.mode)?b.size=4096:32768===(a.mode&61440)?b.size=a.g:40960===(a.mode&61440)?b.size=a.link.length:b.size=0;b.atime=new Date(a.timestamp);b.mtime=new Date(a.timestamp);b.ctime=new Date(a.timestamp);b.B=4096;b.blocks=Math.ceil(b.size/b.B);return b},
i:function(a,b){void 0!==b.mode&&(a.mode=b.mode);void 0!==b.timestamp&&(a.timestamp=b.timestamp);void 0!==b.size&&J.Ha(a,b.size)},lookup:function(){throw jb[F.u];},I:function(a,b,c,d){return J.createNode(a,b,c,d)},rename:function(a,b,c){if(K(a.mode)){try{var d=L(b,c)}catch(g){}if(d)for(var f in d.b)throw new H(F.ea);}delete a.parent.b[a.name];a.name=c;b.b[c]=a;a.parent=b},unlink:function(a,b){delete a.b[b]},rmdir:function(a,b){var c=L(a,b),d;for(d in c.b)throw new H(F.ea);delete a.b[b]},readdir:function(a){var b=
[".",".."],c;for(c in a.b)a.b.hasOwnProperty(c)&&b.push(c);return b},symlink:function(a,b,c){a=J.createNode(a,b,41471,0);a.link=c;return a},readlink:function(a){if(40960!==(a.mode&61440))throw new H(F.h);return a.link}},f:{read:function(a,b,c,d,f){var g=a.node.b;if(f>=a.node.g)return 0;a=Math.min(a.node.g-f,d);assert(0<=a);if(8<a&&g.subarray)b.set(g.subarray(f,f+a),c);else for(d=0;d<a;d++)b[c+d]=g[f+d];return a},write:function(a,b,c,d,f,g){if(!d)return 0;a=a.node;a.timestamp=Date.now();if(b.subarray&&
(!a.b||a.b.subarray)){if(g)return a.b=b.subarray(c,c+d),a.g=d;if(0===a.g&&0===f)return a.b=new Uint8Array(b.subarray(c,c+d)),a.g=d;if(f+d<=a.g)return a.b.set(b.subarray(c,c+d),f),d}J.ka(a,f+d);if(a.b.subarray&&b.subarray)a.b.set(b.subarray(c,c+d),f);else for(g=0;g<d;g++)a.b[f+g]=b[c+g];a.g=Math.max(a.g,f+d);return d},v:function(a,b,c){1===c?b+=a.position:2===c&&32768===(a.node.mode&61440)&&(b+=a.node.g);if(0>b)throw new H(F.h);return b},ga:function(a,b,c){J.ka(a.node,b+c);a.node.g=Math.max(a.node.g,
b+c)},ra:function(a,b,c,d,f,g,h){if(32768!==(a.node.mode&61440))throw new H(F.T);c=a.node.b;if(h&2||c.buffer!==b&&c.buffer!==b.buffer){if(0<f||f+d<a.node.g)c.subarray?c=c.subarray(f,f+d):c=Array.prototype.slice.call(c,f,f+d);a=!0;d=va(d);if(!d)throw new H(F.va);b.set(c,d)}else a=!1,d=c.byteOffset;return{Qc:d,Kc:a}},ta:function(a,b,c,d,f){if(32768!==(a.node.mode&61440))throw new H(F.T);if(f&2)return 0;J.f.write(a,b,0,d,c,!1);return 0}}},M={O:!1,Ka:function(){M.O=!!process.platform.match(/^win/);var a=
process.binding("constants");a.fs&&(a=a.fs);M.la={1024:a.O_APPEND,64:a.O_CREAT,128:a.O_EXCL,0:a.O_RDONLY,2:a.O_RDWR,4096:a.O_SYNC,512:a.O_TRUNC,1:a.O_WRONLY}},ha:function(a){return Buffer.Mc?Buffer.from(a):new Buffer(a)},j:function(a){assert(r);return M.createNode(null,"/",M.na(a.Y.root),0)},createNode:function(a,b,c){if(!K(c)&&32768!==(c&61440)&&40960!==(c&61440))throw new H(F.h);a=ib(a,b,c);a.c=M.c;a.f=M.f;return a},na:function(a){try{var b=fs.lstatSync(a);M.O&&(b.mode=b.mode|(b.mode&292)>>2)}catch(c){if(!c.code)throw c;
throw new H(F[c.code]);}return b.mode},l:function(a){for(var b=[];a.parent!==a;)b.push(a.name),a=a.parent;b.push(a.j.Y.root);b.reverse();return $a.apply(null,b)},Ba:function(a){a&=-2656257;var b=0,c;for(c in M.la)a&c&&(b|=M.la[c],a^=c);if(a)throw new H(F.h);return b},c:{s:function(a){a=M.l(a);try{var b=fs.lstatSync(a)}catch(c){if(!c.code)throw c;throw new H(F[c.code]);}M.O&&!b.B&&(b.B=4096);M.O&&!b.blocks&&(b.blocks=(b.size+b.B-1)/b.B|0);return{dev:b.dev,ino:b.ino,mode:b.mode,nlink:b.nlink,uid:b.uid,
gid:b.gid,rdev:b.rdev,size:b.size,atime:b.atime,mtime:b.mtime,ctime:b.ctime,B:b.B,blocks:b.blocks}},i:function(a,b){var c=M.l(a);try{void 0!==b.mode&&(fs.chmodSync(c,b.mode),a.mode=b.mode),void 0!==b.size&&fs.truncateSync(c,b.size)}catch(d){if(!d.code)throw d;throw new H(F[d.code]);}},lookup:function(a,b){var c=G(M.l(a),b);c=M.na(c);return M.createNode(a,b,c)},I:function(a,b,c,d){a=M.createNode(a,b,c,d);b=M.l(a);try{K(a.mode)?fs.mkdirSync(b,a.mode):fs.writeFileSync(b,"",{mode:a.mode})}catch(f){if(!f.code)throw f;
throw new H(F[f.code]);}return a},rename:function(a,b,c){a=M.l(a);b=G(M.l(b),c);try{fs.renameSync(a,b)}catch(d){if(!d.code)throw d;throw new H(F[d.code]);}},unlink:function(a,b){a=G(M.l(a),b);try{fs.unlinkSync(a)}catch(c){if(!c.code)throw c;throw new H(F[c.code]);}},rmdir:function(a,b){a=G(M.l(a),b);try{fs.rmdirSync(a)}catch(c){if(!c.code)throw c;throw new H(F[c.code]);}},readdir:function(a){a=M.l(a);try{return fs.readdirSync(a)}catch(b){if(!b.code)throw b;throw new H(F[b.code]);}},symlink:function(a,
b,c){a=G(M.l(a),b);try{fs.symlinkSync(c,a)}catch(d){if(!d.code)throw d;throw new H(F[d.code]);}},readlink:function(a){var b=M.l(a);try{return b=fs.readlinkSync(b),b=kb.relative(kb.resolve(a.j.Y.root),b)}catch(c){if(!c.code)throw c;throw new H(F[c.code]);}}},f:{open:function(a){var b=M.l(a.node);try{32768===(a.node.mode&61440)&&(a.K=fs.openSync(b,M.Ba(a.flags)))}catch(c){if(!c.code)throw c;throw new H(F[c.code]);}},close:function(a){try{32768===(a.node.mode&61440)&&a.K&&fs.closeSync(a.K)}catch(b){if(!b.code)throw b;
throw new H(F[b.code]);}},read:function(a,b,c,d,f){if(0===d)return 0;try{return fs.readSync(a.K,M.ha(b.buffer),c,d,f)}catch(g){throw new H(F[g.code]);}},write:function(a,b,c,d,f){try{return fs.writeSync(a.K,M.ha(b.buffer),c,d,f)}catch(g){throw new H(F[g.code]);}},v:function(a,b,c){if(1===c)b+=a.position;else if(2===c&&32768===(a.node.mode&61440))try{b+=fs.fstatSync(a.K).size}catch(d){throw new H(F[d.code]);}if(0>b)throw new H(F.h);return b}}};v+=16;v+=16;v+=16;
var lb=null,mb={},O=[],nb=1,P=null,ob=!0,Q={},H=null,jb={};
function R(a,b){a=ab("/",a);b=b||{};if(!a)return{path:"",node:null};var c={ma:!0,$:0},d;for(d in c)void 0===b[d]&&(b[d]=c[d]);if(8<b.$)throw new H(F.S);a=Wa(a.split("/").filter(function(a){return!!a}),!1);var f=lb;c="/";for(d=0;d<a.length;d++){var g=d===a.length-1;if(g&&b.parent)break;f=L(f,a[d]);c=G(c,a[d]);f.J&&(!g||g&&b.ma)&&(f=f.J.root);if(!g||b.V)for(g=0;40960===(f.mode&61440);)if(f=pb(c),c=ab(Ya(c),f),f=R(c,{$:b.$}).node,40<g++)throw new H(F.S);}return{path:c,node:f}}
function S(a){for(var b;;){if(a===a.parent)return a=a.j.sa,b?"/"!==a[a.length-1]?a+"/"+b:a+b:a;b=b?a.name+"/"+b:a.name;a=a.parent}}function qb(a,b){for(var c=0,d=0;d<b.length;d++)c=(c<<5)-c+b.charCodeAt(d)|0;return(a+c>>>0)%P.length}function rb(a){var b=qb(a.parent.id,a.name);a.F=P[b];P[b]=a}function L(a,b){var c;if(c=(c=sb(a,"x"))?c:a.c.lookup?0:F.P)throw new H(c,a);for(c=P[qb(a.id,b)];c;c=c.F){var d=c.name;if(c.parent.id===a.id&&d===b)return c}return a.c.lookup(a,b)}
function ib(a,b,c,d){tb||(tb=function(a,b,c,d){a||(a=this);this.parent=a;this.j=a.j;this.J=null;this.id=nb++;this.name=b;this.mode=c;this.c={};this.f={};this.rdev=d},tb.prototype={},Object.defineProperties(tb.prototype,{read:{get:function(){return 365===(this.mode&365)},set:function(a){a?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146===(this.mode&146)},set:function(a){a?this.mode|=146:this.mode&=-147}},Fa:{get:function(){return K(this.mode)}},Ea:{get:function(){return 8192===(this.mode&
61440)}}}));a=new tb(a,b,c,d);rb(a);return a}function K(a){return 16384===(a&61440)}var ub={r:0,rs:1052672,"r+":2,w:577,wx:705,xw:705,"w+":578,"wx+":706,"xw+":706,a:1089,ax:1217,xa:1217,"a+":1090,"ax+":1218,"xa+":1218};function vb(a){var b=["r","w","rw"][a&3];a&512&&(b+="w");return b}function sb(a,b){if(ob)return 0;if(-1===b.indexOf("r")||a.mode&292){if(-1!==b.indexOf("w")&&!(a.mode&146)||-1!==b.indexOf("x")&&!(a.mode&73))return F.P}else return F.P;return 0}
function wb(a,b){try{return L(a,b),F.ba}catch(c){}return sb(a,"wx")}function xb(a){var b=4096;for(a=a||0;a<=b;a++)if(!O[a])return a;throw new H(F.ua);}function yb(a,b){zb||(zb=function(){},zb.prototype={},Object.defineProperties(zb.prototype,{object:{get:function(){return this.node},set:function(a){this.node=a}}}));var c=new zb,d;for(d in a)c[d]=a[d];a=c;b=xb(b);a.fd=b;return O[b]=a}var hb={open:function(a){a.f=mb[a.node.rdev].f;a.f.open&&a.f.open(a)},v:function(){throw new H(F.M);}};
function db(a,b){mb[a]={f:b}}function Ab(a,b){var c="/"===b,d=!b;if(c&&lb)throw new H(F.R);if(!c&&!d){var f=R(b,{ma:!1});b=f.path;f=f.node;if(f.J)throw new H(F.R);if(!K(f.mode))throw new H(F.da);}b={type:a,Y:{},sa:b,Ga:[]};a=a.j(b);a.j=b;b.root=a;c?lb=a:f&&(f.J=b,f.j&&f.j.Ga.push(b))}function Bb(a,b,c){var d=R(a,{parent:!0}).node;a=Za(a);if(!a||"."===a||".."===a)throw new H(F.h);var f=wb(d,a);if(f)throw new H(f);if(!d.c.I)throw new H(F.D);return d.c.I(d,a,b,c)}
function T(a,b){return Bb(a,(void 0!==b?b:511)&1023|16384,0)}function Cb(a,b,c){"undefined"===typeof c&&(c=b,b=438);return Bb(a,b|8192,c)}function Db(a,b){if(!ab(a))throw new H(F.u);var c=R(b,{parent:!0}).node;if(!c)throw new H(F.u);b=Za(b);var d=wb(c,b);if(d)throw new H(d);if(!c.c.symlink)throw new H(F.D);return c.c.symlink(c,b,a)}
function Eb(a){var b=R(a,{parent:!0}).node,c=Za(a),d=L(b,c);a:{try{var f=L(b,c)}catch(h){f=h.o;break a}var g=sb(b,"wx");f=g?g:K(f.mode)?F.H:0}if(f)throw new H(f);if(!b.c.unlink)throw new H(F.D);if(d.J)throw new H(F.R);try{Q.willDeletePath&&Q.willDeletePath(a)}catch(h){console.log("FS.trackingDelegate['willDeletePath']('"+a+"') threw an exception: "+h.message)}b.c.unlink(b,c);b=qb(d.parent.id,d.name);if(P[b]===d)P[b]=d.F;else for(b=P[b];b;){if(b.F===d){b.F=d.F;break}b=b.F}try{if(Q.onDeletePath)Q.onDeletePath(a)}catch(h){console.log("FS.trackingDelegate['onDeletePath']('"+
a+"') threw an exception: "+h.message)}}function pb(a){a=R(a).node;if(!a)throw new H(F.u);if(!a.c.readlink)throw new H(F.h);return ab(S(a.parent),a.c.readlink(a))}function Fb(a,b){var c;"string"===typeof a?c=R(a,{V:!0}).node:c=a;if(!c.c.i)throw new H(F.D);c.c.i(c,{mode:b&4095|c.mode&-4096,timestamp:Date.now()})}
function U(a,b,c,d){if(""===a)throw new H(F.u);if("string"===typeof b){var f=ub[b];if("undefined"===typeof f)throw Error("Unknown file open mode: "+b);b=f}c=b&64?("undefined"===typeof c?438:c)&4095|32768:0;if("object"===typeof a)var g=a;else{a=Xa(a);try{g=R(a,{V:!(b&131072)}).node}catch(n){}}f=!1;if(b&64)if(g){if(b&128)throw new H(F.ba);}else g=Bb(a,c,0),f=!0;if(!g)throw new H(F.u);8192===(g.mode&61440)&&(b&=-513);if(b&65536&&!K(g.mode))throw new H(F.da);if(!f&&(c=g?40960===(g.mode&61440)?F.S:K(g.mode)&&
("r"!==vb(b)||b&512)?F.H:sb(g,vb(b)):F.u))throw new H(c);if(b&512){c=g;var h;"string"===typeof c?h=R(c,{V:!0}).node:h=c;if(!h.c.i)throw new H(F.D);if(K(h.mode))throw new H(F.H);if(32768!==(h.mode&61440))throw new H(F.h);if(c=sb(h,"w"))throw new H(c);h.c.i(h,{size:0,timestamp:Date.now()})}b&=-641;d=yb({node:g,path:S(g),flags:b,seekable:!0,position:0,f:g.f,La:[],error:!1},d);d.f.open&&d.f.open(d);!e.logReadFiles||b&1||(Gb||(Gb={}),a in Gb||(Gb[a]=1,e.printErr("read file: "+a)));try{Q.onOpenFile&&(g=
0,1!==(b&2097155)&&(g|=1),0!==(b&2097155)&&(g|=2),Q.onOpenFile(a,g))}catch(n){console.log("FS.trackingDelegate['onOpenFile']('"+a+"', flags) threw an exception: "+n.message)}return d}function Hb(a){a.W&&(a.W=null);try{a.f.close&&a.f.close(a)}catch(b){throw b;}finally{O[a.fd]=null}}function Ib(a,b,c){if(!a.seekable||!a.f.v)throw new H(F.M);a.position=a.f.v(a,b,c);a.La=[];return a.position}
function Jb(a,b,c,d,f,g){if(0>d||0>f)throw new H(F.h);if(0===(a.flags&2097155))throw new H(F.L);if(K(a.node.mode))throw new H(F.H);if(!a.f.write)throw new H(F.h);a.flags&1024&&(f=Ib(a,0,2));var h=!0;if("undefined"===typeof f)f=a.position,h=!1;else if(!a.seekable)throw new H(F.M);b=a.f.write(a,b,c,d,f,g);h||(a.position+=b);try{if(a.path&&Q.onWriteToFile)Q.onWriteToFile(a.path)}catch(n){console.log("FS.trackingDelegate['onWriteToFile']('"+path+"') threw an exception: "+n.message)}return b}
function Kb(){H||(H=function(a,b){this.node=b;this.Ja=function(a){this.o=a;for(var b in F)if(F[b]===a){this.code=b;break}};this.Ja(a);this.message=Ua[a];this.stack&&Object.defineProperty(this,"stack",{value:Error().stack,writable:!0})},H.prototype=Error(),H.prototype.constructor=H,[F.u].forEach(function(a){jb[a]=new H(a);jb[a].stack="<generic error, no stack>"}))}var Lb;function Mb(a,b){var c=0;a&&(c|=365);b&&(c|=146);return c}
function Nb(a,b,c,d){a=G("string"===typeof a?a:S(a),b);return T(a,Mb(c,d))}function Ob(a,b){a="string"===typeof a?a:S(a);for(b=b.split("/").reverse();b.length;){var c=b.pop();if(c){var d=G(a,c);try{T(d)}catch(f){}a=d}}return d}function Pb(a,b,c,d){a=G("string"===typeof a?a:S(a),b);c=Mb(c,d);return Bb(a,(void 0!==c?c:438)&4095|32768,0)}
function Qb(a,b,c,d,f,g){a=b?G("string"===typeof a?a:S(a),b):a;d=Mb(d,f);f=Bb(a,(void 0!==d?d:438)&4095|32768,0);if(c){if("string"===typeof c){a=Array(c.length);b=0;for(var h=c.length;b<h;++b)a[b]=c.charCodeAt(b);c=a}Fb(f,d|146);a=U(f,"w");Jb(a,c,0,c.length,0,g);Hb(a);Fb(f,d)}return f}
function V(a,b,c,d){a=G("string"===typeof a?a:S(a),b);b=Mb(!!c,!!d);V.qa||(V.qa=64);var f=V.qa++<<8|0;db(f,{open:function(a){a.seekable=!1},close:function(){d&&d.buffer&&d.buffer.length&&d(10)},read:function(a,b,d,f){for(var g=0,h=0;h<f;h++){try{var n=c()}catch(D){throw new H(F.A);}if(void 0===n&&0===g)throw new H(F.aa);if(null===n||void 0===n)break;g++;b[d+h]=n}g&&(a.node.timestamp=Date.now());return g},write:function(a,b,c,f){for(var g=0;g<f;g++)try{d(b[c+g])}catch(z){throw new H(F.A);}f&&(a.node.timestamp=
Date.now());return g}});return Cb(a,b,f)}function Rb(a,b,c){a=G("string"===typeof a?a:S(a),b);return Db(c,a)}
function Sb(a){if(a.Ea||a.Fa||a.link||a.b)return!0;var b=!0;if("undefined"!==typeof XMLHttpRequest)throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(e.read)try{a.b=I(e.read(a.url),!0),a.g=a.b.length}catch(c){b=!1}else throw Error("Cannot load without read() or XMLHttpRequest.");b||Va(F.A);return b}
function Tb(a,b,c,d,f){function g(){this.X=!1;this.N=[]}g.prototype.get=function(a){if(!(a>this.length-1||0>a)){var b=a%this.chunkSize;return this.pa(a/this.chunkSize|0)[b]}};g.prototype.Ia=function(a){this.pa=a};g.prototype.ia=function(){var a=new XMLHttpRequest;a.open("HEAD",c,!1);a.send(null);if(!(200<=a.status&&300>a.status||304===a.status))throw Error("Couldn't load "+c+". Status: "+a.status);var b=Number(a.getResponseHeader("Content-length")),d,f=(d=a.getResponseHeader("Accept-Ranges"))&&"bytes"===
d;a=(d=a.getResponseHeader("Content-Encoding"))&&"gzip"===d;var g=1048576;f||(g=b);var h=this;h.Ia(function(a){var d=a*g,f=(a+1)*g-1;f=Math.min(f,b-1);if("undefined"===typeof h.N[a]){var n=h.N;if(d>f)throw Error("invalid range ("+d+", "+f+") or no bytes requested!");if(f>b-1)throw Error("only "+b+" bytes available! programmer error!");var m=new XMLHttpRequest;m.open("GET",c,!1);b!==g&&m.setRequestHeader("Range","bytes="+d+"-"+f);"undefined"!=typeof Uint8Array&&(m.responseType="arraybuffer");m.overrideMimeType&&
m.overrideMimeType("text/plain; charset=x-user-defined");m.send(null);if(!(200<=m.status&&300>m.status||304===m.status))throw Error("Couldn't load "+c+". Status: "+m.status);d=void 0!==m.response?new Uint8Array(m.response||[]):I(m.responseText||"",!0);n[a]=d}if("undefined"===typeof h.N[a])throw Error("doXHR failed!");return h.N[a]});if(a||!b)g=b=1,g=b=this.pa(0).length,console.log("LazyFiles on gzip forces download of the whole file when length is accessed");this.ya=b;this.wa=g;this.X=!0};if("undefined"!==
typeof XMLHttpRequest){if(!q)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var h=new g;Object.defineProperties(h,{length:{get:function(){this.X||this.ia();return this.ya}},chunkSize:{get:function(){this.X||this.ia();return this.wa}}});var n=void 0}else n=c,h=void 0;var m=Pb(a,b,d,f);h?m.b=h:n&&(m.b=null,m.url=n);Object.defineProperties(m,{g:{get:function(){return this.b.length}}});var t={};Object.keys(m.f).forEach(function(a){var b=
m.f[a];t[a]=function(){if(!Sb(m))throw new H(F.A);return b.apply(null,arguments)}});t.read=function(a,b,c,d,f){if(!Sb(m))throw new H(F.A);a=a.node.b;if(f>=a.length)return 0;d=Math.min(a.length-f,d);assert(0<=d);if(a.slice)for(var g=0;g<d;g++)b[c+g]=a[f+g];else for(g=0;g<d;g++)b[c+g]=a.get(f+g);return d};m.f=t;return m}
function Ub(a,b,c,d,f,g,h,n,m,t){function z(c){function z(c){t&&t();n||Qb(a,b,c,d,f,m);g&&g();Sa()}var D=!1;e.preloadPlugins.forEach(function(a){!D&&a.canHandle(N)&&(a.handle(c,N,z,function(){h&&h();Sa()}),D=!0)});D||z(c)}Browser.Pc();var N=b?ab(G(a,b)):a;Qa();"string"==typeof c?Browser.Lc(c,function(a){z(a)},h):z(c)}var FS={},tb,zb,Gb,W=0;function X(){W+=4;return x[W-4>>2]}function Y(){var a=O[X()];if(!a)throw new H(F.L);return a}function Vb(a){return Math.pow(2,a)}var Z=v;v+=48;sa(I("GMT"),2);
var Wb=v,Xb=v+=16,Yb=v+=16;v+=16;function Zb(){function a(a){return(a=a.toTimeString().match(/\(([A-Za-z ]+)\)$/))?a[1]:"GMT"}if(!$b){$b=!0;x[Yb>>2]=60*(new Date).getTimezoneOffset();var b=new Date(2E3,0,1),c=new Date(2E3,6,1);x[Xb>>2]=Number(b.getTimezoneOffset()!=c.getTimezoneOffset());var d=a(b),f=a(c);d=sa(I(d),0);f=sa(I(f),0);c.getTimezoneOffset()<b.getTimezoneOffset()?(x[Wb>>2]=d,x[Wb+4>>2]=f):(x[Wb>>2]=f,x[Wb+4>>2]=d)}}var $b;Kb();P=Array(4096);Ab(J,"/");T("/tmp");T("/home");T("/home/web_user");
(function(){T("/dev");db(259,{read:function(){return 0},write:function(a,b,f,g){return g}});Cb("/dev/null",259);cb(1280,fb);cb(1536,gb);Cb("/dev/tty",1280);Cb("/dev/tty1",1536);if("undefined"!==typeof crypto){var a=new Uint8Array(1);var b=function(){crypto.getRandomValues(a);return a[0]}}else b=r?function(){return require("crypto").randomBytes(1)[0]}:function(){return 256*Math.random()|0};V("/dev","random",b);V("/dev","urandom",b);T("/dev/shm");T("/dev/shm/tmp")})();T("/proc");T("/proc/self");T("/proc/self/fd");
Ab({j:function(){var a=ib("/proc/self","fd",16895,73);a.c={lookup:function(a,c){var b=O[+c];if(!b)throw new H(F.L);a={parent:null,j:{sa:"fake"},c:{readlink:function(){return b.path}}};return a.parent=a}};return a}},"/proc/self/fd");
Ia.unshift(function(){if(!e.noFSInit&&!Lb){assert(!Lb,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");Lb=!0;Kb();e.stdin=e.stdin;e.stdout=e.stdout;e.stderr=e.stderr;e.stdin?V("/dev","stdin",e.stdin):Db("/dev/tty","/dev/stdin");e.stdout?V("/dev","stdout",null,e.stdout):Db("/dev/tty","/dev/stdout");e.stderr?V("/dev","stderr",null,e.stderr):Db("/dev/tty1","/dev/stderr");var a=
U("/dev/stdin","r");assert(0===a.fd,"invalid handle for stdin ("+a.fd+")");a=U("/dev/stdout","w");assert(1===a.fd,"invalid handle for stdout ("+a.fd+")");a=U("/dev/stderr","w");assert(2===a.fd,"invalid handle for stderr ("+a.fd+")")}});Ja.push(function(){ob=!1});Ka.push(function(){Lb=!1;var a=e._fflush;a&&a(0);for(a=0;a<O.length;a++){var b=O[a];b&&Hb(b)}});e.FS_createFolder=Nb;e.FS_createPath=Ob;e.FS_createDataFile=Qb;e.FS_createPreloadedFile=Ub;e.FS_createLazyFile=Tb;e.FS_createLink=Rb;
e.FS_createDevice=V;e.FS_unlink=Eb;Ia.unshift(function(){});Ka.push(function(){});if(r){var fs=require("fs"),kb=require("path");M.Ka()}w=ea(4);Ba=Ca=ja(v);Da=Ba+Fa;Ea=ja(Da);x[w>>2]=Ea;fa=!0;function I(a,b){for(var c=0,d=0;d<a.length;++d){var f=a.charCodeAt(d);55296<=f&&57343>=f&&(f=65536+((f&1023)<<10)|a.charCodeAt(++d)&1023);127>=f?++c:c=2047>=f?c+2:65535>=f?c+3:2097151>=f?c+4:67108863>=f?c+5:c+6}c=Array(c+1);a=pa(a,c,0,c.length);b&&(c.length=a);return c}e.wasmTableSize=4152;
e.wasmMaxTableSize=4152;e.za={};
e.Aa={abort:A,enlargeMemory:function(){ia()},getTotalMemory:function(){return y},abortOnCannotGrowMemory:ia,___assert_fail:function(a,b,c,d){A("Assertion failed: "+C(a)+", at: "+[b?C(b):"unknown filename",c,d?C(d):"unknown function"])},___lock:function(){},___setErrNo:Va,___syscall114:function(a,b){W=b;try{A("cannot wait on child processes")}catch(c){return"undefined"!==typeof FS&&c instanceof H||A(c),-c.o}},___syscall140:function(a,b){W=b;try{var c=Y();X();var d=X(),f=X(),g=X();Ib(c,d,g);x[f>>2]=
c.position;c.W&&0===d&&0===g&&(c.W=null);return 0}catch(h){return"undefined"!==typeof FS&&h instanceof H||A(h),-h.o}},___syscall145:function(a,b){W=b;try{var c=Y(),d=X();a:{var f=X();for(b=a=0;b<f;b++){var g=x[d+(8*b+4)>>2],h=c,n=x[d+8*b>>2],m=g,t=void 0,z=oa;if(0>m||0>t)throw new H(F.h);if(1===(h.flags&2097155))throw new H(F.L);if(K(h.node.mode))throw new H(F.H);if(!h.f.read)throw new H(F.h);var N=!0;if("undefined"===typeof t)t=h.position,N=!1;else if(!h.seekable)throw new H(F.M);var D=h.f.read(h,
z,n,m,t);N||(h.position+=D);var ua=D;if(0>ua){var ta=-1;break a}a+=ua;if(ua<g)break}ta=a}return ta}catch(Ra){return"undefined"!==typeof FS&&Ra instanceof H||A(Ra),-Ra.o}},___syscall146:function(a,b){W=b;try{var c=Y(),d=X();a:{var f=X();for(b=a=0;b<f;b++){var g=Jb(c,oa,x[d+8*b>>2],x[d+(8*b+4)>>2],void 0);if(0>g){var h=-1;break a}a+=g}h=a}return h}catch(n){return"undefined"!==typeof FS&&n instanceof H||A(n),-n.o}},___syscall221:function(a,b){W=b;try{var c=Y();switch(X()){case 0:var d=X();return 0>d?
-F.h:U(c.path,c.flags,0,d).fd;case 1:case 2:return 0;case 3:return c.flags;case 4:return d=X(),c.flags|=d,0;case 12:case 12:return d=X(),ya[d+0>>1]=2,0;case 13:case 14:case 13:case 14:return 0;case 16:case 8:return-F.h;case 9:return Va(F.h),-1;default:return-F.h}}catch(f){return"undefined"!==typeof FS&&f instanceof H||A(f),-f.o}},___syscall5:function(a,b){W=b;try{var c=C(X()),d=X(),f=X();return U(c,d,f).fd}catch(g){return"undefined"!==typeof FS&&g instanceof H||A(g),-g.o}},___syscall54:function(a,
b){W=b;try{var c=Y(),d=X();switch(d){case 21509:case 21505:return c.tty?0:-F.C;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return c.tty?0:-F.C;case 21519:if(!c.tty)return-F.C;var f=X();return x[f>>2]=0;case 21520:return c.tty?-F.h:-F.C;case 21531:a=f=X();if(!c.f.Da)throw new H(F.C);return c.f.Da(c,d,a);case 21523:return c.tty?0:-F.C;default:A("bad ioctl syscall "+d)}}catch(g){return"undefined"!==typeof FS&&g instanceof H||A(g),-g.o}},___syscall6:function(a,b){W=b;try{var c=Y();
Hb(c);return 0}catch(d){return"undefined"!==typeof FS&&d instanceof H||A(d),-d.o}},___unlock:function(){},_abort:function(){e.abort()},_emscripten_memcpy_big:function(a,b,c){B.set(B.subarray(b,b+c),a);return a},_emscripten_run_script:function(a){eval(C(a))},_exit:function(a){e.exit(a)},_gettimeofday:function(a){var b=Date.now();x[a>>2]=b/1E3|0;x[a+4>>2]=b%1E3*1E3|0;return 0},_llvm_exp2_f64:function(){return Vb.apply(null,arguments)},_localtime:function(a){Zb();a=new Date(1E3*x[a>>2]);x[Z>>2]=a.getSeconds();
x[Z+4>>2]=a.getMinutes();x[Z+8>>2]=a.getHours();x[Z+12>>2]=a.getDate();x[Z+16>>2]=a.getMonth();x[Z+20>>2]=a.getFullYear()-1900;x[Z+24>>2]=a.getDay();var b=new Date(a.getFullYear(),0,1);x[Z+28>>2]=(a.getTime()-b.getTime())/864E5|0;x[Z+36>>2]=-(60*a.getTimezoneOffset());var c=(new Date(2E3,6,1)).getTimezoneOffset();b=b.getTimezoneOffset();a=(c!=b&&a.getTimezoneOffset()==Math.min(b,c))|0;x[Z+32>>2]=a;x[Z+40>>2]=x[Wb+(a?4:0)>>2];return Z},_time:function(a){var b=Date.now()/1E3|0;a&&(x[a>>2]=b);return b},
_uade_notify_song_update:function(a,b,c,d){a=C(a);b=C(b);c=C(c);d=C(d);var f=a.split("\n"),g={},h=null,n=null;for(a=0;a<f.length;a++){var m=f[a];if(aa(m,"File name:")){var t=g.title?g.title:[];t.push(m.split("/").pop().trim());g.title=t}else if(aa(m,"Song title:"))t=g.title?g.title:[],t.unshift(m.substring(11).trim()),g.title=t;else if(aa(m,"File prefix:"))g.prefix=m.substring(12).trim();else{a:{var z=m,N="MODULENAME: AUTHORNAME: SPECIALINFO: VERSION: CREDITS: Remarks:".split(" ");for(t=0;t<N.length;t++){var D=
N[t];if(z.match("^"+D)==D){t=D;break a}}t=null}t?(h&&n&&(g[h]=n,n=null),h=t.substring(0,t.length-1).toLowerCase()):(m=m.trim(),m.length&&h&&(n||(n=[]),n.push(m)))}}h&&n&&(g[h]=n);a=[];for(f=Object.keys(g).length-2;3>=a.length&&0<f;)"modulename"in g?(a.push(g.modulename.shift()),delete g.modulename,f--):"authorname"in g?(a.push(g.authorname.shift()),delete g.authorname,f--):"specialinfo"in g?(a.push(g.specialinfo.shift()),delete g.specialinfo,f--):"version"in g?(a.push(g.version.shift()),0==g.version.length&&
(delete g.version,f--)):"credits"in g?(a.push(g.credits.shift()),0==g.credits.length&&(delete g.credits,f--)):"remarks"in g&&(a.push(g.remarks.shift()),0==g.remarks.length&&(delete g.remarks,f--));3>a.length&&g.title&&a.push(g.title.shift()+" ("+g.prefix+")");g=1<a.length?a[1]:"";f=2<a.length?a[2]:"";h=[];h.info1=0<a.length?a[0]:"";h.info2=g;h.info3=f;h.minText=b;h.maxText=c;h.currText=d;return window.songUpdateCallback(h)},_uade_request_file:function(a){return window.fileRequestCallback(a)},_uade_request_file_size:function(a){return window.fileSizeRequestCallback(a)},
DYNAMICTOP_PTR:w,STACKTOP:Ca};var ac=e.asm(e.za,e.Aa,buffer);e.asm=ac;e.___errno_location=function(){return e.asm.___errno_location.apply(null,arguments)};e._emu_compute_audio_samples=function(){return e.asm._emu_compute_audio_samples.apply(null,arguments)};e._emu_get_audio_buffer=function(){return e.asm._emu_get_audio_buffer.apply(null,arguments)};e._emu_get_audio_buffer_length=function(){return e.asm._emu_get_audio_buffer_length.apply(null,arguments)};
e._emu_init=function(){return e.asm._emu_init.apply(null,arguments)};e._emu_is_exit=function(){return e.asm._emu_is_exit.apply(null,arguments)};e._emu_prepare=function(){return e.asm._emu_prepare.apply(null,arguments)};e._emu_set_subsong=function(){return e.asm._emu_set_subsong.apply(null,arguments)};e._emu_teardown=function(){return e.asm._emu_teardown.apply(null,arguments)};e._free=function(){return e.asm._free.apply(null,arguments)};
var va=e._malloc=function(){return e.asm._malloc.apply(null,arguments)},na=e.stackAlloc=function(){return e.asm.stackAlloc.apply(null,arguments)},ma=e.stackRestore=function(){return e.asm.stackRestore.apply(null,arguments)},la=e.stackSave=function(){return e.asm.stackSave.apply(null,arguments)};e.dynCall_v=function(){return e.asm.dynCall_v.apply(null,arguments)};e.dynCall_vi=function(){return e.asm.dynCall_vi.apply(null,arguments)};e.asm=ac;
e.ccall=function(a,b,c,d){var f=e["_"+a];assert(f,"Cannot call unknown function "+a+", make sure it is exported");var g=[];a=0;if(d)for(var h=0;h<d.length;h++){var n=ra[c[h]];n?(0===a&&(a=la()),g[h]=n(d[h])):g[h]=d[h]}c=f.apply(null,g);"string"===b&&(c=C(c));0!==a&&ma(a);return c};e.getMemory=function(a){return fa?Ma?va(a):ha(a):ea(a)};e.Pointer_stringify=C;e.addRunDependency=Qa;e.removeRunDependency=Sa;e.FS_createFolder=Nb;e.FS_createPath=Ob;e.FS_createDataFile=Qb;e.FS_createPreloadedFile=Ub;
e.FS_createLazyFile=Tb;e.FS_createLink=Rb;e.FS_createDevice=V;e.FS_unlink=Eb;function u(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}u.prototype=Error();u.prototype.constructor=u;var bc=null;Pa=function cc(){e.calledRun||dc();e.calledRun||(Pa=cc)};
function dc(){function a(){if(!e.calledRun&&(e.calledRun=!0,!ka)){Ma||(Ma=!0,Ga(Ia));Ga(Ja);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var a=e.postRun.shift();La.unshift(a)}Ga(La)}}null===bc&&(bc=Date.now());if(!(0<E)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Na();Ga(Ha);0<E||e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},
1);a()},1)):a())}}e.run=dc;e.exit=function(a,b){if(!b||!e.noExitRuntime||0!==a){if(!e.noExitRuntime&&(ka=!0,Ca=void 0,Ga(Ka),e.onExit))e.onExit(a);r&&process.exit(a);e.quit(a,new u(a))}};function A(a){if(e.onAbort)e.onAbort(a);void 0!==a?(e.print(a),e.printErr(a),a=JSON.stringify(a)):a="";ka=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=A;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();e.noExitRuntime=!0;dc();
  return {
	Module: Module,  // expose original Module
  };
})(window.spp_backend_state_UADE);
/*
 uade_adapter.js: Adapts UADE backend to generic WebAudio/ScriptProcessor player.
 
 Known limitation: seeking is not supported by UADE
 
 version 1.01 with added support for "outside files"
 
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
UADEBackendAdapter = (function(){ var $this = function (basePath, modlandMode) { 
	$this.base.call(this, backend_UADE.Module, 2);
	
		// aka dumshit ftp.modland.com mode:
		this.modlandMode= (typeof modlandMode != 'undefined') ? modlandMode : 0;
		this.originalFile= "";
		this.modlandMap= {};	// mapping of weird shit filenames used on modland 

		this.basePath= basePath;
		this.isReady= false;
		
		if (!backend_UADE.Module.notReady) {
			// in sync scenario the "onRuntimeInitialized" has already fired before execution gets here,
			// i.e. it has to be called explicitly here (in async scenario "onRuntimeInitialized" will trigger
			// the call directly)
			this.doOnAdapterReady();
		}		
	}; 
	// UADE's sample buffer contains 2-byte integer sample data (i.e. must be rescaled) 
	// of 2 interleaved channels
	extend(EmsHEAP16BackendAdapter, $this, {
		doOnAdapterReady: function() {
			// called when runtime is ready (e.g. asynchronously when WASM is loaded)
			this.Module.ccall('emu_prepare', 'number', ['string'], [this.basePath]);	// init virtual FS
			this.isReady = true;
		},
		isAdapterReady: function() { 
			return this.isReady;
		},		
		
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
			var status= this.Module.ccall('emu_compute_audio_samples', 'number');
			
			if (status == -1)  {
				return status;	// waiting for some file
			} else if (status > 0) {
				// song is done or error (file can not be loaded with no hope of recovery)

				var isExit= this.Module.ccall('emu_is_exit', 'number');
				if ( isExit) {
					return 2;		// error
				} else {
					return 1;		// end
				}
			}
			return 0;	
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
			
			if (fullFilename.substring(0, this.basePath.length) == this.basePath) {
				fullFilename= fullFilename.substring(this.basePath.length);
			}
			// since uade needs the basePath to *ALWAYS* point to the folder where the various config 
			// files can be found, the filename returned here is actually still a path 
			return [this.basePath, fullFilename];
		},
		mapCacheFileName: function (name) {
			return name;	// might need to use toUpper() in case there are inconsistent refs
		},
		mapModlandShit: function (input) {
			// modland uses wrong (lower) case for practically all sample file names.. damn jerks
			var output= input.replace(".adsc.AS", ".adsc.as");	// AudioSculpture
			output= output.replace("/SMP.", "/smp.");	// Dirk Bialluch, Dynamic Synthesizer, Jason Page, Magnetic Fields Packer, Quartet ST, Synth Dream, Thomas Hermann 
			output= output.replace(".SSD", ".ssd");		// Paul Robotham 
			output= output.replace(".INS", ".ins");	// Richard Joseph  
			
			if (this.originalFile.endsWith(".soc") && output.endsWith(".so")) {	// Hippel ST COSO 
				output= output.substr(0, output.lastIndexOf("/")) + "/smp.set";
			} else if (this.originalFile.endsWith(".pap") && output.endsWith(".pa")) { // Pierre Adane Packer 
				output= output.substr(0, output.lastIndexOf("/")) + "/smp.set";
			} else if (this.originalFile.endsWith(".osp") && output.endsWith(".os")) { // Synth Pack  
				output= output.substr(0, output.lastIndexOf("/")) + "/smp.set";
			}
			
			if (input != output)	// remember the filename mapping (path is the same)
				this.modlandMap[output.replace(/^.*[\\\/]/, '')]= input.replace(/^.*[\\\/]/, '');	// needed to create FS expected by "amiga"
			
			return output;
		},		
		mapBackendFilename: function (name) {
			// triggered by UADE whenever it tries to load a file, the input "name" is
			// composed of UADE's basePath combined with the file that uade is looking for:
			// the "name" is what UADE later WILL USE for fopen (which is NOT affected by any mappings 
			// that might be done here.. i.e. in order to function the file must be installed in the FS
			// under exactly that path/name!)
			var input= this.Module.Pointer_stringify(name);
			
			if (this.modlandMode) input= this.mapModlandShit(input);
		
			return input;
		},
		registerFileData: function(pathFilenameArray, data) {
			// NOTE: UADE uses the "C fopen" based impl to access all files, i.e. the files 
			// MUST BE properly provided within the FS (the local cache within the player is nothing more than a 
			// convenience shortcut to detect if data is  already available - but irrelevant to UADE)
			
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

			if (this.modlandMode) {
				if (typeof this.modlandMap[tmpPpathFilenameArray[1]] != 'undefined') {
					tmpPpathFilenameArray[1]= this.modlandMap[tmpPpathFilenameArray[1]];	// reverse map
				}
			}
			// setup data in our virtual FS (the next access should then be OK)
			return this.registerEmscriptenFileData(tmpPpathFilenameArray, data);
		},
		loadMusicData: function(sampleRate, path, filename, data, options) {
			if (path.substr(-1) === "/") path= path.substring(0, path.length-1);
			
			var ret = this.Module.ccall('emu_init', 'number', 
								['number', 'string', 'string'], 
								[sampleRate, path, filename]);
				
			if (ret == 0) {
				// UADE's maximum sample rate is SOUNDTICKS_NTSC 3579545 which 
				// should never be a relevant limitation here..
				var inputSampleRate = sampleRate;
				this.resetSampleRate(sampleRate, inputSampleRate); 
			}
			return ret;
		},
		evalTrackOptions: function(options) {
			this.initSongAttributes();
			
			if ((typeof options.timeout != 'undefined') && (options.timeout >0)) {
				ScriptNodePlayer.getInstance().setPlaybackTimeout(options.timeout*1000);
			}			
			if(options.track >0) {
				// songs without multiple subsongs seem to take this very badly.. (e.g. 'powerdrift')
				return this.Module.ccall('emu_set_subsong', 'number', ['number'], [options.track]);
			}
			return 0;
		},				
		teardown: function() {
//			this.Module.ccall('emu_teardown', 'number'); for some reason wasn't used in the old version
		},		
		
		initSongAttributes: function() {
			this.songInfo= new Object();
			this.songInfo.info1= "";
			this.songInfo.info2= "";
			this.songInfo.info3= "";;
			this.songInfo.mins= "";
			this.songInfo.maxs= "";
			this.songInfo.curs= "";			
		},
		getSongInfoMeta: function() {
			return {info1: String,
					info2: String,
					info3: String,
					mins: String,
					maxs: String,
					curs: String 
					};
		},
		updateSongInfo: function(filename, result) {
			result.info1= this.songInfo.info1;
			result.info2= this.songInfo.info2;
			result.info3= this.songInfo.info3;;			
			result.mins= this.songInfo.minText;
			result.maxs= this.songInfo.maxText;
			result.curs= this.songInfo.currText;
		},
		// --------------------------- async file loading stuff -------------------------
		handleBackendSongAttributes: function(backendAttr, target) {
			// UADE "asynchronously" pushes a respective update..
			this.songInfo.info1= backendAttr.info1;
			this.songInfo.info2= backendAttr.info2;
			this.songInfo.info3= backendAttr.info3;;		
			this.songInfo.mins= backendAttr.minText;
			this.songInfo.maxs= backendAttr.maxText;
			this.songInfo.curs= backendAttr.currText;
			
			this.updateSongInfo("", target);		
		},
		
	});	return $this; })();
