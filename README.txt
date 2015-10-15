/////////////////lazyload.js///////////

其中 exports 对象中有2个成员变量提供给用户自定义。cls：需要懒加载的img标签中定义的className，srcStore：用于替换图片的属性名称。
默认为： cls : "lazyload",
	     srcStore : "original".

调用方式：引入jq、lazyload.js，

	默认方式：exports.init({})----- <img class="lazyload" original="img/img.jpg" src="img/blank.jpg">
	自定义方式：exports.init({cls:"xxx",srcStore:"xxxx"})----- <img class="xxx" xxxx="img/img.jpg" src="img/blank.jpg">