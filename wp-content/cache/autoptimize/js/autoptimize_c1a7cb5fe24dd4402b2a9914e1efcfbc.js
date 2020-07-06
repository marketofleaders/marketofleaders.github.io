/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);
!function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){function t(e){return new RegExp("(^| )"+e+"( |$)")}function e(e,t,n){for(var i=0;i<e.length;i++)t.call(n,e[i])}function n(e){this.element=e}n.prototype={add:function(){e(arguments,function(e){this.contains(e)||(this.element.className+=0<this.element.className.length?" "+e:e)},this)},remove:function(){e(arguments,function(e){this.element.className=this.element.className.replace(t(e),"")},this)},toggle:function(e){return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)},contains:function(e){return t(e).test(this.element.className)},replace:function(e,t){this.remove(e),this.add(t)}},"classList"in Element.prototype||Object.defineProperty(Element.prototype,"classList",{get:function(){return new n(this)}}),window.DOMTokenList&&null==DOMTokenList.prototype.replace&&(DOMTokenList.prototype.replace=n.prototype.replace)}(),function(a,r){var e=new function(){this.cookiesAccepted=null,this.noticeContainer=null,this.setStatus=function(e){var t=this;"1"===cnArgs.onScroll&&a.removeEventListener("scroll",this.handleScroll);var n=new Date,i=new Date;"accept"===e?(e="true",i.setTime(parseInt(n.getTime())+1e3*parseInt(cnArgs.cookieTime))):(e="false",i.setTime(parseInt(n.getTime())+1e3*parseInt(cnArgs.cookieTimeRejected))),r.cookie=cnArgs.cookieName+"="+e+";expires="+i.toUTCString()+";"+(cnArgs.cookieDomain?"domain="+cnArgs.cookieDomain+";":"")+(cnArgs.cookiePath?"path="+cnArgs.cookiePath+";":"")+("1"===cnArgs.secure?"secure;":""),this.cookiesAccepted="true"===e;var o=new CustomEvent("setCookieNotice",{detail:{value:e,time:n,expires:i,data:cnArgs}});if(r.dispatchEvent(o),this.setBodyClass(["cookies-set","true"===e?"cookies-accepted":"cookies-refused"]),this.hideCookieNotice(),"automatic"===cnArgs.revokeCookiesOpt&&(this.noticeContainer.addEventListener("animationend",function e(){t.noticeContainer.removeEventListener("animationend",e),t.showRevokeNotice()}),this.noticeContainer.addEventListener("webkitAnimationEnd",function e(){t.noticeContainer.removeEventListener("webkitAnimationEnd",e),t.showRevokeNotice()})),"1"===cnArgs.redirection&&("true"===e&&null===this.cookiesAccepted||e!==this.cookiesAccepted&&null!==this.cookiesAccepted)){var s=a.location.protocol+"//",c=a.location.host+"/"+a.location.pathname;"1"===cnArgs.cache?(s=s+c.replace("//","/")+(""===a.location.search?"?":a.location.search+"&")+"cn-reloaded=1"+a.location.hash,a.location.href=s):(s=s+c.replace("//","/")+a.location.search+a.location.hash,a.location.reload(!0))}else;},this.getStatus=function(e){var t=("; "+r.cookie).split("; cookie_notice_accepted=");if(2!==t.length)return null;var n=t.pop().split(";").shift();return e?"true"===n:n},this.showCookieNotice=function(){var t=this,e=new CustomEvent("showCookieNotice",{detail:{data:cnArgs}});r.dispatchEvent(e),this.noticeContainer.classList.remove("cookie-notice-hidden"),this.noticeContainer.classList.add("cn-animated"),this.noticeContainer.classList.add("cookie-notice-visible"),this.noticeContainer.addEventListener("animationend",function e(){t.noticeContainer.removeEventListener("animationend",e),t.noticeContainer.classList.remove("cn-animated")}),this.noticeContainer.addEventListener("webkitAnimationEnd",function e(){t.noticeContainer.removeEventListener("webkitAnimationEnd",e),t.noticeContainer.classList.remove("cn-animated")})},this.hideCookieNotice=function(){var t=this,e=new CustomEvent("hideCookieNotice",{detail:{data:cnArgs}});r.dispatchEvent(e),this.noticeContainer.classList.add("cn-animated"),this.noticeContainer.classList.remove("cookie-notice-visible"),this.noticeContainer.addEventListener("animationend",function e(){t.noticeContainer.removeEventListener("animationend",e),t.noticeContainer.classList.remove("cn-animated"),t.noticeContainer.classList.add("cookie-notice-hidden")}),this.noticeContainer.addEventListener("webkitAnimationEnd",function e(){t.noticeContainer.removeEventListener("webkitAnimationEnd",e),t.noticeContainer.classList.remove("cn-animated"),t.noticeContainer.classList.add("cookie-notice-hidden")})},this.showRevokeNotice=function(){var t=this,e=new CustomEvent("showRevokeNotice",{detail:{data:cnArgs}});r.dispatchEvent(e),this.noticeContainer.classList.remove("cookie-revoke-hidden"),this.noticeContainer.classList.add("cn-animated"),this.noticeContainer.classList.add("cookie-revoke-visible"),this.noticeContainer.addEventListener("animationend",function e(){t.noticeContainer.removeEventListener("animationend",e),t.noticeContainer.classList.remove("cn-animated")}),this.noticeContainer.addEventListener("webkitAnimationEnd",function e(){t.noticeContainer.removeEventListener("webkitAnimationEnd",e),t.noticeContainer.classList.remove("cn-animated")})},this.hideRevokeNotice=function(){var t=this,e=new CustomEvent("hideRevokeNotice",{detail:{data:cnArgs}});r.dispatchEvent(e),this.noticeContainer.classList.add("cn-animated"),this.noticeContainer.classList.remove("cookie-revoke-visible"),this.noticeContainer.addEventListener("animationend",function e(){t.noticeContainer.removeEventListener("animationend",e),t.noticeContainer.classList.remove("cn-animated"),t.noticeContainer.classList.add("cookie-revoke-hidden")}),this.noticeContainer.addEventListener("webkitAnimationEnd",function e(){t.noticeContainer.removeEventListener("webkitAnimationEnd",e),t.noticeContainer.classList.remove("cn-animated"),t.noticeContainer.classList.add("cookie-revoke-hidden")})},this.setBodyClass=function(e){r.body.classList.remove("cookies-revoke"),r.body.classList.remove("cookies-accepted"),r.body.classList.remove("cookies-refused"),r.body.classList.remove("cookies-set"),r.body.classList.remove("cookies-not-set");for(var t=0;t<e.length;t++)r.body.classList.add(e[t])},this.handleScroll=function(){(a.pageYOffset||(r.documentElement||r.body.parentNode||r.body).scrollTop)>parseInt(cnArgs.onScrollOffset)&&this.setStatus("accept")},this.adjustOffset=function(){var e=r.getElementById("coronabar"),t=r.getElementById("wpadminbar"),n=0,i=0;"top"===cnArgs.position&&null!==t&&(i=t.offsetHeight,this.noticeContainer.style.top=i+"px"),null!==e&&(n=e.offsetHeight-1,"top"===cnArgs.position?(e.style.top=i+"px",this.noticeContainer.style.top=n+i+"px"):this.noticeContainer.style.bottom=n+"px")},this.getClosest=function(e,t){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;0<=--n&&t.item(n)!==this;);return-1<n});e&&e!==r;e=e.parentNode)if(e.matches(t))return e;return null},this.init=function(){var t=this;this.cookiesAccepted=this.getStatus(!0),this.noticeContainer=r.getElementById("cookie-notice");var e=r.getElementsByClassName("cn-set-cookie"),n=r.getElementsByClassName("cn-revoke-cookie"),i=r.getElementById("cn-close-notice");this.noticeContainer.classList.add("cn-effect-"+cnArgs.hideEffect),t.adjustOffset(),a.addEventListener("resize",function(e){t.adjustOffset()}),"1"===cnArgs.coronabarActive&&(r.addEventListener("display.coronabar",function(e){t.adjustOffset()}),r.addEventListener("hide.coronabar",function(e){t.adjustOffset()}),r.addEventListener("saveData.coronabar",function(e){var t=e.detail;if(null!==t){var n=new XMLHttpRequest;n.open("POST",cnArgs.ajaxUrl,!0),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded;"),n.onload=function(){200<=this.status&&this.status},n.onerror=function(){},n.send("action=cn_save_cases&nonce="+cnArgs.nonce+"&data="+JSON.stringify(t))}})),null===this.cookiesAccepted?("1"===cnArgs.onScroll&&a.addEventListener("scroll",function(e){t.handleScroll()}),"1"===cnArgs.onClick&&a.addEventListener("click",function(e){null===t.getClosest(e.target,"#cookie-notice")&&t.setStatus("accept")},!0),this.setBodyClass(["cookies-not-set"]),this.showCookieNotice()):(this.setBodyClass(["cookies-set",!0===this.cookiesAccepted?"cookies-accepted":"cookies-refused"]),"1"===cnArgs.revokeCookies&&"automatic"===cnArgs.revokeCookiesOpt&&this.showRevokeNotice());for(var o=0;o<e.length;o++)e[o].addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),t.setStatus(this.dataset.cookieSet)});"null"!==i&&i.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),t.setStatus(this.dataset.cookieSet)});for(o=0;o<n.length;o++)n[o].addEventListener("click",function(e){e.preventDefault(),t.noticeContainer.classList.contains("cookie-revoke-visible")?(t.hideRevokeNotice(),t.noticeContainer.addEventListener("animationend",function e(){t.noticeContainer.removeEventListener("animationend",e),t.showCookieNotice()}),t.noticeContainer.addEventListener("webkitAnimationEnd",function e(){t.noticeContainer.removeEventListener("webkitAnimationEnd",e),t.showCookieNotice()})):t.noticeContainer.classList.contains("cookie-notice-hidden")&&t.noticeContainer.classList.contains("cookie-revoke-hidden")&&t.showCookieNotice()})}};a.addEventListener("load",function(){e.init()},!1)}(window,document);
jQuery.fn.exists=function(callback){var args=[].slice.call(arguments,1);if(this.length){callback.call(this,args);}
return this;};jQuery(document).ready(function($){var scrollToAnchor=function(id,event){var elem=$("a[name='"+id+"']");if(typeof(elem.offset())==="undefined"){elem=$("#"+id);}
if(typeof(elem.offset())!=="undefined"){event.preventDefault();var scroll_to=elem.offset().top;$('html, body').removeClass('mobile-menu-active').animate({scrollTop:scroll_to},600,'swing',function(){if(scroll_to>46)window.location.hash=id;});}};$("a").click(function(event){var href=$(this).attr("href");if(href&&href.match("#")&&href!=='#'){var parts=href.split('#'),url=parts[0],target=parts[1];if((!url||url==window.location.href.split('#')[0])&&target)
scrollToAnchor(target,event);}});});if(mts_customscript.responsive&&mts_customscript.nav_menu!='none'){jQuery(document).ready(function($){$('#primary-navigation').append('<div id="mobile-menu-overlay" />');if(mts_customscript.nav_menu=='both'&&!$('.navigation.mobile-only').length){$('.navigation').not('.mobile-menu-wrapper').find('.menu').clone().appendTo('.mobile-menu-wrapper').hide();}
$('.toggle-mobile-menu').click(function(e){e.preventDefault();e.stopPropagation();$('body').toggleClass('mobile-menu-active');if($('body').hasClass('mobile-menu-active')){if($(document).height()>$(window).height()){var scrollTop=($('html').scrollTop())?$('html').scrollTop():$('body').scrollTop();$('html').addClass('noscroll').css('top',-scrollTop);}
$('#mobile-menu-overlay').fadeIn();}else{var scrollTop=parseInt($('html').css('top'));$('html').removeClass('noscroll');$('html,body').scrollTop(-scrollTop);$('#mobile-menu-overlay').fadeOut();}});}).on('click',function(event){var $target=jQuery(event.target);if(($target.hasClass("fa")&&$target.parent().hasClass("toggle-caret"))||$target.hasClass("toggle-caret")){return;}
jQuery('body').removeClass('mobile-menu-active');jQuery('html').removeClass('noscroll');jQuery('#mobile-menu-overlay').fadeOut();});}
jQuery(document).ready(function($){function mtsDropdownMenu(){var wWidth=$(window).width();if(wWidth>865){$('.navigation ul.sub-menu, .navigation ul.children').hide();var timer;var delay=100;$('.navigation li').hover(function(){var $this=$(this);timer=setTimeout(function(){$this.children('ul.sub-menu, ul.children').slideDown('fast');},delay);},function(){$(this).children('ul.sub-menu, ul.children').hide();clearTimeout(timer);});}else{$('.navigation li').unbind('hover');$('.navigation li.active > ul.sub-menu, .navigation li.active > ul.children').show();}}
mtsDropdownMenu();$(window).resize(function(){mtsDropdownMenu();});});jQuery(document).ready(function($){$('.widget_nav_menu, .navigation .menu').addClass('toggle-menu');$('.toggle-menu ul.sub-menu, .toggle-menu ul.children').addClass('toggle-submenu');$('.toggle-menu ul.sub-menu').parent().addClass('toggle-menu-item-parent');$('.toggle-menu .toggle-menu-item-parent').append('<span class="toggle-caret"><i class="fa fa-plus"></i></span>');$('.toggle-caret').click(function(e){e.preventDefault();$(this).parent().toggleClass('active').children('.toggle-submenu').slideToggle('fast');});});jQuery(document).ready(function($){var lazyloadAvatar=function(){$('.comment-author .avatar').each(function(){var distanceToTop=$(this).offset().top;var scroll=$(window).scrollTop();var windowHeight=$(window).height();var isVisible=distanceToTop-scroll<windowHeight;if(isVisible){var hashedUrl=$(this).attr('data-src');if(hashedUrl){$(this).attr('src',hashedUrl).removeClass('loading');}}});};if($('.comment-author .avatar').length>0){$('.comment-author .avatar').each(function(i,el){$(el).attr('data-src',el.src).removeAttr('src').addClass('loading');});$(function(){$(window).scroll(function(){lazyloadAvatar();});});lazyloadAvatar();}});jQuery(document).ready(function($){(function(d,s){var js,fjs=d.getElementsByTagName(s)[0],load=function(url,id){if(d.getElementById(id)){return;}
js=d.createElement(s);js.src=url;js.id=id;fjs.parentNode.insertBefore(js,fjs);};jQuery('.facebook_like').exists(function(){load('//connect.facebook.net/en_US/all.js#xfbml=1&version=v2.8','fbjssdk');});}(document,'script'));});
jQuery(document).ready(function(){function isScrolledTo(elem,top){var docViewTop=jQuery(window).scrollTop();var docViewBottom=docViewTop+jQuery(window).height();var elemTop=jQuery(elem).offset().top-top;var elemBottom=elemTop+jQuery(elem).height();return((elemTop<=docViewTop));}
function stickThatMenu(sticky,catcher,top){if(isScrolledTo(sticky,top)){sticky.addClass('sticky-navigation-active');catcher.height(sticky.height());}
var stopHeight=catcher.offset().top;if(stopHeight>sticky.offset().top){sticky.removeClass('sticky-navigation-active');catcher.height(0);}}
var catcher=jQuery('#catcher'),sticky=jQuery('.sticky-navigation'),bodyTop=jQuery('body').offset().top;if(sticky.length){jQuery(window).scroll(function(){stickThatMenu(sticky,catcher,bodyTop);});jQuery(window).resize(function(){stickThatMenu(sticky,catcher,bodyTop);});}});
/*!
 * Layzr.js 1.4.2 - A small, fast, modern, and dependency-free library for lazy loading.
 * Copyright (c) 2015 Michael Cavalea - http://callmecavs.github.io/layzr.js/
 * License: MIT
 */
!function(t,i){"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?module.exports=i():t.Layzr=i()}(this,function(){"use strict";function t(t){this._lastScroll=0,this._ticking=!1,t=t||{},this._optionsContainer=document.querySelector(t.container)||window,this._optionsSelector=t.selector||"[data-layzr]",this._optionsAttr=t.attr||"data-layzr",this._optionsAttrRetina=t.retinaAttr||"data-layzr-retina",this._optionsAttrBg=t.bgAttr||"data-layzr-bg",this._optionsAttrHidden=t.hiddenAttr||"data-layzr-hidden",this._optionsThreshold=t.threshold||0,this._optionsCallback=t.callback||null,this._retina=window.devicePixelRatio>1,this._srcAttr=this._retina?this._optionsAttrRetina:this._optionsAttr,this._nodes=document.querySelectorAll(this._optionsSelector),this._handlerBind=this._requestScroll.bind(this),this._create()}return t.prototype._requestScroll=function(){this._lastScroll=this._optionsContainer===window?window.pageYOffset:this._optionsContainer.scrollTop+this._getOffset(this._optionsContainer),this._requestTick()},t.prototype._requestTick=function(){this._ticking||(requestAnimationFrame(this.update.bind(this)),this._ticking=!0)},t.prototype._getOffset=function(t){return t.getBoundingClientRect().top+window.pageYOffset},t.prototype._getContainerHeight=function(){return this._optionsContainer.innerHeight||this._optionsContainer.offsetHeight},t.prototype._create=function(){this._handlerBind(),this._optionsContainer.addEventListener("scroll",this._handlerBind,!1),this._optionsContainer.addEventListener("resize",this._handlerBind,!1)},t.prototype._destroy=function(){this._optionsContainer.removeEventListener("scroll",this._handlerBind,!1),this._optionsContainer.removeEventListener("resize",this._handlerBind,!1)},t.prototype._inViewport=function(t){var i=this._lastScroll,e=i+this._getContainerHeight(),o=this._getOffset(t),n=o+this._getContainerHeight(),s=this._optionsThreshold/100*window.innerHeight;return n>=i-s&&e+s>=o&&!t.hasAttribute(this._optionsAttrHidden)},t.prototype._reveal=function(t){var i=t.getAttribute(this._srcAttr)||t.getAttribute(this._optionsAttr);t.hasAttribute(this._optionsAttrBg)?t.style.backgroundImage="url("+i+")":t.setAttribute("src",i),"function"==typeof this._optionsCallback&&this._optionsCallback.call(t),t.removeAttribute(this._optionsAttr),t.removeAttribute(this._optionsAttrRetina),t.removeAttribute(this._optionsAttrBg),t.removeAttribute(this._optionsAttrHidden)},t.prototype.updateSelector=function(){this._nodes=document.querySelectorAll(this._optionsSelector)},t.prototype.update=function(){for(var t=this._nodes.length,i=0;t>i;i++){var e=this._nodes[i];e.hasAttribute(this._optionsAttr)&&this._inViewport(e)&&this._reveal(e)}this._ticking=!1},t});
function initLayzr() {
	var layzr = new Layzr({
		selector: '[data-layzr]',
		attr: 'data-layzr',
	});
}
jQuery(document).ready(function($) {
	initLayzr();
});
jQuery(document).ajaxComplete(function() {
	initLayzr();
});