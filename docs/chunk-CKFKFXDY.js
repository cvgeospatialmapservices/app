import{a as z,b as B}from"./chunk-YJJKVMJ3.js";import"./chunk-5ZKEOG6J.js";import{c as ne,d as K,f as R,g as Q,h as q}from"./chunk-NJC4F6AZ.js";import{b as ie,g as ae,i as oe,j as re,l as g}from"./chunk-HGYIP6LI.js";import{$ as G,$a as m,Ca as F,Cb as p,Da as y,Db as h,Eb as C,Fb as I,Gb as T,Hb as L,Ic as j,Jb as O,Kb as d,Kc as Z,Lb as P,Lc as M,Mb as S,Mc as ee,Nb as E,Oc as te,Pb as D,Qb as w,Sb as b,Ub as J,_a as c,_b as X,ac as _,ba as V,ka as f,la as v,ma as W,nb as H,rb as u,rc as N,sb as l,tb as a,tc as A,uc as Y,vb as k,xb as x}from"./chunk-OMHZYM74.js";var le=["*",[["p-header"]]],pe=["*","p-header"],he=i=>({$implicit:i}),ce=i=>({transitionParams:i}),ue=i=>({value:"visible",params:i}),ge=i=>({value:"hidden",params:i});function fe(i,o){if(i&1&&C(0,"span",11),i&2){let e=d(3);x(e.accordion.collapseIcon),a("ngClass",e.iconClass),l("aria-hidden",!0)}}function me(i,o){if(i&1&&C(0,"ChevronDownIcon",11),i&2){let e=d(3);a("ngClass",e.iconClass),l("aria-hidden",!0)}}function be(i,o){if(i&1&&(I(0),u(1,fe,1,4,"span",9)(2,me,1,2,"ChevronDownIcon",10),T()),i&2){let e=d(2);c(),a("ngIf",e.accordion.collapseIcon),c(),a("ngIf",!e.accordion.collapseIcon)}}function _e(i,o){if(i&1&&C(0,"span",11),i&2){let e=d(3);x(e.accordion.expandIcon),a("ngClass",e.iconClass),l("aria-hidden",!0)}}function ve(i,o){if(i&1&&C(0,"ChevronRightIcon",11),i&2){let e=d(3);a("ngClass",e.iconClass),l("aria-hidden",!0)}}function ye(i,o){if(i&1&&(I(0),u(1,_e,1,4,"span",9)(2,ve,1,2,"ChevronRightIcon",10),T()),i&2){let e=d(2);c(),a("ngIf",e.accordion.expandIcon),c(),a("ngIf",!e.accordion.expandIcon)}}function Ce(i,o){if(i&1&&(I(0),u(1,be,3,2,"ng-container",3)(2,ye,3,2,"ng-container",3),T()),i&2){let e=d();c(),a("ngIf",e.selected),c(),a("ngIf",!e.selected)}}function Ie(i,o){}function Te(i,o){i&1&&u(0,Ie,0,0,"ng-template")}function Ae(i,o){if(i&1&&(p(0,"span",12),b(1),h()),i&2){let e=d();c(),J(" ",e.header," ")}}function xe(i,o){i&1&&L(0)}function Se(i,o){i&1&&S(0,1,["*ngIf","hasHeaderFacet"])}function Ee(i,o){i&1&&L(0)}function De(i,o){if(i&1&&(I(0),u(1,Ee,1,0,"ng-container",6),T()),i&2){let e=d();c(),a("ngTemplateOutlet",e.contentTemplate)}}var we=["*"],U=(()=>{class i{el;changeDetector;id;header;headerStyle;tabStyle;contentStyle;tabStyleClass;headerStyleClass;contentStyleClass;disabled;cache=!0;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";iconPos="start";get selected(){return this._selected}set selected(e){this._selected=e,this.loaded||(this._selected&&this.cache&&(this.loaded=!0),this.changeDetector.detectChanges())}headerAriaLevel=2;selectedChange=new y;headerFacet;templates;_selected=!1;get iconClass(){return this.iconPos==="end"?"p-accordion-toggle-icon-end":"p-accordion-toggle-icon"}contentTemplate;headerTemplate;iconTemplate;loaded=!1;accordion;constructor(e,n,t){this.el=n,this.changeDetector=t,this.accordion=e,this.id=ie()}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;case"header":this.headerTemplate=e.template;break;case"icon":this.iconTemplate=e.template;break;default:this.contentTemplate=e.template;break}})}toggle(e){if(this.disabled)return!1;let n=this.findTabIndex();if(this.selected)this.selected=!1,this.accordion.onClose.emit({originalEvent:e,index:n});else{if(!this.accordion.multiple)for(var t=0;t<this.accordion.tabs.length;t++)this.accordion.tabs[t].selected&&(this.accordion.tabs[t].selected=!1,this.accordion.tabs[t].selectedChange.emit(!1),this.accordion.tabs[t].changeDetector.markForCheck());this.selected=!0,this.loaded=!0,this.accordion.onOpen.emit({originalEvent:e,index:n})}this.selectedChange.emit(this.selected),this.accordion.updateActiveIndex(),this.changeDetector.markForCheck(),e?.preventDefault()}findTabIndex(){let e=-1;for(var n=0;n<this.accordion.tabs.length;n++)if(this.accordion.tabs[n]==this){e=n;break}return e}get hasHeaderFacet(){return this.headerFacet&&this.headerFacet.length>0}onKeydown(e){switch(e.code){case"Enter":case"Space":this.toggle(e),e.preventDefault();break;default:break}}getTabHeaderActionId(e){return`${e}_header_action`}getTabContentId(e){return`${e}_content`}ngOnDestroy(){this.accordion.tabs.splice(this.findTabIndex(),1)}static \u0275fac=function(n){return new(n||i)(m(G(()=>$)),m(F),m(N))};static \u0275cmp=v({type:i,selectors:[["p-accordionTab"]],contentQueries:function(n,t,r){if(n&1&&(E(r,ae,4),E(r,oe,4)),n&2){let s;D(s=w())&&(t.headerFacet=s),D(s=w())&&(t.templates=s)}},hostAttrs:[1,"p-element"],inputs:{id:"id",header:"header",headerStyle:"headerStyle",tabStyle:"tabStyle",contentStyle:"contentStyle",tabStyleClass:"tabStyleClass",headerStyleClass:"headerStyleClass",contentStyleClass:"contentStyleClass",disabled:[f.HasDecoratorInputTransform,"disabled","disabled",A],cache:[f.HasDecoratorInputTransform,"cache","cache",A],transitionOptions:"transitionOptions",iconPos:"iconPos",selected:"selected",headerAriaLevel:[f.HasDecoratorInputTransform,"headerAriaLevel","headerAriaLevel",Y]},outputs:{selectedChange:"selectedChange"},features:[H],ngContentSelectors:pe,decls:12,vars:44,consts:[[1,"p-accordion-tab",3,"ngClass","ngStyle"],["role","heading",1,"p-accordion-header"],["role","button",1,"p-accordion-header-link",3,"click","keydown","ngClass","ngStyle"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-accordion-header-text",4,"ngIf"],[4,"ngTemplateOutlet"],["role","region",1,"p-toggleable-content"],[1,"p-accordion-content",3,"ngClass","ngStyle"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-accordion-header-text"]],template:function(n,t){n&1&&(P(le),p(0,"div",0)(1,"div",1)(2,"a",2),O("click",function(s){return t.toggle(s)})("keydown",function(s){return t.onKeydown(s)}),u(3,Ce,3,2,"ng-container",3)(4,Te,1,0,null,4)(5,Ae,2,1,"span",5)(6,xe,1,0,"ng-container",6)(7,Se,1,0,"ng-content",3),h()(),p(8,"div",7)(9,"div",8),S(10),u(11,De,2,1,"ng-container",3),h()()()),n&2&&(k("p-accordion-tab-active",t.selected),a("ngClass",t.tabStyleClass)("ngStyle",t.tabStyle),l("data-pc-name","accordiontab"),c(),k("p-highlight",t.selected)("p-disabled",t.disabled),l("aria-level",t.headerAriaLevel)("data-p-disabled",t.disabled)("data-pc-section","header"),c(),a("ngClass",t.headerStyleClass)("ngStyle",t.headerStyle),l("tabindex",t.disabled?null:0)("id",t.getTabHeaderActionId(t.id))("aria-controls",t.getTabContentId(t.id))("aria-expanded",t.selected)("aria-disabled",t.disabled)("data-pc-section","headeraction"),c(),a("ngIf",!t.iconTemplate),c(),a("ngTemplateOutlet",t.iconTemplate)("ngTemplateOutletContext",_(34,he,t.selected)),c(),a("ngIf",!t.hasHeaderFacet),c(),a("ngTemplateOutlet",t.headerTemplate),c(),a("ngIf",t.hasHeaderFacet),c(),a("@tabContent",t.selected?_(38,ue,_(36,ce,t.transitionOptions)):_(42,ge,_(40,ce,t.transitionOptions))),l("id",t.getTabContentId(t.id))("aria-hidden",!t.selected)("aria-labelledby",t.getTabHeaderActionId(t.id))("data-pc-section","toggleablecontent"),c(),a("ngClass",t.contentStyleClass)("ngStyle",t.contentStyle),c(2),a("ngIf",t.contentTemplate&&(t.cache?t.loaded:t.selected)))},dependencies:()=>[j,Z,ee,M,B,z],styles:[`@layer primeng{.p-accordion-header-link{cursor:pointer;display:flex;align-items:center;-webkit-user-select:none;user-select:none;position:relative;text-decoration:none}.p-accordion-header-link:focus{z-index:1}.p-accordion-header-text{line-height:1}.p-accordion .p-toggleable-content{overflow:hidden}.p-accordion .p-accordion-tab-active>.p-toggleable-content:not(.ng-animating){overflow:inherit}.p-accordion-toggle-icon-end{order:1;margin-left:auto}.p-accordion-toggle-icon{order:0}}
`],encapsulation:2,data:{animation:[ne("tabContent",[Q("hidden",R({height:"0",visibility:"hidden"})),Q("visible",R({height:"*",visibility:"visible"})),q("visible <=> hidden",[K("{{transitionParams}}")]),q("void => *",K(0))])]},changeDetection:0})}return i})(),$=(()=>{class i{el;changeDetector;multiple=!1;style;styleClass;expandIcon;collapseIcon;get activeIndex(){return this._activeIndex}set activeIndex(e){if(this._activeIndex=e,this.preventActiveIndexPropagation){this.preventActiveIndexPropagation=!1;return}this.updateSelectionState()}selectOnFocus=!1;get headerAriaLevel(){return this._headerAriaLevel}set headerAriaLevel(e){typeof e=="number"&&e>0?this._headerAriaLevel=e:this._headerAriaLevel!==2&&(this._headerAriaLevel=2)}onClose=new y;onOpen=new y;activeIndexChange=new y;tabList;tabListSubscription=null;_activeIndex;_headerAriaLevel=2;preventActiveIndexPropagation=!1;tabs=[];constructor(e,n){this.el=e,this.changeDetector=n}onKeydown(e){switch(e.code){case"ArrowDown":this.onTabArrowDownKey(e);break;case"ArrowUp":this.onTabArrowUpKey(e);break;case"Home":e.shiftKey||this.onTabHomeKey(e);break;case"End":e.shiftKey||this.onTabEndKey(e);break}}focusedElementIsAccordionHeader(){return document.activeElement.tagName.toLowerCase()==="a"&&document.activeElement.classList.contains("p-accordion-header-link")}onTabArrowDownKey(e){if(this.focusedElementIsAccordionHeader()){let n=this.findNextHeaderAction(e.target.parentElement.parentElement.parentElement);n?this.changeFocusedTab(n):this.onTabHomeKey(e),e.preventDefault()}}onTabArrowUpKey(e){if(this.focusedElementIsAccordionHeader()){let n=this.findPrevHeaderAction(e.target.parentElement.parentElement.parentElement);n?this.changeFocusedTab(n):this.onTabEndKey(e),e.preventDefault()}}onTabHomeKey(e){let n=this.findFirstHeaderAction();this.changeFocusedTab(n),e.preventDefault()}changeFocusedTab(e){e&&(g.focus(e),this.selectOnFocus&&this.tabs.forEach((n,t)=>{let r=this.multiple?this._activeIndex.includes(t):t===this._activeIndex;this.multiple?(this._activeIndex||(this._activeIndex=[]),n.id==e.id&&(n.selected=!n.selected,this._activeIndex.includes(t)?this._activeIndex=this._activeIndex.filter(s=>s!==t):this._activeIndex.push(t))):n.id==e.id?(n.selected=!n.selected,this._activeIndex=t):n.selected=!1,n.selectedChange.emit(r),this.activeIndexChange.emit(this._activeIndex),n.changeDetector.markForCheck()}))}findNextHeaderAction(e,n=!1){let t=n?e:e.nextElementSibling,r=g.findSingle(t,'[data-pc-section="header"]');return r?g.getAttribute(r,"data-p-disabled")?this.findNextHeaderAction(r.parentElement.parentElement):g.findSingle(r,'[data-pc-section="headeraction"]'):null}findPrevHeaderAction(e,n=!1){let t=n?e:e.previousElementSibling,r=g.findSingle(t,'[data-pc-section="header"]');return r?g.getAttribute(r,"data-p-disabled")?this.findPrevHeaderAction(r.parentElement.parentElement):g.findSingle(r,'[data-pc-section="headeraction"]'):null}findFirstHeaderAction(){let e=this.el.nativeElement.firstElementChild.childNodes[0];return this.findNextHeaderAction(e,!0)}findLastHeaderAction(){let e=this.el.nativeElement.firstElementChild.childNodes,n=e[e.length-1];return this.findPrevHeaderAction(n,!0)}onTabEndKey(e){let n=this.findLastHeaderAction();this.changeFocusedTab(n),e.preventDefault()}ngAfterContentInit(){this.initTabs(),this.tabListSubscription=this.tabList.changes.subscribe(e=>{this.initTabs()})}initTabs(){this.tabs=this.tabList.toArray(),this.tabs.forEach(e=>{e.headerAriaLevel=this._headerAriaLevel}),this.updateSelectionState(),this.changeDetector.markForCheck()}getBlockableElement(){return this.el.nativeElement.children[0]}updateSelectionState(){if(this.tabs&&this.tabs.length&&this._activeIndex!=null)for(let e=0;e<this.tabs.length;e++){let n=this.multiple?this._activeIndex.includes(e):e===this._activeIndex;n!==this.tabs[e].selected&&(this.tabs[e].selected=n,this.tabs[e].selectedChange.emit(n),this.tabs[e].changeDetector.markForCheck())}}isTabActive(e){return this.multiple?this._activeIndex&&this._activeIndex.includes(e):this._activeIndex===e}getTabProp(e,n){return e.props?e.props[n]:void 0}updateActiveIndex(){let e=this.multiple?[]:null;this.tabs.forEach((n,t)=>{if(n.selected)if(this.multiple)e.push(t);else{e=t;return}}),this.preventActiveIndexPropagation=!0,this._activeIndex=e,this.activeIndexChange.emit(e)}ngOnDestroy(){this.tabListSubscription&&this.tabListSubscription.unsubscribe()}static \u0275fac=function(n){return new(n||i)(m(F),m(N))};static \u0275cmp=v({type:i,selectors:[["p-accordion"]],contentQueries:function(n,t,r){if(n&1&&E(r,U,5),n&2){let s;D(s=w())&&(t.tabList=s)}},hostAttrs:[1,"p-element"],hostBindings:function(n,t){n&1&&O("keydown",function(s){return t.onKeydown(s)})},inputs:{multiple:[f.HasDecoratorInputTransform,"multiple","multiple",A],style:"style",styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",activeIndex:"activeIndex",selectOnFocus:[f.HasDecoratorInputTransform,"selectOnFocus","selectOnFocus",A],headerAriaLevel:"headerAriaLevel"},outputs:{onClose:"onClose",onOpen:"onOpen",activeIndexChange:"activeIndexChange"},features:[H],ngContentSelectors:we,decls:2,vars:4,consts:[[3,"ngClass","ngStyle"]],template:function(n,t){n&1&&(P(),p(0,"div",0),S(1),h()),n&2&&(x(t.styleClass),a("ngClass","p-accordion p-component")("ngStyle",t.style))},dependencies:[j,M],encapsulation:2,changeDetection:0})}return i})(),se=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=W({type:i});static \u0275inj=V({imports:[te,B,z,re]})}return i})();var Je=(()=>{let o=class o{};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=v({type:o,selectors:[["app-home"]],standalone:!0,features:[X],decls:11,vars:0,consts:[[1,"px-3"],[1,"card","flex","justify-content-center"],["header","Description"],["header","Projection"]],template:function(t,r){t&1&&(p(0,"div",0)(1,"p"),b(2," The Parcellary Tax-Web Visualization project of the City of Ibaan, this program is organized and initiated as part of Executive Order No. 104, S. 2023 with the purpose to support web-mapping in Ibaan, for open sourced layer map and in return serving all offices, Ibaan Smart City and all parcellary in barangay level. "),h()(),p(3,"div",1)(4,"p-accordion")(5,"p-accordionTab",2)(6,"p"),b(7," The data used gathered and validated using Aerial Photography for Area Navigation Analysis and Network, capture a high-resolution, the boundary delineation, road networks and street evaluation. These high-resolution visuals serve as the foundation for accurate mapping and spatial analysis. The geospatial data and imagery obtained through mapping and aerial photography are employed "),h()(),p(8,"p-accordionTab",3)(9,"p"),b(10,"For our projection we adopt from WGS 84 EPSG: 4326"),h()()()())},dependencies:[se,$,U]});let i=o;return i})();export{Je as HomeComponent};
