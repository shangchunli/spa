requirejs.config({
    "paths":{
      'jquery':'//apps.bdimg.com/libs/jquery/2.1.4/jquery.min'
    }
  });
  require(['jquery'],function($){
    $(function(){
        var $btnAdd = $('#add');
        $btnAdd.click(function(){
          require(['timer-button'],function(TimerButton){
            var tb = new TimerButton();
            tb.show({
                num:10,
                title:'添加发送验证码',
                onClick:function(){
                  console.log('点击了定时器')
                }
            });
          })         
        });
       
    });
  });