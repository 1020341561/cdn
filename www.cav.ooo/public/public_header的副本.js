// 添加样式
document.write("<style>.public-header {background-color: #ff5a5e;position: fixed;top: 0;left: 0;width: 100%;z-index: 100;}.public-header-inner {max-width: 1200px;height: 60px;display: flex;margin: 0 auto;justify-content: center;}.public-logo-link,.public-header-link {padding: 0;margin: 0;text-decoration: none;}.public-header-logo {padding: 5px 10px;width: auto;height: 50px;overflow: hidden;}.public-header-logo img {width: auto;height: 100%;}.public-header-list {display: flex;align-items: center;padding: 0 10px;color: #fff;cursor: pointer;height: 100%;}.public-header-list:hover {color: #000;background-color: #fff;}.public-header-list .iconBox {background-repeat: no-repeat;width: 30px;height: 25px;}.public-header-list .text {margin-left: 5px;}@media (max-width: 767px) {.public-visible-xs {display: block;}.public-hidden-xs {display: none;}.public-header {font-size: 12px;}.public-header-link {flex: 1;}.public-header-list {padding: 0;display: flex;justify-content: center;}.public-header-list .text {margin-left: 0;}}</style>")
// 添加元素
function addHeader() {
  $("body").prepend('<div class="public-header"><div class="public-header-inner"><a class="public-header-link" href="https://www.cav.ooo/?public_header"><div class="public-header-list"><div class="iconBox home public-hidden-xs"></div><div class="text">色情网站导航</div></div></a><a class="public-header-link" href="https://app.cav.ooo/?public_header"><div class="public-header-list"><div class="iconBox public-hidden-xs"></div><div class="text">免费成人APP</div></div></a><a class="public-header-link" href="https://www.dytt.xyz/?public_header"><div class="public-header-list"><div class="iconBox public-hidden-xs"></div><div class="text">电影天堂</div></div></a><a class="public-header-link" href="https://www.xxlive.top/?public_header"><div class="public-header-list"><div class="iconBox public-hidden-xs"></div><div class="text">日本AV</div></div></a></div></div>');
}
// 初始化界面元素
function init(){
  var baseUrl="https://web-cli.oss-cn-hongkong.aliyuncs.com/public_header/"; // 图片的baseUrl
  var _logo=$('<img src="'+baseUrl+'img/logo.png" />'); // logo
  var v ="123456789"; // 前端变量
  $('.public-header .logo').append(_logo); // 把logo添加进指定元素
  $('.public-header-list:eq(0) .iconBox').css({'backgroundImage':'url('+baseUrl+'img/sprite.png?v='+v+')',"background-position": "-156px -21px"}); // 聚色阁
  $('.public-header-list:eq(1) .iconBox').css({'backgroundImage':'url('+baseUrl+'img/sprite.png?v='+v+')',"background-position": "-15px -21px"}); // 千禾影院
  $('.public-header-list:eq(2) .iconBox').css({'backgroundImage':'url('+baseUrl+'img/sprite.png?v='+v+')',"background-position": "-130px -21px"}); // 我爱小说
  $('.public-header-list:eq(3) .iconBox').css({'backgroundImage':'url('+baseUrl+'img/sprite.png?v='+v+')',"background-position": "-100px -21px"}); // 极乐空间
  $('.public-header-list:eq(4) .iconBox').css({'backgroundImage':'url('+baseUrl+'img/sprite.png?v='+v+')',"background-position": "-75px -21px"}); // 美女图
  $('.public-header-list:eq(5) .iconBox').css({'backgroundImage':'url('+baseUrl+'img/sprite.png?v='+v+')',"background-position": "-45px -21px"}); // 番号大全
  // 聚色阁鼠标移入样式
  $('.public-header-list:eq(0)').hover(function() {
    $(this).find(".iconBox").css("background-position", "-156px -52px");
  },function(){
    $(this).find(".iconBox").css("background-position", "-156px -21px");
  })
  // 千禾影院鼠标移入样式
  $('.public-header-list:eq(1)').hover(function() {
    $(this).find(".iconBox").css("background-position", "-15px -52px");
  },function(){
    $(this).find(".iconBox").css("background-position", "-15px -21px");
  })
  // 我爱小说鼠标移入样式
  $('.public-header-list:eq(2)').hover(function() {
    $(this).find(".iconBox").css("background-position", "-130px -52px");
  },function(){
    $(this).find(".iconBox").css("background-position", "-130px -21px");
  })
  // 极乐空间鼠标移入样式
  $('.public-header-list:eq(3)').hover(function() {
    $(this).find(".iconBox").css("background-position", "-100px -52px");
  },function(){
    $(this).find(".iconBox").css("background-position", "-100px -21px");
  })
  // 美女图鼠标移入样式
  $('.public-header-list:eq(4)').hover(function() {
    $(this).find(".iconBox").css("background-position", "-75px -52px");
  },function(){
    $(this).find(".iconBox").css("background-position", "-75px -21px");
  })
  // 番号大全鼠标移入样式
  $('.public-header-list:eq(5)').hover(function() {
    $(this).find(".iconBox").css("background-position", "-45px -52px");
  },function(){
    $(this).find(".iconBox").css("background-position", "-45px -21px");
  })
};
// 静态
$(function(){
  // 添加元素
  addHeader();
  // 初始化元素
  init();
  // 设置body全局样式
  $("body").css({"height": "auto", "margin-top": "60px","-webkit-overflow-scrolling": "auto"});
});