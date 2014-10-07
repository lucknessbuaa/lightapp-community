/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
!function(a,b){"use strict";var c,d,e,f="._tap",g="._tapActive",h="tap",i="clientX clientY screenX screenY pageX pageY".split(" "),j={count:0,event:0},k=function(a,c){var d=c.originalEvent,e=b.Event(d);e.type=a;for(var f=0,g=i.length;g>f;f++)e[i[f]]=c[i[f]];return e},l=function(a){if(a.isTrigger)return!1;var c=j.event,d=Math.abs(a.pageX-c.pageX),e=Math.abs(a.pageY-c.pageY),f=Math.max(d,e);return a.timeStamp-c.timeStamp<b.tap.TIME_DELTA&&f<b.tap.POSITION_DELTA&&(!c.touches||1===j.count)&&o.isTracking},m=function(a){if(!e)return!1;var c=Math.abs(a.pageX-e.pageX),d=Math.abs(a.pageY-e.pageY),f=Math.max(c,d);return Math.abs(a.timeStamp-e.timeStamp)<750&&f<b.tap.POSITION_DELTA},n=function(a){if(0===a.type.indexOf("touch")){a.touches=a.originalEvent.changedTouches;for(var b=a.touches[0],c=0,d=i.length;d>c;c++)a[i[c]]=b[i[c]]}a.timeStamp=Date.now?Date.now():+new Date},o={isEnabled:!1,isTracking:!1,enable:function(){o.isEnabled||(o.isEnabled=!0,c=b(a.body).on("touchstart"+f,o.onStart).on("mousedown"+f,o.onStart).on("click"+f,o.onClick))},disable:function(){o.isEnabled&&(o.isEnabled=!1,c.off(f))},onStart:function(a){a.isTrigger||(n(a),(!b.tap.LEFT_BUTTON_ONLY||a.touches||1===a.which)&&(a.touches&&(j.count=a.touches.length),o.isTracking||(a.touches||!m(a))&&(o.isTracking=!0,j.event=a,a.touches?(e=a,c.on("touchend"+f+g,o.onEnd).on("touchcancel"+f+g,o.onCancel)):c.on("mouseup"+f+g,o.onEnd))))},onEnd:function(a){var c;a.isTrigger||(n(a),l(a)&&(c=k(h,a),d=c,b(j.event.target).trigger(c)),o.onCancel(a))},onCancel:function(a){a&&"touchcancel"===a.type&&a.preventDefault(),o.isTracking=!1,c.off(g)},onClick:function(a){return!a.isTrigger&&d&&d.isDefaultPrevented()&&d.target===a.target&&d.pageX===a.pageX&&d.pageY===a.pageY&&a.timeStamp-d.timeStamp<750?(d=null,!1):void 0}};b(a).ready(o.enable),b.tap={POSITION_DELTA:10,TIME_DELTA:400,LEFT_BUTTON_ONLY:!0}}(document,jQuery);
!function(){function e(){var e='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="icon error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="icon warning"> <span class="body"></span> <span class="dot"></span> </div> <div class="icon info"></div> <div class="icon success"> <span class="line tip"></span> <span class="line long"></span> <div class="placeholder"></div> <div class="fix"></div> </div> <div class="icon custom"></div> <h2>Title</h2><p>Text</p><button class="cancel" tabIndex="2">Cancel</button><button class="confirm" tabIndex="1">OK</button></div>',t=document.createElement("div");t.innerHTML=e,document.body.appendChild(t)}function t(e){var t=d(),n=t.querySelector("h2"),o=t.querySelector("p"),a=t.querySelector("button.cancel"),i=t.querySelector("button.confirm");if(n.innerHTML=g(e.title),o.innerHTML=g(e.text||""),e.text&&w(o),h(t.querySelectorAll(".icon")),e.type){for(var c=!1,l=0;l<u.length;l++)if(e.type===u[l]){c=!0;break}if(!c)return window.console.error("Unknown alert type: "+e.type),!1;var s=t.querySelector(".icon."+e.type);switch(w(s),e.type){case"success":y(s,"animate"),y(s.querySelector(".tip"),"animateSuccessTip"),y(s.querySelector(".long"),"animateSuccessLong");break;case"error":y(s,"animateErrorIcon"),y(s.querySelector(".x-mark"),"animateXMark");break;case"warning":y(s,"pulseWarning"),y(s.querySelector(".body"),"pulseWarningIns"),y(s.querySelector(".dot"),"pulseWarningIns")}}if(e.imageUrl){var m=t.querySelector(".icon.custom");m.style.backgroundImage="url("+e.imageUrl+")",w(m);var f=80,p=80;if(e.imageSize){var v=e.imageSize.split("x")[0],b=e.imageSize.split("x")[1];v&&b?(f=v,p=b,m.css({width:v+"px",height:b+"px"})):window.console.error("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+e.imageSize)}m.setAttribute("style",m.getAttribute("style")+"width:"+f+"px; height:"+p+"px")}t.setAttribute("data-has-cancel-button",e.showCancelButton),e.showCancelButton?a.style.display="inline-block":h(a),e.cancelButtonText&&(a.innerHTML=g(e.cancelButtonText)),e.confirmButtonText&&(i.innerHTML=g(e.confirmButtonText)),i.style.backgroundColor=e.confirmButtonColor,r(i,e.confirmButtonColor),t.setAttribute("data-allow-ouside-click",e.allowOutsideClick);var S=e.doneFunction?!0:!1;t.setAttribute("data-has-done-function",S)}function n(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var n="#",o,r;for(r=0;3>r;r++)o=parseInt(e.substr(2*r,2),16),o=Math.round(Math.min(Math.max(0,o+o*t),255)).toString(16),n+=("00"+o).substr(o.length);return n}function o(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?parseInt(t[1],16)+", "+parseInt(t[2],16)+", "+parseInt(t[3],16):null}function r(e,t){var n=o(t);e.style.boxShadow="0 0 2px rgba("+n+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"}function a(){var e=d();k(m(),10),w(e),y(e,"showSweetAlert"),p(e,"hideSweetAlert"),E=document.activeElement;var t=e.querySelector("button.confirm");t.focus(),setTimeout(function(){y(e,"visible")},500)}function i(){var e=d();C(m(),5),C(e,5),p(e,"showSweetAlert"),y(e,"hideSweetAlert"),p(e,"visible");var t=e.querySelector(".icon.success");p(t,"animate"),p(t.querySelector(".tip"),"animateSuccessTip"),p(t.querySelector(".long"),"animateSuccessLong");var n=e.querySelector(".icon.error");p(n,"animateErrorIcon"),p(n.querySelector(".x-mark"),"animateXMark");var o=e.querySelector(".icon.warning");p(o,"pulseWarning"),p(o.querySelector(".body"),"pulseWarningIns"),p(o.querySelector(".dot"),"pulseWarningIns"),window.onkeydown=I,document.onclick=q,E&&E.focus(),A=void 0}function c(){var e=d();e.style.marginTop=x(d())}var l=".sweet-alert",s=".sweet-overlay",u=["error","warning","info","success"],d=function(){return document.querySelector(l)},m=function(){return document.querySelector(s)},f=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},y=function(e,t){f(e,t)||(e.className+=" "+t)},p=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(f(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},g=function(e){var t=document.createElement("div");return t.appendChild(document.createTextNode(e)),t.innerHTML},v=function(e){e.style.opacity="",e.style.display="block"},w=function(e){if(e&&!e.length)return v(e);for(var t=0;t<e.length;++t)v(e[t])},b=function(e){e.style.opacity="",e.style.display="none"},h=function(e){if(e&&!e.length)return b(e);for(var t=0;t<e.length;++t)b(e[t])},S=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},x=function(e){e.style.left="-9999px",e.style.display="block";var t=e.clientHeight,n=parseInt(getComputedStyle(e).getPropertyValue("padding"),10);return e.style.left="",e.style.display="none","-"+parseInt(t/2+n)+"px"},k=function(e,t){t=t||16,e.style.opacity=0,e.style.display="block";var n=+new Date,o=function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)};o()},C=function(e,t){t=t||16,e.style.opacity=1;var n=+new Date,o=function(){e.style.opacity=+e.style.opacity-(new Date-n)/100,n=+new Date,+e.style.opacity>0?setTimeout(o,t):e.style.display="none"};o()},B=function(e){if(MouseEvent){var t=new MouseEvent("click",{view:window,bubbles:!1,cancelable:!0});e.dispatchEvent(t)}else if(document.createEvent){var n=document.createEvent("MouseEvents");n.initEvent("click",!1,!1),e.dispatchEvent(n)}else document.createEventObject?e.fireEvent("onclick"):"function"==typeof e.onclick&&e.onclick()},T=function(e){"function"==typeof e.stopPropagation?(e.stopPropagation(),e.preventDefault()):window.event&&window.event.hasOwnProperty("cancelBubble")&&(window.event.cancelBubble=!0)},E,q,I,A;window.sweetAlert=window.swal=function(){function e(e){var t=e.keyCode||e.which;if(-1!==[9,13,32,27].indexOf(t)){for(var n=e.target||e.srcElement,o=-1,a=0;a<v.length;a++)if(n===v[a]){o=a;break}9===t?(n=-1===o?p:o===v.length-1?v[0]:v[o+1],T(e),n.focus(),r(n,l.confirmButtonColor)):(n=13===t||32===t?-1===o?p:void 0:27!==t||g.hidden||"none"===g.style.display?void 0:g,void 0!==n&&B(n,e))}}function o(e){var t=e.target||e.srcElement,n=e.relatedTarget,o=f(s,"visible");if(o){var r=-1;if(null!==n){for(var a=0;a<v.length;a++)if(n===v[a]){r=a;break}-1===r&&t.focus()}else A=t}}var l={title:"",text:"",type:null,allowOutsideClick:!1,showCancelButton:!1,confirmButtonText:"OK",confirmButtonColor:"#AEDEF4",cancelButtonText:"Cancel",imageUrl:null,imageSize:null};if(void 0===arguments[0])return window.console.error("sweetAlert expects at least 1 attribute!"),!1;switch(typeof arguments[0]){case"string":l.title=arguments[0],l.text=arguments[1]||"",l.type=arguments[2]||"";break;case"object":if(void 0===arguments[0].title)return window.console.error('Missing "title" argument!'),!1;l.title=arguments[0].title,l.text=arguments[0].text||l.text,l.type=arguments[0].type||l.type,l.allowOutsideClick=arguments[0].allowOutsideClick||l.allowOutsideClick,l.showCancelButton=arguments[0].showCancelButton||l.showCancelButton,l.confirmButtonText=l.showCancelButton?"Confirm":l.confirmButtonText,l.confirmButtonText=arguments[0].confirmButtonText||l.confirmButtonText,l.confirmButtonColor=arguments[0].confirmButtonColor||l.confirmButtonColor,l.cancelButtonText=arguments[0].cancelButtonText||l.cancelButtonText,l.imageUrl=arguments[0].imageUrl||l.imageUrl,l.imageSize=arguments[0].imageSize||l.imageSize,l.doneFunction=arguments[1]||null;break;default:return window.console.error('Unexpected type of argument! Expected "string" or "object", got '+typeof arguments[0]),!1}t(l),c(),a();for(var s=d(),u=function(e){var t=e.target||e.srcElement,o="confirm"===t.className,r=f(s,"visible"),a=l.doneFunction&&"true"===s.getAttribute("data-has-done-function");switch(e.type){case"mouseover":o&&(e.target.style.backgroundColor=n(l.confirmButtonColor,-.04));break;case"mouseout":o&&(e.target.style.backgroundColor=l.confirmButtonColor);break;case"mousedown":o&&(e.target.style.backgroundColor=n(l.confirmButtonColor,-.14));break;case"mouseup":o&&(e.target.style.backgroundColor=n(l.confirmButtonColor,-.04));break;case"focus":var c=s.querySelector("button.confirm"),u=s.querySelector("button.cancel");o?u.style.boxShadow="none":c.style.boxShadow="none";break;case"click":o&&a&&r&&l.doneFunction(),i()}},m=s.querySelectorAll("button"),y=0;y<m.length;y++)m[y].onclick=u,m[y].onmouseover=u,m[y].onmouseout=u,m[y].onmousedown=u,m[y].onfocus=u;q=document.onclick,document.onclick=function(e){var t=e.target||e.srcElement,n=s===t,o=S(s,e.target),r=f(s,"visible"),a="true"===s.getAttribute("data-allow-ouside-click");!n&&!o&&r&&a&&i()};var p=s.querySelector("button.confirm"),g=s.querySelector("button.cancel"),v=s.querySelectorAll("button:not([type=hidden])");I=window.onkeydown,window.onkeydown=e,p.onblur=o,g.onblur=o,window.onfocus=function(){window.setTimeout(function(){void 0!==A&&(A.focus(),A=void 0)},0)}},function(){"complete"===document.readyState||"interactive"===document.readyState?e():document.addEventListener?document.addEventListener("DOMContentLoaded",function t(){document.removeEventListener("DOMContentLoaded",arguments.callee,!1),e()},!1):document.attachEvent&&document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",arguments.callee),e())})}()}();
//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r=Array.prototype,e=Object.prototype,u=Function.prototype,i=r.push,a=r.slice,o=r.concat,l=e.toString,c=e.hasOwnProperty,f=Array.isArray,s=Object.keys,p=u.bind,h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=h),exports._=h):n._=h,h.VERSION="1.7.0";var g=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}};h.iteratee=function(n,t,r){return null==n?h.identity:h.isFunction(n)?g(n,t,r):h.isObject(n)?h.matches(n):h.property(n)},h.each=h.forEach=function(n,t,r){if(null==n)return n;t=g(t,r);var e,u=n.length;if(u===+u)for(e=0;u>e;e++)t(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,t,r){if(null==n)return[];t=h.iteratee(t,r);for(var e,u=n.length!==+n.length&&h.keys(n),i=(u||n).length,a=Array(i),o=0;i>o;o++)e=u?u[o]:o,a[o]=t(n[e],e,n);return a};var v="Reduce of empty array with no initial value";h.reduce=h.foldl=h.inject=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length,o=0;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[o++]:o++]}for(;a>o;o++)u=i?i[o]:o,r=t(r,n[u],u,n);return r},h.reduceRight=h.foldr=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[--a]:--a]}for(;a--;)u=i?i[a]:a,r=t(r,n[u],u,n);return r},h.find=h.detect=function(n,t,r){var e;return t=h.iteratee(t,r),h.some(n,function(n,r,u){return t(n,r,u)?(e=n,!0):void 0}),e},h.filter=h.select=function(n,t,r){var e=[];return null==n?e:(t=h.iteratee(t,r),h.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e)},h.reject=function(n,t,r){return h.filter(n,h.negate(h.iteratee(t)),r)},h.every=h.all=function(n,t,r){if(null==n)return!0;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,!t(n[u],u,n))return!1;return!0},h.some=h.any=function(n,t,r){if(null==n)return!1;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,t(n[u],u,n))return!0;return!1},h.contains=h.include=function(n,t){return null==n?!1:(n.length!==+n.length&&(n=h.values(n)),h.indexOf(n,t)>=0)},h.invoke=function(n,t){var r=a.call(arguments,2),e=h.isFunction(t);return h.map(n,function(n){return(e?t:n[t]).apply(n,r)})},h.pluck=function(n,t){return h.map(n,h.property(t))},h.where=function(n,t){return h.filter(n,h.matches(t))},h.findWhere=function(n,t){return h.find(n,h.matches(t))},h.max=function(n,t,r){var e,u,i=-1/0,a=-1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],e>i&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(u>a||u===-1/0&&i===-1/0)&&(i=n,a=u)});return i},h.min=function(n,t,r){var e,u,i=1/0,a=1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],i>e&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(a>u||1/0===u&&1/0===i)&&(i=n,a=u)});return i},h.shuffle=function(n){for(var t,r=n&&n.length===+n.length?n:h.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=h.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},h.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=h.values(n)),n[h.random(n.length-1)]):h.shuffle(n).slice(0,Math.max(0,t))},h.sortBy=function(n,t,r){return t=h.iteratee(t,r),h.pluck(h.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var m=function(n){return function(t,r,e){var u={};return r=h.iteratee(r,e),h.each(t,function(e,i){var a=r(e,i,t);n(u,e,a)}),u}};h.groupBy=m(function(n,t,r){h.has(n,r)?n[r].push(t):n[r]=[t]}),h.indexBy=m(function(n,t,r){n[r]=t}),h.countBy=m(function(n,t,r){h.has(n,r)?n[r]++:n[r]=1}),h.sortedIndex=function(n,t,r,e){r=h.iteratee(r,e,1);for(var u=r(t),i=0,a=n.length;a>i;){var o=i+a>>>1;r(n[o])<u?i=o+1:a=o}return i},h.toArray=function(n){return n?h.isArray(n)?a.call(n):n.length===+n.length?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:n.length===+n.length?n.length:h.keys(n).length},h.partition=function(n,t,r){t=h.iteratee(t,r);var e=[],u=[];return h.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},h.first=h.head=h.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:a.call(n,0,t)},h.initial=function(n,t,r){return a.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},h.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:a.call(n,Math.max(n.length-t,0))},h.rest=h.tail=h.drop=function(n,t,r){return a.call(n,null==t||r?1:t)},h.compact=function(n){return h.filter(n,h.identity)};var y=function(n,t,r,e){if(t&&h.every(n,h.isArray))return o.apply(e,n);for(var u=0,a=n.length;a>u;u++){var l=n[u];h.isArray(l)||h.isArguments(l)?t?i.apply(e,l):y(l,t,r,e):r||e.push(l)}return e};h.flatten=function(n,t){return y(n,t,!1,[])},h.without=function(n){return h.difference(n,a.call(arguments,1))},h.uniq=h.unique=function(n,t,r,e){if(null==n)return[];h.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=h.iteratee(r,e));for(var u=[],i=[],a=0,o=n.length;o>a;a++){var l=n[a];if(t)a&&i===l||u.push(l),i=l;else if(r){var c=r(l,a,n);h.indexOf(i,c)<0&&(i.push(c),u.push(l))}else h.indexOf(u,l)<0&&u.push(l)}return u},h.union=function(){return h.uniq(y(arguments,!0,!0,[]))},h.intersection=function(n){if(null==n)return[];for(var t=[],r=arguments.length,e=0,u=n.length;u>e;e++){var i=n[e];if(!h.contains(t,i)){for(var a=1;r>a&&h.contains(arguments[a],i);a++);a===r&&t.push(i)}}return t},h.difference=function(n){var t=y(a.call(arguments,1),!0,!0,[]);return h.filter(n,function(n){return!h.contains(t,n)})},h.zip=function(n){if(null==n)return[];for(var t=h.max(arguments,"length").length,r=Array(t),e=0;t>e;e++)r[e]=h.pluck(arguments,e);return r},h.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},h.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=h.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}for(;u>e;e++)if(n[e]===t)return e;return-1},h.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=n.length;for("number"==typeof r&&(e=0>r?e+r+1:Math.min(e,r+1));--e>=0;)if(n[e]===t)return e;return-1},h.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var d=function(){};h.bind=function(n,t){var r,e;if(p&&n.bind===p)return p.apply(n,a.call(arguments,1));if(!h.isFunction(n))throw new TypeError("Bind must be called on a function");return r=a.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(a.call(arguments)));d.prototype=n.prototype;var u=new d;d.prototype=null;var i=n.apply(u,r.concat(a.call(arguments)));return h.isObject(i)?i:u}},h.partial=function(n){var t=a.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===h&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},h.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=h.bind(n[r],n);return n},h.memoize=function(n,t){var r=function(e){var u=r.cache,i=t?t.apply(this,arguments):e;return h.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},h.delay=function(n,t){var r=a.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},h.defer=function(n){return h.delay.apply(h,[n,1].concat(a.call(arguments,1)))},h.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var l=function(){o=r.leading===!1?0:h.now(),a=null,i=n.apply(e,u),a||(e=u=null)};return function(){var c=h.now();o||r.leading!==!1||(o=c);var f=t-(c-o);return e=this,u=arguments,0>=f||f>t?(clearTimeout(a),a=null,o=c,i=n.apply(e,u),a||(e=u=null)):a||r.trailing===!1||(a=setTimeout(l,f)),i}},h.debounce=function(n,t,r){var e,u,i,a,o,l=function(){var c=h.now()-a;t>c&&c>0?e=setTimeout(l,t-c):(e=null,r||(o=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,a=h.now();var c=r&&!e;return e||(e=setTimeout(l,t)),c&&(o=n.apply(i,u),i=u=null),o}},h.wrap=function(n,t){return h.partial(t,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},h.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},h.before=function(n,t){var r;return function(){return--n>0?r=t.apply(this,arguments):t=null,r}},h.once=h.partial(h.before,2),h.keys=function(n){if(!h.isObject(n))return[];if(s)return s(n);var t=[];for(var r in n)h.has(n,r)&&t.push(r);return t},h.values=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},h.pairs=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},h.invert=function(n){for(var t={},r=h.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},h.functions=h.methods=function(n){var t=[];for(var r in n)h.isFunction(n[r])&&t.push(r);return t.sort()},h.extend=function(n){if(!h.isObject(n))return n;for(var t,r,e=1,u=arguments.length;u>e;e++){t=arguments[e];for(r in t)c.call(t,r)&&(n[r]=t[r])}return n},h.pick=function(n,t,r){var e,u={};if(null==n)return u;if(h.isFunction(t)){t=g(t,r);for(e in n){var i=n[e];t(i,e,n)&&(u[e]=i)}}else{var l=o.apply([],a.call(arguments,1));n=new Object(n);for(var c=0,f=l.length;f>c;c++)e=l[c],e in n&&(u[e]=n[e])}return u},h.omit=function(n,t,r){if(h.isFunction(t))t=h.negate(t);else{var e=h.map(o.apply([],a.call(arguments,1)),String);t=function(n,t){return!h.contains(e,t)}}return h.pick(n,t,r)},h.defaults=function(n){if(!h.isObject(n))return n;for(var t=1,r=arguments.length;r>t;t++){var e=arguments[t];for(var u in e)n[u]===void 0&&(n[u]=e[u])}return n},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,t){return t(n),n};var b=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof h&&(n=n._wrapped),t instanceof h&&(t=t._wrapped);var u=l.call(n);if(u!==l.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]===n)return e[i]===t;var a=n.constructor,o=t.constructor;if(a!==o&&"constructor"in n&&"constructor"in t&&!(h.isFunction(a)&&a instanceof a&&h.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c,f;if("[object Array]"===u){if(c=n.length,f=c===t.length)for(;c--&&(f=b(n[c],t[c],r,e)););}else{var s,p=h.keys(n);if(c=p.length,f=h.keys(t).length===c)for(;c--&&(s=p[c],f=h.has(t,s)&&b(n[s],t[s],r,e)););}return r.pop(),e.pop(),f};h.isEqual=function(n,t){return b(n,t,[],[])},h.isEmpty=function(n){if(null==n)return!0;if(h.isArray(n)||h.isString(n)||h.isArguments(n))return 0===n.length;for(var t in n)if(h.has(n,t))return!1;return!0},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=f||function(n){return"[object Array]"===l.call(n)},h.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp"],function(n){h["is"+n]=function(t){return l.call(t)==="[object "+n+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return h.has(n,"callee")}),"function"!=typeof/./&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&n!==+n},h.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===l.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return n===void 0},h.has=function(n,t){return null!=n&&c.call(n,t)},h.noConflict=function(){return n._=t,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(n){return function(t){return t[n]}},h.matches=function(n){var t=h.pairs(n),r=t.length;return function(n){if(null==n)return!r;n=new Object(n);for(var e=0;r>e;e++){var u=t[e],i=u[0];if(u[1]!==n[i]||!(i in n))return!1}return!0}},h.times=function(n,t,r){var e=Array(Math.max(0,n));t=g(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},h.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var _={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},w=h.invert(_),j=function(n){var t=function(t){return n[t]},r="(?:"+h.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=j(_),h.unescape=j(w),h.result=function(n,t){if(null==n)return void 0;var r=n[t];return h.isFunction(r)?n[t]():r};var x=0;h.uniqueId=function(n){var t=++x+"";return n?n+t:t},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var A=/(.)^/,k={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},O=/\\|'|\r|\n|\u2028|\u2029/g,F=function(n){return"\\"+k[n]};h.template=function(n,t,r){!t&&r&&(t=r),t=h.defaults({},t,h.templateSettings);var e=RegExp([(t.escape||A).source,(t.interpolate||A).source,(t.evaluate||A).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,a,o){return i+=n.slice(u,o).replace(O,F),u=o+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":a&&(i+="';\n"+a+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=new Function(t.variable||"obj","_",i)}catch(o){throw o.source=i,o}var l=function(n){return a.call(this,n,h)},c=t.variable||"obj";return l.source="function("+c+"){\n"+i+"}",l},h.chain=function(n){var t=h(n);return t._chain=!0,t};var E=function(n){return this._chain?h(n).chain():n};h.mixin=function(n){h.each(h.functions(n),function(t){var r=h[t]=n[t];h.prototype[t]=function(){var n=[this._wrapped];return i.apply(n,arguments),E.call(this,r.apply(h,n))}})},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=r[n];h.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],E.call(this,r)}}),h.each(["concat","join","slice"],function(n){var t=r[n];h.prototype[n]=function(){return E.call(this,t.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}).call(this);
//# sourceMappingURL=underscore-min.map
//     Backbone.js 1.1.2

//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(root, factory) {

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    factory(root, exports, _);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(this, function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create local references to array methods we'll want to use later.
  var array = [];
  var push = array.push;
  var slice = array.slice;
  var splice = array.splice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.1.2';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function(name, callback, context) {
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({callback: callback, context: context, ctx: context || this});
      return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function(name, callback, context) {
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
      var self = this;
      var once = _.once(function() {
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function(name, callback, context) {
      var retain, ev, events, names, i, l, j, k;
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
      if (!name && !callback && !context) {
        this._events = void 0;
        return this;
      }
      names = name ? [name] : _.keys(this._events);
      for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (events = this._events[name]) {
          this._events[name] = retain = [];
          if (callback || context) {
            for (j = 0, k = events.length; j < k; j++) {
              ev = events[j];
              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                  (context && context !== ev.context)) {
                retain.push(ev);
              }
            }
          }
          if (!retain.length) delete this._events[name];
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(name) {
      if (!this._events) return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function(obj, name, callback) {
      var listeningTo = this._listeningTo;
      if (!listeningTo) return this;
      var remove = !name && !callback;
      if (!callback && typeof name === 'object') callback = this;
      if (obj) (listeningTo = {})[obj._listenId] = obj;
      for (var id in listeningTo) {
        obj = listeningTo[id];
        obj.off(name, callback, this);
        if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
      }
      return this;
    }

  };

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function(obj, action, name, rest) {
    if (!name) return true;

    // Handle event maps.
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
      return false;
    }

    return true;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  _.each(listenMethods, function(implementation, method) {
    Events[method] = function(obj, name, callback) {
      var listeningTo = this._listeningTo || (this._listeningTo = {});
      var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
      listeningTo[id] = obj;
      if (!callback && typeof name === 'object') callback = this;
      obj[implementation](name, callback, this);
      return this;
    };
  });

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId('c');
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      unset           = options.unset;
      silent          = options.silent;
      changes         = [];
      changing        = this._changing;
      this._changing  = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }
      current = this.attributes, prev = this._previousAttributes;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // For each `set` attribute, update or delete the current value.
      for (attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          this.changed[attr] = val;
        } else {
          delete this.changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0, l = changes.length; i < l; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overridden,
    // triggering a `"change"` event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        if (!model.set(model.parse(resp, options), options)) return false;
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      var attrs, method, xhr, attributes = this.attributes;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true}, options);

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !options.wait) {
        if (!this.set(attrs, options)) return false;
      } else {
        if (!this._validate(attrs, options)) return false;
      }

      // Set temporary attributes if `{wait: true}`.
      if (attrs && options.wait) {
        this.attributes = _.extend({}, attributes, attrs);
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = model.parse(resp, options);
        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
          return false;
        }
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch') options.attrs = attrs;
      xhr = this.sync(method, this, options);

      // Restore attributes.
      if (attrs && options.wait) this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;

      var destroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (options.wait || model.isNew()) destroy();
        if (success) success(model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      if (this.isNew()) {
        options.success();
        return false;
      }
      wrapError(this, options);

      var xhr = this.sync('delete', this, options);
      if (!options.wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.extend(options || {}, { validate: true }));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model.
  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  _.each(modelMethods, function(method) {
    Model.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.attributes);
      return _[method].apply(_, args);
    };
  });

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analagous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      var singular = !_.isArray(models);
      models = singular ? [models] : _.clone(models);
      options || (options = {});
      var i, l, index, model;
      for (i = 0, l = models.length; i < l; i++) {
        model = models[i] = this.get(models[i]);
        if (!model) continue;
        delete this._byId[model.id];
        delete this._byId[model.cid];
        index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model, options);
      }
      return singular ? models[0] : models;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      options = _.defaults({}, options, setOptions);
      if (options.parse) models = this.parse(models, options);
      var singular = !_.isArray(models);
      models = singular ? (models ? [models] : []) : _.clone(models);
      var i, l, id, model, attrs, existing, sort;
      var at = options.at;
      var targetModel = this.model;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
      var toAdd = [], toRemove = [], modelMap = {};
      var add = options.add, merge = options.merge, remove = options.remove;
      var order = !sortable && add && remove ? [] : false;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      for (i = 0, l = models.length; i < l; i++) {
        attrs = models[i] || {};
        if (attrs instanceof Model) {
          id = model = attrs;
        } else {
          id = attrs[targetModel.prototype.idAttribute || 'id'];
        }

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        if (existing = this.get(id)) {
          if (remove) modelMap[existing.cid] = true;
          if (merge) {
            attrs = attrs === model ? model.attributes : attrs;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(attrs, options);
          if (!model) continue;
          toAdd.push(model);
          this._addReference(model, options);
        }

        // Do not add multiple models with the same `id`.
        model = existing || model;
        if (order && (model.isNew() || !modelMap[model.id])) order.push(model);
        modelMap[model.id] = true;
      }

      // Remove nonexistent models if appropriate.
      if (remove) {
        for (i = 0, l = this.length; i < l; ++i) {
          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
        }
        if (toRemove.length) this.remove(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      if (toAdd.length || (order && order.length)) {
        if (sortable) sort = true;
        this.length += toAdd.length;
        if (at != null) {
          for (i = 0, l = toAdd.length; i < l; i++) {
            this.models.splice(at + i, 0, toAdd[i]);
          }
        } else {
          if (order) this.models.length = 0;
          var orderedModels = order || toAdd;
          for (i = 0, l = orderedModels.length; i < l; i++) {
            this.models.push(orderedModels[i]);
          }
        }
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        for (i = 0, l = toAdd.length; i < l; i++) {
          (model = toAdd[i]).trigger('add', model, this, options);
        }
        if (sort || (order && order.length)) this.trigger('sort', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options || (options = {});
      for (var i = 0, l = this.models.length; i < l; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      if (_.isEmpty(attrs)) return first ? void 0 : [];
      return this[first ? 'find' : 'filter'](function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key)) return false;
        }
        return true;
      });
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      // Run sort based on type of `comparator`.
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success(collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      if (!(model = this._prepareModel(model, options))) return false;
      if (!options.wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp) {
        if (options.wait) collection.add(model, options);
        if (success) success(model, resp, options);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models);
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (attrs instanceof Model) return attrs;
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      if (model.id != null) this._byId[model.id] = model;
      if (!model.collection) model.collection = this;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        if (model.id != null) this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
    'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
    'lastIndexOf', 'isEmpty', 'chain', 'sample'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    Collection.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.models);
      return _[method].apply(_, args);
    };
  });

  // Underscore methods that take a property name as an argument.
  var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

  // Use attributes instead of properties.
  _.each(attributeMethods, function(method) {
    Collection.prototype[method] = function(value, context) {
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _[method](this.models, iterator, context);
    };
  });

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    options || (options = {});
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this.$el.remove();
      this.stopListening();
      return this;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    setElement: function(element, delegate) {
      if (this.$el) this.undelegateEvents();
      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
      this.el = this.$el[0];
      if (delegate !== false) this.delegateEvents();
      return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events')))) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) continue;

        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          this.$el.on(eventName, method);
        } else {
          this.$el.on(eventName, selector, method);
        }
      }
      return this;
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
        this.setElement($el, false);
      } else {
        this.setElement(_.result(this, 'el'), false);
      }
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
    // that still has ActiveX enabled by default, override jQuery to use that
    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
    if (params.type === 'PATCH' && noXhrPatch) {
      params.xhr = function() {
        return new ActiveXObject("Microsoft.XMLHTTP");
      };
    }

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  var noXhrPatch =
    typeof window !== 'undefined' && !!window.ActiveXObject &&
      !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        router.execute(callback, args);
        router.trigger.apply(router, ['route:' + name].concat(args));
        router.trigger('route', name, args);
        Backbone.history.trigger('route', router, name, args);
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Cached regex for removing a trailing slash.
  var trailingSlash = /\/$/;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = decodeURI(this.location.pathname + this.location.search);
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      if (oldIE && this._wantsHashChange) {
        var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
        this.iframe = frame.hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        Backbone.$(window).on('popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        Backbone.$(window).on('hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = this.location;

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          this.fragment = this.getFragment(null, true);
          this.location.replace(this.root + '#' + this.fragment);
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot() && loc.hash) {
          this.fragment = this.getHash().replace(routeStripper, '');
          this.history.replaceState({}, document.title, this.root + this.fragment);
        }

      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      fragment = this.fragment = this.getFragment(fragment);
      return _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      var url = this.root + (fragment = this.getFragment(fragment || ''));

      // Strip the hash for matching.
      fragment = fragment.replace(pathStripper, '');

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // Don't include a trailing slash on the root.
      if (fragment === '' && url !== '/') url = url.slice(0, -1);

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error(model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;

}));

/*! VelocityJS.org (1.0.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(e){function t(e){var t=e.length,r=$.type(e);return"function"===r||$.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===r||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var $=function(e,t){return new $.fn.init(e,t)};$.isWindow=function(e){return null!=e&&e==e.window},$.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?a[o.call(e)]||"object":typeof e},$.isArray=Array.isArray||function(e){return"array"===$.type(e)},$.isPlainObject=function(e){var t;if(!e||"object"!==$.type(e)||e.nodeType||$.isWindow(e))return!1;try{if(e.constructor&&!n.call(e,"constructor")&&!n.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}for(t in e);return void 0===t||n.call(e,t)},$.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},$.data=function(e,t,a){if(void 0===a){var n=e[$.expando],o=n&&r[n];if(void 0===t)return o;if(o&&t in o)return o[t]}else if(void 0!==t){var n=e[$.expando]||(e[$.expando]=++$.uuid);return r[n]=r[n]||{},r[n][t]=a,a}},$.removeData=function(e,t){var a=e[$.expando],n=a&&r[a];n&&$.each(t,function(e,t){delete n[t]})},$.extend=function(){var e,t,r,a,n,o,i=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof i&&(u=i,i=arguments[s]||{},s++),"object"!=typeof i&&"function"!==$.type(i)&&(i={}),s===l&&(i=this,s--);l>s;s++)if(null!=(n=arguments[s]))for(a in n)e=i[a],r=n[a],i!==r&&(u&&r&&($.isPlainObject(r)||(t=$.isArray(r)))?(t?(t=!1,o=e&&$.isArray(e)?e:[]):o=e&&$.isPlainObject(e)?e:{},i[a]=$.extend(u,o,r)):void 0!==r&&(i[a]=r));return i},$.queue=function(e,r,a){function n(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){r=(r||"fx")+"queue";var o=$.data(e,r);return a?(!o||$.isArray(a)?o=$.data(e,r,n(a)):o.push(a),o):o||[]}},$.dequeue=function(e,t){$.each(e.nodeType?[e]:e,function(e,r){t=t||"fx";var a=$.queue(r,t),n=a.shift();"inprogress"===n&&(n=a.shift()),n&&("fx"===t&&a.unshift("inprogress"),n.call(r,function(){$.dequeue(r,t)}))})},$.fn=$.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),r=this.offset(),a=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:$(e).offset();return r.top-=parseFloat(t.style.marginTop)||0,r.left-=parseFloat(t.style.marginLeft)||0,e.style&&(a.top+=parseFloat(e.style.borderTopWidth)||0,a.left+=parseFloat(e.style.borderLeftWidth)||0),{top:r.top-a.top,left:r.left-a.left}}};var r={};$.expando="velocity"+(new Date).getTime(),$.uuid=0;for(var a={},n=a.hasOwnProperty,o=a.toString,i="Boolean Number String Function Array Date RegExp Object Error".split(" "),s=0;s<i.length;s++)a["[object "+i[s]+"]"]=i[s].toLowerCase();$.fn.init.prototype=$.fn,e.Velocity={Utilities:$}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return g.isWrapped(e)?e=[].slice.call(e):g.isNode(e)&&(e=[e]),e}function i(e){var t=$.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return g.isString(e)?v.Easings[e]||(r=!1):r=g.isArray(e)&&1===e.length?s.apply(null,e):g.isArray(e)&&2===e.length?b.apply(null,e.concat([t])):g.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=v.Easings[v.defaults.easing]?v.defaults.easing:h),r}function c(e){if(e)for(var t=(new Date).getTime(),r=0,n=v.State.calls.length;n>r;r++)if(v.State.calls[r]){var o=v.State.calls[r],s=o[0],l=o[2],u=o[3],f=!!u;u||(u=v.State.calls[r][3]=t-16);for(var d=Math.min((t-u)/l.duration,1),m=0,y=s.length;y>m;m++){var h=s[m],b=h.element;if(i(b)){var S=!1;if(l.display!==a&&null!==l.display&&"none"!==l.display){if("flex"===l.display){var w=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];$.each(w,function(e,t){x.setPropertyValue(b,"display",t)})}x.setPropertyValue(b,"display",l.display)}l.visibility!==a&&"hidden"!==l.visibility&&x.setPropertyValue(b,"visibility",l.visibility);for(var V in h)if("element"!==V){var C=h[V],T,k=g.isString(C.easing)?v.Easings[C.easing]:C.easing;if(1===d)T=C.endValue;else if(T=C.startValue+(C.endValue-C.startValue)*k(d),!f&&T===C.currentValue)continue;if(C.currentValue=T,x.Hooks.registered[V]){var A=x.Hooks.getRoot(V),F=i(b).rootPropertyValueCache[A];F&&(C.rootPropertyValue=F)}var E=x.setPropertyValue(b,V,C.currentValue+(0===parseFloat(T)?"":C.unitType),C.rootPropertyValue,C.scrollData);x.Hooks.registered[V]&&(i(b).rootPropertyValueCache[A]=x.Normalizations.registered[A]?x.Normalizations.registered[A]("extract",null,E[1]):E[1]),"transform"===E[0]&&(S=!0)}l.mobileHA&&i(b).transformCache.translate3d===a&&(i(b).transformCache.translate3d="(0px, 0px, 0px)",S=!0),S&&x.flushTransformCache(b)}}l.display!==a&&"none"!==l.display&&(v.State.calls[r][2].display=!1),l.visibility!==a&&"hidden"!==l.visibility&&(v.State.calls[r][2].visibility=!1),l.progress&&l.progress.call(o[1],o[1],d,Math.max(0,u+l.duration-t),u),1===d&&p(r)}v.State.isTicking&&P(c)}function p(e,t){if(!v.State.calls[e])return!1;for(var r=v.State.calls[e][0],n=v.State.calls[e][1],o=v.State.calls[e][2],s=v.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&x.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&x.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&($.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test($.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var f=!1;$.each(x.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(f=!0,delete i(p).transformCache[t])}),o.mobileHA&&(f=!0,delete i(p).transformCache.translate3d),f&&x.flushTransformCache(p),x.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(d){setTimeout(function(){throw d},1)}s&&o.loop!==!0&&s(n),o.loop!==!0||t||($.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360)}),v(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&$.dequeue(p,o.queue)}v.State.calls[e]=!1;for(var g=0,m=v.State.calls.length;m>g;g++)if(v.State.calls[g]!==!1){l=!0;break}l===!1&&(v.State.isTicking=!1,delete v.State.calls,v.State.calls=[])}var f=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),d=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r=(new Date).getTime(),a;return a=Math.max(0,16-(r-e)),e=r+a,setTimeout(function(){t(r+a)},a)}}(),g={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},$,m=!1;if(e.fn&&e.fn.jquery?($=e,m=!0):$=t.Velocity.Utilities,8>=f&&!m)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=f)return void(jQuery.fn.velocity=jQuery.fn.animate);var y=400,h="swing",v={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:$,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:y,easing:h,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){$.data(e,"velocity",{isSVG:g.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:1,patch:0},debug:!1};t.pageYOffset!==a?(v.State.scrollAnchor=t,v.State.scrollPropertyLeft="pageXOffset",v.State.scrollPropertyTop="pageYOffset"):(v.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,v.State.scrollPropertyLeft="scrollLeft",v.State.scrollPropertyTop="scrollTop");var b=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o={x:-1,v:0,tension:null,friction:null},i=[0],s=0,l=1e-4,u=.016,c,p,f;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,o.tension=e,o.friction=t,c=null!==n,c?(s=a(e,t),p=s/n*u):p=u;;)if(f=r(f||o,p),i.push(1+f.x),s+=16,!(Math.abs(f.x)>l&&Math.abs(f.v)>l))break;return c?function(e){return i[e*(i.length-1)|0]}:s}}();v.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},$.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){v.Easings[t[0]]=l.apply(null,t[1])});var x=v.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<x.Lists.colors.length;e++){var t="color"===x.Lists.colors[e]?"0 0 0 1":"255 255 255 1";x.Hooks.templates[x.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(f)for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(x.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),x.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;x.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=x.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return x.RegEx.valueUnwrap.test(t)&&(t=t.match(x.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(t)&&(t=x.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=x.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=x.Hooks.cleanRootPropertyValue(a,t),t.toString().match(x.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=x.Hooks.registered[e];if(a){var n=a[0],o=a[1],i,s;return r=x.Hooks.cleanRootPropertyValue(n,r),i=r.toString().match(x.RegEx.valueSplit),i[o]=t,s=i.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return x.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(x.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=f)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=f||v.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var e=0;e<x.Lists.transformsBase.length;e++)!function(){var t=x.Lists.transformsBase[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":v.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<x.Lists.colors.length;e++)!function(){var t=x.Lists.colors[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(x.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:x.RegEx.isHex.test(n)?i="rgb("+x.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=f||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=f?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=f?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(f||v.State.isAndroid&&!v.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(v.State.prefixMatches[e])return[v.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),g.isString(v.State.prefixElement.style[n]))return v.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,a;return e=e.replace(t,function(e,t,r,a){return t+t+r+r+a+a}),a=r.exec(e),a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&x.setPropertyValue(e,"display","none")}var l=0;if(8>=f)l=$.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===x.getPropertyValue(e,"display")&&(u=!0,x.setPropertyValue(e,"display",x.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(x.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(x.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var d;d=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),(f||v.State.isFirefox)&&"borderColor"===r&&(r="borderTopColor"),l=9===f&&"filter"===r?d.getPropertyValue(r):d[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var g=s(e,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(r))&&(l=$(e).position()[r]+"px")}return l}var l;if(x.Hooks.registered[r]){var u=r,c=x.Hooks.getRoot(u);n===a&&(n=x.getPropertyValue(e,x.Names.prefixCheck(c)[0])),x.Normalizations.registered[c]&&(n=x.Normalizations.registered[c]("extract",e,n)),l=x.Hooks.extractValue(u,n)}else if(x.Normalizations.registered[r]){var p,d;p=x.Normalizations.registered[r]("name",e),"transform"!==p&&(d=s(e,x.Names.prefixCheck(p)[0]),x.Values.isCSSNullValue(d)&&x.Hooks.templates[r]&&(d=x.Hooks.templates[r][1])),l=x.Normalizations.registered[r]("extract",e,d)}return/^[\d-]/.test(l)||(l=i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r)?/^(height|width)$/i.test(r)?e.getBBox()[r]:e.getAttribute(r):s(e,x.Names.prefixCheck(r)[0])),x.Values.isCSSNullValue(l)&&(l=0),v.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(x.Normalizations.registered[r]&&"transform"===x.Normalizations.registered[r]("name",e))x.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(x.Hooks.registered[r]){var l=r,u=x.Hooks.getRoot(r);n=n||x.getPropertyValue(e,u),a=x.Hooks.injectValue(l,a,n),r=u}if(x.Normalizations.registered[r]&&(a=x.Normalizations.registered[r]("inject",e,a),r=x.Normalizations.registered[r]("name",e)),s=x.Names.prefixCheck(r)[0],8>=f)try{e.style[s]=a}catch(c){v.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;v.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(x.getPropertyValue(e,t))}var r="";if((f||v.State.isAndroid&&!v.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};$.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;$.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===f&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}x.setPropertyValue(e,"transform",r)}};x.Hooks.register(),x.Normalizations.register(),v.hook=function(e,t,r){var n=a;return e=o(e),$.each(e,function(e,o){if(i(o)===a&&v.init(o),r===a)n===a&&(n=v.CSS.getPropertyValue(o,t));else{var s=v.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&v.CSS.flushTransformCache(o),n=s}}),n};var S=function(){function e(){return f?k.promise||null:d}function s(){function e(e){function f(e,t){var r=a,n=a,i=a;return g.isArray(e)?(r=e[0],!g.isArray(e[1])&&/^[\d-]/.test(e[1])||g.isFunction(e[1])||x.RegEx.isHex.test(e[1])?i=e[1]:(g.isString(e[1])&&!x.RegEx.isHex.test(e[1])||g.isArray(e[1]))&&(n=t?e[1]:u(e[1],s.duration),e[2]!==a&&(i=e[2]))):r=e,t||(n=n||s.easing),g.isFunction(r)&&(r=r.call(o,V,w)),g.isFunction(i)&&(i=i.call(o,V,w)),[r||0,n,i]}function d(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=x.Values.getUnitType(e)),[a,r]}function m(){var e={myParent:o.parentNode||r.body,position:x.getPropertyValue(o,"position"),fontSize:x.getPropertyValue(o,"fontSize")},a=e.position===L.lastPosition&&e.myParent===L.lastParent,n=e.fontSize===L.lastFontSize;L.lastParent=e.myParent,L.lastPosition=e.position,L.lastFontSize=e.fontSize;var s=100,l={};if(n&&a)l.emToPx=L.lastEmToPx,l.percentToPxWidth=L.lastPercentToPxWidth,l.percentToPxHeight=L.lastPercentToPxHeight;else{var u=i(o).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");v.init(u),e.myParent.appendChild(u),$.each(["overflow","overflowX","overflowY"],function(e,t){v.CSS.setPropertyValue(u,t,"hidden")}),v.CSS.setPropertyValue(u,"position",e.position),v.CSS.setPropertyValue(u,"fontSize",e.fontSize),v.CSS.setPropertyValue(u,"boxSizing","content-box"),$.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){v.CSS.setPropertyValue(u,t,s+"%")}),v.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=L.lastEmToPx=(parseFloat(x.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===L.remToPx&&(L.remToPx=parseFloat(x.getPropertyValue(r.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(t.innerWidth)/100,L.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=L.remToPx,l.vwToPx=L.vwToPx,l.vhToPx=L.vhToPx,v.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),o),l}if(s.begin&&0===V)try{s.begin.call(h,h)}catch(y){setTimeout(function(){throw y},1)}if("scroll"===A){var S=/^x$/i.test(s.axis)?"Left":"Top",C=parseFloat(s.offset)||0,T,F,E;s.container?g.isWrapped(s.container)||g.isNode(s.container)?(s.container=s.container[0]||s.container,T=s.container["scroll"+S],E=T+$(o).position()[S.toLowerCase()]+C):s.container=null:(T=v.State.scrollAnchor[v.State["scrollProperty"+S]],F=v.State.scrollAnchor[v.State["scrollProperty"+("Left"===S?"Top":"Left")]],E=$(o).offset()[S.toLowerCase()]+C),l={scroll:{rootPropertyValue:!1,startValue:T,currentValue:T,endValue:E,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:S,alternateValue:F}},element:o},v.debug&&console.log("tweensContainer (scroll): ",l.scroll,o)}else if("reverse"===A){if(!i(o).tweensContainer)return void $.dequeue(o,s.queue);"none"===i(o).opts.display&&(i(o).opts.display="auto"),"hidden"===i(o).opts.visibility&&(i(o).opts.visibility="visible"),i(o).opts.loop=!1,i(o).opts.begin=null,i(o).opts.complete=null,P.easing||delete s.easing,P.duration||delete s.duration,s=$.extend({},i(o).opts,s);var j=$.extend(!0,{},i(o).tweensContainer);for(var H in j)if("element"!==H){var N=j[H].startValue;j[H].startValue=j[H].currentValue=j[H].endValue,j[H].endValue=N,g.isEmptyObject(P)||(j[H].easing=s.easing),v.debug&&console.log("reverse tweensContainer ("+H+"): "+JSON.stringify(j[H]),o)}l=j}else if("start"===A){var j;i(o).tweensContainer&&i(o).isAnimating===!0&&(j=i(o).tweensContainer),$.each(b,function(e,t){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(e)){var r=f(t,!0),n=r[0],o=r[1],i=r[2];if(x.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=x.Values.hexToRgb(n),u=i?x.Values.hexToRgb(i):a,c=0;c<s.length;c++){var p=[l[c]];o&&p.push(o),u!==a&&p.push(u[c]),b[e+s[c]]=p}delete b[e]}}});for(var O in b){var z=f(b[O]),q=z[0],M=z[1],I=z[2];O=x.Names.camelCase(O);var B=x.Hooks.getRoot(O),W=!1;if(i(o).isSVG||x.Names.prefixCheck(B)[1]!==!1||x.Normalizations.registered[B]!==a){(s.display!==a&&null!==s.display&&"none"!==s.display||s.visibility!==a&&"hidden"!==s.visibility)&&/opacity|filter/.test(O)&&!I&&0!==q&&(I=0),s._cacheValues&&j&&j[O]?(I===a&&(I=j[O].endValue+j[O].unitType),W=i(o).rootPropertyValueCache[B]):x.Hooks.registered[O]?I===a?(W=x.getPropertyValue(o,B),I=x.getPropertyValue(o,O,W)):W=x.Hooks.templates[B][1]:I===a&&(I=x.getPropertyValue(o,O));var G,D,X,Y=!1;if(G=d(O,I),I=G[0],X=G[1],G=d(O,q),q=G[0].replace(/^([+-\/*])=/,function(e,t){return Y=t,""}),D=G[1],I=parseFloat(I)||0,q=parseFloat(q)||0,"%"===D&&(/^(fontSize|lineHeight)$/.test(O)?(q/=100,D="em"):/^scale/.test(O)?(q/=100,D=""):/(Red|Green|Blue)$/i.test(O)&&(q=q/100*255,D="")),/[\/*]/.test(Y))D=X;else if(X!==D&&0!==I)if(0===q)D=X;else{p=p||m();var Q=/margin|padding|left|right|width|text|word|letter/i.test(O)||/X$/.test(O)||"x"===O?"x":"y";switch(X){case"%":I*="x"===Q?p.percentToPxWidth:p.percentToPxHeight;break;case"px":break;default:I*=p[X+"ToPx"]}switch(D){case"%":I*=1/("x"===Q?p.percentToPxWidth:p.percentToPxHeight);break;case"px":break;default:I*=1/p[D+"ToPx"]}}switch(Y){case"+":q=I+q;break;case"-":q=I-q;break;case"*":q=I*q;break;case"/":q=I/q}l[O]={rootPropertyValue:W,startValue:I,currentValue:I,endValue:q,unitType:D,easing:M},v.debug&&console.log("tweensContainer ("+O+"): "+JSON.stringify(l[O]),o)}else v.debug&&console.log("Skipping ["+B+"] due to a lack of browser support.")}l.element=o}l.element&&(x.Values.addClass(o,"velocity-animating"),R.push(l),""===s.queue&&(i(o).tweensContainer=l,i(o).opts=s),i(o).isAnimating=!0,V===w-1?(v.State.calls.length>1e4&&(v.State.calls=n(v.State.calls)),v.State.calls.push([R,h,s,null,k.resolver]),v.State.isTicking===!1&&(v.State.isTicking=!0,c())):V++)}var o=this,s=$.extend({},v.defaults,P),l={},p;switch(i(o)===a&&v.init(o),parseFloat(s.delay)&&s.queue!==!1&&$.queue(o,s.queue,function(e){v.velocityQueueEntryFlag=!0,i(o).delayTimer={setTimeout:setTimeout(e,parseFloat(s.delay)),next:e}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=y;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}v.mock!==!1&&(v.mock===!0?s.duration=s.delay=1:(s.duration*=parseFloat(v.mock)||1,s.delay*=parseFloat(v.mock)||1)),s.easing=u(s.easing,s.duration),s.begin&&!g.isFunction(s.begin)&&(s.begin=null),s.progress&&!g.isFunction(s.progress)&&(s.progress=null),s.complete&&!g.isFunction(s.complete)&&(s.complete=null),s.display!==a&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=v.CSS.Values.getDisplayType(o))),s.visibility!==a&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&v.State.isMobile&&!v.State.isGingerbread,s.queue===!1?s.delay?setTimeout(e,s.delay):e():$.queue(o,s.queue,function(t,r){return r===!0?(k.promise&&k.resolver(h),!0):(v.velocityQueueEntryFlag=!0,void e(t))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===$.queue(o)[0]||$.dequeue(o)}var l=arguments[0]&&($.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||g.isString(arguments[0].properties)),f,d,m,h,b,P;if(g.isWrapped(this)?(f=!1,m=0,h=this,d=this):(f=!0,m=1,h=l?arguments[0].elements:arguments[0]),h=o(h)){l?(b=arguments[0].properties,P=arguments[0].options):(b=arguments[m],P=arguments[m+1]);var w=h.length,V=0;if("stop"!==b&&!$.isPlainObject(P)){var C=m+1;P={};for(var T=C;T<arguments.length;T++)g.isArray(arguments[T])||!/^(fast|normal|slow)$/i.test(arguments[T])&&!/^\d/.test(arguments[T])?g.isString(arguments[T])||g.isArray(arguments[T])?P.easing=arguments[T]:g.isFunction(arguments[T])&&(P.complete=arguments[T]):P.duration=arguments[T]}var k={promise:null,resolver:null,rejecter:null};f&&v.Promise&&(k.promise=new v.Promise(function(e,t){k.resolver=e,k.rejecter=t}));var A;switch(b){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"stop":$.each(h,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var F=[];return $.each(v.State.calls,function(e,t){t&&$.each(t[1],function(r,n){var o=g.isString(P)?P:"";return P!==a&&t[2].queue!==o?!0:void $.each(h,function(t,r){r===n&&(P!==a&&($.each($.queue(r,o),function(e,t){g.isFunction(t)&&t(null,!0)}),$.queue(r,o,[])),i(r)&&""===o&&$.each(i(r).tweensContainer,function(e,t){t.endValue=t.currentValue}),F.push(e))})})}),$.each(F,function(e,t){p(t,!0)}),k.promise&&k.resolver(h),e();default:if(!$.isPlainObject(b)||g.isEmptyObject(b)){if(g.isString(b)&&v.Redirects[b]){var E=$.extend({},P),j=E.duration,H=E.delay||0;return E.backwards===!0&&(h=$.extend(!0,[],h).reverse()),$.each(h,function(e,t){parseFloat(E.stagger)?E.delay=H+parseFloat(E.stagger)*e:g.isFunction(E.stagger)&&(E.delay=H+E.stagger.call(t,e,w)),E.drag&&(E.duration=parseFloat(j)||(/^(callout|transition)/.test(b)?1e3:y),E.duration=Math.max(E.duration*(E.backwards?1-e/w:(e+1)/w),.75*E.duration,200)),v.Redirects[b].call(t,t,E||{},e,w,h,k.promise?k:a)
}),e()}var N="Velocity: First argument ("+b+") was not a property map, a known action, or a registered redirect. Aborting.";return k.promise?k.rejecter(new Error(N)):console.log(N),e()}A="start"}var L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];$.each(h,function(e,t){g.isNode(t)&&s.call(t)});var E=$.extend({},v.defaults,P),O;if(E.loop=parseInt(E.loop),O=2*E.loop-1,E.loop)for(var z=0;O>z;z++){var q={delay:E.delay,progress:E.progress};z===O-1&&(q.display=E.display,q.visibility=E.visibility,q.complete=E.complete),S(h,"reverse",q)}return e()}};v=$.extend(S,v),v.animate=S;var P=t.requestAnimationFrame||d;return v.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(P=function(e){return setTimeout(function(){e(!0)},16)},c()):P=t.requestAnimationFrame||d}),e.Velocity=v,e!==t&&(e.fn.velocity=S,e.fn.velocity.defaults=v.defaults),$.each(["Down","Up"],function(e,t){v.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},f={};l.display===a&&(l.display="Down"===t?"inline"===v.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){f[r]=e.style[r];var a=v.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}f.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in f)e.style[t]=f[t];c&&c.call(i,i),s&&s.resolver(i)},v(e,p,l)}}),$.each(["In","Out"],function(e,t){v.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),v(this,u,l)}}),v}(window.jQuery||window.Zepto||window,window,document)});
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.multiline=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
module.exports = function (str) {
	var match = str.match(/^[ \t]*(?=\S)/gm);

	if (!match) {
		return str;
	}

	var indent = Math.min.apply(Math, match.map(function (el) {
		return el.length;
	}));

	var re = new RegExp('^[ \\t]{' + indent + '}', 'gm');

	return indent > 0 ? str.replace(re, '') : str;
};

},{}],2:[function(require,module,exports){
'use strict';
var stripIndent = require('strip-indent');

// start matching after: comment start block => ! or @preserve => optional whitespace => newline
// stop matching before: last newline => optional whitespace => comment end block
var reCommentContents = /\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)\s*\*\//;

var multiline = module.exports = function (fn) {
	if (typeof fn !== 'function') {
		throw new TypeError('Expected a function.');
	}

	var match = reCommentContents.exec(fn.toString());

	if (!match) {
		throw new TypeError('Multiline comment missing.');
	}

	return match[1];
};

multiline.stripIndent = function (fn) {
	return stripIndent(multiline(fn));
};

},{"strip-indent":1}]},{},[2])(2)
});
/* ===========================================================
 * jquery-wheelmenu.js v1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * A small jQuery plugin that adds a beautiful
 * Path-like menu button to your website
 * https://github.com/peachananr/wheel-menu
 *
 * ========================================================== */

!function($){
  
  var defaults = {
		trigger: "click",
		animation: "fade",
		angle: [0,360],
		animationSpeed: "medium"
	};
	
	$.fn.centerAround = function (button) {
    var offset = button.offset(),
        width = button.outerWidth(),
        height = button.outerHeight(),
        buttonX = (offset.left - $(document).scrollLeft() ) + width / 2,
        buttonY = (offset.top -  $(document).scrollTop() ) + height / 2,
        objectOffset = this.offset();
    this.css("position","fixed");
    this.css("top", buttonY  - (this.outerHeight() / 2)  + "px");
    this.css("left", buttonX - (this.outerWidth() / 2)   + "px");
    return this;
  }
  
  $.fn.flyIn = function (el, button, width, height, angle, step, radius, settings) {
    var d = 0;
    this.stop(true,true);
    this.each(function(index) {
      angle = (settings.angle[0] + (step * index)) * (Math.PI/180); 
      var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).find("a").outerWidth()/2),
          y = Math.round(height/2 + radius * Math.sin(angle) - $(this).find("a").outerHeight()/2);
      $(this).animateRotate(360).css({
          position: 'absolute',
          opacity: 0,
          left: "50%",
          top: "50%",
          marginLeft: "-" + $(this).outerWidth() / 2,
          marginTop: "-" + $(this).outerHeight() / 2
      }).delay(d).animate({
        opacity:1,
        left: x + 'px',
        top: y + 'px'
      }, settings.animationSpeed[1]);
      d += settings.animationSpeed[0];
    });
  }
  
  $.fn.flyOut = function (el, button) {
    var d = 0;
    this.stop(true,true);
    $(this.get().reverse()).each(function() {
	    $(this).animateRotate(-360).delay(d).animate({
	      opacity:0,
	      left: el.outerWidth() / 2 + "px",
        top: el.outerHeight() / 2 + "px"
	    }, 150);
      d += 15;
	  }).promise().done( function() {
      el.removeClass("active").css("visibility", "hidden").hide();
      button.removeClass("active")
    });
  }
  
  $.fn.fadeInIcon = function (el, button, width, height, angle, step, radius, settings) {
    var d = 0;
    this.stop(true,true);
    this.each(function(index) {
      angle = (settings.angle[0] + (step * index)) * (Math.PI/180); 
      var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).find("a").outerWidth()/2),
          y = Math.round(height/2 + radius * Math.sin(angle) - $(this).find("a").outerHeight()/2);
      $(this).css({
          position: 'absolute',
          left: x + 'px',
          top: y + 'px',
          opacity: 0
      }).delay(d).animate({opacity:1}, settings.animationSpeed[1]);
      
      d += settings.animationSpeed[0];
    });
  }
  
  $.fn.fadeOutIcon = function (el, button) {
    var d = 0;
    this.stop(true,true);
    
    $(this.get().reverse()).each(function() {
	    $(this).delay(d).animate({opacity:0}, 150);
      d += 15;
	  }).promise().done( function() {
      el.removeClass("active").css("visibility", "hidden").hide();
      button.removeClass("active")
    });
  }
	
	$.fn.hideIcon = function (button, settings) {
	  var fields = this.find(".item"),
	      el = this;
	  switch (settings.animation) { 
      case 'fade': 
        fields.fadeOutIcon(el, button)
        break; 
    
      case 'fly': 
        fields.flyOut(el, button)
        break; 
    }
	  
	}
	
	$.fn.showIcon = function (button, settings) {
	  var el = this,
	      zindex = '6';
	  if (settings.trigger == "hover") {
	    var zindex = '3';
    }
	  button.addClass("active").css({
      'z-index': zindex
    });
    
    
    
	  el.show().css({
        position: 'absolute',
        'z-index': '5',
        'padding': '30px' // add safe zone for mouseover
    }).centerAround(button); 
    el.addClass("wheel active").css("visibility", "visible").show();
	  
	  if (el.attr('data-angle')) {
      settings.angle = el.attr('data-angle')
    }
    
    settings = predefineAngle(settings);
	  var radius = el.width() / 2,
      fields = el.find(".item"),
      container = el,
      width = container.innerWidth(),
      height = container.innerHeight(),
      angle =  0,
      step = (settings.angle[1] - settings.angle[0]) / fields.length;
     
     
      switch (settings.animation) { 
        case 'fade': 
          fields.fadeInIcon(el, button, width, height, angle, step, radius, settings)
          break; 
          
        case 'fly': 
          fields.flyIn(el, button, width, height, angle, step, radius, settings)
          break; 
      }
    
	}
	
	$.fn.animateRotate = function(angle, duration, easing, complete) {
      return this.each(function() {
          var $elem = $(this);

          $({deg: 0}).animate({deg: angle}, {
              duration: duration,
              easing: easing,
              step: function(now) {
                  $elem.css({
                      transform: 'rotate(' + now + 'deg)'
                  });
              },
              complete: complete || $.noop
          });
      });
  };
  
	
	function predefineAngle (settings) {
	  var convert = false
	  if ($.type(settings.angle) == "string") {
	    try {
        if (eval(settings.angle).length > 1) convert = true
      }
      catch(err) {
        convert = false
      }
	    if (convert == true) {
	      settings.angle = JSON.parse(settings.angle);
	    } else {
	      switch (settings.angle) { 
          case 'N':
            settings.angle = [180,380]
            break;
          case 'NE':
            settings.angle = [270,380]
            break;
          case 'E':
            settings.angle = [270,470]
            break;
          case 'SE':
            settings.angle = [360,470]
            break;
          case 'S':
            settings.angle = [360,560]
            break;
          case 'SW':
            settings.angle = [90,200]
            break;
          case 'W':
            settings.angle = [90,290]
            break;
          case 'NW':
            settings.angle = [180,290]
            break;
          case 'all':
            settings.angle = [0,360]
            break;
        }
	    } 
    }
    return settings;
	}
	
	function predefineSpeed(settings) {
	  if ($.type(settings.animationSpeed) == "string") { 
      switch (settings.animationSpeed) { 
        case 'slow':
          settings.animationSpeed = [75,700]
          break;
        case 'medium':
          settings.animationSpeed = [50,500]
          break;
        case 'fast':
          settings.animationSpeed = [25,250]
          break;
        case 'instant':
          settings.animationSpeed = [0,0]
          break;
      }
    }
    return settings;
	}
  
  $.fn.wheelmenu = function(options){
    var settings = $.extend({}, defaults, options);
    
    settings = predefineSpeed(settings);
    
    return this.each(function(){
      var button = $(this)
      var el = $($(this).attr("href"));
      el.addClass("wheel");
      
      button.css("opacity", 0).animate({
        opacity: 1
      })
      if (settings.trigger == "hover") {

        button.bind({
          mouseenter: function() {
            el.showIcon(button, settings);
          }
        });
        
        el.bind({
          mouseleave: function() {
            el.hideIcon(button, settings);
          }
        });
        
      } else {
		/*
        button.click( function() {
          if (el.css('visibility') == "visible") {
            el.hideIcon(button, settings);
          } else {
            el.showIcon(button, settings);
          }
        });
		*/

		button.on('touchend', function(e) {
          e.stopPropagation();

          if (el.css('visibility') == "visible") {
            el.hideIcon(button, settings);
          } else {
            el.showIcon(button, settings);
          }
        });
      }
    });
  }
  
}(window.jQuery);



