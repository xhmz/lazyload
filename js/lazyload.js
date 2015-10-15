var exports = {
	   cls : "lazyload",
	   srcStore : "original",
	   init : function(obj) {
			if(!obj) {
				return false;
			}
			that = this;
			that.cls = obj.cls || this.cls;
			that.srcStore = obj.srcStore || this.srcStore;
			
			$(window).bind('scroll',function(){
                
				var imgList = $("img."+that.cls);
				if(!imgList || imgList.length < 1) {
					return false;
				}
				imgList.each(function(){
					if(that.isVisual(this) && $(this).attr(that.srcStore)) {
						$(this).attr("src",$(this).attr(that.srcStore)).removeAttr(that.srcStore).removeClass(that.cls);
					}
				})
			})
			setTimeout(function() {  //预加载
				$(window).trigger("scroll");		
			},90);
	   },
	   isVisual : function(obj) {
			if(!obj){
				return false;
			}
			var objHeight = obj.offsetHeight;
			var viewHeight = document.documentElement.clientHeight; //窗口可视区高度
			var scrollY = document.documentElement.scrollTop || document.body.scrollTop; //滚动条
			if(this.getElementTopLeft(obj).top+objHeight/2 < viewHeight + scrollY){ //进入可视区
			   return true;
			}else{
			   return false;
			}
	   },
	   getElementTopLeft : function(obj) {
			var top = 0;
			var left = 0;
			while(obj){
				top += obj.offsetTop;
				left += obj.offsetLeft;

				obj = obj.offsetParent;
			}

			return {top:top,left:left};
	   }
	}