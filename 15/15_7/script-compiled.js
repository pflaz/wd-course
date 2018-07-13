"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = function (_React$Component) {
	_inherits(Stopwatch, _React$Component);

	function Stopwatch(props) {
		_classCallCheck(this, Stopwatch);

		var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this, props));

		_this.state = {
			running: false
		};
		_this.reset();
		// this.print(this.times);
		return _this;
	}

	_createClass(Stopwatch, [{
		key: "reset",
		value: function reset() {
			this.state.times = {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			};
		}
	}, {
		key: "render",
		value: function render() {
			console.log(this.state.times);
			return React.createElement(
				"div",
				null,
				this.format(this.state.times)
			);
		}
	}, {
		key: "print",
		value: function print() {
			this.display.innerText = this.format(this.times);
		}
	}, {
		key: "format",
		value: function format(times) {
			console.log(times);
			return pad0(times.minutes) + ":" + pad0(times.seconds) + ":" + pad0(Math.floor(times.miliseconds));
		}
	}, {
		key: "start",
		value: function start() {
			var _this2 = this;

			if (!this.state.running) {
				this.state.running = true;
				this.watch = setInterval(function () {
					return _this2.step();
				}, 10);
			}
		}
	}, {
		key: "step",
		value: function step() {
			if (!this.state.running) return;
			this.calculate();
			this.print();
		}
	}, {
		key: "calculate",
		value: function calculate() {
			this.state.times.miliseconds += 1;
			if (this.state.times.miliseconds >= 100) {
				this.state.times.seconds += 1;
				this.state.times.miliseconds = 0;
			}
			if (this.state.times.seconds >= 60) {
				this.state.times.minutes++;
				this.state.times.seconds = 0;
			}
		}
	}, {
		key: "stop",
		value: function stop() {
			this.state.running = false;
			clearInterval(this.watch);
		}
	}, {
		key: "saveResult",
		value: function saveResult() {
			resultsList.addResult(this.format(this.state.times));
		}
	}]);

	return Stopwatch;
}(React.Component);

var ResultsList = function () {
	function ResultsList(display) {
		_classCallCheck(this, ResultsList);

		this.display = display;
		this.reset();
	}

	_createClass(ResultsList, [{
		key: "reset",
		value: function reset() {
			this.display.innerText = "";
		}
	}, {
		key: "addResult",
		value: function addResult(result) {
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(result));
			this.display.appendChild(li);
		}
	}]);

	return ResultsList;
}();

function pad0(value) {
	var result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}

// const stopwatch = new Stopwatch(
// 	document.querySelector('.stopwatch')
// 	);

ReactDOM.render(React.createElement(Stopwatch, null), document.getElementById('stopwatch'));

var resultsList = new ResultsList(document.querySelector('.results'));

var startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
	return stopwatch.start();
});
var stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
	return stopwatch.stop();
});
var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function () {
	stopwatch.reset();stopwatch.print();
});
var saveResultButton = document.getElementById('saveResult');
saveResultButton.addEventListener('click', function () {
	return stopwatch.saveResult();
});
var resetResultsListButton = document.getElementById('resetResultsList');
resetResultsListButton.addEventListener('click', function () {
	return resultsList.reset();
});
