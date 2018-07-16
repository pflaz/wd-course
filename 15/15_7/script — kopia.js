class Stopwatch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			running: false,
			resultsList: [],
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0	
			}
		}
	}

	reset = () => {
		this.state.times = {
			minutes: 0,
			seconds: 0,
			miliseconds: 0
		};
		this.forceUpdate();
	}

	render() {
		let timesList = [];
		for (let i = 0; i < this.state.resultsList.length; i++) {
			timesList.push(<li key={'time_' + i}>{this.state.resultsList[i]}</li>);
		}
		return (
			<div>
				<nav className={'controls'}>
					<a href={'#'} className={'button'} id={'start'} onClick={this.start}>Start</a>
					<a href={'#'} className={'button'} id={'stop'} onClick={this.stop}>Stop</a> 
					<a href={'#'} className={'button'} id={'reset'} onClick={this.reset}>Reset</a> 
					<a href={'#'} className={'button'} id={'saveResult'} onClick={this.saveResult}>Save result</a> 
					<a href={'#'} className={'button'} id={'resetResultsList'} onClick={this.resetResultsList}>Reset results list</a> 
				</nav>
				<div className={'stopwatch'}>
					<div>{this.format(this.state.times)}</div>
				</div>
				<div>
					Results list:
					<ul className={'results'}>{timesList}</ul>
				</div>
			</div>
		);
	}

	format(times) {
		return `${this.pad0(times.minutes)}:${this.pad0(times.seconds)}:${this.pad0(Math.floor(times.miliseconds))}`;
	}

	start = () => {
		if (!this.state.running) {
			this.state.running = true;
			this.watch = setInterval( () => this.step(), 10);
		}
	}

	step = () => {
		if (!this.state.running) return;
		this.calculate();
		this.forceUpdate();
	}

	calculate = () => {
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

	stop = () => {
		this.state.running = false;
		clearInterval(this.watch);
	}

	saveResult = () => {
		this.addResult(this.format(this.state.times));
	}

	addResult = (result) => {
		this.state.resultsList.push(result);
		this.forceUpdate();
	}	

	pad0(value) {
		let result = value.toString();
		if (result.length < 2) {
			result = '0' + result;
		}
		return result;
	}

	resetResultsList = () => {
		this.state.resultsList = [];
		this.forceUpdate();
	}
}


ReactDOM.render(<Stopwatch />, document.getElementById('stopwatch'));



