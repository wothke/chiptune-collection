// create separate namespace for all the Emscripten stuff.. otherwise naming clashes may occur especially when 
// optimizing using closure compiler..
window.spp_backend_state_ASAP= {
	notReady: true,
	adapterCallback: function(){}	// overwritten later	
};
window.spp_backend_state_ASAP["onRuntimeInitialized"] = function() {	// emscripten callback needed in case async init is used (e.g. for WASM)
	this.notReady= false;
	this.adapterCallback();
}.bind(window.spp_backend_state_ASAP);

var backend_ASAP = (function(Module) {var a;a||(a=typeof Module !== 'undefined' ? Module : {});var l={},m;for(m in a)a.hasOwnProperty(m)&&(l[m]=a[m]);a.arguments=[];a.thisProgram="./this.program";a.quit=function(b,d){throw d;};a.preRun=[];a.postRun=[];var n=!1,p=!1,q=!1,r=!1;
if(a.ENVIRONMENT)if("WEB"===a.ENVIRONMENT)n=!0;else if("WORKER"===a.ENVIRONMENT)p=!0;else if("NODE"===a.ENVIRONMENT)q=!0;else if("SHELL"===a.ENVIRONMENT)r=!0;else throw Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");else n="object"===typeof window,p="function"===typeof importScripts,q="object"===typeof process&&"function"===typeof require&&!n&&!p,r=!n&&!q&&!p;
if(q){var t,u;a.read=function(b,d){t||(t=require("fs"));u||(u=require("path"));b=u.normalize(b);b=t.readFileSync(b);return d?b:b.toString()};a.readBinary=function(b){b=a.read(b,!0);b.buffer||(b=new Uint8Array(b));assert(b.buffer);return b};1<process.argv.length&&(a.thisProgram=process.argv[1].replace(/\\/g,"/"));a.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=a);process.on("uncaughtException",function(b){if(!(b instanceof v))throw b;});process.on("unhandledRejection",
function(){process.exit(1)});a.inspect=function(){return"[Emscripten Module object]"}}else if(r)"undefined"!=typeof read&&(a.read=function(b){return read(b)}),a.readBinary=function(b){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(b));b=read(b,"binary");assert("object"===typeof b);return b},"undefined"!=typeof scriptArgs?a.arguments=scriptArgs:"undefined"!=typeof arguments&&(a.arguments=arguments),"function"===typeof quit&&(a.quit=function(b){quit(b)});else if(n||p)a.read=function(b){var d=
new XMLHttpRequest;d.open("GET",b,!1);d.send(null);return d.responseText},p&&(a.readBinary=function(b){var d=new XMLHttpRequest;d.open("GET",b,!1);d.responseType="arraybuffer";d.send(null);return new Uint8Array(d.response)}),a.readAsync=function(b,d,e){var c=new XMLHttpRequest;c.open("GET",b,!0);c.responseType="arraybuffer";c.onload=function(){200==c.status||0==c.status&&c.response?d(c.response):e()};c.onerror=e;c.send(null)},"undefined"!=typeof arguments&&(a.arguments=arguments),a.setWindowTitle=
function(b){document.title=b};a.print="undefined"!==typeof console?console.log:"undefined"!==typeof print?print:null;a.printErr="undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn||a.print;a.print=a.print;a.printErr=a.printErr;for(m in l)l.hasOwnProperty(m)&&(a[m]=l[m]);l=void 0;function w(b){var d;d||(d=16);return Math.ceil(b/d)*d}var x=0;function assert(b,d){b||y("Assertion failed: "+d)}
var E={stackSave:function(){z()},stackRestore:function(){A()},arrayToC:function(b){var d=B(b.length);C.set(b,d);return d},stringToC:function(b){var d=0;if(null!==b&&void 0!==b&&0!==b){var e=(b.length<<2)+1;d=B(e);var c=d,g=D;if(0<e){e=c+e-1;for(var h=0;h<b.length;++h){var f=b.charCodeAt(h);55296<=f&&57343>=f&&(f=65536+((f&1023)<<10)|b.charCodeAt(++h)&1023);if(127>=f){if(c>=e)break;g[c++]=f}else{if(2047>=f){if(c+1>=e)break;g[c++]=192|f>>6}else{if(65535>=f){if(c+2>=e)break;g[c++]=224|f>>12}else{if(2097151>=
f){if(c+3>=e)break;g[c++]=240|f>>18}else{if(67108863>=f){if(c+4>=e)break;g[c++]=248|f>>24}else{if(c+5>=e)break;g[c++]=252|f>>30;g[c++]=128|f>>24&63}g[c++]=128|f>>18&63}g[c++]=128|f>>12&63}g[c++]=128|f>>6&63}g[c++]=128|f&63}}g[c]=0}}return d}},aa={string:E.stringToC,array:E.arrayToC};
function F(b,d){if(0===d||!b)return"";for(var e=0,c,g=0;;){c=D[b+g>>0];e|=c;if(0==c&&!d)break;g++;if(d&&g==d)break}d||(d=g);c="";if(128>e){for(;0<d;)e=String.fromCharCode.apply(String,D.subarray(b,b+Math.min(d,1024))),c=c?c+e:e,b+=1024,d-=1024;return c}a:{d=D;for(e=b;d[e];)++e;if(16<e-b&&d.subarray&&G)b=G.decode(d.subarray(b,e));else for(e="";;){c=d[b++];if(!c){b=e;break a}if(c&128)if(g=d[b++]&63,192==(c&224))e+=String.fromCharCode((c&31)<<6|g);else{var h=d[b++]&63;if(224==(c&240))c=(c&15)<<12|g<<
6|h;else{var f=d[b++]&63;if(240==(c&248))c=(c&7)<<18|g<<12|h<<6|f;else{var k=d[b++]&63;if(248==(c&252))c=(c&3)<<24|g<<18|h<<12|f<<6|k;else{var J=d[b++]&63;c=(c&1)<<30|g<<24|h<<18|f<<12|k<<6|J}}}65536>c?e+=String.fromCharCode(c):(c-=65536,e+=String.fromCharCode(55296|c>>10,56320|c&1023))}else e+=String.fromCharCode(c)}}return b}var G="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");var buffer,C,D,H,I;
function ba(){a.HEAP8=C=new Int8Array(buffer);a.HEAP16=H=new Int16Array(buffer);a.HEAP32=I=new Int32Array(buffer);a.HEAPU8=D=new Uint8Array(buffer);a.HEAPU16=new Uint16Array(buffer);a.HEAPU32=new Uint32Array(buffer);a.HEAPF32=new Float32Array(buffer);a.HEAPF64=new Float64Array(buffer)}var K,L,M,N,O,P,Q,R;K=L=N=O=P=Q=R=0;M=!1;
function ca(){y("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+S+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}var T=a.TOTAL_STACK||5242880,S=a.TOTAL_MEMORY||16777216;S<T&&a.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+S+"! (TOTAL_STACK="+T+")");
a.buffer?buffer=a.buffer:("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(a.wasmMemory=new WebAssembly.Memory({initial:S/65536,maximum:S/65536}),buffer=a.wasmMemory.buffer):buffer=new ArrayBuffer(S),a.buffer=buffer);ba();I[0]=1668509029;H[1]=25459;if(115!==D[2]||99!==D[3])throw"Runtime error: expected the system to be little-endian!";
function U(b){for(;0<b.length;){var d=b.shift();if("function"==typeof d)d();else{var e=d.f;"number"===typeof e?void 0===d.a?a.dynCall_v(e):a.dynCall_vi(e,d.a):e(void 0===d.a?null:d.a)}}}var da=[],ea=[],fa=[],ha=[],ia=[],ja=!1;function ka(){var b=a.preRun.shift();da.unshift(b)}var V=0,W=null,X=null;a.preloadedImages={};a.preloadedAudios={};function Y(b){return String.prototype.startsWith?b.startsWith("data:application/octet-stream;base64,"):0===b.indexOf("data:application/octet-stream;base64,")}
(function(){function b(){try{if(a.wasmBinary)return new Uint8Array(a.wasmBinary);if(a.readBinary)return a.readBinary(g);throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";}catch(na){y(na)}}function d(){return a.wasmBinary||!n&&!p||"function"!==typeof fetch?new Promise(function(c){c(b())}):fetch(g,{credentials:"same-origin"}).then(function(b){if(!b.ok)throw"failed to load wasm binary file at '"+
g+"'";return b.arrayBuffer()}).catch(function(){return b()})}function e(b){function c(b){k=b.exports;if(k.memory){b=k.memory;var c=a.buffer;b.byteLength<c.byteLength&&a.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");c=new Int8Array(c);(new Int8Array(b)).set(c);a.buffer=buffer=b;ba()}a.asm=k;a.usingWasm=!0;V--;a.monitorRunDependencies&&a.monitorRunDependencies(V);0==V&&(null!==W&&(clearInterval(W),W=null),X&&(b=X,X=null,b()))}
function e(b){c(b.instance)}function h(b){d().then(function(b){return WebAssembly.instantiate(b,f)}).then(b).catch(function(b){a.printErr("failed to asynchronously prepare wasm: "+b);y(b)})}if("object"!==typeof WebAssembly)return a.printErr("no native wasm support detected"),!1;if(!(a.wasmMemory instanceof WebAssembly.Memory))return a.printErr("no native wasm Memory in use"),!1;b.memory=a.wasmMemory;f.global={NaN:NaN,Infinity:Infinity};f["global.Math"]=Math;f.env=b;V++;a.monitorRunDependencies&&a.monitorRunDependencies(V);
if(a.instantiateWasm)try{return a.instantiateWasm(f,c)}catch(oa){return a.printErr("Module.instantiateWasm callback failed with error: "+oa),!1}a.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Y(g)||"function"!==typeof fetch?h(e):WebAssembly.instantiateStreaming(fetch(g,{credentials:"same-origin"}),f).then(e).catch(function(b){a.printErr("wasm streaming compile failed: "+b);a.printErr("falling back to ArrayBuffer instantiation");h(e)});return{}}var c="asap.wast",g="asap.wasm",h=
"asap.temp.asm.js";"function"===typeof a.locateFile&&(Y(c)||(c=a.locateFile(c)),Y(g)||(g=a.locateFile(g)),Y(h)||(h=a.locateFile(h)));var f={global:null,env:null,asm2wasm:{"f64-rem":function(b,c){return b%c},"debugger":function(){debugger}},parent:a},k=null;a.asmPreload=a.asm;var J=a.reallocBuffer;a.reallocBuffer=function(b){if("asmjs"===pa)var c=J(b);else a:{var d=a.usingWasm?65536:16777216;0<b%d&&(b+=d-b%d);d=a.buffer.byteLength;if(a.usingWasm)try{c=-1!==a.wasmMemory.grow((b-d)/65536)?a.buffer=a.wasmMemory.buffer:
null;break a}catch(sa){c=null;break a}c=void 0}return c};var pa="";a.asm=function(b,c){if(!c.table){b=a.wasmTableSize;void 0===b&&(b=1024);var d=a.wasmMaxTableSize;c.table="object"===typeof WebAssembly&&"function"===typeof WebAssembly.Table?void 0!==d?new WebAssembly.Table({initial:b,maximum:d,element:"anyfunc"}):new WebAssembly.Table({initial:b,element:"anyfunc"}):Array(b);a.wasmTable=c.table}c.memoryBase||(c.memoryBase=a.STATIC_BASE);c.tableBase||(c.tableBase=0);(c=e(c))||y("no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods");
return c}})();K=1024;L=K+27744;ea.push();a.STATIC_BASE=K;a.STATIC_BUMP=27744;L+=16;assert(!M);var la=L;L=L+4+15&-16;R=la;N=O=w(L);P=N+T;Q=w(P);I[R>>2]=Q;M=!0;a.wasmTableSize=0;a.wasmMaxTableSize=0;a.b={};a.c={enlargeMemory:function(){ca()},getTotalMemory:function(){return S},abortOnCannotGrowMemory:ca,___setErrNo:function(b){a.___errno_location&&(I[a.___errno_location()>>2]=b);return b},_emscripten_memcpy_big:function(b,d,e){D.set(D.subarray(d,d+e),b);return b},DYNAMICTOP_PTR:R,STACKTOP:O};
var ma=a.asm(a.b,a.c,buffer);a.asm=ma;a._asap_generate=function(){return a.asm._asap_generate.apply(null,arguments)};a._asap_getInfo=function(){return a.asm._asap_getInfo.apply(null,arguments)};a._asap_load=function(){return a.asm._asap_load.apply(null,arguments)};a._asap_playSong=function(){return a.asm._asap_playSong.apply(null,arguments)};a._asapinfo_GetAuthor=function(){return a.asm._asapinfo_GetAuthor.apply(null,arguments)};
a._asapinfo_GetChannels=function(){return a.asm._asapinfo_GetChannels.apply(null,arguments)};a._asapinfo_GetDate=function(){return a.asm._asapinfo_GetDate.apply(null,arguments)};a._asapinfo_GetDefaultSong=function(){return a.asm._asapinfo_GetDefaultSong.apply(null,arguments)};a._asapinfo_GetDuration=function(){return a.asm._asapinfo_GetDuration.apply(null,arguments)};a._asapinfo_GetLoop=function(){return a.asm._asapinfo_GetLoop.apply(null,arguments)};
a._asapinfo_GetSongs=function(){return a.asm._asapinfo_GetSongs.apply(null,arguments)};a._asapinfo_GetTitleOrFilename=function(){return a.asm._asapinfo_GetTitleOrFilename.apply(null,arguments)};a._free=function(){return a.asm._free.apply(null,arguments)};a._malloc=function(){return a.asm._malloc.apply(null,arguments)};
var B=a.stackAlloc=function(){return a.asm.stackAlloc.apply(null,arguments)},A=a.stackRestore=function(){return a.asm.stackRestore.apply(null,arguments)},z=a.stackSave=function(){return a.asm.stackSave.apply(null,arguments)};a.asm=ma;
a.ccall=function(b,d,e,c){var g=a["_"+b];assert(g,"Cannot call unknown function "+b+", make sure it is exported");var h=[];b=0;if(c)for(var f=0;f<c.length;f++){var k=aa[e[f]];k?(0===b&&(b=z()),h[f]=k(c[f])):h[f]=c[f]}e=g.apply(null,h);"string"===d&&(e=F(e));0!==b&&A(b);return e};a.Pointer_stringify=F;function v(b){this.name="ExitStatus";this.message="Program terminated with exit("+b+")";this.status=b}v.prototype=Error();v.prototype.constructor=v;var qa=null;
X=function ra(){a.calledRun||Z();a.calledRun||(X=ra)};
function Z(){function b(){if(!a.calledRun&&(a.calledRun=!0,!x)){ja||(ja=!0,U(ea));U(fa);if(a.onRuntimeInitialized)a.onRuntimeInitialized();if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;){var b=a.postRun.shift();ia.unshift(b)}U(ia)}}null===qa&&(qa=Date.now());if(!(0<V)){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)ka();U(da);0<V||a.calledRun||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},
1);b()},1)):b())}}a.run=Z;a.exit=function(b,d){if(!d||!a.noExitRuntime||0!==b){if(!a.noExitRuntime&&(x=!0,O=void 0,U(ha),a.onExit))a.onExit(b);q&&process.exit(b);a.quit(b,new v(b))}};function y(b){if(a.onAbort)a.onAbort(b);void 0!==b?(a.print(b),a.printErr(b),b=JSON.stringify(b)):b="";x=!0;throw"abort("+b+"). Build with -s ASSERTIONS=1 for more info.";}a.abort=y;if(a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.pop()();a.noExitRuntime=!0;Z();
  return {
	Module: Module,  // expose original Module
  };
})(window.spp_backend_state_ASAP);
// Adapter: Hide the Emscripten specific implementation and provide the same kind of API
// that is used in the old version from the AIR project (so that the two implementations
// can be directly compared)

