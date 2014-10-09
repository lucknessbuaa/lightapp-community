/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/**
 * @fileOverview
 * Copyright (c) 2013 Aaron Gloege
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
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
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * jQuery Tap Plugin
 * Using the tap event, this plugin will properly simulate a click event
 * in touch browsers using touch events, and on non-touch browsers,
 * click will automatically be used instead.
 *
 * @author Aaron Gloege
 * @version 1.1.0
 */
(function(document, $) {
    'use strict';

    /**
     * Event namespace
     *
     * @type String
     * @final
     */
    var HELPER_NAMESPACE = '._tap';

    /**
     * Event namespace
     *
     * @type String
     * @final
     */
    var HELPER_ACTIVE_NAMESPACE = '._tapActive';

    /**
     * Event name
     *
     * @type String
     * @final
     */
    var EVENT_NAME = 'tap';

    /**
     * Event variables to copy to touches
     *
     * @type String[]
     * @final
     */
    var EVENT_VARIABLES = 'clientX clientY screenX screenY pageX pageY'.split(' ');

    /**
     * jQuery body object
     *
     * @type jQuery
     */
    var $BODY;

    /**
     * Last canceled tap event
     *
     * @type jQuery.Event
     * @private
     */
    var _lastTap;

    /**
     * Last touchstart event
     *
     * @type jQuery.Event
     * @private
     */
    var _lastTouch;

    /**
     * Object for tracking current touch
     *
     * @type Object
     * @static
     */
    var TOUCH_VALUES = {

        /**
         * Number of touches currently active on touchstart
         *
         * @property count
         * @type Number
         */
        count: 0,

        /**
         * touchstart/mousedown jQuery.Event object
         *
         * @property event
         * @type jQuery.Event
         */
        event: 0

    };

    /**
     * Create a new event from the original event
     * Copy over EVENT_VARIABLES from the original jQuery.Event
     *
     * @param {String} type
     * @param {jQuery.Event} e
     * @return {jQuery.Event}
     * @private
     */
    var _createEvent = function(type, e) {
        var originalEvent = e.originalEvent;
        var event = $.Event(originalEvent);

        event.type = type;

        var i = 0;
        var length = EVENT_VARIABLES.length;

        for (; i < length; i++) {
            event[EVENT_VARIABLES[i]] = e[EVENT_VARIABLES[i]];
        }

        return event;
    };

    /**
     * Determine if a valid tap event
     *
     * @param {jQuery.Event} e
     * @return {Boolean}
     * @private
     */
    var _isTap = function(e) {
        if (e.isTrigger) {
            return false;
        }

        var startEvent = TOUCH_VALUES.event;
        var xDelta = Math.abs(e.pageX - startEvent.pageX);
        var yDelta = Math.abs(e.pageY - startEvent.pageY);
        var delta = Math.max(xDelta, yDelta);

        return (
            e.timeStamp - startEvent.timeStamp < $.tap.TIME_DELTA &&
            delta < $.tap.POSITION_DELTA &&
            (!startEvent.touches || TOUCH_VALUES.count === 1) &&
            Tap.isTracking
        );
    };

    /**
     * Determine if mousedown event was emulated from the last touchstart event
     *
     * @function
     * @param {jQuery.Event} e
     * @returns {Boolean}
     * @private
     */
    var _isEmulated = function(e) {
        if (!_lastTouch) {
            return false;
        }

        var xDelta = Math.abs(e.pageX - _lastTouch.pageX);
        var yDelta = Math.abs(e.pageY - _lastTouch.pageY);
        var delta = Math.max(xDelta, yDelta);

        return (
            Math.abs(e.timeStamp - _lastTouch.timeStamp) < 750 &&
            delta < $.tap.POSITION_DELTA
        );
    };

    /**
     * Normalize touch events with data from first touch in the jQuery.Event
     *
     * This could be done using the `jQuery.fixHook` api, but to avoid conflicts
     * with other libraries that might already have applied a fix hook, this
     * approach is used instead.
     *
     * @param {jQuery.Event} event
     * @private
     */
    var _normalizeEvent = function(event) {
        if (event.type.indexOf('touch') === 0) {
            event.touches = event.originalEvent.changedTouches;
            var touch = event.touches[0];

            var i = 0;
            var length = EVENT_VARIABLES.length;

            for (; i < length; i++) {
                event[EVENT_VARIABLES[i]] = touch[EVENT_VARIABLES[i]];
            }
        }

        // Normalize timestamp
        event.timeStamp = Date.now ? Date.now() : +new Date();
    };

    /**
     * Tap object that will track touch events and
     * trigger the tap event when necessary
     *
     * @class Tap
     * @static
     */
    var Tap = {

        /**
         * Flag to determine if touch events are currently enabled
         *
         * @property isEnabled
         * @type Boolean
         */
        isEnabled: false,

        /**
         * Are we currently tracking a tap event?
         *
         * @property isTracking
         * @type Boolean
         */
        isTracking: false,

        /**
         * Enable touch event listeners
         *
         * @method enable
         */
        enable: function() {
            if (Tap.isEnabled) {
                return;
            }

            Tap.isEnabled = true;

            // Set body element
            $BODY = $(document.body)
                .on('touchstart' + HELPER_NAMESPACE, Tap.onStart)
                .on('mousedown' + HELPER_NAMESPACE, Tap.onStart)
                .on('click' + HELPER_NAMESPACE, Tap.onClick);
        },

        /**
         * Disable touch event listeners
         *
         * @method disable
         */
        disable: function() {
            if (!Tap.isEnabled) {
                return;
            }

            Tap.isEnabled = false;

            // unbind all events with namespace
            $BODY.off(HELPER_NAMESPACE);
        },

        /**
         * Store touch start values and target
         *
         * @method onTouchStart
         * @param {jQuery.Event} e
         */
        onStart: function(e) {
            if (e.isTrigger) {
                return;
            }

            _normalizeEvent(e);

            // Ignore non left mouse clicks
            if ($.tap.LEFT_BUTTON_ONLY && !e.touches && e.which !== 1) {
                return;
            }

            if (e.touches) {
                TOUCH_VALUES.count = e.touches.length;
            }

            if (Tap.isTracking) {
                return;
            }

            if (!e.touches && _isEmulated(e)) {
                return;
            }

            Tap.isTracking = true;

            TOUCH_VALUES.event = e;

            if (e.touches) {
                _lastTouch = e;
                $BODY
                    .on('touchend' + HELPER_NAMESPACE + HELPER_ACTIVE_NAMESPACE, Tap.onEnd)
                    .on('touchcancel' + HELPER_NAMESPACE + HELPER_ACTIVE_NAMESPACE, Tap.onCancel);
            } else {
                $BODY.on('mouseup' + HELPER_NAMESPACE + HELPER_ACTIVE_NAMESPACE, Tap.onEnd);
            }
        },

        /**
         * If touch has not been canceled, create a
         * tap event and trigger it on the target element
         *
         * @method onTouchEnd
         * @param {jQuery.Event} e
         */
        onEnd: function(e) {
            var event;

            if (e.isTrigger) {
                return;
            }

            _normalizeEvent(e);

            if (_isTap(e)) {
                event = _createEvent(EVENT_NAME, e);
                _lastTap = event;
                $(TOUCH_VALUES.event.target).trigger(event);
            }

            // Cancel active tap tracking
            Tap.onCancel(e);
        },

        /**
         * Cancel tap and remove event listeners for active tap tracking
         *
         * @method onTouchCancel
         * @param {jQuery.Event} e
         */
        onCancel: function(e) {
            if (e && e.type === 'touchcancel') {
                e.preventDefault();
            }

            Tap.isTracking = false;

            $BODY.off(HELPER_ACTIVE_NAMESPACE);
        },

        /**
         * If tap was canceled, cancel click event
         *
         * @method onClick
         * @param {jQuery.Event} e
         * @return {void|Boolean}
         */
        onClick: function(e) {
            if (
                !e.isTrigger &&
                _lastTap &&
                _lastTap.isDefaultPrevented() &&
                _lastTap.target === e.target &&
                _lastTap.pageX === e.pageX &&
                _lastTap.pageY === e.pageY &&
                e.timeStamp - _lastTap.timeStamp < 750
            ) {
                _lastTap = null;
                return false;
            }
        }

    };

    // Enable tab when document is ready
    $(document).ready(Tap.enable);

    // Configurable options
    $.tap = {
        POSITION_DELTA: 10, // Max distance between touchstart and touchend to be considered a tap
        TIME_DELTA: 400, // Max duration between touchstart and touchend to be considered a tap
        LEFT_BUTTON_ONLY: true // Only accept left mouse button actions
    };

}(document, jQuery));

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
	if (options === 'hide') {
		options = arguments[1];
		var settings = $.extend({}, defaults, options);
    	settings = predefineSpeed(settings);
		return this.each(function(){
      		var button = $(this)
      		var el = $($(this).attr("href"));
      		el.addClass("wheel");
            el.hideIcon(button, settings);
		});
	}

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
var Swapper=function(c,b){function a(e,d,f,g){a._swapper(e,d,f,g)}if(c&&c.fn){c.extend(c.fn,{swapper:function(d,e,f){d=c(d)[0];this.forEach(function(g){a._swapper(g,d,e,f)});return this}})}if(b&&b.fn){b.fn.swapper=function(d,e,f){d=b(d)[0];this.each(function(){a._swapper(this,d,e,f)});return this}}return a}(window.Zepto,window.jQuery);Swapper._os=function(f,d){var c,a,b;if(b=/\bCPU.*OS (\d+(_\d+)?)/i.exec(f)){c="ios";a=b[1].replace("_",".")}else{if(b=/\bAndroid (\d+(\.\d+)?)/.exec(f)){c="android";a=b[1]}}var e={name:c,version:a&&d(a)};e[c]=true;return e}(navigator.userAgent,parseFloat);Swapper._isNode=function(a,b){return function(d){if(!d){return false}try{return(d instanceof a)||(d instanceof b)}catch(c){}if(typeof d!=="object"){return false}if(typeof d.nodeType!=="number"){return false}if(typeof d.nodeName!=="string"){return false}return true}}(Node,HTMLElement);Swapper._isInDOM=function(a){return function(c,b){if(!b&&!a(c)){throw TypeError("element must be a DOM node, got "+c)}while(c=c.parentNode){if(c===document){return true}}return false}}(Swapper._isNode);Swapper._insertBefore=function(){return function(a,b){b.parentNode.insertBefore(a,b)}}();Swapper._insertAfter=function(){return function(a,c){var b=c.parentNode;if(b.lastchild===c){b.appendChild(a)}else{b.insertBefore(a,c.nextSibling)}}}();Swapper._removeNode=function(){return function(a){if(a.parentNode){a.parentNode.removeChild(a)}}}();Swapper._setTransform=function(){return function(b,a){b.style["-webkit-transform"]=a;b.style["-moz-transform"]=a;b.style["-ms-transform"]=a;b.style["-o-transform"]=a;b.style.transform=a}}();Swapper._setTransition=function(){return function(a,b){if(b){a.style["-webkit-transition"]="-webkit-"+b;a.style["-moz-transition"]="-moz-"+b;a.style["-ms-transition"]="-ms-"+b;a.style["-o-transition"]="-o-"+b;a.style.transition=b}else{a.style["-webkit-transition"]="";a.style["-moz-transition"]="";a.style["-ms-transition"]="";a.style["-o-transition"]="";a.style.transition=""}}}();Swapper._getStyles=function(a){return function(c,d){var b;if(d){b=c.style}else{b=a.defaultView.getComputedStyle(c,null)}return{"-webkit-transition":b["-webkit-transition"],"-moz-transition":b["-moz-transition"],"-ms-transition":b["-ms-transition"],"-o-transition":b["-o-transition"],transition:b.transition,display:b.display,opacity:b.opacity,top:b.top,left:b.left,height:b.height,width:b.width,position:b.position}}}(document);Swapper._easings={linear:"linear",ease:"ease","ease-in":"ease-in","ease-out":"ease-out","ease-in-out":"ease-in-out","step-start":"step-start","step-end":"step-end"};Swapper._transitions={fade:[{fade:true},{fade:true}],"fade-on":[{fade:true},{}],"fade-off":[{},{fade:true},true],"scale-in":[{transform:"scale(0.01)"},{}],"scale-out":[{},{transform:"scale(0.01)"},true],"rotate-left":[{transform:"rotateY(-180deg) perspective(360px)",fade:true},{transform:"rotateY( 180deg) perspective(360px)",fade:true}],"rotate-right":[{transform:"rotateY( 180deg) perspective(360px)",fade:true},{transform:"rotateY(-180deg) perspective(360px)",fade:true}],"cube-left":[{transform:"translate3d( 50%,0,0) rotateY(-90deg) perspective(360px)"},{transform:"translate3d(-50%,0,0) rotateY( 90deg) perspective(360px)"}],"cube-right":[{transform:"translate3d(-50%,0,0) rotateY( 90deg) perspective(360px)"},{transform:"translate3d( 50%,0,0) rotateY(-90deg) perspective(360px)"}],"swap-left":[{transform:"translate3d( 65%,0,0) rotateY( 90deg) perspective(360px)"},{transform:"translate3d(-65%,0,0) rotateY(-90deg) perspective(360px)"}],"swap-right":[{transform:"translate3d(-65%,0,0) rotateY(-90deg) perspective(360px)"},{transform:"translate3d( 65%,0,0) rotateY( 90deg) perspective(360px)"}],"explode-in":[{fade:true,transform:"scale(1.25)"},{}],"explode-out":[{},{fade:true,transform:"scale(1.25)"},true],"implode-in":[{},{fade:true,transform:"scale(0.60)"},true],"implode-out":[{fade:true,transform:"scale(0.80)"},{}],"slide-left":[{transform:"translate3d( 100%,0,0)"},{transform:"translate3d(-100%,0,0)"}],"slide-right":[{transform:"translate3d(-100%,0,0)"},{transform:"translate3d( 100%,0,0)"}],"slide-up":[{transform:"translate3d(0, 100%,0)"},{transform:"translate3d(0,-100%,0)"}],"slide-down":[{transform:"translate3d(0,-100%,0)"},{transform:"translate3d(0, 100%,0)"}],"slideon-left":[{transform:"translate3d(-100%,0,0)"},{}],"slideoff-left":[{},{transform:"translate3d(-100%,0,0)"},true],"slideon-right":[{transform:"translate3d(100%,0,0)"},{}],"slideoff-right":[{},{transform:"translate3d(100%,0,0)"},true],"slideon-up":[{transform:"translate3d(0,-100%,0)"},{}],"slideoff-up":[{},{transform:"translate3d(0,-100%,0)"},true],"slideon-down":[{transform:"translate3d(0,100%,0)"},{}],"slideoff-down":[{},{transform:"translate3d(0,100%,0)"},true],"slideon-left-ios":[{transform:"translate3d(100%,0,0)"},{transform:"translate3d(-30%,0,0)"}],"slideoff-right-ios":[{transform:"translate3d(-30%,0,0)"},{transform:"translate3d(100%,0,0)"},true],"glideon-right":[{transform:"translate3d(110%,0,0)"},{transform:"translate3d(-20%,0,0)"}],"glideoff-right":[{transform:"translate3d(-20%,0,0)"},{transform:"translate3d(110%,0,0)"},true],"glideon-left":[{transform:"translate3d(-110%,0,0)"},{transform:"translate3d(20%,0,0)"}],"glideoff-left":[{transform:"translate3d(20%,0,0)"},{transform:"translate3d(-110%,0,0)"},true],"glideon-down":[{transform:"translate3d(0,110%,0)"},{transform:"translate3d(0,-20%,0)"}],"glideoff-down":[{transform:"translate3d(0,-20%,0)"},{transform:"translate3d(0,110%,0)"},true],"glideon-up":[{transform:"translate3d(0,-110%,0)"},{transform:"translate3d(0,20%,0)"}],"glideoff-up":[{transform:"translate3d(0,20%,0)"},{transform:"translate3d(0,-110%,0)"},true]};Swapper._validate=function(e,f,d){return{element:c,options:b,callback:a};function c(g){if(!e(g)){throw TypeError("element must be a DOM node, got "+g)}}function b(g){switch(typeof g){case"string":g={transition:g};break;case"undefined":g={};break;case"object":break;default:throw TypeError("options must be an object if defined, got "+g)}switch(typeof g.transition){case"string":if(!(g.transition in f)&&(g.transition!=="instant")){throw TypeError(g.transition+" is not a valid transition")}break;case"undefined":break;default:throw TypeError("transition must be a string if defined, got "+g.transition)}switch(typeof g.duration){case"number":if(g.duration<0){throw TypeError("duration must be a non-negative integer, got "+g.duration)}break;case"undefined":break;default:throw TypeError("duration must be a number if defined, got "+g.duration)}switch(typeof g.easing){case"string":if(!(g.easing in d)&&(g.easing.substr(0,13)!=="cubic-bezier(")){throw TypeError(g.easing+" is not a valid easing")}break;case"undefined":break;default:throw TypeError("easing must be a string if defined, got "+g.easing)}return g}function a(g){switch(typeof g){case"undefined":g=function(){};break;case"function":break;default:throw TypeError("callback must be a function if defined, got "+g)}return g}}(Swapper._isNode,Swapper._transitions,Swapper._easings);Swapper._swapper=function(k,w,f,e,A,x,g,h,j,D,l,q,m,s){var a="translate3d(0,0,0) scale(1)",E="fade",z="ease-in-out";var p=(k.ios&&(Math.floor(k.version)===5));function r(G,F,H,I){q.element(G);q.element(F);if(typeof H==="function"){I=H;H={}}H=q.options(H);I=q.callback(I);if(G._swapper){throw Error("elem1 is currently being swapped")}else{if(F._swapper){throw Error("elem2 is currently being swapped")}}if(!f(G,true)){throw Error("elem1 must be in the DOM to be swapped")}G._swapper=true;F._swapper=true;x(F);o(G,F,H,function(){G._swapper=false;F._swapper=false;I()})}function o(O,N,P,M){if(P.transition==="instant"){A(N,O);x(O);M();return}var L=D[P.transition||E],K=P.easing||z,J=P.duration||300;if(K.substr(0,13)!=="cubic-bezier("){K=l[K]}A(N,O);var I=j(O),H=j(N),G=j(O,true),F=j(N,true);C(O,N,I,H);if(L[2]){e(N,O)}N.style.opacity="0";u(O,N);setTimeout(function(){N.style.opacity=H.opacity;b(O,N,L);setTimeout(function(){n(O,N,J,K);setTimeout(function(){y(O,N,L);B(O,N,I,H,L,J,function(){x(O);t(O,N,J,K);setTimeout(function(){v(O,N,G,F,L);d(O,N,G,F);setTimeout(function(){c(O,N,G,F);M()},0)},0)})},0)},0)},0)}function C(G,F,I,H){var J=G.getBoundingClientRect();if(I.display!=="none"){if(p){F.style.position="absolute"}else{F.style.position="fixed"}F.style.top=J.top+"px";F.style.left=J.left+"px"}F.style.height=H.height||I.height;F.style.width=H.width||I.width}function d(G,F,I,H){F.style.position=H.position;F.style.top=H.top;F.style.left=H.left;F.style.height=H.height;F.style.width=H.width}function b(G,F,H){g(G,a);g(F,H[0].transform||a);if(H[0].fade){F.style.opacity="0"}if(H[1].fade){G.style.opacity="1"}}function y(G,F,H){g(G,H[1].transform||a);g(F,a);if(H[0].fade){F.style.opacity="1"}if(H[1].fade){G.style.opacity="0"}}function v(G,F,I,H,J){g(G,"");g(F,"");if(J[0].fade){F.style.opacity=H.opacity}if(J[1].fade){G.style.opacity=I.opacity}}function n(G,F,H,J){var I="transform "+(H/1000)+"s "+J+",opacity "+(H/1000)+"s "+J;h(G,I);h(F,I)}function t(G,F,H,I){h(G,"");h(F,"")}function u(G,F){h(G,"");h(F,"")}function c(G,F,I,H){G.style["-webkit-transition"]=I["-webkit-transition"];G.style["-moz-transition"]=I["-moz-transition"];G.style["-ms-transition"]=I["-ms-transition"];G.style["-o-transition"]=I["-o-transition"];G.style.transition=I.transition;F.style["-webkit-transition"]=H["-webkit-transition"];F.style["-moz-transition"]=H["-moz-transition"];F.style["-ms-transition"]=H["-ms-transition"];F.style["-o-transition"]=H["-o-transition"];F.style.transition=H.transition}function i(F,G){if(F.display==="none"){return false}if(G.fade){return true}if(!G.transform){return false}else{if(G.transform===a){return false}else{return true}}}function B(Q,N,H,F,K,I,M){var G;if(i(F,K[0])){G=N;P()}else{if(i(H,K[1])){G=Q;P()}else{setTimeout(L,I)}}function P(){G.addEventListener("webkitTransitionEnd",L,false);G.addEventListener("transitionend",L,false);G.addEventListener("oTransitionEnd",L,false);G.addEventListener("otransitionend",L,false);G.addEventListener("MSTransitionEnd",L,false);G.addEventListener("transitionend",L,false)}function O(){G.removeEventListener("webkitTransitionEnd",L);G.removeEventListener("transitionend",L);G.removeEventListener("oTransitionEnd",L);G.removeEventListener("otransitionend",L);G.removeEventListener("MSTransitionEnd",L);G.removeEventListener("transitionend",L)}var J=false;function L(R){if(J||(R&&R.target&&(R.target!==G))){return}J=true;if(G){O()}M()}}return r}(Swapper._os,Swapper._isNode,Swapper._isInDOM,Swapper._insertBefore,Swapper._insertAfter,Swapper._removeNode,Swapper._setTransform,Swapper._setTransition,Swapper._getStyles,Swapper._transitions,Swapper._easings,Swapper._validate,window,document);
var Clickable=function(c,b){function a(){a._enableClicking.apply(this,arguments)}a.touchable=function(){return a._os.touchable};a.sticky=function(){a._enableStickyClick.apply(this,arguments)};if(b&&b.fn){b.fn.clickable=function(d){this.each(function(){a._enableClicking(this,d)});return this};b.fn.stickyClick=function(d){this.each(function(){a._enableStickyClick(this,d)});return this}}if(c&&c.fn){c.extend(c.fn,{clickable:function(d){this.forEach(function(e){a._enableClicking(e,d)});return this},stickyClick:function(d){this.forEach(function(e){a._enableStickyClick(e,d)});return this}})}return a}(window.Zepto,window.jQuery);Clickable._os=function(f,d){var c,a,b;if(b=/\bCPU.*OS (\d+(_\d+)?)/i.exec(f)){c="ios";a=b[1].replace("_",".")}else{if(b=/\bAndroid (\d+(\.\d+)?)/.exec(f)){c="android";a=b[1]}}var e={name:c,version:a&&d(a),touchable:!!c};e[c]=true;return e}(navigator.userAgent,parseFloat);Clickable._trimString=function(a){var b=/^\s+|\s+$/g;return function(c){return a(c).replace(b,"")}}(String);Clickable._isDOMNode=function(a,b){return function(d){if(!d){return false}try{return(d instanceof a)||(d instanceof b)}catch(c){}if(typeof d!=="object"){return false}if(typeof d.nodeType!=="number"){return false}if(typeof d.nodeName!=="string"){return false}return true}}(Node,HTMLElement);Clickable._isInDOM=function(){return function(a){while(a=a.parentNode){if(a===document){return true}}return false}}();Clickable._bindEvents=function(){return function(c,b){for(var a in b){if(c.addEventListener){c.addEventListener(a,b[a],false)}else{if(c.attachEvent){c.attachEvent("on"+a,b[a])}}}}}();Clickable._unbindEvents=function(){return function(c,b){for(var a in b){if(c.removeEventListener){c.removeEventListener(a,b[a])}}}}();Clickable._addClass=function(){return function(b,a){b.className+=" "+a}}();Clickable._removeClass=function(a){return function(c,b){c.className=a(c.className.replace(new RegExp("\\b"+b+"\\b"),""))}}(Clickable._trimString);Clickable._enableClicking=function(h,o,a,f,c,k,n){var i="active",m="data-clickable-class",g=40;var p=false,l=!!h.ios;function b(K,N){if(!o(K)){throw TypeError("element "+K+" must be a DOM element")}if(K._clickable){return}K._clickable=true;switch(typeof N){case"undefined":N=i;break;case"string":break;default:throw TypeError("active class "+N+" must be a string")}var E=false,q=false,G,F,I,J,s;K.setAttribute(m,N);K.style["-webkit-tap-highlight-color"]="rgba(255,255,255,0)";v();return;function L(P,Q){E=true;I=+new Date();G=P;F=Q;J=j(K);if(J){s=J.scrollTop;J.addEventListener("scroll",A,true)}}function H(){if(J){J.removeEventListener("scroll",A)}J=null;s=null;G=null;F=null;E=false}function A(){B()}function O(){return E}function t(){k(K,N)}function r(){n(K,N)}function v(){f(K,{click:x});if(!h.touchable){f(K,{mousedown:C,mousemove:D,mouseout:D,mouseup:z});return}if(h.ios){f(K,{DOMNodeInsertedIntoDocument:M,DOMNodeRemovedFromDocument:y});if(a(K)){M()}}else{M()}}function M(){f(K,{touchstart:w,touchmove:B,touchcancel:B,touchend:u})}function y(){c(K,{touchstart:w,touchmove:B,touchcancel:B,touchend:u})}function x(P){P=P||window.event;if(!K.disabled&&q){q=false;setTimeout(function(){p=false},0)}else{if(P.stopImmediatePropagation){P.stopImmediatePropagation()}P.preventDefault();P.stopPropagation();P.cancelBubble=true;P.returnValue=false;return false}}function C(P){q=false;if(K.disabled||!e(P.target,K)){P.preventDefault();H();return}L(P.clientX,P.clientY);t()}function D(P){P.preventDefault();H();q=false;r()}function z(P){if(K.disabled){P.preventDefault();H();q=false;return}if(!O()){P.preventDefault();q=false}else{q=true}H();r()}function w(P){q=false;if(p||K.disabled||(P.touches.length!==1)||!e(P.target,K)){H();return}p=true;var Q=P.changedTouches[0];L(Q.clientX,Q.clientY);if(J){if(J._isScrolling||(s<0)||(J.scrollHeight<s)){H();return}}var Q=I;setTimeout(function(){if(O()&&(Q===I)){t()}},g)}function B(P){q=false;H();if(P){p=false}if(K.disabled){return}r()}function u(U){var Q=O(),R=J,S=s,P=G,V=F;B();if(!Q||K.disabled){p=false;return}if(R){if(R._isScrolling||(R.scrollTop!==S)){return}}if(!U.stopImmediatePropagation){q=true;return}var T=+new Date()-I;if(T>g){q=true;d(K,P,V)}else{t();setTimeout(function(){r();q=true;d(K,P,V)},1)}}}function e(r,q){do{if(r===q){return true}else{if(r._clickable){return false}}}while(r=r.parentNode);return false}function d(s,q,t){var r=document.createEvent("MouseEvents");r.initMouseEvent("click",true,true,window,1,q||0,t||0,q||0,t||0,false,false,false,false,0,null);s.dispatchEvent(r)}function j(q){if(!h.ios||(h.version<5)){return}while(q=q.parentNode){if(q._scrollable){if(q._iScroll){return}return q}}}return b}(Clickable._os,Clickable._isDOMNode,Clickable._isInDOM,Clickable._bindEvents,Clickable._unbindEvents,Clickable._addClass,Clickable._removeClass);Clickable._enableStickyClick=function(a,c,f){var d="data-clickable-class";function e(i,h,g){if(!c(i)){throw TypeError("button must be a DOM element, got "+i)}switch(typeof h){case"string":break;case"function":g=h;h=undefined;break;default:throw TypeError("button active class must be a string if defined, got "+h)}if(typeof g!=="function"){throw TypeError("sticky click handler must be a function, got "+g)}f(i,h);i.addEventListener("click",b(i,g),false)}function b(h,g){return function(){var j=false,i=h.getAttribute(d),m;h.disabled=true;h.className+=" "+i;try{m=g.call(h,l)}catch(k){if(window.console&&window.console.error){if((typeof k==="object")&&k.stack){window.console.error(k.stack)}else{window.console.error(k+"")}}l()}if(m===false){l()}function l(){if(j){return}j=true;if(h.disabled){h.disabled=false;h.className=a(h.className.replace(new RegExp("\\b"+i+"\\b","g"),""))}}}}return e}(Clickable._trimString,Clickable._isDOMNode,Clickable._enableClicking);
var iScroll=function(an,Z){function ah(f){if(""===am){return f}f=f.charAt(0).toUpperCase()+f.substr(1);return am+f}var ao=Math,P=Z.createElement("div").style,am;a:{for(var aj=["t","webkitT","MozT","msT","OT"],Y,X=0,k=aj.length;X<k;X++){if(Y=aj[X]+"ransform",Y in P){am=aj[X].substr(0,aj[X].length-1);break a}}am=!1}var ak=am?"-"+am.toLowerCase()+"-":"",ai=ah("transform"),g=ah("transitionProperty"),ad=ah("transitionDuration"),e=ah("transformOrigin"),d=ah("transitionTimingFunction"),i=ah("transitionDelay"),ag=/android/gi.test(navigator.appVersion),W=/iphone|ipad/gi.test(navigator.appVersion),aj=/hp-tablet/gi.test(navigator.appVersion),V=ah("perspective") in P,al="ontouchstart" in an&&!aj,T=!!am,c=ah("transition") in P,af="onorientationchange" in an?"orientationchange":"resize",ac=al?"touchstart":"mousedown",U=al?"touchmove":"mousemove",S=al?"touchend":"mouseup",R=al?"touchcancel":"mouseup",ab="Moz"==am?"DOMMouseScroll":"mousewheel",aa;aa=!1===am?!1:{"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"oTransitionEnd",ms:"MSTransitionEnd"}[am];var b=an.requestAnimationFrame||an.webkitRequestAnimationFrame||an.mozRequestAnimationFrame||an.oRequestAnimationFrame||an.msRequestAnimationFrame||function(f){return setTimeout(f,1)},Q=an.cancelRequestAnimationFrame||an.webkitCancelAnimationFrame||an.webkitCancelRequestAnimationFrame||an.mozCancelRequestAnimationFrame||an.oCancelRequestAnimationFrame||an.msCancelRequestAnimationFrame||clearTimeout,ae=V?" translateZ(0)":"",aj=function(f,h){var l=this,j;l.wrapper="object"==typeof f?f:Z.getElementById(f);l.wrapper.style.overflow="hidden";l.scroller=l.wrapper.children[0];l.options={hScroll:!0,vScroll:!0,x:0,y:0,bounce:!0,bounceLock:!1,momentum:!0,lockDirection:!0,useTransform:!0,useTransition:!1,topOffset:0,checkDOMChanges:!1,handleClick:!0,hScrollbar:!0,vScrollbar:!0,fixedScrollbar:ag,hideScrollbar:W,fadeScrollbar:W&&V,scrollbarClass:"",zoom:!1,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:"scroll",snap:!1,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(m){m.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null};for(j in h){l.options[j]=h[j]}l.x=l.options.x;l.y=l.options.y;l.options.useTransform=T&&l.options.useTransform;l.options.hScrollbar=l.options.hScroll&&l.options.hScrollbar;l.options.vScrollbar=l.options.vScroll&&l.options.vScrollbar;l.options.zoom=l.options.useTransform&&l.options.zoom;l.options.useTransition=c&&l.options.useTransition;l.options.zoom&&ag&&(ae="");l.scroller.style[g]=l.options.useTransform?ak+"transform":"top left";l.scroller.style[ad]="0";l.scroller.style[e]="0 0";l.options.useTransition&&(l.scroller.style[d]="cubic-bezier(0.33,0.66,0.66,1)");l.options.useTransform?l.scroller.style[ai]="translate("+l.x+"px,"+l.y+"px)"+ae:l.scroller.style.cssText+=";position:absolute;top:"+l.y+"px;left:"+l.x+"px";l.options.useTransition&&(l.options.fixedScrollbar=!0);l.refresh();l._bind(af,an);l._bind(ac);al||(l._bind("mouseout",l.wrapper),"none"!=l.options.wheelAction&&l._bind(ab));l.options.checkDOMChanges&&(l.checkDOMTime=setInterval(function(){l._checkDOMChanges()},500))};aj.prototype={enabled:!0,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(f){switch(f.type){case ac:if(!al&&0!==f.button){break}this._start(f);break;case U:this._move(f);break;case S:case R:this._end(f);break;case af:this._resize();break;case ab:this._wheel(f);break;case"mouseout":this._mouseout(f);break;case aa:this._transitionEnd(f)}},_checkDOMChanges:function(){!this.moved&&(!this.zoomed&&!(this.animating||this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale))&&this.refresh()},_scrollbar:function(f){var h;this[f+"Scrollbar"]?(this[f+"ScrollbarWrapper"]||(h=Z.createElement("div"),this.options.scrollbarClass?h.className=this.options.scrollbarClass+f.toUpperCase():h.style.cssText="position:absolute;z-index:100;"+("h"==f?"height:7px;bottom:1px;left:2px;right:"+(this.vScrollbar?"7":"2")+"px":"width:7px;bottom:"+(this.hScrollbar?"7":"2")+"px;top:2px;right:1px"),h.style.cssText+=";pointer-events:none;"+ak+"transition-property:opacity;"+ak+"transition-duration:"+(this.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(this.options.hideScrollbar?"0":"1"),this.wrapper.appendChild(h),this[f+"ScrollbarWrapper"]=h,h=Z.createElement("div"),this.options.scrollbarClass||(h.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);"+ak+"background-clip:padding-box;"+ak+"box-sizing:border-box;"+("h"==f?"height:100%":"width:100%")+";"+ak+"border-radius:3px;border-radius:3px"),h.style.cssText+=";pointer-events:none;"+ak+"transition-property:"+ak+"transform;"+ak+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);"+ak+"transition-duration:0;"+ak+"transform: translate(0,0)"+ae,this.options.useTransition&&(h.style.cssText+=";"+ak+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),this[f+"ScrollbarWrapper"].appendChild(h),this[f+"ScrollbarIndicator"]=h),"h"==f?(this.hScrollbarSize=this.hScrollbarWrapper.clientWidth,this.hScrollbarIndicatorSize=ao.max(ao.round(this.hScrollbarSize*this.hScrollbarSize/this.scrollerW),8),this.hScrollbarIndicator.style.width=this.hScrollbarIndicatorSize+"px",this.hScrollbarMaxScroll=this.hScrollbarSize-this.hScrollbarIndicatorSize,this.hScrollbarProp=this.hScrollbarMaxScroll/this.maxScrollX):(this.vScrollbarSize=this.vScrollbarWrapper.clientHeight,this.vScrollbarIndicatorSize=ao.max(ao.round(this.vScrollbarSize*this.vScrollbarSize/this.scrollerH),8),this.vScrollbarIndicator.style.height=this.vScrollbarIndicatorSize+"px",this.vScrollbarMaxScroll=this.vScrollbarSize-this.vScrollbarIndicatorSize,this.vScrollbarProp=this.vScrollbarMaxScroll/this.maxScrollY),this._scrollbarPos(f,!0)):this[f+"ScrollbarWrapper"]&&(T&&(this[f+"ScrollbarIndicator"].style[ai]=""),this[f+"ScrollbarWrapper"].parentNode.removeChild(this[f+"ScrollbarWrapper"]),this[f+"ScrollbarWrapper"]=null,this[f+"ScrollbarIndicator"]=null)},_resize:function(){var f=this;setTimeout(function(){f.refresh()},ag?200:0)},_pos:function(f,h){this.zoomed||(f=this.hScroll?f:0,h=this.vScroll?h:0,this.options.useTransform?this.scroller.style[ai]="translate("+f+"px,"+h+"px) scale("+this.scale+")"+ae:(f=ao.round(f),h=ao.round(h),this.scroller.style.left=f+"px",this.scroller.style.top=h+"px"),this.x=f,this.y=h,this._scrollbarPos("h"),this._scrollbarPos("v"))},_scrollbarPos:function(f,h){var j="h"==f?this.x:this.y;this[f+"Scrollbar"]&&(j*=this[f+"ScrollbarProp"],0>j?(this.options.fixedScrollbar||(j=this[f+"ScrollbarIndicatorSize"]+ao.round(3*j),8>j&&(j=8),this[f+"ScrollbarIndicator"].style["h"==f?"width":"height"]=j+"px"),j=0):j>this[f+"ScrollbarMaxScroll"]&&(this.options.fixedScrollbar?j=this[f+"ScrollbarMaxScroll"]:(j=this[f+"ScrollbarIndicatorSize"]-ao.round(3*(j-this[f+"ScrollbarMaxScroll"])),8>j&&(j=8),this[f+"ScrollbarIndicator"].style["h"==f?"width":"height"]=j+"px",j=this[f+"ScrollbarMaxScroll"]+(this[f+"ScrollbarIndicatorSize"]-j))),this[f+"ScrollbarWrapper"].style[i]="0",this[f+"ScrollbarWrapper"].style.opacity=h&&this.options.hideScrollbar?"0":"1",this[f+"ScrollbarIndicator"].style[ai]="translate("+("h"==f?j+"px,0)":"0,"+j+"px)")+ae)},_start:function(f){var h=al?f.touches[0]:f,l,j;if(this.enabled){this.options.onBeforeScrollStart&&this.options.onBeforeScrollStart.call(this,f);(this.options.useTransition||this.options.zoom)&&this._transitionTime(0);this.zoomed=this.animating=this.moved=!1;this.dirY=this.dirX=this.absDistY=this.absDistX=this.distY=this.distX=0;this.options.zoom&&(al&&1<f.touches.length)&&(j=ao.abs(f.touches[0].pageX-f.touches[1].pageX),l=ao.abs(f.touches[0].pageY-f.touches[1].pageY),this.touchesDistStart=ao.sqrt(j*j+l*l),this.originX=ao.abs(f.touches[0].pageX+f.touches[1].pageX-2*this.wrapperOffsetLeft)/2-this.x,this.originY=ao.abs(f.touches[0].pageY+f.touches[1].pageY-2*this.wrapperOffsetTop)/2-this.y,this.options.onZoomStart&&this.options.onZoomStart.call(this,f));if(this.options.momentum&&(this.options.useTransform?(l=getComputedStyle(this.scroller,null)[ai].replace(/[^0-9\-.,]/g,"").split(","),j=1*l[4],l=1*l[5]):(j=1*getComputedStyle(this.scroller,null).left.replace(/[^0-9-]/g,""),l=1*getComputedStyle(this.scroller,null).top.replace(/[^0-9-]/g,"")),j!=this.x||l!=this.y)){this.options.useTransition?this._unbind(aa):Q(this.aniTime),this.steps=[],this._pos(j,l)}this.absStartX=this.x;this.absStartY=this.y;this.startX=this.x;this.startY=this.y;this.pointX=h.pageX;this.pointY=h.pageY;this.startTime=f.timeStamp||Date.now();this.options.onScrollStart&&this.options.onScrollStart.call(this,f);this._bind(U);this._bind(S);this._bind(R)}},_move:function(f){var h=al?f.touches[0]:f,o=h.pageX-this.pointX,n=h.pageY-this.pointY,m=this.x+o,l=this.y+n,j=f.timeStamp||Date.now();this.options.onBeforeScrollMove&&this.options.onBeforeScrollMove.call(this,f);if(this.options.zoom&&al&&1<f.touches.length){m=ao.abs(f.touches[0].pageX-f.touches[1].pageX),l=ao.abs(f.touches[0].pageY-f.touches[1].pageY),this.touchesDist=ao.sqrt(m*m+l*l),this.zoomed=!0,h=1/this.touchesDistStart*this.touchesDist*this.scale,h<this.options.zoomMin?h=0.5*this.options.zoomMin*Math.pow(2,h/this.options.zoomMin):h>this.options.zoomMax&&(h=2*this.options.zoomMax*Math.pow(0.5,this.options.zoomMax/h)),this.lastScale=h/this.scale,m=this.originX-this.originX*this.lastScale+this.x,l=this.originY-this.originY*this.lastScale+this.y,this.scroller.style[ai]="translate("+m+"px,"+l+"px) scale("+h+")"+ae,this.options.onZoom&&this.options.onZoom.call(this,f)}else{this.pointX=h.pageX;this.pointY=h.pageY;if(0<m||m<this.maxScrollX){m=this.options.bounce?this.x+o/2:0<=m||0<=this.maxScrollX?0:this.maxScrollX}if(l>this.minScrollY||l<this.maxScrollY){l=this.options.bounce?this.y+n/2:l>=this.minScrollY||0<=this.maxScrollY?this.minScrollY:this.maxScrollY}this.distX+=o;this.distY+=n;this.absDistX=ao.abs(this.distX);this.absDistY=ao.abs(this.distY);6>this.absDistX&&6>this.absDistY||(this.options.lockDirection&&(this.absDistX>this.absDistY+5?(l=this.y,n=0):this.absDistY>this.absDistX+5&&(m=this.x,o=0)),this.moved=!0,this._pos(m,l),this.dirX=0<o?-1:0>o?1:0,this.dirY=0<n?-1:0>n?1:0,300<j-this.startTime&&(this.startTime=j,this.startX=this.x,this.startY=this.y),this.options.onScrollMove&&this.options.onScrollMove.call(this,f))}},_end:function(s){if(!(al&&0!==s.touches.length)){var t=this,r=al?s.changedTouches[0]:s,q,p,o={dist:0,time:0},m={dist:0,time:0},n=(s.timeStamp||Date.now())-t.startTime,f=t.x,l=t.y;t._unbind(U);t._unbind(S);t._unbind(R);t.options.onBeforeScrollEnd&&t.options.onBeforeScrollEnd.call(t,s);if(t.zoomed){f=t.scale*t.lastScale,f=Math.max(t.options.zoomMin,f),f=Math.min(t.options.zoomMax,f),t.lastScale=f/t.scale,t.scale=f,t.x=t.originX-t.originX*t.lastScale+t.x,t.y=t.originY-t.originY*t.lastScale+t.y,t.scroller.style[ad]="200ms",t.scroller.style[ai]="translate("+t.x+"px,"+t.y+"px) scale("+t.scale+")"+ae,t.zoomed=!1,t.refresh(),t.options.onZoomEnd&&t.options.onZoomEnd.call(t,s)}else{if(t.moved){if(300>n&&t.options.momentum){o=f?t._momentum(f-t.startX,n,-t.x,t.scrollerW-t.wrapperW+t.x,t.options.bounce?t.wrapperW:0):o;m=l?t._momentum(l-t.startY,n,-t.y,0>t.maxScrollY?t.scrollerH-t.wrapperH+t.y-t.minScrollY:0,t.options.bounce?t.wrapperH:0):m;f=t.x+o.dist;l=t.y+m.dist;if(0<t.x&&0<f||t.x<t.maxScrollX&&f<t.maxScrollX){o={dist:0,time:0}}if(t.y>t.minScrollY&&l>t.minScrollY||t.y<t.maxScrollY&&l<t.maxScrollY){m={dist:0,time:0}}}o.dist||m.dist?(o=ao.max(ao.max(o.time,m.time),10),t.options.snap&&(m=f-t.absStartX,n=l-t.absStartY,ao.abs(m)<t.options.snapThreshold&&ao.abs(n)<t.options.snapThreshold?t.scrollTo(t.absStartX,t.absStartY,200):(m=t._snap(f,l),f=m.x,l=m.y,o=ao.max(m.time,o))),t.scrollTo(ao.round(f),ao.round(l),o)):t.options.snap?(m=f-t.absStartX,n=l-t.absStartY,ao.abs(m)<t.options.snapThreshold&&ao.abs(n)<t.options.snapThreshold?t.scrollTo(t.absStartX,t.absStartY,200):(m=t._snap(t.x,t.y),(m.x!=t.x||m.y!=t.y)&&t.scrollTo(m.x,m.y,m.time))):t._resetPos(200)}else{al&&(t.doubleTapTimer&&t.options.zoom?(clearTimeout(t.doubleTapTimer),t.doubleTapTimer=null,t.options.onZoomStart&&t.options.onZoomStart.call(t,s),t.zoom(t.pointX,t.pointY,1==t.scale?t.options.doubleTapZoom:1),t.options.onZoomEnd&&setTimeout(function(){t.options.onZoomEnd.call(t,s)},200)):this.options.handleClick&&(t.doubleTapTimer=setTimeout(function(){t.doubleTapTimer=null;for(q=r.target;1!=q.nodeType;){q=q.parentNode}"SELECT"!=q.tagName&&("INPUT"!=q.tagName&&"TEXTAREA"!=q.tagName)&&(p=Z.createEvent("MouseEvents"),p.initMouseEvent("click",!0,!0,s.view,1,r.screenX,r.screenY,r.clientX,r.clientY,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,0,null),p._fake=!0,q.dispatchEvent(p))},t.options.zoom?250:0))),t._resetPos(200)}t.options.onTouchEnd&&t.options.onTouchEnd.call(t,s)}}},_resetPos:function(f){var h=0<=this.x?0:this.x<this.maxScrollX?this.maxScrollX:this.x,j=this.y>=this.minScrollY||0<this.maxScrollY?this.minScrollY:this.y<this.maxScrollY?this.maxScrollY:this.y;if(h==this.x&&j==this.y){if(this.moved&&(this.moved=!1,this.options.onScrollEnd&&this.options.onScrollEnd.call(this)),this.hScrollbar&&this.options.hideScrollbar&&("webkit"==am&&(this.hScrollbarWrapper.style[i]="300ms"),this.hScrollbarWrapper.style.opacity="0"),this.vScrollbar&&this.options.hideScrollbar){"webkit"==am&&(this.vScrollbarWrapper.style[i]="300ms"),this.vScrollbarWrapper.style.opacity="0"}}else{this.scrollTo(h,j,f||0)}},_wheel:function(f){var h=this,l,j;if("wheelDeltaX" in f){l=f.wheelDeltaX/12,j=f.wheelDeltaY/12}else{if("wheelDelta" in f){l=j=f.wheelDelta/12}else{if("detail" in f){l=j=3*-f.detail}else{return}}}if("zoom"==h.options.wheelAction){if(j=h.scale*Math.pow(2,1/3*(j?j/Math.abs(j):0)),j<h.options.zoomMin&&(j=h.options.zoomMin),j>h.options.zoomMax&&(j=h.options.zoomMax),j!=h.scale){!h.wheelZoomCount&&h.options.onZoomStart&&h.options.onZoomStart.call(h,f),h.wheelZoomCount++,h.zoom(f.pageX,f.pageY,j,400),setTimeout(function(){h.wheelZoomCount--;!h.wheelZoomCount&&h.options.onZoomEnd&&h.options.onZoomEnd.call(h,f)},400)}}else{l=h.x+l,j=h.y+j,0<l?l=0:l<h.maxScrollX&&(l=h.maxScrollX),j>h.minScrollY?j=h.minScrollY:j<h.maxScrollY&&(j=h.maxScrollY),0>h.maxScrollY&&h.scrollTo(l,j,0)}},_mouseout:function(f){var h=f.relatedTarget;if(h){for(;h=h.parentNode;){if(h==this.wrapper){return}}}this._end(f)},_transitionEnd:function(f){f.target==this.scroller&&(this._unbind(aa),this._startAni())},_startAni:function(){var f=this,h=f.x,o=f.y,n=Date.now(),m,l,j;f.animating||(f.steps.length?(m=f.steps.shift(),m.x==h&&m.y==o&&(m.time=0),f.animating=!0,f.moved=!0,f.options.useTransition)?(f._transitionTime(m.time),f._pos(m.x,m.y),f.animating=!1,m.time?f._bind(aa):f._resetPos(0)):(j=function(){var q=Date.now(),p;if(q>=n+m.time){f._pos(m.x,m.y);f.animating=false;f.options.onAnimationEnd&&f.options.onAnimationEnd.call(f);f._startAni()}else{q=(q-n)/m.time-1;l=ao.sqrt(1-q*q);q=(m.x-h)*l+h;p=(m.y-o)*l+o;f._pos(q,p);if(f.animating){f.aniTime=b(j)}}},j()):f._resetPos(400))},_transitionTime:function(f){f+="ms";this.scroller.style[ad]=f;this.hScrollbar&&(this.hScrollbarIndicator.style[ad]=f);this.vScrollbar&&(this.vScrollbarIndicator.style[ad]=f)},_momentum:function(f,h,n,m,l){var h=ao.abs(f)/h,j=h*h/0.0012;0<f&&j>n?(n+=l/(6/(0.0006*(j/h))),h=h*n/j,j=n):0>f&&j>m&&(m+=l/(6/(0.0006*(j/h))),h=h*m/j,j=m);return{dist:j*(0>f?-1:1),time:ao.round(h/0.0006)}},_offset:function(f){for(var h=-f.offsetLeft,j=-f.offsetTop;f=f.offsetParent;){h-=f.offsetLeft,j-=f.offsetTop}f!=this.wrapper&&(h*=this.scale,j*=this.scale);return{left:h,top:j}},_snap:function(f,h){var m,l,j;j=this.pagesX.length-1;m=0;for(l=this.pagesX.length;m<l;m++){if(f>=this.pagesX[m]){j=m;break}}j==this.currPageX&&(0<j&&0>this.dirX)&&j--;f=this.pagesX[j];l=(l=ao.abs(f-this.pagesX[this.currPageX]))?500*(ao.abs(this.x-f)/l):0;this.currPageX=j;j=this.pagesY.length-1;for(m=0;m<j;m++){if(h>=this.pagesY[m]){j=m;break}}j==this.currPageY&&(0<j&&0>this.dirY)&&j--;h=this.pagesY[j];m=(m=ao.abs(h-this.pagesY[this.currPageY]))?500*(ao.abs(this.y-h)/m):0;this.currPageY=j;j=ao.round(ao.max(l,m))||200;return{x:f,y:h,time:j}},_bind:function(f,h,j){(h||this.scroller).addEventListener(f,this,!!j)},_unbind:function(f,h,j){(h||this.scroller).removeEventListener(f,this,!!j)},destroy:function(){this.scroller.style[ai]="";this.vScrollbar=this.hScrollbar=!1;this._scrollbar("h");this._scrollbar("v");this._unbind(af,an);this._unbind(ac);this._unbind(U);this._unbind(S);this._unbind(R);this.options.hasTouch||(this._unbind("mouseout",this.wrapper),this._unbind(ab));this.options.useTransition&&this._unbind(aa);this.options.checkDOMChanges&&clearInterval(this.checkDOMTime);this.options.onDestroy&&this.options.onDestroy.call(this)},refresh:function(){var f,h,l,j=0;h=0;this.scale<this.options.zoomMin&&(this.scale=this.options.zoomMin);this.wrapperW=this.wrapper.clientWidth||1;this.wrapperH=this.wrapper.clientHeight||1;this.minScrollY=-this.options.topOffset||0;this.scrollerW=ao.round(this.scroller.offsetWidth*this.scale);this.scrollerH=ao.round((this.scroller.offsetHeight+this.minScrollY)*this.scale);this.maxScrollX=this.wrapperW-this.scrollerW;this.maxScrollY=this.wrapperH-this.scrollerH+this.minScrollY;this.dirY=this.dirX=0;this.options.onRefresh&&this.options.onRefresh.call(this);this.hScroll=this.options.hScroll&&0>this.maxScrollX;this.vScroll=this.options.vScroll&&(!this.options.bounceLock&&!this.hScroll||this.scrollerH>this.wrapperH);this.hScrollbar=this.hScroll&&this.options.hScrollbar;this.vScrollbar=this.vScroll&&this.options.vScrollbar&&this.scrollerH>this.wrapperH;f=this._offset(this.wrapper);this.wrapperOffsetLeft=-f.left;this.wrapperOffsetTop=-f.top;if("string"==typeof this.options.snap){this.pagesX=[];this.pagesY=[];l=this.scroller.querySelectorAll(this.options.snap);f=0;for(h=l.length;f<h;f++){j=this._offset(l[f]),j.left+=this.wrapperOffsetLeft,j.top+=this.wrapperOffsetTop,this.pagesX[f]=j.left<this.maxScrollX?this.maxScrollX:j.left*this.scale,this.pagesY[f]=j.top<this.maxScrollY?this.maxScrollY:j.top*this.scale}}else{if(this.options.snap){for(this.pagesX=[];j>=this.maxScrollX;){this.pagesX[h]=j,j-=this.wrapperW,h++}this.maxScrollX%this.wrapperW&&(this.pagesX[this.pagesX.length]=this.maxScrollX-this.pagesX[this.pagesX.length-1]+this.pagesX[this.pagesX.length-1]);h=j=0;for(this.pagesY=[];j>=this.maxScrollY;){this.pagesY[h]=j,j-=this.wrapperH,h++}this.maxScrollY%this.wrapperH&&(this.pagesY[this.pagesY.length]=this.maxScrollY-this.pagesY[this.pagesY.length-1]+this.pagesY[this.pagesY.length-1])}}this._scrollbar("h");this._scrollbar("v");this.zoomed||(this.scroller.style[ad]="0",this._resetPos(200))},scrollTo:function(f,h,m,l){var j=f;this.stop();j.length||(j=[{x:f,y:h,time:m,relative:l}]);f=0;for(h=j.length;f<h;f++){j[f].relative&&(j[f].x=this.x-j[f].x,j[f].y=this.y-j[f].y),this.steps.push({x:j[f].x,y:j[f].y,time:j[f].time||0})}this._startAni()},scrollToElement:function(f,h){var j;if(f=f.nodeType?f:this.scroller.querySelector(f)){j=this._offset(f),j.left+=this.wrapperOffsetLeft,j.top+=this.wrapperOffsetTop,j.left=0<j.left?0:j.left<this.maxScrollX?this.maxScrollX:j.left,j.top=j.top>this.minScrollY?this.minScrollY:j.top<this.maxScrollY?this.maxScrollY:j.top,h=void 0===h?ao.max(2*ao.abs(j.left),2*ao.abs(j.top)):h,this.scrollTo(j.left,j.top,h)}},scrollToPage:function(f,h,j){j=void 0===j?400:j;this.options.onScrollStart&&this.options.onScrollStart.call(this);if(this.options.snap){f="next"==f?this.currPageX+1:"prev"==f?this.currPageX-1:f,h="next"==h?this.currPageY+1:"prev"==h?this.currPageY-1:h,f=0>f?0:f>this.pagesX.length-1?this.pagesX.length-1:f,h=0>h?0:h>this.pagesY.length-1?this.pagesY.length-1:h,this.currPageX=f,this.currPageY=h,f=this.pagesX[f],h=this.pagesY[h]}else{if(f*=-this.wrapperW,h*=-this.wrapperH,f<this.maxScrollX&&(f=this.maxScrollX),h<this.maxScrollY){h=this.maxScrollY}}this.scrollTo(f,h,j)},disable:function(){this.stop();this._resetPos(0);this.enabled=!1;this._unbind(U);this._unbind(S);this._unbind(R)},enable:function(){this.enabled=!0},stop:function(){this.options.useTransition?this._unbind(aa):Q(this.aniTime);this.steps=[];this.animating=this.moved=!1},zoom:function(f,h,m,l){var j=m/this.scale;this.options.useTransform&&(this.zoomed=!0,l=void 0===l?200:l,f=f-this.wrapperOffsetLeft-this.x,h=h-this.wrapperOffsetTop-this.y,this.x=f-f*j+this.x,this.y=h-h*j+this.y,this.scale=m,this.refresh(),this.x=0<this.x?0:this.x<this.maxScrollX?this.maxScrollX:this.x,this.y=this.y>this.minScrollY?this.minScrollY:this.y<this.maxScrollY?this.maxScrollY:this.y,this.scroller.style[ad]=l+"ms",this.scroller.style[ai]="translate("+this.x+"px,"+this.y+"px) scale("+m+")"+ae,this.zoomed=!1)},isReady:function(){return !this.moved&&!this.zoomed&&!this.animating}};P=null;return aj}(window,document);var Scrollable=function(h,g){function b(){b._enableScrolling.apply(this,arguments)}b.node=function(){return b._getScrollableNode.apply(this,arguments)};b.infinite=function(){return b._enableInfiniteScrolling.apply(this,arguments)};if(h&&h.fn){h.extend(h.fn,{scrollable:function(i){this.forEach(function(j){b._enableScrolling(j,i)});return this},scrollableNode:function(){return h(this.map(function(){return b._getScrollableNode(this)}))},scrollableInfinite:function(j,k){var i;this.forEach(function(m){var l=b._enableInfiniteScrolling(m,j,k);if(!i){i=l}});return i}});var d=h.fn.scrollTop,f=h.fn.scrollLeft;h.fn.scrollTop=function(k){if(typeof k==="undefined"){var i=this[0],j=b._isDOMNode(i);if(j&&i._scrollTop){return i._scrollTop()}else{if(d){return d.apply(this,arguments)}else{if(j){return i.scrollTop}else{return null}}}}this.forEach(function(l){var m=b._isDOMNode(l);if(m&&l._scrollTop){l._scrollTop(k)}else{if(d){d.call(h(l),k)}else{if(m){l.scrollTop=k}}}});return this};h.fn.scrollLeft=function(k){if(typeof k==="undefined"){var i=this[0],j=b._isDOMNode(i);if(j&&i._scrollLeft){return i._scrollLeft()}else{if(d){return f.apply(this,arguments)}else{if(j){return i.scrollLeft}else{return null}}}}this.forEach(function(l){var m=b._isDOMNode(l);if(m&&l._scrollLeft){l._scrollLeft(k)}else{if(f){f.call(h(l),k)}else{if(m){l.scrollLeft=k}}}});return this}}if(g&&g.fn){g.fn.scrollable=function(i){this.each(function(){b._enableScrolling(this,i)});return this};g.fn.scrollableNode=function(){return g(this.map(function(){return b._getScrollableNode(this)}))};g.fn.scrollableInfinite=function(j,k){var i;this.each(function(){var l=b._enableInfiniteScrolling(this,j,k);if(!i){i=l}});return i};var c=g.fn.scrollTop,e=g.fn.scrollLeft;g.fn.scrollTop=function(j){if(typeof j==="undefined"){var i=this[0];if(b._isDOMNode(i)&&i._scrollTop){return i._scrollTop()}else{return c.apply(this,arguments)}}this.each(function(){if(b._isDOMNode(this)&&this._scrollTop){this._scrollTop(j)}else{c.call(g(this),j)}});return this};g.fn.scrollLeft=function(j){if(typeof j==="undefined"){var i=this[0];if(b._isDOMNode(i)&&i._scrollLeft){return i._scrollLeft()}else{return e.apply(this,arguments)}}this.each(function(){if(b._isDOMNode(this)&&this._scrollLeft){this._scrollLeft(j)}else{e.call(g(this),j)}});return this}}return b}(window.Zepto,window.jQuery);Scrollable._os=function(g,e){var d,b,c;if(c=/\bCPU.*OS (\d+(_\d+)?)/i.exec(g)){d="ios";b=c[1].replace("_",".")}else{if(c=/\bAndroid (\d+(\.\d+)?)/.exec(g)){d="android";b=c[1]}}var f={name:d,version:b&&e(b),mobile:!!d};f[d]=true;return f}(navigator.userAgent,parseFloat);Scrollable._isArray=function(b){return function(c){if(b){return b(c)}else{return Object.prototype.toString.call(c)!=="[object Array]"}}}(Array.isArray);Scrollable._isDOMNode=function(b,c){return function(e){if(!e){return false}try{return(e instanceof b)||(e instanceof c)}catch(d){}if(typeof e!=="object"){return false}if(typeof e.nodeType!=="number"){return false}if(typeof e.nodeName!=="string"){return false}return true}}(Node,HTMLElement);Scrollable._isjQueryElem=function(b){if(typeof b!=="object"||b===null){return false}else{return(b.val&&b.addClass&&b.css&&b.html&&b.show)}};Scrollable._findInArray=function(b){return function(d,f,g){if(b){return b.call(d,f,g)}for(var e=g||0,c=d.length;e<c;e++){if((e in d)&&(d[e]===f)){return e}}return -1}}(Array.prototype.indexOf);Scrollable._forEachInArray=function(b){return function(d,g,e){if(b){return b.call(d,g,e)}for(var f=0,c=d.length;f<c;f++){if(f in d){g.call(e,d[f],f,d)}}}}(Array.prototype.forEach);Scrollable._onReady=function(c,d,i){var h=[],g=false;e(f);return function(j){if(g){j()}else{h.push(j)}};function f(){if(g){return}g=true;i(h,function(j){setTimeout(j,0)})}function b(k){try{c.documentElement.doScroll("left")}catch(j){setTimeout(function(){b(k)},1);return}k()}function e(l){if(c.readyState==="complete"){setTimeout(l,0);return}if(c.addEventListener){c.addEventListener("DOMContentLoaded",l,false);d.addEventListener("load",l,false)}else{if(c.attachEvent){c.attachEvent("onreadystatechange",l);d.attachEvent("onload",l);var j=false;try{j=(d.frameElement===null)}catch(k){}if(c.documentElement.doScroll&&j){setTimeout(function(){b(l)},0)}}}}}(document,window,Scrollable._forEachInArray);Scrollable._scrollWatcher=function(b){return c;function c(i){var j=false,e=false,l=i.scrollTop;i.addEventListener("touchstart",h);i.addEventListener("touchmove",d);i.addEventListener("touchcancel",g);i.addEventListener("touchend",o);i.addEventListener("scroll",k);n();i._resetScrolling=f;return;function n(){i._isScrolling=(e||j)}function f(){e=false;j=false;n()}function m(r,q,p){if((r.touches.length<=q)&&((typeof p==="undefined")||(r.changedTouches.length<=p))){return false}r.preventDefault();f();return true}function h(p){if(m(p,1)){return}f()}function d(p){if(m(p,1)){return}j=true;l=i.scrollTop;n()}function g(p){if(m(p,0,1)){return}f()}function o(p){if(m(p,0,1)){return}var q;if(j){q=Math.abs(i.scrollTop-l);if(q>5){e=true}j=false;n()}}function k(){if(!j&&e){f()}}}}(Scrollable._os);Scrollable._enableScrolling=function(f,o,k,e,d,p,m,n){var j=i();return q;function i(){if((f.ios&&(f.version>=5))||(f.android&&(f.version>=4))){return true}else{return false}}function q(t,s){if(!o(t)){throw t+" is not a DOM element"}if(t._scrollable){return}t._scrollable=true;var r;t._scrollTop=function(u,v){if(typeof u==="undefined"){return r?Math.max(parseInt(-r.y),0):t.scrollTop}if(!r&&(!f.mobile||j)){t.scrollTop=u;v&&v();return}k(function(){r.scrollTo(r.x,Math.min(-u,0),1);v&&v()})};t._scrollLeft=function(u){if(typeof u==="undefined"){return r?Math.max(parseInt(-r.x),0):t.scrollLeft}if(!r&&(!f.mobile||j)){t.scrollLeft=u;return}k(function(){r.scrollTo(Math.min(-u,0),r.y,1)})};t.style.overflow="scroll";if(!s){if(!f.mobile){return}if(j){t.style["-webkit-overflow-scrolling"]="touch";if(f.ios){d(t)}return}}c(t,function(u){r=u})}function c(s,t){s._iScroll=true;l(s);var r=g(s);k(function(){var u=new p(s,{checkDOMChanges:true,useTransform:true,useTransition:true,hScrollbar:false,vScrollbar:false,bounce:!!f.ios,onScrollMove:r,onBeforeScrollEnd:r,onScrollEnd:function(){s._iScrolling=false;r()},onBeforeScrollStart:h,onScrollStart:function(){s._iScrolling=true}});s._iScroll=u;t(u)})}function l(s){var t=n.createElement("div"),r=Array.prototype.slice.call(s.childNodes||[]);e(r,function(v){var u=s.removeChild(v);t.appendChild(u)});s.appendChild(t);s.style.position="relative";t.style["min-height"]="100%";t.style["min-width"]="100%"}function g(s){var r,t;return function(){var v=s._scrollTop(),u=s._scrollLeft();if((v===r)&&(u===t)){return}r=v;t=u;b(s)}}function b(s){if(s.dispatchEvent){var r=n.createEvent("MouseEvents");r.initMouseEvent("scroll",false,false,m,0,0,0,0,0,false,false,false,false,0,null);s.dispatchEvent(r)}}function h(s){var r=s.target;while(r.nodeType!==1){r=r.parentNode}if((r.tagName!=="SELECT")&&(r.tagName!=="INPUT")&&(r.tagName!=="TEXTAREA")){s.preventDefault()}}}(Scrollable._os,Scrollable._isDOMNode,Scrollable._onReady,Scrollable._forEachInArray,Scrollable._scrollWatcher,iScroll,window,document);Scrollable._getScrollableNode=function(b){return function(c){if(b(c)&&c._iScroll){return c.childNodes[0]}else{return c}}}(Scrollable._isDOMNode);Scrollable._enableInfiniteScrolling=function(g,l,f,h,i,m,d,n){var e=320;return j;function j(I,q,y){if(f(I)){if(I.length){var E=I.length-1;for(var F=0;F<E;F++){j(I[F],q,y)}return j(I[E],q,y)}else{return}}if(!l(I)){throw I+" is not a DOM element"}if(!y&&typeof q==="function"){y=q;q={}}if(y){if(q.downGenerator){throw Error("Two downGenerator functions specified")}q.downGenerator=y}if((typeof q!=="object")||(q===null)){throw TypeError("options must be an object if defined, got "+q)}if(!q.downGenerator&&!q.upGenerator){throw Error("No generators specified. What are you even scrolling?")}if(typeof q.autoStart==="undefined"){q.autoStart=true}if(q.downGenerator&&typeof q.downGenerator!=="function"){throw"downGenerator "+downGenerator+" is not a function"}if(q.upGenerator&&typeof q.upGenerator!=="function"){throw"upGenerator "+upGenerator+" is not a function"}if(q.scroller&&!l(q.scroller)){throw TypeError("options.scroller must be a DOM node, got "+q.scroller)}var H=q.scroller||b(I),t=q.loading,s=q.triggerRadius,x=false,z=!q.upGenerator,G=!q.downGenerator,B=false,K=false,C,J,w;if(f(H)){H=H[0]}if(f(t)){t=t[0]}if(t===null){t=undefined}if(typeof t!=="undefined"){if(q.downGenerator){C=c([t])[0];if(q.downGenerator){J=C.cloneNode(true)}}else{J=c([t])[0]}}if(s===null){s=undefined}switch(typeof s){case"undefined":s=e;case"number":break;default:throw TypeError("trigger radius must be a number if defined, got "+s)}if(!H){m(I);H=I}if(C){d(I).appendChild(C)}D();if(q.autoStart){A()}return{layout:A,forceLayout:v,enable:D,disable:u,destroy:p};function D(){if(x){return}if(B){throw Error("cannot enable infinite scroller that has been destroyed")}x=true;H.addEventListener("scroll",A,false)}function u(){if(!x){return}x=false;H.removeEventListener("scroll",A)}function A(){if(!x||K||B){return}var M=o(H,s);if(!M){return}var L=(M==="up");if(L&&(I._isScrolling||I._iScrolling)){if(w){clearTimeout(w)}w=setTimeout(function(){A()},100);return}K=true;r(L,function(N){K=false;if(N){A()}else{p(L)}})}function v(L){if(!x||B||K){return}K=true;if(typeof L==="undefined"){L=!q.downGenerator}r(L,function(M){K=false;if(M){A()}else{p(L)}})}function r(O,Q){var P=O?q.upGenerator:q.downGenerator;var L=P(M);if(typeof L!=="undefined"){M(L)}function M(S,V){if(B||(z&&O)||(G&&!O)){return}var Y=O?J:C;var R=S&&S.length&&!V;if(S){if(!h(S)&&!f(S)){S=[S]}S=c(S);var W=d(I);var U=H.scrollHeight;i(S,function(Z){N(W,Z)});if(Y){N(W,Y)}var T=H.scrollHeight;if(O){var X=T-U;H._scrollTop(H._scrollTop()+X,function(){if(!!g.ios&&!H._iScroll){k(S)}Q(R)})}else{Q(R)}}else{Q(R)}}function N(S,R){if(O){S.insertBefore(R,S.firstChild)}else{S.appendChild(R)}}}function p(L){if(B){return}if(L){z=true;if(J&&J.parentNode){J.parentNode.removeChild(J)}}else{G=true;if(C&&C.parentNode){C.parentNode.removeChild(C)}}B=(G||!q.downGenerator)&&(z||!q.upGenerator);if(B){u()}}function o(M,L){var P=M;while(P!==document.documentElement){if(P.parentNode){P=P.parentNode}else{return false}}var N=M.clientHeight,Q=(M._scrollTop?M._scrollTop():M.scrollTop),O=M.scrollHeight;if(!G&&O-Q-N<=L){return"down"}else{if(!z&&Q<L){return"up"}else{return false}}}}function b(o){do{if(o._scrollable){return o}o=o.parentNode}while(o)}function c(o){var p=[];i(o,function(q){switch(typeof q){case"undefined":return;case"string":var r=document.createElement("div");r.innerHTML=q;if(r.childNodes){i(c(r.childNodes),function(s){p.push(s)})}return;case"object":if(q===null){return}else{if(l(q)){p.push(q);return}else{if(f(q)){i(q,function(s){p.push(s)});return}}}default:throw TypeError("expected an element, got "+q)}});return p}function k(o){i(o,function(q){var p=q.style.webkitTransform;q.style.webkitTransform="translate3d(0,0,0)";setTimeout(function(){q.style.webkitTransform=p},0)})}}(Scrollable._os,Scrollable._isDOMNode,Scrollable._isjQueryElem,Scrollable._isArray,Scrollable._forEachInArray,Scrollable._enableScrolling,Scrollable._getScrollableNode,window.jQuery);
window.App = function (OldApp) {
    var App = {
        noConflict: noConflict
    };
    return App;

    function noConflict() {
        if (window.App === App) {
            window.App = OldApp;
        }
        return App;
    }
}(window.App);
App._Utils = function (window, document, App) {
	var query = function (queryString) {
		var re           = /([^&=]+)=([^&]+)/g,
			decodedSpace = /\+/g;

		var result = {},
			m, key, value;

		if (queryString) {
			queryString = queryString.replace(decodedSpace, '%20');

			while ((m = re.exec(queryString))) {
				key   = decodeURIComponent( m[1] );
				value = decodeURIComponent( m[2] );
				result[ key ] = value;
			}
		}

		return result;
	}( window.location.href.split('?')[1] );

	var os = function (userAgent) {
		var faked = false,
			name, version, match;

		if (query['_app_platform'] === 'android') {
			faked   = true;
			name    = 'android';
			version = '4.4';
		}
		else if (query['_app_platform'] === 'ios') {
			faked   = true;
			name    = 'ios';
			version = '7.0';
		}
		else if (match = /\bCPU.*OS (\d+(_\d+)?)/i.exec(userAgent)) {
			name    = 'ios';
			version = match[1].replace('_', '.');
		}
		else if (match = /\bAndroid (\d+(\.\d+)?)/.exec(userAgent)) {
			name    = 'android';
			version = match[1];
		}

		var data = {
			faked         : faked   ,
			name          : name    ,
			versionString : version ,
			version       : version && parseFloat(version)
		};

		data[ name ] = true;

		if (data.ios) {
			document.body.className += ' app-ios app-ios-'+parseInt(version);
		}
		else if (data.android) {
			document.body.className += ' app-android app-android-'+parseInt(version);
		}
		if (data.faked || !data.ios) {
			document.body.className += ' app-no-scrollbar';
		}

		return data;
	}(navigator.userAgent);

	var forEach = function (forEach) {
		if (forEach) {
			return function (arr, callback, self) {
				return forEach.call(arr, callback, self);
			};
		}
		else {
			return function (arr, callback, self) {
				for (var i=0, len=arr.length; i<len; i++) {
					if (i in arr) {
						callback.call(self, arr[i], i, arr);
					}
				}
			};
		}
	}(Array.prototype.forEach);

	function isArray (arr) {
		if (Array.isArray) {
			return Array.isArray(arr);
		}
		else {
			return Object.prototype.toString.call(arr) !== '[object Array]';
		}
	}

	function isNode (elem) {
		if ( !elem ) {
			return false;
		}

		try {
			return (elem instanceof Node) || (elem instanceof HTMLElement);
		} catch (err) {}

		if (typeof elem !== 'object') {
			return false;
		}

		if (typeof elem.nodeType !== 'number') {
			return false;
		}

		if (typeof elem.nodeName !== 'string') {
			return false;
		}

		return true;
	}

	function isjQueryElem($elem) {
		if (typeof $elem !== 'object' || $elem === null) {
			return false;
		} else {
			return ($elem.val && $elem.addClass && $elem.css && $elem.html && $elem.show);
		}
	}

	function onReady (func) {
		if (document.readyState === 'complete') {
			setTimeout(function () {
				func();
			}, 0);
			return;
		}

		window.addEventListener('load', runCallback, false);

		function runCallback () {
			window.removeEventListener('load', runCallback);

			setTimeout(function () {
				func();
			}, 0);
		}
	}

	function setTransform (elem, transform) {
		elem.style['-webkit-transform'] = transform;
		elem.style[   '-moz-transform'] = transform;
		elem.style[    '-ms-transform'] = transform;
		elem.style[     '-o-transform'] = transform;
		elem.style[        'transform'] = transform;
	}

	function setTransition (elem, transition) {
		if (transition) {
			elem.style['-webkit-transition'] = '-webkit-'+transition;
			elem.style[   '-moz-transition'] =    '-moz-'+transition;
			elem.style[    '-ms-transition'] =     '-ms-'+transition;
			elem.style[     '-o-transition'] =      '-o-'+transition;
			elem.style[        'transition'] =            transition;
		}
		else {
			elem.style['-webkit-transition'] = '';
			elem.style[   '-moz-transition'] = '';
			elem.style[    '-ms-transition'] = '';
			elem.style[     '-o-transition'] = '';
			elem.style[        'transition'] = '';
		}
	}

	function getStyles (elem, notComputed) {
		var styles;

		if (notComputed) {
			styles = elem.style;
		}
		else {
			styles = document.defaultView.getComputedStyle(elem, null);
		}

		return {
			display          : styles.display          ,
			opacity          : styles.opacity          ,
			paddingRight     : styles.paddingRight     ,
			paddingLeft      : styles.paddingLeft      ,
			marginRight      : styles.marginRight      ,
			marginLeft       : styles.marginLeft       ,
			borderRightWidth : styles.borderRightWidth ,
			borderLeftWidth  : styles.borderLeftWidth  ,
			top              : styles.top              ,
			left             : styles.left             ,
			height           : styles.height           ,
			width            : styles.width            ,
			position         : styles.position
		};
	}

	function isVisible (elem) {
		var styles = getStyles(elem);
		return (styles.display !== 'none' && styles.opacity !== '0');
	}

	// this is tuned for use with the iOS transition
	// be careful if using this elsewhere
	function transitionElems (transitions, timeout, easing, callback) {
		if (typeof transitions.length !== 'number') {
			transitions = [ transitions ];
		}

		var opacities = transitions.map(function (transition) {
			return transition.elem.style.opacity;
		});

		setInitialStyles(function () {
			animateElems(function () {
				restoreStyles(function () {
					callback();
				});
			});
		});

		function setInitialStyles (callback) {
			forEach(transitions, function (transition) {
				if (typeof transition.transitionStart !== 'undefined') {
					setTransform(transition.elem, transition.transitionStart);
				}
				if (typeof transition.opacityStart !== 'undefined') {
					transition.elem.style.opacity = transition.opacityStart + '';
				}
			});

			setTimeout(function () {
				forEach(transitions, function (transition) {
					var e                = transition.easing||easing,
						transitionString = 'transform '+(timeout/1000)+'s '+e+', opacity '+(timeout/1000)+'s '+e;
					setTransition(transition.elem, transitionString);
				});

				setTimeout(callback, 0);
			}, 0);
		}

		function animateElems (callback) {
			forEach(transitions, function (transition) {
				if (typeof transition.transitionEnd !== 'undefined') {
					setTransform(transition.elem, transition.transitionEnd);
				}
				if (typeof transition.opacityEnd !== 'undefined') {
					transition.elem.style.opacity = transition.opacityEnd + '';
				}
			});

			var lastTransition = transitions[transitions.length-1];
			lastTransition.elem.addEventListener('webkitTransitionEnd' , transitionFinished , false);
			lastTransition.elem.addEventListener('transitionend'       , transitionFinished , false);
			lastTransition.elem.addEventListener('onTransitionEnd'     , transitionFinished , false);
			lastTransition.elem.addEventListener('ontransitionend'     , transitionFinished , false);
			lastTransition.elem.addEventListener('MSTransitionEnd'     , transitionFinished , false);
			lastTransition.elem.addEventListener('transitionend'       , transitionFinished , false);

			var done = false;

			function transitionFinished (e) {
				if (done || (e.target !== lastTransition.elem)) {
					return;
				}
				done = true;

				forEach(transitions, function (transition) {
					lastTransition.elem.removeEventListener('webkitTransitionEnd' , transitionFinished);
					lastTransition.elem.removeEventListener('transitionend'       , transitionFinished);
					lastTransition.elem.removeEventListener('onTransitionEnd'     , transitionFinished);
					lastTransition.elem.removeEventListener('ontransitionend'     , transitionFinished);
					lastTransition.elem.removeEventListener('MSTransitionEnd'     , transitionFinished);
					lastTransition.elem.removeEventListener('transitionend'       , transitionFinished);
				});

				callback();
			}
		}

		function restoreStyles (callback) {
			forEach(transitions, function (transition) {
				setTransition(transition.elem, '');
			});

			setTimeout(function () {
				forEach(transitions, function (transition, i) {
					setTransform(transition.elem, '');
					transition.elem.style.opacity = opacities[i];
				});

				callback();
			}, 0);
		}
	}



	App.platform        = os.name;
	App.platformVersion = os.version;

	return {
		query         : query         ,
		os            : os            ,
		ready         : onReady       ,
		forEach       : forEach       ,
		isArray       : isArray       ,
		isNode        : isNode        ,
		isjQueryElem  : isjQueryElem  ,
		setTransform  : setTransform  ,
		setTransition : setTransition ,
		animate       : transitionElems ,
		getStyles     : getStyles     ,
		isVisible     : isVisible
	};
}(window, document, App);
App._Events = function (Utils) {
	var APPJS_EVENTS_VAR = '__appjsCustomEventing';

	var hasCustomEvents = supportsCustomEventing();

	return {
		init : setupCustomEventing ,
		fire : fireEvent
	};



	function supportsCustomEventing () {
		try {
			var elem = document.createElement('div'),
				evt  = document.createEvent('CustomEvent');
			evt.initEvent('fooBarFace', false, true);
			elem.dispatchEvent(evt);
			return true;
		}
		catch (err) {
			return false;
		}
	}

	function setupCustomEventing (elem, names) {
		if (hasCustomEvents) {
			return;
		}

		if ( elem[APPJS_EVENTS_VAR] ) {
			Utils.forEach(names, elem[APPJS_EVENTS_VAR].addEventType);
			return;
		}

		elem[APPJS_EVENTS_VAR] = {
			fire                : fireElemEvent ,
			addEventType        : addEventType ,
			addEventListener    : elem.addEventListener ,
			removeEventListener : elem.removeEventListener
		};

		var listeners = {};
		Utils.forEach(names, function (name) {
			listeners[name] = [];
		});

		function addEventType (name) {
			if (names.indexOf(name) !== -1) {
				return;
			}
			names.push(name);
			listeners[name] = [];
		}

		function fireElemEvent (name) {
			if (names.indexOf(name) === -1) {
				return false;
			}

			var prevented = false,
				evt       = { preventDefault: function(){ prevented=true }};

			Utils.forEach(listeners[name], function (listener) {
				setTimeout(function () {
					if (listener.call(elem, evt) === false) {
						prevented = true;
					}
				}, 0);
			});

			return !prevented;
		}

		elem.addEventListener = function (name, listener) {
			if (names.indexOf(name) === -1) {
				elem[APPJS_EVENTS_VAR].addEventListener.apply(this, arguments);
				return;
			}

			var eventListeners = listeners[name];

			if (eventListeners.indexOf(listener) === -1) {
				eventListeners.push(listener);
			}
		};

		elem.removeEventListener = function (name, listener) {
			if (names.indexOf(name) === -1) {
				elem[APPJS_EVENTS_VAR].removeEventListener.apply(this, arguments);
				return;
			}

			var eventListeners = listeners[name],
				index          = eventListeners.indexOf(listener);

			if (index !== -1) {
				eventListeners.splice(index, 1);
			}
		};
	}

	function fireEvent (elem, eventName) {
		if (elem[APPJS_EVENTS_VAR]) {
			return elem[APPJS_EVENTS_VAR].fire(eventName);
		}
		else {
			var evt = document.createEvent('CustomEvent');
			evt.initEvent(eventName, false, true);
			return elem.dispatchEvent(evt);
		}
	}
}(App._Utils);
App._Metrics = function (window, App) {
	var analyticsEnabled = false;

	App.enableGoogleAnalytics = function () {
		enableGoogleAnalytics();
	};

	return {
		watchPage : watchPage
	};



	function enableGoogleAnalytics () {
		analyticsEnabled = true;
	}

	function addPageView (pageName, pageID) {
		if ( !analyticsEnabled ) {
			return;
		}

		var pathname = '/' + pageName;
		if (typeof pageID !== 'undefined') {
			pathname += '/' + pageID;
		}

		if (typeof window.ga === 'function') {
			window.ga('send', 'pageview', pathname);
			return;
		}

		if ( !window._gaq ) {
			window._gaq = [];
		}
		if (typeof window._gaq.push === 'function') {
			window._gaq.push([
				'_trackPageview' ,
				pathname
			]);
		}
	}

	function watchPage (page, pageName, pageArgs) {
		var data;

		if ((typeof pageArgs === 'object') && (typeof pageArgs.id !== 'undefined')) {
			data = pageArgs.id + '';
		}

		page.addEventListener('appShow', function () {
			addPageView(pageName, data);
		}, false);
	}
}(window, App);
App._Dialog = function (window, document, Clickable, App, Utils) {
	var DIALOG_INDICATOR_CLASS = 'app-dialog-visible';

	var currentCallback,
		dialogQueue;

	App.dialog = function (options, callback) {
		if ((typeof options !== 'object') || (options === null)) {
			throw TypeError('dialog options must be an object, got ' + options);
		}
		switch (typeof options.dark) {
			case 'undefined':
			case 'boolean':
				break;
			default:
				throw TypeError('dialog dark mode must a boolean if defined, got ' + options.dark);
		}
		switch (typeof options.title) {
			case 'undefined':
			case 'string':
				break;
			default:
				throw TypeError('dialog title must be a string if defined, got ' + options.title);
		}
		switch (typeof options.text) {
			case 'undefined':
			case 'string':
				break;
			default:
				if ( !Utils.isNode(options.text) ) {
					throw TypeError('dialog text must be a string if defined, got ' + options.text);
				}
		}
		for (var key in options) {
			if ((key !== 'dark') && (key !== 'rawText') && (key !== 'text')) {
				switch (typeof options[key]) {
					case 'undefined':
					case 'string':
						break;
					default:
						throw TypeError('dialog button ('+key+') must be a string if defined, got ' + options[key]);
				}
			}
		}
		switch (typeof callback) {
			case 'undefined':
				callback = function () {};
			case 'function':
				break;
			default:
				throw TypeError('callback must be a function if defined, got ' + callback);
		}

		return showDialog(options, callback);
	};

	App.dialog.close = function (status) {
		return closeDialog(status || false);
	};

	App.dialog.status = function () {
		return hasDialog();
	};

	return App.dialog;



	function createDialog (options, callback) {
		var dialogContainer = document.createElement('div');
		dialogContainer.className += ' app-dialog-container';
		if (Utils.os.ios && (Utils.os.version <= 5)) {
			dialogContainer.className += ' ios5';
		}
		if (!Utils.os.android || (Utils.os.version >= 4)) {
			dialogContainer.addEventListener('touchstart', function (e) {
				if (e.target === dialogContainer) {
					e.preventDefault();
				}
			}, false);
		}

		if (options.cancelButton) {
			dialogContainer.addEventListener('touchstart', function (e) {
				if (e.target === dialogContainer) {
					closeDialog();
				}
			}, false);
		}

		var dialog = document.createElement('div');
		dialog.className = 'app-dialog';
		if (options.dark) {
			dialog.className += ' dark';
		}
		dialogContainer.appendChild(dialog);

		if (options.title) {
			var title = document.createElement('div');
			title.className = 'title';
			title.textContent = options.title;
			dialog.appendChild(title);
		}

		if (options.text || options.rawText) {
			var text = document.createElement('div');
			text.className = 'text';
			if ( Utils.isNode(options.text) ) {
				text.appendChild(options.text);
			}
			else if (options.rawText) {
				text.innerHTML = options.rawText;
			}
			else {
				text.textContent = options.text;
			}
			dialog.appendChild(text);
		}

		for (var key in options) {
			if (options[key] && (key.substr(key.length-6) === 'Button') && (key !== 'okButton') && (key !== 'cancelButton')) {
				var buttonName = key.substr(0, key.length-6),
					button     = document.createElement('div');
				button.className = 'button';
				button.setAttribute('data-button', buttonName);
				button.textContent = options[key];
				Clickable(button);
				button.addEventListener('click', handleChoice, false);
				dialog.appendChild(button);
			}
		}

		if (options.okButton) {
			var button = document.createElement('div');
			button.className = 'button ok';
			button.setAttribute('data-button', 'ok');
			button.textContent = options.okButton;
			Clickable(button);
			button.addEventListener('click', handleChoice, false);
			dialog.appendChild(button);
		}

		if (options.cancelButton) {
			var button = document.createElement('div');
			button.className = 'button cancel';
			button.setAttribute('data-button', 'cancel');
			button.textContent = options.cancelButton;
			Clickable(button);
			button.addEventListener('click', handleChoice, false);
			dialog.appendChild(button);
		}

		function handleChoice () {
			var buttonName = this.getAttribute('data-button');
			if (buttonName === 'cancel') {
				buttonName = false;
			}
			callback(buttonName);
		}

		return dialogContainer;
	}

	function showDialog (options, callback, force) {
		if (dialogQueue && !force) {
			dialogQueue.push([ options, callback ]);
			return;
		}
		dialogQueue = dialogQueue || [];

		var dialogLock  = false,
			dialog      = createDialog(options, dialogClosed),
			innerDialog = dialog.firstChild;
		currentCallback = dialogClosed;

		if (Utils.os.ios) {
			dialog.className += ' fancy';
		}
		document.body.appendChild(dialog);
		setTimeout(function () {
			dialog.className += ' enabled';
			document.body.className += ' ' + DIALOG_INDICATOR_CLASS;
		}, 50);

		function dialogClosed (status) {
			if (dialogLock) {
				return;
			}
			dialogLock = true;

			if ((typeof status !== 'string') && !options.cancelButton) {
				dialogLock = false;
				return true;
			}

			currentCallback = null;

			dialog.className = dialog.className.replace(/\benabled\b/g, '');
			document.body.className = document.body.className.replace(new RegExp('\\b'+DIALOG_INDICATOR_CLASS+'\\b', 'g'), '');

			setTimeout(function () {
				processDialogQueue();
				callback(status);
			}, 0);

			setTimeout(function () {
				try {
					dialog.parentNode.removeChild(dialog);
				} catch (err) {}
			}, 600);

			return true;
		}
	}

	function closeDialog (status) {
		if (currentCallback) {
			return currentCallback(status || false);
		}
	}

	function hasDialog () {
		return !!currentCallback;
	}

	function processDialogQueue () {
		if ( !dialogQueue ) {
			return;
		}

		if ( !dialogQueue.length ) {
			dialogQueue = null;
			return;
		}

		var args = dialogQueue.shift();
		args.push(true);
		showDialog.apply(window, args);
	}
}(window, document, Clickable, App, App._Utils);
App._Form = function (window, document, App, Utils) {
	App.form = function (form, callback) {
		if ( Utils.isjQueryElem(form) ) {
			form.each(function () {
				App.form(this, callback);
			});
			return;
		}
		if ( !Utils.isNode(form) ) {
			throw TypeError('form must be a DOM node, got ' + form);
		}
		if (typeof callback !== 'function') {
			throw TypeError('callback must be a function, got '+callback);
		}

		setupForm(form, callback);
	};

	return {};

	function setupForm (form, callback) {
		var isForm = (form.nodeName === 'FORM'),
			locked = false,
			submitButtons;

		if (isForm) {
			var submit = document.createElement('input');
			submit.style.display = 'none';
			submit.type = 'submit';
			form.appendChild(submit);
			form.addEventListener('submit', function (e) {
				e.preventDefault();
				submitForm();
			}, false);
			submitButtons = form.querySelectorAll('.app-submit');
		} else {
			submitButtons = [form];
		}

		Utils.forEach(submitButtons, function (submitButton) {
			if (submitButton.nodeName === 'TEXTAREA') {
				isText = true;
			} else if (submitButton.nodeName !== 'INPUT') {
				isText = false;
			} else {
				switch ((submitButton.type || '').toLowerCase()) {
					case 'button':
					case 'submit':
					case 'reset':
					case 'hidden':
						isText = false;
						break;
					default:
						isText = true;
						break;
				}
			}
			if (isText) {
				submitButton.addEventListener('keydown', function (e) {
					if (e.which === 13) {
						e.preventDefault();
						submitForm();
					}
				}, false);
			} else {
				submitButton.addEventListener('click', function (e) {
					e.preventDefault();
					submitForm();
				}, false);
			}
		});

		function submitForm () {
			if (locked) {
				return;
			}
			locked = true;
			form.disabled = true;

			var params = {},
				inputs = isForm ? form.querySelectorAll('[name]') : [form],
				done   = false;

			if (isForm) {
				Utils.forEach(
					form.querySelectorAll('[name]'),
					function (elem) {
						params[elem.name] = elem.value;
					}
				);
			} else {
				params.value = form.value;
				if (form.name) {
					params[form.name] = form.value;
				}
			}

			Utils.forEach(inputs, function (elem) {
				elem.disabled = true;
				if (elem.blur) {
					elem.blur();
				}
			});
			if (isForm && form.blur) {
				form.blur();
			}

			callback.call(this, params, function () {
				if (done) {
					return;
				}
				done = true;

				Utils.forEach(inputs, function (elem) {
					elem.disabled = false;
				});

				locked = false;
				form.disabled = false;
			});
		}
	}
}(window, document, App, App._Utils);
App._Scroll = function (Scrollable, App, Utils) {
	var TAGS = {
			APP_CONTENT    : 'app-content' ,
			APP_SCROLLABLE : 'app-scrollable' ,
			APP_SCROLLHACK : 'app-scrollhack' ,
			NO_SCROLL      : 'data-no-scroll' ,
			SCROLLABLE     : 'data-scrollable' ,
			LAST_SCROLL    : 'data-last-scroll' ,
			SCROLL_STYLE   : 'data-scroll-style' ,
			TOUCH_SCROLL   : '-webkit-overflow-scrolling'
		},
		PAGE_MANAGER_VAR = '__appjsPageManager';

	App.infiniteScroll = function (elem, options, generator) {
		if ( Utils.isjQueryElem(elem) ) {
			if (elem.length) {
				var l = elem.length-1;
				for (var i=0; i<l; i++) {
					App.infiniteScroll(elem[i], options, generator);
				}
				return App.infiniteScroll(elem[l], options, generator);
			} else {
				return;
			}
		}
		if ( !Utils.isNode(elem) ) {
			throw TypeError('infinite scroll container must be a DOM node, got ' + elem);
		}
		return setupInfiniteScroll(elem, options, generator);
	};

	return {
		setup                 : setupScrollers            ,
		disable               : disableScrolling          ,
		saveScrollPosition    : savePageScrollPosition    ,
		saveScrollStyle       : savePageScrollStyle       ,
		restoreScrollPosition : restorePageScrollPosition ,
		restoreScrollStyle    : restorePageScrollStyle
	};



	function setupScrollers (page) {
		Utils.forEach(
			page.querySelectorAll('.'+TAGS.APP_CONTENT),
			function (content) {
				if (content.getAttribute(TAGS.NO_SCROLL) === null) {
					setupScroller(content);
				}
			}
		);

		Utils.forEach(
			page.querySelectorAll('['+TAGS.SCROLLABLE+']'),
			function (content) {
				setupScroller(content);
			}
		);
	}

	function setupScroller (content) {
		var forceIScroll = !!window['APP_FORCE_ISCROLL'];
		Scrollable(content, forceIScroll);
		content.className += ' '+TAGS.APP_SCROLLABLE;
		if (!forceIScroll && Utils.os.ios && Utils.os.version < 6) {
			content.className += ' '+TAGS.APP_SCROLLHACK;
		}
	}

	function disableScrolling (page) {
		Utils.forEach(
			page.querySelectorAll('*'),
			function (elem) {
				elem.style[TAGS.TOUCH_SCROLL] = '';
			}
		);
	}

	function getScrollableElems (page) {
		var elems = [];

		if (page) {
			Utils.forEach(
				page.querySelectorAll('.'+TAGS.APP_SCROLLABLE),
				function (elem) {
					if (elem._scrollable) {
						elems.push(elem);
					}
				}
			);
		}

		return elems;
	}

	function savePageScrollPosition (page) {
		Utils.forEach(
			getScrollableElems(page),
			function (elem) {
				if (elem._iScroll) {
					return;
				}

				var scrollTop = elem._scrollTop();
				elem.setAttribute(TAGS.LAST_SCROLL, scrollTop+'');
			}
		);
	}

	function savePageScrollStyle (page) {
		Utils.forEach(
			getScrollableElems(page),
			function (elem) {
				if (elem._iScroll) {
					return;
				}

				var scrollStyle = elem.style[TAGS.TOUCH_SCROLL] || '';
				elem.style[TAGS.TOUCH_SCROLL] = '';
				elem.setAttribute(TAGS.SCROLL_STYLE, scrollStyle);
			}
		);
	}

	function restorePageScrollPosition (page, noTimeout) {
		Utils.forEach(
			getScrollableElems(page),
			function (elem) {
				if (elem._iScroll) {
					return;
				}

				var scrollTop = parseInt( elem.getAttribute(TAGS.LAST_SCROLL) );

				if (scrollTop) {
					if ( !noTimeout ) {
						setTimeout(function () {
							elem._scrollTop(scrollTop);
						}, 0);
					}
					else {
						elem._scrollTop(scrollTop);
					}
				}
			}
		);
	}

	function restorePageScrollStyle (page) {
		Utils.forEach(
			getScrollableElems(page),
			function (elem) {
				if (elem._iScroll) {
					return;
				}

				var scrollStyle = elem.getAttribute(TAGS.SCROLL_STYLE) || '';

				if (scrollStyle) {
					elem.style[TAGS.TOUCH_SCROLL] = scrollStyle;
				}

			}
		);

		restorePageScrollPosition(page, true);
	}



	function setupInfiniteScroll (elem, options, generator) {
		var page        = getParentPage(elem),
			pageManager = getPageManager(page);

		if (!page || !pageManager) {
			throw Error('could not find parent app-page');
		}

		if ( !options ) {
			options = {};
		}
		if (typeof options.autoStart !== 'boolean') {
			options.autoStart = false;
		}
		if (typeof options.scroller === 'undefined') {
			options.scroller = getParentScroller(elem);
		}

		var scroller    = Scrollable.infinite(elem, options, generator),
			scrollReady = false;
		Utils.ready(function () {
			if ( !scrollReady ) {
				scroller.enable();
				scroller.forceLayout();
				scroller.disable();
			}
		});
		pageManager.ready(function () {
			scrollReady = true;
			try {
				scroller.enable();
			} catch (err) {
				// scroll is already destroyed
				return;
			}
			scroller.layout();
			page.addEventListener('appShow', function () {
				scroller.layout();
			});
			page.addEventListener('appDestroy', function () {
				scroller.destroy();
			});
		});

		return scroller;
	}

	function getParentPage (elem) {
		var parent = elem;
		do {
			if ( /\bapp\-page\b/.test(parent.className) ) {
				return parent;
			}
		} while (parent = parent.parentNode);
	}

	function getParentScroller (elem) {
		var parent = elem;
		do {
			if ( /\bapp\-content\b/.test(parent.className) ) {
				return parent;
			}
		} while (parent = parent.parentNode);
	}

	function getPageManager (page) {
		if (page) {
			return page[PAGE_MANAGER_VAR];
		}
	}
}(Scrollable, App, App._Utils);
// fixes ios bounce scrolling in mobile safari