/**
 * App.js v2.0.13
 * Instant mobile web app creation
 * Copyright (c) 2012 Kik Interactive, http://kik.com
 * Released under the MIT license
 *
 * iScroll v4.1.6
 * Copyright (c) 2011 Matteo Spinelli, http://cubiq.org
 * Released under the MIT license
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
var Swapper=function(f,d){function e(h,i,c,b){e._swapper(h,i,c,b)}if(f&&f.fn){f.extend(f.fn,{swapper:function(g,c,b){g=f(g)[0];this.forEach(function(h){e._swapper(h,g,c,b)});return this}})}if(d&&d.fn){d.fn.swapper=function(g,c,b){g=d(g)[0];this.each(function(){e._swapper(this,g,c,b)});return this}}return e}(window.Zepto,window.jQuery);Swapper._os=function(i,k){var l,h,g;if(g=/\bCPU.*OS (\d+(_\d+)?)/i.exec(i)){l="ios";h=g[1].replace("_",".")}else{if(g=/\bAndroid (\d+(\.\d+)?)/.exec(i)){l="android";h=g[1]}}var j={name:l,version:h&&k(h)};j[l]=true;return j}(navigator.userAgent,parseFloat);Swapper._isNode=function(d,c){return function(b){if(!b){return false}try{return(b instanceof d)||(b instanceof c)}catch(e){}if(typeof b!=="object"){return false}if(typeof b.nodeType!=="number"){return false}if(typeof b.nodeName!=="string"){return false}return true}}(Node,HTMLElement);Swapper._isInDOM=function(b){return function(e,d){if(!d&&!b(e)){throw TypeError("element must be a DOM node, got "+e)}while(e=e.parentNode){if(e===document){return true}}return false}}(Swapper._isNode);Swapper._insertBefore=function(){return function(d,c){c.parentNode.insertBefore(d,c)}}();Swapper._insertAfter=function(){return function(e,f){var d=f.parentNode;if(d.lastchild===f){d.appendChild(e)}else{d.insertBefore(e,f.nextSibling)}}}();Swapper._removeNode=function(){return function(b){if(b.parentNode){b.parentNode.removeChild(b)}}}();Swapper._setTransform=function(){return function(c,d){c.style["-webkit-transform"]=d;c.style["-moz-transform"]=d;c.style["-ms-transform"]=d;c.style["-o-transform"]=d;c.style.transform=d}}();Swapper._setTransition=function(){return function(d,c){if(c){d.style["-webkit-transition"]="-webkit-"+c;d.style["-moz-transition"]="-moz-"+c;d.style["-ms-transition"]="-ms-"+c;d.style["-o-transition"]="-o-"+c;d.style.transition=c}else{d.style["-webkit-transition"]="";d.style["-moz-transition"]="";d.style["-ms-transition"]="";d.style["-o-transition"]="";d.style.transition=""}}}();Swapper._getStyles=function(b){return function(g,f){var e;if(f){e=g.style}else{e=b.defaultView.getComputedStyle(g,null)}return{"-webkit-transition":e["-webkit-transition"],"-moz-transition":e["-moz-transition"],"-ms-transition":e["-ms-transition"],"-o-transition":e["-o-transition"],transition:e.transition,display:e.display,opacity:e.opacity,top:e.top,left:e.left,height:e.height,width:e.width,position:e.position}}}(document);Swapper._easings={linear:"linear",ease:"ease","ease-in":"ease-in","ease-out":"ease-out","ease-in-out":"ease-in-out","step-start":"step-start","step-end":"step-end"};Swapper._transitions={fade:[{fade:true},{fade:true}],"fade-on":[{fade:true},{}],"fade-off":[{},{fade:true},true],"scale-in":[{transform:"scale(0.01)"},{}],"scale-out":[{},{transform:"scale(0.01)"},true],"rotate-left":[{transform:"rotateY(-180deg) perspective(360px)",fade:true},{transform:"rotateY( 180deg) perspective(360px)",fade:true}],"rotate-right":[{transform:"rotateY( 180deg) perspective(360px)",fade:true},{transform:"rotateY(-180deg) perspective(360px)",fade:true}],"cube-left":[{transform:"translate3d( 50%,0,0) rotateY(-90deg) perspective(360px)"},{transform:"translate3d(-50%,0,0) rotateY( 90deg) perspective(360px)"}],"cube-right":[{transform:"translate3d(-50%,0,0) rotateY( 90deg) perspective(360px)"},{transform:"translate3d( 50%,0,0) rotateY(-90deg) perspective(360px)"}],"swap-left":[{transform:"translate3d( 65%,0,0) rotateY( 90deg) perspective(360px)"},{transform:"translate3d(-65%,0,0) rotateY(-90deg) perspective(360px)"}],"swap-right":[{transform:"translate3d(-65%,0,0) rotateY(-90deg) perspective(360px)"},{transform:"translate3d( 65%,0,0) rotateY( 90deg) perspective(360px)"}],"explode-in":[{fade:true,transform:"scale(1.25)"},{}],"explode-out":[{},{fade:true,transform:"scale(1.25)"},true],"implode-in":[{},{fade:true,transform:"scale(0.60)"},true],"implode-out":[{fade:true,transform:"scale(0.80)"},{}],"slide-left":[{transform:"translate3d( 100%,0,0)"},{transform:"translate3d(-100%,0,0)"}],"slide-right":[{transform:"translate3d(-100%,0,0)"},{transform:"translate3d( 100%,0,0)"}],"slide-up":[{transform:"translate3d(0, 100%,0)"},{transform:"translate3d(0,-100%,0)"}],"slide-down":[{transform:"translate3d(0,-100%,0)"},{transform:"translate3d(0, 100%,0)"}],"slideon-left":[{transform:"translate3d(-100%,0,0)"},{}],"slideoff-left":[{},{transform:"translate3d(-100%,0,0)"},true],"slideon-right":[{transform:"translate3d(100%,0,0)"},{}],"slideoff-right":[{},{transform:"translate3d(100%,0,0)"},true],"slideon-up":[{transform:"translate3d(0,-100%,0)"},{}],"slideoff-up":[{},{transform:"translate3d(0,-100%,0)"},true],"slideon-down":[{transform:"translate3d(0,100%,0)"},{}],"slideoff-down":[{},{transform:"translate3d(0,100%,0)"},true],"slideon-left-ios":[{transform:"translate3d(100%,0,0)"},{transform:"translate3d(-30%,0,0)"}],"slideoff-right-ios":[{transform:"translate3d(-30%,0,0)"},{transform:"translate3d(100%,0,0)"},true],"glideon-right":[{transform:"translate3d(110%,0,0)"},{transform:"translate3d(-20%,0,0)"}],"glideoff-right":[{transform:"translate3d(-20%,0,0)"},{transform:"translate3d(110%,0,0)"},true],"glideon-left":[{transform:"translate3d(-110%,0,0)"},{transform:"translate3d(20%,0,0)"}],"glideoff-left":[{transform:"translate3d(20%,0,0)"},{transform:"translate3d(-110%,0,0)"},true],"glideon-down":[{transform:"translate3d(0,110%,0)"},{transform:"translate3d(0,-20%,0)"}],"glideoff-down":[{transform:"translate3d(0,-20%,0)"},{transform:"translate3d(0,110%,0)"},true],"glideon-up":[{transform:"translate3d(0,-110%,0)"},{transform:"translate3d(0,20%,0)"}],"glideoff-up":[{transform:"translate3d(0,20%,0)"},{transform:"translate3d(0,-110%,0)"},true]};Swapper._validate=function(j,i,k){return{element:l,options:g,callback:h};function l(b){if(!j(b)){throw TypeError("element must be a DOM node, got "+b)}}function g(b){switch(typeof b){case"string":b={transition:b};break;case"undefined":b={};break;case"object":break;default:throw TypeError("options must be an object if defined, got "+b)}switch(typeof b.transition){case"string":if(!(b.transition in i)&&(b.transition!=="instant")){throw TypeError(b.transition+" is not a valid transition")}break;case"undefined":break;default:throw TypeError("transition must be a string if defined, got "+b.transition)}switch(typeof b.duration){case"number":if(b.duration<0){throw TypeError("duration must be a non-negative integer, got "+b.duration)}break;case"undefined":break;default:throw TypeError("duration must be a number if defined, got "+b.duration)}switch(typeof b.easing){case"string":if(!(b.easing in k)&&(b.easing.substr(0,13)!=="cubic-bezier(")){throw TypeError(b.easing+" is not a valid easing")}break;case"undefined":break;default:throw TypeError("easing must be a string if defined, got "+b.easing)}return b}function h(b){switch(typeof b){case"undefined":b=function(){};break;case"function":break;default:throw TypeError("callback must be a function if defined, got "+b)}return b}}(Swapper._isNode,Swapper._transitions,Swapper._easings);Swapper._swapper=function(Z,I,ae,af,U,H,ad,ac,aa,O,Y,S,X,N){var aj="translate3d(0,0,0) scale(1)",M="fade",F="ease-in-out";var T=(Z.ios&&(Math.floor(Z.version)===5));function Q(d,e,c,b){S.element(d);S.element(e);if(typeof c==="function"){b=c;c={}}c=S.options(c);b=S.callback(b);if(d._swapper){throw Error("elem1 is currently being swapped")}else{if(e._swapper){throw Error("elem2 is currently being swapped")}}if(!ae(d,true)){throw Error("elem1 must be in the DOM to be swapped")}d._swapper=true;e._swapper=true;H(e);V(d,e,c,function(){d._swapper=false;e._swapper=false;b()})}function V(c,d,b,e){if(b.transition==="instant"){U(d,c);H(c);e();return}var f=O[b.transition||M],g=b.easing||F,h=b.duration||300;if(g.substr(0,13)!=="cubic-bezier("){g=Y[g]}U(d,c);var i=aa(c),j=aa(d),k=aa(c,true),l=aa(d,true);P(c,d,i,j);if(f[2]){af(d,c)}d.style.opacity="0";K(c,d);setTimeout(function(){d.style.opacity=j.opacity;ai(c,d,f);setTimeout(function(){W(c,d,h,g);setTimeout(function(){G(c,d,f);R(c,d,i,j,f,h,function(){H(c);L(c,d,h,g);setTimeout(function(){J(c,d,k,l,f);ag(c,d,k,l);setTimeout(function(){ah(c,d,k,l);e()},0)},0)})},0)},0)},0)}function P(e,f,c,d){var b=e.getBoundingClientRect();if(c.display!=="none"){if(T){f.style.position="absolute"}else{f.style.position="fixed"}f.style.top=b.top+"px";f.style.left=b.left+"px"}f.style.height=d.height||c.height;f.style.width=d.width||c.width}function ag(d,e,b,c){e.style.position=c.position;e.style.top=c.top;e.style.left=c.left;e.style.height=c.height;e.style.width=c.width}function ai(c,d,b){ad(c,aj);ad(d,b[0].transform||aj);if(b[0].fade){d.style.opacity="0"}if(b[1].fade){c.style.opacity="1"}}function G(c,d,b){ad(c,b[1].transform||aj);ad(d,aj);if(b[0].fade){d.style.opacity="1"}if(b[1].fade){c.style.opacity="0"}}function J(e,f,c,d,b){ad(e,"");ad(f,"");if(b[0].fade){f.style.opacity=d.opacity}if(b[1].fade){e.style.opacity=c.opacity}}function W(e,f,d,b){var c="transform "+(d/1000)+"s "+b+",opacity "+(d/1000)+"s "+b;ac(e,c);ac(f,c)}function L(d,e,c,b){ac(d,"");ac(e,"")}function K(b,c){ac(b,"");ac(c,"")}function ah(d,e,b,c){d.style["-webkit-transition"]=b["-webkit-transition"];d.style["-moz-transition"]=b["-moz-transition"];d.style["-ms-transition"]=b["-ms-transition"];d.style["-o-transition"]=b["-o-transition"];d.style.transition=b.transition;e.style["-webkit-transition"]=c["-webkit-transition"];e.style["-moz-transition"]=c["-moz-transition"];e.style["-ms-transition"]=c["-ms-transition"];e.style["-o-transition"]=c["-o-transition"];e.style.transition=c.transition}function ab(c,b){if(c.display==="none"){return false}if(b.fade){return true}if(!b.transform){return false}else{if(b.transform===aj){return false}else{return true}}}function R(b,e,k,m,h,j,f){var l;if(ab(m,h[0])){l=e;c()}else{if(ab(k,h[1])){l=b;c()}else{setTimeout(g,j)}}function c(){l.addEventListener("webkitTransitionEnd",g,false);l.addEventListener("transitionend",g,false);l.addEventListener("oTransitionEnd",g,false);l.addEventListener("otransitionend",g,false);l.addEventListener("MSTransitionEnd",g,false);l.addEventListener("transitionend",g,false)}function d(){l.removeEventListener("webkitTransitionEnd",g);l.removeEventListener("transitionend",g);l.removeEventListener("oTransitionEnd",g);l.removeEventListener("otransitionend",g);l.removeEventListener("MSTransitionEnd",g);l.removeEventListener("transitionend",g)}var i=false;function g(n){if(i||(n&&n.target&&(n.target!==l))){return}i=true;if(l){d()}f()}}return Q}(Swapper._os,Swapper._isNode,Swapper._isInDOM,Swapper._insertBefore,Swapper._insertAfter,Swapper._removeNode,Swapper._setTransform,Swapper._setTransition,Swapper._getStyles,Swapper._transitions,Swapper._easings,Swapper._validate,window,document);var Clickable=function(f,d){function e(){e._enableClicking.apply(this,arguments)}e.touchable=function(){return e._os.touchable};e.sticky=function(){e._enableStickyClick.apply(this,arguments)};if(d&&d.fn){d.fn.clickable=function(b){this.each(function(){e._enableClicking(this,b)});return this};d.fn.stickyClick=function(b){this.each(function(){e._enableStickyClick(this,b)});return this}}if(f&&f.fn){f.extend(f.fn,{clickable:function(b){this.forEach(function(c){e._enableClicking(c,b)});return this},stickyClick:function(b){this.forEach(function(c){e._enableStickyClick(c,b)});return this}})}return e}(window.Zepto,window.jQuery);Clickable._os=function(i,k){var l,h,g;if(g=/\bCPU.*OS (\d+(_\d+)?)/i.exec(i)){l="ios";h=g[1].replace("_",".")}else{if(g=/\bAndroid (\d+(\.\d+)?)/.exec(i)){l="android";h=g[1]}}var j={name:l,version:h&&k(h),touchable:!!l};j[l]=true;return j}(navigator.userAgent,parseFloat);Clickable._trimString=function(d){var c=/^\s+|\s+$/g;return function(b){return d(b).replace(c,"")}}(String);Clickable._isDOMNode=function(d,c){return function(b){if(!b){return false}try{return(b instanceof d)||(b instanceof c)}catch(e){}if(typeof b!=="object"){return false}if(typeof b.nodeType!=="number"){return false}if(typeof b.nodeName!=="string"){return false}return true}}(Node,HTMLElement);Clickable._isInDOM=function(){return function(b){while(b=b.parentNode){if(b===document){return true}}return false}}();Clickable._bindEvents=function(){return function(f,d){for(var e in d){if(f.addEventListener){f.addEventListener(e,d[e],false)}else{if(f.attachEvent){f.attachEvent("on"+e,d[e])}}}}}();Clickable._unbindEvents=function(){return function(f,d){for(var e in d){if(f.removeEventListener){f.removeEventListener(e,d[e])}}}}();Clickable._addClass=function(){return function(c,d){c.className+=" "+d}}();Clickable._removeClass=function(b){return function(e,d){e.className=b(e.className.replace(new RegExp("\\b"+d+"\\b"),""))}}(Clickable._trimString);Clickable._enableClicking=function(y,r,F,A,D,v,s){var x="active",t="data-clickable-class",z=40;var q=false,u=!!y.ios;function E(g,c){if(!r(g)){throw TypeError("element "+g+" must be a DOM element")}if(g._clickable){return}g._clickable=true;switch(typeof c){case"undefined":c=x;break;case"string":break;default:throw TypeError("active class "+c+" must be a string")}var Q=false,X=false,n,P,k,i,T;g.setAttribute(t,c);g.style["-webkit-tap-highlight-color"]="rgba(255,255,255,0)";o();return;function e(H,G){Q=true;k=+new Date();n=H;P=G;i=w(g);if(i){T=i.scrollTop;i.addEventListener("scroll",Y,true)}}function m(){if(i){i.removeEventListener("scroll",Y)}i=null;T=null;n=null;P=null;Q=false}function Y(){W()}function b(){return Q}function R(){v(g,c)}function V(){s(g,c)}function o(){A(g,{click:j});if(!y.touchable){A(g,{mousedown:U,mousemove:S,mouseout:S,mouseup:f});return}if(y.ios){A(g,{DOMNodeInsertedIntoDocument:d,DOMNodeRemovedFromDocument:h});if(F(g)){d()}}else{d()}}function d(){A(g,{touchstart:l,touchmove:W,touchcancel:W,touchend:p})}function h(){D(g,{touchstart:l,touchmove:W,touchcancel:W,touchend:p})}function j(G){G=G||window.event;if(!g.disabled&&X){X=false;setTimeout(function(){q=false},0)}else{if(G.stopImmediatePropagation){G.stopImmediatePropagation()}G.preventDefault();G.stopPropagation();G.cancelBubble=true;G.returnValue=false;return false}}function U(G){X=false;if(g.disabled||!B(G.target,g)){G.preventDefault();m();return}e(G.clientX,G.clientY);R()}function S(G){G.preventDefault();m();X=false;V()}function f(G){if(g.disabled){G.preventDefault();m();X=false;return}if(!b()){G.preventDefault();X=false}else{X=true}m();V()}function l(H){X=false;if(q||g.disabled||(H.touches.length!==1)||!B(H.target,g)){m();return}q=true;var G=H.changedTouches[0];e(G.clientX,G.clientY);if(i){if(i._isScrolling||(T<0)||(i.scrollHeight<T)){m();return}}var G=k;setTimeout(function(){if(b()&&(G===k)){R()}},z)}function W(G){X=false;m();if(G){q=false}if(g.disabled){return}V()}function p(H){var L=b(),K=i,J=T,M=n,G=P;W();if(!L||g.disabled){q=false;return}if(K){if(K._isScrolling||(K.scrollTop!==J)){return}}if(!H.stopImmediatePropagation){X=true;return}var I=+new Date()-k;if(I>z){X=true;C(g,M,G)}else{R();setTimeout(function(){V();X=true;C(g,M,G)},1)}}}function B(b,c){do{if(b===c){return true}else{if(b._clickable){return false}}}while(b=b.parentNode);return false}function C(c,e,b){var d=document.createEvent("MouseEvents");d.initMouseEvent("click",true,true,window,1,e||0,b||0,e||0,b||0,false,false,false,false,0,null);c.dispatchEvent(d)}function w(b){if(!y.ios||(y.version<5)){return}while(b=b.parentNode){if(b._scrollable){if(b._iScroll){return}return b}}}return E}(Clickable._os,Clickable._isDOMNode,Clickable._isInDOM,Clickable._bindEvents,Clickable._unbindEvents,Clickable._addClass,Clickable._removeClass);Clickable._enableStickyClick=function(h,l,i){var k="data-clickable-class";function j(b,c,d){if(!l(b)){throw TypeError("button must be a DOM element, got "+b)}switch(typeof c){case"string":break;case"function":d=c;c=undefined;break;default:throw TypeError("button active class must be a string if defined, got "+c)}if(typeof d!=="function"){throw TypeError("sticky click handler must be a function, got "+d)}i(b,c);b.addEventListener("click",g(b,d),false)}function g(b,c){return function(){var n=false,o=b.getAttribute(k),d;b.disabled=true;b.className+=" "+o;try{d=c.call(b,e)}catch(f){if(window.console&&window.console.error){if((typeof f==="object")&&f.stack){window.console.error(f.stack)}else{window.console.error(f+"")}}e()}if(d===false){e()}function e(){if(n){return}n=true;if(b.disabled){b.disabled=false;b.className=h(b.className.replace(new RegExp("\\b"+o+"\\b","g"),""))}}}}return j}(Clickable._trimString,Clickable._isDOMNode,Clickable._enableClicking);var iScroll=function(u,f){function C(b){if(""===v){return b}b=b.charAt(0).toUpperCase()+b.substr(1);return v+b}var t=Math,s=f.createElement("div").style,v;a:{for(var z=["t","webkitT","MozT","msT","OT"],h,j=0,x=z.length;j<x;j++){if(h=z[j]+"ransform",h in s){v=z[j].substr(0,z[j].length-1);break a}}v=!1}var y=v?"-"+v.toLowerCase()+"-":"",B=C("transform"),D=C("transitionProperty"),K=C("transitionDuration"),G=C("transformOrigin"),I=C("transitionTimingFunction"),A=C("transitionDelay"),E=/android/gi.test(navigator.appVersion),l=/iphone|ipad/gi.test(navigator.appVersion),z=/hp-tablet/gi.test(navigator.appVersion),m=C("perspective") in s,w="ontouchstart" in u&&!z,o=!!v,J=C("transition") in s,F="onorientationchange" in u?"orientationchange":"resize",M=w?"touchstart":"mousedown",n=w?"touchmove":"mousemove",p=w?"touchend":"mouseup",q=w?"touchcancel":"mouseup",N="Moz"==v?"DOMMouseScroll":"mousewheel",O;O=!1===v?!1:{"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"oTransitionEnd",ms:"MSTransitionEnd"}[v];var L=u.requestAnimationFrame||u.webkitRequestAnimationFrame||u.mozRequestAnimationFrame||u.oRequestAnimationFrame||u.msRequestAnimationFrame||function(b){return setTimeout(b,1)},r=u.cancelRequestAnimationFrame||u.webkitCancelAnimationFrame||u.webkitCancelRequestAnimationFrame||u.mozCancelRequestAnimationFrame||u.oCancelRequestAnimationFrame||u.msCancelRequestAnimationFrame||clearTimeout,H=m?" translateZ(0)":"",z=function(e,d){var b=this,c;b.wrapper="object"==typeof e?e:f.getElementById(e);b.wrapper.style.overflow="hidden";b.scroller=b.wrapper.children[0];b.options={hScroll:!0,vScroll:!0,x:0,y:0,bounce:!0,bounceLock:!1,momentum:!0,lockDirection:!0,useTransform:!0,useTransition:!1,topOffset:0,checkDOMChanges:!1,handleClick:!0,hScrollbar:!0,vScrollbar:!0,fixedScrollbar:E,hideScrollbar:l,fadeScrollbar:l&&m,scrollbarClass:"",zoom:!1,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:"scroll",snap:!1,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(g){g.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null};for(c in d){b.options[c]=d[c]}b.x=b.options.x;b.y=b.options.y;b.options.useTransform=o&&b.options.useTransform;b.options.hScrollbar=b.options.hScroll&&b.options.hScrollbar;b.options.vScrollbar=b.options.vScroll&&b.options.vScrollbar;b.options.zoom=b.options.useTransform&&b.options.zoom;b.options.useTransition=J&&b.options.useTransition;b.options.zoom&&E&&(H="");b.scroller.style[D]=b.options.useTransform?y+"transform":"top left";b.scroller.style[K]="0";b.scroller.style[G]="0 0";b.options.useTransition&&(b.scroller.style[I]="cubic-bezier(0.33,0.66,0.66,1)");b.options.useTransform?b.scroller.style[B]="translate("+b.x+"px,"+b.y+"px)"+H:b.scroller.style.cssText+=";position:absolute;top:"+b.y+"px;left:"+b.x+"px";b.options.useTransition&&(b.options.fixedScrollbar=!0);b.refresh();b._bind(F,u);b._bind(M);w||(b._bind("mouseout",b.wrapper),"none"!=b.options.wheelAction&&b._bind(N));b.options.checkDOMChanges&&(b.checkDOMTime=setInterval(function(){b._checkDOMChanges()},500))};z.prototype={enabled:!0,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(b){switch(b.type){case M:if(!w&&0!==b.button){break}this._start(b);break;case n:this._move(b);break;case p:case q:this._end(b);break;case F:this._resize();break;case N:this._wheel(b);break;case"mouseout":this._mouseout(b);break;case O:this._transitionEnd(b)}},_checkDOMChanges:function(){!this.moved&&(!this.zoomed&&!(this.animating||this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale))&&this.refresh()},_scrollbar:function(c){var b;this[c+"Scrollbar"]?(this[c+"ScrollbarWrapper"]||(b=f.createElement("div"),this.options.scrollbarClass?b.className=this.options.scrollbarClass+c.toUpperCase():b.style.cssText="position:absolute;z-index:100;"+("h"==c?"height:7px;bottom:1px;left:2px;right:"+(this.vScrollbar?"7":"2")+"px":"width:7px;bottom:"+(this.hScrollbar?"7":"2")+"px;top:2px;right:1px"),b.style.cssText+=";pointer-events:none;"+y+"transition-property:opacity;"+y+"transition-duration:"+(this.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(this.options.hideScrollbar?"0":"1"),this.wrapper.appendChild(b),this[c+"ScrollbarWrapper"]=b,b=f.createElement("div"),this.options.scrollbarClass||(b.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);"+y+"background-clip:padding-box;"+y+"box-sizing:border-box;"+("h"==c?"height:100%":"width:100%")+";"+y+"border-radius:3px;border-radius:3px"),b.style.cssText+=";pointer-events:none;"+y+"transition-property:"+y+"transform;"+y+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);"+y+"transition-duration:0;"+y+"transform: translate(0,0)"+H,this.options.useTransition&&(b.style.cssText+=";"+y+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),this[c+"ScrollbarWrapper"].appendChild(b),this[c+"ScrollbarIndicator"]=b),"h"==c?(this.hScrollbarSize=this.hScrollbarWrapper.clientWidth,this.hScrollbarIndicatorSize=t.max(t.round(this.hScrollbarSize*this.hScrollbarSize/this.scrollerW),8),this.hScrollbarIndicator.style.width=this.hScrollbarIndicatorSize+"px",this.hScrollbarMaxScroll=this.hScrollbarSize-this.hScrollbarIndicatorSize,this.hScrollbarProp=this.hScrollbarMaxScroll/this.maxScrollX):(this.vScrollbarSize=this.vScrollbarWrapper.clientHeight,this.vScrollbarIndicatorSize=t.max(t.round(this.vScrollbarSize*this.vScrollbarSize/this.scrollerH),8),this.vScrollbarIndicator.style.height=this.vScrollbarIndicatorSize+"px",this.vScrollbarMaxScroll=this.vScrollbarSize-this.vScrollbarIndicatorSize,this.vScrollbarProp=this.vScrollbarMaxScroll/this.maxScrollY),this._scrollbarPos(c,!0)):this[c+"ScrollbarWrapper"]&&(o&&(this[c+"ScrollbarIndicator"].style[B]=""),this[c+"ScrollbarWrapper"].parentNode.removeChild(this[c+"ScrollbarWrapper"]),this[c+"ScrollbarWrapper"]=null,this[c+"ScrollbarIndicator"]=null)},_resize:function(){var b=this;setTimeout(function(){b.refresh()},E?200:0)},_pos:function(c,b){this.zoomed||(c=this.hScroll?c:0,b=this.vScroll?b:0,this.options.useTransform?this.scroller.style[B]="translate("+c+"px,"+b+"px) scale("+this.scale+")"+H:(c=t.round(c),b=t.round(b),this.scroller.style.left=c+"px",this.scroller.style.top=b+"px"),this.x=c,this.y=b,this._scrollbarPos("h"),this._scrollbarPos("v"))},_scrollbarPos:function(d,c){var b="h"==d?this.x:this.y;this[d+"Scrollbar"]&&(b*=this[d+"ScrollbarProp"],0>b?(this.options.fixedScrollbar||(b=this[d+"ScrollbarIndicatorSize"]+t.round(3*b),8>b&&(b=8),this[d+"ScrollbarIndicator"].style["h"==d?"width":"height"]=b+"px"),b=0):b>this[d+"ScrollbarMaxScroll"]&&(this.options.fixedScrollbar?b=this[d+"ScrollbarMaxScroll"]:(b=this[d+"ScrollbarIndicatorSize"]-t.round(3*(b-this[d+"ScrollbarMaxScroll"])),8>b&&(b=8),this[d+"ScrollbarIndicator"].style["h"==d?"width":"height"]=b+"px",b=this[d+"ScrollbarMaxScroll"]+(this[d+"ScrollbarIndicatorSize"]-b))),this[d+"ScrollbarWrapper"].style[A]="0",this[d+"ScrollbarWrapper"].style.opacity=c&&this.options.hideScrollbar?"0":"1",this[d+"ScrollbarIndicator"].style[B]="translate("+("h"==d?b+"px,0)":"0,"+b+"px)")+H)},_start:function(e){var d=w?e.touches[0]:e,b,c;if(this.enabled){this.options.onBeforeScrollStart&&this.options.onBeforeScrollStart.call(this,e);(this.options.useTransition||this.options.zoom)&&this._transitionTime(0);this.zoomed=this.animating=this.moved=!1;this.dirY=this.dirX=this.absDistY=this.absDistX=this.distY=this.distX=0;this.options.zoom&&(w&&1<e.touches.length)&&(c=t.abs(e.touches[0].pageX-e.touches[1].pageX),b=t.abs(e.touches[0].pageY-e.touches[1].pageY),this.touchesDistStart=t.sqrt(c*c+b*b),this.originX=t.abs(e.touches[0].pageX+e.touches[1].pageX-2*this.wrapperOffsetLeft)/2-this.x,this.originY=t.abs(e.touches[0].pageY+e.touches[1].pageY-2*this.wrapperOffsetTop)/2-this.y,this.options.onZoomStart&&this.options.onZoomStart.call(this,e));if(this.options.momentum&&(this.options.useTransform?(b=getComputedStyle(this.scroller,null)[B].replace(/[^0-9\-.,]/g,"").split(","),c=1*b[4],b=1*b[5]):(c=1*getComputedStyle(this.scroller,null).left.replace(/[^0-9-]/g,""),b=1*getComputedStyle(this.scroller,null).top.replace(/[^0-9-]/g,"")),c!=this.x||b!=this.y)){this.options.useTransition?this._unbind(O):r(this.aniTime),this.steps=[],this._pos(c,b)}this.absStartX=this.x;this.absStartY=this.y;this.startX=this.x;this.startY=this.y;this.pointX=d.pageX;this.pointY=d.pageY;this.startTime=e.timeStamp||Date.now();this.options.onScrollStart&&this.options.onScrollStart.call(this,e);this._bind(n);this._bind(p);this._bind(q)}},_move:function(g){var e=w?g.touches[0]:g,i=e.pageX-this.pointX,k=e.pageY-this.pointY,b=this.x+i,c=this.y+k,d=g.timeStamp||Date.now();this.options.onBeforeScrollMove&&this.options.onBeforeScrollMove.call(this,g);if(this.options.zoom&&w&&1<g.touches.length){b=t.abs(g.touches[0].pageX-g.touches[1].pageX),c=t.abs(g.touches[0].pageY-g.touches[1].pageY),this.touchesDist=t.sqrt(b*b+c*c),this.zoomed=!0,e=1/this.touchesDistStart*this.touchesDist*this.scale,e<this.options.zoomMin?e=0.5*this.options.zoomMin*Math.pow(2,e/this.options.zoomMin):e>this.options.zoomMax&&(e=2*this.options.zoomMax*Math.pow(0.5,this.options.zoomMax/e)),this.lastScale=e/this.scale,b=this.originX-this.originX*this.lastScale+this.x,c=this.originY-this.originY*this.lastScale+this.y,this.scroller.style[B]="translate("+b+"px,"+c+"px) scale("+e+")"+H,this.options.onZoom&&this.options.onZoom.call(this,g)}else{this.pointX=e.pageX;this.pointY=e.pageY;if(0<b||b<this.maxScrollX){b=this.options.bounce?this.x+i/2:0<=b||0<=this.maxScrollX?0:this.maxScrollX}if(c>this.minScrollY||c<this.maxScrollY){c=this.options.bounce?this.y+k/2:c>=this.minScrollY||0<=this.maxScrollY?this.minScrollY:this.maxScrollY}this.distX+=i;this.distY+=k;this.absDistX=t.abs(this.distX);this.absDistY=t.abs(this.distY);6>this.absDistX&&6>this.absDistY||(this.options.lockDirection&&(this.absDistX>this.absDistY+5?(c=this.y,k=0):this.absDistY>this.absDistX+5&&(b=this.x,i=0)),this.moved=!0,this._pos(b,c),this.dirX=0<i?-1:0>i?1:0,this.dirY=0<k?-1:0>k?1:0,300<d-this.startTime&&(this.startTime=d,this.startX=this.x,this.startY=this.y),this.options.onScrollMove&&this.options.onScrollMove.call(this,g))}},_end:function(R){if(!(w&&0!==R.touches.length)){var Q=this,b=w?R.changedTouches[0]:R,c,d,e={dist:0,time:0},i={dist:0,time:0},g=(R.timeStamp||Date.now())-Q.startTime,P=Q.x,k=Q.y;Q._unbind(n);Q._unbind(p);Q._unbind(q);Q.options.onBeforeScrollEnd&&Q.options.onBeforeScrollEnd.call(Q,R);if(Q.zoomed){P=Q.scale*Q.lastScale,P=Math.max(Q.options.zoomMin,P),P=Math.min(Q.options.zoomMax,P),Q.lastScale=P/Q.scale,Q.scale=P,Q.x=Q.originX-Q.originX*Q.lastScale+Q.x,Q.y=Q.originY-Q.originY*Q.lastScale+Q.y,Q.scroller.style[K]="200ms",Q.scroller.style[B]="translate("+Q.x+"px,"+Q.y+"px) scale("+Q.scale+")"+H,Q.zoomed=!1,Q.refresh(),Q.options.onZoomEnd&&Q.options.onZoomEnd.call(Q,R)}else{if(Q.moved){if(300>g&&Q.options.momentum){e=P?Q._momentum(P-Q.startX,g,-Q.x,Q.scrollerW-Q.wrapperW+Q.x,Q.options.bounce?Q.wrapperW:0):e;i=k?Q._momentum(k-Q.startY,g,-Q.y,0>Q.maxScrollY?Q.scrollerH-Q.wrapperH+Q.y-Q.minScrollY:0,Q.options.bounce?Q.wrapperH:0):i;P=Q.x+e.dist;k=Q.y+i.dist;if(0<Q.x&&0<P||Q.x<Q.maxScrollX&&P<Q.maxScrollX){e={dist:0,time:0}}if(Q.y>Q.minScrollY&&k>Q.minScrollY||Q.y<Q.maxScrollY&&k<Q.maxScrollY){i={dist:0,time:0}}}e.dist||i.dist?(e=t.max(t.max(e.time,i.time),10),Q.options.snap&&(i=P-Q.absStartX,g=k-Q.absStartY,t.abs(i)<Q.options.snapThreshold&&t.abs(g)<Q.options.snapThreshold?Q.scrollTo(Q.absStartX,Q.absStartY,200):(i=Q._snap(P,k),P=i.x,k=i.y,e=t.max(i.time,e))),Q.scrollTo(t.round(P),t.round(k),e)):Q.options.snap?(i=P-Q.absStartX,g=k-Q.absStartY,t.abs(i)<Q.options.snapThreshold&&t.abs(g)<Q.options.snapThreshold?Q.scrollTo(Q.absStartX,Q.absStartY,200):(i=Q._snap(Q.x,Q.y),(i.x!=Q.x||i.y!=Q.y)&&Q.scrollTo(i.x,i.y,i.time))):Q._resetPos(200)}else{w&&(Q.doubleTapTimer&&Q.options.zoom?(clearTimeout(Q.doubleTapTimer),Q.doubleTapTimer=null,Q.options.onZoomStart&&Q.options.onZoomStart.call(Q,R),Q.zoom(Q.pointX,Q.pointY,1==Q.scale?Q.options.doubleTapZoom:1),Q.options.onZoomEnd&&setTimeout(function(){Q.options.onZoomEnd.call(Q,R)},200)):this.options.handleClick&&(Q.doubleTapTimer=setTimeout(function(){Q.doubleTapTimer=null;for(c=b.target;1!=c.nodeType;){c=c.parentNode}"SELECT"!=c.tagName&&("INPUT"!=c.tagName&&"TEXTAREA"!=c.tagName)&&(d=f.createEvent("MouseEvents"),d.initMouseEvent("click",!0,!0,R.view,1,b.screenX,b.screenY,b.clientX,b.clientY,R.ctrlKey,R.altKey,R.shiftKey,R.metaKey,0,null),d._fake=!0,c.dispatchEvent(d))},Q.options.zoom?250:0))),Q._resetPos(200)}Q.options.onTouchEnd&&Q.options.onTouchEnd.call(Q,R)}}},_resetPos:function(d){var c=0<=this.x?0:this.x<this.maxScrollX?this.maxScrollX:this.x,b=this.y>=this.minScrollY||0<this.maxScrollY?this.minScrollY:this.y<this.maxScrollY?this.maxScrollY:this.y;if(c==this.x&&b==this.y){if(this.moved&&(this.moved=!1,this.options.onScrollEnd&&this.options.onScrollEnd.call(this)),this.hScrollbar&&this.options.hideScrollbar&&("webkit"==v&&(this.hScrollbarWrapper.style[A]="300ms"),this.hScrollbarWrapper.style.opacity="0"),this.vScrollbar&&this.options.hideScrollbar){"webkit"==v&&(this.vScrollbarWrapper.style[A]="300ms"),this.vScrollbarWrapper.style.opacity="0"}}else{this.scrollTo(c,b,d||0)}},_wheel:function(e){var d=this,b,c;if("wheelDeltaX" in e){b=e.wheelDeltaX/12,c=e.wheelDeltaY/12}else{if("wheelDelta" in e){b=c=e.wheelDelta/12}else{if("detail" in e){b=c=3*-e.detail}else{return}}}if("zoom"==d.options.wheelAction){if(c=d.scale*Math.pow(2,1/3*(c?c/Math.abs(c):0)),c<d.options.zoomMin&&(c=d.options.zoomMin),c>d.options.zoomMax&&(c=d.options.zoomMax),c!=d.scale){!d.wheelZoomCount&&d.options.onZoomStart&&d.options.onZoomStart.call(d,e),d.wheelZoomCount++,d.zoom(e.pageX,e.pageY,c,400),setTimeout(function(){d.wheelZoomCount--;!d.wheelZoomCount&&d.options.onZoomEnd&&d.options.onZoomEnd.call(d,e)},400)}}else{b=d.x+b,c=d.y+c,0<b?b=0:b<d.maxScrollX&&(b=d.maxScrollX),c>d.minScrollY?c=d.minScrollY:c<d.maxScrollY&&(c=d.maxScrollY),0>d.maxScrollY&&d.scrollTo(b,c,0)}},_mouseout:function(c){var b=c.relatedTarget;if(b){for(;b=b.parentNode;){if(b==this.wrapper){return}}}this._end(c)},_transitionEnd:function(b){b.target==this.scroller&&(this._unbind(O),this._startAni())},_startAni:function(){var g=this,e=g.x,i=g.y,k=Date.now(),b,c,d;g.animating||(g.steps.length?(b=g.steps.shift(),b.x==e&&b.y==i&&(b.time=0),g.animating=!0,g.moved=!0,g.options.useTransition)?(g._transitionTime(b.time),g._pos(b.x,b.y),g.animating=!1,b.time?g._bind(O):g._resetPos(0)):(d=function(){var P=Date.now(),Q;if(P>=k+b.time){g._pos(b.x,b.y);g.animating=false;g.options.onAnimationEnd&&g.options.onAnimationEnd.call(g);g._startAni()}else{P=(P-k)/b.time-1;c=t.sqrt(1-P*P);P=(b.x-e)*c+e;Q=(b.y-i)*c+i;g._pos(P,Q);if(g.animating){g.aniTime=L(d)}}},d()):g._resetPos(400))},_transitionTime:function(b){b+="ms";this.scroller.style[K]=b;this.hScrollbar&&(this.hScrollbarIndicator.style[K]=b);this.vScrollbar&&(this.vScrollbarIndicator.style[K]=b)},_momentum:function(g,e,i,b,c){var e=t.abs(g)/e,d=e*e/0.0012;0<g&&d>i?(i+=c/(6/(0.0006*(d/e))),e=e*i/d,d=i):0>g&&d>b&&(b+=c/(6/(0.0006*(d/e))),e=e*b/d,d=b);return{dist:d*(0>g?-1:1),time:t.round(e/0.0006)}},_offset:function(d){for(var c=-d.offsetLeft,b=-d.offsetTop;d=d.offsetParent;){c-=d.offsetLeft,b-=d.offsetTop}d!=this.wrapper&&(c*=this.scale,b*=this.scale);return{left:c,top:b}},_snap:function(g,e){var b,c,d;d=this.pagesX.length-1;b=0;for(c=this.pagesX.length;b<c;b++){if(g>=this.pagesX[b]){d=b;break}}d==this.currPageX&&(0<d&&0>this.dirX)&&d--;g=this.pagesX[d];c=(c=t.abs(g-this.pagesX[this.currPageX]))?500*(t.abs(this.x-g)/c):0;this.currPageX=d;d=this.pagesY.length-1;for(b=0;b<d;b++){if(e>=this.pagesY[b]){d=b;break}}d==this.currPageY&&(0<d&&0>this.dirY)&&d--;e=this.pagesY[d];b=(b=t.abs(e-this.pagesY[this.currPageY]))?500*(t.abs(this.y-e)/b):0;this.currPageY=d;d=t.round(t.max(c,b))||200;return{x:g,y:e,time:d}},_bind:function(d,c,b){(c||this.scroller).addEventListener(d,this,!!b)},_unbind:function(d,c,b){(c||this.scroller).removeEventListener(d,this,!!b)},destroy:function(){this.scroller.style[B]="";this.vScrollbar=this.hScrollbar=!1;this._scrollbar("h");this._scrollbar("v");this._unbind(F,u);this._unbind(M);this._unbind(n);this._unbind(p);this._unbind(q);this.options.hasTouch||(this._unbind("mouseout",this.wrapper),this._unbind(N));this.options.useTransition&&this._unbind(O);this.options.checkDOMChanges&&clearInterval(this.checkDOMTime);this.options.onDestroy&&this.options.onDestroy.call(this)},refresh:function(){var e,d,b,c=0;d=0;this.scale<this.options.zoomMin&&(this.scale=this.options.zoomMin);this.wrapperW=this.wrapper.clientWidth||1;this.wrapperH=this.wrapper.clientHeight||1;this.minScrollY=-this.options.topOffset||0;this.scrollerW=t.round(this.scroller.offsetWidth*this.scale);this.scrollerH=t.round((this.scroller.offsetHeight+this.minScrollY)*this.scale);this.maxScrollX=this.wrapperW-this.scrollerW;this.maxScrollY=this.wrapperH-this.scrollerH+this.minScrollY;this.dirY=this.dirX=0;this.options.onRefresh&&this.options.onRefresh.call(this);this.hScroll=this.options.hScroll&&0>this.maxScrollX;this.vScroll=this.options.vScroll&&(!this.options.bounceLock&&!this.hScroll||this.scrollerH>this.wrapperH);this.hScrollbar=this.hScroll&&this.options.hScrollbar;this.vScrollbar=this.vScroll&&this.options.vScrollbar&&this.scrollerH>this.wrapperH;e=this._offset(this.wrapper);this.wrapperOffsetLeft=-e.left;this.wrapperOffsetTop=-e.top;if("string"==typeof this.options.snap){this.pagesX=[];this.pagesY=[];b=this.scroller.querySelectorAll(this.options.snap);e=0;for(d=b.length;e<d;e++){c=this._offset(b[e]),c.left+=this.wrapperOffsetLeft,c.top+=this.wrapperOffsetTop,this.pagesX[e]=c.left<this.maxScrollX?this.maxScrollX:c.left*this.scale,this.pagesY[e]=c.top<this.maxScrollY?this.maxScrollY:c.top*this.scale}}else{if(this.options.snap){for(this.pagesX=[];c>=this.maxScrollX;){this.pagesX[d]=c,c-=this.wrapperW,d++}this.maxScrollX%this.wrapperW&&(this.pagesX[this.pagesX.length]=this.maxScrollX-this.pagesX[this.pagesX.length-1]+this.pagesX[this.pagesX.length-1]);d=c=0;for(this.pagesY=[];c>=this.maxScrollY;){this.pagesY[d]=c,c-=this.wrapperH,d++}this.maxScrollY%this.wrapperH&&(this.pagesY[this.pagesY.length]=this.maxScrollY-this.pagesY[this.pagesY.length-1]+this.pagesY[this.pagesY.length-1])}}this._scrollbar("h");this._scrollbar("v");this.zoomed||(this.scroller.style[K]="0",this._resetPos(200))},scrollTo:function(g,e,b,c){var d=g;this.stop();d.length||(d=[{x:g,y:e,time:b,relative:c}]);g=0;for(e=d.length;g<e;g++){d[g].relative&&(d[g].x=this.x-d[g].x,d[g].y=this.y-d[g].y),this.steps.push({x:d[g].x,y:d[g].y,time:d[g].time||0})}this._startAni()},scrollToElement:function(d,c){var b;if(d=d.nodeType?d:this.scroller.querySelector(d)){b=this._offset(d),b.left+=this.wrapperOffsetLeft,b.top+=this.wrapperOffsetTop,b.left=0<b.left?0:b.left<this.maxScrollX?this.maxScrollX:b.left,b.top=b.top>this.minScrollY?this.minScrollY:b.top<this.maxScrollY?this.maxScrollY:b.top,c=void 0===c?t.max(2*t.abs(b.left),2*t.abs(b.top)):c,this.scrollTo(b.left,b.top,c)}},scrollToPage:function(d,c,b){b=void 0===b?400:b;this.options.onScrollStart&&this.options.onScrollStart.call(this);if(this.options.snap){d="next"==d?this.currPageX+1:"prev"==d?this.currPageX-1:d,c="next"==c?this.currPageY+1:"prev"==c?this.currPageY-1:c,d=0>d?0:d>this.pagesX.length-1?this.pagesX.length-1:d,c=0>c?0:c>this.pagesY.length-1?this.pagesY.length-1:c,this.currPageX=d,this.currPageY=c,d=this.pagesX[d],c=this.pagesY[c]}else{if(d*=-this.wrapperW,c*=-this.wrapperH,d<this.maxScrollX&&(d=this.maxScrollX),c<this.maxScrollY){c=this.maxScrollY}}this.scrollTo(d,c,b)},disable:function(){this.stop();this._resetPos(0);this.enabled=!1;this._unbind(n);this._unbind(p);this._unbind(q)},enable:function(){this.enabled=!0},stop:function(){this.options.useTransition?this._unbind(O):r(this.aniTime);this.steps=[];this.animating=this.moved=!1},zoom:function(g,e,b,c){var d=b/this.scale;this.options.useTransform&&(this.zoomed=!0,c=void 0===c?200:c,g=g-this.wrapperOffsetLeft-this.x,e=e-this.wrapperOffsetTop-this.y,this.x=g-g*d+this.x,this.y=e-e*d+this.y,this.scale=b,this.refresh(),this.x=0<this.x?0:this.x<this.maxScrollX?this.maxScrollX:this.x,this.y=this.y>this.minScrollY?this.minScrollY:this.y<this.maxScrollY?this.maxScrollY:this.y,this.scroller.style[K]=c+"ms",this.scroller.style[B]="translate("+this.x+"px,"+this.y+"px) scale("+b+")"+H,this.zoomed=!1)},isReady:function(){return !this.moved&&!this.zoomed&&!this.animating}};s=null;return z}(window,document);var Scrollable=function(j,k){function i(){i._enableScrolling.apply(this,arguments)}i.node=function(){return i._getScrollableNode.apply(this,arguments)};i.infinite=function(){return i._enableInfiniteScrolling.apply(this,arguments)};if(j&&j.fn){j.extend(j.fn,{scrollable:function(b){this.forEach(function(c){i._enableScrolling(c,b)});return this},scrollableNode:function(){return j(this.map(function(){return i._getScrollableNode(this)}))},scrollableInfinite:function(c,b){var d;this.forEach(function(e){var f=i._enableInfiniteScrolling(e,c,b);if(!d){d=f}});return d}});var n=j.fn.scrollTop,l=j.fn.scrollLeft;j.fn.scrollTop=function(b){if(typeof b==="undefined"){var d=this[0],c=i._isDOMNode(d);if(c&&d._scrollTop){return d._scrollTop()}else{if(n){return n.apply(this,arguments)}else{if(c){return d.scrollTop}else{return null}}}}this.forEach(function(f){var e=i._isDOMNode(f);if(e&&f._scrollTop){f._scrollTop(b)}else{if(n){n.call(j(f),b)}else{if(e){f.scrollTop=b}}}});return this};j.fn.scrollLeft=function(b){if(typeof b==="undefined"){var d=this[0],c=i._isDOMNode(d);if(c&&d._scrollLeft){return d._scrollLeft()}else{if(n){return l.apply(this,arguments)}else{if(c){return d.scrollLeft}else{return null}}}}this.forEach(function(f){var e=i._isDOMNode(f);if(e&&f._scrollLeft){f._scrollLeft(b)}else{if(l){l.call(j(f),b)}else{if(e){f.scrollLeft=b}}}});return this}}if(k&&k.fn){k.fn.scrollable=function(b){this.each(function(){i._enableScrolling(this,b)});return this};k.fn.scrollableNode=function(){return k(this.map(function(){return i._getScrollableNode(this)}))};k.fn.scrollableInfinite=function(c,b){var d;this.each(function(){var e=i._enableInfiniteScrolling(this,c,b);if(!d){d=e}});return d};var o=k.fn.scrollTop,m=k.fn.scrollLeft;k.fn.scrollTop=function(b){if(typeof b==="undefined"){var c=this[0];if(i._isDOMNode(c)&&c._scrollTop){return c._scrollTop()}else{return o.apply(this,arguments)}}this.each(function(){if(i._isDOMNode(this)&&this._scrollTop){this._scrollTop(b)}else{o.call(k(this),b)}});return this};k.fn.scrollLeft=function(b){if(typeof b==="undefined"){var c=this[0];if(i._isDOMNode(c)&&c._scrollLeft){return c._scrollLeft()}else{return m.apply(this,arguments)}}this.each(function(){if(i._isDOMNode(this)&&this._scrollLeft){this._scrollLeft(b)}else{m.call(k(this),b)}});return this}}return i}(window.Zepto,window.jQuery);Scrollable._os=function(i,k){var l,h,m;if(m=/\bCPU.*OS (\d+(_\d+)?)/i.exec(i)){l="ios";h=m[1].replace("_",".")}else{if(m=/\bAndroid (\d+(\.\d+)?)/.exec(i)){l="android";h=m[1]}}var j={name:l,version:h&&k(h),mobile:!!l};j[l]=true;return j}(navigator.userAgent,parseFloat);Scrollable._isArray=function(c){return function(b){if(c){return c(b)}else{return Object.prototype.toString.call(b)!=="[object Array]"}}}(Array.isArray);Scrollable._isDOMNode=function(d,e){return function(b){if(!b){return false}try{return(b instanceof d)||(b instanceof e)}catch(c){}if(typeof b!=="object"){return false}if(typeof b.nodeType!=="number"){return false}if(typeof b.nodeName!=="string"){return false}return true}}(Node,HTMLElement);Scrollable._isjQueryElem=function(c){if(typeof c!=="object"||c===null){return false}else{return(c.val&&c.addClass&&c.css&&c.html&&c.show)}};Scrollable._findInArray=function(c){return function(j,h,b){if(c){return c.call(j,h,b)}for(var i=b||0,k=j.length;i<k;i++){if((i in j)&&(j[i]===h)){return i}}return -1}}(Array.prototype.indexOf);Scrollable._forEachInArray=function(c){return function(j,b,i){if(c){return c.call(j,b,i)}for(var h=0,k=j.length;h<k;h++){if(h in j){b.call(i,j[h],h,j)}}}}(Array.prototype.forEach);Scrollable._onReady=function(q,p,k){var l=[],m=false;o(n);return function(b){if(m){b()}else{l.push(b)}};function n(){if(m){return}m=true;k(l,function(b){setTimeout(b,0)})}function j(b){try{q.documentElement.doScroll("left")}catch(c){setTimeout(function(){j(b)},1);return}b()}function o(b){if(q.readyState==="complete"){setTimeout(b,0);return}if(q.addEventListener){q.addEventListener("DOMContentLoaded",b,false);p.addEventListener("load",b,false)}else{if(q.attachEvent){q.attachEvent("onreadystatechange",b);p.attachEvent("onload",b);var d=false;try{d=(p.frameElement===null)}catch(c){}if(q.documentElement.doScroll&&d){setTimeout(function(){j(b)},0)}}}}}(document,window,Scrollable._forEachInArray);Scrollable._scrollWatcher=function(d){return e;function e(t){var s=false,x=false,q=t.scrollTop;t.addEventListener("touchstart",u);t.addEventListener("touchmove",y);t.addEventListener("touchcancel",v);t.addEventListener("touchend",b);t.addEventListener("scroll",r);c();t._resetScrolling=w;return;function c(){t._isScrolling=(x||s)}function w(){x=false;s=false;c()}function p(f,g,h){if((f.touches.length<=g)&&((typeof h==="undefined")||(f.changedTouches.length<=h))){return false}f.preventDefault();w();return true}function u(f){if(p(f,1)){return}w()}function y(f){if(p(f,1)){return}s=true;q=t.scrollTop;c()}function v(f){if(p(f,0,1)){return}w()}function b(g){if(p(g,0,1)){return}var f;if(s){f=Math.abs(t.scrollTop-q);if(f>5){x=true}s=false;c()}}function r(){if(!s&&x){w()}}}}(Scrollable._os);Scrollable._enableScrolling=function(C,t,x,D,E,s,v,u){var y=z();return r;function z(){if((C.ios&&(C.version>=5))||(C.android&&(C.version>=4))){return true}else{return false}}function r(b,c){if(!t(b)){throw b+" is not a DOM element"}if(b._scrollable){return}b._scrollable=true;var d;b._scrollTop=function(f,e){if(typeof f==="undefined"){return d?Math.max(parseInt(-d.y),0):b.scrollTop}if(!d&&(!C.mobile||y)){b.scrollTop=f;e&&e();return}x(function(){d.scrollTo(d.x,Math.min(-f,0),1);e&&e()})};b._scrollLeft=function(e){if(typeof e==="undefined"){return d?Math.max(parseInt(-d.x),0):b.scrollLeft}if(!d&&(!C.mobile||y)){b.scrollLeft=e;return}x(function(){d.scrollTo(Math.min(-e,0),d.y,1)})};b.style.overflow="scroll";if(!c){if(!C.mobile){return}if(y){b.style["-webkit-overflow-scrolling"]="touch";if(C.ios){E(b)}return}}F(b,function(e){d=e})}function F(c,b){c._iScroll=true;w(c);var d=B(c);x(function(){var e=new s(c,{checkDOMChanges:true,useTransform:true,useTransition:true,hScrollbar:false,vScrollbar:false,bounce:!!C.ios,onScrollMove:d,onBeforeScrollEnd:d,onScrollEnd:function(){c._iScrolling=false;d()},onBeforeScrollStart:A,onScrollStart:function(){c._iScrolling=true}});c._iScroll=e;b(e)})}function w(c){var b=u.createElement("div"),d=Array.prototype.slice.call(c.childNodes||[]);D(d,function(e){var f=c.removeChild(e);b.appendChild(f)});c.appendChild(b);c.style.position="relative";b.style["min-height"]="100%";b.style["min-width"]="100%"}function B(c){var d,b;return function(){var e=c._scrollTop(),f=c._scrollLeft();if((e===d)&&(f===b)){return}d=e;b=f;G(c)}}function G(b){if(b.dispatchEvent){var c=u.createEvent("MouseEvents");c.initMouseEvent("scroll",false,false,v,0,0,0,0,0,false,false,false,false,0,null);b.dispatchEvent(c)}}function A(b){var c=b.target;while(c.nodeType!==1){c=c.parentNode}if((c.tagName!=="SELECT")&&(c.tagName!=="INPUT")&&(c.tagName!=="TEXTAREA")){b.preventDefault()}}}(Scrollable._os,Scrollable._isDOMNode,Scrollable._onReady,Scrollable._forEachInArray,Scrollable._scrollWatcher,iScroll,window,document);Scrollable._getScrollableNode=function(c){return function(b){if(c(b)&&b._iScroll){return b.childNodes[0]}else{return b}}}(Scrollable._isDOMNode);Scrollable._enableInfiniteScrolling=function(v,q,w,u,t,p,y,o){var x=320;return s;function s(f,R,e){if(w(f)){if(f.length){var n=f.length-1;for(var m=0;m<n;m++){s(f[m],R,e)}return s(f[n],R,e)}else{return}}if(!q(f)){throw f+" is not a DOM element"}if(!e&&typeof R==="function"){e=R;R={}}if(e){if(R.downGenerator){throw Error("Two downGenerator functions specified")}R.downGenerator=e}if((typeof R!=="object")||(R===null)){throw TypeError("options must be an object if defined, got "+R)}if(!R.downGenerator&&!R.upGenerator){throw Error("No generators specified. What are you even scrolling?")}if(typeof R.autoStart==="undefined"){R.autoStart=true}if(R.downGenerator&&typeof R.downGenerator!=="function"){throw"downGenerator "+downGenerator+" is not a function"}if(R.upGenerator&&typeof R.upGenerator!=="function"){throw"upGenerator "+upGenerator+" is not a function"}if(R.scroller&&!q(R.scroller)){throw TypeError("options.scroller must be a DOM node, got "+R.scroller)}var h=R.scroller||A(f),L=R.loading,M=R.triggerRadius,g=false,c=!R.upGenerator,k=!R.downGenerator,Q=false,b=false,P,d,i;if(w(h)){h=h[0]}if(w(L)){L=L[0]}if(L===null){L=undefined}if(typeof L!=="undefined"){if(R.downGenerator){P=z([L])[0];if(R.downGenerator){d=P.cloneNode(true)}}else{d=z([L])[0]}}if(M===null){M=undefined}switch(typeof M){case"undefined":M=x;case"number":break;default:throw TypeError("trigger radius must be a number if defined, got "+M)}if(!h){p(f);h=f}if(P){y(f).appendChild(P)}N();if(R.autoStart){T()}return{layout:T,forceLayout:j,enable:N,disable:l,destroy:S};function N(){if(g){return}if(Q){throw Error("cannot enable infinite scroller that has been destroyed")}g=true;h.addEventListener("scroll",T,false)}function l(){if(!g){return}g=false;h.removeEventListener("scroll",T)}function T(){if(!g||b||Q){return}var C=U(h,M);if(!C){return}var B=(C==="up");if(B&&(f._isScrolling||f._iScrolling)){if(i){clearTimeout(i)}i=setTimeout(function(){T()},100);return}b=true;O(B,function(D){b=false;if(D){T()}else{S(B)}})}function j(B){if(!g||Q||b){return}b=true;if(typeof B==="undefined"){B=!R.downGenerator}O(B,function(C){b=false;if(C){T()}else{S(B)}})}function O(E,C){var D=E?R.upGenerator:R.downGenerator;var B=D(G);if(typeof B!=="undefined"){G(B)}function G(Z,I){if(Q||(c&&E)||(k&&!E)){return}var ab=E?d:P;var aa=Z&&Z.length&&!I;if(Z){if(!u(Z)&&!w(Z)){Z=[Z]}Z=z(Z);var H=y(f);var J=h.scrollHeight;t(Z,function(V){F(H,V)});if(ab){F(H,ab)}var K=h.scrollHeight;if(E){var ac=K-J;h._scrollTop(h._scrollTop()+ac,function(){if(!!v.ios&&!h._iScroll){r(Z)}C(aa)})}else{C(aa)}}else{C(aa)}}function F(H,I){if(E){H.insertBefore(I,H.firstChild)}else{H.appendChild(I)}}}function S(B){if(Q){return}if(B){c=true;if(d&&d.parentNode){d.parentNode.removeChild(d)}}else{k=true;if(P&&P.parentNode){P.parentNode.removeChild(P)}}Q=(k||!R.downGenerator)&&(c||!R.upGenerator);if(Q){l()}}function U(G,B){var D=G;while(D!==document.documentElement){if(D.parentNode){D=D.parentNode}else{return false}}var F=G.clientHeight,C=(G._scrollTop?G._scrollTop():G.scrollTop),E=G.scrollHeight;if(!k&&E-C-F<=B){return"down"}else{if(!c&&C<B){return"up"}else{return false}}}}function A(b){do{if(b._scrollable){return b}b=b.parentNode}while(b)}function z(c){var b=[];t(c,function(e){switch(typeof e){case"undefined":return;case"string":var d=document.createElement("div");d.innerHTML=e;if(d.childNodes){t(z(d.childNodes),function(f){b.push(f)})}return;case"object":if(e===null){return}else{if(q(e)){b.push(e);return}else{if(w(e)){t(e,function(f){b.push(f)});return}}}default:throw TypeError("expected an element, got "+e)}});return b}function r(b){t(b,function(c){var d=c.style.webkitTransform;c.style.webkitTransform="translate3d(0,0,0)";setTimeout(function(){c.style.webkitTransform=d},0)})}}(Scrollable._os,Scrollable._isDOMNode,Scrollable._isjQueryElem,Scrollable._isArray,Scrollable._forEachInArray,Scrollable._enableScrolling,Scrollable._getScrollableNode,window.jQuery);window.App=function(c){var d={noConflict:b};return d;function b(){if(window.App===d){window.App=c}return d}}(window.App);App._Utils=function(m,o,d){var n=function(w){var u=/([^&=]+)=([^&]+)/g,s=/\+/g;var r={},q,t,v;if(w){w=w.replace(s,"%20");while((q=u.exec(w))){t=decodeURIComponent(q[1]);v=decodeURIComponent(q[2]);r[t]=v}}return r}(m.location.href.split("?")[1]);var f=function(v){var t=false,s,q,r;if(n._app_platform==="android"){t=true;s="android";q="4.4"}else{if(n._app_platform==="ios"){t=true;s="ios";q="7.0"}else{if(r=/\bCPU.*OS (\d+(_\d+)?)/i.exec(v)){s="ios";q=r[1].replace("_",".")}else{if(r=/\bAndroid (\d+(\.\d+)?)/.exec(v)){s="android";q=r[1]}}}}var u={faked:t,name:s,versionString:q,version:q&&parseFloat(q)};u[s]=true;if(u.ios){o.body.className+=" app-ios app-ios-"+parseInt(q)}else{if(u.android){o.body.className+=" app-android app-android-"+parseInt(q)}}if(u.faked||!u.ios){o.body.className+=" app-no-scrollbar"}return u}(navigator.userAgent);var l=function(q){if(q){return function(r,t,s){return q.call(r,t,s)}}else{return function(s,v,t){for(var u=0,r=s.length;u<r;u++){if(u in s){v.call(t,s[u],u,s)}}}}}(Array.prototype.forEach);function j(q){if(Array.isArray){return Array.isArray(q)}else{return Object.prototype.toString.call(q)!=="[object Array]"}}function p(r){if(!r){return false}try{return(r instanceof Node)||(r instanceof HTMLElement)}catch(q){}if(typeof r!=="object"){return false}if(typeof r.nodeType!=="number"){return false}if(typeof r.nodeName!=="string"){return false}return true}function c(q){if(typeof q!=="object"||q===null){return false}else{return(q.val&&q.addClass&&q.css&&q.html&&q.show)}}function k(r){if(o.readyState==="complete"){setTimeout(function(){r()},0);return}m.addEventListener("load",q,false);function q(){m.removeEventListener("load",q);setTimeout(function(){r()},0)}}function h(r,q){r.style["-webkit-transform"]=q;r.style["-moz-transform"]=q;r.style["-ms-transform"]=q;r.style["-o-transform"]=q;r.style.transform=q}function e(q,r){if(r){q.style["-webkit-transition"]="-webkit-"+r;q.style["-moz-transition"]="-moz-"+r;q.style["-ms-transition"]="-ms-"+r;q.style["-o-transition"]="-o-"+r;q.style.transition=r}else{q.style["-webkit-transition"]="";q.style["-moz-transition"]="";q.style["-ms-transition"]="";q.style["-o-transition"]="";q.style.transition=""}}function i(r,s){var q;if(s){q=r.style}else{q=o.defaultView.getComputedStyle(r,null)}return{display:q.display,opacity:q.opacity,paddingRight:q.paddingRight,paddingLeft:q.paddingLeft,marginRight:q.marginRight,marginLeft:q.marginLeft,borderRightWidth:q.borderRightWidth,borderLeftWidth:q.borderLeftWidth,top:q.top,left:q.left,height:q.height,width:q.width,position:q.position}}function g(r){var q=i(r);return(q.display!=="none"&&q.opacity!=="0")}function b(u,t,x,w){if(typeof u.length!=="number"){u=[u]}var s=u.map(function(y){return y.elem.style.opacity});q(function(){v(function(){r(function(){w()})})});function q(y){l(u,function(z){if(typeof z.transitionStart!=="undefined"){h(z.elem,z.transitionStart)}if(typeof z.opacityStart!=="undefined"){z.elem.style.opacity=z.opacityStart+""}});setTimeout(function(){l(u,function(B){var z=B.easing||x,A="transform "+(t/1000)+"s "+z+", opacity "+(t/1000)+"s "+z;e(B.elem,A)});setTimeout(y,0)},0)}function v(B){l(u,function(C){if(typeof C.transitionEnd!=="undefined"){h(C.elem,C.transitionEnd)}if(typeof C.opacityEnd!=="undefined"){C.elem.style.opacity=C.opacityEnd+""}});var A=u[u.length-1];A.elem.addEventListener("webkitTransitionEnd",z,false);A.elem.addEventListener("transitionend",z,false);A.elem.addEventListener("onTransitionEnd",z,false);A.elem.addEventListener("ontransitionend",z,false);A.elem.addEventListener("MSTransitionEnd",z,false);A.elem.addEventListener("transitionend",z,false);var y=false;function z(C){if(y||(C.target!==A.elem)){return}y=true;l(u,function(D){A.elem.removeEventListener("webkitTransitionEnd",z);A.elem.removeEventListener("transitionend",z);A.elem.removeEventListener("onTransitionEnd",z);A.elem.removeEventListener("ontransitionend",z);A.elem.removeEventListener("MSTransitionEnd",z);A.elem.removeEventListener("transitionend",z)});B()}}function r(y){l(u,function(z){e(z.elem,"")});setTimeout(function(){l(u,function(A,z){h(A.elem,"");A.elem.style.opacity=s[z]});y()},0)}}d.platform=f.name;d.platformVersion=f.version;return{query:n,os:f,ready:k,forEach:l,isArray:j,isNode:p,isjQueryElem:c,setTransform:h,setTransition:e,animate:b,getStyles:i,isVisible:g}}(window,document,App);App._Events=function(g){var b="__appjsCustomEventing";var e=c();return{init:f,fire:d};function c(){try{var j=document.createElement("div"),h=document.createEvent("CustomEvent");h.initEvent("fooBarFace",false,true);j.dispatchEvent(h);return true}catch(i){return false}}function f(k,l){if(e){return}if(k[b]){g.forEach(l,k[b].addEventType);return}k[b]={fire:h,addEventType:i,addEventListener:k.addEventListener,removeEventListener:k.removeEventListener};var j={};g.forEach(l,function(m){j[m]=[]});function i(m){if(l.indexOf(m)!==-1){return}l.push(m);j[m]=[]}function h(n){if(l.indexOf(n)===-1){return false}var o=false,m={preventDefault:function(){o=true}};g.forEach(j[n],function(p){setTimeout(function(){if(p.call(k,m)===false){o=true}},0)});return !o}k.addEventListener=function(m,n){if(l.indexOf(m)===-1){k[b].addEventListener.apply(this,arguments);return}var o=j[m];if(o.indexOf(n)===-1){o.push(n)}};k.removeEventListener=function(n,o){if(l.indexOf(n)===-1){k[b].removeEventListener.apply(this,arguments);return}var p=j[n],m=p.indexOf(o);if(m!==-1){p.splice(m,1)}}}function d(j,i){if(j[b]){return j[b].fire(i)}else{var h=document.createEvent("CustomEvent");h.initEvent(i,false,true);return j.dispatchEvent(h)}}}(App._Utils);App._Metrics=function(f,e){var b=false;e.enableGoogleAnalytics=function(){g()};return{watchPage:c};function g(){b=true}function d(h,i){if(!b){return}var j="/"+h;if(typeof i!=="undefined"){j+="/"+i}if(typeof f.ga==="function"){f.ga("send","pageview",j);return}if(!f._gaq){f._gaq=[]}if(typeof f._gaq.push==="function"){f._gaq.push(["_trackPageview",j])}}function c(k,i,h){var j;if((typeof h==="object")&&(typeof h.id!=="undefined")){j=h.id+""}k.addEventListener("appShow",function(){d(i,j)},false)}}(window,App);App._Dialog=function(f,j,m,d,e){var g="app-dialog-visible";var i,l;d.dialog=function(o,q){if((typeof o!=="object")||(o===null)){throw TypeError("dialog options must be an object, got "+o)}switch(typeof o.dark){case"undefined":case"boolean":break;default:throw TypeError("dialog dark mode must a boolean if defined, got "+o.dark)}switch(typeof o.title){case"undefined":case"string":break;default:throw TypeError("dialog title must be a string if defined, got "+o.title)}switch(typeof o.text){case"undefined":case"string":break;default:if(!e.isNode(o.text)){throw TypeError("dialog text must be a string if defined, got "+o.text)}}for(var p in o){if((p!=="dark")&&(p!=="rawText")&&(p!=="text")){switch(typeof o[p]){case"undefined":case"string":break;default:throw TypeError("dialog button ("+p+") must be a string if defined, got "+o[p])}}}switch(typeof q){case"undefined":q=function(){};case"function":break;default:throw TypeError("callback must be a function if defined, got "+q)}return k(o,q)};d.dialog.close=function(o){return c(o||false)};d.dialog.status=function(){return h()};return d.dialog;function n(w,u){var r=j.createElement("div");r.className+=" app-dialog-container";if(e.os.ios&&(e.os.version<=5)){r.className+=" ios5"}if(!e.os.android||(e.os.version>=4)){r.addEventListener("touchstart",function(y){if(y.target===r){y.preventDefault()}},false)}if(w.cancelButton){r.addEventListener("touchstart",function(y){if(y.target===r){c()}},false)}var q=j.createElement("div");q.className="app-dialog";if(w.dark){q.className+=" dark"}r.appendChild(q);if(w.title){var s=j.createElement("div");s.className="title";s.textContent=w.title;q.appendChild(s)}if(w.text||w.rawText){var v=j.createElement("div");v.className="text";if(e.isNode(w.text)){v.appendChild(w.text)}else{if(w.rawText){v.innerHTML=w.rawText}else{v.textContent=w.text}}q.appendChild(v)}for(var t in w){if(w[t]&&(t.substr(t.length-6)==="Button")&&(t!=="okButton")&&(t!=="cancelButton")){var x=t.substr(0,t.length-6),p=j.createElement("div");p.className="button";p.setAttribute("data-button",x);p.textContent=w[t];m(p);p.addEventListener("click",o,false);q.appendChild(p)}}if(w.okButton){var p=j.createElement("div");p.className="button ok";p.setAttribute("data-button","ok");p.textContent=w.okButton;m(p);p.addEventListener("click",o,false);q.appendChild(p)}if(w.cancelButton){var p=j.createElement("div");p.className="button cancel";p.setAttribute("data-button","cancel");p.textContent=w.cancelButton;m(p);p.addEventListener("click",o,false);q.appendChild(p)}function o(){var y=this.getAttribute("data-button");if(y==="cancel"){y=false}u(y)}return r}function k(q,u,s){if(l&&!s){l.push([q,u]);return}l=l||[];var t=false,r=n(q,p),o=r.firstChild;i=p;if(e.os.ios){r.className+=" fancy"}j.body.appendChild(r);setTimeout(function(){r.className+=" enabled";j.body.className+=" "+g},50);function p(v){if(t){return}t=true;if((typeof v!=="string")&&!q.cancelButton){t=false;return true}i=null;r.className=r.className.replace(/\benabled\b/g,"");j.body.className=j.body.className.replace(new RegExp("\\b"+g+"\\b","g"),"");setTimeout(function(){b();u(v)},0);setTimeout(function(){try{r.parentNode.removeChild(r)}catch(w){}},600);return true}}function c(o){if(i){return i(o||false)}}function h(){return !!i}function b(){if(!l){return}if(!l.length){l=null;return}var o=l.shift();o.push(true);k.apply(f,o)}}(window,document,Clickable,App,App._Utils);App._Form=function(e,b,d,f){d.form=function(g,h){if(f.isjQueryElem(g)){g.each(function(){d.form(this,h)});return}if(!f.isNode(g)){throw TypeError("form must be a DOM node, got "+g)}if(typeof h!=="function"){throw TypeError("callback must be a function, got "+h)}c(g,h)};return{};function c(j,m){var l=(j.nodeName==="FORM"),h=false,i;if(l){var k=b.createElement("input");k.style.display="none";k.type="submit";j.appendChild(k);j.addEventListener("submit",function(n){n.preventDefault();g()},false);i=j.querySelectorAll(".app-submit")}else{i=[j]}f.forEach(i,function(n){if(n.nodeName==="TEXTAREA"){isText=true}else{if(n.nodeName!=="INPUT"){isText=false}else{switch((n.type||"").toLowerCase()){case"button":case"submit":case"reset":case"hidden":isText=false;break;default:isText=true;break}}}if(isText){n.addEventListener("keydown",function(o){if(o.which===13){o.preventDefault();g()}},false)}else{n.addEventListener("click",function(o){o.preventDefault();g()},false)}});function g(){if(h){return}h=true;j.disabled=true;var p={},o=l?j.querySelectorAll("[name]"):[j],n=false;if(l){f.forEach(j.querySelectorAll("[name]"),function(q){p[q.name]=q.value})}else{p.value=j.value;if(j.name){p[j.name]=j.value}}f.forEach(o,function(q){q.disabled=true;if(q.blur){q.blur()}});if(l&&j.blur){j.blur()}m.call(this,p,function(){if(n){return}n=true;f.forEach(o,function(q){q.disabled=false});h=false;j.disabled=false})}}}(window,document,App,App._Utils);App._Scroll=function(d,c,m){var p={APP_CONTENT:"app-content",APP_SCROLLABLE:"app-scrollable",APP_SCROLLHACK:"app-scrollhack",NO_SCROLL:"data-no-scroll",SCROLLABLE:"data-scrollable",LAST_SCROLL:"data-last-scroll",SCROLL_STYLE:"data-scroll-style",TOUCH_SCROLL:"-webkit-overflow-scrolling"},h="__appjsPageManager";c.infiniteScroll=function(v,t,w){if(m.isjQueryElem(v)){if(v.length){var s=v.length-1;for(var u=0;u<s;u++){c.infiniteScroll(v[u],t,w)}return c.infiniteScroll(v[s],t,w)}else{return}}if(!m.isNode(v)){throw TypeError("infinite scroll container must be a DOM node, got "+v)}return i(v,t,w)};return{setup:l,disable:o,saveScrollPosition:f,saveScrollStyle:j,restoreScrollPosition:g,restoreScrollStyle:b};function l(s){m.forEach(s.querySelectorAll("."+p.APP_CONTENT),function(t){if(t.getAttribute(p.NO_SCROLL)===null){q(t)}});m.forEach(s.querySelectorAll("["+p.SCROLLABLE+"]"),function(t){q(t)})}function q(t){var s=!!window.APP_FORCE_ISCROLL;d(t,s);t.className+=" "+p.APP_SCROLLABLE;if(!s&&m.os.ios&&m.os.version<6){t.className+=" "+p.APP_SCROLLHACK}}function o(s){m.forEach(s.querySelectorAll("*"),function(t){t.style[p.TOUCH_SCROLL]=""})}function n(t){var s=[];if(t){m.forEach(t.querySelectorAll("."+p.APP_SCROLLABLE),function(u){if(u._scrollable){s.push(u)}})}return s}function f(s){m.forEach(n(s),function(t){if(t._iScroll){return}var u=t._scrollTop();t.setAttribute(p.LAST_SCROLL,u+"")})}function j(s){m.forEach(n(s),function(u){if(u._iScroll){return}var t=u.style[p.TOUCH_SCROLL]||"";u.style[p.TOUCH_SCROLL]="";u.setAttribute(p.SCROLL_STYLE,t)})}function g(s,t){m.forEach(n(s),function(u){if(u._iScroll){return}var v=parseInt(u.getAttribute(p.LAST_SCROLL));if(v){if(!t){setTimeout(function(){u._scrollTop(v)},0)}else{u._scrollTop(v)}}})}function b(s){m.forEach(n(s),function(u){if(u._iScroll){return}var t=u.getAttribute(p.SCROLL_STYLE)||"";if(t){u.style[p.TOUCH_SCROLL]=t}});g(s,true)}function i(w,v,y){var x=e(w),u=r(x);if(!x||!u){throw Error("could not find parent app-page")}if(!v){v={}}if(typeof v.autoStart!=="boolean"){v.autoStart=false}if(typeof v.scroller==="undefined"){v.scroller=k(w)}var s=d.infinite(w,v,y),t=false;m.ready(function(){if(!t){s.enable();s.forceLayout();s.disable()}});u.ready(function(){t=true;try{s.enable()}catch(z){return}s.layout();x.addEventListener("appShow",function(){s.layout()});x.addEventListener("appDestroy",function(){s.destroy()})});return s}function e(t){var s=t;do{if(/\bapp\-page\b/.test(s.className)){return s}}while(s=s.parentNode)}function k(t){var s=t;do{if(/\bapp\-content\b/.test(s.className)){return s}}while(s=s.parentNode)}function r(s){if(s){return s[h]}}}(Scrollable,App,App._Utils);(function(k,d,i){var g={};if(d.platform==="ios"&&d.platformVersion>=5&&!i.os.faked&&(typeof kik!=="object"||kik===null||!kik.enabled)){h()}return;function h(){k.addEventListener("touchstart",function(m){var l=c(m);if(l&&!l._iScroll){if((l.scrollHeight-l.clientHeight>1)&&((l.scrollTop<=0)||(l.scrollTop+l.clientHeight>=l.scrollHeight))){e(m)}}});k.addEventListener("touchmove",function(m){var l=c(m);if(!l){m.preventDefault()}else{if(l._iScroll){m.preventDefault()}else{if(m.changedTouches){if(m.changedTouches.length===1){b(m)}j(m)}}}});k.addEventListener("touchcancel",function(l){f(l)});k.addEventListener("touchend",function(l){f(l)})}function c(m){var l=m.target;if(l){do{if(l._scrollable){break}}while(l=l.parentNode)}return l}function b(o){var n=c(o),p=o.changedTouches[0],m=g[p.identifier],l=p.pageY;if(n&&typeof m!=="undefined"){if(n.scrollTop<=0){if(m>l){delete g[p.identifier]}else{o.preventDefault()}}else{if(n.scrollTop+n.clientHeight>=n.scrollHeight){if(m<l){delete g[p.identifier]}else{o.preventDefault()}}else{delete g[p.identifier]}}}}function e(o){if(o.changedTouches){for(var n=0,m=o.changedTouches.length;n<m;n++){g[o.changedTouches[n].identifier]=o.changedTouches[n].pageY}}}function j(o){if(o.changedTouches){for(var n=0,m=o.changedTouches.length;n<m;n++){if(o.changedTouches[n].identifier in g){g[o.changedTouches[n].identifier]=o.changedTouches[n].pageY}}}}function f(p){if(p.changedTouches){for(var n=0,m=p.changedTouches.length;n<m;n++){delete g[p.changedTouches[n].identifier]}}if(p.touches){var o=[];for(var n=0,m=p.touches.length;n<m;n++){o.push(p.touches[n].identifier+"")}for(var q in g){if(o.indexOf(q)===-1){delete g[q]}}}}})(document,App,App._Utils);App._Pages=function(J,e,n,Q,G,H,R,D,p){var x="data-page",r="app-page",l="app-loaded",O="app-ios-statusbar",i="__appjsFlushReadyQueue",F="__appjsPageManager",b={SHOW:"show",HIDE:"hide",BACK:"back",FORWARD:"forward",BEFORE_BACK:"beforeBack",READY:"ready",DESTROY:"destroy",LAYOUT:"layout",ONLINE:"online",OFFLINE:"offline"};var v=false,C=!!J.APP_FORCE_ISCROLL,c={},u={},s={},N=false;h();if(J.APP_ENABLE_IOS_STATUSBAR){T()}G.add=function(U,V){if(typeof U!=="string"){V=U;U=undefined}if(!H.isNode(V)){throw TypeError("page template node must be a DOM node, got "+V)}q(V,U)};G.controller=function(U,V,W){if(typeof U!=="string"){throw TypeError("page name must be a string, got "+U)}if(typeof V!=="function"){throw TypeError("page controller must be a function, got "+V)}switch(typeof W){case"undefined":W=function(){};break;case"function":break;default:throw TypeError("page cleanup handler must be a function, got "+W)}if(V){I(U,V)}if(W){w(U,W)}};G.populator=G.controller;G.generate=function(U,V){if(typeof U!=="string"){throw TypeError("page name must be a string, got "+U)}switch(typeof V){case"undefined":V={};break;case"object":break;default:throw TypeError("page arguments must be an object if defined, got "+V)}return L(U,V)};G.destroy=function(U){if(!H.isNode(U)){throw TypeError("page node must be a DOM node, got "+U)}return g(U)};G._layout=z;G._enableIOSStatusBar=T;return{EVENTS:b,has:M,createManager:y,startGeneration:d,finishGeneration:m,fire:B,startDestruction:A,finishDestruction:k,fixContent:f,populateBackButton:o};function t(){if(v){return}v=true;var V=e.getElementsByClassName(r);for(var U=V.length;U--;){q(V[U])}e.body.className+=" "+l}function q(V,U){if(!U){U=V.getAttribute(x)}if(!U){throw TypeError("page name was not specified")}V.setAttribute(x,U);if(V.parentNode){V.parentNode.removeChild(V)}c[U]=V.cloneNode(true)}function M(U){t();return(U in c)}function S(U){if(!M(U)){throw TypeError(U+" is not a known page")}return c[U].cloneNode(true)}function I(U,V){u[U]=V}function w(U,V){s[U]=V}function K(U,X,Y,W){var V=u[U];if(!V){return}for(var Z in V){X[Z]=V[Z]}for(var Z in V.prototype){X[Z]=V.prototype[Z]}X.page=Y;X.args=W;V.call(X,Y,W)}function j(U,W,Y,V){var X=s[U];if(X){X.call(W,Y,V)}B(W,Y,b.DESTROY)}function y(W){var U={restored:W,showing:false,online:navigator.onLine};var V=[];U.ready=function(X){if(typeof X!=="function"){throw TypeError("ready must be called with a function, got "+X)}if(V){V.push(X)}else{X.call(U)}};U[i]=function(){H.ready(function(){if(!V){return}var X=V.slice();V=null;if(H.isNode(U.page)){B(U,U.page,b.READY)}H.forEach(X,function(Y){Y.call(U)})})};return U}function L(U,W){var V={},X=d(U,V,W);m(U,V,X,W);return X}function g(V){var U=V.getAttribute(x);A(U,{},V,{});k(U,{},V,{})}function d(U,X,W){var Y=S(U);var Z=[];for(var V in b){Z.push(E(b[V]))}R.init(Y,Z);D.watchPage(Y,U,W);Y[F]=X;f(Y);H.forEach(Y.querySelectorAll(".app-button"),function(aa){if(aa.getAttribute("data-no-click")!==null){return}n(aa);aa.addEventListener("click",function(){var ai=aa.getAttribute("data-target"),ae=aa.getAttribute("data-target-args"),ab=(aa.getAttribute("data-back")!==null),ah=(aa.getAttribute("data-manual-back")!==null),ac;try{ac=JSON.parse(ae)}catch(ag){}if((typeof ac!=="object")||(ac===null)){ac={}}if(!ab&&!ai){return}if(ab&&ah){return}var af=aa.getAttribute("data-clickable-class");if(af){aa.disabled=true;aa.classList.add(af)}if(ab){G.back(ad)}else{if(ai){G.load(ai,ac,{},ad)}}function ad(){if(af){aa.disabled=false;aa.classList.remove(af)}}},false)});K(U,X,Y,W);Y.addEventListener(E(b.SHOW),function(){setTimeout(function(){if(typeof X[i]==="function"){X[i]()}},0)},false);return Y}function B(V,X,W){var U=E(W),Y=P(W),Z=true;if(!R.fire(X,U)){Z=false}if(typeof V[Y]==="function"){if(V[Y]()===false){Z=false}}return Z}function E(U){return"app"+U[0].toUpperCase()+U.slice(1)}function P(U){return"on"+U[0].toUpperCase()+U.slice(1)}function m(U,W,X,V){p.setup(X)}function A(U,W,X,V){if(!H.os.ios||H.os.version<6){p.disable(X)}if(typeof W.reply==="function"){W._appNoBack=true;W.reply()}}function k(U,W,X,V){j(U,W,X,V)}function h(){J.addEventListener("orientationchange",z);J.addEventListener("resize",z);J.addEventListener("load",z);setTimeout(z,0);J.addEventListener("online",function(){if(G._Stack){H.forEach(G._Stack.get(),function(U){U[2].online=true;B(U[2],U[3],b.ONLINE)})}},false);J.addEventListener("offline",function(){if(G._Stack){H.forEach(G._Stack.get(),function(U){U[2].online=false;B(U[2],U[3],b.OFFLINE)})}},false)}function z(){f();var U;if(G._Stack){U=G._Stack.getCurrent()}if(U){B(U[2],U[3],b.LAYOUT)}setTimeout(f,0);setTimeout(f,10);setTimeout(f,100)}function f(Z){if(!Z){if(G._Navigation){Z=G._Navigation.getCurrentNode()}if(!Z){return}}var W=Z.querySelector(".app-topbar"),X=Z.querySelector(".app-content"),U=J.innerHeight;if(!X){return}if(!W){X.style.height=U+"px";return}var Y=e.defaultView.getComputedStyle(W,null),V=H.os.android?48:44;if(Y.height){V=(parseInt(Y.height)||0);if((Y.boxSizing||Y.webkitBoxSizing)!=="border-box"){V+=(parseInt(Y.paddingBottom)||0)+(parseInt(Y.paddingTop)||0);V+=(parseInt(Y.borderBottomWidth)||0)+(parseInt(Y.borderTopWidth)||0)}}X.style.height=(U-V)+"px"}function o(Y,Z){if(!Z){return}var W=Y.querySelector(".app-topbar .left.app-button"),V=Z.querySelector(".app-topbar .app-title");if(!W||!V||(W.getAttribute("data-autotitle")===null)){return}var U=V.textContent,X=W.textContent;if(!U||X){return}if(U.length>13){U=U.substr(0,12)+".."}W.textContent=U}function T(){if(N){return}N=true;e.body.className+=" "+O;H.ready(function(){setTimeout(z,6)})}}(window,document,Clickable,Scrollable,App,App._Utils,App._Events,App._Metrics,App._Scroll);App._Stack=function(k,o,q,c,x,r){var e="__APP_JS_STACK__"+k.location.pathname,i="__APP_JS_TIME__"+k.location.pathname;var j=[];q.getStack=function(){return b()};q.getPage=function(y){var z=j.length-1;switch(typeof y){case"undefined":y=z;break;case"number":if(Math.abs(y)>z){throw TypeError("absolute index cannot be greater than stack size, got "+y)}if(y<0){y=z+y}break;default:throw TypeError("page index must be a number if defined, got "+y)}return g(y)};q.removeFromStack=function(A,z){var y=j.length-1;switch(typeof A){case"undefined":A=0;break;case"number":if(Math.abs(A)>y){throw TypeError("absolute start index cannot be greater than stack size, got "+A)}if(A<0){A=y+A}break;default:throw TypeError("start index must be a number if defined, got "+A)}switch(typeof z){case"undefined":z=y;break;case"number":if(Math.abs(z)>y){throw TypeError("absolute end index cannot be greater than stack size, got "+z)}if(z<0){z=y+z}break;default:throw TypeError("end index must be a number if defined, got "+z)}if(A>z){throw TypeError("start index cannot be greater than end index")}l(A,z)};q.addToStack=function(z,y){var A=j.length-1;switch(typeof z){case"undefined":z=0;break;case"number":if(Math.abs(z)>A){throw TypeError("absolute index cannot be greater than stack size, got "+z)}if(z<0){z=A+z}break;default:throw TypeError("index must be a number if defined, got "+z)}if(!c.isArray(y)){throw TypeError("added pages must be an array, got "+y)}y=y.slice();c.forEach(y,function(C,B){if(typeof C==="string"){C=[C,{}]}else{if(c.isArray(C)){C=C.slice()}else{throw TypeError("page description must be an array (page name, arguments), got "+C)}}if(typeof C[0]!=="string"){throw TypeError("page name must be a string, got "+C[0])}switch(typeof C[1]){case"undefined":C[1]={};case"object":break;default:throw TypeError("page arguments must be an object if defined, got "+C[1])}switch(typeof C[2]){case"undefined":C[2]={};case"object":break;default:throw TypeError("page options must be an object if defined, got "+C[2])}y[B]=C});w(z,y)};q.saveStack=function(){n()};q.destroyStack=function(){s()};q.restore=m();return{get:b,getCurrent:t,getPage:g,pop:v,push:h,size:d,save:n,destroy:s};function n(){try{var z=[];for(var A=0,y=j.length;A<y;A++){if(j[A][4].restorable===false){break}z.push([j[A][0],j[A][3],j[A][2]])}localStorage[e]=JSON.stringify(z);localStorage[i]=+new Date()+""}catch(B){}}function s(){delete localStorage[e];delete localStorage[i]}function b(){return j.slice().map(f)}function d(){return j.length}function t(){var y=j[j.length-1];if(y){return f(y)}}function v(){var y=j.pop();if(y){return f(y)}}function h(y){j.push([y[0],y[3],y[4],y[1],y[2]])}function g(y){var z=j[y];if(z){return z[1]}}function f(A){var y={};for(var z in A[3]){y[z]=A[3][z]}return[A[0],y,A[4],A[1],A[2]]}function u(z,y){var A=j.splice(z,y-z);c.forEach(A,function(B){r.startDestruction(B[0],B[4],B[1],B[3]);r.finishDestruction(B[0],B[4],B[1],B[3])})}function l(z,y){q._Navigation.enqueue(function(A){u(z,y);A()})}function p(z,y,A){var C=[],B;c.forEach(y,function(E){var D=r.createManager(true),F=r.startGeneration(E[0],D,E[1]);if(!E[2].transition&&D.transition){E[2].transition=D.transition}r.populateBackButton(F,B);r.finishGeneration(E[0],D,F,E[1]);x.saveScrollPosition(F);x.saveScrollStyle(F);C.push([E[0],F,E[2],E[1],D]);B=F});C.unshift(0);C.unshift(z);Array.prototype.splice.apply(j,C)}function w(z,y){q._Navigation.enqueue(function(A){p(z,y);A()})}function m(z){var y,B;try{y=JSON.parse(localStorage[e]);storedTime=parseInt(localStorage[i]);B=y.pop()}catch(A){return}if(!B){return}return function(C,E){switch(typeof C){case"function":E=C;case"undefined":C={};case"object":if(C!==null){break}default:throw TypeError("restore options must be an object if defined, got "+C)}switch(typeof E){case"undefined":E=function(){};case"function":break;default:throw TypeError("restore callback must be a function if defined, got "+E)}if(+new Date()-storedTime>=C.maxAge){throw TypeError("restore content is too old")}if(!r.has(B[0])){throw TypeError(B[0]+" is not a known page")}c.forEach(y,function(F){if(!r.has(F[0])){throw TypeError(F[0]+" is not a known page")}});try{p(0,y,true)}catch(D){u(0,j.length);throw Error("failed to restore stack")}n();try{q.load(B[0],B[1],B[2],E)}catch(D){u(0,j.length);throw Error("failed to restore stack")}}}}(window,document,App,App._Utils,App._Scroll,App._Pages);App._Transitions=function(n,w,A,x,e,D,y,t){var c="app-transition",h="slide-left",z="implode-out",f="fade-on",u="instant",v={instant:"instant",fade:"fade","fade-on":"fade-off","fade-off":"fade-on","scale-in":"scale-out","scale-out":"scale-in","rotate-left":"rotate-right","rotate-right":"rotate-left","cube-left":"cube-right","cube-right":"cube-left","swap-left":"swap-right","swap-right":"swap-left","explode-in":"explode-out","explode-out":"explode-in","implode-in":"implode-out","implode-out":"implode-in","slide-left":"slide-right","slide-right":"slide-left","slide-up":"slide-down","slide-down":"slide-up","slideon-left":"slideoff-left","slideon-right":"slideoff-right","slideon-up":"slideoff-up","slideon-down":"slideoff-down","slideoff-left":"slideon-left","slideoff-right":"slideon-right","slideoff-up":"slideon-up","slideoff-down":"slideon-down","slideon-left-ios":"slideoff-right-ios","glideon-right":"glideoff-right","glideoff-right":"slideon-right","glideon-left":"glideoff-left","glideoff-left":"slideon-left","glideon-down":"glideoff-down","glideoff-down":"slideon-down","glideon-up":"glideoff-up","glideoff-up":"slideon-up"},b=10;var o=false,m,q,d;if(e.os.ios){k(h)}else{if(e.os.android){if(e.os.version>=4){k(z)}else{if((e.os.version<2.3)||/LT15a/i.test(navigator.userAgent)){k(u)}else{k(f)}}}}r();x.setDefaultTransition=function(F){if(typeof F==="object"){switch(e.os.name){case"android":if((e.os.version<4)&&F.androidFallback){F=F.androidFallback}else{F=F.android}break;case"ios":if((e.os.version<5)&&F.iosFallback){F=F.iosFallback}else{F=F.ios}break;default:F=F.fallback;break}if(!F){return}}if(typeof F!=="string"){throw TypeError("transition must be a string if defined, got "+F)}if(!(F in v)){throw TypeError("invalid transition type, got "+F)}k(F)};x.getDefaultTransition=function(){return m};x.getReverseTransition=function(){return q};x.enableDragTransition=function(){j()};return{REVERSE_TRANSITION:v,run:i,enableDrag:p,disableDrag:l};function k(F){m=F;q=v[m]}function g(F){if(!e.os.ios){return false}else{if(F==="slide-left"){return true}else{if(F==="slide-right"){return true}else{return false}}}}function i(K,J,H,L,G){if(!H.transition){H.transition=(G?q:m)}var F=(e.os.ios&&(e.os.version>=7)&&{"slideon-down":1,"slideoff-down":1}[H.transition]);if(!H.duration){if(!e.os.ios){H.duration=270}else{if(e.os.version<7){H.duration=325}else{if(F){H.duration=475}else{H.duration=425}}}}if(!H.easing&&F){H.easing="cubic-bezier(0.4,0.6,0.05,1)"}if(e.os.ios&&!H.easing&&(H.transition==="slideon-left-ios"||H.transition==="slideoff-right-ios")){if(e.os.version<7){H.easing="ease-in-out"}else{H.easing="cubic-bezier(0.4,0.6,0.2,1)"}}w.body.className+=" "+c;if(H.transition==="instant"){A(K,J,H,function(){setTimeout(I,0)})}else{if(g(H.transition)){s(K,J,H,I)}else{A(K,J,H,I)}}function I(){w.body.className=w.body.className.replace(new RegExp("\\b"+c+"\\b"),"");L()}}function s(I,H,O,N){var K=(O.transition==="slide-left"),F=K?H:I,L=B(H,I,K);if(!L){A(I,H,O,N);return}var M=F.style.position,J=F.style.zIndex,G=F.style.background;F.style.position="fixed";F.style.zIndex="4000";F.style.background="none";if(K){I.parentNode.insertBefore(H,I)}else{if(I.nextSibling){I.parentNode.insertBefore(H,I.nextSibling)}else{I.parentNode.appendChild(H)}}if(x._Pages){x._Pages.fixContent(I);x._Pages.fixContent(H)}if(e.os.version<7){O.easing="ease-in-out"}else{O.easing="cubic-bezier(0.4,0.6,0.2,1)"}e.animate(L,O.duration,O.easing,function(){I.parentNode.removeChild(I);F.style.position=M;F.style.zIndex=J;F.style.background=G;N()})}function B(J,L,O){var H=L.querySelector(".app-topbar"),P=L.querySelector(".app-topbar .app-title"),G=L.querySelector(".app-topbar .left.app-button"),M=L.querySelector(".app-content"),I=J.querySelector(".app-topbar"),F=J.querySelector(".app-topbar .app-title"),Q=J.querySelector(".app-topbar .left.app-button"),K=J.querySelector(".app-content"),N=[];if(!H||!I||!M||!K||!e.isVisible(H)||!e.isVisible(I)){return}if(G&&(G.getAttribute("data-noslide")!==null)){G=undefined}if(Q&&(Q.getAttribute("data-noslide")!==null)){Q=undefined}if(O){N.push({opacityStart:0,opacityEnd:1,elem:I})}else{N.push({opacityStart:1,opacityEnd:0,elem:H})}if(P){N.push({transitionStart:"translate3d(0,0,0)",transitionEnd:"translate3d("+C(Q,O)+"px,0,0)",elem:P})}if(F){N.push({transitionStart:"translate3d("+C(G,!O)+"px,0,0)",transitionEnd:"translate3d(0,0,0)",elem:F})}if(e.os.version>=5){if(G){N.push({transitionStart:"translate3d(0,0,0)",transitionEnd:"translate3d("+E(G,Q,!O)+"px,0,0)",elem:G})}if(Q){N.push({transitionStart:"translate3d("+E(Q,G,O)+"px,0,0)",transitionEnd:"translate3d(0,0,0)",elem:Q})}}if(e.os.version<7){N.push({transitionStart:"translate3d(0,0,0)",transitionEnd:"translate3d("+(O?-100:100)+"%,0,0)",elem:M},{transitionStart:"translate3d("+(O?100:-100)+"%,0,0)",transitionEnd:"translate3d(0,0,0)",elem:K})}else{N.push({transitionStart:"translate3d(0,0,0)",transitionEnd:"translate3d("+(O?-30:100)+"%,0,0)",elem:M},{transitionStart:"translate3d("+(O?100:-30)+"%,0,0)",transitionEnd:"translate3d(0,0,0)",elem:K})}return N}function E(I,H,G){var J=I.textContent.length*(e.os.version<7?10:12),F=H?(H.textContent.length*15):0;if(!G){return(F-n.innerWidth)/2}else{return(n.innerWidth-J)/2}}function C(F,G){var H=0;if(F&&(e.os.version>=5)){H=F.textContent.length*(e.os.version<7?10:12)}if(!G){return(n.innerWidth/2)}else{return(H-n.innerWidth)/2}}function j(){o=true}function r(){var H=w.querySelectorAll("meta");for(var G=0,F=H.length;G<F;G++){if((H[G].name==="app-drag-transition")&&(H[G].content==="true")){j();return}}}function p(){if(!o||!e.os.ios||(e.os.version<7)){return}var R=t.get().slice(-2),J=R[0],aa=R[1],L,ac,N,U,af;if(!J||!aa){return}var I=aa[3],Q=aa[3].querySelector(".app-topbar"),Z=aa[3].querySelector(".app-topbar .app-title"),H=aa[3].querySelector(".app-topbar .left.app-button"),ab=aa[3].querySelector(".app-content"),W=J[3],M=J[3].querySelector(".app-topbar"),ae=J[3].querySelector(".app-topbar .app-title"),V=J[3].querySelector(".app-topbar .left.app-button"),T=J[3].querySelector(".app-content");if(!I||!Q||!ab||!W||!M||!T){return}var ah=["slide-left","slideon-left-ios"];if((ah.indexOf(aa[4].transition)===-1)&&(aa[4].transition||ah.indexOf(m)===-1)){return}else{if((aa[4].transition==="slide-left")||(!aa[4].transition&&"slide-left"===m)){af=true}}var S=aa[3].style.position,O=aa[3].style.zIndex,Y=aa[3].style.background;aa[3].style.position="fixed";aa[3].style.zIndex="4000";aa[3].style.background="none";if(aa[3].nextSibling){aa[3].parentNode.insertBefore(J[3],aa[3].nextSibling)}else{aa[3].parentNode.appendChild(J[3])}y.fixContent(W);D.restoreScrollPosition(W);n.addEventListener("touchstart",F,false);n.addEventListener("touchmove",ad,false);n.addEventListener("touchcancel",X,false);n.addEventListener("touchend",X,false);var ag=false;d=function(){K();G()};function K(){n.removeEventListener("touchstart",F);n.removeEventListener("touchmove",ad);n.removeEventListener("touchcancel",X);n.removeEventListener("touchend",X)}function G(){aa[3].style.position=S;aa[3].style.zIndex=O;aa[3].style.background=Y;if(J[3].parentNode){J[3].parentNode.removeChild(J[3])}}function F(ai){if(L||N||U){return}var aj=(ai.touches&&ai.touches[0]);if(!aj||(aj.pageX>b)){return}if(!y.fire(aa[2],aa[3],y.EVENTS.BEFORE_BACK)){return}ai.preventDefault();x._Navigation.enqueue(function(ak){N=ak},true);w.body.className+=" "+c;L=ac={x:aj.pageX,y:aj.pageY};Q.style.webkitTransition="all 0s linear";if(Z){Z.style.webkitTransition="all 0s linear"}if(H){H.style.webkitTransition="all 0s linear"}ab.style.webkitTransition="all 0s linear";M.style.webkitTransition="all 0s linear";if(ae){ae.style.webkitTransition="all 0s linear"}if(V){V.style.webkitTransition="all 0s linear"}T.style.webkitTransition="all 0s linear"}function ad(aj){if(L&&aj.touches&&aj.touches[0]&&!U){if(ac){ag=(ac.x<aj.touches[0].pageX)}ac={x:aj.touches[0].pageX,y:aj.touches[0].pageY};var ai=Math.min(Math.max(0,(ac.x-L.x)/n.innerWidth),1);P(ai)}}function X(al){if(!L||!N||U){return}K();ac=(al.touches&&al.touches[0])||ac;var ak=0;if(ac){progress=(ac.x-L.x)/n.innerWidth}var ai=((progress<0.1&&!ag)||(0.9<progress&&ag));if(!ai){Q.style.webkitTransitionDuration="0.15s";if(Z){Z.style.webkitTransitionDuration="0.15s"}if(H){H.style.webkitTransitionDuration="0.15s"}ab.style.webkitTransitionDuration="0.15s";M.style.webkitTransitionDuration="0.15s";if(ae){ae.style.webkitTransitionDuration="0.15s"}if(V){V.style.webkitTransitionDuration="0.15s"}T.style.webkitTransitionDuration="0.15s"}if(ag){y.fire(aa[2],aa[3],y.EVENTS.BACK);P(1)}else{P(0)}L=ac=null;if(!ai){aa[3].addEventListener("webkitTransitionEnd",aj,false)}else{aj()}function aj(){aa[3].removeEventListener("webkitTransitionEnd",aj);if(ag){if(aa[3].parentNode){aa[3].parentNode.removeChild(aa[3])}}else{if(J[3].parentNode){J[3].parentNode.removeChild(J[3])}}aa[3].style.position=S;aa[3].style.zIndex=O;aa[3].style.background=Y;Q.style.webkitTransition="";Q.style.webkitTransform="";if(Z){Z.style.webkitTransition="";Z.style.webkitTransform=""}if(H){H.style.webkitTransition="";H.style.webkitTransform=""}ab.style.webkitTransition="";ab.style.webkitTransform="";M.style.webkitTransition="";M.style.webkitTransform="";if(ae){ae.style.webkitTransition="";ae.style.webkitTransform=""}if(V){V.style.webkitTransition="";V.style.webkitTransform=""}T.style.webkitTransition="";T.style.webkitTransform="";w.body.className=w.body.className.replace(new RegExp("\\b"+c+"\\b"),"");if(ag){y.startDestruction(aa[0],aa[2],aa[3],aa[1]);y.fixContent(W);D.restoreScrollStyle(W);aa[2].showing=false;y.fire(aa[2],aa[3],y.EVENTS.HIDE);J[2].showing=true;y.fire(J[2],W,y.EVENTS.SHOW);y.finishDestruction(aa[0],aa[2],aa[3],aa[1]);t.pop();x._Navigation.update()}d=null;N()}}function P(ai){if(af){Q.style.opacity=1-ai;if(Z){Z.style.webkitTransform="translate3d("+(ai*n.innerWidth/2)+"px,0,0)"}if(H){H.style.webkitTransform="translate3d("+(ai*(n.innerWidth-H.textContent.length*12)/2)+"px,0,0)"}if(ae){ae.style.webkitTransform="translate3d("+((1-ai)*(n.innerWidth-H.textContent.length*12)/-2)+"px,0,0)"}if(V){V.style.webkitTransform="translate3d("+((1-ai)*-150)+"%,0,0)"}}else{Q.style.webkitTransform="translate3d("+(ai*100)+"%,0,0)";M.style.webkitTransform="translate3d("+((1-ai)*-30)+"%,0,0)"}ab.style.webkitTransform="translate3d("+(ai*100)+"%,0,0)";T.style.webkitTransform="translate3d("+((1-ai)*-30)+"%,0,0)"}}function l(){if(d){d();d=null}}}(window,document,Swapper,App,App._Utils,App._Scroll,App._Pages,App._Stack);App._Navigation=function(i,l,o,g,u,p,k,d){var n=[],f=false,m,e;o.current=function(){return m};o.load=function(v,x,w,y){if(typeof v!=="string"){throw TypeError("page name must be a string, got "+v)}switch(typeof x){case"function":w=x;x={};case"string":y=w;w=x;case"undefined":x={};case"object":break;default:throw TypeError("page arguments must be an object if defined, got "+x)}switch(typeof w){case"function":y=w;case"undefined":w={};case"object":break;case"string":w={transition:w};break;default:throw TypeError("options must be an object if defined, got "+w)}switch(typeof y){case"undefined":y=function(){};case"function":break;default:throw TypeError("callback must be a function if defined, got "+y)}return h(v,x,w,y)};o.back=function(v,w){switch(typeof v){case"function":w=v;case"undefined":v=undefined;case"string":break;default:throw TypeError("pageName must be a string if defined, got "+v)}switch(typeof w){case"undefined":w=function(){};case"function":break;default:throw TypeError("callback must be a function if defined, got "+w)}return c(v,w)};o.pick=function(v,y,x,w,z){if(typeof v!=="string"){throw TypeError("page name must be a string, got "+v)}switch(typeof y){case"function":x=y;y={};case"string":z=w;w=x;x=y;case"undefined":y={};case"object":break;default:throw TypeError("page arguments must be an object if defined, got "+y)}switch(typeof x){case"function":z=w;w=x;case"undefined":x={};case"object":break;case"string":x={transition:x};break;default:throw TypeError("options must be an object if defined, got "+x)}if(typeof w!=="function"){throw TypeError("callback must be a function, got "+w)}switch(typeof z){case"undefined":z=w;w=function(){};case"function":break;default:throw TypeError("callback must be a function, got "+z)}return q(v,y,x,w,z)};return{getCurrentNode:s,update:t,enqueue:r};function r(w,v){if(f){n.push(w);return false}f=true;if(!v){d.disableDrag()}w(function(){k.save();f=false;if(!b()){d.enableDrag()}});return true}function b(){if(n.length){r(n.shift());return true}else{return false}}function s(){return e}function t(){var v=k.getCurrent();m=v[0];e=v[3]}function h(v,x,w,z,y){r(function(B){var E=e,I=p.createManager(false);if(y){y(I)}var F=p.startGeneration(v,I,x),K=k.getCurrent(),G=K&&K[3],C=K&&K[2];if(!w.transition&&I.transition){w.transition=I.transition}p.populateBackButton(F,E||G);if(!m){o.restore=null;l.body.appendChild(F);p.fire(I,F,p.EVENTS.LAYOUT);D();H()}else{u.saveScrollPosition(e);var A={};for(var J in w){A[J]=w[J]}j(function(L){d.run(e,F,A,function(){p.fixContent(F);L();H()});p.fire(I,F,p.EVENTS.LAYOUT)});D()}function D(){m=v;e=F;k.push([v,x,I,F,w]);if(E&&C){p.fire(C,E,p.EVENTS.FORWARD)}}function H(){u.saveScrollStyle(E);p.finishGeneration(v,I,F,x);B();z();if(E&&C){C.showing=false;p.fire(C,E,p.EVENTS.HIDE)}I.showing=true;p.fire(I,F,p.EVENTS.SHOW)}});if(!p.has(v)){return false}}function c(C,B){if(g.status()&&g.close()&&!C){B();return}var w=k.get().map(function(D){return D[0]});if(!w.length){throw Error(C+" is not currently in the stack, cannot go back to it")}if(C){var x=-1;for(var y=w.length-1;y>=0;y--){if(w[y]===C){x=y;break}}if(x===-1){throw Error(C+" is not currently in the stack, cannot go back to it")}if(x!==w.length-2){o.removeFromStack(x+1)}}var A=w.length,z=false;var v=r(function(K){if(k.size()<2){K();return}var J=k.getCurrent();if(!p.fire(J[2],J[3],p.EVENTS.BEFORE_BACK)){z=true;K();return}else{k.pop()}var H=k.getCurrent(),D=H[0],G=H[3],E=J[4];p.fire(J[2],J[3],p.EVENTS.BACK);p.fixContent(G);p.startDestruction(J[0],J[2],J[3],J[1]);u.restoreScrollPosition(G);var I={};for(var F in E){if(F==="transition"){I[F]=d.REVERSE_TRANSITION[E[F]]||E[F]}else{I[F]=E[F]}}j(function(L){d.run(e,G,I,function(){p.fixContent(G);u.restoreScrollStyle(G);L();J[2].showing=false;p.fire(J[2],J[3],p.EVENTS.HIDE);H[2].showing=true;p.fire(H[2],G,p.EVENTS.SHOW);setTimeout(function(){p.finishDestruction(J[0],J[2],J[3],J[1]);K();B()},0)},true);p.fixContent(G);p.fire(H[2],G,p.EVENTS.LAYOUT)});m=D;e=G});if(z||(v&&(A<2))){return false}}function q(v,y,x,w,A){var z=false;h(v,y,x,w,function(B){B.restorable=false;B.reply=function(){if(!z){z=true;if(!B._appNoBack){c(undefined,function(){})}A.apply(o,arguments)}}})}function j(v){var x=false;var w=l.createElement("div");w.className="app-clickblocker";l.body.appendChild(w);w.addEventListener("touchstart",function(y){y.preventDefault()},false);v(function(){if(x){return}x=true;l.body.removeChild(w)})}}(window,document,App,App._Dialog,App._Scroll,App._Pages,App._Stack,App._Transitions);
Blend.lightInit({
    ak: 'NI3lwuv8vVGBGGC0mzmAmIL3', //从百度开放云平台获取
    module: ["app", "account"] //根据勾选的模块生成
});

function getNews() {
    return $.get("/app/api/news", {}, "json");
}

function signup(name, desc) {
    return $.post("/app/api/signup", {
        name: name,
        desc: desc
    }, "json");
}

function signupActivity(newsId, name, desc) {
    return $.post("/app/api/signupActivity", {
        id: newsId,
        name: name,
        desc: desc
    }, "json");
}

function feedback(message) {
    return $.post('/app/api/feedback', {
        message: message
    }, "json");
}

function HomeController(page) {
    this.page = page;
    this.$page = $(page);
    this.$news = this.$page.find('.news');

    var self = this;
    this.$news.on('click', 'li', function() {
        var $this = $(this);
        var id = $this.data('id');
        var detail;
        for (var i = 0; i < self.news.length; i++) {
            var item = self.news[i];
            if (item.id == id) {
                detail = item;
                break;
            }
        }
        App.load('news-detail', detail || {});
    });

    this.news = [];
    this.tpl = _.template(multiline(function() {
        /*@preserve
        <li class='article' data-id='<%= id %>'>
            <div class="title">
                <span class="title-inner"><%= title %></span>
            </div>
            <div class="detail">
                <span class="date"><%= date %></span>
                <% if (tags) { %>
                    <% _.each(tags, function(tag) { %>
                        <span class="tag"><%= tag %></span>
                    <% }); %>
                <% } %>
            </div>
            <div class="cover">
                <img src='<%- cover %>'>
            </div>
            <div class="desc">
                <%= desc %>
            </div>
         </li>
         */
    }));
}

