(self.webpackChunkSpatulalatest=self.webpackChunkSpatulalatest||[]).push([[5588],{5588:(e,t,i)=>{"use strict";i.r(t),i.d(t,{LoginPageModule:()=>m});var s=i(1116),o=i(1462),r=i(8809),a=i(4174),n=i(4762),l=i(2693),h=i(7368),c=i(7310),d=i(2661),u=i(4930),p=i(9452);const g=[{path:"",component:(()=>{class e{constructor(e,t,i,s,o,r,a,n){this.fb=e,this.shared=t,this.router=i,this.menuCtrl=s,this.http=o,this.twitter=r,this.plt=a,this.natHttp=n,this.user={name:"",email:"",social_id:"",social_type:""}}ngOnInit(){}faceLogin(){this.fb.login(["email","public_profile"]).then(e=>{console.error(e),e.authResponse?this.fb.api("/me?fields=email,name,picture.width(720).as(picure_large)&access_token="+e.authResponse.accessToken,null).then(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){this.user.name=e.name,this.user.email=e.email,this.user.social_id=e.id,this.user.profilePic=e.picure_large.data.url,this.user.social_type="facebook",console.log("This is before the Login function "+this.user,e),yield this.shared.presentLoading(),this.Login(this.user).then(e=>{let t=JSON.parse(e.data);console.log("This is the res in login = "+t),this.user.api_token=t.api_token,this.user.created_at=t.created_at,localStorage.setItem("spatulaUser",JSON.stringify(this.user)),this.shared.loadUser(),this.shared.hide(),this.menuCtrl.enable(!0),this.router.navigate(["/home"])},e=>(0,n.__awaiter)(this,void 0,void 0,function*(){this.shared.hide(),console.log(e),this.shared.showErroToast("\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627 \u0628\u0631\u062c\u0627\u0621 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0644\u0627\u062d\u0642\u0627")}))})):console.error("Cannot find the authResponse")}).catch(e=>{console.error("Error is rubbish"),console.error("Error in fb"+JSON.stringify(e)),this.shared.showErroToast("\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627 \u0628\u0631\u062c\u0627\u0621 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0644\u0627\u062d\u0642\u0627")})}insta(){this.router.navigate(["/home"])}twitterLogin(){this.twitter.login().then(e=>{console.log(e),this.shared.TwitterAuth(e).then(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){console.log(e.additionalUserInfo.profile),this.user.name=e.additionalUserInfo.profile.name,this.user.social_id=e.additionalUserInfo.profile.id,this.user.social_type="twitter",this.user.email=e.additionalUserInfo.profile.email,this.user.profilePic=e.additionalUserInfo.profile.profile_image_url_https,yield this.shared.presentLoading(),console.log("okookoook"),this.Login(this.user).then(e=>{let t=JSON.parse(e.data);console.log(t),this.user.api_token=t.api_token,this.user.created_at=t.created_at,localStorage.setItem("spatulaUser",JSON.stringify(this.user)),this.shared.loadUser(),this.shared.hide(),this.menuCtrl.enable(!0),this.router.navigate(["/home"])},e=>{this.shared.hide(),console.log(e),this.shared.showErroToast("\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627 \u0628\u0631\u062c\u0627\u0621 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0644\u0627\u062d\u0642\u0627")}),console.log("You have been successfully logged in!")})).catch(e=>{console.log(e),this.shared.showErroToast("\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627 \u0628\u0631\u062c\u0627\u0621 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0644\u0627\u062d\u0642\u0627")})},e=>{console.log(e)})}Login(e){return new l.WM({"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}),this.natHttp.post(this.shared.base_url+"login",{name:e.name,email:e.email,social_id:e.social_id,social_type:e.social_type},{"Content-Type":"application/json"})}}return e.\u0275fac=function(t){return new(t||e)(h.Y36(c.s),h.Y36(d.F),h.Y36(a.F0),h.Y36(r._q),h.Y36(l.eN),h.Y36(u.U),h.Y36(r.t4),h.Y36(p.t))},e.\u0275cmp=h.Xpm({type:e,selectors:[["app-login"]],decls:14,vars:0,consts:[[1,"login-view"],["src","assets/img/info.png",1,"info-img"],[1,"social-icons"],[3,"click"],["src","assets/img/twitter.png"],["src","assets/img/facebook.png"],[1,"help",3,"click"],["src","assets/img/whatsapp.png"]],template:function(e,t){1&e&&(h.TgZ(0,"div",0),h.TgZ(1,"div"),h._UZ(2,"img",1),h.TgZ(3,"p"),h._uU(4,"\u0644\u062a\u062a\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u062f\u062e\u0648\u0644 \u0627\u0648 \u0627\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628 \u062c\u062f\u064a\u062f \u0639\u0644\u0649 \u0633\u0628\u0627\u062a\u0648\u0644\u0627 \u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0628\u0648\u0627\u0633\u0637\u0629 \u0627\u064a \u0645\u0646 \u0627\u0644\u062d\u0633\u0627\u0628\u0627\u062a \u0627\u0644\u062a\u0627\u0644\u064a\u0629 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0643 "),h.qZA(),h.TgZ(5,"div",2),h.TgZ(6,"div",3),h.NdJ("click",function(){return t.twitterLogin()}),h._UZ(7,"img",4),h.qZA(),h.TgZ(8,"div",3),h.NdJ("click",function(){return t.faceLogin()}),h._UZ(9,"img",5),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.TgZ(10,"div",6),h.NdJ("click",function(){return t.shared.openLink("whats")}),h._UZ(11,"img",7),h.TgZ(12,"p"),h._uU(13,"\u0644\u0644\u0645\u0633\u0627\u0639\u062f\u0629. \u0627\u0636\u063a\u0637\u064a \u0647\u0646\u0627 \u0644\u0644\u062a\u0648\u0627\u0635\u0644 \u0639\u0628\u0631 \u0627\u0644\u0648\u0627\u062a\u0633\u0627\u0628."),h.qZA(),h.qZA())},styles:[""]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h.oAB({type:e}),e.\u0275inj=h.cJS({imports:[[a.Bz.forChild(g)],a.Bz]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h.oAB({type:e}),e.\u0275inj=h.cJS({providers:[c.s],imports:[[s.ez,o.u5,r.Pc,f]]}),e})()}}]);