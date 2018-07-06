var GalleryItem = React.createClass({
	propTypes: {
		image: React.PropTypes.object.isRequired,
	},
	render: function() {
		return (
			React.createElement('div', {},
				React.createElement('h2', {}, this.props.image.name),
				React.createElement('img', {src: this.props.image.src})
			)
		);
	},
});

var image = {
	name: 'Kotek',
	src: 'http://imgur.com/n8OYCzR.png'
};

var element = React.createElement(GalleryItem, {image: image});
ReactDOM.render(element, document.getElementById('app'));