Main={
	stickyHeaderHeight:208,
	stickyHeaderActive:false,
	init:function(){
		this.registerEvents();
		this.registerClipboard();
	},
	registerEvents:function(){
		$(window).on('scroll',function(){
			var scrollPosition=window.pageYOffset;
			if(scrollPosition>Main.stickyHeaderHeight){
				if(!Main.stickyHeaderActive){
					$("#navigation").addClass("sticky");
					$("#navigation-filler").show();
					Main.stickyHeaderActive=true;
				}
			}
			else if(Main.stickyHeaderActive){
				$("#navigation").removeClass("sticky");
				$("#navigation-filler").hide();
				Main.stickyHeaderActive=false;
			}
		});
	},
	registerClipboard:function(){
		var clipboard=new Clipboard('.clip');
		clipboard.on('success',function(e){
			var div=$(e.trigger).data("clipboard-success-div");
			if(div!=null){
				$("."+div).html("Copied to Clipboard")
			}
		return false;
		});
		$('.clip').click(function(e){e.preventDefault();});
	}
}

$(document).ready(function(){
	Main.init()
});