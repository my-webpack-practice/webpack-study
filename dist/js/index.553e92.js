(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6cwl":function(o,n,t){},e6Wu:function(o,n,t){"use strict";t.r(n);t("uezs"),t("6cwl");var e=t("r7DH"),c=t.n(e);var l=t("Eik3"),s=function(o){console.log(o),console.log(l.c),console.log(l.a),console.log(l.b)};var a={sendLog:function(){return console.log("sent log..."),"Yes!"}};console.log("PRODUCTION",!0);var i={url1:"https://api.eastday.com/url1",url2:"https://api.eastday.com/url2"};var u={Log:a,Data:{getData:function(){return i}}},r=c()("#clickme"),d=c()("#txt");r.addClass("test"),r.on("click",function(){"none"!==d.css("display")?(d.hide(),s("txt is hide!")):(d.show(),s("txt is hide!"))});var g=c()("#J_input"),p=c()("#J_result"),w=c()("#J_square"),f=c()("#J_cube");w.on("click",function(){p.text(function(o){return Math.pow(o,2)}(g.val()))}),f.on("click",function(){p.text(function(o){return Math.pow(o,3)}(g.val()))}),console.log("==================检查环境===================="),console.log("环境不同，结果不同：",u.Data.getData()),console.log("===================检查日志==================="),console.log("发送日志了吗？",u.Log.sendLog());var h=document.createElement("article");h.innerHTML='<p class="dynamic">我是通过js动态添加的。。。</p>',document.body.appendChild(h)}},[["e6Wu",2,1]]]);
//# sourceMappingURL=index.553e92.js.map