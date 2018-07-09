var Counter = React.createClass({

	getDefaultProps: function() {
		console.log("getDefaultProps called");
		return {
			initialCount: 0
		};
	},

	getInitialState: function() {
		console.log("getInitialState called");
		return {
			counter: this.props.initialCount
		};
	},

	componentWillMount: function() {
		console.log("componentWillMount called");
		return;
	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},

	render: function() {
		return React.createElement('div', {},
			React.createElement('span', {}, 'Licznik: ' + this.state.counter),
			React.createElement('div', {},
				React.createElement('button', {onClick: this.increment}, "Dodaj"),
				React.createElement('button', {onClick: this.decrement}, "Odejmij")
				)
			);
	},

	componentDidMount: function() {
		console.log('componentDidMount called');
		console.log('Getting previous value from the server...');
		var value = 10;
		this.setState({
			counter: value
		});
		return;
	},

	componentWillReceiveProps: function(nextProps) {
		console.log('componentWillReceiveProps called with parameter:' + nextProps);
		return;
		
	},

	shouldComponentUpdate: function(nextProps, nextState) {
		console.log('shouldComponentUpdate called with parameters: ');
		console.log('nextProps:');
		console.log(nextProps);
		console.log('nextState:');
		console.log(nextState);
		if (nextState.counter != this.state.counter) {
			console.log('counter value has been changed - updating component');
			return true;
		} else {
			console.log('counter value has not been changed - update not needed')
			return false;
		}
	},

	componentWillUpdate: function(nextProps, nextState) {
		console.log('componentWillUpdate called');
		return;
		
	},

	componentDidUpdate: function(prevProps, prevState) {
		console.log('componentDidUpdate called with parameters:');
		console.log('Save value to the server...');
		
	},

	componentWillUnmount: function() {
		console.log('componentWillUnmount called');

	}
});

var element = React.createElement('div', {className: 'counters'}, 
	React.createElement('p', {}, 'Licznik 1:'),
	React.createElement(Counter),
	React.createElement('p', {}, 'Licznik 2:'),
	React.createElement(Counter),
	React.createElement('p', {}, 'Licznik 3:'),
	React.createElement(Counter)
	);
ReactDOM.render(element, document.getElementById('app'));