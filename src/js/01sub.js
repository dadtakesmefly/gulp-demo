define(function(require,exports,module){
	console.log("加载seajs中的sub");
	module.exports.sub = function(x,y){
		return x - y;
	}
})