$(function(){
    var n=$("#password"),
        o=$("#pwd-text"),
        e=$("#eye");
    n.on("input",function(){
      o.val(n.val())
    }),
   
    e.mouseover(function(){
      n.attr('type','hidden');
      o.attr('type','text');
      $(this).attr('src','./see.jpg');
  
    }),
    e.mouseout(function(){
      n.attr('type','password');
      o.attr('type','hidden');
  
      e.attr("src","./notsee.jpg"); 
    })
  });