Info = function() {
	this.Module= backend_ASAP.Module;
	this.Module.ccall('asap_getInfo', 'number');
}
Info.prototype = {
	getTitleOrFilename: function() {
		var ret= this.Module.ccall('asapinfo_GetTitleOrFilename', 'number');
		return this.Module.Pointer_stringify(ret);
	},
	getAuthor: function() {
		var ret= this.Module.ccall('asapinfo_GetAuthor', 'number');
		return this.Module.Pointer_stringify(ret);
	},
	getDate: function() {
		var ret= this.Module.ccall('asapinfo_GetDate', 'number');
		return this.Module.Pointer_stringify(ret);
	},
	getSongs: function() {
		var ret= this.Module.ccall('asapinfo_GetSongs', 'number');
		return ret;
	},
	getDefaultSong: function() {
		var ret= this.Module.ccall('asapinfo_GetDefaultSong', 'number');
		return ret;
	},
	getLoop: function(id) {
		var ret = this.Module.ccall('asapinfo_GetLoop', 'number', ['number'], [id]);
		return ret;
	},
	getDuration: function(id) {
		var ret = this.Module.ccall('asapinfo_GetDuration', 'number', ['number'], [id]);
		return ret;
	},
	getChannels: function(id) {
		var ret = this.Module.ccall('asapinfo_GetChannels', 'number', ['number'], [id]);
		return ret;
	},
}

