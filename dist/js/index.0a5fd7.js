(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6cwl":function(o,n,t){},e6Wu:function(o,n,t){"use strict";t.r(n);t("6cwl");var e=t("r7DH"),c=t.n(e);var l=t("Eik3"),a=function(o){console.log(o),console.log(l.a),console.log(l.b)};var s={sendLog:function(){return console.log("sent log..."),"Yes!"}};console.log("PRODUCTION",!0);var i={url1:"https://api.eastday.com/url1",url2:"https://api.eastday.com/url2"};var u={Log:s,Data:{getData:function(){return i}}},r=c()("#clickme"),d=c()("#txt");r.addClass("test"),r.on("click",function(){"none"!==d.css("display")?(d.hide(),a("txt is hide!")):(d.show(),a("txt is hide!"))});var p=c()("#J_input"),g=c()("#J_result"),w=c()("#J_square"),f=c()("#J_cube");w.on("click",function(){g.text(function(o){return Math.pow(o,2)}(p.val()))}),f.on("click",function(){g.text(function(o){return Math.pow(o,3)}(p.val()))}),console.log("==================检查环境===================="),console.log("环境不同，结果不同：",u.Data.getData()),console.log("===================检查日志==================="),console.log("发送日志了吗？",u.Log.sendLog());var h=document.createElement("article");h.innerHTML='<p class="dynamic">我是通过js动态添加的。。。</p>',document.body.appendChild(h)}},[["e6Wu",2,1]]]);
//# sourceMappingURL=index.0a5fd7.js.map