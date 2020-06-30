
var MAC={
    'Image':{
        'Lazyload':{
            'Show': function(){
                try { $("img.lazy").lazyload(); }catch(e){};
            },
            'Box': function($id){
                $("img.lazy").lazyload({
                    container: $("#"+$id)
                });
            }
        }
    },
}

$(function(){
    //异步加载图片初始化
    MAC.Image.Lazyload.Show();
});