ASAP = function() {
	this.Module= backend_ASAP.Module;
}
ASAP.prototype = {
	load: function(name, module, moduleLen) {	
		var byteArray = new Uint8Array(module);

		var buf = this.Module._malloc(byteArray.length);
		this.Module.HEAPU8.set(byteArray, buf);
		var ret = this.Module.ccall('asap_load', 'number', ['string', 'number', 'number'], [name, buf, byteArray.length]);
		
		this.Module._free(buf);
	},
	getInfo: function() {
		return new Info();
	},
	playSong: function(id, duration, boostVolume) {
		var ret = this.Module.ccall('asap_playSong', 'number', ['number', 'number', 'number'], [id, duration, boostVolume]);
		return ret;

	},
	generate: function(buffer, samplesPerChannel, format) {
		format= 1; 		// always force 2 byte per sample

		// the caller always expects a 2 channel response even if the actual producer (below) only 
		// supplies samples for 1 channel ('buffer' is wrapped Float32Array and is large enough for 
		// data of 2 channels)
		
		var channels= this.getInfo().getChannels();
		var sampleSize= (format == 0) ? 1 : 2;		// in bytes

		var numOfBytesToFill= samplesPerChannel * channels * sampleSize;
		var buf = this.Module._malloc(numOfBytesToFill);		// alloc buffer for C code to use..
			
		var retLenBytes = this.Module.ccall('asap_generate', 'number', ['number', 'number', 'number'], [buf, numOfBytesToFill, format]);
		
		var result = (format==0) ?	this.Module.HEAPU8.subarray(buf, (buf+retLenBytes)): 
									this.Module.HEAP16.subarray(buf>>1, (buf+retLenBytes)>>1 );
							
		this.Module._free(buf);
		
		if (format == 0) {
			// unsigned 1 byte samples
			for (i= 0; i< result.length; i++) {
				var v= (result[i] - 0x7f) / 0x80;
				buffer.writeFloat(v);
				if (channels == 1) 
					buffer.writeFloat(v);
			}			
		} else {
			// signed 2 byte samples
			for (i= 0; i< result.length; i++) {
				var v= result[i] / 0x8000;
				buffer.writeFloat(v);
				if (channels == 1)
					buffer.writeFloat(v);
			}			
		}		
		return retLenBytes / channels / sampleSize;
	},
}

