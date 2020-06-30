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
} else {

}