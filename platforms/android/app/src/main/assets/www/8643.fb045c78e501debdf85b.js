(self.webpackChunkSpatulalatest=self.webpackChunkSpatulalatest||[]).push([[8643],{8643:(t,e,n)=>{"use strict";n.r(e),n.d(e,{MyDownloadsPageModule:()=>m});var i=n(1116),o=n(1462),s=n(8809),c=n(4174),l=n(7368),a=n(2661),r=n(376);function g(t,e){1&t&&(l.TgZ(0,"div",11),l._UZ(1,"app-loading"),l.qZA())}function u(t,e){if(1&t){const t=l.EpF();l.TgZ(0,"ion-item",14),l.NdJ("click",function(){const e=l.CHM(t).$implicit;return l.oxw(2).goToRecipe(e.id)}),l.TgZ(1,"ion-thumbnail",1),l._UZ(2,"img",15),l.qZA(),l.TgZ(3,"div"),l.TgZ(4,"p"),l._uU(5),l.qZA(),l.TgZ(6,"p"),l._uU(7),l.qZA(),l.qZA(),l.TgZ(8,"label",2),l._uU(9,"\u0627\u0644\u0645\u0632\u064a\u062f"),l.qZA(),l.qZA()}if(2&t){const t=e.$implicit;l.xp6(2),l.s9C("src",null==t.image[0]?null:t.image[0].image,l.LSH),l.xp6(3),l.Oqu(t.title),l.xp6(2),l.Oqu(t.subtitle)}}function d(t,e){1&t&&(l.TgZ(0,"div",16),l._uU(1," \u0644\u0645 \u064a\u062a\u0645 \u062a\u062d\u0645\u064a\u0644 \u0627\u064a \u0645\u0648\u0627\u062f \u062a\u0639\u0644\u064a\u0645\u064a\u0629 \u0641\u064a \u0627\u0644\u0648\u0642\u062a \u0627\u0644\u062d\u0627\u0644\u064a ! "),l.qZA())}function p(t,e){if(1&t&&(l.TgZ(0,"div"),l.YNc(1,u,10,3,"ion-item",12),l.YNc(2,d,2,0,"div",13),l.qZA()),2&t){const t=l.oxw();l.xp6(1),l.Q6J("ngForOf",t.myVids),l.xp6(1),l.Q6J("ngIf",!t.myVids.length)}}const Z=[{path:"",component:(()=>{class t{constructor(t,e,n){this.shared=t,this.location=e,this.router=n,this.myVids=[],this.loading=!0,this.slideOpts={autoplay:!0},this.loadOrders()}goBack(){this.location.back()}ngOnInit(){}doRefresh(t){this.loadOrders(t)}loadOrders(t){t&&setTimeout(()=>{console.log("Async operation has ended"),t.target.complete()},2e3);let e=JSON.parse(localStorage.getItem("videos"));if(e&&e.length>0)for(let n=0;n<e.length;n++)this.myVids.push(e[n]);if(e=JSON.parse(localStorage.getItem("paidVideos")),e&&e.length>0)for(let n=0;n<e.length;n++)this.myVids.push(e[n]);this.loading=!1}goToRecipe(t){this.router.navigate(["recipe-data"],{queryParams:{recipe_id:t}})}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(a.F),l.Y36(i.Ye),l.Y36(c.F0))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-my-downloads"]],decls:19,vars:2,consts:[[1,"spatula-header"],["slot","start"],["slot","end"],[3,"click"],["src","assets/img/backButton.svg","slot","icon-only",2,"font-size","16px"],[2,"margin-bottom","50px"],["slot","fixed","pullFactor","0.5","pullMin","100","pullMax","200",3,"ionRefresh"],["class","loading",4,"ngIf"],[4,"ngIf"],[1,"help",3,"click"],["src","assets/img/whatsapp.png"],[1,"loading"],["class","recipe-card","lines","none",3,"click",4,"ngFor","ngForOf"],["class","no-courses-avilable",4,"ngIf"],["lines","none",1,"recipe-card",3,"click"],[3,"src"],[1,"no-courses-avilable"]],template:function(t,e){1&t&&(l.TgZ(0,"ion-header",0),l.TgZ(1,"ion-toolbar"),l.TgZ(2,"ion-buttons",1),l._UZ(3,"ion-menu-button"),l.qZA(),l.TgZ(4,"ion-title"),l.TgZ(5,"p"),l._uU(6,"\u062a\u062d\u0645\u064a\u0644\u0627\u062a\u0649"),l.qZA(),l.qZA(),l.TgZ(7,"ion-buttons",2),l.TgZ(8,"ion-button",3),l.NdJ("click",function(){return e.goBack()}),l._UZ(9,"ion-icon",4),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(10,"ion-content",5),l.TgZ(11,"ion-refresher",6),l.NdJ("ionRefresh",function(t){return e.doRefresh(t)}),l._UZ(12,"ion-refresher-content"),l.qZA(),l.YNc(13,g,2,0,"div",7),l.YNc(14,p,3,2,"div",8),l.qZA(),l.TgZ(15,"div",9),l.NdJ("click",function(){return e.shared.openLink("whats")}),l._UZ(16,"img",10),l.TgZ(17,"p"),l._uU(18,"\u0644\u0644\u0645\u0633\u0627\u0639\u062f\u0629. \u0627\u0636\u063a\u0637\u064a \u0647\u0646\u0627 \u0644\u0644\u062a\u0648\u0627\u0635\u0644 \u0639\u0628\u0631 \u0627\u0644\u0648\u0627\u062a\u0633\u0627\u0628."),l.qZA(),l.qZA()),2&t&&(l.xp6(13),l.Q6J("ngIf",e.loading),l.xp6(1),l.Q6J("ngIf",!e.loading))},directives:[s.Gu,s.sr,s.Sm,s.fG,s.wd,s.YG,s.gu,s.W2,s.nJ,s.Wo,i.O5,r.N,i.sg,s.Ie,s.Bs],styles:[""]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[c.Bz.forChild(Z)],c.Bz]}),t})();var h=n(957);let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[i.ez,o.u5,s.Pc,h.K,f]]}),t})()}}]);