(function (document, App, Utils) {
	var touches = {};

	if (App.platform === 'ios' && App.platformVersion >= 5 && !Utils.os.faked && (typeof kik !== 'object' || kik === null || !kik.enabled)) {
		bindListeners();
	}
	return;

	function bindListeners() {
		document.addEventListener('touchstart', function (e) {
			var target = getTargetScroller(e);
			if (target && !target._iScroll) {
				if ((target.scrollHeight-target.clientHeight > 1) && ((target.scrollTop <= 0) || (target.scrollTop+target.clientHeight >= target.scrollHeight))) {
					addTouches(e);
				}
			}
		});
		document.addEventListener('touchmove', function (e) {
			var target = getTargetScroller(e);
			if ( !target ) {
				e.preventDefault();
			} else if (target._iScroll) {
				e.preventDefault();
			} else if (e.changedTouches) {
				if (e.changedTouches.length === 1) {
					onMove(e);
				}
				updateTouches(e);
			}
		});
		document.addEventListener('touchcancel', function (e) {
			clearTouches(e);
		});
		document.addEventListener('touchend', function (e) {
			clearTouches(e);
		});
	}

	function getTargetScroller(e) {
		var target = e.target;
		if (target) {
			do {
				if (target._scrollable) {
					break;
				}
			} while (target = target.parentNode);
		}
		return target;
	}

	function onMove(e) {
		var target = getTargetScroller(e),
				touch  = e.changedTouches[0],
				y0     = touches[touch.identifier],
				y1     = touch.pageY;
		if (target && typeof y0 !== 'undefined') {
			if (target.scrollTop <= 0) {
				if (y0 > y1) {
					delete touches[touch.identifier];
				} else {
					e.preventDefault();
				}
			} else if (target.scrollTop+target.clientHeight >= target.scrollHeight) {
				if (y0 < y1) {
					delete touches[touch.identifier];
				} else {
					e.preventDefault();
				}
			} else {
				delete touches[touch.identifier];
			}
		}
	}

	function addTouches(e) {
		if (e.changedTouches) {
			for (var i=0, l=e.changedTouches.length; i<l; i++) {
				touches[ e.changedTouches[i].identifier ] = e.changedTouches[i].pageY;
			}
		}
	}
	function updateTouches(e) {
		if (e.changedTouches) {
			for (var i=0, l=e.changedTouches.length; i<l; i++) {
				if (e.changedTouches[i].identifier in touches) {
					touches[ e.changedTouches[i].identifier ] = e.changedTouches[i].pageY;
				}
			}
		}
	}
	function clearTouches(e) {
		if (e.changedTouches) {
			for (var i=0, l=e.changedTouches.length; i<l; i++) {
				delete touches[ e.changedTouches[i].identifier ];
			}
		}
		if (e.touches) {
			var ids = [];
			for (var i=0, l=e.touches.length; i<l; i++) {
				ids.push(e.touches[i].identifier+'');
			}
			for (var id in touches) {
				if (ids.indexOf(id) === -1) {
					delete touches[id];
				}
			}
		}
	}
})(document, App, App._Utils);
App._Pages = function (window, document, Clickable, Scrollable, App, Utils, Events, Metrics, Scroll) {
	var PAGE_NAME        = 'data-page',
		PAGE_CLASS       = 'app-page',
		APP_LOADED       = 'app-loaded',
		APP_STATUSBAR    = 'app-ios-statusbar',
		PAGE_READY_VAR   = '__appjsFlushReadyQueue',
		PAGE_MANAGER_VAR = '__appjsPageManager',
		EVENTS = {
			SHOW        : 'show'    ,
			HIDE        : 'hide'    ,
			BACK        : 'back'    ,
			FORWARD     : 'forward' ,
			BEFORE_BACK : 'beforeBack' ,
			READY       : 'ready'   ,
			DESTROY     : 'destroy' ,
			LAYOUT      : 'layout'  ,
			ONLINE      : 'online'  ,
			OFFLINE     : 'offline'
		};

	var preloaded        = false,
		forceIScroll     = !!window['APP_FORCE_ISCROLL'],
		pages            = {},
		controllers      = {},
		cleanups         = {},
		statusBarEnabled = false;

	setupPageListeners();
	if (window.APP_ENABLE_IOS_STATUSBAR) {
		enableIOSStatusBar();
	}


	App.add = function (pageName, page) {
		if (typeof pageName !== 'string') {
			page     = pageName;
			pageName = undefined;
		}

		if ( !Utils.isNode(page) ) {
			throw TypeError('page template node must be a DOM node, got ' + page);
		}

		addPage(page, pageName);
	};

	App.controller = function (pageName, controller, cleanup) {
		if (typeof pageName !== 'string') {
			throw TypeError('page name must be a string, got ' + pageName);
		}

		if (typeof controller !== 'function') {
			throw TypeError('page controller must be a function, got ' + controller);
		}

		switch (typeof cleanup) {
			case 'undefined':
				cleanup = function(){};
				break;

			case 'function':
				break;

			default:
				throw TypeError('page cleanup handler must be a function, got ' + cleanup);
		}

		if (controller) {
			addController(pageName, controller);
		}
		if (cleanup) {
			addCleanup(pageName, cleanup);
		}
	};
	App.populator = App.controller; // backwards compat

	App.generate = function (pageName, args) {
		if (typeof pageName !== 'string') {
			throw TypeError('page name must be a string, got ' + pageName);
		}

		switch (typeof args) {
			case 'undefined':
				args = {};
				break;

			case 'object':
				break;

			default:
				throw TypeError('page arguments must be an object if defined, got ' + args);
		}

		return generatePage(pageName, args);
	};

	App.destroy = function (page) {
		if ( !Utils.isNode(page) ) {
			throw TypeError('page node must be a DOM node, got ' + page);
		}

		return destroyPage(page);
	};

	App._layout             = triggerPageSizeFix;
	App._enableIOSStatusBar = enableIOSStatusBar;


	return {
		EVENTS                : EVENTS                 ,
		has                   : hasPage                ,
		createManager         : createPageManager      ,
		startGeneration       : startPageGeneration    ,
		finishGeneration      : finishPageGeneration   ,
		fire                  : firePageEvent          ,
		startDestruction      : startPageDestruction   ,
		finishDestruction     : finishPageDestruction  ,
		fixContent            : fixContentHeight       ,
		populateBackButton    : populatePageBackButton
	};



	/* Page elements */

	function preloadPages () {
		if (preloaded) {
			return;
		}
		preloaded = true;

		var pageNodes = document.getElementsByClassName(PAGE_CLASS);

		for (var i=pageNodes.length; i--;) {
			addPage( pageNodes[i] );
		}

		document.body.className += ' ' + APP_LOADED;
	}

	function addPage (page, pageName) {
		if ( !pageName ) {
			pageName = page.getAttribute(PAGE_NAME);
		}

		if ( !pageName ) {
			throw TypeError('page name was not specified');
		}

		page.setAttribute(PAGE_NAME, pageName);
		if (page.parentNode) {
			page.parentNode.removeChild(page);
		}
		pages[pageName] = page.cloneNode(true);
	}

	function hasPage (pageName) {
		preloadPages();
		return (pageName in pages);
	}

	function clonePage (pageName) {
		if ( !hasPage(pageName) ) {
			throw TypeError(pageName + ' is not a known page');
		}
		return pages[pageName].cloneNode(true);
	}



	/* Page controllers */

	function addController (pageName, controller) {
		controllers[pageName] = controller;
	}

	function addCleanup (pageName, cleanup) {
		cleanups[pageName] = cleanup;
	}

	function populatePage (pageName, pageManager, page, args) {
		var controller = controllers[pageName];
		if ( !controller ) {
			return;
		}
		for (var prop in controller) {
			pageManager[prop] = controller[prop];
		}
		for (var prop in controller.prototype) {
			pageManager[prop] = controller.prototype[prop];
		}
		pageManager.page = page; //TODO: getter
		pageManager.args = args; //TODO: getter (dont want this to hit localStorage)
		controller.call(pageManager, page, args);
	}

	function unpopulatePage (pageName, pageManager, page, args) {
		var cleanup = cleanups[pageName];
		if (cleanup) {
			cleanup.call(pageManager, page, args);
		}
		firePageEvent(pageManager, page, EVENTS.DESTROY);
	}



	/* Page generation */

	function createPageManager (restored) {
		var pageManager = {
			restored : restored ,
			showing  : false ,
			online   : navigator.onLine
		};

		var readyQueue = [];

		pageManager.ready = function (func) {
			if (typeof func !== 'function') {
				throw TypeError('ready must be called with a function, got ' + func);
			}

			if (readyQueue) {
				readyQueue.push(func);
			} else {
				func.call(pageManager);
			}
		};

		pageManager[PAGE_READY_VAR] = function () {
			Utils.ready(function () {
				if ( !readyQueue ) {
					return;
				}
				var queue = readyQueue.slice();
				readyQueue = null;
				if ( Utils.isNode(pageManager.page) ) {
					firePageEvent(pageManager, pageManager.page, EVENTS.READY);
				}
				Utils.forEach(queue, function (func) {
					func.call(pageManager);
				});
			});
		};

		return pageManager;
	}

	function generatePage (pageName, args) {
		var pageManager = {},
			page        = startPageGeneration(pageName, pageManager, args);

		finishPageGeneration(pageName, pageManager, page, args);

		return page;
	}

	function destroyPage (page) {
		var pageName = page.getAttribute(PAGE_NAME);
		startPageDestruction(pageName, {}, page, {});
		finishPageDestruction(pageName, {}, page, {});
	}

	function startPageGeneration (pageName, pageManager, args) {
		var page = clonePage(pageName);

		var eventNames = [];
		for (var evt in EVENTS) {
			eventNames.push( eventTypeToName(EVENTS[evt]) );
		}
		Events.init(page, eventNames);
		Metrics.watchPage(page, pageName, args);

		page[PAGE_MANAGER_VAR] = pageManager;

		fixContentHeight(page);

		Utils.forEach(
			page.querySelectorAll('.app-button'),
			function (button) {
				if (button.getAttribute('data-no-click') !== null) {
					return;
				}
				Clickable(button);
				button.addEventListener('click', function () {
					var target     = button.getAttribute('data-target'),
						targetArgs = button.getAttribute('data-target-args'),
						back       = (button.getAttribute('data-back') !== null),
						manualBack = (button.getAttribute('data-manual-back') !== null),
						args;

					try {
						args = JSON.parse(targetArgs);
					} catch (err) {}
					if ((typeof args !== 'object') || (args === null)) {
						args = {};
					}

					if (!back && !target) {
						return;
					}
					if (back && manualBack) {
						return;
					}

					var clickableClass = button.getAttribute('data-clickable-class');
					if (clickableClass) {
						button.disabled = true;
						button.classList.add(clickableClass);
					}

					if (back) {
						App.back(finish);
					}
					else if (target) {
						App.load(target, args, {}, finish);
					}

					function finish () {
						if (clickableClass) {
							button.disabled = false;
							button.classList.remove(clickableClass);
						}
					}
				}, false);
			}
		);

		populatePage(pageName, pageManager, page, args);

		page.addEventListener(eventTypeToName(EVENTS.SHOW), function () {
			setTimeout(function () {
				if (typeof pageManager[PAGE_READY_VAR] === 'function') {
					pageManager[PAGE_READY_VAR]();
				}
			}, 0);
		}, false);

		return page;
	}

	function firePageEvent (pageManager, page, eventType) {
		var eventName = eventTypeToName(eventType),
			funcName  = eventTypeToFunctionName(eventType),
			success   = true;
		if ( !Events.fire(page, eventName) ) {
			success = false;
		}
		if (typeof pageManager[funcName] === 'function') {
			if (pageManager[funcName]() === false) {
				success = false;
			}
		}
		return success;
	}

	function eventTypeToName (eventType) {
		return 'app' + eventType[0].toUpperCase() + eventType.slice(1);
	}

	function eventTypeToFunctionName (eventType) {
		return 'on' + eventType[0].toUpperCase() + eventType.slice(1);
	}

	function finishPageGeneration (pageName, pageManager, page, args) {
		Scroll.setup(page);
	}

	function startPageDestruction (pageName, pageManager, page, args) {
		if (!Utils.os.ios || Utils.os.version < 6) {
			Scroll.disable(page);
		}
		if (typeof pageManager.reply === 'function') {
			pageManager._appNoBack = true;
			pageManager.reply();
		}
	}

	function finishPageDestruction (pageName, pageManager, page, args) {
		unpopulatePage(pageName, pageManager, page, args);
	}



	/* Page layout */

	function setupPageListeners () {
		window.addEventListener('orientationchange', triggerPageSizeFix);
		window.addEventListener('resize'           , triggerPageSizeFix);
		window.addEventListener('load'             , triggerPageSizeFix);
		setTimeout(triggerPageSizeFix, 0);

		window.addEventListener('online', function () {
			if (App._Stack) {
				Utils.forEach(App._Stack.get(), function (pageInfo) {
					pageInfo[2].online = true;
					firePageEvent(pageInfo[2], pageInfo[3], EVENTS.ONLINE);
				});
			}
		}, false);
		window.addEventListener('offline', function () {
			if (App._Stack) {
				Utils.forEach(App._Stack.get(), function (pageInfo) {
					pageInfo[2].online = false;
					firePageEvent(pageInfo[2], pageInfo[3], EVENTS.OFFLINE);
				});
			}
		}, false);
	}

	function triggerPageSizeFix () {
		fixContentHeight();
		var pageData;
		if (App._Stack) {
			pageData = App._Stack.getCurrent();
		}
		if (pageData) {
			firePageEvent(pageData[2], pageData[3], EVENTS.LAYOUT);
		}

		//TODO: turns out this isnt all that expensive, but still, lets kill it if we can
		setTimeout(fixContentHeight,   0);
		setTimeout(fixContentHeight,  10);
		setTimeout(fixContentHeight, 100);
	}

	function fixContentHeight (page) {
		if ( !page ) {
			if (App._Navigation) {
				page = App._Navigation.getCurrentNode();
			}
			if ( !page ) {
				return;
			}
		}

		var topbar  = page.querySelector('.app-topbar'),
			content = page.querySelector('.app-content'),
			height  = window.innerHeight;

		if ( !content ) {
			return;
		}
		if ( !topbar ) {
			content.style.height = height + 'px';
			return;
		}

		var topbarStyles = document.defaultView.getComputedStyle(topbar, null),
			topbarHeight = Utils.os.android ? 48 : 44;
		if (topbarStyles.height) {
			topbarHeight = (parseInt(topbarStyles.height) || 0);
			if ((topbarStyles.boxSizing || topbarStyles.webkitBoxSizing) !== 'border-box') {
				topbarHeight += (parseInt(topbarStyles.paddingBottom) || 0) + (parseInt(topbarStyles.paddingTop) || 0);
				topbarHeight += (parseInt(topbarStyles.borderBottomWidth) || 0) + (parseInt(topbarStyles.borderTopWidth) || 0);
			}
		}
		content.style.height = (height - topbarHeight) + 'px';
	}

	function populatePageBackButton (page, oldPage) {
		if ( !oldPage ) {
			return;
		}
		var backButton = page.querySelector('.app-topbar .left.app-button'),
			oldTitle   = oldPage.querySelector('.app-topbar .app-title');
		if (!backButton || !oldTitle || (backButton.getAttribute('data-autotitle') === null)) {
			return;
		}
		var oldText = oldTitle.textContent,
			newText = backButton.textContent;
		if (!oldText || newText) {
			return;
		}
		if (oldText.length > 13) {
			oldText = oldText.substr(0, 12) + '..';
		}
		backButton.textContent = oldText;
	}

	function enableIOSStatusBar () {
		if (statusBarEnabled) {
			return;
		}
		statusBarEnabled = true;
		document.body.className += ' ' + APP_STATUSBAR;
		Utils.ready(function () {
			setTimeout(triggerPageSizeFix, 6);
		});
	}
}(window, document, Clickable, Scrollable, App, App._Utils, App._Events, App._Metrics, App._Scroll);
App._Stack = function (window, document, App, Utils, Scroll, Pages) {
	var STACK_KEY  = '__APP_JS_STACK__' + window.location.pathname,
		STACK_TIME = '__APP_JS_TIME__'  + window.location.pathname;

	var stack = [];

	App.getStack = function () {
		return fetchStack();
	};

	App.getPage = function (index) {
		var stackSize = stack.length - 1;
		switch (typeof index) {
			case 'undefined':
				index = stackSize;
				break;
			case 'number':
				if (Math.abs(index) > stackSize) {
					throw TypeError('absolute index cannot be greater than stack size, got ' + index);
				}
				if (index < 0) {
					index = stackSize + index;
				}
				break;
			default:
				throw TypeError('page index must be a number if defined, got ' + index);
		}
		return fetchPage(index);
	};

	App.removeFromStack = function (startIndex, endIndex) {
		// minus 1 because last item on stack is current page (which is untouchable)
		var stackSize = stack.length - 1;
		switch (typeof startIndex) {
			case 'undefined':
				startIndex = 0;
				break;
			case 'number':
				if (Math.abs(startIndex) > stackSize) {
					throw TypeError('absolute start index cannot be greater than stack size, got ' + startIndex);
				}
				if (startIndex < 0) {
					startIndex = stackSize + startIndex;
				}
				break;
			default:
				throw TypeError('start index must be a number if defined, got ' + startIndex);
		}
		switch (typeof endIndex) {
			case 'undefined':
				endIndex = stackSize;
				break;
			case 'number':
				if (Math.abs(endIndex) > stackSize) {
					throw TypeError('absolute end index cannot be greater than stack size, got ' + endIndex);
				}
				if (endIndex < 0) {
					endIndex = stackSize + endIndex;
				}
				break;
			default:
				throw TypeError('end index must be a number if defined, got ' + endIndex);
		}
		if (startIndex > endIndex) {
			throw TypeError('start index cannot be greater than end index');
		}

		removeFromStack(startIndex, endIndex);
	};

	App.addToStack = function (index, newPages) {
		// minus 1 because last item on stack is current page (which is untouchable)
		var stackSize = stack.length - 1;
		switch (typeof index) {
			case 'undefined':
				index = 0;
				break;
			case 'number':
				if (Math.abs(index) > stackSize) {
					throw TypeError('absolute index cannot be greater than stack size, got ' + index);
				}
				if (index < 0) {
					index = stackSize + index;
				}
				break;
			default:
				throw TypeError('index must be a number if defined, got ' + index);
		}
		if ( !Utils.isArray(newPages) ) {
			throw TypeError('added pages must be an array, got ' + newPages);
		}
		newPages = newPages.slice();
		Utils.forEach(newPages, function (page, i) {
			if (typeof page === 'string') {
				page = [page, {}];
			} else if ( Utils.isArray(page) ) {
				page = page.slice();
			} else {
				throw TypeError('page description must be an array (page name, arguments), got ' + page);
			}
			if (typeof page[0] !== 'string') {
				throw TypeError('page name must be a string, got ' + page[0]);
			}
			switch (typeof page[1]) {
				case 'undefined':
					page[1] = {};
				case 'object':
					break;
				default:
					throw TypeError('page arguments must be an object if defined, got ' + page[1]);
			}
			switch (typeof page[2]) {
				case 'undefined':
					page[2] = {};
				case 'object':
					break;
				default:
					throw TypeError('page options must be an object if defined, got ' + page[2]);
			}
			newPages[i] = page;
		});

		addToStack(index, newPages);
	};

	App.saveStack = function () {
		saveStack();
	};

	App.destroyStack = function () {
		destroyStack();
	};

	App.restore = setupRestoreFunction();

	return {
		get        : fetchStack ,
		getCurrent : fetchLastStackItem ,
		getPage    : fetchPage ,
		pop        : popLastStackItem ,
		push       : pushNewStackItem ,
		size       : fetchStackSize ,
		save       : saveStack ,
		destroy    : destroyStack
	};



	function saveStack () {
		try {
			var storedStack = [];
			for (var i=0, l=stack.length; i<l; i++) {
				if (stack[i][4].restorable === false) {
					break;
				}
				storedStack.push([stack[i][0], stack[i][3], stack[i][2]]);
			}
			localStorage[STACK_KEY] = JSON.stringify(storedStack);
			localStorage[STACK_TIME] = +new Date() + '';
		}
		catch (err) {}
	}

	function destroyStack () {
		delete localStorage[STACK_KEY];
		delete localStorage[STACK_TIME];
	}

	function fetchStack () {
		return stack.slice().map(reorganisePageData);
	}

	function fetchStackSize () {
		return stack.length;
	}

	function fetchLastStackItem () {
		var pageData = stack[stack.length-1];
		if (pageData) {
			return reorganisePageData(pageData);
		}
	}

	function popLastStackItem () {
		var pageData = stack.pop();
		if (pageData) {
			return reorganisePageData(pageData);
		}
	}

	function pushNewStackItem (pageData) {
		stack.push([pageData[0], pageData[3], pageData[4], pageData[1], pageData[2]]);
	}

	function fetchPage (index) {
		var pageData = stack[index];
		if (pageData) {
			return pageData[1];
		}
	}

	function reorganisePageData (pageData) {
		var pageArgs = {};
		for (var key in pageData[3]) {
			pageArgs[key] = pageData[3][key];
		}
		return [ pageData[0], pageArgs, pageData[4], pageData[1], pageData[2] ];
	}



	// you must manually save the stack if you choose to use this method
	function removeFromStackNow (startIndex, endIndex) {
		var deadPages = stack.splice(startIndex, endIndex - startIndex);

		Utils.forEach(deadPages, function (pageData) {
			Pages.startDestruction(pageData[0], pageData[4], pageData[1], pageData[3]);
			Pages.finishDestruction(pageData[0], pageData[4], pageData[1], pageData[3]);
		});
	}

	function removeFromStack (startIndex, endIndex) {
		App._Navigation.enqueue(function (finish) {
			removeFromStackNow(startIndex, endIndex);
			finish();
		});
	}

	// you must manually save the stack if you choose to use this method
	function addToStackNow (index, newPages, restored) {
		var pageDatas = [],
			lastPage;

		Utils.forEach(newPages, function (pageData) {
			var pageManager = Pages.createManager(true),
				page        = Pages.startGeneration(pageData[0], pageManager, pageData[1]);

			if (!pageData[2].transition && pageManager.transition) {
				pageData[2].transition = pageManager.transition;
			}

			Pages.populateBackButton(page, lastPage);

			Pages.finishGeneration(pageData[0], pageManager, page, pageData[1]);

			Scroll.saveScrollPosition(page);
			Scroll.saveScrollStyle(page);

			pageDatas.push([pageData[0], page, pageData[2], pageData[1], pageManager]);

			lastPage = page;
		});

		pageDatas.unshift(0);
		pageDatas.unshift(index);
		Array.prototype.splice.apply(stack, pageDatas);
	}

	function addToStack (index, newPages) {
		App._Navigation.enqueue(function (finish) {
			addToStackNow(index, newPages);
			finish();
		});
	}

	function setupRestoreFunction (options) {
		var storedStack, lastPage;

		try {
			storedStack = JSON.parse( localStorage[STACK_KEY] );
			storedTime  = parseInt( localStorage[STACK_TIME] );
			lastPage    = storedStack.pop();
		}
		catch (err) {
			return;
		}

		if ( !lastPage ) {
			return;
		}

		return function (options, callback) {
			switch (typeof options) {
				case 'function':
					callback = options;
				case 'undefined':
					options = {};
				case 'object':
					if (options !== null) {
						break;
					}
				default:
					throw TypeError('restore options must be an object if defined, got ' + options);
			}

			switch (typeof callback) {
				case 'undefined':
					callback = function () {};
				case 'function':
					break;
				default:
					throw TypeError('restore callback must be a function if defined, got ' + callback);
			}

			if (+new Date()-storedTime >= options.maxAge) {
				throw TypeError('restore content is too old');
			}

			if ( !Pages.has(lastPage[0]) ) {
				throw TypeError(lastPage[0] + ' is not a known page');
			}

			Utils.forEach(storedStack, function (pageData) {
				if ( !Pages.has(pageData[0]) ) {
					throw TypeError(pageData[0] + ' is not a known page');
				}
			});

			try {
				addToStackNow(0, storedStack, true);
			}
			catch (err) {
				removeFromStackNow(0, stack.length);
				throw Error('failed to restore stack');
			}

			saveStack();

			try {
				App.load(lastPage[0], lastPage[1], lastPage[2], callback);
			}
			catch (err) {
				removeFromStackNow(0, stack.length);
				throw Error('failed to restore stack');
			}
		};
	}
}(window, document, App, App._Utils, App._Scroll, App._Pages);
App._Transitions = function (window, document, Swapper, App, Utils, Scroll, Pages, Stack) {
	var TRANSITION_CLASS                  = 'app-transition',
		DEFAULT_TRANSITION_IOS            = 'slide-left',
		DEFAULT_TRANSITION_ANDROID        = 'implode-out',
		DEFAULT_TRANSITION_ANDROID_OLD    = 'fade-on',
		DEFAULT_TRANSITION_ANDROID_GHETTO = 'instant',
		REVERSE_TRANSITION = {
			'instant'           : 'instant'           ,
			'fade'              : 'fade'              ,
			'fade-on'           : 'fade-off'          ,
			'fade-off'          : 'fade-on'           ,
			'scale-in'          : 'scale-out'         ,
			'scale-out'         : 'scale-in'          ,
			'rotate-left'       : 'rotate-right'      ,
			'rotate-right'      : 'rotate-left'       ,
			'cube-left'         : 'cube-right'        ,
			'cube-right'        : 'cube-left'         ,
			'swap-left'         : 'swap-right'        ,
			'swap-right'        : 'swap-left'         ,
			'explode-in'        : 'explode-out'       ,
			'explode-out'       : 'explode-in'        ,
			'implode-in'        : 'implode-out'       ,
			'implode-out'       : 'implode-in'        ,
			'slide-left'        : 'slide-right'       ,
			'slide-right'       : 'slide-left'        ,
			'slide-up'          : 'slide-down'        ,
			'slide-down'        : 'slide-up'          ,
			'slideon-left'      : 'slideoff-left'     ,
			'slideon-right'     : 'slideoff-right'    ,
			'slideon-up'        : 'slideoff-up'       ,
			'slideon-down'      : 'slideoff-down'     ,
			'slideoff-left'     : 'slideon-left'      ,
			'slideoff-right'    : 'slideon-right'     ,
			'slideoff-up'       : 'slideon-up'        ,
			'slideoff-down'     : 'slideon-down'      ,
			'slideon-left-ios'  : 'slideoff-right-ios',
			'glideon-right'     : 'glideoff-right'    ,
			'glideoff-right'    : 'slideon-right'     ,
			'glideon-left'      : 'glideoff-left'     ,
			'glideoff-left'     : 'slideon-left'      ,
			'glideon-down'      : 'glideoff-down'     ,
			'glideoff-down'     : 'slideon-down'      ,
			'glideon-up'        : 'glideoff-up'       ,
			'glideoff-up'       : 'slideon-up'
		},
		WALL_RADIUS = 10;


	var shouldDrag = false,
		defaultTransition, reverseTransition, dragLock;

	if (Utils.os.ios) {
		setDefaultTransition(DEFAULT_TRANSITION_IOS);
	} else if (Utils.os.android) {
		if (Utils.os.version >= 4) {
			setDefaultTransition(DEFAULT_TRANSITION_ANDROID);
		} else if ((Utils.os.version < 2.3) || /LT15a/i.test(navigator.userAgent)) {
			setDefaultTransition(DEFAULT_TRANSITION_ANDROID_GHETTO);
		} else {
			setDefaultTransition(DEFAULT_TRANSITION_ANDROID_OLD);
		}
	}

	checkForDragTransitionMetaTag();


	App.setDefaultTransition = function (transition) {
		if (typeof transition === 'object') {
			switch (Utils.os.name) {
				case 'android':
					if ((Utils.os.version < 4) && transition.androidFallback) {
						transition = transition.androidFallback;
					} else {
						transition = transition.android;
					}
					break;
				case 'ios':
					if ((Utils.os.version < 5) && transition.iosFallback) {
						transition = transition.iosFallback;
					} else {
						transition = transition.ios;
					}
					break;
				default:
					transition = transition.fallback;
					break;
			}
			if ( !transition ) {
				return;
			}
		}

		if (typeof transition !== 'string') {
			throw TypeError('transition must be a string if defined, got ' + transition);
		}

		if ( !(transition in REVERSE_TRANSITION) ) {
			throw TypeError('invalid transition type, got ' + transition);
		}

		setDefaultTransition(transition);
	};

	App.getDefaultTransition = function () {
		return defaultTransition;
	};

	App.getReverseTransition = function () {
		return reverseTransition;
	};

	App.enableDragTransition = function () {
		allowDragging();
	};


	return {
		REVERSE_TRANSITION : REVERSE_TRANSITION        ,
		run                : performTransition         ,
		enableDrag         : enableIOS7DragTransition  ,
		disableDrag        : disableIOS7DragTransition
	};



	function setDefaultTransition (transition) {
		defaultTransition = transition;
		reverseTransition = REVERSE_TRANSITION[defaultTransition];
	}

	function shouldUseNativeIOSTransition (transition) {
		if ( !Utils.os.ios ) {
			return false;
		} else if (transition === 'slide-left') {
			return true;
		} else if (transition === 'slide-right') {
			return true;
		} else {
			return false;
		}
	}



	function performTransition (oldPage, page, options, callback, reverse) {
		if ( !options.transition ) {
			options.transition = (reverse ? reverseTransition : defaultTransition);
		}
		var isIOS7SlideUp = (Utils.os.ios && (Utils.os.version >= 7) && { 'slideon-down':1, 'slideoff-down':1 }[options.transition]);
		if ( !options.duration ) {
			if ( !Utils.os.ios ) {
				options.duration = 270;
			} else if (Utils.os.version < 7) {
				options.duration = 325;
			} else if (isIOS7SlideUp) {
				options.duration = 475;
			} else {
				options.duration = 425;
			}
		}
		if (!options.easing && isIOS7SlideUp) {
			options.easing = 'cubic-bezier(0.4,0.6,0.05,1)';
		}
		if (Utils.os.ios && !options.easing && (options.transition === 'slideon-left-ios' || options.transition === 'slideoff-right-ios')) {
			if (Utils.os.version < 7) {
				options.easing = 'ease-in-out';
			} else {
				options.easing = 'cubic-bezier(0.4,0.6,0.2,1)';
			}
		}

		document.body.className += ' ' + TRANSITION_CLASS;

		if (options.transition === 'instant') {
			Swapper(oldPage, page, options, function () {
				//TODO: this is stupid. let it be synchronous if it can be.
				//TODO: fix the root of the race in core navigation.
				setTimeout(finish, 0);
			});
		} else if ( shouldUseNativeIOSTransition(options.transition) ) {
			performNativeIOSTransition(oldPage, page, options, finish);
		} else {
			Swapper(oldPage, page, options, finish);
		}

		function finish () {
			document.body.className = document.body.className.replace(new RegExp('\\b'+TRANSITION_CLASS+'\\b'), '');
			callback();
		}
	}



	function performNativeIOSTransition (oldPage, page, options, callback) {
		var slideLeft   = (options.transition === 'slide-left'),
			topPage     = slideLeft ? page : oldPage ,
			transitions = getNativeIOSTransitionList(page, oldPage, slideLeft);

		if ( !transitions ) {
			// proper iOS transition not possible, fallback to normal
			Swapper(oldPage, page, options, callback);
			return;
		}

		var oldPosition   = topPage.style.position,
			oldZIndex     = topPage.style.zIndex,
			oldBackground = topPage.style.background;
		topPage.style.position   = 'fixed';
		topPage.style.zIndex     = '4000';
		topPage.style.background = 'none';

		if (slideLeft) {
			oldPage.parentNode.insertBefore(page, oldPage);
		}
		else if (oldPage.nextSibling) {
			oldPage.parentNode.insertBefore(page, oldPage.nextSibling);
		}
		else {
			oldPage.parentNode.appendChild(page);
		}

		if (App._Pages) {
			App._Pages.fixContent(oldPage);
			App._Pages.fixContent(page);
		}

		if (Utils.os.version < 7) {
			options.easing = 'ease-in-out';
		} else {
			options.easing = 'cubic-bezier(0.4,0.6,0.2,1)';
		}

		Utils.animate(transitions, options.duration, options.easing, function () {
			oldPage.parentNode.removeChild(oldPage);

			topPage.style.position   = oldPosition;
			topPage.style.zIndex     = oldZIndex;
			topPage.style.background = oldBackground;

			callback();
		});
	}

	function getNativeIOSTransitionList (page, oldPage, slideLeft) {
		var currentBar     = oldPage.querySelector('.app-topbar'),
			currentTitle   = oldPage.querySelector('.app-topbar .app-title'),
			currentBack    = oldPage.querySelector('.app-topbar .left.app-button'),
			currentContent = oldPage.querySelector('.app-content'),
			newBar         = page.querySelector('.app-topbar'),
			newTitle       = page.querySelector('.app-topbar .app-title'),
			newBack        = page.querySelector('.app-topbar .left.app-button'),
			newContent     = page.querySelector('.app-content'),
			transitions    = [];

		if (!currentBar || !newBar || !currentContent || !newContent || !Utils.isVisible(currentBar) || !Utils.isVisible(newBar)) {
			return;
		}

		if (currentBack && (currentBack.getAttribute('data-noslide') !== null)) {
			currentBack = undefined;
		}
		if (newBack && (newBack.getAttribute('data-noslide') !== null)) {
			newBack = undefined;
		}

		// fade topbar
		if (slideLeft) {
			transitions.push({
				opacityStart : 0 ,
				opacityEnd   : 1 ,
				elem         : newBar
			});
		} else {
			transitions.push({
				opacityStart : 1 ,
				opacityEnd   : 0 ,
				elem         : currentBar
			});
		}

		// slide titles
		if (currentTitle) {
			transitions.push({
				transitionStart : 'translate3d(0,0,0)' ,
				transitionEnd   : 'translate3d('+getTitleTransform(newBack, slideLeft)+'px,0,0)' ,
				elem            : currentTitle
			});
		}
		if (newTitle) {
			transitions.push({
				transitionStart : 'translate3d('+getTitleTransform(currentBack, !slideLeft)+'px,0,0)' ,
				transitionEnd   : 'translate3d(0,0,0)' ,
				elem            : newTitle
			});
		}

		// slide back button
		if (Utils.os.version >= 5) {
			if (currentBack) {
				transitions.push({
					transitionStart : 'translate3d(0,0,0)' ,
					transitionEnd   : 'translate3d('+getBackTransform(currentBack, newBack, !slideLeft)+'px,0,0)' ,
					elem            : currentBack
				});
			}
			if (newBack) {
				transitions.push({
					transitionStart : 'translate3d('+getBackTransform(newBack, currentBack, slideLeft)+'px,0,0)' ,
					transitionEnd   : 'translate3d(0,0,0)' ,
					elem            : newBack
				});
			}
		}

		// slide contents
		if (Utils.os.version < 7) {
			transitions.push({
				transitionStart : 'translate3d(0,0,0)' ,
				transitionEnd   : 'translate3d('+(slideLeft?-100:100)+'%,0,0)' ,
				elem            : currentContent
			}, {
				transitionStart : 'translate3d('+(slideLeft?100:-100)+'%,0,0)' ,
				transitionEnd   : 'translate3d(0,0,0)' ,
				elem            : newContent
			});
		} else {
			transitions.push({
				transitionStart : 'translate3d(0,0,0)' ,
				transitionEnd   : 'translate3d('+(slideLeft?-30:100)+'%,0,0)' ,
				elem            : currentContent
			}, {
				transitionStart : 'translate3d('+(slideLeft?100:-30)+'%,0,0)' ,
				transitionEnd   : 'translate3d(0,0,0)' ,
				elem            : newContent
			});
		}

		return transitions;
	}

	function getBackTransform (backButton, oldButton, toCenter) {
		var fullWidth = backButton.textContent.length * (Utils.os.version<7?10:12),
			oldWidth  = oldButton ? (oldButton.textContent.length*15) : 0;
		if ( !toCenter ) {
			return (oldWidth-window.innerWidth) / 2;
		} else {
			return (window.innerWidth-fullWidth) / 2;
		}
	}

	function getTitleTransform (backButton, toLeft) {
		var fullWidth = 0;
		if (backButton && (Utils.os.version >= 5)) {
			fullWidth = backButton.textContent.length * (Utils.os.version<7?10:12);
		}
		if ( !toLeft ) {
			return (window.innerWidth / 2);
		} else {
			return (fullWidth-window.innerWidth) / 2;
		}
	}



	function allowDragging () {
		shouldDrag = true;
	}

	function checkForDragTransitionMetaTag() {
		var metas = document.querySelectorAll('meta');
		for (var i=0, l=metas.length; i<l; i++) {
			if ((metas[i].name === 'app-drag-transition') && (metas[i].content === 'true')) {
				allowDragging();
				return;
			}
		}
	}

	function enableIOS7DragTransition () {
		if (!shouldDrag || !Utils.os.ios || (Utils.os.version < 7)) {
			return;
		}

		var pages        = Stack.get().slice(-2),
			previousPage = pages[0],
			currentPage  = pages[1],
			draggingTouch, lastTouch, navigationLock, dead, slideLeft;
		if (!previousPage || !currentPage) {
			return;
		}

		var currentNode    = currentPage[3],
			currentBar     = currentPage[3].querySelector('.app-topbar'),
			currentTitle   = currentPage[3].querySelector('.app-topbar .app-title'),
			currentBack    = currentPage[3].querySelector('.app-topbar .left.app-button'),
			currentContent = currentPage[3].querySelector('.app-content'),
			oldNode        = previousPage[3],
			oldBar         = previousPage[3].querySelector('.app-topbar'),
			oldTitle       = previousPage[3].querySelector('.app-topbar .app-title'),
			oldBack        = previousPage[3].querySelector('.app-topbar .left.app-button'),
			oldContent     = previousPage[3].querySelector('.app-content');

		if (!currentNode || !currentBar || !currentContent || !oldNode || !oldBar || !oldContent) {
			return;
		}

		var dragableTransitions = ['slide-left', 'slideon-left-ios'];
		if ((dragableTransitions.indexOf(currentPage[4].transition) === -1) && (currentPage[4].transition || dragableTransitions.indexOf(defaultTransition) === -1)) {
			return;
		} else if ((currentPage[4].transition === 'slide-left') || (!currentPage[4].transition && 'slide-left' === defaultTransition)) {
			slideLeft = true;
		}

		var oldPosition   = currentPage[3].style.position,
			oldZIndex     = currentPage[3].style.zIndex,
			oldBackground = currentPage[3].style.background;
		currentPage[3].style.position   = 'fixed';
		currentPage[3].style.zIndex     = '4000';
		currentPage[3].style.background = 'none'; //TODO: this sucks
		if (currentPage[3].nextSibling) {
			currentPage[3].parentNode.insertBefore(previousPage[3], currentPage[3].nextSibling);
		}
		else {
			currentPage[3].parentNode.appendChild(previousPage[3]);
		}

		Pages.fixContent(oldNode);
		Scroll.restoreScrollPosition(oldNode);

		window.addEventListener('touchstart' , startDrag , false);
		window.addEventListener('touchmove'  , dragMove  , false);
		window.addEventListener('touchcancel', finishDrag, false);
		window.addEventListener('touchend'   , finishDrag, false);

		var goBack = false;

		dragLock = function () {
			unbindListeners();
			cleanupElems();
		};

		function unbindListeners () {
			window.removeEventListener('touchstart' , startDrag );
			window.removeEventListener('touchmove'  , dragMove  );
			window.removeEventListener('touchcancel', finishDrag);
			window.removeEventListener('touchend'   , finishDrag);
		}

		function cleanupElems () {
			currentPage[3].style.position   = oldPosition;
			currentPage[3].style.zIndex     = oldZIndex;
			currentPage[3].style.background = oldBackground;
			if (previousPage[3].parentNode) {
				previousPage[3].parentNode.removeChild(previousPage[3]);
			}
		}

		function startDrag (e) {
			if (draggingTouch || navigationLock || dead) {
				return;
			}
			var touch = (e.touches && e.touches[0]);
			if (!touch || (touch.pageX > WALL_RADIUS)) {
				return;
			}

			if ( !Pages.fire(currentPage[2], currentPage[3], Pages.EVENTS.BEFORE_BACK) ) {
				return;
			}

			e.preventDefault();

			App._Navigation.enqueue(function (unlock) {
				navigationLock = unlock;
				//TODO: what if transition is already over?
			}, true);

			document.body.className += ' ' + TRANSITION_CLASS;

			draggingTouch = lastTouch = { x: touch.pageX, y: touch.pageY };

			currentBar.style.webkitTransition = 'all 0s linear';
			if (currentTitle) {
				currentTitle.style.webkitTransition = 'all 0s linear';
			}
			if (currentBack) {
				currentBack.style.webkitTransition = 'all 0s linear';
			}
			currentContent.style.webkitTransition = 'all 0s linear';
			oldBar.style.webkitTransition = 'all 0s linear';
			if (oldTitle) {
				oldTitle.style.webkitTransition = 'all 0s linear';
			}
			if (oldBack) {
				oldBack.style.webkitTransition = 'all 0s linear';
			}
			oldContent.style.webkitTransition = 'all 0s linear';
		}

		function dragMove (e) {
			if (draggingTouch && e.touches && e.touches[0] && !dead) {
				if (lastTouch) {
					goBack = (lastTouch.x < e.touches[0].pageX);
				}
				lastTouch = { x: e.touches[0].pageX, y: e.touches[0].pageY };

				var progress = Math.min(Math.max(0, (lastTouch.x-draggingTouch.x)/window.innerWidth), 1);
				setDragPosition(progress);
			}
		}

		function finishDrag (e) {
			if (!draggingTouch || !navigationLock || dead) {
				return;
			}

			unbindListeners();

			lastTouch = (e.touches && e.touches[0]) || lastTouch;
			var progess = 0;
			if (lastTouch) {
				progress = (lastTouch.x-draggingTouch.x)/window.innerWidth;
			}
			var dontTransition = ((progress < 0.1 && !goBack) || (0.9 < progress && goBack));

			if ( !dontTransition ) {
				currentBar.style.webkitTransitionDuration = '0.15s';
				if (currentTitle) {
					currentTitle.style.webkitTransitionDuration = '0.15s';
				}
				if (currentBack) {
					currentBack.style.webkitTransitionDuration = '0.15s';
				}
				currentContent.style.webkitTransitionDuration = '0.15s';
				oldBar.style.webkitTransitionDuration = '0.15s';
				if (oldTitle) {
					oldTitle.style.webkitTransitionDuration = '0.15s';
				}
				if (oldBack) {
					oldBack.style.webkitTransitionDuration = '0.15s';
				}
				oldContent.style.webkitTransitionDuration = '0.15s';
			}

			if (goBack) {
				Pages.fire(currentPage[2], currentPage[3], Pages.EVENTS.BACK);
				setDragPosition(1);
			} else {
				setDragPosition(0);
			}
			draggingTouch = lastTouch = null;

			if ( !dontTransition ) {
				currentPage[3].addEventListener('webkitTransitionEnd', finishTransition, false);
			} else {
				finishTransition();
			}

			function finishTransition () {
				currentPage[3].removeEventListener('webkitTransitionEnd', finishTransition);

				if (goBack) {
					if (currentPage[3].parentNode) {
						currentPage[3].parentNode.removeChild(currentPage[3]);
					}
				} else {
					if (previousPage[3].parentNode) {
						previousPage[3].parentNode.removeChild(previousPage[3]);
					}
				}

				currentPage[3].style.position   = oldPosition;
				currentPage[3].style.zIndex     = oldZIndex;
				currentPage[3].style.background = oldBackground;

				currentBar.style.webkitTransition = '';
				currentBar.style.webkitTransform = '';
				if (currentTitle) {
					currentTitle.style.webkitTransition = '';
					currentTitle.style.webkitTransform = '';
				}
				if (currentBack) {
					currentBack.style.webkitTransition = '';
					currentBack.style.webkitTransform = '';
				}
				currentContent.style.webkitTransition = '';
				currentContent.style.webkitTransform = '';
				oldBar.style.webkitTransition = '';
				oldBar.style.webkitTransform = '';
				if (oldTitle) {
					oldTitle.style.webkitTransition = '';
					oldTitle.style.webkitTransform = '';
				}
				if (oldBack) {
					oldBack.style.webkitTransition = '';
					oldBack.style.webkitTransform = '';
				}
				oldContent.style.webkitTransition = '';
				oldContent.style.webkitTransform = '';

				document.body.className = document.body.className.replace(new RegExp('\\b'+TRANSITION_CLASS+'\\b'), '');

				if (goBack) {
					Pages.startDestruction(currentPage[0], currentPage[2], currentPage[3], currentPage[1]);
					Pages.fixContent(oldNode);
					Scroll.restoreScrollStyle(oldNode);
					currentPage[2].showing = false
					Pages.fire(currentPage[2], currentPage[3], Pages.EVENTS.HIDE);
					previousPage[2].showing = true
					Pages.fire(previousPage[2], oldNode, Pages.EVENTS.SHOW);
					Pages.finishDestruction(currentPage[0], currentPage[2], currentPage[3], currentPage[1]);

					Stack.pop();
					App._Navigation.update();
				}

				dragLock = null;
				navigationLock();
			}
		}

		function setDragPosition (progress) {
			if (slideLeft) {
				currentBar.style.opacity = 1-progress;
				if (currentTitle) {
					currentTitle.style.webkitTransform = 'translate3d('+(progress*window.innerWidth/2)+'px,0,0)';
				}
				if (currentBack) {
					currentBack.style.webkitTransform = 'translate3d('+(progress*(window.innerWidth-currentBack.textContent.length*12)/2)+'px,0,0)';
				}
				if (oldTitle) {
					oldTitle.style.webkitTransform = 'translate3d('+((1-progress)*(window.innerWidth-currentBack.textContent.length*12)/-2)+'px,0,0)';
				}
				if (oldBack) {
					oldBack.style.webkitTransform = 'translate3d('+((1-progress)*-150)+'%,0,0)';
				}
			} else {
				currentBar.style.webkitTransform = 'translate3d('+(progress*100)+'%,0,0)';
				oldBar.style.webkitTransform = 'translate3d('+((1-progress)*-30)+'%,0,0)';
			}
			currentContent.style.webkitTransform = 'translate3d('+(progress*100)+'%,0,0)';
			oldContent.style.webkitTransform = 'translate3d('+((1-progress)*-30)+'%,0,0)';
		}
	}

	function disableIOS7DragTransition () {
		if (dragLock) {
			dragLock();
			dragLock = null;
		}
	}
}(window, document, Swapper, App, App._Utils, App._Scroll, App._Pages, App._Stack);
App._Navigation = function (window, document, App, Dialog, Scroll, Pages, Stack, Transitions) {
	var navQueue = [],
		navLock  = false,
		current, currentNode;

	App.current = function () {
		return current;
	};

	App.load = function (pageName, args, options, callback) {
		if (typeof pageName !== 'string') {
			throw TypeError('page name must be a string, got ' + pageName);
		}
		switch (typeof args) {
			case 'function':
				options = args;
				args    = {};
			case 'string':
				callback = options;
				options  = args;
			case 'undefined':
				args = {};
			case 'object':
				break;
			default:
				throw TypeError('page arguments must be an object if defined, got ' + args);
		}
		switch (typeof options) {
			case 'function':
				callback = options;
			case 'undefined':
				options = {};
			case 'object':
				break;
			case 'string':
				options = { transition : options };
				break;
			default:
				throw TypeError('options must be an object if defined, got ' + options);
		}
		switch (typeof callback) {
			case 'undefined':
				callback = function () {};
			case 'function':
				break;
			default:
				throw TypeError('callback must be a function if defined, got ' + callback);
		}

		return loadPage(pageName, args, options, callback);
	};

	App.back = function (pageName, callback) {
		switch (typeof pageName) {
			case 'function':
				callback = pageName;
			case 'undefined':
				pageName = undefined;
			case 'string':
				break;
			default:
				throw TypeError('pageName must be a string if defined, got ' + pageName);
		}
		switch (typeof callback) {
			case 'undefined':
				callback = function () {};
			case 'function':
				break;
			default:
				throw TypeError('callback must be a function if defined, got ' + callback);
		}

		return navigateBack(pageName, callback);
	};

	App.pick = function (pageName, args, options, loadCallback, callback) {
		if (typeof pageName !== 'string') {
			throw TypeError('page name must be a string, got ' + pageName);
		}
		switch (typeof args) {
			case 'function':
				options = args;
				args    = {};
			case 'string':
				callback     = loadCallback;
				loadCallback = options;
				options      = args;
			case 'undefined':
				args = {};
			case 'object':
				break;
			default:
				throw TypeError('page arguments must be an object if defined, got ' + args);
		}
		switch (typeof options) {
			case 'function':
				callback     = loadCallback;
				loadCallback = options;
			case 'undefined':
				options = {};
			case 'object':
				break;
			case 'string':
				options = { transition : options };
				break;
			default:
				throw TypeError('options must be an object if defined, got ' + options);
		}
		if (typeof loadCallback !== 'function') {
			throw TypeError('callback must be a function, got ' + loadCallback);
		}
		switch (typeof callback) {
			case 'undefined':
				callback     = loadCallback;
				loadCallback = function () {};
			case 'function':
				break;
			default:
				throw TypeError('callback must be a function, got ' + callback);
		}

		return pickPage(pageName, args, options, loadCallback, callback);
	};

	return {
		getCurrentNode : getCurrentNode ,
		update         : updateCurrentNode ,
		enqueue        : navigate
	};



	function navigate (handler, dragTransition) {
		if (navLock) {
			navQueue.push(handler);
			return false;
		}

		navLock = true;
		if ( !dragTransition ) {
			Transitions.disableDrag();
		}

		handler(function () {
			Stack.save();

			navLock = false;
			if ( !processNavigationQueue() ) {
				Transitions.enableDrag();
			}
		});

		return true;
	}

	function processNavigationQueue () {
		if ( navQueue.length ) {
			navigate( navQueue.shift() );
			return true;
		} else {
			return false;
		}
	}



	function getCurrentNode () {
		return currentNode;
	}

	function updateCurrentNode () {
		var lastStackItem = Stack.getCurrent();
		current = lastStackItem[0]
		currentNode = lastStackItem[3];
	}

	function loadPage (pageName, args, options, callback, setupPickerMode) {
		navigate(function (unlock) {
			var oldNode     = currentNode,
				pageManager = Pages.createManager(false);

			if (setupPickerMode) {
				setupPickerMode(pageManager);
			}

			var page           = Pages.startGeneration(pageName, pageManager, args),
				restoreData    = Stack.getCurrent(),
				restoreNode    = restoreData && restoreData[3],
				restoreManager = restoreData && restoreData[2];

			if (!options.transition && pageManager.transition) {
				options.transition = pageManager.transition;
			}

			Pages.populateBackButton(page, oldNode || restoreNode);

			if ( !current ) {
				App.restore = null;
				document.body.appendChild(page);
				Pages.fire(pageManager, page, Pages.EVENTS.LAYOUT);
				updatePageData();
				finish();
			} else {
				Scroll.saveScrollPosition(currentNode);
				var newOptions = {};
				for (var key in options) {
					newOptions[key] = options[key];
				}
				uiBlockedTask(function (unlockUI) {
					Transitions.run(currentNode, page, newOptions, function () {
						Pages.fixContent(page);
						unlockUI();
						finish();
					});
					Pages.fire(pageManager, page, Pages.EVENTS.LAYOUT);
				});
				//TODO: what if instant swap?
				updatePageData();
			}

			function updatePageData () {
				current     = pageName;
				currentNode = page;
				Stack.push([ pageName, args, pageManager, page, options ]);
				if (oldNode && restoreManager) {
					Pages.fire(restoreManager, oldNode, Pages.EVENTS.FORWARD);
				}
			}

			function finish () {
				Scroll.saveScrollStyle(oldNode);
				Pages.finishGeneration(pageName, pageManager, page, args);

				unlock();
				callback();

				if (oldNode && restoreManager) {
					restoreManager.showing = false
					Pages.fire(restoreManager, oldNode, Pages.EVENTS.HIDE);
				}
				pageManager.showing = true;
				Pages.fire(pageManager, page, Pages.EVENTS.SHOW);
			}
		});

		if ( !Pages.has(pageName) ) {
			return false;
		}
	}

	function navigateBack (backPageName, callback) {
		if (Dialog.status() && Dialog.close() && !backPageName) {
			callback();
			return;
		}

		var stack = Stack.get().map(function (page) {
			return page[0];
		});

		if ( !stack.length ) {
			throw Error(backPageName+' is not currently in the stack, cannot go back to it');
		}

		if (backPageName) {
			var index = -1;
			for (var i=stack.length-1; i>=0; i--) {
				if (stack[i] === backPageName) {
					index = i;
					break;
				}
			}
			if (index === -1) {
				throw Error(backPageName+' is not currently in the stack, cannot go back to it');
			}
			if (index !== stack.length-2) {
				App.removeFromStack(index+1);
			}
		}

		var stackLength = stack.length,
			cancelled   = false;

		var navigatedImmediately = navigate(function (unlock) {
			if (Stack.size() < 2) {
				unlock();
				return;
			}

			var oldPage = Stack.getCurrent();

			if ( !Pages.fire(oldPage[2], oldPage[3], Pages.EVENTS.BEFORE_BACK) ) {
				cancelled = true;
				unlock();
				return;
			}
			else {
				Stack.pop();
			}

			var data       = Stack.getCurrent(),
				pageName   = data[0],
				page       = data[3],
				oldOptions = oldPage[4];

			Pages.fire(oldPage[2], oldPage[3], Pages.EVENTS.BACK);

			Pages.fixContent(page);

			Pages.startDestruction(oldPage[0], oldPage[2], oldPage[3], oldPage[1]);

			Scroll.restoreScrollPosition(page);

			var newOptions = {};
			for (var key in oldOptions) {
				if (key === 'transition') {
					newOptions[key] = Transitions.REVERSE_TRANSITION[ oldOptions[key] ] || oldOptions[key];
				}
				else {
					newOptions[key] = oldOptions[key];
				}
			}

			uiBlockedTask(function (unlockUI) {
				Transitions.run(currentNode, page, newOptions, function () {
					Pages.fixContent(page);
					Scroll.restoreScrollStyle(page);
					unlockUI();

					oldPage[2].showing = false
					Pages.fire(oldPage[2], oldPage[3], Pages.EVENTS.HIDE);
					data[2].showing = true
					Pages.fire(data[2], page, Pages.EVENTS.SHOW);

					setTimeout(function () {
						Pages.finishDestruction(oldPage[0], oldPage[2], oldPage[3], oldPage[1]);

						unlock();
						callback();
					}, 0);
				}, true);
				Pages.fixContent(page);
				Pages.fire(data[2], page, Pages.EVENTS.LAYOUT);
			});

			current     = pageName;
			currentNode = page;
		});

		if (cancelled || (navigatedImmediately && (stackLength < 2))) {
			return false;
		}
	}

	function pickPage (pageName, args, options, loadCallback, callback) {
		var finished = false;
		loadPage(pageName, args, options, loadCallback, function (pageManager) {
			pageManager.restorable = false;
			pageManager.reply = function () {
				if ( !finished ) {
					finished = true;
					if ( !pageManager._appNoBack ) {
						navigateBack(undefined, function(){});
					}
					callback.apply(App, arguments);
				}
			};
		});
	}



	// blocks UI interaction during some aysnchronous task
	// is not locked because multiple calls dont effect eachother
	function uiBlockedTask (task) {
		var taskComplete = false;

		var clickBlocker = document.createElement('div');
		clickBlocker.className = 'app-clickblocker';
		document.body.appendChild(clickBlocker);
		clickBlocker.addEventListener('touchstart', function (e) {
			e.preventDefault();
		}, false);

		task(function () {
			if (taskComplete) {
				return;
			}
			taskComplete = true;

			document.body.removeChild(clickBlocker);
		});
	}
}(window, document, App, App._Dialog, App._Scroll, App._Pages, App._Stack, App._Transitions);

