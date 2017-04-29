;window.Modernizr=function(a,b,c){
  function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){
    var d=a.charAt(0).toUpperCase()+a.slice(1);
    var e=(a+" "+p.join(d+" ")+d).split(" ");
    return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))
  }function K(){e.input=(c => {for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u})("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=(a => {for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t})("search tel url email datetime date month week time datetime-local number range color".split(" "))}
  var d="2.6.1";
  var e={};
  var f=!0;
  var g=b.documentElement;
  var h="modernizr";
  var i=b.createElement(h);
  var j=i.style;
  var k=b.createElement("input");
  var l=":)";
  var m={}.toString;
  var n=" -webkit- -moz- -o- -ms- ".split(" ");
  var o="Webkit Moz O ms";
  var p=o.split(" ");
  var q=o.toLowerCase().split(" ");
  var r={svg:"http://www.w3.org/2000/svg"};
  var s={};
  var t={};
  var u={};
  var v=[];
  var w=v.slice;
  var x;
  var y=(a, c, d, e) => {var f,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),k.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),k.id=h,(l?k:m).innerHTML+=f,m.appendChild(k),l||(m.style.background="",g.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i};
  var z=b => {var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",b => {d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d;};
  var A=(() => {function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d})();
  var B={}.hasOwnProperty;
  var C;
  !F(B,"undefined")&&!F(B.call,"undefined")?C=(a, b) => B.call(a,b):C=(a, b) => b in a&&F(a.constructor.prototype[b],"undefined"),Function.prototype.bind||(Function.prototype.bind=function(b){
    var c=this;if(typeof c!="function")throw new TypeError;
    var d=w.call(arguments,1);
    var e=function(...args) {if(this instanceof e){var a=() => {};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(args)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(args)));};
    return e
  }),s.flexbox=() => J("flexWrap"),s.canvas=() => {var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=() => !!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function"),s.webgl=() => !!a.WebGLRenderingContext,s.touch=() => {var c;return "ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),a => {c=a.offsetTop===9}),c;},s.geolocation=() => "geolocation"in navigator,s.postmessage=() => !!a.postMessage,s.websqldatabase=() => !!a.openDatabase,s.indexedDB=() => !!J("indexedDB",a),s.hashchange=() => A("hashchange",a)&&(b.documentMode===c||b.documentMode>7),s.history=() => !!a.history&&!!history.pushState,s.draganddrop=() => {var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=() => "WebSocket"in a||"MozWebSocket"in a,s.rgba=() => (D("background-color:rgba(150,255,150,.5)"), G(j.backgroundColor,"rgba")),s.hsla=() => (D("background-color:hsla(120,40%,100%,.5)"), G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")),s.multiplebgs=() => (D("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background)),s.backgroundsize=() => J("backgroundSize"),s.borderimage=() => J("borderImage"),s.borderradius=() => J("borderRadius"),s.boxshadow=() => J("boxShadow"),s.textshadow=() => b.createElement("div").style.textShadow==="",s.opacity=() => (E("opacity:.55"), /^0.55$/.test(j.opacity)),s.cssanimations=() => J("animationName"),s.csscolumns=() => J("columnCount"),s.cssgradients=() => {
    var a="background-image:";
    var b="gradient(linear,left top,right bottom,from(#9f9),to(white));";
    var c="linear-gradient(left top,#9f9, white);";
    return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")
  },s.cssreflections=() => J("boxReflect"),s.csstransforms=() => !!J("transform"),s.csstransforms3d=() => {var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",(b, c) => {a=b.offsetLeft===9&&b.offsetHeight===3}),a;},s.csstransitions=() => J("transition"),s.fontface=() => {var a;return y('@font-face {font-family:"font";src:url("https://")}',(c, d) => {
    var e=b.getElementById("smodernizr");
    var f=e.sheet||e.styleSheet;
    var g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";
    a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0
  }),a;},s.generatedcontent=() => {var a;return y(['#modernizr:after{content:"',l,'";visibility:hidden}'].join(""),b => {a=b.offsetHeight>=1}),a;},s.video=() => {
    var a=b.createElement("video");
    var c=!1;
    try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c
  },s.audio=() => {
    var a=b.createElement("audio");
    var c=!1;
    try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c
  },s.localstorage=() => {try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=() => {try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=() => !!a.Worker,s.applicationcache=() => !!a.applicationCache,s.svg=() => !!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect,s.inlinesvg=() => {var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=() => !!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate"))),s.svgclippaths=() => !!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")));for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=(a, b) => {if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,((a, b) => {
    function k(a,b){
      var c=a.createElement("p");
      var d=a.getElementsByTagName("head")[0]||a.documentElement;
      return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)
    }function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){
      a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);
      var d=c.frag.cloneNode();
      var e=0;
      var f=l();
      var g=f.length;
      for(;e<g;e++)d.createElement(f[e]);return d
    }function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=c => r.shivMethods?n(c,a,b):b.createElem(c),a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,a => (b.createElem(a), b.frag.createElement(a), 'c("'+a+'")'))+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}
    var c=a.html5||{};
    var d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
    var e=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i;
    var f;
    var g="_html5shiv";
    var h=0;
    var i={};
    var j;
    ((() => {try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||(() => {b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"})()}catch(c){f=!0,j=!0}}))();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)
  })(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=a => H([a]),e.testAllProps=J,e.testStyles=y,e.prefixed=(a, b, c) => b?J(a,b,c):J(a,"pfx"),g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e;
}(this,this.document),((a, b, c) => {
  function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(() => {(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){
    function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(() => {t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}
    var j=j||B.errorTimeout;
    var l={};
    var o=0;
    var r=0;
    var u={t:d,s:c,e:f,a:i,x:j};
    y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))
  }function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}
  var l=b.documentElement;
  var m=a.setTimeout;
  var n=b.getElementsByTagName("script")[0];
  var o={}.toString;
  var p=[];
  var q=0;
  var r="MozAppearance"in l.style;
  var s=r&&!!b.createRange().compareNode;
  var t=s?l:n.parentNode;
  var l=a.opera&&o.call(a.opera)=="[object Opera]";
  var l=!!b.attachEvent&&!l;
  var u=r?"object":l?"script":"img";
  var v=l?"script":u;
  var w=Array.isArray||(a => o.call(a)=="[object Array]");
  var x=[];
  var y={};
  var z={timeout(a, b) {return b.length&&(a.timeout=b[0]),a}};
  var A;
  var B;
  B=function(a){
    function b(a){
      var a=a.split("!");
      var b=x.length;
      var c=a.pop();
      var d=a.length;
      var c={url:c,origUrl:c,prefixes:a};
      var e;
      var f;
      var g;
      for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c
    }function g(a,e,f,g,i){
      var j=b(a);
      var l=j.autoCallback;
      j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(() => {k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))
    }function i(a,b){
      function c(a,c){if(a){if(e(a))c||(j=function(...args) {var a=[].slice.call(args);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in (m=(() => {
        var b=0;
        var c;
        for(c in a)a.hasOwnProperty(c)&&b++;return b
      })(), a))a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(...args) {var a=[].slice.call(args);k.apply(this,a),l()}:j[n]=(a => function(...args) {var b=[].slice.call(args);a&&a.apply(this,b),l()})(k[n])),g(a[n],j,b,n,h))}else!c&&l()}
      var h=!!a.test;
      var i=a.load||a.both;
      var j=a.callback||f;
      var k=j;
      var l=a.complete||f;
      var m;
      var n;
      c(h?a.yep:a.nope,!!i),i&&c(i)
    }
    var j;
    var l;
    var m=this.yepnope.loader;
    if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)
  },B.addPrefix=(a, b) => {z[a]=b},B.addFilter=a => {x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=() => {b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=(a, c, d, e, i, j) => {
    var k=b.createElement("script");
    var l;
    var o;
    var e=e||B.errorTimeout;
    k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=() => {!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(() => {l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)
  },a.yepnope.injectCss=(a, c, d, e, g, i) => {
    var e=b.createElement("link");
    var j;
    var c=i?h:c||f;
    e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))
  }
})(this,document),Modernizr.load=function(...args) {yepnope.apply(window,[].slice.call(args,0))};