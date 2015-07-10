/*!CK:4282408804!*//*1439174722,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["wGTsE"]); }

__d("PerfXClientMetricsConfig",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={LOGGER_CONFIG:"PerfXClientMetricsLoggerConfig"};},null,{});
__d("PixelRatioConst",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={cookieName:"dpr"};},null,{});
__d("PluginActions",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={PAGE_AVATAR:"page_avatar",PAGE_CTA:"page_cta",PAGE_LIKE:"page_like",PAGE_PERMALINK:"page_permalink",PAGE_SHARE:"page_share",PAGE_UNLIKE:"page_unlike"};},null,{});
__d("PluginActionTypes",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={CLICK:"click"};},null,{});
__d('clearImmediatePolyfill',['ImmediateImplementation'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports=b.clearImmediate||c('ImmediateImplementation').clearImmediate;},null);
__d('sourceMetaToString',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){var k;if(i.name){k=i.name;if(i.module)k=i.module+'.'+k;}else if(i.module)k=i.module+'.<anonymous>';if(j&&i.line){k=(k?k:'<anonymous>')+':'+i.line;if(i.column)k+=':'+i.column;}return k;}f.exports=h;},null);
__d('clearImmediate',['clearImmediatePolyfill'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();f.exports=h.bind(b);},null);
__d('PerfXFlusher',['BanzaiLogger','PerfXClientMetricsConfig','invariant'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=i.LOGGER_CONFIG,l=['perfx_page','perfx_page_type','tti','e2e'];function m(o){l.forEach(function(p){!(p in o)?j(0):undefined;});}var n={flush:function(o,p){m(p);p.lid=o;if(p.fbtrace_id){h.log(k,p,{delay:10*1000});}else h.log(k,p);}};f.exports=n;},null);
__d('legacy:onload-action',['PageHooks'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();b._domreadyHook=h._domreadyHook;b._onloadHook=h._onloadHook;b.runHook=h.runHook;b.runHooks=h.runHooks;b.keep_window_set_as_loaded=h.keepWindowSetAsLoaded;},3);
__d('ClickRefUtils',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={get_intern_ref:function(i){if(!!i){var j={profile_minifeed:1,gb_content_and_toolbar:1,gb_muffin_area:1,ego:1,bookmarks_menu:1,jewelBoxNotif:1,jewelNotif:1,BeeperBox:1,searchBarClickRef:1};for(var k=i;k&&k!=document.body;k=k.parentNode){if(!k.id||typeof k.id!=='string')continue;if(k.id.substr(0,8)=='pagelet_')return k.id.substr(8);if(k.id.substr(0,8)=='box_app_')return k.id;if(j[k.id])return k.id;}}return '-';},get_href:function(i){var j=i.getAttribute&&(i.getAttribute('ajaxify')||i.getAttribute('data-endpoint'))||i.action||i.href||i.name;return typeof j==='string'?j:null;},should_report:function(i,j){if(j=='FORCE')return true;if(j=='INDIRECT')return false;return i&&(h.get_href(i)||i.getAttribute&&i.getAttribute('data-ft'));}};f.exports=h;},null);
__d("setUECookie",["Env"],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){if(!h.no_cookies)document.cookie="act="+encodeURIComponent(j)+"; path=/; domain="+window.location.hostname.replace(/^.*(\.facebook\..*)$/i,'$1');}f.exports=i;},null);
__d('ClickRefLogger',['Arbiter','Banzai','ClickRefUtils','Env','ScriptPath','SessionName','Vector','$','collectDataAttributes','ge','pageID','setUECookie'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t={delay:0,retry:true};function u(y){if(!q('content'))return [0,0,0,0];var z=o('content'),aa=n.getEventPosition(y);return [aa.x,aa.y,z.offsetLeft,z.clientWidth];}function v(y,z,event,aa){var ba='r',ca=[0,0,0,0],da,ea;if(!!event){da=event.type;if(da=='click'&&q('content'))ca=u(event);var fa=0;event.ctrlKey&&(fa+=1);event.shiftKey&&(fa+=2);event.altKey&&(fa+=4);event.metaKey&&(fa+=8);if(fa)da+=fa;}if(!!z)ea=j.get_href(z);var ga=p(!!event?event.target||event.srcElement:z,['ft','gt']);Object.assign(ga.ft,aa.ft);Object.assign(ga.gt,aa.gt);if(typeof ga.ft.ei==='string')delete ga.ft.ei;var ha=[y._ue_ts,y._ue_count,ea||'-',y._context,da||'-',j.get_intern_ref(z),ba,b.URI?b.URI.getRequestURI(true,true).getUnqualifiedURI().toString():location.pathname+location.search+location.hash,ga].concat(ca).concat(r).concat(l.getScriptPath());return ha;}h.subscribe("ClickRefAction/new",function(y,z){if(j.should_report(z.node,z.mode)){var aa=v(z.cfa,z.node,z.event,z.extra_data);s(z.cfa.ue);var ba=[m.getName(),Date.now(),'act'];i.post('click_ref_logger',Array.prototype.concat(ba,aa),t);}});function w(y){function z(ha){var ia='';for(var ja=0;ja<ha.length;ja++)ia+=String.fromCharCode(1^ha.charCodeAt(ja));return ia;}function aa(ha,ia,ja,ka){var la=ia[ja];if(la&&ha&&la in ha)if(ja+1<ia.length){aa(ha[la],ia,ja+1,ka);}else{var ma=ha[la],na=function(){setTimeout(ka.bind(null,arguments));return ma.apply(this,arguments);};na.toString=ma.toString.bind(ma);Object.defineProperty(ha,la,{configurable:false,writable:true,value:na});}}var ba={},ca={},da=false;function ea(ha,ia){if(ca[ha])return;ca[ha]=ba[ha]=1;}var fa=y[z('jiri')];if(fa){var ga=[];z(fa).split(',').map(function(ha,ia){var ja=ha.substring(1).split(':'),ka;switch(ha.charAt(0)){case '1':ka=new RegExp('\\b('+ja[0]+')\\b','i');ga.push(function(la){var ma=ka.exec(Object.keys(window));if(ma)ea(ia,''+ma);});break;case '2':ka=new RegExp(ja[0]);aa(window,ja,2,function(la){var ma=la[ja[1]];if(typeof ma==='string'&&ka.test(ma))ea(ia,ha);});break;case '3':aa(window,ja,0,function(){for(var la=ga.length;la--;)ga[la]();var ma=Object.keys(ba);if(ma.length){ba={};setTimeout(i[z('qnru')].bind(i,z('islg'),{m:''+ma}),5000);}});break;case '4':da=true;break;}});}}try{w(k);}catch(x){}},null);
__d('PixelRatio',['Arbiter','Cookie','PixelRatioConst','Run'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=j.cookieName,m,n;function o(){return window.devicePixelRatio||1;}function p(){i.set(l,o());}function q(){i.clear(l);}function r(){var t=o();if(t!==m){p();}else q();}var s={startDetecting:function(t){m=t||1;q();if(n)return;n=[h.subscribe('pre_page_transition',r)];k.onBeforeUnload(r);}};f.exports=s;},null);
__d('UserActionHistory',['Arbiter','ClickRefUtils','ScriptPath','throttle','WebStorage'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m={click:1,submit:1},n=false,o={log:[],len:0},p=k.acrossTransitions(function(){try{n._ua_log=JSON.stringify(o);}catch(s){n=false;}},1000);function q(){var s=l.getSessionStorage();if(s){n=s;n._ua_log&&(o=JSON.parse(n._ua_log));}else n=false;o.log[o.len%10]={ts:Date.now(),path:'-',index:o.len,type:'init',iref:'-'};o.len++;h.subscribe("UserAction/new",function(t,u){var v=u.ua,w=u.node,event=u.event;if(!event||!(event.type in m))return;var x={path:j.getScriptPath(),type:event.type,ts:v._ue_ts,iref:i.get_intern_ref(w)||'-',index:o.len};o.log[(o.len++)%10]=x;n&&p();});}function r(){return o.log.sort(function(s,t){return t.ts!=s.ts?t.ts-s.ts:t.index-s.index;});}q();f.exports={getHistory:r};},null);
__d('PerfXLogger',['Arbiter','LogBuffer','PageEvents','PerfXFlusher','performance'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m={},n='BigPipe/init',o='tti_bigpipe',p={},q,r={_listenersSetUp:false,_setupListeners:function(){if(this.listenersSetUp)return;this._subscribeToBigPipeInit(h);this._subscribeToFullPageE2E(h);this.listenersSetUp=true;},_init:function(s,t,u){m[s]={perfx_page:t,perfx_page_type:u};this._setupListeners();},initForPageLoad:function(s,t,u){q=s;this._init(s,t,u);},initForQuickling:function(s,t,u,v){this._init(s,t,u);p[s]=v;},_subscribeToBigPipeInit:function(s){s.subscribe(n,(function(event,t){var u=t.arbiter;this._subscribeToTTI(u);this._subscribeToAsyncTransitionE2E(u);}).bind(this));},_subscribeToTTI:function(s){s.subscribe(o,function(event,t){var u=t.lid;if(!(u in m))return;m[u].tti=t.ts;});},_subscribeToFullPageE2E:function(s){s.subscribe(j.BIGPIPE_ONLOAD,(function(event,t){if(!(q in m))return;m[q].e2e=t.ts;this._finishPageload(q);}).bind(this));},_subscribeToAsyncTransitionE2E:function(s){s.subscribe(j.AJAXPIPE_ONLOAD,(function(event,t){var u=t.lid;if(!(u in m))return;m[u].e2e=t.ts;this._finishQuickling(u);}).bind(this));},_generatePayload:function(s,t){var u=m[s];if(u.fbtrace_id){u.js_tti=this._getJSTime(t,u.tti);u.js_e2e=this._getJSTime(t,u.e2e);}var v=Object.assign({},u);if(!this._adjustAndValidateValues(v,t))return;return v;},_getPageloadPayload:function(s){if(!(s in m))return;if(!l.timing){delete m[s];return;}var t=l.timing.navigationStart;return this._generatePayload(s,t);},_getQuicklingPayload:function(s){if(!(s in p)||!(s in m))return;if(!l.timing||!l.getEntriesByName){delete p[s];delete m[s];return;}var t=p[s],u=l.getEntriesByName(t);if(u.length===0)return;var v=u[0],w=l.timing.navigationStart+v.startTime;return this._generatePayload(s,w);},_finishPageload:function(s){var t=this._getPageloadPayload(s);if(t)this._log(s,t);},_finishQuickling:function(s){var t=this._getQuicklingPayload(s);if(t)this._log(s,t);},_log:function(s,t){k.flush(s,t);},_adjustAndValidateValues:function(s,t){var u=['e2e','tti'],v=true;for(var w=0;w<u.length;w++){var x=u[w],y=s[x];if(!y){v=false;break;}s[x]=y-t;}return v;},getPayload:function(s){if(!(s in m))return;var t=m[s].perfx_page_type;if(t==="normal"){return this._getPageloadPayload(s);}else if(t==="quickling")return this._getQuicklingPayload(s);},setFBTraceID:function(s,t){if(s in m)m[s].fbtrace_id=t;},_getJSTime:function(s,t){if(s>t)return 0;var u=0;i.read('time_slice').forEach(function(v){var w=v.begin,x=v.end;if(w>x)return;if(s<=w&&x<=t){u+=x-w;}else if(w<=s&&t<=x){u+=t-s;}else if(w<=s&&s<=x){u+=x-s;}else if(w<=t&&t<=x)u+=t-w;});return u;}};f.exports=r;},null);
__d('PagePluginActionLogger',['BanzaiLogger','DOM','Event','PluginActions','PluginActionTypes'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m={initializeClickLoggers:function(n,o,p,q,r,s,t,u){var v=function(w,x){try{var z=i.find(o,'.'+w);j.listen(z,'click',function(aa){h.log('PagePluginActionsLoggerConfig',{page_id:n,page_plugin_action:x,page_plugin_action_type:l.CLICK});});}catch(y){}};v(p,k.PAGE_LIKE);v(q,k.PAGE_UNLIKE);v(r,k.PAGE_AVATAR);v(s,k.PAGE_PERMALINK);v(t,k.PAGE_SHARE);v(u,k.PAGE_CTA);}};f.exports=m;},null);
__d('PluginCSSReflowHack',['Style'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={trigger:function(j){setTimeout(function(){var k='border-bottom-width',l=h.get(j,k);h.set(j,k,parseInt(l,10)+1+'px');var m=j.offsetHeight;h.set(j,k,l);return m;},1000);}};f.exports=i;},null);
__d('KappaWrapper',['AsyncSignal','setTimeoutAcrossTransitions'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=false;f.exports={forceStart:function(k,l,m){var n=0,o=function(){new h('/si/kappa/',{Ko:"a"}).send();if((++n)<k)i(o,l*1000);};i(o,(l+m)*1000);},start:function(k,l,m){if(!j){j=true;this.forceStart(k,l,m);}}};},null);
__d('Chromedome',['fbt'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();g.start=function(i){if(i.off||top!==window||!/(^|\.)facebook\.com$/.test(document.domain))return;var j=i.stop||h._("Stop!"),k=i.text||h._("This is a browser feature intended for developers. If someone told you to copy-paste something here to enable a Facebook feature or \"hack\" someone's account, it is a scam and will give them access to your Facebook account."),l=i.more||h._("For more information, see {url}.",[h.param('url','https://www.facebook.com/selfxss')]);if((window.chrome||window.safari)&&!i.textonly){var m='font-family:helvetica; font-size:20px; ';[[j,i.c1||m+'font-size:50px; font-weight:bold; '+'color:red; -webkit-text-stroke:1px black;'],[k,i.c2||m],[l,i.c3||m],['','']].map(function(s){setTimeout(console.log.bind(console,'\n%c'+s[0],s[1]));});}else{var n=['',' .d8888b.  888                       888','d88P  Y88b 888                       888','Y88b.      888                       888',' "Y888b.   888888  .d88b.  88888b.   888','    "Y88b. 888    d88""88b 888 "88b  888','      "888 888    888  888 888  888  Y8P','Y88b  d88P Y88b.  Y88..88P 888 d88P',' "Y8888P"   "Y888  "Y88P"  88888P"   888','                           888','                           888','                           888'],o=(''+k).match(/.{35}.+?\s+|.+$/g),p=Math.floor(Math.max(0,(n.length-o.length)/2));for(var q=0;q<n.length||q<o.length;q++){var r=n[q];n[q]=r+new Array(45-r.length).join(' ')+(o[q-p]||'');}console.log('\n\n\n'+n.join('\n')+'\n\n'+l+'\n');return;}};},null);