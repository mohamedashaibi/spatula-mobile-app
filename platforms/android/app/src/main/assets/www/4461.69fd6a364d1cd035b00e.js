(self.webpackChunkSpatulalatest=self.webpackChunkSpatulalatest||[]).push([[4461],{4461:(o,e,t)=>{"use strict";t.r(e),t.d(e,{CourseDataPageModule:()=>w});var i=t(1116),n=t(1462),s=t(8809),c=t(4174),r=t(4762),u=t(2693),a=t(7368),p=t(2661),g=t(9452),l=t(376);function d(o,e){if(1&o&&(a.TgZ(0,"p"),a._uU(1),a.qZA()),2&o){const o=a.oxw();a.xp6(1),a.Oqu(o.course.name)}}function h(o,e){1&o&&(a.TgZ(0,"div",12),a._UZ(1,"app-loading"),a.qZA())}function Z(o,e){if(1&o&&a._UZ(0,"div"),2&o){const o=a.oxw(2);a.Jzz("height:100%;background: url(",o.course.pic,");background-size: cover;background-position: center;background-repeat: no-repeat")}}function f(o,e){if(1&o&&(a.TgZ(0,"div",13),a.YNc(1,Z,1,3,"div",14),a.qZA()),2&o){const o=a.oxw();a.xp6(1),a.Q6J("ngIf",o.course&&o.course.pic)}}function T(o,e){if(1&o&&(a.TgZ(0,"div",19),a.TgZ(1,"p"),a._uU(2,"\u0627\u0644\u0648\u0635\u0641"),a.qZA(),a.TgZ(3,"p"),a._uU(4),a.qZA(),a.qZA()),2&o){const o=a.oxw(2);a.xp6(4),a.Oqu(o.course.description)}}function q(o,e){if(1&o){const o=a.EpF();a.TgZ(0,"ion-item",20),a.NdJ("click",function(){const e=a.CHM(o).$implicit;return a.oxw(2).goToRecipe(e.id)}),a.TgZ(1,"ion-thumbnail",1),a._UZ(2,"img",21),a.qZA(),a.TgZ(3,"div"),a.TgZ(4,"p"),a._uU(5),a.qZA(),a.TgZ(6,"p"),a._uU(7),a.qZA(),a.qZA(),a.TgZ(8,"label",3),a._uU(9,"\u0627\u0644\u0645\u0632\u064a\u062f"),a.qZA(),a.qZA()}if(2&o){const o=e.$implicit;a.xp6(2),a.s9C("src",o.pic,a.LSH),a.xp6(3),a.Oqu(o.title),a.xp6(2),a.Oqu(o.subtitle)}}function A(o,e){if(1&o&&(a.TgZ(0,"div",19),a.TgZ(1,"p"),a._uU(2,"\u062b\u0645\u0646 \u0627\u0644\u0634\u0631\u0627\u0621 "),a.qZA(),a.TgZ(3,"p"),a._uU(4),a.qZA(),a.qZA()),2&o){const o=a.oxw(2);a.xp6(4),a.hij("",o.course.price," \u062f\u064a\u0646\u0627\u0631 \u0644\u064a\u0628\u064a ")}}function x(o,e){if(1&o&&(a.TgZ(0,"div",19),a.TgZ(1,"p"),a._uU(2,"\u0643\u064a\u0641\u064a\u0629 \u0627\u0644\u0634\u0631\u0627\u0621"),a.qZA(),a.TgZ(3,"p"),a._uU(4),a.qZA(),a.qZA()),2&o){const o=a.oxw(2);a.xp6(4),a.Oqu(o.course.howTo)}}function m(o,e){if(1&o){const o=a.EpF();a.TgZ(0,"p",22),a.NdJ("click",function(){return a.CHM(o),a.oxw(2).goToPurchase()}),a._uU(1," \u0634\u0631\u0627\u0621"),a.qZA()}}function _(o,e){if(1&o&&(a.TgZ(0,"div",15),a.YNc(1,T,5,1,"div",16),a.YNc(2,q,10,3,"ion-item",17),a.YNc(3,A,5,1,"div",16),a.YNc(4,x,5,1,"div",16),a.YNc(5,m,2,0,"p",18),a.qZA()),2&o){const o=a.oxw();a.xp6(1),a.Q6J("ngIf",o.course),a.xp6(1),a.Q6J("ngForOf",o.course.videos),a.xp6(1),a.Q6J("ngIf",!o.course.paid&&o.course),a.xp6(1),a.Q6J("ngIf",!o.course.paid&&o.course.howTo),a.xp6(1),a.Q6J("ngIf",!o.course.paid&&o.course)}}const v=[{path:"",component:(()=>{class o{constructor(o,e,t,i,n,s){this.router=o,this.alertCtrl=e,this.location=t,this.shared=i,this.http=n,this.route=s,this.loading=!0}ngOnInit(){this.route.queryParams.subscribe(o=>{this.course_id=o.course_id,this.LoadCourse()})}goBack(){this.location.back()}goToRecipe(o){this.router.navigate(["recipe-data"],{queryParams:{recipe_id:o}})}goToPurchase(){this.shared.selectedCourse=this.course,this.router.navigate(["purchase"])}LoadCourse(o){new u.WM({"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"});let e={api_token:this.shared.token,course_id:parseInt(this.course_id)};console.log(e),this.http.post(this.shared.base_url+"getCourseData",e,{"Content-Type":"application/json"}).then(e=>{console.log(e);let t=JSON.parse(e.data);this.course=t,o&&setTimeout(()=>{console.log("Async operation has ended"),o.target.complete()},2e3),this.loading=!1},e=>(0,r.__awaiter)(this,void 0,void 0,function*(){o&&setTimeout(()=>{console.log("Async operation has ended"),o.target.complete()},2e3),this.loading=!1,this.shared.showErroAlert()}))}doRefresh(o){this.LoadCourse(o)}}return o.\u0275fac=function(e){return new(e||o)(a.Y36(c.F0),a.Y36(s.Br),a.Y36(i.Ye),a.Y36(p.F),a.Y36(g.t),a.Y36(c.gz))},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-course-data"]],decls:19,vars:4,consts:[[1,"spatula-header"],["slot","start"],[4,"ngIf"],["slot","end"],[3,"click"],["src","assets/img/backButton.svg","slot","icon-only",2,"font-size","16px"],["slot","fixed","pullFactor","0.5","pullMin","100","pullMax","200",3,"ionRefresh"],["class","loading",4,"ngIf"],["class","body-holder","style","height:160px",4,"ngIf"],["style","margin-bottom:45px;",4,"ngIf"],[1,"help",3,"click"],["src","assets/img/whatsapp.png"],[1,"loading"],[1,"body-holder",2,"height","160px"],[3,"style",4,"ngIf"],[2,"margin-bottom","45px"],["class","course-description",4,"ngIf"],["class","recipe-card","lines","none",3,"click",4,"ngFor","ngForOf"],["class","purchase-button",3,"click",4,"ngIf"],[1,"course-description"],["lines","none",1,"recipe-card",3,"click"],[3,"src"],[1,"purchase-button",3,"click"]],template:function(o,e){1&o&&(a.TgZ(0,"ion-header",0),a.TgZ(1,"ion-toolbar"),a.TgZ(2,"ion-buttons",1),a._UZ(3,"ion-menu-button"),a.qZA(),a.TgZ(4,"ion-title"),a.YNc(5,d,2,1,"p",2),a.qZA(),a.TgZ(6,"ion-buttons",3),a.TgZ(7,"ion-button",4),a.NdJ("click",function(){return e.goBack()}),a._UZ(8,"ion-icon",5),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(9,"ion-content"),a.TgZ(10,"ion-refresher",6),a.NdJ("ionRefresh",function(o){return e.doRefresh(o)}),a._UZ(11,"ion-refresher-content"),a.qZA(),a.YNc(12,h,2,0,"div",7),a.YNc(13,f,2,1,"div",8),a.YNc(14,_,6,5,"div",9),a.qZA(),a.TgZ(15,"div",10),a.NdJ("click",function(){return e.shared.openLink("whats")}),a._UZ(16,"img",11),a.TgZ(17,"p"),a._uU(18,"\u0644\u0644\u0645\u0633\u0627\u0639\u062f\u0629. \u0627\u0636\u063a\u0637\u064a \u0647\u0646\u0627 \u0644\u0644\u062a\u0648\u0627\u0635\u0644 \u0639\u0628\u0631 \u0627\u0644\u0648\u0627\u062a\u0633\u0627\u0628."),a.qZA(),a.qZA()),2&o&&(a.xp6(5),a.Q6J("ngIf",e.course),a.xp6(7),a.Q6J("ngIf",e.loading),a.xp6(1),a.Q6J("ngIf",!e.loading),a.xp6(1),a.Q6J("ngIf",!e.loading&&e.course))},directives:[s.Gu,s.sr,s.Sm,s.fG,s.wd,i.O5,s.YG,s.gu,s.W2,s.nJ,s.Wo,l.N,i.sg,s.Ie,s.Bs],styles:[""]}),o})()}];let b=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[c.Bz.forChild(v)],c.Bz]}),o})();var k=t(957);let w=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[i.ez,n.u5,s.Pc,b,k.K]]}),o})()}}]);