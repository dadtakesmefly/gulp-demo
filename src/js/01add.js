define(function(require,exports,module){
	console.log("加载seajs中的add");
	module.exports.add = function(x,y){
		return x + y;
	}
})