HomeController.prototype.onReady = function() {
    $('.wheel-button').removeClass("weak");

    getNews().then(function(data) {
        if (data.ret_code !== 0) {
            return;
        }

        this.news = data.news;
        this.news.forEach(function(item) {
            var $item = $(this.tpl(item)).appendTo(this.$news);
            if (item.headline) {
                $item.addClass('headline');
            }
        }.bind(this));
    }.bind(this));
}

App.controller('news', HomeController);

function NewsDetailController(page, detail) {
    $('.wheel-button').addClass("weak");

    this.detail = detail;
    this.page = page;
    this.$page = $(page);
    this.$detail = this.$page.find('.article');

    this.$form = this.$page.find('form');
    this.form = this.$form[0];
    this.$button = this.$form.find('.app-button');

    this.$form.submit(function(e) {
        e.preventDefault();
        this.$button.addClass('loading');
        signupActivity(this.detail.id, this.form.name.value, this.form.desc.value).then(function(data) {
            if (data.ret_code !== 0) {
                return swal({
                    title: '网络异常',
                    type: 'error',
                    confirmButtonText: '确认'
                });
            }

            swal({
                title: '发送成功',
                type: 'success',
                confirmButtonText: '确认'
            });
        }, function() {
            swal({
                title: '网络异常',
                type: 'error',
                confirmButtonText: '确认'
            });
        });
    }.bind(this));

    this.tpl = _.template(multiline(function() {
        /*@preserve
            <div class="title">
                <span class="title-inner"><%= title %></span>
            </div>
            <div class="detail">
                <span class="date"><%= date %></span>
                <% if (tags) { %>
                    <% _.each(tags, function(tag) { %>
                        <span class="tag"><%= tag %></span>
                    <% }); %>
                <% } %>
            </div>
            <div class="cover">
                <img src='<%- cover %>'>
            </div>
            <div class="desc">
                <%= desc %>
            </div>
         */
    }));
}

