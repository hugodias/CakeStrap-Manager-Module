/*! jQuery v@1.8.0 jquery.com | jquery.org/license */
(((a, b) => {
  function G(a){var b=F[a]={};return p.each(a.split(s),(a, c) => {b[c]=!0}),b;}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,(a, d) => {var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,(a, d) => a===b===c);if(typeof b=="string"){var d=p.grep(a,a => a.nodeType===1);if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,(a, d) => p.inArray(a,b)>=0===c);}function bk(a){
    var b=bl.split("|");
    var c=a.createDocumentFragment();
    if(c.createElement)while(b.length)c.createElement(b.pop());return c
  }function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){
    if(b.nodeType!==1||!p.hasData(a))return;
    var c;
    var d;
    var e;
    var f=p._data(a);
    var g=p._data(b,f);
    var h=f.events;
    if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))
  }function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bX(a,b){
    if(b in a)return b;
    var c=b.charAt(0).toUpperCase()+b.slice(1);
    var d=b;
    var e=bV.length;
    while(e--){b=bV[e]+c;if(b in a)return b}return d
  }function bY(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function bZ(a,b){
    var c;
    var d;
    var e=[];
    var f=0;
    var g=a.length;
    for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bY(c)&&(e[f]=p._data(c,"olddisplay",cb(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a
  }function b$(a,b,c){var d=bO.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function b_(a,b,c,d){
    var e=c===(d?"border":"content")?4:b==="width"?1:0;
    var f=0;
    for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bU[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bU[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bU[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bU[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bU[e]+"Width"))||0));return f
  }function ca(a,b,c){
    var d=b==="width"?a.offsetWidth:a.offsetHeight;
    var e=!0;
    var f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";
    if(d<=0){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bP.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+b_(a,b,c||(f?"border":"content"),e)+"px"
  }function cb(a){
    if(bR[a])return bR[a];
    var b=p("<"+a+">").appendTo(e.body);
    var c=b.css("display");
    b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bR[a]=c,c
  }function ch(a,b,c,d){var e;if(p.isArray(b))p.each(b,(b, e) => {c||cd.test(a)?d(a,e):ch(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ch(a+"["+e+"]",b[e],c,d);else d(a,b)}function cy(a){return (b, c) => {
    typeof b!="string"&&(c=b,b="*");
    var d;
    var e;
    var f;
    var g=b.toLowerCase().split(s);
    var h=0;
    var i=g.length;
    if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)
  };}function cz(a,c,d,e,f,g){
    f=f||c.dataTypes[0],g=g||{},g[f]=!0;
    var h;
    var i=a[f];
    var j=0;
    var k=i?i.length:0;
    var l=a===cu;
    for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cz(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cz(a,c,d,e,"*",g)),h
  }function cA(a,c){
    var d;
    var e;
    var f=p.ajaxSettings.flatOptions||{};
    for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)
  }function cB(a,c,d){
    var e;
    var f;
    var g;
    var h;
    var i=a.contents;
    var j=a.dataTypes;
    var k=a.responseFields;
    for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]
  }function cC(a,b){
    var c;
    var d;
    var e;
    var f;
    var g=a.dataTypes.slice();
    var h=g[0];
    var i={};
    var j=0;
    a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}
  }function cK(){try{return new a.XMLHttpRequest}catch(b){}}function cL(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cT(){return setTimeout(() => {cM=b},0),cM=p.now();}function cU(a,b){p.each(b,(b, c) => {
    var d=(cS[b]||[]).concat(cS["*"]);
    var e=0;
    var f=d.length;
    for(;e<f;e++)if(d[e].call(a,b,c))return
  })}function cV(a,b,c){
    var d;
    var e=0;
    var f=0;
    var g=cR.length;
    var h=p.Deferred().always(() => {delete i.elem});
    var i=() => {var b=cM||cT(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)};
    var j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cM||cT(),duration:c.duration,tweens:[],createTween(b, c, d) {var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop(b) {var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}});
    var k=j.props;
    cW(k,j.opts.specialEasing);for(;e<g;e++){d=cR[e].call(j,a,k,j.opts);if(d)return d}return cU(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)
  }function cW(a,b){
    var c;
    var d;
    var e;
    var f;
    var g;
    for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}
  }function cX(a,b,c){
    var d;
    var e;
    var f;
    var g;
    var h;
    var i;
    var j;
    var k;
    var l=this;
    var m=a.style;
    var n={};
    var o=[];
    var q=a.nodeType&&bY(a);
    c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=() => {j.unqueued||k()}),j.unqueued++,l.always(() => {l.always(() => {j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cb(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(() => {m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cO.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(() => {p(a).hide()}),l.done(() => {var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}
  }function cY(a,b,c,d,e){return new cY.prototype.init(a,b,c,d,e)}function cZ(a,b){
    var c;
    var d={height:a};
    var e=0;
    for(;e<4;e+=2-b)c=bU[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d
  }function c_(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}
  var c;
  var d;
  var e=a.document;
  var f=a.location;
  var g=a.navigator;
  var h=a.jQuery;
  var i=a.$;
  var j=Array.prototype.push;
  var k=Array.prototype.slice;
  var l=Array.prototype.indexOf;
  var m=Object.prototype.toString;
  var n=Object.prototype.hasOwnProperty;
  var o=String.prototype.trim;
  var p=(a, b) => new p.fn.init(a,b,c);
  var q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
  var r=/\S/;
  var s=/\s+/;
  var t=r.test(" ")?/^[\s\xA0]+|[\s\xA0]+$/g:/^\s+|\s+$/g;
  var u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/;
  var v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/;
  var w=/^[\],:{}\s]*$/;
  var x=/(?:^|:|,)(?:\s*\[)+/g;
  var y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g;
  var z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g;
  var A=/^-ms-/;
  var B=/-([\da-z])/gi;
  var C=(a, b) => (b+"").toUpperCase();
  var D=() => {e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())};
  var E={};
  p.fn=p.prototype={constructor:p,init(a, c, d) {
    var f;
    var g;
    var h;
    var i;
    if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))
  },selector:"",jquery:"1.8.0",length:0,size() {return this.length},toArray() {return k.call(this)},get(a) {return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack(a, b, c) {var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each(a, b) {return p.each(this,a,b)},ready(a) {return p.ready.promise().done(a),this},eq(a) {return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first() {return this.eq(0)},last() {return this.eq(-1)},slice(...args) {return this.pushStack(k.apply(this,args),"slice",k.call(args).join(","));},map(a) {return this.pushStack(p.map(this,(b, c) => a.call(b,c,b)));},end() {return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(...args) {
    var a;
    var c;
    var d;
    var e;
    var f;
    var g;
    var h=args[0]||{};
    var i=1;
    var j=args.length;
    var k=!1;
    typeof h=="boolean"&&(k=h,h=args[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=args[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h
  },p.extend({noConflict(b) {return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady(a) {a?p.readyWait++:p.ready(!0)},ready(a) {if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction(a) {return p.type(a)==="function"},isArray:Array.isArray||(a => p.type(a)==="array"),isWindow(a) {return a!=null&&a==a.window},isNumeric(a) {return!isNaN(parseFloat(a))&&isFinite(a)},type(a) {return a==null?String(a):E[m.call(a)]||"object"},isPlainObject(a) {if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject(a) {var b;for(b in a)return!1;return!0},error(a) {throw new Error(a)},parseHTML(a, b, c) {var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON(b) {if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML(c) {
    var d;
    var e;
    if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d
  },noop() {},globalEval(b) {b&&r.test(b)&&(a.execScript||(b => {a.eval.call(a,b)}))(b)},camelCase(a) {return a.replace(A,"ms-").replace(B,C)},nodeName(a, b) {return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each(a, c, d) {
    var e;
    var f=0;
    var g=a.length;
    var h=g===b||p.isFunction(a);
    if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a
  },trim:o?a => a==null?"":o.call(a):a => a==null?"":a.toString().replace(t,""),makeArray(a, b) {
    var c;
    var d=b||[];
    return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d
  },inArray(a, b, c) {var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge(a, c) {
    var d=c.length;
    var e=a.length;
    var f=0;
    if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a
  },grep(a, b, c) {
    var d;
    var e=[];
    var f=0;
    var g=a.length;
    c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e
  },map(a, c, d) {
    var e;
    var f;
    var g=[];
    var h=0;
    var i=a.length;
    var j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));
    if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)
  },guid:1,proxy(a, c) {
    var d;
    var e;
    var f;
    return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(...args) {return a.apply(c,e.concat(k.call(args)));},f.guid=a.guid=a.guid||f.guid||p.guid++,f):b;
  },access(a, c, d, e, f, g, h) {
    var i;
    var j=d==null;
    var k=0;
    var l=a.length;
    if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=(a, b, c) => i.call(p(a),c)):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g
  },now() {return(new Date).getTime()}}),p.ready.promise=b => {if(!d){d=p.Deferred();if(e.readyState==="complete"||e.readyState!=="loading"&&e.addEventListener)setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),(a, b) => {E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=a => {
    a=typeof a=="string"?F[a]||G(a):p.extend({},a);
    var c;
    var d;
    var e;
    var f;
    var g;
    var h;
    var i=[];
    var j=!a.once&&[];
    var k=b => {c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())};
    var l={add(...args) {if(i){var b=i.length;(function d(b){p.each(b,(b, c) => {p.isFunction(c)&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&d(c)})})(args),e?g=i.length:c&&(f=b,k(c))}return this},remove(...args) {return i&&p.each(args,(a, b) => {var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this;},has(a) {return p.inArray(a,i)>-1},empty() {return i=[],this},disable() {return i=j=c=b,this},disabled() {return!i},lock() {return j=b,c||l.disable(),this},locked() {return!j},fireWith(a, b) {return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire(...args) {return l.fireWith(this,args),this;},fired() {return!!d}};
    return l
  },p.extend({Deferred(a) {
    var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]];
    var c="pending";
    var d={state() {return c},always(...args) {return e.done(args).fail(args),this;},then(...args) {var a=args;return p.Deferred(c => {p.each(b,(b, d) => {var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(...args) {var a=g.apply(this,args);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise();},promise(a) {return typeof a=="object"?p.extend(a,d):d}};
    var e={};
    return d.pipe=d.then,p.each(b,(a, f) => {
      var g=f[2];
      var h=f[3];
      d[f[1]]=g.add,h&&g.add(() => {c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith
    }),d.promise(e),a&&a.call(e,e),e;
  },when(a) {
    var b=0;
    var c=k.call(arguments);
    var d=c.length;
    var e=d!==1||a&&p.isFunction(a.promise)?d:0;
    var f=e===1?a:p.Deferred();
    var g=(a, b, c) => function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)};
    var h;
    var i;
    var j;
    if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()
  }}),p.support=(() => {
    var b;
    var c;
    var d;
    var f;
    var g;
    var h;
    var i;
    var j;
    var k;
    var l;
    var m;
    var n=e.createElement("div");
    n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length||!d)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=() => {b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(() => {
      var c;
      var d;
      var f;
      var g;
      var h="padding:0;margin:0;border:0;display:block;overflow:hidden;";
      var i=e.getElementsByTagName("body")[0];
      if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null
    }),i.removeChild(n),c=d=f=g=h=i=n=null,b;
  })();
  var H=/^(?:\{.*\}|\[.*\])$/;
  var I=/([A-Z])/g;
  p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData(a) {return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data(a, c, d, e) {
    if(!p.acceptData(a))return;
    var f;
    var g;
    var h=p.expando;
    var i=typeof c=="string";
    var j=a.nodeType;
    var k=j?p.cache:a;
    var l=j?a[h]:a[h]&&h;
    if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||++p.uuid:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g
  },removeData(a, b, c) {
    if(!p.acceptData(a))return;
    var d;
    var e;
    var f;
    var g=a.nodeType;
    var h=g?p.cache:a;
    var i=g?a[p.expando]:p.expando;
    if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null
  },_data(a, b, c) {return p.data(a,b,c,!0)},acceptData(a) {var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data(a, c) {
    var d;
    var e;
    var f;
    var g;
    var h;
    var i=this[0];
    var j=0;
    var k=null;
    if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")===0&&(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))
  },removeData(a) {return this.each(function(){p.removeData(this,a)})}}),p.extend({queue(a, b, c) {var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue(a, b) {
    b=b||"fx";
    var c=p.queue(a,b);
    var d=c.shift();
    var e=p._queueHooks(a,b);
    var f=() => {p.dequeue(a,b)};
    d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),delete e.stop,d.call(a,f,e)),!c.length&&e&&e.empty.fire()
  },_queueHooks(a, b) {var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(() => {p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})});}}),p.fn.extend({queue(a, c) {var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue(a) {return this.each(function(){p.dequeue(this,a)})},delay(a, b) {return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,(b, c) => {var d=setTimeout(b,a);c.stop=() => {clearTimeout(d)}});},clearQueue(a) {return this.queue(a||"fx",[])},promise(a, c) {
    var d;
    var e=1;
    var f=p.Deferred();
    var g=this;
    var h=this.length;
    var i=() => {--e||f.resolveWith(g,[g])};
    typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)(d=p._data(g[h],a+"queueHooks"))&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)
  }});
  var L;
  var M;
  var N;
  var O=/[\t\r\n]/g;
  var P=/\r/g;
  var Q=/^(?:button|input)$/i;
  var R=/^(?:button|input|object|select|textarea)$/i;
  var S=/^a(?:rea|)$/i;
  var T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
  var U=p.support.getSetAttribute;
  p.fn.extend({attr(a, b) {return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr(a) {return this.each(function(){p.removeAttr(this,a)})},prop(a, b) {return p.access(this,p.prop,a,b,arguments.length>1)},removeProp(a) {return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass(a) {
    var b;
    var c;
    var d;
    var e;
    var f;
    var g;
    var h;
    if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)~f.indexOf(" "+b[g]+" ")||(f+=b[g]+" ");e.className=p.trim(f)}}}return this
  },removeClass(a) {
    var c;
    var d;
    var e;
    var f;
    var g;
    var h;
    var i;
    if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>-1)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this
  },toggleClass(a, b) {
    var c=typeof a;
    var d=typeof b=="boolean";
    return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){
      var e;
      var f=0;
      var g=p(this);
      var h=b;
      var i=a.split(s);
      while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)
    }else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""});
  },hasClass(a) {
    var b=" "+a+" ";
    var c=0;
    var d=this.length;
    for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>-1)return!0;return!1
  },val(a) {
    var c;
    var d;
    var e;
    var f=this[0];
    if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){
      var f;
      var g=p(this);
      if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,a => a==null?"":a+"")),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f
    });
  }}),p.extend({valHooks:{option:{get(a) {var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get(a) {
    var b;
    var c;
    var d;
    var e;
    var f=a.selectedIndex;
    var g=[];
    var h=a.options;
    var i=a.type==="select-one";
    if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g
  },set(a, b) {var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr(a, c, d, e) {
    var f;
    var g;
    var h;
    var i=a.nodeType;
    if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,""+d),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)
  },removeAttr(a, b) {
    var c;
    var d;
    var e;
    var f;
    var g=0;
    if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}
  },attrHooks:{type:{set(a, b) {if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get(a, b) {return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set(a, b, c) {if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop(a, c, d) {
    var e;
    var f;
    var g;
    var h=a.nodeType;
    if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]
  },propHooks:{tabIndex:{get(a) {var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get(a, c) {
    var d;
    var e=p.prop(a,c);
    return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b
  },set(a, b, c) {var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get(a, c) {var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set(a, b, c) {var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],(a, b) => {p.attrHooks[b]=p.extend(p.attrHooks[b],{set(a, c) {if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set(a, b, c) {b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],(a, c) => {p.attrHooks[c]=p.extend(p.attrHooks[c],{get(a) {var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get(a) {return a.style.cssText.toLowerCase()||b},set(a, b) {return a.style.cssText=""+b}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get(a) {var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get(a) {return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set(a, b) {if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});
  var V=/^(?:textarea|input|select)$/i;
  var W=/^([^\.]*|)(?:\.(.+)|)$/;
  var X=/(?:^|\s)hover(\.\S+|)\b/;
  var Y=/^key/;
  var Z=/^(?:mouse|contextmenu)|click/;
  var $=/^(?:focusinfocus|focusoutblur)$/;
  var _=a => p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1");
  p.event={add(a, c, d, e, f) {
    var g;
    var h;
    var i;
    var j;
    var k;
    var l;
    var m;
    var n;
    var o;
    var q;
    var r;
    if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null
  },global:{},remove(a, b, c, d, e) {
    var f;
    var g;
    var h;
    var i;
    var j;
    var k;
    var l;
    var m;
    var n;
    var o;
    var q;
    var r=p.hasData(a)&&p._data(a);
    if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))
  },customEvent:{getData:!0,setData:!0,changeData:!0},trigger(c, d, f, g) {if(!f||f.nodeType!==3&&f.nodeType!==8){
    var h;
    var i;
    var j;
    var k;
    var l;
    var m;
    var n;
    var o;
    var q;
    var r;
    var s=c.type||c;
    var t=[];
    if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result
  }return},dispatch(c) {
    c=p.event.fix(c||a.event);
    var d;
    var e;
    var f;
    var g;
    var h;
    var i;
    var j;
    var k;
    var l;
    var m;
    var n;
    var o=(p._data(this,"events")||{})[c.type]||[];
    var q=o.delegateCount;
    var r=[].slice.call(arguments);
    var s=!c.exclusive&&!c.namespace;
    var t=p.event.special[c.type]||{};
    var u=[];
    r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click")){g=p(this),g.context=this;for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){i={},k=[],g[0]=f;for(d=0;d<q;d++)l=o[d],m=l.selector,i[m]===b&&(i[m]=g.is(m)),i[m]&&k.push(l);k.length&&u.push({elem:f,matches:k})}}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){j=u[d],c.currentTarget=j.elem;for(e=0;e<j.matches.length&&!c.isImmediatePropagationStopped();e++){l=j.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,h=((p.event.special[l.origType]||{}).handle||l.handler).apply(j.elem,r),h!==b&&(c.result=h,h===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result
  },props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter(a, b) {return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter(a, c) {
    var d;
    var f;
    var g;
    var h=c.button;
    var i=c.fromElement;
    return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a
  }},fix(a) {
    if(a[p.expando])return a;
    var b;
    var c;
    var d=a;
    var f=p.event.fixHooks[a.type]||{};
    var g=f.props?this.props.concat(f.props):this.props;
    a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a
  },special:{ready:{setup:p.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup(a, b, c) {p.isWindow(this)&&(this.onbeforeunload=c)},teardown(a, b) {this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate(a, b, c, d) {var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?(a, b, c) => {a.removeEventListener&&a.removeEventListener(b,c,!1)}:(a, b, c) => {var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault() {this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation() {this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation() {this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},(a, b) => {p.event.special[a]={delegateType:b,bindType:b,handle(a) {
    var c;
    var d=this;
    var e=a.relatedTarget;
    var f=a.handleObj;
    var g=f.selector;
    if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c
  }}}),p.support.submitBubbles||(p.event.special.submit={setup() {if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",a => {
    var c=a.target;
    var d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;
    d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",a => {a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))
  })},postDispatch(a) {a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown() {if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup() {if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",a => {var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle(a) {var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown() {return p.event.remove(this,"._change"),V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},(a, b) => {
    var c=0;
    var d=a => {p.event.simulate(b,a.target,p.event.fix(a),!0)};
    p.event.special[b]={setup() {c++===0&&e.addEventListener(a,d,!0)},teardown() {--c===0&&e.removeEventListener(a,d,!0)}}
  }),p.fn.extend({on(a, c, d, e, f) {
    var g;
    var h;
    if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})
  },one(a, b, c, d) {return this.on(a,b,c,d,1)},off(a, c, d) {
    var e;
    var f;
    if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})
  },bind(a, b, c) {return this.on(a,null,b,c)},unbind(a, b) {return this.off(a,null,b)},live(a, b, c) {return p(this.context).on(a,this.selector,b,c),this},die(a, b) {return p(this.context).off(a,this.selector||"**",b),this},delegate(a, b, c, d) {return this.on(b,a,c,d)},undelegate(a, b, c) {return arguments.length==1?this.off(a,"**"):this.off(b,a||"**",c)},trigger(a, b) {return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler(a, b) {if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle(a) {
    var b=arguments;
    var c=a.guid||p.guid++;
    var d=0;
    var e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};
    e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)
  },hover(a, b) {return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),(a, b) => {p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),((a, b) => {
    function bd(a,b,c,d){
      var e=0;
      var f=b.length;
      for(;e<f;e++)Z(a,b[e],c,d)
    }function be(a,b,c,d,e,f){
      var g;
      var h=$.setFilters[b.toLowerCase()];
      return h||Z.error(b),(a||!(g=e))&&bd(a||"*",d,g=[],e),g.length>0?h(g,c,f):[]
    }function bf(a,c,d,e,f){
      var g;
      var h;
      var i;
      var j;
      var k;
      var l;
      var m;
      var n;
      var p=0;
      var q=f.length;
      var s=L.POS;
      var t=new RegExp("^"+s.source+"(?!"+r+")","i");
      var u=function(...args) {var a=1,c=args.length-2;for(;a<c;a++)args[a]===b&&(g[a]=b)};
      for(;p<q;p++){s.exec(""),a=f[p],j=[],i=0,k=e;while(g=s.exec(a)){n=s.lastIndex=g.index+g[0].length;if(n>i){m=a.slice(i,g.index),i=n,l=[c],B.test(m)&&(k&&(l=k),k=e);if(h=H.test(m))m=m.slice(0,-5).replace(B,"$&*");g.length>1&&g[0].replace(t,u),k=be(m,g[1],g[2],l,k,h)}}k?(j=j.concat(k),(m=a.slice(i))&&m!==")"?B.test(m)?bd(m,j,d,e):Z(m,c,d,e?e.concat(k):k):o.apply(d,j)):Z(a,c,d,e)}return q===1?d:Z.uniqueSort(d)
    }function bg(a,b,c){
      var d;
      var e;
      var f;
      var g=[];
      var i=0;
      var j=D.exec(a);
      var k=!j.pop()&&!j.pop();
      var l=k&&a.match(C)||[""];
      var m=$.preFilter;
      var n=$.filter;
      var o=!c&&b!==h;
      for(;(e=l[i])!=null&&k;i++){g.push(d=[]),o&&(e=" "+e);while(e){k=!1;if(j=B.exec(e))e=e.slice(j[0].length),k=d.push({part:j.pop().replace(A," "),captures:j});for(f in n)(j=L[f].exec(e))&&(!m[f]||(j=m[f](j,b,c)))&&(e=e.slice(j.shift().length),k=d.push({part:f,captures:j}));if(!k)break}}return k||Z.error(a),g
    }function bh(a,b,e){
      var f=b.dir;
      var g=m++;
      return a||(a=a => a===e),b.first?(b, c) => {while(b=b[f])if(b.nodeType===1)return a(b,c)&&b}:(b, e) => {
        var h;
        var i=g+"."+d;
        var j=i+"."+c;
        while(b=b[f])if(b.nodeType===1){if((h=b[q])===j)return b.sizset;if(typeof h=="string"&&h.indexOf(i)===0){if(b.sizset)return b}else{b[q]=j;if(a(b,e))return b.sizset=!0,b;b.sizset=!1}}
      };
    }function bi(a,b){return a?(c, d) => {var e=b(c,d);return e&&a(e===!0?c:e,d)}:b;}function bj(a,b,c){
      var d;
      var e;
      var f=0;
      for(;d=a[f];f++)$.relative[d.part]?e=bh(e,$.relative[d.part],b):(d.captures.push(b,c),e=bi(e,$.filter[d.part].apply(null,d.captures)));return e
    }function bk(a){return (b, c) => {
      var d;
      var e=0;
      for(;d=a[e];e++)if(d(b,c))return!0;return!1
    };}
    var c;
    var d;
    var e;
    var f;
    var g;
    var h=a.document;
    var i=h.documentElement;
    var j="undefined";
    var k=!1;
    var l=!0;
    var m=0;
    var n=[].slice;
    var o=[].push;
    var q=("sizcache"+Math.random()).replace(".","");
    var r="[\\x20\\t\\r\\n\\f]";
    var s="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+";
    var t=s.replace("w","w#");
    var u="([*^$|!~]?=)";
    var v="\\["+r+"*("+s+")"+r+"*(?:"+u+r+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+t+")|)|)"+r+"*\\]";
    var w=":("+s+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)";
    var x=":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)";
    var y=r+"*([\\x20\\t\\r\\n\\f>+~])"+r+"*";
    var z="(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|"+v+"|"+w.replace(2,7)+"|[^\\\\(),])+";
    var A=new RegExp("^"+r+"+|((?:^|[^\\\\])(?:\\\\.)*)"+r+"+$","g");
    var B=new RegExp("^"+y);
    var C=new RegExp(z+"?(?="+r+"*,|$)","g");
    var D=new RegExp("^(?:(?!,)(?:(?:^|,)"+r+"*"+z+")*?|"+r+"*(.*?))(\\)|$)");
    var E=new RegExp(z.slice(19,-6)+"\\x20\\t\\r\\n\\f>+~])+|"+y,"g");
    var F=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/;
    var G=/[\x20\t\r\n\f]*[+~]/;
    var H=/:not\($/;
    var I=/h\d/i;
    var J=/input|select|textarea|button/i;
    var K=/\\(?!\\)/g;
    var L={ID:new RegExp("^#("+s+")"),CLASS:new RegExp("^\\.("+s+")"),NAME:new RegExp("^\\[name=['\"]?("+s+")['\"]?\\]"),TAG:new RegExp("^("+s.replace("[-","[-\\*")+")"),ATTR:new RegExp("^"+v),PSEUDO:new RegExp("^"+w),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+r+"*(even|odd|(([+-]|)(\\d*)n|)"+r+"*(?:([+-]|)"+r+"*(\\d+)|))"+r+"*\\)|)","i"),POS:new RegExp(x,"ig"),needsContext:new RegExp("^"+r+"*[>+~]|"+x,"i")};
    var M={};
    var N=[];
    var O={};
    var P=[];
    var Q=a => (a.sizzleFilter=!0, a);
    var R=a => b => b.nodeName.toLowerCase()==="input"&&b.type===a;
    var S=a => b => {var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a};
    var T=a => {var b=!1,c=h.createElement("div");try{b=a(c)}catch(d){}return c=null,b};
    var U=T(a => {a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"});
    var V=T(a => {a.id=q+0,a.innerHTML="<a name='"+q+"'></a><div name='"+q+"'></div>",i.insertBefore(a,i.firstChild);var b=h.getElementsByName&&h.getElementsByName(q).length===2+h.getElementsByName(q+0).length;return g=!h.getElementById(q),i.removeChild(a),b});
    var W=T(a => (a.appendChild(h.createComment("")), a.getElementsByTagName("*").length===0));
    var X=T(a => (a.innerHTML="<a href='#'></a>", a.firstChild&&typeof a.firstChild.getAttribute!==j&&a.firstChild.getAttribute("href")==="#"));
    var Y=T(a => (a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>", !a.getElementsByClassName||a.getElementsByClassName("e").length===0?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length!==1)));
    var Z=(a, b, c, d) => {c=c||[],b=b||h;var e,f,g,i,j=b.nodeType;if(j!==1&&j!==9)return[];if(!a||typeof a!="string")return c;g=ba(b);if(!g&&!d)if(e=F.exec(a))if(i=e[1]){if(j===9){f=b.getElementById(i);if(!f||!f.parentNode)return c;if(f.id===i)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(i))&&bb(b,f)&&f.id===i)return c.push(f),c}else{if(e[2])return o.apply(c,n.call(b.getElementsByTagName(a),0)),c;if((i=e[3])&&Y&&b.getElementsByClassName)return o.apply(c,n.call(b.getElementsByClassName(i),0)),c}return bm(a,b,c,d,g)};
    var $=Z.selectors={cacheLength:50,match:L,order:["ID","TAG"],attrHandle:{},createPseudo:Q,find:{ID:g?(a, b, c) => {if(typeof b.getElementById!==j&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:(a, c, d) => {if(typeof c.getElementById!==j&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==j&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:W?(a, b) => {if(typeof b.getElementsByTagName!==j)return b.getElementsByTagName(a)}:(a, b) => {var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR(a) {return a[1]=a[1].replace(K,""),a[3]=(a[4]||a[5]||"").replace(K,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD(a) {return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||Z.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&Z.error(a[0]),a},PSEUDO(a) {var b,c=a[4];return L.CHILD.test(a[0])?null:(c&&(b=D.exec(c))&&b.pop()&&(a[0]=a[0].slice(0,b[0].length-c.length-1),c=b[0].slice(0,-1)),a.splice(2,3,c||a[3]),a)}},filter:{ID:g?a => (a=a.replace(K,""), b => b.getAttribute("id")===a):a => (a=a.replace(K,""), b => {var c=typeof b.getAttributeNode!==j&&b.getAttributeNode("id");return c&&c.value===a}),TAG(a) {return a==="*"?() => !0:(a=a.replace(K,"").toLowerCase(),b => b.nodeName&&b.nodeName.toLowerCase()===a);},CLASS(a) {var b=M[a];return b||(b=M[a]=new RegExp("(^|"+r+")"+a+"("+r+"|$)"),N.push(a),N.length>$.cacheLength&&delete M[N.shift()]),a => b.test(a.className||typeof a.getAttribute!==j&&a.getAttribute("class")||"");},ATTR(a, b, c) {return b?d => {var e=Z.attr(d,a),f=e+"";if(e==null)return b==="!=";switch(b){case"=":return f===c;case"!=":return f!==c;case"^=":return c&&f.indexOf(c)===0;case"*=":return c&&f.indexOf(c)>-1;case"$=":return c&&f.substr(f.length-c.length)===c;case"~=":return(" "+f+" ").indexOf(c)>-1;case"|=":return f===c||f.substr(0,c.length+1)===c+"-"}}:b => Z.attr(b,a)!=null;},CHILD(a, b, c, d) {if(a==="nth"){var e=m++;return a => {var b,f,g=0,h=a;if(c===1&&d===0)return!0;b=a.parentNode;if(b&&(b[q]!==e||!a.sizset)){for(h=b.firstChild;h;h=h.nextSibling)if(h.nodeType===1){h.sizset=++g;if(h===a)break}b[q]=e}return f=a.sizset-d,c===0?f===0:f%c===0&&f/c>=0};}return b => {var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}};},PSEUDO(a, b, c, d) {var e=$.pseudos[a]||$.pseudos[a.toLowerCase()];return e||Z.error("unsupported pseudo: "+a),e.sizzleFilter?e(b,c,d):e}},pseudos:{not:Q((a, b, c) => {var d=bl(a.replace(A,"$1"),b,c);return a => !d(a);}),enabled(a) {return a.disabled===!1},disabled(a) {return a.disabled===!0},checked(a) {var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected(a) {return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent(a) {return!$.pseudos.empty(a)},empty(a) {var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},contains:Q(a => b => (b.textContent||b.innerText||bc(b)).indexOf(a)>-1),has:Q(a => b => Z(a,b).length>0),header(a) {return I.test(a.nodeName)},text(a) {var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:R("radio"),checkbox:R("checkbox"),file:R("file"),password:R("password"),image:R("image"),submit:S("submit"),reset:S("reset"),button(a) {var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input(a) {return J.test(a.nodeName)},focus(a) {var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active(a) {return a===a.ownerDocument.activeElement}},setFilters:{first(a, b, c) {return c?a.slice(1):[a[0]]},last(a, b, c) {var d=a.pop();return c?a:[d]},even(a, b, c) {var d=[],e=c?1:0,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},odd(a, b, c) {var d=[],e=c?0:1,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},lt(a, b, c) {return c?a.slice(+b):a.slice(0,+b)},gt(a, b, c) {return c?a.slice(0,+b+1):a.slice(+b+1)},eq(a, b, c) {var d=a.splice(+b,1);return c?a:d}}};
    $.setFilters.nth=$.setFilters.eq,$.filters=$.pseudos,X||($.attrHandle={href(a) {return a.getAttribute("href",2)},type(a) {return a.getAttribute("type")}}),V&&($.order.push("NAME"),$.find.NAME=(a, b) => {if(typeof b.getElementsByName!==j)return b.getElementsByName(a)}),Y&&($.order.splice(1,0,"CLASS"),$.find.CLASS=(a, b, c) => {if(typeof b.getElementsByClassName!==j&&!c)return b.getElementsByClassName(a)});try{n.call(i.childNodes,0)[0].nodeType}catch(_){n=function(a){
      var b;
      var c=[];
      for(;b=this[a];a++)c.push(b);return c
    }}
    var ba=Z.isXML=a => {var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1};
    var bb=Z.contains=i.compareDocumentPosition?(a, b) => !!(a.compareDocumentPosition(b)&16):i.contains?(a, b) => {var c=a.nodeType===9?a.documentElement:a,d=b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:(a, b) => {while(b=b.parentNode)if(b===a)return!0;return!1};
    var bc=Z.getText=a => {var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=bc(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=bc(b);return c};
    Z.attr=(a, b) => {
      var c;
      var d=ba(a);
      return d||(b=b.toLowerCase()),$.attrHandle[b]?$.attrHandle[b](a):U||d?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)
    },Z.error=a => {throw new Error("Syntax error, unrecognized expression: "+a)},[0,0].sort(() => l=0),i.compareDocumentPosition?e=(a, b) => a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1:(e=(a, b) => {
      if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;
      var c;
      var d;
      var e=[];
      var g=[];
      var h=a.parentNode;
      var i=b.parentNode;
      var j=h;
      if(h===i)return f(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)g.unshift(j),j=j.parentNode;c=e.length,d=g.length;for(var l=0;l<c&&l<d;l++)if(e[l]!==g[l])return f(e[l],g[l]);return l===c?f(a,g[l],-1):f(e[l],b,1)
    },f=(a, b, c) => {if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),Z.uniqueSort=a => {
      var b;
      var c=1;
      if(e){k=l,a.sort(e);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1)}return a
    };var bl=Z.compile=(a, b, c) => {
      var d;
      var e;
      var f;
      var g=O[a];
      if(g&&g.context===b)return g;e=bg(a,b,c);for(f=0;d=e[f];f++)e[f]=bj(d,b,c);return g=O[a]=bk(e),g.context=b,g.runs=g.dirruns=0,P.push(a),P.length>$.cacheLength&&delete O[P.shift()],g
    };Z.matches=(a, b) => Z(a,null,null,b),Z.matchesSelector=(a, b) => Z(b,null,null,[a]).length>0;var bm=(a, b, e, f, g) => {
      a=a.replace(A,"$1");
      var h;
      var i;
      var j;
      var k;
      var l;
      var m;
      var p;
      var q;
      var r;
      var s=a.match(C);
      var t=a.match(E);
      var u=b.nodeType;
      if(L.POS.test(a))return bf(a,b,e,f,s);if(f)h=n.call(f,0);else if(s&&s.length===1){if(t.length>1&&u===9&&!g&&(s=L.ID.exec(t[0]))){b=$.find.ID(s[1],b,g)[0];if(!b)return e;a=a.slice(t.shift().length)}q=(s=G.exec(t[0]))&&!s.index&&b.parentNode||b,r=t.pop(),m=r.split(":not")[0];for(j=0,k=$.order.length;j<k;j++){p=$.order[j];if(s=L[p].exec(m)){h=$.find[p]((s[1]||"").replace(K,""),q,g);if(h==null)continue;m===r&&(a=a.slice(0,a.length-r.length)+m.replace(L[p],""),a||o.apply(e,n.call(h,0)));break}}}if(a){i=bl(a,b,g),d=i.dirruns++,h==null&&(h=$.find.TAG("*",G.test(a)&&b.parentNode||b));for(j=0;l=h[j];j++)c=i.runs++,i(l,b)&&e.push(l)}return e
    };h.querySelectorAll&&(() => {
      var a;
      var b=bm;
      var c=/'|\\/g;
      var d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g;
      var e=[];
      var f=[":active"];
      var g=i.matchesSelector||i.mozMatchesSelector||i.webkitMatchesSelector||i.oMatchesSelector||i.msMatchesSelector;
      T(a => {a.innerHTML="<select><option selected></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+r+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),T(a => {a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+r+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=e.length&&new RegExp(e.join("|")),bm=(a, d, f, g, h) => {if(!g&&!h&&(!e||!e.test(a)))if(d.nodeType===9)try{return o.apply(f,n.call(d.querySelectorAll(a),0)),f}catch(i){}else if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){
        var j=d.getAttribute("id");
        var k=j||q;
        var l=G.test(a)&&d.parentNode||d;
        j?k=k.replace(c,"\\$&"):d.setAttribute("id",k);try{return o.apply(f,n.call(l.querySelectorAll(a.replace(C,"[id='"+k+"'] $&")),0)),f}catch(i){}finally{j||d.removeAttribute("id")}
      }return b(a,d,f,g,h)},g&&(T(b => {a=g.call(b,"div");try{g.call(b,"[test!='']:sizzle"),f.push($.match.PSEUDO)}catch(c){}}),f=new RegExp(f.join("|")),Z.matchesSelector=(b, c) => {c=c.replace(d,"='$1']");if(!ba(b)&&!f.test(c)&&(!e||!e.test(c)))try{var h=g.call(b,c);if(h||a||b.document&&b.document.nodeType!==11)return h}catch(i){}return Z(c,null,null,[b]).length>0})
    })(),Z.attr=p.attr,p.find=Z,p.expr=Z.selectors,p.expr[":"]=p.expr.pseudos,p.unique=Z.uniqueSort,p.text=Z.getText,p.isXMLDoc=Z.isXML,p.contains=Z.contains
  })(a);
  var bc=/Until$/;
  var bd=/^(?:parents|prev(?:Until|All))/;
  var be=/^.[^:#\[\.,]*$/;
  var bf=p.expr.match.needsContext;
  var bg={children:!0,contents:!0,next:!0,prev:!0};
  p.fn.extend({find(a) {
    var b;
    var c;
    var d;
    var e;
    var f;
    var g;
    var h=this;
    if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g
  },has(a) {
    var b;
    var c=p(a,this);
    var d=c.length;
    return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})
  },not(a) {return this.pushStack(bj(this,a,!1),"not",a)},filter(a) {return this.pushStack(bj(this,a,!0),"filter",a)},is(a) {return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest(a, b) {
    var c;
    var d=0;
    var e=this.length;
    var f=[];
    var g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;
    for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)
  },index(a) {return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add(a, b) {
    var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a);
    var d=p.merge(this.get(),c);
    return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))
  },addBack(a) {return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent(a) {var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents(a) {return p.dir(a,"parentNode")},parentsUntil(a, b, c) {return p.dir(a,"parentNode",c)},next(a) {return bi(a,"nextSibling")},prev(a) {return bi(a,"previousSibling")},nextAll(a) {return p.dir(a,"nextSibling")},prevAll(a) {return p.dir(a,"previousSibling")},nextUntil(a, b, c) {return p.dir(a,"nextSibling",c)},prevUntil(a, b, c) {return p.dir(a,"previousSibling",c)},siblings(a) {return p.sibling((a.parentNode||{}).firstChild,a)},children(a) {return p.sibling(a.firstChild)},contents(a) {return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},(a, b) => {p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter(a, b, c) {return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir(a, c, d) {
    var e=[];
    var f=a[c];
    while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e
  },sibling(a, b) {var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});
  var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video";
  var bm=/ jQuery\d+="(?:null|\d+)"/g;
  var bn=/^\s+/;
  var bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;
  var bp=/<([\w:]+)/;
  var bq=/<tbody/i;
  var br=/<|&#?\w+;/;
  var bs=/<(?:script|style|link)/i;
  var bt=/<(?:script|object|embed|option|style)/i;
  var bu=new RegExp("<(?:"+bl+")[\\s/>]","i");
  var bv=/^(?:checkbox|radio)$/;
  var bw=/checked\s*(?:[^=]|=\s*.checked.)/i;
  var bx=/\/(java|ecma)script/i;
  var by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g;
  var bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};
  var bA=bk(e);
  var bB=bA.appendChild(e.createElement("div"));
  bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text(a) {return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll(a) {if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner(a) {return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){
    var b=p(this);
    var c=b.contents();
    c.length?c.wrapAll(a):b.append(a)
  });},wrap(a) {var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap() {return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append(...args) {return this.domManip(args,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)});},prepend(...args) {return this.domManip(args,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)});},before(...args) {if(!bh(this[0]))return this.domManip(args,!1,function(a){this.parentNode.insertBefore(a,this)});if(args.length){var a=p.clean(args);return this.pushStack(p.merge(a,this),"before",this.selector)}},after(...args) {if(!bh(this[0]))return this.domManip(args,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(args.length){var a=p.clean(args);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove(a, b) {
    var c;
    var d=0;
    for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this
  },empty() {
    var a;
    var b=0;
    for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this
  },clone(a, b) {return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html(a) {return p.access(this,function(a){
    var c=this[0]||{};
    var d=0;
    var e=this.length;
    if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)
  },null,a,arguments.length);},replaceWith(a) {return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){
    var c=p(this);
    var d=c.html();
    c.replaceWith(a.call(this,b,d))
  }):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){
    var b=this.nextSibling;
    var c=this.parentNode;
    p(this).remove(),b?p(b).before(a):p(c).append(a)
  }));},detach(a) {return this.remove(a,!0)},domManip(a, c, d) {
    a=[].concat(...a);
    var e;
    var f;
    var g;
    var h;
    var i=0;
    var j=a[0];
    var k=[];
    var l=this.length;
    if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,(a, b) => {b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this
  }}),p.buildFragment=(a, c, d) => {
    var f;
    var g;
    var h;
    var i=a[0];
    return c=c||e,c=(c[0]||c).ownerDocument||c[0]||c,typeof c.createDocumentFragment=="undefined"&&(c=e),a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}
  },p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(a, b) => {p.fn[a]=function(c){
    var d;
    var e=0;
    var f=[];
    var g=p(c);
    var h=g.length;
    var i=this.length===1&&this[0].parentNode;
    if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)
  }}),p.extend({clone(a, b, c) {
    var d;
    var e;
    var f;
    var g;
    p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g
  },clean(a, b, c, d) {
    var f;
    var g;
    var h;
    var i;
    var j;
    var k;
    var l;
    var m;
    var n;
    var o;
    var q;
    var r;
    var s=0;
    var t=[];
    if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(g=b===e&&bA;(h=a[s])!=null;s++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{g=g||bk(b),l=l||g.appendChild(b.createElement("div")),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(f=n.length-1;f>=0;--f)p.nodeName(n[f],"tbody")&&!n[f].childNodes.length&&n[f].parentNode.removeChild(n[f])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l=g.lastChild}h.nodeType?t.push(h):t=p.merge(t,h)}l&&(g.removeChild(l),h=l=g=null);if(!p.support.appendChecked)for(s=0;(h=t[s])!=null;s++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=a => {if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(s=0;(h=t[s])!=null;s++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice(...[s+1,0].concat(r)),s+=r.length)}return t
  },cleanData(a, b) {
    var c;
    var d;
    var e;
    var f;
    var g=0;
    var h=p.expando;
    var i=p.cache;
    var j=p.support.deleteExpando;
    var k=p.event.special;
    for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}
  }}),(() => {
    var a;
    var b;
    p.uaMatch=a => {a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}
  })();
  var bH;
  var bI;
  var bJ;
  var bK=/alpha\([^)]*\)/i;
  var bL=/opacity=([^)]*)/;
  var bM=/^(top|right|bottom|left)$/;
  var bN=/^margin/;
  var bO=new RegExp("^("+q+")(.*)$","i");
  var bP=new RegExp("^("+q+")(?!px)[a-z%]+$","i");
  var bQ=new RegExp("^([-+])=("+q+")","i");
  var bR={};
  var bS={position:"absolute",visibility:"hidden",display:"block"};
  var bT={letterSpacing:0,fontWeight:400,lineHeight:1};
  var bU=["Top","Right","Bottom","Left"];
  var bV=["Webkit","O","Moz","ms"];
  var bW=p.fn.toggle;
  p.fn.extend({css(a, c) {return p.access(this,(a, c, d) => d!==b?p.style(a,c,d):p.css(a,c),a,c,arguments.length>1);},show() {return bZ(this,!0)},hide() {return bZ(this)},toggle(a, b) {var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bW.apply(this,arguments):this.each(function(){(c?a:bY(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get(a, b) {if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style(a, c, d, e) {
    if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;
    var f;
    var g;
    var h;
    var i=p.camelCase(c);
    var j=a.style;
    c=p.cssProps[i]||(p.cssProps[i]=bX(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bQ.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}
  },css(a, c, d, e) {
    var f;
    var g;
    var h;
    var i=p.camelCase(c);
    return c=p.cssProps[i]||(p.cssProps[i]=bX(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bT&&(f=bT[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f
  },swap(a, b, c) {
    var d;
    var e;
    var f={};
    for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d
  }}),a.getComputedStyle?bH=(a, b) => {
    var c;
    var d;
    var e;
    var f;
    var g=getComputedStyle(a,null);
    var h=a.style;
    return g&&(c=g[b],c===""&&!p.contains(a.ownerDocument.documentElement,a)&&(c=p.style(a,b)),bP.test(c)&&bN.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=c,c=g.width,h.width=d,h.minWidth=e,h.maxWidth=f)),c
  }:e.documentElement.currentStyle&&(bH=(a, b) => {
    var c;
    var d;
    var e=a.currentStyle&&a.currentStyle[b];
    var f=a.style;
    return e==null&&f&&f[b]&&(e=f[b]),bP.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e
  }),p.each(["height","width"],(a, b) => {p.cssHooks[b]={get(a, c, d) {if(c)return a.offsetWidth!==0||bH(a,"display")!=="none"?ca(a,b,d):p.swap(a,bS,() => ca(a,b,d));},set(a, c, d) {return b$(a,c,d?b_(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get(a, b) {return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set(a, b) {
    var c=a.style;
    var d=a.currentStyle;
    var e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"";
    var f=d&&d.filter||c.filter||"";
    c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e
  }}),p(() => {p.support.reliableMarginRight||(p.cssHooks.marginRight={get(a, b) {return p.swap(a,{display:"inline-block"},() => {if(b)return bH(a,"marginRight")});}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],(a, b) => {p.cssHooks[b]={get(a, c) {if(c){var d=bH(a,b);return bP.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=a => a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none",p.expr.filters.visible=a => !p.expr.filters.hidden(a)),p.each({margin:"",padding:"",border:"Width"},(a, b) => {p.cssHooks[a+b]={expand(c) {
    var d;
    var e=typeof c=="string"?c.split(" "):[c];
    var f={};
    for(d=0;d<4;d++)f[a+bU[d]+b]=e[d]||e[d-2]||e[0];return f
  }},bN.test(a)||(p.cssHooks[a+b].set=b$)});
  var cc=/%20/g;
  var cd=/\[\]$/;
  var ce=/\r?\n/g;
  var cf=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i;
  var cg=/^(?:select|textarea)/i;
  p.fn.extend({serialize() {return p.param(this.serializeArray())},serializeArray() {return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||cg.test(this.nodeName)||cf.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,(a, c) => ({
    name:b.name,
    value:a.replace(ce,"\r\n")
  })):{name:b.name,value:c.replace(ce,"\r\n")};}).get();}}),p.param=(a, c) => {
    var d;
    var e=[];
    var f=(a, b) => {b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};
    c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ch(d,a[d],c,f);return e.join("&").replace(cc,"+")
  };
  var ci;
  var cj;
  var ck=/#.*$/;
  var cl=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg;
  var cm=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/;
  var cn=/^(?:GET|HEAD)$/;
  var co=/^\/\//;
  var cp=/\?/;
  var cq=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
  var cr=/([?&])_=[^&]*/;
  var cs=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/;
  var ct=p.fn.load;
  var cu={};
  var cv={};
  var cw=["*/"]+["*"];
  try{ci=f.href}catch(cx){ci=e.createElement("a"),ci.href="",ci=ci.href}cj=cs.exec(ci.toLowerCase())||[],p.fn.load=function(a,c,d){
    if(typeof a!="string"&&ct)return ct.apply(this,arguments);if(!this.length)return this;
    var e;
    var f;
    var g;
    var h=this;
    var i=a.indexOf(" ");
    return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete(a, b) {d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cq,"")).find(e):a)}),this;
  },p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),(a, b) => {p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],(a, c) => {p[c]=(a, d, e, f) => (p.isFunction(d)&&(f=f||e,e=d,d=b), p.ajax({type:c,url:a,data:d,success:e,dataType:f}))}),p.extend({getScript(a, c) {return p.get(a,b,c,"script")},getJSON(a, b, c) {return p.get(a,b,c,"json")},ajaxSetup(a, b) {return b?cA(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cA(a,b),a},ajaxSettings:{url:ci,isLocal:cm.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cw},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cy(cu),ajaxTransport:cy(cv),ajax(a, c) {
    function y(a,c,f,i){
      var k;
      var s;
      var t;
      var u;
      var w;
      var y=c;
      if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cB(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cC(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=""+(c||y),k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))
    }typeof a=="object"&&(c=a,a=b),c=c||{};
    var d;
    var e;
    var f;
    var g;
    var h;
    var i;
    var j;
    var k;
    var l=p.ajaxSetup({},c);
    var m=l.context||l;
    var n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event;
    var o=p.Deferred();
    var q=p.Callbacks("once memory");
    var r=l.statusCode||{};
    var t={};
    var u={};
    var v=0;
    var w="canceled";
    var x={readyState:0,setRequestHeader(a, b) {if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders() {return v===2?e:null},getResponseHeader(a) {var c;if(v===2){if(!f){f={};while(c=cl.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType(a) {return v||(l.mimeType=a),this},abort(a) {return a=a||w,g&&g.abort(a),y(0,a),this}};
    o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(ck,"").replace(co,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=cs.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]==cj[1]&&i[2]==cj[2]&&(i[3]||(i[1]==="http:"?80:443))==(cj[3]||(cj[1]==="http:"?80:443)))),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cz(cu,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!cn.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cp.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){
      var z=p.now();
      var A=l.url.replace(cr,"$1_="+z);
      l.url=A+(A===l.url?(cp.test(l.url)?"&":"?")+"_="+z:"")
    }}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cw+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cz(cv,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(() => {x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()
  },active:0,lastModified:{},etag:{}});
  var cD=[];
  var cE=/\?/;
  var cF=/(=)\?(?=&|$)|\?\?/;
  var cG=p.now();
  p.ajaxSetup({jsonp:"callback",jsonpCallback() {var a=cD.pop()||p.expando+"_"+cG++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",(c, d, e) => {
    var f;
    var g;
    var h;
    var i=c.data;
    var j=c.url;
    var k=c.jsonp!==!1;
    var l=k&&cF.test(j);
    var m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cF.test(i);
    if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cF,"$1"+f):m?c.data=i.replace(cF,"$1"+f):k&&(c.url+=(cE.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=() => (h||p.error(f+" was not called"), h[0]),c.dataTypes[0]="json",a[f]=function(...args) {h=args},e.always(() => {a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cD.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script";
  }),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",a => {a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",a => {if(a.crossDomain){
    var c;
    var d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;
    return {send(f, g) {c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=(a, e) => {if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort() {c&&c.onload(0,1)}};
  }});
  var cH;
  var cI=a.ActiveXObject?() => {for(var a in cH)cH[a](0,1)}:!1;
  var cJ=0;
  p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cK()||cL()}:cK,(a => {p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})})(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(c => {if(!c.crossDomain||p.support.cors){var d;return {send(e, f) {
    var g;
    var h;
    var i=c.xhr();
    c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=(a, e) => {
      var h;
      var j;
      var k;
      var l;
      var m;
      try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cI&&delete cH[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)
    },c.async?i.readyState===4?setTimeout(d,0):(g=++cJ,cI&&(cH||(cH={},p(a).unload(cI)),cH[g]=d),i.onreadystatechange=d):d()
  },abort() {d&&d(0,1)}};}});
  var cM;
  var cN;
  var cO=/^(?:toggle|show|hide)$/;
  var cP=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i");
  var cQ=/queueHooks$/;
  var cR=[cX];
  var cS={"*":[function(a,b){var c,d,e,f=this.createTween(a,b),g=cP.exec(b),h=f.cur(),i=+h||0,j=1;if(g){c=+g[2],d=g[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&i){i=p.css(f.elem,a,!0)||c||1;do e=j=j||".5",i=i/j,p.style(f.elem,a,i+d),j=f.cur()/h;while(j!==1&&j!==e)}f.unit=d,f.start=i,f.end=g[1]?i+(g[1]+1)*c:c}return f}]};
  p.Animation=p.extend(cV,{tweener(a, b) {
    p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");
    var c;
    var d=0;
    var e=a.length;
    for(;d<e;d++)c=a[d],cS[c]=cS[c]||[],cS[c].unshift(b)
  },prefilter(a, b) {b?cR.unshift(a):cR.push(a)}}),p.Tween=cY,cY.prototype={constructor:cY,init(a, b, c, d, e, f) {this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur() {var a=cY.propHooks[this.prop];return a&&a.get?a.get(this):cY.propHooks._default.get(this)},run(a) {
    var b;
    var c=cY.propHooks[this.prop];
    return this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration),this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cY.propHooks._default.set(this),this
  }},cY.prototype.init.prototype=cY.prototype,cY.propHooks={_default:{get(a) {var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set(a) {p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cY.propHooks.scrollTop=cY.propHooks.scrollLeft={set(a) {a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],(a, b) => {var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(cZ(b,!0),d,e,f)}}),p.fn.extend({fadeTo(a, b, c, d) {return this.filter(bY).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate(a, b, c, d) {
    var e=p.isEmptyObject(a);
    var f=p.speed(b,c,d);
    var g=function(){var b=cV(this,p.extend({},a),f);e&&b.stop(!0)};
    return e||f.queue===!1?this.each(g):this.queue(f.queue,g)
  },stop(a, c, d) {var e=a => {var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){
    var b=!0;
    var c=a!=null&&a+"queueHooks";
    var f=p.timers;
    var g=p._data(this);
    if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cQ.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)
  });}}),p.each({slideDown:cZ("show"),slideUp:cZ("hide"),slideToggle:cZ("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(a, b) => {p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=(a, b, c) => {var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear(a) {return a},swing(a) {return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cY.prototype.init,p.fx.tick=() => {
    var a;
    var b=p.timers;
    var c=0;
    for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()
  },p.fx.timer=a => {a()&&p.timers.push(a)&&!cN&&(cN=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=() => {clearInterval(cN),cN=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=a => p.grep(p.timers,b => a===b.elem).length);var c$=/^(?:body|html)$/i;p.fn.offset=function(a){
    if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});
    var c;
    var d;
    var e;
    var f;
    var g;
    var h;
    var i;
    var j;
    var k;
    var l;
    var m=this[0];
    var n=m&&m.ownerDocument;
    if(!n)return;return(e=n.body)===m?p.offset.bodyOffset(m):(d=n.documentElement,p.contains(d,m)?(c=m.getBoundingClientRect(),f=c_(n),g=d.clientTop||e.clientTop||0,h=d.clientLeft||e.clientLeft||0,i=f.pageYOffset||d.scrollTop,j=f.pageXOffset||d.scrollLeft,k=c.top+i-g,l=c.left+j-h,{top:k,left:l}):{top:0,left:0})
  },p.offset={bodyOffset(a) {
    var b=a.offsetTop;
    var c=a.offsetLeft;
    return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}
  },setOffset(a, b, c) {
    var d=p.css(a,"position");d==="static"&&(a.style.position="relative");
    var e=p(a);
    var f=e.offset();
    var g=p.css(a,"top");
    var h=p.css(a,"left");
    var i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1;
    var j={};
    var k={};
    var l;
    var m;
    i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)
  }},p.fn.extend({position() {
    if(!this[0])return;
    var a=this[0];
    var b=this.offsetParent();
    var c=this.offset();
    var d=c$.test(b[0].nodeName)?{top:0,left:0}:b.offset();
    return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}
  },offsetParent() {return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c$.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(a, c) => {var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,(a, e, f) => {var g=c_(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null);}}),p.each({Height:"height",Width:"width"},(a, c) => {p.each({padding:"inner"+a,content:c,"":"outer"+a},(d, e) => {p.fn[e]=function(e,f){
    var g=arguments.length&&(d||typeof e!="boolean");
    var h=d||(e===!0||f===!0?"margin":"border");
    return p.access(this,(c, d, e) => {var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g);
  }})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],() => p)
}))(window);