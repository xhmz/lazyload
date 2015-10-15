var exports = (function () {
	var that = this;
	var _exports = {
		cls : "lazyload",
		srcStore : "original",
		init : function (obj) {
			if (!obj) {
				return false;
			}
			that.cls = obj.cls || this.cls;
			that.srcStore = obj.srcStore || this.srcStore;

			$(window).bind('scroll', function () {
				loadImg();
			})
			setTimeout(function () { //Ԥ����
				trigger();
			}, 90);
		}
	}
	
	function loadImg() {
		if (!that.imgList || that.imgList.length < 1) {
			return false;
		}
		that.imgList.each(function (index,val) {
			if (val && isVisual(val) && $(val).attr(that.srcStore)) {
				$(val).attr("src", $(val).attr(that.srcStore)).removeAttr(that.srcStore).removeClass(that.cls);
				that.imgList[index] = null;
			}
		})
	}
	
	
	function trigger() {
		that.imgList = $("img." + that.cls);
		$(window).trigger("scroll");
	}
	
	function isVisual(obj) {
		if (!obj) {
			return false;
		}
		var objHeight = obj.offsetHeight;
		var viewHeight = document.documentElement.clientHeight; //���ڿ������߶�
		var scrollY = document.documentElement.scrollTop || document.body.scrollTop; //������
		if (getElementTopLeft(obj).top + objHeight / 2 < viewHeight + scrollY) { //���������
			return true;
		} else {
			return false;
		}
	}
	function getElementTopLeft(obj) {
		var top = 0;
		var left = 0;
		while (obj) {
			top += obj.offsetTop;
			left += obj.offsetLeft;

			obj = obj.offsetParent;
		}

		return {
			top : top,
			left : left
		};
	}
	return _exports;
})()
