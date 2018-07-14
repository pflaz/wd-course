class Stopwatch extends React.Component {
	constructor(props) {
		super(props);

		this.reset = () => {
			this.state.times = {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			};
			this.forceUpdate();
		};

		this.start = () => {
			if (!this.state.running) {
				this.state.running = true;
				this.watch = setInterval(() => this.step(), 10);
			}
		};

		this.step = () => {
			if (!this.state.running) return;
			this.calculate();
			this.forceUpdate();
		};

		this.calculate = () => {
			this.state.times.miliseconds += 1;
			if (this.state.times.miliseconds >= 100) {
				this.state.times.seconds += 1;
				this.state.times.miliseconds = 0;
			}
			if (this.state.times.seconds >= 60) {
				this.state.times.minutes++;
				this.state.times.seconds = 0;
			}
		};

		this.stop = () => {
			this.state.running = false;
			clearInterval(this.watch);
		};

		this.saveResult = () => {
			this.addResult(this.format(this.state.times));
		};

		this.addResult = result => {
			this.state.resultsList.push(result);
			this.forceUpdate();
		};

		this.resetResultsList = () => {
			this.state.resultsList = [];
			this.forceUpdate();
		};

		this.state = {
			running: false,
			resultsList: [],
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			}
		};
	}

	render() {
		let timesList = [];
		for (let i = 0; i < this.state.resultsList.length; i++) {
			timesList.push(React.createElement(
				'li',
				{ key: 'time_' + i },
				this.state.resultsList[i]
			));
		}
		return React.createElement(
			'div',
			null,
			React.createElement(
				'nav',
				{ className: 'controls' },
				React.createElement(
					'a',
					{ href: '#', className: 'button', id: 'start', onClick: this.start },
					'Start'
				),
				React.createElement(
					'a',
					{ href: '#', className: 'button', id: 'stop', onClick: this.stop },
					'Stop'
				),
				React.createElement(
					'a',
					{ href: '#', className: 'button', id: 'reset', onClick: this.reset },
					'Reset'
				),
				React.createElement(
					'a',
					{ href: '#', className: 'button', id: 'saveResult', onClick: this.saveResult },
					'Save result'
				),
				React.createElement(
					'a',
					{ href: '#', className: 'button', id: 'resetResultsList', onClick: this.resetResultsList },
					'Reset results list'
				)
			),
			React.createElement(
				'div',
				{ className: 'stopwatch' },
				React.createElement(
					'div',
					null,
					this.format(this.state.times)
				)
			),
			React.createElement(
				'div',
				null,
				'Results list:',
				React.createElement(
					'ul',
					{ className: 'results' },
					timesList
				)
			)
		);
	}

	format(times) {
		return `${this.pad0(times.minutes)}:${this.pad0(times.seconds)}:${this.pad0(Math.floor(times.miliseconds))}`;
	}

	pad0(value) {
		let result = value.toString();
		if (result.length < 2) {
			result = '0' + result;
		}
		return result;
	}

}

ReactDOM.render(React.createElement(Stopwatch, null), document.getElementById('stopwatch'));
