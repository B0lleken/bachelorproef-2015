/*!CK:4099840533!*//*1439174745,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["n5Y\/S"]); }

__d('UFIOrderingModeSelector.react',['InlineBlock.react','Link.react','React','Image.react','ReactXUIMenu','PopoverMenu.react','cx','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p=j.PropTypes,q=l.SelectableMenu,r=l.SelectableItem,s=j.createClass({displayName:'UFIOrderingModeSelector',propTypes:{onOrderChanged:p.func,orderingmodes:p.array.isRequired},getInitialState:function(){var t=null;this.props.orderingmodes.map(function(u){if(u.selected)t=u;});return {selectedMode:t};},onMenuItemClick:function(t,u){var v=u.item.getValue();this.props.orderingmodes.map((function(w){if(w.value===v)this.setState({selectedMode:w});}).bind(this));this.props.onOrderChanged(v);},render:function(){var t=j.createElement(q,{onItemClick:this.onMenuItemClick},this.props.orderingmodes.map((function(u){return (j.createElement(r,{key:u.value,value:u.value,selected:u.value===this.state.selectedMode.value},u.name));}).bind(this)));return (j.createElement('div',{className:"UFIOrderingModeSelector"},j.createElement(h,null,j.createElement(m,{className:"UFIOrderingModeSelectorPopover",menu:t,alignh:'right'},j.createElement(i,null,this.state.selectedMode.name,j.createElement(k,{className:"UFIOrderingModeSelectorDownCaret",src:o('/images/ui/xhp/link/more/down_caret.gif')}))))));}});f.exports=s;},null);
__d('getScrollPosition',['getDocumentScrollElement','getUnboundedScrollPosition'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();'use strict';function j(k){var l=h();if(k===window)k=l;var m=i(k),n=k===l?document.documentElement:k,o=k.scrollWidth-n.clientWidth,p=k.scrollHeight-n.clientHeight;m.x=Math.max(0,Math.min(m.x,o));m.y=Math.max(0,Math.min(m.y,p));return m;}f.exports=j;},null);
__d('LitestandStream',['Arbiter','DOMQuery','LitestandMessages','LitestandStoryInsertionStatus','ViewportBounds','csx','ge','getElementPosition','getOrCreateDOMID'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q,r,s,t={init:function(u,v,w){q=v;r=w;s=u;h.subscribe(j.STORIES_INSERTED,function(x,y){if(!y||!y.substream_id||!q)return;var z=i.scry(n(y.substream_id),t.getStoriesSelector());z.forEach(function(aa){var ba=i.scry(aa,"._5pbw"),ca=i.scry(aa,"._5pcp")[0],da=i.scry(aa,"._5pbx")[0];if(ba[0]&&ca&&da){var ea='';for(var fa=0;fa<ba.length;fa++)ea+=p(ba[fa])+' ';ea.trim();aa.setAttribute('aria-labelledby',ea+' '+p(ca)+' '+p(da));}});});},getStoriesSelector:function(){return "._5jmm";},getStreamRoot:function(){return s;},getSectionID:function(){return r;},canInsertNewerStories:function(){if(l.getTop()>o(t.getStreamRoot()).y)return false;return k.canInsert();},getFeedStreamID:function(){return parseInt(s.id.split('feed_stream_')[1],16)%1e+08;}};f.exports=t;},null);
__d("AudienceSelectorTags",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i={hasTags:function(j){return h.hasOwnProperty(j);},setHasTags:function(j){if(j)h[j]=true;}};f.exports=i;},null);
__d('SelectorDeprecated',['Event','Arbiter','Button','ContextualLayer','CSS','DataStore','DOM','Focus','HTML','Keys','MenuDeprecated','Parent','Style','Toggler','TooltipData','URI','Vector','arrayContains','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){if(c.__markCompiled)c.__markCompiled();var aa,ba,ca=[],da;function ea(pa){return s.byClass(pa,'uiSelector');}function fa(pa){return s.byClass(pa,'uiSelectorButton');}function ga(){if(!ba){ba=new k({position:'below'},n.create('div'));l.addClass(ba.getRoot(),'uiSelectorContextualLayer');}return ba;}function ha(pa){return n.scry(pa,'select')[0];}function ia(pa){return n.find(pa,'div.uiSelectorMenuWrapper');}function ja(){ja=z;r.subscribe('select',function(pa,qa){if(!aa||!qa||qa.menu!==oa.getSelectorMenu(aa))return;var ra=ka(aa),sa=la(qa.item);if(sa){var ta=aa,ua=oa.isOptionSelected(qa.item),va=oa.inform('select',{selector:ta,option:qa.item,clone:da});if(va===false)return;if(ra||!ua){oa.setSelected(ta,oa.getOptionValue(qa.item),!ua);oa.inform('toggle',{selector:ta,option:qa.item});oa.inform('change',{selector:ta});i.inform('Form/change',{node:ta});if(ma(ta))m.set(ta,'dirty',true);}}if(!ra||!sa)aa&&oa.toggle(aa);});}function ka(pa){return !!pa.getAttribute('data-multiple');}function la(pa){return l.hasClass(pa,'uiSelectorOption');}function ma(pa){return !!pa.getAttribute('data-autosubmit');}var na=function(){na=z;var pa={keydown:function(event){var qa=event.getTarget();if(n.isInputNode(qa))return;switch(h.getKeyCode(event)){case q.DOWN:case q.SPACE:case q.UP:if(fa(qa)){var ra=ea(qa);oa.toggle(ra);return false;}break;case q.ESC:if(aa){var sa=oa.getSelectorButton(aa);oa.toggle(aa);sa&&o.set(sa);return false;}break;}},mouseover:function(event){var qa=s.byAttribute(event.getTarget(),'ajaxify');if(qa&&l.hasClass(qa,'uiSelectorButton'))oa.loadMenu(ea(qa));}};h.listen(document.body,pa);};u.subscribe(['show','hide'],function(pa,qa){var ra=ea(qa.getActive());if(ra){na();ja();var sa=oa.getSelectorButton(ra),ta=oa.getSelectorMenu(ra),ua=pa==='show';sa.setAttribute('aria-expanded',ua?'true':'false');if(ua){aa=ra;if(l.hasClass(sa,'uiButtonDisabled')){oa.setEnabled(ra,false);return false;}ta=ta||oa.loadMenu(ra);var va=t.getScrollParent(ra),wa=va!==window&&va!==n.getDocumentScrollElement();if(wa||l.hasClass(ra,'uiSelectorUseLayer')){if(wa)ca.push(h.listen(va,'scroll',function(){qa.hide();}));da=n.create('div',{className:ra.className});l.addClass(da,'invisible_elem');x.getElementDimensions(ra).setElementDimensions(da);n.replace(ra,da);var xa=l.hasClass(ra,'uiSelectorRight'),ya=l.hasClass(ra,'uiSelectorBottomUp');ga().setContext(da).setContent(ra).setPosition(ya?'above':'below').setAlignment(xa?'right':'left').show();}r.register(ta);var za=r.getCheckedItems(ta);if(!za.length)za=r.getEnabledItems(ta);if(za.length)r.focusItem(za[0]);}else{aa=null;if(da){while(ca.length)ca.pop().remove();n.replace(da,ra);ga().hide();da=null;}ta&&r.unregister(ta);if(ma(ra)&&m.get(ra,'dirty')){var ab=n.scry(ra,'input.submitButton')[0];ab&&ab.click();m.remove(ra,'dirty');}}l.conditionClass(oa.getSelectorButton(ra),'selected',ua);oa.inform(ua?'open':'close',{selector:ra,clone:da});}});var oa=Object.assign(new i(),{attachMenu:function(pa,qa,ra){pa=ea(pa);if(pa){aa&&r.unregister(oa.getSelectorMenu(aa));n.setContent(ia(pa),qa);aa&&r.register(oa.getSelectorMenu(pa));da&&ga().updatePosition();if(ra){var sa=pa.getAttribute('data-name');sa&&ra.setAttribute('name',sa);if(!ka(pa))ra.setAttribute('multiple',false);var ta=ha(pa);if(ta){n.replace(ta,ra);}else n.insertAfter(pa.firstChild,ra);}return true;}},getOption:function(pa,qa){var ra=oa.getOptions(pa),sa=ra.length;while(sa--)if(qa===oa.getOptionValue(ra[sa]))return ra[sa];return null;},getOptions:function(pa){var qa=r.getItems(oa.getSelectorMenu(pa));return qa.filter(la);},getEnabledOptions:function(pa){var qa=r.getEnabledItems(oa.getSelectorMenu(pa));return qa.filter(la);},getSelectedOptions:function(pa){return r.getCheckedItems(oa.getSelectorMenu(pa));},getOptionText:function(pa){return r.getItemLabel(pa);},getOptionValue:function(pa){var qa=ea(pa),ra=ha(qa),sa=oa.getOptions(qa).indexOf(pa);return sa>=0?ra.options[sa+1].value:'';},getSelectorButton:function(pa){return n.find(pa,'a.uiSelectorButton');},getSelectorMenu:function(pa){return n.scry(pa,'div.uiSelectorMenu')[0];},getValue:function(pa){var qa=ha(pa);if(!qa)return null;if(!ka(pa))return qa.value;var ra=[],sa=qa.options;for(var ta=1,ua=sa.length;ta<ua;ta++)if(sa[ta].selected)ra.push(sa[ta].value);return ra;},isOptionSelected:function(pa){return r.isItemChecked(pa);},listen:function(pa,qa,ra){return this.subscribe(qa,function(sa,ta){if(ta.selector===pa)return ra(ta,sa);});},loadMenu:function(pa,qa){var ra=oa.getSelectorMenu(pa);if(!ra){var sa=oa.getSelectorButton(pa),ta=sa.getAttribute('ajaxify');if(ta){e(['AsyncRequest'],(function(va){var wa=new w(ta),xa=wa.getQueryData();wa.setQueryData({});var ya=new va(wa).setData(xa).setNectarModuleDataSafe(sa).setRelativeTo(sa);qa&&ya.setFinallyHandler(function(){setTimeout(qa,0);});ya.send();}).bind(this));var ua=p('<div class="uiSelectorMenuWrapper uiToggleFlyout">'+'<div class="uiMenu uiSelectorMenu loading">'+'<ul class="uiMenuInner">'+'<li><span></span></li>'+'</ul>'+'</div>'+'</div>');n.appendContent(sa.parentNode,ua);ra=oa.getSelectorMenu(pa);sa.removeAttribute('onmouseover');}}else qa&&qa();return ra;},setButtonLabel:function(pa,qa){var ra=oa.getSelectorButton(pa),sa=parseInt(ra.getAttribute('data-length'),10);qa=qa||ra.getAttribute('data-label')||'';j.setLabel(ra,qa);if(typeof qa==='string')if(sa&&qa.length>sa){ra.setAttribute('title',qa);}else ra.removeAttribute('title');},setButtonTooltip:function(pa,qa){var ra=oa.getSelectorButton(pa),sa=s.byTag(ra,'a');sa&&v.set(sa,qa||ra.getAttribute('data-tooltip')||'');},setEnabled:function(pa,qa){if(!qa&&aa&&ea(pa)===aa)oa.toggle(pa);j.setEnabled(oa.getSelectorButton(pa),qa);},setOptionEnabled:function(pa,qa){r.setItemEnabled(pa,qa);},setSelected:function(pa,qa,ra){ra=ra!==false;var sa=oa.getOption(pa,qa);if(!sa)return;var ta=oa.isOptionSelected(sa);if(ra!==ta){if(!ka(pa)&&!ta){var ua=oa.getSelectedOptions(pa)[0];ua&&r.toggleItem(ua);}r.toggleItem(sa);}oa.updateSelector(pa);},toggle:function(pa){u.toggle(n.scry(ea(pa),'div.wrap')[0]);},updateSelector:function(pa){var qa=oa.getOptions(pa),ra=oa.getSelectedOptions(pa),sa=ha(pa).options,ta=[],ua=[];for(var va=0,wa=qa.length;va<wa;va++){var xa=y(ra,qa[va]);sa[va+1].selected=xa;if(xa){var ya=oa.getOptionText(qa[va]);ta.push(ya);ua.push(qa[va].getAttribute('data-tooltip')||ya);}}sa[0].selected=!ra.length;var za=l.hasClass(pa,'uiSelectorDynamicLabel'),ab=l.hasClass(pa,'uiSelectorDynamicTooltip');if(za||ab){var bb='';if(ka(pa)){var cb=oa.getSelectorButton(pa);bb=cb.getAttribute('data-delimiter')||', ';}ta=ta.join(bb);ua=ua.join(bb);za&&oa.setButtonLabel(pa,ta);ab&&oa.setButtonTooltip(pa,ua);}}});f.exports=oa;},null);