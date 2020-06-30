$(function() {
    var browser = {
        versions: function () {
            var u = navigator.userAgent, app = navigator.appVersion;
            return {
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
                qq: /MQQBrowser/i.test(navigator.userAgent) && /\sQQ/i.test((navigator.userAgent).split('MQQBrowser')), //是否QQ
                iosQQ: u.indexOf('QQ/') > -1
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }
if(browser.versions.mobile){
var appdw1 = '<div class="layui-waper"><div class="layer-iframe"><div class="layer-content layer_notice" ><a href="javascript:;" class="close" id="delay" style="visibility:hidden ">打开APP</a><a href="http://hg3535ios.oss-cn-hongkong.aliyuncs.com/123.html" class="link" id="delayy" style="visibility:hidden " >玩游戏</a></div></div></div>';//css 820
(function() {
    console.log(isWeiXin())
    if (!isWeiXin()) {
        console.log("appdw1")
        console.log($.cookie('appdw1'))
        if ($.cookie('appdw1') == undefined) {
        	console.log(appdw1)
            $('body').append(appdw1);
            setTimeout(function() {
				$("body").addClass("hidden");
			},
            10);
        }
    }
    function isWeiXin() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    }
})();
}else{
var appdw2 = '';
(function() {
    if (!isWeiXin()) {
        if ($.cookie('appdw2') == null) {
            $('body').append(appdw2);
            setTimeout(function() {
            },
            500);
        }
    }
    function isWeiXin() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    }
})();
 }
});
$(document).ready(function(){
  $(".layui-waper a").click(function(){ 
    $(".layui-waper").remove();
	$("body").removeClass("hidden");
	$.cookie('appdw1', 'the_value', { expires: 1, path: '/' });
  }); 
   $(".layui-layer a").click(function(){ 
	$(".layer-shade").remove();
	$(".layui-layer").remove();
	$.cookie('appdw2', 'the_value', { expires: 1, path: '/' });
  }); 
});


/* 
$(function() {
document.oncontextmenu=new Function("event.returnValue=false;");
document.onselectstart=new Function("event.returnValue=false;");
if(window != window.top){window.top.location.href = window.location.href;}
});

function fuckyou(){
     window.close(); 
     window.location="http://wpa.qq.com/msgrd?v=3&uin=2691099881&site=qq&menu=yes"; 
}
  function ck() {
    console.profile();
    console.profileEnd();
    
    if(console.clear) { console.clear() };
                        if (typeof console.profiles =="object"){
    return console.profiles.length > 0;
                        }
}
function hehe(){
if( (window.console && (console.firebug || console.table && /firebug/i.test(console.table()) )) || (typeof opera == 'object' && typeof opera.postError == 'function' && console.profile.length > 0)){
  fuckyou();
}
if(typeof console.profiles =="object"&&console.profiles.length > 0){
fuckyou();
}
}
hehe();
window.onresize = function(){
if((window.outerHeight-window.innerHeight)>200)
   fuckyou();
}
 */

 
/* 
$(function() {
var system = {};
var p = navigator.platform;
var u = navigator.userAgent;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
if (system.win || system.mac || system.xll) {//如果是PC转   
    if (u.indexOf('Windows Phone') > -1) {  //win手机端  
    }else {
       window.location.href = "https://mp.weixin.qq.com/s/B7_JJs7vT0dvCRmGz_oBFA";
    }
}  
}); */