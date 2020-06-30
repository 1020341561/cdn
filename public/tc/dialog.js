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

if (browser.versions.mobile) {//手机端

    document.writeln("<div id=\"cy-dbg\" style=\"position:fixed;z-index:3000;width:100%;height:100%;display:flex;flex-direction: column;align-items:center;justify-content:center;background:rgba(0,0,0,0.5)\">");
    document.writeln("        <div style=\"width:50%;background:#FFFFFF;position:relative;display: flex;flex-direction: column;border-radius: 10px;\">");
    document.writeln("            <div style=\"width:30px;height:30px;border:2px solid #FFFFFF;background:#3F3F3F;border-radius: 50%;position:absolute;right:-15px;top:-15px;z-index: 3001;\"  onclick=\"document.getElementById(\'cy-dbg\').style.display=\'none\';\">");
    document.writeln("                <div style=\"width:100%;border-top:2px solid #FFFFFF;background:#FFFFFF;transform:translateY(14px) rotate(45deg)\"></div>");
    document.writeln("                <div style=\"width:100%;border-top:2px solid #FFFFFF;background:#FFFFFF;transform:translateY(12px) rotate(-45deg)\"></div>");
    document.writeln("            </div>");
    document.writeln("                <a>");
    document.writeln("                    <img src=\"https://p1htmlkernalweb.mybluemix.net/image/aHR0cDovL3d3dy42cGFya25ld3MuY29tL25ld3NwYXJrL3ZpZXcucGhwP2FwcD1uZXdzJmFjdD12aWV3Jm5pZD00MDM3MzI=_aHR0cHM6Ly93ZWIucG9wbzguY29tLzIwMjAwMi8yOS80LzJkODY3ZGYyYWMuanBn\" alt=\"\" style=\"width:100%;height:auto;max-height:50vh;vertical-align:bottom;\">");
    document.writeln("                </a>");
    document.writeln("            <div style=\"display: flex;flex-direction: row;align-items: center;font-size:15px;line-height:40px;text-align:center;border-bottom-right-radius:10px;border-bottom-left-radius: 10px;\">");
    document.writeln("                <div style=\"width:50%;background: cornflowerblue;border-bottom-left-radius: 10px;\" onclick=\"document.getElementById(\'cy-dbg\').style.display=\'none\';\">留在本页</div>");
    document.writeln("                <a style=\"width:50%;background: #d9edf7;border-bottom-right-radius: 10px;text-decoration:none;\" href=\"http://www.baidu.com\">访问中色导航</a>");
    document.writeln("            </div>");
    document.writeln("        </div>");
    document.writeln("    </div>");
}