/*
 asap_adapter.js: Adapts ASAP backend to generic WebAudio/ScriptProcessor player.
 
 Note: instead of directly using the Emscripten generated backend the API of 
 the ASAP class from the original class is used here. This allows to use either
 the original or the new Emscripten bases implementation in this adapter.

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

ASAPArrayAccessor = function(array) {
	this.wrapped= array;
	this.idx= 0;
}
ASAPArrayAccessor.prototype = {
	writeFloat: function(val) {
		this.wrapped[this.idx++]= val;
	},
}

ASAPBackendAdapter = (function(){ var $this = function () { 
		$this.base.call(this, 2, 4);
		
		this.SAMPLES_PER_BUFFER = 8192;		// allowed: buffer sizes: 256, 512, 1024, 2048, 4096, 8192, 16384
		this._asapSampleRate= 44100;					// rate expected by ASAP
		
		// original input: 2 channels interleaved
		this._sourceBuffer = new Float32Array(this.SAMPLES_PER_BUFFER*2);

		this._asap = new ASAP();
		
		// required if WASM (asynchronously loaded) is used in the backend impl
		this._asap.Module["adapterCallback"] = function() { 	// when Module is ready			
			this.notifyAdapterReady();	// propagate to change to player
		}.bind(this);
		
		this._info;
		this._songInfo= new Object();
	}; 
	extend(AudioBackendAdapterBase, $this, {
		/* async emscripten init means that adapter may not immediately be ready - see async WASM compilation */
		isAdapterReady: function() { 
			if (typeof this._asap.Module.notReady === "undefined")	return true; // default for backward compatibility		
			return !this._asap.Module.notReady;
		},		
		readFloatSample: function(buffer, idx) {
			return buffer[idx];
		},
		/* try to speed-up copy operation by inlining the access logic (which does indeed 
		 * seem to make a difference) 
		 */
		getCopiedAudio: function(buffer, len) {		
			var i= 0;
			// just copy the rescaled values so there is no need for special handling in playback loop
			for(i= 0; i<len*this._channels; i++){
				this._resampleBuffer[i]= buffer[i];	// FIXME directly use the buffer?
			}		
			return len;	
		},
	
		getAudioBuffer: function() {
			return this._sourceBuffer;	
		},
		getAudioBufferLength: function() {
			return this._sourceBuffer.length>>1;
		},
		computeAudioSamples: function() {
			var len= this._asap.generate(new ASAPArrayAccessor(this._sourceBuffer), SAMPLES_PER_BUFFER, 0) <<1;	
			if (len <= 0) return 1; // <=0 means "end song"			
			return 0;	
		},
		getPathAndFilename: function(filename) {
			return ['/', filename];
		},
		registerFileData: function(pathFilenameArray, data) {
			return 0;	// FS not used in ASAP
		},
		loadMusicData: function(sampleRate, path, filename, data, options) {
			var module = new Uint8Array(data);

			try {
				this._asap.load(filename, module, module.length);
				this._info = this._asap.getInfo();
			} catch (ex) {
				alert(ex);
				return;
			}
			this._songInfo= new Object();
			this._songInfo.songName= this._info.getTitleOrFilename();
			this._songInfo.songAuthor= this._info.getAuthor();
			this._songInfo.songReleased= this._info.getDate();
			this._songInfo.maxSubsong= (this._info.getSongs() > 1) ? this._info.getSongs() : 1;
			this._songInfo.actualSubsong= this._info.getDefaultSong();		
		
			this.resetSampleRate(sampleRate, this._asapSampleRate); // ASAP sampleRate is fixed

			return 0;			
		},
		evalTrackOptions: function(options) {			
			if (typeof options.timeout != 'undefined') {
				ScriptNodePlayer.getInstance().setPlaybackTimeout(options.timeout*1000);
			}
			var id= (options.track<0) ? this._songInfo.actualSubsong : options.track;
			var boostVolume= (options.boostVolume) ? options.boostVolume : 0;
			var duration = this._info.getLoop(id) ? -1 : this._info.getDuration(id);
			this._asap.playSong(id, duration, boostVolume);
			
			return 0;
		},				
		teardown: function() {
			// nothing to do
		},
		getSongInfoMeta: function() {
			return {			
					songName: String,
					songAuthor: String,
					songReleased: String,
					maxSubsong: Number,
					actualSubsong: Number
					};
		},
		updateSongInfo: function(filename, result) {
			result.songName= this._songInfo.songName;
			result.songAuthor= this._songInfo.songAuthor;
			result.songReleased= this._songInfo.songReleased;
			result.maxSubsong= this._songInfo.maxSubsong;
			result.actualSubsong= this._songInfo.actualSubsong;		
		}
	});	return $this; })();
	