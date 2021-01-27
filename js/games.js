Games={
	activatedTags:[],
	init:function(){
		this.registerEvents();
	},
	registerEvents:function(){
		$(".selector a").click(function(e){
			var tag=$(this).data("tag");
			if(tag!=null&&tag.length>0){
				Games.filterBy(tag);
				}
			e.preventDefault();
		});
	},
	filterBy:function(tag){
		$('.selector a').each(function(){
			var element=$(this);
			var currentTag=element.data("tag");
			if(tag!=null&&tag==currentTag){
				element.addClass("selected");
			}else{
				element.removeClass("selected");
			}
		});
		if(tag!="all"){
			$("ul.game-list > li").each(function(){
				var element=$(this);
				var tags=element.data("tags");
				if(tags!=null&&tags.indexOf(tag)!=-1){
					element.show();
				}else{
					element.hide();
				}
			});
		}else{
			$("ul.game-list > li").each(function(){
				$(this).show();
			});
		}
	}
}

$(document).ready(function(){
	Games.init()
});