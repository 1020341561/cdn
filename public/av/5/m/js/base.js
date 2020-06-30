function iswq() {
    var a = window.navigator.userAgent.toLowerCase();
    if (a.indexOf("micromessenger") > -1 || a.indexOf("qq/") > -1 || a.indexOf("mqqbrowser") > -1) {
        return true
    } else {
        return false
    }
}
var host = location.host, pathname = location.pathname, search = location.search, aid = "", sid = "", mid = "", isstatic = "", rp0 = "", rp1 = "", iswq = iswq(), backData = '', isSuperPower = '', curhost = '';
if (pathname.indexOf("/movie/") > -1) {
    var patharr = pathname.split("/movie/")[1].split(".html");
    var ids = patharr[0];
    var pathpram = patharr[1];
    if (ids.indexOf("-") > -1) {
        ids = ids.split("-");
        sid = ids[0];
        mid = ids[1]
    } else {
        aid = ids
    }
    !pathpram && (isstatic = 1);
    if (pathpram.indexOf("&play=") > -1) {
        isstatic = 1;
        var rparr = pathpram.split("&play=")[1].split("-");
        rp0 = rparr[0];
        rp1 = parseInt(rparr[1]);
    }
}


if (iswq) {
    //微信或QQ系访问主站，进入中转页
    window.location.href = "/well.html#http://" + host + pathname + search;
} else {
    if (host != "www.haitum.com" && host != "www.dev-haitu.com" && host != "www.dev-movie.com") {
        window.location.href = "http://www.haitum.com" + pathname + search
    }
    function getAjaxData(attach, fun) {
        if (window.ActiveXObject) {
            var xhr = new ActiveXObject("Microsoft.XMLHTTP");
        } else if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        }
        xhr.open("post", "/common/api_getNewHost.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("order=getNewHost&aid=" + aid + "&sid=" + sid + "&mid=" + mid + "&isstatic=" + isstatic + attach);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                backData = JSON.parse(xhr.responseText), isSuperPower = backData.issuperpower, curhost = backData.host;
                fun && fun(backData);
            }
        }
    }
}


var targetMeta = document.getElementById('base');
if (targetMeta) {//有targetData的一定是侵权下架的
    var baseData = JSON.parse(targetMeta.getAttribute('content'));
    if (window.innerWidth > 768 && baseData.ispass == -1 && location.href.indexOf('edit') == -1) {
        window.location.href = '/404.html';
    }
}

function slideNavAutoPosition(a) {
    var m = document.querySelector(a);
    var h = window.innerWidth;
    !m.parentNode.style.width && (m.parentNode.style.width = h <= 768 ? (h - 135) + "px" : "670px");
    var l = m.offsetWidth;
    var e = m.getElementsByClassName("active")[0];
    var j = b();
    if (e && j > l) {
        var f = e.offsetLeft;
        var i = j - e.offsetLeft - e.offsetWidth;
        var k = l / 2;
        if (i < k) {
            m.style.transform = "translate3d(" + -(j - l) + "px,0px,0px)"
        } else {
            if (f >= k) {
                var g = e.offsetWidth;
                var d = f + g / 2;
                var c = d - k;
                m.style.transform = "translate3d(" + -c + "px,0px,0px)"
            }
        }
    }
    function b() {
        var o = 0;
        var p = m.getElementsByClassName("swiper-slide");
        for (var n = 0; n < p.length; n++) {
            o += p[n].offsetWidth
        }
        return o
    }
}