NewsDetailController.onReady = function() {
    this.detail.desc = this.detail.content;
    $(this.tpl(this.detail)).appendTo(this.$detail);

    if (this.detail.headline) {
        this.$detail.addClass("headline");
    }
};

App.controller('news-detail', NewsDetailController);

App.controller('feedback', function(page) {
    var $form = $(page).find('form');
    var form = $form[0];

    $form.submit(function(e) {
        e.preventDefault();
        feedback(form.feedback.value).then(function(data) {
            if (data.ret_code !== 0) {
                return swal({
                    title: '网络异常',
                    type: 'error',
                    confirmButtonText: '确认'
                });
            }

            swal({
                title: '发送成功',
                type: 'success',
                confirmButtonText: '确认'
            });
        }, function() {
            swal({
                title: '网络异常',
                type: 'error',
                confirmButtonText: '确认'
            });
        });
    })
});

App.controller('resume', function(page) {
    var $form = $(page).find('form');
    var form = $form[0];

    $form.submit(function(e) {
        e.preventDefault();
        signup(form.name.value, form.desc.value).then(function(data) {
            if (data.ret_code !== 0) {
                return swal({
                    title: '网络异常',
                    type: 'error',
                    confirmButtonText: '确认'
                });
            }

            swal({
                title: '发送成功',
                type: 'success',
                confirmButtonText: '确认'
            });
        }, function() {
            swal({
                title: '网络异常',
                type: 'error',
                confirmButtonText: '确认'
            });
        });
    });
});

