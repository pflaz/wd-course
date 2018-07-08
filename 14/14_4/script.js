/*
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
*/

///////////////////

var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		img: '1.png'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		img: '2.png'
	}
];

var MovieImage = React.createClass({
	PropTypes: {
		img: React.PropTypes.string.isRequired
	},
	render: function() {
		return React.createElement('img', {src: this.props.img});
	}
});

var MovieDescription = React.createClass({
	PropTypes: {
		desc: React.PropTypes.string.isRequired
	},
	render: function() {
		return React.createElement('p', {}, this.props.desc);
	}
});

var MovieTitle = React.createClass({
	PropTypes: {
		title: React.PropTypes.string.isRequired
	},
	render: function() {
		return React.createElement('h2', {}, this.props.title);
	}
});


var Movie = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired
	},
	render: function() {
		return (
			React.createElement('li', {}, 
				React.createElement(MovieTitle, {title: this.props.item.title}),
				React.createElement(MovieDescription, {desc: this.props.item.desc}),
				React.createElement(MovieImage, {img: this.props.item.img})
			)
		);
	}
});


var MoviesList = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired
	},
	render: function() {
		var movies = this.props.items.map(function (movie) {
			return React.createElement(Movie, {item: movie, key: movie.id});
		});
		return (
			React.createElement('ul', {}, movies)
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			React.createElement('div', {}, 
				React.createElement('h2', {}, 'Lista filmów'),
				React.createElement(MoviesList, {items: movies})
			)
		);
	}
});

var app = React.createElement(App);

ReactDOM.render(app, document.getElementById('app'));