function getNews() {
    return $.get("/app/api/news", {}, "json");
}

function signup(name, message) {
    return $.post("/app/api/signup", {
        name: name,
        message: message
    }, "json");
}

function info() {
    return $.get('/app/api/info', {}, 'json');
}

function signupActivity(newsId, name, message) {
    return $.post("/app/api/signupActivity", {
        id: newsId,
        name: name,
        message: message
    }, "json");
}

function feedback(message) {
    return $.post('/app/api/feedback', {
        message: message
    }, "json");
}

var $wheelButton;

function HomeController(page) {
    this.page = page;
    this.$page = $(page);
    this.$news = this.$page.find('.news');


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
        console.log
    }));
}

HomeController.prototype.onReady = function() {

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

        if (!detail) {
            return;
        }

        $wheelButton.wheelmenu('hide', {
            trigger: "click",
            animation: 'fly',
            animationSpeed: 'fast',
            angle: "NE"
        });
        App.load('news-detail', detail);
    });
}

App.controller('news', HomeController);

function NewsDetailController(page, detail) {

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
                if (data.ret_code === 1001) {
                    return App.load('login');
                }
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
        console.log
    }));
}

NewsDetailController.onReady = function() {
    this.detail.desc = this.detail.content;
    $(this.tpl(this.detail)).appendTo(this.$detail);

    if (this.detail.headline) {
        this.$detail.addClass("headline");
    }

    this.$page.find('.app-title').html(this.detail.title);
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
                if (data.ret_code === 1001) {
                    return App.load('login');
                }

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
    var $page = $(page);
    var $head = $page.find('.head');
    var $logout = $page.find('.logout');

    info().then(function(data) {
        if (data.ret_code === 1001) {
            $page.find('.baidu').show();
            $page.find('.others').show();
            return;
        }

        $page.find('.header').remove();
        $('<img class="avatar" src="' + data.avatar + '">').appendTo($head);
        $('<br><span>' + data.username + '</span>').appendTo($head);

        $logout.show();
    });

    var loginBaiduButton = $page.find('.baidu button');
    var loginWeiboButton = $page.find('button.weibo');

    loginBaiduButton.click(function() {
        window.location = '/oauth/login/baidu';
    });

    loginWeiboButton.click(function() {
        window.location = '/oauth/login/weibo';
    });

    var logoutButton = $logout.find('button');
    logoutButton.click(function() {
        window.location = '/app/logout'
    });
});