App.controller('login', function(page) {
    var loginBaiduButton = $(page).find('.baidu button');
    loginBaiduButton.click(function() {
        Blend.mbaas.account.login({
            redirect_uri: 'http://community.jarvys.me/app/callback',
            onsuccess: function() {
                console.re.log('login success!');
            },
            onfail: function(e) {
                console.re.error(e);
            }
        });
    });
});

var AppRouter = Backbone.Router.extend({
    routes: {
        'aboutme': 'aboutme',
        'resume': 'resume',
        'feedback': 'feedback',
        'news': 'news',
        'login': 'login'
    },

    login: function() {
        App.load('news', function() {
            App.load('login');
        });
    },

    aboutme: function() {
        App.load('news', function() {
            App.load('aboutme');
        });
    },

    resume: function() {
        App.load('news', function() {
            App.load('resume');
        });
    },

    news: function() {
        App.load('news');
    },

    feedback: function() {
        App.load('news', function() {
            App.load('feedback');
        });
    }
});

$(function() {
    var router = new AppRouter();
    if (!Backbone.history.start({
        hashChange: true
    })) {
        Backbone.history.navigate('news', {
            replace: true,
            trigger: true
        });
    }

    $(".wheel-button").wheelmenu({
        trigger: "click",
        animation: "fly",
        animationSpeed: "fast",
        angle: "NE",
    });

    $('.wheel .aboutme a').on('tap', function(e) {
        e.preventDefault();
        App.load('aboutme');
    });

    $('.wheel .feedback a').on('tap', function(e) {
        e.preventDefault();
        App.load('feedback');
    });

    $('.wheel .resume a').on('tap', function(e) {
        e.preventDefault();
        App.load('resume');
    });

    $('.wheel .personality a').on('tap', function(e) {
        e.preventDefault();
        App.load('login');
    });
});
