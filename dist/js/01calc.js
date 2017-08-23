define('01sub',function(require,exports,module){
	console.log("加载seajs中的sub");
	module.exports.sub = function(x,y){
		return x - y;
	}
})
define('01add',function(require,exports,module){
	console.log("加载seajs中的add");
	module.exports.add = function(x,y){
		return x + y;
	}
})
define('01calc',['01add','01sub'],function(require,exports,module){
	console.log("加载seajs中的calc");

	//加载add
	var add = require('01add');
	console.log(add.add(1,1));


	//加载sub
	var sub = require('01sub')
	console.log(sub.sub(1,1));
})
