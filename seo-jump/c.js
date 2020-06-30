var refer = document.referrer;

if(refer){
  //有refer
  layer.ready(function(){ 
    layer.open({
      type: 1
      ,title: false //不显示标题栏
      ,closeBtn: 1
      ,area: '300px;'
      ,shade: 0.8
      ,id: 'bc' //设定一个id，防止重复弹出
      ,resize: false
      ,btn: ['马上投注赚钱', '继续闷骚看片']
      ,btnAlign: 'c'
      ,moveType: 0 //拖拽模式，0或者1
      ,content: '<div style="padding: 20px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 12px;">🏆百家体育和彩票！<br>💰信誉实力最重要！<br>⚽欧冠赛程进行中..<br>📺比央视直播更快..</div>'
      ,success: function(layero){
        var btn = layero.find('.layui-layer-btn');
        btn.find('.layui-layer-btn0').attr({
          href: 'https://at.umtrack.com/9nyamC?cid=483'
          ,target: '_blank'
        });
      }
    });
  }); 
}else{
  //无refer
  window.location.href=".";
}