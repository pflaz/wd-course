class App extends React.Component {
	constructor() {
		super();

		this.handleAction = event => {
			const action = event.target.id;
			switch (action) {
				case 'start':
					this.setState({
						running: true
					});
					break;

				case 'stop':
					this.setState({
						running: false
					});
					break;

				case 'reset':
					this.setState({
						times: {
							minutes: 0,
							seconds: 0,
							miliseconds: 0
						}
					});
					break;

				case 'resetResultsList':
					this.setState({
						resultsList: []
					});
					break;

				case 'saveResult':
					this.setState({
						resultsList: [...this.state.resultsList, format(this.state.times)]
					});
					break;
			}
		};

		this.state = {
			running: false,
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			},
			resultsList: []
		};
	}

	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Navigation, { onAction: this.handleAction }),
			React.createElement(Stopwatch, { running: this.state.running, times: this.state.times }),
			React.createElement(ResultsList, { resultsList: this.state.resultsList })
		);
	}
}

class Navigation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return React.createElement(
			'nav',
			{ className: 'controls' },
			React.createElement(
				'a',
				{ href: '#', className: 'button', id: 'start', onClick: event => this.props.onAction(event) },
				'Start'
			),
			React.createElement(
				'a',
				{ href: '#', className: 'button', id: 'stop', onClick: event => this.props.onAction(event) },
				'Stop'
			),
			React.createElement(
				'a',
				{ href: '#', className: 'button', id: 'reset', onClick: event => this.props.onAction(event) },
				'Reset'
			),
			React.createElement(
				'a',
				{ href: '#', className: 'button', id: 'saveResult', onClick: event => this.props.onAction(event) },
				'Save result'
			),
			React.createElement(
				'a',
				{ href: '#', className: 'button', id: 'resetResultsList', onClick: event => this.props.onAction(event) },
				'Reset results list'
			)
		);
	}

}

class Stopwatch extends React.Component {
	constructor(props) {
		super(props);

		this.start = () => {
			if (!this.state.running) {
				this.setState({
					running: true
				});
				this.watch = setInterval(() => this.step(), 10);
			}
		};

		this.step = () => {
			if (!this.state.running) return;
			this.calculate();
			this.forceUpdate();
		};

		this.calculate = () => {
			this.props.times.miliseconds += 1;
			if (this.props.times.miliseconds >= 100) {
				this.props.times.seconds += 1;
				this.props.times.miliseconds = 0;
			}
			if (this.props.times.seconds >= 60) {
				this.props.times.minutes++;
				this.props.times.seconds = 0;
			}
		};

		this.stop = () => {
			this.setState({
				running: false
			});
			clearInterval(this.watch);
		};

		this.state = {
			running: false

		};
	}

	componentWillReceiveProps(nextProps) {
		if (!this.state.running && nextProps.running) {
			this.start();
		}
		if (this.state.running && !nextProps.running) {
			this.stop();
		}
	}

	render() {
		return React.createElement(
			'div',
			{ className: 'stopwatch' },
			React.createElement(
				'div',
				null,
				format(this.props.times)
			)
		);
	}

}

class ResultsList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let timesList = [];
		for (let i = 0; i < this.props.resultsList.length; i++) {
			timesList.push(React.createElement(
				'li',
				{ key: 'time_' + i },
				this.props.resultsList[i]
			));
		}
		return React.createElement(
			'div',
			null,
			'Results list:',
			React.createElement(
				'ul',
				{ className: 'results' },
				timesList
			)
		);
	}
}

function format(times) {
	return `${this.pad0(times.minutes)}:${this.pad0(times.seconds)}:${this.pad0(Math.floor(times.miliseconds))}`;
}

function pad0(value) {
	let result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}

ReactDOM.render(React.createElement(App, null), document.getElementById('stopwatch'));