$(function() {
    try {
        App.restore({
            maxAge: 5 * 60 * 1000
        });
    } catch (err) {
        App.load('news');
    }

    $wheelButton = $(".wheel-button");
    var $menuItems = $('ul.wheel');
    $wheelButton.wheelmenu({
        trigger: "click",
        animation: "fly",
        animationSpeed: "fast",
        angle: "NE",
    });

    $('.wheel .aboutme a').on('tap', function(e) {
        e.preventDefault();
        $wheelButton.wheelmenu('hide', {
            trigger: "click",
            animation: 'fly',
            animationSpeed: 'fast',
            angle: "NE"
        });
        App.load('aboutme');
    });

    $('.wheel .feedback a').on('tap', function(e) {
        e.preventDefault();
        $wheelButton.wheelmenu('hide', {
            trigger: "click",
            animation: 'fly',
            animationSpeed: 'fast',
            angle: "NE"
        });

        App.load('feedback');
    });

    $('.wheel .resume a').on('tap', function(e) {
        e.preventDefault();
        $wheelButton.wheelmenu('hide', {
            trigger: "click",
            animation: 'fly',
            animationSpeed: 'fast',
            angle: "NE"
        });

        App.load('resume');
    });

    $('.wheel .personality a').on('tap', function(e) {
        e.preventDefault();
        $wheelButton.wheelmenu('hide', {
            trigger: "click",
            animation: 'fly',
            animationSeed: 'fast',
            angle: "NE"
        });

        App.load('login');
    });
});
