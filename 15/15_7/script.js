class App extends React.Component {
	constructor() {
		super();
		this.state = {
			running: false,
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0	
			},
			resultsList: []
		}
	}

	handleAction = (event) => {
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
					resultsList:[...this.state.resultsList, format(this.state.times)]
				});
				break;
		}

	}

	render() {
		return(
			<div>
				<Navigation onAction={this.handleAction}/>
				<Stopwatch running={this.state.running} times={this.state.times} />
				<ResultsList resultsList={this.state.resultsList} />
			</div>
		);
	}
}

class Navigation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className={'controls'}>
				<a href={'#'} className={'button'} id={'start'} onClick={(event) => this.props.onAction(event)}>Start</a>
				<a href={'#'} className={'button'} id={'stop'} onClick={(event) => this.props.onAction(event)}>Stop</a> 
				<a href={'#'} className={'button'} id={'reset'} onClick={(event) => this.props.onAction(event)}>Reset</a> 
				<a href={'#'} className={'button'} id={'saveResult'} onClick={(event) => this.props.onAction(event)}>Save result</a> 
				<a href={'#'} className={'button'} id={'resetResultsList'} onClick={(event) => this.props.onAction(event)}>Reset results list</a> 
			</nav>
		);
	}

}

class Stopwatch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			running: false,

		}
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
		return (
			<div className={'stopwatch'}>
				<div>{format(this.props.times)}</div>
			</div>
		);
	}

	start = () => {
		if (!this.state.running) {
			this.setState({
				running: true
			});
			this.watch = setInterval( () => this.step(), 10);
		}
	}

	step = () => {
		if (!this.state.running) return;
		this.calculate();
		this.forceUpdate();
	}

	calculate = () => {
		this.props.times.miliseconds += 1;
		if (this.props.times.miliseconds >= 100) {
			this.props.times.seconds += 1;
			this.props.times.miliseconds = 0;
		}
		if (this.props.times.seconds >= 60) {
			this.props.times.minutes ++;
			this.props.times.seconds = 0;
		}
	}

	stop = () => {
		this.setState({
			running: false
		});
		clearInterval(this.watch);
	}

}

class ResultsList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let timesList = [];
		for (let i = 0; i < this.props.resultsList.length; i++) {
			timesList.push(<li key={'time_' + i}>{this.props.resultsList[i]}</li>);
		}
		return(
			<div>
				Results list:
				<ul className={'results'}>{timesList}</ul>
			</div>
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


ReactDOM.render(<App />, document.getElementById('stopwatch'));



