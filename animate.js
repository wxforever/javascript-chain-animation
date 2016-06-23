
;(function(){
	/*
* @param {string}animation eg.'width 200px 1s linear 2s'
*
*/
	
	function animate(animation){

		
		var _this=this;
		
        var animation=animation;
        var paramArr=animation.split(' ');
		var paramkey=paramArr.slice(0,1);
		var paramValue=paramArr.splice(1,1);
		var cssText=paramArr.join(' ');
		if(!_this.chain){
		
        _this.chain=(paramArr[3]?parseInt(paramArr[1])+parseInt(paramArr[1]):parseInt(paramArr[1]))*1000;
		_this.style.cssText+='-webkit-transition:'+cssText+';'+paramkey+':'+paramValue+';';
		
		return _this;
		}else{
			
			
			var chain=_this.chain;//复制chain
			_this.chain+=(paramArr[3]?parseInt(paramArr[1])+parseInt(paramArr[1]):parseInt(paramArr[1]))*1000;
			setTimeout(function(){
         var paramArr=animation.split(' ');
		var paramkey=paramArr.slice(0,1);
		var paramValue=paramArr.splice(1,1);
		var cssText=paramArr.join(' ');
       
        _this.style.cssText+='-webkit-transition:'+cssText+';'+paramkey+':'+paramValue+';';
       
			},chain);
			return _this;
		}
		
		

		

	}
	window.animate=animate;//添加到全局

})()

