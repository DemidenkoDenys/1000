(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cast = function () {
	function cast() {
		_classCallCheck(this, cast);

		this.numbers = [0, 0, 0, 0, 0];
	}

	_createClass(cast, [{
		key: 'throw',
		value: function _throw(count) {
			var string = '';
			for (var i = 0; i < count; i++) {
				this.numbers[i] = this.getRandomInt(1, 6);
				string += this.numbers[i] + ' ';
			}
			// console.log(string);
			return this.numbers;
		}
	}, {
		key: 'getRandomInt',
		value: function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	}]);

	return cast;
}();

exports.default = new cast();

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var results = function () {
	function results() {
		_classCallCheck(this, results);

		this.nums = [0, 0, 0, 0, 0, 0];
		this.numbers = [];
		this.numbersIndexes = this.getNumbersArray(this.numbers.length);
	}

	_createClass(results, [{
		key: 'getSum',
		value: function getSum(numbers) {
			this.numbers = numbers;
			this.setNumberSums(numbers);
			this.showNumbers();
			this.showSums();
			this.checkResult();
		}
	}, {
		key: 'checkResult',
		value: function checkResult() {
			var max = this.getMaxOfArray(this.nums),
			    sum = 0;

			switch (max) {
				case 5:
					sum = 1000;break;
				case 1:
					sum = this.checkStreet(max);break;
				case 3:
				case 4:
					sum = this.checkThreeFour(max);break;
				default:
					sum = this.checkFiveTen(true, true);
			}

			console.log(sum);
		}
	}, {
		key: 'checkStreet',
		value: function checkStreet(max) {
			if (max === 1 && this.nums.reduce(function (a, b) {
				return b === 1 ? a + b : a + 0;
			}, 0) === 5) {
				if (!this.nums[0]) return 250;else if (!this.nums[5]) return 125;else return this.checkFiveTen(true, true);
			} else return this.checkFiveTen(true, true);
		}
	}, {
		key: 'checkThreeFour',
		value: function checkThreeFour(max) {
			var threeFourSum = 0,
			    fives = false,
			    tens = false;

			for (var i = 0; i < 6; i++) {
				if (this.nums[i] === max) {
					threeFourSum = i === 0 ? max === 4 ? 200 : 100 : (i + 1) * (max === 4 ? 20 : 10);
					if (i === 0) tens = true;
					if (i === 4) fives = true;
				}
			}

			threeFourSum += this.checkFiveTen(!fives, !tens);
			return threeFourSum;
		}
	}, {
		key: 'checkFiveTen',
		value: function checkFiveTen(five, ten) {
			return (five ? this.nums[4] * 5 : 0) + (ten ? this.nums[0] * 10 : 0);
		}
	}, {
		key: 'getNumbersArray',
		value: function getNumbersArray(count) {
			return [0, 1, 2, 3, 4].filter(function (value) {
				return value <= count - 1;
			});
		}
	}, {
		key: 'setNumberSums',
		value: function setNumberSums(numbers) {
			this.clearNumbers();
			for (var i = 0; i < 5; i++) {
				this.nums[numbers[i] - 1]++;
			}
		}
	}, {
		key: 'showSums',
		value: function showSums() {
			var string = '';
			for (var l = 0; l < 6; l++) {
				string += this.nums[l];
			}console.log(string);
		}
	}, {
		key: 'showNumbers',
		value: function showNumbers() {
			var string = '';
			for (var l = 0; l < 5; l++) {
				string += this.numbers[l] + " ";
			}console.log(string);
		}
	}, {
		key: 'getMaxOfArray',
		value: function getMaxOfArray(numArray) {
			return Math.max.apply(null, numArray);
		}
	}, {
		key: 'clearNumbers',
		value: function clearNumbers() {
			this.nums = [0, 0, 0, 0, 0, 0];
		}
	}]);

	return results;
}();

exports.default = new results();

},{}],3:[function(require,module,exports){
(function (global){
"use strict";

var _general = require("./pages/general");

var _general2 = _interopRequireDefault(_general);

var _home = require("./pages/home");

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var init = null;

switch (global.vars.page) {
	case 'home_page':
		init = _home2.default.init.bind(_home2.default);
		break;
	default:
		init = function init() {
			console.log('default init');
		};
}

$(document).ready(_general2.default.init(), init());

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./pages/general":4,"./pages/home":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	init: function init() {
		this.generalFunction();
	},
	generalFunction: function generalFunction() {}
};

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _cast = require('../classes/cast');

var _cast2 = _interopRequireDefault(_cast);

var _results = require('../classes/results');

var _results2 = _interopRequireDefault(_results);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

	numbers: [0, 0, 0, 0, 0],

	init: function init() {
		this.play();
	},
	play: function play() {
		var _this = this;

		setInterval(function () {}, 10);

		$('#throw').on('click', function (e) {
			e.preventDefault();

			_this.numbers = _cast2.default.throw(5);

			// RESULTS.getSum(this.numbers);
			_results2.default.getSum([1, 5, 1, 5, 1]);
		});
	}
};

},{"../classes/cast":1,"../classes/results":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHNcXGpzXFxjbGFzc2VzXFxjYXN0LmpzIiwiYXNzZXRzXFxqc1xcY2xhc3Nlc1xccmVzdWx0cy5qcyIsImFzc2V0c1xcanNcXGFzc2V0c1xcanNcXGdsb2JhbC5qcyIsImFzc2V0c1xcanNcXHBhZ2VzXFxnZW5lcmFsLmpzIiwiYXNzZXRzXFxqc1xccGFnZXNcXGhvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQU0sSTtBQUVMLGlCQUFhO0FBQUE7O0FBQ1osT0FBSyxPQUFMLEdBQWUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixDQUFmO0FBQ0E7Ozs7eUJBRUssSyxFQUFNO0FBQ1gsT0FBSSxTQUFTLEVBQWI7QUFDQSxRQUFJLElBQUksSUFBSSxDQUFaLEVBQWUsSUFBSSxLQUFuQixFQUEwQixHQUExQixFQUE4QjtBQUMxQixTQUFLLE9BQUwsQ0FBYSxDQUFiLElBQWtCLEtBQUssWUFBTCxDQUFrQixDQUFsQixFQUFxQixDQUFyQixDQUFsQjtBQUNBLGNBQVUsS0FBSyxPQUFMLENBQWEsQ0FBYixJQUFrQixHQUE1QjtBQUNIO0FBQ0U7QUFDQSxVQUFPLEtBQUssT0FBWjtBQUNIOzs7K0JBRVksRyxFQUFLLEcsRUFBSztBQUNuQixVQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxNQUFpQixNQUFNLEdBQU4sR0FBWSxDQUE3QixDQUFYLElBQThDLEdBQXJEO0FBQ0g7Ozs7OztrQkFHYSxJQUFJLElBQUosRTs7Ozs7Ozs7Ozs7OztJQ3JCVCxPO0FBRUwsb0JBQWE7QUFBQTs7QUFDWixPQUFLLElBQUwsR0FBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLENBQVo7QUFDQSxPQUFLLE9BQUwsR0FBZSxFQUFmO0FBQ0EsT0FB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QUFJZCxnQkFKYyw2QkFJSSxDQUVqQjtBQU5hLEM7Ozs7Ozs7OztBQ0FmOzs7O0FBQ0E7Ozs7OztrQkFFZTs7QUFFZCxVQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FGSzs7QUFJZCxLQUpjLGtCQUlQO0FBQ04sT0FBSyxJQUFMO0FBQ0EsRUFOYTtBQVFkLEtBUmMsa0JBUVA7QUFBQTs7QUFDTixjQUFZLFlBQU0sQ0FFakIsQ0FGRCxFQUVHLEVBRkg7O0FBSUEsSUFBRSxRQUFGLEVBQVksRUFBWixDQUFlLE9BQWYsRUFBd0IsVUFBQyxDQUFELEVBQU87QUFDOUIsS0FBRSxjQUFGOztBQUVBLFNBQUssT0FBTCxHQUFlLGVBQUssS0FBTCxDQUFXLENBQVgsQ0FBZjs7QUFFQTtBQUNBLHFCQUFRLE1BQVIsQ0FBZSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBQWY7QUFDQSxHQVBEO0FBUUc7QUFyQlUsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjbGFzcyBjYXN0e1xyXG5cclxuXHRjb25zdHJ1Y3Rvcigpe1xyXG5cdFx0dGhpcy5udW1iZXJzID0gWzAsIDAsIDAsIDAsIDBdO1xyXG5cdH1cclxuXHJcblx0dGhyb3coY291bnQpe1xyXG5cdFx0bGV0IHN0cmluZyA9ICcnO1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspe1xyXG4gICAgXHRcdHRoaXMubnVtYmVyc1tpXSA9IHRoaXMuZ2V0UmFuZG9tSW50KDEsIDYpO1xyXG4gICAgXHRcdHN0cmluZyArPSB0aGlzLm51bWJlcnNbaV0gKyAnICc7XHJcblx0XHR9XHJcbiAgICBcdC8vIGNvbnNvbGUubG9nKHN0cmluZyk7XHJcbiAgICBcdHJldHVybiB0aGlzLm51bWJlcnM7XHJcblx0fVxyXG5cclxuXHRnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcclxuICAgIFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgY2FzdCgpOyIsImNsYXNzIHJlc3VsdHN7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHR0aGlzLm51bXMgPSBbMCwgMCwgMCwgMCwgMCwgMF07XHJcblx0XHR0aGlzLm51bWJlcnMgPSBbXTtcclxuXHRcdHRoaXMubnVtYmVyc0luZGV4ZXMgPSB0aGlzLmdldE51bWJlcnNBcnJheSh0aGlzLm51bWJlcnMubGVuZ3RoKTtcclxuXHR9XHJcblxyXG5cdGdldFN1bShudW1iZXJzKXtcclxuXHRcdHRoaXMubnVtYmVycyA9IG51bWJlcnM7XHJcblx0XHR0aGlzLnNldE51bWJlclN1bXMobnVtYmVycyk7XHJcblx0XHR0aGlzLnNob3dOdW1iZXJzKCk7XHJcblx0XHR0aGlzLnNob3dTdW1zKCk7XHJcblx0XHR0aGlzLmNoZWNrUmVzdWx0KCk7XHJcblx0fVxyXG5cclxuXHRjaGVja1Jlc3VsdCgpe1xyXG5cdFx0bGV0IG1heCA9IHRoaXMuZ2V0TWF4T2ZBcnJheSh0aGlzLm51bXMpLCBzdW0gPSAwO1xyXG5cclxuXHRcdHN3aXRjaChtYXgpe1xyXG5cdFx0XHRjYXNlIDU6IHN1bSA9IDEwMDA7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIDE6IHN1bSA9IHRoaXMuY2hlY2tTdHJlZXQobWF4KTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgMzpcclxuXHRcdFx0Y2FzZSA0OiBzdW0gPSB0aGlzLmNoZWNrVGhyZWVGb3VyKG1heCk7IGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OiBzdW0gPSB0aGlzLmNoZWNrRml2ZVRlbih0cnVlLCB0cnVlKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zb2xlLmxvZyhzdW0pO1xyXG5cdH1cclxuXHJcblx0Y2hlY2tTdHJlZXQobWF4KXtcclxuXHRcdGlmKG1heCA9PT0gMSAmJiB0aGlzLm51bXMucmVkdWNlKFxyXG5cdFx0XHQoYSwgYikgPT4geyByZXR1cm4gYiA9PT0gMSA/IGEgKyBiIDogYSArIDAgfSwgMCkgPT09IDUpe1xyXG5cdFx0XHRpZighdGhpcy5udW1zWzBdKSByZXR1cm4gMjUwO1xyXG5cdFx0XHRlbHNlIGlmKCF0aGlzLm51bXNbNV0pIHJldHVybiAxMjU7XHJcblx0XHRcdGVsc2UgcmV0dXJuIHRoaXMuY2hlY2tGaXZlVGVuKHRydWUsIHRydWUpO1xyXG5cdFx0fSAgIGVsc2UgcmV0dXJuIHRoaXMuY2hlY2tGaXZlVGVuKHRydWUsIHRydWUpO1xyXG5cdH1cclxuXHJcblx0Y2hlY2tUaHJlZUZvdXIobWF4KXtcclxuXHRcdGxldCB0aHJlZUZvdXJTdW0gPSAwLCBmaXZlcyA9IGZhbHNlLCB0ZW5zID0gZmFsc2U7XHJcblx0XHRcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCA2OyBpKyspe1xyXG5cdFx0XHRpZih0aGlzLm51bXNbaV0gPT09IG1heCl7XHJcblx0XHRcdFx0dGhyZWVGb3VyU3VtID0gaSA9PT0gMCA/IChtYXggPT09IDQgPyAyMDAgOiAxMDApIDogKGkgKyAxKSAqIChtYXggPT09IDQgPyAyMCA6IDEwKTtcclxuXHRcdFx0XHRpZihpID09PSAwKSB0ZW5zID0gdHJ1ZTtcclxuXHRcdFx0XHRpZihpID09PSA0KSBmaXZlcyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aHJlZUZvdXJTdW0gKz0gdGhpcy5jaGVja0ZpdmVUZW4oIWZpdmVzLCAhdGVucyk7XHJcblx0XHRyZXR1cm4gdGhyZWVGb3VyU3VtO1xyXG5cdH1cclxuXHJcblx0Y2hlY2tGaXZlVGVuKGZpdmUsIHRlbil7XHJcblx0XHRyZXR1cm4gKChmaXZlKSA/IHRoaXMubnVtc1s0XSAqIDUgOiAwKSArICgodGVuKSA/IHRoaXMubnVtc1swXSAqIDEwIDogMCk7XHJcblx0fVxyXG5cclxuXHRnZXROdW1iZXJzQXJyYXkoY291bnQpe1xyXG5cdFx0cmV0dXJuIFswLCAxLCAyLCAzLCA0XS5maWx0ZXIoKHZhbHVlKSA9PiB7XHJcblx0XHRcdHJldHVybiB2YWx1ZSA8PSBjb3VudCAtIDE7XHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0c2V0TnVtYmVyU3VtcyhudW1iZXJzKXtcclxuXHRcdHRoaXMuY2xlYXJOdW1iZXJzKCk7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgNTsgaSsrKVxyXG5cdFx0XHR0aGlzLm51bXNbbnVtYmVyc1tpXSAtIDFdKys7XHJcblx0fVxyXG5cclxuXHRzaG93U3Vtcygpe1xyXG5cdFx0bGV0IHN0cmluZyA9ICcnO1xyXG5cdFx0Zm9yKGxldCBsID0gMDsgbCA8IDY7IGwrKylcclxuXHRcdFx0c3RyaW5nICs9IHRoaXMubnVtc1tsXTtcclxuXHRcdGNvbnNvbGUubG9nKHN0cmluZyk7XHJcblx0fVxyXG5cclxuXHRzaG93TnVtYmVycygpe1xyXG5cdFx0bGV0IHN0cmluZyA9ICcnO1xyXG5cdFx0Zm9yKGxldCBsID0gMDsgbCA8IDU7IGwrKylcclxuXHRcdFx0c3RyaW5nICs9IHRoaXMubnVtYmVyc1tsXSArIFwiIFwiO1xyXG5cdFx0Y29uc29sZS5sb2coc3RyaW5nKTtcdFxyXG5cdH1cclxuXHRcclxuXHRnZXRNYXhPZkFycmF5KG51bUFycmF5KSB7XHJcbiBcdFx0cmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIG51bUFycmF5KTtcclxuXHR9XHJcblxyXG5cdGNsZWFyTnVtYmVycygpe1xyXG5cdFx0dGhpcy5udW1zID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyByZXN1bHRzKCk7IiwiaW1wb3J0IEdFTkVSQUwgZnJvbSBcIi4vcGFnZXMvZ2VuZXJhbFwiO1xuaW1wb3J0IEhPTUUgZnJvbSBcIi4vcGFnZXMvaG9tZVwiO1xuXG5sZXQgaW5pdCA9IG51bGw7XG5cbnN3aXRjaCAoZ2xvYmFsLnZhcnMucGFnZSkge1xuXHRjYXNlICdob21lX3BhZ2UnOlxuXHRcdGluaXQgPSBIT01FLmluaXQuYmluZChIT01FKTtcblx0XHRicmVhaztcblx0ZGVmYXVsdDpcblx0XHRpbml0ID0gKCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ2RlZmF1bHQgaW5pdCcpO1xuXHRcdH07XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KEdFTkVSQUwuaW5pdCgpLCBpbml0KCkpOyIsImV4cG9ydCBkZWZhdWx0IHtcblx0aW5pdCgpIHtcblx0XHR0aGlzLmdlbmVyYWxGdW5jdGlvbigpO1xuXHR9LFxuXHRnZW5lcmFsRnVuY3Rpb24oKSB7XG5cdFx0XG5cdH1cbn07IiwiaW1wb3J0IENBU1QgZnJvbSAnLi4vY2xhc3Nlcy9jYXN0JztcbmltcG9ydCBSRVNVTFRTIGZyb20gJy4uL2NsYXNzZXMvcmVzdWx0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuXHRudW1iZXJzOiBbMCwgMCwgMCwgMCwgMF0sXG5cdFxuXHRpbml0KCkge1xuXHRcdHRoaXMucGxheSgpO1xuXHR9LFxuXG5cdHBsYXkoKSB7XG5cdFx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XG5cdFx0fSwgMTApO1xuXG5cdFx0JCgnI3Rocm93Jykub24oJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0dGhpcy5udW1iZXJzID0gQ0FTVC50aHJvdyg1KTtcblxuXHRcdFx0Ly8gUkVTVUxUUy5nZXRTdW0odGhpcy5udW1iZXJzKTtcblx0XHRcdFJFU1VMVFMuZ2V0U3VtKFsxLCA1LCAxLCA1LCAxXSk7XG5cdFx0fSk7XG4gICAgfSxcbn07XG5cbiJdfQ==
