(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d52abc2"],{"0266":function(t,e,n){},"94d9":function(t,e,n){"use strict";var r=n("0266"),a=n.n(r);a.a},b957:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"study2"},[n("h1",[t._v(t._s(t.title))]),n("section",{staticClass:"study2-ls",domProps:{innerHTML:t._s(t.content)}})])},a=[],s=(n("96cf"),n("3b8d")),i=(n("a481"),n("c0d6")),c="https://jrainlau.com/api/study/articles/detail",o={data:function(){return{href:"",title:"",content:""}},mounted:function(){document.body.querySelector("header").style.display="none",document.title="Study hard";var t=this.$route.query,e=t.href,n=t.title;this.href=e.replace(/^[\/](.*)[\/]$/g,"$1"),this.title=n,this.getDetail()},methods:{getDetail:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])({url:c,method:"post",data:{domain:localStorage.getItem("study_keyword"),href:this.href}}).catch(function(t){return t.response});case 2:e=t.sent,this.content=e.data.replace(/<script.*?>.*?<\/script>/gi,"");case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},u=o,d=(n("94d9"),n("2877")),l=Object(d["a"])(u,r,a,!1,null,"7509643c",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d52abc2.028554a8.js.map