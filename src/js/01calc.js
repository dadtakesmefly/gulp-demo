define(function(require,exports,module){
	console.log("加载seajs中的calc");

	//加载add
	var add = require("./01add.js");
	console.log(add.add(1,1));


	//加载sub
	var sub = require("./01sub.js")
	console.log(sub.sub(1,1));
})