$(function(){
     var record = $(".all > .chatRecord"),
     	 content = $(".all > .chatContent"),
     	 textarea = $("textarea"),
     	 send = $("input:first"),
     	 reset = $("input:last");

     textarea.focus();

     send.click(function(event) {
     	if(content.val()!=""){
     		//sendData(content.val());
     	} else {
     		alert("发送内容不能为空！");
     	}
     });

     reset.click(function(event) {
     	textarea.val("");
     });

     function sendData(data){
        
     }
});