!function(e){"use strict";var t,n,r,o,i,l,a,s;Array.from||(Array.from=(t=Object.prototype.toString,n=function(e){return"function"==typeof e||"[object Function]"===t.call(e)},r=Math.pow(2,53)-1,o=function(e){var t=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(e);return Math.min(Math.max(t,0),r)},function(e){var t=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var r,i=arguments.length>1?arguments[1]:void 0;if(void 0!==i){if(!n(i))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(r=arguments[2])}for(var l,a=o(t.length),s=n(this)?Object(new this(a)):new Array(a),c=0;c<a;)l=t[c],s[c]=i?void 0===r?i(l,c):i.call(r,l,c):l,c+=1;return s.length=a,s})),Object.keys||(Object.keys=Object.keys||(i=Object.prototype.hasOwnProperty,l=!{toString:null}.propertyIsEnumerable("toString"),s=(a=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]).length,function(e){if("object"!=typeof e&&"function"!=typeof e||null===e)throw new TypeError("Object.keys called on a non-object");var t=[];for(var n in e)i.call(e,n)&&t.push(n);if(l)for(var r=0;r<s;r++)i.call(e,a[r])&&t.push(a[r]);return t}));var c,f=function(e,t,n){var r=$(e);r.length>0&&setTimeout(function(){r[0].innerHTML=n?t:r[0].innerHTML+t},50)},p={};p.VERSION="1.7.0-next";var u={},g=null,d=0,h=function(e,t){return function(){return t.apply(e,arguments)}},v=function(){var e,t,n=arguments,r=n[0];for(t=1;t<n.length;t++)for(e in n[t])e in r||!n[t].hasOwnProperty(e)||(r[e]=n[t][e]);return r};var b=function(e,t){return{value:e,name:t}};p.TRACE=b(1,"TRACE"),p.DEBUG=b(2,"DEBUG"),p.INFO=b(3,"INFO"),p.TIME=b(4,"TIME"),p.WARN=b(5,"WARN"),p.ERROR=b(8,"ERROR"),p.OFF=b(99,"OFF");var m=function(e){this.context=e,this.setLevel(e.filterLevel),this.log=this.info};m.prototype={_logdiv:"txtlog",_iptlog:"ilog",_iptwrn:"iwarn",_ipterr:"ierror",_iptdbg:"idbg",_iptnet:"inet",_tbip:"ip_txtbox",_tbport:"port_txtbox",logdiv:function(){return this._logdiv},iptlog:function(){return this._iptlog},iptwrn:function(){return this._iptwrn},ipterr:function(){return this._ipterr},iptdbg:function(){return this._iptdbg},iptnet:function(){return this._iptnet},tbip:function(){return this._tbip},tbport:function(){return this._tbport},setGUI:function(e){$("#"+e.div).length>0&&(this._logdiv=e.div),$("#"+e.info).length>0&&(this._iptlog=e.info),$("#"+e.warn).length>0&&(this._iptwrn=e.warn),$("#"+e.error).length>0&&(this._ipterr=e.error),$("#"+e.dbg).length>0&&(this._iptdbg=e.dbg),$("#"+e.net).length>0&&(this._iptnet=e.net),$("#"+e.ip).length>0&&(this._tbip=e.ip),$("#"+e.port).length>0&&(this._tbport=e.port)},setLevel:function(e){e&&"value"in e&&(this.context.filterLevel=e)},getLevel:function(){return this.context.filterLevel},enabledFor:function(e){var t=this.context.filterLevel;return e.value>=t.value},trace:function(){if(this.invoke(p.TRACE,arguments),document.getElementById(this._iptnet).checked&&arguments.length>0){if(!g){var e=(g=new lwmutexObject(helper.lwmtx_attr_fifo)).create();d=g.id(),0===g.create()?p.info("lwmutex created id 0x"+d.toString(16)):p.error("Mutex Creation failed with error 0x"+e.toString(16))}for(var t=0;t<arguments.length;t++)if(arguments[t]&&"string"==typeof arguments[t]&&arguments[t].length>0&&d>0){var n=(r=arguments[t],o="<br>",i="\n ",r.replace(new RegExp(function(e){return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")}(o),"g"),i));setTimeout(function(){g.trylock(),helper.bc.send(n),g.unlock()},0)}}var r,o,i},debug:function(){function e(e){var t=Object.keys(e);t.sort(function(e,t){return e===t?0:e>t?1:-1});for(var n='<span class="dropdown" ><span class="ui-icon icon-triangle"></span><span>'+e+'</span><span class="dropdown-content">',r=0;r<t.length;r++){var o=e[t[r]];"number"==typeof o&&(o="0x"+o.toString(16)),n+='<span><span class="dd-left">'+t[r]+'</span><span class="dd-centre">=</span><span class="dd-right">'+o+"</span></span><br>"}return n+="</span></span>"}this.invoke(p.DEBUG,arguments);for(var t='<p class="'+(document.getElementById(this._iptdbg).checked?"log-debug":"log-debug ui-helper-hidden")+'"><span class="fa fa-question-circle fa-fw"></span> ',n=0;n<arguments.length;n++)n>0&&(t+="<span>, </span>"),"string"==typeof arguments[n]?t+=arguments[n]:"number"==typeof arguments[n]?t+="0x"+arguments[n].toString(16):"boolean"==typeof arguments[n]?t+=arguments[n]:"object"==typeof arguments[n]?t+=e(arguments[n]):"function"==typeof arguments[n]&&(t+=arguments[n]);f("#"+this._logdiv,t+"</p>")},info:function(){this.invoke(p.INFO,arguments);var e=document.getElementById(this._iptlog).checked?"log-info":"log-info ui-helper-hidden";f("#"+this._logdiv,'<p class="'+e+'"><span class="fa fa-info-circle fa-fw"></span> '+Array.from(arguments)+"</p>")},warn:function(){this.invoke(p.WARN,arguments);var e=document.getElementById(this._iptwrn).checked?"log-warning":"log-warning ui-helper-hidden";f("#"+this._logdiv,'<p class="'+e+'"><span class="fa fa-exclamation-circle fa-fw"></span> '+Array.from(arguments)+"</p>")},error:function(){this.invoke(p.ERROR,arguments);var e=document.getElementById(this._ipterr).checked?"log-error":"log-error ui-helper-hidden";f("#"+this._logdiv,'<p class="'+e+'"><span class="fa fa-times-circle fa-fw"></span> '+Array.from(arguments)+"</p>")},time:function(e){"string"==typeof e&&e.length>0&&this.invoke(p.TIME,[e,"start"])},timeEnd:function(e){"string"==typeof e&&e.length>0&&this.invoke(p.TIME,[e,"end"])},invoke:function(e,t){c&&this.enabledFor(e)&&c(t,v({level:e},this.context))}};var y,w=new m({filterLevel:p.OFF});(y=p).enabledFor=h(w,w.enabledFor),y.trace=h(w,w.trace),y.debug=h(w,w.debug),y.time=h(w,w.time),y.timeEnd=h(w,w.timeEnd),y.info=h(w,w.info),y.warn=h(w,w.warn),y.error=h(w,w.error),y.setGUI=h(w,w.setGUI),y.logdiv=h(w,w.logdiv),y.iptlog=h(w,w.iptlog),y.iptwrn=h(w,w.iptwrn),y.ipterr=h(w,w.ipterr),y.iptdbg=h(w,w.iptdbg),y.iptnet=h(w,w.iptnet),y.tbip=h(w,w.tbip),y.tbport=h(w,w.tbport),y.log=y.info,p.setHandler=function(e){c=e},p.setLevel=function(e){for(var t in w.setLevel(e),u)u.hasOwnProperty(t)&&u[t].setLevel(e)},p.getLevel=function(){return w.getLevel()},p.get=function(e){return u[e]||(u[e]=new m(v({name:e},w.context)))},p.createDefaultHandler=function(e){(e=e||{}).formatter=e.formatter||function(e,t){t.name&&e.unshift("["+t.name+"]")};var t={},n=function(e,t){Function.prototype.apply.call(e,console,t)};return"undefined"==typeof console?function(){}:function(r,o){r=Array.prototype.slice.call(r);var i,l=console.log;o.level===p.TIME?(i=(o.name?"["+o.name+"] ":"")+r[0],"start"===r[1]?console.time?console.time(i):t[i]=(new Date).getTime():console.timeEnd?console.timeEnd(i):n(l,[i+": "+((new Date).getTime()-t[i])+"ms"])):(o.level===p.WARN&&console.warn?l=console.warn:o.level===p.ERROR&&console.error?l=console.error:o.level===p.INFO&&console.info?l=console.info:o.level===p.DEBUG&&console.debug?l=console.debug:o.level===p.TRACE&&console.trace&&(l=console.trace),e.formatter(r,o),n(l,r))}},p.useDefaults=function(e){p.setLevel(e&&e.defaultLevel||p.DEBUG),p.setHandler(p.createDefaultHandler(e))},"function"==typeof define&&define.amd?define(p):"undefined"!=typeof module&&module.exports?module.exports=p:(p._prevLogger=e.Logger,p.noConflict=function(){return e.Logger=p._prevLogger,p},e.Logger=p)}(this);