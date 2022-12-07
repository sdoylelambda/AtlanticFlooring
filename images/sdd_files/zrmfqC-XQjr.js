if (self.CavalryLogger) { CavalryLogger.start_js(["of9PC"]); }

__d("ResetScrollOnUnload",["Run"],(function(a,b,c,d,e,f){a={disableScrollRestoration:function(){b("Run").onUnload(function(){window.history.scrollRestoration="manual"})},init:function(a){b("Run").onUnload(function(){window.history.scrollRestoration="manual",a.style.opacity="0",window.scrollTo(0,0)})}};e.exports=a}),null);
__d("NavigationMenubarInteractionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:NavigationMenubarInteractionsLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:NavigationMenubarInteractionsLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:NavigationMenubarInteractionsLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAction=function(a){this.$1.action=a;return this};c.setTargetItem=function(a){this.$1.target_item=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={action:!0,target_item:!0};e.exports=a}),null);
__d("NavigationAssistantController",["csx","cx","fbt","requireCond","Arbiter","AsyncRequest","CSS","DOM","DOMEventListener","DOMQuery","DOMTraverser","Event","Focus","KeyboardShortcuts","KeyEventController","Menu","MenuItem","NavigationMenubarInteractionsTypedLogger","PageTransitions","RTLKeys","TabbableElements","cr:1269707","cr:1269708","cr:1269709","debounce","ge","getActiveElement","getOrCreateDOMID","gkx","setImmediate","setTimeout"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=["main","banner","search","navigation","region","complementary","form","contentinfo"],k={main:function(a){return a?i._("Main: {section name}",[i._param("section name",a)]):i._("Main section")},banner:function(a){return i._("{section name} banner",[i._param("section name",a)])},search:function(a){return i._("Search {section name}",[i._param("section name",a)])},navigation:function(a){return a?i._("Navigate {section name}",[i._param("section name",a)]):i._("Navigation")},region:function(a){return a},complementary:function(a){return a?a:i._("Complementary information")},form:function(a){return i._("{section name} form",[i._param("section name",a)])},contentinfo:function(a){return i._("{section name} footer",[i._param("section name",a)])}},l=500;a={init:function(a,c,d,e,f,g){__p&&__p();var h=this;this._banner=a;this._menubar=c;this._sectionsMenu=d;this._accessibilityMenu=e;this._globalMenu=f;this._shortcutMenuItem=this._accessibilityMenu&&this._accessibilityMenu.getItemAt(0);this._menubarMenus=[{menu:this._sectionsMenu,logName:"page_sections"}];this._accessibilityMenu&&this._menubarMenus.push({menu:this._accessibilityMenu,logName:"accessibility"});this._globalMenu&&this._menubarMenus.push({menu:this._globalMenu,logName:"global"});document.body&&b("CSS").addClass(document.body,"hasAXNavMenubar");this._hasBanner=document.body&&b("CSS").hasClass(document.body,"hasBanner");this._shown=!1;this._items=[];this._hotKeyTrigger=null;this._menubarMenuItems=b("DOMQuery").scry(this._menubar,'[role="button"]');this._menubarMenuItems.forEach(function(a){a.setAttribute("role","menuitem")});this._activeItem=this._menubarMenuItems[0];this._activeItemIndex=0;if(g!=null)for(var i in g)Object.prototype.hasOwnProperty.call(g,i)&&g[i]!=null&&g[i].disableTypeaheadActivation();this._setupEvents();this._keysSoFar="";this._clearKeysSoFarAfterDelay=b("debounce")(function(){h._keysSoFar=""},l);this._handlePageLoad()},_setupEvents:function(){__p&&__p();var a=this;this._menubarMenuItems[0].addEventListener("focus",this._showMenubar.bind(this));this._menubar.addEventListener("keydown",this._checkHide.bind(this));this._menubar.addEventListener("keyup",this._checkMenuSwitch.bind(this));this._menubarMenus.forEach(function(b){b.menu.subscribe("show",a._menuShown.bind(a,b)),b.menu.subscribe("hide",a._menuHidden.bind(a,b)),b.menu.subscribe("done",a._checkBlur.bind(a)),b.menu.getRoot().addEventListener("keyup",a._checkMenuSwitch.bind(a))});b("DOMEventListener").add(document,"click",this._checkClickBlur.bind(this));this._sectionsMenu.subscribe("focus",this._highlightFocused.bind(this));this._sectionsMenu.subscribe("blur",this._unhighlightFocused.bind(this));this._accessibilityMenu&&this._accessibilityMenu.subscribe("itemclick",this._checkShortcutsShow.bind(this));this._globalMenu&&this._globalMenu.subscribe("itemclick",this._globalMenuPress.bind(this));b("gkx")("677762")&&(b("DOMEventListener").add(document,"keydown",this._checkHotKey.bind(this)),b("DOMEventListener").add(document,"keypress",this._trackHotKeyPress.bind(this)),b("DOMEventListener").add(document,"keyup",this._unsetHotKey.bind(this)))},_globalMenuPress:function(a,c){__p&&__p();this._checkLogEvent(a,c);if(b("cr:1269709")!=null&&b("cr:1269708")!=null&&b("cr:1269707")!=null){a=null;switch((c=c.item)==null?void 0:(c=c._data)==null?void 0:c.value){case"newsfeed":a={entityKey:b("cr:1269708").forFeed(),appTabId:b("cr:1269707").HOME};break;case"notifications":a={entityKey:b("cr:1269708").forNotif(),appTabId:b("cr:1269707").NOTIFICATIONS};break;case"messenger":a={entityKey:b("cr:1269708").forChat(),appTabId:b("cr:1269707").CHATS};break;case"admin-panel":a={entityKey:b("cr:1269708").forAdminPanelSection(),appTabId:b("cr:1269707").ADMIN_PANEL};break}a!=null&&(b("cr:1269709").setActiveEntityKeys([a.entityKey]),b("cr:1269709").selectAppTabID(a.appTabId))}},_checkHide:function(a){var c=this;a=b("Event").getKeyCode(a);if(a===b("RTLKeys").ESC){this._hideMenubar();this._returnFocus();return}a===b("RTLKeys").TAB&&b("setImmediate")(function(){c._hideMenubar()})},_returnFocus:function(){if(this._hotKeyTrigger)b("Focus").set(this._hotKeyTrigger,!0),this._hotKeyTrigger=null;else{var a=this._banner.nextElementSibling;b("TabbableElements").isTabbable(a)||(a=b("DOMTraverser").nextFilteredNode(document.body,a,b("TabbableElements").isTabbable));b("Focus").set(a)}},_setActiveItem:function(a){if(a<0||a>=this._menubarMenuItems.length)return;this._activeItem.setAttribute("tabindex","-1");this._activeItem=this._menubarMenuItems[a];this._activeItemIndex=a;this._activeItem.setAttribute("tabindex","0")},_checkMenuSwitch:function(a){__p&&__p();var c=this;a=b("Event").getKeyCode(a);var d=this._menubarMenus.length,e=this._activeItemIndex;switch(a){case b("RTLKeys").getLeft():e=this._activeItemIndex===0?d-1:this._activeItemIndex-1;break;case b("RTLKeys").getRight():e=this._activeItemIndex===d-1?0:this._activeItemIndex+1;break;default:e=this._findItemToFocus(a);if(e<0)return!1}this._isShowingMenu&&this._isShowingMenu.done();this._setActiveItem(e);b("setTimeout")(function(){b("Focus").set(c._activeItem,!0)},0);return!0},_findItemToFocus:function(a){if(this._isShowingMenu)return-1;a=String.fromCharCode(a).toLowerCase();this._keysSoFar||(this._searchIndex=this._activeItemIndex);this._keysSoFar+=a;this._clearKeysSoFarAfterDelay();a=this._findMatchInRange(this._searchIndex+1,this._menubarMenuItems.length);a<0&&(a=this._findMatchInRange(0,this._searchIndex));return a<0?this._searchIndex:a},_findMatchInRange:function(a,b){for(var a=a;a<b;a++){var c=this._menubarMenuItems[a].innerText;if(c.toLowerCase().indexOf(this._keysSoFar)===0)return a}return-1},_menuShown:function(a){this._ignoreBlur=!0,this._isShowingMenu=a.menu,this._logEvent("menu_shown",a.logName)},_menuHidden:function(a){this._ignoreBlur=!1,this._isShowingMenu===a.menu&&(this._isShowingMenu=null)},_checkClickBlur:function(){this._ignoreBlur||this._checkBlur()},_checkBlur:function(){var a=this,c=b("getActiveElement")();this._shown&&c&&!b("DOM").contains(this._menubar,c)&&!this._ignoreBlur&&b("setImmediate")(function(){a._hideMenubar()});this._highlighted&&(b("CSS").removeClass(this._highlighted,"_1toc"),this._highlighted=null)},_highlightFocused:function(a,c){this._highlighted&&b("CSS").removeClass(this._highlighted,"_1toc"),this._highlighted=b("ge")(c.item.getValue()),this._highlighted&&b("CSS").addClass(this._highlighted,"_1toc")},_unhighlightFocused:function(a,c){this._highlighted&&b("CSS").removeClass(this._highlighted,"_1toc")},_checkHotKey:function(a){__p&&__p();var c=this,d=b("Event").getKeyCode(a),e=a.altKey;if(!b("KeyEventController").filterEventTargets(a,"keydown"))return;if(d===b("RTLKeys").FORWARD_SLASH&&e){d=b("getActiveElement")();this._listenHotKeyPress=!0;if(this._shown){this._menubarMenus.forEach(function(a){a.menu.done()});b("setTimeout")(function(){c._returnFocus(),c._hideMenubar()},0);return}if(d&&this._isInDialog(d))return;this._hotKeyTrigger=d;this._showMenubar();b("Focus").set(this._activeItem,!0);this._logEvent("hotkey_triggered","menubar");return}this._listenHotKeyPress=!1;this._shown&&this._checkHide(a)},_unsetHotKey:function(a){this._listenHotKeyPress=!1},_trackHotKeyPress:function(a){if(this._listenHotKeyPress){a=b("Event").getKeyCode(a);this._logEvent("hotkey_char",""+a)}},_handlePageLoad:function(){var a=this;this._validateMainSection();this._setupSectionsMenu();this._setupAccessibilityMenu();b("PageTransitions").registerCompletionCallback(function(){a._handlePageLoad()})},_validateMainSection:function(){var a=document.getElementById("content");if(!a)return;var c=b("DOMQuery").scry(a,'[role="main"]'),d=a.getAttribute("role")==="main";c.length&&d?a.setAttribute("role",""):!c.length&&!d&&a.setAttribute("role","main")},_isInDialog:function(a){a=a;while(a&&a!==document&&a.getAttribute("role")!=="dialog")a=a.parentNode;return a!==document},_hideMenubar:function(){if(!this._shown)return;this._shown=!1;b("KeyboardShortcuts").popLayer();b("CSS").addClass(this._banner,"_1toe");this._setActiveItem(0);!this._hasBanner&&document.body&&b("CSS").removeClass(document.body,"hasBanner");b("setTimeout")(function(){b("Event").fire(window,"scroll")},350)},_showMenubar:function(){__p&&__p();if(this._shown)return;this._shown=!0;this._ignoreBlur=!1;this._validateMainSection();this._setupSectionsMenu();this._setupAccessibilityMenu();b("KeyboardShortcuts").pushLayer();this._banner.nextElementSibling&&b("CSS").matchesSelector(this._banner.nextElementSibling,"._73y_")?b("CSS").addClass(this._banner,"_1tof"):b("CSS").removeClass(this._banner,"_1tof");b("CSS").removeClass(this._banner,"_1toe");!this._hasBanner&&document.body&&b("CSS").addClass(document.body,"hasBanner");b("setTimeout")(function(){b("Event").fire(window,"scroll"),b("Arbiter").inform("banner/shown",null,"state")},50);this._logEvent("shown","menubar")},_addMenuItem:function(a,c,d){var e=this;c=b("Menu").buildItemFromData({ctor:b("MenuItem"),label:a,selected:!1,value:c,onclick:function(c){b("setTimeout")(function(){b("Focus").set(b("ge")(d),!0),e._hideMenubar()},0),e._logEvent("selected_item",a),e._ignoreBlur=!1}});this._sectionsMenu.addItem(c);this._items.push(c)},_getLandmarkSections:function(a){var b=[],c=[];a.forEach(function(a){var d=a.getAttribute("role");d==="main"?b.push(a):j.indexOf(d)>-1&&c.push(a)});return b.concat(c)},_computeElementLabel:function(a,b,c){__p&&__p();var d=this,e=a.getAttribute("id");c=c||[];var f=c.includes(e);!f&&e&&c.push(e);e=a.getAttribute("aria-labelledby");if(!f&&e){f=e.split(" ");var g="";f.forEach(function(a){a=document.getElementById(a);if(!a)return;g+=d._computeElementLabel(a,!1,c)});return g}e=a.getAttribute("aria-label");if(e)return e;return b?"":a.innerText?a.innerText.substring(0,100):""},_addSectionItems:function(a){__p&&__p();var c=this;a.forEach(function(a){__p&&__p();if(!b("TabbableElements").isVisible(a)||!a.offsetHeight||!a.offsetWidth)return;var d=a.getAttribute("role");if(!d||!Object.prototype.hasOwnProperty.call(k,d))return;var e=k[d](c._computeElementLabel(a,!0)),f=a;if(d==="search"||d==="region"||d==="form"){d=b("DOMQuery").scry(a,".navigationFocus");d.length&&(f=d[0],!b("TabbableElements").isTabbable(f)&&b("TabbableElements").find(f).length&&(f=b("TabbableElements").find(f)[0]))}e&&c._addMenuItem(e,b("getOrCreateDOMID")(a),b("getOrCreateDOMID")(f))})},_setupSectionsMenu:function(){var a=b("DOMQuery").scry(document.body,"[role]");a=this._getLandmarkSections(a);this._cleanupSectionsMenu();this._addSectionItems(a)},_cleanupSectionsMenu:function(){while(this._items.length)this._sectionsMenu.removeItem(this._items.pop())},_setupAccessibilityMenu:function(){if(!this._accessibilityMenu)return;if(b("KeyboardShortcuts").hasFlyoutToShow()){var a=this._accessibilityMenu.getItemAt(0);a!==this._shortcutMenuItem&&this._accessibilityMenu.addItemBefore(this._shortcutMenuItem,a)}else this._accessibilityMenu.removeItem(this._shortcutMenuItem)},_logEvent:function(a,c){new(b("NavigationMenubarInteractionsTypedLogger"))().setAction(a).setTargetItem(c).log()},_checkShortcutsShow:function(a,c){c.item.getValue()==="key_shortcuts"&&(this._ignoreBlur=!1,this._hideMenubar(),b("setTimeout")(function(){b("KeyboardShortcuts").showShortcutFlyout()},0)),this._logEvent("selected_item_ax",c.item.getValue())},_checkLogEvent:function(a,b){a=b.item.getValue();this._logEvent("selected_item_global",a);this._ignoreBlur=!1},_getHelpDialogRequest:function(){if(!this._dialogRequest)this._dialogRequest=new(b("AsyncRequest"))("/ajax/keyboard_shortcuts"),this._dialogRequest.setReadOnly(!0);else if(this._dialogRequest.transport)return null;return this._dialogRequest}};e.exports=a}),null);
__d("LoggedOutSwitchingLocaleTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setIndex=function(a){this.$1.index=a;return this};c.setNewLocale=function(a){this.$1.new_locale=a;return this};c.setOldLocale=function(a){this.$1.old_locale=a;return this};c.setReferrer=function(a){this.$1.referrer=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={index:!0,new_locale:!0,old_locale:!0,referrer:!0,time:!0,weight:!0};e.exports=a}),null);
__d("XIntlAccountSetLocaleAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/intl/ajax/save_locale/",{loc:{type:"String"},href:{type:"String"},index:{type:"Int"},ref:{type:"String"},ls_ref:{type:"Enum",defaultValue:"unknown",enumType:1},should_redirect:{type:"Bool",defaultValue:!0}})}),null);
__d("IntlUtils",["invariant","AsyncRequest","Cookie","LoggedOutSwitchingLocaleTypedLogger","ReloadPage","XIntlAccountSetLocaleAsyncController","goURI"],(function(a,b,c,d,e,f,g){__p&&__p();a={setXmode:function(a){new(b("AsyncRequest"))().setURI("/ajax/intl/save_xmode.php").setData({xmode:a}).setHandler(function(){b("ReloadPage").now()}).send()},encodeSpecialCharsForXController:function(a){return a.replace(new RegExp("\xa0","g"),"&nbsp;")},decodeSpecialCharsFromXController:function(a){return a.replace(new RegExp("&nbsp;","g"),"\xa0")},setAmode:function(a){new(b("AsyncRequest"))().setURI("/ajax/intl/save_xmode.php").setData({amode:a,app:!1}).setHandler(function(){b("ReloadPage").now()}).send()},setRmode:function(a){new(b("AsyncRequest"))().setURI("/ajax/intl/save_xmode.php").setData({rmode:a}).setHandler(function(){b("ReloadPage").now()}).send()},setLocale:function(a,c,d,e){e=d;e||(a!=null||g(0,19476),e=a.options[a.selectedIndex].value);d=b("XIntlAccountSetLocaleAsyncController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(d).setData({loc:e,ref:c,should_redirect:!1}).setHandler(function(a){b("ReloadPage").now()}).send()},appendCookieLocaleHistory:function(a){__p&&__p();var c="lh",d=b("Cookie").get(c),e=[],f=5;if(d!==null&&d!==void 0&&d!=""){e=d.split(",");e.push(a);for(var d=0;d<e.length-1;d++)e[d]==e[d+1]&&e.splice(d,1);e.length>=f&&e.slice(1,f)}else e.push(a);b("Cookie").set(c,e.toString())},setCookieLocale:function(a,c,d,e,f){e===void 0&&(e="unknown"),f===void 0&&(f=null),b("Cookie").setWithoutCheckingUserConsent_DANGEROUS("locale",a),this.appendCookieLocaleHistory(a),new(b("LoggedOutSwitchingLocaleTypedLogger"))().setNewLocale(a).setOldLocale(c).setIndex(f).setReferrer(e).log(),b("goURI")(d)}};e.exports=a}),null);
__d("legacy:intl-base",["IntlUtils"],(function(a,b,c,d,e,f){a.intl_set_xmode=(c=b("IntlUtils")).setXmode;a.intl_set_amode=c.setAmode;a.intl_set_rmode=c.setRmode;a.intl_set_locale=c.setLocale}),3);
__d("FormTypeABTester",["Base64","Event"],(function(a,b,c,d,e,f){__p&&__p();function a(a){__p&&__p();var c=32,d=65,e=90,f=48,g=57,h=58,i=63,j=91,k=94,l=0,m=0,n=0,o=0,p=[],q=null,r=[],s=[],t=[],u=[];for(var v=0;v<10;v++)r.push(0),s.push(0);for(var v=0;v<10;v++)s.push(0),t.push(0),u.push(0);v=function(a){__p&&__p();var b=window.event?Date.now():a.timeStamp;a=window.event?window.event.keyCode:a.which;a%=128;a>=d&&a<=e||a==c?l++:a>=f&&a<=g?m++:a>=h&&a<=i||a>=j&&a<=k?n++:o++;p[a]=b;if(q!=null&&q!==0){var r=b-q;r>=0&&(a>=d&&a<=e||a==c)&&(r<400?s[Math.floor(r/20)]++:r<1e3?t[Math.floor((r-400)/60)]++:r<3e3&&u[Math.floor((r-1e3)/200)]++)}q=b};var w=function(a){var b=window.event?Date.now():a.timeStamp;a=window.event?window.event.keyCode:a.which;b=b-p[a%128];b>=50&&b<250&&r[Math.floor((b-50)/20)]++},x=function(a){var b=Math.max.apply(Math,a),c=[];a.forEach(function(a){c.push(Math.floor(a*63/(b||1)))});return c};this.getDataVect=function(){var a=s.concat(t,u);return x(a).concat(x(r),[l/2,m/2,n/2,o/2])};this.getData=function(){return b("Base64").encodeNums(this.getDataVect())};b("Event").listen(a,{keyup:w.bind(this),keydown:v.bind(this)})}e.exports=a}),null);
__d("RequiredFormListener",["Event","Input"],(function(a,b,c,d,e,f){__p&&__p();b("Event").listen(document.documentElement,"submit",function(a){a=a.getTarget();if(a.getAttribute("novalidate"))return!0;a=a.getElementsByTagName("*");for(var c=0;c<a.length;c++)if(a[c].getAttribute("required")&&b("Input").isEmpty(a[c])){a[c].focus();return!1}},b("Event").Priority.URGENT)}),null);
__d("AccessibilityWebAssistiveTechTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:AccessibilityWebAssistiveTechLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:AccessibilityWebAssistiveTechLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:AccessibilityWebAssistiveTechLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setIndicatedBrowsers=function(a){this.$1.indicated_browsers=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setIsVirtualCursorAction=function(a){this.$1.is_virtual_cursor_action=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={indicated_browsers:!0,is_virtual_cursor_action:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("FourOhFourJSTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:FourOhFourJSLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:FourOhFourJSLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:FourOhFourJSLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setFbid=function(a){this.$1.fbid=a;return this};c.setOriginalURI=function(a){this.$1.original_uri=a;return this};c.setScriptPath=function(a){this.$1.script_path=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={fbid:!0,original_uri:!0,script_path:!0,time:!0,weight:!0};e.exports=a}),null);
__d("KeyboardActivityTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:KeyboardActivityLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:KeyboardActivityLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:KeyboardActivityLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setDuration=function(a){this.$1.duration=a;return this};c.setKey=function(a){this.$1.key=a;return this};c.setVC=function(a){this.$1.vc=a;return this};return a}();c={duration:!0,key:!0,vc:!0};e.exports=a}),null);
__d("LoginFormController",["AsyncRequest","Button","Cookie","DeferredCookie","DOM","Event","FBLogger","Form","FormTypeABTester","WebStorage","bx","ge","goURI","guid","promiseDone","FBBrowserPasswordEncryption","LoginServicePasswordEncryptDecryptEventTypedLogger"],(function(a,b,c,d,e,f){__p&&__p();var g;a={init:function(a,c,d,e,f){var g=this;this._initShared(a,c,d,e,f);this.isCredsManagerEnabled=!1;!f||!f.pubKey?b("Event").listen(a,"submit",this._sendLoginShared.bind(this)):b("Event").listen(a,"submit",function(b){b.preventDefault(),g._sendLoginShared.bind(g)(),g._encryptBeforeSending(function(){a.submit()})})},initAsync:function(a,c,d,e,f){var g=this;this._initShared(a,c,d,e,f);this.isCredsManagerEnabled=!0;this.emailInput=b("DOM").scry(a,'input[id="email"]')[0];this.passwordInput=b("DOM").scry(a,'input[id="pass"]')[0];this.errorBox=b("DOM").scry(a,'input[id="error_box"]')[0];b("Event").listen(a,"submit",function(a){a.preventDefault(),g._sendLoginRequest()});this._initSmartLockAccountChooser()},_initShared:function(a,c,d,e,f){__p&&__p();this.loginForm=a;this.loginButton=c;this.abTesting=e;this.loginFormParams=f;this.abTesting&&(this.formABTest=new(b("FormTypeABTester"))(a));c=b("ge")("lgnjs");e=Math.floor(Date.now()/1e3);c&&(c.value=e);var h=(g||(g=b("WebStorage"))).getSessionStorage();f=h!=null?parseInt(h.getItem("LoginPollRateLimit"),10):0;a=d!=null;f>e-60&&(a=!1);if(a){var i;c=function(){b("Cookie").get("c_user")!=null&&(window.clearInterval(i),h!=null&&h.setItem("LoginPollRateLimit",Math.floor(Date.now()/1e3).toString()),b("goURI")(d))};i=window.setInterval(c,1e3);c()}},_encryptBeforeSending:function(a){__p&&__p();var c=this;a=a.bind(this);var d=this.loginFormParams&&this.loginFormParams.pubKey;if((window.crypto||window.msCrypto)&&d){var e=b("DOM").scry(this.loginForm,'input[id="pass"]')[0],f=b("FBBrowserPasswordEncryption"),g=Math.floor(Date.now()/1e3).toString();b("promiseDone")(f.encryptPassword(d.keyId,d.publicKey,e.value,g),function(d){d=b("DOM").create("input",{type:"hidden",name:"ep",value:d});c.loginForm.appendChild(d);e.disabled=!0;a()},function(c){var d="#PWD_BROWSER",e=5,f=b("LoginServicePasswordEncryptDecryptEventTypedLogger");new f().setError("BrowserEncryptionFailureInLoginFormControllerWWW").setGrowthFlow("Bluebar/main login WWW").setErrorMessage(c.message).setPasswordTag(d).setPasswordEncryptionVersion(e).setPasswordTimestamp(g).logVital();a()})}else a()},_sendLoginShared:function(){__p&&__p();var a=this;this.abTesting&&this.loginForm.ab_test_data&&(this.loginForm.ab_test_data.value=this.formABTest.getData());var c=b("guid")();this.loginForm.guid&&(this.loginForm.guid.value=c);window.__cookieReload&&window.clearInterval(window.__cookieReload);try{b("Button").setEnabled(this.loginButton,!1)}catch(a){this.loginButton.disabled=!0}window.setTimeout(function(){(function(){try{b("Button").setEnabled(a.loginButton,!0)}catch(b){a.loginButton.disabled=!1}})},15e3);b("DeferredCookie").flushAllCookies()},_sendLoginRequest:function(){var a=this;this._sendLoginShared();if(this.login_form_params&&this.login_form_params.pubKey)this._encryptBeforeSending(function(){var c=b("Form").serialize(a.loginForm);new(b("AsyncRequest"))().setURI(a.loginForm).setData(c).setHandler(a._onLoginResponse.bind(a)).send()});else{var c=b("Form").serialize(this.loginForm);new(b("AsyncRequest"))().setURI(this.loginForm.action).setData(c).setHandler(this._onLoginResponse.bind(this)).send()}},_onLoginResponse:function(a){a=a.getPayload();if(a===null||a.error===null)return;b("DOM").replace(this.errorBox,a.error);b("Button").setEnabled(this.loginButton,!0)},redirect:function(a){if(this.isCredsManagerEnabled){var c=b("bx").getURL(b("bx")("875231"));c=new window.PasswordCredential({id:this.emailInput.value,password:this.passwordInput.value,iconURL:c});navigator.credentials&&navigator.credentials.store(c).then(function(){window.setTimeout(function(){window.location.replace(a)},3e3)})["catch"](function(){window.location.replace(a)})}else window.location.replace(a)},_initSmartLockAccountChooser:function(a){var c=this;a===void 0&&(a="silent");window.PasswordCredential&&(navigator.credentials!==null&&navigator.credentials.get({password:!0,mediation:a}).then(function(b){b!==null&&b.type==="password"&&b.password!==null&&b.id!==null?(c.emailInput.setAttribute("value",b.id),c.passwordInput.setAttribute("value",b.password),a==="required"&&c._sendLoginRequest()):(c.passwordInput.setAttribute("value",""),a==="silent"&&c._initSmartLockAccountChooser("required"))})["catch"](function(a){b("FBLogger")("login").catching(a).warn("smart lock promise fail")}))}};e.exports=a}),null);
__d("FocusRing",["cx","CSS","Event","KeyEventController","Keys","VirtualCursorStatus","emptyFunction"],(function(a,b,c,d,e,f,g){__p&&__p();var h=["mousedown","mouseup"];c={KEY_CODES:[(a=b("Keys")).UP,a.RIGHT,a.DOWN,a.LEFT,a.TAB,a.RETURN,a.SPACE,a.ESC],init:function(){if(this._initialized)return;this._userInteractingWithKeyboard=!1;this._attachVirtualCursorListener();this._attachKeyDownListener();document.body&&b("CSS").addClass(document.body,"_19_u");this._initialized=!0},usingKeyboardNavigation:function(){return this._userInteractingWithKeyboard},_attachVirtualCursorListener:function(){document.documentElement&&(this._onClickListener=b("VirtualCursorStatus").add(document.documentElement,this._onClick.bind(this)))},_attachMouseListeners:function(){var a=this;this._onMouseListeners=h.map(function(c){return b("Event").listen(document.documentElement,c,a._onMouseEvent.bind(a))})},_attachKeyDownListener:function(){this._onKeyDownListener=b("Event").listen(document.documentElement,"keydown",this._onKeyDown.bind(this))},_initialized:!1,_userInteractingWithKeyboard:!0,_onMouseEvent:function(){this._hideFocusRing()},_onMouseListeners:h.map(function(a){return{remove:b("emptyFunction")}}),_removeMouseListeners:function(){this._onMouseListeners.forEach(function(a){return a.remove()})},_onClick:function(a,b,c){a&&this._showFocusRing()},_onKeyDown:function(a){this.KEY_CODES.indexOf(b("Event").getKeyCode(a))>-1&&b("KeyEventController").filterEventTargets(a,"keydown")&&this._showFocusRing()},_showFocusRing:function(){this._onKeyDownListener.remove(),this._attachMouseListeners(),this._userInteractingWithKeyboard=!0,document.body&&b("CSS").removeClass(document.body,"_19_u")},_hideFocusRing:function(){this._removeMouseListeners(),this._attachKeyDownListener(),this._userInteractingWithKeyboard=!1,document.body&&b("CSS").addClass(document.body,"_19_u")},_onKeyDownListener:{remove:b("emptyFunction")},_onClickListener:{remove:b("emptyFunction")}};e.exports=c}),null);
__d("FourOhFourJSLogger",["FourOhFourJSTypedLogger","ScriptPath"],(function(a,b,c,d,e,f){a={log:function(){window.onload=function(){var a=new(b("FourOhFourJSTypedLogger"))();a.setOriginalURI(window.location.href);a.setScriptPath(b("ScriptPath").getScriptPath());a.logVital()}}};e.exports=a}),null);
__d("LoginbarPopover",["CSS","ge","getActiveElement"],(function(a,b,c,d,e,f){__p&&__p();var g=1e3;a={init:function(a,c,d){var e=this,f=b("ge")("email",d);setTimeout(function(){return e.show(a,d,f)},g);c.addEventListener("click",function(a){a.kill(),e.toggle(d,f)});a.style.visibility="visible"},show:function(a,c,d){b("CSS").show(c);a=b("getActiveElement")().tagName.toLowerCase();a!=="input"&&a!=="textarea"&&d.focus()},toggle:function(a,c){b("CSS").toggle(a),b("CSS").shown(a)&&c.focus()}};e.exports=a}),null);
__d("ScreenDimensionsAutoSet",[],(function(a,b,c,d,e,f){function g(){if(!window.btoa)return"";var a={w:screen.width,h:screen.height,aw:screen.availWidth,ah:screen.availHeight,c:screen.colorDepth};return btoa(JSON.stringify(a))}a={setInputValue:function(a){a.value=g()},getScreenDimensions:g};e.exports=a}),null);
__d("AccessibilityWebVirtualCursorClickLogger",["AccessibilityWebAssistiveTechTypedLogger","VirtualCursorStatus"],(function(a,b,c,d,e,f){a={init:function(a){var c=this;a.forEach(function(a){b("VirtualCursorStatus").add(a,c._log)},this)},_log:function(a,c,d){d===void 0&&(d=!1),a&&new(b("AccessibilityWebAssistiveTechTypedLogger"))().setIndicatedBrowsers(c).setIsVirtualCursorAction(d).log()}};e.exports=a}),null);
__d("KeyboardActivityLogger",["Event","KeyboardActivityTypedLogger","Keys","isElementInteractive"],(function(a,b,c,d,e,f){__p&&__p();a=["tab","right","left","up","down","enter"];var g=a.reduce(function(a,b){a[b]={count:0,startTS:0};return a},{}),h=20;c={init:function(){document.addEventListener("keydown",this._listenForKey.bind(this))},_listenForKey:function(a){__p&&__p();var c=a.getTarget();if(b("isElementInteractive")(c))return;switch(b("Event").getKeyCode(a)){case b("Keys").TAB:this._checkKeyActivity("tab");break;case b("Keys").RIGHT:this._checkKeyActivity("right");break;case b("Keys").LEFT:this._checkKeyActivity("left");break;case b("Keys").UP:this._checkKeyActivity("up");break;case b("Keys").DOWN:this._checkKeyActivity("down");break;case b("Keys").RETURN:this._checkKeyActivity("enter");break}},_checkKeyActivity:function(a){var b=g[a];b.count++;b.startTS===0&&(b.startTS=Date.now());b.count===h&&(this._log(a),b.count=0,b.startTS=0)},_log:function(a){var c=g[a];c=Date.now()-c.startTS;new(b("KeyboardActivityTypedLogger"))().setKey(a).setDuration(c).log()}};e.exports=c}),null);
__d("WebCookieUseBannerController",["Arbiter","CSS","DeferredCookie","DOM"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={init:function(a,c){this.banner=a;this.closeButton=c;document.body&&b("CSS").addClass(document.body,"hasCookieBanner");b("DeferredCookie").addDefaultInteractionListener();if(c){var d=function(){document.body&&b("CSS").removeClass(document.body,"hasCookieBanner"),b("DOM").remove(a),b("Arbiter").inform("WebCookieUseBannerController/close")};c.addEventListener?c.addEventListener("click",d):c.attachEvent&&c.attachEvent("onclick",d)}}};e.exports=a}),null);
__d("BrowserPrefillLogging",["BanzaiLogger","DamerauLevenshtein","ge"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={initContactpointFieldLogging:function(a){this.contactpointFieldID=a.contactpointFieldID;this._updateContactpoint();this.serverPrefillContactpoint=a.serverPrefill;a=b("ge")(this.contactpointFieldID);if(a==null)return;a.addEventListener("input",this._mayLogContactpointPrefillViaDropdown.bind(this));window.addEventListener("load",this._mayLogContactpointPrefillOnload.bind(this));return},registerCallback:function(a){this.regeisteredCallbacks=this.regeisteredCallbacks||[],this.regeisteredCallbacks.push(a)},_invokeCallbacks:function(a,b){if(this.regeisteredCallbacks==null||this.regeisteredCallbacks.size===0)return;this.regeisteredCallbacks.forEach(function(c){c(a,b)})},initPasswordFieldLogging:function(a){this.passwordFieldID=a.passwordFieldID;this._updatePassword();a=b("ge")(this.passwordFieldID);if(a==null)return;a.addEventListener("input",this._mayLogPasswordPrefillViaDropdown.bind(this));window.addEventListener("load",this._mayLogPasswordPrefillOnload.bind(this))},updatePrefill:function(a,c,d){var e,f=(e=b("ge"))("prefill_source"),g=e("prefill_type"),h=e("first_prefill_source"),i=e("first_prefill_type"),j=e("had_cp_prefilled"),k=e("had_password_prefilled");e=e("prefill_contact_point");f!=null&&(f.value=c);g!=null&&(g.value=d);e!=null&&a!=null&&(e.value=a);i!=null&&(i.value==null||i.value=="")&&(i.value=d);h!=null&&(h.value==null||h.value=="")&&(h.value=c);j!=null&&(j.value==null||j.value==="false")&&d==="contact_point"&&(j.value="true");k!=null&&(k.value==null||k.value==="false")&&d==="password"&&(k.value="true")},_mayLogContactpointPrefillOnload:function(){this._updateContactpoint();if(this.previousContactpoint==null||this.previousContactpoint==="")return;var a=this.previousContactpoint===this.serverPrefillContactpoint?"server_prefill":"browser_onload";this._logBrowserPrefill(a,"contact_point");this._invokeCallbacks(a,"contact_point")},_mayLogPasswordPrefillOnload:function(){this._updatePassword();if(this.previousPassword==null||this.previousPassword==="")return;this._logBrowserPrefill("browser_onload","password");this._invokeCallbacks("browser_onload","password")},_mayLogContactpointPrefillViaDropdown:function(){__p&&__p();var a=b("ge")(this.contactpointFieldID);if(a==null||a.value==null)return;if(this._isBrowserPrefill(this.previousContactpoint,a.value)===!1){this._updateContactpoint();return}this._updateContactpoint();this._logBrowserPrefill("browser_dropdown","contact_point");this._invokeCallbacks("browser_dropdown","contact_point")},_mayLogPasswordPrefillViaDropdown:function(){__p&&__p();var a=b("ge")(this.passwordFieldID);if(a==null||a.value==null)return;if(this._isBrowserPrefill(this.previousPassword,a.value)===!1){this._updatePassword();return}this._updatePassword();this._logBrowserPrefill("browser_dropdown","password");this._invokeCallbacks("browser_dropdown","password")},_isBrowserPrefill:function(a,c){if(c==="")return!1;if(c===a)return!1;if(c.length===1||a.length===c.length+1||c.length===a.length+1)return!1;var d=b("DamerauLevenshtein").DamerauLevenshteinDistance(c,a);return d===a.length-c.length?!1:!0},_updateContactpoint:function(){var a=b("ge")(this.contactpointFieldID);this.previousContactpoint=a!=null&&a.value!=null?a.value:""},_updatePassword:function(){var a=b("ge")(this.passwordFieldID);this.previousPassword=a!=null&&a.value!=null?a.value:""},_logBrowserPrefill:function(a,c){var d=null;c==="contact_point"&&(d=this.previousContactpoint);a!=="server_prefill"&&this.updatePrefill(d,a,c);b("BanzaiLogger").create({signal:!0}).log("LoginEventsLoggerConfig",{event:"browser_autocomplete",prefill_contact_point:d,prefill_source:a,prefill_type:c})}};e.exports=a}),null);