$(function(){
 	var $name = $(".txt1 > [type=text]"),
        $pad = $(".txt2 > [type=password]");

        $name.focus();

	//登录判断
	$(".btn > input:first").click(function(event) {
        if($name.val().replace(" ", "") != "" && $pad.val().replace(" ", "") != ""){
        	Login($name.val(),$pad.val());
        } else {
        	if($name.val().replace(" ", "") == ""){
        		alert("用户名不能为空！");
        		$name.focus();
        		return false;
        	} else {
        		alert("密码不能为空！");
        		$pad.focus();
        		return false;
        	}
        }
        window.location.href = "http://localhost:8080/Chat/index/index.html";
	});

	//取消登陆
	$(".btn > input:last").click(function(event) {
		$name.val("");
		$name.focus();
		$pad.val("");
	});

    //登陆
 
 function Login(name,pad){
     $("#loginMsg").ajaxStart(function() {
        $(this).show().html("正在发送登录请求。。。");
     });
     $("#loginMsg").ajaxStop(function() {
        $(this).html("请求处理已完成。").hide();
     });
     $.ajax({
        type: "GET",
        url: "data.json",
        data: "name=" + name + "&pad=" + pad,
        success: function(data){
            if(data.state == "success"){
                window.location.href = "http://localhost:8080/Chat/index.html";
            } else {
                alert("用户名或密码不正确");
                return false;
            }
        }
     });
 }
});


