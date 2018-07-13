class Stopwatch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			running: false
		}
		this.reset();
		// this.print(this.times);
	}

	reset() {
		this.state.times = {
			minutes: 0,
			seconds: 0,
			miliseconds: 0
		};
	}

	render() {
		console.log(this.state.times);
		return (
			<div>{this.format(this.state.times)}</div>
		);
	}

	print() {
		this.display.innerText = this.format(this.times);
	}

	format(times) {
		console.log(times);
		return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
	}

	start() {
		if (!this.state.running) {
			this.state.running = true;
			this.watch = setInterval( () => this.step(), 10);
		}
	}

	step() {
		if (!this.state.running) return;
		this.calculate();
		this.print();
	}

	calculate() {
		this.state.times.miliseconds += 1;
		if (this.state.times.miliseconds >= 100) {
			this.state.times.seconds += 1;
			this.state.times.miliseconds = 0;
		}
		if (this.state.times.seconds >= 60) {
			this.state.times.minutes ++;
			this.state.times.seconds = 0;
		}
	}

	stop() {
		this.state.running = false;
		clearInterval(this.watch);
	}

	saveResult() {
		resultsList.addResult(this.format(this.state.times));
	}

}

class ResultsList {
	constructor(display) {
		this.display = display;
		this.reset();
	}

	reset() {
		this.display.innerText = "";
	}

	addResult(result) {
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(result));
		this.display.appendChild(li);
	}
}

function pad0(value) {
	let result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}

// const stopwatch = new Stopwatch(
// 	document.querySelector('.stopwatch')
// 	);

ReactDOM.render(<Stopwatch />, document.getElementById('stopwatch'));

const resultsList = new ResultsList(
	document.querySelector('.results')
	);

let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());
let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());
let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {stopwatch.reset(); stopwatch.print();});
let saveResultButton = document.getElementById('saveResult');
saveResultButton.addEventListener('click', () => stopwatch.saveResult());
let resetResultsListButton = document.getElementById('resetResultsList');
resetResultsListButton.addEventListener('click', () => resultsList.reset());

