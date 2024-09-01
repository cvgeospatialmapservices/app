import{d as pe,e as ce,f as me,h as de,j as ue,k as fe,l as ge,p as _e,q as ve,r as he,s as ye,t as Ce,u as xe,v as Q}from"./chunk-HWOJ4WZL.js";import{f as ie}from"./chunk-O2EXJ5SW.js";import"./chunk-YJF7MHAG.js";import{I as ne,O as re,P as oe,Q as le,R as se,k as N,m as B,n as O,o as ae,p as R}from"./chunk-BQQCBL56.js";import{Ab as D,Cb as k,Db as F,Eb as W,Fb as d,Gb as A,Hb as h,Jb as j,Kb as P,La as Y,Lb as L,Nb as ee,Ob as te,Pa as n,Qa as G,T as b,Xb as z,Y as q,_a as J,ba as g,ca as M,eb as m,fb as y,gb as p,jb as K,ka as S,kb as C,la as w,lb as V,mb as X,nb as Z,ob as $,pb as r,qb as o,rb as x,sa as U,ta as H,ub as _,vb as E,wb as T,xb as c,yb as I,zb as v}from"./chunk-GVIPV5PD.js";var Ie=["*"];function De(e,l){if(e&1&&(r(0,"span",4),d(1),o()),e&2){let t=c();n(),A(t.label)}}function ke(e,l){if(e&1&&x(0,"span",6),e&2){let t=c(2);C(t.icon),p("ngClass","p-avatar-icon")}}function Fe(e,l){if(e&1&&m(0,ke,1,3,"span",5),e&2){let t=c(),a=W(6);p("ngIf",t.icon)("ngIfElse",a)}}function Ae(e,l){if(e&1){let t=E();r(0,"img",8),T("error",function(i){S(t);let s=c(2);return w(s.imageError(i))}),o()}if(e&2){let t=c(2);p("src",t.image,Y),y("aria-label",t.ariaLabel)}}function je(e,l){if(e&1&&m(0,Ae,1,2,"img",7),e&2){let t=c();p("ngIf",t.image)}}var be=(()=>{class e{label;icon;image;size="normal";shape="square";style;styleClass;ariaLabel;ariaLabelledBy;onImageError=new H;containerClass(){return{"p-avatar p-component":!0,"p-avatar-image":this.image!=null,"p-avatar-circle":this.shape==="circle","p-avatar-lg":this.size==="large","p-avatar-xl":this.size==="xlarge"}}imageError(t){this.onImageError.emit(t)}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=g({type:e,selectors:[["p-avatar"]],hostAttrs:[1,"p-element"],inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",style:"style",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},ngContentSelectors:Ie,decls:7,vars:9,consts:[["iconTemplate",""],["imageTemplate",""],[3,"ngClass","ngStyle"],["class","p-avatar-text",4,"ngIf","ngIfElse"],[1,"p-avatar-text"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(a,i){if(a&1&&(I(),r(0,"div",2),v(1),m(2,De,2,1,"span",3)(3,Fe,1,2,"ng-template",null,0,z)(5,je,1,1,"ng-template",null,1,z),o()),a&2){let s=W(4);C(i.styleClass),p("ngClass",i.containerClass())("ngStyle",i.style),y("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("data-pc-name","avatar"),n(2),p("ngIf",i.label)("ngIfElse",s)}},dependencies:[N,B,O],styles:[`@layer primeng{.p-avatar{display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;font-size:1rem}.p-avatar.p-avatar-image{background-color:transparent}.p-avatar.p-avatar-circle{border-radius:50%;overflow:hidden}.p-avatar .p-avatar-icon{font-size:1rem}.p-avatar img{width:100%;height:100%}}
`],encapsulation:2,changeDetection:0})}return e})(),Me=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=M({type:e});static \u0275inj=b({imports:[R]})}return e})();var Le=["*",[["p-header"]],[["p-footer"]]],Ne=["*","p-header","p-footer"];function Be(e,l){e&1&&_(0)}function Oe(e,l){if(e&1&&(r(0,"div",8),v(1,1),m(2,Be,1,0,"ng-container",6),o()),e&2){let t=c();n(2),p("ngTemplateOutlet",t.headerTemplate)}}function Re(e,l){e&1&&_(0)}function Ve(e,l){if(e&1&&(r(0,"div",9),d(1),m(2,Re,1,0,"ng-container",6),o()),e&2){let t=c();n(),h(" ",t.header," "),n(),p("ngTemplateOutlet",t.titleTemplate)}}function We(e,l){e&1&&_(0)}function ze(e,l){if(e&1&&(r(0,"div",10),d(1),m(2,We,1,0,"ng-container",6),o()),e&2){let t=c();n(),h(" ",t.subheader," "),n(),p("ngTemplateOutlet",t.subtitleTemplate)}}function Qe(e,l){e&1&&_(0)}function qe(e,l){e&1&&_(0)}function Ue(e,l){if(e&1&&(r(0,"div",11),v(1,2),m(2,qe,1,0,"ng-container",6),o()),e&2){let t=c();n(2),p("ngTemplateOutlet",t.footerTemplate)}}var Se=(()=>{class e{el;header;subheader;set style(t){ne.equals(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;templates;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_style=J(null);constructor(t){this.el=t}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this.headerTemplate=t.template;break;case"title":this.titleTemplate=t.template;break;case"subtitle":this.subtitleTemplate=t.template;break;case"content":this.contentTemplate=t.template;break;case"footer":this.footerTemplate=t.template;break;default:this.contentTemplate=t.template;break}})}getBlockableElement(){return this.el.nativeElement.children[0]}static \u0275fac=function(a){return new(a||e)(G(U))};static \u0275cmp=g({type:e,selectors:[["p-card"]],contentQueries:function(a,i,s){if(a&1&&(D(s,re,5),D(s,oe,5),D(s,le,4)),a&2){let f;k(f=F())&&(i.headerFacet=f.first),k(f=F())&&(i.footerFacet=f.first),k(f=F())&&(i.templates=f)}},hostAttrs:[1,"p-element"],inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},ngContentSelectors:Ne,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(a,i){a&1&&(I(Le),r(0,"div",0),m(1,Oe,3,1,"div",1),r(2,"div",2),m(3,Ve,3,2,"div",3)(4,ze,3,2,"div",4),r(5,"div",5),v(6),m(7,Qe,1,0,"ng-container",6),o(),m(8,Ue,3,1,"div",7),o()()),a&2&&(C(i.styleClass),p("ngClass","p-card p-component")("ngStyle",i._style()),y("data-pc-name","card"),n(),p("ngIf",i.headerFacet||i.headerTemplate),n(2),p("ngIf",i.header||i.titleTemplate),n(),p("ngIf",i.subheader||i.subtitleTemplate),n(3),p("ngTemplateOutlet",i.contentTemplate),n(),p("ngIf",i.footerFacet||i.footerTemplate))},dependencies:[N,B,ae,O],styles:[`@layer primeng{.p-card-header img{width:100%}}
`],encapsulation:2,changeDetection:0})}return e})(),we=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=M({type:e});static \u0275inj=b({imports:[R,se]})}return e})();var Ye=()=>({"background-color":"#ece9fc",color:"#2a1261"});function Ge(e,l){if(e&1&&(r(0,"p",7),d(1),o()),e&2){let t=c();n(),h("Found ",t.results.length," Matching Records")}}function Je(e,l){if(e&1){let t=E();r(0,"p-card",9)(1,"div",10)(2,"div",11),x(3,"p-avatar",12),r(4,"span",13),d(5),o()(),r(6,"div",14)(7,"div"),d(8),o(),r(9,"div"),x(10,"p-tag",15),o()(),r(11,"div")(12,"p-button",16),T("click",function(){let i=S(t).$implicit,s=c(2);return w(s.viewMap(i.id))}),o()()()()}if(e&2){let t=l.$implicit,a=c(2);n(3),K(te(8,Ye)),p("label",a.getInitials(t.name)),n(2),A(t.name),n(3),h("ID# ",t.id,""),n(2),p("severity",t.status)("value",t.statusText),n(2),p("outlined",!0)}}function Ke(e,l){if(e&1&&(r(0,"div",8),Z(1,Je,13,9,"p-card",9,X),o()),e&2){let t=c();n(),$(t.results)}}var At=(()=>{let l=class l{constructor(){this.router=q(ie),this.results=[],this.displayResults=!1,this.statusOptions=[...new Set(Q.map(a=>a.statusText))]}searchClick(){this.results=Q.filter(a=>!(this.id&&this.id!==a.id||this.name&&!a.name.toLowerCase().includes(this.name.toLowerCase())||this.status&&this.status!==a.statusText)),this.displayResults=!0}getInitials(a){return a.split(" ").map(i=>i[0]).join("")}viewMap(a){this.router.navigate(["/map"],{queryParams:{id:a}})}};l.\u0275fac=function(i){return new(i||l)},l.\u0275cmp=g({type:l,selectors:[["app-search-page"]],standalone:!0,features:[ee],decls:17,vars:6,consts:[[1,"p-3","flex","flex-column","gap-2","text-sm"],[1,"pt-3","flex","gap-3","flex-wrap"],[1,"flex","flex-column"],["for","username"],["pInputText","",3,"ngModelChange","ngModel"],["placeholder","Select a Status",1,"pt-3",3,"ngModelChange","options","ngModel"],["pButton","",3,"click"],[1,"font-bold","text-lg"],[1,"flex","flex-wrap","gap-3"],[1,"w-14rem"],[1,"flex","flex-column","gap-3"],[1,"flex","align-items-center","gap-3","font-bold"],["shape","circle",3,"label"],[1,"name"],[1,"flex","gap-4"],[3,"severity","value"],["label","View on the Map",3,"click","outlined"]],template:function(i,s){i&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"label",3),d(4,"ID"),o(),r(5,"input",4),L("ngModelChange",function(u){return P(s.id,u)||(s.id=u),u}),o()(),r(6,"div",2)(7,"label",3),d(8,"Name"),o(),r(9,"input",4),L("ngModelChange",function(u){return P(s.name,u)||(s.name=u),u}),o()(),r(10,"p-dropdown",5),L("ngModelChange",function(u){return P(s.status,u)||(s.status=u),u}),o()(),r(11,"div")(12,"button",6),T("click",function(){return s.searchClick()}),d(13,"Search"),o()(),r(14,"div"),m(15,Ge,2,1,"p",7)(16,Ke,3,0,"div",8),o()()),i&2&&(n(5),j("ngModel",s.id),n(4),j("ngModel",s.name),n(),p("options",s.statusOptions),j("ngModel",s.status),n(5),V(15,s.displayResults?15:-1),n(),V(16,s.results.length>0?16:-1))},dependencies:[ge,de,ue,fe,ye,he,me,pe,ce,we,Se,Me,be,xe,Ce,ve,_e],styles:["label[_ngcontent-%COMP%]{padding-left:.5rem}.name[_ngcontent-%COMP%]{text-wrap:nowrap}"]});let e=l;return e})();export{At as SearchPageComponent};
