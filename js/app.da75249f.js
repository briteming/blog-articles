(function(e){function t(t){for(var r,s,o=t[0],c=t[1],u=t[2],l=0,h=[];l<o.length;l++)s=o[l],a[s]&&h.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);m&&m(t);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function s(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-d72b8de6":"c5f29e96"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(e),i=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");s.type=r,s.request=i,n[1](s)}a[e]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var m=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"16d1":function(e,t,n){"use strict";var r=n("681c"),a=n.n(r);a.a},"1b62":function(e,t,n){"use strict";var r=n("3310"),a=n.n(r);a.a},"1c39":function(e,t,n){"use strict";var r=n("7673"),a=n.n(r);a.a},"1ce5":function(e,t,n){"use strict";var r=n("3bbe"),a=n.n(r);a.a},3310:function(e,t,n){},"3bbe":function(e,t,n){},"4c6a":function(e,t,n){"use strict";var r=n("f595"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{userInfo:e.userInfo,showAuth:e.showAuth},on:{"update:showAuth":function(t){e.showAuth=t},"update:show-auth":function(t){e.showAuth=t},signout:e.signout,search:e.search}}),n("main",[n("router-view")],1),n("Auth",{attrs:{showAuth:e.showAuth},on:{"update:showAuth":function(t){e.showAuth=t},"update:show-auth":function(t){e.showAuth=t}}})],1)},i=[],s=(n("96cf"),n("3b8d")),o=n("cebc"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("div",{staticClass:"header"},[r("div",{staticClass:"header-logo"},[r("img",{attrs:{src:n("d9ce")},on:{click:function(t){return e.$router.push("/")}}})]),r("div",{staticClass:"header-tools"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],staticClass:"header-tools-search",attrs:{type:"text",placeholder:"Search"},domProps:{value:e.keyword},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)},input:function(t){t.target.composing||(e.keyword=t.target.value)}}}),e.userInfo.name?r("span",{staticClass:"header-tools-name"},[e._v(e._s(e.userInfo.name))]):e._e(),e.userInfo.avatar_url?r("img",{staticClass:"header-tools-avatar",attrs:{src:e.userInfo.avatar_url,alt:""}}):e._e(),r("i",{staticClass:"fas fa-ellipsis-v header-tools-more show-menu",on:{click:function(t){e.menuOnShow=!e.menuOnShow}}})]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.menuOnShow,expression:"menuOnShow"}],staticClass:"header-menu border"},[r("div",{staticClass:"header-menu-item search"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],staticClass:"show-menu",attrs:{type:"text",placeholder:"Search"},domProps:{value:e.keyword},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)},input:function(t){t.target.composing||(e.keyword=t.target.value)}}})]),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.userInfo.login,expression:"!userInfo.login"}],staticClass:"header-menu-item",attrs:{id:"header-menu-btn"},on:{click:function(t){return e.$emit("update:showAuth",!0)}}},[e._v("\n        Login width Github\n      ")]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.userInfo.login,expression:"userInfo.login"}],staticClass:"header-menu-item signout",on:{click:e.signout}},[r("i",{staticClass:"fas fa-sign-out-alt"}),e._v("\n        Signout\n      ")])])])])},u=[],l={props:["userInfo","showAuth"],data:function(){return{menuOnShow:!1,keyword:""}},mounted:function(){var e=this;window.addEventListener("click",function(t){t.target.classList.contains("show-menu")||(e.menuOnShow=!1)})},methods:{signout:function(){this.$emit("signout")},search:function(){this.$emit("search",this.keyword),this.menuOnShow=!1,this.keyword=""}}},m=l,h=(n("1b62"),n("2877")),d=Object(h["a"])(m,c,u,!1,null,"110af726",null),f=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.showAuth?n("div",{staticClass:"auth mask",on:{click:e.hideAuth}},[n("div",{staticClass:"auth-box border"},[n("h3",{staticClass:"auth-box-title"},[e._v("\n      Auth\n    ")]),"token"===e.authMode?n("div",{staticClass:"auth-box-token input-area"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.token,expression:"token"}],attrs:{placeholder:"Github access token",type:"text"},domProps:{value:e.token},on:{input:function(t){t.target.composing||(e.token=t.target.value)}}}),n("i",{staticClass:"far fa-question-circle",on:{click:e.pageJump}})]):e._e(),"account"===e.authMode?n("div",{staticClass:"auth-box-account input-area"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],attrs:{placeholder:"Github account",type:"text"},domProps:{value:e.account},on:{input:function(t){t.target.composing||(e.account=t.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"Github password",type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]):e._e(),n("div",{staticClass:"auth-box-submit"},[n("span",{on:{click:e.changeAuthMode}},[e._v("Use Github "+e._s("token"===e.authMode?"account":"access token")+" to auth")]),n("button",{staticClass:"button",attrs:{disabled:!e.disableAuthBtn},on:{click:e.submitAuth}},[e._v("Submit")])])])]):e._e()},v=[],b=n("3d20"),g=n.n(b),w=n("2f62"),k={props:["showAuth"],data:function(){return{authMode:"token",token:"",account:"",password:""}},computed:{disableAuthBtn:function(){var e=!1;return e="token"===this.authMode?!!this.token.length:!!this.account.length&&!!this.password.length,e}},methods:Object(o["a"])({},Object(w["b"])(["getUserInfo"]),{hideAuth:function(e){e.target.classList.contains("mask")&&this.$emit("update:showAuth",!1)},pageJump:function(){window.open("https://github.com/settings/tokens/new")},changeAuthMode:function(){var e=this.authMode;this.authMode="token"===e?"account":"token"},submitAuth:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,n,r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t="",t="token"===this.authMode?"Bearer ".concat(this.token):"Basic ".concat(btoa(this.account+":"+this.password)),e.next=4,this.getUserInfo(t);case 4:n=e.sent,r=n.status,a=n.data,401===r?(g.a.fire({title:r,text:a.message,type:"error"}),this.token="",this.account="",this.password=""):(this.$emit("update:showAuth",!1),localStorage.setItem("github_token",t),location.reload());case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()})},_=k,C=(n("1ce5"),Object(h["a"])(_,p,v,!1,null,"360fd69e",null)),y=C.exports,A={data:function(){return{showAuth:!1}},computed:Object(o["a"])({},Object(w["e"])(["userInfo"])),components:{Header:f,Auth:y},created:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,n,r,a,i=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getArticles();case 2:t=e.sent,n=t.status,r=t.message,n&&g.a.fire({type:"error",title:n,text:r,confirmButtonText:"To auth"}).then(function(e){e.value&&(i.showAuth=!0)}),a=localStorage.getItem("github_token"),a&&this.getUserInfo(a);case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:Object(o["a"])({},Object(w["b"])(["getArticles","getUserInfo"]),Object(w["d"])(["GET_USER_INFO","UPDATE_KEYWORD"]),{signout:function(){localStorage.removeItem("github_token"),this["GET_USER_INFO"]({})},search:function(e){this.$router.push("/"),this["UPDATE_KEYWORD"](e)}})},x=A,O=(n("7c55"),Object(h["a"])(x,a,i,!1,null,null,null)),R=O.exports,L=(n("7f7f"),n("8c4f")),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view main",staticStyle:{display:"flex"}},[n("section",{staticClass:"main-others"},[n("Timeline",{attrs:{timeline:e.timeline},on:{toArticle:e.toArticle}}),n("Labels",{ref:"labels",attrs:{labels:e.labels},on:{selectLabel:e.selectLabel}}),n("About")],1),n("div",{staticClass:"main-articles"},[e.articlesList.length?e._e():n("Skeleton",{attrs:{type:"preview"}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.keyword,expression:"keyword"}],staticClass:"main-articles-keyword border"},[n("i",{staticClass:"far fa-times-circle cancel",on:{click:function(t){return e.UPDATE_KEYWORD("")}}}),n("div",{staticClass:"keyword"},[e._v("\n        Keyword:\n        "),n("i",[e._v('"'+e._s(e.keyword)+'"')]),e._v("\n        .\n      ")]),n("div",{staticClass:"result"},[n("span",[e._v(e._s(e.articles.length))]),e._v("\n        results was found.\n      ")])]),e._l(e.articlesList,function(t,r){return n("Preview",{key:r,attrs:{article:t,userInfo:e.userInfo},on:{toArticle:e.toArticle,like:e.likeArticle,praise:e.praiseArticle,toComment:e.toComment}})}),n("About",{staticClass:"mobile-only"})],2)])},E=[],I=(n("6762"),n("2fdb"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preview border"},[n("div",{staticClass:"preview-cover",on:{click:e.toArticle}},[n("img",{staticClass:"preview-cover-img",attrs:{src:e.article.cover,alt:""}}),n("h3",{staticClass:"preview-cover-title"},[e._v(e._s(e.article.title))])]),n("div",{staticClass:"preview-info"},[n("span",{staticClass:"preview-info-date"},[n("i",{staticClass:"far fa-clock"}),e._v("\n      "+e._s(e.article.date)+"\n    ")]),e._l(e.article.labels,function(t){return n("span",{key:t.name,staticClass:"preview-info-label",style:"background: #"+t.color},[e._v("\n      "+e._s(t.name)+"\n    ")])})],2),n("div",{staticClass:"preview-content",domProps:{innerHTML:e._s(e.articlePreview)}}),n("div",{staticClass:"preview-tools"},[n("i",{staticClass:"far fa-thumbs-up",class:{"fas praised":e.hasPraised.length},on:{click:function(t){return e.$emit("praise",{number:e.article.number,hasPraised:e.hasPraised})}}}),e._v("\n    "+e._s(e.article.reactions.praise.length)+"\n    "),n("i",{staticClass:"far fa-heart",class:{"fas liked":e.hasLiked.length},on:{click:function(t){return e.$emit("like",{number:e.article.number,hasLiked:e.hasLiked})}}}),e._v("\n    "+e._s(e.article.reactions.like.length)+"\n    "),n("i",{staticClass:"far fa-comment-dots",on:{click:function(t){return e.$emit("toComment",e.article.number)}}}),e._v("\n    "+e._s(e.article.commentsAmount)+"\n  ")])])}),S=[],T=(n("4917"),n("a481"),n("0e54")),P=n.n(T),U=n("1487"),$=n.n(U);P.a.setOptions({highlight:function(e,t){var n=e;return t&&(n=$.a.highlight(t,e).value),n},sanitize:!0});var N={props:["article","userInfo"],computed:{articlePreview:function(){var e=this.article.content.replace(/!\[.+?\]\(.+?\)/,"");return P()(e).match(/<p>(.*?)<\/p>/)[1]},hasLiked:function(){var e=this;return this.article.reactions.like.filter(function(t){var n=t.user;return n.login===e.userInfo.login})},hasPraised:function(){var e=this;return this.article.reactions.praise.filter(function(t){var n=t.user;return n.login===e.userInfo.login})}},methods:{toArticle:function(){this.$emit("toArticle",this.article.number)}}},M=N,D=(n("1c39"),Object(h["a"])(M,I,S,!1,null,"73456817",null)),q=D.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"timeline border"},[n("h3",{staticClass:"timeline-title"},[e._v("Timeline")]),e._l(Object.keys(e.timeline),function(t,r){return n("div",{key:r,staticClass:"timeline-item"},[n("div",{staticClass:"timeline-item-date",on:{click:function(n){return e.showDetail(t)}}},[e._v(e._s(t)+" ("+e._s(e.timeline[t].length)+")")]),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.onShowTime===t||0===r,expression:"onShowTime === time || i === 0"}],staticClass:"timeline-item-day"},e._l(e.timeline[t],function(t,r){return n("li",{key:r,staticClass:"article",on:{click:function(n){return e.$emit("toArticle",t.number)}}},[e._v(e._s(t.title))])}),0)])})],2)},F=[],B={props:["timeline"],data:function(){return{onShowTime:""}},methods:{showDetail:function(e){this.onShowTime===e?this.onShowTime="":this.onShowTime=e}}},K=B,Q=(n("8e2a"),Object(h["a"])(K,G,F,!1,null,"bea22d48",null)),z=Q.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"labels border"},[n("h3",{staticClass:"labels-title"},[e._v("\n    Labels\n    "),e.selectedLabel?n("span",{staticClass:"label",style:"background: #"+e.selectedLabel.color+";",on:{click:function(t){return e.selectLabel(!1)}}},[e._v(e._s(e.selectedLabel.name))]):e._e()]),n("div",{staticClass:"labels-list"},e._l(Object.keys(e.labels),function(t){return n("span",{directives:[{name:"show",rawName:"v-show",value:!e.selectedLabel||e.selectedLabel.name!==t,expression:"!selectedLabel || selectedLabel.name !== label"}],key:t,staticClass:"label",style:"\n        background: #"+e.labels[t].color+";\n      ",on:{click:function(n){return e.selectLabel(e.labels[t])}}},[e._v(e._s(t))])}),0)])},J=[],W={props:["labels"],data:function(){return{selectedLabel:null}},watch:{selectedLabel:function(e){this.$emit("selectLabel",e?e.name:"")}},methods:{selectLabel:function(e){this.selectedLabel=e||null},reset:function(){this.selectedLabel=null}}},Y=W,V=(n("d6a8"),Object(h["a"])(Y,H,J,!1,null,"5657cadf",null)),X=V.exports,Z=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ee=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("section",{staticClass:"about-contact"},[n("a",{attrs:{href:"https://github.com/jrainlau"}},[e._v("Github")]),e._v("\n    ·\n    "),n("a",{attrs:{href:"mailto:jrainlau@gmail.com"}},[e._v("Email")]),e._v("\n    ·\n    "),n("a",{attrs:{href:"https://www.instagram.com/jrainlau/"}},[e._v("Instagram")]),e._v("\n    ·\n    懶得備案\n  ")]),n("section",{staticClass:"about-right"},[e._v("\n    © 2019 JRAIN LAU\n  ")])])}],te=(n("9361"),{}),ne=Object(h["a"])(te,Z,ee,!1,null,"8c8fa5b4",null),re=ne.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"skeleton"},["article"===e.type?n("div",{staticClass:"skeleton-article"},[n("h1"),e._l(2,function(e){return n("span",{key:"span"+e})}),e._l(20,function(e){return n("p",{key:"p"+e})})],2):e._e(),"preview"===e.type?n("div",{staticClass:"skeleton-preview"},e._l(4,function(t){return n("section",{key:"preview"+t,staticClass:"border"},[n("div"),n("span"),e._l(2,function(e){return n("p",{key:"p"+e})})],2)}),0):e._e()])},ie=[],se={props:["type"]},oe=se,ce=(n("8c0c"),Object(h["a"])(oe,ae,ie,!1,null,"aed8f44e",null)),ue=ce.exports,le={components:{Preview:q,Timeline:z,Labels:X,About:re,Skeleton:ue},data:function(){return{labelFilterKeyword:""}},computed:Object(o["a"])({},Object(w["e"])(["keyword","userInfo"]),Object(w["c"])(["timeline","labels","articles"]),{articlesList:function(){var e=this,t=this.articles;return this.labelFilterKeyword&&(t=this.articles.filter(function(t){return t.labels.map(function(e){var t=e.name;return t}).includes(e.labelFilterKeyword)})),t}}),watch:{keyword:function(e){e&&this.$refs["labels"].reset()}},methods:Object(o["a"])({},Object(w["d"])(["UPDATE_KEYWORD"]),Object(w["b"])(["deleteAnReaction","createAnReaction"]),{toArticle:function(e){this.$router.push("/article?number="+e)},toComment:function(e){this.$router.push("/article?number="+e+"&comment=true")},selectLabel:function(e){this.labelFilterKeyword=e},checkLogin:function(){var e=!1;return this.userInfo.login?e=!0:document.querySelector("#header-menu-btn").click(),e},likeArticle:function(e){var t=e.number,n=e.hasLiked;if(!this.checkLogin())return!1;if(n.length){var r=n[0].id;this.deleteAnReaction({number:t,id:r})}else this.createAnReaction({number:t,content:"heart"})},praiseArticle:function(e){var t=e.number,n=e.hasPraised;if(!this.checkLogin())return!1;if(n.length){var r=n[0].id;this.deleteAnReaction({number:t,id:r})}else this.createAnReaction({number:t,content:"+1"})}})},me=le,he=(n("16d1"),Object(h["a"])(me,j,E,!1,null,"c4d4ec54",null)),de=he.exports,fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view"},[e.article?e._e():n("Skeleton",{attrs:{type:"article"}}),e.article?n("div",{staticClass:"article"},[n("section",{staticClass:"article-title"},[n("h1",[e._v(e._s(e.article.title))]),n("div",[n("i",{staticClass:"fas fa-feather-alt"}),n("span",[e._v(e._s(e.article.date))]),e._l(e.article.labels,function(t,r){return n("span",{key:r,staticClass:"label",style:"background: #"+t.color},[e._v(e._s(t.name))])})],2)]),n("section",{staticClass:"article-content markdown",domProps:{innerHTML:e._s(e.$options.filters.markify(e.article.content))}}),n("section",{staticClass:"article-comments"},[n("div",{staticClass:"article-comments-reactions border"},[n("i",{staticClass:"far fa-thumbs-up",class:{"fas praised":e.hasPraised.length},on:{click:e.praiseArticle}}),e._v("\n        "+e._s(e.article.reactions.praise.length)+"\n        "),n("i",{staticClass:"far fa-heart",class:{"fas liked":e.hasLiked.length},on:{click:e.likeArticle}}),e._v("\n        "+e._s(e.article.reactions.like.length)+"\n        "),n("div",{staticClass:"tools"},[n("i",{staticClass:"fas fa-qrcode qrcode",on:{click:e.showQR}}),n("i",{staticClass:"far fa-copy",on:{click:e.copyUrl}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.QR,expression:"QR"}],staticClass:"tools-qr border"},[n("img",{attrs:{src:e.QR,alt:""}})])])]),n("Comments",{attrs:{article:e.article,userInfo:e.userInfo}}),n("About")],1)]):e._e(),n("input",{ref:"pageUrl",staticStyle:{position:"absolute",opacity:"0",top:"0","z-index":"-9999"},attrs:{type:"text",id:"page-url"},domProps:{value:e.pageUrl}})],1)},pe=[],ve=(n("c5f6"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"comments"},[e.isLogin?e._e():n("div",{staticClass:"comments-auth border"},[n("button",{on:{click:e.toLogin}},[e._v("Login with Github to comment")])]),e.isLogin?n("div",{staticClass:"comments-operation border"},[n("div",{staticClass:"comments-operation-user"},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:e.userInfo.avatar_url,alt:""}})]),n("div",{staticClass:"name"},[e._v(e._s(e.userInfo.login))])]),n("div",{staticClass:"comments-operation-textarea"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.commentContent,expression:"commentContent"}],staticClass:"border",attrs:{rows:"5"},domProps:{value:e.commentContent},on:{input:function(t){t.target.composing||(e.commentContent=t.target.value)}}})]),n("div",{staticClass:"comments-operation-button"},[n("button",{attrs:{disabled:!e.commentContent.length},on:{click:e.submitComment}},[e._v("Comment")])])]):e._e(),e.article.comments&&e.article.comments.length?n("div",{staticClass:"comments-list border"},e._l(e.article.comments,function(t,r){return n("div",{key:r,staticClass:"comments-list-item"},[n("div",{staticClass:"user"},[n("a",{staticClass:"user-avatar",attrs:{href:t.user.html_url,target:"_blank"}},[n("img",{attrs:{src:t.user.avatar_url,alt:""}})]),n("div",{staticClass:"user-info"},[n("p",{staticClass:"user-info-name"},[e._v(e._s(t.user.login))]),n("p",{staticClass:"user-info-date"},[e._v(e._s(e._f("dateFormat")(t.created_at)))])])]),n("div",{staticClass:"content markdown",domProps:{innerHTML:e._s(e.$options.filters.markify(t.body))}})])}),0):e._e()])}),be=[];P.a.setOptions({highlight:function(e,t){var n=e;return t&&(n=$.a.highlight(t,e).value),n},sanitize:!0});var ge={props:["article","userInfo"],filters:{dateFormat:function(e){var t=new Date(e),n=t.toLocaleDateString("zh").replace(/\//g,"-"),r=t.getHours(),a=t.getMinutes(),i=r<10?"0"+r:r,s=a<10?"0"+a:a;return"".concat(n," ").concat(i,":").concat(s)},markify:function(e){return P()(e)}},data:function(){return{isLogin:!1,commentContent:"",showCommentList:!1}},mounted:function(){this.checkIsLogin()},watch:{userInfo:{deep:!0,handler:function(e){this.checkIsLogin()}}},methods:Object(o["a"])({},Object(w["b"])(["getUserInfo","getComments","createComment","deleteComment"]),{checkIsLogin:function(){this.isLogin=!!this.userInfo.login},toLogin:function(){document.querySelector("#header-menu-btn").click()},submitComment:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,n,r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.commentContent,this.commentContent="",e.next=4,this.createComment({commentsUrl:this.article.commentsUrl,comment:t});case 4:if(n=e.sent,r=n.status,!(r<400)){e.next=14;break}return e.next=9,this.getComments(this.article.commentsUrl);case 9:a=document.querySelector(".view"),a.scrollTop=a.scrollHeight,g.a.fire({toast:!0,title:"Commet successed!",type:"success",showConfirmButton:!1,timer:2e3}),e.next=15;break;case 14:g.a.fire({toast:!0,title:"Commet failed!",type:"error",showConfirmButton:!1,timer:2e3});case 15:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()})},we=ge,ke=(n("d024"),Object(h["a"])(we,ve,be,!1,null,"d21bacea",null)),_e=ke.exports,Ce=new P.a.Renderer;Ce.link=function(e,t,n){return'<a target="_blank" href="'.concat(e,'" title="').concat(t,'">').concat(n,"</a>")},P.a.setOptions({highlight:function(e,t){var n=e;return t&&(n=$.a.highlight(t,e).value),n},sanitize:!0});var ye={components:{Comments:_e,About:re,Skeleton:ue},filters:{markify:function(e){return P()(e,{renderer:Ce})}},data:function(){return{QR:""}},computed:Object(o["a"])({},Object(w["e"])(["articles","userInfo"]),{article:function(){var e=Number(this.$route.query.number);return this.articles.filter(function(t){var n=t.number;return n===e})[0]},hasLiked:function(){var e=this;return this.article.reactions.like.filter(function(t){var n=t.user;return n.login===e.userInfo.login})},hasPraised:function(){var e=this;return this.article.reactions.praise.filter(function(t){var n=t.user;return n.login===e.userInfo.login})},pageUrl:function(){return location.href}}),mounted:function(){this.getArticleComments()},beforeRouteEnter:function(e,t,n){n(function(){if(e.query.comment){var t=document.querySelector(".view");t.scrollTop=t.scrollHeight}})},watch:{article:function(e){this.getArticleComments()}},methods:Object(o["a"])({},Object(w["b"])(["getComments","deleteAnReaction","createAnReaction"]),{getArticleComments:function(){if(this.article){var e=this.article.commentsUrl;this.getComments(e)}},checkLogin:function(){var e=!1;return this.userInfo.login?e=!0:document.querySelector("#header-menu-btn").click(),e},likeArticle:function(){if(this.checkLogin())if(this.hasLiked.length){var e=this.hasLiked[0].id;this.deleteAnReaction({number:this.article.number,id:e})}else this.createAnReaction({number:this.article.number,content:"heart"})},praiseArticle:function(){if(this.checkLogin())if(this.hasPraised.length){var e=this.hasPraised[0].id;this.deleteAnReaction({number:this.article.number,id:e})}else this.createAnReaction({number:this.article.number,content:"+1"})},showQR:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r,a,i=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e("chunk-d72b8de6").then(n.t.bind(null,"d055",7));case 2:return t=e.sent,e.next=5,t.toDataURL(this.pageUrl);case 5:r=e.sent,this.QR?this.QR="":this.QR=r,a=function e(t){t.target.classList.contains("qrcode")||(i.QR="",document.body.removeEventListener("click",e))},document.body.addEventListener("click",a);case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),copyUrl:function(){this.$refs["pageUrl"].select(),document.execCommand("copy"),g.a.fire({toast:!0,title:"Article url has been copied to your clipboard",type:"success",showConfirmButton:!1,timer:2e3})}})},Ae=ye,xe=(n("4c6a"),Object(h["a"])(Ae,fe,pe,!1,null,"0a7e70b4",null)),Oe=xe.exports;r["a"].use(L["a"]);var Re=new L["a"]({routes:[{path:"/",name:"",component:de},{path:"/article",name:"Article",component:Oe}]});Re.afterEach(function(e,t){var n=document.querySelector("main");document.title=e.name?"JRAIN:BLOG | ".concat(e.name):"JRAIN:BLOG",n&&n.scroll(0,0)});var Le=Re,je=(n("5df3"),n("3b2b"),n("ac6a"),n("bc3a")),Ee=n.n(je),Ie="https://api.github.com",Se="".concat(Ie,"/repos/jrainlau/jrainlau.github.io"),Te=function(e){var t=e.url,n=e.method,r=void 0===n?"get":n,a=e.data,i=e.headers,s=void 0===i?{}:i;return Ee()({url:t,method:r,data:a,headers:Object(o["a"])({Authorization:localStorage.getItem("github_token")},s)}).then(function(e){var t=e.status,n=e.data;return{status:t,data:n}}).catch(function(e){var t=e.response;return{status:t.status,data:t.data}})};r["a"].use(w["a"]);var Pe=new w["a"].Store({state:{articles:[],userInfo:{},keyword:""},getters:{timeline:function(e){var t=e.articles,n={};return t.forEach(function(e){var t=e.date.replace(/-\d{2}$/,"");n[t]||(n[t]=[]),n[t].push(e)}),n},labels:function(e){var t=e.articles,n={};return t.forEach(function(e){e.labels.forEach(function(e){n[e.name]||(n[e.name]={}),n[e.name]={color:e.color,name:e.name}})}),n},articles:function(e){var t=e.articles,n=e.keyword,r=t;if(n){var a=new RegExp(n,"i");r=t.filter(function(e){return a.test(e.title)})}return r}},mutations:{GET_ARTICLES:function(e,t){e.articles=t},GET_USER_INFO:function(e,t){r["a"].set(e,"userInfo",t)},GET_COMMENTS:function(e,t){var n=t.commentsUrl,a=t.comments;e.articles.forEach(function(e){e.commentsUrl===n&&r["a"].set(e,"comments",a)})},UPDATE_KEYWORD:function(e,t){e.keyword=t},UPDATE_REACTIONS:function(e,t){var n=t.reactions,a=t.number;e.articles.forEach(function(e){e.number===a&&r["a"].set(e,"reactions",{like:n.filter(function(e){return"heart"===e.content}),praise:n.filter(function(e){return"+1"===e.content})})})}},actions:{getArticles:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,i,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.dispatch,e.next=3,Te({url:"".concat(Se,"/issues?filter=created")}).catch(function(e){return e});case 3:if(a=e.sent,i=a.status,o=a.data,!(i<400)){e.next=14;break}return e.next=9,Promise.all(o.map(function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,a,i,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.body.match(/!\[.+?\]\((.+?[^)]*)\)/),e.next=3,r("getReactions",{number:t.number,autoCommit:!1});case 3:return a=e.sent,i=a.data,s={title:t.title,content:t.body,cover:n?n[1]:null,number:t.number,date:new Date(t.created_at).toLocaleDateString("zh").replace(/\//g,"-"),labels:t.labels,commentsUrl:t.comments_url,commentsAmount:t.comments,reactions:{like:i.filter(function(e){return"heart"===e.content}),praise:i.filter(function(e){return"+1"===e.content})}},e.abrupt("return",Promise.resolve(s));case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()));case 9:return c=e.sent,n("GET_ARTICLES",c),e.abrupt("return",!0);case 14:return e.abrupt("return",{status:i,message:o.message});case 15:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),getUserInfo:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,Te({url:"".concat(Ie,"/user"),headers:{Authorization:n}});case 3:return a=e.sent,i=a.status,s=a.data,i<400&&r("GET_USER_INFO",s),e.abrupt("return",{status:i,data:s});case 8:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),getComments:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,Te({url:n});case 3:return a=e.sent,r("GET_COMMENTS",{commentsUrl:n,comments:a.data}),e.abrupt("return",a);case 6:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),createComment:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,r=n.commentsUrl,a=n.comment,e.next=4,Te({url:r,method:"post",data:{body:a}});case 4:return i=e.sent,e.abrupt("return",i);case 6:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),getReactions:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=n.number,i=n.autoCommit,e.next=4,Te({url:"".concat(Se,"/issues/").concat(a,"/reactions"),headers:{Accept:"application/vnd.github.squirrel-girl-preview+json"}}).catch(function(e){return e});case 4:return s=e.sent,i&&r("UPDATE_REACTIONS",{reactions:s.data,number:a}),e.abrupt("return",s);case 7:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),createAnReaction:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.dispatch,a=n.number,i=n.content,e.next=4,Te({method:"post",url:"".concat(Se,"/issues/").concat(a,"/reactions"),data:{content:i},headers:{Accept:"application/vnd.github.squirrel-girl-preview+json"}}).catch(function(e){return e});case 4:r("getReactions",{number:a,autoCommit:!0});case 5:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),deleteAnReaction:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.dispatch,a=n.number,i=n.id,e.next=4,Te({method:"delete",url:"".concat(Ie,"/reactions/").concat(i),headers:{Accept:"application/vnd.github.squirrel-girl-preview+json"}}).catch(function(e){return e});case 4:r("getReactions",{number:a,autoCommit:!0});case 5:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()}}),Ue=n("9483");Object(Ue["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("becf"),n("2c43"),n("cb74"),n("6423");r["a"].config.productionTip=!1,new r["a"]({router:Le,store:Pe,render:function(e){return e(R)}}).$mount("#app")},"5aac":function(e,t,n){},"5c48":function(e,t,n){},6423:function(e,t,n){},"681c":function(e,t,n){},7673:function(e,t,n){},"7c55":function(e,t,n){"use strict";var r=n("5c48"),a=n.n(r);a.a},"8c0c":function(e,t,n){"use strict";var r=n("5aac"),a=n.n(r);a.a},"8e2a":function(e,t,n){"use strict";var r=n("e0d0"),a=n.n(r);a.a},9361:function(e,t,n){"use strict";var r=n("d75f"),a=n.n(r);a.a},aa76:function(e,t,n){},ba02:function(e,t,n){},cb74:function(e,t,n){},d024:function(e,t,n){"use strict";var r=n("aa76"),a=n.n(r);a.a},d6a8:function(e,t,n){"use strict";var r=n("ba02"),a=n.n(r);a.a},d75f:function(e,t,n){},d9ce:function(e,t,n){e.exports=n.p+"img/logo-h.85ae145a.png"},e0d0:function(e,t,n){},f595:function(e,t,n){}});
//# sourceMappingURL=app.da75249f.js.map