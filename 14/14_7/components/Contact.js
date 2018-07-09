var Contact = React.createClass({
	propsTypes: {
		item: React.PropTypes.object.isRequired
	},
	render: function() {
		return (
			<div className={'contactItem'}>
				<img className={'contactImage'} src={'male-solid.svg'}/>
				<p className={'contactLabel'}>
					Imię: {this.props.item.firstName}
				</p>
				<p className={'contactLabel'}>
					Nazwisko: {this.props.item.lastName}
				</p>
				<a href={'mailto:' + this.props.item.email}>{this.props.item.email}</a>
			</div>
		);
	}
});